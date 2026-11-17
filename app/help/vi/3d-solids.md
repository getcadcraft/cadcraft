---
title: Mô hình 3D
summary: Xem bản vẽ ở dạng 3D trên thẻ 3D và tạo các khối đặc đơn giản từ nó: đùn (có độ nghiêng hoặc theo đường dẫn), quay tròn, đẩy và kéo mặt, hộp, trụ và nêm; hợp, trừ và giao các khối; sau đó di chuyển, sao chép, xoay và xóa chúng, đồng thời đặt các hình chiếu 2D phẳng của chúng lên tờ.
keywords: 3d, ba chiều, khối đặc, vùng, thân, acis, sat, sab, khối đặc từ chương trình khác, mở bản vẽ 3d, đùn, ext, quay tròn, rev, quét, độ nghiêng, đường dẫn, presspull, đẩy kéo, hộp, trụ, cyl, nêm, 3dorbit, xoay quanh, khung nhìn, vscurrent, kiểu hiển thị, tô bóng, đường ẩn, khung dây, tia x, xray, iso, phối cảnh, song song, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, khối xem, hợp, uni, trừ, su, giao, in, boolean, kết hợp, nối khối, viewbase, flatshot, hình chiếu phẳng, hình chiếu 2d, hình chiếu bản vẽ, hình chiếu đứng, hình chiếu trên, hình chiếu cạnh, đường ẩn
from: 13060e71
---

## Những gì bạn sẽ làm

Một nền phòng 1000 × 600 được đùn thành khối cao 400, một mặt được kéo lên, và một trụ bên cạnh — sau đó lưu mô hình cùng bản vẽ và xuất cho trình xem 3D hoặc máy in.

Thẻ {{ui:3D}} nằm cạnh {{ui:Mô hình}} bên dưới bản vẽ. Thẻ này hiển thị bản vẽ không gian mô hình nằm trên mặt đất theo màu lớp (các lớp đang tắt hoặc đóng băng vẫn ẩn) và các khối đặc bạn tạo. Lần đầu mở, khung nhìn 3D được tải; sau đó nó chuyển ngay lập tức.

## Đùn một hình

