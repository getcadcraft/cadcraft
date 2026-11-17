---
title: Köçür, kopyala, döndür, miqyasla, güzgü əksi, uzat və massiv
summary: Əsas dəyişdirmə əmrləri ilə otaqda mebel yerləşdirin: baza nöqtələrindən, yazılmış məsafələrdən və geri qaytarmadan istifadə edərək.
keywords: köçür, kopyala, döndür, miqyasla, güzgü, uzat, massiv, birləşdir, matchprop, xassələri uyğunlaşdır, fırça, arrayrect, arraypolar, polyar massiv, sil, partlat, geri qaytar, təkrarla, baza nöqtəsi, yerdəyişmə, dəyişdir, uyğunlaşdır, düzləşdir, bərabər aralıqla
from: 8eaeee6c
---

## Nə hazırlayacaqsınız

Bir stulu stol ətrafında kopyalayıb, döndərdiyiniz, güzgü əksini aldığınız və ölçüsünü dəyişdirdiyiniz bir stol. Bu zaman {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} və {{cmd:UNDO}} əmrlərindən istifadə edəcəksiniz.

## Parçaları çəkin

1. `REC` yazın və {{key:Enter}} basın, `0,0` yazın və {{key:Enter}} basın, sonra `@1800,900` yazın və {{key:Enter}} basın. Bu stoldur.
2. `REC` yazın və {{key:Enter}} basın, `300,-700` yazın və {{key:Enter}} basın, sonra `@450,450` yazın və {{key:Enter}} basın. Bu, stolun altındakı stuldur.
3. {{ui:Extents}} düyməsinə basın.

## Köçürün: baza nöqtəsi, sonra ikinci nöqtə

Hər köçürmə, kopyalama, döndürmə və miqyaslama **baza nöqtəsi**ndən başlayır: daşınan və ya ətrafında döndürülən nöqtə.

1. Stulu seçmək üçün ona klikləyin.
2. `M` yazın və {{key:Enter}} basın. Tarixçə `1 found` deyir.
3. `Specify base point` prompt-unda stulun sol-yuxarı küncünə (Son nöqtə) tutun və klikləyin.
4. `Specify second point` prompt-unda `@0,200` yazın və {{key:Enter}} basın.

Stul 200 vahid yuxarı qalxır və stola yaxınlaşır.

:::tip
`Specify base point` zamanı `D` yazın ki, bunun əvəzinə yerdəyişmə verəsiniz: CadCraft sonra `Specify displacement` soruşur və siz neçə üfüqi və yuxarı olduğunu yazırsınız, məsələn `0,200` (`@` lazım deyil).
:::

## Kopyalayın, istədiyiniz qədər

1. Stula klikləyin.
2. `CO` yazın və {{key:Enter}} basın.
3. Stulun sol-aşağı küncünü tutun və baza nöqtəsi kimi klikləyin.
4. `@600,0` yazın və {{key:Enter}} basın. 600 sağa bir kopya görünür.
5. `@600,0` yenidən yazın və {{key:Enter}} basın. İkinci kopya orijinaldan 1200 sağda görünür.
6. Əmri bitirmək üçün {{key:Enter}} basın.

{{cmd:COPY}} {{key:Enter}} basana qədər davam edir. Hər kopya baza nöqtəsindən daxil etdiyiniz nöqtəyə olan məsafə ilə yerləşdirilir. `@` nöqtəsi son daxil etdiyiniz nöqtədən hesablanır; birinci kopyadan sonra həmin kopyanın nöqtəsidir, belə ki `@600,0` iki dəfə yazıldıqda 600 və 1200-də kopyalar yaranır. Əmrdən çıxmadan son kopyanı geri qaytarmaq üçün `U` yazın və {{key:Enter}} basın.

Stolun altında bir sıra üç stul görməlisiniz.

:::tip
{{cmd:COPY}} bir çertyoj daxilində baza nöqtəsi ilə yerləşdirilən kopyalar üçündür. Obyektləri başqa çertyoja və ya vərəqə aparmaq və ya sonra yapışdırmaq üçün buferdən istifadə edin: {{key:Mod+C}}, sonra {{key:Mod+V}}. {{key:Mod+D}} göstərici ilə hərəkət edən bir kopya yaradır. Ətraflı: [Kopyalama, yapışdırma və ikiləşdirmə](topic:copy-paste).
:::

## Sıranı o biri tərəfə güzgü əksi ilə çevirin

1. Stolun üzərinə toxunmadan, üç stulun üzərində sağdan sola çarpaz pəncərə çəkin.
2. `MI` yazın və {{key:Enter}} basın.
3. `Specify first point of mirror line` prompt-unda stolun sol tərəfinin orta nöqtəsinə (Orta nöqtə) tutun və klikləyin.
4. `Specify second point of mirror line` prompt-unda stolun sağ tərəfinin orta nöqtəsinə (Orta nöqtə) tutun və klikləyin.
5. `Erase source objects? [Yes/No] <N>` prompt-unda saxlamaq üçün {{key:Enter}} basın.

