---
title: Lägg till text och etiketter
summary: Placera rumsetiketter med enradig text, skriv inslagna noteringar med styckestext som skrivs direkt på plats och redigera texten efteråt.
keywords: text, dtext, mtext, mleader, multileader, hänvisning, flerhänvisning, revcloud, revisionsmoln, moln, sök, ersätt, sök och ersätt, stycke, radbrytning, radavstånd, etikett, notering, annotering, höjd, justera, textmask, bakgrundsmask, mask, täckyta, rotation, redigera text, ddedit, textedit, typsnitt
from: 4b76be99
---

## Vad du gör

Två rumsetiketter, centrerade i sina rum, en notering som bryts till sin bredd och sedan en rättelse av en av etiketterna.

## Texthöjd och ritningsskala

Texthöjd anges i ritenheter. I en ritning i millimeter som ska plottas i 1:50 blir text 2.5 mm hög på papper 2.5 × 50 = 125 enheter hög i modellen. På ett Layout-blad ritar du i pappersenheter, så 2.5 där är 2.5 mm på papper.

## Placera en centrerad etikett

1. Skriv `DT` och tryck på {{key:Enter}} (eller klicka på {{ui:Text}} i verktygsfältet). Prompten lyder `Ange textens startpunkt [Justera]:`.
2. Skriv `J` och tryck på {{key:Enter}}.
3. Vid `Ange ett alternativ [Vänster (L)/Centrum (C)/Höger (R)/Mitt (M)/TL/MC] <L>:` skriv `MC` och tryck på {{key:Enter}}.
4. Vid `Ange textens infogningspunkt` klicka på mitten av ett rum.
5. Vid `Ange höjd` skriv `250` och tryck på {{key:Enter}}.
6. Vid `Ange textens rotationsvinkel <0>` tryck på {{key:Enter}}.
7. Vid `Ange text` skriv `KÖK` och tryck på {{key:Enter}}.

Etiketten visas, centrerad på punkten du klickade.

8. Tryck på {{key:Enter}} på den tomma `Ange text`-prompten för att avsluta kommandot.

## Skriv en notering som bryts

Styckestext ({{cmd:MTEXT}}) bryts till en bredd och skrivs direkt på ritningen.

1. Skriv `T` och tryck på {{key:Enter}}, eller klicka på {{ui:Stycke}} i verktygsfältet.
2. Vid `Ange första hörnet` klicka där noteringens övre vänstra hörn ska vara.
3. Om du vill ändra höjden först, skriv `H`, tryck på {{key:Enter}}, skriv `250` och tryck på {{key:Enter}}.
4. Vid `Ange motsatt hörn [Höjd/Justera/Radavstånd (L)/Rotation/Bredd (W)]` klicka till höger om det första hörnet. Avståndet över är den bredd texten bryts vid. Hur långt ner du klickar begränsar den inte.
5. En ruta öppnas över ritningen med markören i den. Skriv `ALLA MÅTT ÄR I MILLIMETER OM INTE ANNAT ANGES`. Orden bryts vid bredden när du skriver.
6. Tryck på {{key:Enter}} för att börja ett nytt stycke och skriv `KONTROLLERA PÅ PLATS`.
7. Tryck på {{key:Mod+Enter}}, klicka på {{ui:OK}} eller klicka var som helst utanför rutan. Noteringen är ett objekt.

Fältet ovanför rutan ändrar {{ui:Höjd}}, {{ui:Radavstånd}} (1 är normalt, 1.5 är halvannan gång så mycket), {{ui:Bredd}} (0 = ingen radbrytning) och {{ui:Justera}} medan du skriver. {{key:Esc}} eller {{ui:Avbryt}} stänger den utan att något läggs till.

Alternativen vid andra hörnet: `H` höjd, `J` justering (`TL` övre vänster … `BR` nedre höger: hörnet eller mitten av rutan som står kvar), `L` radavstånd, `R` rotation, `W` en inskriven bredd i stället för andra hörnet.

:::note
Medan rutan är öppen skriver {{key:Space}} ett mellanslag och {{key:Enter}} startar ett nytt stycke. En sparad DWG behåller styckestext som MTEXT. En DXF R12 har ingen styckestext, så varje rad sparas som en egen text.
:::

### Flera enradiga texter i stället

{{cmd:TEXT}} (`DT`) frågar efter en rad i taget: varje {{key:Enter}} startar nästa rad, 1.667 gånger texthöjden lägre, och varje rad är ett eget objekt. Tryck på {{key:Enter}} på en tom rad för att avsluta.

## Justeringsalternativ

| Alternativ | Punkten du klickar på är |
|---|---|
| Vänster (standard) | Baslinjens vänstra ände |
| Centrum | Baslinjens mitt |
| Höger | Baslinjens högra ände |
| Mitt, MC | Textens mitt, både i sidled och upp och ner |
| TL | Det övre vänstra hörnet |

