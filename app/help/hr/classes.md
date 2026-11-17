---
title: Organiziranje crteža pomoću klasa
summary: Klase razvrstavaju objekte na drugi način, preko slojeva (Lighting-Fixtures-Spot): prikazujte ih ili skrivajte, dodijelite im boju, tip linije, debljinu, ispunu i stil teksta, koje objekti mogu preuzeti „po klasi“, te odredite klasu u koju idu novi objekti.
keywords: klasa, klase, CLASSES, CLS, CLASS, po klasi, ByClass, aktivna klasa, upotrijebi pri stvaranju, None, projektni sloj, mjerilo sloja, kota, Vectorworks
from: 672de9cb
---

Slojevi kažu *gdje* objekt pripada u crtežu; klase kažu *što* on jest. Zid na sloju `Level 1` može biti u klasi `Walls-Exterior`, a reflektor na sloju `Ceiling` u klasi `Lighting-Fixtures-Spot`. Možete sakriti sva svjetla na svim slojevima odjednom ili ispisati svaki vanjski zid debljom linijom, a da ne premjestite ijedan objekt na drugi sloj.

Svaki objekt na početku pripada klasi **None**. Crtež bez vlastitih klasa radi točno kao i prije.

## Otvorite panel Klase

Upišite `CLASSES` (ili `CLS`) i pritisnite {{key:Enter}}, ili odaberite {{ui:Klase…}} u izborniku {{ui:Više}} grupe {{ui:Pogled}}. Panel se otvara preko crteža i ostaje otvoren dok crtate.

- **Dodavanje klase:** upišite naziv u polje na vrhu i pritisnite {{key:Enter}}. Crtica `-` stvara razinu: `Lighting-Fixtures-Spot` nalazi se pod `Lighting-Fixtures`, koja se nalazi pod `Lighting`; nedostajuće razine dodaju se automatski.
- **Prikaz ili skrivanje:** oko pored klase. Skrivanje klase skriva sve klase koje su pod njom, na zaslonu i na papiru.
- **Aktivna klasa:** okrugli gumb. Novi objekti koje nacrtate idu u aktivnu klasu.
- **Odabir klase:** kliknite na njezin naziv. Gumbi i postavke ispod popisa tada rade s njom.

Broj na kraju svakog retka je koliko objekata ima u toj klasi (u modelu, na listovima i unutar definicija blokova).

## Stavljanje objekata u klasu

Odaberite objekte, odaberite klasu na panelu i kliknite {{ui:Postavi klasu}}. Prvo označite {{ui:Po klasi}} da preuzmu boju, tip linije, debljinu, ispunu i stil teksta iz klase. Također možete:

- upisati `CLASS` uz odabrane objekte i unijeti naziv klase (novi naziv stvara klasu);
- upisati `CLASS` bez odabira da postavite aktivnu klasu; `?` popisuje klase s njihovim brojevima;
- koristiti odjeljak {{ui:Klasa}} na panelu Svojstva: klasu i prekidač {{ui:… po klasi}} za boju, tip linije i debljinu (ispunu za šrafure, stil teksta za tekst);
- odabrati po klasi naredbom `QSELECT`: izaberite svojstvo {{ui:Klasa}}.

{{ui:Odaberi njezine objekte}} odabire svaki objekt odabrane klase na otvorenom listu (ili u modelu).

## Kako se objekt crta: objekt, klasa, sloj

Boja, tip linije, debljina, ispuna i stil teksta objekta mogu biti **po klasi**, kao što mogu biti i po sloju. CadCraft gleda ovim redom:

1. Vlastita vrijednost objekta, osim ako je i ona po klasi.
2. Vrijednost klase, kada objekt to preuzima po klasi i klasa je ima.
3. Vrijednost sloja.

Klasa čija je boja (ili tip linije …) {{ui:Nije postavljeno}} prosljeđuje objekt svojem sloju. Odaberite klasu i postavite joj {{ui:Boja}}, {{ui:Tip linije}}, {{ui:Debljina linije}}, {{ui:Ispuna (šrafure)}} i {{ui:Stil teksta}} ispod gumba. Označite {{ui:Upotrijebi pri stvaranju}} da novi objekti nacrtani u toj klasi preuzmu sve njih po klasi.

Svaka promjena na panelu jedan je korak poništavanja.

## Preimenovanje i brisanje

{{ui:Preimenuj}} uređuje naziv na mjestu: pritisnite {{key:Enter}} da ga zadržite, {{key:Esc}} da odustanete. Klase ispod nje slijede promjenu (`Lighting-Spot` postaje `Light-Spot` kada `Lighting` postane `Light`), kao i njihovi objekti i sva nadjačavanja po viewportu.

{{ui:Izbriši}} uklanja klasu i sve klase ispod nje. Njihovi objekti prelaze na **None**. Jedan korak {{ui:Poništi}} vraća sve. **None** se ne može preimenovati ni izbrisati.

## Projektni slojevi

Pod {{ui:Projektni slojevi}} svaki sloj može imati mjerilo (`1:50`) i visinu. Projektni sloj je običan sloj: prostor modela i listovi rade kao prije, a mjerilo i visina čuvaju se uz crtež za alate koji će ih koristiti.

## U DWG i DXF datotekama

Klase se čuvaju u svakoj DWG verziji koju CadCraft sprema i u DXF-u (R12 i 2000). Klasa svakog objekta je njegovi vlastiti prošireni podaci (aplikacija `CADCRAFT_CLASS`), pa ih AutoCAD i drugi programi čuvaju uz objekt. Popis klasa, boje i vidljivost čuvaju se u jednom nekorištenom bloku imena `CADCRAFT_CLASSES`; ako ga drugi program ukloni naredbom za čišćenje, CadCraft i dalje pronalazi klasu svakog objekta, a klase se vraćaju sa zadanim postavkama.

Drugi programi ne poznaju klase: svaki objekt crtaju vlastitim vrijednostima ili vrijednostima svojeg sloja.

Pogledajte i [Nadjačavanje klasa u viewportu](topic:viewport-overrides) i [Organiziranje crteža pomoću slojeva](topic:layers).
