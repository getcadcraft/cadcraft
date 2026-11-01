---
title: Sheet sets
summary: Bring sheets from many drawings together in one numbered list, fill their title blocks from the set, publish them as one PDF and archive the set as a zip.
section: tasks
order: 47
keywords: sheet set, sheet set manager, ssm, sheetset, ccsheets, dst, sheet list, sheet index, title block, fields, publish, renumber, archive, etransmit, transmittal, subsets, cover sheet, drawing list
---

## What you will learn

How to collect sheets (layouts) from several drawing files into a **sheet set**, number and title them, have their title blocks filled in for you, publish the whole set as one PDF, and pack everything into one zip to send.

A sheet set lives in a small file of its own, `<name>.ccsheets`, in the folder that holds the drawings. The set file lists the sheets with paths from that folder, so you can move or copy the whole folder.

:::note
Opening a folder to read and write needs Chrome or Edge (they can let a page work in a folder you choose), or the desktop app. Other browsers open a set read only: you can look at it and publish it, and the set file downloads instead of saving.
:::

## Start a set

1. Find the {{ui:Sheet set}} section in the left panel, and open its {{ui:Set}} menu. Typing {{cmd:SHEETSET}} (or `SSM`) also brings you there.
2. Choose {{ui:New set…}}. Give the set a name, and if you like the project name and number.
3. Pick the folder that holds the drawings. The set file is saved there.

To open a set later, choose {{ui:Open set…}} and pick the same folder. If the folder holds more than one set, CadCraft asks which.

## Add sheets

1. Choose {{ui:Add sheets from a drawing…}} and pick one of the drawings in the folder.
2. CadCraft reads that drawing in the background (it does not open on screen) and lists its sheets. Tick the ones you want and click {{ui:OK}}.
3. Select a sheet and press {{key:F2}} (or {{ui:Rename and renumber…}}) to give it a number and a title, such as `A-101` and `Floor plan`.

{{ui:New sheet from template…}} makes a new drawing from another drawing's sheet (its title block and viewports), named after the new sheet, and adds it. The set remembers the drawing you used as its template.

## Arrange the set

- **Subsets** group sheets, such as Architectural › Plans: select where it goes and choose {{ui:New subset…}}.
- **Order**: drag a sheet to another place in the list, or onto a subset to move it there. With the keyboard, select it and press {{key:Alt+Up}} or {{key:Alt+Down}}.
- **Open a sheet**: double-click it (or press {{key:Enter}}). Its drawing opens in its own tab, on that sheet.
- **Remove**: select it and press {{key:Delete}}. The drawing itself is not changed.
- **Undo**: {{ui:Undo set change}} and {{ui:Redo set change}} step through what you changed in the set.
- **Renumber**: {{ui:Renumber sheets…}} numbers every sheet, or one subset's, in the order of the list: a prefix, a start and a step (`A-` and `101` give A-101, A-102 …).

Every change is saved in the set file at once.

## Number sheets from their fields

Instead of numbering sheets by hand, let a rule build each number from the sheet's fields, so a sheet that moves to another level or discipline gets its new number by itself.

1. Give each sheet its fields: select it, click {{ui:Rename…}} and, in {{ui:Fields of this sheet}}, write one per line, for example `DISCIPLINE = A` and `LEVEL = 1`. A field the whole set shares (say `DISCIPLINE = A`) can go in the set's {{ui:Properties…}} instead.
2. Open the panel's menu and click {{ui:Numbering rule…}}.
3. Write the rule, for example `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` counts up among the sheets whose other fields read the same, so level 1 gets A-101, A-102 and level 2 starts again at A-201. `{SEQ:2}` writes it with two digits; `{SUBSET}` is the name of the subset a sheet is in.
4. Choose what happens when a field changes: {{ui:Renumber the sheets}} keeps the numbers following the rule after every change; the other choice numbers them once, now.

