---
title: Indicatorul sare sau întârzie peste desen
summary: Ce de făcut când crucea nu urmărește mouse-ul fluid, pe un calculator mai vechi sau mai lent.
keywords: cursor care sare, întârziere indicator, cruce lentă, cursor sacadat, calculator vechi, placă grafică veche, grafică integrată, accelerare hardware, indicator mai fluid, laptop lent
from: 39dc9057
---

CadCraft rulează în browser (CadCraft Studio este și el o vizualizare în browser), deci nimic din el nu este construit pentru o placă grafică sau alta. Crucea este desenată de aplicație, ceea ce înseamnă că se poate mișca doar cât de repede poate aplicația să deseneze un cadru.

## Lăsați CadCraft să reducă extrasele

1. Deschideți {{ui:Setări}} (rotița din dreapta sus) și rămâneți pe fila {{ui:CadCraft}}.
2. Alegeți {{ui:Indicator mai fluid pe calculatoare mai lente}}.
3. Selectați {{ui:Activ}}.

Cu opțiunea activă, se folosește indicatorul de cruce al calculatorului în locul crucii desenate și al casetei de selectare (și al crucii pe tot ecranul), iar obiectul de sub indicator se evidențiază când indicatorul stă pe loc, nu în timpul mișcării. Agățările de obiecte, urmărirea și banda elastică funcționează ca înainte.

{{ui:Automată}} este modul în care pornește CadCraft: urmărește cât durează cadrele cât mișcați indicatorul și activează singur opțiunea când rămân lente câteva secunde. Afișează un mesaj o singură dată când o face. {{ui:Inactiv}} păstrează crucea desenată, oricare ar fi viteza.

## Dacă tot este lent

- Verificați dacă accelerarea hardware este activată în browser: deschideți `chrome://gpu` (sau `edge://gpu`) într-o filă nouă. Dacă primele rânduri spun "Software only" sau "Disabled", browserul desenează fără placa grafică. Actualizarea driverului plăcii grafice aduce adesea remedierea.
- Închideți alte file grele și programe și încercați o fereastră de browser mai mică.
- Spuneți-ne prin {{ui:Ajutor}}, {{ui:Raportare a unei probleme}}: precizați dacă folosiți browserul sau CadCraft Studio, versiunea și ce arată pagina gpu.
