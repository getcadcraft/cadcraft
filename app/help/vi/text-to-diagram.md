---
title: Vẽ sơ đồ từ văn bản
summary: Dán lưu đồ Mermaid, sơ đồ thành phần PlantUML, D2, danh sách từ-đến hoặc XML draw.io, và CadCraft sẽ bố trí các khối và đường nối mà bạn có thể chỉnh sửa như mọi đối tượng khác.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, mô hình cục bộ, sơ đồ, mermaid, plantuml, d2, từ đến, danh sách từ-đến, sơ đồ khối, đường nối, văn bản thành sơ đồ, DIAGRAM, TEXTDIAGRAM, sơ đồ hệ thống, sơ đồ đấu nối, đường ống, csv
from: b26af54b
---

Gõ {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Một hộp mở ra: dán văn bản, chọn {{ui:Vẽ}}, nhấn vào góc trên bên trái của sơ đồ rồi nhập chiều cao văn bản. CadCraft đọc văn bản, bố trí các khối theo từng lớp với đường nối vuông góc, và vẽ chúng trên một lớp tên là `Diagram`. Các đối tượng mới được chọn sẵn, nên bạn có thể di chuyển ngay. Chúng là đối tượng thông thường: đổi văn bản của khối bằng {{cmd:TEXTEDIT}}, kéo dài đường nối bằng các grip của nó, xóa một khối, hoặc thêm đường thẳng của riêng bạn. Một lần {{cmd:UNDO}} sẽ gỡ toàn bộ sơ đồ.

Ở dòng lệnh, không cần hộp, văn bản có thể là một dòng với `;` giữa các câu lệnh: `flowchart LR; A[Pump] --> B[Tank]`.

## Nội dung được đọc

| Văn bản | Nội dung được đọc |
|---|---|
| **Mermaid** `flowchart` hoặc `graph` với `TD`, `TB`, `BT`, `LR` hoặc `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (một quyết định, vẽ thành hình thoi), văn bản trong dấu ngoặc kép, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, nhãn dạng `-->|text|` hoặc `-- text -->`, chuỗi `A --> B --> C`, nhóm `A & B --> C`, `<br/>` để xuống dòng, chú thích `%%` |
| **PlantUML** giữa `@startuml` và `@enduml` (thành phần và triển khai) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` và các loại khác với tên `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, chuỗi, `a: Label`, `direction: right`, tên trong dấu ngoặc kép, chú thích `#` |
| **Danh sách từ-đến** (bảng dán dưới dạng văn bản hoặc CSV) | các cột `from`, `to` và tùy chọn `label` và `type` (`dashed` vẽ đường nối nét đứt), theo thứ tự bất kỳ, phân tách bằng dấu phẩy, dấu chấm phẩy hoặc tab; nếu không có dòng tiêu đề thì ba cột đầu là from, to, label |

| **XML draw.io** (văn bản của tệp `.drawio`, `<mxfile>` hoặc `<mxGraphModel>`) | hộp, hộp bo góc, hình elip, quyết định hình thoi và văn bản thường; hộp chứa và hộp làn (vẽ nét đứt cùng tiêu đề); đường nối cùng các điểm uốn, đầu mũi tên (`endArrow`, `startArrow`) và `dashed=1`; nhãn HTML được đổi thành văn bản thường, `<UserObject label>` và `<object label>` đều hoạt động |

Những gì khác trên một dòng (kiểu dáng, ghi chú, khung vòng lặp) sẽ bị bỏ qua, và dòng lệnh cho biết số dòng đã bỏ qua. Một sơ đồ có tối đa 400 khối và 1200 đường nối.

## XML draw.io giữ nguyên vị trí

Các ngôn ngữ khác chỉ cho biết cái gì nối với cái gì, nên CadCraft tự bố trí. XML draw.io đã ghi sẵn vị trí của mọi thứ, nên CadCraft giữ lại: mỗi khối nằm đúng nơi tệp ghi, được co giãn sao cho phông chữ 12 pixel trở thành chiều cao văn bản bạn nhập (hộp 120 x 60 pixel là 60 x 30 đơn vị bản vẽ ở chiều cao 6), và góc trên bên trái của sơ đồ đặt tại điểm bạn nhấn. Đường nối chạy từ cạnh của khối này đến cạnh của khối kế tiếp, qua các điểm uốn; đường nối có `orthogonalEdgeStyle` và không có điểm uốn sẽ có một chỗ gấp vuông góc.

Cách lưu mặc định của draw.io là nén. Hộp và dòng lệnh sẽ mở tệp này cho bạn; một trợ lý AI trong cửa sổ không có luồng nén sẽ báo như vậy, và `File › Export as › XML` với *Compressed* bỏ chọn sẽ cho ra XML thuần. Hình ảnh, đường nối có một đầu lỏng và các trang thứ hai sẽ bị bỏ qua và được đếm.

## Viết văn bản bằng mô hình trên máy tính

Một mô hình cục bộ (Ollama, LM Studio, llama.cpp, Jan) có thể viết XML hoặc văn bản Mermaid từ nội dung của tệp PDF hoặc SVG, và kết quả được đưa vào qua cùng hộp đó, hoặc đưa thẳng vào bản vẽ khi mô hình được kết nối như một trợ lý: `diagram_from_text` nhận `format` là `drawio`. Mô hình nhỏ mắc nhiều lỗi trong XML hơn trong Mermaid hoặc danh sách từ-đến, nên thử bằng Mermaid trước sẽ tiết kiệm hơn; những gì bộ đọc không dùng được sẽ bị bỏ qua và được đếm, không được đoán. Xem Kết nối AI của bạn để biết công thức cho các mô hình.

## Cách bố trí

Các khối được xếp thành từng lớp theo các đường nối (một đường nối quay vòng sẽ được vẽ lùi lên trên), được sắp thứ tự để giảm số chỗ cắt nhau, với đường nối vuông góc đi ra từ đáy của một khối và đi vào đỉnh của khối kế tiếp; `LR` và `RL` biến các lớp thành cột. Chiều cao văn bản bạn nhập quyết định kích thước của mọi thứ.

## Khối con và sơ đồ tuần tự

- Một `subgraph name [Title]` … `end` của Mermaid vẽ một hộp nét đứt với tiêu đề bao quanh các khối của nó; khối con có thể lồng nhau. Việc bố trí không giữ các khối khác ra khỏi hộp, nên hãy di chuyển khối lạc bằng grip của nó.
- Một `sequenceDiagram` của Mermaid, hoặc văn bản PlantUML có các dòng `participant` và thông điệp `->`, được vẽ thành các khối ở phía trên, mỗi khối có một đường đời nét đứt bên dưới và một hàng cho mỗi thông điệp. `-->` và `-->>` là nét đứt, `->>` và `-)` có đầu mũi tên, `autonumber` đánh số thông điệp, thông điệp gửi cho chính mình sẽ tạo vòng lặp. Ghi chú và các khung `loop` / `alt` sẽ bị bỏ qua.

## Ký hiệu cho sơ đồ một dòng và sơ đồ đường ống

Một khối có thể là một ký hiệu vẽ sẵn, với tên của nó bên dưới, thay vì một hộp. Đặt tên ký hiệu trong văn bản:

| Văn bản | Cách viết |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` hoặc một dòng `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` hoặc `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Danh sách từ-đến | các cột `from_symbol` và `to_symbol` |

Các tên là ký hiệu P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` và phần còn lại của thư viện P&ID) và bộ Điện (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` và các tên khác). Một tên mà hai bộ cùng có sẽ thuộc bộ P&ID; viết `pid:` hoặc `el:` phía trước để chọn. Tên mà CadCraft không biết sẽ bị bỏ qua và được đếm. Các ký hiệu được vẽ dưới dạng đường thẳng, hình tròn và cung thông thường trên lớp `Diagram`, co giãn theo chiều cao văn bản; chúng không phải là khối của tiện ích bổ sung có thẻ, nên hãy dùng lệnh P&ID hoặc Điện cho bản vẽ thi công.

Các trợ lý AI có thể làm điều tương tự qua công cụ `diagram_from_text` trong cửa sổ.
