---
title: Crtajte tekst vlastitim SHX fontovima
summary: Dajte CadCraft-u fasciklu SHX fontova (ili izaberite datoteke), pa se stilovi teksta koji ih imenuju crtaju njima, na ekranu i u ispisu ili PDF-u, sa visinom stila, faktorom širine i nagibom.
keywords: shx, fontovi, font, oblik fonta, veliki font, bigfont, unifont, naslijeđeno, legacy, persijski, farsi, arapski, stil teksta, nedostajući font, zamijenjen font, SHXFONTS, fascikla, obrnuto, vizuelni redoslijed, simplex, isocp
from: 14b0a4ab
---

Crteži iz drugih programa često imenuju **SHX fontove** u svojim stilovima teksta, a DWG ih ne nosi. Bez fonta, CadCraft crta taj tekst vlastitim krojem, što je u redu za običan latinični tekst, ali ne i za stare fontove koji obična znakovna mjesta preslikavaju na druge oblike slova, kao što je naslijeđena persijska napomena.

Dajte CadCraft-u fontove, i on će tekst crtati njima.

## Učitajte svoje fontove

Upišite {{cmd:SHXFONTS}} (`SHX`) i izaberite:

- {{ui:Fascikla}} (CadCraft Studio): izaberite fasciklu. Svaka `.shx` datoteka u njoj se čita odmah, i ponovo pri svakom pokretanju CadCraft-a.
- {{ui:Datoteke}} (pregledač): izaberite jednu ili više `.shx` datoteka. Čuvaju se u ovom pregledaču i nikad se ne šalju.
- {{ui:Popis (L)}}: fontovi koji su učitani, i oni koje otvoreni crtež imenuje a vi niste učitali.
- {{ui:Ukloni}} i {{ui:Obriši}}: zaboravite jedan font, ili sve.

CadCraft ne može uključiti fontove trećih strana, pa ih nikad ne isporučuje: dolaze od vas. Crtež samo imenuje svoje fontove i ne čuva njihovu kopiju.

## Šta se dešava

Naziv fonta stila podudara se s učitanim fontom po nazivu, bez obzira na velika i mala slova, fasciklu i `.shx` (`SIMPLEX.SHX` nalazi `simplex`). Tekst u takvom stilu crta se kao linije, na ekranu, u ispisu i u PDF-u, na vlastitom mjestu, visini, rotaciji, faktoru širine i kosom uglu. Njegova širina je fontova vlastita, pa se poravnanje {{ui:Centar}} i {{ui:Desno}}, prelamanje i biranje poklapaju s onim što vidite. Stil čiji font nije učitan zadržava ugrađeni kroj, a kada otvorite crtež koji imenuje fontove koje niste učitali, komandna linija to kaže.

Stil Standard se također računa: crtež čiji stil Standard imenuje svoj font zadržava ga.

## Fontovi već u vizuelnom redoslijedu

Mnogi stari persijski i arapski SHX fontovi drže slova koja su već oblikovana za ekran i crtaju se s lijeva udesno, pa tekst upisan u logičkom redoslijedu izlazi unazad. Upišite {{cmd:SHXFONTS}}, izaberite {{ui:Obrni (R)}}, i navedite font: njegov tekst se tada slaže od posljednjeg slova prema prvom. Pokrenite ponovo da poništite. Prekidač pripada fontu, čuva se u ovom pregledaču i ne upisuje se u crtež.

## Šta još nije obuhvaćeno

- Tekst s ugrađenim kodovima formata (boje, slaganja u MTEXT-u) ostaje u ugrađenom kroju.
- Veliki fontovi (dvobajtne vrste) popunjavaju kodove koje glavni font nema, ali tekst u istočnoazijskoj kodnoj stranici koju je CadCraft već pretvorio u Unicode nije vraćen na dvobajtne kodove fonta.
- Čitač fontova prati objavljeni opis formata i testiran je na fontovima napravljenim za CadCraft. Ako neki vaš crta pogrešno, pošaljite nam font i crtež.
