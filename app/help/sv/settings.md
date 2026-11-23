---
title: CadCraft-inställningar
summary: Inställningarna för ritappen: markörens storlek, var en inklistrad kopia hänger från markören, vad ett klick gör med markeringen, hur många rader verktygsfältet använder, var kommandoraden sitter och hur hög den är, ett kompakt övre område och hörnindikatorn.
keywords: kommandorad, flytande kommandorad, frigör, dockad, en rad, f2, kommandohistorik, commandline, cmdline, toparea, övre område, kompakt, cursorsize, helskärmskorshår, markör helskärm, kant till kant, verktygsfältsrader, verktygsfältsvisning, ctrl f1, inställningar, inställningar för val, alternativ, hörnindikator, viewcube, axelikon, ucs-ikon, markör, korshår, plockruta, klistrapunkt, basspunkt, klicka på objekt, markering, pickadd, shift, återställ
from: ae1a81db
---

Öppna {{ui:Inställningar}} med kugghjulet i appfältet eller med {{key:Mod+,}}. Den första fliken, {{ui:CadCraft}}, innehåller inställningarna som hör till den här appen; {{ui:Allmänt}} innehåller de som alla appar i familjen delar (tema, panelernas textstorlek och bredder, verktygsfältets utseende och ordning). CadCrafts inställningar finns bara i appen: du ändrar dem här, och den här webbläsaren kommer ihåg dem. {{ui:Återställ CadCraft-inställningar}} sätter tillbaka varje inställning till början.

## Markör

**Liten**, **Medium** (utgångsläget), **Stor** eller **Helskärm**: storleken på korshåret och plockrutan i ritningen. En större plockruta plockar även objekt från lite längre bort, vilket hjälper på en pekskärm eller en mycket fin ritning.

**Helskärm** låter korshårets två linjer gå kant till kant över ritningen, även när inget kommando körs, så att du med blicken kan kontrollera att två saker ligger på linje över hela vyn. Med vyn delad stannar linjerna i rutan du arbetar i. Samma som AutoCADs {{cmd:CURSORSIZE}} 100: skriv {{cmd:CURSORSIZE}} och 100 för helskärm; ett mindre tal väljer närmaste storlek (under 5 Liten, 5 till 9 Medium, 10 till 99 Stor).

## Klistrapunkt

Var en inklistrad kopia hänger från markören efter {{key:Mod+V}} ({{cmd:PASTECLIP}}), tills du klickar:

- **Nedre vänstra hörnet** (utgångsläget): det nedre vänstra hörnet av de kopierade objektens omfattning, som i AutoCAD.
- **Mitten**: mitten av deras omfattning. Praktiskt för att placera en symbol på ögonmått.

En kopia gjord med `COPYBASE` hänger alltid från den basspunkt du valde. {{ui:Klistra in på plats}} ({{key:Mod+Shift+V}}) ignorerar den här inställningen: den behåller de ursprungliga koordinaterna. Se [Kopiera, klistra in och duplicera](topic:copy-paste).

## Klicka på objekt

Vad ett klick i ritningen gör med markeringen när inget kommando körs:

- **Lägger till i markeringen** (utgångsläget): varje klick eller fönster lägger till objekt; {{key:Shift}}+klick, eller ett {{key:Shift}}+fönster, tar bort dem.
- **Ersätter markeringen**: ett klick eller fönster markerar bara det det väljer. {{key:Shift}}+klick lägger till ett objekt, eller tar bort ett som redan är markerat; ett {{key:Shift}}+fönster lägger till.

Vid en `Select objects:`-fråga inuti ett kommando lägger klick alltid till (och {{key:Shift}} tar bort), oavsett vad den här inställningen säger. Se [Välj objekt](topic:select-objects).

## Klicka på en tom plats

Vad ett klick där det inte finns något objekt gör när inget kommando körs. Båda sätten startar ett markeringsfönster (ett andra klick avslutar det).

- **Rensar markeringen** (utgångsläget): det som var markerat släpps. Håll {{key:Shift}} när du klickar för att behålla det.
- **Behåller markeringen**: markeringen står kvar, som i andra ritprogram; fönstret lägger till i den. Tryck på {{key:Esc}} för att rensa markeringen.

