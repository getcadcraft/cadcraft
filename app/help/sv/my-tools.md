---
title: Egna knappar (Mina verktyg)
summary: Lägg till verktygsfältsknappar som kör egna makron, ge dem kortkommandon, dela dem som en fil och hämta knappar från en CUIx-anpassningsfil.
keywords: mina verktyg, egna knappar, verktygsfältsknappar, makro, makron, cui, cuix, anpassa, anpassning, meny, kortkommandon, tangentbordsgenvägar, diesel, ^c^c, importera knappar, exportera knappar
from: 36618802
---

## Vad du lär dig

Hur du lägger egna knappar på verktygsfältet, där var och en kör ett makro skrivet på det sätt som AutoCAD skriver dem, hur du ger en knapp en tangent, och hur du hämtar knapparna i en CUIx-fil.

## Lägg till en knapp

1. Öppna {{ui:Settings}} ({{key:Mod+,}}) och stanna kvar på fliken {{ui:CadCraft}}. Bläddra ner till {{ui:My tools}}.
2. Klicka på {{ui:Add a button…}}.
3. Fyll i rutan:
   - {{ui:Group}}: verktygsfältsgruppen den hamnar i, till exempel `My tools`. Ett nytt namn gör en ny grupp.
   - {{ui:Label}}: orden på knappen.
   - {{ui:Macro}}: det som skrivs, till exempel `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: klicka i rutan och tryck på tangenterna, till exempel {{key:Ctrl+Alt+B}}.
   - {{ui:Icon}}: en PNG- eller SVG-bild på högst 64 KB, eller ingen (en stjärna visas).
4. Klicka på {{ui:Save}}.

Knappen visas sist på verktygsfältet, i sin grupp. Klicka på den, eller tryck på dess tangent, för att köra den. {{ui:Edit}} och {{ui:Delete}} i listan ändrar eller tar bort den.

## Skriv ett makro

Ett makro är det du skulle skriva på kommandoraden, med några särskilda tecken:

| Tecken | Betyder |
|---|---|
| `^C` | Avbryter det som körs (`^C^C` är den vanliga starten) |
| `;` eller ett mellanslag | {{key:Enter}} |
| `\` | Väntar på dig: ett klick eller ett inskrivet svar, sedan fortsätter makrot |
| `_` eller `.` före ett kommando | Godtas och ignoreras (internationella och inbyggda namn) |
| `*` helt i början | Körs om varje gång det tar slut, tills du trycker på {{key:Esc}} |
| `^O`, `^G` | Slår på eller av ortogonalt läge och rutnätet |
| `$M=` | Resten är DIESEL. Endast `$(if,…)`, `$(getvar,…)`, `$(=,…)` och `$(eq,…)` läses; en knapp som använder något annat säger det och gör ingenting |

Exempel:

- `^C^C_line;0,0;@100,0;;` ritar en 100 lång linje från origo.
- `^C^C_circle;\25;` frågar efter centrum och ritar sedan en cirkel med radien 25 där.
- `^C^C_turnright` vrider vyn 90° åt höger.

## Kortkommandon

En tangent behöver {{key:Mod}} (Ctrl, eller Cmd på en Mac) eller {{key:Alt}} tillsammans med en bokstav eller siffra, eller en av de lediga funktionstangenterna {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Bokstäver ensamma går till kommandoraden. Tangenter som CadCraft, appen eller webbläsaren redan använder (till exempel {{key:Ctrl+S}} eller {{key:Ctrl+Z}}), och tangenter som en annan knapp redan har, nekas, och rutan säger varför.

## Dela dina knappar

- {{ui:Export…}} sparar varje grupp och knapp (med ikoner och tangenter) som `my-tools.json`.
- {{ui:Import…}} lägger till grupperna i en sådan fil efter dina. Ett gruppnamn du redan använder får ”(2)”; en tangent som skulle krocka utelämnas, och panelen säger det.

## Hämta knappar från en CUIx-fil

1. Klicka på {{ui:Import CUIx…}} och välj `.cuix`-filen.

Dess verktygsfält och menyflikens paneler blir grupper, var och en med sina knappar, makron och bilder (PNG, eller BMP omvandlad till PNG). Dess kortkommandon kommer i en egen grupp, var och en med sin tangent. Kommandoalias som den kan innehålla kommer i en grupp {{ui:Aliases}}. Panelen listar vad som kom över.

:::note
Filen läses bara. Kommandon som CadCraft inte har listas med namn, de gissas inte: deras knappar säger det när de klickas. DIESEL utöver de få funktionerna ovan, menyer, musknappar och arbetsytor läses inte.
:::

## Bra att veta

- Knapparna sparas i den här webbläsaren (eller i det här skrivbordsprogrammet), inte i ritningar.
- En knapp körs via kommandoraden, så den ångras som allt du skriver: ett {{key:Mod+Z}} per kommando den körde.
