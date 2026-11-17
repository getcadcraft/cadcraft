---
title: Last programmer (APPLOAD)
summary: Last inn LISP-rutiner og deres dialogfiler, last dem ut, last dem inn igjen fra historikken, og behold de du bruker i oppstartssettet.
keywords: appload, ap, last program, lisp, lsp, dcl, rutine, oppstartssett, last ut, historikk, slipp, last, tilpass, administrer
from: 89e0ee95
---

## Hva du lærer

Hvordan du laster en LISP-rutine (en `.lsp`-fil) slik at kommandoene virker i CadCraft, hvordan du laster den ut, og hvordan du får den til å lastes hver gang CadCraft starter.

## Last en rutine

1. Åpne {{ui:Visning}} › {{ui:Mer}} › {{ui:Last program…}}, eller skriv {{cmd:APPLOAD}} (eller `AP`) og trykk {{key:Enter}}.
2. Klikk {{ui:Last en fil…}} og velg en eller flere `.lsp`-filer. En rutine som åpner en dialog, følger vanligvis med en `.dcl`-fil: velg den også.
3. Dialogen sier hva hver fil laget, for eksempel «Lastet delblocks.lsp: 1 kommando, DELBLOCKS».
4. Klikk {{ui:Lukk}}, skriv rutinens kommando og trykk {{key:Enter}}.

Du kan også slippe `.lsp`- og `.dcl`-filer på tegningen, eller på dialogen Last programmer: de lastes med én gang.

Filen leses her, i nettleseren din. Ingenting lastes opp.

:::tip
Trykk {{key:Enter}} på en tom kommandolinje for å kjøre rutinens kommando på nytt, på samme måte som for andre kommandoer. Kommandoaliasene dine kan også nå den: se «Rediger kommandoaliaser».
:::

## Last ut en rutine

I {{ui:Last programmer}}, under {{ui:Lastede programmer}}, klikker du {{ui:Last ut}} ved siden av filen. Kommandoene den laget er borte til du laster den inn igjen.

## Last en rutine hver gang CadCraft starter

1. Last inn rutinen.
2. Under {{ui:Lastede programmer}} klikker du {{ui:Legg til i oppstartssettet}} ved siden av den.

Fra nå av lastes den av seg selv hver gang CadCraft starter i denne nettleseren. For å stoppe det, klikk {{ui:Fjern}} ved siden av den under {{ui:Oppstartssett}}.

Oppstartssettet beholder en kopi av hver fil i denne nettleserens lagring. Hvis du endrer rutinen, last inn den nye filen og legg den til igjen.

## Last acad.lsp og acaddoc.lsp fra en støttemappe (Studio)

I CadCraft Studio tar {{ui:Støttemappe}} i dialogen {{ui:Last programmer}} en mappe på datamaskinen din. Klikk {{ui:Velg mappe…}}. Når CadCraft starter, leser den `acad.lsp` og deretter `acaddoc.lsp` fra den mappen (uansett store og små bokstaver i navnene), laster dem, og deretter laster den oppstartssettet. `acaddoc.lsp` leses på nytt hver gang en ny tegningsfane åpnes. Ingen andre filer i mappen leses, og en fil over 2 MB hoppes over med en melding.

Hvis en fil definerer en funksjon som heter `S::STARTUP`, kjøres den én gang etter at filene er lastet (også etter oppstartssettet). {{ui:Last nå}} gjør det samme på forespørsel; {{ui:Tøm}} glemmer mappen.

I nettleseren kan ikke en side beholde en mappe, så der finnes ingen støttemappe: bruk oppstartssettet over. Kompilerte `.fas`- og `.vlx`-filer og innebygde programmer avvises fortsatt.

## Last en fil igjen fra historikken

{{ui:Historikk}} lister filene du har lastet i denne nettleseren, nyeste først. Klikk {{ui:Last}} ved siden av en av dem for å laste den igjen, uten å lete etter den på datamaskinen din.

## Filer CadCraft ikke kan laste

| Fil | Hva den er | Hva du gjør |
|---|---|---|
| `.fas`, `.vlx` | kompilert eller beskyttet LISP | last inn `.lsp`-kildekoden i stedet |
| `.arx`, `.crx`, `.dbx` | innebygde Windows-programmer | det finnes ingen måte å kjøre disse i CadCraft |
| `.dvb` | et VBA-prosjekt | det finnes ingen måte å kjøre disse i CadCraft |
| `.craft`, `.lua`, `.py` | CraftScript-skript | åpne dem i PartCraft sin Skript-arbeidsflate |

Dialogen Last programmer sier hvilken av disse en fil er når du velger den.

## Stopp en rutine

Trykk {{key:Esc}}. Ved en av rutinens ledetekster avbryter Esc den slik rutinen forventer (dens egen opprydding kjøres). Hvis den er opptatt og ikke spør om noe, stopper Esc den helt og sier det; rutinene du har lastet, forblir lastet.

:::note
Alt en rutine endrer i tegningen er ett steg: ett {{key:Mod+Z}} tar det hele tilbake.
:::
