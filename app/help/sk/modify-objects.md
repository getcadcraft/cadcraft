---
title: Presun, kopírovanie, otočenie, mierka, zrkadlenie, natiahnutie a pole
summary: Rozmiestnite nábytok v miestnosti pomocou základných príkazov úpravy, základných bodov, zadávania vzdialeností a vrátenia späť.
keywords: presunúť, kopírovať, otočiť, mierka, zrkadliť, natiahnuť, pole, spojiť, matchprop, preniesť vlastnosti, painter, arrayrect, arraypolar, polárne pole, zmazať, rozložiť, späť, znova, základný bod, posunutie, úprava, zarovnať, rozmiestniť, rovnomerne rozmiestniť
from: 8eaeee6c
---

## Čo vytvoríte

Stôl s jednou stoličkou, skopírovanou okolo stola, otočenou, zrkadlenou a zmenenou veľkosťou. Pritom použijete {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} a {{cmd:UNDO}}.

## Nakreslite diely

1. Napíšte `REC`, stlačte {{key:Enter}}, napíšte `0,0`, stlačte {{key:Enter}} a potom napíšte `@1800,900` a stlačte {{key:Enter}}. Toto je stôl.
2. Napíšte `REC`, stlačte {{key:Enter}}, napíšte `300,-700`, stlačte {{key:Enter}} a potom napíšte `@450,450` a stlačte {{key:Enter}}. Toto je stolička pod stolom.
3. Kliknite na {{ui:Rozsah}}.

## Presun: základný bod, potom druhý bod

Každý presun, kopírovanie, otočenie a zmena mierky začína od **základného bodu**: bodu, ktorý sa nesie so sebou, alebo bodu, okolo ktorého sa otáča.

1. Kliknutím na stoličku ju vyberte.
2. Napíšte `M` a stlačte {{key:Enter}}. História hlási `Nájdené: 1`.
3. Pri výzve `Zadajte základný bod` uchopte ľavý horný roh stoličky (Koncový bod) a kliknite.
4. Pri výzve `Zadajte druhý bod` napíšte `@0,200` a stlačte {{key:Enter}}.

Stolička sa posunie nahor o 200, bližšie k stolu.

:::tip
Pri výzve `Zadajte základný bod` napíšte `D`, ak chcete namiesto toho zadať posunutie: CadCraft sa potom spýta `Zadajte posunutie` a vy napíšete, ako ďaleko do strany a nahor, napríklad `0,200` (znak `@` nie je potrebný).
:::

## Kopírovanie, koľkokrát chcete

1. Kliknite na stoličku.
2. Napíšte `CO` a stlačte {{key:Enter}}.
3. Uchopte ľavý dolný roh stoličky a kliknite ho ako základný bod.
4. Napíšte `@600,0` a stlačte {{key:Enter}}. Kópia sa objaví o 600 vpravo.
5. Znova napíšte `@600,0` a stlačte {{key:Enter}}. Druhá kópia sa objaví 1200 vpravo od pôvodnej.
6. Stlačením {{key:Enter}} ukončite príkaz.

{{cmd:COPY}} pokračuje, kým nestlačíte {{key:Enter}}. Každá kópia sa umiestni o vzdialenosť od základného bodu k bodu, ktorý zadáte. Bod so znakom `@` sa počíta od posledného zadaného bodu, ktorým je po prvej kópii bod tejto kópie, takže dvakrát `@600,0` dá kópie na 600 a 1200. Napíšte `U` a stlačte {{key:Enter}}, ak chcete vrátiť poslednú kópiu bez ukončenia príkazu.

Mali by ste vidieť tri stoličky v rade pod stolom.

:::tip
{{cmd:COPY}} slúži na kópie v jednom výkrese, umiestnené podľa základného bodu. Ak chcete objekty preniesť do iného výkresu alebo karty, alebo ich neskôr prilepiť, použite schránku: {{key:Mod+C}}, potom {{key:Mod+V}}. {{key:Mod+D}} vytvorí jednu kópiu, ktorá sa pohybuje spolu s kurzorom. Pozri [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste).
:::

## Zrkadlenie riadku na druhú stranu

1. Ťahom sprava doľava nakreslite okno prekríženia nad tromi stoličkami, bez dotyku stola.
2. Napíšte `MI` a stlačte {{key:Enter}}.
3. Pri výzve `Zadajte prvý bod osi zrkadlenia` uchopte stred ľavej strany stola (Stredový bod) a kliknite.
4. Pri výzve `Zadajte druhý bod osi zrkadlenia` uchopte stred pravej strany stola (Stredový bod) a kliknite.
5. Pri výzve `Zmazať zdrojové objekty? [Áno (Y)/Nie (N)] <N>` stlačte {{key:Enter}}, aby ste ich zachovali.

