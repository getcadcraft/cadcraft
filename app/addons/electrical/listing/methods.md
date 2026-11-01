**Symbols.** The symbol sets follow the published conventions of IEC 60617 and of ANSI / NFPA 79, redrawn by us; no symbol file from another program or standards body is copied. Connection names are the usual ones (13-14 for a make contact, 21-22 for a break contact, A1-A2 for a coil, U V W for a motor).

**Wires and numbers.** A wire is a line or polyline on a layer starting with `EL-WIRE`. Its ends are matched to symbol connections and to other wires; a potential is the set of wires and connections that meet. Wire numbers come from the path (sheet and column) the wire sits on.

**Circuit current.** From the planning load and the voltage of the board: single phase, watts divided by volts times power factor; three phase, watts divided by root three times volts times power factor. Voltage defaults to 230 V and power factor to 1; both are editable per board and circuit. A circuit over its breaker rating is an error; over 80 % of it, a warning.

**Phase balance.** ELBALANCE puts the single-phase circuits on L1, L2 and L3 heaviest first onto the currently lightest phase. Two- and three-phase circuits stay where they are, and one Undo takes the balancing back. The unbalance shown is the largest difference between phases divided by the mean phase load.

**Cable lengths.** A circuit's cable runs from its board along the shortest drawn route to each device; a run two devices share is counted once. A device joins the routes when it is within half a metre of one. Half a metre is added at each device and one metre at the board.

**Residual-current devices.** The RCD is text on a circuit. The checker reads the trip current in mA and reminds you of a circuit that feeds socket outlets with no device of 30 mA or less. That is a planning reminder; it does not check against any national code.
