---
title: Shtresat e hartës nën vizatim
summary: Shfaqni harta rrugësh, fotografi ajrore ose një figurë me një skedar botë nën hapësirën e modelit, të vendosura sipas sistemit koordinativ të vizatimit.
keywords: hartë, shtresat e hartës, maplayers, ml, geomap, basemap, ajror, satelitor, pllaka, xyz, wms, wmts, shërbim hartash, skedar botë, sistem koordinativ, epsg, state plane, utm, georeferencim, plan vendi, gjeolokacion, vendndodhje gjeografike, gjeodata, ruajtur, dwg, dxf
from: f103045f
---

## Çfarë do të krijoni

Një plan vendi i vizatuar mbi një fotografi ajrore ose një hartë rrugësh, secila në vendin e duhur.

## Tregojini CadCraft ku ndodhet vizatimi

1. Vendosni njësitë e vizatimit te {{ui:Vetitë}} › {{ui:Njësitë}} (për shembull këmbë ose metra).
2. Shkruani {{cmd:MAPLAYERS}} (ose `ML`) dhe shtypni {{key:Enter}}.
3. Nën {{ui:Ku ndodhet vizatimi}}, shkruani një emër ose një kod EPSG te {{ui:Gjej një sistem}} (për shembull `2277` ose `Texas Central`) dhe zgjidhni atë te {{ui:Sistemi}}.
4. Nëse vizatimi është bërë me koordinatat e atij sistemi, lëreni vendosjen në 0. Nëse jo, jepni një pikë të vizatimit ({{ui:X i vizatimit}}, {{ui:Y i vizatimit}}), ku ndodhet ajo pikë në rrjetin e hartës ({{ui:Lindja}}, {{ui:Veriu}}), dhe sa është kthyer vizatimi nga lindja ({{ui:Kthyer (°)}}).
5. Klikoni {{ui:Përdor këtë sistem}}.

## Shtoni një shtresë

1. Aktivizoni {{ui:Shtresat e hartës nga interneti}} në krye të dialogut. Deri atëherë asnjë server nuk pyetet për asgjë; kur është i aktivizuar, serverët që shtoni e shohin zonën në ekran dhe adresën tuaj të internetit, kurrë vizatimin tuaj.
2. Te {{ui:Shto një shtresë}}, zgjidhni nga vjen:
   - **Pllaka (XYZ)**: një adresë pllake me `{z}`, `{x}` dhe `{y}`, një emër dhe kredia që kërkon ofruesi i saj.
   - **WMS**, **WMTS** ose **ArcGIS**: adresa e shërbimit, pastaj {{ui:Merr shtresat}} dhe zgjidhni një.
   - **Një figurë**: një PNG ose JPEG me skedarin e vet botë (dhe skedarin `.prj`, kur ka).
3. Shtresa shfaqet nën vizatim. Kredia e saj shfaqet në këndin e poshtëm të djathtë të vizatimit.

Secila shtresë në listë mund të fshihet, të bëhet më pak ose më shumë transparente, të zhvendoset lart ose poshtë, ose të hiqet.

Çdo ndryshim i sistemit ose i shtresave është një hap i {{cmd:UNDO}}.

## Ruhet me vizatimin

Sistemi koordinativ dhe lista e shtresave ruhen në vizatim kur e ruani si DWG ose DXF, dhe kthehen kur e hapni sërish, në çdo kompjuter. Figurat nga skedarë nuk ruhen: shtojini sërish pasi ta hapni. Çelësi {{ui:Shtresat e hartës nga interneti}} nuk ruhet në vizatim: i përket këtij shfletuesi, kështu që një vizatim që ju dërgon dikush nuk kërkon asgjë nga asnjë server derisa ta aktivizoni vetë.

Çfarë shohin programet e tjera:

| Ruajtur si | Vendndodhja e vizatimit | Shtresat e hartës |
|---|---|---|
| DWG 2010, 2013 ose 2018, DXF 2000 | Shkruar në mënyrën standarde që lexojnë programet për vendndodhjen gjeografike të një vizatimi: kodi EPSG i sistemit, një pikë e vizatimit dhe ku ndodhet ajo në rrjetin e hartës, njësitë dhe veriu. | Vetëm CadCraft |
| DWG 2000, 2004 ose 2007, DXF R12 | Vetëm CadCraft (CadCraft e thotë këtë kur ruani) | Vetëm CadCraft |

- **Kontrolluar:** ODA File Converter e lexon vendndodhjen pa gabime, dhe një bibliotekë DXF (ezdxf) lexon saktë kodin EPSG dhe vendosjen.
- **Ende jo i kontrolluar:** nëse programe të tjera hartimi e njohin sistemin nga kodi i tij EPSG. Një program që mban listën e vet të sistemeve me emra të tjerë mund ta shfaqë vizatimin pa asnjë vendndodhje.
- Programe të tjera shfaqin në listën e blloqeve një bllok me emrin `CADCRAFT_GEO`. Është kopja e CadCraft të sistemit dhe të shtresave; nuk vendoset kurrë në vizatim. Lëreni aty.

## Vizatime nga programe të tjera

Kur një vizatim nga një program tjetër ka një vendndodhje gjeografike, CadCraft e lexon:

- Nëse emëron një kod EPSG, {{ui:Ku ndodhet vizatimi}} shfaq atë sistem dhe shtresat e hartës vendosen sipas tij.
- Nëse CadCraft nuk e njeh sistemin (emri i programit tjetër për të, një rrjet lokal, ose një faktor shkalle), vendndodhja nuk përdoret, por mbahet dhe ruhet përsëri ashtu si ishte, që programi tjetër ta gjejë ende. Zgjidhni një sistem te {{ui:Ku ndodhet vizatimi}} për ta zëvendësuar.

:::note
Shtresat e hartës vizatohen vetëm në ekran: nuk printohen. Përdorni vetëm shërbime hartash, kushtet e të cilave e lejojnë këtë, dhe mbajeni kredinë e tyre të dukshme.
:::
