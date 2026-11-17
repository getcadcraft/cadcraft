---
title: Ghi kích thước cho mặt bằng
summary: Thêm kích thước thẳng, song song, góc, bán kính và đường kính, nối chúng bằng Kích thước nối tiếp và Kích thước cơ sở, và ghi đè văn bản.
keywords: kích thước, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, chuỗi, chuỗi kích thước, chú thích, công cụ kích thước, tìm, vị trí, thanh công cụ, đo, mm, cm, m, km, đơn vị
from: 9ee65123
---

## Bạn sẽ làm gì

Một căn phòng có kích thước: chiều rộng và chiều cao tổng thể, một chuỗi kích thước dọc một bức tường, một bức tường nghiêng, một góc bo cong và một góc.

Trước khi bắt đầu, đọc [Đặt kích thước, số thập phân và tỷ lệ của kích thước](topic:dimension-settings) nếu bản vẽ của bạn lớn: chữ kích thước mặc định cao 2.5 đơn vị bản vẽ, quá nhỏ trong bản vẽ đo bằng milimét. Với các bước bên dưới, trước hết gõ `DIMSCALE`, nhấn {{key:Enter}}, gõ `50` và nhấn {{key:Enter}}.

## Các công cụ kích thước nằm ở đâu

Với kiểu menu CadCraft (kiểu mà CadCraft khởi động cùng), các công cụ kích thước nằm trên thanh công cụ phía trên bản vẽ, trong nhóm {{ui:Chú thích}}: {{ui:Thẳng}}, {{ui:Song song}}, {{ui:Góc}}, {{ui:Bán kính}} và {{ui:Đường kính}}. Menu {{ui:Thêm}} của nhóm có {{ui:Kích thước nối tiếp}} và {{ui:Kích thước cơ sở}}. Đưa con trỏ lên một nút để xem nó làm gì.

- Với kiểu menu {{ui:Vẽ cổ điển}} hoặc {{ui:Dải lệnh}}, mở thẻ {{ui:Chú thích}}: các công cụ nằm trong bảng {{ui:Kích thước}} của nó. {{ui:Vẽ cổ điển}} cũng có {{ui:Thẳng}} trên thẻ {{ui:Trang chủ}}, dưới {{ui:Chú thích}}. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse).
- Hoặc gõ lệnh trên dòng lệnh dưới bản vẽ rồi nhấn {{key:Enter}}: `DLI` (thẳng), `DAL` (song song), `DAN` (góc), `DRA` (bán kính), `DDI` (đường kính), `DCO` (nối tiếp), `DBA` (cơ sở).
- Trên màn hình hẹp, thanh công cụ là một hàng: vuốt ngang để đến {{ui:Chú thích}}.

