---
title: CadCraft-skärmen
summary: En rundtur genom varje fält, panel och flik i ritappen, under det namn de har på skärmen.
keywords: skärm, gränssnitt, verktygsfält, menyflik, paneler, kommandorad, statusfält, flikar, layoutflikar, egenskaper, lagerpanel, rundtur
from: b5a33388
---

Skärmen har sju delar. Uppifrån och ned: appfältet, verktygsfältet, ritytan med en panel på varje sida, flikarna under ritningen, kommandoraden och statusfältet.

## Appfältet

Det smala fältet allra överst tillhör webbplatsen, inte ritningen. Det visar CadCraft-märket, appens namn, vilken version du kör, en länk till appens sida, en {{ui:Hjälp}}-knapp (eller {{key:F1}}), en {{ui:Spara för offline}}-knapp, en {{ui:Helskärm}}-knapp och två temaknappar, {{ui:Papper}} och {{ui:Modell}}.

Knappen {{ui:Inställningar}} (kugghjul) rymmer CadCrafts egna inställningar och de som alla appar delar: se [CadCraft-inställningar](topic:settings).

{{ui:Spara för offline}} behåller en kopia av CadCraft, inklusive dess DWG-läsare, i den här webbläsaren så att den öppnas utan anslutning. Dess etikett visar tillståndet: ”Sparar N av M”, ”Redo offline”, ”Det gick inte att spara” eller ”Offline är inte tillgängligt”. Se [Arbeta offline](common:offline).

:::note
Knapparna {{ui:Papper}} och {{ui:Modell}} i appfältet ändrar bara skärmens färger: {{ui:Papper}} är ett ljust tema, {{ui:Modell}} ett mörkt. De har inget att göra med fliken {{ui:Modell}} under ritningen, som växlar mellan ritningen och dess blad.
:::

Knappen {{ui:Helskärm}}, eller {{key:Ctrl+Shift+F}} (Control-tangenten på alla datorer, även Mac), växlar mellan tre skärmlägen: normalt, helskärm och helskärm med fälten dolda. Med fälten dolda för du pekaren till skärmens övre kant för att få tillbaka dem.

## Verktygsfältet

Under appfältet finns verktygsfältet. Varje knapp kör ett kommando, precis som om du hade skrivit det, så kommandoraden ställer samma frågor oavsett sätt. Håll pekaren över en knapp för att se dess kommandoalias. Grupperna är:

| Grupp | Knappar |
|---|---|
| Fil | {{ui:Ny}}, {{ui:Öppna}}, {{ui:Spara}}, {{ui:Spara som}}, {{ui:Plotta}} |
| Rita | {{ui:Linje}}, {{ui:Polylinje}}, {{ui:Cirkel}}, {{ui:Båge}}, {{ui:Rektangel}}, {{ui:Polygon}}, {{ui:Ellips}}, {{ui:Text}}, {{ui:Stycke}}, {{ui:Skraffering}} och {{ui:Mer}}: {{ui:Punkt}}, {{ui:Konstruktionslinje}} och {{ui:Stråle}} (se [Konstruktionslinjer och strålar](topic:construction-lines)) |
| Ändra | {{ui:Flytta}}, {{ui:Kopiera}}, {{ui:Rotera}}, {{ui:Skala}}, {{ui:Spegla}}, {{ui:Töj}}, {{ui:Förskjut}}, {{ui:Trimma}}, {{ui:Förläng}}, {{ui:Avrunda}}, {{ui:Fasa}}, {{ui:Spräng}}, {{ui:Radera}} och {{ui:Mer}}: {{ui:Matris}}, {{ui:Sammanfoga}}, {{ui:Matcha egenskaper}}, {{ui:Bryt}} och {{ui:Ändra längd}} |
| Notera | {{ui:Linjärt}}, {{ui:Justerat}}, {{ui:Vinkel}}, {{ui:Radie}}, {{ui:Diameter}} (mått), {{ui:Hänvisning}} (flerhänvisning) och {{ui:Mer}}: {{ui:Fortsatt mått}}, {{ui:Baslinjemått}} och {{ui:Revisionsmoln}} |
| Parametrisk | {{ui:Auto}}, {{ui:Villkor}}, {{ui:Mått}}, {{ui:Parametrar}} och {{ui:Mer}} med varje villkor (se [Villkorsstyr en ritning](topic:constraints)) |
| Block | {{ui:Skapa}}, {{ui:Infoga}}, {{ui:Bibliotek}} och {{ui:Mer}}: {{ui:Redigera block}} och {{ui:Definiera attribut}} |
| Blad | {{ui:Nytt blad}}, {{ui:Vyport}} |
| Redigera | {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}} (till urklipp), {{ui:Klistra in}} och {{ui:Mer}}: en meny med {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Klistra in på plats}}, {{ui:Duplicera och flytta}}, {{ui:Ta bort}}, {{ui:Markera allt}}, {{ui:Avmarkera}}, {{ui:Snabbmarkering}}, {{ui:Markera liknande}} och {{ui:Sök och ersätt}}, var och en med sin tangent |
| Vy | {{ui:Utsträckning}}, {{ui:Fönster}}, {{ui:Föregående}} och {{ui:Mer}}: {{ui:Mät avstånd}}, {{ui:Område}}, {{ui:Mät (radie, vinkel …)}} och den delade skärmen: {{ui:Dela sida vid sida}}, {{ui:Dela ovanpå varandra}}, {{ui:Fyra rutor}}, {{ui:En ruta}} (se [Dela skärmen](topic:split-screen)), samt {{ui:Vrid vyn 90° åt vänster}}, {{ui:Vrid vyn 90° åt höger}}, {{ui:Tillbaka till världen}} (se [Vrid vyn](topic:ucs-and-turned-view)) |

