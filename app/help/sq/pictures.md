---
title: Imazhet në një vizatim
summary: Vendos një imazh PNG ose JPEG, pritje në një drejtkëndësh ose shumëkëndësh, shfaq imazhet që përdor një DWG, dhe printoje me mprehtësi.
keywords: pastearea, parea, kopjo zonën, zonë e kopjuar, markupcraft, madhësi reale, madhësi e vërtetë, mbivendosje, ole, ole2frame, objekt i ngulitur, ngjit imazh, ngjit pamje ekrani, ctrl+v, imazh nga memoria, pamje ekrani, imazh, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, foto, raster, imagedef, xref, plot, pdf, rezolucion
from: 4025ac97
---

## Çfarë do të bësh

Një logo kompanie e vendosur në një bllok titulli, e prerë në pjesën që do, dhe një PDF ku ajo printohet me rezolucionin e vet.

## Vendos një imazh

1. Shkruaj {{cmd:IMAGEATTACH}} (ose `IAT`) dhe shtyp {{key:Enter}}. Zgjidh një skedar PNG ose JPEG.
2. `Cakto pikën e poshtme majtas`: kliko, ose shkruaj një pikë.
3. `Cakto gjerësinë e tij`: gjerësia në njësi vizatimi. {{key:Enter}} mban gjerësinë e ofruar: një njësi për piksel, ose gjerësinë që ke dhënë për këtë skedar herën e fundit (kërkesa thotë cila).
4. `Cakto këndin e rrotullimit`: {{key:Enter}} për asnjë.

Imazhi është një objekt i vetëm: zgjidhe nga korniza e tij, dhe zhvendose, kopjo, rrotullo, shkallëzo ose fshije si çdo bllok.

:::note
Skedari i imazhit mbetet me vizatimin derisa është i hapur. Një DWG i ruajtur e emëron skedarin, siç bëjnë programet e tjera; nuk mban pikselët. Mbaje imazhin pranë vizatimit.
:::

## Ngjit një pamje ekrani ose një imazh të kopjuar

1. Kopjo imazhin (një pamje ekrani me {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=mjeti juaj i pamjes së ekranit}}, ose Kopjo imazhin në një program tjetër ose në një shfletues).
2. Shiko ku duhet të shkojë në vizatim dhe shtyp {{key:Mod+V}}.

Qoshja e poshtme majtas e imazhit bie te treguesi (ose në mes të pamjes), 40 % aq e gjerë sa ajo që sheh; zhvendose, shkallëzo dhe pritje si çdo imazh. Emri i tij është i vizatimit me `-picture-1.png` (pastaj `-2`, …), dhe historiku e thotë këtë. {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Ngjit një imazh}} bën të njëjtën gjë nga menuja (shfletuesi mund të pyesë më parë).

Një DWG mban vetëm emrin e skedarit të një imazhi, kështu që ruajtja e vizatimit ruan edhe imazhin si skedarin e vet. Mbaji të dyja në të njëjtën dosje: vizatimi e shfaq imazhin nga aty. Në shfletues kjo është një shkarkim i dytë, dhe historiku e thotë këtë. Me vetëm objekte CadCraft në memorien e fragmenteve, {{key:Mod+V}} i ngjit ato, si më parë.

## Ngjit një zonë të kopjuar nga MarkupCraft

{{ui:Kopjo zonën}} në MarkupCraft kopjon një pjesë të një fletë si imazh që di sa e madhe është. CadCraft e ngjit në atë madhësi.

1. Në MarkupCraft, kopjo zonën (një drejtkëndësh, një rreth ose një formë e lirë; {{ui:Kopjo si mbivendosje}} nëse do të shohësh vizatimin tënd përmes saj).
2. Në CadCraft, shtyp {{key:Mod+V}}, ose shkruaj {{cmd:PASTEAREA}} (ose `PAREA`), ose zgjidh {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Ngjit një zonë të kopjuar}}.
3. `Cakto pikën e poshtme majtas të zonës së kopjuar`: kliko, ose shkruaj një pikë. Një kornizë me madhësinë e zonës ndjek treguesin.

Sa e madhe ulet:

- **Fleta kishte shkallë vizatimi:** në madhësinë e vet reale, në njësitë e vizatimit (një detaj 1:50 i një shkalle 2 m është 2 m i gjatë në një vizatim me metra, 78.74 në një vizatim me inç). Nuk pyetet asgjë më tej.
- **Fleta nuk kishte shkallë:** CadCraft thotë madhësinë e saj në letër dhe kërkon një shkallë: shkruaj `100` për një fletë 1:100, shtyp {{key:Enter}} për madhësinë e letrës, ose shkruaj `P`, kliko dy pika mbi imazhin e ngjitur dhe shkruaj sa larg janë në të vërtetë (ashtu si bën {{cmd:SCANSCALE}}). Qoshja e poshtme majtas mbetet aty ku e vendose.

