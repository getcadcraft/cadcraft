---
title: Hlaða forritum (APPLOAD)
summary: Hlaðaðu LISP-rútínum og samsvarandi gluggaskrám, afhlaðaðu þeim, hlaððu þeim aftur úr sögunni og geymdu þær sem þú notar í ræsisvítunni.
keywords: appload, ap, hlaða forriti, lisp, lsp, dcl, rútína, ræsisvíta, afhlaða, saga, sleppa, hlaða, sérsníða, stjórna
from: 89e0ee95
---

## Hvað þú lærir

Hvernig hlaða má LISP-rútínu (`.lsp`-skrá) svo skipanir hennar virki í CadCraft, hvernig afhlaða má henni, og hvernig láta má hana hlaðast í hvert skipti sem CadCraft ræsist.

## Hlaða rútínu

1. Opnaðu {{ui:Sýn}} › {{ui:Meira}} › {{ui:Hlaða forriti…}}, eða skrifaðu {{cmd:APPLOAD}} (eða `AP`) og ýttu á {{key:Enter}}.
2. Smelltu á {{ui:Hlaða skrá…}} og veldu eina eða fleiri `.lsp`-skrár. Rútína sem opnar glugga fylgir venjulega `.dcl`-skrá: veldu hana líka.
3. Glugginn segir hvað hver skrá bjó til, til dæmis „Hlaðið delblocks.lsp: 1 skipun, DELBLOCKS.“
4. Smelltu á {{ui:Loka}}, skrifaðu skipun rútínunnar og ýttu á {{key:Enter}}.

Þú getur líka sleppt `.lsp`- og `.dcl`-skrám á teikninguna, eða á gluggann {{ui:Hlaða forritum}}: þær hlaðast strax.

Skráin er lesin hér, í vafranum þínum. Ekkert er sent á netið.

:::tip
Ýttu á {{key:Enter}} í tómri skipanalínu til að keyra skipun rútínunnar aftur, eins og hverja aðra skipun. Skipanaflýtileiðir þínar ná til hennar líka: sjá „Breyta skipanaflýtileiðum“.
:::

## Afhlaða rútínu

Í {{ui:Hlaða forritum}}, undir {{ui:Hlaðin forrit}}, smelltu á {{ui:Afhlaða}} við skrána. Skipanirnar sem hún bjó til hverfa þar til þú hleður henni aftur.

## Hlaða rútínu í hvert skipti sem CadCraft ræsist

1. Hladdu rútínunni.
2. Undir {{ui:Hlaðin forrit}}, smelltu á {{ui:Bæta í ræsisvítuna}} við hana.

Frá þessu hleðst hún sjálfkrafa þegar CadCraft ræsist í þessum vafra. Til að hætta því, smelltu á {{ui:Fjarlægja}} við hana undir {{ui:Ræsisvítan}}.

Ræsisvítan geymir afrit af hverri skrá í geymslu þessa vafra. Ef þú breytir rútínunni, hladdu nýju skránni og bættu henni aftur við.

## Hlaða acad.lsp og acaddoc.lsp úr stuðningsmöppu (Studio)

Í CadCraft Studio tekur {{ui:Stuðningsmappa}} í glugganum {{ui:Hlaða forritum}} möppu á tölvunni þinni. Smelltu á {{ui:Velja möppu…}}. Þegar CadCraft ræsist les það `acad.lsp` og síðan `acaddoc.lsp` úr þeirri möppu (sama hvaða stafir eru í heitunum), hleður þeim, og hleður síðan ræsisvítunni. `acaddoc.lsp` er lesin aftur í hvert sinn sem nýr teikniflipi opnast. Ekkert annað í möppunni er lesið, og skrá yfir 2 MB er sleppt með skilaboðum.

Ef skrá skilgreinir fall sem heitir `S::STARTUP`, keyrir það einu sinni eftir að skrárnar eru hlaðnar (líka eftir ræsisvítuna). {{ui:Hlaða núna}} gerir hið sama að beiðni; {{ui:Hreinsa}} gleymir möppunni.

Í vafranum getur síða ekki geymt möppu, svo þar er engin stuðningsmappa: notaðu ræsisvítuna hér fyrir ofan. Samansettar `.fas`- og `.vlx`-skrár og innfædd forrit eru áfram hafnað.

## Hlaða skrá aftur úr sögunni

{{ui:Saga}} sýnir skrárnar sem þú hefur hlaðið í þessum vafra, nýjustu fyrst. Smelltu á {{ui:Hlaða}} við eina til að hlaða henni aftur, án þess að leita að henni á tölvunni þinni.

## Skrár sem CadCraft getur ekki hlaðið

| Skrá | Hvað hún er | Hvað á að gera |
|---|---|---|
| `.fas`, `.vlx` | samansett eða varin LISP | hladdu `.lsp`-frumkóðanum í staðinn |
| `.arx`, `.crx`, `.dbx` | innfædd Windows-forrit | ekki er hægt að keyra þau í CadCraft |
| `.dvb` | VBA-verkefni | ekki er hægt að keyra þau í CadCraft |
| `.craft`, `.lua`, `.py` | CraftScript-handrit | opnaðu þau í Script-vinnusvæði PartCraft |

Glugginn {{ui:Hlaða forritum}} segir hvaða tegund skrá er þegar þú velur hana.

## Stöðva rútínu

Ýttu á {{key:Esc}}. Við eina af spurningum rútínunnar hættir Esc við hana á þann hátt sem hún gerir ráð fyrir (hreinsun hennar keyrir). Ef hún er upptekin og spyr einskis, stöðvar Esc hana umsvifalaust og segir frá því; rútínurnar þínar haldast hlaðnar.

:::note
Allt sem rútína breytir í teikningunni er eitt skref: eitt {{key:Mod+Z}} tekur það allt til baka.
:::
