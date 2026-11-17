---
title: "Begræns en tegning"
summary: "Hold linjer vandrette, endepunkter sammen og mål faste med geometriske og dimensionelle begrænsninger, og lad tegningen følge med, når du ændrer et mål."
keywords: begrænsning, begrænsninger, parametrisk, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, frihedsgrader, fuldt begrænset
from: f8f21fa4
---

## Hvad du laver

En plade, hvis bredde du ændrer ét sted: dens sider forbliver vinkelrette, ét hjørne bliver stående, og dens højde forbliver halvdelen af bredden.

Begrænsninger virker på linjer, polylinjer, cirkler, buer og punkter på fanen {{ui:Model}}. Hver enkelt, du tilføjer, er ét trin i fortryd.

## Tegn og begræns konturen

1. Skriv `REC` og tryk {{key:Enter}}. Skriv `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Skriv `AUTOCONSTRAIN` og tryk {{key:Enter}}. Skriv `ALL`, {{key:Enter}}, og tryk derefter {{key:Enter}} igen.

   Historikken siger »4 begrænsninger anvendt«. Små felter med **H** og **V** vises ved siderne: det er begrænsningslinjerne.
3. Skriv `GCFIX` og tryk {{key:Enter}}. Klik tæt på nederste venstre hjørne. Et felt med ⊕ vises: hjørnet bliver, hvor det er.

`AUTOCONSTRAIN` tilføjer sammenfaldende begrænsninger, hvor endepunkter næsten mødes, og vandrette eller lodrette, hvor linjer næsten er vandrette eller lodrette. Skriv `S` ved dens ledetekst for at ændre, hvor tæt de skal være (0.05 tegningsenheder og 1° til at begynde med).

## Tilføj målene

1. Skriv `DCHORIZONTAL` og tryk {{key:Enter}}.
2. Klik tæt på nederste venstre hjørne, og derefter tæt på nederste højre hjørne.
3. Klik under rektanglet for målelinjen.
4. Ledeteksten viser `Dimension text <d1=100>`. Skriv `width=120` og tryk {{key:Enter}}.

   Rektanglet er nu 120 bredt, og teksten viser `width=120`.
5. Skriv `DCVERTICAL` og tryk {{key:Enter}}, skriv `O` og tryk {{key:Enter}}, og klik derefter på højre side.
6. Klik til højre for den, skriv `width/2` og tryk {{key:Enter}}.

   Den er 60 høj. Teksten viser `fx: d1=width/2`: et udtryk styrer den.

Historikken siger nu, at konturen er fuldt begrænset. For at ændre dens størrelse, ændr `width` (se [Brug parametre og ligninger](topic:parameters)), eller dobbeltklik på `width=120`-teksten, skriv en ny værdi og vælg {{ui:Anvend}}.

## Flyt begrænsede objekter

Flyt, roter, skalér, greb og panelet {{ui:Egenskaber}} bevarer alle begrænsningerne: det du flytter, holdes, og resten følger med. Når begrænsningerne ikke kan følge med, udføres redigeringen ikke, og historikken forklarer hvorfor, for eksempel »Ikke udført: begrænsningerne holder det objekt, hvor det er«. Sletning af et objekt fjerner dets begrænsninger med det.

## Spejl og beskær begrænsede objekter

- {{cmd:MIRROR}} kopierer begrænsningerne mellem de objekter, du spejler, over på kopierne. Sider (hvilken vej en tangent berører, hvilken side en afstand måles til) beregnes igen for den spejlede kopi, og kopierede målsætninger får egne navne, ligesom ved indsæt. Med `Erase source objects` `Y` bliver begrænsningerne på de spejlede objekter. Historikken siger, hvor mange der fulgte med.
- {{cmd:TRIM}} bevarer en linjes eller en buens begrænsninger på det, der er tilbage: en begrænsning på et endepunkt går til stykket, der stadig har det endepunkt, en regel om retning ({{ui:Vandret}}, {{ui:Lodret}}, {{ui:Parallel}}, {{ui:Vinkelret}}) gælder på alle stykker, og en målsætning mellem de to yderste endepunkter bliver ved med at måle dem. Begrænsninger, der holdt den del, der blev skåret væk, eller en længde som beskæringen ændrede ({{ui:Lig med}}, en buens vinkelspænd), fjernes. En beskåret cirkel bevarer sine centrum- og radiusbegrænsninger. Beskårne polylinjer mister deres.

## Begrænsningerne

| Kommando | Bevarer |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | en linje eller et segment vandret eller lodret (`2P`: to punkter vandrette eller lodrette) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | to linjer parallelle, vinkelrette eller på én linje |
| {{cmd:GCCOINCIDENT}} | to punkter sammen; `O`: et punkt på en linje, cirkel eller bue |
| {{cmd:GCTANGENT}} | en linje og en cirkel eller bue, eller to af dem, der berører hinanden |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | to cirkler eller buer med ét centrum; to længder eller to radier lige store |
| {{cmd:GCSYMMETRIC}} | to punkter, linjer eller cirkler spejlet over en linje |
| {{cmd:GCFIX}} | et punkt (klik tæt på det) eller et helt objekt (`O`) hvor det er |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | en afstand |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | en radius, en diameter, en vinkel mellem to linjer eller en buens vinkel |

{{cmd:GEOMCONSTRAINT}} og {{cmd:DIMCONSTRAINT}} spørger, hvilken der ønskes; {{ui:Begræns}} og {{ui:Målsætning}} i gruppen {{ui:Parametrisk}} kører dem, og {{ui:Mere}} viser hver enkelt. Hvor du klikker, vælger delen: et klik tæt på et endepunkt, midten eller et centrum tager det punkt; et klik på en polylinje tager segmentet under det. Det første objekt bliver, og det andet flytter sig for at mødes med det.

En begrænsning, der er i konflikt med andre, eller som ikke tilføjer noget, fordi de andre allerede indebærer den, afvises med en besked, og intet flyttes.

## Se, vælg og fjern

- Klik på et felt i en begrænsningslinje (eller et sammenfaldende kvadrat, eller en målsætningstekst) for at vælge den begrænsning; historikken navngiver den. Tryk {{key:Delete}} for at fjerne den.
- {{cmd:DELCONSTRAINT}} fjerner alle begrænsninger fra de objekter, du vælger.
- {{cmd:CONSTRAINTBAR}}: `S` viser alle linjer, `H` skjuler dem; vælg objekter først for at vise eller skjule deres. {{ui:Mere}} har {{ui:Vis begrænsningslinjer}} og {{ui:Skjul begrænsningslinjer}}.
- {{cmd:DCDISPLAY}} viser eller skjuler de dimensionelle begrænsninger. De plottes aldrig.
- {{cmd:DCCONVERT}} gør målsætninger tegnet på linjer, cirkler og buer til dimensionelle begrænsninger.

:::note
Hvis du har brugt AutoCADs parametriske tegning, er kommandonavnene og ledeteksterne de samme. Begrænsninger og parametre gemmes i DWG- og DXF-filer i en form, som andre programmer ignorerer; se [Filer](topic:files#constraints-in-files).
:::
