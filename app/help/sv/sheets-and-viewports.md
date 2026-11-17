---
title: Skapa ett blad med ritningshuvud och vyportar
summary: Gör ett blad (layout) med ram och ritningshuvud, ställ in vyportens skala, lägg till en andra vyport för en detalj och fyll i ritningshuvudet.
keywords: layout, blad, pappersrum, vyport, mview, vpview, ritningshuvud, skala, pappersstorlek, ram, vyportar, utskriftsskala, mspace, pspace, modellrum, gå in i vyport, dubbelklicka vyport
from: 45a45de8
---

## Det du ska skapa

Ett A3-blad med ett ritningshuvud, hela planen i en vyport i 1:100, och en andra vyport som visar ett hörn i 1:20.

## Modell och blad

Du ritar byggnaden på fliken {{ui:Modell}}, i full storlek: en 6 m vägg är 6000 enheter lång i millimeter. Ett **blad** (en layout) är ett pappersark, mätt i millimeter eller tum. En **vyport** är ett fönster skuret i bladet som visar modellen i en skala.

## Innan du börjar

1. Öppna eller rita en plan på fliken {{ui:Modell}}.
2. Tryck på {{key:Esc}} så att ingenting är markerat.
3. Ange under {{ui:Aktuella inställningar}} {{ui:Enheter}} till den enhet du ritade i, till exempel {{ui:Millimeter}}.

Enheterna spelar roll: en vyportskala som 1:100 betyder att en millimeter på papperet visar 100 verkliga millimeter, så CadCraft måste veta vad en ritningsenhet är. En ritning som lämnats som {{ui:Enhetslös}} tas för att vara i pappersenheten (millimeter på ISO-papper, tum på amerikanskt papper).

## Skapa bladet

1. Klicka på knappen {{ui:+}} till höger om flikarna under ritningen, eller skriv `LAYOUT` och tryck på {{key:Enter}}, eller klicka på {{ui:Nytt blad}}.

En ny flik, `Layout1`, öppnas. Du bör se ett blad på ett mörkare skrivbord: en ram, ett ritningshuvud i nedre högra hörnet och en vyport ovanför som visar hela modellen i den största standardskala som får plats. Historiken anger papperet: ISO A3 för metriska och enhetslösa ritningar, Tabloid (ANSI B) för ritningar i tum eller fot.

2. Klicka på {{ui:Utsträckning}} för att passa bladet på skärmen.

## Välj papper

1. Tryck på {{key:Esc}} så att ingenting är markerat. Rubriken i den högra panelen lyder ”Blad: Layout1”.
2. I {{ui:Namn}}, skriv `A-101 Plan` och tryck på {{key:Enter}}. Fliken byter namn.
3. Under {{ui:Papper}}, välj en storlek.
4. Under {{ui:Orientering}}, välj {{ui:Liggande}} eller {{ui:Stående}}.

:::warning
Om du byter papper flyttas eller ändras inte storleken på det som redan finns på bladet. Kontrollera efteråt att ramen, ritningshuvudet och vyporten fortfarande passar, och flytta eller ändra storlek på dem med handtagen. Byte mellan millimeter- och tumpapper behåller siffrorna, så allt ändrar storlek: statusfältet varnar dig.
:::

## Ställ in vyportens skala

1. Klicka på vyportens ram (dess kant). Panelens rubrik lyder ”Vyport”.
2. Under {{ui:Skala}}, välj `1:100`.

