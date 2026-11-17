---
title: Arbejd sammen om én tegning med Live TeamWork
summary: Hvad der ændrer sig i CadCraft, når du er i en Live TeamWork-session fra CadCraft Studio: andres markører og valg, objekter som nogen redigerer, værtens låse, din egen fortryd, og at deltage fra en browser på samme netværk.
keywords: live, live teamwork, studio live, sammen, samarbejd, samredigér, session, del live, deltag, markør, holdt, redigerer, lås, livelock, liveunlock, livehold, holdlag, holdområde, hængelås, fortryd, vært, assistent, samme fil, mange personer, langsom, grænse, hvem ændrede, seneste ændringer, redigeringslog
from: 0497d2a3
---

## Hvad du lærer

Hvad du ser, og hvad der sker med dine redigeringer, mens flere personer arbejder på én tegning samtidig. CadCraft Studio starter og deltager i Live TeamWork-sessionen (Del live, Deltag); denne side handler om selve tegningen.

## Alle tegner samtidig

Tegn og redigér som sædvanligt. Dine egne redigeringer vises med det samme, selv før de andre har dem, og deres vises på din skærm kort efter, de har lavet dem. Alle kommandoer virker: tegning, ændring, lag, blokke, ark, målsætninger, begrænsninger.

To personer kan ændre det samme objekt. Ændrer du forskellige ting, for eksempel farven og et endepunkt på en linje, beholdes begge ændringer. Ændrer du det samme, vinder den senere ændring.

Det, der kun er dit: det aktuelle lag, farve og teksthøjde for nye objekter, dine målsætningsindstillinger, din visning, delt skærm og UCS. Tegningen deles; hvordan du ser på den, deles ikke.

## Andre personer på din tegning

- **Markører:** hver persons pointer vises med navn i deres egen farve, og den kommando, de kører. Du ser markørerne for personer, der arbejder tæt på det, der er på din skærm.
- **Valg:** det, nogen har valgt, får en kontur i deres farve.
- **Under redigering:** et objekt, nogen har valgt, får en mærkat som »Ana redigerer«. Du kan stadig ændre dens farve eller flytte den, men du kan ikke slette, eksplodere eller skrive den om, før de slipper den. Hvis du vælger den, siger den, hvem der har den.
- **Hvem ændrede det sidst:** vælg ét objekt, som en anden har ændret i denne session, og kommandolinjen siger, hvem, og hvad ændringen var (»Ben ændrede det sidst: CIRCLE.«). Studios Live-panel lister hver seneste redigering under {{ui:Seneste redigeringer}}. Intet af dette gemmes i tegningen: det varer, så længe sessionen varer.

## Hold et lag eller et område, mens du arbejder der

På en stor tegning med flere personer angiver du, hvilken del der er din lige nu:

1. Skriv `LIVEHOLD` og tryk {{key:Enter}}.
2. Vælg `L` og skriv et lagnavn (Enter beholder det aktuelle lag), eller vælg `A` og vælg to hjørner af et område.
3. Andres redigeringer på det lag eller af objekter i det område tages tilbage, og de får at vide, at du arbejder der. Du ser dit område som en stiplet ramme; andre ser det i din farve med dit navn, og de lag, du holder, vises øverst til venstre i deres tegning.
4. `LIVEHOLD` og derefter `R` frigiver alt, du holder. Når du forlader sessionen, frigives det også.

Alle i sessionen kan holde, værten inklusive; værtens låse gælder stadig oveni. Et hold gemmes aldrig i filen.

## Når en redigering tages tilbage

Værtens kopi af tegningen kontrollerer hver redigering. Nogle kan ikke komme ind, og CadCraft tager dem tilbage på din skærm og siger, hvorfor på kommandolinjen, for eksempel:

- nogen slettede objektet, eller det lag eller den blok, det kræver, lige før dig;
- nogen redigerer det objekt, eller holder dets lag eller området, det ligger i;
- værten har låst det;
- blokken, du placerer, blev ryddet op, eller et lag, du sletter, har stadig objekter på sig.

## Fortryd fortryder dit eget arbejde

{{key:Mod+Z}} og {{ui:Fortryd}} fortryder din egen sidste kommando, hele den, og lader andres arbejde være. Har nogen ændret det samme siden, fortrydes ingenting, og kommandolinjen siger, hvem der ændrede det. {{key:Mod+Y}} gentager.

## Låse (værten)

Værten kan beskytte objekter eller et helt lag, så ingen ændrer dem, værten inklusive, før de låses op:

1. Vælg objekterne, skriv `LIVELOCK`, og tryk {{key:Enter}}. Eller skriv `LIVELOCK` uden noget valgt, og vælg `L` for at låse et lag med navn: objekter, der senere tilføjes til det lag, låses også.
2. Låste objekter tegnes stiplet med mærkaten »Låst af værten« på alles skærm.
3. `LIVEUNLOCK` låser dem op på samme måde.

Låse hører til sessionen: de ophører, når den slutter, og gemmes aldrig i filen.

## Deltag med den samme fil

Hvis du har åbnet præcis den fil, værten åbnede (fra en delt mappe eller den samme kopi), deltager du fra dit eget CadCraft-vindue i Studio: åbn panelet {{ui:Live}} og brug {{ui:Deltag her}} med værtens kode. Kun de ændringer, der er lavet, siden værten åbnede den, sendes, så en stor tegning er klar med det samme. Er din fil en anden, erstatter værtens tegning den på din skærm (din fil forbliver, som den er). Det virker kun, så længe din tegning er uændret, siden du åbnede den.

## Assistenter i en live-session

En assistent, der er forbundet til dit CadCraft-vindue (se hjælpen om at arbejde med AI-assistenter), deltager i sessionen som sin egen deltager, vist for alle som »Assistent (via <dit navn>)«. Værten lukker den ind, ligesom for en person; værtens egen assistent deltager med det samme. Dens ændringer har deres egen fortrydelse: din {{key:Mod+Z}} fortryder dit arbejde, og assistentens fortrydelse fortryder kun dens eget. Den forlader sessionen, når du afbryder den eller forlader, og den kan kun arbejde i sessionen, mens du kan redigere.

## Deltag fra en browser

En holdkammerat uden Studio kan scanne billedet under værtens kode med en telefon, tablet eller computer på samme netværk. CadCraft åbnes i browseren, spørger efter dit navn på kommandolinjen og fyldes med værtens tegning, når værten lukker dig ind. Et invitationslink lader nogen deltage fra et andet netværk: værten skal have en Team Cloud Plan-plads til programmet, alle andre deltager gratis, og linket virker kun, mens værtens session er åben.

## Mange personer på én tegning

Hver redigering sendes til alle i sessionen, så jo flere der er, desto længere tid tager hver ændring om at nå hver enkelt, og langsommere bærbare computere og forbindelser halter bagefter først. En sessions sædvanlige størrelse er 20 personer; værten kan tillade flere i én session (se hjælpen om at arbejde sammen live). Hvis tegningen føles langsom med mange personer, hjælper færre personer, færre der redigerer på samme tid, eller en bedre forbindelse.

## Når sessionen slutter

Kun værten gemmer tegningen. Når værten afslutter sessionen, beholder alle andre en kopi med ikke-gemte ændringer: gem den, hvis du vil beholde den.

:::note
Noget, der er taget tilbage, tegnes oven på objekterne omkring det på din egen skærm, indtil du åbner tegningen igen. Skravering og udfyldte objekter, der overlapper, kan se anderledes ud end værtens kopi; selve tegningen er den samme.
:::
