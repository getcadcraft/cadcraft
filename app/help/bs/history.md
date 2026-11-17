---
title: Historija: verzije i šta je promijenjeno
summary: Pogledajte verzije crteža (kopije koje Studio čuva kad spašavate, i one u oblaku), otvorite ili vratite jednu, te uporedite dvije sa prikazom promjena u boji.
keywords: historija, verzije, historija verzija, vrati, prethodna verzija, poništi spašavanje, uporedi, uporedi crteže, dwgcompare, promjene, dodano, uklonjeno, promijenjeno, snimak, sigurnosna kopija, verzije u oblaku
from: 141d37b3
---

## Šta ćete napraviti

Pogled na raniju verziju crteža i spisak onoga što se razlikuje od sada: šta je dodano, šta uklonjeno, a šta promijenjeno, označeno bojom na crtežu.

## Otvaranje Historije

Upišite `HISTORY` (ili `HIST`) i pritisnite {{key:Enter}}, ili odaberite {{ui:Historija…}} u meniju {{ui:Više}} u grupi {{ui:Pogled}}. Panel se otvara uz crtež i ostaje otvoren dok radite, pa možete pomjerati i uvećavati crtež sa bojama na njemu.

Historija radi u CadCraft Studiju. U pregledaču panel samo to kaže.

## Odakle dolaze verzije

- **Na ovom računaru.** Svaki put kad otvorite crtež iz datoteke u Studiju, i svaki put kad ga spasite, Studio čuva kopiju datoteke u svom skladištu na ovom računaru. Prva kopija je {{ui:Kako je otvoreno}}: datoteka kakva je bila prije vašeg prvog spašavanja preko nje. Studio čuva najnovijih 25 kopija svakog crteža, a najstarije odlaze prve kad sve kopije zajedno pređu 400 MB. Spašavanje koje ništa ne mijenja ne čuva ništa. Ništa se ne šalje.
- **U oblaku.** Kad otvorite crtež iz svojih datoteka u oblaku u Studiju, panel takođe navodi {{ui:U oblaku}}: svaku verziju koju oblak ima, sa njenim brojem, ko ju je spasio i bilješkom. Panel samo čita te verzije. CadCraft još ne šalje svoja spašavanja u oblak, pa su ovo verzije spašene sa drugih uređaja i sa weba. Ponovo se prijavite u Studiju ako kaže da je prijava istekla.

Crtež koji još niste spasili nema kopija: prvo ga spasite.

## Otvaranje ili vraćanje verzije

- {{ui:Otvori}} stavlja tu verziju u njen vlastiti tab. Vaš crtež se ne dira.
- {{ui:Vrati}} zamjenjuje ovaj crtež tom verzijom. Prvo pita. Studio prije toga čuva kopiju crteža kakav je sada u Historiji (označenu {{ui:Prije vraćanja}}), a ništa se ne upisuje u datoteku dok ne spasite. Vraćanje se ne može poništiti sa {{key:Mod+Z}}; koristite tu kopiju.

## Poređenje

1. Kliknite {{ui:Uporedi}} na verziji. Poredi se sa {{ui:Crtež onakav kakav je sada}}; da je uporedite s nekom drugom verzijom, prvo odaberite nju u {{ui:Uporedi sa}}.
2. Pročitajte rezultat ispod spiska: koliko je objekata dodano, uklonjeno i promijenjeno, te spisak njih. Kliknite stavku na spisku da pomjerite prikaz na nju.
3. Na crtežu:
   - **zeleni** objekti su dodani,
   - **crveni** objekti su uklonjeni (postoje samo u starijoj verziji),
   - **narandžasti** objekti su promijenjeni: novi oblik je pun, a stari isprekidan.
4. {{ui:Prikaži na crtežu}} uključuje i isključuje boje; {{ui:Ukloni boje}} uklanja rezultat. Zatvaranje panela takođe briše boje.

Spisak kaže šta je promijenjeno u promijenjenom objektu: njegov tekst, da se pomjerio, njegov oblik, sloj, boja, tip linije ili debljina linije. Svaki list se poredi zasebno; boje se vide na listu koji je otvoren.

:::note
Crtež nema trajan broj za svaki objekat, pa CadCraft objekte uparuje po tome šta jesu: isti objekat na objema stranama je nepromijenjen; objekat istog tipa i sloja koji leži unutar svoje veličine od starog je isti objekat, promijenjen; sve što ostane je dodano ili uklonjeno. Objekat pomjeren daleko od mjesta gdje je bio prikazuje se kao uklonjen na jednom mjestu i dodan na drugom. Referenca bloka računa sadržaj svog bloka.
:::

## Česte greške

- **"Još nema kopija."** Studio čuva kopiju pri svakom otvaranju i spašavanju crteža koji ima datoteku na ovom računaru. Crtež otvoren iz taba pregledača ili nikad spašen nema kopija.
- **Spiska iz oblaka nema.** Pojavi se za crtež otvoren iz oblaka u Studiju; datoteka otvorena sa diska nije crtež iz oblaka.
- **Sve izgleda promijenjeno.** Dvije verzije spašene različitim programima pišu isti crtež na različite načine (nazivi anonimnih blokova, zaokruživanje). Upoređujte verzije koje je spasio CadCraft.
