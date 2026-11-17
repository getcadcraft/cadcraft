---
title: Postavite veličine kota, decimale i razmjeru
summary: Odaberite visinu teksta, veličinu strelice, decimale i opštu razmjeru za nove kote, promijenite postojeće i shvatite kako stilovi kota rade u CadCraft-u.
keywords: stil kote, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, opšta razmjera, decimale, veličina strelice, razmjera anotacije, dimtextunit, jedinice u tekstu, mm, cm, m, km, milimetri, metri, dimlfac, dimpost
from: 8ec82a07
---

## Šta ćete naučiti

Koliko su veliki tekst i strelice kote, kako ih postaviti za crtež štampan u 1:50 ili 1:100, i kako promijeniti kote koje ste već napravili.

## Kako rade veličine kota

Svaka kota nosi vlastiti skup veličina: visina teksta, veličina strelice, decimale, razmak oko teksta, koliko se pomoćne linije protežu preko linije kote i koliko daleko počinju od objekta. Podrazumijevane vrijednosti su bliske uobičajenom ISO stilu:

| Postavka | Podrazumijevano | Naredba |
|---|---|---|
| Visina teksta | 2.5 | {{cmd:DIMTXT}} |
| Veličina strelice | 2.5 | {{cmd:DIMASZ}} |
| Decimale | 2 (završne nule se izostavljaju) | {{cmd:DIMDEC}} |
| Razmak oko teksta | 0.625 | {{cmd:DIMGAP}} |
| Produžetak preko linije kote | 1.25 | {{cmd:DIMEXE}} |
| Odmak od objekta | 0.625 | {{cmd:DIMEXO}} |
| Opšta razmjera | 1 | {{cmd:DIMSCALE}} |

Svaka veličina se množi s **opštom razmjerom**. Postavite veličine onako kako ih želite na papiru (tekst od 2.5 mm), a opštu razmjeru na razmjeru štampe (50 za 1:50). Tekst je tada visok 2.5 × 50 = 125 jedinica crteža, što se štampa kao 2.5 mm.

:::note
Imenovanim stilovima kota upravlja {{cmd:DIMSTYLE}}: vidi odjeljak ispod. Svaka kota takođe zadržava postavke s kojima je napravljena, pa još uvijek možete promijeniti jednu kotu samu u {{ui:Svojstva}}.
:::

## Postavite veličine za nove kote

Oba načina ispod mijenjaju samo kote koje napravite poslije.

### U panelu Trenutne postavke

1. Pritisnite {{key:Esc}} da ništa nije izabrano. Na kartici {{ui:Model}} desni panel glasi {{ui:Trenutne postavke}}.
2. Skrolujte panel dolje do {{ui:Nove kote}}, pored redova za sloj, boju, jedinice i {{ui:Sloj 0}} (na malom ekranu počinje ispod donje ivice). Kliknite u {{ui:Opšta razmjera}}, upišite `50` i pritisnite {{key:Enter}}.
3. Postavite {{ui:Visina teksta}}, {{ui:Veličina strelice}} i {{ui:Decimale}} na isti način ako želite druge vrijednosti.

Statusna traka potvrđuje svaku, na primjer „Opšta razmjera za nove kote: 50“.

### U komandnoj liniji

1. Upišite `DIMSCALE` i pritisnite {{key:Enter}}.
2. Kod `Enter new value for DIMSCALE <1>` upišite `50` i pritisnite {{key:Enter}}.

Istorija potvrđuje „DIMSCALE = 50. Nove kote je koriste; izaberite postojeće da promijenite njihovu.“ {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} i {{cmd:DIMEXO}} rade na isti način. Pritisnite {{key:Enter}} na upitu da zadržite trenutnu vrijednost.

### Stope i palci u kotama

