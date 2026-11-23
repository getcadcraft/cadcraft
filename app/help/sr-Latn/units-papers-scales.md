---
title: Jedinice, formati papira i razmere
summary: Šta znače jedinice crteža u CadCraft-u, formati papira za listove i štampu, svaka standardna razmera i kako se veličine teksta i kota odnose na razmeru štampanja.
keywords: jedinice, milimetri, inči, stope, stope i inči, arhitektonski, inženjerski, razlomak, razlomci, lunits, format dužine, preciznost, metri, format papira, a3, a1, arch d, ansi, tabloid, letter, razmera, 1:100, 1/4 inča, arhitektonska razmera, inženjerska razmera, insunits
from: 7dc9b62e
---

## Jedinice crteža

Crtate u punoj veličini, u jedinicama crteža. Šta jedna jedinica predstavlja je podešavanje crteža {{ui:Jedinice}}:

1. Pritisnite {{key:Esc}} da ništa ne bude izabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutna podešavanja}} izaberite {{ui:Jedinice}}: {{ui:Bez jedinica}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Inči}} ili {{ui:Stope}}.

Kote mogu da zapisuju dužine u milimetrima, centimetrima, metrima ili kilometrima, koja god da je jedinica crteža: vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Promena jedinica ništa ne menja po veličini. Menja samo način čitanja razmera na listovima i u štampi, i koje se razmere nude. Crtež otvoren iz DWG ili DXF zadržava jedinice zapisane u datoteci; odeljak {{ui:Crtež}} u levom panelu ih prikazuje.

{{ui:Bez jedinica}} crtež se tretira kao da je u jedinici papira: milimetrima na ISO papiru, inčima na američkom papiru.

## Stope i inči, i razlomci

Kako se dužine **zapisuju i kucaju** je zasebno podešavanje, format dužine. Ne menja geometriju, samo izgled brojeva i ono što možete ukucati.

1. Pritisnite {{key:Esc}} da ništa ne bude izabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutna podešavanja}} izaberite {{ui:Format dužine}}: {{ui:Decimalni}} (`150.5`), {{ui:Arhitektonski}} (`12'-6 1/2"`), {{ui:Inženjerski}} (`12'-6.5"`), {{ui:Razlomak}} (`150 1/2`) ili {{ui:Naučni}} (`1.505E+02`).
3. Izaberite {{ui:Preciznost}}: decimalna mesta, ili najmanji razlomak (1/16 je uobičajen izbor za arhitektonski).

Ili ukucajte {{cmd:UNITS}} (`UN`) i odgovorite na njena dva pitanja.

Uz {{ui:Arhitektonski}} ili {{ui:Inženjerski}}, jedna jedinica crteža je jedan inč, kao u AutoCAD-u: postavite i {{ui:Jedinice}} na {{ui:Inči}}. Tada možete kucati dužine u stopama i inčima bilo gde gde se traži dužina, i u poljima {{ui:Svojstva}}:

| Ukucate | Znači |
|---|---|
| `12'6"` ili `12'-6"` | 12 stopa 6 inča (150) |
| `12'6-1/2"` | 12 stopa 6½ inča. Stavite crticu pre razlomka: {{key:Space}} je {{key:Enter}} u komandnoj liniji. |
| `12'` | 12 stopa |
| `6"` ili `6` | 6 inča: običan broj je inči |
| `1/2`, `6-1/2` | razlomci rade u svakom formatu |

Tačke primaju iste dužine: `@12'6",0` ili `@10'<90`. Uglovi ostaju u stepenima.

Format se prikazuje u istoriji ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: površine kao kvadratni inči i kvadratne stope), u {{ui:Svojstva}}, u koordinatama u statusnoj traci i u **novim kotama**. Listovi zadržavaju svoje jedinice papira (milimetre ili inče) kao decimale.

:::note
Format dužine se čuva u DWG i DXF datotekama, a svaka kota zadržava svoj: sačuvan crtež se otvara onako kako ste ga ostavili.
:::

## Formati papira

Listovi i štampe modela koriste ove veličine, u bilo kojoj orijentaciji:

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

