import { Car, Sofa, Droplets, Sparkles, Wind, ShieldCheck, Snowflake, SprayCan, type LucideIcon } from "lucide-react";
import g1 from "@/assets/img/cleanride-gallery-1.png";
import g2 from "@/assets/img/cleanride-gallery-2.png";
import g5 from "@/assets/img/cleanride-gallery-5.png";
import g6 from "@/assets/img/cleanride-gallery-6.png";
import t2 from "@/assets/img/cleanride-tapicerka-2.png";
import t4 from "@/assets/img/cleanride-tapicerka-4.png";
import m2 from "@/assets/img/cleanride-meble-2.png";
import m3 from "@/assets/img/cleanride-meble-3.png";
import m4 from "@/assets/img/cleanride-meble-4.png";
import d1 from "@/assets/img/cleanride-dywany-1.png";
import d2 from "@/assets/img/cleanride-dywany-2.png";
import d3 from "@/assets/img/cleanride-dywany-3.png";
import s1 from "@/assets/img/cleanride-skora-1.png";
import s2 from "@/assets/img/cleanride-skora-2.png";
import s3 from "@/assets/img/cleanride-skora-3.png";
import s4 from "@/assets/img/cleanride-skora-4.png";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  intro: string;
  includes: string[];
  steps: { title: string; text: string }[];
  forWhom: string;
  images: { url: string; alt: string }[];
};

export const PHONE = "663 803 798";
export const PHONE_HREF = "tel:+48663803798";

