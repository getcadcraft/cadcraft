---
title: Historik: versioner og hvad der ændrede sig
summary: Se versionerne af en tegning (kopier Studio gemmer, når du gemmer, og skyens), åbn eller gendan en, og sammenlign to med det, der er ændret, vist i farver.
keywords: historik, versioner, versionshistorik, gendan, tidligere version, fortryd en gemning, sammenlign, sammenlign tegninger, dwgcompare, ændringer, tilføjet, fjernet, ændret, snapshot, backup, skyversioner
from: 141d37b3
---

## Det laver du

Et kig på en tidligere version af en tegning og en liste over, hvad der er anderledes end nu: hvad der er tilføjet, hvad der er fjernet, og hvad der er ændret, markeret i farver på tegningen.

## Åbn Historik

Skriv `HISTORY` (eller `HIST`) og tryk {{key:Enter}}, eller vælg {{ui:Historik…}} i menuen {{ui:Mere}} i gruppen {{ui:Visning}}. Panelet åbner ved siden af tegningen og forbliver åbent, mens du arbejder, så du kan panorere og zoome i tegningen med farverne på.

Historik fungerer i CadCraft Studio. I en browser siger panelet blot det.

## Hvor versionerne kommer fra

- **På denne computer.** Hver gang du åbner en tegning fra en fil i Studio, og hver gang du gemmer den, gemmer Studio en kopi af filen i sin egen lagring på denne computer. Den første kopi er {{ui:Som åbnet}}: filen, som den var, før din første gemning over den. Studio gemmer de nyeste 25 kopier af hver tegning, og de ældste går først, når alle kopierne tilsammen overstiger 400 MB. En gemning, der intet ændrer, gemmer ikke noget. Intet uploades.
- **I skyen.** Når du åbner en tegning fra dine skyfiler i Studio, lister panelet også {{ui:I skyen}}: hver version skyen har, med dens nummer, hvem der gemte den, og noten. Panelet læser kun dem. CadCraft sender endnu ikke sine egne gemninger til skyen, så det er versioner gemt fra andre enheder og fra webben. Log ind igen i Studio, hvis den siger, at din login er udløbet.

En tegning, du endnu ikke har gemt, har ingen kopier: gem den først.

## Åbn eller gendan en version

- {{ui:Åbn}} lægger den version i en fane for sig selv. Din tegning berøres ikke.
- {{ui:Gendan}} erstatter denne tegning med den version. Den spørger først. Studio gemmer en kopi af tegningen, som den er nu, i Historik (markeret {{ui:Før en gendannelse}}), før den gør det, og intet skrives til filen, før du gemmer. En gendannelse kan ikke fortrydes med {{key:Mod+Z}}; brug den kopi.

## Sammenlign

1. Klik på {{ui:Sammenlign}} ved en version. Den sammenlignes med {{ui:Tegningen, som den er nu}}; vil du sammenligne den med en anden version, skal du først vælge den i {{ui:Sammenlign med}}.
2. Læs resultatet under listen: hvor mange objekter der er tilføjet, fjernet og ændret, og en liste over dem. Klik på et punkt i listen for at flytte visningen hen til det.
3. På tegningen:
   - **grønne** objekter er tilføjet,
   - **røde** objekter er fjernet (de findes kun i den ældre version),
   - **orange** objekter er ændret: den nye form er massiv, og den gamle er stiplet.
4. {{ui:Vis på tegningen}} tænder og slukker farverne; {{ui:Ryd farverne}} fjerner resultatet. Lukkes panelet, fjernes farverne også.

Listen siger, hvad der er ændret i et ændret objekt: dets tekst, at det er flyttet, dets form, dets lag, farve, linjetype eller linjetykkelse. Hvert ark sammenlignes for sig; farverne vises på det ark, der er åbent.

:::note
En tegning har ikke et varigt nummer for hvert objekt, så CadCraft matcher objekter efter, hvad de er: det samme objekt på begge sider er uændret; et objekt af samme type og lag, der ligger inden for sin egen størrelse af et gammelt, er det samme objekt, ændret; det, der er tilbage, er tilføjet eller fjernet. Et objekt flyttet langt fra sit sted vises som fjernet ét sted og tilføjet et andet. En blokreference tæller indholdet af sin blok.
:::

## Typiske fejl

- **»Ingen kopier endnu.«** Studio gemmer en kopi ved hver åbning og gemning af en tegning, der har en fil på denne computer. En tegning åbnet fra en browserfane, eller en der aldrig er gemt, har ingen.
- **Skylisten mangler.** Den vises for en tegning åbnet fra skyen i Studio; en fil åbnet fra disken er ikke en skytegning.
- **Alt ser ændret ud.** To versioner gemt af forskellige programmer skriver den samme tegning på forskellige måder (navne på anonyme blokke, afrunding). Sammenlign versioner gemt af CadCraft.
