---
title: 區塊屬性
summary: 查看並變更區塊參照所帶的數值，例如項目編號或製造商，並在另存副本時保留這些數值。
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, 標題欄, title block, 原位編輯, edit in place, 屬性編輯器, attribute editor, attdef, 定義屬性, bedit, 區塊編輯器, block editor, bclose, 屬性, attribute, attributes, attrib, 標籤, tag, 項目編號, item number, 數值, value, 隱藏, invisible, 固定, constant, 區塊, block, 屬性, properties, 清單, list, 設備標籤, equipment tag
from: 34d307c7
---

## 什麼是屬性

屬性是隨區塊參照一起移動的具名數值：例如設備標籤的項目編號、房間標籤的名稱、門的防火等級。區塊的定義說明它有哪些屬性（每個屬性都有一個**標籤**、一個**提示**、一個**預設值**，以及其文字的位置、大小與角度）。每個對該區塊的參照都帶有各自的數值。

有些屬性為**隱藏**：它們保存資料，例如製造商或型號，但從不繪製。有些為**固定**：對每個參照都相同，由區塊固定。

## 屬性從何而來

- 開啟的 DWG 與 DXF 檔案中的區塊會保留其屬性，以及每個參照的數值。
- 以{{cmd:INSERT}}與{{ui:File}}選項匯入的區塊會保留其屬性。請參閱[從檔案或程式庫插入](topic:insert-from-file-and-library)。
- 程式庫項目會以含屬性的區塊匯入：一個可見的項目編號，以及隱藏的項目資料。
- 自行建立的區塊：先以{{cmd:ATTDEF}}定義屬性（見下文），再於建立區塊時與其他物件一併選取。

## 為自己的區塊定義屬性

1. 繪製區塊的線條，例如房間標籤。
2. 選擇{{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}，或輸入 `ATT`，然後按{{key:Enter}}。
3. 歷程會顯示模式（`Invisible=No Constant=No Preset=No`）。輸入 `I`、`C` 或 `P` 可切換其中一項，設定正確後按{{key:Enter}}。隱藏的數值會保留但不繪製；固定的數值在每個參照中都相同；預設的數值在插入區塊時不會詢問。
4. 輸入標籤（例如 `ROOM_NO`：大寫、無空格）、提示（`Room number`）與預設值（`101`）。
5. 點選數值應放置的位置，並指定高度與旋轉。標籤會顯示在圖形上。
6. 以{{cmd:BLOCK}}建立區塊，同時選取線條與屬性定義。取代它們的參照會取得預設值；之後每次新的{{cmd:INSERT}}都會要求輸入數值。

選取的屬性定義會在{{ui:Properties}}中顯示{{ui:Tag}}、{{ui:Prompt}}、{{ui:Default}}與各項模式。

## 變更區塊：區塊編輯器

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}（{{cmd:BEDIT}}、`BE`）會單獨開啟一個區塊：輸入其名稱（或先選取一個參照）。頂端的列會顯示正在編輯哪個區塊。使用一般指令繪製、刪除並變更其物件，並新增或變更屬性定義。接著點選{{ui:Save block}}（或輸入{{cmd:BCLOSE}}與 `S`）：每個參照都會顯示變更，且一次{{key:Mod+Z}}即可全部復原。{{ui:Discard changes}}（`BCLOSE`、`D`）會讓區塊維持原狀。

當你新增、移除或變更屬性定義時，儲存也會同步所有參照：已輸入的數值會保留，新屬性會取得其預設值，被移除的屬性會消失，且每個屬性都會回到定義所指定的位置。歷程會說明更新了多少個參照。

## 在原位編輯標題欄（REFEDIT）

圖紙上的標題欄通常位於區塊之中。若要在不離開圖紙的情況下變更其線條或文字：

1. 選取標題欄，然後選擇{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}（或輸入{{cmd:REFEDIT}}）。
2. 其內容會在原位成為一般物件；其他所有內容會淡化且無法變更。
3. 變更、刪除或繪製：新物件會成為區塊的一部分。
4. 點選頂端列中的{{ui:Save the block}}（或輸入{{cmd:REFCLOSE}}與 `S`）。每個參照都會顯示變更，且一次{{key:Mod+Z}}即可復原整個編輯。{{ui:Discard}}會讓區塊維持原狀。

