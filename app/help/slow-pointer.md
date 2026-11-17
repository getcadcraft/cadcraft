---
title: The pointer jumps or lags over the drawing
summary: What to do when the crosshair does not follow the mouse smoothly, on an older or slower computer.
section: trouble
order: 40
keywords: cursor jumps, pointer lag, crosshair slow, jerky cursor, old computer, old graphics card, integrated graphics, hardware acceleration, smoother pointer, slow laptop
---

CadCraft runs in the browser (CadCraft Studio is a browser view too), so nothing in it is built for one graphics card or
another. The crosshair is drawn by the app, which means it can only move as fast as the app can draw a frame.

## Let CadCraft turn the extras down

1. Open {{ui:Settings}} (the gear at the top right) and stay on the {{ui:CadCraft}} tab.
2. Choose {{ui:Smoother pointer on slower computers}}.
3. Pick {{ui:On}}.

With it on, your computer's own crosshair pointer is used in place of the drawn crosshair and pick box (the full-screen
crosshair too), and the object under the pointer lights up when the pointer rests instead of while it moves. Object snaps,
tracking and the rubber band work as before.

{{ui:Automatic}} is how CadCraft starts: it watches how long frames take while you move the pointer, and turns this on by
itself when they stay slow for a few seconds. It tells you once when it does. {{ui:Off}} keeps the drawn crosshair whatever
the speed.

## If it is still slow

- Check that hardware acceleration is on in your browser: open `chrome://gpu` (or `edge://gpu`) in a new tab. If the first
  lines say "Software only" or "Disabled", the browser is drawing without the graphics card. Updating the graphics driver
  often brings it back.
- Close other heavy tabs and programs, and try a smaller browser window.
- Tell us through {{ui:Help}}, {{ui:Report a problem}}: say whether you use the browser or CadCraft Studio, its version, and
  what the gpu page says.