The rule is saved in the set file. While it renumbers by itself, change a sheet's fields rather than its number.

## Fill title blocks from the set

A title block gets its text from the set when its attributes are tagged with a field's name:

| Tag | What it shows |
|---|---|
| `SHEETNUMBER` (or `SHEET_NO`, `DWG_NO`) | The sheet's number |
| `SHEETTITLE` (or `TITLE`, `SHEET_TITLE`) | The sheet's title |
| `SHEETDESC` | The sheet's description |
| `PROJECTNAME` (or `PROJECT`) | The project name |
| `PROJECTNUMBER` (or `PROJECT_NO`, `JOB_NO`) | The project number |
| `SHEETSETNAME` | The set's name |
| `SHEETINDEX`, `SHEETCOUNT` | "3 of 12", and 12 |
| Your own, such as `CLIENT` | What you wrote for it in {{ui:Set fields…}} |

{{ui:Set fields…}} holds the project name and number and your own fields, one per line as `NAME = value`.

{{ui:Update drawings}} writes the numbers, titles and fields into the title blocks of every drawing in the set, and renames each sheet's layout tab as the set says (by default number and title, such as `A-101 Floor plan`; {{ui:Set fields…}} › {{ui:Layout tab names}} changes that). Each drawing is saved in place, in its own format and version. After you renumber or rename sheets, run it again and the tabs and title blocks follow.

## A sheet list on the cover sheet

Select the cover sheet in the list and choose {{ui:Put the sheet list on this sheet}}. A table of every sheet (number and title, under its subset) goes in the sheet's upper left corner. {{ui:Update drawings}} and {{ui:Publish to PDF}} keep it up to date. It is one block, `CC_SHEETLIST`: move it like any block reference.

## Publish the set

{{ui:Publish to PDF}} makes one PDF with a page per sheet, in the set's order, at each sheet's own paper size, with a bookmark per sheet ("A-101 — Floor plan"). With a subset selected, CadCraft asks whether to publish just that subset. The title blocks in the PDF are filled from the set even before you update the drawings; the drawings themselves are not changed by publishing. The PDF downloads.

{{ui:Publish to DWG…}} writes each sheet as a DWG of its own (DWG 2018): the model and that one sheet, with its title block filled from the set, named by its number and title (`A-101 Level 1 floor plan.dwg`). Choose {{ui:DWG}}, or {{ui:DWG + PDF}} for the set's PDF beside them. A `publish.json` lists every file with its size and SHA-256. When the set's folder can be written (CadCraft Studio, or a folder you picked in the browser) the files go into a folder `<set name> - published`; otherwise they download as one zip. Viewport [class overrides](topic:viewport-overrides) come along in each DWG.

## Archive the set

{{ui:Archive as a zip}} packs the set file, every drawing it uses and what those drawings link to (linked drawings, and theirs in turn, and pictures), keeping their folders, plus a `Transmittal.txt` that lists every file. A link that is not in the set's folder is listed there as missing. Links are found by their path from the drawing, then by their file name anywhere in the folder.

## The set file

The `.ccsheets` file is JSON you can read in any text editor:

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

Paths are relative to the set's folder, with `/` between folders. CadCraft checks the file when it opens it: an absolute path, a sheet without a file or layout, or text that is not plain is left out, and the history says so.

## Troubleshooting

| What you see | Why | What to do |
|---|---|---|
| "This folder is read only here" | The browser cannot write in a folder | Use Chrome or Edge, or the desktop app; meanwhile {{ui:Download the set file}} keeps your changes |
| A sheet is left out of the PDF: "has no layout named …" | The sheet's layout was renamed or removed in its drawing | Open the drawing and check its tabs; remove the sheet and add it again |
| A title block stays empty | Its attributes have other tags | Rename the attribute tags to the field names above (BEDIT) |
| "already has a layout named … so that tab was not renamed" | Two sheets of one drawing would get the same tab name | Give one of them another number or title |
