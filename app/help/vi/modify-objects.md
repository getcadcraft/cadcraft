---
title: Di chuyển, sao chép, xoay, tỷ lệ, đối xứng, kéo giãn và mảng
summary: Bố trí nội thất trong phòng bằng các lệnh sửa đổi cơ bản, dùng điểm gốc, khoảng cách gõ bằng tay và hoàn tác.
keywords: di chuyển, sao chép, xoay, tỷ lệ, đối xứng, kéo giãn, mảng, nối, matchprop, khớp thuộc tính, painter, arrayrect, arraypolar, mảng cực, xóa, phân rã, hoàn tác, làm lại, điểm gốc, độ dời, sửa đổi, căn chỉnh, phân bố, xếp thẳng hàng, phân bố đều
from: 8eaeee6c
---

## Bạn sẽ vẽ gì

Một cái bàn có một ghế được sao chép quanh bàn, xoay, lấy đối xứng và đổi kích thước. Trong quá trình này bạn dùng {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} và {{cmd:UNDO}}.

## Vẽ các chi tiết

1. Gõ `REC` và nhấn {{key:Enter}}, gõ `0,0` và nhấn {{key:Enter}}, rồi gõ `@1800,900` và nhấn {{key:Enter}}. Đây là cái bàn.
2. Gõ `REC` và nhấn {{key:Enter}}, gõ `300,-700` và nhấn {{key:Enter}}, rồi gõ `@450,450` và nhấn {{key:Enter}}. Đây là cái ghế, nằm dưới bàn.
3. Nhấp {{ui:Phạm vi}}.

## Di chuyển: điểm gốc, rồi điểm thứ hai

Mọi lệnh di chuyển, sao chép, xoay và tỷ lệ đều bắt đầu từ một **điểm gốc**: điểm được đối tượng mang theo, hoặc điểm mà đối tượng xoay quanh.

1. Nhấp vào ghế để chọn.
2. Gõ `M` và nhấn {{key:Enter}}. Lịch sử ghi `1 found`.
3. Tại `Specify base point`, bắt điểm vào góc trên bên trái của ghế (Điểm cuối) và nhấp.
4. Tại `Specify second point`, gõ `@0,200` và nhấn {{key:Enter}}.

Ghế di chuyển lên 200, gần bàn hơn.

:::tip
Gõ `D` tại `Specify base point` để nhập độ dời: CadCraft sẽ hỏi `Specify displacement`, và bạn gõ khoảng cách theo chiều ngang và chiều dọc, ví dụ `0,200` (không cần `@`).
:::

## Sao chép, bao nhiêu lần tùy ý

1. Nhấp vào ghế.
2. Gõ `CO` và nhấn {{key:Enter}}.
3. Bắt điểm vào góc dưới bên trái của ghế và nhấp làm điểm gốc.
4. Gõ `@600,0` và nhấn {{key:Enter}}. Một bản sao xuất hiện cách 600 về bên phải.
5. Gõ lại `@600,0` và nhấn {{key:Enter}}. Bản sao thứ hai xuất hiện cách bản gốc 1200 về bên phải.
6. Nhấn {{key:Enter}} để kết thúc lệnh.

{{cmd:COPY}} tiếp tục cho đến khi bạn nhấn {{key:Enter}}. Mỗi bản sao được đặt theo khoảng cách từ điểm gốc đến điểm bạn nhập. Điểm `@` tính từ điểm bạn nhập gần nhất, và sau bản sao đầu tiên thì đó là điểm của bản sao đó, nên `@600,0` hai lần cho các bản sao ở 600 và 1200. Gõ `U` và nhấn {{key:Enter}} để hoàn lại bản sao cuối mà không thoát lệnh.

Bạn sẽ thấy ba ghế xếp thành hàng dưới bàn.

:::tip
{{cmd:COPY}} dùng để sao chép trong một bản vẽ, đặt theo điểm gốc. Để đưa đối tượng sang bản vẽ hoặc thẻ khác, hoặc dán sau này, dùng bộ nhớ tạm: {{key:Mod+C}}, rồi {{key:Mod+V}}. {{key:Mod+D}} tạo một bản sao di chuyển theo con trỏ. Xem [Sao chép, dán và nhân bản](topic:copy-paste).
:::

## Lấy đối xứng hàng ghế sang phía bên kia

1. Kéo một vùng chọn cắt (từ phải sang trái) qua ba ghế, không chạm vào bàn.
2. Gõ `MI` và nhấn {{key:Enter}}.
3. Tại `Specify first point of mirror line`, bắt điểm vào trung điểm của cạnh trái bàn và nhấp.
4. Tại `Specify second point of mirror line`, bắt điểm vào trung điểm của cạnh phải bàn và nhấp.
5. Tại `Erase source objects? [Yes/No] <N>`, nhấn {{key:Enter}} để giữ lại.

