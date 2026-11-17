---
title: Ievadīt un rādīt rumbus un leņķus grādos, minūtēs un sekundēs
summary: Ievadiet virzienu kā ģeodēzisko rumbu, piemēram, N45°23'30"E, vai kā grādus, minūtes un sekundes jebkurā vietā, kur tiek prasīts leņķis, un izvēlieties, kā rasējums rāda leņķus, ar AUNITS.
keywords: rumbs, rumbi, ģeodēzija, kvadranta rumbs, N45E, grādi minūtes sekundes, DMS, leņķis, virziens, zemesgabals, zemesgabali, izkārtot, poligons, AUNITS, ANGUNITS, leņķa formāts, polārs, tiešais attālums, DIST
from: af805567
---

Jebkurā vietā, kur CadCraft prasa **leņķi vai virzienu**, varat ierakstīt **kvadranta rumbu** vai leņķi **grādos, minūtēs un sekundēs**, kā arī parastu grādu skaitli.

## Rumbi

Rumbs nosauc ziemeļus vai dienvidus, leņķi līdz 90°, tad austrumus vai rietumus:

| Jūs ierakstāt | Virziens |
|---|---|
| `N45°23'30"E` vai `N45d23'30"E` | 45°23'30" no ziemeļiem uz austrumiem |
| `S10-30-00W` vai `S 10 30 W` | 10°30' no dienvidiem uz rietumiem (domuzīmes vai atstarpes starp daļām) |
| `N45.5E` | 45.5° no ziemeļiem uz austrumiem |
| `N`, `E`, `S`, `W` | tieši ziemeļi, austrumi, dienvidi, rietumi |

Burti var būt jebkurā reģistrā. `d` un `°` nozīmē to pašu; `'` ir minūtes un `"` ir sekundes.

Lai izkārtotu 20 m garu zemesgabala robežlīniju pie N45°23'E, sāciet {{cmd:LINE}} un ierakstiet pirmo punktu, tad `@20<N45d23'E`. Tas pats darbojas pie {{cmd:ROTATE}} leņķa uzvednes un katras citas uzvednes, kas prasa leņķi, kā arī leņķa lodziņā {{ui:Dinamiskā ievade}}.

## Grādi, minūtes, sekundes

`45°23'30"`, `45d23'30"`, `45d30'` vai `45d` ir leņķis no X ass, pretēji pulksteņa rādītāju kustības virzienam. `°` vai `d` ir vajadzīgs: `45-23-30` tiek lasīts kā aritmētika (45 − 23 − 30). Minūtēm un sekundēm jābūt zem 60. Parasts skaitlis ar aritmētiku (`360/7`) joprojām darbojas.

## Kā tiek rādīti leņķi

Ierakstiet {{cmd:AUNITS}} (vai izvēlieties {{ui:Leņķa formāts}} cilnē {{ui:Rekvizīti}} › {{ui:Pašreizējie iestatījumi}}) un izvēlieties:

- **Decimālie grādi** (noklusējums): `44.6083°`.
- **Grādi, minūtes, sekundes**: `44°36'30"`.
- **Ģeodēziskie rumbi**: `N45°23'30"E`.

Precizitāte seko tam, ko ierakstāt {{cmd:AUNITS}}: 0 rāda grādus, 2 minūtes, 4 sekundes, un 5 līdz 8 pievieno sekunžu decimāldaļas. Formāts tiek rādīts {{cmd:DIST}}, statusa joslā, dinamiskajā ievadē un izsekošanas padomos, kā arī {{ui:Rekvizīti}} leņķu lodziņos (lodziņš, ko rediģējat, pieņem jebkuru no iepriekš minētajām formām). Tas ir viens atsaukšanas solis un tiek saglabāts DWG un DXF failos (`$AUNITS`, `$AUPREC`); LISP to lasa un raksta kā `AUNITS` un `AUPREC`.
