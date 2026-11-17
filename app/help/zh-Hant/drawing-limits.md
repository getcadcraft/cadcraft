---
title: 設定圖形界限
summary: LIMITS 為圖形設定一個矩形：格點會填滿此範圍，ZOOM All 會顯示此範圍，開啟界限後，範圍外的點會被拒絕。它們會儲存於 DWG 與 DXF 檔案中。
keywords: 界限, 圖形界限, LIMITS, LIMMIN, LIMMAX, LIMCHECK, 格點, 界限外, 圖紙大小, 繪圖區域, zoom all, 邊界
from: 9e97b30d
---

**圖形界限**是一個矩形，說明圖形預計的大小：你打算在其中繪圖的區域，例如 420 × 297 的圖紙。新圖形沒有界限，因此格點與繪圖區域維持無限制，與以前相同。

## 設定界限

輸入 {{cmd:LIMITS}}，並回答：

- `Specify lower left corner or [ON/OFF] <0,0>`：一個點，或按 {{key:Enter}} 保留目前的點。
- `Specify upper right corner <420,297>`：一個點，或按 {{key:Enter}} 保留目前的點。它必須位於第一點的右上方。

或在第一個問題處輸入 `ON` 或 `OFF`，以開啟或關閉檢查，而不變更矩形。設定角點會計為一個復原步驟，每次 ON 與 OFF 也各為一個步驟。

## 作用

- **格點會填滿界限**，並在其邊緣停止。它是此區域的示意圖，因此請開啟{{ui:格點}}以查看。
- **ZOOM All**（{{cmd:ZOOM}}，然後{{ui:全部}}）會同時顯示界限與圖形；{{ui:範圍}}則只顯示圖形。
- **開啟界限（ON）時**，你輸入或點擊在界限之外的點會被拒絕，並顯示 `**Outside limits`，提示保持不變。此限制涵蓋會建立物件的指令：{{cmd:LINE}}、{{cmd:PLINE}}、{{cmd:CIRCLE}}、{{cmd:ARC}}、{{cmd:RECTANG}}、{{cmd:POLYGON}}、{{cmd:ELLIPSE}}、{{cmd:SPLINE}}、{{cmd:POINT}}、{{cmd:TEXT}}、{{cmd:MTEXT}}、{{cmd:INSERT}}、標註指令以及其他少數指令。只做移動、選取或量測的指令不受限制；貼上、拖曳夾點，或 LISP 程式建立的物件也不受限制：界限是繪圖的參考，而不是牆。關閉界限（OFF）時，不會拒絕任何內容。
- 已經位於界限外的物件會保持原位。

## 在檔案與 LISP 中

界限會以 `$LIMMIN`、`$LIMMAX` 與 `$LIMCHECK` 的形式儲存在 DWG 與 DXF 中。若其他程式的檔案只有該程式的預設界限（0,0 至 12,9 或 420,297，且檢查關閉），開啟時不會有界限，因此其格點不會被壓縮到一個小矩形中；若檔案有自己的界限，或檢查已開啟，則會保留這些界限。在 LISP 中，`(getvar "LIMMIN")`、`LIMMAX` 與 `LIMCHECK` 會讀取它們，而 `setvar` 會寫入它們，且計為一個復原步驟。

界限屬於模型。配置（圖紙）有自己的紙張大小。
