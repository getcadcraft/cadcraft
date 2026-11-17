---
title: 检查竣工点
summary: 读取测量队测得的点，并将它们与图形中的点和块进行比较：是否在公差范围之内或之外、未测量、额外的点——在图形中标记，并输出为CSV报告。
keywords: as built, as-built, asbuilt, 竣工, 测量, survey, 全站仪, total station, 放样, setting out, stake out, 点文件, point file, csv, txt, pnezd, penzd, xyz, 公差, tolerance, 偏差, deviation, 检查, check, 比较, compare, exportpoints, 布局点, layout points
from: f7c35208
---

{{cmd:ASBUILT}}（别名ASB）是{{cmd:EXPORTPOINTS}}的另一半：你将图形中的点导出供现场使用，测量队放样并测量实际建成的结果，然后ASBUILT将他们的文件与图形进行比较。

1. 输入{{cmd:ASBUILT}}，然后选择你导出时所用的相同点和块（按{{key:Enter}}会选取所有POINT，与EXPORTPOINTS相同）。
2. **竣工点的配对方式**：**编号**（测量队保留了你的点编号：输入你导出时的第一个编号）或**最近**（他们为自己的测点编号：每个设计点取最近的一个）。
3. 按你导出时的方式给出文件的单位和坐标（图形单位、米或英尺；世界坐标或UCS），以及以图形单位表示的**公差**。
4. 选择测量队的CSV或TXT文件。CadCraft读取该文件的方式与CivilCraft相同：可以是逗号、制表符、分号或空格分隔，可以有一行标明列名的标题行，或按列数识别为PNEZD。

命令行会显示配对了多少个点、其中有多少在公差范围之内、多少在公差范围之外、多少未测量、多少为额外点，以及最大距离。**在图形中标记它们？** 选择“是”会将它们放在图层**AS-BUILT**上，并作为一个撤销步骤：每个测点处放置一个点，旁边标注其编号和距离，同时从设计点到每个超出公差的测点画一条红线。CSV报告会与每个点一起下载：包括设计坐标和竣工坐标、东向、北向和高程的差值，以及结果。

另见[用于BIM程序的点](topic:points-for-bim)。
