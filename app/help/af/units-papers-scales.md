---
title: Eenhede, papiergroottes en skale
summary: Wat tekeningeenhede in CadCraft beteken, die papiergroottes vir blaaie en drukke, elke standaardskaal, en hoe teks- en maatgroottes met die druikskaal verband hou.
keywords: eenhede, millimeter, duim, voet, voet en duim, argitektonies, ingenieurs, breuk, breuke, lengteformaat, presisie, meter, papiergrootte, a3, a1, arch d, ansi, tabloid, letter, skaal, 1:100, 1/4 duim, argitektoniese skaal, ingenieursskaal, insunits
from: 7dc9b62e
---

## Tekeningeenhede

Jy teken op volle grootte, in tekeningeenhede. Wat een eenheid beteken, is die tekening se instelling vir **Eenhede**:

1. Druk {{key:Esc}} sodat niks gekies is nie, op die {{ui:Model}}-oortjie.
2. In {{ui:Huidige instellings}}, kies {{ui:Eenhede}}: {{ui:Sonder eenhede}}, {{ui:Millimeter}}, {{ui:Sentimeter}}, {{ui:Meter}}, {{ui:Duim}} of {{ui:Voet}}.

Maatlyne kan hul lengtes in millimeter, sentimeter, meter of kilometer skryf, wat ook al die tekeningeenheid is: sien [Maatlyne in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Om die eenhede te verander, verander niks se grootte nie. Dit verander hoe skale op blaaie en in drukke gelees word, en watter skale aangebied word. 'n Tekening wat uit 'n DWG of DXF oopgemaak word, hou die eenhede wat in die lêer gestoor is; die {{ui:Tekening}}-afdeling van die linkerpaneel wys hulle.

'n {{ui:Sonder eenhede}}-tekening word behandel as in die papier se eenheid: millimeter op ISO-papier, duim op VSA-papier.

## Voet en duim, en breuke

Hoe lengtes **geskryf en getik** word, is 'n aparte instelling, die lengteformaat. Dit verander geen geometrie nie, net hoe getalle lyk en wat jy kan tik.

1. Druk {{key:Esc}} sodat niks gekies is nie, op die {{ui:Model}}-oortjie.
2. In {{ui:Huidige instellings}}, kies {{ui:Lengteformaat}}: {{ui:Desimaal}} (`150.5`), {{ui:Argitektonies}} (`12'-6 1/2"`), {{ui:Ingenieurs}} (`12'-6.5"`), {{ui:Breuk}} (`150 1/2`) of {{ui:Wetenskaplik}} (`1.505E+02`).
3. Kies {{ui:Presisie}}: desimale plekke, of die kleinste breuk (1/16 is die gewone keuse vir argitektonies).

Of tik {{cmd:UNITS}} (`UN`) en antwoord sy twee vrae.

Met {{ui:Argitektonies}} of {{ui:Ingenieurs}} is een tekeningeenheid een duim, soos in AutoCAD: stel {{ui:Eenhede}} ook op {{ui:Duim}}. Jy kan dan lengtes in voet en duim tik waar ook al 'n lengte gevra word, en in die {{ui:Eienskappe}}-blokkies:

| Jy tik | Beteken |
|---|---|
| `12'6"` of `12'-6"` | 12 voet 6 duim (150) |
| `12'6-1/2"` | 12 voet 6½ duim. Gebruik 'n koppelteken voor die breuk: {{key:Space}} is {{key:Enter}} by die opdragreël. |
| `12'` | 12 voet |
| `6"` of `6` | 6 duim: 'n kaal getal is duim |
| `1/2`, `6-1/2` | breuke werk in enige formaat |

Punte neem dieselfde lengtes: `@12'6",0` of `@10'<90`. Hoeke bly in grade.

Die formaat wys in die geskiedenis ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: oppervlaktes as vierkante duim en vierkante voet), in {{ui:Eienskappe}}, in die koördinate op die statusbalk, en in **nuwe maatlyne**. Blaaie hou hul papiereenhede (millimeter of duim) as desimale.

:::note
Die lengteformaat word in DWG- en DXF-lêers gestoor, en elke maatlyn hou sy eie: 'n gestoorde tekening maak weer oop soos jy dit gelaat het.
:::

## Papiergroottes

Blaaie en modeldrukke gebruik hierdie groottes, in albei oriëntasies:

