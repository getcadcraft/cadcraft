---
title: Voeg in uit 'n lêer of die biblioteek
summary: Bring 'n blok, of 'n hele tekening, in uit 'n ander DWG of DXF, en plaas items uit die Biblioteek, 'n lêer of 'n ander biblioteek, met hul erkennings en opdaterings.
keywords: voeg in, lêer, biblioteek, librarycraft, item, toerusting, blok uit 'n ander tekening, wblock, ontwerpsentrum, erkennings, toekenning, lisensie, opdatering, voer, item.json
from: f6e4e452
---

## Voeg 'n blok uit 'n ander tekening in

1. Tik `I` en druk {{key:Enter}}, of klik {{ui:Voeg in}} in die Blokke-groep.
2. Die opdragreël onderaan die venster vra `Enter block name or [File/Library]`. Tik `F` daar en druk {{key:Enter}}.
3. Kies die DWG of DXF op hierdie rekenaar. Dit word hier gelees; dit word nie oopgemaak nie, en niks word opgelaai nie.
4. In die {{ui:Voeg in vanaf}}-dialoog, kies 'n blok uit die lys (tik in {{ui:Filter blokke}} om dit te vind), of hou {{ui:Die hele tekening}}. Klik {{ui:Voeg in}}.
5. Klik waar dit moet gaan, en vul enige kenmerke in wat dit vra.

Jy kan ook met die {{ui:Blokke}}-paneel begin: tik `F` in sy {{ui:Filter blokke}}-blokkie en druk {{key:Enter}}, of tik iets wat geen blok pas nie en klik {{ui:Uit 'n lêer…}}. `L` en {{ui:Biblioteek…}} maak die biblioteek op dieselfde manier oop. Voor weergawe 0.10.1 het 'n letter wat in {{ui:Filter blokke}} getik is net hierdie tekening se blokke gesoek en "No block matches the filter." gesê.

Om 'n tekening van jou eie blokke byderhand te hou, klik {{ui:Voeg 'n tekening by}} onder {{ui:Biblioteke}} in die {{ui:Blokke}}-paneel en kies die DWG of DXF. Sy blokke word met prente gelys; klik een om dit te plaas.

Die hele tekening kom as een blok in, genoem na die lêer. Blokke binne die blok wat jy gekies het, kom ook. Die lae wat hulle gebruik word by hierdie tekening gevoeg.

As die ander tekening in ander eenhede is (duim en millimeter, byvoorbeeld), skaal CadCraft die verwysing om te pas en sê dit in die geskiedenis.

### Wanneer 'n naam reeds gebruik word

As hierdie tekening reeds 'n blok met dieselfde naam het, vra CadCraft:

- {{ui:Hou bestaande}} gebruik hierdie tekening se blok van daardie naam.
- {{ui:Hernoem}} bring die nuwe een in as `Name (2)`.

Die hele invoeging is een stap: {{key:Mod+Z}} neem die verwysing en die gekopieerde definisies weer weg.

## Maak die biblioteek oop

Klik {{ui:Biblioteek…}} in die {{ui:Blokke}}-paneel, of {{ui:Biblioteek}} in die Blokke-groep, of tik `LIB`. By die `INSERT`-prompt maak `L` dit ook oop.

Die biblioteek het vier bronne, as oortjies:

- {{ui:Biblioteek}}: die CadCraft-biblioteek. Soek volgens naam, maker of model, en filtreer volgens kategorie.
- {{ui:Lêers…}}: 'n item-lêer (`item.json`) uit enige biblioteek, of 'n tekening, sigblad of 3D-model om items uit te maak: 'n DWG of DXF (elke blok word 'n item), 'n CSV met naam- en grootte-kolomme, of 'n glTF- of OBJ-model. Niks word opgelaai nie.
- {{ui:Standaard}}: staalprofiele (as profiele, aansigte of 3D-lede) en standaardonderdele soos boute, moere en laers, hier gemaak uit gepubliseerde tabelle. Sien [Plaas staalprofiele en standaardonderdele](topic:steel-and-standard-parts).
- {{ui:Ander voerstrome}}: ander biblioteke wat op dieselfde manier as Biblioteek antwoord. Voeg hulle adres een keer by; hierdie blaaier onthou dit.

Elke kaart wys 'n voorskou, die naam, die maker en model, die lisensie en die weergawe. 'n Teruggetrokke item word met {{ui:Teruggetrek}} gemerk met die rede; CadCraft vra voordat jy een plaas.

## Plaas 'n item

1. Klik {{ui:Plaas}} op 'n kaart.
2. Klik waar die item moet gaan. Tik eers `R` om dit te draai, of `S` om dit te skaal.
3. By `Enter Item number (CC-ITEM)`, druk {{key:Enter}} vir die volgende vrye nommer, of tik joune.

