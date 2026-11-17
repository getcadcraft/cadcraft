---
title: Vienetai, popieriaus dydžiai ir mastai
summary: Ką reiškia brėžinio vienetai CadCraft programoje, popieriaus dydžiai lapams ir spausdinimui, visi standartiniai mastai ir kaip tekstų bei matmenų dydžiai susiję su spausdinimo mastu.
keywords: vienetai, milimetrai, coliai, pėdos, pėdos ir coliai, architektūrinis, inžinerinis, trupmeninis, trupmenos, lunits, ilgio formatas, tikslumas, metrai, popieriaus dydis, a3, a1, arch d, ansi, tabloid, letter, mastelis, 1:100, 1/4 colio, architektūrinis mastelis, inžinerinis mastelis, insunits
from: 8346236a
---

## Brėžinio vienetai

Piešiate pilnu dydžiu, brėžinio vienetais. Ką reiškia vienas vienetas, nustato brėžinio nustatymas **Vienetai**:

1. Paspauskite {{key:Esc}}, kad nieko nebūtų pažymėta, skirtuke {{ui:Modelis}}.
2. {{ui:Dabartiniai nustatymai}} skiltyje pasirinkite {{ui:Vienetai}}: {{ui:Be vienetų}}, {{ui:Milimetrai}}, {{ui:Centimetrai}}, {{ui:Metrai}}, {{ui:Coliai}} arba {{ui:Pėdos}}.

Matmenys gali rašyti savo ilgius milimetrais, centimetrais, metrais ar kilometrais, nepriklausomai nuo brėžinio vieneto: žr. [Matmenys mm, cm, m ar km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Pakeitus vienetus, niekas nekeičia dydžio. Keičiama tai, kaip lapuose ir spausdinimuose skaitomi mastai ir kurie mastai siūlomi. Brėžinys, atidarytas iš DWG ar DXF, išlaiko failo vienetus; kairiojo skydelio skyrius {{ui:Brėžinys}} juos rodo.

Brėžinys {{ui:Be vienetų}} laikomas esantis popieriaus vienetais: milimetrais ISO popieriuje, coliais JAV popieriuje.

## Pėdos ir coliai bei trupmenos

Kaip ilgiai **rašomi ir įvedami** yra atskiras nustatymas – ilgio formatas. Jis nekeičia geometrijos, tik keičia, kaip atrodo skaičiai ir ką galite įvesti.

1. Paspauskite {{key:Esc}}, kad nieko nebūtų pažymėta, skirtuke {{ui:Modelis}}.
2. {{ui:Dabartiniai nustatymai}} skiltyje pasirinkite {{ui:Ilgio formatas}}: {{ui:Dešimtainis}} (`150.5`), {{ui:Architektūrinis}} (`12'-6 1/2"`), {{ui:Inžinerinis}} (`12'-6.5"`), {{ui:Trupmeninis}} (`150 1/2`) arba {{ui:Mokslinis}} (`1.505E+02`).
3. Pasirinkite {{ui:Tikslumas}}: dešimtainių skaitmenų skaičių arba mažiausią trupmeną (1/16 yra įprastas pasirinkimas architektūriniam).

Arba įveskite {{cmd:UNITS}} (`UN`) ir atsakykite į dvi jos klausimus.

Su {{ui:Architektūrinis}} arba {{ui:Inžinerinis}} vienas brėžinio vienetas yra vienas colis, kaip AutoCAD: nustatykite {{ui:Vienetai}} taip pat į {{ui:Coliai}}. Tada ilgius galite įvesti pėdomis ir coliais bet kur, kur prašoma ilgio, ir {{ui:Ypatybės}} skiltyje esančiuose laukuose:

| Įvedate | Reiškia |
|---|---|
| `12'6"` arba `12'-6"` | 12 pėdų 6 coliai (150) |
| `12'6-1/2"` | 12 pėdų 6½ colio. Prieš trupmeną naudokite brūkšnelį: {{key:Space}} komandų eilutėje yra {{key:Enter}}. |
| `12'` | 12 pėdų |
| `6"` arba `6` | 6 coliai: paprastas skaičius yra coliai |
| `1/2`, `6-1/2` | trupmenos veikia bet kuriame formate |

Taškai priima tuos pačius ilgius: `@12'6",0` arba `@10'<90`. Kampai lieka laipsniais.

Formatas rodomas istorijoje ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: plotai kaip kvadratiniai coliai ir kvadratinės pėdos), {{ui:Ypatybės}} skiltyje, koordinatėse būsenos juostoje ir **naujuose matmenyse**. Lapai išlaiko savo popieriaus vienetus (milimetrus ar colius) kaip dešimtainius skaičius.

:::note
Ilgio formatas išsaugomas DWG ir DXF failuose, ir kiekvienas matmuo išlaiko savo: išsaugotas brėžinys atsidaro taip, kaip jį palikote.
:::

## Popieriaus dydžiai