連結圖形、動態區塊，或在水平與垂直方向縮放不同的參照，無法在原位編輯：請使用{{cmd:BEDIT}}（或開啟連結圖形）。

:::note
在儲存圖形之前，請先在區塊編輯器中儲存或捨棄變更：若編輯器開啟時儲存檔案，檔案中的區塊會是編輯前的狀態。
:::

## 放置區塊時填入數值

1. 輸入 `I`，按{{key:Enter}}，輸入區塊名稱，再按{{key:Enter}}。
2. 點選要放置的位置。
3. CadCraft 會逐一詢問每個數值，例如 `Enter Item number (ITEM) <>`。輸入數值並按{{key:Enter}}，或按{{key:Enter}}保留角括號中顯示的預設值。

標示為預設的數值與固定的數值不會詢問，會採用其預設值。

## 查看並變更數值

1. 點選一個區塊參照。
2. 在右側面板的{{ui:Attributes}}下，每個標籤都有其數值。隱藏的數值會顯示 `hidden`。
3. 點選數值，輸入新值，然後按{{key:Enter}}。

圖形會立即顯示新數值。每次變更都是一個步驟：{{key:Mod+Z}}可將其復原。

**屬性編輯器。** 在具有屬性的參照上按兩下（或使用{{cmd:EATTEDIT}}）：會開啟{{ui:Edit attributes}}對話方塊，列出每個標籤、其提示與數值。輸入新數值；點選某一列即可變更該屬性在此參照中的{{ui:Height}}、{{ui:Rotation}}、{{ui:Width factor}}、{{ui:Justify}}、{{ui:Layer}}、{{ui:Color}}與{{ui:Invisible}}，且僅影響此參照。{{ui:Apply}}會保持對話方塊開啟；{{ui:OK}}會套用並關閉。每次{{ui:Apply}}或{{ui:OK}}都是一個復原步驟。

**在指令列中**，{{cmd:ATTEDIT}}會依序詢問每個數值：輸入新值，或按{{key:Enter}}保留原值。

## 變更屬性定義（BATTMAN、ATTSYNC）

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}（{{cmd:BATTMAN}}）會列出區塊的屬性：變更標籤、提示或預設值，勾選{{ui:Invisible}}、{{ui:Constant}}或{{ui:Preset}}，並上下移動屬性（決定詢問數值的順序）。勾選{{ui:Update the references (values kept)}}後，點選{{ui:Apply}}也會同步所有參照；重新命名的標籤會保留其數值。每次{{ui:Apply}}都是一個復原步驟。

{{cmd:ATTSYNC}}會手動使參照與其區塊定義同步：`S` 選取一個參照，`N` 指定區塊名稱，`A` 則處理所有區塊。數值會保留。

程式庫項目自身欄位（其 ID、版本、授權與標示來源）會顯示，但無法編輯，以確保檢查更新功能持續運作。其項目編號與數量則由你變更。

## 列出屬性

選取參照並輸入 `LI`（即{{cmd:LIST}}）。歷程會以 `TAG = value` 的形式顯示每個屬性，並在適用時加上 `(invisible)` 或 `(constant)`。

## 移動、旋轉與分解

- {{cmd:MOVE}}、{{cmd:ROTATE}}、{{cmd:SCALE}}與{{cmd:MIRROR}}會保留數值；文字會隨區塊移動，並保持可讀。
- {{cmd:EXPLODE}}會將可見屬性轉為含數值的一般文字。隱藏的屬性會被捨棄。

## 儲存

儲存的 DWG 與儲存的 DXF 都會保留每個屬性：每個區塊的定義（包括隱藏、固定與預設的屬性），以及每個參照的數值。其他 CAD 程式會將其讀取為一般的區塊屬性。

在 DXF R12 中，超過 255 個字元的數值會截為 255 個字元，歷程會說明此情況。

## 常見錯誤

- **數值沒有顯示在圖形上。** 該數值為隱藏，或為空白。隱藏的數值仍會顯示在右側面板中。
- **輸入的數值跑到指令列去了。** 請先點選右側面板中的數值欄位。
