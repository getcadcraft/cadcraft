---
title: Dinaminiai blokai
summary: Ką CadCraft daro su dinaminiais blokais DWG faile: jie išlaiko tikrus pavadinimus, rodo būseną, kurioje buvo įrašyti, perjungia matomumo būsenas, rodo kitas reikšmes ir lieka dinamiški įrašant.
keywords: dinaminis blokas, dinaminiai blokai, matomumas, matomumo būsena, apvertimas, ištempimas, paieška, parametrai, pasirinktiniai, bloko ypatybės, *U blokai, dinaminis
from: dea2ee7c
---

## Kas veikia

DWG su dinaminiais blokais atsidaro, ir šie dalykai veikia:

- **Jų tikri pavadinimai.** Dinaminis blokas rodomas {{ui:Blokai}} skydelyje savo pavadinimu („Receptacle“, „Sink“), o ne kaip be pavadinimo `*U` blokas.
- **Būsena, kurioje jie buvo įrašyti.** Kiekviena nuoroda rodo tiksliai tai, ką rodė kita programa: matomumo būseną, į kurią ji buvo nustatyta, ištemptą ar apverstą, kaip buvo įrašyta.
- **Matomumo būsenos perjungimas.** Pasirinkite vieną nuorodą (arba kelias to paties bloko), atidarykite {{ui:Ypatybės}}, skiltyje {{ui:Pasirinktiniai}} pasirinkite kitą būseną iš {{ui:Matomumas}} sąrašo. Nuoroda iš karto rodo tą būseną, ir jos atributai taip pat: tie, kuriuos būsena slepia, dingsta, o tie, kuriuos rodo, atsiranda su savo reikšmėmis. Nuoroda išlaiko visas reikšmes, todėl niekas netampa tuščias; {{ui:Ypatybės}} išvardija paslėptas, pažymėtas „paslėpta“. {{key:Mod+Z}} grąžina senąją būseną vienu žingsniu.
- **Rankenėlės.** Pasirinktas dinaminis blokas rodo savo rankenėles ten, kur yra jo parametrai: mažą trikampį matomumo būsenai (spustelėkite jį, kad gautumėte būsenų sąrašą), rodykles atstumo galuose, dvigubą rodyklę apvertimui. Veikia tik matomumo rankenėlė; kitos tai nurodo būsenos juostoje.
- **Kitos reikšmės, tik skaitymui.** Po matomumo sąrašu {{ui:Pasirinktiniai}} taip pat rodo bloko atstumus, lygiavimo kampus, apvertimo būsenas ir taškus, kaip juos laiko brėžinys.
- **Matomumo būsenų redagavimas.** Atidarykite bloką su {{cmd:BEDIT}}: redaktorius rodo vieną būseną, pavadintą juostoje virš brėžinio (ten galima pasirinkti kitą). Įveskite {{cmd:BVSTATE}}, kad perjungtumėte, pridėtumėte (paslėpti viską, rodyti viską arba išlaikyti tai, kas rodoma), pervadintumėte ar ištrintumėte būseną; {{cmd:BVHIDE}} paslepia pasirinktus objektus einamojoje rodomoje būsenoje; {{cmd:BVSHOW}} rodo paslėptus objektus išblukusius, kad galėtumėte spustelėti tuos, kuriuos norite grąžinti. Įrašykite bloką: nuorodos, nustatytos į pervadintą būseną, ją išlaiko nauju pavadinimu, o nuorodos, nustatytos į ištrintą būseną, rodo pirmąją būseną.
- **Lieka dinamiški.** Įrašytas DWG versijoje, kokia buvo brėžinio, blokai lieka dinamiški su jūsų pasirinkta būsena: kita programa juos atidaro kaip tuos pačius dinaminius blokus. Redaguotos matomumo būsenos taip pat išsaugomos: jų nauji pavadinimai, pridėtos būsenos ir tai, ką kiekviena rodo.

## Kas tik skaitoma arba dar neįgyvendinta

