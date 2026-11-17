---
title: Brėžinio tvarkymas naudojant klases
summary: Klasės riša objektus antru būdu, kertant sluoksnius (Lighting-Fixtures-Spot): rodykite, slėpkite ir stilizuokite jas, suteikite spalvą, linijos tipą, linijos storį, užpildą ir teksto stilių, kuriuos objektai gali paimti „pagal klasę“, ir nustatykite klasę, į kurią patenka nauji objektai.
keywords: klasė, klasės, CLASSES, CLS, CLASS, pagal klasę, ByClass, aktyvi klasė, naudoti kuriant, Nėra, projektinis sluoksnis, sluoksnio mastelis, aukštis, Vectorworks
from: 672de9cb
---

Sluoksniai nurodo, *kur* objektas priklauso brėžinyje; klasės nurodo, *kas* jis yra. Siena sluoksnyje `Level 1` gali priklausyti klasei `Walls-Exterior`, o šviestuvas sluoksnyje `Ceiling` – klasei `Lighting-Fixtures-Spot`. Galite visus šviestuvus visuose sluoksniuose paslėpti vienu metu arba atspausdinti visas išorines sienas storesne linija, nieko nekeldami iš vieno sluoksnio į kitą.

Kiekvienas objektas pradžioje priklauso klasei **Nėra**. Brėžinys be savų klasių veikia kaip anksčiau.

## Atidaryti klasių skydelį

Įveskite `CLASSES` (arba `CLS`) ir paspauskite {{key:Enter}}, arba pasirinkite {{ui:Klasės…}} meniu {{ui:Daugiau}} grupėje {{ui:Vaizdas}}. Skydelis atsidaro virš brėžinio ir lieka atviras braižant.

- **Pridėti klasę:** įrašykite jos pavadinimą viršutiniame laukelyje ir paspauskite {{key:Enter}}. Brūkšnelis `-` sukuria lygį: `Lighting-Fixtures-Spot` yra po `Lighting-Fixtures`, kuri yra po `Lighting`; trūkstami lygiai pridedami automatiškai.
- **Rodyti arba slėpti:** akis šalia klasės. Paslėpus klasę, paslepiamos ir visos jai pavaldžios klasės, ekrane ir popieriuje.
- **Aktyvi klasė:** apvalus mygtukas. Nauji nubraižyti objektai patenka į aktyvią klasę.
- **Pasirinkti klasę:** spustelėkite jos pavadinimą. Žemiau sąrašo esantys mygtukai ir nustatymai veikia su ja.

Kiekvienos eilutės gale esantis skaičius – kiek objektų yra toje klasėje (modelyje, lapuose ir blokų apibrėžimuose).

## Įdėti objektus į klasę

Pažymėkite objektus, skydelyje pasirinkite klasę ir spauskite {{ui:Nustatyti klasę}}. Pirma pažymėkite {{ui:Pagal klasę}}, kad objektai paimtų spalvą, linijos tipą, linijos storį, užpildą ir teksto stilių iš klasės. Taip pat galite:

- įvesti `CLASS`, kai objektai pažymėti, ir įvesti klasės pavadinimą (naujas pavadinimas sukuria klasę);
- įvesti `CLASS`, kai nieko nepažymėta, kad nustatytumėte aktyvią klasę; `?` parodo klases su jų skaičiais;
- naudoti skyrių {{ui:Klasė}} Savybių skydelyje: klasę ir jungiklį {{ui:… pagal klasę}} spalvai, linijos tipui ir linijos storiui (užpildui – brūkšniuotėms, teksto stiliui – tekstui);
- pažymėti pagal klasę komanda `QSELECT`: pasirinkite savybę {{ui:Klasė}}.

{{ui:Pažymėti jos objektus}} pažymi visus pasirinktos klasės objektus atvirame lape (arba modelyje).

## Kaip objektas braižomas: objektas, klasė, sluoksnis

Objekto spalva, linijos tipas, linijos storis, užpildas ir teksto stilius gali būti **pagal klasę**, lygiai kaip gali būti pagal sluoksnį. CadCraft ieško šia tvarka:

1. Paties objekto reikšmė, jei ji nėra „pagal klasę“.
2. Klasės reikšmė, kai objektas ją paima pagal klasę ir klasė ją turi.
3. Sluoksnio reikšmė.

Klasė, kurios spalva (ar linijos tipas ...) yra {{ui:Nenustatyta}}, perduoda objektą jo sluoksniui. Pasirinkite klasę ir žemiau mygtukų nustatykite jos {{ui:Spalva}}, {{ui:Linijos tipas}}, {{ui:Linijos storis}}, {{ui:Užpildas (brūkšniuotės)}} ir {{ui:Teksto stilius}}. Pažymėkite {{ui:Naudoti kuriant}}, kad nauji objektai, nubraižyti šioje klasėje, paimtų visas šias savybes pagal klasę.

Kiekvienas skydelio pakeitimas yra vienas {{ui:Anuliuoti}} žingsnis.

## Pervadinti ir naikinti

{{ui:Pervardyti}} redaguoja pavadinimą vietoje: paspauskite {{key:Enter}}, kad išsaugotumėte, arba {{key:Esc}}, kad paliktumėte. Pavaldžios klasės seka paskui (`Lighting-Spot` tampa `Light-Spot`, kai `Lighting` tampa `Light`), taip pat jų objektai ir perrašymai pagal rodinį.

{{ui:Naikinti}} pašalina klasę ir visas jai pavaldžias klases. Jų objektai perkeliami į **Nėra**. Vienas {{ui:Anuliuoti}} viską grąžina. **Nėra** negalima pervadinti ar panaikinti.

## Projektiniai sluoksniai

Pagal {{ui:Projektiniai sluoksniai}} kiekvienas sluoksnis gali turėti mastelį (`1:50`) ir aukštį. Projektinis sluoksnis yra įprastas sluoksnis: modelio erdvė ir lapai veikia kaip anksčiau, o mastelis ir aukštis išsaugomi brėžinyje įrankiams, kurie juos naudos.

## DWG ir DXF failuose

Klasės išsaugomos kiekvienoje DWG versijoje, kurią CadCraft įrašo, ir DXF (R12 ir 2000). Kiekvieno objekto klasė yra jo išplėstiniai duomenys (programa `CADCRAFT_CLASS`), todėl AutoCAD ir kitos programos ją išsaugo kartu su objektu. Klasių sąrašas, spalvos ir matomumas laikomi viename nenaudojamame bloke, pavadinimu `CADCRAFT_CLASSES`. Jei kita programa jį išvalo, CadCraft vis tiek randa kiekvieno objekto klasę, o klasės grįžta su numatytaisiais nustatymais.

Kitos programos klasių nepažįsta: jos braižo kiekvieną objektą pagal jo paties ar sluoksnio reikšmes.

Taip pat žr. [Rodinio klasių perrašymai](topic:viewport-overrides) ir [Brėžinio tvarkymas naudojant sluoksnius](topic:layers).
