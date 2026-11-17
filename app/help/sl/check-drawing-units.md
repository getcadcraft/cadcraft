---
title: Preverjanje, v katerih enotah je risba
summary: Ugotovite, ali je odprta risba v milimetrih, palcih ali drugih enotah, preverite jo z merjenjem in pojasnite, zakaj lahko drug program za isti DXF navede druge enote.
keywords: enote, katere enote, preveri enote, milimetri, mm, palci, metrično, imperialno, enote DXF, STEP v DXF, napačne enote, palci ali mm, INSUNITS, MEASUREMENT, enote risbe, DXF iz PartCraft
from: c0ee75bb
---

## Kaj boste naredili

Ugotovite, kaj pomeni ena enota v odprti risbi, in se prepričajte, da so števila, ki jih berete, velikosti, ki jih pričakujete.

## Koraki

1. Odprite risbo, nato pritisnite {{key:Esc}}, da nič ni izbrano, na zavihku {{ui:Model}}.
2. V desnem panelu pod {{ui:Trenutne nastavitve}} preberite {{ui:Enote}}. Pove, kaj pomeni ena enota risbe: {{ui:Milimetri}}, {{ui:Palci}}, {{ui:Čevlji}} in tako naprej. DXF, shranjen iz PartCraft, pove {{ui:Milimetri}}.
3. Preverite z merjenjem nečesa, katere velikost poznate. Vnesite {{cmd:DIST}} in izberite dva konca roba ali luknje. Če del, ki ga poznate kot 25 mm, prikaže `25`, je risba v milimetrih; če prikaže približno `0.98`, je v palcih.

{{ui:Brez enot}} pomeni, da datoteka tega ne pove. CadCraft takrat obravnava enoto papirja (milimetri na papirju ISO, palci na ameriškem papirju), števila pa so tako pravilna, kot je pravilen program, ki jih je zapisal.

## Če so enote napačne

Spreminjanje {{ui:Enote}} **ne spremeni velikosti**: števila ostanejo enaka, spremeni se samo, kaj pomenijo. Zato jo nastavite samo, da pove, kaj risba v resnici je. Če so števila milimetri, {{ui:Enote}} pa pravi {{ui:Palci}}, izberite {{ui:Milimetri}}. Če potrebujete geometrijo same v drugih enotah, jo spremenite z ukazom {{cmd:SCALE}} (25.4 za pretvorbo iz palcev v milimetre, 1/25.4 v obratno smer) in nato nastavite {{ui:Enote}}.

Zapis dolžin (decimalno, čevlji in palci, ulomki) je ločena nastavitev, {{ui:Format dolžin}}: glejte [Enote, velikosti papirja in merila](topic:units-papers-scales).

## Zakaj drug program lahko navede palce

DXF v svoji glavi navede enote. Najstarejša vrsta DXF, R12, sploh ni imela spremenljivke za enote, zato program, ki bere R12 strogo, njeno vrednost prezre in uporabi svojo privzeto, ki je pogosto palci. Geometrija v datoteki je v obeh primerih enaka: razlikuje se samo oznaka. PartCraft zapisuje svoje datoteke DXF kot R12 in navaja milimetre na dva načina (`$INSUNITS` 4 in `$MEASUREMENT` 1), da jih več programov prebere pravilno. Če program še vedno pravi palci, nastavite njegove enote na milimetre, ko odprete datoteko.

Vstavljanje datoteke v risbo (namesto odpiranja) pretvori njene enote: glejte [Enote pri uvozu](topic:units-on-import).
