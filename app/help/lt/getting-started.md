---
title: Darbo pradžia su CadCraft
summary: Ką daro CadCraft brėžimo programa, kur ji veikia ir jūsų pirmasis brėžinys nuo tuščio ekrano iki įrašyto failo.
keywords: pradžia, pirmasis brėžinys, naujas, atverti, įrašyti, įrašyti kaip, pradėti, pamoka, įvadas, greitoji pradžia
from: 1a56c575
---

CadCraft yra 2D brėžimo programa. Brėžiate ir redaguojate linijas, lankus, polilinijas, tekstą, matmenis ir blokus, sudarote lapus su antraštės blokais ir vaizdo langais bei spausdinate juos į PDF. Ji atveria DWG ir DXF brėžinius ir įrašo juos kaip DWG arba DXF.

Veikia jūsų interneto naršyklėje. Nieko nereikia įdiegti: svetainė suteikia adresą, o visa programa įkeliama į puslapį. Jūsų brėžiniai atidaromi iš jūsų kompiuterio ir įrašomi atgal į jį. **Niekas neįkeliama.**

Jei anksčiau brėžėte, perskaitykite [Ateinant iš kitos brėžimo programos](topic:coming-from) po šio puslapio. Dauguma įpročių išlieka, o keli, kurie neišlieka, ten išvardyti.

## Norite vadovaujamo mokymo?

Įveskite `TOUR` (arba spustelėkite {{ui:Take the tour}} pradžios kortelėje, arba {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Take the tour again}}). Šeši trumpi žingsniai dėžutėje virš brėžinio: nubrėžkite liniją ir apskritimą, perkelkite jį, nukirpkite, ištrinkite ką nors ir nurodykite matmenis. Kiekvienas žingsnis baigiasi, kai jį atliekate; galite praleisti žingsnį arba visą apžvalgą. Ji prasideda savaime tik pirmą kartą. [Komandų lapas](topic:cheat-sheet) pateikia 40 komandų, kurias naudosite dažniausiai, o [komandų žemėlapis](topic:command-map) – visas komandas.

## Ko jums reikia

- Naujausios Chrome, Edge, Firefox ar Safari naršyklės Mac, Windows ar Linux kompiuteryje. Žr. [Naršyklės ir platformos](common:browsers).
- Pelė su ratuku yra patogiausia. Jutiklinė planšetė tinka; žr. [Pelė, jutiklinė planšetė ir lietimas](topic:mouse-trackpad-touch).
- Klaviatūra. CadCraft valdomas įvestomis komandomis, kaip ir dauguma brėžimo programų.

## Idėja vienoje pastraipoje

Įvedate komandą (arba spustelite jos mygtuką), o apačioje esanti komandų eilutė po vieną klausia klausimų: „Nurodykite pirmąjį tašką“, „Nurodykite kitą tašką“. Į kiekvieną klausimą atsakote spustelėdami brėžinyje arba įvesdami reikšmę, o tada paspausdami {{key:Enter}}. Paspaudus {{key:Esc}}, veiksmas atšaukiamas. Tai yra visas sąveikos modelis; viskas kita – detalės.

## Jūsų pirmasis brėžinys

Nubrėšite 4000 x 3000 stačiakampį iš linijų, įdėsite apskritimą viduryje ir įrašysite failą.

1. Atidarykite CadCraft. Apačioje esanti komandų eilutė rodo `Komanda:`, o brėžinio srityje matote trumpą kortelę „Pradėti brėžinį“.
2. Įveskite `L` ir paspauskite {{key:Enter}}. Nereikia pirmiausia spausti komandų eilutės: rašymas bet kur patenka ten.
3. Eilutė pasikeičia į `Nurodykite pirmąjį tašką:`. Įveskite `0,0` ir paspauskite {{key:Enter}}.
4. Įveskite `@4000,0` ir paspauskite {{key:Enter}}. Pasirodo linija, einanti dešinėn. `@` reiškia „nuo paskutinio taško“.
5. Įveskite `@0,3000` ir paspauskite {{key:Enter}}.
6. Įveskite `@-4000,0` ir paspauskite {{key:Enter}}.
7. Įveskite `C` ir paspauskite {{key:Enter}}. `C` yra parinktis Uždaryti (C): paskutinė linija grįžta į pirmąjį tašką ir komanda baigiasi.
8. Spustelėkite {{ui:Extents}} grupėje {{ui:View}} įrankių juostoje. Stačiakampis užpildo ekraną.

