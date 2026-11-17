---
title: Hyrja e koordinatave dhe e distancave
summary: Çdo mënyrë për të shkruar një pikë, një distancë, një kënd ose një numër në rreshtin e komandave të CadCraft, me shembuj.
keywords: hyrja dinamike, dyn, f12, tab, koordinata, absolute, relative, polare, @, distancë e drejtpërdrejtë, kënd, gradë, pika e fundit, lastpoint, shkrimi i pikave, hyrja, aritmetika, llogaritje, kalkulator, cal, plus, thyesë, shprehje
from: 7de9252d
---

## Pikat

Kur komanda kërkon një pikë, shkruani një nga këto dhe shtypni {{key:Enter}}:

| Shkruani | Kuptimi | Shembull |
|---|---|---|
| `x,y` | Absolute: matet nga origjina 0,0 | `2500,1200` |
| `#x,y` | Gjithashtu absolute (pranohet për zakon) | `#2500,1200` |
| `@dx,dy` | Relative: djathtas dhe lart nga pika e fundit | `@600,0` |
| `@d<a` | Polare relative: distanca dhe këndi nga pika e fundit | `@1500<45` |
| `d<a` | Polare absolute: distanca dhe këndi nga origjina | `3000<90` |
| një numër i vetëm | Distancë e drejtpërdrejtë: aq larg nga pika bazë, drejt kryqit | `1200` |
| `*x,y`, `@*dx,dy` | Koordinata botërore kur është caktuar një UCS | `*0,0` |

Kur është caktuar një UCS ({{cmd:UCS}}), `x,y`, `@dx,dy` dhe këndi në `d<a` matën përgjatë boshteve të UCS. Shih [Ktheni pamjen dhe përdorni koordinatat tuaja](topic:ucs-and-turned-view).

Ose klikoni në vizatim; kapjet e objekteve dhe Ortho zbatohen për klikimet.

Rregulla:

- Presja ndan X nga Y. Decimalet përdorin pikën: `1250.75,300`.
- Vlerat negative shkojnë majtas dhe poshtë: `@-600,0`.
- Mos shkruani hapësira: {{key:Space}} e dërgon rreshtin, si {{key:Enter}}.
- Numrat mund të kenë eksponentë: `1e3` është 1000.
- Njësi nuk shkruhen, dhe nuk përdoret shënimi në këmbë dhe inç. Shkruani numra të thjeshtë në njësitë e vizatimit.

## Pika e fundit

`@` numëron nga **pika e fundit që keni dhënë në çdo kërkesë për pikë**, në çdo komandë: një klikim, një kapje ose një pikë e shkruar. Ajo mbahet mend mes komandave, kështu që mund të nisni një vijë të re `@0,500` larg nga vendi ku mbaroi e mëparshmja. Përpara se të keni dhënë ndonjë pikë, `@` numëron nga 0,0.

Disa vende ku kjo ka rëndësi:

- Te {{cmd:COPY}}, pas kopjes së parë pika e fundit është pika e asaj kopjeje. `@600,0` dy herë vendos kopjet 600 dhe 1200 larg origjinalit.
- Pasi vendosni një përmasë, pika e fundit është vendi ku keni vendosur vijën e përmasës, jo fundi i përmasës.

Kur keni dyshim, përdorni një pikë absolute, një kapje ose një distancë të drejtpërdrejtë.

## Shkrimi i distancës së drejtpërdrejtë

Një numër i thjeshtë është një distancë nga **pika bazë** (pika prej së cilës nis shiriti elastik) drejt kryqit:

1. Lëvizni kryqin në drejtimin që dëshironi.
2. Shkruani distancën dhe shtypni {{key:Enter}}.

Me {{ui:Ortho}} aktiv, drejtimi kapet drejt djathtas ose drejt lart e poshtë, gjë që e bën këtë mënyrën më të shpejtë për të vizatuar mure drejtkëndëshe. Nëse nuk ka pikë bazë, ose kryqi ndodhet saktësisht mbi të, numri refuzohet me mesazhin "Kërkohet një pikë ose një fjalë kyçe opsioni."

## Këndet

- Në gradë, si numër i thjeshtë: `30`, `-45`, `112.5`.
- Matet në drejtim invers të orës nga drejtimi pozitiv i X (që shkon djathtas): 0 është djathtas, 90 lart, 180 majtas, 270 ose -90 poshtë.
- Kur kërkohet një kënd (rrotullim, kënd teksti), mund të klikoni gjithashtu: këndi matet nga pika bazë deri te klikimi. Para se të ekzistojë një pikë bazë, klikimi i parë e cakton atë dhe kërkesa pyet për një pikë të dytë.

## Distancat

Kur kërkohet një distancë (rreze, zhvendosje, lartësi teksti, faktor shkalle):

