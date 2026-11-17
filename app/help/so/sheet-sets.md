---
title: Kooxaha xaashiyada
summary: Isku keen xaashiyo ka yimid naqshado badan oo liis lambaro leh, ka buuxi goobaha xaashiyada iyada oo laga helayo kooxda, u daabac hal PDF ahaan oo kaydi kooxda zip ahaan.
keywords: kooxda xaashiyada, maamulaha kooxda xaashiyada, ssm, sheetset, ccsheets, dst, liiska xaashiyada, indexka xaashiyada, goobaha xaashiga, daabac, lambarinta dib, kaydi, etransmit, transmittal, kooxaha hoose, xaashiga koofiyadda, liiska naqshadaha
from: 2c855720
---

## Waxa aad baranaysaa

Sida loo ururiyo xaashiyo (layouts) ka yimid dhowr fayl oo naqshad ah **kooxda xaashiyada**, loo lambaro oo loo magacaabo, sida goobaha xaashiyada loogu buuxiyo iyaga, sida kooxda oo dhan loogu daabaco hal PDF ahaan, iyo sida wax walba loogu xidho hal zip oo loo diro.

Kooxda xaashiyada waxay ku nooli tahay fayl yar oo u gaar ah, `<name>.ccsheets`, galka ku jira naqshadaha. Faylka kooxdu wuxuu liisteeyaa xaashiyada iyada oo jidad laga bilaabayo galkaas, sidaas darteed kooxda oo dhan waad dhaqaaqi kartaa ama koobiyeyn kartaa.

:::note
Furidda galka si aad u akhrido oo aad u qorto waxay u baahan tahay Chrome ama Edge (waxay ogolaan karaan bog inuu ka shaqeeyo galka aad doorato), ama app-ka desktop-ka. Browser-ro kale waxay furaan kooxda akhris keliya: waad eegi kartaa oo daabici kartaa, faylka kooxdana wuxuu soo dejisaa halkii uu ku kaydin lahaa.
:::

## Bilow kooxda

1. Hel qaybta {{ui:Sheet set}} panel-ka bidix, ka dibna fur menu-ga {{ui:Set}}. Ku qorida {{cmd:SHEETSET}} (ama `SSM`) ayaa sidoo kale kuu keeni doonta halkaas.
2. Dooro {{ui:New set…}}. Kooxda magac sii, iyo haddii aad jeceshahay magaca mashruuca iyo lambarkiisa.
3. Dooro galka ku jira naqshadaha. Faylka kooxda ayaa halkaas lagu kaydiyaa.

Si aad kooxda dambe u furto, dooro {{ui:Open set…}} oo dooro galka isku mid ah. Haddii galku ka badan yahay hal kooxood, CadCraft wuxuu weydiinayaa midka.

## Ku dar xaashiyo

1. Dooro {{ui:Add sheets from a drawing…}} oo dooro mid ka mid ah naqshadaha galka ku jira.
2. CadCraft wuxuu naqshadda ku akhrinayaa asal ahaan (ma furmo shaashadda), wuxuuna liisteeyaa xaashiyadeeda. Calaamadee kuwa aad rabto oo riix {{ui:OK}}.
3. Dooro xaashi oo taabo {{key:F2}} (ama {{ui:Rename and renumber…}}) si aad ugu siiso lambar iyo ciwaan, sida `A-101` iyo `Floor plan`.

{{ui:New sheet from template…}} wuxuu sameeyaa naqshad cusub oo ka soo jeeda xaashi naqshad kale (xaashiga ciwaankeeda iyo aragtidooda), oo magacaabmaa magaca xaashiga cusub, ka dibna wuu ku daraa. Kooxdu waxay xusuusataa naqshadda aad isticmaashay sidii template.

## Habee kooxda

- **Kooxaha hoose** ayaa koox xaashiyada: sida Architectural › Plans: dooro meesha ay tagayso oo dooro {{ui:New subset…}}.
- **Kala horraynta**: jiid xaashi meel kale oo liiska ah, ama ku rid kooxda hoose si aad ugu wareejiso halkaas. Furayaasha, dooro oo taabo {{key:Alt+Up}} ama {{key:Alt+Down}}.
- **Fur xaashi**: laba jeer riix (ama taabo {{key:Enter}}). Naqshadeeda waxay furmaysaa taabkeeda, xaashigaas.
- **Ka saar**: dooro oo taabo {{key:Delete}}. Naqshadda laftiisa lama beddelo.
- **Ka noqo**: {{ui:Undo set change}} iyo {{ui:Redo set change}} waxay tallaabo-tallaabo u maraan waxa aad kooxda ka beddeshay.
- **Lambar mar kale**: {{ui:Renumber sheets…}} wuxuu lambaraa xaashi kasta, ama kooxda hoose kasta, sida liiska ku jira: horkeeg, bilow iyo tallaabo (`A-` iyo `101` waxay siiyaan A-101, A-102 …).

