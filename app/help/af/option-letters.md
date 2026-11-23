---
title: Gee opdragopsies jou eie letters
summary: Antwoord 'n opdrag se opsies met letters wat jy kies, in enige taal, uit een tekslêer wat jy kan wysig, invoer en uitvoer.
keywords: opsieletters, optionkeys, optkeys, opsiesleutelwoord, sleutelwoord, hermap, toewysing, pasmaak, eie letters, polêr, skikking, P, PO, taal, vertaal opsies, kort vorm, invoer, uitvoer, dubbelsinnig
from: 7c8328c6
---

## Wat jy sal leer

Hoe om die letters te verander wat jy tik om 'n opdrag se opsies te beantwoord. Byvoorbeeld, {{cmd:ARRAY}} vra `[Rectangular/POlar]` en neem `PO` vir Polêr; jy kan `P` of enige ander letters dieselfde laat doen, in jou eie taal as jy wil.

## Hoe opsies beantwoord word

Wanneer 'n opdrag opsies in vierkantige hakies wys, is die hoofletters die wat jy tik: `POlar` is `PO`, `eXit` is `X`.

Jy kan ook minder letters tik. As wat jy tik net by een van die gewyse opsies pas, neem CadCraft dit: met `[Rectangular/POlar]`, is 'n alleenstaande `P` Polêr. As dit by twee pas, noem die opdragreël hulle en vra weer:

```
C could be COUnt, COLumns. Type more letters.
```

Getalle word nooit geraai nie, dus word 'n getikte afstand of telling altyd as 'n getal gelees.

## Voeg jou eie letters by

Elke opdrag hou sy ingeboude letters. Jy voeg joune bo-op daarvan by, so jou lys hou net wat jy verander het.

1. Maak {{ui:Instellings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Opsieletters}} oop en klik {{ui:Wysig…}}. Of tik {{cmd:OPTIONKEYS}} en druk {{key:Enter}}.
2. Onder {{ui:Opdrag}}, kies die opdrag, byvoorbeeld `ARRAY`. Die lys het elke opdrag wat na opsies vra, en dit begin by die opdrag wat jy laas gebruik het.
3. Onder {{ui:Opsie}}, kies die opsie. Elkeen wys sy ingeboude letters tussen hakies, byvoorbeeld `POlar (PO)`.
4. In {{ui:Jou letters}}, tik die letters wat jy wil hê, byvoorbeeld `P`, en klik {{ui:Voeg by}}.
5. Die opsie verskyn nou onder {{ui:Jou letters}} met sy ingeboude letters en joune. Klik {{ui:Stoor}}.

Begin {{cmd:ARRAY}}, kies 'n voorwerp en druk {{key:Enter}}. Die prompt wys jou letters ná die opsie, `POlar (P)`, en `P` beantwoord dit.

Om een weg te neem, klik die x aan die einde van sy ry en dan {{ui:Stoor}}. Die opsie gaan terug na net sy ingeboude letters.

## Letters wat jy nie kan gebruik nie

Die redigeerder weier letters wat iets sou verberg wat die opdragreël reeds lees, en sê hoekom:

- die ingeboude letters van 'n ander opsie van dieselfde opdrag (`R` vir Polêr in `ARRAY`, waar `R` Rectangular is);
- 'n voorwerpvaslegging-woord van drie letters of meer, soos `END`, `MID` of `CEN`, en die woorde `ALL` en `LAST`;
- dieselfde letters vir twee verskillende opsies van een opdrag.

Solank iets in rooi gelys word, is {{ui:Stoor}} af: regstel die reël of verwyder dit, en dit kom terug aan. 'n Prompt se ingeboude letters wen ook altyd bo joune, so jou lys kan nooit 'n ingeboude antwoord laat ophou werk nie. Letters wat toevallig 'n opdrag se naam is, soos `L` of `C`, is in orde: by 'n opsieprompt lees die opdragreël 'n antwoord, nie 'n opdrag wat begin nie.

Die opsies wat vir 'n opdrag gelys word, kom van die opdragte wat sy prompts deel, so nou en dan lys 'n opdrag 'n opsie wat dit net in sommige gevalle vra.

