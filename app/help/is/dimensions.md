---
title: Málsetja grunnmynd
summary: Bættu við línulegum, samsíða, hornréttum, radíus- og þvermálsmálsetningum, tengdu þær með Halda áfram og Grunnlínu, og breyttu textanum.
keywords: málsetning, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, keðja, strengur, merkja, málsetningartól, finna, hvar, tækjastika, mæla, mm, cm, m, km, einingar
from: 9ee65123
---

## Hvað þú gerir

Málsettu herbergi: heildarbreidd og hæð, strengur af málsetningum meðfram einum vegg, skáhallan vegg, bogadregið horn og horn.

Áður en þú byrjar, lestu [Stilla stærð málsetninga](topic:dimension-settings) ef teikningin þín er stór: málsetningartexti er 2.5 teikniseiningar á hæð sjálfgefið, sem er agnarsmátt í teikningu mældri í millimetrum. Fyrir skrefin hér að neðan, skrifaðu `DIMSCALE`, ýttu á {{key:Enter}}, skrifaðu `50` og ýttu á {{key:Enter}} fyrst.

## Hvar málsetningartólin eru

Með valmyndarstílnum CadCraft (þeim sem CadCraft byrjar með) eru málsetningartólin á tækjastikunni fyrir ofan teikninguna, í hópnum {{ui:Merkja}}: {{ui:Línuleg}}, {{ui:Samsíða}}, {{ui:Horn}}, {{ui:Radíus}} og {{ui:Þvermál}}. Valmynd hópsins, {{ui:Meira}}, hefur {{ui:Halda áfram með málsetningu}} og {{ui:Grunnmálsetning}}. Haltu bendlinum yfir hnappi til að sjá hvað hann gerir.

- Með valmyndarstílnum {{ui:Klassískt teikniforrit}} eða {{ui:Borði}} skaltu opna flipann {{ui:Merkja}}: tólin eru í spjaldinu {{ui:Málsetningar}}. {{ui:Klassískt teikniforrit}} hefur líka {{ui:Línuleg}} á flipanum {{ui:Heim}}, undir {{ui:Merking}}. Sjá [Valmyndir, lyklar og mús](topic:menus-keys-and-mouse).
- Eða skrifaðu skipunina á skipanalínunni undir teikningunni og ýttu á {{key:Enter}}: `DLI` (línuleg), `DAL` (samsíða), `DAN` (horn), `DRA` (radíus), `DDI` (þvermál), `DCO` (halda áfram), `DBA` (grunnlína).
- Á þröngum skjá er tækjastikan í einni röð: strjúktu henni til hliðar til að ná í {{ui:Merkja}}.

