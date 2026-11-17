---
title: Uygulamaları yükle (APPLOAD)
summary: LISP rutinlerini ve iletişim kutusu dosyalarını yükleyin, kaldırın, geçmişten yeniden yükleyin ve kullandıklarınızı Başlangıç takımında tutun.
keywords: appload, ap, uygulama yükle, lisp, lsp, dcl, rutin, başlangıç takımı, kaldır, geçmiş, bırak, yükle, özelleştir, yönet
from: 89e0ee95
---

## Öğrenecekleriniz

Bir LISP rutinini (bir `.lsp` dosyası) komutlarının CadCraft'ta çalışması için nasıl yükleyeceğinizi, nasıl kaldıracağınızı ve CadCraft her başladığında otomatik yüklenmesini nasıl sağlayacağınızı.

## Bir rutin yükleyin

1. {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Uygulama yükle…}} yolunu açın ya da {{cmd:APPLOAD}} (veya `AP`) yazıp {{key:Enter}} tuşuna basın.
2. {{ui:Dosya yükle…}} düğmesine tıklayın ve bir ya da daha fazla `.lsp` dosyası seçin. İletişim kutusu açan bir rutin genellikle bir `.dcl` dosyasıyla birlikte gelir: onu da seçin.
3. İletişim kutusu her dosyanın ne oluşturduğunu söyler, örneğin "delblocks.lsp yüklendi: 1 komut, DELBLOCKS."
4. {{ui:Kapat}} düğmesine tıklayın, rutinin komutunu yazıp {{key:Enter}} tuşuna basın.

`.lsp` ve `.dcl` dosyalarını çizimin üzerine ya da {{ui:Uygulamaları yükle}} iletişim kutusuna bırakabilirsiniz: hemen yüklenirler.

Dosya burada, tarayıcınızda okunur. Hiçbir şey sunucuya gönderilmez.

:::tip
Boş bir komut satırında {{key:Enter}} tuşuna basarak rutinin komutunu, diğer her komut gibi, yeniden çalıştırın. Komut kısaltmalarınız da ona ulaşabilir: bkz. "Komut kısaltmalarını düzenleme".
:::

## Bir rutini kaldırın

{{ui:Uygulamaları yükle}} bölümünde, {{ui:Yüklenen uygulamalar}} altında, dosyanın yanındaki {{ui:Kaldır}} düğmesine tıklayın. Oluşturduğu komutlar, yeniden yükleyene kadar kaybolur.

## Bir rutini CadCraft her başladığında yükleyin

1. Rutini yükleyin.
2. {{ui:Yüklenen uygulamalar}} altında, yanındaki {{ui:Başlangıç takımına ekle}} düğmesine tıklayın.

Bundan sonra CadCraft bu tarayıcıda her başladığında kendiliğinden yüklenir. Bunu durdurmak için, {{ui:Başlangıç takımı}} altında yanındaki {{ui:Kaldır}} düğmesine tıklayın.

{{ui:Başlangıç takımı}}, her dosyanın bir kopyasını bu tarayıcının depolamasında tutar. Rutini değiştirirseniz, yeni dosyayı yükleyin ve yeniden ekleyin.

## acad.lsp ve acaddoc.lsp dosyalarını bir destek klasöründen yükleyin (Studio)

CadCraft Studio'da, {{ui:Uygulamaları yükle}} iletişim kutusundaki {{ui:Destek klasörü}} bilgisayarınızdaki bir klasörü alır. {{ui:Klasör seç…}} düğmesine tıklayın.

CadCraft başladığında o klasördeki `acad.lsp` dosyasını, ardından `acaddoc.lsp` dosyasını okur (adların büyük küçük harf durumu ne olursa olsun), bunları yükler ve sonra Başlangıç takımını yükler. `acaddoc.lsp` her yeni çizim sekmesi açıldığında yeniden okunur. Klasördeki başka hiçbir şey okunmaz; 2 MB'tan büyük bir dosya bir iletiyle atlanır.

Bir dosya `S::STARTUP` adında bir işlev tanımlarsa, dosyalar yüklendikten sonra (Başlangıç takımından sonra da) bir kez çalışır. {{ui:Şimdi yükle}} aynısını isteğe bağlı olarak yapar; {{ui:Temizle}} klasörü unutur.

Tarayıcıda bir sayfa klasör tutamaz; bu yüzden destek klasörü yoktur: yukarıdaki Başlangıç takımını kullanın. Derlenmiş `.fas` ve `.vlx` dosyaları ile yerel programlar reddedilmeye devam eder.

## Geçmişten bir dosyayı yeniden yükleyin

{{ui:Geçmiş}}, bu tarayıcıda yüklediğiniz dosyaları en yenisi önce olacak şekilde listeler. Birinin yanındaki {{ui:Yükle}} düğmesine tıklayarak bilgisayarınızda aramadan onu yeniden yükleyin.

## CadCraft'ın yükleyemediği dosyalar

| Dosya | Nedir | Ne yapmalı |
|---|---|---|
| `.fas`, `.vlx` | derlenmiş ya da korumalı LISP | bunun yerine `.lsp` kaynağını yükleyin |
| `.arx`, `.crx`, `.dbx` | yerel Windows programları | bunları CadCraft'ta çalıştırmanın bir yolu yoktur |
| `.dvb` | bir VBA projesi | bunları CadCraft'ta çalıştırmanın bir yolu yoktur |
| `.craft`, `.lua`, `.py` | CraftScript betikleri | bunları PartCraft'ın Betik çalışma alanında açın |

Uygulamaları yükle iletişim kutusu, siz seçtiğinizde bir dosyanın bunlardan hangisi olduğunu söyler.

## Bir rutini durdurun

{{key:Esc}} tuşuna basın. Rutinin istemlerinden birinde Esc, rutinin beklediği biçimde iptal eder (kendi temizleme işlemi çalışır). Rutin meşgulse ve hiçbir şey sormuyorsa, Esc onu tamamen durdurur ve bunu bildirir; yüklediğiniz rutinler yüklü kalır.

:::note
Bir rutinin çizimde değiştirdiği her şey tek bir adımdır: bir {{key:Mod+Z}} hepsini geri alır.
:::
