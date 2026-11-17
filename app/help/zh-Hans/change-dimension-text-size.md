---
title: 更改标注文字大小
summary: 使标注文字变大或变小，适用于接下来要创建的标注，也适用于图形中已有的标注。
keywords: dimension text size, 标注文字大小, text height, 文字高度, dimtxt, dimscale, dimension text too small, 标注文字太小, dimension text too big, 标注文字太大, bigger dimension text, 放大标注文字, annotation scale, 注释比例
from: 30e40633
---

## 对于接下来要创建的标注

1. 按{{key:Esc}}，使未选择任何内容：右侧面板会显示{{ui:Current settings}}。
2. 向下滚动面板到{{ui:New dimensions}}。在{{ui:Text height}}中输入你希望在图纸上显示的高度（例如`2.5`表示2.5 mm，或`3/32"`），然后按{{key:Enter}}。
3. 将{{ui:Overall scale}}设为出图比例（`50`表示1:50，`48`表示1/4" = 1'-0"）：每个尺寸都会乘以该值。

在命令行上，{{cmd:DIMTXT}}设置高度，{{cmd:DIMSCALE}}设置总比例。

## 对于图形中已有的标注

1. 选择标注（一个，或多个：在“{{ui:Properties}}”顶部的列表中选择{{ui:Dimension}}）。
2. 输入新的{{ui:Text height}}（位于{{ui:Text}}部分中），或输入新的{{ui:Overall scale}}（位于下方的{{ui:Fit}}部分中），然后按{{key:Enter}}。

它们会立即重绘，且为一个撤销步骤。来自其他程序文件的标注在你更改后会以CadCraft的样式重绘。

:::tip
文字在屏幕上看起来正常，但在打印图纸上很小，通常是因为总比例为1。请将其设为图纸的比例。
:::

参见[设置标注尺寸、小数位数和比例](topic:dimension-settings)，了解所有设置。
