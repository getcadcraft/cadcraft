---
title: Dinaminiai blokai
summary: Ką CadCraft daro su dinaminiais blokais DWG: jie išlaiko tikrus pavadinimus, rodo būseną, kurioje buvo išsaugoti, perjungia matomumo būsenas, rodo kitas reikšmes ir lieka dinamiški įrašant.
keywords: dinaminis blokas, dinaminiai blokai, matomumas, matomumo būsena, apvertimas, tempimas, paieška, parametrai, pasirinktinis, bloko ypatybės, *U blokai, dinaminis
from: 26b6aa80
---

## Kas veikia

DWG su dinaminiais blokais atsidaro, ir jie veikia iki šiol:

- **Tikri pavadinimai.** Dinaminis blokas skydelyje {{ui:Blocks}} rodomas savo pavadinimu („Receptacle“, „Sink“), o ne kaip be pavadinimo `*U` blokas.
- **Būsena, kurioje buvo išsaugoti.** Kiekviena nuoroda rodo tiksliai tai, ką rodė kita programa: matomumo būseną, į kurią ji buvo nustatyta, ištemptą arba apverstą taip, kaip buvo išsaugota.
- **Matomumo būsenos perjungimas.** Pažymėkite vieną nuorodą (arba kelias to paties bloko), atverkite {{ui:Properties}} ir skiltyje {{ui:Custom}} pasirinkite kitą būseną iš sąrašo {{ui:Visibility}}. Nuoroda iškart rodo tą būseną ir jos atributus: tuos, kuriuos būsena slepia, dingsta, o tie, kuriuos ji rodo, atsiranda su savo reikšmėmis. Nuoroda išlaiko visas reikšmes, todėl nieko nelieka tuščio; {{ui:Properties}} išvardija paslėptas, pažymėtas „hidden“. {{key:Mod+Z}} atkuria senąją būseną vienu žingsniu.
- **Rankenėlės.** Pažymėtas dinaminis blokas rodo savo rankenėles ten, kur yra jo parametrai: mažą trikampį matomumo būsenai (spustelėkite jį, kad pamatytumėte būsenų sąrašą), rodykles atstumo galuose, dvigubą rodyklę apvertimui. Veikia tik matomumo rankenėlė; kitos tai nurodo būsenos juostoje.
- **Kitos reikšmės, tik skaitymui.** Po matomumo sąrašu {{ui:Custom}} rodo ir bloko atstumus, lygiavimo kampus, apvertimo būsenas bei taškus, kaip juos laiko brėžinys.
- **Matomumo būsenų redagavimas.** Atverkite bloką su {{cmd:BEDIT}}: redaktorius rodo vieną būseną, pavadintą juostoje virš brėžinio (pasirinkite kitą ten). Įveskite {{cmd:BVSTATE}}, kad perjungtumėte, pridėtumėte (slepiant viską, rodant viską arba paliekant tai, kas rodoma), pervadintumėte ar ištrintumėte būseną; {{cmd:BVHIDE}} paslepia pažymėtus objektus rodomoje būsenoje; {{cmd:BVSHOW}} parodo paslėptus, išblukusius, kad galėtumėte spustelėti tuos, kuriuos norite grąžinti. Išsaugokite bloką: nuorodos, nustatytos į pervadintą būseną, ją išlaiko nauju pavadinimu, o nustatytos į ištrintą būseną rodo pirmąją būseną.
- **Išlieka dinamiški.** Įrašius DWG tos versijos, kurioje brėžinys atėjo, blokai lieka dinamiški su pasirinkta būsena: kita programa atidaro juos kaip tuos pačius dinaminius blokus. Jūsų redaguotos matomumo būsenos taip pat įrašomos: jų nauji pavadinimai, pridėtos būsenos ir tai, ką kiekviena rodo.

## Kas tik skaitoma arba dar nėra

| Dar nėra | Vietoj to, šiandien |
|---|---|
| Atstumų, kampų ar apvertimų keitimas (tempimo, perkėlimo, apvertimo veiksmai) | Rodomi tik skaitymui skiltyje {{ui:Custom}}; redaguokite programoje, kuri sukūrė bloką. |
| Paieškos, XY, sukimosi ir poliariniai parametrai | Dar neskaitomi: nuoroda rodoma kaip išsaugota. |
| Atstumo, apvertimo ir taško rankenėlių tempimas | Jos rodomos ten, kur yra parametrai; matomumo rankenėlė ir sąrašas {{ui:Visibility}} Ypatybėse perjungia būsenas. |
| Dinaminių blokų kūrimas (parametrų ar matomumo būsenų pridėjimas blokui, kurio jų nėra) | Blokai, kuriuos kuriate CadCraft, yra paprasti blokai; {{cmd:BPARAMETER}} tai nurodo. |
| Objektų pridėjimas ar trynimas bloke su matomumo būsenomis blokų redaktoriuje | Blokas tada įrašomas kaip paprastas blokas (redaktorius tai praneša uždarydamas). |
| Dinamiškumo išlaikymas kitoje DWG versijoje ar DXF | Jie įrašomi kaip paprasti blokai, rodantys pasirinktą būseną, ir įrašymas tai praneša. |

:::note
Keičiant ar perkeliant objektus {{cmd:BEDIT}}, blokas su matomumo būsenomis išlieka dinamiškas. Blokas be būsenų arba tas, kurio objektai buvo pridėti ar ištrinti redaktoriuje, tampa paprastu bloku.
:::
