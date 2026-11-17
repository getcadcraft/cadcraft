---
title: Jedinice, veličine papira i mjerila
summary: Što znače jedinice crteža u CadCraftu, veličine papira za listove i ispise, svako standardno mjerilo i kako se veličine teksta i kota odnose na mjerilo ispisa.
keywords: jedinice, milimetri, inči, stope, stope i inči, arhitektonsko, inženjersko, razlomci, lunits, oblik duljine, preciznost, metri, veličina papira, a3, a1, arch d, ansi, tabloid, letter, mjerilo, 1:100, 1/4 inča, arhitektonsko mjerilo, inženjersko mjerilo, insunits
from: 8346236a
---

## Jedinice crteža

Crtate u punoj veličini, u jedinicama crteža. Što jedna jedinica predstavlja određuje postavka **Jedinice** crteža:

1. Pritisnite {{key:Esc}} da ništa ne bude odabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutne postavke}} odaberite {{ui:Jedinice}}: {{ui:Bez jedinica}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Inči}} ili {{ui:Stope}}.

Kote mogu ispisivati duljine u milimetrima, centimetrima, metrima ili kilometrima, neovisno o jedinici crteža: pogledajte [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Promjena jedinica ništa ne mijenja po veličini. Mijenja samo način na koji se čitaju mjerila na listovima i u ispisima te koja se mjerila nude. Crtež otvoren iz DWG-a ili DXF-a zadržava jedinice spremljene u datoteci; odjeljak {{ui:Crtež}} u lijevoj ploči ih prikazuje.

Crtež {{ui:Bez jedinica}} uzima se kao jedinica papira: milimetri na ISO papiru, inči na US papiru.

## Stope i inči, te razlomci

Kako se duljine **zapisuju i upisuju** zasebna je postavka: oblik duljine. Ne mijenja geometriju, samo način na koji brojevi izgledaju i što možete upisati.

1. Pritisnite {{key:Esc}} da ništa ne bude odabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutne postavke}} odaberite {{ui:Oblik duljine}}: {{ui:Decimalno}} (`150.5`), {{ui:Arhitektonsko}} (`12'-6 1/2"`), {{ui:Inženjersko}} (`12'-6.5"`), {{ui:Razlomci}} (`150 1/2`) ili {{ui:Znanstveno}} (`1.505E+02`).
3. Odaberite {{ui:Preciznost}}: decimalna mjesta, ili najmanji razlomak (1/16 je uobičajen izbor za arhitektonsko).

Ili upišite {{cmd:UNITS}} (`UN`) i odgovorite na njegova dva pitanja.

Uz {{ui:Arhitektonsko}} ili {{ui:Inženjersko}}, jedna jedinica crteža je jedan inč, kao u AutoCADu: postavite i {{ui:Jedinice}} na {{ui:Inči}}. Tada možete upisivati duljine u stopama i inčima bilo gdje gdje se traži duljina, te u okvirima {{ui:Svojstva}}:

| Upišete | Znači |
|---|---|
| `12'6"` ili `12'-6"` | 12 stopa 6 inča (150) |
| `12'6-1/2"` | 12 stopa 6½ inča. Upotrijebite crticu ispred razlomka: {{key:Space}} je {{key:Enter}} u naredbenom retku. |
| `12'` | 12 stopa |
| `6"` ili `6` | 6 inča: goli broj je inč |
| `1/2`, `6-1/2` | razlomci rade u svakom obliku |

Točke primaju iste duljine: `@12'6",0` ili `@10'<90`. Kutovi ostaju u stupnjevima.

Oblik se prikazuje u povijesti ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: površine kao kvadratni inči i kvadratne stope), u {{ui:Svojstva}}, u koordinatama u statusnoj traci i u **novim kotama**. Listovi zadržavaju svoje jedinice papira (milimetre ili inče) kao decimalne brojeve.

:::note
Oblik duljine sprema se u DWG i DXF datotekama, a svaka kota zadržava svoj: spremljeni crtež se ponovno otvara onako kako ste ga ostavili.
:::

