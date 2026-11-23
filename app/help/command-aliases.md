---
title: Edit command aliases
summary: Keep your own command aliases in one text file in the familiar format, import and export a .pgp file, and reload it with REINIT.
section: tasks
order: 49
keywords: alias, aliases, aliasedit, pgp, shortcut, short name, reinit, keyboard, customize, edit aliases
---

## What you will learn

How to add your own short names for commands, for example `LL` for {{cmd:LINE}}, all in one text file.

## Add an alias

1. Open {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}, or type {{cmd:ALIASEDIT}} and press {{key:Enter}}.
2. Add a line with the alias, a comma and the command after a star:

```
LL,     *LINE
```

3. Click {{ui:Save}}. The command line says how many of your aliases are in use.
4. Type `LL` and press {{key:Enter}}: LINE starts.

Your aliases sit on top of CadCraft's own. A line of yours wins over a built-in alias with the same name; remove your line and the built-in one is back.

## Lines CadCraft refuses

The editor lists each problem with its line number while you type:

- the command doesn't exist;
- the alias is itself a command's name (`LINE, *CIRCLE` would hide LINE);
- the line isn't `ALIAS, *COMMAND`;
- the same alias is on two lines (the later one wins).

Lines that start a program on your computer, like `NOTEPAD, START, 1, *File to edit: ,`, are skipped with a note: an app in the browser can't start programs.

## Bring your aliases from another program

1. In the alias editor, click {{ui:Import .pgp…}} and choose the file. You can also drop a `.pgp` file on the drawing.
2. Check the problems listed (commands CadCraft doesn't have are refused, the rest work).
3. Click {{ui:Save}}.

{{ui:Export .pgp}} saves CadCraft's aliases and yours as one file in the same format.

## Reload the file

Type {{cmd:REINIT}} and press {{key:Enter}} to apply your aliases file again. It is kept in this browser; the desktop app will keep it in its own folder, and the cloud service will sync it.

## Letters for a command's options

An alias names a command. To change the letters that answer a command's options (`P` for Polar in {{cmd:ARRAY}}), see [Give command options your own letters](topic:option-letters).

## Keyboard shortcuts for any command

An alias is typed; a shortcut is a key. To give a command a key of your own:

1. Click {{ui:View}} › {{ui:More}} › {{ui:Keyboard shortcuts…}}, or type `KEYS` and press {{key:Enter}}.
2. Click the {{ui:Key}} box and press the keys, for example {{key:Alt+Shift+C}}.
3. In {{ui:Runs}}, write the command, and if you like what to type after it: `CIRCLE`, or `ZOOM E`.
4. Click {{ui:Add}}.

A key needs {{key:Mod}} or {{key:Alt}} with a letter or digit, or a free function key ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Keys CadCraft, the app or the browser already use, and keys a My tools button has (see [Buttons of your own](topic:my-tools)), are refused, and the box says why. Shortcuts are kept in this browser (or desktop app); {{ui:Remove}} takes one away.