Dabar turėtumėte matyti keturias linijas, sudarančias stačiakampį, o istorija virš komandų eilutės išvardija tai, ką įvedėte.

9. Įveskite `C` ir paspauskite {{key:Enter}}, kad paleistumėte apskritimo komandą.
10. Įveskite `2000,1500` ir paspauskite {{key:Enter}} centrui.
11. Įveskite `500` ir paspauskite {{key:Enter}} spinduliui.

Stačiakampio viduryje pasirodo apskritimas.

12. Paspauskite {{key:Mod+S}} arba spustelėkite {{ui:Save}} grupėje {{ui:File}}.

Naršyklė atsisiunčia `Drawing1.dwg` į įprastą atsisiuntimų aplanką, o istorija praneša, kad įrašyta kopija kaip DWG. Tą failą CadCraft ir daugelis kitų CAD programų gali atidaryti iš naujo. (Jei anksčiau šioje naršyklėje pasirinkote DXF per {{ui:Save as}}, naujas brėžinys įrašomas kaip `Drawing1.dxf`.)

:::tip
Tuščioje komandų eilutėje paspaudę {{key:Enter}} pakartosite paskutinę komandą. Jei norite, vietoj {{key:Enter}} galite paspausti {{key:Space}}: už teksto ribų jis veikia taip pat.
:::

## Atidaryti esamą brėžinį

1. Paspauskite {{key:Mod+O}} arba spustelėkite {{ui:Open}}.
2. Failų naršyklėje pasirinkite `.dwg` arba `.dxf` failą.

Taip pat galite vilkti DWG arba DXF failą iš {{pick:mac=Finder|windows=File Explorer|linux=jūsų failų tvarkyklės}} ir paleisti jį ant brėžinio srities. Failas nuskaitomas puslapyje; jis niekada nepalieka jūsų kompiuterio.

Žr. [Failai: kas atveriama, kas įrašoma](topic:files), kas išsaugoma ir kas konvertuojama.

## Įrašymas: ko tikėtis

Įrašymas naršyklėje veikia kitaip nei darbalaukio programoje:

- {{ui:Save}} visada **atsisiunčia naują kopiją**. Atidaryto failo neperrašo. Jei aplanke Downloads jau yra failas tuo pačiu vardu, naršyklė paprastai prideda numerį, pavyzdžiui, `Drawing1 (1).dwg`.
- {{ui:Save}} naudoja brėžinio formatą: DWG, jei atidarėte DWG, DXF, jei atidarėte DXF. Norėdami pasirinkti, paspauskite {{key:Mod+Shift+S}} arba spustelėkite {{ui:Save as}}, tada pasirinkite {{ui:DWG}} (ir jo versiją), {{ui:DXF R12}} arba {{ui:DXF 2000}}. Žr. [Įrašymas](topic:files#saving).
- Atidaryto failo niekada nekeičiama.
- Atidarius kitą failą arba {{ui:New}}, jis patenka į savo skirtuką virš brėžinio, todėl niekas, ką turite atidaryta, nėra uždaromas. Jei uždarote brėžinio skirtuką arba paliekate puslapį su neįrašytais pakeitimais, CadCraft pirmiausia paklaus: {{ui:Save a copy first}}, atmesti arba {{ui:Cancel}}. Uždarius naršyklės skirtuką, rodomas pačios naršyklės klausimas „Palikti svetainę?“.

Debesų įrašymas dar nepasiekiamas. Kur keliauja jūsų failai ir kodėl jie išlieka privatūs, paaiškinta [Jūsų failai ir privatumas](common:your-files).

## Kur eiti toliau

Paspauskite {{key:F1}} arba spustelėkite {{ui:Help}} viršutinėje juostoje, kad bet kada atvertumėte šią žinyno dalį šalia brėžinio. Ji veikia be jokio ryšio.

- [CadCraft ekranas](topic:workspace) įvardija kiekvieną juostą ir skydelį.
- [Brėžimas koordinatėmis](topic:draw-with-coordinates) yra geriausias pirmasis pratimas.
- [Klaviatūra ir pelė](topic:keyboard) išvardija visus klavišus.
- Įveskite `HELP` komandų eilutėje, kad gautumėte visų komandų sąrašą, arba skaitykite [Komandų nuoroda](topic:commands).
