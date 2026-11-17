---
title: Kortlag under tegningen
summary: Vis vejkort, flyfotos eller et billede med en verdensfil under modelrummet, placeret efter tegningens koordinatsystem.
keywords: kort, kortlag, maplayers, ml, geomap, baggrundskort, flyfoto, satellit, fliser, xyz, wms, wmts, kortservice, verdensfil, koordinatsystem, epsg, state plane, utm, georeferencering, situationsplan, geolokation, geografisk placering, geodata, gemt, dwg, dxf
from: f103045f
---

## Hvad du skal lave

En situationsplan tegnet over et flyfoto eller et vejkort, hver på det rigtige sted.

## Fortæl CadCraft, hvor tegningen er

1. Angiv tegningens enheder i {{ui:Properties}} › {{ui:Units}} (for eksempel fod eller meter).
2. Skriv {{cmd:MAPLAYERS}} (eller `ML`) og tryk på {{key:Enter}}.
3. Under {{ui:Where the drawing is}} skriver du et navn eller en EPSG-kode i {{ui:Find a system}} (for eksempel `2277` eller `Texas Central`) og vælger det i {{ui:System}}.
4. Hvis tegningen er tegnet i det systems egne koordinater, lader du placeringen stå på 0. Hvis ikke, angiver du ét punkt i tegningen ({{ui:Drawing X}}, {{ui:Drawing Y}}), hvor det punkt ligger på kortnettet ({{ui:Easting}}, {{ui:Northing}}), og hvor langt tegningen er drejet fra øst ({{ui:Turned (°)}}).
5. Klik på {{ui:Use this system}}.

## Tilføj et lag

1. Slå {{ui:Map layers from the internet}} til øverst i dialogen. Indtil da spørges ingen server om noget; når det er slået til, ser de servere, du tilføjer, området på skærmen og din internetadresse, aldrig din tegning.
2. Under {{ui:Add a layer}} vælger du, hvor det kommer fra:
   - **Fliser (XYZ)**: en flisadresse med `{z}`, `{x}` og `{y}`, et navn og den kredit, udbyderen kræver.
   - **WMS**, **WMTS** eller **ArcGIS**: tjenestens adresse, derefter {{ui:Get layers}} og vælg ét.
   - **Et billede**: en PNG- eller JPEG-fil med sin verdensfil (og sin `.prj`, hvis der er en).
3. Laget vises under tegningen. Dets kredit vises nederst til højre i tegningen.

Hvert lag på listen kan skjules, gøres mere eller mindre gennemsigtigt, flyttes op eller ned, eller fjernes.

Hver ændring af systemet eller lagene er ét trin i {{cmd:UNDO}}.

## Gemt med tegningen

Koordinatsystemet og listen over kortlag gemmes i tegningen, når du gemmer den som DWG eller DXF, og kommer tilbage, når du åbner den igen, på enhver computer. Billeder fra filer gemmes ikke: tilføj dem igen efter åbning. Kontakten {{ui:Map layers from the internet}} gemmes ikke i tegningen: den hører til denne browser, så en tegning, nogen sender dig, spørger ingen server om noget, før du selv slår den til.

Det andre programmer ser:

| Gemt som | Tegningens placering | Kortlagene |
|---|---|---|
| DWG 2010, 2013 eller 2018, DXF 2000 | Skrevet på den standardmåde, programmer læser en tegnings geografiske placering: systemets EPSG-kode, ét tegningspunkt og hvor det ligger på kortnettet, enhederne og nord. | Kun CadCraft |
| DWG 2000, 2004 eller 2007, DXF R12 | Kun CadCraft (CadCraft siger det, når du gemmer) | Kun CadCraft |

- **Kontrolleret:** ODA File Converter læser placeringen uden fejl, og et DXF-bibliotek (ezdxf) læser EPSG-koden og placeringen præcist.
- **Ikke kontrolleret endnu:** om andre tegneprogrammer genkender systemet ud fra dets EPSG-kode. Et program, der har sin egen liste over systemer under andre navne, kan vise tegningen uden placering.
- Andre programmer viser en blok ved navn `CADCRAFT_GEO` i blokListen. Det er CadCrafts egen kopi af systemet og lagene; den placeres aldrig i tegningen. Lad den blive der.

## Tegninger fra andre programmer

Når en tegning fra et andet program har en geografisk placering, læser CadCraft den:

- Hvis den navngiver en EPSG-kode, viser {{ui:Where the drawing is}} det system, og kortlagene placeres efter det.
- Hvis CadCraft ikke kender systemet (et andet programs eget navn for det, et lokalt net eller en skalafaktor), bruges placeringen ikke, men den bevares og gemmes tilbage, som den var, så det andet program stadig finder den. Vælg et system under {{ui:Where the drawing is}} for at erstatte den.

:::note
Kortlag tegnes kun på skærmen: de bliver ikke plottet. Brug kun kortservices, hvis vilkår tillader det, og hold deres kredit synlig.
:::
