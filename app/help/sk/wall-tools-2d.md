---
title: Tvary múrov, rezy, odsadenia a väzby pre 2D múry
summary: Kreslite múry ako obdĺžniky, mnohouholníky a oblúky, rozdeľujte ich a spájajte, posúvajte ich podľa kóty a zamykajte jeden múr na druhý alebo na čiaru mriežky. Rovnaké nástroje ako múry v BimCraft.
keywords: múr, panel múrov, tlačidlá múrov, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, štýl spojenia, zrkadlo, na tupo, ukončiť štvorcovo, visiaci zámok, úchyt, ťahanie konca, otočiť, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spojenie, zakázať spojenie, zámok, čiara mriežky, rozdeliť, medzera, odsadenie, čiara umiestnenia
from: 49044181
---

Tieto nástroje pracujú s 2D múrmi z `WALL` (pozrite „Kreslenie 2D inteligentných múrov, dverí a okien"). Používajú tie isté pravidlá ako nástroje múrov v BimCraft, takže sa múr správa rovnako v oboch.

## Kde sú nástroje

- Na paneli nástrojov má skupina {{ui:Múry}} {{ui:Múr}}, {{ui:Obdĺžnik}}, {{ui:Rozdeliť}} a {{ui:Odsadiť}}. Jej ponuka {{ui:Viac}} obsahuje každý ďalší nástroj múrov, každý s ikonou.
- V štýloch ponuky s pásom kariet má karta {{ui:Múry}} panely {{ui:Kreslenie múrov}}, {{ui:Rez}}, {{ui:Nastaviť a upraviť}}, {{ui:Držať}} a {{ui:Spojenie}}.
- V rozložení zobrazujú riadky nástrojov a panel s nástrojmi tú istú skupinu {{ui:Múry}}.
- Môžete napísať ľubovoľný príkaz uvedený nižšie.

## Spojenia sa ukladajú

Keď koniec múru pristane na inom múre, CadCraft spojenie uloží s oboma múrmi. Už nepočíta spojenia zakaždým z toho, kde sa koncom práve dotýkajú. Takže:

- Múry spojené s múrom, ktorý posuniete, ho nasledujú a zostanú spojené. Ich konce kĺžu po vlastných čiarach, takže sa nič neotočí.
- Ak potiahnete jeden koniec múru za úchyt, múr spojený tam si zachová svoj smer. Jeho koniec kĺže po vlastnej čiare, až kým sa nestretne s ťahaným múrom, takže ťahaný koniec pristane na tej čiare, nie vždy pod kurzorom. Náhľad ukazuje, kde. Múr, ktorý naráža do ťahaného múru, ide pozdĺž vlastnej čiary. Ťahanie konca priamo pozdĺž múru mení jeho dĺžku a múr spojený tam sa s ním pohne.
- {{cmd:ROTATE}} na spojenom múre funguje rovnako: konce jeho susedov kĺžu po vlastných čiarach k otočenému múru.
- Ak chcete posunúť roh, vyberte oba múry, ktoré sa tam stretajú, a potiahnite úchyt na rohu. Oba múry zostanú v rohu a oba sa otočia. Múry ďalej po línii zostanú, ako boli.
- Podržte {{key:Alt}}, keď kliknete na nové miesto úchytu, aby ste úmyselne zrušili spojenia: múr ide tam, kam ho dáte, a nič ho nenasleduje.
- Ak by ťah otočil spojený múr späť cez jeho vlastný vzdialený koniec, odmietne sa a nič sa nezmení.
- Múr, ktorý nakreslíte s {{ui:Zakázať spojenia}} (`D` v `WALL`), alebo ktorý vypnete vo Vlastnostiach ({{ui:Zakázať spojenie na začiatku}}, {{ui:Zakázať spojenie na konci}}), zostane na tom konci voľný, aj keď sa dotýka iného múru, kým ho znova nepovolíte.
- `WALLDISJOIN` ({{ui:Zakázať spojenie}} v skupine {{ui:Múry}}) robí to isté jedným kliknutím: kliknite na múr blízko jedného konca, aby ste zakázali spojenia na tom konci, a kliknite znova, aby ste ich povolili.
- Staršie výkresy zatiaľ nemajú uložené spojenia. Prvá zmena, ktorú urobíte, ich raz nájde podľa toho, ako múry stáli pred zmenou, a uloží ich. `WALLJOINS` to urobí hneď.
- Súbory DWG a DXF nesú spojenia vnútri každého múru. CadCraft ich číta späť tak, ako boli uložené. Program, ktorý neuchováva rozšírené údaje, zobrazí múry ako obyčajné bloky a spojenia zahodí; spojenie, ktorého múry sa posunuli v inom programe, sa zahodí pri ďalšej zmene ktoréhokoľvek z nich.

## Štýl spojenia rohu

Roh, kde sa dva múry stretávajú koniec na koniec, sa kreslí ako zrkadlo, pokiaľ nevyberiete iný štýl.

- `WALLJOINSTYLE` ({{ui:Štýl spojenia}} v skupine {{ui:Múry}}): kliknite na roh. Každé kliknutie prejde na ďalší štýl: {{ui:Zrkadlo}}, {{ui:Na tupo}}, {{ui:Kolmo ukončiť}}, potom znova {{ui:Zrkadlo}}. Napíšte `T`, aby ste prepli, ktorý z dvoch múrov prechádza cez roh, na ktorý ste kliknuli naposledy. Stlačte {{key:Enter}}, aby ste skončili. Jeden beh príkazu je jeden krok späť.
- {{ui:Na tupo}}: jeden múr prechádza až k vzdialenej strane druhého a druhý sa zastaví o jeho bok. {{ui:Kolmo ukončiť}}: to isté, ale múr, ktorý prechádza, končí kolmo na seba. Pri pravom uhle vyzerajú obe rovnako.
- Vo Vlastnostiach múru: {{ui:Štýl spojenia na začiatku}}, {{ui:Štýl spojenia na konci}} a {{ui:Prechádza cez na začiatku}}, {{ui:Prechádza cez na konci}}.
- Štýl sa ukladá s oboma múrmi a putuje v súboroch DWG a DXF. Kópia múru začína bez neho.
- Spoj T nemá štýl na výber: múr, ktorého bok je stretnutý, prechádza. Roh, kde sa stretávajú tri alebo viac múrov, zostáva zrkadlom. Rovnako aj veľmi ostrý roh (pod asi 30 stupňov) a dva múry na jednej čiare.

## Kreslenie tvarov múrov

Každý vytvorí múry v jednom kroku späť, s spojenými rohmi. V `WALL` `O` nastaví odsadenie umiestnenia (ako ďaleko vľavo od vašich kliknutí múr ide) a `D` vypne spájanie pre múry, ktoré nakreslíte ďalej.

- `WALLRECT` (`WR`): dva protiľahlé rohy, ako `RECTANG`.
- `WALLROT`: prvá strana, potom ako ďaleko ide druhá strana, pre obdĺžnik v ľubovoľnom uhle.
- `WALLPOLY` (`WP`): počet strán (3 až 64), stred, `I` pre vpísaný alebo `C` pre opísaný, potom polomer, ako `POLYGON`: kliknite ho, alebo ho napíšte (napísaný polomer ide smerom k ukazovateľu, alebo pozdĺž X, keď je ukazovateľ stále na strede).
- `WALLARC` (`WARC`): stred, začiatok, koniec. `D` otočí oblúk opačným smerom.
- `WALLTAN`: kliknite blízko konca múru, potom na koniec oblúka, ktorý odbieha pozdĺž toho múru.
- `WALLPICK`: kliknite na čiaru alebo lomenú čiaru a povedzte, či zobrať aj čiary k nej spojené.
- `WALLTRACE`: kliknite vnútri uzavretej plochy čiar a múrov, aby ste okolo najmenšej dali múry.

Pôdorysné múry sú priame, takže sa oblúk kreslí ako krátke múry po 15 stupňoch. Spájajú sa ako každý roh.

## Rezanie múrov

- `WALLSPLIT` (`WS`): kliknite na múr, potom na bod. `C` reže tam, kde ho pretína iný múr, `G` nechá medzeru medzi časťami, `F` urobí rezné konce voľné namiesto spojených. Prvá časť si zachová miesto múru vo výkrese a dvere a okná idú so svojou časťou. Rez cez dvere alebo okno sa odmietne.
- `WALLSPLITGAP` ({{ui:Rozdeliť s medzerou}}): to isté rozdelenie, ale najprv sa pýta na medzeru.
- `WALLDELSEG`: kliknite na múr, potom na dva konce kúska, ktorý sa má zmazať.
- `WALLREJOIN`: kliknite na dve časti jedného múru, aby sa znova stali jedným.

## Posúvanie múrov podľa vzdialenosti

- `WALLDIM` ({{ui:Upraviť podľa kóty}}): kliknite na lineárnu alebo zarovnanú kótu, ktorá vedie od jedného múru k druhému, potom napíšte novú hodnotu. Múr na vzdialenom konci sa posunie kolmo k sebe, múr na prvom konci zostane a múry k nemu spojené ho nasledujú. Vzdialený bod kóty sa pohne so svojím múrom, takže kóta ukazuje hodnotu, ktorú ste napísali.
- `WALLOFFSET` (`WO`): kliknite na múr, potom na stranu, na ktorú ho posuniete (`D` napíše vzdialenosť, `C` urobí kópiu namiesto toho).
- `WALLSTRETCH`: okno okolo koncov múru, potom základný bod a druhý bod.
- Vo Vlastnostiach napísaná {{ui:Dĺžka}} zachová začiatok a vezme so sebou múr spojený na vzdialenom konci, a nová {{ui:Hrúbka}} narastie od {{ui:Čiary umiestnenia}}, ktorú ste zvolili (ľavá strana, pravá strana alebo stred).

## Kóta medzi osami múrov

Os múru sa nekreslí, ale uchopenie objektu ju nájde. Keď je uchopenie zapnuté ({{key:F3}}), presuňte ukazovateľ na stred hrúbky múru: značka hlási `Wall center: endpoint` alebo `Wall center: midpoint`, a os sa zobrazí ako prerušovaná čiara, kým je značka na nej. S {{ui:Kolmá}} alebo {{ui:Najbližšie}} zapnutými v zozname uchopení objektov fungujú aj na osi.

1. Spustite `DIMLINEAR` (alebo `DIMALIGNED`).
2. Kliknite na prvý múr tam, kde značka hlási `Wall center: midpoint` alebo `Wall center: endpoint`.
3. Kliknite na druhý múr rovnako, potom kliknite, kam ide kótovacia čiara.
4. Ak chcete zmeniť vzdialenosť, spustite `WALLDIM`, kliknite na kótu a napíšte novú hodnotu. Druhý múr sa posunie.

Uchopenie na os múru funguje v každom príkaze, ktorý žiada bod.

## Zamykanie múrov

Zámok zostáva s múrom v súbore. Ak posuniete jeden zamknutý múr, druhý ho nasleduje. Ak jedna zmena posunie oba múry rozdielne, odmietne sa a nič sa nezmení.

- `WALLHOLD`: zamkne múr na iný múr. `A` ho najprv posunie na čiaru druhého múru, `K` zachová vzdialenosť, ktorú má.
- `WALLHOLDDIM`: zamkne vzdialenosť medzi dvoma rovnobežnými múrmi.
- `WALLGRID`: zamkne múr na čiaru mriežky (čiara na vrstve mriežky s jej značkou v texte na jednom konci), buď pozdĺž nej, alebo s jedným koncom na nej. Múr zamknutý pozdĺž čiary zachová vzdialenosť, ktorú od nej má. Posuňte čiaru mriežky pomocou `GRIDMOVE` a múr ju nasleduje celý, s jeho spojenými múrmi. Múr, ktorý leží pozdĺž čiary mriežky, sa pohne celý s ňou aj bez zámku, a múr, ktorý sa čiary iba dotýka koncom, sa natiahne tým koncom.
- `WALLHOLDS` vypíše zámky. `WALLUNHOLD` zruší zámky múru.
- Každý zámok ukazuje malý visiaci zámok v pôdoryse: pri strede zamknutého múru alebo pri konci, ktorý je zamknutý na čiaru mriežky. Kliknutím na visiaci zámok ho zrušíte.

## Čo tu zatiaľ nie je

Zámky používajú osi múrov. Múry tu nemajú vrstvy, takže na spoji nie je prioritu vrstiev a múry sa neohýbajú (pozrite oblúky vyššie). Nikto tieto nástroje nevyskúšal na veľkom výkrese a neboli overené v inom CAD programe.
