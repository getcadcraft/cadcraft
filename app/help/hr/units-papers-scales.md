---
title: Jedinice, formati papira i mjerila
summary: Što znače jedinice crteža u programu CadCraft, formati papira za listove i ispise, sva standardna mjerila te kako se veličine teksta i kota odnose prema mjerilu ispisa.
keywords: jedinice, milimetri, inči, stope, stope i inči, arhitektonski, inženjerski, razlomci, lunits, oblik duljine, preciznost, metri, format papira, a3, a1, arch d, ansi, tabloid, letter, mjerilo, 1:100, 1/4 inča, arhitektonsko mjerilo, inženjersko mjerilo, insunits
from: 7dc9b62e
---

## Jedinice crteža

Crtate u punoj veličini, u jedinicama crteža. Što jedna jedinica znači određuje postavka **Jedinice** crteža:

1. Pritisnite {{key:Esc}} da ništa ne bude odabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutne postavke}} odaberite {{ui:Jedinice}}: {{ui:Bez jedinica}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Inči}} ili {{ui:Stope}}.

Kote mogu pisati svoje duljine u milimetrima, centimetrima, metrima ili kilometrima, bez obzira na jedinicu crteža: pogledajte [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Promjena jedinica ne mijenja veličinu ničega. Mijenja kako se mjerila čitaju na listovima i u ispisima te koja se mjerila nude. Crtež otvoren iz DWG-a ili DXF-a zadržava jedinice pohranjene u datoteci; odjeljak {{ui:Crtež}} u lijevoj ploči ih prikazuje.

Crtež {{ui:Bez jedinica}} smatra se jedinicom papira: milimetrima na ISO papiru, inčima na američkom papiru.

## Stope i inči te razlomci

Kako se duljine **pišu i upisuju** zasebna je postavka, oblik duljine. Ne mijenja geometriju, samo kako brojevi izgledaju i što možete upisati.

1. Pritisnite {{key:Esc}} da ništa ne bude odabrano, na kartici {{ui:Model}}.
2. U {{ui:Trenutne postavke}} odaberite {{ui:Oblik duljine}}: {{ui:Decimalno}} (`150.5`), {{ui:Arhitektonsko}} (`12'-6 1/2"`), {{ui:Inženjersko}} (`12'-6.5"`), {{ui:Razlomci}} (`150 1/2`) ili {{ui:Znanstveno}} (`1.505E+02`).
3. Odaberite {{ui:Preciznost}}: decimalna mjesta ili najmanji razlomak (1/16 je uobičajen izbor za arhitektonsko).

Ili upišite {{cmd:UNITS}} (`UN`) i odgovorite na njegova dva pitanja.

S {{ui:Arhitektonsko}} ili {{ui:Inženjersko}}, jedna jedinica crteža je jedan inč, kao u AutoCADu: postavite i {{ui:Jedinice}} na {{ui:Inči}}. Tada duljine možete upisivati u stopama i inčima gdje god se traži duljina, te u poljima {{ui:Svojstva}}:

| Upišete | Znači |
|---|---|
| `12'6"` ili `12'-6"` | 12 stopa 6 inča (150) |
| `12'6-1/2"` | 12 stopa 6½ inča. Rabite crticu prije razlomka: {{key:Space}} je {{key:Enter}} u naredbenom retku. |
| `12'` | 12 stopa |
| `6"` ili `6` | 6 inča: običan broj znači inče |
| `1/2`, `6-1/2` | razlomci rade u svakom obliku |

Točke primaju iste duljine: `@12'6",0` ili `@10'<90`. Kutovi ostaju u stupnjevima.

Oblik se prikazuje u povijesti ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: površine kao kvadratni inči i kvadratne stope), u {{ui:Svojstva}}, u koordinatama u statusnoj traci i u **novim kotama**. Listovi zadržavaju svoje jedinice papira (milimetre ili inče) kao decimalne brojeve.

:::note
Oblik duljine sprema se u datotekama DWG i DXF, a svaka kota zadržava svoj: spremljeni crtež se ponovno otvara kako ste ga ostavili.
:::

## Formati papira

Listovi i ispisi modela rabe ove veličine, u oba smjera:

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

