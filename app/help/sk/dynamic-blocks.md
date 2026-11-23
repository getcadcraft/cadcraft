---
title: Dynamické bloky
summary: Čo CadCraft robí s dynamickými blokmi v DWG: zachovávajú svoje skutočné názvy, zobrazujú stav, v ktorom boli uložené, prepínajú stavy viditeľnosti, zobrazujú ostatné hodnoty a zostávajú dynamické pri uložení.
keywords: dynamický blok, dynamické bloky, viditeľnosť, stav viditeľnosti, preklopiť, roztiahnuť, vyhľadávanie, parametre, vlastné, vlastnosti bloku, *u bloky, dynamický
from: dea2ee7c
---

## Čo funguje

DWG vytvorený s dynamickými blokmi sa otvorí a fungujú v tomto rozsahu:

- **Ich skutočné názvy.** Dynamický blok je v paneli {{ui:Bloky}} vypísaný pod vlastným názvom („Receptacle", „Sink"), nie ako nepomenovaný blok `*U`.
- **Stav, v ktorom boli uložené.** Každá referencia ukazuje presne to, čo ukázal iný program: stav viditeľnosti, na ktorý bola nastavená, roztiahnutá alebo preklopená tak, ako bola uložená.
- **Prepínanie stavu viditeľnosti.** Vyberte jednu referenciu (alebo viac rovnakého bloku), otvorte {{ui:Vlastnosti}} a v sekcii {{ui:Vlastné}} vyberte iný stav zo zoznamu {{ui:Viditeľnosť}}. Referencia ukáže tento stav hneď, aj jej atribúty: tie, ktoré stav skrýva, zmiznú; tie, ktoré ukazuje, sa objavia s hodnotami. Referencia si zachová každú hodnotu, takže nič sa nevráti prázdne; {{ui:Vlastnosti}} vypíšu skryté označené „hidden". {{key:Mod+Z}} vráti starý stav späť v jednom kroku.
- **Úchyty.** Vybraný dynamický blok ukazuje vlastné úchyty tam, kde sú jeho parametre: malý trojuholník pre stav viditeľnosti (kliknutím dostanete zoznam stavov), šípky na koncoch vzdialenosti, dvojitá šípka pre preklopenie. Dnes funguje iba úchyt viditeľnosti; ostatné to hlásia v stavovom riadku.
- **Ostatné hodnoty, iba na čítanie.** Pod zoznamom viditeľnosti {{ui:Vlastné}} tiež zobrazuje vzdialenosti bloku, uhly zarovnania, stavy preklopenia a body tak, ako ich výkres drží.
- **Úprava stavov viditeľnosti.** Otvorte blok cez {{cmd:BEDIT}}: editor zobrazí jeden stav, pomenovaný v lište nad výkresom (vyberte tam iný). Napíšte {{cmd:BVSTATE}} na prepnutie, pridanie (skryje všetko, zobrazí všetko alebo ponechá, čo sa zobrazuje), premenovanie alebo zmazanie stavu; {{cmd:BVHIDE}} skryje vybrané objekty v zobrazenom stave; {{cmd:BVSHOW}} zobrazí skryté objekty zoslabené, aby ste na tie, ktoré chcete vrátiť, mohli kliknúť. Uložte blok: referencie nastavené na premenovaný stav ho zachovajú pod novým názvom a tie nastavené na zmazaný stav ukážu prvý stav.
- **Zostávajú dynamické.** Uložené ako DWG vo verzii, v ktorej výkres prišiel, zostávajú bloky dynamické so stavom, ktorý ste zvolili: iný program ich otvorí ako rovnaké dynamické bloky. Upravené stavy viditeľnosti sa ukladajú tiež: ich nové názvy, pridané stavy a to, čo každý ukazuje.

## Čo je len na čítanie alebo ešte nie je

