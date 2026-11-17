---
title: Vlastné tlačidlá (Moje nástroje)
summary: Pridajte tlačidlá panela nástrojov, ktoré spúšťajú vaše vlastné makrá, priraďte im klávesové skratky, zdieľajte ich ako súbor a preneste tlačidlá zo súboru prispôsobenia CUIx.
keywords: moje nástroje, vlastné tlačidlá, tlačidlá panela nástrojov, makro, makrá, cui, cuix, prispôsobiť, ponuka, klávesové skratky, diesel, ^c^c, import tlačidiel, export tlačidiel
from: 36618802
---

## Čo sa naučíte

Ako pridať vlastné tlačidlá na panel nástrojov, pričom každé spúšťa makro napísané tak, ako ho píše AutoCAD; ako priradiť tlačidlu kláves a ako preniesť tlačidlá zo súboru CUIx.

## Pridanie tlačidla

1. Otvorte {{ui:Nastavenia}} ({{key:Mod+,}}) a zostaňte na karte {{ui:CadCraft}}. Prejdite na {{ui:Moje nástroje}}.
2. Kliknite na {{ui:Pridať tlačidlo…}}.
3. Vyplňte okno:
   - {{ui:Skupina}}: skupina panela nástrojov, do ktorej tlačidlo patrí, napríklad `Moje nástroje`. Nový názov vytvorí novú skupinu.
   - {{ui:Popis}}: slová na tlačidle.
   - {{ui:Makro}}: čo tlačidlo napíše, napríklad `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Klávesová skratka}}: kliknite do poľa a stlačte klávesy, napríklad {{key:Ctrl+Alt+B}}.
   - {{ui:Ikona}}: obrázok PNG alebo SVG najviac 64 KB, alebo nič (zobrazí sa hviezdička).
4. Kliknite na {{ui:Uložiť}}.

Tlačidlo sa objaví na konci panela nástrojov, vo svojej skupine. Kliknutím na neho alebo stlačením jeho klávesu ho spustíte. {{ui:Upraviť}} a {{ui:Zmazať}} v zozname ho zmenia alebo odstránia.

## Písanie makra

Makro je to, čo by ste napísali na príkazovom riadku, s niekoľkými značkami:

| Značka | Znamená |
|---|---|
| `^C` | Zruší bežiaci príkaz (`^C^C` je obvyklý začiatok) |
| `;` alebo medzera | {{key:Enter}} |
| `\` | Čaká na vás: kliknutie alebo napísanú odpoveď, potom makro pokračuje |
| `_` alebo `.` pred príkazom | Prijaté a ignorované (medzinárodné a vstavané názvy) |
| `*` na úplnom začiatku | Spustí sa znova po každom ukončení, až kým nestlačíte {{key:Esc}} |
| `^O`, `^G` | Zapne alebo vypne Ortho a mriežku |
| `$M=` | Zvyšok je DIESEL. Čítajú sa len `$(if,…)`, `$(getvar,…)`, `$(=,…)` a `$(eq,…)`; tlačidlo, ktoré používa čokoľvek iné, to oznámi a nerobí nič |

Príklady:

- `^C^C_line;0,0;@100,0;;` nakreslí čiaru dlhú 100 od počiatku.
- `^C^C_circle;\25;` vás požiada o stred a potom tam nakreslí kružnicu s polomerom 25.
- `^C^C_turnright` otočí pohľad o 90° doprava.

## Klávesové skratky

Kláves potrebuje {{key:Mod}} (Ctrl, alebo Cmd na Macu) alebo {{key:Alt}} s písmenom alebo číslicou, alebo jednu z voľných funkčných klávesov {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Samotné písmená idú na príkazový riadok. Klávesy, ktoré už používa CadCraft, aplikácia alebo prehliadač (napríklad {{key:Ctrl+S}} alebo {{key:Ctrl+Z}}), a klávesy, ktoré má iné tlačidlo, sa odmietnu a okno vysvetlí prečo.

## Zdieľanie tlačidiel

- {{ui:Exportovať…}} uloží každú skupinu a tlačidlo (s ikonami a klávesmi) ako `my-tools.json`.
- {{ui:Importovať…}} pridá skupiny takéhoto súboru za vaše. Názov skupiny, ktorý už používate, dostane „(2)“; kláves, ktorý by kolidoval, sa vynechá a panel to oznámi.

## Prenesenie tlačidiel zo súboru CUIx

1. Kliknite na {{ui:Importovať CUIx…}} a vyberte súbor `.cuix`.

Jeho panely nástrojov a panely pásu s nástrojmi sa stanú skupinami, každé tlačidlo s makrom a obrázkom (PNG, alebo BMP prevedený na PNG). Jeho klávesové skratky prídu v samostatnej skupine, každé tlačidlo so svojím klávesom; aliasy príkazov, ktoré môže obsahovať, prídu do skupiny {{ui:Aliasy}}. Panel vypíše, čo sa preniesol.

:::note
Súbor sa iba číta. Príkazy, ktoré CadCraft nemá, sa vypíšu podľa názvu a neodhadujú sa: ich tlačidlá to pri kliknutí oznámia. DIESEL okrem niekoľkých funkcií uvedených vyššie, ponuky, tlačidlá myši a pracovné prostredia sa nečítajú.
:::

## Dobré vedieť

- Tlačidlá sa uchovávajú v tomto prehliadači (alebo v tejto desktopovej aplikácii), nie vo výkresoch.
- Tlačidlo beží cez príkazový riadok, takže sa vráti späť ako čokoľvek, čo napíšete: jedno {{key:Mod+Z}} na každý príkaz, ktorý spustilo.
