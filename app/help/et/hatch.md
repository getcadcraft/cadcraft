---
title: Viirutus ja alade täitmine
summary: Täida ala tahke värvi või standardse mustriga, klõpsates selle sees või valides suletud kujundeid, sea mustri mõõtkava ja nurk ning muuda viirutust hiljem.
keywords: viirutus, bhatch, täide, tahke täide, muster, ansi31, ansi37, tellis, muld, võrk, lõikejooned, lõike täide, saar, piirjoon, mõõtkava, nurk
from: 14399174
---

## Mida sa teed

Seinalõige, mis on täidetud ANSI31 mustriga, selles tühjaks jäetud post ja postis tahke täide.

## Viirutamine klõpsates ala sees

1. Joonista ristkülik (`REC`, `0,0`, `@2000,1200`) ja selle sisse ring (`C`, `1000,600`, `300`). Klõpsa {{ui:Ulatus}}.
2. Klõpsa rühmas {{ui:Joonista}} nuppu {{ui:Viirutus}} või sisesta `H` ja vajuta {{key:Enter}}. Ajalugu näitab, milline muster on aktiivne, näiteks `Current hatch: ANSI31, scale 1, angle 0°`.
3. Sisesta `P` ja vajuta {{key:Enter}}, sisesta `ANSI31` ja vajuta {{key:Enter}}.
4. Sisesta `SC` ja vajuta {{key:Enter}}, sisesta `20` ja vajuta {{key:Enter}}. Mustrite suurused on paberil, seega 1:20 mõõtkavas prinditud joonis vajab mõõtkava 20.
5. Kui küsitakse `Pick internal point`, klõpsa ristküliku sees, ringi väljaspool. Viirutus kuvatakse eelvaatena.
6. Vajuta {{key:Enter}}. Ristkülik on viirutatud; ring selle sees jääb tühjaks, sest see on saar.

Klõpsa mitme ala sees enne {{key:Enter}} vajutamist, et need muutuksid üheks viirutuseks. `U` võtab viimase ala tagasi.

## Tahke täide

1. Sisesta `H` ja vajuta {{key:Enter}}.
2. Sisesta `P`, vajuta {{key:Enter}}, sisesta `SOLID` ja vajuta {{key:Enter}}.
3. Klõpsa ringi sees ja vajuta {{key:Enter}}.

## Viirutamine valitud suletud kujunditele

Klõpsamise asemel sisesta kohal `Pick internal point` `S` (Vali objektid), vali suletud polüjooned, ringid või suletud ellipsid ja vajuta {{key:Enter}}. Teiste kujundite sees olevad kujundid jäävad järjest tühjaks (välimine viirutatakse, järgmine jääb tühjaks jne).

## Mustrid

Mustrite küsimuse ees sisesta `?`, et näha nimekirja. Standardsed on ANSI31 kuni ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH ja SOLID. Joonisel, mille ühikuks on toll (või mille pikkusvorming on jalad ja tollid), kasutatakse mustrite tollisuurusi, nagu AutoCADis; muidu millimeetrisuurusi.

{{ui:Nurk}} (`A`) pöörab kogu mustrit: ANSI31 90° nurga all kaldub vastupidi.

**Mustrifailid.** Sisesta kohal `Pick internal point` `F` (Mustrifail) ja vali `.pat`-fail. Failis olevad mustrid lisanduvad nimekirjale; kui neid on rohkem kui üks, küsitakse, milline kasutada. Kui failis pole ühtegi mustrit, mida CadCraft oskab lugeda, teatatakse sellest ja vahele jäetud mustrid loetakse kokku. `.pat`-faili suurustel pole oma ühikut, seetõttu loetakse neid joonise ühikutes. Katsetatud on ainult tavalises `.pat` vormingus kirjutatud faile; teiste programmidega tehtud faile pole proovitud.

## Viirutuse muutmine

