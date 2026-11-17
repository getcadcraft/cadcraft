---
title: Teikna með hnitum
summary: Teikna nákvæma gólfútlínu með því að slá inn algildis-, afstæð og pólhnit, og með beinni fjarlægðarinnslætti.
keywords: lína, pline, fjöllína, hnit, afstætt, pólar, algilt, bein fjarlægð, @, innsláttur punkta, nákvæmt, lóðrétt
from: 19e82350
---

## Það sem þú býrð til

Útlínuna af L-laga herbergi, 6000 x 4500 með 2000 x 1500 útskurði, teiknaða nákvæmlega, auk veggs í 30 gráðum. Þú notar allar fjórar leiðirnar til að slá inn punkt. Vinnðu í millimetrum: ein teikningareining jafngildir einum millimetra.

Skjótt yfirlit yfir öll snið er í [Innsláttur hnita og fjarlægða](topic:coordinate-entry).

## Áður en þú byrjar

1. Opnaðu CadCraft. Ef teikning er opin, smelltu fyrst á {{ui:Ný}}.
2. Ýttu á {{key:Esc}} svo ekkert sé valið. Hægra spjaldið sýnir {{ui:Núverandi stillingar}}.
3. Stilltu {{ui:Einingar}} á {{ui:Millimetrar}}. Engu er breytt að stærð; þetta segir blöðum og prentunum einungis hvað ein eining þýðir.

## Algild hnit: fyrsti punkturinn

Algilt hnit er staða mæld frá upphafspunktinum, slegin inn sem `x,y`.

1. Sláðu inn `L` og ýttu á {{key:Enter}}. Hvatningin er `Specify first point:`.
2. Sláðu inn `0,0` og ýttu á {{key:Enter}}.

Línan teygist nú frá upphafspunktinum að krosshárinu. Hnitin á stöðustikunni sýna fjarlægð og horn frá upphafspunkti þegar þú hreyfir þig.

## Afstæð hnit: @dx,dy

Afstætt hnit er slegið inn sem `@dx,dy`: svo langt þvert, svo langt upp, frá síðasta punkti. Neikvæðar tölur fara til vinstri eða niður.

3. Sláðu inn `@6000,0` og ýttu á {{key:Enter}}. 6000 lína liggur til hægri.
4. Sláðu inn `@0,3000` og ýttu á {{key:Enter}}.
5. Sláðu inn `@-2000,0` og ýttu á {{key:Enter}}.
6. Sláðu inn `@0,1500` og ýttu á {{key:Enter}}.

Þú ættir að sjá fjórar tengdar línur sem klifra upp hægri hlið herbergisins.

## Bein fjarlægðarinnsláttur: bert númer

Þegar þú slærð inn eina tölu fer CadCraft þá fjarlægð í átt að krosshárinu. Kveiktu á {{ui:Lóðrétt/lárétt}} svo stefnan smellist á lárétta eða lóðrétta línu.

7. Ýttu á {{key:F8}}, eða smelltu á {{ui:Lóðrétt/lárétt}} í stöðustikunni. Stöðustikan segir „Lóðrétt/lárétt kveikt“.
8. Færðu krosshárið til vinstri við síðasta punkt. Teygjulínan helst lárétt.
9. Sláðu inn `4000` og ýttu á {{key:Enter}}. Línan fer 4000 til vinstri.
10. Færðu krosshárið fyrir neðan síðasta punkt.
11. Sláðu inn `4500` og ýttu á {{key:Enter}}. Þú ert kominn aftur á upphafspunktinn.
12. Ýttu á {{key:Enter}} á auðu hvatningunni til að ljúka skipuninni.

:::mac
F8 gæti stjórnað margmiðlunarspilun á Mac-lyklaborði. Haltu **fn** inni og ýttu á F8, eða smelltu á {{ui:Lóðrétt/lárétt}}. Sjá [Lyklar, mýs og snertiplötur](common:keys).
:::

Nú ertu með lokaða L-laga útlínu úr sex aðskildum línum.

13. Smelltu á {{ui:Mörk}} til að sjá allt.

## Pólhnit: @fjarlægð<horn

