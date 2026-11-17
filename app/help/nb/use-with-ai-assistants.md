---
title: Bruk CadCraft med en KI-assistent
summary: La din egen KI-assistent eller ditt eget skript arbeide med CadCraft: hva den kan gjøre, hvordan du kobler til en MCP-klient, og hvordan du beholder kontrollen (tillatelser, angre, aktivitetsloggen, Koble fra).
keywords: KI, assistent, agent, mcp, model context protocol, skript, automatisering, kommandolinje, cli, json, token, tillatelser, koble fra, aktivitet, mapper, stier, svg, batch
from: 06ba4ef6
---

## Hva du lærer

Hvordan du lar en KI-assistent (eller et skript du har skrevet) se på en tegning, kjøre CadCraft-kommandoer, plotte og lagre, og bestemme hva den har lov til å endre.

CadCraft har **ingen egen KI** og sender ingenting noe sted. Du tar med assistenten: et hvilket som helst program som snakker Model Context Protocol (MCP). CadCraft gir den bare verktøy, og du velger hvilke.

Det finnes to måter å komme i gang på:

- **Tegningen du har åpen.** Assistenten jobber i dette vinduet, ved siden av deg, gjennom CadCraft Studio på datamaskinen din. Det er til dette {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Assistenter}} er.
- **Tegninger på datamaskinen din, uten å åpne programmet.** CadCraft MCP-serveren og `cadcraft`-kommandolinjen leser og skriver DWG- og DXF-filer i mapper du angir. Se «Arbeid med filer uten å åpne CadCraft» nedenfor.

## Slå den på

1. Åpne {{ui:Innstillinger}} (tannhjulet i programlinjen, eller {{key:Mod+,}}) og gå til fanen {{ui:CadCraft}}.
2. Under {{ui:Assistenter}}, kryss av for **La KI-assistenter og skript bruke CadCraft**. Den er av til du gjør dette.
3. Velg hva den har lov til å gjøre. **Les** er avkrysset fra start; kryss av de andre bare når du trenger dem.

| Tillatelse | Hva assistenten kan gjøre |
|---|---|
| Les | Se på tegningen: beskrive den, liste opp og finne objekter, se utvalget, beskrive visningen og ta et bilde av den, kontrollere den mot lag- og tegneregler |
| Rediger | Kjøre kommandoer på tegningen og endre utvalget. Hver handling er ett steg du kan angre |
| Lagre | Lagre tegningen (på skrivebordet, til filen sin; i en nettleser, som en nedlasting) |
| Eksporter | Plotte til PDF og lage andre filer |

## La den bruke filer i mapper du velger

I CadCraft Studio kan en assistent åpne, lagre og plotte filer etter navn i stedet for å bruke filvinduene, men bare inni mappene du legger til under {{ui:Assistenter}} › {{ui:Mapper den kan bruke}}:

1. Velg {{ui:Legg til en mappe…}} og velg mappen i Studios eget dialogvindu.
2. Assistenten kan nå liste opp filene der (`files_list`), åpne en tegning (`drawing_open`), lagre den der i en DWG-versjon eller som DXF, plotte til en PDF- eller SVG-fil, laste en LISP-fil, og gi en kommando filen den ber om (`INSERT` `F`, `XATTACH`, en punktfil) eller si hvor filen til en kommando skal lagres (CSV-filen til `COUNT`, `PUBLISH`).
3. {{ui:Fjern}} tar en mappe tilbake med én gang. Stier andre steder blir avvist, og en fil som allerede finnes, blir bare erstattet når assistenten ber om det, eller hvis den selv skrev filen.

Å åpne krever fortsatt **Les**; å skrive en tegning krever **Lagre**; enhver annen fil krever **Eksporter**.

Verktøy utenfor tillatelsene du har krysset av for, blir ikke tilbudt assistenten i det hele tatt, og hvis den ber om et likevel, avviser CadCraft det og skriver det i aktivitetsloggen. Å slå av bryteren avslutter alle tilkoblinger med én gang. {{ui:Tilbakestill CadCraft-innstillinger}} slår den også av.

## Koble til assistenten

Assistenter kobler seg til via **CadCraft Studio** på datamaskinen din: Studio kjører en liten server som bare denne datamaskinen kan nå (adressen `127.0.0.1`), beskyttet av en token som Studio lager hver gang den starter. Åpne Studio, velg {{ui:Koble til en assistent}}, og kopier adressen og tokenet.

- I assistenten din legger du til en MCP-server av typen HTTP med adressen (den ser slik ut: `http://127.0.0.1:47615/mcp`) og headeren `Authorization: Bearer <token>`. Studio viser innstillingene du skal lime inn.

{{ui:Ny token}} i Studio får alle tilkoblede assistenter til å koble til på nytt med det nye tokenet. Del aldri tokenet: den som har det, kan bruke programmene du har slått på, så lenge Studio kjører.

