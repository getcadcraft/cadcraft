---
title: CadCraft-dan AI köməkçi ilə istifadə edin
summary: Öz AI köməkçinizin və ya skriptinizin CadCraft ilə işləməsinə icazə verin: nə edə biləcəyi, istənilən MCP müştərisinin necə qoşulacağı və nəzarətin sizdə necə qaldığı (icazələr, geri qaytarma, fəaliyyət jurnalı, Əlaqəni kəs).
keywords: ai, köməkçi, agent, mcp, model context protocol, skript, avtomatlaşdırma, əmr sətri, cli, json, token, icazələr, əlaqəni kəs, fəaliyyət, qovluqlar, yollar, svg, toplu emal
from: 06ba4ef6
---

## Nəyi öyrənəcəksiniz

AI köməkçinin (və ya yazdığınız skriptin) çertyoja baxmasını, CadCraft-ın əmrlərini işlətməsini, çap etməsini və saxlamasını, habelə nəyə toxuna biləcəyini necə müəyyən etməyi öyrənin.

CadCraft-ın **öz AI-si yoxdur** və heç nə hara göndərmir. Köməkçini siz gətirirsiniz: Model Context Protocol (MCP) dilində danışan istənilən proqram. CadCraft ona yalnız alətlər verir, hansını seçəcəyinizi isə siz təyin edirsiniz.

Bunun iki giriş yolu var:

- **Açıq olan çertyoj.** Köməkçi bu pəncərədə, yanınızda, kompüterinizdəki CadCraft Studio vasitəsilə işləyir. Bu, {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Köməkçilər}} üçündür.
- **Kompüterinizdəki çertyojlar, tətbiqi açmadan.** CadCraft MCP serveri və `cadcraft` əmr sətri sizin göstərdiyiniz qovluqlardakı DWG və DXF fayllarını oxuyur və yazır. Bax: aşağıda "CadCraft-ı açmadan fayllarla işləmək".

## Onu işə salın

1. {{ui:Parametrlər}} (tətbiq panelindəki dişli, ya da {{key:Mod+,}}) açın və {{ui:CadCraft}} bölməsinə keçin.
2. {{ui:Köməkçilər}} altında **AI köməkçilərin və skriptlərin CadCraft-dan istifadə etməsinə icazə ver** qutusunu işarələyin. Bunu edənə qədər söndürülüb.
3. Nəyi edə biləcəyini seçin. **Oxu** başlanğıcda işarələnib; digərlərini yalnız lazım olduqda işarələyin.

| İcazə | Köməkçi nə edə bilər |
|---|---|
| Oxu | Çertyoja baxmaq: onu təsvir etmək, obyektləri siyahıya salıb tapmaq, seçimi görmək, görünüşü təsvir edib şəklini çəkmək, qat və çəkiliş qaydalarına görə yoxlamaq |
| Redaktə | Çertyojda əmrləri işlətmək və seçimi dəyişmək. Hər hərəkət geri qaytarıla bilən bir addımdır |
| Saxla | Çertyojı saxlamaq (masaüstündə öz faylına; brauzerdə yükləmə kimi) |
| İxrac | PDF-ə çap etmək və digər fayllar yaratmaq |

## Ona seçdiyiniz qovluqlarda fayllardan istifadə etməyə icazə verin

CadCraft Studio-da köməkçi fayl dialoqlarından istifadə etmək əvəzinə faylları adı ilə aça, saxlaya və çap edə bilər, lakin yalnız {{ui:Köməkçilər}} › {{ui:İstifadə edə biləcəyi qovluqlar}} altında əlavə etdiyiniz qovluqların içində:

1. {{ui:Qovluq əlavə et…}} seçin və qovluğu Studio-nun öz dialoqunda seçin.
2. İndi köməkçi orada faylları siyahıya sala bilər (`files_list`), çertyoj aça bilər (`drawing_open`), onu orada DWG versiyasında və ya DXF kimi saxlaya bilər, PDF və ya SVG faylına çap edə bilər, LISP faylı yükləyə bilər və əmrə istədiyi faylı verə bilər (`INSERT` `F`, `XATTACH`, nöqtə faylı) və ya əmrin faylının haraya getdiyini bildirə bilər (`COUNT`-un CSV-si, `PUBLISH`).
3. {{ui:Çıxar (R)}} qovluğu dərhal geri alır. Bu qovluqdan kənar yollar rədd edilir, artıq orada olan fayl isə yalnız köməkçi bunu istədikdə və ya faylı özü yazdıqda dəyişdirilir.

