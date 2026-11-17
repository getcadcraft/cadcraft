---
title: Mga sheet set
summary: Pagsamahin ang mga sheet mula sa maraming drawing sa iisang may-numerong listahan, punan ang kanilang title block mula sa set, i-publish sila bilang iisang PDF, at i-archive ang set bilang zip.
keywords: sheet set, sheet set manager, ssm, sheetset, ccsheets, dst, listahan ng sheet, index ng sheet, title block, fields, publish, renumber, archive, etransmit, transmittal, subsets, cover sheet, listahan ng drawing
from: 2c855720
---

## Ano ang matututunan mo

Paano mangolekta ng mga sheet (layout) mula sa ilang drawing file sa isang **sheet set**, bigyan sila ng numero at pamagat, punan nang awtomatiko ang kanilang title block, i-publish ang buong set bilang iisang PDF, at ipakete ang lahat sa iisang zip para maipadala.

Ang sheet set ay nasa sarili nitong maliit na file, `<name>.ccsheets`, sa folder na naglalaman ng mga drawing. Inililista ng set file ang mga sheet gamit ang path mula sa folder na iyon, kaya maaari mong ilipat o kopyahin ang buong folder.

:::note
Kailangan ng Chrome o Edge (maaari nilang payagan ang page na gumana sa folder na pipiliin mo), o ang desktop app, para mabuksan ang folder na babasahin at susulatan. Ang ibang browser ay nagbubukas ng set na read only: maaari mo itong tingnan at i-publish, at dina-download ang set file sa halip na i-save.
:::

## Magsimula ng set

1. Hanapin ang seksyong {{ui:Sheet set}} sa kaliwang panel, at buksan ang menu nitong {{ui:Set}}. Dadalhin ka rin doon ng pag-type ng {{cmd:SHEETSET}} (o `SSM`).
2. Piliin ang {{ui:New set…}}. Bigyan ng pangalan ang set, at kung gusto mo, ang pangalan at numero ng project.
3. Piliin ang folder na naglalaman ng mga drawing. Doon sini-save ang set file.

Para buksan ang set sa susunod, piliin ang {{ui:Open set…}} at piliin ang parehong folder. Kung higit sa isang set ang nasa folder, itatanong ng CadCraft kung alin.

## Magdagdag ng mga sheet

1. Piliin ang {{ui:Add sheets from a drawing…}} at pumili ng isa sa mga drawing sa folder.
2. Binabasa ng CadCraft ang drawing na iyon sa background (hindi ito bumubukas sa screen) at inililista ang mga sheet nito. Lagyan ng tsek ang gusto mo at i-click ang {{ui:OK}}.
3. Piliin ang isang sheet at pindutin ang {{key:F2}} (o {{ui:Rename and renumber…}}) para bigyan ito ng numero at pamagat, gaya ng `A-101` at `Floor plan`.

Ang {{ui:New sheet from template…}} ay gumagawa ng bagong drawing mula sa sheet ng ibang drawing (ang title block at viewport nito), pinangalanan ayon sa bagong sheet, at idinadagdag ito. Naaalala ng set ang drawing na ginamit mo bilang template nito.

## Ayusin ang set

- **Subsets** ay nagpapangkat ng mga sheet, gaya ng Architectural › Plans: piliin kung saan ito pupunta at piliin ang {{ui:New subset…}}.
- **Pagkakasunod**: i-drag ang sheet sa ibang lugar sa listahan, o sa isang subset para ilipat ito roon. Gamit ang keyboard, piliin ito at pindutin ang {{key:Alt+Up}} o {{key:Alt+Down}}.
- **Magbukas ng sheet**: i-double-click ito (o pindutin ang {{key:Enter}}). Bubukas ang drawing nito sa sarili nitong tab, sa sheet na iyon.
- **Alisin**: piliin ito at pindutin ang {{key:Delete}}. Hindi nagbabago ang mismong drawing.
- **Undo**: ang {{ui:Undo set change}} at {{ui:Redo set change}} ay dumadaan sa mga binago mo sa set.
- **Renumber**: ang {{ui:Renumber sheets…}} ay nagbibigay ng numero sa bawat sheet, o sa sheet ng isang subset, ayon sa pagkakasunod sa listahan: isang prefix, simula, at hakbang (ang `A-` at `101` ay nagbibigay ng A-101, A-102 …).

