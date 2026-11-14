---
title: P&ID: CAPE-OPEN (Windows simulators)
summary: Share the process model's thermodynamics and unit operations with Windows process simulators that take CAPE-OPEN components, and use a CAPE-OPEN unit from another program in the model. Windows only, and not tested with a simulator yet.
section: tasks
order: 46
keywords: cape-open, capeopen, co-lan, simulator, property package, thermo, unit operation, com, windows, plug-in, interoperability
---

A study aid, not an engineering approval. No representation.

## What works today and what does not

CAPE-OPEN is an open standard for plugging thermodynamics ("property packages") and unit operations into process simulators. The standard is free from CO-LaN. Simulators load CAPE-OPEN components as Windows COM objects.

- **Works now, everywhere:** the CAPE-OPEN package file (below), and adding a CAPE-OPEN unit from another program to the process model.
- **Not available yet:** the Windows part that a simulator loads, and the bridge that runs another program's unit for you. Their source code is written but nobody has built or tested it, on Windows or in any simulator. Until a Studio release says otherwise, a simulator will not find CadCraft, and a CAPE-OPEN unit in your model is skipped when the model runs. The Problems panel shows a warning for it.
- **Never in the browser, on macOS, Linux or tablets:** CAPE-OPEN components are Windows programs.

## Export the CAPE-OPEN package

**EXPORT** › **CAPE-OPEN package (for Windows simulators)** saves a `.json` file with the process model's property package: the compounds with their CAS numbers, the model (Peng–Robinson, SRK, ideal, NRTL, Wilson or UNIQUAC) and its parameters. It also lists the unit operations CadCraft offers: heater or cooler, valve, pump, compressor or expander, flash drum, mixer, splitter and two-stream heat exchanger.

When the Windows part ships, you will put the file in `%APPDATA%\CadCraft\CAPE-OPEN\`. A simulator will then list the package as "CadCraft — <model name>". The units will use the simulator's own thermodynamics, the way CAPE-OPEN units normally do. Registration is per Windows user, so no administrator rights are needed.

To see what the file will offer, type **PIDCAPEOPEN** (or press **CAPE-OPEN** in the P&ID panel) and choose **What the package offers**.

## Use a CAPE-OPEN unit from another program

**PIDCAPEOPEN** › **Use a CAPE-OPEN unit** adds the unit to the process model. It asks for:

1. a name for the unit in the model;
2. the unit's ProgID (like `Vendor.Unit.1`) or its class id in braces, from the other program's documentation;
3. the streams going in, and names for the new streams coming out;
4. the unit's port names, in the same order as the streams;
5. any parameters to set, like `Pressure=300000; Efficiency=0.7`, in SI units.

The unit is saved with the drawing. **Run the model with those units** and **List the units Studio finds** need CadCraft Studio on Windows with the CAPE-OPEN bridge, which is not available yet. Without the bridge, both say so and change nothing.

When it runs, the other program's unit uses CadCraft's thermodynamics for its streams. Its heat duty comes from the energy balance on CadCraft's package, because units don't report their own in a standard way.

## Units and values

Everything crosses in SI units, as CAPE-OPEN asks: K, Pa, mol/s, J/mol or J/kg, m³/mol. Molecular weight is the relative molar mass in g/mol. The numbers are the same as in the rest of CadCraft: the CAPE-OPEN layer calls the same engine.
