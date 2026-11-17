---
title: Menüler, tuşlar ve fare
summary: Çalışma biçiminize uyan bir menü stili seçin, her komuta kendi tuşunuzu ya da bir komut yazan bir tuşu verin, komutları şerit sekmeleri arasında taşıyın ve tekerleğin ile fare düğmelerinin ne yapacağını ayarlayın.
keywords: menü stili, menüler, şerit, araç çubuğu, komut satırı, klavye kısayolları, kısayollar, tuşlar, özelleştir, yeniden eşle, metin tuşları, fare, tekerlek, ters çevir, yakınlaştırma yönü, orta düğme, sağ düğme, kaydır, dışa aktar, içe aktar, geçiş, tanıdık, klasik çizim
from: 8bbf4f88
---

CadCraft'ın komutları, onlara hangi yoldan ulaşırsanız ulaşın aynıdır ve komut satırı kısaltmalarıyla (`L`, `C`, `TR` …) her zaman oradadır. Bir **menü stili** yalnızca düğmelerin ekranda nerede durduğunu, orada nasıl adlandırıldıklarını ve hangi tuşların onları çalıştırdığını belirler. Birini {{ui:Ayarlar}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menüler, tuşlar ve fare}} içinden seçin; değişiklik hemen uygulanır ve bu tarayıcı onu hatırlar.

## Üç stil

| Stil | Ne elde edersiniz |
|---|---|
| {{ui:CadCraft}} | CadCraft'ın kendi araç çubuğu: Dosya, Çiz, Değiştir, Açıklama, Parametrik, Bloklar, Sayfalar, Düzenle ve Görünüm; her birinde bir {{ui:Daha fazla}} menüsü. Başlangıç. |
| {{ui:Klasik çizim}} | Klasik 2B çizim programlarının düzenlediği biçimde bir şerit: bir {{ui:Dosya}} menüsü ve hızlı düğmeler, ardından {{ui:Giriş}} (Çiz, Değiştir, Açıklama, Katmanlar, Blok, Özellikler, Yardımcı araçlar, Pano), {{ui:Ekle}}, {{ui:Açıklama}}, {{ui:Parametrik}}, {{ui:Görünüm}}, {{ui:Yönet}}, {{ui:Çıktı}} ve {{ui:3B}} sekmeleri. Komutları her zamanki gibi yazın. Orta düğme kaydırır; sağ tıklama {{key:Enter}} işlevi görür ve sağ düğmeyle sürüklemek bir şey yapmaz. |
| {{ui:Şerit}} | Düz görev sekmelerinden oluşan bir şerit: {{ui:Çiz}}, {{ui:Değiştir}}, {{ui:Açıklama}}, {{ui:Parametrik}}, {{ui:Bloklar}}, {{ui:Sayfalar}}, {{ui:Görünüm}}, {{ui:3B}} ve {{ui:Araçlar}}; sağda bir {{ui:Dosya}} menüsü ve hızlı düğmeler. Orta ve sağ düğmeler, CadCraft'ın kendi stilindeki gibi kaydırır. |

Her stil CadCraft'ın tuşlarını korur: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, ve çizim yardımcıları için {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}}. Harfler hiçbir zaman tuş değildir: CadCraft bunları komut satırına yazar.

Şeritler ayrıca Katmanlar panelinin araçlarını ve durum çubuğundaki çizim yardımcılarını da barındırır. {{ui:3B}} sekmesi, çizimin altındaki 3B sekmesi açıldıktan sonra dolar; Model sekmesinde seçilen bir 3B araç önce 3B sekmesini açar ve 3B sekmesinde seçilen bir 2B araç önce Model sekmesine döner.

:::tip
CadCraft'ın kendi düzenine ait ama stiliniz başka bir komuta verdiği bir tuş işe yaramaz ve durum çubuğu komutunun nereye gittiğini söyler ("Tuşlarım'da Ortogonal, Ctrl+Alt+O'dur"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ve oklar her zaman anlamını korur. Bir komut çalışırken ya da komut satırına harf yazılırken, tuşlar komut satırına aittir.
:::

