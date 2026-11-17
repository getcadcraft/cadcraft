---
title: Riešenie problémov
summary: Hlásenia, ktoré CadCraft zobrazuje, a problémy, na ktoré môžete naraziť, každé s príčinou a riešením.
keywords: problém, chyba, nefunguje, hlásenie, nedá sa otvoriť, neznámy príkaz, nič sa nedeje, zaseknutie, klávesy nefungujú, prázdne, chýba, oprava
from: 8299b222
---

## Otváranie súborov

| Hlásenie alebo príznak | Príčina | Riešenie |
|---|---|---|
| "CadCraft otvára výkresy DWG a DXF. "…" nie je ani jeden z nich." | Súbor nie je `.dwg` ani `.dxf`. | Otvorte samotný výkresový súbor. PDF sa dá priniesť (Otvoriť sa opýta: importovať alebo pripojiť, pozri [PDF podklady](topic:pdf-underlay)); obrázky sa vkladajú príkazom `IMAGEATTACH`. |
| "Tento binárny DXF končí uprostred objektu: súbor je skrátený alebo poškodený." | Binárny DXF sa skončí pred svojím koncom. | Napíšte RECOVER, aby sa otvorilo to, čo sa dá prečítať, alebo si vyžiadajte súbor znova. |
| "Tento súbor nie je čitateľný DXF (chybný kód skupiny na riadku …)." | DXF je poškodený alebo naozaj nie je DXF. | Vyžiadajte si súbor znova alebo DWG. |
| "Tento výkres sa nepodarilo prečítať. Môže byť poškodený alebo uložený vo verzii, ktorú čítač zatiaľ nespracuje (…)." | Čítač DWG ho nedokázal prečítať. | Vyžiadajte si DWG uložený v staršej verzii, alebo DXF. |
| "Tento výkres pochádza z AutoCAD R11 / R12 (DWG AC1009), je starší, než CadCraft číta …" | Súbory DWG z Release 12 a skorších používajú formát, ktorý CadCraft nečíta. | V programe, ktorý ho vytvoril, ho uložte ako DXF (ľubovoľná verzia) alebo ako novší DWG a otvorte ten. Funkcia Uložiť ako v CadCraft ponúka DXF R12 pre programy, ktoré chcú tento starý formát. |
| "Nepodarilo sa otvoriť …" nasledované sieťovým hlásením, pri prvom DWG | Čítač DWG sa nedal stiahnuť: ste offline a CadCraft nie je uložený na offline použitie, alebo sa spojenie prerušilo. | Pripojte sa na internet a skúste to znova, alebo otvorte DXF. Kliknite na {{ui:Uložiť na offline použitie}} a počkajte na "Pripravené na offline použitie", aby sa súbory DWG otvorili aj offline nabudúce. Pozri [Práca offline](common:offline). |
| Tlačidlo offline hovorí "Nepodarilo sa uložiť" | Niektoré súbory sa nestiahli. | Skontrolujte pripojenie a kliknutím na tlačidlo to skúste znova. |
| Tlačidlo offline hovorí "Offline nie je k dispozícii" | Súkromné okná a niektoré spravované počítače nemôžu uchovať offline kópiu. | Použite bežné okno, alebo zostaňte online. |
| CadCraft sa bez pripojenia neotvorí | Nebol uložený na offline použitie v tomto prehliadači, alebo ho prehliadač vymazal. | Nabudúce, keď budete online, kliknite na {{ui:Uložiť na offline použitie}} a počkajte na "Pripravené na offline použitie". |
| Výkres sa otvorí, ale niektoré časti chýbajú | Objekty, ktoré CadCraft zatiaľ nevie kresliť, alebo hladiny, ktoré sú vo súbore vypnuté alebo zmrazené. | Prečítajte si "O tomto súbore" v ľavom paneli. Skontrolujte panel {{ui:Hladiny}}. |
| Text sa zalomí na dva riadky | CadCraft kreslí text v písme v štýle Helvetica, ktoré je širšie než niektoré CAD písma. | Skráťte text vo {{ui:Vlastnosti}}, alebo si ponechajte ďalší riadok. |
| Kružnica sa zobrazí ako elipsa, alebo zrkadlený text sa číta správne | Objekt bol nakreslený v naklonenej rovine alebo sa pozeral zdola, v programe, ktorý súbor vytvoril. CadCraft ho zobrazuje tak, ako sa vidí zhora, ako to robí pôdorysný pohľad daného programu; text zostáva čitateľný. | Nič na opravu. Ak to chcete vidieť tak ako v druhom programe, vyžiadajte si výkres zploštený, alebo s objektmi nakreslenými zhora. |
| Blok, kružnica alebo kóta je inde než v programe, ktorý súbor vytvoril | Prípad vo výkrese, ktorý CadCraft číta nesprávne. | Napíšte nám na Discord a, ak môžete, priložte súbor. |

