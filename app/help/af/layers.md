---
title: Organiseer 'n tekening met lae
summary: Skep lae vir mure, deure en notas, stel kleure, maak 'n laag huidig, en skakel lae af, vries hulle, sluit hulle of hou hulle van druk af.
keywords: laag, lae, la, huidige laag, vries, ontvries, sluit, af, aan, druk, geen druk, kleur, laageienskappe, layiso, layuniso, isoleer, layoff, layfrz, laymcur, layon, laythw, hernoem, laymrg, saamvoeg, laydel, skrap laag
from: cd033591
---

## Wat jy gaan maak

Drie lae, Walls, Doors en Notes, elk met sy eie kleur, met voorwerpe op elk geteken en tussen hulle geskuif.

## Die Lae-paneel

Lae leef in die paneel aan die linkerkant, onder {{ui:Lae}}. Elke ry wys, van links na regs:

- 'n stippel: gevul vir die **huidige** laag, waar nuwe voorwerpe heen gaan;
- 'n kleurmonster;
- die laagnaam;
- vier knoppies: aan/af (oog), vries (sneeuvlokkie), sluit (hangslot) en druk (drukker).

Elke tekening het 'n laag genaamd `0`. Tik `LA` en druk {{key:Enter}} om na die paneel te spring.

## Skep lae

1. Klik {{ui:Nuwe laag}} bo die lys. 'n Naamkassie maak oop.
2. Tik `Walls` en druk {{key:Enter}} (of klik {{ui:Voeg by}}).

Die statusbalk sê "Laag Walls bygevoeg en as huidig gestel." Die nuwe laag kry kleur 7 (swart op die ligte tema, wit op die donker een).

3. Klik weer {{ui:Nuwe laag}}, tik `Doors` en druk {{key:Enter}}.
4. Klik weer {{ui:Nuwe laag}}, tik `Notes` en druk {{key:Enter}}.

Notes is nou huidig.

## Gee elke laag 'n kleur

1. Klik die kleurmonster op die Walls-ry. Jou stelsel se kleurkiesser maak oop.
2. Kies 'n kleur en bevestig.

Die kleurmonster en alles op Walls wat {{ui:Volgens laag}} gekleur is, verander.

:::note
'n Gekose kleur wat by een van die 255 standaard CAD-kleure pas, word as daardie nommer gestoor. Enige ander kleur word presies in CadCraft behou, maar word in 'n DWG- of DXF-lêer as die naaste standaardkleur gestoor.
:::

## Teken op 'n laag

1. Klik die naam **Walls** in die lys. Die stippel word gevul en die statusbalk sê "Huidige laag: Walls".
2. Teken 'n reghoek (`REC`). Dit gaan op Walls.
3. Klik **Doors**, en teken 'n boog (`A`). Dit gaan op Doors.

Jy kan ook die huidige laag kies in {{ui:Huidige instellings}} aan die regterkant (niks gekies nie), onder {{ui:Laag}}.

## Skuif voorwerpe na 'n ander laag

1. Kies die voorwerpe.
2. Kies in die regterpaneel die nuwe laag in {{ui:Laag}}.

Hulle skuif na daardie laag en neem sy kleur aan as hulle kleur {{ui:Volgens laag}} is.

## Af, vries, sluit en druk

| Knoppie | Wat dit doen |
|---|---|
| Aan/af (oog) | Verberg die laag se voorwerpe. Hulle kan nie gesien, gekies of vasgevang word nie. |
| Vries (sneeuvlokkie) | Dieselfde effek as af in CadCraft. Apart gehou omdat ander programme hulle anders hanteer, en die instelling word gestoor. |
| Sluit (hangslot) | Voorwerpe bly sigbaar en jy kan aan hulle vasvang, maar hulle kan nie gekies of verander word nie. Goed vir 'n agtergrond wat jy natrek. |
| Druk (drukker) | Wanneer gedruk, word die laag op die skerm gewys maar **uit drukke** en PDF's gelaat. Gebruik dit vir konstruksielyne en notas aan jouself. |

Hou 'n knoppie aan om te sien wat dit sal doen ("Skakel af", "Vries", "Sluit", "Moenie hierdie laag druk nie").

Jy kan nie die huidige laag afskakel nie: die statusbalk sê "Dit is die huidige laag. Maak eers 'n ander laag huidig." As jy op 'n laag se naam klik om dit huidig te maak, skakel dit ook aan en ontvries dit.

Elke laagverandering, in die paneel of deur 'n opdrag, is een ontdoen-stap: {{key:Mod+Z}} sit dit terug.

## Werk met lae deur voorwerpe te kies

Jy hoef nie 'n laag se naam te ken nie: kies 'n voorwerp daarop. Tik die opdrag, of maak {{ui:Gereedskap}} bo aan die {{ui:Lae}}-paneel oop.

