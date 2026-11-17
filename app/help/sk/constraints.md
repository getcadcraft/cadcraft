---
title: Zviazanie výkresu väzbami
summary: Udržiavajte čiary vodorovné, konce spojené a rozmery pevné pomocou geometrických a rozmerových väzieb; keď zmeníte rozmer, výkres sa prispôsobí.
keywords: väzba, väzby, parametrické, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, stupne voľnosti, plne zviazaný
from: f8f21fa4
---

## Čo vytvoríte

Doska, ktorej šírku zmeníte na jednom mieste: jej strany zostanú pravouhlé, jeden roh zostane na mieste a jej výška zostane polovicou šírky.

Väzby fungujú na čiarach, lomených čiarach, kružniciach, oblúkoch a bodoch na karte {{ui:Model}}. Každá väzba, ktorú pridáte, je jeden krok späť.

## Nakreslenie a zviazanie obrysu

1. Napíšte `REC` a stlačte {{key:Enter}}. Napíšte `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Napíšte `AUTOCONSTRAIN` a stlačte {{key:Enter}}. Napíšte `ALL`, {{key:Enter}}, potom ešte raz {{key:Enter}}.

   V histórii sa objaví hlásenie "4 väzby boli použité". Pri stranách sa zobrazia malé polia s **H** a **V**: sú to panely väzieb.
3. Napíšte `GCFIX` a stlačte {{key:Enter}}. Kliknite blízko ľavého dolného rohu. Objaví sa pole s ⊕: tento roh zostane tam, kde je.

Príkaz `AUTOCONSTRAIN` pridá väzby splynutia tam, kde sa konce takmer stretávajú, a vodorovné alebo zvislé väzby tam, kde sú čiary takmer vodorovné alebo zvislé. Na jeho výzvu napíšte `S`, ak chcete zmeniť, aké blízko (na začiatku 0.05 jednotky výkresu a 1°).

## Pridanie rozmerov

1. Napíšte `DCHORIZONTAL` a stlačte {{key:Enter}}.
2. Kliknite blízko ľavého dolného rohu a potom blízko pravého dolného rohu.
3. Kliknutím pod obdĺžnik umiestnite kótovaciu čiaru.
4. Výzva zobrazí `Dimension text <d1=100>`. Napíšte `width=120` a stlačte {{key:Enter}}.

   Obdĺžnik má teraz šírku 120 a popisok zobrazuje `width=120`.
5. Napíšte `DCVERTICAL` a stlačte {{key:Enter}}, napíšte `O` a stlačte {{key:Enter}}, potom kliknite na pravú stranu.
6. Kliknite vpravo od nej, napíšte `width/2` a stlačte {{key:Enter}}.

   Výška je 60. Popisok zobrazuje `fx: d1=width/2`: hodnotu riadi výraz.

História teraz hlási, že obrys je plne zviazaný väzbami. Ak chcete zmeniť jeho veľkosť, zmeňte `width` (pozri [Používanie parametrov a rovníc](topic:parameters)), alebo dvakrát kliknite na popisok `width=120`, napíšte novú hodnotu a zvoľte {{ui:Použiť}}.

## Presúvanie objektov so väzbami

Presun, otočenie, mierka, úchyty aj panel {{ui:Vlastnosti}} všetky zachovávajú väzby: čo presuniete, ostane zviazané a zvyšok sa prispôsobí. Keď väzby nemôžu nasledovať, úprava sa nevykoná a história uvedie dôvod, napríklad "Nevykonané: väzby držia tento objekt na mieste". Zmazanie objektu zmaže aj jeho väzby.

## Zrkadlenie a orezanie objektov so väzbami

- {{cmd:MIRROR}} skopíruje väzby medzi zrkadlenými objektmi na kópie. Strany (akou stranou sa dotyčnica dotýka, ku ktorej strane sa meria vzdialenosť) sa pre zrkadlenú kópiu znovu určia a skopírované kóty dostanú vlastné názvy, rovnako ako pri prilepení. Pri voľbe `Erase source objects` `Y` väzby zostanú na zrkadlených objektoch. História uvedie, koľko ich prišlo.
- {{cmd:TRIM}} ponechá väzby čiary alebo oblúka na zostávajúcej časti: väzba na konci prejde na kus, ktorý si tento koniec ešte zachováva; pravidlo o smere ({{ui:Vodorovne}}, {{ui:Zvisle}}, {{ui:Rovnobežná}}, {{ui:Kolmá}}) platí pre každý kus a kóta medzi dvoma vonkajšími koncami ich ďalej meria. Väzby, ktoré držali odrezanú časť, alebo dĺžka, ktorú rez zmenil ({{ui:Rovnaká}}, uhol oblúka), zaniknú. Orezaná kružnica si zachová väzby stredu a polomeru. Orezané lomené čiary svoje väzby stratia.

## Väzby

| Príkaz | Zachová |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | čiaru alebo úsečku vodorovne alebo zvisle (`2P`: dva body vodorovne alebo zvisle) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dve čiary rovnobežné, kolmé alebo na jednej priamke |
| {{cmd:GCCOINCIDENT}} | dva body spolu; `O`: bod na čiare, kružnici alebo oblúku |
| {{cmd:GCTANGENT}} | čiaru a kružnicu alebo oblúk, alebo dva z nich, dotýkajúce sa |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dve kružnice alebo oblúky s jedným stredom; dve dĺžky alebo dva polomery rovnaké |
| {{cmd:GCSYMMETRIC}} | dva body, čiary alebo kružnice zrkadlené cez čiaru |
| {{cmd:GCFIX}} | bod (kliknite blízko neho) alebo celý objekt (`O`) tam, kde je |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | vzdialenosť |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | polomer, priemer, uhol medzi dvoma čiarami alebo uhol oblúka |

{{cmd:GEOMCONSTRAINT}} a {{cmd:DIMCONSTRAINT}} sa spýtajú, ktorú; {{ui:Väzba}} a {{ui:Kóta}} v skupine {{ui:Parametrické}} ich spustia a {{ui:Viac}} tam vypíše každú. Kam kliknete, určí časť: kliknutie blízko konca, stredu alebo stredu kružnice vezme daný bod; kliknutie na lomenú čiaru vezme segment pod kurzorom. Prvý objekt zostane na mieste a druhý sa presunie, aby sa s ním stretol.

Väzba, ktorá je v konflikte s inými alebo nič nepridá, lebo ju ostatné už implikujú, sa odmietne s hlásením a nič sa nepohne.

## Zobrazenie, výber a zmazanie

- Kliknutím na pole v paneli väzieb (alebo na štvorček splynutia, alebo na popisok kóty) vyberiete danú väzbu; história ju pomenuje. Stlačte {{key:Delete}}, ak ju chcete zmazať.
- {{cmd:DELCONSTRAINT}} zmaže všetky väzby z vybraných objektov.
- {{cmd:CONSTRAINTBAR}}: `S` zobrazí všetky panely, `H` ich skryje; ak chcete zobraziť alebo skryť panely konkrétnych objektov, najprv ich vyberte. {{ui:Viac}} obsahuje {{ui:Zobraziť panely väzieb}} a {{ui:Skryť panely väzieb}}.
- {{cmd:DCDISPLAY}} zobrazí alebo skryje rozmerové väzby. Nikdy sa nevykresľujú.
- {{cmd:DCCONVERT}} premení kóty nakreslené na čiarach, kružniciach a oblúkoch na rozmerové väzby.

:::note
Ak ste používali parametrické kreslenie v AutoCADe, názvy príkazov a výzvy sú rovnaké. Väzby a parametre sa ukladajú do súborov DWG a DXF v podobe, ktorú iné programy ignorujú; pozri [Súbory](topic:files#constraints-in-files).
:::
