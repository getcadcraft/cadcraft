---
title: 0.7 版的新增内容（早期版本）
summary: PDF 底图与 PDF 导入、扫描图形及自动描摹、真正的样条曲线（SPLINE、SPLINEDIT 和 PEDIT）、标注样式管理器、保留格式的文字、WBLOCK 与自定义比例、其他程序中的 3D 实体、扫描配准、激光面板、USD 导出、历史记录与打印（在 CadCraft Studio 中）、引导式首个图形、可置于任一侧或较少行数的工具栏，以及更多 AI 助手功能。
keywords: 0.7 新功能, 早期版本, 发行说明, 更新日志, 更改, 0.7, 版本, 新功能, pdf, pdfattach, pdfimport, 底图, 扫描, scanattach, scantrace, 描摹, 栅格, rastersnap, 样条曲线, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, 格式, wblock, scalelistedit, 比例列表, acis, 3D 实体, registerscans, 扫描配准, icp, e57, las, 激光, grbl, g-code, usd, usdout, 历史记录, 比较, 打印, 打印机, png, svg, 打印样式, 线型, 导览, 速查表, 命令图, 工具栏位置, 工具栏行数, toolbardock, regen, regenall, 触控板, 滑动, 代码页, 西里尔字母, 韩文, 中文, 日文, 电气, rcd, p&id, pid, acad.lsp, acaddoc.lsp, 支持文件夹, 助手, mcp, 单位, 葡萄牙语
from: d07ca034
---

以下是 CadCraft 0.7 相对于 0.6 的变化。其中许多功能来自 Discord 上的请求。列表按领域分组，最重要的在前。

## 新增

### PDF 与扫描图形

