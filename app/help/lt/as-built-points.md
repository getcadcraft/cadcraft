---
title: Tikrinti faktinius (as-built) taškus
summary: Skaitykite geodezistų grupės išmatuotus taškus ir lyginkite juos su brėžinio taškais bei blokais: ar patenka į toleranciją, ar ne, nepamatuoti ir papildomi taškai – pažymima brėžinyje ir įrašoma kaip CSV ataskaita.
keywords: as built, as-built, asbuilt, geodezija, matavimai, visa stotis, išdėstymas, nužymėjimas, taškų failas, csv, txt, pnezd, penzd, xyz, tolerancija, nuokrypis, tikrinimas, palyginti, exportpoints, išdėstymo taškai
from: f7c35208
---

{{cmd:ASBUILT}} (sinonimas ASB) yra {{cmd:EXPORTPOINTS}} antroji pusė: eksportuojate brėžinio taškus lauko darbams, grupė juos išdėsto ir išmatuoja tai, kas pastatyta, o ASBUILT palygina jų failą su brėžiniu.

1. Įveskite {{cmd:ASBUILT}} ir pažymėkite tuos pačius taškus ir blokus, kuriuos eksportavote (Enter pasirenka visus POINT, kaip ir EXPORTPOINTS).
2. **Susiekite faktinius taškus pagal** **Numerį** (grupė išsaugojo jūsų taškų numerius: nurodykite pirmąjį eksportuotą numerį) arba **Artimiausią** (jie patys sunumeravo savo matavimus: kiekvienas projektinis taškas gauna artimiausią).
3. Nurodykite failo vienetus ir koordinates, kaip eksportavote (Brėžinio, Metrai arba Pėdos; Pasaulio arba UCS), ir **toleranciją** brėžinio vienetais.
4. Pasirinkite grupės CSV arba TXT failą. CadCraft jį skaito taip, kaip CivilCraft: kableliai, tabuliacijos, kabliataškiai ar tarpai, antraštės eilutė su stulpelių pavadinimais arba PNEZD pagal stulpelių skaičių.

Komandinė eilutė nurodo, kiek taškų susieta, kiek yra tolerancijos ribose, už jos ribų, nepamatuotų ir papildomų, bei didžiausią atstumą. **Pažymėti juos brėžinyje?** Taip įdeda juos į sluoksnį **AS-BUILT** kaip vieną atšaukiamą veiksmą: tašką kiekviename matavime, šalia – jo numerį ir atstumą, o nuo projektinio taško iki kiekvieno už tolerancijos ribų esančio matavimo – raudoną liniją. CSV ataskaita atsisiunčiama su visais taškais: projektinėmis ir faktinėmis koordinatėmis, skirtumais rytų, šiaurės ir aukščio kryptimis bei rezultatu.

Taip pat žr. [Taškai BIM programoms](topic:points-for-bim).
