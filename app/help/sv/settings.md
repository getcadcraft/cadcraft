---
title: CadCraft-inställningar
summary: Inställningarna som hör till ritningsappen: markörstorlek, var en inklistrad kopia hänger från markören, vad ett klick gör med markeringen, hur många rader verktygsfältet använder, var kommandoraden sitter och hur hög den är, ett kompakt övre område och hörnindikatorn.
keywords: kommandorad, flytande kommandorad, frigör, docka, en rad, f2, kommandohistorik, commandline, cmdline, toparea, övre område, kompakt, cursorsize, helskärmsmarkör, kant till kant, verktygsfältsrader, verktygsfältsvisning, ctrl f1, inställningar, alternativ, hörnindikator, view cube, axelikon, ucs-ikon, markör, korshår, plockruta, klistra-punkt, baspunkt, klick på objekt, markering, pickadd, shift, återställ
from: 0896eb42
---

Öppna {{ui:Inställningar}} med kugghjulet i appfältet eller {{key:Mod+,}}. Den första fliken, {{ui:CadCraft}}, innehåller inställningarna som hör till denna app; {{ui:Allmänt}} innehåller de som alla appar i familjen delar (tema, panelens textstorlek och bredder, verktygsfältets utseende och ordning). CadCrafts inställningar finns bara i appen: du ändrar dem här, och den här webbläsaren minns dem. {{ui:Återställ CadCraft-inställningar}} sätter tillbaka alla till start.

## Markör

**Liten**, **Medel** (start), **Stor** eller **Helskärm**: storleken på korshåret och plockrutan i ritningen. En större plockruta väljer också objekt från lite längre bort, vilket hjälper på en pekskärm eller en mycket fin ritning.

**Helskärm** låter korshårets två linjer gå kant till kant över ritningen, även när inget kommando körs, så att du med blicken kan kontrollera att två saker ligger på linje över hela vyn. När vyn är delad stannar linjerna i den rutan du arbetar i. Samma som AutoCADs {{cmd:CURSORSIZE}} 100: skriv {{cmd:CURSORSIZE}} och 100 för helskärm; ett mindre tal väljer närmaste storlek (under 5 Liten, 5 till 9 Medel, 10 till 99 Stor).

## Klistra-punkt

Var en inklistrad kopia hänger från markören efter {{key:Mod+V}} ({{cmd:PASTECLIP}}), tills du klickar:

- **Nedre vänstra hörnet** (start): kopierade objekts nedre vänstra hörn av utsträckningen, som i AutoCAD.
- **Centrum**: mitten av deras utsträckning. Bra för att placera en symbol med blicken.

En kopia gjord med `COPYBASE` hänger alltid från baspunkten du valde. {{ui:Klistra in på plats}} ({{key:Mod+Shift+V}}) bryr sig inte om denna inställning: den behåller de ursprungliga koordinaterna. Se [Kopiera, klistra in och duplicera](topic:copy-paste).

## Klick på objekt

Vad ett klick i ritningen gör med markeringen när inget kommando körs:

- **Lägger till i markeringen** (start): varje klick eller fönster lägger till objekt; {{key:Shift}}+klick, eller ett {{key:Shift}}+fönster, tar bort dem.
- **Ersätter markeringen**: ett klick eller fönster markerar bara det det väljer. {{key:Shift}}+klick lägger till ett objekt, eller tar bort ett som redan är markerat; ett {{key:Shift}}+fönster lägger till.

Vid en `Select objects:`-prompt i ett kommando lägger klick alltid till (och {{key:Shift}} tar bort), oavsett vad denna inställning säger. Se [Markera objekt](topic:select-objects).

## Klick på en tom yta

Vad ett klick där det inte finns något objekt gör när inget kommando körs. Oavsett vilket startar det ett markeringsfönster (ett andra klick avslutar det).

