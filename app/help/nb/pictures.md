---
title: Bilder i en tegning
summary: Plasser et PNG- eller JPEG-bilde, klipp det til et rektangel eller en mangekant, vis bildene en DWG bruker, og plott dem skarpt.
keywords: pastearea, parea, kopier område, kopiert område, markupcraft, virkelig størrelse, ekte størrelse, overlegg, ole, ole2frame, innebygd objekt, lim inn bilde, lim inn skjermbilde, ctrl+v, bilde fra utklippstavlen, skjermbilde, bilde, bilde, imageattach, iat, image, imageclip, klipp, png, jpeg, jpg, logo, foto, raster, imagedef, xref, plott, pdf, oppløsning
from: 4025ac97
---

## Hva du skal lage

En firmalogo plassert i et tegningshode, klippet til delen du vil ha, og en PDF der den skrives ut i sin egen oppløsning.

## Plasser et bilde

1. Skriv {{cmd:IMAGEATTACH}} (eller `IAT`) og trykk {{key:Enter}}. Velg en PNG- eller JPEG-fil.
2. `Specify the lower-left corner`: klikk, eller skriv et punkt.
3. `Specify its width`: bredden i tegneenheter. {{key:Enter}} beholder den tilbudte bredden: én enhet per piksel, eller bredden du ga denne filen sist gang (ledeteksten sier hvilken).
4. `Specify its rotation angle`: {{key:Enter}} for ingen rotasjon.

Bildet er ett objekt: velg det via rammen, og flytt, kopier, roter, skaler eller slett det som en blokk.

:::note
Bildefilen blir værende sammen med tegningen mens den er åpen. En lagret DWG nevner filen, slik andre programmer gjør; den inneholder ikke pikslene. Behold bildet ved siden av tegningen.
:::

## Lim inn et skjermbilde eller et kopiert bilde

1. Kopier bildet (et skjermbilde med {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=skjermbildeverktøyet ditt}}, eller Kopier bilde i et annet program eller en nettleser).
2. Pek der det skal havne på tegningen, og trykk {{key:Mod+V}}.

Bildets nedre venstre hjørne havner ved pekeren (eller midt i visningen), 40 % så bredt som det du ser. Flytt, skaler og klipp det som et hvilket som helst bilde. Navnet er tegningens navn med `-picture-1.png` (deretter `-2`, …), og historikken sier det. {{ui:Rediger}} › {{ui:Mer}} › {{ui:Lim inn et bilde}} gjør det samme fra menyen (nettleseren kan spørre først).

En DWG beholder bare navnet på et bildes fil, så når du lagrer tegningen, lagres bildet også som sin egen fil. Behold de to i samme mappe: tegningen viser bildet derfra. I nettleseren er det en nedlasting til, og historikken sier det. Med bare CadCraft-objekter på utklippstavlen limer {{key:Mod+V}} inn dem, som før.

## Lim inn et område kopiert i MarkupCraft

{{ui:Kopier område}} i MarkupCraft kopierer en del av et ark som et bilde som vet hvor stort det er. CadCraft limer det inn i den størrelsen.

1. I MarkupCraft kopierer du området (et rektangel, en sirkel eller en fri form; {{ui:Kopier som overlegg}} hvis du vil se tegningen gjennom det).
2. I CadCraft trykker du {{key:Mod+V}}, eller skriver {{cmd:PASTEAREA}} (eller `PAREA`), eller velger {{ui:Rediger}} › {{ui:Mer}} › {{ui:Lim inn et kopiert område}}.
3. `Specify the lower-left corner of the copied area`: klikk, eller skriv et punkt. En ramme i områdets størrelse følger pekeren.

Slik blir det store det havner:

- **Arket hadde en tegnemålestokk:** i sin virkelige størrelse, i tegningens enheter (en 1:50-detalj av en 2 m trapp er 2 m lang i en meter-tegning, 78.74 i en tomme-tegning). Ingenting mer spørres om.
- **Arket hadde ingen målestokk:** CadCraft sier størrelsen på papiret og ber om en målestokk. Skriv `100` for et 1:100-ark, trykk {{key:Enter}} for papirstørrelsen, eller skriv `P`, klikk to punkter på det innlimte bildet og skriv hvor langt fra hverandre de virkelig er (slik {{cmd:SCANSCALE}} gjør). Det nedre venstre hjørnet blir værende der du plasserte det.

