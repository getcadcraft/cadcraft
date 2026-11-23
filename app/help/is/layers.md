---
title: Skipuleggðu teikningu með lögum
summary: Búðu til lög fyrir veggi, hurðir og athugasemdir, stilltu liti, gerðu lag núverandi, og slökktu á lögum, frystu þau, læstu þeim eða haltu þeim frá prentun.
keywords: lag, lög, la, núverandi lag, frysta, afþýða, læsa, slökkva, kveikja, prenta, ekki prenta, litur, eiginleikar lags, layiso, layuniso, einangra, layoff, layfrz, laymcur, layon, laythw, endurnefna, laymrg, sameina, laydel, eyða lagi
from: ba9f0617
---

## Það sem þú býrð til

Þrjú lög, Veggir, Hurðir og Athugasemdir, hvert með sínum lit, með hlutum teiknuðum á hvert þeirra og færðum á milli þeirra.

## Lagaspjaldið

Lög eru í spjaldinu vinstra megin, undir {{ui:Lög}}. Hver röð sýnir, frá vinstri til hægri:

- punkt: fylltan fyrir **núverandi** lagið, þar sem nýir hlutir fara;
- litasýnishorn;
- heiti lagsins;
- fjóra hnappa: kveikja/slökkva (auga), frysta (snjókorn), læsa (lykill) og prenta (prentari).

Sérhver teikning hefur lag sem heitir `0`. Ef þú skrifar `LA` og ýtir á {{key:Enter}} hoppar þú í spjaldið.

## Búðu til lög

1. Smelltu á {{ui:Nýtt lag}} fyrir ofan listann. Nafnareitur opnast.
2. Skrifaðu `Walls` og ýttu á {{key:Enter}} (eða smelltu á {{ui:Bæta við}}).

Stöðustikan segir „Added layer Walls and made it current.“ Nýja lagið fær lit 7 (svart á ljósa þemanu, hvítt á dökka þemanu).

3. Smelltu aftur á {{ui:Nýtt lag}}, skrifaðu `Doors` og ýttu á {{key:Enter}}.
4. Smelltu aftur á {{ui:Nýtt lag}}, skrifaðu `Notes` og ýttu á {{key:Enter}}.

Notes er nú núverandi lag.

## Gefðu hverju lagi lit

1. Smelltu á litasýnishornið í línu Walls. Litavali stýrikerfisins þíns opnast.
2. Veldu lit og staðfestu.

Sýnishornið og allt á Walls sem er litað {{ui:Eftir lagi}} breytist.

:::note
Litur sem passar við einn af 255 stöðluðu CAD-litunum er geymdur sem það númer. Hvaða annar litur sem er er geymdur nákvæmlega í CadCraft, en er vistaður sem næsti staðlaði litur í DWG- eða DXF-skrá.
:::

## Teiknaðu á lag

1. Smelltu á heitið **Walls** í listanum. Punkturinn þess fyllist og stöðustikan segir „Current layer: Walls“.
2. Teiknaðu rétthyrning (`REC`). Hann fer á Walls.
3. Smelltu á **Doors** og teiknaðu boga (`A`). Hann fer á Doors.

Þú getur líka valið núverandi lag í {{ui:Núverandi stillingar}} hægra megin (ekkert valið), undir {{ui:Lag}}.

## Færðu hluti á annað lag

1. Veldu hlutina.
2. Í hægra spjaldinu velurðu nýja lagið í {{ui:Lag}}.

Þeir færast á það lag og taka lit þess ef litur þeirra er {{ui:Eftir lagi}}.

## Slökkva, frysta, læsa og prenta

| Hnappur | Hvað hann gerir |
|---|---|
| Kveikja/slökkva (auga) | Felur hluti lagsins. Ekki er hægt að sjá þá, velja þá eða smella á þá. |
| Frysta (snjókorn) | Sama áhrif og slökkva í CadCraft. Aðskilið því önnur forrit meðhöndla þá ólíkt, og stillingin er vistuð. |
| Læsa (lykill) | Hlutir haldast sýnilegir og þú getur smellt á þá, en ekki er hægt að velja þá eða breyta þeim. Gott fyrir bakgrunn sem þú rekur eftir. |
| Prenta (prentari) | Þegar hnappurinn er inni er lagið sýnt á skjánum en **sleppt úr prentunum** og PDF-skjölum. Notaðu það fyrir hjálparlínur og athugasemdir til sjálfs þín. |

Sveimaðu yfir hnapp til að sjá hvað hann gerir („Turn off“, „Freeze“, „Lock“, „Do not plot this layer“).

Þú getur ekki slökkt á núverandi lagi: stöðustikan segir „That is the current layer. Make another layer current first.“ Með því að smella á heiti lags til að gera það núverandi kveikirðu líka á því og afþýðir það.

Sérhver breyting á lagi, í spjaldinu eða með skipun, er eitt afturkallsskref: {{key:Mod+Z}} setur hana aftur.

## Vinndu með lög með því að velja hluti

Þú þarft ekki að vita heiti lags: veldu hlut sem er á því. Skrifaðu skipunina, eða opnaðu {{ui:Verkfæri}} efst í spjaldinu {{ui:Lög}}.

