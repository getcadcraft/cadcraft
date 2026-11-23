---
title: Vienetai, popieriaus dydžiai ir mastelis
summary: Ką brėžinio vienetai reiškia CadCraft, popieriaus dydžiai lapams ir spausdinimams, kiekvienas standartinis mastelis ir kaip teksto bei matmenų dydžiai susiję su spausdinimo mastelį.
keywords: vienetai, milimetrai, coliai, pėdos, pėdos ir coliai, architektūrinis, inžinerinis, trupmeninis, trupmenos, lunits, ilgio formatas, tikslumas, metrai, popieriaus dydis, a3, a1, arch d, ansi, tabloid, letter, mastelis, 1:100, 1/4 colio, architektūrinis mastelis, inžinerinis mastelis, insunits
from: 7dc9b62e
---

## Brėžinio vienetai

Braižote visu dydžiu, brėžinio vienetais. Ką reiškia vienas vienetas, nustato brėžinio {{ui:Vienetai}} nustatymas:

1. Paspauskite {{key:Esc}}, kad nieko nebūtų pasirinkta, skirtuke {{ui:Modelis}}.
2. Skiltyje {{ui:Dabartiniai nustatymai}} pasirinkite {{ui:Vienetai}}: {{ui:Be vienetų}}, {{ui:Milimetrai}}, {{ui:Centimetrai}}, {{ui:Metrai}}, {{ui:Coliai}} arba {{ui:Pėdos}}.

Matmenys gali rašyti savo ilgius milimetrais, centimetrais, metrais ar kilometrais, nepriklausomai nuo brėžinio vieneto: žr. [Matmenys mm, cm, m ar km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Pakeitus vienetus nieko neperkeičiama. Keičiamas tik mastelių skaitymas lapuose ir spausdinimuose bei tai, kokie masteliai siūlomi. Brėžinys, atidarytas iš DWG ar DXF, išlaiko failę saugomus vienetus; kairiojo skydelio skiltis {{ui:Brėžinys}} juos rodo.

Brėžinys su {{ui:Be vienetų}} traktuojamas kaip popieriaus vienetais: milimetrais ISO popieriuje, coliais JAV popieriuje.

## Pėdos ir coliai bei trupmenos

Kaip ilgiai **rašomi ir įvedami** – atskiras nustatymas, ilgio formatas. Jis nekeičia geometrijos, tik keičia skaičių išvaizdą ir tai, ką galite įvesti.

1. Paspauskite {{key:Esc}}, kad nieko nebūtų pasirinkta, skirtuke {{ui:Modelis}}.
2. Skiltyje {{ui:Dabartiniai nustatymai}} pasirinkite {{ui:Ilgio formatas}}: {{ui:Dešimtainis}} (`150.5`), {{ui:Architektūrinis}} (`12'-6 1/2"`), {{ui:Inžinerinis}} (`12'-6.5"`), {{ui:Trupmeninis}} (`150 1/2`) arba {{ui:Mokslinis}} (`1.505E+02`).
3. Pasirinkite {{ui:Tikslumas}}: dešimtainiai skaitmenys arba mažiausia trupmena (1/16 – įprastas pasirinkimas architektūriniam).

Arba įveskite {{cmd:UNITS}} (`UN`) ir atsakykite į jo du klausimus.

Su {{ui:Architektūrinis}} arba {{ui:Inžinerinis}} vienas brėžinio vienetas yra vienas colis, kaip AutoCAD: nustatykite ir {{ui:Vienetai}} į {{ui:Coliai}}. Tada ilgius galite įvesti pėdomis ir coliais bet kur, kur prašomas ilgis, ir {{ui:Ypatybių}} langeliuose:

| Įvedate | Reiškia |
|---|---|
| `12'6"` arba `12'-6"` | 12 pėdų 6 coliai (150) |
| `12'6-1/2"` | 12 pėdų 6½ colio. Prieš trupmeną naudokite brūkšnelį: {{key:Space}} komandų eilutėje yra {{key:Enter}}. |
| `12'` | 12 pėdų |
| `6"` arba `6` | 6 coliai: paprastas skaičius yra coliai |
| `1/2`, `6-1/2` | trupmenos veikia bet kuriame formate |

Taškai priima tuos pačius ilgius: `@12'6",0` arba `@10'<90`. Kampai lieka laipsniais.

Formatas rodomas istorijoje ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: plotai kvadratiniais coliais ir kvadratinėmis pėdomis), {{ui:Ypatybėse}}, koordinatėse būsenos juostoje ir **naujuose matmenyse**. Lapai išlaiko savo popieriaus vienetus (milimetrus ar colius) kaip dešimtainius skaičius.

:::note
Ilgio formatas išsaugomas DWG ir DXF failuose, o kiekvienas matmuo išlaiko savąjį: įrašytas brėžinys atsidaro taip, kaip paliekate.
:::

