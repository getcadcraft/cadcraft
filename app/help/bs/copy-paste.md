---
title: Kopiranje, lijepljenje i dupliciranje
summary: Kopirajte objekte u CadCraft-ov međuspremnik, zalijepite ih tamo gdje kliknete ili na mjestu, dupliciraj pokazivačem i prenesite rad iz drugog crteža ili kartice.
keywords: kopiraj, izreži, zalijepi, zalijepi na mjesto, dupliciraj, međuspremnik, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, između crteža, druga kartica, bazna tačka
from: 4b9f29d3
---

## Šta ćete naučiti

Kako kopirati objekte u međuspremnik, lijepiti ih tamo gdje kliknete, lijepiti ih na njihovim koordinatama, duplicirati ih pokazivačem, izrezati ih i prenijeti u drugi crtež. Sve je ovo i u grupi {{ui:Uređivanje}} na traci alata: {{ui:Kopiraj}}, {{ui:Zalijepi}} i meni {{ui:Više}}.

## Kopiranje i lijepljenje tamo gdje kliknete

1. Izaberite objekte: kliknite ih ili prevucite prozor.
2. Pritisnite {{key:Mod+C}}, ili kliknite {{ui:Kopiraj}} u grupi {{ui:Uređivanje}}. Komandna linija kaže koliko je objekata kopirano. Ostaju izabrani.
3. Pritisnite {{key:Mod+V}}, ili kliknite {{ui:Zalijepi}}. Kopija se pojavljuje na kursoru, visi od donjeg lijevog ugla kopiranih objekata.
4. Kliknite gdje taj ugao ide, ili upišite tačku kao `2000,500` i pritisnite {{key:Enter}}. Hvatanja objekata i Ortogonalno rade kao obično.

Zalijepljeni objekti su izabrani, pa ih možete odmah pomjerati ili mijenjati. Jedan {{key:Mod+Z}} uklanja cijelo lijepljenje.

:::tip
Želite da kopija visi od tačke koju birate, kao što je ugao zida? Upišite `COPYBASE`, kliknite baznu tačku, izaberite objekte i pritisnite {{key:Enter}}. Lijepljenje tada stavlja tu tačku tamo gdje kliknete. Da svaka kopija visi od svog centra umjesto od donjeg lijevog ugla, promijenite {{ui:Tačka lijepljenja}} u [CadCraft postavkama](topic:settings).
:::

## Zalijepi na mjesto

Pritisnite {{key:Mod+Shift+V}}, ili izaberite {{ui:Zalijepi na mjesto}} u meniju {{ui:Više}}. Kopija ide tačno na koordinate s kojih je kopirana, bez klika. Koristite je da prenesete objekte u drugi crtež na isto mjesto, ili s lista na drugi list.

## Dupliciranje i pomjeranje

1. Izaberite objekte.
2. Pritisnite {{key:Mod+D}}, ili izaberite {{ui:Dupliraj i pomjeri}} u meniju {{ui:Više}}.
3. Kopija leži preko originala i pomjera se s pokazivačem. Kliknite gdje ide. Možete i upisati pomak kao `@0,-600`, ili udaljenost prema kursoru.

{{key:Esc}} prije klika ne ostavlja ništa. Duplikat je jedan korak poništavanja i ne dira međuspremnik.

## Izrezivanje

Pritisnite {{key:Mod+X}}, ili izaberite {{ui:Izreži}} u meniju {{ui:Više}}. Objekti idu u međuspremnik i brišu se iz crteža, u jednom koraku poništavanja. Vratite ih sa {{key:Mod+V}} ili {{key:Mod+Shift+V}}.

## Između crteža i kartica

Međuspremnik zadržava kopiju kada otvorite drugi crtež, i dijele ga sve CadCraft kartice u ovom pregledaču. Kopirajte u jednoj kartici, pa pritisnite {{key:Mod+V}} u drugoj.

- Blokovi koje objekti koriste dolaze s njima. Ako crtež u koji lijepite već ima blok istog naziva, koristi se njegova vlastita definicija, kao u AutoCAD-u.
- Slojevi koje objekti koriste se dodaju, s bojom i postavkama koje su imali.
- Kopija se ne skalira kada dva crteža koriste različite jedinice: CadCraft to kaže, a poslije možete koristiti {{cmd:SCALE}}.
- Prozori prikaza ostaju na svom listu; izostavljaju se iz kopije.

:::note
Međuspremnik je CadCraft-ov vlastiti. Ne možete lijepiti CadCraft objekte u drugi program, niti lijepiti iz drugog programa u CadCraft: snimite kao DWG ili DXF. Vrlo velika kopija možda je prevelika da se dijeli između kartica; komandna linija tada kaže samo da je može zalijepiti ova kartica.
:::

## Česte greške

- **{{key:Mod+V}} zalijepio tekst u komandnu liniju.** Tamo ste nešto upisali, pa su tasteri radili na tekstu. Pritisnite {{key:Esc}} da obrišete, pa ponovo {{key:Mod+V}}.
- **Ništa se nije desilo, a statusna traka kaže da završite tekuću naredbu.** Radi druga naredba. Prvo pritisnite {{key:Esc}}.
- **Lijepljenje je završilo daleko.** Visi od donjeg lijevog ugla onoga što ste kopirali, što može biti udaljen objekat koji ste slučajno izabrali. Koristite {{ui:Zalijepi na mjesto}}, ili kopirajte sa `COPYBASE`.
- **„Ništa nije zalijepljeno“ uz razlog.** Ono što je druga kartica ostavila u međuspremniku nije moglo da se pročita (oštećeno je, ili izmijenjeno ručno). Kopirajte objekte ponovo.

Pun spisak tastera vidi u [Tastatura i miš](topic:keyboard), a svaki upit u [Referenci naredbi](topic:commands#clipboard).