Novi listovi počinju na ISO A3 za metrične crteže i crteže bez jedinica, a na Tabloid za crteže u inčima ili stopama. Ispisi modela počinju na ISO A4 ili Letter na isti način, zatim pamte vaš zadnji izbor. Listovi iz otvorenih datoteka zadržavaju svoju veličinu, prikazanu kao „Prilagođeno“ kad nije jedna od ovih.

## Mjerila

Mjerilo `1:n` znači da jedna jedinica na papiru prikazuje n istih jedinica u modelu, pa 1:100 prikazuje 1 m zgrade kao 10 mm papira. CadCraft to računa iz jedinica crteža i jedinice papira.

**Metrička mjerila**, nude se za svaki crtež: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektonska mjerila**, nude se kad su jedinice inči ili stope: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženjerska mjerila**, nude se kad su jedinice inči ili stope: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vlastita mjerila.** Upišite `SCALELISTEDIT` (ili `SCALELIST`) da dodate vlastito mjerilo, na primjer 1:75 ili mjerilo gradilišta 2 papira : 300 crteža. `Add` pita naziv, zatim jedinice papira i jedinice crteža (naziv poput `1:75` nudi vlastite brojeve; pritisnite {{key:Enter}} da ih uzmete). `Edit`, `Delete`, `List` i `Reset` rade na istom popisu; `Reset` vraća standardni popis. Vaša mjerila se pojavljuju iza standardnih u popisu mjerila prikaza u Svojstvima i u dijaloškom okviru {{ui:Ispis u PDF}}; prikaz u tom mjerilu čita se s njegovim nazivom, a spremaju se u crtežu (DWG i DXF 2000) kao popis mjerila crteža. Crtež otvoren iz drugog programa donosi svoj popis; mjerila koja se podudaraju sa standardnim ne prikazuju se dvaput.

Kad se prikaz usmjeri s {{ui:Prikaži cijeli model}} ili {{ui:Odaberite prozor na modelu…}}, CadCraft bira najveće standardno mjerilo koje stane. {{ui:Prilagodi cijeli model}} umjesto toga postavlja točno mjerilo, koje se čita kao običan omjer.

## Veličine na papiru i u modelu

Veličine teksta i kota su u jedinicama prostora u kojem crtate.

| Želite na papiru | Nacrtano na listu | Nacrtano u modelu u 1:50 (crtež u mm) | Nacrtano u modelu u 1/4" = 1'-0" (crtež u inčima) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

Za kote zadržite veličine kao veličine na papiru i postavite ukupno mjerilo ({{cmd:DIMSCALE}}) na mjerilo ispisa: 50 za 1:50, 48 za 1/4" = 1'-0". Pogledajte [Postavljanje veličina kota](topic:dimension-settings).

## Anotacija prema mjerilu

Crtajte model u punoj veličini i neka CadCraft izračuna gornje za vas.

1. Odaberite tekst ili kote koji trebaju zadržati svoju veličinu na papiru. U Svojstvima označite {{ui:Anotativno}}. {{ui:Veličina na papiru}} tada kaže, na primjer, `2.5 mm at 1:50`.
2. Upišite {{cmd:ANNOSCALE}} i mjerilo u kojem će crtež biti ispisan, na primjer `1:100`.

Svaki anotativni tekst i kota mijenja veličinu tako da se ispisuje u istoj veličini u novom mjerilu: tekst 2.5 mm je visok 125 u crtežu u milimetrima u 1:50, a 250 u 1:100. Širina odlomka mijenja se s njim; tekst, strelice i razmaci kote mijenjaju se zajedno (njezino ukupno mjerilo). To je jedan korak poništavanja, a objekti koji nisu anotativni nikad se ne mijenjaju.

Postavka se sprema u DWG i DXF: drugi programi čitaju oznaku anotativnosti, a CadCraft također čuva mjerilo za koje je svaki objekt dimenzioniran.

Ako vaš ured postavlja visine na papiru u dodatku Zadane politike (Postavke › Općenito › Zadane politike › Veličine anotacija na papiru), {{cmd:ANNOSCALE}} također postavlja visinu s kojom novi tekst počinje na visinu ureda za bilješke u tom mjerilu. Pogledajte [Zadane politike](topic:default-policies).

