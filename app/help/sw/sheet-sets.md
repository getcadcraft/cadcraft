---
title: Seti za karatasi
summary: Kusanya karatasi kutoka michoro mingi kwenye orodha moja yenye namba, jaza visanduku vya kichwa kutoka kwenye seti, chapisha seti yote kama PDF moja na uhifadhi seti kama zip.
keywords: seti ya karatasi, msimamizi wa seti ya karatasi, ssm, sheetset, ccsheets, dst, orodha ya karatasi, faharasa ya karatasi, kizuizi cha kichwa, sehemu, chapisha, hesabu upya, hifadhi, etransmit, transmittal, seti ndogo, karatasi ya jalada, orodha ya michoro
from: 2c855720
---

## Utakachojifunza

Jinsi ya kukusanya karatasi (mipangilio) kutoka faili kadhaa za michoro kwenye **seti ya karatasi**, kuzipa namba na majina, kuwa na visanduku vyake vya kichwa vikijazwa kwa ajili yako, kuchapisha seti nzima kama PDF moja, na kufunga kila kitu kwenye zip moja ya kutuma.

Seti ya karatasi inaishi kwenye faili dogo lake, `<name>.ccsheets`, kwenye folda inayoshikilia michoro. Faili la seti linaorodhesha karatasi kwa njia kutoka folda hiyo, kwa hiyo unaweza kuhamisha au kunakili folda yote.

:::note
Kufungua folda ili kusoma na kuandika kunahitaji Chrome au Edge (wanaweza kuruhusu ukurasa ufanye kazi kwenye folda uliyochagua), au programu ya eneo-kazi. Vivinjari vingine hufungua seti kwa kusoma tu: unaweza kuiangalia na kuichapisha, na faili la seti linapakuliwa badala ya kuhifadhiwa.
:::

## Anza seti

1. Tafuta sehemu ya {{ui:Sheet set}} kwenye paneli ya kushoto, kisha ufungue menyu yake ya {{ui:Set}}. Kuandika {{cmd:SHEETSET}} (au `SSM`) pia kunakupeleka hapo.
2. Chagua {{ui:New set…}}. Mpe seti jina, na kama unapenda, jina la mradi na namba yake.
3. Chagua folda inayoshikilia michoro. Faili la seti linahifadhiwa hapo.

Kufungua seti baadaye, chagua {{ui:Open set…}} kisha uchague folda ile ile. Ikiwa folda ina seti zaidi ya moja, CadCraft inauliza ipi.

## Ongeza karatasi

1. Chagua {{ui:Add sheets from a drawing…}} kisha uchague mojawapo ya michoro kwenye folda.
2. CadCraft inasoma mchoro huo nyuma (haufunguki kwenye skrini) na kuorodhesha karatasi zake. Weka alama kwenye zile unazotaka kisha ubofye {{ui:OK}}.
3. Chagua karatasi kisha bonyeza {{key:F2}} (au {{ui:Rename and renumber…}}) ili kuipa namba na kichwa, kama `A-101` na `Mpango wa ghorofa`.

{{ui:New sheet from template…}} hutengeneza mchoro mpya kutoka karatasi ya mchoro mwingine (kizuizi chake cha kichwa na madirisha ya mwonekano), ukipewa jina la karatasi mpya, na kuiongeza. Seti inakumbuka mchoro uliotumia kama kiolezo chake.

## Panga seti

- **Seti ndogo** zinaweka karatasi pamoja, kama Usanifu › Mipango: chagua mahali pa kuweka kisha uchague {{ui:New subset…}}.
- **Mpangilio**: buruta karatasi hadi mahali pengine kwenye orodha, au kwenye seti ndogo ili kuihamishia hapo. Kwa kibodi, chagua karatasi kisha bonyeza {{key:Alt+Up}} au {{key:Alt+Down}}.
- **Fungua karatasi**: bofya mara mbili (au bonyeza {{key:Enter}}). Mchoro wake unafunguka kwenye kichupo chake, kwenye karatasi hiyo.
- **Ondoa**: chagua karatasi kisha bonyeza {{key:Delete}}. Mchoro wenyewe haubadilishwi.
- **Tendua**: {{ui:Undo set change}} na {{ui:Redo set change}} zinapita kwenye mabadiliko uliyofanya kwenye seti.
- **Hesabu upya**: {{ui:Renumber sheets…}} inapa namba kila karatasi, au ya seti ndogo moja, kwa mpangilio wa orodha: kiambishi, mwanzo na hatua (`A-` na `101` zinatoa A-101, A-102 …).

