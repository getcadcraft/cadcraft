---
title: 為圖形加上限制條件
summary: 以幾何與標註限制條件讓線條保持水平、端點相接、尺寸固定，並在你修改尺寸時讓圖形跟著調整。
keywords: 限制條件, 限制, 參數化, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, 自由度, 完全限制
from: f8f21fa4
---

## 你會做出什麼

一塊板件，只需在一處改寬度：四邊保持垂直、一個角保持不動、高度保持為寬度的一半。

限制條件可用於 {{ui:模型}} 索引標籤上的直線、聚合線、圓、圓弧與點。每新增一個限制條件就是一個復原步驟。

## 繪製並限制外框

1. 輸入`REC`後按{{key:Enter}}。輸入`0,0`、{{key:Enter}}，再輸入`100,50`、{{key:Enter}}。
2. 輸入`AUTOCONSTRAIN`後按{{key:Enter}}。輸入`ALL`、{{key:Enter}}，然後再按一次{{key:Enter}}。

   歷程會顯示「已套用 4 個限制條件」。邊旁會出現標有 **H** 與 **V** 的小方框，這些就是限制條件列。
3. 輸入`GCFIX`後按{{key:Enter}}。在左下角附近按一下。會出現一個帶有 ⊕ 的方框，表示該角保持在原位。

`AUTOCONSTRAIN` 會在端點幾乎相接處加上重合限制條件，並在直線幾乎水平或垂直處加上水平或垂直限制條件。在其提示中輸入`S`，即可變更判定的接近程度（起始值為 0.05 圖形單位與 1°）。

## 加入尺寸

1. 輸入`DCHORIZONTAL`後按{{key:Enter}}。
2. 在左下角附近按一下，再於右下角附近按一下。
3. 在矩形下方按一下，以放置標註線。
4. 提示會顯示`Dimension text <d1=100>`。輸入`width=120`後按{{key:Enter}}。

   矩形現在寬 120，標籤會顯示`width=120`。
5. 輸入`DCVERTICAL`後按{{key:Enter}}，輸入`O`後按{{key:Enter}}，然後按一下右邊。
6. 在其右側按一下，輸入`width/2`後按{{key:Enter}}。

   高度為 60。標籤會顯示`fx: d1=width/2`：由一個運算式驅動。

歷程現在會顯示外框已完全限制。若要改變其尺寸，請變更`width`（參見[使用參數與方程式](topic:parameters)），或在`width=120`標籤上按兩下，輸入新值，然後選擇{{ui:套用}}。

## 移動有限制的物件

移動、旋轉、縮放、夾點與{{ui:屬性}}面板都會保留限制條件：你移動的部分會被固定，其餘部分則跟著調整。當限制條件無法跟隨時，該編輯不會執行，歷程會說明原因，例如「未執行：限制條件使該物件固定在原位」。刪除物件時，其限制條件也會一併刪除。

## 鏡像與修剪有限制的物件

- {{cmd:MIRROR}} 會將你鏡像的物件之間的限制條件複製到副本上。切向（相切的是哪一側）與距離的量測側，會為鏡像後的副本重新計算；被複製的標註會像貼上一樣取得各自的名稱。若`Erase source objects`設為`Y`，限制條件會保留在鏡像後的物件上。歷程會說明隨之而來的數量。
- {{cmd:TRIM}} 會將直線或圓弧的限制條件保留在剩下的部分：端點上的限制條件會轉移到仍含有該端點的線段；方向規則（{{ui:水平}}、{{ui:垂直}}、{{ui:平行}}、{{ui:垂直}}）在每一段上都成立；介於兩個外端點之間的標註會繼續量測它們。被切除部分的限制條件，或被修剪改變的長度（{{ui:相等}}、圓弧的掃角），則會移除。被修剪的圓會保留其圓心與半徑限制條件。被修剪的聚合線會失去其限制條件。

## 限制條件一覽

| 指令 | 保留 |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | 直線或線段保持水平或垂直（`2P`：兩點水平或垂直） |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | 兩條直線平行、垂直或位於同一直線上 |
| {{cmd:GCCOINCIDENT}} | 兩點相接；`O`：點位於直線、圓或圓弧上 |
| {{cmd:GCTANGENT}} | 直線與圓或圓弧，或兩者，相切 |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | 兩個圓或圓弧同心；兩個長度或兩個半徑相等 |
| {{cmd:GCSYMMETRIC}} | 兩點、直線或圓以一條直線為對稱軸對稱 |
| {{cmd:GCFIX}} | 點（在其附近按一下）或整個物件（`O`）固定在原位 |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | 一段距離 |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | 半徑、直徑、兩條直線之間的角度，或圓弧的角度 |

{{cmd:GEOMCONSTRAINT}} 與 {{cmd:DIMCONSTRAINT}} 會詢問要使用哪一種；{{ui:限制}}與{{ui:標註}}（位於{{ui:參數化}}群組中）會執行它們，而{{ui:更多}}中列出了各項。你點擊的位置決定要使用的部分：在端點附近點擊、中點或圓心會取該點；在聚合線上點擊會取其下方的線段。第一個物件保持不動，第二個物件會移動以與之相接。

與其他限制條件衝突，或因其他條件已隱含而不增加任何效果的限制條件，會被拒絕並顯示訊息，且不會移動任何東西。

## 查看、選取與移除

- 在限制條件列中按一下方框（或重合方塊，或標註標籤），即可選取該限制條件；歷程會列出其名稱。按{{key:Delete}}即可移除。
- {{cmd:DELCONSTRAINT}} 會移除你所選物件的所有限制條件。
- {{cmd:CONSTRAINTBAR}}：`S`顯示所有限制條件列，`H`隱藏。先選取物件，即可顯示或隱藏其限制條件列。{{ui:更多}}中有{{ui:顯示限制條件列}}與{{ui:隱藏限制條件列}}。
- {{cmd:DCDISPLAY}} 顯示或隱藏尺寸限制條件。它們從不列印。
- {{cmd:DCCONVERT}} 會將畫在直線、圓與圓弧上的標註轉換為尺寸限制條件。

:::note
若你曾使用過 AutoCAD 的參數化繪圖，指令名稱與提示都相同。限制條件與參數會以其他程式會忽略的形式，儲存於 DWG 與 DXF 檔案中；參見[檔案](topic:files#constraints-in-files)。
:::
