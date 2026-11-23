---
title: Give command options your own letters
summary: Answer a command's options with letters you choose, in any language, from one text file you can edit, import and export.
section: tasks
order: 50
keywords: option letters, optionkeys, optkeys, option keyword, keyword, remap, mapping, customize, custom letters, polar, array, P, PO, language, translate options, short form, import, export, ambiguous
---

## What you will learn

How to change the letters you type to answer a command's options. For example, {{cmd:ARRAY}} asks `[Rectangular/POlar]` and takes `PO` for Polar; you can make `P` or any other letters do the same, in your own language if you like.

## How options are answered

When a command shows options in square brackets, the capital letters are the ones to type: `POlar` is `PO`, `eXit` is `X`.

You can also type fewer letters. If what you type fits only one of the options shown, CadCraft takes it: with `[Rectangular/POlar]`, a lone `P` is Polar. If it fits two, the command line names them and asks again:

```
C could be COUnt, COLumns. Type more letters.
```

Numbers are never guessed, so a typed distance or count is always read as a number.

## Add letters of your own

Every command keeps its built-in letters. You add your own on top of them, so your list holds only what you changed.

1. Open {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Option letters}} and click {{ui:Edit…}}. Or type {{cmd:OPTIONKEYS}} and press {{key:Enter}}.
2. Under {{ui:Command}}, choose the command, for example `ARRAY`. The list has every command that asks for options, and it starts on the command you used last.
3. Under {{ui:Option}}, choose the option. Each one shows its built-in letters in brackets, for example `POlar (PO)`.
4. In {{ui:Your letters}}, type the letters you want, for example `P`, and click {{ui:Add}}.
5. The option now appears under {{ui:Your letters}} with its built-in letters and yours. Click {{ui:Save}}.

Start {{cmd:ARRAY}}, select an object and press {{key:Enter}}. The prompt shows your letters after the option, `POlar (P)`, and `P` answers it.

To take one away, click the x at the end of its row and then {{ui:Save}}. The option goes back to its built-in letters only.

## Letters you can't use

The editor refuses letters that would hide something the command line already reads, and says why:

- the built-in letters of another option of the same command (`R` for Polar in `ARRAY`, where `R` is Rectangular);
- an object snap word of three letters or more, such as `END`, `MID` or `CEN`, and the words `ALL` and `LAST`;
- the same letters for two different options of one command.

While anything is listed in red, {{ui:Save}} is off: fix the line or remove it, and it comes back on. A prompt's built-in letters also always win over yours, so your list can never stop a built-in answer from working. Letters that happen to be a command's name, like `L` or `C`, are fine: at an option prompt the command line is reading an answer, not starting a command.

The options listed for a command come from the commands that share its prompts, so now and then a command lists an option it only asks for in some cases.

## One choice for every command

Under {{ui:Command}}, choose {{ui:Every command}}. The options are then every option any command has, such as eXit or Undo. Letters you add there answer that option wherever a command offers it. Letters added for one command win over these.

## Letters in your own language

The letters can be from any alphabet, so you can answer options without switching your keyboard: add `З` for Close under {{ui:Every command}}, or `П` for POlar in `ARRAY`.

CadCraft ships with the English letters only. Your own list is how you, your office or people who share your language set up the rest, and {{ui:Export}} makes a file you can pass on.

## Edit as text

{{ui:Edit as text}} in the editor shows the same list as lines of text, one per option, which is also what {{ui:Export}} saves:

```
ARRAY.PO,  P
*.X,       Q
```

Each line is the command, a dot, the option's built-in letters, a comma and your letters. A star in place of the command means every command. A line that starts with `;` is a note.

## What stays the same

- The built-in letters keep working beside yours.
- Routines and toolbar buttons keep using the built-in letters, so nothing you loaded breaks. To type the built-in letters yourself where your own letters would get in the way, put an underscore first: `_PO`.
- A command's short name is a different thing: see [Edit command aliases](topic:command-aliases).

## Lines CadCraft refuses

When you edit as text or import a file, the editor lists each problem with its line number:

- the command doesn't exist (a command's alias is fine: `AR.PO` is read as `ARRAY.PO`);
- the line isn't `COMMAND.OPTION, LETTERS`;
- the letters have a space or a sign in them (letters and digits only, 16 at most);
- the same letters answer two different options of one command.

## Import and export

{{ui:Export}} saves your letters as a text file, to keep or to give to someone else. {{ui:Import…}} reads such a file. Both are in the editor and in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}}.

In Settings, {{ui:Import…}} replaces your file with the one you choose. A file with a line that collides or can't be used is not taken; open the editor and import it there to see the lines. In the editor it only fills the box: nothing changes until you click {{ui:Save}}.

## Reload or remove

Type {{cmd:REINIT}} and press {{key:Enter}} to apply your file again. To remove a letter, delete its line and click {{ui:Save}}.

## Your letters follow your account

When you are signed in to getcadcraft.com, your letters are kept with your account. Open CadCraft in another browser or on another computer with the same account and they arrive by themselves; the command line says `Option letters from your account`. If you changed them in two places, the newest copy wins and the one it replaced is kept once.

{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} says where they stand. Signed out or offline, they stay in this browser and go to your account the next time you save them while signed in.

Related: [Edit command aliases](topic:command-aliases) · [CadCraft settings](topic:settings) · [Commands](topic:commands)
