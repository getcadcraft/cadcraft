---
title: Använd CadCraft med en AI-assistent
summary: Låt din egen AI-assistent eller ditt skript arbeta med CadCraft: vad den får göra, hur du ansluter valfri MCP-klient och hur du hela tiden har kontrollen (behörigheter, ångra, aktivitetsloggen, Koppla från).
keywords: ai, assistent, agent, mcp, model context protocol, skript, automatisering, kommandorad, cli, json, token, behörigheter, koppla från, aktivitet, mappar, sökvägar, svg, batch
from: 06ba4ef6
---

## Vad du lär dig

Hur du låter en AI-assistent (eller ett skript du skrivit) titta på en ritning, köra CadCraft-kommandon, plotta och spara, och bestämma vad den får ändra.

CadCraft har **ingen AI egen** och skickar inget någonstans. Du tar med assistenten: valfritt program som talar Model Context Protocol (MCP). CadCraft ger den bara verktyg, och du väljer vilka.

Det finns två sätt in:

- **Ritningen du har öppen.** Assistenten arbetar i det här fönstret, bredvid dig, via CadCraft Studio på din dator. Det här är vad {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Assistenter}} används till.
- **Ritningar på din dator, utan att öppna appen.** CadCraft MCP-servern och kommandoraden `cadcraft` läser och skriver DWG- och DXF-filer i mappar du anger. Se "Arbeta med filer utan att öppna CadCraft" nedan.

## Slå på det

1. Öppna {{ui:Inställningar}} (kugghjulet i appfältet, eller {{key:Mod+,}}) och gå till fliken {{ui:CadCraft}}.
2. Under {{ui:Assistenter}}, bocka i **Låt AI-assistenter och skript använda CadCraft**. Den är avstängd tills du gör det.
3. Välj vad den får göra. **Läs** är ibockad från början; bocka i de andra bara när du behöver dem.

| Behörighet | Vad assistenten kan göra |
|---|---|
| Läs | Titta på ritningen: beskriva den, lista och hitta objekt, se markeringen, beskriva vyn och ta en bild av den, kontrollera den mot lager- och ritregler |
| Redigera | Köra kommandon på ritningen och ändra markeringen. Varje åtgärd är ett steg du kan ångra |
| Spara | Spara ritningen (på skrivbordet, till dess fil; i en webbläsare, som en nedladdning) |
| Exportera | Plotta till PDF och skapa andra filer |

## Låt den använda filer i mappar du väljer

I CadCraft Studio kan en assistent öppna, spara och plotta filer med namn i stället för att använda fildialogerna, men bara inom de mappar du lägger till under {{ui:Assistenter}} › {{ui:Mappar den får använda}}:

1. Välj {{ui:Lägg till en mapp…}} och välj mappen i Studios egna dialog.
2. Assistenten kan nu lista filerna där (`files_list`), öppna en ritning (`drawing_open`), spara den där i en DWG-version eller som DXF, plotta till en PDF- eller SVG-fil, läsa in en LISP-fil, och ge ett kommando den fil det frågar efter (`INSERT` `F`, `XATTACH`, en punktfil) eller säga var ett kommandos fil ska hamna (`COUNT`:s CSV, `PUBLISH`).
3. {{ui:Ta bort (R)}} tar tillbaka en mapp direkt. Sökvägar någon annanstans nekas, och en fil som redan finns där ersätts bara när assistenten begär det eller när den själv skrev filen.

Att öppna kräver fortfarande **Läs**; att spara en ritning kräver **Spara**; alla andra filer kräver **Exportera**.

Verktyg utanför de behörigheter du bockat i erbjuds inte assistenten alls. Om den ändå begär ett sådant verktyg nekar CadCraft och skriver det i aktivitetsloggen. Om du stänger av omkopplaren avslutas alla anslutningar på en gång. {{ui:Återställ CadCraft-inställningar}} stänger av den också.

## Anslut din assistent

Assistenter ansluter via **CadCraft Studio** på din dator: Studio kör en liten server som bara den här datorn kan nå (adressen `127.0.0.1`), skyddad av en token som Studio skapar varje gång den startar. Öppna Studio, välj {{ui:Anslut en assistent}} och kopiera adressen och token.

- I din assistent, lägg till en MCP-server av typen HTTP med adressen (den ser ut så här: `http://127.0.0.1:47615/mcp`) och huvudet `Authorization: Bearer <token>`. Studio visar inställningarna att klistra in.

{{ui:Ny token}} i Studio gör att varje ansluten assistent ansluter om med den nya token. Dela aldrig token: den som har den kan använda de appar du slagit på, så länge Studio körs.

:::note
En webbläsarflik kan inte öppna en anslutning för en assistent: i webbläsarapparna har omkopplaren ingen effekt förrän du använder CadCraft Studio på din dator.
:::

