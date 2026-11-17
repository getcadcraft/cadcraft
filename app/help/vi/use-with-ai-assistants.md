---
title: Sử dụng CadCraft với trợ lý AI
summary: Để trợ lý AI hoặc kịch bản của riêng bạn làm việc với CadCraft: nó được làm gì, cách kết nối bất kỳ ứng dụng khách MCP nào, và cách bạn vẫn kiểm soát (quyền, hoàn tác, nhật ký hoạt động, Ngắt kết nối).
keywords: ai, trợ lý, agent, mcp, model context protocol, kịch bản, tự động hóa, dòng lệnh, cli, json, mã thông báo, quyền, ngắt kết nối, hoạt động, thư mục, đường dẫn, svg, hàng loạt
from: 06ba4ef6
---

## Những gì bạn sẽ học

Cách để một trợ lý AI (hoặc một kịch bản bạn đã viết) xem bản vẽ, chạy các lệnh của CadCraft, in và lưu, và cách quyết định những gì nó được phép chạm vào.

CadCraft **không có AI riêng** và không gửi gì đi đâu cả. Bạn tự mang trợ lý: bất kỳ chương trình nào hỗ trợ Model Context Protocol (MCP). CadCraft chỉ cung cấp cho nó các công cụ, và bạn chọn những công cụ nào.

Có hai cách để kết nối:

- **Bản vẽ bạn đang mở.** Trợ lý làm việc trong cửa sổ này, ngay bên cạnh bạn, thông qua CadCraft Studio trên máy tính. Đây là mục đích của {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Trợ lý}}.
- **Bản vẽ trên máy tính, không cần mở ứng dụng.** Máy chủ MCP của CadCraft và lệnh `cadcraft` đọc và ghi các tệp DWG và DXF trong các thư mục bạn chỉ định. Xem "Làm việc với tệp mà không mở CadCraft" bên dưới.

## Bật lên

1. Mở {{ui:Cài đặt}} (biểu tượng bánh răng trên thanh ứng dụng, hoặc {{key:Mod+,}}) rồi vào thẻ {{ui:CadCraft}}.
2. Trong mục {{ui:Trợ lý}}, đánh dấu **Cho phép trợ lý AI và kịch bản dùng CadCraft**. Mặc định là tắt cho đến khi bạn bật.
3. Chọn những gì nó được làm. **Đọc** được chọn sẵn; chỉ chọn các quyền khác khi bạn cần.

| Quyền | Trợ lý có thể làm gì |
|---|---|
| Đọc | Xem bản vẽ: mô tả, liệt kê và tìm đối tượng, xem vùng chọn, mô tả khung nhìn và chụp ảnh, kiểm tra theo quy tắc lớp và quy tắc bản vẽ |
| Chỉnh sửa | Chạy lệnh trên bản vẽ và thay đổi vùng chọn. Mỗi thao tác là một bước bạn có thể hoàn tác |
| Lưu | Lưu bản vẽ (trên máy tính, vào tệp của nó; trong trình duyệt, dưới dạng tải xuống) |
| Xuất | In ra PDF và tạo các tệp khác |

## Cho phép dùng tệp trong các thư mục bạn chọn

Trong CadCraft Studio, trợ lý có thể mở, lưu và in tệp theo tên thay vì dùng hộp thoại tệp, nhưng chỉ bên trong các thư mục bạn thêm dưới {{ui:Trợ lý}} › {{ui:Thư mục được phép dùng}}:

1. Chọn {{ui:Thêm thư mục…}} và chọn thư mục trong hộp thoại của Studio.
2. Lúc này trợ lý có thể liệt kê các tệp trong thư mục đó (`files_list`), mở một bản vẽ (`drawing_open`), lưu bản vẽ ở đó theo một phiên bản DWG hoặc dưới dạng DXF, in ra tệp PDF hoặc SVG, nạp một tệp LISP, và đưa cho một lệnh tệp mà lệnh đó yêu cầu (`INSERT` `F`, `XATTACH`, một tệp điểm) hoặc chỉ ra nơi tệp của một lệnh được ghi (CSV của `COUNT`, `PUBLISH`).
3. {{ui:Bỏ chọn}} thu hồi một thư mục ngay lập tức. Đường dẫn nằm ngoài các thư mục đó sẽ bị từ chối, và một tệp đã có sẵn chỉ được thay thế khi trợ lý yêu cầu điều đó hoặc chính nó đã ghi tệp.