Nove kote koriste format dužine crteža: postavite ga s {{ui:Format dužine}} u {{ui:Trenutne postavke}} ili {{cmd:UNITS}} (vidi [Stope i palci](topic:units-papers-scales#feet-and-inches-and-fractions)), a sljedeća kota čita `12'-6 1/2"`. {{cmd:DIMLUNIT}} postavlja samo format kota (2 decimale, 3 inženjerski, 4 arhitektonski, 5 razlomački). Za kotu koju ste već napravili, izaberite je i odaberite {{ui:Format}} u {{ui:Svojstva}}; uz razlomački format, njeno polje {{ui:Razlomak}} uzima stepen dvojke (4 = 1/16).

## Kote u mm, cm, m ili km

Kota mjeri u jedinicama crteža. Može tu dužinu napisati u milimetrima, centimetrima, metrima ili kilometrima, s jedinicom iza broja: zid od 1250 mm čita se kao `1250 mm`, `125 cm`, `1.25 m` ili `0.00125 km`.

1. Prvo postavite {{ui:Jedinice}} crteža u {{ui:Trenutne postavke}} (vidi [Jedinice, veličine papira i razmjere](topic:units-papers-scales#drawing-units)), da CadCraft zna šta je jedna jedinica crteža. Crtež bez jedinica čita se kao milimetri, a {{cmd:DIMTEXTUNIT}} to kaže.
2. Za nove kote: pritisnite {{key:Esc}} da ništa nije izabrano, pa pod {{ui:Nove kote}} izaberite {{ui:Jedinice u tekstu}}: {{ui:Jedinice crteža}}, `mm`, `cm`, `m` ili `km`.
3. Za kote koje ste već napravili: izaberite ih, pa u {{ui:Svojstva}} › {{ui:Osnovne jedinice}} izaberite {{ui:Jedinice u tekstu}}.

Ili upišite {{cmd:DIMTEXTUNIT}} (`DTU`) i odgovorite `D`, `MM`, `CM`, `M` ili `KM`: ako su kote izabrane, mijenja ih (jedan korak poništavanja); ako ništa nije izabrano, postavlja nove kote.

{{ui:Decimale}} ({{cmd:DIMDEC}}) i dalje određuje koliko decimalnih mjesta se prikazuje: uz metre i 3 decimale, 1234 mm čita se `1.234 m`. Tekst se piše kao decimalni broj. Na listu se kote mjere u jedinici papira lista (milimetrima ili inčima).

Sačuvani DWG ili DXF čuva izbor kao mjernu razmjeru kote (DIMLFAC) i sufiks (DIMPOST, ` m`), pa drugi programi prikazuju isti tekst. Ako kasnije promijenite {{ui:Jedinice}} crteža, kote napisane u mm, cm, m ili km se ponovo prilagođavaju, pa i dalje tačno kažu dužinu. {{ui:Postavljeno ručno (razmjera ili sufiks)}} znači da su {{ui:Razmjera mjerenja}} ili sufiks kote postavljeni na neki drugi način; izaberite jedinicu da ih zamijenite.

## Promjena kota koje ste već napravili

1. Kliknite jednu kotu. Naslov desnog panela glasi {{ui:Kota}}.
2. Postavke su u odjeljcima; skrolujte panel dolje do kasnijih:
   - {{ui:Opšte}}: {{ui:Stil kote}}
   - {{ui:Geometrija}}: {{ui:Vrsta}} i {{ui:Mjerenje}} (samo za čitanje)
   - {{ui:Tekst}}: {{ui:Zamjenski tekst}} i {{ui:Visina teksta}}
   - {{ui:Linije i strelice}}: {{ui:Veličina strelice}}
   - {{ui:Uklapanje}}: {{ui:Opšta razmjera}}
   - {{ui:Osnovne jedinice}}: {{ui:Decimale}}
3. Upišite novu vrijednost i pritisnite {{key:Enter}}.

Kota se odmah ponovo crta. Za kutne kote, {{ui:Decimale (°)}} postavlja decimale ugla.

:::note
Kada je izabrano više kota, panel prikazuje redove koje dijele, a vrijednost koja se među njima razlikuje glasi {{ui:Različito}}. Vrijednost koju upišete mijenja svaku izabranu kotu u jednom koraku, pa jedan {{key:Mod+Z}} vraća sve.
:::

## Kote iz otvorenih crteža

Kota iz otvorenog DWG ili DXF prikazuje se tačno onako kako ju je nacrtao drugi program. Njen panel kaže: „Prikazano onako kako ju je nacrtao program koji ju je napravio. Ako je promijenite, CadCraft je ponovo crta u svom stilu.“ Čim promijenite bilo koju vrijednost, pomjerite hvatište ili pomjerite kotu, CadCraft je ponovo crta sa svojim strelicama i fontom, koristeći veličine koje je pročitao iz datoteke.

Neke kote se mogu samo pročitati kao nacrtane, ne kao kote koje se mogu uređivati; panel tada prikazuje „Nacrtano iz“ i naziv bloka, a okvir „O ovoj datoteci“ ih broji.

## Česte greške

- **Promjena DIMSCALE ništa nije promijenila na ekranu.** Postavka važi za nove kote. Izaberite postojeće i promijenite {{ui:Opšta razmjera}} u panelu.
- **Decimale prikazuju manje cifara nego što je postavljeno.** Završne nule se izostavljaju: uz 2 decimale prikazuje se `1250` i `1250.5`, a ne `1250.00`.
- **Tekst je prave visine na papiru u prozoru prikaza, ali pogrešan u štampi modela.** Opšta razmjera mora odgovarati razmjeri na kojoj štampate. Štampanje uz Uklapanje na papir daje neparnu razmjeru; izaberite standardnu razmjeru u dijalogu štampe.
- **Jedinice poput mm ili m u tekstu.** Izaberite {{ui:Jedinice u tekstu}} (vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Za bilo koju drugu riječ iza broja, upišite je u zamjenski tekst: `<> TYP.`.

## Imenovani stilovi kota

Upišite `DIMSTYLE` (`D`) da otvorite {{ui:Upravljanje stilovima kota}}. Prikazuje stilove crteža, koliko kota koristi svaki i koji je trenutni. **Standard** je uvijek tu.

- {{ui:Postavi trenutno}}: nove kote koriste postavke tog stila i nose njegov naziv.
- {{ui:Novi…}}: novi stil koji počinje kao kopija onog koji izaberete.
- {{ui:Izmijeni…}}: ista polja kao odjeljak kote u {{ui:Svojstva}} (linije i strelice, tekst, uklapanje, jedinice, alternativne jedinice, tolerancije). Pritisnite {{ui:U redu}} i stil se mijenja **i svaka kota koja ga koristi mijenja se s njim**, postavka po postavka. Postavka koju ste promijenili samo na jednoj koti ostaje kakva jeste, osim ako je stil promijenio tu postavku.
- {{ui:Preimenuj…}} i {{ui:Izbriši}}: Standard se ne može preimenovati ni brisati, niti trenutni stil ili onaj koji koriste kote.
- {{ui:Uporedi…}}: šta se razlikuje između dva stila.
- {{ui:Primijeni na izabrano}}: prvo izaberite kote; one uzimaju postavke stila i njegov naziv.

`-DIMSTYLE` radi isto u komandnoj liniji: `Restore`, `Save` (trenutne postavke, uključujući ono što ste upisali s {{cmd:DIMTXT}} i ostalima, pod nazivom), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stilovi se čuvaju u DWG ili DXF (u njegovoj tabeli stilova kota) i čitaju iz datoteka koje otvorite. *Trenutni* stil se ne čuva: crtež se otvara sa Standard kao trenutnim. Standard zadržava svoje postavke dok je drugi stil trenutan.

## Promjena teksta i pomoćnih linija kote

{{cmd:DIMEDIT}} (`DED`) radi na kotama koje izaberete: **Početna (H)** vraća tekst tamo gdje ga stil smješta, **Novi (N)** upisuje drugi tekst (`<>` označava mjerenje), **Rotiraj** okreće tekst, **Nakošeno (O)** kosi pomoćne linije linearnih i poravnatih kota pod uglom koji upišete (pritisnite {{key:Enter}} za bez ugla). {{cmd:DIMTEDIT}} pomjera tekst na **Lijevo**, **Desno (R)** ili **Centar** linije kote, ili ga okreće (**Ugao (A)**), ili ga šalje na **Početna (H)**. Tekst uvijek stoji na liniji kote: ne može se prevući na slobodno mjesto.
