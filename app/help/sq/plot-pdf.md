---
title: Nxirr në PDF
summary: Bëj një PDF të një fletë në madhësi të plotë, ose të modelit në një shkallë ose të përshtatur në letër, printoje nga shfletuesi ose nga Studio, ose ruaje si PNG ose SVG.
keywords: printo, printim, printues, kopje, png, svg, imazh, pdf, publiko, exportpdf, letër, shkallë, monokrome, gri, bardhë e zi, trashësia e vijës, stilolaps, konfigurimi i faqes, dritare printimi, stili i printimit, tabela e stilit të printimit, ctb, varur nga ngjyra, rrjetëzim, plotstyles, stylesmanager
from: a4752f83
---

## Çfarë do të bësh

Një PDF e një fletë në madhësi të plotë, pastaj një PDF të shpejtë të modelit në 1:100, dhe një printim.

PDF-ja bëhet brenda shfletuesit tënd; asgjë nuk ngarkohet. Është një PDF vektoriale: vijat mbeten të mprehta në çdo zmadhim, dhe teksti mund të kërkohet.

## Printo një fletë

1. Kliko skedën e fletës nën vizatim.
2. Shtyp {{key:Mod+P}}, kliko {{ui:Printo}}, ose shkruaj `PLOT` dhe shtyp {{key:Enter}}.

Dialogu {{ui:Nxirr në PDF}} hapet. Ai thotë cilën fletë printon dhe në cilën letër, "në madhësi të plotë … siç e shikon". Pamja paraprake djathtas tregon fletën.

