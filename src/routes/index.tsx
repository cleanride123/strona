import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";
import galleryAsset1 from "@/assets/img/cleanride-gallery-1.png";
import galleryAsset2 from "@/assets/img/cleanride-gallery-2.png";
import galleryAsset3 from "@/assets/img/cleanride-gallery-3.png";
import galleryAsset4 from "@/assets/img/cleanride-gallery-4.png";
import galleryAsset5 from "@/assets/img/cleanride-gallery-5.png";
import galleryAsset6 from "@/assets/img/cleanride-gallery-6.png";
import {
  Car,
  Sparkles,
  Phone,
  MapPin,
  Clock,
  Star,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Zap,
  Award,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FileText as CertFileIcon, BadgeCheck as CertBadgeIcon } from "lucide-react";
import certAutoImg from "@/assets/img/cert-auto-detailing.jpg";
import certAutoPdf from "@/assets/img/cert-auto-detailing.pdf";
import certSkoraImg from "@/assets/img/cert-skora.jpg";
import certSkoraPdf from "@/assets/img/cert-skora.pdf";
import certOzonImg from "@/assets/img/cert-ozonowanie.jpg";
import certOzonPdf from "@/assets/img/cert-ozonowanie.pdf";
import certPosadzkiImg from "@/assets/img/cert-posadzki.jpg";
import certPosadzkiPdf from "@/assets/img/cert-posadzki.pdf";
import certTapPodstImg from "@/assets/img/cert-tapicerka-podst.jpg";
import certTapPodstPdf from "@/assets/img/cert-tapicerka-podst.pdf";
import certTapZaawImg from "@/assets/img/cert-tapicerka-zaaw.jpg";
import certTapZaawPdf from "@/assets/img/cert-tapicerka-zaaw.pdf";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CleanRide — Autokosmetyka i pranie tapicerki | Oświęcim-Zaborze" },
      {
        name: "description",
        content:
          "CleanRide — profesjonalna autokosmetyka, pranie tapicerki samochodowej i meblowej, czyszczenie dywanów oraz ozonowanie. Mobilne usługi w Oświęcimiu, Zaborzu i okolicach.",
      },
      {
        property: "og:title",
        content: "CleanRide — Autokosmetyka i pranie tapicerki",
      },
      {
        property: "og:description",
        content:
          "Profesjonalne pranie tapicerki samochodowej i meblowej, autokosmetyka oraz ozonowanie. Oświęcim-Zaborze.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "CleanRide — Autokosmetyka i pranie tapicerki" },
      {
        name: "twitter:description",
        content: "Profesjonalne pranie tapicerki i autokosmetyka w Oświęcimiu-Zaborzu.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/CleanRide+autokosmetyka+Zaborze";

const GOOGLE_REVIEWS = [
  {
    name: "Katarzyna Hnatyszyn",
    meta: "Lokalny przewodnik · miesiąc temu",
    text: "100% satysfakcji!!! Dawno nie spotkałam tak rzetelnego i wspaniałego fachowca jak Pan Tomasz. Pełen profesjonalizm i podejście do każdego klienta, wszystko zrobione w jak najlepszym porządku i przystępnych cenach. Polecam każdemu z całego serca.",
  },
  {
    name: "Marcin Bąk",
    meta: "3 miesiące temu",
    text: "Zdecydowanie polecam! Oddałem auto na kompleksowe czyszczenie przed sprzedażą. Samochód został dokładnie umyty z zewnątrz, felgi i opony wyglądają jak nowe, a lakier zyskał świetny połysk. W środku idealny porządek. Szybko, sprawnie i profesjonalnie!",
  },
  {
    name: "Julian Beziat",
    meta: "2 miesiące temu",
    text: "Serdecznie polecam! Auto pięknie wyczyszczone zarówno w środku jak i na zewnątrz, dodatkowo świeży zapach po ozonowaniu, a wszystko bardzo sprawnie i w dobrej cenie. Na pewno jeszcze wrócę nie raz!",
  },
  {
    name: "Kinga",
    meta: "Lokalny przewodnik · miesiąc temu",
    text: "Serdecznie polecam! Przemiły kontakt, profesjonalne doradztwo i mistrzowskie wykonanie. Samochód lśni czystością. Bardzo dziękujemy i znów wrócimy ;).",
  },
  {
    name: "Zuzanna Janeczko",
    meta: "6 miesięcy temu",
    text: "Pan Tomasz — nie dość, że jest naprawdę sympatycznym człowiekiem, to nasze auto wyczyścił tak, jakby chwilę wcześniej wyjechało z salonu. Na pewno będziemy stałymi bywalcami. Dziękujemy!",
  },
  {
    name: "Wikaa_",
    meta: "Opinia z Google · 3 miesiące temu",
    text: "Auto wyczyszczone na maksa, pełen profesjonalizm. Klimatyzacja nabita, aż zimno jak dmucha. Praca wykonana szybko i sprawnie, ale dobrze. Pan Tomek bardzo uprzejmy. POLECAM!",
  },
  {
    name: "Darek bg",
    meta: "Opinia z Google · 3 miesiące temu",
    text: "Zdecydowanie polecam!!! Usługa prania tapicerki samochodowej wykonana perfekcyjnie. Jestem mega zadowolony, na pewno jeszcze wrócę.",
  },
];

const PHONE = "663 803 798";
const PHONE_HREF = "tel:+48663803798";
const EMAIL = "cleanride@interia.pl";
const ADDRESS = "Grojceka, 32-600 Zaborze";

function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden border border-dashed border-muted-foreground/30 bg-muted/40 ${className}`}
    >
      <div className="flex flex-col items-center gap-2 p-4 text-center text-muted-foreground">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50">
          <Car className="h-5 w-5 text-primary" />
        </div>
        <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Usługi", href: "#uslugi" },
    { label: "O nas", href: "#o-nas" },
    { label: "Galeria", href: "#galeria" },
    { label: "Certyfikaty", href: "#certyfikaty" },
    { label: "Opinie", href: "#opinie" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-heading text-xl font-bold tracking-wide text-foreground">
            Clean<span className="text-primary">Ride</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={PHONE_HREF}>
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
          </Button>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={PHONE_HREF}>
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % GOOGLE_REVIEWS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const review = GOOGLE_REVIEWS[index]!;

  return (
    <div className="relative rounded-2xl border border-border/60 bg-card/80 p-6 shadow-2xl backdrop-blur sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Opinia z Google
        </span>
      </div>

      <blockquote className="min-h-[180px] sm:min-h-[160px]">
        <p className="text-base leading-relaxed text-foreground sm:text-lg">{review.text}</p>
      </blockquote>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-heading text-sm font-bold text-primary">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{review.name}</div>
          <div className="text-xs text-muted-foreground">{review.meta}</div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1.5">
          {GOOGLE_REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Opinia ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          Zobacz więcej opinii na Google
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Profesjonalne usługi autokosmetyczne w Twojej okolicy
          </div>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Profesjonalista na wyciągnięcie ręki
            <br />
            inż. Tomasz Zajas
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Profesjonalna autokosmetyka, pranie tapicerki samochodowej i meblowej oraz kompleksowe
            czyszczenie pojazdów. Działamy w Oświęcimiu, Zaborzu i okolicach.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary px-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <a href={PHONE_HREF}>
                <Phone className="h-5 w-5" />
                Zadzwoń teraz
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border bg-background/50 px-6 text-base text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <a href="#uslugi">
                Zobacz usługi
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Bezpieczne środki</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span>Szybka realizacja</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>5,0 / 105 opinii</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
          <ReviewsCarousel />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = SERVICES;

  return (
    <section id="uslugi" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Oferta"
          title="Usługi, które przywracają świeżość"
          description="Od tapicerki samochodowej po meble i dywany — zajmiemy się każdym zabrudzeniem z profesjonalnym podejściem."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              to="/uslugi/$slug"
              params={{ slug: service.slug }}
              className="block"
            >
            <Card className="group h-full border-border bg-card/50 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Zobacz szczegóły
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-nas" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <iframe
            src="https://maps.google.com/maps?q=CleanRide%20Auto%20Kosmetyka%20Grojecka%20Zaborze&z=15&hl=pl&output=embed"
            title="Mapa — CleanRide, Grojecka, 32-600 Zaborze"
            className="mt-6 aspect-[4/3] w-full rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="O nas"
            title="Pasja do czystości i detali"
            description="CleanRide to lokalna firma, dla której autokosmetyka i pranie tapicerki to nie tylko praca, ale też pasja. Dbamy o każdy detal, używamy sprawdzonych środków i pracujemy mobilnie, żebyś mógł zaoszczędzić czas."
          />
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              { value: "5,0", label: "średnia ocen" },
              { value: "105+", label: "opinii klientów" },
              { value: "24/7", label: "dostępność" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card/50 p-4 text-center">
                <div className="font-heading text-2xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { src: galleryAsset1, alt: "Wyczyszczona czerwona skórzana tapicerka samochodowa" },
    { src: galleryAsset2, alt: "Czarne auto po detailingu zewnętrznym" },
    { src: galleryAsset3, alt: "Szary SUV po detailingu zewnętrznym" },
    { src: galleryAsset4, alt: "Ford Mustang po kompleksowej pielęgnacji lakieru" },
    { src: galleryAsset5, alt: "Wyczyszczone wnętrze samochodu" },
    { src: galleryAsset6, alt: "Wyczyszczona czarna skórzana tapicerka samochodowa" },
  ];

  return (
    <section id="galeria" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Realizacje"
          title="Galeria efektów naszej pracy"
          description="Zobacz efekty naszych realizacji — od kompleksowego czyszczenia wnętrz po pielęgnację lakieru."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.src} className="overflow-hidden rounded-xl">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CERTIFICATES = [
  { title: "Auto Detailing", subtitle: "Zaawansowany auto detailing i pielęgnacja wnętrza", level: "Zaawansowany", date: "08–09.01.2024", img: certAutoImg, pdf: certAutoPdf },
  { title: "Obicia skórzane", subtitle: "Czyszczenie, pielęgnacja, konserwacja i impregnacja skór", level: "Specjalista", date: "05.01.2024", img: certSkoraImg, pdf: certSkoraPdf },
  { title: "Pranie tapicerki i dywanów", subtitle: "Pranie obić materiałowych, dywanów i wykładzin", level: "Zaawansowany", date: "03.01.2024", img: certTapZaawImg, pdf: certTapZaawPdf },
  { title: "Ozonowanie", subtitle: "Dezynfekcja metodą ozonowania", level: "Specjalista", date: "14.12.2023", img: certOzonImg, pdf: certOzonPdf },
  { title: "Pranie tapicerki i dywanów", subtitle: "Pranie obić materiałowych, dywanów i wykładzin", level: "Podstawowy", date: "12.12.2023", img: certTapPodstImg, pdf: certTapPodstPdf },
  { title: "Czyszczenie posadzek", subtitle: "Czyszczenie posadzek podłogowych", level: "Zaawansowany", date: "12.10.2023", img: certPosadzkiImg, pdf: certPosadzkiPdf },
];

function Certificates() {
  return (
    <section id="certyfikaty" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certyfikaty"
          title="Nasze kwalifikacje i certyfikaty"
          description="inż. Tomasz Zajas — certyfikowany specjalista Professional Cleaning Sp. z.o.o. Wszystkie certyfikaty są ważne bezterminowo."
        />
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-sm">
          {["6 certyfikatów specjalisty", "Rejestr Instytucji Szkoleniowych nr 2.20/00021/2023"].map((t) => (
            <span key={t} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-medium text-foreground">
              <CertBadgeIcon className="h-4 w-4 text-primary" />
              {t}
            </span>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c) => (
            <a
              key={c.pdf}
              href={c.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted/40 p-4">
                <img
                  src={c.img}
                  alt={`Certyfikat: ${c.title} — Tomasz Zajas`}
                  loading="lazy"
                  className="h-full w-full rounded-md object-contain shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  {c.level}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-start gap-2">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <h3 className="font-heading text-xl font-bold leading-tight">{c.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{c.subtitle}</p>
                <div className="mt-auto flex items-center justify-between pt-3 text-sm">
                  <span className="text-muted-foreground">Wydany: {c.date}</span>
                  <span className="inline-flex items-center gap-1 font-medium text-primary">
                    <CertFileIcon className="h-4 w-4" />
                    Zobacz PDF
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {

  return (
    <section id="opinie" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Opinie" title="Co mówią nasi klienci" />
        <div className="grid gap-6 md:grid-cols-3">
          {GOOGLE_REVIEWS.slice(0, 3).map((r) => (
            <Card key={r.name} className="border-border bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 text-base leading-relaxed text-foreground/90">"{r.text}"</p>
                <div className="font-heading font-semibold text-foreground">{r.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{r.meta}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kontakt"
          title="Umów się na wizytę"
          description="Zadzwoń, napisz lub wypełnij formularz — odezwiemy się najszybciej jak to możliwe."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <Card className="border-border bg-card/50">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-accent"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Telefon</div>
                      <div className="font-heading text-lg font-semibold text-foreground">{PHONE}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-accent"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">E-mail</div>
                      <div className="font-heading text-lg font-semibold text-foreground">{EMAIL}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 rounded-lg p-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Adres</div>
                      <div className="font-heading text-lg font-semibold text-foreground">{ADDRESS}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg p-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Godziny otwarcia</div>
                      <div className="font-heading text-lg font-semibold text-foreground">Czynne całą dobę</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                className="flex-1 border-border bg-background/50 text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-border bg-background/50 text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>

          <Card className="border-border bg-card/50">
            <CardContent className="pt-6">
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię</Label>
                    <Input id="name" placeholder="Twoje imię" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" placeholder="Numer telefonu" className="bg-background/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Usługa</Label>
                  <Input id="service" placeholder="Jaka usługa Cię interesuje?" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Wiadomość</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Opisz krótko, czego potrzebujesz..."
                    className="bg-background/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Wyślij zapytanie
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                Clean<span className="text-primary">Ride</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Profesjonalna autokosmetyka i pranie tapicerki. Mobilne usługi w Oświęcimiu-Zaborzu i okolicach.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground">Usługi</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/uslugi/$slug"
                  params={{ slug: "pranie-tapicerki-samochodowej" }}
                  className="transition-colors hover:text-foreground"
                >
                  Pranie tapicerki samochodowej
                </Link>
              </li>
              <li>
                <Link
                  to="/uslugi/$slug"
                  params={{ slug: "pranie-tapicerki-meblowej" }}
                  className="transition-colors hover:text-foreground"
                >
                  Pranie tapicerki meblowej
                </Link>
              </li>
              <li>
                <Link
                  to="/uslugi/$slug"
                  params={{ slug: "ozonowanie" }}
                  className="transition-colors hover:text-foreground"
                >
                  Ozonowanie
                </Link>
              </li>
              <li>
                <Link
                  to="/uslugi/$slug"
                  params={{ slug: "kompleksowe-czyszczenie-wnetrza" }}
                  className="transition-colors hover:text-foreground"
                >
                  Kompleksowe czyszczenie
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground">Kontakt</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{PHONE}</li>
              <li>{EMAIL}</li>
              <li>{ADDRESS}</li>
              <li>Czynne całą dobę</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground">Social media</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CleanRide. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
