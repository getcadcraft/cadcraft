---
title: Thêm văn bản và nhãn
summary: Đặt nhãn phòng bằng văn bản một dòng, viết ghi chú ngắt dòng bằng văn bản đoạn gõ ngay tại chỗ, và sửa văn bản sau đó.
keywords: văn bản, dtext, mtext, mleader, multileader, đường dẫn, revcloud, đám mây sửa đổi, đám mây, tìm, thay thế, tìm và thay thế, đoạn văn, ngắt dòng, khoảng dòng, nhãn, ghi chú, chú thích, chiều cao, căn lề, textmask, mặt nạ nền, mặt nạ, wipeout, xoay, sửa văn bản, ddedit, textedit, phông chữ
from: 4b76be99
---

## Bạn sẽ tạo gì

Hai nhãn phòng, căn giữa trong phòng của chúng, một ghi chú tự ngắt theo chiều rộng của nó, rồi sửa một trong các nhãn.

## Chiều cao văn bản và tỷ lệ bản vẽ

Chiều cao văn bản tính theo đơn vị bản vẽ. Trong bản vẽ đơn vị milimét sẽ in ở tỷ lệ 1:50, văn bản cao 2.5 mm trên giấy phải cao 2.5 × 50 = 125 đơn vị trong mô hình. Trên thẻ tờ bạn vẽ theo đơn vị giấy, nên 2.5 ở đó là 2.5 mm trên giấy.

## Đặt nhãn căn giữa

1. Gõ `DT` rồi nhấn {{key:Enter}} (hoặc nhấn {{ui:Văn bản}} trên thanh công cụ). Dòng nhắc là `Chỉ định điểm bắt đầu của văn bản [Căn lề]:`.
2. Gõ `J` rồi nhấn {{key:Enter}}.
3. Tại `Nhập tùy chọn [Trái (L)/Tâm (C)/Phải (R)/Giữa (M)/TL/MC] <Trái (L)>:`, gõ `MC` rồi nhấn {{key:Enter}}.
4. Tại `Chỉ định điểm chèn của văn bản`, nhấn vào giữa một phòng.
5. Tại `Chỉ định chiều cao`, gõ `250` rồi nhấn {{key:Enter}}.
6. Tại `Chỉ định góc xoay của văn bản <0>`, nhấn {{key:Enter}}.
7. Tại `Nhập văn bản`, gõ `NHÀ BẾP` rồi nhấn {{key:Enter}}.

Nhãn xuất hiện, căn giữa tại điểm bạn nhấn.

8. Nhấn {{key:Enter}} ở dòng `Nhập văn bản` đang trống để kết thúc lệnh.

## Viết ghi chú tự ngắt dòng

Văn bản đoạn ({{cmd:MTEXT}}) ngắt dòng theo một chiều rộng và được gõ thẳng lên bản vẽ.

1. Gõ `T` rồi nhấn {{key:Enter}}, hoặc nhấn {{ui:Đoạn văn}} trên thanh công cụ.
2. Tại `Chỉ định góc thứ nhất`, nhấn vào nơi góc trên bên trái của ghi chú sẽ đặt.
3. Để đổi chiều cao trước, gõ `H`, nhấn {{key:Enter}}, gõ `250` rồi nhấn {{key:Enter}}.
4. Tại `Chỉ định góc đối diện [Chiều cao/Căn lề/Khoảng dòng/Xoay/Chiều rộng]`, nhấn ở bên phải góc thứ nhất. Khoảng cách theo chiều ngang là chiều rộng mà văn bản ngắt theo; bạn nhấn xuống thấp bao nhiêu cũng không giới hạn chiều rộng.
5. Một hộp mở ra phía trên bản vẽ với con trỏ trong đó. Gõ `TẤT CẢ KÍCH THƯỚC TÍNH BẰNG MILIMÉT TRỪ KHI CÓ GHI CHÚ KHÁC`. Các từ tự ngắt theo chiều rộng khi bạn gõ.
6. Nhấn {{key:Enter}} để bắt đầu một đoạn mới rồi gõ `KIỂM TRA TẠI CÔNG TRƯỜNG`.
7. Nhấn {{key:Mod+Enter}}, nhấn {{ui:OK}}, hoặc nhấn bất kỳ đâu bên ngoài hộp. Ghi chú là một đối tượng duy nhất.

