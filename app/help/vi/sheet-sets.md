---
title: Bộ tờ
summary: Gom các tờ từ nhiều bản vẽ vào một danh sách được đánh số, điền khung tên từ bộ, xuất bản thành một tệp PDF và lưu trữ bộ thành tệp zip.
keywords: bộ tờ, trình quản lý bộ tờ, ssm, sheetset, ccsheets, dst, danh sách tờ, mục lục tờ, khung tên, trường, xuất bản, đánh số lại, lưu trữ, etransmit, phiếu gửi, tập con, tờ bìa, danh sách bản vẽ
from: 2c855720
---

## Bạn sẽ học được gì

Cách gom các tờ (bố cục) từ nhiều tệp bản vẽ vào một **bộ tờ**, đánh số và đặt tiêu đề cho chúng, để khung tên của chúng được điền tự động, xuất bản toàn bộ bộ thành một tệp PDF, và đóng gói mọi thứ vào một tệp zip để gửi đi.

Một bộ tờ nằm trong một tệp nhỏ riêng, `<name>.ccsheets`, trong thư mục chứa các bản vẽ. Tệp bộ liệt kê các tờ với đường dẫn tính từ thư mục đó, nên bạn có thể di chuyển hoặc sao chép cả thư mục.

:::note
Để mở một thư mục đọc và ghi, cần Chrome hoặc Edge (chúng có thể cho phép một trang làm việc trong thư mục bạn chọn), hoặc ứng dụng máy tính. Các trình duyệt khác mở bộ ở chế độ chỉ đọc: bạn có thể xem và xuất bản, và tệp bộ được tải xuống thay vì được lưu.
:::

## Tạo một bộ

1. Tìm mục {{ui:Bộ tờ}} trong bảng bên trái, rồi mở menu {{ui:Bộ}} của nó. Gõ {{cmd:SHEETSET}} (hoặc `SSM`) cũng đưa bạn đến đó.
2. Chọn {{ui:Bộ mới…}}. Đặt tên cho bộ, và nếu muốn, tên và số của dự án.
3. Chọn thư mục chứa các bản vẽ. Tệp bộ sẽ được lưu ở đó.

Để mở một bộ sau này, chọn {{ui:Mở bộ…}} và chọn đúng thư mục đó. Nếu thư mục chứa nhiều hơn một bộ, CadCraft sẽ hỏi bạn muốn bộ nào.

## Thêm tờ

1. Chọn {{ui:Thêm tờ từ một bản vẽ…}} và chọn một trong các bản vẽ trong thư mục.
2. CadCraft đọc bản vẽ đó ở chế độ nền (nó không mở trên màn hình) và liệt kê các tờ của nó. Đánh dấu những tờ bạn muốn và nhấp {{ui:OK}}.
3. Chọn một tờ và nhấn {{key:F2}} (hoặc {{ui:Đổi tên và đánh số lại…}}) để đặt số và tiêu đề, chẳng hạn `A-101` và `Mặt bằng tầng`.

{{ui:Tờ mới từ mẫu…}} tạo một bản vẽ mới từ tờ của một bản vẽ khác (khung tên và các khung nhìn của nó), được đặt tên theo tờ mới, rồi thêm nó vào bộ. Bộ ghi nhớ bản vẽ bạn đã dùng làm mẫu.

## Sắp xếp bộ

- **Tập con** nhóm các tờ, chẳng hạn Kiến trúc › Mặt bằng: chọn nơi nó sẽ đặt và chọn {{ui:Tập con mới…}}.
- **Thứ tự**: kéo một tờ đến vị trí khác trong danh sách, hoặc lên một tập con để chuyển nó vào đó. Bằng bàn phím, chọn tờ và nhấn {{key:Alt+Up}} hoặc {{key:Alt+Down}}.
- **Mở một tờ**: nhấp đúp vào nó (hoặc nhấn {{key:Enter}}). Bản vẽ của nó mở trong thẻ riêng, đúng tại tờ đó.
- **Gỡ bỏ**: chọn tờ và nhấn {{key:Delete}}. Bản vẽ không bị thay đổi.
- **Hoàn tác**: {{ui:Hoàn tác thay đổi bộ}} và {{ui:Làm lại thay đổi bộ}} đi qua những gì bạn đã thay đổi trong bộ.
- **Đánh số lại**: {{ui:Đánh số lại tờ…}} đánh số mọi tờ, hoặc tờ của một tập con, theo thứ tự trong danh sách: một tiền tố, một số bắt đầu và một bước nhảy (`A-` và `101` cho A-101, A-102 …).

