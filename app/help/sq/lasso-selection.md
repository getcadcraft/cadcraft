---
title: Përzgjedhja me lasso
summary: Shtyp dhe tërhiq një kontur me dorë të lirë rreth objekteve për t'i përzgjedhur, si dritare, kalim ose gardh; ndërro me Space ndërsa tërheq.
keywords: lasso, lassomode, tërheqje, dorë e lirë, përzgjidh, përzgjedhje, dritare, kalim, gardh, hapësirë, shumëkëndësh, prekje, stilolaps, drejtkëndësh
from: 9ec6154d
---

## Çfarë do të mësoni

Si të përzgjidhni objekte duke vizatuar rreth tyre, dhe si taktheni drejtkëndëshin kur ju duhet.

## Vizatoni një lasso

1. Vizatoni disa vija dhe rrethe pranë njëri-tjetrit.
2. Pa asnjë komandë në ekzekutim, shtypni butonin e miut mbi një pikë boshe, dhe tërhiqni rreth disa prej tyre, duke lëvizur **djathtas** fillimisht.
3. Lëshoni.

Përzgjidhen vetëm objektet që janë plotësisht brenda konturit. Konturi vizatohet i plotë ndërsa tërhiqni: ky është një lasso dritare.

## Dritare, kalim dhe gardh

Cilët objekte merrni varet nga lëvizja e parë e tërheqjes suaj, dhe nga {{key:Space}}:

| Tërhiqni | Lasso | Përzgjedh |
|---|---|---|
| Djathtas fillimisht | Dritare (kontur i plotë) | Vetëm objektet **plotësisht brenda** |
| Majtas fillimisht | Kalim (me vija, jeshile) | Objektet brenda **dhe** objektet që kontura prek |
| Shtyp {{key:Space}} gjatë tërheqjes | Dritare, pastaj kalim, pastaj gardh | Gardh (një shteg me vija, i pambyllur): vetëm objektet që shtegu i kalon |

1. Shtypni mbi një pikë boshe dhe tërhiqni rreth disa objekteve, duke lëvizur **majtas** fillimisht. Përzgjidhet edhe gjithçka që prek konturi.
2. Shtypni {{key:Esc}}.
3. Shtypni dhe tërhiqni përsëri; ndërsa ende mbani butonin, shtypni {{key:Space}} një herë. Konturi kthehet në kalim; shtypni {{key:Space}} sërish për gardh.

{{key:Shift}} gjatë lëshimit i heq objektet nga përzgjedhja në vend të kësaj (me "Klikimi i objekteve: Shton" në Cilësimet).

## Brenda një komande

Lasso funksionon kudo ku CadCraft kërkon `Përzgjidh objektet`: vizatojeni, pastaj shtypni {{key:Enter}} për ta përfunduar. {{cmd:STRETCH}} merr një lasso kalimi si dritare të tij, kështu që mund të zgjatni një pjesë në formë L të vizatimit me një veprim.

{{cmd:TRIM}} dhe {{cmd:EXTEND}} e përdorin tërheqjen ndryshe: aty ai pret (ose zgjat) çdo copë që shtegu e kalon. Shihni [Prerja dhe zgjatja](topic:trim-and-extend).

## Drejtkëndëshi

Një klikim mbi hapësirë boshe, një lëvizje dhe një klikim i dytë vizatojnë gjithmonë dritaren drejtkëndësh (nga e majta në të djathtë) ose kalimin (nga e djathta në të majtë).

Për ta bërë që një tërheqje të vizatojë përsëri drejtkëndëshin, hapni {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Tërheqja për përzgjedhje}} dhe zgjidhni {{ui:Drejtkëndësh}}, ose shkruani {{cmd:LASSOMODE}}, pastaj `0`. Shkruani {{cmd:LASSOMODE}}, pastaj `1` për lasso. Zgjedhja mbahet në këtë shfletues.

:::touch
Tërhiqni me gisht ose stilolaps në të njëjtën mënyrë. Një prekje e thjeshtë zgjedh ende një objekt.
:::

## Gabimet e zakonshme

- **Asgjë nuk u përzgjodh.** Lasso ishte dritare dhe asnjë objekt nuk ishte plotësisht brenda. Filloni tërheqjen majtas, ose shtypni {{key:Space}} gjatë tërheqjes.
- **Tërheqja zhvendosi një dorezë.** Shtypja mbi dorezën e një objekti të përzgjedhur e zhvendos dorezën. Filloni lasso-n mbi një pikë boshe.
- **Space e mbylli komandën.** {{key:Space}} e ndërron lasso-n vetëm ndërsa butoni është i shtypur; ndryshe është Enter.
