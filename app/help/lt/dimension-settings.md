---
title: "Matmenų dydžių, dešimtainių skaitmenų ir mastelio nustatymas"
summary: Pasirinkite teksto aukštį, rodyklės dydį, dešimtainius skaitmenis ir bendrą mastelį naujiems matmenims, pakeiskite esamus ir sužinokite, kaip CadCraft veikia matmenų stiliai.
keywords: matmenų stilius, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, bendras mastelis, dešimtainiai skaitmenys, rodyklės dydis, anotacijų mastelis, dimtextunit, teksto vienetai, mm, cm, m, km, milimetrai, metrai, dimlfac, dimpost
from: 8ec82a07
---

## Ko išmoksite

Koks didelis yra matmenų tekstas ir rodyklės, kaip juos nustatyti brėžiniui, spausdinamam 1:50 ar 1:100, ir kaip pakeisti jau sukurtus matmenis.

## Kaip veikia matmenų dydžiai

Kiekvienas matmuo turi savo dydžių rinkinį: teksto aukštis, rodyklės dydis, dešimtainiai skaitmenys, tarpas aplink tekstą, kiek pratęsimo linijos išeina už matmens linijos ir kiek jos prasideda nuo objekto. Numatytieji yra artimi įprastam ISO stiliui:

| Nustatymas | Numatytoji | Komanda |
|---|---|---|
| Teksto aukštis | 2.5 | {{cmd:DIMTXT}} |
| Rodyklės dydis | 2.5 | {{cmd:DIMASZ}} |
| Dešimtainiai skaitmenys | 2 (galiniai nuliai nerodomi) | {{cmd:DIMDEC}} |
| Tarpas aplink tekstą | 0.625 | {{cmd:DIMGAP}} |
| Pratęsimas už matmens linijos | 1.25 | {{cmd:DIMEXE}} |
| Poslinkis nuo objekto | 0.625 | {{cmd:DIMEXO}} |
| Bendras mastelis | 1 | {{cmd:DIMSCALE}} |

Kiekvienas dydis dauginamas iš **bendro mastelio**. Nustatykite dydžius, kaip norite popieriuje (2.5 mm tekstas), o bendrą mastelį – į spausdinimo mastelį (50 už 1:50). Tekstas tada yra 2.5 × 50 = 125 brėžinio vienetų aukščio ir spausdinamas kaip 2.5 mm.

:::note
Pavadintais matmenų stiliais valdoma su {{cmd:DIMSTYLE}}: žr. skyrių žemiau. Kiekvienas matmuo taip pat išsaugo nustatymus, su kuriais buvo sukurtas, todėl vieną matmenį vis dar galite keisti atskirai {{ui:Ypatybės}} skydelyje.
:::

## Nustatykite naujų matmenų dydžius

Abu būdai žemiau keičia tik matmenis, kuriuos sukursite vėliau.

### Dabartinių nustatymų skydelyje

1. Paspauskite {{key:Esc}}, kad nieko nebūtų pasirinkta. Skirtuke {{ui:Modelis}} dešiniajame skydelyje rašoma {{ui:Dabartiniai nustatymai}}.
2. Slinkite skydelį žemyn iki {{ui:Nauji matmenys}}, praeidami sluoksnio, spalvos, vienetų ir {{ui:Sluoksnis 0}} eilutes (mažame ekrane jis prasideda žemiau apatinio krašto). Spustelėkite {{ui:Bendras mastelis}}, įveskite `50` ir paspauskite {{key:Enter}}.
3. Tokiu pačiu būdu nustatykite {{ui:Teksto aukštis}}, {{ui:Rodyklės dydis}} ir {{ui:Dešimtainiai skaitmenys}}, jei norite kitų reikšmių.

Būsenos juostoje patvirtinama kiekviena, pavyzdžiui: „Naujų matmenų bendras mastelis: 50“.

### Komandų eilutėje

1. Įveskite `DIMSCALE` ir paspauskite {{key:Enter}}.
2. Prie `Enter new value for DIMSCALE <1>` įveskite `50` ir paspauskite {{key:Enter}}.

Istorijoje patvirtinama: „DIMSCALE = 50. Nauji matmenys naudoja ją; pasirinkite esamus, kad pakeistumėte jų.“ {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} ir {{cmd:DIMEXO}} veikia taip pat. Paspauskite {{key:Enter}} užklausoje, kad paliktumėte dabartinę reikšmę.

### Pėdos ir coliai matmenyse

