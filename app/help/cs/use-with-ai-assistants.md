---
title: Použití CadCraft s AI asistentem
summary: Nechte vlastního AI asistenta nebo skript pracovat s CadCraft: co smí dělat, jak připojit libovolného klienta MCP a jak zůstáváte v kontrole (oprávnění, zpět, protokol aktivity, Odpojit).
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizace, příkazový řádek, cli, json, token, oprávnění, odpojit, aktivita, složky, cesty, svg, dávka
from: 06ba4ef6
---

## Co se naučíte

Jak nechat AI asistenta (nebo skript, který jste napsali) prohlédnout výkres, spouštět příkazy CadCraft, vykreslovat a ukládat a jak rozhodnout, čeho se smí dotknout.

CadCraft **nemá vlastní AI** a nic nikam neodesílá. Asistenta přinesete vy: libovolný program, který mluví protokolem Model Context Protocol (MCP). CadCraft mu pouze poskytne nástroje a vy vyberete, které.

Existují dva způsoby, jak se připojit:

- **Výkres, který máte otevřený.** Asistent pracuje v tomto okně vedle vás, přes CadCraft Studio na vašem počítači. K tomu slouží {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Asistenti}}.
- **Výkresy na vašem počítači bez otevření aplikace.** Server CadCraft MCP a příkazový řádek `cadcraft` čtou a zapisují soubory DWG a DXF ve složkách, které uvedete. Viz níže „Práce se soubory bez otevření CadCraft“.

## Zapnutí

1. Otevřete {{ui:Nastavení}} (ozubené kolo v panelu aplikace, nebo {{key:Mod+,}}) a přejděte na kartu {{ui:CadCraft}}.
2. Pod {{ui:Asistenti}} zaškrtněte **Povolit AI asistentům a skriptům používat CadCraft**. Dokud to neuděláte, je to vypnuto.
3. Vyberte, co smí dělat. **Čtení** je zaškrtnuto už na začátku; ostatní zaškrtněte, až je budete potřebovat.

| Oprávnění | Co asistent může dělat |
|---|---|
| Čtení | Prohlížet výkres: popisovat ho, vypisovat a hledat objekty, vidět výběr, popsat pohled a pořídit jeho snímek, kontrolovat ho podle pravidel pro vrstvy a kreslení |
| Úpravy | Spouštět příkazy nad výkresem a měnit výběr. Každá akce je jeden krok, který lze vrátit zpět |
| Uložení | Uložit výkres (na počítači do jeho souboru; v prohlížeči jako stažení) |
| Export | Vykreslit do PDF a vytvářet další soubory |

## Nechte jej používat soubory ve složkách, které vyberete

V CadCraft Studio může asistent otevírat, ukládat a vykreslovat soubory podle názvu místo použití dialogů pro soubory, ale jen uvnitř složek, které přidáte v {{ui:Asistenti}} › {{ui:Složky, které smí použít}}:

1. Zvolte {{ui:Přidat složku…}} a vyberte složku ve vlastním dialogu CadCraft Studio.
2. Asistent nyní může tam vypsat soubory (`files_list`), otevřít výkres (`drawing_open`), uložit jej tam ve verzi DWG nebo jako DXF, vykreslit do souboru PDF nebo SVG, načíst soubor LISP a předat příkazu soubor, o který si řekne (`INSERT` `F`, `XATTACH`, soubor bodů), nebo určit, kam má příkaz uložit svůj soubor (CSV příkazu `COUNT`, `PUBLISH`).
3. {{ui:Odebrat}} složku okamžitě odebere. Cesty kamkoli jinam jsou odmítnuty a soubor, který tam už je, se nahradí jen tehdy, když o to asistent požádá nebo když soubor sám zapsal.

Otevření stále vyžaduje **Čtení**; zápis výkresu vyžaduje **Uložení**; jakýkoli jiný soubor vyžaduje **Export**.

Nástroje mimo oprávnění, která jste zaškrtli, asistentovi vůbec nenabízejí. Pokud si o některý přesto požádá, CadCraft jej odmítne a zapíše to do protokolu aktivity. Vypnutí přepínače ukončí všechna připojení najednou. {{ui:Obnovit nastavení CadCraft}} jej také vypne.

## Připojte svého asistenta

Asistenti se připojují přes **CadCraft Studio** na vašem počítači: spouští malý server, ke kterému dosáhne jen tento počítač (adresa `127.0.0.1`), a chrání jej token, který Studio vytvoří při každém spuštění. Otevřete Studio, zvolte {{ui:Připojit asistenta}} a zkopírujte adresu a token.

- Ve svém asistentovi přidejte server MCP typu HTTP s adresou (vypadá takto: `http://127.0.0.1:47615/mcp`) a hlavičku `Authorization: Bearer <token>`. Studio ukáže nastavení, která stačí vložit.

{{ui:Nový token}} ve Studio způsobí, že se každý připojený asistent znovu připojí s novým tokenem. Token nikdy nesdílejte: kdokoli, kdo jej má, může používat aplikace, které jste zapnuli, dokud běží Studio.

