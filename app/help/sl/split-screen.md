---
title: Razdelite zaslon
summary: Prikažite risbo v dveh, treh ali štirih podoknih z lastno povečavo, postavite list ob modelu in odprite več risb drugo ob drugi.
keywords: razdeli, razdeljen zaslon, podokna, vports, pogledna okna, v mozaiku, razporedi, drugo ob drugi, zloženo, dve risbi, zavihki, zavihki dokumentov, primerjaj, ločilnik, model in list, več risb, odprte risbe
from: ee2f034b
---

## Kaj se boste naučili

Kako si ogledate eno risbo v več podoknih hkrati, vsako s svojo povečavo, ter kako odprete več risb in jih vidite drugo ob drugi.

## Razdelite eno risbo v podokna

1. Odprite risbo ali narišite nekaj črt in krožnic.
2. Odprite {{ui:Pogled}} › {{ui:Več}} in izberite {{ui:Razdeli drugo ob drugi}} (ali vnesite {{cmd:VPORTS}}, nato `2` in pritisnite {{key:Enter}}).

Območje risbe se razdeli na dve podokni, obe prikazujeta isti pogled. Aktivno podokno ima moder okvir in dobi križec.

3. Kliknite v drugo podokno. To postane aktivno. (Prvi klik samo preklopi podokno; za izbiro kliknite znova.)
4. Povečajte s kolescem. Poveča se samo to podokno.
5. Povlecite črto med podokni, da eno naredite širše. {{key:Home}} na izbranem ločilniku ga vrne na sredino.

{{cmd:VPORTS}} sprejme tudi `3` (dve podokni na eni strani in eno veliko na drugi: `L` ali `R`), `4` ter `SI`, da je spet eno podokno. Pogled aktivnega podokna nato zapolni območje. Na listu {{cmd:VPORTS}} namesto tega doda pogledno okno na list (kot AutoCAD); tam vnesite {{cmd:SPLIT}} ali uporabite meni Pogled.

## Rišite iz enega podokna v drugo

1. Razdelite drugo ob drugi in vsako podokno povečajte na drug kot risbe.
2. Vnesite `L` in pritisnite {{key:Enter}}, nato kliknite prvo točko v levem podoknu.
3. Enkrat kliknite v desnem podoknu, da postane aktivno, nato tam kliknite drugo točko.

Črta poteka med obema mestoma. Ukaz se nadaljuje, ko menjate podokna, gumijasti trak pa se prikaže v vseh podoknih.

## Model ob listu

1. Razdelite drugo ob drugi.
2. Kliknite desno podokno, nato kliknite zavihek lista pod risbo.

Desno podokno prikazuje list, levo še vedno model. Vsako podokno ohrani svoj prostor, zato lahko rišete na modelu in spremljate, kako sledi pogledno okno lista.

## Več risb v enem oknu

1. Odprite risbo. Nato odprite drugo (ali pritisnite {{ui:Nova}}).

Vsaka risba se odpre v svojem zavihku nad območjem risbe. Kliknite zavihek za preklop; ukazna vrstica, podokna in razveljavitev sledijo risbi, na katero preklopite. {{key:Mod+C}} v eni risbi in {{key:Mod+V}} v drugi kopira predmete med njima.

2. Kliknite {{ui:Razporedi odprte risbe drugo ob drugi}} (ikona razdelitve na koncu zavihkov) ali ikono zloženo poleg nje.

Vsako podokno zdaj prikazuje eno od odprtih risb, največ štiri. Kliknite podokno, da delate v tisti risbi.

3. Kliknite {{ui:×}} na zavihku, da zaprete to risbo. Če ima neshranjene spremembe, vas CadCraft najprej vpraša.

:::tip
Odpiranje risbe, ko okno vsebuje samo novo, nedotaknjeno risbo, uporabi ta zavihek namesto dodajanja novega.
:::

## Skupni pomik in povečava

Za primerjavo dveh revizij jih razporedite drugo ob drugi, nato kliknite {{ui:Poveži poglede podoken}} (ikona povezave na koncu zavihkov), ali jo izberite v {{ui:Pogled}} › {{ui:Več}}, ali vnesite {{cmd:LINKVIEWS}} in `ON`. Zdaj pomik ali povečava v enem podoknu premakne vsa podokna, ki prikazujejo model (ali vsa podokna, ki prikazujejo list), na isto mesto, tako da ostaneta risbi poravnani. {{cmd:LINKVIEWS}} `OFF` znova dovoli, da se vsako podokno premika samo.

## Pogoste napake

- **Moj klik ni naredil ničesar.** Podokno je postalo aktivno. Za izbiro ali risanje kliknite znova.
- **Kolesce je povečalo napačno podokno.** Kolesce povečuje podokno pod kazalcem in ga naredi aktivnega.
- **Podokna so se vrnila na eno.** Odprtje risbe prikaže risbo tako, kot je bila shranjena; risba, shranjena brez podoken, se odpre v enem podoknu.
- **Ob zapuščanju strani opozori na neshranjene spremembe, ki jih ne vidite.** Drug zavihek hrani risbo s spremembami. Preklopite nanj in shranite ali zapustite brez shranjevanja.
