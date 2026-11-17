---
title: Jūsų mygtukai (Mano įrankiai)
summary: Pridėkite įrankių juostos mygtukus, kurie vykdo jūsų makrokomandas, suteikite jiems spartiuosius klavišus, dalinkitės jais kaip failu ir perkelkite mygtukus iš CUIx tinkinimo failo.
keywords: mano įrankiai, pasirinktiniai mygtukai, įrankių juostos mygtukai, makrokomanda, makrokomandos, cui, cuix, tinkinti, meniu, spartieji klavišai, klaviatūros spartieji klavišai, diesel, ^c^c, importuoti mygtukus, eksportuoti mygtukus
from: 36618802
---

## Ką išmoksite

Kaip įdėti savo mygtukus į įrankių juostą, kiekvienas vykdo makrokomandą, parašytą taip, kaip ją rašo AutoCAD, kaip suteikti mygtukui klavišą ir kaip perkelti CUIx failo mygtukus.

## Pridėti mygtuką

1. Atverkite {{ui:Parametrai}} ({{key:Mod+,}}) ir likite skirtuke {{ui:CadCraft}}. Slinkite iki {{ui:Mano įrankiai}}.
2. Spustelėkite {{ui:Pridėti mygtuką…}}.
3. Užpildykite langelį:
   - {{ui:Grupė}}: įrankių juostos grupė, į kurią jis patenka, pavyzdžiui `Mano įrankiai`. Naujas pavadinimas sukuria naują grupę.
   - {{ui:Etiketė}}: žodžiai ant mygtuko.
   - {{ui:Makrokomanda}}: ką jis įveda, pavyzdžiui `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Spartusis klavišas}}: spustelėkite langelį ir paspauskite klavišus, pavyzdžiui {{key:Ctrl+Alt+B}}.
   - {{ui:Piktograma}}: PNG arba SVG paveikslėlis iki 64 KB, arba nieko (rodoma žvaigždutė).
4. Spustelėkite {{ui:Įrašyti}}.

Mygtukas atsiranda įrankių juostos pabaigoje, savo grupėje. Spustelėkite jį arba paspauskite jo klavišą, kad paleistumėte. {{ui:Redagavimas}} ir {{ui:Naikinti}} sąraše keičia arba pašalina jį.

## Rašyti makrokomandą

Makrokomanda yra tai, ką įvestumėte komandų eilutėje, su keliais specialiais ženklais:

| Ženklas | Reiškia |
|---|---|
| `^C` | Nutraukia tai, kas vykdoma (`^C^C` yra įprasta pradžia) |
| `;` arba tarpas | {{key:Enter}} |
| `\` | Laukia jūsų: spustelėjimo arba įvesto atsakymo, tada makrokomanda tęsiasi |
| `_` arba `.` prieš komandą | Priimama ir ignoruojama (tarptautiniai ir įmontuoti pavadinimai) |
| `*` pačioje pradžioje | Paleidžiama iš naujo kiekvieną kartą, kai baigiasi, kol paspausite {{key:Esc}} |
| `^O`, `^G` | Įjungia arba išjungia {{ui:Ortogonalus}} režimą ir {{ui:Tinklelis}} |
| `$M=` | Likusi dalis yra DIESEL. Skaitomos tik `$(if,…)`, `$(getvar,…)`, `$(=,…)` ir `$(eq,…)`; mygtukas, naudojantis ką nors kita, apie tai praneša ir nieko nedaro |

Pavyzdžiai:

- `^C^C_line;0,0;@100,0;;` nubraižo 100 ilgio liniją nuo pradžios taško.
- `^C^C_circle;\25;` paprašo jūsų centro, tada nubraižo 25 spindulio apskritimą ten.
- `^C^C_turnright` pasuka vaizdą 90° į dešinę.

## Spartieji klavišai

Klavišui reikia {{key:Mod}} (Ctrl, arba Cmd Mac kompiuteryje) arba {{key:Alt}} su raide ar skaitmeniu, arba vieno iš laisvų funkcinių klavišų: {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Raidės savaime eina į komandų eilutę. Klavišai, kuriuos jau naudoja CadCraft, programa ar naršyklė (pavyzdžiui {{key:Ctrl+S}} arba {{key:Ctrl+Z}}), ir klavišai, kuriuos jau turi kitas mygtukas, atmetami, o langelyje parašoma priežastis.

## Dalinkitės savo mygtukais

- {{ui:Eksportuoti…}} įrašo visas grupes ir mygtukus (su piktogramomis ir klavišais) kaip `my-tools.json`.
- {{ui:Importuoti…}} prideda tokio failo grupes po jūsų. Jau naudojamas grupės pavadinimas gauna „(2)“; klavišas, kuris susidurtų, paliekamas, o skydelis apie tai praneša.

## Perkelti mygtukus iš CUIx failo

1. Spustelėkite {{ui:Importuoti CUIx…}} ir pasirinkite `.cuix` failą.

Jo įrankių juostos ir juostelės skydeliai tampa grupėmis, kiekvienas mygtukas su savo makrokomanda ir paveikslėliu (PNG, arba BMP, paverstas į PNG). Jo spartieji klavišai patenka į atskirą grupę, kiekvienas mygtukas su savo klavišu; komandų pseudonimai, kuriuos jis gali turėti, patenka į grupę {{ui:Pseudonimai}}. Skydelis rodo, kas buvo perkelta.

:::note
Failas tik skaitomas. Komandos, kurių CadCraft neturi, išvardijamos pagal pavadinimą, o ne spėjamos: jų mygtukai, paspaudus, tai parodo. DIESEL, išskyrus kelias aukščiau nurodytas funkcijas, meniu, pelės mygtukai ir darbo erdvės neskaitomi.
:::

## Verta žinoti

- Mygtukai saugomi šioje naršyklėje (arba šioje darbalaukio programoje), o ne brėžiniuose.
- Mygtukas vykdomas per komandų eilutę, todėl jis anuliuojamas kaip bet kas, ką įvedate: po vieną {{key:Mod+Z}} kiekvienai jo vykdytai komandai.
