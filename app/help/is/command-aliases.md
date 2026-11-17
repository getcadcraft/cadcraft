---
title: Breyttu skammnöfnum skipana
summary: Geymdu eigin skammnöfn skipana í einni textaskrá á kunnuglegu sniði, fluttu inn og út .pgp-skrá, og hlaðið henni aftur með REINIT.
keywords: skammnafn, skammnöfn, aliasedit, pgp, flýtileið, skammnafn, reinit, lyklaborð, sérsníða, breyta skammnöfnum
from: 6ab6fa0e
---

## Það sem þú lærir

Hvernig þú bætir við eigin skammnöfnum fyrir skipanir, til dæmis `LL` fyrir {{cmd:LINE}}, allt í einni textaskrá.

## Bættu við skammnafni

1. Opnaðu {{ui:Sýn}} › {{ui:Meira}} › {{ui:Breyta skammnöfnum…}}, eða skrifaðu {{cmd:ALIASEDIT}} og ýttu á {{key:Enter}}.
2. Bættu við línu með skammnafninu, kommu og skipuninni á eftir stjörnu:

```
LL,     *LINE
```

3. Smelltu á {{ui:Vista}}. Skipanalínan segir hversu mörg skammnöfn þín eru í notkun.
4. Skrifaðu `LL` og ýttu á {{key:Enter}}: LINE byrjar.

Skammnöfnin þín liggja ofan á þeim sem CadCraft hefur. Lína frá þér vinnur yfir innbyggt skammnafn með sama heiti; fjarlægðu línuna þína og það innbyggða kemur aftur.

## Línur sem CadCraft hafnar

Ritillinn telur upp hvert vandamál með línunúmeri meðan þú skrifar:

- skipunin er ekki til;
- skammnafnið er sjálft heiti skipunar (`LINE, *CIRCLE` myndi fela LINE);
- línan er ekki `ALIAS, *COMMAND`;
- sama skammnafn er á tveimur línum (sú seinni vinnur).

Línur sem ræsa forrit á tölvunni þinni, eins og `NOTEPAD, START, 1, *File to edit: ,`, eru sleppt með athugasemd: forrit í vafranum getur ekki ræst forrit.

## Fluttu skammnöfnin þín inn úr öðru forriti

1. Í skammnafnaritlinum smelltu á {{ui:Flytja inn .pgp…}} og veldu skrána. Þú getur líka dregið `.pgp`-skrá á teikninguna.
2. Athugaðu vandamálin sem talin eru upp (skipanir sem CadCraft hefur ekki eru hafnaðar, hinar virka).
3. Smelltu á {{ui:Vista}}.

{{ui:Flytja út .pgp}} vistar skammnöfn CadCraft og þín sem eina skrá á sama sniði.

## Hlaðið skránni aftur

Skrifaðu {{cmd:REINIT}} og ýttu á {{key:Enter}} til að nota skammnafnaskrána þína aftur. Hún er geymd í þessum vafra; skjáborðsforritið geymir hana í sinni eigin möppu, og skýjaþjónustan samstillir hana.

## Flýtilyklar fyrir hvaða skipun sem er

Skammnafn er slegið inn; flýtileið er takki. Til að gefa skipun eigin takka:

1. Smelltu á {{ui:Sýn}} › {{ui:Meira}} › {{ui:Flýtilyklar…}}, eða skrifaðu `KEYS` og ýttu á {{key:Enter}}.
2. Smelltu á reitinn {{ui:Lykill}} og ýttu á takkana, til dæmis {{key:Alt+Shift+C}}.
3. Í {{ui:Keyrir}} skrifaðu skipunina, og ef þú vilt, það sem á að slá inn á eftir henni: `CIRCLE`, eða `ZOOM E`.
4. Smelltu á {{ui:Bæta við}}.

Takki þarf {{key:Mod}} eða {{key:Alt}} með bókstaf eða tölustaf, eða laus fallstakki ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Takkar sem CadCraft, forritið eða vafrinn notar nú þegar, og takkar sem Eigin hnappar hafa (sjá [Eigin hnappar](topic:my-tools)), eru hafnaðir og reiturinn segir hvers vegna. Flýtileiðir eru geymdar í þessum vafra (eða skjáborðsforritinu); {{ui:Fjarlægja}} tekur eina burt.
