---
title: Pārvietot, kopēt, pagriezt, mērogot, spoguļot, izstiept un masīvs
summary: Izkārtojiet mēbeles telpā ar pamata labošanas komandām, izmantojot bāzes punktus, ievadītus attālumus un atsaukšanu.
keywords: pārvietot, kopēt, pagriezt, mērogot, spoguļot, izstiept, masīvs, savienot, matchprop, saskaņot īpašības, painter, arrayrect, arraypolar, polārais masīvs, dzēst, sadalīt, atsaukt, atkārtot, bāzes punkts, nobīde, labot, izlīdzināt, izvietot vienmērīgi, rindā
from: 8eaeee6c
---

## Ko jūs izveidosiet

Galdu ar vienu krēslu, kas nokopēts ap galdu, pagriezts, nospoguļots un mainīts izmērā. Ceļā izmantojat {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} un {{cmd:UNDO}}.

## Zīmējiet detaļas

1. Ierakstiet `REC` un nospiediet {{key:Enter}}, ierakstiet `0,0` un nospiediet {{key:Enter}}, pēc tam ierakstiet `@1800,900` un nospiediet {{key:Enter}}. Šis ir galds.
2. Ierakstiet `REC` un nospiediet {{key:Enter}}, ierakstiet `300,-700` un nospiediet {{key:Enter}}, pēc tam ierakstiet `@450,450` un nospiediet {{key:Enter}}. Šis ir krēsls zem galda.
3. Noklikšķiniet {{ui:Robežas}}.

## Pārvietošana: bāzes punkts, pēc tam otrs punkts

Katra pārvietošana, kopēšana, pagriešana un mērogošana sākas no **bāzes punkta**: punkta, kas tiek pārvietots līdzi vai ap kuru tiek pagriezts.

1. Noklikšķiniet uz krēsla, lai to atlasītu.
2. Ierakstiet `M` un nospiediet {{key:Enter}}. Vēsturē rakstīts `1 atrasts`.
3. Pie `Norādiet bāzes punktu` piesaistieties krēsla augšējam kreisajam stūrim (Galapunkts) un noklikšķiniet.
4. Pie `Norādiet otro punktu` ierakstiet `@0,200` un nospiediet {{key:Enter}}.

Krēsls pārvietojas uz augšu par 200, tuvāk galdam.

:::tip
Pie `Norādiet bāzes punktu` ierakstiet `D`, lai tā vietā ievadītu nobīdi: CadCraft tad jautā `Norādiet nobīdi`, un jūs ierakstāt, cik tālu pa horizontāli un cik augstu, piemēram, `0,200` (`@` nav vajadzīgs).
:::

## Kopēšana, cik reižu vien vēlaties

1. Noklikšķiniet uz krēsla.
2. Ierakstiet `CO` un nospiediet {{key:Enter}}.
3. Piesaistieties krēsla apakšējam kreisajam stūrim un noklikšķiniet to kā bāzes punktu.
4. Ierakstiet `@600,0` un nospiediet {{key:Enter}}. Parādās kopija 600 pa labi.
5. Vēlreiz ierakstiet `@600,0` un nospiediet {{key:Enter}}. Parādās otra kopija 1200 pa labi no oriģināla.
6. Nospiediet {{key:Enter}}, lai pabeigtu komandu.

{{cmd:COPY}} turpina darboties, līdz nospiežat {{key:Enter}}. Katra kopija tiek novietota pa attālumu no bāzes punkta līdz punktam, ko ievadāt. `@` punkts skaitās no pēdējā ievadītā punkta, kas pēc pirmās kopijas ir šīs kopijas punkts, tātad divreiz ievadīts `@600,0` dod kopijas 600 un 1200 attālumā. Ierakstiet `U` un nospiediet {{key:Enter}}, lai atsauktu pēdējo kopiju, neizejot no komandas.

Jums vajadzētu redzēt trīs krēslus rindā zem galda.

:::tip
{{cmd:COPY}} ir paredzēta kopijām vienā rasējumā, novietotām pēc bāzes punkta. Lai pārvietotu objektus uz citu rasējumu vai cilni vai ielīmētu tos vēlāk, izmantojiet starpliktuvi: {{key:Mod+C}}, pēc tam {{key:Mod+V}}. {{key:Mod+D}} izveido vienu kopiju, kas pārvietojas kopā ar rādītāju. Skatiet [Kopēt, ielīmēt un dublēt](topic:copy-paste).
:::

## Spoguļot rindu uz otru pusi

1. Velciet šķērsojošu atlases logu (no labās uz kreiso) pāri trim krēsliem, nepieskaroties galdam.
2. Ierakstiet `MI` un nospiediet {{key:Enter}}.
3. Pie `Norādiet spoguļa līnijas pirmo punktu` piesaistieties galda kreisās malas viduspunktam (Viduspunkts) un noklikšķiniet.
4. Pie `Norādiet spoguļa līnijas otro punktu` piesaistieties galda labās malas viduspunktam un noklikšķiniet.
5. Pie `Dzēst avota objektus? [Jā (Y)/Nē (N)] <N>` nospiediet {{key:Enter}}, lai tos paturētu.

