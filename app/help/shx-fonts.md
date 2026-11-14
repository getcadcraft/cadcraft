---
title: Draw text in your own SHX fonts
summary: Give CadCraft a folder of SHX fonts (or pick the files) and the text styles that name them are drawn in them, on the screen and in a plot or PDF, with the style's height, width factor and slant.
section: tasks
order: 64
keywords: shx, fonts, font, shape font, big font, bigfont, unifont, legacy, persian, farsi, arabic, text style, missing font, font substituted, SHXFONTS, folder, reverse, visual order, simplex, isocp
---

Drawings from other programs often name **SHX fonts** in their text styles, and a DWG does not carry them. Without the font, CadCraft draws that text in its own face, which is fine for ordinary Latin text but not for old fonts that map plain character codes to other letter shapes, such as legacy Persian annotation.

Give CadCraft the fonts, and it draws the text in them.

## Load your fonts

Type {{cmd:SHXFONTS}} (`SHX`) and choose:

- {{ui:Folder}} (CadCraft Studio): pick a folder. Every `.shx` file in it is read now, and again each time CadCraft starts.
- {{ui:Files}} (the browser): pick one or several `.shx` files. They are kept in this browser and never uploaded.
- {{ui:List}}: the fonts that are loaded, and the ones the open drawing names but you have not loaded.
- {{ui:Remove}} and {{ui:Clear}}: forget one font, or all of them.

CadCraft cannot include third-party fonts, so it never ships any: they come from you. A drawing only names its fonts, and it keeps no copy of them.

## What happens

A text style's font name is matched to a loaded font by its name, ignoring case, the folder and `.shx` (`SIMPLEX.SHX` finds `simplex`). A text in such a style is drawn as lines, in the screen, in a plot and in a PDF, at the text's own place, height, rotation, width factor and oblique angle. Its width is the font's own, so {{ui:Center}} and {{ui:Right}} alignment, wrapping and picking match what you see. A style whose font is not loaded keeps the built-in face, and when you open a drawing that names fonts you have not loaded, the command line says so.

The Standard style counts too: a drawing whose Standard style names a font of its own keeps it.

## Fonts already in visual order

Many old Persian and Arabic SHX fonts hold letters already shaped for the screen and drawn left to right, so a text typed in logical order comes out backwards. Type {{cmd:SHXFONTS}}, choose {{ui:Reverse}}, and name the font: its text is then laid out last letter first. Run it again to undo. The switch belongs to the font, is kept in this browser, and is not saved in the drawing.

## What is not covered yet

- Text with inline format codes (colours, stacks in an MTEXT) stays in the built-in face.
- Big fonts (the double-byte kind) fill in for codes the main font lacks, but a text in an East Asian code page that CadCraft has already turned into Unicode is not mapped back to the font's double-byte codes.
- The font reader follows the published description of the format and was tested on fonts made for CadCraft. If one of yours draws wrongly, send us the font and the drawing.
