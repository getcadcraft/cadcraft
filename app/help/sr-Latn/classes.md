---
title: Organizovanje crteža klasama
summary: Klase sortiraju objekte na drugi način, preko slojeva (Lighting-Fixtures-Spot): prikažite ih i sakrijte, dajte im boju, tip linije, debljinu, ispunu i stil teksta koje objekti mogu da preuzmu „po klasi“, i podesite klasu u koju idu novi objekti.
keywords: klasa, klase, CLASSES, CLS, CLASS, po klasi, ByClass, aktivna klasa, koristi pri kreiranju, None, projektni sloj, razmera sloja, visinska kota, Vectorworks
from: 672de9cb
---

Slojevi kažu *gde* objekat pripada u crtežu; klase kažu *šta* on jeste. Zid na sloju `Level 1` može biti u klasi `Walls-Exterior`, a tačkasta svetiljka na sloju `Ceiling` u klasi `Lighting-Fixtures-Spot`. Možete sakriti svako svetlo na svim slojevima odjednom ili nacrtati svaki spoljašnji zid debljim, a da ništa ne premeštate između slojeva.

Svaki objekat na početku pripada klasi **None**. Crtež bez sopstvenih klasa radi potpuno kao ranije.

## Otvorite panel Klase

Ukucajte `CLASSES` (ili `CLS`) i pritisnite {{key:Enter}}, ili izaberite {{ui:Klase…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}. Panel se otvara preko crteža i ostaje otvoren dok crtate.

- **Dodavanje klase:** ukucajte njen naziv u polje na vrhu i pritisnite {{key:Enter}}. Znak `-` pravi nivo: `Lighting-Fixtures-Spot` je ispod `Lighting-Fixtures`, koja je ispod `Lighting`; nedostajući nivoi se dodaju automatski.
- **Prikaz ili skrivanje:** oko pored klase. Skrivanje klase sakriva sve klase ispod nje, na ekranu i na papiru.
- **Aktivna klasa:** okrugli taster. Novi objekti koje nacrtate idu u aktivnu klasu.
- **Izbor klase:** kliknite na njen naziv. Tasteri i podešavanja ispod liste tada rade na njoj.

Broj na kraju svakog reda je koliko objekata ima u toj klasi (u modelu, na listovima i unutar definicija blokova).

## Stavljanje objekata u klasu

Izaberite objekte, izaberite klasu u panelu i izaberite {{ui:Postavi klasu}}. Označite polje {{ui:Po klasi}} pre toga da bi preuzeli boju, tip linije, debljinu, ispunu i stil teksta iz klase. Možete i:

- ukucati `CLASS` dok su objekti izabrani i uneti naziv klase (novi naziv pravi klasu);
- ukucati `CLASS` kada ništa nije izabrano da postavite aktivnu klasu; `?` navodi klase sa brojem objekata;
- koristiti odeljak {{ui:Klasa}} u panelu Svojstva: klasu i prekidač {{ui:… po klasi}} za boju, tip linije i debljinu (ispuna za šrafure, stil teksta za tekst);
- birati po klasi komandom `QSELECT`: izaberite svojstvo {{ui:Klasa}}.

{{ui:Izaberi njene objekte}} bira sve objekte izabrane klase na otvorenom listu (ili u modelu).

## Kako se objekat crta: objekat, klasa, sloj

Boja, tip linije, debljina, ispuna i stil teksta objekta mogu biti **po klasi**, kao što mogu biti po sloju. CadCraft gleda ovim redom:

1. Sopstvena vrednost objekta, osim ako je ta vrednost po klasi.
2. Vrednost klase, kada objekat to preuzima po klasi i klasa je ima.
3. Vrednost sloja.

Klasa čija je boja (ili tip linije …) {{ui:Nije postavljeno}} prosleđuje objekat svom sloju. Izaberite klasu i postavite njene {{ui:Boja}}, {{ui:Tip linije}}, {{ui:Debljina linije}}, {{ui:Ispuna (šrafure)}} i {{ui:Stil teksta}} ispod tastera. Označite {{ui:Koristi pri kreiranju}} da novi objekti nacrtani u toj klasi preuzmu sve njih po klasi.

Svaka promena u panelu je jedan korak za {{ui:Opozovi}}.

## Preimenovanje i brisanje

{{ui:Preimenuj}} menja naziv na mestu: pritisnite {{key:Enter}} da ga zadržite, {{key:Esc}} da izađete. Klase ispod nje prate promenu (`Lighting-Spot` postaje `Light-Spot` kada `Lighting` postane `Light`), a tako rade i njihovi objekti i sva nadjačavanja prozora pogleda.

{{ui:Izbriši}} uklanja klasu i sve klase ispod nje. Njihovi objekti prelaze u **None**. Jedan {{ui:Opozovi}} vraća sve. **None** ne može da se preimenuje ili izbriše.

## Projektni slojevi

Pod {{ui:Projektni slojevi}} svaki sloj može da nosi razmeru (`1:50`) i visinsku kotu. Projektni sloj je običan sloj: prostor modela i listovi rade kao ranije, a razmera i visinska kota čuvaju se uz crtež za alate koji će ih koristiti.

## U DWG i DXF datotekama

Klase se čuvaju u svakoj DWG verziji koju CadCraft snima i u DXF-u (R12 i 2000). Klasa svakog objekta su njegovi prošireni podaci (aplikacija `CADCRAFT_CLASS`), pa ih AutoCAD i drugi programi čuvaju uz objekat. Spisak klasa, boje i vidljivost čuvaju se u jednom neiskorišćenom bloku pod nazivom `CADCRAFT_CLASSES`; ako ga drugi program ukloni, CadCraft i dalje pronalazi klasu svakog objekta, a klase se vraćaju sa podrazumevanim podešavanjima.

Drugi programi ne znaju za klase: crtaju svaki objekat sopstvenim vrednostima ili vrednostima sloja.

Pogledajte i [Nadjačavanja klasa u prozoru pogleda](topic:viewport-overrides) i [Organizovanje crteža slojevima](topic:layers).
