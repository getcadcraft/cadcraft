---
title: MEP drafting: getting started
summary: Draw pipes and ducts on service layers, drop valves and equipment symbols that cut into the line, tag them, and count them, all as ordinary geometry and blocks.
section: start
order: 1
keywords: mep, hvac, plumbing, heating, pipe, duct, valve, symbol, radiator, air handling unit, diffuser, damper, service, layer, tag, legend, schedule, count, single line, double line
---

## What it is

MEP drafting is an add-on for CadCraft that comes with it and is free. It is for 2D building-services drawings: heating, chilled water, domestic water, drainage, gas, fire and ventilation. You draw runs on service layers, put valves and accessories on them, place equipment, tag everything and count it.

Everything it draws is ordinary: runs are lines, arcs and polylines on the service's layer, symbols and equipment are blocks with attributes. You can move, copy, trim and stretch them with the usual tools, and a DXF or DWG file carries them as plain geometry and blocks on the right layers. Someone who opens the file without the add-on sees and edits the same drawing.

## Switch it on

It is off until you add it: {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} › {{ui:MEP drafting}}. Its commands then work at the command line, and its panel section lists every command, symbol and equipment as a button. A toolbar group can be switched on in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:MEP drafting}}.

## Set the scale first

Type {{cmd:MEPSCALE}} and give the scale the drawing will be printed at, for example `50` for 1:50. Symbols on single-line runs and all tag text are sized for that scale: a symbol is 6 mm long and text 2.5 mm high on paper (both can be changed in Settings).

## Services

A service is a layer with a colour, a linetype and a short tag. {{cmd:MEPSERVICE}} then `?` lists them: heating flow and return (HF, HR), chilled water flow and return (CHF, CHR), domestic cold, hot and circulation (DCW, DHW, DHC), waste and soil (W, S), gas (G), fire (F), refrigerant (REF), condensate (CD), supply, return and extract air (SA, RA, EA). Type a tag to draw in that service. `A` adds your own service: its tag, name, layer, colour number and linetype. The layer is made the first time you draw in the service.

The layer names, colours and linetypes are a starting set, not a layer standard. Rename the layers or add services to match your office.

## A small heating plan, step by step

1. {{cmd:MEPSCALE}}, `50`.
2. {{cmd:MEPEQUIP}}, `radiator`, then {{ui:Size}} and `1400`, and click where the radiator goes. It gets the tag RAD-01.
3. {{cmd:MEPPIPE}}: {{ui:Service}} `HF`, {{ui:Size}} `DN20`, then click the points of the flow run. Start or end near a radiator's connection stub and the run snaps onto it. Ortho and polar tracking work as in any drawing command.
4. {{cmd:MEPPIPE}} again with {{ui:Service}} `HR` for the return: it comes out dashed on its own layer.
5. {{cmd:MEPSYM}}, `ball`, and click on the flow run: the line is broken and the valve sits in the gap, turned to the line, tagged V-01.
6. {{cmd:MEPSIZETAG}} and click a run to write its size and service along it, for example `DN20 HF`. {{cmd:MEPFLOW}} puts a flow arrow on a run.
7. {{cmd:MEPSCHED}} places the count as a table; {{cmd:MEPLEGEND}} places a legend of what the drawing uses.

## Where to go next

- [Runs: pipes and ducts](topic:mepdraft-runs)
- [Symbols, equipment and tags](topic:mepdraft-symbols)
- [Legend, schedule and what is not built yet](topic:mepdraft-lists)