1. Trên thẻ {{ui:Mô hình}}, gõ `REC` rồi nhấn {{key:Enter}}. Gõ `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Nhấp thẻ {{ui:3D}}. Thanh công cụ hiển thị nhóm {{ui:3D}} thay cho các nhóm bản vẽ.
3. Nhấp {{ui:Đùn}} (hoặc gõ {{cmd:EXTRUDE}}, `EXT`). Nhấp bên trong hình chữ nhật, rồi nhấn {{key:Enter}}.
4. Gõ `400` và nhấn {{key:Enter}}. Lịch sử ghi "Đã đùn 1 khối đặc, cao 400" kèm thể tích của nó.

Đa tuyến khép kín (kể cả cung tròn), hình chữ nhật, đa giác, vòng tròn và elip đều đùn được; đường thẳng và đa tuyến hở thì không, và lịch sử sẽ cho biết lý do. Bạn cũng có thể chọn các hình trên thẻ {{ui:Mô hình}} trước, rồi gõ `EXTRUDE` ở đó. Thay vì gõ chiều cao, bạn có thể nhấp để đặt: đường bao sẽ theo con trỏ lên xuống. Chiều cao âm sẽ đi xuống. Gõ `D` tại lời nhắc chiều cao để xóa các hình 2D sau khi đùn (gõ `D` lần nữa sẽ giữ lại chúng).

Tại lời nhắc chiều cao, `T` (Độ nghiêng) yêu cầu một góc tính bằng độ: các cạnh nghiêng vào trong theo góc đó, nên mặt trên nhỏ hơn (góc âm sẽ làm nó lớn hơn); góc quá dốc đối với hình sẽ bị từ chối. `P` (Đường dẫn) thay vào đó quét các hình dọc theo một đường dẫn (xem bên dưới).

## Quay tròn và quét

- {{cmd:REVOLVE}} (`REV`, hoặc {{ui:Thêm}} › {{ui:Quay tròn quanh một trục}}): chọn các hình khép kín, nhấn {{key:Enter}}, rồi nhấp hai đầu của trục (hoặc gõ `X` hoặc `Y` để lấy trục của bản vẽ đi qua 0,0), sau đó gõ một góc hoặc nhấn {{key:Enter}} để quay một vòng đầy đủ. Hình quay quanh trục và dựng lên khỏi mặt đất: vẽ nửa đường bao của một chiếc bình bên cạnh một đường thẳng, rồi quay nó quanh đường thẳng đó. Hình có thể chạm trục nhưng không được cắt qua trục. Một vòng đầy đủ có 48 bước.
- {{cmd:SWEEP}} (hoặc {{ui:Thêm}} › {{ui:Quét theo đường dẫn}}, hoặc `P` tại lời nhắc chiều cao của EXTRUDE): chọn các hình khép kín (mặt cắt), nhấn {{key:Enter}}, rồi nhấp vào đường dẫn: một đường thẳng, đa tuyến, cung tròn, vòng tròn hoặc elip. Mặt cắt dựng đứng ngang qua đường dẫn, phần giữa nằm trên đó, và chạy dọc theo nó; các góc được cắt vát, và đường dẫn khép kín tạo thành một vòng. Một hình chữ nhật nhỏ quét dọc theo đường viền phòng sẽ tạo thành chân tường; một vòng tròn quét dọc theo đa tuyến sẽ tạo thành ống.

## Đẩy và kéo một mặt

1. Nhấp {{ui:Đẩy/kéo}} (hoặc gõ {{cmd:PRESSPULL}}).
2. Nhấp vào mặt trên của khối.
3. Gõ `100` và nhấn {{key:Enter}}, hoặc di chuyển con trỏ rồi nhấp. Khối sẽ cao 500.

## Hộp, trụ và nêm

- {{cmd:BOX}}: nhấp hoặc gõ hai góc, sau đó là chiều cao.
- {{cmd:CYLINDER}} (`CYL`): tâm, bán kính, rồi chiều cao. Trụ và các vòng tròn đã đùn có 48 cạnh, tô bóng mượt.
- {{cmd:WEDGE}} (`WE`): hai góc và một chiều cao. Nó có chiều cao đầy đủ tại góc thứ nhất và dốc xuống bằng không tại góc kia.

Trên thẻ 3D, một lần nhấp sẽ đặt vào mặt hoặc cạnh dưới con trỏ, nếu không thì đặt xuống mặt đất, nên một hộp có thể đứng trên một khối khác.

## Di chuyển, sao chép, xoay và xóa khối

Trên thẻ 3D, một lần nhấp chọn một khối; kéo từ trái sang phải để chọn bằng cửa sổ, từ phải sang trái để chọn chéo. Sau đó:

- {{cmd:MOVE}}: nhấp một điểm gốc và nơi nó sẽ đến, hoặc gõ `<100,0,0>` (hoặc `@100,0`) để di chuyển một khoảng theo X, Y và Z.
- {{cmd:COPY}}: tương tự, nhưng giữ lại bản gốc.
- {{cmd:ROTATE}}: gõ một góc (khối xoay quanh tâm vùng chọn, quanh Z), hoặc nhấp tâm, điểm bắt đầu và góc.
- {{cmd:ERASE}} hoặc {{key:Delete}}.

## Hợp, trừ và giao các khối

Mở {{ui:Thêm}} trong thanh công cụ 3D, hoặc gõ lệnh:

- {{cmd:UNION}} (`UNI`): chọn các khối, nhấn {{key:Enter}}: chúng trở thành một khối.
- {{cmd:SUBTRACT}} (`SU`): chọn các khối cần giữ và nhấn {{key:Enter}}, rồi chọn các khối cần bỏ đi và nhấn {{key:Enter}}. Khoét lỗ xuyên qua một khối: vẽ một trụ xuyên qua nó, rồi trừ trụ đi.
- {{cmd:INTERSECT}} (`IN`): chọn các khối, nhấn {{key:Enter}}: chỉ còn lại phần chung của tất cả chúng.

Lịch sử ghi thể tích của kết quả. Mỗi thao tác là một bước hoàn tác. Lần chạy đầu tiên sẽ tải bộ xử lý boolean 3D (khoảng 0,5 MB; có trong {{ui:Lưu để dùng ngoại tuyến}}). Chỉ các khối đặc kín mới có thể kết hợp: một khối có cạnh hở (từ các mặt 3D rời của chương trình khác) sẽ bị từ chối kèm lý do. Kết quả là một khối đặc; các mặt cong vẫn được tạo từ các mặt phẳng nhỏ, như trụ đã làm.

Nhấp đúp vào một khối để sửa riêng các mặt và cạnh của nó; {{key:Esc}} đóng lại. Mọi thay đổi 3D là một bước hoàn tác trong cùng lịch sử với bản vẽ: {{key:Mod+Z}} hoàn tác thao tác cuối cùng bạn làm trên cả hai thẻ.

## Hình chiếu phẳng trên tờ

1. Mở một thẻ tờ (hoặc ở lại {{ui:Mô hình}}), rồi gõ {{cmd:VIEWBASE}} (hoặc `FLATSHOT`).
2. Chọn hình chiếu: {{key:Enter}} cho hình chiếu trước, hoặc `T` (trên), `R` (phải), `L` (trái), `BA` (sau), `BO` (dưới), `I` (đẳng trắc).
3. {{key:Enter}} hiển thị các đường ẩn, dạng nét đứt; `H` thì bỏ chúng đi.
4. {{key:Enter}} lấy tỷ lệ mà CadCraft gợi ý: trên tờ, đó là tỷ lệ tiêu chuẩn lớn nhất (như 1:20) mà hình chiếu vừa trong dưới một nửa trang giấy. Hoặc gõ một tỷ lệ: `1:50`, `2:1`.
5. Nhấp, hoặc gõ, vị trí tâm của hình chiếu.

Hình chiếu là một tham chiếu khối, `VIEW-FRONT-1` và tương tự: các cạnh nhìn thấy nằm trên lớp VIEW-VISIBLE (0.5 mm), các cạnh ẩn nằm trên VIEW-HIDDEN (nét đứt, 0.25 mm). Di chuyển, ghi kích thước và in nó như bất kỳ hình vẽ nào khác. Đó là một hình ảnh của các khối tại thời điểm bạn tạo nó: sau khi thay đổi chúng, hãy xóa hình chiếu và chạy {{cmd:VIEWBASE}} lần nữa. Để có thêm hình chiếu, chạy lệnh một lần cho mỗi hình chiếu.

## Xem xung quanh

Kéo bằng bánh xe để xoay quanh, {{key:Shift}} + kéo bánh xe hoặc nút phải để di chuyển khung nhìn, và xoay bánh xe để thu phóng tại con trỏ. Trên bàn di chuột, hai ngón tay xoay và chụm để thu phóng. Nhấp chuột phải mà không kéo là {{key:Enter}}, như trên các thẻ khác. 3DORBIT cho phép nút trái xoay cho đến khi bạn nhấn {{key:Enter}} hoặc {{key:Esc}}.

- {{ui:Hình chiếu}} (hoặc {{cmd:VIEW}}): Iso, Trên, Dưới, Trước, Sau, Trái, Phải, Phối cảnh hoặc Song song, và Thu phóng phạm vi.
- {{ui:Kiểu}} (hoặc {{cmd:VSCURRENT}}, `VS`): Tô bóng, Tô bóng có cạnh, Đường ẩn, Khung dây hoặc Tia X.

Các điểm bạn nhấp sẽ bắt vào khối (góc, cạnh, mặt) và vào bản vẽ 2D trên mặt đất: đầu mút và trung điểm của các đường và cung, và các điểm dọc theo chúng. Các đường 2D không bao giờ được chọn trên thẻ 3D. Khi một lệnh yêu cầu đối tượng 2D (EXTRUDE, REVOLVE, SWEEP), một lần nhấp sẽ chọn một đối tượng, kéo từ trái sang phải sẽ lấy những gì nằm trọn trong cửa sổ, và kéo từ phải sang trái sẽ lấy những gì nó cắt qua, như trên thẻ {{ui:Mô hình}}.

Một khối xem nằm ở góc trên bên phải thẻ 3D: nhấp vào một mặt, cạnh hoặc góc để nhìn từ đó, kéo để xoay, và nút ngôi nhà sẽ đưa về khung nhìn đẳng trắc. Đó là {{ui:Tự động}}, mục đầu tiên của {{ui:Chỉ báo góc}} trong [cài đặt CadCraft](topic:settings). Khi đặt là {{ui:Khối xem}}, thẻ {{ui:Mô hình}} cũng hiển thị một khối, nhìn từ trên xuống; nhấp vào bất kỳ mặt nào khác sẽ mở thẻ 3D và nhìn từ phía đó. Khi đặt là {{ui:Biểu tượng trục}}, cả hai thẻ thay vào đó hiển thị dấu trục.

## Khối từ chương trình khác

Bản vẽ từ chương trình khác có thể chứa khối đặc 3D, vùng và thân (3DSOLID, REGION, BODY: chương trình kia giữ hình dạng của chúng dưới dạng dữ liệu ACIS). CadCraft hiển thị những khối nằm trong không gian mô hình trên thẻ 3D, theo màu lớp và với các cạnh riêng của chúng, lần đầu bạn mở thẻ; dòng lệnh sau đó cho biết đã vẽ bao nhiêu.

- Chúng hiển thị đúng như vậy: bạn không thể chọn, di chuyển hay thay đổi chúng. Các lớp đang tắt hoặc đóng băng sẽ ẩn chúng.
- Lưu dưới dạng DWG sẽ ghi lại từng khối không thay đổi, ở bất kỳ phiên bản DWG nào, để chương trình kia nhận lại chúng. Tệp DXF không giữ chúng: CadCraft chỉ ghi chúng vào DWG, và sẽ thông báo khi bạn lưu dưới dạng DXF.
- Được vẽ: các mặt phẳng, và các mặt trên hình trụ, hình nón, hình cầu, xuyến và bề mặt spline đơn giản, với cạnh thẳng, cạnh tròn và cạnh spline. Một mặt trên bất kỳ loại bề mặt nào khác, hoặc mặt mà CadCraft không thể dàn phẳng, sẽ không được đoán: nó bị bỏ qua và được liệt kê, ví dụ "Chưa vẽ (khối 3D): 2 mặt trên spline-surface (sweepsur), một bề mặt chưa vẽ được."
- Khối nằm trong các khối khác chưa được hiển thị; "Giới thiệu về tệp này" có đếm chúng.

Các mặt cong được vẽ thành những mảnh phẳng nhỏ, cách nhau khoảng 7.5°, nên một khối cong trông hơi gồ ghề khi nhìn gần.

## Lưu và xuất

Lưu giữ mô hình 3D, cả trong DWG và DXF. Mỗi mặt được ghi thành một mặt 3D trên lớp `CC-3D`, để các chương trình khác hiển thị khối, và CadCraft giữ một bản sao chính xác riêng trong tệp, đọc lại khi bạn mở lại bản vẽ, với thẻ 3D như trước (camera, phép chiếu và kiểu hiển thị). Các mặt 3D do chương trình khác tạo ra sẽ vào thẻ 3D dưới dạng mặt rời, được gom thành một nhóm. Một mặt 3D bên trong khối sẽ xuất hiện một lần cho mỗi tham chiếu đến khối đó trong mô hình, được đặt và xoay theo tham chiếu; trong chính khối đó, và trên tờ, mặt 3D được vẽ phẳng, như đường bao của nó.

{{ui:Xuất}} trong nhóm 3D tải xuống riêng các khối: GLB cho trình xem và web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) hoặc STL để in 3D, theo milimét ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} sẽ hỏi bạn chọn loại nào.

:::note
Mô hình 3D có kích thước thật. Bản vẽ không có đơn vị được tính là milimét, nên `1000` là một mét. Nếu sau này bạn đổi đơn vị của bản vẽ (Thuộc tính, khi không chọn gì), các khối sẽ được co giãn theo để vẫn nằm trên bản vẽ, và lịch sử sẽ ghi lại điều đó. Một lần {{key:Mod+Z}} hoàn tác cả việc đổi đơn vị lẫn co giãn.
:::
