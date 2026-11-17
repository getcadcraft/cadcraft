---
title: Samstilla nokkra skanna í eitt
summary: Staðsettu skanna sem teknir eru frá mismunandi stöðum í einn ramma með völdum punktapörum eða slegnum viðmiðum, fínstilltu þá með ICP, vistaðu samstillinguna sem verkefni og fluttu samstillta punktaskýið út sem LAS eða E57. Skipunin er REGISTERSCANS.
keywords: samstilla, samstilling, skannar, punktaský, icp, endurtekinn næsti punktur, viðmið, punktapör, stíf umbreyting, jafna, sameina, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Það sem þú gerir

Nokkrar skannanir af sama stað (hver tekin frá sinni eigin stöðu skanna) byrja í eigin hnitum. Samstilltu þær: gefðu hverri skönnun eina staðsetningu svo þær séu allar í einum ramma, vistaðu það síðan sem verkefni og skrifaðu samstillta punktaskýið sem eina LAS- eða E57-skrá.

## Staðsettu skannana

1. Opnaðu gluggann (skrifaðu `REGISTERSCANS` (eða `REGSCAN`)). {{ui:Bæta við skönnum…}} tekur við LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- eða XYZ-skrám, eða dragðu þær á gluggann. Skönnum sem nota mismunandi einingar er hafnað með athugasemd: breyttu annarri fyrst.
2. Veldu {{ui:Skanni til að færa}} og {{ui:Staðsetja gegn}}. Myndin sýnir hvern skanna í rammanum eins og hann er núna, hver í sínum lit: {{ui:Grunnmynd}}, {{ui:Framhlið}} eða {{ui:Hliðarsýn}}. Dragðu til að hliða og notaðu hjólið til aðdráttar.
3. **Eftir punktapörum.** Smelltu á {{ui:Velja par}}, síðan á punkt á skanna sem á að færa, og síðan á sama stað á öðrum skanna (horn, viðmið, fótur súlu). Gerðu þetta að minnsta kosti þrisvar, með punktum sem liggja ekki á einni línu og eru dreifðir. Smelltu á {{ui:Staðsetja með pörum}}: skanninn er staðsettur með minnstu kvaðrata aðlögun og **Eftir** sýnir hversu langt hvert par er enn frá. Par með háa tölu er vont val: fjarlægðu það með krossinum og staðsettu aftur.
4. **Eftir viðmiðum.** Ef þekkt eru raunhnit punkts (mældir viðmiðspunktar), smelltu á {{ui:Velja, síðan slá inn viðmið}}, smelltu á punktinn á skanna hans og sláðu inn X, Y og Z viðmiðsins í reitina í línunni. Pör og slegin viðmið má blanda frjálst.

## Fínstilla með ICP

Pör gefa grófa staðsetningu. {{ui:Fínstilla}} færir skannann þar til yfirborð hans liggur á yfirborði hins skannans: fyrst **punktur á punkt**, síðan **punktur á flöt**. Taflan sýnir hvert skref með villu sinni og hversu margir punktar pössuðu; línan fyrir ofan hana sýnir villuna minnka. {{ui:Stöðva}} lýkur keyrslunni eftir skrefið sem er í gangi og heldur því sem náðist. {{ui:Afturkalla}} tekur alla keyrsluna (eða síðustu staðsetninguna) til baka; {{ui:Endurstilla}} setur skannann aftur í hnit skráarinnar.

Til að þetta gangi hratt á fartölvu vinnur ICP á hlutfalli punktanna ({{ui:Punktar notaðir}}, 5,000 til 60,000) og hunsar pör sem eru lengra frá en {{ui:Mesta fjarlægð samsvörunar}} (sjálfgefið 5% af stærð skannans, og minnkar þegar hann fer að falla saman). ICP þarf fyrst grófa staðsetningu: skannar sem varla skarast tilkynna að ekki sé hægt að para þá. Yfirborð sem eru aðeins flöt eða aðeins bein geta ekki lagað stöðu eftir sjálfum sér; bættu þá við pörum.

## Vista og flytja út

- {{ui:Vista verkefni}} skrifar litla `.ccscans.json`-skrá: heiti hvers skanna, stærð hans og fingrafar af fyrstu 64 KB, ásamt umbreytingu hans. Hún geymir enga punkta. {{ui:Opna verkefni…}} finnur skannaskrárnar eftir þessum tilvísunum (skrárnar verða að vera bættar við fyrst) og setur allar umbreytingar aftur.
- {{ui:Flytja út LAS}} og {{ui:Flytja út E57}} skrifa eina skrá með öllum skönnum á samstilltum stað. Punktar í frumritunum eru aldrei skrifaðir yfir; umbreytingin er notuð á leiðinni út. Með {{ui:Lesa alla punkta úr skrám}} á er hver skrá lesin aftur fyrir hvern punkt (allt að 20 milljónum á hvern skanna); án þess eru aðeins punktarnir sem sjást í skoðaranum skrifaðir.
- {{ui:Sýna samstillta punktaskýið}} (CadCraft) skrifar LAS-skrána og festir hana undir teikningunni á eigin hnitum, eins og hvert annað ský.

:::note
Ekkert er sent upp. Samstilling vinnur í einingum skránna sjálfra og heldur millimetrum: LAS er skrifuð með mælikvarða sem passar (niður í 0.1 mm), E57 með tvöfaldri nákvæmni. Hnitakerfi berst aðeins yfir í LAS þegar allir skannar gefa sama EPSG-kóða. E57-skrifarinn er okkar eigin; hann er prófaður með því að lesa skrárnar aftur með þessum lesara og með libE57Format.
:::
