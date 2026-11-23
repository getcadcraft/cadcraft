---
title: Dünaamilised plokid
summary: Mida CadCraft teeb DWG-s olevate dünaamiliste plokkidega: need säilitavad oma tõelised nimed, näitavad olekut, milles nad salvestati, vahetavad nähtavusolekuid, näitavad oma muid väärtusi ja jäävad salvestamisel dünaamiliseks.
keywords: dünaamiline plokk, dünaamilised plokid, nähtavus, nähtavusolek, pööra, venita, otsing, parameetrid, kohandatud, plokiomadused, *u plokid, dünaamiline
from: dea2ee7c
---

## Mis töötab

DWG, mis on tehtud dünaamiliste plokkidega, avaneb nii kaugele toimivatena:

- **Tõelised nimed.** Dünaamiline plokk on paneelis {{ui:Blocks}} (Plokid) loetletud oma nime all („Receptacle”, „Sink”), mitte nimeta plokina `*U`.
- **Olek, milles nad salvestati.** Iga viide näitab täpselt seda, mida teine programm näitas: nähtavusolekut, millele see oli seatud, venitatuna või peegeldatuna nii, nagu see salvestati.
- **Nähtavusoleku vahetamine.** Vali üks viide (või mitu sama ploki viidet), ava {{ui:Properties}} (Omadused) ja vali jaotises {{ui:Custom}} (Kohandatud) loendist {{ui:Visibility}} (Nähtavus) mõni teine olek. Viide näitab seda olekut kohe, samuti selle atribuudid: need, mida olek peidab, kaovad, need, mida ta näitab, ilmuvad oma väärtustega. Viide hoiab iga väärtust, nii et midagi ei jää tühjaks; {{ui:Properties}} loetleb peidetud atribuudid märgiga „hidden”. {{key:Mod+Z}} paneb vana oleku ühe sammuga tagasi.
- **Käepidemed.** Valitud dünaamiline plokk näitab oma käepidemeid seal, kus on tema parameetrid: väike kolmnurk nähtavusoleku jaoks (klõps sellel näitab olekute loendit), nooled kauguse otstes, kahesuunaline nool peegeldamiseks. Praegu töötab ainult nähtavusoleku käepide; teised ütlevad seda staatusribal.
- **Muud väärtused, ainult lugemiseks.** Nähtavusloendi all näitab {{ui:Custom}} ka ploki kaugusi, joondusnurki, peegelduse olekuid ja punkte nii, nagu joonis neid hoiab.
- **Nähtavusolekute muutmine.** Ava plokk käsuga {{cmd:BEDIT}}: redaktor näitab ühte olekut, mille nimi on joonise kohal ribal (vali seal teine). Sisesta {{cmd:BVSTATE}}, et lülituda, lisada (peites kõik, näidates kõik või hoides alles need, mis on nähtavad), ümber nimetada või kustutada olek; {{cmd:BVHIDE}} peidab valitud objektid praeguses nähtavas olekus; {{cmd:BVSHOW}} näitab peidetud objekte tuhmina, nii et saad klõpsata nendel, mida tagasi tuua. Salvesta plokk: ümber nimetatud olekule seatud viited säilitavad selle uue nime all ja kustutatud olekule seatud viited näitavad esimest olekut.
- **Jäävad dünaamiliseks.** DWG-na salvestatuna selles versioonis, milles joonis tuli sisse, jäävad plokid dünaamiliseks koos olekuga, mille valisid: teine programm avab need samade dünaamiliste plokkidena. Muudetud nähtavusolekud salvestatakse samuti: nende uued nimed, lisatud olekud ja see, mida iga üks näitab.

## Mis on ainult lugemiseks või veel puudu

