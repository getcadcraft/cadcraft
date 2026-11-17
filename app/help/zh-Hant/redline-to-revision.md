---
title: 將標記轉為修訂
summary: 讀取 MarkupCraft 寫入的紅線套件，接受或拒絕每項變更，為已接受的變更加上修訂雲形與修訂紀錄，並儲存 MarkupCraft 可讀回的答覆檔案。
keywords: 紅線, redline, markup, 標記, 修訂, revision, 雲形, cloud, 修訂雲形, 修訂紀錄, revision log, 接受, accept, 拒絕, reject, markupcraft, 審閱, review, 紅線套件, 答覆, answers
from: cdb3fafe
---

審閱者在 MarkupCraft 中標記圖紙集，並傳送一個**紅線套件**（以 `.redline.json` 結尾的檔案）。在此可逐項檢視變更，已接受的變更會成為圖形上的修訂雲形。

## 逐項檢視變更

輸入{{cmd:REDLINE}}（`RDL`）並選擇套件。選擇：

- {{ui:列出}}：每項變更，包含其編號、狀態、圖紙、類型、提出者，以及其所寫的內容。
- {{ui:接受}}、{{ui:拒絕}}、{{ui:完成}}：輸入編號（`1,3-5`，或 `All`），以及答覆檔案的可選附註。{{ui:重新開啟}}會將變更恢復為開放。
- {{ui:構架}}：標記圖紙所顯示的圖形部分。點選兩個角點；按Enter鍵表示整個圖形。變更會依其在圖紙上的位置放置，因此這就是用來對齊的方式。
- {{ui:套用}}：在每個已接受或完成的變更周圍繪製修訂雲形（圖層 `REV-CLOUD`，附修訂字母），並在圖形右側繪製修訂紀錄：一個有格線的表格，列出已接受的內容與你的附註（圖層 `REV-LOG`）。為一個復原步驟。
- {{ui:儲存}}：寫入 `<project>-<revision>.redline-answers.json`。在 MarkupCraft 中開啟它，標記即會關閉：已接受、已拒絕或已完成，並以你的附註作為註解。

## 注意事項

CadCraft 絕不會遵循在套件中找到的指示，只會將其顯示給你。

已拒絕與開放的變更不會為圖形新增任何內容。套件在此電腦上讀取；不會上傳任何內容。

若已連線助理，它可以讀取套件、記錄決定，並使用工具 `redline_read`、`redline_decide`、`redline_apply` 與 `redline_answers` 套用它們；圖形變更會成為一個復原步驟，名稱為「助理：將標記轉為修訂」。
