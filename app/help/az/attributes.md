---
title: Blok atributları
summary: Blok istinadının daşıdığı dəyərlərə baxın və dəyişin, məsələn element nömrəsi və ya istehsalçı, və surətini saxlayanda onları saxlayın.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, başlıq bloku, yerində redaktə, atribut redaktoru, attdef, atributu təyin et, bedit, blok redaktoru, bclose, atribut, atributlar, attdef, attrib, etiket, element nömrəsi, dəyər, görünməz, sabit, blok, xassələr, siyahı, avadanlıq etiketi
from: 34d307c7
---

## Atributlar nədir

Atribut blok istinadı ilə birlikdə gedən adlı dəyərdir: avadanlıq etiketinin element nömrəsi, otaq etiketinin adı, qapının yanğına davamlılıq dərəcəsi. Blokun təyinatı hansı atributlara sahib olduğunu deyir (hər birinin bir **etiketi**, bir **çağırışı**, bir **standart** dəyəri və mətninin yeri, ölçüsü və bucağı var). Hər blok istinadı öz dəyərlərini daşıyır.

Bəzi atributlar **görünməzdir**: məlumat saxlayırlar, məsələn istehsalçı və ya model nömrəsi, amma heç vaxt çəkilmirlər. Bəziləri **sabitdir**: hər istinad üçün eynidir, blok tərəfindən təyin olunur.

## Atributlar haradan gəlir

- Açdığınız DWG və DXF fayllarındakı bloklar öz atributlarını saxlayır, hər istinadın dəyərləri ilə.
- {{cmd:INSERT}} və {{ui:Fayl}} seçimi ilə gətirdiyiniz bloklar öz atributlarını saxlayır. Bax: [Fayldan və ya kitabxanadan daxil edin](topic:insert-from-file-and-library).
- Kitabxana elementləri atributlu blok kimi gəlir: görünən element nömrəsi və elementin məlumatları, görünməz.

- Öz blokunuzu düzəldirsinizsə: əvvəlcə {{cmd:ATTDEF}} ilə atributları təyin edin (aşağıda), sonra bloku yaradanda onları digər obyektlərlə birlikdə seçin.

## Öz bloklarınız üçün atributları təyin edin

1. Blokun xətlərini çəkin, məsələn otaq etiketini.
2. {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Atributu təyin et}} seçin, və ya `ATT` yazın və {{key:Enter}} basın.
3. Tarixçə rejimləri göstərir (`Invisible=No Constant=No Preset=No`). Birini dəyişmək üçün `I`, `C` və ya `P` yazın, düzgün olanda {{key:Enter}} basın. Görünməz dəyərlər saxlanılır, lakin çəkilmir; sabit olan hər istinadda eyni dəyərdir; əvvəlcədən təyin olunmuş atribut blok daxil ediləndə soruşulmur.
4. Etiketi yazın (məsələn `ROOM_NO`: böyük hərflə, boşluqsuz), çağırışı (`Otaq nömrəsi`) və standart dəyəri (`101`).
5. Dəyərin gedəcəyi yeri klik edin, hündürlük və fırlanma verin. Etiket çertyojda görünür.
6. {{cmd:BLOCK}} ilə bloku yaradın, xətləri və atribut təyinatlarını birlikdə seçin. Onları əvəz edən istinad standart dəyərləri alır; hər yeni {{cmd:INSERT}} onları soruşur.

Seçilmiş atribut təyinatı {{ui:Xassələr}}-də {{ui:Etiket}}, {{ui:Çağırış}}, {{ui:Standart}} və rejimləri göstərir.

## Bloku dəyişin: blok redaktoru

{{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Bloku redaktə et}} ({{cmd:BEDIT}}, `BE`) bloku təkbaşına açır: adını yazın (və ya əvvəlcə istinadı seçin). Yuxarıdakı zolaq hansı blokun redaktə olunduğunu göstərir. Obyektlərini adi əmrlərlə çəkin, silin və dəyişin, atribut təyinatlarını əlavə edin və ya dəyişin. Sonra {{ui:Bloku saxla}} klik edin (və ya {{cmd:BCLOSE}} yazın və `S`): hər istinad dəyişikliyi göstərir və bir {{key:Mod+Z}} hamısını geri qaytarır. {{ui:Dəyişiklikləri ləğv et}} (`BCLOSE`, `D`) bloku əvvəlki kimi buraxır.

Atribut təyinatlarını əlavə etdikdə, sildikdə və ya dəyişdikdə, saxlamaq hər istinadı da uyğunlaşdırır: yazdığınız dəyərlər saxlanılır, yeni atribut standart dəyərini alır, silinən gedir və hər atribut təyinatın göstərdiyi yerə qayıdır. Tarixçə neçə istinadın yeniləndiyini göstərir.

## Başlıq blokunu yerində redaktə edin (REFEDIT)

Vərəqdəki başlıq bloku tez-tez başqa blokun içində olur. Onun xətlərini və ya mətnlərini vərəqi tərk etmədən dəyişmək üçün:

1. Başlıq blokunu seçin, sonra {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Yerində redaktə}} (və ya {{cmd:REFEDIT}} yazın).
2. Onun məzmunu öz yerində adi obyektlərə çevrilir; qalan hər şey solğunlaşır və dəyişdirilə bilməz.
3. Dəyişin, silin və ya çəkin: yeni obyektlər bloka daxil olur.
4. Yuxarıdakı zolaqda {{ui:Bloku saxla}} klik edin (və ya {{cmd:REFCLOSE}} yazın və `S`). Hər istinad dəyişikliyi göstərir və bir {{key:Mod+Z}} bütün redaktəni geri qaytarır. {{ui:Ləğv et}} bloku əvvəlki kimi buraxır.

