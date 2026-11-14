---
title: Process calculators
summary: Run the process engine's calculators from the P&ID add-on: thermo, flowsheets, equipment, safety, hazardous areas, chemical stock lists, air and water, emissions, pinch, cost, structures, molecular dynamics, lab and plant data.
section: tasks
order: 45
keywords: pidcalc, calculator, flash, flowsheet, distillation, reactor, dynamic, batch, fermentation, heat exchanger, pressure vessel, network, water hammer, pipe stress, relief valve, mixing, hazop, lopa, sil, consequence, column, absorber, mechanism, bell-delaware, external pressure, pump trip, depressuring, blast, heavy gas, data pack, activated sludge, lims
---

A calculation aid, not an engineering approval. Constants were typed without the standards open; the engines mark them for review, and an engineer has to compare them before any number is used for design. No representation.

Open the **Calculators** section of the add-on panel, or type {{cmd:PIDCALC}} (`PCALC`) and a calculator's name.

1. Pick a calculator. Each one shows a sample input in plain JSON: change the numbers, the components or the list of items.
2. Press **Run**. The results appear as a table; a drawing (tube sheet, batch chart) or a text sheet appears under it when the calculator makes one.
3. Anything the engine wants you to know (a velocity over the limit, an exchanger that is too small, a scenario above its target, a typed value not confirmed) is listed under the results and sent to the Problems panel.
4. **Results (CSV)** saves the table. **Reset input** brings back the sample.

