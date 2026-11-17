---
title: 在 CadCraft 中使用 AI 助手
summary: 让自己的 AI 助手或脚本与 CadCraft 协同工作：它可以做什么、如何连接任意 MCP 客户端，以及如何保持控制（权限、撤销、活动日志、断开连接）。
keywords: ai, 助手, 代理, mcp, 模型上下文协议, 脚本, 自动化, 命令行, cli, json, 令牌, 权限, 断开连接, 活动, 文件夹, 路径, svg, 批处理
from: 06ba4ef6
---

## 学习内容

如何让 AI 助手（或自编的脚本）查看图形、运行 CadCraft 命令、打印并保存，以及决定它可以改动哪些内容。

CadCraft **本身没有 AI**，也不会向任何地方发送任何内容。助手需要自备：任何支持模型上下文协议（MCP）的程序均可。CadCraft 只提供工具，具体启用哪些可以自行选择。

有两种使用方式：

- **已打开的图形。** 助手通过本机的 CadCraft Studio 在当前窗口中工作。这正是 {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} 的用途。
- **本机上的图形，无需打开应用。** CadCraft MCP 服务器和 `cadcraft` 命令行可读写指定文件夹中的 DWG 和 DXF 文件。参见下文“不打开 CadCraft 处理文件”。

## 启用

1. 打开{{ui:Settings}}（应用栏中的齿轮图标，或{{key:Mod+,}}），进入{{ui:CadCraft}}选项卡。
2. 在{{ui:Assistants}}下勾选**允许 AI 助手和脚本使用 CadCraft**。在勾选之前，此功能保持关闭。
3. 选择允许它执行的操作。**读取**默认已勾选；其他项仅在需要时勾选。

| 权限 | 助手可以做什么 |
|---|---|
| 读取 | 查看图形：描述图形、列出并查找对象、查看选择集、描述视图并截取其画面，按图层和制图规则进行检查 |
| 编辑 | 对图形运行命令并更改选择集。每个操作都是一个可撤销的步骤 |
| 保存 | 保存图形（桌面版保存到其文件；浏览器中则作为下载） |
| 导出 | 打印为 PDF 并生成其他文件 |

## 允许使用所选文件夹中的文件

在 CadCraft Studio 中，助手可以按文件名打开、保存和打印文件，而无需使用文件对话框，但仅限于在{{ui:Assistants}} › {{ui:Folders it may use}}下添加的文件夹内：

1. 点击{{ui:Add a folder…}}，在 Studio 自己的对话框中选择文件夹。
2. 此后助手可以列出其中的文件（`files_list`），打开图形（`drawing_open`），以 DWG 某一版本或 DXF 格式保存到该文件夹，打印为 PDF 或 SVG 文件，加载 LISP 文件，并为命令提供其所需的文件（`INSERT` `F`、`XATTACH`、点文件），或指定命令文件的输出位置（`COUNT` 的 CSV、`PUBLISH`）。
3. 点击{{ui:Remove}}即可立即收回文件夹。其他位置的路径会被拒绝；已存在的文件仅在助手要求替换，或该文件由助手自己写入时才会被替换。

打开文件仍需要**读取**权限；写入图形需要**保存**权限；其他任何文件则需要**导出**权限。

未勾选权限对应的工具根本不会提供给助手；即使助手仍然请求，CadCraft 也会拒绝，并将其记录在活动日志中。关闭开关会立即结束所有连接。{{ui:重置 CadCraft 设置}}也会将其关闭。

## 连接助手

助手通过本机的 **CadCraft Studio** 连接：它运行一个小型服务器，只有本机可以访问（地址 `127.0.0.1`），并受每次启动时 Studio 生成的令牌保护。打开 Studio，选择{{ui:连接助手}}，然后复制地址和令牌。

- 在助手中添加类型为 HTTP 的 MCP 服务器，填入地址（形如 `http://127.0.0.1:47615/mcp`）以及请求头 `Authorization: Bearer <token>`。Studio 会显示可粘贴的设置内容。

在 Studio 中点击{{ui:新令牌}}，所有已连接的助手都会使用新令牌重新连接。切勿分享令牌：只要 Studio 在运行，任何拥有该令牌的人都可以使用已开启的应用。

:::note
浏览器标签页无法为助手建立连接：在浏览器版应用中，该开关在使用本机的 CadCraft Studio 之前不起作用。
:::

## 始终掌握控制权