| Opdrag | Wat dit doen |
|---|---|
| {{cmd:LAYISO}} | Kies voorwerpe, druk {{key:Enter}}: slegs hulle lae bly aan, elke ander laag word afgeskakel. As die huidige laag afgeskakel is, word een van die geïsoleerde lae huidig. |
| {{cmd:LAYUNISO}} | Skakel weer aan die lae wat die laaste {{cmd:LAYISO}} afgeskakel het, en gee die huidige laag terug wat dit verander het. |
| {{cmd:LAYOFF}} | Klik voorwerpe een na die ander: elkeen se laag word afgeskakel. Tik `U` om die laaste een terug te neem, {{key:Enter}} om klaar te maak. |
| {{cmd:LAYFRZ}} | Dieselfde, maar vries elke laag. |
| {{cmd:LAYMCUR}} | Klik 'n voorwerp: sy laag word huidig (en word aangeskakel en ontvries). As een voorwerp reeds gekies is, word daardie een gebruik. |
| {{cmd:LAYON}} | Skakel elke laag aan. |
| {{cmd:LAYTHW}} | Ontvries elke laag. |

Die huidige laag word nooit op hierdie manier afgeskakel of gevries nie: die geskiedenis sê so, en jy kan eers 'n ander laag met {{cmd:LAYMCUR}} huidig maak. As 'n blokverwysing gekies word, gebruik dit die verwysing se eie laag.

## Hernoem, voeg saam en skrap lae

- {{cmd:RENAME}}: tik `LA`, die ou naam en die nuwe een. Elke voorwerp op die laag volg. (`B` hernoem 'n blok op dieselfde manier, met elke verwysing na dit.)
- {{cmd:LAYMRG}}: klik 'n voorwerp op elke laag om saam te voeg (of tik `N` en 'n naam), druk {{key:Enter}}, kies dan die teikenlaag en antwoord `Y`. Die voorwerpe skuif na die teiken, in die model, op blaaie en binne blokke, en die samegevoegde lae verdwyn.
- {{cmd:LAYDEL}}: kies 'n voorwerp op die laag (of `N` en sy naam) en antwoord `Y`. Die laag verdwyn **saam met elke voorwerp daarop**, oral. Laag 0, DEFPOINTS en die huidige laag kan nie geskrap word nie.

Elkeen is een ontdoen-stap. Al drie is in {{ui:Gereedskap}} bo aan die {{ui:Lae}}-paneel.

1. Klik een muurlyn, tik dan `LAYISO` en druk {{key:Enter}}. Slegs Walls bly aan.
2. Teken of verander wat jy nodig het op Walls.
3. Tik `LAYUNISO` en druk {{key:Enter}}. Doors en Notes kom terug.

## Algemene foute

- **Nuwe lyne het op die verkeerde laag beland.** Kyk watter stippel gevul is voordat jy teken. 'n Nuwe laag word huidig sodra jy dit byvoeg.
- **'n Voorwerp kies nie.** Sy laag is gesluit, af of gevries.
- **Die laag word steeds in 'n ander program gedruk.** DXF R12 kan "moenie druk nie" nie stoor nie. CadCraft hou die instelling vir homself wanneer die tekening 'n blad het, maar ander programme sal daardie laag druk.
- **Laagnaamme in hoofletters na stoor.** DXF R12 stoor name in hoofletters, so `Walls` kom terug as `WALLS`, en spasies word `_`. 'n Gestoorde DWG hou name soos jy dit getik het.
- **Hernoem, samevoeg of skrap van 'n laag.** Gebruik {{cmd:RENAME}}, {{cmd:LAYMRG}} of {{cmd:LAYDEL}} (ook in {{ui:Gereedskap}}): sien hieronder.

## Groepeer lae

Hou die lys kort deur lae in vouers te plaas, soos Bestaande, Voorgestelde en Dienste. Elke vouer vou in, en sy skakelaars skakel al sy lae aan of af, vries hulle of sluit hulle saam. Die huidige laag word nooit afgeskakel nie.

In {{ui:Gereedskap}} op die Lae-paneel, kies {{ui:Voeg gereedgemaakte groepe by}} vir 'n stel wat vir klein residensiële werk gemaak is, {{ui:Groepeer volgens naam}} om lae wat 'n voorvoegsel deel te groepeer (`E-Walls`, `E-Doors`), of {{ui:Nuwe groep}}. Sleep 'n laag na 'n vouer, of gebruik die lys bo die lae vir die huidige laag. Tik in {{ui:Soek 'n laag}} om die lys te beperk. `LAYGROUP` (`LG`) doen dieselfde by die opdragreël.

Die lae self verander nie, so ander CAD-programme sien hulle as 'n gewone plat lys. CadCraft hou die groepe in die lêer.
