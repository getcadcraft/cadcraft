---
title: Lighting plots: the checks
summary: What the Lighting plots add-on warns about in Problems, and how to fix each.
section: reference
order: 20
keywords: problems, checks, duplicate unit, DMX overlap, dimmer overload, universe, address, footprint
---

## What is checked

The checks appear in the Problems panel and update when you change a fixture or a position.

- **A unit number used twice on a position.** Fix: {{cmd:LNUM}} numbers them again.
- **Fixtures on no position.** A fixture is on a position when it lies within the distance set for the add-on of the position's line. Fix: put them on the nearest position, or move them.
- **Fixtures with no channel.** A note, not a warning: a plot in progress has them.
- **Two fixtures using the same DMX addresses.** A moving head or LED fixture takes several addresses (24 for a moving head, 8 for an LED wash, unless you change it). Write an address as `45` (universe 1) or `2/045`. Two fixtures of the same type on the same address are allowed: they are meant to follow each other.
- **A dimmer carrying more than its limit.** Fixtures with one address and one channel share a dimmer when they share an address; the limit is a setting (2400 W by default).

The wattage of a fixture is its type's usual figure until you set one: the numbers in the add-on are typical, not a maker's; use the real ones from the fixtures you hire.
