---
title: Siųsti brėžinį lazeriui
summary: Atidaryti Lazerio skydelį, nustatyti, ką daro kiekvienas sluoksnis (pjauti, žymėti, graviruoti, užpildyti, paveikslėlis), peržiūrėti galvutės judesius, įrašyti GRBL lazerio G-code arba jį siųsti iš naršyklės po darbo rėmelio apibrėžimo.
keywords: lazeris, lazerinis pjovimas, lazerinis graviravimas, GRBL, G-code, gcode, graviruoti, užpildyti, dithering, paveikslėlio graviravimas, žymėti, pjauti, Web Serial, darbo rėmelis, galia, greitis, perėjimai, LASER, LASERCUT, CNC
from: 72b56db0
---

Skydelis {{ui:Lazeris}} paverčia brėžinio sluoksnius programa lazeriui, valdomam GRBL (daugumai mėgėjiškų ir mažų dirbtuvių diodinių ir CO2 valdiklių). Įveskite `LASER` (arba `LASERCUT`) ir paspauskite {{key:Enter}}, arba pasirinkite {{ui:Lazeris…}} {{ui:Daugiau}} meniu grupėje {{ui:Vaizdas}}. Juostos stiliuose jis yra {{ui:Failas}} meniu ir šalia {{ui:Spausdinti}}. Skydelis atsiveria virš brėžinio ir lieka atviras, kol braižote: peržiūra seka kiekvieną pakeitimą.

:::warning
Kiekvieną nustatymą pirmiausia išbandykite ant laužo, dėvėkite akių apsaugą, tinkančią jūsų lazeriui, laikykite dangtį uždarytą, kur jis yra, ir niekada nepalikite veikiančio lazerio be priežiūros. Pradinės sluoksnių reikšmės yra vietos rezervai, o ne rekomendacijos bet kokiai medžiagai.
:::

## Kas siunčiama

Skydelis skaito modelį (ne lapus), esantį įjungtuose ir atšildytuose sluoksniuose:

- Linijos, lankai, apskritimai, polilinijos (lankų segmentai lieka lankais), elipsės ir splainai. Figūra, kuri baigiasi ten, kur prasidėjo, laikoma uždara.
- Blokai išardomi: objektas sluoksnyje 0 bloko viduje siunčiamas su bloko nuorodos sluoksniu.
- Brūkšniuotė siunčia savo kontūrą, todėl užbrūkšniuotas logotipas ant sluoksnio **Užpildyti figūras** yra užpildomas.
- Paveikslėlis (`IMAGEATTACH`) graviruojamas sluoksnyje, nustatytame į **Graviruoti paveikslėlį**, kai jis yra stačias (nepasuktas ir nepakreiptas) ir jo failas atvertas CadCraft.
- Tekstas, matmenys, nukreipiamosios linijos, taškai ir konstrukcinės linijos nesiunčiami; skydelis praneša, kiek jų praleido. Norėdami išdeginti tekstą, nubrėžkite raides kaip figūras arba užbrūkškniuokite jas.

Dydžiai siunčiami milimetrais iš brėžinio vienetų (`UNITS`): brėžinys coliais dauginamas iš 25.4. Brėžinys be nustatytų vienetų siunčiamas kaip vienas vienetas į vieną milimetrą. Pažymėkite {{ui:Tik pasirinktus objektus}}, kad siųstumėte dalį brėžinio.

## Pasirinkite, ką daro kiekvienas sluoksnis

Kiekvienas sluoksnis, kuriame yra kas nors, yra eilutė. {{ui:Atlieka}} nustato **Pjauti**, **Žymėti**, **Graviruoti linijas**, **Užpildyti figūras**, **Graviruoti paveikslėlį** arba **Nesiunčiama**, su {{ui:Galia %}}, {{ui:Greitis mm/min}} ir {{ui:Perėjimai}} skaičiumi. Kiekvienas pakeitimas yra vienas atšaukiamas žingsnis ir išsaugomas brėžinyje: DWG (kiekviena CadCraft įrašoma versija) ir DXF išsaugo nustatymus, todėl brėžinys kitą kartą atsidaro su jais. Kitos programos failą atidaro kaip įprastai; jos mato vieną nenaudojamą bloką, pavadintą CADCRAFT_LASER (jo išvalymas ten pašalina nustatymus).

- **Užpildyti** išdegina uždarų figūrų vidų linijomis, atstumu {{ui:Eilučių tarpas}}, esant {{ui:Kampas}}, abiem kryptimis arba viena, su perviršiu, kad galvutė pasiektų pilną greitį, kai lazeris įsijungia; kryžminis užpildymas prideda antrą perėjimą 90°. Figūra su skyle prie skylės lieka atvira.
- **Graviruoti paveikslėlį** paverčia paveikslėlį taškais (Floyd–Steinberg, Atkinson, tvarkingas arba paprastas juodai baltas pagal slenkstį) arba, su *Pilkųjų tonų*, į kintamą galią.
- Tvarka: pirmiausia paveikslėliai ir užpildymai, tada linijų graviravimas, tada žymėjimai, tada pjovimai, kad išpjaunama detalė nejudėtų, kol ji graviruojama. Viename sluoksnyje keliai eina **vidumi pirma** (skylė prieš plokštę, kurioje ji yra), artimiausias – kitas.

## Peržiūrėkite, tada įrašykite

Peržiūra rodo, ką daro galvutė: deginamos linijos – spalva, greiti judesiai – pilka, o aplink viską, kas degs, – žalias rėmelis. Žemiau rodomi dydis, degimo ilgis ir laiko įvertinimas (be pagreičio; tikra mašina užtrunka ilgiau). {{ui:Įrašyti G kodą…}} įrašo GRBL lazerio režimo G-code: `$32=1`, `M4` (arba `M3`) su S reikšmėmis, `G0` ir `G1` judesius, `M5` pabaigoje. X0 Y0 yra darbo apatinis kairysis kampas, nebent pasirinksite brėžinio pradžios tašką: savo mašinos darbo nulį nustatykite ten.

## Siųsti iš naršyklės

Chrome ir Edge naršyklėse {{ui:Prijungti…}} klausia, kurį USB prievadą naudoja lazeris. Nieko neprisijungia ir nesiunčia, kol nespausite mygtuko. Pirmiausia paspauskite {{ui:Apibrėžti darbą rėmeliu}}: galvutė nubrėžia darbo dėžutę su išjungtu lazeriu (arba mažesne galia, kurią nustatėte nukreipiamajam spinduliui), kad matytumėte, kur bus deginama. Tik tada įsijungia {{ui:Siųsti darbą}}, ir jis išsijungia, jei ką nors pakeisite. {{ui:Pristabdyti}} sulaiko galvutę, {{ui:Sustabdyti}} ją sulaiko, iš naujo nustato valdiklį (lazeris išsijungia) ir siunčia `M5`. Kur nėra Web Serial (Firefox, Safari ir CadCraft Studio, kuris dar neturi Web Serial), skydelis siūlo tik įrašymą: įrašykite G-code ir siųskite jį savo lazerio programa.

## Dar neįgyvendinta

Dar neįgyvendinta: kitų valdiklių formatai (Ruida, Marlin lazeriai, gamintojų failai), skirtukai ir įvedimo linijos, pjūvio poslinkis, medžiagų bibliotekos, sukimo ir Z ašys, kameros lygiavimas, tekstas kaip kontūrai.
