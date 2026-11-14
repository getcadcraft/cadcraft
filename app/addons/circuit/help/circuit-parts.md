---
title: Circuit simulation: parts and values
summary: The parts in the Circuit simulation palette, what each value means, and how to type a value.
section: reference
order: 10
keywords: parts, values, resistor, capacitor, inductor, diode, LED, transistor, MOSFET, op-amp, switch, source, units
---

## Typing a value

You type every value. Use a number with an optional suffix: **k** thousand, **meg** million, **m** milli, **u** micro, **n** nano, **p** pico, **f** femto, **g** giga, **t** tera. Write 4.7k, 100n, 1meg, 2.2u, 1e-14. A capital M also means milli, as in SPICE; write meg for a million. Letters after the suffix (a unit such as F or ohm) are ignored. A value that is not a number is marked red and is a problem in Problems.

## The parts

- **Resistor, capacitor, inductor.** The value is in ohms, farads, henries. A capacitor and an inductor can have a start value (volts, amps) that is used if you type one.
- **Switch.** Closed it is a resistor with the on resistance (1 mΩ by default); open, the off resistance (1 GΩ). It is not a model of a real contact.
- **DC source.** Volts. Its AC size, if not zero, is the amplitude it adds in the AC sweep.
- **AC source.** A sine with offset, amplitude and frequency. In the AC sweep it is a source of that amplitude.
- **Pulse source.** Low and high level, delay, rise and fall time, width and period.
- **Current source.** Amps, flowing through the source from the + pin to the − pin.
- **Diode and LED.** The diode equation with a saturation current and an emission factor. The defaults are textbook figures (1e-14 A and 1 for a diode; 1e-18 A and 2 for an LED, which drops about 1.9 V at 10 mA). They are not any particular part.
- **NPN and PNP transistor.** Ebers–Moll transport model with a saturation current and forward and reverse gain.
- **N and P MOSFET.** The first-order square-law model: transconductance (the width-to-length ratio is already in it), threshold voltage and a channel-length factor.
- **Op-amp.** A voltage amplifier with a finite open-loop gain (100000 by default), no input current and no supply rails: it does not saturate. Use the gain to see what a real amplifier's finite gain does to your circuit.
- **Ground, junction.** Wiring only.
- **Meter, scope, plotter.** Instruments; see Analyses.

None of the values comes from a maker's data sheet or model. If you want a particular part, type its figures.
