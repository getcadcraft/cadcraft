---
title: "Standart siyasətlər: yeni çertyojun nədən başlayacağını təyin edin"
summary: Yeni çertyojun hansı vahidlərlə, uzunluq formatı, dəqiqlik, mətn hündürlüyü və vərəq kağızı ilə başlayacağını metrik və imperial iş üçün bir dəfə deyin, siyasətləri isə ofis daxilində kiçik fayl kimi paylaşın.
keywords: standart, standartlar, standart siyasətlər, siyasət, ofis standartı, ofis standartları, şablon, yeni çertyoj, vahidlər, insunits, uzunluq formatı, memarlıq, dəqiqlik, luprec, mətn hündürlüyü, vərəq kağızı, a1, paylaşma, ixrac, idxal, json
from: 7b80fd13
---

## Nə edəcəksiniz

CadCraft-a yeni çertyojun nədən başlamalı olduğunu deyin ki, ofisdə heç kəs hər dəfə UNITS komandasını işlədib eyni şeyləri dəyişməli olmasın. Bu, əlavədir: onu aktiv edənə qədər söndür, və təyin etmədiyiniz siyasət CadCraft-ın öz standartını olduğu kimi saxlayır.

:::note
Bunlar **yeni** çertyojlar və **yeni** vərəqlər üçün standartlardır. Artıq başladığınız çertyoj dəyişmir, açdığınız çertyoj da dəyişmir.
:::

## Addımlar

1. Parametrləri açın, {{ui:Əlavələr}} bölməsinə keçin və {{ui:Standart siyasətlər}} aktiv edin.
2. Parametrlərdə **CadCraft** sekmesini açın və soldakı siyahıdan {{ui:Standart siyasətlər}} seçin.
3. İstədiyiniz siyasətləri təyin edin. Hər biri **CadCraft-ın öz** dəyərindən başlayır. **Metrik** və **İmperial** qutusu olan siyasət hər çertyoj növü üçün bir qiymət alır; yalnız lazım olanları doldurun.
4. Saxla düyməsi yoxdur: hər dəyişiklik edildiyi anda saxlanılır.
5. Yeni çertyoj başlayın. Onda təyin etdiyiniz vahidlər, uzunluq formatı, dəqiqlik və mətn hündürlüyü olur, onun ilk yeni vərəqi isə seçdiyiniz kağız üzərində olur.

## Siyasətlər

- **Yeni çertyojun vahidləri**: heç biri, millimetr, santimetr, metr, düym və ya fut.
- **Uzunluq formatı** və **Uzunluq dəqiqliyi**: UNITS komandasının yeni çertyoj üçün təyin etdiyi.
- **Yeni mətnin hündürlüyü**, çertyoj vahidlərində.
- **Yeni vərəqin kağızı**: Yeni vərəqin istifadə etdiyi kağız.
- **Kağızda şərh ölçüləri** (Parametrlər › Ümumi › Standart siyasətlər): ofisin çap olunmuş millimetrlə hündürlükləri. CadCraft qeydlər və etiketlər üçün olanı istifadə edir: {{cmd:ANNOSCALE}} yeni mətnin başladığı hündürlüyü şərh miqyasında o hündürlüyə təyin edir. Bax: [Vahidlər, kağızlar və miqyaslar](topic:units-papers-scales#annotate-by-scale).

Düym və ya futla olan çertyoj imperial dəyərləri istifadə edir; qalan hər çertyoj metrik dəyərləri. Vahidsiz çertyoj Parametrlər › Ümumi › Standart siyasətlərdə təyin olunmuş vahid sistemini istifadə edir, heç nə təyin olunmayıbsa Metrik.

## Ofis daxilində paylaşın

1. Parametrlərdə **Ümumi** sekmesini açın və {{ui:Standart siyasətlər}} seçin.
2. {{ui:Fayla saxla}} klikləyin. `.ccdefaults.json` ilə bitən kiçik fayl alırsınız.
3. Başqa kompüterdə əlavəni aktiv edin, eyni yeri açın və {{ui:Fayldan yüklə}} klikləyin. Faylın siyasətləri həmin kompüterdəkiləri əvəz edir.

Bir fayl hər CadCraft tətbiqinin siyasətlərini saxlayır, ona görə eyni fayl BimCraft-da da işləyir.

## Bilmək yaxşıdır

- Vərəq miqyası üçün siyasət yoxdur: yeni vərəqin görünüşü çertyoja uyğunlaşdırılır və miqyasını vərəqdə təyin edirsiniz.
- Ölçü üslubu üçün siyasət yoxdur: yeni çertyojda adlı ölçü üslubları olmur. Ölçüləri DIMSTYLE ilə qurun, ya da öz üslubunuz olan çertyojdan başlayın.
- Fayl sadə, açıq JSON-dur. Faylda adı çəkilən, lakin bu versiyanın tanımadığı siyasət kənarda qalır və mesajda adı deyilir; qalanları yenə yüklənir.
- Siyasətlər çertyojda yox, bu brauzerdə saxlanılır. Əlavəni söndürün və hər şey yenidən CadCraft-ın öz standartı olur.
