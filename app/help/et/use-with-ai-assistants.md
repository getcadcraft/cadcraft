---
title: Kasuta CadCrafti tehisintellekti assistendiga
summary: Lase oma tehisintellekti assistendil või skriptil CadCraftiga töötada: mida see tohib teha, kuidas ühendada mis tahes MCP-kliendiga ja kuidas sina ise kontrolli säilitad (load, tagasivõtmine, tegevuste logi, ühenduse katkestamine).
keywords: ai, tehisintellekt, assistent, agent, mcp, mudeli konteksti protokoll, skript, automatiseerimine, käsurida, cli, json, žeton, load, ühenduse katkestamine, tegevus, kaustad, teed, svg, partii
from: 06ba4ef6
---

## Mida sa õpid

Kuidas lasta tehisintellekti assistendil (või sinu kirjutatud skriptil) vaadata joonist, käivitada CadCrafti käske, plotida ja salvestada ning otsustada, mida see tohib puudutada.

CadCraftil endal ei ole tehisintellekti ja ta ei saada mitte kuhugi midagi. Assistendi toob sina: mis tahes programm, mis räägib mudeli konteksti protokolli (MCP). CadCraft annab sellele ainult tööriistad ja sina valid, millised.

Ühendust on kahel viisil:

- **Avatud joonis.** Assistent töötab selles aknas sinu kõrval, CadCraft Studio kaudu sinu arvutis. Selleks on {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}}.
- **Joonised sinu arvutis ilma rakendust avamata.** CadCrafti MCP-server ja käsurea käsk `cadcraft` loevad ja kirjutavad DWG- ja DXF-faile kaustades, mille sina nimetad. Vt allpool „Tööta failidega ilma CadCrafti avamata“.

## Lülita sisse

1. Ava {{ui:Settings}} (hammasratas rakenduse ribal või {{key:Mod+,}}) ja mine vahekaardile {{ui:CadCraft}}.
2. Jaotises {{ui:Assistants}} märgi **Luba tehisintellekti assistentidel ja skriptidel CadCrafti kasutada**. Kuni sa seda ei tee, on see välja lülitatud.
3. Vali, mida see tohib teha. **Lugemine** on algselt märgitud; teised märgi ainult siis, kui neid vaja läheb.

| Luba | Mida assistent saab teha |
|---|---|
| Lugemine | Vaadata joonist: seda kirjeldada, objekte loetleda ja otsida, valikut näha, vaadet kirjeldada ja sellest pilti teha, joonist kontrollida kihi- ja joonistusreeglite vastu |
| Muutmine | Joonisel käske käivitada ja valikut muuta. Iga toiming on üks samm, mida saab tagasi võtta |
| Salvestamine | Joonist salvestada (töölaual selle faili, brauseris allalaadimisena) |
| Eksport | Plottida PDF-iks ja teha muid faile |

## Luba kasutada faile valitud kaustades

CadCraft Studios saab assistent avada, salvestada ja plottida faile nime järgi, ilma failidialoogideta, kuid ainult kaustades, mille lisad jaotises {{ui:Assistants}} › {{ui:Folders it may use}}:

1. Vali {{ui:Add a folder…}} ja vali kaust Studio enda dialoogis.
2. Assistent saab nüüd seal faile loetleda (`files_list`), joonise avada (`drawing_open`), salvestada selle seal DWG-versioonis või DXF-ina, plottida PDF- või SVG-faili, laadida LISP-faili ning anda käsule faili, mida see küsib (`INSERT` `F`, `XATTACH`, punktifail), või öelda, kuhu käsu fail läheb (`COUNT`i CSV, `PUBLISH`).
3. {{ui:Remove}} võtab kausta kohe tagasi. Teised teed kõikjal mujal keelatakse ning fail, mis seal juba on, asendatakse ainult siis, kui assistent seda nõuab või on faili ise kirjutanud.

Avamiseks on endiselt vaja **Lugemist**, joonise kirjutamiseks **Salvestamist**, muu faili jaoks **Eksporti**.

Tööriistu, mis jäävad väljapoole märgitud lube, assistendile üldse ei pakuta. Kui ta neid siiski küsib, keeldub CadCraft ja kirjutab selle tegevuste logisse. Lüliti väljalülitamine lõpetab kõik ühendused korraga. {{ui:Reset CadCraft settings}} lülitab selle samuti välja.

## Ühenda oma assistent

Assistendid ühenduvad sinu arvutis oleva **CadCraft Studio** kaudu: see käivitab väikese serveri, millele pääseb ligi ainult see arvuti (aadress `127.0.0.1`), ja seda kaitseb žetoon, mille Studio igal käivitamisel loob. Ava Studio, vali {{ui:Connect an assistant}} ja kopeeri aadress ja žetoon.

- Lisa oma assistendis MCP-server tüübiga HTTP, mille aadress on (näeb välja nii: `http://127.0.0.1:47615/mcp`) ja päis `Authorization: Bearer <token>`. Studio näitab sätteid, mida kleepida.

Studio nupp {{ui:New token}} paneb iga ühendatud assistendi uue žetooniga uuesti ühenduma. Ära jaga žetooni kunagi: igaüks, kellel see on, saab kasutada rakendusi, mille sina sisse lülitasid, nii kaua kui Studio töötab.

