---
title: Blokattribute
summary: Sien en verander die waardes wat 'n blokverwysing dra, soos 'n item-nommer of 'n vervaardiger, en hou hulle wanneer jy 'n kopie stoor.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, titelblok, wysig ter plaatse, attribuutredigeerder, attdef, definieer attribuut, bedit, bloekredigeerder, bclose, attribuut, attribute, attributes, attdef, attrib, etiket, item-nommer, waarde, onsigbaar, konstant, blok, eienskappe, lys, toerustingsetiket
from: 34d307c7
---

## Wat attribute is

'n Attribuut is 'n benoemde waarde wat saam met 'n blokverwysing reis: 'n toerustingsetiket se item-nommer, 'n kamer-etiket se naam, 'n deur se brandgradering. Die blok se definisie sê watter attribute dit het (elkeen het 'n **etiket**, 'n **vraag**, 'n **standaard** en 'n plek, grootte en hoek vir sy teks). Elke verwysing na die blok dra sy eie waardes.

Sommige attribute is **onsigbaar**: hulle hou data, soos 'n vervaardiger of 'n modelnommer, maar teken nooit. Sommige is **konstant**: dieselfde vir elke verwysing, vasgelê deur die blok.

## Waar attribute vandaan kom

- Blokke in DWG- en DXF-lêers wat jy oopmaak, hou hul attribute, met elke verwysing se waardes.
- Blokke wat jy met {{cmd:INSERT}} en die {{ui:Lêer}}-opsie invoer, hou hulle. Sien [Voeg in uit 'n lêer of die biblioteek](topic:insert-from-file-and-library).
- Biblioteekitems kom in as blokke met attribute: 'n sigbare item-nommer en die item se data, onsigbaar.

- Blokke wat jy self maak: definieer attribute met {{cmd:ATTDEF}} eerste (hieronder), kies dan saam met die ander voorwerpe wanneer jy die blok maak.

## Definieer attribute vir jou eie blokke

1. Teken die blok se lyne, byvoorbeeld 'n kamer-etiket.
2. Kies {{ui:Blokke}} › {{ui:Meer}} › {{ui:Definieer attribuut}}, of tik `ATT` en druk {{key:Enter}}.
3. Die geskiedenis wys die modusse (`Invisible=No Constant=No Preset=No`). Tik `I`, `C` of `P` om een te wissel, en druk {{key:Enter}} wanneer hulle reg is. Onsigbare waardes word bewaar maar nie geteken nie; 'n konstante een het dieselfde waarde in elke verwysing; 'n vooraf ingestelde een word nie gevra wanneer jy die blok invoeg nie.
4. Tik die etiket (byvoorbeeld `ROOM_NO`: hoofletters, geen spasies nie), die vraag (`Room number`) en 'n standaardwaarde (`101`).
5. Klik waar die waarde moet kom, en gee die hoogte en die rotasie. Die etiket wys op die tekening.
6. Maak die blok met {{cmd:BLOCK}}, en kies die lyne en die attribuutdefinisies saam. Die verwysing wat hulle vervang, kry die standaardwaardes; elke nuwe {{cmd:INSERT}} vra daarvoor.

'n Gekose attribuutdefinisie wys {{ui:Etiket}}, {{ui:Vraag}}, {{ui:Standaard}} en die modusse in {{ui:Eienskappe}}.

## Verander 'n blok: die bloekredigeerder

{{ui:Blokke}} › {{ui:Meer}} › {{ui:Wysig blok}} ({{cmd:BEDIT}}, `BE`) maak 'n blok op sy eie oop: tik sy naam (of kies eers 'n verwysing). 'n Balk bo-aan sê watter blok jy wysig. Teken, vee uit en verander sy voorwerpe met die gewone opdragte, en voeg attribuutdefinisies by of verander hulle. Klik dan {{ui:Stoor blok}} (of tik {{cmd:BCLOSE}} en `S`): elke verwysing wys die verandering, en een {{key:Mod+Z}} ontdoen alles. {{ui:Gooi veranderinge weg}} ({{cmd:BCLOSE}}, `D`) laat die blok soos dit was.

Wanneer jy attribuutdefinisies bygevoeg, verwyder of verander het, bring stoor ook elke verwysing in lyn: waardes wat jy getik het, word behou, 'n nuwe attribuut kry sy standaard, 'n verwyderde een gaan, en elke attribuut gaan terug na waar die definisie hom plaas. Die geskiedenis sê hoeveel verwysings opgedateer is.

## Wysig 'n titelblok waar dit is (REFEDIT)

'n Titelblok op 'n blad sit dikwels binne 'n blok. Om sy lyne of teks te verander sonder om die blad te verlaat:

1. Kies die titelblok, dan {{ui:Blokke}} › {{ui:Meer}} › {{ui:Wysig ter plaatse}} (of tik {{cmd:REFEDIT}}).
2. Die inhoud word gewone voorwerpe waar hulle is; al die res word vaag en kan nie verander word nie.
3. Verander, vee uit of teken: nuwe voorwerpe word deel van die blok.
4. Klik {{ui:Stoor die blok}} in die balk bo-aan (of tik {{cmd:REFCLOSE}} en `S`). Elke verwysing wys die verandering, en een {{key:Mod+Z}} ontdoen die hele wysiging. {{ui:Gooi weg}} laat die blok soos dit was.

