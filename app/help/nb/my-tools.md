---
title: Egne knapper (Mine verktøy)
summary: Legg til verktøylinjeknapper som kjører egne makroer, gi dem hurtigtaster, del dem som en fil, og hent knapper fra en CUIx-tilpasningsfil.
keywords: mine verktøy, egne knapper, verktøylinjeknapper, makro, makroer, cui, cuix, tilpass, meny, hurtigtaster, tastatursnarveier, diesel, ^c^c, importer knapper, eksporter knapper
from: 36618802
---

## Hva du lærer

Hvordan du legger egne knapper på verktøylinjen, der hver kjører en makro skrevet slik AutoCAD skriver dem, hvordan du gir en knapp en tast, og hvordan du henter knappene i en CUIx-fil.

## Legg til en knapp

1. Åpne {{ui:Innstillinger}} ({{key:Mod+,}}) og bli på fanen {{ui:CadCraft}}. Bla ned til {{ui:Mine verktøy}}.
2. Klikk {{ui:Legg til en knapp…}}.
3. Fyll inn boksen:
   - {{ui:Gruppe}}: verktøylinjegruppen den havner i, for eksempel `Mine verktøy`. Et nytt navn lager en ny gruppe.
   - {{ui:Etikett}}: ordene på knappen.
   - {{ui:Makro}}: det den skriver, for eksempel `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Hurtigtast}}: klikk i boksen og trykk tastene, for eksempel {{key:Ctrl+Alt+B}}.
   - {{ui:Ikon}}: et PNG- eller SVG-bilde på høyst 64 KB, eller ingen (en stjerne vises).
4. Klikk {{ui:Lagre}}.

Knappen vises på slutten av verktøylinjen, i sin gruppe. Klikk den, eller trykk tasten, for å kjøre den. {{ui:Rediger}} og {{ui:Slett}} i listen endrer eller fjerner den.

## Skriv en makro

En makro er det du ville skrevet på kommandolinjen, med noen tegn:

| Tegn | Betyr |
|---|---|
| `^C` | Avbryter det som kjører (`^C^C` er vanlig start) |
| `;` eller et mellomrom | {{key:Enter}} |
| `\` | Venter på deg: et klikk eller et skrevet svar, og makroen fortsetter etterpå |
| `_` eller `.` foran en kommando | Godtas og ignoreres (internasjonale og innebygde navn) |
| `*` helt først | Kjøres på nytt hver gang den er ferdig, til du trykker {{key:Esc}} |
| `^O`, `^G` | Slår Ortho og rutenettet av eller på |
| `$M=` | Resten er DIESEL. Bare `$(if,…)`, `$(getvar,…)`, `$(=,…)` og `$(eq,…)` leses; en knapp som bruker noe annet sier fra og gjør ingenting |

Eksempler:

- `^C^C_line;0,0;@100,0;;` tegner en linje på 100 fra origo.
- `^C^C_circle;\25;` ber om sentrum, og tegner deretter en sirkel med radius 25 der.
- `^C^C_turnright` dreier visningen 90° til høyre.

## Hurtigtaster

En tast må ha {{key:Mod}} (Ctrl, eller Cmd på en Mac) eller {{key:Alt}} sammen med en bokstav eller et siffer, eller en av de ledige funksjonstastene {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Bokstaver alene går til kommandolinjen. Taster som CadCraft, appen eller nettleseren allerede bruker (som {{key:Ctrl+S}} eller {{key:Ctrl+Z}}), og taster en annen knapp har, avvises, og boksen sier hvorfor.

## Del knappene dine

- {{ui:Eksporter…}} lagrer alle grupper og knapper (med ikoner og taster) som `my-tools.json`.
- {{ui:Importer…}} legger til gruppene i en slik fil etter dine. Et gruppenavn du allerede bruker får «(2)»; en tast som ville kollidere, utelates, og panelet sier fra om det.

## Hent knapper fra en CUIx-fil

1. Klikk {{ui:Importer CUIx…}} og velg `.cuix`-filen.

Verktøylinjene og båndpanelene i den blir grupper, hver knapp med sin makro og sitt bilde (PNG, eller BMP gjort om til PNG). Hurtigtastene kommer i en egen gruppe, hver knapp med sin tast; kommandoaliasene den kan ha, kommer i en gruppe {{ui:Aliaser}}. Panelet viser hva som kom med.

:::note
Filen leses bare. Kommandoer CadCraft ikke har, listes med navn i stedet for å gjettes: knappene deres sier fra når du klikker dem. DIESEL utover de få funksjonene over, menyer, musknapper og arbeidsområder leses ikke.
:::

## Godt å vite

- Knapper lagres i denne nettleseren (eller i denne skrivebordsappen), ikke i tegninger.
- En knapp kjører via kommandolinjen, så den angres som alt du skriver: ett {{key:Mod+Z}} per kommando den kjørte.