Bawat pagbabago ay agad na naka-save sa set file.

## Bilangin ang mga sheet mula sa kanilang field

Sa halip na bilangin ang mga sheet nang mano-mano, hayaang bumuo ng bawat numero ang isang patakaran mula sa mga field ng sheet, para ang sheet na lumipat sa ibang level o disiplina ay awtomatikong makakakuha ng bagong numero.

1. Bigyan ang bawat sheet ng mga field nito: piliin ito, i-click ang {{ui:Rename…}} at, sa {{ui:Fields of this sheet}}, isulat ang isa bawat linya, halimbawa `DISCIPLINE = A` at `LEVEL = 1`. Ang field na ibinabahagi ng buong set (halimbawa `DISCIPLINE = A`) ay maaaring ilagay sa {{ui:Properties…}} ng set sa halip.
2. Buksan ang menu ng panel at i-click ang {{ui:Numbering rule…}}.
3. Isulat ang patakaran, halimbawa `{DISCIPLINE}-{LEVEL}{SEQ:2}`. Bumibilang pataas ang `{SEQ}` sa mga sheet na pareho ang basa ng ibang field nila; kaya ang level 1 ay nakakakuha ng A-101, A-102, at nagsisimulang muli ang level 2 sa A-201. Isinusulat ng `{SEQ:2}` ito gamit ang dalawang digit; ang `{SUBSET}` ay ang pangalan ng subset kung nasaan ang sheet.
4. Piliin kung ano ang mangyayari kapag may nagbago sa field: pinananatiling sumusunod sa patakaran ng {{ui:Renumber the sheets}} ang mga numero pagkatapos ng bawat pagbabago; ang kabilang pagpipilian ay binibilangan sila nang minsan, ngayon.

Naka-save ang patakaran sa set file. Habang kusang nagre-renumber ito, baguhin ang field ng sheet sa halip na ang numero nito.

## Punan ang title block mula sa set

Nakukuha ng title block ang teksto nito mula sa set kapag may tag ang mga attribute nito na kapareho ng pangalan ng isang field:

| Tag | Ipinapakita |
|---|---|
| `SHEETNUMBER` (o `SHEET_NO`, `DWG_NO`) | Ang numero ng sheet |
| `SHEETTITLE` (o `TITLE`, `SHEET_TITLE`) | Ang pamagat ng sheet |
| `SHEETDESC` | Ang paglalarawan ng sheet |
| `PROJECTNAME` (o `PROJECT`) | Ang pangalan ng project |
| `PROJECTNUMBER` (o `PROJECT_NO`, `JOB_NO`) | Ang numero ng project |
| `SHEETSETNAME` | Ang pangalan ng set |
| `SHEETINDEX`, `SHEETCOUNT` | "3 of 12", at 12 |
| Sarili mo, gaya ng `CLIENT` | Ang isinulat mo rito sa {{ui:Set fields…}} |

Ang {{ui:Set fields…}} ay naglalaman ng pangalan at numero ng project at ang sarili mong mga field, isa bawat linya bilang `NAME = value`.

Isinusulat ng {{ui:Update drawings}} ang mga numero, pamagat at field sa mga title block ng bawat drawing sa set, at pinapalitan ang pangalan ng layout tab ng bawat sheet ayon sa set (bilang default, numero at pamagat, gaya ng `A-101 Floor plan`; binabago ito ng {{ui:Set fields…}} › {{ui:Layout tab names}}). Bawat drawing ay sine-save sa lugar nito, sa sarili nitong format at bersyon. Pagkatapos mong mag-renumber o mag-rename ng mga sheet, patakbuhin itong muli at susunod ang mga tab at title block.