## Riadok príkazov

| Hlásenie alebo príznak | Príčina | Riešenie |
|---|---|---|
| "Neznámy príkaz "…". Zoznam získate napísaním HELP." | Neexistuje príkaz ani alias s takým názvom. | Napíšte `HELP`, alebo pozrite [Prehľad príkazov](topic:commands). Niektoré známe príkazy ešte [nie sú hotové](topic:not-built-yet). |
| "No such command" vedľa riadku príkazov pri písaní | To, čo píšete, zatiaľ nezodpovedá ničomu. | Pokračujte v písaní, alebo skontrolujte pravopis. |
| "Vyžaduje sa bod alebo kľúčové slovo možnosti." | Napísané nie je bod ani možnosť. | Skontrolujte formát: `x,y`, `@dx,dy`, `@d<a` alebo jedno číslo. Pozri [Zadávanie súradníc a vzdialeností](topic:coordinate-entry). |
| "Vyžaduje kladné číslo alebo dva body." | Vzdialenosť bola záporná alebo nebola číslo. | Napíšte kladné číslo, alebo kliknite na dva body. |
| "Vyžaduje uhol v stupňoch alebo dva body." | Uhol nebol číslo. | Napíšte stupne ako obyčajné číslo. |
| "Vyžaduje číslo." | Očakávalo sa číslo. | Napíšte iba číslice. |
| "Neplatné kľúčové slovo možnosti." | Písmená nezodpovedajú žiadnej možnosti. | Napíšte veľké písmená zobrazené v hranatých zátvorkách. |
| `*Cancel*` | Stlačili ste {{key:Esc}}, alebo {{key:Enter}} tam, kde sa vyžadoval bod. | Spustite príkaz znova. |
| Písanie sa nedostáva na riadok príkazov | Okno v paneli alebo dialógu má kurzor. | Stlačte {{key:Enter}} alebo {{key:Esc}}, alebo kliknite na výkres. |
| Príkaz použije objekty, ktoré ste nevybrali | Boli vybrané pred spustením príkazu. | Pred príkazom stlačte {{key:Esc}}. |
| Čiara išla na neočakávané miesto | `x,y` je absolútne. | Na relatívne body použite `@dx,dy`. |
| "Najprv dokončite alebo zrušte aktuálny príkaz (Esc)." | Stlačili ste {{key:Mod+S}} počas behu príkazu. | Stlačte {{key:Esc}} a potom uložte. |
| "Nepodarilo sa uložiť ako DWG (AutoCAD 2000): … Skúste Uložiť ako, potom DXF." | Niečo vo výkrese sa nedalo zapísať ako DWG. | Stlačte {{key:Mod+Shift+S}}, vyberte {{ui:DXF R12}} a kliknite na {{ui:Uložiť}}. |
| "Neuložené." | Zatvorili ste dialóg {{ui:Uložiť kópiu ako}} tlačidlom {{ui:Zrušiť}} alebo {{key:Esc}}. | Znova stlačte {{key:Mod+Shift+S}} a kliknite na {{ui:Uložiť}}. |

## Úpravy