Để hiển thị độ dài theo milimét, centimét, mét hoặc kilômét, xem [Kích thước theo mm, cm, m hoặc km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Vẽ thứ gì đó để ghi kích thước

1. Gõ `PL` rồi nhấn {{key:Enter}}.
2. Gõ `0,0` rồi nhấn {{key:Enter}}.
3. Gõ `@6000,0` rồi nhấn {{key:Enter}}.
4. Gõ `@1500<60` rồi nhấn {{key:Enter}}.
5. Gõ `@0,2700` rồi nhấn {{key:Enter}}.
6. Gõ `@-6750,0` rồi nhấn {{key:Enter}}.
7. Gõ `C` rồi nhấn {{key:Enter}}. Đường bao khép lại.
8. Gõ `C` rồi nhấn {{key:Enter}} để bắt đầu vẽ vòng tròn.
9. Nhấp bên trong căn phòng, cách xa các bức tường, để làm tâm.
10. Gõ `600` rồi nhấn {{key:Enter}}. Đây là một cột.
11. Nhấp {{ui:Phạm vi}}.

## Thẳng: nằm ngang hoặc thẳng đứng

1. Gõ `DLI` rồi nhấn {{key:Enter}}.
2. Tại `Specify first extension line origin`, bắt vào góc dưới bên trái (Điểm cuối) và nhấp.
3. Tại `Specify second extension line origin`, bắt vào góc dưới bên phải và nhấp.
4. Di chuyển con trỏ xuống dưới căn phòng. Kích thước theo sau, nằm ngang.
5. Nhấp để đặt đường kích thước.

Lịch sử ghi `Dimension text = 6000`.

Vị trí bạn đặt đường quyết định hướng: phía dưới hoặc phía trên cho kích thước nằm ngang, phía trái hoặc phải cho kích thước thẳng đứng. Để buộc, gõ `H` (ngang), `V` (đứng) hoặc `R` (xoay, rồi một góc) trước khi bạn đặt nó.

:::tip
Nhấn {{key:Enter}} ở dấu nhắc đầu tiên thay vì chọn một điểm, rồi nhấp một đường thẳng, cung, vòng tròn hoặc đoạn đa tuyến. CadCraft lấy cả hai đầu cho bạn.
:::

## Tiếp tục: chuỗi kích thước

{{cmd:DIMCONTINUE}} ({{ui:Chú thích}} › {{ui:Thêm}} › {{ui:Kích thước nối tiếp}}, hoặc `DCO`) tiếp tục từ kích thước thẳng hoặc song song cuối cùng bạn đã vẽ, mỗi kích thước mới bắt đầu tại nơi kích thước trước kết thúc.

1. Gõ `DLI` rồi nhấn {{key:Enter}}.
2. Gõ `0,0` rồi nhấn {{key:Enter}} cho gốc đầu tiên.
3. Gõ `2000,0` rồi nhấn {{key:Enter}} cho gốc thứ hai.
4. Nhấp bên dưới căn phòng để đặt nó.
5. Gõ `DCO` rồi nhấn {{key:Enter}}.
6. Gõ `4500,0` rồi nhấn {{key:Enter}}. Một kích thước thứ hai theo sau kích thước đầu tiên, trên cùng đường.
7. Bắt vào góc dưới bên phải và nhấp. Kích thước thứ ba hoàn tất chuỗi.
8. Nhấn {{key:Enter}} để kết thúc lệnh.

:::note
Ở đây các điểm được gõ dạng tọa độ tuyệt đối có chủ ý. Một điểm `@` đếm từ điểm cuối bạn đã nhập, và điểm cuối là chỗ bạn đặt đường kích thước trước đó, không phải điểm kết thúc của kích thước. Điểm tuyệt đối, điểm bắt, hoặc khoảng cách trực tiếp khi {{ui:Ortho}} bật sẽ an toàn hơn trong một chuỗi kích thước.
:::

Gõ `U` rồi nhấn {{key:Enter}} để hoàn lại kích thước cuối cùng trong chuỗi mà không rời lệnh.

## Cơ sở: các kích thước xếp từ một đường

{{cmd:DIMBASELINE}} ({{ui:Chú thích}} › {{ui:Thêm}} › {{ui:Kích thước cơ sở}}, hoặc `DBA`) đo mọi kích thước mới từ gốc đầu tiên của kích thước cuối cùng, và xếp mỗi kích thước xa hơn một bước.

1. Gõ `DLI` rồi nhấn {{key:Enter}}.
2. Bắt vào góc dưới bên trái và nhấp.
3. Bắt vào góc trên bên trái và nhấp.
4. Di chuyển con trỏ sang bên trái căn phòng và nhấp. Một kích thước thẳng đứng xuất hiện.
5. Gõ `DBA` rồi nhấn {{key:Enter}}.
6. Bắt vào đầu trên của bức tường 60 độ (Điểm cuối) và nhấp. Một kích thước thẳng đứng thứ hai xuất hiện, xa hơn kích thước đầu một bước.
7. Nhấn {{key:Enter}} để kết thúc.

## Song song: chiều dài thật của đường nghiêng

1. Gõ `DAL` rồi nhấn {{key:Enter}}.
2. Nhấn {{key:Enter}} để chọn một đối tượng.
3. Nhấp vào bức tường 60 độ.
4. Di chuyển ra ngoài và nhấp để đặt.

Văn bản ghi 1500: chiều dài thật, đo dọc theo bức tường.

## Bán kính và đường kính

1. Gõ `DRA` rồi nhấn {{key:Enter}}.
2. Nhấp vào vòng tròn của cột.
3. Di chuyển con trỏ. Đường dẫn chỉ từ tâm về phía con trỏ.
4. Nhấp để đặt văn bản.

Văn bản ghi `R600`. {{cmd:DIMDIAMETER}} (`DDI`) làm điều tương tự với dấu ⌀ và đường kính.

## Góc

Các bức tường ở đây là một đa tuyến, nên bạn đo góc theo đỉnh của nó. (Giữa hai đường rời, bạn có thể nhấp vào các đường thay thế.)

1. Gõ `DAN` rồi nhấn {{key:Enter}}.
2. Tại `Select arc, circle or line, or Enter for a vertex`, nhấn {{key:Enter}}.
3. Tại `Specify angle vertex`, bắt vào góc dưới bên phải và nhấp.
4. Tại `Specify first angle endpoint`, bắt vào góc dưới bên trái và nhấp.
5. Tại `Specify second angle endpoint`, bắt vào đầu trên của bức tường 60 độ và nhấp.
6. Di chuyển con trỏ vào trong căn phòng, gần góc, và nhấp.

Văn bản ghi `120°`, góc trong của góc. Đặt ở phía bên kia của góc, kích thước sẽ đo góc ở phía đó thay thế. Nhấp một cung ở dấu nhắc đầu tiên để ghi kích thước góc mà nó chắn, hoặc nhấp hai đường để ghi kích thước góc giữa chúng.

## Đổi văn bản

Để viết văn bản riêng, gõ `T` rồi nhấn {{key:Enter}} trước khi bạn đặt kích thước, rồi gõ văn bản. Trong văn bản của bạn, `<>` là giá trị đo: `<> TYP.` cho `6000 TYP.`. Nhấn {{key:Enter}} trên một dòng trống để giữ giá trị đo.

Để đổi một kích thước đã có:

1. Nhấp vào nó.
2. Trong bảng bên phải, gõ vào {{ui:Văn bản}}. Để trống để dùng giá trị đo.
3. Nhấn {{key:Enter}}.

## Kích thước theo hình học

Một kích thước nhớ các điểm của nó. Kéo một trong các grip của nó, hoặc di chuyển, xoay hoặc tỷ lệ nó cùng với các đối tượng nó đo, và nó đo lại. Nếu bạn kéo giãn hình học mà không di chuyển kích thước, kích thước không theo: nó giữ các điểm riêng của nó.

## Lỗi thường gặp

- **Chữ và mũi tên quá nhỏ hoặc quá lớn.** Đặt tỷ lệ chung: xem [Đặt kích thước, số thập phân và tỷ lệ của kích thước](topic:dimension-settings).
- **"Chọn một điểm nằm trong góc bạn muốn đo."** Điểm bạn nhấp cho kích thước góc nằm trên một trong các cạnh. Di chuyển nó vào trong góc.
- **Tiếp tục bắt đầu từ sai kích thước.** Nó luôn tiếp tục từ kích thước thẳng hoặc song song cuối cùng được vẽ trong phiên này. Hãy vẽ (hoặc vẽ lại) kích thước cần tiếp tục trước.
- **Kích thước ra thẳng đứng.** Bạn đặt nó sang bên. Gõ `H` trước khi đặt.
- **Feet và inch.** Đặt định dạng độ dài của bản vẽ thành {{ui:Kiến trúc}} trước, hoặc {{ui:Định dạng}} của kích thước trong {{ui:Thuộc tính}}: xem [Feet và inch trong kích thước](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Các con số không ở đơn vị bạn muốn.** Chọn {{ui:Đơn vị trong văn bản}}: xem [Kích thước theo mm, cm, m hoặc km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
