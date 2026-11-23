---
title: Komut takma adlarını düzenleyin
summary: Kendi komut takma adlarınızı tanıdık biçimde tek bir metin dosyasında tutun, bir .pgp dosyası içe ve dışa aktarın ve REINIT ile yeniden yükleyin.
keywords: takma ad, takma adlar, aliasedit, pgp, kısayol, kısa ad, reinit, klavye, özelleştir, takma adları düzenle
from: 2282d36f
---

## Neler öğreneceksiniz

Komutlar için kendi kısa adlarınızı nasıl ekleyeceğinizi, örneğin {{cmd:LINE}} için `LL` adını, hepsini tek bir metin dosyasında nasıl tutacağınızı.

## Takma ad ekleme

1. {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Takma adları düzenle…}} yolunu açın ya da {{cmd:ALIASEDIT}} yazıp {{key:Enter}} tuşuna basın.
2. Takma adı, bir virgülü ve yıldızdan sonra komutu yazarak bir satır ekleyin:

```
LL,     *LINE
```

3. {{ui:Kaydet}} düğmesine tıklayın. Komut satırı, kullanımda olan takma adlarınızın sayısını gösterir.
4. `LL` yazıp {{key:Enter}} tuşuna basın: LINE başlar.

Takma adlarınız CadCraft'ın kendi takma adlarının üstünde durur. Aynı adı taşıyan yerleşik bir takma adın yerine sizin satırınız geçer; satırınızı kaldırırsanız yerleşik olan geri gelir.

## CadCraft'ın kabul etmediği satırlar

Düzenleyici, yazarken her sorunu satır numarasıyla listeler:

- komut yoktur;
- takma ad, bir komutun adıdır (`LINE, *CIRCLE` LINE'ı gizlerdi);
- satır `ALIAS, *COMMAND` biçiminde değildir;
- aynı takma ad iki satırdadır (sonraki satır geçerli olur).

Bilgisayarınızda bir programı başlatan satırlar, örneğin `NOTEPAD, START, 1, *File to edit: ,`, bir notla atlanır: tarayıcıdaki bir uygulama program başlatamaz.

## Takma adlarınızı başka bir programdan getirin

1. Takma ad düzenleyicisinde {{ui:.pgp içe aktar…}} düğmesine tıklayın ve dosyayı seçin. Bir `.pgp` dosyasını çizimin üzerine de bırakabilirsiniz.
2. Listelenen sorunları kontrol edin (CadCraft'ta olmayan komutlar reddedilir, diğerleri çalışır).
3. {{ui:Kaydet}} düğmesine tıklayın.

{{ui:.pgp dışa aktar}} CadCraft'ın takma adlarını ve sizinkileri aynı biçimde tek bir dosyada kaydeder.

## Dosyayı yeniden yükleyin

{{cmd:REINIT}} yazıp {{key:Enter}} tuşuna basarak takma ad dosyanızı yeniden uygulayın. Dosya bu tarayıcıda tutulur; masaüstü uygulama onu kendi klasöründe tutacak, bulut hizmeti ise onu eşitleyecektir.

## Bir komutun seçenekleri için harfler

Takma ad bir komutu adlandırır. Bir komutun seçeneklerine yanıt veren harfleri değiştirmek için (ARRAY'de Kutupsal için `P`), bkz. [Komut seçeneklerine kendi harflerinizi verin](topic:option-letters).

## Herhangi bir komut için klavye kısayolları

Takma ad yazılır; kısayol bir tuştur. Bir komuta kendi tuşunuzu vermek için:

1. {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Klavye kısayolları…}} yolunu tıklayın ya da `KEYS` yazıp {{key:Enter}} tuşuna basın.
2. {{ui:Tuş}} kutusuna tıklayın ve tuşlara basın, örneğin {{key:Alt+Shift+C}}.
3. {{ui:Çalıştırır}} alanına komutu yazın ve isterseniz ardından yazılacak şeyi de: `CIRCLE` ya da `ZOOM E`.
4. {{ui:Ekle}} düğmesine tıklayın.

Bir tuş, {{key:Mod}} ya da {{key:Alt}} ile bir harf ya da rakam, ya da boş bir işlev tuşu ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}) olmalıdır. CadCraft, uygulamanın ya da tarayıcının zaten kullandığı tuşlar ve Araçlarım düğmesinin sahip olduğu tuşlar ([Kendi düğmeleriniz](topic:my-tools)) reddedilir ve kutu nedenini söyler. Kısayollar bu tarayıcıda (ya da masaüstü uygulamada) tutulur; {{ui:Kaldır}} birini siler.
