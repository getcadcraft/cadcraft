---
title: Tilføj tekst og etiketter
summary: Placér rumetiketter med enkeltlinjetekst, skriv noter med ombrydning med afsnitstekst skrevet direkte i tegningen, og redigér tekst bagefter.
keywords: tekst, dtext, mtext, mleader, multileader, henvisning, revcloud, revisionssky, sky, find, erstat, find og erstat, afsnit, ombryd, linjeafstand, etiket, note, notering, højde, justér, textmask, baggrundsmaske, maske, afdækning, rotation, redigér tekst, ddedit, textedit, skrifttype
from: 4b76be99
---

## Hvad du laver

To rumetiketter, centreret i deres rum, en note der brydes til sin bredde, og derefter en rettelse af en af etiketterne.

## Teksthøjde og tegningsskala

Teksthøjde angives i tegningsenheder. I en tegning i millimeter, der skal plottes i 1:50, skal tekst, der er 2.5 mm høj på papiret, være 2.5 × 50 = 125 enheder høj i modellen. På en arkfane tegner du i papirenheder, så 2.5 dér er 2.5 mm på papiret.

## Placér en centreret etiket

1. Skriv `DT` og tryk {{key:Enter}} (eller klik på {{ui:Tekst}} i værktøjslinjen). Prompten lyder `Specify start point of text [Justify]:`.
2. Skriv `J` og tryk {{key:Enter}}.
3. Ved `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` skriv `MC` og tryk {{key:Enter}}.
4. Ved `Specify insertion point of text` klik midt i et rum.
5. Ved `Specify height` skriv `250` og tryk {{key:Enter}}.
6. Ved `Specify rotation angle of text <0>` tryk {{key:Enter}}.
7. Ved `Enter text` skriv `KITCHEN` og tryk {{key:Enter}}.

Etiketten vises, centreret på det punkt, du klikkede på.

8. Tryk {{key:Enter}} ved den tomme `Enter text`-prompt for at afslutte kommandoen.

## Skriv en note, der brydes

Afsnitstekst ({{cmd:MTEXT}}) brydes til en bredde og skrives direkte på tegningen.