Açmaq üçün hələ də **Oxu** lazımdır; çertyoj yazmaq üçün **Saxla** lazımdır; hər hansı digər fayl üçün **İxrac** lazımdır.

İşarələdiyiniz icazələrdən kənar alətlər köməkçiyə heç təklif edilmir; o, yenə də birini istəsə, CadCraft rədd edir və bunu fəaliyyət jurnalına yazır. Açarı söndürmək bütün əlaqələri dərhal bitirir. {{ui:CadCraft parametrlərini sıfırla}} onu da söndürür.

## Köməkçinizi qoşun

Köməkçilər kompüterinizdəki **CadCraft Studio** vasitəsilə qoşulur: Studio yalnız bu kompüterin əldə edə biləcəyi kiçik bir server işlədir (ünvan `127.0.0.1`) və Studio hər işə düşəndə yaratdığı token ilə qorunur. Studio-nu açın, {{ui:Köməkçi qoş}} seçin və ünvanı və tokeni kopyalayın.

- Köməkçinizdə HTTP tipli MCP serveri əlavə edin, ünvanı (belə görünür: `http://127.0.0.1:47615/mcp`) və başlığı `Authorization: Bearer <token>` ilə. Studio yapışdırmaq üçün parametrləri göstərir.

Studio-da {{ui:Yeni token}} bütün qoşulu köməkçiləri yeni tokenlə yenidən qoşur. Tokeni heç vaxt paylaşmayın: onu bilən hər kəs, Studio işlədiyi müddətcə, açdığınız tətbiqlərdən istifadə edə bilər.

:::note
Brauzer səhifəsi köməkçi üçün əlaqə aça bilməz: brauzer tətbiqlərində açar CadCraft Studio-nu kompüterinizdə istifadə etməyincə heç bir təsir göstərmir.
:::

## Nəzarət sizdə qalır

- **Hər hərəkət bir geri qaytarma addımıdır**, köməkçinin adı ilə etiketlənir, məsələn "Köməkçi: LINE". Köməkçinin son hərəkətini bütövlükdə geri qaytarmaq üçün {{key:Mod+Z}} basın.
- **Nə etdiyini görürsünüz.** Onun əmrləri əmr tarixçəsində önündə **[Köməkçi]** ilə görünür və çertyoj işlədikcə yenidən çəkilir.
- **O, sizi gözləyir.** Siz əmrin ortasında olanda köməkçi oxuya bilər, lakin çertyojı dəyişə bilməz; siz bitirəndə yenidən cəhd etmək ona deyilir.
- **Qoşulu olduqda bilirsiniz.** Tətbiq panelindəki düymə qoşulu olduğu müddətdə köməkçinin adını göstərir. Nəyə icazəsi olduğunu görmək üçün onu klikləyin, ya da onu **Əlaqəni kəs** üçün klikləyin.
- **Fəaliyyət.** {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Köməkçilər}} › {{ui:Fəaliyyət}} hər çağırışı siyahıya salır: nə vaxt, hansı alət, icra olundu yoxsa rədd edildi və onun yaratdığı geri qaytarma addımı. {{ui:Jurnalı saxla}} surətini saxlayır.

## Köməkçi nə istəyə bilər

