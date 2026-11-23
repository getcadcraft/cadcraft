---
title: Gefðu valkostum skipana þína eigin stafi
summary: Svaraðu valkostum skipana með stöfum sem þú velur, á hvaða tungumáli sem er, úr einni textaskrá sem þú getur breytt, flutt inn og út.
keywords: valkostastafir, optionkeys, optkeys, valkostalykill, lykill, endurskrifa, varpa, sérsníða, eigin stafir, þýða valkosti, stutt form, innflutningur, útflutningur, tvírætt
from: 7c8328c6
---

## Hvað þú lærir

Hvernig þú breytir stöfunum sem þú slærð inn til að svara valkostum skipunar. Til dæmis spyr {{cmd:ARRAY}} `[Rectangular/POlar]` og tekur `PO` fyrir Pólar; þú getur látið `P`, eða aðra stafi, gera það sama, á þínu eigin tungumáli ef þú vilt.

## Hvernig valkostir eru svaraðir

Þegar skipun sýnir valkosti í hornklofum eru hástafirnir þeir sem þú slærð inn: `POlar` er `PO`, `eXit` er `X`.

Þú getur líka slegið inn færri stafi. Ef það sem þú slærð inn passar aðeins við einn af valkostunum sem sýndir eru tekur CadCraft hann: með `[Rectangular/POlar]` er stakur `P` Pólar. Ef það passar við tvo nefnir skipanalínan þá og spyr aftur:

```
C could be COUnt, COLumns. Type more letters.
```

Tölur eru aldrei giskaðar, svo fjarlægð eða fjöldi sem slegin er inn er alltaf lesinn sem tala.

## Bættu við þínum eigin stöfum

Sérhver skipun heldur sínum innbyggðu stöfum. Þú bætir þínum við ofan á þá, svo listinn þinn geymir aðeins það sem þú breyttir.

1. Opnaðu {{ui:Stillingar}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Valkostastafir}} og smelltu á {{ui:Breyta…}}. Eða skrifaðu {{cmd:OPTIONKEYS}} og ýttu á {{key:Enter}}.
2. Undir {{ui:Skipun}} velurðu skipunina, til dæmis `ARRAY`. Listinn hefur sérhverja skipun sem spyr um valkosti, og byrjar á skipuninni sem þú notaðir síðast.
3. Undir {{ui:Valkostur}} velurðu valkostinn. Hver þeirra sýnir innbyggðu stafina sína í hornklofum, til dæmis `POlar (PO)`.
4. Í {{ui:Þínir stafir}} skrifarðu þá stafi sem þú vilt, til dæmis `P`, og smellir á {{ui:Bæta við}}.
5. Valkosturinn birtist nú undir {{ui:Þínir stafir}} með innbyggðu stöfunum sínum og þínum. Smelltu á {{ui:Vista}}.

Ræstu {{cmd:ARRAY}}, veldu hlut og ýttu á {{key:Enter}}. Spurningin sýnir þína stafi á eftir valkostinum, `POlar (P)`, og `P` svarar henni.

Til að taka einn burt smellirðu á x-ið í enda línu hans og síðan á {{ui:Vista}}. Valkosturinn fer aftur í aðeins innbyggðu stafina sína.

## Stafir sem þú getur ekki notað

Ritillinn hafnar stöfum sem myndu fela eitthvað sem skipanalínan þegar les, og segir hvers vegna:

- innbyggðu stafi annars valkosts sömu skipunar (`R` fyrir Pólar í `ARRAY`, þar sem `R` er Rétthyrnt);
- orði hlutasmellifestu sem er þrír stafir eða fleiri, eins og `END`, `MID` eða `CEN`, og orðunum `ALL` og `LAST`;
- sömu stöfum fyrir tvo ólíka valkosti einnar skipunar.

Meðan eitthvað er skráð með rauðu er {{ui:Vista}} óvirkt: lagaðu línuna eða fjarlægðu hana, og hnappurinn kemur aftur. Innbyggðir stafir spurningar vinna alltaf fram yfir þína, svo listinn þinn getur aldrei stöðvað innbyggt svar frá því að virka. Stafir sem eru heiti skipunar, eins og `L` eða `C`, eru í lagi: við valkostaspurningu les skipanalínan svar, ekki skipun.

Valkostirnir sem skráðir eru fyrir skipun koma frá skipunum sem deila spurningum hennar, svo öðru hvoru sýnir skipun valkost sem hún spyr aðeins um í sumum tilvikum.

