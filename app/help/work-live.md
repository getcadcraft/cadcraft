---
title: Work on one drawing together, live
summary: What changes in CadCraft while you are in a CadCraft Studio live session: other people's cursors and selections, objects someone is editing, the host's locks, your own undo, and joining from a browser on the same network.
section: tasks
order: 92
keywords: live, studio live, together, collaborate, co-edit, session, share live, join, cursor, held, editing, lock, livelock, liveunlock, livehold, hold layer, hold area, padlock, undo, host, assistant, same file, many people, slow, limit, who changed, recent edits, edit log
---

## What you will learn

What you see and what happens to your edits while several people work on one drawing at the same time. CadCraft Studio starts and joins the session (Share live, Join); this page is about the drawing itself.

## Everyone draws at once

Draw and edit as usual. Your own edits show at once, even before the others have them, and theirs appear on your screen a moment after they make them. Every command works: drawing, modifying, layers, blocks, sheets, dimensions, constraints.

Two people can change the same object. When you change different things, such as the colour and an end point of one line, both changes are kept. When you change the same thing, the later change wins.

What stays yours alone: the current layer, colour and text height for new objects, your dimension settings, your view, split screen and UCS. The drawing is shared; how you look at it is not.

## Other people on your drawing

- **Cursors:** each person's pointer shows with their name in their own colour, and the command they are running. You see the cursors of people working near what is on your screen.
- **Selections:** what someone has selected is outlined in their colour.
- **Being edited:** an object someone has selected carries a label such as "Ana is editing". You can still change its colour or move it, but you can't delete, explode or retype it until they let go. Selecting it tells you who has it.
- **Who changed it last:** select one object that someone else changed in this session and the command line says who, and what the change was ("Ben changed that last: CIRCLE."). Studio's Live panel lists every recent edit under {{ui:Recent edits}}. Nothing of this is saved in the drawing: it lasts as long as the session.

## Hold a layer or an area while you work there

On a big drawing with several people, say which part is yours for now:

1. Type `LIVEHOLD` and press {{key:Enter}}.
2. Choose `L` and type a layer name (Enter keeps the current layer), or choose `A` and pick two corners of an area.
3. Other people's edits on that layer, or to objects in that area, are taken back and they are told you are working there. You see your area as a dashed frame; others see it in your colour with your name, and the layers you hold are listed at the top left of their drawing.
4. `LIVEHOLD`, then `R`, releases everything you hold. Leaving the session releases it too.

Anyone in the session can hold, the host included; the host's locks still apply on top. A hold is never saved in the file.

## When an edit is taken back

The host's copy of the drawing checks every edit. A few can't go in, and CadCraft takes them back on your screen and says why on the command line, for example:

- someone deleted the object, or the layer or block it needs, just before you;
- someone is editing that object, or holds its layer or the area it is in;
- the host locked it;
- the block you place was purged, or a layer you delete still has objects on it.

## Undo undoes your own work

{{key:Mod+Z}} and {{ui:Undo}} undo your own last command, all of it, and leave everyone else's work alone. When someone changed the same thing since, nothing is undone and the command line says who changed it. {{key:Mod+Y}} redoes.

## Locks (the host)

The host can protect objects or a whole layer so that nobody changes them, the host included, until they are unlocked:

1. Select the objects, then type `LIVELOCK` and press {{key:Enter}}. Or type `LIVELOCK` with nothing selected and choose `L` to lock a layer by name: objects added to that layer later are locked too.
2. Locked objects are drawn dashed with a "Locked by the host" label on everyone's screen.
3. `LIVEUNLOCK` unlocks them the same way.

Locks belong to the session: they end when it ends and are never saved in the file.

## Join with the same file

If you opened the very file the host opened (from a shared folder or the same copy), join from your own CadCraft window in Studio: open the {{ui:Live}} panel and use {{ui:Join here}} with the host's code. Only the changes made since the host opened it travel, so a large drawing is ready at once. If your file is a different one, the host's drawing replaces it on your screen (your file stays as it is). This works only while your drawing is unchanged since you opened it.

## Assistants in a live session

An assistant connected to your CadCraft window (see the help on working with AI assistants) joins the session as its own participant, shown to everyone as "Assistant (via <your name>)". The host lets it in, as for a person; the host's own assistant joins at once. Its changes have their own undo: your {{key:Mod+Z}} undoes your work, and the assistant's undo undoes only its own. It leaves the session when you disconnect it or leave, and it can only work in the session while you can edit.

## Join from a browser

A teammate without Studio can scan the picture under the host's code with a phone, tablet or computer on the same network. CadCraft opens in the browser, asks for your name on the command line, and fills with the host's drawing once the host lets you in. Invite links, for joining from another network, are not open yet.

## Many people on one drawing

Every edit goes to everyone in the session, so the more people there are, the longer each change takes to reach each of them, and slower laptops and connections fall behind first. A session's usual size is 20 people; the host can allow more for one session (see the help on working together live). If the drawing feels slow with many people, fewer people, fewer of them editing at the same moment, or a better connection helps.

## When the session ends

Only the host saves the drawing. When the host ends the session, everyone else keeps an unsaved copy: save it if you want to keep it.

:::note
Something taken back is drawn on top of the objects around it on your own screen until you reopen the drawing. Hatches and filled objects that overlap may look different from the host's copy; the drawing itself is the same.
:::
