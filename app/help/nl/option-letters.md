---
title: Geef opdrachtopties uw eigen letters
summary: Beantwoord de opties van een opdracht met letters die u kiest, in elke taal, uit één tekstbestand dat u kunt bewerken, importeren en exporteren.
keywords: optieletters, optionkeys, optkeys, optiesleutelwoord, sleutelwoord, opnieuw toewijzen, toewijzing, aanpassen, eigen letters, polair, array, P, PO, taal, opties vertalen, korte vorm, importeren, exporteren, dubbelzinnig
from: 7c8328c6
---

## Wat u leert

Hoe u de letters verandert die u typt om op de opties van een opdracht te antwoorden. {{cmd:ARRAY}} vraagt bijvoorbeeld `[Rectangular/POlar]` en neemt `PO` voor Polair; u kunt ervoor zorgen dat `P` of andere letters hetzelfde doen, in uw eigen taal als u wilt.

## Hoe opties worden beantwoord

Wanneer een opdracht opties tussen vierkante haken toont, zijn de hoofdletters de letters die u typt: `POlar` is `PO`, `eXit` is `X`.

U kunt ook minder letters typen. Als wat u typt maar in één van de getoonde opties past, neemt CadCraft die: bij `[Rectangular/POlar]` is een losse `P` Polair. Past het in twee, dan noemt de opdrachtregel ze en vraagt opnieuw:

```
C could be COUnt, COLumns. Type more letters.
```

Getallen worden nooit geraden, dus een getypte afstand of aantal wordt altijd als getal gelezen.

## Eigen letters toevoegen

Elke opdracht behoudt zijn ingebouwde letters. U voegt die van uzelf eraan toe, zodat uw lijst alleen bevat wat u veranderde.

1. Open {{ui:Instellingen}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Optieletters}} en klik op {{ui:Bewerken…}}. Of typ {{cmd:OPTIONKEYS}} en druk op {{key:Enter}}.
2. Kies onder {{ui:Opdracht}} de opdracht, bijvoorbeeld `ARRAY`. De lijst bevat elke opdracht die opties vraagt, en begint bij de opdracht die u het laatst gebruikte.
3. Kies onder {{ui:Optie}} de optie. Elke toont zijn ingebouwde letters tussen haakjes, bijvoorbeeld `POlar (PO)`.
4. Typ bij {{ui:Uw letters}} de letters die u wilt, bijvoorbeeld `P`, en klik op {{ui:Toevoegen}}.
5. De optie staat nu onder {{ui:Uw letters}} met zijn ingebouwde letters en de uwe. Klik op {{ui:Opslaan}}.

Start {{cmd:ARRAY}}, selecteer een object en druk op {{key:Enter}}. De vraag toont uw letters achter de optie, `POlar (P)`, en `P` beantwoordt haar.

Om er één weg te nemen, klikt u op het kruisje aan het einde van de rij en daarna op {{ui:Opslaan}}. De optie gaat terug naar alleen zijn ingebouwde letters.

## Letters die u niet kunt gebruiken

De editor weigert letters die iets zouden verbergen wat de opdrachtregel al leest, en zegt waarom:

- de ingebouwde letters van een andere optie van dezelfde opdracht (`R` voor Polair in `ARRAY`, waar `R` Rectangular is);
- een objectsnap-woord van drie letters of meer, zoals `END`, `MID` of `CEN`, en de woorden `ALL` en `LAST`;
- dezelfde letters voor twee verschillende opties van één opdracht.

Zolang iets rood wordt getoond, staat {{ui:Opslaan}} uit: corrigeer de regel of verwijder hem, dan wordt de knop weer aan. De ingebouwde letters van een vraag winnen altijd van die van u, dus uw lijst kan nooit verhinderen dat een ingebouwd antwoord werkt. Letters die toevallig de naam van een opdracht zijn, zoals `L` of `C`, zijn prima: bij een optievraag leest de opdrachtregel een antwoord, geen opdracht.

De opties die bij een opdracht worden getoond, komen van de opdrachten die dezelfde vragen delen, dus af en toe toont een opdracht een optie die hij alleen in sommige gevallen vraagt.

