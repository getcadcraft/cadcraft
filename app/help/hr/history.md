---
title: Povijest: verzije i što se promijenilo
summary: Pogledajte verzije crteža (kopije koje Studio sprema pri spremanju i one u oblaku), otvorite ili vratite jednu, i usporedite dvije s promjenama prikazanima u boji.
keywords: history, povijest, verzije, povijest verzija, vraćanje, prethodna verzija, poništi spremanje, usporedba, usporedi crteže, dwgcompare, promjene, dodano, uklonjeno, promijenjeno, snimka, sigurnosna kopija, verzije u oblaku
from: 141d37b3
---

## Što ćete napraviti

Pogled na raniju verziju crteža i popis onoga što se razlikuje od sadašnjeg: što je dodano, što uklonjeno i što promijenjeno, označeno bojom na crtežu.

## Otvaranje povijesti

Upišite `HISTORY` (ili `HIST`) i pritisnite {{key:Enter}}, ili odaberite {{ui:Povijest…}} u izborniku {{ui:Više}} grupe {{ui:Pogled}}. Ploča se otvara uz crtež i ostaje otvorena dok radite, pa možete pomicati i zumirati crtež s bojama na njemu.

Povijest radi u CadCraft Studiu. U pregledniku ploča samo to javlja.

## Odakle dolaze verzije

- **Na ovom računalu.** Svaki put kad otvorite crtež iz datoteke u Studiu i svaki put kad ga spremite, Studio čuva kopiju datoteke u svojoj pohrani na ovom računalu. Prva kopija je {{ui:Kako je otvoreno}}: datoteka kakva je bila prije vašeg prvog spremanja preko nje. Studio čuva najnovijih 25 kopija svakog crteža, a najstarije se brišu prve kad sve kopije zajedno prijeđu 400 MB. Spremanje koje ništa ne mijenja ne čuva ništa. Ništa se ne učitava.
- **U oblaku.** Kad u Studiu otvorite crtež iz svojih datoteka u oblaku, ploča također navodi {{ui:U oblaku}}: svaku verziju koju oblak ima, s brojem, tko ju je spremio i napomenom. Ploča ih samo čita. CadCraft još ne šalje vaša spremanja u oblak, pa su to verzije spremljene s drugih uređaja i s weba. Ako Studio javi da je prijava istekla, ponovno se prijavite u Studiu.

Nespremljeni crtež nema kopija: prvo ga spremite.

## Otvaranje ili vraćanje verzije

- {{ui:Otvori}} stavlja tu verziju u vlastitu karticu. Vaš crtež se ne dira.
- {{ui:Vrati}} zamjenjuje ovaj crtež tom verzijom. Prvo pita. Studio prije toga sprema kopiju crteža kakav je sada u Povijest (označenu s {{ui:Prije vraćanja}}), a ništa se ne zapisuje u datoteku dok ne spremite. Vraćanje se ne može poništiti s {{key:Mod+Z}}; upotrijebite tu kopiju.

## Usporedba

1. Kliknite {{ui:Usporedi}} na verziji. Uspoređuje se s {{ui:Crtež kakav je sada}}; da je usporedite s nekom drugom verzijom, prvo je odaberite u {{ui:Usporedi s}}.
2. Pročitajte rezultat ispod popisa: koliko je objekata dodano, uklonjeno i promijenjeno te popis tih objekata. Kliknite stavku na popisu da pogled pomaknete na nju.
3. Na crtežu:
   - **zeleni** objekti su dodani,
   - **crveni** objekti su uklonjeni (postoje samo u starijoj verziji),
   - **narančasti** objekti su promijenjeni: novi oblik je pun, a stari je isprekidan.
4. {{ui:Prikaži na crtežu}} uključuje i isključuje boje; {{ui:Ukloni boje}} uklanja rezultat. Zatvaranje ploče također briše boje.

Popis kaže što je promijenjeno u promijenjenom objektu: njegov tekst, je li pomaknut, njegov oblik, sloj, boja, vrsta linije ili debljina linije. Svaki list se uspoređuje zasebno; boje se prikazuju na listu koji je otvoren.

:::note
Crtež nema trajan broj za svaki objekt, pa CadCraft objekte povezuje prema tome što jesu: isti objekt na obje strane nepromijenjen je; objekt iste vrste i sloja koji leži unutar vlastite veličine nekog starog objekta isti je objekt, promijenjen; što ostane, dodano je ili uklonjeno. Objekt pomaknut daleko od mjesta na kojem je bio prikazuje se kao uklonjen na jednom mjestu i dodan na drugom. Referenca bloka broji sadržaj svog bloka.
:::

## Česte pogreške

- **"Još nema kopija."** Studio čuva kopiju pri svakom otvaranju i spremanju crteža koji ima datoteku na ovom računalu. Crtež otvoren iz kartice preglednika ili nikad spremljen nema kopija.
- **Popis iz oblaka nedostaje.** Pojavljuje se za crtež otvoren iz oblaka u Studiu; datoteka otvorena s diska nije crtež iz oblaka.
- **Sve izgleda promijenjeno.** Dvije verzije spremljene različitim programima zapisuju isti crtež na različite načine (imena anonimnih blokova, zaokruživanje). Uspoređujte verzije koje je spremio CadCraft.
