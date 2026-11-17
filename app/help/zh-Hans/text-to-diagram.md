---
title: 从文本绘制图表
summary: 粘贴 Mermaid 流程图、PlantUML 组件图、D2、从到列表或 draw.io XML，CadCraft 会排列出可像其他对象一样编辑的方块和连接线。
keywords: draw.io, drawio, diagrams.net, mxfile, xml, 本地模型, 图表, 流程图, mermaid, plantuml, d2, 从到列表, 方块图, 连接线, 文本转图表, DIAGRAM, TEXTDIAGRAM, 系统图, 接线图, 管道, csv
from: b26af54b
---

输入{{cmd:DIAGRAM}}（`TEXTDIAGRAM`、`T2D`）。随即打开一个文本框：粘贴文本，选择{{ui:绘图}}，单击图表的左上角，并指定文字高度。CadCraft 会读取文本，将方块按层排列并使用直角连接线，然后绘制在名为`Diagram`的图层上。新建的对象会被选中，因此可以立即移动它们。它们都是普通对象：用{{cmd:TEXTEDIT}}修改方块的文字，用夹点拉伸连接线，删除方块，或添加自己的线条。执行一次{{cmd:UNDO}}即可撤销整个图表。

在命令行中、不使用文本框时，文本可以写成一行，语句之间用`;`分隔：`flowchart LR; A[Pump] --> B[Tank]`。

## 读取的内容

| 文本 | 读取的内容 |
|---|---|
| **Mermaid** `flowchart` 或 `graph`，方向为 `TD`、`TB`、`BT`、`LR` 或 `RL` | `A`、`A[text]`、`A(text)`、`A([text])`、`A{text}`（判断框，绘制为菱形）、带引号的文本、`-->`、`---`、`-.->`、`==>`、`--x`、`<-->`，标签写作 `-->|text|` 或 `-- text -->`，链式 `A --> B --> C`，分组 `A & B --> C`，`<br/>` 表示换行，`%%` 注释 |
| **PlantUML**，位于 `@startuml` 与 `@enduml` 之间（组件图和部署图） | `[Component]`、`component`、`node`、`database`、`cloud`、`actor`、`rectangle` 等，以及带 `as` 名称的对象，`A --> B : label`、`->`、`..>`、`--`、`left to right direction` |
| **D2** | `a -> b: label`、`a <- b`、`a <-> b`、`a -- b`、链式、`a: Label`、`direction: right`、带引号的名称、`#` 注释 |
| **从到列表**（粘贴为文本或 CSV 的表格） | 列 `from`、`to`，以及可选的 `label` 和 `type`（`dashed` 绘制虚线连接线），列顺序不限，可用逗号、分号或制表符分隔；如果没有标题行，前三列依次为 from、to、label |

| **draw.io XML**（`.drawio` 文件的文本，`<mxfile>` 或 `<mxGraphModel>`） | 方框、圆角方框、椭圆、菱形判断框和纯文本；容器框和泳道框（以虚线绘制并带标题）；带拐点的连接线、箭头端（`endArrow`、`startArrow`）和 `dashed=1`；HTML 标签转为纯文本，`<UserObject label>` 和 `<object label>` 均可使用 |

其他任何行（样式、备注、循环框）都会被跳过，命令行会显示跳过了多少行。一个图表最多包含 400 个方块和 1200 条连接线。

## draw.io XML 保留其位置

其他语言只说明哪些对象相互连接，因此 CadCraft 会自行排列。Draw.io XML 已经记录了每个对象的位置，因此 CadCraft 予以保留：每个方块位于文件中的位置，并按比例缩放，使 12 像素字体变为所指定的文字高度（120 × 60 像素的方框在高度 6 时为 60 × 30 绘图单位），图表左上角位于单击的角点。连接线从一个方块的边缘经过其拐点连接到下一个方块的边缘；带`orthogonalEdgeStyle`且没有拐点的连接线会获得一个直角拐弯。

Draw.io 默认保存为压缩格式。方框和命令行会自动打开它；在没有压缩流的助手工具窗口中，会给出提示，而`File › Export as › XML`（取消勾选*Compressed*）可导出普通 XML。图片、端点悬空的连接线和第二页会被跳过并计数。

## 使用本地计算机上的模型编写

本地模型（Ollama、LM Studio、llama.cpp、Jan）可以根据 PDF 或 SVG 的内容编写 XML 或 Mermaid 文本，结果可通过同一个文本框输入，或在模型作为助手连接时直接放入图形：`diagram_from_text` 工具接受 `format` 为 `drawio`。小模型在 XML 中出错比在 Mermaid 或从到列表中更多，因此先尝试 Mermaid 成本更低；读取器无法使用的内容会被跳过并计数，而不会被猜测。模型配置方法见“连接 AI”。

## 布局方式

方块按连接关系分层排列（回环的连接线会向上绘制），排序以减少交叉，连接线为直角，从方块底部引出并进入下一个方块的顶部；`LR` 和 `RL` 会将层变为列。所设定的文字高度决定所有元素的大小。

## 子图和时序图

- Mermaid 的`subgraph name [Title]` … `end`会在其方块外绘制带标题的虚线框；子图可以嵌套。布局不会阻止其他方块进入框内，因此请用夹点移动误入的方块。
- Mermaid 的`sequenceDiagram`，或带`participant`行和`->`消息的 PlantUML 文本，会绘制为顶部一排方块，每个方块下方有一条虚线生命线，每条消息占一行。`-->` 和 `-->>` 为虚线，`->>` 和 `-)` 带箭头，`autonumber` 为消息编号，发给自身的消息会形成回环。备注和`loop` / `alt`框会被跳过。

## 单线图和管道图的符号

方块可以是绘制的符号，并在其下方显示名称，而不是方框。在文本中指定符号名称：

| 文本 | 写法 |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` 或一行 `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` 或 `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| 从到列表 | 列 `from_symbol` 和 `to_symbol` |

名称为 P&ID 图形（`pump-cf`、`tank`、`gate`、`ball`、`exch-shell`、`inst-field` 及 P&ID 库中的其余图形）以及电气图形集（`contact.no`、`breaker`、`motor.3ph`、`transformer`、`lamp` 等）。两个图形集共用的名称归入 P&ID 集；如需选择，请在前面写`pid:`或`el:`。CadCraft 不认识的名称会被跳过并计数。这些符号以普通线条、圆和圆弧绘制在`Diagram`图层上，并按文字高度缩放；它们不是附加插件的带标注块，因此如需工作图纸，请使用 P&ID 或电气命令。

AI 助手可以通过窗口中的`diagram_from_text`工具完成同样的操作。
