---
title: Dokumenter: udtjekning, revisioner og udgivelse
summary: Hold styr på tegningerne i en projektmappe: tjek en fil ud, så ingen andre ændrer den, tjek den ind som en ny revision, send den til gennemgang og udgiv den med en godkenders navn; historik, hvad der bruger hvad, en stykliste og tegningshoveder, der viser revisionen.
keywords: projektindstillinger, godkendere, administratorer, revisionsbogstaver, ASME, skrivebeskyttet, sammenlign revisioner, åbn kopi, partcraft, bimcraft, dokumenter, DOCUMENTS, DOCS, arkiv, dokumenthåndtering, pdm, tjek ud, tjek ind, udtjekning, indtjekning, lås, revision, rev, revisionsbogstav, udgivelse, udgivet, godkend, godkendelse, gennemgang, forældet, hvor brugt, bom, stykliste, tegningshoved, revisionsfelt, projektmappe
from: ee938722
---

## Hvad du laver

En projektmappe, hvor hver tegning har en revision (A.1, A.2 … derefter A, B …) og en tilstand (Under arbejde, Til gennemgang, Udgivet, Forældet), hvor kun én person ad gangen kan ændre en fil, og hvor hver udtjekning, indtjekning, godkendelse og brudt udtjekning noteres med hvem der gjorde det, og hvornår.

Alt gemmes i selve mappen, i en skjult mappe `.ccvault` ved siden af dine tegninger. En mappe på et delt drev eller en synkroniseret mappe virker til et helt team. Der er ingen server, og intet uploades.

## Åbn Dokumenter

Skriv `DOCUMENTS` (eller `DOCS`) og tryk {{key:Enter}}. Panelet åbnes ved siden af tegningen.

Vælg {{ui:Vælg projektmappen}} og vælg den mappe, der indeholder projektets tegninger. Projektmapper virker i CadCraft Studio og i browsere, der kan åbne en mappe (Chrome, Edge). I andre browsere siger panelet det.

Første gang skriver du dit navn (det kommer på alt, du gør) og navnet på denne computer. Hvis du er logget ind, står dit navn der allerede.

## Start et arkiv

En mappe, der endnu ikke er et arkiv, tilbyder {{ui:Start et arkiv i denne mappe}}. Skriv projektets navn. Åbn derefter {{ui:Filer uden for arkivet}} og vælg {{ui:Tilføj}} ved siden af hver fil, du vil have under kontrol. En fil, du tilføjer, starter ved revision **A.1**, Under arbejde.

## Ændr en tegning

1. Vælg {{ui:Åbn}} ved siden af en tegning. Den åbnes i CadCraft. Hvis den ikke er udtjekket til dig, kan du kun kigge på den og ikke ændre den: Gem nægter at skrive over den og siger hvorfor (brug Gem som for at beholde en kopi af din egen).
2. Vælg {{ui:Tjek ud}}. Ingen andre kan tjekke den ud nu; panelet viser dem, der har den, på hvilken computer og siden hvornår.
3. Tegn.
4. Vælg {{ui:Tjek ind}} og skriv, hvad der er ændret. Tegningen, du har åben, gemmes i projektmappen i sit eget format og bliver den næste revision (A.1, derefter A.2). Indtjekning uden ændringer beholder revisionen.

{{ui:Fortryd udtjekning}} giver filen tilbage uden en ny revision.

## Gennemgang og udgivelse

- {{ui:Send til gennemgang}}: filen er skrivebeskyttet, mens den gennemgås.
- {{ui:Godkend}}: skriv godkenderens navn. A.3 bliver **A**, Udgivet. Udgivne filer er skrivebeskyttede.
- {{ui:Send tilbage}}: tilbage til Under arbejde, med årsagen.
- {{ui:Ny revision}} på en udgivet fil tjekker den ud til det næste bogstav: dens første indtjekning er **B.1**. {{ui:Fortryd udtjekning}} inden da lader den blive på A.
- {{ui:Gør forældet}} trækker en udgivet fil tilbage.

Et projekt kan have en liste over, hvem der må godkende, og kan kræve, at godkenderen ikke er den person, der tjekkede filen ind (se Projektindstillinger nedenfor).

