---
title: Vẽ không cần nhìn
summary: Bật Truy cập để CadCraft đọc to mọi lệnh và kết quả qua trình đọc màn hình, mô tả bản vẽ và những gì nằm gần con trỏ, cho phép di chuyển con trỏ bằng bàn phím, phát âm thanh cho mỗi điểm bắt và grip, và nhận lệnh bằng giọng nói ở nơi trình duyệt của bạn làm được điều đó trên máy tính.
keywords: trợ năng, trình đọc màn hình, người mù, thị lực kém, NVDA, VoiceOver, JAWS, Orca, con trỏ bàn phím, lệnh bằng giọng nói, giọng nói, âm thanh, âm thanh điểm bắt, mô tả bản vẽ, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Truy cập** cho phép bạn vẽ mà không cần nhìn màn hình. Nó tắt cho đến khi bạn bật lên, để không ai vô tình có được nó.

## Bật lên

Mở **Cài đặt** (biểu tượng bánh răng, hoặc Ctrl+,), tìm **Vẽ không cần nhìn** và chọn **Bật**. Hoặc gõ `ACCESS` ở dòng lệnh và trả lời `Bật (On)`. Nó được ghi nhớ trên máy tính này.

Khi Truy cập đang bật:

- **Mọi thứ dòng lệnh hiển thị được đọc to** qua trình đọc màn hình của bạn: những gì bạn đã gõ, lời nhắc nó hỏi, câu trả lời và mọi lỗi. CadCraft dùng các vùng trực tiếp lịch sự và khẩn cấp riêng, nên trình đọc màn hình đọc được vùng trực tiếp thì không cần thiết lập gì. Lỗi và hủy sẽ ngắt lời; mọi thứ khác chờ đến lượt.
- **Có thể vào vùng bản vẽ.** Nhấn Tab cho đến khi nghe "Bản vẽ", hoặc nhấn Shift+Tab từ dòng lệnh. Đó là một vùng chuyển phím cho CadCraft.

## Phím trên bản vẽ

| Phím | Tác dụng |
|---|---|
| Phím mũi tên | Di chuyển con trỏ bàn phím. Một bước khoảng một phần trăm những gì màn hình hiển thị, làm tròn thành 1, 2 hoặc 5. Shift di chuyển xa gấp mười lần, Ctrl xa bằng một phần mười. |
| Enter | Chọn điểm dưới con trỏ, giống như một cú nhấp chuột. |
| Space | Nhấn Enter ở dòng lệnh: kết thúc LINE, chọn mặc định. |
| Tab, Shift+Tab | Nhảy đến điểm bắt gần con trỏ tiếp theo hoặc trước đó, gần nhất trước. |
| G | Duyệt qua các grip của đối tượng đã chọn. |
| D | Mô tả bản vẽ: có bao nhiêu đối tượng, thuộc loại nào, kích thước ra sao, cái gì đã chọn. |
| W | Đọc vị trí con trỏ và khoảng cách của nó so với điểm cuối cùng. |
| N | Đọc những gì gần con trỏ, gần nhất trước, kèm khoảng cách và phía. |
| S | Mô tả các đối tượng đã chọn. |
| R | Đọc lại điều cuối cùng. |
| V | Bật hoặc tắt giọng nói. |
| / | Chuyển đến dòng lệnh. |
| ? | Liệt kê các phím này. |

Di chuyển bằng phím sẽ cho biết bạn đã đến đâu. Khi một lệnh đang chờ một điểm, nó cũng cho biết bạn cách điểm cuối cùng bao xa và theo hướng nào, ví dụ "cách điểm cuối cùng 2400, sang phải, ở 0 độ".

## Lệnh

- {{cmd:ACCESS}} bật hoặc tắt Truy cập, âm thanh điểm bắt và giọng nói, rồi đọc trạng thái.
- {{cmd:DESCRIBE}} đọc những gì bản vẽ chứa.
- {{cmd:WHEREAMI}} đọc vị trí con trỏ.
- {{cmd:NEARBY}} đọc những gì nằm gần con trỏ.
- {{cmd:SAYSEL}} đọc những gì đang được chọn, mỗi đối tượng một câu.
- {{cmd:VOICE}} bật hoặc tắt lệnh nói.

Năm lệnh đầu đọc bản vẽ và in ra một câu trả lời; chúng không thay đổi gì.

## Âm thanh cho điểm bắt và grip

Bật **Âm thanh điểm bắt và grip** trong Cài đặt. Mỗi loại điểm bắt có cao độ và âm thanh riêng, để bạn phân biệt điểm cuối với trung điểm, tâm, giao điểm và các loại khác; grip có tiếng tích kép. Âm thanh chuyển sang trái hoặc phải theo con trỏ trên màn hình. Âm thanh được tạo trên máy tính của bạn; không có gì được tải xuống.

## Lệnh bằng giọng nói

Bật **Lệnh bằng giọng nói** trong Cài đặt. Nói tên lệnh ("line", "circle", "move"), rồi nói số như cách bạn đọc chúng: "điểm ba trăm dấu phẩy bốn trăm", "khoảng cách một nghìn hai trăm", "góc bốn mươi lăm". "Enter", "hủy", "hoàn tác" và "làm lại" thực hiện đúng điều chúng nói. Những gì được nghe thấy sẽ được đọc lại, và một cụm từ không phải là lệnh sẽ được báo, không được đoán.

**Nơi giọng nói được nhận dạng.** CadCraft không có dịch vụ giọng nói riêng và không gửi âm thanh đi đâu cả. Nó yêu cầu trình duyệt của bạn nhận dạng giọng nói trên máy tính này. Nếu trình duyệt làm được, lựa chọn là **Trên máy tính này** và không có âm thanh nào rời khỏi máy. Nếu không làm được, giọng nói vẫn tắt trừ khi bạn chọn **Dịch vụ trực tuyến của trình duyệt**, cho phép trình duyệt gửi âm thanh tới dịch vụ giọng nói của nhà sản xuất. Cài đặt cho biết điều nào áp dụng trước khi bạn quyết định.

## Chưa làm được

- Chỉ CadCraft có Truy cập. Bảy ứng dụng còn lại sẽ theo sau, với cùng phím và âm thanh.
- Văn bản trong bản vẽ (ghi chú, tên khối) được đọc đúng như đã viết; nó không bao giờ được coi là chỉ dẫn.
- Tính năng đã được thử bằng kiểm tra tổng hợp và các bài kiểm thử trình duyệt; kiểm tra thủ công với NVDA, VoiceOver và một người thử nghiệm mù hoặc thị lực kém vẫn chưa thực hiện. Nếu bạn thử, hãy cho chúng tôi biết còn thiếu gì.
