---
title: Koordinātu un attāluma ievade
summary: Visi veidi, kā CadCraft komandrindā ierakstīt punktu, attālumu, leņķi vai skaitli, ar piemēriem.
keywords: dinamiskā ievade, dinam., f12, tab, koordinātas, absolūtās, relatīvās, polārās, @, tiešais attālums, leņķis, grādi, pēdējais punkts, punktu ievade, ievade, aritmētika, aprēķins, kalkulators, cal, plus, daļskaitlis, izteiksme
from: 7de9252d
---

## Punkti

Kad uzvedne pieprasa punktu, ierakstiet vienu no šiem un nospiediet {{key:Enter}}:

| Ierakstāt | Nozīme | Piemērs |
|---|---|---|
| `x,y` | Absolūts: mērīts no sākumpunkta 0,0 | `2500,1200` |
| `#x,y` | Arī absolūts (pieņemts pēc ieraduma) | `#2500,1200` |
| `@dx,dy` | Relatīvs: pāri un uz augšu no pēdējā punkta | `@600,0` |
| `@d<a` | Relatīvs polārs: attālums un leņķis no pēdējā punkta | `@1500<45` |
| `d<a` | Absolūts polārs: attālums un leņķis no sākumpunkta | `3000<90` |
| viens skaitlis | Tiešais attālums: tik tālu no bāzes punkta, virzienā uz krustiņu | `1200` |
| `*x,y`, `@*dx,dy` | Pasaules koordinātas, kad ir iestatīta UCS | `*0,0` |

Ja ir iestatīta UCS ({{cmd:UCS}}), `x,y`, `@dx,dy` un leņķis `d<a` tiek mērīti pa UCS asīm. Skatiet [Pagriezt skatu un izmantot savas koordinātas](topic:ucs-and-turned-view).

Vai noklikšķiniet rasējumā; uz klikšķiem attiecas objektu piesaiste un {{ui:Ortogonāli}}.

Noteikumi:

- Komats atdala X no Y. Decimāldaļām lieto punktu: `1250.75,300`.
- Negatīvas vērtības iet pa kreisi un uz leju: `@-600,0`.
- Neievadiet atstarpes: {{key:Space}} nosūta rindu, tāpat kā {{key:Enter}}.
- Skaitļi var izmantot eksponentus: `1e3` ir 1000.
- Mērvienības nav jāraksta, un pēdu un collu apzīmējums netiek izmantots. Ievadiet vienkāršus skaitļus zīmējuma vienībās.

## Pēdējais punkts

`@` skaita no **pēdējā punkta, ko devāt jebkurā punkta uzvednē**, jebkurā komandā: klikšķa, piesaistes vai ierakstīta punkta. Tas tiek atcerēts starp komandām, tāpēc varat sākt jaunu līniju `@0,500` attālumā no vietas, kur iepriekšējā beidzās. Pirms esat devis kādu punktu, `@` skaita no 0,0.

Vietas, kur tas ir svarīgi:

- {{cmd:COPY}} komandā pēc pirmās kopijas pēdējais punkts ir šīs kopijas punkts. `@600,0` divreiz novieto kopijas 600 un 1200 attālumā no oriģināla.
- Pēc izmēra novietošanas pēdējais punkts ir vieta, kur novietojāt izmēra līniju, nevis izmēra gals.

Ja šaubāties, izmantojiet absolūtu punktu, piesaisti vai tiešo attālumu.

## Tiešā attāluma ievade

Viens skaitlis ir attālums no komandas **bāzes punkta** (punkta, no kura sākas gumijas josla) virzienā uz krustiņu:

1. Pārvietojiet krustiņu vēlamajā virzienā.
2. Ierakstiet attālumu un nospiediet {{key:Enter}}.

Ja ieslēgts {{ui:Ortogonāli}}, virziens piesaistās taisni horizontāli vai vertikāli, tāpēc tas ir ātrākais veids, kā zīmēt taisnas sienas. Ja bāzes punkta nav vai krustiņš atrodas tieši uz tā, skaitlis tiek noraidīts ar paziņojumu "Nepieciešams punkts vai opcijas atslēgvārds."

## Leņķi

- Grādos kā vienkāršs skaitlis: `30`, `-45`, `112.5`.
- Mērīti pretēji pulksteņrādītāja virzienam no pozitīvā X virziena (uz labi): 0 ir pa labi, 90 uz augšu, 180 pa kreisi, 270 vai -90 uz leju.
- Kur prasīts leņķis (pagrieziens, teksta leņķis), varat arī noklikšķināt: leņķis tiek mērīts no bāzes punkta līdz klikšķim. Ja bāzes punkta vēl nav, pirmais klikšķis to nosaka, un uzvedne prasa otru punktu.

## Attālumi

Kur prasīts attālums (rādiuss, nobīde, teksta augstums, mēroga koeficients):

