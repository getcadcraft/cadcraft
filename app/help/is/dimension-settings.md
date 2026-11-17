---
title: Stilla stærð, aukastafi og skala málsetninga
summary: Veldu textahæð, örvarstærð, aukastafi og heildarkvarða fyrir nýjar málsetningar, breyttu þeim sem þegar eru til, og skildu hvernig málsetningarstílar virka í CadCraft.
keywords: málsetningarstíll, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, heildarkvarði, aukastafir, örvarstærð, skali athugasemdar, dimtextunit, einingar í texta, mm, cm, m, km, millimetrar, metrar, dimlfac, dimpost
from: 8ec82a07
---

## Hvað þú lærir

Hversu stór málsetningartexti og örvar eru, hvernig þú stillir þá fyrir teikningu sem er prentuð í 1:50 eða 1:100, og hvernig þú breytir málsetningum sem þú hefur þegar gert.

## Hvernig stærðir málsetninga virka

Sérhver málsetning ber sitt eigið sett af stærðum: textahæð, örvarstærð, aukastafi, bil í kringum textann, hversu langt framlengingarlínur ganga framhjá málsetningarlínunni og hversu langt þær byrja frá hlutnum. Sjálfgefnu gildin eru nálægt algengum ISO-stíl:

| Stilling | Sjálfgefið | Skipun |
|---|---|---|
| Textahæð | 2.5 | {{cmd:DIMTXT}} |
| Örvarstærð | 2.5 | {{cmd:DIMASZ}} |
| Aukastafir | 2 (aftari núll falla burt) | {{cmd:DIMDEC}} |
| Bil í kringum texta | 0.625 | {{cmd:DIMGAP}} |
| Framlenging framhjá málsetningarlínu | 1.25 | {{cmd:DIMEXE}} |
| Fjarlægð frá hlut | 0.625 | {{cmd:DIMEXO}} |
| Heildarkvarði | 1 | {{cmd:DIMSCALE}} |

Sérhver stærð er margfölduð með **heildarkvarðanum**. Stilltu stærðirnar eins og þú vilt þær á pappír (2.5 mm texti), og stilltu heildarkvarðann á prentskalann (50 fyrir 1:50). Textinn er þá 2.5 × 50 = 125 teikniseiningar á hæð, sem prentast 2.5 mm.

:::note
Nefndir málsetningarstílar eru stjórnaðir með {{cmd:DIMSTYLE}}: sjá kaflann hér að neðan. Sérhver málsetning geymir líka stillingarnar sem hún var gerð með, svo þú getur samt breytt einni málsetningu einni í {{ui:Eiginleikar}}.
:::

## Stilltu stærðirnar fyrir nýjar málsetningar

Hvor leiðin hér að neðan breytir aðeins málsetningum sem þú gerir síðar.

### Í spjaldinu {{ui:Núverandi stillingar}}

1. Ýttu á {{key:Esc}} svo ekkert sé valið. Á flipanum {{ui:Líkan}} segir hægra spjaldið {{ui:Núverandi stillingar}}.
2. Flettu niður spjaldið að {{ui:Nýjar málsetningar}}, framhjá línunum fyrir lag, lit, einingar og {{ui:Lag 0}} (á litlum skjá byrjar það fyrir neðan neðri brún). Smelltu í {{ui:Heildarkvarði}}, skrifaðu `50` og ýttu á {{key:Enter}}.
3. Stilltu {{ui:Textahæð}}, {{ui:Örvarstærð}} og {{ui:Aukastafir}} á sama hátt ef þú vilt önnur gildi.

Stöðustikan staðfestir hvert þeirra, til dæmis „Heildarkvarði fyrir nýjar málsetningar: 50“.

### Á skipanalínunni

1. Skrifaðu `DIMSCALE` og ýttu á {{key:Enter}}.
2. Við `Enter new value for DIMSCALE <1>` skaltu skrifa `50` og ýta á {{key:Enter}}.

Sagan staðfestir „DIMSCALE = 50. Nýjar málsetningar nota það; veldu þær sem fyrir eru til að breyta þeirra.“ {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} og {{cmd:DIMEXO}} virka eins. Ýttu á {{key:Enter}} við spurninguna til að halda núverandi gildi.

### Fet og tommur í málsetningum

