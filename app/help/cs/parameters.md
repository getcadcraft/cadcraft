---
title: Používání parametrů a rovnic
summary: Pojmenujte rozměry, řiďte je výrazy jako šířka / 2 a napište číslo do řízeného rozměru, abyste změnili to, co jej řídí.
keywords: parametry, par, správce parametrů, rovnice, výrazy, proměnné, obousměrný, záměr návrhu, uživatelský parametr, fx
from: 650b9844
---

## Jedna tabulka pro všechny rozměry

Panel {{ui:Parametry}} (tlačítko {{ui:Parametry}} ve skupině {{ui:Parametrické}}, nebo napište {{cmd:PARAMETERS}}) vypisuje každou kótovou vazbu (`d1`, `rad1`, `dia1`, `ang1`, nebo název, který jste jí dali) a vaše vlastní parametry dohromady. Jakýkoli název lze použít v jakémkoli výrazu.

Každý řádek má:

- **Název**: napište nový pro přejmenování; každý výraz, který jej používá, to následuje.
- **Výraz**: číslo (`40`) nebo výraz (`width / 2 + gap`). Napište do něj a stiskněte {{key:Enter}}: výkres se přizpůsobí.
- **Hodnota**: co vyjde. U řádku, který výraz řídí, můžete sem napsat i číslo: CadCraft spočítá parametr za ním. Při `d1 = width / 2` napsání `30` do hodnoty d1 nastaví `width` na 60.

Když dva parametry řídí hodnotu (`width / 2 + gap`), dialog se zeptá, který z nich změnit. Každá změna je jeden krok zpět ({{key:Mod+Z}}).

## Přidejte vlastní

1. Otevřete panel {{ui:Parametry}}.
2. Napište název (`gap`) a hodnotu (`10`), pak zvolte {{ui:Přidat}}.
3. Použijte jej: do výrazu d1 napište `width / 2 + gap` a stiskněte {{key:Enter}}.

Názvy začínají písmenem nebo `_` a obsahují písmena, číslice a `_`. Názvy funkcí, `pi` a názvy jednotek nemohou být názvy.

## Výrazy

| Zápis | Význam |
|---|---|
| `+ - * / ^ %` | sčítání, odčítání, násobení, dělení, mocnina, zbytek |
| `( )` | seskupení |
| `sin cos tan asin acos atan atan2` | goniometrie ve stupních |
| `sqrt pow exp ln log abs sign` | odmocniny, mocniny, logaritmy |
| `ceil floor int round min max` | zaokrouhlení a meze |
| `if(a > b, x, y)` | volba |
| `pi` | 3.14159… |

Čísla mohou mít jednotku: `25mm`, `1in`, `2'`, `90deg`. Délky s jednotkou se převádějí na milimetry, takže jednotky používejte jen ve výkresech měřených v milimetrech; jinde píšte prostá čísla.

## Na příkazovém řádku

`-PARAMETERS` dělá totéž bez panelu: `N` nový, `E` upravit (i kótovou vazbu), `R` přejmenovat, `D` smazat, `?` vypsat seznam.

## Co je odmítnuto

- Výraz, který používá sám sebe, přímo nebo přes jiné: "width, d1 se navzájem používají."
- Hodnotu, kterou rozměr nemůže přijmout: záporná délka, úhel nad 180°.
- Hodnotu, kterou výkres nemůže přijmout se svými ostatními vazbami: nic se nezmění a zpráva pojmenuje vazby, které překážejí.
- Smazání parametru, který něco používá: panel nabídne, že nejprve zapíše jeho hodnotu do nich. Název kótové vazby se smaže smazáním vazby.
