---
title: 0.7 版新功能（較早版本）
summary: PDF 底圖與 PDF 匯入、掃描圖形與自動描圖、真正的雲形線（SPLINE、SPLINEDIT 與 PEDIT）、標註樣式管理員、保留格式的文字、WBLOCK 與自訂比例、來自其他程式的三維實體、掃描登錄、雷射面板、USD 匯出、CadCraft Studio 中的歷程記錄與列印、引導式的首張圖形、可位於任一側或以較少列顯示的工具列，以及 AI 助理的更多功能。
keywords: 0.7 新功能, 較早版本, 版本說明, 更新記錄, 變更, 0.7, 版本, 新功能, pdf, pdfattach, pdfimport, 底圖, 掃描, scanattach, scantrace, 描圖, 點陣, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, 格式, wblock, scalelistedit, 比例清單, acis, 三維實體, registerscans, 掃描登錄, icp, e57, las, 雷射, grbl, g-code, usd, usdout, 歷程記錄, 版本, 比較, 列印, 印表機, png, svg, 列印樣式, 線型, 導覽, 速查表, 指令對照表, 工具列位置, 工具列列數, toolbardock, regen, regenall, 觸控板, 滑動, 字碼頁, 西里爾文, 韓文, 中文, 日文, 電氣, rcd, p&id, pid, acad.lsp, acaddoc.lsp, 支援資料夾, 助理, mcp, 單位, 葡萄牙文
from: d07ca034
---

以下是 CadCraft 0.7 與 0.6 相比的變更內容。其中許多項目來自 Discord 上的建議。清單依領域分組，最重要的項目列在最前面。

## 新增

### PDF 與掃描圖形