Jums vajadzētu redzēt trīs krēslus zem galda un trīs nospoguļotus krēslus virs tā. Teksts nospoguļotā atlasē paliek lasāms: tas ir novietots spoguļattēlā, bet netiek rakstīts otrādi.

## Pagriezt krēslu

1. Noklikšķiniet uz krēsla labajā pusē zem galda.
2. Ierakstiet `RO` un nospiediet {{key:Enter}}.
3. Piesaistieties krēsla apakšējam labajam stūrim un noklikšķiniet to kā bāzes punktu.
4. Ierakstiet `90` un nospiediet {{key:Enter}}.

Krēsls pagriežas par 90 grādiem pretēji pulksteņrādītāja virzienam ap bāzes punktu. Negatīvs leņķis pagriež pulksteņrādītāja virzienā. Ierakstīšanas vietā varat noklikšķināt otru punktu: leņķis tiek mērīts no bāzes punkta līdz šim punktam.

## Mērogot galdu

1. Atlasiet galdu.
2. Ierakstiet `SC` un nospiediet {{key:Enter}}.
3. Piesaistieties galda apakšējam kreisajam stūrim un noklikšķiniet to kā bāzes punktu.
4. Ierakstiet `1.2` un nospiediet {{key:Enter}}.

Galds ir par 20% lielāks, augot prom no bāzes punkta. Koeficients zem 1 padara to mazāku.

:::note
Ja tā vietā, lai ierakstītu mēroga koeficientu, noklikšķiniet punktu, koeficients ir attālums no bāzes punkta līdz šim punktam. Noklikšķinot vienu zīmējuma vienību attālumā, iegūst koeficientu 1. Parasti vēlaties ierakstīt skaitli.
:::

## Atsaukt un atkārtot

- {{key:Mod+Z}}, poga {{ui:Atsaukt}} vai `U` un {{key:Enter}} atsauc pēdējo komandu. Visa komanda ir viens solis: atsaucot {{cmd:COPY}}, kas izveidoja piecas kopijas, noņem visas piecas.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, poga {{ui:Atkārtot}} vai `REDO` to atjauno.
- Vēsture norāda, kas tika atsaukts ("Atsaukta darbība: COPY").

CadCraft saglabā pēdējos 500 soļus. Slāņu iestatījumi (ieslēgts, sasaldēts, bloķēts, krāsa) ir iestatījumi, nevis rediģējumi, un tos neatsauc.

## Izstiept istabu platāku

{{cmd:STRETCH}} (`S` vai {{ui:Izstiept}}) pārvieto tikai to, kas atrodas šķērsojošā logā: tajā ietilpstošie stūri un līniju gali pārvietojas, pārējais paliek vietā, tāpēc istaba kļūst platāka, nevis tiek pārvietota.

1. Ierakstiet `S` un nospiediet {{key:Enter}}.
2. Velciet logu no labās uz kreiso pāri labajai sienai, lai tas aptver sienas stūrus un visu, kas tajā savienojas.
3. Nospiediet {{key:Enter}}.
4. Noklikšķiniet bāzes punktu, pēc tam ierakstiet `@600,0` un nospiediet {{key:Enter}}.

Taisnstūris ir par 600 platāks; līnijas, kas beidzās pie sienas, joprojām beidzas tajā. Loks ar vienu galu logā saglabā savu augstumu, riņķi un teksts pārvietojas, ja to centrs vai ievietošanas punkts ir logā, un izmērs parāda savu jauno garumu. Objekti, kas atlasīti pa vienam, bez loga vienkārši tiek pārvietoti.

Varat arī atlasīt iepriekš: velciet šķērsojošu logu (vai šķērsojošu lasso) pāri sienai bez aktīvas komandas, pēc tam ierakstiet `S`. STRETCH izmanto šo atlasi un izstiepj to, ko satur tās logi, it kā tos būtu vilkuši pie tās pašas uzvednes.

## Masīvs: rindas un kolonnas vai ap centru

{{cmd:ARRAY}} (`AR` vai {{ui:Masīvs}}) kopē atlasi režģī vai aplī.

1. Atlasiet krēslu, ierakstiet `AR` un nospiediet {{key:Enter}}. Nospiediet {{key:Enter}} vēlreiz, lai izvēlētos Taisnstūra.
2. Parādās priekšskatījums ar 4 kolonnām un 3 rindām. Ierakstiet `COU`, nospiediet {{key:Enter}}, pēc tam `5` kolonnām un `2` rindām.
3. Ierakstiet `S`, nospiediet {{key:Enter}}, pēc tam `600` starp kolonnām un `-900` starp rindām (negatīvs virzās uz leju).
4. Nospiediet {{key:Enter}}, lai izveidotu kopijas.

Krēslu aplim ap galdu izvēlieties `PO` (Polārs), noklikšķiniet galda centru un iestatiet `I` (elementi), `F` (aizpildījuma leņķis: 360 visam aplim, 180 pusei) un `ROT` (vai kopijas pagriežas pret centru). {{cmd:ARRAYRECT}} un {{cmd:ARRAYPOLAR}} izlaiž jautājumu.

