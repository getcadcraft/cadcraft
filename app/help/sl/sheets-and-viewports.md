---
title: Priprava lista z glavo risbe in poglednimi okni
summary: Naredite list (izris) z obrobo in glavo risbe, nastavite merilo poglednega okna, dodajte drugo pogledno okno za podrobnost in izpolnite glavo risbe.
keywords: layout, list, papirni prostor, pogledno okno, mview, vpview, glava risbe, merilo, velikost papirja, obroba, vports, merilo izrisa, mspace, pspace, model space, vstop v pogledno okno, dvoklik na pogledno okno
from: 45a45de8
---

## Kaj boste naredili

A3 list z glavo risbe, celoten tloris v enem poglednem oknu v merilu 1:100 in drugo pogledno okno, ki prikazuje en vogal v merilu 1:20.

## Model in listi

Stavbo narišete na zavihku {{ui:Model}} v polni velikosti: 6 m dolga stena je v milimetrih 6000 enot. **List** (izris) je kos papirja, merjen v milimetrih ali palcih. **Pogledno okno** je okno, izrezano v listu, ki prikazuje model v določenem merilu.

## Preden začnete

1. Odprite ali narišite tloris na zavihku {{ui:Model}}.
2. Pritisnite {{key:Esc}}, da nič ni izbrano.
3. V {{ui:Trenutne nastavitve}} nastavite {{ui:Enote}} na enoto, v kateri ste risali, na primer {{ui:Milimetri}}.

Enote so pomembne: merilo poglednega okna, na primer 1:100, pomeni, da en milimeter na papirju prikazuje 100 resničnih milimetrov, zato mora CadCraft vedeti, kaj je ena enota risbe. Risba, pustena kot {{ui:Brez enot}}, se šteje za enoto papirja (milimetri na ISO papirju, palci na ameriškem papirju).

## Naredite list

1. Kliknite gumb {{ui:+}} desno od zavihkov pod risbo, ali vpišite `LAYOUT` in pritisnite {{key:Enter}}, ali kliknite {{ui:Nov list}}.

Odpre se nov zavihek `Layout1`. Videti bi morali list na temnejši mizi: obroba, glava risbe v spodnjem desnem kotu in eno pogledno okno zgoraj, ki prikazuje celoten model pri največjem standardnem merilu, ki se prilega. Zgodovina poimenuje papir: ISO A3 za metrične risbe in risbe brez enot, Tabloid (ANSI B) za risbe v palcih ali čevljih.

2. Kliknite {{ui:Obseg}}, da list prilagodite zaslonu.

## Izberite papir

1. Pritisnite {{key:Esc}}, da nič ni izbrano. Naslov desne plošče pravi „List: Layout1“.
2. V {{ui:Ime}} vpišite `A-101 Plan` in pritisnite {{key:Enter}}. Zavihek se preimenuje.
3. V {{ui:Papir}} izberite velikost.
4. V {{ui:Usmerjenost}} izberite {{ui:Ležeče}} ali {{ui:Pokončno}}.

:::warning
Sprememba papirja ne premakne ali spremeni velikosti tistega, kar je že na listu. Po spremembi preverite, ali obroba, glava risbe in pogledno okno še ustrezajo, in jih premaknite ali spremenite velikost z ročaji. Preklapljanje med milimetrskim in palčnim papirjem ohrani številke, zato se vse spremeni po velikosti: vrstica stanja vas na to opozori.
:::

## Nastavite merilo poglednega okna

1. Kliknite rob poglednega okna (njegov obrob). Naslov plošče pravi „Pogledno okno“.
2. V {{ui:Merilo (S)}} izberite `1:100`.

