---
title: Voeg in uit 'n lêer of die biblioteek
summary: Haal 'n blok, of 'n hele tekening, uit 'n ander DWG of DXF in, en plaas items uit die Biblioteek, 'n lêer of 'n ander biblioteek, met hul erkennings en opdaterings.
keywords: voeg in, lêer, biblioteek, librarycraft, item, toerusting, blok uit 'n ander tekening, wblock, ontwerpsentrum, erkennings, toekenning, lisensie, opdatering, voer, item.json
from: 316188d2
---

## Voeg 'n blok uit 'n ander tekening in

1. Tik `I` en druk {{key:Enter}}, of klik {{ui:Voeg in}} in die {{ui:Blokke}}-groep.
2. By `Enter block name or [File/Library]`, tik `F` en druk {{key:Enter}}.
3. Kies die DWG of DXF op hierdie rekenaar. Dit word hier gelees; dit word nie oopgemaak nie, en niks word opgelaai nie.
4. In die dialoog {{ui:Voeg in vanaf}}, kies 'n blok uit die lys (tik in {{ui:Filter blokke}} om dit te vind), of hou {{ui:Die hele tekening}}. Klik {{ui:Voeg in}}.
5. Klik waar dit moet gaan, en vul enige eienskappe in wat dit vra.

Die hele tekening kom in as een blok wat na die lêer genoem is. Blokke binne die blok wat jy gekies het, kom ook. Die lae wat hulle gebruik, word by hierdie tekening gevoeg.

As die ander tekening in ander eenhede is (duim en millimeter, byvoorbeeld), skaal CadCraft die verwysing om te pas en sê so in die geskiedenis.

### Wanneer 'n naam reeds gebruik word

As hierdie tekening reeds 'n blok met dieselfde naam het, vra CadCraft:

- {{ui:Hou bestaande}} gebruik hierdie tekening se blok met daardie naam.
- {{ui:Hernoem}} bring die nuwe een in as `Name (2)`.

Die hele invoeging is een stap: {{key:Mod+Z}} haal die verwysing en die gekopieerde definisies weer weg.

## Maak die biblioteek oop

Klik {{ui:Biblioteek…}} in die {{ui:Blokke}}-paneel, of {{ui:Biblioteek}} in die Blokke-groep, of tik `LIB`. By die `INSERT`-prompt open `L` dit ook.

Die biblioteek het vier bronne, as oortjies:

- {{ui:Biblioteek}}: die CadCraft-biblioteek. Soek volgens naam, vervaardiger of model, en filtreer volgens kategorie.
- {{ui:Lêers…}}: 'n itemlêer (`item.json`) uit enige biblioteek, of 'n tekening, sigblad of 3D-model om items van te maak: 'n DWG of DXF (elke blok word 'n item), 'n CSV met naam- en grootte-kolomme, of 'n glTF- of OBJ-model. Niks word opgelaai nie.
- {{ui:Standaard}}: staalprofiele (as snitte, aansigte of 3D-elemente) en standaarddele soos boute, moere en laers, hier gemaak uit gepubliseerde tabelle. Sien [Plaas staalprofiele en standaarddele](topic:steel-and-standard-parts).
- {{ui:Ander voerstrome}}: ander biblioteke wat dieselfde antwoord as Biblioteek gee. Voeg hul adres een keer by; hierdie blaaier onthou dit.

Elke kaart wys 'n voorskou, die naam, die vervaardiger en model, die lisensie en die weergawe. 'n Teruggetrokke item word gemerk {{ui:Teruggetrek}} met die rede; CadCraft vra voordat jy een plaas.

## Plaas 'n item

1. Klik {{ui:Plaas}} op 'n kaart.
2. Klik waar die item moet gaan. Tik eers `R` om dit te draai, of `S` om dit te skaal.
3. By `Enter Item number (CC-ITEM)`, druk {{key:Enter}} vir die volgende vrye nommer, of tik jou eie.

Die item word 'n blok genoem `LIB_<name>_v<version>`, geteken in hierdie tekening se eenhede. As die tekening geen eenhede het nie, gaan die item in millimeter in en die geskiedenis sê so; stel eers {{ui:Eenhede}} in die regterpaneel.

Sy data ry saam as onsigbare attribute: die item se id en weergawe, lisensie en toekenning, vervaardiger, model, kategorie en groottes. Sien [Blokattribute](topic:attributes).

## Items in jou taal

'n Item kan sy naam en beskrywing in ander tale dra. As dit dit in die taal het waarop CadCraft gestel is (Instellings › Algemeen › Taal), gebruik die kaart en die geplaaste blok se itemnaam dit. Die blok self hou 'n naam wat van die item se eie naam gemaak is, so 'n tekening het een blok per item, wat ook al dit geplaas het.

## Soek vir opdaterings

1. Maak die biblioteek oop.
2. Klik {{ui:Soek opdaterings}}.

Elke bibliotheekitem in die tekening word gelys met sy itemnommers en of dit op datum is, 'n nuwer weergawe het (en wat verander het), of teruggetrek is. Klik {{ui:Dateer op}} op 'n ry, of {{ui:Dateer alles op}}. Elke verwysing skuif na die nuwe weergawe se blok en behou sy itemnommer, hoeveelheid, plek, hoek en laag. {{key:Mod+Z}} ontdoen 'n opdatering.

## Erken wat jy gebruik het

Klik {{ui:Biblioteekerkennings}}. Elke item word gelys met sy toekenningsreël en lisensie.

- {{ui:Kopieer erkenning}} kopieer een item se reël; {{ui:Kopieer alles}} kopieer elke reël.
- {{ui:Laai CSV af}} stoor die lys met die itemnommers, vervaardigers, modelle, lisensies en toekennings. Dit open in enige sigblad.

Lisensies soos CC BY vra dat jy die outeur erken waar jy die werk gebruik. Sit die reëls op die tekening, in die spesifikasie of in die projeknotas.

## Simbole en bates

Die Biblioteek het drie soorte items: Simbole (tekenkonvensies, 2D), Tipes (waaruit 'n element bestaan) en Bates (fisiese voorwerpe). In die {{ui:Biblioteek}}-oortjie wys die {{ui:Soort item}}-lys Simbole en bates saam, net Simbole, of net Bates. Tipes is waaruit 'n BimCraft-projek gebou word, so CadCraft lys hulle nie.

## Meld aan by die biblioteek

Klik {{ui:Meld aan by die biblioteek}}. 'n Klein venster open op die webwerf; sodra jy daar aangemeld is, kan CadCraft jou span se items wys en registreer wat jy plaas, sodat jy hoor wanneer 'n item wat jy gebruik het verander. Die aanmelding geld vir hierdie blaaiertblad. Herroep dit enige tyd vanaf jou rekening se sekuriteitsbladsy.

## Algemene foute

- **"Die maak van items uit IFC-tipes is in BimCraft."** IFC- en familielêers word in die BimCraft-program gelees. Maak die item daar of op die Biblioteek, en gebruik dan sy `item.json` hier.
- **"Die biblioteek kon nie bereik word nie."** Jy is vanlyn, of die biblioteek is af. Items wat reeds in die tekening is, word nie geraak nie.
- **'n Item is veel te groot of te klein.** Die tekening se eenhede is verkeerd of nie gestel nie. Ontdoen, stel {{ui:Eenhede}}, en plaas dit weer.
