---
title: CadCraft-skærmen
summary: En rundvisning i hver linje, hvert panel og hver fane i tegneappen ved det navn, den har på skærmen.
keywords: skærm, brugerflade, værktøjslinje, bånd, paneler, kommandolinje, statuslinje, faner, layoutfaner, egenskaber, lagpanel, rundvisning
from: b5a33388
---

Skærmen har syv dele. Oppefra og ned: appfeltet, værktøjslinjen, tegneområdet med et panel på hver side, fanerne under tegningen, kommandolinjen og statuslinjen.

## Appfeltet

Den tynde linje helt øverst hører til webstedet, ikke til tegningen. Den viser CadCraft-mærket, appens navn, hvilken version du kører, et link til appens side, en knap {{ui:Hjælp}} (eller {{key:F1}}), en knap {{ui:Gem til offline brug}}, en knap {{ui:Fuld skærm}} og to temaknapper, {{ui:Papir}} og {{ui:Model}}.

Knappen {{ui:Indstillinger}} (tandhjulet) rummer CadCrafts egne indstillinger og dem, alle apps deler: se [CadCrafts indstillinger](topic:settings).

{{ui:Gem til offline brug}} beholder en kopi af CadCraft, med dens DWG-læser, i denne browser, så den åbnes uden forbindelse. Dens tekst viser tilstanden: "Saving N of M", "Offline ready", "Could not save" eller "Offline not available". Se [Arbejd offline](common:offline).

:::note
Knapperne {{ui:Papir}} og {{ui:Model}} i appfeltet ændrer kun skærmens farver: {{ui:Papir}} er et lyst tema, {{ui:Model}} et mørkt. De har intet at gøre med fanen {{ui:Model}} under tegningen, som skifter mellem tegningen og dens ark.
:::

Knappen {{ui:Fuld skærm}}, eller {{key:Ctrl+Shift+F}} (Control-tasten på alle computere, også Mac), skifter mellem tre skærmtilstande: normal, fuld skærm og fuld skærm med skjulte linjer. Med skjulte linjer fører du markøren til skærmens øverste kant for at få dem tilbage.

## Værktøjslinjen

Under appfeltet er værktøjslinjen. Hver knap kører en kommando, præcis som havde du skrevet den, så kommandolinjen stiller de samme spørgsmål begge veje. Hold markøren over en knap for at se dens kommandoalias. Grupperne er:

| Gruppe | Knapper |
|---|---|
| Fil | {{ui:Ny}}, {{ui:Åbn}}, {{ui:Gem}}, {{ui:Gem som}}, {{ui:Plot}} |
| Tegn | {{ui:Linje}}, {{ui:Polylinje}}, {{ui:Cirkel}}, {{ui:Bue}}, {{ui:Rektangel}}, {{ui:Polygon}}, {{ui:Ellipse}}, {{ui:Tekst}}, {{ui:Afsnit}}, {{ui:Skravering}} og {{ui:Mere}}: {{ui:Punkt}}, {{ui:Konstruktionslinje}} og {{ui:Stråle}} (se [Konstruktionslinjer og stråler](topic:construction-lines)) |
| Rediger | {{ui:Flyt}}, {{ui:Kopiér}}, {{ui:Roter}}, {{ui:Skalér}}, {{ui:Spejl}}, {{ui:Stræk}}, {{ui:Forskyd}}, {{ui:Beskær}}, {{ui:Forlæng}}, {{ui:Afrund}}, {{ui:Affas}}, {{ui:Eksplodér}}, {{ui:Slet}} og {{ui:Mere}}: {{ui:Array}}, {{ui:Sammenføj}}, {{ui:Match egenskaber}}, {{ui:Bryd}} og {{ui:Forlæng længde}} |
| Notér | {{ui:Lineær}}, {{ui:Justeret}}, {{ui:Vinkel}}, {{ui:Radius}}, {{ui:Diameter}} (målsætninger), {{ui:Henvisning}} (flere henvisningslinjer) og {{ui:Mere}}: {{ui:Fortsat målsætning}}, {{ui:Basislinjemålsætning}} og {{ui:Revisionssky}} |
| Parametrisk | {{ui:Auto}}, {{ui:Begræns}}, {{ui:Målsætning}}, {{ui:Parametre}} og {{ui:Mere}} med hver begrænsning (se [Begræns en tegning](topic:constraints)) |
| Blokke | {{ui:Lav}}, {{ui:Indsæt}}, {{ui:Bibliotek}} og {{ui:Mere}}: {{ui:Redigér blok}} og {{ui:Definér attribut}} |
| Ark | {{ui:Nyt ark}}, {{ui:Viewport}} |
| Redigér | {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}} (til udklipsholderen), {{ui:Sæt ind}} og {{ui:Mere}}: en menu med {{ui:Klip}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Sæt ind på samme sted}}, {{ui:Duplikér og flyt}}, {{ui:Slet}}, {{ui:Vælg alle}}, {{ui:Fravælg alle}}, {{ui:Hurtigvalg}}, {{ui:Vælg lignende}} og {{ui:Find og erstat}}, hver med sin tast |
| Visning | {{ui:Udstrækning}}, {{ui:Vindue}}, {{ui:Forrige}} og {{ui:Mere}}: {{ui:Mål afstand}}, {{ui:Areal}}, {{ui:Mål (radius, vinkel …)}} og den delte skærm: {{ui:Del side om side}}, {{ui:Del stablet}}, {{ui:Fire ruder}}, {{ui:Én rude}} (se [Del skærmen](topic:split-screen)), og {{ui:Drej visningen 90° til venstre}}, {{ui:Drej visningen 90° til højre}}, {{ui:Tilbage til verden}} (se [Drej visningen](topic:ucs-and-turned-view)) |