| Veel puudu | Praegu selle asemel |
|---|---|
| Kauguste, nurkade või peegelduste muutmine (venitamine, liigutamine, peegeldamine) | Need näidatakse jaotises {{ui:Custom}} ainult lugemiseks; muuda neid programmis, mis plokki tegi. |
| Otsingu, XY, pöörde ja polaarsed parameetrid | Veel ei loeta: viide näitub nii, nagu salvestatud. |
| Kauguse, peegelduse ja punkti käepidemete lohistamine | Need näitavad, kus parameetrid on; nähtavuse käepide ja loend {{ui:Visibility}} paneelis Properties vahetavad olekuid. |
| Teise programmi liiki dünaamiliste plokkide tegemine (venitamine, peegeldamine, otsing) | CadCraftis tehtud plokid on tavalised plokid; {{cmd:BPARAMETER}} ütleb seda. Sinu enda parameetrid ja mitu nähtavusparameetrit on parameetrihalduris (vt allpool „Sinu enda parameetrid ja nähtavusolekud”). |
| Objektide lisamine või kustutamine nähtavusolekutega plokis plokiredaktoris | Plokk salvestatakse siis tavalise plokina (redaktor ütleb seda sulgemisel). |
| Dünaamilisena hoidmine teises DWG versioonis või DXF-is | Need salvestatakse tavaliste plokkidena, mis näitavad sinu valitud olekut, ja salvestus ütleb seda. |

:::note
Objektide liigutamine või muutmine käsuga {{cmd:BEDIT}} jätab nähtavusolekutega ploki dünaamiliseks. Ilma olekuteta plokk või plokk, kellele redaktoris objekte lisati või kustutati, muutub tavaliseks plokiks.
:::

## Sinu enda parameetrid ja nähtavusolekud

CadCraftis tehtud plokk võib kanda oma parameetreid ja **mitut** nähtavusparameetrit, igaühel oma olekutega. Sisesta {{cmd:BPARAMS}} (või `BPM`), et avada **parameetrihaldur** plokile, mida muudad käsuga {{cmd:BEDIT}}, valitud viite plokile või plokile, mille nimetad.

- **Parameetrid**: nimi, tüüp (arv, pikkus, nurk, loendus, jah/ei) ning väärtus või valem teiste parameetrite põhjal (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Comes to}} (Tuleb) näitab tulemust. Valem, mis ei tööta, või väärtus, mis ei sobi oma tüübiga (loendus 1,5), lükatakse tagasi ja haldur ütleb põhjuse; muu ei muutu.
- **Nähtavusparameetrid**: {{ui:Add visibility parameter}} (Lisa nähtavuse parameeter) teeb ühe esimese olekuga. Iga olekut saab ümber nimetada, eemaldada (viimane jääb alles) või anda arvu „näitub, kui”. Valem valib oleku parameetritest (olek, mille number ühtib, muidu olek selles kohas loendis); ilma valemita valib iga viide oma oleku.
- **Objektide panemine olekusse**: plokiredaktoris vali objektid, sisesta {{cmd:BPARAMS}} ja klõpsa olekul {{ui:Put the selected objects here}} (Pane valitud objektid siia). Objektid, mida ükski nähtavusparameeter ei loetle, näitatakse alati.
- **See viide**: kui käivitad valitud viitelt, näitab haldur ka selle viite enda väärtusi ja olekuid.

Väljaspool plokiredaktorit on iga muudatus üks tagasivõtmise samm. Plokiredaktoris kuuluvad muudatused redaktorile: {{ui:Save block}} (Salvesta plokk) hoiab need alles. `-BPARAMS` küsib sama käsurealt.

**Failis.** DWG ja DXF hoiavad parameetreid, seda, millised objektid on millises olekus, ja iga viite enda väärtusi CadCrafti enda kirjetes; ava fail uuesti CadCraftis ja kõik on tagasi. Teine programm näeb iga viidet plokina koos kõigi oma objektidega, sest DWG hoiab oma liigi igas plokis kõige rohkem ühte nähtavusparameetrit. Viide, mida teine programm liigutas, või plokk, mille objekte see muutis, tuleb tagasi ilma nende osadeta, mis enam ei klapi (midagi ei oleta).
