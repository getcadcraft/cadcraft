---
title: Objektu atlase
summary: Atlasiet objektus pa vienam, ar logu vai krustojumu, pirms vai komandas laikā, un izņemiet objektus no atlases.
keywords: atlasīt, atlase, logs, krustojums, izvēlēties, visi, pēdējais, iepriekšējais, žogs, noņemt, pievienot, tab, cikls, pārklājas, qselect, ātrā atlase, filtrs, atlasīt līdzīgus, selectsimilar, shift, atcelt atlasi, ctrl+a, pickfirst
from: 676508c7
---

## Ko jūs uzzināsiet

Kā izvēlēties objektus, ar kuriem komanda strādā. CadCraft ir divi darba veidi, un abi ir labi:

- **Vispirms atlasiet, tad komanda** (lietvārds-darbības vārds). Atlasiet objektus, tad ierakstiet `M` (Pārvietot). Komanda pieņem jūsu atlasi un uzreiz pāriet uz nākamo jautājumu.
- **Vispirms komanda, tad atlase** (darbības vārds-lietvārds). Ierakstiet `M`; komanda jautā `Select objects:`; atlasiet un nospiediet {{key:Enter}}.

## Atlasiet pa vienam objektam

1. Bez darbojošās komandas noklikšķiniet uz līnijas. Tā tiek izcelta, un parādās tās rokturi (mazi kvadrātiņi). Labajā panelī redzamas tās īpašības.
2. Noklikšķiniet uz cita objekta. Tas tiek pievienots atlasei.
3. Turiet {{key:Shift}} un noklikšķiniet uz atlasīta objekta. Tas tiek izņemts no atlases.
4. Nospiediet {{key:Esc}}. Nekas nav atlasīts.

## Logs un krustojums

Noklikšķiniet vienreiz uz tukšas vietas, pārvietojiet kursoru un noklikšķiniet vēlreiz: rāmis. Nospiežot un velkot, tiek zīmēts brīvroku lasso, ar tiem pašiem diviem veidiem (skatiet [Laso atlase](topic:lasso-selection); iestatījumos var panākt, ka velkot zīmējas taisnstūris). Atkarībā no virziena atlasāt dažādus objektus:

| Jūs pārvietojat | Rāmis | Atlasa |
|---|---|---|
| No kreisās uz labo | Logs | Tikai objektus, kas ir **pilnībā iekšā** rāmī |
| No labās uz kreiso | Krustojums | Objektus rāmī **un** objektus, ko tas pieskaras |

1. Uzzīmējiet dažas pārklājošās līnijas un riņķus.
2. Noklikšķiniet uz tukšas vietas pa kreisi no dažiem objektiem, pārvietojiet pa labi un noklikšķiniet vēlreiz. Atlasīti tiek tikai pilnībā iekšā esošie objekti.
3. Nospiediet {{key:Esc}}.
4. Noklikšķiniet uz tukšas vietas pa labi, pārvietojiet pa kreisi pāri dažiem objektiem un noklikšķiniet vēlreiz. Atlasīts tiek viss, ko rāmis pieskaras.
5. Turiet {{key:Shift}} un velciet rāmi vai lasso pāri dažiem atlasītiem objektiem. Tie tiek izņemti no atlases.

## Atlasiet, tad palaidiet komandu

1. Atlasiet divus riņķus.
2. Ierakstiet `M` un nospiediet {{key:Enter}}.

Vēsture rāda `2 found`, un uzvedne uzreiz pāriet uz `Specify base point`. Pabeidziet pārvietošanu (skatiet [Pārvietošana, kopēšana, pagriešana, mērogošana un spoguļattēls](topic:modify-objects)).

Kad komanda beidzas, atlase tiek notīrīta, tāpēc nākamā komanda sākas no jauna.

Komandas, kas šādi ņem atlasi: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} un {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} un {{cmd:CHAMFER}} vienmēr prasa izvēlēties objektus pa vienam; {{cmd:TRIM}} un {{cmd:EXTEND}} ņem izvēli vai ceļu, pa kuru velkat cauri gabaliem (skatiet [Apgriešana un pagarināšana](topic:trim-and-extend)).

## Palaidiet komandu, tad atlasiet

