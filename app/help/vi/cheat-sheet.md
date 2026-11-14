---
title: Bảng tra nhanh: 40 lệnh dùng hằng ngày
summary: Một trang với 40 lệnh bạn sẽ dùng nhiều nhất, tên viết tắt của chúng và các phím giúp tiết kiệm thời gian. Tải về dạng PDF để in.
keywords: bảng tra nhanh, tra cứu nhanh, lệnh, bí danh, tên viết tắt, người mới, xóa, cắt, in, pdf, phím tắt
from: 2d40edc4
---

Gõ tên viết tắt (bí danh) rồi nhấn Enter, hoặc nhấp vào công cụ. Esc để hủy. Enter trên dòng trống sẽ lặp lại lệnh vừa rồi.

**In ra:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (một trang A4; với giấy Letter, hãy in với tùy chọn "fit to page").

## Vẽ

| Gõ | Lệnh | Tác dụng |
|---|---|---|
| `L` | {{cmd:LINE}} | Vẽ các đường thẳng |
| `PL` | {{cmd:PLINE}} | Vẽ một chuỗi đường thẳng và cung tròn liên tiếp |
| `C` | {{cmd:CIRCLE}} | Vẽ vòng tròn (tâm và bán kính) |
| `A` | {{cmd:ARC}} | Vẽ cung tròn |
| `REC` | {{cmd:RECTANG}} | Vẽ hình chữ nhật từ hai góc |
| `POL` | {{cmd:POLYGON}} | Vẽ đa giác đều |
| `EL` | {{cmd:ELLIPSE}} | Vẽ elip |
| `DT` | {{cmd:TEXT}} | Viết một dòng văn bản |
| `T` | {{cmd:MTEXT}} | Viết văn bản tự xuống dòng (đoạn văn) |
| `H` | {{cmd:HATCH}} | Tô một vùng bằng mẫu |

## Sửa

| Gõ | Lệnh | Tác dụng |
|---|---|---|
| `M` | {{cmd:MOVE}} | Di chuyển đối tượng |
| `CO` | {{cmd:COPY}} | Sao chép đối tượng |
| `RO` | {{cmd:ROTATE}} | Xoay đối tượng quanh một điểm |
| `SC` | {{cmd:SCALE}} | Phóng to hoặc thu nhỏ đối tượng |
| `MI` | {{cmd:MIRROR}} | Lật đối tượng qua một đường |
| `O` | {{cmd:OFFSET}} | Vẽ bản sao song song ở một khoảng cách |
| `TR` | {{cmd:TRIM}} | Cắt đối tượng đến chỗ các đối tượng khác cắt qua |
| `EX` | {{cmd:EXTEND}} | Kéo dài đối tượng đến các đối tượng khác |
| `F` | {{cmd:FILLET}} | Bo tròn một góc bằng cung tròn |
| `CHA` | {{cmd:CHAMFER}} | Cắt một góc bằng cạnh thẳng |
| `E` | {{cmd:ERASE}} | Xóa đối tượng |
| `X` | {{cmd:EXPLODE}} | Phân rã khối hoặc đa tuyến thành các phần |
| `S` | {{cmd:STRETCH}} | Di chuyển các đầu mút nằm trong cửa sổ chọn cắt |
| `AR` | {{cmd:ARRAY}} | Sao chép theo lưới hoặc theo vòng tròn |
| `J` | {{cmd:JOIN}} | Nối các đường thẳng và cung tròn thành một đối tượng |
| `BR` | {{cmd:BREAK}} | Cắt đôi một đối tượng, hoặc lấy ra một đoạn |

## Kích thước

| Gõ | Lệnh | Tác dụng |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Ghi kích thước ngang hoặc đứng |
| `DAL` | {{cmd:DIMALIGNED}} | Ghi kích thước theo đường xiên |
| `DRA` | {{cmd:DIMRADIUS}} | Ghi kích thước bán kính |
| `DAN` | {{cmd:DIMANGULAR}} | Ghi kích thước góc |

## Khối và lớp

| Gõ | Lệnh | Tác dụng |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Tạo khối từ các đối tượng |
| `I` | {{cmd:INSERT}} | Đặt một khối |
| `LA` | {{cmd:LAYER}} | Mở các lớp |

## Xem và tra cứu

| Gõ | Lệnh | Tác dụng |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Phóng to, thu nhỏ hoặc đến toàn bộ (E) |
| `DI` | {{cmd:DIST}} | Đo khoảng cách và góc |
| `LI` | {{cmd:LIST}} | Hiện chi tiết của một đối tượng |
| `MA` | {{cmd:MATCHPROP}} | Sao chép diện mạo của một đối tượng sang các đối tượng khác |

## Tệp

| Gõ | Lệnh | Tác dụng |
|---|---|---|
| `U` | {{cmd:UNDO}} | Hoàn tác lệnh cuối |
| `SAVE` | {{cmd:SAVE}} | Lưu bản vẽ |
| `PLOT` | {{cmd:PLOT}} | In ra PDF |

## Phím

Ctrl (Cmd trên Mac): Z hoàn tác · Y làm lại · S lưu · P in.  F3 bắt điểm đối tượng · F8 ortho · F10 cực.  Space hoặc Enter lặp lại lệnh cuối · con lăn thu phóng · kéo con lăn để di chuyển khung nhìn

Mới làm quen với vẽ kỹ thuật? Gõ `TOUR` để vẽ bản vẽ đầu tiên có hướng dẫn, đọc [Bắt đầu](topic:getting-started), hoặc xem mọi lệnh trong [Các lệnh](topic:commands). Nếu bạn đến từ phần mềm vẽ khác: [Chuyển từ phần mềm vẽ khác](topic:coming-from) và [bản đồ lệnh](topic:command-map).
