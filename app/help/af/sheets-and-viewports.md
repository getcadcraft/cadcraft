---
title: Stel 'n blad op met 'n titelblok en aansigvensters
summary: Maak 'n blad (uitleg) met 'n rand en titelblok, stel die aansigvenster se skaal, voeg 'n tweede aansigvenster vir 'n detail by, en vul die titelblok in.
keywords: uitleg, blad, papierruimte, aansigvenster, mview, vpview, titelblok, skaal, papiergrootte, rand, vports, druikskaal, mspace, pspace, modelruimte, betree aansigvenster, dubbelklik aansigvenster
from: 45a45de8
---

## Wat jy gaan maak

'n A3-blad met 'n titelblok, die hele plan in een aansigvenster op 1:100, en 'n tweede aansigvenster wat een hoek op 1:20 wys.

## Model en blaaie

Jy teken die gebou op die oortjie {{ui:Model}}, op volle grootte: 'n 6 m muur is 6000 eenhede lank in millimeter. 'n **Blad** (uitleg) is 'n stuk papier, gemeet in millimeter of duim. 'n **aansigvenster** is 'n venster in die blad wat die model op 'n skaal wys.

## Voor jy begin

1. Maak 'n plan oop of teken een op die oortjie {{ui:Model}}.
2. Druk {{key:Esc}} sodat niks gekies is nie.
3. In {{ui:Huidige instellings}}, stel {{ui:Eenhede}} op die eenheid waarin jy geteken het, byvoorbeeld {{ui:Millimeter}}.

Eenhede is belangrik: 'n aansigvenster se skaal soos 1:100 beteken een millimeter op die papier wys 100 werklike millimeter, so CadCraft moet weet wat een tekeneenheid is. 'n Tekening wat as {{ui:Sonder eenhede}} gelaat word, word geneem as in die papier se eenheid (millimeter op ISO-papier, duim op VS-papier).

## Maak die blad

1. Klik die {{ui:+}}-knoppie regs van die oortjies onder die tekening, of tik `LAYOUT` en druk {{key:Enter}}, of klik {{ui:Nuwe blad}}.

'n Nuwe oortjie, `Layout1`, gaan oop. Jy behoort 'n blad op 'n donkerder lessenaar te sien: 'n rand, 'n titelblok in die onderregterhoek en een aansigvenster bo dit wat die hele model wys op die grootste standaardskaal wat pas. Die geskiedenis noem die papier: ISO A3 vir metriese en sonder-eenheid tekeninge, Tabloid (ANSI B) vir tekeninge in duim of voet.

2. Klik {{ui:Omvang}} om die blad op die skerm te pas.

## Kies die papier

1. Druk {{key:Esc}} sodat niks gekies is nie. Die kop van die regterpaneel lees "Sheet: Layout1".
2. In {{ui:Naam}}, tik `A-101 Plan` en druk {{key:Enter}}. Die oortjie word hernoem.
3. In {{ui:Papier}}, kies 'n grootte.
4. In {{ui:Oriëntasie}}, kies {{ui:Liggend}} of {{ui:Staande}}.

:::warning
Die verandering van die papier skuif of verander nie wat reeds op die blad is nie. Kyk na verandering dat die rand, die titelblok en die aansigvenster steeds pas, en skuif of verander hulle grootte met die handvatsels. Wisseling tussen millimeter- en duimpapier hou die getalle, so alles verander grootte: die statusbalk waarsku jou.
:::

## Stel die aansigvenster se skaal

1. Klik die aansigvenster se raam (sy rand). Die paneelkop lees "Viewport".
2. In {{ui:Skaal}}, kies `1:100`.

