---
title: Crtanje teksta vlastitim SHX fontovima
summary: Dajte CadCraftu mapu SHX fontova (ili odaberite datoteke) i stilovi teksta koji ih imenuju crtaju se njima, na zaslonu i u ispisu ili PDF-u, sa visinom, faktorom širine i kosinom stila.
keywords: shx, fontovi, font, oblik fonta, veliki font, bigfont, unifont, naslijeđeni, perzijski, farsi, arapski, stil teksta, nedostajući font, zamijenjen font, SHXFONTS, mapa, obrni, vizualni redoslijed, simplex, isocp
from: 14b0a4ab
---

Crteži iz drugih programa često u svojim stilovima teksta imenuju **SHX fontove**, a DWG ih ne sadrži. Bez fonta CadCraft crta taj tekst vlastitim licem, što je u redu za obični latinični tekst, ali ne i za stare fontove koji znakove običnih kodova preslikavaju u druge oblike slova, kao što je naslijeđena perzijska anotacija.

Dajte CadCraftu fontove i on će tekst crtati u njima.

## Učitajte svoje fontove

Upišite {{cmd:SHXFONTS}} (`SHX`) i odaberite:

- {{ui:Mapa}} (CadCraft Studio): odaberite mapu. Svaka `.shx` datoteka u njoj učitava se odmah i ponovno svaki put kad se CadCraft pokrene.
- {{ui:Datoteke}} (preglednik): odaberite jednu ili više `.shx` datoteka. Čuvaju se u ovom pregledniku i nikad se ne šalju.
- {{ui:Popis (L)}}: fontovi koji su učitani i oni koje otvoreni crtež imenuje, a vi ih niste učitali.
- {{ui:Ukloni (R)}} i {{ui:Očisti}}: zaboravite jedan font ili sve.

CadCraft ne može uključiti fontove trećih strana, pa ih nikad ne isporučuje: dolaze od vas. Crtež samo imenuje svoje fontove i ne čuva njihovu kopiju.

## Što se događa

Naziv fonta u stilu teksta uparuje se s učitanim fontom po nazivu, bez obzira na velika i mala slova, mapu i `.shx` (`SIMPLEX.SHX` nalazi `simplex`). Tekst u takvom stilu crta se kao linije, na zaslonu, u ispisu i u PDF-u, na vlastitom mjestu, visini, rotaciji, faktoru širine i kutu kosine. Širina je fontova vlastita, pa se poravnanje {{ui:Središte}} i {{ui:Desno}}, prelamanje i odabir podudaraju s onim što vidite. Stil čiji font nije učitan zadržava ugrađeno lice, a kad otvorite crtež koji imenuje fontove koje niste učitali, naredbeni redak to kaže.

Stil Standard također se uzima u obzir: crtež čiji stil Standard imenuje vlastiti font zadržava ga.

## Fontovi već u vizualnom redoslijedu

Mnogi stari perzijski i arapski SHX fontovi imaju slova već oblikovana za zaslon i crtaju se slijeva nadesno, pa tekst upisan u logičkom redoslijedu izlazi unatrag. Upišite {{cmd:SHXFONTS}}, odaberite {{ui:Obrni (R)}} i imenujte font: njegov tekst se tada slaže od zadnjeg slova prema prvom. Ponovno ga pokrenite da poništite. Prekidač pripada fontu, čuva se u ovom pregledniku i ne sprema se u crtež.

## Što još nije obuhvaćeno

- Tekst s ugrađenim kodovima oblikovanja (boje, slaganja u MTEXT-u) ostaje u ugrađenom licu.
- Veliki fontovi (dvobajtni) popunjavaju kodove kojih nedostaje u glavnom fontu, ali tekst u istočnoazijskoj kodnoj stranici koju je CadCraft već pretvorio u Unicode ne preslikava se natrag u dvobajtne kodove fonta.
- Čitač fontova slijedi objavljeni opis formata i testiran je na fontovima napravljenima za CadCraft. Ako se neki vaš crta krivo, pošaljite nam font i crtež.
