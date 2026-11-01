---
title: Organize a drawing with classes
summary: Classes sort objects a second way, across layers (Lighting-Fixtures-Spot): show and hide them, give them a colour, linetype, lineweight, fill and text style that objects can take "by class", and set the class new objects go in.
section: tasks
order: 71
keywords: class, classes, CLASSES, CLS, CLASS, by class, ByClass, active class, use at creation, None, design layer, layer scale, elevation, Vectorworks
---

Layers say *where* an object belongs in the drawing; classes say *what* it is. A wall on layer `Level 1` can be in class `Walls-Exterior`, a spot light on layer `Ceiling` in class `Lighting-Fixtures-Spot`. You can hide every light on every layer at once, or plot every exterior wall heavier, without moving anything between layers.

Every object starts in class **None**. A drawing with no classes of its own works exactly as before.

## Open the Classes panel

Type `CLASSES` (or `CLS`) and press {{key:Enter}}, or choose {{ui:Classes…}} in the {{ui:More}} menu of the {{ui:View}} group. The panel opens over the drawing and stays open while you draw.

- **Add a class:** type its name in the box at the top and press {{key:Enter}}. A `-` makes a level: `Lighting-Fixtures-Spot` sits under `Lighting-Fixtures`, which sits under `Lighting`; the missing levels are added for you.
- **Show or hide:** the eye beside a class. Hiding a class hides every class under it, on screen and on paper.
- **Active class:** the round button. New objects you draw go in the active class.
- **Pick a class:** click its name. The buttons and settings below the list then work on it.

The number at the end of each row is how many objects are in that class (in the model, on the sheets and inside block definitions).

## Put objects in a class

Select the objects, pick a class in the panel and choose {{ui:Set class}}. Tick {{ui:By class}} first to make them take their colour, linetype, lineweight, fill and text style from the class. You can also:

- type `CLASS` with objects selected and enter a class name (a new name makes the class);
- type `CLASS` with nothing selected to set the active class; `?` lists the classes with their counts;
- use the {{ui:Class}} section of the Properties panel: the class, and a {{ui:… by class}} switch for colour, linetype and lineweight (fill for hatches, text style for text);
- select by class with `QSELECT`: choose the property {{ui:Class}}.

{{ui:Select its objects}} selects every object of the picked class on the open sheet (or in the model).

## How an object draws: object, class, layer

An object's colour, linetype, lineweight, fill and text style can be **by class**, the way they can be by layer. CadCraft looks in this order:

1. The object's own value, unless that value is by class.
2. The class's value, when the object takes it by class and the class has one.
3. The layer's value.

A class whose colour (or linetype …) is {{ui:Not set}} passes the object on to its layer. Pick a class and set its {{ui:Color}}, {{ui:Linetype}}, {{ui:Lineweight}}, {{ui:Fill (hatches)}} and {{ui:Text style}} below the buttons. Tick {{ui:Use at creation}} to make new objects drawn in that class take all of them by class.

Each change in the panel is one undo step.

## Rename and delete

{{ui:Rename}} edits the name in place: press {{key:Enter}} to keep it, {{key:Esc}} to leave it. The classes under it follow (`Lighting-Spot` becomes `Light-Spot` when `Lighting` becomes `Light`), and so do their objects and any viewport overrides.

{{ui:Delete}} removes the class and every class under it. Their objects move to **None**. One {{ui:Undo}} puts it all back. **None** cannot be renamed or deleted.

## Design layers

Under {{ui:Design layers}} each layer can carry a scale (`1:50`) and an elevation. A design layer is an ordinary layer: model space and sheets work as before, and the scale and elevation are kept with the drawing for the tools that will use them.

## In DWG and DXF files

Classes are kept in every DWG version CadCraft saves and in DXF (R12 and 2000). Each object's class is its own extended data (application `CADCRAFT_CLASS`), so AutoCAD and other programs keep it with the object. The class list, colours and visibility are kept in one unused block named `CADCRAFT_CLASSES`; if another program purges that block, CadCraft still finds every object's class and the classes come back with default settings.

Other programs do not know about classes: they draw each object with its own or its layer's values.

See also [Viewport class overrides](topic:viewport-overrides) and [Organize a drawing with layers](topic:layers).
