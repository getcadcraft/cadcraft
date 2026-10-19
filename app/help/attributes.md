---
title: Block attributes
summary: See and change the values a block reference carries, such as an item number or a maker, and keep them when you save a copy.
section: tasks
order: 115
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, title block, edit in place, attribute editor, attdef, define attribute, bedit, block editor, bclose, attribute, attributes, attdef, attrib, tag, item number, value, invisible, constant, block, properties, list, equipment tag
---

## What attributes are

An attribute is a named value that travels with a block reference: an equipment tag's item number, a room tag's name, a door's fire rating. The block's definition says which attributes it has (each has a **tag**, a **prompt**, a **default** and a place, size and angle for its text). Every reference to the block carries its own values.

Some attributes are **invisible**: they hold data, such as a maker or a model number, but never draw. Some are **constant**: the same for every reference, fixed by the block.

## Where attributes come from

- Blocks in DWG and DXF files you open keep their attributes, with each reference's values.
- Blocks you bring in with {{cmd:INSERT}} and the {{ui:File}} option keep theirs. See [Insert from a file or the library](topic:insert-from-file-and-library).
- Library items come in as blocks with attributes: a visible item number and the item's data, invisible.

- Blocks you make yourself: define attributes with {{cmd:ATTDEF}} first (below), then select them with the other objects when you make the block.

## Define attributes for your own blocks

1. Draw the block's lines, for example a room tag.
2. Choose {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}, or type `ATT` and press {{key:Enter}}.
3. The history shows the modes (`Invisible=No Constant=No Preset=No`). Type `I`, `C` or `P` to switch one, and press {{key:Enter}} when they are right. Invisible values are kept but not drawn; a constant one has the same value in every reference; a preset one is not asked for when you insert the block.
4. Type the tag (for example `ROOM_NO`: upper case, no spaces), the prompt (`Room number`) and a default value (`101`).
5. Click where the value goes, and give the height and the rotation. The tag shows on the drawing.
6. Make the block with {{cmd:BLOCK}}, selecting the lines and the attribute definitions together. The reference that replaces them gets the default values; each new {{cmd:INSERT}} asks for them.

A selected attribute definition shows {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} and the modes in {{ui:Properties}}.

## Change a block: the block editor

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}, `BE`) opens a block on its own: type its name (or select a reference first). A bar at the top says which block you are editing. Draw, erase and change its objects with the usual commands, and add or change attribute definitions. Then click {{ui:Save block}} (or type {{cmd:BCLOSE}} and `S`): every reference shows the change, and one {{key:Mod+Z}} undoes it all. {{ui:Discard changes}} (`BCLOSE`, `D`) leaves the block as it was.

When you added, removed or changed attribute definitions, saving also brings every reference in line: values you typed are
kept, a new attribute gets its default, a removed one goes, and each attribute goes back to where the definition puts it.
The history says how many references were updated.

## Edit a title block where it is (REFEDIT)

A title block on a sheet often sits inside a block. To change its lines or texts without leaving the sheet:

1. Select the title block, then {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}} (or type {{cmd:REFEDIT}}).
2. Its contents become ordinary objects where they are; everything else is faded and cannot be changed.
3. Change, erase or draw: new objects become part of the block.
4. Click {{ui:Save the block}} in the bar at the top (or type {{cmd:REFCLOSE}} and `S`). Every reference shows the change,
   and one {{key:Mod+Z}} undoes the whole edit. {{ui:Discard}} leaves the block as it was.

A linked drawing, a dynamic block, or a reference scaled differently across and up cannot be edited in place: use
{{cmd:BEDIT}} (or open the linked drawing).

:::note
Save or discard in the block editor before you save the drawing: a file saved while the editor is open has the block as it was before.
:::

## Fill them in when you place a block

1. Type `I` and press {{key:Enter}}, type the block name and press {{key:Enter}}.
2. Click where it goes.
3. CadCraft asks for each value, for example `Enter Item number (ITEM) <>`. Type the value and press {{key:Enter}}, or press {{key:Enter}} to keep the default shown in angle brackets.

Values the block marks as preset, and constant ones, are not asked for. They take their default.

## See and change the values

1. Click a block reference.
2. In the right panel, under {{ui:Attributes}}, each tag has its value. Invisible ones say `hidden`.
3. Click a value, type the new one and press {{key:Enter}}.

The drawing shows the new value at once. Each change is one step: {{key:Mod+Z}} undoes it.

**The attribute editor.** Double-click a reference with attributes (or {{cmd:EATTEDIT}}): the {{ui:Edit attributes}} dialog
lists every tag with its prompt and value. Type new values; click a row to change that attribute's {{ui:Height}},
{{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Color}} and {{ui:Invisible}} for this reference only.
{{ui:Apply}} keeps the dialog open; {{ui:OK}} applies and closes. Each {{ui:Apply}} or {{ui:OK}} is one undo step.

**On the command line**, {{cmd:ATTEDIT}} asks each value in turn: type a new one, or press {{key:Enter}} to keep it.

## Change the attribute definitions (BATTMAN, ATTSYNC)

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) lists a block's attributes: change a tag, prompt or
default, tick {{ui:Invisible}}, {{ui:Constant}} or {{ui:Preset}}, and move them up or down (the order values are asked in). With
{{ui:Update the references (values kept)}} ticked, {{ui:Apply}} also brings every reference in line; a renamed tag keeps its
values. Each {{ui:Apply}} is one undo step.

{{cmd:ATTSYNC}} brings references in line with their block's definitions by hand: `S` picks a reference, `N` names a block,
`A` does every block. Values are kept.

The values of a library item's own fields (its id, version, license and attribution) are shown but not editable, so that checking for updates keeps working. Its item number and quantity are yours to change.

## List them

Select references and type `LI` (for {{cmd:LIST}}). The history shows each attribute as `TAG = value`, with `(invisible)` or `(constant)` where that applies.

## Moving, turning and exploding

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} and {{cmd:MIRROR}} keep the values; the text moves with the block and stays readable.
- {{cmd:EXPLODE}} turns the visible attributes into plain text with their values. The invisible ones are dropped.

## Saving

A saved DWG and a saved DXF both keep every attribute: each block's definitions (invisible, constant and preset ones too) and each reference's values. Other CAD programs read them as ordinary block attributes.

In a DXF R12, a value longer than 255 characters is cut to 255, and the history says so.

## Common mistakes

- **A value does not show on the drawing.** It is invisible, or it is empty. Invisible values still show in the right panel.
- **The value I typed went to the command line.** Click into the value box in the right panel first.
