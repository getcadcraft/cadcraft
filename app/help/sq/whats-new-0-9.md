---
title: Çfarë ka të re në 0.9 (më herët)
summary: Vijëzime që ndjekin kufirin e tyre, grupe shtresash, kate të stivosura, mure të zgjuara 2D me dyer dhe dritare, stile teksti dhe një redaktues tekstesh të formatuar, një rresht komande lundrues, kapje në rrjetë, dhjetë mënyra për të vizatuar një hark, dhe paneli i Dokumenteve.
keywords: çfarë ka të re 0.9, versioni i mëparshëm, çfarë ka të re, 0.9, shënime versioni, ndryshimet, vijëzim, vijëzim që ndjek kufirin, hatchedit, skedar pat, skedar modeli, grupe shtresash, laygroup, kate, kate të stivosura, floorlayers, mure të zgjuara, mur, derë, dritare, mjete muri, stil teksti, style, redaktuesi mtext, tekst paragrafi, formatim, rresht komande lundrues, rreshti i komandës, zona e sipërme, kompakte, kapje në rrjetë, grid snap, f9, hark, paneli i dokumenteve, check out, kufij çeliku UK, draw.io, tekst thai, dxf r12, 0.8, 0.8.1, versioni, veçori të reja, plotësim automatik, hije, skedë, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, vizatim pa shikim, lexues ekrani, limits, bearings, aunits, shx, diagram, ole, historik, krahaso, me fjalë, veti, këmbë dhe inç, stretch, gjuhët, pajisjet hyrëse, probleme, live, asistentët
from: 3451e64c
---

Kjo është ajo që ndryshoi në CadCraft 0.9, krahasuar me 0.8.1. CadCraft është aplikacioni 2D dhe 3D i vizatimit të CadCraft Studio 0.9 dhe tetë aplikacioneve të tij. 0.9 e përfundon vizatimin e planeve, shton stile teksti dhe një redaktues të vërtetë teksti, dhe të jep më shumë hapësirë në ekran.

## E re

### Vizatimi i planeve

- **Vijëzime që ndjekin kufirin e tyre.** {{cmd:HATCH}} lidhet me atë që e kufizon. Zhvendos, rrotullo ose shkalloje kufirin dhe vijëzimi dhe modeli i tij shkojnë me të; ri-formëso atë dhe vijëzimi llogaritet sërish. {{cmd:HATCHEDIT}} (`HE`) e ndryshon vijëzimin më pas dhe e bën ose e mbyll lidhjen. Shih [Vijëzimi dhe zonat e mbushura](topic:hatch).
- **Skedarë modelesh vijëzimi.** Te pyetja e {{cmd:HATCH}} `Pick internal point`, shkruaj `F` (Pattern file) dhe zgjidh një skedar `.pat`. Janë provuar vetëm skedarë të shkruar në formatin e zakonshëm.
- **Grupe shtresash.** Te {{ui:Mjetet}} në panelin {{ui:Shtresat}}: {{ui:Grup i ri}}, {{ui:Shto grupe të gatshme}}, {{ui:Grupo sipas emrit}} dhe {{ui:Gjej një shtresë}}; ose shkruaj {{cmd:LAYGROUP}} (`LG`). Shih [Organizo një vizatim me shtresa](topic:layers#group-layers).
- **Kate të stivosura.** {{cmd:FLOORS}} (`FLR`), ose {{ui:Katet…}} te menuja {{ui:Më shumë}} e grupit {{ui:Pamja}}. Një pamje në një fletë mund të shfaqë një kat nën {{ui:Kati i shfaqur}} te Vetitë. {{cmd:FLOORLAYERS}} i kthen katet në shtresa për një skedar që do t'i dërgohet dikujt tjetër. Shih [Stivos katet në një vizatim](topic:floors).
- **Mure të zgjuara 2D, dyer dhe dritare.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) dhe {{cmd:DELOPENING}}. Qoshet, bashkimet T dhe kryqëzimet llogariten për ty. Muret mbajnë një regjistër të mënyrës si bashkohen, dhe Vetitë marrin Ndalo bashkimin në fillim / në fund, një Vijë vendndodhjeje dhe një Gjatësi të ndryshueshme. Shih [Vizato mure, dyer dhe dritare 2D](topic:walls-2d).
- **Veglat e murit mbi muret e planit.** Shkruaj {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} dhe të tjerat. Akoma nuk kanë butona në shirit. Shih [Format muri, prerje, zhvendosje dhe kyçje për muret 2D](topic:wall-tools-2d).

### Tekst

- **Stile teksti.** {{cmd:STYLE}} (`ST`), ose {{ui:Stili i tekstit}} te shiriti {{ui:Vizato}}: stile të emërtuara me një font, lartësi, faktor gjerësie dhe pjerrësi. Shih [Cakto fontin dhe madhësinë e tekstit me stile teksti](topic:text-styles).
- **Një redaktues i formatuar i tekstit të paragrafit.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ose një dyklikim mbi tekst hap një kuti me font, madhësi, të trashë, të pjerrët, të nënvizuar, të prerë, ngjyrë, shtrirje dhe shenjat e shkallës, plus-minus dhe diametrit, si dhe {{ui:OK}} dhe {{ui:Anulo}}. Shih [Formato tekstin e paragrafit](topic:format-paragraph-text).
- **Një diagram nga XML i draw.io.** {{cmd:DIAGRAM}} (`T2D`) lexon edhe XML të draw.io të ngjitur. Shih [Vizato një diagram nga tekst](topic:text-to-diagram).
- **Tekst thai në printimin PDF.** Më parë dilte si pikëpyetje.

