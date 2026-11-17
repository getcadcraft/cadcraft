---
title: Lapas ar titulbloku un skatlogiem
summary: Izveidojiet lapu (izkārtojumu) ar rāmi un titulbloku, iestatiet skatloga mērogu, pievienojiet otru skatlogu detaļai un aizpildiet titulbloku.
keywords: izkārtojums, lapa, papīra telpa, skatlogs, mview, vpview, titulbloks, mērogs, papīra izmērs, rāmis, vports, drukas mērogs, mspace, pspace, modeļa telpa, ievadīt skatlogā, dubultklikšķis uz skatloga
from: 45a45de8
---

## Ko jūs izveidosiet

A3 lapu ar titulbloku, visu plānu vienā skatlogā mērogā 1:100 un otru skatlogu, kas rāda vienu stūri mērogā 1:20.

## Modelis un lapas

Ēku zīmējat cilnē {{ui:Modelis}} pilnā izmērā: 6 m siena milimetros ir 6000 vienību gara. **Lapa** (izkārtojums) ir papīra gabals, kas mērīts milimetros vai collās. **Skatlogs** ir logs, izgriezts lapā, kas rāda modeli kādā mērogā.

## Pirms sākat

1. Atveriet vai uzzīmējiet plānu cilnē {{ui:Modelis}}.
2. Nospiediet {{key:Esc}}, lai nekas nav atlasīts.
3. Sadaļā {{ui:Pašreizējie iestatījumi}} iestatiet {{ui:Vienības}} uz vienību, ar kuru zīmējāt, piemēram, {{ui:Milimetri}}.

Vienības ir svarīgas: skatloga mērogs, piemēram, 1:100, nozīmē, ka viens milimetrs uz papīra rāda 100 reālus milimetrus, tāpēc CadCraft ir jāzina, kas ir viena rasējuma vienība. Rasējums, kas atstāts kā {{ui:Bez vienībām}}, tiek uzskatīts par papīra vienībās (milimetros ISO papīram, collās ASV papīram).

## Izveidojiet lapu

1. Noklikšķiniet {{ui:+}} pogu pa labi no cilnēm zem rasējuma, vai ierakstiet `LAYOUT` un nospiediet {{key:Enter}}, vai noklikšķiniet {{ui:Jauna lapa}}.

Atveras jauna cilne `Layout1`. Jums vajadzētu redzēt lapu uz tumšāka galda: rāmi, titulbloku apakšējā labajā stūrī un vienu skatlogu virs tā, kas rāda visu modeli lielākajā standarta mērogā, kas iederas. Vēsture nosauc papīru: ISO A3 metriskiem un bez vienībām esošiem rasējumiem, Tabloid (ANSI B) rasējumiem collās vai pēdās.

2. Noklikšķiniet {{ui:Robežas}}, lai ietilpinātu lapu ekrānā.

## Izvēlieties papīru

1. Nospiediet {{key:Esc}}, lai nekas nav atlasīts. Labā paneļa virsraksts saka "Sheet: Layout1".
2. Laukā {{ui:Nosaukums}} ierakstiet `A-101 Plan` un nospiediet {{key:Enter}}. Cilne tiek pārdēvēta.
3. Sadaļā {{ui:Papīrs}} izvēlieties izmēru.
4. Sadaļā {{ui:Orientācija}} izvēlieties {{ui:Ainava}} vai {{ui:Portrets}}.

:::warning
Papīra maiņa nepārvieto un neizmaina to, kas jau ir uz lapas. Pēc maiņas pārbaudiet, vai rāmis, titulbloks un skatlogs joprojām iederas, un pārvietojiet vai izmainiet tos ar rokturiem. Pārslēdzoties starp milimetru un collu papīru, skaitļi paliek, tāpēc viss mainās izmērā: statusa josla to brīdina.
:::

## Iestatiet skatloga mērogu

1. Noklikšķiniet uz skatloga rāmja (tā malas). Paneļa virsraksts saka "Skatlogs".
2. Sadaļā {{ui:Mērogs}} izvēlieties `1:100`.