3. Te {{ui:Stili i printimit}}, zgjidh {{ui:Monokrome (e zezë)}} për vija të zeza, {{ui:Ngjyra (siç është vizatuar)}} për të mbajtur ngjyrat, {{ui:Gri}}, ose një tabelë tënden (shih [Tabelat e stilit të printimit](topic:plot-pdf#plot-style-tables)). Fleta e mban këtë zgjedhje: ruhet me vizatimin.
4. Te {{ui:Trashësia e vijës}}, zgjidh një trashësi stilolapsi nga 0.13 mm deri 0.70 mm. Vijat me trashësinë e parazgjedhur printohen në këtë gjerësi; vijat me trashësinë e tyre (shtresë ose objekt, ose stilolapsi i ngjyrës së tyre në tabelë) printohen në atë.
5. Kliko {{ui:Shkarko PDF}}.

Shfletuesi shkarkon një PDF me emrin e vizatimit dhe të fletës, për shembull `Drawing1-A-101 Plan.pdf`. Historiku raporton madhësinë e saj në bajt dhe madhësinë e letrës në milimetra.

Një fletë gjithmonë printohet 1:1 në letrën e vet. Për të ndryshuar letrën, ndrysho te vetë fleta (shih [Konfiguro një fletë](topic:sheets-and-viewports)). Shtresat e vendosura të mos printohen lihen jashtë, po ashtu edhe kornizat e dritareve.

## Çdo fletë në një PDF

Me dy ose më shumë fletë, dialogu {{ui:Nxirr në PDF}} ka {{ui:Të gjitha fletët në një PDF}}; ose shkruaj {{cmd:PUBLISH}}. {{key:Enter}} merr çdo fletë; `[Disa (S)]` kërkon emrat e tyre, të ndarë me presje. Një PDF shkarkohet me një faqe për çdo fletë, sipas renditjes së skedave, secila në madhësinë e vet të letrës, dhe me një shënues për çdo fletë me emrin e saj. Çdo fletë printohet me tabelën e vet të stilit; një fletë pa zgjedhje përdor atë që zgjodhe të fundit në dialog, dhe trashësinë e stilolapsit që zgjodhe të fundit.

## Printo modelin

1. Kliko skedën {{ui:Modeli}}.
2. Shtyp {{key:Mod+P}}.

Dialogu thotë se printon modelin në një fletë letre, dhe shfaq më shumë cilësime:

3. Te {{ui:Sipërfaqe}}, zgjidh çfarë të printohet:
   - {{ui:Gjithçka (shtrirja)}}: i gjithë vizatimi.
   - {{ui:Ajo që është në ekran}}: zona që shikon tani në vizatim.
   - {{ui:Një dritare…}}: pastaj kliko {{ui:Zgjidh}}, kliko dy cepa në vizatim, dhe dialogu kthehet.
4. Te {{ui:Letra}}, zgjidh një madhësi: ISO A4 deri A0, Letter, Legal, Tabloid dhe ANSI C dhe D, ose ARCH C, D dhe E.
5. Te {{ui:Orientimi}}, zgjidh {{ui:Horizontal}} ose {{ui:Vertikal}}.
6. Te {{ui:Shkalla}}, zgjidh {{ui:Përshtat në letër}} ose një shkallë si `1:100`.

Nën cilësimet, një rresht raporton shkallën dhe sa madhe del zona në letër. Nëse është më e madhe se letra, thotë kështu: skajet priten. Zgjidh një shkallë më të vogël, një letër më të madhe, ose {{ui:Përshtat në letër}}.

7. Kliko {{ui:Shkarko PDF}}.

Një printim i modelit lë një kufi 5 mm rreth skajit, sepse shumica e printerëve nuk printojnë deri në skaj. {{ui:Përshtat në letër}} jep një shkallë të çuditshme (historiku dhe rreshti i informacionit thonë "(përshtatur)"); zgjidh një shkallë standarde kur vizatimi duhet të matet i saktë.

:::note
Shkallët lexohen në njësi reale. Që 1:100 të jetë e saktë, vendos {{ui:Njësitë}} te {{ui:Cilësimet aktuale}} në atë që është një njësi vizatimi. Një vizatim pa njësi merret si milimetra.
:::

## Tabelat e stilit të printimit

Një tabelë e stilit të printimit thotë si printohet secila nga 255 ngjyrat standarde të vizatimit, ashtu si bën një tabelë stili e varur nga ngjyra (CTB) në programet e tjera CAD. Tre janë të integruara:

| Tabela | Printon |
|---|---|
| {{ui:Ngjyra (siç është vizatuar)}} | Çdo objekt në ngjyrën e vet. |
| {{ui:Monokrome (e zezë)}} | Çdo ngjyrë e zezë: zgjedhja e zakonshme për vizatimet. |
| {{ui:Gri}} | Çdo ngjyrë si gri e saj, që ngjyrat të mbeten të dallueshme në një printer bardhë e zi. |

Për ta bërë tënden, për shembull vija të kuqe të trasha dhe të zeza, gjithçka tjetër të hollë:

1. Te dialogu {{ui:Nxirr në PDF}}, kliko {{ui:Redakto tabelat…}} (ose shkruaj {{cmd:PLOTSTYLES}}).
2. Kliko {{ui:E re}}, dhe shkruaj një emër si `zyra` te {{ui:Emri}}. Për të nisur nga një tabelë e integruar, zgjidhe te {{ui:Tabela}} dhe kliko {{ui:Kopjo}}.
3. Kliko një ngjyrë në rrjet. {{key:Shift}}+klik zgjedh një varg ngjyrash, {{key:Mod}}+klik shton edhe një, dhe {{ui:Përzgjidh çdo ngjyrë}} i merr të gjitha.
4. Vendos çfarë printojnë ngjyrat e zgjedhura:
   - {{ui:Printohet në}}: {{ui:Ngjyrën e vet}}, {{ui:E zezë}} ose {{ui:Një ngjyrë tjetër…}}.
   - {{ui:Si gri}}: ngjyra si gri e saj.
   - {{ui:Bojë (%)}}: 100 është bojë e plotë, 50 është gjysma e rrugës drejt të bardhës (rrjetëzim), për vija në sfond.
   - {{ui:Trashësia e vijës}}: {{ui:Trashësinë e vet}} mban trashësinë e objektit ose shtresës; një vlerë printon çdo vijë të asaj ngjyre në atë gjerësi.
   - {{ui:Lloji i vijës}}: printo çdo vijë të asaj ngjyre me një lloj tjetër vije (për shembull gjithçka e kuqe me viza); {{ui:Përdor llojin e vijës së objektit}} i lë ato.
   - {{ui:Fundi i vijës}} dhe {{ui:Lidhja e vijave}}: skaje të prera, katrore ose të rrumbullakosura, dhe kthesa me qoshe të prera, të skuqura ose të rrumbullakosura (të rrumbullakosura, si më parë, kur nuk vendos asgjë).
   - {{ui:Lloji i mbushjes}}: një mbushje e ngurtë e asaj ngjyre printohet si vija vijëzimi (shirita horizontale ose vertikale, pjerrësi, kryq, rombe, pika katrore) në vend të bojës, për printerë dhe plane ku boja e sheshtë është shumë e rëndë.

   Tabela ka dy cilësime të tjera: {{ui:Trashësitë e vijave}}, gjerësitë që njeh (një vijë e printuar shkon te më e afërta prej tyre), dhe {{ui:Shkalla e vijës}}, një faktor mbi vijat e çdo lloji vije që nuk është ISO.
5. Kliko {{ui:U krye}}. Tabela mbahet në vizatim, dhe fleta (ose modeli) tani printohet me të. {{ui:Anulo}} heq ndryshimet.

Një ngjyrë me stilolapsin e vet shfaq një pikë në cepin e saj, dhe një pikë në fund kur vendos një trashësi vije. Një objekt me ngjyrë reale (jo një nga 255) përdor stilolapsin e ngjyrës standarde më të afërt.

Vizatimi mban tabelat e tij dhe zgjedhjen e çdo fletë kur ruan si DWG (2000 deri 2018) ose DXF (R12 ose 2000), dhe hapet sërish me to. Programet e tjera e shohin emrin te konfigurimi i faqes së çdo fletë (`zyra.ctb`), jo vetë tabelën. Një vizatim nga një program tjetër, konfigurimi i faqes së të cilit emëron një tabelë si `monochrome.ctb`, printohet me tabelën e integruar me atë emër; për çdo emër tjetër dialogu thotë se vizatimi nuk e ka, dhe printon ngjyrat e vizatimit deri sa zgjedh një tabelë ose krijon një me atë emër.

Për të përdorur një tabelë në një vizatim tjetër, kliko {{ui:Eksporto}} te {{ui:Tabelat e stilit të printimit}} (ruan `zyra.plotstyle.json`), pastaj {{ui:Importo…}} në vizatimin tjetër. {{ui:Importo…}} pranon edhe një skedar `.ctb` nga një program tjetër: lexohet nga përshkrimi i publikuar i formatit dhe **nuk është kontrolluar ende me një skedar të vërtetë**. Lexohen ngjyra, rrjetëzimi dhe trashësia e vijës për çdo ngjyrë; shkallët e grit, numrat e stilolapsave, llojet e vijave, fundet dhe lidhjet e vijave dhe stilet e mbushjes nuk lexohen, dhe një tabelë me emër (`.stb`) refuzohet. Krahaso printimin e parë me atë që pret, dhe na dërgo skedarin nëse është gabim.

## Printo

**Në shfletues**, kliko {{ui:Printo…}}. CadCraft e bën PDF-në dhe hap dialogun e vetë printimit të shfletuesit. Zgjidh aty "Madhësia reale" ose 100% (jo "Përshtat") për të ruajtur shkallën. Nëse shfletuesi nuk do të printojë nga faqja, PDF-ja hapet në një skedë të re: printoje që aty me {{key:Mod+P}}.

Mund të klikosh edhe {{ui:Hap për printim}}: PDF-ja hapet në një skedë të re të shfletuesit, dhe e printon nga atje.

:::safari
Safari mund të shfaqë PDF-në dhe të presë që të përdorësh **Skedar**, pastaj **Printo**.
:::

Nëse shfletuesi bllokon skedën e re, CadCraft shkarkon PDF-në në vend të saj dhe e thotë këtë në historik. Lejo dritaret pop-up për sajtin që ta hapë në një skedë herës tjetër.

**Në CadCraft Studio**, dialogu {{ui:Nxirr në PDF}} liston printerët e kompjuterit. Zgjidh {{ui:Printuesi}}, {{ui:Letra në printues}} dhe numrin e {{ui:Kopje}}, pastaj kliko {{ui:Printo…}}. {{ui:Njëjtë me printimin}} zgjedh letrën e printerit që ka madhësinë e fletës (A3 për një fletë A3); kur printeri nuk ka, përdor letrën e vet dhe e përshtat fletën me të. Në Windows fleta dërgohet si imazh 300 dpi, sepse Windows nuk mund të printojë një PDF pa një program PDF; në Linux dhe macOS vetë PDF-ja shkon te shërbimi i printimit të sistemit. Asgjë nuk del nga kompjuteri.

## Skedarë imazhi dhe SVG

{{ui:Shkarko PNG}} ruan fletën e printuar si imazh me 300 dpi (ulet vetëm kur një fletë shumë e madhe do të ishte më e madhe se sa mund të bëjë shfletuesi; historiku e thotë këtë). {{ui:Shkarko SVG}} e ruan si vizatim të shkallëzueshëm në milimetra, me vijat dhe tekstin e printimit. Të dyja vijnë nga i njëjti printim si PDF-ja, me të njëjtin stil printimi, trashësi vije dhe sipërfaqe. Imazhet e vendosura në vizatim janë vetëm në PDF; historiku thotë sa u lanë jashtë.

## Imazhet

Imazhet printohen me rezolucionin e tyre, nën vijat. {{ui:Imazhet}} në dialog i kufizon në 600, 300 ose 150 dpi për një skedar më të vogël. Vijat, teksti dhe vijëzimet mbeten gjithmonë të mprehta (vektoriale), dhe transparenca mbetet transparencë. Shih [Imazhet në një vizatim](topic:pictures).

## Cilësimet që mbahen mend

Dialogu mban mend letrën, orientimin, shkallën dhe trashësinë e stilolapsit të fundit në këtë shfletues. Tabela e stilit të printimit mbahet me çdo fletë në vizatim; një fletë pa zgjedhje fillon me atë që zgjodhe të fundit. Një dritare e zgjedhur mbahet deri sa rifreskon faqen; pas kësaj dialogu fillon me {{ui:Gjithçka (shtrirja)}}.

## Gabime të zakonshme

- **PDF-ja është bosh ose butonat janë gri.** Nuk ka asgjë për të printuar (një model bosh), ose {{ui:Një dritare…}} është zgjedhur dhe nuk është zgjedhur ende një dritare ("Zgjidh dritaren për të printuar.").
- **Teksti shfaq "?" në PDF.** Teksti në polonisht, çekisht, cirilik, greqisht dhe shkrimet e tjera të Evropës printohet si ashtu është: PDF mban atëherë shkronjat që i duhen (nga fonti Liberation Sans, që ka gjerësitë e Helvetica), dhe teksti mund të zgjidhet dhe kërkohet. Teksti kinez, japonez dhe korean printohet gjithashtu si ashtu është: kur vizatimi e ka, printimi shkarkon një font më të madh (rreth 10 MB, një herë), dhe PDF-ja mban vetëm karakteret e përdorura, kështu që ka nevojë për lidhje herën e parë (jo në një kopje offline të ruajtur më parë). Ideogramet e rralla jashtë atij fonti, dhe shkrime si arabishtja dhe hebraishtja, printohen si "?", dhe historiku i numëron ato.
- **Të gjitha vijat kanë të njëjtën trashësi.** Trashësia e tyre është e parazgjedhur: jep shtresave ose objekteve një {{ui:Trashësia e vijës}} në panelin djathtas (shih [Trashësitë e vijave dhe llojet e vijave](topic:units-papers-scales#line-weights-and-linetypes)), ose vendos trashësi vijash për ngjyrë te një [tabelë e stilit të printimit](topic:plot-pdf#plot-style-tables).
- **"(nuk është në këtë vizatim)" pranë stilit të printimit.** Vizatimi erdhi nga një program tjetër dhe emëron një tabelë që nuk e përfshin. Zgjidh një nga tabelat, ose krijo një me atë emër.
- **Vijat ndërtimore u printuan.** Vendose shtresën e tyre të mos printohet: kliko butonin e printerit të saj te paneli {{ui:Shtresat}}.
- **Printimi del me madhësi të gabuar.** Printeri e ka shkallëzuar. Printo në madhësi reale.
- **{{key:Mod+P}} hapi dialogun e printimit të shfletuesit.** Kursori ishte në një kuti në panelin djathtas, ose ishte hapur një dialog tjetër. Shtyp {{key:Enter}} ose {{key:Esc}} për të dalë nga kutia, pastaj provo sërish, ose kliko {{ui:Printo}}.
- **{{key:Mod+P}} nuk bëri asgjë.** Po ekzekutohet një komandë. Shtyp {{key:Esc}} më parë.
