# CleanRide — strona internetowa

Strona firmy CleanRide: autokosmetyka, pranie tapicerki samochodowej i meblowej.
Dane kontaktowe: telefon **663 803 798**, e-mail **cleanride@interia.pl**, Gojceka, 32-600 Zaborze.

## Co zawiera strona

- **Strona główna** (`/`) — nagłówek, karuzela opinii z Google, sześć kart usług, sekcja o firmie,
  galeria realizacji, opinie, kontakt, stopka.
- **Podstrony usług** (`/uslugi/<nazwa-uslugi>`) — opis usługi, galeria zdjęć, lista zakresu,
  kroki pracy i przyciski kontaktu. Dostępne:
  - `/uslugi/pranie-tapicerki-samochodowej`
  - `/uslugi/pranie-tapicerki-meblowej`
  - `/uslugi/dywany-wykladziny-chodniki`
  - `/uslugi/czyszczenie-i-impregnacja-skory`
  - `/uslugi/ozonowanie`
  - `/uslugi/kompleksowe-czyszczenie-wnetrza`

Treści (opisy usług, podpisy zdjęć) znajdują się w jednym pliku: `src/lib/services.ts`.
Dane kontaktowe: `src/lib/services.ts` (stałe `PHONE`, `PHONE_HREF`) oraz `src/routes/index.tsx`.

## Jak uruchomić lokalnie

Wymagany Node.js 22 (lub nowszy) oraz npm.

```sh
npm install
npm run dev
```

Następnie otwórz adres podany w terminalu (domyślnie http://localhost:5173).

## Jak zbudować wersję produkcyjną

```sh
npm run build
```

Wynik budowania trafia do katalogu `dist/`. Projekt zawiera serwer (renderowanie stron po stronie
serwera), więc do wystawienia go w sieci potrzebny jest hosting potrafiący uruchomić serwer Node.js —
sama publikacja plików nie wystarczy.

## Struktura

```
src/
  assets/img/     zdjęcia używane na stronie
  routes/         poszczególne strony (strona główna, podstrony usług, układ wspólny)
  lib/services.ts treści usług: nazwy, opisy, zdjęcia, podpisy
  components/     elementy interfejsu
  styles.css      kolory, czcionki, wygląd
public/           ikona strony i robots.txt
```

## Zmiana treści

- Telefon, e-mail, adres — `src/lib/services.ts` oraz `src/routes/index.tsx`.
- Opisy usług i podpisy zdjęć — `src/lib/services.ts`.
- Zdjęcia — włóż nowe pliki do `src/assets/img/` i podmień import na początku `src/lib/services.ts`
  lub `src/routes/index.tsx`.
- Link do profilu w Google (karuzela opinii) — stała `GOOGLE_REVIEWS_URL` w `src/routes/index.tsx`.

## Zbudowane z

TanStack Start, React 19, TypeScript, Tailwind CSS 4.