- **Rensar markeringen** (start): det som var markerat släpps. Håll ned {{key:Shift}} när du klickar för att behålla den.
- **Behåller markeringen**: markeringen står kvar, som i andra ritningsprogram; fönstret lägger till i den. Tryck på {{key:Esc}} för att rensa markeringen.

## Dra för att markera

Vad som ritas när du trycker och drar på en tom yta:

- **Lasso** (start): en frihandskontur. Rör du dig åt höger först markeras det som ligger helt inuti den, åt vänster först det den rör; {{key:Space}} medan du drar växlar mellan fönster, korsande och staket.
- **Rektangel**: lådan, så som ett klick och ett andra klick ritar den.

{{cmd:LASSOMODE}} `1` eller `0` ställer in samma sak. Se [Lassomarkering](topic:lasso-selection).

## Dra för att trimma och förlänga

Vad tryck och drag på en tom yta gör i {{cmd:TRIM}} och {{cmd:EXTEND}}:

- **En väg** (start): en frihandsväg; varje del den korsar trimmas (eller förlängs).
- **Ett fönster**: en låda; varje del den rör trimmas, som alternativet `C` gör.

Se [Trimma och förläng](topic:trim-and-extend).

## Verktygsfältets placering

{{ui:CadCraft}} › {{ui:Verktygsfältets placering}}: **Överst** (start, som det alltid har varit), **Nederst**, **Vänster** eller **Höger**. Till vänster eller höger staplas verktygsgrupperna i en kolumn som rullar när den är högre än fönstret, och knapparna bryts två eller tre per rad. Valet sparas med dina inställningar, och {{cmd:TOOLBARDOCK}} (`TBDOCK`) ställer in det från kommandoraden. {{ui:Allmänt}} › {{ui:Återställ layouten}} flyttar tillbaka verktygsfältet överst.

Menystilarnas fält sitter inne i verktygsfältet och flyttar med det, men stilen {{ui:Menyflik}} är gjord för att gå över överkanten eller underkanten: på en sida får den en smal kolumn som rullar. På en telefon stannar verktygsfältet där telefonlayouten placerar det.

## Verktygsfältsrader

Hur många rader verktygen använder ovanför ritningen, i CadCraft-verktygsfältet och i stilarna {{ui:Klassisk ritning}} och {{ui:Menyflik}}:

- **Bryt för att passa** (start): verktygen bryts till fönstrets bredd.
- **2 rader**: högst två rader. När verktygen bryts till två rader eller färre vid denna bredd bryts de bara; annars står de i två rader som rullar i sidled.
- **1 rad**: en rad som rullar i sidled, vilket ger ritningen mest utrymme.

{{key:Shift+Ctrl+F1}} växlar mellan de tre, och {{cmd:TOOLBARROWS}} ställer in en. Vad knapparna visar (ikoner och text, bara ikoner, eller bara text) är en inställning under {{ui:Allmänt}} › {{ui:Verktygsfält}}; {{key:Ctrl+F1}} växlar mellan dem och {{cmd:TOOLBAR}} ställer in den.

## Kommandorad

Kommandoraden kan vara dockad under ritningen, som den alltid var, eller flyta över den, och den kan vara så tunn som en rad.