## Einn valkostur fyrir allar skipanir

Undir {{ui:Skipun}} velurðu {{ui:Allar skipanir}}. Valkostirnir eru þá sérhver valkostur sem einhver skipun hefur, eins og eXit eða Undo. Stafir sem þú bætir þar við svara þeim valkosti hvar sem skipun býður hann. Stafir sem bætt er við fyrir einstaka skipun vinna yfir þá.

## Stafir á þínu tungumáli

Stafirnir mega vera úr hvaða stafrófi sem er, svo þú getur svarað valkostum án þess að skipta um lyklaborð: bættu `З` við fyrir Close undir {{ui:Allar skipanir}}, eða `П` fyrir POlar í `ARRAY`.

CadCraft er aðeins með enska stafi. Þinn eigin listi er hvernig þú, skrifstofan þín eða fólk sem talar sama tungumál setur hitt upp, og {{ui:Flytja út}} býr til skrá sem þú getur látið aðra fá.

## Breyta sem texta

{{ui:Breyta sem texta}} í ritlinum sýnir sama lista sem línur af texta, eina fyrir hvern valkost, og það sem {{ui:Flytja út}} vistar:

```
ARRAY.PO,  P
*.X,       Q
```

Hver lína er skipunin, punktur, innbyggðu stafir valkostsins, komma og þínir stafir. Stjarna í stað skipunar þýðir sérhverja skipun. Lína sem byrjar á `;` er athugasemd.

## Það sem helst eins

- Innbyggðu stafirnir virka áfram við hlið þinna.
- Rútínur og hnappar á tækjastikunni nota áfram innbyggðu stafina, svo ekkert sem þú hleður brotnar. Til að slá inn innbyggðu stafina sjálf þar sem þínir stafir myndu trufla skaltu setja undirstrik fyrst: `_PO`.
- Stutt heiti skipunar er annað atriði: sjá [Breyta skammnöfnum skipana](topic:command-aliases).

## Línur sem CadCraft hafnar

Þegar þú breytir sem texta eða flytur inn skrá sýnir ritillinn hvert vandamál með línunúmeri:

- skipunin er ekki til (skammnafn skipunar er í lagi: `AR.PO` er lesið sem `ARRAY.PO`);
- línan er ekki `SKIPUN.VALKOSTUR, STAFIR`;
- stafirnir hafa bil eða tákn í sér (aðeins bókstafir og tölustafir, 16 í mesta lagi);
- sömu stafirnir svara tveimur ólíkum valkostum einnar skipunar.

## Innflutningur og útflutningur

{{ui:Flytja út}} vistar stafina þína sem textaskrá, til að geyma eða gefa öðrum. {{ui:Flytja inn…}} les slíka skrá. Hvort tveggja er í ritlinum og í {{ui:Stillingar}} › {{ui:CadCraft}} › {{ui:Valkostastafir}}.

Í Stillingum skiptir {{ui:Flytja inn…}} skránni þinni út fyrir þá sem þú velur. Skrá með línu sem rekst á eða er ónothæf er ekki tekin; opnaðu ritilinn og fluttu hana þar inn til að sjá línurnar. Í ritlinum fyllir hún aðeins reitinn: ekkert breytist fyrr en þú smellir á {{ui:Vista}}.

## Endurhlaða eða fjarlægja

Skrifaðu {{cmd:REINIT}} og ýttu á {{key:Enter}} til að nota skrána þína aftur. Til að fjarlægja staf eyðirðu línu hans og smellir á {{ui:Vista}}.

## Stafirnir þínir fylgja aðgangnum þínum

Þegar þú ert skráð(ur) inn á getcadcraft.com eru stafirnir þínir geymdir með aðgangnum þínum. Opnaðu CadCraft í öðrum vafra eða á annarri tölvu með sama aðgangi og þeir koma sjálfkrafa; skipanalínan segir `Option letters from your account`. Ef þú breyttir þeim á tveimur stöðum vinnur nýjasta eintakið, og því sem það kom í staðinn fyrir er haldið einu sinni.

{{ui:Stillingar}} › {{ui:CadCraft}} › {{ui:Valkostastafir}} segir hvar þeir standa. Ef þú ert útskráð(ur) eða án nettengingar haldast þeir í þessum vafra og fara á aðganginn þinn næst þegar þú vistar þá á meðan þú ert skráð(ur) inn.

Tengt: [Breyta skammnöfnum skipana](topic:command-aliases) · [Stillingar CadCraft](topic:settings) · [Skipanir](topic:commands)
