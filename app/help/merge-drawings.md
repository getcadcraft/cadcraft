---
title: Merge two people's edits of one drawing
summary: Let git, Fossil or Mercurial merge two copies of a DWG or DXF object by object, using the key CadCraft keeps on every object.
section: tasks
order: 74
keywords: merge, git, fossil, mercurial, version control, diff, conflict, three-way, cadcraft merge, key, gitattributes, DWG, DXF
---

Two people edit the same drawing. If they changed different objects, the merge can be automatic: nothing to redo by hand.

## What makes it work

CadCraft gives every object you draw a short **key** that never changes and is never given to two objects. It is saved with the object in the DWG or DXF (as extra data other programs keep). The merge looks objects up by that key, not by their position in the file, because every program renumbers positions when it saves. Turn this off in {{ui:Settings}} › CadCraft › Merge-friendly files if you never merge; the files get about 10 percent smaller.

A drawing saved before keys existed still merges: its objects get a key from their place in the file, the same for everyone who opens it.

## Set it up

Git needs two lines once per repository:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Without git, run it by hand: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil and Mercurial take the same three files in their own merge-tool setting.

## The rules

- An object changed on one side only is taken. The same change on both sides is taken once.
- The same property changed two ways is a **conflict**: your side stays and the report lists both values. Open the result, look at that object, fix it by hand.
- An object added on either side is kept. An object removed on one side and untouched on the other is removed. Removed on one side and changed on the other: removed, and reported.
- Layers, blocks, text and dimension styles, sheets and named views merge the same way. Constraints follow the objects they name.
- The result is written in the same file format and version as yours.

Not merged: the order objects are drawn in is yours, then the objects the other side added. Changes to the same block definition on both sides are a conflict, never mixed. Nothing is uploaded; it all runs on your computer.