Stolun altında üç stul və onun üstündə üç güzgü əksi stul görməlisiniz. Güzgü əksi seçilmiş mətn oxunaqlı qalır: güzgü əksi ilə yerləşdirilir, amma tərsinə yazılmır.

## Stulu döndürün

1. Stolun altında ən sağdakı stula klikləyin.
2. `RO` yazın və {{key:Enter}} basın.
3. Stulun sağ-aşağı küncünü tutun və baza nöqtəsi kimi klikləyin.
4. `90` yazın və {{key:Enter}} basın.

Stul baza nöqtəsi ətrafında saat əqrəbinin əksinə 90 dərəcə dönür. Mənfi bucaq saat əqrəbi istiqamətində döndərir. Yazmaq əvəzinə ikinci nöqtəyə də klikləyə bilərsiniz: bucaq baza nöqtəsindən həmin nöqtəyə olan istiqamətdə ölçülür.

## Stolu miqyaslayın

1. Stolu seçin.
2. `SC` yazın və {{key:Enter}} basın.
3. Stolun sol-aşağı küncünü tutun və baza nöqtəsi kimi klikləyin.
4. `1.2` yazın və {{key:Enter}} basın.

Stol 20% böyüyür və baza nöqtəsindən uzaqlaşaraq böyüyür. 1-dən kiçik əmsal onu kiçildir.

:::note
Miqyas əmsalını yazmaq əvəzinə nöqtəyə klikləsəniz, əmsal baza nöqtəsindən həmin nöqtəyə olan məsafədir. Bir çertyoj vahidi məsafəyə klikləmək 1 əmsalı verir. Adətən əmsalı yazmaq daha yaxşıdır.
:::

## Geri qaytarma və təkrarlama

- {{key:Mod+Z}}, {{ui:Undo}} düyməsi və ya `U` və sonra {{key:Enter}} son əmri geri qaytarır. Bütün əmr bir addımdır: beş kopya yaradan {{cmd:COPY}} geri qaytarılanda beşi də silinir.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, {{ui:Redo}} düyməsi və ya `REDO` onu geri qaytarır.
- Tarixçə nəyin geri qaytarıldığını göstərir ("Geri qaytarıldı: COPY").

CadCraft son 500 addımı saxlayır. Qat parametrləri (açıq, dondurulmuş, kilidli, rəng) redaktə deyil, parametrlərdir və geri qaytarılmır.

## Otağı enə uzadın

{{cmd:STRETCH}} (`S`, və ya {{ui:Stretch}}) yalnız çarpaz pəncərənin içində olanları köçürür: içindəki künclər və xətt ucları hərəkət edir, qalan hər şey yerində qalır, beləliklə otaq yerdəyişmir, enir.

1. `S` yazın və {{key:Enter}} basın.
2. Sağ divarın üzərində, onun künclərini və ona toxunan hər şeyin ucunu əhatə edən pəncərəni sağdan sola çəkin.
3. {{key:Enter}} basın.
4. Baza nöqtəsinə klikləyin, sonra `@600,0` yazın və {{key:Enter}} basın.

Düzbucaqlı 600 enlidir; divara bitən xətlər hələ də ona bitir. Pəncərənin içində bir ucu olan qövs hündürlüyünü saxlayır; mərkəzi və ya yerləşmə nöqtəsi içində olan çevrələr və mətn hərəkət edir; ölçü yeni uzunluğunu ölçür. Pəncərəsiz, tək-tək seçilmiş obyektlər sadəcə köçürülür.

Əvvəlcə də seçə bilərsiniz: heç bir əmr işləmədikdə divarın üzərində çarpaz pəncərəni (və ya çarpaz lassonu) çəkin, sonra `S` yazın. STRETCH bu seçimi qəbul edir və pəncərələrinin tutduğu hissəni uzadır, sanki onları öz sorğusunda çəkmisiniz.

## Massiv: sətirlər və sütunlar, ya da mərkəz ətrafında

{{cmd:ARRAY}} (`AR`, və ya {{ui:Array}}) seçilmiş obyekti şəbəkə ilə və ya dairədə kopyalayır.

1. Stul seçin, `AR` yazın və {{key:Enter}} basın. Düzbucaqlı üçün yenidən {{key:Enter}} basın.
2. 4 sütun və 3 sətirlik önizləmə görünür. `COU` yazın, {{key:Enter}} basın, sonra sütunlar üçün `5`, sətirlər üçün `2` yazın.
3. `S` yazın, {{key:Enter}} basın, sonra sütunlar arası `600` və sətirlər arası `-900` yazın (mənfi aşağı deməkdir).
4. Kopyaları yaratmaq üçün {{key:Enter}} basın.

