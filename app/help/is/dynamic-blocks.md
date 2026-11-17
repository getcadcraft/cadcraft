---
title: Kraftblokkir
summary: Hvað CadCraft gerir við kraftblokkir í DWG: þær halda sínum raunverulegu heitum, sýna það ástand sem þær voru vistaðar í, skipta um sýnileikaástand, sýna önnur gildi sín, og haldast kraftmiklar þegar þær eru vistaðar.
keywords: kraftblokk, kraftblokkir, sýnileiki, sýnileikaástand, spegla, teygja, uppflettun, breytur, sérsniðið, eiginleikar blokkar, *u blokkir, dynamic
from: 26b6aa80
---

## Það sem virkar

DWG-skrá sem gerð er með kraftblokkum opnast með þær virkar svona langt:

- **Raunveruleg heiti þeirra.** Kraftblokk er skráð í spjaldinu {{ui:Blokkir}} undir eigin nafni („Receptacle“, „Sink“), ekki sem nafnlaus `*U`-blokk.
- **Ástandið sem þær voru vistaðar í.** Hver tilvísun sýnir nákvæmlega það sem hitt forritið sýndi: sýnileikaástandið sem hún var stillt á, teygð eða speglað eins og hún var vistuð.
- **Að skipta um sýnileikaástand.** Veldu eina tilvísun (eða nokkrar af sömu blokk), opnaðu {{ui:Eiginleikar}}, og í hlutanum {{ui:Sérsniðið}} veldu annað ástand úr listanum {{ui:Sýnileiki}}. Tilvísunin sýnir það ástand strax, og eigindi hennar líka: þau sem ástandið felur hverfa, þau sem það sýnir birtast með gildum sínum. Tilvísun heldur hverju gildi, svo ekkert kemur tómt til baka; {{ui:Eiginleikar}} sýnir þau földu merkt „hidden“. {{key:Mod+Z}} setur gamla ástandið aftur í einu skrefi.
- **Gripir.** Valin kraftblokk sýnir eigin gripi þar sem breyturnar eru: lítinn þríhyrning fyrir sýnileikaástandið (smelltu á hann fyrir lista yfir ástönd), örvar á endum fjarlægðar, tvöfalda ör fyrir spegun. Aðeins sýnileikagripurinn virkar núna; hinir segja það í stöðustikunni.
- **Hin gildin, aðeins til lestrar.** Undir sýnileikalistanum sýnir {{ui:Sérsniðið}} einnig fjarlægðir blokkarinnar, jöfnunarhorn, speglunarástönd og punkta eins og teikningin geymir þau.
- **Breyting á sýnileikaástöndum.** Opnaðu blokkina með {{cmd:BEDIT}}: ritillinn sýnir eitt ástand, nefnt í stikunni fyrir ofan teikninguna (veldu annað þar). Skrifaðu {{cmd:BVSTATE}} til að skipta, bæta við (fela allt, sýna allt eða halda því sem sést), endurnefna eða eyða ástandi; {{cmd:BVHIDE}} felur valda hluti í ástandinu sem sést; {{cmd:BVSHOW}} sýnir þá földu daufa svo þú getir smellt á þá sem á að sækja aftur. Vistaðu blokkina: tilvísanir sem eru stilltar á endurnefnt ástand halda því undir nýja nafninu, og þær sem eru stilltar á eytt ástand sýna fyrsta ástandið.
- **Haldast kraftmiklar.** Vistaðar sem DWG í þeirri útgáfu sem teikningin kom í, haldast blokkirnar kraftmiklar, með því ástandi sem þú valdir: hitt forritið opnar þær sem sömu kraftblokkir. Sýnileikaástönd sem þú breyttir eru líka vistuð: nýju nöfnin þeirra, ástöndin sem þú bættir við og hvað hvert þeirra sýnir.

## Það sem er aðeins til lestrar, eða er ekki komið enn

| Ekki komið enn | Í staðinn, í dag |
|---|---|
| Breyting á fjarlægðum, hornum eða speglunum (teygju-, færslu- og speglunaraðgerðir) | Þær sýna aðeins til lestrar í {{ui:Sérsniðið}}; breyttu í forritinu sem gerði blokkina. |
| Uppflettun, XY, snúnings- og skautabreytur | Ekki lesnar enn: tilvísunin sýnist eins og hún var vistuð. |
| Að draga fjarlægðar-, speglunar- og punktagripi | Þeir sýna hvar breyturnar eru; sýnileikagripurinn og listinn {{ui:Sýnileiki}} í Eiginleikum skipta um ástönd. |
| Að gera kraftblokkir (bæta við breytum, eða sýnileikaástöndum við blokk sem hefur þau ekki) | Blokkir sem þú býrð til í CadCraft eru venjulegar blokkir; {{cmd:BPARAMETER}} segir það. |
| Að bæta við eða eyða hlutum í blokk með sýnileikaástöndum í blokkaritlinum | Blokkin er þá vistuð sem venjuleg blokk (ritillinn segir það þegar hann lokast). |
| Að halda þeim kraftmiklum í annarri DWG-útgáfu eða í DXF | Þær eru vistaðar sem venjulegar blokkir sem sýna ástandið sem þú valdir, og vistunin segir það. |

:::note
Að færa eða breyta hlutum í {{cmd:BEDIT}} heldur blokk með sýnileikaástöndum kraftmikilli. Blokk án ástanda, eða blokk þar sem hlutum var bætt við eða eytt í ritlinum, verður venjuleg blokk.
:::
