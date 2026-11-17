---
title: 运行LISP例程
summary: CadCraft的LISP能运行哪些内容（函数、提示、命令、对象、对话框、vla对象），如何在命令行中输入LISP，以及目前尚未支持的部分。
keywords: lisp, 例程, lsp, dcl, 对话框, 命令, defun, entget, ssget, vla, vlax, vl, getpoint, 错误, 兼容性, 支持范围
from: 571bc077
---

## 学习内容

了解加载为其他CAD程序编写的LISP例程时应有的预期：哪些部分会在CadCraft中运行，以及目前尚未支持哪些部分。

CadCraft有自己的LISP。它依据公开的AutoLISP参考资料编写，并非来自任何其他程序的代码，因此大多数为AutoCAD编写的例程可以原样运行。若某项功能缺失，命令行会指出该函数名，以便区分是CadCraft的功能缺口还是例程本身的错误。

## 在命令行中输入LISP

输入以`(`开头的表达式并按{{key:Enter}}：`(+ 1 2)`会输出`3`。`!name`会输出变量的值。未闭合的表达式会等待下一行输入。

在提示下，表达式可作为答复：在“指定半径”提示下输入`(* 2 12.5)`，得到25。

## 可运行的内容

- **语言：** `defun`（局部变量写在`/`之后）、`setq`、`lambda`、`if`、`cond`、`while`、`repeat`、`foreach`、`progn`、`and`、`or`、`quote`、`apply`、`mapcar`、`eval`、`read`、`load`，以及`*error*`（局部的`*error*`同样有效）。名称不区分大小写；整数与实数的区别与预期一致（`(/ 7 2)`的结果为3）。
- **内置函数：** 数学、列表（`car`、`cdr`及其同类函数、`assoc`、`nth`、`member`、`subst`、`append`…）、字符串（`strcat`、`substr`、`strcase`、`wcmatch`…）、转换（`rtos`、`atof`、`itoa`、`angtos`、`distof`、`cvunit`）、几何（`polar`、`distance`、`angle`、`inters`）和文件（`open`、`read-line`、`write-line`、`close`、`findfile`）。
- **命令：** `(defun c:NAME …)`用于创建命令。`(command …)`和`(command-s …)`用于驱动CadCraft自身的命令，并通过`pause`暂停以等待输入。
- **提示：** `getpoint`、`getcorner`、`getdist`、`getangle`、`getreal`、`getint`、`getstring`、`getkword`（配合`initget`关键字）、`entsel`、`nentsel`和`ssget`（`W`、`C`、`F`、`WP`、`CP`、`P`、`L`、`X`，支持过滤列表和`-4`测试）。
- **作为列表的对象：** `entget`、`entmod`、`entmake`（块也可以）、`entdel`、`entlast`、`entnext`（块参照的属性以ATTRIB的形式排在其后，然后是SEQEND，因此属性例程可以正常工作）、`handent`、选择集、`tblsearch`和`tblnext`、`layoutlist`、`regapp`，以及用于CadCraft现有设置的`getvar`和`setvar`。
- **对话框：** 带有`load_dialog`、`new_dialog`、`action_tile`、`set_tile`、`get_tile`、`start_list`、`start_dialog`、`done_dialog`的`.dcl`文件。按钮、编辑框、列表框、弹出列表、开关、单选按钮、行、列和框都能显示。将对话框写入临时文件的例程同样可以运行。
- **对象：** `vl-load-com`（不执行任何操作；无需加载任何内容）、`vl-`系列的列表和字符串函数、`vl-catch-all-apply`，以及`vla-get-…`/`vla-put-…`属性、`vla-…`方法，以及对Blocks、Layers和Layouts集合、模型空间与块定义使用的`vlax-for`，支持变体与安全数组。

## 已测试的例程

CadCraft的测试会运行为这些检查编写的一组例程（选择过滤器、提示、命令、对象、错误处理程序），还包括用户按名称要求过的一个常用例程：Lee Mac's DelBlocks，既可通过其对话框按名称运行，也可通过拾取块运行。CadCraft还有自己的{{cmd:DELBLOCKS}}，因此无需为此使用例程。

## 尚未实现

- `grread`（自行跟踪鼠标）、反应器（`vlr-…`）、曲线函数（`vlax-curve-…`）、字典和扩展数据（`dictsearch`，以及`entget`与`entmake`中的xdata），以及Express Tools的`acet-…`函数。
- 对话框中的图像和幻灯片会显示为空白框。
- 运行其他程序、Windows注册表，以及加载的文件之外的文件：例程可以写入和读取自己的临时文件，这些文件会保留到关闭页面为止。

例程遇到上述任一情况时，命令行会显示“没有函数定义”及该名称，并说明CadCraft尚不支持它。

## 应避免的错误

- **与CadCraft自身命令同名的命令。** CadCraft自己的命令保持不变。请在命令行中以`(c:NAME)`运行例程的版本。
- **运行不可信的LISP。** 例程可以更改图形中的任何内容，但无法更改图形之外的任何东西：它无法访问文件、其他网站或其他应用程序。
