---
title: Registreer verskeie skanderings tot een
summary: Plaas skanderings wat vanaf verskillende posisies geneem is in een koördinaatstelsel deur gekose puntpare of getikte teikens, verfyn hulle met ICP, stoor die registrasie as 'n projek, en voer die geregistreerde puntwolk uit as LAS of E57. Die opdrag is REGISTERSCANS.
keywords: registreer, registrasie, skanderings, puntwolk, icp, herhalende naaste punt, teikens, puntpare, starre transformasie, belyn, samevoeg, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Wat jy gaan doen

Verskeie skanderings van een plek (elk vanaf sy eie skanderposisie) begin in hul eie koördinate. Registreer hulle: gee elke skandering een plasing sodat hulle almal in een koördinaatstelsel sit, stoor dit dan as 'n projek, en skryf die geregistreerde puntwolk as een LAS- of E57-lêer.

## Plaas die skanderings

1. Maak die dialoog oop (tik `REGISTERSCANS` (of `REGSCAN`)). {{ui:Voeg skanderings by…}} neem LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- of XYZ-lêers, of sleep hulle op die dialoog. Skanderings wat verskillende eenhede gebruik, word geweier met 'n notas: skakel eers een om.
2. Kies {{ui:Skandering om te skuif}} en {{ui:Plaas teen}}. Die prentjie wys elke skandering in die koördinaatstelsel soos dit nou is, elk in een kleur: {{ui:Plan}}, {{ui:Voor}} of {{ui:Syaansig}}; sleep om te skuif, gebruik die wiel om te zoem.
3. **Volgens puntpare.** Klik {{ui:Kies 'n paar}}, dan 'n punt op die skandering wat geskuif moet word, dan dieselfde plek op 'n ander skandering ('n hoek, 'n teiken, die voet van 'n kolom). Doen dit minstens drie keer, met punte wat nie in een lyn lê nie en ver uitmekaar is. Klik {{ui:Plaas volgens pare}}: die skandering word geplaas deur 'n kleinste-kwadrate-passing, en **Oorskot** wys hoe ver elke paar nog mis. 'n Paar met 'n groot getal is 'n slegte keuse: verwyder dit met die kruisie en plaas weer.
4. **Volgens teikens.** As 'n punt se ware koördinate bekend is (opgemeette teikens), klik {{ui:Kies, en tik dan teiken}}, klik die punt op sy skandering, en tik die teiken se X, Y en Z in die ry. Pare en getikte teikens kan vrylik gemeng word.

## Verfyn met ICP

Pare gee 'n growwe plasing. {{ui:Verfyn}} skuif die skandering totdat sy oppervlaktes op die ander skandering se oppervlaktes sit: eers **punt tot punt**, dan **punt tot vlak**. Die tabel lys elke stap met sy fout en hoeveel punte gepaar is; die lyn daarbo wys die fout wat daal. {{ui:Stop}} beëindig die lopie na die stap wat aan die gang is, en hou wat dit bereik het. {{ui:Ontdoen}} neem die hele lopie (of die laaste plasing) terug; {{ui:Stel terug}} plaas die skandering terug by sy lêerkoördinate.

Om dit op 'n skootrekenaar vinnig te hou, werk ICP op 'n verminderde deel van die punte ({{ui:Punte gebruik}}, 5,000 tot 60,000) en ignoreer passings wat verder as {{ui:Grootste passingsafstand}} lê (standaard 5% van die skandering se grootte, wat krimp soos dit stabiliseer). Dit het eers 'n growwe plasing nodig: skanderings wat skaars oorvleuel, meld dat hulle nie gepas kan word nie. Oppervlaktes wat net plat of net reguit is, kan nie 'n posisie langs hulself regstel nie; voeg in daardie geval pare by.

## Stoor en voer uit

- {{ui:Stoor projek}} skryf 'n klein `.ccscans.json`-lêer: elke skandering se naam, grootte en 'n vingerafdruk van sy eerste 64 KB, met sy transformasie. Dit bevat geen punte nie. {{ui:Maak projek oop…}} vind die skanderlêers volgens daardie verwysings (die lêers moet eers bygevoeg word) en herstel elke transformasie.
- {{ui:Voer LAS uit}} en {{ui:Voer E57 uit}} skryf een lêer met elke skandering in sy geregistreerde plek. Punte word nooit in die oorspronklikes herskryf nie; die transformasie word op pad uit toegepas. Met {{ui:Lees elke punt uit die lêers}} aan, word elke lêer vir elke punt weer gelees (tot 20 miljoen per skandering); af, word slegs die punte wat in die kyker gewys word, geskryf.
- {{ui:Wys geregistreerde wolk}} (CadCraft) skryf die LAS en heg dit onder die tekening aan by sy eie koördinate, soos enige wolk.

:::note
Niks word opgelaai nie. Registrasie werk in die lêers se eie eenhede en behou millimeter: 'n LAS word geskryf met 'n skaal wat pas (tot 0.1 mm), 'n E57 met doubles. 'n Koördinaatstelsel word slegs in die LAS gedra wanneer elke skandering dieselfde EPSG-kode noem. Die E57-skrywer is ons eie; dit word nagegaan deur sy lêers terug te lees met hierdie leser en met libE57Format.
:::
