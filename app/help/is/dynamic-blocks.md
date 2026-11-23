---
title: Kraftblokkir
summary: Hvað CadCraft gerir við kraftblokkir í DWG-skrá: þær halda sínum réttu heitum, sýna það ástand sem þær voru vistaðar í, skipta um sýnileikaástand, sýna hin gildin sín og haldast kraftblokkir þegar þær eru vistaðar.
keywords: kraftblokk, kraftblokkir, sýnileiki, sýnileikaástand, snúa, teygja, uppflettitafla, breytur, sérsniðið, eiginleikar blokkar, *u blokkir, kraftur
from: dea2ee7c
---

## Hvað virkar

DWG-skrá sem gerð er með kraftblokkum opnast með þeim virkandi að þessu leyti:

- **Réttu heitin þeirra.** Kraftblokk er talin upp í spjaldinu {{ui:Blokkir}} undir sínu eigin heiti („Receptacle“, „Sink“), ekki sem ónefnd `*U`-blokk.
- **Ástandið sem þær voru vistaðar í.** Hver tilvísun sýnir nákvæmlega það sem hitt forritið sýndi: sýnileikaástandið sem hún var stillt á, teygð eða snúið eins og hún var vistuð.
- **Skipt um sýnileikaástand.** Veldu eina tilvísun (eða nokkrar af sömu blokk), opnaðu {{ui:Eiginleikar}} og veldu annað ástand úr listanum {{ui:Sýnileiki}} í hlutanum {{ui:Sérsniðið}}. Tilvísunin sýnir það ástand strax, og eigindirnar líka: þær sem ástandið felur hverfa, þær sem það sýnir birtast með gildum sínum. Tilvísun heldur hverju gildi, svo ekkert verður tómt; {{ui:Eiginleikar}} listar þau földu merkt „hidden“. {{key:Mod+Z}} setur gamla ástandið aftur í einu skrefi.
- **Gripin.** Valin kraftblokk sýnir sín eigin grip þar sem breytur hennar eru: lítinn þríhyrning fyrir sýnileikaástand (smelltu á hann fyrir lista yfir ástönd), örvar á endum fjarlægðar, tvöfalda ör fyrir spegun. Aðeins sýnileikagripið virkar núna; hin segja það á stöðustikunni.
- **Hin gildin, aðeins til lestrar.** Undir sýnileikalistanum sýnir {{ui:Sérsniðið}} líka fjarlægðir, jöfnunarhorn, speglunarstöður og punkta blokkarinnar eins og teikningin geymir þau.
- **Breyting á sýnileikaástöndum.** Opnaðu blokkina með {{cmd:BEDIT}}: ritillinn sýnir eitt ástand, nefnt í stikunni fyrir ofan teikninguna (veldu annað þar). Skrifaðu {{cmd:BVSTATE}} til að skipta, bæta við (fela allt, sýna allt eða halda því sem sést), endurnefna eða eyða ástandi; {{cmd:BVHIDE}} felur valda hluti í því ástandi sem sést; {{cmd:BVSHOW}} sýnir þá földu daufa svo þú getir smellt á þá sem þú vilt fá aftur. Vistaðu blokkina: tilvísanir sem stilltar eru á endurnefnt ástand halda því undir nýja heitinu, og þær sem stilltar eru á eytt ástand sýna fyrsta ástandið.
- **Haldast kraftblokkir.** Vistað sem DWG í þeirri útgáfu sem teikningin kom í haldast blokkirnar kraftblokkir, með ástandinu sem þú valdir: hitt forritið opnar þær sem sömu kraftblokkir. Sýnileikaástönd sem þú breyttir eru vistuð líka: nýju heitin þeirra, ástönd sem þú bættir við og það sem hvert þeirra sýnir.

## Það sem er aðeins til lestrar, eða er ekki komið enn