1. Skriv `T` og tryk {{key:Enter}}, eller klik på {{ui:Afsnit}} i værktøjslinjen.
2. Ved `Specify first corner` klik, hvor notens øverste venstre hjørne skal være.
3. Hvis du vil ændre højden først, skriv `H`, tryk {{key:Enter}}, skriv `250` og tryk {{key:Enter}}.
4. Ved `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` klik til højre for det første hjørne. Afstanden på tværs er den bredde, teksten brydes ved; hvor langt ned du klikker, begrænser den ikke.
5. Der åbnes en boks over tegningen, med markøren i. Skriv `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Ordene brydes ved bredden, mens du skriver.
6. Tryk {{key:Enter}} for at starte et nyt afsnit, og skriv `CHECK ON SITE`.
7. Tryk {{key:Mod+Enter}}, klik {{ui:OK}}, eller klik et hvilket som helst sted uden for boksen. Noten er ét objekt.

Linjen over boksen ændrer {{ui:Højde}}, {{ui:Linjeafstand}} (1 er normal, 1.5 er halvt så meget igen), {{ui:Bredde}} (0 = ingen ombrydning) og {{ui:Justér}}, mens du skriver. {{key:Esc}} eller {{ui:Annuller}} lukker den uden at tilføje noget.

Valgmulighederne ved det andet hjørne: `H` højde, `J` justering (`TL` øverst venstre … `BR` nederst højre: hjørnet eller midten af boksen, der bliver stående), `L` linjeafstand, `R` rotation, `W` en skrevet bredde i stedet for det andet hjørne.

:::note
Mens boksen er åben, skriver {{key:Space}} et mellemrum, og {{key:Enter}} starter et nyt afsnit. En gemt DWG bevarer afsnitstekst som MTEXT; en DXF R12 har ingen afsnitstekst, så hver linje gemmes som sin egen tekst.
:::

### Flere enkeltlinjer i stedet

{{cmd:TEXT}} (`DT`) beder om én linje ad gangen: hvert {{key:Enter}} starter næste linje, 1.667 gange teksthøjden lavere, og hver linje er sit eget objekt. Tryk {{key:Enter}} på en tom linje for at afslutte.

## Justeringsmuligheder

| Mulighed | Punktet, du klikker på, er |
|---|---|
| Venstre (standard) | Den venstre ende af grundlinjen |
| Centrum | Midten af grundlinjen |
| Højre | Den højre ende af grundlinjen |
| Midte, MC | Midten af teksten, både vandret og lodret |
| TL | Det øverste venstre hjørne |

## Redigér tekst

1. Dobbeltklik på et tekstobjekt. Det åbnes i samme boks som ny afsnitstekst, med markøren til sidst.
2. Ændr ordene.
3. Tryk {{key:Mod+Enter}} eller klik uden for boksen. Teksten på tegningen ændres; {{key:Esc}} lader den være, som den var.

{{cmd:TEXTEDIT}} (`ED`) gør det samme: vælg den ene tekst efter den anden, og tryk {{key:Enter}}, når du er færdig.

Vælg en tekst for i stedet at ændre den i det højre panel: {{ui:Tekst}}, {{ui:Højde}}, {{ui:Ombrydningsbredde}} (0 = ingen ombrydning), {{ui:Linjeafstand}}, {{ui:Rotation}}, X- og Y-positionen og {{ui:Justér}}. Listen {{ui:Justér}} tilbyder også Nederst venstre, som tekst fra andre programmer nogle gange bruger.

## Formatering i afsnitstekst fra andre programmer

Afsnitstekst i en DWG eller DXF kan indeholde koder: farver pr. ord, fed og kursiv, understregning, overstregning og gennemstregning, stablede brøker som 1/2 og en anden højde for et ord. CadCraft bevarer disse koder, tegner dem (på skærmen og i en plottet PDF) og gemmer dem tilbage uændret.

Når du redigerer en sådan tekst (dobbeltklik, {{cmd:TEXTEDIT}}, feltet Tekst i det højre panel, eller {{cmd:FIND}} med Erstat), redigerer du dens almindelige ord. Et ord, du skriver, går ind i det løb, der ligger ved siden af, og får dets farve og stil; de øvrige koder bliver, hvor de er. Hvis du skriver en stablet brøks tal om, bliver brøken almindelig tekst. Når hele teksten sættes fra feltet Tekst, bevares koderne kun der, hvor programmet kan se, hvilke ord der er uændrede.

Skriftnavne (`\F`) bevares og gemmes, men alt tegnes i den ene Helvetica-lignende skrifttype. Der findes endnu ingen værktøjslinje til at skrive koder.

## Peg på noget: flere henvisningslinjer

{{ui:Henvisning}} i gruppen {{ui:Notér}} ({{cmd:MLEADER}}, `MLD`) tegner en pil, en henvisningslinje, et kort landingsstykke og en note som ét objekt.

1. Klik på {{ui:Henvisning}}. Ved `Specify leader arrowhead location` klik på det, noten handler om.
2. Ved `Specify leader landing location` klik, hvor noten skal være. Landingsstykket drejer mod den side, du klikkede på.
3. Skriv noten i boksen, der åbnes, og tryk {{key:Mod+Enter}}.

`A` og `L` ved det første spørgsmål sætter pilespidsens størrelse og landingsstykkets længde; teksthøjden kommer fra {{ui:Teksthøjde}} for nye målsætninger, ganget med {{ui:Samlet skala}}. Dobbeltklik på en flere henvisningslinje for at ændre dens ord. Greb flytter pilespidsen og landingsstykket; noten følger landingsstykket. I {{ui:Egenskaber}}: {{ui:Tekst}}, {{ui:Højde}}, {{ui:Ombrydningsbredde}}, {{ui:Pilespidsstørrelse}} og {{ui:Afstand til henvisningsfod}}.

:::note
Flere henvisningslinjer gemmes som rigtige flere henvisningslinjer i DWG. DXF har ingen flere henvisningslinjer i R12 eller 2000, så der gemmes de linjer, pilespids og tekst, de tegner.
:::

## Markér ændringer med en revisionssky

{{ui:Notér}} › {{ui:Mere}} › {{ui:Revisionssky}} ({{cmd:REVCLOUD}}, `RC`) tegner en sky af buer rundt om det, der er ændret. Historikken viser buelængden og den type, den vil bruge.

- **Rektangulær** (første gang): klik to hjørner.
- `P` **Polygonal**: klik hjørnerne; {{key:Enter}} lukker skyen.
- `F` **Frihånd**: klik, hvor den starter, og flyt markøren rundt om området uden at klikke; en bue tilføjes for hver buelængde. Klik eller tryk {{key:Enter}} for at lukke den.
- `O` **Objekt**: vælg en lukket polylinje, cirkel eller ellipse (eller en linje, bue eller åben polylinje); den bliver til skyen. `Reverse direction?` `Y` vender buerne indad.
- `A` **Buelængde**: længden på hver bue. Vælg en, der passer til plotskalaen.

Skyen er en lukket polylinje af buer, så den gemmes i alle formater.

## Find og erstat ord

{{ui:Redigér}} › {{ui:Mere}} › {{ui:Find og erstat}} ({{cmd:FIND}}) søger i tekst, værdier af blokattributter og målsætningstekst på den åbne fane (eller kun i de valgte objekter).

1. Skriv ordene i {{ui:Find}}. Listen viser hvert sted, de findes, og antallet.
2. Vælg {{ui:Forskel på store og små bogstaver}}, {{ui:Kun hele ord}} eller {{ui:Brug jokertegn (* og ?)}}, hvis du har brug for dem, og fjern markeringen i det, der ikke skal søges i.
3. Klik på {{ui:Vælg det fundne}} for at vælge objekterne, eller skriv de nye ord i {{ui:Erstat med}} (listen viser, hvad hver bliver til), og klik på {{ui:Erstat alle}}. Ét {{key:Mod+Z}} fortryder alle erstatningerne.

En målsætnings målte værdi er ikke tekst, så den erstattes aldrig: i `<> TYP.` kan kun `TYP.` ændres.

## Skjul linjerne bag en etiket

1. Vælg teksterne, skriv {{cmd:TEXTMASK}} og tryk {{key:Enter}}.
2. `B` maler tegningens baggrund bag dem; `C` spørger efter et farvenummer. `O` fjerner masken.
3. `Border offset factor`: {{key:Enter}} beholder 1.5, en halv teksthøjde rundt om teksten.

Masken dækker linjer under teksten, på skærmen og når du plotter. DWG 2004 eller nyere og DXF 2000 bevarer den; DWG-formatet 2000 og DXF R12 kan ikke, og gemningen siger det.

## Skrifttype

Al tekst tegnes i en Helvetica-lignende skrifttype, på skærmen og i PDF'er. Tekst fra åbnede tegninger bevarer sine ord, højde og position, men ikke sin oprindelige skrifttype (navnet på en skrifttype i afsnitstekst gemmes i filen, se ovenfor).

I plottede PDF'er udskrives tekst på europæisk skrift, kyrillisk eller græsk, som sig selv (PDF'en indeholder de bogstaver, den har brug for, og du kan stadig markere og søge i teksten). Kinesisk, japansk og koreansk tekst udskrives også som sig selv (plottet henter en større skrifttype første gang, den er nødvendig). Arabisk, persisk, urdu og hebraisk tekst udskrives også som sig selv (se næste afsnit). Tegn, som ingen skrifttype har et bogstav til, udskrives som »?«, og historikken siger, hvor mange der var.

## Højre-til-venstre-tekst: arabisk, persisk, urdu, hebraisk

Skriv teksten, som du ellers ville: {{cmd:TEXT}} og {{cmd:MTEXT}} tegner hver linje i læserækkefølge. En linje, hvis første bogstav er arabisk eller hebraisk, læses fra højre mod venstre; tal og latinske ord inde i den beholder deres egen rækkefølge fra venstre mod højre, og arabiske bogstaver sammenkædes. En linje, der starter med et latinsk bogstav, forbliver fra venstre mod højre, med de højre-til-venstre-ord på plads inde i den. Hvert afsnit i en tekst med flere linjer har sin egen retning, og et ombrudt afsnit beholder den på hver linje.

Teksten gemmes, som du skrev den, så DWG- og DXF-filer udveksler den med andre programmer uændret. Indsætningspunktet og justeringen ({{ui:Venstre}}, {{ui:Centrum}}, {{ui:Højre}}) betyder den samme side som for al anden tekst; en højre-til-venstre-note, der skal hænge fra sin højre ende, skal bruge {{ui:Højre}}.

På skærmen kommer bogstaverne fra dit systems skrifttyper. I en plottet PDF bruger hebraisk den samme indlejrede skrifttype som latinsk tekst; arabisk tekst får plottet til at hente endnu en skrifttype (under 1 MB, én gang), og hele PDF'en udskrives derefter i den skrifttype. Den skrifttype har ingen egen form for tre urdu-tegn (heh goal, yeh barree og Urdu full stop): de udskrives i formen af det nærmeste arabiske bogstav. En tegning, der har både arabisk og kinesisk, japansk eller koreansk tekst, udskriver den ene af dem som »?«, fordi et plot kun bærer én skrifttype. Tekst i en indlæst SHX-skrifttype ordnes og sammenkædes, når skrifttypen har bogstaverne på deres Unicode-pladser; for gamle skrifttyper, hvis bogstaver allerede er formet, brug {{ui:Vend om}} i {{cmd:SHXFONTS}}, som før.

## Almindelige fejl

- **Teksten er for lille til at ses.** Højden angives i tegningsenheder. I en stor tegning, brug en stor højde (se ovenfor), eller zoom ind.
- **Kommandoen sluttede efter én linje.** Du trykkede {{key:Enter}} på en tom linje i {{cmd:TEXT}}. Start den igen, eller brug afsnitstekst (`T`), hvor {{key:Enter}} starter et nyt afsnit.
- **`T` åbnede en boks i stedet for at spørge om en linje.** Som i AutoCAD er `T` afsnitstekst ({{cmd:MTEXT}}); enkeltlinjetekst er `DT`.
- **Teksten brydes et andet sted end i AutoCAD.** CadCraft bryder med Helvetica-bredder; en anden skrifttype kan få et ord til at passe lidt mere eller mindre på en linje.
- **Tekst i en spejlvendt kopi.** Den placeres spejlvendt, men forbliver læsbar fra venstre mod højre.