| Calculator | What it does |
|---|---|
| flash, vlle, purefluid | Pressure-temperature flash, bubble and dew points for a mixture; the three-phase flash (vapour and two liquids, activity models); pure-fluid properties from CoolProp, loaded the first time you ask |
| flowsheet, column, reactor | Steady-state units with recycles, shortcut column, conversion reactor |
| dynamics, tune | Tanks, valves and controllers over time with a trend chart; controller tuning from a step test |
| batch, batchbal, ferment | A batch recipe schedule with equipment occupancy; a batch mass balance; Monod fermentation |
| engine | Solve with our engine or a permissively licensed add-on; GPL programs are refused |
| exchanger, vessel | Shell-and-tube rating and tube sheet; ASME VIII shell, head, nozzle and data sheet |
| network, hammer, pipestress, relief | Pipe network with pumps; water hammer; pipe stress with bend flexibility, tee factors, lifting rests and friction; relief sizing for gas, steam, liquid and fire, with a rupture disc, the outlet line and the thrust |
| mixing | Mixing time on the finite-volume flow solver, or on the lattice Boltzmann method (a stirred tank with an impeller stand-in, or the residence time distribution of a channel); laminar and two-dimensional, no turbulence model |
| hazop, lopa, consequence | HAZOP worksheet, LOPA (also from a HAZOP row) and SIF verification, release and fire or blast zones |
| area | Hazardous area classification: release sources to Zone 0, 1 or 2 with an extent from the dilution volume; the pack is a simplified screening rule, not the standard's table |
| inventory | What is stored where, the 16 safety data sheet sections, a starter list of dangerous pairs in one room, and threshold checks against a pack (the bundled one is made up) |
| air | Stack screening: plume rise, the worst case concentration and where it lands, from a Gaussian plume; a screening aid, not a permit model |
| water | Activated sludge plant (the published ASM1 model, steady state, COD and nitrogen balance), screens, clarifier and disinfection |
| emissions | Carbon dioxide equivalent of vented and burned streams and fired duty, with the factor sources named; no electricity factor is assumed |
| pinch | Problem table, composite curves, energy targets, the minimum number of units and the temperature difference trade-off |
| cost | Equipment cost correlations, installation factors and operating cost; the cost index comes from a data pack or a pasted year and value list, the energy price is yours, nothing is assumed; the equipment list can leave as a TakeoffCraft pack |
| structure, md | A structure from SMILES or drawn with the mouse, with a drawing, formula and group-contribution estimates (and RDKit descriptors when you tick it); a small molecular dynamics run |
| column2, mechanism | A faster inside-out column solver and an absorber or stripper (sum-rates); a reaction mechanism file in YAML run in a closed vessel (reactions the loader cannot read are listed, never guessed) |
| bell, vessel2 | Bell-Delaware geometry and, with your own coefficient pack, the shell-side rating; external pressure and stiffening ring from the chart pairs you type, the vessel body outline and a shell nozzle |
| fittingk | Fitting losses: K and head loss of a fitting or valve from the 2-K (Hooper) and 3-K (Darby) tables, picked from a list. The bundled table is a draft |
| compressor, npsh | Compressor head, shaft work, power and outlet temperature for an ideal gas (polytropic or isentropic efficiency, optional surge-line margin); pump head from its curve and the NPSH margin against the maker's required points |
| pumptrip, pipestress2, relief2 | Pump trip with check valve and run-down; pressure thrust, spring hanger choice from a maker's table and stop gaps; depressuring, control-valve failure and the load of each relief header |
| blast, heavygas, packs | Multi-energy blast from your own curve pack; a heavy-gas box model with your own constants; thresholds, reactive pairs and area classification built from a table (every row needs its clause) |
| pme | A check of the long-range electrostatics method: smooth particle-mesh Ewald against the plain sum on random charges, and rigid bonds held by SHAKE |
| wdesign, lims2 | Activated sludge tank, return ratio and clarifier by the design equations; the settings check for your own lab system (the secret's name is all that is kept) |
| lims, historian | A lab result from your own system or a CSV becomes a proposed stream you accept; plant tags read from a CSV become values with their limits (OPC UA needs CadCraft Studio) |

**Hazard zones on the sheet.** After the area calculator, type {{cmd:PIDZONE}} and choose plan or section: circles and chords are drawn on the layers AREA-ZONE0, AREA-ZONE1 and AREA-ZONE2, in one undo step. Take the extent from the standard before relying on it.

**HAZOP copilot.** When you connect your own assistant, its tools can read the nodes proposed from this P&ID and suggest HAZOP rows. Rows are saved with the drawing as suggestions only. Type {{cmd:PIDHAZOP}} (or the Review HAZOP button): it lists them and a named person accepts or rejects each one. The assistant has no tool to do that.

Not built yet: a form for each input (the box takes JSON), saving a calculation with the drawing, release sources read from the P&ID, plumes on the site plan, and a heat-exchanger network grid.

**Not engineer-reviewed.** The vessel, pipe stress, relief, consequence and area calculators say so on every result and in the Problems; one engineer will review the five together before any number is used for design.

**Site plan and 3D.** After the consequence calculator the **Site plan (GeoJSON)** and **Site plan (DXF)** buttons save the zones in metres for CivilCraft's Import; {{cmd:PIDCONSEQ}} draws them on the sheet (layers CONSEQ-1, CONSEQ-2 and so on). In BimCraft's Plant panel the same zones become solids in the model.

**Sources from the drawing.** With the area calculator, **Sources from the drawing** reads pumps, vessels, valves and other symbols of the drawing as release sources, grade by what each is (seals and stems secondary, vents primary); {{cmd:PIDSOURCES}} does the same from the command line and asks which substance each service holds. The assumptions are listed in the Problems.

**Flare header from the relief loads.** In the relief extras calculator (`relief2`), give `header.flare` a gas network whose valve nodes carry the same names as the devices in your scenarios. The loads of the governing case of that header become the demands of the network, and the calculator reports the back pressure at each valve as a share of its set pressure. A valve over its limit is listed in Problems. The network and the set pressures are yours; nothing is assumed.

**Charges and rigid bonds in the molecular run.** The molecular dynamics calculator (`md`) takes `q` (charge of plus and minus q on alternate atoms), `pme` (`{ grid, order }`) to use the smooth particle-mesh Ewald sum instead of the plain one, and `constraints` (`[[i, j, d]]`) to hold bonds rigid. The run says which long-range sum it used.

**Test the connection to your own lab system.** In the lab-system calculator (`lims2`) set `"test": true`. Inside CadCraft Studio the connection is walked step by step (settings, reach the system, list samples, read one, read its results) and the failing step is named; Studio adds your secret and pins the address. In a browser tab nothing is sent and the calculator says it needs Studio.

**Fitting losses (draft table).** The `fittingk` calculator lists 32 fittings of the 2-K method and 34 of the 3-K method in the list above its input; pick one, give the Reynolds number and the pipe size in inches (the actual inside diameter for 2-K, the nominal size for 3-K) and, if you like, the velocity, and it returns K and the head loss. **The table is a draft.** Its numbers were taken from the tables of the MIT-licensed `fluids` library for the two methods (Hooper, Chem. Eng. 88(17), 1981; Darby, Chem. Eng. 106(7), 1999) and have not been checked against the papers by an engineer; six entries carry a note where the source's name looks odd. Every result says so. Set `"pack": null` for no table (it then says what is needed) or give your own `cadcraft-fitting-k-pack`. A pipe network takes one K per link: put the K you got on the link. The network solver does not look the K up itself as the flow changes.

**Fittings in a pipe network.** In the pipe network calculator (`network`) a link may carry `fit`: a list of fittings from the fitting table (`"fittingPack": "draft"` is the bundled draft table), each with an optional count. At every step of the solution the K of the list is worked out from that link's own Reynolds number and diameter and added to the K you typed, so a slower flow gets the larger K. The result gives each link's K, the fittings' share and Re. Without a table the lists are ignored, with a warning, and the typed K stands. The draft label above applies. A link of kind `cvalve` is a control valve given by its Kv and opening (liquid lines; a control valve on a gas line is not built, give it as a pipe with K).

**Compressor and pump.** The compressor calculator uses the textbook ideal-gas relations with a constant k and a constant Z that you give, adiabatic and without inter-cooling; it states these in the results. Give the efficiency as polytropic or isentropic and it returns both. A real gas near its critical point, or a machine with inter-coolers, needs an equation of state. The pump calculator reads the head from the pump points you give and subtracts NPSH required (the maker's points) from NPSH available; the margin you need is your project's decision.

**Relief valves.** {{cmd:PIDRELIEF}} sizes the relief valve of a tag with the relief calculator's inputs and writes the orifice letter and the required area on the symbol.

**Drawing a structure.** Pick the structure calculator and a small editor opens: click to place atoms, click two atoms to join them (again for a double or triple bond), the ring buttons place a ring, **Use this structure** puts its SMILES into the input.
