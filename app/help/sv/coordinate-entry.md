---
title: Koordinat- och avståndsinmatning
summary: Alla sätt att skriva en punkt, ett avstånd, en vinkel eller ett tal på CadCraft-kommandoraden, med exempel.
keywords: dynamisk inmatning, dyn, f12, tab, koordinater, absolut, relativ, polär, @, direkt avstånd, vinkel, grader, sista punkten, lastpoint, skriva punkter, inmatning, aritmetik, beräkning, räknare, cal, plus, bråk, uttryck
from: 7de9252d
---

## Punkter

När kommandot frågar efter en punkt skriver du en av dessa och trycker på {{key:Enter}}:

| Du skriver | Betydelse | Exempel |
|---|---|---|
| `x,y` | Absolut: mäts från origo 0,0 | `2500,1200` |
| `#x,y` | Också absolut (godtas av vana) | `#2500,1200` |
| `@dx,dy` | Relativ: åt sidan och uppåt från den sista punkten | `@600,0` |
| `@d<a` | Relativ polär: avstånd och vinkel från den sista punkten | `@1500<45` |
| `d<a` | Absolut polär: avstånd och vinkel från origo | `3000<90` |
| ett enda tal | Direkt avstånd: så långt från baspunkten, mot korsmarkören | `1200` |
| `*x,y`, `@*dx,dy` | Världskoordinater medan en UCS är inställd | `*0,0` |

När en UCS är inställd ({{cmd:UCS}}) mäts `x,y`, `@dx,dy` och vinkeln i `d<a` längs UCS-axlarna. Se [Vrid vyn och använd egna koordinater](topic:ucs-and-turned-view).

Eller klicka i ritningen; objektfångst och {{ui:Ortogonalt}} gäller för klick.

Regler:

- Ett kommatecken skiljer X från Y. Decimaler skrivs med punkt: `1250.75,300`.
- Negativa värden går åt vänster och nedåt: `@-600,0`.
- Skriv inga mellanslag: {{key:Space}} skickar raden, precis som {{key:Enter}}.
- Tal får använda exponenter: `1e3` är 1000.
- Ange inga enheter och ingen fot-och-tum-notation. Skriv vanliga tal i ritningens enheter.

## Den sista punkten

`@` räknar från **den sista punkten du angav vid någon punktfråga**, i valfritt kommando: ett klick, en fångst eller en inskriven punkt. Den minns mellan kommandon, så du kan starta en ny linje `@0,500` från där den förra slutade. Innan du har angett någon punkt räknar `@` från 0,0.

Några ställen där detta spelar roll:

- I {{cmd:COPY}} är den sista punkten efter den första kopian den kopians punkt. `@600,0` två gånger placerar kopior 600 och 1200 från originalet.
- Efter att du har placerat ett mått är den sista punkten där du placerade måttlinjen, inte måttets slutpunkt.

När du är osäker, använd en absolut punkt, en fångst eller ett direkt avstånd.

## Direkt avståndsinmatning

Ett ensamt tal är ett avstånd från kommandots **baspunkt** (punkten som gummibandet startar från) mot korsmarkören:

1. Flytta korsmarkören i den riktning du vill.
2. Skriv avståndet och tryck på {{key:Enter}}.

Med {{ui:Ortogonalt}} på snäpper riktningen till rakt åt sidan eller rakt upp och ner, vilket gör detta till det snabbaste sättet att rita raka väggar. Om det inte finns någon baspunkt, eller om korsmarkören ligger exakt på den, avvisas talet med meddelandet "Point or option keyword required."

## Vinklar

- I grader, som ett vanligt tal: `30`, `-45`, `112.5`.
- Mäts moturs från den positiva X-riktningen (pekar åt höger): 0 är höger, 90 upp, 180 vänster, 270 eller -90 ner.
- Där en vinkel efterfrågas (rotation, textvinkel) kan du också klicka: vinkeln mäts från baspunkten till klicket. Innan någon baspunkt finns sätter det första klicket den, och prompten frågar efter en andra punkt.

## Avstånd

Där ett avstånd efterfrågas (radie, förskjutning, texthöjd, skalfaktor):

