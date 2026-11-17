---
title: Làm việc cùng nhau trên một bản vẽ với Live TeamWork
summary: Những gì thay đổi trong CadCraft khi bạn ở trong một phiên Live TeamWork từ CadCraft Studio: con trỏ và vùng chọn của người khác, các đối tượng người khác đang chỉnh sửa, khóa của máy chủ, hoàn tác của riêng bạn, và tham gia từ trình duyệt trong cùng mạng.
keywords: live, live teamwork, studio live, cùng nhau, cộng tác, đồng chỉnh sửa, phiên, chia sẻ live, tham gia, con trỏ, đang giữ, đang chỉnh sửa, khóa, livelock, liveunlock, livehold, giữ lớp, giữ vùng, ổ khóa, hoàn tác, máy chủ, trợ lý, cùng tệp, nhiều người, chậm, giới hạn, ai đã thay đổi, chỉnh sửa gần đây, nhật ký chỉnh sửa
from: 0497d2a3
---

## Bạn sẽ học được gì

Bạn thấy gì và điều gì xảy ra với các chỉnh sửa của bạn khi nhiều người cùng làm việc trên một bản vẽ. CadCraft Studio bắt đầu và tham gia phiên Live TeamWork ({{ui:Chia sẻ live}}, {{ui:Tham gia}}); trang này nói về chính bản vẽ.

## Mọi người cùng vẽ

Vẽ và chỉnh sửa như thường lệ. Các chỉnh sửa của bạn hiển thị ngay, kể cả trước khi người khác có chúng, và chỉnh sửa của họ xuất hiện trên màn hình bạn chỉ một lát sau khi họ thực hiện. Mọi lệnh đều hoạt động: vẽ, sửa đổi, lớp, khối, tờ, kích thước, ràng buộc.

Hai người có thể thay đổi cùng một đối tượng. Khi bạn thay đổi những thứ khác nhau, chẳng hạn màu và một điểm cuối của cùng một đường, cả hai thay đổi đều được giữ. Khi bạn thay đổi cùng một thứ, thay đổi sau cùng sẽ thắng.

Những gì chỉ thuộc về riêng bạn: lớp hiện hành, màu và chiều cao văn bản cho đối tượng mới, cài đặt kích thước của bạn, khung nhìn, chia màn hình và UCS. Bản vẽ được chia sẻ; cách bạn xem nó thì không.

## Những người khác trên bản vẽ của bạn

- **Con trỏ:** con trỏ của mỗi người hiển thị tên của họ trong màu riêng, cùng lệnh họ đang chạy. Bạn thấy con trỏ của những người làm việc gần những gì trên màn hình của bạn.
- **Vùng chọn:** những gì ai đó đã chọn được viền bằng màu của họ.
- **Đang được chỉnh sửa:** một đối tượng ai đó đã chọn mang một nhãn như "Ana đang chỉnh sửa". Bạn vẫn có thể đổi màu hoặc di chuyển nó, nhưng không thể xóa, phân rã hoặc nhập lại cho đến khi họ buông ra. Chọn nó sẽ cho bạn biết ai đang giữ nó.
- **Ai thay đổi gần nhất:** chọn một đối tượng mà người khác đã thay đổi trong phiên này và dòng lệnh cho biết ai, và thay đổi là gì ("Ben vừa thay đổi cái đó sau cùng: CIRCLE."). Bảng Live của Studio liệt kê mọi chỉnh sửa gần đây dưới {{ui:Chỉnh sửa gần đây}}. Không có gì trong số này được lưu vào bản vẽ: nó tồn tại suốt thời gian phiên.

## Giữ một lớp hoặc một vùng khi bạn làm việc ở đó

Trên một bản vẽ lớn có nhiều người, hãy cho biết phần nào là của bạn lúc này:

1. Gõ `LIVEHOLD` và nhấn {{key:Enter}}.
2. Chọn `L` và gõ tên lớp (Enter giữ lớp hiện hành), hoặc chọn `A` và chọn hai góc của một vùng.
3. Các chỉnh sửa của người khác trên lớp đó, hoặc đối với các đối tượng trong vùng đó, bị thu hồi và họ được báo rằng bạn đang làm việc ở đó. Bạn thấy vùng của mình như một khung nét đứt; người khác thấy nó bằng màu của bạn cùng tên bạn, và các lớp bạn giữ được liệt kê ở góc trên bên trái bản vẽ của họ.
4. `LIVEHOLD`, rồi `R`, nhả mọi thứ bạn giữ. Rời khỏi phiên cũng nhả chúng.

Bất kỳ ai trong phiên đều có thể giữ, kể cả máy chủ; khóa của máy chủ vẫn áp dụng bên trên. Việc giữ không bao giờ được lưu trong tệp.

## Khi một chỉnh sửa bị thu hồi

Bản sao bản vẽ của máy chủ kiểm tra mọi chỉnh sửa. Một số không thể được chấp nhận, và CadCraft thu hồi chúng trên màn hình của bạn và cho biết lý do trên dòng lệnh, chẳng hạn:

