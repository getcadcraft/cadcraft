---
title: Trace as-built lines over a point cloud
summary: Attach a laser scan (LAS, LAZ, E57, PLY, PCD, PTX, PTS or XYZ) under the drawing, cut a plan slice through it, and draw walls, doors and columns with object snap on its points.
section: tasks
order: 88
keywords: point cloud, pointcloudattach, pcattach, pointcloud, pc, laser scan, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, survey, slice, plan cut, node, snap, trace, existing conditions
---

## What you will make

An as-built floor plan: the walls of a scanned building drawn as lines and polylines exactly on the scan's points.

## Attach the cloud

1. Set the drawing's units first if it has none (the {{ui:Units}} box in {{ui:Properties}}, or {{cmd:UNITS}}): CadCraft converts the cloud from its own units to the drawing's.
2. Type {{cmd:POINTCLOUDATTACH}} (or `PCATTACH`) and press {{key:Enter}}. Pick a `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` or `.xyz` file (the topic on point cloud formats says what each one brings, and what to export from a scanner's own software). You can also open the file with {{ui:Open}}, drop it on the page, or send it from the BIM viewer's {{ui:Trace in CadCraft}}.
3. `Lower-left corner of the cloud`: press {{key:Enter}} to keep the file's own coordinates (a scan registered to the project lines up with the drawing), or click where its lower-left corner goes.
4. The command line says how many points show. The view zooms to the cloud; it lies under the linework, every point seen from above.

## Cut a plan slice and trace

1. Type {{cmd:POINTCLOUD}} (or `PC`), then `S` for {{ui:Slice}}. Only a thin band 1.2 m above the cloud's lowest point shows: walls, door openings and columns read like a floor plan.
2. `H` sets the height of the cut, `T` its thickness (in drawing units). {{key:Enter}} ends the command.
3. Turn on object snap ({{key:F3}}) with {{ui:Node}} among the snaps. Draw with {{cmd:LINE}} or {{cmd:PLINE}}: the cursor snaps to the slice's points, labelled "Point cloud". The drawing's own endpoints, midpoints and centers win over the cloud, so closing a polyline lands on its first point.
4. Change the cut height to trace another level, then turn the slice off (`S` again) to see the whole cloud.

## More options

In {{cmd:POINTCLOUD}}: `C` colors the points by the file's colors, height, intensity, LiDAR class or one color; `SI` sets the point size; `V` hides or shows the cloud; `Z` zooms to it; `D` detaches it.

The 3D tab shows the cloud too, its lowest point on the ground, with the same slice.

:::note
The cloud is not part of the drawing: it is not saved in the DWG or DXF, undo does not change it. Attach it again when you open the drawing later. Files are read on this computer; nothing is uploaded. Very large scans are thinned evenly to 2 million points. E57 files open up to 6 million points and 512 MB for now: export larger scans as LAS or LAZ.
:::

## Plot it

{{cmd:PLOT}} prints the cloud with the drawing, under the linework: in a model plot ({{ui:Everything}} includes the cloud's area) and in every layout viewport, in the PDF, the PNG, the SVG and what you send to a printer. It prints what is on screen: the slice if the slice is on, the colors you chose, and hidden when you hid it. On paper the points become small squares, the highest point winning each one, and a plot keeps at most about 400,000 of them (a very dense cloud prints with larger squares). The cloud is plotted only in the drawing it was attached to; it never prints in paper space itself, only through a viewport.

## Several scans

Scans taken from different positions can be registered into one frame, refined with ICP and exported as one LAS or E57: see [Register several scans into one](topic:register-scans).
