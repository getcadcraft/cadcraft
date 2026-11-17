---
title: Splainid ja murdjooned: SPLINE, SPLINEDIT, PEDIT
summary: Joonista sujuv kõver punktide läbi või juhtmurdjoone järgi, muuda selle sobivust ja juhtpunkte ning muuda murdjooni (ühenda, sulge, laius, sobita, splainiks, eemalda kõverus) või tee splain murdjooneks.
keywords: splain, splinedit, spl, spe, pedit, pe, sobituspunktid, juhtpunktid, kaalud, nurbs, murdjoone muutmine, ühendamine, sobitav kõver, kõveruse eemaldamine, murdjooneks teisendamine, täpsus, puutuja, kõver, sobitustolerants
from: d31f72d8
---

## Mida sa valmistad

Kõver viie punkti kaudu, sama kõver kolmel viisil muudetuna ja murdjoon, mis on tehtud kolmest joonest.

## Joonista splain läbi punktide

1. Kirjuta `SPL` ja vajuta {{key:Enter}}.
2. Klõpsa või sisesta punktid, mille läbi kõver peab minema: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Pärast viimast vajuta {{key:Enter}}.
3. {{ui:Algpuutuja}}: klõpsa punkt, mille suunas kõver peaks algama, või vajuta {{key:Enter}}, et CadCraft otsustaks. Tee sama lõpp-puutuja jaoks.

Kõver läbib iga punkti. Kirjuta `C` {{key:Enter}} asemel, et see sulgeda (kõver tuleb tagasi esimesse punkti). {{key:U}} (`Undo`) võtab joonistamise ajal viimase punkti tagasi.

### Joonista juhtmurdjoone järgi

Kirjuta esimesele küsimusele `M`, seejärel `C` (juhtipunktid) ja aste 1 kuni 5 (3 on tavaline). Nüüd on punktid, mida valid, mitmnurga nurgad, mis tõmbavad kõverat enda poole. Kõver algab esimesest ja lõpeb viimasest punktist. Suletud kõver keerab ringi ilma nurgata liitekohas.

### Muuda murdjoon splainiks

Esimesel küsimusel kirjuta `O` (objekt) ja vali murdjooned või jooned. Need muutuvad splainideks läbi oma tippude ja algsed kustuvad.

## Muuda splaini

Vali see ja kirjuta `SPE` (või kirjuta `SPE` ja klõpsa seda). Haardepunktid näitavad sobituspunkte (või juhtpunkte splainil, millel sobituspunkte pole): lohista üks, et kõverat ümber kujundada. Käsureal:

- **Sobitusandmed** (splain, mis on joonistatud läbi punktide): `A` lisab sobituspunkti (klõpsa, kuhu), `D` kustutab ühe (klõpsa selle lähedal), `M` teisaldab ühe (klõpsa selle lähedal ja seejärel uude kohta), `T` määrab lõppude puutujad, `P` eemaldab sobituspunktid, nii et splaini muudetakse edaspidi juhtpunktide kaudu.
- **Muuda tippu**: `A` lisab juhtpunkti kõverat muutmata, `M` teisaldab ühe, `W` annab ühele **kaalu** (üle 1 tõmbab kõvera selle poole, alla 1 laseb sellest lahti).
- **Ava** või **Sulge**, ja **Pööra** (kõver kulgeb vastupidi).
- **teisenda murdjooneks** (`P`): splain muutub murdjooneks; täpsus on lõikude arv iga vahemiku kohta (10 on tavaline).
- **Undo** võtab viimase muudatuse tagasi; **eXit** lõpetab.

{{ui:Omadused}} näitab splaini astet, mitu sobitus- ja juhtpunkti tal on, selle pikkust, ning lubab selle avada või sulgeda.

## Muuda murdjooni

Vali murdjoon ja kirjuta `PE`. Joon, kaar või splain, mille valid, pakutakse esmalt murdjoonena teisendamiseks (splaini puhul küsitakse täpsust).

- **Sulge** / **Ava** ühendab või eraldab otsad.
- **Ühenda** lisab jooned, kaared ja murdjooned, mille otsad jõuavad murdjoone otsani. `Fuzz distance` on, kui kaugel võivad otsad olla ja veel ühineda (0 tähendab, et need peavad täpselt kokku jõudma).
- **Laius** annab kogu murdjoonele ühe laiuse (0 eemaldab selle).
- **Sobita** asendab murdjoone sujuva kõveraga, mis läbib selle tipud. **Splain** asendab selle kuupsplainiga, mis neid järgib (algab ja lõpeb esimesest ja viimasest tipust ning jääb teistele lähedale). Mõlemad muutuvad lühikestest lõikudest koosnevaks murdjooneks, kuid algsed nurgad säilivad, nii et **Eemalda kõverus** toob need tagasi.
- **Joonetüübi genereerimine** ütleb, kas katkendjoon jätkub murdjoone kogu pikkuses või algab igas tipus uuesti.
- **Pööra** muudab tippude järjekorda. **Mitu** (`M` esimesel küsimusel) muudab mitut murdjoont samade valikutega.

Murdjoone tippude muutmine omaduste paneelil või haardepunktidega jääb samaks: PEDIT-il ei ole tipuredaktorit.

## Failides

DWG ja DXF 2000 säilitavad splaini splainina: aste, juhtpunktid, sõlmed, kaalud, sobituspunktid ja puutujad. Splain, mida avad ja ei muuda, kirjutatakse tagasi täpselt sellisena, nagu see tuli. DXF R12-l splaini ei ole: see salvestatakse kõvera järgi murdjoonena ja ajalugu ütleb, mitu lõiku tehti.

Nihutamine, lõikamine, pikendamine, ümardamine, katkestamine ja ühendamine ei tööta splainidega. {{cmd:EXPLODE}} splain või {{cmd:PEDIT}} seda, et saada murdjoon, mida need käsud võtavad.

## Levinud vead

- **Kõver ületab lähedaste punktide vahel.** Punktide läbiv kõver painutub seal, kus punktid on. Kasuta vähem punkte või juhtmurdjoont.
- **„That is not a spline.“** SPLINEDIT võtab ainult splaine; {{cmd:PEDIT}} muudab murdjooni.
- **Suletud sobituspunktidega splain näeb teises programmis veidi teistsugune välja.** CadCraft sulgeb selle ühe sujuva liitekohaga esimeses punktis; teine programm võib sulgeda perioodilise kõveraga. Suletud juhtpunktidega splain on mõlemas sama.
