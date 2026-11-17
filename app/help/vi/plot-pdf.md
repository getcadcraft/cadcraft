---
title: In ra PDF
summary: Tạo PDF của một tờ ở kích thước đầy đủ, hoặc của mô hình ở một tỷ lệ hoặc vừa giấy; in từ trình duyệt hoặc từ Studio, hoặc lưu thành PNG hoặc SVG.
keywords: in, print, máy in, số bản, png, svg, hình ảnh, pdf, xuất bản, exportpdf, giấy, tỷ lệ, đơn sắc, thang xám, đen trắng, độ dày nét, bút, thiết lập trang, cửa sổ in, kiểu nét in, bảng kiểu nét in, ctb, phụ thuộc màu, tạo lưới chấm, plotstyles, stylesmanager
from: a4752f83
---

## Hình bạn sẽ tạo

Một PDF của một tờ ở kích thước đầy đủ, sau đó một PDF nhanh của mô hình ở 1:100, và một bản in.

PDF được tạo trong trình duyệt của bạn; không có gì được tải lên. Đó là một PDF vector: đường giữ sắc nét ở mọi mức phóng to, và văn bản có thể tìm kiếm.

## In một tờ

1. Nhấp thẻ của tờ dưới bản vẽ.
2. Nhấn {{key:Mod+P}}, nhấp {{ui:In}}, hoặc gõ `PLOT` rồi nhấn {{key:Enter}}.

Hộp thoại {{ui:In ra PDF}} mở ra. Nó cho biết tờ nào được in và trên loại giấy nào, "ở kích thước đầy đủ … như bạn thấy". Bản xem trước bên phải hiển thị tờ.

