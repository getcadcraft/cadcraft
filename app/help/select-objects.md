---
title: Select objects
summary: Pick objects one by one, with a window or a crossing, before or during a command, and take objects back out of a selection.
section: tasks
order: 30
keywords: select, selection, window, crossing, noun-verb, pick, all, last, previous, fence, remove, add, tab, cycle, overlapping, qselect, quick select, filter, select similar, selectsimilar, shift, deselect, ctrl+a, pickfirst
---

## What you will learn

How to choose the objects a command works on. CadCraft has two ways to work, and both are fine:

- **Select first, then the command** (noun-verb). Select objects, then type `M` for Move. The command takes your selection and goes straight on to its next question.
- **Command first, then select** (verb-noun). Type `M`; the command asks `Select objects:`; you select, then press {{key:Enter}}.

## Pick one object at a time

1. With no command running, click a line. It is highlighted and its grips (small squares) appear. The right panel shows its properties.
2. Click another object. It is added to the selection.
3. Hold {{key:Shift}} and click a selected object. It is taken out of the selection.
4. Press {{key:Esc}}. Nothing is selected.

## Window and crossing

Click once on empty space, move, and click again: a rectangle. Pressing and dragging draws a freehand lasso instead, with the same two kinds (see [Lasso selection](topic:lasso-selection); Settings can make a drag draw the rectangle). Which objects you get depends on the direction:

| You move | Box | Selects |
|---|---|---|
| Left to right | Window | Only objects **fully inside** the box |
| Right to left | Crossing | Objects inside the box **and** objects it touches |

1. Draw a few overlapping lines and circles.
2. Click empty space to the left of some objects, move right, and click again. Only the objects completely inside are selected.
3. Press {{key:Esc}}.
4. Click empty space to the right, move left across some objects, and click again. Everything the box touches is selected.
5. Hold {{key:Shift}} and draw a box or a lasso over some selected objects. They come out of the selection.

## Select, then run a command

1. Select two circles.
2. Type `M` and press {{key:Enter}}.

The history says `2 found`, and the prompt goes straight to `Specify base point`. Finish the move (see [Move, copy, rotate, scale and mirror](topic:modify-objects)).

When a command ends, the selection is cleared, so the next command starts fresh.

Commands that take a selection this way: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} and {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} and {{cmd:CHAMFER}} always ask you to pick objects one at a time instead; {{cmd:TRIM}} and {{cmd:EXTEND}} take a pick or a path you drag through the pieces (see [Trim and extend](topic:trim-and-extend)).

## Run a command, then select

1. Make sure nothing is selected ({{key:Esc}}).
2. Type `E` and press {{key:Enter}}. The prompt reads `Select objects:`.
3. Click objects, or drag windows and crossings. The history counts each pick (`1 found`, `3 found`).
4. Press {{key:Enter}}, press {{key:Space}} or right-click to finish selecting.

The objects are erased and the history says how many.

At a `Select objects:` prompt you can also type:

- `ALL`, then {{key:Enter}}: every object you can edit in the open tab.
- `L` (or `LAST`), then {{key:Enter}}: the most recently drawn object.
- `P` (Previous): the objects the last command worked on, if they are still there.
- `F` (Fence): click or type points along a line; every object the line crosses is added. Press {{key:Enter}} to end the fence; `U` takes back its last point.
- `W` (Window) or `C` (Crossing): two corners, whichever way you drag.
- `R` (Remove): from now on, clicks, windows and fences take objects **out**. The prompt reads `Remove objects:`. `A` (Add) switches back.
- `?`: the list of these in the history.

These options are not shown in the prompt, as in AutoCAD.

## Pick one of several objects on top of each other

Where objects overlap or touch, a click takes the nearest one. To get another:

1. Hold the pointer still over the spot.
2. Press {{key:Tab}}. The next object there is highlighted, and the status bar says which one it is ("2 of 3: Line on layer Walls").
3. Press {{key:Tab}} again until the one you want is highlighted, then click without moving.