## Dra för att markera

Vad tryck och drag på en tom plats ritar:

- **Lasso** (utgångsläget): en frihandskontur. Dras den åt höger först markeras det som ligger helt inuti den, åt vänster först det den berör; {{key:Space}} medan du drar växlar mellan fönster, korsning och staket.
- **Rektangel**: rutan, som ett klick och ett andra klick ritar den.

{{cmd:LASSOMODE}} `1` eller `0` anger detsamma. Se [Lassomarkering](topic:lasso-selection).

## Dra för att trimma och förlänga

Vad tryck på en tom plats och drag gör i {{cmd:TRIM}} och {{cmd:EXTEND}}:

- **En bana** (utgångsläget): en frihandsbana; varje bit den korsar trimmas (eller förlängs).
- **Ett fönster**: en ruta; varje bit den berör trimmas, som alternativ `C` gör.

Se [Trimma och förläng](topic:trim-and-extend).

## Verktygsfältets placering

{{ui:CadCraft}} › {{ui:Verktygsfältets placering}}: **Överst** (utgångsläget, som det alltid varit), **Nederst**, **Vänster** eller **Höger**. Till vänster eller höger staplas verktygsgrupperna i en kolumn som rullar när den är högre än fönstret, och knapparna bryts två eller tre per rad. Valet sparas med dina inställningar, och {{cmd:TOOLBARDOCK}} (`TBDOCK`) anger det från kommandoraden. {{ui:Allmänt}} › {{ui:Återställ layouten}} sätter tillbaka verktygsfältet överst.

Menystilarnas fält sitter i verktygsfältet och flyttar med det, men stilen {{ui:Menyflik}} är gjord för att gå över överkanten eller underkanten: på en sida får den en smal kolumn som rullar. På en telefon står verktygsfältet där telefonlayouten placerar det.

## Verktygsrader

Hur många rader verktygen använder ovanför ritningen, i CadCraft-verktygsfältet och i stilarna {{ui:Klassisk ritning}} och {{ui:Menyflik}}:

- **Radbryt för att passa** (utgångsläget): verktygen bryts efter fönstrets bredd.
- **2 rader**: högst två rader. När verktygen ryms på två rader eller färre med den här bredden bryts de bara; annars står de i två rader som rullar i sidled.
- **1 rad**: en rad som rullar i sidled, vilket ger ritningen mest utrymme.

{{key:Shift+Ctrl+F1}} går igenom de tre, och {{cmd:TOOLBARROWS}} anger en. Vad knapparna visar (ikoner och text, bara ikoner, eller bara text) är en inställning under {{ui:Allmänt}} › {{ui:Verktygsfält}}; {{key:Ctrl+F1}} går igenom den och {{cmd:TOOLBAR}} anger den.

## Kommandorad

Kommandoraden kan sitta fast under ritningen, som den alltid gjort, eller flyta över den, och den kan vara så tunn som en rad.

- **Frigör den.** Dra handtaget i dess vänstra ände in i ritningen, eller välj {{ui:Flyt över ritningen}} i dess meny {{ui:Alternativ för kommandoraden}} (de tre prickarna i dess högra ände). Dra handtaget igen för att flytta den; dess plats behålls när fönstret ändrar storlek. Dra dess högra kant för att göra den bredare eller smalare. Släpp den på statusfältet, eller välj {{ui:Docka längst ned}}, för att docka den igen.
- **Gör den tunnare eller högre.** Dra dess övre kant: varje steg är en rad historik. Ned till noll rader är den en **endradig kommandorad**: bara prompten och det du skriver, och ett nytt meddelande visas ovanför en stund. Ett dubbelklick på den övre kanten växlar mellan en rad och den höjd du hade.
- **Historiken.** {{key:F2}}, eller klockknappen på kommandoraden ({{ui:Kommandohistorik (F2)}}), öppnar hela historiken ovanför raden (under den när raden flyter nära fönstrets överkant). Skrivandet går fortfarande till kommandoraden; {{key:PageUp}} och {{key:PageDown}} rullar historiken, och {{key:Esc}}, {{key:F2}} eller ett klick någon annanstans stänger den. En egen genväg på F2 vinner över detta.
- **Från tangentbordet.** Handtaget är en knapp: när det har fokus flyttar piltangenterna en flytande kommandorad (med {{key:Shift}} i större steg); {{key:Up}} frigör en dockad och {{key:Down}} vid nedre kanten dockar den. Den övre kanten är en avdelare: {{key:Up}} och {{key:Down}} lägger till eller tar bort en rad, {{key:Home}} gör den till en rad, {{key:End}} den högsta. Skärmläsare hör fortfarande varje meddelande, även på den endradiga kommandoraden.