Bạn sẽ thấy ba ghế dưới bàn và ba ghế đối xứng phía trên. Chữ trong vùng chọn đối xứng vẫn đọc được: chữ được đặt đối xứng nhưng không bị viết ngược.

## Xoay một ghế

1. Nhấp vào ghế ngoài cùng bên phải dưới bàn.
2. Gõ `RO` và nhấn {{key:Enter}}.
3. Bắt điểm vào góc dưới bên phải của ghế và nhấp làm điểm gốc.
4. Gõ `90` và nhấn {{key:Enter}}.

Ghế xoay 90 độ ngược chiều kim đồng hồ quanh điểm gốc. Góc âm sẽ xoay theo chiều kim đồng hồ. Thay vì gõ, bạn có thể nhấp một điểm thứ hai: góc được tính từ điểm gốc đến điểm đó.

## Đổi tỷ lệ bàn

1. Chọn bàn.
2. Gõ `SC` và nhấn {{key:Enter}}.
3. Bắt điểm vào góc dưới bên trái của bàn và nhấp làm điểm gốc.
4. Gõ `1.2` và nhấn {{key:Enter}}.

Bàn lớn hơn 20%, giãn ra từ điểm gốc. Hệ số nhỏ hơn 1 sẽ làm bàn nhỏ lại.

:::note
Nếu bạn nhấp một điểm thay vì gõ hệ số tỷ lệ, hệ số là khoảng cách từ điểm gốc đến điểm đó. Nhấp cách điểm gốc đúng một đơn vị bản vẽ cho hệ số 1. Thường thì gõ số là lựa chọn tốt hơn.
:::

## Hoàn tác và làm lại

- {{key:Mod+Z}}, nút {{ui:Undo}}, hoặc `U` rồi {{key:Enter}} để hoàn tác lệnh vừa dùng. Một lệnh là một bước: hoàn tác một {{cmd:COPY}} đã tạo năm bản sao sẽ xóa cả năm bản.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, nút {{ui:Redo}}, hoặc `REDO` sẽ đưa lại lệnh đó.
- Lịch sử ghi lại những gì đã hoàn tác (ví dụ "Đã hoàn tác COPY").

CadCraft giữ 500 bước gần nhất. Cài đặt lớp (bật, đóng băng, khóa, màu) là cài đặt chứ không phải chỉnh sửa, nên không được hoàn tác.

## Kéo giãn phòng rộng ra

{{cmd:STRETCH}} (`S`, hoặc {{ui:Stretch}}) chỉ di chuyển những gì nằm trong cửa sổ chọn cắt: góc và đầu đường nằm bên trong sẽ di chuyển, phần còn lại đứng yên, nên phòng rộng ra thay vì bị dời đi.

1. Gõ `S` và nhấn {{key:Enter}}.
2. Kéo một cửa sổ từ phải sang trái qua bức tường bên phải, sao cho cửa sổ bao trùm các góc của tường và đầu của mọi thứ gặp nó.
3. Nhấn {{key:Enter}}.
4. Nhấp một điểm gốc, rồi gõ `@600,0` và nhấn {{key:Enter}}.

Hình chữ nhật rộng thêm 600; các đường kết thúc ở tường vẫn kết thúc ở tường. Cung có một đầu nằm trong vùng sẽ giữ nguyên chiều cao; vòng tròn và văn bản di chuyển khi tâm hoặc điểm chèn nằm trong vùng; kích thước được đo lại theo chiều dài mới. Đối tượng được chọn từng cái một, không dùng cửa sổ, chỉ đơn giản là di chuyển.

Bạn cũng có thể chọn trước: khi chưa có lệnh nào chạy, kéo cửa sổ chọn cắt (hoặc lasso kiểu chọn cắt) qua tường, rồi gõ `S`. STRETCH sẽ nhận vùng đã chọn và kéo giãn những gì các cửa sổ của nó bao trùm, giống như bạn đã kéo chúng ở dấu nhắc của lệnh.

## Mảng: hàng và cột, hoặc quanh một tâm

{{cmd:ARRAY}} (`AR`, hoặc {{ui:Array}}) sao chép vùng chọn theo lưới hoặc theo vòng tròn.

1. Chọn một ghế, gõ `AR` và nhấn {{key:Enter}}. Nhấn {{key:Enter}} để chọn Hình chữ nhật.
2. Xem trước 4 cột và 3 hàng xuất hiện. Gõ `COU`, nhấn {{key:Enter}}, rồi gõ `5` cho cột và `2` cho hàng.
3. Gõ `S`, nhấn {{key:Enter}}, rồi gõ `600` làm khoảng cách giữa các cột và `-900` làm khoảng cách giữa các hàng (số âm là đi xuống).
4. Nhấn {{key:Enter}} để tạo các bản sao.

