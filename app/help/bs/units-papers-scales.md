---
title: Jedinice, veličine papira i razmjere
summary: Šta znače jedinice crteža u CadCraftu, veličine papira za listove i štampanje, svaka standardna razmjera, i kako se veličine teksta i kota odnose na razmjeru štampanja.
keywords: jedinice, milimetri, inči, stope, stope i inči, arhitektonski, inženjerski, razlomci, razlomački, lunits, format dužine, preciznost, metri, veličina papira, a3, a1, arch d, ansi, tabloid, letter, razmjera, 1:100, 1/4 inča, arhitektonska razmjera, inženjerska razmjera, insunits
from: 8346236a
---

## Jedinice crteža

Crtate u punoj veličini, u jedinicama crteža. Šta jedna jedinica predstavlja određuje postavka crteža **Jedinice**:

1. Pritisnite {{key:Esc}} da ništa ne bude označeno, na kartici {{ui:Model}}.
2. U {{ui:Trenutne postavke}} izaberite {{ui:Jedinice}}: {{ui:Bez jedinica}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Inči}} ili {{ui:Stope}}.

Kote mogu pisati svoje dužine u milimetrima, centimetrima, metrima ili kilometrima bez obzira na jedinicu crteža: pogledajte [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Promjena jedinica ništa ne mijenja po veličini. Mijenja samo kako se čitaju razmjere na listovima i u štampanju, i koje razmjere se nude. Crtež otvoren iz DWG-a ili DXF-a zadržava jedinice spremljene u datoteci; odjeljak {{ui:Crtež}} u lijevom panelu ih prikazuje.

Crtež {{ui:Bez jedinica}} tretira se kao da je u jedinici papira: milimetri na ISO papiru, inči na US papiru.

## Stope i inči, i razlomci

Kako se dužine **pišu i upisuju** je zasebna postavka, format dužine. Ne mijenja nijednu geometriju, samo kako brojevi izgledaju i šta možete upisati.

1. Pritisnite {{key:Esc}} da ništa ne bude označeno, na kartici {{ui:Model}}.
2. U {{ui:Trenutne postavke}} izaberite {{ui:Format dužine}}: {{ui:Decimalni}} (`150.5`), {{ui:Arhitektonski}} (`12'-6 1/2"`), {{ui:Inženjerski}} (`12'-6.5"`), {{ui:Razlomački}} (`150 1/2`) ili {{ui:Naučni}} (`1.505E+02`).
3. Izaberite {{ui:Preciznost}}: decimalna mjesta, ili najmanji razlomak (1/16 je uobičajen izbor za arhitektonski).

Ili upišite {{cmd:UNITS}} (`UN`) i odgovorite na njena dva pitanja.

Uz {{ui:Arhitektonski}} ili {{ui:Inženjerski}}, jedna jedinica crteža je jedan inč, kao u AutoCADu: postavite i {{ui:Jedinice}} na {{ui:Inči}}. Tada možete upisivati dužine u stopama i inčima bilo gdje gdje se traži dužina, i u poljima {{ui:Svojstva}}:

| Upišete | Znači |
|---|---|
| `12'6"` ili `12'-6"` | 12 stopa 6 inča (150) |
| `12'6-1/2"` | 12 stopa 6½ inča. Koristite crticu prije razlomka: {{key:Space}} je {{key:Enter}} u komandnoj liniji. |
| `12'` | 12 stopa |
| `6"` ili `6` | 6 inča: goli broj je u inčima |
| `1/2`, `6-1/2` | razlomci rade u bilo kojem formatu |

Tačke uzimaju iste dužine: `@12'6",0` ili `@10'<90`. Uglovi ostaju u stepenima.

Format se prikazuje u historiji ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: površine kao kvadratni inči i kvadratne stope), u {{ui:Svojstva}}, u koordinatama na statusnoj traci i u **novim kotama**. Listovi zadržavaju jedinice papira (milimetre ili inče) kao decimale.

