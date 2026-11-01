---
title: Aan die gang kom met CadCraft
summary: Wat die CadCraft-tekenprogram doen, waar dit loop, en jou eerste tekening van 'n leë skerm tot 'n gestoorde lêer.
keywords: begin, eerste tekening, nuut, maak oop, stoor, stoor as, leer, handleiding, inleiding, vinnige begin
from: 1a56c575
---

CadCraft is 'n 2D-tekenprogram. Jy teken en wysig lyne, boë, polilyne, teks, mate en blokke, stel blaaie op met titelblokke en aansigvensters, en plot hulle na PDF. Dit maak DWG- en DXF-tekeninge oop en stoor hulle as DWG of DXF.

Dit loop in jou webblaaier. Niks hoef geïnstalleer te word nie: die webwerf gee jou die adres, en die hele program laai in die bladsy. Jou tekeninge maak oop vanaf jou eie rekenaar en word daarna terug daarheen gestoor. **Niks word opgelaai nie.**

As jy al voorheen getekend het, lees [Van ander tekenprogrammatuur af](topic:coming-from) ná hierdie bladsy. Die meeste gewoontes dra oor, en die paar wat nie doen nie, word daar gelys.

## Verkies jy begeleiding?

Tik `TOUR` (of klik {{ui:Neem die toer}} op die begin-kaart, of {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Neem die toer weer}}). Ses kort stappe in 'n kassie oor die tekening: teken 'n lyn en 'n sirkel, skuif dit, snoei dit, vee iets uit en meet dit. Elke stap eindig wanneer jy dit doen, en jy kan 'n stap of die hele toer oorslaan. Dit begin eers vanself die eerste keer. Die [spiekbrief](topic:cheat-sheet) het die 40 opdragte wat jy die meeste sal gebruik, en die [opdragkaart](topic:command-map) elke opdrag wat daar is.

## Wat jy nodig het

- 'n Onlangse Chrome, Edge, Firefox of Safari op 'n Mac-, Windows- of Linux-rekenaar. Sien [Blaaiers en platforms](common:browsers).
- 'n Muis met 'n wiel is die gemaklikste. 'n Snuffelpad werk; sien [Muis, snuffelpad en aanraking](topic:mouse-trackpad-touch).
- 'n Sleutelbord. CadCraft word deur getikte opdragte bestuur, soos die meeste tekenprogramme.

## Die idee in een paragraaf

Jy tik 'n opdrag (of klik sy knoppie), en die opdragreël onderaan stel jou vrae een op 'n slag: "Spesifiseer die eerste punt", "Spesifiseer die volgende punt". Jy antwoord elke vraag deur in die tekening te klik of 'n waarde te tik, en dan {{key:Enter}} te druk. Druk {{key:Esc}} om te kanselleer. Dit is die hele interaksiemodel; al die res is detail.

## Jou eerste tekening

Jy gaan 'n reghoek van 4000 by 3000 uit lyne teken, 'n sirkel in die middel sit, en die lêer stoor.

1. Maak CadCraft oop. Die opdragreël onderaan wys `Command:` en die tekenarea wys 'n kort "Begin teken"-kaart.
2. Tik `L` en druk {{key:Enter}}. Jy hoef nie eers op die opdragreël te klik nie: tik enige plek, en dit gaan daarheen.
3. Die prompt verander na `Specify first point:`. Tik `0,0` en druk {{key:Enter}}.
4. Tik `@4000,0` en druk {{key:Enter}}. 'n Lyn verskyn, en loop regs. Die `@` beteken "vanaf die laaste punt".
5. Tik `@0,3000` en druk {{key:Enter}}.
6. Tik `@-4000,0` en druk {{key:Enter}}.
7. Tik `C` en druk {{key:Enter}}. `C` is die Sluit-opsie: die laaste lyn gaan terug na die eerste punt en die opdrag eindig.
8. Klik {{ui:Omvang}} in die {{ui:Aansig}}-groep van die nutsbalk. Die reghoek vul die skerm.

