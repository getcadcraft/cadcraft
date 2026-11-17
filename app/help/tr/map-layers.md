---
title: Çizimin altına harita katmanları ekleyin
summary: Sokak haritalarını, hava fotoğraflarını ya da bir dünya dosyalı resmi model uzayının altında gösterin; çizimin koordinat sistemine göre yerleştirilirler.
keywords: harita, harita katmanları, maplayers, ml, geomap, temel harita, hava, uydu, karolar, xyz, wms, wmts, harita servisi, dünya dosyası, koordinat sistemi, epsg, state plane, utm, coğrafi referans, arsa planı, coğrafi konum, coğrafi veri, kaydedilmiş, dwg, dxf
from: f103045f
---

## Ne yapacaksınız

Her biri doğru yerde olacak şekilde, bir hava fotoğrafının ya da sokak haritasının üzerine çizilmiş bir arsa planı.

## CadCraft'a çizimin nerede olduğunu söyleyin

1. {{ui:Özellikler}} › {{ui:Birimler}} bölümünde çizimin birimlerini ayarlayın (örneğin ft ya da metre).
2. {{cmd:MAPLAYERS}} (ya da `ML`) yazıp {{key:Enter}} tuşuna basın.
3. {{ui:Çizimin nerede olduğu}} altında, {{ui:Bir sistem bulun}} alanına bir ad ya da bir EPSG kodu yazın (örneğin `2277` ya da `Texas Central`) ve {{ui:Sistem}} içinden seçin.
4. Çizim o sistemin kendi koordinatlarıyla çizildiyse, yerleşimi 0'da bırakın. Değilse, bir çizim noktası ({{ui:Çizim X}}, {{ui:Çizim Y}}) verin; bu noktanın harita ızgarasındaki yeri ({{ui:Doğu (Easting)}}, {{ui:Kuzey (Northing)}}) ve çizimin doğudan ne kadar döndürüldüğü ({{ui:Döndürülme (°)}}).
5. {{ui:Bu sistemi kullan}} düğmesine tıklayın.

## Katman ekleyin

1. İletişim kutusunun üstündeki {{ui:İnternetten harita katmanları}} seçeneğini açın. O zamana kadar hiçbir sunucudan bir şey istenmez; açıkken eklediğiniz sunucular ekranda görünen alanı ve internet adresinizi görür, çiziminizi asla görmez.
2. {{ui:Katman ekle}} bölümünde, nereden geleceğini seçin:
   - **Karolar (XYZ)**: `{z}`, `{x}` ve `{y}` içeren bir karo adresi, bir ad ve sağlayıcısının istediği atıf.
   - **WMS**, **WMTS** ya da **ArcGIS**: servisin adresi, sonra {{ui:Katmanları al}} ve birini seçin.
   - **Bir resim**: dünya dosyası (ve varsa `.prj` dosyası) ile birlikte bir PNG ya da JPEG.
3. Katman çizimin altında görünür. Atfı çizimin sağ alt köşesinde görünür.

Listedeki her katman gizlenebilir, daha çok ya da daha az geçirgen yapılabilir, yukarı ya da aşağı taşınabilir ya da kaldırılabilir.

Sisteme ya da katmanlara yapılan her değişiklik bir {{cmd:UNDO}} adımıdır.

## Çizimle birlikte kaydedilir

Çizimi DWG ya da DXF olarak kaydettiğinizde koordinat sistemi ve katman listesi çizime kaydedilir ve onu yeniden açtığınızda, herhangi bir bilgisayarda geri gelir. Dosyalardan alınan resimler kaydedilmez: açtıktan sonra yeniden ekleyin. {{ui:İnternetten harita katmanları}} anahtarı çizime kaydedilmez: bu tarayıcıya aittir; bu yüzden birinin size gönderdiği bir çizim, siz kendiniz açana kadar hiçbir sunucudan bir şey istemez.

Diğer programların gördükleri:

| Şöyle kaydedilir | Çizimin konumu | Harita katmanları |
|---|---|---|
| DWG 2010, 2013 veya 2018, DXF 2000 | Programların bir çizimin coğrafi konumunu okumak için kullandığı standart biçimde yazılır: sistemin EPSG kodu, bir çizim noktası ve bunun harita ızgarasındaki yeri, birimler ve kuzey. | Yalnızca CadCraft |
| DWG 2000, 2004 veya 2007, DXF R12 | Yalnızca CadCraft (kaydederken CadCraft bunu söyler) | Yalnızca CadCraft |

- **Denetlendi:** ODA File Converter konumu hatasız okur ve bir DXF kitaplığı (ezdxf) EPSG kodunu ve yerleşimi tam olarak okur.
- **Henüz denetlenmedi:** diğer çizim programlarının sistemi EPSG kodundan tanıyıp tanımadığı. Sistemlerin kendi listesini başka adlarla tutan bir program, çizimi konum olmadan gösterebilir.
- Diğer programlar blok listesinde `CADCRAFT_GEO` adlı bir blok gösterir. Bu, sistemin ve katmanların CadCraft'a ait kopyasıdır; çizime hiçbir zaman yerleştirilmez. Orada bırakın.

## Diğer programlardan gelen çizimler

Başka bir programdan gelen bir çizimin coğrafi konumu varsa, CadCraft onu okur:

- Bir EPSG kodu adlandırıyorsa, {{ui:Çizimin nerede olduğu}} bu sistemi gösterir ve harita katmanları ona göre yerleştirilir.
- CadCraft sistemi bilmiyorsa (başka bir programın ona verdiği kendi adı, yerel bir ızgara ya da bir ölçek faktörü), konum kullanılmaz; ancak olduğu gibi tutulur ve geri kaydedilir, böylece diğer program yine onu bulur. Bunun yerine {{ui:Çizimin nerede olduğu}} bölümünde bir sistem seçin.

:::note
Harita katmanları yalnızca ekranda çizilir: çıktıya alınmazlar. Yalnızca kullanım koşulları buna izin veren harita servislerini kullanın ve atıflarını görünür tutun.
:::
