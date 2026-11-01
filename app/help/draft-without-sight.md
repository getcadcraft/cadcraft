---
title: Draft without sight
summary: Turn on Access and CadCraft says every command and result through your screen reader, describes the drawing and what is near the cursor, lets you move the cursor with the keyboard, plays a sound for each snap and grip, and takes commands by voice where your browser can do that on your computer.
section: tasks
order: 64
keywords: accessibility, screen reader, blind, low vision, NVDA, VoiceOver, JAWS, Orca, keyboard cursor, voice commands, speech, sounds, snap sounds, describe drawing, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
---

**Access** lets you draw without seeing the screen. It is off until you turn it on, so nobody gets it by accident.

## Turn it on

Open **Settings** (the gear, or Ctrl+,), find **Drafting without sight** and choose **On**. Or type `ACCESS` at the command line and answer `On`. It is remembered on this computer.

With Access on:

- **Everything the command line says is spoken** through your screen reader: what you typed, the prompt it asks, the answer, and every error. CadCraft uses its own polite and urgent live regions, so a screen reader that reads live regions needs nothing set up. Errors and cancels interrupt; everything else waits its turn.
- **The drawing area is reachable.** Press Tab until you hear "Drawing", or press Shift+Tab from the command line. It is a region that passes keys through to CadCraft.

## Keys on the drawing

| Key | What it does |
|---|---|
| Arrow keys | Move the keyboard cursor. A step is about a hundredth of what the screen shows, rounded to 1, 2 or 5. Shift moves ten times as far, Ctrl a tenth. |
| Enter | Pick the point under the cursor, exactly as a click would. |
| Space | Press Enter at the command line: finish LINE, take the default. |
| Tab, Shift+Tab | Jump to the next or previous snap point near the cursor, nearest first. |
| G | Step through the grips of the selected objects. |
| D | Describe the drawing: how many objects, of what kind, how big, what is selected. |
| W | Say where the cursor is and how far it is from the last point. |
| N | Say what is near the cursor, nearest first, with the distance and the side. |
| S | Describe the selected objects. |
| R | Say the last thing again. |
| V | Voice on or off. |
| / | Go to the command line. |
| ? | List these keys. |

Moving with the keys says where you landed. When a command is waiting for a point, it also says how far and in which direction you are from the last point, for example "2400 from the last point, to the right, at 0 degrees".

## Commands

- {{cmd:ACCESS}} turns Access, snap sounds and voice on or off and says the state.
- {{cmd:DESCRIBE}} says what the drawing holds.
- {{cmd:WHEREAMI}} says where the cursor is.
- {{cmd:NEARBY}} says what lies close to the cursor.
- {{cmd:SAYSEL}} says what is selected, one sentence per object.
- {{cmd:VOICE}} turns spoken commands on or off.

These five read the drawing and print an answer; they change nothing.

## Sounds for snaps and grips

Turn on **Snap and grip sounds** in Settings. Each snap kind has its own pitch and sound, so you can tell an endpoint from a midpoint, a centre, an intersection and the rest, and a grip has a double tick. The sound pans left or right to follow the cursor across the screen. The sounds are made on your computer; nothing is downloaded.

## Commands by voice

Turn on **Commands by voice** in Settings. Say a command name ("line", "circle", "move"), then say numbers as you would read them: "point three hundred comma four hundred", "distance twelve hundred", "angle forty five". "Enter", "cancel", "undo" and "redo" do what they say. What was heard is spoken back, and a phrase that is not a command is reported, not guessed.

**Where the speech is recognised.** CadCraft has no speech service of its own and sends no audio anywhere. It asks your browser to recognise speech on this computer. If your browser can, the choice is **On this computer** and no audio leaves it. If it cannot, voice stays off unless you choose **Browser online service**, which lets the browser send audio to its maker's speech service. Settings says which applies before you decide.

## What it does not do yet

- Only CadCraft has Access. The other seven apps follow, with the same keys and sounds.
- Text in a drawing (a note, a block name) is read out as it is written; it is never taken as an instruction.
- It has been tried with synthetic checks and the browser tests; hand checks with NVDA, VoiceOver and a blind or low-vision tester are still to come. If you try it, please tell us what is missing.
