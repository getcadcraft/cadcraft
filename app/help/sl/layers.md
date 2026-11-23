---
title: Urejanje risbe s sloji
summary: Ustvarite sloje za stene, vrata in opombe, nastavite barve, določite tekoči sloj ter izklopite, zamrznite, zaklenite ali preprečite izris slojev.
keywords: sloj, sloji, la, tekoči sloj, zamrzni, odmrzni, zakleni, izklopi, vklopi, izris, brez izrisa, barva, lastnosti sloja, layiso, layuniso, izoliraj, layoff, layfrz, laymcur, layon, laythw, preimenuj, laymrg, združi, laydel, izbriši sloj
from: ba9f0617
---

## Kaj boste naredili

Tri sloje, Stene, Vrata in Opombe, vsak s svojo barvo, s predmeti, narisanimi na vsakem, in premaknjenimi med njimi.

## Podokno Sloji

Sloji so v podoknu na levi, pod {{ui:Sloji}}. Vsaka vrstica od leve proti desni kaže:

- piko: polno za **tekoči** sloj, kamor gredo novi predmeti;
- barvni vzorec;
- ime sloja;
- štiri gumbe: vklop/izklop (oko), zamrznitev (snežinka), zaklep (lokot) in izris (tiskalnik).

Vsaka risba ima sloj z imenom `0`. Vnesite `LA` in pritisnite {{key:Enter}}, da skočite v podokno.

## Ustvarite sloje

1. Kliknite {{ui:Nov sloj}} nad seznamom. Odpre se polje za ime.
2. Vnesite `Walls` in pritisnite {{key:Enter}} (ali kliknite {{ui:Dodaj (A)}}).

Vrstica stanja pravi "Added layer Walls and made it current." Novi sloj dobi barvo 7 (črna na svetli temi, bela na temni).

3. Znova kliknite {{ui:Nov sloj}}, vnesite `Doors` in pritisnite {{key:Enter}}.
4. Znova kliknite {{ui:Nov sloj}}, vnesite `Notes` in pritisnite {{key:Enter}}.

Notes je zdaj tekoči.

## Dajte vsakemu sloju barvo

1. Kliknite barvni vzorec v vrstici Walls. Odpre se izbirnik barv vašega sistema.
2. Izberite barvo in jo potrdite.

Vzorec in vse na Walls, ki je obarvano z {{ui:ByLayer}}, se spremenijo.

:::note
Izbrana barva, ki se ujema z enim od 255 standardnih barv CAD, je shranjena kot ta številka. Vsaka druga barva se v CadCraft ohrani natanko, v datoteki DWG ali DXF pa se shrani kot najbližja standardna barva.
:::

## Risanje na sloju

1. Kliknite ime **Walls** na seznamu. Njegova pika se napolni in vrstica stanja pravi "Current layer: Walls".
2. Narišite pravokotnik (`REC`). Gre na Walls.
3. Kliknite **Doors** in narišite lok (`A`). Gre na Doors.

Tekoči sloj lahko izberete tudi v {{ui:Trenutne nastavitve}} desno (nič izbrano), pod {{ui:Sloj}}.

## Premaknite predmete na drug sloj

1. Izberite predmete.
2. V desnem podoknu izberite novi sloj v {{ui:Sloj}}.

Premaknejo se na ta sloj in prevzamejo njegovo barvo, če je njihova barva {{ui:ByLayer}}.

## Izklop, zamrznitev, zaklep in izris

| Gumb | Kaj naredi |
|---|---|
| Vklop/izklop (oko) | Skrije predmete sloja. Ne morejo biti vidni, izbrani ali lovljeni. |
| Zamrznitev (snežinka) | V CadCraft enak učinek kot izklop. Ločeno, ker jo drugi programi obravnavajo drugače, in nastavitev je shranjena. |
| Zaklep (lokot) | Predmeti ostanejo vidni in jih lahko lovite, vendar jih ni mogoče izbrati ali spremeniti. Dobro za ozadje, po katerem risate. |
| Izris (tiskalnik) | Ko je pritisnjen, je sloj prikazan na zaslonu, vendar **izpuščen iz izrisov** in PDF. Uporabite za konstrukcijske črte in opombe zase. |

Zadržite kazalec na gumbu, da vidite, kaj bo naredil ("Turn off", "Freeze", "Lock", "Do not plot this layer").

Tekočega sloja ne morete izklopiti: vrstica stanja pravi "That is the current layer. Make another layer current first." Klik na ime sloja, da postane tekoč, ga tudi vklopi in odmrzne.

Vsaka sprememba sloja, v podoknu ali z ukazom, je en korak razveljavitve: {{key:Mod+Z}} jo vrne.

## Delajte s sloji tako, da izberete predmete

Imena sloja vam ni treba poznati: izberite predmet na njem. Vnesite ukaz ali odprite {{ui:Orodja}} na vrhu podokna {{ui:Sloji}}.

