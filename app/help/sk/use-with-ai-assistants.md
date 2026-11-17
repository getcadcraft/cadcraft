---
title: Použitie CadCraft s AI asistentom
summary: Nechajte svojho AI asistenta alebo skript pracovať s CadCraft: čo smie robiť, ako pripojiť ľubovoľného klienta MCP a ako zostávate pri kontrole (povolenia, späť, záznam aktivity, Odpojiť).
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizácia, riadok príkazov, cli, json, token, povolenia, odpojiť, aktivita, priečinky, cesty, svg, dávka
from: 06ba4ef6
---

## Čo sa naučíte

Ako nechať AI asistenta (alebo skript, ktorý ste napísali) pozrieť sa na výkres, spúšťať príkazy CadCraft, vykresliť a uložiť a ako rozhodnúť, čoho sa smie dotknúť.

CadCraft **nemá vlastnú AI** a nikam nič neposiela. Asistenta si prinesiete vy: ľubovoľný program, ktorý hovorí cez Model Context Protocol (MCP). CadCraft mu poskytne iba nástroje a vy vyberiete, ktoré.

Existujú dva spôsoby pripojenia:

- **Výkres, ktorý máte otvorený.** Asistent pracuje v tomto okne vedľa vás, cez CadCraft Studio vo vašom počítači. Na to slúži {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Asistenti}}.
- **Výkresy vo vašom počítači bez otvorenia aplikácie.** Server CadCraft MCP a príkazový riadok `cadcraft` čítajú a zapisujú súbory DWG a DXF v priečinkoch, ktoré uvediete. Pozri nižšie „Práca so súbormi bez otvorenia CadCraft“.

## Zapnutie

1. Otvorte {{ui:Nastavenia}} (ozubené koliesko na paneli aplikácie alebo {{key:Mod+,}}) a prejdite na kartu {{ui:CadCraft}}.
2. V časti {{ui:Asistenti}} zaškrtnite **Povoliť AI asistentom a skriptom používať CadCraft**. Dovtedy je vypnuté.
3. Vyberte, čo smie robiť. **Čítanie** je predvolene zaškrtnuté; ostatné zaškrtnite, až keď ich budete potrebovať.

| Povolenie | Čo môže asistent robiť |
|---|---|
| Čítanie | Pozrieť sa na výkres: opísať ho, vypísať a nájsť objekty, vidieť výber, opísať pohľad a urobiť jeho snímku, skontrolovať ho podľa pravidiel hladín a kreslenia |
| Úprava | Spúšťať príkazy na výkrese a meniť výber. Každá akcia je jeden krok, ktorý možno vrátiť späť |
| Uloženie | Uložiť výkres (na počítači do jeho súboru; v prehliadači ako stiahnutie) |
| Export | Vykresliť do PDF a vytvoriť ďalšie súbory |

## Nechajte ho používať súbory v priečinkoch, ktoré vyberiete

V CadCraft Studio môže asistent otvárať, ukladať a vykresľovať súbory podľa názvu namiesto použitia dialógových okien so súbormi, ale iba vo vnútri priečinkov, ktoré pridáte v {{ui:Asistenti}} › {{ui:Priečinky, ktoré môže používať}}:

1. Zvoľte {{ui:Pridať priečinok…}} a vyberte priečinok v dialógovom okne Studio.
2. Asistent teraz môže tam vypísať súbory (`files_list`), otvoriť výkres (`drawing_open`), uložiť ho tam vo verzii DWG alebo ako DXF, vykresliť do súboru PDF alebo SVG, načítať súbor LISP a dať príkazu súbor, ktorý si vyžiada (`INSERT` `F`, `XATTACH`, súbor bodov), alebo určiť, kam má príkaz uložiť svoj súbor (CSV príkazu `COUNT`, `PUBLISH`).
3. {{ui:Odstrániť}} priečinok okamžite vezme späť. Cesty kdekoľvek inde sa odmietnu a súbor, ktorý tam už je, sa nahradí iba vtedy, keď si to asistent vyžiada alebo keď ho sám zapísal.

Otvorenie stále vyžaduje **Čítanie**; zápis výkresu vyžaduje **Uloženie**; každý iný súbor vyžaduje **Export**.

Nástroje mimo povolení, ktoré ste zaškrtli, asistentovi vôbec nie sú ponúknuté a ak si ich aj tak vyžiada, CadCraft ho odmietne a zapíše to do záznamu aktivity. Vypnutie prepínača okamžite ukončí všetky pripojenia. {{ui:Obnoviť nastavenia CadCraft}} ho tiež vypne.

## Pripojte svojho asistenta

Asistenti sa pripájajú cez **CadCraft Studio** vo vašom počítači: spúšťa malý server, ktorý dosiahne len tento počítač (adresa `127.0.0.1`), chránený tokenom, ktorý Studio vytvorí pri každom spustení. Otvorte Studio, zvoľte {{ui:Pripojiť asistenta}} a skopírujte adresu a token.

- Vo svojom asistentovi pridajte server MCP typu HTTP s adresou (vyzerá ako `http://127.0.0.1:47615/mcp`) a hlavičkou `Authorization: Bearer <token>`. Studio zobrazí nastavenia na vloženie.

{{ui:Nový token}} v Studio spôsobí, že sa každý pripojený asistent znova pripojí s novým tokenom. Token nikdy nezdieľajte: každý, kto ho má, môže používať aplikácie, ktoré ste zapli, dovtedy, kým Studio beží.

