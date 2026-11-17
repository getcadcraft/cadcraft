---
title: Placér stålprofiler og standarddele
summary: Tegn stålprofiler, kote og 3D-profiler ud fra de publicerede profiltabeller, placér bolte, møtrikker, skiver, stifter, lejer, kiler og tandhjul efter deres standarder, og opliste dem i en stykliste.
keywords: stål, profil, snit, form, w-profil, bredflange, dobbelt-T, kanal, vinkel, hss, rør, pipe, ipe, hea, heb, upn, bjælke, søjle, profil, kote, aisc, en 10365, bolt, skrue, møtrik, skive, stift, dorn, leje, kile, kilespor, tandhjul, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standarddele, stykliste, bom, steelmember, partslist
from: 547c1048
---

Fanen {{ui:Standard}} i biblioteket har to slags ting, lavet her ud fra publicerede tabeller (intet hentes):

- **Stålprofiler**: 1,335 størrelser. W, S, C, L, HSS og Pipe fra AISC Shapes Database v16.0; IPE, HEA, HEB og UPN fra EN 10365:2017. DetailCraft bruger den samme tabel.
- **Standarddele**: sekskantskruer (ISO 4017), sekskantbolte (ISO 4014), sekskantmøtrikker (ISO 4032), almindelige skiver (ISO 7089), tommesekskantbolte og -møtrikker (ASME B18.2.1 og B18.2.2), parallelle stifter (ISO 2338), rillekuglelejer (ISO 15), parallelle kiler (DIN 6885-1) og cylindriske tandhjul (moduler fra ISO 54).

Alt her deles under CC0: du kan bruge det til hvad som helst, uden kildeangivelse.

## Placér et stålprofil

1. Åbn biblioteket ({{ui:Bibliotek}} i gruppen Blokke, eller skriv `LIB`) og klik på fanen {{ui:Standard}}.
2. Vælg familien i den første liste, for eksempel {{ui:W-profiler}}. Skriv i søgefeltet for at indsnævre størrelserne: `W12` viser alle W12.
3. Under {{ui:Placér som}} vælger du:
   - {{ui:Snit}}: tværsnittet, med dets centrum i indsætningspunktet.
   - {{ui:Kote}}: profilen set fra siden, så lang som {{ui:Længde (mm)}} angiver, fra midten af dens venstre ende.
   - {{ui:3D-profil}}: et massivt legeme på 3D-fanen (nedenfor).
4. Klik på {{ui:Placér}} på størrelsens kort, og klik derefter, hvor den skal være, som for ethvert biblioteksemne.

Et snit eller en kote bliver til en blok. Dens attributter angiver størrelsen, tabellen den kommer fra, længden (for en kote) og et materiale, du kan udfylde.

:::note
S-profiler, kanaler og UPN tegnes med parallelle flanger af den gennemsnitlige tykkelse, og vinkler med firkantede hjørner: de rigtige flanger er skrå, og hjørnerne er afrundede. W, IPE, HEA og HEB har deres rodudrundinger, og HSS sine hjørneradier.
:::

## Lav et 3D-profil

Vælg {{ui:3D-profil}} og klik på {{ui:Placér}}, eller skriv {{cmd:STEELMEMBER}} (`SMEMBER`) på kommandolinjen:

1. Ved `Section size` trykker du {{key:Enter}} for den viste størrelse, eller skriver en, for eksempel `HSS6x6x1/4` eller `IPE300`.
2. Klik på startpunktet, og derefter på slutpunktet. Profilen løber mellem dem og står på jorden.
3. For en søjle skriver du `C`, klikker på dens fodpunkt og skriver dens højde.

Profilen er et lukket massivt legeme på 3D-fanen. Flyt eller kopiér det der som ethvert andet massivt legeme. {{key:Mod+Z}} fjerner det igen.

## Placér en standarddel

1. På fanen {{ui:Standard}} vælger du familien, for eksempel {{ui:Sekskantskruer}}.
2. Til en skrue, bolt, stift eller kile skriver du dens {{ui:Længde (mm)}} (tommer for tommefamilierne). Til et tandhjul skriver du {{ui:Tænder}}, {{ui:Tandbredde (mm)}} og {{ui:Boring (mm)}}. Lad et felt stå tomt for at bruge den sædvanlige værdi, der vises i det.
3. Klik på {{ui:Placér}} på størrelsen, og klik, hvor den skal være.

Skruer, bolte og stifter tegnes set fra siden med hovedets bærefalde i indsætningspunktet; møtrikker, skiver, lejer og tandhjul vender fladt ud; kiler tegnes ovenfra. Gevind tegnes på sædvanlig måde: bunden som en tynd linje, gevindenden som en tyk. Tandhjul tegnes som deres spidscirkel, delecirkel og rodcirkel, ikke tand for tand.

Hver dels blok har sin type, standard, størrelse, længde og materiale som attributter, og sin vægt ud fra den nominelle form i stål. Ændr materialet i panelet {{ui:Egenskaber}}.

De samme dele findes også i biblioteket som emner, og PartCraft åbner dem som parametriske dele ({{ui:Standarddel}} i gruppen Fil).

## Lav en stykliste

- I biblioteket klikker du på {{ui:Stykliste}}: alle standarddele og stålprofiler i tegningen, grupperet efter type, standard, størrelse, længde og materiale, med antal og positionsnumre. {{ui:Download CSV}} gemmer den til et regneark.
- For at tegne den skriver du {{cmd:PARTSLIST}} (`PLIST`), klikker på tabellens øverste venstre hjørne og trykker {{key:Enter}} for den sædvanlige teksthøjde, eller skriver en.

Listen læses fra blokkenes attributter, så den stadig er korrekt, efter tegningen er gemt som DWG eller DXF og åbnet igen.

## Almindelige fejl

- **"Intet stålprofil hedder …"**: skriv størrelsen, som fanen {{ui:Standard}} viser den: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Profilen er på 3D-fanen, ikke i planen.** {{cmd:STEELMEMBER}} laver et massivt legeme; åbn 3D-fanen for at se det. For at vise stålet i planen, placér også et {{ui:Snit}} eller en {{ui:Kote}}.
- **En længde uden for området.** En bolt skal være længere end sit hoved, og en kile længere end den er bred. Teksten under kortene siger, hvilken værdi der blev afvist.
