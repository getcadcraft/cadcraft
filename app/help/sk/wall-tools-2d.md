---
title: Tvary, rezy, odsadenia a zámky 2D múrov
summary: Kreslite múry ako obdĺžniky, mnohouholníky a oblúky, rozdeľte ich a znova spájajte, posúvajte o rozmer a zamknite jeden múr k inému alebo k osi mriežky. Rovnaké nástroje ako múry v BimCraft.
keywords: múr, panel múrov, tlačidlá múrov, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, štýl spojenia, skosenie, rovný, kolmo ukončiť, visiaci zámok, úchyt, ťahanie konca, otočiť, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spojenie, zakázať spojenie, zámok, os mriežky, rozdeliť, medzera, odsadenie, čiara umiestnenia
from: f41e7433
---

Tieto nástroje pracujú s 2D múrmi z `WALL` (pozri "Kreslenie inteligentných múrov, dverí a okien v 2D"). Používajú rovnaké pravidlá ako nástroje múrov v BimCraft, takže sa múr správa v oboch rovnako.

## Kde sú nástroje

- Na paneli nástrojov skupina {{ui:Múry}} obsahuje {{ui:Múr}}, {{ui:Obdĺžnik}}, {{ui:Rozdeliť}} a {{ui:Odsadiť}}. Jej ponuka {{ui:Viac}} obsahuje každý ďalší nástroj pre múry, každý so svojou ikonou.
- V štýloch ponuky s pásom (ribbon) má karta {{ui:Múry}} panely {{ui:Kresliť múry}}, {{ui:Vystrihnúť}}, {{ui:Nastaviť a upraviť}}, {{ui:Podržať}} a {{ui:Spojiť}}.
- V rozložení zobrazujú riadky nástrojov a sada nástrojov rovnakú skupinu {{ui:Múry}}.
- Ľubovoľný príkaz uvedený nižšie môžete tiež napísať.

## Spojenia sa ukladajú

Keď koniec múru dopadne na iný múr, CadCraft uloží toto spojenie s oboma múrmi. Spojenia už nepočíta nanovo z toho, kde sa konce náhodou nachádzajú. Preto:

- Múry spojené s múrom, ktorý posuniete, ho nasledujú a zostanú spojené. Ich konce kĺžu po vlastných priamkach, takže sa nič neotáča.
- Potiahnite jeden koniec múru za jeho úchyt a múr spojený v tom mieste si zachová tiež svoj smer. Jeho koniec kĺže po vlastnej priamke, aby sa stretol s ťahaným múrom, takže ťahaný koniec dopadne na túto priamku, nie vždy pod kurzor. Náhľad ukazuje, kde. Múr, ktorý sa do ťahaného múru opiera tupo, ide po svojej priamke. Ak ťaháte koniec priamo pozdĺž múru, zmení sa jeho dĺžka a múr spojený v tom mieste sa posunie spolu s ním.
- `ROTATE` na spojenom múre funguje rovnako: konce jeho susedov kĺžu po vlastných priamkach k otočenému múru.
- Ak chcete posunúť roh, vyberte oba múry, ktoré sa tam stretávajú, a potiahnite úchyt na rohu. Oba múry zostanú v rohu a obe sa otočia. Múry ďalej po trase zostanú, ako boli.
- Podržte {{key:Alt}}, keď kliknete na nové miesto úchytu, ak chcete spojenia úmyselne prerušiť: múr ide tam, kde ho umiestnite, a nič ho nenasleduje.
- Ak by ťahanie otočilo spojený múr späť cez jeho vlastný vzdialený koniec, odmietne sa a nič sa nezmení.
- Múr, ktorý nakreslíte s {{ui:Nepovoliť spojenia}} (`D` v `WALL`), alebo ho vypnete vo {{ui:Vlastnosti}} ({{ui:Nepovoliť spojenie na začiatku}}, {{ui:Nepovoliť spojenie na konci}}), zostane na tom konci voľný, aj keď sa dotýka iného múru, dovtedy, kým ho znova nepovolíte.
- `WALLDISJOIN` ({{ui:Zakázať spojenie}} v skupine {{ui:Múry}}) robí to isté jedným kliknutím: kliknite na múr blízko jedného konca, aby ste zakázali spojenia na tomto konci, a kliknutím znova ich povolíte.
- Staršie výkresy zatiaľ nemajú uložené spojenia. Prvá zmena, ktorú urobíte, ich raz nájde podľa toho, ako múry stáli pred zmenou, a uloží ich. `WALLJOINS` to urobí hneď.
- Súbory DWG a DXF nesú spojenia vnútri každého múru. CadCraft ich načíta späť tak, ako boli uložené. Program, ktorý neuchováva rozšírené dáta, zobrazí múry ako obyčajné bloky a spojenia zahodí; spojenie, ktorého múry boli presunuté v inom programe, sa zahodí pri najbližšej zmene ktoréhokoľvek múru.

