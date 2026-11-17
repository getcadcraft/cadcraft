---
title: Muis, trackpad en aanraken
summary: Hoe u in CadCraft zoomt, verschuift, rechtsklikt en kiest met een muis met wiel, een Mac- of pc-trackpad of een touchscreen, en wat er per browser verschilt.
keywords: trackpad, touchpad, magic mouse, aanraken, touch, tablet, ipad, verschuiven, zoomen, knijpen, rechtsklikken, twee vingers, middelste knop, browser, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft is ontworpen voor een muis met wiel. Alles werkt ook met een trackpad, met een paar gewoontes om te leren. Touchscreens werken voor kiezen, met beperkingen.

## Muis met wiel

- **Zoomen:** draai aan het wiel. De tekening zoomt rond het kruishaar, dus wijs naar wat u wilt zien.
- **Verschuiven:** houd het wiel ingedrukt en sleep, of sleep met de rechterknop.
- **Alles zoomen:** dubbelklik op het wiel, of klik op {{ui:Alles tonen}}.
- **Terug naar het vorige beeld:** klik op {{ui:Vorige}} in de groep Beeld, of typ `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Een reeks wielstappen telt als één beeld, dus één {{ui:Vorige}} maakt hem ongedaan. Bewaar beelden waarnaar u terugkeert met {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** rechtsklik.

## Trackpad

:::mac
- **Verschuiven:** beweeg twee vingers over het trackpad, in elke richting: de tekening volgt uw vingers. U kunt ook slepen met een tweevingerklik vastgehouden (een sleep met de rechterknop).
- **Zoomen:** knijp met twee vingers. Zoomen volgt het kruishaar.
- **Rechtsklik (Enter):** klik met twee vingers. Zet "Secundaire klik" aan in **Systeeminstellingen**, daarna **Trackpad**, als er niets gebeurt. Control-klik kan in CadCraft als gewone klik tellen in plaats van als rechtsklik, gebruik daarom de tweevingerklik.
- **Zoomen naar een gebied:** klik op {{ui:Venster}} in de groep Beeld en klik twee hoeken aan.
:::

:::windows linux
- **Verschuiven:** beweeg twee vingers over het touchpad, in elke richting: de tekening volgt uw vingers. U kunt ook slepen met de rechterknop ingedrukt.
- **Zoomen:** knijp met twee vingers. Zoomen volgt het kruishaar.
- **Rechtsklik (Enter):** klik met twee vingers, of klik op de rechterbenedenhoek van het touchpad, afhankelijk van uw touchpadinstellingen.
- **Zoomen naar een gebied:** klik op {{ui:Venster}} in de groep Beeld en klik twee hoeken aan.
:::

Als u {{key:Space}} ingedrukt houdt en sleept, verschuift u in CadCraft **niet**: {{key:Space}} is Enter.

Een muiswiel zoomt nog steeds, één stap per keer. Een touchpad dat zijn scrollen in hele stappen stuurt, zoals een wiel doet, zoomt met scrollen met twee vingers in plaats van verschuiven: zoom uit, wijs het gebied aan dat u wilt en zoom weer in. Het 3D-tabblad houdt zijn eigen trackpadbewegingen (zie [Model in 3D](topic:3d-solids#look-around)).

## Touchscreens en tablets

CadCraft leest een vinger als een muisklik:

- Een tik kiest een punt of object, of selecteert.
- Een vinger over lege ruimte slepen tekent een lasso (naar rechts eerst een venster, naar links eerst een kruisvenster; zie [Lassoselectie](topic:lasso-selection)).
- In {{cmd:TRIM}} en {{cmd:EXTEND}} snijdt of verlengt u met een vinger door stukken heen te slepen, allemaal in één keer.
- Een grip van een geselecteerd object slepen verplaatst de grip (grips en de kiesbox zijn groter voor een vinger).
- **Knijpen** met twee vingers om te zoomen rond het punt tussen hen; beweeg twee vingers samen om te **verschuiven**. Een tweede vinger annuleert wat de eerste begon, zodat een knijpbeweging nooit iets achterlaat.
- Een **lange druk** (stil houden ongeveer een halve seconde) is een rechtsklik: {{key:Enter}}. Hij beëindigt een commando, rondt een selectie af, of herhaalt het laatste commando.

Onder de opdrachtregel verschijnt een **toetsenrij**: {{ui:Esc}}, {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, de tekens die een tablettoetsenbord verbergt (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, een toetsenbordknop, en een grote {{ui:Enter}}. Tik op de toetsenbordknop (of op de opdrachtregel) om een commando of getal te typen.

Er is geen zweven met de aanwijzer, dus snapmarkeringen verschijnen alleen waar uw vinger is.

:::touch
U gebruikt een touchscreen. Voor meer dan een snelle blik maakt een aangesloten toetsenbord en een muis of trackpad CadCraft veel makkelijker in gebruik.
:::

## Browsers

CadCraft werkt hetzelfde in Chrome, Edge, Firefox en Safari, op Mac, Windows en Linux. De verschillen zijn klein:

| Onderwerp | Wat u moet weten |
|---|---|
| Een DWG openen | Grote tekeningen hebben in elke browser een paar seconden nodig om te lezen; de statusregel toont ondertussen "Lezen …" |
| Downloads | Elke browser bepaalt waar downloads naartoe gaan en of hij eerst vraagt; zie [Browsers en computers](common:browsers) |
| Openen om af te drukken | Opent de PDF in een nieuw tabblad. Als de browser pop-ups blokkeert, downloadt CadCraft de PDF in plaats daarvan |
| F7 | Firefox biedt misschien tekstcursor-browsing aan; kies Nee |
| Weggaan met niet-opgeslagen wijzigingen | Elke browser toont zijn eigen vraag "Site verlaten?", die CadCraft niet kan veranderen |

:::safari
In Safari kan een PDF die met {{ui:Openen om af te drukken}} is geopend in het tabblad staan zonder af te drukken: gebruik **Bestand**, daarna **Afdrukken**.
:::

:::firefox
Firefox vraagt misschien bij elke download wat er moet gebeuren. Kies om het bestand op te slaan, of wijzig dit eenmalig in de instellingen van Firefox onder Downloads.
:::
