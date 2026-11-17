---
title: Rumbları və bucaqları dərəcə, dəqiqə, saniyə ilə yazmaq və göstərmək
summary: CadCraft bucaq və ya istiqamət istədiyi hər yerdə istiqaməti geodezist rumbı kimi, məsələn N45°23'30"E, və ya dərəcə-dəqiqə-saniyə ilə yazın; AUNITS ilə çertyojun bucaqları necə göstərdiyini seçin.
keywords: rumb, rumblar, geodezist, kvadrant rumbı, N45E, dərəcə dəqiqə saniyə, DMS, bucaq, istiqamət, torpaq sahəsi, torpaq sahələri, planlaşdırma, poliqon, AUNITS, ANGUNITS, bucaq formatı, polyar, birbaşa məsafə, DIST
from: af805567
---

CadCraft bucaq və ya **istiqamət** istədiyi hər yerdə siz **kvadrant rumbı** və ya bucağı **dərəcə, dəqiqə və saniyə** ilə yaza bilərsiniz, sadə dərəcə sayı kimi yazdığınız kimi.

## Rumblar

Rumb şimal və ya cənubu, 90°-yə qədər bir bucağı, sonra şərq və ya qərbi göstərir:

| Yazırsınız | İstiqamət |
|---|---|
| `N45°23'30"E` və ya `N45d23'30"E` | Şimaldan şərqə doğru 45°23'30" |
| `S10-30-00W` və ya `S 10 30 W` | Cənubdan qərbə doğru 10°30' (hissələr arasında tire və ya boşluq) |
| `N45.5E` | Şimaldan şərqə doğru 45.5° |
| `N`, `E`, `S`, `W` | düz şimal, şərq, cənub, qərb |

Hərflər istənilən registrdə ola bilər. İspan dilində `O` də qərb (oeste) deməkdir. `d` və `°` eyni şeydir; `'` dəqiqədir, `"` saniyədir.

Torpaq sahəsinin 20 m uzunluğunda sərhəd xəttini N45°23'E istiqamətində planlaşdırmaq üçün {{cmd:LINE}} başladın və ilk nöqtəni yazın, sonra `@20<N45d23'E` yazın. Eyni şey {{cmd:ROTATE}} əmrinin bucaq çağırışında və bucaq soruşan hər digər çağırışda, eləcə də {{ui:Dinamik giriş}}in bucaq qutusunda işləyir.

## Dərəcə, dəqiqə, saniyə

`45°23'30"`, `45d23'30"`, `45d30'` və ya `45d` X oxundan saat əqrəbinin əksinə bucaqdır. `°` və ya `d` lazımdır: `45-23-30` riyazi ifadə kimi oxunur (45 − 23 − 30). Dəqiqə və saniyə 60-dan kiçik olmalıdır. Riyazi ifadəli (`360/7`) sadə ədəd hələ də işləyir.

## Bucaqlar necə göstərilir

{{cmd:AUNITS}} yazın (və ya {{ui:Xassələr}} › {{ui:Cari parametrlər}} daxilində {{ui:Bucaq formatı}} seçin) və seçin:

- **Onluq dərəcə** (standart): `44.6083°`.
- **Dərəcə-dəqiqə-saniyə**: `44°36'30"`.
- **Geodezist rumbları**: `N45°23'30"E`.

Dəqiqlik {{cmd:AUNITS}} üçün yazdığınıza uyğundur: 0 yalnız dərəcəni, 2 dəqiqəni, 4 saniyəni göstərir, 5-dən 8-ə qədər isə saniyənin onluq hissəsini əlavə edir. Format {{cmd:DIST}}-də, status zolağında, dinamik girişdə və izləmə göstərişlərində, eləcə də {{ui:Xassələr}}-in bucaq qutularında görünür (redaktə etdiyiniz qutu yuxarıdakı formaların hər hansı birini qəbul edir). Bu bir geri qaytarma addımıdır və DWG və DXF fayllarında saxlanılır (`$AUNITS`, `$AUPREC`); LISP onu `AUNITS` və `AUPREC` kimi oxuyur və yazır.
