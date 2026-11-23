---
title: Dajte možnostim ukazov lastne črke
summary: Na možnosti ukazov odgovarjajte s črkami, ki jih izberete, v katerem koli jeziku, iz ene besedilne datoteke, ki jo lahko urejate, uvažate in izvažate.
keywords: črke možnosti, optionkeys, optkeys, ključ možnosti, ključ, preslikava, po meri, jezik, prevod možnosti, kratka oblika, uvoz, izvoz, dvoumno, polarno, matrika, P, PO, jezik, prevedi možnosti
from: 7c8328c6
---

## Kaj boste naučili

Kako spremeniti črke, ki jih vtipkate za odgovor na možnosti ukaza. Na primer, {{cmd:ARRAY}} vpraša `[Rectangular/POlar]` in sprejme `PO` za Polarno; lahko naredite, da enako naredita `P` ali katere koli druge črke, če želite v svojem jeziku.

## Kako odgovarjate na možnosti

Ko ukaz prikaže možnosti v oglatih oklepajih, so velike črke tiste, ki jih vtipkate: `POlar` je `PO`, `eXit` je `X`.

Vtipkate lahko tudi manj črk. Če vtipkano ustreza samo eni prikazani možnosti, CadCraft jo vzame: pri `[Rectangular/POlar]` je sama `P` Polarno. Če ustreza dvema, ukazna vrstica ju navede in vpraša znova:

```
C could be COUnt, COLumns. Type more letters.
```

Števila nikoli niso ugibana, zato je vtipkana razdalja ali število vedno prebrano kot število.

## Dodajte lastne črke

Vsak ukaz ohrani svoje vgrajene črke. Svoje dodate čez te, zato vaš seznam vsebuje samo to, kar ste spremenili.

1. Odprite {{ui:Nastavitve}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Črke možnosti}} in kliknite {{ui:Uredi…}}. Ali vnesite {{cmd:OPTIONKEYS}} in pritisnite {{key:Enter}}.
2. Pod {{ui:Ukaz}} izberite ukaz, na primer `ARRAY`. Seznam vsebuje vsak ukaz, ki zahteva možnosti, in začne pri ukazu, ki ste ga nazadnje uporabili.
3. Pod {{ui:Možnost}} izberite možnost. Vsaka prikaže svoje vgrajene črke v oklepajih, na primer `POlar (PO)`.
4. V {{ui:Vaše črke}} vtipkajte črke, ki jih želite, na primer `P`, in kliknite {{ui:Dodaj (A)}}.
5. Možnost se zdaj pojavi pod {{ui:Vaše črke}} s svojimi vgrajenimi črkami in vašimi. Kliknite {{ui:Shrani}}.

Zaženite {{cmd:ARRAY}}, izberite predmet in pritisnite {{key:Enter}}. Poziv pokaže vaše črke za možnostjo, `POlar (P)`, in `P` odgovori nanjo.

Da jo odstranite, kliknite x na koncu njene vrstice in nato {{ui:Shrani}}. Možnost se vrne samo na svoje vgrajene črke.

## Črke, ki jih ne morete uporabiti

Urejevalnik zavrne črke, ki bi skrile nekaj, kar ukazna vrstica že prebere, in pove zakaj:

- vgrajene črke druge možnosti istega ukaza (`R` za Polarno v `ARRAY`, kjer je `R` Pravokotna);
- beseda za lovljenje predmeta s tremi ali več črkami, kot `END`, `MID` ali `CEN`, ter besedi `ALL` in `LAST`;
- iste črke za dve različni možnosti enega ukaza.

Dokler je karkoli prikazano rdeče, je {{ui:Shrani}} izklopljen: popravite vrstico ali jo odstranite, in gumb se spet vklopi. Vgrajene črke pozivov imajo vedno prednost pred vašimi, zato vaš seznam ne more preprečiti vgrajenemu odgovoru, da deluje. Črke, ki so tudi ime ukaza, kot `L` ali `C`, so v redu: pri pozivu za možnost ukazna vrstica bere odgovor, ne začenja ukaza.

Možnosti, navedene za ukaz, prihajajo iz ukazov, ki delijo njegove pozive, zato včasih ukaz navede možnost, ki jo zahteva samo v nekaterih primerih.

