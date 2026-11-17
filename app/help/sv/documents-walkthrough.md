---
title: Dokument och revisioner (valvet)
summary: En genomgång steg för steg av ett riktigt jobb: sätt en projektmapp under kontroll, checka ut en ritning, ändra den, checka in den med en notering, skicka den på granskning, godkänna och släppa den, se historiken och vad som använder den, vad en andra person ser medan den är låst, och hur det fungerar med molnmappar.
keywords: valv, dokument, genomgång, handledning, checka ut, checka in, revision, släpp, godkänn, lås, historik, var används, molnmapp, projektmapp, dokumenthantering, pdm, två personer, delad mapp
from: 3829528d
---

## Vad du ska göra

Du är Ana, och arbetar med Riverside clinic tillsammans med en kollega, Ben. Projektets ritningar ligger i en mapp som ni båda når (en delad enhet, en synkad mapp eller en molnmapp). I slutet har en fil gått från sin första kopia till släppt revision **A**, har ändrats igen som **B.1**, och du har sett vem som gjorde vad, och vad Ben ser när du håller filen.

Allt sparas i en dold mapp `.ccvault` bredvid dina filer: ingen server, inget uppladdat (en molnmapp är undantaget, se sista steget). För varje knapp och regel på ett ställe, se ämnet *Dokument: utcheckning, revisioner och släpp* där din app har det.

## 1. Sätt upp projektmappen

1. Välj {{ui:Dokument…}} i menyn **Mer** under fliken **Visa**, eller skriv `DOCUMENTS` (eller `DOCS`) och tryck på {{key:Enter}}.
2. Välj {{ui:Välj projektmappen}} och välj mappen som innehåller projektets ritningar. (Projektmappar fungerar i Studio och i webbläsare som kan öppna en mapp, till exempel Chrome och Edge. I andra webbläsare säger panelen det.)
3. Välj {{ui:Ändra}} bredvid **Du:** och skriv ditt namn, `Ana` (om den frågar, även namnet på den här datorn). Panelen säger nu *Du: Ana på* och din dator. Ditt namn står på allt du gör.
4. Välj {{ui:Starta ett valv i den här mappen}} och skriv projektets namn, `Riverside clinic`. Panelen säger *Valvet startades för Riverside clinic.*

## 2. Ta en fil under kontroll

1. Öppna **Filer utanför valvet** och välj {{ui:Lägg till (A)}} bredvid `plans/A-101.dxf`.
2. Den visas under **Filer i valvet** med revision **A.1**, status **Pågående arbete**. A.1 är dess första kopia; valvet behåller en kopia av varje revision.

## 3. Checka ut, ändra, checka in

1. Välj {{ui:Öppna}} bredvid `plans/A-101.dxf`. Ritningen öppnas i CadCraft och panelen stängs så att du kan se den. Panelen ligger fortfarande ett kommando bort: `DOCUMENTS`.
2. Öppna panelen igen och välj {{ui:Checka ut}}. Raden säger nu **Utcheckad till dig**. En låsfil har skapats i `.ccvault/locks`; ingen annan kan checka ut filen förrän du checkar in den.
3. Rita något: lägg till en linje, flytta en vägg. Ingenting du gör kan sparas över valvets fil om ritningen inte är utcheckad till dig; Spara som fungerar alltid för en egen kopia.
4. Öppna panelen, välj {{ui:Checka in}} och skriv vad som ändrades (`Flyttade dörren`). Panelen säger *incheckad som A.2*. Filen i projektmappen är nu ritningen du hade öppen, och låset är borta. Incheckning utan ändring behåller revisionen.

Om du ångrar dig ger {{ui:Ångra utcheckning}} tillbaka filen utan en ny revision.

## 4. Granska och släpp

1. Välj {{ui:Skicka på granskning}}. Statusen blir **För granskning** och filen blir skrivskyddad.
2. Innan godkännande, välj {{ui:Projektinställningar}} och lista vem som får godkänna (ett namn per rad), till exempel `Ben` och `Carla`, och bocka för regeln att godkännaren måste vara någon annan än författaren. Välj {{ui:Spara inställningar}}. Nu avvisar valvet själv alla andra.
3. Ben (eller Carla) väljer {{ui:Godkänn}} och skriver godkännarens namn. Statusen blir **Släppt** och revisionen blir **A**, med *godkänd av* och namnet. En släppt fil är skrivskyddad. {{ui:Skicka tillbaka}} hade fört tillbaka den till Pågående arbete, med en orsak.

