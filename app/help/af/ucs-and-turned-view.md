---
title: Draai die aansig en gebruik jou eie koördinate (UCS)
summary: Draai die aansig 90° of tot enige hoek sonder om iets in die tekening te skuif, en stel 'n gebruikerskoördinaatstelsel (UCS) sodat punte, ortho, poolopsporing, die rooster en nuwe teks die gebou se eie asse volg.
keywords: ucs, gebruikerskoördinaatstelsel, grondplan, draai aansig, roteer aansig, aansigdraai, ucs z, ucs 3punt, ucs voorwerp, ucs wêreld, benoemde ucs, ucsfollow, turnleft, turnright, turnworld, geneigde gebou, geroteerde rooster
from: 6f152c65
---

## Wat jy sal leer

Hoe om 'n tekening gedraai te sien, sodat 'n gebou wat in 'n hoek geteken is, reguit op die skerm lees, en hoe om punte langs sy eie asse te tik. Niks in die tekening skuif terwyl jy dit doen nie: voorwerpe behou hul koördinate, 'n draai is nie 'n redigering nie, en die tekening word nie as verander gemerk nie.

## Draai die aansig 'n kwart

1. Klik {{ui:Aansig}} › {{ui:Meer}} › {{ui:Draai aansig 90° links}} of {{ui:Draai aansig 90° regs}}.

Die tekening draai op die skerm om die middel van die tekenarea. Doen dit weer om aan te hou draai.

2. Klik {{ui:Aansig}} › {{ui:Meer}} › {{ui:Terug na wêreld}} om dit weer gelyk te maak.

Die opdragte agter hulle is {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} en {{cmd:TURNWORLD}}. Om een 'n sleutel te gee, voeg 'n reël soos `TL=TURNLEFT` by jou aliasse by met {{cmd:ALIASEDIT}}.

## Belyn met 'n geneigde gebou

1. Tik `UCS` en druk {{key:Enter}}, en dan `OB` en {{key:Enter}}.
2. Klik 'n muurlyn naby die einde wat die oorsprong moet wees.

Die UCS begin nou by daardie einde met sy X-as langs die muur, en die aansig draai sodat die muur op die skerm gelyk lê. Die asikoon in die linkeronderhoek wys waarheen die UCS-asse wys.

3. Teken soos gewoonlik. Met die UCS ingestel:
   - `x,y` en `@dx,dy` word langs die UCS-asse gemeet; `d<a` meet die hoek vanaf die UCS X-as.
   - {{ui:Ortho}}, poolopsporing en die rooster volg die UCS-asse, en so ook die kruisaanwyser.
   - Nuwe teks en nuwe paragrawe loop langs die UCS X-as; {{cmd:DIMLINEAR}} se horisontale en vertikale volg dit ook.
   - Die koördinate in die statusbalk en van {{cmd:ID}} is UCS-koördinate.
4. Om 'n wêreldpunt te tik terwyl 'n UCS ingestel is, sit `*` vooraan: `*0,0` of `@*100,0`.
5. Tik `UCS`, {{key:Enter}}, dan weer {{key:Enter}} om terug te gaan na die wêreld.

## Ander maniere om 'n UCS in te stel

By die {{cmd:UCS}}-prompt:

| Jy tik | Wat dit doen |
|---|---|
| 'n punt | 'n Nuwe oorsprong; klik dan 'n punt op die nuwe X-as, of druk {{key:Enter}} om die hoek te hou |
| `Z` | Draai die UCS om sy oorsprong met 'n hoek wat jy tik (grade, teen die klok in) of kies |
| `3` (3punt) | 'n Oorsprong, 'n punt langs die positiewe X-as, en 'n punt aan die positiewe Y-kant |
| `OB` (VOorwerp) | Uit 'n lyn, boog, sirkel, veelyn-segment, teks, blokverwysing, punt of konstruksielyn |
| `P` (Vorige) | Die UCS voor hierdie een (die laaste tien word behou solank die tekening oop is) |
| `W` (Wêreld) | Terug na die wêreld |
| `NA` (Benoem) | `S` stoor die huidige UCS onder 'n naam, `R` herstel een, `D` skrap een, `?` lys hulle |

Elke verandering draai die aansig sodat die nuwe UCS X-as gelyk is. {{cmd:PLAN}} draai die aansig sonder om die UCS te verander: {{key:Enter}} vir die huidige UCS, `U` vir 'n gestoorde een, `W` vir die wêreld.

## Goed om te weet

- Elke paneel van 'n verdeelde skerm hou sy eie draai. Die UCS behoort aan die tekening.
- Blaaie werk in papierkoördinate; stel 'n UCS op die {{ui:Model}}-oortjie, of binne 'n aansigvenster.
- Keuse-vensters wat in 'n gedraaide aansig gesleep word, kies wat op die skerm binne hulle lê.
- LISP-roetines kry punte in die UCS van `getpoint`, kan `UCSORG`, `UCSXDIR`, `UCSYDIR` en `VIEWTWIST` lees, en `trans` skakel tussen die wêreld, die UCS en die skerm.

:::note
'n Gestoorde lêer hou die UCS en die aansig se draai in 'n latere bou; tot dan hou hulle net solank die tekening oop is.
:::
