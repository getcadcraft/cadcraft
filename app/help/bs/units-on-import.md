---
title: Jedinice pri uvozu: datoteka navodi svoje jedinice, ili te se prvo pita
summary: Kad datoteka koju uvodiš u crtež navodi svoje jedinice, CadCraft je pretvara i to kaže. Kad ne navodi, CadCraft pita prije postavljanja bilo čega i pamti odgovor za tu datoteku.
keywords: jedinice, uvoz, umetni, xref, prilaganje, XATTACH, INSERT, OBJ, DWG, DXF, oblak tačaka, stavka biblioteke, milimetri, metri, inči, stope, razmjera, pogrešna veličina, prevelik, premali, 1000 puta, pitaj, zapamćeno, INSUNITS
from: 558f1293
---

## Šta ćeš uraditi

Uvedi datoteku u crtež i budi siguran da ulazi u pravoj veličini.

## Koraci

1. Uvedi datoteku kao obično: `INSERT` › Datoteka, `XATTACH`, `POINTCLOUDATTACH`, ili {{ui:Datoteke}} u panelu Biblioteka.
2. Ako datoteka navodi svoje jedinice, ništa se ne pita. Komandna linija kaže koje jedinice datoteka navodi, i razmjeru koja se koristi kad se razlikuju od jedinica crteža.
3. Ako ne navodi, dijalog pita **Jedinice od** datoteke. Odaberi šta jedna jedinica u datoteci znači i klikni {{ui:Koristi ove jedinice}}. Ništa se ne postavlja prije tvog odgovora.
4. {{ui:Otkaži}} (ili {{key:Esc}}) ne uvodi ništa.

## Koje datoteke navode svoje jedinice

- **DWG i DXF**: jedinice umetanja crteža (`$INSUNITS`). Datoteka bez njih se pita.
- **Oblaci tačaka**: LAS i LAZ sa koordinatnim sistemom, E57, PTX i PLY navode svoje. Ostali se pitaju.
- **OBJ**: nikad ne navodi jedinice. Pita se.
- **glTF i GLB**: metri, po pravilu formata.
- **Slike**: nemaju sopstvenu veličinu. `IMAGEATTACH` pita za širinu, i nudi širinu koju si ranije dao toj datoteci.
- **Skenovi**: skenirani dokument koji navodi gustinu (tačke po inču) ulazi u svojoj pravoj veličini u jedinicama crteža; `SCANATTACH` i dalje pita za širinu.
- **Dodatak Oblaci tačaka**: pita kad napraviš oblak čija datoteka ne navodi jedinicu, i označava brojeve oblaka jedinicom koju nosi.

## Dobro je znati

- Otvaranje DWG ili DXF kao zasebnog crteža ne pita ništa: komandna linija kaže koje jedinice datoteka navodi, ili da ne navodi nijedne. Svojstva postavljaju jedinice crteža.
- Kad ni ovaj crtež nema jedinice, datoteka se ne može pretvoriti: postavlja se broj po broj, a komandna linija to kaže.
- Odgovor se pamti za tu datoteku na ovom računaru, u svakoj CadCraft aplikaciji. Sljedeći put kad uđe, ne pitaš se, a komandna linija kaže da su korištene zapamćene jedinice.
- Da te ponovo pitaju: paleta komandi ({{key:Mod+K}}) › **Ponovo pitaj za jedinice uvezenih datoteka**.
