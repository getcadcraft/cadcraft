---
title: Organizuj crtež pomoću klasa
summary: Klase razvrstavaju objekte na drugi način, preko slojeva (Lighting-Fixtures-Spot): prikazuj i sakrivaj ih, daj im boju, vrstu linije, debljinu, ispunu i stil teksta koje objekti mogu preuzeti „po klasi“, i postavi klasu u koju idu novi objekti.
keywords: klasa, klase, CLASSES, CLS, CLASS, po klasi, ByClass, aktivna klasa, koristi pri kreiranju, Nijedna, projektni sloj, razmjera sloja, kota, Vectorworks
from: 672de9cb
---

Slojevi kažu *gdje* objekat pripada u crtežu; klase kažu *šta* je. Zid na sloju `Level 1` može biti u klasi `Walls-Exterior`, a spot svjetiljka na sloju `Ceiling` u klasi `Lighting-Fixtures-Spot`. Možeš sakriti svako svjetlo na svim slojevima odjednom ili nacrtati svaki vanjski zid debljim, bez premještanja ičega između slojeva.

Svaki objekat počinje u klasi **Nijedna**. Crtež bez vlastitih klasa radi kao i prije.

## Otvori panel Klase

Ukucaj `CLASSES` (ili `CLS`) i pritisni {{key:Enter}}, ili izaberi {{ui:Klase…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}. Panel se otvara preko crteža i ostaje otvoren dok crtaš.

- **Dodaj klasu:** upiši naziv u polje na vrhu i pritisni {{key:Enter}}. Crtica `-` pravi nivo: `Lighting-Fixtures-Spot` je ispod `Lighting-Fixtures`, koja je ispod `Lighting`; nedostajući nivoi se dodaju automatski.
- **Prikaži ili sakrij:** oko pored klase. Skrivanje klase sakriva sve klase ispod nje, na ekranu i na papiru.
- **Aktivna klasa:** okrugli gumb. Novi objekti koje nacrtaš idu u aktivnu klasu.
- **Odaberi klasu:** klikni na njen naziv. Dugmad i postavke ispod liste tada rade nad njom.

Broj na kraju svakog reda je koliko objekata ima u toj klasi (u modelu, na listovima i unutar definicija blokova).

## Stavi objekte u klasu

Odaberi objekte, izaberi klasu u panelu i odaberi {{ui:Postavi klasu}}. Prvo označi {{ui:Po klasi}} da bi preuzeli boju, vrstu linije, debljinu, ispunu i stil teksta iz klase. Možeš i:

- ukucati `CLASS` s odabranim objektima i unijeti naziv klase (novi naziv pravi klasu);
- ukucati `CLASS` bez odabira da postaviš aktivnu klasu; `?` navodi klase s njihovim brojevima;
- koristiti odjeljak {{ui:Klasa}} panela Svojstva: klasu, i prekidač {{ui:… po klasi}} za boju, vrstu linije i debljinu (ispunu za šrafure, stil teksta za tekst);
- birati po klasi s `QSELECT`: izaberi svojstvo {{ui:Klasa}}.

{{ui:Odaberi njene objekte}} odabire svaki objekat izabrane klase na otvorenom listu (ili u modelu).

## Kako se objekat crta: objekat, klasa, sloj

Boja, vrsta linije, debljina, ispuna i stil teksta objekta mogu biti **po klasi**, kao što mogu biti i po sloju. CadCraft gleda ovim redom:

1. Vlastitu vrijednost objekta, osim ako je i ona po klasi.
2. Vrijednost klase, kad objekat to uzima po klasi i klasa je ima.
3. Vrijednost sloja.

Klasa čija je boja (ili vrsta linije …) {{ui:Nije postavljeno}} prepušta objekat njegovom sloju. Izaberi klasu i postavi joj {{ui:Boja}}, {{ui:Vrsta linije}}, {{ui:Debljina linije}}, {{ui:Ispuna (šrafure)}} i {{ui:Stil teksta}} ispod dugmadi. Označi {{ui:Koristi pri kreiranju}} da novi objekti nacrtani u toj klasi preuzmu sve to po klasi.

Svaka promjena u panelu je jedan korak za {{ui:Poništi}}.

## Preimenuj i obriši

{{ui:Preimenuj}} mijenja naziv na mjestu: pritisni {{key:Enter}} da zadržiš, {{key:Esc}} da ostaviš. Klase ispod nje slijede (`Lighting-Spot` postaje `Light-Spot` kad `Lighting` postane `Light`), kao i njihovi objekti i sva prilagođavanja po prozoru prikaza.

{{ui:Izbriši}} uklanja klasu i sve klase ispod nje. Njihovi objekti prelaze u **Nijedna**. Jedan {{ui:Poništi}} vraća sve. **Nijedna** ne može biti preimenovana ni obrisana.

## Projektni slojevi

Pod {{ui:Projektni slojevi}} svaki sloj može imati razmjeru (`1:50`) i visinsku kotu. Projektni sloj je običan sloj: prostor modela i listovi rade kao prije, a razmjera i visinska kota se čuvaju uz crtež za alate koji će ih koristiti.

## U DWG i DXF datotekama

Klase se čuvaju u svakoj DWG verziji koju CadCraft snima i u DXF-u (R12 i 2000). Klasa svakog objekta je njegovi prošireni podaci (aplikacija `CADCRAFT_CLASS`), pa ih AutoCAD i drugi programi čuvaju uz objekat. Spisak klasa, boje i vidljivost čuvaju se u jednom nekorištenom bloku pod nazivom `CADCRAFT_CLASSES`; ako neki drugi program očisti taj blok, CadCraft i dalje nalazi klasu svakog objekta, a klase se vraćaju s podrazumijevanim postavkama.

Drugi programi ne znaju za klase: crtaju svaki objekat s vlastitim vrijednostima ili vrijednostima svog sloja.

Vidi i [Prilagođavanja klasa po prozoru prikaza](topic:viewport-overrides) i [Organizuj crtež pomoću slojeva](topic:layers).
