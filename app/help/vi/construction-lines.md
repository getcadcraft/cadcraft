---
title: Đường dựng và tia
summary: Vẽ đường thẳng kéo dài không giới hạn (XLINE) hoặc từ một điểm đi về một phía (RAY) để căn chỉnh mọi thứ, rồi cắt chúng thành đường thẳng thông thường.
keywords: xline, ray, đường dựng, các đường dựng, đường thẳng vô hạn, đường dẫn hướng, đường tham chiếu, chia đôi, đường dời song song, các đường bố cục, xl
from: b6c398bc
---

## Bạn sẽ học gì

Cách vẽ đường dựng để căn chỉnh khi bạn đang vẽ: qua hai điểm, nằm ngang hoặc thẳng đứng, theo một góc, nằm giữa hai hướng, hoặc cách một đường một khoảng đã đặt. Và cách cắt chúng thành đường thẳng thông thường khi chúng đã làm xong nhiệm vụ.

## Hai loại

- Một **đường dựng** ({{cmd:XLINE}}) kéo dài không giới hạn về cả hai phía.
- Một **tia** ({{cmd:RAY}}) bắt đầu từ một điểm và kéo dài không giới hạn về một phía.

Cả hai đều vẽ xuyên suốt vùng bản vẽ bất kể mức thu phóng, trong chế độ chia đôi màn hình và trong các khung nhìn trên tờ. {{ui:Phạm vi}} bỏ qua chúng, nên khi thu phóng vừa bản vẽ thì vẫn vừa khít với những gì bạn đã vẽ.

## Vẽ đường dựng

1. Nhấp {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Đường dựng}}, hoặc gõ `XL` rồi nhấn {{key:Enter}}.
2. Nhấp một điểm. Mỗi lần nhấp sau đó thêm một đường dựng đi qua điểm đầu tiên và điểm bạn nhấp.
3. Nhấn {{key:Enter}} để kết thúc.

Thay vì điểm đầu tiên, bạn có thể gõ một tùy chọn:

| Tùy chọn | Tác dụng |
|---|---|
| `H` (Hor) | Đường nằm ngang, mỗi đường qua một điểm bạn nhấp. |
| `V` (Ver) | Đường thẳng đứng qua mỗi điểm. |
| `A` (Ang) | Đường theo góc bạn gõ (độ, ngược chiều kim đồng hồ từ trục X), qua mỗi điểm. `R` (Reference) đo góc từ một đường bạn chọn. |
| `B` (Bisect) | Nhấp góc, rồi một điểm dọc theo một cạnh: mỗi điểm bạn nhấp dọc cạnh kia thêm một đường nằm giữa hai cạnh. |
| `O` (Offset) | Gõ một khoảng cách, chọn một đường, rồi nhấp về một phía: một đường dựng cách đường đó chừng ấy, song song. `T` (Through) thay vào đó đặt nó qua một điểm bạn nhấp. Khoảng cách được nhớ cho lần sau. |

## Vẽ tia

1. Nhấp {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Tia}}, hoặc gõ `RAY` rồi nhấn {{key:Enter}}.
2. Nhấp nơi các tia bắt đầu.
3. Nhấp một điểm cho mỗi tia đi qua. Nhấn {{key:Enter}} để kết thúc.

## Bắt điểm vào chúng và cắt chúng

Đường dựng và tia bắt được các điểm Gần nhất, Vuông góc và Giao điểm. Chúng không có đầu và không có điểm giữa, nên Điểm cuối và Trung điểm không tìm thấy gì trên chúng.

Chúng bị cắt và cắt như các đường thẳng khác trong {{cmd:TRIM}} và {{cmd:BREAK}}:

- Cắt một đầu của đường dựng và nó trở thành một tia bắt đầu từ chỗ cắt.
- Cắt phần xa của một tia và nó trở thành đường thẳng thông thường.
- Ngắt một đường dựng tại một điểm và bạn được hai tia.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} và {{cmd:STRETCH}} cũng hoạt động trên chúng. Chọn bằng cửa sổ không bao giờ chọn được chúng, vì không cửa sổ nào chứa hết một đường vô hạn; chọn cắt hoặc một cú nhấp thì được.

:::note
DWG (mọi phiên bản) và DXF 2000 giữ chúng là đường dựng. DXF R12 không có đường dựng, nên ở đó chúng trở thành các đường thẳng kéo qua bản vẽ, và lúc lưu có thông báo điều đó. Bản in hoặc PDF chỉ vẽ chúng trong phần sẽ được in.
:::
