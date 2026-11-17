---
title: Amasethi amashidi
summary: Hlanganisa amashidi emidwebweni eminingi ibe uhlu olulodwa olunenombolo, gcwalisa amabhulokhi wezihloko ngesethi, washicilela njenge-PDF eyodwa bese uyigcina njenge-zip.
keywords: isethi yamashidi, isiphathi sesethi yamashidi, ssm, sheetset, ccsheets, dst, uhlu lwamashidi, inkomba yamashidi, ibhulokhi yesihloko, izinkambu, shicilela, linganisa kabusha, gcina, etransmit, transmittal, amasethi-ngaphansi, ishidi lesihlanganiso, uhlu lwemidwebo
from: 2c855720
---

## Okuzofunda

Indlela yokuqoqa amashidi (izakhiwo) emafayelweni amaningi emidwebo ibe **isethi yamashidi**, uwanikeze inombolo namagama, wenze amabhulokhi wezihloko agcwaliswe ngokuzenzakalelayo, ushicilele isethi yonke ibe yi-PDF eyodwa, bese uyibeka yonke ibe yi-zip eyodwa ukuze uyithumele.

Isethi yamashidi ihlala efayeleni layo elincane elingelalo, `<name>.ccsheets`, efolda elibamba imidwebo. Ifayela lesethi lidla uhlu lwamashidi ngezindlela ezisuka kulowo mfolda, ngakho ungahambisa noma ukopishe wonke umfolda.

:::note
Ukuvula ifolda ukuze ufunde futhi ubhale kudinga i-Chrome noma i-Edge (zingavumela ikhasi lisebenze kwifolda oyikhethile), noma uhlelo lwedeskithophu. Ezinye izisebenzi zivula isethi ngokufundwa kuphela: ungayibuka futhi uyishicilele, futhi ifayela lesethi liyalandelwa esikhundleni sokulondolozwa.
:::

## Qala isethi

1. Thola isigaba se-{{ui:Sheet set}} kwiphaneli elingakwesobunxele, bese uvula imenyu yayo ethi {{ui:Set}}. Ukuthayipha i-{{cmd:SHEETSET}} (noma `SSM`) nakho kukuletha lapho.
2. Khetha {{ui:New set…}}. Nika isethi igama, bese, uma uthanda, igama lephrojekthi nenombolo yayo.
3. Khetha ifolda equkethe imidwebo. Ifayela lesethi lilondolozwa khona.

Ukuvula isethi ngemva kwesikhathi, khetha {{ui:Open set…}} bese ukhetha ifolda efanayo. Uma ifolda iqukethe amasethi amaningi, i-CadCraft iyabuza ukuthi yiliphi.

## Engeza amashidi

1. Khetha {{ui:Add sheets from a drawing…}} bese ukhetha omunye wemidwebo kwifolda.
2. I-CadCraft ifunda lowo mdwebo ngasemuva (akuvuli esikrinini) futhi ibala amashidi awo. Thikha lawo ofuna bese uchofoza {{ui:OK}}.
3. Khetha ishidi bese ucindezela {{key:F2}} (noma {{ui:Rename and renumber…}}) ukuze unikeze inombolo nesihloko, njengo `A-101` no `Ipulani yomgangatho`.

{{ui:New sheet from template…}} yenza umdwebo omusha ngeshidi lomunye umdwebo (ibhulokhi yayo yesihloko namabhuku okubuka), ibe ngegama leshidi elisha, bese iyalengeza. Isethi ikhumbula umdwebo osetshenzisile njengethempileyithi yayo.

## Hlela isethi

- **Amasethi-ngaphansi** ahlanganisa amashidi, njengo-Architectural › Plans: khetha lapho okufanele khona bese ukhetha {{ui:New subset…}}.
- **Ukuhleleka**: donsa ishidi endaweni enye kuhlu, noma phezu kwesethi-ngaphansi ukuze uyidlulisele khona. Ngekhibhodi, khetha bese ucindezela {{key:Alt+Up}} noma {{key:Alt+Down}}.
- **Vula ishidi**: chofoza kabili (noma cindezela {{key:Enter}}). Umdwebo wayo uvula ethebhini yawo, kuleso shidi.
- **Khipha**: khetha bese ucindezela {{key:Delete}}. Umdwebo ngokwawo awushintshwa.
- **Hlehlisa**: {{ui:Undo set change}} no-{{ui:Redo set change}} zihamba phakathi kokushintshile kwisethi.
- **Linganisa kabusha**: {{ui:Renumber sheets…}} inika inombolo wonke amashidi, noma wesethi-ngaphansi eyodwa, ngokuhleleka kuhlu: isiqalo, okokuqala nesinyathelo (`A-` no `101` anika A-101, A-102 …).

