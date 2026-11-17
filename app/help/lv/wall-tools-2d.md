---
title: Sienu formas, griezumi, nobīdes un bloķējumi 2D sienām
summary: Zīmējiet sienas kā taisnstūrus, daudzstūrus un lokus, sadaliet un atkal savienojiet tās, pārvietojiet pēc izmēra un bloķējiet vienu sienu pie citas vai pie režģa līnijas. Tie paši rīki kā BimCraft sienām.
keywords: siena, sienas, sienu josla, sienu pogas, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, savienojuma stils, slīpgriezums, taisns, nogriezt taisni, piekaramā atslēga, rokturis, vilkt galu, pagriezt, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, savienot, neatļaut savienojumu, bloķēt, režģa līnija, sadalīt, sprauga, nobīde, atrašanās līnija
from: f41e7433
---

Šie rīki darbojas ar 2D sienām, kas izveidotas ar `WALL` (skatiet „Zīmējiet viedās sienas, durvis un logus 2D”). Tie izmanto tos pašus noteikumus kā sienu rīki BimCraft, tāpēc siena uzvedas vienādi abās programmās.

## Kur atrodas rīki

- Rīkjoslā grupā {{ui:Walls}} ir {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} un {{ui:Offset}}. Tās izvēlnē {{ui:More}} ir visi pārējie sienu rīki, katrs ar savu ikonu.
- Lentes izvēlnes stilos cilnē {{ui:Walls}} ir paneļi {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} un {{ui:Join}}.
- Izkārtojumā rīku rindas un rīku kaste rāda to pašu grupu {{ui:Walls}}.
- Varat arī ierakstīt jebkuru tālāk nosaukto komandu.

## Savienojumi tiek saglabāti

Kad sienas gals nonāk uz citas sienas, CadCraft saglabā šo savienojumu abām sienām. Tas vairs neaprēķina savienojumus no jauna pēc tā, kur gali gadās atrasties. Tātad:

- Sienas, kas savienotas ar pārvietoto sienu, seko tai un paliek savienotas. To galiem slīdot pa savām līnijām, nekas nepagriežas.
- Ja vilkat sienas vienu galu pēc tā roktura, siena, kas tur savienota, saglabā arī savu virzienu. Tās gals slīd pa savu līniju, lai satiktos ar vilkto sienu, tāpēc vilktais gals nonāk uz šīs līnijas, ne vienmēr zem kursora. Priekšskatījums rāda, kur. Siena, kas atduras pret vilkto sienu, seko pa savu līniju. Vilkot galu tieši pa sienu, mainās tās garums, un tur savienotā siena pārvietojas kopā ar to.
- `ROTATE` savienotai sienai darbojas tāpat: tās kaimiņu gali slīd pa savām līnijām līdz pagrieztajai sienai.
- Lai pārvietotu stūri, atlasiet abas sienas, kas tur satiekas, un vilciet stūra rokturi. Abas sienas paliek stūrī un abas pagriežas. Tālākas sienas paliek, kādas bija.
- Turiet {{key:Alt}}, noklikšķinot uz rokturu jaunajā vietā, lai tīšām pārtrauktu savienojumus: siena iet tur, kur to novietojāt, un nekas neseko.
- Ja vilkšana pagrieztu savienotu sienu cauri tās pašai tālākajam galam, tā tiek noraidīta un nekas nemainās.
- Siena, ko zīmējat ar {{ui:Disallow joins}} (`D` komandā `WALL`), vai ko izslēdzat rekvizītos ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), paliek brīva tajā galā, pat ja pieskaras citai sienai, līdz to atkal atļaujat.
- `WALLDISJOIN` ({{ui:Disallow join}} grupā {{ui:Walls}}) dara to pašu ar klikšķi: noklikšķiniet uz sienas netālu no viena gala, lai neatļautu savienojumus tajā galā, un noklikšķiniet vēlreiz, lai tos atļautu.
- Vecākam rasējumam vēl nav saglabātu savienojumu. Pirmā jūsu izmaiņa tos atrod vienu reizi — pēc tā, kā sienas stāvēja pirms izmaiņas — un saglabā. `WALLJOINS` to izdara uzreiz.
- DWG un DXF failos savienojumi ir katras sienas iekšienē. CadCraft tos nolasa tā, kā saglabāti. Programma, kas neglabā paplašinātos datus, parāda sienas kā parastus blokus un atmet savienojumus; savienojums, kura sienas pārvietotas citā programmā, tiek atmests nākamajā reizē, kad mainīsiet vienu no sienām.

## Stūra savienojuma stils

Stūris, kur divas sienas satiekas gals pret galu, tiek zīmēts kā slīpgriezums, ja neizvēlaties citu stilu.

