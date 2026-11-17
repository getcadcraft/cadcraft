---
title: Grupet e fletëve
summary: Mblidh fletë nga shumë vizatime në një listë të vetme të numëruar, plotëso blloqet e tyre të titullit nga grupi, publikoji si një PDF të vetme dhe arkivo grupin si zip.
keywords: grup fletësh, menaxheri i grupit të fletëve, ssm, sheetset, ccsheets, dst, listë fletësh, indeks fletësh, bllok titulli, fusha, publiko, ri-numëro, arkivo, etransmit, transmetim, nëngrupe, fletë kopertine, listë vizatimesh
from: 2c855720
---

## Çfarë do të mësoni

Si të mblidhni fletë (paraqitje) nga disa skedarë vizatimi në një **grup fletësh**, t’i numëroni dhe t’i titulloni, t’u plotësohen blloqet e titullit automatikisht, ta publikoni gjithë grupin si një PDF të vetme, dhe t’i paketoni gjithçka në një zip për ta dërguar.

Një grup fletësh jeton në një skedar të vogël vetjak, `<name>.ccsheets`, në dosjen që mban vizatimet. Skedari i grupit liston fletët me shtigje nga kjo dosje, kështu që mund ta zhvendosni ose kopjoni gjithë dosjen.

:::note
Hapja e një dosjeje për ta lexuar dhe shkruar kërkon Chrome ose Edge (ato mund ta lejojnë një faqe të punojë në një dosje që zgjidhni), ose aplikacionin desktop. Shfletuesit e tjerë e hapin grupin vetëm për lexim: mund ta shikoni dhe ta publikoni, dhe skedari i grupit shkarkohet në vend që të ruhet.
:::

## Nis një grup

1. Gjej seksionin {{ui:Grup fletësh}} në panelin e majtë, dhe hap menynë e tij {{ui:Set}}. Shkrimi i {{cmd:SHEETSET}} (ose `SSM`) të çon gjithashtu atje.
2. Zgjidh {{ui:Grup i ri…}}. Jepini grupit një emër, dhe nëse dëshironi, emrin dhe numrin e projektit.
3. Zgjidh dosjen që mban vizatimet. Skedari i grupit ruhet atje.

Për ta hapur një grup më vonë, zgjidh {{ui:Hap grupin…}} dhe zgjidh të njëjtën dosje. Nëse dosja mban më shumë se një grup, CadCraft pyet cilin.

## Shto fletë

1. Zgjidh {{ui:Shto fletë nga një vizatim…}} dhe zgjidh një nga vizatimet e dosjes.
2. CadCraft e lexon atë vizatim në sfond (nuk hapet në ekran) dhe liston fletët e tij. Shëno ato që dëshiron dhe kliko {{ui:OK}}.
3. Zgjidh një fletë dhe shtyp {{key:F2}} (ose {{ui:Riemëro dhe ri-numëro…}}) për t’i dhënë një numër dhe titull, si `A-101` dhe `Floor plan`.

{{ui:Fletë e re nga shabllon…}} krijon një vizatim të ri nga fleta e një vizatimi tjetër (blloku i titullit dhe dritaret e pamjes së tij), të emërtuar sipas fletës së re, dhe e shton. Grupi e mban mend vizatimin që përdorët si shabllon.

## Rregulloni grupin

- **Nëngrupet** grupojnë fletë, si Arkitekturë › Planimetri: zgjidh aty ku do të shkojë dhe zgjidh {{ui:Nëngrup i ri…}}.
- **Rendi**: tërhiq një fletë në një vend tjetër të listës, ose mbi një nëngrup për ta zhvendosur atje. Me tastierë, zgjidhe dhe shtyp {{key:Alt+Up}} ose {{key:Alt+Down}}.
- **Hap një fletë**: kliko dy herë mbi të (ose shtyp {{key:Enter}}). Vizatimi i saj hapet në skedën e vet, te ajo fletë.
- **Hiq**: zgjidhe dhe shtyp {{key:Delete}}. Vetë vizatimi nuk ndryshon.
- **Zhbëj**: {{ui:Zhbëj ndryshimin e grupit}} dhe {{ui:Ribëj ndryshimin e grupit}} kalojnë nëpër atë që keni ndryshuar në grup.
- **Ri-numëro**: {{ui:Ri-numëro fletët…}} numëron çdo fletë, ose ato të një nëngrupi, sipas renditjes së listës: një prefiks, një fillim dhe një hap (`A-` dhe `101` japin A-101, A-102 …).

