---
title: Blaðasett
summary: Safnaðu blöðum úr mörgum teikningum saman í einn númeraðan lista, fylltu titilreiti þeirra úr settinu, birtu þau sem eina PDF-skrá og geymdu settið sem zip-skrá.
keywords: blaðasett, blaðasettsstjóri, ssm, sheetset, ccsheets, dst, blaðalisti, blaðaskrá, titilreitur, reitir, birta, endurnúmera, geyma, etransmit, sendingarseðill, undirsöfn, forsíðublað, teikningalisti
from: 2c855720
---

## Það sem þú lærir

Hvernig þú safnar blöðum (uppsetningum) úr nokkrum teikniskrám í **blaðasett**, númerar þau og gefur þeim heiti, lætur fylla titilreiti þeirra fyrir þig, birtir allt settið sem eina PDF-skrá og pakkar öllu í eina zip-skrá til að senda.

Blaðasett lifir í lítilli skrá sinni, `<name>.ccsheets`, í möppunni sem geymir teikningarnar. Settskráin skráir blöðin með slóðum frá þeirri möppu, svo þú getur fært eða afritað alla möppuna.

:::note
Til að opna möppu til lesturs og skrifta þarf Chrome eða Edge (þeir geta leyft síðu að vinna í möppu sem þú velur), eða skjáforritið. Aðrir vafrar opna settið til lestrar eingöngu: þú getur skoðað það og birt, og settskráin sækist í stað þess að vistast.
:::

## Byrjaðu sett

1. Finndu hlutann {{ui:Blaðasett}} í vinstra spjaldinu og opnaðu valmynd hans {{ui:Sett}}. Ef þú skrifar {{cmd:SHEETSET}} (eða `SSM`) ferðu líka þangað.
2. Veldu {{ui:Nýtt sett…}}. Gefðu settinu heiti, og ef þú vilt þá heiti og númer verkefnisins.
3. Veldu möppuna sem geymir teikningarnar. Settskráin er vistuð þar.

Til að opna sett síðar skaltu velja {{ui:Opna sett…}} og velja sömu möppu. Ef í möppunni eru fleiri en eitt sett spyr CadCraft hvert.

## Bættu við blöðum

1. Veldu {{ui:Bæta við blöðum úr teikningu…}} og veldu eina teikninguna í möppunni.
2. CadCraft les teikninguna í bakgrunni (hún opnast ekki á skjánum) og listar blöð hennar. Hakaðu við þau sem þú vilt og smelltu á {{ui:OK}}.
3. Veldu blað og ýttu á {{key:F2}} (eða {{ui:Endurnefna og númera upp á nýtt…}}) til að gefa því númer og titil, til dæmis `A-101` og `Grunnmynd`.

{{ui:Nýtt blað úr sniðmáti…}} býr til nýja teikningu úr blaði annarrar teikningar (titilreit hennar og sýnigluggum), nefnda eftir nýja blaðinu, og bætir henni við. Settið man teikninguna sem þú notaðir sem sniðmát.

## Raðaðu settinu

- **Undirsöfn** flokka blöð, eins og Arkitektúr › Grunnmyndir: veldu þar sem það á heima og veldu {{ui:Nýtt undirsafn…}}.
- **Röð**: dragðu blað á annan stað í listanum, eða á undirsafn til að færa það þangað. Með lyklaborði velurðu það og ýtir á {{key:Alt+Up}} eða {{key:Alt+Down}}.
- **Opna blað**: tvísmelltu á það (eða ýttu á {{key:Enter}}). Teikning þess opnast í eigin flipa, á því blaði.
- **Fjarlægja**: veldu það og ýttu á {{key:Delete}}. Teikningin sjálf breytist ekki.
- **Afturkalla**: {{ui:Afturkalla breytingu á setti}} og {{ui:Endurgera breytingu á setti}} fara í gegnum það sem þú hefur breytt í settinu.
- **Endurnúmera**: {{ui:Númera blöð upp á nýtt…}} númerar hvert blað, eða blöð eins undirsafns, í röð listans: forskeyti, upphafstala og skref (`A-` og `101` gefa A-101, A-102 …).

Sérhver breyting er vistuð í settskránni strax.

## Númeraðu blöð út frá reitum sínum

Í stað þess að númera blöðin með höndunum skaltu láta reglu byggja hvert númer úr reitum blaðsins, svo blað sem færist á aðra hæð eða fag fær nýtt númer sjálft.

1. Gefðu hverju blaði reiti sína: veldu það, smelltu á {{ui:Endurnefna…}} og skrifaðu í {{ui:Reitir þessa blaðs}}, einn á línu, til dæmis `DISCIPLINE = A` og `LEVEL = 1`. Reitur sem allt settið deilir (til dæmis `DISCIPLINE = A`) getur farið í {{ui:Eiginleikar…}} settsins í staðinn.
2. Opnaðu valmynd spjaldsins og smelltu á {{ui:Númeringarregla…}}.
3. Skrifaðu regluna, til dæmis `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` telur upp meðal blaða þar sem aðrir reitir eru eins, þannig að hæð 1 fær A-101, A-102 og hæð 2 byrjar aftur í A-201. `{SEQ:2}` skrifar hana með tveimur tölustöfum; `{SUBSET}` er heiti undirsafnsins sem blað er í.
4. Veldu hvað gerist þegar reitur breytist: {{ui:Endurnúmera blöðin}} heldur númerunum á eftir reglunni eftir hverja breytingu; hinn valkosturinn númerar þau einu sinni, núna.

