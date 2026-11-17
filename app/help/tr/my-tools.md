---
title: Kendi düğmeleriniz (Araçlarım)
summary: Kendi makrolarınızı çalıştıran araç çubuğu düğmeleri ekleyin, onlara kısayol tuşları verin, bunları bir dosya olarak paylaşın ve bir CUIx özelleştirme dosyasından düğmeleri getirin.
keywords: araçlarım, özel düğmeler, araç çubuğu düğmeleri, makro, makrolar, cui, cuix, özelleştir, menü, kısayol tuşları, klavye kısayolları, diesel, ^c^c, düğmeleri içe aktar, düğmeleri dışa aktar
from: 36618802
---

## Öğreneceğiniz şeyler

Araç çubuğuna kendi düğmelerinizi nasıl koyacağınızı, her birinin AutoCAD'in yazdığı biçimde yazılmış bir makroyu nasıl çalıştırdığını, bir düğmeye nasıl tuş vereceğinizi ve bir CUIx dosyasının düğmelerini nasıl getireceğinizi öğreneceksiniz.

## Bir düğme ekleyin

1. {{ui:Settings}} ({{key:Mod+,}}) açın ve {{ui:CadCraft}} sekmesinde kalın. {{ui:My tools}} bölümüne gidin.
2. {{ui:Add a button…}} düğmesine tıklayın.
3. Kutuyu doldurun:
   - {{ui:Group}}: düğmenin gireceği araç çubuğu grubu, örneğin `Araçlarım`. Yeni bir ad yeni bir grup oluşturur.
   - {{ui:Label}}: düğmenin üzerindeki yazılar.
   - {{ui:Macro}}: ne yazacağı, örneğin `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: kutuya tıklayın ve tuşlara basın, örneğin {{key:Ctrl+Alt+B}}.
   - {{ui:Icon}}: en fazla 64 KB boyutunda bir PNG ya da SVG resmi, ya da hiçbiri (bir yıldız görünür).
4. {{ui:Save}} düğmesine tıklayın.

Düğme, araç çubuğunun sonunda, kendi grubunda görünür. Çalıştırmak için tıklayın ya da tuşuna basın. Listedeki {{ui:Edit}} ve {{ui:Delete}} onu değiştirir ya da kaldırır.

## Bir makro yazın

Bir makro, komut satırına yazacağınız şeydir; birkaç işaretle birlikte:

| İşaret | Anlamı |
|---|---|
| `^C` | Çalışan her şeyi iptal eder (`^C^C` olağan başlangıçtır) |
| `;` ya da bir boşluk | {{key:Enter}} |
| `\` | Sizi bekler: bir tıklama ya da yazılmış bir yanıt, ardından makro devam eder |
| Bir komutun önündeki `_` ya da `.` | Kabul edilir ve yok sayılır (uluslararası ve yerleşik adlar) |
| En başta `*` | Her bittiğinde yeniden çalışır; {{key:Esc}}'a basana kadar |
| `^O`, `^G` | Ortogonal, ızgarayı açar ya da kapatır |
| `$M=` | Geri kalanı DIESEL'dir. Yalnızca `$(if,…)`, `$(getvar,…)`, `$(=,…)` ve `$(eq,…)` okunur; başka bir şey kullanan bir düğme bunu söyler ve hiçbir şey yapmaz |

Örnekler:

- `^C^C_line;0,0;@100,0;;` başlangıç noktasından 100 uzunluğunda bir çizgi çizer.
- `^C^C_circle;\25;` sizden merkezi ister, ardından orada yarıçapı 25 olan bir daire çizer.
- `^C^C_turnright` görünümü 90° sağa çevirir.

## Kısayol tuşları

Bir tuşun bir harf ya da rakamla birlikte {{key:Mod}} (Ctrl, ya da Mac'te Cmd) ya da {{key:Alt}} gerekir; ya da boş olan işlev tuşlarından biri gerekir: {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Tek başına harfler komut satırına gider. CadCraft, uygulama ya da tarayıcının zaten kullandığı tuşlar (örneğin {{key:Ctrl+S}} ya da {{key:Ctrl+Z}}) ve başka bir düğmenin sahip olduğu tuşlar reddedilir ve kutu nedenini söyler.

## Düğmelerinizi paylaşın

- {{ui:Export…}} her grubu ve düğmeyi (simgeleri ve tuşlarıyla birlikte) `my-tools.json` olarak kaydeder.
- {{ui:Import…}} böyle bir dosyanın gruplarını sizinkilerin arkasına ekler. Zaten kullandığınız bir grup adı "(2)" alır; çakışacak bir tuş atlanır ve panel bunu söyler.

## Bir CUIx dosyasından düğmeleri getirin

1. {{ui:Import CUIx…}} düğmesine tıklayın ve `.cuix` dosyasını seçin.

Dosyanın araç çubukları ve şerit panelleri gruplara dönüşür; her düğme makrosu ve resmiyle (PNG, ya da PNG'ye dönüştürülmüş BMP) gelir. Dosyanın kısayol tuşları kendi grubunda, her düğme tuşuyla birlikte gelir; taşıyabileceği komut takma adları bir {{ui:Aliases}} grubunda gelir. Panel neyin geldiğini listeler.

:::note
Dosya yalnızca okunur. CadCraft'ta olmayan komutlar tahmin edilmeden adlarıyla listelenir: düğmeleri tıklandığında bunu söyler. Yukarıdaki birkaç işlev dışındaki DIESEL, menüler, fare düğmeleri ve çalışma alanları okunmaz.
:::

## Bilmeniz iyi olacaklar

- Düğmeler çizimlerde değil, bu tarayıcıda (ya da bu masaüstü uygulamasında) tutulur.
- Bir düğme komut satırı üzerinden çalışır, bu yüzden yazdığınız her şey gibi geri alınır: çalıştırdığı her komut için bir {{key:Mod+Z}}.