Stolun ətrafında stul halqası üçün `PO` (Polyar) seçin, stolun mərkəzinə klikləyin və `I` (elementlər), `F` (doldurma bucağı: tam dövrə üçün 360, yarısı üçün 180) və `ROT` (kopyaların mərkəzə dönüb-dönməməsi) təyin edin. {{cmd:ARRAYRECT}} və {{cmd:ARRAYPOLAR}} bu sualı keçir.

## Parçaları bir polixəttə birləşdirin

{{cmd:JOIN}} (`J`, və ya {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): ucları birləşən xətləri, qövsləri və açıq polixəttləri seçin və {{key:Enter}} basın. Bunlar bir polixəttə çevrilir; hər şey dövrə vurduqda bağlanır və belə olduqda onu bir dəfəyə ofset etmək olar. Arada boşluq olsa belə eyni xətt üzərində olan xətlər bir xəttə çevrilir; eyni çevrənin qövsləri bir qövs və ya çevrə olur.

## Xassələri uyğunlaşdırın

{{cmd:MATCHPROP}} (`MA`, və ya {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): istədiyiniz görünüşə malik obyektə klikləyin, sonra dəyişdiriləcək obyektləri seçin və {{key:Enter}} basın. Onlar həmin obyektin qatını və rəngini alır; mətn onun hündürlüyünü, ölçü onun ölçülərini, ştrixlama isə onun naxışını alır. İkinci sualda bunlardan hər hansı birini söndürmək üçün `S` (Parametrlər) yazın.

## Obyektləri uyğunlaşdırın

**Nöqtələrə görə.** {{cmd:ALIGN}} (`AL`, və ya {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): obyektləri seçin və {{key:Enter}} basın, sonra onların üzərində bir nöqtəyə (mənbə) və onun getməli olduğu yerə (təyinat) klikləyin.

- Bir cüt onları köçürür. `Specify second source point` prompt-unda dayanmaq üçün {{key:Enter}} basın.
- İki cüt onları həm də döndürür, belə ki iki mənbə nöqtəsi arasındakı xətt iki təyinat nöqtəsi arasındakı xətt boyunca uzanır. Sonra CadCraft `Scale objects based on alignment points?` soruşur: `Y` onları da həmin qədər böyüdür və ya kiçildir.
- Üçüncü cüt, iki nöqtəsi həmin xəttin əks tərəflərində olduqda onları güzgü əksi edir.

**Kənarlar və aralıq.** {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (və ya `ALIGNPANEL`) çertyojun üstündə kiçik bir panel açır. Obyektləri seçin, sonra:

- {{ui:Align to}} bölməsində nəyə görə düzləşdiriləcəyini seçin (bütün seçim, seçdiyiniz ilk və ya son obyekt, ya da klikləyəcəyiniz nöqtə) və {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} və ya {{ui:Bottom}} üzərinə klikləyin;
- ya da {{ui:Equal gaps}} və ya {{ui:Equal centres}} seçin və {{ui:Across}} və ya {{ui:Up and down}} üzərinə klikləyin: kənardakı iki obyekt yerində qalır, qalanları onların arasında bərabər aralıqla yerləşdirilir (ən azı üç obyekt).

Hər klik bir geri qaytarma addımıdır və seçim qalır, beləliklə başqa variant sınaya bilərsiniz. Hər obyekt sərhəd qutusu ilə hesablanır, UCS təyin olunduqda isə onun daxilində. Əmr sətirində eyni iş {{cmd:ALIGNTO}} və {{cmd:DISTRIBUTE}} ilə görülür.

## Silin və partladın

- {{cmd:ERASE}} (`E`, və ya {{key:Delete}}) seçilmiş obyektləri silir.
- {{cmd:EXPLODE}} (`X`) polixətti xətlərə və qövslərə, blok istinadını onun obyektlərinə, ölçünü isə xətlərə, ox ucluqlarına və mətnə ayırır. Partladılmış ölçülər artıq özünü ölçmür.

## Tez-tez edilən səhvlər

- **İkinci nöqtədə `@` olmadan məsafə yazmaq.** `600,0` mütləq 600,0 nöqtəsidir, "sağa 600" deyil. `@600,0` istifadə edin, ya da çarpaz xətt düz istiqamətə işarə edərkən sadəcə `600`.
- **Fırlanma səhv istiqamətdə getdi.** Müsbət bucaqlar saat əqrəbinin əksinə döndürür.
- **Geri qaytarma gözləniləndən çox şey sildi.** Bir geri qaytarma son əmri tamamilə geri alır, yaratdığı hər kopya daxil olmaqla.
- **Əmr obyekt seçmək üçün soruşmadı.** Obyektlər artıq seçilmişdi, ona görə də onlardan istifadə etdi. Heç nə seçilmədən başlamaq üçün əvvəlcə {{key:Esc}} basın.
