---
title: Istorija: verzije i šta se promenilo
summary: Pogledajte verzije crteža (kopije koje Studio čuva kada sačuvate, i one u oblaku), otvorite ili vratite jednu, i uporedite dve sa prikazanim promenama u boji.
keywords: istorija, verzije, istorija verzija, vraćanje, prethodna verzija, opozovi čuvanje, uporedi, uporedi crteže, dwgcompare, promene, dodato, uklonjeno, izmenjeno, snimak, rezervna kopija, verzije u oblaku
from: 141d37b3
---

## Šta ćete napraviti

Pogled na raniju verziju crteža i spisak onoga što se razlikuje od sada: šta je dodato, šta je uklonjeno i šta je izmenjeno, označeno bojom na crtežu.

## Otvaranje istorije

Ukucajte `HISTORY` (ili `HIST`) i pritisnite {{key:Enter}}, ili izaberite {{ui:Istorija…}} u meniju {{ui:Više}} u grupi {{ui:Pogled}}. Panel se otvara pored crteža i ostaje otvoren dok radite, pa možete pomerati pogled i zumirati crtež sa bojama na njemu.

Istorija radi u CadCraft Studio. U pregledaču panel samo to kaže.

## Odakle dolaze verzije

- **Na ovom računaru.** Svaki put kada u Studiju otvorite crtež iz datoteke, i svaki put kada ga sačuvate, Studio čuva kopiju datoteke u svom skladištu na ovom računaru. Prva kopija je {{ui:Kako je otvoreno}}: datoteka onakva kakva je bila pre vašeg prvog čuvanja preko nje. Studio čuva najnovijih 25 kopija svakog crteža, a najstarije se brišu prve kada sve kopije zajedno pređu 400 MB. Čuvanje koje ništa ne menja ne čuva ništa. Ništa se ne otprema.
- **U oblaku.** Kada u Studiju otvorite crtež iz svojih datoteka u oblaku, panel takođe navodi {{ui:U oblaku}}: svaku verziju koju oblak čuva, sa njenim brojem, onim ko ju je sačuvao i napomenom. Panel samo čita te verzije. CadCraft još ne šalje svoja čuvanja u oblak, pa su to verzije sačuvane sa drugih uređaja i sa weba. Ponovo se prijavite u Studiju ako javi da je prijava istekla.

Crtež koji još niste sačuvali nema kopija: prvo ga sačuvajte.

## Otvaranje ili vraćanje verzije

- {{ui:Otvori}} stavlja tu verziju u sopstvenu karticu. Vaš crtež se ne dira.
- {{ui:Vrati}} zamenjuje ovaj crtež tom verzijom. Prvo pita. Studio pre toga čuva kopiju crteža kakav je sada u Istoriji (označenu sa {{ui:Pre vraćanja}}), i ništa se ne upisuje u datoteku dok ne sačuvate. Vraćanje ne može da se opozove sa {{key:Mod+Z}}; koristite tu kopiju.

## Poređenje

1. Kliknite {{ui:Uporedi}} na verziji. Upoređuje se sa {{ui:Crtež onakav kakav je sada}}; ako je hoćete uporediti sa drugom verzijom, prvo izaberite tu verziju u {{ui:Uporedi sa}}.
2. Pročitajte rezultat ispod spiska: koliko je objekata dodato, uklonjeno i izmenjeno, i spisak njih. Kliknite stavku u spisku da pomerite prikaz na nju.
3. Na crtežu:
   - **zeleni** objekti su dodati,
   - **crveni** objekti su uklonjeni (postoje samo u starijoj verziji),
   - **narandžasti** objekti su izmenjeni: novi oblik je punom linijom, a stari isprekidanom.
4. {{ui:Prikaži na crtežu}} uključuje i isključuje boje; {{ui:Ukloni boje}} uklanja rezultat. Zatvaranje panela takođe ih uklanja.

Spisak kaže šta se promenilo u izmenjenom objektu: njegov tekst, to da se pomerio, njegov oblik, njegov sloj, boja, tip linije ili debljina linije. Svaki list se upoređuje zasebno; boje se prikazuju na listu koji je otvoren.

:::note
Crtež nema trajan broj za svaki objekat, pa CadCraft objekte upoređuje po tome šta su: isti objekat s obe strane je nepromenjen; objekat istog tipa i sloja koji leži unutar sopstvene veličine od nekog starog objekta je isti objekat, izmenjen; sve što preostane je dodato ili uklonjeno. Objekat pomeren daleko od mesta na kome je bio prikazuje se kao uklonjen na jednom mestu i dodat na drugom. Referenca bloka računa sadržaj svog bloka.
:::

## Česte greške

- **„Još nema kopija.“** Studio čuva kopiju pri svakom otvaranju i čuvanju crteža koji ima datoteku na ovom računaru. Crtež otvoren iz kartice pregledača, ili nikad sačuvan, nema nijednu.
- **Spisak iz oblaka nedostaje.** Pojavljuje se za crtež otvoren iz oblaka u Studiju; datoteka otvorena sa diska nije crtež iz oblaka.
- **Sve izgleda izmenjeno.** Dve verzije sačuvane različitim programima pišu isti crtež na različite načine (nazivi anonimnih blokova, zaokruživanje). Upoređujte verzije koje je sačuvao CadCraft.