Mali by ste vidieť tri stoličky pod stolom a tri zrkadlené stoličky nad ním. Text vo zrkadlenom výbere zostane čitateľný: je umiestnený zrkadlovo, ale nie je napísaný odzadu.

## Otočenie stoličky

1. Kliknite na najpravejšiu stoličku pod stolom.
2. Napíšte `RO` a stlačte {{key:Enter}}.
3. Uchopte pravý dolný roh stoličky a kliknite ho ako základný bod.
4. Napíšte `90` a stlačte {{key:Enter}}.

Stolička sa otočí o 90 stupňov proti smeru hodinových ručičiek okolo základného bodu. Záporný uhol otáča v smere hodinových ručičiek. Namiesto písania môžete kliknúť na druhý bod: uhol sa meria od základného bodu k tomuto bodu.

## Zmena mierky stola

1. Vyberte stôl.
2. Napíšte `SC` a stlačte {{key:Enter}}.
3. Uchopte ľavý dolný roh stola a kliknite ho ako základný bod.
4. Napíšte `1.2` a stlačte {{key:Enter}}.

Stôl je o 20 % väčší a rastie smerom od základného bodu. Faktor menší ako 1 ho zmenší.

:::note
Ak namiesto zadania faktora mierky kliknete na bod, faktor je vzdialenosť od základného bodu k tomuto bodu. Kliknutie jednu jednotku výkresu od základného bodu dá faktor 1. Zvyčajne chcete zadať číslo.
:::

## Späť a znova

- {{key:Mod+Z}}, tlačidlo {{ui:Späť}} alebo `U` a {{key:Enter}} vrátia späť posledný príkaz. Celý príkaz je jeden krok: vrátenie {{cmd:COPY}}, ktoré vytvorilo päť kópií, odstráni všetkých päť.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, tlačidlo {{ui:Znova}} alebo `REDO` ho obnovia.
- História hlási, čo bolo vrátené (`Vrátené: COPY`).

CadCraft uchováva posledných 500 krokov. Nastavenia hladín (zapnutie, zmrazenie, zamknutie, farba) sú nastavenia, nie úpravy, a nedajú sa vrátiť späť.

## Rozšírenie miestnosti do šírky

{{cmd:STRETCH}} (`S` alebo {{ui:Natiahnuť}}) presunie len to, čo leží vnútri okna prekríženia: rohy a konce čiar vnútri sa pohnú, všetko ostatné zostane na mieste, takže miestnosť sa rozšíri namiesto celého presunu.

1. Napíšte `S` a stlačte {{key:Enter}}.
2. Ťahom sprava doľava nakreslite okno nad pravým múrom, aby pokrylo rohy múru a konce všetkého, čo sa k nemu pripája.
3. Stlačte {{key:Enter}}.
4. Kliknite na základný bod, potom napíšte `@600,0` a stlačte {{key:Enter}}.

Obdĺžnik je o 600 širší; čiary, ktoré končili na múre, na ňom stále končia. Oblúk s jedným koncom vnútri si zachová výšku, kružnice a text sa pohnú, keď je ich stred alebo bod vloženia vnútri, a kóta zmeria svoju novú dĺžku. Objekty vybraté jeden po druhom bez okna sa jednoducho presunú.

Výber môžete urobiť aj vopred: ťahom nakreslite okno prekríženia (alebo laso prekríženia) nad múrom bez spusteného príkazu a potom napíšte `S`. STRETCH prevezme tento výber a natiahne to, čo jeho okná obsahujú, rovnako, ako keby ste ich ťahali pri jeho vlastnej výzve.

## Pole: riadky a stĺpce, alebo okolo stredu

{{cmd:ARRAY}} (`AR` alebo {{ui:Pole}}) skopíruje výber do mriežky alebo do kruhu.

1. Vyberte stoličku, napíšte `AR` a stlačte {{key:Enter}}. Stlačením {{key:Enter}} zvoľte Obdĺžnikové (R).
2. Zobrazí sa náhľad 4 stĺpcov a 3 riadkov. Napíšte `COU`, stlačte {{key:Enter}}, potom `5` pre stĺpce a `2` pre riadky.
3. Napíšte `S` (Rozstup), stlačte {{key:Enter}}, potom `600` medzi stĺpcami a `-900` medzi riadkami (záporné hodnoty idú nadol).
4. Stlačte {{key:Enter}}, aby sa kópie vytvorili.