Thanh phía trên hộp thay đổi {{ui:Chiều cao}}, {{ui:Khoảng dòng}} (1 là bình thường, 1.5 là nhiều hơn một nửa), {{ui:Chiều rộng}} (0 = không ngắt dòng) và {{ui:Căn lề}} khi bạn gõ. {{key:Esc}} hoặc {{ui:Hủy}} đóng hộp mà không thêm gì.

Các tùy chọn ở góc thứ hai: `H` chiều cao, `J` căn lề (`TL` trên trái … `BR` dưới phải: góc hoặc giữa của hộp đứng yên), `L` khoảng dòng, `R` xoay, `W` nhập chiều rộng thay vì góc thứ hai.

:::note
Khi hộp đang mở, {{key:Space}} gõ một khoảng trắng và {{key:Enter}} bắt đầu đoạn mới. Tệp DWG được lưu sẽ giữ văn bản đoạn dưới dạng MTEXT; DXF R12 không có văn bản đoạn, nên mỗi dòng được lưu thành một văn bản riêng.
:::

### Thay vào đó là nhiều dòng đơn

{{cmd:TEXT}} (`DT`) hỏi từng dòng một: mỗi lần {{key:Enter}} bắt đầu dòng kế tiếp, thấp hơn 1.667 lần chiều cao văn bản, và mỗi dòng là một đối tượng riêng. Nhấn {{key:Enter}} ở một dòng trống để kết thúc.

## Các tùy chọn căn lề

| Tùy chọn | Điểm bạn nhấn là |
|---|---|
| Trái (mặc định) | Đầu trái của đường cơ sở |
| Tâm | Giữa của đường cơ sở |
| Phải | Đầu phải của đường cơ sở |
| Giữa, MC | Giữa của văn bản, cả theo ngang lẫn lên xuống |
| TL | Góc trên bên trái |

## Sửa văn bản

1. Nhấp đúp vào một đối tượng văn bản. Nó mở trong cùng hộp như văn bản đoạn mới, với con trỏ ở cuối.
2. Đổi các từ.
3. Nhấn {{key:Mod+Enter}} hoặc nhấn bên ngoài hộp. Văn bản trên bản vẽ thay đổi; {{key:Esc}} giữ nguyên như cũ.

{{cmd:TEXTEDIT}} (`ED`) làm điều tương tự: chọn từng văn bản một, rồi nhấn {{key:Enter}} khi xong.

Chọn một văn bản để đổi nó trong bảng bên phải thay thế: {{ui:Văn bản}}, {{ui:Chiều cao}}, {{ui:Chiều rộng ngắt dòng}} (0 = không ngắt dòng), {{ui:Khoảng dòng}}, {{ui:Xoay}}, vị trí X và Y, và {{ui:Căn lề}}. Danh sách {{ui:Căn lề}} cũng có Dưới trái, mà văn bản từ các chương trình khác đôi khi dùng.

## Định dạng bên trong văn bản đoạn từ chương trình khác

Văn bản đoạn trong DWG hoặc DXF có thể mang mã bên trong: màu theo từng từ, đậm và nghiêng, gạch chân, gạch trên và gạch ngang, phân số xếp chồng như 1/2, và chiều cao khác cho một từ. CadCraft giữ các mã đó, vẽ chúng (trên màn hình và trong PDF đã in) và lưu lại nguyên vẹn.

Khi bạn sửa văn bản như vậy (nhấp đúp, {{cmd:TEXTEDIT}}, ô Văn bản trong bảng bên phải, hoặc {{cmd:FIND}} với Thay thế), bạn sửa các từ thuần túy của nó. Từ bạn gõ đi vào đoạn bên cạnh và nhận màu và kiểu của đoạn đó; các mã khác vẫn ở nguyên chỗ. Nếu bạn gõ lại các số của một phân số xếp chồng, phân số đó trở thành văn bản thường. Đặt toàn bộ văn bản từ ô Văn bản chỉ giữ các mã ở những nơi có thể nhận ra từ đã còn nguyên.

Tên phông chữ (`\F`) được giữ và lưu, nhưng mọi thứ đều được vẽ bằng một phông kiểu Helvetica. Hiện chưa có thanh công cụ để gõ mã.

## Chỉ vào một thứ: đa đường dẫn

{{ui:Đường dẫn}} trong nhóm {{ui:Chú thích}} ({{cmd:MLEADER}}, `MLD`) vẽ một mũi tên, một đường dẫn, một đoạn đệm ngắn và một ghi chú, thành một đối tượng.

