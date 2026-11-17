---
title: Atverkite DWG, redaguokite ir įrašykite kopiją
summary: Atidarykite kažkieno atsiųstą brėžinį, patikrinkite, kas atėjo, padarykite pakeitimą ir atsiųskite kopiją kaip DWG ar DXF.
keywords: dwg, dxf, atidaryti, importas, eksportas, įrašyti, r12, abipusis perdavimas, konsultantas, xref, patikrinti brėžinį, saveas, įrašyti kaip, dwg įrašymas, formatas
from: 49de4bf6
---

## Ką darysite

Atidarysite DWG iš konsultanto, patikrinsite, ką CadCraft galėjo ir ko negalėjo parodyti, pridėsite pastabą, išspausdinsite lapą į PDF ir įrašysite kopiją grąžinimui, kaip DWG ar DXF.

## Atverkite failą

1. Paspauskite {{key:Mod+O}} arba spustelėkite {{ui:Atverti}}.
2. Pasirinkite `.dwg` failą.

Būsenos eilutėje rodoma „Skaitoma …“, kol brėžinys nuskaitomas. Kai baigta, brėžinys užpildo ekraną, o istorijoje rašoma, pavyzdžiui, „Atverta plan.dwg: 18,240 objektų 64 sluoksniuose“, ir kiek laiko tai užtruko.

:::offline
Esate neprisijungę. Jei mygtukas {{ui:Įrašyti neprisijungus}} rodo „Paruošta neprisijungus“, DWG failai atidaromi įprastai. Jei ne, o šioje kortelėje dar nebuvo atidarytas joks DWG, DWG atidarymas gali nepavykti, nes CadCraft DWG skaitiklis atsisiunčiamas kartu su pirmuoju DWG: atidarykite DXF arba, kitą kartą prisijungę, įrašykite CadCraft neprisijungus naudojimui. Žr. [Darbas neprisijungus](common:offline).
:::

## Patikrinkite, kas atėjo

1. Pažiūrėkite į {{ui:Brėžinys}} skyrių kairiajame skydelyje: formatas ir versija, vienetai, objektų ir sluoksnių skaičius bei lapai.
2. Perskaitykite po juo esančią dėžę „Apie šį failą“, jei ji yra.

Dėžėje išvardyta:

- **Dar nerodoma:** objektai, kurių CadCraft dar negali nubraižyti, pagal rūšį ir kiekį. Jie praleidžiami, o ne spėjami.
- **Atėjo maketai (lapai):** atidarykite juos skirtukais po brėžiniu.
- **Matmenys, kurie galėjo būti perskaityti tik taip, kaip nubraižyti.**

3. Spustelėkite skirtukus po brėžiniu, kad pamatytumėte kiekvieną lapą.
4. Patikrinkite {{ui:Vienetai}} skyriuje {{ui:Dabartiniai nustatymai}} (nieko nepasirinkta, {{ui:Modelis}} skirtukas). Jei ten rašoma {{ui:Be vienetų}}, bet žinote, kad brėžinys milimetrais, nustatykite jį, kad lapo ir spausdinimo mastelių rodmenys būtų teisingi.

:::tip
Jei tikėjotės brėžinio dalies ir jos nematote, patikrinkite {{ui:Sluoksniai}} skydelį: sluoksnis failo viduje gali būti išjungtas ar užšaldytas. Spustelėkite jo pavadinimą, kad jis taptų dabartiniu; tai jį įjungia.
:::

## Atlikite pakeitimą

1. Sukurkite sluoksnį pastaboms: spustelėkite {{ui:Naujas sluoksnis}}, įveskite `NOTES` ir paspauskite {{key:Enter}}.
2. Įveskite `DT` ir paspauskite {{key:Enter}}.
3. Spustelėkite, kur turi būti pastaba.
4. Įveskite pastabai tinkamą teksto aukštį (žr. [Pridėkite tekstą ir žymas](topic:text)) ir paspauskite {{key:Enter}}.
5. Paspauskite {{key:Enter}}, kad pasukimas liktų 0.
6. Įveskite pastabą ir paspauskite {{key:Enter}}.
7. Dar kartą paspauskite {{key:Enter}}, kad baigtumėte.

