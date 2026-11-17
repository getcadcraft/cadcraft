---
title: Rekvizītu panelis
summary: Apskatiet un mainiet visu par atlasītajiem objektiem, daudzus vienlaikus: koordinātas ar Z, izmērus, tekstu, izmēru iestatījumus, caurspīdīgumu un citu. Laukos var ievadīt izteiksmes un garumus ar vienībām.
keywords: kopsummas, kopējais garums, kopējais laukums, summa, atlases garums, rekvizīti, rekvizītu palete, ctrl+1, pr, ch, mo, ddmodify, dažādi, ātrā atlase, pickadd, koordinātas, z, augstums, biezums, caurspīdīgums, materiāls, hipersaite, izteiksme, quickcalc, virsotne, izmēra stils, pielaide, decimāldaļas
from: 10d6a829
---

## Ko jūs uzzināsiet

Kā atvērt rekvizītu paneli, kā mainīt vienu objektu vai simtu vienā solī, kā ierakstīt precīzas koordinātas (ar Z), kā lietot izteiksmes un vienības jebkurā skaitliskajā laukā, un ko rāda katrs objekta tips.

## Atvērt to

Panelis atrodas labajā pusē. Lai to atvērtu priekšplānā:

- Nospiediet {{key:Mod+1}} vai ierakstiet {{cmd:PROPERTIES}} (vai `PR`, `CH`, `MO`).
- Divreiz noklikšķiniet objektu (teksti un vairāklīniju norādes atver savu teksta redaktoru).

Panelis ir kustīgs kā citi paneļi: velciet tā rokturi, lai piestiprinātu to pa kreisi, pa labi vai apakšā, vai nometiet to virs rasējuma, lai tas peld (skatiet [Paneļu izkārtošana un otrs monitors](common:arrange-panels)).

### Salocīt

Piespraudes poga paneļa augšējā labajā stūrī ieslēdz **automātisko paslēpšanu**: panelis saloca šaurā joslā labajā malā, un rasējumam tiek vairāk vietas. Norādiet uz joslu (vai nospiediet {{key:Mod+1}}), un tas atveras pāri rasējumam; aizvelciet prom, un tas atkal saloco. Noklikšķiniet piespraudi vēlreiz, lai paliek atvērts. {{cmd:PROPERTIESCLOSE}} arī saloca to.

## Sadaļas

Rekvizīti ir grupēti sadaļās, ko var salocīt: **Vispārīgi**, **Ģeometrija**, **Teksts**, **Līnijas un bultas**, **Pielāgojums**, **Pamatvienības**, **Alternatīvās vienības**, **Pielaides**, **Raksts**, **Dažādi**, un blokiem **Atribūti** un **Bibliotēkas vienums**. Noklikšķiniet sadaļas nosaukumu, lai to salocītu vai atvērtu; CadCraft atceras, kuras esat salocījis.

Velciet plāno līniju starp nosaukumiem un vērtībām, lai padarītu nosaukumus platākus vai šaurākus. Divreiz noklikšķiniet uz tās, lai atgrieztu sākotnējo. Ar tastatūru fokusējiet to un izmantojiet bultiņu taustiņus.

## Mainīt vērtību

1. Noklikšķiniet rindiņu. Virsraksts rāda "Līnija".
2. Noklikšķiniet laukā {{ui:Garums}}. Rediģēšanas laikā lauks rāda pilno vērtību, nevis noapaļoto.
3. Ierakstiet `2500` un nospiediet {{key:Enter}}. Līnija tagad ir 2500 gara, saglabājot savu sākumpunktu un leņķi.

{{key:Enter}} vai klikšķis citur piemēro vērtību; {{key:Esc}} atjauno veco vērtību. Katra izmaiņa ir viens atsaukšanas solis.

### Izteiksmes un vienības

Katrs skaitliskais lauks pieņem vairāk nekā vienkāršu skaitli:

| Ierakstāt | Iegūstat |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (collas, rasējumā pēdās un collās) |
| `900mm`, `3.5m`, `2ft` | Pārvērsts rasējuma vienībās |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (leņķu laukos) |
| `0.5r`, `100g` | Radiāni un gradi, kā grādi |

Garumam ar vienību rasējumam jābūt vienībām: vispirms iestatiet {{ui:Vienības}} sadaļā {{ui:Jauni objekti}} (ar neko neatlasītu). Nepareiza ievade tiek noraidīta ar piezīmi zem paneļa, un nekas nemainās; tā nekad netiek saglabāta kā 0. Funkcijas: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; leņķi grādos.

## Mainīt daudzus objektus vienlaikus

