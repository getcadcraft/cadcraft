---
title: Izdelava in vstavljanje blokov
summary: Vrata iz risbe spremenite v blok, ga znova postavite na drugih položajih, v drugih merilih in kotih ter počistite neuporabljene bloke.
keywords: blok, bmake, vstavi, ddinsert, simbol, purge, razstavi, ponovno določi, izhodiščna točka, sklic, štetje, bcount, razpredelnica, csv, atributi, izvlečenje podatkov
from: 125a129d
---

## Kaj boste naredili

Simbol vrat, spremenjen v blok z imenom `DOOR-900`, ki ga nato trikrat postavite: kot je narisan, zasukan za 90 stopinj in zrcaljen.

Blok je poimenovana skupina objektov. Narišete ga enkrat; vsako mesto, kjer ga uporabite, je **sklic na blok**, ki kaže na eno samo definicijo. Razdelek {{ui:Bloki}} v levi plošči navaja bloke v risbi in kolikokrat je vsak uporabljen.

## Narišite vrata

1. Vnesite `L` in pritisnite {{key:Enter}}.
2. Vnesite `0,0` in pritisnite {{key:Enter}}.
3. Vnesite `@0,900` in pritisnite {{key:Enter}}, nato še enkrat {{key:Enter}}. To je krilo vrat.
4. Vnesite `A` in pritisnite {{key:Enter}}.
5. Vnesite `C` in pritisnite {{key:Enter}}, da najprej določite središče.
6. Vnesite `0,0` in pritisnite {{key:Enter}} za središče.
7. Vnesite `900,0` in pritisnite {{key:Enter}} za začetno točko.
8. Vnesite `0,900` in pritisnite {{key:Enter}} za končno točko. To je lok odpiranja.
9. Kliknite {{ui:Obseg}}.

Loki potekajo v nasprotni smeri urnega kazalca od začetne do končne točke.

## Naredite blok

1. Vnesite `B` in pritisnite {{key:Enter}}, ali kliknite {{ui:Ustvari}} v skupini Bloki.
2. Pri `Vnesite ime bloka` vpišite `DOOR-900` in pritisnite {{key:Enter}}.
3. Pri `Določite vstavitveno izhodiščno točko` vpišite `0,0` in pritisnite {{key:Enter}}. To je tečaj: točka, ki pride na mesto, kamor postavite blok.
4. Pri `Izberite objekte` povlecite okno okoli krila in loka.
5. Pritisnite {{key:Enter}}.

Zgodovina pravi `Blok "DOOR-900" je narejen iz 2 objektov, ki so bili zamenjani z enim sklicem nanj.` Plošča {{ui:Bloki}} navaja DOOR-900 z `1×` ob njem: en sklic. Kliknite vrata: zdaj se izberejo kot en sam objekt, „Sklic na blok“.

:::tip
Objekte lahko izberete najprej, nato vpišete `B`. CadCraft še vedno vpraša za ime in izhodiščno točko, nato pa uporabi vaš izbor.
:::

## Vstavite blok

1. Vnesite `I` in pritisnite {{key:Enter}}, ali kliknite {{ui:Vstavi}} ob DOOR-900 v plošči {{ui:Bloki}}.
2. Pri `Vnesite ime bloka ali [Datoteka (F)/Knjižnica (L)] <DOOR-900>` pritisnite {{key:Enter}}. (Gumb {{ui:Vstavi}} v plošči vpiše ime namesto vas.)
3. Vrata sledijo križcu. Kliknite, kamor naj pride tečaj.

Prikaže se druga vrata.

## Vstavite zasukan ali spremenjen v merilu

1. Vnesite `I` in pritisnite {{key:Enter}}, nato še {{key:Enter}}, da potrdite ime.
2. Pri `Določite vstavitveno točko [Merilo (S)/Zasuk (R)]` vpišite `R` in pritisnite {{key:Enter}}.
3. Vpišite `90` in pritisnite {{key:Enter}}. Predogled se zasuče.
4. Kliknite, da ga postavite.

Namesto tega vpišite `S`, da nastavite faktor merila; velja za obe smeri. Merilo in zasuk se zapomnita za naslednje vstavljanje. Če želite vrata zrcaliti, jih vstavite in nato na sklicu uporabite {{cmd:MIRROR}}.

## Spremenite postavljen blok