| Skipun | Hvað hún gerir |
|---|---|
| {{cmd:LAYISO}} | Veldu hluti, ýttu á {{key:Enter}}: aðeins lög þeirra haldast kveikt, sérhvert annað lag er slökkt. Ef núverandi lagið er slökkt verður eitt einangraðra laganna núverandi. |
| {{cmd:LAYUNISO}} | Kveikir aftur á þeim lögum sem síðasta {{cmd:LAYISO}} slökkti, og skilar núverandi lagi sem það breytti. |
| {{cmd:LAYOFF}} | Smelltu á hluti hvern á eftir öðrum: lag hvers hluts er slökkt. Skrifaðu `U` til að taka það síðasta til baka, {{key:Enter}} til að ljúka. |
| {{cmd:LAYFRZ}} | Það sama, en frystir hvert lag. |
| {{cmd:LAYMCUR}} | Smelltu á hlut: lag hans verður núverandi (og er kveikt og afþýtt). Ef einn hlutur er þegar valinn er hann notaður. |
| {{cmd:LAYON}} | Kveikir á öllum lögum. |
| {{cmd:LAYTHW}} | Afþýðir öll lög. |

Núverandi lagi er aldrei slökkt eða fryst á þennan hátt: sagan segir það, og þú getur gert annað lag núverandi með {{cmd:LAYMCUR}} fyrst. Ef þú velur blokkartilvísun er notað lag tilvísunarinnar sjálfrar.

## Endurnefndu, sameinaðu og eyddu lögum

- {{cmd:RENAME}}: skrifaðu `LA`, gamla heitið og nýja. Sérhver hlutur á laginu fylgir. (`B` endurnefnir blokk á sama hátt, með öllum tilvísunum í hana.)
- {{cmd:LAYMRG}}: smelltu á hlut á hverju lagi sem á að sameina (eða skrifaðu `N` og heiti), ýttu á {{key:Enter}}, veldu síðan markslagið og svaraðu `Y`. Hlutirnir færast á markslagið — í líkaninu, á blöðum og inni í blokkum — og sameinuðu lögin hverfa.
- {{cmd:LAYDEL}}: veldu hlut á laginu (eða `N` og heitið) og svaraðu `Y`. Lagið fer **með öllum hlutum sem eru á því**, alls staðar. Lag 0, DEFPOINTS og núverandi lag er ekki hægt að eyða.

Sérhver þessara er eitt afturkallsskref. Þær eru allar þrjár í {{ui:Verkfæri}} efst í spjaldinu {{ui:Lög}}.

1. Smelltu á eina veggjalínu, skrifaðu `LAYISO` og ýttu á {{key:Enter}}. Aðeins Walls helst kveikt.
2. Teiknaðu eða breyttu því sem þú þarft á Walls.
3. Skrifaðu `LAYUNISO` og ýttu á {{key:Enter}}. Doors og Notes koma aftur.

## Algeng mistök

- **Nýjar línur fóru á rangt lag.** Athugaðu hvaða punktur er fylltur áður en þú teiknar. Nýtt lag verður núverandi um leið og þú bætir því við.
- **Hlutur velst ekki.** Lag hans er læst, slökkt eða fryst.
- **Lagið prentast enn í öðru forriti.** DXF R12 getur ekki geymt „do not plot“. CadCraft geymir stillinguna fyrir sjálft sig þegar teikningin hefur blað, en önnur forrit prenta lagið samt.
- **Heiti laga í hástöfum eftir vistun.** DXF R12 geymir heiti með hástöfum, svo `Walls` kemur til baka sem `WALLS`, og bil verða `_`. Vistuð DWG-skrá heldur heitunum eins og þú slóst þau inn.
- **Endurnefna, sameina eða eyða lagi.** Notaðu {{cmd:RENAME}}, {{cmd:LAYMRG}} eða {{cmd:LAYDEL}} (líka í {{ui:Verkfæri}}): sjá hér að neðan.

## Hópaðu lög

Haltu listanum stuttum með því að setja lög í möppur, til dæmis Existing, Proposed og Services. Hver mappa fellur saman, og rofar hennar kveikja eða slökkva á öllum lögum hennar, frysta þau eða læsa þeim saman. Núverandi lagi er aldrei slökkt.

Veldu í {{ui:Verkfæri}} á lagaspjaldinu {{ui:Bæta við tilbúnum hópum}} fyrir sett sem gert er fyrir lítil íbúðarverk, {{ui:Hópa eftir heiti}} til að hópa lög sem deila forskeyti (`E-Walls`, `E-Doors`), eða {{ui:Nýr hópur}}. Dragðu lag á möppu, eða notaðu listann fyrir ofan lögin fyrir núverandi lag. Skrifaðu í {{ui:Finna lag}} til að þrengja listann. `LAYGROUP` (`LG`) gerir það sama í skipanalínunni.

Til að endurnefna hóp tvísmellirðu á heiti hans (eða velur hann og ýtir á {{key:F2}}), skrifar nýja heitið og ýtir á {{key:Enter}}; {{key:Esc}} heldur gamla heitinu, og {{cmd:UNDO}} setur það aftur. {{ui:Nýr hópur}} er í {{ui:Verkfæri}} á lagaspjaldinu.

Lögin sjálf breytast ekki, svo önnur CAD-forrit sjá þau sem venjulegan flatan lista. CadCraft geymir hópana í skránni.
