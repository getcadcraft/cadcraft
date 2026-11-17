---
title: Dokumenti: izposoja, revizije in izdaja
summary: Nadzorujte risbe v projektni mapi: datoteko izposodite, da je nihče drug ne spremeni, jo vrnite kot novo revizijo, pošljite v pregled in izdajte z imenom odobritelja; zgodovina, kaj uporablja kaj, kosovnica in glave risb, ki prikazujejo revizijo.
keywords: nastavitve projekta, odobritelji, skrbniki, črke revizij, ASME, samo za branje, primerjava revizij, odpri kopijo, partcraft, bimcraft, documents, DOCUMENTS, DOCS, trezor, upravljanje dokumentov, pdm, izposodi, vrni, checkout, checkin, zaklep, revizija, rev, črka revizije, izdaja, izdano, odobri, odobritev, pregled, zastarelo, kje se uporablja, bom, kosovnica, glava risbe, blok revizij, projektna mapa
from: ee938722
---

## Kaj boste naredili

Projektno mapo, v kateri ima vsaka risba revizijo (A.1, A.2 … nato A, B …) in stanje (V delu, Za pregled, Izdano, Zastarelo), v kateri lahko datoteko naenkrat spremeni samo ena oseba, in v kateri je vsaka izposoja, vrnitev, odobritev in prekinjena izposoja zapisana s tem, kdo jo je opravil in kdaj.

Vse je shranjeno v sami mapi, v skriti mapi `.ccvault` poleg vaših risb. Mapa na skupni particiji ali sinhronizirana mapa deluje za celotno ekipo. Strežnika ni in ničesar se ne naloži.

## Odprite Dokumente

Vnesite `DOCUMENTS` (ali `DOCS`) in pritisnite {{key:Enter}}. Podokno se odpre ob risbi.

Izberite {{ui:Izberite projektno mapo}} in izberite mapo, ki vsebuje risbe projekta. Projektne mape delujejo v CadCraft Studio in v brskalnikih, ki lahko odprejo mapo (Chrome, Edge). V drugih brskalnikih podokno to pove.

Prvič vnesite svoje ime (gre na vse, kar naredite) in ime tega računalnika. Če ste prijavljeni, je vaše ime že vpisano.

## Začnite trezor

Mapa, ki še ni trezor, ponudi {{ui:Ustvari trezor v tej mapi}}. Vnesite ime projekta. Nato odprite {{ui:Datoteke, ki niso v trezorju}} in izberite {{ui:Dodaj (A)}} ob vsaki datoteki, ki jo želite dati pod nadzor. Dodana datoteka se začne z revizijo **A.1**, V delu.

## Spremenite risbo

1. Izberite {{ui:Odpri}} ob risbi. Odpre se v CadCraft. Če ni izposojena vam, si jo le oglejte in je ne spreminjajte: {{ui:Shrani}} noče prepisati datoteke in pove zakaj (uporabite {{ui:Shrani kot}}, da shranite lastno kopijo).
2. Izberite {{ui:Izposodi}}. Nihče drug je zdaj ne more izposoditi; podokno pokaže, kdo jo ima, na katerem računalniku in od kdaj.
3. Risite.
4. Izberite {{ui:Vrni}} in povejte, kaj se je spremenilo. Odprta risba se shrani v projektno mapo v svojem formatu in postane naslednja revizija (A.1, nato A.2). Vrnitev brez sprememb ohrani revizijo.

{{ui:Prekliči izposojo}} vrne datoteko brez nove revizije.

## Pregled in izdaja

- {{ui:Pošlji v pregled}}: datoteka je med pregledom samo za branje.
- {{ui:Odobri}}: vnesite ime odobritelja. A.3 postane **A**, Izdano. Izdane datoteke so samo za branje.
- {{ui:Vrni v popravek}}: nazaj v V delu, z razlogom.
- {{ui:Nova revizija}} pri izdani datoteki jo izposodi za naslednjo črko: prva vrnitev je **B.1**. {{ui:Prekliči izposojo}} pred tem jo pusti pri A.
- {{ui:Označi kot zastarelo}} umakne izdano datoteko.

Projekt lahko hrani seznam tistih, ki smejo odobriti, in lahko zahteva, da odobritelj ni oseba, ki je datoteko vrnila (glejte Nastavitve projekta spodaj).

