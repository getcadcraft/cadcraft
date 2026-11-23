---
title: Jedinice, veličine papira i razmjere
summary: Šta znače jedinice crteža u CadCraft-u, veličine papira za listove i štampe, svaka standardna razmjera i kako veličine teksta i kota odgovaraju razmjeri štampe.
keywords: jedinice, milimetri, inči, stope, stope i inči, arhitektonski, inženjerski, razlomački, razlomci, lunits, format dužine, preciznost, metri, veličina papira, a3, a1, arch d, ansi, tabloid, letter, razmjera, 1:100, 1/4 inča, arhitektonska razmjera, inženjerska razmjera, insunits
from: 7dc9b62e
---

## Jedinice crteža

Crtate u punoj veličini, u jedinicama crteža. Šta jedna jedinica predstavlja je postavka crteža **Jedinice**:

1. Pritisnite {{key:Esc}} da ništa ne bude odabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutne postavke}} izaberite {{ui:Jedinice}}: {{ui:Bez jedinica}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Inči}} ili {{ui:Stope}}.

Kote mogu pisati dužine u milimetrima, centimetrima, metrima ili kilometrima, bez obzira na jedinicu crteža: pogledajte [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Promjena jedinica ništa ne mijenja po veličini. Mijenja kako se razmjere čitaju na listovima i u štampi, i koje razmjere se nude. Crtež otvoren iz DWG ili DXF zadržava jedinice spremljene u datoteci; odjeljak {{ui:Crtež}} lijevog panela ih prikazuje.

Crtež {{ui:Bez jedinica}} tretira se kao da je u jedinici papira: milimetri na ISO papiru, inči na američkom papiru.

## Stope i inči, i razlomci

Kako se dužine **pišu i ukucavaju** je zasebna postavka, format dužine. On ne mijenja geometriju, samo kako brojevi izgledaju i šta možete ukucati.

1. Pritisnite {{key:Esc}} da ništa ne bude odabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutne postavke}} izaberite {{ui:Format dužine}}: {{ui:Decimalni}} (`150.5`), {{ui:Arhitektonski}} (`12'-6 1/2"`), {{ui:Inženjerski}} (`12'-6.5"`), {{ui:Razlomački}} (`150 1/2`) ili {{ui:Naučni}} (`1.505E+02`).
3. Izaberite {{ui:Preciznost}}: decimalna mjesta, ili najmanji razlomak (1/16 je uobičajen izbor za arhitektonski).

Ili ukucajte {{cmd:UNITS}} (`UN`) i odgovorite na njena dva pitanja.

Uz {{ui:Arhitektonski}} ili {{ui:Inženjerski}}, jedna jedinica crteža je jedan inč, kao u AutoCAD-u: postavite i {{ui:Jedinice}} na {{ui:Inči}}. Tada možete ukucati dužine u stopama i inčima bilo gdje gdje se traži dužina, i u poljima {{ui:Svojstva}}:

| Ukucate | Znači |
|---|---|
| `12'6"` ili `12'-6"` | 12 stopa 6 inča (150) |
| `12'6-1/2"` | 12 stopa 6½ inča. Koristite crticu prije razlomka: {{key:Space}} je {{key:Enter}} u komandnoj liniji. |
| `12'` | 12 stopa |
| `6"` ili `6` | 6 inča: prosti broj je inči |
| `1/2`, `6-1/2` | razlomci rade u svakom formatu |

Tačke uzimaju iste dužine: `@12'6",0` ili `@10'<90`. Uglovi ostaju u stepenima.

Format se prikazuje u historiji ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: površine kao kvadratni inči i kvadratne stope), u {{ui:Svojstva}}, u koordinatama u statusnoj traci i u **novim kotama**. Listovi zadržavaju jedinice svog papira (milimetri ili inči) kao decimalne brojeve.

:::note
Format dužine se čuva u DWG i DXF datotekama, a svaka kota zadržava svoj: spašeni crtež se ponovo otvara onako kako ste ga ostavili.
:::

## Veličine papira

Listovi i štampe modela koriste ove veličine, u oba smjera:

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

