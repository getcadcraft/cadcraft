---
title: "Privzeta pravila: nastavite, s čim se začne nova risba"
summary: "Enkrat določite, s katerimi enotami, formatom dolžin, natančnostjo, višino besedila in papirjem lista se začne nova risba, za metrično in imperialno delo, ter pravila delite po pisarni kot majhno datoteko."
keywords: privzeto, privzeta pravila, pravilo, pisarniški standard, pisarniške privzete vrednosti, predloga, nova risba, enote, insunits, format dolžin, arhitekturni, natančnost, luprec, višina besedila, papir lista, a1, deli, izvoz, uvoz, json
from: 7b80fd13
---

## Kaj boste naredili

Povejte CadCraft, s čim naj se začne nova risba, da nihče v pisarni ne mora vsakič zagnati UNITS in spreminjati istih stvari. To je dodatek: izklopljen je, dokler ga ne vklopite, pravilo, ki ga ne nastavite, pa pusti privzeto vrednost CadCraft povsem nedotaknjeno.

:::note
To so privzete vrednosti za **nove** risbe in **nove** liste. Risbe, ki ste jo že začeli, se ne spremeni, prav tako se ne spremeni risba, ki jo odprete.
:::

## Koraki

1. Odprite Nastavitve, pojdite na {{ui:Dodatki}} in vklopite {{ui:Privzeta pravila}}.
2. V Nastavitvah odprite zavihek **CadCraft** in na seznamu levo izberite {{ui:Privzeta pravila}}.
3. Nastavite pravila, ki jih želite. Vsako se začne pri **privzeti vrednosti programa CadCraft**. Pravilo z okencema **Metrično** in **Imperialno** sprejme po eno vrednost za vsako vrsto risbe; izpolnite samo tiste, ki jih potrebujete.
4. Gumba Shrani ni: vsaka sprememba se shrani, ko jo naredite.
5. Začnite novo risbo. Ima enote, format dolžin, natančnost in višino besedila, ki ste jih nastavili, njen prvi novi list pa je na papirju, ki ste ga izbrali.

## Pravila

- **Enote nove risbe**: brez, milimetri, centimetri, metri, palci ali čevlji.
- **Format dolžin** in **Natančnost dolžin**: kar nastavi ukaz UNITS, za novo risbo.
- **Višina novega besedila**, v enotah risbe.
- **Papir novega lista**: papir, ki ga uporabi Nov list.
- **Velikosti opomb na papirju** (Nastavitve › Globalno › {{ui:Privzeta pravila}}): višine pisarne v milimetrih, kot se natisnejo. CadCraft uporabi tisto za opombe in oznake: {{cmd:ANNOSCALE}} nastavi višino, s katero se začne novo besedilo, na to višino pri merilu opomb. Glejte [Enote, papirji in merila](topic:units-papers-scales#annotate-by-scale).

Risba v palcih ali čevljih uporablja imperialne vrednosti; vsaka druga risba uporablja metrične. Risba brez enot uporablja sistem enot, nastavljen v Nastavitve › Globalno › {{ui:Privzeta pravila}}, ali Metrično, če ni nastavljen noben.

## Delite jih po pisarni

1. V Nastavitvah odprite zavihek **Globalno** in izberite {{ui:Privzeta pravila}}.
2. Kliknite {{ui:Shrani v datoteko}}. Dobite majhno datoteko, ki se konča z `.ccdefaults.json`.
3. Na drugem računalniku vklopite dodatek, odprite isto mesto in kliknite {{ui:Naloži iz datoteke}}. Pravila datoteke nadomestijo tista na tem računalniku.

Ena datoteka vsebuje pravila vseh aplikacij CadCraft, zato ista datoteka deluje tudi v BimCraft.

## Dobro je vedeti

- Za merilo lista ni pravila: pogled novega lista se prilagodi risbi, merilo pa nastavite na listu.
- Za slog kotiranja ni pravila: nova risba nima imenovanih slogov kotiranja. Kote nastavite z DIMSTYLE ali začnite z risbo, ki ima vaše.
- Datoteka je navaden odprt JSON. Pravilo, ki ga datoteka navaja in ga ta različica ne pozna, je izpuščeno in omenjeno v sporočilu; ostala se naložijo.
- Pravila so shranjena v tem brskalniku, ne v risbi. Če dodatek izklopite, je vse spet privzeta vrednost CadCraft.
