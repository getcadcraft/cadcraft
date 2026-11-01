---
title: P&ID: connect to a device and the tag map
summary: List the plant devices, type the tag map, try it with a CSV of readings, and see the values beside the tags on the drawing. Read only.
section: tasks
order: 49
keywords: live, device, modbus, mqtt, bacnet, opc ua, tag map, readings, csv, studio, historian
---

Read only: nothing here writes to a device, raises an alarm or acts as a safety function.

Open **Connect to a device** in the add-on panel.

1. **Devices.** Add each device: a name, the protocol (Modbus TCP, MQTT, BACnet/IP or OPC UA), the host and port. A device on a public address needs your tick on **I approve this host**; one on a private network does not.
2. **Tag map.** One row per tag: id, device, address, label, unit, scale, offset, low and high limits, type and the tag of the drawing it belongs to. Press **Check the map**; the notes (a missing device, an address that is wrong for the protocol, limits the wrong way round) go to Problems.
3. **Try it with readings.** Paste a CSV with `tag,time,value,quality` and press **Show these readings**. The values are drawn beside the matching symbols. This works in any browser.
4. **Read the devices** needs CadCraft Studio, because a browser page cannot open a network connection to a plant. Without it the panel says so.

The map is kept with the add-on's storage on this computer; it never holds a password.
