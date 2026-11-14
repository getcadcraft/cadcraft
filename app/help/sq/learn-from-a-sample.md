---
title: Mëso nga një vizatim shembull
summary: Hap shtëpinë shembull ose as-built të CadCraft dhe ecën nëpër fletët, blloqet e titullit, përmasat dhe shtresat e tij.
keywords: shembull, shembuj, vizatim shembull, mëso, mësim, udhëzues, bllok titulli, fletë, as-built, grup arkitekturor, hap një shembull
from: aa1f960a
---

## Çfarë do të mësosh

Si ndërtohet një grup i përfunduar: hapësira e modelit, fletë me dritare pamjeje në një shkallë, një bllok titulli me atribute, përmasa në këmbë dhe inç dhe në milimetra, shtresa. Shembujt janë të vetë CadCraft dhe të lirë për çdo përdorim (CC0).

## Hap një shembull

1. Në panelin e majtë, nën {{ui:Vizatim}}, kliko {{ui:Hap një shembull}} (ose shkruaj {{cmd:SAMPLES}}; në stilet ribbon është te menuja {{ui:Skedar}}).
2. Kliko {{ui:Hap}} pranë {{ui:Shtëpia shembull}}. Hapet në një skedë të vet, kështu që puna jote mbetet e hapur.

## Shiko modelin

1. Kliko {{ui:Shtrirje}} (ose shkruaj `ZOOM`, pastaj `E`): planimetria e dyshemesë, fasada kryesore, një prerje dhe një detaj muri.
2. Te {{ui:Shtresat}}, kliko syrin pranë `A-ANNO-DIMS` për ta fshehur përmasat, dhe përsëri për t'i shfaqur.
3. Kliko një derë: {{ui:Vetitë}} shfaq një referencë blloku `DOOR-32`. Dyert dhe dritaret janë blloqe, të vendosura të rrotulluara dhe të pasqyruara.

## Fletët

1. Kliko {{ui:A-101 FLOOR PLAN}} nën vizatim: një fletë ARCH D me një dritare pamjeje në 1/4" = 1'-0".
2. Kliko dy herë brenda dritares së pamjes për të punuar në model përmes saj; kliko dy herë jashtë për t'u kthyer.
3. {{ui:A-501 DETAILS}} shfaq detajin e murit në 1 1/2" = 1'-0": i njëjti model, një shkallë tjetër.

## Blloku i titullit

1. Në çdo fletë, kliko dy herë blloku i titullit: {{ui:Ndrysho atributet}} liston PROJECT, TITLE, SCALE, DATE, DRAWN dhe SHEET.
2. Ndrysho DRAWN në inicialet e tua dhe kliko {{ui:OK}}.
3. Për të ndryshuar vetë blloku i titullit në çdo fletë, zgjidhe dhe zgjidh {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Ndrysho në vend}}. Shih [Atributet](topic:attributes).

## As-built-i

Hap {{ui:Shembulli as-built}} në të njëjtën mënyrë. Pikat gri në `SCAN-SLICE` janë një prerje e një skanimi; muret në `AB-WALL` u gjurmuan mbi to. Muri lindor është 35 mm jashtë katrorit: përmasat e thonë dy herë, në milimetra (`AB-DIMS-MM`) dhe në këmbë dhe inç (`AB-DIMS-FTIN`, të njëjtat gjatësi përmes një shkalle matjeje). Rrathët e kuq në `REV-1` shënojnë atë që gjeti rilevimi.

## Më pas

- [Ndrysho madhësinë e tekstit të përmasës](topic:change-dimension-text-size)
- [Nxirr në PDF](topic:plot-pdf): printo {{ui:A-101 FLOOR PLAN}}.
