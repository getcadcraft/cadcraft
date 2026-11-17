---
title: Iestatiet izmēru lielumus, decimāldaļas un mērogu
summary: Izvēlieties teksta augstumu, bultiņas izmēru, decimāldaļas un kopējo mērogu jauniem izmēriem, mainiet esošos un saprotiet, kā CadCraft darbojas izmēru stili.
keywords: izmēru stils, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, kopējais mērogs, decimāldaļas, bultiņas izmērs, anotācijas mērogs, dimtextunit, vienības tekstā, mm, cm, m, km, milimetri, metri, dimlfac, dimpost
from: 8ec82a07
---

## Ko jūs iemācīsieties

Cik lieli ir izmēru teksts un bultiņas, kā tos iestatīt zīmējumam, kas drukāts 1:50 vai 1:100, un kā mainīt jau izveidotos izmērus.

## Kā darbojas izmēru lielumi

Katram izmēram ir savs lielumu kopums: teksta augstums, bultiņas izmērs, decimāldaļas, atstarpe ap tekstu, cik tālu palīglīnijas iet pāri izmēra līnijai un cik tālu tās sākas no objekta. Noklusējumi ir tuvu parastajam ISO stilam:

| Iestatījums | Noklusējums | Komanda |
|---|---|---|
| Teksta augstums | 2.5 | {{cmd:DIMTXT}} |
| Bultiņas izmērs | 2.5 | {{cmd:DIMASZ}} |
| Decimāldaļas | 2 (beigu nulles tiek izmestas) | {{cmd:DIMDEC}} |
| Atstarpe ap tekstu | 0.625 | {{cmd:DIMGAP}} |
| Pagarinājums aiz izmēra līnijas | 1.25 | {{cmd:DIMEXE}} |
| Nobīde no objekta | 0.625 | {{cmd:DIMEXO}} |
| Kopējais mērogs | 1 | {{cmd:DIMSCALE}} |

Katrs lielums tiek reizināts ar **kopējo mērogu**. Iestatiet lielumus tā, kā tos vēlaties uz papīra (2.5 mm teksts), un kopējo mērogu iestatiet kā drukas mērogu (50 priekš 1:50). Teksts tad ir 2.5 × 50 = 125 zīmējuma vienības augsts un izdrukājas 2.5 mm.

:::note
Nosauktie izmēru stili tiek pārvaldīti ar {{cmd:DIMSTYLE}}: skatiet tālāko sadaļu. Katrs izmērs arī saglabā iestatījumus, ar kādiem tas izveidots, tāpēc varat vēl mainīt vienu izmēru atsevišķi sadaļā {{ui:Properties}} (Rekvizīti).
:::

## Iestatiet lielumus jauniem izmēriem

Abi tālāk aprakstītie veidi maina tikai izmērus, ko izveidosiet pēc tam.

### Panelī Pašreizējie iestatījumi

1. Nospiediet {{key:Esc}}, lai nekas nebūtu atlasīts. Cilnē {{ui:Model}} (Modelis) labajā panelī ir {{ui:Current settings}} (Pašreizējie iestatījumi).
2. Ritiniet panelī līdz {{ui:New dimensions}} (Jauni izmēri), pāri slāņa, krāsas, vienību un {{ui:Layer 0}} (Slānis 0) rindām (mazā ekrānā tas sākas zem apakšējās malas). Noklikšķiniet {{ui:Overall scale}} (Kopējais mērogs), ierakstiet `50` un nospiediet {{key:Enter}}.
3. Tāpat iestatiet {{ui:Text height}} (Teksta augstums), {{ui:Arrow size}} (Bultiņas izmērs) un {{ui:Decimals}} (Decimāldaļas), ja vēlaties citas vērtības.

Statusa josla apstiprina katru, piemēram: "Jaunu izmēru kopējais mērogs: 50".

### Komandrindā

1. Ierakstiet `DIMSCALE` un nospiediet {{key:Enter}}.
2. Pie `Enter new value for DIMSCALE <1>` ierakstiet `50` un nospiediet {{key:Enter}}.

Vēsturē teikts: "DIMSCALE = 50. Jauni izmēri to izmanto; lai mainītu esošos, atlasiet tos." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} un {{cmd:DIMEXO}} darbojas tāpat. Nospiediet {{key:Enter}} uzvednē, lai paturētu pašreizējo vērtību.

### Pēdas un collas izmēros

