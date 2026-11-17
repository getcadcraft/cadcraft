---
title: Cakto madhësitë, decimalet dhe shkallën e përmasave
summary: Zgjidh lartësinë e tekstit, madhësinë e shigjetave, decimalet dhe shkallën e përgjithshme për përmasat e reja, ndrysho ato ekzistuese, dhe kupto si funksionojnë stilet e përmasave në CadCraft.
keywords: stil përmase, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, shkalla e përgjithshme, decimalet, madhësia e shigjetës, shkalla e shënimit, dimtextunit, njësitë në tekst, mm, cm, m, km, milimetra, metra, dimlfac, dimpost
from: 8ec82a07
---

## Çfarë do të mësoni

Sa të mëdha janë teksti dhe shigjetat e përmasave, si t'i caktoni për një vizatim të printuar 1:50 ose 1:100, dhe si të ndryshoni përmasat që keni bërë tashmë.

## Si funksionojnë madhësitë e përmasave

Çdo përmasë mban grupin e vet të madhësive: lartësinë e tekstit, madhësinë e shigjetës, decimalet, hapësirën rreth tekstit, sa vazhdojnë vijat zgjatuese përtej vijës së përmasës, dhe sa larg fillojnë nga objekti. Parazgjedhjet janë afër stilit të zakonshëm ISO:

| Cilësimi | Parazgjedhja | Komanda |
|---|---|---|
| Lartësia e tekstit | 2.5 | {{cmd:DIMTXT}} |
| Madhësia e shigjetës | 2.5 | {{cmd:DIMASZ}} |
| Decimalet | 2 (zerot në fund hiqen) | {{cmd:DIMDEC}} |
| Hapësira rreth tekstit | 0.625 | {{cmd:DIMGAP}} |
| Zgjatja përtej vijës së përmasës | 1.25 | {{cmd:DIMEXE}} |
| Ofseti nga objekti | 0.625 | {{cmd:DIMEXO}} |
| Shkalla e përgjithshme | 1 | {{cmd:DIMSCALE}} |

Çdo madhësi shumëzohet me **shkallën e përgjithshme**. Caktoni madhësitë siç i dëshironi në letër (tekst 2.5 mm), dhe caktoni shkallën e përgjithshme sipas shkallës së printimit (50 për 1:50). Teksti del atëherë 2.5 × 50 = 125 njësi vizatimi i lartë, që printohet 2.5 mm.

:::note
Stilet e emëruara të përmasave menaxhohen me {{cmd:DIMSTYLE}}: shihni seksionin më poshtë. Çdo përmasë mban gjithashtu cilësimet me të cilat u bë, kështu që mund ta ndryshoni një përmasë vetëm te {{ui:Vetitë}}.
:::

## Caktoni madhësitë për përmasat e reja

Secila mënyrë më poshtë ndryshon vetëm përmasat që do të bëni më pas.

### Te paneli Cilësimet aktuale

1. Shtypni {{key:Esc}} që të mos ketë asgjë të zgjedhur. Te skeda {{ui:Modeli}}, paneli i djathtë lexon {{ui:Cilësimet aktuale}}.
2. Lëvizni poshtë panelit te {{ui:Përmasat e reja}}, pas rreshtave të shtresës, ngjyrës, njësive dhe {{ui:Shtresa 0}} (në ekran të vogël ai fillon nën skajin e poshtëm). Klikoni te {{ui:Shkalla e përgjithshme}}, shkruani `50` dhe shtypni {{key:Enter}}.
3. Caktoni {{ui:Lartësia e tekstit}}, {{ui:Madhësia e shigjetës}} dhe {{ui:Decimalet}} në të njëjtën mënyrë, nëse dëshironi vlera të tjera.

Shiriti i gjendjes konfirmon secilën, për shembull "Shkalla e përgjithshme për përmasat e reja: 50".

### Te linja e komandave

1. Shkruani `DIMSCALE` dhe shtypni {{key:Enter}}.
2. Te `Enter new value for DIMSCALE <1>`, shkruani `50` dhe shtypni {{key:Enter}}.

Historiku konfirmon "DIMSCALE = 50. Përmasat e reja e përdorin; zgjidhni ato ekzistuese për t'ua ndryshuar." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} dhe {{cmd:DIMEXO}} punojnë në të njëjtën mënyrë. Shtypni {{key:Enter}} te kërkesa për të mbajtur vlerën aktuale.

### Këmbët dhe inçat te përmasat

