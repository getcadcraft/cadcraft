---
title: Chuyển từ phần mềm vẽ khác
summary: Các lệnh, phím và thói quen quen thuộc ánh xạ sang CadCraft như thế nào, và những khác biệt khiến người vẽ có kinh nghiệm dễ vấp.
keywords: chuyển đổi, khác biệt, di chuyển, thói quen, bí danh, aliases, nhập động, pickfirst, pickadd, qsave, saveas, lưu thành, mtext, ctb, truy vết cực, xref, phím tắt, quen thuộc, copyclip, pasteclip, pasteorig, copybase, bộ nhớ tạm
from: b58688e7
---

Nếu bạn đã dùng AutoCAD, hoặc một chương trình xây trên cùng mô hình, hầu hết những gì bạn biết đều dùng được ở đây: dòng lệnh, các bí danh như `L`, `C`, `TR` và `O`, Enter hoặc Space để lặp lại, chọn cửa sổ và chọn cắt, bắt điểm đối tượng bằng F3, Ortho bằng F8, không gian mô hình với bố cục và khung nhìn. Trang này liệt kê những gì ánh xạ trực tiếp, rồi đến những khác biệt khiến người ta vấp. Hãy đọc nửa sau ngay cả khi bạn chỉ lướt qua nửa đầu.

## Những gì ánh xạ trực tiếp

| Thói quen | Trong CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Cùng lệnh, cùng bí danh |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Giống |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Cùng các lệnh kích thước |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` gõ ở dòng lệnh | Giống, cho kích thước mới |
| `B` để tạo khối, `I` để chèn, `PU` để làm sạch | Giống (làm sạch chỉ xóa khối không dùng) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` rồi `E` hoặc `W` | Giống |
| Gõ `_LINE` hoặc `-LAYER` từ một script hoặc thói quen | Dấu `_`, `-`, `.` hoặc `'` ở đầu bị bỏ qua |
| Enter hoặc Space ở dấu nhắc trống lặp lại lệnh trước | Giống |
| Esc hủy; Esc lần nữa xóa vùng chọn | Giống |
| `@dx,dy`, `@d<a`, góc gõ ngược chiều kim đồng hồ từ hướng đông | Giống |
| Cửa sổ từ trái sang phải, chọn cắt từ phải sang trái, bấm-bấm; nhấn và kéo để lasso, Space chuyển giữa cửa sổ / chọn cắt / hàng rào (LASSOMODE) | Giống |
| Chọn trước, rồi lệnh (danh từ-động từ) | Giống; một lệnh xong sẽ xóa vùng chọn |
| `ALL` và `L` ở dấu nhắc Chọn đối tượng | Giống |
| Shift+bấm để bỏ khỏi vùng chọn | Giống. Cài đặt có thể làm một lần bấm thay thế vùng chọn, như PICKADD 0 làm: xem [Cài đặt CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Cùng lệnh và phím; khi dán, bản sao đặt theo góc dưới bên trái, như PASTECLIP làm |
| F3 bắt điểm đối tượng, F7 lưới, F8 Ortho | Cùng phím |
| Nhấp đúp con lăn để thu phóng phạm vi | Giống |
| Chữ bị phản chiếu vẫn đọc được | Giống (như MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Giống; trên Mac, Command cũng dùng được |

[Danh sách lệnh](topic:commands) liệt kê mọi lệnh và bí danh.

:::tip
Nếu bạn thích dải lệnh (ribbon) của AutoCAD, hãy chọn kiểu menu {{ui:Vẽ cổ điển}} trong {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Menu, phím và chuột}}: các thẻ Home, Insert, Annotate, Parametric, View, Manage và Output nằm trên cùng dòng lệnh, và nút giữa kéo khung nhìn trong khi nhấp chuột phải là Enter. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse).
:::