Çdo ndryshim ruhet menjëherë në skedarin e grupit.

## Numëro fletët sipas fushave të tyre

Në vend që t’i numëroni fletët me dorë, lëreni një rregull të ndërtojë çdo numër nga fushat e fletës, që një fletë që kalon në një kat ose disiplinë tjetër ta marrë numrin e ri vetvetiu.

1. Jepini çdo fletë fushat e saj: zgjidheni, kliko {{ui:Riemëro…}} dhe, te {{ui:Fushat e kësaj fletë}}, shkruani një për rresht, për shembull `DISCIPLINE = A` dhe `LEVEL = 1`. Një fushë që e ndan gjithë grupi (le të themi `DISCIPLINE = A`) mund të vendoset te {{ui:Veti…}} e grupit.
2. Hap menynë e panelit dhe kliko {{ui:Rregulli i numërimit…}}.
3. Shkruaj rregullin, për shembull `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` numëron deri te fletët që fushat e tjera i lexojnë njësoj, kështu që kati 1 merr A-101, A-102 dhe kati 2 fillon sërish në A-201. `{SEQ:2}` e shkruan me dy shifra; `{SUBSET}` është emri i nëngrupit ku ndodhet një fletë.
4. Zgjidh çfarë ndodh kur ndryshon një fushë: {{ui:Riemëro fletët}} i mban numrat sipas rregullit pas çdo ndryshimi; zgjedhja tjetër i numëron një herë, tani.

Rregulli ruhet në skedarin e grupit. Ndërsa ai ri-numëron vetvetiu, ndryshoni fushat e fletës, jo numrin e saj.

## Plotëso blloqet e titullit nga grupi

Një bllok titulli merr tekstin nga grupi kur atributet e tij etiketohen me emrin e një fushe:

| Etiketa | Çfarë shfaq |
|---|---|
| `SHEETNUMBER` (ose `SHEET_NO`, `DWG_NO`) | Numri i fletës |
| `SHEETTITLE` (ose `TITLE`, `SHEET_TITLE`) | Titulli i fletës |
| `SHEETDESC` | Përshkrimi i fletës |
| `PROJECTNAME` (ose `PROJECT`) | Emri i projektit |
| `PROJECTNUMBER` (ose `PROJECT_NO`, `JOB_NO`) | Numri i projektit |
| `SHEETSETNAME` | Emri i grupit |
| `SHEETINDEX`, `SHEETCOUNT` | "3 nga 12", dhe 12 |
| Të tuajat, si `CLIENT` | Çfarë keni shkruar për të te {{ui:Cakto fushat…}} |

{{ui:Cakto fushat…}} mban emrin dhe numrin e projektit dhe fushat tuaja, një për rresht si `NAME = value`.

{{ui:Përditëso vizatimet}} shkruan numrat, titujt dhe fushat në blloqet e titullit të çdo vizatimi të grupit, dhe riemëron skedën e paraqitjes së çdo fletë sipas grupit (si parazgjedhje numër dhe titull, si `A-101 Floor plan`; {{ui:Cakto fushat…}} › {{ui:Emrat e skedave të pamjes}} e ndryshon këtë). Çdo vizatim ruhet në vend, në formatin dhe versionin e vet. Pasi të ri-numëroni ose riemëroni fletë, ekzekutojeni sërish dhe skedat dhe blloqet e titullit ndjekin.

## Listë fletësh në fletën e kopertinës

