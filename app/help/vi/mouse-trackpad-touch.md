---
title: Chuột, bàn di chuột và cảm ứng
summary: Cách thu phóng, di chuyển khung nhìn, nhấp chuột phải và chọn trong CadCraft bằng chuột có bánh xe, bàn di chuột Mac hoặc PC, hoặc màn hình cảm ứng, và những khác biệt giữa các trình duyệt.
keywords: bàn di chuột, bàn cảm ứng, magic mouse, cảm ứng, bảng vẽ, ipad, di chuyển, thu phóng, chụm, chuột phải, hai ngón, nút giữa, trình duyệt, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft được thiết kế cho chuột có bánh xe. Mọi thứ cũng hoạt động với bàn di chuột, chỉ cần làm quen với vài thói quen. Màn hình cảm ứng dùng được để chọn, nhưng có giới hạn.

## Chuột có bánh xe

- **Thu phóng:** lăn bánh xe. Bản vẽ thu phóng quanh con trỏ chữ thập, nên hãy trỏ vào chỗ bạn muốn xem.
- **Di chuyển:** giữ bánh xe và kéo, hoặc kéo bằng nút phải.
- **Thu phóng toàn bộ:** nhấp đúp bánh xe, hoặc nhấp {{ui:Extents}}.
- **Trở về khung nhìn trước:** nhấp {{ui:Previous}} trong nhóm Khung nhìn, hoặc gõ `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Một chuỗi bước lăn bánh xe được tính là một khung nhìn, nên một lần {{ui:Previous}} sẽ hoàn tác cả chuỗi. Lưu các khung nhìn bạn hay quay lại bằng {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** nhấp chuột phải.

## Bàn di chuột

:::mac
- **Di chuyển:** di hai ngón trên bàn di chuột, theo hướng nào cũng được: bản vẽ đi theo ngón tay. Bạn cũng có thể kéo bằng cách giữ một cú nhấp hai ngón (kéo bằng nút phải).
- **Thu phóng:** chụm hai ngón. Thu phóng đi theo con trỏ chữ thập.
- **Chuột phải (Enter):** nhấp bằng hai ngón. Nếu không có tác dụng, bật "Secondary click" trong **System Settings**, rồi **Trackpad**. Control-click có thể được CadCraft coi là nhấp thường thay vì chuột phải, nên hãy dùng nhấp hai ngón.
- **Thu phóng một vùng:** nhấp {{ui:Window}} trong nhóm Khung nhìn rồi nhấp hai góc.
:::

:::windows linux
- **Di chuyển:** di hai ngón trên bàn cảm ứng, theo hướng nào cũng được: bản vẽ đi theo ngón tay. Bạn cũng có thể kéo khi giữ nút phải.
- **Thu phóng:** chụm hai ngón. Thu phóng đi theo con trỏ chữ thập.
- **Chuột phải (Enter):** nhấp bằng hai ngón, hoặc nhấp góc dưới bên phải của bàn cảm ứng, tùy theo cài đặt bàn cảm ứng của bạn.
- **Thu phóng một vùng:** nhấp {{ui:Window}} trong nhóm Khung nhìn rồi nhấp hai góc.
:::

Giữ {{key:Space}} và kéo **không** di chuyển khung nhìn trong CadCraft: {{key:Space}} là Enter.

Bánh xe chuột vẫn thu phóng từng bước một. Bàn di chuột gửi cuộn theo từng nấc, như bánh xe, sẽ thu phóng bằng cuộn hai ngón thay vì di chuyển: hãy thu nhỏ, trỏ vào vùng bạn muốn xem, rồi phóng to lại. Tab 3D giữ các thao tác bàn di chuột riêng (xem [Mô hình trong 3D](topic:3d-solids#look-around)).

## Màn hình cảm ứng và bảng vẽ

CadCraft coi một ngón tay như một cú nhấp chuột:

- Chạm để chọn một điểm hoặc một đối tượng, hoặc để chọn.
- Kéo một ngón tay trên khoảng trống sẽ vẽ một lasso (kéo sang phải trước là cửa sổ, sang trái trước là chọn cắt; xem [Chọn bằng lasso](topic:lasso-selection)).
- Trong {{cmd:TRIM}} và {{cmd:EXTEND}}, kéo ngón tay qua các đoạn sẽ cắt hoặc kéo dài tất cả chúng.
- Kéo grip của một đối tượng đang chọn sẽ di chuyển grip đó (grip và ô chọn đều lớn hơn khi dùng ngón tay).
- **Chụm** hai ngón để thu phóng quanh điểm giữa chúng; di hai ngón cùng nhau để **di chuyển**. Ngón thứ hai sẽ hủy thao tác mà ngón đầu tiên đã bắt đầu, nên một cú chụm không bao giờ để lại dấu vết.
- **Nhấn giữ** (giữ yên khoảng nửa giây) là nhấp chuột phải: {{key:Enter}}. Nó kết thúc lệnh, hoàn tất một vùng chọn, hoặc lặp lại lệnh vừa dùng.

Dưới dòng lệnh xuất hiện một **hàng phím**: {{ui:Esc}}, {{ui:Undo}}, {{ui:Redo}}, các ký tự mà bàn phím bảng vẽ thường ẩn đi (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, một nút bàn phím và một nút {{ui:Enter}} lớn. Chạm vào nút bàn phím (hoặc dòng lệnh) để gõ lệnh hoặc số.

Không có trạng thái rê chuột, nên dấu bắt điểm chỉ hiện ở chỗ ngón tay bạn đang chạm.

:::touch
Bạn đang dùng màn hình cảm ứng. Nếu cần làm việc hơn là xem nhanh, bàn phím gắn ngoài và chuột hoặc bàn di chuột sẽ giúp CadCraft dễ dùng hơn nhiều.
:::

## Trình duyệt

CadCraft hoạt động giống nhau trên Chrome, Edge, Firefox và Safari, trên Mac, Windows và Linux. Các khác biệt nhỏ:

| Chủ đề | Cần biết |
|---|---|
| Mở DWG | Bản vẽ lớn cần vài giây để đọc trên mọi trình duyệt; dòng trạng thái hiện "Đang đọc …" trong lúc đó |
| Tải xuống | Mỗi trình duyệt tự quyết định tải xuống để ở đâu và có hỏi trước hay không; xem [Trình duyệt và máy tính](common:browsers) |
| Mở để in | Mở PDF trong thẻ mới. Nếu trình duyệt chặn cửa sổ bật lên, CadCraft sẽ tải PDF về thay thế |
| F7 | Firefox có thể đề nghị duyệt bằng con trỏ; chọn **Không** |
| Rời đi khi có thay đổi chưa lưu | Mỗi trình duyệt hiển thị câu hỏi "Rời trang?" riêng, và CadCraft không thể thay đổi nó |

:::safari
Trong Safari, PDF mở bằng {{ui:Open to print}} có thể hiển thị trong thẻ mà không in: dùng **Tệp**, rồi **In**.
:::

:::firefox
Firefox có thể hỏi bạn muốn làm gì với từng tải xuống. Chọn lưu tệp, hoặc đổi một lần trong cài đặt Firefox ở mục Tải xuống.
:::