## Redigera text

1. Dubbelklicka på ett textobjekt. Det öppnas i samma ruta som ny styckestext, med markören i slutet.
2. Ändra orden.
3. Tryck på {{key:Mod+Enter}} eller klicka utanför rutan. Texten på ritningen ändras. {{key:Esc}} lämnar den som den var.

{{cmd:TEXTEDIT}} (`ED`) gör detsamma: välj en text efter en annan och tryck på {{key:Enter}} när du är klar.

Markera en text för att ändra den i den högra panelen i stället: {{ui:Text}}, {{ui:Höjd}}, {{ui:Radbrytningsbredd}} (0 = ingen radbrytning), {{ui:Radavstånd}}, {{ui:Rotation}}, X- och Y-positionen och {{ui:Justera}}. Listan {{ui:Justera}} erbjuder också Nedre vänster, vilket text från andra program ibland använder.

## Formatering i styckestext från andra program

Styckestext i en DWG eller DXF kan bära koder inuti sig: färger per ord, fet och kursiv, understrykning, överstrykning och genomstrykning, staplade bråk som 1/2 och en annan höjd för ett ord. CadCraft behåller dessa koder, ritar dem (på skärmen och i en plottad PDF) och sparar dem tillbaka oförändrade.

När du redigerar en sådan text (dubbelklick, {{cmd:TEXTEDIT}}, fältet Text i den högra panelen eller {{cmd:FIND}} med Ersätt) redigerar du dess vanliga ord. Ett ord du skriver hamnar i delen bredvid och tar dess färg och stil. De andra koderna står kvar där de är. Om du skriver om ett staplat bråks siffror blir bråket vanlig text. Om du sätter hela texten från fältet Text behålls koderna bara där det går att se vilka ord som blev kvar.

Typsnittsnamn (`\F`) behålls och sparas, men allt ritas i det enda typsnittet i Helvetica-stil. Det finns ännu ingen verktygsfält för att skriva koder.

## Peka på något: flerhänvisningar

{{ui:Hänvisning}} i gruppen {{ui:Notera}} ({{cmd:MLEADER}}, `MLD`) ritar en pil, en hänvisningslinje, en kort landning och en notering, som ett enda objekt.

1. Klicka på {{ui:Hänvisning}}. Vid `Ange hänvisningens pilspetsplacering` klicka på det noteringen gäller.
2. Vid `Ange hänvisningens landningsplats` klicka där noteringen ska stå. Landningen vänds mot den sida du klickade på.
3. Skriv noteringen i rutan som öppnas och tryck på {{key:Mod+Enter}}.

`A` och `L` vid den första frågan anger pilspetsens storlek och landningens längd. Texthöjden kommer från {{ui:Texthöjd}} för nya mått, gånger {{ui:Total skala}}. Dubbelklicka på en flerhänvisning för att ändra dess ord. Handtagen flyttar pilspetsen och landningen, och noteringen följer landningen. I {{ui:Egenskaper}}: {{ui:Text}}, {{ui:Höjd}}, {{ui:Radbrytningsbredd}}, {{ui:Pilspetsstorlek}} och {{ui:Landningsavstånd}}.

:::note
Flerhänvisningar sparas som riktiga flerhänvisningar i DWG. DXF har ingen flerhänvisning i R12 eller 2000, så där sparas de som linjerna, pilspetsen och texten de ritar.
:::

## Markera ändringar med ett revisionsmoln

{{ui:Notera}} › {{ui:Mer}} › {{ui:Revisionsmoln}} ({{cmd:REVCLOUD}}, `RC`) ritar ett moln av bågar runt det som ändrats. Historiken visar bågens längd och vilken typ den kommer att använda.

- **Rektangulärt** (första gången): klicka på två hörn.
- `P` **Polygonalt**: klicka på hörnen. {{key:Enter}} stänger molnet.
- `F` **Frihand**: klicka där det börjar och flytta pekaren runt området utan att klicka. En båge läggs till för varje bågens längd. Klicka eller tryck på {{key:Enter}} för att stänga det.
- `O` **Objekt**: välj en sluten polylinje, cirkel eller ellips (eller en linje, båge eller öppen polylinje). Den blir molnet. `Vänd riktning?` `Y` vänder bågarna inåt.
- `A` **Bågens längd**: längden på varje båge. Välj en som passar plottens skala.

Molnet är en sluten polylinje av bågar, så det sparas i alla format.

## Sök och ersätt ord

{{ui:Redigera}} › {{ui:Mer}} › {{ui:Sök och ersätt}} ({{cmd:FIND}}) söker i text, värdena på blockattribut och måttext på den öppna fliken (eller bara i de markerade objekten).

