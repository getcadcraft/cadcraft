---
title: Crtaj tekst sopstvenim SHX fontovima
summary: Daj CadCraft-u fasciklu SHX fontova (ili izaberi datoteke), i stilovi teksta koji ih imenuju crtaju se u njima, na ekranu i u štampi ili PDF-u, sa visinom stila, faktorom širine i nagibom.
keywords: shx, fontovi, font, oblični font, veliki font, bigfont, unifont, nasleđe, persijski, farsi, arapski, stil teksta, nedostajući font, zamenjen font, SHXFONTS, fascikla, obrnuto, vizuelni redosled, simplex, isocp
from: 14b0a4ab
---

Crteži iz drugih programa često imenuju **SHX fontove** u svojim stilovima teksta, a DWG ne nosi same fontove. Bez fonta, CadCraft crta taj tekst svojim licem, što je u redu za običan latinički tekst, ali ne i za stare fontove koji obične kodove karaktera preslikavaju u druge oblike slova, kao što je nasleđena persijska anotacija.

Dajte CadCraft-u fontove, pa će tekst crtati njima.

## Učitaj svoje fontove

Ukucajte {{cmd:SHXFONTS}} (`SHX`) i izaberite:

- {{ui:Fascikla}} (CadCraft Studio): izaberite fasciklu. Svaka `.shx` datoteka u njoj se čita odmah, i ponovo svaki put kada se CadCraft pokrene.
- {{ui:Datoteke}} (pregledač): izaberite jednu ili više `.shx` datoteka. One se čuvaju u ovom pregledaču i nikad se ne otpremaju.
- {{ui:Lista}}: fontovi koji su učitani, i oni koje otvoreni crtež imenuje, a vi ih niste učitali.
- {{ui:Ukloni}} i {{ui:Obriši}}: zaboravite jedan font, ili sve.

CadCraft ne može da uključi fontove trećih strana, pa ih nikad ne isporučuje: dolaze od vas. Crtež samo imenuje svoje fontove i ne čuva njihove kopije.

## Šta se dešava

Ime fonta u stilu teksta uparuje se sa učitanim fontom po imenu, bez obzira na velika i mala slova, fasciklu i `.shx` (`SIMPLEX.SHX` nalazi `simplex`). Tekst u takvom stilu crta se kao linije, na ekranu, u štampi i u PDF-u, na svom mestu, sa svojom visinom, rotacijom, faktorom širine i kosim uglom. Širina je širina samog fonta, pa poravnanja {{ui:Centar}} i {{ui:Desno}}, prelamanje i biranje odgovaraju onome što vidite. Stil čiji font nije učitan zadržava ugrađeno lice, a kada otvorite crtež koji imenuje fontove koje niste učitali, komandna linija to kaže.

Standardni stil se takođe računa: crtež čiji Standardni stil imenuje sopstveni font zadržava ga.

## Fontovi već u vizuelnom redosledu

Mnogi stari persijski i arapski SHX fontovi drže slova već oblikovana za ekran i crtaju se sleva udesno, pa se tekst ukucan u logičkom redosledu pojavljuje unazad. Ukucajte {{cmd:SHXFONTS}}, izaberite {{ui:Obrni}}, i navedite font: njegov tekst se tada raspoređuje tako da je poslednje slovo prvo. Pokrenite ponovo da poništite. Prekidač pripada fontu, čuva se u ovom pregledaču i ne čuva se u crtežu.

## Šta još nije obuhvaćeno

- Tekst sa ugrađenim kodovima formata (boje, slaganja u MTEXT-u) ostaje u ugrađenom licu.
- Veliki fontovi (dvobajtni tip) popunjavaju kodove kojih nema glavni font, ali tekst u istočnoazijskoj kodnoj strani koji je CadCraft već pretvorio u Unicode ne preslikava se nazad u dvobajtne kodove fonta.
- Čitač fontova prati objavljeni opis formata i testiran je na fontovima napravljenim za CadCraft. Ako se neki od vaših crta pogrešno, pošaljite nam font i crtež.
