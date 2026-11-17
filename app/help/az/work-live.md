---
title: Bir çertyoj üzərində birlikdə işləmək: Canlı TeamWork ilə
summary: CadCraft Studio-dan Canlı TeamWork sessiyasında olarkən CadCraft-da nə dəyişir: başqalarının kursorları və seçimləri, kimsənin redaktə etdiyi obyektlər, host-un kilidləri, sizin geri qaytarmanız və eyni şəbəkədə brauzerdən qoşulmaq.
keywords: canlı, canlı teamwork, studio canlı, birlikdə, əməkdaşlıq, birgə redaktə, sessiya, canlı paylaş, qoşul, kursor, saxlanılmış, redaktə, kilid, livelock, liveunlock, livehold, qatı saxla, sahəni saxla, asma kilid, geri qaytar, host, köməkçi, eyni fayl, çox adam, yavaş, limit, kim dəyişdi, son redaktələr, redaktə jurnalı
from: 0497d2a3
---

## Nəyi öyrənəcəksiniz

Bir çertyoj üzərində eyni vaxtda bir neçə nəfər işləyəndə nə görürsünüz və redaktələrinizə nə olduğunu. CadCraft Studio Canlı TeamWork sessiyasını başladır və ona qoşulur (Canlı paylaş, Qoşul); bu səhifə çertyojun özü haqqındadır.

## Hamı eyni vaxtda çəkir

Adi kimi çəkin və redaktə edin. Öz redaktələriniz başqalarında olmamışdan əvvəl belə dərhal görünür, onların redaktələri isə etdikdən bir az sonra ekranınızda görünür. Hər əmr işləyir: çəkmə, dəyişdirmə, qatlar, bloklar, vərəqlər, ölçülər, məhdudiyyətlər.

Eyni obyekti iki nəfər dəyişə bilər. Fərqli şeyləri dəyişdikdə, məsələn, bir xəttin rəngini və son nöqtəsini, hər iki dəyişiklik saxlanılır. Eyni şeyi dəyişdikdə isə sonrakı dəyişiklik qalib gəlir.

Yalnız sizə məxsus qalanlar: cari qat, yeni obyektlər üçün rəng və mətn hündürlüyü, ölçü parametrləriniz, görünüşünüz, bölünmüş ekran və UCS. Çertyoj paylaşılır; ona necə baxdığınız yox.

## Çertyojunuzda digər insanlar

- **Kursorlar:** hər kəsin göstəricisi öz adı və öz rəngi ilə, və işlətdiyi əmrlə göstərilir. Ekranınızda olanın yanında işləyən adamların kursorlarını görürsünüz.
- **Seçimlər:** kimsənin seçdiyi şey onun rəngi ilə konturlanır.
- **Redaktə olunur:** kimsənin seçdiyi obyektdə "Ana redaktə edir" kimi etiket var. Onun rəngini dəyişə və ya köçürə bilərsiniz, lakin onlar buraxana qədər silə, parçalaya və ya yenidən yaza bilməzsiniz. Onu seçmək kimdə olduğunu deyir.
- **Ən son kim dəyişdi:** bu sessiyada başqasının dəyişdirdiyi bir obyekti seçin və əmr sətri kimin və nəyi dəyişdiyini deyir ("Ben bunu sonuncu dəyişdirib: CIRCLE."). Studio-nun Dəyişən paneli bütün son redaktələri {{ui:Son redaktələr}} altında siyahıya salır. Bunların heç biri çertyojda saxlanılmır: sessiya qədər davam edir.

## Orada işləyərkən qatı və ya sahəni saxlayın

Bir neçə nəfərlə böyük çertyojda, hələlik hansı hissənin sizin olduğunu bildirin:

1. `LIVEHOLD` yazın və {{key:Enter}} basın.
2. `L` seçin və qat adı yazın (Enter cari qatı saxlayır), ya da `A` seçin və sahənin iki küncünü seçin.
3. Həmin qatdakı və ya həmin sahədəki obyektlərə başqalarının redaktələri geri alınır və onlara orada işlədiyiniz deyilir. Sahəni kəsikli çərçivə kimi görürsünüz; başqaları onu sizin rənginizlə və adınızla görür, saxladığınız qatlar isə onların çertyojunun yuxarı solunda siyahıya alınır.
4. `LIVEHOLD`, sonra `R` hər saxladığınızı buraxır. Sessiyadan çıxmaq da onu buraxır.

Sessiyadakı hər kəs saxlaya bilər, host da daxil olmaqla; host-un kilidləri üstəlik hələ də işləyir. Saxlama heç vaxt faylda saxlanılmır.

## Redaktə geri alındıqda

Host-un çertyoj nüsxəsi hər redaktəni yoxlayır. Bəziləri daxil ola bilmir, CadCraft onları ekranınızda geri alır və əmr sətrində səbəbini deyir, məsələn:

