---
title: Windows and doors: profile systems
summary: What a profile system holds, the generic example systems that come with the add-on, and how to add your own.
section: reference
order: 3
keywords: profile system, profiles, pvc, aluminium, aluminum, thermal break, weld, steel, glazing bead, rebate, overlap, own system, json
---

## The generic examples

The add-on brings three systems: Generic PVC 70 mm, Generic PVC 60 mm and Generic aluminium 50 mm with thermal break. **They are examples with round, plausible numbers, not any maker's profile data.** Before you cut anything, put in your own system with your maker's real numbers.

## What a system holds

- Profiles: **frame, sash, mullion, bead** (and a **threshold** for doors), each with a code, a face width and a depth. Frame and sash also have a **seat**: how far the glass sits in the rebate beyond the sight line.
- **Sash overlap** and **sash gap**: a sash is its pane plus 2 × (overlap − gap).
- **Glass gap**: the glass is the sash's sight line plus 2 × (seat − gap).
- **Bead less**: a bead's long edge is the glass edge less this much.
- **Weld**: what a welded PVC corner melts in all (0 for aluminium).
- **Bar**: stock length, saw cut, and the trim taken off both ends.
- **Steel**: code, the set-back at each end, and the length over which a profile takes steel.
- **Hardware**: one locking point per this much sash perimeter; the sash height over which a turn sash takes a third hinge; packers per pane.
- **Colours**.

## Add your own

In {{ui:Settings}} › {{ui:Windows and doors}}, paste a JSON list into {{ui:Your own profile systems}}. A minimum system:

```json
[{ "id": "my-62", "name": "Shop PVC 62",
   "profiles": { "frame": { "code": "F62", "w": 62, "depth": 62, "seat": 13 },
                 "sash": { "code": "S70", "w": 70, "depth": 70, "seat": 14 },
                 "bead": { "code": "B20", "w": 20, "depth": 20 } } }]
```

Anything left out takes the example system's value. A window made with your system keeps a copy of it, so the file opens on a computer that does not have it. Use a maker's real numbers only with the maker's permission.
