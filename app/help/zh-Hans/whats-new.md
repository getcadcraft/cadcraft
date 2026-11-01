---
title: 0.7 新增功能
summary: PDF 底图和 PDF 导入、带自动描摹的扫描图形、使用 SPLINE、SPLINEDIT 和 PEDIT 的真正样条曲线、标注样式管理器、保留格式的文字、WBLOCK 和你自己的比例、来自其他程序的三维实体、扫描配准、激光面板、USD 导出、CadCraft Studio 中的历史记录和打印、有引导的第一张图形、可放在任意一侧或使用更少行数的工具栏，以及为 AI 助手提供的更多功能。
keywords: 新增功能, 版本说明, 更新日志, 更改, 0.7, 版本, 新功能, pdf, pdfattach, pdfimport, 底图, 扫描件, scanattach, scantrace, 描摹, 光栅, rastersnap, 样条曲线, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, 格式, wblock, scalelistedit, 比例列表, acis, 三维实体, registerscans, 配准扫描, icp, e57, las, 激光, grbl, g代码, usd, usdout, 历史记录, 版本, 比较, 打印, 打印机, png, svg, 打印样式, 线型, 导览, 速查表, 命令对照表, 工具栏位置, 工具栏行数, toolbardock, regen, regenall, 触控板, 轻扫, 代码页, 西里尔文, 韩文, 中文, 日文, 电气, rcd, p&id, pid, acad.lsp, acaddoc.lsp, 支持文件夹, 助手, mcp, 单位, 葡萄牙语
from: b9258ca6
---

以下是 CadCraft 0.7 相对于 0.6 的变化。其中很多是在 Discord 上提出的。列表按领域分组，最重要的在前。

## 新增

### PDF 和扫描图形