'n Gekoppelde tekening, 'n dinamiese blok, of 'n verwysing wat anders oor en op geskaal is, kan nie ter plaatse gewysig word nie: gebruik {{cmd:BEDIT}} (of maak die gekoppelde tekening oop).

:::note
Stoor of gooi weg in die bloekredigeerder voordat jy die tekening stoor: 'n lêer wat gestoor word terwyl die redigeerder oop is, het die blok soos dit was voor die wysiging.
:::

## Vul hulle in wanneer jy 'n blok plaas

1. Tik `I` en druk {{key:Enter}}, tik die blok se naam en druk {{key:Enter}}.
2. Klik waar dit moet kom.
3. CadCraft vra vir elke waarde, byvoorbeeld `Enter Item number (ITEM) <>`. Tik die waarde en druk {{key:Enter}}, of druk {{key:Enter}} om die standaard in hakies te hou.

Waardes wat die blok as vooraf ingestel merk, en konstante, word nie gevra nie. Hulle kry hul standaard.

## Sien en verander die waardes

1. Klik 'n blokverwysing.
2. In die regterpaneel, onder {{ui:Attribute}}, het elke etiket sy waarde. Onsigbare een sê `hidden`.
3. Klik 'n waarde, tik die nuwe een en druk {{key:Enter}}.

Die tekening wys die nuwe waarde dadelik. Elke verandering is een stap: {{key:Mod+Z}} ontdoen dit.

**Die attribuutredigeerder.** Dubbelklik op 'n verwysing met attribute (of {{cmd:EATTEDIT}}): die dialoog {{ui:Wysig kenmerke}} lys elke etiket met sy vraag en waarde. Tik nuwe waardes; klik 'n ry om daardie attribuut se {{ui:Hoogte}}, {{ui:Rotasie}}, {{ui:Breedtefaktor}}, {{ui:Justeer}}, {{ui:Laag}}, {{ui:Kleur}} en {{ui:Onsigbaar}} vir hierdie verwysing alleen te verander. {{ui:Pas toe}} hou die dialoog oop; {{ui:OK}} pas toe en maak toe. Elke {{ui:Pas toe}} of {{ui:OK}} is een ontdoen-stap.

**Op die opdragreël** vra {{cmd:ATTEDIT}} elke waarde om die beurt: tik 'n nuwe een, of druk {{key:Enter}} om dit te hou.

## Verander die attribuutdefinisies (BATTMAN, ATTSYNC)

{{ui:Blokke}} › {{ui:Meer}} › {{ui:Attribuutbestuurder}} ({{cmd:BATTMAN}}) lys 'n blok se attribute: verander 'n etiket, vraag of standaard, merk {{ui:Onsigbaar}}, {{ui:Konstant}} of {{ui:Vooraf ingestel}}, en skuif hulle op of af (die volgorde waarin waardes gevra word). Met {{ui:Werk die verwysings op (waardes behou)}} gemerk, bring {{ui:Pas toe}} ook elke verwysing in lyn; 'n hernoemde etiket behou sy waardes. Elke {{ui:Pas toe}} is een ontdoen-stap.

{{cmd:ATTSYNC}} bring verwysings met hand in lyn met hul blok se definisies: `S` kies een verwysing, `N` noem 'n blok, `A` doen elke blok. Waardes word behou.

Die waardes van 'n biblioteekitem se eie velde (sy id, weergawe, lisensie en erkenning) word gewys maar kan nie verander word nie, sodat die soek na opdaterings aanhou werk. Sy item-nommer en hoeveelheid is joune om te verander.

## Lys hulle

Kies verwysings en tik `LI` (vir {{cmd:LIST}}). Die geskiedenis wys elke attribuut as `TAG = value`, met `(invisible)` of `(constant)` waar dit van toepassing is.

## Skuif, draai en ontbind

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} en {{cmd:MIRROR}} hou die waardes; die teks beweeg saam met die blok en bly leesbaar.
- {{cmd:EXPLODE}} maak die sigbare attribute gewone teks met hul waardes. Die onsigbare word laat val.

## Stoor

'n Gestoorde DWG en 'n gestoorde DXF hou elke attribuut: elke blok se definisies (ook onsigbare, konstante en vooraf ingestelde) en elke verwysing se waardes. Ander CAD-programme lees hulle as gewone blokattribute.

In 'n DXF R12 word 'n waarde langer as 255 karakters tot 255 ingekort, en die geskiedenis sê so.

## Algemene foute

- **'n Waarde wys nie op die tekening nie.** Dit is onsigbaar, of dit is leeg. Onsigbare waardes wys steeds in die regterpaneel.
- **Die waarde wat ek getik het, het na die opdragreël gegaan.** Klik eers in die waardekassie in die regterpaneel.
