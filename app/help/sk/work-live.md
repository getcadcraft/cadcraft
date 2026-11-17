---
title: Práca na jednom výkrese spoločne s Live TeamWork
summary: Čo sa mení v CadCraft počas relácie Live TeamWork v CadCraft Studio: kurzory a výbery iných ľudí, objekty, ktoré niekto upravuje, zámky hostiteľa, vaše vlastné späť a pripojenie z prehliadača v tej istej sieti.
keywords: live, live teamwork, studio live, spolu, spolupracovať, spoločná úprava, relácia, zdieľať naživo, pripojiť, kurzor, držaný, úprava, zámok, livelock, liveunlock, livehold, podržať vrstvu, podržať oblasť, visiaci zámok, späť, hostiteľ, asistent, rovnaký súbor, veľa ľudí, pomalé, limit, kto zmenil, nedávne úpravy, záznam úprav
from: 0497d2a3
---

## Čo sa naučíte

Čo vidíte a čo sa stane s vašimi úpravami, keď na jednom výkrese pracuje súčasne viacero ľudí. CadCraft Studio spúšťa a pripája reláciu Live TeamWork (Zdieľať naživo, Pripojiť); táto stránka sa týka samotného výkresu.

## Všetci kreslia naraz

Kreslite a upravujte ako obvykle. Vaše vlastné úpravy sa zobrazia hneď, ešte predtým, ako ich ostatní dostanú, a ich úpravy sa na vašej obrazovke objavia chvíľu po tom, ako ich urobia. Funguje každý príkaz: kreslenie, úprava, hladiny, bloky, listy, kóty, väzby.

Dvaja ľudia môžu zmeniť ten istý objekt. Keď zmeníte rôzne veci, napríklad farbu a koncový bod jednej úsečky, obe zmeny sa zachovajú. Keď zmeníte tú istú vec, vyhrá neskoršia zmena.

Len vaše zostáva: aktuálna hladina, farba a výška textu pre nové objekty, vaše nastavenia kót, váš pohľad, rozdelená obrazovka a UCS. Výkres je zdieľaný; to, ako sa na neho pozeráte, zdieľané nie je.

## Ostatní ľudia na vašom výkrese

- **Kurzory:** ukazovateľ každého človeka sa zobrazuje s jeho menom vo vlastnej farbe a s príkazom, ktorý spúšťa. Vidíte kurzory ľudí, ktorí pracujú blízko toho, čo je na vašej obrazovke.
- **Výbery:** čo niekto vybral, je orámované jeho farbou.
- **Upravuje sa:** objekt, ktorý niekto vybral, nesie štítok ako "Ana upravuje". Stále môžete zmeniť jeho farbu alebo ho posunúť, ale nemôžete ho zmazať, rozložiť ani znova zadať, kým ho neuvoľní. Ak ho vyberiete, dozviete sa, kto ho drží.
- **Kto to zmenil naposledy:** vyberte jeden objekt, ktorý v tejto relácii zmenil niekto iný, a riadok príkazov povie, kto a čo bola zmena ("Ben to zmenil naposledy: CIRCLE."). Panel Naživo v Studio uvádza každú nedávnu úpravu pod {{ui:Nedávne úpravy}}. Nič z toho sa neukladá do výkresu: trvá iba toľko, ako relácia.

## Podržte hladinu alebo oblasť, kým tam pracujete

Na veľkom výkrese s viacerými ľuďmi povedzte, ktorá časť je zatiaľ vaša:

1. Napíšte `LIVEHOLD` a stlačte {{key:Enter}}.
2. Zvoľte `L` a napíšte názov hladiny (Enter ponechá aktuálnu hladinu), alebo zvoľte `A` a vyberte dva rohy oblasti.
3. Úpravy iných ľudí na tejto hladine alebo na objektoch v tejto oblasti sa vrátia späť a dostanú oznam, že tam pracujete. Vašu oblasť vidíte ako prerušovaný rám; ostatní ju vidia vo vašej farbe s vaším menom a hladiny, ktoré držíte, sú vypísané v ľavom hornom rohu ich výkresu.
4. `LIVEHOLD` a potom `R` uvoľní všetko, čo držíte. Opustenie relácie to uvoľní tiež.

Držať môže ktokoľvek v relácii vrátane hostiteľa; zámky hostiteľa platia navyše. Držanie sa nikdy neukladá do súboru.

## Keď sa úprava vráti späť

Kópia výkresu hostiteľa kontroluje každú úpravu. Niektoré sa nemôžu zapísať a CadCraft ich vráti späť na vašej obrazovke a na riadku príkazov napíše dôvod, napríklad:

