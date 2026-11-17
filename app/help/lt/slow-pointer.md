---
title: Žymeklis šokinėja arba vėluoja virš brėžinio
summary: Ką daryti, kai kryžminis žymeklis nesklandžiai seka pelę senesniame ar lėtesniame kompiuteryje.
keywords: žymeklio šokinėjimas, žymeklio vėlavimas, lėtas kryžminis žymeklis, trūkčiojantis žymeklis, senas kompiuteris, sena vaizdo plokštė, integruota grafika, aparatinis spartinimas, sklandesnis žymeklis, lėtas nešiojamas kompiuteris
from: 39dc9057
---

CadCraft veikia naršyklėje (CadCraft Studio taip pat yra naršyklės rodinys), todėl nieko jame nekuriama vienai ar kitai vaizdo plokštei. Kryžminį žymeklį piešia programa, todėl jis gali judėti tik tiek greitai, kiek programa gali nupiešti vieną kadrą.

## Leiskite CadCraft sumažinti papildomus dalykus

1. Atverkite {{ui:Parametrai}} (krumpliaratis viršutiniame dešiniajame kampe) ir likite skirtuke {{ui:CadCraft}}.
2. Pasirinkite {{ui:Sklandesnis žymeklis lėtesniuose kompiuteriuose}}.
3. Pasirinkite {{ui:Įjungta}}.

Kai tai įjungta, vietoj nupiešto kryžminio žymeklio ir pasirinkimo langelio naudojamas jūsų kompiuterio paties kryžminis žymeklis (taip pat ir visame ekrane), o objektas po žymekliu įsižiebia, kai žymeklis sustoja, o ne kol jis juda. Objektų prisitraukimas, sekimas ir gumos juosta veikia kaip anksčiau.

{{ui:Automatinis}} yra CadCraft pradinė reikšmė: ji stebi, kiek trunka kadrai judinant žymeklį, ir pati įjungia šią parinktį, kai jie kelias sekundes išlieka lėti. Apie tai praneša vieną kartą. {{ui:Išjungta}} palieka nupieštą kryžminį žymeklį, koks bebūtų greitis.

## Jei vis tiek lėta

- Patikrinkite, ar naršyklėje įjungtas aparatinis spartinimas: naujame skirtuke atverkite `chrome://gpu` (arba `edge://gpu`). Jei pirmosiose eilutėse parašyta „Software only“ ar „Disabled“, naršyklė piešia be vaizdo plokštės. Atnaujinus vaizdo plokštės tvarkyklę, dažnai viskas grįžta į įprastą būseną.
- Uždarykite kitus sunkius skirtukus ir programas ir pabandykite mažesnį naršyklės langą.
- Pasakykite mums per {{ui:Žinynas}}, {{ui:Pranešti apie problemą}}: nurodykite, ar naudojate naršyklę, ar CadCraft Studio, jo versiją ir ką rodo gpu puslapis.
