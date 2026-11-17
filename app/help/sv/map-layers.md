---
title: Kartlager under ritningen
summary: Visa gatukartor, flygbilder eller en bild med en världsfil under modellrummet, placerade efter ritningens koordinatsystem.
keywords: karta, kartlager, maplayers, ml, geomap, bakgrundskarta, flygbild, satellit, rutor, xyz, wms, wmts, kartitjänst, världsfil, koordinatsystem, epsg, state plane, utm, georeferens, situationsplan, geolokalisering, geografisk plats, geodata, sparad, dwg, dxf
from: f103045f
---

## Vad du ska skapa

En situationsplan ritad över en flygbild eller en gatukarta, var och en på rätt plats.

## Berätta för CadCraft var ritningen är

1. Ange ritningens enheter i {{ui:Egenskaper}} › {{ui:Enheter}} (till exempel fot eller meter).
2. Skriv {{cmd:MAPLAYERS}} (eller `ML`) och tryck på {{key:Enter}}.
3. Under {{ui:Var ritningen finns}} skriver du ett namn eller en EPSG-kod i {{ui:Hitta ett system}} (till exempel `2277` eller `Texas Central`) och väljer det i {{ui:System}}.
4. Om ritningen är ritad i det systemets egna koordinater lämnar du placeringen på 0. Om inte anger du en ritningspunkt ({{ui:Ritning X}}, {{ui:Ritning Y}}), var den punkten ligger på kartnätet ({{ui:Östvärde}}, {{ui:Nordvärde}}), och hur långt ritningen är vriden från öst ({{ui:Vriden (°)}}).
5. Klicka på {{ui:Använd det här systemet}}.

## Lägg till ett lager

1. Slå på {{ui:Kartlager från internet}} överst i dialogrutan. Tills dess begärs ingenting från någon server; när den är på ser de servrar du lägger till området på skärmen och din internetadress, aldrig din ritning.
2. I {{ui:Lägg till ett lager}} väljer du varifrån det kommer:
   - **Rutor (XYZ)**: en rutadress med `{z}`, `{x}` och `{y}`, ett namn och den källangivelse leverantören kräver.
   - **WMS**, **WMTS** eller **ArcGIS**: tjänstens adress, sedan {{ui:Hämta lager}} och välj ett.
   - **En bild**: en PNG- eller JPEG-fil med sin världsfil (och sin `.prj` när en sådan finns).
3. Lagret visas under ritningen. Dess källangivelse visas nere till höger i ritningen.

Varje lager i listan kan döljas, göras mer eller mindre genomskinligt, flyttas upp eller ner, eller tas bort.

Varje ändring av systemet eller lagren är ett steg i {{cmd:UNDO}}.

## Sparas med ritningen

Koordinatsystemet och listan med lager sparas i ritningen när du sparar som DWG eller DXF, och kommer tillbaka när du öppnar den igen, på vilken dator som helst. Bilder från filer sparas inte: lägg till dem igen efter att du öppnat ritningen. Reglaget {{ui:Kartlager från internet}} sparas inte i ritningen: det hör till den här webbläsaren, så en ritning som någon skickar till dig begär inget från någon server förrän du slår på det själv.

Det andra program ser:

| Sparad som | Ritningens plats | Kartlagren |
|---|---|---|
| DWG 2010, 2013 eller 2018, DXF 2000 | Skrivs på det standardsätt som program läser en ritnings geografiska plats: systemets EPSG-kod, en ritningspunkt och var den ligger på kartnätet, enheterna och norr. | Endast CadCraft |
| DWG 2000, 2004 eller 2007, DXF R12 | Endast CadCraft (CadCraft säger det när du sparar) | Endast CadCraft |

- **Kontrollerat:** ODA File Converter läser platsen utan fel, och ett DXF-bibliotek (ezdxf) läser EPSG-koden och placeringen exakt.
- **Ännu inte kontrollerat:** om andra ritprogram känner igen systemet från dess EPSG-kod. Ett program som har sin egen lista över system under andra namn kan visa ritningen utan plats.
- Andra program visar ett block med namnet `CADCRAFT_GEO` i blocklistan. Det är CadCraft:s egen kopia av systemet och lagren; det placeras aldrig i ritningen. Låt det vara kvar.

## Ritningar från andra program

När en ritning från ett annat program har en geografisk plats läser CadCraft den:

- Om den anger en EPSG-kod visar {{ui:Var ritningen finns}} det systemet och kartlagren placeras efter den.
- Om CadCraft inte känner till systemet (ett annat programs eget namn för det, ett lokalt nät eller en skalfaktor) används inte platsen, men den behålls och sparas tillbaka som den var, så att det andra programmet fortfarande hittar den. Välj ett system i {{ui:Var ritningen finns}} för att ersätta den.

:::note
Kartlager ritas bara på skärmen: de plottas inte. Använd bara kartjänster vars villkor tillåter det, och håll deras källangivelse synlig.
:::
