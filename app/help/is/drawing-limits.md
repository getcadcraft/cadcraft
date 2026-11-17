---
title: Stilla mörk teikningar
summary: LIMITS setur rétthyrning fyrir teikninguna: hnitanetið fyllir hana, ZOOM All sýnir hana, og með mörkunum kveikt er punktum utan hennar hafnað. Þau eru vistuð í DWG- og DXF-skrám.
keywords: mörk, mörk teikningar, LIMITS, LIMMIN, LIMMAX, LIMCHECK, hnitanet, utan marka, blaðastærð, teikningarsvæði, zoom all, jaðar
from: 9e97b30d
---

**Mörk teikningar** eru rétthyrningur sem segir hversu stór teikningin á að vera: svæðið sem þú ætlar að teikna á, eins og blað 420 × 297. Ný teikning hefur engin, svo hnitanetið og teikningarsvæðið eru ótakmörkuð, eins og áður.

## Stilltu þau

Skrifaðu {{cmd:LIMITS}} og svaraðu:

- `Specify lower left corner or [ON/OFF] <0,0>`: punktur, eða {{key:Enter}} til að halda núverandi.
- `Specify upper right corner <420,297>`: punktur, eða {{key:Enter}} til að halda núverandi. Hann verður að vera ofar og til hægri við þann fyrsta.

Eða skrifaðu `ON` eða `OFF` við fyrstu spurninguna til að kveikja eða slökkva á athuguninni án þess að breyta rétthyrningnum. Að setja hornin er eitt skref í afturköllun, og það sama gildir um hvert ON og OFF.

## Hvað þau gera

- **Hnitanetið fyllir mörkin** og stoppar við brúnina. Það er mynd af svæðinu, svo kveiktu á {{ui:Hnitanet}} til að sjá það.
- **ZOOM All** ({{cmd:ZOOM}}, síðan {{ui:All}}) sýnir mörkin og teikninguna saman; {{ui:Mörk}} sýnir enn aðeins teikninguna.
- **Með mörkunum ON** er punkti sem þú skrifar eða smellir utan þeirra hafnað með `**Outside limits` og spurningin helst. Þetta nær yfir skipanir sem búa til hluti: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, málsetningaskipanirnar og nokkrar fleiri. Skipanir sem aðeins færa, velja eða mæla eru ekki takmarkaðar, og ekki heldur límingin, dráttur á gripi, eða hlutur sem LISP-rútína býr til: mörkin eru leiðarvísir við teikningu, ekki veggur. Með mörkunum OFF er engu hafnað.
- Hlutir sem eru þegar utan marka haldast þar sem þeir eru.

## Í skrám og LISP

Þau eru vistuð í DWG og DXF sem `$LIMMIN`, `$LIMMAX` og `$LIMCHECK`. Skrá frá öðru forriti sem hefur aðeins sjálfgefin mörk þess forrits (0,0 til 12,9 eða 420,297, athugun slökkt) opnast án marka, svo hnitanetið sé ekki þjappað inn í lítinn rétthyrning; skrá með eigin mörkum, eða með athugun kveikta, heldur þeim. Í LISP lesa `(getvar "LIMMIN")`, `LIMMAX` og `LIMCHECK` þau og `setvar` skrifar þau, sem eitt skref í afturköllun.

Mörkin tilheyra líkaninu. Blað (útlit) hefur sína eigin pappírsstærð.
