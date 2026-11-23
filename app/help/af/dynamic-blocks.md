---
title: Dinamiese blokke
summary: Wat CadCraft met dinamiese blokke in 'n DWG doen: hulle hou hul ware name, wys die toestand waarin hulle gestoor is, wissel sigbaarheidstoestande, wys hul ander waardes, en bly dinamies wanneer hulle gestoor word.
keywords: dinamiese blok, dinamiese blokke, sigbaarheid, sigbaarheidstoestand, omkeer, rek, soektabel, parameters, pasgemaak, blokeienskappe, *u blokke, dinamies
from: dea2ee7c
---

## Wat werk

'n DWG met dinamiese blokke maak oop, en hulle werk tot hier toe:

- **Hul ware name.** 'n Dinamiese blok word in die {{ui:Blokke}}-paneel onder sy eie naam gelys ("Receptacle", "Sink"), nie as 'n naamlose `*U`-blok nie.
- **Die toestand waarin hulle gestoor is.** Elke verwysing wys presies wat die ander program gewys het: die sigbaarheidstoestand waarop dit gestel was, gerek of omgekeer soos dit gestoor is.
- **Die sigbaarheidstoestand wissel.** Kies een verwysing (of verskeie van dieselfde blok), open {{ui:Eienskappe}}, en kies in die {{ui:Pasgemaak}}-afdeling 'n ander toestand uit die {{ui:Sigbaarheid}}-lys. Die verwysing wys daardie toestand dadelik, sy kenmerke ook: dié wat die toestand verberg verdwyn, dié wat dit wys verskyn met hul waardes. 'n Verwysing hou elke waarde, so niks kom leeg terug nie; {{ui:Eienskappe}} lys die versteekte een met "hidden". {{key:Mod+Z}} sit die ou toestand in een stap terug.
- **Handvatpunte.** 'n Gekose dinamiese blok wys sy eie handvatpunte waar sy parameters is: 'n klein driehoek vir die sigbaarheidstoestand (klik dit vir die lys van toestande), pyltjies aan die eindes van 'n afstand, 'n dubbele pyltjie vir 'n omkering. Net die sigbaarheidshandvatpunt werk vandag; die ander sê dit in die statusbalk.
- **Die ander waardes, net lees.** Onder die sigbaarheidslys wys {{ui:Pasgemaak}} ook die blok se afstande, belyningshoeke, omkeertoestande en punte soos die tekening dit hou.
- **Sigbaarheidstoestande wysig.** Maak die blok oop met {{cmd:BEDIT}}: die redigeerder wys een toestand, genoem in die balk bo die tekening (kies 'n ander daar). Tik {{cmd:BVSTATE}} om te wissel, of by te voeg (alles verberg, alles wys, of wat wys behou), te hernoem of 'n toestand te skrap; {{cmd:BVHIDE}} verberg gekose voorwerpe in die toestand wat wys; {{cmd:BVSHOW}} wys die verborgenes verbleik sodat jy die een klik wat teruggebring moet word. Stoor die blok: verwysings wat op 'n hernoemde toestand gestel is, hou dit onder die nuwe naam, en dié op 'n geskrapte toestand wys die eerste toestand.
- **Bly dinamies.** Gestoor as DWG in die weergawe waarin die tekening gekom het, bly die blokke dinamies, met die toestand wat jy gekies het: die ander program maak hulle oop as dieselfde dinamiese blokke. Sigbaarheidstoestande wat jy gewysig het, word ook gestoor: hul nuwe name, die toestande wat jy bygevoeg het en wat elkeen wys.

## Wat net-lees is, of nog nie daar is nie

| Nog nie daar nie | In plaas daarvan, vandag |
|---|---|
| Afstande, hoeke of omkerings verander (rek-, skuif- en omkeer-aksies) | Hulle wys net-lees in {{ui:Pasgemaak}}; wysig in die program wat die blok gemaak het. |
| Opsoek-, XY-, rotasie- en poolparameters | Nog nie gelees nie: die verwysing wys soos gestoor. |
| Die afstand-, omkeer- en punthandvatpunte sleep | Hulle wys waar die parameters is; die sigbaarheidshandvatpunt en die {{ui:Sigbaarheid}}-lys in Eienskappe wissel toestande. |
| Dinamiese blokke maak van die ander program se soort (rek, omkeer, opsoek) | Blokke wat jy in CadCraft maak is gewone blokke; {{cmd:BPARAMETER}} sê so. Jou eie parameters en verskeie sigbaarheidsparameters is in die Parameterbestuurder (sien "Jou eie parameters en sigbaarheidstoestande" hieronder). |
| Voorwerpe van 'n blok met sigbaarheidstoestande in die blokredigeerder byvoeg of uitvee | Die blok word dan as 'n gewone blok gestoor (die redigeerder sê so wanneer dit sluit). |
| Hulle dinamies hou in 'n ander DWG-weergawe of in DXF | Hulle word as gewone blokke gestoor wat die toestand wys wat jy gekies het, en die stoor sê so. |

:::note
Om voorwerpe in {{cmd:BEDIT}} te skuif of te verander, hou 'n blok met sigbaarheidstoestande dinamies. 'n Blok sonder toestande, of een waarvan die voorwerpe in die redigeerder bygevoeg of uitgevee is, word 'n gewone blok.
:::

## Jou eie parameters en sigbaarheidstoestande

'n Blok wat jy in CadCraft maak, kan sy eie parameters en **verskeie** sigbaarheidsparameters dra, elk met sy eie toestande. Tik {{cmd:BPARAMS}} (of `BPM`) om die **Parameterbestuurder** oop te maak vir die blok wat jy in {{cmd:BEDIT}} redigeer, vir die gekose verwysing se blok, of vir die blok wat jy noem.

- **Parameters**: 'n naam, 'n tipe (getal, lengte, hoek, telling, ja/nee), en 'n waarde of 'n formule oor ander parameters (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Kom uit op}} wys die resultaat. 'n Formule wat nie werk nie, of 'n waarde wat nie by sy tipe pas nie (’n telling van 1.5), word geweier en die bestuurder sê hoekom; niks anders verander nie.
- **Sigbaarheidsparameters**: {{ui:Voeg sigbaarheidsparameter by}} maak een met 'n eerste toestand. Elke toestand kan hernoem, verwyder word (die laaste bly) of 'n "wys wanneer"-getal kry. 'n Formule kies die toestand uit die parameters (die toestand waarvan die getal pas, anders die toestand op daardie plek in die lys); sonder 'n formule kies elke verwysing sy eie.
- **Voorwerpe in 'n toestand sit**: in die blokredigeerder kies die voorwerpe, tik {{cmd:BPARAMS}} en klik {{ui:Plaas die gekose voorwerpe hier}} op die toestand. Voorwerpe wat geen sigbaarheidsparameter lys nie, wys altyd.
- **Hierdie verwysing**: begin op 'n gekose verwysing, wys die bestuurder ook daardie verwysing se eie waardes en toestande.

Buite die blokredigeerder is elke verandering een ontdoen-stap. In die blokredigeerder is die veranderinge die redigeerder se: {{ui:Stoor blok}} hou hulle. `-BPARAMS` vra dieselfde op die opdragreël.

**In die lêer.** DWG en DXF hou die parameters, watter voorwerpe in watter toestand is, en elke verwysing se eie waardes, in CadCraft se eie rekords; maak die lêer weer in CadCraft oop en alles is terug. 'n Ander program sien elke verwysing as die blok met al sy voorwerpe, omdat 'n DWG hoogstens een sigbaarheidsparameter per blok van sy eie soort hou. 'n Verwysing wat 'n ander program geskuif het, of 'n blok waarvan die voorwerpe dit verander het, kom terug sonder die dele wat nie meer pas nie (niks word geraai nie).
