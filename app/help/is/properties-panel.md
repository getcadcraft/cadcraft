---
title: Eiginleikaspjaldið
summary: Sjáðu og breyttu öllu um valda hluti, mörgum í einu: hnit með Z, stærðir, texti, stillingar málsetninga, gegnsæi og fleira. Reitir taka tjáningar og lengdir með einingum.
keywords: samtölur, heildarlengd, heildarflatarmál, summa, lengd valsins, eiginleikar, eiginleikaspjald, ctrl+1, pr, ch, mo, ddmodify, breytilegt, hraðval, pickadd, hnit, z, hæð, þykkt, gegnsæi, efni, tengill, tjáning, quickcalc, hornpunktur, víddarstíll, vikmörk, aukastafir
from: 10d6a829
---

## Það sem þú munt læra

Hvernig opna á eiginleikaspjaldið, breyta einum hlut eða hundrað í einu skrefi, slá inn nákvæm hnit (með Z), nota tjáningar og einingar í hverjum tölureit, og hvað hver tegund hluta sýnir.

## Opna það

Spjaldið er hægra megin. Til að koma því fram:

- Ýttu á {{key:Mod+1}}, eða skrifaðu {{cmd:PROPERTIES}} (eða `PR`, `CH`, `MO`).
- Tvísmelltu á hlut (texti og marglínuvísanir opna textaritilinn sinn í staðinn).

Spjaldið er færanlegt eins og hin: dragðu gripið þess til að festa það vinstra megin, hægra megin eða neðst, eða slepptu því yfir teikninguna til að fljóta það (sjá [Raðaðu spjöldunum og notaðu annan skjá](common:arrange-panels)).

### Fela það

Pinnahnappurinn efst hægra megin á spjaldinu kveikir á **sjálfvirkri felu**: spjaldið fellur saman í ræmu við hægri brúnina og teikningin fær plássið. Færðu bendilinn á ræmuna (eða ýttu á {{key:Mod+1}}) og það opnast yfir teikninguna; farðu í burtu og það fellur aftur saman. Smelltu aftur á pinnann til að halda því opnu. {{cmd:PROPERTIESCLOSE}} felur það líka.

## Kaflar

Eiginleikar eru flokkaðir í kafla sem þú getur fellt saman: **Almennt**, **Rúmfræði**, **Texti**, **Línur og örvar**, **Passun**, **Aðaleiningar**, **Aukaeiningar**, **Vikmörk**, **Mynstur**, **Ýmislegt**, og fyrir blokkir **Eigindi** og **Safnhlutur**. Smelltu á heiti kafla til að fella hann saman eða opna; CadCraft man hverja þú felldir.

Dragðu þunnu línuna milli heitanna og gildanna til að gera heitin breiðari eða mjórri. Tvísmelltu á hana til að setja hana aftur. Með lyklaborðinu, færðu fókusinn á hana og notaðu örvatakkana.

## Breyta gildi

1. Smelltu á línu. Fyrirsögnin segir „Lína“.
2. Smelltu í {{ui:Lengd}}. Meðan þú breytir sýnir reiturinn fullt gildi, ekki ávalið.
3. Skrifaðu `2500` og ýttu á {{key:Enter}}. Línan er nú 2500 löng og heldur upphafspunkti sínum og horni.

{{key:Enter}} eða smellur annars staðar beitir gildinu; {{key:Esc}} setur gamla gildið aftur. Sérhver breyting er eitt afturkallsskref.

### Tjáningar og einingar

Sérhver tölureitur tekur meira en venjulega tölu:

| Þú skrifar | Þú færð |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (tommur, í teikningu í fetum og tommum) |
| `900mm`, `3.5m`, `2ft` | Breytt í einingar teikningarinnar |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (hornreitir) |
| `0.5r`, `100g` | Radíanar og gradar, sem gráður |

Lengd með einingu krefst þess að teikningin hafi einingar: stilltu {{ui:Einingar}} undir {{ui:Nýir hlutir}} (ekkert valið) fyrst. Röng innsláttur er hafnað með athugasemd undir spjaldinu og ekkert breytist; hann er aldrei vistaður sem 0. Föll: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; horn í gráðum.

## Breyta mörgum hlutum í einu

1. Veldu nokkra hluti, til dæmis 8 línur og 4 málsetningar.
2. Fyrirsögnin segir „12 hlutir“, og listi efst býður **Allt (12)**, **Lína (8)** og **Málsetning (4)**.
3. **Allt** sýnir það sem hver hlutur hefur (lag, lit, línugerð…). Veldu **Málsetning (4)** til að sjá stillingar málsetninga.
4. Breyttu gildi, til dæmis {{ui:Aukastafir}} í `1`.

