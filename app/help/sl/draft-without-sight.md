---
title: Risanje brez vida
summary: Vklopite Dostop in CadCraft vsak ukaz in rezultat pove prek bralnika zaslona, opiše risbo in to, kar je blizu kazalke, omogoča premikanje kazalke s tipkovnico, predvaja zvok za vsako lovljenje in ročico ter sprejema ukaze z glasom, kjer to vaš brskalnik zmore na vašem računalniku.
keywords: dostopnost, bralnik zaslona, slepota, slabovidnost, NVDA, VoiceOver, JAWS, Orca, tipkovna kazalka, glasovni ukazi, govor, zvoki, zvoki lovljenja, opiši risbo, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Dostop** vam omogoča risanje, ne da bi videli zaslon. Je izklopljen, dokler ga ne vklopite, da ga kdo ne dobi po naključju.

## Vklopite ga

Odprite **Nastavitve** (zobnik ali Ctrl+,), poiščite **Risanje brez vida** in izberite **Vklopljeno**. Ali vpišite `ACCESS` v ukazno vrstico in odgovorite `On`. Ostane zapomnjen na tem računalniku.

Z vklopljenim Dostopom:

- **Vse, kar pove ukazna vrstica, se izgovori** prek bralnika zaslona: kaj ste vpisali, poziv, odgovor in vsaka napaka. CadCraft uporablja lastna vljudna in nujna živa področja, zato bralnik zaslona, ki bere živa področja, ne potrebuje nastavitev. Napake in preklici prekinejo; vse drugo počaka na vrsto.
- **Do risbe lahko pridete.** Pritisnite Tab, dokler ne slišite „Risba“, ali pritisnite Shift+Tab iz ukazne vrstice. To je področje, ki tipke posreduje CadCraftu.

## Tipke na risbi

| Tipka | Kaj naredi |
|---|---|
| Puščične tipke | Premaknejo tipkovno kazalko. Korak je približno stotina tega, kar kaže zaslon, zaokrožen na 1, 2 ali 5. Shift premakne desetkrat dlje, Ctrl pa desetino. |
| Enter | Izbere točko pod kazalko, točno kot bi jo klik. |
| Space | Pritisne Enter v ukazni vrstici: konča LINE, vzame privzeto. |
| Tab, Shift+Tab | Skoči na naslednjo ali prejšnjo točko lovljenja blizu kazalke, najbližjo najprej. |
| G | Preide skozi ročice izbranih objektov. |
| D | Opiše risbo: koliko objektov, katere vrste, kako velike, kaj je izbrano. |
| W | Pove, kje je kazalka in kako daleč je od zadnje točke. |
| N | Pove, kaj je blizu kazalke, najbližje najprej, z razdaljo in stranjo. |
| S | Opiše izbrane objekte. |
| R | Ponovno pove zadnjo stvar. |
| V | Vklopi ali izklopi glas. |
| / | Gre v ukazno vrstico. |
| ? | Našteje te tipke. |

Premikanje s tipkami pove, kam ste prišli. Kadar ukaz čaka na točko, pove tudi, kako daleč in v kateri smeri ste od zadnje točke, na primer „2400 od zadnje točke, desno, pod kotom 0 stopinj“.

## Ukazi

- {{cmd:ACCESS}} vklopi ali izklopi Dostop, zvoke lovljenja in glas ter pove stanje.
- {{cmd:DESCRIBE}} pove, kaj risba vsebuje.
- {{cmd:WHEREAMI}} pove, kje je kazalka.
- {{cmd:NEARBY}} pove, kaj je blizu kazalke.
- {{cmd:SAYSEL}} pove, kaj je izbrano, en stavek na objekt.
- {{cmd:VOICE}} vklopi ali izklopi ukaze z glasom.

Teh pet bere risbo in izpiše odgovor; ničesar ne spremenijo.

## Zvoki za lovljenje in ročice

V Nastavitvah vklopite **Zvoki za lovljenje in ročice**. Vsaka vrsta lovljenja ima svojo višino in zvok, da lahko ločite krajišče od razpolovišča, središča, presečišča in ostalih, ročica pa ima dvojni klik. Zvok se premika levo ali desno, da sledi kazalki po zaslonu. Zvoki nastajajo na vašem računalniku; ničesar se ne prenese.

## Ukazi z glasom

V Nastavitvah vklopite **Ukazi z glasom**. Povejte ime ukaza („line“, „circle“, „move“) in nato števila tako, kot bi jih prebrali: „točka tristo vejica štiristo“, „razdalja tisoč dvesto“, „kot štirideset pet“. „Enter“, „cancel“, „undo“ in „redo“ naredijo, kar pomenijo. Slišano se pove nazaj, fraza, ki ni ukaz, pa je prijavljena, ne ugibana.

**Kje se govor prepoznava.** CadCraft nima lastne storitve za govor in nikamor ne pošilja zvoka. Brskalnika prosi, naj prepozna govor na tem računalniku. Če to zmore, je izbira **V tem računalniku** in zvok ne zapusti računalnika. Če ne, glas ostane izklopljen, razen če izberete **Spletna storitev brskalnika**, ki brskalniku dovoli, da zvok pošlje storitvi za govor njegovega proizvajalca. Nastavitve pred vašo odločitvijo povedo, katera velja.

## Česa še ne zmore

- Dostop ima samo CadCraft. Ostalih sedem aplikacij sledi z enakimi tipkami in zvoki.
- Besedilo v risbi (opomba, ime bloka) se prebere, kot je napisano; nikoli se ne vzame kot ukaz.
- Preizkušeno je bilo s sintetičnimi preverjanji in preizkusi brskalnika; ročna preverjanja z NVDA, VoiceOver ter slepim ali slabovidnim preizkuševalcem so še pred nami. Če ga preizkusite, nam sporočite, kaj manjka.
