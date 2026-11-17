---
title: Crtanje bez vida
summary: Uključite Pristup i CadCraft izgovara svaku naredbu i rezultat preko čitača zaslona, opisuje crtež i ono što je blizu kursora, omogućuje pomicanje kursora tipkovnicom, pušta zvuk za svako hvatanje i ručku te prima naredbe glasom tamo gdje to vaš preglednik može na vašem računalu.
keywords: pristupačnost, čitač zaslona, slijep, slabovidan, NVDA, VoiceOver, JAWS, Orca, tipkovnički kursor, glasovne naredbe, govor, zvukovi, zvukovi hvatanja, opiši crtež, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Pristup** vam omogućuje crtanje bez gledanja u zaslon. Isključen je dok ga ne uključite, tako da ga nitko ne dobije slučajno.

## Uključivanje

Otvorite **Postavke** (zupčanik ili Ctrl+,), pronađite **Crtanje bez vida** i odaberite **Uključeno**. Ili upišite `ACCESS` u naredbeni redak i odgovorite `On`. Zapamćeno je na ovom računalu.

Kad je Pristup uključen:

- **Sve što naredbeni redak kaže izgovara se** preko čitača zaslona: što ste upisali, upit koji se postavlja, odgovor i svaka pogreška. CadCraft koristi vlastita uljudna i hitna živa područja, pa čitač zaslona koji čita živa područja ne treba ništa postavljati. Pogreške i otkazivanja prekidaju; sve ostalo čeka red.
- **Područje crteža je dostupno.** Pritisnite Tab dok ne čujete „Crtež“ ili pritisnite Shift+Tab iz naredbenog retka. To je područje koje prosljeđuje tipke CadCraftu.

## Tipke na crtežu

| Tipka | Što radi |
|---|---|
| Strelice | Pomiču tipkovnički kursor. Korak je otprilike stotinka onoga što zaslon prikazuje, zaokružen na 1, 2 ili 5. Shift pomiče deset puta dalje, Ctrl deset puta manje. |
| Enter | Odabire točku pod kursorom, točno kao što bi učinio klik. |
| Space | Pritisnite Enter u naredbenom retku: završava LINE, uzima zadano. |
| Tab, Shift+Tab | Skaču na sljedeću ili prethodnu točku hvatanja blizu kursora, najbližu prvo. |
| G | Prolazi kroz ručke odabranih objekata. |
| D | Opisuje crtež: koliko ima objekata, koje vrste, koliko su veliki, što je odabrano. |
| W | Kaže gdje je kursor i koliko je udaljen od posljednje točke. |
| N | Kaže što je blizu kursora, najbliže prvo, s udaljenošću i stranom. |
| S | Opisuje odabrane objekte. |
| R | Ponavlja posljednje što je rečeno. |
| V | Glas uključen ili isključen. |
| / | Prebacuje na naredbeni redak. |
| ? | Navodi ove tipke. |

Pomicanje tipkama kaže gdje ste završili. Kad naredba čeka točku, kaže i koliko ste daleko od posljednje točke i u kojem smjeru, na primjer „2400 od posljednje točke, udesno, pod 0 stupnjeva“.

## Naredbe

- {{cmd:ACCESS}} uključuje ili isključuje Pristup, zvukove hvatanja i glas te kaže stanje.
- {{cmd:DESCRIBE}} kaže što crtež sadrži.
- {{cmd:WHEREAMI}} kaže gdje je kursor.
- {{cmd:NEARBY}} kaže što je blizu kursora.
- {{cmd:SAYSEL}} kaže što je odabrano, jednu rečenicu po objektu.
- {{cmd:VOICE}} uključuje ili isključuje izgovorene naredbe.

Ових pet naredbi čita crtež i ispisuje odgovor; ništa ne mijenjaju.

## Zvukovi za hvatanja i ručke

U Postavkama uključite **Zvukovi hvatanja i ručki**. Svaka vrsta hvatanja ima svoj ton i zvuk, pa možete razlikovati krajnju točku od polovišta, središta, sjecišta i ostalih, a ručka ima dvostruki otkucaj. Zvuk se pomiče lijevo ili desno i prati kursor preko zaslona. Zvukovi se stvaraju na vašem računalu; ništa se ne preuzima.

## Naredbe glasom

U Postavkama uključite **Naredbe glasom**. Izgovorite naziv naredbe („line“, „circle“, „move“), zatim brojeve izgovarajte kako biste ih čitali: „točka tri stotine zarez četiri stotine“, „udaljenost dvanaest stotina“, „kut četrdeset pet“. „Enter“, „cancel“, „undo“ i „redo“ rade što kažu. Ono što je čuto izgovara se natrag, a izraz koji nije naredba prijavljuje se, ne pogađa se.

**Gdje se govor prepoznaje.** CadCraft nema vlastitu uslugu govora i ne šalje zvuk nigdje. Traži od vašeg preglednika da prepozna govor na ovom računalu. Ako to može, izbor je **Na ovom računalu** i zvuk ne napušta računalo. Ako ne može, glas ostaje isključen osim ako ne odaberete **Internetska usluga preglednika**, što dopušta pregledniku da zvuk šalje servisu govora njegova proizvođača. Postavke kažu što se primjenjuje prije nego odlučite.

## Što još ne radi

- Samo CadCraft ima Pristup. Ostalih sedam aplikacija slijedi, s istim tipkama i zvukovima.
- Tekst u crtežu (bilješka, naziv bloka) čita se onako kako je napisan; nikad se ne shvaća kao naredba.
- Isprobano je sintetičkim provjerama i testovima preglednika; provjere rukom s NVDA, VoiceOver i slijepim ili slabovidnim ispitivačem tek slijede. Ako ga isprobate, recite nam što nedostaje.
