---
title: Type and show bearings and angles in degrees, minutes, seconds
summary: Type a direction as a surveyor's bearing such as N45°23'30"E or as degrees-minutes-seconds anywhere an angle is asked for, and choose how the drawing shows angles with AUNITS.
section: tasks
order: 62
keywords: bearing, bearings, surveyor, quadrant bearing, N45E, degrees minutes seconds, DMS, angle, direction, lot, lots, lay out, traverse, AUNITS, ANGUNITS, angle format, polar, direct distance, DIST
---

Anywhere CadCraft asks for an **angle or a direction**, you can type a **quadrant bearing** or an angle in **degrees, minutes and seconds**, as well as a plain number of degrees.

## Bearings

A bearing names north or south, an angle up to 90°, then east or west:

| You type | Direction |
|---|---|
| `N45°23'30"E` or `N45d23'30"E` | 45°23'30" from north toward east |
| `S10-30-00W` or `S 10 30 W` | 10°30' from south toward west (dashes or spaces between the parts) |
| `N45.5E` | 45.5° from north toward east |
| `N`, `E`, `S`, `W` | due north, east, south, west |

Letters can be any case. In Spanish, `O` also means west (oeste). `d` and `°` mean the same; `'` is minutes and `"` is seconds.

To lay out a lot line 20 m long at N45°23'E, start {{cmd:LINE}} and type the first point, then `@20<N45d23'E`. The same works at {{cmd:ROTATE}}'s angle prompt and every other prompt that asks for an angle, and in the angle box of {{ui:Dynamic input}}.

## Degrees, minutes, seconds

`45°23'30"`, `45d23'30"`, `45d30'` or `45d` is an angle from the X axis, counter-clockwise. The `°` or `d` is needed: `45-23-30` is read as arithmetic (45 − 23 − 30). Minutes and seconds must be under 60. A plain number, with arithmetic (`360/7`), still works.

## How angles are shown

Type {{cmd:AUNITS}} (or choose {{ui:Angle format}} in {{ui:Properties}} › {{ui:Current settings}}) and pick:

- **Decimal degrees** (the default): `44.6083°`.
- **Degrees-minutes-seconds**: `44°36'30"`.
- **Surveyor's bearings**: `N45°23'30"E`.

The precision follows what you type for {{cmd:AUNITS}}: 0 shows degrees, 2 minutes, 4 seconds, and 5 to 8 add decimals of a second. The format shows in {{cmd:DIST}}, on the status bar, in the dynamic input and tracking tips, and in the angle boxes of {{ui:Properties}} (a box you edit takes any of the forms above). It is one undo step and is saved in DWG and DXF files (`$AUNITS`, `$AUPREC`); LISP reads and writes it as `AUNITS` and `AUPREC`.
