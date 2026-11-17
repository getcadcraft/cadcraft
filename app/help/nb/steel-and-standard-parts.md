---
title: Plasser stålprofiler og standarddeler
summary: Tegn stålprofiler, fasader og 3D-staver fra de publiserte profiltabellene, plasser bolter, muttere, skiver, stifter, lager, kiler og tannhjul fra standardene deres, og list dem i en stykkliste.
keywords: stål, profil, seksjon, form, W-profil, bredflens, I-bjelke, U-profil, vinkelprofil, HSS, rør, pipe, IPE, HEA, HEB, UPN, bjelke, søyle, stav, fasade, AISC, EN 10365, bolt, skrue, mutter, skive, stift, dorn, lager, kile, kilespor, tannhjul, ISO 4017, ISO 4014, ISO 4032, ISO 7089, ISO 2338, ISO 15, DIN 6885, ASME, standarddeler, stykkliste, mengdeliste, bom, stålstav, partslist
from: 547c1048
---

Biblioteket har to typer ting under fanen {{ui:Standard}}, laget her fra publiserte tabeller (ingenting lastes ned):

- **Stålprofiler**: 1,335 størrelser. W, S, C, L, HSS og Pipe fra AISC Shapes Database v16.0; IPE, HEA, HEB og UPN fra EN 10365:2017. DetailCraft bruker den samme tabellen.
- **Standarddeler**: sekskantskruer (ISO 4017), sekskantbolter (ISO 4014), sekskantmuttere (ISO 4032), vanlige skiver (ISO 7089), tommesekskantbolter og -muttere (ASME B18.2.1 og B18.2.2), parallelle stifter (ISO 2338), rillekulelager (ISO 15), parallelle kiler (DIN 6885-1) og rette tannhjul (moduler fra ISO 54).

Alt her deles under CC0: det kan brukes til hva som helst, uten kildehenvisning.

## Plasser en stålprofil

1. Åpne biblioteket ({{ui:Bibliotek}} i gruppen Blokk, eller skriv `LIB`) og klikk fanen {{ui:Standard}}.
2. Velg familien i den første listen, for eksempel {{ui:W-profiler}}. Skriv i søkefeltet for å begrense størrelsene: `W12` viser alle W12.
3. I {{ui:Plasser som}}, velg:
   - {{ui:Snitt}}: tverrsnittet, med sentrum i innsettingspunktet.
   - {{ui:Kote}}: staven sett fra siden, så lang som {{ui:Lengde (mm)}} sier, fra midten av venstre ende.
   - {{ui:3D-stav}}: et volumlegeme på 3D-fanen (nedenfor).
4. Klikk {{ui:Plasser}} på størrelsens kort, og klikk deretter der den skal plasseres, slik som for alle bibliotekselementer.

Et snitt eller en fasade blir en blokk. Attributtene har størrelsen, tabellen den kommer fra, lengden (for en fasade) og et materiale som kan fylles ut.

:::note
S-profiler, U-profiler og UPN tegnes med parallelle flenser med gjennomsnittlig tykkelse, og vinkelprofiler med kvadratiske hjørner: de virkelige flensene er skråstilt, og hjørnene avrundet. W, IPE, HEA og HEB har sine rotavrundinger, og HSS sine hjørneradier.
:::

## Lag en 3D-stav

Velg {{ui:3D-stav}} og klikk {{ui:Plasser}}, eller skriv {{cmd:STEELMEMBER}} (`SMEMBER`) på kommandolinjen:

1. Ved `Section size`, trykk {{key:Enter}} for størrelsen som vises, eller skriv en, for eksempel `HSS6x6x1/4` eller `IPE300`.
2. Klikk startpunktet, deretter sluttpunktet. Staven går mellom dem og står på bakken.
3. For en søyle, skriv `C`, klikk fotpunktet og skriv høyden.

Staven er et lukket volumlegeme på 3D-fanen. Flytt eller kopier den der, som ethvert annet volumlegeme. {{key:Mod+Z}} fjerner den igjen.

## Plasser en standarddel

1. På fanen {{ui:Standard}}, velg familien, for eksempel {{ui:Sekskantskruer}}.
2. For en skrue, bolt, stift eller kile, skriv {{ui:Lengde (mm)}} (tommer for tommefamiliene). For et tannhjul, skriv {{ui:Tenner}}, {{ui:Tannbredde (mm)}} og {{ui:Boring (mm)}}. La et felt være tomt for å bruke den vanlige verdien som vises i det.
3. Klikk {{ui:Plasser}} på størrelsen, og klikk der den skal plasseres.

Skruer, bolter og stifter tegnes fra siden, med hodets bæreflate i innsettingspunktet; muttere, skiver, lager og tannhjul tegnes forfra; kiler ovenfra. Gjenger tegnes slik det er vanlig: roten som en tynn linje, gjengeenden som en tykk. Tannhjul tegnes som topp-, delings- og rotsirkel, ikke tann for tann.

Blokken til hver del har type, standard, størrelse, lengde og materiale som attributter, og vekten fra den nominelle formen i stål. Endre materialet i panelet {{ui:Egenskaper}}.

De samme delene finnes også i biblioteket som elementer, og PartCraft åpner dem som parametriske deler ({{ui:Standarddel}} i gruppen Fil).

## Lag en stykkliste

- I biblioteket, klikk {{ui:Stykkliste}}: hver standarddel og stålprofil i tegningen, gruppert etter type, standard, størrelse, lengde og materiale, med antall og postnumrene. {{ui:Last ned CSV}} lagrer den for et regneark.
- For å tegne den, skriv {{cmd:PARTSLIST}} (`PLIST`), klikk tabellens øverste venstre hjørne, og trykk {{key:Enter}} for den vanlige teksthøyden eller skriv en.

Listen leses fra blokkenes attributter, så den er fortsatt riktig etter at tegningen er lagret som DWG eller DXF og åpnet igjen.

## Vanlige feil

- **«Ingen stålprofil heter …»**: skriv størrelsen slik fanen {{ui:Standard}} viser den: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Staven er på 3D-fanen, ikke i planen.** {{cmd:STEELMEMBER}} lager et volumlegeme; åpne 3D-fanen for å se det. For å vise stålet i planen, plasser også et {{ui:Snitt}} eller en {{ui:Kote}}.
- **En lengde utenfor området.** En bolt må være lengre enn hodet, og en kile lengre enn den er bred. Linjen under kortene sier hvilken verdi som ble avvist.