:::note
Format dužine se čuva u DWG i DXF datotekama, a svaka kota zadržava svoj: sačuvani crtež se ponovo otvara kako ste ga ostavili.
:::

## Veličine papira

Listovi i štampanja modela koriste ove veličine, u oba smjera:

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

Novi listovi počinju na ISO A3 za metričke crteže i crteže bez jedinica, a na Tabloidu za crteže u inčima ili stopama. Štampanja modela počinju na ISO A4 ili Letter na isti način, a zatim pamte vaš zadnji izbor. Listovi iz otvorenih datoteka zadržavaju svoju veličinu, prikazanu kao "Prilagođeno" kad nije jedna od ovih.

## Razmjere

Razmjera `1:n` znači da jedna jedinica na papiru predstavlja n istih jedinica u modelu, pa 1:100 prikazuje 1 m zgrade kao 10 mm papira. CadCraft to računa iz jedinica crteža i jedinice papira.

**Metričke razmjere**, nude se za svaki crtež: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektonske razmjere**, nude se kad su jedinice inči ili stope: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženjerske razmjere**, nude se kad su jedinice inči ili stope: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vlastite razmjere.** Upišite {{cmd:SCALELISTEDIT}} (ili `SCALELIST`) da dodate svoju razmjeru, na primjer 1:75 ili lokacijsku razmjeru 2 papir : 300 crtež. `Add` traži ime, zatim jedinice papira i jedinice crteža (ime kao `1:75` nudi svoje brojeve; pritisnite {{key:Enter}} da ih uzmete). `Edit`, `Delete`, `List` i `Reset` rade na istoj listi; `Reset` vraća na standardnu listu. Vaše razmjere se pojavljuju poslije standardnih u listi razmjera prozora pregleda u Svojstvima i u dijalogu {{ui:Štampaj u PDF}}; prozor pregleda na toj razmjeri se čita s njenim imenom; čuvaju se u crtežu (DWG i DXF 2000) kao lista razmjera crteža. Crtež otvoren iz drugog programa donosi svoju listu; razmjere koje se podudaraju sa standardnom ne prikazuju se dvaput.

Kada se prozor pregleda usmjeri pomoću {{ui:Prikaži cijeli model}} ili {{ui:Odaberi prozor na modelu…}}, CadCraft bira najveću standardnu razmjeru koja stane. {{ui:Prilagodi cijeli model}} umjesto toga postavlja tačnu razmjeru, koja se čita kao običan odnos.

## Veličine na papiru i u modelu

Veličine teksta i kota su u jedinicama prostora u kojem crtate.

| Želite na papiru | Nacrtano na listu | Nacrtano u modelu na 1:50 (crtež u mm) | Nacrtano u modelu na 1/4" = 1'-0" (crtež u inčima) |
|---|---|---|---|
| tekst 2.5 mm | 2.5 | 125 | — |
| tekst 3/32" | 0.09375 | — | 4.5 |

Za kote zadržite veličine kao veličine na papiru i postavite ukupnu razmjeru ({{cmd:DIMSCALE}}) na razmjeru štampanja: 50 za 1:50, 48 za 1/4" = 1'-0". Pogledajte [Postavi veličine kota](topic:dimension-settings).

## Anotiranje po razmjeri

Nacrtajte model u punoj veličini i pustite CadCraft da uradi račune iznad umjesto vas.

1. Označite tekst ili kote koje treba da zadrže svoju veličinu na papiru. U Svojstvima označite {{ui:Anotativno}}. {{ui:Veličina na papiru}} tada glasi, na primjer, `2.5 mm na 1:50`.
2. Upišite {{cmd:ANNOSCALE}} i razmjeru na kojoj će crtež biti štampan, na primjer `1:100`.

Svaki anotativni tekst i kota mijenjaju veličinu tako da se štampaju u istoj veličini na novoj razmjeri: tekst 2.5 mm je visok 125 u crtežu u milimetrima na 1:50, a 250 na 1:100. Širina paragrafa mijenja se s tim; tekst kote, strelice i razmaci mijenjaju se zajedno (njena ukupna razmjera). To je jedan korak poništavanja, a objekti koji nisu anotativni se nikad ne mijenjaju.

