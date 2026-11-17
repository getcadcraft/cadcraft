---
title: CadCraft gebruiken met een AI-assistent
summary: Laat uw eigen AI-assistent of script met CadCraft werken: wat het mag doen, hoe u elke MCP-client verbindt en hoe u de regie houdt (rechten, ongedaan maken, het activiteitenlogboek, Verbinding verbreken).
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, opdrachtregel, cli, json, token, rechten, verbreken, activiteit, mappen, paden, svg, batch
from: 06ba4ef6
---

## Wat u leert

Hoe u een AI-assistent (of een script dat u zelf schreef) een tekening laat bekijken, CadCraft-opdrachten laat uitvoeren, plotten en opslaan, en hoe u bepaalt wat die mag aanraken.

CadCraft heeft **geen eigen AI** en stuurt niets ergens naartoe. U brengt de assistent mee: elk programma dat het Model Context Protocol (MCP) spreekt. CadCraft geeft die alleen hulpmiddelen, en u kiest welke.

Er zijn twee manieren om te beginnen:

- **De tekening die u open heeft.** De assistent werkt in dit venster, naast u, via CadCraft Studio op uw computer. Hiervoor is {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Assistenten}} bedoeld.
- **Tekeningen op uw computer, zonder de app te openen.** De CadCraft MCP-server en de `cadcraft`-opdrachtregel lezen en schrijven DWG- en DXF-bestanden in mappen die u opgeeft. Zie "Met bestanden werken zonder CadCraft te openen" hieronder.

## Inschakelen

1. Open {{ui:Instellingen}} (het tandwiel in de appbalk, of {{key:Mod+,}}) en ga naar het tabblad {{ui:CadCraft}}.
2. Vink onder {{ui:Assistenten}} **AI-assistenten en scripts CadCraft laten gebruiken** aan. Dit staat uit totdat u dat doet.
3. Kies wat die mag doen. **Lezen** is vanaf het begin aangevinkt; vink de andere alleen aan wanneer u ze nodig heeft.

| Recht | Wat de assistent kan doen |
|---|---|
| Lezen | De tekening bekijken: beschrijven, objecten weergeven en zoeken, de selectie zien, de weergave beschrijven en er een afbeelding van maken, controleren aan de hand van laag- en tekenregels |
| Bewerken | Opdrachten op de tekening uitvoeren en de selectie wijzigen. Elke actie is één stap die u ongedaan kunt maken |
| Opslaan | De tekening opslaan (op de desktop, naar het bestand; in een browser als download) |
| Exporteren | Plotten naar PDF en andere bestanden maken |

## Laat het bestanden gebruiken in mappen die u kiest

In CadCraft Studio kan een assistent bestanden op naam openen, opslaan en plotten in plaats van de bestandsdialogen te gebruiken, maar alleen binnen de mappen die u toevoegt onder {{ui:Assistenten}} › {{ui:Mappen die ze mogen gebruiken}}:

1. Kies {{ui:Een map toevoegen…}} en kies de map in het eigen dialoogvenster van Studio.
2. De assistent kan nu de bestanden daarin weergeven (`files_list`), een tekening openen (`drawing_open`), die daar opslaan in een DWG-versie of als DXF, plotten naar een PDF- of SVG-bestand, een LISP-bestand laden, en een opdracht het bestand geven dat die vraagt (`INSERT` `F`, `XATTACH`, een puntenbestand) of aangeven waar het bestand van een opdracht naartoe gaat (het CSV-bestand van `COUNT`, `PUBLISH`).
3. {{ui:Verwijderen}} haalt een map meteen weer terug. Paden buiten die mappen worden geweigerd, en een bestand dat al bestaat, wordt alleen vervangen wanneer de assistent daarom vraagt of wanneer hij het bestand zelf schreef.

Openen vereist nog steeds **Lezen**; een tekening schrijven vereist **Opslaan**; elk ander bestand vereist **Exporteren**.

Hulpmiddelen buiten de rechten die u heeft aangevinkt, worden de assistent helemaal niet aangeboden. Vraagt de assistent er toch om, dan weigert CadCraft dat en schrijft het dat in het activiteitenlogboek. Het uitzetten van de schakelaar beëindigt meteen elke verbinding. {{ui:CadCraft-instellingen opnieuw instellen}} zet die ook uit.

## Verbind uw assistent

Assistenten verbinden via **CadCraft Studio** op uw computer: die start een kleine server die alleen deze computer kan bereiken (adres `127.0.0.1`), beschermd door een token dat Studio elke keer maakt wanneer het start. Open Studio, kies {{ui:Een assistent verbinden}} en kopieer het adres en het token.

- Voeg in uw assistent een MCP-server van het type HTTP toe met het adres (het ziet eruit als `http://127.0.0.1:47615/mcp`) en de header `Authorization: Bearer <token>`. Studio toont de instellingen om te plakken.

{{ui:Nieuw token}} in Studio laat elke verbonden assistent opnieuw verbinden met het nieuwe token. Deel het token nooit: iedereen die het heeft, kan de apps gebruiken die u heeft ingeschakeld, zolang Studio draait.

:::note
Een browsertabblad kan geen verbinding voor een assistent openen: in de browserapps heeft de schakelaar geen effect totdat u CadCraft Studio op uw computer gebruikt.
:::

## U houdt de regie

