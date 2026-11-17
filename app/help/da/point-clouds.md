---
title: Tegn som-udførte linjer over en punktsky
summary: Tilknyt en laserscanning (LAS, LAZ, E57, PLY, PCD, PTX, PTS eller XYZ) under tegningen, skær et plansnit igennem den, og tegn vægge, døre og søjler med objektfang på dens punkter.
keywords: punktsky, pointcloudattach, pcattach, pointcloud, pc, laserscanning, scanning, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, som-udført, som udført, opmåling, udsnit, plansnit, knudepunkt, fang, tegn over, eksisterende forhold
from: b0e0aae5
---

## Hvad du laver

En som-udført etageplan: væggene i en scannet bygning tegnet som linjer og polylinjer præcis på scanningens punkter.

## Tilknyt punktskyen

1. Angiv tegningens enheder først, hvis den ikke har nogen (feltet {{ui:Enheder}} i {{ui:Egenskaber}}, eller {{cmd:UNITS}}): CadCraft omregner punktskyen fra dens egne enheder til tegningens.
2. Skriv {{cmd:POINTCLOUDATTACH}} (eller `PCATTACH`) og tryk {{key:Enter}}. Vælg en fil med endelsen `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` eller `.xyz` (emnet om punktskyformater forklarer, hvad hvert format indeholder, og hvad du skal eksportere fra en scanners eget program). Du kan også åbne filen med {{ui:Åbn}}, slippe den på siden eller sende den fra BIM-fremviseren med {{ui:Tegn over i CadCraft}}.
3. `Nederste venstre hjørne af punktskyen`: tryk {{key:Enter}} for at beholde filens egne koordinater (en scanning registreret til projektet flugter med tegningen), eller klik der, hvor dens nederste venstre hjørne skal være.
4. Kommandolinjen angiver, hvor mange punkter der vises. Visningen zoomer til punktskyen; den ligger under linjearbejdet, og hvert punkt ses oppefra.

## Skær et plansnit og tegn efter

1. Skriv {{cmd:POINTCLOUD}} (eller `PC`), og vælg derefter {{ui:Udsnit}} (S). Kun et tyndt bånd 1.2 m over punktskyens laveste punkt vises: vægge, døråbninger og søjler læses som en etageplan.
2. Angiv snitets højde med Højde (H) og dens tykkelse med Tykkelse (T) (i tegningsenheder). Tryk {{key:Enter}} for at afslutte kommandoen.
3. Slå objektfang til med {{key:F3}} og vælg {{ui:Knudepunkt}} blandt fangene. Tegn med {{cmd:LINE}} eller {{cmd:PLINE}}: markøren fanger udsnittets punkter, som er mærket »Punktsky«. Tegningens egne endepunkter, midtpunkter og centre går forud for punktskyen, så lukning af en polylinje lander på dens første punkt.
4. Skift snithøjden for at tegne efter en anden etage, og slå udsnittet fra igen med S for at se hele punktskyen.

## Flere muligheder

I {{cmd:POINTCLOUD}}: Farver (C) farvelægger punkterne efter filens farver, højde, intensitet, LiDAR-klasse eller én farve. Punktstørrelse (SI) angiver punktstørrelsen. Vis/skjul (V) skjuler eller viser punktskyen. Zoom (Z) zoomer til den. Frakobl (D) frakobler den.

Fanen 3D viser også punktskyen, med dens laveste punkt på jorden og samme udsnit.

:::note
Punktskyen er ikke en del af tegningen: den gemmes ikke i DWG eller DXF, og fortryd ændrer den ikke. Tilknyt den igen, når du senere åbner tegningen. Filerne læses på denne computer; intet uploades. Meget store scanninger reduceres jævnt til 2 millioner punkter. E57-filer åbnes med op til 6 millioner punkter og 512 MB foreløbigt: eksportér større scanninger som LAS eller LAZ.
:::

## Plot den

{{cmd:PLOT}} udskriver punktskyen sammen med tegningen, under linjearbejdet: i en modelplot ({{ui:Alt}} inkluderer punktskyens område) og i hver viewport på et layout, i PDF, PNG, SVG og det, du sender til en printer. Den udskriver det, der er på skærmen: udsnittet, hvis udsnit er tændt, de farver du valgte, og den skjules, hvis du skjulte den. På papir bliver punkterne små firkanter, hvor det højeste punkt vinder hver firkant, og en plot beholder højst ca. 400.000 af dem (en meget tæt punktsky udskrives med større firkanter). Punktskyen plottes kun i den tegning, den blev tilknyttet til; den udskrives aldrig i selve papirrummet, kun gennem en viewport.

## Flere scanninger

Scanninger taget fra forskellige positioner kan registreres til ét koordinatsystem, forfines med ICP og eksporteres som én LAS- eller E57-fil: se [Registrér flere scanninger til én](topic:register-scans).
