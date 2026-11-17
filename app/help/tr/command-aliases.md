---
title: Komut takma adlarını düzenleyin
summary: Kendi komut takma adlarınızı tanıdık biçimde tek bir metin dosyasında tutun; bir .pgp dosyasını içe ve dışa aktarın ve REINIT ile yeniden yükleyin.
keywords: takma ad, takma adlar, aliasedit, pgp, kısayol, kısa ad, reinit, klavye, özelleştir, takma adları düzenle
from: 6ab6fa0e
---

## Öğrenecekleriniz

{{cmd:LINE}} için `LL` gibi, kendi kısa adlarınızı komutlar için nasıl ekleyeceğiniz; hepsi tek bir metin dosyasında.

## Takma ad ekleyin

1. {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Takma adları düzenle…}} seçeneğini açın ya da {{cmd:ALIASEDIT}} yazıp {{key:Enter}} tuşuna basın.
2. Takma adı, bir virgül ve yıldızdan sonra komutu içeren bir satır ekleyin:

```
LL,     *LINE
```

3. {{ui:Kaydet}} tıklayın. Komut satırı, takma adlarınızdan kaçının kullanımda olduğunu bildirir.
4. `LL` yazın ve {{key:Enter}} tuşuna basın: LINE başlar.

Takma adlarınız CadCraft'ın kendi takma adlarının üzerinde yer alır. Sizin satırınız, aynı adlı yerleşik bir takma adı geçersiz kılar; satırınızı kaldırın, yerleşik olan geri gelir.

## CadCraft'ın kabul etmediği satırlar

Düzenleyici, yazarken her sorunu satır numarasıyla listeler:

- komut yoktur;
- takma ad, kendisi bir komutun adıdır (`LINE, *CIRCLE` LINE'ı gizlerdi);
- satır `ALIAS, *COMMAND` biçiminde değildir;
- aynı takma ad iki satırda yer alır (sonraki olan geçerlidir).

`NOTEPAD, START, 1, *File to edit: ,` gibi bilgisayarınızda bir program başlatan satırlar, bir not ile atlanır: tarayıcıdaki bir uygulama program başlatamaz.

## Takma adlarınızı başka bir programdan getirin

1. Takma ad düzenleyicisinde {{ui:.pgp içe aktar…}} seçeneğine tıklayın ve dosyayı seçin. Çizimin üzerine bir `.pgp` dosyası da sürükleyebilirsiniz.
2. Listelenen sorunları kontrol edin (CadCraft'ta olmayan komutlar reddedilir, diğerleri çalışır).
3. {{ui:Kaydet}} tıklayın.

{{ui:.pgp dışa aktar}}, CadCraft'ın takma adlarını ve sizinkileri aynı biçimde tek bir dosyaya kaydeder.

## Dosyayı yeniden yükleyin

Takma ad dosyanızı yeniden uygulamak için {{cmd:REINIT}} yazın ve {{key:Enter}} tuşuna basın. Dosya bu tarayıcıda tutulur; masaüstü uygulaması onu kendi klasöründe tutacak ve bulut hizmeti onu eşitleyecektir.

## Her komut için klavye kısayolları

Takma ad yazılır; kısayol ise bir tuştur. Bir komuta kendi tuşunuzu atamak için:

1. {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Klavye kısayolları…}} seçeneğine tıklayın ya da `KEYS` yazıp {{key:Enter}} tuşuna basın.
2. {{ui:Tuş}} kutusuna tıklayın ve tuşlara basın, örneğin {{key:Alt+Shift+C}}.
3. {{ui:Çalıştırır}} alanına komutu yazın; isterseniz arkasından yazılacakları da: `CIRCLE` ya da `ZOOM E`.
4. {{ui:Ekle}} tıklayın.

Bir tuşun, bir harf ya da rakamla birlikte {{key:Mod}} ya da {{key:Alt}} olması ya da boşta bir işlev tuşu ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}) olması gerekir. CadCraft, uygulama ya da tarayıcının zaten kullandığı tuşlar ile bir Araçlarım düğmesinin sahip olduğu tuşlar ([Kendi düğmeleriniz](topic:my-tools) bölümüne bakın) reddedilir ve kutu nedenini gösterir. Kısayollar bu tarayıcıda (ya da masaüstü uygulamasında) tutulur; {{ui:Kaldır}} bir kısayolu siler.
