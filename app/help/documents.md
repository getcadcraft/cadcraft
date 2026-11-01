---
title: Documents: check out, revisions and release
summary: Keep a project folder's drawings under control: check a file out so nobody else changes it, check it in as a new revision, send it for review and release it with an approver's name; history, what uses what, a bill of materials, and title blocks that show the revision.
section: tasks
order: 136
keywords: project settings, approvers, admins, revision letters, ASME, read-only, compare revisions, open copy, partcraft, bimcraft, documents, DOCUMENTS, DOCS, vault, document management, pdm, check out, check in, checkout, checkin, lock, revision, rev, revision letter, release, released, approve, approval, review, obsolete, where used, bom, bill of materials, title block, revision block, project folder
---

## What you will make

A project folder where every drawing has a revision (A.1, A.2 … then A, B …) and a state (Work in progress, For review, Released, Obsolete), where only one person at a time can change a file, and where every check-out, check-in, approval and broken check-out is written down with who did it and when.

Everything is kept in the folder itself, in a hidden `.ccvault` folder beside your drawings. A folder on a shared drive or a synced folder works for a whole team. There is no server and nothing is uploaded.

## Open Documents

Type `DOCUMENTS` (or `DOCS`) and press {{key:Enter}}. The panel opens beside the drawing.

Choose {{ui:Choose the project folder}} and pick the folder that holds the project's drawings. Project folders work in CadCraft Studio and in browsers that can open a folder (Chrome, Edge). In other browsers the panel says so.

The first time, type your name (it goes on everything you do) and the name of this computer. If you are signed in, your name is already there.

## Start a vault

A folder that is not a vault yet offers {{ui:Start a vault in this folder}}. Type the project's name. Then open {{ui:Files not in the vault}} and choose {{ui:Add}} beside each file to bring under control. A file you add starts at revision **A.1**, Work in progress.

## Change a drawing

1. Choose {{ui:Open}} beside a drawing. It opens in CadCraft. If it is not checked out to you, look but do not change it: Save refuses to write over it and says why (use Save As to keep a copy of your own).
2. Choose {{ui:Check out}}. Nobody else can check it out now; the panel shows them who has it, on which computer, since when.
3. Draw.
4. Choose {{ui:Check in}} and say what changed. The drawing you have open is saved into the project folder in its own format and becomes the next revision (A.1, then A.2). Checking in with no change keeps the revision.

{{ui:Undo check-out}} gives the file back without a new revision.

## Review and release

- {{ui:Send for review}}: the file is read-only while it is reviewed.
- {{ui:Approve}}: type the approver's name. A.3 becomes **A**, Released. Released files are read-only.
- {{ui:Send back}}: back to Work in progress, with the reason.
- {{ui:New revision}} on a released file checks it out for the next letter: its first check-in is **B.1**. {{ui:Undo check-out}} before that leaves it at A.
- {{ui:Make obsolete}} retires a released file.

A project can keep a list of who may approve, and can require that the approver is not the person who checked the file in (see Project settings below).

## Project settings

Open {{ui:Project settings}} in the panel:

- **Approvers**: one name per line. When there are any, only they can approve a release.
- **The approver must be someone other than the author**: the "four eyes" rule.
- **Admins**: one name per line. When there are any, only they can break someone else's check-out or change these settings.
- **Revision letters to leave out**: {{ui:Use the ASME Y14.35 sequence}} skips I, O, Q, S, X and Z, or type your own letters. Letters already given stay; the choice applies to the next revisions.
- **A check-out counts as stale after**: the number of days (14 by default).

Choose {{ui:Save settings}}. The change is written in the log with who made it.

## Someone left a file checked out

{{ui:Break check-out}} frees a file someone else has checked out (they are away, or their computer died). You must type a reason: it is written in the log with whose check-out it was. When the project has admins, only they can do this. A check-out older than 14 days is marked as a long time.

## History, revisions, uses, used by

Choose a file's name to see:

- {{ui:History}}: every event, newest first, with who, which computer and when.
- {{ui:Revisions}}: each revision kept. A copy of every revision is in the vault (the same content is kept once). {{ui:Open copy}} opens that revision as a plain copy that cannot overwrite the vault's file. {{ui:Compare with}} lists what was added, removed and changed between that revision and the one before it (or any other you choose), and colours it on the drawing.
- {{ui:Uses}}: the drawings it links to (xrefs), the documents an IFC model points to, the parts of a PartCraft assembly.
- {{ui:Used by}}: every file in the vault that uses this one.

{{ui:Bill of materials (CSV)}} saves the list of everything a file uses, level by level, with quantities, revisions and states, for a spreadsheet.

## A revision block on the sheet

With a drawing open that has a layout, choose {{ui:Revision block}}. A table of the released revisions (revision, date, by, approved, description) is drawn at the top right of the sheet you are viewing. When you approve a release, the table is brought up to date.

## Revision in the title block

Give your title block's attributes one of these tags and choose {{ui:Fill title blocks}} on the open drawing:

| Tag | Filled with |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | the revision (B, or B.2 while it is worked on) |
| `VAULT.STATE` | the state (Released …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | the date of the latest revision |
| `VAULT.APPROVER`, `APPROVED_BY` | who approved the latest release |

## PartCraft and BimCraft

PartCraft and BimCraft have the same Documents panel for their own files: parts and assemblies in PartCraft, IFC models in BimCraft. Checking in saves the model that is open into the project folder, and an assembly shows which parts it uses and a bill of materials.

## Good to know

- Two people on the same shared folder cannot both check out a file: the check-out is a file the system refuses to make twice. In a browser, and in a Studio whose shell is older than this feature, this is as strict as the folder allows: two check-outs in the same split second could both succeed. The panel says which applies.
- Do not edit or delete the `.ccvault` folder by hand. The log in it is the record; the vault rebuilds its list from it if needed.
- Changing a file in the folder without checking it out is shown as {{ui:Changed in the folder without a check-out}}.
