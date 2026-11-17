---
title: Lõikamine ja pikendamine
summary: Lõika jooned tagasi, kus teised neid ristuvad, ja pikenda neid, et jõuda teisteni, ükshaaval või mitu korraga, lohistades läbi nende raja.
keywords: trimextendmode, akna lohistamine, lõikamine, pikendamine, tr, ex, kiirlõikamine, lohistamine, vabakäe, rada, piirdeaed, ristumine, shift, lõikeservad, piirservad, edgemode, režiim, standard, kiire, kustutamine, eelvaade, seinad, puhastus
from: 25fbc5bd
---

## Mida õpid

Kuidas {{cmd:TRIM}} ja {{cmd:EXTEND}} töötavad ning kiired viisid nende kasutamiseks: lohista läbi paljude tükkide korraga, hoia all {{key:Shift}}, et vahetada lõikamise ja pikendamise vahel, ning näe enne klõpsamist, mis kaob.

## Lõika üks tükk

1. Joonista pikk horisontaaljoon ja kaks lühikest joont selle ristumas.
2. Sisesta `TR` ja vajuta {{key:Enter}}. Ajalugu ütleb `Praegused sätted: Kiire režiim, servad: Ei pikenda`.
3. Hoia kursorit pikal joonel kahe lühikese vahel. See tükk muutub hallikaks ja katkendlikuks: see on see, mis kaob.
4. Klõpsa. Tükk kaob.
5. Käsu lõpetamiseks vajuta {{key:Enter}}.

Kiires režiimis (vaikimisi) on iga nähtav objekt lõikeserv, nii et servi ei pea kõigepealt valima. Klõpsa tükil, mille soovid ära. Objekt, mida miski ei ristu, kustutatakse tervenisti ja ajalugu ütleb seda.

## Lõika mitu tükki ühe lohistamisega

1. Joonista pikk horisontaaljoon ja kümme lühikest vertikaaljoont sellest läbi.
2. Sisesta `TR` ja vajuta {{key:Enter}}.
3. Vajuta hiireklahvi pika joone kohal, esimesest vertikaaljoonest vasakul, ja lohista üle kõigi kümne pika joone kohal.

Lohistades näitab rada katkendjoonena ja iga tükk, mille see on ületanud, muutub hallikaks. Lase lahti: kõik kümme ülemist tükki lõigatakse ühe sammuga. Sisesta `U` ja vajuta {{key:Enter}}, et need kõik korraga tagasi panna.

:::tip
Võid ka klõpsata kahel tühjal kohal: joon nende vahel toimib nagu lohistatud rada. Sisesta `F` (Fence), et klõpsata selle asemel punktide reale, ja vajuta siis {{key:Enter}}.
:::

:::touch
Lohista sõrmega samamoodi. Tükil puudutus lõikab selle.
:::

## Pikenda selle asemel, Shift-iga

1. Joonista vertikaaljoon ja viis lühikest horisontaaljoont selle vasakule, mis peatuvad enne seda.
2. Sisesta `TR` ja vajuta {{key:Enter}}.
3. Hoia {{key:Shift}} all. Hoia kursorit lühikesel joonel: osa, mille võrra see kasvaks, muutub hallikaks ja katkendlikuks.
4. Hoia {{key:Shift}} endiselt all ja lohista allapoole läbi viie lühikese joone.

Kõik viis ulatuvad nüüd vertikaaljooneni. {{key:Shift}} töötab käsus {{cmd:EXTEND}} (`EX`) vastupidi: klõps pikendab, {{key:Shift}}+klõps lõikab. Pikendus pikendab otsa, mis on kõige lähemal kohale, kuhu klõpsad või kuhu rada ristub.

## Lõika akna sees

1. Sisesta `TR` ja vajuta {{key:Enter}}.
2. Sisesta `C` ja vajuta {{key:Enter}}.
3. Klõpsa kahel nurgal ümber tükkide, mis eemaldada.

Iga tükk, mis asub akna sees vähemalt osaliselt, lõigatakse.

Akna saamiseks ainult lohistades, ilma `C` sisestamata: {{ui:Sätted}} › {{ui:CadCraft}} › {{ui:Lohistamine lõikamisel ja pikendamisel}} › {{ui:Aken}}. Siis joonistab tühjal kohal vajutamine ja lohistamine kasti, ning iga tükk, mida see puudutab, lõigatakse (või pikendatakse käsus {{cmd:EXTEND}} või {{key:Shift}}-iga). {{ui:Rada}} (vaikimisi) toob tagasi vabakäe raja. Rida käsu TRIM alguses ütleb, milline neist on sisse lülitatud.

## Vali lõikeservad (Standardrežiim)

Mõnikord peaks lõikama ainult üks joon, näiteks seinapind, mida ristub palju teisi jooni.

1. Sisesta `TR` ja vajuta {{key:Enter}}.
2. Sisesta `O` (režiim) ja vajuta {{key:Enter}}, seejärel sisesta `S` (Standard) ja vajuta {{key:Enter}}.
3. Küsimusel `Vali lõikeservad` klõpsa servajoontele (või lohista aken) ja vajuta {{key:Enter}}. Kui midagi pole valitud ja vajutad {{key:Enter}}, saab iga objekt servaks.
4. Klõpsa või lohista läbi tükkide, mis eemaldada.

Lõikavad ainult valitud servad ja objekt, mida ükski serv ei ristu, jääb puutumata. Režiim jääb kehtima, kuni sulged lehe; sisesta `O` ja seejärel `Q`, et naasta kiirele režiimile. {{cmd:TRIMEXTENDMODE}} seab selle enne alustamist, nagu sama nimega muutuja teeb mujal: `0` Standard, `1` Kiire. `T` (Lõikeservad) valib uued lõikeservad igal ajal; käsus {{cmd:EXTEND}} on see `B` (Piirservad).

## Servad, mis jõuaksid

1. Sisesta `TR` ja vajuta {{key:Enter}}.
2. Sisesta `E` (Edge) ja vajuta {{key:Enter}}, seejärel `E` (Extend) ja vajuta {{key:Enter}}.

Nüüd loetakse lõikejoont või -kaart, mis jääb lühikeseks, nii, nagu jätkuks see: lühike joon lõikab seal, kus see ristuks, kui oleks pikem. Sisesta `E`, seejärel `N` (Ei pikenda), et naasta. See on sama, mis EDGEMODE 1 ja 0.

## Kustuta lahkumata

Sisesta `R` (eRase) ja vajuta {{key:Enter}}, vali objektid kustutamiseks ja vajuta {{key:Enter}}. TRIM jätkab.

## Levinud vead

- **Terve joon kadus.** Kiires režiimis kustutatakse objekt, mida miski ei ristu. Sisesta `U`, et see tagasi panna, või lülitu Standardrežiimi (`O`, `S`).
- **„Seal pole midagi lõigata: ükski valitud serv ei ristu selle objektiga.“** Standardrežiim lõikab ainult sinu valitud servadest. Sisesta `T`, et need uuesti valida.
- **„Selles suunas pole piiri.“** Pikendus ei leidnud ees midagi. Klõpsa lähemale otsale, mis peaks kasvama, või lülita sisse `E` (Edge, Extend) piiride jaoks, mis peatuvad enne.
- **Lohistamine joonistas hoopis lasso.** Lohistamine lõikab ainult siis, kui TRIM või EXTEND küsib objekti. Ilma käivitatud käsuta valib lohistamine (vt [Lassovalik](topic:lasso-selection)).
- **Lõigata saab ainult jooni, kaari, ringe ja murdjooni.** Plokk tuleb enne lõhustada, et lõigata selle jooni.