1. Pārliecinieties, ka nekas nav atlasīts ({{key:Esc}}).
2. Ierakstiet `E` un nospiediet {{key:Enter}}. Uzvedne rāda `Select objects:`.
3. Noklikšķiniet uz objektiem vai velciet logus un krustojumus. Vēsture skaita katru izvēli (`1 found`, `3 found`).
4. Nospiediet {{key:Enter}}, {{key:Space}} vai labo pogu, lai pabeigtu atlasi.

Objekti tiek izdzēsti, un vēsture rāda, cik to bija.

Pie `Select objects:` uzvednes var ierakstīt arī:

- `ALL`, tad {{key:Enter}}: katrs objekts, ko var rediģēt atvērtajā cilnē.
- `L` (LAST), tad {{key:Enter}}: visnesen zīmētais objekts.
- `P` (Iepriekšējais): objekti, ar kuriem strādāja pēdējā komanda, ja tie vēl ir.
- `F` (Žogs): noklikšķiniet vai ierakstiet punktus pa līniju; tiek pievienots katrs objekts, ko līnija šķērso. Nospiediet {{key:Enter}}, lai pabeigtu žogu; `U` atceļ tā pēdējo punktu.
- `W` (Logs) vai `C` (Krustojums): divi stūri neatkarīgi no tā, kurā virzienā velkat.
- `R` (Noņemt): no šī brīža klikšķi, logi un žogi izņem objektus. Uzvedne rāda `Remove objects:`. `A` (Pievienot) atgriež atpakaļ.
- `?`: šo opciju saraksts vēsturē.

Šīs opcijas uzvednē nav redzamas, kā AutoCAD.

## Atlasiet vienu no vairākiem objektiem, kas ir viens virs otra

Kur objekti pārklājas vai pieskaras, klikšķis paņem tuvāko. Lai dabūtu citu:

1. Turiet kursoru nekustīgi virs vietas.
2. Nospiediet {{key:Tab}}. Nākamais tur esošais objekts tiek izcelts, un statusa josla pasaka, kurš tas ir ("2 of 3: Līnija uz slāņa Walls").
3. Nospiediet {{key:Tab}} vēlreiz, līdz izcelts ir vajadzīgais, tad noklikšķiniet, nekustinot.

Kustinot kursoru, sākas no jauna. Tas strādā bez darbojošās komandas, pie `Select objects:` un visur, kur komanda prasa izvēlēties vienu objektu.

## Izvēlieties pēc noteikuma: ātrā atlase

{{cmd:QSELECT}} (`QS`, vai {{ui:Rediģēt}} › {{ui:Vairāk}} › {{ui:Ātrā atlase}}) atlasa katru objektu, kas atbilst noteikumam, piemēram, katru riņķi ar rādiusu zem 50 vai katru bloka atsauci ar nosaukumu DOOR-900.

1. Atveriet {{ui:Ātrā atlase}}.
2. Izvēlieties {{ui:Objekta tips}} (sarakstā katrs tips tiek saskaitīts), tad {{ui:Īpašība}}: {{ui:Slānis}}, {{ui:Krāsa}} un dažiem tipiem {{ui:Garums}}, {{ui:Rādiuss}}, {{ui:Laukums}}, {{ui:Teksta augstums}}, {{ui:Teksta saturs}}, {{ui:Bloka nosaukums}} vai {{ui:Svītrojuma raksts}}.
3. Izvēlieties {{ui:Operators}} un {{ui:Vērtība}}. `*` atbilst ar aizstājējzīmēm (`DOOR-*`); {{ui:Atlasīt visu}} ņem katru šī tipa objektu. Skaits apakšā rāda, cik atbilst, kamēr izvēlaties.
4. {{ui:Kā piemērot}}: iekļaut atbilstošos vai visu pārējo. {{ui:Piemērot}} {{ui:Pašreizējā atlase}} sašaurina to, ko jau atlasījāt; {{ui:Pievienot pašreizējai atlasei}} pievieno tam.
5. Noklikšķiniet uz {{ui:Atlasīt}}. Tad palaidiet vajadzīgo komandu: tā izmanto atlasi.

## Atlasiet līdzīgus