## Du har kontrollen

- **Varje åtgärd är ett enda ångra-steg**, märkt med assistentens namn för den, till exempel "Assistent: LINE". Tryck {{key:Mod+Z}} för att ta tillbaka assistentens senaste åtgärd i sin helhet.
- **Du ser vad den gör.** Dess kommandon visas i kommandohistoriken med **[Assistent]** framför, och ritningen ritas om när den arbetar.
- **Den väntar på dig.** Medan du är mitt i ett kommando kan assistenten läsa men inte ändra ritningen; den får besked att försöka igen när du är klar.
- **Du vet när en är ansluten.** En knapp i appfältet visar assistentens namn medan den är ansluten. Klicka på den för att se vad den får göra, eller för att **Koppla från** den.
- **Aktivitet.** {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} listar varje anrop: när, vilket verktyg, klart eller nekat, och vilket ångra-steg det gjorde. {{ui:Spara loggen}} sparar en kopia.

## Vad en assistent kan begära

| Verktyg | Behörighet | Vad det gör |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Läs | Ritningens namn, enheter, lager, block, blad; vad som syns på skärmen |
| `files_list`, `drawing_open` | Läs | Studio: filerna i dina mappar; öppna en av dem i det här fönstret |
| `objects_list`, `object_get`, `selection_get` | Läs | Objekt med geometri, längd och area (eller bara hur många, efter typ och lager); markeringen |
| `drawing_check` | Läs | Regler som tillåtna lager, inget på lager 0, färger Enligt lager, texthöjder |
| `view_screenshot` | Läs | En bild av ritningen så som den visas |
| `command_run` | Redigera | Skriver på kommandoraden: `LINE 0,0 @100,0 @0,50 ` läses så som du skulle skriva det (ett mellanslag avslutar ett svar), eller en lista med ett svar var. Den kan lämna ett kommando öppet och fortsätta i nästa anrop |
| `script_run` | Redigera | Ett skript (`.scr`) eller en LISP-fil, så som {{ui:APPLOAD}} läser in den |
| `block_insert` | Redigera | Placerar ett block med dess attributvärden i ett steg |
| `selection_set`, `undo` | Redigera | Markerar objekt för nästa kommando; ångrar sina egna steg |
| `drawing_save` | Spara | CadCraft:s egen {{ui:Spara}}, eller {{ui:Spara som}} i en av dina mappar |
| `drawing_plot` | Exportera | En PDF eller SVG av ett blad eller av modellen, i en skala eller anpassad (PDF-underlägg skrivs inte ut på det här sättet ännu) |

När en assistent kör ett kommando ställer CadCraft sina frågor på kommandoraden i stället för i en dialogruta (till exempel om man ska infoga en hel ritning eller ett block), så att assistenten kan svara på dem. Biblioteket och Sök behöver fortfarande dig; assistenten får besked att fråga dig.

## Arbeta med filer utan att öppna CadCraft

CadCraft MCP-servern (`cadcraft-mcp`) och kommandoraden (`cadcraft`) kör CadCraft:s egen ritningskod i Node.js, utan något fönster. De kräver Node.js 20 eller nyare.

- **MCP-servern** fungerar bara inom de mappar du anger, och bara med de behörigheter du ger den: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Utan `--root` kan den inte öppna någon fil; utan `--allow` kan den bara läsa. Den kan också läsa IFC-modeller, mängdavtagningar och markeringarna i PDF-set.
- **Kommandoraden** är till för dina egna skript: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Flera filer på en gång: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Lägg till `--json` för utdata som ett program kan läsa.

:::note
Om `npx @getcadcraft/mcp` säger att paketet inte hittas har det inte publicerats ännu. Nyheter på getcadcraft.com säger till när det har gjorts.
:::

## Om något inte fungerar

- **Assistenten ser inga CadCraft-verktyg:** kontrollera att omkopplaren är på i det här fönstret och att fönstret är öppet i Studio.
- **"behöver redigeringsbehörighet":** bocka i **Redigera** under {{ui:Assistenter}}, och be sedan om det igen.
- **"utanför de mappar assistenter får använda":** lägg till den mappen under {{ui:Assistenter}} › {{ui:Mappar den får använda}}, eller be assistenten använda en fil i en mapp du redan lagt till.
- **"401"- eller "token"-fel:** token har ändrats (Studio startades om, eller {{ui:Ny token}}). Kopiera den nya till assistentens inställningar.
- **Dess ändring var fel:** tryck {{key:Mod+Z}}. Ett tryck tar tillbaka ett helt steg av assistentens arbete.

## Se även

- [Recept för AI-assistenter](common:assistants-recipes): arbetade exempel, vart och ett med de verktyg det anropar.
