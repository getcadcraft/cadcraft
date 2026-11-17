---
title: Skipuleggðu teikningu með lögum
summary: Búðu til lög fyrir veggi, hurðir og athugasemdir, veldu liti, gerðu lag núverandi, og slökktu á lögum, frystu þau, læstu þeim eða komdu í veg fyrir að þau prentist.
keywords: lag, lög, la, núverandi lag, frysta, þíða, læsa, slökkva, kveikja, prenta, ekki prenta, litur, eiginleikar lags, layiso, layuniso, einangra, layoff, layfrz, laymcur, layon, laythw, endurnefna, laymrg, sameina, laydel, eyða lagi
from: cd033591
---

## Hvað þú býrð til

Þrjú lög, Veggir, Hurðir og Athugasemdir, hvert með sínum lit, með hlutum teiknuðum á hvert og færðum á milli þeirra.

## Lagaspjaldið

Lög eru í spjaldinu vinstra megin, undir {{ui:Lög}}. Hver röð sýnir, frá vinstri til hægri:

- punkt: fylltan fyrir **núverandi** lag, þar sem nýir hlutir fara;
- litasýnishorn;
- heiti lagsins;
- fjóra hnappa: kveikja/slökkva (auga), frysta (snjókorn), læsa (hengilás) og prenta (prentari).

Sérhver teikning hefur lag sem heitir `0`. Að skrifa `LA` og ýta á {{key:Enter}} fer í spjaldið.

## Búa til lög

1. Smelltu á {{ui:Nýtt lag}} fyrir ofan listann. Nafnreitur opnast.
2. Skrifaðu `Veggir` og ýttu á {{key:Enter}} (eða smelltu á {{ui:Bæta við}}).

Stöðustikan segir „Bætti við laginu Veggir og gerði það núverandi.“ Nýja lagið fær lit 7 (svart á ljósa þemanu, hvítt á dökka þemanu).

3. Smelltu aftur á {{ui:Nýtt lag}}, skrifaðu `Hurðir` og ýttu á {{key:Enter}}.
4. Smelltu aftur á {{ui:Nýtt lag}}, skrifaðu `Athugasemdir` og ýttu á {{key:Enter}}.

Athugasemdir er nú núverandi.

## Gefðu hverju lagi lit

1. Smelltu á litasýnishornið á röð Veggja. Litavali kerfisins þíns opnast.
2. Veldu lit og staðfestu.

Sýnishornið og allt á Veggjum sem er litað {{ui:Eftir lagi}} breytist.

:::note
Litur sem passar við einn af 255 stöðluðum CAD-litum er geymdur sem það númer. Hver annar litur er geymdur nákvæmlega í CadCraft, en er vistaður sem næsti staðlaði litur í DWG- eða DXF-skrá.
:::

## Teikna á lag

1. Smelltu á heitið **Veggir** í listanum. Punkturinn fyllist og stöðustikan segir „Núverandi lag: Veggir“.
2. Teiknaðu rétthyrning (`REC`). Hann fer á Veggi.
3. Smelltu á **Hurðir** og teiknaðu boga (`A`). Hann fer á Hurðir.

Þú getur líka valið núverandi lag í {{ui:Núverandi stillingar}} hægra megin (þegar ekkert er valið), undir {{ui:Lag}}.

## Færa hluti á annað lag

1. Veldu hlutina.
2. Í hægra spjaldinu, veldu nýja lagið í {{ui:Lag}}.

Þeir færast á það lag og taka þess lit ef litur þeirra er {{ui:Eftir lagi}}.

## Slökkva, frysta, læsa og prenta

| Hnappur | Hvað hann gerir |
|---|---|
| Kveikja/slökkva (auga) | Felur hluti lagsins. Ekki er hægt að sjá þá, velja þá eða smella á þá. |
| Frysta (snjókorn) | Sama áhrif og slökkva í CadCraft. Haldið aðskildu því önnur forrit meðhöndla þau ólíkt, og stillingin er vistuð. |
| Læsa (hengilás) | Hlutir haldast sýnilegir og þú getur smellt á þá, en ekki er hægt að velja þá eða breyta. Gott fyrir bakgrunn sem þú rekur yfir. |
| Prenta (prentari) | Þegar hnappurinn er niðri sést lagið á skjánum en er **sleppt úr útprentunum** og PDF-skjölum. Notaðu það fyrir hjálparlínur og athugasemdir til sjálfs þín. |

Færðu bendilinn yfir hnapp til að sjá hvað hann gerir („Slökkva“, „Frysta“, „Læsa“, „Ekki prenta þetta lag“).

Ekki er hægt að slökkva á núverandi lagi: stöðustikan segir „Þetta er núverandi lag. Gerðu annað lag núverandi fyrst.“ Að smella á heiti lags til að gera það núverandi kveikir líka á því og þíðir það.

Sérhver breyting á lagi, í spjaldinu eða með skipun, er eitt skref í afturköllun: {{key:Mod+Z}} skilar henni.

## Vinna með lög með því að velja hluti

Þú þarft ekki að vita heiti lags: veldu hlut á því. Skrifaðu skipunina, eða opnaðu {{ui:Verkfæri}} efst á {{ui:Lög}}-spjaldinu.

