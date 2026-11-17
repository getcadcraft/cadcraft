---
title: Koordinatlarla çəkmək
summary: Mütləq, nisbi və polyar koordinatları yazmaqla və birbaşa məsafə daxiletməsi ilə dəqiq mərtəbə konturu çəkin.
keywords: line, pline, polixətt, koordinatlar, nisbi, polyar, mütləq, birbaşa məsafə, @, nöqtələrin yazılması, dəqiq, ortoqonal
from: 19e82350
---

## Nə yaradacaqsınız

Dəqiq çəkilmiş 6000 x 4500 ölçülü, 2000 x 1500 çıxıntılı L-formalı otaq konturu, üstəlik 30 dərəcə bucaqda divar. Nöqtə yazmağın bütün dörd üsulundan istifadə edəcəksiniz. Millimetrlə işləyin: bir çertyoj vahidi bir millimetri bildirir.

Hər format üçün qısa istinad [Koordinat və məsafə daxiletməsi](topic:coordinate-entry) səhifəsindədir.

## Başlamazdan əvvəl

1. CadCraft-ı açın. Çertyoj açıqdırsa, əvvəlcə {{ui:Yeni}} üzərinə klikləyin.
2. {{key:Esc}} basın ki heç nə seçilməsin. Sağ panel {{ui:Cari parametrlər}} göstərir.
3. {{ui:Vahidlər}} dəyərini {{ui:Millimetr}} edin. Heç nə ölçüsü dəyişmir; bu yalnız vərəqlərə və çaplara vahidin nə demək olduğunu bildirir.

## Mütləq koordinatlar: birinci nöqtə

Mütləq koordinat başlanğıcdan ölçülən mövqedir və `x,y` kimi yazılır.

1. `L` yazın və {{key:Enter}} basın. Sorğu `Birinci nöqtəni göstərin:` oxuyur.
2. `0,0` yazın və {{key:Enter}} basın.

Xətt indi başlanğıcdan xaça doğru uzanır. Status sətrindəki koordinatlar hərəkət etdikcə başlanğıc nöqtədən məsafəni və bucağı göstərir.

## Nisbi koordinatlar: @dx,dy

Nisbi koordinat `@dx,dy` kimi yazılır: son nöqtədən bu qədər sağa, bu qədər yuxarı. Mənfi ədədlər sola və ya aşağı gedir.

3. `@6000,0` yazın və {{key:Enter}} basın. 6000 uzunluqlu xətt sağa gedir.
4. `@0,3000` yazın və {{key:Enter}} basın.
5. `@-2000,0` yazın və {{key:Enter}} basın.
6. `@0,1500` yazın və {{key:Enter}} basın.

Otağın sağ tərəfi boyunca yuxarı qalxan dörd bağlı xətt görməlisiniz.

## Birbaşa məsafə daxiletməsi: çılpaq ədəd

Tək ədəd yazanda CadCraft onu xaçın istiqamətində həmin məsafəyə gedir. Ortoqonalı aktivləşdirin ki, istiqamət üfüqi və ya şaquli olsun.

7. {{key:F8}} basın, ya da status sətrində {{ui:Ortoqonal}} üzərinə klikləyin. Status sətri "Ortoqonal aktivdir" yazır.
8. Xaçı son nöqtənin soluna aparın. Lastik xətt üfüqi qalır.
9. `4000` yazın və {{key:Enter}} basın. Xətt sola 4000 gedir.
10. Xaçı son nöqtənin altına aparın.
11. `4500` yazın və {{key:Enter}} basın. Başlanğıc nöqtəyə qayıtmısınız.
12. Boş sorğuda {{key:Enter}} basın ki, əmri bitirəsiniz.

:::mac
F8 Mac klaviaturasında media idarəsi üçün istifadə oluna bilər. **fn** düyməsini basıb saxlayın və F8 basın, ya da {{ui:Ortoqonal}} üzərinə klikləyin. Bax: [Klaviatura, siçan və trackpadlər](common:keys).
:::

Altı ayrı xətdən ibarət bağlı L-formalı kontur var.

13. Hamısını görmək üçün {{ui:Hüdudlar}} üzərinə klikləyin.

## Polyar koordinatlar: @məsafə<bucaq