- `WALLJOINSTYLE` ({{ui:Join style}} grupā {{ui:Walls}}): noklikšķiniet uz stūra. Katrs klikšķis pārslēdz uz nākamo stilu: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}} un atkal {{ui:Mitre}}. Ierakstiet `T`, lai pārslēgtu, kura no divām sienām iet cauri stūrim, kuru noklikšķinājāt pēdējo. Nospiediet {{key:Enter}}, lai pabeigtu. Viena komandas palaišana ir viens atsaukšanas solis.
- {{ui:Butt}}: viena siena iet cauri līdz otras sienas tālākajai virsmai, un otra apstājas pret tās sānu. {{ui:Square off}}: tas pats, bet siena, kas iet cauri, beidzas taisni pret sevi. Taisnā leņķī abi izskatās vienādi.
- Sienas rekvizītos: {{ui:Join style at start}}, {{ui:Join style at end}} un {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- Stils tiek saglabāts kopā ar abām sienām un pāriet DWG un DXF failos. Sienas kopija sākas bez tā.
- T savienojumam stila izvēles nav: iet cauri siena, kuras sānam pieskaras. Stūris, kur satiekas trīs vai vairāk sienu, paliek slīpgriezums. Tāpat ir ar ļoti asu stūri (zem aptuveni 30 grādiem) un divām sienām vienā līnijā.

## Zīmēt sienu formas

Katrs no tiem izveido sienas vienā atsaukšanas solī, ar savienotiem stūriem. Komandā `WALL` `O` iestata novietojuma nobīdi (cik tālu pa kreisi no jūsu klikšķiem iet siena), un `D` izslēdz savienošanu sienām, ko zīmēsiet tālāk.

- `WALLRECT` (`WR`): divi pretēji stūri, kā `RECTANG`.
- `WALLROT`: pirmā mala, tad cik tālu iet otra mala — taisnstūris jebkurā leņķī.
- `WALLPOLY` (`WP`): malu skaits (no 3 līdz 64), centrs, `I` iekšrakstītam vai `C` apvilktam, tad rādiuss, kā `POLYGON`.
- `WALLARC` (`WARC`): centrs, sākums, beigas. `D` pagriež loku otrādi.
- `WALLTAN`: noklikšķiniet netālu no sienas gala, tad loka galu, kas iziet pa šo sienu.
- `WALLPICK`: noklikšķiniet uz līnijas vai polilīnijas un pasakiet, vai ņemt arī līnijas, kas tai pievienotas.
- `WALLTRACE`: noklikšķiniet slēgtā līniju un sienu laukumā, lai ap mazāko no tiem izveidotu sienas.

Plāna sienas ir taisnas, tāpēc loks tiek zīmēts kā īsas taisnas sienas pa 15 grādiem katra. Tās savienojas kā jebkurš stūris.

## Griezt sienas

- `WALLSPLIT` (`WS`): noklikšķiniet uz sienas, tad uz punkta. `C` griež, kur cita siena to krusto, `G` atstāj spraugu starp daļām, `F` padara griezuma galus brīvus, nevis savienotus. Pirmā daļa paliek sienas vietā rasējumā, un durvis un logi iet kopā ar savu daļu. Griezums caur durvīm vai logu tiek noraidīts.
- `WALLSPLITGAP` ({{ui:Split with gap}}): tāds pats sadalījums, bet vispirms jautā par spraugu.
- `WALLDELSEG`: noklikšķiniet uz sienas, tad uz abiem dzēšamā gabala galiem.
- `WALLREJOIN`: noklikšķiniet uz divām vienas sienas daļām, lai tās atkal padarītu par vienu.

## Pārvietot sienas pēc attāluma

- `WALLDIM`: noklikšķiniet uz lineāra vai nolīdzināta izmēra, kas iet no vienas sienas uz otru, tad ierakstiet jauno vērtību. Siena tālākajā galā pārvietojas taisni pret sevi, siena pirmajā galā paliek vietā, un tai savienotās sienas seko.
- `WALLOFFSET` (`WO`): noklikšķiniet uz sienas, tad uz pusi, uz kuru to pārvietot (`D` ieraksta attālumu, `C` izveido kopiju).
- `WALLSTRETCH`: logs ap sienas galiem, tad bāzes punkts un otrs punkts.
- Rekvizītos ierakstīts {{ui:Length}} saglabā sākumu un ņem līdzi sienu, kas savienota tālākajā galā, un jauns {{ui:Thickness}} aug prom no {{ui:Location line}}, ko izvēlējāties (kreisā mala, labā mala vai centrs).

## Bloķēt sienas

Bloķējums paliek kopā ar sienu failā. Ja pārvietojat vienu bloķētu sienu, otra seko. Ja viena izmaiņa pārvieto abas sienas dažādi, tā tiek noraidīta un nekas nemainās.

- `WALLHOLD`: bloķējiet sienu pie citas sienas. `A` vispirms pārvieto to uz citas sienas līnijas, `K` saglabā tās esošo attālumu.
- `WALLHOLDDIM`: bloķējiet attālumu starp divām paralēlām sienām.
- `WALLGRID`: bloķējiet sienu pie režģa līnijas (līnija režģa slānī ar tās marķējumu tekstā vienā galā), vai nu gar to, vai ar vienu galu uz tās. Siena, kas bloķēta gar līniju, saglabā savu attālumu no tās. Pārvietojot režģa līniju ar `GRIDMOVE`, siena seko visa, kopā ar savienotajām sienām. Siena, kas atrodas gar režģa līniju, pārvietojas kopā ar to arī bez bloķējuma, un siena, kas tikai beidzas uz līnijas, tiek izstiepta ar šo galu.
- `WALLHOLDS` uzskaita bloķējumus. `WALLUNHOLD` noņem bloķējumus no sienas.
- Katrs bloķējums plānā rāda mazu piekaramo atslēgu: blakus bloķētās sienas vidum vai blakus galam, kas bloķēts pie režģa līnijas. Noklikšķiniet uz piekaramās atslēgas, lai noņemtu šo bloķējumu.

## Kas šeit vēl nav

Bloķējumi izmanto sienu centra līnijas. Šeit sienām nav slāņu, tāpēc savienojumā nav slāņu prioritātes, un sienas nav liektas (skatiet augstāk par lokiem). Neviens vēl nav izmēģinājis šos rīkus lielā rasējumā, un tie nav pārbaudīti citā CAD programmā.
