---
title: 0.7 新功能
summary: PDF 底圖與 PDF 匯入、可自動描圖的掃描圖形、以 SPLINE、SPLINEDIT 與 PEDIT 處理的真正雲形線、標註樣式管理員、保留格式的文字、WBLOCK 與自訂比例、來自其他程式的 3D 實體、掃描對位、雷射面板、USD 匯出、CadCraft Studio 中的歷程記錄與列印、引導式的第一張圖、可放在任一側或縮減列數的工具列，以及更多供 AI 助理使用的功能。
keywords: 新功能, 新增功能, 發行說明, 變更記錄, 變更, 0.7, 版本, pdf, pdfattach, pdfimport, 底圖, 掃描, scanattach, scantrace, 描圖, 點陣, rastersnap, 雲形線, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, 格式, wblock, scalelistedit, 比例清單, acis, 3d 實體, registerscans, 掃描對位, icp, e57, las, 雷射, grbl, g-code, usd, usdout, 歷程記錄, 版本, 比較, 列印, 印表機, png, svg, 列印樣式, 線型, 導覽, 速查表, 指令對照表, 工具列位置, 工具列列數, toolbardock, regen, regenall, 觸控板, 滑動, 字碼頁, 西里爾文, 韓文, 中文, 日文, 電氣, rcd, p&id, pid, acad.lsp, acaddoc.lsp, 支援資料夾, 助理, mcp, 單位, 葡萄牙文
from: b9258ca6
---

這是 CadCraft 0.7 相較於 0.6 的變更。其中許多是在 Discord 上提出的需求。清單依領域分組，最重要的在前。

## 新增

### PDF 與掃描圖形

