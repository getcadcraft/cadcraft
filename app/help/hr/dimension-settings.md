---
title: Postavite veličine kota, decimale i mjerilo
summary: Odaberite visinu teksta, veličinu strelice, decimale i ukupno mjerilo za nove kote, promijenite postojeće i razumijte kako rade stilovi kota u CadCraft-u.
keywords: stil kote, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, ukupno mjerilo, decimale, veličina strelice, mjerilo anotacije, dimtextunit, jedinice u tekstu, mm, cm, m, km, milimetri, metri, dimlfac, dimpost
from: 8ec82a07
---

## Što ćete naučiti

Koliko su veliki tekst kote i strelice, kako ih postaviti za crtež ispisan u mjerilu 1:50 ili 1:100 i kako promijeniti kote koje ste već napravili.

## Kako rade veličine kota

Svaka kota nosi vlastiti skup veličina: visinu teksta, veličinu strelice, decimale, razmak oko teksta, koliko pomoćne mjerne crte prelaze preko kotne linije i koliko su udaljene od objekta. Zadane vrijednosti su bliske uobičajenom ISO stilu:

| Postavka | Zadano | Naredba |
|---|---|---|
| Visina teksta | 2.5 | {{cmd:DIMTXT}} |
| Veličina strelice | 2.5 | {{cmd:DIMASZ}} |
| Decimale | 2 (završne nule se izostavljaju) | {{cmd:DIMDEC}} |
| Razmak oko teksta | 0.625 | {{cmd:DIMGAP}} |
| Produženje preko kotne linije | 1.25 | {{cmd:DIMEXE}} |
| Odmak od objekta | 0.625 | {{cmd:DIMEXO}} |
| Ukupno mjerilo | 1 | {{cmd:DIMSCALE}} |

Svaka veličina se množi s **ukupnim mjerilom**. Postavite veličine kakve želite na papiru (tekst 2.5 mm), a ukupno mjerilo na mjerilo ispisa (50 za 1:50). Tekst je tada visok 2.5 × 50 = 125 jedinica crteža, što se ispisuje kao 2.5 mm.

:::note
Imenovanim stilovima kota upravlja se s {{cmd:DIMSTYLE}}: vidi odjeljak niže. Svaka kota također čuva postavke s kojima je napravljena, pa još uvijek možete promijeniti jednu kotu samu u {{ui:Svojstva}}.
:::

## Postavite veličine za nove kote

Oba načina niže mijenjaju samo kote koje napravite poslije.

### U panelu Trenutne postavke

1. Pritisnite {{key:Esc}} da ništa nije odabrano. Na kartici {{ui:Model}} desni panel glasi {{ui:Trenutne postavke}}.
2. Pomaknite panel prema dolje do {{ui:Nove kote}}, pored redaka sloja, boje, jedinica i {{ui:Sloj 0}} (na malom zaslonu počinje ispod donjeg ruba). Kliknite u {{ui:Ukupno mjerilo}}, upišite `50` i pritisnite {{key:Enter}}.
3. Postavite {{ui:Visina teksta}}, {{ui:Veličina strelice}} i {{ui:Decimale}} na isti način ako želite druge vrijednosti.

Statusna traka potvrđuje svaku, na primjer „Ukupno mjerilo za nove kote: 50“.

### U naredbenom retku

1. Upišite `DIMSCALE` i pritisnite {{key:Enter}}.
2. Na `Enter new value for DIMSCALE <1>` upišite `50` i pritisnite {{key:Enter}}.

Povijest potvrđuje „DIMSCALE = 50. Nove kote ga koriste; odaberite postojeće da promijenite njihove.“ {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} i {{cmd:DIMEXO}} rade isto. Pritisnite {{key:Enter}} na upitu da zadržite trenutnu vrijednost.

### Stope i inči u kotama