Novi listovi počinju na ISO A3 za metrički i crtež bez jedinica, a na Tabloid za crteže u inčima ili stopama. Štampe modela počinju na ISO A4 ili Letter na isti način, a zatim pamte vaš poslednji izbor. Listovi iz otvorenih datoteka zadržavaju svoju veličinu, prikazanu kao "Prilagođeno" kada nije jedna od ovih.

## Razmere

Razmera `1:n` znači da jedna jedinica na papiru prikazuje n istih jedinica u modelu, pa 1:100 prikazuje 1 m zgrade kao 10 mm na papiru. CadCraft to računa iz jedinica crteža i jedinice papira.

**Metričke razmere**, nude se za svaki crtež: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektonske razmere**, nude se kada su jedinice inči ili stope: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženjerske razmere**, nude se kada su jedinice inči ili stope: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Sopstvene razmere.** Ukucajte `SCALELISTEDIT` (ili `SCALELIST`) da dodate razmeru po svom izboru, kao što je 1:75 ili razmera lokacije 2 jedinice papira : 300 jedinica crteža. `Add` traži naziv, zatim jedinice papira i jedinice crteža (naziv kao `1:75` nudi sopstvene brojeve; pritisnite {{key:Enter}} da ih uzmete). `Edit`, `Delete`, `List` i `Reset` rade nad istim spiskom; `Reset` vraća na standardni spisak. Vaše razmere se pojavljuju posle standardnih u spisku razmera prikaza u {{ui:Svojstva}} i u dijalogu {{ui:Štampaj u PDF}}; prikaz u toj razmeri se čita sa svojim nazivom, a čuvaju se u crtežu (DWG i DXF 2000) kao spisak razmera crteža. Crtež otvoren iz drugog programa donosi svoj spisak; razmere koje ima, a koje odgovaraju standardnoj, ne prikazuju se dvaput.

Kada se prikaz usmerava sa {{ui:Prikaži ceo model}} ili {{ui:Izaberi prozor na modelu…}}, CadCraft bira najveću standardnu razmeru koja stane. {{ui:Uklopi ceo model}} postavlja tačnu razmeru, koja se čita kao običan odnos.

## Veličine na papiru i u modelu

Veličine teksta i kota su u jedinicama prostora u kome crtate.

| Želite na papiru | Nacrtano na listu | Nacrtano u modelu u 1:50 (crtež u mm) | Nacrtano u modelu u 1/4" = 1'-0" (crtež u inčima) |
|---|---|---|---|
| tekst 2.5 mm | 2.5 | 125 | — |
| tekst 3/32" | 0.09375 | — | 4.5 |

Za kote držite veličine kao veličine na papiru i postavite opštu razmeru ({{cmd:DIMSCALE}}) na razmeru štampanja: 50 za 1:50, 48 za 1/4" = 1'-0". Vidi [Postavljanje veličina kota](topic:dimension-settings).

## Anotiranje po razmeri

Nacrtajte model u punoj veličini i pustite CadCraft da uradi račune iznad umesto vas.

1. Izaberite tekst ili kote koji treba da zadrže veličinu na papiru. U {{ui:Svojstva}} označite {{ui:Anotativno}}. {{ui:Veličina na papiru}} tada čita, na primer, `2.5 mm at 1:50`.
2. Ukucajte {{cmd:ANNOSCALE}} i razmeru u kojoj će crtež biti odštampan, na primer `1:100`.

Svaki anotativni tekst i kota se razmerava tako da se štampa u istoj veličini u novoj razmeri: tekst od 2.5 mm je visok 125 u crtežu u milimetrima u 1:50, i 250 u 1:100. Širina pasusa se menja s tim; tekst kote, strelice i razmaci se menjaju zajedno (njena opšta razmera). To je jedan korak opozivanja, a objekti koji nisu anotativni se nikada ne menjaju.

Postavka se čuva u DWG i DXF: drugi programi čitaju anotativnu oznaku, a CadCraft takođe čuva razmeru za koju je svaki objekat dimenzionisan.

Ako vaša kancelarija postavlja visine papira u dodatku Podrazumevana pravila (Podešavanja › Opšte › Podrazumevana pravila › Veličine anotacija na papiru), {{cmd:ANNOSCALE}} takođe postavlja visinu sa kojom novi tekst počinje na visinu kancelarije za beleške u toj razmeri. Vidi [Podrazumevana pravila](topic:default-policies).

