---
title: Brug CadCraft med en AI-assistent
summary: Lad din egen AI-assistent eller dit script arbejde med CadCraft: hvad den må gøre, hvordan du forbinder en hvilken som helst MCP-klient, og hvordan du stadig har kontrollen (tilladelser, fortryd, aktivitetsloggen, Afbryd).
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, kommandolinje, cli, json, token, tilladelser, afbryd, aktivitet, mapper, stier, svg, batch
from: 06ba4ef6
---

## Hvad du lærer

Sådan lader du en AI-assistent (eller et script du selv har skrevet) kigge på en tegning, køre CadCrafts kommandoer, plotte og gemme, og bestemme hvad den må røre ved.

CadCraft har **ingen egen AI** og sender ikke noget nogen steder. Du medbringer assistenten: ethvert program, der taler Model Context Protocol (MCP). CadCraft giver den blot værktøjer, og du vælger hvilke.

Der er to måder at komme i gang på:

- **Tegningen du har åben.** Assistenten arbejder i dette vindue, ved siden af dig, via CadCraft Studio på din computer. Det er formålet med {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Assistenter}}.
- **Tegninger på din computer, uden at åbne programmet.** CadCraft MCP-serveren og kommandolinjen `cadcraft` læser og skriver DWG- og DXF-filer i mapper, du angiver. Se »Arbejd med filer uden at åbne CadCraft« nedenfor.

## Slå det til

1. Åbn {{ui:Indstillinger}} (tandhjulet i appbjælken, eller {{key:Mod+,}}) og gå til fanen {{ui:CadCraft}}.
2. Under {{ui:Assistenter}} sætter du flueben i **Lad AI-assistenter og scripts bruge CadCraft**. Den er slået fra, indtil du gør det.
3. Vælg, hvad den må gøre. **Læs** er sat til fra start; sæt flueben ved de andre først, når du har brug for dem.

| Tilladelse | Hvad assistenten kan gøre |
|---|---|
| Læs | Se på tegningen: beskrive den, liste og finde objekter, se valget, beskrive visningen og tage et billede af den, kontrollere den mod lag- og tegneregler |
| Rediger | Køre kommandoer på tegningen og ændre valget. Hver handling er ét trin, du kan fortryde |
| Gem | Gemme tegningen (på skrivebordet, til sin fil; i en browser, som download) |
| Eksporter | Plotte til PDF og lave andre filer |

## Lad den bruge filer i mapper, du vælger

I CadCraft Studio kan en assistent åbne, gemme og plotte filer ved navn i stedet for at bruge fildialogerne, men kun inde i de mapper, du tilføjer under {{ui:Assistenter}} › {{ui:Mapper, den må bruge}}:

1. Vælg {{ui:Tilføj en mappe…}} og vælg mappen i Studios egen dialogboks.
2. Assistenten kan nu liste filerne der (`files_list`), åbne en tegning (`drawing_open`), gemme den der i en DWG-version eller som DXF, plotte til en PDF- eller SVG-fil, indlæse en LISP-fil og give en kommando den fil, den beder om (`INSERT` `F`, `XATTACH`, en punktfil), eller sige, hvor en kommandos fil skal gemmes (`COUNT`s CSV, `PUBLISH`).
3. {{ui:Fjern}} tager en mappe tilbage med det samme. Stier andre steder afvises, og en fil, der allerede findes, erstattes kun, når assistenten beder om det, eller selv har skrevet filen.

Åbning kræver stadig **Læs**; at skrive en tegning kræver **Gem**; enhver anden fil kræver **Eksporter**.

Værktøjer uden for de tilladelser, du har sat flueben ved, tilbydes slet ikke assistenten, og beder den alligevel om et, afviser CadCraft det og skriver det i aktivitetsloggen. Slår du kontakten fra, afbrydes alle forbindelser med det samme. {{ui:Nulstil CadCraft-indstillinger}} slår den også fra.

## Forbind din assistent

Assistenter forbinder sig via **CadCraft Studio** på din computer: Studio kører en lille server, som kun denne computer kan nå (adressen `127.0.0.1`), beskyttet af et token, som Studio laver, hver gang den starter. Åbn Studio, vælg {{ui:Forbind en assistent}}, og kopiér adressen og tokenet.

- I din assistent tilføjer du en MCP-server af typen HTTP med adressen (den ser ud som `http://127.0.0.1:47615/mcp`) og headeren `Authorization: Bearer <token>`. Studio viser de indstillinger, du skal indsætte.

{{ui:Nyt token}} i Studio får hver forbundet assistent til at oprette forbindelse igen med det nye token. Del aldrig tokenet: enhver, der har det, kan bruge de programmer, du har slået til, så længe Studio kører.

:::note
En browserfane kan ikke åbne en forbindelse for en assistent: i browserprogrammerne har kontakten ingen virkning, før du bruger CadCraft Studio på din computer.
:::