## Popieriaus dydžiai

Lapai ir modelio spausdinimai naudoja šiuos dydžius, bet kuria orientacija:

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

Nauji lapai pradedami ISO A3 metriniams ir be vienetų brėžiniams, o coliais ar pėdomis dirbantiems – Tabloid. Spausdinimo modeliai pradedami ISO A4 arba Letter tuo pačiu būdu, tada prisimena paskutinį pasirinkimą. Lapai iš atidarytų failų išlaiko savo dydį, rodomą kaip „Pasirinktinis“, kai jis nėra vienas iš šių.

## Mastelis

Mastelis `1:n` reiškia, kad vienas vienetas popieriuje rodo n tokio pat vieneto modelyje, taigi 1:100 rodo 1 m pastato kaip 10 mm popieriuje. CadCraft tai apskaičiuoja iš brėžinio vienetų ir popieriaus vieneto.

**Metriniai masteliai**, siūlomi kiekvienam brėžiniui: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architektūriniai mastelai**, siūlomi, kai vienetai yra coliai ar pėdos: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inžineriniai mastelai**, siūlomi, kai vienetai yra coliai ar pėdos: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Jūsų mastelai.** Įveskite `SCALELISTEDIT` (arba `SCALELIST`), kad pridėtumėte savo mastelį, pavyzdžiui 1:75 arba vietos mastelį 2 popieriaus : 300 brėžinio. `Add` klausia pavadinimo, tada popieriaus vienetų ir brėžinio vienetų (pavadinimas, kaip `1:75`, pasiūlo savo skaičius; paspauskite {{key:Enter}}, kad jų imtumėte). `Edit`, `Delete`, `List` ir `Reset` veikia tame pačiame sąraše; `Reset` grąžina standartinį sąrašą. Jūsų mastelius rodo po standartinių rodinio mastelio sąrašu Ypatybėse ir dialoge {{ui:Spausdinti į PDF}}; rodinys tokiu mastelių pavadinimu rodomas su savo pavadinimu, o jie išsaugomi brėžinyje (DWG ir DXF 2000) kaip brėžinio mastelių sąrašas. Brėžinys, atidarytas iš kitos programos, atsineša savo sąrašą; mastelių, sutampančių su standartiniu, nerodo dukart.

Kai rodinys nustatomas su {{ui:Rodyti visą modelį}} arba {{ui:Pažymėkite langą modelyje…}}, CadCraft parenka didžiausią tinkamą standartinį mastelį. {{ui:Pritaikyti visą modelį}} nustato tikslų mastelį, rodomą kaip paprastas santykis.

## Dydžiai popieriuje ir modelyje

Teksto ir matmenų dydžiai yra erdvės, kurioje braižote, vienetais.

| Norite popieriuje | Nubrėžta lape | Nubrėžta modelyje 1:50 (mm brėžinys) | Nubrėžta modelyje 1/4" = 1'-0" (colių brėžinys) |
|---|---|---|---|
| 2.5 mm tekstas | 2.5 | 125 | — |
| 3/32" tekstas | 0.09375 | — | 4.5 |

Matmenims laikykite dydžius kaip popieriaus dydžius ir nustatykite bendrą mastelį ({{cmd:DIMSCALE}}) į spausdinimo mastelį: 50 mastelyje 1:50, 48 mastelyje 1/4" = 1'-0". Žr. [Nustatyti matmenų dydžius](topic:dimension-settings).

## Anotuoti pagal mastelį

Nubrėžkite modelį visu dydžiu ir leiskite CadCraft atlikti aukščiau nurodytus skaičiavimus už jus.

1. Pasirinkite tekstą ar matmenis, kurie turi išlaikyti savo dydį popieriuje. {{ui:Ypatybėse}} pažymėkite {{ui:Anotacinis}}. {{ui:Dydis popieriuje}} tada rodo, pavyzdžiui, `2.5 mm at 1:50`.
2. Įveskite {{cmd:ANNOSCALE}} ir mastelį, kuriuo brėžinys bus spausdinamas, pavyzdžiui `1:100`.

Kiekvienas anotacinis tekstas ir matmuo pakeičiamas dydžiu taip, kad naujame mastelyje atsispausdintų tokio pat dydžio: 2.5 mm tekstas yra 125 aukščio milimetrų brėžinyje 1:50 ir 250 aukščio 1:100. Pastraipos plotis keičiasi kartu; matmens tekstas, rodyklės ir tarpai keičiasi kartu (jo bendras mastelis). Tai vienas atšaukimo žingsnis, o ne anotaciniai objektai niekada nekeičiami.

Nustatymas išsaugomas DWG ir DXF: kitos programos skaito anotacijos žymę, o CadCraft taip pat išlaiko mastelį, kuriam kiekvienas objektas sudydžiuotas.

