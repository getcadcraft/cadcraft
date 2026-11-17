---
title: 從文字繪製圖表
summary: 貼上 Mermaid 流程圖、PlantUML 元件圖、D2、從到清單或 draw.io XML，CadCraft 會排列區塊與連接器，讓你像編輯其他物件一樣編輯它們。
keywords: draw.io, drawio, diagrams.net, mxfile, xml, 本機模型, 圖表, 流程圖, mermaid, plantuml, d2, 從到清單, 區塊圖, 連接器, 文字轉圖表, DIAGRAM, TEXTDIAGRAM, 系統圖, 接線圖, 管線, csv
from: b26af54b
---

輸入 {{cmd:DIAGRAM}}（`TEXTDIAGRAM`、`T2D`）。會開啟一個方塊：貼上文字，選擇{{ui:繪製}}，點選圖表的左上角，然後輸入文字高度。CadCraft 會讀取文字，以直角連接器將區塊分層排列，並繪製在名為 `Diagram` 的圖層上。新物件會被選取，因此你可以立即移動它們。它們是一般物件：用 {{cmd:TEXTEDIT}} 更改區塊的文字，用夾點拉伸連接器，刪除區塊，或加入自己的線條。執行一次 {{cmd:UNDO}} 即可移除整個圖表。

在指令列中，不使用方塊時，文字可以是一行，並以 `;` 分隔各個陳述式：`flowchart LR; A[Pump] --> B[Tank]`。

## 可讀取的格式

| 文字 | 讀取的內容 |
|---|---|
| **Mermaid** `flowchart` 或 `graph`，搭配 `TD`、`TB`、`BT`、`LR` 或 `RL` | `A`、`A[文字]`、`A(文字)`、`A([文字])`、`A{文字}`（判斷，繪製為菱形）、加引號的文字、`-->`、`---`、`-.->`、`==>`、`--x`、`<-->`、以 `-->|文字|` 或 `-- 文字 -->` 表示的標籤、串接 `A --> B --> C`、群組 `A & B --> C`、`<br/>` 換行、`%%` 註解 |
| **PlantUML**，位於 `@startuml` 與 `@enduml` 之間（元件與部署圖） | `[Component]`、`component`、`node`、`database`、`cloud`、`actor`、`rectangle` 等，以及帶 `as` 名稱的項目、`A --> B : label`、`->`、`..>`、`--`、`left to right direction` |
| **D2** | `a -> b: label`、`a <- b`、`a <-> b`、`a -- b`、串接、`a: Label`、`direction: right`、加引號的名稱、`#` 註解 |
| **從到清單**（以文字或 CSV 貼上的表格） | 欄位 `from`、`to`，以及選用的 `label` 與 `type`（`dashed` 會繪製虛線連接器），順序不限，以逗號、分號或定位字元分隔；若沒有標題列，前三欄依序為 from、to、label |

| **draw.io XML**（`.drawio` 檔案的文字，`<mxfile>` 或 `<mxGraphModel>`） | 方塊、圓角方塊、橢圓、菱形判斷與純文字；容器與泳道方塊（以虛線繪製，並帶標題）；連接器及其轉折點、箭頭端點（`endArrow`、`startArrow`）與 `dashed=1`；HTML 標籤會轉為純文字，`<UserObject label>` 與 `<object label>` 皆可使用 |

其他任何一行（樣式、註解、迴圈框）都會被略過，指令列會說明略過了幾行。一個圖表最多可有 400 個區塊與 1200 條連接器。

## Draw.io XML 會保留位置

其他語言只說明哪些項目彼此相連，因此 CadCraft 會替它們排版。Draw.io XML 已經記錄了每個項目的位置，因此 CadCraft 會保留這些位置：每個區塊都放在檔案指定的位置，並依你設定的文字高度縮放，使 12 像素的字型成為你輸入的文字高度（120 × 60 像素的方塊在高度 6 時為 60 × 30 繪圖單位），圖表的左上角則放在你點選的位置。連接器會從一個區塊的邊緣連到下一個區塊的邊緣，並經過其轉折點；具有 `orthogonalEdgeStyle` 且沒有轉折點的連接器，會得到一個直角轉折。

Draw.io 預設儲存的檔案是壓縮的。方塊與指令列會為你開啟它；若助理工具所在的視窗沒有壓縮串流，會加以說明。使用 `File › Export as › XML` 並取消勾選 *Compressed*，即可得到純 XML。圖片、端點未連接的連接器與第二頁會被略過並計數。

## 用電腦上的本機模型撰寫

本機模型（Ollama、LM Studio、llama.cpp、Jan）可以根據 PDF 或 SVG 的內容撰寫 XML 或 Mermaid 文字，結果可透過同一個方塊輸入，或在模型以助理身分連線時直接放入圖形：`diagram_from_text` 工具的 `format` 設為 `drawio` 即可。小型模型在 XML 上的錯誤比 Mermaid 或從到清單多，因此先試 Mermaid 較省事；讀取器無法使用的內容會被略過並計數，而不是猜測。模型設定方式請參閱「連接你的 AI」。

## 排版方式

區塊會依連接器分層排列（會繞回的連接器則向上繪製），並排序以減少交叉，連接器為直角，從區塊底部離開，進入下一個區塊的頂部；`LR` 與 `RL` 會將各層轉為欄。你設定的文字高度會決定所有內容的大小。

## 子圖與循序圖

- Mermaid 的 `subgraph name [Title]` … `end` 會在其區塊周圍繪製一個帶標題的虛線方塊；子圖可以巢狀。排版不會讓其他區塊留在方塊之外，因此請用夾點移動跑到外面的區塊。
- Mermaid 的 `sequenceDiagram`，或帶有 `participant` 行與 `->` 訊息的 PlantUML 文字，會繪製為上方一排區塊，每個區塊下方有一條虛線生命線，每則訊息佔一列。`-->` 與 `-->>` 為虛線，`->>` 與 `-)` 有箭頭，`autonumber` 會為訊息編號，傳送給自己的訊息會形成迴圈。附註與 `loop`／`alt` 框會被略過。

## 單線與管線圖的符號

區塊可以是繪製的符號，並在其下方顯示名稱，而不是方塊。在文字中指定符號名稱：

| 文字 | 寫法 |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf`，或一行 `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf`，或 `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| 從到清單 | 欄位 `from_symbol` 與 `to_symbol` |

符號名稱為 P&ID 符號（`pump-cf`、`tank`、`gate`、`ball`、`exch-shell`、`inst-field` 以及 P&ID 程式庫的其餘符號）與電氣符號組（`contact.no`、`breaker`、`motor.3ph`、`transformer`、`lamp` 等）。兩組共用的名稱會歸入 P&ID 組；若要指定，請在前面加上 `pid:` 或 `el:`。CadCraft 不認得的名稱會被略過並計數。符號會以純線條、圓與圓弧繪製在 `Diagram` 圖層上，並依文字高度縮放；它們不是附加元件的區塊（帶有標籤），因此若要製作工作圖，請使用 P&ID 或電氣指令。

AI 助理可以透過視窗中的 `diagram_from_text` 工具執行相同的操作。
