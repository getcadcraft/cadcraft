---
title: Kopijavimas, įklijavimas ir dubliavimas
summary: Kopijuokite objektus į CadCraft iškarpinę, įklijuokite juos ten, kur spustelite, arba vietoje, dubliuokite pele ir perkelkite darbą iš kito brėžinio ar kortelės.
keywords: kopijuoti, iškirpti, įklijuoti, įklijuoti vietoje, dubliuoti, iškarpinė, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, tarp brėžinių, kita kortelė, bazinis taškas
from: 4b9f29d3
---

## Ko išmoksite

Kaip kopijuoti objektus į iškarpinę, įklijuoti juos ten, kur spustelite, įklijuoti pagal jų pačių koordinates, dubliuoti pele, iškirpti ir nešti į kitą brėžinį. Viskas čia taip pat pasiekiama įrankių juostos grupėje {{ui:Redagavimas}}: {{ui:Kopijuoti}}, {{ui:Įklijuoti}} ir meniu {{ui:Daugiau}}.

## Kopijuokite ir įklijuokite ten, kur spustelite

1. Pasirinkite objektus: spustelėkite juos arba nutempkite langą.
2. Paspauskite {{key:Mod+C}} arba spustelėkite {{ui:Kopijuoti}} grupėje {{ui:Redagavimas}}. Komandų eilutėje nurodoma, kiek objektų nukopijuota. Jie lieka pasirinkti.
3. Paspauskite {{key:Mod+V}} arba spustelėkite {{ui:Įklijuoti}}. Kopija atsiranda ant žymeklio ir kabo nuo nukopijuotų objektų apatinio kairiojo kampo.
4. Spustelėkite, kur tas kampas turi būti, arba įveskite tašką, pavyzdžiui `2000,500`, ir paspauskite {{key:Enter}}. Objektų prisitraukimai ir {{ui:Ortogonalus}} veikia įprastai.

Įklijuoti objektai pasirinkti, todėl juos galima iš karto perkelti ar keisti. Vienas {{key:Mod+Z}} pašalina visą įklijavimą.

:::tip
Norite, kad kopija kabotų nuo pasirinkto taško, pavyzdžiui sienos kampo? Įveskite `COPYBASE`, spustelėkite bazinį tašką, pasirinkite objektus ir paspauskite {{key:Enter}}. Tada įklijavimas padeda tą tašką ten, kur spustelite. Kad kiekviena kopija kabotų nuo savo centro, o ne nuo apatinio kairiojo kampo, pakeiskite {{ui:Įklijavimo taškas}} [CadCraft parametruose](topic:settings).
:::

## Įklijuokite vietoje

Paspauskite {{key:Mod+Shift+V}} arba pasirinkite {{ui:Įklijuoti vietoje}} meniu {{ui:Daugiau}}. Kopija įdedama tiksliai į tas koordinates, iš kurių buvo nukopijuota, be spustelėjimo. Naudokite norėdami nešti objektus į kitą brėžinį į tą pačią vietą arba iš vieno lapo į kitą lapą.

## Dubliuokite ir perkelkite

1. Pasirinkite objektus.
2. Paspauskite {{key:Mod+D}} arba pasirinkite {{ui:Dubliuoti ir perkelti}} meniu {{ui:Daugiau}}.
3. Kopija guli ant originalo ir juda kartu su žymekliu. Spustelėkite, kur ji turi būti. Taip pat galite įvesti poslinkį, pavyzdžiui `@0,-600`, arba atstumą link žymeklio.

Paspaudus {{key:Esc}} prieš spustelėjimą, nieko nelieka. Dublikatas yra vienas anuliavimo žingsnis ir neliečia iškarpinės.

## Iškirpkite

Paspauskite {{key:Mod+X}} arba pasirinkite {{ui:Iškirpti}} meniu {{ui:Daugiau}}. Objektai patenka į iškarpinę ir ištrinami iš brėžinio viename anuliavimo žingsnyje. Įklijuokite juos atgal su {{key:Mod+V}} arba {{key:Mod+Shift+V}}.

## Tarp brėžinių ir kortelių

Iškarpinė išlaiko savo kopiją, kai atidarote kitą brėžinį, ir ji bendra visoms CadCraft kortelėms šioje naršyklėje. Nukopijuokite vienoje kortelėje, tada paspauskite {{key:Mod+V}} kitoje.

- Blokai, kuriuos naudoja objektai, keliauja kartu. Jei brėžinys, į kurį įklijuojate, jau turi bloką tuo pačiu pavadinimu, naudojama jo paties apibrėžtis, kaip ir AutoCAD.
- Sluoksniai, kuriuos naudoja objektai, pridedami su spalva ir nustatymais, kuriuos jie turėjo.
- Kopija nekeičiama pagal mastelį, kai abiejų brėžinių vienetai skiriasi: CadCraft apie tai praneša, o vėliau galite naudoti {{cmd:SCALE}}.
- Vaizdo langai lieka savo lape; kopijoje jie praleidžiami.

:::note
Iškarpinė yra CadCraft nuosavybė. Negalite įklijuoti CadCraft objektų į kitą programą arba įklijuoti iš kitos programos į CadCraft: išsaugokite kaip DWG arba DXF. Labai didelė kopija gali būti per didelė bendrinti tarp kortelių; tada komandų eilutėje rašoma, kad įklijuoti gali tik ši kortelė.
:::

## Dažniausios klaidos

- **{{key:Mod+V}} įklijavo tekstą į komandų eilutę.** Ten jau buvo įvestas tekstas, todėl klavišai veikė tekstą. Paspauskite {{key:Esc}}, kad išvalytumėte, tada vėl paspauskite {{key:Mod+V}}.
- **Nieko neįvyko, o būsenos juostoje rašoma baigti dabartinę komandą.** Veikia kita komanda. Pirmiausia paspauskite {{key:Esc}}.
- **Įklijavimas nukrito toli.** Jis kabo nuo nukopijuoto dalyko apatinio kairiojo kampo, o tai gali būti tolimas objektas, pasirinktas per klaidą. Naudokite {{ui:Įklijuoti vietoje}} arba kopijuokite su `COPYBASE`.
- **„Nieko neįklijuota“ su priežastimi.** To, ką kita kortelė paliko iškarpinėje, nepavyko perskaityti (sugadinta arba pakeista rankiniu būdu). Nukopijuokite objektus iš naujo.

Visą klavišų sąrašą žr. [Klaviatūra ir pelė](topic:keyboard), o kiekvieną užklausą – [Komandų žinynas](topic:commands#clipboard).
