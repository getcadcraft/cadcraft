---
title: Dynamic blocks
summary: What CadCraft does with dynamic blocks in a DWG: they keep their true names, show the state they were saved in, switch visibility states, show their other values, and stay dynamic when saved.
section: reference
order: 62
keywords: dynamic block, dynamic blocks, visibility, visibility state, flip, stretch, lookup, parameters, custom, block properties, *u blocks, dynamic
---

## What works

A DWG made with dynamic blocks opens with them working this far:

- **Their true names.** A dynamic block is listed in the {{ui:Blocks}} panel under its own name ("Receptacle", "Sink"), not as an unnamed `*U` block.
- **The state they were saved in.** Each reference shows exactly what the other program showed: the visibility state it was set to, stretched or flipped as it was saved.
- **Switching the visibility state.** Select one reference (or several of the same block), open {{ui:Properties}}, and in the {{ui:Custom}} section choose another state from the {{ui:Visibility}} list. The reference shows that state at once, its attributes too: those the state hides disappear, those it shows appear with their values. A reference keeps every value, so nothing comes back empty; {{ui:Properties}} lists the hidden ones marked "hidden". {{key:Mod+Z}} puts the old state back in one step.
- **Grips.** A selected dynamic block shows its own grips where its parameters are: a small triangle for the visibility state (click it for the list of states), arrows at the ends of a distance, a double arrow for a flip. Only the visibility grip acts today; the others say so in the status bar.
- **The other values, read only.** Under the visibility list, {{ui:Custom}} also shows the block's distances, alignment angles, flip states and points as the drawing holds them.
- **Editing visibility states.** Open the block with {{cmd:BEDIT}}: the editor shows one state, named in the bar above the drawing (pick another there). Type {{cmd:BVSTATE}} to switch, add (hiding everything, showing everything or keeping what shows), rename or delete a state; {{cmd:BVHIDE}} hides selected objects in the state showing; {{cmd:BVSHOW}} shows the hidden ones faded so you can click the ones to bring back. Save the block: references set to a renamed state keep it under its new name, and those set to a deleted state show the first state.
- **Kept dynamic.** Saved as DWG in the version the drawing came in, the blocks stay dynamic, with the state you chose: the other program opens them as the same dynamic blocks. Visibility states you edited are saved too: their new names, the states you added and what each one shows.

## What is read only, or not there yet

| Not there yet | Instead, today |
|---|---|
| Changing distances, angles or flips (stretch, move, flip actions) | They show read only in {{ui:Custom}}; edit in the program that made the block. |
| Lookup, XY, rotation and polar parameters | Not read yet: the reference shows as saved. |
| Dragging the distance, flip and point grips | They show where the parameters are; the visibility grip and the {{ui:Visibility}} list in Properties switch states. |
| Making dynamic blocks of the other program's kind (stretch, flip, lookup) | Blocks you make in CadCraft are plain blocks; {{cmd:BPARAMETER}} says so. Your own parameters and several visibility parameters are in the Parameters manager (see "Your own parameters and visibility states" below). |
| Adding or erasing objects of a block with visibility states in the block editor | The block is then saved as a plain block (the editor says so when it closes). |
| Keeping them dynamic in another DWG version or in DXF | They are saved as plain blocks showing the state you chose, and the save says so. |

:::note
Moving or changing objects in {{cmd:BEDIT}} keeps a block with visibility states dynamic. A block without states, or one whose objects were added or erased in the editor, becomes a plain block.
:::

## Your own parameters and visibility states

A block you make in CadCraft can carry its own parameters and **several** visibility parameters, each with its own states. Type {{cmd:BPARAMS}} (or `BPM`) to open the **Parameters manager** for the block you are editing in {{cmd:BEDIT}}, for the selected reference's block, or for the block you name.

- **Parameters**: a name, a type (number, length, angle, count, yes/no), and a value or a formula over other parameters (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Comes to}} shows the result. A formula that does not work, or a value that does not fit its type (a count of 1.5), is refused and the manager says why; nothing else changes.
- **Visibility parameters**: {{ui:Add visibility parameter}} makes one with a first state. Each state can be renamed, removed (the last one stays) or given a "shows when" number. A formula picks the state from the parameters (the state whose number matches, else the state at that place in the list); with no formula, each reference chooses its own.
- **Putting objects in a state**: in the block editor select the objects, type {{cmd:BPARAMS}} and click {{ui:Put the selected objects here}} on the state. Objects that no visibility parameter lists always show.
- **This reference**: started on a selected reference, the manager also shows that reference's own values and states.

Outside the block editor every change is one undo step. In the block editor the changes are the editor's: {{ui:Save block}} keeps them. `-BPARAMS` asks the same on the command line.

**In the file.** DWG and DXF keep the parameters, which objects are in which state, and each reference's own values, in CadCraft's own records; open the file again in CadCraft and everything is back. Another program sees each reference as the block with all its objects, since a DWG holds at most one visibility parameter per block of its own kind. A reference that another program moved, or a block whose objects it changed, comes back without the parts that no longer line up (nothing is guessed).

