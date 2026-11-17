---
title: 在其他程序中打开 CadCraft 的 DWG
summary: CadCraft 保存的 DWG 已在哪些程序中打开、检查了哪些内容，以及某个程序报错时该怎么办。
keywords: dwg, 在其他程序中打开, 兼容性, 能否打开, audit, trueview, 其他 CAD 程序, dxf, 检查, 另存为 DWG
from: 0f8c15c4
---

## CadCraft 写入的内容

{{ui:Save}} 会写入真正的 DWG，版本为图形原有的版本，或你在 {{ui:Save as}} 中选择的版本：AutoCAD 2000、2004、2007、2010、2013 或 2018。不会在背后进行任何转换：历史记录会列出过程中发生的所有更改（例如，在 2000 版 DWG 中，真彩色会被写为最接近的标准颜色）。

## 已在哪些程序中打开

CadCraft 写入的每个 DWG，在所有版本中，都会被除 CadCraft 之外的三个程序打开：ODA File Converter（检查文件，但不修复其中的任何内容）、LibreDWG 和 libdxfrw。它们的读取结果会与 CadCraft 的结果进行比较：对象、图层、块和属性、标注、图案填充、布局及其视口。

正在 Windows 上逐个对象类型检查 CadCraft 的 DWG 文件在 AutoCAD 和免费的 DWG TrueView 中的打开情况（AUDIT、图层、布局、标注、图案填充、属性、动态块、裁剪参照、图像）。结果在完成后会列在此处。

## 程序报错时

1. 使用 {{ui:Save as}} › {{ui:DXF 2000}} 另存为 DXF，然后打开该文件：大多数程序都能读取 DXF。
2. 将 DWG 保存为较旧的版本（2013 或 2010）。
3. 通过 Discord 告诉我们是哪个程序和哪个版本，以及它报告了什么；文件会最有帮助。