Kila mabadiliko yanahifadhiwa kwenye faili la seti mara moja.

## Pa karatasi namba kutoka sehemu zake

Badala ya kuzipa karatasi namba kwa mkono, acha sheria ijenge kila namba kutoka sehemu za karatasi, ili karatasi inayohamia ngazi nyingine au taaluma nyingine ipate namba yake mpya yenyewe.

1. Mpe kila karatasi sehemu zake: chagua karatasi, bofya {{ui:Rename…}} na, kwenye {{ui:Fields of this sheet}}, andika moja kwa kila mstari, kwa mfano `DISCIPLINE = A` na `LEVEL = 1`. Sehemu ambayo seti nzima inashiriki (kwa mfano `DISCIPLINE = A`) inaweza kuwekwa kwenye {{ui:Properties…}} ya seti badala yake.
2. Fungua menyu ya paneli kisha ubofye {{ui:Numbering rule…}}.
3. Andika sheria, kwa mfano `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` inahesabu kupanda miongoni mwa karatasi ambazo sehemu zake nyingine zinasomeka vile vile, kwa hiyo ngazi 1 inapata A-101, A-102 na ngazi 2 inaanza upya kwa A-201. `{SEQ:2}` inaiandika kwa tarakimu mbili; `{SUBSET}` ni jina la seti ndogo ambayo karatasi iko ndani yake.
4. Chagua kinachotokea sehemu inapobadilika: {{ui:Renumber the sheets}} huweka namba zikifuata sheria baada ya kila mabadiliko; chaguo jingine hupa namba mara moja, sasa hivi.

Sheria inahifadhiwa kwenye faili la seti. Wakati inajipa namba yenyewe, badilisha sehemu za karatasi badala ya namba yake.

## Jaza visanduku vya kichwa kutoka kwenye seti

Kisanduku cha kichwa kinapata maandishi yake kutoka kwenye seti pale sifa zake zinapowekewa lebo ya jina la sehemu:

| Lebo | Inachoonyesha |
|---|---|
| `SHEETNUMBER` (au `SHEET_NO`, `DWG_NO`) | Namba ya karatasi |
| `SHEETTITLE` (au `TITLE`, `SHEET_TITLE`) | Kichwa cha karatasi |
| `SHEETDESC` | Maelezo ya karatasi |
| `PROJECTNAME` (au `PROJECT`) | Jina la mradi |
| `PROJECTNUMBER` (au `PROJECT_NO`, `JOB_NO`) | Namba ya mradi |
| `SHEETSETNAME` | Jina la seti |
| `SHEETINDEX`, `SHEETCOUNT` | "3 kati ya 12", na 12 |
| Yako mwenyewe, kama `CLIENT` | Ulichoandika kwa ajili yake kwenye {{ui:Set fields…}} |

{{ui:Set fields…}} inashikilia jina la mradi na namba yake, na sehemu zako mwenyewe, moja kwa kila mstari kama `NAME = value`.

{{ui:Update drawings}} inaandika namba, vichwa na sehemu kwenye visanduku vya kichwa vya kila mchoro kwenye seti, na inabadilisha jina la kichupo cha kila karatasi kama seti inavyosema (kwa chaguo-msingi namba na kichwa, kama `A-101 Mpango wa ghorofa`; {{ui:Set fields…}} › {{ui:Layout tab names}} inabadilisha hilo). Kila mchoro unahifadhiwa mahali pake, katika muundo na toleo lake. Baada ya kuhesabu upya au kubadilisha jina la karatasi, iendeshe tena na vichupo na visanduku vya kichwa vitafuata.