Jauni izmēri izmanto zīmējuma garuma formātu: iestatiet to ar {{ui:Length format}} (Garuma formāts) panelī {{ui:Current settings}} vai ar {{cmd:UNITS}} (skatiet [Pēdas un collas](topic:units-papers-scales#feet-and-inches-and-fractions)), un nākamais izmērs parāda `12'-6 1/2"`. {{cmd:DIMLUNIT}} iestata tikai izmēru formātu (2 decimāldaļas, 3 inženiertehnisks, 4 arhitektūras, 5 daļskaitļu). Izmēram, kuru jau izveidojāt, atlasiet to un izvēlieties {{ui:Format}} sadaļā {{ui:Properties}}; ar daļskaitļu formātu lodziņš {{ui:Fraction}} prasa divnieka pakāpi (4 = 1/16).

## Izmēri mm, cm, m vai km

Izmērs mēra zīmējuma vienībās. Tas var rakstīt šo garumu milimetros, centimetros, metros vai kilometros, ar vienību aiz skaitļa: 1250 mm sienu nolasa kā `1250 mm`, `125 cm`, `1.25 m` vai `0.00125 km`.

1. Vispirms iestatiet zīmējuma {{ui:Units}} (Vienības) panelī {{ui:Current settings}} (skatiet [Vienības, papīra izmēri un mērogi](topic:units-papers-scales#drawing-units)), lai CadCraft zinātu, kas ir viena zīmējuma vienība. Zīmējums bez vienībām tiek nolasīts kā milimetri, un {{cmd:DIMTEXTUNIT}} to pasaka.
2. Jauniem izmēriem: nospiediet {{key:Esc}}, lai nekas nebūtu atlasīts, un sadaļā {{ui:New dimensions}} izvēlieties {{ui:Units in the text}} (Vienības tekstā): {{ui:Drawing units}} (Zīmējuma vienības), `mm`, `cm`, `m` vai `km`.
3. Jau izveidotiem izmēriem: atlasiet tos un sadaļā {{ui:Properties}} › {{ui:Primary units}} (Pamatvienības) izvēlieties {{ui:Units in the text}}.

Vai arī ierakstiet {{cmd:DIMTEXTUNIT}} (`DTU`) un atbildiet `D`, `MM`, `CM`, `M` vai `KM`: ja izmēri ir atlasīti, tie mainās (viens atsaukšanas solis), ja nekas nav atlasīts, tie iestata jaunos izmērus.

{{ui:Decimals}} ({{cmd:DIMDEC}}) joprojām nosaka, cik decimāldaļu zīmes rādīt: ar metriem un 3 decimāldaļām 1234 mm nolasa `1.234 m`. Teksts tiek rakstīts kā decimālskaitlis. Lapā izmēri mēra lapas papīra vienībās (milimetros vai collās).

Saglabāts DWG vai DXF saglabā izvēli kā izmēra mēroga koeficientu (DIMLFAC) un sufiksu (DIMPOST, ` m`), lai citas programmas rādītu to pašu tekstu. Ja vēlāk mainat zīmējuma {{ui:Units}}, izmēri, kas rakstīti mm, cm, m vai km, tiek pielāgoti, tāpēc joprojām rāda pareizo garumu. {{ui:Set by hand (scale or suffix)}} (Iestatīts manuāli (mērogs vai sufikss)) nozīmē, ka izmēra {{ui:Measurement scale}} (Mērījumu mērogs) vai sufikss iestatīts citādi; izvēlieties vienību, lai tos aizstātu.

## Mainiet jau izveidotos izmērus

1. Noklikšķiniet vienu izmēru. Labā paneļa virsraksts ir {{ui:Dimension}} (Izmērs).
2. Iestatījumi ir sadaļās; ritiniet panelī līdz vēlākajām:
   - {{ui:General}} (Vispārīgi): {{ui:Dimension style}} (Izmēru stils)
   - {{ui:Geometry}} (Ģeometrija): {{ui:Kind}} (Veids) un {{ui:Measurement}} (Mērījums) (tikai lasāmi)
   - {{ui:Text}} (Teksts): {{ui:Text override}} (Teksta pārrakstīšana) un {{ui:Text height}} (Teksta augstums)
   - {{ui:Lines and arrows}} (Līnijas un bultiņas): {{ui:Arrow size}} (Bultiņas izmērs)
   - {{ui:Fit}} (Novietojums): {{ui:Overall scale}} (Kopējais mērogs)
   - {{ui:Primary units}} (Pamatvienības): {{ui:Decimals}} (Decimāldaļas)
3. Ierakstiet jaunu vērtību un nospiediet {{key:Enter}}.

Izmērs uzreiz tiek pārzīmēts. Leņķiskiem izmēriem {{ui:Decimals (°)}} iestata leņķa decimāldaļas.

:::note
Ja atlasīti vairāki izmēri, panelī rādītas rindas, kas tiem kopīgas, un vērtība, kas atšķiras, ir {{ui:Varies}} (Mainās). Vērtība, ko ierakstāt, maina visus atlasītos izmērus vienā solī, tāpēc viens {{key:Mod+Z}} tos visus atjauno.
:::

## Izmēri no atvērtiem zīmējumiem

Izmērs no atvērta DWG vai DXF tiek rādīts tieši tā, kā to zīmēja cita programma. Tā panelis saka: "Rādīts tā, kā to zīmēja programma, kas to izveidoja. Ja to mainīsiet, CadCraft to pārzīmēs savā stilā." Tiklīdz mainat kādu vērtību, pārvietojat rokturi vai pārvietojat izmēru, CadCraft to pārzīmē ar savām bultiņām un fontu, izmantojot lielumus, ko nolasījis no faila.

Daži izmēri var tikt nolasīti tikai tā, kā zīmēti, nevis kā rediģējami izmēri; tad panelis rāda "Zīmēts no" un bloka nosaukumu, un lodziņš "Par šo failu" tos saskaita.

## Biežākās kļūdas

- **Mainot DIMSCALE, uz ekrāna nekas nemainījās.** Iestatījums attiecas uz jauniem izmēriem. Atlasiet esošos un panelī mainiet {{ui:Overall scale}}.
- **Decimāldaļas rāda mazāk ciparu, nekā iestatīts.** Beigu nulles tiek izmestas: 2 decimāldaļas rāda `1250` un `1250.5`, nevis `1250.00`.
- **Teksts ir pareizā augstumā uz papīra skata logā, bet nepareizs modeļa drukā.** Kopējam mērogam jāsakrīt ar drukas mērogu. Drukājot ar {{ui:Fit to paper}}, rodas dīvains mērogs; drukas dialogā izvēlieties standarta mērogu.
- **Vienības, piemēram, mm vai m, tekstā.** Izvēlieties {{ui:Units in the text}} (skatiet [Izmēri mm, cm, m vai km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Jebkuram citam vārdam aiz skaitļa ierakstiet to pārrakstījumā: `<> TYP.`.

## Nosauktie izmēru stili

Ierakstiet `DIMSTYLE` (`D`), lai atvērtu {{ui:Dimension style manager}} (Izmēru stilu pārvaldnieks). Tajā uzskaitīti zīmējuma stili, cik izmēru izmanto katru un kurš ir pašreizējais. **Standard** vienmēr ir.

- {{ui:Set current}} (Iestatīt pašreizējo): jauni izmēri izmanto šī stila iestatījumus un nes tā nosaukumu.
- {{ui:New…}} (Jauns…): jauns stils, kas sākas kā kopija tam, ko izvēlaties.
- {{ui:Modify…}} (Mainīt…): tie paši lauki kā izmēru sadaļā {{ui:Properties}} (līnijas un bultiņas, teksts, novietojums, vienības, alternatīvās vienības, pielaides). Nospiediet {{ui:OK}} (Labi), un stils mainās **un katrs izmērs, kas to izmanto, mainās līdzi**, iestatījums pa iestatījumam. Iestatījums, ko mainījāt tikai vienam izmēram, paliek, ja vien stils nemainīja šo iestatījumu.
- {{ui:Rename…}} (Pārdēvēt…) un {{ui:Delete}} (Dzēst): Standard nevar pārdēvēt vai dzēst, tāpat nevar pārdēvēt vai dzēst pašreizējo stilu vai stilu, ko izmanto izmēri.
- {{ui:Compare…}} (Salīdzināt…): kas atšķiras starp diviem stiliem.
- {{ui:Apply to selected}} (Piemērot atlasītajiem): vispirms atlasiet izmērus; tie pārņem stila iestatījumus un nosaukumu.

`-DIMSTYLE` dara to pašu komandrindā: `Restore`, `Save` (pašreizējie iestatījumi, ieskaitot to, ko ierakstījāt ar {{cmd:DIMTXT}} un citām komandām, zem nosaukuma), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stili tiek saglabāti DWG vai DXF (tā izmēru stilu tabulā) un nolasīti no atvērtajiem failiem. *Pašreizējais* stils netiek saglabāts: zīmējums atveras ar Standard kā pašreizējo. Standard saglabā savus iestatījumus, kamēr cits stils ir pašreizējais.

## Mainiet izmēra tekstu un palīgligas

{{cmd:DIMEDIT}} (`DED`) darbojas ar atlasītajiem izmēriem: **Home** (Sākums) atjauno tekstu tur, kur to novieto stils, **New** (Jauns) ieraksta citu tekstu (`<>` apzīmē mērījumu), **Rotate** (Pagriezt) pagriež tekstu, **Oblique** (Slīpi) noliec lineāro un paralēlo izmēru palīgligas uz ierakstītu leņķi (nospiediet {{key:Enter}}, ja nevajag). {{cmd:DIMTEDIT}} pārvieto tekstu uz izmēra līnijas **Left** (Pa kreisi), **Right** (Pa labi) vai **Center** (Centrā), vai pagriež to (**Angle**), vai nosūta **Home** (Sākumā). Teksts vienmēr atrodas uz izmēra līnijas: to nevar pavilkt uz brīvu vietu.