3. Trong {{ui:Kiểu nét in}}, chọn {{ui:Đơn sắc (đen)}} cho đường màu đen, {{ui:Màu (như đã vẽ)}} để giữ màu, {{ui:Thang xám}}, hoặc một bảng riêng của bạn (xem [Bảng kiểu nét in](topic:plot-pdf#plot-style-tables)). Tờ giữ lựa chọn này: nó được lưu cùng bản vẽ.
4. Trong {{ui:Độ dày nét}}, chọn độ rộng bút từ 0.13 mm đến 0.70 mm. Các đường có độ dày mặc định được in ở độ rộng này; các đường có độ dày riêng (theo lớp hoặc đối tượng, hoặc theo bút của màu trong bảng) được in ở độ rộng đó.
5. Nhấp {{ui:Tải PDF}}.

Trình duyệt tải xuống một PDF được đặt tên theo bản vẽ và tờ, ví dụ `Drawing1-A-101 Plan.pdf`. Lịch sử báo kích thước tính bằng byte và kích thước giấy tính bằng milimét.

Một tờ luôn được in ở tỷ lệ 1:1 trên giấy của chính nó. Để đổi giấy, hãy đổi trên chính tờ (xem [Thiết lập một tờ](topic:sheets-and-viewports)). Các lớp đặt không in sẽ bị bỏ qua, và khung khung nhìn cũng vậy.

## Mọi tờ trong một PDF

Khi có hai tờ trở lên, hộp thoại {{ui:In ra PDF}} có {{ui:Mọi tờ trong một PDF}}; hoặc gõ {{cmd:PUBLISH}}. {{key:Enter}} lấy mọi tờ; `S` (Một số) yêu cầu tên của chúng, cách nhau bằng dấu phẩy. Một PDF được tải xuống với một trang cho mỗi tờ, theo thứ tự thẻ, mỗi tờ ở kích thước giấy riêng, và một dấu trang cho mỗi tờ với tên của nó. Mỗi tờ được in với bảng kiểu nét in riêng; tờ chưa chọn bảng nào sẽ dùng bảng bạn chọn gần nhất trong hộp thoại, và độ rộng bút bạn chọn gần nhất.

## In mô hình

1. Nhấp thẻ {{ui:Mô hình}}.
2. Nhấn {{key:Mod+P}}.

Hộp thoại cho biết nó in mô hình lên một tờ giấy, và hiển thị thêm các thiết lập:

3. Trong {{ui:Diện tích}}, chọn phần cần in:
   - {{ui:Mọi thứ (phạm vi)}}: toàn bộ bản vẽ.
   - {{ui:Những gì trên màn hình}}: vùng bạn đang thấy trong bản vẽ.
   - {{ui:Một cửa sổ…}}: rồi nhấp {{ui:Pick}}, nhấp hai góc trên bản vẽ, và hộp thoại quay lại.
4. Trong {{ui:Giấy}}, chọn kích thước: ISO A4 đến A0, Letter, Legal, Tabloid và ANSI C và D, hoặc ARCH C, D và E.
5. Trong {{ui:Hướng}}, chọn {{ui:Ngang}} hoặc {{ui:Đứng}}.
6. Trong {{ui:Tỷ lệ}}, chọn {{ui:Vừa giấy}} hoặc một tỷ lệ như `1:100`.

Dưới các thiết lập, một dòng cho biết tỷ lệ và vùng sẽ có kích thước bao nhiêu trên giấy. Nếu lớn hơn giấy, nó sẽ báo: các cạnh bị cắt. Hãy chọn tỷ lệ nhỏ hơn, giấy lớn hơn, hoặc {{ui:Vừa giấy}}.

7. Nhấp {{ui:Tải PDF}}.

Một bản in mô hình để lại lề 5 mm quanh mép, vì hầu hết máy in không in được sát mép. {{ui:Vừa giấy}} cho ra một tỷ lệ lẻ (lịch sử và dòng thông tin ghi "(đã vừa)"); hãy chọn tỷ lệ chuẩn khi bản vẽ phải đo đúng.

:::note
Tỷ lệ được đọc theo đơn vị thực. Để 1:100 đúng, hãy đặt {{ui:Đơn vị}} trong {{ui:Cài đặt hiện tại}} thành đơn vị của một đơn vị bản vẽ. Bản vẽ không có đơn vị được hiểu là milimét.
:::

## Bảng kiểu nét in

Một bảng kiểu nét in cho biết mỗi màu trong 255 màu bản vẽ tiêu chuẩn sẽ in ra sao, giống cách bảng kiểu nét in phụ thuộc màu (CTB) làm trong các chương trình CAD khác. Có ba bảng dựng sẵn:

| Bảng | In ra |
|---|---|
| {{ui:Màu (như đã vẽ)}} | Mỗi đối tượng theo màu của nó. |
| {{ui:Đơn sắc (đen)}} | Mọi màu thành đen: lựa chọn thông thường cho bản vẽ. |
| {{ui:Thang xám}} | Mỗi màu thành màu xám của nó, để các màu vẫn khác nhau trên máy in đen trắng. |

Để tự tạo một bảng, ví dụ đường đỏ đậm và đen, mọi thứ khác mảnh:

1. Trong hộp thoại {{ui:In ra PDF}}, nhấp {{ui:Sửa bảng…}} (hoặc gõ {{cmd:PLOTSTYLES}}).
2. Nhấp {{ui:Mới}}, và gõ một tên như `office` trong {{ui:Tên}}. Để bắt đầu từ một bảng dựng sẵn, chọn nó trong {{ui:Bảng}} và nhấp {{ui:Sao chép}}.
3. Nhấp một màu trong lưới. {{key:Shift}}+nhấp chọn một dải màu, {{key:Mod}}+nhấp thêm một màu, và {{ui:Chọn mọi màu}} chọn tất cả.
4. Đặt màu được chọn in ra thành gì:
   - {{ui:In bằng}}: {{ui:Màu riêng của nó}}, {{ui:Đen}} hoặc {{ui:Màu khác…}}.
   - {{ui:Như màu xám}}: màu thành màu xám của nó.
   - {{ui:Mực (%)}}: 100 là mực đầy đủ, 50 là nửa đường đến trắng (tạo lưới chấm), dùng cho các đường nền.
   - {{ui:Độ dày nét}}: {{ui:Độ dày riêng của nó}} giữ độ dày nét của đối tượng hoặc lớp; một giá trị làm mọi đường của màu đó in ở độ rộng ấy.
   - {{ui:Kiểu đường}}: in mọi đường của màu đó bằng một kiểu đường khác (ví dụ mọi thứ màu đỏ thành nét đứt); {{ui:Dùng kiểu đường của đối tượng}} giữ nguyên.
   - {{ui:Đầu nét}} và {{ui:Nối nét}}: đầu bằng, vuông hoặc tròn; góc nối kiểu miter, vát (bevel) hoặc tròn (tròn, như trước đây, khi bạn không đặt gì).
   - {{ui:Kiểu tô}}: một vùng tô đặc của màu đó được in thành các vạch hatch (vạch ngang hoặc dọc, xiên, lưới chéo, hình thoi, chấm vuông) thay vì mực đặc, dùng cho máy in và bản vẽ mặt bằng khi mực đặc quá đậm.

Bảng còn có hai thiết lập nữa: {{ui:Độ dày nét}}, các độ rộng mà nó biết (một đường được in sẽ về độ rộng gần nhất trong số đó), và {{ui:Tỷ lệ kiểu đường}}, một hệ số cho các nét đứt của mọi kiểu đường không phải ISO.

5. Nhấp {{ui:Xong}}. Bảng được giữ trong bản vẽ, và tờ (hoặc mô hình) giờ in theo nó. {{ui:Hủy}} bỏ các thay đổi.

Một màu có bút riêng hiện một chấm ở góc; một chấm ở đáy khi nó đặt độ dày nét. Một đối tượng có màu thật (không phải một trong 255) dùng bút của màu tiêu chuẩn gần nhất.

Bản vẽ giữ các bảng và lựa chọn của mỗi tờ khi bạn lưu thành DWG (2000 đến 2018) hoặc DXF (R12 hoặc 2000), và mở lại với chúng. Các chương trình khác thấy tên trong thiết lập trang của mỗi tờ (`office.ctb`), chứ không thấy bảng. Một bản vẽ từ chương trình khác có thiết lập trang nêu một bảng như `monochrome.ctb` sẽ được in bằng bảng dựng sẵn cùng tên; với tên khác, hộp thoại báo rằng bản vẽ không có bảng này, và in màu của bản vẽ cho đến khi bạn chọn một bảng hoặc tạo bảng với tên đó.

Để dùng một bảng trong bản vẽ khác, nhấp {{ui:Xuất}} trong {{ui:Bảng kiểu nét in}} (nó lưu `office.plotstyle.json`), rồi {{ui:Nhập…}} trong bản vẽ kia. {{ui:Nhập…}} cũng nhận tệp `.ctb` từ chương trình khác: nó được đọc theo mô tả công khai của định dạng và **chưa được kiểm tra với một tệp thật**. Màu, tạo lưới và độ dày nét của mỗi màu được đọc; thang xám, số bút, kiểu đường, đầu và nối nét, và kiểu tô thì không; và bảng có tên (`.stb`) bị từ chối. Hãy so sánh lần in đầu tiên với điều bạn mong đợi, và gửi tệp cho chúng tôi nếu nó sai.

## In

**Trong trình duyệt**, nhấp {{ui:In…}}. CadCraft tạo PDF và mở hộp thoại in của trình duyệt cho nó. Chọn "Kích thước thực" hoặc 100% (không chọn "Vừa trang") ở đó để giữ tỷ lệ. Nếu trình duyệt không in được từ trang, PDF sẽ mở trong một thẻ mới thay thế: hãy in từ đó bằng {{key:Mod+P}}.

Bạn cũng có thể nhấp {{ui:Mở để in}}: PDF mở trong một thẻ trình duyệt mới, và bạn in từ đó.

:::safari
Safari có thể hiện PDF và đợi bạn chọn **Tệp**, rồi **In**.
:::

Nếu trình duyệt chặn thẻ mới, CadCraft tải PDF xuống thay và báo trong lịch sử. Hãy cho phép cửa sổ bật lên cho trang để lần sau nó mở trong một thẻ.

**Trong CadCraft Studio**, hộp thoại {{ui:In ra PDF}} liệt kê các máy in của máy tính. Chọn {{ui:Máy in}}, {{ui:Giấy trong máy in}} và số {{ui:Số bản}}, rồi nhấp {{ui:In…}}. {{ui:Giống bản in}} chọn giấy của máy in có kích thước bằng tờ (A3 cho tờ A3); khi máy in không có giấy đó, nó dùng giấy của máy và vừa tờ vào đó. Trên Windows, tờ được gửi như một hình ảnh 300 dpi, vì Windows không in được PDF nếu không có chương trình PDF; trên Linux và macOS, chính PDF được gửi tới dịch vụ in của hệ thống. Không có gì rời khỏi máy tính.

## Tệp hình ảnh và SVG

{{ui:Tải xuống PNG}} lưu tờ đã in thành một hình ảnh 300 dpi (chỉ giảm khi một tờ rất lớn sẽ vượt quá khả năng tạo của trình duyệt; lịch sử có báo). {{ui:Tải xuống SVG}} lưu thành một bản vẽ co giãn được theo milimét, với các đường và văn bản của bản in. Cả hai đều đến từ cùng một lần in với PDF, cùng kiểu nét in, độ dày nét và vùng. Hình ảnh đặt trong bản vẽ chỉ có trong PDF; lịch sử cho biết có bao nhiêu hình bị bỏ.

## Hình ảnh

Hình ảnh được in ở độ phân giải riêng, nằm dưới các đường. {{ui:Hình ảnh}} trong hộp thoại giới hạn chúng ở 600, 300 hoặc 150 dpi để tệp nhỏ hơn. Đường, văn bản và hatch luôn sắc nét (vector), và độ trong suốt vẫn là độ trong suốt. Xem [Hình ảnh trong bản vẽ](topic:pictures).

## Thiết lập được ghi nhớ

Hộp thoại ghi nhớ giấy, hướng, tỷ lệ và độ dày nét bạn chọn gần nhất trong trình duyệt này. Bảng kiểu nét in được giữ cùng mỗi tờ trong bản vẽ; tờ chưa chọn bảng nào sẽ bắt đầu với bảng bạn chọn gần nhất. Một cửa sổ đã chọn được giữ cho đến khi bạn tải lại trang; sau đó hộp thoại bắt đầu ở {{ui:Mọi thứ (phạm vi)}}.

## Lỗi thường gặp

- **PDF trống hoặc các nút bị xám.** Không có gì để in (mô hình trống), hoặc {{ui:Một cửa sổ…}} được chọn mà chưa chọn cửa sổ nào ("Chọn cửa sổ để in.").
- **Văn bản hiện "?" trong PDF.** Văn bản tiếng Ba Lan, Séc, chữ Kirin, Hy Lạp và các chữ viết khác của châu Âu được in đúng như chính nó: PDF chứa các chữ cái cần thiết (từ phông Liberation Sans, có độ rộng như Helvetica), và văn bản vẫn chọn và tìm kiếm được. Văn bản tiếng Trung, Nhật và Hàn cũng được in đúng như chính nó: khi bản vẽ có, lần in sẽ tải một phông lớn hơn (khoảng 10 MB, một lần), và PDF chỉ chứa các ký tự được dùng, nên lần đầu cần kết nối mạng (không áp dụng cho bản ngoại tuyến đã lưu trước đó). Tiếng Hebrew được in từ cùng phông nhúng như văn bản Latin, còn văn bản tiếng Ả Rập, Ba Tư và Urdu khiến lần in tải thêm một phông nữa (dưới 1 MB, một lần); các dòng viết từ phải sang trái được sắp xếp và các chữ được nối (xem [Văn bản](topic:text)). Các chữ tượng hình hiếm nằm ngoài các phông đó, và các chữ viết cần định hình phức tạp như Hindi, được in thành "?", và lịch sử đếm chúng.
- **Mọi đường cùng một độ dày.** Độ dày của chúng là mặc định: hãy đặt {{ui:Độ dày nét}} cho lớp hoặc đối tượng trong bảng bên phải (xem [Độ dày nét và kiểu đường](topic:units-papers-scales#line-weights-and-linetypes)), hoặc đặt độ dày theo màu trong [bảng kiểu nét in](topic:plot-pdf#plot-style-tables).
- **"(không có trong bản vẽ này)" cạnh kiểu nét in.** Bản vẽ đến từ chương trình khác và nêu một bảng mà nó không có. Chọn một bảng, hoặc tạo bảng với tên đó.
- **Đường xây dựng bị in.** Đặt lớp của chúng không in: nhấp nút máy in của lớp đó trong bảng {{ui:Lớp}}.
- **Bản in sai kích thước.** Máy in đã thu phóng. In ở kích thước thực.
- **{{key:Mod+P}} mở hộp thoại in của trình duyệt.** Con trỏ đang ở một ô trong bảng bên phải, hoặc có một hộp thoại khác đang mở. Nhấn {{key:Enter}} hoặc {{key:Esc}} để rời ô, rồi thử lại, hoặc nhấp {{ui:In}}.
- **{{key:Mod+P}} không làm gì.** Một lệnh đang chạy. Nhấn {{key:Esc}} trước.