## Projektindstillinger

Åbn {{ui:Projektindstillinger}} i panelet:

- **Godkendere**: ét navn pr. linje. Når der er nogen, kan kun de godkende en udgivelse.
- **Godkenderen skal være en anden end forfatteren**: "fire øjne"-reglen.
- **Administratorer**: ét navn pr. linje. Når der er nogen, kan kun de bryde andres udtjekning eller ændre disse indstillinger.
- **Revisionsbogstaver, der skal udelades**: {{ui:Brug ASME Y14.35-rækkefølgen}} springer I, O, Q, S, X og Z over, eller skriv dine egne bogstaver. Bogstaver, der allerede er givet, bliver; valget gælder for de næste revisioner.
- **En udtjekning regnes som gammel efter**: antal dage (14 som standard).

Vælg {{ui:Gem indstillinger}}. Ændringen skrives i loggen med hvem der lavede den.

## Nogen har efterladt en fil udtjekket

{{ui:Bryd udtjekning}} frigiver en fil, som en anden har tjekket ud (de er væk, eller deres computer er gået ned). Du skal skrive en årsag: den skrives i loggen med hvis udtjekning det var. Når projektet har administratorer, er det kun dem, der kan gøre dette. En udtjekning, der er ældre end 14 dage, markeres som længe siden.

## Historik, revisioner, brug, brugt af

Vælg en fils navn for at se:

- {{ui:Historik}}: hver hændelse, nyeste først, med hvem, hvilken computer og hvornår.
- {{ui:Revisioner}}: hver gemt revision. En kopi af hver revision ligger i arkivet (samme indhold gemmes kun én gang). {{ui:Åbn kopi}} åbner den revision som en almindelig kopi, der ikke kan overskrive arkivets fil. {{ui:Sammenlign med}} viser, hvad der er tilføjet, fjernet og ændret mellem den revision og den forrige (eller en anden, du vælger), og farver det på tegningen.
- {{ui:Bruger}}: de tegninger, den linker til (xrefs), de dokumenter en IFC-model peger på, og delene i en PartCraft-samling.
- {{ui:Bruges af}}: hver fil i arkivet, der bruger denne.

{{ui:Stykliste (CSV)}} gemmer listen over alt, en fil bruger, niveau for niveau, med mængder, revisioner og tilstande, til et regneark.

## En revisionsblok på arket

Med en tegning åben, der har et layout, vælg {{ui:Revisionsfelt}}. En tabel over de udgivne revisioner (revision, dato, af, godkendt, beskrivelse) tegnes øverst til højre på det ark, du ser på. Når du godkender en udgivelse, opdateres tabellen.

## Revision i tegningshovedet

Giv attributterne i dit tegningshoved et af disse mærker, og vælg {{ui:Udfyld tegningshoveder}} på den åbne tegning:

| Mærke | Udfyldes med |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revisionen (B, eller B.2 mens den arbejdes på) |
| `VAULT.STATE` | tilstanden (Udgivet …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datoen for den seneste revision |
| `VAULT.APPROVER`, `APPROVED_BY` | hvem der godkendte den seneste udgivelse |

## PartCraft og BimCraft

PartCraft og BimCraft har det samme Dokumenter-panel til deres egne filer: dele og samlinger i PartCraft, IFC-modeller i BimCraft. Indtjekning gemmer den model, der er åben, i projektmappen, og en samling viser, hvilke dele den bruger, og en stykliste.

## Godt at vide

- To personer på den samme delte mappe kan ikke begge tjekke en fil ud: udtjekningen er en fil, som systemet nægter at lave to gange. I en browser, og i en Studio hvis shell er ældre end denne funktion, er det så strengt, som mappen tillader: to udtjekninger i samme brøkdel af et sekund kan begge lykkes. Panelet siger, hvilken der gælder.
- Redigér eller slet ikke mappen `.ccvault` i hånden. Loggen i den er optegnelsen; arkivet genopbygger sin liste ud fra den, hvis det er nødvendigt.
- Ændring af en fil i mappen uden at tjekke den ud vises som {{ui:Ændret i mappen uden en udtjekning}}.
