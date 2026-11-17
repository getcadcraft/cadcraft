---
title: LISP ルーチンを実行する
summary: CadCraft の LISP で実行できるもの（関数、プロンプト、コマンド、オブジェクト、ダイアログ、vla オブジェクト）、コマンドラインへの LISP の入力方法、まだ対応していないものを説明します。
keywords: lisp, ルーチン, lsp, dcl, ダイアログ, コマンド, defun, entget, ssget, vla, vlax, vl, getpoint, エラー, 互換性, 対応範囲
from: 571bc077
---

## 学習内容

別の CAD プログラム用に書かれた LISP ルーチンを読み込んだときの動作を説明します。どの部分が CadCraft で動作し、どの部分がまだ対応していないかを確認できます。

CadCraft には独自の LISP があります。公開されている AutoLISP のリファレンスをもとに作成したもので、他社のプログラムから得たものではありません。そのため、AutoCAD 向けに書かれたほとんどのルーチンは、変更せずに動作します。機能が足りない場合は、コマンドラインに関数名が表示されるため、CadCraft の未対応機能か、ルーチンの誤りかを見分けられます。

## コマンドラインに LISP を入力する

`(` で始まる式を入力し、{{key:Enter}}キーを押します。`(+ 1 2)` と入力すると `3` が表示されます。`!name` と入力すると、変数の値が表示されます。閉じていない式は、次の行の入力を待ちます。

プロンプトでは、式でそれに答えられます。「半径を指定」のプロンプトで `(* 2 12.5)` と入力すると、25 になります。

## 動作する機能

- **言語:** `defun`（`/` の後にローカル変数）、`setq`、`lambda`、`if`、`cond`、`while`、`repeat`、`foreach`、`progn`、`and`、`or`、`quote`、`apply`、`mapcar`、`eval`、`read`、`load`、`*error*`（ローカルの `*error*` も動作します）。名前は大文字と小文字を区別しません。整数と実数は区別されます（想定どおりです）。例えば `(/ 7 2)` は 3 になります。
- **組み込み関数:** 数学関数、リスト（`car`、`cdr` とその系統、`assoc`、`nth`、`member`、`subst`、`append`…）、文字列（`strcat`、`substr`、`strcase`、`wcmatch`…）、変換（`rtos`、`atof`、`itoa`、`angtos`、`distof`、`cvunit`）、幾何（`polar`、`distance`、`angle`、`inters`）、ファイル（`open`、`read-line`、`write-line`、`close`、`findfile`）。
- **コマンド:** `(defun c:NAME …)` でコマンドを作成します。`(command …)` と `(command-s …)` で CadCraft 独自のコマンドを操作します。応答には `pause` を使います。
- **プロンプト:** `getpoint`、`getcorner`、`getdist`、`getangle`、`getreal`、`getint`、`getstring`、`initget` のキーワード付きの `getkword`、`entsel`、`nentsel`、`ssget`（`W`、`C`、`F`、`WP`、`CP`、`P`、`L`、`X` に対応し、フィルターリストと `-4` のテストを指定できます）。
- **リストとしてのオブジェクト:** `entget`、`entmod`、`entmake`（ブロックも可）、`entdel`、`entlast`、`entnext`（ブロック参照の属性は、その後に ATTRIB として続き、最後に SEQEND が続くため、属性を扱うルーチンも動作します）、`handent`、選択セット、`tblsearch` と `tblnext`、`layoutlist`、`regapp`、CadCraft の設定に対する `getvar` と `setvar`。
- **ダイアログ:** `load_dialog`、`new_dialog`、`action_tile`、`set_tile`、`get_tile`、`start_list`、`start_dialog`、`done_dialog` を使う `.dcl` ファイル。ボタン、編集ボックス、リストボックス、ポップアップリスト、トグル、ラジオボタン、行、列、ボックスはすべて表示されます。ダイアログを一時ファイルに書き出すルーチンも動作します。
- **オブジェクト:** `vl-load-com`（何もしません。読み込むものはありません）、`vl-` のリスト関数と文字列関数、`vl-catch-all-apply`、`vla-get-…` / `vla-put-…` のプロパティ、`vla-…` のメソッド、そして、バリアントと安全配列を使い、ブロック、レイヤー、レイアウトのコレクション、モデル空間、ブロック定義に対する `vlax-for`。

## テスト済みのルーチン

CadCraft のテストでは、これらの確認用に書かれた一連のルーチン（選択フィルター、プロンプト、コマンド、オブジェクト、エラーハンドラー）を実行します。また、利用者が名指しで要望した人気のルーチンとして、Lee Mac の DelBlocks も確認しています。ダイアログで名前を指定する方法と、ブロックを選択する方法の両方で確認しています。CadCraft には独自の {{cmd:DELBLOCKS}} もあるため、そのためのルーチンは不要です。

## まだ対応していない機能

- `grread`（マウスの追跡を自分で行う）、リアクター（`vlr-…`）、曲線関数（`vlax-curve-…`）、ディクショナリと拡張データ（`dictsearch`、`entget` と `entmake` の xdata）、Express Tools の `acet-…` 関数。
- ダイアログ内の画像とスライドは、空白のフレームとして表示されます。
- 別のプログラムの実行、Windows のレジストリ、読み込んだもの以外のファイル。ルーチンは独自の一時ファイルを書き込み、読み込むことができます。その一時ファイルは、ページを閉じるまで残ります。

ルーチンがこれらの機能に到達すると、コマンドラインに「no function definition」と名前が表示され、CadCraft にはまだその機能がないことが示されます。

## よくある間違い

- **CadCraft のコマンドと同じ名前のコマンド。** CadCraft 独自のコマンドは残ります。ルーチンのコマンドは、コマンドラインで `(c:NAME)` と入力して実行してください。
- **信頼できない LISP の実行。** ルーチンは図面の中のものを何でも変更できますが、図面の外には何もできません。ファイル、他のサイト、他のアプリにはアクセスできません。