Atlasiet vienu vai vairākus objektus un ierakstiet {{cmd:SELECTSIMILAR}} (`SIM`), vai izvēlieties {{ui:Rediģēt}} › {{ui:Vairāk}} › {{ui:Atlasīt līdzīgus}}. Tiek atlasīts katrs objekts ar to pašu tipu, tajā pašā slānī un ar to pašu krāsu; bloku atsaucēm vajag arī to pašu bloku, svītrojumiem to pašu rakstu. Ierakstiet `SE` pie tās `Select objects` uzvednes, lai izvēlētos, kam jāsakrīt.

## Atlasiet tagad, izmantojiet vēlāk

Ierakstiet `SELECT` un nospiediet {{key:Enter}}, izvēlieties objektus ar kādu no iepriekš minētajiem veidiem un nospiediet {{key:Enter}}. Tie paliek atlasīti nākamajai komandai, un `P` tos atkal izvēlas vēlākā `Select objects:` uzvednē.

## Atlasiet visu

Bez darbojošās komandas nospiediet {{key:Mod+A}} vai izvēlieties {{ui:Atlasīt visu}} rīkjoslas {{ui:Rediģēt}} › {{ui:Vairāk}} izvēlnē, lai atlasītu katru objektu, ko var rediģēt atvērtajā cilnē. Ja komandrindā kaut ko esat ierakstījis, {{key:Mod+A}} atlasa šo tekstu: vispirms nospiediet {{key:Esc}}, lai to notīrītu. Pie `Select objects:` uzvednes ierakstiet `ALL`. {{ui:Neatlasīt nevienu}} tajā pašā izvēlnē vai {{key:Esc}} notīra atlasi.

:::tip
Ja vēlaties, lai katrs klikšķis aizstāj atlasi (un {{key:Shift}} pievieno), iestatiet {{ui:Klikšķināšana uz objektiem}} uz {{ui:Aizstāj atlasi}} [CadCraft iestatījumos](topic:settings).
:::

## Ko nevar atlasīt

- Objekti slānī, kas ir **izslēgts**, **iesaldēts** vai **bloķēts**. Bloķētie objekti paliek redzami, un uz tiem var piesaistīties, bet tos nevar atlasīt vai mainīt.
- Lapas cilnē: modelis, kas redzams skatlogā. Jūs atlasāt lapas paša objektus (titula bloku, piezīmes, skatlogu rāmjus). Lai rediģētu modeli, dodieties uz {{ui:Modelis}} cilni.

## Ātri dzēst

Atlasiet objektus, tad nospiediet {{key:Delete}} (vai {{key:Backspace}}, ja komandrindā nav kursora). Mac tastatūrā taustiņš ar uzrakstu delete darbojas, kad esat noklikšķinājis zīmējumā; kamēr komandrindā ir kursors, nospiediet kopā fn un delete. Tas palaiž {{cmd:ERASE}} atlasei. Ja nekas nenotiek, komandrindā kaut kas ir ierakstīts: nospiediet {{key:Esc}} vai ierakstiet `E` un nospiediet {{key:Enter}}.

## Biežākās kļūdas

- **Logs atlasīja pārāk maz.** Jūs velkat no kreisās uz labo, kas ņem tikai pilnībā iekšā esošo. Krustojumam velciet no labās uz kreiso.
- **Klikšķis tukšā vietā sāka rāmi.** Viens klikšķis tukšā vietā sāk logu; otrais klikšķis to pabeidz. Nospiediet {{key:Esc}} vai noklikšķiniet ar labo pogu, lai to atmestu.
- **Klikšķis tukšā vietā atlaida atlasi.** Tā notiek, ja neturat {{key:Shift}}. Lai šādā klikšķī saglabātu atlasi un to notīrītu tikai ar {{key:Esc}}, iestatiet {{ui:Klikšķis tukšā vietā}} uz {{ui:Atstāj atlasi}} [CadCraft iestatījumos](topic:settings#clicking-an-empty-spot).
- **Komanda izmantoja objektus, ko nebijāt domājis.** Kaut kas vēl bija atlasīts, kad to sākāt. Pirms komandas nospiediet {{key:Esc}}, lai sāktu bez atlasītā.
- **Pēc komandas nekas nav atlasīts.** Tas ir apzināti: pabeigta komanda notīra atlasi.
