---
title: Kartlag under tegningen
summary: Vis gatekart, flyfoto eller et bilde med en verdensfil under modellrommet, plassert etter tegningens koordinatsystem.
keywords: kart, kartlag, maplayers, ml, geomap, bakgrunnskart, flyfoto, satellitt, fliser, xyz, wms, wmts, kartjeneste, verdensfil, koordinatsystem, epsg, state plane, utm, georeferering, situasjonsplan, geolokasjon, geografisk plassering, geodata, lagret, dwg, dxf
from: f103045f
---

## Det du lager

En situasjonsplan tegnet over et flyfoto eller et gatekart, hver på riktig sted.

## Fortell CadCraft hvor tegningen er

1. Sett tegningens enheter i {{ui:Egenskaper}} › {{ui:Enheter}} (for eksempel fot eller meter).
2. Skriv {{cmd:MAPLAYERS}} (eller `ML`) og trykk {{key:Enter}}.
3. Under {{ui:Hvor tegningen er}} skriver du et navn eller en EPSG-kode i {{ui:Finn et system}} (for eksempel `2277` eller `Texas Central`) og velger den i {{ui:System}}.
4. Hvis tegningen er tegnet i det systemets egne koordinater, lar du plasseringen stå på 0. Hvis ikke, gir du ett tegningspunkt ({{ui:Tegning X}}, {{ui:Tegning Y}}), der det punktet ligger på kartnettet ({{ui:Øst}}, {{ui:Nord}}), og hvor mye tegningen er {{ui:Dreid (°)}} fra øst.
5. Klikk {{ui:Bruk dette systemet}}.

## Legg til et lag

1. Slå på {{ui:Kartlag fra internett}} øverst i dialogen. Før det spørres ingen server om noe; når det er på, ser serverne du legger til området på skjermen og internettadressen din, aldri tegningen din.
2. Under {{ui:Legg til et lag}} velger du hvor det kommer fra:
   - **Fliser (XYZ)**: en flisadresse med `{z}`, `{x}` og `{y}`, et navn og kildehenvisningen leverandøren krever.
   - **WMS**, **WMTS** eller **ArcGIS**: tjenestens adresse, deretter {{ui:Hent layer}} og velg ett.
   - **Et bilde**: en PNG eller JPEG med sin verdensfil (og sin `.prj` når den finnes).
3. Laget vises under tegningen. Kildehenvisningen vises nederst til høyre i tegningen.

Hvert lag i listen kan skjules, gjøres mer eller mindre gjennomsiktig, flyttes opp eller ned, eller fjernes.

Hver endring av systemet eller layerne er ett steg i {{cmd:UNDO}}.

## Lagret med tegningen

Koordinatsystemet og listen over kartlag lagres i tegningen når du lagrer som DWG eller DXF, og kommer tilbake når du åpner den igjen, på hvilken som helst datamaskin. Bilder fra filer lagres ikke: legg dem til igjen etter åpning. Bryteren {{ui:Kartlag fra internett}} lagres ikke i tegningen: den hører til denne nettleseren, så en tegning noen sender deg, spør ingen server om noe før du selv slår den på.

Det andre programmer ser:

| Lagret som | Tegningens plassering | Kartlagene |
|---|---|---|
| DWG 2010, 2013 eller 2018, DXF 2000 | Skrevet på standardmåten programmer leser en tegnings geografiske plassering: systemets EPSG-kode, ett tegningspunkt og hvor det ligger på kartnettet, enhetene og nord. | Bare CadCraft |
| DWG 2000, 2004 eller 2007, DXF R12 | Bare CadCraft (CadCraft sier fra når du lagrer) | Bare CadCraft |

- **Sjekket:** ODA File Converter leser plasseringen uten feil, og et DXF-bibliotek (ezdxf) leser EPSG-koden og plasseringen nøyaktig.
- **Ikke sjekket ennå:** om andre tegneprogrammer gjenkjenner systemet fra EPSG-koden. Et program som har sin egen liste over systemer under andre navn, kan vise tegningen uten plassering.
- Andre programmer viser en blokk som heter `CADCRAFT_GEO` i blokklisten. Det er CadCraft sin egen kopi av systemet og layerne; den plasseres aldri i tegningen. La den ligge der.

## Tegninger fra andre programmer

Når en tegning fra et annet program har en geografisk plassering, leser CadCraft den:

- Hvis den nevner en EPSG-kode, viser {{ui:Hvor tegningen er}} det systemet, og kartlagene plasseres etter det.
- Hvis CadCraft ikke kjenner systemet (det andre programmets eget navn for det, et lokalt rutenett eller en skalafaktor), brukes ikke plasseringen, men den beholdes og lagres tilbake slik den var, så det andre programmet fortsatt finner den. Velg et system i {{ui:Hvor tegningen er}} for å erstatte den.

:::note
Kartlag tegnes bare på skjermen: de skrives ikke ut. Bruk bare kartjenester der vilkårene tillater det, og hold kildehenvisningen synlig.
:::