Reglan er vistuð í settskránni. Á meðan hún endurnúmerar sjálf skaltu breyta reitum blaðs en ekki númeri þess.

## Fylltu titilreiti úr settinu

Titilreitur fær texta sinn úr settinu þegar eigindi hans eru merkt með heiti reits:

| Merki | Hvað birtist |
|---|---|
| `SHEETNUMBER` (eða `SHEET_NO`, `DWG_NO`) | Númer blaðsins |
| `SHEETTITLE` (eða `TITLE`, `SHEET_TITLE`) | Titill blaðsins |
| `SHEETDESC` | Lýsing blaðsins |
| `PROJECTNAME` (eða `PROJECT`) | Heiti verkefnisins |
| `PROJECTNUMBER` (eða `PROJECT_NO`, `JOB_NO`) | Númer verkefnisins |
| `SHEETSETNAME` | Heiti settsins |
| `SHEETINDEX`, `SHEETCOUNT` | „3 af 12“, og 12 |
| Þín eigin, til dæmis `CLIENT` | Það sem þú skrifaðir fyrir það í {{ui:Stilla reiti…}} |

{{ui:Stilla reiti…}} geymir heiti og númer verkefnisins og þína eigin reiti, einn á línu sem `HEITI = gildi`.

{{ui:Uppfæra teikningar}} skrifar númerin, titlana og reitina í titilreiti allra teikninga í settinu, og endurnefnir flipa hverrar uppsetningar eins og settið segir (sjálfgefið númer og titill, til dæmis `A-101 Grunnmynd`; {{ui:Stilla reiti…}} › {{ui:Heiti uppsetningarflipa}} breytir því). Hver teikning er vistuð á sínum stað, á sínu sniði og í sinni útgáfu. Eftir að þú endurnúmerar eða endurnefnir blöð skaltu keyra þetta aftur, og flipar og titilreitir fylgja á eftir.

## Blaðalisti á forsíðunni

Veldu forsíðublaðið í listanum og veldu {{ui:Setja blaðalistann á þetta blað}}. Tafla yfir hvert blað (númer og titill, undir undirsafninu sínu) fer í efra vinstra horn blaðsins. {{ui:Uppfæra teikningar}} og {{ui:Birta sem PDF}} halda henni uppfærðri. Þetta er ein blokk, `CC_SHEETLIST`: færðu hana eins og hvern annan blokkavísun.

## Birtu settið

{{ui:Birta sem PDF}} býr til eina PDF-skrá með einni síðu fyrir hvert blað, í röð settsins, í pappírsstærð hvers blaðs, með bókamerki fyrir hvert blað („A-101 — Grunnmynd“). Ef undirsafn er valið spyr CadCraft hvort aðeins eigi að birta það undirsafn. Titilreitirnir í PDF-skránni eru fylltir úr settinu jafnvel áður en þú uppfærir teikningarnar; teikningarnar sjálfar breytast ekki við birtingu. PDF-skráin sækist.

{{ui:Birta sem DWG…}} skrifar hvert blað sem sína eigin DWG-skrá (DWG 2018): líkanið og það eina blað, með titilreitinn fylltan úr settinu, nefnt eftir númeri og titli (`A-101 Level 1 floor plan.dwg`). Veldu {{ui:DWG}}, eða {{ui:DWG + PDF}} fyrir PDF-skrá settsins við hlið þeirra. `publish.json` skráir hverja skrá með stærð og SHA-256. Þegar mappa settsins er skrifanleg (CadCraft Studio, eða mappa sem þú valdir í vafranum) fara skrárnar í möppu `<set name> - published`; annars sækjast þær sem ein zip-skrá. [Yfirskriftir flokka](topic:viewport-overrides) fylgja hverri DWG-skrá.

## Geymdu settið

{{ui:Geyma sem zip}} pakkar settskránni, hverri teikningu sem hún notar og því sem þær teikningar tengja í (tengdar teikningar, og þær aftur, og myndir), með möppuuppbyggingunni, auk `Transmittal.txt` sem skráir hverja skrá. Tengill sem er ekki í möppu settsins er skráður þar sem vantar. Tenglar eru fundnir eftir slóð þeirra úr teikningunni, síðan eftir skráarheiti hvar sem er í möppunni.

## Settskráin

`.ccsheets`-skráin er JSON sem þú getur lesið í hvaða textaritli sem er:

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

Slóðir eru miðaðar við möppu settsins, með `/` á milli mappa. CadCraft athugar skrána þegar hún er opnuð: algild slóð, blað án skráar eða uppsetningar, eða texti sem er ekki látlaus, er sleppt, og sagan segir frá því.

## Úrræðaleit

| Það sem þú sérð | Af hverju | Hvað á að gera |
|---|---|---|
| „This folder is read only here“ | Vafrinn getur ekki skrifað í möppuna | Notaðu Chrome eða Edge, eða skjáforritið; þangað til heldur {{ui:Sækja settskrána}} breytingunum þínum |
| Blað vantar í PDF: „has no layout named …“ | Uppsetningu blaðsins var endurnefnt eða eytt í teikningunni | Opnaðu teikninguna og athugaðu flipana; fjarlægðu blaðið og bættu því við aftur |
| Titilreitur helst auður | Eigindi hans hafa önnur merki | Endurnefndu eigindamerkin í reitaheitin hér að ofan (BEDIT) |
| „already has a layout named … so that tab was not renamed“ | Tvö blöð úr einni teikningu fengju sama flipaheiti | Gefðu öðru þeirra annað númer eða annan titil |