Til að sýna lengdir í millimetrum, sentímetrum, metrum eða kílómetrum, sjá [Málsetningar í mm, cm, m eða km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Teiknaðu eitthvað til að málsetja

1. Skrifaðu `PL` og ýttu á {{key:Enter}}.
2. Skrifaðu `0,0` og ýttu á {{key:Enter}}.
3. Skrifaðu `@6000,0` og ýttu á {{key:Enter}}.
4. Skrifaðu `@1500<60` og ýttu á {{key:Enter}}.
5. Skrifaðu `@0,2700` og ýttu á {{key:Enter}}.
6. Skrifaðu `@-6750,0` og ýttu á {{key:Enter}}.
7. Skrifaðu `C` og ýttu á {{key:Enter}}. Útlínan lokast.
8. Skrifaðu `C` og ýttu á {{key:Enter}} til að byrja hring.
9. Smelltu inni í herberginu, fjarri veggjunum, fyrir miðpunktinn.
10. Skrifaðu `600` og ýttu á {{key:Enter}}. Þetta er súla.
11. Smelltu á {{ui:Mörk}}.

## Línuleg: lárétt eða lóðrétt

1. Skrifaðu `DLI` og ýttu á {{key:Enter}}.
2. Við `Specify first extension line origin` skaltu festa við neðra vinstra horn (Endapunktur) og smella.
3. Við `Specify second extension line origin` skaltu festa við neðra hægra horn og smella.
4. Færðu krosshárið fyrir neðan herbergið. Málsetningin fylgir, lárétt.
5. Smelltu til að setja málsetningarlínuna.

Sagan segir `Dimension text = 6000`.

Hvar þú setur línuna ræður stefnunni: fyrir neðan eða ofan gefur lárétta málsetningu, vinstra eða hægra megin gefur lóðrétta. Til að neyða hana skrifarðu `H` (lárétt), `V` (lóðrétt) eða `R` (snúin, síðan horn) áður en þú setur hana.

:::tip
Ýttu á {{key:Enter}} við fyrstu spurninguna í stað þess að velja punkt, smelltu síðan á línu, boga, hring eða hluta fjöllínu. CadCraft tekur báða enda fyrir þig.
:::

## Halda áfram: strengur af málsetningum

{{cmd:DIMCONTINUE}} ({{ui:Merkja}} › {{ui:Meira}} › {{ui:Halda áfram með málsetningu}}, eða `DCO`) heldur áfram frá síðustu línulegu eða samsíða málsetningu sem þú gerðir, og hver ný byrjar þar sem sú síðasta endaði.

1. Skrifaðu `DLI` og ýttu á {{key:Enter}}.
2. Skrifaðu `0,0` og ýttu á {{key:Enter}} fyrir fyrsta upphafspunkt.
3. Skrifaðu `2000,0` og ýttu á {{key:Enter}} fyrir annan upphafspunkt.
4. Smelltu fyrir neðan herbergið til að setja hana.
5. Skrifaðu `DCO` og ýttu á {{key:Enter}}.
6. Skrifaðu `4500,0` og ýttu á {{key:Enter}}. Önnur málsetning fylgir á eftir þeirri fyrstu, á sömu línu.
7. Festu við neðra hægra horn og smelltu. Þriðja lýkur strengnum.
8. Ýttu á {{key:Enter}} til að ljúka skipuninni.

:::note
Hér eru punktarnir skrifaðir sem algild hnit af ásettu ráði. `@` punktur telur frá síðasta punkti sem þú gafst, og síðasti punktur er þar sem þú settir síðustu málsetningarlínuna, ekki endi málsetningarinnar. Algildir punktar, festingar eða bein fjarlægð með {{ui:Lóðrétt/lárétt}} kveikt eru öruggari í málsetningarstreng.
:::

Skrifaðu `U` og ýttu á {{key:Enter}} til að taka síðustu málsetningu í strengnum til baka án þess að hætta skipuninni.

## Grunnlína: málsetningar staflaðar frá einni línu

{{cmd:DIMBASELINE}} ({{ui:Merkja}} › {{ui:Meira}} › {{ui:Grunnmálsetning}}, eða `DBA`) mælir sérhverja nýja málsetningu frá fyrsta upphafspunkti þeirrar síðustu, og staflar hverri einni lengra út.

1. Skrifaðu `DLI` og ýttu á {{key:Enter}}.
2. Festu við neðra vinstra horn og smelltu.
3. Festu við efra vinstra horn og smelltu.
4. Færðu krosshárið til vinstri við herbergið og smelltu. Lóðrétt málsetning birtist.
5. Skrifaðu `DBA` og ýttu á {{key:Enter}}.
6. Festu við efri enda 60 gráðu veggjarins (Endapunktur) og smelltu. Önnur lóðrétt málsetning birtist, einu skrefi lengra út en sú fyrsta.
7. Ýttu á {{key:Enter}} til að ljúka.

## Samsíða: raunveruleg lengd hallandi línu

1. Skrifaðu `DAL` og ýttu á {{key:Enter}}.
2. Ýttu á {{key:Enter}} til að velja hlut.
3. Smelltu á 60 gráðu vegginn.
4. Færðu út og smelltu til að setja.

Textinn segir 1500: raunveruleg lengd, mæld meðfram veggnum.

## Radíus og þvermál

1. Skrifaðu `DRA` og ýttu á {{key:Enter}}.
2. Smelltu á súluhringinn.
3. Færðu krosshárið. Leiðarlínan vísar frá miðpunkti að krosshárinu.
4. Smelltu til að setja textann.

Textinn segir `R600`. {{cmd:DIMDIAMETER}} (`DDI`) gerir það sama með ⌀ tákni og þvermálinu.

## Horn

Veggirnir hér eru ein fjöllína, svo mældu hornið eftir hornpunkti þess. (Á milli tveggja aðskildra lína geturðu smellt á línurnar í staðinn.)

1. Skrifaðu `DAN` og ýttu á {{key:Enter}}.
2. Við `Select arc, circle or line, or Enter for a vertex` ýttu á {{key:Enter}}.
3. Við `Specify angle vertex` festu við neðra hægra horn og smelltu.
4. Við `Specify first angle endpoint` festu við neðra vinstra horn og smelltu.
5. Við `Specify second angle endpoint` festu við efri enda 60 gráðu veggjarins og smelltu.
6. Færðu krosshárið inni í herberginu, nálægt horninu, og smelltu.

Textinn segir `120°`, innra horn hornsins. Ef málsetningin er sett hinum megin við hornið mælir hún hornið þeim megin í staðinn. Smelltu á boga við fyrstu spurninguna til að málsetja hornið sem hann spannar, eða smelltu á tvær línur til að málsetja hornið á milli þeirra.

## Breyttu textanum

Til að skrifa þinn eigin texta skaltu skrifa `T` og ýta á {{key:Enter}} áður en þú setur málsetninguna, og skrifa síðan textann. Í textanum þínum stendur `<>` fyrir mælda gildið: `<> TYP.` gefur `6000 TYP.`. Ýttu á {{key:Enter}} á auðri línu til að halda mælda gildinu.

Til að breyta málsetningu sem þegar er til:

1. Smelltu á hana.
2. Í hægra spjaldinu skrifarðu í {{ui:Texti}}. Skildu eftir tómt fyrir mælda gildið.
3. Ýttu á {{key:Enter}}.

## Málsetningar fylgja rúmfræðinni

Málsetning man punktana sína. Dragðu einn af gripum hennar, eða færðu, snúðu eða skalaðu hana með hlutunum sem hún mælir, og hún mælir aftur. Ef þú teygir rúmfræðina án þess að færa málsetninguna, fylgir hún ekki: hún heldur sínum eigin punktum.

## Algeng mistök

- **Textinn og örvarnar eru örsmáar eða risastórar.** Stilltu heildarkvarðann: sjá [Stilla stærð málsetninga](topic:dimension-settings).
- **„Pick a point inside the angle you want to measure.“** Punkturinn sem þú smelltir á fyrir hornmálsetningu liggur á einum leggnum. Færðu hann inn í hornið.
- **Halda áfram byrjaði á röngri málsetningu.** Hún heldur alltaf áfram frá síðustu línulegu eða samsíða málsetningu sem var gerð í þessari setu. Gerðu (eða gerðu aftur) þá sem á að halda áfram frá fyrst.
- **Málsetningin kom lóðrétt.** Þú settir hana til hliðar. Skrifaðu `H` áður en þú setur hana.
- **Fet og tommur.** Stilltu lengdarsnið teikningarinnar á {{ui:Byggingarlist}} fyrst, eða {{ui:Snið}} málsetningar í {{ui:Eiginleikar}}: sjá [Fet og tommur í málsetningum](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Tölurnar eru ekki í þeirri einingu sem þú vilt.** Veldu {{ui:Einingar í texta}}: sjá [Málsetningar í mm, cm, m eða km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
