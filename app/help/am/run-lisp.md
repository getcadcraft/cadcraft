---
title: LISP ሩቲኖችን አሂድ
summary: የCadCraft LISP ምን እንደሚያሂድ (ተግባራት፣ ጥያቄዎች፣ ትዕዛዞች፣ ነገሮች፣ ንግግሮች፣ vla ነገሮች)፣ LISP በትዕዛዝ መስመሩ እንዴት እንደሚጻፍ፣ እና ገና ምን እንደሌለው።
keywords: lisp, ሩቲን, lsp, dcl, ንግግር, ትዕዛዝ, defun, entget, ssget, vla, vlax, vl, getpoint, ስህተት, ተኳሃኝነት, ምን ይሰራል
from: 571bc077
---

## የሚማሩት

ለሌላ CAD ፕሮግራም የተጻፈ LISP ሩቲን ሲጭኑ ምን እንደሚጠበቅ፦ የትኞቹ ክፍሎች በCadCraft ውስጥ እንደሚሰሩ፣ እና ገና ምን እንደሌለው።

CadCraft የራሱ LISP አለው። ከሕዝብ AutoLISP ማጣቀሻ ተጽፏል፣ ከማንም ፕሮግራም አልተገለበጠም፤ ስለዚህ ለAutoCAD የተጻፉ አብዛኞቹ ሩቲኖች ሳይለወጡ ይሰራሉ። የሆነ ነገር ከጎደለ የትዕዛዝ መስመሩ ተግባሩን ይጠቅሳል፣ ስለዚህ የጎደለው የCadCraft ክፍተት ወይም የሩቲኑ ስህተት መሆኑን መለየት ይችላሉ።

## LISP በትዕዛዝ መስመሩ ጻፍ

`(` በሚጀምር አገላለጽ ይጻፉ እና {{key:Enter}} ይጫኑ፦ `(+ 1 2)` `3` ያሳያል። `!name` የተለዋዋጭን ዋጋ ያሳያል። ያልተዘጋ አገላለጽ ለቀጣዩ መስመር ይጠብቃል።

በጥያቄ ላይ አገላለጽ ይመልሰዋል፦ "ራዲየስ ይግለጹ" በሚል ጥያቄ `(* 2 12.5)` ይጻፉ፤ ውጤቱ 25 ነው።

## የሚሰራው

- **ቋንቋው:** `defun` (ከ/ በኋላ የአካባቢ ተለዋዋጮች ጋር)፣ `setq`፣ `lambda`፣ `if`፣ `cond`፣ `while`፣ `repeat`፣ `foreach`፣ `progn`፣ `and`፣ `or`፣ `quote`፣ `apply`፣ `mapcar`፣ `eval`፣ `read`፣ `load`፣ እና `*error*` (አካባቢያዊ `*error*` ይሰራል)። ስሞች በትልቅና ትንሽ ፊደል አይለዩም፤ integers እና reals እንደሚጠብቁት ይለያያሉ (`(/ 7 2)` ውጤቱ 3 ነው)።
- **ውስጠ-ግንቡ ተግባራት:** ሂሳብ፣ ዝርዝሮች (`car`፣ `cdr` እና ቤተሰባቸው፣ `assoc`፣ `nth`፣ `member`፣ `subst`፣ `append`…)፣ ጽሑፎች (`strcat`፣ `substr`፣ `strcase`፣ `wcmatch`…)፣ መለወጥ (`rtos`፣ `atof`፣ `itoa`፣ `angtos`፣ `distof`፣ `cvunit`)፣ ጂኦሜትሪ (`polar`፣ `distance`፣ `angle`፣ `inters`) እና ፋይሎች (`open`፣ `read-line`፣ `write-line`፣ `close`፣ `findfile`)።
- **ትዕዛዞች:** `(defun c:NAME …)` ትዕዛዝ ይሰራል። `(command …)` እና `(command-s …)` የCadCraft የራሱን ትዕዛዞች ያንቀሳቅሳሉ፣ ለመልስዎ `pause` ይጠቀሙ።
- **ጥያቄዎች:** `getpoint`፣ `getcorner`፣ `getdist`፣ `getangle`፣ `getreal`፣ `getint`፣ `getstring`፣ `getkword` ከ`initget` ቁልፍ ቃላት ጋር፣ `entsel`፣ `nentsel` እና `ssget` (`W`፣ `C`፣ `F`፣ `WP`፣ `CP`፣ `P`፣ `L`፣ `X`፣ በማጣሪያ ዝርዝሮችና በ`-4` ፈተናዎች)።
- **ነገሮች እንደ ዝርዝሮች:** `entget`፣ `entmod`፣ `entmake` (ብሎኮችንም ጨምሮ)፣ `entdel`፣ `entlast`፣ `entnext` (የብሎክ ማጣቀሻ ባህርያት ከኋላው እንደ ATTRIB ይመጣሉ፣ ከዚያም SEQEND፣ ስለዚህ የባህርይ ሩቲኖች ይሰራሉ)፣ `handent`፣ የምርጫ ስብስቦች፣ `tblsearch` እና `tblnext`፣ `layoutlist`፣ `regapp`፣ `getvar` እና `setvar` ለCadCraft ላሉት ቅንብሮች።
- **ንግግሮች:** `.dcl` ፋይሎች ከ`load_dialog`፣ `new_dialog`፣ `action_tile`፣ `set_tile`፣ `get_tile`፣ `start_list`፣ `start_dialog`፣ `done_dialog` ጋር። አዝራሮች፣ የማስገቢያ ሳጥኖች፣ የዝርዝር ሳጥኖች፣ ተቆልቋይ ዝርዝሮች፣ መቀያየሪያዎች፣ የራዲዮ አዝራሮች፣ ረድፎች፣ አምዶችና ሳጥኖች ሁሉ ይታያሉ። ንግግሩን ወደ ጊዜያዊ ፋይል የሚጽፍ ሩቲንም ይሰራል።
- **ነገሮች:** `vl-load-com` (ምንም አያደርግም፤ መጫን የሚያስፈልገው ነገር የለም)፣ የ`vl-` ዝርዝርና ጽሑፍ ተግባራት፣ `vl-catch-all-apply`፣ እና `vla-get-…` / `vla-put-…` ባህርያት፣ `vla-…` ዘዴዎች እና `vlax-for` በBlocks፣ Layers እና Layouts ስብስቦች ላይ፣ የሞዴል ቦታና የብሎክ ፍቺዎች፣ ከተለዋዋጮችና ከተጠበቁ ድርድሮች ጋር።

