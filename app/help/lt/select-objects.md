---
title: Objektų pasirinkimas
summary: Pasirinkite objektus po vieną, langu ar kirtimu, prieš komandą ar jos metu, ir pašalinkite objektus iš pasirinkimo.
keywords: pasirinkimas, pasirinkti, langas, kirtimas, daiktas-veiksmas, veiksmas-daiktas, pasirinkti, visi, paskutinis, ankstesnis, tvora, pašalinti, pridėti, tab, ciklas, persidengiantys, qselect, greitasis pasirinkimas, filtras, pasirinkti panašius, selectsimilar, shift, atžymėti, ctrl+a, pickfirst
from: 676508c7
---

## Ko išmoksite

Kaip pasirinkti objektus, su kuriais dirba komanda. CadCraft turi du darbo būdus, abu tinka:

- **Pirma pasirinkti, tada komanda** (daiktas-veiksmas). Pasirinkite objektus, tada įveskite `M` (Perkelti). Komanda perima jūsų pasirinkimą ir iš karto pereina prie kito klausimo.
- **Pirma komanda, tada pasirinkimas** (veiksmas-daiktas). Įveskite `M`; komanda klausia `Pasirinkite objektus:`; pasirinkite, tada paspauskite {{key:Enter}}.

## Pasirinkite po vieną objektą

1. Kai komanda nevykdoma, spustelėkite liniją. Ji paryškinama ir atsiranda jos rankenėlės (maži kvadratėliai). Dešiniajame skydelyje rodomos jos savybės.
2. Spustelėkite kitą objektą. Jis pridedamas prie pasirinkimo.
3. Laikykite {{key:Shift}} ir spustelėkite pasirinktą objektą. Jis pašalinamas iš pasirinkimo.
4. Paspauskite {{key:Esc}}. Nieko nepasirinkta.

## Langas ir kirtimas

Spustelėkite kartą tuščioje vietoje, pajudinkite ir spustelėkite dar kartą: gaunamas stačiakampis. Paspaudus ir vilkiant vietoj to piešiamas laisvos formos lasas, su tomis pačiomis dviem rūšimis (žr. [Lasso pasirinkimas](topic:lasso-selection); Parametrai gali nustatyti, kad vilkimas piešia stačiakampį). Kokius objektus gausite, priklauso nuo krypties:

| Judinate | Tipas | Pasirenka |
|---|---|---|
| Pajudinus iš kairės į dešinę | Langas | Tik objektus, **visiškai esančius** langelyje |
| Pajudinus iš dešinės į kairę | Kirtimas | Objektus, esančius langelyje, **ir** objektus, kuriuos jis liečia |

1. Nubrėžkite keletą persidengiančių linijų ir apskritimų.
2. Spustelėkite tuščią vietą kairėje nuo kai kurių objektų, pajudinkite į dešinę ir spustelėkite dar kartą. Pasirenkami tik visiškai viduje esantys objektai.
3. Paspauskite {{key:Esc}}.
4. Spustelėkite tuščią vietą dešinėje, pajudinkite į kairę per kai kuriuos objektus ir spustelėkite dar kartą. Pasirenkama viskas, ko langelis liečia.
5. Laikykite {{key:Shift}} ir nubrėžkite langelį ar lasą per kai kuriuos pasirinktus objektus. Jie pašalinami iš pasirinkimo.

## Pirma pasirinkite, tada paleiskite komandą

1. Pasirinkite du apskritimus.
2. Įveskite `M` ir paspauskite {{key:Enter}}.

Istorijoje rašoma `2 rasta`, o raginimas iš karto pereina prie `Nurodykite bazinį tašką`. Baikite perkėlimą (žr. [Perkelti, kopijuoti, sukti, keisti mastelį ir veidrodinti](topic:modify-objects)).

Baigus komandą, pasirinkimas išvalomas, todėl kita komanda prasideda iš naujo.

Komandos, kurios taip priima pasirinkimą: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} ir {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} ir {{cmd:CHAMFER}} visada vietoj to prašo pasirinkti objektus po vieną; {{cmd:TRIM}} ir {{cmd:EXTEND}} priima vieną pasirinkimą arba kelią, kurį nuvilkate per dalis (žr. [Apkirpti ir pratęsti](topic:trim-and-extend)).

## Pirma komanda, tada pasirinkite

