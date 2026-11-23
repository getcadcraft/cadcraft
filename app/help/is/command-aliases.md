---
title: Breyta skammnöfnum skipana
summary: Geymdu þín eigin skammnöfn skipana í einni textaskrá á kunnuglegu sniði, fluttu inn og út .pgp-skrá og hlaðið henni aftur með REINIT.
keywords: skammnafn, skammnöfn, aliasedit, pgp, flýtileið, stutt heiti, reinit, lyklaborð, sérsníða, breyta skammnöfnum
from: 2282d36f
---

## Hvað þú lærir

Hvernig þú bætir við þínum eigin stuttu heitum á skipunum, til dæmis `LL` fyrir {{cmd:LINE}}, öllum í einni textaskrá.

## Bæta við skammnafni

1. Opnaðu {{ui:View}} › {{ui:More}} › {{ui:Breyta skammnöfnum…}}, eða skrifaðu {{cmd:ALIASEDIT}} og ýttu á {{key:Enter}}.
2. Bættu við línu með skammnafninu, kommu og skipuninni á eftir stjörnu:

```
LL,     *LINE
```

3. Smelltu á {{ui:Vista}}. Skipanalínan segir hversu mörg skammnöfn þín eru í notkun.
4. Skrifaðu `LL` og ýttu á {{key:Enter}}: LINE ræsist.

Skammnöfnin þín eru ofan á innbyggðu skammnöfnum CadCraft. Lína frá þér gengur framar innbyggðu skammnafni með sama heiti; fjarlægðu línuna og það innbyggða kemur aftur.

## Línur sem CadCraft hafnar

Ritillinn sýnir hvert vandamál ásamt númeri línunnar á meðan þú skrifar:

- skipunin er ekki til;
- skammnafnið er sjálft heiti skipunar (`LINE, *CIRCLE` myndi fela LINE);
- línan er ekki `SKAMMNAFN, *SKIPUN`;
- sama skammnafn er á tveimur línum (sú síðari vinnur).

Línur sem ræsa forrit á tölvunni þinni, eins og `NOTEPAD, START, 1, *File to edit: ,`, eru sleppt með athugasemd: forrit í vafra getur ekki ræst forrit.

## Flytja inn skammnöfn úr öðru forriti

1. Smelltu á {{ui:Flytja inn .pgp…}} í skammnafnaritlinum og veldu skrána. Þú getur líka dregið `.pgp`-skrá á teikninguna.
2. Athugaðu vandamálin sem eru talin upp (skipanir sem CadCraft hefur ekki eru hafnaðar, hinar virka).
3. Smelltu á {{ui:Vista}}.

{{ui:Flytja út .pgp}} vistar skammnöfn CadCraft og þín sem eina skrá á sama sniði.

## Endurhlaða skránni

Skrifaðu {{cmd:REINIT}} og ýttu á {{key:Enter}} til að nota skammnafnaskrána þína aftur. Hún er geymd í þessum vafra; skjáforritið geymir hana í eigin möppu og skýjaþjónustan samstillir hana.

## Stafir fyrir valkosti skipana

Skammnafn nefnir skipun. Til að breyta stöfunum sem svara valkostum skipunar (`P` fyrir Pólar í {{cmd:ARRAY}}), sjá [Gefðu valkostum skipana þína eigin stafi](topic:option-letters).

## Flýtilyklar fyrir hvaða skipun sem er

Skammnafn er slegið inn; flýtilykill er takki. Til að gefa skipun takka af þinni eigin:

1. Smelltu á {{ui:View}} › {{ui:More}} › {{ui:Flýtilyklar…}}, eða skrifaðu `KEYS` og ýttu á {{key:Enter}}.
2. Smelltu á reitinn {{ui:Lykill}} og ýttu á takkana, til dæmis {{key:Alt+Shift+C}}.
3. Í {{ui:Keyrir}} skrifaðu skipunina og, ef þú vilt, það sem á að skrifa á eftir henni: `CIRCLE`, eða `ZOOM E`.
4. Smelltu á {{ui:Bæta við}}.

Takki þarf {{key:Mod}} eða {{key:Alt}} ásamt bókstaf eða tölustaf, eða lausan aðgerðartakka ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Takkar sem CadCraft, forritið eða vafrinn nota nú þegar, og takkar sem eigin hnappur hefur (sjá [Eigin hnappar](topic:my-tools)), eru hafnaðir og reiturinn segir hvers vegna. Flýtilyklar eru geymdir í þessum vafra (eða skjáforritinu); {{ui:Fjarlægja}} tekur einn burt.
