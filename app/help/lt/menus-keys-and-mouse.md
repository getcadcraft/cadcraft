---
title: Meniu, klavišai ir pelė
summary: Pasirinkite meniu stilių, atitinkantį jūsų darbo būdą, suteikite bet kuriai komandai savo klavišą arba klavišą, kuris įveda komandą, perkelkite komandas tarp juostos skirtukų ir nustatykite, ką daro ratukas ir pelės mygtukai.
keywords: meniu stilius, meniu, juosta, įrankių juosta, komandų eilutė, spartieji klavišai, karštieji klavišai, klavišai, tinkinti, perpriskirti, spartieji klavišai, tekstiniai klavišai, pelė, ratukas, apversti, mastelio kryptis, vidurinis mygtukas, dešinysis mygtukas, slinkti, eksportuoti, importuoti, perjungimas, įprastas, klasikinis braižymas
from: 8bbf4f88
---

CadCraft komandas pasiekiate vienodai, kuriuo būdu bepasiektumėte, o komandų eilutė visada yra su savo pseudonimais (`L`, `C`, `TR` …). **Meniu stilius** tik nusprendžia, kur ekrane stovi mygtukai, kaip jie vadinasi ir kokie klavišai juos vykdo. Pasirinkite jį {{ui:Parametrai}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Meniu, klavišai ir pelė}}; pakeitimas įsigalioja iš karto, o ši naršyklė jį prisimena.

## Trys stiliai

| Stilius | Ką gaunate |
|---|---|
| {{ui:CadCraft}} | CadCraft savo įrankių juosta: Failas, Braižymas, Keitimas, Anotavimas, Parametrinis, Blokai, Lapai, Redaguoti ir Vaizdas, kiekvienas su {{ui:Daugiau}} meniu. Numatytasis. |
| {{ui:Klasikinis braižymas}} | Juosta, sudėta taip, kaip klasikinės 2D braižymo programos: meniu {{ui:Failas}} ir greitieji mygtukai, po to skirtukai {{ui:Pradžia}} (Braižymas, Keitimas, Anotavimas, Sluoksniai, Blokas, Ypatybės, Pagalbinės priemonės, Iškarpinė), {{ui:Įterpti}}, {{ui:Anotavimas}}, {{ui:Parametrinis}}, {{ui:Vaizdas}}, {{ui:Tvarkymas}}, {{ui:Išvestis}} ir {{ui:3D}}. Komandas rašykite kaip visada. Vidurinis mygtukas slenka; dešinysis spustelėjimas yra {{key:Enter}}, o vilkimas dešiniuoju mygtuku nieko nedaro. |
| {{ui:Juosta}} | Juosta su paprastais užduočių skirtukais: {{ui:Braižymas}}, {{ui:Keitimas}}, {{ui:Anotavimas}}, {{ui:Parametrinis}}, {{ui:Blokai}}, {{ui:Lapai}}, {{ui:Vaizdas}}, {{ui:3D}} ir {{ui:Įrankiai}}, su {{ui:Failas}} meniu ir greitaisiais mygtukais dešinėje. Vidurinis ir dešinysis mygtukai slenka, kaip ir CadCraft savajame stiliuje. |

Kiekvienas stilius išlaiko CadCraft klavišus: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, ir {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} braižymo pagalbinėms priemonėms. Raidės niekada nėra klavišai: CadCraft jas įveda į komandų eilutę.

Juostose taip pat yra sluoksnių skydelio įrankiai ir būsenos juostos braižymo pagalbinės priemonės. Skirtukas {{ui:3D}} užsipildo, kai atidaromas 3D skirtukas po brėžiniu; 3D įrankis, pasirinktas skirtuke „Modelis“, pirmiausia atidaro 3D skirtuką, o 2D įrankis, pasirinktas 3D skirtuke, pirmiausia grąžina į skirtuką „Modelis“.