1. Įsitikinkite, kad nieko nepasirinkta ({{key:Esc}}).
2. Įveskite `E` ir paspauskite {{key:Enter}}. Raginimas rodo `Pasirinkite objektus:`.
3. Spustelėkite objektus arba vilkite langus ir kirtimus. Istorijoje skaičiuojamas kiekvienas pasirinkimas (`1 rasta`, `3 rasta`).
4. Baikite pasirinkimą paspausdami {{key:Enter}}, {{key:Space}} arba dešiniuoju pelės klavišu.

Objektai ištrinami, o istorijoje nurodoma, kiek.

Ties raginimu `Pasirinkite objektus:` taip pat galite įvesti:

- `ALL`, tada {{key:Enter}}: visi objektai, kuriuos galite redaguoti atidarytame skirtuke.
- `L` (arba `LAST`), tada {{key:Enter}}: paskiausiai nubrėžtas objektas.
- `P` (Ankstesnis): objektai, su kuriais dirbo paskutinė komanda, jei jie vis dar yra.
- `F` (Tvora): spustelėkite arba įveskite taškus išilgai linijos; pridedami visi objektai, kuriuos linija kerta. Paspauskite {{key:Enter}}, kad baigtumėte tvorą; `U` atšaukia paskutinį tašką.
- `W` (Langas) arba `C` (Kirtimas): du kampai, nepriklausomai nuo vilkimo krypties.
- `R` (Šalinti): nuo dabar spustelėjimai, langai ir tvoros objektus **pašalina**. Raginimas rodo `Pašalinkite objektus:`. `A` (Pridėti) grąžina atgal.
- `?`: šių parinkčių sąrašas istorijoje.

Šios parinktys raginime nerodomos, kaip AutoCAD.

## Pasirinkite vieną iš keleto persidengiančių objektų

Kur objektai persidengia arba liečiasi, spustelėjimas paima artimiausią. Norėdami gauti kitą:

1. Laikykite žymeklį ramiai virš vietos.
2. Paspauskite {{key:Tab}}. Kitas ten esantis objektas paryškinamas, o būsenos juostoje nurodoma, koks jis yra („2 iš 3: Linija sluoksnyje Walls“).
3. Paspauskite {{key:Tab}} dar kartą, kol paryškinamas norimas objektas, tada spustelėkite nejudindami.

Pajudinus žymeklį, pradedama iš naujo. Tai veikia, kai nevykdoma jokia komanda, ties `Pasirinkite objektus:` ir visur, kur komanda prašo pasirinkti vieną objektą.

## Pasirinkite pagal taisyklę: Greitasis pasirinkimas

{{cmd:QSELECT}} (`QS`, arba {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Greitasis pasirinkimas}}) pasirenka kiekvieną objektą, atitinkantį taisyklę, pavyzdžiui, kiekvieną apskritimą, kurio spindulys mažesnis nei 50, arba kiekvieną blokinę nuorodą, pavadinimu DOOR-900.

1. Atidarykite {{ui:Greitasis pasirinkimas}}.
2. Pasirinkite {{ui:Objekto tipas}} (sąraše nurodomas kiekvieno tipo skaičius), tada {{ui:Savybė}}: {{ui:Sluoksnis}}, {{ui:Spalva}}, o kai kuriems tipams – {{ui:Ilgis}}, {{ui:Spindulys}}, {{ui:Plotas}}, {{ui:Teksto aukštis}}, {{ui:Teksto turinys}}, {{ui:Bloko pavadinimas}} arba {{ui:Brūkšniuotės šablonas}}.
3. Pasirinkite {{ui:Operatorius}} ir {{ui:Reikšmė}}. `*` atitinka su pakaitos simboliais (`DOOR-*`); {{ui:Pasirinkti viską}} paima visus to tipo objektus. Apačioje rodomas skaičius, kiek atitinka, kol renkatės.
4. {{ui:Kaip taikyti}}: įtraukti atitinkančius arba viską kita. {{ui:Taikyti}} {{ui:Dabartinis pasirinkimas}} susiaurina tai, ką buvote pasirinkę; {{ui:Pridėti prie dabartinio pasirinkimo}} prideda prie jo.
5. Spustelėkite {{ui:Pasirinkti}}. Tada paleiskite norimą komandą: ji naudoja pasirinkimą.

## Pasirinkite panašius

