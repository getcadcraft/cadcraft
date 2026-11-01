---
title: Kopya kâğıdı: günlük kullanılan 40 komut
summary: En çok kullanacağınız 40 komutun, kısa adlarının ve zaman kazandıran tuşların yer aldığı tek sayfa. Yazdırmak için PDF olarak indirin.
keywords: kopya kâğıdı, hızlı başvuru, komutlar, takma adlar, kısa adlar, yeni başlayan, sil, kırp, yazdır, pdf, kısayollar
from: 2d40edc4
---

Kısa adı (takma adı) yazıp Enter'a basın veya aracı tıklayın. Esc iptal eder. Boş bir satırda Enter son komutu yineler.

**Yazdırın:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (tek A4 sayfası; Letter kâğıdına "sayfaya sığdır" ile yazdırın).

## Çizim

| Yazın | Komut | Ne yapar |
|---|---|---|
| `L` | {{cmd:LINE}} | Doğru çizgiler çizer |
| `PL` | {{cmd:PLINE}} | Birbirine bağlı çizgi ve yay zinciri çizer |
| `C` | {{cmd:CIRCLE}} | Daire çizer (merkez ve yarıçap) |
| `A` | {{cmd:ARC}} | Yay çizer |
| `REC` | {{cmd:RECTANG}} | İki köşeden dikdörtgen çizer |
| `POL` | {{cmd:POLYGON}} | Düzgün çokgen çizer |
| `EL` | {{cmd:ELLIPSE}} | Elips çizer |
| `DT` | {{cmd:TEXT}} | Tek satırlık metin yazar |
| `T` | {{cmd:MTEXT}} | Satır kaydıran metin yazar (paragraf) |
| `H` | {{cmd:HATCH}} | Bir alanı desenle doldurur |

## Değiştirme

| Yazın | Komut | Ne yapar |
|---|---|---|
| `M` | {{cmd:MOVE}} | Nesneleri taşır |
| `CO` | {{cmd:COPY}} | Nesneleri kopyalar |
| `RO` | {{cmd:ROTATE}} | Nesneleri bir nokta etrafında döndürür |
| `SC` | {{cmd:SCALE}} | Nesneleri büyütür veya küçültür |
| `MI` | {{cmd:MIRROR}} | Nesneleri bir çizgi boyunca çevirir |
| `O` | {{cmd:OFFSET}} | Belli bir uzaklıkta paralel kopya çizer |
| `TR` | {{cmd:TRIM}} | Nesneleri diğerlerinin kestiği yere kadar kırpar |
| `EX` | {{cmd:EXTEND}} | Nesneleri diğerlerine kadar uzatır |
| `F` | {{cmd:FILLET}} | Bir köşeyi yayla yuvarlar |
| `CHA` | {{cmd:CHAMFER}} | Bir köşeyi düz bir kenarla keser |
| `E` | {{cmd:ERASE}} | Nesneleri siler |
| `X` | {{cmd:EXPLODE}} | Bir bloğu veya çoklu çizgiyi parçalarına ayırır |
| `S` | {{cmd:STRETCH}} | Kesişen pencerenin içindeki uçları taşır |
| `AR` | {{cmd:ARRAY}} | Izgara veya daire biçiminde kopyalar |
| `J` | {{cmd:JOIN}} | Çizgileri ve yayları tek nesnede birleştirir |
| `BR` | {{cmd:BREAK}} | Bir nesneyi ikiye böler veya bir parçasını çıkarır |

## Ölçülendirme

| Yazın | Komut | Ne yapar |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Yatay veya düşey ölçülendirir |
| `DAL` | {{cmd:DIMALIGNED}} | Eğik bir çizgi boyunca ölçülendirir |
| `DRA` | {{cmd:DIMRADIUS}} | Yarıçapı ölçülendirir |
| `DAN` | {{cmd:DIMANGULAR}} | Bir açıyı ölçülendirir |

## Bloklar ve katmanlar

| Yazın | Komut | Ne yapar |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Nesnelerden blok yapar |
| `I` | {{cmd:INSERT}} | Bir blok yerleştirir |
| `LA` | {{cmd:LAYER}} | Katmanları açar |

## Görünüm ve sorgulama

| Yazın | Komut | Ne yapar |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Yakınlaştırır, uzaklaştırır veya her şeye sığdırır (E) |
| `DI` | {{cmd:DIST}} | Bir mesafeyi ve açıyı ölçer |
| `LI` | {{cmd:LIST}} | Bir nesnenin ayrıntılarını gösterir |
| `MA` | {{cmd:MATCHPROP}} | Bir nesnenin görünümünü diğerlerine kopyalar |

## Dosya

| Yazın | Komut | Ne yapar |
|---|---|---|
| `U` | {{cmd:UNDO}} | Son komutu geri alır |
| `SAVE` | {{cmd:SAVE}} | Çizimi kaydeder |
| `PLOT` | {{cmd:PLOT}} | PDF'e çıktı alır |

## Tuşlar

Ctrl (Mac'te Cmd): Z geri al · Y yinele · S kaydet · P çıktı al.  F3 nesne yakalama · F8 ortogonal · F10 kutupsal.  Space veya Enter son komutu yineler · tekerlek yakınlaştırır · tekerleği sürüklemek kaydırır

Çizime yeni misiniz? Yönlendirmeli ilk çizim için `TOUR` yazın, [Başlarken](topic:getting-started) konusunu okuyun veya her komutu [Komutlar](topic:commands) içinde görün. Başka çizim yazılımlarından geliyorsanız: [Diğer çizim yazılımlarından geliyorsanız](topic:coming-from) ve [komut haritası](topic:command-map).
