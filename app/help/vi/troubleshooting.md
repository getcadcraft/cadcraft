---
title: Khắc phục sự cố
summary: Các thông báo CadCraft hiển thị và các vấn đề bạn có thể gặp, mỗi mục kèm nguyên nhân và cách sửa.
keywords: vấn đề, lỗi, không hoạt động, thông báo, không mở được, lệnh không xác định, không có gì xảy ra, bị treo, phím không hoạt động, trống, thiếu, sửa
from: 8299b222
---

## Mở tệp

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách sửa |
|---|---|---|
| "CadCraft mở bản vẽ DWG và DXF. "…" không phải như vậy." | Tệp không phải `.dwg` hay `.dxf`. | Mở chính tệp bản vẽ. Có thể đưa PDF vào (Mở sẽ hỏi: nhập hoặc đính kèm, xem [Lớp nền PDF](topic:pdf-underlay)); hình ảnh được đưa vào bằng `IMAGEATTACH`. |
| "DXF nhị phân này kết thúc giữa một đối tượng: tệp bị cắt ngắn hoặc hỏng." | DXF nhị phân dừng trước phần cuối của nó. | Gõ RECOVER để mở phần đọc được, hoặc yêu cầu gửi lại tệp. |
| "Tệp này không phải DXF đọc được (mã nhóm sai ở dòng …)." | DXF bị hỏng hoặc thực ra không phải DXF. | Yêu cầu gửi lại tệp, hoặc gửi DWG. |
| "Bản vẽ này không đọc được. Nó có thể bị hỏng, hoặc được lưu ở phiên bản mà bộ đọc chưa xử lý (…)." | Bộ đọc DWG không đọc được nó. | Yêu cầu DWG được lưu ở phiên bản cũ hơn, hoặc một DXF. |
| "Bản vẽ này là AutoCAD R11 / R12 (DWG AC1009), cũ hơn mức CadCraft đọc được …" | Tệp DWG từ Release 12 trở về trước dùng định dạng CadCraft không đọc. | Trong chương trình đã tạo ra nó, lưu thành DXF (bất kỳ phiên bản nào) hoặc DWG mới hơn, rồi mở tệp đó. Lưu thành của CadCraft cung cấp DXF R12 cho các chương trình cần định dạng cũ đó. |
| "Không thể mở …" kèm thông báo mạng, ở DWG đầu tiên | Không tải được bộ đọc DWG: bạn đang ngoại tuyến và CadCraft chưa được lưu để dùng ngoại tuyến, hoặc kết nối bị ngắt. | Kết nối mạng rồi thử lại, hoặc mở một DXF. Nhấn {{ui:Lưu để dùng ngoại tuyến}} và đợi "Sẵn sàng ngoại tuyến" để lần sau các tệp DWG mở được khi ngoại tuyến. Xem [Làm việc ngoại tuyến](common:offline). |
| Nút ngoại tuyến hiện "Không thể lưu" | Một số tệp chưa tải xong. | Kiểm tra kết nối và nhấn nút để thử lại. |
| Nút ngoại tuyến hiện "Không có chế độ ngoại tuyến" | Cửa sổ riêng tư và một số máy được quản lý không thể giữ bản sao ngoại tuyến. | Dùng cửa sổ thông thường, hoặc giữ kết nối trực tuyến. |
| CadCraft không mở được khi không có kết nối | Nó chưa được lưu để dùng ngoại tuyến trong trình duyệt này, hoặc trình duyệt đã xóa nó. | Lần tới khi trực tuyến, nhấn {{ui:Lưu để dùng ngoại tuyến}} và đợi "Sẵn sàng ngoại tuyến". |
| Bản vẽ mở ra nhưng thiếu một số phần | Đối tượng CadCraft chưa vẽ được, hoặc các lớp tắt hoặc bị đóng băng trong tệp. | Đọc "Về tệp này" ở bảng bên trái. Kiểm tra bảng {{ui:Lớp}}. |
| Văn bản xuống thành hai dòng | CadCraft vẽ văn bản bằng phông kiểu Helvetica, rộng hơn một số phông CAD. | Rút ngắn văn bản trong Thuộc tính, hoặc chấp nhận dòng thừa. |
| Một hình tròn hiện thành elip, hoặc văn bản phản chiếu đọc đúng chiều | Đối tượng được vẽ trên một mặt phẳng nghiêng, hoặc nhìn từ dưới lên, trong chương trình đã tạo ra tệp. CadCraft hiển thị nó như nhìn từ trên xuống, giống cách khung nhìn mặt bằng của chương trình đó; văn bản được giữ đọc được. | Không cần sửa. Để xem theo cách của chương trình kia, yêu cầu bản vẽ được làm phẳng, hoặc các đối tượng được vẽ từ trên xuống. |
| Một khối, hình tròn hoặc kích thước nằm ở chỗ khác với trong chương trình đã tạo ra tệp | Một trường hợp bản vẽ mà CadCraft đọc sai. | Báo cho chúng tôi trên Discord, kèm tệp nếu bạn có thể chia sẻ. |