## Savienot daļas vienā polilīnijā

{{cmd:JOIN}} (`J` vai {{ui:Labot}} › {{ui:Vairāk}} › {{ui:Savienot}}): atlasiet līnijas, lokus un atvērtas polilīnijas, kuru gali sakrīt, un nospiediet {{key:Enter}}. Tās kļūst par vienu polilīniju, slēgtu, ja tā iet pilnu apli, kuru tad var nobīdīt vienā gājienā. Līnijas, kas atrodas uz vienas taisnes, kļūst par vienu līniju pat ar atstarpēm starp tām; vienas riņķa līnijas loki kļūst par vienu loku vai riņķi.

## Saskaņot īpašības

{{cmd:MATCHPROP}} (`MA` vai {{ui:Labot}} › {{ui:Vairāk}} › {{ui:Saskaņot īpašības}}): noklikšķiniet objektu, kura izskatu vēlaties, pēc tam atlasiet objektus, kurus mainīt, un nospiediet {{key:Enter}}. Tie pārņem tā slāni un krāsu; teksts pārņem tā augstumu, izmērs — tā izmērus, svītrojums — tā rakstu. Otrajā jautājumā ierakstiet `S` (Iestatījumi), lai izslēgtu jebkuru no šīm īpašībām.

## Izlīdzināt objektus

**Pēc punktiem.** {{cmd:ALIGN}} (`AL` vai {{ui:Labot}} › {{ui:Vairāk}} › {{ui:Izlīdzināt}}): atlasiet objektus un nospiediet {{key:Enter}}, pēc tam noklikšķiniet punktu uz tiem (avots) un vietu, kur tam jānonāk (galamērķis).

- Viens pāris tos pārvieto. Nospiediet {{key:Enter}} pie `Norādiet otro avota punktu`, lai apstātos.
- Divi pāri tos arī pagriež, tā ka līnija starp diviem avota punktiem atrodas gar līniju starp diviem galamērķa punktiem. CadCraft tad jautā `Mērogot objektus pēc izlīdzināšanas punktiem?`: `Y` padara tos arī attiecīgi lielākus vai mazākus.
- Trešais pāris tos spoguļo, ja tā divi punkti atrodas dažādās šīs līnijas pusēs.

**Malas un atstarpes.** {{ui:Labot}} › {{ui:Vairāk}} › {{ui:Izlīdzināt un sadalīt}} (vai `ALIGNPANEL`) atver nelielu paneli virs zīmējuma. Atlasiet objektus, pēc tam:

- izvēlieties, pēc kā izlīdzināt, sadaļā {{ui:Izlīdzināt pēc}} (visa atlase, pirmais vai pēdējais objekts, ko atlasījāt, vai punkts, uz kuru noklikšķināt) un noklikšķiniet {{ui:Pa kreisi}}, {{ui:Centrs}}, {{ui:Pa labi}}, {{ui:Augša}}, {{ui:Vidū}} vai {{ui:Apakša}};
- vai izvēlieties {{ui:Vienādas atstarpes}} vai {{ui:Vienādi centri}} un noklikšķiniet {{ui:Pāri}} vai {{ui:Augšup un lejup}}: divi ārējie objekti paliek vietā, pārējie tiek izvietoti vienmērīgi starp tiem (vismaz trīs objekti).

Katrs klikšķis ir viens atsaukšanas solis, un atlase paliek, tāpēc varat izmēģināt citu. Katrs objekts tiek skaitīts pēc tā ietverošā taisnstūra, UCS, ja tāda ir iestatīta. Komandrindā tas pats ir {{cmd:ALIGNTO}} un {{cmd:DISTRIBUTE}}.

## Dzēst un sadalīt

- {{cmd:ERASE}} (`E` vai {{key:Delete}}) noņem atlasītos objektus.
- {{cmd:EXPLODE}} (`X`) sadala polilīniju līnijās un lokos, bloka atsauci — tās objektos, bet izmēru — līnijās, bultiņās un tekstā. Sadalītie izmēri vairs sevi neizmēra.

## Biežākās kļūdas

- **Attāluma ievadīšana bez `@` otrajā punktā.** `600,0` ir absolūtais punkts 600,0, nevis "600 pa labi". Lietojiet `@600,0` vai vienkārši `600`, kad krustiņš norāda pareizajā virzienā.
- **Pagriešana notika nepareizi.** Pozitīvi leņķi pagriežas pretēji pulksteņrādītāja virzienam.
- **Atsaukšana noņēma vairāk nekā gaidījāt.** Viens atsaukšanas solis atceļ visu pēdējo komandu, ieskaitot katru kopiju, ko tā izveidoja.
- **Komanda neprasīja atlasīt objektus.** Objekti jau bija atlasīti, tāpēc tā izmantoja tos. Vispirms nospiediet {{key:Esc}}, lai sāktu ar neatlasītu.
