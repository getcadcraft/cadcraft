---
title: Jedinice pri uvozu: datoteka navodi svoje jedinice, ili se prvo pita
summary: Kad datoteka koju uvoziš u crtež navodi svoje jedinice, CadCraft je pretvara i to kaže. Kad ih ne navodi, CadCraft pita pre nego što išta postavi i pamti tvoj odgovor za tu datoteku.
keywords: jedinice, uvoz, ubaci, xref, priloži, XATTACH, INSERT, OBJ, DWG, DXF, oblak tačaka, stavka biblioteke, milimetri, metri, inči, stope, razmera, pogrešna veličina, preveliko, premalo, 1000 puta, pitaj, zapamćeno, INSUNITS
from: 558f1293
---

## Šta ćeš uraditi

Uvezi datoteku u crtež i budi siguran da ulazi u pravoj veličini.

## Koraci

1. Uvezi datoteku kao obično: `INSERT` › Datoteka, `XATTACH`, `POINTCLOUDATTACH`, ili {{ui:Datoteke}} na panelu Biblioteka.
2. Ako datoteka navodi svoje jedinice, ništa se ne pita. Komandna linija kaže koje jedinice datoteka navodi, i razmeru koja se koristi kad se razlikuju od jedinica crteža.
3. Ako ne navodi, dijalog pita **Jedinice datoteke**. Izaberi šta je jedna jedinica u datoteci i klikni {{ui:Koristi ove jedinice}}. Ništa se ne postavlja pre nego što odgovoriš.
4. {{ui:Otkaži}} (ili {{key:Esc}}) ne uvozi ništa.

## Koje datoteke navode svoje jedinice

- **DWG i DXF**: jedinice umetanja crteža (`$INSUNITS`). Datoteka bez njih se pita.
- **Oblaci tačaka**: LAS i LAZ sa koordinatnim sistemom, E57, PTX i PLY navode svoje. Ostali se pitaju.
- **OBJ**: nikad ne navodi jedinice. Pita se.
- **glTF i GLB**: metri, po pravilu formata.
- **Slike**: nemaju sopstvenu veličinu. `IMAGEATTACH` pita za širinu, i nudi širinu koju si ranije dao toj datoteci.
- **Skenovi**: skener koji navodi svoju gustinu (tačaka po inču) ulazi u pravoj veličini u jedinicama crteža; `SCANATTACH` i dalje pita za širinu.
- **Dodatak Oblaci tačaka**: pita kad pravi oblak čija datoteka ne navodi jedinicu, i označava brojeve oblaka jedinicom koju nosi.

## Dobro je znati

- Otvaranje DWG ili DXF kao sopstvenog crteža ne pita ništa: komandna linija kaže koje jedinice datoteka navodi, ili da ne navodi nijedne. {{ui:Svojstva}} postavljaju jedinice crteža.
- Kad ni ovaj crtež nema jedinice, datoteka se ne može pretvoriti: postavlja se broj za broj, i komandna linija to kaže.
- Odgovor se pamti za tu datoteku na ovom računaru, u svakoj CadCraft aplikaciji. Sledeći put kad uđe, ne pita se, a komandna linija kaže da su korišćene zapamćene jedinice.
- Da bi te ponovo pitao: paleta komandi ({{key:Mod+K}}) › **Ponovo pitaj za jedinice uvezenih datoteka**.