Përmasat e reja e përdorin formatin e gjatësisë së vizatimit: caktojeni me {{ui:Formati i gjatësisë}} te {{ui:Cilësimet aktuale}} ose me {{cmd:UNITS}} (shihni [Këmbët dhe inçat](topic:units-papers-scales#feet-and-inches-and-fractions)), dhe përmasa e radhës lexon `12'-6 1/2"`. {{cmd:DIMLUNIT}} cakton vetëm formatin e përmasave (2 për dhjetore, 3 inxhinierik, 4 arkitekturor, 5 thyesor). Për një përmasë që keni bërë tashmë, zgjidhni atë, pastaj zgjidhni {{ui:Formati}} te {{ui:Vetitë}}; me një format thyesor, kutia e {{ui:Thyesës}} merr fuqinë e dyshit (4 = 1/16).

## Përmasat në mm, cm, m ose km

Një përmasë mat në njësi vizatimi. Mund ta shkruajë atë gjatësi në milimetra, centimetra, metra ose kilometra, me njësinë pas numrit: një mur 1250 mm lexohet `1250 mm`, `125 cm`, `1.25 m` ose `0.00125 km`.

1. Caktoni fillimisht {{ui:Njësitë}} e vizatimit te {{ui:Cilësimet aktuale}} (shihni [Njësitë, madhësitë e letrës dhe shkallët](topic:units-papers-scales#drawing-units)), që CadCraft të dijë sa është një njësi vizatimi. Një vizatim pa njësi lexohet si milimetra, dhe {{cmd:DIMTEXTUNIT}} e thotë këtë.
2. Për përmasat e reja: shtypni {{key:Esc}} që të mos ketë asgjë të zgjedhur, dhe nën {{ui:Përmasat e reja}} zgjidhni {{ui:Njësitë në tekst}}: {{ui:Njësitë e vizatimit}}, `mm`, `cm`, `m` ose `km`.
3. Për përmasat që keni bërë tashmë: zgjidhini, dhe te {{ui:Vetitë}} › {{ui:Njësitë kryesore}} zgjidhni {{ui:Njësitë në tekst}}.

Ose shkruani {{cmd:DIMTEXTUNIT}} (`DTU`) dhe përgjigjuni `D`, `MM`, `CM`, `M` ose `KM`: me përmasa të zgjedhura i ndryshon ato (një hap zhbërjeje), me asgjë të zgjedhur cakton përmasat e reja.

{{ui:Decimalet}} ({{cmd:DIMDEC}}) ende cakton sa shifra dhjetore shfaqen: me metra dhe 3 decimale, 1234 mm lexohet `1.234 m`. Teksti shkruhet si numër dhjetor. Në një fletë, përmasat matin në njësinë e letrës së fletës (milimetra ose inç).

Një DWG ose DXF i ruajtur e mban zgjedhjen si shkallën e matjes së përmasës (DIMLFAC) dhe një shtesë (DIMPOST, ` m`), që programet e tjera të shfaqin të njëjtin tekst. Nëse ndryshoni më vonë {{ui:Njësitë}} e vizatimit, përmasat e shkruara në mm, cm, m ose km rillogariten, kështu që vazhdojnë të thonë gjatësinë e saktë. {{ui:Caktuar me dorë (shkallë ose shtesë)}} do të thotë se {{ui:Shkalla e matjes}} ose shtesa e përmasës u caktua ndryshe; zgjidhni një njësi për t'i zëvendësuar.

## Ndryshoni përmasat që keni bërë tashmë

1. Klikoni një përmasë. Titulli i panelit të djathtë lexon {{ui:Përmasa}}.
2. Cilësimet janë në seksione; lëvizni poshtë panelit për të arritur ato të mëvonshmet:
   - {{ui:Të përgjithshme}}: {{ui:Stili i përmasës}}
   - {{ui:Gjeometria}}: {{ui:Lloji}} dhe {{ui:Matja}} (vetëm lexim)
   - {{ui:Teksti}}: {{ui:Mbishkrimi i tekstit}} dhe {{ui:Lartësia e tekstit}}
   - {{ui:Vijat dhe shigjetat}}: {{ui:Madhësia e shigjetës}}
   - {{ui:Përshtatja}}: {{ui:Shkalla e përgjithshme}}
   - {{ui:Njësitë kryesore}}: {{ui:Decimalet}}
3. Shkruani një vlerë të re dhe shtypni {{key:Enter}}.

Përmasa vizatohet menjëherë sërish. Për përmasat këndore, {{ui:Decimalet (°)}} cakton decimalet e këndit.

:::note
Me disa përmasa të zgjedhura, paneli shfaq rreshtat që kanë të përbashkët, dhe një vlerë që ndryshon mes tyre lexohet {{ui:Ndryshon}}. Një vlerë që shkruani ndryshon çdo përmasë të zgjedhur në një hap të vetëm, kështu që një {{key:Mod+Z}} i kthen të gjitha.
:::

## Përmasat nga vizatime të hapura

Një përmasë nga një DWG ose DXF i hapur shfaqet saktësisht siç e vizatoi programi tjetër. Paneli i saj thotë "Shfaqet si e vizatoi programi që e bëri. Ndryshoje dhe CadCraft e vizaton sërish në stilin e vet." Sapo ndryshoni ndonjë vlerë, lëvizni një grip, ose zhvendosni përmasën, CadCraft e rivizaton me shigjetat dhe shkronjat e veta, duke përdorur madhësitë që lexoi nga skedari.

Disa përmasa mund të lexohen vetëm siç u vizatuan, jo si përmasa të redaktueshme; paneli atëherë shfaq "Vizatuar nga" dhe një emër blloku, dhe kutia "Rreth këtij skedari" i numëron ato.

## Gabime të zakonshme

- **Ndryshimi i DIMSCALE nuk ndryshoi asgjë në ekran.** Cilësimi është për përmasat e reja. Zgjidhni ato ekzistuese dhe ndryshoni {{ui:Shkalla e përgjithshme}} në panel.
- **Decimalet shfaqin më pak shifra se sa u caktuan.** Zerot në fund hiqen: me 2 decimale shfaqet `1250` dhe `1250.5`, jo `1250.00`.
- **Teksti ka lartësinë e duhur në letër në një pamje dritareje, por jo në printimin e modelit.** Shkalla e përgjithshme duhet të përputhet me shkallën me të cilën printoni. Printimi në Fit to paper jep një shkallë të çuditshme; zgjidhni një shkallë standarde te dialogu i printimit.
- **Njësi si mm ose m në tekst.** Zgjidhni {{ui:Njësitë në tekst}} (shihni [Përmasat në mm, cm, m ose km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Për çdo fjalë tjetër pas numrit, shkruajeni në një mbishkrim: `<> TYP.`.

## Stilet e emëruara të përmasave

Shkruani `DIMSTYLE` (`D`) për të hapur {{ui:Menaxheri i stileve të përmasave}}. Ai liston stilet e vizatimit, sa përmasa përdor secili, dhe cili është aktual. **Standard** gjithmonë është aty.

- {{ui:Cakto aktualen}}: përmasat e reja përdorin cilësimet e atij stili dhe e mbajnë emrin e tij.
- {{ui:E re…}}: një stil i ri që nis si kopje e atij që zgjidhni.
- {{ui:Modifiko…}}: të njëjtat fusha si seksioni i përmasës te {{ui:Vetitë}} (vijat dhe shigjetat, teksti, përshtatja, njësitë, njësitë alternative, toleranca). Shtypni {{ui:OK}} dhe stili ndryshon **dhe çdo përmasë që e përdor ndryshon me të**, cilësim pas cilësimi. Një cilësim që keni ndryshuar vetëm te një përmasë mbetet ashtu, përveç rastit kur stili e ndryshon atë cilësim.
- {{ui:Riemëro…}} dhe {{ui:Fshi}}: Standard nuk mund të riemërohet ose fshihet, as stili aktual, as një stil që e përdorin përmasat.
- {{ui:Krahaso…}}: ç'ndryshon mes dy stileve.
- {{ui:Apliko te të zgjedhurat}}: zgjidhni përmasat më parë; ato marrin cilësimet e stilit dhe emrin e tij.

`-DIMSTYLE` bën të njëjtën gjë në linjën e komandave: `Restore`, `Save` (cilësimet aktuale, duke përfshirë atë që keni shkruar me {{cmd:DIMTXT}} dhe të tjerat, nën një emër), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stilet ruhen në një DWG ose DXF (tabela e stileve të përmasave të tij) dhe lexohen nga skedarët që hapni. Stili *aktual* nuk ruhet: një vizatim hapet me Standard aktual. Standard e mban cilësimin e vet ndërsa një stil tjetër është aktual.

## Ndryshoni tekstin dhe vijat zgjatuese të përmasës

{{cmd:DIMEDIT}} (`DED`) punon me përmasat që zgjidhni: **Home** e kthen tekstin aty ku e vendos stili, **New** shkruan tekst tjetër (`<>` përfaqëson matjen), **Rotate** e rrotullon tekstin, **Oblique** e prin vijat zgjatuese të përmasave lineare dhe të paralele me një kënd që shkruani (shtypni {{key:Enter}} për asnjë). {{cmd:DIMTEDIT}} e zhvendos tekstin në të **majtë**, **djathtë** ose **qendër** të vijës së përmasës, ose e rrotullon (**Angle**), ose e kthen në **Home**. Teksti gjithmonë ndodhet mbi vijën e përmasës: nuk mund të zvarritet në një vend të lirë.