- ai đó đã xóa đối tượng, hoặc lớp hay khối nó cần, ngay trước bạn;
- ai đó đang chỉnh sửa đối tượng đó, hoặc giữ lớp của nó hoặc vùng chứa nó;
- máy chủ đã khóa nó;
- khối bạn đặt đã bị làm sạch (purge), hoặc một lớp bạn xóa vẫn còn đối tượng trên đó.

## Hoàn tác chỉ hoàn tác công việc của bạn

{{key:Mod+Z}} và {{ui:Hoàn tác}} hoàn tác lệnh cuối cùng của bạn, toàn bộ, và để công việc của mọi người khác yên. Khi ai đó đã thay đổi cùng thứ đó kể từ đó, không có gì được hoàn tác và dòng lệnh cho biết ai đã thay đổi nó. {{key:Mod+Y}} làm lại.

## Khóa (máy chủ)

Máy chủ có thể bảo vệ các đối tượng hoặc cả một lớp để không ai thay đổi chúng, kể cả máy chủ, cho đến khi được mở khóa:

1. Chọn các đối tượng, rồi gõ `LIVELOCK` và nhấn {{key:Enter}}. Hoặc gõ `LIVELOCK` khi không chọn gì và chọn `L` để khóa một lớp theo tên: các đối tượng được thêm vào lớp đó sau này cũng bị khóa.
2. Các đối tượng bị khóa được vẽ bằng nét đứt với nhãn "Máy chủ đã khóa" trên màn hình của mọi người.
3. `LIVEUNLOCK` mở khóa chúng theo cùng cách.

Khóa thuộc về phiên: chúng kết thúc khi phiên kết thúc và không bao giờ được lưu trong tệp.

## Tham gia với cùng một tệp

Nếu bạn đã mở đúng tệp mà máy chủ đã mở (từ một thư mục chia sẻ hoặc cùng một bản sao), hãy tham gia từ cửa sổ CadCraft của bạn trong Studio: mở bảng {{ui:Live}} và dùng {{ui:Nối tại đây}} với mã của máy chủ. Chỉ những thay đổi kể từ khi máy chủ mở tệp mới được truyền đi, nên một bản vẽ lớn sẵn sàng ngay. Nếu tệp của bạn là một tệp khác, bản vẽ của máy chủ thay thế nó trên màn hình của bạn (tệp của bạn vẫn giữ nguyên). Điều này chỉ hoạt động khi bản vẽ của bạn chưa thay đổi kể từ khi bạn mở nó.

## Trợ lý trong một phiên live

Một trợ lý được kết nối với cửa sổ CadCraft của bạn (xem trợ giúp về làm việc với trợ lý AI) tham gia phiên như một người tham gia riêng, được hiển thị cho mọi người là "Trợ lý (qua tên của bạn)". Máy chủ cho nó vào, như với một người; trợ lý của chính máy chủ tham gia ngay. Các thay đổi của nó có hoàn tác riêng: {{key:Mod+Z}} của bạn hoàn tác công việc của bạn, còn hoàn tác của trợ lý chỉ hoàn tác các bước của chính nó. Nó rời phiên khi bạn ngắt kết nối nó hoặc khi bạn rời đi, và nó chỉ có thể làm việc trong phiên khi bạn có thể chỉnh sửa.

## Tham gia từ trình duyệt

Một đồng đội không có Studio có thể quét hình dưới mã của máy chủ bằng điện thoại, máy tính bảng hoặc máy tính trong cùng mạng. CadCraft mở trong trình duyệt, hỏi tên bạn trên dòng lệnh, và được lấp đầy bằng bản vẽ của máy chủ khi máy chủ cho bạn vào. Một liên kết mời cho phép ai đó tham gia từ mạng khác: máy chủ cần một chỗ trong Team Cloud Plan cho ứng dụng, mọi người khác tham gia miễn phí, và liên kết chỉ hoạt động khi phiên của máy chủ đang mở.

## Nhiều người trên một bản vẽ

Mọi chỉnh sửa được gửi đến mọi người trong phiên, nên càng nhiều người thì mỗi thay đổi càng mất nhiều thời gian để đến từng người, và các máy tính xách tay và kết nối chậm hơn sẽ tụt lại trước tiên. Quy mô thông thường của một phiên là 20 người; máy chủ có thể cho phép nhiều hơn cho một phiên (xem trợ giúp về làm việc cùng nhau theo thời gian thực). Nếu bản vẽ có vẻ chậm khi có nhiều người, ít người hơn, ít người cùng chỉnh sửa tại một thời điểm hơn, hoặc một kết nối tốt hơn sẽ giúp ích.

## Khi phiên kết thúc

Chỉ máy chủ lưu bản vẽ. Khi máy chủ kết thúc phiên, mọi người khác giữ một bản sao chưa lưu: hãy lưu nó nếu bạn muốn giữ lại.

:::note
Một thứ bị thu hồi được vẽ phía trên các đối tượng xung quanh nó trên màn hình riêng của bạn cho đến khi bạn mở lại bản vẽ. Các tô bóng (hatch) và đối tượng tô chồng lên nhau có thể trông khác với bản sao của máy chủ; bản vẽ thì giống nhau.
:::