Allar fjórar málsetningarnar breytast, í einu afturkallsskrefi. Reitur sem segir **Breytilegt** þýðir að hlutirnir eru ólíkir; að skrifa gildi setur það á þá alla. Hlutir á læstum lögum eru látnir óbreyttir, og athugasemdin segir hversu margir.

## Samtölur valsins

Þegar nokkrir hlutir eru valdir segir kaflinn {{ui:Samtölur}} efst:

- **Hlutir**: hversu margir af hverri gerð, til dæmis „8 línur, 2 fjöllínur, 1 hringur“.
- **Heildarlengd**: línur, bogar og fjöllínur lagðar saman (sveigjur líka), og hversu margir hlutir það eru.
- **Heildarflatarmál**: lokuðu hlutirnir lagðir saman: hringir, heilar sporöskjur, lokaðar fjöllínur og skyggingar (göt skyggingar eru dregin frá).

Þau eru á lengdarsniði teikningarinnar (fet og tommur þegar hún notar þau; flatarmál þá í ferkönnum tommum og ferkönnum fetum). Stöðustikan sýnir sömu lengd og flatarmál hvenær sem hlutir eru valdir; {{ui:Stillingar}} › {{ui:CadCraft}} › {{ui:Lengd og flatarmál valsins}} › {{ui:Falið}} slekkur á því. Fyrir einn hlut sýnir {{ui:Rúmfræði}} eigin lengd hans og flatarmál, eins og áður.

## Hnit

Sérhver punktur sýnir **X**, **Y** og **Z**: upphaf og endi línu, miðjur, innsetningarpunkta, textastöður, núverandi hornpunkt fjöllínu. Línur sýna líka **Delta X**, **Delta Y** og **Delta Z** (aðeins lesanlegt). Fjöllínur og skyggingar hafa **Upphækkun** (ein Z fyrir allan hlutinn).

Krosshárahnappurinn við hlið nafns punkts gerir þér kleift að velja hann í teikningunni í staðinn: smelltu á hann, smelltu síðan á nýju staðsetninguna (smellifestur virka). Gildin eru heimshnit.

## Almennt

