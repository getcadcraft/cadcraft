---
title: Sleutelbord en muis
summary: Elke sleutel, muisaksie en opdragreël-sleutel in die CadCraft-tekenprogram, soos die kode dit hanteer.
keywords: sleutelbord, kortpaaie, sleutels, muis, wiel, panoramies, zoem, regsklik, middelknoppie, f3, f7, f8, ctrl, opdragsleutel, kopieer, knip, plak, dupliseer, knipbord, kies alles
from: a2608a29
---

Kortpaaie word vir jou rekenaar gewys. Op 'n Mac gebruik elke {{key:Mod}}-kortpad hieronder die Command-sleutel, en die Control-sleutel werk ook. Hoe sleutels geskryf word, en hoe om F-sleutels op 'n Mac te gebruik, is in [Sleutels, muise en raakpanele](common:keys).

## Opdragte tik

| Sleutel | Wat dit doen |
|---|---|
| Enige letter, syfer of simbool | Gaan na die opdragreël, waar die aanwyser ook al is, tensy 'n blokkie in 'n paneel die kursor het |
| {{key:Enter}} | Stuur wat jy getik het. By 'n leë aansporing: herhaal die laaste opdrag, beëindig 'n opdrag, voltooi 'n keuse, of aanvaar die verstek in `<…>` |
| {{key:Space}} | Dieselfde as {{key:Enter}}, behalwe wanneer CadCraft om teks vra (teks, bloknaam, maatteks), waar dit 'n spasie tik |
| {{key:Esc}} | Kanselleer die opdrag. Met geen opdrag wat loop nie: kanselleer 'n gryppuntskuif of 'n keuseboks, en maak dan die keuse skoon |
| {{key:Tab}} | Aanvaar die voorgestelde opdrag wat regs van die opdragreël gewys word. Met niks getik nie en die aanwyser oor oorvleuelende voorwerpe: merk die volgende een daar (klik om dit te kies) |
| {{key:Up}} {{key:Down}} | Blaai deur die reëls wat jy vroeër getik het (die laaste 100) |

## Teken en wysig

| Sleutel | Wat dit doen |
|---|---|
| {{key:Mod+Z}} | Ontdoen die laaste opdrag |
| {{key:Mod+Y}} of {{key:Mod+Shift+Z}} | Herdoen |
| {{key:Mod+A}} | Kies elke voorwerp wat jy op die oop oortjie kan wysig ({{cmd:SELECTALL}}). As jy iets by die opdragreël getik het, kies dit daardie teks |
| {{key:Delete}} | Vee die gekose voorwerpe uit ({{cmd:ERASE}}), tensy jy iets by die opdragreël getik het |
| {{key:Backspace}} | Vee die gekose voorwerpe uit wanneer die opdragreël nie die kursor het nie; by die opdragreël vee dit uit wat jy getik het |
| {{key:Esc}} | Met geen opdrag wat loop nie: maak die keuse skoon ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Stoor 'n kopie in die tekening se formaat (DWG of DXF) |
| {{key:Mod+Shift+S}} | Stoor as: kies DWG of DXF, en stoor dan 'n kopie |
| {{key:Mod+O}} | Maak 'n DWG of DXF oop |
| {{key:Mod+P}} | Druk uit na PDF |

Ontdoen, herdoen, kies alles en druk doen niks terwyl 'n opdrag loop nie: druk eers {{key:Esc}}.

## Kopieer, knip en plak

| Sleutel | Wat dit doen |
|---|---|
| {{key:Mod+C}} | Kopieer die keuse na die knipbord ({{cmd:COPYCLIP}}). Niks gekies nie: CadCraft vra vir voorwerpe |
| {{key:Mod+X}} | Knip: kopieer die keuse, en vee dit dan uit ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Plak: die kopie volg die aanwyser; klik, of tik 'n punt, om dit neer te sit ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Plak op dieselfde plek: by die koördinate waarvandaan dit gekopieer is ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dupliseer: 'n kopie van die keuse beweeg met die aanwyser; klik om dit neer te sit, {{key:Esc}} laat niks ({{cmd:DUPLICATE}}) |

Dieselfde aksies is in die gereedskapbalk se {{ui:Redigeer}}-groep ({{ui:Kopieer}}, {{ui:Plak}}) en sy {{ui:Meer}}-kieslys. Terwyl 'n ander opdrag loop, voltooi dit of druk eers {{key:Esc}}; om {{key:Mod+V}} of {{key:Mod+D}} weer te druk terwyl 'n kopie die aanwyser volg, begin van voor af. Wanneer jy iets by die opdragreël getik het, of 'n opdrag om teks vra, kopieer, knip en plak hierdie sleutels daardie teks. Sien [Kopieer, plak en dupliseer](topic:copy-paste).

## Wissels

| Sleutel | Wissel | Statusbalkknoppie |
|---|---|---|
| {{key:F3}} | Voorwerpvasvangs aan of af | {{ui:Vasvang}} |
| {{key:F7}} | Rooster aan of af | {{ui:Rooster}} |
| {{key:F8}} | Ortho aan of af | {{ui:Ortho}} |
| {{key:F10}} | Polêre opsporing aan of af | {{ui:Polêr}} |
| {{key:F11}} | Voorwerpvasvangopsporing aan of af | {{ui:Spoor}} |
| {{key:F12}} | Dinamiese invoer aan of af | {{ui:Dyn}} |

:::mac
Op 'n Mac is F3, F7 en F8 gewoonlik Mission Control- en mediasleutels. Hou **fn** saam daarmee in, of skakel standaard funksiesleutels aan in Systeeminstellings, soos beskryf in [Sleutels, muise en raakpanele](common:keys). Die statusbalkknoppies werk altyd.
:::