## Ena izbira za vsak ukaz

Pod {{ui:Ukaz}} izberite {{ui:Vsi ukazi}}. Možnosti so potem vse možnosti, ki jih ima kateri koli ukaz, na primer eXit ali Undo. Črke, ki jih tam dodate, odgovorijo na to možnost, kjer koli jo ukaz ponudi. Črke, dodane za en ukaz, zmagajo nad temi.

## Črke v vašem jeziku

Črke so lahko iz katere koli abecede, zato lahko odgovarjate na možnosti, ne da bi preklapljali tipkovnico: dodajte `З` za Close pod {{ui:Vsi ukazi}}, ali `П` za POlar v `ARRAY`.

CadCraft prihaja samo z angleškimi črkami. Vaš seznam je način, kako vi, vaša pisarna ali ljudje, ki delijo vaš jezik, nastavite ostalo, in {{ui:Izvozi}} naredi datoteko, ki jo lahko posredujete naprej.

## Uredi kot besedilo

{{ui:Uredi kot besedilo}} v urejevalniku pokaže isti seznam kot vrstice besedila, eno na možnost, kar je tudi tisto, kar {{ui:Izvozi}} shrani:

```
ARRAY.PO,  P
*.X,       Q
```

Vsaka vrstica je ukaz, pika, vgrajene črke možnosti, vejica in vaše črke. Zvezdica namesto ukaza pomeni vsak ukaz. Vrstica, ki se začne z `;`, je opomba.

## Kaj ostane enako

- Vgrajene črke delujejo poleg vaših.
- Rutine in gumbi orodne vrstice še vedno uporabljajo vgrajene črke, zato nič, kar ste naložili, ne preneha delovati. Če želite sami vtipkati vgrajene črke, kjer bi vaše ovirale, pred njimi postavite podčrtaj: `_PO`.
- Kratko ime ukaza je nekaj drugega: glejte [Uredite aliase ukazov](topic:command-aliases).

## Vrstice, ki jih CadCraft zavrne

Ko urejate kot besedilo ali uvažate datoteko, urejevalnik navede vsako težavo s številko vrstice:

- ukaz ne obstaja (kratko ime ukaza je v redu: `AR.PO` se bere kot `ARRAY.PO`);
- vrstica ni oblike `COMMAND.OPTION, LETTERS`;
- črke imajo presledek ali znak v sebi (samo črke in številke, največ 16);
- iste črke odgovarjajo na dve različni možnosti enega ukaza.

## Uvoz in izvoz

{{ui:Izvozi}} shrani vaše črke kot besedilno datoteko, da jo ohranite ali dasta nekomu drugemu. {{ui:Uvozi…}} prebere takšno datoteko. Obe sta v urejevalniku in v {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Črke možnosti}}.

V nastavitvah {{ui:Uvozi…}} nadomesti vašo datoteko s tisto, ki jo izberete. Datoteka z vrstico, ki se spopade ali je ni mogoče uporabiti, se ne sprejme; odprite urejevalnik in jo tam uvozite, da vidite vrstice. V urejevalniku samo napolni polje: nič se ne spremeni, dokler ne kliknete {{ui:Shrani}}.

## Ponovno naložite ali odstranite

Vnesite {{cmd:REINIT}} in pritisnite {{key:Enter}}, da znova uporabite vašo datoteko. Da odstranite črko, izbrišite njeno vrstico in kliknite {{ui:Shrani}}.

## Vaše črke sledijo vašemu računu

Ko ste prijavljeni na getcadcraft.com, so vaše črke shranjene pri vašem računu. Odprite CadCraft v drugem brskalniku ali na drugem računalniku z istim računom in pridejo same od sebe; ukazna vrstica pokaže `Option letters from your account`. Če ste jih spremenili na dveh mestih, zmaga najnovejša kopija, prejšnja, ki jo je nadomestila, pa se ohrani enkrat.

{{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Črke možnosti}} pove, kje so. Če ste odjavljeni ali brez povezave, ostanejo v tem brskalniku in gredo na vaš račun, ko jih naslednjič shranite med prijavo.

Sorodno: [Uredite aliase ukazov](topic:command-aliases) · [Nastavitve CadCraft](topic:settings) · [Ukazi](topic:commands)
