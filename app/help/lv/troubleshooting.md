---
title: Problēmu novēršana
summary: Ziņojumi, ko rāda CadCraft, un problēmas, ar kurām varat sastapties, katra ar cēloni un risinājumu.
keywords: problēma, kļūda, nedarbojas, ziņojums, nevar atvērt, nezināma komanda, nenotiek nekas, iestrēdzis, taustiņi nedarbojas, tukšs, trūkst, labot
from: 8299b222
---

## Failu atvēršana

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| "CadCraft atver DWG un DXF rasējumus. "…" nav neviens no tiem." | Fails nav `.dwg` vai `.dxf`. | Atveriet pašu rasējuma failu. PDF var ievietot (Atvērt jautā: importēt vai pievienot, skat. [PDF pamatnes](topic:pdf-underlay)); attēlus ievieto ar `IMAGEATTACH`. |
| "Šis bināro DXF beidzas objekta vidū: fails ir saīsināts vai bojāts." | Binārais DXF apstājas pirms beigām. | Ierakstiet RECOVER, lai atvērtu to, kas ir lasāms, vai pieprasiet failu vēlreiz. |
| "Šis fails nav lasāms DXF (nepareizs grupas kods rindā …)." | DXF ir bojāts vai patiesībā nav DXF. | Pieprasiet failu vēlreiz vai DWG. |
| "Šo rasējumu nevarēja nolasīt. Tas var būt bojāts vai saglabāts versijā, ko lasītājs vēl neapstrādā (…)." | DWG lasītājs to nevarēja nolasīt. | Pieprasiet DWG, kas saglabāts vecākā versijā, vai DXF. |
| "Šis rasējums ir no AutoCAD R11 / R12 (DWG AC1009), vecāks, nekā CadCraft spēj nolasīt …" | DWG faili no versijas 12 un agrākām izmanto formātu, ko CadCraft nelasa. | Programmā, kurā tas izveidots, saglabājiet to kā DXF (jebkurā versijā) vai jaunākā DWG un atveriet to. CadCraft pašas komanda Saglabāt kā piedāvā DXF R12 programmām, kurām vajag šo veco formātu. |
| "Nevarēja atvērt …", kam seko tīkla ziņojums, pirmajā DWG | DWG lasītāju nevarēja lejupielādēt: jūs esat bezsaistē un CadCraft nav saglabāts lietošanai bezsaistē, vai savienojums pārtrūka. | Pārejiet tiešsaistē un mēģiniet vēlreiz vai atveriet DXF. Noklikšķiniet {{ui:Saglabāt bezsaistei}} un uzgaidiet "Gatavs darbam bezsaistē", lai DWG faili nākamreiz atvērtos bezsaistē. Skat. [Darbs bezsaistē](common:offline). |
| Bezsaistes poga saka "Nevarēja saglabāt" | Daži faili netika lejupielādēti. | Pārbaudiet savienojumu un noklikšķiniet pogu vēlreiz. |
| Bezsaistes poga saka "Bezsaiste nav pieejama" | Privātie logi un daži pārvaldīti datori nevar saglabāt bezsaistes kopiju. | Izmantojiet parastu logu vai paliekiet tiešsaistē. |
| CadCraft neatveras bez savienojuma | Tas šajā pārlūkprogrammā nebija saglabāts lietošanai bezsaistē, vai pārlūkprogramma to notīrīja. | Nākamreiz, kad būsiet tiešsaistē, noklikšķiniet {{ui:Saglabāt bezsaistei}} un uzgaidiet "Gatavs darbam bezsaistē". |
| Rasējums atveras, bet daļas trūkst | Objekti, ko CadCraft vēl nevar zīmēt, vai slāņi, kas failā ir izslēgti vai iesaldēti. | Izlasiet "Par šo failu" kreisajā panelī. Pārbaudiet {{ui:Slāņi}} paneli. |
| Teksts ietinas divās rindās | CadCraft zīmē tekstu Helvetica tipa fontā, kas ir platāks nekā daži CAD fonti. | Saīsiniet tekstu {{ui:Rekvizīti}} sadaļā vai samierinieties ar papildu rindu. |
| Riņķis parādās kā elipse, vai spoguļots teksts ir lasāms pareizi | Objekts tika zīmēts slīpā plaknē vai skatīts no apakšas programmā, kurā fails izveidots. CadCraft to rāda kā skatītu no augšas, tāpat kā šīs programmas plāna skats; teksts paliek lasāms. | Nav ko labot. Lai to redzētu tā, kā to rāda otra programma, pieprasiet rasējumu saplacinātu vai ar objektiem, kas zīmēti no augšas. |
| Bloks, riņķis vai izmērs atrodas citur, nevis tur, kur tas bija programmā, kurā fails izveidots | Rasējuma gadījums, ko CadCraft nolasa nepareizi. | Pastāstiet mums Discord, ja varat, pievienojot failu. |

