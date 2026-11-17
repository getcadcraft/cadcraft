---
title: Egenskapspanelen
summary: Se och ändra allt om de markerade objekten, många på en gång: koordinater med Z, storlekar, text, måttinställningar, transparens och mer. Fält tar uttryck och längder med enheter.
keywords: summor, total längd, total area, summa, markeringens längd, egenskaper, egenskapspalett, ctrl+1, pr, ch, mo, ddmodify, varierar, snabbmarkering, pickadd, koordinater, z, höjd, tjocklek, transparens, material, hyperlänk, uttryck, quickcalc, hörn, måttstil, tolerans, decimaler
from: 10d6a829
---

## Vad du lär dig

Hur du öppnar egenskapspanelen, ändrar ett objekt eller hundra på ett steg, skriver exakta koordinater (med Z), använder uttryck och enheter i alla talfält, och vad varje typ av objekt visar.

## Öppna den

Panelen sitter till höger. För att föra den till fronten:

- Tryck {{key:Mod+1}}, eller skriv {{cmd:PROPERTIES}} (eller `PR`, `CH`, `MO`).
- Dubbelklicka på ett objekt (text och flerhänvisningar öppnar sin textredigerare i stället).

Panelen är en flyttbar panel som de andra: dra dess handtag för att docka den till vänster, höger eller nederst, eller släpp den över ritningen för att göra den flytande (se [Ordna panelerna och använd en andra bildskärm](common:arrange-panels)).

### Fälla ihop den

Nålknappen uppe till höger i panelen slår på **automatisk dold**: panelen fälls ihop till en remsa vid högerkanten och ritningen får utrymmet. Peka på remsan (eller tryck {{key:Mod+1}}) och den öppnas över ritningen; flytta bort och den fälls ihop igen. Klicka på nålen igen för att hålla den öppen. {{cmd:PROPERTIESCLOSE}} fäller också ihop den.

## Sektioner

Egenskaperna är grupperade i sektioner som du kan fälla: **Allmänt**, **Geometri**, **Text**, **Linjer och pilar**, **Anpassa**, **Primära enheter**, **Alternativa enheter**, **Toleranser**, **Mönster**, **Övrigt**, och för block **Attribut** och **Biblioteksobjekt**. Klicka på en sektions namn för att fälla ihop eller öppna den; CadCraft kommer ihåg vilka du fällt ihop.

Dra den tunna linjen mellan namnen och värdena för att göra namnen bredare eller smalare. Dubbelklicka på den för att återställa den. Med tangentbordet sätter du fokus på den och använder piltangenterna.

## Ändra ett värde

1. Klicka på en rad. Rubriken säger ”Linje”.
2. Klicka i {{ui:Längd}}. Medan du redigerar visar fältet hela värdet, inte det avrundade.
3. Skriv `2500` och tryck {{key:Enter}}. Linjen är nu 2500 lång och behåller sin startpunkt och vinkel.

{{key:Enter}} eller ett klick någon annanstans tillämpar värdet; {{key:Esc}} återställer det gamla värdet. Varje ändring är ett steg att ångra.

### Uttryck och enheter

Varje talfält tar mer än ett vanligt tal:

| Du skriver | Du får |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (tum, i en ritning i fot och tum) |
| `900mm`, `3.5m`, `2ft` | Omvandlat till ritningens enheter |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (vinkelfält) |
| `0.5r`, `100g` | Radianer och gon, omräknat till grader |

En längd med en enhet kräver att ritningen har enheter: ställ in {{ui:Enheter}} under {{ui:Nya objekt}} (med inget markerat) först. En felaktig post avvisas med en anteckning under panelen och inget ändras; den sparas aldrig som 0. Funktioner: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; vinklar i grader.

## Ändra många objekt på en gång

1. Markera flera objekt, till exempel 8 linjer och 4 måttsättningar.
2. Rubriken säger ”12 objekt”, och en lista överst erbjuder **Alla (12)**, **Linje (8)** och **Måttsättning (4)**.
3. **Alla** visar vad varje objekt har (lager, färg, linjetyp …). Välj **Måttsättning (4)** för att se måttinställningarna.
4. Ändra ett värde, till exempel {{ui:Decimaler}} till `1`.

