---
title: Atributy bloků
summary: Zobrazte a změňte hodnoty, které nese odkaz na blok, například číslo položky nebo výrobce, a zachovejte je při uložení kopie.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, razítko, úprava na místě, editor atributů, attdef, definovat atribut, bedit, editor bloků, bclose, atribut, atributy, attrib, značka, číslo položky, hodnota, neviditelný, konstantní, blok, vlastnosti, seznam, značka zařízení
from: 34d307c7
---

## Co jsou atributy

Atribut je pojmenovaná hodnota, která se pohybuje s odkazem na blok: číslo položky značky zařízení, název značky místnosti, požární odolnost dveří. Definice bloku říká, jaké atributy má (každý má **značku**, **výzvu**, **výchozí hodnotu** a místo, velikost a úhel svého textu). Každý odkaz na blok nese vlastní hodnoty.

Některé atributy jsou **neviditelné**: uchovávají data, například výrobce nebo model, ale nikdy se nekreslí. Některé jsou **konstantní**: u každého odkazu stejné, dané blokem.

## Odkud atributy přicházejí

- Bloky v souborech DWG a DXF, které otevřete, si ponechají své atributy, s hodnotami každého odkazu.
- Bloky, které vložíte příkazem {{cmd:INSERT}} a volbou {{ui:Soubor}}, si ponechají své. Viz [Vložení ze souboru nebo z knihovny](topic:insert-from-file-and-library).
- Položky knihovny přicházejí jako bloky s atributy: viditelné číslo položky a neviditelná data položky.
- Bloky, které vytvoříte sami: nejprve definujte atributy příkazem {{cmd:ATTDEF}} (níže), potom je vyberte spolu s ostatními objekty při tvorbě bloku.

## Definování atributů pro vlastní bloky

1. Nakreslete čáry bloku, například značku místnosti.
2. Zvolte {{ui:Bloky}} › {{ui:Více}} › {{ui:Definovat atribut}}, nebo napište `ATT` a stiskněte {{key:Enter}}.
3. Historie ukáže režimy (`Invisible=No Constant=No Preset=No`). Napište `I` (neviditelný), `C` (konstantní) nebo `P` (předvolba) pro přepnutí jednoho z nich a stiskněte {{key:Enter}}, až budou správně. Neviditelné hodnoty se uchovají, ale nekreslí se; konstantní má u každého odkazu stejnou hodnotu; předvolená se při vložení bloku nevyžaduje.
4. Napište značku (například `ROOM_NO`: velká písmena, bez mezer), výzvu (`Room number`) a výchozí hodnotu (`101`).
5. Klikněte, kam má hodnota přijít, a zadejte výšku a natočení. Značka se ve výkresu zobrazí.
6. Vytvořte blok příkazem {{cmd:BLOCK}} a vyberte čáry a definice atributů současně. Odkaz, který je nahradí, dostane výchozí hodnoty; každé nové {{cmd:INSERT}} je vyžádá.

Vybraná definice atributu zobrazí v {{ui:Vlastnosti}} {{ui:Značka}}, {{ui:Výzva}}, {{ui:Výchozí}} a režimy.

## Změna bloku: editor bloků

{{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit blok}} ({{cmd:BEDIT}}, `BE`) otevře blok samostatně: napište jeho název (nebo nejprve vyberte odkaz). Pruh nahoře říká, který blok upravujete. Kreslete, mažte a měňte jeho objekty obvyklými příkazy a přidávejte nebo měňte definice atributů. Potom klikněte na {{ui:Uložit blok}} (nebo napište {{cmd:BCLOSE}} a `S`): každý odkaz změnu ukáže a jedno {{key:Mod+Z}} ji vrátí celou. {{ui:Zahodit změny}} ({{cmd:BCLOSE}}, `D`) ponechá blok beze změny.

Při přidání, odebrání nebo změně definic atributů uložení také uvede všechny odkazy do souladu: hodnoty, které jste zadali, se zachovají, nový atribut dostane výchozí hodnotu, odebraný zmizí a každý atribut se vrátí tam, kam ho definice umísťuje. Historie uvede, kolik odkazů bylo aktualizováno.

## Úprava razítka přímo na místě (REFEDIT)

Razítko na listu často leží uvnitř bloku. Chcete-li změnit jeho čáry nebo texty, aniž byste opustili list:

1. Vyberte razítko, potom {{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit na místě}} (nebo napište {{cmd:REFEDIT}}).
2. Jeho obsah se stane běžnými objekty na svém místě; vše ostatní je ztlumeno a nelze to měnit.
3. Měňte, mažte nebo kreslete: nové objekty se stanou součástí bloku.
4. Klikněte na {{ui:Uložit blok}} v pruhu nahoře (nebo napište {{cmd:REFCLOSE}} a `S`). Každý odkaz ukáže změnu a jedno {{key:Mod+Z}} vrátí celou úpravu. {{ui:Zahodit}} ponechá blok beze změny.

