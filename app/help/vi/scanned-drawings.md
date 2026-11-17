---
title: Bản vẽ quét và truy vết
summary: Đưa một tờ quét vào, căn tỷ lệ và vuông góc, làm sạch, xóa một phần, bắt điểm vào các đường của nó và truy vết thành đường thẳng và cung tròn.
keywords: quét, bản vẽ quét, raster, tiff, jpeg, png, tỷ lệ, căn chỉnh, nắn góc, khử đốm, ngưỡng, đen trắng, cắt xén, xóa, truy vết, vector hóa, bắt điểm, cung tròn, tô bóng, bản vẽ giấy, bản vẽ cũ, scanattach, scantrace
from: 36227e5b
---

## Từ tờ giấy đến đối tượng bản vẽ

Bản vẽ quét là một hình ảnh. CadCraft giữ hình ảnh bạn đưa vào và không bao giờ thay đổi nó: mỗi bước làm sạch tạo ra một hình ảnh mới, mỗi bước là một lần hoàn tác, và {{cmd:SCANINFO}} liệt kê tệp gốc cùng các bước đã thực hiện sau đó. Không có gì được gửi đi đâu và không có gì được đoán bằng mô hình đã huấn luyện: việc làm sạch và truy vết là xử lý ảnh thông thường, chạy trên máy tính của bạn.

1. **Chèn vào.** {{cmd:SCANATTACH}} đọc tệp PNG, JPEG, TIFF (một trang, hoặc tất cả các trang của tệp nhiều trang) hoặc một trang PDF dạng hình ảnh. Nó hỏi trang, góc dưới bên trái và chiều rộng. Với trang PDF, nó cũng hỏi số điểm ảnh trên mỗi inch để vẽ trang.
2. **Căn tỷ lệ.** {{cmd:SCANSCALE}}: chọn hai điểm trên bản quét, rồi nhập khoảng cách thật giữa chúng. Tờ được căn tỷ lệ quanh điểm thứ nhất.
3. **Căn chỉnh.** {{cmd:SCANALIGN}}: chọn hai điểm trên bản quét và hai vị trí mà chúng thuộc về; tờ sẽ dịch chuyển và xoay để khớp, và cũng được căn tỷ lệ trừ khi bạn trả lời Không.
4. **Vuông góc.** {{cmd:SCANDESKEW}} đo góc mà các đường dài của tờ tạo thành và hiển thị góc đó cùng mức độ chắc chắn. Chấp nhận, hoặc nhập góc của riêng bạn, và tờ sẽ được xoay. Tờ có ít đường dài sẽ nhận cảnh báo: hãy kiểm tra góc trước khi chấp nhận.
5. **Làm sạch.** {{cmd:SCANCLEAN}} chuyển tờ thành đen trắng (Auto làm đều giấy trước; Adaptive bám sát hơn các thay đổi của giấy; Level là một số cho toàn bộ tờ) và loại bỏ các đốm có kích thước tối đa bạn đặt.
6. **Cắt xén và xóa.** {{cmd:SCANCROP}} giữ lại một cửa sổ. {{cmd:SCANERASE}} xóa một hình chữ nhật, một đa giác hoặc lasso (nhấn và kéo): con dấu, ghi chú, vết cà phê.

Hình ảnh đã làm sạch là thứ mà một tệp DWG đã lưu giữ (một IMAGE và IMAGEDEF của nó, với tệp hình ảnh nằm cạnh bản vẽ, như mọi hình ảnh khác).

## Bắt điểm vào các đường của bản quét

Khi {{cmd:RASTERSNAP}} bật (mặc định), các bắt điểm đối tượng cũng tìm được các đường của bản quét đen trắng: đầu các đường, trung điểm, góc và giao điểm, hiển thị bằng dấu bắt điểm thông thường. Phần tờ dưới con trỏ được truy vết khi bạn di chuyển; hãy phóng to đủ để một điểm ảnh bằng vài điểm ảnh trên màn hình. Một đường dài hơn phần đang được truy vết sẽ được theo đến tận hai đầu.

## Truy vết

{{cmd:SCANTRACE}} biến các đường của tờ thành đường thẳng và cung tròn trên một lớp mới (SCAN-TRACE), như một bước hoàn tác, với bản quét vẫn nằm bên dưới. Bạn đặt:

- **Dung sai:** một đường hoặc cung được truy vết có thể lệch khỏi các đường trên bản quét bao xa, tính bằng đơn vị bản vẽ (báo cáo cũng cho biết số điểm ảnh). Dung sai chặt sẽ theo mọi chỗ gợn; dung sai lỏng cho ít đoạn hơn và thẳng hơn.
- **Cửa sổ:** một góc của tờ, hoặc toàn bộ tờ.
- **Cung:** tắt thì chỉ tạo đường thẳng.
- **Phần còn lại:** những gì quá trình truy vết bỏ qua được vẽ thành các hộp trên một lớp bạn có thể tắt, hoặc không vẽ.

Quá trình truy vết tìm tâm của mỗi nét, theo nó, khớp đường thẳng và cung tròn vào đó, nối các đoạn bị cắt chỗ một đường khác giao ngang, làm cho các đường gần nằm ngang và gần thẳng đứng trở thành nằm ngang và thẳng đứng chính xác, và khép các góc. **Chữ và nét tô bóng vẫn ở dạng raster:** các phần có kích thước bằng chữ viết bị gạt sang một bên, và các bó đường song song ngắn được coi là tô bóng và cũng bị gạt sang một bên.

Khi xong, nó cho biết đã tạo bao nhiêu đường và cung, dung sai, và còn lại bao nhiêu mảnh ở dạng raster. **Đó là kết quả mà các điểm ảnh cho ra, với dung sai đó, và không phải là khẳng định rằng kết quả là đúng.** Hãy so sánh với tờ: quá trình truy vết có thể bỏ sót một đường mờ, nối hai đường rất gần nhau, hoặc vẽ một đường ở chỗ chỉ là vết bẩn. Làm sạch bản quét trước (đã căn vuông, đen trắng, không còn đốm) thì kết quả tốt hơn nhiều.

## Những gì không đọc được

Tệp TIFF lưu theo ô, BigTIFF, TIFF nén bằng JPEG hoặc deflate, mã hóa fax Group 3 và màu được lưu trong các mặt phẳng riêng sẽ bị từ chối kèm thông báo; hãy lưu lại chúng dưới dạng strip với nén LZW, PackBits, Group 4 hoặc không nén. Tệp PNG xen kẽ (interlaced) cũng bị từ chối. Tệp lớn hơn 128 MB hoặc 100 triệu điểm ảnh bị từ chối, và một cửa sổ truy vết chứa tối đa 64 triệu điểm ảnh.