{{ui:Kopiera}} i gruppen {{ui:Ändra}} är kommandot {{cmd:COPY}} (baspunkt, sedan dit varje kopia ska); {{ui:Kopiera}} i gruppen {{ui:Redigera}} lägger objekt i urklipp för {{ui:Klistra in}}. Se [Kopiera, klistra in och duplicera](topic:copy-paste). Knappen för det kommando som körs förblir markerad tills kommandot avslutas. Verktygstipsen nämner Windows-genvägarna (”Ctrl+O”); på en Mac fungerar {{key:Mod+O}} också.

I ett lågt fönster (till exempel en bärbar dator med skärmen skalad till 125 % eller mer) tar verktygsfältet aldrig ritningens plats: när ritningen skulle få för lite höjd tappar knapparna orden under ikonerna och gruppnamnen (håll pekaren över en knapp för dess namn), och om det ändå inte räcker blir verktygsfältet en rad som rullar i sidled. Ett högre fönster ger tillbaka orden.

## Den vänstra panelen

Panelen till vänster har tre avsnitt.

- **{{ui:Lager}}.** Varje lager i ritningen, med en fylld punkt på det aktuella. Klicka på ett namn för att göra det lagret aktuellt. Varje rad har en färgruta (klicka på den för att välja färg) och fyra knappar: på/av (öga), frys (snöflinga), lås (hänglås) och plott (skrivare). {{ui:Nytt lager}} öppnar en ruta för att lägga till ett. Se [Organisera en ritning med lager](topic:layers).
- **{{ui:Block}}.** De block som är definierade i ritningen, hur många gånger varje används och en {{ui:Infoga}}-knapp för vart och ett. Se [Skapa och infoga block](topic:blocks).
- **{{ui:Ritning}}.** Fakta om den öppna filen: namn (med ”(ändrad)” när det finns osparade ändringar), format, storlek, enheter, antal objekt, lager, block och blad. När du har öppnat en fil listar en ruta ”Om den här filen” allt som CadCraft inte kunde visa eller var tvunget att konvertera.

## Ritytan

Mitten av skärmen är ritningen. Pekaren är ett hårkors. När CadCraft vill ha en punkt visar en liten markör och en etikett (”Ändpunkt”, ”Mittpunkt”) var en objektfångst hamnar. När det vill ha objekt har hårkorset en markeringsruta och objekt under den lyser upp.

När ritningen är tom visar ett kort ”Börja rita” några första kommandon. Det försvinner så fort du kör ett kommando eller öppnar en fil. Du kan släppa en DWG- eller DXF-fil var som helst på den här ytan för att öppna den.

## Flikarna under ritningen

Under ritningen finns flikarna: {{ui:Modell}} först, sedan {{ui:3D}}, sedan en flik per blad (layout) och därefter en {{ui:+}}-knapp.