Mọi thay đổi được lưu vào tệp bộ ngay lập tức.

## Đánh số tờ theo trường của chúng

Thay vì đánh số tờ bằng tay, hãy để một quy tắc tự tạo mỗi số từ các trường của tờ, để một tờ chuyển sang tầng hoặc bộ môn khác sẽ tự nhận số mới.

1. Gán các trường cho mỗi tờ: chọn tờ, nhấp {{ui:Đổi tên…}} và trong {{ui:Các trường của tờ này}}, viết mỗi trường một dòng, chẳng hạn `DISCIPLINE = A` và `LEVEL = 1`. Một trường mà cả bộ dùng chung (chẳng hạn `DISCIPLINE = A`) có thể đặt trong {{ui:Thuộc tính…}} của bộ thay thế.
2. Mở menu của bảng và nhấp {{ui:Quy tắc đánh số…}}.
3. Viết quy tắc, chẳng hạn `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` đếm tăng giữa các tờ có các trường khác giống nhau, nên tầng 1 nhận A-101, A-102 và tầng 2 bắt đầu lại từ A-201. `{SEQ:2}` viết nó với hai chữ số; `{SUBSET}` là tên của tập con chứa tờ.
4. Chọn điều xảy ra khi một trường thay đổi: {{ui:Đánh số lại các tờ}} giữ các số theo quy tắc sau mỗi thay đổi; lựa chọn khác đánh số một lần, ngay bây giờ.

Quy tắc được lưu trong tệp bộ. Trong khi nó tự đánh số lại, hãy thay đổi trường của tờ thay vì số của nó.

## Điền khung tên từ bộ

Khung tên nhận văn bản từ bộ khi các thuộc tính của nó được gắn thẻ bằng tên của một trường:

| Thẻ | Hiển thị |
|---|---|
| `SHEETNUMBER` (hoặc `SHEET_NO`, `DWG_NO`) | Số của tờ |
| `SHEETTITLE` (hoặc `TITLE`, `SHEET_TITLE`) | Tiêu đề của tờ |
| `SHEETDESC` | Mô tả của tờ |
| `PROJECTNAME` (hoặc `PROJECT`) | Tên dự án |
| `PROJECTNUMBER` (hoặc `PROJECT_NO`, `JOB_NO`) | Số dự án |
| `SHEETSETNAME` | Tên của bộ |
| `SHEETINDEX`, `SHEETCOUNT` | "3 trên 12", và 12 |
| Trường riêng của bạn, như `CLIENT` | Giá trị bạn đã nhập trong {{ui:Đặt trường…}} |

{{ui:Đặt trường…}} chứa tên dự án, số dự án và các trường riêng của bạn, mỗi trường một dòng theo dạng `NAME = value`.

{{ui:Cập nhật bản vẽ}} ghi số, tiêu đề và các trường vào khung tên của mọi bản vẽ trong bộ, và đổi tên thẻ bố cục của mỗi tờ theo cách bộ quy định (mặc định là số và tiêu đề, chẳng hạn `A-101 Mặt bằng tầng`; {{ui:Đặt trường…}} › {{ui:Tên thẻ bố cục}} thay đổi điều này). Mỗi bản vẽ được lưu tại chỗ, theo định dạng và phiên bản của chính nó. Sau khi bạn đánh số lại hoặc đổi tên tờ, hãy chạy lại; các thẻ và khung tên sẽ theo kịp.

## Danh sách tờ trên tờ bìa

