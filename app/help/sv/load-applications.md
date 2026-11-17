---
title: Läs in program (APPLOAD)
summary: Läs in LISP-rutiner och deras dialogfiler, läs ut dem, läs in dem igen från historiken, och behåll de du använder i startsviten.
keywords: appload, ap, läs in program, lisp, lsp, dcl, rutin, startsvit, läs ut, historik, släpp, läs in, anpassa, hantera
from: 89e0ee95
---

## Vad du lär dig

Hur du läser in en LISP-rutin (en `.lsp`-fil) så att dess kommandon fungerar i CadCraft, hur du läser ut den, och hur du får den att läsas in varje gång CadCraft startar.

## Läs in en rutin

1. Öppna {{ui:Vy}} › {{ui:Mer}} › {{ui:Läs in program…}}, eller skriv {{cmd:APPLOAD}} (eller `AP`) och tryck på {{key:Enter}}.
2. Klicka på {{ui:Läs in en fil…}} och välj en eller flera `.lsp`-filer. En rutin som öppnar en dialogruta kommer oftast med en `.dcl`-fil: välj den också.
3. Dialogrutan säger vad varje fil skapade, till exempel ”Inläst delblocks.lsp: 1 kommando, DELBLOCKS.”
4. Klicka på {{ui:Stäng (C)}}, skriv rutinens kommando och tryck på {{key:Enter}}.

Du kan också släppa `.lsp`- och `.dcl`-filer på ritningen, eller i dialogrutan Läs in program: de läses in direkt.

Filen läses här, i din webbläsare. Inget laddas upp.

:::tip
Tryck på {{key:Enter}} på en tom kommandorad för att köra rutinens kommando igen, precis som vilket kommando som helst. Dina kommandoalias kan också nå det: se ”Redigera kommandoalias”.
:::

## Läs ut en rutin

Under {{ui:Läs in program}}, under {{ui:Inlästa program}}, klickar du på {{ui:Läs ut}} bredvid filen. Kommandona den skapade försvinner tills du läser in den igen.

## Läs in en rutin varje gång CadCraft startar

1. Läs in rutinen.
2. Under {{ui:Inlästa program}} klickar du på {{ui:Lägg till i startsviten}} bredvid den.

Från och med nu läses den in av sig själv när CadCraft startar i den här webbläsaren. För att sluta med det klickar du på {{ui:Ta bort (R)}} bredvid den under {{ui:Startsvit}}.

Startsviten sparar en kopia av varje fil i den här webbläsarens lagring. Om du ändrar rutinen läser du in den nya filen och lägger till den igen.

## Läs in acad.lsp och acaddoc.lsp från en supportmapp (Studio)

I CadCraft Studio tar {{ui:Supportmapp}} i dialogrutan {{ui:Läs in program}} en mapp på din dator. Klicka på {{ui:Välj mapp…}}. När CadCraft startar läser den `acad.lsp` och sedan `acaddoc.lsp` från den mappen (oavsett hur namnen är skrivna), läser in dem och läser sedan in startsviten. `acaddoc.lsp` läses in igen varje gång en ny ritningsflik öppnas. Inget annat i mappen läses, och en fil över 2 MB hoppas över med ett meddelande.

Om en fil definierar en funktion som heter `S::STARTUP` körs den en gång efter att filerna lästs in (även efter startsviten). {{ui:Läs in nu}} gör detsamma på begäran; {{ui:Rensa}} glömmer mappen.

I webbläsaren kan en sida inte spara en mapp, så där finns ingen supportmapp: använd startsviten ovan. Kompilerade `.fas`- och `.vlx`-filer och inbyggda program avvisas fortfarande.

## Läs in en fil igen från historiken

{{ui:Historik}} listar filerna du läst in i den här webbläsaren, nyast först. Klicka på {{ui:Läs in}} bredvid en för att läsa in den igen, utan att leta efter den på din dator.

## Filer som CadCraft inte kan läsa in

| Fil | Vad den är | Vad du gör |
|---|---|---|
| `.fas`, `.vlx` | kompilerad eller skyddad LISP | läs in `.lsp`-källkoden i stället |
| `.arx`, `.crx`, `.dbx` | inbyggda Windows-program | det finns inget sätt att köra dessa i CadCraft |
| `.dvb` | ett VBA-projekt | det finns inget sätt att köra dessa i CadCraft |
| `.craft`, `.lua`, `.py` | CraftScript-skript | öppna dem i PartCraft:s skriptarbetsyta |

Dialogrutan Läs in program säger vilken av dessa en fil är när du väljer den.

## Stoppa en rutin

Tryck på {{key:Esc}}. Vid en av rutinens frågor avbryter Esc den på det sätt rutinen förväntar sig (dess egen städning körs). Om den är upptagen och inte frågar något stoppar Esc den direkt och säger det; dina inlästa rutiner förblir inlästa.

:::note
Allt en rutin ändrar i ritningen är ett steg: ett {{key:Mod+Z}} ångrar allt.
:::