Postavka se čuva u DWG i DXF: drugi programi čitaju anotativnu oznaku, a CadCraft također čuva razmjeru za koju je svaki objekat dimenzioniran.

Ako vaš ured postavlja visine papira u dodatku Default Policies (Postavke › Globalno › Default Policies › Annotation sizes on paper), {{cmd:ANNOSCALE}} također postavlja visinu s kojom novi tekst počinje na visinu ureda za napomene na toj razmjeri. Pogledajte [Zadane politike](topic:default-policies).

### Jedan objekat na više razmjera

List često prikazuje isti plan na 1:100 i dio na 1:50. Dajte napomenama i kotama obje razmjere, pa svaki prozor pregleda prikazuje ih u njihovoj veličini na papiru:

1. Označite anotativni tekst i kote i upišite `OBJECTSCALE`.
2. Izaberite `Add` i upišite razmjeru, na primjer `1:50`. (`Current scale` dodaje razmjeru anotacije crteža; `List` prikazuje šta svaki objekat zadržava; `Delete` uklanja jednu.)

Prozor pregleda čija je razmjera na listi objekta prikazuje ga u veličini za tu razmjeru: tekst 2.5 mm nacrtan je visok 250 kroz prozor 1:100, a 125 kroz 1:50, na ekranu i u štampanju. Objekat ostaje gdje jeste; samo mu se veličina razlikuje. U prozoru pregleda na razmjeri koja nije na listi objekta, objekat se prikazuje u veličini koju ima, dok ne upišete `ANNOALLVISIBLE` i izaberete `OFF`: tada se tamo izostavlja. {{cmd:ANNOSCALE}} mijenja veličinu objekata koji navode novu razmjeru, a ostale ostavlja kakvi su.

Liste se čuvaju u DWG i DXF kao vlastiti podaci CadCrafta. Drugi program vidi svaki objekat kao anotativan, na jednoj razmjeri za koju je dimenzioniran. Prekidač ANNOALLVISIBLE se ne čuva u datoteci.

## Debljine linija i vrste linija

Sloj ili objekat može imati **debljinu linije** (0.05 do 2.11 mm) i **vrstu linije** (isprekidana, skrivena, osna, fantomska, tačkasta…). Postavite ih u desnom panelu: bez izbora, {{ui:Vrsta linije}} i {{ui:Debljina linije}} pod {{ui:Trenutne postavke}} su ono što novi objekti dobijaju ({{ui:Po sloju}} da prate svoj sloj), a dvije ispod {{ui:Sloj …}} su vlastite za trenutni sloj. Uz izabrane objekte, iste dvije stavke i {{ui:Razmjera vrste linije}} mijenjaju te objekte. Naredbe su {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Vrste linija prikazuju se na ekranu i u štampanju. Njihove crtice su u jedinicama crteža: metrički crtež koristi ISO veličine (DASHED: crtice od 12.7 mm), a crtež u inčima one u inčima (0.5"). Ako crtice izgledaju premale ili prevelike, promijenite {{ui:Razmjera vrste linije}} (LTSCALE) crteža: svaka crtica i razmak se množe njome; razmjera samog objekta množi je opet. Obrazac koji je pregust da bi se vidio crta se kao puna linija.

Debljine linija se štampaju, u mm na papiru bez obzira na razmjeru. Linije s {{ui:Zadano}} debljinom koriste širinu pera izabranu u dijalogu {{ui:Štampaj u PDF}} (0.13 do 0.70 mm; 0.25 mm na početku); debljina 0 štampa se kao najtanja linija. Na ekranu je svaka linija široka jedan piksel dok ne pritisnete {{ui:LWT}} u statusnoj traci (ili upišete {{cmd:LWDISPLAY}}): tada debljina iznad 0.25 mm crta šire (0.5 mm = 2 piksela) u modelu, a na listu u svojoj stvarnoj širini na papiru. Izbor se čuva u ovom pregledaču.