- **將 PDF 頁面放在圖形之下。** {{cmd:PDFATTACH}}（`PDFATT`）以真實大小或輸入的比例放置頁面。可鎖點到其線條、使其淡化、變為單色（{{cmd:PDFADJUST}}）、裁剪（{{cmd:PDFCLIP}}），並切換 PDF 本身的圖層（{{cmd:PDFLAYERS}}）。列印時以線條、填滿與文字呈現，DWG 或 DXF 2000 則以檔案的連結保留它。以 {{ui:開啟}} 開啟 PDF 時，會詢問要附加還是匯入。參閱 [PDF 底圖與 PDF 匯入](topic:pdf-underlay)。
- **將 PDF 頁面轉為圖形物件。** {{cmd:PDFIMPORT}}（`PDFIM`）在以 PDF 命名的圖層上，以真實大小、輸入的比例，或由兩點與實際距離換算的比例，產生直線、聚合線、圓、圓弧、實心填滿與文字，作為一個復原步驟。參閱[匯入頁面](topic:pdf-underlay#import-a-page)。
- **掃描圖形。** {{cmd:SCANATTACH}} 可帶入 PNG、JPEG 或 TIFF（一頁或全部），或是屬於圖片的 PDF 頁面。接著可由兩點設定比例（{{cmd:SCANSCALE}}）、對齊（{{cmd:SCANALIGN}}）、依其自身的長線校正歪斜（{{cmd:SCANDESKEW}}）、轉為黑白並移除雜點（{{cmd:SCANCLEAN}}）、裁切並擦除其中的部分。每個步驟都是一個復原步驟，且會保留原始檔案。參閱[掃描圖形與描圖](topic:scanned-drawings)。
- **將掃描檔描成直線與圓弧。** {{cmd:SCANTRACE}} 以設定的容差，將掃描檔的線條描成新圖層 SCAN-TRACE 上的直線與圓弧，文字與剖面線則維持原樣。報告會說明描出了什麼、留下了什麼，但這並不保證結果正確：請與圖紙核對。{{cmd:RASTERSNAP}} 讓物件鎖點能找到掃描檔的端點、角與交叉點。不會傳送任何資料到任何地方，也不使用訓練過的模型。參閱[描圖](topic:scanned-drawings#the-trace)。

### 繪圖與編輯

- **真正的雲形線。** {{cmd:SPLINE}}（`SPL`）可通過點或由控制點（次數 1 至 5）繪製曲線，並可指定端點切線；{{cmd:SPLINEDIT}}（`SPE`）可移動、新增與刪除擬合點或控制點、設定權重、開啟、封閉、反轉，或將雲形線轉為聚合線。DWG 與 DXF 檔案中的雲形線會以雲形線開啟，DWG 與 DXF 2000 也會將它們存為雲形線。參閱[雲形線與聚合線](topic:splines)。
- **PEDIT。** {{cmd:PEDIT}}（`PE`）可封閉與開啟聚合線、將直線與圓弧接合進去、設定單一寬度、通過頂點擬合曲線或沿著頂點擬合雲形線並以 Decurve 還原、反轉，以及同時編輯多條聚合線。參閱[編輯聚合線](topic:splines#edit-a-polyline)。
- **WBLOCK。** {{cmd:WBLOCK}}（`W`）會將區塊、部分物件或整張圖形寫入新的 DWG 或 DXF，其中只含它們用到的圖層、樣式與區塊。參閱[將區塊或物件寫成獨立檔案](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own)。
- **REGEN 與 REGENALL。** {{cmd:REGEN}}（`RE`）會依圖形重新繪製目前所在的索引標籤，{{cmd:REGENALL}}（`REA`）則重新繪製每個索引標籤、窗格與已開啟的圖形。參閱 [REGEN 與 REGENALL](topic:commands#regen-and-regenall)。

### 文字與標註

- **文字保留格式。** 來自其他程式的段落文字會保留每個字詞的色彩、粗體與斜體、底線、堆疊分數與高度：它們會在畫面與 PDF 中繪出，編輯文字時保留，並存回檔案。參閱[來自其他程式的段落文字中的格式](topic:text#formatting-inside-paragraph-text-from-other-programs)。
- **標註樣式管理員。** {{cmd:DIMSTYLE}}（`D`）可建立、變更、比較與套用具名的標註樣式；變更樣式會改變使用它的每個標註。{{cmd:DIMEDIT}}（`DED`）可還原文字、輸入新文字、旋轉文字或傾斜延伸線；{{cmd:DIMTEDIT}} 則將文字移到左側、右側或中央。參閱[具名標註樣式](topic:dimension-settings#named-dimension-styles)。
- **自訂比例。** {{cmd:SCALELISTEDIT}}（`SCALELIST`）可將 1:75 之類的比例加入視埠與列印比例清單；它們會儲存在圖形中（DWG 與 DXF 2000），來自其他程式的圖形則帶有自己的清單。參閱[比例](topic:units-papers-scales#scales)。
- **其他字母的文字。** 以西里爾文、韓文、中文、日文或越南文字碼頁儲存的 DXF 檔案，現在能連同文字一起開啟，中文、日文與韓文文字也能列印到 PDF 中（列印時第一次需要時會取得較大的字型）。參閱[字型](topic:text#font)。

### 繪圖與列印

- **列印樣式表的更多功能。** 表格現在還能針對每種色彩設定線型、線端與線接合方式，以及將實心填滿以剖面線列印的填滿樣式；表格有自己的線寬清單與線型比例。參閱[列印樣式表](topic:plot-pdf#plot-style-tables)。
- **列印，以及 PNG 與 SVG 檔案。** 「列印」對話方塊新增 {{ui:列印…}}、{{ui:下載PNG}}（300 dpi）與 {{ui:下載SVG}}。在 CadCraft Studio 中，它會列出電腦的印表機、其紙張與份數。參閱[列印](topic:plot-pdf#print)與[圖片與 SVG 檔案](topic:plot-pdf#picture-and-svg-files)。

### 3D 與點雲

- **來自其他程式的 3D 實體。** 圖形模型空間中的實體、區域與本體會以唯讀方式顯示在 3D 索引標籤上，儲存為 DWG 時會原封不動寫回。CadCraft 尚無法繪製的曲面上的面會被列出，而不是猜測。參閱[來自其他程式的實體](topic:3d-solids#solids-from-other-programs)。
- **將多個掃描對位。** {{cmd:REGISTERSCANS}}（`REGSCAN`）以點對或輸入的標靶座標，將從不同位置拍攝的掃描放入同一座標框架，用 ICP 精修，將對位結果儲存為小型專案檔案，並將對位後的點雲寫成單一 LAS 或 E57 檔案。參閱[將多個掃描對位為一](topic:register-scans)。
- **USD 匯出。** {{cmd:USDOUT}}，或 {{cmd:EXPORT3D}} › {{ui:USD}}，會將 3D 索引標籤的實體寫成 `.usda`、`.usdc` 或 `.usdz`。參閱[將 3D 模型匯出為 USD](topic:usd)。
- **3D 索引標籤上的計算。** 在 3D 索引標籤的工具要求距離之處，可以像在指令列上一樣輸入運算式。參閱[輸入值中的算術](topic:coordinate-entry#arithmetic-in-a-typed-value)。

### 製作東西

- **將圖形送到雷射機。** {{cmd:LASER}}，或 {{ui:檢視}} › {{ui:更多}} › {{ui:雷射…}}，會在圖形上方開啟面板：每個圖層可切割、刻劃、雕刻線條、填滿形狀、雕刻圖片或不送出，並設定其功率、速度與次數。預覽會隨編輯而更新，{{ui:儲存G-code…}} 會寫出 GRBL 雷射模式的 G-code，在 Chrome 或 Edge 中，面板還能框出作業範圍並透過 USB 送出。設定儲存在圖形中（DWG 與 DXF）。參閱[將圖形送到雷射機](topic:laser-cutting)。
- **電氣外掛中的建築安裝符號。** 資料、電話與電視插座、鑰匙開關與定時開關、溫控器、出口標示、探測器、手動報警站與警報器、風扇、熱水器、爐具、電動車充電點、電表與分電盤，以及 RCD 與 RCBO 符號。迴路可帶有 RCD，配電盤明細表有 RCD 欄，檢查會指出沒有 30 mA 以下 RCD 的插座迴路。這是規劃提醒，並非法規檢查。
- **P&ID 外掛。** P&ID 繪製製程圖：帶連接點的符號、製程線與訊號線、標籤、管線編號、管線、設備、儀表與閥的清單（CSV 或活頁簿）及檢查。它隨 CadCraft 提供，在 {{ui:設定}} › {{ui:一般}} › {{ui:外掛}} 中開啟之前預設為關閉。這是繪圖輔助工具，並非工程核可，目前其文字僅有英文。

### 入門與畫面

- **引導式的第一張圖。** {{cmd:TOUR}}（或起始卡片上的 {{ui:進行導覽}}）會在真正的圖形中帶領完成六個步驟：直線、圓、移動、修剪、刪除與標註。CadCraft 第一次開啟且其中沒有內容時，會自動開始。參閱[想要有人引導？](topic:getting-started#prefer-to-be-guided)
- **速查表與指令對照表。** [速查表](topic:cheat-sheet)將 40 個日常指令放在一頁，也提供可列印的 PDF；[指令對照表](topic:command-map)則依 A 到 Z 列出指令及其簡短名稱。
- **工具列可放在任一側。** {{ui:設定}} › {{ui:CadCraft}} › {{ui:工具列位置}}：頂端（和以前相同）、底部、左側或右側，或輸入 {{cmd:TOOLBARDOCK}}。參閱[工具列位置](topic:settings#toolbar-position)。
- **工具列列數。** {{ui:設定}} › {{ui:CadCraft}} › {{ui:工具列列數}}：自動換行、2 列或 1 列，適用於 CadCraft 工具列與經典繪圖及功能區樣式。{{key:Shift+Ctrl+F1}} 依序切換列數，{{key:Ctrl+F1}} 依序切換按鈕顯示的內容，{{cmd:TOOLBARROWS}} 與 {{cmd:TOOLBAR}} 可設定。起始提示新增了關閉按鈕。感謝 GJoe2 以 pull request 提供此功能。參閱[工具列列數](topic:settings#toolbar-rows)。

### 在 CadCraft Studio 中

- **歷程記錄。** {{cmd:HISTORY}}（`HIST`），或 {{ui:檢視}} › {{ui:更多}} › {{ui:歷程記錄…}}：Studio 在開啟與儲存圖形時保留的副本，以及從雲端開啟圖形時該圖形的雲端版本。可開啟或還原其中一份，或比較兩份，新增、移除與變更的內容會以色彩顯示。參閱[歷程記錄](topic:history)。
- **acad.lsp 與 acaddoc.lsp。** 在 {{cmd:APPLOAD}} 中選擇支援資料夾：這兩個檔案會在 CadCraft 啟動時載入（acaddoc.lsp 於每個新圖形索引標籤再次載入），`S::STARTUP` 則在它們之後執行。參閱[載入應用程式](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio)。
- **列印對話方塊在自己的視窗中。** 其標題列中的按鈕可將它移到可放在另一個螢幕上的視窗。參閱[移動對話方塊](common:arrange-panels#move-a-dialog)。

### 供 AI 助理使用

- **在選定資料夾中以檔名存取檔案。** 在 CadCraft Studio 中，助理可以依檔名開啟、儲存與列印檔案，並將指令所要求的檔案交給指令（從檔案 INSERT、COUNT 的匯出、SAVEAS、PLOT），但僅限於在 {{ui:設定}} › {{ui:CadCraft}} › {{ui:助理}} › {{ui:助理可使用的資料夾}} 下加入的資料夾內。參閱[讓助理使用選定資料夾中的檔案](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose)。
- **更少的呼叫。** 助理可以一次輸入整行指令、在兩次呼叫之間保持指令開啟、依類型與圖層計算物件數量而不必列出，也能一個步驟就放置帶有屬性值的區塊。
- **無需視窗。** `cadcraft` 命令列可寫出 SVG 列印，並可一次轉換、列印、檢查或描述許多檔案。MCP 套件尚未發佈。參閱[不開啟 CadCraft 直接處理檔案](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft)。

## 變更

- **觸控板可平移。** 在觸控板上移動兩根手指，2D 檢視會隨之移動；捏合與滑鼠滾輪則縮放。參閱[滑鼠、觸控板與觸控](topic:mouse-trackpad-touch)。
- **保留 OLE 物件。** DXF 中嵌入的物件會顯示為其圖片或帶標籤的框，並由 DXF 2000 存回。DWG 中的則會保留，並在存為 DWG 時寫回，但尚不顯示。之前它們在儲存時會遺失。參閱[來自其他程式的物件（OLE）](topic:pictures#objects-from-other-programs-ole)。
- **新圖形的單位**會跟隨在 {{ui:設定}} › {{ui:一般}} › {{ui:單位}} 中加上星號的單位。

## 修正

- 開啟時是空的，或遺失視埠而以整個模型取代的配置，現在會以真正的視埠開啟。沒有與其內容連結的配置會保留，開啟報告也會說明。
- 較舊字碼頁的 DXF 檔案會顯示亂碼的西里爾文與韓文文字。現在已能正確讀取。
- 來自其他程式的段落文字在開啟時會遺失格式，並以純文字存回。

## 所有應用程式

- **單位。** {{ui:設定}} › {{ui:一般}} › {{ui:單位}} 提供長度、面積、體積、角度與坡度各一份清單，其中的精確尺寸依單位定義而定（美國測量英尺是獨立的單位）。關閉從不使用的單位，它們便會從單位清單中消失；為其中一個加上星號，新作業便從該單位開始。檔案一律保留自己的單位。在 CadCraft 中，若星號標示的是圖形能承載的單位，它便會設定新圖形的單位；CadCraft 自己的 {{ui:單位}} 方塊目前尚不跟隨這些開關。圖形有了單位之後，輸入的長度可以帶有任何單位的標記。參閱[單位、輸入的值與單位清單](common:unit-lists)。
- **更緊湊的版面與可收起的面板。** {{ui:設定}} › {{ui:一般}} › {{ui:版面密度}} › {{ui:緊湊}} 可在畫面上放入更多內容（觸控螢幕與手機仍保留大按鈕）。每個側邊面板都有細長的標題列：拖曳可停駐或浮動面板，放到另一個面板的標題列上則以索引標籤共用同一個框架，釘選後可滑到邊緣收起，或隱藏後再從邊緣叫回。參閱[排列面板](common:arrange-panels#make-the-layout-denser)。
- **對話方塊可移動。** 拖曳對話方塊的標題列，將它移出圖形的位置；它會回到上次放置的地方。按兩下標題列可再次置中。參閱[移動對話方塊](common:arrange-panels#move-a-dialog)。
- **AI 助理的範例做法。** 十個供自己的助理使用的實際請求（整理圖形、列印一組圖紙、檢查圖形、向模型提問、加總數量計算、試用零件變體……），每個都附上所呼叫的工具與所需的權限，並由測試重複驗證。應用程式本身不含 AI。參閱 [AI 助理的範例做法](common:assistants-recipes)。
- **語言。** **Português (Portugal)** 是 {{ui:設定}} › {{ui:一般}} › {{ui:語言}} 中的新語言。它與 **Português (Brasil)**、**Español (México)** 和 **Bahasa Indonesia** 現在涵蓋應用程式的每個字詞，屬於尚未經母語人士審閱的草稿。說明主題為英文。
- **CadCraft Studio** 會說明更新檢查失敗的原因（系統尚無檔案、沒有網路、簽章錯誤），而不是只顯示「完成」，並且在有更新版本之前，不再重新顯示已關閉的「新功能」卡片。

## 此版本尚未包含

- **0.7 未經程式碼簽署。** 簽署與 Microsoft Store 套件已移到 0.8，因為憑證驗證尚未通過。請核對 getcadcraft.com/download 上每個檔案旁的 SHA-256。在 Windows 上，若 SmartScreen 擋住安裝程式，請選擇 {{ui:更多資訊}}，再選擇 {{ui:仍要執行}}。在 Mac 上，第一次請在 CadCraft Studio 上按右鍵並選擇 {{ui:開啟}}。CadCraft Studio 尚未上架任何應用程式商店，目前也沒有 iPad 或 iPhone 版本。
- {{ui:單位}} 中的角度與坡度清單會儲存，但目前沒有任何方塊讀取它們。
- DWG 的 OLE 物件會保留但不顯示，OLE 物件內的中繼檔圖片也不會繪出。
- 讀取其他程式的列印樣式表（CTB 檔案）需等待範例檔案。
- 以 `\M+` 碼寫成的較舊亞洲文字可以讀取，但尚未與來自其他程式的檔案核對。
- PDF 底圖：頁面內的圖片會顯示在畫面上，但不會列印；助理的列印會略過底圖；其他程式如何讀取儲存的裁剪與比例，也尚未在它們之中檢查。
- 歷程記錄：CadCraft 尚未將其儲存傳送到雲端，因此雲端版本是從其他裝置與網頁儲存的版本。歷程記錄僅限 CadCraft Studio。
- Studio 重新啟動後是否會保留 acad.lsp 支援資料夾，尚未檢查；若詢問，請在 APPLOAD 中再次選擇該資料夾。
- 雷射面板尚未在真正的雷射機上試過：請在廢料上測試每項設定。CadCraft Studio 沒有 Web Serial，因此在 Studio 中，面板只能儲存 G-code。
- 掃描對位已在虛構的掃描上測試，尚未用於真實掃描儀的掃描組。
- 雙指平移已用模擬的觸控板事件試過，尚未在真正的觸控板上試過。
- {{cmd:PEDIT}} 沒有編輯頂點選項（請使用夾點或屬性）。偏移、修剪、延伸、圓角、打斷與接合尚不接受雲形線；雲形線的高度（Z）不會保留。
- 新的段落文字尚無法加上格式碼，SVG 列印也只以單一色彩顯示格式化文字。
- WBLOCK 的整張圖形只寫出模型，不含圖紙。目前的標註樣式不會儲存在檔案中：圖形開啟時以 Standard 為目前樣式。
- 功能區功能表樣式尚無圖層、色彩或線型清單：請使用 {{ui:圖層}} 面板與 {{ui:屬性}}。
- 點雲仍不會儲存在圖形中或列印，E57 檔案最多開啟 600 萬個點與 512 MB。
- CadCraft 儲存的 DWG 檔案尚未在 AutoCAD 本身中檢查。

其餘內容請參閱[尚未實作](topic:not-built-yet)。
