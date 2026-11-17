---
title: Klippa og lengja
summary: Klipptu línur til baka þar sem aðrar skerast og lengdu þær til að mæta öðrum, eitt stykki í einu eða mörg í einu með því að draga slóð í gegnum þau.
keywords: trimextendmode, gluggadráttur, klippa, lengja, tr, ex, hraðklipping, dráttur, frjáls teikning, slóð, girðing, skerast, shift, skurðarbrúnir, mörk, edgemode, hamur, staðall, hraður, eyða, forskoðun, veggir, hreinsun
from: 25fbc5bd
---

## Það sem þú lærir

Hvernig {{cmd:TRIM}} og {{cmd:EXTEND}} virka, og hraðvirkar leiðir til að nota þær: dragðu í gegnum marga búta í einu, haltu {{key:Shift}} niðri til að skipta á milli klippingar og lengingar, og sjáðu hvað fer áður en þú smellir.

## Klipptu einn bút

1. Teiknaðu langa lárétta línu og tvær stuttar línur sem þvera hana.
2. Sláðu inn `TR` og ýttu á {{key:Enter}}. Sagan segir `Núverandi stillingar: Hraðhamur, brúnir: Engin lenging`.
3. Settu bendilinn á langu línuna milli stuttu línanna tveggja. Búturinn verður grár og strikaður: það er hann sem fer.
4. Smelltu. Búturinn hverfur.
5. Ýttu á {{key:Enter}} til að ljúka skipuninni.

Í hraðhamnum (sjálfgefinn) er sérhver sýnilegur hlutur skurðarbrún, svo þú velur aldrei brúnirnar fyrst. Smelltu á bútinn sem þú vilt fjarlægja. Hlutur sem ekkert sker er eyddur í heilu lagi, og sagan segir frá því.

## Klipptu marga búta í einum drætti

1. Teiknaðu langa lárétta línu og tíu stuttar lóðréttar línur sem þvera hana.
2. Sláðu inn `TR` og ýttu á {{key:Enter}}.
3. Ýttu músarhnappi fyrir ofan langu línuna, vinstra megin við fyrstu lóðréttu línuna, og dragðu yfir allar tíu fyrir ofan langu línuna.

Meðan þú dregur birtist slóðin sem strikuð lína, og sérhver bútur sem hún hefur farið yfir verður grár. Slepptu: allir tíu efri bútarnir eru klipptir í einu skrefi. Sláðu inn `U` og ýttu á {{key:Enter}} til að setja þá alla aftur á sinn stað í einu.

:::tip
Þú getur líka smellt á tvo auða staði: línan á milli þeirra virkar eins og dregin slóð. Sláðu inn `F` (Fence) til að smella á röð punkta í staðinn, og ýttu síðan á {{key:Enter}}.
:::

:::touch
Dragðu fingur á sama hátt. Snerting á bút klippir hann.
:::

## Lengdu í staðinn, með Shift

1. Teiknaðu lóðrétta línu, og fimm stuttar lárétta línur til vinstri sem enda áður en hún kemur.
2. Sláðu inn `TR` og ýttu á {{key:Enter}}.
3. Haltu {{key:Shift}} niðri. Settu bendilinn á stuttu línu: hlutinn sem hún myndi lengjast um sýnist grár og strikaður.
4. Haltu enn {{key:Shift}} niðri og dragðu niður í gegnum stuttu línurnar fimm.

Allar fimm ná nú að lóðréttu línunni. {{key:Shift}} virkar öfugt í {{cmd:EXTEND}} (`EX`): smellur lengir, {{key:Shift}}+smellur klippir. Lenging lengir endann sem er næst þar sem þú smellir eða þar sem slóðin sker.

## Klipptu innan glugga

1. Sláðu inn `TR` og ýttu á {{key:Enter}}.
2. Sláðu inn `C` og ýttu á {{key:Enter}}.
3. Smelltu á tvö horn í kringum bútana sem á að fjarlægja.