Die item word 'n blok genoem `LIB_<name>_v<version>`, in hierdie tekening se eenhede getekend. As die tekening geen eenhede het nie, gaan die item in millimeter in en sê die geskiedenis so; stel eers {{ui:Eenhede}} in die regterpaneel.

Sy data kom saam as onsigbare kenmerke: die item se id en weergawe, lisensie en toekenning, maker, model, kategorie en groottes. Sien [Blokkenmerke](topic:attributes).

## Items in jou taal

'n Item kan sy naam en beskrywing in ander tale dra. As hy dit het in die taal waarop CadCraft gestel is (Instellings › Algemeen › Taal), gebruik die kaart en die geplaasde blok se itemnaam dit. Die blok self hou 'n naam wat uit die item se eie naam gemaak is, so 'n tekening het een blok per item, wat ook al die taal was wat dit geplaas het.

## Soek vir opdaterings

1. Maak die biblioteek oop.
2. Klik {{ui:Soek opdaterings}}.

Elke bibliotheekitem in die tekening word gelys met sy itemnommers en of dit op datum is, 'n nuwer weergawe het (en wat verander het), of teruggetrek is. Klik {{ui:Dateer op}} op 'n ry, of {{ui:Dateer alles op}}. Elke verwysing skuif na die nuwe weergawe se blok en behou sy itemnommer, hoeveelheid, plek, hoek en laag. {{key:Mod+Z}} ontdoen 'n opdatering.

## Erken wat jy gebruik het

Klik {{ui:Biblioteekerkennings}}. Elke item word gelys met sy toekenningsreël en lisensie.

- {{ui:Kopieer erkenning}} kopieer een item se reël; {{ui:Kopieer alles}} kopieer elke reël.
- {{ui:Laai CSV af}} stoor die lys met die itemnommers, makers, modelle, lisensies en toekennings. Dit maak oop in enige sigblad.

Lisensies soos CC BY vra dat jy die outeur erken waar jy die werk gebruik. Sit die reëls op die tekening, in die spesifikasie of in die projeknotas.

## Simbole en bates

Die Biblioteek het drie soorte items: Simbole (tekenkonvensies, 2D), Tipes (waaruit 'n element gemaak is) en Bates (fisiese voorwerpe). In die {{ui:Biblioteek}}-oortjie wys die {{ui:Soort item}}-lys Simbole en bates saam, net Simbole, of net Bates. Tipes is waaruit 'n BimCraft-projek gebou word, so CadCraft lys hulle nie.

## Meld aan by die biblioteek

Klik {{ui:Meld aan by die biblioteek}}. 'n Klein venster maak op die webwerf oop; sodra jy daar aangemeld is, kan CadCraft jou span se items wys en registreer wat jy plaas, sodat jy hoor wanneer 'n item wat jy gebruik het verander. Die aanmelding duur vir hierdie blaaiertjie. Herroep dit enige tyd vanaf jou rekening se sekuriteitsbladsy.

## Hou jou eie voorwerpe in My voorwerpe

{{ui:My voorwerpe}} is 'n privaat lys in die Biblioteek wat net jy kan sien. Dit is nie in die openbare biblioteek, nie in soektog nie, en nie vir jou span gewys nie, en dit volg jou rekening na elke rekenaar waar jy by die biblioteek aanmeld.

1. Klik in die Biblioteek-paneel {{ui:Lêers…}} en lees 'n lêer.
2. Op die item wat jy weer wil hê, klik {{ui:Bewaar in my voorwerpe}}.
3. Later, klik {{ui:My voorwerpe}} en klik {{ui:Plaas}}. Dit plaas soos enige bibliotheekitem, en {{ui:Soek opdaterings}} dek dit.
4. {{ui:Verwyder uit my voorwerpe}} haal dit uit die lys. Kopieë wat reeds in tekeninge geplaas is, bly.

Jy moet by die biblioteek aangemeld wees. Lees 'n lêer laai niks op nie; om 'n item te bewaar stuur net daardie een item na jou rekening.

:::note
My voorwerpe word getoets en is dalk nog nie oop vir jou rekening nie. As dit sê "My objects is not open for this account yet", kan jy steeds items uit jou eie lêers met {{ui:Lêers…}} plaas.
:::

## Algemene foute

- **"Making items from IFC types is in BimCraft."** IFC- en familielêers word in die BimCraft-toepassing gelees. Maak die item daar of op die Biblioteek, en gebruik dan sy `item.json` hier.
- **"The library could not be reached."** Jy is vanlyn, of die biblioteek is af. Items wat reeds in die tekening is, word nie geraak nie.
- **'n Item is veel te groot of te klein.** Die tekening se eenhede is verkeerd of nie gestel nie. Ontdoen, stel {{ui:Eenhede}}, en plaas dit weer.
