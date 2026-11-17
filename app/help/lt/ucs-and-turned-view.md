---
title: Pasukti vaizdą ir naudoti savo koordinates (UCS)
summary: Pasukite vaizdą 90° arba bet kokiu kampu, nieko nekeisdami brėžinyje, ir nustatykite vartotojo koordinačių sistemą (UCS), kad taškai, ortogonalus režimas, poliarinis sekimas, tinklelis ir naujas tekstas sektų pastato ašis.
keywords: ucs, vartotojo koordinačių sistema, planas, pasukti vaizdą, vaizdo posūkis, ucs z, ucs 3point, ucs object, ucs world, pavadinta ucs, ucsfollow, turnleft, turnright, turnworld, kampinis pastatas, pasuktas tinklelis
from: 6f152c65
---

## Ką sužinosite

Kaip žiūrėti pasuktą brėžinį, kad kampu pastatytas pastatas ekrane atrodytų tiesus, ir kaip įvesti taškus išilgai jo ašių. Kol tai darote, brėžinyje niekas nejuda: objektai išlaiko savo koordinates, pasukimas nėra redagavimas, o brėžinys nepažymimas kaip pakeistas.

## Pasukti vaizdą ketvirtadaliu

1. Spustelėkite {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Pasukti vaizdą 90° į kairę}} arba {{ui:Pasukti vaizdą 90° į dešinę}}.

Brėžinys ekrane pasisuka apie brėžinio srities vidurį. Pakartokite, kad toliau sukti.

2. Spustelėkite {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Grįžti į pasaulį}}, kad vėl išlygintumėte.

Komandos už jų yra {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} ir {{cmd:TURNWORLD}}. Kad priskirtumėte jai klavišą, pridėkite eilutę, pavyzdžiui `TL=TURNLEFT`, į savo pseudonimus su {{cmd:ALIASEDIT}}.

## Suderinkite su kampu pastatytu pastatu

1. Įveskite `UCS` ir paspauskite {{key:Enter}}, tada `OB` ir {{key:Enter}}.
2. Spustelėkite sienos liniją arti galo, kuris turėtų būti pradžios tašku.

UCS dabar prasideda tame gale, jos X ašis eina išilgai sienos, o vaizdas pasisuka, kad siena ekrane būtų horizontali. Ašių piktograma apatiniame kairiajame kampe rodo, kur nukreiptos UCS ašys.

3. Braižykite įprastai. Kai UCS nustatyta:
   - `x,y` ir `@dx,dy` matuojami išilgai UCS ašių; `d<a` matuoja kampą nuo UCS X ašies.
   - {{ui:Ortogonalus}}, poliarinis sekimas ir tinklelis seka UCS ašis, taip pat seka ir kryžminė žymė.
   - Naujas tekstas ir nauji pastraipos tekstai eina išilgai UCS X ašies; {{cmd:DIMLINEAR}} horizontali ir vertikali taip pat ją seka.
   - Koordinatės būsenos juostoje ir iš {{cmd:ID}} yra UCS koordinatės.
4. Norėdami įvesti pasaulio tašką, kai UCS nustatyta, pirma įdėkite `*`: `*0,0` arba `@*100,0`.
5. Įveskite `UCS`, {{key:Enter}}, tada dar kartą {{key:Enter}}, kad grįžtumėte į pasaulį.

## Kiti būdai nustatyti UCS

Prie {{cmd:UCS}} užklausos:

| Įvedate | Ką daro |
|---|---|
| tašką | Naują pradžios tašką; tada spustelėkite tašką naujoje X ašyje arba paspauskite {{key:Enter}}, kad išlaikytumėte kampą |
| `Z` | Pasuka UCS apie jos pradžios tašką kampu, kurį įvedate (laipsniais, prieš laikrodžio rodyklę) arba pasirenkate |
| `3` (3point) | Pradžios tašką, tašką teigiama X ašimi ir tašką teigiamoje Y pusėje |
| `OB` (OBject) | Iš linijos, lanko, apskritimo, polilinijos atkarpos, teksto, bloko nuorodos, taško ar konstrukcinės linijos |
| `P` (Previous) | Ankstesnį UCS prieš šį (paskutiniai dešimt išlaikomi, kol brėžinys atidarytas) |
| `W` (World) | Atgal į pasaulį |
| `NA` (NAmed) | `S` įrašo dabartinį UCS pavadinimu, `R` atkuria vieną, `D` ištrina vieną, `?` išvardija juos |

Kiekvienas pakeitimas pasuka vaizdą, kad nauja UCS X ašis būtų horizontali. {{cmd:PLAN}} pasuka vaizdą nekeisdamas UCS: {{key:Enter}} dabartinei UCS, `U` įrašytai, `W` pasauliui.

## Verta žinoti

- Kiekviena padalyto ekrano sritis išlaiko savo pasukimą. UCS priklauso brėžiniui.
- Lapai dirba popieriaus koordinatėmis; UCS nustatykite {{ui:Modelis}} skirtuke arba vaizdo lango viduje.
- Pasuktame vaizde vilkiami pasirinkimo langai pasirenka tai, kas yra jų viduje ekrane.
- LISP rutinos gauna taškus UCS koordinatėse iš `getpoint`, gali skaityti `UCSORG`, `UCSXDIR`, `UCSYDIR` ir `VIEWTWIST`, o `trans` konvertuoja tarp pasaulio, UCS ir ekrano.

:::note
Įrašytas failas kitoje versijoje išsaugos UCS ir vaizdo pasukimą; iki tol jie galioja, kol brėžinys atidarytas.
:::