{{ui:Kopiér}} i gruppen {{ui:Rediger}} er kommandoen {{cmd:COPY}} (basispunkt, derefter hvor hver kopi skal hen); {{ui:Kopiér}} i gruppen {{ui:Redigér}} lægger objekter på udklipsholderen til {{ui:Sæt ind}}. Se [Kopiér, sæt ind og duplikér](topic:copy-paste). Knappen for den kommando, der kører, forbliver fremhævet, til kommandoen slutter. Værktøjstips nævner Windows-genvejene ("Ctrl+O"); på en Mac virker {{key:Mod+O}} også.

I et lavt vindue (for eksempel en bærbar med skærmen skaleret til 125 % eller mere) tager værktøjslinjen aldrig tegningens plads: når tegningen ville få for lidt højde, mister knapperne ordene under ikonerne og gruppenavnene (hold markøren over en knap for dens navn), og hvis det stadig ikke er nok, bliver værktøjslinjen til én række, der ruller sidelæns. Et højere vindue bringer ordene tilbage.

## Panelet til venstre

Panelet til venstre har tre afsnit.

- **{{ui:Lag}}.** Hvert lag i tegningen, med en udfyldt prik ved det aktuelle. Klik på et navn for at gøre det lag aktuelt. Hver række har en farveprøve (klik på den for at vælge en farve) og fire knapper: tændt/slukket (øje), frys (snefnug), lås (hængelås) og plot (printer). {{ui:Nyt lag}} åbner en boks til at tilføje et. Se [Organisér en tegning med lag](topic:layers).
- **{{ui:Blokke}}.** De blokke, der er defineret i tegningen, hvor mange gange hver bruges, og en knap {{ui:Indsæt}} for hver. Se [Lav og indsæt blokke](topic:blocks).
- **{{ui:Tegning}}.** Fakta om den åbne fil: navn (med "(changed)" når der er ugemte ændringer), format, størrelse, enheder, antal objekter, lag, blokke og ark. Når du har åbnet en fil, viser en boks "Om denne fil" alt, CadCraft ikke kunne vise eller måtte konvertere.

## Tegneområdet

Midten af skærmen er tegningen. Markøren er et trådkors. Når CadCraft vil have et punkt, viser en lille markør og en etiket ("Endepunkt", "Midtpunkt"), hvor et objektfang lander. Når den vil have objekter, har trådkorset en udvælgelsesboks, og objekter under den lyser op.

Når tegningen er tom, viser et kort "Begynd at tegne" nogle første kommandoer. Det forsvinder, så snart du kører en kommando eller åbner en fil. Du kan slippe en DWG- eller DXF-fil hvor som helst på dette område for at åbne den.

## Fanerne under tegningen

Under tegningen er fanerne: {{ui:Model}} først, derefter {{ui:3D}}, derefter én fane pr. ark (layout) og så en knap {{ui:+}}.