Pasirinkite vieną ar kelis objektus ir įveskite {{cmd:SELECTSIMILAR}} (`SIM`), arba pasirinkite {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Pasirinkti panašius}}. Pasirenkami visi to paties tipo, tame pačiame sluoksnyje ir tos pačios spalvos objektai; blokinėms nuorodoms reikia to paties bloko, brūkšniuotėms – to paties šablono. Įveskite `SE` ties raginimu `Pasirinkite objektus`, kad pasirinktumėte, ką turi atitikti.

## Pasirinkite dabar, naudokite vėliau

Įveskite `SELECT` ir paspauskite {{key:Enter}}, pasirinkite objektus bet kuriuo iš aukščiau nurodytų būdų ir paspauskite {{key:Enter}}. Jie lieka pasirinkti kitai komandai, o `P` juos vėl pasirenka vėlesniame raginime `Pasirinkite objektus:`.

## Pasirinkite viską

Kai nevykdoma jokia komanda, paspauskite {{key:Mod+A}} arba įrankių juostos meniu {{ui:Redagavimas}} › {{ui:Daugiau}} pasirinkite {{ui:Pasirinkti viską}}, kad pasirinktumėte visus objektus, kuriuos galite redaguoti atidarytame skirtuke. Jei komandų eilutėje jau įvedėte tekstą, {{key:Mod+A}} pasirenka tą tekstą: pirmiausia paspauskite {{key:Esc}}, kad jį išvalytumėte. Ties raginimu `Pasirinkite objektus:` įveskite `ALL`. {{ui:Nepasirinkti nieko}} tame pačiame meniu arba {{key:Esc}} išvalo pasirinkimą.

:::tip
Jei norite, kad kiekvienas spustelėjimas pakeistų pasirinkimą (o {{key:Shift}} – pridėtų prie jo), nustatykite {{ui:Spustelėjimas ant objektų}} į {{ui:Pakeičia pasirinkimą}} [Parametrai](topic:settings).
:::

## Ko negalima pasirinkti

- Objektai sluoksnyje, kuris yra **išjungtas**, **užšaldytas** arba **užrakintas**. Užrakinti objektai lieka matomi, ir į juos vis dar galima prisilipti, bet jų negalima pasirinkti ar keisti.
- Lapo skirtuke – modelis, rodomas vaizdo lange. Pasirenkate paties lapo objektus (antraštės bloką, pastabas, vaizdo langų rėmus). Norėdami redaguoti modelį, eikite į skirtuką {{ui:Modelis}}.

## Greitas trynimas

Pasirinkite objektus, tada paspauskite {{key:Delete}} (arba {{key:Backspace}}, kai komandų eilutėje nėra žymeklio). „Mac“ klaviatūroje klavišas, pažymėtas delete, veikia, kai jau spustelėjote brėžinyje; kai žymeklis yra komandų eilutėje, paspauskite kartu fn ir delete. Tai paleidžia {{cmd:ERASE}} pasirinkimui. Jei nieko nevyksta, komandų eilutėje kažką įvedėte: paspauskite {{key:Esc}} arba vietoj to įveskite `E` ir paspauskite {{key:Enter}}.

## Dažnos klaidos

- **Langas pasirinko per mažai.** Vilkote iš kairės į dešinę, o tai paima tik visiškai viduje esančius objektus. Kirtimui vilkite iš dešinės į kairę.
- **Spustelėjimas tuščioje vietoje pradėjo langelį.** Vienas spustelėjimas tuščioje vietoje pradeda langą; antras spustelėjimas jį baigia. Paspauskite {{key:Esc}} arba dešiniuoju pelės klavišu, kad atsisakytumėte.
- **Spustelėjimas tuščioje vietoje atleido pasirinkimą.** Taip ir yra, nebent laikote {{key:Shift}}. Norėdami, kad tokiu spustelėjimu pasirinkimas liktų ir būtų išvalomas tik su {{key:Esc}}, nustatykite {{ui:Spragtelėjimas tuščioje vietoje}} į {{ui:Palieka pasirinkimą}} [Parametrai](topic:settings#clicking-an-empty-spot).
- **Komanda panaudojo ne tuos objektus.** Kai pradėjote, kažkas dar buvo pasirinkta. Prieš komandą paspauskite {{key:Esc}}, kad pradėtumėte nieko nepasirinkę.
- **Po komandos nieko nepasirinkta.** Taip ir turi būti: baigta komanda išvalo pasirinkimą.
