---
title: Jedinice, veličine papira i razmere
summary: Šta znače jedinice crteža u CadCraft-u, veličine papira za listove i štampanje, svaka standardna razmera, i kako se veličine teksta i kota odnose na razmeru štampanja.
keywords: jedinice, milimetri, inči, stope, stope i inči, arhitektonski, inženjerski, razlomak, razlomci, lunits, format dužine, preciznost, metri, veličina papira, a3, a1, arch d, ansi, tabloid, letter, razmera, 1:100, 1/4 inča, arhitektonska razmera, inženjerska razmera, insunits
from: 8346236a
---

## Jedinice crteža

Crtate u punoj veličini, u jedinicama crteža. Ono što jedna jedinica predstavlja je podešavanje **Jedinice** crteža:

1. Pritisnite {{key:Esc}} da ništa ne bude izabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutna podešavanja}} izaberite {{ui:Jedinice}}: {{ui:Bez jedinica}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Inči}} ili {{ui:Stope}}.

Kote mogu pisati svoje dužine u milimetrima, centimetrima, metrima ili kilometrima bez obzira na jedinicu crteža: vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Promena jedinica ništa ne menja po veličini. Menja samo način na koji se čitaju razmere na listovima i u štampanju, i koje razmere se nude. Crtež otvoren iz DWG-a ili DXF-a zadržava jedinice sačuvane u datoteci; odeljak {{ui:Crtež}} u levom panelu ih prikazuje.

Crtež {{ui:Bez jedinica}} tretira se kao da je u jedinici papira: milimetri na ISO papiru, inči na američkom papiru.

## Stope i inči, i razlomci

Kako se dužine **pišu i kucaju** je zasebno podešavanje, format dužine. Ono ne menja geometriju, samo kako brojevi izgledaju i šta možete ukucati.

1. Pritisnite {{key:Esc}} da ništa ne bude izabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutna podešavanja}} izaberite {{ui:Format dužine}}: {{ui:Decimalni}} (`150.5`), {{ui:Arhitektonski}} (`12'-6 1/2"`), {{ui:Inženjerski}} (`12'-6.5"`), {{ui:Razlomak}} (`150 1/2`) ili {{ui:Naučni}} (`1.505E+02`).
3. Izaberite {{ui:Preciznost}}: decimalna mesta, ili najmanji razlomak (1/16 je uobičajen izbor za arhitektonski).

Ili ukucajte {{cmd:UNITS}} (`UN`) i odgovorite na njena dva pitanja.

Sa {{ui:Arhitektonski}} ili {{ui:Inženjerski}}, jedna jedinica crteža je jedan inč, kao u AutoCAD-u: postavite i {{ui:Jedinice}} na {{ui:Inči}}. Tada možete ukucati dužine u stopama i inčima bilo gde gde se traži dužina, i u poljima {{ui:Svojstva}}:

| Ukucate | Znači |
|---|---|
| `12'6"` ili `12'-6"` | 12 stopa 6 inča (150) |
| `12'6-1/2"` | 12 stopa 6½ inča. Koristite crticu pre razlomka: {{key:Space}} je {{key:Enter}} u komandnoj liniji. |
| `12'` | 12 stopa |
| `6"` ili `6` | 6 inča: goli broj je u inčima |
| `1/2`, `6-1/2` | razlomci rade u bilo kom formatu |

Tačke primaju iste dužine: `@12'6",0` ili `@10'<90`. Uglovi ostaju u stepenima.

Format se prikazuje u istoriji ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: površine kao kvadratni inči i kvadratne stope), u {{ui:Svojstva}}, u koordinatama u statusnoj traci i u **novim kotama**. Listovi zadržavaju svoje jedinice papira (milimetri ili inči) kao decimalne brojeve.

:::note
Format dužine se čuva u DWG i DXF datotekama, a svaka kota zadržava svoj: sačuvani crtež se ponovo otvara onako kako ste ga ostavili.
:::

## Veličine papira

Listovi i štampanje modela koriste ove veličine, u oba položaja:

