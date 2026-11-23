---
title: Organiseer 'n tekening met lae
summary: Skep lae vir mure, deure en notas, stel kleure, maak 'n laag die huidige een, en skakel lae af, vries hulle, sluit hulle of hou hulle van druk af.
keywords: laag, lae, la, huidige laag, vries, ontvries, sluit, af, aan, druk, nie druk nie, kleur, colour, laageienskappe, layiso, layuniso, isoleer, layoff, layfrz, laymcur, layon, laythw, hernoem, laymrg, samevoeg, laydel, skrap laag, groepeer lae
from: ba9f0617
---

## Wat jy sal maak

Drie lae, Mure, Deure en Notas, elkeen met sy eie kleur, met voorwerpe op elk getekend en tussen hulle geskuif.

## Die Lae-paneel

Lae leef in die paneel links, onder {{ui:Lae}}. Elke ry wys, van links na regs:

- 'n stip: gevul vir die **huidige** laag, waar nuwe voorwerpe heen gaan;
- 'n kleurmonster;
- die laagnaam;
- vier knoppies: aan/af (oog), vries (sneeuvlok), sluit (hangslot) en druk (drukker).

Elke tekening het 'n laag wat `0` heet. Tik `LA` en druk {{key:Enter}} om na die paneel te spring.

## Skep lae

1. Klik {{ui:Nuwe laag}} bo die lys. 'n Naamblokkie maak oop.
2. Tik `Walls` en druk {{key:Enter}} (of klik {{ui:Voeg by}}).

Die statusbalk sê "Added layer Walls and made it current." Die nuwe laag kry kleur 7 (swart op die ligte tema, wit op die donker een).

3. Klik weer {{ui:Nuwe laag}}, tik `Doors` en druk {{key:Enter}}.
4. Klik weer {{ui:Nuwe laag}}, tik `Notes` en druk {{key:Enter}}.

Notes is nou die huidige laag.

## Gee elke laag 'n kleur

1. Klik die kleurmonster op die Walls-ry. Jou stelsel se kleurkieser maak oop.
2. Kies 'n kleur en bevestig.

Die monster en alles op Walls wat {{ui:Volgens laag}} gekleur is, verander.

:::note
'n Gekose kleur wat by een van die 255 standaard CAD-kleure pas, word as daardie nommer gestoor. Enige ander kleur word presies in CadCraft gehou, maar word as die naaste standaardkleur in 'n DWG- of DXF-lêer gestoor.
:::

## Teken op 'n laag

1. Klik die naam **Walls** in die lys. Sy stip word gevul en die statusbalk sê "Current layer: Walls".
2. Teken 'n reghoek (`REC`). Dit gaan op Walls.
3. Klik **Doors**, en teken 'n boog (`A`). Dit gaan op Doors.

Jy kan ook die huidige laag kies in {{ui:Huidige instellings}} aan die regterkant (niks gekies nie), onder {{ui:Laag}}.

## Skuif voorwerpe na 'n ander laag

1. Kies die voorwerpe.
2. Kies in die regterpaneel die nuwe laag in {{ui:Laag}}.

Hulle skuif na daardie laag en neem sy kleur as hul kleur {{ui:Volgens laag}} is.

## Af, vries, sluit en druk

| Knoppie | Wat dit doen |
|---|---|
| Aan/af (oog) | Verberg die laag se voorwerpe. Hulle kan nie gesien, gekies of gevasvang word nie. |
| Vries (sneeuvlok) | Dieselfde uitwerking as af in CadCraft. Apart gehou omdat ander programme hulle anders hanteer, en die instelling word gestoor. |
| Sluit (hangslot) | Voorwerpe bly sigbaar en jy kan aan hulle vasvang, maar hulle kan nie gekies of verander word nie. Goed vir 'n agtergrond wat jy oor trek. |
| Druk (drukker) | Wanneer ingedruk, word die laag op die skerm gewys maar **uit drukke en PDF's gelaat**. Gebruik dit vir konstruksielyne en notas aan jouself. |

Hou oor 'n knoppie om te sien wat dit sal doen ("Skakel af", "Vries", "Sluit", "Moenie hierdie laag druk nie").

Jy kan nie die huidige laag afskakel nie: die statusbalk sê "That is the current layer. Make another layer current first." Klik op 'n laag se naam om dit die huidige een te maak, skakel dit ook aan en ontvries dit.

Elke laagverandering, in die paneel of deur 'n opdrag, is een ontdoen-stap: {{key:Mod+Z}} sit dit terug.

## Werk met lae deur voorwerpe te kies

Jy hoef nie 'n laag se naam te ken nie: kies 'n voorwerp op daardie laag. Tik die opdrag, of open {{ui:Gereedskap}} bo-aan die {{ui:Lae}}-paneel.