- {{ui:Model}} er selve tegningen, i fuld størrelse, i tegningsenheder.
- {{ui:3D}} viser tegningen liggende på jorden og de massive legemer, der er lavet ud fra den. Mens den vises, har værktøjslinjen en gruppe {{ui:3D}} i stedet for tegnegrupperne. Se [Model i 3D](topic:3d-solids).
- Hver arkfane er et ark papir med et tegningshoved og viewports mod modellen. Det, du tegner dér, er i papirenheder (millimeter eller tommer). Dobbeltklik inde i en viewport for at arbejde på modellen gennem den (se [Arbejd på modellen gennem en viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Et langt arknavn afkortes på sin fane; hold markøren over fanen for hele navnet. Med mange ark viser {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Arkfaner}} › {{ui:Kun arknumre}} blot hvert arks nummer (A-101) på dets fane.
- {{ui:+}} laver et nyt ark med en kant, et tegningshoved og én viewport. Det er det samme som kommandoen {{cmd:LAYOUT}}.
- Dobbeltklik på en arkfane for at omdøbe den. Med en fane i fokus flytter {{key:Left}} og {{key:Right}} mellem faner.

Hver fane beholder sin egen zoom og panorering. Se [Sæt et ark op](topic:sheets-and-viewports).

## Panelet til højre: Egenskaber

Panelet til højre ændrer sig med det, der er markeret.

- **Intet markeret, på fanen {{ui:Model}}:** overskriften lyder {{ui:Aktuelle indstillinger}}. Her angiver du {{ui:Lag}}, {{ui:Farve}} og {{ui:Teksthøjde}} for nye objekter, tegningens {{ui:Enheder}} og størrelserne for nye målsætninger ({{ui:Teksthøjde}}, {{ui:Pilestørrelse}}, {{ui:Decimaler}}, {{ui:Samlet skala}}).
- **Intet markeret, på et ark:** overskriften lyder "Ark:" og arkets navn. Du kan omdøbe arket, ændre dets {{ui:Papir}} og {{ui:Orientering}}, {{ui:Plot dette ark}} eller {{ui:Slet dette ark}}. Indstillingerne for nye objekter følger nedenfor.
- **Ét objekt markeret:** dets type som overskrift (Linje, Cirkel, Tekst, Målsætning, Viewport …), derefter dets lag, farve og geometri. Skriv en ny værdi og tryk på {{key:Enter}} for at ændre den.
- **Flere objekter markeret:** hvor mange, og deres fælles {{ui:Lag}} og {{ui:Farve}}. Hvis du ændrer en af dem, ændres alle. "Varierer" betyder, at de er forskellige.

Se [Redigér med greb og Egenskaber](topic:grips-and-properties).

Under den åbner panelet {{ui:Parametre}}, når du vælger {{ui:Parametre}} eller skriver {{cmd:PARAMETERS}}: hver parameter og målsætningsbegrænsning i én tabel. Se [Brug parametre og ligninger](topic:parameters).

## Kommandolinjen

Nederst er kommandolinjen: historikken over det, du gjorde, og under den prompten.

- Promptens etiket lyder `Kommando:`, når intet kører. Mens en kommando kører, viser den spørgsmålet, dets tilvalg i kantede parenteser og standardværdien i vinkelparenteser, for eksempel `Angiv cirklens radius [Diameter] <500>:`.
- Mens du skriver et kommandonavn, foreslår et hint til højre kommandoer, der passer. Tryk på {{key:Tab}} for at acceptere den første. "Ingen sådan kommando" betyder, at intet passer.
- {{key:Up}} og {{key:Down}} henter linjer frem, du skrev før.
- Historikken beholder de sidste 400 linjer. Beskeder fra kommandoer, målinger fra {{cmd:DIST}} og {{cmd:LIST}} og rapporter om gem og plot vises her.

## Statuslinjen

Den allernederste række er statuslinjen.

- **Koordinater** til venstre: trådkorsets X og Y. Mens en kommando har et basispunkt, viser den også afstanden og vinklen fra det, for eksempel `Δ 1200 < 90°`.
- **Beskeder** i midten, som "Ortho on" eller "Current layer: Walls". De toner ud efter nogle sekunder.
- **{{ui:Gitter}}**, **{{ui:Ortogonal}}**, **{{ui:Polar}}**, **{{ui:Fang}}**, **{{ui:Spor}}**, **{{ui:Dyn}}** og **{{ui:LWT}}** til højre. Hver er en kontakt; en nedtrykt knap er tændt. {{ui:LWT}} viser linjetykkelser på skærmen (se [Linjetykkelser og linjetyper](topic:units-papers-scales#line-weights-and-linetypes)). Den lille pil ved siden af {{ui:Fang}} åbner {{ui:Objektfang}}, hvor du afkrydser, hvilke fang der er aktive. Se [Fang til punkter på objekter](topic:object-snaps).

## Dialogboksen Plot til PDF

{{ui:Plot}} (eller {{key:Mod+P}}) åbner dialogboksen {{ui:Plot til PDF}} med indstillingerne til venstre og et levende eksempel til højre. Se [Plot til PDF](topic:plot-pdf).

## Hjælpen

{{key:F1}} eller knappen {{ui:Hjælp}} åbner denne hjælp som et sidepanel; tegningen kan stadig bruges ved siden af. Den virker uden forbindelse. {{key:F1}} igen, eller {{key:Esc}} i panelet, lukker den. Se [Brug denne hjælp](common:help).
