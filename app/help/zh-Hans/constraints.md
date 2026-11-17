---
title: 为图形添加约束
summary: 用几何约束和标注约束使线保持水平、端点保持重合、尺寸保持固定；修改尺寸时，图形随之变化。
keywords: 约束, 参数化, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, 自由度, 完全约束
from: f8f21fa4
---

## 你将制作的图形

一块板，其宽度只需在一处修改：它的边保持垂直，一个角保持不动，高度保持为宽度的一半。

约束作用于{{ui:模型}}选项卡上的直线、多段线、圆、圆弧和点。每添加一个约束，都是一步撤销。

## 绘制并约束轮廓

1. 输入 `REC`，按{{key:Enter}}。输入 `0,0`，{{key:Enter}}，再输入 `100,50`，{{key:Enter}}。
2. 输入 `AUTOCONSTRAIN`，按{{key:Enter}}。输入 `ALL`，{{key:Enter}}，然后再按一次{{key:Enter}}。

   历史记录显示“已应用 4 个约束”。边旁会出现带 **H** 和 **V** 的小方框：这些是约束栏。
3. 输入 `GCFIX`，按{{key:Enter}}。在左下角附近单击。出现一个带 ⊕ 的方框：该角保持原位。

`AUTOCONSTRAIN` 会在端点几乎相接处添加重合约束，在直线几乎水平或竖直处添加水平或竖直约束。在其提示下输入 `S` 可更改判定的接近程度（起始值为 0.05 个{{ui:图形单位}}和 1°）。

## 添加尺寸

1. 输入 `DCHORIZONTAL`，按{{key:Enter}}。
2. 在左下角附近单击，然后在右下角附近单击。
3. 在矩形下方单击，以放置尺寸线。
4. 提示显示 `Dimension text <d1=100>`。输入 `width=120`，按{{key:Enter}}。

   矩形现在宽 120，标签显示 `width=120`。
5. 输入 `DCVERTICAL`，按{{key:Enter}}，输入 `O` 并按{{key:Enter}}，然后单击右边。
6. 在其右侧单击，输入 `width/2`，按{{key:Enter}}。

   高为 60。标签显示 `fx: d1=width/2`：由一个表达式驱动。

历史记录现在显示轮廓已完全约束。要更改其尺寸，请更改 `width`（参见[使用参数和方程](topic:parameters)），或双击 `width=120` 标签，输入新值，然后选择{{ui:应用}}。

## 移动受约束的对象

移动、旋转、缩放、夹点和{{ui:特性}}面板都会保留约束：你移动的对象被固定，其余部分随之跟随。若约束无法跟随，则不执行该编辑，历史记录会说明原因，例如“未完成：约束将该对象固定在原位”。删除对象会同时删除其约束。

## 镜像和修剪受约束的对象

- {{cmd:MIRROR}} 会将所镜像对象之间的约束复制到副本上。边（切线接触的方向、距离量取的一侧）会为镜像副本重新计算，副本上的标注会像粘贴时一样获得各自的名称。当 `Erase source objects` 为 `Y` 时，约束保留在镜像后的对象上。历史记录会说明有多少个约束被一并带过来。
- {{cmd:TRIM}} 会将直线或圆弧的约束保留在剩余部分上：端点上的约束归属于仍含该端点的那一段；方向规则（{{ui:水平}}、{{ui:竖直}}、{{ui:平行}}、{{ui:垂直}}）在每一段上都保持有效；连接两个外端点的标注继续量取它们。被剪掉部分所持有的约束，或被修剪改变了的长度（{{ui:相等}}、圆弧的扫掠角），会被删除。修剪后的圆保留其圆心和半径约束。修剪后的多段线会失去其约束。

## 约束类型

| 命令 | 保持 |
|---|---|
| {{cmd:GCHORIZONTAL}}、{{cmd:GCVERTICAL}} | 直线或线段水平或竖直（`2P`：两点水平或竖直） |
| {{cmd:GCPARALLEL}}、{{cmd:GCPERPENDICULAR}}、{{cmd:GCCOLLINEAR}} | 两条直线平行、垂直或位于同一直线上 |
| {{cmd:GCCOINCIDENT}} | 两点重合；`O`：点位于直线、圆或圆弧上 |
| {{cmd:GCTANGENT}} | 直线与圆或圆弧相切，或两者中的两个相切 |
| {{cmd:GCCONCENTRIC}}、{{cmd:GCEQUAL}} | 两个圆或圆弧同圆心；两段长度或两个半径相等 |
| {{cmd:GCSYMMETRIC}} | 两点、直线或圆关于某条直线对称 |
| {{cmd:GCFIX}} | 一个点（单击其附近）或整个对象（`O`）保持原位 |
| {{cmd:DCLINEAR}}、{{cmd:DCHORIZONTAL}}、{{cmd:DCVERTICAL}}、{{cmd:DCALIGNED}} | 一个距离 |
| {{cmd:DCRADIUS}}、{{cmd:DCDIAMETER}}、{{cmd:DCANGULAR}} | 半径、直径、两条直线之间的角度或圆弧的角度 |

{{cmd:GEOMCONSTRAINT}} 和 {{cmd:DIMCONSTRAINT}} 会询问要使用哪一种；{{ui:约束}}和{{ui:标注}}位于{{ui:参数化}}组中，用于运行这些命令，{{ui:更多}}中列出了每一项。单击的位置决定选取的部分：单击靠近端点、中点或圆心时取该点；单击多段线时取其下方的线段。第一个对象保持不动，第二个对象移动以与之相接。

与其他约束冲突，或因其他约束已隐含而不增加任何内容的约束，会被拒绝并给出提示，且不会移动任何对象。

## 查看、选择和删除

- 单击约束栏中的方框（或重合方块，或标注标签），即可选中该约束；历史记录会给出其名称。按{{key:Delete}}删除该约束。
- {{cmd:DELCONSTRAINT}} 删除所选对象上的全部约束。
- {{cmd:CONSTRAINTBAR}}：`S` 显示所有约束栏，`H` 隐藏所有约束栏；先选择对象，以显示或隐藏其约束栏。{{ui:更多}}中有{{ui:显示约束栏}}和{{ui:隐藏约束栏}}。
- {{cmd:DCDISPLAY}} 显示或隐藏标注约束。它们从不打印。
- {{cmd:DCCONVERT}} 将绘制在直线、圆和圆弧上的标注转换为标注约束。

:::note
如果你用过 AutoCAD 的参数化绘图，命令名称和提示是相同的。约束和参数以 DWG 和 DXF 文件中其他程序会忽略的形式保存；参见[文件](topic:files#constraints-in-files)。
:::
