---
title: İçe aktarırken birimler: bir dosya birimlerini belirtir veya önce size sorulur
summary: Çizime getirdiğiniz bir dosya birimlerini belirtirse CadCraft onu dönüştürür ve bunu söyler. Belirtmezse, bir şey yerleştirmeden önce sorar ve yanıtınızı o dosya için hatırlar.
keywords: birimler, içe aktarma, ekleme, xref, ekle, XATTACH, INSERT, OBJ, DWG, DXF, nokta bulutu, kütüphane öğesi, milimetre, metre, inç, fit, ölçek, yanlış boyut, çok büyük, çok küçük, 1000 kat, sor, hatırlanan, INSUNITS
from: 558f1293
---

## Ne yapacaksınız

Bir dosyayı bir çizime getirin ve doğru boyutta geldiğinden emin olun.

## Adımlar

1. Dosyayı her zamanki gibi getirin: `INSERT` › Dosya, `XATTACH`, `POINTCLOUDATTACH` veya Kütüphane panelindeki {{ui:Dosyalar}}.
2. Dosya birimlerini belirtiyorsa hiçbir şey sorulmaz. Komut satırı dosyanın hangi birimleri belirttiğini ve birimler çizimin birimlerinden farklıysa kullanılan ölçeği söyler.
3. Belirtmiyorsa bir iletişim kutusu, dosyanın **Birimleri** sorar. Dosyadaki bir birimin ne olduğunu seçin ve {{ui:Bu birimleri kullan}} düğmesine tıklayın. Siz yanıtlamadan hiçbir şey yerleştirilmez.
4. {{ui:İptal}} (veya {{key:Esc}}) hiçbir şey getirmez.

## Hangi dosyalar birimlerini belirtir

- **DWG ve DXF**: çizimin ekleme birimleri (`$INSUNITS`). Bunlar olmayan bir dosya hakkında sorulur.
- **Nokta bulutları**: koordinat sistemli LAS ve LAZ, E57, PTX ve PLY kendi birimlerini belirtir. Diğerleri hakkında sorulur.
- **OBJ**: hiçbir zaman birim belirtmez. Size sorulur.
- **glTF ve GLB**: biçimin kendi kuralına göre metre.
- **Resimler**: kendi boyutları yoktur. `IMAGEATTACH` genişlik sorar ve o dosyaya daha önce verdiğiniz genişliği önerir.
- **Taramalar**: yoğunluğunu (inç başına nokta) belirten bir tarama, çizimin birimlerinde gerçek boyutunda gelir; `SCANATTACH` yine de genişlik sorar.
- **Nokta bulutları eklentisi**: birimi belirtmeyen bir dosyadan bulut oluşturduğunuzda sorar ve bulutun sayılarını taşıdığı birimle etiketler.

## Bilmeniz iyi olanlar

- Bir DWG veya DXF'i kendi çizimi olarak açmak hiçbir şey sormaz: komut satırı dosyanın hangi birimleri belirttiğini veya hiçbirini belirtmediğini söyler. Özellikler bir çizimin birimlerini ayarlar.
- Bu çizimin de birimi yoksa bir dosya dönüştürülemez: sayı sayı yerleştirilir ve komut satırı bunu söyler.
- Yanıt, bu bilgisayarda, her CadCraft uygulamasında o dosya için hatırlanır. Bir dahaki sefere geldiğinde size sorulmaz ve komut satırı hatırlanan birimlerin kullanıldığını söyler.
- Yeniden sorulması için: komut paleti ({{key:Mod+K}}) › **İçe aktarılan dosyaların birimleri için yeniden sor**.
