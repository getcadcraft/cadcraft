---
title: Smella á punkta hluta
summary: Notaðu smellifestingar hluta, lóðrétt/lárétt og rist til að velja nákvæma enda, miðpunkta, miðjur og skurðpunkta með músinni.
keywords: osnap, object snap, endapunktur, miðpunktur, miðja, skurðpunktur, hornrétt, fjórðungur, næsti, hnútur, innsetning, lóðrétt, rist, f3, f8, f7, pólarrakning, pólar, polarang, rakning smellifestinga, otrack, rakning, f10, f11
from: 3cf17f94
---

## Það sem þú býrð til

Rétthyrning með hornalínum sínum tveimur, hring miðjaðan þar sem þær mætast, og línu frá miðpunkti einnar hliðar að hringnum. Hverjum punkti er valinn með músinni, og hver punktur er nákvæmur.

## Hvernig smellifesting virkar

Meðan skipun biður um punkt leitar CadCraft að smellifestipunktum innan um 10 pixla frá krosshárinu. Þegar það finnur einn birtist merki og miði („Endapunktur“, „Skurðpunktur“), og smellur lendir **nákvæmlega** á þeim punkti, ekki þar sem krosshárið er.

Smellifestingar eru kveiktar þegar {{ui:Smellifesta}} í stöðustikunni er niðurþrýst. {{key:F3}} kveikir og slekkur á þeim.

Smellifestingarnar sem þú getur notað eru:

| Smellifesting | Lendir á |
|---|---|
| Endapunktur | Endar á línum, bogum og fjöllínuhlutum |
| Miðpunktur | Miðjan á línum, bogum og fjöllínuhlutum |
| Miðja | Miðja hringja og boga, og bogahluta fjöllína |
| Fjórðungur | 0, 90, 180 og 270 gráðu punktar hringja og boga |
| Skurðpunktur | Þar sem tveir hlutir skerast |
| Hornrétt | Punkturinn á hlut hornrétt á síðasta punkt (þarf grunnpunkt) |
| Snertill | Punkturinn á hring eða boga þar sem lína frá síðasta punkti snertir hann rétt. Án síðasta punkts (fyrsti punktur línu) segir merkið „bíður“: snertipunkturinn er reiknaður þegar næsti punktur er þekktur, svo lína frá Snertli til Snertils snertir báða hringina |
| Næsti | Næsti punktur á hvaða hlut sem er |
| Hnútur | Punktahlutir |
| Innsetning | Innsetningarpunktur texta og blokkartilvísana |

Allar eru kveiktar sjálfgefið nema Snertill og Næsti. Næsti vinnur oft þegar þú vilt eitthvað annað; kveiktu á Snertli þegar þú þarft á honum að halda.

## Veldu smellifestingar

1. Smelltu á litlu örina við hliðina á {{ui:Smellifesta}} í stöðustikunni. Listinn {{ui:Smellifestingar hluta}} opnast.
2. Hakaðu við eða afhakaðu smellifestingar. Breytingar taka gildi strax.
3. Smelltu aftur á örina til að loka listanum.

CadCraft man valið þitt, og stillingar {{ui:Hnitanet}}, {{ui:Lóðrétt/lárétt}} og {{ui:Smellifesta}}, í þessum vafra.

## Skref

1. Sláðu inn `REC` og ýttu á {{key:Enter}}.
2. Sláðu inn `0,0` og ýttu á {{key:Enter}}.
3. Sláðu inn `@4000,3000` og ýttu á {{key:Enter}}. Rétthyrningur birtist.
4. Smelltu á {{ui:Mörk}}.
5. Sláðu inn `L` og ýttu á {{key:Enter}}.
6. Færðu krosshárið að neðra vinstra horninu. Merkið sýnir „Endapunktur“. Smelltu.
7. Færðu að efra hægra horninu þar til „Endapunktur“ birtist. Smelltu.
8. Ýttu á {{key:Enter}} til að ljúka línunni.
9. Ýttu á {{key:Enter}} aftur til að endurtaka {{cmd:LINE}}, og teiknaðu hina hornalínuna frá neðra hægra horninu að efra vinstra horninu á sama hátt.
10. Sláðu inn `C` og ýttu á {{key:Enter}} til að byrja hring.
11. Færðu krosshárið þangað sem hornalínurnar mætast. Merkið sýnir „Skurðpunktur“. Smelltu.
12. Sláðu inn `800` og ýttu á {{key:Enter}}.

Þú ættir að sjá hring miðjaðan nákvæmlega á skurðpunktinum.

13. Sláðu inn `L` og ýttu á {{key:Enter}}.
14. Færðu að miðpunkti vinstri hliðar rétthyrningsins þar til „Miðpunktur“ birtist. Smelltu.
15. Færðu krosshárið á hringinn, á vinstri hlið hans. Merkið sýnir „Hornrétt“ eða „Fjórðungur“; það er sami punktur hér. Smelltu.
16. Ýttu á {{key:Enter}}.

Nýja línan liggur frá miðpunkti vinstri hliðar og stöðvast nákvæmlega á hringnum.

## Sleppa smellifestingu í einn smell

Haltu {{key:Shift}} inni meðan þú smellir. Smellifestingar eru hunsaðar fyrir þann smell, og punkturinn fer nákvæmlega þangað sem krosshárið er (eða eftir stefnu lóðrétt/lárétt, ef það er kveikt).