## Veličine papira

Listovi i ispisi modela koriste ove veličine, u bilo kojoj orijentaciji:

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

Novi listovi počinju na ISO A3 za metričke crteže i crteže bez jedinica, a na Tabloidu za crteže u inčima ili stopama. Ispisi modela počinju na ISO A4 ili Letter na isti način, a zatim pamte vaš zadnji izbor. Listovi iz otvorenih datoteka zadržavaju svoju veličinu, prikazanu kao "Prilagođeno" kad nije jedna od ovih.

## Mjerila

Mjerilo `1:n` znači da jedna jedinica na papiru prikazuje n istih jedinica u modelu, pa 1:100 prikazuje 1 m zgrade kao 10 mm papira. CadCraft to izračunava iz jedinica crteža i jedinice papira.

**Metrička mjerila**, nude se za svaki crtež: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektonska mjerila**, nude se kad su jedinice inči ili stope: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženjerska mjerila**, nude se kad su jedinice inči ili stope: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vlastita mjerila.** Upišite `SCALELISTEDIT` (ili `SCALELIST`) da dodate vlastito mjerilo, poput 1:75 ili mjerila lokacije 2 papir : 300 crtež. `Add` traži naziv, zatim jedinice papira i jedinice crteža (naziv poput `1:75` nudi vlastite brojeve; pritisnite {{key:Enter}} da ih uzmete). `Edit`, `Delete`, `List` i `Reset` rade na istom popisu; `Reset` vraća standardni popis. Vaša mjerila pojavljuju se nakon standardnih u popisu mjerila viewporta u {{ui:Svojstva}} i u dijaloškom okviru {{ui:Ispis u PDF}}; viewport u tom mjerilu prikazuje se s njegovim nazivom, a mjerila se spremaju u crtežu (DWG i DXF 2000) kao popis mjerila crteža. Crtež otvoren iz drugog programa donosi svoj popis; mjerila koja odgovaraju standardnom ne prikazuju se dvaput.

Kad se viewport usmjeri naredbom {{ui:Prikaži cijeli model}} ili {{ui:Odaberite prozor na modelu…}}, CadCraft odabire najveće standardno mjerilo koje stane. {{ui:Prilagodi cijeli model}} postavlja točno mjerilo, koje se prikazuje kao običan omjer.

## Veličine na papiru i u modelu

Veličine teksta i kota su u jedinicama prostora u kojem crtate.

| Želite na papiru | Nacrtano na listu | Nacrtano u modelu na 1:50 (crtež u mm) | Nacrtano u modelu na 1/4" = 1'-0" (crtež u inčima) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

Za kote zadržite veličine kao veličine na papiru i postavite ukupno mjerilo ({{cmd:DIMSCALE}}) na mjerilo ispisa: 50 za 1:50, 48 za 1/4" = 1'-0". Pogledajte [Postavljanje veličina kota](topic:dimension-settings).

## Anotiranje po mjerilu

Nacrtajte model u punoj veličini i pustite CadCraft da napravi gore navedene račune umjesto vas.

1. Odaberite tekst ili kote koje bi trebali zadržati svoju veličinu na papiru. U {{ui:Svojstva}} označite {{ui:Anotativno}}. {{ui:Veličina na papiru}} tada glasi, na primjer, `2.5 mm at 1:50`.
2. Upišite {{cmd:ANNOSCALE}} i mjerilo u kojem će se crtež ispisivati, poput `1:100`.

Svaki anotativni tekst i kota mijenja veličinu tako da se ispisuje jednake veličine na novom mjerilu: tekst od 2.5 mm visok je 125 u crtežu u milimetrima na 1:50, a 250 na 1:100. Širina odlomka mijenja se s njim; tekst kote, strelice i razmaci mijenjaju se zajedno (njezino ukupno mjerilo). To je jedan korak poništavanja, a objekti koji nisu anotativni nikad se ne mijenjaju.