Mở tệp vẫn cần **Đọc**; ghi bản vẽ cần **Lưu**; mọi tệp khác cần **Xuất**.

Các công cụ nằm ngoài quyền bạn đã đánh dấu sẽ không được cung cấp cho trợ lý. Nếu nó vẫn yêu cầu một công cụ như vậy, CadCraft sẽ từ chối và ghi lại trong nhật ký hoạt động. Tắt công tắc sẽ kết thúc mọi kết nối cùng lúc. {{ui:Đặt lại cài đặt CadCraft}} cũng tắt nó.

## Kết nối trợ lý của bạn

Trợ lý kết nối qua **CadCraft Studio** trên máy tính của bạn: nó chạy một máy chủ nhỏ mà chỉ máy tính này truy cập được (địa chỉ `127.0.0.1`), được bảo vệ bằng một mã thông báo mà Studio tạo mỗi lần khởi động. Mở Studio, chọn {{ui:Kết nối trợ lý}}, rồi sao chép địa chỉ và mã thông báo.

- Trong trợ lý của bạn, thêm một máy chủ MCP loại HTTP với địa chỉ (có dạng `http://127.0.0.1:47615/mcp`) và tiêu đề `Authorization: Bearer <token>`. Studio hiển thị các cài đặt để dán vào.

{{ui:Mã thông báo mới}} trong Studio khiến mọi trợ lý đã kết nối kết nối lại bằng mã thông báo mới. Đừng bao giờ chia sẻ mã thông báo: bất kỳ ai có nó đều có thể dùng các ứng dụng bạn đã bật, miễn là Studio còn chạy.

:::note
Một thẻ trình duyệt không thể mở kết nối cho trợ lý: trong các ứng dụng trên trình duyệt, công tắc không có tác dụng cho đến khi bạn dùng CadCraft Studio trên máy tính.
:::

## Bạn vẫn kiểm soát

- **Mỗi thao tác là một bước hoàn tác**, được ghi nhãn bằng tên mà trợ lý đặt cho nó, ví dụ "Trợ lý: LINE". Nhấn {{key:Mod+Z}} để hoàn tác toàn bộ thao tác gần nhất của trợ lý.
- **Bạn thấy nó làm gì.** Các lệnh của nó xuất hiện trong lịch sử lệnh với **[Trợ lý]** ở phía trước, và bản vẽ được vẽ lại khi nó làm việc.
- **Nó chờ bạn.** Khi bạn đang ở giữa một lệnh, trợ lý chỉ có thể đọc chứ không thể thay đổi bản vẽ; nó được báo thử lại khi bạn xong.
- **Bạn biết khi có một trợ lý đang kết nối.** Một nút trên thanh ứng dụng hiển thị tên trợ lý trong khi nó đang kết nối. Nhấp vào để xem nó được phép làm gì, hoặc để **Ngắt kết nối** nó.
- **Hoạt động.** {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Trợ lý}} › {{ui:Hoạt động}} liệt kê mọi lệnh gọi: khi nào, công cụ nào, đã xong hay bị từ chối, và bước hoàn tác nào nó đã tạo. {{ui:Lưu nhật ký}} giữ một bản sao.

## Trợ lý có thể yêu cầu gì

