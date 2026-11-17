---
title: Podešavanje veličina kota, decimala i razmere
summary: Izaberi visinu teksta, veličinu strelice, decimale i ukupnu razmeru za nove kote, promeni postojeće i razumi kako stilovi kota rade u CadCraft-u.
keywords: stil kote, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, ukupna razmera, decimale, veličina strelice, razmera anotacije, dimtextunit, jedinice u tekstu, mm, cm, m, km, milimetri, metri, dimlfac, dimpost
from: 8ec82a07
---

## Šta ćeš naučiti

Koliko su veliki tekst i strelice kote, kako ih postaviti za crtež štampan u 1:50 ili 1:100, i kako promeniti kote koje si već napravio.

## Kako rade veličine kota

Svaka kota nosi sopstveni skup veličina: visinu teksta, veličinu strelice, decimale, razmak oko teksta, koliko pomoćne linije idu preko linije kote i koliko daleko počinju od objekta. Podrazumevane vrednosti su bliske uobičajenom ISO stilu:

| Podešavanje | Podrazumevano | Komanda |
|---|---|---|
| Visina teksta | 2.5 | {{cmd:DIMTXT}} |
| Veličina strelice | 2.5 | {{cmd:DIMASZ}} |
| Decimale | 2 (suvišne nule se izostavljaju) | {{cmd:DIMDEC}} |
| Razmak oko teksta | 0.625 | {{cmd:DIMGAP}} |
| Produženje preko linije kote | 1.25 | {{cmd:DIMEXE}} |
| Odmak od objekta | 0.625 | {{cmd:DIMEXO}} |
| Ukupna razmera | 1 | {{cmd:DIMSCALE}} |

Svaka veličina se množi **ukupnom razmerom**. Postavi veličine kakve želiš na papiru (tekst 2.5 mm), a ukupnu razmeru postavi na razmeru štampanja (50 za 1:50). Tekst je tada visok 2.5 × 50 = 125 jedinica crteža, pa se štampa kao 2.5 mm.

:::note
Imenovanim stilovima kota upravlja se preko {{cmd:DIMSTYLE}}: vidi odeljak ispod. Svaka kota takođe pamti podešavanja sa kojima je napravljena, pa još uvek možeš promeniti jednu kotu samu u {{ui:Svojstva}}.
:::

## Postavi veličine za nove kote

Oba načina ispod menjaju samo kote koje napraviš posle.

### U panelu Trenutna podešavanja

1. Pritisni {{key:Esc}} da ništa ne bude izabrano. Na kartici {{ui:Model}} desni panel glasi {{ui:Trenutna podešavanja}}.
2. Skroluj panel do {{ui:Nove kote}}, pored redova sloja, boje, jedinica i {{ui:Sloj 0}} (na malom ekranu počinje ispod donje ivice). Klikni u {{ui:Ukupna razmera}}, ukucaj `50` i pritisni {{key:Enter}}.
3. Postavi {{ui:Visina teksta}}, {{ui:Veličina strelice}} i {{ui:Decimale}} na isti način ako želiš druge vrednosti.

Statusna traka potvrđuje svaku, na primer „Ukupna razmera za nove kote: 50“.

### U komandnoj liniji

1. Ukucaj `DIMSCALE` i pritisni {{key:Enter}}.
2. Kod `Enter new value for DIMSCALE <1>` ukucaj `50` i pritisni {{key:Enter}}.

Istorija potvrđuje „DIMSCALE = 50. Nove kote koriste to; izaberi postojeće da promeniš njihove.“ {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} i {{cmd:DIMEXO}} rade na isti način. Pritisni {{key:Enter}} na upitu da zadržiš tekuću vrednost.

### Stope i inči u kotama

Nove kote koriste format dužine crteža: postavi ga pomoću {{ui:Format dužine}} u {{ui:Trenutna podešavanja}} ili {{cmd:UNITS}} (vidi [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions)), pa sledeća kota čita `12'-6 1/2"`. {{cmd:DIMLUNIT}} postavlja samo format kota (2 decimale, 3 inženjerski, 4 arhitektonski, 5 razlomački). Za kotu koju si već napravio, izaberi je i izaberi {{ui:Format}} u {{ui:Svojstva}}; uz razlomački format, njeno polje {{ui:Razlomak}} uzima stepen dvojke (4 = 1/16).

