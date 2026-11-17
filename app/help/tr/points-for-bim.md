---
title: BIM programları için noktalar
summary: Noktaları ve açıklamalı blokların ekleme noktalarını, BIM ve ölçüm programlarının içe aktardığı bir CSV ya da TXT dosyasına dışa aktarın.
keywords: exportpoints, noktaları dışa aktar, exportpoints, noktalar, csv, txt, pnezd, penzd, xyz, ölçüm noktaları, koordinatlar, bim, aplikasyon, nokta dosyası, kuzey, doğu, kot
from: d80e2d53
---

## Ne yapacaksınız

Bir nokta dosyası: her satırda numarası, kuzeyi, doğusu, kotu ve açıklaması olan bir nokta. Revit ve Archicad da dahil olmak üzere BIM programları ve ölçüm yazılımları, ölçüm noktalarını, saha işaretlerini ya da ekipmanı yerleştirmek için bunu içe aktarabilir.

## Noktaları dışa aktarın

1. Noktaları ve ekleme noktalarını istediğiniz blok başvurularını seçin, ya da tüm noktaları almak için hiçbir şey seçmeyin.
2. {{cmd:EXPORTPOINTS}} (ya da `EXPPTS`, ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Noktaları dışa aktar}}) yazın ve {{key:Enter}}'a basın (`Nokta ve blok seçin` isteminde hiçbir şey seçilmediyse, bir kez daha {{key:Enter}}'a basın).
3. Öznitelikli bloklar seçtiğinizde CadCraft etiketlerini listeler: değeri açıklama olan etiketi yazın (örneğin `ITEM`), ya da her bloğun adını kullanmak için başka bir şey yazın.
4. Sütunları seçin: `PNEZD` (nokta, kuzey, doğu, kot, açıklama: olağan olan), `PENZD` (doğu, kuzeyden önce) ya da `XYZ` (yalnızca koordinatlar).
5. Birimleri seçin: `D` çizildiği gibi, ya da `M` metre ya da `F` ft (yalnızca çizimin birimleri ayarlıysa: Özellikler › {{ui:Birimler}}, hiçbir şey seçili değilken).
6. Bir UCS ayarlıysa, `W` dünya ya da `U` UCS koordinatlarını seçin ([UCS ve döndürülmüş görünüm](topic:ucs-and-turned-view) bölümüne bakın).
7. Virgülle ayrılmış bir `.csv` için `C`, ya da sekmeyle ayrılmış bir `.txt` için `T` seçin ve ilk nokta numarasını yazın.

Dosya `<drawing>-points.csv` (ya da `.txt`) olarak iner ve geçmiş kaç nokta içerdiğini söyler.

## Dosyada ne var

- Her satırda bir nokta; satır sonu (CR LF) ile biter, üç ondalık basamakla.
- Bir noktanın kotu Z'sidir (yoksa 0). Bir bloğun noktası ekleme noktasıdır.
- Virgül (ya da bir TXT'de sekme) ya da tırnak içeren bir açıklama çift tırnak içine alınır ve tırnakları çift yazılır.
- Biçim, CivilCraft'ın okuduğu ve yazdığı biçimdir; dosya orada da nokta olarak açılır.

## Sık yapılan hatalar

- Birimler için yalnızca `D` sunulur: çizimin birimleri ayarlı değil. Birimleri ayarlayın ya da diğer programda dönüştürün.
- Noktalar diğer programda beklediğinizden uzakta: dünya koordinatlarını (`W`) ya da diğer programın ölçüm noktasının kullandığı UCS'i (`U`) dışa aktarın.
