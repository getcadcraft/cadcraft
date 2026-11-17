---
title: Kazalec skače ali zaostaja nad risbo
summary: Kaj storiti, ko križec ne sledi miški gladko, na starejšem ali počasnejšem računalniku.
keywords: skakanje kazalca, zamik kazalca, počasen križec, sunkovit kazalec, star računalnik, stara grafična kartica, vgrajena grafika, strojni pospeševalnik, gladkejši kazalec, počasen prenosnik
from: 39dc9057
---

CadCraft deluje v brskalniku (tudi CadCraft Studio je pogled v brskalniku), zato ni nič prilagojeno določeni grafični kartici. Križec riše aplikacija, kar pomeni, da se lahko premika le tako hitro, kot aplikacija lahko riše sliko.

## Naj CadCraft zmanjša dodatke

1. Odprite {{ui:Nastavitve}} (zobnik v desnem zgornjem kotu) in ostanite na zavihku {{ui:CadCraft}}.
2. Izberite {{ui:Gladkejši kazalec na počasnejših računalnikih}}.
3. Izberite {{ui:Vklopljeno}}.

Ko je vklopljeno, se namesto narisanega križca in izbiralnega polja uporabi kazalec vašega računalnika (tudi celozaslonski križec), predmet pod kazalcem pa se osvetli, ko kazalec miruje, ne med premikanjem. Lovljenje objektov, sledenje in gumijasti trak delujejo kot prej.

{{ui:Samodejno}} je način, s katerim se CadCraft zažene: med premikanjem kazalca spremlja, koliko časa trajajo posamezne slike, in to samodejno vklopi, ko so te nekaj sekund počasne. Ko to stori, vas o tem enkrat obvesti. {{ui:Izklopi}} ohrani narisani križec ne glede na hitrost.

## Če je še vedno počasno

- Preverite, ali je strojni pospeševalnik vklopljen v brskalniku: v novem zavihku odprite `chrome://gpu` (ali `edge://gpu`). Če prve vrstice navajajo "Software only" ali "Disabled", brskalnik riše brez grafične kartice. Posodobitev gonilnika za grafiko pogosto to popravi.
- Zaprite druge zahtevne zavihke in programe ter poskusite z manjšim oknom brskalnika.
- Sporočite nam prek {{ui:Pomoč}}, {{ui:Prijavite težavo}}: povejte, ali uporabljate brskalnik ali CadCraft Studio, njegovo različico in kaj piše na strani gpu.
