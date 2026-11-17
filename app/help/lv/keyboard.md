---
title: Tastatūra un pele
summary: Katrs taustiņš, peles darbība un komandrindas taustiņš CadCraft zīmēšanas lietotnē, tā, kā kods tos apstrādā.
keywords: tastatūra, īsinājumtaustiņi, taustiņi, pele, ritenis, pārvietot, tālummaiņa, labā poga, vidējā poga, f3, f7, f8, ctrl, komandas taustiņš, karsts taustiņš, kopēt, izgriezt, ielīmēt, dublēt, starpliktuve, atlasīt visu
from: a2608a29
---

Īsinājumtaustiņi ir parādīti jūsu datoram. Mac datorā katrs {{key:Mod}} īsinājumtaustiņš izmanto Command taustiņu, un darbojas arī Control taustiņš. Kā taustiņi tiek rakstīti un kā Mac datorā lietot F taustiņus ir aprakstīts sadaļā [Taustiņi, peles un skārienpaliktņi](common:keys).

## Komandu rakstīšana

| Taustiņš | Ko tas dara |
|---|---|
| Jebkurš burts, cipars vai simbols | Nonāk komandrindā, neatkarīgi no tā, kur atrodas rādītājs, ja vien kāds lodziņš panelī neatrodas ar kursoru |
| {{key:Enter}} | Nosūta to, ko ierakstījāt. Tukšā uzvednē: atkārto pēdējo komandu, beidz komandu, pabeidz atlasi vai pieņem noklusējumu `<…>` |
| {{key:Space}} | Tas pats, kas {{key:Enter}}, izņemot gadījumus, kad CadCraft prasa tekstu (teksts, bloku nosaukumi, izmēru teksts) — tad ieraksta atstarpi |
| {{key:Esc}} | Atceļ komandu. Ja nedarbojas neviena komanda: atceļ satvērēja pārvietošanu vai atlases lodziņu un pēc tam notīra atlasi |
| {{key:Tab}} | Pieņem ieteikto komandu, kas redzama komandrindas labajā pusē. Ja nekas nav ierakstīts un rādītājs ir virs pārklājošiem objektiem: izceļ nākamo no tiem (noklikšķiniet, lai to izvēlētos) |
| {{key:Up}} {{key:Down}} | Pārvieto pa iepriekš ierakstītajām rindām (pēdējām 100) |

## Zīmēšana un rediģēšana

| Taustiņš | Ko tas dara |
|---|---|
| {{key:Mod+Z}} | Atsauc pēdējo komandu |
| {{key:Mod+Y}} vai {{key:Mod+Shift+Z}} | Atkārto |
| {{key:Mod+A}} | Atlasa visus rediģējamos objektus atvērtajā cilnē ({{cmd:SELECTALL}}). Ja komandrindā esat kaut ko ierakstījis, tiek atlasīts šis teksts |
| {{key:Delete}} | Dzēš atlasītos objektus ({{cmd:ERASE}}), ja vien komandrindā neesat kaut ko ierakstījis |
| {{key:Backspace}} | Dzēš atlasītos objektus, kad komandrindai nav kursora; komandrindā dzēš to, ko ierakstījāt |
| {{key:Esc}} | Ja nedarbojas neviena komanda: notīra atlasi ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Saglabā kopiju rasējuma formātā (DWG vai DXF) |
| {{key:Mod+Shift+S}} | Saglabāt kā: izvēlieties DWG vai DXF un tad saglabājiet kopiju |
| {{key:Mod+O}} | Atver DWG vai DXF |
| {{key:Mod+P}} | Drukā uz PDF |

Atsaukšana, atkārtošana, visu atlase un drukāšana neko nedara, kamēr darbojas komanda: vispirms nospiediet {{key:Esc}}.

## Kopēšana, izgriešana un ielīmēšana

| Taustiņš | Ko tas dara |
|---|---|
| {{key:Mod+C}} | Kopē atlasi starpliktuvē ({{cmd:COPYCLIP}}). Nekas nav atlasīts: CadCraft prasa objektus |
| {{key:Mod+X}} | Izgriež: kopē atlasi un pēc tam to dzēš ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Ielīmē: kopija seko kursoram; noklikšķiniet vai ierakstiet punktu, lai to novietotu ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Ielīmē vietā: tajās koordinātās, no kurām tā tika nokopēta ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dublē: atlases kopija pārvietojas kopā ar rādītāju; noklikšķiniet, lai to novietotu. {{key:Esc}} neatstāj neko ({{cmd:DUPLICATE}}) |