### Jedan objekat u više razmera

List često prikazuje isti plan u 1:100, a deo njega u 1:50. Dajte napomenama i kotama obe razmere, i svaki prikaz ih prikazuje u njihovoj veličini na papiru:

1. Izaberite anotativni tekst i kote i ukucajte `OBJECTSCALE`.
2. Izaberite `Add` i ukucajte razmeru, na primer `1:50`. (`Current scale` dodaje anotativnu razmeru crteža; `List` prikazuje koje razmere svaki objekat čuva; `Delete` jednu uklanja.)

Prikaz čija je razmera na spisku objekta prikazuje ga u veličini za tu razmeru: tekst od 2.5 mm se crta visok 250 kroz prikaz 1:100, a 125 kroz 1:50, na ekranu i u štampi. Objekat ostaje gde jeste; razlikuje se samo veličina. U prikazu čija razmera nije na spisku objekta, objekat se prikazuje u veličini koju ima, dok ne ukucate `ANNOALLVISIBLE` i izaberete `OFF`: tada se tamo izostavlja. {{cmd:ANNOSCALE}} menja veličinu objektima koji navode novu razmeru, a ostale ostavlja kakvi jesu.

Spiskovi se čuvaju u DWG i DXF kao sopstveni podaci CadCraft-a. Drugi program vidi svaki objekat kao anotativan, u jednoj razmeri za koju je dimenzionisan. Prekidač ANNOALLVISIBLE se ne čuva u datoteci.

## Debljine linija i tipovi linija

Sloj ili objekat može imati **debljinu linije** (0.05 do 2.11 mm) i **tip linije** (isprekidana, skrivena, osna, fantomska, tačkasta…). Postavite ih u desnom panelu: kada ništa nije izabrano, {{ui:Tip linije}} i {{ui:Debljina linije}} pod {{ui:Trenutna podešavanja}} su ono što novi objekti dobijaju ({{ui:Po sloju}} da prate svoj sloj), a dva pod {{ui:Sloj …}} su sopstvena za tekući sloj. Kada su objekti izabrani, isti dva reda i {{ui:Razmera tipa linije}} menjaju te objekte. Komande su {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Tipovi linija se prikazuju na ekranu i u štampi. Njihove crtice su u jedinicama crteža: metrički crtež koristi ISO veličine (DASHED: crtice od 12.7 mm), a crtež u inčima inčne (0.5"). Ako su crtice premale ili prevelike, promenite {{ui:Razmera tipa linije}} crteža (LTSCALE): svaka crtica i razmak se množi njome; sopstvena razmera objekta je množi ponovo. Obrazac previše sitan da bi se video crta se kao puna linija.

Debljine linija se štampaju, u mm na papiru bez obzira na razmeru. Linije sa debljinom {{ui:Podrazumevano}} koriste širinu pera izabranu u dijalogu {{ui:Štampaj u PDF}} (0.13 do 0.70 mm; na početku 0.25 mm); debljina 0 se štampa kao najtanja linija. Na ekranu je svaka linija široka jedan piksel dok ne pritisnete {{ui:LWT}} u statusnoj traci (ili ukucate {{cmd:LWDISPLAY}}): tada debljina iznad 0.25 mm crta šire (0.5 mm = 2 piksela) u modelu, a na listu u svojoj pravoj širini na papiru. Izbor se čuva u ovom pregledaču.

## Kancelarijski standard

Kancelarija može da čuva visine teksta na papiru, slojeve, polja štampača i šablone u jednom zapisu, kancelarijskom standardu. CadCraft ga čita ovim redom: sopstveni zapis crteža (postavlja se sa {{cmd:OFFICESTANDARD}} › `Import`, čuva se u datoteci), zajednički standard vašeg tima, pa zatim vaša Podrazumevana pravila. Anotativni tekst i kote uzimaju visinu papira iz njega u anotacijskoj razmeri. Prazan standard ništa ne menja. {{cmd:OFFICESTANDARD}} › `Layers` dodaje kancelarijske slojeve koje crtež nema.
