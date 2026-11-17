---
title: Görünümü döndürün ve kendi koordinatlarınızı kullanın (UCS)
summary: Hiçbir şeyi taşımadan görünümü 90° veya herhangi bir açıyla döndürün ve bir kullanıcı koordinat sistemi (UCS) ayarlayarak noktaların, ortogonal modun, kutupsal izlemenin, ızgaranın ve yeni metnin bir yapının kendi eksenlerini izlemesini sağlayın.
keywords: ucs, kullanıcı koordinat sistemi, plan, görünümü döndür, görünüm dönüşü, ucs z, ucs 3point, ucs object, ucs world, adlandırılmış ucs, ucsfollow, turnleft, turnright, turnworld, açılı bina, döndürülmüş ızgara
from: 6f152c65
---

## Neler öğreneceksiniz

Çizimi döndürülmüş olarak nasıl göreceğinizi, böylece açılı çizilmiş bir binanın ekranda dik okunacağını ve noktaları kendi eksenleri boyunca nasıl yazacağınızı. Bunu yaparken çizimdeki hiçbir şey hareket etmez: nesneler koordinatlarını korur, döndürme bir düzenleme değildir ve çizim değiştirilmiş olarak işaretlenmez.

## Görünümü çeyrek tur döndürün

1. {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Görünümü 90° sola döndür}} veya {{ui:Görünümü 90° sağa döndür}} seçeneğine tıklayın.

Çizim, çizim alanının ortası etrafında ekranda döner. Döndürmeye devam etmek için yeniden yapın.

2. Yeniden düzeltmek için {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Dünyaya dön}} seçeneğine tıklayın.

Bunların arkasındaki komutlar {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} ve {{cmd:TURNWORLD}}'dür. Birine bir tuş vermek için {{cmd:ALIASEDIT}} ile kısayollarınıza `TL=TURNLEFT` gibi bir satır ekleyin.

## Açılı bir binayla hizalayın

1. `UCS` yazıp {{key:Enter}} tuşuna basın, sonra `OB` yazıp {{key:Enter}} tuşuna basın.
2. Başlangıç noktası olması gereken uca yakın bir duvar çizgisine tıklayın.

UCS artık o uçta, X ekseni duvar boyunca olacak şekilde başlar ve görünüm, duvarın ekranda düz olması için döner. Sol alt köşedeki eksen simgesi, UCS eksenlerinin nereye baktığını gösterir.

3. Her zamanki gibi çizin. UCS ayarlıyken:
   - `x,y` ve `@dx,dy` UCS eksenleri boyunca ölçülür; `d<a` açıyı UCS X ekseninden ölçer.
   - {{ui:Ortogonal}}, kutupsal izleme ve ızgara UCS eksenlerini izler; artı imleci de öyle.
   - Yeni metin ve yeni paragraflar UCS X ekseni boyunca uzanır; {{cmd:DIMLINEAR}}'ın yatay ve dikey ölçüleri de onu izler.
   - Durum çubuğundaki ve {{cmd:ID}} komutundan gelen koordinatlar UCS koordinatlarıdır.
4. Bir UCS ayarlıyken dünya noktası yazmak için önüne `*` koyun: `*0,0` veya `@*100,0`.
5. Dünyaya dönmek için `UCS` yazın, {{key:Enter}} tuşuna basın, sonra yeniden {{key:Enter}} tuşuna basın.

## UCS ayarlamanın diğer yolları

{{cmd:UCS}} isteminde:

| Yazdığınız | Ne yapar |
|---|---|
| bir nokta | Yeni bir başlangıç noktası; sonra yeni X ekseni üzerinde bir noktaya tıklayın veya açıyı korumak için {{key:Enter}} tuşuna basın |
| `Z` | UCS'yi başlangıç noktası etrafında yazdığınız (derece, saat yönünün tersine) ya da seçtiğiniz bir açı kadar döndürür |
| `3` (3point) | Bir başlangıç noktası, pozitif X ekseni boyunca bir nokta ve pozitif Y tarafında bir nokta |
| `OB` (OBject) | Bir çizgi, yay, daire, çoklu çizgi parçası, metin, blok başvurusu, nokta veya yapı çizgisinden |
| `P` (Previous) | Bundan önceki UCS (çizim açıkken son on tanesi tutulur) |
| `W` (World) | Dünyaya dönün |
| `NA` (NAmed) | `S` geçerli UCS'yi bir adla kaydeder, `R` birini geri yükler, `D` birini siler, `?` bunları listeler |

Her değişiklik, yeni UCS X ekseni düz olacak şekilde görünümü döndürür. {{cmd:PLAN}} UCS'yi değiştirmeden görünümü döndürür: geçerli UCS için {{key:Enter}}, kayıtlı bir UCS için `U`, dünya için `W`.

## Bilmeniz iyi olanlar

- Bölünmüş ekranın her bölmesi kendi dönüşünü korur. UCS çizime aittir.
- Sayfalar kâğıt koordinatlarıyla çalışır; bir UCS'yi {{ui:Model}} sekmesinde veya bir görünüm penceresinin içinde ayarlayın.
- Döndürülmüş bir görünümde sürüklenen seçim pencereleri, ekranda içinde kalanı seçer.
- LISP rutinleri `getpoint` ile UCS'deki noktaları alır, `UCSORG`, `UCSXDIR`, `UCSYDIR` ve `VIEWTWIST` değerlerini okuyabilir ve `trans` dünya, UCS ve ekran arasında dönüştürür.

:::note
Kaydedilmiş bir dosya, UCS'yi ve görünümün dönüşünü sonraki bir sürümde korur; o zamana kadar bunlar çizim açık kaldığı sürece geçerli kalır.
:::