| Hlásenie alebo príznak | Príčina | Riešenie |
|---|---|---|
| Objekt sa nedá vybrať | Jeho hladina je zamknutá, vypnutá alebo zmrazená; alebo ste na liste a je to model vnútri výrezu. | Odomknite hladinu, alebo prejdite na kartu {{ui:Model}}. |
| "Nič tam nebolo nájdené." | Pod kliknutím nie je žiadny objekt. | Priblížte a kliknite priamo na čiaru. |
| "Tam tento objekt nič nepretína." | {{cmd:TRIM}} nenašiel objekt, ktorý by pretínal vybratý kus. | Skontrolujte, či rezacia čiara naozaj objekt pretína. |
| "Tento objekt sa nedá orezať." | Orezanie funguje na úsečkách, oblúkoch, kružniciach a polyčiarach. | Najprv rozložte bloky, alebo objekt zmažte a nakreslite znova. |
| "V tom smere nie je hranica." | {{cmd:EXTEND}} nenašiel nič, s čím by sa stretol. | Vyberte bližšie ku koncu, ktorý má narásť. |
| "Tento objekt sa nedá odsadiť." | Odsadenie funguje na úsečkách, oblúkoch, kružniciach a polyčiarach. | Najprv ho rozložte, alebo nakreslite rovnobežnú čiaru. |
| "Odsadiť tak ďaleko sa nedá." | Odsadenie by tvar obrátilo naopak. | Použite menšiu vzdialenosť. |
| "Polomer je príliš veľký." alebo "Vzdialenosť je príliš veľká." | Zaoblenie alebo skosenie by presiahlo koniec úsečky. | Nastavte menší polomer pomocou `R`, alebo menšie vzdialenosti pomocou `D`. |
| "Skrátiť sa dá iba prvý alebo posledný úsek otvorenej polyčiary." | Roh by zasahoval do stredu polyčiary. | Vyberte dva susedné úseky polyčiary, alebo použite `P` pre každý roh. |
| "Vyberte druhú, inú čiaru." | Druhý výber bol tá istá čiara, alebo nebola čiara. | Vyberte inú čiaru. |
| "Rozložiť sa dajú iba polyčiary, odkazy na bloky a kóty." | Výber nemal nič, čo by sa dalo rozložiť. | Vyberte polyčiaru, odkaz na blok alebo kótu. |
| "Toto je aktuálna hladina. Najprv nastavte ako aktuálnu inú hladinu." | Pokúsili ste sa vypnúť aktuálnu hladinu. | Kliknite na názov inej hladiny a potom túto vypnite. |
| "Hladina s názvom … už existuje." | Názvy hladín musia byť jedinečné. | Zvoľte iný názov. |
| "Nič na vrátenie." | Nič nezostalo na vrátenie, alebo ste otvorili či začali výkres (to vymaže históriu). | — |

## Kóty a bloky

| Hlásenie alebo príznak | Príčina | Riešenie |
|---|---|---|
| Text kóty a šípky sú malé alebo obrovské | Veľkosti sú v jednotkách výkresu; celková mierka nesedí na výkres. | Nastavte {{cmd:DIMSCALE}} na mierku vykreslenia; pozri [Nastavenie veľkostí kót](topic:dimension-settings). |
| "Vyberte bod vnútri uhla, ktorý chcete zmerať." | Umiestnenie uhlovej kóty leží na ramene. | Kliknite vnútri uhla. |
| "Tieto čiary sú rovnobežné." | Rovnobežné čiary medzi sebou nemajú uhol. | Vyberte dve čiary, ktoré sa stretajú. |
| "Vyberte dĺžkovú alebo zarovnanú kótu." | {{cmd:DIMCONTINUE}} alebo {{cmd:DIMBASELINE}} potrebuje jednu, od ktorej začne. | Vyberte dĺžkovú alebo zarovnanú kótu. |
| "Tento výkres zatiaľ nemá žiadne bloky: F vloží jeden zo súboru, L z knižnice …" | Výkres nemá vlastné bloky. | Napíšte `F` alebo `L`, alebo vytvorte blok príkazom {{cmd:BLOCK}}. |
| "Žiadny blok s názvom "…"." | Názov je zlý. | Hlásenie vypíše bloky, ktoré existujú. |
| "Názov bloku nesmie začínať * ani obsahovať …" nasledované zoznamom znakov | Názov obsahuje znak, ktorý bloky nemôžu použiť. | Používajte písmená, číslice, `-` a `_`. |
| "Blok nemôže obsahovať sám seba." | Výber obsahuje odkaz na blok, ktorý vytvárate. | Vynechajte tento odkaz. |
| "Nie sú vybrané objekty; nič sa nevytvorilo." | Stlačili ste {{key:Enter}} pred výberom. | Spustite {{cmd:BLOCK}} znova a vyberte objekty. |

## Listy a vykresľovanie

