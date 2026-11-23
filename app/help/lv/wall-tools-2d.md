---
title: Sienu formas, griezumi, nobīdes un bloķējumi 2D sienām
summary: Zīmējiet sienas kā taisnstūrus, daudzstūrus un lokus, sadaliet un savienojiet tās atkal, pārvietojiet tās pēc izmēra un bloķējiet vienu sienu pie citas vai pie režģa līnijas. Tie paši rīki kā BimCraft sienām.
keywords: siena, sienas, sienu rīkjosla, sienu pogas, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, savienojuma stils, slīpgriezums, taisns, nogriezt taisni, bloķējums, rokturis, vilkt galu, pagriezt, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, savienot, neļaut savienot, bloķējums, režģa līnija, sadalīt, sprauga, nobīde, atsauces līnija
from: 49044181
---

Šie rīki darbojas ar 2D sienām, ko veido `WALL` (skatiet "Zīmēt 2D sienas, durvis un logus"). Tie izmanto tos pašus noteikumus kā BimCraft sienu rīki, tāpēc siena uzvedas vienādi abās.

## Kur atrodas rīki

- Rīkjoslā grupai {{ui:Sienas}} ir {{ui:Siena}}, {{ui:Taisnstūris}}, {{ui:Sadalīt}} un {{ui:Nobīde}}. Tās izvēlne {{ui:Vairāk}} satur visus pārējos sienu rīkus, katru ar savu ikonu.
- Lentes izvēlnes stilos cilnei {{ui:Sienas}} ir paneļi {{ui:Zīmēt sienas}}, {{ui:Griezums}}, {{ui:Iestatīt un mainīt}}, {{ui:Turēt}} un {{ui:Savienot}}.
- Izkārtojumā rīku rindas un rīku kaste rāda to pašu grupu {{ui:Sienas}}.
- Varat ierakstīt arī jebkuru zemāk minēto komandu.

## Savienojumi tiek glabāti

Kad sienas gals nonāk uz citas sienas, CadCraft saglabā šo savienojumu ar abām sienām. Tas vairs neaprēķina savienojumus no tā, kur gali nejauši atrodas. Tātad:

- Sienas, kas savienotas ar sienu, ko pārvietojat, seko tai un paliek savienotas. To gali slīd gar savām līnijām, tāpēc nekas nepagriežas.
- Velkot vienu sienas galu pēc tā roktura, siena, kas tur savienota, saglabā savu virzienu. Tās gals slīd gar savu līniju, lai satiktos ar velkamo sienu, tāpēc velkamais gals nonāk uz šīs līnijas, ne vienmēr zem kursora. Priekšskatījums parāda, kur. Siena, kas atsitas pret velkamo sienu, seko gar savu līniju. Velkot galu taisni gar sienu, mainās tās garums, un siena, kas tur savienota, pārvietojas kopā ar to.
- `ROTATE` uz savienotas sienas darbojas tāpat: tās kaimiņu gali slīd gar savām līnijām līdz pagrieztajai sienai.
- Lai pārvietotu stūri, atlasiet abas sienas, kas tur satiekas, un velciet rokturi uz stūra. Abas sienas paliek uz stūra un abas pagriežas. Sienas tālāk paliek kā bija.
- Turiet {{key:Alt}}, kad noklikšķināt uz roktura jaunās vietas, lai tīšām pārtrauktu savienojumus: siena iet tur, kur to novietojāt, un nekas neseko.
- Ja velkot savienota siena tiktu pagriezta atpakaļ caur savu tālāko galu, tā tiek noraidīta, un nekas nemainās.
- Siena, ko zīmējat ar {{ui:Neļaut savienot}} (`D` komandā `WALL`), vai ko izslēdzat rekvizītos ({{ui:Neļaut savienot sākumā}}, {{ui:Neļaut savienot beigās}}), paliek brīva tajā galā, pat ja pieskaras citai sienai, līdz to atkal atļaujat.
- `WALLDISJOIN` ({{ui:Neļaut savienot}} grupā {{ui:Sienas}}) dara to pašu ar klikšķi: noklikšķiniet uz sienas tuvu vienam galam, lai neļautu savienojumus tajā galā, un noklikšķiniet vēlreiz, lai tos atļautu.
- Vecākam rasējumam vēl nav glabātu savienojumu. Pirmā izmaiņa, ko veicat, tos atrod vienreiz, no tā, kā sienas stāvēja pirms izmaiņas, un saglabā. `WALLJOINS` to dara tūlīt.
- DWG un DXF failos savienojumi ir katras sienas iekšienē. CadCraft tos nolasa atpakaļ tā, kā saglabāti. Programma, kas neglabā paplašinātos datus, rāda sienas kā parastus blokus un atmet savienojumus; savienojums, kura sienas tika pārvietotas citā programmā, tiek atmests nākamajā reizē, kad maināt kādu no sienām.

