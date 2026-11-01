---
title: Faili: kas atveras, kas saglabājas
summary: Formāti, ko CadCraft atver, saglabā un eksportē, kas tiek saglabāts vai konvertēts un kur atrodas faili.
keywords: xclip, clip, xclip robeža, saistīt apgrieztu, dwg, dxf, pdf, r12, atvērt, saglabāt, eksportēt, importēt, formāti, konvertēšana, lejupielāde, saveas, dxfout, saglabāt kā, dwg saglabāšana, formāts, qsave, xref, xattach, saistīts rasējums, ārēja atsauce, saistīt, pārlādēt, atdalīt
from: 6d68b34e
---

## Vienā skatienā

| Formāts | Atvērt | Saglabāt | Piezīmes |
|---|---|---|---|
| DXF (teksts, jebkura versija) | Jā | Jā, kā DXF R12 vai DXF 2000 | Binārais DXF tiek noraidīts: vispirms saglabājiet to kā tekstuālu DXF. |
| DWG | Jā | Jā, kā DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 vai 2018) | Lasa un raksta ar CadCraft pašu DWG bibliotēku (AutoCAD R13 līdz 2018 failus). Jūsu DWG nekad netiek mainīts. Bojāti faili vai versijas, ko lasītājs neapstrādā, tiek noraidīti ar paziņojumu. |
| PDF | Ievieto lapu: kā pamatni vai kā objektus ([PDF pamatnes](topic:pdf-underlay)) | Jā, drukājot | Lapas vektoru PDF vai modeļa PDF noteiktā mērogā. |

Katrs atvērtais rasējums (vai rasējums, kas sākts ar {{ui:Jauna}}) saņem savu cilni virs rasējuma laukuma; jauns rasējums, ko vēl neviens nav mainījis, tiek izmantots tā vietā, nevis pievienots kā jauna cilne. Noklikšķiniet uz cilnes, lai pārslēgtos, uz tās {{ui:×}}, lai to aizvērtu (CadCraft vispirms jautā, ja ir nesaglabātas izmaiņas), vai izkārtojiet atvērtos rasējumus blakus: skatiet [Sadalīt ekrānu](topic:split-screen).

## Rasējuma atvēršana

- Nospiediet {{key:Mod+O}}, noklikšķiniet uz {{ui:Atvērt}} vai ierakstiet `OPEN` un izvēlieties failu.
- Vai velciet `.dwg` vai `.dxf` failu uz rasējuma laukumu.

Fails tiek nolasīts jūsu pārlūkprogrammā. Tas nekur netiek augšupielādēts. Vēsturē tiek norādīts, cik objektu un slāņu tika ielasīti un cik ilgi tas aizņēma, un kreisā paneļa sadaļā {{ui:Rasējums}} tiek rādīts formāts, piemēram, "DWG 2018 (AC1032)".

DWG lasītājs ir daļa no CadCraft, un to ielādē kopā ar pirmo DWG, ko atverat pēc lapas ielādes (dažas simtu KB), tāpēc nav atsevišķas lejupielādes, kas jāgaida. Tas nolasa failu fonā, tāpēc lapa turpina reaģēt, kamēr atveras liels DWG.

### Ko ielasa

