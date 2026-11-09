---
title: Check a P&ID
summary: Find untagged items, duplicate tags, open line ends and more, and go to each one.
section: tasks
order: 40
keywords: pidcheck, check, error, warning, untagged, duplicate tag, open end, line number, loop, instrument
---

Type {{cmd:PIDCHECK}} (`PIDC`). The history lists every finding, errors first. Type a finding's number to zoom to it and select what it names; press {{key:Enter}} to end.

| Finding | Level | Means |
|---|---|---|
| No tag | error | equipment, an instrument or a relief device has no tag |
| Duplicate tag | error | two items have one tag (case does not count; off-page connectors may repeat) |
| Open end | error | a line end joins nothing |
| Open port | warning | a valve or in-line item is joined on one side only |
| No line number | warning | a process line has no number |
| No loop number | warning | an instrument tag has letters but no number |
| Number changes | warning | two lines of different numbers meet end to end with nothing between them |
| Instrument alone | warning | an instrument has no line attached |

The checks are a drafting aid: a clean result means the drawing is consistent with itself, not that the plant is right.

A drafting and study aid, not an engineering approval. A person with the right training checks every result before it is used.
