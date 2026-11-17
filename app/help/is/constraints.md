---
title: Þvinga teikningu
summary: Haltu línum láréttum, endum saman og stærðum föstum með rúmfræðilegum og málþvingunum, og láttu teikninguna fylgja þegar þú breytir stærð.
keywords: þvingun, þvinganir, breytur, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, frelsisgráður, fullþvingað
from: f8f21fa4
---

## Hvað þú gerir

Plötu þar sem þú breytir breiddinni á einum stað: hliðarnar haldast ferhyrndar, eitt horn situr kyrrt og hæðin helst helmingur af breiddinni.

Þvinganir virka á línur, fjöllínur, hringi, boga og punkta á flipanum {{ui:Líkan}}. Hver þvingun sem þú bætir við er eitt afturköllunarskref.

## Teiknaðu og þvingaðu útlínuna

1. Skrifaðu `REC` og ýttu á {{key:Enter}}. Skrifaðu `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Skrifaðu `AUTOCONSTRAIN` og ýttu á {{key:Enter}}. Skrifaðu `ALL`, {{key:Enter}}, og síðan {{key:Enter}} aftur.

   Sagan segir „4 þvinganir settar“. Litlir reitir með **H** og **V** birtast við hliðarnar: þetta eru þvingunarstikurnar.
3. Skrifaðu `GCFIX` og ýttu á {{key:Enter}}. Smelltu nálægt neðra vinstra horninu. Reitur með ⊕ birtist: það horn situr kyrrt.

`AUTOCONSTRAIN` bætir við samfallsþvingunum þar sem endar mætast næstum, og láréttum eða lóðréttum þvingunum þar sem línur liggja næstum lárétt eða lóðrétt. Skrifaðu `S` við spurninguna hans til að breyta hversu nálægt (0.05 teikniseiningar og 1° til að byrja með).

## Bættu við stærðunum

1. Skrifaðu `DCHORIZONTAL` og ýttu á {{key:Enter}}.
2. Smelltu nálægt neðra vinstra horninu, og síðan nálægt neðra hægra horninu.
3. Smelltu fyrir neðan ferhyrninginn fyrir málsetningarlínuna.
4. Spurningin sýnir `Dimension text <d1=100>`. Skrifaðu `width=120` og ýttu á {{key:Enter}}.

   Ferhyrningurinn er nú 120 breiður, og merkið segir `width=120`.
5. Skrifaðu `DCVERTICAL` og ýttu á {{key:Enter}}, skrifaðu `O` og ýttu á {{key:Enter}}, og smelltu síðan á hægri hliðina.
6. Smelltu hægra megin við hana, skrifaðu `width/2` og ýttu á {{key:Enter}}.

   Hún er 60 há. Merkið segir `fx: d1=width/2`: segð stýrir henni.

Sagan segir nú að útlínan sé fullþvinguð. Til að breyta stærð hennar, breyttu `width` (sjá [Nota færibreytur og jöfnur](topic:parameters)), eða tvísmelltu á `width=120` merkið, skrifaðu nýtt gildi og veldu {{ui:Nota}}.

## Flutningur þvingaðra hluta

Færsla, snúningur, skölun, gripar og Eiginleikaspjaldið halda öllum þvingunum: það sem þú færðir helst, og hitt fylgir. Ef þvinganirnar geta ekki fylgt er breytingin ekki gerð og sagan segir hvers vegna, til dæmis „Ekki gert: þvinganirnar halda þeim hlut þar sem hann er“. Eyðing hlutar eyðir þvingunum hans með honum.

## Speglun og klipping þvingaðra hluta

- {{cmd:MIRROR}} afritar þvinganirnar á milli hlutanna sem þú speglar yfir á afritin. Hliðar (hvernig snertill snertir, hvorum megin fjarlægð er mæld) eru reiknaðar aftur fyrir speglaða afritið, og afrituð málsetningar fá eigin heiti, eins og við límingu. Með `Erase source objects` `Y` haldast þvinganirnar á speglaða hlutunum. Sagan segir hversu margar fylgdu með.
- {{cmd:TRIM}} heldur þvingunum línu eða boga á því sem eftir er: þvingun á enda fer til hlutans sem enn hefur þann enda, regla um stefnu ({{ui:Lárétt}}, {{ui:Lóðrétt}}, {{ui:Samsíða}}, {{ui:Hornrétt}}) gildir um alla hluta, og málsetning milli ytri endanna tveggja heldur áfram að mæla þá. Þvinganir sem héldu hlutanum sem var skorinn burt, eða lengd sem skurðurinn breytti ({{ui:Jafnt}}, horn boga), hverfa. Klippur hringur heldur þvingunum miðpunkts og radíuss. Klipptar fjöllínur missa sínar.

## Þvinganirnar

| Skipun | Heldur |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | lína eða hluti lárétt eða lóðrétt (`2P`: tveir punktar láréttir eða lóðréttir) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | tvær línur samsíða, hornréttar eða á einni línu |
| {{cmd:GCCOINCIDENT}} | tveir punktar saman; `O`: punktur á línu, hring eða boga |
| {{cmd:GCTANGENT}} | lína og hringur eða bogi, eða tveir þeirra, snertast |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | tveir hringir eða bogar með sama miðpunkt; tvær lengdir eða tveir radíusar jafnir |
| {{cmd:GCSYMMETRIC}} | tveir punktar, línur eða hringir speglaðir yfir línu |
| {{cmd:GCFIX}} | punktur (smelltu nálægt honum) eða heill hlutur (`O`) þar sem hann er |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | fjarlægð |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | radíus, þvermál, horn milli tveggja lína, eða horn boga |

{{cmd:GEOMCONSTRAINT}} og {{cmd:DIMCONSTRAINT}} spyrja hvora á að nota; {{ui:Þvinga}} og {{ui:Málsetning}} í hópnum {{ui:Breytur}} keyra þær, og {{ui:Meira}} þar sýnir hverja þeirra. Hvar þú smellir ræður hlutanum: smellur nálægt enda, miðju eða miðpunkti tekur þann punkt; smellur á fjöllínu tekur hlutann undir honum. Fyrsti hluturinn stendur kyrr og annar hluturinn færist til að mætast honum.

Þvingun sem stangast á við aðrar, eða bætir engu við af því hinar fela hana þegar í sér, er hafnað með skilaboðum og ekkert hreyfist.

## Sjá, velja og fjarlægja

- Smelltu á reit í þvingunarstiku (eða samfallsferning, eða málsetningarmerki) til að velja þá þvingun; sagan nefnir hana. Ýttu á {{key:Delete}} til að fjarlægja hana.
- {{cmd:DELCONSTRAINT}} fjarlægir allar þvinganir af hlutunum sem þú velur.
- {{cmd:CONSTRAINTBAR}}: `S` sýnir allar stikur, `H` felur þær; veldu hluti fyrst til að sýna eða fela þeirra stikur. {{ui:Meira}} hefur {{ui:Sýna þvingunarstikur}} og {{ui:Fela þvingunarstikur}}.
- {{cmd:DCDISPLAY}} sýnir eða felur málþvinganirnar. Þær prentast aldrei.
- {{cmd:DCCONVERT}} breytir málsetningum sem teiknaðar eru á línum, hringjum og bogum í málþvinganir.

:::note
Ef þú hefur notað parametríska teikningu í AutoCAD eru skipanaheitin og spurningarnar þau sömu. Þvinganir og færibreytur eru vistaðar í DWG- og DXF-skrám á formi sem önnur forrit hunsa; sjá [Skrár](topic:files#constraints-in-files).
:::
