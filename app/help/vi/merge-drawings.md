---
title: Gộp chỉnh sửa của hai người trong một bản vẽ
summary: Cho git, Fossil hoặc Mercurial gộp hai bản sao DWG hoặc DXF theo từng đối tượng, dùng khóa mà CadCraft giữ trên mỗi đối tượng.
keywords: gộp, merge, git, fossil, mercurial, quản lý phiên bản, version control, diff, xung đột, conflict, ba chiều, three-way, cadcraft merge, khóa, key, gitattributes, DWG, DXF
from: 71482bf9
---

Hai người chỉnh sửa cùng một bản vẽ. Nếu họ thay đổi các đối tượng khác nhau, việc gộp có thể tự động: không cần làm lại bằng tay.

## Điều làm nó hoạt động

CadCraft gán cho mọi đối tượng bạn vẽ một **khóa** ngắn không bao giờ thay đổi và không bao giờ được gán cho hai đối tượng. Khóa được lưu cùng đối tượng trong DWG hoặc DXF (như dữ liệu phụ mà các chương trình khác giữ lại). Việc gộp tìm đối tượng theo khóa này, không theo vị trí của nó trong tệp, vì mọi chương trình đều đánh số lại vị trí khi lưu. Tắt điều này trong Cài đặt › CadCraft › Tệp thân thiện với gộp nếu bạn không bao giờ gộp; tệp sẽ nhỏ hơn khoảng 10 phần trăm.

Một bản vẽ được lưu trước khi có khóa vẫn gộp được: các đối tượng của nó được gán khóa theo vị trí trong tệp, giống nhau cho mọi người mở nó.

## Thiết lập

Git cần hai dòng một lần cho mỗi kho lưu trữ:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# một lần, trên mỗi máy tính
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Không có git, chạy bằng tay: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil và Mercurial nhận cùng ba tệp đó trong cài đặt công cụ gộp riêng của chúng.

## Quy tắc

- Đối tượng chỉ thay đổi ở một phía được giữ lại. Cùng một thay đổi ở cả hai phía chỉ được lấy một lần.
- Cùng một thuộc tính bị thay đổi theo hai cách là một **xung đột**: phía của bạn được giữ và báo cáo liệt kê cả hai giá trị. Mở kết quả, xem đối tượng đó và sửa bằng tay.
- Đối tượng được thêm ở phía nào cũng được giữ. Đối tượng bị xóa ở một phía và không thay đổi ở phía kia thì bị xóa. Bị xóa ở một phía và bị thay đổi ở phía kia: bị xóa, và được báo cáo.
- Lớp, khối, kiểu văn bản và kích thước, tờ và khung nhìn đặt tên được gộp theo cùng cách. Ràng buộc đi theo các đối tượng mà chúng nêu tên.
- Kết quả được ghi theo cùng định dạng tệp và phiên bản với tệp của bạn.

Không được gộp: thứ tự vẽ các đối tượng là của bạn, rồi đến các đối tượng phía kia đã thêm. Thay đổi cùng một định nghĩa khối ở cả hai phía là một xung đột, không bao giờ được trộn lẫn. Không có gì được tải lên; mọi thứ đều chạy trên máy tính của bạn.
