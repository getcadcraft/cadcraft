---
title: Punktid BIM-programmidele
summary: Ekspordi punktid ja plokkide sisestuspunktid kirjeldusega CSV- või TXT-faili, mida BIM- ja mõõdistustarkvara impordib.
keywords: exportpoints, ekspordi punktid, punktid, csv, txt, pnezd, penzd, xyz, mõõdistuspunktid, koordinaadid, bim, märkimine, punktifail, põhjakoordinaat, idakoordinaat, kõrgus
from: d80e2d53
---

## Mida sa valmistad

Punktifail: üks rida punkti kohta, koos numbri, põhjakoordinaadi, idakoordinaadi, kõrguse ja kirjeldusega, mida BIM-programmid (muu hulgas Revit ja Archicad) ning mõõdistustarkvara saavad importida, et paigutada mõõdistuspunkte, objektimärgiseid või seadmeid.

## Ekspordi punktid

1. Vali punktid ja plokiviited, mille sisestuspunkte tahad, või ära vali midagi, et võtta kõik punktid.
2. Kirjuta {{cmd:EXPORTPOINTS}} (või `EXPPTS`, või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Ekspordi punktid}}) ja vajuta {{key:Enter}}
   (vajuta {{key:Enter}} uuesti, kui käsk küsib `Vali punktid ja plokid` ja midagi polnud valitud).
3. Kui valisid atribuutidega plokid, loetleb CadCraft nende sildid: kirjuta see, mille väärtus on kirjeldus (näiteks `ITEM`), või midagi muud, et kasutada iga ploki nime.
4. Vali veerud: `PNEZD` (punkt, põhjakoordinaat, idakoordinaat, kõrgus, kirjeldus: tavaline), `PENZD` (idakoordinaat enne põhjakoordinaati) või `XYZ` (ainult koordinaadid).
5. Vali ühikud: `D` nagu joonistatud, või `M` meetrid või `F` jalad (ainult siis, kui joonise ühikud on määratud: {{ui:Omadused}} › {{ui:Ühikud}}, kui midagi pole valitud).
6. Kui UCS on määratud, vali `W` maailm või `U` UCS-i koordinaadid (vt [UCS ja pööratud vaade](topic:ucs-and-turned-view)).
7. Vali `C` komadega eraldatud `.csv` või `T` tabulaatoriga eraldatud `.txt`, ja esimene punktinumber.

Fail laaditakse alla nimega `<joonis>-points.csv` (või `.txt`), ja ajalugu ütleb, mitu punkti selles on.

## Mis on failis

- Üks punkt rea kohta, lõpetatud reavahetusega (CR LF), kolme kümnendkohaga.
- Punkti kõrgus on tema Z (0, kui seda pole). Ploki punkt on tema sisestuspunkt.
- Kirjeldus, mis sisaldab koma (või TXT-s tabulaatorit) või jutumärki, pannakse topeltjutumärkide vahele, jutumärgid kahekordistatud.
- Formaat on see, mida CivilCraft loeb ja kirjutab, nii et fail avaneb seal ka punktidena.

## Levinud vead

- Ühikutena pakutakse ainult `D`: joonisel pole ühikuid. Määra need või teisenda teises programmis.
- Punktid on teises programmis kaugel, kus sa ootad: ekspordi maailmakoordinaadid (`W`) või UCS, mida teise programmi mõõdistuspunkt kasutab (`U`).