| Opdrag | Wat dit doen |
|---|---|
| {{cmd:LAYISO}} | Kies voorwerpe, druk {{key:Enter}}: net hulle lae bly aan, elke ander laag word afgeskakel. As die huidige laag afgeskakel is, word een van die geïsoleerde lae die huidige een. |
| {{cmd:LAYUNISO}} | Skakel die lae weer aan wat die laaste {{cmd:LAYISO}} afgeskakel het, en gee die huidige laag terug wat dit verander het. |
| {{cmd:LAYOFF}} | Klik voorwerpe een na die ander: elkeen se laag word afgeskakel. Tik `U` om die laaste een terug te neem, {{key:Enter}} om klaar te maak. |
| {{cmd:LAYFRZ}} | Dieselfde, maar vries elke laag. |
| {{cmd:LAYMCUR}} | Klik 'n voorwerp: sy laag word die huidige een (en word aangeskakel en ontvries). Met een voorwerp reeds gekies, word dit gebruik. |
| {{cmd:LAYON}} | Skakel elke laag aan. |
| {{cmd:LAYTHW}} | Ontvries elke laag. |

Die huidige laag word nooit op hierdie manier afgeskakel of gevries nie: die geskiedenis sê so, en jy kan eers met {{cmd:LAYMCUR}} 'n ander laag die huidige maak. As jy 'n blokverwysing kies, gebruik dit die verwysing se eie laag.

## Hernoem, samevoeg en skrap lae

- {{cmd:RENAME}}: tik `LA`, die ou naam en die nuwe een. Elke voorwerp op die laag volg. (`B` hernoem 'n blok op dieselfde manier, met elke verwysing daarna.)
- {{cmd:LAYMRG}}: klik 'n voorwerp op elke laag om samen te voeg (of tik `N` en 'n naam), druk {{key:Enter}}, kies dan die teikenlaag en antwoord `Y`. Die voorwerpe skuif na die teiken — in die model, op blaaie en binne blokke — en die samegevoegde lae gaan.
- {{cmd:LAYDEL}}: kies 'n voorwerp op die laag (of `N` en sy naam) en antwoord `Y`. Die laag gaan **met elke voorwerp daarop**, oral. Laag 0, DEFPOINTS en die huidige laag kan nie geskrap word nie.

Elkeen is een ontdoen-stap. Al drie is in {{ui:Gereedskap}} bo-aan die {{ui:Lae}}-paneel.

1. Klik een muurlyn, tik dan `LAYISO` en druk {{key:Enter}}. Net Walls bly aan.
2. Teken of verander wat jy nodig het op Walls.
3. Tik `LAYUNISO` en druk {{key:Enter}}. Doors en Notes kom terug.

## Algemene foute

- **Nuwe lyne het op die verkeerde laag beland.** Kyk watter stip gevul is voordat jy teken. 'n Nuwe laag word die huidige sodra jy dit byvoeg.
- **'n Voorwerp kies nie.** Sy laag is gesluit, af of gevries.
- **Die laag druk steeds in 'n ander program.** DXF R12 kan nie "moenie druk nie" stoor nie. CadCraft hou die instelling vir homself as die tekening 'n blad het, maar ander programme sal daardie laag druk.
- **Laagname in hoofletters ná stoor.** DXF R12 stoor name in hoofletters, so `Walls` kom terug as `WALLS`, en spasies word `_`. 'n Gestoorde DWG hou name soos jy hulle getik het.
- **Hernoem, samevoeg of skrap 'n laag.** Gebruik {{cmd:RENAME}}, {{cmd:LAYMRG}} of {{cmd:LAYDEL}} (ook in {{ui:Gereedskap}}): sien hieronder.

## Groepeer lae

Hou die lys kort deur lae in vouers te sit, soos Bestaande, Voorgestelde en Dienste. Elke vouer vou in, en sy skakelaars skakel al sy lae aan of af, vries hulle of sluit hulle saam. Die huidige laag word nooit afgeskakel nie.

In {{ui:Gereedskap}} op die Lae-paneel, kies {{ui:Voeg gereedgemaakte groepe by}} vir 'n stel wat vir klein residensiële werk gemaak is, {{ui:Groepeer volgens naam}} om lae wat 'n voorvoegsel deel te groepeer (`E-Walls`, `E-Doors`), of {{ui:Nuwe groep}}. Sleep 'n laag na 'n vouer, of gebruik die lys bo die lae vir die huidige laag. Tik in {{ui:Soek 'n laag}} om die lys te verkort. `LAYGROUP` (`LG`) doen dieselfde op die opdragreël.

Om 'n groep te hernoem, dubbelklik sy naam (of kies dit en druk {{key:F2}}), tik die nuwe naam en druk {{key:Enter}}; {{key:Esc}} hou die ou een, en {{cmd:UNDO}} sit dit terug. {{ui:Nuwe groep}} is in {{ui:Gereedskap}} op die Lae-paneel.

Die lae self verander nie, so ander CAD-programme sien hulle as 'n gewone plat lys. CadCraft hou die groepe in die lêer.
