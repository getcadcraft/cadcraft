---
title: Bladsamlingar
summary: Samla blad från många ritningar i en numrerad lista, fyll i deras ritningshuvuden från samlingen, publicera dem som en PDF och arkivera samlingen som en zip-fil.
keywords: bladsamling, bladhanterare, ssm, sheetset, ccsheets, dst, bladlista, bladregister, ritningshuvud, fält, publicera, numrera om, arkivera, etransmit, transmittal, delsamlingar, omslagsblad, ritningslista
from: 2c855720
---

## Vad du lär dig

Hur du samlar blad (layouter) från flera ritningsfiler i en **bladsamling**, numrerar och ger dem titlar, låter deras ritningshuvuden fyllas i åt dig, publicerar hela samlingen som en PDF och packar allt i en zip-fil att skicka.

En bladsamling finns i en egen liten fil, `<name>.ccsheets`, i mappen som innehåller ritningarna. Samlingsfilen listar bladen med sökvägar från den mappen, så att du kan flytta eller kopiera hela mappen.

:::note
Att öppna en mapp för läsning och skrivning kräver Chrome eller Edge (de kan låta en sida arbeta i en mapp du väljer), eller skrivbordsappen. Andra webbläsare öppnar en samling skrivskyddad: du kan titta på den och publicera den, och samlingsfilen laddas ner i stället för att sparas.
:::

## Starta en samling

1. Hitta avsnittet {{ui:Bladsamling}} i vänster panel och öppna dess meny {{ui:Samling}}. Att skriva {{cmd:SHEETSET}} (eller `SSM`) tar dig dit också.
2. Välj {{ui:Ny samling…}}. Ge samlingen ett namn, och om du vill projektets namn och nummer.
3. Välj mappen som innehåller ritningarna. Samlingsfilen sparas där.

För att öppna en samling senare väljer du {{ui:Öppna samling…}} och väljer samma mapp. Om mappen innehåller fler än en samling frågar CadCraft vilken.

## Lägg till blad

1. Välj {{ui:Lägg till blad från en ritning…}} och välj en av ritningarna i mappen.
2. CadCraft läser den ritningen i bakgrunden (den öppnas inte på skärmen) och listar dess blad. Bocka för de du vill ha och klicka på {{ui:OK}}.
3. Markera ett blad och tryck på {{key:F2}} (eller {{ui:Byt namn och numrera om…}}) för att ge det ett nummer och en titel, till exempel `A-101` och `Floor plan`.

{{ui:Nytt blad från mall…}} skapar en ny ritning från en annan ritnings blad (dess ritningshuvud och vyportar), namngiven efter det nya bladet, och lägger till den. Samlingen minns ritningen du använde som mall.

## Ordna samlingen

- **Delsamlingar** grupperar blad, till exempel Arkitektur › Planer: markera var den ska ligga och välj {{ui:Ny delsamling…}}.
- **Ordning**: dra ett blad till en annan plats i listan, eller till en delsamling för att flytta dit det. Med tangentbordet markerar du det och trycker på {{key:Alt+Up}} eller {{key:Alt+Down}}.
- **Öppna ett blad**: dubbelklicka på det (eller tryck på {{key:Enter}}). Dess ritning öppnas på egen flik, på det bladet.
- **Ta bort**: markera det och tryck på {{key:Delete}}. Ritningen i sig ändras inte.
- **Ångra**: {{ui:Ångra samlingsändring}} och {{ui:Gör om samlingsändring}} går igenom det du ändrade i samlingen.
- **Numrera om**: {{ui:Numrera om blad…}} numrerar varje blad, eller en delsamlings, i listans ordning: ett prefix, en start och ett steg (`A-` och `101` ger A-101, A-102 …).

Varje ändring sparas direkt i samlingsfilen.

## Numrera blad utifrån deras fält

I stället för att numrera blad för hand låter du en regel bygga varje nummer från bladets fält, så att ett blad som flyttas till en annan nivå eller disciplin får sitt nya nummer av sig självt.

1. Ge varje blad dess fält: markera det, klicka på {{ui:Byt namn…}} och skriv i {{ui:Det här bladets fält}} ett per rad, till exempel `DISCIPLINE = A` och `LEVEL = 1`. Ett fält som hela samlingen delar (säg `DISCIPLINE = A`) kan i stället läggas i samlingens {{ui:Egenskaper…}}.
2. Öppna panelens meny och klicka på {{ui:Numreringsregel…}}.
3. Skriv regeln, till exempel `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` räknar upp bland de blad vars andra fält är lika, så nivå 1 får A-101, A-102 och nivå 2 börjar om på A-201. `{SEQ:2}` skriver det med två siffror; `{SUBSET}` är namnet på den delsamling ett blad ligger i.
4. Välj vad som händer när ett fält ändras: {{ui:Numrera om bladen}} håller numren enligt regeln efter varje ändring; det andra valet numrerar dem en gång, nu.

