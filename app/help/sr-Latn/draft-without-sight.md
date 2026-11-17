---
title: Crtanje bez vida
summary: Uključite Pristup i CadCraft izgovara svaku naredbu i rezultat preko čitača ekrana, opisuje crtež i ono što je blizu kursora, omogućava pomeranje kursora tastaturom, pušta zvuk za svako hvatanje i ručicu i prima naredbe glasom tamo gde ih vaš pregledač može prepoznati na vašem računaru.
keywords: pristupačnost, čitač ekrana, slepilo, slab vid, NVDA, VoiceOver, JAWS, Orca, kursor sa tastature, glasovne naredbe, govor, zvuci, zvuci hvatanja, opiši crtež, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Pristup** vam omogućava da crtate bez gledanja u ekran. Isključen je dok ga ne uključite, pa ga niko ne dobije slučajno.

## Uključivanje

Otvorite **Podešavanja** (zupčanik ili Ctrl+,), nađite **Crtanje bez vida** i izaberite **Uključeno**. Ili otkucajte `ACCESS` u komandnoj liniji i odgovorite `On`. Pamti se na ovom računaru.

Sa uključenim Pristupom:

- **Sve što komandna linija kaže se izgovara** preko čitača ekrana: šta ste otkucali, pitanje koje postavlja, odgovor i svaka greška. CadCraft koristi sopstvene „uljudne" i „hitne" žive oblasti, pa čitaču ekrana koji čita žive oblasti ne treba nikakvo podešavanje. Greške i otkazivanja prekidaju; sve ostalo čeka svoj red.
- **Do područja crteža može se doći.** Pritisnite Tab dok ne čujete „Crtež", ili pritisnite Shift+Tab iz komandne linije. To je oblast koja prosleđuje tastere programu CadCraft.

## Tasteri na crtežu

| Taster | Šta radi |
|---|---|
| Strelice | Pomeraju kursor sa tastature. Korak je oko stotinke onoga što ekran prikazuje, zaokružen na 1, 2 ili 5. Shift ide deset puta dalje, Ctrl deset puta manje. |
| Enter | Bira tačku pod kursorom, tačno kao klik. |
| Space | Pritisak na Enter u komandnoj liniji: završava LINE, uzima podrazumevano. |
| Tab, Shift+Tab | Skače na sledeću ili prethodnu tačku hvatanja blizu kursora, najbližu prvo. |
| G | Prolazi kroz ručice izabranih objekata. |
| D | Opisuje crtež: koliko ima objekata, koje su vrste, koliko su veliki, šta je izabrano. |
| W | Kaže gde je kursor i koliko je udaljen od poslednje tačke. |
| N | Kaže šta je blizu kursora, najbliže prvo, sa rastojanjem i stranom. |
| S | Opisuje izabrane objekte. |
| R | Ponovo kaže poslednju stvar. |
| V | Glas uključen ili isključen. |
| / | Ide na komandnu liniju. |
| ? | Navodi ove tastere. |

Pomeranje tasterima kaže gde ste stigli. Kad naredba čeka tačku, kaže i koliko ste daleko i u kom pravcu od poslednje tačke, na primer „2400 od poslednje tačke, udesno, pod 0 stepeni".

## Naredbe

- {{cmd:ACCESS}} uključuje ili isključuje Pristup, zvuke hvatanja i glas i kaže stanje.
- {{cmd:DESCRIBE}} kaže šta crtež sadrži.
- {{cmd:WHEREAMI}} kaže gde je kursor.
- {{cmd:NEARBY}} kaže šta leži blizu kursora.
- {{cmd:SAYSEL}} kaže šta je izabrano, jedna rečenica po objektu.
- {{cmd:VOICE}} uključuje ili isključuje izgovorene naredbe.

Ovih pet čita crtež i ispisuje odgovor; ništa ne menjaju.

## Zvuci za hvatanja i ručice

Uključite **Zvuci hvatanja i ručica** u Podešavanjima. Svaka vrsta hvatanja ima svoju visinu i zvuk, pa možete da razlikujete krajnju tačku od sredine, središta, preseka i ostalih, a ručica ima dvostruki otkucaj. Zvuk se pomera levo ili desno da prati kursor preko ekrana. Zvuci se prave na vašem računaru; ništa se ne preuzima.

## Naredbe glasom

Uključite **Naredbe glasom** u Podešavanjima. Izgovorite ime naredbe („linija", „krug", „pomeri"), pa brojeve izgovorite onako kako ih čitate: „tačka tri stotine zarez četiri stotine", „rastojanje dvanaest stotina", „ugao četrdeset pet". „Enter", „otkaži", „opozovi" i „ponovi" rade ono što kažu. Čuje se šta je prepoznato i to se izgovara nazad, a izraz koji nije naredba se prijavljuje, ne pogađa.

**Gde se govor prepoznaje.** CadCraft nema sopstveni servis za govor i ne šalje zvuk nigde. Traži od vašeg pregledača da prepozna govor na ovom računaru. Ako to može, izbor je **Na ovom računaru** i zvuk ne napušta računar. Ako ne može, glas ostaje isključen osim ako ne izaberete **Onlajn servis pregledača**, što dozvoljava pregledaču da šalje zvuk servisu za govor svog proizvođača. Podešavanja kažu koje se primenjuje pre nego što odlučite.

## Šta još ne radi

- Samo CadCraft ima Pristup. Ostalih sedam aplikacija slede, sa istim tasterima i zvucima.
- Tekst u crtežu (napomena, ime bloka) čita se onako kako je napisan; nikad se ne uzima kao uputstvo.
- Isprobano je sa sintetičkim proverama i testovima pregledača; ručne provere sa NVDA, VoiceOver-om i testerom koji je slep ili slabovid još su pred nama. Ako probate, javite nam šta nedostaje.
