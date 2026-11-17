---
title: Samen aan één tekening werken met Live TeamWork
summary: Wat er in CadCraft verandert terwijl u in een Live TeamWork-sessie vanuit CadCraft Studio zit: de cursors en selecties van anderen, objecten die iemand bewerkt, de vergrendelingen van de host, uw eigen ongedaan maken, en deelnemen vanuit een browser op hetzelfde netwerk.
keywords: live, live teamwork, studio live, samen, samenwerken, samen bewerken, sessie, live delen, deelnemen, cursor, vastgehouden, bewerken, vergrendeling, livelock, liveunlock, livehold, laag vasthouden, gebied vasthouden, hangslot, ongedaan maken, host, assistent, zelfde bestand, veel mensen, traag, limiet, wie heeft gewijzigd, recente wijzigingen, bewerkingslogboek
from: 0497d2a3
---

## Wat u leert

Wat u ziet en wat er met uw bewerkingen gebeurt terwijl meerdere mensen tegelijk aan één tekening werken. CadCraft Studio start en koppelt de Live TeamWork-sessie (Live delen, Deelnemen); deze pagina gaat over de tekening zelf.

## Iedereen tekent tegelijk

Teken en bewerk zoals gewoonlijk. Uw eigen bewerkingen zijn meteen zichtbaar, zelfs voordat de anderen ze hebben, en die van hen verschijnen op uw scherm even nadat ze ze maken. Elke opdracht werkt: tekenen, wijzigen, lagen, blokken, bladen, maatvoeringen, beperkingen.

Twee mensen kunnen hetzelfde object wijzigen. Wanneer u verschillende dingen wijzigt, zoals de kleur en een eindpunt van één lijn, blijven beide wijzigingen bewaard. Wanneer u hetzelfde wijzigt, wint de latere wijziging.

Wat alleen van u blijft: de actieve laag, kleur en tekstbhoogte voor nieuwe objecten, uw maatvoeringsinstellingen, uw weergave, gesplitst scherm en UCS. De tekening wordt gedeeld; hoe u ernaar kijkt, niet.

## Anderen op uw tekening

- **Cursors:** de aanwijzer van elke persoon toont de naam in hun eigen kleur, en de opdracht die ze uitvoeren. U ziet de cursors van mensen die dicht bij wat op uw scherm staat werken.
- **Selecties:** wat iemand heeft geselecteerd, is omlijnd in hun kleur.
- **Wordt bewerkt:** een object dat iemand heeft geselecteerd, krijgt een label zoals "Ana bewerkt". U kunt de kleur nog wijzigen of het verplaatsen, maar u kunt het niet verwijderen, ontbinden of opnieuw typen totdat zij het loslaten. Het selecteren ervan laat zien wie het heeft.
- **Wie het als laatste wijzigde:** selecteer één object dat iemand anders in deze sessie heeft gewijzigd, en de opdrachtregel zegt wie, en wat de wijziging was ("Ben heeft dat als laatste gewijzigd: CIRCLE."). Het paneel Live van Studio toont elke recente bewerking onder {{ui:Recente bewerkingen}}. Niets hiervan wordt in de tekening opgeslagen: het duurt zolang de sessie.

## Een laag of een gebied vasthouden terwijl u er werkt

Bij een grote tekening met meerdere mensen geeft u aan welk deel voorlopig van u is:

1. Typ `LIVEHOLD` en druk op {{key:Enter}}.
2. Kies `L` en typ een laagnaam (Enter behoudt de actieve laag), of kies `A` en klik twee hoeken van een gebied aan.
3. Bewerkingen van anderen op die laag, of aan objecten in dat gebied, worden teruggedraaid en zij krijgen te horen dat u daar werkt. U ziet uw gebied als een gestreept kader; anderen zien het in uw kleur met uw naam, en de lagen die u vasthoudt, staan linksboven in hun tekening.
4. `LIVEHOLD`, dan `R`, laat alles los wat u vasthoudt. Het verlaten van de sessie laat het ook los.

Iedereen in de sessie kan vasthouden, ook de host; de vergrendelingen van de host blijven daar bovenop gelden. Een vasthouding wordt nooit in het bestand opgeslagen.

## Wanneer een bewerking wordt teruggedraaid

De kopie van de tekening bij de host controleert elke bewerking. Sommige kunnen er niet in, en CadCraft draait ze op uw scherm terug en zegt op de opdrachtregel waarom, bijvoorbeeld:

