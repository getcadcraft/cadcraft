---
title: Snúðu sýninni og notaðu eigin hnit (UCS)
summary: Snúðu sýninni um 90° eða í hvaða horn sem er án þess að færa neitt í teikningunni, og stilltu notendahnitakerfi (UCS) svo punktar, rétthyrnd stilling, pólrakning, hnitanetið og nýr texti fylgi ásum byggingarinnar.
keywords: ucs, notendahnitakerfi, grunnmynd, snúa sýn, snúa sýn, sýnisveifla, ucs z, ucs 3punktar, ucs hlutur, ucs heimur, nefnt ucs, ucsfollow, turnleft, turnright, turnworld, skálhallandi bygging, snúið hnitanet
from: 6f152c65
---

## Það sem þú lærir

Hvernig þú skoðar teikningu snúna, svo bygging sem er teiknuð í horni lítur rétt út á skjánum, og hvernig þú slærð inn punkta eftir eigin ásum hennar. Ekkert í teikningunni hreyfist meðan þú gerir þetta: hlutir halda hnitunum sínum, snúningur er ekki breyting, og teikningin er ekki merkt sem breytt.

## Snúðu sýninni um fjórðung

1. Smelltu á {{ui:Sýn}} › {{ui:Meira}} › {{ui:Snúa sýn 90° til vinstri}} eða {{ui:Snúa sýn 90° til hægri}}.

Teikningin snýst á skjánum um miðju teikningarsvæðisins. Gerðu það aftur til að halda áfram að snúa.

2. Smelltu á {{ui:Sýn}} › {{ui:Meira}} › {{ui:Til baka í heiminn}} til að rétta hana aftur.

Skipanirnar að baki eru {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} og {{cmd:TURNWORLD}}. Til að gefa einni þeirra lykil skaltu bæta línu eins og `TL=TURNLEFT` við samheitin þín með {{cmd:ALIASEDIT}}.

## Stilltu eftir skálhallandi byggingu

1. Sláðu inn `UCS` og ýttu á {{key:Enter}}, og síðan `OB` og {{key:Enter}}.
2. Smelltu á veggjarlínu nálægt þeim enda sem á að vera upphafspunkturinn.

UCS byrjar nú á þeim enda, með X-ásinn eftir veggnum, og sýnin snýst svo veggurinn sé láréttur á skjánum. Ássatáknið neðst í vinstra horninu sýnir í hvaða átt ásar UCS vísa.

3. Teiknaðu eins og venjulega. Með UCS stillt:
   - `x,y` og `@dx,dy` eru mæld eftir ásum UCS; `d<a` mælir hornið frá X-ási UCS.
   - {{ui:Lóðrétt/lárétt}}, pólrakning og hnitanetið fylgja ásum UCS, og krossinn gerir það líka.
   - Nýr texti og nýjar málsgreinar keyra eftir X-ási UCS; lárétt og lóðrétt hjá {{cmd:DIMLINEAR}} fylgja honum líka.
   - Hnitin í stöðustikunni og frá {{cmd:ID}} eru hnit UCS.
4. Til að slá inn heimspunkt meðan UCS er stillt skaltu setja `*` fyrir framan: `*0,0` eða `@*100,0`.
5. Sláðu inn `UCS`, {{key:Enter}}, og síðan aftur {{key:Enter}} til að fara aftur í heiminn.

## Aðrar leiðir til að stilla UCS

Við UCS-spurninguna:

| Þú slærð inn | Það sem gerist |
|---|---|
| punkt | Nýr upphafspunktur; smelltu síðan á punkt á nýja X-ásnum, eða ýttu á {{key:Enter}} til að halda horninu |
| `Z` | Snýr UCS um upphafspunktinn um horn sem þú slærð inn (gráður, rangsælis) eða velur |
| `3` (3point) | Upphafspunktur, punktur eftir jákvæðum X-ási og punktur á jákvæðu Y-hliðinni |
| `OB` (OBject) | Út frá línu, boga, hring, hluta fjöllínu, texta, blokkatilvísun, punkti eða hjálparlínu |
| `P` (Previous) | UCS á undan þessu (þau síðustu tíu eru geymd meðan teikningin er opin) |
| `W` (World) | Aftur í heiminn |
| `NA` (NAmed) | `S` vistar núverandi UCS undir nafni, `R` endurheimtir eitt, `D` eyðir einu, `?` listar þau |

Sérhver breyting snýr sýninni svo nýi X-ás UCS sé láréttur. {{cmd:PLAN}} snýr sýninni án þess að breyta UCS: {{key:Enter}} fyrir núverandi UCS, `U` fyrir vistað, `W` fyrir heiminn.

## Gott að vita

- Hver rúða í skiptum skjá heldur sínum eigin snúningi. UCS tilheyrir teikningunni.
- Blöð vinna í pappírshnitum; stilltu UCS á flipanum {{ui:Líkan}}, eða inni í sýnisglugga.
- Valgluggar sem eru dregnir í snúinni sýn velja það sem liggur innan þeirra á skjánum.
- LISP-rútínur fá punkta í UCS frá `getpoint`, geta lesið `UCSORG`, `UCSXDIR`, `UCSYDIR` og `VIEWTWIST`, og `trans` umbreytir milli heims, UCS og skjás.

:::note
Vistuð skrá geymir UCS og snúning sýnarinnar í síðari útgáfu; þangað til gilda þau meðan teikningin er opin.
:::