1. Skriv orden i {{ui:Sök efter}}. Listan visar varje ställe de finns på och antalet.
2. Välj {{ui:Matcha versaler/gemener}}, {{ui:Endast hela ord}} eller {{ui:Använd jokertecken (* och ?)}} om du behöver dem, och avmarkera det du inte vill söka i.
3. Klicka på {{ui:Markera hittade}} för att markera dessa objekt, eller skriv de nya orden i {{ui:Ersätt med}} (listan visar vad varje blir) och klicka på {{ui:Ersätt alla}}. Ett {{key:Mod+Z}} ångrar alla ersättningar.

Måttets uppmätta värde är inte text, så det ersätts aldrig. I `<> TYP.` kan bara `TYP.` ersättas.

## Dölj linjerna bakom en etikett

1. Markera texterna, skriv {{cmd:TEXTMASK}} och tryck på {{key:Enter}}.
2. `B` målar ritningens bakgrund bakom dem. `C` frågar efter ett färgnummer. `O` tar bort masken.
3. `Kantförskjutningsfaktor`: {{key:Enter}} behåller 1.5, en halv texthöjd runt texten.

Masken täcker linjer under texten, på skärmen och när du plottar. DWG 2004 eller senare och DXF 2000 behåller den. DWG 2000-formatet och DXF R12 kan inte, och sparningen säger det.

## Typsnitt

All text ritas i ett typsnitt i Helvetica-stil, på skärmen och i PDF-filer. Text från öppnade ritningar behåller sina ord, höjd och position, men inte sitt ursprungliga typsnitt. Namnet på ett typsnitt inne i styckestext behålls i filen, se ovan.

I plottade PDF-filer skrivs text på alla europeiska skriftsystem, kyrilliska eller grekiska ut som den är. PDF-filen bär de bokstäver den behöver, och du kan fortfarande markera och söka i texten. Kinesisk, japansk och koreansk text skrivs också ut som den är. Plottningen hämtar ett större typsnitt första gången det behövs. Arabisk, persisk, urdu och hebreisk text skrivs ut som den är också (se nästa avsnitt). Tecken som inget typsnitt har en bokstav för skrivs ut som "?", och historiken säger hur många det var.

## Text som läses från höger: arabiska, persiska, urdu, hebreiska

Skriv texten som du gör var som helst annars: {{cmd:TEXT}} och {{cmd:MTEXT}} ritar varje rad i läsordning. En rad vars första bokstav är arabisk eller hebreisk läses från höger till vänster. Siffror och latinska ord inuti den behåller sin egen ordning från vänster till höger, och bokstäver i arabisk skrift sitter ihop. En rad som börjar med en latinsk bokstav stannar från vänster till höger, med de högerlästa orden på sin plats inuti. Varje stycke i en flerradig text har en egen riktning, och ett bryt stycke behåller den på varje rad.

Texten lagras som du skrev den, så DWG- och DXF-filer utväxlar den oförändrad med andra program. Infogningspunkten och justeringen ({{ui:Vänster}}, {{ui:Centrum}}, {{ui:Höger}}) betyder samma sida som för all text. En högerläst notering som ska hänga från sin högra ände vill ha {{ui:Höger}}.

På skärmen kommer bokstäverna från systemets typsnitt. I en plottad PDF använder hebreiska samma inbäddade typsnitt som latinsk text. Text i arabisk skrift gör att plottningen hämtar ett typsnitt till (under 1 MB, en gång), och hela PDF-filen skrivs sedan ut i det typsnittet. Det typsnittet har ingen egen form för tre urduttecken (heh goal, yeh barree och urdu-punkten): de skrivs ut i den närmaste arabiska bokstavens form. En ritning som har både arabisk skrift och kinesisk, japansk eller koreansk text skriver ut en av dem som "?", eftersom en plot bär ett typsnitt. Text i ett laddat SHX-typsnitt ordnas och sitter ihop när typsnittet har bokstäverna på sina Unicode-platser. För gamla typsnitt vars bokstäver redan är formade, använd {{ui:Vänd (R)}} i {{cmd:SHXFONTS}} som förut.

## Vanliga misstag

- **Texten är för liten för att synas.** Höjden är i ritenheter. I en stor ritning, använd en stor höjd (se ovan), eller zooma in.
- **Kommandot slutade efter en rad.** Du tryckte på {{key:Enter}} på en tom rad i {{cmd:TEXT}}. Starta om det, eller använd styckestext (`T`), där {{key:Enter}} startar ett nytt stycke.
- **`T` öppnade en ruta i stället för att fråga efter en rad.** Som i AutoCAD är `T` styckestext ({{cmd:MTEXT}}). Enradig text är `DT`.
- **Texten bryts på ett annat ställe än i AutoCAD.** CadCraft bryter med Helvetica-bredder. Ett annat typsnitt kan få plats med ett ord mer eller mindre på en rad.
- **Text i en spegelkopia.** Den placeras spegelvänd men är fortfarande läsbar från vänster till höger.