1. Nhấn {{ui:Đường dẫn}}. Tại `Chỉ định vị trí đầu mũi tên của đường dẫn`, nhấn vào thứ mà ghi chú nói đến.
2. Tại `Chỉ định vị trí đệm của đường dẫn`, nhấn vào nơi ghi chú sẽ đặt. Đoạn đệm hướng về phía bạn đã nhấn.
3. Gõ ghi chú trong hộp mở ra, rồi nhấn {{key:Mod+Enter}}.

`A` và `L` ở câu hỏi đầu tiên đặt kích thước đầu mũi tên và độ dài đoạn đệm; chiều cao văn bản lấy từ {{ui:Chiều cao văn bản}} dùng cho kích thước mới, nhân với {{ui:Tỷ lệ chung}}. Nhấp đúp vào một đa đường dẫn để đổi các từ của nó. Các grip di chuyển đầu mũi tên và đoạn đệm; ghi chú đi theo đoạn đệm. Trong {{ui:Thuộc tính}}: {{ui:Văn bản}}, {{ui:Chiều cao}}, {{ui:Chiều rộng ngắt dòng}}, {{ui:Kích thước mũi tên}} và {{ui:Khoảng cách chân dẫn}}.

:::note
Đa đường dẫn được lưu thành đa đường dẫn thật trong DWG. DXF không có đa đường dẫn trong R12 hay 2000, nên ở đó chúng được lưu thành các đường, mũi tên và văn bản mà chúng vẽ ra.
:::

## Đánh dấu thay đổi bằng đám mây sửa đổi

{{ui:Chú thích}} › {{ui:Thêm}} › {{ui:Đám mây sửa đổi}} ({{cmd:REVCLOUD}}, `RC`) vẽ một đám mây cung tròn bao quanh phần đã thay đổi. Lịch sử cho biết chiều dài cung và loại mà nó sẽ dùng.

- **Hình chữ nhật** (lần đầu): nhấn hai góc.
- `P` **Đa giác**: nhấn các góc, {{key:Enter}} đóng đám mây.
- `F` **Tự do**: nhấn nơi nó bắt đầu rồi di chuyển con trỏ quanh khu vực mà không nhấn; một cung được thêm sau mỗi chiều dài cung. Nhấn hoặc nhấn {{key:Enter}} để đóng.
- `O` **Đối tượng**: chọn một đa tuyến kín, hình tròn hoặc hình elip (hoặc một đường thẳng, cung hoặc đa tuyến hở); nó trở thành đám mây. `Đảo chiều?` `Y` đổi các cung vào trong.
- `A` **Chiều dài cung**: chiều dài của mỗi cung. Chọn một giá trị phù hợp với tỷ lệ in.

Đám mây là một đa tuyến kín gồm các cung, nên được lưu ở mọi định dạng.

## Tìm và thay thế từ

{{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Tìm và thay thế}} ({{cmd:FIND}}) tìm trong văn bản, giá trị của thuộc tính khối và văn bản kích thước trên thẻ đang mở (hoặc chỉ trong các đối tượng đã chọn).

1. Gõ các từ vào {{ui:Tìm}}. Danh sách cho biết từng nơi chúng xuất hiện, cùng số lượng.
2. Chọn {{ui:Khớp chữ hoa, chữ thường}}, {{ui:Chỉ từ nguyên vẹn}} hoặc {{ui:Dùng ký tự đại diện (* và ?)}} nếu cần, và bỏ chọn những nơi không muốn tìm.
3. Nhấn {{ui:Chọn kết quả tìm thấy}} để chọn các đối tượng đó, hoặc gõ các từ mới vào {{ui:Thay bằng}} (danh sách cho biết mỗi từ sẽ thành gì) rồi nhấn {{ui:Thay tất cả}}. Một lần {{key:Mod+Z}} hoàn tác mọi lần thay thế.

Giá trị đo của một kích thước không phải văn bản, nên nó không bao giờ bị thay thế: trong `<> TYP.`, chỉ `TYP.` là có thể đổi.

## Ẩn các đường phía sau nhãn

1. Chọn các văn bản, gõ {{cmd:TEXTMASK}} rồi nhấn {{key:Enter}}.
2. `B` tô nền của bản vẽ phía sau chúng; `C` yêu cầu số màu. `O` gỡ mặt nạ đi.
3. `Hệ số khoảng cách viền`: {{key:Enter}} giữ 1.5, tức nửa chiều cao văn bản quanh chữ.

Mặt nạ che các đường nằm dưới văn bản, trên màn hình và khi in. DWG 2004 trở lên và DXF 2000 giữ được nó; DWG định dạng 2000 và DXF R12 thì không, và khi lưu sẽ có thông báo.