Moving the pointer starts over. This works with no command running, at `Select objects:` and wherever a command asks you to pick one object.

## Select by a rule: Quick select

{{cmd:QSELECT}} (`QS`, or {{ui:Edit}} › {{ui:More}} › {{ui:Quick select}}) selects every object that matches a rule, such as every circle with a radius under 50, or every block reference called DOOR-900.

1. Open {{ui:Quick select}}.
2. Choose {{ui:Object type}} (the list counts each type), then {{ui:Property}}: {{ui:Layer}}, {{ui:Color}}, and for some types {{ui:Length}}, {{ui:Radius}}, {{ui:Area}}, {{ui:Text height}}, {{ui:Text contents}}, {{ui:Block name}} or {{ui:Hatch pattern}}.
3. Choose {{ui:Operator}} and {{ui:Value}}. `*` matches with wildcards (`DOOR-*`); {{ui:Select all}} takes every object of the type. The count at the bottom shows how many match as you choose.
4. {{ui:How to apply}}: include the matches, or everything else. {{ui:Apply to}} {{ui:Current selection}} narrows what you had selected; {{ui:Append to current selection}} adds to it.
5. Click {{ui:Select}}. Then run the command you want: it uses the selection.

## Select similar

Select one or more objects and type {{cmd:SELECTSIMILAR}} (`SIM`), or choose {{ui:Edit}} › {{ui:More}} › {{ui:Select similar}}. Every object of the same type on the same layer and with the same color is selected; block references also need the same block, hatches the same pattern. Type `SE` at its `Select objects` prompt to choose what must match.

## Select now, use later

Type `SELECT` and press {{key:Enter}}, choose objects with any of the ways above, and press {{key:Enter}}. They stay selected for the next command, and `P` picks them again at a later `Select objects:` prompt.

## Select everything

With no command running, press {{key:Mod+A}}, or choose {{ui:Select all}} in the toolbar's {{ui:Edit}} › {{ui:More}} menu, to select every object you can edit on the open tab. If you have typed something at the command line, {{key:Mod+A}} selects that text instead: press {{key:Esc}} to clear it first. At a `Select objects:` prompt, type `ALL`. {{ui:Select none}} in the same menu, or {{key:Esc}}, clears the selection.

:::tip
If you would rather have each click replace the selection (and {{key:Shift}} add to it), set {{ui:Clicking objects}} to {{ui:Replaces the selection}} in [CadCraft settings](topic:settings).
:::

## What cannot be selected

- Objects on a layer that is **off**, **frozen** or **locked**. Locked objects stay visible, and you can still snap to them, but you cannot select or change them.
- On a sheet tab, the model shown inside a viewport. You select the sheet's own objects (the title block, notes, the viewport frames). To edit the model, go to the {{ui:Model}} tab.

## Erase quickly

Select objects, then press {{key:Delete}} (or {{key:Backspace}} when the command line does not have the cursor). On a Mac keyboard, the key labeled delete works once you have clicked in the drawing; while the command line has the cursor, press fn and delete together. This runs {{cmd:ERASE}} on the selection. If nothing happens, you have typed something at the command line: press {{key:Esc}}, or type `E` and press {{key:Enter}} instead.

## Common mistakes

- **The window took too little.** You dragged left to right, which only takes what is fully inside. Drag right to left for a crossing.
- **A click on empty space started a box.** One click on empty space starts a window; the second click finishes it. Press {{key:Esc}} or right-click to drop it.
- **A click on empty space let go of the selection.** It does, unless you hold {{key:Shift}}. To keep the selection on such a click and clear it with {{key:Esc}} only, set {{ui:Clicking an empty spot}} to {{ui:Keeps the selection}} in [CadCraft settings](topic:settings#clicking-an-empty-spot).
- **The command used objects you did not mean.** Something was still selected when you started it. Press {{key:Esc}} before a command to start with nothing selected.
- **Nothing is selected after a command.** That is on purpose: a finished command clears the selection.
