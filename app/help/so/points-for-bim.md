---
title: Barta barnaamijyada BIM
summary: Dhoofi barta, iyo barta gelinta bloogyada oo leh sharaxaad, faylka CSV ama TXT oo barnaamijyada BIM iyo sahanka ku soo geli karaan.
keywords: exportpoints, dhoofi barta, barta, csv, txt, pnezd, penzd, xyz, barta sahanka, isku-xidhka, bim, habaynta, faylka barta, waqooyi, bari, sare
from: d80e2d53
---

## Waxa aad samayn doontid

Fayl barta: hal sadar barta kasta, oo leh lambarkeeda, waqooyi, bari, sare iyo sharaxaad, kaas oo barnaamijyada BIM (Revit iyo Archicad ka mid ah) iyo software-ka sahanka ay ku soo geli karaan si ay u dejiyaan barta sahanka, calaamadaha goobta ama qalabka.

## Dhoofi barta

1. Dooro barta iyo tixraacyada bloogga aad rabto barta gelinta, ama ha dooran wax si aad u hesho barta oo dhan.
2. Ku qor {{cmd:EXPORTPOINTS}} (ama `EXPPTS`, ama {{ui:Bloogyo}} › {{ui:Wax dheeraad ah}} › {{ui:Dhoofi barta}}) oo riix {{key:Enter}} (riix {{key:Enter}} mar kale marka `Dooro barta iyo tixraacyada bloogga` ay muujiso wax aan la dooran).
3. Marka aad dooratid bloogyo leh sifooyin, CadCraft wuxuu liistaa calaamadahooda: qor midka qiimihiisu yahay sharaxaadda (tusaale `ITEM`), ama wax kale si aad u isticmaasho magaca bloog kasta.
4. Dooro tiirarka: `PNEZD` (barta, waqooyi, bari, sare, sharaxaad: kan caadiga ah), `PENZD` (bari ka hor waqooyi) ama `XYZ` (isku-dhigyada oo keliya).
5. Dooro unugyada: [Sida la sawiray (D)], `M` (Mitir) ama `F` (Fiit) (kaliya marka unugyada naqshadda la dejiyay: {{ui:Sifooyinka}} › {{ui:Unugyada}} oo wax aan la dooran).
6. Haddii UCS la dejiyay, dooro [Dunida (W)] ama [UCS (U)] isku-dhigyada (eeg [UCS iyo aragti la leexiyay](topic:ucs-and-turned-view)).
7. Dooro `C` (Koomo) oo ah `.csv` ku kala-soocan koomo, ama `T` (Tab) oo ah `.txt` ku kala-soocan tab, iyo lambarka barta ee koowaad.

Faylku wuxuu soo degaa sida `<drawing>-points.csv` (ama `.txt`), taariikhduna waxay sheegtaa inta barta uu ku jiro.

## Waxa ku jira faylka

- Hal barta sadar kasta, oo ku dhammaata xariiq-jeex (CR LF), saddex meelood oo dhibic ah.
- Sare ee barta waa Z (0 haddii aanay lahayn). Barta bloog waa barta gelinteeda.
- Sharaxaad leh koomo (ama tab TXT) ama xigasho waxaa lagu xidhaa xigasho laba jeer, xigashooyinkeeda oo la laabanayo.
- Qaabka waa kan CivilCraft akhrisa oo qori karo, sidaas awgeed faylku wuxuu halkaas u furmaa sida barta.

## Khaladaadka caadiga ah

- Kaliya [Sida la sawiray (D)] ayaa la siiyay unugyada: naqshaddu ma laha unugyo la dejiyay. Dejiso, ama beddel barnaamijka kale.
- Barta ayaa ka fog meesha aad filayso barnaamijka kale: dhoofi isku-dhigyada dunida (`W`), ama UCS-ka uu barta sahanka ee barnaamijka kale isticmaalo (`U`).