En tegning uten enheter tar millimeter, slik et PDF-underlegg gjør. Et overlegg beholder papirets gjennomsiktighet og starter like falmet som det var da det ble kopiert; utenfor en sirkel eller en fri form er det også gjennomsiktig. Det innlimte området er et bilde som alle andre: flytt, roter, skaler, klipp eller slett det, og hele innlimingen er ett angre-steg. Lagret som DWG er det et IMAGE med sin falming og gjennomsiktighet.

{{key:Mod+V}} limer inn området når bildet på utklippstavlen er områdets, eller når området ble kopiert etter noe du kopierte i CadCraft (og i løpet av de siste 6 timene). Ellers limes det inn som før. {{cmd:PASTEAREA}} limer inn sist kopierte område når som helst.

## Vis bildene en DWG bruker

En DWG lagrer bare hvor bildene var, så CadCraft viser hvert av dem som en ramme med filnavnet sitt.

1. Skriv {{cmd:IMAGE}} (eller `IM`). Kommandolinjen lister opp hver bildefil og om den vises.
2. Velg filene (flere samtidig). En fil der navnet inneholder det tegningen nevner, teller også, fordi eksporter ofte legger til et prosjektprefiks.

## Klipp et bilde

1. Skriv {{cmd:IMAGECLIP}} (eller `ICL`) og velg bildet.
2. Velg `R` og klikk to hjørner, eller `P` og klikk punktene i en mangekant, og trykk deretter {{key:Enter}}. `D` fjerner klippet.

## Plott bilder

Bilder går inn i PDF-en som bilder, i sin egen oppløsning og under linjene. I dialogen {{ui:Plott}} kan {{ui:Bilder}} begrense dem til 600, 300 eller 150 dpi for å gjøre filen mindre. En JPEG går inn slik den er.

## Hva som lagres hvor

| Format | Bilder |
|---|---|
| DWG (alle versjoner) | Som bilder (IMAGE), med klippet |
| DXF | Som sine rammer med filnavnet; lagringen sier det |

## Objekter fra andre programmer (OLE)

En tegning kan inneholde objekter et annet program har laget, for eksempel et bilde fra et malingsprogram eller et regnearkområde (OLE-objekter). CadCraft kjører eller redigerer dem ikke, og kan ikke sette inn nye. Dette gjør den:

- **I en DXF** åpnes et OLE-objekt som en ramme. Hvis objektet lagret et bilde av seg selv, og bildet er en bitmap, tegnes bildet inne i rammen; ellers har rammen en etikett med objekttypen, for eksempel «Microsoft Excel Worksheet (OLE)». Du kan flytte, kopiere og slette rammen som en blokk. {{cmd:SAVEAS}} til DXF 2000 skriver den som et OLE-objekt igjen, med dataene uendret.
- **I en DWG** beholdes objektene og skrives tilbake når du lagrer som DWG, byte for byte, men de **vises ikke**: en DWG beholder et objekts plass inne i sine egne data, og CadCraft leser det ikke ennå. Historikken sier hvor mange som ble beholdt. Skriv {{cmd:OLELIST}} for å se hva de er (type, størrelse, og om hvert lagret et bilde), og for å legge en kopi av et bilde der du velger: **Plasser** spør etter nummeret, nedre venstre hjørne og bredden, og tegner en ramme med bildet i. Den kopien er en ramme du kan flytte eller slette; selve objektet blir værende i tegningen og skrives fortsatt tilbake når du lagrer.
- Et objekt som kom fra en DXF, lagres i en DWG bare som sin ramme og etikett; historikken sier det. Lagre som DXF 2000 for å beholde selve objektet.
- Bilder som er metafiler (det mange programmer lagrer), tegnes ikke: rammen og etiketten vises i stedet.

## Vanlige feil

| Du ser | Hvorfor | Løsning |
|---|---|---|
| En ramme med et filnavn | CadCraft har ikke filen | {{cmd:IMAGE}}, og velg så filen |
| «Det er ikke et bilde» | Objektet du valgte, er ikke et bilde | Velg bildets ramme |
