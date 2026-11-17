---
title: 將 3D 模型匯出為 USD
summary: 將 3D 索引標籤中的實體寫出為 USD，供算圖程式與其他 3D 軟體使用。
keywords: usd, usda, usdc, usdz, openusd, 匯出, 3d, 實體, usdout, export3d
from: 68748934
---

3D 索引標籤中的實體可以寫成 USD。

- 輸入 {{cmd:USDOUT}}，並選擇 `.usda`（文字）、`.usdc`（二進位）或 `.usdz`（單一套件檔），或
- 輸入 {{cmd:EXPORT3D}}，並選擇 {{ui:USD}} 以產生 `.usdz` 套件檔。

每個實體會成為一個物件，其面寫為網格，其顏色寫為材質，單位為公尺，Z 軸朝上。被多次使用的實體只會寫入一次，並放置在每個副本的位置。
