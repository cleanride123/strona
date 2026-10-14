# CleanRide — strona internetowa

Statyczna strona firmy CleanRide: autokosmetyka, pranie tapicerki samochodowej i meblowej,
serwis klimatyzacji, odświeżanie lakieru i inne usługi czyszczenia wnętrz.

Dane kontaktowe widoczne na stronie: telefon **663 803 798**, e-mail **cleanride@interia.pl**,
adres **Grojceka, 32-600 Zaborze**.

## Czego potrzebujesz

- [Bun](https://bun.sh) (zalecany) albo Node.js 20+ i npm
- Konto na [Cloudflare](https://dash.cloudflare.com) — tylko jeśli chcesz wystawić stronę na Cloudflare Pages/Workers

## Praca na własnym komputerze

```sh
bun install       # zainstaluj zależności (raz)
bun run dev       # podgląd pod http://localhost:8080
bun run build     # buduje gotową stronę do katalogu dist/
bun run preview   # podgląd zbudowanej wersji
```

## Wystawienie strony na Cloudflare

1. Zaloguj się do Cloudflare i wybierz **Workers & Pages**.
2. Jeśli przesyłasz kod z tego folderu (np. przez „Upload" albo Git), upewnij się,
   że build jest włączony: plik `wrangler.jsonc` ma już wpis `build.command = "bun run build"`.
3. Zainstaluj zależności lokalnie (`bun install`), a potem:

```sh
npx wrangler login
npx wrangler deploy
```

Można też użyć skrótu: `bun run deploy` (czyli build + deploy jednym poleceniem).

Nazwa wdrożenia to `cleanride` — zmienisz ją w pliku `wrangler.jsonc` (pole `name`).
Adres strony po wdrożeniu to zwykle `https://cleanride.<twoje-konto>.workers.dev`.

Jeśli chcesz użyć własnej domeny (np. cleanride.pl), dodaj ją w Cloudflare i
przypisz do tego wdrożenia w ustawieniach Workers.

## Gdzie co zmienić

| Co chcesz zmienić | Plik |
| --- | --- |
| Tekst pod głównym nagłówkiem, nagłówek, plakietki, sekcje na stronie głównej | `src/routes/index.tsx` |
| Usługi (nazwy, opisy, „Co obejmuje usługa", „Jak pracujemy", „Dla kogo", zdjęcia) | `src/lib/services.ts` |
| Podstrona pojedynczej usługi (układ strony) | `src/routes/uslugi.$slug.tsx` |
| Kolory, fonty, motyw ciemny/jasny | `src/styles.css` |
| Numer telefonu, e-mail, adres | szukaj `663 803 798`, `cleanride@interia.pl` i `Grojceka` w `src/routes/index.tsx` i `src/lib/services.ts` |
| Zdjęcia i certyfikaty | `src/assets/img/` (podmiana pliku o tej samej nazwie wystarczy) |
| Ikona w karcie przeglądarki | `public/favicon.svg` i `public/apple-touch-icon.png` |

Każda usługa ma własny adres: `/uslugi/<nazwa>`, np. `/uslugi/pranie-tapicerki-samochodowej`,
`/uslugi/serwis-klimatyzacji`, `/uslugi/odswiezanie-lakieru`.

## Certyfikaty

Sześć certyfikatów jest w sekcji „Certyfikaty" na stronie głównej. Każdy pokazuje podgląd
(obraz z pierwszej strony PDF) i po kliknięciu otwiera pełny dokument PDF.
Pliki: `src/assets/img/cert-*.pdf` oraz `src/assets/img/cert-*.jpg`.

## O czym warto pamiętać

- **Formularz kontaktowy** na stronie jest tylko demonstracyjny — wpisane dane nigdzie
  nie są wysyłane. Żeby działał naprawdę, trzeba go podłączyć do usługi wysyłającej
  wiadomości (np. przez backend lub serwis typu Formspree).
- **Link „Zobacz więcej opinii na Google"** w karuzeli opinii (`GOOGLE_REVIEWS_URL`
  w `src/routes/index.tsx`) jest jeszcze zastępczy — wstaw tam prawdziwy adres profilu
  w Google, żeby klienci mogli przejść do pełnej listy opinii.
- Strona jest w całości statyczna — nie potrzebuje bazy danych ani logowania.
