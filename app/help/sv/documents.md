---
title: Dokument: utcheckning, revisioner och utgivning
summary: Håll ordning på ritningarna i en projektmapp. Checka ut en fil så att ingen annan ändrar den, checka in den som en ny revision, skicka den på granskning och ge ut den med godkännarens namn. Historik, vad som använder vad, en stycklista och ritningshuvuden som visar revisionen.
keywords: projektinställningar, godkännare, administratörer, revisionsbokstäver, ASME, skrivskyddad, jämför revisioner, öppna kopia, partcraft, bimcraft, documents, DOCUMENTS, DOCS, valv, dokumenthantering, pdm, checka ut, checka in, utcheckning, incheckning, lås, revision, rev, revisionsbokstav, utgivning, utgiven, godkänn, godkännande, granskning, föråldrad, var används, bom, stycklista, ritningshuvud, revisionsruta, projektmapp
from: ee938722
---

## Vad du skapar

En projektmapp där varje ritning har en revision (A.1, A.2 … sedan A, B …) och ett tillstånd (Pågående arbete, För granskning, Utgiven, Föråldrad). Bara en person i taget kan ändra en fil, och varje utcheckning, incheckning, godkännande och bruten utcheckning antecknas med vem som gjorde det och när.

Allt sparas i mappen själv, i en dold mapp `.ccvault` bredvid dina ritningar. En mapp på en delad enhet eller en synkad mapp fungerar för ett helt team. Det finns ingen server och inget laddas upp.

## Öppna dokument

Skriv `DOCUMENTS` (eller `DOCS`) och tryck på {{key:Enter}}. Panelen öppnas bredvid ritningen.

Välj {{ui:Välj projektmappen}} och välj mappen som innehåller projektets ritningar. Projektmappar fungerar i CadCraft Studio och i webbläsare som kan öppna en mapp (Chrome, Edge). I andra webbläsare säger panelen det.

Första gången skriver du ditt namn (det följer med allt du gör) och namnet på den här datorn. Om du är inloggad finns ditt namn redan där.

## Starta ett valv

En mapp som inte är ett valv än erbjuder {{ui:Starta ett valv i den här mappen}}. Skriv projektets namn. Öppna sedan {{ui:Filer utanför valvet}} och välj {{ui:Lägg till (A)}} bredvid varje fil du vill föra under kontroll. En fil du lägger till börjar på revision **A.1**, Pågående arbete.

## Ändra en ritning

1. Välj {{ui:Öppna}} bredvid en ritning. Den öppnas i CadCraft. Om den inte är utcheckad till dig ska du bara titta på den och inte ändra den: {{ui:Spara}} vägrar skriva över den och säger varför (använd {{ui:Spara som}} för att behålla en egen kopia).
2. Välj {{ui:Checka ut}}. Ingen annan kan checka ut den nu. Panelen visar vem som har den, på vilken dator och sedan när.
3. Rita.
4. Välj {{ui:Checka in}} och skriv vad som ändrades. Ritningen du har öppen sparas i projektmappen i sitt eget format och blir nästa revision (A.1, sedan A.2). Att checka in utan ändring behåller revisionen.

{{ui:Ångra utcheckning}} lämnar tillbaka filen utan en ny revision.

## Granskning och utgivning

- {{ui:Skicka på granskning}}: filen är skrivskyddad under granskningen.
- {{ui:Godkänn}}: skriv godkännarens namn. A.3 blir **A**, Utgiven. Utgivna filer är skrivskyddade.
- {{ui:Skicka tillbaka}}: tillbaka till Pågående arbete, med skälet.
- {{ui:Ny revision}} på en utgiven fil checkar ut den för nästa bokstav: dess första incheckning blir **B.1**. {{ui:Ångra utcheckning}} innan dess lämnar den på A.
- {{ui:Gör föråldrad}} tar ur bruk en utgiven fil.

Ett projekt kan ha en lista över vem som får godkänna, och kan kräva att godkännaren inte är den person som checkade in filen (se Projektinställningar nedan).