| Papir | Veličina | Jedinica na listu |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetri |
| ISO A3 | 420 × 297 mm | milimetri |
| ISO A2 | 594 × 420 mm | milimetri |
| ISO A1 | 841 × 594 mm | milimetri |
| ISO A0 | 1189 × 841 mm | milimetri |
| Letter | 11 × 8.5 in | inči |
| Legal | 14 × 8.5 in | inči |
| Tabloid / ANSI B | 17 × 11 in | inči |
| ANSI C | 22 × 17 in | inči |
| ANSI D | 34 × 22 in | inči |
| ARCH C | 24 × 18 in | inči |
| ARCH D | 36 × 24 in | inči |
| ARCH E | 48 × 36 in | inči |

Novi listovi počinju na ISO A3 za metričke crteže i crteže bez jedinica, a na Tabloidu za crteže u inčima ili stopama. Štampanje modela počinje na ISO A4 ili Letter na isti način, a zatim pamti vaš poslednji izbor. Listovi iz otvorenih datoteka zadržavaju svoju veličinu, prikazanu kao „Prilagođeno“ kada nije jedna od ovih.

## Razmere

Razmera `1:n` znači da jedna jedinica na papiru prikazuje n istih jedinica u modelu, tako da 1:100 prikazuje 1 m zgrade kao 10 mm papira. CadCraft to računa iz jedinica crteža i jedinice papira.

**Metričke razmere**, nude se za svaki crtež: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektonske razmere**, nude se kada su jedinice inči ili stope: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženjerske razmere**, nude se kada su jedinice inči ili stope: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vaše sopstvene razmere.** Ukucajte `SCALELISTEDIT` (ili `SCALELIST`) da dodate razmeru po svom izboru, kao što je 1:75 ili razmera lokacije 2 papira : 300 crteža. `Add` traži naziv, zatim jedinice papira i jedinice crteža (naziv kao `1:75` nudi sopstvene brojeve; pritisnite {{key:Enter}} da ih prihvatite). `Edit`, `Delete`, `List` i `Reset` rade na istoj listi; `Reset` se vraća na standardnu listu. Vaše razmere se pojavljuju posle standardnih u listi razmera prozora pogleda u {{ui:Svojstva}} i u dijalogu {{ui:Štampaj u PDF}}; prozor pogleda u toj razmeri prikazuje se sa svojim nazivom, a čuvaju se u crtežu (DWG i DXF 2000) kao lista razmera crteža. Crtež otvoren iz drugog programa donosi svoju listu; razmere koje ima, a poklapaju se sa standardnom, ne prikazuju se dvaput.

Kada je prozor pogleda usmeren pomoću {{ui:Prikaži ceo model}} ili {{ui:Izaberi prozor na modelu…}}, CadCraft bira najveću standardnu razmeru koja staje. {{ui:Uklopi ceo model}} postavlja tačnu razmeru, koja se prikazuje kao običan odnos.

## Veličine na papiru i u modelu

Veličine teksta i kota su u jedinicama prostora u kojem crtate.

| Želite na papiru | Nacrtano na listu | Nacrtano u modelu u 1:50 (mm crtež) | Nacrtano u modelu u 1/4" = 1'-0" (crtež u inčima) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

Za kote držite veličine kao veličine na papiru i postavite ukupnu razmeru ({{cmd:DIMSCALE}}) na razmeru štampanja: 50 za 1:50, 48 za 1/4" = 1'-0". Vidi [Podešavanje veličina kota](topic:dimension-settings).

## Označavanje prema razmeri

Nacrtajte model u punoj veličini i pustite CadCraft da uradi račune umesto vas.

1. Izaberite tekst ili kote koje treba da zadrže svoju veličinu na papiru. U {{ui:Svojstva}} štiklirajte {{ui:Anotativno}}. {{ui:Veličina na papiru}} tada glasi, na primer, `2.5 mm at 1:50`.
2. Ukucajte {{cmd:ANNOSCALE}} i razmeru u kojoj će crtež biti odštampan, na primer `1:100`.

Svaki anotativni tekst i kota se menja po veličini tako da se štampa u istoj veličini na novoj razmeri: tekst od 2.5 mm je visok 125 u crtežu u milimetrima na 1:50, a 250 na 1:100. Širina pasusa se menja s tim; tekst kote, strelice i razmaci se menjaju zajedno (njihova ukupna razmera). To je jedan korak opozivanja, a objekti koji nisu anotativni se nikada ne menjaju.

