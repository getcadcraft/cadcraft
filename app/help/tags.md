---
title: Tags: attributes that feed schedules
summary: Define a tag (its kind, the values it may take, the blocks it applies to), set it on block references, and list the references as a schedule you can save as CSV.
section: tasks
order: 67
keywords: tags, tag, attribute, schedule, data extraction, property, fire rating, pick list, block reference, TAGS, csv
---

A **tag** is a block attribute with a definition: what kind of value it holds, which values are allowed, and which blocks it applies to. The values are ordinary block attributes, so any other program reads them and {{cmd:ATTEDIT}} shows them. Only the definitions are new, and they are kept in the drawing.

## Define and set

Type {{cmd:TAGS}} and choose:

- {{ui:Define}}: a name (letters, digits, space, `_ . -`), a kind (`text`, `number`, `integer`, `yesno`, `length`, `angle`), the allowed values separated by `;` (leave empty for any), and the block names it applies to (`DOOR*` matches every block starting with DOOR; empty means every block).
- {{ui:Set}}: with block references selected, type `FireRating=60 min; Width=850`. A value outside the allowed list, or not a number for a number tag, is refused and said. One undo step. A block that does not have the attribute gets it as a hidden attribute.
- {{ui:sChedule}}: every reference to a block a tag applies to, optionally grouped by a tag or by block name, printed and saved as CSV.
- {{ui:Remove}}: forgets a definition; the values stay on the references.

Renaming a tag renames its values on every reference. Tag names are not case sensitive, as attribute names are not.