## Nastavitve projekta

Odprite {{ui:Nastavitve projekta}} v podoknu:

- **Odobritelji**: eno ime v vrstici. Če jih je kaj, lahko samo oni odobrijo izdajo.
- **Odobritelj mora biti nekdo drug kot avtor**: pravilo „štirih oči“.
- **Skrbniki**: eno ime v vrstici. Če jih je kaj, lahko samo oni prekinejo tujo izposojo ali spremenijo te nastavitve.
- **Črke revizij, ki jih izpustite**: {{ui:Uporabi zaporedje ASME Y14.35}} izpusti I, O, Q, S, X in Z, ali vpišite svoje črke. Že dodeljene črke ostanejo; izbira velja za naslednje revizije.
- **Izposoja velja za zastarelo po**: število dni (privzeto 14).

Izberite {{ui:Shrani nastavitve}}. Sprememba se zapiše v dnevnik z imenom osebe, ki jo je naredila.

## Datoteko je nekdo pustil izposojeno

{{ui:Prekini izposojo}} sprosti datoteko, ki jo je nekdo drug izposodil (je odsoten ali mu je računalnik odpovedal). Vpisati morate razlog: zapiše se v dnevnik skupaj s tem, čigava izposoja je bila. Če ima projekt skrbnike, lahko to naredijo samo oni. Izposoja, starejša od 14 dni, je označena kot dolgotrajna.

## Zgodovina, revizije, uporaba, uporablja jo

Izberite ime datoteke, da vidite:

- {{ui:Zgodovina}}: vsak dogodek, najnovejši prvi, s tem, kdo, kateri računalnik in kdaj.
- {{ui:Revizije}}: vsaka ohranjena revizija. Kopija vsake revizije je v trezorju (ista vsebina je shranjena enkrat). {{ui:Odpri kopijo}} odpre to revizijo kot navadno kopijo, ki ne more prepisati datoteke v trezorju. {{ui:Primerjaj z}} našteje, kaj je bilo dodano, odstranjeno in spremenjeno med to revizijo in prejšnjo (ali drugo, ki jo izberete), ter to obarva na risbi.
- {{ui:Uporablja}}: risbe, na katere se povezuje (xrefs), dokumenti, na katere kaže model IFC, deli sestava PartCraft.
- {{ui:Uporablja jo}}: vsaka datoteka v trezorju, ki uporablja to.

{{ui:Kosovnica (CSV)}} shrani seznam vsega, kar datoteka uporablja, po ravneh, s količinami, revizijami in stanji, za preglednico.

## Blok revizij na listu

Ko imate odprto risbo z postavitvijo, izberite {{ui:Blok revizij}}. Tabela izdanih revizij (revizija, datum, kdo, odobreno, opis) se nariše v zgornjem desnem kotu lista, ki ga gledate. Ko odobrite izdajo, se tabela posodobi.

## Revizija v glavi risbe

Dajte atributom svoje glave risbe eno od teh oznak in izberite {{ui:Izpolni glave risb}} na odprti risbi:

| Oznaka | Izpolni se z |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revizijo (B ali B.2, med delom) |
| `VAULT.STATE` | stanjem (Izdano …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datumom zadnje revizije |
| `VAULT.APPROVER`, `APPROVED_BY` | kdo je odobril zadnjo izdajo |

## PartCraft in BimCraft

PartCraft in BimCraft imata enako podokno Dokumenti za svoje datoteke: deli in sestavi v PartCraft, modeli IFC v BimCraft. Vrnitev shrani odprti model v projektno mapo, sestav pa prikaže, kateri deli ga uporabljajo, in kosovnico.

## Dobro je vedeti

- Dva človeka na isti skupni mapi ne moreta oba izposoditi iste datoteke: izposoja je datoteka, ki je sistem ne dovoli narediti dvakrat. V brskalniku in v Studio, katerega lupina je starejša od te funkcije, je to tako strogo, kot dovoli mapa: dve izposoji v istem delčku sekunde bi lahko obe uspeli. Podokno pove, katera velja.
- Mape `.ccvault` ne urejajte ali brišite ročno. Dnevnik v njej je zapis; trezor svoj seznam po potrebi obnovi iz njega.
- Spreminjanje datoteke v mapi brez izposoje je prikazano kot {{ui:Spremenjeno v mapi brez izposoje}}.
