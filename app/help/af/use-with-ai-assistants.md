---
title: Gebruik CadCraft met 'n KI-assistent
summary: Laat jou eie KI-assistent of skrip met CadCraft werk: wat dit mag doen, hoe jy enige MCP-kliënt koppel, en hoe jy in beheer bly (toestemmings, ontdoen, die aktiwiteitslogboek, Ontkoppel).
keywords: ki, assistent, agent, mcp, model context protocol, skrip, outomatisering, opdragreël, cli, json, token, toestemmings, ontkoppel, aktiwiteit, vouers, paaie, svg, lot
from: 06ba4ef6
---

## Wat jy sal leer

Hoe om 'n KI-assistent (of 'n skrip wat jy geskryf het) 'n tekening te laat sien, CadCraft se opdragte te laat uitvoer, plot en stoor, en te besluit wat dit mag raak.

CadCraft het **geen KI van sy eie nie** en stuur niks iewers heen nie. Jy bring die assistent: enige program wat die Model Context Protocol (MCP) praat. CadCraft gee dit net gereedskap, en jy kies watter.

Daar is twee maniere om in te kom:

- **Die tekening wat jy oop het.** Die assistent werk in hierdie venster, langs jou, deur CadCraft Studio op jou rekenaar. Dit is waarvoor {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} is.
- **Tekeninge op jou rekenaar, sonder om die program oop te maak.** Die CadCraft MCP-bediener en die `cadcraft`-opdragreël lees en skryf DWG- en DXF-lêers in vouers wat jy noem. Sien "Werk met lêers sonder om CadCraft oop te maak" hieronder.

## Skakel dit aan

1. Maak {{ui:Settings}} oop (die rat in die programbalk, of {{key:Mod+,}}) en gaan na die {{ui:CadCraft}}-oortjie.
2. Onder {{ui:Assistants}}, merk **Laat KI-assistente en skripte CadCraft gebruik**. Dit is af totdat jy dit doen.
3. Kies wat dit mag doen. **Lees** is by die begin gemerk; merk die ander slegs wanneer jy dit nodig het.

| Toestemming | Wat die assistent kan doen |
|---|---|
| Lees | Kyk na die tekening: beskryf dit, lys en vind voorwerpe, sien die seleksie, beskryf die aansig en neem 'n prent daarvan, kontroleer dit teen laag- en tekenreëls |
| Wysig | Voer opdragte op die tekening uit en verander die seleksie. Elke aksie is een stap wat jy kan ontdoen |
| Stoor | Stoor die tekening (op die rekenaar, na sy lêer; in 'n blaaier, as 'n aflaai) |
| Uitvoer | Plot na PDF en maak ander lêers |

## Laat dit lêers in vouers gebruik wat jy kies

In CadCraft Studio kan 'n assistent lêers oopmaak, stoor en plot deur naam in plaas van die lêerdialoë te gebruik, maar net binne die vouers wat jy onder {{ui:Assistants}} › {{ui:Folders it may use}} byvoeg:

1. Kies {{ui:Add a folder…}} en kies die vouer in Studio se eie dialoog.
2. Die assistent kan nou die lêers daar lys (`files_list`), 'n tekening oopmaak (`drawing_open`), dit daar stoor in 'n DWG-weergawe of as DXF, na 'n PDF- of SVG-lêer plot, 'n LISP-lêer laai, en 'n opdrag die lêer gee wat dit vra (`INSERT` `F`, `XATTACH`, 'n puntlêer) of sê waar 'n opdrag se lêer heen gaan (`COUNT` se CSV, `PUBLISH`).
3. {{ui:Remove}} neem 'n vouer dadelik terug. Paaie enige ander plek word geweer, en 'n lêer wat reeds daar is, word slegs vervang as die assistent dit vra of self die lêer geskryf het.

Oopmaak vereis steeds **Lees**; 'n tekening skryf vereis **Stoor**; enige ander lêer vereis **Uitvoer**.

Gereedskap buite die toestemmings wat jy gemerk het, word glad nie aan die assistent aangebied nie, en as dit tog een vra, weier CadCraft dit en skryf dit in die aktiwiteitslogboek. Om die skakelaar af te skakel, beëindig elke verbinding terselfdertyd. {{ui:Reset CadCraft settings}} skakel dit ook af.

## Koppel jou assistent

Assistente koppel deur **CadCraft Studio** op jou rekenaar: dit laat 'n klein bediener loop wat net hierdie rekenaar kan bereik (adres `127.0.0.1`), beskerm deur 'n token wat Studio elke keer maak wanneer dit begin. Maak Studio oop, kies {{ui:Connect an assistant}}, en kopieer die adres en die token.

- In jou assistent, voeg 'n MCP-bediener van tipe HTTP by met die adres (dit lyk soos `http://127.0.0.1:47615/mcp`) en die kopskrif `Authorization: Bearer <token>`. Studio wys die instellings om in te plak.

{{ui:New token}} in Studio laat elke gekoppelde assistent weer koppel met die nuwe token. Deel die token nooit nie: enigiemand met dit kan die programme gebruik wat jy aangeskakel het, solank Studio loop.

:::note
'n Blaaieroortjie kan nie 'n verbinding vir 'n assistent oopmaak nie: in die blaaierprogramme het die skakelaar geen effek totdat jy CadCraft Studio op jou rekenaar gebruik nie.
:::