Nauji matmenys naudoja brėžinio ilgio formatą: nustatykite jį su {{ui:Ilgio formatas}} skydelyje {{ui:Dabartiniai nustatymai}} arba {{cmd:UNITS}} (žr. [Pėdos ir coliai](topic:units-papers-scales#feet-and-inches-and-fractions)), ir kitas matmuo rodys `12'-6 1/2"`. {{cmd:DIMLUNIT}} nustato tik matmenų formatą (2 – dešimtainis, 3 – inžinerinis, 4 – architektūrinis, 5 – trupmeninis). Jau sukurtam matmeniui pasirinkite jį ir {{ui:Ypatybės}} skydelyje pasirinkite {{ui:Formatas}}; su trupmeniniu formatu jo {{ui:Trupmena}} laukelis priima dvejeto laipsnį (4 = 1/16).

## Matmenys mm, cm, m ar km

Matmuo matuoja brėžinio vienetais. Jis gali užrašyti tą ilgį milimetrais, centimetrais, metrais ar kilometrais, o vienetas rašomas po skaičiaus: 1250 mm siena rodoma kaip `1250 mm`, `125 cm`, `1.25 m` arba `0.00125 km`.

1. Pirmiausia nustatykite brėžinio {{ui:Vienetai}} skydelyje {{ui:Dabartiniai nustatymai}} (žr. [Vienetai, popieriaus dydžiai ir mastelis](topic:units-papers-scales#drawing-units)), kad CadCraft žinotų, koks yra vienas brėžinio vienetas. Brėžinys be vienetų skaitomas kaip milimetrai, ir {{cmd:DIMTEXTUNIT}} tai nurodo.
2. Naujiems matmenims: paspauskite {{key:Esc}}, kad nieko nebūtų pasirinkta, ir po {{ui:Nauji matmenys}} pasirinkite {{ui:Teksto vienetai}}: {{ui:Brėžinio vienetai}}, `mm`, `cm`, `m` arba `km`.
3. Jau sukurtiems matmenims: pasirinkite juos ir {{ui:Ypatybės}} › {{ui:Pagrindiniai vienetai}} pasirinkite {{ui:Teksto vienetai}}.

Arba įveskite {{cmd:DIMTEXTUNIT}} (`DTU`) ir atsakykite `D`, `MM`, `CM`, `M` arba `KM`: su pasirinktais matmenimis jis juos pakeičia (vienas anuliavimo žingsnis), o nieko nepasirinkus nustato naujus matmenis.

{{ui:Dešimtainiai skaitmenys}} ({{cmd:DIMDEC}}) vis tiek nustato, kiek dešimtainių vietų rodoma: su metrais ir 3 dešimtainiais 1234 mm rodoma kaip `1.234 m`. Tekstas užrašomas kaip dešimtainis skaičius. Lape matmenys matuojami lapo popieriaus vienetais (milimetrais ar coliais).

Išsaugotas DWG ar DXF išlaiko pasirinkimą kaip matmens matavimo mastelį (DIMLFAC) ir priesagą (DIMPOST, ` m`), kad kitos programos rodytų tą patį tekstą. Jei vėliau pakeisite brėžinio {{ui:Vienetai}}, matmenys, užrašyti mm, cm, m ar km, perskaičiuojami, todėl ir toliau rodo teisingą ilgį. {{ui:Nustatyta rankiniu būdu (mastelis arba priesaga)}} reiškia, kad matmens {{ui:Matavimo mastelis}} arba priesaga nustatyti kitu būdu; pasirinkite vienetą, kad juos pakeistumėte.

## Pakeiskite jau sukurtus matmenis

1. Spustelėkite vieną matmenį. Dešiniojo skydelio antraštė rodo {{ui:Matmuo}}.
2. Nustatymai suskirstyti į skyrius; slinkite skydelį žemyn, kad pasiektumėte vėlesnius:
   - {{ui:Bendra}}: {{ui:Matmens stilius}}
   - {{ui:Geometrija}}: {{ui:Rūšis}} ir {{ui:Matavimas}} (tik skaitymui)
   - {{ui:Tekstas}}: {{ui:Teksto pakeitimas}} ir {{ui:Teksto aukštis}}
   - {{ui:Linijos ir rodyklės}}: {{ui:Rodyklės dydis}}
   - {{ui:Tilpdinimas}}: {{ui:Bendras mastelis}}
   - {{ui:Pagrindiniai vienetai}}: {{ui:Dešimtainiai skaitmenys}}
3. Įveskite naują reikšmę ir paspauskite {{key:Enter}}.

Matmuo iš karto perbraižomas. Kampiniams matmenims {{ui:Dešimtainiai skaitmenys (°)}} nustato kampo dešimtainius skaitmenis.

:::note
Pasirinkus kelis matmenis, skydelyje rodomos eilutės, kurias jie turi bendras, o reikšmė, skirtinga tarp jų, rodoma kaip {{ui:Įvairus}}. Įvesta reikšmė pakeičia visus pasirinktus matmenis vienu žingsniu, todėl vienas {{key:Mod+Z}} visus juos atstato.
:::

## Matmenys iš atvertų brėžinių

Matmuo iš atverto DWG ar DXF rodomas tiksliai taip, kaip jį nubrėžė kita programa. Jo skydelyje rašoma: „Rodoma taip, kaip ją nubrėžė programa, kuri ją sukūrė. Pakeiskite, ir CadCraft nubraiš jį iš naujo savo stiliumi.“ Kai tik pakeičiate bet kurią reikšmę, pajudinate rankenėlę ar perkeliate matmenį, CadCraft jį perbraižo su savo rodyklėmis ir šriftu, naudodamas dydžius, perskaitytus iš failo.

Kai kurie matmenys gali būti tik perskaityti kaip nubrėžti, o ne kaip redaguojami matmenys; tada skydelyje rodoma „Nubrėžta iš“ ir bloko pavadinimas, o dėžutė {{ui:Apie šį failą}} juos suskaičiuoja.

## Dažniausios klaidos

- **Pakeitus DIMSCALE, ekrane niekas nepasikeitė.** Nustatymas skirtas naujiems matmenims. Pasirinkite esamus ir pakeiskite {{ui:Bendras mastelis}} skydelyje.
- **Dešimtainių skaitmenų rodoma mažiau, nei nustatyta.** Galiniai nuliai nerodomi: su 2 dešimtainiais rodoma `1250` ir `1250.5`, o ne `1250.00`.
- **Tekstas popieriuje lapo vaizdo lange yra teisingo aukščio, bet modelio spausdinime – ne.** Bendras mastelis turi sutapti su spausdinimo mastelių. Spausdinant pagal „Tilpdinti į popierių“ gaunamas keistas mastelis; spausdinimo dialoge pasirinkite standartinį mastelį.
- **Vienetai, kaip mm ar m, tekste.** Pasirinkite {{ui:Teksto vienetai}} (žr. [Matmenys mm, cm, m ar km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Bet kuriam kitam žodžiui po skaičiaus įveskite jį perrašyme: `<> TYP.`.

## Pavadinti matmenų stiliai

Įveskite `DIMSTYLE` (`D`), kad atidarytumėte {{ui:Matmenų stilių tvarkyklė}}. Joje išvardijami brėžinio stiliai, kiek matmenų naudoja kiekvieną ir kuris yra dabartinis. **Standard** visada yra.

- {{ui:Nustatyti dabartinį}}: nauji matmenys naudoja to stiliaus nustatymus ir perima jo pavadinimą.
- {{ui:Naujas…}}: naujas stilius, kuris pradeda kaip pasirinkto stiliaus kopija.
- {{ui:Keisti…}}: tie patys laukeliai, kaip matmenų skyriuje {{ui:Ypatybės}} skydelyje (linijos ir rodyklės, tekstas, tilpdinimas, vienetai, alternatyvūs vienetai, nuokrypiai). Spauskite {{ui:Gerai}}, ir stilius pasikeičia **ir kiekvienas jį naudojantis matmuo pasikeičia kartu**, nustatymas po nustatymo. Nustatymas, kurį pakeitėte tik vienam matmeniui, lieka kaip yra, nebent stilius pakeitė tą nustatymą.
- {{ui:Pervardyti…}} ir {{ui:Naikinti}}: Standard negalima pervardyti ar naikinti, taip pat negalima dabartinio stiliaus arba stiliaus, kurį naudoja matmenys.
- {{ui:Palyginti…}}: kuo skiriasi du stiliai.
- {{ui:Taikyti pasirinktiems}}: pirmiausia pasirinkite matmenis; jie perima stiliaus nustatymus ir jo pavadinimą.

`-DIMSTYLE` atlieka tą patį komandų eilutėje: `Restore`, `Save` (dabartiniai nustatymai, įskaitant tai, ką įvedėte su {{cmd:DIMTXT}} ir kitomis, pavadinimu), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stiliai išsaugomi DWG ar DXF (jo matmenų stilių lentelėje) ir nuskaitomi iš atidarytų failų. *Dabartinis* stilius neišsaugomas: brėžinys atsidaro su Standard kaip dabartiniu. Standard išlaiko savo nustatymus, kol kitas stilius yra dabartinis.

## Keiskite matmenų tekstą ir pratęsimo linijas

{{cmd:DIMEDIT}} (`DED`) veikia pasirinktus matmenis: **Home** grąžina tekstą ten, kur jį deda stilius, **New** įveda kitą tekstą (`<>` žymi matavimo reikšmę), **Rotate** pasuka tekstą, **Oblique** pakreipia tiesinių ir įstrižų matmenų pratęsimo linijas iki įvesto kampo (paspauskite {{key:Enter}}, jei nereikia). {{cmd:DIMTEDIT}} perkelia tekstą į matmens linijos **Left**, **Right** arba **Center**, arba jį pasuka (**Angle**), arba siunčia jį į **Home**. Tekstas visada guli ant matmens linijos: jo negalima nutempti į laisvą vietą.