### Më shumë hapësirë dhe ndihmesa vizatimi

- **Një rresht komande lundrues dhe më i hollë, dhe një zonë e sipërme kompakte.** Zvarrit dorezën e rreshtit të komandës për ta bërë lundrues, zvarrit skajin e sipërm për më pak rreshta, {{key:F2}} hap historikun. {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Rreshti i komandës}} dhe zgjedhjet e zonës së sipërme kanë të njëjtat cilësime. Shih [Cilësimet](topic:settings#command-line).
- **Menuja e kapjes së objekteve.** Kliko me të djathtën {{ui:Kapje}} në shiritin e statusit, ose shkruaj {{cmd:OSNAP}}.
- **Kapje në rrjetë.** Butoni {{ui:Kapje në rrjetë}} në shiritin e statusit, ose {{key:F9}}: pikat e zgjedhura shkojnë te pika më e afërt e rrjetës kur asnjë kapje objekti nuk e mori pikën.
- **Hark në dhjetë mënyra, dhe Vazhdim.** {{ui:Hark}} te grupi {{ui:Vizato}} ose {{cmd:ARC}}: 3 pika, familja Start/Center/End dhe familja Center/Start/End, dhe Vazhdim (shtyp {{key:Enter}} te pika fillestare) nga vija, harku ose polivijë e fundit.
- **Paneli i Dokumenteve.** {{cmd:DOCUMENTS}} (`DOCS`) ose {{ui:Dokumentet…}} te menuja {{ui:Më shumë}} e grupit {{ui:Pamja}}: revizion, gjendje dhe marrje për çdo vizatim në një dosje projekti. Hapet si dialog i qendërzuar. Shih [Dokumentet](topic:documents).

### Skedarët

- **Madhësi çeliku të Mbretërisë së Bashkuar.** 976 profile në panelin Standard, të shkruara ashtu si në vizatime (për shembull `305x165x40 UB`).
- **Paketa të Afrikës së Jugut** (praktika vizatimi dhe rregullore ndërtimi) si paketa të shtojcës Rregullore ndërtimi. Numrat nuk janë verifikuar.
- **Shtojca për CadCraft,** shtohen sipas kërkesës dhe janë fikur si parazgjedhje: dizajni i ndriçimit të brendshëm, dizajni i çipave (HDL në skemë), gdhendja me router, simulimi i qarqeve, zinxhirë rrotash me dhëmbëzim dhe paketat e vendeve të shtojcës Rregullore ndërtimi.

## Ndrequr

- Zhvendosja, rrotullimi ose shkallëzimi i një vijëzimi linte pas modelin e tij.
- {{cmd:GRIDMOVE}} e merrte me vete një mur të tërë të planit që fillon vetëm në vijën e rrjetës. Tani një mur gjykohet nga skajet e tij.
- Rrjeta shfaqej vetëm brenda kufijve të vizatimit edhe me kufijtë e fikur.
- Lista e blloqeve në panelin anësor lëviz, dhe një emër që nuk është bllok liston blloqet që fillojnë me të ("Did you mean").
- Skedarët DXF R12 që AutoCAD i refuzonte ("Unknown group 1001 for table") hapen tani atje.
- Skedarët shumë të mëdhenj (rreth 70,000 entitete e lart) dështonin me "Maximum call stack size exceeded".
- Skedarët DWG nga AutoCAD 2018 e më vonë me një version të lartë mirëmbajtjeje dështonin me "bad BITLONG code 11".
- Te kutia e paragrafit të tekstit, një madhësi e re e shkruar për një pjesë të zgjedhur mban zgjedhjen.

## Në çdo aplikacion

Këshilla Bootstrap në çdo kontroll që ka një ndihmë, një këshillë fillestare që mund ta mbyllësh, rreshta skedash që lëvizin kur nuk futen, dhe titulli i skedës së shfletuesit që ndjek vizatimin e hapur (`<drawing> - CadCraft | CadCraft`). {{ui:Cilësimet}} › {{ui:Paraqitja}} është tani një listë me zgjedhje me dy rreshta. Lista e gjuhëve te {{ui:Cilësimet}} është më e gjatë se në 0.8. Bashkëpunimi i drejtpërdrejtë, koleksionet e Bibliotekës dhe njësitë e peshës dhe të temperaturës përshkruhen në shënimet e Studio.

## Kufizime të sinqerta

- Teksti i paragrafit nuk ka lista me pika ose të numëruara, vizore tabulimi ose drejtim. PDF-të e printuara vendosin tekstin në Helvetica.
- Muret e planit janë të drejta, kështu që një hark vizatohet si mure të shkurtra. Kontrolli i komunitetit mbi veglën e murit është në pritje.
- Grupet e shtresave nuk shkruhen në formatin e vet të AutoCAD, kështu që AutoCAD i shfaq si një listë e sheshtë. Programet e tjera i shfaqin të gjitha katet së bashku përveç nëse e ekzekuton {{cmd:FLOORLAYERS}}.
- Paneli i Dokumenteve nuk është provuar nga dy persona në një ndarje reale. Gdhendja me router nuk është provuar në asnjë makinë reale. Vlerësimi i ndriçimit u kontrollua me një gjurmim fotonesh, jo me një program tjetër. Shtojcat inxhinierike janë mjete kontrolli, jo zëvendësim për rishikimin e një inxhinieri.
- Gjuhët e tjera nga anglishtja janë skica të bëra nga makina, dhe disa nga fjalët e reja janë vetëm në anglisht.
