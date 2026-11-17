---
title: PDF altlıkları ve PDF içe aktarma
summary: Çizgilerinizin altına bir PDF sayfası koyun ve izleyip çıktı alın ya da sayfanın çizgilerini ve metnini çizim nesnelerine dönüştürün.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, altlık, izle, pdf içe aktar, tarama, kat planı, soluklaştır, kırpma, katmanlar, yakala, pdf aç
from: aa301d0f
---

## PDF sayfası getirmenin iki yolu

- **Ekle** ({{cmd:PDFATTACH}}) PDF'i çiziminizin altında bir resim olarak tutar. Üzerini izlersiniz, çizgilerine yakalarsınız, soluklaştırırsınız, kırparsınız ve sayfayla birlikte yazdırılır. Çizim yalnızca dosyanın adını tutar.
- **İçe aktar** ({{cmd:PDFIMPORT}}) sayfanın çizgilerini, eğrilerini, dolgularını ve metnini, PDF'in adını taşıyan katmanlarda sıradan çizim nesnelerine dönüştürür. Bunları siz düzenlersiniz; PDF'e sonrasında ihtiyaç duyulmaz.

{{ui:Aç}} ile bir PDF açtığınızda, bu ikisinden hangisini istediğiniz sorulur.

## Bir sayfa ekleyin

1. `PDFATTACH` (ya da `PDFATT`) yazın ve PDF'i seçin. Birden çok sayfası varsa sayfa numarasını yazın.
2. Ekleme noktasını tıklayın (sayfanın sol alt köşesi).
3. Sayfanın gerçek boyutu için {{key:Enter}}'a basın ya da ölçeği yazın: PDF noktası başına çizim birimi (bir nokta 1/72 in'dir; milimetrelik bir çizimde 0.3528).
4. Dönüş olmaması için {{key:Enter}}'a basın ya da bir açı yazın.

Sayfa, blok başvurusu gibi bir nesnedir: taşıyın, döndürün, ölçekleyin, kopyalayın, silin ve bir katmana koyun. Katmanını kapatırsanız kaybolur. Yakınlaştırırsanız sayfa yeniden keskin çizilir.

## İzleyin

{{ui:Yakala}} açıkken imleç PDF'in kendi çizgilerine yakalanır: uç noktalar, orta noktalar ve kesişimler ({{ui:En yakın}} o yakalama açıksa da). Sayfada harf olarak çizilmiş metne yakalanmaz.

## Ayarlayın

- `PDFADJUST`: **Soluklaştır** (yüzde 0 ile 80), **Kontrast** (0 ile 100), **Tek renk** ve **Açık/kapalı**: silmeden gizler.
- `PDFCLIP`: sayfanın yalnızca bir dikdörtgen ya da çokgen bölümünü gösterir; **Sil** kırpmayı kaldırır.
- `PDFLAYERS`: bir PDF'in kendi katmanları olabilir. Komut bunları listeler; bu altlık için bir katmanı açmak ya da kapatmak üzere bir numara yazın. Dosyada kapalı olan katmanlar kapalı başlar.

## Çıktı alın ve kaydedin

PLOT sayfayı çizgileri, dolguları ve metniyle yazdırır (böylece keskin ve aranabilir kalır). PDF içindeki resimler ekranda gösterilir, ama henüz yazdırılmaz.

Bir DWG ya da DXF 2000 altlığı bir bağlantı olarak tutar: dosyanın adını, sayfayı, yerini, ölçeğini, dönüşünü, kırpmasını, soluklaştırmasını ve kontrastını. PDF'in kendisi çizimde yer almaz. Çizimi yeniden açın, `PDF` yazın ve dosyayı yeniden seçin; bunu yapana kadar sayfalar çerçeve olarak görünür ve gerçek boyutlarını ancak o zaman alır. Eski DXF (R12) altlık desteklemez: çerçeveyi ve adı tutar. Diğer programların kayıtlı kırpmayı ve ölçeği nasıl okuduğu, onlarda henüz denetlenmedi.

## Bir sayfa içe aktarın

1. `PDFIMPORT` (ya da `PDFIM`) yazın ve PDF'i ve sayfayı seçin.
2. Sayfanın sol alt köşesinin gideceği yeri tıklayın.
3. Gerçek boyut için {{key:Enter}}'a basın, bir ölçek yazın ya da **İki nokta** seçin: sayfa gerçek boyutta çizilir, sonra bildiğiniz bir uzaklığın iki noktasını tıklarsınız ve gerçek uzaklığı yazarsınız; her şey buna göre ölçeklenir.

Çizgiler çizgi ve çoklu çizgi olur, daireler ve yaylar tanınır, dolu şekiller katı taralamaya dönüşür ve metin, `-TEXT` ile biten bir katmanda metin olur. Tek bir geri alma adımıdır. PDF'teki resimler içe aktarılmaz: bunun yerine sayfayı ekleyin. Tarama (yalnızca resim olan bir sayfa) içe aktarılacak çizgi içermez.

PDF'ler güvenilmeyen dosyalar olarak okunur: hiçbir betik çalışmaz ve çok büyük bir sayfa kısaltılır ve bu bildirilir.