Polyar koordinat `@məsafə<bucaq` kimi yazılır. Bucaqlar dərəcədə, X müsbət istiqamətindən saat əqrəbinin əksinə ölçülür: 0 sağdır, 90 yuxarıdır, 180 soldur, 270 (və ya -90) aşağıdır.

14. `L` yazın və {{key:Enter}} basın.
15. Aşağı-sağ küncdən başlamaq üçün `6000,0` yazın və {{key:Enter}} basın.
16. `@2500<-30` yazın və {{key:Enter}} basın. 2500 uzunluqlu xətt küncdən çıxır, üfüqdən 30 dərəcə aşağı, sağa doğru gedir.
17. Əmri bitirmək üçün {{key:Enter}} basın.

`@` olmadan, məsələn `2500<30`, koordinat son nöqtədən yox, başlanğıcdan ölçülür.

## Eyni kontur bir polixətt kimi

Altı ayrı xətt bir çox iş üçün yaxşıdır, lakin polixətt bir obyektdir: ofset, ölçü və seçim bütöv edilir. Eyni daxiletmə ilə {{cmd:PLINE}} istifadə edin.

1. `PL` yazın və {{key:Enter}} basın.
2. İlk konturun altından başlamaq üçün `0,-6000` yazın və {{key:Enter}} basın.
3. `@6000,0` yazın, sonra {{key:Enter}} basın.
4. `@0,3000` yazın, sonra {{key:Enter}} basın.
5. `@-2000,0` yazın, sonra {{key:Enter}} basın.
6. `@0,1500` yazın, sonra {{key:Enter}} basın.
7. `@-4000,0` yazın, sonra {{key:Enter}} basın.
8. `C` yazın və {{key:Enter}} basın. Polixətt bağlanır və əmr bitir.
9. Yeni konturu klikləyin. Sağ panel "Polixətt" göstərir, onun {{ui:Təpələr}}, {{ui:Uzunluq}} və bağlı olduğu üçün {{ui:Sahə}}sini.

Sahə 24000000 göstərməlidir (kvadrat millimetr, yəni 24 kvadrat metr).

## Çəkərkən seçimlər

- {{cmd:LINE}} və {{cmd:PLINE}} əmrində `U` yazın və {{key:Enter}} basın ki, əmri tərk etmədən son seqmenti geri alasınız.
- {{cmd:LINE}} əmrində `C` ən azı iki seqment olduqda birinci nöqtəyə qayıdıb bağlayır.
- {{cmd:PLINE}} əmrində `A` qövs seqmentlərinə keçir (hər qövs əvvəlki seqmentdən hamar davam edir), `L` isə xətlərə qaytarır. Qövs rejimində bağlama seçimi `CL`-dir.
- {{cmd:LINE}} əmrində `Birinci nöqtəni göstərin:` sorğusunda {{key:Enter}} basmaq son verdiyiniz nöqtədən başlayır, beləliklə dayandığınız yerdən davam edə bilərsiniz.

## Ümumi səhvlər

- **`@6000,0` nəzərdə tutduğunuz halda `6000,0` yazmaq.** `@` olmadan nöqtə son nöqtədən yox, başlanğıcdan ölçülür, buna görə xətt gözlənilmədən hara isə gedir. CadCraft-da `x,y` həmişə mütləqdir. Geri almaq üçün `U` və {{key:Enter}} basın.
- **Vergülün onluq nöqtə kimi yazılması.** Onluqlar nöqtə ilə yazılır: `1250.5`. Vergül həmişə X-i Y-dən ayırır.
- **Birbaşa məsafə səhv istiqamətə getdi.** Çılpaq ədəd xaçı izləyir. {{key:Enter}} basmazdan əvvəl istədiyiniz tərəfə xaçı aparın və düz xətlər üçün {{ui:Ortoqonal}} aktivləşdirin.
- **"Point or option keyword required."** CadCraft yazdığınızı başa düşmədi. Ədədin içində boşluqları və ya çatışmayan vergülü yoxlayın və yenidən yazın.
- **Fut və düym.** CadCraft yalnız sadə ədədləri oxuyur. Düym çertyojunda 12'-6" üçün `150`, fut çertyojunda `12.5` yazın.
