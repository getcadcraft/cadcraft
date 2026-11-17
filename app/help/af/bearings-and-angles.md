---
title: Tik en wys rigtings en hoeke in grade, minute en sekondes
summary: Tik 'n rigting as 'n landmeter se rigting soos N45°23'30"E, of as grade-minute-sekondes waar enige hoek gevra word, en kies met AUNITS hoe die tekening hoeke wys.
keywords: rigting, rigtings, landmeter, kwadrant-rigting, N45E, grade minute sekondes, DMS, hoek, rigting, perseel, persele, uitlê, traverse, AUNITS, ANGUNITS, hoekformaat, polêr, direkte afstand, DIST
from: af805567
---

Oral waar CadCraft 'n **hoek of rigting** vra, kan jy 'n **kwadrantrigting** of 'n hoek in **grade, minute en sekondes** tik, sowel as 'n gewone getal grade.

## Rigtings

'n Rigting noem noord of suid, 'n hoek tot 90°, dan oos of wes:

| Jy tik | Rigting |
|---|---|
| `N45°23'30"E` of `N45d23'30"E` | 45°23'30" vanaf noord na oos |
| `S10-30-00W` of `S 10 30 W` | 10°30' vanaf suid na wes (strepe of spasies tussen die dele) |
| `N45.5E` | 45.5° vanaf noord na oos |
| `N`, `E`, `S`, `W` | reg noord, oos, suid, wes |

Letters kan enige kas wees. In Spaans beteken `O` ook wes (oeste). `d` en `°` beteken dieselfde; `'` is minute en `"` is sekondes.

Om 'n erfgrenslyn van 20 m lank by N45°23'E uit te lê, begin {{cmd:LINE}} en tik die eerste punt, dan `@20<N45d23'E`. Dit werk ook by {{cmd:ROTATE}} se hoekvraag en elke ander vraag wat 'n hoek vra, en in die hoekkassie van {{ui:Dinamiese invoer}}.

## Grade, minute, sekondes

`45°23'30"`, `45d23'30"`, `45d30'` of `45d` is 'n hoek vanaf die X-as, teen die klok in. Die `°` of `d` is nodig: `45-23-30` word as rekenkunde gelees (45 − 23 − 30). Minute en sekondes moet onder 60 wees. 'n Gewone getal, met rekenkunde (`360/7`), werk steeds.

## Hoe hoeke gewys word

Tik {{cmd:AUNITS}} (of kies {{ui:Hoekformaat}} in {{ui:Eienskappe}} › {{ui:Huidige instellings}}) en kies:

- **Desimale grade** (die standaard): `44.6083°`.
- **Grade-minute-sekondes**: `44°36'30"`.
- **Landmeter-rigtings**: `N45°23'30"E`.

Die presisie volg wat jy vir {{cmd:AUNITS}} tik: 0 wys grade, 2 minute, 4 sekondes, en 5 tot 8 voeg desimale van 'n sekonde by. Die formaat wys in {{cmd:DIST}}, op die statusbalk, in die dinamiese invoer en opspoorwenke, en in die hoekkassies van {{ui:Eienskappe}} ('n kassie wat jy wysig, neem enige van die vorme hierbo). Dit is een ontdoen-stap en word in DWG- en DXF-lêers gestoor (`$AUNITS`, `$AUPREC`); LISP lees en skryf dit as `AUNITS` en `AUPREC`.
