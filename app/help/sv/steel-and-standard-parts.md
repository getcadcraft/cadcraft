---
title: Placera stålprofiler och standarddelar
summary: Rita stålprofiler, höjder och 3D-element från publicerade profiltabeller, placera bultar, muttrar, brickor, stift, lager, kilar och kugghjul efter deras standarder, och lista dem i en styckelista.
keywords: stål, profil, sektion, form, W-profil, bredflänsad, I-balk, U-profil, vinkelstål, hss, rör, pipe, ipe, hea, heb, upn, balk, pelare, element, höjd, aisc, en 10365, bult, skruv, mutter, bricka, stift, dorn, lager, kil, kilspår, kugghjul, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standarddelar, styckelista, materialförteckning, bom, steelmember, partslist
from: 547c1048
---

Bibliotekets flik {{ui:Standard}} har två slags saker, gjorda här direkt från publicerade tabeller (inget laddas ner):

- **Stålprofiler**: 1 335 storlekar. W, S, C, L, HSS och Pipe från AISC Shapes Database v16.0; IPE, HEA, HEB och UPN från EN 10365:2017. DetailCraft använder samma tabell.
- **Standarddelar**: sexkantsskruvar (ISO 4017), sexkantsbultar (ISO 4014), sexkantsmuttrar (ISO 4032), vanliga brickor (ISO 7089), tum-sexkantsbultar och -muttrar (ASME B18.2.1 och B18.2.2), parallella stift (ISO 2338), djupa spårkullager (ISO 15), parallella kilar (DIN 6885-1) och rakkugghjul (moduler från ISO 54).

Allt här delas under CC0: använd det till vad som helst, utan krav på källangivelse.

## Placera en stålprofil

1. Öppna biblioteket ({{ui:Bibliotek}} i gruppen Block, eller skriv `LIB`) och klicka på fliken {{ui:Standard}}.
2. Välj familjen i den första listan, till exempel {{ui:W-profiler}}. Skriv i sökrutan för att begränsa storlekarna: `W12` visar alla W12.
3. Under {{ui:Placera som}} väljer du:
   - {{ui:Sektion}}: tvärsnittet, med dess centrum vid infogningspunkten.
   - {{ui:Höjd}}: elementet sett från sidan, så långt som {{ui:Längd (mm)}} anger, från mitten av dess vänstra ände.
   - {{ui:3D-element}}: en solid på 3D-fliken (nedan).
4. Klicka på {{ui:Placera}} på storlekens kort och klicka sedan där den ska stå, som för alla biblioteksobjekt.

En sektion eller höjd blir ett block. Dess attribut bär storleken, tabellen den kommer från, längden (för en höjd) och ett material du kan fylla i.

:::note
S-profiler, kanaler och UPN ritas med parallella fläns med medeltjocklek, och vinkelstål med raka hörn: de verkliga flänsarna är sneda och hörnen rundade. W, IPE, HEA och HEB har sina rotavrundningar, och HSS sina hörnradier.
:::

## Gör ett 3D-element

Välj {{ui:3D-element}} och klicka på {{ui:Placera}}, eller skriv {{cmd:STEELMEMBER}} (`SMEMBER`) på kommandoraden:

1. Vid `Profilstorlek`, tryck {{key:Enter}} för storleken som visas, eller skriv en, till exempel `HSS6x6x1/4` eller `IPE300`.
2. Klicka på startpunkten, sedan på slutpunkten. Elementet går mellan dem och står på marken.
3. För en pelare skriver du `C`, klickar på dess basspunkt och skriver dess höjd.

Elementet är en sluten solid på 3D-fliken. Flytta eller kopiera det där som vilken solid som helst. {{key:Mod+Z}} tar bort det igen.

## Placera en standarddel

1. På fliken {{ui:Standard}} väljer du familjen, till exempel {{ui:Sexkantsskruvar}}.
2. För en skruv, bult, stift eller kil skriver du dess {{ui:Längd (mm)}} (tum för tumfamiljerna). För ett kugghjul skriver du {{ui:Tänder}}, {{ui:Tandbredd (mm)}} och {{ui:Håldiameter (mm)}}. Lämna en ruta tom för det vanliga värdet som visas i den.
3. Klicka på {{ui:Placera}} på storleken och klicka där den ska stå.

Skruvar, bultar och stift ritas från sidan, med anliggningsytan under huvudet vid infogningspunkten; muttrar, brickor, lager och kugghjul ritas vända mot betraktaren; kilar uppifrån. Gängor ritas på vanligt sätt: roten som en tunn linje, gängans ände som en tjock. Kugghjul ritas som sin spetscirkel, delningscirkel och rotcirkel, inte tand för tand.

Varje delblocks attribut bär dess typ, standard, storlek, längd och material, och dess vikt från den nominella formen i stål. Ändra materialet i panelen {{ui:Egenskaper}}.

Samma delar finns i biblioteket även som objekt, och PartCraft öppnar dem som parametriska delar ({{ui:Standarddel}} i dess grupp Fil).

## Gör en styckelista

- I biblioteket klickar du på {{ui:Styckelista}}: varje standarddel och stålprofil i ritningen, grupperad efter typ, standard, storlek, längd och material, med antal och positionsnummer. {{ui:Ladda ner CSV}} sparar den för ett kalkylblad.
- För att rita den skriver du {{cmd:PARTSLIST}} (`PLIST`), klickar på tabellens övre vänstra hörn och trycker {{key:Enter}} för den vanliga texthöjden, eller skriver en.

Listan läses från blockens attribut, så den är fortfarande rätt efter att ritningen sparats som DWG eller DXF och öppnats igen.

## Vanliga misstag

- **”Ingen stålprofil heter …”**: skriv storleken så som fliken {{ui:Standard}} listar den: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Elementet finns på 3D-fliken, inte i planen.** {{cmd:STEELMEMBER}} gör en solid; öppna 3D-fliken för att se den. För att visa stålet i planen, placera även en {{ui:Sektion}} eller {{ui:Höjd}}.
- **En längd utanför intervallet.** En bult måste vara längre än sitt huvud, och en kil längre än den är bred. Raden under korten säger vilket värde som avvisades.