Konke okushintshiwe kulondolozwa efayeleni lesethi ngokushesha.

## Linganisa amashidi ngezinkambu zawo

Esikhundleni sokunikeza amashidi izinombolo ngesandla, vumela umthetho wakhe inombolo ngayinye ngezinkambu zeshidi, ukuze ishidi elihamba laya kwesinye isitezi noma kwenye inkambo lithole inombolo yalo entsha ngokwalo.

1. Nika ishidi ngalinye izinkambu zalo: likhethe, chofoza {{ui:Rename…}} bese, ku-{{ui:Fields of this sheet}}, bhala eyodwa emgqeni ngamunye, njengo `DISCIPLINE = A` no `LEVEL = 1`. Inkambo eyabelwa isethi yonke (njengo `DISCIPLINE = A`) ingangena ku-{{ui:Properties…}} yesethi.
2. Vula imenyu yephaneli bese uchofoza {{ui:Numbering rule…}}.
3. Bhala umthetho, njengo `{DISCIPLINE}-{LEVEL}{SEQ:2}`. I-`{SEQ}` ikhuphuka phakathi kwamashidi okufanayo ezinye izinkambu zawo, ngakho isitezi 1 sithola u-A-101, A-102, futhi isitezi 2 siqala kabusha ku-A-201. I-`{SEQ:2}` iyibhala ngamadijithi amabili; i-`{SUBSET}` yigama lesethi-ngaphansi ishidi elikuyo.
4. Khetha okwenzeka uma inkambo iguquka: {{ui:Renumber the sheets}} igcina izinombolo zilandela umthetho ngemva kwalokho konke okushintshiwe; enye inketho inika izinombolo kanye, manje.

Umthetho ugcinwa efayeleni lesethi. Ngenkathi ilinganisa kabusha ngokuzenzakalelayo, shintsha izinkambu zeshidi kunenombolo yalo.

## Gcwalisa amabhulokhi wezihloko ngesethi

Ibhulokhi yesihloko ithola umbhalo wayo esethini uma izindawo zayo zibhalwe ngegama lenkambu:

| Ithegi | Lokho okubonisayo |
|---|---|
| `SHEETNUMBER` (noma `SHEET_NO`, `DWG_NO`) | Inombolo yeshidi |
| `SHEETTITLE` (noma `TITLE`, `SHEET_TITLE`) | Isihloko seshidi |
| `SHEETDESC` | Incazelo yeshidi |
| `PROJECTNAME` (noma `PROJECT`) | Igama lephrojekthi |
| `PROJECTNUMBER` (noma `PROJECT_NO`, `JOB_NO`) | Inombolo yephrojekthi |
| `SHEETSETNAME` | Igama lesethi |
| `SHEETINDEX`, `SHEETCOUNT` | "3 of 12", kanye no-12 |
| Okwakho, njengo `CLIENT` | Lokho okubhale kukho ku-{{ui:Set fields…}} |

{{ui:Set fields…}} ibamba igama nenombolo yephrojekthi kanye nezinkambu zakho, emgqeni ngamunye njenge `NAME = value`.

{{ui:Update drawings}} ibhala izinombolo, izihloko nezinkambu ezindaweni zamabhulokhi wezihloko yemidwebo yonke esethini, futhi iqamba kabusha ithebhu yesakhiwo ngalinye njengoba isethi isho (ngokuzenzakalelayo inombolo nesihloko, njengo `A-101 Ipulani yomgangatho`; i-{{ui:Set fields…}} › {{ui:Layout tab names}} iyashintsha lokho). Umdwebo ngamunye ugcinwa endaweni yawo, ngefomethi nenguqulo yawo. Uma uqamba kabusha noma uqamba amashidi kabusha, yenza futhi, futhi amathebhu namabhulokhi wezihloko azolandela.

## Uhlu lwamashidi ekhasini lesihlanganiso