## የተፈተኑ ሩቲኖች

የCadCraft ፈተናዎች ለእነዚህ ፍተሻዎች የተጻፉ የሩቲኖች ስብስብ ያካሂዳሉ (የምርጫ ማጣሪያዎች፣ ጥያቄዎች፣ ትዕዛዞች፣ ነገሮች፣ የስህተት ተቆጣጣሪዎች)፣ እንዲሁም ሰዎች በስም የጠየቁት አንድ ታዋቂ ሩቲን፦ የLee Mac's DelBlocks፣ በስሙ በንግግሩ በኩልም ሆነ ብሎክ በመምረጥ። CadCraft የራሱ {{cmd:DELBLOCKS}} አለው፣ ስለዚህ ለዚያ ሩቲን አያስፈልጎትም።

## ገና አልተሰራም

- `grread` (የመዳፊቱን እንቅስቃሴ እራስዎ መከታተል)፣ ምላሽ ሰጭዎች (`vlr-…`)፣ የኩርባ ተግባራት (`vlax-curve-…`)፣ መዝገበ-ቃላትና ተጨማሪ ውሂብ (`dictsearch`፣ xdata በ`entget` እና `entmake`)፣ እና የExpress Tools `acet-…` ተግባራት።
- በንግግሮች ውስጥ ያሉ ምስሎችና ስላይዶች ባዶ ፍሬም ሆነው ይታያሉ።
- ሌላ ፕሮግራም ማስኬድ፣ የWindows registry፣ እና ከጫኑዋቸው ውጭ ያሉ ፋይሎች፦ ሩቲን የራሱን ጊዜያዊ ፋይሎች ሊጽፍና ሊያነብ ይችላል፤ እነዚያ ገጹን እስኪዘጉ ድረስ ይቆያሉ።

ሩቲኑ ከነዚህ አንዱ ላይ ሲደርስ የትዕዛዝ መስመሩ "የተግባር ፍቺ የለም" እና ስሙን ያሳያል፣ እና CadCraft ገና እንደሌለው ይናገራል።

## መወገድ ያለባቸው ስህተቶች

- **ከCadCraft ትዕዛዝ ጋር ተመሳሳይ ስም ያለው ትዕዛዝ።** የCadCraft የራሱ ትዕዛዝ ይቆያል። የሩቲኑን በትዕዛዝ መስመሩ `(c:NAME)` ብለው ያስኪዱ።
- **የማያምኑትን LISP ማስኬድ።** ሩቲን በስዕሉ ውስጥ ማንኛውንም ነገር ሊለውጥ ይችላል፣ ነገር ግን ከስዕሉ ውጭ ምንም ነገር አይለውጥም፦ ፋይሎችዎን፣ ሌሎች ጣቢያዎችን ወይም ሌሎች መተግበሪያዎችን ሊደርስባቸው አይችልም።