:::note
Karta prohlížeče nemůže asistentovi otevřít připojení: v aplikacích v prohlížeči přepínač nemá žádný účinek, dokud nepoužijete CadCraft Studio na svém počítači.
:::

## Zůstáváte v kontrole

- **Každá akce je jeden krok zpět**, označený názvem, který jí asistent dal, například „Asistent: LINE“. Stisknutím {{key:Mod+Z}} vrátíte celou poslední akci asistenta.
- **Vidíte, co dělá.** Jeho příkazy se objeví v historii příkazů s **[Asistent]** na začátku a výkres se překresluje, jak pracuje.
- **Počká na vás.** Dokud jste uprostřed příkazu, asistent může výkres číst, ale neměnit jej; řekne se mu, aby to zkusil znovu, až budete hotovi.
- **Víte, kdy je připojen.** Tlačítko v panelu aplikace pojmenuje asistenta, dokud je připojen. Klikněte na něj, abyste viděli, co smí dělat, nebo abyste jej **odpojili**.
- **Aktivita.** {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypisuje každé volání: kdy, který nástroj, zda proběhlo nebo bylo odmítnuto a jaký krok zpět vytvořilo. {{ui:Uložit záznam}} uchová kopii.

## O co může asistent žádat

| Nástroj | Oprávnění | Co dělá |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Čtení | Název výkresu, jednotky, vrstvy, bloky, listy; co je na obrazovce |
| `files_list`, `drawing_open` | Čtení | Studio: soubory ve vašich složkách; otevřít jeden v tomto okně |
| `objects_list`, `object_get`, `selection_get` | Čtení | Objekty s jejich geometrií, délkou a plochou (nebo jen počet podle typu a vrstvy); výběr |
| `drawing_check` | Čtení | Pravidla, například povolené vrstvy, nic na vrstvě 0, barvy ByLayer, výšky textu |
| `view_screenshot` | Čtení | Snímek výkresu tak, jak je zobrazen |
| `command_run` | Úpravy | Píše na příkazový řádek: `LINE 0,0 @100,0 @0,50 ` se čte tak, jak byste to napsali vy (mezera ukončuje odpověď), nebo seznam s jednou odpovědí na řádek. Může nechat příkaz otevřený a pokračovat v dalším volání |
| `script_run` | Úpravy | Skript (`.scr`) nebo soubor LISP, tak jak jej načítá {{ui:APPLOAD}} |
| `block_insert` | Úpravy | Vloží blok i s hodnotami jeho atributů v jednom kroku |
| `selection_set`, `undo` | Úpravy | Vybere objekty pro další příkaz; vrací zpět své vlastní kroky |
| `drawing_save` | Uložení | Vlastní {{ui:Uložit}}, nebo {{ui:Uložit jako}} do jedné z vašich složek |
| `drawing_plot` | Export | PDF nebo SVG listu nebo modelu, v měřítku nebo přizpůsobené (podložky PDF se tímto způsobem zatím netisknou) |

Když asistent spouští příkaz, CadCraft se ptá na příkazovém řádku místo v dialogu (například zda vložit celý výkres, nebo jeden blok), aby na to mohl asistent odpovědět. Knihovna a Hledání stále potřebují vás; asistent je pověřen, aby se zeptal vás.

## Práce se soubory bez otevření CadCraft

Server CadCraft MCP (`cadcraft-mcp`) a příkazový řádek (`cadcraft`) spouštějí vlastní kód CadCraft pro výkresy v Node.js, bez okna. Potřebují Node.js 20 nebo novější.

- **Server MCP** pracuje jen uvnitř složek, které uvedete, a jen s oprávněními, která mu dáte: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Bez `--root` nemůže otevřít žádný soubor; bez `--allow` může jen číst. Umí také číst modely IFC, výkazy výměr a poznámky v sadách PDF.
- **Příkazový řádek** je pro vaše vlastní skripty: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Více souborů najednou: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Přidejte `--json` pro výstup, který může číst program.

:::note
Pokud `npx @getcadcraft/mcp` hlásí, že balíček nebyl nalezen, zatím nebyl zveřejněn. Novinky na getcadcraft.com napíší, až bude.
:::

## Když něco nefunguje

- **Asistent nevidí žádné nástroje CadCraft:** zkontrolujte, zda je přepínač zapnutý v tomto okně a zda je okno otevřeno ve Studio.
- **„vyžaduje oprávnění pro úpravy“:** pod {{ui:Asistenti}} zaškrtněte **Úpravy** a zeptejte se znovu.
- **„mimo složky, které smí asistenti používat“:** přidejte tuto složku v {{ui:Asistenti}} › {{ui:Složky, které smí použít}}, nebo požádejte asistenta, aby použil soubor ve složce, kterou už jste přidali.
- **Chyby „401“ nebo „token“:** token se změnil (Studio se restartovalo, nebo proběhlo {{ui:Nový token}}). Zkopírujte nový do nastavení asistenta.
- **Jeho změna byla chybná:** stiskněte {{key:Mod+Z}}. Jedním stisknutím se vrátí jedna celá akce asistenta.

## Viz také

- [Recepty pro AI asistenty](common:assistants-recipes): příklady, každý s nástroji, které volá.
