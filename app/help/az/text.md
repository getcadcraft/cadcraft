---
title: Mətn və etiketlər əlavə edin
summary: Tək sətirli mətnlə otaq etiketləri yerləşdirin, yerində yazılan abzas mətni ilə enə sarınan qeydlər yazın və sonra mətni redaktə edin.
keywords: mətn, dtext, mtext, mleader, multileader, istinad, revcloud, düzəliş buludu, bulud, tap, əvəz et, tap və əvəz et, abzas, sarınma, sətirarası interval, etiket, qeyd, şərh, hündürlük, düzləşdirmə, textmask, fon maskası, maska, wipeout, fırlanma, mətni redaktə et, ddedit, textedit, şrift
from: 4b76be99
---

## Nə yaradacaqsınız

Otaqlarında mərkəzləşdirilmiş iki otaq etiketi, enə görə sarınan bir qeyd, sonra isə etiketlərdən birində düzəliş.

## Mətnin hündürlüyü və çertyojun miqyası

Mətnin hündürlüyü çertyoj vahidləri ilə verilir. Millimetrlə çertyojda, 1:50 miqyasında çap ediləcək mətn kağızda 2.5 mm hündürlükdədirsə, modeldə 2.5 × 50 = 125 vahid hündürlükdə olmalıdır. Vərəq nişanında kağız vahidləri ilə çəkirsiniz, buna görə orada 2.5 kağızda 2.5 mm deməkdir.

## Mərkəzləşdirilmiş etiket yerləşdirin

1. `DT` yazın və {{key:Enter}} basın (və ya alətlər panelində {{ui:Text}} düyməsini klikləyin). Sorğu belə görünür: `Mətnin başlanğıc nöqtəsini göstərin [Düzləşdirmə (J)]:`
2. `J` yazın və {{key:Enter}} basın.
3. `Bir seçim daxil edin [Sol (L)/Mərkəz (C)/Sağ (R)/Orta (M)/Yuxarı sol (TL)/Orta mərkəz (MC)] <L>:` sorğusunda `MC` yazın və {{key:Enter}} basın.
4. `Mətnin əlavə nöqtəsini göstərin` sorğusunda bir otağın ortasını klikləyin.
5. `Hündürlüyü göstərin` sorğusunda `250` yazın və {{key:Enter}} basın.
6. `Mətnin fırlanma bucağını göstərin <0>` sorğusunda {{key:Enter}} basın.
7. `Mətni daxil edin` sorğusunda `MUTFAQ` yazın və {{key:Enter}} basın.

Etiket klikləyiniz nöqtənin üzərində, mərkəzdə görünür.

8. Əmri bitirmək üçün boş `Mətni daxil edin` sorğusunda {{key:Enter}} basın.

## Enə sarınan qeyd yazın

Abzas mətni ({{cmd:MTEXT}}) bir enə sarınır və birbaşa çertyojun üzərinə yazılır.

1. `T` yazın və {{key:Enter}} basın, və ya alətlər panelində {{ui:Paragraph}} düyməsini klikləyin.
2. `Birinci küncü göstərin` sorğusunda qeydin yuxarı-sol küncünün yerini klikləyin.
3. Əvvəlcə hündürlüyü dəyişmək üçün `H` yazın, {{key:Enter}} basın, `250` yazın və {{key:Enter}} basın.
4. `Əks küncü göstərin [Hündürlük/Düzləşdirmə/Sətirarası interval/Fırlanma/En]` sorğusunda birinci küncün sağını klikləyin. Aralarındakı məsafə mətnin sarınacağı eni müəyyən edir; aşağıya nə qədər klikləməyinizin enə təsiri yoxdur.
5. Çertyojun üzərində kursorlu bir qutu açılır. `BAŞQA QEYD EDİLMƏDİKDƏ BÜTÜN ÖLÇÜLƏR MİLLİMETRLƏDİR` yazın. Sözlər yazdıqca bu enə görə sarınır.
6. Yeni abzas başlamaq üçün {{key:Enter}} basın və `YERDƏ YOXLAYIN` yazın.
7. {{key:Mod+Enter}} basın, {{ui:OK}} düyməsini klikləyin və ya qutunun xaricində hər hansı yerə klikləyin. Qeyd bir obyekt olur.