Lapai ir modelio spausdinimai naudoja šiuos dydžius bet kuria orientacija:

| Popierius | Dydis | Vienetas lape |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetrai |
| ISO A3 | 420 × 297 mm | milimetrai |
| ISO A2 | 594 × 420 mm | milimetrai |
| ISO A1 | 841 × 594 mm | milimetrai |
| ISO A0 | 1189 × 841 mm | milimetrai |
| Letter | 11 × 8.5 in | coliai |
| Legal | 14 × 8.5 in | coliai |
| Tabloid / ANSI B | 17 × 11 in | coliai |
| ANSI C | 22 × 17 in | coliai |
| ANSI D | 34 × 22 in | coliai |
| ARCH C | 24 × 18 in | coliai |
| ARCH D | 36 × 24 in | coliai |
| ARCH E | 48 × 36 in | coliai |

Nauji lapai pradedami ISO A3 metriniams ir be vienetų brėžiniams, o Tabloid – brėžiniams coliais ar pėdomis. Modelio spausdinimai pradedami ISO A4 arba Letter tuo pačiu būdu, tada prisimena paskutinį jūsų pasirinkimą. Lapai iš atidarytų failų išlaiko savo dydį, rodomą kaip „Pasirinktinis“, kai jis nėra vienas iš šių.

## Mastai

Mastelis `1:n` reiškia, kad vienas vienetas popieriuje rodo n tokių pačių vienetų modelyje, todėl 1:100 rodo 1 m pastato kaip 10 mm popieriaus. CadCraft tai apskaičiuoja iš brėžinio vienetų ir popieriaus vieneto.

**Metriniai mastai**, siūlomi kiekvienam brėžiniui: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architektūriniai mastai**, siūlomi, kai vienetai yra coliai arba pėdos: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inžineriniai mastai**, siūlomi, kai vienetai yra coliai arba pėdos: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Jūsų mastai.** Įveskite {{cmd:SCALELISTEDIT}} (arba `SCALELIST`), kad pridėtumėte savo mastą, pavyzdžiui 1:75 arba aikštelės mastą 2 popieriaus : 300 brėžinio. `Add` paprašo pavadinimo, tada popieriaus vienetų ir brėžinio vienetų (pavadinimas, pavyzdžiui `1:75`, pasiūlo savo skaičius; {{key:Enter}}, kad jų imtumėte). `Edit`, `Delete`, `List` ir `Reset` veikia tame pačiame sąraše; `Reset` grąžina standartinį sąrašą. Jūsų mastai rodomi po standartinių mastų vaizdo lango mastelio sąraše, skiltyje {{ui:Ypatybės}}, ir {{ui:Spausdinti į PDF}} dialoge; vaizdo langas tokiu mastu rodomas su savo pavadinimu, o jie išsaugomi brėžinyje (DWG ir DXF 2000) kaip brėžinio mastų sąrašas. Brėžinys, atidarytas iš kitos programos, atsineša savo sąrašą; mastai, sutampantys su standartiniu, nerodomi du kartus.

Kai vaizdo langas nukreipiamas su {{ui:Rodyti visą modelį}} arba {{ui:Pažymėkite langą modelyje…}}, CadCraft parenka didžiausią standartinį mastą, kuris telpa. {{ui:Pritaikyti visą modelį}} nustato tikslų mastą, kuris atrodo kaip paprastas santykis.

## Dydžiai popieriuje ir modelyje

Teksto ir matmenų dydžiai yra erdvės, kurioje piešiate, vienetais.

| Norite popieriuje | Nubrėžta lape | Nubrėžta modelyje 1:50 (mm brėžinys) | Nubrėžta modelyje 1/4" = 1'-0" (colių brėžinys) |
|---|---|---|---|
| 2.5 mm tekstas | 2.5 | 125 | — |
| 3/32" tekstas | 0.09375 | — | 4.5 |

Matmenims laikykite dydžius kaip popieriaus dydžius ir nustatykite bendrą mastelį ({{cmd:DIMSCALE}}) į spausdinimo mastelį: 50 mastui 1:50, 48 – 1/4" = 1'-0". Žr. [Nustatykite matmenų dydžius](topic:dimension-settings).

## Anotavimas pagal mastelį

Piešiate modelį pilnu dydžiu ir leidžiate CadCraft atlikti aukščiau nurodytus skaičiavimus.

1. Pažymėkite tekstą ar matmenis, kurie turėtų išlaikyti savo dydį popieriuje. Ypatybėse pažymėkite {{ui:Anotacinis}}. {{ui:Dydis popieriuje}} tada rodo, pavyzdžiui, `2.5 mm at 1:50`.
2. Įveskite {{cmd:ANNOSCALE}} ir mastelį, kuriuo brėžinys bus spausdinamas, pavyzdžiui `1:100`.

