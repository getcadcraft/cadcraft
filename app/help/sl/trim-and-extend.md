---
title: Prirezovanje in podaljševanje
summary: Prirežite črte nazaj tam, kjer jih križajo druge, in jih podaljšajte do drugih, po en kos naenkrat ali več hkrati z vlečenjem poti čez njih.
keywords: trimextendmode, okensko vlečenje, prirezi, podaljšaj, tr, ex, hitro prirezovanje, vlečenje, prostoročno, pot, ograja, sekanje, shift, rezalni robovi, robovi meje, edgemode, način, standardno, hitro, izbriši, predogled, stene, čiščenje
from: 25fbc5bd
---

## Kaj boste spoznali

Kako delujeta {{cmd:TRIM}} in {{cmd:EXTEND}} ter hitri načini uporabe: vlecite čez veliko kosov naenkrat, držite {{key:Shift}}, da preklapljate med prirezovanjem in podaljševanjem, in preden kliknete, vidite, kaj bo izginilo.

## Prirežite en kos

1. Narišite dolgo vodoravno črto in dve kratki črti čez njo.
2. Vnesite `TR` in pritisnite {{key:Enter}}. Zgodovina pravi `Current settings: Quick mode, edges: No extend`.
3. Postavite kazalec na dolgo črto med obema kratkima. Ta kos postane siv in črtkan: to bo odstranjeno.
4. Kliknite. Kos izgine.
5. Pritisnite {{key:Enter}}, da ukaz končate.

V hitrem načinu (privzeto) je vsak viden objekt rezalni rob, zato nikoli ne izbirate robov vnaprej. Kliknite kos, ki ga želite odstraniti. Objekt, ki ga nič ne križa, se izbriše v celoti, zgodovina pa to pove.

## Prirežite veliko kosov z enim vlečenjem

1. Narišite dolgo vodoravno črto in deset kratkih navpičnih črt čez njo.
2. Vnesite `TR` in pritisnite {{key:Enter}}.
3. Pritisnite miškin gumb nad dolgo črto, levo od prve navpične črte, in povlecite čez vseh deset nad dolgo črto.

Med vlečenjem je pot prikazana kot črtkana črta, vsak kos, ki ga pot prečka, pa postane siv. Spustite: vseh deset zgornjih kosov je prirezanih v enem koraku. Vnesite `U` in pritisnite {{key:Enter}}, da jih vse naenkrat vrnete.

:::tip
Lahko kliknete tudi dve prazni mesti: črta med njima deluje kot povlečena pot. Vnesite `F` (ograja), da namesto tega kliknete niz točk, nato pritisnite {{key:Enter}}.
:::

:::touch
Povlecite prst na enak način. Dotik na kos ga prireže.
:::

## Namesto tega podaljšajte, s Shift

1. Narišite navpično črto in pet kratkih vodoravnih črt na njeni levi, ki se ustavijo pred njo.
2. Vnesite `TR` in pritisnite {{key:Enter}}.
3. Držite {{key:Shift}}. Postavite kazalec na kratko črto: del, za katerega bi se podaljšala, je siv in črtkan.
4. Še vedno držite {{key:Shift}} in povlecite navzdol čez pet kratkih črt.

Vseh pet zdaj sega do navpične črte. {{key:Shift}} v {{cmd:EXTEND}} (`EX`) deluje obratno: klik podaljša, {{key:Shift}}+klik prireže. Extend podaljša konec, najbližji mestu, kjer kliknete, ali kjer pot seka.

## Prirežite znotraj okna

1. Vnesite `TR` in pritisnite {{key:Enter}}.
2. Vnesite `C` in pritisnite {{key:Enter}}.
3. Kliknite dva kota okoli kosov, ki jih odstranite.

Vsak kos, ki leži vsaj delno znotraj okna, je prirezan.

Če želite okno dobiti samo z vlečenjem, brez vnosa `C`: {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to trim and extend}} › {{ui:A window}}. Nato pritisk na prazno mesto in vlečenje nariše škatlo, vsak kos, ki ga dotakne, pa je prirezan (ali podaljšan pri {{cmd:EXTEND}} ali s {{key:Shift}}). {{ui:A path}} (privzeta vrednost) vrne prostoročno pot. Vrstica nastavitev na začetku TRIM pove, katera je vklopljena.

## Izberite rezalne robove (standardni način)

Včasih naj reže samo ena črta, na primer stena, ki jo križa veliko drugih črt.

1. Vnesite `TR` in pritisnite {{key:Enter}}.
2. Vnesite `O` (način) in pritisnite {{key:Enter}}, nato vnesite `S` (standardni) in pritisnite {{key:Enter}}.
3. Pri `Select cutting edges` kliknite robne črte (ali povlecite okno), nato pritisnite {{key:Enter}}. Pritisk na {{key:Enter}} brez izbora naredi vsak objekt za rob.
4. Kliknite ali povlecite čez kose, ki jih odstranite.

Samo izbrani robovi režejo, objekt, ki ga noben rob ne križa, pa ostane nedotaknjen. Način ostane do zaprtja strani; vnesite `O`, nato `Q`, da se vrnete v hitri način. {{cmd:TRIMEXTENDMODE}} ga nastavi pred začetkom, kot to stori spremenljivka istega imena drugje: `0` standardni, `1` hitri. `T` (rezalni robovi) izbere nove robove kadarkoli; pri {{cmd:EXTEND}} je to `B` (robovi meje).

## Robovi, ki bi dosegli

1. Vnesite `TR` in pritisnite {{key:Enter}}.
2. Vnesite `E` (rob) in pritisnite {{key:Enter}}, nato `E` (podaljšaj) in pritisnite {{key:Enter}}.

Zdaj rezalna črta ali lok, ki se ustavi prekratek, šteje, kot da bi šel naprej: kratka črta reže tam, kjer bi se križala, če bi bila daljša. Vnesite `E`, nato `N` (brez podaljšanja), da preklopite nazaj. To je isto kot EDGEMODE 1 in 0.

## Brisanje brez izhoda

Vnesite `R` (izbriši) in pritisnite {{key:Enter}}, izberite objekte za brisanje in pritisnite {{key:Enter}}. TRIM nadaljuje.

## Pogoste napake

- **Cela črta je izginila.** V hitrem načinu se objekt, ki ga nič ne križa, izbriše. Vnesite `U`, da ga vrnete, ali preklopite na standardni način (`O`, `S`).
- **„Tam ni česa prirezati: noben izbrani rob ne križa tega objekta.“** Standardni način reže samo na robovih, ki ste jih izbrali. Vnesite `T`, da jih spet izberete.
- **„V tej smeri ni meje.“** Podaljšanje ni našlo ničesar naprej. Kliknite bližje koncu, ki naj raste, ali vklopite `E` (rob, podaljšaj) za meje, ki se ustavijo prekratke.
- **Vlečenje je narisalo lasso namesto tega.** Vlečenje reže samo, ko TRIM ali EXTEND zahteva objekt. Brez teka ukaza izbere (glejte [Lasso izbira](topic:lasso-selection)).
- **Prirezati je mogoče samo črte, loke, krožnice in polilinije.** Najprej razstavite blok, da prirežete njegove črte.