Pólhnit er slegið inn sem `@fjarlægð<horn`. Horn eru í gráðum, mæld rangsælis frá jákvæðri X-stefnu: 0 er hægri, 90 er upp, 180 er vinstri, 270 (eða -90) er niður.

14. Sláðu inn `L` og ýttu á {{key:Enter}}.
15. Sláðu inn `6000,0` og ýttu á {{key:Enter}} til að byrja á neðra hægra horninu.
16. Sláðu inn `@2500<-30` og ýttu á {{key:Enter}}. 2500 lína fer frá horninu, niður og til hægri í 30 gráðum undir láréttu.
17. Ýttu á {{key:Enter}} til að ljúka skipuninni.

Pólhnit án `@`, eins og `2500<30`, eru mæld frá upphafspunktinum í stað síðasta punkts.

## Sama útlína sem ein fjöllína

Sex aðskildar línur duga í mörg verk, en fjöllína er einn hlutur: hún færist, mælist og velst sem heild. Notaðu {{cmd:PLINE}} með sama innslætti.

1. Sláðu inn `PL` og ýttu á {{key:Enter}}.
2. Sláðu inn `0,-6000` og ýttu á {{key:Enter}} til að byrja fyrir neðan fyrstu útlínuna.
3. Sláðu inn `@6000,0`, og ýttu síðan á {{key:Enter}}.
4. Sláðu inn `@0,3000`, og ýttu síðan á {{key:Enter}}.
5. Sláðu inn `@-2000,0`, og ýttu síðan á {{key:Enter}}.
6. Sláðu inn `@0,1500`, og ýttu síðan á {{key:Enter}}.
7. Sláðu inn `@-4000,0`, og ýttu síðan á {{key:Enter}}.
8. Sláðu inn `C` og ýttu á {{key:Enter}}. Fjöllínan lokast og skipunin endar.
9. Smelltu á nýju útlínuna. Hægra spjaldið sýnir „Fjöllína“, {{ui:Hornpunktar}}, {{ui:Lengd}} og, af því hún er lokuð, {{ui:Flatarmál}}.

Flatarmálið ætti að sýna 24000000 (fermillimetrar, sem eru 24 fermetrar).

## Valkostir við teikningu

- Í {{cmd:LINE}} og {{cmd:PLINE}} sláðu inn `U` og ýttu á {{key:Enter}} til að taka síðasta hluta til baka án þess að hætta skipuninni.
- Í {{cmd:LINE}} lokar `C` aftur á fyrsta punktinn þegar eru að minnsta kosti tveir hlutar.
- Í {{cmd:PLINE}} skiptir `A` yfir í bogahluta (hver bogi heldur áfram mjúklega frá hlutanum á undan), og `L` skiptir aftur yfir í línur. Í bogaham er lokunarvalkosturinn `CL`.
- Með því að ýta á {{key:Enter}} við `Specify first point:` í {{cmd:LINE}} byrjar hún frá síðasta punkti sem þú gafst, svo þú getir haldið áfram þar sem þú hættir.

## Algeng mistök

- **Að slá inn `6000,0` þegar þú ætlaðir `@6000,0`.** Án `@` er punkturinn mældur frá upphafspunktinum, ekki frá síðasta punkti, svo línan skýst eitthvert óvænt. Í CadCraft er `x,y` alltaf algilt. Ýttu á `U` og {{key:Enter}} til að taka það til baka.
- **Komma slegin inn sem aukastafur.** Aukastafir nota punkt: `1250.5`. Komma skilur alltaf X frá Y.
- **Bein fjarlægð fór í ranga átt.** Bert númer fylgir krosshárinu. Færðu krosshárið að þeirri hlið sem þú vilt áður en þú ýtir á {{key:Enter}}, og kveiktu á {{ui:Lóðrétt/lárétt}} fyrir beinar línur.
- **„Krafist er punkts eða valkostarorðs.“** CadCraft skildi ekki það sem þú slóst inn. Athugaðu hvort bil séu inni í tölunni eða hvort komma vanti, og sláðu inn aftur.
- **Fet og tommur.** CadCraft les aðeins venjulegar tölur. Sláðu inn `150` fyrir 12'-6" í tommuteikningu, eða `12.5` í fetateikningu.
