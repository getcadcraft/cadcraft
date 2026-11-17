---
title: Hatiin ang screen
summary: Ipakita ang drawing sa dalawa, tatlo o apat na pane na may kani-kaniyang zoom, ilagay ang sheet sa tabi ng model, at magbukas ng ilang drawing nang magkatabi.
keywords: split, split screen, panes, vports, viewports, tiled, tile, magkatabi, nakasalansan, dalawang drawing, tabs, document tabs, ihambing, divider, model at sheet, ilang drawing, mga bukas na drawing
from: ee2f034b
---

## Ano ang matututunan mo

Paano tingnan ang isang drawing sa maraming pane nang sabay, na bawat isa ay may sariling zoom, at paano magbukas ng ilang drawing at makita silang magkatabi.

## Hatiin ang isang drawing sa mga pane

1. Magbukas ng drawing, o gumuhit ng ilang linya at bilog.
2. Buksan ang {{ui:View}} › {{ui:Higit pa}} at piliin ang {{ui:Hatiin nang magkatabi}} (o i-type ang {{cmd:VPORTS}}, pagkatapos ang `2`, pagkatapos ang {{key:Enter}}).

Nahahati ang drawing area sa dalawang pane, na parehong nagpapakita ng parehong view. May asul na frame ang aktibong pane at dito napupunta ang crosshair.

3. I-click sa kabilang pane. Ito ang nagiging aktibo. (Ang unang click na iyon ay nagpapalit lamang ng pane; i-click muli para pumili.)
4. Mag-zoom gamit ang wheel. Ang pane lamang na iyon ang nag-zo-zoom.
5. I-drag ang linya sa pagitan ng mga pane para gawing mas malapad ang isa. Ibinabalik ito sa gitna ng {{key:Home}} sa naka-focus na divider.

Tumatanggap din ang {{cmd:VPORTS}} ng `3` (dalawang pane sa isang gilid at malaking pane sa kabila: `L` o `R`), `4`, at `SI` para bumalik sa isang pane. Ang view ng aktibong pane ang pupuno sa lugar. Sa sheet, nagdaragdag ang {{cmd:VPORTS}} ng viewport sa sheet sa halip (gaya ng AutoCAD); i-type doon ang {{cmd:SPLIT}}, o gamitin ang menu na View.

## Gumuhit mula sa isang pane papunta sa isa pa

1. I-split nang magkatabi, at mag-zoom sa bawat pane papunta sa magkaibang sulok ng drawing.
2. I-type ang `L` at pindutin ang {{key:Enter}}, at i-click ang unang punto sa kaliwang pane.
3. I-click nang isang beses ang kanang pane para gawin itong aktibo, pagkatapos i-click doon ang ikalawang punto.

Tumatakbo ang linya sa pagitan ng dalawang lugar. Nagpapatuloy ang command habang nagpapalit ka ng pane, at nakikita ang rubber band sa bawat pane.

## Ang model sa tabi ng sheet

1. I-split nang magkatabi.
2. I-click ang kanang pane, pagkatapos i-click ang tab ng sheet sa ilalim ng drawing.

Ipinapakita ng kanang pane ang sheet; ipinapakita pa rin ng kaliwang pane ang model. May sariling space ang bawat pane, kaya maaari kang gumuhit sa model at panoorin ang viewport ng sheet na sumusunod.

## Ilang drawing sa iisang window

1. Magbukas ng drawing. Pagkatapos magbukas ng isa pa (o pindutin ang {{ui:Bago}}).

Bumubukas ang bawat drawing sa sariling tab sa ibabaw ng drawing area. I-click ang tab para lumipat; sumusunod sa drawing na pinuntahan mo ang command line, mga panel at undo. Ang {{key:Mod+C}} sa isang drawing at {{key:Mod+V}} sa iba ay kumokopya ng mga object sa pagitan nila.

2. I-click ang {{ui:Tile the open drawings side by side}} (ang split icon sa dulo ng mga tab), o ang nakasalansan na icon sa tabi nito.

Ngayon ang bawat pane ay nagpapakita ng isa sa mga bukas na drawing, hanggang apat. I-click ang pane para magtrabaho sa drawing na iyon.

3. I-click ang {{ui:×}} sa tab para isara ang drawing na iyon. Kung may hindi pa nase-save na pagbabago, unang magtatanong ang CadCraft.

:::tip
Ang pagbubukas ng drawing habang ang window ay may bago at hindi pa nagagalaw na drawing lamang ay gagamit ng tab na iyon sa halip na magdagdag ng isa.
:::

## Mag-pan at mag-zoom nang sabay

Para ihambing ang dalawang revision, i-tile ang mga ito nang magkatabi, pagkatapos i-click ang {{ui:I-link ang view ng mga pane}} (ang link icon sa dulo ng mga tab), o piliin ito sa {{ui:View}} › {{ui:Higit pa}}, o i-type ang {{cmd:LINKVIEWS}} at `ON`. Ngayon ang pan o zoom sa isang pane ay ililipat ang bawat pane na nagpapakita ng model (o bawat pane na nagpapakita ng sheet) sa parehong lugar, kaya nananatiling magkahanay ang dalawang drawing. Hinahayaan ng {{cmd:LINKVIEWS}} `OFF` na gumalaw nang sarili ang bawat pane.

## Mga karaniwang pagkakamali

- **Walang nangyari sa click ko.** Ginawa nitong aktibo ang pane na iyon. I-click muli para pumili o gumuhit.
- **Ibang pane ang na-zoom ng wheel.** Nag-zoom ang wheel sa pane sa ilalim ng pointer at ginagawa itong aktibo.
- **Bumalik sa isa ang mga pane.** Ipinapakita ng pagbubukas ng drawing ito gaya ng pagkaka-save nito; ang drawing na na-save nang walang pane ay bumubukas sa isa.
- **Nagbabala ang pag-alis sa pahina tungkol sa mga hindi pa nase-save na pagbabago na hindi ko makita.** May ibang tab na may drawing na may pagbabago. Lumipat dito at i-save, o umalis nang hindi nagse-save.
