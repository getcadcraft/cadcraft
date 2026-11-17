---
title: Kendi SHX yazı tiplerinizle metin çizin
summary: CadCraft'a bir SHX yazı tipi klasörü verin (ya da dosyaları seçin); bu yazı tiplerini adlandıran metin stilleri ekranda ve çıktıda, stilin yüksekliği, genişlik oranı ve eğimiyle çizilir.
keywords: shx, yazı tipleri, yazı tipi, şekil yazı tipi, büyük yazı tipi, bigfont, unifont, eski, farsça, farsi, arapça, arabic, metin stili, eksik yazı tipi, yazı tipi yerine geçti, SHXFONTS, klasör, ters, görsel sıra, simplex, isocp
from: 14b0a4ab
---

Diğer programlardan gelen çizimler metin stillerinde **SHX yazı tipleri** adlandırır ve bir DWG bunları taşımaz. Yazı tipi olmadan CadCraft o metni kendi yüzüyle çizer; bu sıradan Latin metin için uygundur ama düz karakter kodlarını başka harf şekillerine eşleyen eski yazı tipleri için (eski Farsça açıklama gibi) uygun değildir.

Yazı tiplerini CadCraft'a verin, o da metni bunlarla çizer.

## Yazı tiplerinizi yükleyin

{{cmd:SHXFONTS}} (`SHX`) yazın ve seçin:

- {{ui:Klasör}} (CadCraft Studio): bir klasör seçin. İçindeki her `.shx` dosyası şimdi okunur ve CadCraft her başlatıldığında yeniden okunur.
- {{ui:Dosyalar}} (tarayıcı): bir ya da birkaç `.shx` dosyası seçin. Bu tarayıcıda saklanır ve hiçbir zaman yüklenmez.
- {{ui:Listele}}: yüklü yazı tipleri ve açık çizimin adlandırdığı ama sizin yüklemediğiniz yazı tipleri.
- {{ui:Kaldır}} ve {{ui:Temizle}}: bir yazı tipini ya da hepsini unutur.

CadCraft üçüncü taraf yazı tiplerini içermez, bu yüzden hiçbir zaman göndermez: onlar sizden gelir. Bir çizim yalnızca yazı tiplerinin adlarını belirtir ve onların bir kopyasını tutmaz.

## Ne olur

Bir metin stilinin yazı tipi adı, yüklü bir yazı tipiyle adı eşleşerek bulunur; büyük/küçük harf, klasör ve `.shx` yok sayılır (`SIMPLEX.SHX`, `simplex` ile eşleşir). Böyle bir stildeki metin, ekranda, çıktıda ve PDF'te çizgilerle çizilir; metnin kendi yerinde, yüksekliğinde, döndürmesinde, genişlik oranında ve eğim açısında. Genişliği yazı tipinin kendisine aittir; bu yüzden {{ui:Merkez}} ve {{ui:Sağ}} hizalama, sarma ve seçme gördüğünüzle eşleşir. Yüklü olmayan yazı tipini kullanan bir stil yerleşik yüzünü korur; yüklü olmayan yazı tiplerini adlandıran bir çizimi açtığınızda komut satırı bunu söyler.

Standart stil de sayılır: Standart stili kendi yazı tipini adlandıran bir çizim onu korur.

## Yazı tipleri zaten görsel sırada

Birçok eski Farsça ve Arapça SHX yazı tipi, harfleri zaten ekran için şekillendirilmiş ve soldan sağa çizilecek biçimde tutar; bu yüzden mantıksal sırada yazılan metin ters çıkar. {{cmd:SHXFONTS}} yazın, {{ui:Ters çevir}} seçin ve yazı tipinin adını verin: onun metni bu kez son harf önce olacak şekilde yerleştirilir. Geri almak için yeniden çalıştırın. Bu geçiş yazı tipine aittir, bu tarayıcıda saklanır ve çizimde kaydedilmez.

## Henüz kapsanmayanlar

- Satır içi biçim kodları (renkler, MTEXT'te yığınlar) olan metinler yerleşik yüzde kalır.
- Büyük yazı tipleri (çift baytlı tür), ana yazı tipinin eksik olduğu kodlar için yerine geçer; ama CadCraft'ın zaten Unicode'a çevirdiği bir Doğu Asya kod sayfasındaki metin, yazı tipinin çift baytlı kodlarına geri eşlenmez.
- Yazı tipi okuyucusu biçimin yayımlanmış tanımını izler ve CadCraft için yapılmış yazı tipleriyle sınanmıştır. Sizinkilerden biri yanlış çiziliyorsa, yazı tipini ve çizimi bize gönderin.
