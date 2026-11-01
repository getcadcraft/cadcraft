---
title: Electrical: a PV one-line from BimCraft
summary: Insert the one-line diagram BimCraft makes from its Solar PV pane (array, combiner, disconnects, inverter, board, utility) on a new sheet, with each wire's current, size and fuse.
section: reference
order: 41
keywords: pv, solar, one-line, single line, inverter, array, combiner, disconnect, ELPVONELINE, ELPV, photovoltaic
---

In BimCraft, the Solar PV pane's {{ui:Save data}} writes a file of the one-line. Here, type {{cmd:ELPVONELINE}} (`ELPV`) and pick it.

A new A3 sheet gets the parts left to right (a PV array, a combiner when there are three or more strings, a disconnect, the inverter, another disconnect, the board and the utility), with a wire for each link labelled with its current, wire size and fuse or breaker. The symbols are in the new {{ui:Power and solar}} group of {{cmd:ELSYMBOL}} too. Run {{cmd:ELTAG}} to number the parts.

The sheet carries a line saying the factors and wire tables are examples set in BimCraft by the person who made the plan. It is not a compliance statement.
