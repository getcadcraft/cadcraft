---
title: Change dimension text size
summary: Make dimension text bigger or smaller, for new dimensions and for the ones already in the drawing.
section: tasks
order: 101
keywords: dimension text size, text height, dimtxt, dimscale, dimension text too small, dimension text too big, bigger dimension text, annotation scale
---

## For the dimensions you make next

1. Press {{key:Esc}} so nothing is selected: the right panel reads {{ui:Current settings}}.
2. Under {{ui:New dimensions}}, type the height you want on paper in {{ui:Text height}} (for example `2.5` for 2.5 mm, or
   `3/32"`) and press {{key:Enter}}.
3. Set {{ui:Overall scale}} to the plot scale (`50` for 1:50, `48` for 1/4" = 1'-0"): every size is multiplied by it.

On the command line, {{cmd:DIMTXT}} sets the height and {{cmd:DIMSCALE}} the overall scale.

## For dimensions already in the drawing

1. Select the dimensions (one, or several of them: pick {{ui:Dimension}} in the list at the top of Properties).
2. Type the new {{ui:Text height}}, or a new {{ui:Overall scale}}, and press {{key:Enter}}.

They redraw at once, in one undo step. A dimension from another program's file is redrawn in CadCraft's style as soon as you
change it.

:::tip
Text that is right on screen but tiny on the plotted sheet usually means the overall scale is 1: set it to the sheet's scale.
:::

See [Set dimension sizes, decimals and scale](topic:dimension-settings) for every setting.
