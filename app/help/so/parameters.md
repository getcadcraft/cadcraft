---
title: Isticmaal halbeegyo iyo isla-siminno
summary: Magacyo u bixi cabbirrada, ku wadi tibaaxyo sida width / 2, oo qor tiro cabbir la wadayo si aad u beddesho waxa wadaya.
keywords: halbeegyo, par, maareeyaha halbeegyada, isla-siminno, tibaaxyo, doorsoomayaal, labo-jihayn, ujeedada naqshadda, halbeeg isticmaale, fx
from: 650b9844
---

## Hal miis oo dhan cabbirrada

Panelka {{ui:Parameters}} (badhanka {{ui:Parameters}} ee kooxda {{ui:Parametric}}, ama qor {{cmd:PARAMETERS}}) wuxuu liistaa dhammaan xaddidaadyada cabbirka (`d1`, `rad1`, `dia1`, `ang1`, ama magaca aad siisay) iyo halbeegyadaada wada jir. Magac kasta waxaa lagu isticmaali karaa tibaax kasta.

Safka kasta wuxuu leeyahay:

- **Magac**: ku qor magac cusub si aad u beddesho; tibaax kasta oo isticmaalaysa wuu raacaa.
- **Tibaax**: tiro (`40`) ama tibaax (`width / 2 + gap`). Ku qor, kadibna riix {{key:Enter}}: naqshaddu wuu raacaa.
- **Qiime**: waxa uu u dhigan yahay. Safka uu tibaaxu wadayo, waxaad halkan ku qori kartaa tiro: CadCraft wuxuu xisaabiyaa halbeegga ka dambeeya. Marka `d1 = width / 2`, qorida `30` qiimaha d1 wuxuu dejinayaa `width` ilaa 60.

Marka laba halbeeg wadaan qiime (`width / 2 + gap`), dialog-ku wuxuu weydiinayaa midka la beddelayo. Isbeddel kasta waa hal tallaab oo ka noqod ah ({{key:Mod+Z}}).

## Ku dar kaaga

1. Fur panelka {{ui:Parameters}}.
2. Ku qor magac (`gap`) iyo qiime (`10`), kadibna dooro {{ui:Add}}.
3. Isticmaal: tibaaxa d1, ku qor `width / 2 + gap` oo riix {{key:Enter}}.

Magacyada waxay ku bilaabmaan xaraf ama `_` waxayna ku jiraan xarfo, tiro iyo `_`. Magacyada shaqada, `pi` iyo magacyada unugyada lama isticmaali karo.

## Tibaaxyada

| Qor | Macnaha |
|---|---|
| `+ - * / ^ %` | ku dar, ka jar, dhufo, qaybi, awood, hadhaaga |
| `( )` | kooxeynta |
| `sin cos tan asin acos atan atan2` | trigonometry darajooyinka |
| `sqrt pow exp ln log abs sign` | xididdada, awoodaha, logarithms |
| `ceil floor int round min max` | wareejinta iyo xadadka |
| `if(a > b, x, y)` | doorasho |
| `pi` | 3.14159… |

Tirooyinku waxay leeyihiin unug: `25mm`, `1in`, `2'`, `90deg`. Dherer oo leh unug waxaa loo beddelaa millimitir, sidaas darteed unugyada isticmaal kaliya naqshadaha lagu cabbiray millimitir; meelaha kale qor tirooyin caadi ah.

## Command line-ka

`-PARAMETERS` wuxuu sameeyaa waxa isla panel-la'aan: `N` cusub, `E` tafatir (xaddidaadda cabbirka sidoo kale), `R` magac cusub, `D` tirtir, `?` liis.

## Waxa la diidaa

- Tibaax isticmaalaya naftiisa, toos ama dadban: "width, d1 use each other."
- Qiime cabbir aan qaadan karin: dherer taban, xagal ka badan 180°.
- Qiime uu naqshaddu aan qaadan karin xaddidaadyadeeda kale: wax ma beddelmaan, fariintuna waxay magacaabaa xaddidaadyada hor taagan.
- Tirtirka halbeeg ay wax isticmaalaan: panelku wuxuu soo jeediyaa inuu qiimaha ku qoro meelahaas marka hore. Magaca xaddidaadda cabbirka waxaa lagu tirtiraa xaddidaadda laftiisa.
