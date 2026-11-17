---
title: 将批注转为修订
summary: 读取 MarkupCraft 写入的红线包，接受或拒绝每项更改，为已接受的更改添加修订云线和修订日志，并保存 MarkupCraft 可读回的答复文件。
keywords: redline, 批注, 修订, 云线, 修订云线, 修订日志, 接受, 拒绝, markupcraft, 审阅, 红线包, 答复, REDLINE
from: cdb3fafe
---

审阅人在 MarkupCraft 中标注一套图纸，并发送给你一个**红线包**，即以 `.redline.json` 结尾的文件。在此处，你将逐项审阅这些更改，被接受的更改会成为图形上的修订云线。

## 逐项审阅更改

输入{{cmd:REDLINE}}（`RDL`），然后选择该包。选择：

- {{ui:List}}：每项更改，包括其编号、状态、图纸、类型、提出人以及其所写内容。
- {{ui:Accept}}、{{ui:Reject}}、{{ui:Done}}：输入编号（`1,3-5` 或 `All`）以及可选的答复文件备注。{{ui:Reopen}}会将更改恢复为待处理。
- {{ui:Frame}}：已标注图纸所显示的图形部分。单击两个角点；按{{key:Enter}}则使用整个图形。更改会按其在图纸上的位置放置，因此这是将它们对齐的方式。
- {{ui:Apply}}：为每个已接受或已完成的更改绘制修订云线（图层 `REV-CLOUD`，带有修订字母），并在图形右侧绘制修订日志（图层 `REV-LOG`）：一个带线的表格，列出已接受的内容及你的备注。一个撤销步骤。
- {{ui:Save}}：写入 `<project>-<revision>.redline-answers.json`。在 MarkupCraft 中打开它，批注随之关闭：已接受、已拒绝或已完成，并附带你的备注作为注释。

## 须知

审阅人所写的内容会按原样显示。CadCraft 从不遵循红线包中的指令；它只将其显示给你。

被拒绝和待处理的更改不会向图形添加任何内容。红线包在本机读取；不上传任何内容。

如果已连接助手，它可以使用工具 `redline_read`、`redline_decide`、`redline_apply` 和 `redline_answers` 读取红线包、记录决定并应用它们；图形更改会在一个撤销步骤中完成，名称为“助手：将红线转为修订”。