## Štýl spojenia rohu

Roh, kde sa dva múry stretávajú koniec na koniec, sa kreslí ako {{ui:Skosenie}}, pokiaľ nezvolíte iný štýl.

- `WALLJOINSTYLE` ({{ui:Štýl spojenia}} v skupine {{ui:Múry}}): kliknite na roh. Každé kliknutie prejde na ďalší štýl: {{ui:Skosenie}}, {{ui:Rovný}}, {{ui:Kolmo ukončiť}}, potom znova {{ui:Skosenie}}. Napíšte `T`, ak chcete prepnúť, ktorý z dvoch múrov prechádza cez roh, na ktorý ste naposledy klikli. Dokončite stlačením {{key:Enter}}. Jedno spustenie príkazu je jeden krok späť.
- {{ui:Rovný}}: jeden múr prechádza až k vzdialenej ploche druhého a druhý sa zastaví pri jeho boku. {{ui:Kolmo ukončiť}}: rovnako, ale múr, ktorý prechádza, končí kolmo sám na seba. Pod pravým uhlom vyzerajú obe rovnako.
- V {{ui:Vlastnosti}} múru: {{ui:Štýl spojenia na začiatku}}, {{ui:Štýl spojenia na konci}} a {{ui:Prechádza cez na začiatku}}, {{ui:Prechádza cez na konci}}.
- Štýl sa uloží s oboma múrmi a prenáša sa v súboroch DWG a DXF. Kópia múru začína bez neho.
- Spojenie typu T nemá štýl na výber: prechádza múr, ku ktorého boku sa dopadá. Roh, kde sa stretáva tri alebo viac múrov, zostáva skosením. Rovnako aj veľmi ostrý roh (pod približne 30 stupňov) a dva múry v jednej priamke.

## Kreslenie tvarov múrov

Každý z nich vytvorí múry v jednom kroku späť, s spojenými rohmi. V `WALL` nastaví `O` odsadenie umiestnenia (ako ďaleko doľava od vašich kliknutí múr ide) a `D` vypne spájanie pre múry, ktoré nakreslíte ďalej.

- `WALLRECT` (`WR`): dva protiľahlé rohy, ako `RECTANG`.
- `WALLROT`: prvá strana, potom ako ďaleko ide druhá strana, pre obdĺžnik v ľubovoľnom uhle.
- `WALLPOLY` (`WP`): počet strán (3 až 64), stred, `I` pre vpísaný alebo `C` pre opísaný, potom polomer, ako `POLYGON`.
- `WALLARC` (`WARC`): stred, začiatok, koniec. `D` otočí oblúk na opačnú stranu.
- `WALLTAN`: kliknite blízko konca múru, potom na koniec oblúka, ktorý vychádza pozdĺž toho múru.
- `WALLPICK`: kliknite na úsečku alebo lomenú čiaru a určite, či chcete zobrať aj úsečky s ňou spojené.
- `WALLTRACE`: kliknite vnútri uzavretej oblasti úsečiek a múrov, aby ste okolo tej najmenšej umiestnili múry.