{{ui:CadCraft}} › {{ui:Kommandorad}} har samma val: {{ui:Dockad längst ned}} eller {{ui:Flytande}}, {{ui:Visade historikrader}} (0 till 12) och {{ui:Standardhöjd}}. {{cmd:COMMANDLINE}} (`CMDLINE`) anger dem från kommandoraden. Plats och höjd sparas för CadCraft i den här webbläsaren tillsammans med resten av layouten, så en sparad arbetsmiljö bär dem med sig; {{ui:Allmänt}} › {{ui:Återställ layouten}} dockar kommandoraden på sin standardhöjd igen. På en telefon förblir kommandoraden dockad med en rad historik; historikknappen fungerar där också.

{{ui:CadCraft}} › {{ui:Alternativbokstäver}} behåller de bokstäver du valt för kommandoalternativ: {{ui:Redigera…}} öppnar filen, {{ui:Importera…}} ersätter den med en fil du väljer och {{ui:Exportera}} sparar den. Se [Ge kommandoalternativ egna bokstäver](topic:option-letters).

När fönstret är kort och layoutkontrollen föreslår en tätare layout, gör dess {{ui:Ja}} även kommandoraden till en rad om ritningen fortfarande är för kort efter verktygsfälten.

## Övre område

{{ui:CadCraft}} › {{ui:Övre område}}: **Standard** (utgångsläget) eller **Kompakt**. Kompakt håller fälten ovanför ritningen små i alla menystilar: gruppnamnen och orden under ikonerna försvinner (verktygstipsen och skärmläsarna har dem fortfarande) och knapparna blir tätare. Det fungerar med [Verktygsrader](topic:settings#toolbar-rows): Kompakt och **1 rad** ger ritningen mest utrymme. {{cmd:TOPAREA}} anger det.

## Hörnindikator

Vad som sitter i ritningens hörn:

- **Automatisk** (utgångsläget): axelikonen på fliken {{ui:Modell}} och vykuben på fliken {{ui:3D}}.
- **Axelikon**: X- och Y-markören nere till vänster på fliken {{ui:Modell}}, och en liten X-, Y- och Z-markör på fliken 3D.
- **Vykub**: en kub uppe till höger på båda flikarna. På fliken {{ui:Modell}} visar den ritningen uppifrån, och ett klick på en annan sida, kant eller hörn öppnar fliken {{ui:3D}} med utsikt därifrån. På 3D-fliken vrids den med vyn: klicka för att se från en sida, dra för att kretsa, och huset går tillbaka till isovyn. Se [Modell i 3D](topic:3d-solids).
- **Ingen**: inget i hörnet.

Blad visar varken det ena eller det andra.

## Markeringens längd och area

- **I statusfältet** (utgångsläget): när objekt är markerade visar statusfältet deras totala längd och den totala arean för de slutna. Se [Summor för en markering](topic:properties-panel#totals-of-a-selection).
- **Dold**: statusfältet utelämnar dem. Egenskaper visar dem fortfarande för flera objekt.

## Rutnät, ortogonalt och fångst

Dessa finns inte i dialogrutan: knapparna {{ui:Rutnät}}, {{ui:Ortogonalt}} och {{ui:Fångst}} i statusfältet (eller {{key:F7}}, {{key:F8}}, {{key:F3}}) och listan över objektfångster bredvid dem sparas när du lämnar dem. Se [Fånga till punkter på objekt](topic:object-snaps).