Qutunun üstündəki panel yazdığınız zaman {{ui:Height}}, {{ui:Line spacing}} (1 normaldır, 1.5 yarım dəfə artıqdır), {{ui:Width}} (0 = sarınma yoxdur) və {{ui:Justify}} dəyərlərini dəyişir. {{key:Esc}} və ya {{ui:Cancel}} heç nə əlavə etmədən onu bağlayır.

İkinci küncdə seçimlər: `H` hündürlük, `J` düzləşdirmə (`TL` yuxarı-sol … `BR` aşağı-sağ: yerində qalan küncü və ya qutunun ortasını göstərir), `L` sətirarası interval, `R` fırlanma, `W` ikinci küncün yerinə yazılan en.

:::note
Qutu açıq olduqda {{key:Space}} boşluq yazır, {{key:Enter}} isə yeni abzas başladır. Saxlanılmış DWG abzas mətnini MTEXT kimi saxlayır; DXF R12-də abzas mətni yoxdur, buna görə hər sətir ayrıca mətn kimi saxlanılır.
:::

### Bunun əvəzinə bir neçə tək sətir

{{cmd:TEXT}} (`DT`) hər dəfə bir sətir soruşur: hər {{key:Enter}} növbəti sətiri başladır və mətnin hündürlüyünün 1.667 mislinə bərabər aşağıda yerləşdirir. Hər sətir ayrıca obyektdir. Bitirmək üçün boş sətirdə {{key:Enter}} basın.

## Düzləşdirmə seçimləri

| Seçim | Klikləyiniz nöqtə |
|---|---|
| Sol (standart) | Əsas xəttin sol ucu |
| Mərkəz | Əsas xəttin ortası |
| Sağ | Əsas xəttin sağ ucu |
| Orta, MC | Mətnin ortası, həm en, həm də hündürlük üzrə |
| TL | Yuxarı-sol künc |

## Mətni redaktə edin

1. Mətn obyektinə iki dəfə klikləyin. O, yeni abzas mətni ilə eyni qutuda açılır və kursor sonda olur.
2. Sözləri dəyişin.
3. {{key:Mod+Enter}} basın və ya qutunun xaricində klikləyin. Çertyojdakı mətn dəyişir; {{key:Esc}} isə onu əvvəlki kimi buraxır.

{{cmd:TEXTEDIT}} (`ED`) eyni işi görür: mətnləri bir-bir seçin və bitirmək üçün {{key:Enter}} basın.

Mətni sağ paneldə dəyişmək üçün onu seçin: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}} (0 = sarınma yoxdur), {{ui:Line spacing}}, {{ui:Rotation}}, X və Y mövqeyi və {{ui:Justify}}. {{ui:Justify}} siyahısında digər proqramların mətnində bəzən rast gəlinən Aşağı sol seçimi də var.

## Digər proqramlardan gələn abzas mətnində formatlaşdırma

DWG və ya DXF-dəki abzas mətni içində kodlar ola bilər: sözlərə görə rənglər, qalın və maili yazı, altdan xətt, üstdən xətt və üstü çəkilmiş yazı, 1/2 kimi yığılmış kəsrlər və bir sözün fərqli hündürlüyü. CadCraft bu kodları saxlayır, onları çəkir (ekranda və çap olunmuş PDF-də) və dəyişmədən geri yazır.

Belə mətni redaktə etdikdə (iki dəfə klikləmə, {{cmd:TEXTEDIT}}, sağ paneldəki Mətn sahəsi və ya {{cmd:FIND}} ilə Əvəz etmə) onun sadə sözlərini redaktə edirsiniz. Yazdığınız söz yanındakı hissəyə düşür və onun rəngini və üslubunu alır; digər kodlar öz yerində qalır. Yığılmış kəsrin rəqəmlərini dəyişsəniz, o kəsr sadə mətnə çevrilir. Bütün mətni sağ paneldəki Mətn sahəsindən təyin etdikdə kodlar yalnız hansı sözlərin qaldığını müəyyən etmək mümkün olan yerdə saxlanılır.

Şrift adları (`\F`) saxlanılır və yazılır, lakin hər şey bir Helvetica tipli şriftlə çəkilir. Kodları yazmaq üçün hələlik alətlər paneli yoxdur.

## Bir şeyə işarə edin: çoxistinadlar

{{ui:Annotate}} qrupunda {{ui:Leader}} ({{cmd:MLEADER}}, `MLD`) bir ox, istinad xətti, qısa düşmə və qeydi bir obyekt kimi çəkir.