Propojený výkres, dynamický blok nebo odkaz zvětšený jinak do šířky a do výšky nelze upravit na místě: použijte {{cmd:BEDIT}} (nebo otevřete propojený výkres).

:::note
Uložte nebo zahoďte v editoru bloků dříve, než uložíte výkres: soubor uložený při otevřeném editoru má blok ve stavu před úpravou.
:::

## Vyplňte je při umisťování bloku

1. Napište `I` a stiskněte {{key:Enter}}, napište název bloku a stiskněte {{key:Enter}}.
2. Klikněte, kam má přijít.
3. CadCraft se ptá na každou hodnotu, například `Enter Item number (ITEM) <>`. Napište hodnotu a stiskněte {{key:Enter}}, nebo stiskněte {{key:Enter}} pro ponechání výchozí hodnoty v lomených závorkách.

Hodnoty, které blok označuje jako předvolené, a konstantní se nevyžadují. Převezmou svou výchozí hodnotu.

## Zobrazení a změna hodnot

1. Klikněte na odkaz na blok.
2. V pravém panelu, pod {{ui:Atributy}}, má každá značka svou hodnotu. Neviditelné ukazují `hidden`.
3. Klikněte na hodnotu, napište novou a stiskněte {{key:Enter}}.

Výkres ukáže novou hodnotu okamžitě. Každá změna je jeden krok: {{key:Mod+Z}} ji vrátí.

**Editor atributů.** Dvojklik na odkaz s atributy (nebo {{cmd:EATTEDIT}}): dialog {{ui:Upravit atributy}} vypíše každou značku s výzvou a hodnotou. Napište nové hodnoty; kliknutím na řádek změníte {{ui:Výška}}, {{ui:Natočení}}, {{ui:Faktor šířky}}, {{ui:Zarovnání}}, {{ui:Vrstva}}, {{ui:Barva}} a {{ui:Neviditelný}} daného atributu jen pro tento odkaz. {{ui:Použít}} nechá dialog otevřený; {{ui:OK}} použije a zavře. Každé {{ui:Použít}} nebo {{ui:OK}} je jeden krok zpět.

**Na příkazovém řádku** se {{cmd:ATTEDIT}} ptá na každou hodnotu postupně: napište novou, nebo stiskněte {{key:Enter}} pro ponechání.

## Změna definic atributů (BATTMAN, ATTSYNC)

{{ui:Bloky}} › {{ui:Více}} › {{ui:Správce atributů}} ({{cmd:BATTMAN}}) vypíše atributy bloku: změňte značku, výzvu nebo výchozí hodnotu, zaškrtněte {{ui:Neviditelný}}, {{ui:Konstantní}} nebo {{ui:Předvolba}} a posouvejte je nahoru nebo dolů (podle pořadí, ve kterém se hodnoty ptají). Se zaškrtnutým {{ui:Aktualizovat odkazy (hodnoty zachovány)}} uvede {{ui:Použít}} do souladu také všechny odkazy; přejmenovaná značka si ponechá své hodnoty. Každé {{ui:Použít}} je jeden krok zpět.

{{cmd:ATTSYNC}} uvede odkazy do souladu s definicemi jejich bloků ručně: `S` vybere odkaz, `N` pojmenuje blok, `A` projde všechny bloky. Hodnoty se zachovají.

Hodnoty vlastních polí položky knihovny (její id, verze, licence a uvedení autora) se zobrazují, ale nelze je upravovat, aby kontrola aktualizací dál fungovala. Její číslo položky a množství můžete měnit vy.

## Výpis

Vyberte odkazy a napište `LI` (pro {{cmd:LIST}}). Historie ukáže každý atribut jako `TAG = hodnota`, s `(neviditelný)` nebo `(konstantní)` tam, kde to platí.

## Přesun, otáčení a rozložení

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} a {{cmd:MIRROR}} hodnoty zachovají; text se pohybuje s blokem a zůstává čitelný.
- {{cmd:EXPLODE}} promění viditelné atributy v prostý text s jejich hodnotami. Neviditelné se zahodí.

## Ukládání

Uložený DWG i uložený DXF zachovají každý atribut: definice každého bloku (včetně neviditelných, konstantních a předvolených) a hodnoty každého odkazu. Jiné CAD programy je čtou jako běžné atributy bloku.

V DXF R12 se hodnota delší než 255 znaků zkrátí na 255 a historie to uvede.

## Časté chyby

- **Hodnota se ve výkresu nezobrazuje.** Je neviditelná, nebo prázdná. Neviditelné hodnoty se stále ukazují v pravém panelu.
- **Hodnota, kterou jsem napsal, šla na příkazový řádek.** Nejprve klikněte do pole hodnoty v pravém panelu.
