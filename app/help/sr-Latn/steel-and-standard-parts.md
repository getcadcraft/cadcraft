---
title: Postavljanje čeličnih profila i standardnih delova
summary: Nacrtaj čelične profile, izglede i 3D elemente iz objavljenih tabela profila, postavi zavrtnje, navrtke, podloške, zatiče, ležajeve, pera i zupčanike prema njihovim standardima, i navedi ih u spisku delova.
keywords: čelik, profil, presek, oblik, W profil, I-nosač, U-profil, kanal, ugaonik, HSS, cev, pipe, ipe, hea, heb, upn, greda, stub, element, izgled, aisc, en 10365, zavrtanj, vijak, navrtka, podloška, zatik, ležaj, pero, utor, zupčanik, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standardni delovi, spisak delova, spisak materijala, bom, steelmember, partslist
from: 547c1048
---

Kartica {{ui:Standard}} biblioteke ima dve vrste stvari, napravljene ovde iz objavljenih tabela (ništa se ne preuzima):

- **Čelični profili**: 1,335 veličina. W, S, C, L, HSS i Pipe iz AISC Shapes Database v16.0; IPE, HEA, HEB i UPN iz EN 10365:2017. DetailCraft koristi istu tabelu.
- **Standardni delovi**: šestougaoni vijci sa glavom (ISO 4017), šestougaoni zavrtnji (ISO 4014), šestougaone navrtke (ISO 4032), obične podloške (ISO 7089), palčni šestougaoni zavrtnji i navrtke (ASME B18.2.1 i B18.2.2), paralelni zatici (ISO 2338), duboki kuglični ležajevi (ISO 15), paralelna pera (DIN 6885-1) i čeoni zupčanici (moduli iz ISO 54).

Sve ovde je deljeno pod licencom CC0: može se koristiti za bilo šta, bez navođenja autora.

## Postavi čelični profil

1. Otvori biblioteku ({{ui:Library}} u grupi Blokovi, ili ukucaj `LIB`) i klikni karticu {{ui:Standard}}.
2. Izaberi porodicu na prvoj listi, na primer {{ui:W shapes}}. Ukucaj u polje za pretragu da suziš veličine: `W12` prikazuje sve W12.
3. U {{ui:Place as}} izaberi:
   - {{ui:Section}}: poprečni presek, sa središtem u tački umetanja.
   - {{ui:Elevation}}: element gledan sa strane, dužine koja piše u {{ui:Length (mm)}}, od sredine svog levog kraja.
   - {{ui:3D member}}: čvrsto telo na kartici 3D (ispod).
4. Klikni {{ui:Place}} na kartici veličine, pa klikni gde ide, kao za svaku stavku biblioteke.

Presek ili izgled postaje blok. Njegovi atributi nose veličinu, tabelu iz koje potiče, dužinu (za izgled) i materijal koji možeš da upišeš.

:::note
Profili S, kanali i UPN crtaju se sa paralelnim prirubnicama prosečne debljine, a ugaonici sa pravim uglovima: stvarne prirubnice su nagnute, a uglovi zaobljeni. W, IPE, HEA i HEB imaju korenska zaobljenja, a HSS poluprečnike uglova.
:::

## Napravi 3D element

Izaberi {{ui:3D member}} i klikni {{ui:Place}}, ili ukucaj {{cmd:STEELMEMBER}} (`SMEMBER`) u komandnoj liniji:

1. Na `Veličina preseka` pritisni {{key:Enter}} za prikazanu veličinu, ili ukucaj neku, na primer `HSS6x6x1/4` ili `IPE300`.
2. Klikni početnu tačku, pa krajnju tačku. Element ide između njih i stoji na tlu.
3. Za stub ukucaj `C`, klikni njegovu osnovnu tačku i ukucaj njegovu visinu.

Element je zatvoreno čvrsto telo na kartici 3D. Pomeri ili kopiraj ga tamo kao i svako drugo telo. {{key:Mod+Z}} ga ponovo uklanja.

## Postavi standardni deo

1. Na kartici {{ui:Standard}} izaberi porodicu, na primer {{ui:Hex head screws}}.
2. Za vijak, zavrtanj, zatik ili pero ukucaj njegovu {{ui:Length (mm)}} (inči za palčne porodice). Za zupčanik ukucaj {{ui:Teeth}}, {{ui:Face width (mm)}} i {{ui:Bore (mm)}}. Ostavi polje prazno za uobičajenu vrednost prikazanu u njemu.
3. Klikni {{ui:Place}} na veličinu i klikni gde ide.

Vijci, zavrtnji i zatici crtaju se sa strane, sa nosećom površinom glave u tački umetanja; navrtke, podloške, ležajevi i zupčanici gledaju licem; pera odozgo. Navoji se crtaju uobičajeno: koren tankom linijom, kraj navoja debelom. Zupčanici se crtaju kao krug vrha, podeoni krug i krug korena, a ne zub po zub.

Blok svakog dela nosi svoj tip, standard, veličinu, dužinu i materijal kao atribute, a svoju težinu dobija iz nominalnog oblika u čeliku. Promeni materijal u panelu {{ui:Properties}}.

Iste delove imaju i u biblioteci kao stavke, a PartCraft ih otvara kao parametarske delove ({{ui:Standardni deo}} u njegovoj grupi Datoteka).

## Napravi spisak delova

- U biblioteci klikni {{ui:Parts list}}: svaki standardni deo i čelični profil u crtežu, grupisan po tipu, standardu, veličini, dužini i materijalu, sa količinom i brojevima stavki. {{ui:Download CSV}} čuva ga za tabelarnu obradu.
- Da ga nacrtaš, ukucaj {{cmd:PARTSLIST}} (`PLIST`), klikni gornji levi ugao tabele i pritisni {{key:Enter}} za uobičajenu visinu teksta ili ukucaj drugu.

Spisak se čita iz atributa blokova, pa je i dalje tačan kad se crtež sačuva kao DWG ili DXF i ponovo otvori.

## Česte greške

- **„Nijedan čelični profil nije nazvan …“**: ukucaj veličinu onako kako je navodi kartica {{ui:Standard}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Element je na kartici 3D, a ne u planu.** {{cmd:STEELMEMBER}} pravi čvrsto telo; otvori karticu 3D da ga vidiš. Da čelik prikažeš u planu, postavi i {{ui:Section}} ili {{ui:Elevation}}.
- **Dužina van opsega.** Zavrtanj mora biti duži od svoje glave, a pero duže nego što je široko. Linija ispod kartica kaže koja vrednost je odbijena.