- **Elke actie is één stap die u ongedaan kunt maken**, met de naam van de assistent ervoor, bijvoorbeeld "Assistent: LINE". Druk op {{key:Mod+Z}} om de laatste actie van de assistent in zijn geheel terug te draaien.
- **U ziet wat het doet.** De opdrachten verschijnen in de opdrachtgeschiedenis met **[Assistent]** ervoor, en de tekening wordt opnieuw getekend terwijl het werkt.
- **Het wacht op u.** Terwijl u midden in een opdracht zit, kan de assistent de tekening lezen maar niet wijzigen; het krijgt te horen het opnieuw te proberen wanneer u klaar bent.
- **U weet wanneer er een verbonden is.** Een knop in de appbalk noemt de assistent terwijl hij verbonden is. Klik erop om te zien wat hij mag, of om de verbinding te **verbreken**.
- **Activiteit.** {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Assistenten}} › {{ui:Activiteit}} toont elke aanroep: wanneer, welk hulpmiddel, gedaan of geweigerd, en de stap om ongedaan te maken die het maakte. {{ui:Het logboek opslaan}} bewaart een kopie.

## Wat een assistent kan vragen

| Hulpmiddel | Recht | Wat het doet |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lezen | De naam van de tekening, eenheden, lagen, blokken, bladen; wat er op het scherm staat |
| `files_list`, `drawing_open` | Lezen | Studio: de bestanden in uw mappen; open er een in dit venster |
| `objects_list`, `object_get`, `selection_get` | Lezen | Objecten met hun geometrie, lengte en oppervlakte (of alleen hoeveel, per type en laag); de selectie |
| `drawing_check` | Lezen | Regels zoals toegestane lagen, niets op laag 0, kleuren ByLayer, teksthoogten |
| `view_screenshot` | Lezen | Een afbeelding van de tekening zoals die getoond wordt |
| `command_run` | Bewerken | Typt op de opdrachtregel: `LINE 0,0 @100,0 @0,50 ` wordt gelezen zoals u het zou typen (een spatie beëindigt een antwoord), of een lijst met één antwoord per regel. Het kan een opdracht open laten en er bij de volgende aanroep mee doorgaan |
| `script_run` | Bewerken | Een script (`.scr`) of een LISP-bestand, zoals {{ui:APPLOAD}} het laadt |
| `block_insert` | Bewerken | Plaatst een blok met zijn attribuutwaarden in één stap |
| `selection_set`, `undo` | Bewerken | Selecteert objecten voor de volgende opdracht; maakt zijn eigen stappen ongedaan |
| `drawing_save` | Opslaan | CadCraft's eigen {{ui:Opslaan}}, of {{ui:Opslaan als}} in een van uw mappen |
| `drawing_plot` | Exporteren | Een PDF of SVG van een blad of van het model, op een schaal of passend gemaakt (PDF-onderleggers worden zo nog niet afgedrukt) |

Terwijl een assistent een opdracht uitvoert, stelt CadCraft zijn vragen op de opdrachtregel in plaats van in een dialoogvenster (bijvoorbeeld of een hele tekening of één blok ingevoegd moet worden), zodat de assistent ze kan beantwoorden. Bibliotheek en Zoeken hebben nog steeds u nodig; de assistent krijgt te horen u te vragen.

## Met bestanden werken zonder CadCraft te openen

De CadCraft MCP-server (`cadcraft-mcp`) en de opdrachtregel (`cadcraft`) draaien de eigen tekencode van CadCraft in Node.js, zonder venster. Ze hebben Node.js 20 of nieuwer nodig.

- De MCP-server werkt alleen binnen de mappen die u noemt, en alleen met de rechten die u eraan geeft: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Zonder `--root` kan het geen bestand openen; zonder `--allow` kan het alleen lezen. Het kan ook IFC-modellen, opmetingen (takeoff) en de markups in PDF-sets lezen.
- De opdrachtregel is voor uw eigen scripts: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Meerdere bestanden tegelijk: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Voeg `--json` toe voor uitvoer die een programma kan lezen.

:::note
Als `npx @getcadcraft/mcp` meldt dat het pakket niet gevonden is, is het nog niet gepubliceerd. Nieuws op getcadcraft.com laat weten wanneer dat wel zo is.
:::

## Als iets niet werkt

- **De assistent ziet geen CadCraft-hulpmiddelen:** controleer of de schakelaar in dit venster aan staat, en of het venster open is in Studio.
- **"heeft het bewerkingsrecht nodig":** vink **Bewerken** aan onder {{ui:Assistenten}}, en vraag daarna opnieuw.
- **"buiten de mappen die assistenten mogen gebruiken":** voeg die map toe onder {{ui:Assistenten}} › {{ui:Mappen die ze mogen gebruiken}}, of vraag de assistent een bestand te gebruiken in een map die u al heeft toegevoegd.
- **Fouten met "401" of "token":** het token is gewijzigd (Studio is opnieuw gestart, of {{ui:Nieuw token}}). Kopieer het nieuwe token naar de instellingen van de assistent.
- **De wijziging was verkeerd:** druk op {{key:Mod+Z}}. Eén keer drukken haalt één volledige actie van de assistent terug.

## Zie ook

- [Recepten voor AI-assistenten](common:assistants-recipes): uitgewerkte voorbeelden, elk met de hulpmiddelen die het aanroept.