:::note
Brauseri vaheleht ei saa assistendile ühendust avada: brauseri rakendustes lüliti ei mõjuta midagi, kuni sa ei kasuta oma arvutis CadCraft Studiot.
:::

## Kontroll jääb sinule

- **Iga toiming on üks tagasivõtmise samm**, mille nimeks on assistendi nimetus, näiteks „Assistent: LINE“. Vajuta {{key:Mod+Z}}, et võtta assistendi viimane toiming tervikuna tagasi.
- **Sa näed, mida see teeb.** Selle käsud ilmuvad käskude ajalukku märgisega **[Assistant]** ees ning joonis joonistatakse töö käigus uuesti.
- **See ootab sind.** Kui sa oled käsu keskel, saab assistent joonist ainult lugeda, mitte muuta; talle öeldakse, et ta proovib uuesti, kui sa oled lõpetanud.
- **Sa tead, millal see on ühendatud.** Rakenduse ribal olev nupp nimetab assistendi, kui see on ühendatud. Klõpsa sellel, et näha, mida see tohib teha, või et **Katkesta ühendus**.
- **Tegevus.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Activity}} loetleb iga pöördumise: millal, millist tööriista, kas tehti või keelati ja millise tagasivõtmise sammu see tegi. {{ui:Save the log}} hoiab koopiat.

## Mida assistent saab paluda

| Tööriist | Luba | Mida see teeb |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lugemine | Joonise nimi, ühikud, kihid, plokid, lehed; mis ekraanil on |
| `files_list`, `drawing_open` | Lugemine | Studio: failid sinu kaustades; avab ühe neist selles aknas |
| `objects_list`, `object_get`, `selection_get` | Lugemine | Objektid koos geomeetria, pikkuse ja pindalaga (või ainult kui palju, tüübi ja kihi järgi); valik |
| `drawing_check` | Lugemine | Reeglid, näiteks lubatud kihid, midagi kihil 0, värvid ByLayer, teksti kõrgused |
| `view_screenshot` | Lugemine | Pilt joonisest nii, nagu see on kuvatud |
| `command_run` | Muutmine | Kirjutab käsureale: `LINE 0,0 @100,0 @0,50 ` loetakse nii, nagu sina seda kirjutaksid (tühik lõpetab vastuse), või nimekirja, kus on igaühe jaoks üks vastus. Ta võib jätta käsu lahtiseks ja jätkata järgmisel pöördumisel |
| `script_run` | Muutmine | Skript (`.scr`) või LISP-fail, nii nagu seda laadib {{ui:APPLOAD}} |
| `block_insert` | Muutmine | Paigutab ploki koos atribuutide väärtustega ühe sammuga |
| `selection_set`, `undo` | Muutmine | Valib objektid järgmise käsu jaoks; võtab tagasi oma sammud |
| `drawing_save` | Salvestamine | CadCrafti oma {{ui:Save}} või {{ui:Save as}} ühte sinu kaustadest |
| `drawing_plot` | Eksport | PDF või SVG lehest või mudelist, mõõtkavas või sobitatuna (PDF-aluseid ei plotita selle meetodiga veel) |

Kui assistent käivitab käsku, esitab CadCraft oma küsimused käsurealt, mitte dialoogis (näiteks kas lisada terve joonis või üks plokk), et assistent saaks neile vastata. Teek ja Otsing vajavad siiski sind; assistendile öeldakse, et ta palub sinult.

## Tööta failidega ilma CadCrafti avamata

CadCrafti MCP-server (`cadcraft-mcp`) ja käsurida (`cadcraft`) käivitavad CadCrafti enda joonistuskoodi Node.js-is ilma aknata. Need vajavad Node.js 20 või uuemat versiooni.

- **MCP-server** töötab ainult kaustades, mille sina nimetad, ja ainult lubadega, mille sina annad: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Ilma `--root`-ita ei saa ta ühtegi faili avada; ilma `--allow`-ta saab ta ainult lugeda. Ta saab lugeda ka IFC-mudeleid, koguste arvestusi ja PDF-komplektide märgistusi.
- **Käsurida** on mõeldud sinu enda skriptidele: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Mitu faili korraga: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Lisa `--json`, et saada väljund, mida programm saab lugeda.

:::note
Kui `npx @getcadcraft/mcp` ütleb, et paketti ei leita, pole seda veel avaldatud. Uudistest getcadcraft.com lehel näed, millal see ilmub.
:::

## Kui midagi ei tööta

- **Assistent ei näe CadCrafti tööriistu:** kontrolli, et lüliti on selles aknas sisse lülitatud ja et aken on Studios avatud.
- **„vajab muutmisluba“:** märgi jaotises {{ui:Assistants}} **Muutmine**, seejärel küsi uuesti.
- **„asub väljaspool kaustu, mida assistendid tohivad kasutada“:** lisa see kaust jaotises {{ui:Assistants}} › {{ui:Folders it may use}}, või palu assistendil kasutada faili kaustas, mille oled juba lisanud.
- **„401“ või žetooni viga:** žeton muutus (Studio taaskäivitati või {{ui:New token}}). Kopeeri uus assistendi sätetesse.
- **Selle muudatus oli vale:** vajuta {{key:Mod+Z}}. Üks vajutus võtab tagasi assistendi ühe terve toimingu.

## Vt ka

- [Retseptid tehisintellekti assistentidele](common:assistants-recipes): töönäited, igaüks koos tööriistadega, mida ta kutsub.