## Dòng lệnh

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách sửa |
|---|---|---|
| "Lệnh không xác định "…". Gõ HELP để xem danh sách." | Không có lệnh hoặc bí danh nào tên như vậy. | Gõ `HELP`, hoặc xem [Tham chiếu lệnh](topic:commands). Một số lệnh quen thuộc [chưa được xây dựng](topic:not-built-yet). |
| "Không có lệnh nào như vậy" bên cạnh dòng lệnh khi đang gõ | Những gì bạn gõ chưa khớp với gì. | Tiếp tục gõ, hoặc kiểm tra chính tả. |
| "Cần từ khóa điểm hoặc tùy chọn." | Những gì bạn gõ không phải là điểm hoặc tùy chọn. | Kiểm tra định dạng: `x,y`, `@dx,dy`, `@d<a`, hoặc một số duy nhất. Xem [Nhập tọa độ và khoảng cách](topic:coordinate-entry). |
| "Cần một khoảng cách dương hoặc hai điểm." | Một khoảng cách âm hoặc không phải số. | Gõ một số dương, hoặc nhấn hai điểm. |
| "Cần một góc tính bằng độ hoặc hai điểm." | Góc không phải số. | Gõ độ dưới dạng số thường. |
| "Cần một số." | Đang chờ một số. | Chỉ gõ chữ số. |
| "Từ khóa tùy chọn không hợp lệ." | Các chữ cái không khớp với tùy chọn nào. | Gõ các chữ in hoa được hiển thị trong ngoặc vuông. |
| `*Hủy*` | Bạn đã nhấn {{key:Esc}}, hoặc {{key:Enter}} ở chỗ cần một điểm. | Bắt đầu lại lệnh. |
| Gõ không đến được dòng lệnh | Một hộp trong bảng hoặc hộp thoại đang có con trỏ. | Nhấn {{key:Enter}} hoặc {{key:Esc}}, hoặc nhấn lên bản vẽ. |
| Lệnh dùng các đối tượng bạn không chọn | Chúng đã được chọn trước khi bạn bắt đầu lệnh. | Nhấn {{key:Esc}} trước lệnh. |
| Một đường đi đến chỗ bất ngờ | `x,y` là tuyệt đối. | Dùng `@dx,dy` cho điểm tương đối. |
| "Hoàn tất hoặc hủy lệnh hiện tại trước (Esc)." | Bạn đã nhấn {{key:Mod+S}} khi một lệnh đang chạy. | Nhấn {{key:Esc}}, rồi lưu. |
| "Không thể lưu thành DWG (AutoCAD 2000): … Thử Lưu thành, rồi DXF." | Có thứ trong bản vẽ không thể ghi thành DWG. | Nhấn {{key:Mod+Shift+S}}, chọn {{ui:DXF R12}} và nhấn {{ui:Lưu}}. |
| "Chưa lưu." | Bạn đã đóng hộp thoại {{ui:Lưu bản sao thành}} bằng {{ui:Hủy}} hoặc {{key:Esc}}. | Nhấn lại {{key:Mod+Shift+S}} và nhấn {{ui:Lưu}}. |