## Listahan ng sheet sa cover sheet

Piliin ang cover sheet sa listahan at piliin ang {{ui:Put the sheet list on this sheet}}. Ilalagay sa kaliwang itaas na sulok ng sheet ang isang table ng bawat sheet (numero at pamagat, nasa ilalim ng subset nito). Pinapanatili itong updated ng {{ui:Update drawings}} at {{ui:Publish to PDF}}. Isa itong block, `CC_SHEETLIST`: ilipat ito gaya ng anumang block reference.

## I-publish ang set

Ang {{ui:Publish to PDF}} ay gumagawa ng isang PDF na may isang page bawat sheet, ayon sa pagkakasunod ng set, sa sariling paper size ng bawat sheet, na may bookmark bawat sheet ("A-101 — Floor plan"). Kapag may napiling subset, itatanong ng CadCraft kung ipu-publish lang ang subset na iyon. Ang mga title block sa PDF ay pinupunan mula sa set kahit bago mo i-update ang mga drawing; hindi binabago ng pag-publish ang mismong mga drawing. Dina-download ang PDF.

Ang {{ui:Publish to DWG…}} ay nagsusulat ng bawat sheet bilang sariling DWG (DWG 2018): ang model at ang sheet na iyon, na may title block na pinunan mula sa set, pinangalanan ayon sa numero at pamagat nito (`A-101 Level 1 floor plan.dwg`). Piliin ang {{ui:DWG}}, o ang {{ui:DWG + PDF}} para sa PDF ng set sa tabi nila. Inililista ng `publish.json` ang bawat file kasama ang laki at SHA-256 nito. Kapag maisusulatan ang folder ng set (CadCraft Studio, o folder na pinili mo sa browser), ang mga file ay napupunta sa folder na `<set name> - published`; kung hindi, dina-download sila bilang isang zip. Dinadala ng bawat DWG ang [class override](topic:viewport-overrides) ng viewport nito.

## I-archive ang set

Ang {{ui:Archive as a zip}} ay nagpapakete ng set file, bawat drawing na ginagamit nito, at ng mga naka-link dito (mga naka-link na drawing, at ang kanila sa turn, at mga larawan), pinananatili ang kanilang mga folder, kasama ang `Transmittal.txt` na naglilista ng bawat file. Ang link na wala sa folder ng set ay nakalista roon bilang nawawala. Hinahanap ang mga link ayon sa path nito mula sa drawing, saka ayon sa pangalan ng file nito saanman sa folder.

## Ang set file

Ang `.ccsheets` file ay JSON na mababasa mo sa anumang text editor:

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

Ang mga path ay relatibo sa folder ng set, na may `/` sa pagitan ng mga folder. Sinusuri ito ng CadCraft kapag binubuksan: ang absolute na path, sheet na walang file o layout, o teksto na hindi plain ay inaalis, at sinasabi ito ng history.

## Troubleshooting

| Ano ang nakikita mo | Bakit | Ano ang gagawin |
|---|---|---|
| "This folder is read only here" | Hindi makasulat ang browser sa folder | Gumamit ng Chrome o Edge, o ang desktop app; samantala, pinananatili ng {{ui:Download the set file}} ang mga pagbabago mo |
| Naiwan sa PDF ang isang sheet: "has no layout named …" | Pinalitan ng pangalan o inalis ang layout ng sheet sa drawing nito | Buksan ang drawing at suriin ang mga tab nito; alisin ang sheet at idagdag muli |
| Nananatiling walang laman ang isang title block | May ibang tag ang mga attribute nito | Palitan ang pangalan ng mga attribute tag ayon sa mga pangalan ng field sa itaas (BEDIT) |
| "already has a layout named … so that tab was not renamed" | Dalawang sheet ng iisang drawing ang magkakaroon ng parehong pangalan ng tab | Bigyan ang isa sa kanila ng ibang numero o pamagat |