| Skipun | Hvað hún gerir |
|---|---|
| {{cmd:LAYISO}} | Veldu hluti, ýttu á {{key:Enter}}: aðeins lög þeirra haldast kveikt, öll önnur lög eru slökkt. Ef núverandi lag er slökkt verður eitt einangraðra laganna að núverandi lagi. |
| {{cmd:LAYUNISO}} | Kveikir aftur á lögunum sem síðasta {{cmd:LAYISO}} slökkti, og skilar núverandi laginu sem það breytti. |
| {{cmd:LAYOFF}} | Smelltu á hluti einn á eftir öðrum: lag hvers þeirra er slökkt. Skrifaðu `U` til að taka það síðasta til baka, {{key:Enter}} til að ljúka. |
| {{cmd:LAYFRZ}} | Eins, en frystir hvert lag. |
| {{cmd:LAYMCUR}} | Smelltu á hlut: lag hans verður núverandi (og er kveikt og þítt). Ef einn hlutur er þegar valinn er hann notaður. |
| {{cmd:LAYON}} | Kveikir á öllum lögum. |
| {{cmd:LAYTHW}} | Þíðir öll lög. |

Núverandi lag er aldrei slökkt eða fryst á þennan hátt: skipanalínan segir frá því, og þú getur gert annað lag núverandi með {{cmd:LAYMCUR}} fyrst. Þegar blokkartilvísun er valin er notað lag tilvísunarinnar sjálfrar.

## Endurnefna, sameina og eyða lögum

- {{cmd:RENAME}}: skrifaðu `LA`, gamla heitið og nýja heitið. Allir hlutir á laginu fylgja. (`B` endurnefnir blokk á sama hátt, með öllum tilvísunum í hana.)
- {{cmd:LAYMRG}}: smelltu á hlut á hverju lagi sem á að sameina (eða skrifaðu `N` og heiti), ýttu á {{key:Enter}}, veldu síðan markalagið og svaraðu `Y`. Hlutirnir færast á markalagið — í líkaninu, á blöðum og inni í blokkum — og sameinuðu lögin hverfa.
- {{cmd:LAYDEL}}: veldu hlut á laginu (eða `N` og heitið) og svaraðu `Y`. Lagið fer **með öllum hlutum á því**, alls staðar. Lag 0, DEFPOINTS og núverandi lag er ekki hægt að eyða.

Hver þeirra er eitt skref í afturköllun. Allar þrjár eru í {{ui:Verkfæri}} efst á {{ui:Lög}}-spjaldinu.

1. Smelltu á eina veggjalínu, skrifaðu `LAYISO` og ýttu á {{key:Enter}}. Aðeins Veggir helst kveikt.
2. Teiknaðu eða breyttu því sem þú þarft á Veggjum.
3. Skrifaðu `LAYUNISO` og ýttu á {{key:Enter}}. Hurðir og Athugasemdir koma aftur.

## Algeng mistök

- **Nýjar línur fóru á rangt lag.** Athugaðu hvaða punktur er fylltur áður en þú teiknar. Nýtt lag verður núverandi um leið og þú bætir því við.
- **Hlutur velst ekki.** Lagið hans er læst, slökkt eða frosið.
- **Lagið prentast enn í öðru forriti.** DXF R12 getur ekki geymt „ekki prenta“. CadCraft geymir stillinguna sjálft þegar teikningin hefur blað, en önnur forrit prenta það lag.
- **Heiti laga með hástöfum eftir vistun.** DXF R12 geymir heiti með hástöfum, svo `Veggir` kemur til baka sem `VEGGIR`, og bil verða `_`. Vistuð DWG-skrá geymir heiti eins og þú skrifaðir þau.
- **Endurnefna, sameina eða eyða lagi.** Notaðu {{cmd:RENAME}}, {{cmd:LAYMRG}} eða {{cmd:LAYDEL}} (einnig í {{ui:Verkfæri}}): sjá að neðan.

## Hópa lög

Haltu listanum stuttum með því að setja lög í möppur, til dæmis Fyrir, Tillaga og Veitur (Existing, Proposed, Services). Hver mappa fellur saman og rofar hennar kveikja eða slökkva á öllum lögum hennar, frysta þau eða læsa þeim saman. Núverandi lag er aldrei slökkt.

Í {{ui:Verkfæri}} á Lög-spjaldinu, veldu {{ui:Bæta við tilbúnum hópum}} fyrir sett sem gert er fyrir lítil íbúðarverk, {{ui:Hópa eftir heiti}} til að hópa lög sem deila forskeyti (`E-Veggir`, `E-Hurðir`), eða {{ui:Nýr hópur}}. Dragðu lag yfir möppu, eða notaðu listann fyrir ofan lögin fyrir núverandi lag. Skrifaðu í {{ui:Finna lag}} til að þrengja listann. {{cmd:LAYGROUP}} (`LG`) gerir hið sama í skipanalínunni.

Lögin sjálf breytast ekki, svo önnur CAD-forrit sjá þau sem venjulegan flatan lista. CadCraft geymir hópana í skránni.
