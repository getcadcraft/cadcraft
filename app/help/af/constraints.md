---
title: Beperk 'n tekening
summary: Hou lyne horisontaal, punte saam en groottes vas met meetkundige en dimensionele beperkings, en laat die tekening volg wanneer jy 'n grootte verander.
keywords: beperking, beperkings, parametries, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, vryheidsgrade, volledig beperk
from: f8f21fa4
---

## Wat jy gaan maak

'n Plaat waarvan jy die breedte op een plek verander: die sye bly vierkant, een hoek bly waar hy is, en die hoogte bly die helfte van die breedte.

Beperkings werk op lyne, polilyne, sirkels, bogen en punte op die {{ui:Model}}-oortjie. Elke een wat jy byvoeg, is een ontdoen-stap.

## Teken en beperk die omtrek

1. Tik `REC` en druk {{key:Enter}}. Tik `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Tik `AUTOCONSTRAIN` en druk {{key:Enter}}. Tik `ALL`, {{key:Enter}}, en dan weer {{key:Enter}}.

   Die geskiedenis sê "4 beperkings toegepas". Klein blokkies met **H** en **V** verskyn langs die sye: dit is die beperkingstrokies.
3. Tik `GCFIX` en druk {{key:Enter}}. Klik naby die linkeronderhoek. 'n Blokkie met ⊕ verskyn: daardie hoek bly waar hy is.

`AUTOCONSTRAIN` voeg samevallende beperkings by waar punte byna aanmekaar kom, en horisontale of vertikale beperkings waar lyne byna gelyk of loodreg is. Tik `S` by die vraag om te verander hoe naby (0.05 tekeningeenhede en 1° om mee te begin).

## Voeg die groottes by

1. Tik `DCHORIZONTAL` en druk {{key:Enter}}.
2. Klik naby die linkeronderhoek, en dan naby die regteronderhoek.
3. Klik onder die reghoek vir die maatlyn.
4. Die vraag wys `Maatteks <d1=100>`. Tik `width=120` en druk {{key:Enter}}.

   Die reghoek is nou 120 breed, en die etiket lees `width=120`.
5. Tik `DCVERTICAL` en druk {{key:Enter}}, tik `O` en druk {{key:Enter}}, en klik dan op die regterkant.
6. Klik regs daarvan, tik `width/2` en druk {{key:Enter}}.

   Dit is 60 hoog. Die etiket lees `fx: d1=width/2`: 'n uitdrukking beheer dit.

Die geskiedenis sê nou dat die omtrek volledig beperk is. Om die grootte te verander, verander `width` (sien [Gebruik parameters en vergelykings](topic:parameters)), of dubbelklik die `width=120`-etiket, tik 'n nuwe waarde en kies {{ui:Pas toe}}.

## Skuif beperkte voorwerpe

Skuif, roteer, skaal, gripe en die Eienskappe-paneel behou almal die beperkings: wat jy geskuif het, word vasgehou, en die res volg. Wanneer die beperkings nie kan volg nie, word die wysiging nie gemaak nie en die geskiedenis sê hoekom, byvoorbeeld "Nie gedoen nie: die beperkings hou daardie voorwerp waar dit is". Om 'n voorwerp uit te vee, verwyder ook sy beperkings.

## Spieël en sny beperkte voorwerpe

- {{cmd:MIRROR}} kopieer die beperkings tussen die voorwerpe wat jy spieël na die kopieë. Kante (watter kant 'n raaklyn aanraak, en aan watter kant 'n afstand gemeet word) word weer uitgewerk vir die gespieëlde kopie, en gekopieerde mate kry hul eie name, soos by 'n plak. Met `Wis bronvoorwerpe uit` `Y` bly die beperkings op die gespieëlde voorwerpe. Die geskiedenis sê hoeveel saamgekom het.
- {{cmd:TRIM}} hou 'n lyn se of 'n boog se beperkings op wat oorbly: 'n beperking op 'n eindpunt gaan na die stuk wat daardie eindpunt nog het, 'n reël oor rigting ({{ui:Horisontaal}}, {{ui:Vertikaal}}, {{ui:Parallel}}, {{ui:Loodreg}}) hou op elke stuk, en 'n maat tussen die twee buitenste eindpunte meet hulle steeds. Beperkings wat die afgesnyde deel gehou het, of 'n lengte wat die snit verander het ({{ui:Gelyk}}, 'n boog se swaai), verdwyn. 'n Getrimde sirkel hou sy middelpunt- en radiusbeperkings. Getrimde polilyne verloor hul beperkings.

## Die beperkings

| Opdrag | Hou |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | 'n lyn of segment horisontaal of vertikaal (`2P`: twee punte horisontaal of vertikaal) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | twee lyne parallel, vierkant of op een lyn |
| {{cmd:GCCOINCIDENT}} | twee punte saam; `O`: 'n punt op 'n lyn, sirkel of boog |
| {{cmd:GCTANGENT}} | 'n lyn en 'n sirkel of boog, of twee van hulle, wat raak |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | twee sirkels of bogen op een middelpunt; twee lengtes of twee radiusse gelyk |
| {{cmd:GCSYMMETRIC}} | twee punte, lyne of sirkels gespieël oor 'n lyn |
| {{cmd:GCFIX}} | 'n punt (klik naby dit) of 'n hele voorwerp (`O`) waar dit is |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | 'n afstand |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | 'n radius, 'n deursnee, 'n hoek tussen twee lyne of 'n boog se hoek |

{{cmd:GEOMCONSTRAINT}} en {{cmd:DIMCONSTRAINT}} vra watter een; {{ui:Beperk}} en {{ui:Maat}} in die {{ui:Parametries}}-groep voer hulle uit, en {{ui:Meer}} daar lys elkeen. Waar jy klik, kies die deel: 'n klik naby 'n eindpunt, die middel of 'n middelpunt neem daardie punt; 'n klik op 'n polilyn neem die segment onder dit. Die eerste voorwerp bly, en die tweede skuif om daarby aan te sluit.

'n Beperking wat met ander bots, of wat niks byvoeg nie omdat die ander dit reeds impliseer, word met 'n boodskap geweier, en niks beweeg nie.

## Sien, kies en verwyder

- Klik 'n blokkie in 'n beperkingstrokie (of 'n samevallende vierkantjie, of 'n maatetiket) om daardie beperking te kies; die geskiedenis noem dit. Druk {{key:Delete}} om dit te verwyder.
- {{cmd:DELCONSTRAINT}} verwyder elke beperking van die voorwerpe wat jy kies.
- {{cmd:CONSTRAINTBAR}}: `S` wys elke trokie, `H` verberg hulle; kies eers voorwerpe om hulle s'n te wys of te verberg. {{ui:Meer}} het {{ui:Wys beperkingstrokies}} en {{ui:Verberg beperkingstrokies}}.
- {{cmd:DCDISPLAY}} wys of verberg die dimensionele beperkings. Hulle word nooit gedruk nie.
- {{cmd:DCCONVERT}} verander mate wat op lyne, sirkels en bogen geteken is, in dimensionele beperkings.

:::note
As jy AutoCAD se parametriese tekening gebruik het, is die opdragnaam en vraag dieselfde. Beperkings en parameters word in DWG- en DXF-lêers gestoor in 'n vorm wat ander programme ignoreer; sien [Lêers](topic:files#constraints-in-files).
:::
