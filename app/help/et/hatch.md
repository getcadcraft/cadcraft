---
title: Viirutus ja täidetavad alad
summary: Täida ala tahke värvi või standardmustriga, klõpsates selle sees või valides suletud kujundeid, määra mustri mõõtkava ja nurk ning muuda viirutust hiljem.
keywords: viirutus, bhatch, täide, tahke täide, muster, ansi31, ansi37, tellis, muld, võrk, lõikejooned, poché, saar, piirjoon, mõõtkava, nurk
from: e7feb344
---

## Mida sa teed

Seinalõige, mis on täidetud mustriga ANSI31, selles jäetud tühi post ja tahke täide postis.

## Viirutus ala sees klõpsates

1. Joonista ristkülik (`REC`, `0,0`, `@2000,1200`) ja selle sisse ring (`C`, `1000,600`, `300`). Klõpsa {{ui:Extents}}-l (Ulatus).
2. Klõpsa rühmas {{ui:Draw}} (Joonista) nupul {{ui:Hatch}} (Viirutus) või sisesta `H` ja vajuta {{key:Enter}}. Ajalugu ütleb, milline muster on praegu kasutusel, näiteks `Current hatch: ANSI31, scale 1, angle 0°`.
3. Sisesta `P` ja vajuta {{key:Enter}}, sisesta `ANSI31` ja vajuta {{key:Enter}}.
4. Sisesta `SC` ja vajuta {{key:Enter}}, sisesta `20` ja vajuta {{key:Enter}}. Mustri suurused on paberil, nii et joonis, mis prinditakse mõõtkavas 1:20, vajab mõõtkava 20.
5. Küsimuses `Pick internal point` klõpsa ristküliku sees, ringi väljas. Viirutus näitub eelvaates.
6. Vajuta {{key:Enter}}. Ristkülik on viirutatud; ring selle sees jääb tühjaks, sest see on saar.

Klõpsa mitme ala sees enne {{key:Enter}} vajutamist, et teha neist üks viirutus. `U` võtab viimase ala tagasi.

## Tahke täide

1. Sisesta `H` ja vajuta {{key:Enter}}.
2. Sisesta `P`, vajuta {{key:Enter}}, sisesta `SOLID` ja vajuta {{key:Enter}}.
3. Klõpsa ringi sees ja vajuta {{key:Enter}}.

## Viirutus valitud suletud kujunditest

Selle asemel, et klõpsata sisse, sisesta küsimuses `Pick internal point` `S` (Select objects) ja vali suletud polyjooned, ringid või suletud ellipsid, siis vajuta {{key:Enter}}. Kujundid, mis on teiste sees, jäävad tühjaks omakorda (välimine viirutatud, järgmine sees tühi, ja nii edasi).

## Mustrid

Sisesta mustri küsimuses `?`, et saada loend. Standardsed on ANSI31 kuni ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS ja EARTH, ning SOLID. Joonisel tollides (või jalgades ja tollides pikkuse vormingus) kasutatakse mustrite tollisuurusi, nagu AutoCADis; muidu millimeetrisuurusi.

{{ui:Angle}} (Nurk) (`A`) pöörab kogu mustrit: ANSI31 90° nurga all kaldub vastupidi.

**Mustrifailid.** Sisesta `F` (Pattern file) küsimuses `Pick internal point` ja vali `.pat`-fail. Selles olevad mustrid lähevad loendisse; kui neid on rohkem kui üks, küsitakse, millist kasutada. Fail, milles pole ühtegi mustrit, mida CadCraft suudab lugeda, ütleb seda, ja iga vahele jäetud muster loetakse. `.pat`-faili suurustel pole oma ühikut, nii et need loetakse joonise ühikutes. On proovitud ainult tavalises `.pat`-vormingus kirjutatud faile; ühtegi teise programmi tehtud faili pole proovitud.

## Viirutuse muutmine

Vali see (klõpsa ühel selle joonel). Paneelis {{ui:Properties}} (Omadused): {{ui:Pattern}} (Muster), {{ui:Pattern scale}} (Mustri mõõtkava) ja {{ui:Pattern angle}} (Mustri nurk). Avatud joonistest tulevad viirutused näitavad oma mustrit, kui see on üks standarditest; teised näitavad heleda toonina oma värvist.