## Chỉnh sửa

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách sửa |
|---|---|---|
| Một đối tượng không chọn được | Lớp của nó bị khóa, tắt hoặc đóng băng; hoặc bạn đang ở tờ và nó là mô hình bên trong một khung nhìn. | Mở khóa lớp, hoặc chuyển đến thẻ {{ui:Mô hình}}. |
| "Không tìm thấy gì ở đó." | Không có đối tượng nào dưới nơi nhấn. | Phóng to và nhấn đúng lên đường. |
| "Không có gì cắt đối tượng đó ở đó." | {{cmd:TRIM}} không tìm thấy đối tượng nào cắt đoạn bạn đã chọn. | Kiểm tra rằng đường cắt thực sự giao với nó. |
| "Không thể cắt đối tượng đó." | Cắt chỉ làm việc với đường thẳng, cung, hình tròn và đa tuyến. | Phân rã khối trước, hoặc xóa và vẽ lại. |
| "Không có biên theo hướng đó." | {{cmd:EXTEND}} không tìm thấy gì để chạm tới. | Chọn gần đầu sẽ dài ra. |
| "Không thể dời đối tượng đó." | Dời song song chỉ làm việc với đường thẳng, cung, hình tròn và đa tuyến. | Phân rã nó trước, hoặc vẽ một đường song song. |
| "Không thể dời xa đến vậy." | Độ dời sẽ làm hình bị lật trong ra ngoài. | Dùng khoảng cách nhỏ hơn. |
| "Bán kính quá lớn." hoặc "Khoảng cách quá lớn." | Bo góc hoặc vát mép sẽ vượt quá đầu của một đường. | Đặt bán kính nhỏ hơn bằng `R`, hoặc khoảng cách nhỏ hơn bằng `D`. |
| "Chỉ đoạn đầu hoặc đoạn cuối của đa tuyến hở mới cắt được." | Góc sẽ cắt vào giữa đa tuyến. | Chọn hai đoạn cạnh nhau của đa tuyến, hoặc dùng `P` cho mọi góc. |
| "Chọn một đường thứ hai, khác." | Lần chọn thứ hai là cùng đường, hoặc không phải đường. | Chọn một đường khác. |
| "Chỉ đa tuyến, tham chiếu khối và kích thước mới phân rã được." | Vùng chọn không có gì để phân rã. | Chọn một đa tuyến, tham chiếu khối hoặc kích thước. |
| "Đó là lớp hiện hành. Hãy đặt một lớp khác làm hiện hành trước." | Bạn định tắt lớp hiện hành. | Nhấn tên lớp khác, rồi tắt lớp này. |
| "Đã có lớp tên …" | Tên lớp phải duy nhất. | Chọn tên khác. |
| "Không có gì để hoàn tác." | Không còn gì để hoàn tác, hoặc bạn vừa mở hay bắt đầu một bản vẽ (việc đó xóa lịch sử). | — |

## Kích thước và khối

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách sửa |
|---|---|---|
| Văn bản và mũi tên của kích thước rất nhỏ hoặc rất lớn | Kích thước tính theo đơn vị bản vẽ; tỷ lệ chung không khớp với bản vẽ. | Đặt {{cmd:DIMSCALE}} bằng tỷ lệ in; xem [Đặt kích thước đo](topic:dimension-settings). |
| "Chọn một điểm bên trong góc bạn muốn đo." | Vị trí của kích thước góc nằm trên một cạnh. | Nhấn bên trong góc. |
| "Các đường đó song song." | Các đường song song không có góc giữa chúng. | Chọn hai đường giao nhau. |
| "Chọn một kích thước thẳng hoặc song song." | {{cmd:DIMCONTINUE}} hoặc {{cmd:DIMBASELINE}} cần một kích thước để bắt đầu. | Chọn một kích thước thẳng hoặc song song. |
| "Bản vẽ này chưa có khối nào: F chèn một khối từ tệp, L từ thư viện …" | Bản vẽ không có khối riêng. | Gõ `F` hoặc `L`, hoặc tạo khối bằng {{cmd:BLOCK}}. |
| "Không có khối nào tên "…"." | Tên sai. | Thông báo liệt kê các khối hiện có. |
| "Tên khối không được bắt đầu bằng * hoặc dùng …" kèm danh sách ký tự | Tên có ký tự mà khối không dùng được. | Dùng chữ cái, chữ số, `-` và `_`. |
| "Một khối không thể chứa chính nó." | Vùng chọn có tham chiếu đến khối đang được tạo. | Bỏ tham chiếu đó ra. |
| "Chưa chọn đối tượng nào; chưa tạo gì." | Bạn đã nhấn {{key:Enter}} trước khi chọn. | Chạy lại {{cmd:BLOCK}} và chọn các đối tượng. |

