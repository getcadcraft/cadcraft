---
title: Määra teksti font ja suurus tekstistiilidega
summary: Tee nimega tekstistiile fondi, kõrguse, laiuse ja kaldega, määra üks uue teksti jaoks praeguseks ja muuda stiili, et muuta kõik seda kasutavad tekstid.
keywords: tekstistiil, stiil, STYLE, ST, TEXTSTYLE, -STYLE, font, teksti kõrgus, laiustegur, kaldenurk, kalle, fondi muutmine, standardstiil, stiili rakendamine, DDSTYLE
from: bd5a4883
---

## Mida sa teed

Tee tekstistiil nimega `Notes` oma fondi ja kõrgusega, kasuta seda uue teksti jaoks ning muuda hiljem stiili, et kõik selle stiiliga märkmed muutuksid korraga.

## Sammud

1. Kirjuta {{cmd:STYLE}} (`ST`) ja vajuta {{key:Enter}}, või klõpsa tööriistaribal {{ui:Joonista}} nuppu {{ui:Tekstistiil}}. Dialoog {{ui:Tekstistiil}} loetleb joonise stiilid. Igal joonisel on `Standard`.
2. Klõpsa {{ui:Uus…}}, kirjuta uue stiili nimeks `Notes` ja klõpsa {{ui:OK}}. Olekurida ütleb: „Tekstistiil Notes loodud ja määratud praeguseks.“
3. Valikus {{ui:Font}} vali või kirjuta fondi nimi. Määra {{ui:Kõrgus (0 = küsi igal korral)}} arvuks, näiteks `2.5`, et iga uus tekst saaks selle kõrguse. Jäta `0`-le, et sind küsitaks igal korral.
4. Määra {{ui:Laiusetegur}} ja {{ui:Kaldenurk (°)}}, kui soovid kitsamaid, laiemaid või kaldus tähti. Näidisrida näitab tulemust.
5. Klõpsa {{ui:Sulge}}. Joonista tekst käsuga {{cmd:TEXT}} või {{cmd:MTEXT}}: uus tekst võtab praeguse stiili.
6. Kui soovid kasutada juba tehtud stiili, ava dialoog uuesti, vali stiil loendist ja klõpsa {{ui:Määra praeguseks}}.
7. Et panna stiil juba joonistatud tekstile, vali tekst, ava dialoog, vali stiil ja klõpsa {{ui:Rakenda valitud tekstile}}.

## Stiili muutmine hiljem

Muuda stiili fonti, kõrgust, laiust või kallet dialoogis ja iga selle stiili kasutav tekst järgib seda ühe tagasivõtmise sammuga ({{key:Mod+Z}}). Olekurida ütleb, mitu teksti järgis.

## Märkused

- {{ui:Kustuta}} ei kustuta `Standard`-stiili ega stiili, mida tekst veel kasutab: muuda enne see tekst teiseks stiiliks.
- Stiilid salvestatakse joonise STYLE-tabelisse, nii et DXF- ja DWG-failid need säilitavad.
- Käsureal teeb `-STYLE` sama valikutega (Current, New, Font, Height, Width, Oblique, Delete, List).
- Font, mida arvutis, mis joonist loeb, ei ole, kuvatakse teises kujus.
