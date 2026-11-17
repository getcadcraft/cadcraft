---
title: Zgodovina: različice in spremembe
summary: Oglejte si različice risbe (kopije, ki jih Studio shrani ob shranjevanju, in tiste v oblaku), odprite ali obnovite eno ali primerjajte dve z barvno prikazanimi spremembami.
keywords: zgodovina, različice, zgodovina različic, obnovi, prejšnja različica, razveljavi shranjevanje, primerjaj, primerjava risb, dwgcompare, spremembe, dodano, odstranjeno, spremenjeno, posnetek, varnostna kopija, različice v oblaku
from: 141d37b3
---

## Kaj boste naredili

Pogled na prejšnjo različico risbe in seznam, kaj se razlikuje od zdaj: kaj je bilo dodano, kaj odstranjeno in kaj spremenjeno, označeno z barvo na risbi.

## Odprite Zgodovino

Vtipkajte `HISTORY` (ali `HIST`) in pritisnite {{key:Enter}}, ali izberite {{ui:Zgodovina…}} v meniju {{ui:Več}} skupine {{ui:Pogled}}. Podokno se odpre ob risbi in ostane odprto, medtem ko delate, tako da lahko pomikate in povečujete risbo z barvami na njej.

Zgodovina deluje v CadCraft Studio. V brskalniku podokno to samo pove.

## Od kod prihajajo različice

- **Na tem računalniku.** Vsakič, ko odprete risbo iz datoteke v Studiu, in vsakič, ko jo shranite, Studio hrani kopijo datoteke v svoji shrambi na tem računalniku. Prva kopija je {{ui:Ob odprtju}}: datoteka, kakršna je bila, preden ste jo prvič prepisali s shranjevanjem. Studio hrani najnovejših 25 kopij vsake risbe, najstarejše pa gredo prve, ko vse kopije skupaj presežejo 400 MB. Shranjevanje, ki nič ne spremeni, ne shrani ničesar. Nič se ne naloži.
- **V oblaku.** Ko odprete risbo iz svojih datotek v oblaku v Studiu, podokno poleg tega našteje {{ui:V oblaku}}: vsako različico, ki jo hrani oblak, s številko, oznako, kdo jo je shranil, in opombo. Podokno jih samo bere. CadCraft svojih shranjevanj še ne pošilja v oblak, zato so to različice, shranjene z drugih naprav in iz spleta. Če Studio javi, da je prijava potekla, se znova prijavite v Studiu.

Risba, ki je še niste shranili, nima kopij: najprej jo shranite.

## Odprite ali obnovite različico

- {{ui:Odpri}} da to različico na svoj zavihek. Vaša risba ni spremenjena.
- {{ui:Obnovi}} nadomesti to risbo s to različico. Najprej vpraša. Studio pred tem shrani kopijo risbe, kakršna je zdaj, v Zgodovini (označeno kot {{ui:Pred obnovitvijo}}), in dokler ne shranite datoteke, se ne zapiše nič. Obnovitve ne morete razveljaviti s {{key:Mod+Z}}; uporabite to kopijo.

## Primerjaj

1. Kliknite {{ui:Primerjaj}} pri različici. Primerja se z {{ui:Risba, kakršna je zdaj}}; če želite primerjati z drugo različico, jo najprej izberite v {{ui:Primerjaj z}}.
2. Preberite rezultat pod seznamom: koliko objektov je bilo dodanih, odstranjenih in spremenjenih, ter seznam le-teh. Kliknite element na seznamu, da se pogled premakne nanj.
3. Na risbi:
   - **zeleni** objekti so dodani,
   - **rdeči** objekti so odstranjeni (so samo v starejši različici),
   - **oranžni** objekti so spremenjeni: nova oblika je polna, stara pa črtkana.
4. {{ui:Pokaži na risbi}} barve vklopi in izklopi; {{ui:Počisti barve}} odstrani rezultat. Zaprtje podokna jih tudi počisti.

Seznam pove, kaj se je spremenilo pri spremenjenem objektu: njegovo besedilo, to, da se je premaknil, njegova oblika, sloj, barva, tip črte ali debelina črte. Vsak list se primerja posebej; barve se vidijo na listu, ki je odprt.

:::note
Risba nima trajne številke za vsak objekt, zato CadCraft objekte ujema po tem, kaj so: isti objekt na obeh straneh je nespremenjen; objekt iste vrste in sloja, ki leži znotraj lastne velikosti od starega, je isti objekt, spremenjen; kar ostane, je dodano ali odstranjeno. Objekt, ki je premaknjen daleč od prvotnega mesta, se pokaže kot odstranjen na enem mestu in dodan na drugem. Sklic na blok šteje vsebino svojega bloka.
:::

## Pogoste napake

- **„Še ni kopij.“** Studio hrani kopijo ob vsakem odprtju in shranjevanju risbe, ki ima datoteko na tem računalniku. Risba, odprta iz zavihka brskalnika ali nikoli shranjena, kopij nima.
- **Seznam iz oblaka manjka.** Pojavi se za risbo, odprto iz oblaka v Studiu; datoteka, odprta z diska, ni risba iz oblaka.
- **Vse je videti spremenjeno.** Dve različici, shranjeni z različnimi programi, zapišeta isto risbo na različne načine (imena anonimnih blokov, zaokroževanje). Primerjajte različice, shranjene s CadCraftom.
