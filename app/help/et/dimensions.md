---
title: Plaani mõõtmine
summary: Lisa lineaarseid, joondatud, nurga-, raadiuse ja läbimõõdu mõõte, ahela neid käskudega Jätka ja Baasmõõt ning muuda mõõdu teksti.
keywords: mõõt, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, dco, dba, ahel, märgistamine, mõõtmise tööriist, kus, leia, tööriistariba, mõõda, mm, cm, m, km, ühikud
from: 9ee65123
---

## Mida sa valmistad

Mõõdetud ruum: üldine laius ja kõrgus, mõõtude ahel ühe seina ääres, kaldseina, kumer nurk ja nurk.

Enne alustamist loe [Mõõtude suuruste seadistamine](topic:dimension-settings), kui su joonis on suur: mõõtude tekst on vaikimisi 2.5 joonise ühikut kõrge, mis on millimeetrites mõõdetud joonisel väga väike. Allpool olevate sammude jaoks tipi esmalt `DIMSCALE`, vajuta {{key:Enter}}, tipi `50` ja vajuta {{key:Enter}}.

## Kus on mõõdutööriistad

CadCrafti menüüstiilis (see, millega CadCraft algab) on mõõdutööriistad joonise kohal olevas tööriistaribas grupis {{ui:Märkused}}: {{ui:Lineaarne}}, {{ui:Joondatud}}, {{ui:Nurk}}, {{ui:Raadius}} ja {{ui:Läbimõõt}}. Grupi menüüs {{ui:Veel}} on {{ui:Jätka mõõtu}} ja {{ui:Baasmõõt}}. Hoia kursorit nupu kohal, et näha, mida see teeb.

- Menüüstiilis {{ui:Klassikaline joonistus}} või {{ui:Riba}} ava vahekaart {{ui:Märkused}}: tööriistad on selle paneelis {{ui:Mõõdud}}. {{ui:Klassikaline joonistus}} on ka {{ui:Lineaarne}} vahekaardil {{ui:Avaleht}}, grupis {{ui:Märgistamine}}. Vt [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).
- Või tipi käsk joonise all olevasse käsritta ja vajuta {{key:Enter}}: `DLI` (lineaarne), `DAL` (joondatud), `DAN` (nurk), `DRA` (raadius), `DDI` (läbimõõt), `DCO` (jätka), `DBA` (baas).
- Kitsal ekraanil on tööriistariba üks rida: pühi seda külgsuunas, et jõuda vahekaardini {{ui:Märkused}}.