- **將 PDF 頁面放在圖形下方。** {{cmd:PDFATTACH}}（`PDFATT`）可依真實尺寸或輸入的比例放置一頁。可貼齊其線條、淡化、轉為單色（{{cmd:PDFADJUST}}）、裁剪（{{cmd:PDFCLIP}}），並切換 PDF 本身的圖層（{{cmd:PDFLAYERS}}）。列印時會以線條、填滿與文字輸出；DWG 或 DXF 2000 會將其保留為指向該檔案的連結。以 {{ui:開啟}} 開啟 PDF 時，會詢問要附加或匯入。請參閱[PDF 底圖與 PDF 匯入](topic:pdf-underlay)。
- **將 PDF 頁面轉為圖形物件。** {{cmd:PDFIMPORT}}（`PDFIM`）會建立直線、聚合線、圓、圓弧、實心圖案填滿與文字，放在以 PDF 名稱命名的圖層上，可依真實尺寸、輸入的比例，或由兩點與實際距離縮放，且整個過程為一個復原步驟。請參閱[匯入頁面](topic:pdf-underlay#import-a-page)。
- **掃描圖形。** {{cmd:SCANATTACH}} 可匯入 PNG、JPEG 或 TIFF（單頁或全部頁面），或為圖片的 PDF 頁面。接著可用兩點縮放（{{cmd:SCANSCALE}}）、對齊（{{cmd:SCANALIGN}}）、依本身的長線校正傾斜（{{cmd:SCANDESKEW}}）、轉為黑白並去除雜點（{{cmd:SCANCLEAN}}）、裁切，以及擦除部分內容。每個步驟都是一個復原步驟，且會保留原始檔案。請參閱[掃描圖形與描圖](topic:scanned-drawings)。
- **將掃描描圖為直線與圓弧。** {{cmd:SCANTRACE}} 會依所設定的容差，將掃描的線條繪製為直線與圓弧，置於新圖層 SCAN-TRACE 上，並保留文字與圖案。報告會說明產生了什麼與保留了什麼，但這不代表結果一定正確：請對照圖紙加以檢查。{{cmd:RASTERSNAP}} 可讓物件鎖點找到掃描的端點、角點與交點。不會傳送任何資料，也不使用任何訓練模型。請參閱[描圖](topic:scanned-drawings#the-trace)。

### 繪製與編輯

- **真正的雲形線。** {{cmd:SPLINE}}（`SPL`）可透過點或控制點（次數 1 至 5）繪製曲線，並可設定端點切線；{{cmd:SPLINEDIT}}（`SPE`）可移動、新增與刪除擬合點或控制點、設定權重、開啟、封閉、反向，或將雲形線轉為聚合線。來自 DWG 與 DXF 檔案的雲形線會以雲形線開啟，DWG 與 DXF 2000 則會以雲形線儲存。請參閱[雲形線與聚合線](topic:splines)。
- **PEDIT。** {{cmd:PEDIT}}（`PE`）可封閉與開啟聚合線、將直線與圓弧接合至聚合線、設定單一寬度、通過頂點擬合曲線或沿頂點擬合雲形線（並可用 Decurve 還原）、反向，並可同時編輯多個聚合線。請參閱[編輯聚合線](topic:splines#edit-a-polyline)。
- **WBLOCK。** {{cmd:WBLOCK}}（`W`）會將區塊、部分物件或整個圖形寫入新的 DWG 或 DXF，且只包含它們所使用的圖層、樣式與區塊。請參閱[將區塊或物件寫入獨立檔案](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own)。
- **REGEN 與 REGENALL。** {{cmd:REGEN}}（`RE`）會依圖形重新繪製目前的索引標籤，{{cmd:REGENALL}}（`REA`）則重繪每個索引標籤、窗格與已開啟的圖形。請參閱[REGEN 與 REGENALL](topic:commands#regen-and-regenall)。

### 文字與標註

- **文字保留格式。** 來自其他程式的段落文字會保留每個字的顏色、粗體與斜體、底線、堆疊分數與高度：它們會顯示於螢幕與 PDF 上，編輯文字時仍會保留，並可寫回檔案。請參閱[來自其他程式之段落文字的格式](topic:text#formatting-inside-paragraph-text-from-other-programs)。
- **標註樣式管理員。** {{cmd:DIMSTYLE}}（`D`）可建立、變更、比較與套用具名的標註樣式；變更樣式會影響所有使用該樣式的標註。{{cmd:DIMEDIT}}（`DED`）可還原文字、輸入新文字，並可旋轉文字或傾斜延伸線；{{cmd:DIMTEDIT}} 可將文字移至左側、右側或中央。請參閱[具名標註樣式](topic:dimension-settings#named-dimension-styles)。
- **自訂比例。** {{cmd:SCALELISTEDIT}}（`SCALELIST`）可將 1:75 等比例加入視埠與列印比例清單中；它們會儲存於圖形內（DWG 與 DXF 2000），而來自其他程式的圖形會帶入其自己的清單。請參閱[比例](topic:units-papers-scales#scales)。
- **其他字母系統的文字。** 以西里爾文、韓文、中文、日文或越南文字碼頁儲存的 DXF 檔案，現在會正確開啟其文字；中文、日文與韓文文字可列印至 PDF（列印時首次需要時會下載較大的字型）。請參閱[字型](topic:text#font)。

### 列印與輸出

- **列印樣式表的更多設定。** 每種顏色現在也可設定線型、線端與線接合，以及可將實心填滿列印為斜線的填滿樣式；此表格有自己的線寬清單與線型比例。請參閱[列印樣式表](topic:plot-pdf#plot-style-tables)。
- **列印，以及 PNG 與 SVG 檔案。** 列印對話方塊有 {{ui:列印…}}、{{ui:下載PNG}}（300 dpi）與 {{ui:下載SVG}}。在 CadCraft Studio 中，它會列出電腦的印表機、其紙張與列印份數。請參閱[列印](topic:plot-pdf#print)與[圖片與 SVG 檔案](topic:plot-pdf#picture-and-svg-files)。

### 三維與點雲

- **來自其他程式的三維實體。** 圖形模型空間中的實體、區域與實體（body），會在三維索引標籤上以唯讀方式顯示，存為 DWG 時會原樣寫回。CadCraft 尚未繪製的曲面上的面會列出，而不會被猜測。請參閱[來自其他程式的實體](topic:3d-solids#solids-from-other-programs)。
- **登錄多個掃描。** {{cmd:REGISTERSCANS}}（`REGSCAN`）可依點對或輸入的目標座標，將從不同位置掃描的資料放置於同一參考框架中，以 ICP 精修，將登錄結果存成小型專案檔，並將登錄後的點雲寫成一個 LAS 或 E57 檔案。請參閱[將多個掃描登錄為一個](topic:register-scans)。
- **USD 匯出。** {{cmd:USDOUT}}，或 {{cmd:EXPORT3D}} › {{ui:USD}}，會將三維索引標籤的實體寫成 `.usda`、`.usdc` 或 `.usdz`。請參閱[將三維模型匯出為 USD](topic:usd)。
- **三維索引標籤上的計算。** 當三維索引標籤的工具需要距離時，可直接輸入計算式，與指令列相同。請參閱[輸入值中的算術](topic:coordinate-entry#arithmetic-in-a-typed-value)。

### 製作

- **將圖形送至雷射。** {{cmd:LASER}}，或 {{ui:視圖}} › {{ui:更多}} › {{ui:雷射…}}，會在圖形上方開啟面板：每個圖層可設為切割、刻線、雕刻線條、填滿圖形、雕刻圖片，或不送出，並可設定功率、速度與次數。預覽會隨編輯更新，{{ui:儲存G-code…}} 會寫出 GRBL 雷射模式的 G-code；在 Chrome 或 Edge 中，面板可框定作業範圍並透過 USB 送出。設定會儲存於圖形內（DWG 與 DXF）。請參閱[將圖形送至雷射](topic:laser-cutting)。
- **電氣外掛中的建築安裝符號。** 資料、電話與電視插座、鑰匙開關與定時開關、恆溫器、出口標示、偵測器、呼叫點與警報器、風扇、熱水器、爐具、電動車充電點、電表與分電盤，以及 RCD 與 RCBO 符號。一條迴路可包含 RCD，配電盤明細表有 RCD 欄，而檢查會指出插座迴路中未設置 30 mA 或以下 RCD 的情況。這只是規劃提醒，而非規範檢查。
- **P&ID 外掛。** P&ID 用於繪製製程圖：具有連接點的符號、製程與訊號線、標籤、線號、設備、儀器與閥門清單（CSV 或活頁簿），以及檢查。它隨 CadCraft 附帶，並需在 {{ui:設定}} › {{ui:一般}} › {{ui:外掛}} 中開啟後才會啟用。它是製圖輔助工具，並非工程核准，且其文字目前僅提供英文。

### 入門與畫面

- **引導式的首張圖形。** {{cmd:TOUR}}（或起始卡片上的 {{ui:進行導覽}}）會在真實圖形中引導使用者完成六個步驟：直線、圓、移動、修剪、刪除與標註。CadCraft 在第一次開啟且沒有任何內容時會自動開始。請參閱[需要引導嗎？](topic:getting-started#prefer-to-be-guided)
- **速查表與指令對照表。** [速查表](topic:cheat-sheet)將 40 個常用指令列在一頁，也可列印為 PDF；[指令對照表](topic:command-map)則依 A 至 Z 列出指令及其簡稱。
- **任一側的工具列。** {{ui:設定}} › {{ui:CadCraft}} › {{ui:工具列位置}}：上方（同先前）、下方、左側或右側，或輸入 {{cmd:TOOLBARDOCK}}。請參閱[工具列位置](topic:settings#toolbar-position)。
- **工具列列數。** {{ui:設定}} › {{ui:CadCraft}} › {{ui:工具列列數}}：自動換行以符合視窗、2 列或 1 列，適用於 CadCraft 工具列以及 Drafting classic 與功能區樣式。{{key:Shift+Ctrl+F1}} 會依序切換，{{key:Ctrl+F1}} 則切換按鈕顯示內容，而 {{cmd:TOOLBARROWS}} 與 {{cmd:TOOLBAR}} 可設定這些項目。開始提示有關閉按鈕。感謝 GJoe2 以拉取要求提出此功能。請參閱[工具列列數](topic:settings#toolbar-rows)。

### 在 CadCraft Studio 中

- **歷程記錄。** {{cmd:HISTORY}}（`HIST`），或 {{ui:視圖}} › {{ui:更多}} › {{ui:歷程記錄…}}：Studio 在開啟與儲存圖形時保留的副本，以及從雲端開啟圖形時的雲端版本。可開啟或還原其中一個，或比較兩個版本，並以顏色顯示新增、移除與變更的內容。請參閱[歷程記錄](topic:history)。
- **acad.lsp 與 acaddoc.lsp。** 在 {{cmd:APPLOAD}} 中選擇支援資料夾：CadCraft 啟動時會載入這兩個檔案（每開啟新圖形分頁時會再次載入 acaddoc.lsp），而 `S::STARTUP` 會在其後執行。請參閱[從支援資料夾載入應用程式](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio)。
- **獨立視窗中的列印對話方塊。** 標題列上的按鈕可將其移入另一個視窗，放到其他螢幕上。請參閱[移動對話方塊](common:arrange-panels#move-a-dialog)。

### 給 AI 助理

- **依名稱存取檔案，位於指定的資料夾中。** 在 CadCraft Studio 中，助理可依名稱開啟、儲存與列印檔案，並可為指令提供其所需的檔案（INSERT 自檔案插入、COUNT 的匯出、SAVEAS、PLOT），但僅限於在 {{ui:設定}} › {{ui:CadCraft}} › {{ui:助理}} › {{ui:助理可使用的資料夾}} 下新增的資料夾中。請參閱[讓助理使用指定資料夾中的檔案](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose)。
- **更少的呼叫。** 助理可一次輸入完整的指令列、在呼叫之間保持指令開啟、依類型與圖層統計物件數量而不需列出，並可一步完成區塊及其屬性值的放置。
- **無視窗。** `cadcraft` 指令列可寫出 SVG 列印檔，並可一次轉換、列印、檢查或描述許多檔案。MCP 套件尚未發佈。請參閱[不開啟 CadCraft 即可處理檔案](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft)。

## 變更

- **觸控板可平移。** 在觸控板上以兩指移動，二維視圖會跟隨；捏合與滑鼠滾輪可縮放。請參閱[滑鼠、觸控板與觸控](topic:mouse-trackpad-touch)。
- **保留 OLE 物件。** DXF 的嵌入物件會以其圖片或帶標籤的框架顯示，並由 DXF 2000 寫回。DWG 的 OLE 物件會保留，並在另存為 DWG 時寫回，但尚未顯示。先前儲存時會遺失。請參閱[來自其他程式的物件（OLE）](topic:pictures#objects-from-other-programs-ole)。
- **新圖形的單位** 依 {{ui:設定}} › {{ui:一般}} › {{ui:單位}} 中標示為預設的單位而定。

## 修正

- 開啟時為空白，或失去視埠並以整個模型顯示於其位置的配置，現在會以其真實視埠開啟。與內容沒有連結的配置會被保留，且開啟報告會說明此情況。
- 較舊字碼頁的 DXF 檔案曾顯示錯亂的西里爾文與韓文文字，現在可正確讀取。
- 來自其他程式的段落文字在開啟時會遺失格式，儲存時會以純文字寫回。

## 所有應用程式

- **單位。** {{ui:設定}} › {{ui:一般}} › {{ui:單位}} 為長度、面積、體積、角度與坡度各提供一份清單，並依單位定義提供精確的尺寸（美國測量英尺為獨立單位）。關閉不常用的單位後，它們會從單位清單中移除；標示為預設的單位則會成為新作業的起始單位。檔案永遠保留其自身單位。在 CadCraft 中，標示的單位會設定新圖形的單位（若該單位可用於圖形）；CadCraft 自己的 {{ui:單位}} 方塊尚未依此切換。圖形一旦具有單位，輸入的長度即可帶上任何單位符號。請參閱[單位、輸入值與單位清單](common:unit-lists)。
- **更精簡的版面與可收合的面板。** {{ui:設定}} › {{ui:一般}} › {{ui:版面密度}} › {{ui:精簡}} 可在螢幕上容納更多內容（觸控螢幕與手機仍保留大型按鈕）。每個側邊面板都有細窄的標題列：拖曳即可停駐或浮動，拖放到另一面板的標題列上可共用同一框架為索引標籤，可釘選使其滑至邊緣，或隱藏後再由邊緣喚回。請參閱[排列面板](common:arrange-panels#make-the-layout-denser)。
- **對話方塊可移動。** 以標題列拖曳對話方塊，即可移開圖形；它會回到原來的位置。連按兩下標題列可將其重新置中。請參閱[移動對話方塊](common:arrange-panels#move-a-dialog)。
- **AI 助理的配方。** 十個供自有助理使用的範例需求（整理圖形、列印一組圖紙、檢查圖形、向模型提問、彙總數量計算、試用零件變體……），每個都附有其呼叫的工具與所需權限，並由我們的測試重播。應用程式本身不含 AI。請參閱[AI 助理配方](common:assistants-recipes)。
- **語言。** **Português (Portugal)** 是 {{ui:設定}} › {{ui:一般}} › {{ui:語言}} 中的新語言。它與 **Português (Brasil)**、**Español (México)** 及 **Bahasa Indonesia** 現在都具有應用程式的全部文字，但仍為尚未經母語人士審閱的草稿。說明主題目前為英文。
- **CadCraft Studio** 會說明更新檢查失敗的原因（系統尚無對應檔案、無網路、簽章錯誤），而不只顯示「完成」。已關閉的「新功能」卡片不會再次出現，直到有更新版本為止。

## 尚未包含在此版本中

- **0.7 尚未進行程式碼簽署。** 簽署與 Microsoft Store 套件已延至 0.8，因為憑證驗證尚未完成。請核對 getcadcraft.com/download 上每個檔案旁的 SHA-256。在 Windows 上，若 SmartScreen 阻擋安裝程式，請選擇 {{ui:更多資訊}}，然後選擇 {{ui:仍要執行}}。在 Mac 上，第一次開啟時，請以右鍵點按 CadCraft Studio，然後選擇 {{ui:開啟}}。CadCraft Studio 尚未上架應用程式商店，也尚未提供 iPad 或 iPhone 版本。
- {{ui:單位}} 中的角度與坡度清單已儲存，但尚無任何方塊讀取它們。
- DWG 的 OLE 物件會被保留但不顯示，且 OLE 物件內的中繼檔圖片不會繪製。
- 讀取其他程式的列印樣式表（CTB 檔）需等待範例檔案。
- 以 `\M+` 代碼寫成的較舊亞洲文字可被讀取，但尚未以其他程式的檔案進行檢查。
- PDF 底圖：頁面內的圖片會顯示於螢幕，但不會列印；助理的列印會排除底圖；且其他程式如何讀取已儲存的裁剪與比例，尚未在這些程式中檢查。
- 歷程記錄：CadCraft 尚未將儲存內容傳送至雲端，因此雲端版本僅為來自其他裝置與網頁的版本。歷程記錄僅適用於 CadCraft Studio。
- Studio 重新啟動後是否會保留 acad.lsp 支援資料夾尚未檢查；若出現提示，請於 APPLOAD 中重新選擇該資料夾。
- 雷射面板尚未在實際雷射機上測試：請在廢料上測試每項設定。CadCraft Studio 沒有 Web Serial，因此在 Studio 中，面板僅會儲存 G-code。
- 登錄掃描僅在模擬掃描資料上測試，尚未以真實掃描儀的資料組測試。
- 雙指平移僅以模擬的觸控板事件測試，尚未在實際觸控板上測試。
- {{cmd:PEDIT}} 沒有「編輯頂點」選項（請改用夾點或屬性）。偏移、修剪、延伸、圓角、打斷與接合尚不支援雲形線；雲形線的高度（Z）不會被保留。
- 新的段落文字尚無法設定格式代碼，而 SVG 列印會將有格式的文字以單一顏色呈現。
- WBLOCK 的「整個圖形」僅寫入模型，不含配置。目前的標註樣式不會儲存於檔案中：圖形開啟時會使用 Standard 作為目前樣式。
- 功能區樣式尚無圖層、顏色或線型清單：請使用 {{ui:圖層}} 面板與 {{ui:屬性}}。
- 點雲仍不會儲存於圖形中，也不會列印；E57 檔案最多可開啟 600 萬點與 512 MB。
- CadCraft 儲存的 DWG 檔案尚未在 AutoCAD 本身中檢查。

其他內容請參閱[尚未實作](topic:not-built-yet)。
