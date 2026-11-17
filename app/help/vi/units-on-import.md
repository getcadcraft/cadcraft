---
title: Đơn vị khi nhập: tệp nêu đơn vị của nó, hoặc bạn được hỏi trước
summary: Khi một tệp bạn đưa vào bản vẽ nêu đơn vị của nó, CadCraft chuyển đổi và cho biết điều đó. Khi không nêu, CadCraft hỏi trước khi đặt bất cứ thứ gì và ghi nhớ câu trả lời của bạn cho tệp đó.
keywords: đơn vị, nhập, chèn, xref, đính kèm, XATTACH, INSERT, OBJ, DWG, DXF, đám điểm, mục thư viện, milimét, mét, inch, feet, tỷ lệ, sai kích thước, quá lớn, quá nhỏ, 1000 lần, hỏi, ghi nhớ, INSUNITS
from: 558f1293
---

## Bạn sẽ làm gì

Đưa một tệp vào bản vẽ và chắc chắn rằng nó vào đúng kích thước.

## Các bước

1. Đưa tệp vào như thường lệ: `INSERT` › Tệp, `XATTACH`, `POINTCLOUDATTACH`, hoặc {{ui:Tệp}} trong bảng Thư viện.
2. Nếu tệp nêu đơn vị của nó, không có gì được hỏi. Dòng lệnh cho biết tệp nêu đơn vị nào, và tỷ lệ được dùng khi chúng khác với đơn vị của bản vẽ.
3. Nếu không, một hộp thoại hỏi **Đơn vị của** tệp. Chọn một đơn vị trong tệp tương ứng với điều gì và nhấn {{ui:Dùng các đơn vị này}}. Không có gì được đặt trước khi bạn trả lời.
4. {{ui:Hủy}} (hoặc {{key:Esc}}) không đưa gì vào.

## Những tệp nào nêu đơn vị của chúng

- **DWG và DXF**: đơn vị chèn của bản vẽ (`$INSUNITS`). Tệp không có thì sẽ được hỏi.
- **Đám điểm**: LAS và LAZ có hệ tọa độ, E57, PTX và PLY nêu đơn vị của chúng. Những loại khác sẽ được hỏi.
- **OBJ**: không bao giờ nêu đơn vị. Bạn sẽ được hỏi.
- **glTF và GLB**: mét, theo quy tắc riêng của định dạng.
- **Hình ảnh**: không có kích thước riêng. `IMAGEATTACH` hỏi chiều rộng, và đưa ra chiều rộng bạn đã đặt cho tệp đó trước đây.
- **Bản quét**: một bản quét có nêu mật độ (điểm trên inch) sẽ vào với kích thước thật theo đơn vị của bản vẽ; `SCANATTACH` vẫn hỏi chiều rộng.
- **Tiện ích Đám điểm**: hỏi khi bạn tạo một đám mà tệp của nó không nêu đơn vị, và ghi nhãn các số của đám bằng đơn vị mà nó mang.

## Điều nên biết

- Mở một DWG hoặc DXF như một bản vẽ riêng không hỏi gì: dòng lệnh cho biết tệp nêu đơn vị nào, hoặc cho biết nó không nêu gì. Thuộc tính đặt đơn vị của bản vẽ.
- Khi bản vẽ này cũng không có đơn vị, một tệp không thể được chuyển đổi: nó được đặt theo số nguyên như vậy và dòng lệnh cho biết điều đó.
- Câu trả lời được ghi nhớ cho tệp đó trên máy tính này, trong mọi ứng dụng CadCraft. Lần tới khi tệp đó vào, bạn không bị hỏi, và dòng lệnh cho biết đã dùng đơn vị được ghi nhớ.
- Để được hỏi lại: bảng lệnh ({{key:Mod+K}}) › **Hỏi lại đơn vị của tệp đã nhập**.
