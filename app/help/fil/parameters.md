---
title: Gamitin ang parameter at equation
summary: Bigyan ng pangalan ang mga sukat, kontrolin ang mga ito gamit ang expression gaya ng width / 2, at mag-type ng numero sa isang kinokontrol na sukat para baguhin ang nagkokontrol dito.
keywords: parameters, par, parameters manager, equations, expressions, variables, two-way, design intent, user parameter, fx
from: 650b9844
---

## Isang talaan para sa bawat sukat

Inililista ng panel na {{ui:Parameters}} (ang button na {{ui:Parameters}} sa grupong {{ui:Parametric}}, o i-type ang {{cmd:PARAMETERS}}) ang bawat dimensional constraint (`d1`, `rad1`, `dia1`, `ang1`, o ang pangalang ibinigay mo) at ang sarili mong mga parameter, magkakasama. Anumang pangalan ay puwedeng gamitin sa anumang expression.

Bawat hilera ay may:

- **Pangalan**: mag-type ng bago para palitan ang pangalan; susunod dito ang bawat expression na gumagamit nito.
- **Expression**: isang numero (`40`) o isang expression (`width / 2 + gap`). Mag-type dito at pindutin ang {{key:Enter}}: susunod ang drawing.
- **Value**: kung ano ang kinakalkula nito. Sa hilerang kinokontrol ng expression, puwede ka ring mag-type ng numero dito: kinukuwenta ng CadCraft ang parameter sa likod nito. Sa `d1 = width / 2`, ang pag-type ng `30` sa value ng d1 ay nagtatakda ng `width` na 60.

Kapag dalawang parameter ang kumokontrol sa isang value (`width / 2 + gap`), magtatanong ang dialog kung alin ang babaguhin. Bawat pagbabago ay isang undo step ({{key:Mod+Z}}).

## Magdagdag ng sarili mo

1. Buksan ang panel na {{ui:Parameters}}.
2. I-type ang pangalan (`gap`) at ang value (`10`), pagkatapos piliin ang {{ui:Idagdag}}.
3. Gamitin ito: sa expression ng d1, i-type ang `width / 2 + gap` at pindutin ang {{key:Enter}}.

Nagsisimula ang mga pangalan sa letra o `_` at binubuo ng mga letra, digit at `_`. Hindi puwedeng pangalan ang mga pangalan ng function, ang `pi` at mga pangalan ng unit.

## Mga expression

| Isulat | Ibig sabihin |
|---|---|
| `+ - * / ^ %` | idagdag, ibawas, i-multiply, hatiin, power, natitira |
| `( )` | pagpapangkat |
| `sin cos tan asin acos atan atan2` | trigonometry sa degree |
| `sqrt pow exp ln log abs sign` | ugat, power, logarithm |
| `ceil floor int round min max` | pag-round at mga limit |
| `if(a > b, x, y)` | isang pagpili |
| `pi` | 3.14159… |

Maaaring may kasamang unit ang mga numero: `25mm`, `1in`, `2'`, `90deg`. Ang haba na may unit ay kinokonberte sa millimeter, kaya gamitin lang ang mga unit sa mga drawing na nasusukat sa millimeter; sa iba, mag-type ng simpleng numero.

## Sa command line

Ginagawa ng `-PARAMETERS` ang parehong bagay nang walang panel: `N` bago, `E` i-edit (kasama ang dimensional constraint), `R` palitan ang pangalan, `D` burahin, `?` ilista.

## Ano ang tinatanggihan

- Expression na gumagamit sa sarili nito, direkta o sa pamamagitan ng iba: "Gumagamit ang width at d1 ng isa't isa."
- Value na hindi kayang tanggapin ng sukat: negatibong haba, o anggulong higit sa 180°.
- Value na hindi kayang tanggapin ng drawing kasama ng iba pang constraint: walang nagbabago, at pinangalanan ng mensahe ang mga constraint na humahadlang.
- Pagbura ng parameter na ginagamit ng isang bagay: nag-aalok ang panel na isulat muna ang value nito sa mga iyon. Ang pangalan ng dimensional constraint ay nabubura sa pamamagitan ng pagbura ng constraint.