Jy behoort nou vier lyne te sien wat 'n reghoek vorm, en die geskiedenis bo die opdragreël lys wat jy getik het.

9. Tik `C` en druk {{key:Enter}} om die sirkelopdrag te begin.
10. Tik `2000,1500` en druk {{key:Enter}} vir die middelpunt.
11. Tik `500` en druk {{key:Enter}} vir die radius.

'n Sirkel verskyn in die middel van die reghoek.

12. Druk {{key:Mod+S}}, of klik {{ui:Stoor}} in die {{ui:Lêer}}-groep.

Die blaaier laai `Drawing1.dwg` af na jou gewone aflaaivouer, en die geskiedenis sê dit het 'n afskrif as DWG gestoor. Daardie lêer maak weer in CadCraft oop, en in die meeste ander CAD-programme. (As jy vantevore DXF by {{ui:Stoor as}} in hierdie blaaier gekies het, stoor 'n nuwe tekening eerder as `Drawing1.dxf`.)

:::tip
Druk {{key:Enter}} op 'n leë opdragreël om die laaste opdrag te herhaal. Druk {{key:Space}} in plaas van {{key:Enter}} as jy verkies: buite teks doen dit dieselfde.
:::

## Maak 'n bestaande tekening oop

1. Druk {{key:Mod+O}}, of klik {{ui:Maak oop}}.
2. Kies 'n `.dwg`- of `.dxf`-lêer in die lêerkieser.

Jy kan ook 'n DWG- of DXF-lêer uit {{pick:mac=Finder|windows=File Explorer|linux=jou lêerbestuurder}} sleep en op die tekenarea los. Die lêer word in die bladsy gelees; dit verlaat nooit jou rekenaar nie.

Sien [Lêers: wat oopmaak, wat stoor](topic:files) vir wat behou en wat omgeskakel word.

## Stoor: wat om te verwag

Stoor in 'n blaaier werk anders as in 'n rekenaarprogram:

- {{ui:Stoor}} laai altyd **'n nuwe afskrif af**. Dit skryf nie oor die lêer wat jy oopgemaak het nie. As 'n lêer met dieselfde naam alreeds in jou aflaaivouer is, voeg die blaaier gewoonlik 'n nommer by, soos `Drawing1 (1).dwg`.
- {{ui:Stoor}} gebruik die tekening se formaat: DWG as jy 'n DWG oopgemaak het, DXF as jy 'n DXF oopgemaak het. Om te kies, druk {{key:Mod+Shift+S}} of klik {{ui:Stoor as}}, en kies dan {{ui:DWG}} (en sy weergawe), {{ui:DXF R12}} of {{ui:DXF 2000}}. Sien [Stoor](topic:files#saving).
- Die lêer wat jy oopgemaak het, word nooit verander nie.
- Om 'n ander lêer oop te maak, of {{ui:Nuut}}, plaas dit op sy eie oortjie oor die tekening, so niks wat oop is, word toegemaak nie. As jy 'n tekening se oortjie toemaak of die bladsy verlaat met ongestoorde veranderinge, vra CadCraft eers: {{ui:Stoor eers 'n afskrif}}, weggooi of {{ui:Kanselleer}}. Die blaaieroortjie toemaak wys eerder die blaaier se eie "Verlaat webwerf?"-vraag.

Wolkstoor is nog nie beskikbaar nie. Waarheen jou lêers gaan en waarom hulle privaat bly, word verduidelik in [Jou lêers en privaatheid](common:your-files).

## Waarheen om daarna te gaan

Druk {{key:F1}} of klik {{ui:Hulp}} in die balk bo om hierdie hulp enige tyd langs die tekening oop te maak. Dit werk sonder enige verbinding.

- [Die CadCraft-skerm](topic:workspace) noem elke balk en paneel.
- [Teken met koördinate](topic:draw-with-coordinates) is die beste eerste stapsgewyse gids.
- [Sleutelbord en muis](topic:keyboard) lys elke sleutel.
- Tik `HELP` op die opdragreël vir 'n lys van elke opdrag, of lees die [Opdragverwysing](topic:commands).