- **把 PDF 页面放到图形下方。**{{cmd:PDFATTACH}}（`PDFATT`）按真实尺寸或你输入的比例放置一页。可以捕捉它的线条、淡化它、将其变为单色（{{cmd:PDFADJUST}}）、剪裁它（{{cmd:PDFCLIP}}），并切换PDF自己的图层（{{cmd:PDFLAYERS}}）。它打印为线条、填充和文字，DWG或DXF 2000会把它保存为指向该文件的链接。用{{ui:打开}}打开PDF时，会询问是附着还是导入。参见[PDF 底图和 PDF 导入](topic:pdf-underlay)。
- **把 PDF 页面变成图形对象。**{{cmd:PDFIMPORT}}（`PDFIM`）按真实尺寸、输入的比例，或根据两个点和一个真实距离换算的比例，在以PDF命名的图层上生成直线、多段线、圆、圆弧、实体填充和文字，一次撤销步骤即可完成。参见[导入一页](topic:pdf-underlay#import-a-page)。
- **扫描图形。**{{cmd:SCANATTACH}}导入PNG、JPEG或TIFF（一页或全部页面），或是图片形式的PDF页面。然后可根据两个点缩放它（{{cmd:SCANSCALE}}）、对齐它（{{cmd:SCANALIGN}}）、根据它自己的长线将其摆正（{{cmd:SCANDESKEW}}）、将其变为黑白并去除斑点（{{cmd:SCANCLEAN}}）、裁剪它并擦除其中的部分。每一步都是一次撤销步骤，原始文件会保留。参见[扫描图形和描摹](topic:scanned-drawings)。
- **把扫描件描摹成直线和圆弧。**{{cmd:SCANTRACE}}在新图层 SCAN-TRACE 上按你设定的公差把扫描件的线条绘制为直线和圆弧，文字和填充保持原样。报告会说明生成了什么、留下了什么，但并不保证结果正确：请对照图纸检查。{{cmd:RASTERSNAP}}让对象捕捉能找到扫描件的端点、角点和交叉点。不会向任何地方发送数据，也不使用训练过的模型。参见[描摹](topic:scanned-drawings#the-trace)。

### 绘图和编辑

- **真正的样条曲线。**{{cmd:SPLINE}}（`SPL`）通过各点或根据控制点绘制曲线（1至5阶），带端点切线；{{cmd:SPLINEDIT}}（`SPE`）移动、添加和删除拟合点或控制点，设置权重，打开、闭合、反转，或将样条曲线变为多段线。来自DWG和DXF文件的样条曲线作为样条曲线打开，DWG和DXF 2000也将其保存为样条曲线。参见[样条曲线和多段线](topic:splines)。
- **PEDIT。**{{cmd:PEDIT}}（`PE`）闭合和打开多段线，把直线和圆弧合并到多段线中，设置统一宽度，使曲线穿过顶点或让样条曲线沿顶点拟合，并用“非曲线化”将其还原，反转，以及同时编辑多条。参见[编辑多段线](topic:splines#edit-a-polyline)。
- **WBLOCK。**{{cmd:WBLOCK}}（`W`）把块、若干对象或整个图形写入一个新的DWG或DXF，其中只含它们所用的图层、样式和块。参见[将块或对象写入单独的文件](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own)。
- **REGEN 和 REGENALL。**{{cmd:REGEN}}（`RE`）根据图形重新绘制你所在的选项卡，{{cmd:REGENALL}}（`REA`）则重新绘制每个选项卡、窗格和已打开的图形。参见 [REGEN 和 REGENALL](topic:commands#regen-and-regenall)。

### 文字和标注

- **文字保留其格式。**来自其他程序的段落文字保留每个词的颜色、粗体和斜体、下划线、堆叠分数和高度：它们在屏幕上和PDF中绘制出来，编辑文字时保留，并存回文件。参见[来自其他程序的段落文字内部的格式](topic:text#formatting-inside-paragraph-text-from-other-programs)。
- **标注样式管理器。**{{cmd:DIMSTYLE}}（`D`）创建、修改、比较和应用命名的标注样式；修改样式会修改使用它的每个标注。{{cmd:DIMEDIT}}（`DED`）还原文字、输入新文字、旋转文字或使尺寸界线倾斜；{{cmd:DIMTEDIT}}将文字移到左侧、右侧或中心。参见[命名的标注样式](topic:dimension-settings#named-dimension-styles)。
- **你自己的比例。**{{cmd:SCALELISTEDIT}}（`SCALELIST`）可把 1:75 这样的比例添加到视口和打印比例列表中；它们保存在图形中（DWG和DXF 2000），来自其他程序的图形会带有自己的列表。参见[比例](topic:units-papers-scales#scales)。
- **其他文字系统的文字。**以西里尔文、韩文、中文、日文或越南文代码页保存的DXF文件现在可以带着文字打开，中文、日文和韩文的文字可在PDF中打印（打印时第一次需要时会获取更大的字体）。参见[字体](topic:text#font)。

### 出图和打印

- **打印样式表中的更多设置。**对于每种颜色，表格现在还可设置线型、线端和线连接，以及将实体填充打印为填充线的填充样式；该表有自己的线宽列表和线型比例。参见[打印样式表](topic:plot-pdf#plot-style-tables)。
- **打印，以及PNG和SVG文件。**打印对话框有{{ui:打印…}}、{{ui:下载PNG}}（300 dpi）和{{ui:下载SVG}}。在 CadCraft Studio 中，它会列出电脑的打印机、其纸张和份数。参见[打印](topic:plot-pdf#print)和[图片和SVG文件](topic:plot-pdf#picture-and-svg-files)。

### 三维和点云

- **来自其他程序的三维实体。**图形模型空间中的实体、面域和体显示在3D选项卡上，只读，另存为DWG时原样写回。CadCraft 尚不能绘制的曲面上的面会被列出，而不是猜测。参见[来自其他程序的实体](topic:3d-solids#solids-from-other-programs)。
- **配准多个扫描。**{{cmd:REGISTERSCANS}}（`REGSCAN`）通过点对或输入的目标坐标，将从不同位置获取的扫描放入同一坐标系，用ICP精化，将配准保存为一个小型项目文件，并将配准后的点云写为一个LAS或E57文件。参见[将多个扫描配准为一个](topic:register-scans)。
- **USD 导出。**{{cmd:USDOUT}}，或{{cmd:EXPORT3D}} › {{ui:USD}}，把3D选项卡的实体写为 `.usda`、`.usdc` 或 `.usdz`。参见[将三维模型导出为 USD](topic:usd)。
- **3D选项卡上的计算。**在3D选项卡的工具询问距离的地方，可以像在命令行上一样输入算式。参见[输入值中的算术运算](topic:coordinate-entry#arithmetic-in-a-typed-value)。

### 制造

- **把图形发送到激光机。**{{cmd:LASER}}，或{{ui:视图}} › {{ui:更多}} › {{ui:激光…}}，在图形上方打开一个面板：每个图层可切割、划线、雕刻线条、填充形状、雕刻图片，或不发送，并带有功率、速度和遍数。预览随你的编辑而更新，{{ui:保存G代码…}}写出GRBL激光模式G代码，在Chrome或Edge中，该面板还可以框选作业范围并通过USB发送。这些设置保存在图形中（DWG和DXF）。参见[将图形发送到激光机](topic:laser-cutting)。
- **电气插件中的建筑安装符号。**数据、电话和电视插座，钥匙开关和定时开关，温控器，出口标志，探测器，手动报警按钮和声响器，风扇，热水器，炉灶，电动汽车充电点，电能表和分配电箱，以及RCD和RCBO符号。回路可以带有RCD，配电盘明细表有RCD列，检查会指出没有30 mA或更小RCD的插座回路。这是规划提醒，不是规范检查。
- **P&ID 插件。**P&ID 用于绘制工艺流程图：带连接点的符号、工艺线和信号线、位号、管线编号、管线、设备、仪表和阀门清单（CSV或工作簿）以及检查。它随 CadCraft 提供，在你于{{ui:设置}} › {{ui:常规}} › {{ui:插件}}中开启之前处于关闭状态。这是绘图辅助，不是工程批准，目前其文字仅有英文。

### 入门和界面

- **有引导的第一张图形。**{{cmd:TOUR}}（或起始卡片上的{{ui:进行导览}}）在真实图形中带你走过六个步骤：一条直线、一个圆、一次移动、一次修剪、一次删除和一个标注。CadCraft 第一次打开且其中没有任何内容时，它会自动开始。参见[想要有人带着做？](topic:getting-started#prefer-to-be-guided)
- **速查表和命令对照表。**[速查表](topic:cheat-sheet)在一页上列出40个日常命令，也有可打印的PDF；[命令对照表](topic:command-map)按A到Z列出命令及其简称。
- **工具栏可放在任意一侧。**{{ui:设置}} › {{ui:CadCraft}} › {{ui:工具栏位置}}：顶部（和以前一样）、底部、左侧或右侧，或输入{{cmd:TOOLBARDOCK}}。参见[工具栏位置](topic:settings#toolbar-position)。
- **工具栏行数。**{{ui:设置}} › {{ui:CadCraft}} › {{ui:工具栏行数}}：自动换行以适应、2行或1行，适用于 CadCraft 工具栏以及经典绘图和功能区样式。{{key:Shift+Ctrl+F1}}依次切换这些设置，{{key:Ctrl+F1}}依次切换按钮的显示内容，{{cmd:TOOLBARROWS}}和{{cmd:TOOLBAR}}可进行设置。起始提示有了关闭按钮。感谢 GJoe2，他以拉取请求的形式提交了这项改进。参见[工具栏行数](topic:settings#toolbar-rows)。

### 在 CadCraft Studio 中

- **历史记录。**{{cmd:HISTORY}}（`HIST`），或{{ui:视图}} › {{ui:更多}} › {{ui:历史记录…}}：Studio 在你打开和保存图形时保留的副本，以及从云端打开图形时该图形的云端版本。可打开或恢复其中一个，或比较两个，并以颜色显示添加、删除和更改的内容。参见[历史记录](topic:history)。
- **acad.lsp 和 acaddoc.lsp。**在{{cmd:APPLOAD}}中选择一个支持文件夹：这两个文件在 CadCraft 启动时加载（acaddoc.lsp 在每个新图形选项卡中再次加载），`S::STARTUP` 在它们之后运行。参见[从支持文件夹加载 acad.lsp 和 acaddoc.lsp（Studio）](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio)。
- **打印对话框在自己的窗口中。**标题栏中的按钮会把它移到一个可以放到另一台显示器上的窗口中。参见[移动对话框](common:arrange-panels#move-a-dialog)。

### 为 AI 助手

- **按名称使用你所选文件夹中的文件。**在 CadCraft Studio 中，助手可以按名称打开、保存和打印文件，并把命令所需的文件交给命令（从文件INSERT、COUNT的导出、SAVEAS、PLOT），但只能在你于{{ui:设置}} › {{ui:CadCraft}} › {{ui:助手}} › {{ui:助手可使用的文件夹}}下添加的文件夹内。参见[让它使用你所选文件夹中的文件](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose)。
- **更少的调用。**助手可以一次输入整行命令，在两次调用之间保持命令打开，按类型和图层统计对象数量而无需逐一列出，并一步放置带属性值的块。
- **无需窗口。**`cadcraft` 命令行可写出SVG打印文件，并一次转换、打印、检查或描述多个文件。MCP 软件包尚未发布。参见[无需打开 CadCraft 即可处理文件](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft)。

## 更改

- **触控板可以平移。**在触控板上移动两根手指，二维视图会跟着移动；捏合和鼠标滚轮用于缩放。参见[鼠标、触控板和触摸](topic:mouse-trackpad-touch)。
- **OLE 对象会保留。**DXF中的嵌入对象显示为其图片或带标签的边框，并由DXF 2000存回。DWG中的嵌入对象在你另存为DWG时保留并写回，但暂不显示。以前它们在保存时会丢失。参见[来自其他程序的对象（OLE）](topic:pictures#objects-from-other-programs-ole)。
- **新图形的单位**跟随你在{{ui:设置}} › {{ui:常规}} › {{ui:单位}}中加星标的单位。

## 已修复

- 打开时为空的布局，或丢失了一个视口而以整个模型代替的布局，现在会带着真实的视口打开。与其内容没有链接的布局会被保留，打开报告会说明这一点。
- 较旧代码页的DXF文件中的西里尔文和韩文显示为乱码。现在读取正确。
- 来自其他程序的段落文字在打开时丢失了格式，并以纯文本存回。

## 在每个应用中

- **单位。**{{ui:设置}} › {{ui:常规}} › {{ui:单位}}为长度、面积、体积、角度和坡度各有一个列表，数值与各单位定义给出的精确尺寸一致（美国测量英尺是独立的单位）。关闭你从不使用的单位，它们就会从单位列表中消失；给某个单位加星标，新的工作就以它开始。文件始终保留自己的单位。在 CadCraft 中，当星标单位是图形能够使用的单位时，星标会设置新图形的单位；CadCraft 自己的{{ui:单位}}框目前不跟随这些开关。图形有了单位之后，你输入的长度可以带任何单位的符号。参见[单位、输入的值和单位列表](common:unit-lists)。
- **更紧凑的布局和可收起的面板。**{{ui:设置}} › {{ui:常规}} › {{ui:布局密度}} › {{ui:紧凑}}可让屏幕容纳更多内容（触摸屏和手机保留较大的按钮）。每个侧面板都有一条纤细的标题栏：拖动它可停靠或浮动面板，拖到另一个面板的标题栏上可作为选项卡共用一个框架，固定后可滑向边缘，或隐藏后从边缘调出。参见[排列面板](common:arrange-panels#make-the-layout-denser)。
- **对话框可以移动。**拖动标题栏可将对话框移出绘图区域；它会回到你放下的位置。双击标题栏可使其重新居中。参见[移动对话框](common:arrange-panels#move-a-dialog)。
- **AI 助手的配方。**为你自己的助手准备的十个实际请求示例（整理图形、打印一套图纸、检查图形、向模型提问、汇总算量、尝试零件变体……），每个都列出所调用的工具和所需的权限，并由我们的测试回放验证。这些应用本身不含 AI。参见 [AI 助手配方](common:assistants-recipes)。
- **语言。**{{ui:设置}} › {{ui:常规}} › {{ui:语言}}中新增了 **Português (Portugal)**。它、**Português (Brasil)**、**Español (México)** 和 **Bahasa Indonesia** 现在涵盖应用中的每一个词，均为尚未经母语者审阅的草稿。帮助主题为英文。
- **CadCraft Studio** 会说明更新检查失败的原因（你的系统还没有对应文件、没有网络、签名无效），而不是只显示“完成”，并且在有更新的版本之前，不再重新弹出你已关闭的新增功能卡片。

## 此版本尚未实现

- **0.7 没有代码签名。**签名和 Microsoft Store 软件包已推迟到 0.8，因为证书验证尚未通过。请核对 getcadcraft.com/download 上每个文件旁的 SHA-256。在 Windows 上，如果 SmartScreen 拦截了安装程序，请选择{{ui:更多信息}}，然后选择{{ui:仍要运行}}。在 Mac 上，首次使用时，请右键点击 CadCraft Studio 并选择{{ui:打开}}。CadCraft Studio 尚未上架任何应用商店，也还没有 iPad 或 iPhone 版本。
- {{ui:单位}}中的角度和坡度列表已保存，但目前没有任何输入框读取它们。
- DWG中的OLE对象会保留但不显示，OLE对象内的图元文件图片不会绘制。
- 读取来自其他程序的打印样式表（CTB 文件）需等待示例文件。
- 以 `\M+` 代码写成的较旧亚洲文字可以读取，但尚未对照其他程序的文件检查过。
- PDF 底图：页面内的图片在屏幕上显示但不会打印，助手的打印会省略底图，其他程序如何读取保存的剪裁和比例也尚未在这些程序中检查过。
- 历史记录：CadCraft 尚不会把保存发送到云端，因此云端版本是从其他设备和网页保存的版本。历史记录仅在 CadCraft Studio 中提供。
- Studio 在重启后是否会保留 acad.lsp 支持文件夹尚未检查；如果它询问，请在 APPLOAD 中再次选择该文件夹。
- 激光面板尚未在真实激光机上试用过：请在废料上测试每项设置。CadCraft Studio 没有 Web Serial，因此在 Studio 中该面板只保存G代码。
- 配准扫描已在虚构的扫描上测试，尚未在真实扫描仪的扫描集上测试。
- 双指平移已用模拟的触控板事件试过，尚未在真实触控板上试过。
- {{cmd:PEDIT}}没有“编辑顶点”选项（请使用夹点或特性）。偏移、修剪、延伸、圆角、打断和合并尚不支持样条曲线；样条曲线的高度（Z）不会保留。
- 尚不能给新的段落文字加上格式代码，SVG 打印会把带格式的文字显示为单一颜色。
- WBLOCK 的“整个图形”只写出模型，不含图纸。当前标注样式不会保存在文件中：图形打开时以 Standard 为当前样式。
- 功能区菜单样式还没有图层、颜色或线型列表：请使用{{ui:图层}}面板和{{ui:特性}}。
- 点云仍不会保存在图形中或被打印，E57 文件最多可打开 600 万个点和 512 MB。
- CadCraft 保存的DWG文件尚未在AutoCAD本身中检查过。

其他一切参见[尚未实现的内容](topic:not-built-yet)。