| Ekki komið enn | Í staðinn, núna |
|---|---|
| Breyting á fjarlægðum, hornum eða speglunum (teygju-, færslu- og speglunaraðgerðir) | Þau sýnast aðeins til lestrar í {{ui:Sérsniðið}}; breyttu þeim í forritinu sem bjó blokkina til. |
| Uppflettitafla, XY, snúnings- og pólbreytur | Ekki lesnar enn: tilvísunin sýnist eins og hún var vistuð. |
| Að draga fjarlægðar-, speglunar- og punktagrip | Þau sýna hvar breyturnar eru; sýnileikagripið og listinn {{ui:Sýnileiki}} í Eiginleikum skipta um ástönd. |
| Að búa til kraftblokkir af gerð hins forritsins (teygja, spegla, uppfletting) | Blokkir sem þú býrð til í CadCraft eru venjulegar blokkir; {{cmd:BPARAMETER}} segir það. Þínar eigin breytur og margar sýnileikabreytur eru í Breytustjóranum (sjá „Eigin breytur og sýnileikaástönd“ hér að neðan). |
| Að bæta við eða eyða hlutum í blokk með sýnileikaástöndum í blokkaritlinum | Blokkin er þá vistuð sem venjuleg blokk (ritillinn segir það þegar hann lokast). |
| Að halda þeim kraftblokkum í annarri DWG-útgáfu eða í DXF | Þær eru vistaðar sem venjulegar blokkir sem sýna ástandið sem þú valdir, og vistunin segir það. |

:::note
Að færa eða breyta hlutum í {{cmd:BEDIT}} heldur blokk með sýnileikaástöndum kraftblokk. Blokk án ástanda, eða blokk sem hlutum var bætt við eða eytt úr í ritlinum, verður venjuleg blokk.
:::

## Eigin breytur og sýnileikaástönd

Blokk sem þú býrð til í CadCraft getur borið sínar eigin breytur og **margar** sýnileikabreytur, hver með sín eigin ástönd. Skrifaðu {{cmd:BPARAMS}} (eða `BPM`) til að opna **Breytustjórann** fyrir blokkina sem þú breytir í {{cmd:BEDIT}}, fyrir blokk valinnar tilvísunar, eða fyrir blokkina sem þú nefnir.

- **Breytur**: heiti, gerð (tala, lengd, horn, fjöldi, já/nei) og gildi eða formúla yfir aðrar breytur (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Útkoma}} sýnir niðurstöðuna. Formúla sem virkar ekki, eða gildi sem passar ekki við gerð sína (fjöldi 1.5), er hafnað og stjórinn segir hvers vegna; ekkert annað breytist.
- **Sýnileikabreytur**: {{ui:Bæta við sýnileikabreytu}} býr til eina með fyrsta ástandi. Hvert ástand má endurnefna, fjarlægja (það síðasta helst) eða gefa „sýnir þegar“-tölu. Formúla velur ástandið út frá breytunum (ástandið sem talan passar við, annars ástandið á þeim stað í listanum); án formúlu velur hver tilvísun sitt eigið.
- **Að setja hluti í ástand**: í blokkaritlinum velur þú hlutina, skrifar {{cmd:BPARAMS}} og smellir á {{ui:Setja valda hluti hér}} á ástandinu. Hlutir sem engin sýnileikabreyta nefnir sjást alltaf.
- **Þessi tilvísun**: ef breytustjórinn er ræstur á valinni tilvísun sýnir hann líka gildi og ástönd þeirrar tilvísunar.

Utan blokkaritilsins er sérhver breyting eitt afturkallsskref. Í blokkaritlinum eru breytingarnar ritilsins: {{ui:Vista blokk}} heldur þeim. `-BPARAMS` spyr það sama í skipanalínunni.

**Í skránni.** DWG og DXF geyma breyturnar, hvaða hlutir eru í hvaða ástandi, og eigin gildi hverrar tilvísunar, í eigin skrám CadCraft; opnaðu skrána aftur í CadCraft og allt kemur til baka. Annað forrit sér hverja tilvísun sem blokkina með öllum hlutum sínum, því DWG geymir í mesta lagi eina sýnileikabreytu á hverja blokk af sinni gerð. Tilvísun sem annað forrit færði, eða blokk sem það breytti hlutum í, kemur til baka án þeirra hluta sem passa ekki lengur (ekkert er giskað).