## Stūra savienojuma stils

Stūris, kur divas sienas satiekas gals pie gala, tiek zīmēts kā slīpgriezums, ja vien neizvēlaties citu stilu.

- `WALLJOINSTYLE` ({{ui:Savienojuma stils}} grupā {{ui:Sienas}}): noklikšķiniet uz stūra. Katrs klikšķis iet uz nākamo stilu: {{ui:Slīpgriezums}}, {{ui:Taisns}}, {{ui:Nogriezt taisni}}, tad atkal {{ui:Slīpgriezums}}. Ierakstiet `T`, lai pārslēgtu, kura no divām sienām iet cauri stūrim, uz kuru pēdējo reizi noklikšķinājāt. Nospiediet {{key:Enter}}, lai pabeigtu. Viena komandas palaišana ir viens atsaukšanas solis.
- {{ui:Taisns}}: viena siena iet cauri līdz otras sienas tālākajai sejai, un otra apstājas pie tās sāna. {{ui:Nogriezt taisni}}: tas pats, bet siena, kas iet cauri, beidzas taisni pret sevi. Taisnā leņķī abi izskatās vienādi.
- Sienas rekvizītos: {{ui:Savienojuma stils sākumā}}, {{ui:Savienojuma stils beigās}} un {{ui:Iet cauri sākumā}}, {{ui:Iet cauri beigās}}.
- Stils tiek saglabāts kopā ar abām sienām un tiek nests DWG un DXF failos. Sienas kopija sākas bez tā.
- T savienojumam nav stila, ko izvēlēties: iet cauri siena, kuras sāns tiek sastapts. Stūris, kur satiekas trīs vai vairāk sienu, paliek slīpgriezums. Tāds paliek arī ļoti ass stūris (zem apmēram 30 grādiem) un divas sienas vienā līnijā.

## Zīmējiet sienu formas

Katra veido sienas vienā atsaukšanas solī, ar savienotiem stūriem. `WALL` laikā `O` iestata izvietojuma nobīdi (cik tālu pa kreisi no jūsu klikšķiem iet siena), un `D` izslēdz savienošanu sienām, ko zīmēsiet tālāk.

- `WALLRECT` (`WR`): divi pretēji stūri, kā `RECTANG`.
- `WALLROT`: pirmā mala, tad cik tālu iet otra mala, taisnstūrim jebkurā leņķī.
- `WALLPOLY` (`WP`): malu skaits (no 3 līdz 64), centrs, `I` ievilktai vai `C` apvilktai, tad rādiuss, kā `POLYGON`: noklikšķiniet to vai ierakstiet to (ierakstīts rādiuss iet uz rādītāju vai pa X, ja rādītājs vēl ir centrā).
- `WALLARC` (`WARC`): centrs, sākums, beigas. `D` pagriež loku otrādi.
- `WALLTAN`: noklikšķiniet tuvu sienas galam, tad loka galu, kas iziet gar šo sienu.
- `WALLPICK`: noklikšķiniet uz līnijas vai polilīnijas un pasakiet, vai ņemt arī tai pievienotās līnijas.
- `WALLTRACE`: noklikšķiniet slēgta līniju un sienu laukuma iekšpusē, lai ap mazāko no tiem izvietotu sienas.

Plāna sienas ir taisnas, tāpēc lokus zīmē kā īsas taisnas sienas pa 15 grādiem katra. Tās savienojas kā jebkurš stūris.

## Griezt sienas

- `WALLSPLIT` (`WS`): noklikšķiniet uz sienas, tad uz punkta. `C` griež tur, kur cita siena to krusto, `G` atstāj spraugu starp daļām, `F` padara griezuma galus brīvus, nevis savienotus. Pirmā daļa paturē sienas vietu rasējumā, un durvis un logi iet kopā ar savu daļu. Griezums caur durvīm vai logu tiek noraidīts.
- `WALLSPLITGAP` ({{ui:Sadalīt ar spraugu}}): tas pats sadalījums, bet vispirms jautā spraugu.
- `WALLDELSEG`: noklikšķiniet uz sienas, tad uz diviem gabala galiem, ko dzēst.
- `WALLREJOIN`: noklikšķiniet uz divām vienas sienas daļām, lai padarītu tās atkal par vienu.