1. {{ui:Leader}} düyməsini klikləyin. `Istinad oxunun yerini göstərin` sorğusunda qeydin nə barədə olduğu yerə klikləyin.
2. `Istinad düşmə yerini göstərin` sorğusunda qeydin yerləşəcəyi yeri klikləyin. Düşmə klikləyiniz tərəfə çevrilir.
3. Açılan qutuya qeydi yazın və {{key:Mod+Enter}} basın.

Birinci sualda `A` və `L` ox ölçüsünü və düşmə uzunluğunu təyin edir; mətnin hündürlüyü yeni ölçülər üçün {{ui:Text height}} və {{ui:Overall scale}} hasilindən gəlir. Sözlərini dəyişmək üçün çoxistinada iki dəfə klikləyin. Tutacaqlar oxu və düşməni hərəkət etdirir; qeyd düşməni izləyir. {{ui:Properties}} bölməsində: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}}, {{ui:Arrowhead size}} və {{ui:Landing distance}}.

:::note
Çoxistinadlar DWG-də real çoxistinad kimi saxlanılır. DXF R12 və ya 2000-də çoxistinad yoxdur, buna görə orada onlar çəkdikləri xətlər, ox və mətn kimi saxlanılır.
:::

## Dəyişiklikləri düzəliş buludu ilə qeyd edin

{{ui:Annotate}} › {{ui:More}} › {{ui:Revision cloud}} ({{cmd:REVCLOUD}}, `RC`) dəyişən yerin ətrafında qövslərdən ibarət bulud çəkir. Tarixçə qövsün uzunluğunu və istifadə olunacaq növü göstərir.

- **Düzbucaqlı** (ilk dəfə): iki künc klikləyin.
- `P` **Çoxbucaqlı**: künclərə klikləyin, {{key:Enter}} buludu bağlayır.
- `F` **Sərbəst**: başladığınız yeri klikləyin və göstəricini klikləmədən sahənin ətrafında gəzdirin; hər qövs uzunluğu qədər bir qövs əlavə olunur. Bağlamaq üçün klikləyin və ya {{key:Enter}} basın.
- `O` **Obyekt**: bağlı polixətt, çevrə və ya ellips (və ya xətt, qövs və ya açıq polixətt) seçin; o, buluda çevrilir. `Istiqaməti tərsinə çevirmək?` sualında `Y` qövsləri içəriyə çevirir.
- `A` **Qövsün uzunluğu**: hər qövsün uzunluğu. Çap miqyasına uyğun olanı seçin.

Bulud bağlı qövslər polixəttidir, buna görə hər formatda saxlanılır.

## Sözləri tapın və əvəz edin