## Een keuse vir elke opdrag

Onder {{ui:Opdrag}}, kies {{ui:Elke opdrag}}. Die opsies is dan elke opsie wat enige opdrag het, soos eXit of Undo. Letters wat jy daar byvoeg, beantwoord daardie opsie waar ook al 'n opdrag dit aanbied. Letters wat vir een opdrag bygevoeg is, wen bo hierdie.

## Letters in jou eie taal

Die letters kan uit enige alfabet wees, so jy kan opsies beantwoord sonder om jou sleutelbord om te skakel: voeg `З` vir Maak toe onder {{ui:Elke opdrag}} by, of `П` vir Polêr in `ARRAY`.

CadCraft word net met die Engelse letters gestuur. Jou eie lys is hoe jy, jou kantoor of mense wat jou taal deel die res opstel, en {{ui:Voer uit}} maak 'n lêer wat jy kan aangee.

## Wysig as teks

{{ui:Wysig as teks}} in die redigeerder wys dieselfde lys as reëls teks, een per opsie, wat ook is wat {{ui:Voer uit}} stoor:

```
ARRAY.PO,  P
*.X,       Q
```

Elke reël is die opdrag, 'n punt, die opsie se ingeboude letters, 'n komma en jou letters. 'n Ster in plaas van die opdrag beteken elke opdrag. 'n Reël wat met `;` begin, is 'n nota.

## Wat dieselfde bly

- Die ingeboude letters werk steeds langs joune.
- Roetines en nutsbalkknoppies gebruik steeds die ingeboude letters, so niks wat jy gelaai het, breek nie. Om die ingeboude letters self te tik waar joune in die pad sou kom, sit eers 'n onderstreep: `_PO`.
- 'n Opdrag se kort naam is iets anders: sien [Wysig opdragaliasse](topic:command-aliases).

## Reëls wat CadCraft weier

Wanneer jy as teks wysig of 'n lêer invoer, lys die redigeerder elke probleem met sy reëlnommer:

- die opdrag bestaan nie ('n opdrag se alias is in orde: `AR.PO` word as `ARRAY.PO` gelees);
- die reël is nie `COMMAND.OPTION, LETTERS` nie;
- die letters het 'n spasie of 'n teken daarin (net letters en syfers, hoogstens 16);
- dieselfde letters beantwoord twee verskillende opsies van een opdrag.

## Voer in en uit

{{ui:Voer uit}} stoor jou letters as 'n tekslêer, om te hou of aan iemand anders te gee. {{ui:Invoer…}} lees so 'n lêer. Albei is in die redigeerder en in {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Opsieletters}}.

In Instellings vervang {{ui:Invoer…}} jou lêer met die een wat jy kies. 'n Lêer met 'n reël wat bots of nie gebruik kan word nie, word nie geneem nie; maak die redigeerder oop en voer dit daar in om die reëls te sien. In die redigeerder vul dit net die blokkie: niks verander totdat jy {{ui:Stoor}} klik nie.

## Herlaai of verwyder

Tik {{cmd:REINIT}} en druk {{key:Enter}} om jou lêer weer toe te pas. Om 'n letter te verwyder, skrap sy reël en klik {{ui:Stoor}}.

## Jou letters volg jou rekening

Wanneer jy by getcadcraft.com aangemeld is, word jou letters by jou rekening gehou. Maak CadCraft in 'n ander blaaier of op 'n ander rekenaar met dieselfde rekening oop en hulle kom self aan; die opdragreël sê `Option letters from your account`. As jy hulle op twee plekke verander het, wen die nuutste kopie en die een wat dit vervang het, word een keer behou.

{{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Opsieletters}} sê waar hulle staan. As jy afgemeld of vanlyn is, bly hulle in hierdie blaaier en gaan na jou rekening die volgende keer as jy hulle stoor terwyl jy aangemeld is.

Verwant: [Wysig opdragaliasse](topic:command-aliases) · [CadCraft-instellings](topic:settings) · [Opdragte](topic:commands)
