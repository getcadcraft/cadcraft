---
title: Make and insert blocks
summary: Turn a drawn door into a block, place it again at other positions, scales and angles, and tidy up unused blocks.
section: tasks
order: 110
keywords: block, bmake, insert, ddinsert, symbol, purge, explode, redefine, base point, reference, count, bcount, schedule, csv, attributes, data extraction
---

## What you will make

A door symbol made into a block called `DOOR-900`, then placed three times: as drawn, turned 90 degrees, and mirrored.

A block is a named group of objects. You draw it once; every place you use it is a **block reference** that points back to the one definition. The {{ui:Blocks}} section in the left panel lists the blocks in the drawing and how often each is used.

## Draw the door

1. Type `L` and press {{key:Enter}}.
2. Type `0,0` and press {{key:Enter}}.
3. Type `@0,900` and press {{key:Enter}}, then press {{key:Enter}} again. This is the door leaf.
4. Type `A` and press {{key:Enter}}.
5. Type `C` and press {{key:Enter}} to give the center first.
6. Type `0,0` and press {{key:Enter}} for the center.
7. Type `900,0` and press {{key:Enter}} for the start point.
8. Type `0,900` and press {{key:Enter}} for the end point. This is the swing.
9. Click {{ui:Extents}}.

Arcs go counterclockwise from the start point to the end point.

## Make the block

1. Type `B` and press {{key:Enter}}, or click {{ui:Make}} in the Blocks group.
2. At `Enter block name`, type `DOOR-900` and press {{key:Enter}}.
3. At `Specify insertion base point`, type `0,0` and press {{key:Enter}}. This is the hinge: the point that lands where you place the block.
4. At `Select objects`, drag a window round the leaf and the arc.
5. Press {{key:Enter}}.

The history says `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` The {{ui:Blocks}} panel lists DOOR-900 with `1×` beside it: one reference. Click the door: it now selects as one object, a "Block reference".

:::tip
You can select the objects first and then type `B`. CadCraft still asks for the name and base point, then uses your selection.
:::

## Insert the block

1. Type `I` and press {{key:Enter}}, or click {{ui:Insert}} next to DOOR-900 in the {{ui:Blocks}} panel.
2. At `Enter block name or [File/Library] <DOOR-900>`, press {{key:Enter}}. (The panel's {{ui:Insert}} button fills in the name for you.)
3. The door follows the crosshair. Click where the hinge should go.

A second door appears.

## Insert turned or scaled

1. Type `I` and press {{key:Enter}}, then press {{key:Enter}} to accept the name.
2. At `Specify insertion point [Scale/Rotate]`, type `R` and press {{key:Enter}}.
3. Type `90` and press {{key:Enter}}. The preview turns.
4. Click to place it.

Type `S` instead to set a scale factor; it applies to both directions. The scale and rotation are remembered for the next insert. To mirror a door, insert it and then use {{cmd:MIRROR}} on the reference.

## Change a placed block

Select a block reference. In the right panel you can change its {{ui:X}}, {{ui:Y}}, {{ui:Scale X}}, {{ui:Scale Y}} and {{ui:Rotation}}. A negative {{ui:Scale X}} flips it.

## Redefine a block

To change every door at once, make a block with the same name:

1. Draw the new version of the door.
2. Type `B` and press {{key:Enter}}, and type `DOOR-900`.
3. At `Block "DOOR-900" already exists. Redefine it?`, type `Y` and press {{key:Enter}}.
4. Give the base point and select the new objects, as before.

Every reference to DOOR-900 now shows the new version.

Or edit the block itself: {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}) opens it on its own, and {{ui:Save block}} puts it back. See [Block attributes](topic:attributes#change-a-block-the-block-editor).

## Count blocks and export a schedule

Type {{cmd:COUNT}} (or {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}), then:

- click one door: every door in this space is selected, and the history says how many there are here and in the whole drawing;
- or press {{key:Enter}}: the history lists every block with its count, most first;
- or type `E`, then `C` for a CSV of the counts (in the model, on sheets, in total) or `A` for one row per reference with its layer, position, rotation and every attribute value — a schedule you can open in a spreadsheet.

Unnamed blocks (dimensions, tables) and references inside other blocks are not counted. Cells that start like a formula (`=`, `+`, `-`, `@`) get a leading `'` so a spreadsheet shows them as text.

## Explode and purge

- {{cmd:EXPLODE}} (`X`) turns a selected block reference back into separate objects. The definition stays.
- {{cmd:PURGE}} (`PU`) removes block definitions that nothing uses any more. The history says how many it removed.

## Block names

A name can be up to 255 characters and can contain spaces, but it cannot start with an asterisk, and cannot contain `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` or a backtick. When you save DXF R12, names are written in capitals, other characters than letters, digits, `$`, `_` and `-` become `_`, and names are cut to 31 characters; the history says how many changed. Short names in capitals, digits and hyphens, like `DOOR-900`, survive unchanged. A saved DWG keeps names as you typed them, upper and lower case; only characters DWG does not allow change (a `|` becomes `$0$`, others become `_`).

## Write a block or objects to a file of their own

Type `W` ({{cmd:WBLOCK}}) and choose **Objects**, **Block** or **Entire drawing**. The result is a new DWG or DXF holding only the layers, styles and blocks it uses, with your base point as its origin. For objects you can keep them, turn them into a block, or delete them from this drawing.

## Common mistakes

- **The block landed far from the crosshair.** The base point was not on the objects. Make the block again with the base point on a corner or a hinge.
- **"No objects selected; nothing made."** You pressed {{key:Enter}} before selecting anything.
- **"This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK)."** Type `F` to bring a block in from another drawing, or `L` for the library. See [Insert from a file or the library](topic:insert-from-file-and-library).
- **"A viewport cannot go in a block."** Leave viewport frames out of the selection.
