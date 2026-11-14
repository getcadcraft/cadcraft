---
title: 暖通：TakeoffCraft中的风管
summary: 将风管明细表以项目形式发送至TakeoffCraft——可以是包含算量的图纸PDF，也可以是作为包导入价格库的组合。
keywords: TakeoffCraft, 算量, 估算, 工程量, 项目, 包, 价格库, 钣金, PDF
from: 7289df5d
---

## 包含算量的PDF

{{cmd:EXPORT}} › {{ui:供TakeoffCraft使用的风管（内含算量的PDF）}}会在一张图纸上绘制平面图（ARCH D或ISO A1，采用能容纳的最大标准比例），并在PDF中嵌入TakeoffCraft算量。在TakeoffCraft中打开该PDF，它会提供算量：

- 每种风管形状、尺寸和材料对应一个**线性项目**，每段直管上都有一个标记；
- 每种管件类型和尺寸对应一个**计数项目**，每个管件所在位置有一个标记；
- 每个项目的组合都包含其**钣金**：风管为周长 × L，管件为面积 × N。

TakeoffCraft按图纸比例测量标记，因此其长度与明细表长度一致，并可在图纸上看到每项对应的内容。比例按最长的风管段进行设定和校核。项目不含单价，单价需自行设定。

## 作为包的组合

{{cmd:EXPORT}} › {{ui:供TakeoffCraft使用的风管组合（包）}}会将相同的项目（不含数量）写为TakeoffCraft包（`.json`文件）。在TakeoffCraft中打开{{ui:库}} › {{ui:专业包}} › {{ui:打开包文件}}，即可将其添加到价格库中。每个项目都会记录其在图形中的数量。
