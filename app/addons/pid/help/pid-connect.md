---
title: P&ID: connect to a device and the tag map
summary: List the plant devices, fill the tag map from the drawing, try it with a CSV of readings, see the values beside the tags and follow each tag on a trend. Read only.
section: tasks
order: 49
keywords: live, device, modbus, mqtt, bacnet, opc ua, tag map, readings, csv, studio, historian, trend, history, fill from drawing, keep reading
---

Read only: nothing here writes to a device, raises an alarm or acts as a safety function.

Open **Connect to a device** in the add-on panel.

1. **Devices.** Add each device: a name, the protocol (Modbus TCP, MQTT, BACnet/IP or OPC UA), the host and port. A device on a public address needs your tick on **I approve this host**; one on a private network does not.
2. **Tag map.** One row per tag: id, device, address, label, unit, scale, offset, low and high limits, type and the tag of the drawing it belongs to. Press **Fill the map from the drawing** to add a row for every tagged symbol the map does not have yet; then give each new row its device and its address (for OPC UA a node id such as `ns=2;s=Tank1.Level`). A row with no address yet is a note and is not read. Press **Check the map**; the notes (a missing device, an address that is wrong for the protocol, limits the wrong way round) go to Problems.
3. **Try it with readings.** Paste a CSV with `tag,time,value,quality` and press **Show these readings**. The values are drawn beside the matching symbols. This works in any browser. A historian export with many times per tag, in any order, goes onto the trend.
4. **Read the devices** needs CadCraft Studio, because a browser page cannot open a network connection to a plant. Without it the panel says so. In Studio, tick **Keep reading every** and give the seconds (2 at the least) to read again and again; untick it to stop. It also stops when you turn the add-on off.
5. **Load history (OPC UA).** In Studio, give the hours to look back and press **Load history**: the server's own stored values for each OPC UA tag go onto the trend before the current value.
6. **Trend.** Every read adds to the trend, so it grows while the panel is open. Pick a tag to see its line over time, with its high and low limits as dashed lines. A break in the line is a bad-quality value or a long time with no value. **Save the trend (CSV)** writes `tag,time,value` for that tag.

The map is kept with the add-on's storage on this computer; it never holds a password.

A drafting and study aid, not an engineering approval. A person with the right training checks every result before it is used.