Pre kruh stoličiek okolo stola zvoľte `PO` (Polárne) namiesto toho, kliknite na stred stola a nastavte `I` (Položky), `F` (Výplň: 360 pre celý kruh, 180 pre polovicu) a `ROT` (či sa kópie otočia k stredu). {{cmd:ARRAYRECT}} a {{cmd:ARRAYPOLAR}} preskočia otázku.

## Spojenie dielov do jednej lomenej čiary

{{cmd:JOIN}} (`J` alebo {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Spojiť}}): vyberte čiary, oblúky a otvorené lomené čiary, ktorých konce sa stretávajú, a stlačte {{key:Enter}}. Stanú sa jednou lomenou čiarou, uzavretou, ak obchádzajú celý kruh, ktorú potom môžete odsadiť naraz. Čiary, ktoré ležia na jednej priamke, sa stanú jednou čiarou aj vtedy, keď medzi nimi sú medzery; oblúky jednej kružnice sa stanú jedným oblúkom alebo kružnicou.

## Preniesť vlastnosti

{{cmd:MATCHPROP}} (`MA` alebo {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Preniesť vlastnosti}}): kliknite na objekt, ktorého vzhľad chcete, potom vyberte objekty, ktoré sa majú zmeniť, a stlačte {{key:Enter}}. Prevezmú jeho hladinu a farbu; text prevezme jeho výšku, kóta svoje veľkosti a šráfovanie svoj vzor. Pri druhej otázke napíšte `S` (Nastavenia), ak chcete ktorúkoľvek z týchto vlastností vypnúť.

## Zarovnanie objektov

**Podľa bodov.** {{cmd:ALIGN}} (`AL` alebo {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Zarovnať}}): vyberte objekty a stlačte {{key:Enter}}, potom kliknite na bod na nich (zdroj) a na miesto, kam má ísť (cieľ).

- Jeden pár ich presunie. Pri výzve `Zadajte druhý zdrojový bod` stlačením {{key:Enter}} skončíte.
- Dva páry ich aj otočia, takže čiara medzi dvoma zdrojovými bodmi leží pozdĺž čiary medzi dvoma cieľovými bodmi. CadCraft sa potom spýta `Zmeniť mierku objektov podľa zarovnávacích bodov?`: `Y` ich zväčší alebo zmenší aj o toľko.
- Tretí pár ich zrkadlí, keď sú jeho dva body na opačných stranách tejto čiary.

**Hrany a rozostupy.** {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Zarovnať a rozmiestniť}} (alebo `ALIGNPANEL`) otvorí malý panel nad výkresom. Vyberte objekty a potom:

- v {{ui:Zarovnať na}} zvoľte, s čím sa má zarovnávať (celý výber, prvý alebo posledný objekt, ktorý ste vybrali, alebo bod, na ktorý kliknete), a kliknite na {{ui:Vľavo}}, {{ui:Stred}}, {{ui:Vpravo}}, {{ui:Zhora}}, {{ui:V strede}} alebo {{ui:Zdola}};
- alebo zvoľte {{ui:Rovnaké medzery}} či {{ui:Rovnaké stredy}} a kliknite na {{ui:Naprieč}} alebo {{ui:Zhora nadol}}: dva vonkajšie objekty ostanú, ostatné sa rovnomerne rozmiestnia medzi nimi (aspoň tri objekty).

Každé kliknutie je jeden krok späť a výber ostane, takže môžete skúsiť iné riešenie. Každý objekt sa počíta podľa svojho ohraničujúceho rámca v UCS, ak je nastavený. Na príkazovom riadku sú to isté {{cmd:ALIGNTO}} a {{cmd:DISTRIBUTE}}.

## Zmazanie a rozloženie

- {{cmd:ERASE}} (`E` alebo {{key:Delete}}) odstráni vybrané objekty.
- {{cmd:EXPLODE}} (`X`) rozloží lomenú čiaru na čiary a oblúky, odkaz na blok na jeho objekty a kótu na čiary, hroty šípok a text. Rozložené kóty už nemerajú samy seba.

## Časté chyby

- **Zadanie vzdialenosti bez `@` pri druhom bode.** `600,0` je absolútny bod 600,0, nie „600 vpravo“. Použite `@600,0` alebo holé `600` s krížikom ukazujúcim správnym smerom.
- **Otočenie išlo zlým smerom.** Kladné uhly sa otáčajú proti smeru hodinových ručičiek.
- **Späť odobralo viac, ako ste čakali.** Jedno vrátenie zoberie celý posledný príkaz vrátane všetkých kópií, ktoré vytvoril.
- **Príkaz sa nepýtal na výber objektov.** Objekty už boli vybraté, takže ich použil. Najprv stlačte {{key:Esc}}, aby ste začali bez výberu.
