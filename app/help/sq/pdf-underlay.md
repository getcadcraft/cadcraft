---
title: Nënshtresat PDF dhe importimi i PDF
summary: Vendos një faqe PDF nën vizatimin tënd për ta gjurmuar dhe printuar, ose kthe vijat dhe tekstin e faqes në objekte vizatimi.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, nënshtresë, gjurmo, importo pdf, skanim, planimetri, zbeh, kufizo, shtresat, kapje, hap pdf
from: aa301d0f
---

## Dy mënyra për të sjellë një faqe PDF

- **Bashkëngjit** ({{cmd:PDFATTACH}}) e mban PDF-në si imazh nën vizatimin tënd. E gjurmon, kapesh pas vijave të saj, e zbeh, e kufizon, dhe printohet me fletën. Vizatimi mban vetëm emrin e skedarit.
- **Importo** ({{cmd:PDFIMPORT}}) e kthen vijat, kurbat, mbushjet dhe tekstin e faqes në objekte të zakonshme vizatimi, në shtresa me emra sipas PDF-së. Janë të tuajat për t'i redaktuar, dhe PDF-ja nuk nevojitet më pas.

Hapja e një PDF me {{ui:Hap}} të pyet cilën nga dy mënyrat dëshiron.

## Bashkëngjit një faqe

1. Shkruaj `PDFATTACH` (ose `PDFATT`) dhe zgjidh PDF-në. Nëse ka disa faqe, shkruaj numrin e faqes.
2. Kliko pikën e futjes (cepi i poshtëm majtas i faqes).
3. Shtyp {{key:Enter}} për madhësinë reale të faqes, ose shkruaj shkallën: njësi vizatimi për pikë PDF (një pikë është 1/72 inç, pra 0.3528 në një vizatim në milimetra).
4. Shtyp {{key:Enter}} për asnjë rrotullim, ose shkruaj një kënd.

Faqja është një objekt si referencë blloku: lëviz, rrotullo, shkallëzo, kopjo, fshi dhe vendose në një shtresë. Fik shtresën e saj dhe zhduket. Zmadho dhe faqja vizatohet sërish e mprehtë.

## Gjurmoje

Me {{ui:Kapje}} të ndezur, kursori kapet te vijat e vetë PDF-së: pikat fundore, mesi dhe kryqëzimet (dhe {{ui:Më i afërti}} kur ai kapje është i ndezur). Teksti i shkruar si shkronja në faqe nuk kapet.

## Rregulloje

- `PDFADJUST`: **Zbehje** (0 deri 80 për qind), **Kontrast** (0 deri 100), **{{ui:Monokrome (e zezë)}}**, dhe **Ndez/fik** për ta fshehur pa e fshirë.
- `PDFCLIP`: shfaq vetëm një drejtkëndësh ose shumëkëndësh të faqes; **Fshi** heq kufizimin.
- `PDFLAYERS`: një PDF mund të ketë shtresat e veta. Komanda i liston; shkruaj një numër për ta ndezur ose fikur atë shtresë për këtë nënshtresë. Shtresat që skedari i ka të fikura nisin të fikura.

## Printo dhe ruaj

PLOT printon faqen si vijat, mbushjet dhe tekstin e saj (kështu mbetet e mprehtë dhe e kërkueshme). Imazhet brenda PDF-së shfaqen në ekran, por nuk printohen ende.

Një DWG ose DXF 2000 e mban nënshtresën si lidhje: emrin e skedarit, faqen, vendin, shkallën, rrotullimin, kufizimin, zbehjen dhe kontrastin. Vetë PDF-ja nuk është në vizatim. Rihap vizatimin, shkruaj `PDF` dhe zgjidh sërish skedarin; faqet shfaqen si korniza deri atëherë, dhe marrin madhësinë e tyre reale kur e bën këtë. DXF më i vjetër (R12) nuk ka nënshtresa: mban kornizën dhe emrin. Mënyra si programet e tjera i lexojnë kufizimin dhe shkallën e ruajtur nuk është kontrolluar ende te ato.

## Importo një faqe

1. Shkruaj `PDFIMPORT` (ose `PDFIM`) dhe zgjidh PDF-në dhe faqen.
2. Kliko ku duhet të shkojë cepi i poshtëm majtas i faqes.
3. Shtyp {{key:Enter}} për madhësinë reale, shkruaj një shkallë, ose zgjidh **Dy pika**: faqja vizatohet në madhësinë reale, pastaj kliko dy pika të një distance që di dhe shkruaj distancën reale; gjithçka shkallëzohet që të përputhet.

Vijat bëhen vija dhe polivija, rrathët dhe harqet njihen, format e mbushura bëhen vijëzime të ngurta, dhe teksti bëhet tekst në një shtresë që mbaron me `-TEXT`. Është një hap i vetëm zhbërjeje. Imazhet brenda PDF-së nuk importohen: bashkëngjit faqen në vend të kësaj. Një skanim (faqe që është vetëm imazh) nuk ka vija për të importuar.

PDF-të lexohen si skedarë të pabesuar: nuk ekzekutohet asnjë skript, dhe një faqe shumë e madhe ndalet shkurt dhe njoftohet.
