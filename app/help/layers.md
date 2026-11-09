---
title: Organize a drawing with layers
summary: Create layers for walls, doors and notes, set colors, make a layer current, and turn layers off, freeze, lock or keep them from plotting.
section: tasks
order: 70
keywords: layer, layers, la, current layer, freeze, thaw, lock, off, on, plot, no plot, colour, color, layer properties, layiso, layuniso, isolate, layoff, layfrz, laymcur, layon, laythw, rename, laymrg, merge, laydel, delete layer
---

## What you will make

Three layers, Walls, Doors and Notes, each with its own color, with objects drawn on each and moved between them.

## The Layers panel

Layers live in the panel on the left, under {{ui:Layers}}. Each row shows, from left to right:

- a dot: filled for the **current** layer, where new objects go;
- a color swatch;
- the layer name;
- four buttons: on/off (eye), freeze (snowflake), lock (padlock) and plot (printer).

Every drawing has a layer called `0`. Typing `LA` and pressing {{key:Enter}} jumps to the panel.

## Create layers

1. Click {{ui:New layer}} above the list. A name box opens.
2. Type `Walls` and press {{key:Enter}} (or click {{ui:Add}}).

The status bar says "Added layer Walls and made it current." The new layer gets color 7 (black on the light theme, white on the dark one).

3. Click {{ui:New layer}} again, type `Doors` and press {{key:Enter}}.
4. Click {{ui:New layer}} again, type `Notes` and press {{key:Enter}}.

Notes is now current.

## Give each layer a color

1. Click the color swatch on the Walls row. Your system's color picker opens.
2. Choose a color and confirm.

The swatch and everything on Walls that is colored {{ui:By layer}} change.

:::note
A picked color that matches one of the 255 standard CAD colors is stored as that number. Any other color is kept exactly in CadCraft, but is saved as the nearest standard color in a DWG or DXF file.
:::

## Draw on a layer

1. Click the name **Walls** in the list. Its dot fills and the status bar says "Current layer: Walls".
2. Draw a rectangle (`REC`). It goes on Walls.
3. Click **Doors**, and draw an arc (`A`). It goes on Doors.

You can also choose the current layer in {{ui:Current settings}} on the right (nothing selected), under {{ui:Layer}}.

## Move objects to another layer

1. Select the objects.
2. In the right panel, choose the new layer in {{ui:Layer}}.

They move to that layer and take its color if their color is {{ui:By layer}}.

## Off, freeze, lock and plot

| Button | What it does |
|---|---|
| On/off (eye) | Hides the layer's objects. They cannot be seen, selected or snapped to. |
| Freeze (snowflake) | Same effect as off in CadCraft. Kept separate because other programs treat them differently, and the setting is saved. |
| Lock (padlock) | Objects stay visible and you can snap to them, but they cannot be selected or changed. Good for a background you trace over. |
| Plot (printer) | When pressed, the layer is shown on screen but **left out of plots** and PDFs. Use it for construction lines and notes to yourself. |

Hover a button to see what it will do ("Turn off", "Freeze", "Lock", "Do not plot this layer").

You cannot turn off the current layer: the status bar says "That is the current layer. Make another layer current first." Clicking a layer's name to make it current also turns it on and thaws it.

Every layer change, in the panel or by a command, is one undo step: {{key:Mod+Z}} puts it back.

## Work on layers by picking objects

You do not need to know a layer's name: pick an object on it. Type the command, or open {{ui:Tools}} at the top of the {{ui:Layers}} panel.

| Command | What it does |
|---|---|
| {{cmd:LAYISO}} | Select objects, press {{key:Enter}}: only their layers stay on, every other layer is turned off. If the current layer is turned off, one of the isolated layers becomes current. |
| {{cmd:LAYUNISO}} | Turns back on the layers the last {{cmd:LAYISO}} turned off, and gives back the current layer it changed. |
| {{cmd:LAYOFF}} | Click objects one after another: each one's layer is turned off. Type `U` to take back the last one, {{key:Enter}} to finish. |
| {{cmd:LAYFRZ}} | The same, freezing each layer. |
| {{cmd:LAYMCUR}} | Click an object: its layer becomes current (and is turned on and thawed). With one object already selected, that one is used. |
| {{cmd:LAYON}} | Turns every layer on. |
| {{cmd:LAYTHW}} | Thaws every layer. |

The current layer is never turned off or frozen this way: the history says so, and you can make another layer current with {{cmd:LAYMCUR}} first. Picking a block reference uses the reference's own layer.

## Rename, merge and delete layers

- {{cmd:RENAME}}: type `LA`, the old name and the new one. Every object on the layer follows. (`B` renames a block the same way, with every reference to it.)
- {{cmd:LAYMRG}}: click an object on each layer to merge (or type `N` and a name), press {{key:Enter}}, then pick the target layer and answer `Y`. The objects move to the target — in the model, on sheets and inside blocks — and the merged layers go.
- {{cmd:LAYDEL}}: pick an object on the layer (or `N` and its name) and answer `Y`. The layer goes **with every object on it**, everywhere. Layer 0, DEFPOINTS and the current layer cannot be deleted.

Each is one undo step. All three are in {{ui:Tools}} at the top of the {{ui:Layers}} panel.

1. Click one wall line, then type `LAYISO` and press {{key:Enter}}. Only Walls stays on.
2. Draw or change what you need on Walls.
3. Type `LAYUNISO` and press {{key:Enter}}. Doors and Notes come back.

## Common mistakes

- **New lines went on the wrong layer.** Check which dot is filled before you draw. A new layer becomes current as soon as you add it.
- **An object will not select.** Its layer is locked, off or frozen.
- **The layer still prints in another program.** DXF R12 cannot store "do not plot". CadCraft keeps the setting for itself when the drawing has a sheet, but other programs will plot that layer.
- **Layer names in capitals after saving.** DXF R12 stores names in capitals, so `Walls` comes back as `WALLS`, and spaces become `_`. A saved DWG keeps names as you typed them.
- **Renaming, merging or deleting a layer.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} or {{cmd:LAYDEL}} (also in {{ui:Tools}}): see below.

## Group layers

Keep the list short by putting layers in folders, such as Existing, Proposed and Services. Each folder folds, and its switches turn all its layers on or off, freeze them or lock them together. The current layer is never turned off.

In {{ui:Tools}} on the Layers panel, choose {{ui:Add ready-made groups}} for a set made for small residential work, {{ui:Group by name}} to group layers that share a prefix (`E-Walls`, `E-Doors`), or {{ui:New group}}. Drag a layer onto a folder, or use the list above the layers for the current layer. Type in {{ui:Find a layer}} to narrow the list. `LAYGROUP` (`LG`) does the same at the command line.

The layers themselves don't change, so other CAD programs see them as an ordinary flat list. CadCraft keeps the groups in the file.
