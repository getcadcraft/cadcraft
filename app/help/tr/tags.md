---
title: Etiketler: listeleri besleyen öznitelikler
summary: Bir etiket tanımlayın (türü, alabileceği değerler, uygulandığı bloklar), blok başvurularına atayın ve başvuruları CSV olarak kaydedebileceğiniz bir liste hâlinde görün.
keywords: etiketler, etiket, öznitelik, liste, veri çıkarma, özellik, yangın dayanımı, seçim listesi, blok başvurusu, TAGS, csv
from: 9b90bacc
---

Bir **etiket**, bir tanımı olan bir blok özniteliğidir: hangi tür değeri tuttuğu, hangi değerlerin izinli olduğu ve hangi bloklara uygulandığı. Değerler sıradan blok öznitelikleridir; bu nedenle başka her program bunları okur ve {{cmd:ATTEDIT}} bunları gösterir. Yeni olan yalnızca tanımlardır ve çizimde saklanırlar.

## Tanımlayın ve atayın

{{cmd:TAGS}} yazın ve şunlardan birini seçin:

- {{ui:Tanımla}}: bir ad (harfler, rakamlar, boşluk, `_ . -`), bir tür (`text`, `number`, `integer`, `yesno`, `length`, `angle`), `;` ile ayrılmış izinli değerler (herhangi biri için boş bırakın) ve uygulandığı blok adları (`DOOR*`, DOOR ile başlayan her bloğu eşleştirir; boş bırakmak her bloğu anlamına gelir).
- {{ui:Takım}}: blok başvuruları seçiliyken `FireRating=60 min; Width=850` yazın. İzinli listenin dışındaki bir değer veya sayı türündeki bir etiket için sayı olmayan bir değer reddedilir ve bu belirtilir. Tek bir geri alma adımıdır. Özniteliği olmayan bir blok, bunu gizli bir öznitelik olarak alır.
- {{ui:Liste (tablo)}}: bir etiketin uygulandığı her blok başvurusu, isteğe bağlı olarak bir etikete veya blok adına göre gruplanmış; yazdırılır ve CSV olarak kaydedilir.
- {{ui:Kaldır}}: bir tanımı unutur; değerler başvurularda kalır.

Bir etiketi yeniden adlandırmak, her başvuruda değerlerini de yeniden adlandırır. Öznitelik adlarında olduğu gibi etiket adları da büyük/küçük harf duyarlı değildir.