Podešavanje se čuva u DWG i DXF: drugi programi čitaju anotativnu oznaku, a CadCraft takođe čuva razmeru za koju je svaki objekat podešen.

Ako vaša kancelarija postavlja visine papira u dodatku Default Policies (Podešavanja › Globalno › Default Policies › Veličine anotacija na papiru), {{cmd:ANNOSCALE}} takođe postavlja visinu sa kojom novi tekst počinje na visinu kancelarije za napomene u toj razmeri. Vidi [Default Policies](topic:default-policies).

### Jedan objekat u više razmera

List često prikazuje istu osnovu u 1:100, a njen deo u 1:50. Dajte napomenama i kotama obe razmere, pa svaki prozor pogleda prikazuje ih u njihovoj veličini na papiru:

1. Izaberite anotativni tekst i kote, pa ukucajte `OBJECTSCALE`.
2. Izaberite `Add` i ukucajte razmeru, na primer `1:50`. (`Current scale` dodaje anotacionu razmeru crteža; `List` prikazuje šta svaki objekat zadržava; `Delete` uklanja jednu.)

Prozor pogleda čija je razmera na listi objekta prikazuje ga u veličini za tu razmeru: tekst od 2.5 mm nacrtan je visok 250 kroz prozor pogleda 1:100, a 125 kroz 1:50, na ekranu i u štampi. Objekat ostaje gde jeste; razlikuje se samo veličina. U prozoru pogleda na razmeri koja nije na listi objekta, objekat se prikazuje u veličini koju ima, dok ne ukucate `ANNOALLVISIBLE` i izaberete `OFF`: tada se tamo izostavlja. {{cmd:ANNOSCALE}} menja veličinu objektima koji navode novu razmeru, a ostale ostavlja kakvi jesu.

Liste se čuvaju u DWG i DXF kao CadCraft-ovi sopstveni podaci. Drugi program vidi svaki objekat kao anotativan, na jednoj razmeri za koju je podešen. Prekidač ANNOALLVISIBLE se ne čuva u datoteci.

## Debljine linija i tipovi linija

Sloj ili objekat može imati **debljinu linije** (0.05 do 2.11 mm) i **tip linije** (isprekidana, skrivena, osna, fantomska, tačkasta…). Postavite ih u desnom panelu: kada ništa nije izabrano, {{ui:Tip linije}} i {{ui:Debljina linije}} pod {{ui:Trenutna podešavanja}} su ono što dobijaju novi objekti ({{ui:Po sloju}} da prate svoj sloj), a dva pod {{ui:Sloj …}} su sopstvena svojstva tekućeg sloja. Kada su objekti izabrani, isti dva reda i {{ui:Razmera tipa linije}} menjaju te objekte. Komande su {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Tipovi linija se prikazuju na ekranu i u štampi. Njihove crtice su u jedinicama crteža: metrički crtež koristi ISO veličine (DASHED: crtice od 12.7 mm), a crtež u inčima inčne (0.5"). Ako su crtice premale ili prevelike, promenite {{ui:Razmera tipa linije}} crteža (LTSCALE): svaka crtica i razmak se množe njome; sopstvena razmera objekta je množi ponovo. Obrazac suviše fin da se uopšte vidi crta se kao puna linija.

Debljine linija se pri štampanju prikazuju u mm na papiru bez obzira na razmeru. Linije sa {{ui:Podrazumevano}} debljinom koriste širinu pera izabranu u dijalogu {{ui:Štampaj u PDF}} (0.13 do 0.70 mm; na početku 0.25 mm); debljina 0 se štampa kao najtanja linija. Na ekranu je svaka linija široka jedan piksel dok ne pritisnete {{ui:LWT}} u statusnoj traci (ili ukucate {{cmd:LWDISPLAY}}): tada debljina iznad 0.25 mm crta širu liniju (0.5 mm = 2 piksela) u modelu, a na listu u svojoj stvarnoj širini na papiru. Izbor se čuva u ovom pregledaču.
