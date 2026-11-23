---
title: Run LISP routines
summary: What CadCraft's LISP runs (functions, prompts, commands, objects, dialogs, vla objects), how to type LISP on the command line, and what it does not have yet.
section: reference
order: 48
keywords: lisp, routine, lsp, dcl, dialog, command, defun, entget, ssget, vla, vlax, vl, getpoint, error, compatibility, what works
---

## What you will learn

What to expect when you load a LISP routine written for another CAD program: which parts run in CadCraft, and what it does not have yet.

CadCraft has its own LISP. It was written from the public AutoLISP reference, not from anyone else's program, so most routines written for AutoCAD run unchanged. Where something is missing, the command line names the function, so you can tell a gap in CadCraft from a mistake in the routine.

## Type LISP on the command line

Type an expression that starts with `(` and press {{key:Enter}}: `(+ 1 2)` prints `3`. `!name` prints the value of a variable. An expression that doesn't close yet waits for the next line.

At a prompt, an expression answers it: at "Specify radius" type `(* 2 12.5)` for 25.

## What runs

- **The language:** `defun` (with locals after `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, and `*error*` (a local `*error*` works). Names are not case-sensitive; integers and reals differ, as you expect (`(/ 7 2)` is 3).
- **Built-in functions:** maths, lists (`car`, `cdr` and their family, `assoc`, `nth`, `member`, `subst`, `append`…), strings (`strcat`, `substr`, `strcase`, `wcmatch`…), conversions (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometry (`polar`, `distance`, `angle`, `inters`) and files (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Commands:** `(defun c:NAME …)` makes a command. `(command …)` and `(command-s …)` drive CadCraft's own commands, with `pause` for your answer.
- **Prompts:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` with `initget` keywords, `entsel`, `nentsel` and `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, with filter lists and `-4` tests).
- **Objects as lists:** `entget`, `entmod`, `entmake` (blocks too), `entdel`, `entlast`, `entnext` (a block reference's attributes come after it as ATTRIBs, then a SEQEND, so attribute routines work), `handent`, selection sets, `tblsearch` and `tblnext`, `layoutlist`, `regapp`, `getvar` and `setvar` for the settings CadCraft has.
- **Dialogs:** `.dcl` files with `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Buttons, edit boxes, list boxes, popup lists, toggles, radio buttons, rows, columns and boxes all show. A routine that writes its dialog to a temporary file works too.
- **Objects:** `vl-load-com` (it does nothing; nothing needs loading), the `vl-` list and string functions, `vl-catch-all-apply`, and `vla-get-…` / `vla-put-…` properties, `vla-…` methods and `vlax-for` over the Blocks, Layers and Layouts collections, model space and block definitions, with variants and safe arrays.

## Routines tested

CadCraft's tests run a set of routines written for these checks (selection filters, prompts, commands, objects, error handlers), and one popular routine people asked for by name: Lee Mac's DelBlocks, by name through its dialog and by picking a block. CadCraft also has its own {{cmd:DELBLOCKS}}, so you don't need a routine for that.

## Example routines

Routines to load, read and change, each with a picture of what it does: [github.com/getcadcraft/examples](https://github.com/getcadcraft/examples). BOXAREA draws a rectangle and prints its area, NTAG places numbered tags, LAYSPLIT moves every object to a layer named after its type, and TIDY puts a drawing in line with an office standard. They are Apache-2.0: copy them into your own routines.

## Not built yet

- `grread` (tracking the mouse yourself), reactors (`vlr-…`), curve functions (`vlax-curve-…`), dictionaries and extended data (`dictsearch`, xdata in `entget` and `entmake`), and the Express Tools' `acet-…` functions.
- Images and slides in dialogs show as blank frames.
- Running another program, the Windows registry, and files outside the ones you load: a routine can write and read its own temporary files, which last until you close the page.

When a routine reaches one of these, the command line shows "no function definition" and the name, and says CadCraft does not have it yet.

## Mistakes to avoid

- **A command with the same name as one of CadCraft's.** CadCraft's own command stays. Run the routine's as `(c:NAME)` on the command line.
- **Running LISP you don't trust.** A routine can change anything in the drawing, but nothing outside it: it can't reach your files, other sites or other apps.