## Kote u mm, cm, m ili km

Kota meri u jedinicama crteža. Može tu dužinu da ispiše u milimetrima, centimetrima, metrima ili kilometrima, sa jedinicom iza broja: zid od 1250 mm glasi `1250 mm`, `125 cm`, `1.25 m` ili `0.00125 km`.

1. Prvo postavi {{ui:Jedinice}} crteža u {{ui:Trenutna podešavanja}} (vidi [Jedinice, veličine papira i razmere](topic:units-papers-scales#drawing-units)), da CadCraft zna šta je jedna jedinica crteža. Crtež bez jedinica čita se kao milimetri, a {{cmd:DIMTEXTUNIT}} to kaže.
2. Za nove kote: pritisni {{key:Esc}} da ništa ne bude izabrano, pa pod {{ui:Nove kote}} izaberi {{ui:Jedinice u tekstu}}: {{ui:Jedinice crteža}}, `mm`, `cm`, `m` ili `km`.
3. Za kote koje si već napravio: izaberi ih, pa u {{ui:Svojstva}} › {{ui:Osnovne jedinice}} izaberi {{ui:Jedinice u tekstu}}.

Ili ukucaj {{cmd:DIMTEXTUNIT}} (`DTU`) i odgovori `D`, `MM`, `CM`, `M` ili `KM`: sa izabranim kotama menja njih (jedan korak opoziva), a bez izabranog menja nove kote.

{{ui:Decimale}} ({{cmd:DIMDEC}}) i dalje postavljaju koliko decimalnih mesta se vidi: uz metre i 3 decimale, 1234 mm glasi `1.234 m`. Tekst se piše kao decimalan broj. Na listu se kote mere u papirnoj jedinici lista (milimetri ili inči).

Sačuvan DWG ili DXF čuva izbor kao razmeru merenja kote (DIMLFAC) i sufiks (DIMPOST, ` m`), pa drugi programi prikazuju isti tekst. Ako kasnije promeniš {{ui:Jedinice}} crteža, kote zapisane u mm, cm, m ili km se ponovo uklapaju, pa i dalje kažu tačnu dužinu. {{ui:Podešeno ručno (razmera ili sufiks)}} znači da su {{ui:Razmera merenja}} ili sufiks kote postavljeni na drugi način; izaberi jedinicu da ih zameniš.

## Promeni kote koje si već napravio

1. Klikni jednu kotu. Naslov desnog panela glasi {{ui:Kota}}.
2. Podešavanja su u odeljcima; skroluj panel da stigneš do kasnijih:
   - {{ui:Opšte}}: {{ui:Stil kote}}
   - {{ui:Geometrija}}: {{ui:Vrsta}} i {{ui:Merenje}} (samo za čitanje)
   - {{ui:Tekst}}: {{ui:Zamena teksta}} i {{ui:Visina teksta}}
   - {{ui:Linije i strelice}}: {{ui:Veličina strelice}}
   - {{ui:Uklapanje}}: {{ui:Ukupna razmera}}
   - {{ui:Osnovne jedinice}}: {{ui:Decimale}}
3. Ukucaj novu vrednost i pritisni {{key:Enter}}.

Kota se odmah ponovo crta. Za uglovne kote, {{ui:Decimale (°)}} postavlja decimale ugla.

:::note
Kada je izabrano više kota, panel prikazuje redove koje dele, a vrednost koja se razlikuje među njima glasi {{ui:Različito}}. Vrednost koju ukucaš menja svaku izabranu kotu u jednom koraku, pa jedan {{key:Mod+Z}} vraća sve.
:::

## Kote iz otvorenih crteža

Kota iz otvorenog DWG ili DXF prikazuje se tačno onako kako ju je nacrtao drugi program. Njen panel kaže „Prikazano kako ju je nacrtao program koji ju je napravio. Promeni je i CadCraft je ponovo crta u svom stilu.“ Čim promeniš bilo koju vrednost, pomeriš hvataljku ili pomeriš kotu, CadCraft je ponovo crta sa svojim strelicama i fontom, koristeći veličine koje je pročitao iz datoteke.

Neke kote se mogu samo pročitati kao nacrtane, a ne kao kote koje se mogu menjati; panel tada prikazuje „Nacrtano iz“ i ime bloka, a okvir „O ovoj datoteci“ ih broji.

## Česte greške

- **Promena DIMSCALE ništa nije promenila na ekranu.** Podešavanje važi za nove kote. Izaberi postojeće i promeni {{ui:Ukupna razmera}} u panelu.
- **Decimale prikazuju manje cifara nego što je postavljeno.** Suvišne nule se izostavljaju: uz 2 decimale vidi se `1250` i `1250.5`, a ne `1250.00`.
- **Tekst je prave visine na papiru u prozoru pogleda, ali pogrešan u štampi modela.** Ukupna razmera mora da odgovara razmeri na kojoj štampaš. Štampa na {{ui:Uklopi na papir}} daje čudnu razmeru; izaberi standardnu razmeru u dijalogu za štampanje.
- **Jedinice poput mm ili m u tekstu.** Izaberi {{ui:Jedinice u tekstu}} (vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Za bilo koju drugu reč iza broja, ukucaj je u zamenu: `<> TYP.`.

## Imenovani stilovi kota

Ukucaj `DIMSTYLE` (`D`) da otvoriš {{ui:Upravljanje stilovima kota}}. Prikazuje stilove crteža, koliko kota koristi svaki i koji je tekući. **Standard** je uvek tu.

- {{ui:Postavi kao tekuće}}: nove kote koriste podešavanja tog stila i nose njegovo ime.
- {{ui:Novi…}}: novi stil koji počinje kao kopija onog koji izabereš.
- {{ui:Izmeni…}}: ista polja kao odeljak kote u {{ui:Svojstva}} (linije i strelice, tekst, uklapanje, jedinice, alternativne jedinice, tolerancije). Pritisni {{ui:U redu}} i stil se menja, **i svaka kota koja ga koristi menja se zajedno sa njim**, podešavanje po podešavanje. Podešavanje koje si promenio na jednoj koti sam ostaje kakvo jeste, osim ako ga stil ne promeni.
- {{ui:Preimenuj…}} i {{ui:Izbriši}}: Standard se ne može preimenovati ni brisati, kao ni tekući stil ili stil koji koriste kote.
- {{ui:Uporedi…}}: šta se razlikuje između dva stila.
- {{ui:Primeni na izabrane}}: prvo izaberi kote; one uzimaju podešavanja stila i njegovo ime.

`-DIMSTYLE` radi isto u komandnoj liniji: `Restore`, `Save` (tekuća podešavanja, uključujući ono što si ukucao sa {{cmd:DIMTXT}} i ostalima, pod imenom), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stilovi se čuvaju u DWG ili DXF (u tabeli stilova kota) i čitaju se iz datoteka koje otvoriš. *Tekući* stil se ne čuva: crtež se otvara sa Standard kao tekućim. Standard zadržava svoja podešavanja dok je drugi stil tekući.

## Promena teksta kote i pomoćnih linija

{{cmd:DIMEDIT}} (`DED`) radi na kotama koje izabereš: **Home** vraća tekst tamo gde ga stil postavlja, **New** upisuje drugi tekst (`<>` stoji za izmerenu vrednost), **Rotate** okreće tekst, **Oblique** kosi pomoćne linije linearnih i poravnatih kota pod uglom koji ukucaš (pritisni {{key:Enter}} za bez ugla). {{cmd:DIMTEDIT}} pomera tekst na **Left**, **Right** ili **Center** linije kote, ili ga okreće (**Angle**), ili ga šalje **Home**. Tekst uvek stoji na liniji kote: ne može se prevući na slobodno mesto.