## Jy bly in beheer

- **Elke aksie is een ontdoen-stap**, met die naam van die assistent daarvoor, byvoorbeeld "Assistent: LINE". Druk {{key:Mod+Z}} om die assistent se laaste aksie as geheel terug te neem.
- **Jy sien wat dit doen.** Die opdragte verskyn in die opdraggeskiedenis met **[Assistent]** voor, en die tekening teken homself weer terwyl dit werk.
- **Dit wag vir jou.** Terwyl jy midde-in 'n opdrag is, kan die assistent wel lees maar nie die tekening verander nie; dit word gesê om weer te probeer wanneer jy klaar is.
- **Jy weet wanneer een gekoppel is.** 'n Knoppie in die programbalk noem die assistent terwyl dit gekoppel is. Klik daarop om te sien wat dit mag doen, of om dit te **Ontkoppel**.
- **Aktiwiteit.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Activity}} lys elke oproep: wanneer, watter gereedskap, klaar of geweier, en die ontdoen-stap wat dit gemaak het. {{ui:Save the log}} hou 'n kopie.

## Wat 'n assistent kan vra

| Gereedskap | Toestemming | Wat dit doen |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lees | Die tekening se naam, eenhede, lae, blokke, blaaie; wat op die skerm is |
| `files_list`, `drawing_open` | Lees | Studio: die lêers in jou vouers; maak een oop in hierdie venster |
| `objects_list`, `object_get`, `selection_get` | Lees | Voorwerpe met hul meetkunde, lengte en oppervlakte (of net hoeveel, volgens tipe en laag); die seleksie |
| `drawing_check` | Lees | Reëls soos toegelate lae, niks op laag 0 nie, kleure ByLayer, teksthoogtes |
| `view_screenshot` | Lees | 'n Prent van die tekening soos dit gewys word |
| `command_run` | Wysig | Tik op die opdraglyn: `LINE 0,0 @100,0 @0,50 ` lees soos jy dit sou tik ('n spasie beëindig 'n antwoord), of 'n lys met een antwoord elk. Dit kan 'n opdrag oop laat en in sy volgende oproep voortgaan |
| `script_run` | Wysig | 'n Skrip (`.scr`) of 'n LISP-lêer, soos {{ui:APPLOAD}} dit laai |
| `block_insert` | Wysig | Plaas 'n blok met sy kenmerkwaardes in een stap |
| `selection_set`, `undo` | Wysig | Kies voorwerpe vir die volgende opdrag; ontdoen sy eie stappe |
| `drawing_save` | Stoor | CadCraft se eie {{ui:Save}}, of {{ui:Save as}} in een van jou vouers |
| `drawing_plot` | Uitvoer | 'n PDF of SVG van 'n blad of van die model, op 'n skaal of ingepas (PDF-onderlêers word nog nie so gedruk nie) |

Terwyl 'n assistent 'n opdrag laat loop, vra CadCraft sy vrae op die opdraglyn in plaas van in 'n dialoog (byvoorbeeld of 'n hele tekening of een blok ingevoeg moet word), sodat die assistent hulle kan beantwoord. Die biblioteek en Soek het steeds jou nodig; die assistent word gesê om jou te vra.

## Werk met lêers sonder om CadCraft oop te maak

Die CadCraft MCP-bediener (`cadcraft-mcp`) en die opdragreël (`cadcraft`) loop CadCraft se eie tekenkode in Node.js, sonder 'n venster. Hulle benodig Node.js 20 of nuwer.

- **Die MCP-bediener** werk net binne die vouers wat jy noem, en net met die toestemmings wat jy dit gee: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Sonder `--root` kan dit geen lêer oopmaak nie; sonder `--allow` kan dit net lees. Dit kan ook IFC-modelle, hoeveelheidsopnames en die merkings in PDF-stelle lees.
- **Die opdragreël** is vir jou eie skrifte: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Verskeie lêers op een slag: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Voeg `--json` by vir uitvoer wat 'n program kan lees.

:::note
As `npx @getcadcraft/mcp` sê die pakket is nie gevind nie, is dit nog nie gepubliseer nie. Nuus op getcadcraft.com sal sê wanneer dit is.
:::

## As iets nie werk nie

- **Die assistent sien geen CadCraft-gereedskap nie:** kyk dat die skakelaar in hierdie venster aan is, en dat die venster in Studio oop is.
- **"needs the edit permission":** merk **Wysig** onder {{ui:Assistants}}, en vra dan weer.
- **"outside the folders assistants may use":** voeg daardie vouer by onder {{ui:Assistants}} › {{ui:Folders it may use}}, of vra die assistent om 'n lêer te gebruik in 'n vouer wat jy reeds bygevoeg het.
- **"401"- of "token"-foute:** die token het verander (Studio is herbegin, of {{ui:New token}}). Kopieer die nuwe een in die assistent se instellings.
- **Die verandering was verkeerd:** druk {{key:Mod+Z}}. Een druk neem een hele aksie van die assistent terug.

## Sien ook

- [Resepte vir KI-assistente](common:assistants-recipes): uitgewerkte voorbeelde, elk met die gereedskap wat dit roep.