## Komandrinda

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| "Nezināma komanda "…". Ierakstiet HELP, lai skatītu sarakstu." | Nav komandas vai aizstājvārda ar šādu nosaukumu. | Ierakstiet `HELP` vai skatiet [Komandu uzziņu](topic:commands). Dažas pazīstamas komandas [vēl nav izveidotas](topic:not-built-yet). |
| "Nav šādas komandas" blakus komandrindai rakstīšanas laikā | Ierakstītais vēl neatbilst nevienam. | Turpiniet rakstīt vai pārbaudiet pareizrakstību. |
| "Nepieciešams punkts vai opcijas atslēgvārds." | Ierakstītais nav ne punkts, ne opcija. | Pārbaudiet formātu: `x,y`, `@dx,dy`, `@d<a` vai viens skaitlis. Skat. [Koordinātu un attāluma ievade](topic:coordinate-entry). |
| "Nepieciešams pozitīvs skaitlis vai divi punkti." | Attālums bija negatīvs vai nebija skaitlis. | Ierakstiet pozitīvu skaitli vai noklikšķiniet divus punktus. |
| "Nepieciešams leņķis grādos vai divi punkti." | Leņķis nebija skaitlis. | Ierakstiet grādus kā vienkāršu skaitli. |
| "Nepieciešams skaitlis." | Gaidīts bija skaitlis. | Ierakstiet tikai ciparus. |
| "Nederīgs opcijas atslēgvārds." | Burti neatbilst nevienai opcijai. | Ierakstiet lielos burtus, kas redzami kvadrātiekavās. |
| `*Cancel*` | Jūs nospiedāt {{key:Esc}} vai {{key:Enter}} vietā, kur vajadzēja punktu. | Sāciet komandu no jauna. |
| Rakstīšana nenonāk komandrindā | Panelī vai dialogā lodziņā ir kursors. | Nospiediet {{key:Enter}} vai {{key:Esc}} vai noklikšķiniet rasējumā. |
| Komanda izmanto objektus, kurus neizvēlējāties | Tie tika atlasīti, pirms sākāt komandu. | Nospiediet {{key:Esc}} pirms komandas. |
| Līnija aizgāja negaidītā vietā | `x,y` ir absolūts. | Relatīviem punktiem izmantojiet `@dx,dy`. |
| "Vispirms pabeidziet vai atceliet pašreizējo komandu (Esc)." | Jūs nospiedāt {{key:Mod+S}}, kamēr komanda darbojās. | Nospiediet {{key:Esc}}, tad saglabājiet. |
| "Nevarēja saglabāt kā DWG (AutoCAD 2000): … Mēģiniet Saglabāt kā, tad DXF." | Kaut kas rasējumā nevarēja tikt ierakstīts DWG formātā. | Nospiediet {{key:Mod+Shift+S}}, izvēlieties {{ui:DXF R12}} un noklikšķiniet {{ui:Saglabāt}}. |
| "Nav saglabāts." | Jūs aizvērāt dialogu {{ui:Saglabāt kopiju kā}} ar {{ui:Atcelt}} vai {{key:Esc}}. | Vēlreiz nospiediet {{key:Mod+Shift+S}} un noklikšķiniet {{ui:Saglabāt}}. |

