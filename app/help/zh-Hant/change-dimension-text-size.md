---
title: 變更標註文字大小
summary: 讓標註文字變大或變小，適用於之後建立的標註，也適用於圖形中已有的標註。
keywords: dimension text size, 標註文字大小, text height, 文字高度, dimtxt, dimscale, 標註文字太小, 標註文字太大, 放大標註文字, annotation scale, 註解比例
from: 30e40633
---

## 之後建立的標註

1. 按{{key:Esc}}使未選取任何內容：右側面板會顯示{{ui:Current settings}}。
2. 向下捲動面板至{{ui:New dimensions}}。在{{ui:Text height}}中輸入要在紙上呈現的高度（例如 `2.5` 代表 2.5 mm，或 `3/32"`），然後按{{key:Enter}}。
3. 將{{ui:Overall scale}}設為列印比例（`50` 代表 1:50，`48` 代表 1/4" = 1'-0"）：每個尺寸都會乘以此值。

在命令列上，{{cmd:DIMTXT}}設定高度，{{cmd:DIMSCALE}}設定整體比例。

## 圖形中既有的標註

1. 選取標註（一個，或多個：在屬性頂端的清單中選取{{ui:Dimension}}）。
2. 在{{ui:Text}}區段中輸入新的{{ui:Text height}}，或在較下方的{{ui:Fit}}區段中輸入新的{{ui:Overall scale}}，然後按{{key:Enter}}。

它們會立即重繪，並成為一個復原步驟。來自其他程式檔案的標註，在變更後會立即以 CadCraft 的樣式重繪。

:::tip
螢幕上看起來正確、但在列印的圖紙上很小的文字，通常是因為整體比例為 1。請將其設為圖紙的比例。
:::

請參閱[設定標註尺寸、小數位數與比例](topic:dimension-settings)，了解所有設定。