Importuotų matmenų redagavimas tinkamas: kai tik pakeisite vieną, CadCraft jį perbraižo savu stiliumi.

## Spausdinkite lapą peržiūrai

1. Spustelėkite lapo skirtuką.
2. Paspauskite {{key:Mod+P}}.
3. Spustelėkite {{ui:Atsisiųsti PDF}}.

Žr. [Spausdinti į PDF](topic:plot-pdf).

## Įrašykite kopiją

1. Paspauskite {{key:Mod+S}} arba spustelėkite {{ui:Įrašyti}}.

Atidarėte DWG, todėl naršyklė atsisiunčia `<name>.dwg` versijoje, kokia buvo DWG. Istorijoje rašoma, pavyzdžiui, „Įrašyta kopija kaip Plan.dwg (DWG (AutoCAD 2018)).“ ir po ja išvardijami pakeitimai, jei tokių buvo pakeliui.

2. Prieš siųsdami failą, perskaitykite tas eilutes. [Ką DWG išsaugo ir ką keičia](topic:files#what-a-dwg-keeps-and-changes) paaiškina kiekvieną iš jų.

Originalus DWG niekada nekeičiamas. Kiekvienas įrašymas yra naujas atsisiuntimas.

## Įrašykite kaip DWG ar DXF

Norėdami patys pasirinkti formatą:

1. Paspauskite {{key:Mod+Shift+S}} arba spustelėkite {{ui:Įrašyti kaip}}.

Dialogas {{ui:Įrašyti kopiją kaip}} atsidaro su keturiais pasirinkimais, kiekvienas su failo pavadinimu, kurį jis suteiks: {{ui:DWG}}, su jo {{ui:Versija}} sąrašu, {{ui:DXF R12}}, {{ui:DXF 2000}} ir {{ui:DXF 2000 (binary)}}. Brėžinio dabartinis formatas ir versija jau pažymėti.

2. Spustelėkite norimą formatą. DWG atveju pasirinkite versiją, kurią naudoja kita įmonė, arba senesnę: AutoCAD 2018, 2013, 2010, 2007, 2004 ar 2000.
3. Spustelėkite {{ui:Įrašyti}}.

Kopija atsisiunčiama. Nuo šiol {{key:Mod+S}} įrašo šį brėžinį tuo formatu, o nauji brėžiniai šioje naršyklėje irgi pradeda nuo jo. {{ui:Atšaukti}} arba {{key:Esc}} nieko neįrašo, o istorijoje rašoma „Neįrašyta.“.

Kurį pasirinkti:

- **DWG** išsaugo daugiausia: lapus su jų rodinių languose, tikrus matmenis, brūkšniuotės raštus, sluoksnių ir blokų pavadinimus, kaip juos įvedėte, ir daugiaeilutį tekstą kaip daugiaeilutį tekstą. AutoCAD 2000 versija atsidaro daugiausia programų; 2004 ir vėlesnės versijos išlaiko ir tikrąsias spalvas.
- **DXF 2000** – tai teksto failas, išsaugantis beveik tai, ką išsaugo DWG: kiekvieną lapą kaip maketą su jo rodinių languose, tikrus matmenis, brūkšniuotės raštus, tikrąsias spalvas, linijų storius, linijų tipus ir pavadinimus, kaip juos įvedėte. Jis atsidaro AutoCAD 2000 ir vėlesnėse versijose bei daugumoje CAD programų. Daugiarodyklės tampa linijomis, rodyklių galais ir tekstu, kurį jos nubraižo. DXF, atidarytas 2000 ar vėlesnėje versijoje, įrašomas kaip DXF 2000.
- **DXF 2000 (binary)** turi tą patį turinį kaip DXF 2000, bet dvejetainiu formatu: mažesnis failas, kuris išsaugo kiekvieną skaičių tiksliai. Dvejetainiai DXF failai iš kitų programų atsidaro kaip ir teksto failai, o brėžinys, atidarytas iš dvejetainio DXF, įrašomas atgal kaip dvejetainis.
- **DXF R12** atsidaro beveik bet kurioje CAD programoje. Jis išsaugo pirmą lapą su jo rodinių languose ir kitus CadCraft lapus. Jis supaprastina naujesnius dalykus, pvz., daugiaeilutį tekstą ir brūkšniuotes.

## Ką pamatys kita įmonė

DWG atveju:

- Linijos, lankai, apskritimai, elipsės, polilinijos, tekstas, daugiaeilutis tekstas, blokai su jų atributais, vientisi užpildai, brūkšniuotės raštai ir sluoksniai, kaip juos matote jūs.
- Tikri matmenys: kita programa juos perskaičiuoja, kai jie ištempiami.
- Kiekvienas lapas su savo popieriumi ir rodinių languose.
- Daugiarodyklės kaip daugiarodyklės. AutoCAD 2000 versijoje tikrosios spalvos virsta artimiausia standartine spalva.

DXF R12 atveju:

- Linijos, lankai, apskritimai, polilinijos, tekstas, bloko nuorodos ir matmenys, kaip juos matote. Matmenys lieka tikrais matmenimis.
- Sluoksnių pavadinimai didžiosiomis raidėmis, tarpai pakeisti į `_`.
- Pirmasis lapas kaip brėžinio popieriaus erdvė su rodinių languose. Kiti lapai atkeliauja kaip blokai, pavadinti `CCLAYOUT_1` ir t. t.; jei jiems reikia kiekvieno lapo kaip maketo, taip pat išspausdinkite jiems kiekvieno lapo PDF.
- Daugiaeilutis tekstas kaip atskiros eilutės, elipsės kaip polilinijos, brūkšniuotės kaip kontūrai.

Bet kuriuo atveju viskas, kas buvo išvardinta kaip „Dar nerodoma“ atidarius DWG, **nėra** kopijoje, nebent istorijoje rašoma, kad ji išsaugota: DWG OLE objektai ir jo 3D kietieji kūnai modelio erdvėje įrašomi atgal, kai įrašote kaip DWG. Pasakykite jiems apie tai ir atsiųskite ir PDF.

## Dažniausios klaidos

- **„CadCraft atidaro DWG ir DXF brėžinius.“** Failas turi kitą plėtinį. Patikrinkite, ar tai `.dwg` ar `.dxf`.
- **„Šio brėžinio nepavyko perskaityti.“** DWG yra sugadintas arba versijos, kurios skaitiklis nepalaiko. Paprašykite DXF arba DWG, įrašyto senesne versija.
- **„Šis dvejetainis DXF baigiasi objekto viduryje.“** Failas nukirstas arba sugadintas. Įveskite RECOVER, kad atvertumėte tai, kas galima perskaityti, arba paprašykite failo dar kartą.
- **Įrašytas failas vadinasi `name (1).dwg` arba `name (1).dxf`.** Naršyklė taip daro, kai aplanke jau yra failas tuo pačiu pavadinimu.
- **Jų programa senesnė ir negali atidaryti DWG.** Įrašykite kaip DWG su {{ui:Versija}} {{ui:AutoCAD 2000}} arba kaip {{ui:DXF R12}}: beveik bet kuri CAD programa jį atidaro.
- **Trūksta brėžinio dalių.** Susieti brėžiniai (xref) neįkeliami, kol nepasirinksite jų failų ({{cmd:XREF}}, `R`), o paveikslėliai rodomi kaip rėmeliai su savo failų pavadinimais.