Vali viirutus (klõpsa ühte selle joont). Paneelis {{ui:Omadused}}: {{ui:Muster}}, {{ui:Mustri mõõtkava}} ja {{ui:Mustri nurk}}. Avatud jooniste viirutused näitavad oma mustrit, kui see on standardne; muud kuvatakse oma värvi heleda toonina.

## Levinud vead

- **„Selle punkti ümber pole suletud piirjoont.“** Piirjoonel on lünk või osa sellest on ekraanilt väljas: CadCraft vaatab ainult seda, mis on ekraanil. Sulge lünk (suumi nurkade juures sisse) või suumi välja.
- **„Muster on selles mõõtkavas liiga tihe joonistamiseks.“** Jooned oleksid üksteisele lähemal, kui joonis suudab näidata. Kasuta suuremat mõõtkava: proovi prindimõõtkava (1:20 puhul 20).
- **Muster näib kas väga suur või väga väike.** Mõõtkava on joonise ühikutes mustriühiku kohta; vt ülal samm 4.
- **Piirjoone teisaldamine ei teisalda viirutust.** Viirutus ei ole piirjoonega sidunud. Teisalda mõlemad või viirutage uuesti.

## Viirutus, mis jääb oma piirjoone juurde

Käsuga `HATCH` tehtud viirutus mäletab, mis seda piiritleb. Liiguta, pööra või skaleeri piirjoont ning viirutus ja muster liiguvad kaasa. Lohista greipi piirjoone kuju muutmiseks ja viirutus arvutatakse uuesti. Liiguta viirutust eraldi ning piirjoon tuleb kaasa, nagu joonistusprogrammi täidetud kujund.

Seos katkeb, ja käsurida ütleb seda, kui piirjoon enam ei sulgu või muudad viirutuse käsitsi. Viirutus ise jääb alles. Viirutamise ajal sisesta `AS`, et teha eraldiseisvaid viirutusi. Kopeeri viirutus koos piirjoonega ja koopial on oma seos.

`HATCHEDIT` (`HE`) muudab viirutuse mustrit, mõõtkava, nurka ja algpunkti ning seob selle piirjoonega või lõpetab seose. Seos salvestatakse DWG- ja DXF 2000 failidesse. DXF R12 failis viirutuse objekti pole ning teiste programmide seoseid ei loeta: nende puhul kasuta `HATCHEDIT` ja valikut Seo.

Viirutusel, millel pole enam piirjoont (piirjoon kustutati või fail tuli ilma selleta), saab piirjoone tagasi: `HATCHGENERATEBOUNDARY` (`HGB`) joonistab iga viirutuse silmuse ümber suletud polüjoone ning kui vastad Jah, seob viirutuse nende külge.

## Gradientne täide

`GRADIENT` (`GD`) täidab ala gradiendiga mustri asemel: samad valikud nagu `HATCH`-il. Pärast seda küsitakse tüüpi (lineaarne, silindriline, sfääriline, poolsfääriline, kõver ja iga neist pööratult), ühte värvi koos toonilisusega või kahte värvi, nurka ning kas keskel või mitte. `HATCH`-is teeb sama valik `G`. `HATCHEDIT` `G` või {{ui:Omadused}} alt jaotisest Gradient muudab gradienti või muudab mis tahes viirutuse gradiendiks.

Gradient kuvatakse ekraanil ja väljaprintides. Salvestamisel DWG 2004 või hilisemasse vormingusse saavad teised programmid tõelise gradiendiviirutuse. DXF 2000 ja DWG 2000 vormingus gradienti pole: seal hoiab CadCraft selle enda jaoks ja teised programmid näevad tahket täidet esimese värviga.

## Viirutuse lõikamine

`TRIM` lõikab viirutuse nagu iga muu objekti. Klõpsa viirutusel selle poolel, mille soovid ära lõigata: lõikeservad jagavad viirutatud ala ja see tükk eemaldatakse. Kiires režiimis on iga objekt lõikeserv; kui neid on palju, vali servad enne (suvand `T`). Lõigatud viirutus ei ole enam seotud oma piirjoonega, sest see ei täida seda enam.