Die model binne die aansigvenster teken weer op 1:100, gesentreer waar dit was. Die lys bied metriese skale van 10:1 tot 1:10000 aan; tekeninge in duim of voet kry ook argitektoniese skale (1/4" = 1'-0" en dergelike) en ingenieursskale (1" = 20' en dergelike). {{ui:Pas die hele model in}} stel 'n presiese, nie-standaard skaal wat alles pas.

3. As die plan nie meer gesentreer is nie, verander {{ui:X}} en {{ui:Y}} onder {{ui:Aansigmiddelpunt (model)}} in die regterpaneel: dit is die modelpunt wat in die middel van die aansigvenster gewys word.

## Wys 'n deel van die model in 'n aansigvenster

1. Met die aansigvenster gekies, klik {{ui:Kies 'n venster op die model…}} in die regterpaneel (of tik `VPVIEW` en druk {{key:Enter}}).
2. CadCraft skakel na die oortjie {{ui:Model}}. Klik een hoek van die gebied wat gewys moet word.
3. Klik die teenoorgestelde hoek.

Jy is terug op die blad, en die aansigvenster wys daardie gebied op die grootste standaardskaal wat pas; die geskiedenis sê watter. {{ui:Wys die hele model}} gaan terug na die hele plan op 'n standaardskaal.

## Voeg 'n tweede aansigvenster vir 'n detail by

1. Maak plek op die blad: kies die eerste aansigvenster en sleep 'n hoekhandvatsel om dit kleiner te maak.
2. Tik `MV` en druk {{key:Enter}}, of klik {{ui:Aansigvenster}} in die groep Blaaie.
3. Klik een hoek van die nuwe aansigvenster op die blad.
4. Klik die teenoorgestelde hoek.

Die nuwe aansigvenster wys die hele model. Die geskiedenis sê sy skaal.

5. Klik die nuwe aansigvenster se raam.
6. Klik {{ui:Kies 'n venster op die model…}} en kies 'n klein gebied rondom een hoek van die plan.
7. In {{ui:Skaal}}, kies `1:20`.

Aansigvenster-rame is op die laag `Viewports`, wat ingestel is om nie te druk nie, so die rame wys op die skerm maar nie in die PDF nie.

## Vul die titelblok in

Die titelblok is gemaak van gewone lyne en teks op die laag `Title block`. Dit begin met die tekeningnaam, die skaal van die eerste aansigvenster, vandag se datum en die bladnommer.

1. Dubbelklik die groot titelteks. 'n Redigeerkassie gaan oop daaroor.
2. Tik die titel van die blad.
3. Klik {{ui:OK}}, of druk {{key:Mod+Enter}}.

Doen dieselfde vir die ander velde. Gebruik {{cmd:TEXT}} om in die leë "DRAWN BY"-sel te skryf. Die SCALE-teks werk nie self by wanneer jy 'n aansigvenster se skaal verander nie: redigeer dit met die hand.

## Teken op die blad

Enigiets wat jy op 'n bladoortjie teken, is op die papier, in papiereenhede: teks 3,5 hoog is 3,5 mm hoog op 'n ISO-blad. Notas, noordpyle en bladrande hoort hier.

Om die plan self te verander, gaan na die oortjie {{ui:Model}}, of werk deur 'n aansigvenster (volgende afdeling); elke aansigvenster wys die verandering.

## Werk op die model deur 'n aansigvenster

1. Dubbelklik binne 'n aansigvenster, weg van sy raam. Of tik `MS` en druk {{key:Enter}}: met een aansigvenster op die blad gaan dit direk in; met verskeie, klik binne die een wat jy wil hê.

Die raam word swaarder geteken, die geskiedenis sê jy is binne, en die blad se oortjie bly gekies. Alles wat jy nou teken of verander, is op die model, in modeleenhede, soos op die oortjie {{ui:Model}}: 'n lyn wat binne 'n aansigvenster op 1:100 geteken word, is in werklike millimeter. Lae wat in hierdie aansigvenster bevries is, kan hier nie gekies word nie.

2. Draai die wiel of sleep met die middelknoppie om te zoem en te panoreer wat die aansigvenster wys. Die blad bly waar dit is.
3. Dubbelklik enige plek buite die raam, of tik `PS` en druk {{key:Enter}}.

Jy is terug op die blad. Die aansigvenster hou die aansig waarmee jy dit verlaat het; {{key:Mod+Z}} sit die ou aansig in een stap terug. Om enige oortjie onder die tekening te klik, verlaat ook die aansigvenster.

:::note
'n Aansigvenster waarvan die wys gesluit is ({{ui:Skerm gesluit}} in Eienskappe) hou sy aansig: binne dit beweeg panoreer en zoem die hele blad. 'n Aansigvenster wat af is, kan nie betree word nie.
:::

## Merk 'n aansig met sy naam

'n Aansigtitel onder 'n aansigvenster kan die aansigvenster se aansignaam wys en daarmee bybly:

1. Gee die aansig 'n naam: kies die aansigvenster se raam en vul {{ui:Aansig-naam}} in Eienskappe in — of stoor die aansig op die oortjie {{ui:Model}} met {{cmd:NAMEDVIEW}} en, met die aansigvenster gekies, tik `VPVIEW`, `V` en die aansig se naam: die aansigvenster wys daardie aansig en neem sy naam.
2. Tik `VIEWLABEL` (`VL`) en druk {{key:Enter}}, en klik dan waar die etiket moet kom ({{key:Enter}} plaas dit onder die aansigvenster se linkeronderhoek).

Wanneer die aansig se naam verander, verander die etiket saam daarmee, in dieselfde ongedaan-stap.

## Bevries 'n laag in een aansigvenster

Om 'n laag in een aansigvenster te versteek maar nie in die ander nie (meubels in 'n detail, byvoorbeeld):

1. Kies die aansigvenster se raam, of werk binne dit (dubbelklik).

Die paneel {{ui:Lae}} kry een knoppie meer op elke ry, en 'n reël bo die lys sê so.

2. Klik daardie knoppie op die laag se ry.

Die laag verdwyn net uit daardie aansigvenster. Klik weer om dit te ontvries; {{key:Mod+Z}} ontdoen enige van die twee. Vir verskeie lae of aansigvensters op een slag, tik `VPLAYER`: `F` (Freeze) of `T` (Thaw), die laagname (`A-*` neem elke laag wat met A- begin), dan `C` (Current), `A` (All) of `S` (Select). `VPLAYER` `V` (Vpvisdflt) kies lae wat nuwe aansigvensters bevroren begin.

## Meer blaaie

Elke {{ui:+}} voeg nog 'n blad by (`Layout2`, `Layout3` …) met die volgende bladnommer. Om die oop blad te verwyder, druk {{key:Esc}} en klik {{ui:Skrap hierdie blad}} in die regterpaneel. Dit vra nie eers nie; {{key:Mod+Z}} bring dit terug.

Druk 'n blad met {{ui:Plot this sheet}} of {{key:Mod+P}}; sien [Druk na PDF](topic:plot-pdf).

## Algemene foute

- **Die aansigvenster wys niks nie.** Die model is leeg, of die aansig is na iets anders gerig. Kies die raam en klik {{ui:Wys die hele model}}.
- **Die skaallys wys net verhoudings en geen voet-en-duim-skale nie.** Stel {{ui:Eenhede}} op {{ui:Duim}} of {{ui:Voet}} op die oortjie {{ui:Model}}.
- **1:100 lyk tien keer te groot of te klein.** Die tekeneenhede is verkeerd. Stel {{ui:Eenhede}} op wat een eenheid werklik is.
- **Klik op die plan binne die aansigvenster kies niks.** Op 'n blad kies jy die blad se eie voorwerpe. Dubbelklik eers binne die aansigvenster om aan die plan daardeur te werk.
- **Klikke buite die aansigvenster doen niks nie.** Jy is binne 'n aansigvenster: dubbelklik buite dit, of tik `PS`, om weer aan die blad te werk.
- **"Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first."** {{cmd:MVIEW}} werk net op 'n bladoortjie.