- **每个操作都是一个撤销步骤**，并以助手对该操作的名称标记，例如“助手：LINE”。按{{key:Mod+Z}}可整体撤销助手的最后一个操作。
- **可以看到它的操作。** 其命令会出现在命令历史中，前面带有**[助手]**标记，图形会随着助手的操作重新绘制。
- **它会等待操作完成。** 在命令执行过程中，助手只能读取而不能更改图形；命令结束后，它会被告知重试。
- **连接状态一目了然。** 连接期间，应用栏中的一个按钮会显示助手的名称。点击它可查看其权限，或**断开连接**。
- **活动。** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Activity}} 列出每次调用：时间、所用工具、已完成或被拒绝，以及其产生的撤销步骤。{{ui:Save the log}}会保存一份副本。

## 助手可以请求的操作

| 工具 | 权限 | 作用 |
|---|---|---|
| `app_info`、`drawing_describe`、`view_describe` | 读取 | 图形的名称、单位、图层、块、布局；屏幕上显示的内容 |
| `files_list`、`drawing_open` | 读取 | Studio：文件夹中的文件；在此窗口中打开其中一个 |
| `objects_list`、`object_get`、`selection_get` | 读取 | 对象及其几何形状、长度和面积（或仅按类型和图层统计数量）；选择集 |
| `drawing_check` | 读取 | 规则，例如允许的图层、0 图层上不得有对象、颜色为随层、文字高度 |
| `view_screenshot` | 读取 | 图形当前显示状态的画面 |
| `command_run` | 编辑 | 在命令行中键入：`LINE 0,0 @100,0 @0,50 ` 的读法与键入一致（空格结束一个回答），或为每个回答单独列出的列表。它可以让命令保持打开状态，并在下一次调用时继续 |
| `script_run` | 编辑 | 脚本（`.scr`）或 LISP 文件，与 {{ui:APPLOAD}} 加载方式相同 |
| `block_insert` | 编辑 | 一步插入一个块，并带上其属性值 |
| `selection_set`、`undo` | 编辑 | 为下一个命令选择对象；撤销其自身的步骤 |
| `drawing_save` | 保存 | CadCraft 自身的{{ui:Save}}，或{{ui:Save as}}到所选文件夹之一 |
| `drawing_plot` | 导出 | 图纸或模型的 PDF 或 SVG，按比例或适合窗口（PDF 底图暂不能以此方式打印） |

助手运行命令时，CadCraft 会在命令行中提问，而不是弹出对话框（例如询问要插入整个图形还是一个块），以便助手作答。库和查找仍需要人工操作；助手会被告知向用户提问。

## 不打开 CadCraft 处理文件

CadCraft MCP 服务器（`cadcraft-mcp`）和命令行（`cadcraft`）在 Node.js 中运行 CadCraft 自身的图形代码，没有窗口。它们需要 Node.js 20 或更高版本。

- **MCP 服务器**只在指定的文件夹内工作，且只具有授予它的权限：`npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`。没有 `--root` 时无法打开任何文件；没有 `--allow` 时只能读取。它还可以读取 IFC 模型、算量结果以及 PDF 图纸集中的批注。
- **命令行**用于自编脚本：`cadcraft info plan.dwg`、`cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`、`cadcraft convert plan.dwg plan.dxf`、`cadcraft plot plan.dwg plan.pdf --all`、`cadcraft plot plan.dwg plan.svg`、`cadcraft check plan.dwg --rules rules.json`。一次处理多个文件：`cadcraft convert *.dwg out --to dxf`、`cadcraft plot *.dwg pdfs --to pdf`、`cadcraft check *.dwg --rules rules.json`。添加 `--json` 可输出程序可读取的内容。

:::note
若 `npx @getcadcraft/mcp` 提示找不到该包，说明它尚未发布。getcadcraft.com 上的新闻会在发布时公布。
:::

## 如果出现问题

- **助手看不到 CadCraft 工具：** 检查此窗口中的开关是否已打开，并确认该窗口已在 Studio 中打开。
- **“needs the edit permission”：** 在{{ui:Assistants}}下勾选**编辑**，然后重新请求。
- **“outside the folders assistants may use”：** 在{{ui:Assistants}} › {{ui:Folders it may use}}下添加该文件夹，或让助手使用一个已添加文件夹中的文件。
- **“401”或“token”错误：** 令牌已更改（Studio 已重启，或使用了{{ui:新令牌}}）。将新令牌复制到助手的设置中。
- **其更改有误：** 按{{key:Mod+Z}}。每按一次，即可撤销助手的一整个操作。

## 另见

- [AI 助手示例](common:assistants-recipes)：实例演示，每个示例都附有其调用的工具。