Để tạo một vòng ghế quanh bàn, chọn `PO` (Cực) thay vì vậy, nhấp vào tâm bàn, rồi đặt `I` (số mục), `F` (góc lấp đầy: 360 để đi hết một vòng, 180 cho nửa vòng) và `ROT` (các bản sao có xoay để hướng về tâm hay không). {{cmd:ARRAYRECT}} và {{cmd:ARRAYPOLAR}} bỏ qua bước hỏi này.

## Nối các đoạn thành một đa tuyến

{{cmd:JOIN}} (`J`, hoặc {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): chọn các đường thẳng, cung và đa tuyến hở có hai đầu gặp nhau, rồi nhấn {{key:Enter}}. Chúng thành một đa tuyến, đóng kín nếu đi hết một vòng, và sau đó bạn có thể dời song song tất cả trong một lần. Các đường thẳng nằm trên cùng một đường sẽ thành một đường thẳng, dù giữa chúng có khe hở; các cung của cùng một đường tròn sẽ thành một cung, hoặc thành đường tròn.

## Khớp thuộc tính

{{cmd:MATCHPROP}} (`MA`, hoặc {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): nhấp vào đối tượng có kiểu bạn muốn, rồi chọn các đối tượng cần đổi và nhấn {{key:Enter}}. Chúng nhận lớp và màu của nó; văn bản nhận chiều cao, kích thước nhận kiểu số đo, tô bóng nhận mẫu. Gõ `S` ({{ui:Settings}}) ở câu hỏi thứ hai để tắt bất kỳ mục nào trong số này.

## Căn chỉnh đối tượng

**Theo điểm.** {{cmd:ALIGN}} (`AL`, hoặc {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): chọn các đối tượng và nhấn {{key:Enter}}, rồi nhấp một điểm trên chúng (nguồn) và nơi nó cần đến (đích).

- Một cặp sẽ di chuyển chúng. Nhấn {{key:Enter}} tại `Specify second source point` để dừng ở đó.
- Hai cặp cũng sẽ xoay chúng, để đoạn thẳng nối hai điểm nguồn nằm dọc theo đoạn thẳng nối hai điểm đích. Sau đó CadCraft hỏi `Scale objects based on alignment points?`: `Y` làm chúng lớn hoặc nhỏ đi tương ứng.
- Cặp thứ ba sẽ lấy đối xứng chúng khi hai điểm của cặp đó nằm ở hai phía đối nhau của đường thẳng đó.

**Cạnh và khoảng cách.** {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (hoặc `ALIGNPANEL`) mở một bảng nhỏ trên bản vẽ. Chọn đối tượng, rồi:

- chọn đối tượng để căn theo trong {{ui:Align to}} (toàn bộ vùng chọn, đối tượng đầu hoặc cuối bạn đã chọn, hoặc một điểm bạn nhấp), và nhấp {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} hoặc {{ui:Bottom}};
- hoặc chọn {{ui:Equal gaps}} hay {{ui:Equal centres}} và nhấp {{ui:Across}} hoặc {{ui:Up and down}}: hai đối tượng ngoài cùng giữ nguyên, các đối tượng còn lại được xếp đều giữa chúng (ít nhất ba đối tượng).

Mỗi lần nhấp là một bước hoàn tác, và vùng chọn vẫn giữ nguyên, nên bạn có thể thử cách khác. Mỗi đối tượng được tính theo khung bao của nó, trong UCS nếu đã đặt. Trên dòng lệnh, tương đương là {{cmd:ALIGNTO}} và {{cmd:DISTRIBUTE}}.

## Xóa và phân rã

- {{cmd:ERASE}} (`E`, hoặc {{key:Delete}}) xóa các đối tượng đã chọn.
- {{cmd:EXPLODE}} (`X`) tách đa tuyến thành đường thẳng và cung, tham chiếu khối thành các đối tượng của nó, và kích thước thành đường thẳng, mũi tên và văn bản. Kích thước đã phân rã không còn tự đo nữa.

## Lỗi thường gặp

- **Gõ khoảng cách mà không có `@` ở điểm thứ hai.** `600,0` là điểm tuyệt đối 600,0, không phải "cách 600 về bên phải". Dùng `@600,0`, hoặc chỉ `600` với con trỏ hướng đúng.
- **Xoay sai chiều.** Góc dương xoay ngược chiều kim đồng hồ.
- **Hoàn tác xóa nhiều hơn mong đợi.** Một lần hoàn tác lấy lại cả lệnh vừa dùng, bao gồm mọi bản sao nó đã tạo.
- **Lệnh không yêu cầu chọn đối tượng.** Đối tượng đã được chọn sẵn, nên lệnh dùng chúng. Nhấn {{key:Esc}} trước để bắt đầu khi chưa chọn gì.
