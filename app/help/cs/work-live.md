---
title: Společná práce na jednom výkresu s Live TeamWork
summary: Co se mění v CadCraft, když jste v relaci Live TeamWork z CadCraft Studio: kurzory a výběry ostatních, objekty, které někdo upravuje, zámky hostitele, vaše vlastní zpět a připojení z prohlížeče na stejné síti.
keywords: live, live teamwork, studio live, společně, spolupráce, společná úprava, relace, sdílet živě, připojit, kurzor, podržení, úprava, zámek, livelock, liveunlock, livehold, podržet vrstvu, podržet oblast, visací zámek, zpět, hostitel, asistent, stejný soubor, mnoho lidí, pomalé, limit, kdo změnil, poslední úpravy, záznam úprav
from: 0497d2a3
---

## Co se naučíte

Co vidíte a co se stane s vašimi úpravami, když na jednom výkresu pracuje několik lidí současně. CadCraft Studio spouští a připojuje relaci Live TeamWork (Sdílet živě, Připojit); tato stránka se týká samotného výkresu.

## Všichni kreslí najednou

Kreslete a upravujte jako obvykle. Vaše vlastní úpravy se zobrazí hned, ještě před tím, než je ostatní dostanou, a jejich se na vaší obrazovce objeví chvíli poté, co je provedou. Fungují všechny příkazy: kreslení, úpravy, vrstvy, bloky, listy, kóty, vazby.

Dva lidé mohou změnit tentýž objekt. Když měníte různé věci, například barvu a koncový bod jedné úsečky, obě změny se zachovají. Když měníte tutéž věc, vyhrává pozdější změna.

Jen vaše zůstává: aktuální vrstva, barva a výška textu pro nové objekty, vaše nastavení kót, váš pohled, rozdělená obrazovka a UCS. Výkres je sdílený; to, jak se na něj díváte, sdílené není.

## Ostatní lidé na vašem výkresu

- **Kurzory:** ukazatel každého člověka se zobrazuje s jeho jménem ve vlastní barvě a s příkazem, který spouští. Vidíte kurzory lidí, kteří pracují poblíž toho, co je na vaší obrazovce.
- **Výběry:** co někdo vybral, je ohraničeno jeho barvou.
- **Právě se upravuje:** objekt, který někdo vybral, nese popisek, například „Ana upravuje“. Stále můžete změnit jeho barvu nebo jej přesunout, ale nemůžete jej smazat, rozložit ani přepsat, dokud jej nepustí. Výběr objektu vám řekne, kdo jej drží.
- **Kdo to změnil naposledy:** vyberete-li jeden objekt, který v této relaci změnil někdo jiný, příkazový řádek řekne, kdo, a co bylo změněno („Ben to změnil naposledy: CIRCLE.“). Panel Živě v CadCraft Studio vypisuje každou poslední úpravu pod {{ui:Poslední úpravy}}. Nic z toho se neukládá do výkresu: trvá jen tak dlouho jako relace.

## Podržte vrstvu nebo oblast, dokud na ní pracujete

Na velkém výkresu s několika lidmi řekněte, která část je prozatím vaše:

1. Napište `LIVEHOLD` a stiskněte {{key:Enter}}.
2. Zvolte `L` a napište název vrstvy (Enter ponechá aktuální vrstvu), nebo zvolte `A` a vyberte dva rohy oblasti.
3. Úpravy ostatních na této vrstvě nebo na objektech v této oblasti se vrátí zpět a jim se oznámí, že na tom pracujete. Vaši oblast vidíte jako přerušovaný rámeček; ostatní ji vidí ve vaší barvě s vaším jménem a vrstvy, které držíte, jsou vypsány vlevo nahoře v jejich výkresu.
4. `LIVEHOLD`, pak `R`, uvolní vše, co držíte. Opuštění relace to také uvolní.

Podržet může kdokoli v relaci, včetně hostitele; zámky hostitele platí navíc. Podržení se nikdy neukládá do souboru.

## Když se úprava vrátí zpět

Kopie výkresu u hostitele kontroluje každou úpravu. Některé nemohou projít, a CadCraft je vrátí zpět na vaší obrazovce a na příkazovém řádku řekne proč, například:

