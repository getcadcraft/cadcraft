---
title: 指令對照：輸入什麼
summary: CadCraft 的每個指令與其簡寫（由 A 到 Z 排列，取自程式本身），以及與其他製圖軟體不同的習慣。
keywords: 指令對照，指令，別名，簡寫，從其他軟體轉換，指令清單，輸入什麼，刪除，修剪，對應，差異
from: 3bdfd3e6
---

CadCraft 沿用其他製圖軟體常見的指令名稱與簡寫：輸入 `L` 畫直線、`TR` 修剪、`E` 刪除。因此多數指令不必另外記對照表：熟悉的名稱在這裡同樣適用。以下列出 CadCraft 的全部指令，直接由程式本身產生。按 {{key:Enter}} 會重複上一個指令；在指令列輸入 `HELP` 會印出同一份清單。

以下幾項與其他軟體不同，或尚未實作：

- **儲存**（{{cmd:SAVE}}、{{cmd:SAVEAS}}）在瀏覽器中會下載一份副本；在 CadCraft Studio 中則會寫入檔案。請參閱[從其他製圖軟體轉換過來](topic:coming-from)。
- **PLOT** 會產生 PDF（也可產生 PNG 與 SVG），並使用列印樣式表；沒有頁面設定管理員。
- **DIMSTYLE** 與 **PEDIT** 已實作；**PEDIT** 沒有「編輯頂點」選項（改用夾點完成）。
- **TABLE** 尚未實作；{{cmd:XREF}}、{{cmd:SPLINE}} 與 {{cmd:WBLOCK}} 已實作。
- 例行程式自行定義的指令（AutoLISP `C:NAME`）會在以 {{cmd:APPLOAD}} 載入後出現；這裡不會列出。

## 所有指令（398）

