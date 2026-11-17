---
title: Splínur og fjöllínur: SPLINE, SPLINEDIT, PEDIT
summary: Teiknaðu mjúkan feril í gegnum punkta eða út frá stjórnhyrningi, breyttu passun hans og stjórnpunktum, og breyttu fjöllínum (tengja, loka, breidd, passa, splína, afbeygja) eða breyttu splínu í fjöllínu.
keywords: splína, splinedit, spl, spe, pedit, pe, passapunktar, stjórnpunktar, vægi, nurbs, breyting fjöllínu, tengja, passandi ferill, afbeygja, breyta í fjöllínu, nákvæmni, snerill, ferill, passaskekkja
from: d31f72d8
---

## Það sem þú munt búa til

Feril í gegnum fimm punkta, síðan sami ferill breyttur á þrjá vegu, og fjöllína búin til úr þremur línum.

## Teikna splínu í gegnum punkta

1. Skrifaðu `SPL` og ýttu á {{key:Enter}}.
2. Smelltu á eða skrifaðu punktana sem ferillinn á að fara í gegnum: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Ýttu á {{key:Enter}} eftir þann síðasta.
3. {{ui:Snerill í upphafi}}: smelltu á punkt sem ferillinn á að stefna að, eða ýttu á {{key:Enter}} til að láta forritið ákveða. Gerðu það sama fyrir {{ui:Snerill í lokin}}.

Ferillinn fer í gegnum hvern punkt. Skrifaðu `C` í stað {{key:Enter}} til að loka honum (ferillinn kemur aftur að fyrsta punkti). {{key:U}} (`Afturkalla`) tekur síðasta punktinn til baka meðan þú teiknar.

### Teikna einn út frá stjórnhyrningi

Skrifaðu `M` við fyrstu spurninguna, síðan [Stjórnhnit (C)] og gráðu frá 1 til 5 (3 er algengast). Nú eru punktarnir sem þú velur hornin á marghyrningi sem dregur ferilinn að sér; ferillinn byrjar á fyrsta punktinum og endar á þeim síðasta. Lokaður ferill vefst um, án horns á samskeytunum.

### Breyta fjöllínu í splínu

Við fyrstu spurninguna skrifaðu [Hlutur (O)] og veldu fjöllínur eða línur. Þær verða að splínum í gegnum hornpunkta sína; þær upprunalegu hverfa.

## Breyta splínu

Veldu hana og skrifaðu `SPE` (eða skrifaðu `SPE` og smelltu á hana). Gripin sýna passapunktana (eða stjórnpunkta splínu sem hefur enga): dragðu einn til að móta ferilinn upp á nýtt. Við skipunina:

- **Passagögn** (splína teiknuð í gegnum punkta): [Bæta við (A)] bætir við passapunkti (smelltu hvar sem er), [Eyða (D)] eyðir einum (smelltu nálægt honum), [Færa (M)] færir einn (smelltu nálægt honum, síðan á nýjan stað), [Snertlar (T)] setur endasnertla, [Hreinsa (P)] hreinsar passapunktana, þannig að splínan er breytt eftir stjórnpunktum héðan í frá.
- **Breyta hornpunkti**: [Bæta við (A)] bætir við stjórnpunkti án þess að breyta ferlinum, [Færa (M)] færir einn, [Vægi (W)] gefur einum **vægi** (yfir 1 dregur ferilinn nær honum, undir 1 lætur hann sleppa).
- **Opna** eða **Loka**, og **Snúa við** (ferillinn fer hina leiðina).
- **[Breyta í fjöllínu (P)]**: splínan verður að fjöllínu; nákvæmnin er hversu marga hluta hvert bil fær (10 er venjulegt).
- **Afturkalla** tekur síðustu breytingu til baka; **[Hætta (X)]** lýkur.

{{ui:Eiginleikar}} sýnir stig splínu, hversu marga passa- og stjórnpunkta hún hefur, lengd hennar, og leyfir þér að opna eða loka henni.

## Breyta fjöllínu

Veldu fjöllínu og skrifaðu `PE`. Lína, bogi eða splína sem þú velur er fyrst boðin sem fjöllína til að breyta í (splína biður um nákvæmnina).

- **Loka** / **Opna** tengir eða aðskilur endana.
- **Tengja** bætir við línum, bogum og fjöllínum sem endar þeirra mætast við enda fjöllínunnar. `Ónákvæmnisfjarlægð` er hversu langt endar mega vera í sundur og samt tengjast (0 þýðir að þeir verða að mætast).
- **Breidd** gefur allri fjöllínunni eina breidd (0 fjarlægir hana).
- **Passa** skiptir fjöllínunni út fyrir mjúkan feril sem fer í gegnum hornpunkta hennar; **Splína** með kúbískri B-splínu sem fylgir þeim (hún byrjar og endar á fyrsta og síðasta hornpunkti og heldur sig nærri hinum). Báðar verða að fjöllínu úr stuttum hlutum, og upprunalegu hornin eru varðveitt, þannig að **Afbeygja** skilar þeim.
- **Línutegundarmyndun** segir hvort strikalínutegund haldi áfram eftir allri fjöllínunni eða byrji aftur við hvern hornpunkt.
- **Snúa við** breytir röð hornpunktanna. **Margar** (`M` við fyrstu spurningu) breytir nokkrum fjöllínum með sömu valkostum.

Breyting á hornpunktum fjöllínu í {{ui:Eiginleikar}} eða með gripum helst óbreytt: PEDIT hefur engan hornpunktaritil.

## Í skrám

DWG og DXF 2000 geyma splínu sem splínu: stig, stjórnpunkta, hnúta, vægi, passapunkta og snertla. Splína sem þú opnar og breytir ekki er skrifuð aftur nákvæmlega eins og hún kom. DXF R12 hefur enga splínu: hún er vistuð sem fjöllína eftir ferlinum, og ferillinn segir hversu margar.

Hliðra, klippa, lengja, rúna, brjóta og tengja virka ekki á splínum. {{cmd:EXPLODE}} splínu, eða {{cmd:PEDIT}} hana, til að fá fjöllínu sem þessar skipanir taka við.

## Algeng mistök

- **Ferillinn skýtur út fyrir milli nálægra punkta.** Ferill í gegnum punkta beygir þar sem punktarnir gera það. Notaðu færri punkta, eða stjórnhyrning.
- **„Það er ekki splína.“** SPLINEDIT tekur aðeins við splínum; {{cmd:PEDIT}} breytir fjöllínum.
- **Lokuð passasplína hefur örlítið annað form í öðru forriti.** CadCraft lokar henni með einu mjúku samskeyti á fyrsta punkti; annað forrit gæti lokað henni með reglubundnum ferli. Lokuð stjórnpunktasplína er eins í báðum.
