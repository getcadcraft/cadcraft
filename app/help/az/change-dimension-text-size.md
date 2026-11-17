---
title: Ölçü mətninin ölçüsünü dəyişin
summary: Ölçü mətnini böyüdün və ya kiçildin, həm növbəti yaradacağınız ölçülər üçün, həm də çertyojda artıq olanlar üçün.
keywords: ölçü mətninin ölçüsü, mətnin hündürlüyü, dimtxt, dimscale, ölçü mətni çox kiçik, ölçü mətni çox böyük, böyük ölçü mətni, annotasiya miqyası
from: 30e40633
---

## Növbəti yaradacağınız ölçülər üçün

1. {{key:Esc}} basın ki heç nə seçilməsin: sağ panel {{ui:Cari parametrlər}} göstərir.
2. Paneli aşağı sürüşdürün, {{ui:Yeni ölçülər}}ə qədər. {{ui:Mətn hündürlüyü}} sahəsinə kağızda istədiyiniz hündürlüyü yazın (məsələn 2,5 mm üçün `2.5`, və ya `3/32"`) və {{key:Enter}} basın.
3. {{ui:Ümumi miqyas}} sahəsini çap miqyasına təyin edin (1:50 üçün `50`, 1/4" = 1'-0" üçün `48`): hər ölçü bununla vurulur.

Əmr sətrində {{cmd:DIMTXT}} hündürlüyü, {{cmd:DIMSCALE}} isə ümumi miqyası təyin edir.

## Çertyojda artıq olan ölçülər üçün

1. Ölçüləri seçin (birini və ya bir neçəsini: Xassələrin yuxarısındakı siyahıda {{ui:Ölçü}} seçin).
2. Yeni {{ui:Mətn hündürlüyü}} yazın ({{ui:Mətn}} bölməsində) və ya yeni {{ui:Ümumi miqyas}} yazın ({{ui:Yerləşmə}} bölməsində, aşağıda), sonra {{key:Enter}} basın.

Onlar dərhal, bir geri qaytarma addımında yenidən çəkilir. Başqa proqramın faylındakı ölçü onu dəyişdiyiniz anda CadCraft üslubunda yenidən çəkilir.

:::tip
Ekranda düz görünən, lakin çap olunmuş vərəqdə çox kiçik olan mətn adətən ümumi miqyasın 1 olmasından irəli gəlir: onu vərəqin miqyasına təyin edin.
:::

Bütün parametrlər üçün bax: [Ölçü ölçüləri, onluq kəsrlər və miqyas](topic:dimension-settings).