| 指令 | 簡寫 | 功能 |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | 以左鍵環繞旋轉 3D 視圖 |
| `ACCESS` | `AX` | 開啟或關閉無視覺繪圖模式：結果由螢幕閱讀器朗讀、繪圖區有鍵盤游標、捕捉音效與語音指令。 |
| `ALIASEDIT` |  | 在一個文字檔中編輯指令別名（熟悉的 L、*LINE 格式） |
| `ALIGN` | `AL` | 移動並旋轉物件，使來源點落在目標點上（一、二或三組點對），如需要也可縮放 |
| `ALIGNPANEL` | `ALP` | 開啟「對齊與分布」面板 |
| `ALIGNTO` |  | 將所選物件的左、中、右、上、中、下邊緣對齊，對齊基準可為選取集、第一個或最後一個選取的物件，或一個點 |
| `ANNOALLVISIBLE` | `ANNOALL` | 在每個比例下顯示註解物件，或僅在檢視區（或圖形）比例位於其清單中時顯示 |
| `ANNOSCALE` | `CANNOSCALE` | 設定圖形的註解比例：註解文字與標註會調整大小，使列印時大小一致 |
| `APPLOAD` | `AP` | 載入應用程式：LISP 例行程式（.lsp）及其對話框檔（.dcl）；啟動套件（AP） |
| `ARC` | `A` | 圓弧：三點、起點/圓心/端點、起點/圓心/角度、起點/圓心/長度、起點/端點/角度、起點/端點/方向、起點/端點/半徑、圓心/起點/端點、圓心/起點/角度、圓心/起點/長度、繼續 |
| `AREA` | `AA` | 以點或物件計算面積與周長；加入與減去可保留累計值（AA） |
| `ARRAY` | `AR` | 以列與行複製，或繞一個圓心環狀複製（AR） |
| `ARRAYASSOCIATIVITY` |  | 設定 ARRAY 指令建立的陣列是否可再編輯（1），或為一般副本（0） |
| `ARRAYCLOSE` |  | 結束編輯陣列的來源物件 |
| `ARRAYEDIT` |  | 變更使用「關聯」選項建立的陣列：數量、間距、來源物件、單一項目 |
| `ARRAYPATH` |  | 沿直線、圓弧、聚合線或其他曲線複製物件 |
| `ARRAYPOLAR` |  | 繞圓心點複製 |
| `ARRAYRECT` |  | 以列與行複製 |
| `ASBUILT` | `ASB` | ASBUILT 讀取施工人員量測的竣工點（CSV / TXT，由 EXPORTPOINTS 寫出），並與圖面中的點比較：在或不在公差內、未量測、多出的點。會將其標示於 AS-BUILT 圖層，並下載 CSV 報告。 |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | 定義屬性（區塊要求輸入值的標記），以放入區塊中（ATT） |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | 在指令列上依序編輯區塊參照的屬性值（Enter 保留原值） |
| `ATTSYNC` |  | 使區塊的參照與其屬性定義一致：新增的以預設值加入，移除的則刪除，位置與文字重設；保留數值 |
| `AUDIT` |  | 檢查開啟的圖形是否損壞：非有限數值、沒有尺寸的物件、遺失的圖層、區塊、樣式與線型、包含自身的區塊、共用 ID、損壞的標註與填滿。依類型列出發現的項目，修正前會詢問；修正為一個復原步驟。 |
| `AUNITS` | `ANGUNITS` | 角度的顯示與輸入方式：十進位度、度分秒，或如 N45°23'30"E 的方位角（ANGUNITS） |
| `AUTOCOMPLETE` | `AUTOC` | 開啟或關閉圖形自動完成，或列出圖形中的樣式目前建議的內容。 |
| `AUTOCONSTRAIN` |  | 在幾何已相當接近處加入重合、水平與垂直限制條件 |
| `AUTODIM` | `ADIM` | 依規則標註：總尺寸、沿邊的連續標註、開口、孔徑與格線間距，不重複已標註的部分。 |
| `AUTOSHEET` | `ASH` | 自動排版圖紙：選擇紙張與標準比例，並以標題與標題欄放置每個視圖。 |
| `BATTMAN` |  | 區塊屬性管理員：區塊屬性的順序、標記、提示、預設值與模式，然後更新其參照 |
| `BCLOSE` |  | 關閉區塊編輯器：儲存區塊或捨棄變更 |
| `BCONVERT` |  | BCONVERT 找出重複的幾何圖形並將其轉換為區塊參照。選取重複的物件：開放空間中其他與之相同的每組物件（經移動與任意角度旋轉者也算）都會被找出；若開啟「鏡像」與「縮放」，也會找出鏡像與其他大小的副本。為新區塊命名並指定基點；選取內容與每個副本都會成為對它的參照，各自保有自己的旋轉與縮放。或選擇「區塊」並指定既有區塊，以找出其物件的散落副本。除非「屬性」設為「忽略」，副本必須有相同的圖層、顏色、線型與線寬。鎖定圖層上的物件不受影響。一個復原步驟。 |
| `BEDIT` | `BE` | 區塊編輯器：編輯區塊的物件與屬性；BCLOSE 儲存（BE） |
| `BLEND` |  | BLEND：在兩條開放曲線的端點之間繪製雲形線，點選端點附近以接合。CONtinuity：Tangent 同時跟隨兩端的方向，Smooth 還會跟隨彎曲程度。 |
| `BLOCK` | `B`, `BMAKE` | 由物件建立區塊（它們會成為一個參照） |
| `BLOCKREPLACE` |  | BLOCKREPLACE：一個區塊的所有參照都改為另一個區塊的參照，位置、縮放與旋轉不變。兩個區塊都有的屬性值會保留。 |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE 顯示「區塊」面板，游標位於其篩選欄。面板以圖示（最近放置者優先）顯示每個區塊，可切換為清單或格狀；點選圖示或將其拖到圖形上，即可以 INSERT 放置區塊。在「程式庫」下可新增自己的 DWG 或 DXF 檔：其中的區塊會以圖示列出，放置時會複製到此圖形中。在 CadCraft Studio 中也可新增圖形資料夾，且會記住檔案與資料夾。 |
| `BOMEDIT` | `BOMCOLUMNS` | 材料明細表的欄、分組、排序、標題、合計與備註 |
| `BOMEXPORT` |  | 將材料明細表儲存為 .csv 檔 |
| `BOMTABLE` | `BOM` | 一個區域或整個圖形的即時材料明細表 |
| `BOMUPDATE` |  | 立即更新所有材料明細表，包括已凍結者 |
| `BOMZONE` | `BZONE` | 圖形中用於材料明細的具名區域：兩個角點、一個多邊形，或一個閉合物件的外框 |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY（BO）：點選閉合區域內的一點，取得圍繞它的閉合聚合線。圓弧仍為圓弧。Islands 也會描出其內部的區域。 |
| `BOX` |  | 方塊：兩個角點與一個高度（3D） |
| `BPARAMETER` | `BPARAM` | 尚未實作：為區塊加入參數（如 Visibility）。 |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | 區塊參數：帶公式的具名參數，以及單一區塊中的多個可見性參數。可在區塊編輯器中使用（將所選物件指派給某狀態），也可用於所選參照（其自身的數值與狀態）。 |
| `BREAK` | `BR` | 在兩點之間打斷直線、圓弧、圓或聚合線（BR） |
| `BREAKATPOINT` |  | 在一點將直線、圓弧或聚合線分成兩段 |
| `BREAKLINE` |  | 繪製帶有打斷符號的直線；其大小與超出端點的延伸量會被記住。 |
| `BREPLACE` |  | BREPLACE 將一個區塊替換為另一個。已選取：點選區塊參照並指定要改用的區塊。全部：指定區塊與其替代者，所有空間中及其他區塊內的每個參照都會更換。參照保留其位置、縮放、旋轉與圖層，以及兩個區塊都有的屬性值；新區塊沒有對應位置的值會被捨棄並列出。 |
| `BSEARCH` |  | BSEARCH 尋找區塊。名稱：區塊名稱的一部分，或含 * 與 ? 的樣式。屬性：參照屬性所含的值（或 TAG=值）。幾何：選取物件或一個區塊參照，列出形狀至少 85% 相似的區塊，最相似者優先；大小、旋轉與鏡像不計。在開放空間中找到的參照會被選取，供下一個指令使用。 |
| `BURST` |  | 分解區塊參照，並保留其屬性所述內容：每個值都會成為屬性所在圖層上的文字。 |
| `BVHIDE` | `BVH` | 在區塊編輯器中：隱藏目前可見性狀態中的物件。 |
| `BVSHOW` | `BVSH` | 在區塊編輯器中：顯示目前可見性狀態所隱藏的物件（以淡色顯示以便點選）。 |
| `BVSTATE` | `BVS` | 在區塊編輯器中，對具有可見性狀態的區塊：切換狀態，或新增、重新命名或刪除狀態。 |
| `CAL` |  | 計算長度或數字：+ − * / 與括號，可在任何地方輸入 |
| `CENTERLINE` | `CL` | 兩條直線之間的中心線：位於其中間，或在相交時沿分角線（CL） |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | 圓心標記：圓或圓弧圓心處的十字，中心線延伸至略超出圓（CM） |
| `CHAMFER` | `CHA` | 削切兩直線之間的角（D 兩個距離，A 長度與角度，P 聚合線的每個角） |
| `CHSPACE` |  | CHSPACE：透過視埠在圖紙與模型之間移動物件。它們會被縮放與旋轉，使兩側看起來一致。在圖紙上會移到模型；工作於視埠中（MSPACE）時則會移到圖紙。 |
| `CIRCLE` | `C` | 圓心與半徑、直徑、2 點或 3 點 |
| `CLASS` |  | 將所選物件放入一個類別；若未選取任何物件，則設定目前類別（? 列出） |
| `CLASSES` | `CLS` | 「類別」面板：類別可跨圖層排序物件；可顯示、隱藏與設定其樣式，並可依檢視區覆寫（CLS） |
| `COMMANDLINE` | `CMDLINE` | 停駐或浮動指令列，使其成為單行，設定其歷程行數，或開啟歷程（F2） |
| `COMPARESETTINGS` | `CMPSET` | 比較標註樣式、文字樣式、圖層、圖紙或單位：比較本圖形中的兩者，或本圖形與另一個開啟的圖形，並將某個數值複製過去。 |
| `CONSTRAINTBAR` | `CBAR` | 顯示或隱藏限制條件列（Showall / Hideall，或依物件） |
| `COPY` | `CO`, `CP` | 複製物件，點選幾次就複製幾次 |
| `COPYBASE` |  | 以你指定的基點將物件複製到剪貼簿 |
| `COPYCLIP` |  | 將物件複製到剪貼簿（Ctrl+C）；PASTECLIP 放置它們 |
| `COUNT` | `BCOUNT` | 計數區塊參照：點選一個以選取並計數其區塊的每個參照 |
| `COUNTTABLE` |  | 放置區塊計數表格 |
| `CREDITS` |  | 將程式庫的來源標示以表格放入圖形。再次執行可依目前圖形中的項目更新表格。 |
| `CURSORSIZE` |  | 十字游標的大小：100 會橫跨整個圖形（設定 › 游標 › 全螢幕） |
| `CUTCLIP` |  | 將物件剪下到剪貼簿（Ctrl+X）：先複製，然後刪除 |
| `CYLINDER` | `CYL` | 圓柱：圓心、半徑與高度（3D） |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | 將區塊、其屬性與物件特性以表格列在圖形中或 CSV 檔案中 |
| `DATALINK` | `DL` | 來自 CSV 檔的表格，會記住該檔案，因此可再次讀取 |
| `DATALINKUPDATE` | `DLU` | 重新讀取資料連結的檔案並重新填入其表格 |
| `DCALIGNED` | `DCALI` | 尺寸限制條件：兩點之間、一點與一線，或兩線之間的實際距離 |
| `DCANGULAR` | `DCANG` | 尺寸限制條件：兩線之間的角度，或圓弧的角度 |
| `DCCONVERT` |  | 將繪製在可限制幾何上的標註轉換為尺寸限制條件 |
| `DCDIAMETER` | `DCDIA` | 尺寸限制條件：圓或圓弧的直徑 |
| `DCDISPLAY` |  | 在圖形上顯示或隱藏尺寸限制條件 |
| `DCHORIZONTAL` | `DCHOR` | 尺寸限制條件：水平距離 |
| `DCLINEAR` | `DCLIN` | 尺寸限制條件：水平或垂直距離，於放置位置量測 |
| `DCRADIUS` | `DCRAD` | 尺寸限制條件：圓或圓弧的半徑 |
| `DCVERTICAL` | `DCVER` | 尺寸限制條件：垂直距離 |
| `DELBLOCKS` |  | 刪除區塊：每個參照（包括巢狀者，所有圖紙上）及其定義 |
| `DELCONSTRAINT` | `DELCON` | 移除所選物件的每個限制條件（幾何與尺寸） |
| `DELOPENING` |  | 將門或窗從牆上移除。 |
| `DESCRIBE` | `DESC` | 說明圖形內容：物件數量、種類、大小，以及目前選取了什麼。 |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | 清除選取（Esc） |
| `DETAILS` | `DET` | 貴公司自有的詳圖，依所繪內容找出：尋找、新增區塊、列出、移除，並開啟或關閉建議。 |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | 由文字繪製圖表：Mermaid 流程圖、PlantUML 元件圖、D2、由-至清單或 draw.io XML，以可編輯的區塊與連接器呈現 |
| `DIMALIGNED` | `DAL`, `DIMALI` | 兩點之間的實際距離 |
| `DIMANGULAR` | `DAN`, `DIMANG` | 兩線之間的角度、圓弧的角度，或三點決定的角度 |
| `DIMARC` | `DAR` | 弧長標註：沿圓弧的距離，附圓弧符號（DAR） |
| `DIMASZ` |  | 標註設定：箭頭大小 |
| `DIMBASELINE` | `DBA`, `DIMBASE` | 自同一基線堆疊的標註 |
| `DIMBREAK` | `DBREAK` | 在標註線與延伸線與其他物件交叉處打斷（自動）、在兩點之間（手動），或移除打斷 |
| `DIMCONSTRAINT` | `DCON` | 尺寸限制條件：線性、對齊、角度、半徑、直徑、轉換 |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | 連續標註，每個都從上一個的端點開始 |
| `DIMDEC` |  | 標註設定：小數位數 |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | 圓弧或圓的直徑 |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | 將標註與其所依附的物件脫離（DDA） |
| `DIMEDIT` | `DED`, `DIMED` | 變更標註文字（常用、新文字、旋轉），或傾斜延伸線（Oblique） |
| `DIMEXE` |  | 標註設定：超出標註線的延伸 |
| `DIMEXO` |  | 標註設定：距原點的偏移 |
| `DIMGAP` |  | 標註設定：文字周圍的間隙 |
| `DIMINSPECT` |  | 檢驗標註：數值外的框，附上標籤與零件的檢查頻率 |
| `DIMJOGGED` | `DJO`, `JOG` | 折線半徑標註：圓心遠時，從較近的點畫出的半徑（DJO） |
| `DIMJOGLINE` | `DJL` | 在線性或對齊標註線上加入折斷符號，表示距離未依比例繪製（DJL） |
| `DIMLINEAR` | `DLI`, `DIMLIN` | 水平或垂直距離（R 為任意角度） |
| `DIMLUNIT` |  | 標註設定：長度格式（1 科學記號，2 小數，3 工程，4 建築，5 分數） |
| `DIMORDINATE` | `DOR`, `DIMORD` | 座標標註：點距 UCS 原點的 X 或 Y 距離，以引線表示（DOR） |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | 在所選標註上覆寫標註變數而不變更其樣式；Clear 會恢復樣式（DOV） |
| `DIMRADIUS` | `DRA`, `DIMRAD` | 圓弧或圓的半徑 |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | 將標註的點重新綁定到物件，使其在物件移動時跟隨並重新量測（DRE） |
| `DIMSCALE` |  | 標註設定：整體比例（尺寸 × 此值） |
| `DIMSPACE` |  | 平行標註之間的均等間距，自基準標註量測（0 為對齊，Auto 為文字高度的兩倍） |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | 建立、變更、設為目前、刪除、套用與比較具名標註樣式（對話方塊；指令列上為 -DIMSTYLE） |
| `DIMTEDIT` | `DIMTED` | 將標註文字移到標註線的左、右或中央，或將其翻轉 |
| `DIMTEXTUNIT` | `DTU` | 標註文字以 mm、cm、m 或 km 表示，或以圖形本身的單位：所選標註，否則為新標註（DTU） |
| `DIMTXT` |  | 標註設定：文字高度 |
| `DIST` | `DI` | 兩點之間的距離與角度 |
| `DISTRIBUTE` |  | 將所選物件平均分布，左右或上下：中心之間等距，或間隙相等；外側兩個保持不動 |
| `DIVIDE` | `DIV` | DIVIDE（DIV）：將直線、圓弧、圓、聚合線、雲形線或橢圓等分為相等部分的標記。以點呈現，或以 Block 在每個標記處放置區塊。 |
| `DOCUMENTS` | `DOCS` | 開啟「文件」面板：為專案資料夾簽出與簽入圖形、修訂、發行狀態與核准 |
| `DOOR` | `DR` | 在牆上放置門。點選的一側即為門開啟的方向。 |
| `DRAWORDER` |  | 變更繪製順序：將物件移到最前、送到最後，或置於其他物件之上或之下。 |
| `DUPLICATE` | `DUP` | 隨游標移動的副本：點選以放下（Ctrl+D） |
| `DWGPROPS` | `DRAWINGPROPS` | 圖形的屬性：標題、作者等，以及你自己的名稱與值配對 |
| `DXFOUT` |  | 下載 DXF R12 格式的圖形（儲存則保留其自身格式） |
| `EATTEDIT` | `DDATTE` | 編輯區塊參照的屬性：值、文字與特性，一次一個屬性 |
| `ELLIPSE` | `EL` | 軸端點與另一半軸 |
| `ERASE` | `E`, `DELETE` | 移除物件 |
| `EXPLODE` | `X` | 將聚合線、區塊與標註分解為其組成部分 |
| `EXPORT` | `EXP` | 將圖形副本儲存為附加元件可寫出的檔案類型 |
| `EXPORT3D` | `3DEXPORT` | 匯出 3D 模型：GLB、OBJ 或 STL |
| `EXPORTPOINTS` | `EXPPTS` | 將點，以及以一個屬性作為描述的區塊插入點，寫入 CSV 或 TXT 檔（PNEZD、PENZD 或 XYZ），供 BIM 與測量軟體使用 |
| `EXTEND` | `EX` | 延長物件以接觸其他物件：點選靠近端點處，拖過數個物件，或 Shift+點選以修剪 |
| `EXTRIM` |  | EXTRIM：選取一條修剪邊，然後選取一側。所有與該邊交叉的物件會在該側被修剪。移動游標時會顯示將被去除的部分。 |
| `EXTRUDE` | `EXT` | 將閉合的 2D 物件拉伸為實體（3D） |
| `FIELD` |  | 在文字、表格儲存格或屬性中放置欄位：日期、檔名、圖紙編號、圖形屬性、物件面積或長度，或公式 |
| `FILLET` | `F` | 圓角或直角化兩物件之間的角（R 半徑，P 聚合線的每個角，M 數個） |
| `FIND` |  | 在文字、屬性值與標註文字中尋找並取代字詞 |
| `FLATTEN` |  | 將所選物件的高度（Z）與厚度設為 0，所使用的區塊中亦然。 |
| `FLOOR` |  | 選擇要繪製的樓層、新增一層，或將所選取內容移動或複製到該層。 |
| `FLOORLAYERS` |  | 將樓層轉換為名為 Floor-Layer 的圖層，用於傳送給沒有樓層的對象檔案。 |
| `FLOORS` | `FLR` | 開啟「樓層」面板：在一個模型空間中堆疊樓層。 |
| `GCCOINCIDENT` |  | 限制條件：兩點重合，或一點保持在物件上 |
| `GCCOLLINEAR` |  | 限制條件：兩線保持在同一直線上 |
| `GCCONCENTRIC` |  | 限制條件：兩圓或圓弧共用圓心 |
| `GCEQUAL` |  | 限制條件：兩線長度保持相同，或兩圓／圓弧半徑相同 |
| `GCFIX` |  | 限制條件：一點或整個物件保持原位 |
| `GCHORIZONTAL` |  | 限制條件：一線（或兩點）保持水平 |
| `GCPARALLEL` |  | 限制條件：兩線保持平行 |
| `GCPERPENDICULAR` |  | 限制條件：兩線保持直角 |
| `GCSYMMETRIC` |  | 限制條件：兩點、兩線或兩圓以一線為對稱軸互為鏡像 |
| `GCTANGENT` |  | 限制條件：一線與一圓或圓弧（或兩者）保持相切 |
| `GCVERTICAL` |  | 限制條件：一線（或兩點）保持垂直 |
| `GDSIN` | `GDS` | 檢視 IC 佈局（GDSII 串流檔）：每個圖層與資料類型都會成為平面的圖形圖層，單位為使用者單位；僅供檢視與量測（實驗性） |
| `GEOMCONSTRAINT` | `GCON` | 幾何限制條件：水平、垂直、平行、相切、重合…… |
| `GLBOUT` |  | 將 3D 模型匯出為 GLB（glTF） |
| `GRADIENT` | `GD` | 以一或兩種顏色的漸層填滿區域 |
| `GRIDMOVE` | `GM` | 移動格線，並帶動掛在其上的內容：牆延伸，柱、圓泡與標籤移動，標註隨之跟隨。 |
| `GROUP` | `G` | GROUP（G）：為所選物件指定共用名稱。之後點選其中一個即會全部選取。名稱處按 Enter 則建立未命名群組。 |
| `GROUPEDIT` |  | GROUPEDIT：變更群組。選取其中一個物件或指定其 Name，然後 Add 或 Remove 物件、REName 重新命名、變更 Description，或設定點選是否整組選取。 |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | 以實心填滿或圖樣填滿區域：在區域內點選，或選取閉合物件（H） |
| `HATCHEDIT` | `HE` | 變更填滿：圖樣、比例、角度、原點，以及其與邊界的連結。 |
| `HATCHGENERATEBOUNDARY` | `HGB` | 由填滿重新產生邊界聚合線，可連結或不連結 |
| `HATCHTOBACK` |  | 將所有填滿送到其他物件之後。 |
| `HELP` | `?` | 本清單 |
| `HIDEOBJECTS` |  | 隱藏所選物件，直到 UNISOLATEOBJECTS。不會隨圖形儲存。 |
| `HISTORY` | `HIST` | HISTORY（HIST）：此圖形的版本，包括 Studio 儲存時保留於此電腦的副本，以及雲端版本，可開啟、還原，並以彩色顯示變更處進行比較。 |
| `ID` |  | 點的座標 |
| `IMAGE` | `IM` | 提供 CadCraft 圖形所使用的圖片檔（DWG 僅儲存其位置）。 |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | 從檔案放置圖片（PNG 或 JPEG）。 |
| `IMAGECLIP` | `ICL` | 將圖片裁切為矩形或多邊形，或移除其裁切。 |
| `IMPORT` | `IMP` | 將附加元件可讀取的檔案類型匯入此圖形 |
| `INSERT` | `I`, `DDINSERT` | 放置區塊（S 縮放，R 旋轉）；F 從 DWG/DXF 檔，L 從程式庫 |
| `INTERSECT` | `IN` | 僅保留實體的共同部分（3D），或 2D 區域共有的面積 |
| `ISODRAFT` |  | ISODRAFT：等角製圖開啟或關閉，或直接在左、上或右平面上繪製。開啟時，正交與極軸追蹤會沿平面的兩個軸，格線以等角繪製，且 ELLIPSE 具有 Isocircle 選項。 |
| `ISOLATEOBJECTS` | `ISOLATE` | 只顯示所選物件；此空間中的其他物件都會隱藏，直到 UNISOLATEOBJECTS。不會隨圖形儲存。 |
| `ISOPLANE` |  | ISOPLANE：選擇要繪製的等角平面：左、上或右。按 Enter 切換到下一個，等角製圖開啟時，F5 亦同。 |
| `JOIN` | `J` | 將端點相接的直線、圓弧與開放聚合線接合為一條聚合線；同一直線上的直線接合為一條直線（J） |
| `LASER` | `LASERCUT` | 開啟「雷射」面板：將圖層傳送至雷射切割機或雕刻機（GRBL G-code） |
| `LASSOMODE` |  | 按住並拖曳會繪製套索（1）或矩形（0） |
| `LAYDEL` |  | 刪除一個圖層及其上所有物件（於模型、圖紙與區塊中） |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | 開啟「圖層管理員」：所有圖層在一個表格中 |
| `LAYERPANEL` |  | 顯示圖層面板 |
| `LAYFRZ` |  | 凍結每個被點選物件所在的圖層 |
| `LAYGROUP` | `LG` | 將圖層分組至「圖層」面板的資料夾中。 |
| `LAYISO` |  | 隔離所選物件的圖層（其他圖層全部關閉） |
| `LAYLOCKFADE` |  | 設定鎖定圖層上的物件淡化程度，以及點選是否可選取它們。 |
| `LAYMCUR` |  | 將所點選物件的圖層設為目前圖層 |
| `LAYMRG` |  | 合併圖層：其物件移至目標圖層，被合併的圖層隨即刪除 |
| `LAYOFF` |  | 關閉每個被點選物件所在的圖層 |
| `LAYON` |  | 開啟所有圖層 |
| `LAYOUT` | `LO`, `NEWLAYOUT` | 新圖紙，附標題欄與視埠 |
| `LAYTHW` |  | 解凍所有圖層 |
| `LAYUNISO` |  | 重新開啟 LAYISO 關閉的圖層 |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | 將以舊越南文字型（TCVN3 / ABC 字型，如 .VnTime，以及 VNI 字型，如 VNI-Times）輸入的文字轉換為 Unicode。此類文字原本已正確顯示；此指令會永久改寫，並顯示數量，且為一個復原步驟。 |
| `LENGTHEN` | `LEN` | 拉長或縮短直線、圓弧與聚合線：依長度、百分比、總長，或拖曳（LEN） |
| `LIBRARY` | `LIB` | 程式庫面板：放置項目、檢查更新、來源標示 |
| `LIMITS` |  | 設定圖形界限：ON、OFF，或左下與右上角點。界限開啟時，界限外的點會被拒絕 |
| `LINE` | `L` | 直線段，每段為獨立物件 |
| `LINETYPE` | `LT`, `CELTYPE` | 新物件取得的線型（隨圖層、隨區塊，或指定名稱） |
| `LINKVIEWS` | `SYNCVIEWS` | 同時平移與縮放所有窗格（分割畫面），以比較兩個圖形或修訂版本 |
| `LISPEDIT` | `VLIDE` | LISPEDIT（或 VLIDE）開啟 LISP 編輯器：用於撰寫、載入與試執行例行程式的視窗。Load into the drawing 會讀取每個表達式（與 APPLOAD 載入檔案相同），並建立其指令。Run selection 執行所選表達式，或游標所在的表達式。主控台顯示例行程式輸出與每個錯誤及其行號。輸入時會標示相符的括號，Enter 會為新行縮排。New、Open 與 Save 作用於 .lsp 檔。文字旁的清單顯示例行程式定義的函式、它呼叫但本 LISP 尚未具備的函式，以及它擁有的所有函式。此視窗不會阻擋繪圖，因此例行程式可要求點；Stop 或 Esc 可結束執行中的例行程式。 |
| `LIST` | `LI`, `LS` | 在歷程中描述物件 |
| `LTSCALE` | `LTS` | 圖形的線型比例（每個虛線與間隔都會乘以此值） |
| `LWDISPLAY` | `LWT` | 在螢幕上顯示或隱藏線寬（狀態列的 LWT 按鈕） |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | 新物件取得的線寬（隨圖層、隨區塊、預設，或 mm） |
| `MAPLAYERS` | `ML`, `GEOMAP` | 模型空間下的地圖圖層：圖形的座標系統、圖磚、WMS、WMTS、ArcGIS、圖片 |
| `MASSPROP` |  | MASSPROP：區域與閉合物件的截面特性：面積、周長、形心、慣性矩與慣性積、迴轉半徑與主軸。直線與圓弧為精確值。可將報告寫入文字檔。 |
| `MATCHPROP` | `MA`, `PAINTER` | 符合特性：將一個物件的圖層、顏色等複製到其他物件（MA） |
| `MEASURE` | `ME` | MEASURE（ME）：沿直線、圓弧、圓、聚合線、雲形線或橢圓，每隔指定長度做一個標記，從最接近點選處的端點開始。以點呈現，或以 Block 在每個標記處放置區塊。 |
| `MEASUREGEOM` | `MEA` | 量測距離、半徑、角度或面積（MEA） |
| `MINSERT` |  | MINSERT：一次以列與行放置區塊。每個都是獨立的參照，因此可移動或刪除其中任一個。 |
| `MIRROR` | `MI` | 以一線為軸鏡像物件 |
| `MLEADER` | `MLD`, `MLEAD` | 多重引線：箭頭、引線與附註，合為一個物件（MLD） |
| `MLEADERALIGN` | `MLA` | 使多重引線沿一個方向與其中一個對齊，間距相等，或分布於兩點之間（MLA） |
| `MLEADERCOLLECT` | `MLC` | 將數個多重引線合併為一個：其區塊排成列或行，或其附註上下排列（MLC） |
| `MLEADEREDIT` | `MLE` | 為多重引線加入或移除引線；在文字與區塊之間切換其內容（MLE） |
| `MLINE` |  | 同時繪製平行線，並在轉角處接合。 |
| `MOVE` | `M` | 以基點與第二點移動物件 |
| `MSPACE` | `MS` | 透過開啟圖紙的視埠在模型上作業（或在視埠內按兩下）。 |
| `MTEXT` | `MT`, `T` | 段落文字：拖曳寬度，然後原地輸入；Enter 開始新段落（T） |
| `MVIEW` | `MV` | 在配置上放置一個模型視埠 |
| `NAMEDVIEW` | `NV`, `VIEWS` | 命名視圖：將螢幕上的視圖（或一個視窗）以名稱儲存，並可返回（NV） |
| `NCOPY` |  | 將物件從區塊參照或外部參考圖形複製到圖形中，而不分解它。 |
| `NEARBY` |  | 依距離由近到遠說明游標附近的內容，並標示距離與方位。 |
| `NEW` |  | 開始新圖形 |
| `OBJECTSCALE` | `OBJSCALE` | 註解文字與標註的註解比例：新增比例、刪除一個、加入目前比例，或列出（每個視埠依其自身比例的大小顯示） |
| `OBJOUT` |  | 將 3D 模型匯出為 OBJ |
| `OFFSET` | `O` | 指定距離的平行複製 |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE：OFFSET 如何封閉聚合線外側轉角的間隙。0 延伸線段，1 加入圓弧，2 加入直線切割。保留於此工作階段。 |
| `OLELIST` | `OLES` | 列出圖形所含的 OLE 物件，並將其圖片副本放到你選擇的位置 |
| `OPEN` |  | 開啟此電腦中的 DWG 或 DXF |
| `OPENIN3D` |  | 在新分頁中以 3D 建模應用程式開啟此圖形（不會上傳任何內容） |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | 開啟物件鎖點選單：選擇要開啟的鎖點。也可在狀態列的「鎖點」上按右鍵。 |
| `OVERKILL` |  | 刪除重複物件，並在公差內合併重疊或首尾相接的直線與圓弧。 |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | 「參數」面板：使用者參數與尺寸限制條件於同一表格中 |
| `PARTSLIST` | `PLIST` | 列出從程式庫放置的每個標準零件與型鋼的零件清單表格 |
| `PASTEAREA` | `PAREA` | 以真實大小將 MarkupCraft 中複製的區域（複製區域）貼為圖片。 |
| `PASTEBLOCK` |  | PASTEBLOCK：將複製的內容貼為一個區塊。區塊會有自己的名稱；RENAME 可改為你指定的名稱。 |
| `PASTECLIP` |  | 貼上剪貼簿：它會跟隨游標，點選放置位置（Ctrl+V） |
| `PASTEORIG` |  | 將剪貼簿貼到其複製來源的座標（Ctrl+Shift+V） |
| `PDF` |  | 提供 CadCraft 圖形底圖所使用的 PDF 檔 |
| `PDFADJUST` |  | 淡化、調整對比、單色或關閉 PDF 底圖 |
| `PDFATTACH` | `PDFATT` | 將 PDF 頁面附加為底圖（PDFATTACH） |
| `PDFCLIP` |  | 將 PDF 底圖裁切為矩形或多邊形 |
| `PDFIMPORT` | `PDFIM` | 將 PDF 頁面的線條、填滿與文字轉換為圖形物件（PDFIMPORT） |
| `PDFLAYERS` |  | 開啟或關閉 PDF 底圖的圖層 |
| `PEDIT` | `PE` | 編輯聚合線：封閉、開放、接合、寬度、擬合曲線、雲形曲線、取消曲線、線型生成、反轉；直線、圓弧與雲形線可轉為聚合線 |
| `PHOTOSKETCH` | `PSK` | 將紙上手繪草圖的照片轉為依比例的直線與圓弧，校正透視，並為每種筆色指定獨立圖層。 |
| `PICKSTYLE` |  | PICKSTYLE：選取群組中的一個物件時，是否選取整個群組（1，起始設定）或僅該物件（0）。保留於此工作階段。 |
| `PLAN` |  | 旋轉視圖，使 UCS X 軸（目前 UCS、已儲存的 UCS 或世界）在螢幕上呈水平。圖形中的任何內容都不會移動。 |
| `PLINE` | `PL` | 由直線與圓弧段組成的聚合線 |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | 列印為 PDF：配置，或以比例列印模型 |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | 列印樣式表：設定每種顏色列印的效果（顏色、黑色、灰色、墨水、線寬）；隨圖形儲存（STYLESMANAGER） |
| `POINT` | `PO` | 點物件 |
| `POINTCLOUD` | `PC` | 已附加的點雲：切片、高度、厚度、顏色、大小、可見、縮放、分離 |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | 附加點雲（LAS、LAZ、XYZ、PTS）於圖形之下 |
| `POLARANG` |  | 極軸追蹤的角度步進（以度為單位：90、45、30、22.5、15 …） |
| `POLYGON` | `POL` | 正多邊形 |
| `PRESSPULL` |  | 推或拉實體的一個面（3D） |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | 開啟「特性」面板（也可按 Ctrl+1，或在物件上按兩下） |
| `PROPERTIESCLOSE` | `PRCLOSE` | 將「特性」面板收合至視窗邊緣 |
| `PSPACE` | `PS` | 離開你正在使用的視埠，回到圖紙（或在視埠外按兩下）。 |
| `PUBLISH` | `-PUBLISH` | 將多個或所有圖紙列印為一個 PDF（每張圖紙一頁與一個書籤） |
| `PURGE` | `PU` | 移除未被使用的區塊定義 |
| `QDIM` |  | 快速標註：一次標註數個物件（連續、基線、交錯、座標、半徑或直徑） |
| `QPMODE` | `QP` | 游標處的快速特性開啟或關閉 |
| `QSELECT` | `QS` | 快速選取：圖層、顏色、大小或名稱相符的某類型所有物件（QS） |
| `RASTERSNAP` |  | 開啟或關閉對掃描圖紙線條的捕捉。 |
| `RAY` |  | 射線：從一點出發的參考線，僅一端無限延伸。 |
| `RECOVER` |  | 開啟損壞的 DXF 或 DWG：跳過無法讀取的部分而不拒絕檔案，說明略過了什麼，然後如 AUDIT 般檢查並修復圖形。 |
| `RECTANG` | `REC`, `RECTANGLE` | 由兩角點構成的閉合聚合線 |
| `REDLINE` | `RDL` | 紅線轉修訂：讀取 MarkupCraft 紅線套件，接受或拒絕每項變更，將已接受者加上雲形標示與修訂紀錄，並儲存回覆檔（RDL） |
| `REDO` |  | 重做剛才復原的動作 |
| `REFCLOSE` |  | 完成就地編輯區塊：儲存，或捨棄變更 |
| `REFEDIT` |  | 就地編輯區塊（在其參照所在處），其餘圖形淡化；REFCLOSE 儲存 |
| `REGEN` | `RE` | 由圖形重建此分頁中繪製的內容 |
| `REGENALL` | `REA` | 重建每個分頁、窗格與開啟的圖形中繪製的內容 |
| `REGION` | `REG` | REGION（REG）：由閉合物件，或由首尾相接形成迴圈的直線、圓弧與聚合線製作平面區域。UNION、SUBTRACT 與 INTERSECT 隨後合併區域，MASSPROP 提供其截面特性。 |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | 登錄數個掃描：依點選的點對或目標將其放入同一框架，以 ICP 精修，匯出一個 LAS 或 E57 |
| `REINIT` |  | 重新載入別名檔 |
| `RENAME` | `-RENAME`, `REN` | 重新命名圖層或區塊（所有物件或參照隨之更新） |
| `REVCLOUD` | `RC` | 修訂雲形：圍繞矩形、多邊形、自由路徑或物件（RC） |
| `REVOLVE` | `REV` | 將閉合的 2D 物件繞軸旋轉為實體（3D） |
| `ROTATE` | `RO` | 繞基點旋轉物件 |
| `SAMPLES` | `SAMPLE` | 開啟 CadCraft 的範例圖形之一（建築套件、竣工圖），供學習參考 |
| `SAVE` | `QSAVE` | 以其格式（DWG 或 DXF）下載圖形 |
| `SAVEAS` |  | 以 DWG 或 DXF 下載圖形：由你選擇 |
| `SAYSEL` |  | 說出所選內容，每個物件一句。 |
| `SCALE` | `SC` | 繞基點縮放物件 |
| `SCALELISTEDIT` | `SCALELIST` | 新增、編輯與刪除圖形自己的比例；它們會出現在視埠與列印比例清單中，並儲存於檔案（SCALELIST） |
| `SCANALIGN` | `SCL` | 將掃描圖紙對齊到兩點：移動、旋轉，如你選擇，也可縮放。 |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | 插入掃描圖：PNG、JPEG 或 TIFF（多頁檔的一頁或全部頁面），或為圖片的 PDF 頁面。 |
| `SCANCLEAN` | `SCC` | 將掃描圖紙轉為黑白並去除雜點。 |
| `SCANCROP` | `SCR` | 將掃描圖紙裁切至一個視窗。 |
| `SCANDESKEW` | `SCD` | 找出掃描圖紙長線條的傾斜角度，並在你接受後將圖紙轉正。 |
| `SCANERASE` | `SCE` | 刪除掃描圖紙的一個區域：矩形、多邊形或套索。 |
| `SCANINFO` | `SCI` | 顯示掃描圖紙的原始檔案及其後採取的步驟。 |
| `SCANSCALE` | `SCS` | 縮放掃描圖紙：在其上點選兩點，並輸入它們之間的實際距離。 |
| `SCANTRACE` | `SCT` | 將掃描圖紙描繪為新圖層上的直線與圓弧，公差由你設定。文字與填滿仍為點陣圖。 |
| `SELECT` |  | 立即選取物件（供下一個指令使用 P，即「上一個」） |
| `SELECTALL` | `AI_SELALL` | 選取此分頁上可編輯的所有物件（Ctrl+A） |
| `SELECTSIMILAR` | `SIM` | 選取與你點選者相似的所有物件：相同類型、圖層與顏色（SIM） |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | 顯示「圖紙集」面板：來自多個圖形的圖紙，編號後合併為一個 PDF。 |
| `SHORTCUTS` | `KEYS` | 為任何指令指定自己的按鍵（Ctrl 或 Alt 加字母，或一個未使用的功能鍵），保存於此瀏覽器或桌面應用程式中。 |
| `SHXFONTS` | `SHX` | 從資料夾或檔案提供 CadCraft SHX 字型，使指定它們的文字樣式以其繪製（列出、移除、反轉） |
| `SKETCHFIX` | `SKF` | 徒手繪製筆劃；每個會變成乾淨的直線、圓、圓弧、矩形或聚合線，並與其他的對齊接合。 |
| `SKETCHLIVE` | `SKL` | 以筆繪製：每筆在抬筆時成為精確的直線、圓、圓弧或矩形，貼齊圖形，並可在上方輸入其大小。 |
| `SPLINE` | `SPL` | 以點（或控制多邊形）繪製雲形線，或將聚合線轉為雲形線 |
| `SPLINEDIT` | `SPE` | 編輯雲形線：擬合點、控制點與權重，開啟或封閉、反轉，或轉換為聚合線 |
| `SPLIT` |  | 將繪圖區分割為窗格（在模型上如同 VPORTS；在圖紙上亦可） |
| `STEELMEMBER` | `SMEMBER` | 由標準斷面建立的 3D 鋼構件：兩點（樑）或一個基點與高度（柱） |
| `STLOUT` |  | 將 3D 模型匯出為 STL（毫米） |
| `STRETCH` | `S` | 拉伸：拖曳交叉視窗框住端點以移動；內部的部分會移動，其餘保持不動（S） |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | 文字樣式：新文字所採用的字型、高度、寬度與傾斜（對話方塊；指令列上為 -STYLE） |
| `SUBTRACT` | `SU` | 從其他實體中減去實體（3D），或從區域中減去 2D 區域 |
| `SWBOUT` | `SWMACRO` | 下載 SolidWorks 巨集（.swb），以單一受限草圖重建模型 |
| `SWEEP` |  | 沿路徑（直線、聚合線、圓弧、圓）掃掠閉合的 2D 物件為實體（3D） |
| `TABLE` | `TB` | 建立表格：列與行，或由剪貼簿上的試算表儲存格或 CSV 檔建立 |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | 編輯表格：在儲存格中輸入、插入與刪除列和行、大小、合併儲存格、對齊 |
| `TABLEEXPORT` |  | 將表格顯示的內容儲存為 CSV 檔 |
| `TABLEPASTE` | `PASTETABLE` | 由剪貼簿上的試算表儲存格建立表格 |
| `TABLESTYLE` | `TS` | 表格樣式：標題、表頭與資料列的文字高度、對齊、邊界與框線 |
| `TAGS` |  | 區塊參照上的標記：定義標記（類型、允許值、適用區塊），設定於所選參照，並以可儲存為 CSV 的清單列出 |
| `TEXT` | `DT`, `DTEXT` | 單行文字；Enter 開始下一行 |
| `TEXTEDIT` | `ED`, `DDEDIT` | 原地編輯文字：點選一段文字（或在其上按兩下）（ED） |
| `TEXTMASK` | `TMASK` | 在文字後放置背景遮罩（圖形背景或某顏色），或將其移除。 |
| `TEXTTOFRONT` |  | 將所有文字、標註與引線移到其他物件之前。 |
| `TOOLBAR` |  | 選擇工具列按鈕顯示內容：圖示與文字、僅圖示，或僅文字（Ctrl+F1） |
| `TOOLBARDOCK` | `TBDOCK` | 將工具列放在視窗的上、下、左或右側 |
| `TOOLBARROWS` |  | 選擇工具列使用的列數：自動換行以符合、2 或 1（Shift+Ctrl+F1） |
| `TOPAREA` |  | 將圖形上方的列設為標準或精簡 |
| `TOUCHCROSSHAIR` | `TCX` | 用手指繪圖的偏移十字線：一根手指移動位於其上方與旁邊的十字線，使手指不會遮住點選點。抬起手指不會點選任何東西；按下 Click 按鈕或以第二根手指點按，會在十字線處點選，按住 Click 同時移動即為拖曳。長按或 Enter 按鈕即為 Enter。兩根手指可平移與縮放。選項：ON、OFF、Auto（僅在手指為唯一指標時開啟）、Distance、Side。 |
| `TOUR` | `TUTORIAL` | 再次進行六步驟的首張圖形導覽 |
| `TRIM` | `TR` | 將物件修剪至與其他物件交叉之處：點選一段、拖過數段，或 Shift+點選以延伸 |
| `TRIMEXTENDMODE` |  | TRIM 與 EXTEND 的啟動方式：1 快速（每個物件都是修剪邊或邊界），0 標準（先選擇邊） |
| `TTR` |  | 與兩個物件相切、具有你指定半徑的圓（與 CIRCLE T 相同）。 |
| `TURNLEFT` |  | 將視圖向左轉 90°（逆時針）：UCS Z -90，視圖隨之轉動。圖形中的任何內容都不會移動。 |
| `TURNRIGHT` |  | 將視圖向右轉 90°（順時針）：UCS Z 90，視圖隨之轉動。圖形中的任何內容都不會移動。 |
| `TURNWORLD` |  | 回到世界：UCS 世界，視圖重新水平。 |
| `TXT2MTXT` | `T2M` | 將單行文字由上而下合併為一個段落文字。 |
| `UCS` |  | 你自己的座標系統：原點與 X 軸（原點、Z 角度、3point、OBject、Previous、World、NAmed）。你輸入的點、正交、極軸追蹤、格線與新文字皆依其運作；視圖會轉動使其 X 軸呈水平。圖形中的任何內容都不會移動。 |
| `UNDO` | `U` | 復原上一個指令 |
| `UNGROUP` |  | UNGROUP：拆開群組。選取群組中的物件，或指定 Name。物件會保留在圖形中。 |
| `UNION` | `UNI` | 將實體合併為一個（3D），或將 2D 區域合併為一個區域 |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | 再次顯示被 ISOLATEOBJECTS 或 HIDEOBJECTS 隱藏的所有物件。 |
| `UNITS` | `UN`, `DDUNITS` | 長度的顯示與輸入方式：十進位、英尺與英寸、分數（UN） |
| `UPDATEFIELD` | `UPDATEFIELDS` | 重新計算欄位，並選擇何時自動更新 |
| `USDOUT` |  | 將 3D 模型匯出為 USD（.usda 文字、.usdc 二進位或 .usdz 套件） |
| `VIEW` | `-VIEW`, `V` | 標準 3D 視圖，透視或平行（3D） |
| `VIEWBASE` | `FLATSHOT` | 在圖紙或模型中放置 3D 實體的平面 2D 視圖（前、上、側或等角，隱藏線為虛線） |
| `VIEWLABEL` | `VL` | 圖紙上的視圖標題，顯示其視埠的視圖名稱，並隨之變化。 |
| `VOICE` |  | 開啟或關閉語音指令。在此電腦上辨識。 |
| `VPCLIP` |  | 將圖紙視埠裁切為閉合物件或所繪多邊形；Delete 使其回復為矩形 |
| `VPLAYER` |  | 僅在部分視埠中凍結或解凍圖層（Freeze、Thaw、Reset），並選擇新視埠起始時凍結哪些圖層（Vpvisdflt）。 |
| `VPORTS` | `VIEWPORTS` | 將繪圖區分割為窗格，每個有其自己的視圖（在圖紙上：視埠，如 MVIEW） |
| `VPVIEW` |  | 設定視埠顯示的內容：在模型上選取一個視窗 |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D 視圖的視覺樣式：著色、邊、隱藏線、線框、X 光 |
| `WALL` | `WA` | 如聚合線般繪製 2D 牆。牆會相接，並可承載門與窗。 |
| `WALLARC` | `WARC` | 繪製一段圓弧的牆。平面牆為直線，因此圓弧以相接的短直牆（每段 15 度）繪製。 |
| `WALLDELSEG` |  | 刪除兩點之間牆的一段。剩餘部分保留為一或兩面牆。 |
| `WALLDIM` |  | 為標註輸入新值：遠端的牆相對自身垂直移動，第一端的牆保持不動，與其相接的牆隨之跟隨。 |
| `WALLDISJOIN` |  | 點選靠近一端的牆，以禁止該端的相接：該端畫成直角，且不跟隨其他牆。再次點選可重新允許。 |
| `WALLGRID` |  | 將牆鎖定到格線：沿其方向，或使一端位於格線上。以 GRIDMOVE 移動格線，牆隨之跟隨。 |
| `WALLHOLD` |  | 對齊並鎖定：牆相對於另一面牆保持其位置（在其線上，或維持其距離）。若移動一面，另一面會跟隨。 |
| `WALLHOLDDIM` |  | 鎖定兩面平行牆之間的距離。若移動其中一面，另一面會跟隨以維持距離。 |
| `WALLHOLDS` |  | 列出牆上的鎖定。 |
| `WALLJOINS` |  | 為舊圖形的每面牆指定其 ID，並儲存它們之間的相接關係。你所做的第一次變更也會執行此操作。 |
| `WALLJOINSTYLE` |  | 點選兩面牆首尾相接的轉角，以變更其繪製方式：斜接、對接、方形切割。T 切換哪面牆通過。 |
| `WALLOFFSET` | `WO` | 將牆沿自身垂直移動一段距離（相接的牆隨之跟隨），或在該距離處製作副本。 |
| `WALLPICK` |  | 在圖形中的直線或聚合線上製作牆；若選擇「是」，相接的直線也會一併處理。 |
| `WALLPOLY` | `WP` | 繞一個 3 至 64 邊的正多邊形繪製牆，如 POLYGON。 |
| `WALLRECT` | `WR` | 由兩個對角點繪製四面相接的牆，如 RECTANG。 |
| `WALLREJOIN` |  | 將牆的兩段重新合併為一面牆。第一段保留其在圖形中的位置。 |
| `WALLROT` |  | 將四面相接的牆繪製為以任意角度旋轉的矩形：先是第一邊，然後是向外的距離。 |
| `WALLSPLIT` | `WS` | 在一點或另一面牆交叉處將牆分為兩段。除非要求留有間隙或自由端，各段仍保持相接。門與窗隨其所在段移動。 |
| `WALLSPLITGAP` |  | 分割牆並留下間隙：輸入間隙，選取牆，然後選取點。各段保持自由端，且可重新接合。 |
| `WALLSTRETCH` |  | 以視窗拉伸：位於其中的牆端會移動，完全位於其中的牆整面移動，抵住其側面的牆隨之滑動。 |
| `WALLTAN` |  | 以沿牆離開的圓弧延續牆（以短直牆繪製）。 |
| `WALLTRACE` |  | 圍繞你點選之點周圍，由直線與牆所圍成的最小閉合區域繪製牆。 |
| `WALLUNHOLD` |  | 解除牆上的鎖定（以及其他牆對它的鎖定）。 |
| `WBLOCK` | `W`, `-WBLOCK` | 將區塊、部分物件或整個圖形寫入新的 DWG 或 DXF 檔（W） |
| `WEDGE` | `WE` | 楔形：兩個角點與一個高度；自第一角點向外傾斜（3D） |
| `WHEREAMI` | `WHERE` | 說明游標所在位置。 |
| `WHOHAS` |  | 說明誰開啟了圖形。CadCraft Studio 會在每個開啟的圖形旁保留一個小型鎖定檔（Plan.dwg.cclock：誰、自何時、哪個版本），並於關閉時移除。選項：Current（開啟的圖形）、File（選取一個）、FOlder（資料夾中在某處開啟的每個圖形；這也讓 Studio 在該資料夾中保留鎖定檔）、Path（輸入一個）、Name（他人看到的名稱）。超過五分鐘未更新的鎖定視為過期。瀏覽器中不可用。 |
| `WINDOW` | `WN` | 在牆上放置窗。 |
| `XATTACH` | `XA` | 將另一個 DWG 或 DXF 連結到此圖形中，以唯讀顯示（XREF 可列出並重新載入） |
| `XCLIP` | `XC` | 將區塊參照與連結圖形裁切為矩形或多邊形，或移除裁切。 |
| `XLINE` | `XL` | 參考線，兩個方向皆無限延伸：通過兩點、水平、垂直、以角度、平分角，或自一線偏移。 |
| `XREF` | `XR`, `-XREF` | 連結圖形（外部參考）：列出、附加、重新載入、綁定、分離 |
| `ZOOM` | `Z` | 範圍，或一個視窗 |
