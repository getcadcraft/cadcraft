---
title: 執行 LISP 常式
summary: CadCraft 的 LISP 可執行哪些內容（函式、提示、指令、物件、對話方塊、vla 物件）、如何在指令列輸入 LISP，以及目前尚未支援的功能。
keywords: lisp, 常式, lsp, dcl, 對話方塊, 指令, defun, entget, ssget, vla, vlax, vl, getpoint, 錯誤, 相容性, 可用功能
from: 571bc077
---

## 你將學到的

當你載入為其他 CAD 程式撰寫的 LISP 常式時，會發生什麼事：哪些部分會在 CadCraft 中執行，以及哪些目前尚未支援。

CadCraft 有自己的 LISP。它是依據公開的 AutoLISP 參考資料撰寫，而非取自任何其他程式，因此大多數為 AutoCAD 撰寫的常式都可以無需修改地執行。若某項功能缺少，指令列會說明該函式名稱，讓你能分辨這是 CadCraft 的缺口，還是常式本身的錯誤。

## 在指令列輸入 LISP

輸入以 `(` 開頭的運算式並按下 {{key:Enter}}：`(+ 1 2)` 會顯示 `3`。`!name` 會顯示變數的值。尚未結束的運算式會等待下一行。

在提示處，運算式會作為回答：在「指定半徑」提示時輸入 `(* 2 12.5)`，即得到 25。

## 可執行的項目

- **語言：** `defun`（區域變數放在 `/` 之後）、`setq`、`lambda`、`if`、`cond`、`while`、`repeat`、`foreach`、`progn`、`and`、`or`、`quote`、`apply`、`mapcar`、`eval`、`read`、`load`，以及 `*error*`（區域的 `*error*` 亦可）。名稱不區分大小寫；整數與實數有所區別，與預期相同（`(/ 7 2)` 的結果為 3）。
- **內建函式：** 數學、清單（`car`、`cdr` 及其系列、`assoc`、`nth`、`member`、`subst`、`append`…）、字串（`strcat`、`substr`、`strcase`、`wcmatch`…）、轉換（`rtos`、`atof`、`itoa`、`angtos`、`distof`、`cvunit`）、幾何（`polar`、`distance`、`angle`、`inters`）與檔案（`open`、`read-line`、`write-line`、`close`、`findfile`）。
- **指令：** `(defun c:NAME …)` 會建立一個指令。`(command …)` 與 `(command-s …)` 會執行 CadCraft 自身的指令，並以 `pause` 等待你的回答。
- **提示：** `getpoint`、`getcorner`、`getdist`、`getangle`、`getreal`、`getint`、`getstring`、`getkword`（搭配 `initget` 關鍵字）、`entsel`、`nentsel`，以及 `ssget`（`W`、`C`、`F`、`WP`、`CP`、`P`、`L`、`X`，可搭配篩選清單與 `-4` 測試）。
- **作為清單的物件：** `entget`、`entmod`、`entmake`（包括區塊）、`entdel`、`entlast`、`entnext`（區塊參照的屬性會依序以 ATTRIB 排在其後，接著是 SEQEND，因此屬性常式可以運作）、`handent`、選取集、`tblsearch` 與 `tblnext`、`layoutlist`、`regapp`，以及為 CadCraft 所具有設定而提供的 `getvar` 與 `setvar`。
- **對話方塊：** 搭配 `load_dialog`、`new_dialog`、`action_tile`、`set_tile`、`get_tile`、`start_list`、`start_dialog`、`done_dialog` 的 `.dcl` 檔案。按鈕、編輯框、清單方塊、彈出清單、切換、單選按鈕、列、欄與方框都會顯示。將對話方塊寫入暫存檔的常式也可以運作。
- **物件：** `vl-load-com`（不會做任何事；無需載入任何東西）、`vl-` 清單與字串函式、`vl-catch-all-apply`，以及 `vla-get-…` / `vla-put-…` 屬性、`vla-…` 方法，和對區塊、圖層與配置集合，以及模型空間與區塊定義執行的 `vlax-for`，並支援變體與安全陣列。

## 已測試的常式

CadCraft 的測試會執行為這些檢查撰寫的一組常式（選取篩選、提示、指令、物件、錯誤處理常式），以及一個使用者指名要求的常式：Lee Mac 的 DelBlocks，可透過其對話方塊以名稱指定，或點選區塊。CadCraft 也有自己的 {{cmd:DELBLOCKS}}，因此你不需要為此另外取得常式。

## 尚未實作

- `grread`（自行追蹤滑鼠）、反應器（`vlr-…`）、曲線函式（`vlax-curve-…`）、字典與擴充資料（`dictsearch`，以及 `entget` 與 `entmake` 中的 xdata），以及 Express Tools 的 `acet-…` 函式。
- 對話方塊中的圖片與投影片會顯示為空白框架。
- 執行其他程式、Windows 登錄檔，以及載入檔案以外的檔案：常式可以寫入與讀取它自己的暫存檔，這些檔案會保留到你關閉頁面為止。

當常式遇到以上任何項目時，指令列會顯示 "no function definition" 與該名稱，並提示 CadCraft 尚未實作該功能。

## 應避免的錯誤

- **與 CadCraft 指令同名的指令。** CadCraft 自身的指令會保留。請在指令列以 `(c:NAME)` 執行該常式的版本。
- **執行你不信任的 LISP。** 常式可以變更圖形中的任何內容，但無法變更圖形以外的任何東西：它無法存取你的檔案、其他網站或其他應用程式。
