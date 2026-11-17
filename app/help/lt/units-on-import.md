---
title: Vienetai importuojant: failas nurodo savo vienetus arba jūsų pirma klausiama
summary: Kai į brėžinį įkeliamas failas nurodo savo vienetus, CadCraft juos konvertuoja ir apie tai praneša. Kai nenurodo, CadCraft klausia prieš ką nors įdėdamas ir prisimena jūsų atsakymą tam failui.
keywords: vienetai, importuoti, įterpti, xref, prisegti, XATTACH, INSERT, OBJ, DWG, DXF, taškų debesis, bibliotekos elementas, milimetrai, metrai, coliai, pėdos, mastelis, neteisingas dydis, per didelis, per mažas, 1000 kartų, klausti, prisimenama, INSUNITS
from: 558f1293
---

## Ką darysite

Įkelsite failą į brėžinį ir įsitikinsite, kad jis įkeliamas teisingu dydžiu.

## Žingsniai

1. Įkelkite failą įprastu būdu: `INSERT` › Failas, `XATTACH`, `POINTCLOUDATTACH` arba {{ui:Failai}} bibliotekos skydelyje.
2. Jei failas nurodo savo vienetus, nieko neklausiama. Komandinė eilutė parodo, kokius vienetus failas nurodo, ir mastelį, jei jie skiriasi nuo brėžinio.
3. Jei nenurodo, dialogas klausia **Failo vienetai**. Pasirinkite, koks yra vienas vienetas faile, ir spustelėkite {{ui:Naudoti šiuos vienetus}}. Iki atsakymo nieko nededama.
4. {{ui:Atšaukti}} (arba {{key:Esc}}) nieko neįkelia.

## Kurie failai nurodo savo vienetus

- **DWG ir DXF**: brėžinio įterpimo vienetai (`$INSUNITS`). Failo be jų klausiama.
- **Taškų debesys**: LAS ir LAZ su koordinačių sistema, E57, PTX ir PLY nurodo savo. Kitų klausiama.
- **OBJ**: niekada nenurodo vienetų. Jūsų klausiama.
- **glTF ir GLB**: metrai pagal formato taisyklę.
- **Paveikslėliai**: neturi savo dydžio. `IMAGEATTACH` klausia pločio ir siūlo plotį, kurį anksčiau nurodėte tam failui.
- **Skenavimai**: skenavimas, nurodantis savo tankį (taškai colyje), įkeliamas tikruoju dydžiu brėžinio vienetais; `SCANATTACH` vis tiek klausia pločio.
- **Taškų debesų priedas**: klausia, kai kuriate debesį, kurio failas nenurodo vieneto, ir debesies skaičius pažymi jo vienetu.

## Verta žinoti

- DWG ar DXF atidarymas kaip atskiro brėžinio nieko neklausia: komandinė eilutė nurodo, kokius vienetus failas nurodo, arba kad nenurodo nė vieno. {{ui:Ypatybės}} nustato brėžinio vienetus.
- Kai ir šis brėžinys neturi vienetų, failo konvertuoti negalima: jis įdedamas skaičius į skaičių, ir komandinė eilutė tai nurodo.
- Atsakymas prisimenamas tam failui šiame kompiuteryje, visose CadCraft programose. Kitą kartą, kai jis įkeliamas, neklausiama, o komandinė eilutė nurodo, kad buvo panaudoti prisimenami vienetai.
- Norėdami, kad vėl klaustų: komandų paletė ({{key:Mod+K}}) › **Klausti dar kartą importuojamų failų vienetų**.