## Levinud vead

- **„No closed boundary round that point.”** Piirjoonel on lünk või osa sellest on väljaspool ekraani: CadCraft vaatab ainult seda, mis on ekraanil. Sulge lünk (suumi nurkadele) või suumi välja.
- **„The pattern is too dense to draw at this scale.”** Jooned oleksid üksteisele liiga lähedal, kui joonis suudaks neid näidata. Kasuta suuremat mõõtkava: proovi printimismõõtkava (20 mõõtkavale 1:20).
- **Muster tundub kas tohutu või pisike.** Mõõtkava on joonise ühikutes mustriühiku kohta; vt ülal samm 4.
- **Viirutus ei järgi enam oma piirjoont.** {{cmd:HATCH}}-iga tehtud viirutus jääb objektidega, millest see tehti: liiguta, pööra või skaleeri piirjoont ja viirutus läheb kaasa; kuju muutmisel käepidemega arvutatakse viirutus uuesti. Seos lõpeb, kui piirjoon enam ei sulgu, kui muudad viirutuse kuju käsitsi või kui lõikad seda, ja käsurida ütleb seda. Midagi ei kao: viirutage ala uuesti, et see uuesti siduda.

## Viirutus, mis jääb oma piiri juurde

Viirutus, mille teed käsuga `HATCH`, mäletab, mis seda piiritab. Liiguta, pööra või skaleeri piiri ja viirutus koos oma mustriga läheb kaasa. Lohista käepidet, et piiri kuju muuta, ja viirutus arvutatakse uuesti. Liiguta viirutust eraldi ja tuleb kaasa ka selle piirjoon, nagu täidetud kujund joonistusprogrammis.

Seos lõpeb ja käsurida ütleb seda, kui piirjoon enam ei sulgu või kui muudad viirutust käsitsi. Viirutus ise jääb alles. Sisesta viirutamise ajal `AS`, et teha iseseisvaid viirutusi. Kopeeri viirutus koos piirjoonega ja koopial on oma seos.

`HATCHEDIT` (`HE`) muudab viirutuse mustrit, mõõtkava, nurka ja alguspunkti ning seob selle piirjoonega või lõpetab seose. Seos salvestatakse DWG- ja DXF 2000-failides. DXF R12 failil viirutuse objekti pole ja teistes programmides tehtud seoseid ei loeta: nende jaoks kasuta `HATCHEDIT` ja Link.

Viirutus, millel pole enam piirjoont (piirjoon kustutati või fail tuli ilma selleta), saab selle tagasi: `HATCHGENERATEBOUNDARY` (`HGB`) joonistab suletud polyjoone iga viirutuse silmuse ümber ja kui vastad Yes, seob viirutuse nendega.

## Gradienttäide

`GRADIENT` (`GD`) täidab ala gradiendiga mustri asemel: samad valikud mis `HATCH`-il, pärast seda, kui küsitakse tüüp (lineaarne, silindriline, sfääriline, poolsfääriline, kõver, ja igaüks neist pööratult), üks värv tooniga või kaks värvi, nurk ning keskel või mitte. `HATCH`-is teeb sama valik `G`. `HATCHEDIT` `G` või {{ui:Properties}} jaotises Gradient muudab gradienti või teeb mis tahes viirutuse gradiendiks.

Gradient näitub ekraanil ja prindis. Salvesta DWG 2004 või hilisemana ja teised programmid saavad tõelise gradiendiviirutuse. DXF 2000 ja DWG 2000-l gradienti pole: seal hoiab CadCraft seda enda jaoks ja teised programmid näevad tahket täidet esimese värviga.

## Viirutuse lõikamine

`TRIM` lõikab viirutust nagu iga teist objekti. Klõpsa viirutusel lõikeserve küljel, mille tahad ära: servad jagavad viirutatud ala ja see tükk eemaldatakse. Quick režiimis on iga objekt lõikeserv; kui neid on palju, vali servad enne (valik `T`). Lõigatud viirutus ei ole enam oma piirjoonega seotud, sest see ei täida seda enam.
