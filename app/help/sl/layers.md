---
title: Organizirajte risbo s sloji
summary: Ustvarite sloje za stene, vrata in opombe, nastavite barve, določite trenutni sloj ter izklopite, zamrznite, zaklenite ali preprečite izris slojev.
keywords: sloj, sloji, la, trenutni sloj, zamrzni, odmrzni, zakleni, izklopi, vklopi, izris, brez izrisa, barva, lastnosti sloja, layiso, layuniso, izoliraj, layoff, layfrz, laymcur, layon, laythw, preimenuj, laymrg, združi, laydel, izbriši sloj
from: cd033591
---

## Kaj boste naredili

Tri sloje, Stene, Vrata in Opombe, vsak z lastno barvo, z objekti, narisanimi na vsakem, in s premikanjem objektov med njimi.

## Podokno Sloji

Sloji so v podoknu na levi, pod {{ui:Sloji}}. Vsaka vrstica od leve proti desni prikazuje:

- pika: polna za **trenutni** sloj, kamor gredo novi objekti;
- barvni vzorec;
- ime sloja;
- štiri gumbe: vklop/izklop (oko), zamrzni (snežinka), zakleni (ključavnica) in izris (tiskalnik).

Vsaka risba ima sloj z imenom `0`. Vnos `LA` in pritisk na {{key:Enter}} skoči na podokno.

## Ustvarite sloje

1. Kliknite {{ui:Nov sloj}} nad seznamom. Odpre se polje za ime.
2. Vnesite `Stene` in pritisnite {{key:Enter}} (ali kliknite {{ui:Dodaj (A)}}).

Vrstica stanja pravi: „Sloj Stene je dodan in postal trenutni.“ Novi sloj dobi barvo 7 (črna na svetli temi, bela na temni).

3. Ponovno kliknite {{ui:Nov sloj}}, vnesite `Vrata` in pritisnite {{key:Enter}}.
4. Ponovno kliknite {{ui:Nov sloj}}, vnesite `Opombe` in pritisnite {{key:Enter}}.

Zdaj je trenutni sloj Opombe.

## Določite barvo vsakemu sloju

1. Kliknite barvni vzorec v vrstici Stene. Odpre se izbirnik barv vašega sistema.
2. Izberite barvo in potrdite.

Vzorec in vse na sloju Stene, ki ima barvo {{ui:ByLayer}}, se spremenijo.

:::note
Izbrana barva, ki se ujema z eno od 255 standardnih barv CAD, se shrani kot ta številka. Vsaka druga barva se v CadCraft ohrani točno, v datoteki DWG ali DXF pa se shrani kot najbližja standardna barva.
:::

## Risanje na sloju

1. Kliknite ime **Stene** na seznamu. Pika se napolni, vrstica stanja pa pravi „Trenutni sloj: Stene“.
2. Narišite pravokotnik (`REC`). Gre na Stene.
3. Kliknite **Vrata** in narišite lok (`A`). Gre na Vrata.

Trenutni sloj lahko izberete tudi v {{ui:Trenutne nastavitve}} na desni (ko nič ni izbrano), pod {{ui:Sloj}}.

## Premaknite objekte na drug sloj

1. Izberite objekte.
2. V desnem podoknu izberite novi sloj v {{ui:Sloj}}.

Premaknejo se na ta sloj in prevzamejo njegovo barvo, če je njihova barva {{ui:ByLayer}}.

## Izklop, zamrznitev, zaklep in izris

| Gumb | Kaj naredi |
|---|---|
| Vklop/izklop (oko) | Skrije objekte sloja. Ni jih mogoče videti, izbrati ali ujeti z lovljenjem objektov. |
| Zamrzni (snežinka) | V CadCraft enako kot izklop. Ločeno, ker drugi programi z njima ravnajo drugače, nastavitev pa se shrani. |
| Zakleni (ključavnica) | Objekti ostanejo vidni in nanje se lahko lovite, vendar jih ni mogoče izbrati ali spremeniti. Primerno za ozadje, po katerem risate. |
| Izris (tiskalnik) | Ko je pritisnjen, je sloj na zaslonu prikazan, vendar **ne gre v izrise** in PDF-je. Uporabite za konstrukcijske črte in opombe zase. |

Gumb premaknite nad njega, da vidite, kaj bo naredil („Izklopi“, „Zamrzni“, „Zakleni“, „Ne izriši tega sloja“).

Trenutnega sloja ni mogoče izklopiti: vrstica stanja pravi „To je trenutni sloj. Najprej naredite drug sloj za trenutnega.“ Klik na ime sloja, da ga naredite trenutnega, ga tudi vklopi in odmrzne.

Vsaka sprememba sloja, v podoknu ali z ukazom, je en korak razveljavitve: {{key:Mod+Z}} jo vrne.

## Delajte s sloji z izbiro objektov

Imena sloja vam ni treba poznati: izberite objekt na njem. Vnesite ukaz ali odprite {{ui:Orodja}} na vrhu podokna {{ui:Sloji}}.

