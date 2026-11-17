---
title: Kopiranje, lijepljenje i dupliciranje
summary: Kopirajte objekte u međuspremnik CadCraft-a, zalijepite ih gdje kliknete ili na njihova mjesta, dupliciraju ih pokazivačem i prenesite rad iz drugog crteža ili kartice.
keywords: kopiraj, izreži, zalijepi, zalijepi na isto mjesto, dupliciraj, međuspremnik, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, između crteža, druga kartica, bazna točka
from: 4b9f29d3
---

## Što ćete naučiti

Kako kopirati objekte u međuspremnik, lijepiti ih gdje kliknete, lijepiti ih na njihove vlastite koordinate, duplicirati ih pokazivačem, izrezati ih i prenijeti u drugi crtež. Sve je ovo i u grupi {{ui:Uređivanje}} na alatnoj traci: {{ui:Kopiraj}}, {{ui:Zalijepi}} i izbornik {{ui:Više}}.

## Kopiranje i lijepljenje gdje kliknete

1. Odaberite objekte: kliknite ih ili povucite prozor.
2. Pritisnite {{key:Mod+C}} ili kliknite {{ui:Kopiraj}} u grupi {{ui:Uređivanje}}. Naredbeni redak kaže koliko je objekata kopirano. Ostaju odabrani.
3. Pritisnite {{key:Mod+V}} ili kliknite {{ui:Zalijepi}}. Kopija se pojavljuje uz kursor, visi od donjeg lijevog kuta kopiranih objekata.
4. Kliknite gdje taj kut ide ili upišite točku, na primjer `2000,500`, i pritisnite {{key:Enter}}. Hvatanje objekata i Orto rade kao inače.

Zalijepljeni objekti su odabrani, pa ih možete odmah premjestiti ili mijenjati. Jedan {{key:Mod+Z}} uklanja cijelo lijepljenje.

:::tip
Želite da kopija visi od točke koju sami odaberete, na primjer od kuta zida? Upišite `COPYBASE`, kliknite baznu točku, odaberite objekte i pritisnite {{key:Enter}}. Lijepljenje tada stavlja tu točku tamo gdje kliknete. Da svaka kopija visi od svog središta umjesto od donjeg lijevog kuta, promijenite {{ui:Točka lijepljenja}} u [postavkama CadCraft-a](topic:settings).
:::

## Lijepljenje na isto mjesto

Pritisnite {{key:Mod+Shift+V}} ili odaberite {{ui:Zalijepi na isto mjesto}} u izborniku {{ui:Više}}. Kopija se stavlja točno na koordinate s kojih je kopirana, bez klika. Upotrijebite to da prenesete objekte u drugi crtež na isto mjesto ili s lista u drugi list.

## Dupliciranje i pomicanje

1. Odaberite objekte.
2. Pritisnite {{key:Mod+D}} ili odaberite {{ui:Dupliciraj i pomakni}} u izborniku {{ui:Više}}.
3. Kopija leži preko izvornika i miče se s pokazivačem. Kliknite gdje ide. Možete i upisati pomak, na primjer `@0,-600`, ili udaljenost prema kursoru.

{{key:Esc}} prije klika ne ostavlja ništa iza sebe. Duplikat je jedan korak poništavanja i ne dira međuspremnik.

## Izrezivanje

Pritisnite {{key:Mod+X}} ili odaberite {{ui:Izreži}} u izborniku {{ui:Više}}. Objekti idu u međuspremnik i brišu se iz crteža, u jednom koraku poništavanja. Vratite ih lijepljenjem s {{key:Mod+V}} ili {{key:Mod+Shift+V}}.

## Između crteža i kartica

Međuspremnik zadržava svoju kopiju kad otvorite drugi crtež, a dijele ga sve kartice CadCraft-a u ovom pregledniku. Kopirajte u jednoj kartici, zatim pritisnite {{key:Mod+V}} u drugoj.

- Blokovi koje objekti koriste dolaze s njima. Ako crtež u koji lijepite već ima blok istog naziva, koristi se njegova vlastita definicija, kao u AutoCAD-u.
- Slojevi koje objekti koriste dodaju se, s bojom i postavkama koje su imali.
- Kopija se ne skalira kad dva crteža koriste različite jedinice: CadCraft to kaže, a poslije možete upotrijebiti {{cmd:SCALE}}.
- Viewporti ostaju na svom listu; izostavljaju se iz kopije.

:::note
Međuspremnik je vlastiti za CadCraft. CadCraft objekte ne možete lijepiti u drugi program niti lijepiti iz drugog programa u CadCraft: spremite kao DWG ili DXF. Vrlo velika kopija može biti prevelika za dijeljenje između kartica; naredbeni redak tada kaže samo da je može zalijepiti ova kartica.
:::

## Česte greške

- **{{key:Mod+V}} zalijepio je tekst u naredbeni redak.** Nešto ste upisali tamo, pa su tipke djelovale na tekst. Pritisnite {{key:Esc}} da obrišete, zatim opet {{key:Mod+V}}.
- **Ništa se nije dogodilo, a statusna traka kaže da dovršite trenutnu naredbu.** Druga naredba je u tijeku. Najprije pritisnite {{key:Esc}}.
- **Lijepljenje je završilo daleko.** Visi od donjeg lijevog kuta onoga što ste kopirali, što može biti udaljen objekt koji ste slučajno odabrali. Upotrijebite {{ui:Zalijepi na isto mjesto}} ili kopirajte s `COPYBASE`.
- **„Ništa nije zalijepljeno“ s razlogom.** Ono što je druga kartica ostavila u međuspremniku nije se moglo pročitati (oštećeno je ili promijenjeno ručno). Kopirajte objekte ponovo.

Potpuni popis tipki vidi u [Tipkovnica i miš](topic:keyboard), a svaki upit u [Referenci naredbi](topic:commands#clipboard).