Zgjidh fletën e kopertinës në listë dhe zgjidh {{ui:Vendos listën e fletëve në këtë fletë}}. Një tabelë e çdo fletë (numri dhe titulli, nën nëngrupin e saj) vendoset në qoshen e sipërme majtas të fletës. {{ui:Përditëso vizatimet}} dhe {{ui:Publiko në PDF}} e mbajnë të përditësuar. Është një bllok i vetëm, `CC_SHEETLIST`: zhvendoseni si çdo referencë blloku.

## Publiko grupin

{{ui:Publiko në PDF}} bën një PDF të vetme me një faqe për fletë, sipas renditjes së grupit, në madhësinë e letrës së secilës fletë, me një faqerojtës për çdo fletë ("A-101 — Floor plan"). Me një nëngrup të zgjedhur, CadCraft pyet nëse të publikohet vetëm ai nëngrup. Blloqet e titullit në PDF plotësohen nga grupi edhe para se të përditësoni vizatimet; vetë vizatimet nuk ndryshohen nga publikimi. PDF shkarkohet.

{{ui:Publiko në DWG…}} shkruan çdo fletë si DWG të vetë (DWG 2018): modelin dhe atë fletë të vetme, me blloqet e titullit të plotësuar nga grupi, të emërtuar sipas numrit dhe titullit (`A-101 Level 1 floor plan.dwg`). Zgjidh {{ui:DWG}}, ose {{ui:DWG + PDF}} për PDF-në e grupit pranë tyre. Një `publish.json` liston çdo skedar me madhësinë dhe SHA-256 të tij. Kur dosja e grupit mund të shkruhet (CadCraft Studio, ose një dosje që zgjodhët në shfletues), skedarët shkojnë në një dosje `<set name> - published`; ndryshe shkarkohen si një zip i vetëm. [Mbivendosjet e klasave](topic:viewport-overrides) të dritareve të pamjes vijnë me çdo DWG.

## Arkivo grupin

{{ui:Arkivo si zip}} paketon skedarin e grupit, çdo vizatim që përdor dhe ato që lidhen me ata vizatime (vizatime të lidhura, dhe të tyret në radhë, dhe imazhe), duke ruajtur dosjet e tyre, plus një `Transmittal.txt` që liston çdo skedar. Një lidhje që nuk është në dosjen e grupit listohet atje si e munguar. Lidhjet gjenden sipas shtegut të tyre nga vizatimi, pastaj sipas emrit të skedarit kudo në dosje.

## Skedari i grupit

Skedari `.ccsheets` është JSON që mund ta lexoni në çdo redaktues teksti:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Shtigjet janë relative me dosjen e grupit, me `/` midis dosjeve. CadCraft e kontrollon skedarin kur e hap: një shteg absolut, një fletë pa skedar ose paraqitje, ose tekst që nuk është tekst i thjeshtë, lihen jashtë, dhe historiku e thotë këtë.

## Zgjidhja e problemeve

| Çfarë shihni | Pse | Çfarë të bëni |
|---|---|---|
| "Kjo dosje është vetëm për lexim këtu" | Shfletuesi s’mund të shkruajë në një dosje | Përdorni Chrome ose Edge, ose aplikacionin desktop; ndërkohë {{ui:Shkarko skedarin e grupit}} i mban ndryshimet tuaja |
| Një fletë mungon nga PDF: "nuk ka paraqitje me emrin …" | Paraqitja e fletës u riemërua ose u hoq në vizatimin e saj | Hapni vizatimin dhe kontrolloni skedat e tij; hiqni fletën dhe shtojeni sërish |
| Një bllok titulli mbetet bosh | Atributet e tij kanë etiketa të tjera | Riemëroni etiketat e atributeve me emrat e fushave më sipër (BEDIT) |
| "ka tashmë një paraqitje me emrin … prandaj skeda nuk u riemërua" | Dy fletë të një vizatimi do të merrnin të njëjtin emër skede | Jepni njërës prej tyre një numër ose titull tjetër |
