---
title: Mitme skanni registreerimine üheks
summary: Aseta eri asukohtadest võetud skannid ühte koordinaatsüsteemi valitud punktipaaride või sisestatud sihtmärkide järgi, täpsusta neid ICP-ga, salvesta registreering projektina ning ekspordi registreeritud pilv LAS- või E57-failina. Käsk on REGISTERSCANS.
keywords: registreeri, registreerimine, skannid, punktipilv, icp, iteratiivne lähima punkti meetod, sihtmärgid, punktipaarid, jäik teisendus, joonda, ühenda, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Mida sa teed

Ühe koha mitu skannit (igaüks oma skanneri asukohast) algavad oma koordinaatides. Registreeri need: anna igale skannile üks paigutus, et kõik oleksid ühes koordinaatsüsteemis, salvesta see projektina ning kirjuta registreeritud pilv ühe LAS- või E57-failina.

## Skannide paigutamine

1. Ava dialoog (kirjuta `REGISTERSCANS` (või `REGSCAN`)). {{ui:Lisa skanne…}} võtab vastu LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- ja XYZ-faile, või saad need lohistada dialoogi. Erinevate ühikutega skannid lükatakse tagasi märkusega: teisenda üks neist enne.
2. Vali {{ui:Liigutatav skann}} ja {{ui:Paiguta mille suhtes}}. Pilt näitab raamis kõiki skanne praegusel kujul, igaüks oma värviga: {{ui:Plaan}}, {{ui:Eestvaade}} või {{ui:Külgvaade}}. Lohista nihutamiseks, suumi hiireratta abil.
3. **Punktipaaride järgi.** Klõpsa {{ui:Vali paar}}, seejärel punkti liigutataval skannil ja sama koha punkti teisel skannil (nurk, sihtmärk, posti alus). Tee seda vähemalt kolm korda, punktidega, mis ei asu ühel joonel ja on laiali. Klõpsa {{ui:Paiguta paaridena}}: skann paigutatakse vähimruutude sobitusega ning **Left over** näitab, kui palju iga paar veel ei klapi. Suure arvuga paar on halb valik: eemalda see ristiga ja paiguta uuesti.
4. **Sihtmärkide järgi.** Kui punkti tegelikud koordinaadid on teada (mõõdistatud sihtmärgid), klõpsa {{ui:Vali, siis sisesta sihtpunkt}}, klõpsa punktil selle skannil ja sisesta sihtmärgi X, Y ja Z reale. Paare ja sisestatud sihtmärke võib vabalt segada.

## Täpsusta ICP-ga

Paarid annavad ligikaudse paigutuse. {{ui:Täpsusta}} liigutab skannit, kuni selle pinnad langevad teise skanni pindadele: esmalt **punkt punktile**, seejärel **punkt tasandile**. Tabel loetleb iga sammu koos veaga ja sobitunud punktide arvuga; sellest kohe ülal olev joon joonistab vea vähenemist. {{ui:Peata}} lõpetab käimasoleva sammu järel ja jätab saavutatu alles. {{ui:Võta tagasi}} võtab tagasi kogu jooksu (või viimase paigutuse); {{ui:Lähtesta}} paigutab skanni tagasi failikoordinaatidele.

Et see sülearvutil kiiresti töötaks, kasutab ICP vaid osa punktidest ({{ui:Kasutatavad punktid}}, 5,000 kuni 60,000) ja ignoreerib sobitusi, mis on kaugemal kui {{ui:Suurim sobitamiskaugus}} (vaikimisi 5% skanni suurusest, kahanedes, kui see stabiliseerub). See vajab esmalt ligikaudset paigutust: skannid, mis vaevalt kattuvad, teatavad, et neid ei saa sobitada. Pinnad, mis on ainult tasased või ainult sirged, ei saa fikseerida asukohta enda suunas; sel juhul lisa paare.

## Salvesta ja ekspordi

- {{ui:Salvesta projekt}} kirjutab väikese `.ccscans.json`-faili: iga skanni nime, suuruse ja selle esimese 64 KB sõrmejälje koos teisendusega. Punkte see ei sisalda. {{ui:Ava projekt…}} leiab skannifailid nende viidete järgi (failid tuleb enne lisada) ja taastab kõik teisendused.
- {{ui:Ekspordi LAS}} ja {{ui:Ekspordi E57}} kirjutavad ühe faili, kus on kõik skannid registreeritud asukohas. Originaalides punkte ei kirjutata ümber; teisendus rakendatakse väljumisel. Kui {{ui:Loe failidest iga punkt}} on sisse lülitatud, loetakse iga fail uuesti iga punkti jaoks (kuni 20 miljonit skanni kohta); kui välja, kirjutatakse ainult vaatleja kuvatud punktid.
- {{ui:Kuva registreeritud pilv}} (CadCraft) kirjutab LAS-faili ja lisab selle joonise alla selle enda koordinaatides, nagu iga teise pilve.

:::note
Midagi ei laadita üles. Registreerimine töötab failide enda ühikutes ja hoiab millimeetrid: LAS kirjutatakse sobiva skaalaga (kuni 0.1 mm), E57 topeltarvudega. Koordinaatsüsteem kantakse LAS-faili ainult siis, kui kõik skannid nimetavad sama EPSG-koodi. E57-kirjutaja on meie enda; seda kontrollitakse, lugedes selle failid tagasi selle lugeja ja libE57Format'iga.
:::
