# CleanRide — strona internetowa

Strona firmy CleanRide (autokosmetyka, pranie tapicerki samochodowej i meblowej).
Wersja statyczna: wszystkie treści i zdjęcia są w kodzie, bez bazy danych i bez logowania.

## Co jest na stronie

- **Strona główna** (`/`) — nawigacja, powitanie z karuzelą opinii z Google, usługi,
  „O nas" z mapą Google, galeria realizacji, certyfikaty, opinie, kontakt, stopka.
- **Podstrony usług** (`/uslugi/<slug>`) — osobna strona dla każdej z 6 usług:
  `pranie-tapicerki-samochodowej`, `pranie-tapicerki-meblowej`,
  `dywany-wykladziny-chodniki`, `czyszczenie-i-impregnacja-skory`, `ozonowanie`,
  `kompleksowe-czyszczenie-wnetrza`.

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

Zdjęcia importuje się w kodzie tak: `import zdjecie from "@/assets/img/cleanride-gallery-1.png";`
i używa jako `src={zdjecie}`. Żeby podmienić zdjęcie, wstaw nowy plik do `src/assets/img/`
i podmień nazwę w imporcie.

## Uruchomienie u siebie

Potrzebny Node.js 20+ oraz [Bun](https://bun.sh) (albo npm).

```sh
bun install        # lub: npm install
bun run build      # buduje gotowe pliki do folderu dist/
bun run dev        # podgląd na żywo na http://localhost:5173
```

## Wdrożenie na Cloudflare Workers

Gotowe pliki trafiają do `dist/` (`dist/server/index.mjs` dla serwera,
`dist/client/` dla zdjęć i stylów) — to konfiguracja pod Cloudflare Workers.

1. Wgraj ten kod do repository na GitHubie.
2. W Cloudflare: **Workers & Pages → Create → Import a repository** i wskaż to repository.
3. Ustaw:
   - **Build command**: `bun run build`
   - **Deploy command**: `npx wrangler deploy`
   - **Framework preset**: None (Plain)
4. Nazwa projektu w Cloudflare musi być zgodna z polem `"name"` w pliku `wrangler.jsonc`
   (domyślnie `strona` — zmień obie nazwy na takie same, jeśli chcesz inną).

Alternatywnie, z własnego komputera: `bun install && bun run deploy`.

## Warto wiedzieć

- **Link do wizytówki w Google** jest w pliku `src/routes/index.tsx` jako
  `GOOGLE_REVIEWS_URL`. Teraz prowadzi do wyszukiwania — wstaw tam dokładny adres
  swojej wizytówki, gdy go masz.
- **Formularz kontaktowy** jest tylko podglądowy: po kliknięciu „Wyślij" nic się nie wysyła.
  Żeby dostawać zgłoszenia na e-mail, trzeba podłączyć wysyłkę (np. przez usługę e-mail).
- **Opinie z Google** w karuzeli i w sekcji „Co mówią nasi klienci" są przepisane do kodu.
  Przy zmianie ocen trzeba je zaktualizować ręcznie w `src/routes/index.tsx`.
- **Certyfikaty**: podglądy (JPG) i pełne dokumenty (PDF) leżą w `src/assets/img/`,
  a opisy w sekcji `CERTIFICATES` w `src/routes/index.tsx`.

## Zbudowane z

TanStack Start (React 19 + TypeScript), Tailwind CSS v4, Vite, Nitro (Cloudflare Workers).