- {{ui:Modell}} är själva ritningen, i full storlek, i ritningsenheter.
- {{ui:3D}} visar ritningen liggande på marken och de solider som görs av den. Medan den visas har verktygsfältet en grupp {{ui:3D}} i stället för ritningsgrupperna. Se [Modellera i 3D](topic:3d-solids).
- Varje bladflik är ett pappersblad med ett ritningshuvud och vyportar mot modellen. Det du ritar där är i pappersenheter (millimeter eller tum). Dubbelklicka i en vyport för att arbeta på modellen genom den (se [Arbeta på modellen genom en vyport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Ett långt bladnamn kortas på sin flik; håll pekaren över fliken för hela namnet. Med många blad visar {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Bladflikar}} › {{ui:Endast bladnummer}} bara varje blads nummer (A-101) på dess flik.
- {{ui:+}} skapar ett nytt blad med en ram, ett ritningshuvud och en vyport. Det är samma sak som kommandot {{cmd:LAYOUT}}.
- Dubbelklicka på en bladflik för att byta namn på den. Med en flik i fokus flyttar {{key:Left}} och {{key:Right}} mellan flikar.

Varje flik behåller sin egen zoom och panorering. Se [Ställ in ett blad](topic:sheets-and-viewports).

## Den högra panelen: Egenskaper

Panelen till höger ändras beroende på vad som är markerat.

- **Inget markerat, på fliken {{ui:Modell}}:** rubriken är {{ui:Aktuella inställningar}}. Här ställer du in {{ui:Lager}}, {{ui:Färg}} och {{ui:Texthöjd}} för nya objekt, ritningens {{ui:Enheter}} och storlekarna för nya mått ({{ui:Texthöjd}}, {{ui:Pilstorlek}}, {{ui:Decimaler}}, {{ui:Total skala}}).
- **Inget markerat, på ett blad:** rubriken är ”Blad:” och bladets namn. Du kan byta namn på bladet, ändra dess {{ui:Papper}} och {{ui:Orientering}}, {{ui:Plotta det här bladet}} eller {{ui:Ta bort det här bladet}}. Inställningarna för nya objekt följer nedanför.
- **Ett objekt markerat:** dess typ som rubrik (Linje, Cirkel, Text, Mått, Vyport …), sedan dess lager, färg och geometri. Skriv ett nytt värde och tryck på {{key:Enter}} för att ändra det.
- **Flera objekt markerade:** hur många, och deras gemensamma {{ui:Lager}} och {{ui:Färg}}. Om du ändrar något av dem ändras alla. ”Varierar” betyder att de skiljer sig åt.

Se [Redigera med handtag och Egenskaper](topic:grips-and-properties).

Nedanför öppnas panelen {{ui:Parametrar}} när du väljer {{ui:Parametrar}} eller skriver {{cmd:PARAMETERS}}: varje parameter och måttvillkor i en tabell. Se [Använd parametrar och ekvationer](topic:parameters).

## Kommandoraden

Längst ned finns kommandoraden: historiken över vad du har gjort, och under den prompten.

- Promptens etikett är `Command:` när inget körs. Medan ett kommando körs visar den frågan, dess alternativ inom hakparenteser och standardvärdet inom vinkelparenteser, till exempel `Specify radius of circle [Diameter] <500>:`.
- När du skriver ett kommandonamn föreslår ett tips till höger matchande kommandon. Tryck på {{key:Tab}} för att acceptera det första. ”Inget sådant kommando” betyder att inget matchar.
- {{key:Up}} och {{key:Down}} hämtar tillbaka rader du skrev tidigare.
- Historiken behåller de senaste 400 raderna. Meddelanden från kommandon, mätningar från {{cmd:DIST}} och {{cmd:LIST}} samt spar- och plottrapporter visas här.

## Statusfältet

Den allra understa raden är statusfältet.

- **Koordinater** till vänster: hårkorsets X och Y. Medan ett kommando har en baspunkt visar det också avståndet och vinkeln från den, till exempel `Δ 1200 < 90°`.
- **Meddelanden** i mitten, som ”Ortogonalt på” eller ”Aktuellt lager: Walls”. De tonas ut efter några sekunder.
- **{{ui:Rutnät}}**, **{{ui:Ortogonalt}}**, **{{ui:Polär}}**, **{{ui:Fångst}}**, **{{ui:Spår}}**, **{{ui:Dyn}}** och **{{ui:LWT}}** till höger. Var och en är en omkopplare; en nedtryckt knapp är på. {{ui:LWT}} visar linjetjocklekar på skärmen (se [Linjetjocklekar och linjetyper](topic:units-papers-scales#line-weights-and-linetypes)). Den lilla pilen bredvid {{ui:Fångst}} öppnar {{ui:Objektfångster}}, där du kryssar för vilka fångster som är aktiva. Se [Fånga punkter på objekt](topic:object-snaps).

## Dialogrutan Plotta till PDF

{{ui:Plotta}} (eller {{key:Mod+P}}) öppnar dialogrutan {{ui:Plotta till PDF}}, med inställningarna till vänster och en direkt förhandsvisning till höger. Se [Plotta till PDF](topic:plot-pdf).

## Hjälpen

{{key:F1}} eller knappen {{ui:Hjälp}} öppnar den här hjälpen som en sidopanel; ritningen går att använda bredvid. Den fungerar utan anslutning. {{key:F1}} igen, eller {{key:Esc}} i panelen, stänger den. Se [Använda den här hjälpen](common:help).
