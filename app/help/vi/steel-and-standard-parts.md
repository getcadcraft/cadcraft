---
title: Đặt thép hình và chi tiết tiêu chuẩn
summary: Vẽ tiết diện thép, mặt đứng và thanh 3D từ các bảng tiết diện đã công bố, đặt bu lông, đai ốc, vòng đệm, chốt, ổ trục, then và bánh răng theo tiêu chuẩn của chúng, rồi liệt kê trong danh sách chi tiết.
keywords: thép, tiết diện, hồ sơ, hình dạng, thép hình W, dầm chữ I, thép chữ C, thép góc, hss, ống, ipe, hea, heb, upn, dầm, cột, thanh, mặt đứng, aisc, en 10365, bu lông, vít, đai ốc, vòng đệm, chốt, ổ trục, then, rãnh then, bánh răng, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, chi tiết tiêu chuẩn, danh sách chi tiết, bảng kê vật tư, bom, steelmember, partslist
from: 547c1048
---

Tab {{ui:Chuẩn}} của thư viện có hai loại mục, được tạo ngay tại đây từ các bảng đã công bố (không tải xuống gì):

- **Tiết diện thép**: 1,335 kích thước. W, S, C, L, HSS và Pipe từ AISC Shapes Database v16.0; IPE, HEA, HEB và UPN từ EN 10365:2017. DetailCraft dùng cùng bảng này.
- **Chi tiết tiêu chuẩn**: vít đầu lục giác (ISO 4017), bu lông đầu lục giác (ISO 4014), đai ốc lục giác (ISO 4032), vòng đệm phẳng (ISO 7089), bu lông và đai ốc lục giác hệ inch (ASME B18.2.1 và B18.2.2), chốt song song (ISO 2338), ổ bi rãnh sâu (ISO 15), then song song (DIN 6885-1) và bánh răng trụ thẳng (module theo ISO 54).

Mọi thứ ở đây được chia sẻ theo CC0: dùng cho bất kỳ mục đích nào, không cần ghi công.

## Đặt một tiết diện thép

1. Mở thư viện ({{ui:Thư viện}} trong nhóm Khối, hoặc gõ `LIB`) và nhấp tab {{ui:Chuẩn}}.
2. Chọn họ trong danh sách đầu tiên, ví dụ {{ui:Thép hình W}}. Gõ trong ô tìm kiếm để thu hẹp kích thước: `W12` hiển thị mọi W12.
3. Trong {{ui:Đặt như}}, chọn:
   - {{ui:Mặt cắt}}: tiết diện ngang, với tâm đặt tại điểm chèn.
   - {{ui:Cao độ}}: thanh nhìn từ bên hông, dài theo {{ui:Chiều dài (mm)}}, tính từ giữa đầu trái.
   - {{ui:Thanh 3D}}: một khối đặc trên tab 3D (xem bên dưới).
4. Nhấp {{ui:Đặt}} trên thẻ của kích thước đó, rồi nhấp nơi cần đặt, như với mọi mục thư viện.

Mặt cắt hoặc mặt đứng trở thành một khối. Các thuộc tính của nó chứa kích thước, bảng nguồn, chiều dài (với mặt đứng) và một vật liệu bạn có thể điền.

:::note
Thép chữ S, thép chữ C và UPN được vẽ với các cánh song song có độ dày trung bình, còn thép góc có góc vuông: các cánh thực tế nghiêng và góc được bo tròn. W, IPE, HEA và HEB có bo chân cánh, và HSS có bán kính góc.
:::

## Tạo thanh 3D

Chọn {{ui:Thanh 3D}} và nhấp {{ui:Đặt}}, hoặc gõ {{cmd:STEELMEMBER}} (`SMEMBER`) ở dòng lệnh:

1. Tại `Kích thước tiết diện`, nhấn {{key:Enter}} để dùng kích thước hiển thị, hoặc gõ một kích thước, ví dụ `HSS6x6x1/4` hoặc `IPE300`.
2. Nhấp điểm đầu, rồi điểm cuối. Thanh chạy giữa hai điểm, đặt trên mặt đất.
3. Với một cột, gõ `C`, nhấp điểm chân của nó và gõ chiều cao.

Thanh là một khối đặc kín trên tab 3D. Di chuyển hoặc sao chép nó ở đó như mọi khối đặc khác. {{key:Mod+Z}} sẽ xóa nó đi.

## Đặt một chi tiết tiêu chuẩn

1. Trên tab {{ui:Chuẩn}}, chọn họ, ví dụ {{ui:Vít đầu lục giác}}.
2. Với vít, bu lông, chốt hoặc then, gõ {{ui:Chiều dài (mm)}} của nó (đơn vị inch với các họ hệ inch). Với bánh răng, gõ {{ui:Số răng}}, {{ui:Bề rộng mặt (mm)}} và {{ui:Đường kính lỗ (mm)}}. Để trống một ô sẽ dùng giá trị thường gặp hiển thị trong ô đó.
3. Nhấp {{ui:Đặt}} trên kích thước và nhấp nơi cần đặt.

Vít, bu lông và chốt được vẽ từ bên hông, với mặt tựa của đầu nằm tại điểm chèn; đai ốc, vòng đệm, ổ trục và bánh răng được vẽ nhìn thẳng; then được vẽ từ trên xuống. Ren được vẽ theo cách thông thường: chân ren là đường mảnh, đầu ren là đường đậm. Bánh răng được vẽ thành đường tròn đỉnh, đường tròn chia và đường tròn chân, không vẽ từng răng.

Khối của mỗi chi tiết mang loại, tiêu chuẩn, kích thước, chiều dài và vật liệu làm thuộc tính, và trọng lượng của nó được tính từ hình dạng danh nghĩa bằng thép. Đổi vật liệu trong bảng {{ui:Thuộc tính}}.

Các chi tiết này cũng có trong Thư viện dưới dạng mục, và PartCraft mở chúng như chi tiết tham số ({{ui:Chi tiết tiêu chuẩn}} trong nhóm File của nó).

## Lập danh sách chi tiết

- Trong thư viện, nhấp {{ui:Danh sách chi tiết}}: mọi chi tiết tiêu chuẩn và tiết diện thép trong bản vẽ, được nhóm theo loại, tiêu chuẩn, kích thước, chiều dài và vật liệu, cùng số lượng và số thứ tự. {{ui:Tải CSV}} lưu nó để dùng trong bảng tính.
- Để vẽ nó, gõ {{cmd:PARTSLIST}} (`PLIST`), nhấp góc trên bên trái của bảng, rồi nhấn {{key:Enter}} để dùng chiều cao chữ thông thường hoặc gõ một chiều cao.

Danh sách được đọc từ thuộc tính của các khối, nên nó vẫn đúng sau khi bản vẽ được lưu dưới dạng DWG hoặc DXF rồi mở lại.

## Lỗi thường gặp

- **"No steel section is called …"**: gõ kích thước đúng như tab {{ui:Chuẩn}} liệt kê: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`. (Thông báo: "Không có tiết diện thép nào tên là …")
- **Thanh nằm trên tab 3D, không nằm trong mặt bằng.** {{cmd:STEELMEMBER}} tạo một khối đặc; mở tab 3D để thấy nó. Để hiển thị thép trên mặt bằng, cũng đặt một {{ui:Mặt cắt}} hoặc {{ui:Cao độ}}.
- **Chiều dài nằm ngoài phạm vi.** Bu lông phải dài hơn đầu của nó, và then phải dài hơn bề rộng của nó. Dòng bên dưới các thẻ cho biết giá trị nào đã bị từ chối.