- někdo smazal objekt, nebo vrstvu či blok, který potřebuje, těsně před vámi;
- někdo na tomto objektu pracuje, nebo drží jeho vrstvu nebo oblast, ve které je;
- hostitel jej zamkl;
- blok, který vkládáte, byl vyčištěn, nebo vrstva, kterou mažete, má stále objekty.

## Zpět vrací vaši vlastní práci

{{key:Mod+Z}} a {{ui:Zpět}} vrátí zpět váš poslední příkaz celý a práci ostatních nechají být. Pokud od té doby někdo změnil tutéž věc, nic se nevrátí zpět a příkazový řádek řekne, kdo ji změnil. {{key:Mod+Y}} provede akci znovu.

## Zámky (hostitel)

Hostitel může chránit objekty nebo celou vrstvu, aby je nikdo neměnil, včetně hostitele, dokud nebudou odemčeny:

1. Vyberte objekty, pak napište `LIVELOCK` a stiskněte {{key:Enter}}. Nebo napište `LIVELOCK` bez výběru a zvolte `L`, abyste zamkli vrstvu podle názvu: objekty přidané na tuto vrstvu později jsou zamčeny také.
2. Zamčené objekty se kreslí přerušovaně s popiskem „Zamčeno hostitelem“ na obrazovce všech.
3. `LIVEUNLOCK` je odemkne stejným způsobem.

Zámky patří relaci: končí, když skončí, a nikdy se neukládají do souboru.

## Připojení ke stejnému souboru

Pokud jste otevřeli přesně ten soubor, který otevřel hostitel (ze sdílené složky nebo ze stejné kopie), připojte se ze svého okna CadCraft v CadCraft Studio: otevřete panel {{ui:Užitné}} a použijte {{ui:Připojit se zde}} s kódem hostitele. Přenášejí se jen změny provedené od chvíle, kdy je hostitel otevřel, takže velký výkres je hned připraven. Pokud je váš soubor jiný, výkres hostitele nahradí ten váš na obrazovce (váš soubor zůstane beze změny). Funguje to jen tehdy, dokud se váš výkres od jeho otevření nezměnil.

## Asistenti v živé relaci

Asistent připojený k vašemu oknu CadCraft (viz nápověda o práci s AI asistenty) se připojí do relace jako vlastní účastník, který je všem zobrazen jako „Asistent (přes <vaše jméno>)“. Hostitel jej vpustí stejně jako člověka; asistent hostitele se připojí hned. Jeho změny mají vlastní zpět: vaše {{key:Mod+Z}} vrátí vaši práci, zpět asistenta vrátí jen jeho vlastní. Relaci opustí, když jej odpojíte nebo odejdete, a v relaci může pracovat jen tehdy, dokud můžete upravovat.

## Připojení z prohlížeče

Člen týmu bez Studio může naskenovat obrázek pod kódem hostitele telefonem, tabletem nebo počítačem na stejné síti. CadCraft se otevře v prohlížeči, na příkazovém řádku se zeptá na vaše jméno a naplní se výkresem hostitele, jakmile vás hostitel vpustí. Pozvánkový odkaz umožní připojit se z jiné sítě: hostitel potřebuje místo Team Cloud Plan pro aplikaci, všichni ostatní se připojují zdarma, a odkaz funguje jen tehdy, je-li relace hostitele otevřená.

## Mnoho lidí na jednom výkresu

Každá úprava jde ke všem v relaci, takže čím je lidí víc, tím déle každá změna dorazí ke každému z nich, a pomalejší notebooky a připojení zaostávají jako první. Obvyklá velikost relace je 20 lidí; hostitel může pro jednu relaci povolit více (viz nápověda o společné práci živě). Pokud výkres s mnoha lidmi působí pomalu, pomůže méně lidí, méně těch, kteří upravují ve stejnou chvíli, nebo lepší připojení.

## Když relace skončí

Výkres ukládá jen hostitel. Když hostitel relaci ukončí, všichni ostatní si ponechají neuloženou kopii: uložte ji, chcete-li ji zachovat.

:::note
Něco, co bylo vráceno zpět, se na vaší obrazovce kreslí nad okolní objekty, dokud výkres znovu neotevřete. Šrafy a vyplněné objekty, které se překrývají, mohou vypadat jinak než kopie hostitele; výkres samotný je stejný.
:::
