---
title: Mús, snertiborð og snerting
summary: Hvernig þú þysjar, hliðrar, hægrismellir og velur í CadCraft með músarhjóli, Mac- eða PC-snertiborði, eða snertiskjá, og hvað er ólíkt milli vafra.
keywords: snertiborð, snertiflötur, magic mouse, snerting, spjaldtölva, ipad, hliðra, aðdráttur, klípa, hægri smellur, tveggja fingra, miðhnappur, vafri, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft er hannað fyrir mús með hjóli. Allt virkar líka með snertiborði, með nokkrum venjum sem þarf að læra. Snertiskjáir virka til að velja, með takmörkunum.

## Músarhjól

- **Aðdráttur:** snúðu hjólinu. Teikningin þysjar að krosshárinu, þannig að benda á það sem þú vilt sjá.
- **Hliðra:** haltu hjólinu niðri og dragðu, eða dragðu með hægri hnappinum.
- **Aðdráttur að öllu:** tvísmelltu á hjólið, eða smelltu á {{ui:Mörk}}.
- **Aftur í fyrra útsýni:** smelltu á {{ui:Fyrri}} í Sýn-hópnum, eða skrifaðu `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Röð hjólaskrefa telst sem eitt útsýni, þannig að eitt {{ui:Fyrri}} afturkallar hana. Vistaðu útsýni sem þú kemur oft aftur til með {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** hægrismelltu.

## Snertiborð

:::mac
- **Hliðra:** færðu tvo fingur á snertiborðinu, í hvaða átt sem er: teikningin fylgir fingrunum. Þú getur líka dregið með tveggja fingra smelli sem er haldið niðri (hægrihnapps-drag).
- **Aðdráttur:** klíptu með tveimur fingrum. Aðdrátturinn fylgir krosshárinu.
- **Hægrismellur (Enter):** smelltu með tveimur fingrum. Kveiktu á „Secondary click“ í **System Settings**, síðan **Trackpad**, ef það gerir ekkert. Control-smellur gæti talist venjulegur smellur í CadCraft en ekki hægrismellur, notaðu því tveggja fingra smell.
- **Aðdráttur að svæði:** smelltu á {{ui:Gluggi}} í Sýn-hópnum og smelltu á tvö horn.
:::

:::windows linux
- **Hliðra:** færðu tvo fingur á snertiborðinu, í hvaða átt sem er: teikningin fylgir fingrunum. Þú getur líka dregið með hægri hnappinn haldinn niðri.
- **Aðdráttur:** klíptu með tveimur fingrum. Aðdrátturinn fylgir krosshárinu.
- **Hægrismellur (Enter):** smelltu með tveimur fingrum, eða smelltu á neðra hægra horn snertiborðsins, eftir stillingum snertiborðsins.
- **Aðdráttur að svæði:** smelltu á {{ui:Gluggi}} í Sýn-hópnum og smelltu á tvö horn.
:::

Að halda {{key:Space}} niðri og draga hliðrar **ekki** í CadCraft: {{key:Space}} er Enter.

Músarhjól þysjar enn, eitt skref í einu. Snertiborð sem sendir skrun í heilum skrefum, eins og hjól, þysjar með tveggja fingra skruni í stað þess að hliðra: þysjaðu út, benddu á svæðið sem þú vilt og þysjaðu aftur inn. 3D-flipinn heldur sínum eigin snertiborðshreyfingum (sjá [Líkan í 3D](topic:3d-solids#look-around)).

## Snertiskjáir og spjaldtölvur

CadCraft les fingur sem músarsmell:

- Snerting velur punkt eða hlut, eða velur.
- Að draga fingur á tómt rými dregur reipi: hreyfing til hægri fyrst gefur glugga, til vinstri fyrst krossglugga; sjá [Reipivalning](topic:lasso-selection).
- Í {{cmd:TRIM}} og {{cmd:EXTEND}} klippir eða lengir það að draga fingur í gegnum bita þá alla.
- Að draga grip valins hlutar færir gripið (grip og valreitur eru stærri fyrir fingur).
- **Klíptu** með tveimur fingrum til að þysja um punktinn á milli þeirra; færðu tvo fingur saman til að **hliðra**. Annar fingur hættir við það sem hinn byrjaði, þannig að klípa skilur aldrei eftir sig merki.
- **Löng ýting** (haltu kyrru í um hálfa sekúndu) er hægrismellur: {{key:Enter}}. Hún endar skipun, lýkur vali, eða endurtekur síðustu skipun.

Undir skipanalínunni birtist **takkaröð**: {{ui:Esc}}, {{ui:Afturkalla}}, {{ui:Endurgera}}, stafirnir sem spjaldtölvulyklaborð felur (`@` `,` `<` `'` `"` `-`), {{ui:Smellifesta}}, {{ui:Lóðrétt/lárétt}}, lyklaborðshnappur og stór {{ui:Enter}}. Pikkaðu á lyklaborðshnappinn (eða skipanalínuna) til að skrifa skipun eða tölu.

Enginn sveimur er til, þannig að smellifestingarmerki birtast aðeins þar sem fingurinn er.

:::touch
Þú notar snertiskjá. Fyrir eitthvað meira en snögga skoðun gera utanaðkomandi lyklaborð og mús eða snertiborð CadCraft mun auðveldara í notkun.
:::

## Vafrar

CadCraft virkar eins í Chrome, Edge, Firefox og Safari, á Mac, Windows og Linux. Munurinn er lítill:

| Efni | Það sem þarf að vita |
|---|---|
| Opna DWG | Stórar teikningar taka nokkrar sekúndur að lesa í hverjum vafra; stöðulínan sýnir „Les …“ meðan á stendur |
| Niðurhöl | Hver vafri ákveður hvert niðurhöl fara og hvort spurt sé fyrst; sjá [Vafrar og tölvur](common:browsers) |
| Opna til prentunar | Opnar PDF í nýjum flipa. Ef vafrinn lokar sprettigluggum sækir CadCraft PDF-skjalið í staðinn |
| F7 | Firefox gæti boðið textaskoðun (caret browsing); veldu Nei |
| Yfirgefa með óvistuðum breytingum | Hver vafri sýnir sína eigin spurningu „Yfirgefa síðu?“, sem CadCraft getur ekki breytt |

:::safari
Í Safari gæti PDF sem opnað er með {{ui:Opna til prentunar}} birst í flipanum án þess að prenta: notaðu **File**, síðan **Print**.
:::

:::firefox
Firefox gæti spurt hvað eigi að gera við hvert niðurhal. Veldu að vista skrána, eða breyttu þessu einu sinni í stillingum Firefox undir Niðurhöl.
:::
