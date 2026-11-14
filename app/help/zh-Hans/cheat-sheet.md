---
title: 速查表：40个常用命令
summary: 一页纸列出你最常用的40个命令、它们的简称，以及可以节省时间的按键。可下载为PDF打印。
keywords: 速查表, 快速参考, 命令, 别名, 简称, 初学者, 删除, 修剪, 打印, pdf, 快捷键
from: 2d40edc4
---

输入简称（别名）并按 Enter 键，或单击工具。Esc 取消。在空行上按 Enter 键可重复上一个命令。

**打印：**[cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf)（一页A4；使用Letter纸张时请选择“适合页面”打印）。

## 绘图

| 输入 | 命令 | 作用 |
|---|---|---|
| `L` | {{cmd:LINE}} | 绘制直线 |
| `PL` | {{cmd:PLINE}} | 绘制由直线和圆弧连接而成的链 |
| `C` | {{cmd:CIRCLE}} | 绘制圆（圆心和半径） |
| `A` | {{cmd:ARC}} | 绘制圆弧 |
| `REC` | {{cmd:RECTANG}} | 通过两个角点绘制矩形 |
| `POL` | {{cmd:POLYGON}} | 绘制正多边形 |
| `EL` | {{cmd:ELLIPSE}} | 绘制椭圆 |
| `DT` | {{cmd:TEXT}} | 书写单行文字 |
| `T` | {{cmd:MTEXT}} | 书写自动换行的文字（段落） |
| `H` | {{cmd:HATCH}} | 用图案填充区域 |

## 修改

| 输入 | 命令 | 作用 |
|---|---|---|
| `M` | {{cmd:MOVE}} | 移动对象 |
| `CO` | {{cmd:COPY}} | 复制对象 |
| `RO` | {{cmd:ROTATE}} | 绕一点旋转对象 |
| `SC` | {{cmd:SCALE}} | 放大或缩小对象 |
| `MI` | {{cmd:MIRROR}} | 沿一条线翻转对象 |
| `O` | {{cmd:OFFSET}} | 在一定距离处绘制平行副本 |
| `TR` | {{cmd:TRIM}} | 将对象修剪到与其他对象相交处 |
| `EX` | {{cmd:EXTEND}} | 将对象延伸到其他对象 |
| `F` | {{cmd:FILLET}} | 用圆弧将拐角倒圆 |
| `CHA` | {{cmd:CHAMFER}} | 用直边切去拐角 |
| `E` | {{cmd:ERASE}} | 删除对象 |
| `X` | {{cmd:EXPLODE}} | 将块或多段线分解为其组成部分 |
| `S` | {{cmd:STRETCH}} | 移动窗交范围内的端点 |
| `AR` | {{cmd:ARRAY}} | 按矩形阵列或环形复制 |
| `J` | {{cmd:JOIN}} | 将直线和圆弧合并为一个对象 |
| `BR` | {{cmd:BREAK}} | 将对象断为两段，或去掉一段 |

## 标注

| 输入 | 命令 | 作用 |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | 水平或竖直标注 |
| `DAL` | {{cmd:DIMALIGNED}} | 沿倾斜线标注 |
| `DRA` | {{cmd:DIMRADIUS}} | 标注半径 |
| `DAN` | {{cmd:DIMANGULAR}} | 标注角度 |

## 块和图层

| 输入 | 命令 | 作用 |
|---|---|---|
| `B` | {{cmd:BLOCK}} | 由对象创建块 |
| `I` | {{cmd:INSERT}} | 放置块 |
| `LA` | {{cmd:LAYER}} | 打开图层 |

## 视图和查询

| 输入 | 命令 | 作用 |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | 放大、缩小或缩放到全部 (E) |
| `DI` | {{cmd:DIST}} | 测量距离和角度 |
| `LI` | {{cmd:LIST}} | 显示对象的详细信息 |
| `MA` | {{cmd:MATCHPROP}} | 将一个对象的外观复制到其他对象 |

## 文件

| 输入 | 命令 | 作用 |
|---|---|---|
| `U` | {{cmd:UNDO}} | 撤销上一个命令 |
| `SAVE` | {{cmd:SAVE}} | 保存图形 |
| `PLOT` | {{cmd:PLOT}} | 打印为PDF |

## 按键

Ctrl（Mac上为 Cmd）：Z 撤销 · Y 重做 · S 保存 · P 打印。  F3 对象捕捉 · F8 正交 · F10 极轴。  空格键或 Enter 键重复上一个命令 · 滚轮缩放 · 按住滚轮拖动平移

刚开始接触绘图？输入 `TOUR` 进行首张图形导览，阅读[CadCraft 入门](topic:getting-started)，或在[命令](topic:commands)中查看每个命令。从其他绘图软件转来：[从其他绘图软件转来](topic:coming-from)和[命令对照表](topic:command-map)。