- ierakstiet pozitīvu skaitli (pēdu un collu zīmējumā arī `12'6"` vai `6-1/2`: skatiet [Pēdas un collas](topic:units-papers-scales#feet-and-inches-and-fractions)), vai
- noklikšķiniet punktu: attālums no komandas bāzes punkta līdz tam, vai
- noklikšķiniet divus punktus, ja bāzes punkta nav: uzvedne mainās uz "Norādiet otro punktu".

Ziņojums "Nepieciešams pozitīvs skaitlis vai divi punkti." nozīmē, ka vērtība nebija skaitlis vai bija negatīva.

## Aritmētika ierakstītā vērtībā

Jebkur, kur ierakstāt garumu, koordinātu, leņķi vai skaitli (komandrindā, dinamiskajā ievadē, Rekvizītu lodziņos un dialogos), varat ierakstīt aprēķinu ar `+`, `-`, `*`, `/` un iekavām, nevis aprēķināt iepriekš:

| Ierakstiet | Dod |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (pēdu un collu zīmējumā) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, zīmējuma vienībās (ja tās ir iestatītas) |
| `@4+7/16,0` | punkts 4.4375 pa labi no pēdējā |
| `360/7` | leņķis 51.43 grādi |

- Domuzīme, kas ierakstīta garumā, joprojām ir tā daļa: `4-7/16` ir 4 7/16, un `24'-6"` ir 24 pēdas 6 collas. Lai atņemtu pēc pēdu zīmes, vispirms pabeidziet garumu, `24'-0"-6"`, vai ierakstiet aprēķinu iekavās ar atstarpēm ap domuzīmi, `(24' - 6")` (iekavās atstarpe ir atstarpe; citur tā nospiež {{key:Enter}}).
- Skaitlis, kas pievienots garumam, ir zīmējuma vienībās; reizinot vai dalot ar to, garums tiek mērogots. Divus garumus reizinot, rodas laukums, tāpēc `2'*3'` tiek noraidīts.
- `abs`, `round`, `ceil` un `floor` arī darbojas: `round(10/3)`.
- Aprēķins, ko nevar nolasīt, tiek noraidīts, un tiek norādīts, kur radusies kļūda, piemēram: "Aprēķins beidzas pārāk agri (rakstzīme 3): trūkst vērtības." Nekas nekad netiek nolasīts kā 0. {{cmd:CAL}} parāda aprēķina vērtību.

## Dinamiskā ievade

{{ui:Dinam.}} ({{key:F12}}, statusa joslā) ievieto vērtības blakus krustiņam, kamēr komanda prasa punktu.

- Kamēr nav bāzes punkta (līnijas pirmais punkts), abi lauki ir **X** un **Y**.
- Pēc tam tie ir **attālums** un **leņķis** no pēdējā punkta.

Ierakstīšana joprojām iet komandrindā; lauks blakus krustiņam to parāda, un gumijas josla seko tam.

1. Ierakstiet vērtību: tā ieies izceltajā laukā.
2. Nospiediet {{key:Tab}} (vai komatu pēc X). Vērtība tiek fiksēta (rādīta treknrakstā), un izceļas nākamais lauks. Fiksēts attālums notur gumijas joslu tik garu, kamēr ar peli mērķējat.
3. Ierakstiet otru vērtību vai vienkārši norādiet un nospiediet {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} novelk 50 taisni uz augšu no pēdējā punkta.

Nospiežot {{key:Enter}} pēc vienas vērtības bez {{key:Tab}}, darbojas tiešā attāluma ievade. Pēdas un collas darbojas arī laukos (`12'6"`). Attāluma un leņķa uzvednes (apļa rādiuss, pagrieziens) arī rāda savu vērtību blakus krustiņam.

## Opcijas un noklusējumi

- Opcijas parādās kvadrātiekavās. Ierakstiet opcijas lielos burtus (`D` opcijai `[Diametrs]`, `CL` opcijai `[Aizvērt (CL)]`) un nospiediet {{key:Enter}}. Garāki vārda sākumi arī darbojas (`DIA`).
- Noklusējums parādās leņķiekavās, piemēram, `<500>`. Nospiediet {{key:Enter}} vai peles labo pogu, lai to izmantotu.

## Citi tastatūras izkārtojumi un ciparu tastatūra

Komandu nosaukumi, īsie nosaukumi un opciju burti ir latīņu burti. Ja ir aktīvs grieķu, kirilicas (krievu, ukraiņu, baltkrievu, serbu, maķedoniešu, bulgāru), ebreju, arābu, persiešu, taju vai korejiešu izkārtojums, nav jāmaina izkārtojums: ja ierakstītais vārds kā tāds nav komanda, īsais nosaukums vai opcija, CadCraft to nolasa pēc nospiestajiem taustiņiem. Taustiņš ar burtu `L` latīņu tastatūrā joprojām sāk komandu `LINE`, un taustiņš `C` joprojām atbild `Aizvērt`, lai kāds burts izkārtojumā būtu uz tā. Komandu saraksts virs komandrindas seko tam pašam noteikumam. Teksts, ko ierakstāt vietā, kur komanda prasa tekstu (saturs {{cmd:TEXT}}, nosaukums), nekad netiek mainīts.

Izkārtojumos, kuros ciparu tastatūras decimāltaustiņš dod komatu, šis taustiņš ieraksta punktu komandrindā un skaitļu lodziņos, tāpēc `12.5` var ierakstīt ar ciparu tastatūru. Komata taustiņš galvenajā tastatūrā joprojām atdala `x,y`.

Abus var izslēgt sadaļā {{ui:Iestatījumi}}: {{ui:Commands on a non-Latin keyboard layout}} un {{ui:Keypad decimal key}}.

## Koordinātu rādījums

Statusa joslā rāda krustiņa X un Y (UCS, ja tā ir iestatīta) pēc piesaistēm un {{ui:Ortogonāli}}. Kamēr komandai ir bāzes punkts, tā pievieno `Δ` ar attālumu un leņķi no tā punkta, piemēram, `Δ 1500 < 30°`: skaitļi, ko ierakstītu kā `@1500<30`.

Izmantojiet {{cmd:ID}}, lai izdrukātu punkta koordinātas, un {{cmd:DIST}}, lai izmērītu attālumu starp diviem punktiem.