Izberite sklic na blok. V desni plošči lahko spremenite {{ui:X}}, {{ui:Y}}, {{ui:Merilo X}}, {{ui:Merilo Y}} in {{ui:Zasuk}}. Negativna vrednost {{ui:Merilo X}} blok obrne.

## Ponovno določite blok

Če želite spremeniti vsa vrata naenkrat, naredite blok z istim imenom:

1. Narišite novo različico vrat.
2. Vnesite `B` in pritisnite {{key:Enter}}, ter vpišite `DOOR-900`.
3. Pri `Blok "DOOR-900" že obstaja. Ali ga želite ponovno določiti?` vpišite `Y` in pritisnite {{key:Enter}}.
4. Določite izhodiščno točko in izberite nove objekte, kot prej.

Vsak sklic na DOOR-900 zdaj prikazuje novo različico.

Ali uredite sam blok: {{ui:Bloki}} › {{ui:Več}} › {{ui:Uredi blok}} ({{cmd:BEDIT}}) ga odpre samostojno, {{ui:Shrani blok}} pa ga vrne nazaj. Glejte [Atributi bloka](topic:attributes#change-a-block-the-block-editor).

## Preštejte bloke in izvozite razpredelnico

Vpišite {{cmd:COUNT}} (ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Preštej bloke}}), nato:

- kliknite eno vrata: izbrana so vsa vrata v tem prostoru, zgodovina pa pove, koliko jih je tukaj in v celotni risbi;
- ali pritisnite {{key:Enter}}: zgodovina navede vsak blok s številom, največji najprej;
- ali vpišite `E`, nato `C` za CSV s števili (v modelu, na listih, skupaj) ali `A` za eno vrstico na sklic z njegovim slojem, položajem, zasukom in vsako vrednostjo atributa — razpredelnico, ki jo lahko odprete v preglednici.

Neimenovani bloki (kote, tabele) in sklici znotraj drugih blokov se ne štejejo. Celice, ki se začnejo kot formula (`=`, `+`, `-`, `@`), dobijo vodilni `'`, da jih preglednica prikaže kot besedilo.

## Razstavite in očistite

- {{cmd:EXPLODE}} (`X`) izbrani sklic na blok spremeni nazaj v posamezne objekte. Definicija ostane.
- {{cmd:PURGE}} (`PU`) odstrani definicije blokov, ki jih nič ne uporablja. Zgodovina pove, koliko jih je odstranila.

## Imena blokov

Ime je lahko dolgo do 255 znakov in lahko vsebuje presledke, vendar se ne sme začeti z zvezdico in ne sme vsebovati `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ali obratnega narekovaja. Ko shranite DXF R12, so imena zapisana z velikimi črkami, drugi znaki kot črke, številke, `$`, `_` in `-` postanejo `_`, imena pa se skrajšajo na 31 znakov; zgodovina pove, koliko se jih je spremenilo. Kratka imena z velikimi črkami, številkami in vezaji, kot `DOOR-900`, ostanejo nespremenjena. Shranjen DWG ohrani imena, kot ste jih vpisali, z velikimi in malimi črkami; spremenijo se le znaki, ki jih DWG ne dovoli (`|` postane `$0$`, drugi postanejo `_`).

## Zapišite blok ali objekte v lastno datoteko

Vpišite `W` ({{cmd:WBLOCK}}) in izberite **Objekti**, **Blok** ali **Celotna risba**. Rezultat je nova DWG ali DXF, ki vsebuje samo sloje, sloge in bloke, ki jih uporablja, z vašo izhodiščno točko kot izhodiščem. Za objekte lahko izberete, da jih ohranite, spremenite v blok ali izbrišete iz te risbe.

## Pogoste napake

- **Blok je pristal daleč od križca.** Izhodiščna točka ni bila na objektih. Blok ponovno naredite z izhodiščno točko na vogalu ali tečaju.
- **„Ni izbranih objektov; nič ni narejeno.“** Pritisnili ste {{key:Enter}}, preden ste kaj izbrali.
- **„Ta risba še nima blokov: F vstavi enega iz datoteke, L iz knjižnice (ali ga naredite z BLOCK).“** Vpišite `F`, da pripeljete blok iz druge risbe, ali `L` za knjižnico. Glejte [Vstavljanje iz datoteke ali knjižnice](topic:insert-from-file-and-library).
- **„Pogledno okno ne more iti v blok.“** Okvirjev pogleda ne vključujte v izbor.