:::tip
Klavišas, kuris priklauso CadCraft savajam išdėstymui, bet jūsų stilius jį priskyrė kitai komandai, neveikia, o būsenos juostoje rašoma, kur nukeliavo jo komanda („In My keys, Ortho is Ctrl+Alt+O“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ir rodyklės visada išlaiko savo prasmę. Kai vykdoma komanda arba komandų eilutėje rašomos raidės, klavišai priklauso komandų eilutei.
:::

## Pritaikykite sau

1. Pasirinkite stilių, artimiausią jūsų norams, tada spustelėkite {{ui:Tinkinti…}}.
2. Skiltyje {{ui:Klavišai ir meniu}} raskite komandą (padeda paieškos laukas). Spustelėkite {{ui:Pridėti raktą}} ir paspauskite klavišą. Spustelėkite klavišą, kad jį pašalintumėte.
3. Su juosta {{ui:Kur yra}} perkelia komandą į kitą skirtuką ir skydelį, į {{ui:Failas}} meniu arba į {{ui:Tik klavišai}}.
4. Skiltyje {{ui:Pelė}} nustatykite ratuką ir mygtukus, kurie slenka brėžinį.
5. Suteikite jam pavadinimą ir spustelėkite {{ui:Įrašyti}}.

Įrašius įmontuotą stilių, sukuriama jūsų pačių kopija („Mano klasikinis braižymas“); įmontuotasis niekada nekinta. Klavišas, priskirtas dviem komandoms, rodomas raudonai ir turi būti ištaisytas prieš įrašant.

## Klavišai, kurie įveda komandą

{{cmd:SHORTCUTS}} (Vaizdas › Daugiau › {{ui:Spartieji klavišai…}}) klavišui priskiria visą komandų eilutę, pavyzdžiui, {{key:Ctrl+Alt+L}} – `LINE` arba {{key:F9}} – `ZOOM E`. Šie klavišai priklauso naudojamam stiliui: pirmą kartą atidarius šią versiją, klavišai, kuriuos sukūrėte senesnėje versijoje, vieną kartą perkeliami į jūsų pačių stilių „Mano CadCraft klavišai“ ir veikia kaip anksčiau. Eksportuojant stilių, jie eksportuojami kartu.

## Pelė

- **Pelės ratukas**: {{ui:Slenkant aukštyn mastelis didėja}} (numatytasis) arba {{ui:Slenkant aukštyn mastelis mažėja}}, ir kaip greitai. Jutiklinės lentelės suspaudimas ar ištempimas visada keičia mastelį ta kryptimi, kuria judina pirštus.
- **Slinkti brėžinį**: vidurinis mygtukas, dešinysis mygtukas arba abu. Dešinysis spustelėjimas be vilkimo visada yra {{key:Enter}}. Kairysis mygtukas CadCraft visada pasirenka ir braižo, todėl jį pažymėjus čia nieko nekeičia.
- **Vilkimas 3D vaizduose**: 3D skirtukas kiekviename stile išlaiko savus mygtukus (kairysis sukasi orbita, vidurinis ir dešinysis slenka).

## Pasiimkite su savimi

{{ui:Eksportuoti}} įrašo naudojamą stilių į mažą `.ccinput.json` failą; {{ui:Importuoti…}} prideda vieną iš kito kompiuterio arba kolegos. Importuotas failas gali nurodyti tik CadCraft savąsias komandas: viskas kita iš jo praleidžiama ir suskaičiuojama būsenos juostoje. {{ui:Naikinti šį stilių}} pašalina vieną iš jūsų pačių stilių.

:::note
Šie nustatymai lieka šioje naršyklėje. {{ui:Naudoti šį stilių visose programose}} po stilių kortelėmis priverčia kiekvieną programą atsidaryti jai atitinkančiu stiliumi (savo įrankių juosta, juosta arba {{ui:Klasikinis braižymas}}), su pakeitimais, kuriuos padarėte kiekvienoje programoje. CadCraft neturi meniu juostos stiliaus: kai visoms programoms pasirenkama kitos programos meniu juosta, CadCraft išlaiko savo įrankių juostą.
:::

Susiję: [Klaviatūra ir pelė](topic:keyboard) · [CadCraft parametrai](topic:settings) · [Perėjimas iš kitos braižymo programinės įrangos](topic:coming-from) · [Komandų pseudonimai](topic:command-aliases)
