---
title: Place steel sections and standard parts
summary: Draw steel sections, elevations and 3D members from the published section tables, place bolts, nuts, washers, pins, bearings, keys and gears from their standards, and list them in a parts list.
section: tasks
order: 121
keywords: steel, section, profile, shape, w shape, wide flange, i-beam, channel, angle, hss, tube, pipe, ipe, hea, heb, upn, beam, column, member, elevation, aisc, en 10365, bolt, screw, nut, washer, pin, dowel, bearing, key, keyway, gear, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standard parts, parts list, bill of materials, bom, steelmember, partslist
---

The library's {{ui:Standard}} tab has two kinds of things, made right here from published tables (nothing is downloaded):

- **Steel sections**: 1,335 sizes. W, S, C, L, HSS and Pipe from the AISC Shapes Database v16.0; IPE, HEA, HEB and UPN from EN 10365:2017. DetailCraft uses the same table.
- **Standard parts**: hex head screws (ISO 4017), hex bolts (ISO 4014), hex nuts (ISO 4032), plain washers (ISO 7089), inch hex bolts and nuts (ASME B18.2.1 and B18.2.2), parallel pins (ISO 2338), deep groove ball bearings (ISO 15), parallel keys (DIN 6885-1) and spur gears (modules from ISO 54).

Everything here is shared under CC0: use it for anything, no credit needed.

## Place a steel section

1. Open the library ({{ui:Library}} in the Blocks group, or type `LIB`) and click the {{ui:Standard}} tab.
2. Pick the family in the first list, for example {{ui:W shapes}}. Type in the search box to narrow the sizes: `W12` shows every W12.
3. In {{ui:Place as}}, choose:
   - {{ui:Section}}: the cross-section, with its centre at the insertion point.
   - {{ui:Elevation}}: the member seen from the side, as long as {{ui:Length (mm)}} says, from the middle of its left end.
   - {{ui:3D member}}: a solid on the 3D tab (below).
4. Click {{ui:Place}} on the size's card, then click where it goes, as for any library item.

A section or elevation becomes a block. Its attributes carry the size, the table it comes from, the length (for an elevation) and a material you can fill in.

:::note
S shapes, channels and UPN are drawn with parallel flanges of the average thickness, and angles with square corners: the real flanges are sloped and the corners rounded. W, IPE, HEA and HEB have their root fillets, and HSS their corner radii.
:::

## Make a 3D member

Choose {{ui:3D member}} and click {{ui:Place}}, or type {{cmd:STEELMEMBER}} (`SMEMBER`) at the command line:

1. At `Section size`, press {{key:Enter}} for the size shown, or type one, for example `HSS6x6x1/4` or `IPE300`.
2. Click the start point, then the end point. The member runs between them, sitting on the ground.
3. For a column, type `C`, click its base point and type its height.

The member is a closed solid on the 3D tab. Move or copy it there like any other solid. {{key:Mod+Z}} takes it away again.

## Place a standard part

1. On the {{ui:Standard}} tab, pick the family, for example {{ui:Hex head screws}}.
2. For a screw, bolt, pin or key, type its {{ui:Length (mm)}} (inches for the inch families). For a gear, type the {{ui:Teeth}}, the {{ui:Face width (mm)}} and the {{ui:Bore (mm)}}. Leave a box empty for the usual value shown in it.
3. Click {{ui:Place}} on the size and click where it goes.

Screws, bolts and pins are drawn from the side with the bearing face of the head at the insertion point; nuts, washers, bearings and gears face on; keys from above. Threads are drawn the usual way: the root as a thin line, the end of the thread as a thick one. Gears are drawn as their tip circle, pitch circle and root circle, not tooth by tooth.

Each part's block carries its type, standard, size, length and material as attributes, and its weight from the nominal shape in steel. Change the material in the {{ui:Properties}} panel.

The same parts are in the Library as items too, and PartCraft opens them as parametric parts ({{ui:Standard part}} in its File group).

## Make a parts list

- In the library, click {{ui:Parts list}}: every standard part and steel section in the drawing, grouped by type, standard, size, length and material, with the quantity and the item numbers. {{ui:Download CSV}} saves it for a spreadsheet.
- To draw it, type {{cmd:PARTSLIST}} (`PLIST`), click the top left corner of the table, and press {{key:Enter}} for the usual text height or type one.

The list is read from the blocks' attributes, so it is still right after the drawing is saved as DWG or DXF and opened again.

## Common mistakes

- **"No steel section is called …"**: type the size the way the {{ui:Standard}} tab lists it: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **The member is on the 3D tab, not in the plan.** {{cmd:STEELMEMBER}} makes a solid; open the 3D tab to see it. To show the steel in the plan, place a {{ui:Section}} or {{ui:Elevation}} too.
- **A length out of range.** A bolt must be longer than its head, and a key longer than it is wide. The line under the cards says which value was refused.