Jei jūsų biuras nustato popieriaus aukščius Numatytųjų politikų priede (Parametrai › Bendra › Numatytosios politikos › Anotacijų dydžiai popieriuje), {{cmd:ANNOSCALE}} taip pat nustato naujo teksto pradinį aukštį pagal biuro aukštį tam mastelio pastaboms. Žr. [Numatytosios politikos](topic:default-policies).

### Vienas objektas keliuose mastelyje

Lapas dažnai rodo tą patį planą 1:100 ir jo dalį 1:50. Suteikite pastaboms ir matmenims abu mastelius, ir kiekvienas rodinys rodys juos jų popieriaus dydžiu:

1. Pasirinkite anotacinį tekstą ir matmenis bei įveskite `OBJECTSCALE`.
2. Pasirinkite `Add` ir įveskite mastelį, pavyzdžiui `1:50`. (`Current scale` prideda brėžinio anotacijos mastelį; `List` rodo, ką kiekvienas objektas išlaiko; `Delete` vieną nuima.)

Rodinys, kurio mastelis yra objekto sąraše, rodo jį tam mastelio dydžiu: 2.5 mm tekstas nubrėžiamas 250 aukščio per 1:100 rodinį ir 125 aukščio per 1:50, ekrane ir spausdinime. Objektas lieka savo vietoje; skiriasi tik dydis. Rodinyje mastelio, kurio nėra objekto sąraše, objektas rodomas dabartiniu dydžiu, kol neįvesite `ANNOALLVISIBLE` ir nepasirinksite `OFF`: tada jis ten neįtraukiamas. {{cmd:ANNOSCALE}} pakeičia dydį objektams, kurių sąraše yra naujas mastelis, o kitus palieka.

Sąrašai išsaugomi DWG ir DXF kaip CadCraft savi duomenys. Kita programa mato kiekvieną objektą kaip anotacinį, vieno mastelio, kuriam jis sudydžiuotas. Perjungiklis ANNOALLVISIBLE į failą neįrašomas.

## Linijų storiai ir linijų tipai

Sluoksnis arba objektas gali turėti **linijos storį** (0,05–2,11 mm) ir **linijos tipą** (brūkšninė, paslėpta, ašinė, fantominė, taškinė …). Nustatykite juos dešiniajame skydelyje: nieko nepasirinkus, {{ui:Linijos tipas}} ir {{ui:Linijos storis}} skiltyje {{ui:Dabartiniai nustatymai}} yra tai, ką gauna nauji objektai ({{ui:Pagal sluoksnį}}, kad sektų jų sluoksnį), o dvi po {{ui:Sluoksnis …}} yra dabartinio sluoksnio savosios. Pasirinkus objektus, tos pačios dvi eilutės ir {{ui:Linijos tipo mastelis}} keičia tuos objektus. Komandos yra {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) ir {{cmd:LTSCALE}} (`LTS`).

Linijų tipai rodomi ekrane ir spausdinimuose. Jų brūkšniai yra brėžinio vienetais: metriniame brėžinyje naudojami ISO dydžiai (DASHED: 12,7 mm brūkšniai), coliniame – coliniai (0,5"). Jei brūkšniai atrodo per maži ar per dideli, pakeiskite brėžinio {{ui:Linijos tipo mastelį}} (LTSCALE): kiekvienas brūkšnys ir tarpas dauginamas iš jo; paties objekto mastelis dauginamas dar kartą. Per smulkus šablonas nerodomas, o piešiamas kaip vientisa linija.

Linijų storiai spausdinami mm popieriuje, nepriklausomai nuo mastelio. Linijos su {{ui:Numatytuoju}} storiu naudoja pieštuko plotį, pasirinktą dialoge {{ui:Spausdinti į PDF}} (0,13–0,70 mm; pradžioje 0,25 mm); linijos storis 0 spausdinamas kaip plonausia linija. Ekrane kiekviena linija yra vieno taško pločio, kol nepaspausite {{ui:LWT}} būsenos juostoje (arba neįvesite {{cmd:LWDISPLAY}}): tada storis virš 0,25 mm braižomas platesnis (0,5 mm = 2 taškai) modelyje, o lape – tikru popieriaus pločiu. Pasirinkimas išsaugomas šioje naršyklėje.

## Biuro standartas

Biuras gali laikyti savo popieriaus teksto aukščius, sluoksnius, titulo bloko laukus ir šablonus viename įraše – biuro standarte. CadCraft jį skaito tokia tvarka: brėžinio paties įrašas (nustatomas {{cmd:OFFICESTANDARD}} › `Import`, išsaugomas faile), jūsų komandos bendras standartas, tada jūsų Numatytosios politikos. Anotaciniai tekstai ir matmenys paima popieriaus aukštį iš jo anotacijos mastelyje. Tuščias standartas nieko nekeičia. {{cmd:OFFICESTANDARD}} › `Layers` prideda biuro sluoksnius, kurių brėžinyje trūksta.