## Rediģēšana

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| Objekts neatlasās | Tā slānis ir bloķēts, izslēgts vai iesaldēts; vai jūs atrodaties lapā un tas ir modelis skata logā. | Atbloķējiet slāni vai dodieties uz cilni {{ui:Modelis}}. |
| "Tur nekas nav atrasts." | Zem klikšķa nav objekta. | Tuviniet un noklikšķiniet uz pašas līnijas. |
| "Tur nekas nešķērso šo objektu." | {{cmd:TRIM}} neatrada objektu, kas šķērso izvēlēto daļu. | Pārbaudiet, vai griezuma līnija tiešām to šķērso. |
| "Šo objektu nevar apgriezt." | Apgriešana darbojas ar līnijām, lokiem, riņķiem un polilīnijām. | Vispirms sadaliet blokus vai izdzēsiet un zīmējiet no jauna. |
| "Šajā virzienā nav robežas." | {{cmd:EXTEND}} neatrada, ko sasniegt. | Izvēlieties tuvāk tam galam, kuram jāizstiepjas. |
| "Šo objektu nevar nobīdīt." | Nobīde darbojas ar līnijām, lokiem, riņķiem un polilīnijām. | Vispirms sadaliet to vai zīmējiet paralēlu līniju. |
| "Tik tālu nobīdīt nevar." | Nobīde apgrieztu formu uz iekšu. | Izmantojiet mazāku attālumu. |
| "Rādiuss ir pārāk liels." vai "Attālums ir pārāk liels." | Noapaļojums vai nošķelšana pārsniegtu līnijas galu. | Iestatiet mazāku rādiusu ar `R` vai mazākus attālumus ar `D`. |
| "Atvērtas polilīnijas apgriezt var tikai pirmo vai pēdējo segmentu." | Stūris iegrieztos polilīnijas vidū. | Izvēlieties divus blakus esošus polilīnijas segmentus vai izmantojiet `P` katram stūrim. |
| "Izvēlieties otru, citu līniju." | Otrā izvēle bija tā pati līnija vai nebija līnija. | Izvēlieties citu līniju. |
| "Sadalīt var tikai polilīnijas, bloku atsauces un izmērus." | Atlasē nebija ko sadalīt. | Atlasiet polilīniju, bloka atsauci vai izmēru. |
| "Tas ir pašreizējais slānis. Vispirms padariet pašreizējo citu slāni." | Jūs mēģinājāt izslēgt pašreizējo slāni. | Noklikšķiniet cita slāņa nosaukumu un tad izslēdziet šo. |
| "Jau ir slānis ar nosaukumu …" | Slāņu nosaukumiem jābūt unikāliem. | Izvēlieties citu nosaukumu. |
| "Nav ko atsaukt." | Nav vairs ko atsaukt, vai arī jūs atvērāt vai sākāt rasējumu (tas notīra vēsturi). | — |

## Izmēri un bloki

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| Izmēru teksts un bultiņas ir sīkas vai milzīgas | Izmēri ir rasējuma vienībās; kopējais mērogs neatbilst rasējumam. | Iestatiet {{cmd:DIMSCALE}} uz drukas mērogu; skat. [Izmēru lielumu iestatīšana](topic:dimension-settings). |
| "Izvēlieties punktu leņķa iekšpusē, kuru vēlaties izmērīt." | Leņķa izmēra novietojums atrodas uz malas. | Noklikšķiniet leņķa iekšpusē. |
| "Šīs līnijas ir paralēlas." | Paralēlām līnijām starp tām nav leņķa. | Izvēlieties divas līnijas, kas saiet kopā. |
| "Izvēlieties lineāru vai izlīdzinātu izmēru." | {{cmd:DIMCONTINUE}} vai {{cmd:DIMBASELINE}} vajag vienu, no kura sākt. | Izvēlieties lineāru vai izlīdzinātu izmēru. |
| "Šim rasējumam vēl nav bloku: F ievieto no faila, L no bibliotēkas …" | Rasējumam pašam nav bloku. | Ierakstiet `F` vai `L` vai izveidojiet bloku ar {{cmd:BLOCK}}. |
| "Nav bloka ar nosaukumu "…"." | Nosaukums ir nepareizs. | Ziņojumā ir uzskaitīti pieejamie bloki. |
| "Bloka nosaukums nevar sākties ar * vai izmantot …", kam seko rakstzīmju saraksts | Nosaukumā ir rakstzīme, ko bloki nevar izmantot. | Izmantojiet burtus, ciparus, `-` un `_`. |
| "Bloks nevar saturēt sevi." | Atlasē ir atsauce uz veidojamo bloku. | Atstājiet šo atsauci ārpus. |
| "Nav atlasīts neviens objekts; nekas nav izveidots." | Jūs nospiedāt {{key:Enter}} pirms atlasīšanas. | Palaidiet {{cmd:BLOCK}} vēlreiz un atlasiet objektus. |