| Dar nėra | Vietoje to, šiandien |
|---|---|
| Atstumų, kampų ar apvertimų keitimas (ištempimo, perkėlimo, apvertimo veiksmai) | Rodomi tik skaitymui skiltyje {{ui:Pasirinktiniai}}; redaguokite programoje, kuri sukūrė bloką. |
| Paieškos, XY, sukimo ir poliariniai parametrai | Dar neskaitomi: nuoroda rodoma kaip išsaugota. |
| Atstumo, apvertimo ir taško rankenėlių vilkimas | Jos rodo, kur yra parametrai; matomumo rankenėlė ir {{ui:Matomumas}} sąrašas ypatybėse perjungia būsenas. |
| Kitos programos tipo dinaminių blokų kūrimas (ištempimas, apvertimas, paieška) | CadCraft sukurti blokai yra paprasti blokai; {{cmd:BPARAMETER}} tai nurodo. Jūsų parametrai ir keli matomumo parametrai yra Parametrų tvarkyklėje (žr. „Jūsų parametrai ir matomumo būsenos“ žemiau). |
| Objektų pridėjimas ar ištrynimas bloke su matomumo būsenomis bloko redaktoriuje | Tada blokas įrašomas kaip paprastas blokas (redaktorius tai praneša, kai uždaromas). |
| Dinamiškumo išlaikymas kitoje DWG versijoje ar DXF | Jie įrašomi kaip paprasti blokai, rodantys pasirinktą būseną, ir įrašymas tai praneša. |

:::note
Objektų perkėlimas ar keitimas {{cmd:BEDIT}} išlaiko bloką su matomumo būsenomis dinamišku. Blokas be būsenų arba blokas, kurio objektai redaktoriuje buvo pridėti ar ištrinti, tampa paprastu bloku.
:::

## Jūsų parametrai ir matomumo būsenos

Bloke, kurį kuriate CadCraft, gali būti jūsų parametrų ir **kelių** matomumo parametrų, kiekvienas su savo būsenomis. Įveskite {{cmd:BPARAMS}} (arba `BPM`), kad atvertumėte **Parametrų tvarkyklę** bloko, kurį redaguojate {{cmd:BEDIT}}, pasirinktos nuorodos bloko arba jūsų nurodyto bloko.

- **Parametrai**: pavadinimas, tipas (skaičius, ilgis, kampas, kiekis, taip/ne) ir reikšmė arba formulė per kitus parametrus (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Lygi}} rodo rezultatą. Formulė, kuri neveikia, arba reikšmė, netinkanti savo tipui (kiekis 1.5), atmetama, o tvarkyklė nurodo priežastį; nieko kito nepasikeičia.
- **Matomumo parametrai**: {{ui:Pridėti matomumo parametrą}} sukuria jį su pirmąja būsena. Kiekvieną būseną galima pervadinti, pašalinti (paskutinė lieka) arba duoti skaičių „rodoma, kai“. Formulė parenka būseną pagal parametrus (būsena, kurios numeris atitinka, kitaip būsena tame sąrašo vietoje); be formulės kiekviena nuoroda pasirenka savo.
- **Objektų įdėjimas į būseną**: bloko redaktoriuje pasirinkite objektus, įveskite {{cmd:BPARAMS}} ir spustelėkite {{ui:Įdėti pasirinktus objektus čia}} ties būsena. Objektai, kurių nesąraso joks matomumo parametras, visada rodomi.
- **Ši nuoroda**: pradėjus nuo pasirinktos nuorodos, tvarkyklėje rodomos ir tos nuorodos savos reikšmės bei būsenos.

Bloko redaktoriaus išorėje kiekvienas pakeitimas yra vienas atšaukimo žingsnis. Bloko redaktoriuje pakeitimai priklauso redaktoriui: {{ui:Įrašyti bloką}} juos išsaugo. `-BPARAMS` tą patį klausia komandų eilutėje.

**Faile.** DWG ir DXF išsaugo parametrus, kurie objektai kurioje būsenoje ir kiekvienos nuorodos savas reikšmes CadCraft savuose įrašuose; atidarius failą CadCraft viskas grįžta. Kita programa mato kiekvieną nuorodą kaip bloką su visais objektais, nes DWG bloke saugomas daugiausia vienas matomumo parametras. Nuoroda, kurią kita programa perkėlė, arba blokas, kurio objektus ji pakeitė, grįžta be dalių, kurios nebesutampa (nieko neįspėjama).
