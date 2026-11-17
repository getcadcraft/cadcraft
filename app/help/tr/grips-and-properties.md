---
title: Tutamaçlar ve Özelliklerle düzenleme
summary: Nesneleri tutamaçlarıyla gerdirin, taşıyın ve boyutlandırın; Özellikler panelinde tam uzunlukları, yarıçapları, açıları ve koordinatları yazın.
keywords: tutamaçlar, özellikler, gerdir, uzunluk, yarıçap, koordinatlar, düzenle, hızlı özellikler, özellikler paleti, değiştir, katman, renk
from: f22541ba
---

## Neler öğreneceksiniz

Komut kullanmadan bir nesneyi değiştirmenin iki hızlı yolu: **tutamaçlarını** sürükleyin ya da sağdaki **Özellikler** panelinde yeni değerler yazın.

## Tutamaçlar

Komut çalışmazken nesneleri (bir seferde en fazla 200) seçtiğinizde, üzerlerinde küçük kareler belirir. Bunlar tutamaçtır:

| Nesne | Tutamaçlar |
|---|---|
| Çizgi | İki uç ve orta nokta (tüm çizgiyi taşır) |
| Daire | Merkez (taşır) ve dairenin üzerindeki dört nokta (yarıçapı değiştirir) |
| Yay | Merkez ve iki uç (başladığı ve bittiği yeri değiştirir) |
| Çoklu çizgi | Her köşe noktası |
| Metin, nokta, blok başvurusu | Ekleme noktası |
| Elips | Merkez |
| Ölçülendirme | Tanımlayıcı noktaları ve ölçü çizgisinin konumu |
| Görünüm penceresi | Merkez (taşır) ve dört köşe (boyutunu değiştirir) |

### Bir tutamacı taşıyın

1. Bir çizgi çizin ve üzerine tıklayın. Üç tutamaç belirir.
2. Bir uçtaki tutamaca tıklayın. Durum çubuğu şunu yazar: "Bu tutamacın gideceği yere tıklayın (iptal için Esc). Yakalamalar ve Ortogonal uygulanır."
3. İmleci hareket ettirin. Bir önizleme imleci izler.
4. Yeni konuma tıklayın ya da başka bir nesnenin üzerindeki bir noktaya yakalayıp tıklayın.

Uç hareket eder, çizginin geri kalanı yerinde kalır. Bir tutamaca basılı tutup sürükleyerek de taşıyabilir, istediğiniz yerde bırakabilirsiniz.

:::note
Bir tutamaç için koordinat yazamazsınız. Kesin bir konum için bir noktaya yakalayın ya da değeri Özellikler'de yazın.
:::

Tutamaç taşımayı iptal etmek için {{key:Esc}}'a basın ya da sağ tıklayın.

## Özellikler

Sağdaki panel, seçili olanın özelliklerini gösterir.

1. Bir çizgiye tıklayın. Panelin başlığında "Çizgi" yazar.
2. {{ui:Uzunluk}} alanına tıklayın, `2500` yazın ve {{key:Enter}}'a basın.

Çizgi artık tam olarak 2500 uzunluğundadır; başlangıç noktası ve açısı korunur. {{key:Enter}} ya da başka bir yere tıklamak değeri uygular; {{key:Esc}} eski değeri geri koyar. Her değişiklik, birçok nesne aynı anda değişse bile tek bir geri alma adımıdır.

Alanlar ifade kabul eder (`=2*45`) ve birimli uzunlukları (`3'6"`, `900mm`) alır; her noktanın X, Y ve Z değeri vardır ve birden çok nesne birlikte değiştirilebilir. Hepsi [Özellikler paneli](topic:properties-panel) konusunda anlatılır.

## Sık yapılan hatalar

- **Tutamaçlar görünmüyor.** Bir komut çalışıyordur ({{key:Esc}}'a basın), ya da 200'den fazla nesne seçilidir ya da nesne kilitli bir katmandadır.
- **Tutamaç yanlış yere gitti.** Bir yakalama onu yakaladı. Yakalamaları yok saymak için tıklarken {{key:Shift}} tuşunu basılı tutun.
- **Özellikler'e yazmak bir şey yapmadı.** Uygulamak için {{key:Enter}}'a basın ya da başka bir yere tıklayın. Kabul edilmeyen bir giriş (sıfır ya da negatif uzunluk ve yarıçaplar, değer olmayan metin) alanı kırmızıya çevirir ve nedenini söyler.
- **Özellikler alanına yazdığınız harfler oraya gitti.** Bir alanda imleç varken tuşlar oraya yazılır. {{key:Enter}} ya da {{key:Esc}}'a basın, sonra komutu yazın.