| Hlásenie alebo príznak | Príčina | Riešenie |
|---|---|---|
| "Výrezy patria na rozloženie. Najprv otvorte kartu rozloženia (alebo ju vytvorte príkazom LAYOUT)." | {{cmd:MVIEW}} na karte {{ui:Model}}. | Najprv kliknite na kartu listu. |
| "Najprv otvorte rozloženie s výrezom." | {{cmd:VPVIEW}} na karte {{ui:Model}}. | Najprv kliknite na kartu listu. |
| Mierka výrezu vyzerá desaťkrát zle | Jednotky výkresu sú nesprávne. | Nastavte {{ui:Jednotky}} v {{ui:Aktuálne nastavenia}}. |
| "Zatiaľ nie je čo vykresliť." | Model je prázdny. | Nakreslite niečo, alebo otvorte výkres. |
| "Vyberte okno na vykreslenie." | Bolo vybraté {{ui:Okno…}} a nebolo vybrané žiadne okno. | Kliknite na {{ui:Vybrať}} a vyberte dva rohy. |
| "… väčšie než papier: okraje sú orezané." | Oblasť sa pri tejto mierke nezmestí. | Zvoľte menšiu mierku, väčší papier, alebo {{ui:Prispôsobiť papieru}}. |
| "Prehliadač zablokoval novú kartu, a tak sa namiesto toho stiahlo PDF." | Vyskakovacie okná sú pre stránku zablokované. | Otvorte stiahnuté PDF, alebo povoľte vyskakovacie okná pre stránku. |
| Znaky sa vytlačia ako "?" | Písma v PDF nemajú písmená pre ne (vzácne ideogramy, hindčina a iné písma, ktoré potrebujú zložité tvarovanie, …), alebo sa väčšie písmo nepodarilo načítať (offline). Európske písma, cyrilika, gréčtina, hebrejčina, arabčina, perzština, urdčina, thajčina, čínština, japončina a kórejčina sa vytlačia tak, ako sú. | Pri arabskom písme, thajčine, čínštine, japončine alebo kórejčine vykreslite znova s pripojením. Ostatné písma ešte nie sú hotové. |
| Pomocné čiary sa zobrazujú v PDF | Ich hladina sa vykresľuje. | Kliknite na tlačidlo tlačiarne pri názve hladiny. |
| Všetky čiary sú rovnako hrubé | Ich {{ui:Hrúbka čiary}} je {{ui:Predvolené}}, takže sa tlačia šírkou pera zvolenou v dialógu. | Priraďte hladinám alebo objektom {{ui:Hrúbka čiary}} v pravom paneli, alebo zvoľte {{ui:Hrúbka čiary}} v dialógu. Ak chcete vidieť hrúbky čiar na obrazovke, stlačte {{ui:LWT}} v stavovom riadku. |

## Klávesy a obrazovka

| Príznak | Príčina | Riešenie |
|---|---|---|
| F3, F7 alebo F8 mení hlasitosť alebo otvára Mission Control | Funkčné klávesy na Macu. | Podržte **fn**, alebo použite tlačidlá v stavovom riadku. Pozri [Klávesy, myši a touchpady](common:keys). |
| F7 sa pýta na prehliadanie kurzorom | Vlastné použitie F7 vo Firefoxe. | Zvoľte Nie; použite tlačidlo {{ui:Mriežka}}. |
| {{key:Mod+N}} otvorilo okno prehliadača | Prehliadač si túto klávesu necháva. | Kliknite na {{ui:Nová}}, alebo napíšte `NEW`. |
| {{key:Mod+A}} vybralo text riadku príkazov | Riadok príkazov mal kurzor. | Najprv kliknite na objekt, alebo napíšte `ALL` pri výzve `Select objects`. |
| {{key:Delete}} nič nezmaže | Riadok príkazov mal kurzor. | Napíšte `E` a stlačte {{key:Enter}}. |
| Pravé kliknutie na touchpade Macu nič nerobí | Kliknutie s Control sa môže počítať ako obyčajné kliknutie. | Kliknite dvoma prstami. |
| Na touchpade sa nič neposúva | Nie je tam stredné tlačidlo a medzerník neposúva. | Potiahnite dvoma prstami: 2D zobrazenie sa posunie (štipnutie a koliesko myši priblížia). Alebo potiahnite s podrženým pravým tlačidlom. |
| Prvé {{key:Esc}} ukončilo celú obrazovku | Prehliadač používa Esc na ukončenie celej obrazovky. | Stlačte {{key:Esc}} znova na zrušenie príkazu. |
| {{key:F1}} na Macu nič nerobí | F1 je klávesa jasu. | Podržte **fn**, alebo kliknite na {{ui:Pomocník}}. |
| Písanie ide do vyhľadávacieho poľa pomocníka | Panel pomocníka má kurzor. | Kliknite na výkres. |
| Výkres zmizol | Priblížili ste sa veľmi ďaleko. | Kliknite na {{ui:Rozsah}}, alebo dvakrát kliknite na koliesko. |
| "Opustiť stránku?" pri zatváraní karty | Existujú neuložené zmeny. | Ostaňte, uložte cez {{key:Mod+S}} a potom zatvorte. |