Nove kote koriste oblik duljine crteža: postavite ga s {{ui:Oblik duljine}} u {{ui:Trenutne postavke}} ili naredbom {{cmd:UNITS}} (vidi [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions)), a sljedeća kota čita `12'-6 1/2"`. {{cmd:DIMLUNIT}} postavlja samo oblik kota (2 decimale, 3 inženjerski, 4 arhitektonski, 5 razlomački). Za kotu koju ste već napravili, odaberite je i odaberite {{ui:Oblik}} u {{ui:Svojstva}}; uz razlomački oblik, njezin okvir {{ui:Razlomak}} uzima potenciju dvojke (4 = 1/16).

## Kote u mm, cm, m ili km

Kota mjeri u jedinicama crteža. Može tu duljinu zapisati u milimetrima, centimetrima, metrima ili kilometrima, s jedinicom iza broja: zid od 1250 mm glasi `1250 mm`, `125 cm`, `1.25 m` ili `0.00125 km`.

1. Najprije postavite {{ui:Jedinice}} crteža u {{ui:Trenutne postavke}} (vidi [Jedinice, veličine papira i mjerila](topic:units-papers-scales#drawing-units)), da CadCraft zna što je jedna jedinica crteža. Crtež bez jedinica čita se kao milimetri, a {{cmd:DIMTEXTUNIT}} to kaže.
2. Za nove kote: pritisnite {{key:Esc}} da ništa nije odabrano, pa pod {{ui:Nove kote}} odaberite {{ui:Jedinice u tekstu}}: {{ui:Jedinice crteža}}, `mm`, `cm`, `m` ili `km`.
3. Za kote koje ste već napravili: odaberite ih i u {{ui:Svojstva}} › {{ui:Primarne jedinice}} odaberite {{ui:Jedinice u tekstu}}.

Ili upišite {{cmd:DIMTEXTUNIT}} (`DTU`) i odgovorite `D`, `MM`, `CM`, `M` ili `KM`: s odabranim kotama mijenja ih (jedan korak poništavanja), a bez odabira postavlja nove kote.

{{ui:Decimale}} ({{cmd:DIMDEC}}) i dalje određuju koliko decimalnih mjesta se prikazuje: s metrima i 3 decimale, 1234 mm glasi `1.234 m`. Tekst se piše kao decimalni broj. Na listu se kote mjere u papirnoj jedinici lista (milimetri ili inči).

Spremljen DWG ili DXF čuva izbor kao mjerilo mjere kote (DIMLFAC) i sufiks (DIMPOST, ` m`), pa drugi programi prikazuju isti tekst. Ako kasnije promijenite {{ui:Jedinice}} crteža, kote zapisane u mm, cm, m ili km se ponovno prilagođavaju, pa i dalje govore točnu duljinu. {{ui:Postavljeno ručno (mjerilo ili sufiks)}} znači da su {{ui:Mjerilo mjere}} ili sufiks kote postavljeni na neki drugi način; odaberite jedinicu da ih zamijenite.

## Promijenite kote koje ste već napravili

1. Kliknite jednu kotu. Naslov desnog panela glasi {{ui:Kota}}.
2. Postavke su u odjeljcima; pomaknite panel prema dolje do kasnijih:
   - {{ui:Općenito}}: {{ui:Stil kotiranja}}
   - {{ui:Geometrija}}: {{ui:Vrsta}} i {{ui:Mjera}} (samo za čitanje)
   - {{ui:Tekst}}: {{ui:Zamjena teksta}} i {{ui:Visina teksta}}
   - {{ui:Linije i strelice}}: {{ui:Veličina strelice}}
   - {{ui:Prilagodba}}: {{ui:Ukupno mjerilo}}
   - {{ui:Primarne jedinice}}: {{ui:Decimale}}
3. Upišite novu vrijednost i pritisnite {{key:Enter}}.

Kota se odmah ponovno crta. Za kutne kote, {{ui:Decimale (°)}} postavlja decimale kuta.

:::note
Kad je odabrano nekoliko kota, panel prikazuje retke koje dijele, a vrijednost koja se razlikuje među njima glasi {{ui:Razlikuje se}}. Vrijednost koju upišete mijenja svaku odabranu kotu u jednom koraku, pa jedan {{key:Mod+Z}} sve vraća.
:::

## Kote iz otvorenih crteža

Kota iz otvorenog DWG ili DXF prikazuje se točno onako kako ju je nacrtao drugi program. Njezin panel kaže „Prikazano kako ga je nacrtao program koji ga je napravio. Promijenite ga i CadCraft ga ponovno nacrta u svom stilu.“ Čim promijenite bilo koju vrijednost, pomaknete ručku ili pomaknete kotu, CadCraft je ponovno crta sa svojim strelicama i fontom, koristeći veličine koje je pročitao iz datoteke.

Neke kote se mogu samo pročitati kao nacrtane, a ne kao uređive kote; tada panel prikazuje „Nacrtano iz“ i naziv bloka, a okvir „O ovoj datoteci“ ih broji.

## Česte greške

- **Promjena DIMSCALE ništa nije promijenila na zaslonu.** Postavka je za nove kote. Odaberite postojeće i promijenite {{ui:Ukupno mjerilo}} u panelu.
- **Decimale prikazuju manje znamenki nego što ste postavili.** Završne nule se izostavljaju: uz 2 decimale prikazuje se `1250` i `1250.5`, a ne `1250.00`.
- **Tekst je pravilne visine na papiru u viewportu, ali pogrešan u ispisu modela.** Ukupno mjerilo mora odgovarati mjerilu na kojem ispisujete. Ispis na Prilagodi papiru daje čudno mjerilo; odaberite standardno mjerilo u dijalogu ispisa.
- **Jedinice poput mm ili m u tekstu.** Odaberite {{ui:Jedinice u tekstu}} (vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Za bilo koju drugu riječ iza broja upišite je u zamjeni: `<> TYP.`.

## Imenovani stilovi kota

Upišite `DIMSTYLE` (`D`) da otvorite {{ui:Upravitelj stilova kotiranja}}. Popisuje stilove crteža, koliko kota koristi svaki i koji je trenutan. **Standard** je uvijek tu.

- {{ui:Postavi aktivno}}: nove kote koriste postavke tog stila i nose njegov naziv.
- {{ui:Novi…}}: novi stil koji počinje kao kopija onoga koji odaberete.
- {{ui:Izmijeni…}}: ista polja kao odjeljak kote u {{ui:Svojstva}} (linije i strelice, tekst, prilagodba, jedinice, alternativne jedinice, tolerancije). Pritisnite {{ui:U redu}} i stil se mijenja **i svaka kota koja ga koristi mijenja se s njim**, postavka po postavka. Postavka koju ste promijenili samo na jednoj koti ostaje kakva jest, osim ako je stil ne mijenja.
- {{ui:Preimenuj…}} i {{ui:Izbriši}}: Standard se ne može preimenovati niti izbrisati, kao ni trenutni stil ili stil koji koriste kote.
- {{ui:Usporedi…}}: što se razlikuje između dva stila.
- {{ui:Primijeni na odabrano}}: najprije odaberite kote; one preuzimaju postavke stila i njegov naziv.

`-DIMSTYLE` radi isto u naredbenom retku: `Restore`, `Save` (trenutne postavke, uključujući ono što ste upisali s {{cmd:DIMTXT}} i ostalima, pod nazivom), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stilovi se spremaju u DWG ili DXF (u njegovoj tablici stilova kota) i čitaju se iz datoteka koje otvorite. Trenutni stil se ne sprema: crtež se otvara sa Standard kao trenutnim. Standard zadržava vlastite postavke dok je neki drugi stil trenutan.

## Promjena teksta kote i pomoćnih mjernih crta

{{cmd:DIMEDIT}} (`DED`) radi na kotama koje odaberete: **Home** vraća tekst na mjesto koje mu određuje stil, **New** upisuje drugi tekst (`<>` označava izmjereno), **Rotate** okreće tekst, **Oblique** kosi pomoćne mjerne crte linearnih i poravnatih kota pod kutom koji upišete (pritisnite {{key:Enter}} za bez kuta). {{cmd:DIMTEDIT}} pomiče tekst na **Left**, **Right** ili **Center** kotne linije, ili ga okreće (**Angle**), ili ga šalje na **Home**. Tekst uvijek stoji na kotnoj liniji: ne može se povući na slobodno mjesto.