| Reitur | Hvað hann er |
|---|---|
| {{ui:Lag}}, {{ui:Litur}}, {{ui:Línugerð}}, {{ui:Mælikvarði línutegunda}}, {{ui:Línuþykkt}} | Eins og í lagaspjaldinu; {{ui:Eftir lagi}} fylgir laginu |
| {{ui:Gegnsæi}} | Eftir lagi, eftir blokk, eða 0 til 90% |
| {{ui:Þykkt}} | Hversu langt línur, hringir, bogar, fjöllínur, punktar og texti ná í Z |
| {{ui:Efni}} | Eftir lagi, eftir blokk, Global eða heiti sem teikning kom með |
| {{ui:Prentstíll}} | Aðeins lesanlegt: teikningar prentast eftir lit, í gegnum [prentstílstöflu](topic:plot-pdf#plot-style-tables) blaðsins |
| {{ui:Tengill}} | Vefslóð sem er geymd með hlutnum |

## Hvað hver tegund sýnir

| Valið | Þú getur breytt |
|---|---|
| Lína | Upphaf og endi X, Y, Z; lengd; horn |
| Hringur | Miðja; radíus; þvermál; ummál; flatarmál (hvert stillir radíusinn) |
| Bogi | Miðja; radíus; upphafs- og endahorn; heildarhorn; strengur (sýnir lengd boga og flatarmál) |
| Sporbaugur | Miðja; stór og lítill radíus; radíushlutfall; horn stóra ássins; upphafs- og endahorn |
| Fjöllína | Hornpunktar (sjá hér að neðan); alþjóðleg breidd; upphækkun; lokuð; flatarmál þegar lokuð (skalar um miðju sína) |
| Texti | Innihald; stíll; jöfnun; hæð; snúningur; breiddarstuðull; hallahorn; skilgreind breidd; línubil; lýsandi (annotative); staða |
| Blokkarvísun | Innsetningarpunktur; snúningur; kvarði X, Y, Z og jafn kvarði; gildi eigindanna |
| Skygging | Mynstur; kvarði; horn; upphaf; tengd; uppgötvun eyja; bakgrunnslitur; upphækkun |
| Málsetning | Sjá hér fyrir neðan |
| Marglínuvísun | Texti; hæð; breidd; textahlið; stærð örvaroddar; lendingarfjarlægð; oddpunktur örvaroddar |
| Sýnisgluggi | Kvarði; miðja og stærð á blaðinu; sýnarmiðja í líkaninu; kveikt; sýn læst |

### Hornpunktar fjöllínu

{{ui:Núverandi hornpunktur}} sýnir hvaða hornpunkt reitirnir fyrir neðan tilheyra. Notaðu örvahnappana, eða skrifaðu númer, til að færa þig yfir á annan hornpunkt; það eru engin takmörk á fjölda þeirra. Hver hornpunktur hefur X, Y, breidd upphafs- og endahluta, og boga hlutans sem byrjar þar (0 = beinn).

## Málsetningar

Málsetning sýnir **Víddarstíl** sinn, það sem hún mælir, punkta sína, og allar stillingar sínar:

- **Línur og örvar:** örvarodd fyrir hvorn enda, stærð örvar, stærð merkis, litir og línuþykktir mála- og framlengingarlína, að fela annan helminginn eða aðra framlengingarlínuna, frávik framlengingarlínu og framlenging.
- **Texti:** yfirskrift (skildu eftir tóma fyrir mælda gildið; `<>` stendur fyrir það inni í eigin texta), stíll, litur, hæð, frávik, lóðrétt og lárétt staða, alltaf lárétt, snúningur, bakgrunnsfylling.
- **Passun:** heildarkvarði, bil grunnlína, hvað hreyfist þegar lítið er pláss, hreyfing texta.
- **Aðaleiningar:** snið, aukastafir, ávöl, forskeyti, viðskeyti, mælikvarði, aukastafaskilja, bæling núllna fremst og aftast; fyrir horn, snið og aukastafir horna.
- **Aukaeiningar:** kveikt eða slökkt, snið, aukastafir, margfaldari (25.4 breytir tommum í millimetra), ávöl, forskeyti og viðskeyti.
- **Vikmörk:** ekkert, samhverf, frávik, mörk eða grunnur, með efri og neðri gildum, aukastöfum, hæð og stöðu.

Breyting á einhverju þeirra á opnaðri málsetningu eyðir teikningunni sem hitt forritið gerði af henni, og CadCraft teiknar hana aftur.

:::note
Lárétt staða textans (við hlið fyrstu eða annarrar framlengingarlínu) og texti undir línunni eru teiknuð á línulegum og samsíða málsetningum; á öðrum málsetningum eru þau geymd og vistuð en ekki teiknuð enn. Passunarvalin eru geymd og vistuð en ekki teiknuð enn: CadCraft setur texta eftir eigin reglu (fyrir ofan línuna, utan hennar þegar hann passar ekki).
:::

## Ekkert valið

Þegar ekkert er valið sýnir spjaldið:

- **Nýir hlutir:** lagið, liturinn, línugerðin, línuþykktin og textahæðin sem nýir hlutir fá; einingar teikningarinnar og lengdarsnið; stærðir fyrir nýjar málsetningar. Á blaði koma heiti blaðsins, pappír og stefna fyrst.
- **Sýn:** miðja, hæð og breidd þess sem er á skjánum. Skrifaðu gildi til að færa sýnina þangað.
- **Ýmislegt:** UCS-táknið kveikt eða slökkt, UCS (ávallt World: CadCraft hefur ekki enn notandahnitakerfi) og kvarði athugasemda.

## Hnapparnir efst

| Hnappur | Gerir |
|---|---|
| Trekt | {{cmd:QSELECT}}: velja eftir gerð og eiginleika |
| Bendill | {{cmd:SELECT}}: velja hluti á skipanalínunni |
| Plús eða 1 | Hvort smellur bætir við valið (plús) eða skiptir því út (1); sama stilling og í Stillingum, {{ui:CadCraft}} |
| Pinni | Sjálfvirk felu, sjá ofar |

## Algeng mistök

- **Innsláttur í reit gerði ekkert.** Ýttu á {{key:Enter}} eða smelltu annars staðar til að beita honum. Rauður reitur og athugasemd þýðir að innsláttinum var hafnað.
- **Lengd með einingu er hafnað.** Teikningin hefur engar einingar. Stilltu {{ui:Einingar}} með ekkert valið.
- **Aðeins Lag og Litur sjást.** Nokkrar gerðir hluta eru valdar og **Allt** er valið. Veldu eina gerð í listanum efst.
- **Sumir hlutir breyttust ekki.** Þeir eru á læstu lagi. Opnaðu lagið í lagaspjaldinu.
- **Stafir sem þú skrifaðir fóru í reit.** Meðan reitur hefur bendilinn fara takkar þangað. Ýttu á {{key:Enter}} eða {{key:Esc}}, og skrifaðu síðan skipunina.
