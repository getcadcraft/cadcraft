---
title: "Default Policies: set what a new drawing starts with"
summary: Say once which units, length format, precision, text height and sheet paper a new drawing starts with, for metric and for imperial work, and share the policies across the office as a small file.
section: tasks
order: 76
keywords: default, defaults, default policies, policy, office standard, office defaults, template, new drawing, units, insunits, length format, architectural, precision, luprec, text height, sheet paper, a1, share, export, import, json
---

## What you'll do

Tell CadCraft what a new drawing should start with, so nobody in the office has to run UNITS and change the same things each time. This is an add-on: it is off until you switch it on, and a policy you do not set leaves CadCraft's own default exactly as it is.

:::note
These are defaults for **new** drawings and **new** sheets. A drawing you already started is not changed, and neither is a drawing you open.
:::

## Steps

1. Open Settings, go to {{ui:Add-ons}} and switch on {{ui:Default Policies}}.
2. In Settings, open the **CadCraft** tab and pick {{ui:Default Policies}} in the list on the left.
3. Set the policies you want. Each one starts on **CadCraft's own**. A policy with a **Metric** and an **Imperial** box takes one value for each kind of drawing; fill in only the ones you need.
4. There is no Save button: each change is saved as you make it.
5. Start a new drawing. It has the units, length format, precision and text height you set, and its first new sheet is on the paper you chose.

## The policies

- **Units of a new drawing**: none, millimeters, centimeters, meters, inches or feet.
- **Length format** and **Length precision**: what the UNITS command sets, for a new drawing.
- **Height of new text**, in drawing units.
- **Paper of a new sheet**: the paper New sheet uses.
- **Annotation sizes on paper** (Settings › Global › Default Policies): the office's heights in millimetres as printed. CadCraft uses the one for notes and labels: {{cmd:ANNOSCALE}} sets the height new text starts with to that height at the annotation scale. See [Units, papers and scales](topic:units-papers-scales#annotate-by-scale).

A drawing in inches or feet uses the Imperial values; any other drawing uses the Metric ones. A drawing with no units uses the unit system set in Settings › Global › Default Policies, or Metric when none is set.

## Share them across the office

1. In Settings, open the **Global** tab and pick {{ui:Default Policies}}.
2. Click {{ui:Save to a file}}. You get a small file ending in `.ccdefaults.json`.
3. On another computer, switch the add-on on, open the same place and click {{ui:Load from a file}}. The file's policies replace the ones on that computer.

One file holds the policies of every CadCraft app, so the same file works in BimCraft.

## Good to know

- There is no policy for a sheet's scale: a new sheet's view is fitted to the drawing, and you set its scale on the sheet.
- There is no policy for a dimension style: a new drawing has no named dimension styles. Set dimensions up with DIMSTYLE, or start from a drawing that has yours.
- The file is plain, open JSON. A policy the file names that this version does not know is left out and named in the message; the rest still loads.
- Policies are kept in this browser, not in the drawing. Switch the add-on off and everything is CadCraft's own again.
