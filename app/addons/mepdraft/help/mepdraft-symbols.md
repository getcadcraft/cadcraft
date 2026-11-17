---
title: MEP drafting: symbols, equipment and tags
summary: Valves and accessories that cut into a run and heal it when they go, equipment in plan with connection points, and automatic tag numbers.
section: tasks
order: 20
keywords: valve, gate, globe, ball, butterfly, check, balancing, control valve, safety valve, pressure reducing, strainer, pump, flow meter, thermometer, gauge, expansion vessel, air vent, drain, union, flange, reducer, cap, damper, fire damper, attenuator, access door, radiator, fan coil, air handling unit, boiler, chiller, tank, heat exchanger, diffuser, grille, tag, attribute, renumber
---

## Symbols on a run

Type {{cmd:MEPSYM}}, then the symbol's name (or `?` for the list), and click on a run. The symbol is turned to the run and the line is broken under it.

- On a single-line run the symbol is as long as the scale says (6 mm on paper).
- On a double-line pipe it is sized from the pipe: three times the outside diameter long. On a duct it is as wide as the duct.
- {{ui:Flip}} turns the next symbols the other way, for the ones that show a direction (check valve, pump, reducer).
- A click away from any run puts the symbol down free, for a schematic.

For pipes: gate, globe, ball, butterfly, check, balancing, control (with actuator), safety relief and pressure reducing valves; strainer, pump, flow meter; thermometer, pressure gauge, expansion vessel, air vent and drain (these stand on the line without breaking it); union, flanged joint, reducer and cap. For ducts: volume damper, fire damper, attenuator, flexible connection and access door.

The shapes are CadCraft's own drawings, in the general manner of building-services schematics (valves as two triangles tip to tip with the mark of the type at the middle, a pump as a circle with the flow triangle, a damper as a blade across the duct), as the symbol families of ISO 14617 and EN 12792 do. They were not checked against either standard, and a drawing made with them is not claimed to conform. Each symbol is a block (`MEP_SYM_BALL` and so on): edit the block to make it yours.

## Moving and erasing symbols

Use the ordinary tools. Erase a valve and the run closes again. Move it along the run, or onto another run, and the old break is healed and a new one is cut where it lands; it turns to the run it lands on. Copy a valve onto a run and the copy cuts its own gap. Undo takes all of it back in one step.

## Equipment

{{cmd:MEPEQUIP}}, then the kind: radiator, fan coil unit, air handling unit (a box with filter, coil and fan sections), boiler, chiller, tank or cylinder, heat exchanger, square four-way supply diffuser, linear diffuser, return or extract grille. {{ui:Size}} takes millimetres, for example `1400` for a radiator's length or `3000x1200` for an air handling unit; {{ui:Angle}} turns the next ones.

The outlines are plain plan shapes at the size you type, not any maker's product. Each has connection points (short stubs for pipes, the middle of a side or the neck for ducts) that runs snap onto. Sanitary fixtures are not in this set: place those from the Library.

## Tags

Every tagged symbol and every equipment carries four attributes: `TAG`, `TYPE`, `SIZE` and `SERVICE`. The tag is shown, the others are kept for lists and the attribute export. Tags are numbered by kind as you place things: valves V-01, V-02; check valves NRV-01; control valves CV-01; pumps P-01; radiators RAD-01; air handling units AHU-01; fire dampers FD-01. Unions, flanges, reducers and caps carry no tag.

{{cmd:MEPTAG}} and a click changes one tag. {{cmd:MEPTAG}} then {{ui:Renumber all}} numbers every tag again, top to bottom and left to right. In {{ui:Settings}} › {{ui:CadCraft}} › {{ui:MEP drafting}} you can number by service and kind instead (HF-V-01).