Isbeddel kasta waxaa mar walba lagu kaydiyaa faylka kooxda.

## Lambaree xaashiyada goobahooda

Halkii aad xaashiyada gacanta ku lambari lahayd, rule ayaa lambarka ka dhiste goobaha xaashiga, sidaas darteed xaashi u guurta heer ama qaybo kale wuxuu helaa lambarkiisa cusub isaga oo keligiis ah.

1. Siiso xaashi kasta goobihiisa: dooro, riix {{ui:Rename…}} oo, {{ui:Fields of this sheet}} gudihiisa, ku qor mid safka kasta, tusaale `DISCIPLINE = A` iyo `LEVEL = 1`. Goob ay kooxda oo dhan wadaagto (tusaale `DISCIPLINE = A`) waxay gali kartaa {{ui:Properties…}} kooxda.
2. Fur menu-ga panel-ka oo riix {{ui:Numbering rule…}}.
3. Qor rule-ka, tusaale `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` wuxuu kordhiyaa xaashiyada goobahooda kale isku mid yihiin; heerka 1 wuxuu helaa A-101, A-102 heerka 2 wuxuu mar kale ku bilaabaa A-201. `{SEQ:2}` wuxuu qoraa laba lambar; `{SUBSET}` waa magaca kooxda hoose ee xaashigu ku jiro.
4. Dooro waxa dhacaya marka goob beddelmo: {{ui:Renumber the sheets}} wuxuu ilaaliyaa lambarrada iyadoo raacaya rule-ka isbeddel kasta ka dib; ikhtiyaarka kale wuxuu lambaraa mar keliya, hadda.

Rule-ka waxaa lagu kaydiyaa faylka kooxda. Intuu isagu lambarada dib u lambarayo, beddel goobaha xaashiga halkii aad lambarkiisa ka beddeli lahayd.

## Ku buuxi xaashiyada goobaha kooxda

Xaashiga ciwaankiisu qoraalkiisa ka qaadaa kooxda marka sifooyinkiisa lagu calaamadeeyo magaca goob:

| Calaamadda | Waxa muujiya |
|---|---|
| `SHEETNUMBER` (ama `SHEET_NO`, `DWG_NO`) | Lambarka xaashiga |
| `SHEETTITLE` (ama `TITLE`, `SHEET_TITLE`) | Ciwaanka xaashiga |
| `SHEETDESC` | Sharraxaadda xaashiga |
| `PROJECTNAME` (ama `PROJECT`) | Magaca mashruuca |
| `PROJECTNUMBER` (ama `PROJECT_NO`, `JOB_NO`) | Lambarka mashruuca |
| `SHEETSETNAME` | Magaca kooxda |
| `SHEETINDEX`, `SHEETCOUNT` | "3 of 12", iyo 12 |
| Kaaga, tusaale `CLIENT` | Waxa aad u qortay {{ui:Set fields…}} |

{{ui:Set fields…}} wuxuu hayaa magaca mashruuca iyo lambarkiisa, iyo goobahaaga, hal safar kasta `MAGAC = qiime`.

{{ui:Update drawings}} wuxuu qoraa lambarrada, ciwaanada iyo goobaha xaashiyada naqshad kasta oo kooxda ku jirta, wuxuuna magacaabaa taabka layout kasta sida kooxdu tiri (asal ahaan lambar iyo ciwaan, sida `A-101 Floor plan`; {{ui:Set fields…}} › {{ui:Layout tab names}} ayaa beddela). Naqshad kasta waa lagu kaydiyaa meeshiisa, qaabkeeda iyo nooceeda. Ka dib markaad lambarro ama magacyo beddesho, dib u socodsii, taabyada iyo xaashiyada ciwaanka way raaci doonaan.

## Liiska xaashiyada ee xaashiga koofiyadda

