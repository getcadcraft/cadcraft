---
title: Rita utan syn
summary: Slå på Åtkomst så säger CadCraft varje kommando och resultat genom din skärmläsare, beskriver ritningen och vad som finns nära markören, låter dig flytta markören med tangentbordet, spelar ett ljud för varje fångst och handtag och tar emot kommandon med röst där din webbläsare kan det på din dator.
keywords: tillgänglighet, skärmläsare, blind, nedsatt syn, NVDA, VoiceOver, JAWS, Orca, tangentbordsmarkör, röstkommandon, tal, ljud, fångstljud, beskriv ritning, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Åtkomst** låter dig rita utan att se skärmen. Den är av tills du slår på den, så att ingen får den av misstag.

## Slå på den

Öppna **Inställningar** (kugghjulet, eller Ctrl+,), hitta **Rita utan syn** och välj **På**. Eller skriv `ACCESS` på kommandoraden och svara `På`. Den kommer ihåg sitt läge på den här datorn.

Med Åtkomst på:

- **Allt som kommandoraden säger läses upp** genom din skärmläsare: vad du skrev, frågan den ställer, svaret och varje fel. CadCraft använder egna live-regioner (artiga och brådskande), så en skärmläsare som läser live-regioner behöver ingen inställning. Fel och avbrott avbryter; allt annat väntar på sin tur.
- **Ritytan går att nå.** Tryck på Tab tills du hör "Ritning", eller tryck på Shift+Tab från kommandoraden. Det är en region som skickar tangenter vidare till CadCraft.

## Tangenter på ritningen

| Tangent | Vad den gör |
|---|---|
| Piltangenterna | Flyttar tangentbordsmarkören. Ett steg är ungefär en hundradel av det skärmen visar, avrundat till 1, 2 eller 5. Shift flyttar tio gånger så långt, Ctrl en tiondel. |
| Enter | Väljer punkten under markören, precis som ett klick. |
| Space | Trycker Enter på kommandoraden: avslutar LINE och tar standardvärdet. |
| Tab, Shift+Tab | Hoppar till nästa eller föregående fångstpunkt nära markören, närmast först. |
| G | Stegar igenom handtagen på de markerade objekten. |
| D | Beskriver ritningen: hur många objekt, vilka slag, hur stora och vad som är markerat. |
| W | Säger var markören är och hur långt den är från den sista punkten. |
| N | Säger vad som är nära markören, närmast först, med avstånd och sida. |
| S | Beskriver de markerade objekten. |
| R | Säger det sista igen. |
| V | Röst på eller av. |
| / | Går till kommandoraden. |
| ? | Listar dessa tangenter. |

När du flyttar med tangenterna säger den var du hamnade. När ett kommando väntar på en punkt säger den också hur långt och åt vilket håll du är från den sista punkten, till exempel "2400 från den sista punkten, åt höger, i 0 grader".

## Kommandon

- {{cmd:ACCESS}} slår på eller av Åtkomst, fångstljud och röst och säger läget.
- {{cmd:DESCRIBE}} säger vad ritningen innehåller.
- {{cmd:WHEREAMI}} säger var markören är.
- {{cmd:NEARBY}} säger vad som ligger nära markören.
- {{cmd:SAYSEL}} säger vad som är markerat, en mening per objekt.
- {{cmd:VOICE}} slår på eller av talade kommandon.

Dessa fem läser ritningen och skriver ut ett svar; de ändrar ingenting.

## Ljud för fångster och handtag

Slå på **Fångst- och handtagsljud** i Inställningar. Varje fångsttyp har sin egen tonhöjd och sitt eget ljud, så att du kan skilja en ändpunkt från en mittpunkt, ett centrum, en skärning och resten. Ett handtag har ett dubbelt tick. Ljudet panoreras åt vänster eller höger för att följa markören över skärmen. Ljuden skapas på din dator; inget laddas ner.

## Kommandon med röst

Slå på **Kommandon med röst** i Inställningar. Säg ett kommandonamn ("line", "circle", "move") och säg sedan siffrorna som du skulle läsa dem: "punkt tre hundra komma fyra hundra", "avstånd tolv hundra", "vinkel fyrtiofem". "Enter", "avbryt", "ångra" och "gör om" gör vad de säger. Det som hördes läses upp tillbaka, och en fras som inte är ett kommando rapporteras i stället för att gissas.

**Var talet känns igen.** CadCraft har ingen egen talatjänst och skickar inget ljud någonstans. Den ber din webbläsare känna igen tal på den här datorn. Om din webbläsare kan det är valet **På den här datorn** och inget ljud lämnar den. Om den inte kan det är röst av tills du väljer **Webbläsarens onlinetjänst**, vilket låter webbläsaren skicka ljud till dess tillverkares talatjänst. Inställningarna säger vilket som gäller innan du bestämmer dig.

## Det den inte gör ännu

- Bara CadCraft har Åtkomst. De andra åtta apparna följer, med samma tangenter och ljud.
- Text i en ritning (en notering, ett blocknamn) läses upp precis som den är skriven; den tolkas aldrig som en instruktion.
- Den har prövats med syntetiska kontroller och webbläsartesterna. Handtester med NVDA, VoiceOver och en blind eller svagsynt testare återstår. Om du provar den, berätta gärna vad som saknas.
