---
title: Tumia vigezo na milinganyo
summary: Taja vipimo, viendeshe kwa misemo kama upana / 2, na uandike namba kwenye kipimo kinachoendeshwa ili kubadilisha kinachokiendesha.
keywords: vigezo, par, meneja wa vigezo, milinganyo, misemo, vigeu, njia mbili, nia ya muundo, kigezo cha mtumiaji, fx
from: 650b9844
---

## Jedwali moja kwa kila kipimo

Paneli ya {{ui:Parameters}} (kitufe cha {{ui:Parameters}} katika kikundi cha {{ui:Parametric}}, au andika {{cmd:PARAMETERS}}) inaorodhesha kila kizuizi cha kipimo (`d1`, `rad1`, `dia1`, `ang1`, au jina ulilotoa) pamoja na vigezo vyako mwenyewe kwa pamoja. Jina lolote linaweza kutumika katika msemo wowote.

Kila safu ina:

- **Jina**: andika jipya ili kulibadilisha jina; kila msemo unaolitumia unafuata.
- **Msemo**: namba (`40`) au msemo (`upana / 2 + pengo`). Andika ndani yake kisha ubonyeze {{key:Enter}}: mchoro unafuata.
- **Thamani**: matokeo yake. Kwenye safu ambayo msemo unaiendesha, unaweza kuandika namba hapa pia: CadCraft inahesabu kigezo kilicho nyuma yake. Kwa `d1 = upana / 2`, kuandika `30` kwenye thamani ya d1 kunaweka `upana` kuwa 60.

Vigezo viwili vinapoendesha thamani (`upana / 2 + pengo`), kidirisha kinauliza kipi kibadilishwe. Kila badiliko ni hatua moja ya kutendua ({{key:Mod+Z}}).

## Ongeza yako

1. Fungua paneli ya {{ui:Parameters}}.
2. Andika jina (`pengo`) na thamani (`10`), kisha chagua {{ui:Add}}.
3. Itumie: katika msemo wa d1, andika `upana / 2 + pengo` kisha ubonyeze {{key:Enter}}.

Majina yanaanza kwa herufi au `_` na yanashikilia herufi, namba na `_`. Majina ya kazi, `pi` na majina ya vitengo haviwezi kuwa majina.

## Misemo

| Andika | Maana |
|---|---|
| `+ - * / ^ %` | jumlisha, toa, zidisha, gawanya, nguvu, salio |
| `( )` | kupanga makundi |
| `sin cos tan asin acos atan atan2` | trigonometria kwa digrii |
| `sqrt pow exp ln log abs sign` | mizizi, nguvu, logarithimu |
| `ceil floor int round min max` | kuzungusha na mipaka |
| `if(a > b, x, y)` | uchaguzi |
| `pi` | 3.14159… |

Namba zinaweza kubeba kitengo: `25mm`, `1in`, `2'`, `90deg`. Urefu wenye kitengo hubadilishwa kuwa milimita, kwa hiyo tumia vitengo tu katika michoro iliyopimwa kwa milimita; mahali pengine andika namba tupu.

## Kwenye mstari wa amri

`-PARAMETERS` inafanya kazi ile ile bila paneli: `N` mpya, `E` hariri (pia kizuizi cha kipimo), `R` badilisha jina, `D` futa, `?` orodhesha.

## Kinachokataliwa

- Msemo unaojitumia wenyewe, moja kwa moja au kupitia wengine: "upana, d1 zinatumia kila moja nyingine."
- Thamani ambayo kipimo hakiwezi kuchukua: urefu hasi, au pembe zaidi ya 180°.
- Thamani ambayo mchoro hauwezi kuchukua pamoja na vizuizi vyake vingine: hakuna kinachobadilika, na ujumbe unataja vizuizi vinavyozuia.
- Kufuta kigezo ambacho kitu kinakitumia: paneli inatoa kuandika thamani yake kwenye vitu hivyo kwanza. Jina la kizuizi cha kipimo linafutwa kwa kufuta kizuizi chenyewe.