Dooro xaashiga koofiyadda liiska, ka dibna dooro {{ui:Put the sheet list on this sheet}}. Miis ah oo ka muuqda xaashi kasta (lambarka iyo ciwaanka, hoos kooxda hoose) waxaa la geliyaa geeska sare-bidix ee xaashiga. {{ui:Update drawings}} iyo {{ui:Publish to PDF}} way cusboonaysiiyaan. Waa hal block, `CC_SHEETLIST`: u dhaqaaq sida block reference kasta.

## Daabac kooxda

{{ui:Publish to PDF}} wuxuu sameeyaa hal PDF oo leh bog xaashi kasta, kala horraynta kooxda, ballaca warqadda xaashi kasta, iyo calaamad-bog xaashi kasta ("A-101 — Floor plan"). Kooxda hoose ayaa la doortay, CadCraft wuxuu weydiinayaa in kaliya kooxdaas la daabacayo. Goobaha xaashiyada PDF-ka ayaa lagu buuxiyaa kooxda xitaa ka hor intaanad naqshadaha cusboonaysiin; naqshadaha laftooda daabacaadu ma beddelo. PDF-ka waa la soo dejiyaa.

{{ui:Publish to DWG…}} wuxuu xaashi kasta u qoraa DWG u gaar ah (DWG 2018): moodelka iyo xaashigaas keliya, xaashiga ciwaankiisa oo lagu buuxiyay kooxda, magacaabmana lambarkiisa iyo ciwaankiisa (`A-101 Level 1 floor plan.dwg`). Dooro {{ui:DWG}}, ama {{ui:DWG + PDF}} si PDF-ka kooxda ay ula jiraan. `publish.json` wuxuu liisteeyaa faylal kasta oo leh cabbirkooda iyo SHA-256. Marka galka kooxda la qori karo (CadCraft Studio, ama galka aad browser-ka ku dooratay) faylalku waxay galaan galka `<set name> - published`; haddii kale waa la soo dejiyaa hal zip. Viewport [class overrides](topic:viewport-overrides) ayaa la socda DWG kasta.

## Kaydi kooxda

{{ui:Archive as a zip}} wuxuu ku xidhaa faylka kooxda, naqshad kasta oo ay isticmaasho, iyo wixii naqshadahaas ku xidhan (naqshado xidhan, iyo kuwooda iyo sawirada), iyadoo ilaalinaya galalkooda, iyo `Transmittal.txt` oo liistaysa faylal kasta. Xidhiidh aan ku jirin galka kooxda waxaa lagu liisteeyaa halkaas sida maqan. Xidhiidhyada waxaa lagu helaa jidkooda naqshadda ka bilaabaya, ka dibna magacooda faylka oo meel kasta oo galka ku jira.

## Faylka kooxda

Faylka `.ccsheets` waa JSON oo aad ku akhrin karto tafatir kasta oo qoraal ah:

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

Jidadku waxay ka soo bilaabmaan galka kooxda, `/` ayaa u dhexeeya galalka. CadCraft wuxuu hubiyaa faylka marka uu furo: jid buuxda, xaashi aan fayl ama layout lahayn, ama qoraal aan caadi ahayn ayaa laga saaraa, taariikhduna way sheegtaa.

## Xallinta dhibaatooyinka

| Waxa aad aragto | Sababta | Waxa la sameeyo |
|---|---|---|
| "Galkan halkan waa akhris keliya" | Browser-ku ma qori karo galkaas | Isticmaal Chrome ama Edge, ama app-ka desktop-ka; intaas dabadeed {{ui:Download the set file}} wuxuu ilaaliyaa isbeddelladaada |
| Xaashi PDF-ka laga saaray: "has no layout named …" | Layout-kii xaashiga waa la magacaabay ama la tirtiray naqshadda | Fur naqshadda oo hubi taabyadeeda; ka saar xaashiga oo mar kale ku dar |
| Xaashiga ciwaanka wuu madhan yahay | Sifooyinkiisu calaamado kale leeyihiin | Magacee calaamadaha sifooyinka magacyada goobaha kor ku xusan (BEDIT) |
| "already has a layout named … so that tab was not renamed" | Laba xaashi oo naqshad keliya ah ayaa heli lahaa isla magaca taabka | Siiso mid ka mid ah lambar ama ciwaan kale |