Nýjar málsetningar nota lengdarsnið teikningarinnar: stilltu það með {{ui:Lengdarsnið}} í {{ui:Núverandi stillingar}} eða {{cmd:UNITS}} (sjá [Fet og tommur](topic:units-papers-scales#feet-and-inches-and-fractions)), og næsta málsetning les `12'-6 1/2"`. {{cmd:DIMLUNIT}} stillir aðeins snið málsetninga (2 aukastafir, 3 verkfræði, 4 byggingarlist, 5 brot). Fyrir málsetningu sem þú hefur þegar gert skaltu velja hana og {{ui:Snið}} í {{ui:Eiginleikar}}; með brotasniði tekur reiturinn {{ui:Brot}} veldi tveggja (4 = 1/16).

## Málsetningar í mm, cm, m eða km

Málsetning mælir í teikniseiningum. Hún getur skrifað þá lengd í millimetrum, sentímetrum, metrum eða kílómetrum í staðinn, með einingunni á eftir tölunni: 1250 mm veggur les `1250 mm`, `125 cm`, `1.25 m` eða `0.00125 km`.

1. Stilltu {{ui:Einingar}} teikningarinnar í {{ui:Núverandi stillingar}} fyrst (sjá [Einingar, blaðstærðir og skalar](topic:units-papers-scales#drawing-units)), svo CadCraft viti hvað ein teikningareining er. Teikning án eininga er lesin sem millimetrar, og {{cmd:DIMTEXTUNIT}} segir það.
2. Fyrir nýjar málsetningar: ýttu á {{key:Esc}} svo ekkert sé valið, og veldu undir {{ui:Nýjar málsetningar}} {{ui:Einingar í texta}}: {{ui:Einingar teikningar}}, `mm`, `cm`, `m` eða `km`.
3. Fyrir málsetningar sem þú hefur þegar gert: veldu þær, og í {{ui:Eiginleikar}} › {{ui:Aðaleiningar}} veldu {{ui:Einingar í texta}}.

Eða skrifaðu {{cmd:DIMTEXTUNIT}} (`DTU`) og svaraðu `D`, `MM`, `CM`, `M` eða `KM`: með málsetningum valdar breytir hún þeim (eitt afturköllunarskref), en án vals stillir hún nýjar málsetningar.

{{ui:Aukastafir}} ({{cmd:DIMDEC}}) stillir enn hve mörg aukastafir birtast: með metrum og 3 aukastöfum les 1234 mm `1.234 m`. Textinn er skrifaður sem aukastafatala. Á blaði eru málsetningar mældar í pappírseiningu blaðsins (millimetrum eða tommum).

Vistuð DWG eða DXF geymir valið sem mælikvarða málsetningarinnar (DIMLFAC) og viðskeyti (DIMPOST, ` m`), svo önnur forrit sýni sama texta. Ef þú breytir síðar {{ui:Einingum}} teikningarinnar eru málsetningar skráðar í mm, cm, m eða km endurreiknaðar, svo þær segi enn rétta lengd. {{ui:Stillt handvirkt (mælikvarði eða viðskeyti)}} þýðir að {{ui:Mælikvarði mælingar}} eða viðskeytið var stillt á annan hátt; veldu einingu til að skipta þeim út.

## Breyttu málsetningum sem þú hefur þegar gert

1. Smelltu á eina málsetningu. Fyrirsögn hægra spjaldsins segir {{ui:Málsetning}}.
2. Stillingarnar eru í köflum; flettu niður spjaldið til að ná þeim síðari:
   - {{ui:Almennt}}: {{ui:Málsetningarstíll}}
   - {{ui:Rúmfræði}}: {{ui:Tegund}} og {{ui:Mæling}} (aðeins lestur)
   - {{ui:Texti}}: {{ui:Yfirskrifaður texti}} og {{ui:Textahæð}}
   - {{ui:Línur og örvar}}: {{ui:Örvarstærð}}
   - {{ui:Passun}}: {{ui:Heildarkvarði}}
   - {{ui:Aðaleiningar}}: {{ui:Aukastafir}}
3. Skrifaðu nýtt gildi og ýttu á {{key:Enter}}.

Málsetningin teiknast strax aftur. Fyrir hornmálsetningar stillir {{ui:Aukastafir (°)}} aukastafi hornsins.

:::note
Með nokkrar málsetningar valdar sýnir spjaldið þær raðir sem þær eiga sameiginlegar, og gildi sem er ólíkt á milli þeirra er sýnt sem {{ui:Breytilegt}}. Gildi sem þú skrifar breytir öllum völdu málsetningunum í einu skrefi, svo eitt {{key:Mod+Z}} setur þær allar aftur.
:::

## Málsetningar úr opnuðum teikningum

Málsetning úr opnaðri DWG- eða DXF-skrá er sýnd nákvæmlega eins og hitt forritið teiknaði hana. Spjaldið segir „Sýnt eins og forritið sem gerði hana teiknaði hana. Breyttu henni og CadCraft teiknar hana aftur í eigin stíl.“ Um leið og þú breytir einhverju gildi, færir grip eða færir málsetninguna, teiknar CadCraft hana aftur með eigin örvaroddum og letri, með stærðunum sem það las úr skránni.

Sumar málsetningar er aðeins hægt að lesa eins og þær voru teiknaðar, ekki sem breytanlegar málsetningar; þá sýnir spjaldið „Teiknað úr“ og heiti blokkar, og reiturinn „Um þessa skrá“ telur þær.

## Algeng mistök

- **Breyting á DIMSCALE breytti engu á skjánum.** Stillingin er fyrir nýjar málsetningar. Veldu þær sem fyrir eru og breyttu {{ui:Heildarkvarði}} í spjaldinu.
- **Aukastafir sýna færri tölustafi en stillt er.** Aftari núll falla burt: 2 aukastafir sýna `1250` og `1250.5`, ekki `1250.00`.
- **Texti er rétt hár á pappír í sýnigluggi en rangur í líkanprentun.** Heildarkvarðinn verður að passa við skalann sem þú prentar í. Prentun á Passa á pappír gefur undarlegan skala; veldu venjulegan skala í prentglugganum.
- **Einingar eins og mm eða m í textanum.** Veldu {{ui:Einingar í texta}} (sjá [Málsetningar í mm, cm, m eða km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Fyrir hvert annað orð á eftir tölunni skaltu skrifa það í yfirskrift: `<> TYP.`.

## Nefndir málsetningarstílar

Skrifaðu `DIMSTYLE` (`D`) til að opna {{ui:Stjórnun málsetningarstíla}}. Hún sýnir stíla teikningarinnar, hve margar málsetningar nota hvern, og hver er núverandi. **Standard** er alltaf til staðar.

- {{ui:Setja sem núverandi}}: nýjar málsetningar nota stillingar þess stíls og bera nafn hans.
- {{ui:Nýr…}}: nýr stíll sem byrjar sem afrit af þeim sem þú velur.
- {{ui:Breyta…}}: sömu reitir og málsetningarkaflinn í {{ui:Eiginleikar}} (línur og örvar, texti, passun, einingar, aukaeiningar, vikmörk). Ýttu á {{ui:Í lagi}} og stíllinn breytist **og sérhver málsetning sem notar hann breytist með**, stilling fyrir stillingu. Stilling sem þú breyttir á einni málsetningu einni helst eins nema stíllinn breytti þeirri stillingu.
- {{ui:Endurnefna…}} og {{ui:Eyða}}: Standard má ekki endurnefna né eyða, og ekki heldur núverandi stíl né stíl sem málsetningar nota.
- {{ui:Bera saman…}}: hvað er ólíkt milli tveggja stíla.
- {{ui:Beita á valið}}: veldu málsetningar fyrst; þær taka stillingar stílsins og nafn hans.

`-DIMSTYLE` gerir hið sama á skipanalínunni: `Restore`, `Save` (núverandi stillingar, þar á meðal það sem þú skrifaðir með {{cmd:DIMTXT}} og hinum, undir nafni), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stílarnir eru vistaðir í DWG eða DXF (málsetningarstílatöflu hennar) og lesnir úr skránum sem þú opnar. *Núverandi* stíllinn er ekki vistaður: teikning opnast með Standard sem núverandi. Standard heldur eigin stillingum á meðan annar stíll er núverandi.

## Breyttu texta málsetningar og framlengingarlínum

{{cmd:DIMEDIT}} (`DED`) vinnur á málsetningunum sem þú velur: **Home** setur textann aftur þangað sem stíllinn vill hafa hann, **New** skrifar annan texta (`<>` stendur fyrir mælinguna), **Rotate** snýr textanum, **Oblique** hallar framlengingarlínum línulegra og skáhallra málsetninga í horn sem þú skrifar (ýttu á {{key:Enter}} fyrir ekkert). {{cmd:DIMTEDIT}} færir textann til **Left**, **Right** eða **Center** á málsetningarlínunni, eða snýr honum (**Angle**), eða sendir hann **Home**. Textinn situr alltaf á málsetningarlínunni: ekki er hægt að draga hann á frjálsan stað.
