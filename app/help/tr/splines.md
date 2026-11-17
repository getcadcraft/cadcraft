---
title: Spline'lar ve çoklu çizgiler: SPLINE, SPLINEDIT, PEDIT
summary: Noktalardan veya bir kontrol çokgeninden düzgün bir eğri çizin, uyum ve kontrol noktalarını düzenleyin; çoklu çizgileri (birleştirme, kapatma, genişlik, uydurma, spline, düzleştirme) düzenleyin veya bir spline'ı çoklu çizgiye çevirin.
keywords: spline, splinedit, spl, spe, pedit, pe, uyum noktaları, kontrol noktaları, ağırlıklar, nurbs, çoklu çizgi düzenleme, birleştir, uyum eğrisi, düzleştir, çoklu çizgiye dönüştür, hassasiyet, teğet, eğri, uyum toleransı
from: d31f72d8
---

## Neler yapacaksınız

Beş noktadan geçen bir eğri, aynı eğrinin üç farklı biçimde düzenlenmesi ve üç çizgiden oluşturulmuş bir çoklu çizgi.

## Noktalardan geçen bir spline çizin

1. `SPL` yazın ve {{key:Enter}} tuşuna basın.
2. Eğrinin geçmesi gereken noktaları tıklayın veya yazın: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Sonuncusundan sonra {{key:Enter}} tuşuna basın.
3. {{ui:Başlangıç teğeti}}: eğrinin yöneleceği bir noktayı tıklayın veya karar vermesi için {{key:Enter}} tuşuna basın. Bitiş teğeti için de aynısını yapın.

Eğri her noktadan geçer. Kapatmak için {{key:Enter}} yerine `C` yazın (eğri ilk noktaya geri döner). Çizim sırasında {{key:U}} (`Geri al`) son noktayı geri alır.

### Bir kontrol çokgeninden çizin

İlk istemde `M` yazın, ardından Kontrol köşeleri (`C`) ve 1 ile 5 arasında bir derece yazın (olağan değer 3'tür). Artık seçtiğiniz noktalar, eğriyi kendilerine doğru çeken bir çokgenin köşeleri olur; eğri ilk noktada başlar ve son noktada biter. Kapalı olan, birleşim yerinde köşe olmadan çevresinde sarılır.

### Bir çoklu çizgiyi spline'a çevirin

İlk istemde Nesne (`O`) yazın ve çoklu çizgileri veya çizgileri seçin. Bunlar köşelerinden geçen spline'lara dönüşür; özgün nesneler silinir.

## Spline'ı düzenleyin

Seçin ve `SPE` yazın (veya `SPE` yazıp üzerine tıklayın). Tutamaçlar uyum noktalarını gösterir (ya da hiç uyum noktası olmayan bir spline'da kontrol noktalarını): eğriyi yeniden biçimlendirmek için birini sürükleyin. İstemde:

- **Uyum verisi** (noktalardan geçen bir spline): `A` bir uyum noktası ekler (nereye tıklayın), `D` birini siler (yakınına tıklayın), `M` birini taşır (yakınına tıklayıp yeni yerine tıklayın), `T` uç teğetlerini ayarlar, `P` uyum noktalarını temizler; bundan sonra spline kontrol noktalarıyla düzenlenir.
- **Köşe düzenle**: `A` eğriyi değiştirmeden bir kontrol noktası ekler, `M` birini taşır, `W` birine bir **ağırlık** verir (1'den büyük olan eğriyi ona yaklaştırır, 1'den küçük olan onu bırakır).
- **Aç** veya **Kapat** ve **Ters çevir** (eğri diğer yönde ilerler).
- **Çoklu çizgiye dönüştür** (`P`): spline çoklu çizgiye dönüşür; hassasiyet her açıklığa kaç parça verileceğidir (olağan değer 10'dur).
- **Geri al** son değişikliği geri alır; **Çık** (`X`) bitirir.

{{ui:Özellikler}} bir spline'ın derecesini, kaç uyum ve kontrol noktası olduğunu, uzunluğunu gösterir ve onu açmanıza veya kapatmanıza izin verir.

## Çoklu çizgiyi düzenleyin

Bir çoklu çizgi seçin ve `PE` yazın. Seçtiğiniz bir çizgi, yay veya spline önce çevrilebilecek bir çoklu çizgi olarak önerilir (spline hassasiyet sorar).

- **Kapat** / **Aç** uçları birleştirir veya ayırır.
- **Birleştir** uçları çoklu çizginin ucuna değen çizgileri, yayları ve çoklu çizgileri ekler. `Tolerans mesafesi`, uçların ne kadar uzakta olup hâlâ birleşebileceğini belirtir (0 ise birbirine değmeleri gerekir).
- **Genişlik** tüm çoklu çizgiye tek bir genişlik verir (0 bunu kaldırır).
- **Uydur** çoklu çizgiyi köşelerinden geçen düzgün bir eğriyle değiştirir; **Spline** ise köşelerini izleyen kübik bir B-spline ile değiştirir (ilk ve son köşede başlar ve biter, diğerlerinin yakınında kalır). İkisi de kısa parçalardan oluşan bir çoklu çizgi olur ve özgün köşeler korunur; böylece **Düzleştir** onları geri getirir.
- **Çizgi tipi üretimi** kesikli bir çizgi tipinin tüm çoklu çizgi boyunca sürüp sürmediğini ya da her köşede yeniden başlayıp başlamadığını belirtir.
- **Ters çevir** köşelerinin sırasını değiştirir. **Çoklu** (ilk istemde `M`) aynı seçeneklerle birden çok çoklu çizgiyi düzenler.

{{ui:Özellikler}} içinden veya tutamaçlarla bir çoklu çizginin köşelerini düzenlemek hiçbir şeyi değiştirmez: PEDIT'in bir köşe düzenleyicisi yoktur.

## Dosyalarda

DWG ve DXF 2000, bir spline'ı spline olarak tutar: derece, kontrol noktaları, düğümler, ağırlıklar, uyum noktaları ve teğetler. Açtığınız ve değiştirmediğiniz bir spline, geldiği gibi aynen geri yazılır. DXF R12'de spline yoktur: eğri boyunca bir çoklu çizgi olarak kaydedilir ve geçmiş kaç tane olduğunu belirtir.

Ofset, kırp, uzat, köşe yuvarlat, kır ve birleştir spline'larda çalışmaz. Bu komutların kabul ettiği bir çoklu çizgi elde etmek için bir spline'ı {{cmd:EXPLODE}} ile patlatın veya {{cmd:PEDIT}} ile düzenleyin.

## Yaygın hatalar

- **Eğri, yakın noktalar arasında taşar.** Noktalardan geçen bir eğri, noktaların eğildiği yerde eğilir. Daha az nokta kullanın veya bir kontrol çokgeni kullanın.
- **"Bu bir spline değil."** SPLINEDIT yalnızca spline'ları kabul eder; {{cmd:PEDIT}} çoklu çizgileri düzenler.
- **Kapalı bir uyum spline'ı başka bir programda biraz farklı bir biçime sahip olabilir.** CadCraft onu ilk noktada tek bir düzgün birleşimle kapatır; başka bir program periyodik bir eğriyle kapatabilir. Kapalı bir kontrol noktası spline'ı her ikisinde de aynıdır.