Sérhver bútur sem liggur að minnsta kosti að hluta innan gluggans er klipptur.

Til að fá glugga bara með drætti, án þess að slá inn `C`: {{ui:Stillingar}} › {{ui:CadCraft}} › {{ui:Dráttur til að klippa og lengja}} ›
{{ui:Gluggi}}. Þá býr það til reit þegar þú ýtir á auðan stað og dregur, og sérhver bútur sem hann snertir er klipptur (eða lengdur, í {{cmd:EXTEND}}, eða með {{key:Shift}}). {{ui:Slóð}} (upphafið) skilar frjálsu slóðinni aftur. Stillingalínan í upphafi TRIM segir hvor er virk.

## Veldu skurðarbrúnirnar (staðalhamur)

Stundum á aðeins ein lína að klippa, eins og veggflötur sem margar aðrar línur þvera.

1. Sláðu inn `TR` og ýttu á {{key:Enter}}.
2. Sláðu inn `O` (mOde) og ýttu á {{key:Enter}}, og sláðu síðan inn `S` (Standard) og ýttu á {{key:Enter}}.
3. Við `Veldu skurðarbrúnir` smelltu á brúnalínurnar (eða dragðu glugga), og ýttu síðan á {{key:Enter}}. Ef ekkert er valið þegar ýtt er á {{key:Enter}} verður sérhver hlutur að brún.
4. Smelltu eða dragðu í gegnum bútana sem á að fjarlægja.

Aðeins valdar brúnir klippa, og hlutur sem engin brún sker er látinn í friði. Hamurinn helst þar til þú lokar síðunni; sláðu inn `O`, og síðan `Q` til að fara aftur í hraðhaminn. {{cmd:TRIMEXTENDMODE}} stillir hann áður en þú byrjar, eins og breytan með sama nafni gerir annars staðar: `0` Staðall, `1` Hraður. `T` (cuTting edges) velur nýjar brúnir hvenær sem er; í {{cmd:EXTEND}} er það `B` (Boundary edges).

## Brúnir sem myndu ná

1. Sláðu inn `TR` og ýttu á {{key:Enter}}.
2. Sláðu inn `E` (Edge) og ýttu á {{key:Enter}}, og síðan `E` (Extend) og ýttu á {{key:Enter}}.

Nú telst skurðarlína eða bogi sem stoppar stutt eins og hún héldi áfram: stutt lína klippir þar sem hún myndi skerast ef hún væri lengri. Sláðu inn `E`, og síðan `N` (No extend) til að skipta til baka. Þetta er það sama og EDGEMODE 1 og 0.

## Eyddu án þess að hætta

Sláðu inn `R` (eRase) og ýttu á {{key:Enter}}, veldu hlutina sem á að eyða, og ýttu á {{key:Enter}}. TRIM heldur áfram.

## Algengar villur

- **Heil lína hvarf.** Í hraðhamnum er hlutur sem ekkert sker eyddur. Sláðu inn `U` til að setja hann aftur, eða skiptu yfir í staðalham (`O`, `S`).
- **„Ekkert til að klippa þar: engin valin brún sker þann hlut.“** Staðalhamur klippir aðeins þar sem þú valdir brúnirnar. Sláðu inn `T` til að velja þær aftur.
- **„Engin mörk í þá átt.“** Lenging fann ekkert fram undan. Smelltu nær þeim enda sem á að lengjast, eða kveiktu á `E` (Edge, Extend) fyrir mörk sem stoppa stutt.
- **Dregið dró lasso í staðinn.** Dráttur klippir aðeins meðan TRIM eða EXTEND biður um hlut. Þegar engin skipun keyrir velur dráttur (sjá [Lasso-val](topic:lasso-selection)).
- **Aðeins línur, bogar, hringir og fjöllínur er hægt að klippa.** Sprengdu blokk fyrst til að klippa línur hennar.
