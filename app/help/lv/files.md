---
title: Faili: ko atver, ko saglabā
summary: Formāti, ko CadCraft atver, saglabā un eksportē, kas tiek paturēts vai pārveidots un kur faili tiek glabāti.
keywords: xclip, clip, xclip robeža, saistīt apgriezto, dwg, dxf, pdf, r12, atvērt, saglabāt, eksportēt, importēt, formāti, pārveidošana, lejupielāde, saveas, dxfout, saglabāt kā, dwg saglabāšana, formāts, qsave, xref, xattach, saistīts rasējums, ārēja atsauce, saistīt, pārlādēt, atvienot
from: b8c5778d
---

## Īsumā

| Formāts | Atvērt | Saglabāt | Piezīmes |
|---|---|---|---|
| DXF (teksta vai bināra, jebkura versija) | Jā | Jā, kā DXF R12, DXF 2000 vai DXF 2000 (bināra) | Bināra DXF atveras kā teksta un saglabājas atpakaļ kā bināra. |
| DWG | Jā | Jā, kā DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 vai 2018) | Lasa un raksta ar CadCraft pašu DWG bibliotēku (AutoCAD R13 līdz 2018 failus). Jūsu DWG nekad netiek mainīts. Bojāti faili vai versijas, ko lasītājs neapstrādā, tiek noraidīti ar ziņojumu. |
| PDF | Ieved lapu: kā pamatni vai kā objektus ([PDF pamatnes](topic:pdf-underlay)) | Jā, drukājot | Vektoru PDF lapai vai modelim mērogā. |

Katram atvērtajam rasējumam (vai tam, ko sākat ar {{ui:Jauna}}) virs zīmēšanas apgabala ir sava cilne. Jauns rasējums, ko neviens vēl nav mainījis, tiek izmantots tā vietā, nevis pievienojot cilni. Noklikšķiniet cilni, lai pārslēgtos, uz tās {{ui:×}}, lai to aizvērtu (CadCraft pirms tam jautā, ja ir nesaglabātas izmaiņas), vai izkārtojiet atvērtos rasējumus blakus: skatiet [Ekrāna sadalīšana](topic:split-screen).

## Rasējuma atvēršana

- Nospiediet {{key:Mod+O}}, noklikšķiniet {{ui:Atvērt}} vai ierakstiet `OPEN`, tad izvēlieties failu.
- Vai velciet `.dwg` vai `.dxf` failu uz zīmēšanas apgabalu.

Fails tiek nolasīts jūsu pārlūkprogrammā. Tas nekur netiek augšupielādēts. Vēsture ziņo, cik objektu un slāņu tika ievietoti un cik ilgi tas prasīja, un kreisā paneļa sadaļa {{ui:Rasējums}} rāda formātu, piemēram, "DWG 2018 (AC1032)".

DWG lasītājs ir daļa no CadCraft un tiek ielādēts kopā ar pirmo DWG, ko atverat pēc lapas ielādes (dažus simtus KB), tāpēc atsevišķa lejupielāde nav jāgaida. Tas lasa failu fonā, tāpēc lapa turpina reaģēt, kamēr atveras liels DWG.

DXF tiek lasīts daļās pa aptuveni 4 MB, nekad kā viens teksta bloks, tāpēc DXF virs 512 MB arī atveras. Ierobežo jūsu datora atmiņa: DXF atvēršanas laikā sagaidiet, ka tiks izmantots aptuveni 16 līdz 20 reizes vairāk nekā faila izmērs (100 MB DXF ar aptuveni 690 000 objektiem mūsu testā izmantoja aptuveni 1.5 GB).

### Kas ienāk