- iemand heeft het object verwijderd, of de laag of het blok dat het nodig heeft, net voor u;
- iemand bewerkt dat object, of houdt zijn laag of het gebied waarin het ligt vast;
- de host heeft het vergrendeld;
- het blok dat u plaatst is opgeschoond, of een laag die u verwijdert, bevat nog objecten.

## Ongedaan maken betreft uw eigen werk

{{key:Mod+Z}} en {{ui:Ongedaan maken}} maken uw eigen laatste opdracht ongedaan, helemaal, en laten het werk van alle anderen met rust. Wanneer iemand sindsdien hetzelfde heeft gewijzigd, wordt er niets ongedaan gemaakt en zegt de opdrachtregel wie het heeft gewijzigd. {{key:Mod+Y}} voert het ongedaan gemaakte opnieuw uit.

## Vergrendelingen (de host)

De host kan objecten of een hele laag beschermen, zodat niemand ze wijzigt, ook de host niet, totdat ze worden ontgrendeld:

1. Selecteer de objecten, typ dan `LIVELOCK` en druk op {{key:Enter}}. Of typ `LIVELOCK` zonder selectie en kies `L` om een laag bij naam te vergrendelen: objecten die later aan die laag worden toegevoegd, worden ook vergrendeld.
2. Vergrendelde objecten worden gestippeld getekend, met het label "Vergrendeld door de host" op ieders scherm.
3. `LIVEUNLOCK` ontgrendelt ze op dezelfde manier.

Vergrendelingen horen bij de sessie: ze eindigen wanneer die eindigt en worden nooit in het bestand opgeslagen.

## Deelnemen met hetzelfde bestand

Als u precies het bestand heeft geopend dat de host opende (uit een gedeelde map of dezelfde kopie), doe dan mee vanuit uw eigen CadCraft-venster in Studio: open het paneel {{ui:Veranderlijk}} en gebruik {{ui:Hier deelnemen}} met de code van de host. Alleen de wijzigingen die sinds het openen door de host zijn gemaakt, worden overgebracht, zodat een grote tekening meteen klaar is. Is uw bestand een ander bestand, dan vervangt de tekening van de host die op uw scherm (uw bestand blijft zoals het is). Dit werkt alleen zolang uw tekening sinds het openen onveranderd is.

## Assistenten in een live-sessie

Een assistent die is verbonden met uw CadCraft-venster (zie de help over werken met AI-assistenten) doet als eigen deelnemer mee aan de sessie, voor iedereen getoond als "Assistent (via <uw naam>)". De host laat hem binnen, zoals bij een persoon; de eigen assistent van de host doet meteen mee. Zijn wijzigingen hebben hun eigen ongedaan maken: uw {{key:Mod+Z}} maakt uw werk ongedaan, en het ongedaan maken van de assistent maakt alleen zijn eigen werk ongedaan. Hij verlaat de sessie wanneer u de verbinding verbreekt of weggaat, en hij kan alleen in de sessie werken terwijl u kunt bewerken.

## Deelnemen vanuit een browser

Een teamlid zonder Studio kan de afbeelding onder de code van de host scannen met een telefoon, tablet of computer op hetzelfde netwerk. CadCraft opent in de browser, vraagt op de opdrachtregel om uw naam, en vult zich met de tekening van de host zodra de host u binnenlaat. Een uitnodigingslink laat iemand deelnemen vanaf een ander netwerk: de host heeft een Team Cloud Plan-plaats nodig voor de app, iedereen anders doet gratis mee, en de link werkt alleen zolang de sessie van de host open is.

## Veel mensen op één tekening

Elke bewerking gaat naar iedereen in de sessie, dus hoe meer mensen er zijn, hoe langer het duurt voordat elke wijziging bij ieder van hen aankomt, en langzamere laptops en verbindingen raken als eerste achterop. Een gebruikelijke sessie telt 20 mensen; de host kan voor één sessie meer toestaan (zie de help over live samenwerken). Als de tekening met veel mensen traag aanvoelt, helpen minder mensen, minder van hen die tegelijk bewerken, of een betere verbinding.

## Wanneer de sessie eindigt

Alleen de host slaat de tekening op. Wanneer de host de sessie beëindigt, houdt iedereen anders een niet-opgeslagen kopie: sla die op als u hem wilt bewaren.

:::note
Iets dat is teruggedraaid, wordt op uw eigen scherm over de objecten eromheen getekend totdat u de tekening opnieuw opent. Arceringen en gevulde objecten die elkaar overlappen, kunnen er anders uitzien dan bij de kopie van de host; de tekening zelf is hetzelfde.
:::