Modelis skatlogā tiek pārzīmēts mērogā 1:100, centrēts tur, kur bija. Saraksts piedāvā metriskos mērogus no 10:1 līdz 1:10000; rasējumi collās vai pēdās saņem arī arhitektūras mērogus (1/4" = 1'-0" un tamlīdzīgus) un inženierijas mērogus (1" = 20' un tamlīdzīgus). {{ui:Pielāgot visu modeli}} iestata precīzu, nestandarta mērogu, kas iekļauj visu.

3. Ja plāns vairs nav centrēts, mainiet {{ui:X}} un {{ui:Y}} sadaļā {{ui:Skata centrs (modelis)}} labajā panelī: tie ir modeļa punkts, kas rādās skatloga vidū.

## Rādiet daļu no modeļa skatlogā

1. Ar atlasītu skatlogu labajā panelī noklikšķiniet {{ui:Norādiet logu modelī…}} (vai ierakstiet `VPVIEW` un nospiediet {{key:Enter}}).
2. CadCraft pārslēdzas uz cilni {{ui:Modelis}}. Noklikšķiniet uz vienu apgabala stūri, ko rādīt.
3. Noklikšķiniet uz pretējo stūri.

Jūs esat atpakaļ lapā, un skatlogs rāda šo apgabalu lielākajā standarta mērogā, kas iederas; vēsture norāda, kurā. {{ui:Parādīt visu modeli}} atgriež visu plānu standarta mērogā.

## Pievienojiet otru skatlogu detaļai

1. Atbrīvojiet vietu lapā: atlasiet pirmo skatlogu un velciet stūra rokturi, lai to padarītu mazāku.
2. Ierakstiet `MV` un nospiediet {{key:Enter}}, vai noklikšķiniet {{ui:Skatlogs}} grupā Lapas.
3. Noklikšķiniet vienu jaunā skatloga stūri uz lapas.
4. Noklikšķiniet pretējo stūri.

Jaunais skatlogs rāda visu modeli. Vēsture norāda tā mērogu.

5. Noklikšķiniet jaunā skatloga rāmī.
6. Noklikšķiniet {{ui:Norādiet logu modelī…}} un izvēlieties nelielu apgabalu ap vienu plāna stūri.
7. Sadaļā {{ui:Mērogs}} izvēlieties `1:20`.

Skatlogu rāmji atrodas slānī `Viewports`, kas iestatīts nedrukāt, tāpēc rāmji ir redzami ekrānā, bet ne PDF.

## Aizpildiet titulbloku

Titulbloks ir veidots no parastām līnijām un teksta slānī `Title block`. Tajā sākumā ir rasējuma nosaukums, pirmā skatloga mērogs, šodienas datums un lapas numurs.

1. Veiciet dubultklikšķi uz lielā titulteksta. Virs tā atveras rediģēšanas lodziņš.
2. Ierakstiet lapas nosaukumu.
3. Noklikšķiniet {{ui:Labi}} vai nospiediet {{key:Mod+Enter}}.

Tāpat aizpildiet pārējos laukus. Izmantojiet {{cmd:TEXT}}, lai ierakstītu tukšajā šūnā "DRAWN BY". Teksts SCALE pats neatjaunojas, kad maināt skatloga mērogu: rediģējiet to ar roku.

## Zīmējiet uz lapas

Viss, ko zīmējat uz lapas cilnes, atrodas uz papīra, papīra vienībās: teksts 3.5 augstumā ir 3.5 mm augsts ISO lapā. Piezīmes, ziemeļu bultiņas un lapu rāmji pieder šeit.

Lai mainītu pašu plānu, dodieties uz cilni {{ui:Modelis}} vai strādājiet caur skatlogu (nākamā sadaļa); katrs skatlogs parāda izmaiņu.

## Strādājiet ar modeli caur skatlogu

1. Veiciet dubultklikšķi skatlogā, tālu no tā rāmja. Vai ierakstiet `MS` un nospiediet {{key:Enter}}: ja uz lapas ir viens skatlogs, tas ieved tieši; ja vairāki, noklikšķiniet to, kuru vēlaties.

Rāmis tiek zīmēts biezāks, vēsture saka, ka jūs esat iekšā, un lapas cilne paliek atlasīta. Viss, ko zīmējat vai mainat tagad, ir modelī, modeļa vienībās, kā cilnē {{ui:Modelis}}: līnija, kas zīmēta skatlogā mērogā 1:100, ir reālos milimetros. Slāņi, kas šajā skatlogā ir iesaldēti, šeit nav izvēlami.

2. Ritiniet ritenīti vai velciet ar vidējo pogu, lai tuvinātu un pārvietotu to, ko skatlogs rāda. Lapa paliek savā vietā.
3. Veiciet dubultklikšķi jebkur ārpus rāmja vai ierakstiet `PS` un nospiediet {{key:Enter}}.

Jūs esat atpakaļ lapā. Skatlogs paliek ar skatu, ar kuru to atstājāt; {{key:Mod+Z}} atjauno veco skatu vienā solī. Noklikšķinot jebkuru cilni zem rasējuma, arī izejat no skatloga.

:::note
Skatlogs, kura {{ui:Attēlojums bloķēts}} ir ieslēgts (sadaļā {{ui:Rekvizīti}}), saglabā savu skatu: iekšā pārvietošana un tuvināšana pārvieto visu lapu. Skatlogu, kas ir izslēgts, nevar ievadīt.
:::

## Apzīmējiet skatu ar tā nosaukumu

Skata nosaukums zem skatloga var rādīt skatloga skata nosaukumu un sekot tam:

1. Dodiet skatam nosaukumu: atlasiet skatloga rāmi un aizpildiet {{ui:Skata nosaukums}} sadaļā {{ui:Rekvizīti}}, vai saglabājiet skatu cilnē {{ui:Modelis}} ar {{cmd:NAMEDVIEW}} un, ar atlasītu skatlogu, ierakstiet `VPVIEW`, `V` un skata nosaukumu: skatlogs rāda šo skatu un ņem tā nosaukumu.
2. Ierakstiet `VIEWLABEL` (`VL`) un nospiediet {{key:Enter}}, tad noklikšķiniet, kur jāiet etiķetei ({{key:Enter}} novieto to zem skatloga apakšējā kreisā stūra).

Kad skata nosaukums mainās, etiķete mainās līdzi tajā pašā atsaukšanas solī.

## Iesaldējiet slāni vienā skatlogā

Lai paslēptu slāni vienā skatlogā, bet ne citos (piemēram, mēbeles detaļā):

1. Atlasiet skatloga rāmi vai strādājiet iekšā (dubultklikšķis).

Katrā rindā sarakstā {{ui:Slāņi}} ir vēl viena poga, un virs saraksta rindiņa to norāda.

2. Noklikšķiniet šo pogu slāņa rindā.

Slānis pazūd tikai no šī skatloga. Noklikšķiniet vēlreiz, lai to atkal atiesaldētu; {{key:Mod+Z}} atsauc jebko. Vairākiem slāņiem vai skatlogiem vienlaikus ierakstiet `VPLAYER`: `F` (iesaldēt) vai `T` (atiesaldēt), slāņu nosaukumi (`A-*` ņem visus slāņus, kas sākas ar A-), tad `C` (pašreizējais), `A` (visi) vai `S` (atlasīt). `VPLAYER` `V` (Vpvisdflt) izvēlas slāņus, ar kuriem jaunie skatlogi sākas iesaldēti.

## Vairāk lapu

Katrs {{ui:+}} pievieno vēl vienu lapu (`Layout2`, `Layout3` …) ar nākamo lapas numuru. Lai izdzēstu atvērto lapu, nospiediet {{key:Esc}} un noklikšķiniet {{ui:Dzēst šo lapu}} labajā panelī. Tā tiek izdzēsta bez jautājuma; {{key:Mod+Z}} to atgriež.

Drukājiet lapu ar {{ui:Drukāt šo lapu}} vai {{key:Mod+P}}; skatiet [Drukāt PDF](topic:plot-pdf).

## Biežākās kļūdas

- **Skatlogs nerāda neko.** Modelis ir tukšs, vai skats ir vērsts citur. Atlasiet rāmi un noklikšķiniet {{ui:Parādīt visu modeli}}.
- **Mērogu saraksts rāda tikai attiecības, bez pēdu un collu mērogiem.** Iestatiet {{ui:Vienības}} uz {{ui:Collas}} vai {{ui:Pēdas}} cilnē {{ui:Modelis}}.
- **1:100 izskatās desmit reizes par lielu vai mazu.** Rasējuma vienības ir nepareizas. Iestatiet {{ui:Vienības}} uz to, kas viena vienība patiesībā ir.
- **Klikšķis uz plāna skatlogā neko neatlasa.** Uz lapas jūs atlasāt lapas paša objektus. Vispirms veiciet dubultklikšķi skatlogā, lai strādātu ar plānu caur to.
- **Klikšķi ārpus skatloga nedara neko.** Jūs esat skatlogā: veiciet dubultklikšķi ārpus tā vai ierakstiet `PS`, lai atkal strādātu ar lapu.
- **"Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first."** {{cmd:MVIEW}} darbojas tikai lapas cilnē. Vispirms atveriet lapas cilni (vai izveidojiet to ar LAYOUT).