## Tờ và in

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách sửa |
|---|---|---|
| "Khung nhìn đặt trên bố cục. Hãy mở thẻ bố cục (hoặc tạo một cái bằng LAYOUT) trước." | {{cmd:MVIEW}} trên thẻ {{ui:Mô hình}}. | Nhấn thẻ tờ trước. |
| "Hãy mở bố cục có khung nhìn trước." | {{cmd:VPVIEW}} trên thẻ {{ui:Mô hình}}. | Nhấn thẻ tờ trước. |
| Tỷ lệ khung nhìn trông sai gấp mười lần | Đơn vị bản vẽ sai. | Đặt {{ui:Đơn vị}} trong {{ui:Cài đặt hiện tại}}. |
| "Chưa có gì để in." | Mô hình trống. | Vẽ gì đó, hoặc mở một bản vẽ. |
| "Chọn cửa sổ để in." | {{ui:Một cửa sổ…}} đã được chọn và chưa chọn cửa sổ nào. | Nhấn {{ui:Chọn}} và nhấn hai góc. |
| "… lớn hơn giấy: các cạnh bị cắt." | Vùng không vừa ở tỷ lệ đó. | Chọn tỷ lệ nhỏ hơn, giấy lớn hơn, hoặc {{ui:Vừa giấy}}. |
| "Trình duyệt đã chặn thẻ mới, nên PDF được tải xuống thay thế." | Cửa sổ bật lên bị chặn cho trang. | Mở PDF đã tải xuống, hoặc cho phép cửa sổ bật lên cho trang. |
| Ký tự in thành "?" | Các phông của PDF không có chữ cái cho chúng (các chữ tượng hình hiếm, tiếng Hindi và các chữ viết khác cần định dạng phức tạp, …), hoặc phông lớn hơn không tải được (ngoại tuyến). Các chữ viết châu Âu, Kirin, Hy Lạp, Do Thái, Ả Rập, Ba Tư, Urdu, Thái, Trung, Nhật và Hàn được in đúng như vậy. | Với chữ Ả Rập, Thái, Trung, Nhật hoặc Hàn, in lại khi có kết nối. Các chữ viết khác chưa được xây dựng. |
| Đường xây dựng hiện trong PDF | Lớp của chúng được in. | Nhấn nút máy in của lớp. |
| Mọi đường có độ dày như nhau | Độ dày nét của chúng là {{ui:Mặc định}}, nên chúng in theo độ rộng bút của hộp thoại. | Đặt {{ui:Độ dày nét}} cho lớp hoặc đối tượng trong bảng bên phải, hoặc chọn {{ui:Độ dày nét}} trong hộp thoại. Để thấy độ dày nét trên màn hình, nhấn {{ui:LWT}} trên thanh trạng thái. |

## Phím và màn hình

| Triệu chứng | Nguyên nhân | Cách sửa |
|---|---|---|
| F3, F7 hoặc F8 thay đổi âm lượng hoặc mở Mission Control | Phím chức năng của Mac. | Giữ **fn**, hoặc dùng các nút trên thanh trạng thái. Xem [Phím, chuột và bàn di chuột](common:keys). |
| F7 hỏi về duyệt con trỏ | Firefox dùng F7 riêng của nó. | Chọn Không; dùng nút {{ui:Lưới}}. |
| {{key:Mod+N}} mở một cửa sổ trình duyệt | Trình duyệt giữ phím đó. | Nhấn {{ui:Mới}} hoặc gõ `NEW`. |
| {{key:Mod+A}} chọn văn bản của dòng lệnh | Dòng lệnh có con trỏ. | Nhấn một đối tượng trước, hoặc gõ `ALL` ở dòng nhắc `Chọn đối tượng`. |
| {{key:Delete}} không xóa | Dòng lệnh có con trỏ. | Gõ `E` rồi nhấn {{key:Enter}}. |
| Nhấn chuột phải không làm gì trên bàn di chuột Mac | Control-nhấn có thể được tính là một nhấn thường. | Nhấn bằng hai ngón tay. |
| Không cuộn được trên bàn di chuột | Không có nút giữa, và Space không cuộn. | Vuốt bằng hai ngón tay: khung nhìn 2D cuộn (chụm và con lăn chuột để phóng to). Hoặc kéo khi giữ chuột phải. |
| {{key:Esc}} đầu tiên thoát chế độ toàn màn hình | Trình duyệt dùng Esc để thoát toàn màn hình. | Nhấn {{key:Esc}} lần nữa để hủy lệnh. |
| {{key:F1}} không làm gì trên Mac | F1 là phím độ sáng. | Giữ **fn**, hoặc nhấn {{ui:Trợ giúp}}. |
| Gõ vào ô tìm kiếm của trợ giúp | Bảng trợ giúp có con trỏ. | Nhấn lên bản vẽ. |
| Bản vẽ biến mất khỏi màn hình | Bạn đã phóng to rất xa. | Nhấn {{ui:Phạm vi}}, hoặc nhấp đúp vào con lăn. |
| "Rời trang?" khi đóng thẻ | Có thay đổi chưa lưu. | Ở lại, lưu bằng {{key:Mod+S}}, rồi đóng. |
