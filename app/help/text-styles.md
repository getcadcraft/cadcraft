---
title: Set the font and size of text with text styles
summary: Make named text styles with a font, height, width and slant, set one current for new text, and change a style to change all the text that uses it.
section: tasks
order: 81
keywords: text style, style, STYLE, ST, TEXTSTYLE, -STYLE, font, text height, width factor, oblique, slant, change font, standard style, apply style, DDSTYLE
---

## What you'll do

Make a text style called `Notes` with its own font and height, use it for new text, and later change the style so every note that uses it changes at once.

## Steps

1. Type {{cmd:STYLE}} (`ST`) and press {{key:Enter}}, or click {{ui:Text style}} on the {{ui:Draw}} toolbar. The {{ui:Text style}} dialog lists the styles in the drawing. Every drawing has `Standard`.
2. Click {{ui:New…}}, type `Notes` as the name of the new style and click {{ui:OK}}. The status line says "Text style Notes made and set current."
3. In {{ui:Font}}, choose or type a font name. Set {{ui:Height (0 = ask each time)}} to a number, such as `2.5`, so every new text gets that height. Leave it at `0` to be asked each time.
4. Set {{ui:Width factor}} and {{ui:Oblique angle (°)}} if you want narrower, wider or slanted letters. The sample line shows the result.
5. Click {{ui:Close}}. Draw text with {{cmd:TEXT}} or {{cmd:MTEXT}}: new text takes the current style.
6. To use a style you already made, open the dialog again, pick it in the list and click {{ui:Set current}}.
7. To put a style on text that is already drawn, select the text, open the dialog, pick the style and click {{ui:Apply to selected text}}.

## Change a style later

Change the font, height, width or slant of a style in the dialog and every text that uses it follows, in one undo step ({{key:Mod+Z}}). The status line says how many texts followed.

## Notes

- {{ui:Delete}} refuses `Standard`, and a style that text still uses: change that text to another style first.
- The styles are saved in the drawing's STYLE table, so DXF and DWG files keep them.
- On the command line, `-STYLE` does the same with options (Current, New, Font, Height, Width, Oblique, Delete, List).
- A font that is not on the computer reading the drawing is shown in another face.
