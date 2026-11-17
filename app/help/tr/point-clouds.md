---
title: Nokta bulutu üzerinde as-built çizgileri izleme
summary: Bir lazer taraması (LAS, LAZ, E57, PLY, PCD, PTX, PTS veya XYZ) çizimin altına ekleyin, içinden bir plan kesiti alın ve noktalarında nesne yakalama ile duvarları, kapıları ve kolonları çizin.
keywords: nokta bulutu, pointcloudattach, pcattach, pointcloud, pc, lazer taraması, tarama, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, ölçme, kesit, plan kesiti, düğüm, yakalama, izleme, mevcut koşullar
from: b0e0aae5
---

## Ne yapacaksınız

Uygulanmış hâl (as-built) kat planı: taranmış bir yapının duvarları, taramanın noktalarının tam üzerine çizilmiş çizgi ve çoklu çizgiler olarak.

## Bulutu ekleyin

1. Çizimin birimleri yoksa önce birimleri ayarlayın ({{ui:Özellikler}} içindeki {{ui:Birimler}} kutusu ya da {{cmd:UNITS}}): CadCraft bulutu kendi birimlerinden çizimin birimlerine dönüştürür.
2. {{cmd:POINTCLOUDATTACH}} (ya da `PCATTACH`) yazın ve {{key:Enter}} tuşuna basın. Bir `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` veya `.xyz` dosyası seçin (nokta bulutu biçimleri konusu her birinin ne getirdiğini ve bir tarayıcının kendi yazılımından ne dışa aktarılacağını anlatır). Dosyayı {{ui:Aç}} ile de açabilir, sayfaya sürükleyip bırakabilir ya da BIM görüntüleyicisinin {{ui:CadCraft'ta izle}} komutundan gönderebilirsiniz.
3. `Lower-left corner of the cloud`: dosyanın kendi koordinatlarını korumak için {{key:Enter}} tuşuna basın (projeye göre hizalanmış bir tarama çizimle örtüşür) ya da bulutun sol alt köşesinin gideceği yere tıklayın.
4. Komut satırı kaç noktanın gösterildiğini söyler. Görünüm bulutu yakınlaştırır; bulut çizgilerin altında kalır ve her nokta yukarıdan görünür.

## Plan kesiti alın ve izleyin

1. {{cmd:POINTCLOUD}} (ya da `PC`) yazın, ardından {{ui:Kesit}} için `S`. Yalnızca bulutun en alçak noktasının 1.2 m üzerindeki ince bir bant görünür: duvarlar, kapı açıklıkları ve kolonlar bir kat planı gibi okunur.
2. `H` kesitin yüksekliğini, `T` kalınlığını (çizim birimlerinde) ayarlar. {{key:Enter}} komutu bitirir.
3. Nesne yakalamayı ({{key:F3}}) açın ve yakalamalar arasında {{ui:Düğüm}} seçeneğini işaretleyin. {{cmd:LINE}} ya da {{cmd:PLINE}} ile çizin: imleç kesitin noktalarına yakalanır ve "Nokta bulutu" etiketini gösterir. Çizimin kendi uç noktaları, orta noktaları ve merkezleri bulutun önüne geçer; bu yüzden çoklu çizgiyi kapatmak onun ilk noktasına denk gelir.
4. Başka bir katı izlemek için kesit yüksekliğini değiştirin; tüm bulutu görmek için kesiti kapatın (yeniden `S`).

## Diğer seçenekler

{{cmd:POINTCLOUD}} komutunda: `C` noktaları dosyanın renklerine, yüksekliğe, yoğunluğa, LiDAR sınıfına ya da tek bir renge göre boyar; `SI` nokta boyutunu ayarlar; `V` bulutu gizler ya da gösterir; `Z` bulutu yakınlaştırır; `D` bulutu ayırır.

3B sekmesi de bulutu gösterir; en alçak noktası zeminde olur ve aynı kesit uygulanır.

:::note
Bulut çizimin parçası değildir: DWG ya da DXF dosyasına kaydedilmez ve geri al bulutu değiştirmez. Çizimi daha sonra açtığınızda bulutu yeniden ekleyin. Dosyalar bu bilgisayarda okunur; hiçbir şey yüklenmez. Çok büyük taramalar eşit aralıklarla 2 milyon noktaya seyreltilir. E57 dosyaları şimdilik en fazla 6 milyon nokta ve 512 MB'a kadar açılır: daha büyük taramaları LAS ya da LAZ olarak dışa aktarın.
:::

## Çıktı al

{{cmd:PLOT}} bulutu çizimle birlikte, çizgilerin altında yazdırır: model çıktısında ({{ui:Her şey}} bulutun alanını içerir) ve her düzen görünüm penceresinde; PDF, PNG, SVG ve yazıcıya gönderdiğiniz çıktıda. Ekranda görünenleri yazdırır: kesit açıksa kesiti, seçtiğiniz renkleri ve gizlediyseniz gizli kalmasını. Kağıtta noktalar küçük karelere dönüşür; her karede en yüksek nokta kazanır ve bir çıktı en fazla yaklaşık 400,000 nokta içerir (çok yoğun bir bulut daha büyük karelerle yazdırılır). Bulut yalnızca eklendiği çizimde yazdırılır; kağıt uzayının kendisinde hiçbir zaman yazdırılmaz, yalnızca bir görünüm penceresi üzerinden yazdırılır.

## Birden çok tarama

Farklı konumlardan alınmış taramalar tek bir çerçeveye kaydedilebilir, ICP ile iyileştirilebilir ve tek bir LAS ya da E57 olarak dışa aktarılabilir: bkz. [Birden çok taramayı tek bir çerçevede hizalama](topic:register-scans).