- skriv ett positivt tal (i en ritning med fot och tum även `12'6"` eller `6-1/2`: se [Fot och tum](topic:units-papers-scales#feet-and-inches-and-fractions)), eller
- klicka på en punkt: avståndet från kommandots baspunkt till den, eller
- klicka två punkter när det inte finns någon baspunkt: prompten ändras till `Ange andra punkten`.

"Requires a positive number or two points." betyder att värdet inte var ett tal, eller att det var negativt.

## Aritmetik i ett inskrivet värde

Var som helst där en längd, en koordinat, en vinkel eller ett tal skrivs in (kommandoraden, dynamisk inmatning, egenskapsrutor och dialogrutor) kan du skriva en beräkning med `+`, `-`, `*`, `/` och parenteser i stället för att räkna ut den först:

| Skriv | Ger |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (i en ritning med fot och tum) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, i ritningens enheter (när dess enheter är inställda) |
| `@4+7/16,0` | en punkt 4.4375 till höger om den sista |
| `360/7` | en vinkel på 51.43 grader |

- Ett bindestreck som skrivs in i en längd är fortfarande en del av den: `4-7/16` är 4 7/16 och `24'-6"` är 24 fot 6 tum. För att subtrahera efter ett fotmärke, avsluta längden först, `24'-0"-6"`, eller lägg beräkningen inom parenteser med mellanslag runt bindestrecket, `(24' - 6")` (inom parenteser är ett mellanslag ett mellanslag; annars trycker det på {{key:Enter}}).
- Ett vanligt tal som adderas till en längd är i ritningens enheter; multiplicera eller dividera med ett tal skalar längden. Två längder multiplicerade ger en area, så `2'*3'` avvisas.
- `abs`, `round`, `ceil` och `floor` fungerar också: `round(10/3)`.
- En beräkning som inte kan läsas avvisas med angivelse av var det gick fel, till exempel "The calculation ends too soon (character 3): a value is missing." Ingenting läses någonsin som 0. {{cmd:CAL}} skriver ut en beräknings värde.

## Dynamisk inmatning

{{ui:Dyn}} ({{key:F12}}, i statusfältet) visar värdena vid korsmarkören medan ett kommando frågar efter en punkt.

- Utan någon baspunkt än (en linjes första punkt) är de två fälten **X** och **Y**.
- Därefter är de **avståndet** och **vinkeln** från den sista punkten.

Inmatningen går fortfarande till kommandoraden; fältet vid korsmarkören visar den, och gummibandet följer den.

1. Skriv ett värde: det går in i det markerade fältet.
2. Tryck på {{key:Tab}} (eller ett kommatecken efter X). Värdet låses (visas fetstilt) och nästa fält markeras. Ett låst avstånd håller gummibandet så långt medan du siktar med musen.
3. Skriv det andra värdet, eller sikta bara, och tryck på {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} ritar 50 rakt upp från den sista punkten.

Att trycka på {{key:Enter}} efter ett värde utan {{key:Tab}} fungerar som direkt avståndsinmatning. Fot och tum fungerar också i fälten (`12'6"`). Avstånds- och vinkelfrågor (en cirkels radie, en rotation) visar också sitt värde vid korsmarkören.

## Alternativ och standardvärden

- Alternativ visas inom hakparenteser. Skriv alternativets versalbokstäver (`D` för `[Diameter]`, `CL` för `CLose`) och tryck på {{key:Enter}}. Längre början av ordet fungerar också (`DIA`).
- Ett standardvärde visas inom vinkelparenteser, till exempel `<500>`. Tryck på {{key:Enter}} eller högerklicka för att använda det.

## Andra tangentbordslayouter och det numeriska tangentbordet

Kommandonamn, korta namn och alternativbokstäver är latinska bokstäver. Med en grekisk, kyrillisk (ryska, ukrainska, vitryska, serbiska, makedonska, bulgariska), hebreisk, arabisk, persisk, thai eller koreansk layout aktiv behöver du inte byta layout: när ordet du skrev inte är ett kommando, kort namn eller alternativ i sitt nuvarande skick, läser CadCraft det efter de tangenter du tryckte på. Tangenten märkt `L` på ett latinskt tangentbord startar fortfarande `LINE`, och tangenten `C` svarar fortfarande `Close`, oavsett vilken bokstav layouten har på den. Listan över matchande kommandon ovanför kommandoraden följer samma regel. Text du skriver där ett kommando frågar efter text (innehållet i {{cmd:TEXT}}, ett namn) ändras aldrig.

På layouter där decimaltangenten på det numeriska tangentbordet ger ett kommatecken skriver den tangenten en punkt på kommandoraden och i sifferrutor, så `12.5` kan skrivas på det numeriska tangentbordet. Kommatecknet på huvudtangentbordet separerar fortfarande `x,y`.

Båda kan stängas av i {{ui:Inställningar}}: {{ui:Commands on a non-Latin keyboard layout}} och {{ui:Keypad decimal key}}.

## Koordinatvisningen

Statusfältet visar korsmarkörens X och Y (i UCS när en sådan är inställd), efter fångster och {{ui:Ortogonalt}}. Medan ett kommando har en baspunkt lägger det till `Δ` med avståndet och vinkeln från den punkten, till exempel `Δ 1500 < 30°`: talen du skulle skriva som `@1500<30`.

Använd {{cmd:ID}} för att skriva ut en punkts koordinater och {{cmd:DIST}} för att mäta mellan två punkter.