- Līnijas, lokus, riņķus, polilīnijas (ar loku segmentiem), elipses, punktus, tekstu un daudzrindu tekstu, aizpildītas plaknes, svītrojumus (standarta rakstus, kas zīmēti kā to līnijas, citus kā vienmērīgu toni), bloku atsauces ar to atribūtiem (vērtības, ko var rediģēt; skatiet [Bloku atribūti](topic:attributes)), izmērus un izkārtojumus ar to skatlogiem.
- Splaini ienāk kā splaini (pakāpe, vadības punkti, mezgli, svari, pieguļošie punkti); skatiet [Splaini un polilīnijas](topic:splines).
- Daudznorādes ar vienu norādes līniju un tekstu ienāk kā CadCraft daudznorādes, ko var rediģēt (skatiet {{cmd:MLEADER}}). Pārējās (ar bloku, vairākām norādes līnijām vai līklīnijām) tiek zīmētas tā, kā tās zīmēja otra programma, un pārvietojas kā viens objekts; vēsturē norādīts, cik to ir.
- Attēli tiek rādīti kā rāmis ar attēla faila nosaukumu, līdz norādāt CadCraft failu ar {{cmd:IMAGE}}: skatiet [Attēli rasējumā](topic:pictures#show-the-pictures-a-dwg-uses). Aizsegi (wipeout) tiek rādīti kā to rāmis, un zem tiem esošais paliek redzams.
- Tabulas DWG ienāk tā, kā tās zīmēja otra programma.
- 3D virsmas modeļa telpā ienāk cilnē {{ui:3D}}, nevis kā 2D objekti; tāpat arī tās, kas atrodas blokos, vienu reizi katrai bloka atsaucei modelī. Blokā un lapā tās tiek zīmētas arī plakanas, kā kontūras. Skatiet [Modelis 3D](topic:3d-solids).
- Slāņi saglabā savu krāsu, ieslēgšanas, iesaldēšanas, bloķēšanas un drukāšanas iestatījumus. DEFPOINTS nekad netiek drukāts.
- Izmēri kļūst par īstiem, rediģējamiem CadCraft izmēriem tur, kur var nolasīt to punktus. Sākumā tie tiek rādīti tieši tā, kā tos zīmēja otra programma; tiklīdz mainīsiet kādu no tiem, CadCraft to pārzīmē savā stilā.
- Katrs izkārtojums kļūst par lapas cilni. Otrā programmā katram izkārtojumam ir paslēpts pirmais skatlogs, kas ir pati lapa; CadCraft to neiekļauj.

### Kas vēl neienāk

Viss, ko CadCraft nevar uzzīmēt, tiek saskaitīts, nevis minēts. Lodziņā "Par šo failu" kreisajā panelī tas ir uzskaitīts kā "Vēl nav rādīts:", kam seko katrs objektu veids un to skaits. Tipiski gadījumi ir tabulas DXF, tīkli un 3D cietie ķermeņi blokos. 3D cietie ķermeņi, reģioni un ķermeņi modeļa telpā tiek rādīti cilnē 3D (skatiet [Modelis 3D](topic:3d-solids#solids-from-other-programs)). Failā pagriezti skatlogi tiek rādīti pagriezti, kā tur, un saglabā savu pagriezienu, kad saglabājat failu; tāpat tiek saglabāts pašreizējais UCS, nosauktie UCS un pagriezts skats.

Teksts tiek zīmēts vienā Helvetica stila fontā. Iezīme, kas oriģinālās programmas šaurākā fontā ietilpst vienā rindā, CadCraft var pārnesties uz divām rindām.

## Saglabāšana

Ir trīs veidi, kā saglabāt. Katrs no tiem lejupielādē kopiju.

- **Saglabāt**: nospiediet {{key:Mod+S}}, noklikšķiniet uz {{ui:Saglabāt}} vai ierakstiet `SAVE` (vai `QSAVE`). Tiek saglabāts rasējuma formātā: DWG, ja atvērāt DWG, DXF, ja atvērāt DXF. DWG saglabā versiju, ar kādu tas ienāca (2018. gada fails tiek saglabāts kā 2018). Jauns rasējums izmanto formātu un DWG versiju, ko pēdējo izvēlējāties sadaļā {{ui:Saglabāt kā}} šajā pārlūkprogrammā; ja neesat neko izvēlējies, tas ir DWG AutoCAD 2000 formātā.
- **Saglabāt kā**: nospiediet {{key:Mod+Shift+S}}, noklikšķiniet uz {{ui:Saglabāt kā}} vai ierakstiet `SAVEAS`. Dialogs {{ui:Saglabāt kopiju kā}} piedāvā {{ui:DWG}} ar sarakstu {{ui:Versija}} (AutoCAD 2018, 2013, 2010, 2007, 2004 vai 2000), {{ui:DXF R12}} un {{ui:DXF 2000}}, katram ar faila nosaukumu, ko tas dos, un jau izvēlētu rasējuma pašreizējo formātu un versiju. Noklikšķiniet uz {{ui:Saglabāt}}, lai lejupielādētu, vai uz {{ui:Atcelt}} (vai {{key:Esc}}), lai neko nesaglabātu; vēsturē tad būs "Nav saglabāts." Jūsu izvēle paliek spēkā: no šī brīža {{key:Mod+S}} to izmanto šim rasējumam, un jauni rasējumi šajā pārlūkprogrammā sākas ar to.
- **DXFOUT**: ierakstiet `DXFOUT`. Tas vienmēr lejupielādē DXF R12 kopiju, un nākamais {{key:Mod+S}} joprojām saglabā rasējumu tā pašā formātā.

Pārlūkprogramma lejupielādē `<rasējuma nosaukums>.dwg` vai `<rasējuma nosaukums>.dxf`. Katra saglabāšana ir **jauna lejupielāde**; atvērtais fails nekad netiek pārrakstīts vai mainīts. Vēsture to apstiprina, piemēram: "Saglabāta kopija kā Plan.dwg (DWG (AutoCAD 2018)). Jūsu oriģinālais Plan.dxf nav mainīts." DXF gadījumā tur ir teikts "(DXF R12, atveras jebkurā CAD programmā)". Zemāk esošajās rindās uzskaitīts viss, kas šajā procesā mainījās.

Kad CadCraft darbojas darbvirsmas lietotnē, saglabāšana notiek kā citās darbvirsmas programmās: {{key:Mod+S}} ieraksta rasējumu atpakaļ atvērtajā failā tā formātā un versijā, un vēsturē norādīts, kur tas saglabāts. {{ui:Saglabāt kā}} un eksporta funkcijas rāda sistēmas saglabāšanas dialogu, un `.dwg`, `.dxf` vai `.ccsheets` fails, ko veicat dubultklikšķi, atveras CadCraft.

PDF gadījumā drukājiet (skatiet tālāk).

## Ko DWG saglabā un maina

CadCraft pats raksta DWG jūsu pārlūkprogrammā ar to pašu DWG bibliotēku, ar kuru to nolasa. Izvēlieties versiju sadaļā Saglabāt kā: AutoCAD 2000 formāts (faila versija AC1015) atveras visvairāk programmās, arī vecākās; jaunākie formāti (2004, AC1018, līdz 2018, AC1032) saglabā arī patiesās krāsas. Nekas netiek augšupielādēts, un DWG saglabāšana darbojas bezsaistē.

Katra versija tiek pārbaudīta, nolasot saglabātos failus ar trim citu programmu DWG lasītājiem un ar pašu CadCraft. CadCraft DWG vēl nav atvērts pašā AutoCAD.

### Ko DWG saglabā

- Līnijas, lokus, riņķus, elipses, punktus un polilīnijas ar to loku segmentiem.
- Vienrindas tekstu ar tā izlīdzinājumu un platuma koeficientu.
- Daudzrindu un pārnestu tekstu kā daudzrindu tekstu. Otra programma to pārnes atkal no tā paša platuma.
- Objektu krāsas: pēc slāņa, pēc bloka, 255 standartkrāsas un patiesās krāsas 2004. formātā un jaunākos.
- Slāņus ar to krāsu, līniju tipu, līnijas biezumu un ieslēgšanas, iesaldēšanas, bloķēšanas un drukāšanas iestatījumiem; objektu pašus līniju tipus, līniju biezumus un līniju tipu mērogus, līniju tipu rakstus un rasējuma līniju tipa mērogu.
- Rasējuma vienības un garuma formātu (decimālais, pēdas un collas, daļas…).
- Blokus ar to bāzes punktu un atribūtu definīcijām, arī neredzamām, konstantām un iepriekš iestatītām.
- Bloku atsauces ar to mērogu, pagriezienu un atribūtu vērtībām.
- Cietās aizpildes un rakstainus svītrojumus ar to rakstu, mērogu un leņķi (paša raksta līnijas, tāpēc citas programmas zīmē tās pašas līnijas, ko CadCraft).
- Izmērus kā īstus izmērus: citas programmas tos pārmēra, kad tie tiek stiepti. Katrs saglabā savus iestatījumus (teksta augstumu, bultiņas izmēru, decimāldaļas, garuma formātu) un savu tekstu, un nes zīmēto kopiju, kāda ir katram DWG izmēram.
- Lapas (izkārtojumus): katru lapu ar tās papīra izmēru un vienībām, tajā zīmēto un tās skatlogus ar to skatu un mērogu.
- Nosauktos skatus.
- Daudznorādes kā daudznorādes.
- Slāņu un bloku nosaukumus tādus, kā ievadījāt, ar lielajiem un mazajiem burtiem. (DXF R12 raksta tos lielajos burtos.)

### Ko DWG maina

Katrs no šiem vēsturē tiek uzskaitīts pēc saglabāšanas, ja tas attiecas uz jūsu rasējumu.

| CadCraft | Saglabātajā DWG |
|---|---|
| Patiesās krāsas (izvēlētas ar krāsu atlasītāju), 2000. formātā | Tuvākā standartkrāsa: 2000. formātā ir tikai 255. Saglabājiet kā 2004 vai jaunākā versijā, lai tās paturētu |
| Lapas nosauktie skati | Papīra telpas skati: DWG nenorāda, kurai lapai tie pieder, tāpēc, kad CadCraft atkal atver failu, tie pieder pirmajai lapai |
| Daudzrindu teksts ar platuma koeficientu | Parasts burtu platums: DWG platuma koeficients attiecas tikai uz vienrindas tekstu |
| Slāņu vai bloku nosaukumi ar rakstzīmēm, ko DWG neatļauj | Mainīti: nosaukums no saistītā rasējuma, piemēram `Base\|Walls`, kļūst par `Base$0$Walls` (tā, kā to nosauc saistītā rasējuma saistīšana), un citas rakstzīmes kļūst par `_` |

### Kāpēc R12 un kas tiek konvertēts

Saglabājot kā DXF, CadCraft raksta DXF R12 — versiju, ko var atvērt katra CAD programma. Tā ir vecāka par dažām funkcijām, tāpēc dažas lietas tiek rakstītas vienkāršākā formā:

| CadCraft | Saglabātajā R12 failā |
|---|---|
| Daudzrindu teksts | Viens teksta objekts katrai rindai |
| Elipses | Polilīnijas, kas seko elipsei |
| Svītrojumi (no atvērtiem failiem) | Tikai to kontūras |
| Patiesās krāsas (izvēlētas ar krāsu atlasītāju) | Tuvākā standartkrāsa |
| Līniju biezumi un objektu pašu līniju tipu mērogi | Atstāti ārpus: R12 nav ne vienam, ne otram (līniju tipi tiek saglabāti) |
| Slāņu un bloku nosaukumi | Rakstīti lielajos burtos; atstarpes un citas rakstzīmes kļūst par `_`, un nosaukumi tiek saīsināti līdz 31 rakstzīmei ("Titulblok" kļūst par `TITULBLOKS`) |
| Slāņi, kas nav iestatīti drukāšanai | Citas programmas tos izdrukās (CadCraft atceras iestatījumu, ja rasējumam ir lapa) |
| Izmēri | Īsti izmēri ar savu zīmēto bloku, tāpēc citas programmas tos parāda tā, kā jūs tos redzat |
| Daudznorādes | Līnijas, bultiņa un teksts, ko tās zīmē |
| Nosauktie skati | Saglabāti, ar nosaukumiem lielajos burtos; lapas skati atgriežas pirmajā lapā |
| Vairākas lapas | Pirmā lapa ir papīra telpa, ko rāda katra programma; pārējās saglabātas kā bloki ar nosaukumiem `CCLAYOUT_1`, `CCLAYOUT_2` … , ko CadCraft pārvērš atpakaļ lapās, kad atver failu |

Vēsturē uzskaitīts katrs no šiem, kas attiecas uz jūsu rasējumu.

:::tip
Lai vairāku dienu garumā turpinātu strādāt pie rasējuma, saglabājiet kā DXF un nākamreiz atveriet šo DXF. Viss, ko CadCraft var uzzīmēt, saglabājas pilnā ciklā, ieskaitot izmērus, blokus un visas lapas.
:::

## Saistītie rasējumi (ārējās atsauces)

{{cmd:XATTACH}} (`XA`, vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Pievienot rasējumu (xref)}}) saista citu DWG vai DXF: izvēlieties failu, pēc tam noklikšķiniet, kur tas jānovieto ({{key:Enter}} ievieto to punktā 0,0). Tas ienāk kā viens bloks ar faila nosaukumu, īstajā mērogā, ja abiem rasējumiem ir dažādas vienības. Tā slāņi un bloki paturēs savus nosaukumus ar saistījuma nosaukumu priekšā — `Plan|Walls`, `Plan|Door` —, tāpēc nekad nesajaucas ar jūsējiem: ieslēdziet un izslēdziet saistītos slāņus, iesaldējiet vai bloķējiet tos kā savus. Saistījums ir tikai lasāms: mainiet otru rasējumu un pārlādējiet to. Tas, ko iestatāt saistītā slāņa iestatījumos (krāsa, līniju tips, līnijas biezums, ieslēgts/izslēgts, iesaldēts, bloķēts, drukāts), tiek saglabāts, kad to pārlādējat, kad saglabājat rasējumu kā DWG, kamēr saistījums joprojām ir saistījums, un kad cits rasējums saista šo.

{{cmd:XREF}} (`XR`): `?` uzskaita saistījumus (ielādētus vai neielādētus, kurš fails, cik atsauču); `A` pievieno; `R` pārlādē vienu no tā faila (atkal izvēlieties failu: pārlūkprogramma pati nevar piekļūt jūsu mapēm); `B` saista vienu (tas kļūst par parastiem blokiem un slāņiem ar nosaukumu `Plan$0$Walls`); `D` atdala vienu (tā atsauces un slāņi tiek izņemti). Katrs ir viens atsaukšanas solis.

{{cmd:XCLIP}} (`XC`) apgriež bloku atsauces un saistījumus: atlasiet tās, `N` jaunai robežai, tad `R` un divi stūri vai `P` un daudzstūra punkti ({{key:Enter}} to noslēdz); `D` noņem apgriešanu. Redzams un drukājams ir tikai tas, kas atrodas iekšpusē, un apgriešana pārvietojas kopā ar atsauci. DWG un DXF 2000 saglabā apgriešanas; DXF R12 saglabā atsauci pilnu un par to brīdina. Kad saistāt saistījumu ar apgrieztām atsaucēm, {{cmd:XREF}} `B` jautā: `A` saista visu, `C` paturē tikai katras atsauces apgriezto daļu (līnijas un loki tiek nogriezti pie robežas; teksti un ligzdotie bloki paliek, ja to ievietošanas punkts ir iekšpusē).

Atvērtais rasējums var saistīt failus, ko CadCraft nevar redzēt: tas norāda, cik no tiem nav ielādēti. Lai tos redzētu, izmantojiet {{cmd:XREF}}, `R` un izvēlieties katru failu.

Saglabājot, ielādētais saistījums tiek **saistīts** failā (citas programmas redz parastus blokus un slāņus ar nosaukumu `Plan$0$…`), un vēsturē par to ir teikts. Saistījums, kas nav ielādēts, paliek saistījums uz savu failu, DWG un DXF.

## Atvērt 3D

{{ui:Skats}} › {{ui:Vairāk}} › {{ui:Atvērt ModelCraft}} ({{cmd:OPENIN3D}}) atver rasējumu 3D modelēšanas lietotnē jaunā cilnē, kā DWG, bez augšupielādes. Tur veiktās izmaiņas paliek tur; saglabājiet tās tur. Izvēlnes vienums tiek rādīts tikai tur, kur šī lietotne var pārņemt nodoto rasējumu.

## Drukāšana uz PDF

Nospiediet {{key:Mod+P}}, noklikšķiniet uz {{ui:Drukāt}} vai ierakstiet `PLOT`. PDF tiek veidots pārlūkprogrammā un lejupielādēts vai atvērts jaunā cilnē drukāšanai. Skatiet [Drukāt PDF](topic:plot-pdf).

## Kur nonāk faili

Katra saglabāšana un katra drukāšana ir lejupielāde, tāpēc faili nonāk tur, kur jūsu pārlūkprogramma saglabā lejupielādes: parasti mapē Lejupielādes. Lai katru reizi izvēlētos mapi, mainiet lejupielādes iestatījumu savā pārlūkprogrammā; [Pārlūkprogrammas un datori](common:browsers) parāda, kur tas ir.

Nekas, ko atverat vai saglabājat, mums netiek nosūtīts. Skatiet [Kur nonāk jūsu faili](common:your-files).

## PLN un PLA projekta faili

CadCraft atver DWG un DXF rasējumus, nevis Archicad savus failus (`.pln`, `.pla`, `.tpl`, `.bpn`). Atverot vienu no tiem, tiek paziņots, kas tas ir. Archicad saglabājiet nepieciešamos skatus vai izkārtojumus kā DWG un atveriet tos šeit, vai eksportējiet modeli kā IFC un atveriet to BimCraft. Kur BimCraft var pārņemt failu, CadCraft piedāvā {{ui:Atvērt programmā BimCraft}}.

## Ja lapa aizveras pirms saglabāšanas

CadCraft tikai šajā pārlūkprogrammā saglabā katra jūsu mainītā rasējuma kopiju neilgi pēc rediģēšanas pārtraukšanas. Ja cilne aizveras, pārlūkprogramma apstājas vai dators restartējas pirms saglabāšanas, nākamreiz, kad CadCraft startē, tas jautā **Atkopt jūsu darbu?**: {{ui:Atkopt}} atver rasējumu atkal, nesaglabātu, savā cilnē. Rasējuma saglabāšana noņem tā kopiju. Skatiet [Atkopt jūsu darbu](common:recover).

## Tiešsaistē un bezsaistē

Atvēršana, zīmēšana, saglabāšana (DWG un DXF) un drukāšana notiek jūsu datorā, tāpēc tās darbojas bez savienojuma, kad CadCraft ir ielādēts.

Lai lietotu CadCraft bez jebkāda savienojuma, tiešsaistē augšējā joslā noklikšķiniet uz {{ui:Saglabāt bezsaistei}}. Uzraksts skaita uz augšu ("Saglabā 40 no 212") un beidzas ar "Gatavs darbam bezsaistē". Saglabātajā kopijā ir DWG lasītājs, kopā aptuveni 5 MB, tāpēc **DWG faili atveras arī bezsaistē**, kad tā ir saglabāta. Vēlreiz noklikšķiniet uz pogas, lai izmantotu {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} vai {{ui:Noņemt bezsaistes kopiju}}. "Neizdevās saglabāt" nozīmē, ka daži faili netika lejupielādēti: pārbaudiet savienojumu un noklikšķiniet, lai mēģinātu vēlreiz. "Bezsaiste nav pieejama" nozīmē, ka šis pārlūkprogrammas logs nevar saglabāt kopiju (privātie logi un dažas pārvaldītas ierīces).

Bez saglabātas kopijas DWG lasītājs tiek ielādēts, kad pirmo reizi atverat DWG pēc lapas ielādes, tāpēc DWG atvēršana bezsaistē var neizdoties; DXF failiem tas nekad nav vajadzīgs. Bezsaistē nepārlādējiet lapu, ja CadCraft nav saglabāts.

Sīkāku informāciju skatiet sadaļā [Darbs bezsaistē](common:offline).

:::offline
Jūs tagad esat bezsaistē. Rasējumi tiek saglabāti kā DWG vai DXF un drukājas parasti, un DXF faili atveras. DWG faili atveras, ja CadCraft rāda "Gatavs darbam bezsaistē" vai ja DWG lasītājs jau ir ielādēts šajā cilnē.
:::

## Ierobežojumi failos

Ierobežojumi un parametri (skatiet [Ierobežot rasējumu](topic:constraints)) tiek saglabāti gan DWG, gan DXF. Katram ierobežotajam objektam ir neliela CadCraft piezīme (paplašinātie dati), un neizmantots bloks ar nosaukumu `CADCRAFT_PARAMETRIC` satur ierobežojumus un parametru tabulu. Citas programmas atver rasējumu parasti un ignorē abus; tās var dzēst neizmantoto bloku, kad to tīra. Piezīmes atsaucas uz objektiem pēc to paša atslēgas, nevis faila rokturiem, tāpēc programma, kas pārnumurē rokturus, tos nesalauž. Kad cita programma ir dzēsusi vai mainījusi ierobežotu objektu, CadCraft, atverot failu, noņem tam ierobežojumus un norāda, cik. Fails bez tiem atveras bez ierobežojumiem.

Skice, kas eksportēta no detaļu modelētāja (`.json`), arī atveras: skatiet [Pārvietot skices uz citiem detaļu modelētājiem un no tiem](topic:solidworks-sketches).

## Vēl nav pieejams

- Daudznorādes kā daudznorāžu objekti saglabātā DXF (R12 tādu nav: tās tiek saglabātas kā tas, ko tās zīmē).
- Attēli saglabātā DXF (tie tiek saglabāti kā to rāmji; DWG tos saglabā kā attēlus) un aizsegi, kas paslēpj zem tiem esošo.
- Jaunākas DXF versijas nekā 2000 saglabāšana.
- Saglabāšana mākonī un sinhronizācija starp datoriem.

Pilnu sarakstu skatiet sadaļā [Vēl nav izveidots](topic:not-built-yet).