- **Gör den flytande.** Dra handtaget i dess vänstra ände in i ritningen, eller välj {{ui:Frigör över ritningen}} i dess meny {{ui:Kommandoradsalternativ}} (de tre prickarna i dess högra ände). Dra handtaget igen för att flytta den; dess plats behålls när fönstret ändrar storlek. Dra dess högra kant för att göra den bredare eller smalare. Släpp den på statusfältet, eller välj {{ui:Docka längst ned}}, för att docka den igen.
- **Gör den tunnare eller högre.** Dra dess övre kant: varje steg är en rad historik. Ner till noll rader är den en **kommandorad på en rad**: bara prompten och det du skriver, och ett nytt meddelande visas ovanför den en stund. Ett dubbelklick på den övre kanten växlar mellan en rad och den höjd du hade.
- **Historiken.** {{key:F2}}, eller klockknappen på kommandoraden ({{ui:Kommandohistorik (F2)}}), öppnar hela historiken ovanför raden (under den när raden flyter nära fönstrets överkant). Att skriva går fortfarande till kommandoraden; {{key:PageUp}} och {{key:PageDown}} rullar historiken, och {{key:Esc}}, {{key:F2}} eller ett klick någon annanstans stänger den. En egen tangent på F2 går före detta.
- **Från tangentbordet.** Handtaget är en knapp: när det har fokus flyttar piltangenterna en flytande kommandorad (med {{key:Shift}}, i större steg); {{key:Up}} gör en dockad flytande och {{key:Down}} vid nedre kanten docka den. Övre kanten är en avdelare: {{key:Up}} och {{key:Down}} lägger till eller tar bort en rad, {{key:Home}} gör den till en rad, {{key:End}} den högsta. Skärmläsare hör fortfarande varje meddelande, även på kommandoraden med en rad.

{{ui:CadCraft}} › {{ui:Kommandorad}} har samma val: {{ui:Dockad längst ned}} eller {{ui:Flytande}}, {{ui:Visade historikrader}} (0 till 12) och {{ui:Standardhöjd}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ställer in dem från kommandoraden. Platsen och höjden sparas för CadCraft i den här webbläsaren tillsammans med resten av layouten, så en sparad arbetsmiljö bär dem med sig; {{ui:Allmänt}} › {{ui:Återställ layouten}} docker kommandoraden på nytt vid dess standardhöjd. På en telefon stannar kommandoraden dockad med en rad historik; historikknappen fungerar där också.

När fönstret är lågt och layoutkontrollen erbjuder en tätare layout gör dess {{ui:Ja}} också kommandoraden till en rad om ritningen fortfarande är för kort efter verktygsfälten.

## Övre område

{{ui:CadCraft}} › {{ui:Övre område}}: **Standard** (start) eller **Kompakt**. Kompakt gör fälten ovanför ritningen små i varje menystil: gruppnamnen och orden under ikonerna försvinner (verktygstipsen och skärmläsare har dem kvar) och knapparna blir tätare. Den samverkar med [Verktygsfältsrader](topic:settings#toolbar-rows): Kompakt och **1 rad** ger ritningen mest utrymme. {{cmd:TOPAREA}} ställer in det.

## Hörnindikator

Vad som sitter i ritningens hörn:

- **Automatisk** (start): axelikonen på fliken {{ui:Modell}} och vykuben på fliken {{ui:3D}}.
- **Axelikon**: X- och Y-markeringen nedtill till vänster på fliken {{ui:Modell}}, och en liten X-, Y- och Z-markering på fliken {{ui:3D}}.
- **Vykub**: en kub uppe till höger på båda flikarna. På fliken {{ui:Modell}} visar den ritningen uppifrån, och ett klick på en annan sida, kant eller hörn öppnar fliken {{ui:3D}} med utsikt därifrån. På 3D-fliken vrids den med vyn: klicka för att titta från en sida, dra för att rotera kring, och hemknappen går tillbaka till isovyn. Se [Modell i 3D](topic:3d-solids).
- **Ingen**: inget i hörnet.

Blad visar ingen av dem.

## Längd och area för markeringen

- **I statusfältet** (start): när objekt är markerade visar statusfältet deras totala längd och den totala arean för de slutna. Se [Summor för en markering](topic:properties-panel#totals-of-a-selection).
- **Dold**: statusfältet utelämnar dem. Egenskaper visar dem fortfarande för flera objekt.

## Rutnät, ortogonalt och fångst

Dessa finns inte i dialogrutan: knapparna {{ui:Rutnät}}, {{ui:Ortogonalt}} och {{ui:Fångst}} i statusfältet (eller {{key:F7}}, {{key:F8}}, {{key:F3}}) och listan över objektfångster bredvid dem kommer ihåg när du lämnar dem. Se [Fånga punkter på objekt](topic:object-snaps).