Godkännarens namn är det namn som skrivs i panelen; det är en registrering av vem som skrev under, inte ett bevis på identitet.

## 5. En ny revision

1. På den släppta filen, välj {{ui:Ny revision}}. Du reserverar den för nästa bokstav.
2. Ändra den, välj sedan {{ui:Checka in}}. Revisionen är **B.1**, pågående arbete. Släpp den på samma sätt och den blir **B**. {{ui:Ångra utcheckning}} före första incheckningen lämnar den på **A**.

Revisionsbokstäver går A, B … Z, AA, AB. Om din standard hoppar över vissa bokstäver, hoppar projektinställningen *Använd ASME Y14.35-följden* över I, O, Q, S, X och Z för de nästa revisionerna.

## 6. Se vad som hänt

Välj filens namn för att öppna dess detaljer:

- **{{ui:Historik}}**: varje händelse, nyast först, med vem, vilken dator och när: *Incheckad A.2* av Ana, *Släppt* av Ben, och så vidare.
- **{{ui:Revisioner}}**: revisionstabellen. {{ui:Öppna kopia}} öppnar en revision som en vanlig kopia som inte kan skriva över valvets fil; {{ui:Jämför med}} listar vad som lades till, togs bort och ändrades mot revisionen före den, eller mot någon annan.
- **{{ui:Använder}}**: ritningarna den länkar till (xrefs).
- **{{ui:Används av}}**: Används av listar varje annan ritning i valvet som länkar till den här: ändrar du en grundplan vet du vilka blad som ska kontrolleras.

## Revision på bladet

Med ritningen öppen (och ett layout i den), välj {{ui:Revisionsruta}}: en tabell över de släppta revisionerna ritas längst upp till höger på bladet. Välj {{ui:Fyll i ritningshuvuden}} för att fylla i ritningshuvudets attribut märkta `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` eller `APPROVED_BY` med filens revision, status, datum och godkännare. När du godkänner nästa släpp uppdateras revisionsrutan.

## 7. Vad Ben ser medan du håller filen

Checka nu ut filen igen, och be Ben att öppna samma projektmapp på sin dator och öppna panelen. På filens rad ser han **Utcheckad av Ana på** din dator **sedan** tiden, och ingen knapp {{ui:Checka ut}}. Om han ändå försöker avvisar valvet det: låset är en fil som systemet inte skapar två gånger, så två personer kan inte båda hålla filen, inte ens i samma bråkdel av en sekund, när mappen ligger på disk i Studio. (I en webbläsare ger mappen bara ett bästa försök, och panelen säger det under **Mapp**.)

Om Ana är borta och Ben behöver filen, {{ui:Bryt utcheckning}} frigör den. Han måste skriva en orsak; den går i loggen tillsammans med vems utcheckning det var. När projektet listar administratörer kan bara de bryta den. En utcheckning äldre än gränsen för inaktuell utcheckning (14 dagar som standard) markeras *lång tid*. Efter brytningen avvisas Anas sena incheckning, så ni två kan inte skriva över varandra.

## 8. Molnmappar

En molnmapp är en projektmapp som förvaras i ditt teams molnlagring, så teamet behöver ingen delad enhet. I Studio, inloggad på ditt CadCraft-konto, visar panelen {{ui:Öppna en molnmapp}} bredvid {{ui:Välj projektmappen}}. Välj den och välj mappen, listad som arbetsyta / mapp. En arbetsytas ägare skapar mappen först, och teamets molnlagring måste vara aktiverad. Allt ovan fungerar på samma sätt; servern skapar låset, som är strikt över personer. Om du inte är inloggad säger panelen att du ska logga in. I en vanlig webbläsarflik erbjuds inte molnknappen; använd Studio.

## Prova det

Gör de åtta stegen ovan med en kopia av en riktig fil. För de två-personersstegen behöver du en annan person, eller två fönster med två namn. Om du provar med en riktig delad mapp listar Community-testsidan en kontroll som frågar just detta, och tar emot resultat.
