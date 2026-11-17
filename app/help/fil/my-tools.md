---
title: Sarili mong button (My tools)
summary: Magdagdag ng toolbar button na nagpapatakbo ng sarili mong macro, bigyan sila ng shortcut key, i-share bilang file, at dalhin ang mga button mula sa CUIx customization file.
keywords: my tools, custom buttons, toolbar buttons, macro, macros, cui, cuix, customize, customise, menu, shortcut keys, keyboard shortcuts, diesel, ^c^c, i-import ang mga button, i-export ang mga button
from: 36618802
---

## Ano ang matututunan mo

Paano maglagay ng sarili mong button sa toolbar, bawat isa ay nagpapatakbo ng macro na isinulat sa paraang isinusulat ng AutoCAD, paano magbigay ng key sa isang button, at paano dalhin ang mga button ng isang CUIx file.

## Magdagdag ng button

1. Buksan ang {{ui:Mga setting}} ({{key:Mod+,}}) at manatili sa tab na {{ui:CadCraft}}. Mag-scroll hanggang {{ui:My tools}}.
2. I-click ang {{ui:Magdagdag ng button…}}.
3. Punan ang kahon:
   - {{ui:Grupo}}: ang toolbar group na paglalagyan nito, halimbawa `My tools`. Ang bagong pangalan ay gumagawa ng bagong grupo.
   - {{ui:Label}}: ang mga salitang nasa button.
   - {{ui:Macro}}: ang tino-type nito, halimbawa `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: i-click ang kahon at pindutin ang mga key, halimbawa {{key:Ctrl+Alt+B}}.
   - {{ui:Icon}}: isang PNG o SVG na larawan na hindi lalampas sa 64 KB, o wala (lalabas ang bituin).
4. I-click ang {{ui:I-save}}.

Lalabas ang button sa dulo ng toolbar, sa loob ng grupo nito. I-click ito, o pindutin ang key nito, para patakbuhin. Binabago ng {{ui:Edit}} at inaalis ng {{ui:Burahin}} sa listahan ang button.

## Sumulat ng macro

Ang macro ay kung ano ang tino-type mo sa command line, na may ilang simbolo:

| Simbolo | Ibig sabihin |
|---|---|
| `^C` | Kanselahin ang anumang tumatakbo (`^C^C` ang karaniwang simula) |
| `;` o espasyo | {{key:Enter}} |
| `\` | Maghihintay sa iyo: isang click o tinype na sagot, pagkatapos magpapatuloy ang macro |
| `_` o `.` bago ang command | Tinatanggap at hindi pinapansin (mga pandaigdigang at built-in na pangalan) |
| `*` sa pinakasimula | Tatakbo muli tuwing matatapos, hanggang pindutin mo ang {{key:Esc}} |
| `^O`, `^G` | I-on o i-off ang Ortho, ang grid |
| `$M=` | Ang natitira ay DIESEL. Tanging `$(if,…)`, `$(getvar,…)`, `$(=,…)` at `$(eq,…)` ang binabasa; ang button na gumagamit ng iba ay magsasabi nito at walang gagawin |

Mga halimbawa:

- Ang `^C^C_line;0,0;@100,0;;` ay gumuguhit ng linyang 100 ang haba mula sa origin.
- Ang `^C^C_circle;\25;` ay humihingi sa iyo ng centre, pagkatapos gumuguhit ng bilog na may radius na 25 doon.
- Ang `^C^C_turnright` ay pinaiikot ang view ng 90° pakanan.

## Shortcut key

Kailangan ng key ang {{key:Mod}} (Ctrl, o Cmd sa Mac) o {{key:Alt}} kasama ang letra o digit, o isa sa mga libreng function key na {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Ang mga letra lang ay napupunta sa command line. Ang mga key na ginagamit na ng CadCraft, ng app o ng browser (gaya ng {{key:Ctrl+S}} o {{key:Ctrl+Z}}) at ang mga key na hawak na ng ibang button ay hindi tinatanggap, at sinasabi ng kahon kung bakit.

## I-share ang mga button mo

- {{ui:I-export…}} ay nagse-save ng bawat grupo at button (kasama ang mga icon at key) bilang `my-tools.json`.
- {{ui:I-import…}} ay nagdaragdag ng mga grupo ng ganoong file pagkatapos ng sa iyo. Ang pangalan ng grupong nagamit mo na ay makakakuha ng "(2)"; ang key na magkakapareho ay tatanggalin, at sinasabi ito ng panel.

## Dalhin ang mga button mula sa CUIx file

1. I-click ang {{ui:I-import ang CUIx…}} at piliin ang `.cuix` file.

Ang mga toolbar at ribbon panel nito ay nagiging mga grupo, bawat button ay kasama ang macro at larawan nito (PNG, o BMP na ginawang PNG). Ang shortcut key nito ay napupunta sa sarili nitong grupo, bawat button kasama ang key nito; ang command alias na maaaring dala nito ay napupunta sa grupong {{ui:Alias}}. Inililista ng panel kung ano ang nadala.

:::note
Binabasa lang ang file. Ang mga command na wala sa CadCraft ay nakalista sa pangalan, hindi hinuhulaan: sasabihin ng kanilang button ito kapag na-click. Hindi binabasa ang DIESEL na lampas sa ilang function sa itaas, pati mga menu, mouse button at workspace.
:::

## Mga dapat tandaan

- Nananatili ang mga button sa browser na ito (o sa desktop app na ito), hindi sa mga drawing.
- Tumatakbo ang button sa pamamagitan ng command line, kaya nauundo ito tulad ng anumang tino-type mo: isang {{key:Mod+Z}} bawat command na tumakbo nito.