Alla fyra måttsättningarna ändras, i ett steg att ångra. Ett fält som står **Varierar** betyder att objekten skiljer sig åt; att skriva ett värde sätter det på alla. Objekt på låsta lager lämnas som de är, och anteckningen säger hur många.

## Summor för en markering

När flera objekt är markerade säger avsnittet {{ui:Summor}} överst:

- **Objekt**: hur många av varje slag, till exempel ”8 linjer, 2 polylinjer, 1 cirkel”.
- **Total längd**: linjer, bågar och polylinjer adderade (splines räknas också), och hur många objekt det är.
- **Total area**: de slutna adderade: cirklar, hela ellipser, slutna polylinjer och skraffering (en skrafferings hål dras av).

De visas i ritningens längdformat (fot och tum när den använder dem; areor då i kvadrattum och kvadratfot). Statusfältet visar samma längd och area när objekt är markerade; {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Längd och area för markeringen}} › {{ui:Dolda}} stänger av det. För ett enda objekt visar {{ui:Geometri}} dess egen längd och area, som förut.

## Koordinater

Varje punkt visar **X**, **Y** och **Z**: start och slut på en linje, centrum, infogningspunkter, textpositioner, den aktuella polylinjehörnet. Linjer visar också **Delta X**, **Delta Y** och **Delta Z** (skrivskyddade). Polylinjer och skraffering har en **Höjd** (ett Z för hela objektet).

Knappen med korshåret bredvid en punkts namn låter dig välja den i ritningen i stället: klicka på den och klicka sedan på den nya positionen (fångster fungerar). Värdena är världskoordinater.

## Allmänt