:::note
En nettleserfane kan ikke åpne en tilkobling for en assistent: i nettleserprogrammene har bryteren ingen effekt før du bruker CadCraft Studio på datamaskinen din.
:::

## Du har kontrollen

- **Hver handling er ett angrestegg**, merket med assistentens navn for den, for eksempel «Assistent: LINE». Trykk {{key:Mod+Z}} for å ta tilbake assistentens siste handling som helhet.
- **Du ser hva den gjør.** Kommandoene den kjører, vises i kommandohistorikken med **[Assistent]** foran, og tegningen tegnes om mens den arbeider.
- **Den venter på deg.** Mens du er midt i en kommando, kan assistenten lese, men ikke endre tegningen; den får beskjed om å prøve igjen når du er ferdig.
- **Du vet når en er tilkoblet.** En knapp i programlinjen viser navnet på assistenten mens den er tilkoblet. Klikk på den for å se hva den har lov til, eller for å **koble den fra**.
- **Aktivitet.** {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} lister opp hvert kall: når det skjedde, hvilket verktøy, om det ble utført eller avvist, og angresteget det laget. {{ui:Lagre loggen}} lagrer en kopi.

## Hva en assistent kan be om

| Verktøy | Tillatelse | Hva det gjør |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Les | Tegningens navn, enheter, lag, blokker og ark; hva som vises på skjermen |
| `files_list`, `drawing_open` | Les | Studio: filene i mappene dine; åpne én av dem i dette vinduet |
| `objects_list`, `object_get`, `selection_get` | Les | Objekter med geometri, lengde og areal (eller bare hvor mange, etter type og lag); utvalget |
| `drawing_check` | Les | Regler som tillatte lag, ingenting på lag 0, farger ByLayer, teksthøyder |
| `view_screenshot` | Les | Et bilde av tegningen slik den vises |
| `command_run` | Rediger | Skriver på kommandolinjen: `LINE 0,0 @100,0 @0,50 ` leses slik du ville skrevet den (et mellomrom avslutter et svar), eller en liste med ett svar hver. Den kan la en kommando stå åpen og fortsette i neste kall |
| `script_run` | Rediger | Et skript (`.scr`) eller en LISP-fil, slik {{ui:APPLOAD}} laster den |
| `block_insert` | Rediger | Setter inn en blokk med verdiene til attributtene sine i ett steg |
| `selection_set`, `undo` | Rediger | Velger objekter for neste kommando; angrer sine egne steg |
| `drawing_save` | Lagre | CadCraft sitt eget {{ui:Lagre}}, eller {{ui:Lagre som}} i en av mappene dine |
| `drawing_plot` | Eksporter | En PDF eller SVG av et ark eller av modellen, i en målestokk eller tilpasset (PDF-underlag skrives ikke ut på denne måten ennå) |

Mens en assistent kjører en kommando, stiller CadCraft spørsmålene sine på kommandolinjen i stedet for i en dialogboks (for eksempel om hele tegningen skal settes inn, eller bare én blokk), slik at assistenten kan svare på dem. Biblioteket og Finn-funksjonen krever fortsatt at du er med; assistenten får beskjed om å spørre deg.

## Arbeid med filer uten å åpne CadCraft

CadCraft MCP-serveren (`cadcraft-mcp`) og kommandolinjen (`cadcraft`) kjører CadCrafts egen tegnekode i Node.js, uten vindu. De krever Node.js 20 eller nyere.

- **MCP-serveren** arbeider bare inne i mappene du oppgir, og bare med tillatelsene du gir den: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Uten `--root` kan den ikke åpne noen fil; uten `--allow` kan den bare lese. Den kan også lese IFC-modeller, mengdeuttak og markeringene i PDF-settene.
- **Kommandolinjen** er til dine egne skript: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Flere filer om gangen: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Legg til `--json` for utdata som et program kan lese.

:::note
Hvis `npx @getcadcraft/mcp` sier at pakken ikke finnes, er den ikke publisert ennå. Nyheter på getcadcraft.com vil si når den er det.
:::

## Hvis noe ikke fungerer

- **Assistenten ser ingen CadCraft-verktøy:** Kontroller at bryteren er på i dette vinduet, og at vinduet er åpent i Studio.
- **«krever tillatelsen Rediger»:** Kryss av for **Rediger** under {{ui:Assistenter}}, og spør igjen.
- **«utenfor mappene assistenter kan bruke»:** Legg til den mappen under {{ui:Assistenter}} › {{ui:Mapper den kan bruke}}, eller be assistenten bruke en fil i en mappe du allerede har lagt til.
- **Feil «401» eller «token»:** Tokenet er endret (Studio startet på nytt, eller {{ui:Ny token}}). Kopier det nye tokenet inn i assistentens innstillinger.
- **Endringen var feil:** Trykk {{key:Mod+Z}}. Ett trykk tar tilbake én hel handling fra assistenten.

## Se også

- [Oppskrifter for KI-assistenter](common:assistants-recipes): arbeidseksempler, hver med verktøyene den kaller.