Bağlı çertyoj, dinamik blok və ya yuxarıya və çaprazına fərqli miqyasda istinad yerində redaktə oluna bilməz: bunun əvəzinə {{cmd:BEDIT}} istifadə edin (və ya bağlı çertyojı açın).

:::note
Faylı saxlamazdan əvvəl blok redaktorunda saxlayın və ya ləğv edin: redaktor açıq olarkən saxlanılan fayl bloku əvvəlki halında saxlayır.
:::

## Blok yerləşdirəndə dəyərləri doldurun

1. `I` yazın və {{key:Enter}} basın, blok adını yazın və {{key:Enter}} basın.
2. Yerini klik edin.
3. CadCraft hər dəyəri soruşur, məsələn `Element nömrəsini daxil edin (ITEM) <>`. Dəyəri yazın və {{key:Enter}} basın, və ya mötərizədə göstərilən standart dəyəri saxlamaq üçün {{key:Enter}} basın.

Blok əvvəlcədən təyin olunmuş və sabit kimi qeyd etdiyi dəyərləri soruşmur. Onlar standart dəyərini alır.

## Dəyərlərə baxın və dəyişin

1. Blok istinadını klik edin.
2. Sağ paneldə {{ui:Atributlar}} altında hər etiketin öz dəyəri var. Görünməzlər `gizli` yazır.
3. Dəyəri klik edin, yenisini yazın və {{key:Enter}} basın.

Çertyoj yeni dəyəri dərhal göstərir. Hər dəyişiklik bir addımdır: {{key:Mod+Z}} onu geri qaytarır.

**Atribut redaktoru.** Atributlu istinadı iki dəfə klik edin (və ya {{cmd:EATTEDIT}}): {{ui:Atributları redaktə et}} dialoqu hər etiketi çağırışı və dəyəri ilə siyahıya salır. Yeni dəyərləri yazın; sətri klik edib yalnız bu istinad üçün həmin atributun {{ui:Hündürlük}}, {{ui:Fırlanma}}, {{ui:En əmsalı}}, {{ui:Düzləşdirmə}}, {{ui:Qat}}, {{ui:Rəng}} və {{ui:Görünməz}} dəyərlərini dəyişin.
{{ui:Tətbiq et}} dialoqu açıq saxlayır; {{ui:OK}} tətbiq edib onu bağlayır. Hər {{ui:Tətbiq et}} və ya {{ui:OK}} bir geri qaytarma addımıdır.

**Əmr sətrində** {{cmd:ATTEDIT}} hər dəyəri növbə ilə soruşur: yenisini yazın və ya saxlamaq üçün {{key:Enter}} basın.

## Atribut təyinatlarını dəyişin (BATTMAN, ATTSYNC)

{{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Atribut meneceri}} ({{cmd:BATTMAN}}) blokun atributlarını siyahıya salır: etiketi, çağırışı və ya standartı dəyişin, {{ui:Görünməz}}, {{ui:Sabit}} və ya {{ui:Əvvəlcədən təyin}} qeyd edin və onları yuxarı və aşağı köçürün (dəyərlərin soruşulma sırası). {{ui:İstinadları yenilə (dəyərlər saxlanılır)}} qeyd olunanda {{ui:Tətbiq et}} hər istinadı da uyğunlaşdırır; adı dəyişən etiket öz dəyərlərini saxlayır. Hər {{ui:Tətbiq et}} bir geri qaytarma addımıdır.

{{cmd:ATTSYNC}} istinadları blokun təyinatları ilə əllə uyğunlaşdırır: `S` istinad seçir, `N` blok adlandırır, `A` hər bloku edir. Dəyərlər saxlanılır.

Kitabxana elementinin öz sahələrinin dəyərləri (id, versiya, lisenziya və müəllif qeydi) göstərilir, lakin redaktə olunmur, ki yeniləmələrin yoxlanılması işləsin. Onun element nömrəsi və miqdarı sizindir, onları dəyişə bilərsiniz.

## Siyahıya salın

İstinadları seçin və {{cmd:LIST}} üçün `LI` yazın. Tarixçə hər atributu `TAG = dəyər` kimi göstərir, tətbiq olunan yerdə `(görünməz)` və ya `(sabit)` ilə.

## Köçürmək, fırlatmaq və parçalamaq

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} və {{cmd:MIRROR}} dəyərləri saxlayır; mətn blokla birlikdə gedir və oxunaqlı qalır.
- {{cmd:EXPLODE}} görünən atributları dəyərləri ilə adi mətnə çevirir. Görünməzlər itir.

## Saxlamaq

Saxlanmış DWG və saxlanmış DXF hər atributu saxlayır: hər blokun təyinatlarını (görünməz, sabit və əvvəlcədən təyin olunmuşlar da daxil olmaqla) və hər istinadın dəyərlərini. Digər CAD proqramları onları adi blok atributları kimi oxuyur.

DXF R12-də 255 simvoldan uzun dəyər 255-ə kəsilir və tarixçə bunu bildirir.

## Tez-tez edilən səhvlər

- **Dəyər çertyojda görünmür.** Ya görünməzdir, ya da boşdur. Görünməz dəyərlər sağ paneldə hələ də görünür.
- **Yazdığım dəyər əmr sətrinə getdi.** Əvvəlcə sağ paneldəki dəyər qutusuna klik edin.
