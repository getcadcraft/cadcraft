---
title: Postavljanje čeličnih profila i standardnih dijelova
summary: Nacrtajte čelične profile, poglede sa strane i 3D štapove iz objavljenih tablica profila, postavite vijke, matice, podloške, zatike, ležajeve, klinove i zupčanike prema njihovim normama te ih navedite u popisu dijelova.
keywords: čelik, presjek, profil, oblik, w profil, široka prirubnica, i-profil, u-profil, kutnik, hss, cijev, ipe, hea, heb, upn, greda, stup, štap, pogled, aisc, en 10365, vijak, matica, podložak, zatik, ležaj, klin, utor za klin, zupčanik, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standardni dijelovi, popis dijelova, sastavnica, steelmember, partslist
from: 547c1048
---

Kartica {{ui:Standardno}} knjižnice ima dvije vrste stavki, izrađene ovdje iz objavljenih tablica (ništa se ne preuzima):

- **Čelični profili**: 1,335 veličina. W, S, C, L, HSS i Pipe iz AISC Shapes Database v16.0; IPE, HEA, HEB i UPN iz EN 10365:2017. DetailCraft koristi istu tablicu.
- **Standardni dijelovi**: vijci sa šesterokutnom glavom (ISO 4017), šesterokutni vijci (ISO 4014), šesterokutne matice (ISO 4032), obični podložci (ISO 7089), palčasti šesterokutni vijci i matice (ASME B18.2.1 i B18.2.2), paralelni zatici (ISO 2338), kuglični ležajevi s dubokim žlijebom (ISO 15), paralelni klinovi (DIN 6885-1) i čeoni zupčanici (moduli iz ISO 54).

Sve ovdje je dijeljeno pod CC0: slobodno to koristite za bilo što, bez navođenja autora.

## Postavite čelični profil

1. Otvorite knjižnicu ({{ui:Knjižnica}} u grupi Blokovi ili upišite `LIB`) i kliknite karticu {{ui:Standardno}}.
2. Odaberite obitelj u prvom popisu, na primjer {{ui:W profili}}. Upišite u polje za pretraživanje da suzite veličine: `W12` prikazuje svaki W12.
3. U {{ui:Postavi kao}} odaberite:
   - {{ui:Presjek}}: poprečni presjek, sa središtem u točki umetanja.
   - {{ui:Visinska razina}}: element viđen sa strane, duljine iz {{ui:Duljina (mm)}}, od sredine njegova lijevog kraja.
   - {{ui:3D štap}}: puno tijelo na kartici 3D (dolje).
4. Kliknite {{ui:Postavi}} na kartici veličine, zatim kliknite mjesto gdje ide, kao i za svaku stavku knjižnice.

Presjek ili pogled postaje blok. Njegovi atributi nose veličinu, tablicu iz koje dolazi, duljinu (za pogled) i materijal koji možete upisati.

:::note
S profili, U-profili i UPN crtaju se s paralelnim prirubnicama prosječne debljine, a kutnici s pravim kutovima: stvarne prirubnice su nagnute, a kutovi zaobljeni. W, IPE, HEA i HEB imaju korijenske zaobljenja, a HSS polumjere kutova.
:::

## Napravite 3D štap

Odaberite {{ui:3D štap}} i kliknite {{ui:Postavi}}, ili upišite {{cmd:STEELMEMBER}} (`SMEMBER`) u naredbenom retku:

1. Kod `Dimenzija presjeka` pritisnite {{key:Enter}} za prikazanu veličinu ili upišite jednu, na primjer `HSS6x6x1/4` ili `IPE300`.
2. Kliknite početnu točku, zatim krajnju. Štap ide između njih, stojeći na tlu.
3. Za stup upišite `C`, kliknite njegovu baznu točku i upišite visinu.

Štap je zatvoreno puno tijelo na kartici 3D. Pomičite ga ili kopirajte tamo kao bilo koje drugo tijelo. {{key:Mod+Z}} ga uklanja.

## Postavite standardni dio

1. Na kartici {{ui:Standardno}} odaberite obitelj, na primjer {{ui:Vijci sa šesterokutnom glavom}}.
2. Za vijak, zatik ili klin upišite njegovu {{ui:Duljina (mm)}} (u palcima za palčaste obitelji). Za zupčanik upišite {{ui:Zubi}}, {{ui:Širina zupca (mm)}} i {{ui:Provrt (mm)}}. Ostavite polje prazno za uobičajenu vrijednost koja je u njemu prikazana.
3. Kliknite {{ui:Postavi}} na veličini i kliknite mjesto gdje ide.

Vijci i zatici su nacrtani sa strane, s nosivom površinom glave u točki umetanja; matice, podložci, ležaji i zupčanici su okrenuti licem; klinovi su odozgo. Navoji su nacrtani uobičajeno: korijen tankom linijom, kraj navoja debelom. Zupčanici su nacrtani kao kružnica tjemena, kružnica diobe i kružnica korijena, a ne zub po zub.

Blok svakog dijela nosi svoju vrstu, normu, veličinu, duljinu i materijal kao atribute, te svoju težinu iz nazivnog oblika u čeliku. Promijenite materijal na ploči {{ui:Svojstva}}.

Iste dijelove ima i knjižnica kao stavke, a PartCraft ih otvara kao parametarske dijelove ({{ui:Standardni dio}} u grupi Datoteka).

## Napravite popis dijelova

- U knjižnici kliknite {{ui:Popis dijelova}}: svaki standardni dio i čelični profil u crtežu, grupirani po vrsti, normi, veličini, duljini i materijalu, s količinom i brojevima stavki. {{ui:Preuzmi CSV}} sprema ga za tablični program.
- Za crtanje upišite {{cmd:PARTSLIST}} (`PLIST`), kliknite gornji lijevi kut tablice i pritisnite {{key:Enter}} za uobičajenu visinu teksta ili upišite jednu.

Popis se čita iz atributa blokova, pa je i dalje točan nakon što se crtež spremi kao DWG ili DXF i ponovno otvori.

## Česte pogreške

- **„Nijedan čelični profil nije nazvan …"**: upišite veličinu onako kako je navodi kartica {{ui:Standardno}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Štap je na kartici 3D, a ne u tlocrtu.** {{cmd:STEELMEMBER}} izrađuje puno tijelo; otvorite karticu 3D da ga vidite. Da čelik prikažete u tlocrtu, postavite i {{ui:Presjek}} ili {{ui:Visinska razina}}.
- **Duljina izvan dopuštenog raspona.** Vijak mora biti duži od svoje glave, a klin duži nego što je širok. Redak ispod kartica kaže koja je vrijednost odbijena.
