---
title: Jedinice pri uvozu: datoteka navodi svoje jedinice ili vas se prvo pita
summary: Kada datoteka koju uvodite u crtež navodi svoje jedinice, CadCraft je pretvara i to kaže. Kada ne navodi, CadCraft pita prije nego što išta postavi i pamti vaš odgovor za tu datoteku.
keywords: jedinice, uvoz, umetni, xref, prilozi, XATTACH, INSERT, OBJ, DWG, DXF, oblak točaka, stavka knjižnice, milimetri, metri, inči, stope, mjerilo, pogrešna veličina, prevelik, premalen, 1000 puta, pitaj, zapamćeno, INSUNITS
from: 558f1293
---

## Što ćete učiniti

Uvedite datoteku u crtež i budite sigurni da dolazi u pravoj veličini.

## Koraci

1. Uvedite datoteku kao i inače: `INSERT` › Datoteka, `XATTACH`, `POINTCLOUDATTACH` ili {{ui:Datoteke}} na panelu Knjižnica.
2. Ako datoteka navodi svoje jedinice, ništa se ne pita. Naredbeni redak kaže koje jedinice datoteka navodi i mjerilo koje se koristi kada se razlikuju od jedinica crteža.
3. Ako ih ne navodi, dijaloški okvir pita **Jedinice od** datoteke. Odaberite što je jedna jedinica u datoteci i kliknite {{ui:Upotrijebi ove jedinice}}. Ništa se ne postavlja prije vašeg odgovora.
4. {{ui:Odustani}} (ili {{key:Esc}}) ne donosi ništa.

## Koje datoteke navode svoje jedinice

- **DWG i DXF**: jedinice umetanja crteža (`$INSUNITS`). Datoteka bez njih se pita.
- **Oblaci točaka**: LAS i LAZ sa koordinatnim sustavom, E57, PTX i PLY navode svoje. Ostali se pitaju.
- **OBJ**: nikada ne navodi jedinice. Pitate se.
- **glTF i GLB**: metri, prema pravilu samog formata.
- **Slike**: nemaju vlastitu veličinu. `IMAGEATTACH` pita za širinu i nudi širinu koju ste prije dali toj datoteci.
- **Skenovi**: sken koji navodi svoju gustoću (točaka po inču) dolazi u svojoj stvarnoj veličini u jedinicama crteža; `SCANATTACH` i dalje pita za širinu.
- **Dodatak Oblaci točaka**: pita kada izrađujete oblak čija datoteka ne navodi jedinicu i označava brojeve oblaka jedinicom koju nosi.

## Dobro je znati

- Otvaranje DWG-a ili DXF-a kao zasebnog crteža ne pita ništa: naredbeni redak kaže koje jedinice datoteka navodi ili da ne navodi nijednu. {{ui:Svojstva}} postavljaju jedinice crteža.
- Kada ni ovaj crtež nema jedinica, datoteka se ne može pretvoriti: postavlja se broj po broj i naredbeni redak to kaže.
- Odgovor se pamti za tu datoteku na ovom računalu, u svakoj CadCraft aplikaciji. Sljedeći put kada dođe, ne pitate se, a naredbeni redak kaže da su zapamćene jedinice korištene.
- Da vas se ponovo pita: paleta naredbi ({{key:Mod+K}}) › **Ponovo pitaj za jedinice uvezenih datoteka**.
