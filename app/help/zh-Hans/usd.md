---
title: 将三维模型导出为 USD
summary: 将三维标签页中的实体写入为 USD，供渲染程序和其他三维软件使用。
keywords: usd, usda, usdc, usdz, openusd, 导出, 三维, 实体, usdout, export3d
from: 68748934
---

三维标签页中的实体可以写入为 USD。

- 输入{{cmd:USDOUT}}，然后选择`.usda`（文本）、`.usdc`（二进制）或`.usdz`（单个包文件），或
- 输入{{cmd:EXPORT3D}}，然后选择{{ui:USD}}以生成`.usdz`包。

每个实体成为一个对象，其面为网格，颜色为材质，单位为米，Z 轴向上。多次使用的实体只写入一次，并放置在每个副本所在的位置。