| Alət | İcazə | Nə edir |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Oxu | Çertyojun adı, vahidləri, qatları, blokları, vərəqləri; ekranda olanlar |
| `files_list`, `drawing_open` | Oxu | Studio: qovluqlarınızdakı fayllar; birini bu pəncərədə açır |
| `objects_list`, `object_get`, `selection_get` | Oxu | Həndəsəsi, uzunluğu və sahəsi ilə obyektlər (və ya yalnız tipə və qata görə neçə olduğu); seçim |
| `drawing_check` | Oxu | Qaydalar: icazə verilmiş qatlar, 0 qatında heç nə olmaması, rənglər ByLayer, mətn hündürlükləri |
| `view_screenshot` | Oxu | Çertyojun göstərildiyi kimi şəkli |
| `command_run` | Redaktə | Əmr sətrinə yazır: `LINE 0,0 @100,0 @0,50 ` sizin yazdığınız kimi oxunur (boşluq cavabı bitirir), ya da hər birinə bir cavab verilən siyahı. Əmri açıq qoyub növbəti çağırışda davam etdirə bilər |
| `script_run` | Redaktə | Skript (`.scr`) və ya LISP faylı, {{ui:APPLOAD}} onu yüklədiyi kimi |
| `block_insert` | Redaktə | Bloku atribut dəyərləri ilə bir addımda yerləşdirir |
| `selection_set`, `undo` | Redaktə | Növbəti əmr üçün obyektləri seçir; öz addımlarını geri qaytarır |
| `drawing_save` | Saxla | CadCraft-ın öz {{ui:Saxla}} əmri, ya da qovluqlarınızdan birinə {{ui:Fərqli saxla}} |
| `drawing_plot` | İxrac | Vərəqin və ya modelin PDF və ya SVG-si, miqyasda və ya sığdırılmış (PDF altlıqları hələ bu üsulla çap olunmur) |

Köməkçi əmr işlədərkən CadCraft öz suallarını dialoq əvəzinə əmr sətrində verir (məsələn, bütöv çertyojun, yoxsa bir blokun daxil edilib-edilməməsini), beləliklə köməkçi onlara cavab verə bilir. Kitabxana və Axtar hələ də sizə ehtiyac duyur; köməkçiyə sizdən soruşması deyilir.

## CadCraft-ı açmadan fayllarla işləmək

CadCraft MCP serveri (`cadcraft-mcp`) və əmr sətri (`cadcraft`) CadCraft-ın öz çertyoj kodunu pəncərəsiz Node.js-də işlədir. Node.js 20 və ya daha yeni versiyası lazımdır.

- **MCP serveri** yalnız adını verdiyiniz qovluqlarda və yalnız verdiyiniz icazələrlə işləyir: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. `--root` olmadan heç bir faylı aça bilmir; `--allow` olmadan yalnız oxuya bilir. O, həmçinin IFC modellərini, həcmlərin hesablanmasını və PDF dəstlərindəki qeydləri oxuya bilir.
- **Əmr sətri** öz skriptləriniz üçündür: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Bir neçə fayl birdən: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Proqramın oxuya biləcəyi çıxış üçün `--json` əlavə edin.

:::note
Əgər `npx @getcadcraft/mcp` paketin tapılmadığını bildirirsə, paket hələ dərc olunmayıb. Nə vaxt olacağını getcadcraft.com-dakı xəbərlər bildirəcək.
:::

## Nəsə işləmirsə

- **Köməkçi heç bir CadCraft alətini görmür:** bu pəncərədə açarın yandığını və pəncərənin Studio-da açıq olduğunu yoxlayın.
- **"redaktə icazəsi lazımdır":** {{ui:Köməkçilər}} altında **Redaktə** işarələyin, sonra yenidən soruşun.
- **"köməkçilərin istifadə edə biləcəyi qovluqlardan kənardadır":** həmin qovluğu {{ui:Köməkçilər}} › {{ui:İstifadə edə biləcəyi qovluqlar}} altında əlavə edin, ya da köməkçidən artıq əlavə etdiyiniz qovluqdakı faylı istifadə etməsini xahiş edin.
- **"401" və ya "token" xətaları:** token dəyişib (Studio yenidən başladılıb və ya {{ui:Yeni token}}). Yenisini köməkçinin parametrlərinə kopyalayın.
- **Onun dəyişikliyi səhv idi:** {{key:Mod+Z}} basın. Bir basış köməkçinin bütöv bir hərəkətini geri qaytarır.

## Həmçinin bax

- [AI köməkçilər üçün reseptlər](common:assistants-recipes): hər biri çağırdığı alətlərlə birlikdə işlənmiş nümunələr.