## Orodha ya karatasi kwenye karatasi ya jalada

Chagua karatasi ya jalada kwenye orodha kisha uchague {{ui:Put the sheet list on this sheet}}. Jedwali la karatasi zote (namba na kichwa, chini ya seti yake ndogo) linawekwa kwenye kona ya juu kushoto ya karatasi. {{ui:Update drawings}} na {{ui:Publish to PDF}} zinaiweka ya sasa. Ni bloku moja, `CC_SHEETLIST`: isogeze kama marejeo mengine ya bloku.

## Chapisha seti

{{ui:Publish to PDF}} inatengeneza PDF moja yenye ukurasa kwa kila karatasi, kwa mpangilio wa seti, kwa ukubwa wa karatasi ya kila moja, pamoja na alama moja ya ukurasa kwa karatasi ("A-101 — Mpango wa ghorofa"). Ikiwa seti ndogo imechaguliwa, CadCraft inauliza kama uchapishe seti hiyo ndogo pekee. Visanduku vya kichwa kwenye PDF vinajazwa kutoka kwenye seti hata kabla hujasasisha michoro; michoro yenyewe haibadilishwi na kuchapisha. PDF inapakuliwa.

{{ui:Publish to DWG…}} inaandika kila karatasi kama DWG yake (DWG 2018): modeli na karatasi hiyo moja, pamoja na kisanduku chake cha kichwa kilichojazwa kutoka kwenye seti, kikiitwa kwa namba na kichwa chake (`A-101 Level 1 floor plan.dwg`). Chagua {{ui:DWG}}, au {{ui:DWG + PDF}} kwa PDF ya seti kando yake. `publish.json` inaorodhesha kila faili pamoja na ukubwa wake na SHA-256 yake. Folda ya seti ikiweza kuandikwa (CadCraft Studio, au folda uliyochagua kwenye kivinjari) faili huingia kwenye folda `<set name> - published`; vinginevyo vinapakuliwa kama zip moja. [Ubatilishaji wa madarasa](topic:viewport-overrides) ya dirisha la mwonekano huja pamoja na kila DWG.

## Hifadhi seti kama kumbukumbu

{{ui:Archive as a zip}} inafunga faili la seti, kila mchoro inaoutumia na kile michoro hiyo inachounganisha (michoro zilizounganishwa, na zake kwa zamu, na picha), huku ikihifadhi folda zao, pamoja na `Transmittal.txt` inayoorodhesha kila faili. Kiungo kisicho kwenye folda ya seti kinaorodheshwa hapo kama kinachokosekana. Viungo vinatafutwa kwa njia yake kutoka kwenye mchoro, kisha kwa jina la faili lake popote kwenye folda.

## Faili la seti

Faili la `.ccsheets` ni JSON unayoweza kuisoma kwenye kihariri chochote cha maandishi:

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

Njia ziko kulingana na folda ya seti, kwa `/` kati ya folda. CadCraft inakagua faili inapolifungua: njia kamili, karatasi isiyo na faili au mpangilio, au maandishi yasiyo rahisi huachwa nje, na historia inasema hivyo.

## Utatuzi

| Unachokiona | Sababu | Cha kufanya |
|---|---|---|
| "Folda hii ni ya kusoma tu hapa" | Kivinjari hakiwezi kuandika kwenye folda | Tumia Chrome au Edge, au programu ya eneo-kazi; wakati huo {{ui:Download the set file}} inahifadhi mabadiliko yako |
| Karatasi imeachwa nje ya PDF: "has no layout named …" | Mpangilio wa karatasi ulibadilishwa jina au uliondolewa kwenye mchoro wake | Fungua mchoro na kagua vichupo vyake; ondoa karatasi kisha uiongeze tena |
| Kisanduku cha kichwa kinabaki tupu | Sifa zake zina lebo nyingine | Badilisha lebo za sifa ziwe majina ya sehemu hapo juu (BEDIT) |
| "already has a layout named … so that tab was not renamed" | Karatasi mbili za mchoro mmoja zingepata jina lilelile la kichupo | Mpe mojawapo namba au kichwa kingine |