## Eén keuze voor elke opdracht

Kies onder {{ui:Opdracht}} {{ui:Elke opdracht}}. De opties zijn dan elke optie die een opdracht heeft, zoals eXit of Undo. Letters die u daar toevoegt, beantwoorden die optie waar een opdracht hem aanbiedt. Letters die voor één opdracht zijn toegevoegd, winnen van deze.

## Letters in uw eigen taal

De letters kunnen uit elk alfabet komen, zodat u opties kunt beantwoorden zonder uw toetsenbord om te schakelen: voeg `З` toe voor Close onder {{ui:Elke opdracht}}, of `П` voor POlar in `ARRAY`.

CadCraft wordt alleen met de Engelse letters geleverd. Uw eigen lijst is hoe u, uw kantoor of mensen die uw taal delen de rest instellen, en {{ui:Exporteren}} maakt een bestand dat u kunt doorgeven.

## Bewerken als tekst

{{ui:Bewerken als tekst}} in de editor toont dezelfde lijst als regels tekst, één per optie, en dat is ook wat {{ui:Exporteren}} opslaat:

```
ARRAY.PO,  P
*.X,       Q
```

Elke regel is de opdracht, een punt, de ingebouwde letters van de optie, een komma en uw letters. Een sterretje in plaats van de opdracht betekent elke opdracht. Een regel die met `;` begint, is een notitie.

## Wat hetzelfde blijft

- De ingebouwde letters blijven naast de uwe werken.
- Routines en werkbalkknoppen blijven de ingebouwde letters gebruiken, dus niets dat u hebt geladen breekt. Om de ingebouwde letters zelf te typen waar uw eigen letters in de weg zouden zitten, zet u een underscore ervoor: `_PO`.
- De korte naam van een opdracht is iets anders: zie [Opdrachtaliassen bewerken](topic:command-aliases).

## Regels die CadCraft weigert

Bij het bewerken als tekst of het importeren van een bestand somt de editor elk probleem met het regelnummer op:

- de opdracht bestaat niet (een alias van een opdracht is goed: `AR.PO` wordt gelezen als `ARRAY.PO`);
- de regel is geen `OPDRACHT.OPTIE, LETTERS`;
- de letters bevatten een spatie of een teken (alleen letters en cijfers, maximaal 16);
- dezelfde letters beantwoorden twee verschillende opties van één opdracht.

## Importeren en exporteren

{{ui:Exporteren}} slaat uw letters op als tekstbestand, om te bewaren of aan iemand anders te geven. {{ui:Importeren…}} leest zo'n bestand. Beide staan in de editor en in {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Optieletters}}.

In de instellingen vervangt {{ui:Importeren…}} uw bestand door het bestand dat u kiest. Een bestand met een regel die botst of niet bruikbaar is, wordt niet overgenomen; open de editor en importeer het daar om de regels te zien. In de editor vult het alleen het vak: er verandert niets totdat u op {{ui:Opslaan}} klikt.

## Opnieuw laden of verwijderen

Typ {{cmd:REINIT}} en druk op {{key:Enter}} om uw bestand opnieuw toe te passen. Om een letter te verwijderen, wist u de regel en klikt u op {{ui:Opslaan}}.

## Uw letters volgen uw account

Wanneer u bij getcadcraft.com bent aangemeld, worden uw letters bij uw account bewaard. Opent u CadCraft in een andere browser of op een andere computer met hetzelfde account, dan komen ze vanzelf aan; de opdrachtregel zegt `Option letters from your account`. Als u ze op twee plekken hebt gewijzigd, wint de nieuwste kopie en wordt de vervangen kopie één keer bewaard.

{{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Optieletters}} zegt waar ze staan. Afgemeld of offline blijven ze in deze browser en gaan ze naar uw account de volgende keer dat u ze opslaat terwijl u bent aangemeld.

Gerelateerd: [Opdrachtaliassen bewerken](topic:command-aliases) · [Instellingen van CadCraft](topic:settings) · [Opdrachten](topic:commands)
