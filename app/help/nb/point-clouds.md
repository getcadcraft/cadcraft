---
title: Spor som-bygget-linjer over en punktsky
summary: Legg inn en laserskanning (LAS, LAZ, E57, PLY, PCD, PTX, PTS eller XYZ) under tegningen, lag et plansnitt gjennom den, og tegn vegger, dører og søyler med objektfang på punktene.
keywords: punktsky, pointcloudattach, pcattach, pointcloud, pc, laserskanning, skanning, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, som bygget, som-bygget, oppmåling, snitt, plansnitt, node, fang, spor, eksisterende forhold
from: b0e0aae5
---

## Resultat

En som-bygget-plantegning: veggene i en skannet bygning tegnet som linjer og polylinjer, nøyaktig på skannens punkter.

## Legg inn skyen

1. Angi tegningens enheter først hvis den ikke har noen (boksen {{ui:Enheter}} i {{ui:Egenskaper}}, eller {{cmd:UNITS}}): CadCraft konverterer skyen fra sine egne enheter til tegningens.
2. Skriv {{cmd:POINTCLOUDATTACH}} (eller `PCATTACH`) og trykk {{key:Enter}}. Velg en `.las`-, `.laz`-, `.e57`-, `.ply`-, `.pcd`-, `.ptx`-, `.pts`- eller `.xyz`-fil (emnet om punktskyformater forklarer hva hvert format gir, og hva som skal eksporteres fra en skanners egen programvare). Filen kan også åpnes med {{ui:Åpne}}, slippes på siden eller sendes fra BIM-viewerens {{ui:Spor i CadCraft}}.
3. `Nedre venstre hjørne av punktskyen`: trykk {{key:Enter}} for å beholde filens egne koordinater (en skanning registrert til prosjektet passer med tegningen), eller klikk der det nedre venstre hjørnet skal ligge.
4. Kommandolinjen sier hvor mange punkter som vises. Visningen zoomer til skyen; den ligger under linjearbeidet, med alle punkter sett ovenfra.

## Lag et plansnitt og spor

1. Skriv {{cmd:POINTCLOUD}} (eller `PC`), og deretter `S` for {{ui:Snitt}}. Bare et tynt belte 1.2 m over punktskyens laveste punkt vises: vegger, døråpninger og søyler leses som en plantegning.
2. `H` angir snittets høyde, `T` tykkelsen (i tegningsenheter). {{key:Enter}} avslutter kommandoen.
3. Slå på objektfang ({{key:F3}}) med {{ui:Node}} blant fangene. Tegn med {{cmd:LINE}} eller {{cmd:PLINE}}: markøren fanger snittets punkter, merket «Punktsky». Tegningens egne endepunkter, midtpunkter og sentrum vinner over skyen, så lukking av en polylinje treffer første punkt.
4. Endre snitthøyden for å spore et annet nivå, og slå av snittet (`S` igjen) for å se hele skyen.

## Flere alternativer

I {{cmd:POINTCLOUD}}: `C` farger punktene etter filens farger, høyde, intensitet, LiDAR-klasse eller én farge; `SI` angir punktstørrelsen; `V` skjuler eller viser skyen; `Z` zoomer til den; `D` kobler den fra.

Fanen «3D» viser også skyen, med det laveste punktet på bakken og det samme snittet.

:::note
Skyen er ikke en del av tegningen: den lagres ikke i DWG eller DXF, og angre endrer den ikke. Legg den inn på nytt når tegningen åpnes senere. Filene leses på denne maskinen; ingenting lastes opp. Svært store skanninger tynnes jevnt ned til 2 millioner punkter. E57-filer åpnes med opptil 6 millioner punkter og 512 MB foreløpig: eksporter større skanninger som LAS eller LAZ.
:::

## Plott den

{{cmd:PLOT}} skriver ut skyen sammen med tegningen, under linjearbeidet: i en modellutskrift ({{ui:Alt}} inkluderer skyens område) og i hvert layout-visningsområde, i PDF, PNG, SVG og det som sendes til en skriver. Den skriver ut det som vises på skjermen: snittet hvis snittet er på, fargene du valgte, og skjult når den er skjult. På papir blir punktene små firkanter, der det høyeste punktet vinner hver firkant, og en utskrift har høyst omtrent 400 000 av dem (en veldig tett sky skrives ut med større firkanter). Skyen plottes bare i tegningen den ble lagt inn i; den skrives aldri ut i papirrom selv, bare via et visningsområde.

## Flere skanninger

Skanninger tatt fra ulike posisjoner kan registreres til ett koordinatsystem, finjusteres med ICP og eksporteres som én LAS- eller E57-fil: se [Registrer flere skanninger til én](topic:register-scans).