{{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ({{cmd:FIND}}) açıq vərəqdə mətni, blok atributlarının qiymətlərini və ölçü mətnini axtarır (və ya yalnız seçilmiş obyektlərdə).

1. Sözləri {{ui:Find}} sahəsinə yazın. Siyahıda hər yer və say göstərilir.
2. Lazım olarsa {{ui:Match case}}, {{ui:Whole words only}} və ya {{ui:Use wildcards (* and ?)}} seçin və axtarılmayacaq yerlərin işarəsini çıxarın.
3. Həmin obyektləri seçmək üçün {{ui:Select found}} düyməsini klikləyin, və ya yeni sözləri {{ui:Replace with}} sahəsinə yazın (siyahıda hər birinin nəyə çevriləcəyi göstərilir) və {{ui:Replace all}} düyməsini klikləyin. Bir {{key:Mod+Z}} bütün əvəzləmələri geri qaytarır.

Ölçünün ölçülmüş qiyməti mətn deyil, buna görə heç vaxt əvəz olunmur: `<> TYP.` ifadəsində yalnız `TYP.` dəyişdirilə bilər.

## Etiketin arxasındakı xətləri gizlədin

1. Mətnləri seçin, {{cmd:TEXTMASK}} yazın və {{key:Enter}} basın.
2. `B` çertyojun fonunu onların arxasında boyayır; `C` rəng nömrəsi soruşur. `O` maskanı götürür.
3. `Sərhəd ofset əmsalı`: {{key:Enter}} 1.5 saxlayır, yəni mətnin ətrafında yarım mətn hündürlüyü.

Maska ekranda və çap edəndə mətnin altındakı xətləri örtür. DWG 2004 və ya sonrakı və DXF 2000 onu saxlayır; DWG 2000 formatı və DXF R12 bunu saxlaya bilmir və saxlama zamanı bu barədə xəbərdarlıq edilir.

## Şrift

Bütün mətn ekranda və PDF-lərdə Helvetica tipli şriftlə çəkilir. Açılmış çertyojlardan olan mətn öz sözlərini, hündürlüyünü və mövqeyini saxlayır, lakin orijinal şriftini saxlamır (abzas mətni içində şrift adı yuxarıda deyildiyi kimi faylda saxlanılır).

Çap olunmuş PDF-lərdə istənilən Avropa yazısının, kiril və ya yunan mətni öz formasında çap olunur (PDF lazım olan hərfləri daşıyır və mətni hələ də seçib axtara bilərsiniz). Çin, yapon və koreya mətni də öz formasında çap olunur (çap ilk dəfə lazım olduqda daha böyük şrifti yükləyir). Ərəb, fars, urdu və ivrit mətni də öz formasında çap olunur (növbəti bölməyə baxın). Heç bir şriftin hərfi olmayan simvollar "?" kimi çap olunur və tarixçə onların sayını göstərir.

## Sağdan sola mətn: ərəb, fars, urdu, ivrit

Mətni hər yerdə olduğu kimi yazın: {{cmd:TEXT}} və {{cmd:MTEXT}} hər sətri oxunma sırası ilə çəkir. Birinci hərfi ərəb və ya ivrit olan sətir sağdan sola oxunur; içərisindəki rəqəmlər və latın sözləri öz soldan sağa sırasını saxlayır, ərəb yazısının hərfləri isə birləşdirilir. Latın hərfi ilə başlayan sətir soldan sağa qalır və sağdan sola sözlər onun içində öz yerində olur. Çoxsətirli mətnin hər abzasının öz istiqaməti var, sarınmış abzas isə hər sətirdə bu istiqaməti saxlayır.

Mətn yazdığınız kimi saxlanılır, buna görə DWG və DXF faylları onu digər proqramlarla dəyişmədən mübadilə edir. Daxiletmə nöqtəsi və düzləşdirmə ({{ui:Left}}, {{ui:Center}}, {{ui:Right}}) hər mətn kimi eyni tərəfi bildirir: sağ ucundan asılmalı olan sağdan sola qeyd üçün {{ui:Right}} lazımdır.

Ekranda hərflər sistemin şriftlərindən gəlir. Çap olunmuş PDF-də ivrit eyni daxili şriftdən istifadə edir; ərəb yazılı mətn çapda bir əlavə şrift yükləyir (1 MB-dan az, bir dəfə), və bütün PDF həmin şriftlə çap olunur. Bu şriftin üç urdu simvolu (heh goal, yeh barree və urdu nöqtəsi) üçün öz forması yoxdur: onlar ən yaxın ərəb hərfinin forması ilə çap olunur. Həm ərəb yazılı, həm də çin, yapon və ya koreya mətni olan çertyoj bunlardan birini "?" kimi çap edir, çünki çap bir şrift daşıyır. Yüklənmiş SHX şriftindəki mətn, şrift hərfləri Unicode yerlərində saxladıqda düzülür və birləşdirilir; hərfləri artıq formalaşdırılmış köhnə şriftlər üçün isə {{cmd:SHXFONTS}} əmrində əvvəlki kimi {{ui:Reverse}} istifadə edin.

## Tez-tez edilən səhvlər

- **Mətn görünmək üçün çox kiçikdir.** Hündürlük çertyoj vahidləri ilə verilir. Böyük çertyojda yuxarıda göstərildiyi kimi böyük hündürlük seçin və ya yaxınlaşdırın.
- **Əmr bir sətirdən sonra bitdi.** {{cmd:TEXT}} əmrində boş sətirdə {{key:Enter}} basdınız. Əmri yenidən başladın, ya da abzas mətnindən (`T`) istifadə edin, orada {{key:Enter}} yeni abzas başladır.
- **`T` sətir soruşmaq əvəzinə qutu açdı.** AutoCAD-də olduğu kimi, `T` abzas mətnidir ({{cmd:MTEXT}}); tək sətirli mətn `DT`-dir.
- **Mətn AutoCAD-dəkindən fərqli yerdə sarınır.** CadCraft Helvetica enləri ilə sarıyır; başqa bir şrift sözü sətirə bir az daha çox və ya az sığdıra bilər.
- **Güzgü surətindəki mətn.** O, güzgülənmiş yerləşdirilir, lakin soldan sağa oxunaqlı qalır.