## Lapas un drukāšana

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| "Skata logi tiek novietoti izkārtojumā. Vispirms atveriet izkārtojuma cilni (vai izveidojiet to ar LAYOUT)." | {{cmd:MVIEW}} cilnē {{ui:Modelis}}. | Vispirms noklikšķiniet lapas cilni. |
| "Vispirms atveriet izkārtojumu ar skata logu." | {{cmd:VPVIEW}} cilnē {{ui:Modelis}}. | Vispirms noklikšķiniet lapas cilni. |
| Skata loga mērogs izskatās desmit reizes nepareizs | Rasējuma vienības ir nepareizas. | Iestatiet {{ui:Vienības}} sadaļā {{ui:Pašreizējie iestatījumi}}. |
| "Vēl nav ko drukāt." | Modelis ir tukšs. | Uzzīmējiet kaut ko vai atveriet rasējumu. |
| "Izvēlieties logu drukāšanai." | Izvēlēts {{ui:Logs…}}, bet logs nav izvēlēts. | Noklikšķiniet {{ui:Izvēlēties}} un izvēlieties divus stūrus. |
| "… lielāks par papīru: malas tiek apgrieztas." | Apgabals šajā mērogā neiekļaujas. | Izvēlieties mazāku mērogu, lielāku papīru vai {{ui:Pielāgot papīram}}. |
| "Pārlūkprogramma bloķēja jauno cilni, tāpēc PDF tika lejupielādēts." | Uznirstošie logi šai vietnei ir bloķēti. | Atveriet lejupielādēto PDF vai atļaujiet šai vietnei uznirstošos logus. |
| Rakstzīmes drukājas kā "?" | PDF fontiem nav burtu tām (retas ideogrāfijas, hindi un citi raksti, kam vajadzīga sarežģīta veidošana, …), vai lielāko fontu nevarēja ielādēt (bezsaistē). Eiropas raksti, kirilica, grieķu, ebreju, arābu, persiešu, urdu, taju, ķīniešu, japāņu un korejiešu raksti drukājas kā paši. | Arābu rakstībai, taju, ķīniešu, japāņu vai korejiešu tekstam drukājiet vēlreiz ar savienojumu. Citi raksti vēl nav izveidoti. |
| Konstrukcijas līnijas redzamas PDF failā | To slānis tiek drukāts. | Noklikšķiniet slāņa drukas pogu. |
| Visas līnijas ir vienādi biezas | To līnijas biezums ir {{ui:Noklusējums}}, tāpēc tās drukājas ar dialoga pildspalvas platumu. | Labajā panelī slāņiem vai objektiem piešķiriet {{ui:Līnijas platums}} vai dialogā izvēlieties {{ui:Līnijas biezums}}. Lai ekrānā redzētu līniju biezumus, statusa joslā nospiediet {{ui:LWT}}. |

## Taustiņi un ekrāns

| Simptoms | Cēlonis | Risinājums |
|---|---|---|
| F3, F7 vai F8 maina skaļumu vai atver Mission Control | Mac funkciju taustiņi. | Turiet **fn** vai izmantojiet statusa joslas pogas. Skat. [Taustiņi, peles un skārienpaneļi](common:keys). |
| F7 jautā par kursora pārlūkošanu | Firefox pats izmanto F7. | Izvēlieties Nē; izmantojiet pogu {{ui:Režģis}}. |
| {{key:Mod+N}} atvēra pārlūkprogrammas logu | Pārlūkprogramma patur šo taustiņu. | Noklikšķiniet {{ui:Jauna}} vai ierakstiet `NEW`. |
| {{key:Mod+A}} atlasīja komandrindas tekstu | Komandrindā bija kursors. | Vispirms noklikšķiniet objektu vai uzvednē `Select objects` ierakstiet `ALL`. |
| {{key:Delete}} neizdzēš | Komandrindā bija kursors. | Ierakstiet `E` un nospiediet {{key:Enter}}. |
| Labais klikšķis Mac skārienpanelī nedara neko | Control-klikšķis var tikt uzskatīts par parastu klikšķi. | Noklikšķiniet ar diviem pirkstiem. |
| Skārienpaneļa panorāmēšana nedarbojas | Vidējas pogas nav, un atstarpes taustiņš nepanoramē. | Velciet ar diviem pirkstiem: 2D skats panoramē (tuvināšanu veic savilkšana un peles ritenis). Vai velciet, turot labo klikšķi. |
| Pirmais {{key:Esc}} izgāja no pilnekrāna | Pārlūkprogramma izmanto Esc, lai izietu no pilnekrāna. | Nospiediet {{key:Esc}} vēlreiz, lai atceltu komandu. |
| {{key:F1}} Mac nedara neko | F1 ir spilgtuma taustiņš. | Turiet **fn** vai noklikšķiniet {{ui:Palīdzība}}. |
| Rakstīšana nonāk palīdzības meklēšanas lodziņā | Palīdzības panelī ir kursors. | Noklikšķiniet rasējumā. |
| Rasējums kļuva tukšs | Jūs tālu attālinājāt. | Noklikšķiniet {{ui:Robežas}} vai veiciet dubultklikšķi uz riteņa. |
| "Atstāt vietni?", aizverot cilni | Ir nesaglabātas izmaiņas. | Paliekiet, saglabājiet ar {{key:Mod+S}}, tad aizveriet. |