## Du har stadig kontrollen

- **Hver handling er ét fortrydelsestrin**, mærket med assistentens navn for den, for eksempel »Assistent: LINE«. Tryk på {{key:Mod+Z}} for at tage assistentens sidste handling tilbage som helhed.
- **Du ser, hvad den gør.** Dens kommandoer vises i kommandohistorikken med **[Assistent]** foran, og tegningen tegnes om, mens den arbejder.
- **Den venter på dig.** Mens du er midt i en kommando, kan assistenten læse, men ikke ændre tegningen; den får besked om at prøve igen, når du er færdig.
- **Du ved, når en er forbundet.** En knap i appbjælken viser assistentens navn, mens den er forbundet. Klik på den for at se, hvad den må gøre, eller for at **Afbryd** den.
- **Aktivitet.** {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} viser hvert kald: hvornår, hvilket værktøj, udført eller afvist, og det fortrydelsestrin, det lavede. {{ui:Gem loggen}} gemmer en kopi.

## Hvad en assistent kan bede om

| Værktøj | Tilladelse | Hvad det gør |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Læs | Tegningens navn, enheder, lag, blokke, ark; hvad der vises på skærmen |
| `files_list`, `drawing_open` | Læs | Studio: filerne i dine mapper; åbn én i dette vindue |
| `objects_list`, `object_get`, `selection_get` | Læs | Objekter med deres geometri, længde og areal (eller kun hvor mange, efter type og lag); valget |
| `drawing_check` | Læs | Regler som tilladte lag, intet på lag 0, farver ByLayer, teksthøjder |
| `view_screenshot` | Læs | Et billede af tegningen, som den vises |
| `command_run` | Rediger | Skriver på kommandolinjen: `LINE 0,0 @100,0 @0,50 ` læses, som du ville skrive det (et mellemrum afslutter et svar), eller en liste med ét svar pr. linje. Den kan lade en kommando stå åben og fortsætte i næste kald |
| `script_run` | Rediger | Et script (`.scr`) eller en LISP-fil, sådan som {{ui:APPLOAD}} indlæser den |
| `block_insert` | Rediger | Placerer en blok med dens attributværdier i ét trin |
| `selection_set`, `undo` | Rediger | Vælger objekter til næste kommando; fortryder sine egne trin |
| `drawing_save` | Gem | CadCrafts egen {{ui:Gem}}, eller {{ui:Gem som}} i en af dine mapper |
| `drawing_plot` | Eksporter | En PDF eller SVG af et ark eller af modellen, i en målestok eller tilpasset (PDF-underlag udskrives ikke sådan endnu) |

Mens en assistent kører en kommando, stiller CadCraft sine spørgsmål på kommandolinjen i stedet for i en dialogboks (for eksempel om hele en tegning eller én blok skal indsættes), så assistenten kan svare på dem. Biblioteket og Søg kræver stadig dig; assistenten får besked om at spørge dig.

## Arbejd med filer uden at åbne CadCraft

CadCraft MCP-serveren (`cadcraft-mcp`) og kommandolinjen (`cadcraft`) kører CadCrafts egen tegnekode i Node.js uden vindue. De kræver Node.js 20 eller nyere.

- **MCP-serveren** virker kun inde i de mapper, du angiver, og kun med de tilladelser, du giver den: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Uden `--root` kan den ikke åbne nogen fil; uden `--allow` kan den kun læse. Den kan også læse IFC-modeller, mængdeudtræk og markeringerne i PDF-sæt.
- **Kommandolinjen** er til dine egne scripts: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Flere filer på én gang: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Tilføj `--json` for output, et program kan læse.

:::note
Hvis `npx @getcadcraft/mcp` siger, at pakken ikke findes, er den endnu ikke udgivet. Nyheder på getcadcraft.com fortæller, når den er det.
:::

## Hvis noget ikke virker

- **Assistenten ser ingen CadCraft-værktøjer:** kontroller, at kontakten er slået til i dette vindue, og at vinduet er åbent i Studio.
- **»kræver tilladelsen Rediger«:** sæt flueben i **Rediger** under {{ui:Assistenter}}, og spørg igen.
- **»uden for de mapper, assistenter må bruge«:** tilføj den mappe under {{ui:Assistenter}} › {{ui:Mapper, den må bruge}}, eller bed assistenten om at bruge en fil i en mappe, du allerede har tilføjet.
- **Fejl med »401« eller »token«:** tokenet er ændret (Studio er genstartet, eller {{ui:Nyt token}}). Kopiér det nye ind i assistentens indstillinger.
- **Dens ændring var forkert:** tryk {{key:Mod+Z}}. Ét tryk tager én hel handling fra assistenten tilbage.

## Se også

- [Opskrifter til AI-assistenter](common:assistants-recipes): gennemarbejdede eksempler, hver med de værktøjer, den kalder.