- **将 PDF 页面置于图形下方。** {{cmd:PDFATTACH}}（`PDFATT`）以实际尺寸或指定比例放置页面。可捕捉其线条、淡化显示、转为单色（{{cmd:PDFADJUST}}）、裁剪（{{cmd:PDFCLIP}}），并切换 PDF 自身的图层（{{cmd:PDFLAYERS}}）。打印时以线条、填充和文字形式输出；DWG 或 DXF 2000 则将其保留为指向该文件的链接。使用{{ui:Open}}打开 PDF 时，会询问是附加还是导入。参见[PDF 底图与 PDF 导入](topic:pdf-underlay)。
- **将 PDF 页面转为图形对象。** {{cmd:PDFIMPORT}}（`PDFIM`）会以 PDF 名称命名的图层生成直线、多段线、圆、圆弧、实体图案填充和文字，可按实际尺寸、键入的比例，或根据两点和一个实际距离进行缩放，且整个过程为一个撤销步骤。参见[导入页面](topic:pdf-underlay#import-a-page)。
- **扫描图形。** {{cmd:SCANATTACH}}可导入 PNG、JPEG 或 TIFF（单页或全部页面），或作为图片的 PDF 页面。随后可以通过两点进行缩放（{{cmd:SCANSCALE}}）、对齐（{{cmd:SCANALIGN}}）、利用其自身的长线进行校正（{{cmd:SCANDESKEW}}）、转为黑白并去除杂点（{{cmd:SCANCLEAN}}）、裁剪以及擦除部分内容。每一步都是一个撤销步骤，原始文件会被保留。参见[扫描图形与描摹](topic:scanned-drawings)。
- **将扫描件描摹为直线和圆弧。** {{cmd:SCANTRACE}}按所设定的公差，将扫描件中的线条绘制为直线和圆弧，放在新图层 SCAN-TRACE 上，文字和图案填充则保持原样。报告会说明已生成的内容和未处理的内容，但这并不表示结果正确：需对照图纸核对。{{cmd:RASTERSNAP}}可让对象捕捉找到扫描件的端点、角点和交点。不会向任何地方发送任何内容，也不使用经过训练的模型。参见[描摹](topic:scanned-drawings#the-trace)。

### 绘制与编辑

- **真正的样条曲线。** {{cmd:SPLINE}}（`SPL`）可通过点绘制曲线，或由控制点绘制（阶数 1至5），并可设置端点切线；{{cmd:SPLINEDIT}}（`SPE`）可移动、添加和删除拟合点或控制点，设置权重，打开、闭合、反转样条曲线，或将其转换为多段线。来自 DWG 和 DXF 文件的样条曲线会以样条曲线形式打开，DWG 和 DXF 2000 也会以样条曲线形式保存。参见[样条曲线与多段线](topic:splines)。
- **PEDIT。** {{cmd:PEDIT}}（`PE`）可闭合和打开多段线，将直线和圆弧连接到多段线上，设置统一宽度，通过顶点拟合曲线或沿顶点拟合样条曲线，并可使用 Decurve 还原，还可反转，以及同时编辑多条多段线。参见[编辑多段线](topic:splines#edit-a-polyline)。
- **WBLOCK。** {{cmd:WBLOCK}}（`W`）可将一个块、部分对象或整个图形写入新的 DWG 或 DXF 文件，且该文件仅包含其所用的图层、样式和块。参见[将块或对象写入独立文件](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own)。
- **REGEN 与 REGENALL。** {{cmd:REGEN}}（`RE`）根据图形重新绘制当前选项卡，{{cmd:REGENALL}}（`REA`）则重新绘制所有选项卡、窗格和已打开的图形。参见[REGEN 与 REGENALL](topic:commands#regen-and-regenall)。

### 文字与标注

- **文字保留格式。** 来自其他程序的段落文字会保留逐词颜色、粗体和斜体、下划线、堆叠分数以及字高：它们会显示在屏幕和 PDF 中，编辑文字时保留，并保存回去。参见[其他程序段落文字中的格式](topic:text#formatting-inside-paragraph-text-from-other-programs)。
- **标注样式管理器。** {{cmd:DIMSTYLE}}（`D`）可创建、修改、比较和应用命名的标注样式；修改样式会更改所有使用该样式的标注。{{cmd:DIMEDIT}}（`DED`）可恢复文字、键入新文字、旋转文字或倾斜尺寸界线；{{cmd:DIMTEDIT}}可将文字移到左侧、右侧或中心。参见[命名标注样式](topic:dimension-settings#named-dimension-styles)。
- **自定义比例。** {{cmd:SCALELISTEDIT}}（`SCALELIST`）可将诸如 1:75 之类的比例添加到视口和打印比例列表中；它们保存在图形中（DWG 和 DXF 2000），而来自其他程序的图形会带有其自身的列表。参见[比例](topic:units-papers-scales#scales)。
- **其他字母体系的文字。** 以西里尔字母、韩文、中文、日文或越南语代码页保存的 DXF 文件现在可以正常打开其中的文字，中文、日文和韩文文字可打印到 PDF 中（首次需要时，打印会获取较大的字体）。参见[字体](topic:text#font)。

### 打印与输出

- **打印样式表的更多功能。** 对于每种颜色，表格现在还可以设置线型、线端和线连接，以及一种填充样式，使实心填充以图案线的形式打印；该表格有自己的线宽列表和线型比例。参见[打印样式表](topic:plot-pdf#plot-style-tables)。
- **打印，以及 PNG 和 SVG 文件。** 打印对话框中有{{ui:Print…}}、{{ui:Download PNG}}（300 dpi）和{{ui:Download SVG}}。在 CadCraft Studio 中，它会列出本机的打印机、其纸张以及份数。参见[打印](topic:plot-pdf#print)和[图片与 SVG 文件](topic:plot-pdf#picture-and-svg-files)。

### 3D 与点云

- **其他程序中的 3D 实体。** 图形模型空间中的实体、面域和体，会显示在 3D 选项卡中，且为只读；保存为 DWG 时会原样写回。CadCraft 尚未绘制的曲面上的面会被列出，而不作推测。参见[其他程序中的实体](topic:3d-solids#solids-from-other-programs)。
- **配准多个扫描。** {{cmd:REGISTERSCANS}}（`REGSCAN`）可通过点对或键入的目标坐标，将从不同位置获取的扫描放置到同一坐标系中，使用 ICP 进行优化，将配准结果保存为一个小型项目文件，并将配准后的点云写入一个 LAS 或 E57 文件。参见[将多次扫描配准为一个](topic:register-scans)。
- **USD 导出。** {{cmd:USDOUT}}，或{{cmd:EXPORT3D}} › {{ui:USD}}，可将 3D 选项卡中的实体写为 `.usda`、`.usdc` 或 `.usdz`。参见[将 3D 模型导出为 USD](topic:usd)。
- **3D 选项卡中的计算。** 凡 3D 选项卡工具要求输入距离之处，均可像在命令行中一样键入计算式。参见[键入值中的算术运算](topic:coordinate-entry#arithmetic-in-a-typed-value)。

### 制作

- **将图形发送到激光机。** {{cmd:LASER}}，或{{ui:View}} › {{ui:More}} › {{ui:Laser…}}，会在图形上方打开一个面板：每个图层可设为切割、刻线、雕刻线条、填充图形、雕刻图片，或不发送，并可设置功率、速度和遍数。预览会随编辑而更新，{{ui:Save G-code…}}会写出 GRBL 激光模式的 G 代码；在 Chrome 或 Edge 中，面板还可以框定加工范围并通过 USB 发送。设置保存在图形中（DWG 和 DXF）。参见[将图形发送到激光机](topic:laser-cutting)。
- **电气插件中的建筑安装符号。** 数据、电话和电视插座，钥匙开关和定时开关，恒温器，出口标志，探测器，手动报警按钮和警报器，风扇，热水器，炉灶，电动汽车充电点，电能表和分配电箱，以及 RCD 和 RCBO 符号。回路可以配置 RCD，配电箱明细表中有 RCD 列，检查项会指出未配置 30 mA 或以下 RCD 的插座回路。这只是规划提醒，不是规范检查。
- **P&ID 插件。** P&ID 用于绘制管道仪表流程图：带连接点的符号、工艺线和信号线、标签、管线编号，以及管线、设备、仪表和阀门列表（CSV 或工作簿），还包括检查。它随 CadCraft 一同提供，默认关闭，直到在{{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}中开启。它是制图辅助工具，并非工程审批，目前其文字仅提供英文。

### 入门与屏幕

- **引导式首个图形。** {{cmd:TOUR}}（或开始卡片上的{{ui:进行导览}}）会在实际图形中带领你完成六个步骤：绘制直线、圆、移动、修剪、删除和标注。CadCraft 首次在图形为空时打开，会自动启动。参见[想要引导吗？](topic:getting-started#prefer-to-be-guided)
- **速查表与命令图。** [速查表](topic:cheat-sheet)将 40 个常用命令列在一页上，也可以 PDF 格式打印；[命令图](topic:command-map)按 A 至 Z 列出命令及其简称。
- **工具栏可置于任一侧。** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar position}}：顶部（与之前相同）、底部、左侧或右侧，也可以键入{{cmd:TOOLBARDOCK}}。参见[工具栏位置](topic:settings#toolbar-position)。
- **工具栏行数。** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar rows}}：自动换行以适应、2 行或 1 行，适用于 CadCraft 工具栏以及“制图经典”和功能区样式。{{key:Shift+Ctrl+F1}}可依次切换这些设置，{{key:Ctrl+F1}}则依次切换按钮的显示内容，{{cmd:TOOLBARROWS}}和{{cmd:TOOLBAR}}也可设置行数。启动提示带有关闭按钮。感谢 GJoe2 以拉取请求（pull request）的形式提交此功能。参见[工具栏行数](topic:settings#toolbar-rows)。

### 在 CadCraft Studio 中

- **历史记录。** {{cmd:HISTORY}}（`HIST`），或{{ui:View}} › {{ui:More}} › {{ui:History…}}：Studio 在打开和保存图形时保留的副本，以及从云端打开图形时该图形的云端版本。可以打开或恢复其中之一，或比较两个版本，并以颜色显示新增、删除和更改的内容。参见[历史记录](topic:history)。
- **acad.lsp 与 acaddoc.lsp。** 在{{cmd:APPLOAD}}中选择支持文件夹：CadCraft 启动时会加载这两个文件（每个新图形选项卡都会再次加载 acaddoc.lsp），之后运行`S::STARTUP`。参见[加载应用程序](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio)。
- **独立窗口中的打印对话框。** 其标题栏中的一个按钮可将它移入一个窗口，可放置到另一台显示器上。参见[移动对话框](common:arrange-panels#move-a-dialog)。

### AI 助手相关

- **按文件名使用所选文件夹中的文件。** 在 CadCraft Studio 中，助手可以按文件名打开、保存和打印文件，并为命令提供其所需的文件（从文件插入 INSERT、COUNT 的导出、SAVEAS、PLOT），但仅限于在{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}}下添加的文件夹内。参见[允许使用所选文件夹中的文件](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose)。
- **更少的调用次数。** 助手可以一次键入整行命令，在两次调用之间保持命令处于打开状态，按类型和图层统计对象数量而无需列出，并一步放置带有属性值的块。
- **无需窗口。** `cadcraft`命令行可以一次性批量写出 SVG 打印件，并转换、打印、检查或描述多个文件。MCP 包尚未发布。参见[不打开 CadCraft 处理文件](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft)。

## 更改

- **触控板可平移。** 在触控板上双指移动时，2D 视图会随之移动；双指捏合和鼠标滚轮可缩放。参见[鼠标、触控板和触摸](topic:mouse-trackpad-touch)。
- **OLE 对象会被保留。** DXF 中嵌入的对象会显示为其图片或带标签的框架，并由 DXF 2000 保存回去。DWG 中的对象在另存为 DWG 时会被保留并写回，但目前尚不显示。此前，它们在保存时会丢失。参见[其他程序中的对象（OLE）](topic:pictures#objects-from-other-programs-ole)。
- **新图形的单位**跟随在{{ui:Settings}} › {{ui:General}} › {{ui:Units}}中标星的单位。

## 修复

- 原本打开为空、或丢失视口并以整个模型代替的布局，现在会以其真实视口打开。与其内容没有链接的布局会被保留，打开报告中会注明。
- 旧代码页的 DXF 文件曾显示乱码的西里尔字母和韩文文字，现已可正常读取。
- 来自其他程序的段落文字在打开时会丢失格式，并以纯文本形式保存回去。

## 所有应用通用

- **单位。** {{ui:Settings}} › {{ui:General}} › {{ui:Units}}为长度、面积、体积、角度和坡度各提供一个列表，其精确尺寸取自各单位的定义（美国测量英尺为独立单位）。关闭从不使用的单位，它们会从单位列表中移除；标星某个单位后，新工作将以其开始。文件始终保留自身的单位。在 CadCraft 中，当标星的单位是图形可采用的单位时，标星会设定新图形的单位；CadCraft 自身的{{ui:Units}}框目前尚未跟随这些开关。图形一旦设定了单位，键入的长度即可带上任意单位的标记。参见[单位、键入值与单位列表](common:unit-lists)。
- **更紧凑的布局，以及可收起的面板。** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}}可在屏幕上容纳更多内容（触摸屏和手机保留较大的按钮）。每个侧边面板都有细长的标题栏：拖动即可停靠或浮动该面板，将其放到另一面板的标题栏上即可与之共用一个框架并以选项卡形式显示，固定后可滑动收至边缘，或将其隐藏并从边缘再次唤出。参见[排列面板](common:arrange-panels#make-the-layout-denser)。
- **对话框可移动。** 拖动对话框的标题栏，即可将其移出图形的遮挡区域；它会回到原先的位置。双击标题栏可使其重新居中。参见[移动对话框](common:arrange-panels#move-a-dialog)。
- **AI 助手示例。** 为自备助手准备的十个示例请求（整理图形、打印一组图纸、检查图形、向模型提问、汇总算量、尝试零件变体……），每个示例均附有其调用的工具及所需权限，并经我们的测试逐一重放。这些应用本身不含 AI。参见[AI 助手示例](common:assistants-recipes)。
- **语言。** **Português (Portugal)**在{{ui:Settings}} › {{ui:General}} › {{ui:Language}}中为新增语言。它与**Português (Brasil)**、**Español (México)**和**Bahasa Indonesia**现在都包含应用中的全部文字，但均为尚未经母语者审校的草稿。帮助主题目前为英文。
- **CadCraft Studio** 会说明更新检查失败的原因（尚无适用于本系统的文件、无网络连接、签名无效），而不再只显示“完成”；已关闭的“新增功能”卡片，在出现更新版本之前不会再次出现。

## 本版本尚未提供

- **0.7 未经代码签名。** 签名以及 Microsoft Store 软件包已推迟到 0.8，因为证书验证尚未通过。请核对 getcadcraft.com/download 上每个文件旁的 SHA-256 值。在 Windows 上，如果 SmartScreen 阻止安装程序，请选择{{ui:更多信息}}，然后选择{{ui:仍然运行}}。在 Mac 上，首次运行时，右键单击 CadCraft Studio 并选择{{ui:打开}}。CadCraft Studio 尚未上架任何应用商店，也尚无 iPad 或 iPhone 版本。
- {{ui:Units}}中的角度和坡度列表已保存，但目前尚无任何框读取它们。
- DWG 中的 OLE 对象已保留但不显示，OLE 对象内的元文件图片也不会绘制。
- 读取其他程序的打印样式表（CTB 文件）有待获取样本文件后再实现。
- 以`\M+`代码书写的较早亚洲文字可以读取，但尚未用其他程序的文件进行核对。
- PDF 底图：页面内的图片会显示在屏幕上但不会打印，助手的打印会排除底图，其他程序如何读取保存的裁剪和比例尚未在这些程序中核对。
- 历史记录：CadCraft 尚不会将保存内容发送到云端，因此云端版本仅为从其他设备和网页保存的版本。历史记录仅在 CadCraft Studio 中可用。
- Studio 在重启后是否保留 acad.lsp 支持文件夹尚未核对；若提示，则在 APPLOAD 中重新选择该文件夹。
- 激光面板尚未在实际激光机上试用：请先在废料上测试每项设置。CadCraft Studio 不支持 Web Serial，因此在 Studio 中该面板仅保存 G 代码。
- 扫描配准已在模拟扫描数据上测试，尚未在实际扫描仪的数据集上测试。
- 双指平移已用模拟触控板事件测试，尚未在实际触控板上测试。
- {{cmd:PEDIT}}没有“Edit vertex”选项（可使用夹点或特性）。偏移、修剪、延伸、圆角、打断和合并目前不支持样条曲线；样条曲线的高度（Z）不会被保留。
- 新建段落文字尚无法设置格式代码，SVG 打印件中的带格式文字仅以一种颜色显示。
- WBLOCK 的“Entire drawing”选项仅写出模型，不包括布局。当前标注样式未保存在文件中：图形打开时当前样式为 Standard。
- 功能区菜单样式目前还没有图层、颜色或线型列表：请使用{{ui:Layers}}面板和{{ui:Properties}}。
- 点云目前仍不会保存到图形中或打印，E57 文件最多可打开 600 万个点和 512 MB。
- CadCraft 保存的 DWG 文件尚未在 AutoCAD 本身中进行核对。

其他尚未实现的内容见[尚未实现](topic:not-built-yet)。
