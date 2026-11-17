---
title: Mus, styrplatta och touch
summary: Så zoomar, panorerar, högerklickar och väljer du i CadCraft med en musrulle, en Mac- eller PC-styrplatta, eller en pekskärm, och vad som skiljer sig mellan webbläsarna.
keywords: styrplatta, pekplatta, magic mouse, touch, pekskärm, surfplatta, ipad, panorera, zooma, nyp, högerklick, två fingrar, mittknapp, webbläsare, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft är gjord för en mus med hjul. Allt fungerar också med en styrplatta, med några vanor att lära sig. Pekskärmar fungerar för att välja, med vissa begränsningar.

## Mus med hjul

- **Zooma:** rulla hjulet. Ritningen zoomar kring korset, så peka på det du vill se.
- **Panorera:** håll hjulet nedtryckt och dra, eller dra med höger knapp.
- **Zooma till allt:** dubbelklicka på hjulet, eller klicka på {{ui:Extents}}.
- **Tillbaka till föregående vy:** klicka på {{ui:Previous}} i gruppen Vy, eller skriv `Z`, {{key:Enter}}, `P`, {{key:Enter}}. En serie hjulsteg räknas som en vy, så en {{ui:Previous}} ångrar hela serien. Spara vyer du vill återvända till med {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** högerklicka.

## Styrplatta

:::mac
- **Panorera:** flytta två fingrar på styrplattan, åt vilket håll som helst: ritningen följer fingrarna. Du kan också dra med ett tvåfingerklick hållet nedtryckt (en dragning med höger knapp).
- **Zooma:** nyp med två fingrar. Zoomningen följer korset.
- **Högerklick (Enter):** klicka med två fingrar. Slå på ”Sekundärklick” under **Systeminställningar**, sedan **Styrplatta**, om det inte gör något. Control-klick kan räknas som ett vanligt klick i CadCraft i stället för ett högerklick, så använd tvåfingerklicket.
- **Zooma till ett område:** klicka på {{ui:Window}} i gruppen Vy och klicka på två hörn.
:::

:::windows linux
- **Panorera:** flytta två fingrar på styrplattan, åt vilket håll som helst: ritningen följer fingrarna. Du kan också dra med höger knapp hållen nedtryckt.
- **Zooma:** nyp med två fingrar. Zoomningen följer korset.
- **Högerklick (Enter):** klicka med två fingrar, eller klicka i styrplattans nedre högra hörn, beroende på dina inställningar för styrplattan.
- **Zooma till ett område:** klicka på {{ui:Window}} i gruppen Vy och klicka på två hörn.
:::

Att hålla in {{key:Space}} och dra panorerar **inte** i CadCraft: {{key:Space}} är Enter.

En musrulle zoomar fortfarande, ett steg i taget. En styrplatta som skickar sin rullning i hela steg, som ett hjul gör, zoomar med en rullning med två fingrar i stället för att panorera: zooma ut, peka på området du vill ha och zooma in igen. 3D-fliken behåller sina egna styrplattsrörelser (se [Modellera i 3D](topic:3d-solids#look-around)).

## Pekskärmar och surfplattor

CadCraft läser ett finger som ett musklick:

- Ett tryck väljer en punkt eller ett objekt, eller markerar.
- Att dra ett finger över tomt utrymme ritar ett lasso (åt höger först ett fönster, åt vänster först ett korsande; se [Lassomarkering](topic:lasso-selection)).
- I {{cmd:TRIM}} och {{cmd:EXTEND}} trimmar eller förlänger du alla bitar genom att dra ett finger över dem.
- Att dra ett markerat objekts handtag flyttar handtaget (handtag och pickboxen är större för ett finger).
- **Nyp** med två fingrar för att zooma kring punkten mellan dem; för ihop två fingrar för att **panorera**. Ett andra finger avbryter det som det första påbörjade, så en nypning lämnar aldrig något märke.
- Ett **långt tryck** (håll stilla i ungefär en halv sekund) är ett högerklick: {{key:Enter}}. Det avslutar ett kommando, slutför en markering eller upprepar det senaste kommandot.

Under kommandoraden visas en **knappad**: {{ui:Esc}}, Ångra, Gör om, de tecken som ett surfplattetangentbord döljer (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, en tangentbordsknapp och en stor {{ui:Enter}}. Tryck på tangentbordsknappen (eller på kommandoraden) för att skriva ett kommando eller ett tal.

Det finns ingen hovring, så fångstmarkörerna visas bara där fingret är.

:::touch
Du använder en pekskärm. För mer än en snabb titt gör ett anslutet tangentbord och en mus eller styrplatta CadCraft mycket enklare att använda.
:::

## Webbläsare

CadCraft fungerar likadant i Chrome, Edge, Firefox och Safari, på Mac, Windows och Linux. Skillnaderna är små:

| Ämne | Det du bör veta |
|---|---|
| Öppna en DWG | Stora ritningar tar några sekunder att läsa i alla webbläsare; statusraden visar ”Läser …” under tiden |
| Nedladdningar | Varje webbläsare avgör var nedladdningar hamnar och om den frågar först; se [Webbläsare och datorer](common:browsers) |
| Öppna för utskrift | Öppnar PDF-filen i en ny flik. Om webbläsaren blockerar popup-fönster laddar CadCraft ner PDF-filen i stället |
| F7 | Firefox kan erbjuda textmarkörsläge; välj Nej |
| Lämna med osparade ändringar | Varje webbläsare visar sin egen fråga ”Lämna webbplatsen?”, som CadCraft inte kan ändra |

:::safari
I Safari kan en PDF som öppnats med {{ui:Open to print}} visas i fliken utan att skrivas ut: använd **Arkiv**, sedan **Skriv ut**.
:::

:::firefox
Firefox kan fråga vad som ska göras med varje nedladdning. Välj att spara filen, eller ändra det en gång i Firefox inställningar under Nedladdningar.
:::
