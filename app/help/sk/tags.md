---
title: Značky: atribúty, ktoré napájajú tabuľky
summary: Definujte značku (jej druh, hodnoty, ktoré môže nadobudnúť, bloky, na ktoré sa vzťahuje), nastavte ju na odkazy na bloky a vypíšte odkazy ako tabuľku, ktorú môžete uložiť ako CSV.
keywords: značky, značka, atribút, tabuľka, extrakcia údajov, vlastnosť, požiarna odolnosť, zoznam na výber, odkaz na blok, TAGS, csv
from: 9b90bacc
---

**Značka** je atribút bloku s definíciou: aký druh hodnoty drží, ktoré hodnoty sú povolené a na ktoré bloky sa vzťahuje. Hodnoty sú bežné atribúty bloku, takže ich čítajú iné programy a {{cmd:ATTEDIT}} ich zobrazí. Nové sú len definície a uchovávajú sa vo výkrese.

## Definovanie a nastavenie

Napíšte {{cmd:TAGS}} a zvoľte:

- {{ui:Definovať}}: názov (písmená, číslice, medzera, `_ . -`), druh (`text`, `number`, `integer`, `yesno`, `length`, `angle`), povolené hodnoty oddelené `;` (nechajte prázdne pre ľubovoľné) a názvy blokov, na ktoré sa vzťahuje (`DOOR*` zodpovedá každému bloku, ktorého názov začína na DOOR; prázdne znamená každý blok).
- {{ui:Súbor}}: pri vybraných odkazoch na blok napíšte `FireRating=60 min; Width=850`. Hodnota mimo povoleného zoznamu alebo nečíselná hodnota pri číselnej značke sa odmietne a oznámi sa. Jeden krok späť. Blok, ktorý atribút nemá, ho dostane ako skrytý atribút.
- {{ui:Tabuľka}}: každý odkaz na blok, na ktorý sa značka vzťahuje, voliteľne zoskupený podľa značky alebo názvu bloku, vytlačený a uložený ako CSV.
- {{ui:Odstrániť}}: zabudne definíciu; hodnoty na odkazoch zostanú.

Premenovanie značky premenuje jej hodnoty na každom odkaze. Názvy značiek nerozlišujú veľkosť písmen, rovnako ako názvy atribútov.
