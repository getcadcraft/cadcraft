---
title: Muis, trackpad en aanraking
summary: Hoe om in CadCraft te zoem, te pan, regs te klik en te kies met 'n wielmuis, 'n Mac- of PC-trackpad of 'n aanraakskerm, en wat tussen blaaiers verskil.
keywords: trackpad, touchpad, magic mouse, aanraking, tablet, ipad, pan, zoem, knyp, regsklik, twee-vinger, middelknoppie, blaaier, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft is ontwerp vir 'n muis met 'n wiel. Alles werk ook met 'n trackpad, met 'n paar gewoontes om aan te leer. Aanraakskerms werk vir kies, met beperkings.

## Wielmuis

- **Zoem:** rol die wiel. Die tekening zoem om die kruisdraad, so wys na wat jy wil sien.
- **Pan:** hou die wiel ingedruk en sleep, of sleep met die regterknoppie.
- **Zoem na alles:** dubbelklik die wiel, of klik {{ui:Omvang}}.
- **Terug na die vorige aansig:** klik {{ui:Vorige}} in die Aansig-groep, of tik `Z`, {{key:Enter}}, `P`, {{key:Enter}}. 'n Reeks wielstappe tel as een aansig, so een {{ui:Vorige}} ontdoen dit. Stoor aansigte waarna jy terugkeer met {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** regsklik.

## Trackpad

:::mac
- **Pan:** beweeg twee vingers op die trackpad, in enige rigting: die tekening volg jou vingers. Jy kan ook sleep met 'n twee-vingerklik wat vasgehou word (sleep met die regterknoppie).
- **Zoem:** knyp met twee vingers. Zoem volg die kruisdraad.
- **Regsklik (Enter):** klik met twee vingers. Skakel "Sekondêre klik" aan in **Stelselinstellings**, dan **Trackpad**, as dit niks doen nie. Control-klik kan in CadCraft as 'n gewone klik tel in plaas van 'n regsklik, so gebruik die twee-vingerklik.
- **Zoem na 'n gebied:** klik {{ui:Venster}} in die Aansig-groep en klik twee hoeke.
:::

:::windows linux
- **Pan:** beweeg twee vingers op die raakpaneel, in enige rigting: die tekening volg jou vingers. Jy kan ook sleep met die regterknoppie vasgehou.
- **Zoem:** knyp met twee vingers. Zoem volg die kruisdraad.
- **Regsklik (Enter):** klik met twee vingers, of klik die onderste regterhoek van die raakpaneel, afhangend van jou raakpaneel-instellings.
- **Zoem na 'n gebied:** klik {{ui:Venster}} in die Aansig-groep en klik twee hoeke.
:::

Om {{key:Space}} vas te hou en te sleep pan **nie** in CadCraft nie: {{key:Space}} is Enter.

'n Muiswiel zoem steeds, een stap op 'n slag. 'n Trackpad wat sy rol in heelstappe stuur, soos 'n wiel, zoem met 'n twee-vinger-rol in plaas van om te pan: zoem uit, wys na die gebied wat jy wil hê, en zoem weer in. Die 3D-oortjie hou sy eie trackpad-bewegings (sien [Model in 3D](topic:3d-solids#look-around)).

## Aanraakskerms en tablette

CadCraft lees 'n vinger as 'n muisklik:

- 'n Tik kies 'n punt of 'n voorwerp, of kies.
- Sleep 'n vinger op leë ruimte om 'n lasso te trek (beweeg eers regs vir 'n venster, links eers vir 'n kruising; sien [Lasso-keuse](topic:lasso-selection)).
- In {{cmd:TRIM}} en {{cmd:EXTEND}}, sleep 'n vinger deur stukke om hulle almal te trim of te verleng.
- Sleep 'n gekose voorwerp se greep om die greep te skuif (grepe en die kiesboks is groter vir 'n vinger).
- **Knyp** met twee vingers om te zoem om die punt tussen hulle; beweeg twee vingers saam om te **pan**. 'n Tweede vinger kanselleer wat die eerste begin het, so 'n knyp laat nooit 'n merk nie.
- 'n **Lang druk** (hou stil vir ongeveer 'n halwe sekonde) is 'n regsklik: {{key:Enter}}. Dit beëindig 'n opdrag, voltooi 'n keuse, of herhaal die laaste opdrag.

Onder die opdragreël verskyn 'n **sleutelry**: {{ui:Esc}}, {{ui:Ontdoen}}, {{ui:Herdoen}}, die karakters wat 'n tablet-sleutelbord wegsteek (`@` `,` `<` `'` `"` `-`), {{ui:Vasvang}}, {{ui:Ortho}}, 'n sleutelbordknoppie, en 'n groot {{ui:Enter}}. Tik die sleutelbordknoppie (of die opdragreël) om 'n opdrag of 'n getal te tik.

Daar is geen sweef nie, so vangmerkers wys net waar jou vinger is.

:::touch
Jy gebruik 'n aanraakskerm. Vir enigiets meer as 'n vinnige kyk, maak 'n aangehegte sleutelbord en 'n muis of trackpad CadCraft baie makliker om te gebruik.
:::

## Blaaiers

CadCraft werk dieselfde in Chrome, Edge, Firefox en Safari, op Mac, Windows en Linux. Die verskille is klein:

| Onderwerp | Wat om te weet |
|---|---|
| Oopmaak van 'n DWG | Groot tekeninge neem 'n paar sekondes om in elke blaaier te lees; die statuslyn wys intussen "Lees …" |
| Aflaaie | Elke blaaier besluit waar aflaaie gaan en of dit eers vra; sien [Blaaiers en rekenaars](common:browsers) |
| Oop om te druk | Maak die PDF in 'n nuwe oortjie oop. As die blaaier pop-ups blokkeer, laai CadCraft die PDF af in plaas daarvan |
| F7 | Firefox mag caret-blaai aanbied; kies Nee |
| Verlaat met ongestoorde veranderinge | Elke blaaier wys sy eie "Verlaat webwerf?"-vraag, wat CadCraft nie kan verander nie |

:::safari
In Safari mag 'n PDF wat met {{ui:Maak oop om te druk}} oopgemaak is, in die oortjie wys sonder om te druk: gebruik **Lêer**, dan **Druk**.
:::

:::firefox
Firefox mag vra wat om met elke aflaai te doen. Kies om die lêer te stoor, of verander dit een keer in Firefox se instellings onder Aflaaie.
:::
