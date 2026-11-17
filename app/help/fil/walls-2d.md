---
title: Gumuhit ng matatalinong pader, pinto at bintana sa 2D
summary: Gumuhit ng mga pader na parang polyline, pagdugtungin ang mga ito nang maayos, at maglagay ng pinto at bintanang gumagalaw kasama ng pader. Lahat ay 2D, walang 3D model.
keywords: pader, mga pader, WALL, WA, pinto, DOOR, DR, bintana, WINDOW, WN, DELOPENING, matalinong pader, floor plan, swing, hinge, opening
from: 45845d49
---

Ang mga pader dito ay mga 2D na drafting object. Wala silang ginagawang 3D model, kaya kasing gaan ng drawing na linya ang plano. Para sa modelo ng gusali, gamitin ang BimCraft.

## Gumuhit ng mga pader

I-type ang `WALL` (`WA`), o piliin ang {{ui:Pader}} sa menu na {{ui:Higit pa}} ng pangkat na {{ui:Draw}}, saka i-click ang mga punto gaya ng gagawin mo sa polyline. Pindutin ang {{key:Enter}} para tapusin, o i-type ang `C` para isara ang silid.

- Itinatakda ng `T` ang kapal.
- Sinasabi ng `J` kung ano ang susundan ng iyong mga click: ang gitna ng pader, o ang kaliwa o kanang mukha nito.
- Itinatakda ng `F` ang fill: wala, solid, o hatch.

Kusang nagmi-mitre ang mga sulok. Ang pader na nagtatapos sa loob ng kapal ng ibang pader ay nagdudugtong dito sa malinis na T, at ang mga pader na nagtatawiran ay nagbubukas sa isa't isa. Nise-save kasama ng mga pader ang mga pagdugtong. Para sa mga rectangle, polygon, arko, paghiwa, lock at iba pa, tingnan ang "Mga hugis, hiwa, offset at lock ng 2D na pader".

## Maglagay ng pinto at bintana

I-type ang `DOOR` (`DR`) o `WINDOW` (`WN`) at i-click ang isang pader. Bumubukas ang pinto patungo sa gilid ng pader na iyong i-click. Itinatakda ng `W` ang lapad, ng `Y` ang uri, at ng `H` ang gilid ng hinge. Patuloy na mag-click para maglagay ng marami, at pindutin ang {{key:Enter}} para tapusin. Puwedeng single, double, sliding, o bukas na pasukan ang mga pinto. Puwedeng fixed, casement, o sliding ang mga bintana.

## Baguhin ang mga ito

Pumili ng pader para makita ang mga grip nito:

- Ang mga grip sa dulo ay humahatak sa pader. Sumusunod dito ang mga pader na nakadugtong dito.
- Inililipat ng grip sa gitna ang pader.
- Ang grip sa isang opening ay nagpapadulas dito sa kahabaan ng pader.
- Binabaligtad ng mga arrow ang hinge at swing ng pinto.

Ipinapakita ng Properties ang kapal, ang fill at bawat opening: uri, lapad, posisyon, hinge, swing, nakabukas o nakasara, at {{ui:Alisin}}. Inaalis ng `DELOPENING` ang opening na pinakamalapit sa lugar na i-click mo.

Gumagana nang karaniwan ang `MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` at `ERASE`. Sumasama sa pader nito ang mga pinto at bintana, nananatili ang mga pagdugtong ng nakadugtong na pader, at isang {{ui:I-undo}} ang magbabawi ng lahat.

## Sa ibang program

Bawat pader ay nise-save bilang karaniwang block, kaya nagpapakita ito nang tama sa ibang CAD program at nailalipat doon, pero hindi nila ito maeedit bilang pader. Ginagawang payak na linya at arko ng `EXPLODE` ang pader, at hindi na ito magiging pader.
