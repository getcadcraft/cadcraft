---
title: Dinamiese blokke
summary: Wat CadCraft met dinamiese blokke in 'n DWG doen: hulle behou hul ware name, wys die toestand waarin hulle gestoor is, skakel sigbaarheidstoestande, wys hul ander waardes, en bly dinamies wanneer hulle gestoor word.
keywords: dinamiese blok, dinamiese blokke, sigbaarheid, sigbaarheidstoestand, omdraai, rek, opsoek, parameters, pasgemaak, blokeienskappe, *u blokke, dinamies
from: 26b6aa80
---

## Wat werk

'n DWG wat met dinamiese blokke gemaak is, open met hulle wat tot hier toe werk:

- **Hul ware name.** 'n Dinamiese blok word in die paneel {{ui:Blocks}} onder sy eie naam gelys ("Kontakdop", "Spoelbak"), nie as 'n naamlose `*U`-blok nie.
- **Die toestand waarin hulle gestoor is.** Elke verwysing wys presies wat die ander program gewys het: die sigbaarheidstoestand waarop dit gestel was, uitgerek of omgedraai soos dit gestoor is.
- **Die sigbaarheidstoestand skakel.** Kies een verwysing (of verskeie van dieselfde blok), maak {{ui:Properties}} oop, en kies in die afdeling {{ui:Custom}} 'n ander toestand uit die lys {{ui:Visibility}}. Die verwysing wys daardie toestand onmiddellik, ook sy eienskappe: dié wat die toestand verberg, verdwyn, dié wat dit wys, verskyn met hul waardes. 'n Verwysing hou elke waarde, so niks kom leeg terug nie; {{ui:Properties}} lys die verborgenes met "verborge" gemerk. {{key:Mod+Z}} sit die ou toestand in een stap terug.
- **Grepe.** 'n Gekose dinamiese blok wys sy eie grepe waar sy parameters is: 'n klein driehoek vir die sigbaarheidstoestand (klik dit vir die lys van toestande), pyltjies aan die punte van 'n afstand, 'n dubbele pyl vir 'n omdraaiing. Net die sigbaarheidsgreep werk tans; die ander sê dit in die statusbalk.
- **Die ander waardes, net lesbaar.** Onder die sigbaarheidslys wys {{ui:Custom}} ook die blok se afstande, belyningshoeke, omdraaitoestande en punte soos die tekening dit hou.
- **Sigbaarheidstoestande wysig.** Maak die blok oop met {{cmd:BEDIT}}: die redigeerder wys een toestand, genoem in die balk bo die tekening (kies 'n ander daar). Tik {{cmd:BVSTATE}} om te skakel, by te voeg (alles verberg, alles wys, of hou wat wys), 'n toestand te hernoem of uit te vee; {{cmd:BVHIDE}} verberg gekose voorwerpe in die toestand wat wys; {{cmd:BVSHOW}} wys die verborgenes verbleik sodat jy die een kan klik om terug te bring. Stoor die blok: verwysings wat na 'n hernoemde toestand gestel is, behou dit onder sy nuwe naam, en dié wat na 'n uitgevee toestand gestel is, wys die eerste toestand.
- **Bly dinamies.** Gestoor as DWG in die weergawe waarin die tekening gekom het, bly die blokke dinamies, met die toestand wat jy gekies het: die ander program open hulle as dieselfde dinamiese blokke. Sigbaarheidstoestande wat jy gewysig het, word ook gestoor: hul nuwe name, die toestande wat jy bygevoeg het en wat elkeen wys.

## Wat net lesbaar is, of nog nie daar is nie

| Nog nie daar nie | In plaas daarvan, vandag |
|---|---|
| Afstande, hoeke of omdraaiings verander (rek-, skuif-, omdraai-aksies) | Hulle wys net-lesbaar in {{ui:Custom}}; wysig in die program wat die blok gemaak het. |
| Opsoek-, XY-, rotasie- en poolparameters | Nog nie gelees nie: die verwysing wys soos gestoor. |
| Die afstand-, omdraai- en puntgrepe sleep | Hulle wys waar die parameters is; die sigbaarheidsgreep en die lys {{ui:Visibility}} in Properties skakel toestande. |
| Dinamiese blokke maak (parameters byvoeg, of sigbaarheidstoestande by 'n blok wat geen het nie) | Blokke wat jy in CadCraft maak, is gewone blokke; {{cmd:BPARAMETER}} sê so. |
| Voorwerpe van 'n blok met sigbaarheidstoestande in die blokredigeerder byvoeg of uitvee | Die blok word dan as 'n gewone blok gestoor (die redigeerder sê so wanneer dit sluit). |
| Hulle dinamies hou in 'n ander DWG-weergawe of in DXF | Hulle word as gewone blokke gestoor wat die toestand wys wat jy gekies het, en die stoor sê so. |

:::note
Om voorwerpe in {{cmd:BEDIT}} te skuif of te verander, hou 'n blok met sigbaarheidstoestande dinamies. 'n Blok sonder toestande, of een waarvan voorwerpe in die redigeerder bygevoeg of uitgevee is, word 'n gewone blok.
:::