Novi listovi počinju na ISO A3 za metričke crteže i crteže bez jedinica, a na Tabloid za crteže u inčima ili stopama. Štampe modela počinju na ISO A4 ili Letter na isti način, pa pamte vaš posljednji izbor. Listovi iz otvorenih datoteka zadržavaju svoju veličinu, prikazanu kao "Prilagođeno" kad nije jedna od ovih.

## Razmjere

Razmjera `1:n` znači da jedna jedinica na papiru prikazuje n istih jedinica u modelu, pa 1:100 prikazuje 1 m zgrade kao 10 mm papira. CadCraft to računa iz jedinica crteža i jedinice papira.

**Metričke razmjere**, nude se za svaki crtež: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektonske razmjere**, nude se kad su jedinice inči ili stope: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženjerske razmjere**, nude se kad su jedinice inči ili stope: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vaše razmjere.** Ukucajte {{cmd:SCALELISTEDIT}} (ili `SCALELIST`) da dodate razmjeru po vlastitom izboru, kao 1:75 ili razmjeru lokacije 2 papira : 300 crteža. {{ui:Dodaj}} traži naziv, zatim jedinice papira i jedinice crteža (naziv poput 1:75 nudi sopstvene brojeve; pritisnite {{key:Enter}} da ih uzmete). `Edit`, `Delete`, `List` i `Reset` rade s istim spiskom; `Reset` vraća na standardni spisak. Vaše razmjere se pojavljuju poslije standardnih u spisku razmjera prikaza u {{ui:Svojstva}} i u dijalogu {{ui:Štampaj u PDF}}; prikaz na toj razmjeri čita se sa svojim nazivom, a čuvaju se u crtežu (DWG i DXF 2000) kao spisak razmjera crteža. Crtež otvoren iz drugog programa donosi svoj spisak; razmjere koje odgovaraju standardnoj ne prikazuju se dvaput.

Kad se prikaz usmjeri pomoću {{ui:Prikaži cijeli model}} ili {{ui:Odaberi prozor na modelu…}}, CadCraft bira najveću standardnu razmjeru koja stane. {{ui:Prilagodi cijeli model}} postavlja tačnu razmjeru, koja se čita kao običan odnos.

## Veličine na papiru i u modelu

Veličine teksta i kota su u jedinicama prostora u kojem crtate.

| Želite na papiru | Nacrtano na listu | Nacrtano u modelu u 1:50 (mm crtež) | Nacrtano u modelu u 1/4" = 1'-0" (crtež u inčima) |
|---|---|---|---|
| Tekst 2.5 mm | 2.5 | 125 | — |
| Tekst 3/32" | 0.09375 | — | 4.5 |

Za kote, držite veličine kao veličine na papiru i postavite ukupnu razmjeru ({{cmd:DIMSCALE}}) na razmjeru štampe: 50 za 1:50, 48 za 1/4" = 1'-0". Pogledajte [Postavljanje veličina kota](topic:dimension-settings).

## Anotiranje po razmjeri

Nacrtajte model u punoj veličini i pustite CadCraft da uradi računice iznad umjesto vas.

1. Odaberite tekst ili kote koje treba da zadrže svoju veličinu na papiru. U {{ui:Svojstva}} označite {{ui:Anotativno}}. {{ui:Veličina na papiru}} tada kaže, na primjer, `2.5 mm at 1:50`.
2. Ukucajte {{cmd:ANNOSCALE}} i razmjeru po kojoj će crtež biti odštampan, na primjer `1:100`.

Svaki anotativni tekst i kota mijenjaju veličinu tako da se štampaju iste veličine na novoj razmjeri: tekst 2.5 mm je visok 125 u milimetarskom crtežu na 1:50, a 250 na 1:100. Širina paragrafa se mijenja s tim; tekst kote, strelice i razmaci mijenjaju se zajedno (njena ukupna razmjera). To je jedan korak poništavanja, a objekti koji nisu anotativni se nikad ne mijenjaju.

Postavka se čuva u DWG i DXF: drugi programi čitaju anotativnu oznaku, a CadCraft takođe čuva razmjeru za koju je svaki objekat dimenzionisan.

Ako vaša kancelarija postavlja visine na papiru u dodatku Zadane politike (Postavke › Opšte › Zadane politike › Veličine anotacija na papiru), {{cmd:ANNOSCALE}} takođe postavlja visinu s kojom novi tekst počinje na visinu kancelarije za napomene na toj razmjeri. Pogledajte [Zadane politike](topic:default-policies).

