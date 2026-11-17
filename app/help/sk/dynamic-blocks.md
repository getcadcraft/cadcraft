---
title: Dynamické bloky
summary: Čo CadCraft robí s dynamickými blokmi v DWG: ponechá si ich skutočné názvy, zobrazí stav, v akom boli uložené, prepína stavy viditeľnosti, zobrazuje ich ďalšie hodnoty a pri uložení zostanú dynamické.
keywords: dynamický blok, dynamické bloky, viditeľnosť, stav viditeľnosti, prevrátenie, natiahnutie, vyhľadávanie, parametre, vlastné, vlastnosti bloku, *u bloky, dynamický
from: 26b6aa80
---

## Čo funguje

DWG vytvorený s dynamickými blokmi sa otvorí s fungovaním až dovtedy:

- **Ich skutočné názvy.** Dynamický blok je v paneli {{ui:Bloky}} uvedený pod vlastným názvom ("Receptacle", "Sink"), nie ako nepomenovaný blok `*U`.
- **Stav, v akom boli uložené.** Každý odkaz ukazuje presne to, čo ukázal druhý program: stav viditeľnosti, na ktorý bol nastavený, natiahnutý alebo prevrátený tak, ako bol uložený.
- **Prepínanie stavu viditeľnosti.** Vyberte jeden odkaz (alebo viac odkazov na ten istý blok), otvorte {{ui:Vlastnosti}} a v sekcii {{ui:Vlastné}} zvoľte iný stav zo zoznamu {{ui:Viditeľnosť}}. Odkaz sa hneď zobrazí v tom stave, aj jeho atribúty: tie, ktoré stav skrýva, zmiznú; tie, ktoré zobrazuje, sa objavia s hodnotami. Odkaz si uchováva každú hodnotu, takže nič sa nevráti prázdne; {{ui:Vlastnosti}} uvádza skryté hodnoty označené ako „skryté“. {{key:Mod+Z}} vráti starý stav jedným krokom.
- **Úchyty.** Vybraný dynamický blok zobrazuje vlastné úchyty tam, kde sú jeho parametre: malý trojuholník pre stav viditeľnosti (kliknutím sa zobrazí zoznam stavov), šípky na koncoch vzdialenosti a dvojitá šípka pre prevrátenie. Dnes funguje iba úchyt viditeľnosti; ostatné to v stavovom riadku oznámia.
- **Ostatné hodnoty, iba na čítanie.** Pod zoznamom viditeľnosti {{ui:Vlastné}} zobrazuje aj vzdialenosti bloku, uhly zarovnania, stavy prevrátenia a body tak, ako ich výkres obsahuje.
- **Úpravy stavov viditeľnosti.** Otvorte blok príkazom {{cmd:BEDIT}}: editor zobrazí jeden stav, pomenovaný v lište nad výkresom (tam môžete vybrať iný). Napíšte {{cmd:BVSTATE}} na prepnutie, pridanie (skryje všetko, zobrazí všetko alebo ponechá to, čo je zobrazené), premenovanie alebo zmazanie stavu; {{cmd:BVHIDE}} skryje vybrané objekty v zobrazenom stave; {{cmd:BVSHOW}} zobrazí skryté objekty zošednuté, aby ste mohli kliknúť na tie, ktoré chcete vrátiť. Uložte blok: odkazy nastavené na premenovaný stav si ho ponechajú pod novým názvom a tie, ktoré boli nastavené na zmazaný stav, zobrazia prvý stav.
- **Zostávajú dynamické.** Uložené ako DWG vo verzii, v akej výkres prišiel, bloky zostávajú dynamické so stavom, ktorý ste zvolili: druhý program ich otvorí ako rovnaké dynamické bloky. Stavy viditeľnosti, ktoré ste upravili, sa uložia tiež: ich nové názvy, stavy, ktoré ste pridali, a to, čo každý zobrazuje.

## Čo je iba na čítanie alebo ešte nie je

| Ešte nie je | Namiesto toho dnes |
|---|---|
| Zmena vzdialeností, uhlov alebo prevrátení (akcie natiahnutia, presunu, prevrátenia) | Zobrazujú sa iba na čítanie v {{ui:Vlastné}}; upravte ich v programe, ktorý blok vytvoril. |
| Parametre vyhľadávania, XY, otočenia a polárne parametre | Zatiaľ sa nečítajú: odkaz sa zobrazí tak, ako bol uložený. |
| Ťahanie úchytov vzdialenosti, prevrátenia a bodu | Zobrazujú, kde sú parametre; úchyt viditeľnosti a zoznam {{ui:Viditeľnosť}} vo Vlastnostiach prepínajú stavy. |
| Vytváranie dynamických blokov (pridávanie parametrov alebo stavov viditeľnosti k bloku, ktorý ich nemá) | Bloky, ktoré vytvoríte v CadCraft, sú obyčajné bloky; {{cmd:BPARAMETER}} to hovorí. |
| Pridávanie alebo mazanie objektov bloku so stavmi viditeľnosti v editore blokov | Blok sa potom uloží ako obyčajný blok (editor to pri zatvorení oznámi). |
| Zachovanie dynamických blokov v inej verzii DWG alebo v DXF | Uložia sa ako obyčajné bloky zobrazujúce stav, ktorý ste zvolili, a uloženie to oznámi. |

:::note
Presúvanie alebo zmena objektov v {{cmd:BEDIT}} ponechá blok so stavmi viditeľnosti dynamický. Blok bez stavov alebo blok, ktorému sa v editore pridali alebo zmazali objekty, sa stane obyčajným blokom.
:::
