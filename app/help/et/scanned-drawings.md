---
title: Skaneeritud joonised ja jälgimine
summary: Too sisse skaneeritud leht, sea mõõtkava ja nurk, puhasta, kustuta osi, kinnitu selle joontele ning jälgi see joonteks ja kaarteks.
keywords: skaneering, skaneeritud joonis, rasterpilt, tiff, jpeg, png, mõõtkava, joonda, nurga korrigeerimine, täppide eemaldamine, lävi, must ja valge, lõika, kustuta, jälgi, vektoriseeri, püüdmine, kaared, viirutus, paberjoonised, vanad joonised, scanattach, scantrace
from: 36227e5b
---

## Paberlehest joonise objektideks

Skaneeritud joonis on pilt. CadCraft hoiab pildi, mille sa andsid, ja ei muuda seda kunagi: iga puhastussamm teeb uue pildi, üks võtmise samm korraga, ja {{cmd:SCANINFO}} loetleb algse faili ning sellest alates tehtud sammud. Midagi ei saadeta kuhugi ja midagi ei oleta treenitud mudel: puhastus ja jälgimine on tavaline pilditöötlus ning need töötavad sinu arvutis.

1. **Lisa see.** {{cmd:SCANATTACH}} loeb PNG-, JPEG- või TIFF-faili (üks leht või kõik mitmeleheküljelise faili lehed) või PDF-lehe, kui see on pilt. See küsib lehe, vasakpoolse alanurga ja laiuse. PDF-lehe puhul küsib see ka, mitu pikslit tollis lehte joonistada.
2. **Mõõtkava.** {{cmd:SCANSCALE}}: vali skannil kaks punkti ja sisesta seejärel nende tegelik vahemaa. Leht skaleeritakse esimese punkti ümber.
3. **Joonda.** {{cmd:SCANALIGN}}: vali skannil kaks punkti ja kaks kohta, kuhu need kuuluvad; leht liigub ja pöördub sobivaks ning skaleerub ka, välja arvatud juhul, kui vastad Ei.
4. **Nurga korrigeerimine.** {{cmd:SCANDESKEW}} mõõdab nurga, mille all lehe pikad jooned asuvad, ja näitab seda koos kindlusega. Kinnita see või sisesta oma, ja leht pööratakse. Lehel, millel on vähe pikki jooni, kuvatakse hoiatus: kontrolli nurka enne kinnitamist.
5. **Puhasta.** {{cmd:SCANCLEAN}} muudab lehe mustaks ja valgeks (Auto ühtlustab kõigepealt paberi; Kohanduv järgib paberi muutusi täpsemalt; Tase on üks arv kogu lehe jaoks) ning eemaldab täpid kuni sinu määratud suuruseni.
6. **Lõika ja kustuta.** {{cmd:SCANCROP}} jätab alles ühe akna. {{cmd:SCANERASE}} kustutab ristküliku, hulknurga või lasso (vajuta ja lohista): templijäljed, märkmed, kohvitassi rõngas.

Puhastatud pilt on see, mida salvestatud DWG sisaldab (IMAGE ja selle IMAGEDEF, pildi fail joonise kõrval, nagu iga pildi puhul).

## Kinnitu skanni joontele

Kui {{cmd:RASTERSNAP}} on sisse lülitatud (vaikimisi), leiavad püüdmised ka must-valge skanni jooned: joonte otsad, keskpunktid, nurgad ja ristumised, mida näidatakse tavaliste püüdmismärkidega. Lehe osa, mis on kursori all, jälgitakse liikumisel; suumi piisavalt sisse, et üks piksel oleks mõne ekraanipiksli suurune. Joont, mis on pikem kui jälgitav osa, järgitakse kuni otsani.

## Jälgimine

{{cmd:SCANTRACE}} muudab lehe jooned joonteks ja kaarteks uuel kihil (SCAN-TRACE), ühe võtmise sammuna, skann jääb nende alla. Sa seadistad:

- **Tolerants:** kui kaugel jälgitud joon või kaar võib olla skannil olevatest joontest, joonistusühikutes (aruanne annab ka pikslid). Range tolerants järgib iga kõikumist; laiem teeb vähem ja sirgemaid tükke.
- **Aken:** lehe nurk või kogu leht.
- **Kaared:** väljas teeb ainult jooni.
- **Ülejäänud:** see, mida jälgimine jättis puutumata, joonistatakse kastidena kihil, mida saab välja lülitada, või ei joonistata üldse.

Jälgimine leiab iga joone keskme, järgib seda, sobitab sellele sirged jooned ja ringikujulised kaared, ühendab jooksud, mis lõigati katki kohas, kus teine joon ristus, muudab peaaegu horisontaalsed ja peaaegu vertikaalsed jooned täpselt horisontaalseks ja vertikaalseks ning sulgeb nurgad. **Tekst ja viirutus jäävad rasterina:** kirja suuruses tükid jäetakse kõrvale ning lühikeste paralleelsete joonte kimbud võetakse viirutuseks ja jäetakse kõrvale.

Lõpus ütleb see, mitu joont ja kaart tehti, tolerantsi ja mitu tükki jäi rasterina. **See on see, mida pikslid andsid selles tolerantsis, ega ole väide, et tulemus on õige.** Võrdle seda lehega: jälgimine võib jätta vahele nõrga joone, ühendada kaks väga lähedast joont või joonistada joone seal, kus on ainult plekk. Puhasta skann enne (sirgeks joondatud, must ja valge, täpid eemaldatud) ja tulemus on palju parem.

## Mida see ei loe

TIFF-failid, mis on salvestatud plokkidena, BigTIFF, TIFF JPEG- või deflate-pakkimisega, Group 3 faksikodeering ja värvid, mis on hoitud eraldi tasandites, lükatakse tagasi teatega; salvesta need uuesti ribadena LZW, PackBits, Group 4 või ilma pakkimiseta. Interlaced PNG-failid lükatakse samuti tagasi. Üle 128 MB või 100 miljoni piksliga failid lükatakse tagasi ning jälgimisaken võib sisaldada kuni 64 miljonit pikslit.