- kimsə siz etməzdən bir az əvvəl obyekti, ya da ona lazım olan qatı və ya bloku silib;
- kimsə həmin obyekti redaktə edir, ya da onun qatını və ya içində olduğu sahəni saxlayır;
- host onu kilidləyib;
- yerləşdirdiyiniz blok təmizlənib, ya da sildiyiniz qatda hələ obyektlər var.

## Geri qaytarma yalnız sizin işinizi geri qaytarır

{{key:Mod+Z}} və {{ui:Geri qaytar}} sizin son əmrinizi, bütövlükdə, geri qaytarır və digərlərinin işinə toxunmur. Əgər bundan sonra kimsə eyni şeyi dəyişibsə, heç nə geri qaytarılmır və əmr sətri kimin dəyişdiyini deyir. {{key:Mod+Y}} təkrarlayır.

## Kilidlər (host)

Host obyektləri və ya bütöv qatı qoruyaraq heç kim onları dəyişə bilməsin, host da daxil olmaqla, kilid açılana qədər:

1. Obyektləri seçin, sonra `LIVELOCK` yazın və {{key:Enter}} basın. Ya da heç nə seçmədən `LIVELOCK` yazın və adına görə qatı kilidləmək üçün `L` seçin: sonra həmin qata əlavə olunan obyektlər də kilidlənir.
2. Kilidlənmiş obyektlər hamının ekranında kəsikli çəkilir və "Host tərəfindən kilidlənib" etiketi ilə.
3. `LIVEUNLOCK` onların kilidini eyni qaydada açır.

Kilidlər sessiyaya aiddir: sessiya bitəndə bitir və heç vaxt faylda saxlanılmır.

## Eyni faylla qoşulun

Əgər host-un açdığı faylın eyni nüsxəsini açmısınızsa (paylaşılan qovluqdan və ya eyni nüsxədən), Studio-dakı öz CadCraft pəncərənizdən qoşulun: {{ui:Dəyişən}} panelini açın və host-un kodu ilə {{ui:Burada birləşdir}} istifadə edin. Yalnız host-un onu açdığı vaxtdan bəri edilən dəyişikliklər gedir, buna görə böyük çertyoj dərhal hazırdır. Əgər faylınız başqa fayldırsa, host-un çertyoju ekranınızda onu əvəz edir (faylınız olduğu kimi qalır). Bu, yalnız açdığınız vaxtdan çertyojunuz dəyişməyibsə işləyir.

## Canlı sessiyada köməkçilər

CadCraft pəncərənizə qoşulmuş köməkçi (AI köməkçilərlə işləmək haqqında yardıma bax) sessiyaya öz iştirakçısı kimi qoşulur və hamıya "Köməkçi (vasitəsilə: <adınız>)" kimi göstərilir. Host onu bir insan kimi buraxır; host-un öz köməkçisi dərhal qoşulur. Onun dəyişikliklərinin öz geri qaytarması var: sizin {{key:Mod+Z}} sizin işinizi geri qaytarır, köməkçinin geri qaytarması isə yalnız onun öz işini. Siz onu əlaqədən kəsdikdə və ya çıxdıqda sessiyadan çıxır və yalnız siz redaktə edə bildiyiniz müddətcə sessiyada işləyə bilər.

## Brauzerdən qoşulun

Studio olmayan komanda yoldaşınız eyni şəbəkədə telefon, planşet və ya kompüterlə host-un kodunun altındakı şəkli skan edə bilər. CadCraft brauzerdə açılır, əmr sətrində adınızı soruşur və host sizi buraxdıqdan sonra host-un çertyoju ilə dolur. Dəvət linki kimsəyə başqa şəbəkədən qoşulmağa imkan verir: host tətbiq üçün Team Cloud Plan yerinə ehtiyac duyur, qalanları pulsuz qoşulur və link yalnız host-un sessiyası açıq olduğu müddətcə işləyir.

## Bir çertyojda çox adam

Hər redaktə sessiyadakı hamıya gedir, buna görə nə qədər çox adam varsa, hər dəyişiklik hər birinə çatmaq üçün bir o qədər uzun çəkir və yavaş noutbuklar və bağlantılar birinci geri qalır. Sessiyanın adi ölçüsü 20 nəfərdir; host bir sessiya üçün daha çoxuna icazə verə bilər (bax: Dəyişən ilə birlikdə işləmək haqqında yardım). Çox adamla çertyoj yavaş hiss olunarsa, az adam, eyni anda redaktə edənlərin az olması və ya daha yaxşı bağlantı kömək edir.

## Sessiya bitdikdə

Çertyojı yalnız host saxlayır. Host sessiyanı bitirəndə, qalanları saxlanmamış bir nüsxə saxlayır: saxlamaq istəyirsinizsə, onu saxlayın.

:::note
Geri alınmış bir şey, çertyojunuzu yenidən açana qədər öz ekranınızda ətrafındakı obyektlərin üzərində çəkilir. Üst-üstə düşən ştrixləmələr və doldurulmuş obyektlər host-un nüsxəsindən fərqli görünə bilər; çertyojun özü eynidir.
:::