1. Atlasiet vairākus objektus, piemēram, 8 līnijas un 4 izmērus.
2. Virsrakstā ir teikts "12 objekti", un saraksts augšā piedāvā **Visi (12)**, **Līnija (8)** un **Izmērs (4)**.
3. **Visi** rāda, kas katram objektam ir (slānis, krāsa, līniju tips…). Izvēlieties **Izmērs (4)**, lai redzētu izmēru iestatījumus.
4. Mainiet vērtību, piemēram, {{ui:Decimāldaļas}} uz `1`.

Visi četri izmēri mainās vienā atsaukšanas solī. Lauks, kurā rakstīts **Dažādi**, nozīmē, ka objekti atšķiras; vērtības ierakstīšana to iestata visiem. Objekti bloķētos slāņos paliek nemainīti, un piezīme norāda, cik to ir.

## Atlases kopsummas

Kad ir atlasīti vairāki objekti, sadaļa {{ui:Kopsummas}} augšā norāda:

- **Objekti**: cik katra veida, piemēram, "8 līnijas, 2 polilīnijas, 1 riņķis".
- **Kopējais garums**: līniju, loku un polilīniju summa (arī splainiem), un cik objektu tas ir.
- **Kopējais laukums**: slēgto objektu summa: riņķi, pilni elipses, slēgtas polilīnijas un svītrojumi (svītrojuma caurumi tiek atņemti).

Tie ir rasējuma garuma formātā (pēdās un collās, ja tas tā lietots; laukumi tad kvadrātcollās un kvadrātpēdās). Statusa josla rāda to pašu garumu un laukumu, kad vien objekti ir atlasīti; {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Atlasītā garums un laukums}} › {{ui:Paslēpts}} to izslēdz. Vienam objektam {{ui:Ģeometrija}} rāda tā paša garumu un laukumu, kā līdz šim.

## Koordinātas

Katrs punkts rāda **X**, **Y** un **Z**: līnijas sākumu un galu, centrus, ievietošanas punktus, teksta pozīcijas, pašreizējo polilīnijas virsotni. Līnijām rāda arī **Delta X**, **Delta Y** un **Delta Z** (tikai lasāmi). Polilīnijām un svītrojumiem ir **Augstuma atzīme** (viena Z visam objektam).

Krustiņa poga blakus punkta nosaukumam ļauj to izvēlēties rasējumā: noklikšķiniet to, tad noklikšķiniet jauno pozīciju (piesaistes darbojas). Vērtības ir pasaules koordinātes.

## Vispārīgi

