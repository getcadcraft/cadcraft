---
title: Meerdere scans tot één registratie samenvoegen
summary: Plaats scans die vanaf verschillende posities zijn gemaakt in één coördinatenstelsel, met gekozen puntparen of getypte doelen, verfijn ze met ICP, sla de registratie op als project en exporteer de geregistreerde puntenwolk als LAS of E57. Het commando is REGISTERSCANS.
keywords: registreren, registratie, scans, puntenwolk, icp, iteratief dichtstbijzijnde punt, doelen, puntparen, starre transformatie, uitlijnen, samenvoegen, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Wat u gaat doen

Meerdere scans van dezelfde plek (elk vanaf een eigen scanpositie) beginnen in hun eigen coördinaten. Registreer ze: geef elke scan één plaatsing, zodat ze allemaal in één coördinatenstelsel liggen. Sla dat daarna op als project en schrijf de geregistreerde puntenwolk als één LAS- of E57-bestand.

## De scans plaatsen

1. Open het dialoogvenster (typ `REGISTERSCANS` (of `REGSCAN`)). {{ui:Scans toevoegen…}} accepteert LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- of XYZ-bestanden, of zet ze in het dialoogvenster. Scans met andere eenheden worden met een opmerking geweigerd: converteer er eerst één.
2. Kies {{ui:Te verplaatsen scan}} en {{ui:Plaatsen tegen}}. De afbeelding toont elke scan in het kader zoals die nu staat, elk in een eigen kleur: {{ui:Plattegrond}}, {{ui:Voor}} of {{ui:Zijkant}}. Sleep om te verschuiven en gebruik het wiel om te zoomen.
3. **Op puntparen.** Klik op {{ui:Een paar kiezen}}, dan op een punt op de te verplaatsen scan, en daarna op dezelfde plek op een andere scan (een hoek, een doel, de voet van een kolom). Doe dit minstens drie keer, met punten die niet op één lijn liggen en ver uit elkaar staan. Klik op {{ui:Plaatsen met paren}}: de scan wordt geplaatst met een kleinstekwadratenpassing, en **Overgebleven** toont hoe ver elk paar nog afwijkt. Een paar met een groot getal is een slechte keuze: verwijder het met het kruisje en plaats opnieuw.
4. **Op doelen.** Als de echte coördinaten van een punt bekend zijn (ingemeten doelen), klik op {{ui:Kiezen, dan het doel typen}}, klik het punt op de bijbehorende scan en typ de X-, Y- en Z-waarde van het doel in de rij. Paren en getypte doelen kunt u vrij combineren.

## Verfijnen met ICP

Paren geven een grove plaatsing. {{ui:Verfijnen}} verplaatst de scan totdat de oppervlakken op die van de andere scan liggen: eerst **punt naar punt**, daarna **punt naar vlak**. De tabel toont elke stap met de fout en het aantal gevonden punten; de regel erboven toont de fout die daalt. {{ui:Stoppen}} beëindigt de run na de lopende stap en behoudt wat er is bereikt. {{ui:Ongedaan maken}} neemt de hele run (of de laatste plaatsing) terug. {{ui:Opnieuw instellen}} zet de scan terug op zijn bestandscoördinaten.

Om het op een laptop snel te houden, werkt ICP op een uitgedunde verzameling punten ({{ui:Gebruikte punten}}, 5,000 tot 60,000) en negeert het overeenkomsten die verder weg liggen dan {{ui:Grootste overeenkomstafstand}} (standaard 5% van de grootte van de scan, die kleiner wordt naarmate het zich stabiliseert). Het heeft eerst een grove plaatsing nodig: scans die nauwelijks overlappen, melden dat ze niet kunnen worden gekoppeld. Oppervlakken die alleen vlak of alleen recht zijn, kunnen een positie langs zichzelf niet vastleggen; voeg in dat geval paren toe.

## Opslaan en exporteren

- {{ui:Project opslaan}} schrijft een klein `.ccscans.json`-bestand: de naam en grootte van elke scan, een vingerafdruk van de eerste 64 KB en de transformatie. Het bevat geen punten. {{ui:Project openen…}} zoekt de scanbestanden op basis van die verwijzingen (de bestanden moeten eerst zijn toegevoegd) en zet elke transformatie terug.
- {{ui:LAS exporteren}} en {{ui:E57 exporteren}} schrijven één bestand met elke scan op zijn geregistreerde plek. De punten in de originelen worden nooit herschreven; de transformatie wordt bij het exporteren toegepast. Met {{ui:Elk punt uit de bestanden lezen}} aan wordt elk bestand voor elk punt opnieuw gelezen (tot 20 miljoen per scan). Staat het uit, dan worden alleen de punten geschreven die in de viewer zijn getoond.
- {{ui:Geregistreerde wolk tonen}} (CadCraft) schrijft de LAS en koppelt die onder de tekening op zijn eigen coördinaten, zoals elke andere wolk.

:::note
Er wordt niets geüpload. Registratie werkt in de eigen eenheden van de bestanden en behoudt millimeters: een LAS wordt geschreven met een schaal die past (tot 0.1 mm), een E57 met doubles. Een coördinatenstelsel wordt alleen in de LAS opgenomen als elke scan dezelfde EPSG-code noemt. De E57-schrijver is van ons eigen; hij wordt gecontroleerd door zijn bestanden terug te lezen met deze lezer en met libE57Format.
:::
