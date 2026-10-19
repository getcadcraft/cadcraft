---
title: Map layers under the drawing
summary: Show street maps, aerial pictures or a picture with a world file under the model space, placed by the drawing's coordinate system.
section: tasks
order: 89
keywords: map, map layers, maplayers, ml, geomap, basemap, aerial, satellite, tiles, xyz, wms, wmts, map service, world file, coordinate system, epsg, state plane, utm, georeference, site plan, geolocation, geographic location, geodata, saved, dwg, dxf
---

## What you will make

A site plan drawn over an aerial picture or a street map, each in the right place.

## Tell CadCraft where the drawing is

1. Set the drawing's units in {{ui:Properties}} › {{ui:Units}} (for example feet or meters).
2. Type {{cmd:MAPLAYERS}} (or `ML`) and press {{key:Enter}}.
3. Under {{ui:Where the drawing is}}, type a name or an EPSG code in {{ui:Find a system}} (for example `2277` or `Texas Central`) and choose it in {{ui:System}}.
4. If the drawing is drawn in that system's own coordinates, leave the placement at 0. If not, give one drawing point ({{ui:Drawing X}}, {{ui:Drawing Y}}), where that point is on the map grid ({{ui:Easting}}, {{ui:Northing}}), and how far the drawing is turned from east ({{ui:Turned (°)}}).
5. Click {{ui:Use this system}}.

## Add a layer

1. Turn on {{ui:Map layers from the internet}} at the top of the dialog. Until then nothing is asked of any server; when it is on, the servers you add see the area on screen and your internet address, never your drawing.
2. In {{ui:Add a layer}}, choose what it comes from:
   - **Tiles (XYZ)**: a tile address with `{z}`, `{x}` and `{y}`, a name and the credit its provider asks for.
   - **WMS**, **WMTS** or **ArcGIS**: the service's address, then {{ui:Get layers}} and choose one.
   - **A picture**: a PNG or JPEG with its world file (and its `.prj` when there is one).
3. The layer shows under the drawing. Its credit shows at the bottom right of the drawing.

Each layer in the list can be hidden, made more or less see-through, moved up or down, or removed.

Each change to the system or the layers is one step of {{cmd:UNDO}}.

## Saved with the drawing

The coordinate system and the list of layers are saved in the drawing when you save it as DWG or DXF, and come back when you open it again, on any computer. Pictures from files are not saved: add them again after opening. The {{ui:Map layers from the internet}} switch is not saved in the drawing: it belongs to this browser, so a drawing someone sends you asks no server for anything until you turn it on yourself.

What other programs see:

| Saved as | The drawing's location | The map layers |
|---|---|---|
| DWG 2010, 2013 or 2018, DXF 2000 | Written the standard way programs read a drawing's geographic location: the system's EPSG code, one drawing point and where it is on the map grid, the units and north. | CadCraft only |
| DWG 2000, 2004 or 2007, DXF R12 | CadCraft only (CadCraft says so when you save) | CadCraft only |

- **Checked:** the ODA File Converter reads the location with no errors, and a DXF library (ezdxf) reads the EPSG code and the placement exactly.
- **Not checked yet:** whether other drafting programs recognise the system from its EPSG code. A program that keeps its own list of systems under other names may show the drawing with no location.
- Other programs show a block named `CADCRAFT_GEO` in the block list. It is CadCraft's own copy of the system and the layers; it is never placed in the drawing. Leave it there.

## Drawings from other programs

When a drawing from another program has a geographic location, CadCraft reads it:

- If it names an EPSG code, {{ui:Where the drawing is}} shows that system and the map layers are placed by it.
- If CadCraft does not know the system (another program's own name for it, a local grid, or a scale factor), the location is not used, but it is kept and saved back as it was, so the other program still finds it. Choose a system in {{ui:Where the drawing is}} to replace it.

:::note
Map layers are drawn on screen only: they do not plot. Use only map services whose terms allow it, and keep their credit visible.
:::