Chọn tờ bìa trong danh sách và chọn {{ui:Đặt danh sách tờ lên tờ này}}. Một bảng gồm mọi tờ (số và tiêu đề, dưới tập con của nó) sẽ được đặt ở góc trên bên trái của tờ. {{ui:Cập nhật bản vẽ}} và {{ui:Xuất bản ra PDF}} giữ nó luôn mới. Đó là một khối duy nhất, `CC_SHEETLIST`: di chuyển nó như mọi tham chiếu khối khác.

## Xuất bản bộ

{{ui:Xuất bản ra PDF}} tạo một tệp PDF với một trang cho mỗi tờ, theo thứ tự của bộ, ở kích thước giấy riêng của từng tờ, với một dấu trang cho mỗi tờ ("A-101 — Mặt bằng tầng"). Khi một tập con được chọn, CadCraft hỏi bạn có muốn chỉ xuất bản tập con đó không. Khung tên trong PDF được điền từ bộ ngay cả trước khi bạn cập nhật bản vẽ; bản vẽ không bị thay đổi khi xuất bản. PDF được tải xuống.

{{ui:Xuất bản sang DWG…}} ghi mỗi tờ thành một tệp DWG riêng (DWG 2018): mô hình và đúng tờ đó, với khung tên được điền từ bộ, được đặt tên theo số và tiêu đề của nó (`A-101 Level 1 floor plan.dwg`). Chọn {{ui:DWG}}, hoặc {{ui:DWG + PDF}} để thêm tệp PDF của bộ bên cạnh chúng. Một tệp `publish.json` liệt kê mọi tệp với kích thước và SHA-256 của nó. Khi thư mục của bộ có thể ghi (CadCraft Studio, hoặc một thư mục bạn chọn trong trình duyệt), các tệp được đưa vào thư mục `<set name> - published`; nếu không, chúng được tải xuống dưới dạng một tệp zip. Các [ghi đè lớp của khung nhìn](topic:viewport-overrides) đi kèm trong mỗi DWG.

## Lưu trữ bộ

{{ui:Lưu trữ thành tệp zip}} đóng gói tệp bộ, mọi bản vẽ mà nó dùng và những gì các bản vẽ đó liên kết tới (bản vẽ liên kết, và các bản vẽ mà chúng liên kết tới, cùng hình ảnh), giữ nguyên cấu trúc thư mục, cùng với một tệp `Transmittal.txt` liệt kê mọi tệp. Liên kết nằm ngoài thư mục của bộ sẽ được liệt kê ở đó là thiếu. Liên kết được tìm theo đường dẫn từ bản vẽ, rồi theo tên tệp ở bất kỳ đâu trong thư mục.

## Tệp bộ

Tệp `.ccsheets` là JSON mà bạn có thể đọc trong bất kỳ trình soạn thảo văn bản nào:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Đường dẫn là tương đối với thư mục của bộ, với `/` giữa các thư mục. CadCraft kiểm tra tệp khi mở: một đường dẫn tuyệt đối, một tờ không có tệp hoặc bố cục, hoặc văn bản không phải văn bản thuần sẽ bị bỏ qua, và lịch sử sẽ nói như vậy.

## Khắc phục sự cố

| Bạn thấy gì | Vì sao | Phải làm gì |
|---|---|---|
| "Thư mục này chỉ đọc ở đây" | Trình duyệt không thể ghi vào thư mục | Dùng Chrome hoặc Edge, hoặc ứng dụng máy tính; trong lúc đó {{ui:Tải tệp bộ}} giữ các thay đổi của bạn |
| Một tờ bị bỏ khỏi PDF: "không có bố cục tên …" | Bố cục của tờ đã bị đổi tên hoặc xóa trong bản vẽ | Mở bản vẽ và kiểm tra các thẻ của nó; gỡ tờ và thêm lại |
| Khung tên vẫn trống | Các thuộc tính của nó có thẻ khác | Đổi tên các thẻ thuộc tính thành tên trường ở trên (BEDIT) |
| "đã có bố cục tên … nên thẻ đó không được đổi tên" | Hai tờ của một bản vẽ sẽ nhận cùng một tên thẻ | Đặt cho một trong hai một số hoặc tiêu đề khác |