Një vizatim pa njësi merr milimetra, si bën një nënshtresë PDF. Një mbivendosje mban letrën e saj transparente dhe fillon aq e zbehtë sa ishte kur u kopjua; jashtë një rrethi ose një forme të lirë është gjithashtu transparente. Zona e ngjitur është një imazh si çdo tjetër: zhvendose, rrotullo, shkallëzo, pritje ose fshije, dhe e gjithë ngjitja është një hap zhbërjeje. Ruajtur si DWG është një IMAGE me zbehjen dhe transparencën e vet.

{{key:Mod+V}} ngjit zonën kur imazhi në memorien e fragmenteve është i zonës, ose kur zona u kopjua pas çdo gjëje që kopjove në CadCraft (dhe në 6 orët e fundit). Përndryshe ngjitet si më parë. {{cmd:PASTEAREA}} ngjit zonën e fundit të kopjuar në çdo kohë.

## Shfaq imazhet që përdor një DWG

Një DWG ruan vetëm ku ishin imazhet e tij, kështu që CadCraft shfaq secilin si një kornizë me emrin e skedarit.

1. Shkruaj {{cmd:IMAGE}} (ose `IM`). Rreshti i komandës liston secilin skedar imazhi dhe nëse shfaqet.
2. Zgjidh skedarët (disa njëherësh). Një skedar emri i të cilit përmban atë që emëron vizatimi numërohet gjithashtu, sepse eksportet shpesh shtojnë një parashtesë projekti.

## Pritja e një imazhi

1. Shkruaj {{cmd:IMAGECLIP}} (ose `ICL`) dhe përzgjidh imazhin.
2. Zgjidh `R` dhe kliko dy qoshe, ose `P` dhe kliko pikat e një shumëkëndëshi, pastaj {{key:Enter}}. `D` heq prerjen.

## Printo imazhet

Imazhet shkojnë në PDF si imazhe, me rezolucionin e tyre dhe nën vijat. Në dialogun {{ui:Printo}}, {{ui:Imazhet}} mund t'i kufizojë në 600, 300 ose 150 dpi për ta bërë skedarin më të vogël. Një JPEG shkon ashtu siç është.

## Ku ruhen gjërat

| Format | Imazhet |
|---|---|
| DWG (çdo version) | Si imazhe (IMAGE), me prerjen e tyre |
| DXF | Si kornizat e tyre me emrin e skedarit; ruajtja e thotë këtë |

## Objekte nga programe të tjera (OLE)

Një vizatim mund të mbajë objekte që një program tjetër bëri, si një imazh nga një program vizatimi ose një varg fletë llogaritëse (objekte OLE). CadCraft nuk i ekzekuton ose redakton, dhe nuk mund të futë të reja. Ajo që bën:

- **Në një DXF**, një objekt OLE hapet si kornizë. Nëse objekti ruajti një imazh të vetvetes dhe ai imazh është bitmap, imazhi vizatohet brenda kornizës; përndryshe kornizë mban një etiketë me llojin e objektit, si "Microsoft Excel Worksheet (OLE)". Kornizën mund ta zhvendosësh, kopjosh dhe fshish si një bllok. {{cmd:SAVEAS}} në DXF 2000 e shkruan sërish si objekt OLE, me të dhënat e tij të pandryshuara.
- **Në një DWG**, objektet mbahen dhe shkruhen përsëri kur ruan si DWG, bit për bit, por **nuk shfaqen**: një DWG mban vendin e një objekti brenda të dhënave të veta, dhe CadCraft nuk e lexon akoma. Historiku thotë sa u mbajtën. Shkruaj {{cmd:OLELIST}} për të parë çfarë janë (lloji, madhësia, nëse secili ruajti një imazh) dhe për të vendosur një kopje të imazhit aty ku zgjedh: **Place** kërkon numrin, qoshen e poshtme majtas dhe gjerësinë, dhe vizaton një kornizë me imazhin brenda. Ajo kopje është një kornizë që mund ta zhvendosësh ose fshish; vetë objekti mbetet në vizatim dhe shkruhet përsëri kur ruan.
- Një objekt që erdhi nga një DXF ruhet në një DWG vetëm si kornizë dhe etiketë; historiku e thotë këtë. Ruaje si DXF 2000 për ta mbajtur vetë objektin.
- Imazhet që janë metafile (që shumë programe i ruajnë) nuk vizatohen: në vend të tyre shfaqen kornizat dhe etiketa.

## Gabimet e zakonshme

| Çfarë sheh | Pse | Zgjidhja |
|---|---|---|
| Një kornizë me emër skedari | CadCraft nuk e ka skedarin | {{cmd:IMAGE}}, pastaj zgjidh skedarin |
| "That is not a picture" | Objekti i zgjedhur nuk është imazh | Zgjidh kornizën e imazhit |