### Jedan objekat na više razmjera

List često prikazuje isti plan u 1:100 i dio njega u 1:50. Dajte napomenama i kotama obje razmjere i svaki prikaz ih prikazuje u njihovoj veličini na papiru:

1. Odaberite anotativni tekst i kote i ukucajte `OBJECTSCALE`.
2. Izaberite `Add` i ukucajte razmjeru, na primjer `1:50`. (`Current scale` dodaje anotacijsku razmjeru crteža; `List` pokazuje šta svaki objekat čuva; `Delete` uklanja jednu.)

Prikaz čija je razmjera na spisku objekta prikazuje ga u veličini za tu razmjeru: tekst 2.5 mm crta se visok 250 kroz prikaz 1:100, a visok 125 kroz 1:50, na ekranu i u štampi. Objekat ostaje gdje jeste; razlikuje se samo veličina. U prikazu na razmjeri koja nije na spisku objekta, objekat se prikazuje u veličini koju ima, dok ne ukucate `ANNOALLVISIBLE` i izaberete `OFF`: tada je tamo izostavljen. {{cmd:ANNOSCALE}} mijenja veličinu objekata koji imaju novu razmjeru na spisku, a ostale ostavlja kakvi jesu.

Spisci se čuvaju u DWG i DXF kao vlastiti podaci CadCraft-a. Drugi program vidi svaki objekat kao anotativni, na jednoj razmjeri za koju je dimenzionisan. Prekidač ANNOALLVISIBLE se ne čuva u datoteci.

## Debljine linija i vrste linija

Sloj ili objekat može imati **debljinu linije** (0.05 do 2.11 mm) i **vrstu linije** (isprekidana, skrivena, centar, fantom, tačkasta…). Postavljate ih u desnom panelu: kad ništa nije odabrano, {{ui:Vrsta linije}} i {{ui:Debljina linije}} pod {{ui:Trenutne postavke}} su ono što novi objekti dobijaju ({{ui:Po sloju}} da prate svoj sloj), a dva pod {{ui:Sloj …}} su vlastiti za tekući sloj. Kad su objekti odabrani, isti dva reda i {{ui:Razmjera vrste linije}} mijenjaju te objekte. Naredbe su {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Vrste linija prikazuju se na ekranu i u štampi. Njihove crtice su u jedinicama crteža: metrički crtež koristi ISO veličine (DASHED: crtice od 12.7 mm), a crtež u inčima inčne (0.5"). Ako crtice izgledaju premale ili prevelike, promijenite {{ui:Razmjera vrste linije}} crteža (LTSCALE): svaka crtica i razmak množi se njom; vlastita razmjera objekta množi je ponovo. Uzorak koji je suviše fin da se uopšte vidi crta se kao puna linija.

Debljine linija štampaju se u štampi, u mm na papiru bez obzira na razmjeru. Linije sa {{ui:Zadano}} debljinom koriste širinu pera izabranu u dijalogu {{ui:Štampaj u PDF}} (0.13 do 0.70 mm; na početku 0.25 mm); debljina 0 štampa se kao najtanja linija. Na ekranu je svaka linija široka jedan piksel dok ne pritisnete {{ui:LWT}} u statusnoj traci (ili ukucate {{cmd:LWDISPLAY}}): tada debljina iznad 0.25 mm crta šire (0.5 mm = 2 piksela) u modelu, a u pravoj širini na papiru na listu. Izbor se čuva u ovom pregledaču.

## Standard kancelarije

Kancelarija može čuvati visine teksta na papiru, slojeve, polja naslovnog bloka i šablone u jednom zapisu, standardu kancelarije. CadCraft ga čita ovim redom: sopstveni zapis crteža (postavljen sa {{cmd:OFFICESTANDARD}} › `Import`, čuva se u datoteci), zajednički standard vašeg tima, pa zatim vaše Zadane politike. Anotativni tekst i kote uzimaju visinu na papiru iz njega na razmjeri anotacije. Prazan standard ništa ne mijenja. {{cmd:OFFICESTANDARD}} › `Layers` dodaje kancelarijske slojeve koje crtež nema.
