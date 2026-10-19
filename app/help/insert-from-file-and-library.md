---
title: Insert from a file or the library
summary: Bring a block, or a whole drawing, in from another DWG or DXF, and place items from LibraryCraft, a file or another library, with their credits and updates.
section: tasks
order: 120
keywords: insert, file, library, librarycraft, item, equipment, block from another drawing, wblock, design center, credits, attribution, license, update, feed, item.json
---

## Insert a block from another drawing

1. Type `I` and press {{key:Enter}}, or click {{ui:Insert}} in the Blocks group.
2. At `Enter block name or [File/Library]`, type `F` and press {{key:Enter}}.
3. Choose the DWG or DXF on this computer. It is read here; it is not opened, and nothing is uploaded.
4. In the {{ui:Insert from}} dialog, pick a block from the list (type in {{ui:Filter blocks}} to find it), or keep {{ui:The whole drawing}}. Click {{ui:Insert}}.
5. Click where it goes, and fill in any attributes it asks for.

The whole drawing comes in as one block named after the file. Blocks inside the block you picked come too. The layers they use are added to this drawing.

If the other drawing is in different units (inches and millimeters, say), CadCraft scales the reference to match and says so in the history.

### When a name is already used

If this drawing already has a block with the same name, CadCraft asks:

- {{ui:Keep existing}} uses this drawing's block of that name.
- {{ui:Rename}} brings the new one in as `Name (2)`.

The whole insert is one step: {{key:Mod+Z}} takes the reference and the copied definitions away again.

## Open the library

Click {{ui:Library…}} in the {{ui:Blocks}} panel, or {{ui:Library}} in the Blocks group, or type `LIB`. At the `INSERT` prompt, `L` opens it too.

The library has four sources, as tabs:

- {{ui:LibraryCraft}}: the CadCraft library. Search by name, maker or model, and filter by category.
- {{ui:Files…}}: an item file (`item.json`) from any library, or a drawing, spreadsheet or 3D model to make items from: a DWG or DXF (each block becomes an item), a CSV with name and size columns, or a glTF or OBJ model. Nothing is uploaded.
- {{ui:Standard}}: steel sections (as sections, elevations or 3D members) and standard parts such as bolts, nuts and bearings, made here from published tables. See [Place steel sections and standard parts](topic:steel-and-standard-parts).
- {{ui:Other feeds}}: other libraries that answer the same way LibraryCraft does. Add their address once; this browser remembers it.

Each card shows a preview, the name, the maker and model, the license and the version. A withdrawn item is marked {{ui:Withdrawn}} with the reason; CadCraft asks before you place one.

## Place an item

1. Click {{ui:Place}} on a card.
2. Click where the item goes. Type `R` first to turn it, or `S` to scale it.
3. At `Enter Item number (CC-ITEM)`, press {{key:Enter}} for the next free number, or type your own.

The item becomes a block named `LIB_<name>_v<version>`, drawn in this drawing's units. If the drawing has no units, the item goes in at millimeters and the history says so; set {{ui:Units}} in the right panel first.

Its data rides along as invisible attributes: the item's id and version, license and attribution, maker, model, category and sizes. See [Block attributes](topic:attributes).

## Items in your language

An item can carry its name and description in other languages. When it has them in the language CadCraft is set to (Settings › General › Language), the card and the placed block's item name use them. The block itself keeps a name made from the item's own name, so a drawing has one block per item whichever language placed it.

## Check for updates

1. Open the library.
2. Click {{ui:Check for updates}}.

Each library item in the drawing is listed with its item numbers and whether it is up to date, has a newer version (and what changed), or was withdrawn. Click {{ui:Update}} on a row, or {{ui:Update all}}. Every reference moves to the new version's block and keeps its item number, quantity, place, angle and layer. {{key:Mod+Z}} undoes an update.

## Credit what you used

Click {{ui:Library credits}}. Each item is listed with its attribution line and license.

- {{ui:Copy attribution}} copies one item's line; {{ui:Copy all}} copies every line.
- {{ui:Download CSV}} saves the list with the item numbers, makers, models, licenses and attributions. It opens in any spreadsheet.

Licenses such as CC BY ask you to credit the author where you use the work. Put the lines on the drawing, in the specification or in the project notes.

## Sign in to the library

Click {{ui:Sign in to the library}}. A small window opens on the site; once you are signed in there, CadCraft can show your team's items and register what you place, so you hear when an item you used changes. The sign-in lasts for this browser tab. Revoke it any time from your account's security page.

## Common mistakes

- **"Making items from IFC types is in BimCraft."** IFC and family files are read in the BimCraft app. Make the item there or on LibraryCraft, then use its `item.json` here.
- **"The library could not be reached."** You are offline, or the library is down. Items already in the drawing are not affected.
- **An item is far too big or too small.** The drawing's units are wrong or not set. Undo, set {{ui:Units}}, and place it again.