## Lóðrétt/lárétt

{{ui:Lóðrétt/lárétt}} ({{key:F8}}) heldur næsta punkti beint þvert eða beint upp og niður frá grunnpunktinum. Það á við um smelli og beina fjarlægðarinnslætt (bert númer sem slegið er inn við hvatninguna). Smellifestingar hafa forgang yfir lóðrétt/lárétt: ef smellimerki birtist, fer smellurinn í smellifestinguna.

## Pólarrakning

{{ui:Pólar}} ({{key:F10}}) er lóðrétt/lárétt í fleiri hornum. Meðan skipun hefur grunnpunkt (síðasti punktur línu, grunnpunktur færslu), raðast bendillinn upp þegar hann kemur nálægt geisla frá honum í margfeldi af pólarskrefinu: punktalína birtist, og miði við krosshárið sýnir `Polar: 1200 < 30°`. Smelltu til að nota þann punkt, eða sláðu inn fjarlægð: `1200` fer nákvæmlega 1200 eftir geislanum.

Skrefið er 90° þar til þú breytir því: sláðu inn {{cmd:POLARANG}}, ýttu á {{key:Enter}} og sláðu inn `30` (eða 45, 22.5, 15 …). Pólar og lóðrétt/lárétt útiloka hvort annað: að kveikja á öðru slekkur á hinu.

## Rakning smellifestinga hluta

{{ui:Rakning}} ({{key:F11}}) raðar bendlinum upp við smellifestipunkta sem þú hefur hvílt á, svo þú getir valið punkt í sömu hæð og eitt horn og fyrir ofan annað án þess að teikna hjálparlínur.

1. Kveiktu á {{ui:Smellifesta}} og {{ui:Rakning}}, og byrjaðu skipun sem biður um punkt (`L`).
2. Hvíldu bendilinn á smellifestipunkt, eins og horn, í hálfa sekúndu, án þess að smella. Lítill kross markar hann: hann er skráður. Hvíldu aftur á honum til að sleppa honum.
3. Færðu bendilinn beint frá honum, lárétt eða lóðrétt. Punktalína fylgir bendlinum og merkið segir `Track: 600 < 90°`. Smelltu, eða sláðu inn fjarlægð.
4. Skráðu annan punkt, og færðu þangað sem lóðrétt lína í gegnum annan mætir láréttri línu í gegnum hinn: bendillinn smellur á þann skurðpunkt (`Track: where two lines meet`).

Með {{ui:Pólar}} líka kveiktu, rekjast skráðir punktar í öllum pólarhornum. Allt að sjö punktar eru geymdir þar til skipuninni lýkur. {{key:Shift}} slekkur á rakningu í einn smell, eins og á smellifestingum.

## Rist

{{ui:Hnitanet}} ({{key:F7}}) sýnir net af línum á bak við teikninguna, með þykkari línum á fimmta hverri línu; bilið breytist þegar þú aðdráttar. Það er aðeins leiðarvísir þar til þú kveikir á Smella við rist ({{key:F9}}): þá lenda smellir á næsta ristarpunkt, nema smellifesting taki punktinn fyrst.

## Flýtilyklar á tölvunni þinni

{{key:F9}} er Smella við rist, {{key:F10}} er Pólar og {{key:F11}} er Rakning.

:::mac
Á Mac stjórna F3, F7, F8 og F9 yfirleitt Mission Control og margmiðlun. Haltu **fn** inni með takkanum, eða kveiktu á venjulegum fallatökkum, eins og lýst er í [Lyklar, mýs og snertiplötur](common:keys). Hnappar stöðustikunnar virka alltaf.
:::

:::firefox
Í Firefox er F7 einnig takkinn fyrir caret browsing. Ef Firefox spyr hvort kveikja eigi á caret browsing, veldu **Nei**. Notaðu hnappinn {{ui:Hnitanet}} ef spurningin kemur aftur og aftur.
:::

:::touch
Á snertiskjá er enginn svífandi bendill, svo smellimerkið birtist aðeins þar sem fingurinn snertir. Aðdráttu nærri fyrir smá skotmörk, eða sláðu inn hnit í staðinn.
:::

## Algeng mistök

- **Smellurinn fór á rangan punkt.** Skoðaðu miðann á merkinu áður en þú smellir: Endapunktur vinnur Miðpunkt þegar báðir eru nálægt. Aðdráttu að, eða afhakaðu smellifestingar sem þú þarft ekki.
- **Ekkert merki birtist.** {{ui:Smellifesta}} er slökkt, eða smellifestingin sem þú vilt er afhakuð, eða hluturinn er á lagi sem er slökkt eða frosið.
- **Smellifestingar grípa rangt atriði í þéttri teikningu.** Aðdráttu að. Fjarlægðin fyrir smellifestingu er mæld í skjápixlum, svo aðdráttur gerir hana minni á teikningunni.
- **Að búast við að Shift gefi beina línu.** Í CadCraft slekkur Shift á smellifestingum í einn smell. Notaðu {{ui:Lóðrétt/lárétt}} fyrir beinar línur.
- **Að búast við að punktar lendi á ristarpunktum.** Kveiktu á {{ui:Smella við rist}} ({{key:F9}}), eða sláðu inn hnit fyrir hringtölur.