Postavka se sprema u DWG i DXF: drugi programi čitaju oznaku anotativnosti, a CadCraft također čuva mjerilo za koje je svaki objekt dimenzioniran.

Ako vaš ured postavlja visine na papiru u dodatku Zadane politike (Postavke › Globalno › Zadane politike › Veličine anotacija na papiru), {{cmd:ANNOSCALE}} također postavlja visinu s kojom novi tekst počinje na visinu ureda za bilješke u tom mjerilu. Pogledajte [Zadane politike](topic:default-policies).

### Jedan objekt u više mjerila

List često prikazuje isti tlocrt u 1:100 i dio u 1:50. Dajte bilješkama i kotama oba mjerila, pa svaki viewport prikazuje ih u njihovoj veličini na papiru:

1. Odaberite anotativni tekst i kote i upišite `OBJECTSCALE`.
2. Odaberite `Add` i upišite mjerilo, na primjer `1:50`. (`Current scale` dodaje mjerilo anotacije crteža; `List` prikazuje što svaki objekt zadržava; `Delete` uklanja jedan.)

Viewport čije je mjerilo na popisu objekta prikazuje ga u veličini za to mjerilo: tekst od 2.5 mm crta se visok 250 kroz viewport 1:100, a 125 kroz 1:50, na zaslonu i u ispisu. Objekt ostaje gdje jest; razlikuje se samo veličina. U viewportu na mjerilu koje nije na popisu objekta objekt se prikazuje u veličini koju ima, dok ne upišete `ANNOALLVISIBLE` i odaberete `OFF`: tada se tamo izostavlja. {{cmd:ANNOSCALE}} mijenja veličinu objekata koji navode novo mjerilo i ostavlja ostale kakvi jesu.

Popisi se spremaju u DWG i DXF kao vlastiti podaci programa CadCraft. Drugi program vidi svaki objekt kao anotativan, na jednom mjerilu za koje je dimenzioniran. Prekidač ANNOALLVISIBLE se ne sprema u datoteku.

## Debljine i vrste linija

Sloj ili objekt može imati **debljinu linije** (0.05 do 2.11 mm) i **vrstu linije** (crtkana, skrivena, središnja, fantomska, točkasta…). Postavite ih u desnoj ploči: kad ništa nije odabrano, {{ui:Vrsta linije}} i {{ui:Debljina linije}} pod {{ui:Trenutne postavke}} su ono što novi objekti dobivaju ({{ui:Po sloju}} za praćenje njihova sloja), a dva pod {{ui:Sloj …}} su vlastita za trenutni sloj. S odabranim objektima ista dva retka i {{ui:Mjerilo vrste linije}} mijenjaju te objekte. Naredbe su {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Vrste linija vide se na zaslonu i u ispisima. Crtice su u jedinicama crteža: metrički crtež koristi ISO veličine (DASHED: crtica 12.7 mm), a crtež u inčima one u inčima (0.5"). Ako su crtice premale ili prevelike, promijenite {{ui:Mjerilo vrste linije}} (LTSCALE) crteža: svaka crtica i razmak množe se njime, a vlastito mjerilo objekta množi ga dodatno. Uzorak koji je previše sitan da se uopće vidi crta se kao puna linija.

Debljine linija ispisuju se u ispisima, u mm na papiru bez obzira na mjerilo. Linije s {{ui:Zadano}} debljinom koriste širinu pera odabranu u dijaloškom okviru {{ui:Ispis u PDF}} (0.13 do 0.70 mm; na početku 0.25 mm); debljina 0 ispisuje se kao najtanja linija. Na zaslonu je svaka linija široka jedan piksel dok ne pritisnete {{ui:LWT}} u statusnoj traci (ili upišete {{cmd:LWDISPLAY}}): tada debljina iznad 0.25 mm crta širu (0.5 mm = 2 piksela) u modelu, a na listu pravu širinu na papiru. Izbor se čuva u ovom pregledniku.