Millimeetrites, sentimeetrites, meetrites või kilomeetrites pikkuste näitamiseks vt [Mõõdud mm, cm, m või km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Joonista midagi mõõdetavat

1. Tipi `PL` ja vajuta {{key:Enter}}.
2. Tipi `0,0` ja vajuta {{key:Enter}}.
3. Tipi `@6000,0` ja vajuta {{key:Enter}}.
4. Tipi `@1500<60` ja vajuta {{key:Enter}}.
5. Tipi `@0,2700` ja vajuta {{key:Enter}}.
6. Tipi `@-6750,0` ja vajuta {{key:Enter}}.
7. Tipi `C` ja vajuta {{key:Enter}}. Kontuur sulgub.
8. Tipi `C` ja vajuta {{key:Enter}}, et alustada ringi.
9. Klõpsa ruumi sees, seintest eemal, keskpunkti jaoks.
10. Tipi `600` ja vajuta {{key:Enter}}. See on post.
11. Klõpsa {{ui:Ulatus}}.

## Lineaarne: horisontaalne või vertikaalne

1. Tipi `DLI` ja vajuta {{key:Enter}}.
2. Viibal `Määra esimese mõõtejoone algpunkt` haakuda alumise vasaku nurgaga (Lõpp-punkt) ja klõpsa.
3. Viibal `Määra teise mõõtejoone algpunkt` haakuda alumise parema nurgaga ja klõpsa.
4. Liiguta ristkursor ruumi alla. Mõõt järgib, horisontaalselt.
5. Klõpsa, et paigutada mõõtejoon.

Ajalugu ütleb `Mõõdu tekst = 6000`.

Koht, kuhu joone paigutad, määrab suuna: all või üleval annab horisontaalse mõõdu, vasakul või paremal vertikaalse. Suuna sundimiseks tipi enne paigutamist `H` (horisontaalne), `V` (vertikaalne) või `R` (pööratud, seejärel nurk).

:::tip
Vajuta esimeses viibas {{key:Enter}}, selle asemel et valida punkt, ja klõpsa seejärel joon, kaar, ring või polüjoone lõik. CadCraft võtab mõlemad otsad sinu eest.
:::

## Jätka: mõõtude ahel

{{cmd:DIMCONTINUE}} ({{ui:Märkused}} › {{ui:Veel}} › {{ui:Jätka mõõtu}}, või `DCO`) jätkab viimasest lineaarsest või joondatud mõõdust, mille tegid; iga uus algab sealt, kus eelmine lõppes.

1. Tipi `DLI` ja vajuta {{key:Enter}}.
2. Tipi `0,0` ja vajuta {{key:Enter}} esimese algpunkti jaoks.
3. Tipi `2000,0` ja vajuta {{key:Enter}} teise algpunkti jaoks.
4. Klõpsa ruumi alla, et see paigutada.
5. Tipi `DCO` ja vajuta {{key:Enter}}.
6. Tipi `4500,0` ja vajuta {{key:Enter}}. Teine mõõt järgneb esimesele, samal joonel.
7. Haakuda parema alumise nurgaga ja klõpsa. Kolmas lõpetab ahela.
8. Vajuta {{key:Enter}}, et käsk lõpetada.

:::note
Siin on punktid tipitud absoluutsete koordinaatidena meelega. `@` punkt loeb viimasest punktist, mille andsid, ja viimane punkt on koht, kuhu paigutasid eelmise mõõtejoone, mitte mõõdu ots. Absoluutsed punktid, haakumised või paljas kaugus koos sisselülitatud {{ui:Ortho}}-ga on mõõtude ahelas turvalisemad.
:::

Tipi `U` ja vajuta {{key:Enter}}, et võtta ahelast viimane mõõt tagasi, lahkumata käsust.

## Baasmõõt: ühest joonest pinutud mõõdud

{{cmd:DIMBASELINE}} ({{ui:Märkused}} › {{ui:Veel}} › {{ui:Baasmõõt}}, või `DBA`) mõõdab iga uut mõõtu viimase mõõdu esimesest algpunktist ja pinub iga ühe sammu võrra kaugemale.

1. Tipi `DLI` ja vajuta {{key:Enter}}.
2. Haakuda vasaku alumise nurgaga ja klõpsa.
3. Haakuda vasaku ülemise nurgaga ja klõpsa.
4. Liiguta ristkursor ruumi vasakule ja klõpsa. Ilmub vertikaalne mõõt.
5. Tipi `DBA` ja vajuta {{key:Enter}}.
6. Haakuda 60-kraadise seina ülemise otsaga (Lõpp-punkt) ja klõpsa. Ilmub teine vertikaalne mõõt, ühe sammu võrra esimesest kaugemal.
7. Vajuta {{key:Enter}}, et lõpetada.

## Joondatud: kaldjoone tegelik pikkus

1. Tipi `DAL` ja vajuta {{key:Enter}}.
2. Vajuta {{key:Enter}}, et valida objekt.
3. Klõpsa 60-kraadist seina.
4. Liiguta väljapoole ja klõpsa, et paigutada.

Tekst loeb 1500: tegelik pikkus, mõõdetud mööda seina.

## Raadius ja läbimõõt

1. Tipi `DRA` ja vajuta {{key:Enter}}.
2. Klõpsa veeru ringi.
3. Liiguta ristkursorit. Juhtjoon läheb keskpunktist ristkursori suunas.
4. Klõpsa, et paigutada tekst.

Tekst loeb `R600`. {{cmd:DIMDIAMETER}} (`DDI`) teeb sama ⌀ märgi ja läbimõõduga.

## Nurk

Seinad siin on üks polüjoon, seega mõõda nurka selle tipu järgi. (Kahe eraldi joone vahel saad klõpsata hoopis jooni.)

1. Tipi `DAN` ja vajuta {{key:Enter}}.
2. Viibal `Vali kaar, ring või joon või tipu jaoks Enter` vajuta {{key:Enter}}.
3. Viibal `Määra nurga tipp` haakuda alumise parema nurgaga ja klõpsa.
4. Viibal `Määra nurga esimene lõpp-punkt` haakuda alumise vasaku nurgaga ja klõpsa.
5. Viibal `Määra nurga teine lõpp-punkt` haakuda 60-kraadise seina ülemise otsaga ja klõpsa.
6. Liiguta ristkursor ruumi sisse, nurga lähedale, ja klõpsa.

Tekst loeb `120°`, nurga sisemine nurk. Kui paigutad mõõdu nurga teisele poole, mõõdab see hoopis nurka sellel pool. Esimesel viibal klõpsa kaar, et mõõta selle hõlmatud nurka, või klõpsa kaks joont, et mõõta nende vahelist nurka.

## Muuda teksti

Oma teksti kirjutamiseks tipi `T` ja vajuta {{key:Enter}} enne mõõdu paigutamist, seejärel tipi tekst. Sinu tekstis tähistab `<>` mõõdetud väärtust: `<> TYP.` annab `6000 TYP.`. Vajuta {{key:Enter}} tühjal real, et jätta mõõdetud väärtus.

Olemasoleva mõõdu muutmiseks:

1. Klõpsa seda.
2. Parempoolses paneelis tipi väljale {{ui:Tekst}}. Jäta tühjaks, et näha mõõdetud väärtust.
3. Vajuta {{key:Enter}}.

## Mõõdud järgivad geomeetriat

Mõõt mäletab oma punkte. Lohista üht selle haardepunkti või teisalda, pööra või muuda mõõtkava koos objektidega, mida see mõõdab, ja see mõõdab uuesti. Kui venitad geomeetriat, ilma et mõõtu teisaldaksid, ei järgi mõõt: see hoiab oma punkte.

## Tavalised vead

- **Tekst ja nooled on pisikesed või tohutud.** Sea üldine mõõtkava: vt [Mõõtude suuruste seadistamine](topic:dimension-settings).
- **„Vali punkt nurga sees, mida tahad mõõta.“** Punkt, mille klõpsasid nurkmõõdu jaoks, asub ühel haaral. Teisalda see nurga sisse.
- **Jätka algas valest mõõdust.** See jätkab alati viimasest lineaarsest või joondatud mõõdust, mis selles seansis tehti. Tee (või tee uuesti) esmalt see, millest jätkata.
- **Mõõt tuli vertikaalne.** Paigutasid selle kõrvale. Tipi enne paigutamist `H`.
- **Jalad ja tollid.** Sea joonise pikkuse vorming esmalt {{ui:Arhitektuurne}}-ks või mõõdu {{ui:Vorming}} jaotises {{ui:Omadused}}: vt [Jalad ja tollid mõõtudes](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Arvud pole ühikus, mida tahad.** Vali {{ui:Ühikud tekstis}}: vt [Mõõdud mm, cm, m või km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