:::firefox
F7 in Firefox kan ook vra om bladsykursor-blaai aan te skakel. Kies **Nee**, en gebruik die {{ui:Rooster}}-knoppie as dit aanhou vra.
:::

## Hulp

| Sleutel | Wat dit doen |
|---|---|
| {{key:F1}} | Maak hierdie hulp oop of toe, langs die tekening. Dit werk selfs terwyl 'n opdrag loop, en bereik nooit die opdragreël nie. |
| {{key:Esc}} | Met die kursor in die hulppaneel: maak die soekveld skoon, of maak die paneel toe |

Die {{ui:Hulp}}-knoppie in die balk bo doen dieselfde as {{key:F1}}. Terwyl jy in die hulp se soekblokkie tik, bereik niks die opdragreël nie. Klik op die tekening om die sleutels aan CadCraft terug te gee; die paneel bly langs dit oop.

:::mac
Op 'n Mac-sleutelbord, hou **fn** en druk F1, of klik {{ui:Hulp}}.
:::

## Skerm

| Sleutel | Wat dit doen |
|---|---|
| {{key:Ctrl+Shift+F}} | Wissel tussen normaal, volskerm, en volskerm met die balke versteek. Dit gebruik die Control-sleutel op elke rekenaar, ook 'n Mac. |
| {{key:Left}} {{key:Right}} | Met 'n oortjie onder die tekening gefokus: die vorige of volgende oortjie |

In volskerm mag die blaaier die eerste {{key:Esc}} gebruik om volskerm te verlaat. Druk {{key:Esc}} weer om 'n opdrag te kanselleer.

## Dialoë

| Sleutel | Wat dit doen |
|---|---|
| {{key:Esc}} | Maak die dialoog toe ({{ui:Druk uit na PDF}}, of 'n vraag soos "Ongestoorde veranderinge", waar dit {{ui:Kanselleer}} beteken) |
| {{key:Tab}} | Beweeg tussen die dialoog se instellings en knoppies |

Terwyl 'n dialoog oop is, is die tekening se sleutels af.

## Paneelvelde

In 'n blokkie in die regter- of linkerpaneel:

| Sleutel | Wat dit doen |
|---|---|
| {{key:Enter}} | Pas die waarde toe en verlaat die blokkie |
| {{key:Esc}} | Sit die ou waarde terug en verlaat die blokkie |
| {{key:Tab}} | Pas toe en beweeg na die volgende blokkie |

Terwyl 'n blokkie die kursor het, tik letters daarin, nie in die opdragreël nie.

## Muis

| Aksie | Wat dit doen |
|---|---|
| Klik | Kies 'n punt wanneer 'n opdrag een vra; kies 'n voorwerp wanneer dit voorwerpe vra; andersins kies 'n voorwerp, of 'n gryppunt |
| Shift+klik | Verwyder 'n gekose voorwerp uit die keuse (met {{ui:Klik op voorwerpe}} gestel op {{ui:Vervang die keuse}} in [Instellings](topic:settings): voeg dit by). Terwyl 'n punt gekies word: ignoreer voorwerpvasvangs vir daardie klik |
| Klik op leë ruimte, klik dan weer | 'n Keuseboks: links na regs is 'n venster, regs na links 'n kruising |
| Sleep op leë ruimte | 'n Lasso: eers regs beweeg is 'n venster, eers links 'n kruising; {{key:Space}} terwyl jy sleep wissel tussen venster, kruising en heining; {{key:Esc}} laat dit val (LASSOMODE 0, of Instellings, maak dit weer die reghoek) |
| Sleep deur stukke in TRIM of EXTEND | Snoei (of verleng) elke stuk wat die pad kruis; hou {{key:Shift}} vir die ander een |
| Sleep 'n gryppunt | Skuif die gryppunt (of klik die gryppunt, en klik dan waar dit heen moet) |
| Dubbelklik teks | Kies dit en sit die kursor in sy {{ui:Teks}}-blokkie in die regterpaneel |
| Regsklik | Enter. Tydens 'n gryppuntskuif of 'n keuseboks: kanselleer dit |
| Sleep met die regterknoppie | Panoreer |
| Wiel | Zoem in en uit rondom die kruisdraad |
| Sleep met die wiel (middelknoppie) | Panoreer |
| Dubbelklik die wiel | Zoem na die hele tekening (omvang) |
| Sleep 'n DWG of DXF op die tekening | Maak dit oop |

Op 'n trackpad of 'n aanraakskerm, sien [Muis, raakpaneel en aanraking](topic:mouse-trackpad-touch).

## Sleutels wat die blaaier hou

{{key:Mod+N}}, {{key:Mod+W}} en {{key:Mod+T}} behoort altyd aan die blaaier. CadCraft gebruik hulle nie: gebruik {{ui:Nuut}} of tik `NEW` vir 'n nuwe tekening. CadCraft se knipbord is sy eie: {{key:Mod+C}} en {{key:Mod+V}} kopieer voorwerpe tussen CadCraft-tekeninge en oortjies, nie na of van ander programme nie.

:::mac
As {{key:Mod+Y}} jou blaaier se geskiedenis oopmaak in plaas van herdoen, gebruik {{key:Mod+Shift+Z}} of die {{ui:Herdoen}}-knoppie.
:::

## Waar Skuif woon

Skuif is die opdrag `MOVE` (sleutel {{key:M}}): kies die voorwerpe, dan 'n basispunt en 'n tweede punt of 'n getikte afstand. `ALIGN` en `DISTRIBUTE` is ook daar. BimCraft gebruik dieselfde name vir dieselfde werk op boukomponente, maar sy {{key:M}} is Meet, en sy Skuif is {{key:Shift+M}}.
