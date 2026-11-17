---
title: Add text and labels
summary: Place room labels with single-line text, write wrapped notes with paragraph text typed in place, and edit text afterwards.
section: tasks
order: 80
keywords: text, dtext, mtext, mleader, multileader, leader, revcloud, revision cloud, cloud, find, replace, find and replace, paragraph, wrap, line spacing, label, note, annotation, height, justify, textmask, background mask, mask, wipeout, rotation, edit text, ddedit, textedit, font
---

## What you will make

Two room labels, centered in their rooms, a note that wraps to its width, then a correction to one of the labels.

## Text height and drawing scale

Text height is in drawing units. In a drawing in millimeters that will be plotted at 1:50, text 2.5 mm tall on paper must be 2.5 × 50 = 125 units tall in the model. On a sheet tab you draw in paper units, so 2.5 there is 2.5 mm on paper.

## Place a centered label

1. Type `DT` and press {{key:Enter}} (or click {{ui:Text}} in the toolbar). The prompt reads `Specify start point of text [Justify]:`.
2. Type `J` and press {{key:Enter}}.
3. At `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, type `MC` and press {{key:Enter}}.
4. At `Specify insertion point of text`, click the middle of a room.
5. At `Specify height`, type `250` and press {{key:Enter}}.
6. At `Specify rotation angle of text <0>`, press {{key:Enter}}.
7. At `Enter text`, type `KITCHEN` and press {{key:Enter}}.

The label appears, centered on the point you clicked.

8. Press {{key:Enter}} on the empty `Enter text` prompt to end the command.

## Write a note that wraps

Paragraph text ({{cmd:MTEXT}}) wraps to a width and is typed straight onto the drawing.

1. Type `T` and press {{key:Enter}}, or click {{ui:Paragraph}} in the toolbar.
2. At `Specify first corner`, click where the note's top-left corner goes.
3. To change the height first, type `H`, press {{key:Enter}}, type `250` and press {{key:Enter}}.
4. At `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, click to the right of the first corner. The distance across is the width the text wraps at; how far down you click does not limit it.
5. A box opens over the drawing with the cursor in it. Type `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. The words wrap at the width as you type.
6. Press {{key:Enter}} to start a new paragraph and type `CHECK ON SITE`.
7. Press {{key:Mod+Enter}}, click {{ui:OK}}, or click anywhere outside the box. The note is one object.

The bar above the box changes {{ui:Height}}, {{ui:Line spacing}} (1 is normal, 1.5 is half as much again), {{ui:Width}} (0 = no wrapping) and {{ui:Justify}} while you type. {{key:Esc}} or {{ui:Cancel}} closes it without adding anything.

The options at the second corner: `H` height, `J` justification (`TL` top left … `BR` bottom right: the corner or middle of the box that stays put), `L` line spacing, `R` rotation, `W` a typed width instead of the second corner.

:::note
While the box is open, {{key:Space}} types a space and {{key:Enter}} starts a new paragraph. A saved DWG keeps paragraph text as MTEXT; a DXF R12 has no paragraph text, so each line is saved as its own text.
:::

### Several single lines instead

{{cmd:TEXT}} (`DT`) asks for one line at a time: each {{key:Enter}} starts the next line, 1.667 times the text height lower, and each line is its own object. Press {{key:Enter}} on an empty line to finish.

## Justification options

| Option | The point you click is |
|---|---|
| Left (default) | The left end of the baseline |
| Center | The middle of the baseline |
| Right | The right end of the baseline |
| Middle, MC | The middle of the text, both across and up and down |
| TL | The top-left corner |

## Edit text

1. Double-click a text object. It opens in the same box as new paragraph text, with the cursor at the end.
2. Change the words.
3. Press {{key:Mod+Enter}} or click outside the box. The text on the drawing changes; {{key:Esc}} leaves it as it was.

{{cmd:TEXTEDIT}} (`ED`) does the same: pick one text after another, and press {{key:Enter}} when done.

Select a text to change it in the right panel instead: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}} (0 = no wrapping), {{ui:Line spacing}}, {{ui:Rotation}}, the X and Y position and {{ui:Justify}}. The {{ui:Justify}} list also offers Bottom left, which text from other programs sometimes uses.

## Formatting inside paragraph text from other programs

Paragraph text in a DWG or DXF can carry codes inside it: colors per word, bold and italic, underline, overline and strikethrough, stacked fractions such as 1/2, and a different height for a word. CadCraft keeps those codes, draws them (on screen and in a plotted PDF) and saves them back unchanged.

When you edit such a text (double-click, {{cmd:TEXTEDIT}}, the Text field of the right panel, or {{cmd:FIND}} with Replace), you edit its plain words. A word you type goes into the run next to it and takes its color and style; the other codes stay where they are. If you retype a stacked fraction's numbers, that fraction becomes plain text. Setting the whole text from the Text field keeps the codes only where it can tell which words stayed.

Font names (`\F`) are kept and saved, but everything is drawn in the one Helvetica-style font. There is no toolbar for typing codes yet.

## Point at something: multileaders

{{ui:Leader}} in the {{ui:Annotate}} group ({{cmd:MLEADER}}, `MLD`) draws an arrow, a leader line, a short landing and a note, as one object.

1. Click {{ui:Leader}}. At `Specify leader arrowhead location`, click what the note is about.
2. At `Specify leader landing location`, click where the note goes. The landing turns toward the side you clicked.
3. Type the note in the box that opens, and press {{key:Mod+Enter}}.

`A` and `L` at the first question set the arrowhead size and the landing length; the text height comes from the {{ui:Text height}} for new dimensions, times {{ui:Overall scale}}. Double-click a multileader to change its words. Grips move the arrowhead and the landing; the note follows the landing. In {{ui:Properties}}: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}}, {{ui:Arrowhead size}} and {{ui:Landing distance}}.

:::note
Multileaders save as real multileaders in DWG. DXF has no multileader in R12 or 2000, so there they are saved as the lines, arrowhead and text they draw.
:::

## Mark changes with a revision cloud

{{ui:Annotate}} › {{ui:More}} › {{ui:Revision cloud}} ({{cmd:REVCLOUD}}, `RC`) draws a cloud of arcs round what changed. The history shows the arc length and the type it will use.

- **Rectangular** (the first time): click two corners.
- `P` **Polygonal**: click the corners, {{key:Enter}} closes the cloud.
- `F` **Freehand**: click where it starts and move the pointer round the area without clicking; an arc is added every arc length. Click or press {{key:Enter}} to close it.
- `O` **Object**: pick a closed polyline, circle or ellipse (or a line, arc or open polyline); it becomes the cloud. `Reverse direction?` `Y` turns the arcs inward.
- `A` **Arc length**: the length of each arc. Choose one that suits the plot scale.

The cloud is a closed polyline of arcs, so it saves in every format.

## Find and replace words

{{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ({{cmd:FIND}}) looks through text, the values of block attributes and dimension text on the open tab (or only in the selected objects).

1. Type the words in {{ui:Find}}. The list shows each place they are, and the count.
2. Choose {{ui:Match case}}, {{ui:Whole words only}} or {{ui:Use wildcards (* and ?)}} if you need them, and untick what not to look in.
3. Click {{ui:Select found}} to select those objects, or type the new words in {{ui:Replace with}} (the list shows what each becomes) and click {{ui:Replace all}}. One {{key:Mod+Z}} undoes every replacement.

A dimension's measured value is not text, so it is never replaced: in `<> TYP.`, only `TYP.` can be.

## Hide the lines behind a label

1. Select the texts, type {{cmd:TEXTMASK}} and press {{key:Enter}}.
2. `B` paints the drawing's background behind them; `C` asks for a colour number. `O` takes the mask away.
3. `Border offset factor`: {{key:Enter}} keeps 1.5, half a text height round the text.

The mask covers lines under the text, on screen and when you plot. DWG 2004 or later and DXF 2000 keep it; the 2000 DWG format and DXF R12 cannot, and the save says so.

## Font

All text is drawn in a Helvetica-style font, on screen and in PDFs. Text from opened drawings keeps its words, height and position, but not its original font (the name of a font inside paragraph text is kept in the file, see above).

In plotted PDFs, text in any European script, Cyrillic or Greek prints as itself (the PDF carries the letters it needs, and you can still select and search the text). Chinese, Japanese and Korean text prints as itself too (the plot fetches a larger font the first time it is needed). Arabic, Persian, Urdu and Hebrew text prints as itself as well (see the next section). Characters no font has a letter for print as "?", and the history says how many there were.

## Right-to-left text: Arabic, Persian, Urdu, Hebrew

Type the text as you would anywhere else: {{cmd:TEXT}} and {{cmd:MTEXT}} draw each line in reading order. A line whose first letter is Arabic or Hebrew reads right to left; numbers and Latin words inside it keep their own left-to-right order, and Arabic-script letters are joined. A line that starts with a Latin letter stays left to right with the right-to-left words in place inside it. Each paragraph of a multi-line text has its own direction, and a wrapped paragraph keeps it on every line.

The text is stored as you typed it, so DWG and DXF files exchange it with other programs unchanged. The insertion point and the justification ({{ui:Left}}, {{ui:Center}}, {{ui:Right}}) mean the same side as for any text: a right-to-left note that should hang from its right end wants {{ui:Right}}.

On screen the letters come from your system's fonts. In a plotted PDF, Hebrew uses the same embedded font as Latin text; Arabic-script text makes the plot fetch one more font (under 1 MB, once), and the whole PDF then prints in that font. That font has no shape of its own for three Urdu characters (heh goal, yeh barree and the Urdu full stop): they print in the nearest Arabic letter's shape. A drawing that has both Arabic-script and Chinese, Japanese or Korean text prints one of the two as "?", because a plot carries one font. Text in a loaded SHX font is ordered and joined when the font holds the letters at their Unicode places; for old fonts whose letters are already shaped, use {{ui:Reverse}} in {{cmd:SHXFONTS}} as before.

## Common mistakes

- **The text is too small to see.** The height is in drawing units. In a large drawing, use a large height (see above), or zoom in.
- **The command ended after one line.** You pressed {{key:Enter}} on an empty line in {{cmd:TEXT}}. Start it again, or use paragraph text (`T`), where {{key:Enter}} starts a new paragraph.
- **`T` opened a box instead of asking for a line.** As in AutoCAD, `T` is paragraph text ({{cmd:MTEXT}}); single-line text is `DT`.
- **The text wraps in a different place in AutoCAD.** CadCraft wraps with Helvetica widths; another font can fit a word more or less on a line.
- **Text in a mirrored copy.** It is placed mirrored but stays readable left to right.