Regeln sparas i samlingsfilen. Medan den numrerar om av sig själv, ändra ett blads fält i stället för dess nummer.

## Fyll ritningshuvuden från samlingen

Ett ritningshuvud får sin text från samlingen när dess attribut är märkta med ett fälts namn:

| Tagg | Vad den visar |
|---|---|
| `SHEETNUMBER` (eller `SHEET_NO`, `DWG_NO`) | Bladets nummer |
| `SHEETTITLE` (eller `TITLE`, `SHEET_TITLE`) | Bladets titel |
| `SHEETDESC` | Bladets beskrivning |
| `PROJECTNAME` (eller `PROJECT`) | Projektnamnet |
| `PROJECTNUMBER` (eller `PROJECT_NO`, `JOB_NO`) | Projektnumret |
| `SHEETSETNAME` | Samlingens namn |
| `SHEETINDEX`, `SHEETCOUNT` | ”3 av 12”, och 12 |
| Egna, till exempel `CLIENT` | Det du skrev för det i {{ui:Ange fält…}} |

{{ui:Ange fält…}} innehåller projektnamnet och -numret samt dina egna fält, ett per rad som `NAME = value`.

{{ui:Uppdatera ritningar}} skriver numren, titlarna och fälten i ritningshuvudena på varje ritning i samlingen, och byter namn på varje bladflik enligt samlingen (som standard nummer och titel, till exempel `A-101 Floor plan`; {{ui:Ange fält…}} › {{ui:Namn på layoutflikar}} ändrar det). Varje ritning sparas på plats, i sitt eget format och sin egen version. När du numrerar om eller byter namn på blad, kör det igen så följer flikarna och ritningshuvudena med.

## En bladlista på omslagsbladet

Markera omslagsbladet i listan och välj {{ui:Lägg bladlistan på det här bladet}}. En tabell över varje blad (nummer och titel, under sin delsamling) läggs i bladets övre vänstra hörn. {{ui:Uppdatera ritningar}} och {{ui:Publicera till PDF}} håller den uppdaterad. Det är ett block, `CC_SHEETLIST`: flytta det som vilken blockreferens som helst.

## Publicera samlingen

{{ui:Publicera till PDF}} gör en PDF med en sida per blad, i samlingens ordning, i varje bladets egna pappersstorlek, med ett bokmärke per blad (”A-101 — Floor plan”). Med en delsamling markerad frågar CadCraft om bara den delsamlingen ska publiceras. Ritningshuvudena i PDF:en fylls i från samlingen redan innan du uppdaterar ritningarna; ritningarna i sig ändras inte av publiceringen. PDF:en laddas ner.

{{ui:Publicera till DWG…}} skriver varje blad som en egen DWG (DWG 2018): modellen och just det bladet, med ritningshuvudet ifyllt från samlingen, namngiven efter nummer och titel (`A-101 Level 1 floor plan.dwg`). Välj {{ui:DWG}}, eller {{ui:DWG + PDF}} för samlingens PDF bredvid dem. En `publish.json` listar varje fil med dess storlek och SHA-256. När samlingens mapp kan skrivas till (CadCraft Studio, eller en mapp du valt i webbläsaren) hamnar filerna i en mapp `<set name> - published`; annars laddas de ner som en zip-fil. Vyportens [klassöverskrivningar](topic:viewport-overrides) följer med i varje DWG.

## Arkivera samlingen

{{ui:Arkivera som zip}} packar samlingsfilen, varje ritning den använder och det de ritningarna länkar till (länkade ritningar, och deras i sin tur, och bilder), med mapparna bevarade, plus en `Transmittal.txt` som listar varje fil. En länk som inte finns i samlingens mapp listas där som saknad. Länkar hittas via sin sökväg från ritningen, sedan via filnamnet var som helst i mappen.

## Samlingsfilen

`.ccsheets`-filen är JSON som du kan läsa i valfri textredigerare:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Sökvägar är relativa till samlingens mapp, med `/` mellan mappar. CadCraft kontrollerar filen när den öppnas: en absolut sökväg, ett blad utan fil eller layout, eller text som inte är ren utelämnas, och historiken säger det.

## Felsökning

| Vad du ser | Varför | Vad du gör |
|---|---|---|
| ”Den här mappen är skrivskyddad här” | Webbläsaren kan inte skriva i en mapp | Använd Chrome eller Edge, eller skrivbordsappen; under tiden behåller {{ui:Ladda ner samlingsfilen}} dina ändringar |
| Ett blad utelämnas ur PDF:en: ”har inget layout med namnet …” | Bladets layout byttes namn på eller togs bort i dess ritning | Öppna ritningen och kontrollera dess flikar; ta bort bladet och lägg till det igen |
| Ett ritningshuvud förblir tomt | Dess attribut har andra taggar | Byt namn på attributtaggarna till fältnamnen ovan (BEDIT) |
| ”har redan ett layout med namnet … så fliken byttes inte namn” | Två blad i samma ritning skulle få samma flikname | Ge ett av dem ett annat nummer eller en annan titel |
