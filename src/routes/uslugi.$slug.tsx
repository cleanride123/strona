import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF, SERVICES, getService } from "@/lib/services";

export const Route = createFileRoute("/uslugi/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const service = loaderData ? getService(loaderData.slug) : undefined;
    if (!service) {
      return { meta: [{ title: "Usługa — CleanRide" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${service.title} — CleanRide`;
    return {
      meta: [
        { title },
        { name: "description", content: service.description },
        { property: "og:title", content: title },
        { property: "og:description", content: service.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicePage,
});

function ServiceNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Nie znaleziono usługi</h1>
        <p className="mt-2 text-muted-foreground">Ta usługa nie istnieje lub została przeniesiona.</p>
        <Button asChild className="mt-6">
          <Link to="/" hash="uslugi">
            Zobacz wszystkie usługi
          </Link>
        </Button>
      </div>
    </div>
  );
}

// Układa zdjęcia tak, by siatka wypełniła się bez pustych pól.
function galleryLayout(n: number) {
  const featured = {
    none: "aspect-[4/3]",
    big: "aspect-[4/3] sm:col-span-2 lg:row-span-2 lg:h-full",
    wide: "aspect-[4/3] sm:col-span-2 lg:aspect-[8/3]",
    banner: "aspect-[16/9] sm:col-span-2 lg:col-span-3",
  };
  if (n === 1) return { cols: "lg:grid-cols-1", featured: featured.banner };
  if (n === 2 || n === 4) return { cols: "lg:grid-cols-2", featured: featured.none };
  if (n % 3 === 0) return { cols: "lg:grid-cols-3", featured: featured.big };
  if (n % 3 === 1) return { cols: "lg:grid-cols-3", featured: featured.banner };
  return { cols: "lg:grid-cols-3", featured: featured.wide };
}

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug)!;
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const gallery = galleryLayout(service.images.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="font-heading text-xl font-bold tracking-wide">
            Clean<span className="text-primary">Ride</span>
          </Link>
          <Button asChild size="sm">
            <a href={PHONE_HREF}>
              <Phone className="mr-2 h-4 w-4" />
              {PHONE}
            </a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/"
          hash="uslugi"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Wszystkie usługi
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <service.icon className="h-7 w-7" />
          </div>
          <div>
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">{service.title}</h1>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {service.intro}
            </p>
          </div>
        </div>

        {service.images.length > 0 && (
          <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${gallery.cols}`}>
            {service.images.map((img, i) => (
              <img
                key={img.url}
                src={img.url}
                alt={img.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={`w-full rounded-2xl object-cover ${
                  i === 0 ? gallery.featured : "aspect-[4/3]"
                }`}
              />
            ))}
          </div>
        )}

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="font-heading text-2xl font-bold">Co obejmuje usługa</h2>
            <ul className="mt-5 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-heading text-lg font-semibold">Dla kogo?</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{service.forWhom}</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold">Jak pracujemy</h2>
            <ol className="mt-5 space-y-5">
              {service.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="mt-14 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <h2 className="font-heading text-2xl font-bold">Umów wizytę lub zapytaj o wycenę</h2>
          <p className="mt-2 text-muted-foreground">
            Dojeżdżamy do klienta w Oświęcimiu, Zaborzu i okolicach. Czynne całą dobę.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-4 w-4" />
                Zadzwoń {PHONE}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/" hash="kontakt">
                Napisz do nas
              </Link>
            </Button>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-heading text-2xl font-bold">Zobacz też</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                to="/uslugi/$slug"
                params={{ slug: s.slug }}
                className="group rounded-xl border border-border bg-card/50 p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <s.icon className="h-6 w-6 text-primary" />
                <p className="mt-3 font-heading text-lg font-semibold">{s.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