Modellen i vyporten ritas om i 1:100, centrerad där den var. Listan erbjuder metriska skalor från 10:1 till 1:10000; ritningar i tum eller fot får även arkitektoniska skalor (1/4" = 1'-0" och liknande) och tekniska skalor (1" = 20' och liknande). {{ui:Anpassa till hela modellen}} sätter en exakt, icke-standardskala som passar allt.

3. Om planen inte längre är centrerad, ändra {{ui:X}} och {{ui:Y}} under {{ui:Vyns centrum (modell)}} i den högra panelen: det är modellpunkten som visas i mitten av vyporten.

## Visa en del av modellen i en vyport

1. Med vyporten markerad, klicka på {{ui:Välj ett fönster på modellen…}} i den högra panelen (eller skriv `VPVIEW` och tryck på {{key:Enter}}).
2. CadCraft byter till fliken {{ui:Modell}}. Klicka på ett hörn av området som ska visas.
3. Klicka på det motsatta hörnet.

Du är tillbaka på bladet, och vyporten visar det området i den största standardskala som får plats; historiken säger vilken. {{ui:Visa hela modellen}} går tillbaka till hela planen i en standardskala.

## Lägg till en andra vyport för en detalj

1. Skapa plats på bladet: markera den första vyporten och dra ett hörnhandtag för att göra den mindre.
2. Skriv `MV` och tryck på {{key:Enter}}, eller klicka på {{ui:Vyport}} i gruppen Blad.
3. Klicka på ett hörn av den nya vyporten på bladet.
4. Klicka på det motsatta hörnet.

Den nya vyporten visar hela modellen. Historiken säger dess skala.

5. Klicka på den nya vyportens ram.
6. Klicka på {{ui:Välj ett fönster på modellen…}} och välj ett litet område runt ett hörn av planen.
7. Under {{ui:Skala}}, välj `1:20`.

Vyportsramar ligger på lagret `Viewports`, som är satt att inte skrivas ut, så ramarna syns på skärmen men inte i PDF-filen.

## Fyll i ritningshuvudet

Ritningshuvudet är gjort av vanliga linjer och text på lagret `Title block`. Det börjar med ritningens namn, skalan för den första vyporten, dagens datum och bladnumret.

1. Dubbelklicka på den stora titeltexten. En redigeringsruta öppnas över den.
2. Skriv bladets titel.
3. Klicka på {{ui:OK}}, eller tryck på {{key:Mod+Enter}}.

Gör likadant för de andra fälten. Använd {{cmd:TEXT}} för att skriva i den tomma cellen ”DRAWN BY”. Texten SCALE uppdateras inte av sig själv när du ändrar en vyports skala: redigera den för hand.

## Rita på bladet

Allt du ritar på en bladflik ligger på papperet, i pappersenheter: text 3.5 hög är 3.5 mm hög på ett ISO-blad. Anteckningar, nordpilar och bladramar hör hit.

För att ändra själva planen, gå till fliken {{ui:Modell}}, eller arbeta genom en vyport (nästa avsnitt); varje vyport visar ändringen.

## Arbeta med modellen genom en vyport

1. Dubbelklicka inne i en vyport, utanför dess ram. Eller skriv `MS` och tryck på {{key:Enter}}: med en vyport på bladet går det direkt in; med flera klickar du inne i den du vill ha.

Ramen ritas tjockare, historiken säger att du är inne, och bladets flik är kvar markerad. Allt du ritar eller ändrar nu ligger i modellen, i modellenheter, precis som på fliken {{ui:Modell}}: en linje som ritas inne i en vyport i 1:100 är i verkliga millimeter. Lager som är frysta i den här vyporten kan inte väljas här.

2. Vrid hjulet eller dra med mittenknappen för att zooma och panorera det vyporten visar. Bladet står kvar där det är.
3. Dubbelklicka var som helst utanför ramen, eller skriv `PS` och tryck på {{key:Enter}}.

Du är tillbaka på bladet. Vyporten behåller vyn du lämnade den med; {{key:Mod+Z}} sätter tillbaka den gamla vyn i ett steg. Ett klick på en valfri flik under ritningen lämnar också vyporten.

:::note
En vyport vars visning är låst ({{ui:Visning låst}} i {{ui:Egenskaper}}) behåller sin vy: inne i den flyttar panorering och zoom hela bladet i stället. En vyport som är avstängd kan inte gås in i.
:::

## Märk en vy med dess namn

En vytitel under en vyport kan visa vyportens vynamn och följa med det:

1. Ge vyn ett namn: markera vyportens ram och fyll i {{ui:Vynamn}} i {{ui:Egenskaper}} — eller spara vyn på fliken {{ui:Modell}} med {{cmd:NAMEDVIEW}} och, med vyporten markerad, skriv `VPVIEW`, `V` och vyns namn: vyporten visar den vyn och tar dess namn.
2. Skriv `VIEWLABEL` (`VL`) och tryck på {{key:Enter}}, och klicka sedan där etiketten ska stå ({{key:Enter}} placerar den under vyportens nedre vänstra hörn).

När vynamnet ändras ändras etiketten med det, i samma steg att ångra.

## Frys ett lager i en vyport

För att dölja ett lager i en vyport men inte i de andra (möbler i en detalj, till exempel):

1. Markera vyportens ram, eller arbeta inne i den (dubbelklicka).

Panelen {{ui:Lager}} får en knapp till på varje rad, och en rad ovanför listan säger det.

2. Klicka på den knappen på lagrets rad.

Lagret försvinner bara från den vyporten. Klicka igen för att tina det; {{key:Mod+Z}} ångrar något av dem. För flera lager eller vyportar samtidigt, skriv `VPLAYER`: `F` (Frys) eller `T` (Tina), lagernamnen (`A-*` tar alla lager som börjar med A-), sedan `C` (Aktuellt (C)), `A` (Alla) eller `S` (Välj (S)). `VPLAYER` `V` (Vpvisdflt) väljer lager som nya vyportar börjar med frysta.

## Fler blad

Varje {{ui:+}} lägger till ett blad till (`Layout2`, `Layout3` …) med nästa bladnummer. För att ta bort det öppna bladet, tryck på {{key:Esc}} och klicka på {{ui:Ta bort det här bladet}} i den högra panelen. Det frågar inte; {{key:Mod+Z}} tar tillbaka det.

Plotta ett blad med {{ui:Plotta det här bladet}} eller {{key:Mod+P}}; se [Plotta till PDF](topic:plot-pdf).

## Vanliga misstag

- **Vyporten visar ingenting.** Modellen är tom, eller vyn är riktad någon annanstans. Markera ramen och klicka på {{ui:Visa hela modellen}}.
- **Skallistan visar bara förhållanden och inga skalor i fot och tum.** Ange {{ui:Enheter}} till {{ui:Tum}} eller {{ui:Fot}} på fliken {{ui:Modell}}.
- **1:100 ser tio gånger för stor eller liten ut.** Ritningsenheterna är fel. Ange {{ui:Enheter}} till vad en enhet verkligen är.
- **Att klicka på planen inne i vyporten väljer inget.** På ett blad väljer du bladets egna objekt. Dubbelklicka inne i vyporten först för att arbeta med planen genom den.
- **Klick utanför vyporten gör ingenting.** Du är inne i en vyport: dubbelklicka utanför den, eller skriv `PS`, för att arbeta med bladet igen.
- **”Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first.”** Vyportar hör till ett blad. Öppna en bladflik (eller skapa en med LAYOUT) först. {{cmd:MVIEW}} fungerar bara på en bladflik.