- niekto zmazal objekt alebo hladinu či blok, ktoré potrebuje, tesne pred vami;
- niekto upravuje ten objekt alebo drží jeho hladinu či oblasť, v ktorej je;
- hostiteľ ho zamkol;
- blok, ktorý umiestňujete, bol vyčistený, alebo hladina, ktorú mažete, má ešte na sebe objekty.

## Späť vráti späť iba vašu prácu

{{key:Mod+Z}} a {{ui:Späť}} vrátia späť váš posledný príkaz celý a prácu ostatných nechajú na pokoji. Keď niekto odvtedy zmenil tú istú vec, nič sa nevráti späť a riadok príkazov povie, kto to zmenil. {{key:Mod+Y}} znova vykoná.

## Zámky (hostiteľ)

Hostiteľ môže chrániť objekty alebo celú hladinu, aby ich nikto nemenil, vrátane samotného hostiteľa, kým sa neodomknú:

1. Vyberte objekty, potom napíšte `LIVELOCK` a stlačte {{key:Enter}}. Alebo napíšte `LIVELOCK` bez výberu a zvoľte `L`, aby ste zamkli hladinu podľa názvu: objekty pridané na túto hladinu neskôr sú zamknuté tiež.
2. Zamknuté objekty sa kreslia prerušovane s označením "Zamknuté hostiteľom" na obrazovke každého.
3. `LIVEUNLOCK` ich odomkne rovnako.

Zámky patria relácii: končia, keď ona skončí, a nikdy sa neukladajú do súboru.

## Pripojenie k rovnakému súboru

Ak ste otvorili presne ten súbor, ktorý otvoril hostiteľ (zo zdieľaného priečinka alebo z tej istej kópie), pripojte sa z vlastného okna CadCraft v Studio: otvorte panel {{ui:Live}} a použite {{ui:Pripojiť sem}} s kódom hostiteľa. Prenášajú sa iba zmeny urobené od chvíle, keď ho hostiteľ otvoril, takže veľký výkres je pripravený hneď. Ak je váš súbor iný, výkres hostiteľa nahradí ten váš na obrazovke (váš súbor zostane, aký je). Funguje to iba dovtedy, kým sa váš výkres od jeho otvorenia nezmenil.

## Asistenti v relácii naživo

Asistent pripojený k vášmu oknu CadCraft (pozri pomoc o práci s AI asistentmi) sa pripojí do relácie ako vlastný účastník, zobrazený všetkým ako "Asistent (cez <vaše meno>)". Hostiteľ ho pustí dnu, rovnako ako človeka; vlastný asistent hostiteľa sa pripojí hneď. Jeho zmeny majú vlastné späť: váš {{key:Mod+Z}} vráti späť vašu prácu a späť asistenta vráti späť iba jeho vlastnú. Opustí reláciu, keď ho odpojíte alebo odídete, a v relácii môže pracovať iba vtedy, keď môžete upravovať.

## Pripojenie z prehliadača

Člen tímu bez Studio môže naskenovať obrázok pod kódom hostiteľa telefónom, tabletom alebo počítačom v tej istej sieti. CadCraft sa otvorí v prehliadači, na riadku príkazov sa opýta na vaše meno a po tom, čo vás hostiteľ pustí dnu, sa naplní výkresom hostiteľa. Odkaz s pozvánkou umožní niekomu pripojiť sa z inej siete: hostiteľ potrebuje miesto v Team Cloud Plan pre aplikáciu, všetci ostatní sa pripájajú zdarma a odkaz funguje iba dovtedy, kým je relácia hostiteľa otvorená.

## Veľa ľudí na jednom výkrese

Každá úprava ide ku všetkým v relácii, takže čím je ľudí viac, tým dlhšie trvá, kým sa každá zmena dostane ku každému z nich, a pomalšie notebooky a pripojenia zaostávajú ako prvé. Obvyklá veľkosť relácie je 20 ľudí; hostiteľ môže pre jednu reláciu povoliť viac (pozri pomoc o práci spoločne naživo). Ak sa výkres pri veľa ľuďoch zdá pomalý, pomôže menej ľudí, menej z nich upravujúcich v tom istom okamihu alebo lepšie pripojenie.

## Keď relácia skončí

Výkres ukladá iba hostiteľ. Keď hostiteľ ukončí reláciu, ostatní si ponechajú neuloženú kópiu: ak ju chcete zachovať, uložte ju.

:::note
Niečo vrátené späť sa na vašej obrazovke kreslí navrchu objektov okolo, kým znova neotvoríte výkres. Šrafovania a vyplnené objekty, ktoré sa prekrývajú, môžu vyzerať inak ako kópia hostiteľa; výkres sám je rovnaký.
:::