| Ukaz | Kaj naredi |
|---|---|
| {{cmd:LAYISO}} | Izberite predmete, pritisnite {{key:Enter}}: ostanejo vklopljeni samo njihovi sloji, vsi drugi se izklopijo. Če je tekoči sloj izklopljen, eden od izoliranih slojev postane tekoč. |
| {{cmd:LAYUNISO}} | Ponovno vklopi sloje, ki jih je zadnji {{cmd:LAYISO}} izklopil, in vrne tekoči sloj, ki ga je spremenil. |
| {{cmd:LAYOFF}} | Kliknite predmete enega za drugim: sloj vsakega se izklopi. Vnesite `U`, da vzamete nazaj zadnjega, {{key:Enter}}, da končate. |
| {{cmd:LAYFRZ}} | Enako, le da zamrzne vsak sloj. |
| {{cmd:LAYMCUR}} | Kliknite predmet: njegov sloj postane tekoč (in se vklopi ter odmrzne). Če je en predmet že izbran, se uporabi ta. |
| {{cmd:LAYON}} | Vklopi vse sloje. |
| {{cmd:LAYTHW}} | Odmrzne vse sloje. |

Tekočega sloja na ta način nikoli ne izklopite ali zamrznete: zgodovina to pove, najprej pa lahko z {{cmd:LAYMCUR}} naredite tekoči kak drug sloj. Če izberete sklic na blok, se uporabi sloj samega sklica.

## Preimenujte, združite in izbrišite sloje

- {{cmd:RENAME}}: vnesite `LA`, staro ime in novo ime. Vsak predmet na sloju sledi. (`B` preimenuje blok na enak način, z vsemi sklici nanj.)
- {{cmd:LAYMRG}}: kliknite predmet na vsakem sloju za združitev (ali vnesite `N` in ime), pritisnite {{key:Enter}}, nato izberite ciljni sloj in odgovorite `Y`. Predmeti preidejo na cilj — v modelu, na listih in znotraj blokov — združeni sloji pa izginejo.
- {{cmd:LAYDEL}}: izberite predmet na sloju (ali vnesite `N` in njegovo ime) in odgovorite `Y`. Sloj gre **z vsakim predmetom na njem**, povsod. Sloja 0, DEFPOINTS in tekočega sloja ni mogoče izbrisati.

Vsak je en korak razveljavitve. Vsi trije so v {{ui:Orodja}} na vrhu podokna {{ui:Sloji}}.

1. Kliknite eno steno, nato vnesite `LAYISO` in pritisnite {{key:Enter}}. Ostane samo Walls.
2. Narišite ali spremenite, kar potrebujete, na Walls.
3. Vnesite `LAYUNISO` in pritisnite {{key:Enter}}. Doors in Notes se vrneta.

## Pogoste napake

- **Nove črte so šle na napačen sloj.** Preverite, katera pika je napolnjena, preden risete. Nov sloj postane tekoč takoj, ko ga dodate.
- **Predmet se ne izbere.** Njegov sloj je zaklenjen, izklopljen ali zamrznjen.
- **Sloj se še vedno izriše v drugem programu.** DXF R12 ne more shraniti "ne izrisuj". CadCraft to nastavitev ohrani zase, ko ima risba list, drugi programi pa bodo ta sloj izrisali.
- **Imena slojev so po shranjevanju z velikimi črkami.** DXF R12 shrani imena z velikimi črkami, zato se `Walls` vrne kot `WALLS`, presledki pa postanejo `_`. Shranjen DWG ohrani imena tako, kot ste jih vtipkali.
- **Preimenovanje, združevanje ali brisanje sloja.** Uporabite {{cmd:RENAME}}, {{cmd:LAYMRG}} ali {{cmd:LAYDEL}} (tudi v {{ui:Orodja}}): glejte zgoraj.

## Združevanje slojev v skupine

Seznam ohranite kratek tako, da sloje postavite v mape, na primer Existing, Proposed in Services. Vsaka mapa se zloži, njena stikala pa vklopijo ali izklopijo vse njene sloje, jih zamrznejo ali zaklenejo skupaj. Tekoči sloj se nikoli ne izklopi.

V {{ui:Orodja}} na podoknu Sloji izberite {{ui:Dodaj pripravljene skupine}} za nabor, narejen za majhna stanovanjska dela, {{ui:Združi po imenu}}, da združite sloje z enako predpono (`E-Walls`, `E-Doors`), ali {{ui:Nova skupina}}. Povlecite sloj na mapo ali uporabite seznam nad sloji za tekoči sloj. Vnesite v {{ui:Poiščite sloj}}, da zožite seznam. `LAYGROUP` (`LG`) naredi isto v ukazni vrstici.

Za preimenovanje skupine dvakrat kliknite njeno ime (ali jo izberite in pritisnite {{key:F2}}), vnesite novo ime in pritisnite {{key:Enter}}; {{key:Esc}} ohrani staro, {{cmd:UNDO}} pa jo vrne. {{ui:Nova skupina}} je v {{ui:Orodja}} na podoknu Sloji.

Sami sloji se ne spremenijo, zato jih drugi CAD programi vidijo kot navaden ravni seznam. CadCraft skupine hrani v datoteki.