export const SERVICES: Service[] = [
  {
    slug: "pranie-tapicerki-samochodowej",
    icon: Car,
    title: "Pranie tapicerki samochodowej",
    description:
      "Kompleksowe czyszczenie foteli, dywaników, podsufitki i bagażnika. Usuwamy plamy, brud i nieprzyjemne zapachy.",
    intro:
      "Wnętrze auta to miejsce, w którym spędzasz codziennie wiele godzin. Metodą ekstrakcyjną wypłukujemy brud z głębi włókien, nie tylko z powierzchni. Dzięki czemu tapicerka wygląda i pachnie jak nowa.",
    includes: [
      "Pranie ekstrakcyjne foteli i kanapy",
      "Czyszczenie dywaników i boczków drzwi",
      "Pranie podsufitki i boczków drzwi",
      "Czyszczenie bagażnika",
      "Usuwanie plam (kawa, tłuszcz, atrament, jedzenie)",
      "Neutralizacja nieprzyjemnych zapachów",
    ],
    steps: [
      { title: "Oględziny", text: "Oceniamy rodzaj materiału i stopień zabrudzenia, dobieramy odpowiednie środki." },
      { title: "Odkurzanie i aplikacja", text: "Dokładnie odkurzamy wnętrze, a następnie nakładamy preparat na plamy i tapicerkę." },
      { title: "Pranie ekstrakcyjne", text: "Wypłukujemy brud i środek razem z wodą, odsysając wszystko z włókien." },
      { title: "Osuszanie i kontrola", text: "Usuwamy nadmiar wilgoci oraz osuszamy specjalistycznymi urządzeniami po czym sprawdzamy efekt z klientem." },
    ],
    forWhom:
      "Dla właścicieli aut osobowych, dostawczych i rodzinnych, a także przed sprzedażą pojazdu lub po zalaniu napojem.",
    images: [
      { url: t4, alt: "Przednie fotele i konsola środkowa po czyszczeniu wnętrza" },
      { url: t2, alt: "Fotele w drugim rzędzie po praniu tapicerki" },
    ],
  },
  {
    slug: "pranie-tapicerki-meblowej",
    icon: Sofa,
    title: "Pranie tapicerki meblowej",
    description:
      "Czyszczenie kanap, narożników, foteli i materacy. Bezpieczne środki dla Twoich mebli i zdrowia.",
    intro:
      "Kanapy, narożniki i materace gromadzą kurz, roztocza i plamy. Przyjeżdżamy do Ciebie z własnym sprzętem i odświeżamy meble na miejscu — bez wynoszenia ich z domu.",
    includes: [
      "Pranie kanap, sof i narożników",
      "Czyszczenie foteli i krzeseł tapicerowanych",
      "Pranie materacy z usuwaniem roztoczy",
      "Usuwanie plam i zapachów (także po zwierzętach)",
      "Bezpieczne środki dla dzieci i alergików",
    ],
    steps: [
      { title: "Dojazd i oględziny", text: "Przyjeżdżamy w umówionym terminie i sprawdzamy materiał oraz stopień zabrudzenia." },
      { title: "Przygotowanie", text: "Odkurzamy meble i nakładamy dobrany preparat czyszczący." },
      { title: "Pranie ekstrakcyjne", text: "Wypłukujemy brud z głębi włókien i odsysamy wilgoć." },
      { title: "Wykończenie", text: "Wygładzamy tkaninę i podpowiadamy, jak dbać o meble na co dzień." },
    ],
    forWhom:
      "Dla domów, mieszkań, biur i lokali usługowych — wszędzie tam, gdzie meble tapicerowane są intensywnie używane.",
    images: [
      { url: m2, alt: "Szara welurowa kanapa po praniu ekstrakcyjnym" },
      { url: m3, alt: "Narożnik świeżo wyprany i suszony po czyszczeniu" },
      { url: m4, alt: "Krzesła tapicerowane po czyszczeniu i osuszaniu" },
    ],
  },
  {
    slug: "dywany-wykladziny-chodniki",
    icon: Droplets,
    title: "Dywany, wykładziny i chodniki",
    description:
      "Profesjonalne pranie dywanów oraz wykładzin. Przywracamy kolor, usuwamy zabrudzenia i alergeny.",
    intro:
      "Dywany i wykładziny najszybciej chłoną brud i alergeny. Pranie ekstrakcyjne przywraca im kolor, miękkość i świeży zapach, a Twoje wnętrze staje się zdrowsze.",
    includes: [
      "Pranie dywanów dużych i małych",
      "Czyszczenie wykładzin w domach i biurach",
      "Pranie chodników i dywaników schodowych",
      "Usuwanie plam, śladów po butach i zwierzętach",
      "Redukcja kurzu i alergenów",
    ],
    steps: [
      { title: "Odkurzanie", text: "Usuwamy luźny kurz i piasek z powierzchni dywanu lub wykładziny." },
      { title: "Preparat i szczotkowanie", text: "Nakładamy środek i wcieramy go delikatnie w włókna." },
      { title: "Płukanie i odsysanie", text: "Wypłukujemy brud wraz z preparatem i odsysamy wodę." },
      { title: "Suszenie", text: "Wygładzamy włókna i zostawiamy dywan gotowy do szybkiego wyschnięcia." },
    ],
    forWhom: "Dla domów, mieszkań, biur, hoteli i pensjonatów.",
    images: [
      { url: d1, alt: "Pranie wykładziny biurowej — wyczyszczony fragment na tle zabrudzonej powierzchni" },
      { url: d2, alt: "Suszenie wypranego czerwonego dywanu z beżowym wzorem za pomocą dmuchawy podłogowej" },
      { url: d3, alt: "Pranie niebieskiej wykładziny dywanowej w pokoju — różnica między czystą a zabrudzoną strefą" },
    ],
  },
  {
    slug: "czyszczenie-i-impregnacja-skory",
    icon: Sparkles,
    title: "Czyszczenie i impregnacja skóry",
    description:
      "Pielęgnacja skórzanej tapicerki. Czyszczenie, odświeżanie i impregnacja chroniąca przed pękaniem.",
    intro:
      "Skóra wymaga delikatnej pielęgnacji. Czyścimy ją specjalistycznymi preparatami, odżywiamy i zabezpieczamy impregnatem oraz powłoką ochronną, które chronią przed wysychaniem, pękaniem i przetarciami.",
    includes: [
      "Delikatne czyszczenie skóry naturalnej i ekologicznej",
      "Usuwanie przetarć kolorystycznych i zabrudzeń",
      "Odżywianie i nawilżanie skóry",
      "Impregnacja chroniąca przed plamami",
      "Pielęgnacja foteli, kanap i kierownicy",
    ],
    steps: [
      { title: "Test środka", text: "Sprawdzamy preparat na mało widocznym fragmencie skóry." },
      { title: "Czyszczenie", text: "Usuwamy brud i tłuste ślady miękkimi szczotkami i środkiem pH-neutralnym." },
      { title: "Odżywienie", text: "Aplikujemy mleczko pielęgnacyjne, które przywraca elastyczność skóry." },
      { title: "Impregnacja", text: "Zabezpieczamy powierzchnię warstwą ochronną odporną na plamy i wilgoć." },
    ],
    forWhom: "Dla właścicieli aut ze skórzanym wnętrzem oraz skórzanych kanap i foteli w domu.",
    images: [
      { url: s1, alt: "Czarna, perforowana skórzana tapicerka w BMW po czyszczeniu i konserwacji" },
      { url: g1, alt: "Czerwona skórzana tapicerka" },
      { url: g6, alt: "Skórzane fotele i konsola" },
      { url: g5, alt: "Wnętrze auta po pielęgnacji" },
      { url: s2, alt: "Oparcie fotela z jasnej skóry z przetarciami i preparatem do czyszczenia tapicerki" },
      { url: s3, alt: "Czyszczenie jasnej skórzanej tapicerki w Jaguarze — wyczyszczona i zabrudzona część fotela" },
      { url: s4, alt: "Impregnacja karmelowej skórzanej kanapy powłoką ochronną" },
    ],
  },
  {
    slug: "ozonowanie",
    icon: Wind,
    title: "Ozonowanie",
    description:
      "Skuteczna dezynfekcja wnętrza pojazdu lub pomieszczenia. Usuwa bakterie, wirusy i trwałe zapachy.",
    intro:
      "Ozon dociera tam, gdzie nie sięgnie szmatka — w każdy zakamarek wnętrza, układ wentylacji i włókna tapicerki. Neutralizuje bakterie, wirusy, pleśń oraz zapach dymu i stęchlizny.",
    includes: [
      "Ozonowanie wnętrza samochodu",
      "Ozonowanie mieszkań, biur i pomieszczeń",
      "Usuwanie zapachu papierosów, stęchlizny i zwierząt",
      "Dezynfekcja układu wentylacji",
      "Redukcja bakterii, wirusów i grzybów",
    ],
    steps: [
      { title: "Przygotowanie", text: "Opróżniamy wnętrze z żywności i roślin, zamykamy okna i drzwi." },
      { title: "Ozonowanie", text: "Generator wytwarza ozon w ilości dobranej do kubatury pomieszczenia." },
      { title: "Wietrzenie", text: "Po zabiegu dokładnie wietrzymy wnętrze, aż ozon całkowicie się rozłoży." },
      { title: "Kontrola", text: "Sprawdzamy zapach i przekazujemy zalecenia na dalszą eksploatację." },
    ],
    forWhom: "Dla aut po palaczach, używanych pojazdów, mieszkań po zalaniu oraz osób z alergiami.",
    images: [],
  },
  {
    slug: "kompleksowe-czyszczenie-wnetrza",
    icon: ShieldCheck,
    title: "Kompleksowe czyszczenie wnętrza pojazdów",
    description:
      "Pełny detailing wnętrza: panele, szyby, plastiki, skóra i tkaniny. Auto jak nowe.",
    intro:
      "To pełny pakiet dla wnętrza Twojego auta: tapicerka, plastiki, szyby i skóra w jednym zabiegu. Efekt — wnętrze jak z salonu, świeże i zabezpieczone na dłużej.",
    includes: [
      "Pranie tapicerki, dywaników i boczków drzwi",
      "Czyszczenie i konserwacja plastików oraz paneli",
      "Pielęgnacja skóry i elementów chromowanych",
      "Mycie szyb i luster od wewnątrz",
      "Odkurzanie szczelin i zakamarków",
      "Odświeżenie zapachu wnętrza",
    ],
    steps: [
      { title: "Analiza stanu", text: "Oglądamy auto i ustalamy zakres prac razem z Tobą." },
      { title: "Czyszczenie suche i mokre", text: "Odkurzamy, czyścimy plastiki i prowadzimy pranie tapicerki." },
      { title: "Pielęgnacja", text: "Konserwujemy skórę i plastiki, myjemy szyby." },
      { title: "Kontrola jakości", text: "Przeglądamy wnętrze razem z klientem przed wydaniem auta." },
    ],
    forWhom: "Dla każdego, kto chce odświeżyć auto — przed sprzedażą, po zimie lub po prostu dla przyjemności jazdy.",
    images: [
      { url: g5, alt: "Czysta deska rozdzielcza" },
      { url: g6, alt: "Wyczyszczone fotele i konsola" },
      { url: g1, alt: "Odświeżona tapicerka skórzana" },
      { url: g2, alt: "Auto po kompleksowym detailingu" },
    ],
  },
  {
    slug: "serwis-klimatyzacji",
    icon: Snowflake,
    title: "Serwis klimatyzacji",
    description:
      "Czyszczenie, dezynfekcja i odgrzybianie klimatyzacji samochodowej. Świeże powietrze i sprawne chłodzenie przez cały rok.",
    intro:
      "W układzie klimatyzacji z czasem gromadzą się kurz, wilgoć, bakterie i grzyby, które powodują nieprzyjemny zapach i obniżają komfort jazdy. Dokładnie czyścimy i dezynfekujemy układ, dzięki czemu oddychasz świeżym powietrzem.",
    includes: [
      "Czyszczenie i dezynfekcja parownika oraz kanałów nawiewu",
      "Odgrzybianie i usuwanie bakterii z układu klimatyzacji",
      "Wymiana filtra kabinowego",
      "Kontrola szczelności i skuteczności chłodzenia",
      "Neutralizacja nieprzyjemnych zapachów z nawiewów",
    ],
    steps: [
      { title: "Diagnoza", text: "Sprawdzamy stan klimatyzacji, zapach z nawiewów i skuteczność chłodzenia." },
      { title: "Czyszczenie układu", text: "Aplikujemy preparat czyszczący do parownika i kanałów wentylacyjnych." },
      { title: "Dezynfekcja", text: "Odgrzybiamy i dezynfekujemy układ, eliminując bakterie i źródło zapachu." },
      { title: "Kontrola", text: "Wymieniamy filtr kabinowy i sprawdzamy efekt razem z klientem." },
    ],
    forWhom:
      "Dla kierowców, którzy czują nieprzyjemny zapach z nawiewów, przed sezonem letnim oraz po zakupie używanego auta.",
    images: [],
  },
  {
    slug: "odswiezanie-lakieru",
    icon: SprayCan,
    title: "Odświeżanie lakieru",
    description:
      "Mycie, polerowanie i zabezpieczanie lakieru. Usuwamy zmatowienia i drobne rysy, przywracając głęboki połysk.",
    intro:
      "Z czasem lakier traci połysk — matowieje, pokrywa się drobnymi rysami i zabrudzeniami. Odświeżamy go, polerujemy i zabezpieczamy, aby karoseria znów wyglądała jak nowa i dłużej pozostała w dobrym stanie.",
    includes: [
      "Dokładne mycie i odtłuszczanie karoserii",
      "Glinkowanie lakieru i usuwanie osadów",
      "Polerowanie maszynowe — usuwanie zmatowień i drobnych rysek",
      "Zabezpieczenie lakieru woskiem lub powłoką ochronną",
      "Odświeżenie felg, uszczelek i elementów plastikowych",
    ],
    steps: [
      { title: "Oględziny lakieru", text: "Oceniamy stan powłoki i dobieramy zakres oraz metodę polerowania." },
      { title: "Mycie i glinkowanie", text: "Myjemy auto i usuwamy z lakieru osady, których nie zbierze zwykłe mycie." },
      { title: "Polerowanie", text: "Maszynowo usuwamy zmatowienia i drobne rysy, przywracając głęboki kolor." },
      { title: "Zabezpieczenie", text: "Nakładamy wosk lub powłokę, która chroni lakier i podkreśla połysk." },
    ],
    forWhom:
      "Dla właścicieli aut z matowym lub porysowanym lakierem, przed sprzedażą pojazdu oraz po zimie.",
    images: [],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
