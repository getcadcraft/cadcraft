---
title: Crtanje bez vida
summary: Uključite Pristup i CadCraft kroz čitač ekrana izgovara svaku naredbu i rezultat, opisuje crtež i ono što je blizu kursora, dozvoljava pomjeranje kursora tastaturom, pušta zvuk za svako hvatanje i uhvat, i prima naredbe glasom tamo gdje vaš preglednik to može na vašem računaru.
keywords: pristupačnost, čitač ekrana, slijep, slabovidan, NVDA, VoiceOver, JAWS, Orca, tastaturni kursor, glasovne naredbe, govor, zvukovi, zvuci hvatanja, opiši crtež, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Pristup** vam omogućava da crtate bez gledanja na ekran. Isključen je dok ga ne uključite, pa ga niko ne dobija slučajno.

## Uključite ga

Otvorite **Postavke** (zupčanik, ili Ctrl+,), pronađite **Crtanje bez vida** i odaberite **Uključeno**. Ili upišite `ACCESS` u komandnoj liniji i odgovorite `Uključeno`. Pamti se na ovom računaru.

Kada je Pristup uključen:

- **Sve što komandna linija kaže se izgovara** kroz vaš čitač ekrana: ono što ste upisali, upit koji postavlja, odgovor i svaku grešku. CadCraft koristi svoje vlastite učtive i hitne žive oblasti, pa čitač ekrana koji čita žive oblasti ne treba nikakvo podešavanje. Greške i otkazivanja prekidaju; sve ostalo čeka svoj red.
- **Područje crtanja je dostupno.** Pritisnite Tab dok ne čujete "Crtež", ili pritisnite Shift+Tab iz komandne linije. To je oblast koja prosljeđuje tastere CadCraftu.

## Tasteri na crtežu

| Taster | Šta radi |
|---|---|
| Strelice | Pomjeraju tastaturni kursor. Korak je oko stotinke onoga što ekran prikazuje, zaokružen na 1, 2 ili 5. Shift pomjera deset puta dalje, Ctrl desetinu. |
| Enter | Odabire tačku pod kursorom, tačno kao klik mišem. |
| Space | Pritisak na Enter u komandnoj liniji: završava LINE, uzima podrazumijevano. |
| Tab, Shift+Tab | Skače na sljedeću ili prethodnu tačku hvatanja u blizini kursora, najbližu prvo. |
| G | Prolazi kroz hvatišta odabranih objekata. |
| D | Opisuje crtež: koliko objekata, koje vrste, kako veliki, šta je odabrano. |
| W | Kaže gdje je kursor i koliko je daleko od posljednje tačke. |
| N | Kaže šta je blizu kursora, najbliže prvo, uz udaljenost i stranu. |
| S | Opisuje odabrane objekte. |
| R | Ponovo kaže posljednju stvar. |
| V | Glas uključen ili isključen. |
| / | Ide na komandnu liniju. |
| ? | Navodi ove tastere. |

Pomjeranje tasterima kaže gdje ste stali. Kada naredba čeka tačku, kaže i koliko ste daleko od posljednje tačke i u kom smjeru, na primjer "2400 od posljednje tačke, desno, pod 0 stepeni".

## Naredbe

- {{cmd:ACCESS}} uključuje ili isključuje Pristup, zvukove hvatanja i glas i kaže stanje.
- {{cmd:DESCRIBE}} kaže šta crtež sadrži.
- {{cmd:WHEREAMI}} kaže gdje je kursor.
- {{cmd:NEARBY}} kaže šta leži blizu kursora.
- {{cmd:SAYSEL}} kaže šta je odabrano, jednu rečenicu po objektu.
- {{cmd:VOICE}} uključuje ili isključuje izgovorene naredbe.

Ovih pet čita crtež i ispisuje odgovor; ništa ne mijenjaju.

## Zvukovi za hvatanja i uhvate

Uključite **Zvuci hvatanja i uhvata** u Postavkama. Svaka vrsta hvatanja ima svoju visinu i zvuk, pa možete razlikovati krajnju tačku od središnje, središta, presjeka i ostalih, a uhvat ima dvostruki otkucaj. Zvuk se pomjera lijevo ili desno da prati kursor preko ekrana. Zvuci se prave na vašem računaru; ništa se ne preuzima.

## Naredbe glasom

Uključite **Naredbe glasom** u Postavkama. Recite naziv naredbe ("linija", "krug", "pomjeri"), pa izgovorite brojeve onako kako biste ih čitali: "tačka tri stotine zarez četiri stotine", "udaljenost dvanaest stotina", "ugao četrdeset pet". "Enter", "otkaži", "poništi" i "ponovi" rade ono što kažu. Ono što je čuo CadCraft se izgovara nazad, a izraz koji nije naredba se prijavljuje, ne pogađa se.

**Gdje se govor prepoznaje.** CadCraft nema sopstveni servis za govor i ne šalje zvuk nigdje. Traži od vašeg preglednika da prepozna govor na ovom računaru. Ako to može, izbor je **Na ovom računaru** i zvuk ga ne napušta. Ako ne može, glas ostaje isključen osim ako ne izaberete **Online servis preglednika**, što dozvoljava pregledniku da šalje zvuk servisu za govor njegovog proizvođača. Postavke kažu koja se primjenjuje prije nego odlučite.

## Šta još ne radi

- Samo CadCraft ima Pristup. Ostalih sedam aplikacija slijedi, s istim tasterima i zvucima.
- Tekst u crtežu (napomena, naziv bloka) čita se kako je napisan; nikada se ne uzima kao naredba.
- Isprobano je sa sintetičkim provjerama i testovima preglednika; ručne provjere s NVDA, VoiceOver i slijepim ili slabovidnim testerom su još pred nama. Ako ga isprobate, recite nam šta nedostaje.
