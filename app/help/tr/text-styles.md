---
title: Metin stilleriyle yazı tipini ve boyutunu ayarlayın
summary: Yazı tipi, yükseklik, genişlik ve eğimle adlandırılmış metin stilleri yapın, yeni metin için birini geçerli yapın ve bir stili değiştirerek onu kullanan tüm metni değiştirin.
keywords: metin stili, stil, STYLE, ST, TEXTSTYLE, -STYLE, yazı tipi, metin yüksekliği, genişlik çarpanı, eğiklik, eğim, yazı tipini değiştir, standart stil, stili uygula, DDSTYLE
from: bd5a4883
---

## Ne yapacaksınız

`Notes` adında, kendi yazı tipi ve yüksekliği olan bir metin stili oluşturun, bunu yeni metinde kullanın ve daha sonra stili değiştirerek onu kullanan her notu aynı anda değiştirin.

## Adımlar

1. {{cmd:STYLE}} (`ST`) yazın ve {{key:Enter}} tuşuna basın veya {{ui:Çiz}} araç çubuğundaki {{ui:Metin stili}} öğesine tıklayın. {{ui:Metin stili}} iletişim kutusu çizimdeki stilleri listeler. Her çizimde `Standart` bulunur.
2. {{ui:Yeni…}} düğmesine tıklayın, yeni stilin adı olarak `Notes` yazın ve {{ui:Tamam}} düğmesine tıklayın. Durum satırı "Metin stili Notes oluşturuldu ve geçerli yapıldı." der.
3. {{ui:Yazı tipi}} alanında bir yazı tipi adı seçin veya yazın. Her yeni metnin o yükseklikte olması için {{ui:Yükseklik (0 = her seferinde sor)}} değerini `2.5` gibi bir sayıya ayarlayın. Her seferinde sorulmak için `0` bırakın.
4. Daha dar, daha geniş veya eğik harfler istiyorsanız {{ui:Genişlik çarpanı}} ve {{ui:Eğiklik açısı (°)}} değerlerini ayarlayın. Örnek satır sonucu gösterir.
5. {{ui:Kapat}} düğmesine tıklayın. {{cmd:TEXT}} veya {{cmd:MTEXT}} ile metin çizin: yeni metin geçerli stili alır.
6. Zaten oluşturduğunuz bir stili kullanmak için iletişim kutusunu yeniden açın, listeden seçin ve {{ui:Geçerli yap}} düğmesine tıklayın.
7. Zaten çizilmiş metne bir stil uygulamak için metni seçin, iletişim kutusunu açın, stili seçin ve {{ui:Seçili metne uygula}} düğmesine tıklayın.

## Stili sonra değiştirin

İletişim kutusunda bir stilin yazı tipini, yüksekliğini, genişliğini veya eğimini değiştirin; onu kullanan her metin tek bir geri alma adımında ({{key:Mod+Z}}) izler. Durum satırı kaç metnin izlediğini söyler.

## Notlar

- {{ui:Sil}} `Standart` stilini ve metnin hâlâ kullandığı bir stili reddeder: önce o metni başka bir stile değiştirin.
- Stiller çizimin STYLE tablosunda saklanır; bu yüzden DXF ve DWG dosyaları bunları korur.
- Komut satırında `-STYLE` aynı işi seçeneklerle yapar (Current, New, Font, Height, Width, Oblique, Delete, List).
- Çizimi okuyan bilgisayarda yüklü olmayan bir yazı tipi, başka bir yazı tipiyle gösterilir.
