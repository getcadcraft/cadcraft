---
title: "Chính sách mặc định: thiết lập những gì bản vẽ mới bắt đầu với"
summary: Khai báo một lần đơn vị, định dạng độ dài, độ chính xác, chiều cao văn bản và giấy của tờ mà bản vẽ mới bắt đầu với, cho công việc hệ mét và hệ Anh, và chia sẻ các chính sách trong văn phòng dưới dạng một tệp nhỏ.
keywords: mặc định, các mặc định, chính sách mặc định, chính sách, tiêu chuẩn văn phòng, mặc định văn phòng, mẫu, bản vẽ mới, đơn vị, insunits, định dạng độ dài, kiến trúc, độ chính xác, luprec, chiều cao văn bản, giấy của tờ, a1, chia sẻ, xuất, nhập, json
from: 7b80fd13
---

## Bạn sẽ làm gì

Cho CadCraft biết bản vẽ mới nên bắt đầu với những gì, để không ai trong văn phòng phải chạy UNITS và đổi cùng những thứ mỗi lần. Đây là một tiện ích bổ sung: nó tắt cho đến khi bạn bật lên, và một chính sách mà bạn không đặt sẽ giữ nguyên mặc định riêng của CadCraft.

:::note
Đây là mặc định cho bản vẽ **mới** và tờ **mới**. Bản vẽ bạn đã bắt đầu không bị thay đổi, và bản vẽ bạn mở cũng vậy.
:::

## Các bước

1. Mở {{ui:Cài đặt}}, vào {{ui:Tiện ích bổ sung}} và bật {{ui:Chính sách mặc định}}.
2. Trong Cài đặt, mở thẻ **CadCraft** và chọn {{ui:Chính sách mặc định}} trong danh sách bên trái.
3. Đặt các chính sách bạn muốn. Mỗi chính sách bắt đầu ở **mặc định của CadCraft**. Một chính sách có ô **Hệ mét** và ô **Hệ Anh** nhận một giá trị cho mỗi loại bản vẽ; chỉ điền những ô bạn cần.
4. Không có nút Lưu: mỗi thay đổi được lưu ngay khi bạn thực hiện.
5. Bắt đầu một bản vẽ mới. Nó có đơn vị, định dạng độ dài, độ chính xác và chiều cao văn bản bạn đã đặt, và tờ mới đầu tiên của nó nằm trên giấy bạn đã chọn.

## Các chính sách

- **Đơn vị của bản vẽ mới**: không có, milimét, centimét, mét, inch hoặc feet.
- **Định dạng độ dài** và **Độ chính xác độ dài**: những gì lệnh UNITS đặt, cho bản vẽ mới.
- **Chiều cao văn bản mới**, theo đơn vị bản vẽ.
- **Giấy của tờ mới**: giấy mà Tờ mới dùng.
- **Kích thước chú thích trên giấy** (Cài đặt › Toàn cục › Chính sách mặc định): chiều cao của văn phòng, tính bằng milimét khi in. CadCraft dùng chiều cao này cho ghi chú và nhãn: {{cmd:ANNOSCALE}} đặt chiều cao mà văn bản mới bắt đầu với thành chiều cao đó ở tỷ lệ chú thích. Xem [Đơn vị, giấy và tỷ lệ](topic:units-papers-scales#annotate-by-scale).

Bản vẽ bằng inch hoặc feet dùng các giá trị Hệ Anh; mọi bản vẽ khác dùng các giá trị Hệ mét. Bản vẽ không có đơn vị dùng hệ đơn vị đặt trong Cài đặt › Toàn cục › Chính sách mặc định, hoặc Hệ mét khi chưa đặt.

## Chia sẻ trong văn phòng

1. Trong Cài đặt, mở thẻ **Toàn cục** và chọn {{ui:Chính sách mặc định}}.
2. Nhấp {{ui:Lưu vào tệp}}. Bạn nhận được một tệp nhỏ kết thúc bằng `.ccdefaults.json`.
3. Trên máy tính khác, bật tiện ích bổ sung, mở cùng nơi đó và nhấp {{ui:Tải từ tệp}}. Các chính sách của tệp thay thế những chính sách có trên máy đó.

Một tệp chứa chính sách của mọi ứng dụng CadCraft, nên cùng tệp đó dùng được trong BimCraft.

## Lưu ý

- Không có chính sách cho tỷ lệ của tờ: khung nhìn của tờ mới được vừa với bản vẽ, và bạn đặt tỷ lệ của nó trên tờ.
- Không có chính sách cho kiểu kích thước: bản vẽ mới không có kiểu kích thước đặt tên. Đặt kích thước bằng DIMSTYLE, hoặc bắt đầu từ một bản vẽ đã có kiểu của bạn.
- Tệp là JSON thuần văn bản, mở được. Chính sách mà tệp nêu tên nhưng phiên bản này không biết sẽ bị bỏ qua và được nêu trong thông báo; phần còn lại vẫn được tải.
- Chính sách được giữ trong trình duyệt này, không nằm trong bản vẽ. Tắt tiện ích bổ sung và mọi thứ lại là mặc định riêng của CadCraft.