- shkruani një numër pozitiv (në vizatim me këmbë dhe inç edhe `12'6"` ose `6-1/2`: shih [Këmbë dhe inç](topic:units-papers-scales#feet-and-inches-and-fractions)), ose
- klikoni një pikë: distanca nga pika bazë e komandës deri te ajo, ose
- klikoni dy pika kur nuk ka pikë bazë: kërkesa ndryshon në `Cakto pikën e dytë`.

"Kërkohet një numër pozitiv ose dy pika." do të thotë se vlera nuk ishte numër, ose ishte negative.

## Llogaritjet në një vlerë të shkruar

Kudo ku shkruhet një gjatësi, një koordinatë, një kënd ose një numër (rreshti i komandave, hyrja dinamike, kutitë e Vetive dhe dialogët), mund të shkruani një llogaritje me `+`, `-`, `*`, `/` dhe kllapa, në vend që ta llogarisni më parë:

| Shkruani | Jep |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (në vizatim me këmbë dhe inç) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, në njësitë e vizatimit (kur njësitë e tij janë caktuar) |
| `@4+7/16,0` | një pikë 4.4375 djathtas nga e fundit |
| `360/7` | një kënd prej 51.43 gradësh |

- Një vizë e shkruar brenda një gjatësie është ende pjesë e saj: `4-7/16` është 4 7/16 dhe `24'-6"` është 24 këmbë 6 inç. Për të zbritur pas shenjës së këmbës, plotësoni gjatësinë më parë, `24'-0"-6"`, ose vendoseni llogaritjen në kllapa me hapësira rreth vizës, `(24' - 6")` (brenda kllapave një hapësirë është hapësirë; jashtë tyre shtypet {{key:Enter}}).
- Një numër i thjeshtë i shtuar te një gjatësi është në njësi vizatimi; shumëzimi ose pjesëtimi me një numër e shkallëzon gjatësinë. Dy gjatësi të shumëzuara japin një sipërfaqe, prandaj `2'*3'` refuzohet.
- `abs`, `round`, `ceil` dhe `floor` funksionojnë gjithashtu: `round(10/3)`.
- Një llogaritje që nuk mund të lexohet refuzohet me treguesin e gabimit, për shembull "Llogaritja mbaron shumë herët (karakteri 3): mungon një vlerë." Asgjë nuk lexohet kurrë si 0. {{cmd:CAL}} shfaq vlerën e një llogaritjeje.

## Hyrja dinamike

{{ui:Dyn}} ({{key:F12}}, në shiriti i gjendjes) vendos vlerat pranë kryqit kur një komandë kërkon një pikë.

- Kur nuk ka ende pikë bazë (pika e parë e një vije), dy fushat janë **X** dhe **Y**.
- Më pas, ato janë **distanca** dhe **këndi** nga pika e fundit.

Shkrimi shkon akoma te rreshti i komandave; fusha pranë kryqit e shfaq atë, dhe shiriti elastik ndjek vlerën.

1. Shkruani një vlerë: ajo shkon në fushën e theksuar.
2. Shtypni {{key:Tab}} (ose një presje pas X). Vlera kyçet (shfaqet me shkronja të trasha) dhe fusha tjetër theksohet. Një distancë e kyçur e mban shiritin elastik aq të gjatë ndërsa synoni me miun.
3. Shkruani vlerën e dytë, ose thjesht synoni, dhe shtypni {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} vizaton 50 njësi drejt lart nga pika e fundit.

Shtypja e {{key:Enter}} pas një vlere pa {{key:Tab}} funksionon si shkrim i distancës së drejtpërdrejtë. Këmbët dhe inçat funksionojnë edhe në fusha (`12'6"`). Kërkesat për distancë dhe kënd (rrezja e një rrethi, një rrotullim) e shfaqin gjithashtu vlerën e tyre pranë kryqit.

## Opsionet dhe parazgjedhjet

- Opsionet shfaqen në kllapa katrore. Shkruani shkronjat e mëdha të një opsioni (`D` për `[Diameter]`, `CL` për `CLose`) dhe shtypni {{key:Enter}}. Fillimet më të gjata të fjalës gjithashtu funksionojnë (`DIA`).
- Një parazgjedhje shfaqet në kllapa këndore, si `<500>`. Shtypni {{key:Enter}} ose klikoni me butonin e djathtë për ta përdorur.

## Layout-e të tjera të tastierës dhe tastierë numerike

Emrat e komandave, emrat e shkurtër dhe shkronjat e opsioneve janë shkronja latine. Me një layout grek, cirilik, hebraik, arabisht, persian, tai ose korean aktiv nuk keni nevojë të ndërroni layout: kur fjala që shkruat nuk është komandë, emër i shkurtër ose opsion siç qëndron, CadCraft e lexon sipas tasteve që shtypët. Tasti i shënuar `L` në një tastierë latine ende e nis `LINE`, dhe tasti `C` ende përgjigjet `Close`, pavarësisht cilën shkronjë vendos layout-i mbi të. Lista e komandave që përputhen mbi rreshtin e komandave ndjek të njëjtën rregull. Teksti që shkruani aty ku komanda kërkon tekst (përmbajtja e {{cmd:TEXT}}, një emër) nuk ndryshohet kurrë.

Në layout-et ku tasti decimal i tastierës numerike jep presje, ai tast shkruan një pikë në rreshtin e komandave dhe në kutitë e numrave, kështu që `12.5` mund të shkruhet në tastierën numerike. Tasti i presjes në tastierën kryesore ende ndan `x,y`.

Të dyja mund të çaktivizohen te {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} dhe {{ui:Keypad decimal key}}.

## Shfaqja e koordinatave

Shiriti i gjendjes shfaq X dhe Y të kryqit (në UCS kur është caktuar një), pasi të jenë zbatuar kapjet dhe Ortho. Ndërsa një komandë ka pikë bazë, shton `Δ` me distancën dhe këndin nga ajo pikë, për shembull `Δ 1500 < 30°`: numrat që do t'i shkruanit si `@1500<30`.

Përdorni {{cmd:ID}} për të shfaqur koordinatat e një pike dhe {{cmd:DIST}} për të matur mes dy pikave.