[Sơ đồ lệnh](topic:command-map) liệt kê mọi lệnh CadCraft có kèm tên ngắn, và [bảng tóm tắt nhanh](topic:cheat-sheet) liệt kê 40 lệnh bạn sẽ dùng nhiều nhất (cũng có dạng một tệp PDF một trang).

## Những khác biệt khiến người ta vấp

### Điểm gõ vào là tuyệt đối

Khi nhập động bật, phần mềm khác coi `100,0` gõ cho điểm thứ hai là tương đối. **Dòng lệnh của CadCraft thì không:** ở đó `x,y` luôn được đo từ gốc. Với {{ui:Động}} ({{key:F12}}) bật, hãy dùng các ô của nó: khoảng cách, {{key:Tab}}, góc. Dùng `@100,0` cho "cách điểm cuối cùng 100 về bên phải", hoặc di chuyển con trỏ đúng hướng và gõ một số `100` không kèm gì.

### Shift bỏ qua bắt điểm; nó không bật Ortho

Giữ Shift khi bạn bấm sẽ bỏ qua bắt điểm đối tượng cho lần bấm đó. Nó không tạm thời chuyển Ortho. Dùng F8 hoặc nút {{ui:Ortho}}.

### Chuột phải luôn là Enter

Không có menu chuột phải. Nhấp chuột phải trong bản vẽ là Enter: nó kết thúc một lệnh, hoàn tất một vùng chọn, hoặc lặp lại lệnh trước. Trong khi kéo tay cầm (grip) hoặc khi kéo hộp chọn, nó hủy thay thế. Kéo bằng nút phải để di chuyển khung nhìn.

### Không kéo khung nhìn bằng phím Space

Space là Enter, nên giữ Space và kéo sẽ không di chuyển khung nhìn. Hãy di chuyển khung nhìn bằng nút giữa hoặc nút phải, hoặc thu nhỏ rồi phóng lại ở một chỗ khác bằng con lăn.

### Cắt và kéo dài

Cắt và Kéo dài bắt đầu ở chế độ Nhanh: mọi đối tượng nhìn thấy là một cạnh cắt hoặc một ranh giới, phần dưới con trỏ cho thấy phần nào sẽ bị xóa, một đường kéo qua sẽ cắt mọi phần nó đi ngang, và một đối tượng không bị đường nào cắt thì bị xóa. {{key:Shift}} chuyển giữa cắt và kéo dài. `O` chuyển sang chế độ Chuẩn (chọn các cạnh trước), `F` và `C` là hàng rào và chọn cắt, `E` là EDGEMODE, `R` xóa. Không có tùy chọn `P` (Project): CadCraft cắt trong mặt phẳng của bản vẽ.

### Bo góc và vát mép

{{cmd:FILLET}} và {{cmd:CHAMFER}} nhận các tùy chọn bạn đã biết: Hoàn tác (U), Đa tuyến (P), Bán kính (R) (hoặc Khoảng cách, Góc và Phương pháp (E)), Cắt (T) và Nhiều (M), và {{key:Shift}}+bấm để có góc nhọn. Bo góc giữa một đa tuyến và một đường thẳng thêm cung như một đối tượng riêng thay vì nối chúng thành đa tuyến, và các góc đa tuyến cạnh một đoạn cung được giữ nguyên.

### Văn bản đoạn và văn bản một dòng

