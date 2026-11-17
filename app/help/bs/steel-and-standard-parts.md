---
title: Postavi čelične profile i standardne dijelove
summary: Nacrtaj čelične profile, poglede sa strane i 3D elemente iz objavljenih tabela profila, postavi vijke, matice, podloške, klinove, ležajeve, ključeve i zupčanike prema njihovim standardima i ubaci ih u listu dijelova.
keywords: čelik, presjek, profil, oblik, W oblik, široka prirubnica, I-nosač, kanal, ugaonik, HSS, cijev, ipe, hea, heb, upn, greda, stub, element, izgled, aisc, en 10365, vijak, matica, podloška, klin, ležaj, ključ, žlijeb za ključ, zupčanik, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standardni dijelovi, lista dijelova, specifikacija, steelmember, partslist
from: 547c1048
---

Kartica {{ui:Standardni}} u biblioteci ima dvije vrste stvari, napravljene upravo ovdje iz objavljenih tabela (ništa se ne preuzima):

- **Čelični profili**: 1,335 veličina. W, S, C, L, HSS i Pipe iz AISC Shapes Database v16.0; IPE, HEA, HEB i UPN iz EN 10365:2017. DetailCraft koristi istu tabelu.
- **Standardni dijelovi**: {{ui:Vijci sa šestougaonom glavom}} (ISO 4017), šestougaoni zavrtnji (ISO 4014), šestougaone matice (ISO 4032), obične podloške (ISO 7089), inčni šestougaoni zavrtnji i matice (ASME B18.2.1 i B18.2.2), paralelni klinovi (ISO 2338), duboki kuglični ležajevi (ISO 15), paralelni ključevi (DIN 6885-1) i čeoni zupčanici (moduli iz ISO 54).

Sve ovo je zajedničko pod CC0: koristi za bilo šta, bez navođenja autora.

## Postavi čelični profil

1. Otvori biblioteku ({{ui:Biblioteka}} u grupi Blok, ili upiši `LIB`) i klikni karticu {{ui:Standardni}}.
2. Odaberi porodicu na prvoj listi, na primjer {{ui:W profili}}. Upiši u polje za pretragu da suziš veličine: `W12` prikazuje sve W12.
3. U {{ui:Postavi kao}} izaberi:
   - {{ui:Presjek}}: poprečni presjek, sa središtem u tački umetanja.
   - {{ui:Izgled}}: element gledan sa strane, dugačak koliko kaže {{ui:Dužina (mm)}}, od sredine lijevog kraja.
   - {{ui:3D element}}: čvrsto tijelo na 3D kartici (dolje).
4. Klikni {{ui:Postavi}} na kartici veličine, pa klikni gdje ide, kao i za svaku stavku biblioteke.

Presjek ili izgled postaje blok. Njegovi atributi nose veličinu, tabelu iz koje dolazi, dužinu (za izgled) i materijal koji možeš popuniti.

:::note
S profili, kanali i UPN crtaju se sa paralelnim prirubnicama prosječne debljine, a ugaonici sa pravim uglovima: stvarne prirubnice su nagnute, a uglovi zaobljeni. W, IPE, HEA i HEB imaju korijenska zaobljenja, a HSS radijuse uglova.
:::

## Napravi 3D element

Odaberi {{ui:3D element}} i klikni {{ui:Postavi}}, ili upiši {{cmd:STEELMEMBER}} (`SMEMBER`) u komandnoj liniji:

1. Kod `Veličina presjeka` pritisni {{key:Enter}} za prikazanu veličinu, ili upiši jednu, na primjer `HSS6x6x1/4` ili `IPE300`.
2. Klikni početnu tačku, pa krajnju. Element ide između njih, oslonjen na tlo.
3. Za stub upiši `C`, klikni njegovu baznu tačku i upiši visinu.

Element je zatvoreno tijelo na 3D kartici. Pomjeraj ili kopiraj ga tamo kao i svako drugo tijelo. {{key:Mod+Z}} ga uklanja.

## Postavi standardni dio

1. Na kartici {{ui:Standardni}} odaberi porodicu, na primjer {{ui:Vijci sa šestougaonom glavom}}.
2. Za vijak, zavrtanj, klin ili ključ upiši njegovu {{ui:Dužina (mm)}} (inče za inčne porodice). Za zupčanik upiši {{ui:Zubi}}, {{ui:Širina površine (mm)}} i {{ui:Provrt (mm)}}. Ostavi polje prazno za uobičajenu vrijednost prikazanu u njemu.
3. Klikni {{ui:Postavi}} na veličini i klikni gdje ide.

Vijci, zavrtnji i klinovi crtaju se sa strane, sa nosivom površinom glave u tački umetanja; matice, podloške, ležajevi i zupčanici gledaju licem; ključevi odozgo. Navoji se crtaju na uobičajen način: korijen tankom linijom, kraj navoja debelom. Zupčanici se crtaju kao krug vrha, podioni krug i krug korijena, a ne zub po zub.

Blok svakog dijela nosi svoju vrstu, standard, veličinu, dužinu i materijal kao atribute, i njegovu težinu iz nominalnog oblika u čeliku. Promijeni materijal u panelu {{ui:Svojstva}}.

Isti dijelovi su u biblioteci i kao stavke, a PartCraft ih otvara kao parametarske dijelove ({{ui:Standardni dio}} u njegovoj grupi Datoteka).

## Napravi listu dijelova

- U biblioteci klikni {{ui:Lista dijelova}}: svaki standardni dio i čelični profil u crtežu, grupisani po vrsti, standardu, veličini, dužini i materijalu, sa količinom i rednim brojevima stavki. {{ui:Preuzmi CSV}} je sačuva za tabelarni program.
- Da je nacrtaš, upiši {{cmd:PARTSLIST}} (`PLIST`), klikni gornji lijevi ugao tabele i pritisni {{key:Enter}} za uobičajenu visinu teksta ili upiši jednu.

Lista se čita iz atributa blokova, pa je i dalje tačna kad se crtež sačuva kao DWG ili DXF i ponovo otvori.

## Česte greške

- **"Nijedan čelični profil nije nazvan …"**: upiši veličinu onako kako je navodi kartica {{ui:Standardni}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Element je na 3D kartici, a ne u planu.** {{cmd:STEELMEMBER}} pravi tijelo; otvori 3D karticu da ga vidiš. Da prikažeš čelik u planu, postavi i {{ui:Presjek}} ili {{ui:Izgled}}.
- **Dužina van opsega.** Vijak mora biti duži od svoje glave, a ključ duži nego što je širok. Linija ispod kartica kaže koja vrijednost je odbijena.