| Lauks | Ko tas ir |
|---|---|
| {{ui:Slānis}}, {{ui:Krāsa}}, {{ui:Līniju tips}}, {{ui:Līniju tipa mērogs}}, {{ui:Līnijas platums}} | Kā slāņu panelī; {{ui:Pēc slāņa}} seko slānim |
| {{ui:Caurspīdīgums}} | Pēc slāņa, pēc bloka, vai no 0 līdz 90% |
| {{ui:Biezums}} | Cik tālu līnijas, riņķi, loki, polilīnijas, punkti un teksts stiepjas Z virzienā |
| {{ui:Materiāls}} | Pēc slāņa, pēc bloka, Globāls vai nosaukums, ko atnesa rasējums |
| {{ui:Drukas stils}} | Tikai lasāms: rasējumi drukājas pēc krāsas, caur lapas [drukas stila tabulu](topic:plot-pdf#plot-style-tables) |
| {{ui:Hipersaite}} | Tīmekļa adrese, kas saglabāta ar objektu |

## Ko rāda katrs tips

| Atlasīts | Ko var mainīt |
|---|---|
| Līnija | Sākuma un beigu X, Y, Z; garums; leņķis |
| Riņķis | Centrs; rādiuss; diametrs; apkārtmērs; laukums (katrs nosaka rādiusu) |
| Loks | Centrs; rādiuss; sākuma un beigu leņķis; kopējais leņķis; horda (rāda loka garumu un laukumu) |
| Elipse | Centrs; lielais un mazais rādiuss; rādiusu attiecība; lielās ass leņķis; sākuma un beigu leņķis |
| Polilīnija | Virsotņu pārlūks (zemāk); globālais platums; augstuma atzīme; slēgta; laukums, ja slēgta (mērogo ap tās centru) |
| Teksts | Saturs; stils; izlīdzināšana; augstums; pagrieziens; platuma koeficients; slīpuma leņķis; noteiktais platums; rindu atstarpe; anotatīvs; pozīcija |
| Bloka atsauce | Ievietošanas punkts; pagrieziens; mērogs X, Y, Z un vienmērīgs mērogs; atribūtu vērtības |
| Svītrojums | Raksts; mērogs; leņķis; sākumpunkts; asociatīvs; salu noteikšana; fona krāsa; augstuma atzīme |
| Izmērs | Skatīt zemāk |
| Vairāklīniju norāde | Teksts; augstums; platums; teksta puse; bultas galvas izmērs; nolaišanās attālums; bultas galvas punkts |
| Skata logs | Mērogs; centrs un izmērs uz lapas; skata centrs modelī; ieslēgts; attēlojums bloķēts |

### Polilīnijas virsotnes

{{ui:Pašreizējā virsotne}} rāda, kurai virsotnei zemāk esošie lauki pieder. Izmantojiet bultiņu pogas vai ierakstiet numuru, lai pārietu uz citu virsotni; virsotņu skaitam nav ierobežojuma. Katrai virsotnei ir X, Y, sākuma un beigu segmenta platums un tā segmenta izliekums, kas sākas tajā (0 = taisns).

## Izmēri

Izmērs rāda savu **Izmēru stilu**, ko tas mēra, savus punktus un katru iestatījumu:

- **Līnijas un bultas:** bultas galviņa katram galam, bultas izmērs, atzīmes izmērs, izmēra un pagarinājuma līniju krāsas un līniju platumi, jebkuras puses vai jebkura pagarinājuma līnijas paslēpšana, pagarinājuma līnijas nobīde un pagarinājums.
- **Teksts:** pārrakstīšana (atstājiet tukšu izmērītajai vērtībai; `<>` tekstā apzīmē to), stils, krāsa, augstums, nobīde, vertikālā un horizontālā pozīcija, vienmēr horizontāls, pagrieziens, fona aizpildījums.
- **Pielāgojums:** kopējais mērogs, bāzes līniju atstarpe, kas pārvietojas, kad vietas trūkst, teksta pārvietošana.
- **Pamatvienības:** formāts, decimāldaļas, noapaļošana, priedēklis, piedēklis, mērogs, decimālatdalītājs, leņķiem leņķa formāts un decimāldaļas.
- **Alternatīvās vienības:** ieslēgts vai izslēgts, formāts, decimāldaļas, reizinātājs (25.4 pārvērš collas milimetros), noapaļošana, priedēklis un piedēklis.
- **Pielaides:** nav, simetriskas, novirze, robežas vai pamata, ar augšējo un apakšējo vērtību, decimāldaļām, augstumu un pozīciju.

Jebkura no tām maiņa atvērtam izmēram noņem to zīmējumu, ko izveidoja cita programma, un CadCraft to zīmē no jauna.

:::note
Horizontālā teksta pozīcija (blakus pirmajai vai otrajai pagarinājuma līnijai) un teksts zem līnijas tiek zīmēti lineāros un izlīdzinātos izmēros; citos izmēros tie tiek saglabāti, bet vēl netiek zīmēti. Pielāgojuma izvēles tiek saglabātas, bet vēl netiek zīmētas: CadCraft novieto tekstu pēc sava noteikuma (virs līnijas, ārpus, ja nesaiet).
:::

## Nekas nav atlasīts

Ja nekas nav atlasīts, panelis rāda:

- **Jauni objekti:** slāni, krāsu, līniju tipu, līnijas platumu un teksta augstumu, ko saņem jauni objekti; rasējuma vienības un garuma formātu; pašreizējā slāņa līniju tipu un platumu; izmērus jauniem izmēriem. Lapā vispirms rāda lapas nosaukumu, papīru un orientāciju.
- **Skats:** ekrānā redzamā centru, augstumu un platumu. Ierakstiet vērtību, lai pārvietotu skatu.
- **Dažādi:** UCS ikonas ieslēgšana vai izslēgšana, UCS (vienmēr Pasaules: CadCraft vēl nav lietotāja koordinātu sistēmu) un anotācijas mērogs.

## Pogas augšā

| Poga | Dara |
|---|---|
| Piltuve | {{cmd:QSELECT}}: atlasīt pēc tipa un īpašības |
| Rādītājs | {{cmd:SELECT}}: atlasīt objektus komandrindā |
| Plus vai 1 | Vai klikšķis pievieno atlasei (plus) vai aizstāj to (1); tas pats iestatījums kā Iestatījumi, {{ui:CadCraft}} |
| Piespraude | Automātiska paslēpšana, augstāk |

## Biežākās kļūdas

- **Ierakstot laukā nekas nenotika.** Nospiediet {{key:Enter}} vai noklikšķiniet citur, lai to piemērotu. Sarkans lauks un piezīme nozīmē, ka ievade tika noraidīta.
- **Garums ar vienību tiek noraidīts.** Rasējumam nav vienību. Iestatiet {{ui:Vienības}} ar neko neatlasītu.
- **Redzams tikai Slānis un Krāsa.** Atlasīti vairāki objektu tipi un izvēlēts **Visi**. Izvēlieties vienu tipu augšējā sarakstā.
- **Daži objekti nemainījās.** Tie ir bloķētā slānī. Atbloķējiet slāni slāņu panelī.
- **Ierakstītie burti nonāca laukā.** Kamēr laukam ir kursors, taustiņi raksta tajā. Nospiediet {{key:Enter}} vai {{key:Esc}}, tad ierakstiet komandu.
