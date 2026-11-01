---
title: Lay out sheets for me
summary: Put the pieces of a drawing on sheets automatically: CadCraft picks a paper size and a standard scale that fits, places each piece with a title and the scale under it, and leaves everything editable.
section: tasks
order: 64
keywords: sheets, layout, layouts, paper, scale, automatic, AUTOSHEET, title block, viewports, named views
---

Choose **View › More › Lay out sheets for me** (or type {{cmd:AUTOSHEET}}). CadCraft finds the pieces of your drawing (your named views, or the separate clusters of the model), picks a paper size and a standard scale at which they fit, and puts them on new sheets with a title block, a caption and the scale under each.

Before it runs you can change what it does: **Pieces** (named views, clusters, the whole drawing, or let it decide), **Paper** (automatic or a size such as `iso-a1`), **Scale** (one scale for all, or each piece at its own) and **Sheets** (how many pieces share a sheet).

The sheets are ordinary sheets: move a viewport, change its scale or delete a sheet as usual. Press {{key:Ctrl+Z}} once to take all the new sheets back.

## Keynotes

In {{cmd:AUTOSHEET}} choose **Keynotes** to add a numbered legend under the views of each sheet. It lists the layers drawn in those views, one numbered line each, as plain text you can edit like any other text. Choose **File** to read your own keynote list (a number and its words per line, separated by a tab, a comma or a semicolon): a layer whose name matches a number in your list takes its words. No keynote list comes with the app.