Model v poglednem oknu se prerisa v merilu 1:100, centriran tam, kjer je bil. Seznam ponuja metrična merila od 10:1 do 1:10000; risbe v palcih ali čevljih imajo tudi arhitekturna merila (1/4" = 1'-0" in podobna) in inženirska merila (1" = 20' in podobna). {{ui:Prilagodi celotnemu modelu}} nastavi natančno, nestandardno merilo, ki vse prilega.

3. Če tloris ni več centriran, spremenite {{ui:X}} in {{ui:Y}} pod {{ui:Središče pogleda (model)}} v desni plošči: to je točka modela, ki je prikazana na sredini poglednega okna.

## Prikažite del modela v poglednem oknu

1. Z izbranim poglednim oknom kliknite {{ui:Izberite okno na modelu …}} v desni plošči (ali vpišite `VPVIEW` in pritisnite {{key:Enter}}).
2. CadCraft preklopi na zavihek {{ui:Model}}. Kliknite en vogal območja, ki ga želite prikazati.
3. Kliknite nasprotni vogal.

Vrnete se na list, pogledno okno pa prikazuje to območje pri največjem standardnem merilu, ki se prilega; zgodovina pove, katero. {{ui:Pokaži celoten model}} vas vrne na celoten tloris pri standardnem merilu.

## Dodajte drugo pogledno okno za podrobnost

1. Naredite prostor na listu: izberite prvo pogledno okno in povlecite vogalni ročaj, da ga zmanjšate.
2. Vpišite `MV` in pritisnite {{key:Enter}}, ali kliknite {{ui:Pogledno okno}} v skupini Listi.
3. Kliknite en vogal novega poglednega okna na listu.
4. Kliknite nasprotni vogal.

Novo pogledno okno prikazuje celoten model. Zgodovina pove njegovo merilo.

5. Kliknite obrob novega poglednega okna.
6. Kliknite {{ui:Izberite okno na modelu …}} in izberite majhno območje okoli enega vogala tlorisa.
7. V {{ui:Merilo (S)}} izberite `1:20`.

Obrobe poglednih oken so na sloju `Viewports`, ki je nastavljen tako, da se ne izriše, zato obrobe vidite na zaslonu, v PDF pa ne.

## Izpolnite glavo risbe

Glava risbe je sestavljena iz običajnih črt in besedila na sloju `Title block`. Začne se z imenom risbe, merilom prvega poglednega okna, današnjim datumom in številko lista.

1. Dvakrat kliknite velik naslov besedila. Odpre se polje za urejanje čez njega.
2. Vpišite naslov lista.
3. Kliknite {{ui:V redu}} ali pritisnite {{key:Mod+Enter}}.

Enako naredite za druga polja. Uporabite {{cmd:TEXT}}, da napišete v prazno celico „DRAWN BY“. Besedilo SCALE se ne posodobi samo, ko spremenite merilo poglednega okna: uredite ga ročno.

## Risanje na listu

Vse, kar narišete na zavihku lista, je na papirju, v enotah papirja: besedilo visoko 3.5 je na ISO listu visoko 3.5 mm. Opombe, severne puščice in obrobe listov sodijo sem.

Če želite spremeniti sam tloris, pojdite na zavihek {{ui:Model}} ali delajte prek poglednega okna (naslednji razdelek); vsako pogledno okno prikaže spremembo.

## Delajte na modelu prek poglednega okna

1. Dvakrat kliknite znotraj poglednega okna, stran od njegovega obrobe. Ali vpišite `MS` in pritisnite {{key:Enter}}: če je na listu eno pogledno okno, vas odpelje naravnost noter; če jih je več, kliknite tistega, ki ga želite.

Obrob je narisan debelejše, zgodovina pove, da ste znotraj, zavihek lista pa ostane izbran. Vse, kar narišete ali spremenite, je zdaj na modelu, v enotah modela, kot na zavihku {{ui:Model}}: črta, narisana v poglednem oknu pri 1:100, je v resničnih milimetrih. Sloji, zamrznjeni v tem poglednem oknu, tu ne morejo biti izbrani.

2. Kolesce miške ali povlek s srednjim gumbom povečata in pomaknete prikaz poglednega okna. List ostane, kjer je.
3. Dvakrat kliknite kjerkoli zunaj obrobe ali vpišite `PS` in pritisnite {{key:Enter}}.

Vrnete se na list. Pogledno okno ohrani pogled, s katerim ste ga pustili; {{key:Mod+Z}} vrne stari pogled v enem koraku. Klik na katerikoli zavihek pod risbo prav tako zapusti pogledno okno.

:::note
Pogledno okno, katerega prikaz je zaklenjen ({{ui:Prikaz zaklenjen}} v {{ui:Lastnosti}}), ohrani svoj pogled: znotraj njega premik in povečava premakneta celoten list. Pogledno okno, ki je izklopljeno, ni mogoče vnesti.
:::

## Označite pogled z imenom

Naslov pogleda pod poglednim oknom lahko prikaže ime pogleda poglednega okna in ga sledi:

1. Dajte pogledu ime: izberite obrob poglednega okna in izpolnite {{ui:Ime pogleda}} v {{ui:Lastnosti}} — ali shranite pogled na zavihku {{ui:Model}} z {{cmd:NAMEDVIEW}} in, z izbranim poglednim oknom, vpišite `VPVIEW`, `V` in ime pogleda: pogledno okno prikaže ta pogled in prevzame njegovo ime.
2. Vpišite `VIEWLABEL` (`VL`) in pritisnite {{key:Enter}}, nato kliknite, kamor naj gre oznaka ({{key:Enter}} jo postavi pod spodnji levi vogal poglednega okna).

Ko se ime pogleda spremeni, se oznaka spremeni z njim, v istem koraku razveljavitve.

## Zamrznite sloj v enem poglednem oknu

Če želite skriti sloj v enem poglednem oknu, ne pa v drugih (na primer pohištvo v podrobnosti):

1. Izberite obrob poglednega okna ali delajte znotraj njega (dvojni klik).

Plošča {{ui:Sloji}} dobi na vsaki vrstici še en gumb, vrstica nad seznamom pa to pove.

2. Kliknite ta gumb v vrstici sloja.

Sloj izgine samo iz tega poglednega okna. Ponovno kliknite, da ga odmrznete; {{key:Mod+Z}} razveljavi katerokoli dejanje. Za več slojev ali poglednih oken naenkrat vpišite `VPLAYER`: `F` (zamrzni) ali `T` (odmrzni), imena slojev (`A-*` vzame vsak sloj, ki se začne z A-), nato `C` (trenutni), `A` (vsi) ali `S` (izberi). `VPLAYER` `V` (Vpvisdflt) izbere sloje, ki so v novih poglednih oknih na začetku zamrznjeni.

## Več listov

Vsak {{ui:+}} doda drug list (`Layout2`, `Layout3` …) s sledečo številko lista. Če želite izbrisati odprti list, pritisnite {{key:Esc}} in kliknite {{ui:Izbriši ta list}} v desni plošči. Brez vprašanja se zbriše; {{key:Mod+Z}} ga vrne.

List izrišete z {{ui:Izriši ta list}} ali {{key:Mod+P}}; glejte [Izris v PDF](topic:plot-pdf).

## Pogoste napake

- **Pogledno okno ne prikazuje ničesar.** Model je prazen ali je pogled usmerjen drugam. Izberite obrob in kliknite {{ui:Pokaži celoten model}}.
- **Seznam meril kaže samo razmerja in nobenih čevljevih ali palčnih meril.** Na zavihku {{ui:Model}} nastavite {{ui:Enote}} na {{ui:Palci}} ali {{ui:Čevlji}}.
- **1:100 izgleda desetkrat preveliko ali premajhno.** Enote risbe so napačne. Nastavite {{ui:Enote}} na to, kar ena enota resnično pomeni.
- **Klik na tloris znotraj poglednega okna ne izbere ničesar.** Na listu izberete objekte lista. Najprej dvakrat kliknite znotraj poglednega okna, da delate na tlorisu prek njega.
- **Kliki zunaj poglednega okna ne naredijo nič.** Ste znotraj poglednega okna: dvakrat kliknite zunaj njega ali vpišite `PS`, da spet delate na listu.
- **„Pogledna okna gredo na izris. Najprej odprite zavihek lista (ali ga naredite z LAYOUT).“** {{cmd:MVIEW}} deluje samo na zavihku lista.