## Phông chữ

Mọi văn bản được vẽ bằng một phông kiểu Helvetica, trên màn hình và trong PDF. Văn bản từ bản vẽ đã mở giữ nguyên nội dung, chiều cao và vị trí, nhưng không giữ phông gốc (tên phông bên trong văn bản đoạn được giữ trong tệp, xem phần trên).

Trong PDF đã in, văn bản thuộc mọi chữ viết châu Âu, Kirin hoặc Hy Lạp được in đúng như vậy (PDF chứa các chữ cái cần thiết, và bạn vẫn chọn và tìm được văn bản). Văn bản tiếng Trung, Nhật và Hàn cũng được in đúng như vậy (lần đầu cần, việc in sẽ tải một phông lớn hơn). Văn bản tiếng Ả Rập, Ba Tư, Urdu và Do Thái cũng được in đúng như vậy (xem phần kế tiếp). Ký tự mà không phông nào có chữ cái thì in thành "?", và lịch sử cho biết có bao nhiêu ký tự như vậy.

## Chữ viết từ phải sang trái: Ả Rập, Ba Tư, Urdu, Do Thái

Gõ văn bản như bình thường ở bất kỳ đâu khác: {{cmd:TEXT}} và {{cmd:MTEXT}} vẽ từng dòng theo thứ tự đọc. Một dòng có chữ cái đầu tiên là chữ Ả Rập hoặc Do Thái sẽ đọc từ phải sang trái; số và từ Latinh bên trong dòng đó giữ thứ tự từ trái sang phải của chúng, và các chữ kiểu Ả Rập được nối với nhau. Một dòng bắt đầu bằng chữ Latinh vẫn đọc từ trái sang phải, với các từ từ phải sang trái nằm đúng chỗ bên trong nó. Mỗi đoạn của văn bản nhiều dòng có hướng riêng, và một đoạn ngắt dòng giữ hướng đó trên mọi dòng.

Văn bản được lưu đúng như bạn đã gõ, nên các tệp DWG và DXF trao đổi nó với chương trình khác mà không đổi. Điểm chèn và căn lề ({{ui:Trái}}, {{ui:Tâm}}, {{ui:Phải}}) có cùng nghĩa như với mọi văn bản: một ghi chú từ phải sang trái muốn treo từ đầu phải của nó thì cần {{ui:Phải}}.

Trên màn hình, các chữ cái lấy từ phông của hệ thống bạn. Trong PDF đã in, tiếng Do Thái dùng cùng phông nhúng như văn bản Latinh; văn bản kiểu Ả Rập khiến việc in tải thêm một phông (dưới 1 MB, một lần), và toàn bộ PDF sau đó được in bằng phông đó. Phông đó không có hình riêng cho ba ký tự Urdu (heh goal, yeh barree và dấu chấm kết thúc Urdu): chúng được in theo hình chữ Ả Rập gần nhất. Một bản vẽ có cả văn bản kiểu Ả Rập và văn bản Trung, Nhật hoặc Hàn sẽ in một trong hai thành "?", vì một bản in chỉ mang một phông. Văn bản trong phông SHX đã nạp được sắp xếp và nối lại khi phông có các chữ ở đúng vị trí Unicode; với các phông cũ mà chữ đã được định hình sẵn, hãy dùng {{ui:Đảo chiều}} trong {{cmd:SHXFONTS}} như trước.

## Lỗi thường gặp

- **Văn bản quá nhỏ để thấy.** Chiều cao tính theo đơn vị bản vẽ. Trong bản vẽ lớn, hãy dùng chiều cao lớn (xem trên), hoặc phóng to.
- **Lệnh kết thúc sau một dòng.** Bạn đã nhấn {{key:Enter}} ở một dòng trống trong {{cmd:TEXT}}. Hãy bắt đầu lại, hoặc dùng văn bản đoạn (`T`), nơi {{key:Enter}} bắt đầu đoạn mới.
- **`T` mở một hộp thay vì hỏi một dòng.** Như trong AutoCAD, `T` là văn bản đoạn ({{cmd:MTEXT}}); văn bản một dòng là `DT`.
- **Văn bản ngắt dòng ở chỗ khác trong AutoCAD.** CadCraft ngắt dòng theo độ rộng chữ Helvetica; một phông khác có thể vừa một từ nhiều hơn hoặc ít hơn trên một dòng.
- **Văn bản trong bản sao phản chiếu.** Nó được đặt phản chiếu nhưng vẫn đọc được từ trái sang phải.