Kiekvienas anotacinis tekstas ir matmuo pakeičiamas dydžiu, kad atsispausdintų tokio pat dydžio naujame mastelyje: 2.5 mm tekstas yra 125 aukščio mm brėžinyje 1:50 ir 250 aukščio 1:100. Pastraipos plotis keičiasi kartu; matmens tekstas, rodyklės ir tarpai keičiasi kartu (bendras mastelis). Tai vienas atšaukimo žingsnis, o neanotaciniai objektai niekada nekeičiami.

Nustatymas išsaugomas DWG ir DXF: kitos programos skaito anotacinį žymėjimą, o CadCraft taip pat išlaiko mastelį, kuriam kiekvienas objektas paruoštas.

Jei jūsų biuras nustato popieriaus aukščius priede Default Policies (Parametrai › Bendra › Numatytosios politikos › Anotacijų dydžiai popieriuje), {{cmd:ANNOSCALE}} taip pat nustato naujo teksto pradinį aukštį į biuro aukštį pastaboms tame mastelyje. Žr. [Numatytosios politikos](topic:default-policies).

### Vienas objektas keliuose mastuose

Lape dažnai rodomas tas pats planas 1:100, o jo dalis – 1:50. Suteikite pastaboms ir matmenims abu mastus, ir kiekvienas vaizdo langas rodo juos jų popieriaus dydžiu:

1. Pažymėkite anotacinį tekstą ir matmenis ir įveskite `OBJECTSCALE`.
2. Pasirinkite `Add` ir įveskite mastelį, pavyzdžiui `1:50`. (`Current scale` prideda brėžinio anotacijos mastelį; `List` parodo, ką kiekvienas objektas išlaiko; `Delete` pašalina vieną.)

Vaizdo langas, kurio mastelis yra objekto sąraše, rodo jį to mastelio dydžiu: 2.5 mm tekstas nupieštas 250 aukščio per 1:100 vaizdo langą ir 125 aukščio per 1:50, ekrane ir spausdinyje. Objektas lieka savo vietoje; skiriasi tik jo dydis. Vaizdo lange mastu, kuris nėra sąraše, objektas rodomas turimu dydžiu, kol neįvesite `ANNOALLVISIBLE` ir nepasirinksite `OFF`: tada jis ten paliekamas. {{cmd:ANNOSCALE}} pakeičia dydį objektams, kurių sąraše yra naujas mastas, o kitus palieka kaip yra.

Sąrašai išsaugomi DWG ir DXF kaip CadCraft pačių duomenys. Kita programa mato kiekvieną objektą kaip anotacinį, vienu mastu, kuriam jis paruoštas. ANNOALLVISIBLE jungiklis į failą neįrašomas.

## Linijų storiai ir linijų tipai

Sluoksnis arba objektas gali turėti **linijos storį** (nuo 0.05 iki 2.11 mm) ir **linijos tipą** (brūkšninė, paslėpta, centrinė, fantominė, taškinė…). Nustatykite juos dešiniajame skydelyje: nieko nepažymėjus, {{ui:Linijos tipas}} ir {{ui:Linijos storis}} skiltyje {{ui:Dabartiniai nustatymai}} yra tai, ką gauna nauji objektai ({{ui:Pagal sluoksnį}}, kad sektų jų sluoksnį), o du žemiau {{ui:Sluoksnis …}} yra dabartinio sluoksnio. Pažymėjus objektus, tos pačios dvi eilutės ir {{ui:Linijos tipo mastelis}} keičia tuos objektus. Komandos yra {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) ir {{cmd:LTSCALE}} (`LTS`).

Linijų tipai rodomi ekrane ir spausdinyje. Jų brūkšniai yra brėžinio vienetais: metriniame brėžinyje naudojami ISO dydžiai (DASHED: 12.7 mm brūkšniai), coliniame – coliniai (0.5"). Jei brūkšniai atrodo per maži ar per dideli, pakeiskite brėžinio {{ui:Linijos tipo mastelis}} (LTSCALE): kiekvienas brūkšnys ir tarpas padauginami iš jo; objekto savas mastelis dar kartą padauginamas. Per smulkus šablonas, kad būtų matomas, nupieštas kaip vientisa linija.

Linijų storiai spausdinami plotuose mm popieriuje, nepriklausomai nuo mastelio. Linijos su {{ui:Numatytasis}} linijos storiu naudoja pieštuko plotį, pasirinktą {{ui:Spausdinti į PDF}} dialoge (0.13–0.70 mm; pradžioje 0.25 mm); linijos storis 0 spausdinamas kaip plonriausia linija. Ekrane kiekviena linija yra vieno pikselio pločio, kol nespustelėsite {{ui:LWT}} būsenos juostoje (arba neįvesite {{cmd:LWDISPLAY}}): tada linijos storis virš 0.25 mm piešiamas plačiau (0.5 mm = 2 pikseliai) modelyje, o lape – tikru pločiu popieriuje. Pasirinkimas išsaugomas šioje naršyklėje.