| Ešte nie je | Namiesto toho dnes |
|---|---|
| Zmena vzdialeností, uhlov alebo preklopení (akcie roztiahnutia, posunu, preklopenia) | Zobrazujú sa len na čítanie v {{ui:Vlastné}}; upravte v programe, ktorý blok vytvoril. |
| Parametre vyhľadávania, XY, otočenia a polárne | Ešte sa nečítajú: referencia sa zobrazí tak, ako bola uložená. |
| Ťahanie úchytov vzdialenosti, preklopenia a bodu | Ukazujú, kde sú parametre; úchyt viditeľnosti a zoznam {{ui:Viditeľnosť}} vo Vlastnostiach prepínajú stavy. |
| Vytváranie dynamických blokov druhu iného programu (roztiahnutie, preklopenie, vyhľadávanie) | Bloky, ktoré vytvoríte v CadCraft, sú obyčajné bloky; {{cmd:BPARAMETER}} to hovorí. Vaše vlastné parametre a viac parametrov viditeľnosti sú v správcovi parametrov (pozrite „Vaše vlastné parametre a stavy viditeľnosti" nižšie). |
| Pridávanie alebo mazanie objektov bloku so stavmi viditeľnosti v editore blokov | Blok sa potom uloží ako obyčajný blok (editor to oznámi pri zatvorení). |
| Zachovanie dynamických v inej verzii DWG alebo v DXF | Uložia sa ako obyčajné bloky zobrazujúce stav, ktorý ste zvolili, a uloženie to povie. |

:::note
Presúvanie alebo zmena objektov v {{cmd:BEDIT}} zachová blok so stavmi viditeľnosti dynamický. Blok bez stavov alebo ten, ktorému boli v editore pridané alebo zmazané objekty, sa stane obyčajným blokom.
:::

## Vaše vlastné parametre a stavy viditeľnosti

Blok, ktorý vytvoríte v CadCraft, môže niesť vlastné parametre a **viac** parametrov viditeľnosti, každý so svojimi stavmi. Napíšte {{cmd:BPARAMS}} (alebo `BPM`), aby sa otvoril **Správca parametrov** pre blok, ktorý upravujete v {{cmd:BEDIT}}, pre blok vybranej referencie alebo pre blok, ktorý pomenujete.

- **Parametre**: názov, typ (číslo, dĺžka, uhol, počet, áno/nie) a hodnota alebo vzorec nad inými parametrami (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Vyjde}} ukazuje výsledok. Vzorec, ktorý nefunguje, alebo hodnota, ktorá sa nehodí k svojmu typu (počet 1,5), sa odmietne a správca povie prečo; nič iné sa nezmení.
- **Parametre viditeľnosti**: {{ui:Pridať parameter viditeľnosti}} vytvorí jeden s prvým stavom. Každý stav sa dá premenovať, odstrániť (posledný zostane) alebo mu dať číslo „zobrazí sa, keď". Vzorec vyberie stav z parametrov (stav, ktorého číslo sedí, inak stav na tom mieste v zozname); bez vzorca si každá referencia vyberie svoj vlastný.
- **Umiestnenie objektov do stavu**: v editore blokov vyberte objekty, napíšte {{cmd:BPARAMS}} a kliknite na {{ui:Umiestniť vybrané objekty sem}} pri stave. Objekty, ktoré žiaden parameter viditeľnosti neuvádza, sa zobrazujú vždy.
- **Táto referencia**: keď ju spustíte na vybranej referencii, správca ukazuje aj jej vlastné hodnoty a stavy.

Mimo editora blokov je každá zmena jeden krok späť. V editore blokov sú zmeny editora: {{ui:Uložiť blok}} ich zachová. `-BPARAMS` pýta to isté na riadku príkazov.

**V súbore.** DWG a DXF uchovávajú parametre, to, ktoré objekty sú v ktorom stave, a vlastné hodnoty každej referencie, vo vlastných záznamoch CadCraftu; keď súbor znova otvoríte v CadCraft, všetko je späť. Iný program vidí každú referenciu ako blok so všetkými jeho objektmi, pretože DWG drží najviac jeden parameter viditeľnosti na blok vlastného druhu. Referencia, ktorú iný program posunul, alebo blok, ktorého objekty zmenil, sa vráti bez častí, ktoré už nesedia (nič sa neodhaduje).
