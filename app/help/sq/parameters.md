---
title: Përdor parametrat dhe ekuacionet
summary: Emëro përmasat, drejtoji me shprehje si width / 2, dhe shkruaj një numër te një përmasë e udhëhequr për të ndryshuar atë që e udhëheq.
keywords: parametra, par, menaxheri i parametrave, ekuacione, shprehje, ndryshore, dy-drejtimësh, qëllimi i projektimit, parametër përdoruesi, fx
from: 650b9844
---

## Një tabelë për çdo përmasë

Paneli {{ui:Parametrat}} (butoni {{ui:Parametrat}} te grupi {{ui:Parametrike}}, ose shkruaj {{cmd:PARAMETERS}}) liston çdo kufizim dimensional (`d1`, `rad1`, `dia1`, `ang1`, ose emrin që i the) dhe parametrat e tu bashkë. Çdo emër mund të përdoret në çdo shprehje.

Çdo rresht ka:

- **Emri**: shkruaj një të re për ta riemërtuar; çdo shprehje që e përdor e ndjek.
- **Shprehja**: një numër (`40`) ose një shprehje (`width / 2 + gap`). Shkruaj në të dhe shtyp {{key:Enter}}: vizatimi ndjek.
- **Vlera**: çfarë llogaritet. Në një rresht që drejtohet nga një shprehje, mund të shkruash edhe një numër këtu: CadCraft llogarit parametrin pas tij. Me `d1 = width / 2`, shkrimi i `30` te vlera e d1 vendos `width` në 60.

Kur dy parametra drejtojnë një vlerë (`width / 2 + gap`), një dialog pyet cilin të ndryshosh. Çdo ndryshim është një hap zhbërjeje ({{key:Mod+Z}}).

## Shto të tuajat

1. Hap panelin {{ui:Parametrat}}.
2. Shkruaj një emër (`gap`) dhe një vlerë (`10`), pastaj zgjidh {{ui:Shto (A)}}.
3. Përdore: te shprehja e d1, shkruaj `width / 2 + gap` dhe shtyp {{key:Enter}}.

Emrat fillojnë me një shkronjë ose `_` dhe përmbajnë shkronja, shifra dhe `_`. Emrat e funksioneve, `pi` dhe emrat e njësive nuk mund të jenë emra.

## Shprehjet

| Shkruaj | Do të thotë |
|---|---|
| `+ - * / ^ %` | mbledh, zbrit, shumëzon, pjesëton, fuqi, mbetja |
| `( )` | grupim |
| `sin cos tan asin acos atan atan2` | trigonometri në gradë |
| `sqrt pow exp ln log abs sign` | rrënjë, fuqi, logaritme |
| `ceil floor int round min max` | rrumbullim dhe kufij |
| `if(a > b, x, y)` | një zgjedhje |
| `pi` | 3.14159… |

Numrat mund të mbajnë një njësi: `25mm`, `1in`, `2'`, `90deg`. Gjatësitë me një njësi kthehen në milimetra, kështu që përdor njësi vetëm në vizatime të matura në milimetra; gjetiu shkruaj numra të thjeshtë.

## Në rreshtin e komandave

`-PARAMETERS` bën të njëjtën gjë pa panel: `N` e re, `E` redakto (edhe një kufizim dimensional), `R` riemëro, `D` fshi, `?` liston.

## Çfarë refuzohet

- Një shprehje që përdor veten, drejtpërdrejt ose përmes të tjerëve: "width, d1 use each other." (width dhe d1 përdorin njëri-tjetrin.)
- Një vlerë që një përmasë nuk mund ta marrë: një gjatësi negative, një kënd mbi 180°.
- Një vlerë që vizatimi nuk mund ta marrë me kufizimet e tjera: asgjë nuk ndryshon, dhe mesazhi emëron kufizimet që pengojnë.
- Fshirja e një parametri që diçka përdor: paneli ofron ta shkruajë vlerën e tij te ata para. Emri i një kufizimi dimensional fshihet duke fshirë kufizimin.
