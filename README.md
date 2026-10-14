# CleanRide — strona internetowa

Strona firmy CleanRide (autokosmetyka, pranie tapicerki samochodowej i meblowej).
Wersja statyczna: wszystkie treści i zdjęcia są w kodzie, bez bazy danych i bez logowania.

## Co jest na stronie

- **Strona główna** (`/`) — nawigacja, powitanie z karuzelą opinii z Google, usługi,
  „O nas" z mapą Google, galeria realizacji, certyfikaty, opinie, kontakt, stopka.
- **Podstrony usług** (`/uslugi/<slug>`) — osobna strona dla każdej z 8 usług:
  `pranie-tapicerki-samochodowej`, `pranie-tapicerki-meblowej`,
  `dywany-wykladziny-chodniki`, `czyszczenie-i-impregnacja-skory`, `ozonowanie`,
  `kompleksowe-czyszczenie-wnetrza`, `serwis-klimatyzacji`, `odswiezanie-lakieru`.

## Kontakt i dane firmy

- Telefon: **663 803 798**
- E-mail: **cleanride@interia.pl**
- Adres: **Grojceka, 32-600 Zaborze**

Dane są wpisane w kodzie — najłatwiej zmienić je w plikach
`src/lib/services.ts` (telefon) i `src/routes/index.tsx` (pozostałe).

## Gdzie co zmienić

| Co chcesz zmienić | Plik |
| --- | --- |
| Nazwy, opisy, ceny i zdjęcia usług | `src/lib/services.ts` |
| Teksty na stronie głównej, opinie, certyfikaty, mapa | `src/routes/index.tsx` |
| Zdjęcia i pliki certyfikatów (PDF) | `src/assets/img/` |
| Kolory, czcionki, wygląd | `src/styles.css` |
| Tytuł i opis strony w Google | `src/routes/__root.tsx` oraz `head()` w `src/routes/index.tsx` |
| Ikona w karcie przeglądarki | `public/favicon.svg` i `public/apple-touch-icon.png` |

Zdjęcia importuje się w kodzie tak: `import zdjecie from "@/assets/img/cleanride-gallery-1.png";`
i używa jako `src={zdjecie}`. Żeby podmienić zdjęcie, wstaw nowy plik do `src/assets/img/`
i podmień nazwę w imporcie.

## Uruchomienie u siebie

Potrzebny Node.js 20+ oraz [Bun](https://bun.sh) (albo npm).

```bash
bun install        # albo: npm install
bun run dev        # strona pod http://localhost:5173
bun run build      # gotowa strona w folderze dist/
```

## Wysłanie na Cloudflare Workers

Paczka jest już skonfigurowana pod Cloudflare (`wrangler.jsonc` oraz `vite.config.ts`).

1. Zaloguj się: `npx wrangler login`
2. Zbuduj i wyślij: `npx wrangler deploy`
   (albo `bun run deploy`, co robi to samo)

Cloudflare sam zbuduje stronę przed wysłaniem dzięki `build.command` w `wrangler.jsonc`.
Nazwa projektu to `cleanride` — jeśli taki projekt jeszcze nie istnieje, Cloudflare go utworzy.
Po wysłaniu dostaniesz adres w postaci `https://cleanride.<twoje-konto>.workers.dev`.

Żeby strona działała pod własną domeną, dodaj ją w panelu Cloudflare
(Workers & Pages → projekt `cleanride` → Custom domains).

## Uwagi

- Formularz kontaktowy na stronie tylko pokazuje potwierdzenie — nie wysyła wiadomości.
  Żeby działał naprawdę, trzeba podłączyć skrzynkę lub usługę wysyłkową.
- Link „Zobacz więcej opinii na Google" prowadzi na razie pod adres zastępczy —
  wstaw w `src/routes/index.tsx` prawdziwy link do opinii w Google.
- Podstrony „Serwis klimatyzacji" i „Odświeżanie lakieru" nie mają jeszcze zdjęć —
  dodasz je w `src/lib/services.ts` (sekcja `images`) po wrzuceniu plików do `src/assets/img/`.