`T`, `MT` và `MTEXT` là văn bản đoạn gõ ngay tại chỗ, với chiều rộng, khoảng dòng và căn lề; `DT` và `DTEXT` là văn bản một dòng, như bạn đã quen. Không có kiểu văn bản hay cột, và bạn chưa thể gõ định dạng trong văn bản (đậm, phân số xếp chồng) được; định dạng có sẵn trong tệp được giữ lại, vẽ và lưu (xem [Thêm văn bản và nhãn](topic:text#formatting-inside-paragraph-text-from-other-programs)). Mọi thứ đều vẽ bằng phông kiểu Helvetica.

### Lưu nghĩa là "tải xuống một bản sao"

{{key:Mod+S}}, `SAVE` và `QSAVE` tải xuống một bản sao theo định dạng của bản vẽ: DWG bạn đã mở sẽ lưu thành DWG, DXF thành DXF. Trên trình duyệt không có gì bị ghi đè tại chỗ, và các tệp đã mở không bao giờ bị thay đổi. Trong CadCraft Studio, {{key:Mod+S}} ghi lại vào tệp bạn đã mở.

`SAVEAS` ({{key:Mod+Shift+S}}) là một hộp thoại nhỏ, không phải trình duyệt tệp: chọn {{ui:DWG}} (với {{ui:Phiên bản}} của nó, từ AutoCAD 2000 đến 2018), {{ui:DXF R12}} hoặc {{ui:DXF 2000}} rồi bấm {{ui:Lưu}}. Trình duyệt quyết định tải xuống đi đâu. `DXFOUT` luôn tải xuống DXF R12.

DWG bạn đã mở được lưu theo phiên bản nó đã đến; một bản vẽ mới được lưu theo định dạng AutoCAD 2000 trừ khi bạn chọn khác. Tờ, kích thước và mẫu tô bóng được giữ. Xem [Tệp: mở được gì, lưu được gì](topic:files#saving).

### Lớp: đơn giản hơn

- Mỗi thay đổi lớp (bật, đóng băng, khóa, màu, in, kiểu đường, độ dày nét, lớp hiện hành) là một bước hoàn tác.
- Tắt và đóng băng có cùng tác dụng trong CadCraft.
- Các lớp mà bản vẽ đóng băng trong một khung nhìn sẽ vẫn đóng băng ở đó: trên màn hình, khi in và khi bạn lưu thành DWG hoặc DXF.
- Khung nhìn hiển thị một lớp với màu, kiểu đường, độ dày nét hoặc độ trong suốt riêng sẽ giữ như vậy trên màn hình, khi in và trong DWG đã lưu (DXF giữ cài đặt riêng của lớp; khi lưu có thông báo điều đó). Đổi các thứ đó theo từng khung nhìn chưa được xây dựng.
- Không có trình quản lý thuộc tính lớp và không có trạng thái lớp; {{cmd:RENAME}}, {{cmd:LAYMRG}} và {{cmd:LAYDEL}} đổi tên, gộp và xóa lớp. Kiểu đường và độ dày nét được đặt trong bảng bên phải (xem [Độ dày nét và kiểu đường](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} và {{cmd:LAYMCUR}} hoạt động bằng cách chọn đối tượng.
- Lưu sang DXF R12 ghi tên lớp bằng chữ hoa. DWG giữ chúng đúng như bạn gõ.

### Kiểu kích thước

`DIMSTYLE` mở một trình quản lý cho các kiểu có tên (mới, sửa, đặt hiện tại, so sánh, áp dụng). `DIMSCALE` và các cài đặt khác vẫn thay đổi những gì kích thước mới dùng, và mỗi kích thước giữ cỡ riêng của nó, cũng có thể đổi trong bảng Thuộc tính. Kiểu hiện hành không được lưu trong tệp. Kích thước theo định dạng độ dài của bản vẽ (thập phân, hoặc feet và inch với {{cmd:UNITS}}), hoặc theo {{ui:Định dạng}} riêng của nó. Xem [Đặt cỡ kích thước](topic:dimension-settings).

### In đơn giản hơn

Bảng kiểu nét in hoạt động theo màu, như các tệp CTB: Đơn sắc, Màu và Thang xám có sẵn, bạn có thể tạo của riêng mình, và mỗi tờ giữ bảng của nó. Việc đọc tệp CTB được xây dựng từ mô tả đã công bố và chỉ mới thử trên các tệp do chúng tôi tạo; các bảng kiểu nét in có tên (STB) và thiết lập trang chưa được xây dựng. Đường nét in theo độ dày nét của chúng, các phần khác in theo một độ rộng bút. Tờ in ở tỷ lệ 1:1 trên khổ giấy riêng của nó; mô hình in ở tỷ lệ bạn chọn hoặc vừa khung. Xem [In ra PDF](topic:plot-pdf).

### Làm việc bên trong khung nhìn

Như bạn đã quen: nhấp đúp bên trong một khung nhìn (hoặc gõ {{cmd:MSPACE}}) để làm việc trên mô hình qua nó, và nhấp đúp bên ngoài (hoặc {{cmd:PSPACE}}) để quay lại tờ. Bên trong, kéo và thu phóng thay đổi những gì khung nhìn hiển thị, trừ khi hiển thị của nó được khóa; khi đó chúng di chuyển tờ. Nhấp một thẻ bên dưới bản vẽ cũng thoát khung nhìn. Xem [Làm việc trên mô hình qua khung nhìn](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Có truy vết và nhập động, bắt lưới chưa có

Lưới chỉ để xem; các điểm không bắt vào nó (không có chế độ bắt F9). Truy vết cực ({{key:F10}}, bước đặt bằng {{cmd:POLARANG}}) và truy vết bắt điểm đối tượng ({{key:F11}}: dừng trên một điểm bắt để lấy nó) hoạt động như bạn đã quen; xem [Bắt vào đối tượng](topic:object-snaps#polar-tracking). Nhập động ({{key:F12}}) hiển thị khoảng cách và góc (hoặc X và Y) bên cạnh con trỏ chữ thập; xem [Nhập tọa độ và khoảng cách](topic:coordinate-entry#dynamic-input).

### Feet và inch

Chọn {{ui:Định dạng độ dài}} {{ui:Kiến trúc}} hoặc {{ui:Kỹ thuật}} (hoặc gõ {{cmd:UNITS}}), và gõ độ dài như bạn quen: `12'6"`, `12'6-1/2"`. Dùng dấu gạch nối, không dùng khoảng trắng, trước phân số: {{key:Space}} là {{key:Enter}}. Đặt {{ui:Đơn vị}} thành {{ui:Inch}} luôn, để các tờ và bản in có các tỷ lệ kiến trúc. Định dạng được giữ trong các tệp DWG và DXF đã lưu. Xem [Feet và inch](topic:units-papers-scales#feet-and-inches-and-fractions).

### Sao chép và dán chỉ trong CadCraft

{{key:Mod+C}}, {{key:Mod+X}} và {{key:Mod+V}} sao chép, cắt và dán đối tượng trong một bản vẽ, giữa các bản vẽ và giữa các thẻ CadCraft trong cùng trình duyệt. Bộ nhớ tạm là của riêng CadCraft: bạn không thể dán đối tượng CadCraft vào chương trình khác, hay đối tượng từ chương trình khác vào CadCraft. Dán từ bản vẽ có đơn vị khác không đổi tỷ lệ: hãy dùng {{cmd:SCALE}} sau đó. {{key:Mod+D}} là nhân bản di chuyển theo con trỏ, một bổ sung của CadCraft. Xem [Sao chép, dán và nhân bản](topic:copy-paste).

### Phím của trình duyệt bạn không dùng được

Một trang web không thể lấy {{key:Mod+N}}, {{key:Mod+W}} hoặc {{key:Mod+T}} từ trình duyệt: các phím này mở và đóng cửa sổ và thẻ. Dùng nút {{ui:Mới}} hoặc gõ `NEW`. Xem [Phím, chuột và bàn di chuột](common:keys).

## Các lệnh bạn có thể tìm nhưng chưa có ở đây

{{cmd:TABLE}} chưa được xây dựng. Gõ nó sẽ hiện "Lệnh không xác định". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} và {{cmd:XREF}} đã được xây dựng.) [Chưa xây dựng](topic:not-built-yet) liệt kê những gì nên làm thay thế hiện nay.