Tās pašas darbības ir rīkjoslas grupā {{ui:Rediģēt}} ({{ui:Kopēt}}, {{ui:Ielīmēt}}) un tās izvēlnē {{ui:Vairāk}}. Kamēr darbojas cita komanda, vispirms to pabeidziet vai nospiediet {{key:Esc}}; nospiežot {{key:Mod+V}} vai {{key:Mod+D}} vēlreiz, kamēr kopija seko kursoram, sākas no jauna. Ja komandrindā esat kaut ko ierakstījis vai komanda prasa tekstu, šie taustiņi kopē, izgriež un ielīmē šo tekstu. Skatiet [Kopēšana, ielīmēšana un dublēšana](topic:copy-paste).

## Pārslēgi

| Taustiņš | Pārslēgs | Statusa joslas poga |
|---|---|---|
| {{key:F3}} | Objektu piesaiste ieslēgta vai izslēgta | {{ui:Piesaiste}} |
| {{key:F7}} | Režģis ieslēgts vai izslēgts | {{ui:Režģis}} |
| {{key:F8}} | Ortogonālais režīms ieslēgts vai izslēgts | {{ui:Ortogonāli}} |
| {{key:F10}} | Polārā izsekošana ieslēgta vai izslēgta | {{ui:Polārs}} |
| {{key:F11}} | Objektu piesaistes izsekošana ieslēgta vai izslēgta | {{ui:Izsekot}} |
| {{key:F12}} | Dinamiskā ievade ieslēgta vai izslēgta | {{ui:Dinam.}} |

:::mac
Mac datorā F3, F7 un F8 parasti ir Mission Control un multivides taustiņi. Turiet nospiestu **fn** kopā ar tiem vai ieslēdziet standarta funkciju taustiņus sistēmas iestatījumos, kā aprakstīts sadaļā [Taustiņi, peles un skārienpaliktņi](common:keys). Statusa joslas pogas vienmēr darbojas.
:::

:::firefox
Firefox pārlūkā F7 var arī piedāvāt ieslēgt kursora pārlūkošanu. Izvēlieties **Nē** un izmantojiet pogu {{ui:Režģis}}, ja tas turpina jautāt.
:::

## Palīdzība

| Taustiņš | Ko tas dara |
|---|---|
| {{key:F1}} | Atver vai aizver šo palīdzību blakus rasējumam. Darbojas arī tad, kad komanda ir aktīva, un nekad nenonāk komandrindā. |
| {{key:Esc}} | Ar kursoru palīdzības panelī: notīra meklēšanu vai aizver paneli |

Poga {{ui:Palīdzība}} augšējā joslā dara to pašu, ko {{key:F1}}. Kamēr ierakstāt palīdzības meklēšanas lodziņā, nekas nenonāk komandrindā. Noklikšķiniet uz rasējuma, lai taustiņus atdotu CadCraft; panelis paliek atvērts blakus.

:::mac
Mac tastatūrā turiet **fn** un nospiediet F1, vai noklikšķiniet uz {{ui:Palīdzība}}.
:::

## Ekrāns

| Taustiņš | Ko tas dara |
|---|---|
| {{key:Ctrl+Shift+F}} | Pārslēdz parasto, pilnekrāna un pilnekrāna režīmu ar paslēptām joslām. Šeit visos datoros tiek izmantots Control taustiņš, arī Mac datorā. |
| {{key:Left}} {{key:Right}} | Ja zem rasējuma fokusēta ir cilne: iepriekšējā vai nākamā cilne |

Pilnekrāna režīmā pārlūkprogramma var izmantot pirmo {{key:Esc}}, lai izietu no pilnekrāna. Nospiediet {{key:Esc}} vēlreiz, lai atceltu komandu.

## Dialogi