### Jedan objekt u više mjerila

List često prikazuje isti nacrt u 1:100 i jedan njegov dio u 1:50. Dajte bilješkama i kotama oba mjerila i svaki prikaz ih prikazuje u njihovoj veličini na papiru:

1. Odaberite anotativni tekst i kote i upišite `OBJECTSCALE`.
2. Odaberite `Add` i upišite mjerilo, na primjer `1:50`. (`Current scale` dodaje anotacijsko mjerilo crteža; `List` prikazuje što svaki objekt zadržava; `Delete` uklanja jedno.)

Prikaz čije je mjerilo na popisu objekta prikazuje ga u veličini za to mjerilo: tekst 2.5 mm crta se visok 250 kroz prikaz 1:100, a 125 kroz 1:50, na zaslonu i u ispisu. Objekt ostaje gdje jest; razlikuje se samo veličina. U prikazu u mjerilu koje nije na popisu objekt se prikazuje u veličini koju ima, dok ne upišete `ANNOALLVISIBLE` i odaberete `OFF`: tada se tamo izostavlja. {{cmd:ANNOSCALE}} mijenja veličinu objektima koji imaju novo mjerilo na popisu, a ostale ostavlja kakvi jesu.

Popisi se spremaju u DWG i DXF kao CadCraftovi vlastiti podaci. Drugi program vidi svaki objekt kao anotativan, u jednom mjerilu za koje je dimenzioniran. Prekidač ANNOALLVISIBLE se ne čuva u datoteci.

## Debljine linija i tipovi linija

Sloj ili objekt može imati **debljinu linije** (0.05 do 2.11 mm) i **tip linije** (crtkana, skrivena, središnja, fantomska, točkasta…). Postavite ih u desnoj ploči: kad ništa nije odabrano, {{ui:Tip linije}} i {{ui:Debljina linije}} pod {{ui:Trenutne postavke}} su ono što dobivaju novi objekti ({{ui:Po sloju}} za praćenje njihova sloja), a dva pod {{ui:Sloj …}} su vlastita svojstva aktivnog sloja. Kad su objekti odabrani, ista dva retka i {{ui:Mjerilo tipa linije}} mijenjaju te objekte. Naredbe su {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Tipovi linija prikazuju se na zaslonu i u ispisima. Njihove crtice su u jedinicama crteža: metrički crtež rabi ISO veličine (DASHED: crtice od 12.7 mm), crtež u inčima one u inčima (0.5"). Ako crtice izgledaju premalo ili preveliko, promijenite {{ui:Mjerilo tipa linije}} crteža (LTSCALE): svaka crtica i razmak množe se njime; vlastito mjerilo objekta množi ga ponovno. Uzorak previše sitan da se uopće vidi crta se kao puna linija.

Debljine linija se ispisuju, u mm na papiru bez obzira na mjerilo. Linije s {{ui:Zadano}} debljinom rabe širinu pera izabranu u dijaloškom okviru {{ui:Ispis u PDF}} (0.13 do 0.70 mm; najprije 0.25 mm); debljina 0 ispisuje se kao najtanja linija. Na zaslonu je svaka linija široka jedan piksel dok ne pritisnete {{ui:LWT}} u statusnoj traci (ili upišete {{cmd:LWDISPLAY}}): tada se debljina iznad 0.25 mm crta šire (0.5 mm = 2 piksela) u modelu, a na listu u svojoj stvarnoj širini na papiru. Izbor se čuva u ovom pregledniku.

## Uredski standard

Ured može čuvati visine teksta na papiru, slojeve, polja zaglavlja i predloške u jednom zapisu, uredskom standardu. CadCraft ga čita ovim redom: vlastiti zapis crteža (postavljen s {{cmd:OFFICESTANDARD}} › `Import`, čuva se u datoteci), zajednički standard vašeg tima, pa zatim Zadane politike. Anotativni tekst i kote uzimaju visinu na papiru iz njega u anotacijskom mjerilu. Prazan standard ništa ne mijenja. {{cmd:OFFICESTANDARD}} › `Layers` dodaje uredske slojeve koji crtežu nedostaju.
