---
title: 速查表：40 個常用指令
summary: 一頁列出最常用的 40 個指令、其簡短名稱，以及能節省時間的按鍵。可下載為 PDF 列印。
keywords: 速查表, 快速參考, 指令, 別名, 簡短名稱, 初學者, 刪除, 修剪, 列印, pdf, 快速鍵
from: 2d40edc4
---

輸入簡短名稱（別名）後按 Enter，或按一下工具。Esc 取消。在空白行按 Enter 會重複上一個指令。

**列印：**[cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf)（一頁 A4；使用 Letter 紙張時，請以「縮放至符合頁面」列印）。

## 繪製

| 輸入 | 指令 | 功能 |
|---|---|---|
| `L` | {{cmd:LINE}} | 繪製直線 |
| `PL` | {{cmd:PLINE}} | 繪製相連的直線與圓弧鏈 |
| `C` | {{cmd:CIRCLE}} | 繪製圓（圓心與半徑） |
| `A` | {{cmd:ARC}} | 繪製圓弧 |
| `REC` | {{cmd:RECTANG}} | 由兩個角點繪製矩形 |
| `POL` | {{cmd:POLYGON}} | 繪製正多邊形 |
| `EL` | {{cmd:ELLIPSE}} | 繪製橢圓 |
| `DT` | {{cmd:TEXT}} | 書寫單行文字 |
| `T` | {{cmd:MTEXT}} | 書寫會自動換行的文字（段落） |
| `H` | {{cmd:HATCH}} | 以圖案填滿區域 |

## 修改

| 輸入 | 指令 | 功能 |
|---|---|---|
| `M` | {{cmd:MOVE}} | 移動物件 |
| `CO` | {{cmd:COPY}} | 複製物件 |
| `RO` | {{cmd:ROTATE}} | 繞一點旋轉物件 |
| `SC` | {{cmd:SCALE}} | 放大或縮小物件 |
| `MI` | {{cmd:MIRROR}} | 沿一條線翻轉物件 |
| `O` | {{cmd:OFFSET}} | 在指定距離處繪製平行副本 |
| `TR` | {{cmd:TRIM}} | 將物件修剪到其他物件交會之處 |
| `EX` | {{cmd:EXTEND}} | 將物件延伸到其他物件 |
| `F` | {{cmd:FILLET}} | 以圓弧將轉角修圓 |
| `CHA` | {{cmd:CHAMFER}} | 以直邊切去轉角 |
| `E` | {{cmd:ERASE}} | 刪除物件 |
| `X` | {{cmd:EXPLODE}} | 將區塊或聚合線分解為各部分 |
| `S` | {{cmd:STRETCH}} | 移動交叉視窗內的端點 |
| `AR` | {{cmd:ARRAY}} | 以格狀或環狀複製 |
| `J` | {{cmd:JOIN}} | 將直線與圓弧接合為一個物件 |
| `BR` | {{cmd:BREAK}} | 將物件切成兩段，或取出一段 |

## 標註

| 輸入 | 指令 | 功能 |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | 水平或垂直標註 |
| `DAL` | {{cmd:DIMALIGNED}} | 沿傾斜線標註 |
| `DRA` | {{cmd:DIMRADIUS}} | 標註半徑 |
| `DAN` | {{cmd:DIMANGULAR}} | 標註角度 |

## 區塊與圖層

| 輸入 | 指令 | 功能 |
|---|---|---|
| `B` | {{cmd:BLOCK}} | 由物件建立區塊 |
| `I` | {{cmd:INSERT}} | 放置區塊 |
| `LA` | {{cmd:LAYER}} | 開啟圖層 |

## 檢視與查詢

| 輸入 | 指令 | 功能 |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | 放大、縮小或縮放至全部（E） |
| `DI` | {{cmd:DIST}} | 量測距離與角度 |
| `LI` | {{cmd:LIST}} | 顯示物件的詳細資料 |
| `MA` | {{cmd:MATCHPROP}} | 將一個物件的外觀複製到其他物件 |

## 檔案

| 輸入 | 指令 | 功能 |
|---|---|---|
| `U` | {{cmd:UNDO}} | 取回上一個指令 |
| `SAVE` | {{cmd:SAVE}} | 儲存圖形 |
| `PLOT` | {{cmd:PLOT}} | 列印為 PDF |

## 按鍵

Ctrl（Mac 上為 Cmd）：Z 復原 · Y 取消復原 · S 儲存 · P 列印。F3 物件鎖點 · F8 正交 · F10 極軸。空白鍵或 Enter 重複上一個指令 · 滾輪縮放 · 按住滾輪拖曳平移

初次接觸繪圖？輸入 `TOUR` 可進行引導式的第一張圖，也可閱讀[入門](topic:getting-started)，或在[指令](topic:commands)中查看所有指令。從其他繪圖軟體轉換而來：參閱[從其他繪圖軟體轉換而來](topic:coming-from)與[指令對照表](topic:command-map)。