| Công cụ | Quyền | Chức năng |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Đọc | Tên bản vẽ, đơn vị, lớp, khối, tờ; những gì đang hiển thị trên màn hình |
| `files_list`, `drawing_open` | Đọc | Studio: các tệp trong thư mục của bạn; mở một tệp trong cửa sổ này |
| `objects_list`, `object_get`, `selection_get` | Đọc | Đối tượng với hình học, chiều dài và diện tích (hoặc chỉ số lượng, theo loại và lớp); vùng chọn |
| `drawing_check` | Đọc | Các quy tắc như lớp được phép, không có gì trên lớp 0, màu ByLayer, chiều cao văn bản |
| `view_screenshot` | Đọc | Ảnh của bản vẽ như đang hiển thị |
| `command_run` | Chỉnh sửa | Gõ vào dòng lệnh: `LINE 0,0 @100,0 @0,50 ` được đọc như bạn sẽ gõ (dấu cách kết thúc một câu trả lời), hoặc một danh sách với mỗi câu trả lời một dòng. Nó có thể để một lệnh mở và tiếp tục trong lần gọi tiếp theo |
| `script_run` | Chỉnh sửa | Một kịch bản (`.scr`) hoặc tệp LISP, như {{ui:APPLOAD}} nạp |
| `block_insert` | Chỉnh sửa | Đặt một khối cùng các giá trị thuộc tính của nó trong một bước |
| `selection_set`, `undo` | Chỉnh sửa | Chọn đối tượng cho lệnh tiếp theo; hoàn tác các bước của chính nó |
| `drawing_save` | Lưu | {{ui:Lưu}} của chính CadCraft, hoặc {{ui:Lưu thành}} vào một trong các thư mục của bạn |
| `drawing_plot` | Xuất | PDF hoặc SVG của một tờ hoặc của mô hình, ở một tỷ lệ hoặc vừa khung (lớp nền PDF chưa được in theo cách này) |

Khi một trợ lý chạy một lệnh, CadCraft hỏi các câu hỏi của lệnh trên dòng lệnh thay vì trong hộp thoại (ví dụ có nên chèn cả bản vẽ hay chỉ một khối), để trợ lý có thể trả lời. Thư viện và {{ui:Tìm}} vẫn cần bạn; trợ lý được báo phải hỏi bạn.

## Làm việc với tệp mà không mở CadCraft

Máy chủ MCP của CadCraft (`cadcraft-mcp`) và dòng lệnh (`cadcraft`) chạy mã vẽ của chính CadCraft trong Node.js, không có cửa sổ. Chúng cần Node.js 20 trở lên.

- **Máy chủ MCP** chỉ làm việc trong các thư mục bạn chỉ định, và chỉ với các quyền bạn cấp: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Không có `--root` thì nó không mở được tệp nào; không có `--allow` thì nó chỉ đọc được. Nó cũng có thể đọc mô hình IFC, bóc tách khối lượng và các đánh dấu trong bộ PDF.
- **Dòng lệnh** dành cho các kịch bản của riêng bạn: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Nhiều tệp cùng lúc: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Thêm `--json` để có đầu ra mà một chương trình có thể đọc.

:::note
Nếu `npx @getcadcraft/mcp` báo không tìm thấy gói, gói đó chưa được phát hành. Tin tức trên getcadcraft.com sẽ thông báo khi nó có.
:::

## Nếu có việc không hoạt động

- **Trợ lý không thấy công cụ CadCraft nào:** kiểm tra công tắc đã bật trong cửa sổ này chưa, và cửa sổ đã mở trong Studio chưa.
- **"cần quyền chỉnh sửa":** đánh dấu **Chỉnh sửa** trong {{ui:Trợ lý}}, rồi yêu cầu lại.
- **"nằm ngoài các thư mục trợ lý được dùng":** thêm thư mục đó trong {{ui:Trợ lý}} › {{ui:Thư mục được phép dùng}}, hoặc yêu cầu trợ lý dùng một tệp trong thư mục bạn đã thêm.
- **Lỗi "401" hoặc "token":** mã thông báo đã đổi (Studio khởi động lại, hoặc {{ui:Mã thông báo mới}}). Sao chép mã mới vào cài đặt của trợ lý.
- **Thay đổi của nó sai:** nhấn {{key:Mod+Z}}. Mỗi lần nhấn hoàn tác trọn một thao tác của trợ lý.

## Xem thêm

- [Công thức cho trợ lý AI](common:assistants-recipes): các ví dụ đã làm sẵn, mỗi ví dụ kèm các công cụ nó gọi.