| Fält | Vad det är |
|---|---|
| {{ui:Lager}}, {{ui:Färg}}, {{ui:Linjetyp}}, {{ui:Linjetypsskala}}, {{ui:Linjetjocklek}} | Som i lagerpanelen; {{ui:Enligt lager}} följer lagret |
| {{ui:Transparens}} | Enligt lager, enligt block, eller 0 till 90 % |
| {{ui:Tjocklek}} | Hur långt linjer, cirklar, bågar, polylinjer, punkter och text sträcker sig i Z |
| {{ui:Material}} | Enligt lager, enligt block, Globalt eller ett namn som en ritning tog med |
| {{ui:Plottstil}} | Skrivskyddad: ritningar plottas efter färg, via bladets [plottstilstabell](topic:plot-pdf#plot-style-tables) |
| {{ui:Hyperlänk}} | En webbadress som sparas med objektet |

## Vad varje typ visar

| Markerat | Du kan ändra |
|---|---|
| Linje | Start- och slut-X, Y, Z; längd; vinkel |
| Cirkel | Centrum; radie; diameter; omkrets; area (var och en sätter radien) |
| Båge | Centrum; radie; start- och slutvinkel; total vinkel; korda (visar bågens längd och area) |
| Ellips | Centrum; större och mindre radie; radieförhållande; storaxelns vinkel; start- och slutvinkel |
| Polylinje | Hörnbläddraren (nedan); global bredd; höjd; sluten; area när den är sluten (skalar den kring sitt centrum) |
| Text | Innehåll; stil; justering; höjd; rotation; breddfaktor; lutningsvinkel; definierad bredd; radavstånd; annoterande; position |
| Blockreferens | Infogningspunkt; rotation; skala X, Y, Z och enhetlig skala; attributvärden |
| Skraffering | Mönster; skala; vinkel; origo; associativ; öidentifiering; bakgrundsfärg; höjd |
| Måttsättning | Se nedan |
| Flerhänvisning | Text; höjd; bredd; textsida; pilspetsstorlek; landningsavstånd; pilspetspunkt |
| Vyport | Skala; centrum och storlek på bladet; vyns centrum i modellen; på; visningslås |

### Polylinjehörn

{{ui:Aktuellt hörn}} visar vilket hörn fälten under den hör till. Använd pilknapparna, eller skriv ett nummer, för att flytta till ett annat hörn; det finns ingen gräns för hur många. Varje hörn har X, Y, bredd för start- och slutsegmentet, och bulgen för segmentet som börjar där (0 = rakt).

## Måttsättningar

En måttsättning visar sin **Måttstil**, vad den mäter, sina punkter, och varje inställning:

- **Linjer och pilar:** pilspets för varje ände, pilstorlek, tickstorlek, färger och linjetjocklekar för mållinjen och hjälplinjerna, dölja någondera halvan eller någondera hjälplinjen, hjälplinjens förskjutning och förlängning.
- **Text:** åsidosättning (lämna tomt för det uppmätta värdet; `<>` står för det i din egen text), stil, färg, höjd, förskjutning, vertikal och horisontell position, alltid horisontell, rotation, bakgrundsfyllning.
- **Anpassa:** total skala, baslinjeavstånd, vad som flyttas när utrymmet är knappt, textens förflyttning.
- **Primära enheter:** format, decimaler, avrundning, prefix, suffix, mätskala, decimalseparator, undertryck inledande och avslutande nollor; för vinklar vinkelformatet och decimaler.
- **Alternativa enheter:** på eller av, format, decimaler, multiplikator (25.4 gör tum till millimeter), avrundning, prefix och suffix.
- **Toleranser:** ingen, symmetrisk, avvikelse, gränser eller bas, med övre och nedre värden, decimaler, höjd och position.

Att ändra något av dem på en öppnad måttsättning tar bort den bild som det andra programmet ritade av den, och CadCraft ritar om den.

:::note
Den horisontella textpositionen (bredvid första eller andra hjälplinjen) och text under linjen ritas på linjära och justerade måttsättningar; på andra måttsättningar sparas de men ritas inte ännu. Anpassningsvalen sparas men ritas inte ännu: CadCraft placerar text enligt sin egen regel (ovanför linjen, utanför när den inte får plats).
:::

## Ingenting markerat

Med inget markerat visar panelen:

- **Nya objekt:** lagret, färgen, linjetypen, linjetjockleken och textens höjd som nya objekt får; ritningens enheter och längdformat; det aktuella lagrets linjetyp och linjetjocklek; storlekar för nya måttsättningar. På ett blad kommer bladets namn, papper och orientering först.
- **Vy:** centrum, höjd och bredd på det som syns på skärmen. Skriv ett värde för att flytta vyn dit.
- **Övrigt:** UCS-ikonen på eller av, UCS (alltid Värld: CadCraft har ännu inga användardefinierade koordinatsystem) och annoteringsskalan.

## Knapparna överst

| Knapp | Gör |
|---|---|
| Tratt | {{cmd:QSELECT}}: markera efter typ och egenskap |
| Pekare | {{cmd:SELECT}}: markera objekt på kommandoraden |
| Plus eller 1 | Om ett klick lägger till i markeringen (plus) eller ersätter den (1); samma inställning som {{ui:Inställningar}}, {{ui:CadCraft}} |
| Nål | Automatisk dold, ovan |

## Vanliga misstag

- **Att skriva i ett fält gjorde ingenting.** Tryck {{key:Enter}} eller klicka någon annanstans för att tillämpa det. Ett rött fält och en anteckning betyder att posten avvisades.
- **En längd med en enhet avvisas.** Ritningen har inga enheter. Ställ in {{ui:Enheter}} med inget markerat.
- **Bara Lager och Färg visas.** Flera slag av objekt är markerade och **Alla** är valt. Välj ett slag i listan överst.
- **Vissa objekt ändrades inte.** De ligger på ett låst lager. Lås upp lagret i lagerpanelen.
- **Skrivna bokstäver hamnade i ett fält.** När ett fält har markören skriver tangenterna där. Tryck {{key:Enter}} eller {{key:Esc}}, och skriv sedan kommandot.