## Pārvietojiet sienas pēc attāluma

- `WALLDIM` ({{ui:Rediģēt pēc izmēra}}): noklikšķiniet uz lineāra vai saskaņota izmēra, kas iet no vienas sienas uz otru, tad ierakstiet jauno vērtību. Siena tālākajā galā pārvietojas taisni pret sevi, siena pirmajā galā paliek, un ar to savienotās sienas seko. Izmēra tālākais punkts pārvietojas kopā ar savu sienu, tāpēc izmērs rāda vērtību, ko ierakstījāt.
- `WALLOFFSET` (`WO`): noklikšķiniet uz sienas, tad uz malas, uz kuru to pārvietot (`D` ieraksta attālumu, `C` veido kopiju).
- `WALLSTRETCH`: logs ap sienu galiem, tad bāzes punkts un otrs punkts.
- Rekvizītos ierakstīts {{ui:Garums}} saglabā sākumu un ņem līdzi savienoto sienu tālākajā galā, un jauns {{ui:Biezums}} aug prom no {{ui:Atsauces līnijas}}, ko izvēlējāties (kreisā virsma, labā virsma vai centrs).

## Izmēri starp sienu centra līnijām

Sienas centra līnija nav zīmēta, bet objektu piesaiste to atrod. Ar ieslēgtu objektu piesaisti ({{key:F3}}) pārvietojiet rādītāju pāri sienas biezuma vidum: marķieris rāda `Sienas centrs: galapunkts` vai `Sienas centrs: viduspunkts`, un centra līnija parādās kā punktēta līnija, kamēr marķieris atrodas virs tās. Ar ieslēgtu {{ui:Perpendikulārs}} vai {{ui:Tuvākais}} objektu piesaistes sarakstā, arī tie darbojas ar centra līniju.

1. Sāciet `DIMLINEAR` (vai `DIMALIGNED`).
2. Noklikšķiniet uz pirmās sienas, kur marķieris rāda `Sienas centrs: viduspunkts` vai `Sienas centrs: galapunkts`.
3. Noklikšķiniet uz otrās sienas tāpat, tad noklikšķiniet, kur iet izmēra līnija.
4. Lai mainītu attālumu, sāciet `WALLDIM`, noklikšķiniet uz izmēra un ierakstiet jauno vērtību. Otrā siena pārvietojas.

Centra līnijas piesaiste darbojas katrā komandā, kas prasa punktu.

## Bloķējiet sienas

Bloķējums paliek kopā ar sienu failā. Ja pārvietojat vienu bloķētu sienu, otra seko. Ja viena izmaiņa pārvieto abas sienas atšķirīgi, tā tiek noraidīta, un nekas nemainās.

- `WALLHOLD`: bloķējiet sienu pie citas sienas. `A` vispirms pārvieto to uz otras sienas līnijas, `K` saglabā attālumu, kāds tai ir.
- `WALLHOLDDIM`: bloķējiet attālumu starp divām paralēlām sienām.
- `WALLGRID`: bloķējiet sienu pie režģa līnijas (līnija režģa slānī ar tās birku tekstā vienā galā), vai nu gar to, vai ar vienu galu uz tās. Siena, kas bloķēta gar līniju, saglabā attālumu, kāds tai ir no tās. Pārvietojiet režģa līniju ar `GRIDMOVE`, un siena seko veselumā, kopā ar savienotajām sienām. Siena, kas stāv gar režģa līniju, pārvietojas veselumā kopā ar to pat bez bloķējuma, un siena, kas tikai beidzas uz līnijas, tiek izstiepta ar šo galu.
- `WALLHOLDS` uzskaita bloķējumus. `WALLUNHOLD` noņem bloķējumus no sienas.
- Katrs bloķējums rasējumā rāda mazu atslēgu: blakus bloķētās sienas vidum vai blakus galam, kas ir bloķēts pie režģa līnijas. Noklikšķiniet uz atslēgas, lai noņemtu šo bloķējumu.

## Kas šeit vēl nav

Bloķējumi izmanto sienu centra līnijas. Šeit sienām nav slāņu, tāpēc savienojumā nav slāņa prioritātes, un sienas nelokās (skatiet augstāk par lokiem). Neviens nav izmēģinājis šos rīkus lielā rasējumā, un tie nav pārbaudīti citā CAD programmā.