## Kendinize göre düzenleyin

1. Ne istediğinize en yakın stili seçin, sonra {{ui:Özelleştir…}} düğmesine tıklayın.
2. {{ui:Tuşlar ve menüler}} bölümünde bir komut bulun (arama kutusu yardımcı olur). {{ui:Tuş ekle}} düğmesine tıklayın ve tuşa basın. Bir tuşu kaldırmak için ona tıklayın.
3. Şeritle çalışırken {{ui:Yeri}}, komutu başka bir sekmeye ve panele, {{ui:Dosya}} menüsüne ya da {{ui:Yalnızca tuşlarla}} seçeneğine taşır.
4. {{ui:Fare}} bölümünde tekerleği ve çizimi kaydıran düğmeleri ayarlayın.
5. Ona bir ad verin ve {{ui:Kaydet}} düğmesine tıklayın.

Hazır bir stili kaydetmek kendi kopyanızı oluşturur ("Benim Klasik çizimim"); hazır olan asla değişmez. İki komuta verilmiş bir tuş kırmızıyla gösterilir ve kaydedebilmeniz için düzeltilmesi gerekir.

## Komut yazan tuşlar

Görünüm › Daha fazla › {{ui:Klavye kısayolları…}} yolundaki {{cmd:SHORTCUTS}} bir tuşa tüm bir komut satırı verir; örneğin `LINE` için {{key:Ctrl+Alt+L}} ya da `ZOOM E` için {{key:F9}} gibi. Bu tuşlar kullanılan stile aittir: bu sürüm ilk açıldığında, eski bir sürümde yaptığınız tuşlar bir kez olmak üzere kendi "Benim CadCraft tuşlarım" stilinize taşınır ve önceki gibi çalışır. Stili dışa aktarmak, bunları da beraberinde götürür.

## Fare

- **Fare tekerleği**: {{ui:Yukarı kaydırmak yakınlaştırır}} (başlangıç) ya da {{ui:Yukarı kaydırmak uzaklaştırır}} ve ne kadar hızlı olacağı. Dokunmatik yüzeyde parmakları açıp kapatmak her zaman parmaklarınızın hareket ettiği yönde yakınlaştırır.
- **Çizimi şununla kaydırın**: orta düğme, sağ düğme ya da ikisi. Sürüklemeden yapılan sağ tıklama her zaman {{key:Enter}} işlevi görür. Sol düğme CadCraft'ta her zaman seçer ve çizer; bu yüzden onu işaretlemek burada bir şey değiştirmez.
- **3B görünümlerde sürükleme**: 3B sekmesi her stilde kendi düğmelerini korur (sol düğme etrafında döndürür, orta ve sağ düğme kaydırır).

## Stilleri taşıyın

{{ui:Dışa aktar}} kullanılan stili küçük bir `.ccinput.json` dosyası olarak kaydeder; {{ui:İçe aktar…}} başka bir bilgisayardan ya da bir meslektaşınızdan bir tane ekler. İçe aktarılan bir dosya yalnızca CadCraft'ın kendi komutlarını gösterebilir: içindeki başka her şey çıkarılır ve durum çubuğunda sayılır. {{ui:Bu stili sil}} sizin kendi stillerinizden birini kaldırır.

:::note
Bu ayarlar bu tarayıcıda kalır. Stil kartlarının altındaki {{ui:Bu stili her uygulamada kullan}} her uygulamanın eşleşen stilde açılmasını sağlar (kendi araç çubuğu, bir şerit ya da Klasik çizim), her uygulamada yaptığınız değişikliklerle birlikte. CadCraft'ın bir menü çubuğu stili yoktur: başka bir uygulamanın menü çubuğu her uygulama için seçildiğinde, CadCraft kendi araç çubuğunu korur.
:::

İlgili: [Klavye ve fare](topic:keyboard) · [CadCraft ayarları](topic:settings) · [Başka çizim yazılımlarından geçiş](topic:coming-from) · [Komut kısaltmaları](topic:command-aliases)