:::note
Karta prehliadača nemôže otvoriť pripojenie pre asistenta: v aplikáciách v prehliadači prepínač nemá žiadny účinok, kým nepoužijete CadCraft Studio vo svojom počítači.
:::

## Zostávate pri kontrole

- **Každá akcia je jeden krok späť**, označený názvom, ktorý pre ňu používa asistent, napríklad "Assistant: LINE". Stlačte {{key:Mod+Z}}, ak chcete vziať späť poslednú akciu asistenta ako celok.
- **Vidíte, čo robí.** Jeho príkazy sa objavia v histórii príkazov s **[Assistant]** vpredu a výkres sa počas práce prekresľuje.
- **Počká na vás.** Keď ste uprostred príkazu, asistent môže čítať, ale nemôže výkres meniť; dostane pokyn, aby to skúsil znova, keď skončíte.
- **Viete, kedy je pripojený.** Tlačidlo na paneli aplikácie pomenúva asistenta, kým je pripojený. Kliknutím na neho zistíte, čo smie robiť, alebo ho môžete **odpojiť**.
- **Aktivita.** {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypíše každé volanie: kedy, ktorý nástroj, či bolo vykonané alebo odmietnuté a krok späť, ktorý vytvorilo. {{ui:Uložiť záznam}} uchová kópiu.

## Čo môže asistent žiadať

| Nástroj | Povolenie | Čo robí |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Čítanie | Názov výkresu, jednotky, hladiny, bloky, listy; čo je na obrazovke |
| `files_list`, `drawing_open` | Čítanie | Studio: súbory vo vašich priečinkoch; otvorí jeden v tomto okne |
| `objects_list`, `object_get`, `selection_get` | Čítanie | Objekty s ich geometriou, dĺžkou a plochou (alebo iba koľko ich je podľa typu a hladiny); výber |
| `drawing_check` | Čítanie | Pravidlá, ako povolené hladiny, žiadne objekty na hladine 0, farby ByLayer, výšky textu |
| `view_screenshot` | Čítanie | Obrázok výkresu tak, ako je zobrazený |
| `command_run` | Úprava | Píše na riadok príkazov: `LINE 0,0 @100,0 @0,50 ` sa číta tak, ako by ste to napísali vy (medzera ukončí odpoveď), alebo zoznam s jednou odpoveďou pre každý. Môže nechať príkaz otvorený a pokračovať v ďalšom volaní |
| `script_run` | Úprava | Skript (`.scr`) alebo súbor LISP, tak ako ho načíta {{ui:APPLOAD}} |
| `block_insert` | Úprava | Umiestni blok s jeho hodnotami atribútov v jednom kroku |
| `selection_set`, `undo` | Úprava | Vyberie objekty pre ďalší príkaz; vracia späť vlastné kroky |
| `drawing_save` | Uloženie | Vlastné {{ui:Uložiť}} v CadCraft alebo {{ui:Uložiť ako}} do jedného z vašich priečinkov |
| `drawing_plot` | Export | PDF alebo SVG listu alebo modelu, v mierke alebo prispôsobené (podklady PDF sa takto zatiaľ netlačia) |

Keď asistent spúšťa príkaz, CadCraft kladie svoje otázky na riadku príkazov namiesto v dialógovom okne (napríklad či vložiť celý výkres alebo jeden blok), aby na ne asistent mohol odpovedať. Knižnica a Hľadať stále potrebujú vás; asistent dostane pokyn, aby sa vás opýtal.

## Práca so súbormi bez otvorenia CadCraft

Server CadCraft MCP (`cadcraft-mcp`) a príkazový riadok (`cadcraft`) spúšťajú vlastný kód kreslenia CadCraft v Node.js bez okna. Vyžadujú Node.js 20 alebo novší.

- **Server MCP** funguje iba vo vnútri priečinkov, ktoré uvediete, a iba s povoleniami, ktoré mu dáte: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Bez `--root` nemôže otvoriť žiadny súbor; bez `--allow` môže iba čítať. Dokáže tiež čítať modely IFC, výkazy výmer a poznámky v sadách PDF.
- **Príkazový riadok** je určený pre vaše vlastné skripty: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Viac súborov naraz: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Pridajte `--json` pre výstup, ktorý môže program čítať.

:::note
Ak `npx @getcadcraft/mcp` hlási, že balík sa nenašiel, ešte nebol zverejnený. Novinky na getcadcraft.com oznámia, kedy bude.
:::

## Ak niečo nefunguje

- **Asistent nevidí žiadne nástroje CadCraft:** skontrolujte, či je prepínač zapnutý v tomto okne a či je okno otvorené v Studio.
- **"needs the edit permission":** zaškrtnite **Úprava** v {{ui:Asistenti}}, potom to znova požiadajte.
- **"outside the folders assistants may use":** pridajte ten priečinok v {{ui:Asistenti}} › {{ui:Priečinky, ktoré môže používať}} alebo požiadajte asistenta, aby použil súbor v priečinku, ktorý ste už pridali.
- **Chyby "401" alebo "token":** token sa zmenil (Studio sa reštartovalo alebo {{ui:Nový token}}). Skopírujte nový do nastavení asistenta.
- **Jeho zmena bola nesprávna:** stlačte {{key:Mod+Z}}. Jedno stlačenie vráti jednu celú akciu asistenta.

## Pozrite aj

- [Recepty pre AI asistentov](common:assistants-recipes): prepracované príklady, každý s nástrojmi, ktoré volá.
