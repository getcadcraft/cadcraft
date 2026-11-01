---
title: Piping: flow and pressure in a water supply
summary: PIPENET follows the drawn supply pipes from the source, adds up the fixture units you name at each free end, and finds the flow, velocity and pressure lost to each fixture.
section: reference
order: 25
keywords: supply, water, fixture units, demand, flow, velocity, pressure loss, hazen-williams, PIPENET, PNET, static head, hot, cold
---

Type {{cmd:PIPENET}} (`PNET`) and click the end of a run where the supply comes in.

For each free end it asks what is there: a fixture kind (`wc`, `lav`, `sink`, `shower`, `laundry`, `bath`, `dishwasher`) or a number of fixture units (0 for nothing). The answers are remembered for that place; {{ui:Reset}} forgets them. {{ui:Pressure}} takes the supply pressure at the source and the pressure a fixture needs, in kPa.

It prints, for every fixture, the fixture units it carries, the pressure lost from the source (friction by Hazen–Williams, fittings, and the climb or fall of the pipe: a pipe that falls along the way it is drawn gains pressure when fed from its low end) and what is left of the supply pressure. Runs that are too small for their flow (fast) are listed.

**Demand** uses a default curve from fixture units to flow that is a labelled example. Type the curve of the code in force in the engine's settings before you rely on the flows. Fitting losses are rounded defaults. Loops are ignored. Check results with your engineer. {{ui:Export}} › Supply network writes every run to CSV.