| Ukaz | Kaj naredi |
|---|---|
| {{cmd:LAYISO}} | Izberite objekte in pritisnite {{key:Enter}}: ostanejo vklopljeni samo sloji teh objektov, vsi drugi sloji se izklopijo. Če je trenutni sloj izklopljen, eden od izoliranih slojev postane trenutni. |
| {{cmd:LAYUNISO}} | Ponovno vklopi sloje, ki jih je izklopil zadnji {{cmd:LAYISO}}, in vrne trenutni sloj, ki ga je spremenil. |
| {{cmd:LAYOFF}} | Klikajte objekte enega za drugim: sloj vsakega se izklopi. Vnesite `U`, da vzamete nazaj zadnjega, {{key:Enter}} za konec. |
| {{cmd:LAYFRZ}} | Enako, le da zamrzne sloj vsakega. |
| {{cmd:LAYMCUR}} | Kliknite objekt: njegov sloj postane trenutni (in se vklopi ter odmrzne). Če je en objekt že izbran, se uporabi ta. |
| {{cmd:LAYON}} | Vklopi vse sloje. |
| {{cmd:LAYTHW}} | Odmrzne vse sloje. |

Trenutnega sloja tako nikoli ne izklopite ali zamrznete: zgodovina to pove, nov trenutni sloj pa lahko najprej nastavite z {{cmd:LAYMCUR}}. Izbira sklica na blok uporabi sloj samega sklica.

## Preimenujte, združite in izbrišite sloje

- {{cmd:RENAME}}: vnesite `LA`, staro ime in novo ime. Vsak objekt na sloju sledi. (`B` preimenuje blok na enak način, z vsemi sklici nanj.)
- {{cmd:LAYMRG}}: kliknite objekt na vsakem sloju, ki ga združujete (ali vnesite `N` in ime), pritisnite {{key:Enter}}, nato izberite ciljni sloj in odgovorite `Y`. Objekti preidejo na cilj — v modelu, na listih in znotraj blokov — združeni sloji pa izginejo.
- {{cmd:LAYDEL}}: izberite objekt na sloju (ali vnesite `N` in njegovo ime) ter odgovorite `Y`. Sloj izgine **z vsemi objekti na njem**, povsod. Sloja 0, DEFPOINTS in trenutnega sloja ni mogoče izbrisati.

Vsak korak je en korak razveljavitve. Vsi trije so v {{ui:Orodja}} na vrhu podokna {{ui:Sloji}}.

1. Kliknite eno črto stene, nato vnesite `LAYISO` in pritisnite {{key:Enter}}. Vklopljen ostane samo sloj Stene.
2. Narišite ali spremenite, kar potrebujete, na sloju Stene.
3. Vnesite `LAYUNISO` in pritisnite {{key:Enter}}. Sloja Vrata in Opombe se vrneta.

## Pogoste napake

- **Nove črte so šle na napačen sloj.** Preverite, katera pika je napolnjena, preden začnete risati. Novi sloj postane trenutni takoj, ko ga dodate.
- **Objekta ni mogoče izbrati.** Njegov sloj je zaklenjen, izklopljen ali zamrznjen.
- **Sloj se še vedno izriše v drugem programu.** DXF R12 ne more shraniti „brez izrisa“. CadCraft ohrani nastavitev sam, kadar ima risba list, drugi programi pa bodo ta sloj izrisali.
- **Imena slojev so po shranjevanju v velikih črkah.** DXF R12 shranjuje imena z velikimi črkami, zato se `Stene` vrne kot `STENE`, presledki pa postanejo `_`. Shranjena DWG ohrani imena, kot ste jih vnesli.
- **Preimenovanje, združevanje ali brisanje sloja.** Uporabite {{cmd:RENAME}}, {{cmd:LAYMRG}} ali {{cmd:LAYDEL}} (tudi v {{ui:Orodja}}): glejte spodaj.

## Združevanje slojev v skupine

Seznam naj bo kratek: sloje razvrstite v mape, na primer Obstoječe, Predlagano in Instalacije. Vsaka mapa se zloži, njena stikala pa vklopijo ali izklopijo vse njene sloje, jih zamrznejo ali zaklenejo skupaj. Trenutnega sloja nikoli ne izklopite.

V {{ui:Orodja}} na podoknu Sloji izberite {{ui:Dodaj pripravljene skupine}} za nabor, narejen za manjša stanovanjska dela, {{ui:Združi po imenu}}, da združite sloje z isto predpono (`E-Stene`, `E-Vrata`), ali {{ui:Nova skupina}}. Povlecite sloj na mapo ali uporabite seznam nad sloji za trenutni sloj. Vnesite v {{ui:Poiščite sloj}}, da zožite seznam. `LAYGROUP` (`LG`) naredi enako v ukazni vrstici.

Sami sloji se ne spremenijo, zato drugi CAD programi vidijo navaden ploski seznam. CadCraft skupine shrani v datoteko.
