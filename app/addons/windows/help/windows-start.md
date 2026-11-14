---
title: Windows and doors: place and lay out
summary: Place a window or door by its frame size, set its layout of panes and openings, choose the profile system and colour.
section: tasks
order: 1
keywords: window, door, pvc, aluminium, aluminum, profile, frame, sash, mullion, transom, tilt and turn, layout, elevation
---

## Place a window

Type {{cmd:WINDOW}} (or `WIN`). Click the lower left corner of the window's outer frame; CadCraft draws it in elevation, as seen from the room, with its number and size under it. The prompt shows what the next one will be. Type a letter to change it:

- {{ui:Size}}: the outer size of the frame, `1500x1200` (in the drawing's units).
- {{ui:Layout}}: the panes and how they open (below).
- {{ui:System}}: the profile system (the three that come with the add-on are generic examples). {{ui:Colour}} and {{ui:Glass}} (the build as it is written on your order, such as `4/16/4`).
- {{ui:Kind}}: window or door. A door has a threshold profile along the bottom and a square cut where its sides meet it.

Press Enter to finish. Change anything later in Properties: size, layout, system, colour, glass.

## Layout

A layout is written as text. Columns are joined by `|`; the cells of a column, from the top, by `/`.

- Each cell is `F` fixed light, `L` or `R` a turn sash hinged on the left or right, `TL` or `TR` a tilt-and-turn sash, `T` a tilt-only sash.
- `~600` after a cell is its height; `@900` after a column is its width. What is left is shared equally.
- `TL|TR` two tilt-and-turn sashes · `F~600/TL@900|TR` a fixed light over a tilt-and-turn sash in a 900 wide column, then a second sash.

Between columns there is a mullion; between cells of a column a transom. Each pane gets a sash if it opens, and glass.

## What the sizes mean

Everything comes from the profile system's numbers: the frame's face width, how far a sash overlaps the frame, how far glass sits in the rebate. See the topics Windows and doors: cut list, bars, glass and labels, and profile systems.