Pôdorysné múry sú priame, takže oblúk sa kreslí ako krátke priame múry po 15 stupňoch. Spájajú sa ako každý roh.

## Rezanie múrov

- `WALLSPLIT` (`WS`): kliknite na múr, potom na bod. `C` rozreže tam, kde ho pretína iný múr, `G` nechá medzeru medzi časťami, `F` urobí rezané konce voľné namiesto spojených. Prvá časť si zachová miesto múru vo výkrese a dvere a okná idú s svojou časťou. Rez cez dvere alebo okno sa odmietne.
- `WALLSPLITGAP` ({{ui:Rozdeliť s medzerou}}): rovnaké rozdelenie, ale najprv sa pýta na medzeru.
- `WALLDELSEG`: kliknite na múr, potom na dva konce kusu, ktorý sa má zmazať.
- `WALLREJOIN`: kliknite na dve časti jedného múru, aby sa znova stali jedným.

## Posun múrov o vzdialenosť

- `WALLDIM`: kliknite na dĺžkovú alebo zarovnanú kótu, ktorá vedie od jedného múru k druhému, potom napíšte novú hodnotu. Múr na vzdialenom konci sa posunie kolmo sám na seba, múr na prvom konci zostane na mieste a múry spojené s ním idú za ním.
- `WALLOFFSET` (`WO`): kliknite na múr, potom na stranu, na ktorú sa má posunúť (`D` zadá vzdialenosť, `C` namiesto toho vytvorí kópiu).
- `WALLSTRETCH`: okno okolo koncov múrov, potom základný bod a druhý bod.
- Vo {{ui:Vlastnosti}} zadaná {{ui:Dĺžka}} zachová začiatok a so sebou vezme múr spojený na vzdialenom konci a nová {{ui:Hrúbka objektu}} narastá od {{ui:Čiara umiestnenia}}, ktorú ste zvolili (ľavá plocha, pravá plocha alebo stred).

## Zamykanie múrov

Zámok zostáva s múrom v súbore. Ak posuniete jeden zamknutý múr, druhý ho nasleduje. Ak by jedna zmena posunula oba múry rozdielne, odmietne sa a nič sa nezmení.

- `WALLHOLD`: zamknite múr k inému múru. `A` ho najprv presunie na priamku druhého múru, `K` zachová vzdialenosť, ktorú má.
- `WALLHOLDDIM`: zamkne vzdialenosť medzi dvoma rovnobežnými múrmi.
- `WALLGRID`: zamkne múr k osi mriežky (úsečke na hladine mriežky so značkou v texte na jednom konci), buď pozdĺž nej, alebo s jedným koncom na nej. Múr zamknutý pozdĺž osi zachová vzdialenosť, ktorú má od nej. Posuňte os mriežky príkazom `GRIDMOVE` a múr ju nasleduje celý aj so svojimi spojenými múrmi. Múr, ktorý leží pozdĺž osi mriežky, sa posunie celý spolu s ňou aj bez zámku, a múr, ktorý sa na osi iba končí, sa natiahne tým koncom.
- `WALLHOLDS` vypíše zámky. `WALLUNHOLD` zruší zámky na múre.
- Každý zámok zobrazuje malý {{ui:visiaci zámok}} na pôdoryse: vedľa stredu zamknutého múru alebo vedľa konca, ktorý je zamknutý k osi mriežky. Kliknutím na visiaci zámok zrušíte tento zámok.

## Čo tu ešte nie je

Zámky používajú osi múrov. Múry tu nemajú hladiny, takže na spoji nie je prednosť hladín a múry sa neohýbajú (pozri oblúky vyššie). Tieto nástroje nikto nevyskúšal na veľkom výkrese a neboli overené v inom CAD programe.