## Projektinställningar

Öppna {{ui:Projektinställningar}} i panelen:

- **Godkännare**: ett namn per rad. När det finns några kan bara de godkänna en utgivning.
- **Godkännaren måste vara någon annan än upphovsmannen**: regeln om "fyra ögon".
- **Administratörer**: ett namn per rad. När det finns några kan bara de bryta någon annans utcheckning eller ändra dessa inställningar.
- **Revisionsbokstäver att utelämna**: {{ui:Använd ASME Y14.35-följden}} hoppar över I, O, Q, S, X och Z, eller skriv egna bokstäver. Bokstäver som redan givits finns kvar; valet gäller nästa revisioner.
- **En utcheckning räknas som inaktuell efter**: antal dagar (14 som standard).

Välj {{ui:Spara inställningar}}. Ändringen skrivs i loggen tillsammans med vem som gjorde den.

## Någon lämnade en fil utcheckad

{{ui:Bryt utcheckning}} frigör en fil som någon annan har checkat ut (de är borta, eller deras dator gick sönder). Du måste skriva ett skäl: det skrivs i loggen tillsammans med vems utcheckning det var. När projektet har administratörer kan bara de göra detta. En utcheckning som är äldre än 14 dagar markeras som gammal.

## Historik, revisioner, användning, används av

Välj en fils namn för att se:

- {{ui:Historik}}: varje händelse, nyast först, med vem, vilken dator och när.
- {{ui:Revisioner}}: varje sparad revision. En kopia av varje revision finns i valvet (samma innehåll sparas en gång). {{ui:Öppna kopia}} öppnar den revisionen som en vanlig kopia som inte kan skriva över valvets fil. {{ui:Jämför med}} listar vad som lades till, togs bort och ändrades mellan den revisionen och den före (eller någon annan du väljer), och färgar det i ritningen.
- {{ui:Använder}}: ritningarna den länkar till (xref), dokumenten en IFC-modell pekar på och delarna i en PartCraft-sammanställning.
- {{ui:Används av}}: varje fil i valvet som använder just den här.

{{ui:Stycklista (CSV)}} sparar listan över allt en fil använder, nivå för nivå, med antal, revisioner och tillstånd, för ett kalkylblad.

## En revisionsruta på bladet

Med en ritning öppen som har en layout väljer du {{ui:Revisionsruta}}. En tabell över de utgivna revisionerna (revision, datum, av, godkänd, beskrivning) ritas längst upp till höger på bladet du tittar på. När du godkänner en utgivning uppdateras tabellen.

## Revision i ritningshuvudet

Ge attributen i ritningshuvudet en av dessa taggar och välj {{ui:Fyll i ritningshuvuden}} på den öppna ritningen:

| Tagg | Fylls med |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revisionen (B, eller B.2 medan den arbetas med) |
| `VAULT.STATE` | tillståndet (Utgiven …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datumet för senaste revisionen |
| `VAULT.APPROVER`, `APPROVED_BY` | vem som godkände senaste utgivningen |

## PartCraft och BimCraft

PartCraft och BimCraft har samma dokumentpanel för sina egna filer: delar och sammanställningar i PartCraft, IFC-modeller i BimCraft. Att checka in sparar modellen som är öppen i projektmappen, och en sammanställning visar vilka delar den använder och en stycklista.

## Bra att veta

- Två personer i samma delade mapp kan inte båda checka ut en fil: utcheckningen är en fil som systemet vägrar skapa två gånger. I en webbläsare, och i en Studio vars skal är äldre än den här funktionen, är det så strikt som mappen tillåter: två utcheckningar under samma sekund kan lyckas båda. Panelen säger vilket som gäller.
- Redigera eller ta inte bort mappen `.ccvault` för hand. Loggen i den är protokollet; valvet bygger om sin lista från den vid behov.
- Att ändra en fil i mappen utan att checka ut den visas som {{ui:Ändrad i mappen utan utcheckning}}.
