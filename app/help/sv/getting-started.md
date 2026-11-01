---
title: Kom igång med CadCraft
summary: Vad ritappen CadCraft gör, var den körs och din första ritning från en tom skärm till en sparad fil.
keywords: komma igång, första ritningen, ny, öppna, spara, spara som, börja, handledning, introduktion, snabbstart
from: 1a56c575
---

CadCraft är en 2D-ritapp. Du ritar och redigerar linjer, bågar, polylinjer, text, mått och block, ställer in blad med ritningshuvuden och vyportar och plottar dem till PDF. Den öppnar DWG- och DXF-ritningar och sparar dem som DWG eller DXF.

Den körs i din webbläsare. Det finns inget att installera: webbplatsen ger dig adressen och hela appen läses in på sidan. Dina ritningar öppnas från din egen dator och sparas tillbaka till den. **Inget laddas upp.**

Om du har ritat förut, läs [Om du kommer från annan ritprogramvara](topic:coming-from) efter den här sidan. De flesta vanor följer med, och de få som inte gör det finns uppräknade där.

## Vill du hellre bli guidad?

Skriv `TOUR` (eller klicka på {{ui:Ta rundturen}} på startkortet, eller {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Ta rundturen igen}}). Sex korta steg i en ruta över ritningen: rita en linje och en cirkel, flytta den, trimma den, radera något och måttsätt den. Varje steg är klart när du har gjort det, och du kan hoppa över ett steg eller hela rundturen. Den startar av sig själv bara första gången. [Fusklappen](topic:cheat-sheet) har de 40 kommandon du använder mest, och [kommandokartan](topic:command-map) alla kommandon som finns.

## Det här behöver du

- En ny version av Chrome, Edge, Firefox eller Safari på en Mac-, Windows- eller Linux-dator. Se [Webbläsare och plattformar](common:browsers).
- En mus med hjul är bekvämast. En styrplatta fungerar; se [Mus, styrplatta och touch](topic:mouse-trackpad-touch).
- Ett tangentbord. CadCraft styrs med inskrivna kommandon, som de flesta ritprogram.

## Idén i ett stycke

Du skriver ett kommando (eller klickar på dess knapp), och kommandoraden längst ned ställer frågor en i taget: ”Ange första punkten”, ”Ange nästa punkt”. Du svarar på varje fråga genom att klicka i ritningen eller skriva ett värde och sedan trycka på {{key:Enter}}. {{key:Esc}} avbryter. Det är hela interaktionsmodellen; allt annat är detaljer.

## Din första ritning

Du ritar en rektangel på 4000 gånger 3000 av linjer, sätter en cirkel i mitten och sparar filen.

1. Öppna CadCraft. Kommandoraden längst ned visar `Command:` och ritytan visar ett litet kort, ”Börja rita”.
2. Skriv `L` och tryck på {{key:Enter}}. Du behöver inte klicka på kommandoraden först: det du skriver hamnar där var som helst.
3. Prompten ändras till `Specify first point:`. Skriv `0,0` och tryck på {{key:Enter}}.
4. Skriv `@4000,0` och tryck på {{key:Enter}}. En linje dyker upp, åt höger. `@` betyder ”från den senaste punkten”.
5. Skriv `@0,3000` och tryck på {{key:Enter}}.
6. Skriv `@-4000,0` och tryck på {{key:Enter}}.
7. Skriv `C` och tryck på {{key:Enter}}. `C` är alternativet Close: den sista linjen går tillbaka till första punkten och kommandot avslutas.
8. Klicka på {{ui:Utsträckning}} i gruppen Vy i verktygsfältet. Rektangeln fyller skärmen.

Nu ska du se fyra linjer som bildar en rektangel, och historiken ovanför kommandoraden listar det du skrev.

9. Skriv `C` och tryck på {{key:Enter}} för att starta cirkelkommandot.
10. Skriv `2000,1500` och tryck på {{key:Enter}} för centrum.
11. Skriv `500` och tryck på {{key:Enter}} för radien.

En cirkel dyker upp i mitten av rektangeln.

12. Tryck på {{key:Mod+S}}, eller klicka på {{ui:Spara}} i gruppen Fil.

Webbläsaren laddar ner `Drawing1.dwg` till din vanliga nedladdningsmapp, och historiken säger att en kopia sparades som DWG. Den filen öppnas i CadCraft igen, och i de flesta andra CAD-program. (Om du tidigare i den här webbläsaren valde DXF i {{ui:Spara som}} sparas en ny ritning som `Drawing1.dxf` i stället.)

:::tip
Tryck på {{key:Enter}} på en tom kommandorad för att upprepa det senaste kommandot. Tryck på {{key:Space}} i stället för {{key:Enter}} om du föredrar det: utanför text gör det samma sak.
:::

## Öppna en befintlig ritning

1. Tryck på {{key:Mod+O}}, eller klicka på {{ui:Öppna}}.
2. Välj en `.dwg`- eller `.dxf`-fil i filväljaren.

Du kan också dra en DWG- eller DXF-fil från {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}} och släppa den på ritytan. Filen läses på sidan; den lämnar aldrig din dator.

Se [Filer: vad som öppnas och vad som sparas](topic:files) för vad som behålls och vad som konverteras.

## Spara: vad du kan vänta dig

Att spara i en webbläsare fungerar annorlunda än i ett skrivbordsprogram:

- {{ui:Spara}} **laddar alltid ner en ny kopia**. Den skriver inte över filen du öppnade. Om en fil med samma namn redan ligger i nedladdningsmappen lägger webbläsaren oftast till ett nummer, till exempel `Drawing1 (1).dwg`.
- {{ui:Spara}} använder ritningens format: DWG om du öppnade en DWG, DXF om du öppnade en DXF. För att välja trycker du på {{key:Mod+Shift+S}} eller klickar på {{ui:Spara som}} och väljer sedan {{ui:DWG}} (och dess version), {{ui:DXF R12}} eller {{ui:DXF 2000}}. Se [Spara](topic:files#saving).
- Filen du öppnade ändras aldrig.
- Om du öppnar en annan fil, eller {{ui:Ny}}, hamnar den i en egen flik över ritningen, så inget du har öppet stängs. Om du stänger en ritnings flik eller lämnar sidan med osparade ändringar frågar CadCraft först: {{ui:Spara en kopia först}}, kassera eller {{ui:Avbryt}}. Om du stänger webbläsarfliken visas i stället webbläsarens egen fråga ”Lämna webbplatsen?”.

Molnlagring finns inte ännu. Var dina filer tar vägen och varför de förblir privata förklaras i [Dina filer och sekretess](common:your-files).

## Vart du går härnäst

Tryck på {{key:F1}} eller klicka på {{ui:Hjälp}} i fältet högst upp för att när som helst öppna den här hjälpen bredvid ritningen. Den fungerar utan anslutning.

- [CadCraft-skärmen](topic:workspace) namnger varje fält och panel.
- [Rita med koordinater](topic:draw-with-coordinates) är den bästa första genomgången.
- [Tangentbord och mus](topic:keyboard) listar varje tangent.
- Skriv `HELP` på kommandoraden för en lista över alla kommandon, eller läs [Kommandoreferensen](topic:commands).