| Papier | Grootte | Eenheid op die blad |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimeter |
| ISO A3 | 420 × 297 mm | millimeter |
| ISO A2 | 594 × 420 mm | millimeter |
| ISO A1 | 841 × 594 mm | millimeter |
| ISO A0 | 1189 × 841 mm | millimeter |
| Letter | 11 × 8.5 duim | duim |
| Legal | 14 × 8.5 duim | duim |
| Tabloid / ANSI B | 17 × 11 duim | duim |
| ANSI C | 22 × 17 duim | duim |
| ANSI D | 34 × 22 duim | duim |
| ARCH C | 24 × 18 duim | duim |
| ARCH D | 36 × 24 duim | duim |
| ARCH E | 48 × 36 duim | duim |

Nuwe blaaie begin op ISO A3 vir metriese en eenheidlose tekeninge, en op Tabloid vir tekeninge in duim of voet. Modeldrukke begin op ISO A4 of Letter op dieselfde manier, en onthou dan jou laaste keuse. Blaaie uit oopgemaakte lêers hou hul eie grootte, en word as "Pasgemaak" gewys wanneer dit nie een van hierdie is nie.

## Skale

'n Skaal `1:n` beteken een eenheid op papier wys n van dieselfde eenheid in die model, so 1:100 wys 1 m van 'n gebou as 10 mm papier. CadCraft werk dit uit uit die tekeningeenhede en die papier se eenheid.

**Metriese skale**, vir elke tekening aangebied: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Argitektoniese skale**, aangebied wanneer die eenhede duim of voet is: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Ingenieursskale**, aangebied wanneer die eenhede duim of voet is: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Jou eie skale.** Tik `SCALELISTEDIT` (of `SCALELIST`) om 'n skaal van jou eie by te voeg, soos 1:75 of 'n terreinskaal van 2 papier : 300 tekening. `Add` vra vir 'n naam, dan die papiereenhede en die tekeningeenhede ('n naam soos `1:75` bied sy eie getalle aan; druk {{key:Enter}} om hulle te neem). `Edit`, `Delete`, `List` en `Reset` werk op dieselfde lys; `Reset` gaan terug na die standaardlys. Jou skale verskyn ná die standaardes in die aansigvenster-skaallys van Eienskappe en in die {{ui:Druk uit na PDF}}-dialoog, en 'n aansigvenster op daardie skaal lees met sy naam. Hulle word in die tekening (DWG en DXF 2000) as die tekening se skaallys gestoor. 'n Tekening wat uit 'n ander program oopgemaak word, bring sy lys saam; skale wat ooreenstem met 'n standaardskaal, word nie twee keer gewys nie.

Wanneer 'n aansigvenster met {{ui:Wys die hele model}} of {{ui:Kies 'n venster op die model…}} gerig word, kies CadCraft die grootste standaardskaal wat pas. {{ui:Pas die hele model in}} stel 'n presiese skaal, wat as 'n gewone verhouding gelees word.

## Groottes op papier en in die model

Teks- en maatgroottes is in die eenhede van die ruimte waarin jy teken.

| Jy wil op papier hê | Getekend op 'n blad | Getekend in die model op 1:50 (mm-tekening) | Getekend in die model op 1/4" = 1'-0" (duimtekening) |
|---|---|---|---|
| 2.5 mm teks | 2.5 | 125 | — |
| 3/32" teks | 0.09375 | — | 4.5 |

Vir maatlyne, hou die groottes as papiergroottes en stel die algemene skaal ({{cmd:DIMSCALE}}) op die druikskaal: 50 vir 1:50, 48 vir 1/4" = 1'-0". Sien [Stel maatlyngroottes](topic:dimension-settings).

## Annoteer volgens skaal

Teken die model op volle grootte en laat CadCraft die somme hierbo vir jou doen.

1. Kies die teks of die maatlyne wat hul grootte op papier moet behou. Merk in Eienskappe {{ui:Annoterend}} aan. {{ui:Grootte op papier}} lees dan, byvoorbeeld, `2.5 mm at 1:50`.
2. Tik {{cmd:ANNOSCALE}} en die skaal waarop die tekening gedruk sal word, soos `1:100`.

Elke annoterende teks en maatlyn word hergrootte sodat dit op dieselfde grootte by die nuwe skaal druk: 2.5 mm teks is 125 hoog in 'n millimetertekening op 1:50 en 250 hoog op 1:100. 'n Paragraaf se breedte verander saam daarmee; 'n maatlyn se teks, pyltjies en gapings verander saam (sy algemene skaal). Dit is een ontdoen-stap, en voorwerpe wat nie annoterend is nie, word nooit verander nie.

Die instelling word in DWG en DXF gestoor: ander programme lees die annoterende vlag, en CadCraft hou ook die skaal waarvoor elke voorwerp bepaal is.