- Līnijas, loki, riņķi, polilīnijas (ar loku segmentiem), elipses, punkti, teksts un daudzrindu teksts, cietie ķermeņi, svītrojumi (standarta rakstu līnijas kā līnijas, citi kā plakans tonis), bloku atsauces ar saviem atribūtiem (vērtības, ko var rediģēt; skatiet [Bloka atribūti](topic:attributes)), izmēri un lapas ar saviem skatlogiem.
- Splaini ienāk kā splaini (pakāpe, vadības punkti, mezgli, svari, pieskaršanas punkti); skatiet [Splaini un polilīnijas](topic:splines).
- Daudzvadotņu izsaukumi ar vienu vadotnes līniju un tekstu ienāk kā CadCraft daudzvadotņu izsaukumi, ko var rediģēt (skatiet {{cmd:MLEADER}}). Citi (ar bloku, vairākām vadotnes līnijām vai izliektām līnijām) tiek zīmēti tā, kā tos zīmēja cita programma, un pārvietojas kā viens; vēsture norāda, cik to ir.
- Attēli (pictures) tiek rādīti kā rāmis ar attēla faila nosaukumu, līdz jūs norādāt CadCraft failu ar {{cmd:IMAGE}}: skatiet [Attēli rasējumā](topic:pictures#show-the-pictures-a-dwg-uses). Aizsegi tiek rādīti kā to rāmis, un tas, kas atrodas zem tiem, paliek redzams.
- Tabulas DWG ienāk tā, kā tās zīmēja cita programma.
- 3D sejas modeļa telpā ienāk cilnē {{ui:3D}}, nevis kā 2D objekti; tāpat tās, kas atrodas blokos, vienreiz katrai bloka atsaucei modelī. Blokā un lapā tās tiek zīmētas arī plakanas, kā kontūras. Skatiet [Modelis 3D](topic:3d-solids).
- Slāņi saglabā savu krāsu, ieslēgto, iesaldēto, bloķēto un drukas iestatījumus. DEFPOINTS nekad nedrukājas.
- Izmēri kļūst par reāliem, rediģējamiem CadCraft izmēriem, kur to punktus var nolasīt. Vispirms tie tiek rādīti tieši tā, kā tos zīmēja cita programma; tiklīdz maināt kādu no tiem, CadCraft to pārzīmē savā stilā.
- Katrs izkārtojums kļūst par lapas cilni. Citā programmā katram izkārtojumam ir paslēpts pirmais skatlogs, kas ir pati lapa; CadCraft to izlaiž.

### Kas vēl nenonāk

Viss, ko CadCraft nevar zīmēt, tiek saskaitīts, nevis minēts. Lodziņš "About this file" kreisajā panelī to uzskaita kā "Not shown yet:", kam seko katrs objekta veids un cik to ir. Tipiski gadījumi ir tabulas DXF, tīkli un 3D cietie ķermeņi blokos. 3D cietie ķermeņi, reģioni un ķermeņi modeļa telpā tiek rādīti 3D cilnē (skatiet [Modelis 3D](topic:3d-solids#solids-from-other-programs)). Skatlogi, kas failā ir pagriezti, tiek rādīti pagriezti, kā tur, un saglabājot paliek pagriezti; tāpat paliek pašreizējā UCS, nosauktās UCS un pagriezts skats.

Teksts tiek zīmēts vienā Helvetica stila fontā. Etiķete, kas oriģinālās programmas šaurākajā fontā ietilpst vienā rindā, CadCraft var pārcelties uz divām rindām.

## Saglabāšana

Ir trīs veidi, kā saglabāt. Katrs lejupielādē kopiju.

- **Saglabāt**: nospiediet {{key:Mod+S}}, noklikšķiniet {{ui:Saglabāt}} vai ierakstiet `SAVE` (arī `QSAVE`). Tas saglabā rasējuma formātā: DWG, ja atvērāt DWG, DXF, ja atvērāt DXF. DWG saglabā versiju, ar kādu tas ienāca (2018. gada fails saglabājas kā 2018). Jauns rasējums izmanto formātu un DWG versiju, ko pēdējo reizi izvēlējāties sadaļā {{ui:Saglabāt kā}} šajā pārlūkprogrammā; ja neko neesat izvēlējies, tas ir DWG AutoCAD 2000 formātā.
- **Saglabāt kā**: nospiediet {{key:Mod+Shift+S}}, noklikšķiniet {{ui:Saglabāt kā}} vai ierakstiet `SAVEAS`. Dialogs {{ui:Saglabāt kopiju kā}} piedāvā {{ui:DWG}} ar {{ui:Versija}} sarakstu (AutoCAD 2018, 2013, 2010, 2007, 2004 vai 2000), {{ui:DXF R12}} un {{ui:DXF 2000}}, katrs ar faila nosaukumu, ko tas dos, un rasējuma pašreizējo formātu un versiju jau izvēlētu. Noklikšķiniet {{ui:Saglabāt}}, lai lejupielādētu, vai {{ui:Atcelt}} (vai {{key:Esc}}), lai nekā nesaglabātu; vēsture tad saka "Nav saglabāts." Tas, ko izvēlaties, paliek: {{key:Mod+S}} to izmanto šim rasējumam no šī brīža, un jauni rasējumi šajā pārlūkprogrammā sākas ar to.
- **DXFOUT**: ierakstiet `DXFOUT`. Tas vienmēr lejupielādē DXF R12 kopiju, un nākamais {{key:Mod+S}} joprojām saglabā rasējuma pašu formātā.

Pārlūkprogramma lejupielādē `<rasējuma nosaukums>.dwg` vai `<rasējuma nosaukums>.dxf`. Katrs saglabājums ir **jauna lejupielāde**; fails, ko atvērāt, nekad netiek pārrakstīts vai mainīts. Vēsture to apstiprina, piemēram: "Saglabāta kopija kā Plan.dwg (DWG (AutoCAD 2018)). Jūsu oriģinālais Plan.dxf nav mainīts." DXF gadījumā tur ir rakstīts "(DXF R12, atveras jebkurā CAD programmā)". Rindas zem tā uzskaita visu, kas mainījās ceļā.

Kad CadCraft darbojas darbvirsmas lietotnē, saglabāšana notiek tāpat kā citās darbvirsmas programmās: {{key:Mod+S}} ieraksta rasējumu atpakaļ failā, ko atvērāt, tā pašā formātā un versijā, un vēsture norāda, kur tas saglabāts. {{ui:Saglabāt kā}} un eksporti parāda sistēmas saglabāšanas dialogu, un `.dwg`, `.dxf` vai `.ccsheets` fails, uz kura divreiz noklikšķiniet, atveras CadCraft.

PDF saglabā, drukājot (skatiet zemāk).

## Ko DWG paturē un maina

CadCraft pats raksta DWG jūsu pārlūkprogrammā ar to pašu DWG bibliotēku, ar ko to lasa. Izvēlieties versiju sadaļā {{ui:Saglabāt kā}}: AutoCAD 2000 formāts (faila versija AC1015) atveras vairumā programmu, arī vecajās; jaunākie formāti (2004, AC1018 līdz 2018, AC1032) paturēs arī patiesās krāsas. Nekas netiek augšupielādēts, un DWG saglabāšana darbojas bezsaistē.

Katra versija tiek pārbaudīta, nolasot saglabātos failus ar trim citu programmu DWG lasītājiem un ar pašu CadCraft. CadCraft DWG vēl nav atvērts pašā AutoCAD.

### Ko DWG paturē

- Līnijas, loki, riņķi, elipses, punkti un polilīnijas ar to loku segmentiem.
- Vienrindas teksts ar tā izlīdzinājumu un platuma koeficientu.
- Daudzrindu un ietīts teksts kā daudzrindu teksts. Cita programma to ietin vēlreiz no tā paša platuma.
- Objektu krāsas: pēc slāņa, pēc bloka, 255 standarta krāsas un patiesās krāsas 2004. formātā un jaunākos.
- Slāņi ar savu krāsu, līniju tipu, līnijas platumu un ieslēgto, iesaldēto, bloķēto un drukas iestatījumiem; objektu paši līniju tipi, līnijas platumi un līniju tipu mērogi, līniju tipu raksti un rasējuma līniju tipu mērogs.
- Rasējuma vienības un garuma formāts (decimālais, pēdas un collas, daļskaitļi…).
- Bloki ar bāzes punktu un atribūtu definīcijām, arī neredzamām, konstantām un iepriekš iestatītām.
- Bloku atsauces ar to mērogu, pagriešanu un atribūtu vērtībām.
- Cietās aizpildes un rakstu svītrojumi ar to rakstu, mērogu un leņķi (paša raksta līnijas, lai citas programmas zīmē tās pašas līnijas, ko CadCraft).
- Izmēri kā reāli izmēri: citas programmas tos pārmēra, kad tos stiepj. Katrs paturē savus iestatījumus (teksta augstums, bultiņas izmērs, decimāldaļas, garuma formāts) un savu tekstu, un nes zīmēto kopiju, kāda ir katram DWG izmēram.
- Lapas (izkārtojumi): katra lapa ar savu papīra izmēru un vienībām, tajā zīmēto un tās skatlogiem ar to skatu un mērogu.
- Nosauktie skati.
- Daudzvadotņu izsaukumi kā daudzvadotņu izsaukumi.
- Slāņu un bloku nosaukumi, kā jūs tos ierakstījāt, lielajiem un mazajiem burtiem. (DXF R12 tos raksta lielajiem burtiem.)

### Ko DWG maina

Katrs no tiem tiek uzskaitīts vēsturē pēc saglabāšanas, ja attiecas uz jūsu rasējumu.

| CadCraft | Saglabātajā DWG |
|---|---|
| Patiesās krāsas (izvēlētas ar krāsu atlasītāju), 2000 formātā | Tuvākā standarta krāsa: 2000 formātā ir tikai 255. Saglabājiet kā 2004 vai jaunāku, lai tās paturētu |
| Lapu nosauktie skati | Papīra telpas skati: DWG nesaka, kurai lapai, tāpēc, kad CadCraft atkal atver failu, tie pieder pirmajai lapai |
| Daudzrindu teksts ar platuma koeficientu | Parasts burtu platums: DWG platuma koeficients attiecas tikai uz vienrindas tekstu |
| Slāņu vai bloku nosaukumi ar rakstzīmēm, ko DWG neatļauj | Mainīti: nosaukums no saistīta rasējuma, piemēram, `Base\|Walls`, kļūst par `Base$0$Walls` (tā, kā saistīta rasējuma saistīšana to nosauc), un citas rakstzīmes kļūst par `_` |

### Kāpēc R12 un kas tiek pārveidots

Kad saglabājat kā DXF, CadCraft raksta DXF R12, versiju, ko atver katra CAD programma. Tā ir vecāka par dažām iespējām, tāpēc dažas lietas tiek rakstītas vienkāršākā veidā:

| CadCraft | Saglabātajā R12 failā |
|---|---|
| Daudzrindu teksts | Viens teksta objekts katrā rindā |
| Elipses | Polilīnijas, kas seko elipsei |
| Svītrojumi (no atvērtiem failiem) | Tikai to kontūras |
| Patiesās krāsas (izvēlētas ar krāsu atlasītāju) | Tuvākā standarta krāsa |
| Līnijas platumi un objektu paši līniju tipu mērogi | Izlaisti: R12 nav ne vieniem, ne otriem (līniju tipi tiek paturēti) |
| Slāņu un bloku nosaukumi | Rakstīti lielajiem burtiem; atstarpes un citas rakstzīmes kļūst par `_`, un nosaukumi tiek saīsināti līdz 31 rakstzīmei ("Title block" kļūst par `TITLE_BLOCK`) |
| Slāņi, kas iestatīti nedrukāt | Citas programmas tos izdrukās (CadCraft atceras iestatījumu, kad rasējumam ir lapa) |
| Izmēri | Reāli izmēri ar savu zīmēto bloku, tāpēc citas programmas tos rāda tā, kā jūs tos redzat |
| Daudzvadotņu izsaukumi | Līnijas, bultiņa un teksts, ko tie zīmē |
| Nosauktie skati | Paturēti, ar nosaukumiem lielajiem burtiem; lapas skati atgriežas pirmajā lapā |
| Vairākas lapas | Pirmā lapa ir papīra telpa, ko rāda katra programma; pārējās tiek paturētas kā bloki ar nosaukumiem `CCLAYOUT_1`, `CCLAYOUT_2` … , ko CadCraft atkal pārvērš lapās, kad atver failu |

Vēsture uzskaita katru no šiem, kas attiecas uz jūsu rasējumu.

:::tip
Lai turpinātu strādāt pie rasējuma vairākas dienas, saglabājiet kā DXF un nākamreiz atveriet šo DXF. Viss, ko CadCraft spēj zīmēt, saglabājas pilnā ciklā, ieskaitot izmērus, blokus un visas lapas.
:::

## Saistītie rasējumi (ārējās atsauces)

{{cmd:XATTACH}} (`XA`, vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Pievienot rasējumu (xref)}}) saista citu DWG vai DXF: izvēlaties failu un tad noklikšķiniet, kur tam jāiet ({{key:Enter}} novieto to uz 0,0). Tas ienāk kā viens bloks ar faila nosaukumu, pareizā mērogā, ja abiem rasējumiem ir atšķirīgas vienības. Tā slāņi un bloki paturē savus nosaukumus ar saites nosaukumu priekšā: `Plan|Walls`, `Plan|Door`, tāpēc tie nekad nesajaucas ar jūsējiem: ieslēdziet un izslēdziet saistītos slāņus, iesaldējiet vai bloķējiet tos kā savus. Saite ir tikai lasāma: mainiet otru rasējumu un pārlādējiet to. Tas, ko iestatāt saites slāņiem (krāsa, līniju tips, līnijas platums, ieslēgts vai izslēgts, iesaldēts, bloķēts, drukāt), tiek paturēts, kad to pārlādējat, kad saglabājat rasējumu kā DWG, kamēr saite vēl ir saite, un kad cits rasējums saista šo.

{{cmd:XREF}} (`XR`): `?` uzskaita saites (ielādētas vai nē, kurš fails, cik atsauču); `A` pievieno; `R` pārlādē vienu no sava faila (izvēlieties failu vēlreiz: pārlūkprogramma pati nevar piekļūt jūsu mapēm); `B` saista vienu (tas kļūst par parastiem blokiem un slāņiem ar nosaukumiem `Plan$0$Walls`); `D` atvieno vienu (tā atsauces un slāņi aiziet). Katrs ir viens atsaukšanas solis.

{{cmd:XCLIP}} (`XC`) apgriež bloku atsauces un saites: atlasiet tās, `N` jaunai robežai, tad `R` un divus stūrus vai `P` un daudzstūra punktus ({{key:Enter}} to aizver); `D` noņem apgriešanu. Redzams un drukājas tikai tas, kas atrodas iekšā, un apgriešana pārvietojas kopā ar atsauci. DWG un DXF 2000 paturēs apgriešanas; DXF R12 saglabā atsauci veselu un par to paziņo. Kad saistāt saiti, kurai ir apgrieztas atsauces, {{cmd:XREF}} `B` jautā: `A` saista visu, `C` paturē tikai katras atsauces apgriezto daļu (līnijas un lokus nogriež pie robežas; tekstus un iekļautos blokus paturē, ja to ievietošanas punkts ir iekšā).

Atvērtais rasējums var saistīt failus, ko CadCraft nevar redzēt: tas norāda, cik nav ielādēti. Lai tos redzētu, izmantojiet {{cmd:XREF}}, `R` un izvēlieties katru failu.

Saglabājot, ielādēta saite tiek **saistīta** failā (citas programmas redz parastus blokus un slāņus ar nosaukumiem `Plan$0$…`), un vēsture to norāda. Saite, kas nav ielādēta, paliek saite uz savu failu, DWG un DXF.

## Atvērt 3D

{{ui:Skats}} › {{ui:Vairāk}} › {{ui:Atvērt ModelCraft}} ({{cmd:OPENIN3D}}) atver rasējumu 3D modelēšanas lietotnē jaunā cilnē, kā DWG, bez augšupielādes. Izmaiņas, kas tur veiktas, paliek tur; saglabājiet tās tur. Izvēlne parādās tikai tur, kur šī lietotne var pārņemt nodoto rasējumu.

## Drukāt PDF

Nospiediet {{key:Mod+P}}, noklikšķiniet {{ui:Drukāt}} vai ierakstiet `PLOT`. PDF tiek izveidots pārlūkprogrammā un lejupielādēts vai atvērts jaunā cilnē drukāšanai. Skatiet [Drukāt PDF](topic:plot-pdf).

## Kur glabājas faili

Katra saglabāšana un katra druka ir lejupielāde, tāpēc faili nonāk tur, kur pārlūkprogramma ieliek lejupielādes: parasti mapē Lejupielādes. Lai katru reizi izvēlētos mapi, nomainiet pārlūkprogrammas lejupielādes iestatījumu; [Pārlūkprogrammas un datori](common:browsers) parāda, kur tas ir.

Nekas, ko atverat vai saglabājat, nenonāk pie mums. Skatiet [Kur glabājas jūsu faili](common:your-files).

## PLN un PLA projekta faili

CadCraft atver DWG un DXF rasējumus, nevis Archicad pašus failus (`.pln`, `.pla`, `.tpl`, `.bpn`). Mēģinot atvērt vienu, tas jums pasaka, kas tas ir. Archicad programmā saglabājiet vajadzīgos skatus vai izkārtojumus kā DWG un atveriet tos šeit, vai eksportējiet modeli kā IFC un atveriet to BimCraft. Ja BimCraft var pārņemt failu, CadCraft piedāvā {{ui:Atvērt programmā BimCraft}}.

## Ja lapa aizveras pirms saglabāšanas

CadCraft paturēs katra mainītā rasējuma kopiju tikai šajā pārlūkprogrammā, brīdi pēc tam, kad pārtraucat rediģēt. Ja cilne aizveras, pārlūkprogramma apstājas vai dators restartējas pirms saglabāšanas, nākamreiz, kad CadCraft sākas, tas jautā **Atjaunot jūsu darbu?**: {{ui:Atkopt}} atver rasējumu atkal, nesaglabātu, savā cilnē. Rasējuma saglabāšana noņem tā kopiju. Skatiet [Atjaunot jūsu darbu](common:recover).

## Tiešsaiste un bezsaiste

Atvēršana, zīmēšana, saglabāšana (DWG un DXF) un drukāšana notiek jūsu datorā, tāpēc tās darbojas bez savienojuma, kad CadCraft ir ielādējies.

Lai izmantotu CadCraft bez jebkāda savienojuma, kamēr esat tiešsaistē, noklikšķiniet {{ui:Saglabāt bezsaistei}} augšējā joslā. Uzraksts skaita uz augšu ("Saglabā 40 no 212") un beidzas ar "Gatavs darbam bezsaistē". Saglabātā kopija ietver DWG lasītāju, kopā aptuveni 5 MB, tāpēc **DWG faili atveras arī bezsaistē**, kad tā ir saglabāta. Vēlreiz noklikšķiniet uz pogas, lai izvēlētos {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} vai {{ui:Noņemt bezsaistes kopiju}}. "Nevarēja saglabāt" nozīmē, ka daži faili netika lejupielādēti: pārbaudiet savienojumu un noklikšķiniet, lai mēģinātu vēlreiz. "Bezsaistes režīms nav pieejams" nozīmē, ka šis pārlūkprogrammas logs nevar paturēt kopiju (privātie logi un daži pārvaldīti datori).

Bez saglabātas kopijas DWG lasītājs tiek ielādēts, kad pirmo reizi atverat DWG pēc lapas ielādes, tāpēc DWG atvēršana bezsaistē var neizdoties; DXF failiem tas nekad nav vajadzīgs. Bezsaistē neatjaunojiet lapu, ja CadCraft nav saglabāts.

Skatiet [Darbs bezsaistē](common:offline), lai uzzinātu sīkāk.

:::offline
Jūs tagad esat bezsaistē. Rasējumi saglabājas kā DWG vai DXF un drukājas normāli, un DXF faili atveras. DWG faili atveras, ja CadCraft rāda "Gatavs darbam bezsaistē", vai ja DWG lasītājs jau ir ielādēts šajā cilnē.
:::

## Ierobežojumi failos

Ierobežojumi un parametri (skatiet [Ierobežot rasējumu](topic:constraints)) tiek saglabāti gan DWG, gan DXF. Katram ierobežotajam objektam ir neliela CadCraft piezīme (paplašinātie dati), un neizmantots bloks ar nosaukumu `CADCRAFT_PARAMETRIC` satur ierobežojumus un parametru tabulu. Citas programmas atver rasējumu parasti un ignorē abus; tās var izdzēst neizmantoto bloku, kad to attīra. Piezīmes atsaucas uz objektiem pēc to paša atslēgas, nevis faila rokturiem, tāpēc programma, kas pārnumurē rokturus, tos nesalauž. Kad cita programma ir izdzēsusi vai mainījusi ierobežotu objektu, CadCraft atmet uz tā esošos ierobežojumus, kad atver failu, un norāda, cik. Fails bez tiem atveras bez ierobežojumiem.

Skice, kas eksportēta no detaļu modelētāja (`.json`), arī atveras: skatiet [Skiču pārvietošana uz citiem detaļu modelētājiem un no tiem](topic:solidworks-sketches).

## Vēl nav pieejams

- Daudzvadotņu izsaukumi kā daudzvadotņu izsaukumu objekti saglabātā DXF (R12 tādu nav: tie tiek saglabāti kā tas, ko tie zīmē).
- Attēli saglabātā DXF (tie saglabājas kā to rāmji; DWG tos paturēs kā attēlus) un aizsegi, kas paslēpj to, kas atrodas zem tiem.
- DXF versijas saglabāšana, kas jaunāka par 2000.
- Mākoņglabāšana un sinhronizācija starp datoriem.

Skatiet [Vēl nav izveidots](topic:not-built-yet), lai redzētu pilnu sarakstu.
