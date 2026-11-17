---
title: Kopiranje, nalepljivanje i dupliranje
summary: Kopiraj objekte u CadCraft-ov međuspremnik, nalepi ih gde klikneš ili na mestu, dupliraj pokazivačem i prenesi rad iz drugog crteža ili kartice.
keywords: kopiraj, iseci, nalepi, nalepi na mestu, dupliraj, međuspremnik, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, između crteža, druga kartica, osnovna tačka
from: 4b9f29d3
---

## Šta ćeš naučiti

Kako kopirati objekte u međuspremnik, nalepiti ih tamo gde klikneš, nalepiti ih na njihovim koordinatama, duplirati ih pokazivačem, seći ih i preneti u drugi crtež. Sve ovo je i u grupi {{ui:Uređivanje}} na traci alata: {{ui:Kopiraj}}, {{ui:Nalepi}} i meni {{ui:Više}}.

## Kopiranje i nalepljivanje tamo gde klikneš

1. Izaberi objekte: klikni ih ili povuci prozor.
2. Pritisni {{key:Mod+C}}, ili klikni {{ui:Kopiraj}} u grupi {{ui:Uređivanje}}. Komandna linija kaže koliko je objekata kopirano. Ostaju izabrani.
3. Pritisni {{key:Mod+V}}, ili klikni {{ui:Nalepi}}. Kopija se pojavljuje uz kursor, visi od donjeg levog ugla kopiranih objekata.
4. Klikni gde ide taj ugao, ili ukucaj tačku, na primer `2000,500`, i pritisni {{key:Enter}}. Hvatanje objekata i {{ui:Ortogonalno}} rade kao obično.

Nalepljeni objekti su izabrani, pa ih možeš odmah pomeriti ili menjati. Jedan {{key:Mod+Z}} uklanja celo nalepljivanje.

:::tip
Želiš da kopija visi od tačke koju biraš, kao što je ugao zida? Ukucaj `COPYBASE`, klikni osnovnu tačku, izaberi objekte i pritisni {{key:Enter}}. Nalepljivanje tada postavlja tu tačku tamo gde klikneš. Da svaka kopija visi od svog centra umesto od donjeg levog ugla, promeni {{ui:Tačka nalepljivanja}} u [CadCraft podešavanjima](topic:settings).
:::

## Nalepljivanje na mestu

Pritisni {{key:Mod+Shift+V}}, ili izaberi {{ui:Nalepi na mesto}} u meniju {{ui:Više}}. Kopija ulazi tačno na koordinate sa kojih je kopirana, bez klika. Koristi je da preneseš objekte u drugi crtež na isto mesto, ili sa lista na drugi list.

## Dupliranje i pomeranje

1. Izaberi objekte.
2. Pritisni {{key:Mod+D}}, ili izaberi {{ui:Dupliraj i pomeri}} u meniju {{ui:Više}}.
3. Kopija stoji preko originala i pomera se sa pokazivačem. Klikni gde ide. Možeš i ukucati pomeraj, na primer `@0,-600`, ili rastojanje prema kursoru.

{{key:Esc}} pre klika ne ostavlja ništa iza. Duplikat je jedan korak opoziva i ne dira međuspremnik.

## Sečenje

Pritisni {{key:Mod+X}}, ili izaberi {{ui:Iseci}} u meniju {{ui:Više}}. Objekti idu u međuspremnik i brišu se iz crteža, u jednom koraku opoziva. Vrati ih nalepljivanjem sa {{key:Mod+V}} ili {{key:Mod+Shift+V}}.

## Između crteža i kartica

Međuspremnik zadržava svoju kopiju kada otvoriš drugi crtež, i deli je svaka CadCraft kartica u ovom pregledaču. Kopiraj u jednoj kartici, pa pritisni {{key:Mod+V}} u drugoj.

- Blokovi koje objekti koriste idu sa njima. Ako crtež u koji nalepljuješ već ima blok istog imena, koristi se njegova sopstvena definicija, kao u AutoCAD-u.
- Slojevi koje objekti koriste se dodaju, sa bojom i podešavanjima koja su imali.
- Kopija se ne prerazmerava kada dva crteža koriste različite jedinice: CadCraft to kaže, a posle možeš koristiti {{cmd:SCALE}}.
- Prozori pogleda ostaju na svom listu; ne ulaze u kopiju.

:::note
Međuspremnik je CadCraft-ov sopstveni. CadCraft objekte ne možeš nalepiti u drugi program, niti nalepiti iz drugog programa u CadCraft: sačuvaj kao DWG ili DXF. Vrlo velika kopija možda je prevelika za deljenje između kartica; komandna linija tada kaže da je samo ova kartica može nalepiti.
:::

## Česte greške

- **{{key:Mod+V}} nalepio tekst u komandnu liniju.** Nešto si ukucao tamo, pa su tasteri radili na tom tekstu. Pritisni {{key:Esc}} da obrišeš, pa ponovo pritisni {{key:Mod+V}}.
- **Ništa se nije desilo, a statusna traka kaže da završiš tekuću komandu.** Druga komanda je u toku. Prvo pritisni {{key:Esc}}.
- **Nalepljivanje je palo daleko.** Visi od donjeg levog ugla onoga što si kopirao, što može biti udaljen objekat koji si slučajno izabrao. Koristi {{ui:Nalepi na mesto}}, ili kopiraj sa `COPYBASE`.
- **„Ništa nije nalepljeno“ uz razlog.** Ono što je druga kartica ostavila u međuspremniku nije moglo da se pročita (oštećeno je ili promenjeno ručno). Ponovo kopiraj objekte.

Pun spisak tastera vidi u [Tastatura i miš](topic:keyboard), a svaki upit u [Referenci komandi](topic:commands#clipboard).