| Taustiņš | Ko tas dara |
|---|---|
| {{key:Esc}} | Aizver dialogu ({{ui:Drukāt PDF}} vai jautājumu, piemēram, „Nesaglabātas izmaiņas”, kur tas nozīmē {{ui:Atcelt}}) |
| {{key:Tab}} | Pārvieto starp dialoga iestatījumiem un pogām |

Kamēr dialogs ir atvērts, rasējuma taustiņi nedarbojas.

## Paneļa lauki

Lodziņā labajā vai kreisajā panelī:

| Taustiņš | Ko tas dara |
|---|---|
| {{key:Enter}} | Piemēro vērtību un atstāj lodziņu |
| {{key:Esc}} | Atjauno veco vērtību un atstāj lodziņu |
| {{key:Tab}} | Piemēro un pāriet uz nākamo lodziņu |

Kamēr lodziņam ir kursors, burti raksta tajā, nevis komandrindā.

## Pele

| Darbība | Ko tā dara |
|---|---|
| Klikšķis | Norāda punktu, kad komanda to prasa; norāda objektu, kad prasa objektus; citādi atlasa objektu vai satvērēju |
| Shift+klikšķis | Noņem atlasītu objektu no atlases ({{ui:Klikšķināšana uz objektiem}} iestatīts uz {{ui:Aizstāj atlasi}} sadaļā [Iestatījumi](topic:settings): pievieno to). Norādot punktu: šim klikšķim ignorē objektu piesaisti |
| Klikšķis tukšā vietā, tad vēlreiz klikšķis | Atlases lodziņš: no kreisās uz labo ir logs, no labās uz kreiso — krustojums |
| Vilkšana tukšā vietā | Lasso: ja pirmais virziens ir pa labi, tas ir logs, ja pa kreisi — krustojums; {{key:Space}} vilkšanas laikā pārslēdz logu, krustojumu un žogu; {{key:Esc}} to atmet (LASSOMODE 0 vai Iestatījumi atkal padara to par taisnstūri) |
| Vilkšana caur daļām TRIM vai EXTEND | Apgriež (vai pagarina) katru daļu, ko šķērso ceļš; turiet {{key:Shift}} citai darbībai |
| Vilkt satvērēju | Pārvieto satvērēju (vai noklikšķiniet uz satvērēja un tad uz vietas, kur tam jābūt) |
| Dubultklikšķis uz teksta | Atlasa to un novieto kursoru tā lodziņā {{ui:Teksts}} labajā panelī |
| Labais klikšķis | Enter. Satvērēja pārvietošanas vai atlases lodziņa laikā: atceļ to |
| Vilkšana ar labo pogu | Pārvieto skatu |
| Ritenis | Tālina un attālina ap krustiņu |
| Vilkšana ar riteni (vidējo pogu) | Pārvieto skatu |
| Dubultklikšķis uz riteņa | Tālina uz visu rasējumu (robežas) |
| Ievilkt DWG vai DXF rasējumā | Atver to |

Skārienpaliktnim vai skārienekrānam skatiet [Pele, skārienpaliktnis un skāriens](topic:mouse-trackpad-touch).

## Taustiņi, ko patur pārlūkprogramma

{{key:Mod+N}}, {{key:Mod+W}} un {{key:Mod+T}} vienmēr pieder pārlūkprogrammai. CadCraft tos neizmanto: jaunam rasējumam lietojiet {{ui:Jauna}} vai ierakstiet `NEW`. CadCraft starpliktuve ir sava: {{key:Mod+C}} un {{key:Mod+V}} kopē objektus starp CadCraft rasējumiem un cilnēm, nevis uz citām programmām vai no tām.

:::mac
Ja {{key:Mod+Y}} atver jūsu pārlūkprogrammas vēsturi, nevis atkārto, izmantojiet {{key:Mod+Shift+Z}} vai pogu {{ui:Atkārtot}}.
:::

## Kur atrodas Move

Pārvietošana ir komanda `MOVE` (taustiņš {{key:M}}): izvēlieties objektus, tad bāzes punktu un otru punktu vai ierakstītu attālumu. Ir arī `ALIGN` un `DISTRIBUTE`. BimCraft izmanto tos pašus nosaukumus tiem pašiem uzdevumiem ēkas elementos, bet tā {{key:M}} ir Measure: tās Move ir {{key:Shift+M}}.
