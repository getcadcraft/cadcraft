---
title: Hjálparlínur og geislar
summary: Teiknaðu línur sem halda áfram án enda (XLINE) eða frá punkti í eina átt (RAY) til að raða hlutum upp, og klipptu þær í venjulegar línur.
keywords: xline, ray, construction line, construction lines, óendanleg lína, leiðarlína, viðmiðunarlína, helmingunarlína, fjarlægðarlína, uppstillingarlínur, xl
from: b6c398bc
---

## Hvað þú lærir

Hvernig þú teiknar hjálparlínur til að raða hlutum upp meðan þú teiknar: í gegnum tvo punkta, láréttar eða lóðréttar, í horni, mitt á milli tveggja stefna, eða í ákveðinni fjarlægð frá línu. Og hvernig þú klippir þær í venjulegar línur þegar þær hafa unnið sitt verk.

## Tvær gerðir

- **Hjálparlína** ({{cmd:XLINE}}) heldur áfram án enda í báðar áttir.
- **Geisli** ({{cmd:RAY}}) byrjar í punkti og heldur áfram án enda í eina átt.

Bæði teiknast yfir allt teiknisvæðið, óháð aðdrætti, í klofnum skjá og í sýnigluggum á blaði. {{ui:Mörk}} sleppir þeim, svo aðdráttur að teikningunni passar enn við það sem þú teiknaðir.

## Teiknaðu hjálparlínur

1. Smelltu á {{ui:Teikna}} › {{ui:Meira}} › {{ui:Smíðalína}}, eða skrifaðu `XL` og ýttu á {{key:Enter}}.
2. Smelltu á punkt. Sérhver smellur eftir það bætir við hjálparlínu í gegnum fyrsta punktinn og þann sem þú smellir á.
3. Ýttu á {{key:Enter}} til að ljúka.

Í stað fyrsta punktsins getur þú skrifað valkost:

| Valkostur | Hvað hann gerir |
|---|---|
| `H` (Hor) | Láréttar línur, ein í gegnum hvern punkt sem þú smellir á. |
| `V` (Ver) | Lóðréttar línur í gegnum hvern punkt. |
| `A` (Ang) | Línur í horni sem þú skrifar (gráður, rangsælis frá X-ásnum), í gegnum hvern punkt. `R` (Reference) mælir hornið frá línu sem þú velur. |
| `B` (Bisect) | Smelltu á hornið, og síðan á punkt á annarri hliðinni: hver punktur sem þú smellir á við hina hliðina bætir við línu mitt á milli þeirra. |
| `O` (Offset) | Skrifaðu fjarlægð, veldu línu, og smelltu síðan á hliðina: hjálparlína í þeirri fjarlægð frá henni, samsíða. `T` (Through) setur hana í gegnum punkt sem þú smellir á í staðinn. Fjarlægðin er geymd fyrir næsta skipti. |

## Teiknaðu geisla

1. Smelltu á {{ui:Teikna}} › {{ui:Meira}} › {{ui:Geisli}}, eða skrifaðu `RAY` og ýttu á {{key:Enter}}.
2. Smelltu þar sem geislarnir byrja.
3. Smelltu á punkt fyrir hvern geisla sem hann á að fara í gegnum. Ýttu á {{key:Enter}} til að ljúka.

## Festu við þær og klipptu þær

Hjálparlínur og geislar taka þátt í festingum Nálægur, Hornrétt og Skurðpunktur. Þeir hafa enga enda og enga miðju, svo Endapunktur og Miðpunktur finna ekkert á þeim.

Þær skera og eru skornar eins og aðrar línur í {{cmd:TRIM}} og {{cmd:BREAK}}:

- Klipptu annan enda af hjálparlínu og hún verður geisli sem byrjar við skurðinn.
- Klipptu fjarlæga hlutann af geisla og hann verður venjuleg lína.
- Brjóttu hjálparlínu í einum punkti og þú færð tvo geisla.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} og {{cmd:STRETCH}} virka líka á þær. Gluggaval velur þær aldrei, því enginn gluggi rúmar alla óendanlega línu; krossgluggi eða smellur gerir það.

:::note
DWG (allar útgáfur) og DXF 2000 geyma þær sem hjálparlínur. DXF R12 hefur engar, svo þar verða þær að línum yfir teikninguna, og vistunin segir frá því. Útprentun eða PDF teiknar þær aðeins yfir það sem prentast.
:::