As jou kantoor papierhoogtes in die Verstekbeleide-byvoeging stel (Instellings › Globaal › Verstekbeleide › Annotasiegroottes op papier), stel {{cmd:ANNOSCALE}} ook die hoogte waarmee nuwe teks begin op die kantoor se hoogte vir notas op daardie skaal. Sien [Verstekbeleide](topic:default-policies).

### Een voorwerp op verskeie skale

'n Blad wys dikwels dieselfde plan op 1:100 en 'n deel daarvan op 1:50. Gee die notas en maatlyne albei skale, en elke aansigvenster wys hulle op hul papiergrootte:

1. Kies die annoterende teks en maatlyne en tik `OBJECTSCALE`.
2. Kies `Add` en tik die skaal, byvoorbeeld `1:50`. (`Current scale` voeg die tekening se annotasieskaal by; `List` wys wat elke voorwerp hou; `Delete` haal een weg.)

'n Aansigvenster waarvan die skaal in 'n voorwerp se lys is, wys dit op die grootte vir daardie skaal: 2.5 mm teks word 250 hoog deur 'n 1:100-aansigvenster getekend en 125 hoog deur 'n 1:50 een, op die skerm en in die druk. Die voorwerp bly waar dit is; net die grootte verskil. In 'n aansigvenster op 'n skaal wat nie in 'n voorwerp se lys is nie, wys die voorwerp op die grootte wat dit het, totdat jy `ANNOALLVISIBLE` tik en `OFF` kies: dan word dit daar weggelaat. {{cmd:ANNOSCALE}} verander die voorwerpe wat die nuwe skaal lys en laat die ander soos hulle is.

Die lyste word in DWG en DXF as CadCraft se eie data gestoor. 'n Ander program sien elke voorwerp as annoterend, op die een skaal waarvoor dit bepaal is. Die ANNOALLVISIBLE-skakelaar word nie in die lêer gehou nie.

## Lynwydtes en lyntipes

'n Laag, of 'n voorwerp, kan 'n **lynwydte** (0.05 tot 2.11 mm) en 'n **lyntipe** (gestippel, verborge, middel, fantoom, stip…) hê. Stel hulle in die regterpaneel: met niks gekies nie, is {{ui:Lyntipe}} en {{ui:Lynwydte}} onder {{ui:Huidige instellings}} wat nuwe voorwerpe kry ({{ui:Volgens laag}} om hul laag te volg), en die twee onder {{ui:Laag …}} is die huidige laag s'n. Met voorwerpe gekies, verander dieselfde twee rye en {{ui:Lyntipeskaal}} daardie voorwerpe. Die opdragte is {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) en {{cmd:LTSCALE}} (`LTS`).

Lyntipes wys op die skerm en in drukke. Hul streepies is in tekeningeenhede: 'n metriese tekening gebruik die ISO-groottes (DASHED: 12.7 mm streepies), 'n duimtekening die duimgroottes (0.5"). As die streepies te klein of te groot lyk, verander die tekening se {{ui:Lyntipeskaal}} (LTSCALE): elke streep en gaping word daardeur vermenigvuldig; 'n voorwerp se eie skaal vermenigvuldig dit weer. 'n Patroon wat te fyn is om heeltemal te sien, word as 'n soliede lyn getrek.

Lynwydtes druk in drukke, in mm op die papier ongeag die skaal. Lyne met die {{ui:Standaard}}-lynwydte gebruik die pennedikte wat in die {{ui:Druk uit na PDF}}-dialoog gekies is (0.13 tot 0.70 mm; 0.25 mm om mee te begin); 'n lynwydte van 0 druk as die dunste lyn. Op die skerm is elke lyn een pixel breed totdat jy {{ui:LWT}} op die statusbalk druk (of {{cmd:LWDISPLAY}} tik): dan teken 'n lynwydte bo 0.25 mm breër (0.5 mm = 2 pixels) in die model, en op sy ware breedte op die papier op 'n blad. Die keuse word in hierdie blaaier bewaar.

## Die kantoorstandaard

'n Kantoor kan sy papier-teksHoogtes, lae, titelblokvelde en sjablone in een rekord hou, die kantoorstandaard. CadCraft lees dit in hierdie volgorde: die tekening se eie rekord (gestel met {{cmd:OFFICESTANDARD}} › `Import`, in die lêer bewaar), jou span se gedeelde standaard, dan jou Verstekbeleide. Annoterende teks en maatlyne kry hul papierhoogte daaruit by die annotasieskaal. 'n Leë standaard verander niks nie. {{cmd:OFFICESTANDARD}} › `Layers` voeg die kantoorlae by wat 'n tekening ontbreek.
