**Reads and writes** DWG and DXF. Symbols are blocks named `EL_IEC_…` or `EL_ANSI_…` with attributes (`TAG`, `FUNC`, `LOC`, `DESC`, `MFR`, `PART`, `ORDER`, one per connection, `XREF` on contacts and `XREF1`…`XREF8` on coils, `ADDR` on PLC points). Wires are on layers starting with `EL-WIRE`, routes on layers starting with `EL-ROUTE`, sheets are layouts with a frame block.

**Round trip.** Other programs see blocks with attributes. CadCraft without the add-on shows and saves them unchanged.

**Exports.** The four lists and the panel schedule as CSV; a CSV cell that starts with `=`, `+`, `-` or `@` gets a leading apostrophe so a spreadsheet never runs it as a formula.