Khetha ishidi lesihlanganiso kuhlu bese ukhetha {{ui:Put the sheet list on this sheet}}. Ithebula lawo wonke amashidi (inombolo nesihloko, ngaphansi kwesethi-ngaphansi yawo) lifakwa ekhoneni elingenhla kwesobunxele leshidi. I-{{ui:Update drawings}} ne-{{ui:Publish to PDF}} ziyilondoloza ilungile. Yibhulokhi eyodwa, `CC_SHEETLIST`: yihambise njenganoma yisiphi isithombe sebhulokhi.

## Shicilela isethi

I-{{ui:Publish to PDF}} yenza i-PDF eyodwa enekhasi ngalinye leshidi, ngohlelo lwesethi, ngosayizi wephepha walo ngamunye, nesimaka ngasinye seshidi ("A-101 — Ipulani yomgangatho"). Uma kukhethwe isethi-ngaphansi, i-CadCraft iyabuza ukuthi ishicilele yona kuphela. Amabhulokhi wezihloko ku-PDF agcwaliswa ngesethi nangaphambi kokuthi uvuselele imidwebo; imidwebo ngokwayo ayishintshwa ngokushicilela. I-PDF iyalandelwa.

I-{{ui:Publish to DWG…}} ibhala ishidi ngalinye njenge-DWG yalo (DWG 2018): imodeli nalelo shidi eyodwa, nebhulokhi yalo yesihloko igcwaliswe ngesethi, iqanjwe ngenombolo nesihloko yalo (`A-101 Ipulani yomgangatho yomgangatho 1.dwg`). Khetha {{ui:DWG}}, noma {{ui:DWG + PDF}} ye-PDF yesethi eduzane nazo. I-`publish.json` idla wonke amafayela ngosayizi wawo nge-SHA-256 yawo. Uma ifolda yesethi ingabhalwa (i-CadCraft Studio, noma ifolda oyikhethe esiphequluli), amafayela angena kufolda ethi `<set name> - published`; kungenjalo alandelwa njengo-zip eyodwa. Okuguqulwa kwesibuko sokubuka [kwamaklasi](topic:viewport-overrides) kuyahamba nayo ngayinye yeDWG.

## Gcina isethi ngezip

I-{{ui:Archive as a zip}} ipakisha ifayela lesethi, yonke imidwebo elisebenzisa kanye nalokho imidwebo leyo ehlanganiswe kukho (imidwebo ehlanganisiwe, nemidwebo yayo ngokwayo, nezithombe), igcina amafolda awo, kanye ne-`Transmittal.txt` edla wonke amafayela. Ixhumanisi elingesiyo ngaphakathi kwefolda yesethi liyadalwa njengelilahlekile. Amaxhumanisi atholakala ngendlela yawo esuka emdwebeni, bese ngegama lawo lefayela noma ngaphi kwefolda.

## Ifayela lesethi

Ifayela le-`.ccsheets` ingu-JSON ongayifunda kunoma yisiphi isihleli sombhalo:

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

Izindlela zihlobene nefolda yesethi, nezinhlu `/` phakathi kwamafolda. I-CadCraft ihlola ifayela lapho ilivula: indlela ephelele, ishidi elingenafayela noma isakhiwo, noma umbhalo ongewona ovamile kuyashiywa, futhi umlando uyakutshela lokho.

## Ukuxazulula izinkinga

| Okubonayo | Kungani | Okufanele ukwenze |
|---|---|---|
| "This folder is read only here" | Isiphequluli asikwazi ukubhala kulelo folda | Sebenzisa i-Chrome noma i-Edge, noma uhlelo lwedeskithophu; okwamanje {{ui:Download the set file}} igcina okushintshile kwakho |
| Ishidi libalulwe ku-PDF: "has no layout named …" | Isakhiwo seshidi sithintshiwe noma sisusiwe emdwebeni wayo | Vula umdwebo bese uhlola amathebhu wawo; susa ishidi bese uliengeza futhi |
| Ibhulokhi yesihloko ihlala ingenalutho | Izindawo zayo zinamathegi ahlukile | Qamba kabusha amathegi ezindawo ngamagama enkambu angenhla (BEDIT) |
| "already has a layout named … so that tab was not renamed" | Amashidi amabili omdwebo owodwa angathola igama lethebhu elifanayo | Nika elinye lawo inombolo noma isihloko esihlukile |
