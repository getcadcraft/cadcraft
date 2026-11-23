---
title: Einingar, pappírsstærðir og mælikvarðar
summary: Hvað einingar teikningar þýða í CadCraft, pappírsstærðirnar fyrir blöð og útprentanir, alla staðlaða mælikvarða, og hvernig texta- og málsetningarstærðir tengjast prentmælikvarðanum.
keywords: einingar, millimetrar, tommur, fet, fet og tommur, byggingarlist, verkfræði, brot, lunits, lengdarsnið, nákvæmni, metrar, pappírsstærð, a3, a1, arch d, ansi, tabloid, letter, mælikvarði, 1:100, 1/4 tomma, byggingarmælikvarði, verkfræðimælikvarði, insunits
from: 7dc9b62e
---

## Einingar teikningar

Þú teiknar í fullri stærð, í einingum teikningar. Hvað ein eining táknar er stillingin **Einingar** teikningarinnar:

1. Ýttu á {{key:Esc}} svo ekkert sé valið, á flipanum {{ui:Líkan}}.
2. Í {{ui:Núverandi stillingar}} velurðu {{ui:Einingar}}: {{ui:Án eininga}}, {{ui:Millimetrar}}, {{ui:Sentímetrar}}, {{ui:Metrar}}, {{ui:Tommur}} eða {{ui:Fet}}.

Málsetningar geta skrifað lengdir sínar í millimetrum, sentímetrum, metrum eða kílómetrum, hver sem eining teikningarinnar er: sjá [Málsetningar í mm, cm, m eða km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Breyting á einingum breytir engu í stærð. Hún breytir því hvernig mælikvarðar eru lesnir á blöðum og í útprentunum, og hvaða mælikvarðar eru boðnir. Teikning sem opnuð er úr DWG- eða DXF-skrá heldur þeim einingum sem skráin geymir; hlutinn {{ui:Teikning}} í vinstra spjaldinu sýnir þær.

Teikning án eininga er meðhöndluð eins og hún sé í pappírseiningu: millimetrar á ISO-pappír, tommur á bandarískum pappír.

## Fet og tommur, og brot

Hvernig lengdir eru **skrifaðar og slegnar inn** er sérstök stilling, lengdarsniðið. Það breytir engri rúmfræði, aðeins því hvernig tölur líta út og hvað þú getur slegið inn.

1. Ýttu á {{key:Esc}} svo ekkert sé valið, á flipanum {{ui:Líkan}}.
2. Í {{ui:Núverandi stillingar}} velurðu {{ui:Lengdarsnið}}: {{ui:Tugakerfi}} (`150.5`), {{ui:Byggingarlist}} (`12'-6 1/2"`), {{ui:Verkfræðileg}} (`12'-6.5"`), {{ui:Brot}} (`150 1/2`) eða {{ui:Vísindaleg}} (`1.505E+02`).
3. Veldu {{ui:Nákvæmni}}: aukastafi, eða minnsta brot (1/16 er venjulegt val fyrir byggingarlist).

Eða skrifaðu {{cmd:UNITS}} (`UN`) og svaraðu tveimur spurningum þess.

Með {{ui:Byggingarlist}} eða {{ui:Verkfræðileg}} er ein eining teikningar ein tomma, eins og í AutoCAD: stilltu {{ui:Einingar}} líka á {{ui:Tommur}}. Þá getur þú slegið inn lengdir í fetum og tommum hvar sem lengd er spurt, og í reitum {{ui:Eiginleikar}}:

| Þú slærð inn | Þýðir |
|---|---|
| `12'6"` eða `12'-6"` | 12 fet 6 tommur (150) |
| `12'6-1/2"` | 12 fet 6½ tomma. Notaðu bandstrik á undan brotinu: {{key:Space}} er {{key:Enter}} í skipanalínunni. |
| `12'` | 12 fet |
| `6"` eða `6` | 6 tommur: venjuleg tala er tommur |
| `1/2`, `6-1/2` | brot virka í hvaða sniði sem er |

Punktar taka sömu lengdir: `@12'6",0` eða `@10'<90`. Horn eru áfram í gráðum.

Sniðið birtist í sögunni ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: flatarmál sem fermetra tomma og fermetra fet), í {{ui:Eiginleikar}}, í hnitunum á stöðustikunni, og í **nýjum málsetningum**. Blöð halda pappírseiningum sínum (millimetrum eða tommum) sem aukastöfum.

:::note
Lengdarsniðið er vistað í DWG- og DXF-skrám, og hver málsetning geymir sitt eigið: vistuð teikning opnast eins og þú skildir hana eftir.
:::

## Pappírsstærðir

Blöð og útprentanir líkansins nota þessar stærðir, í hvorri stefnu sem er:

| Pappír | Stærð | Eining á blaði |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimetrar |
| ISO A3 | 420 × 297 mm | millimetrar |
| ISO A2 | 594 × 420 mm | millimetrar |
| ISO A1 | 841 × 594 mm | millimetrar |
| ISO A0 | 1189 × 841 mm | millimetrar |
| Letter | 11 × 8.5 in | tommur |
| Legal | 14 × 8.5 in | tommur |
| Tabloid / ANSI B | 17 × 11 in | tommur |
| ANSI C | 22 × 17 in | tommur |
| ANSI D | 34 × 22 in | tommur |
| ARCH C | 24 × 18 in | tommur |
| ARCH D | 36 × 24 in | tommur |
| ARCH E | 48 × 36 in | tommur |

Ný blöð byrja á ISO A3 fyrir metrískar teikningar og teikningar án eininga, og á Tabloid fyrir teikningar í tommum eða fetum. Útprentanir líkansins byrja á ISO A4 eða Letter á sama hátt, og muna síðan síðasta val þitt. Blöð úr opnuðum skrám halda sinni eigin stærð, sýnd sem „Custom“ þegar hún er ekki ein af þessum.

## Mælikvarðar

Mælikvarði `1:n` þýðir að ein eining á blaði sýnir n sömu einingar í líkaninu, svo 1:100 sýnir 1 m af byggingu sem 10 mm á pappír. CadCraft reiknar það út frá einingum teikningarinnar og einingu pappírsins.

**Metrískir mælikvarðar**, boðnir fyrir sérhverja teikningu: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Byggingarlistarmælikvarðar**, boðnir þegar einingarnar eru tommur eða fet: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Verkfræðilegir mælikvarðar**, boðnir þegar einingarnar eru tommur eða fet: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Eigin mælikvarðar.** Skrifaðu `SCALELISTEDIT` (eða `SCALELIST`) til að bæta við mælikvarða sem þú átt, eins og 1:75 eða lóðarmælikvarða 2 á pappír: 300 í teikningu. `Add` spyr um heiti, síðan pappírseiningar og einingar teikningar (heiti eins og `1:75` býður sínar eigin tölur; ýttu á {{key:Enter}} til að taka þær). `Edit`, `Delete`, `List` og `Reset` vinna á sama lista; `Reset` fer aftur í staðlaða listann. Mælikvarðar þínir birtast á eftir þeim stöðluðu í lista sýnigluggans í {{ui:Eiginleikum}} og í glugganum {{ui:Prenta í PDF}}; sýnigluggi í þeim mælikvarða birtist með heitinu sínu, og þeir eru vistaðir í teikningunni (DWG og DXF 2000) sem mælikvarðalisti hennar. Teikning sem opnuð er úr öðru forriti færir sinn lista með sér; mælikvarðar sem passa við staðlaðan eru ekki sýndir tvisvar.

Þegar sýnigluggi er beint að með {{ui:Sýna allt líkanið}} eða {{ui:Veldu glugga á líkaninu…}} velur CadCraft stærsta staðlaða mælikvarðann sem passar. {{ui:Passa allt líkanið}} setur nákvæman mælikvarða í staðinn, sem er lesinn sem venjulegt hlutfall.

## Stærðir á pappír og í líkaninu

Texta- og málsetningarstærðir eru í einingum rýmisins sem þú teiknar í.

| Þú vilt á pappír | Teiknað á blaði | Teiknað í líkaninu í 1:50 (mm-teikning) | Teiknað í líkaninu í 1/4" = 1'-0" (tommu-teikning) |
|---|---|---|---|
| 2.5 mm texti | 2.5 | 125 | — |
| 3/32" texti | 0.09375 | — | 4.5 |

Fyrir málsetningar skaltu halda stærðunum sem pappírsstærðum og stilla heildarmælikvarðann ({{cmd:DIMSCALE}}) á prentmælikvarðann: 50 fyrir 1:50, 48 fyrir 1/4" = 1'-0". Sjá [Stilltu stærðir málsetninga](topic:dimension-settings).

## Skýringar eftir mælikvarða

Teiknaðu líkanið í fullri stærð og láttu CadCraft reikna summurnar hér fyrir ofan fyrir þig.

1. Veldu textann eða málsetningarnar sem eiga að halda stærð sinni á pappír. Í {{ui:Eiginleikum}} hakarðu við {{ui:Skýringar}}. {{ui:Stærð á blaði}} sýnir þá til dæmis `2.5 mm at 1:50`.
2. Skrifaðu {{cmd:ANNOSCALE}} og þann mælikvarða sem teikningin verður prentuð í, til dæmis `1:100`.

Sérhver skýringartexti og málsetning er stækkaður eða minnkaður svo hann prentist í sömu stærð í nýja mælikvarðanum: 2.5 mm texti er 125 hár í millimetra-teikningu í 1:50 og 250 hár í 1:100. Breidd málsgreinar breytist með honum; texti, örvar og bil málsetningar breytast saman (heildarmælikvarði hennar). Þetta er eitt afturkallsskref, og hlutir sem eru ekki skýringarhlutir eru aldrei breyttir.

Stillingin er vistuð í DWG og DXF: önnur forrit lesa skýringarmerkið, og CadCraft geymir líka mælikvarðann sem hver hlutur er stilltur fyrir.

Ef skrifstofan þín stillir pappírshæðir í viðbótinni Sjálfgefnar stefnur (Stillingar › Almennt › Sjálfgefnar stefnur › Stærðir athugasemda á pappír), þá setur {{cmd:ANNOSCALE}} líka hæðina sem nýr texti byrjar með í hæð skrifstofunnar fyrir athugasemdir í þeim mælikvarða. Sjá [Sjálfgefnar stefnur](topic:default-policies).

### Einn hlutur í nokkrum mælikvörðum

Blað sýnir oft sama grunnflöt í 1:100 og hluta hans í 1:50. Gefðu athugasemdunum og málsetningunum báða mælikvarðana og sérhver sýnigluggi sýnir þær í pappírsstærð sinni:

1. Veldu skýringartextann og málsetningarnar og skrifaðu `OBJECTSCALE`.
2. Veldu `Add` og skrifaðu mælikvarðann, til dæmis `1:50`. (`Current scale` bætir við skýringamælikvarða teikningarinnar; `List` sýnir hvað hver hlutur geymir; `Delete` tekur einn burt.)

Sýnigluggi sem hefur mælikvarða á lista hlutar sýnir hann í stærðinni fyrir þann mælikvarða: 2.5 mm texti er teiknaður 250 hár í gegnum 1:100 sýnigluggann og 125 hár í gegnum 1:50, bæði á skjánum og í prentun. Hluturinn helst þar sem hann er; aðeins stærðin er önnur. Í sýnigluggu í mælikvarða sem er ekki á lista hlutarins birtist hluturinn í þeirri stærð sem hann hefur, þar til þú skrifar `ANNOALLVISIBLE` og velur `OFF`: þá er hann skilinn eftir þar. {{cmd:ANNOSCALE}} breytir stærð þeirra hluta sem hafa nýja mælikvarðann á listanum og skilur hina eftir eins og þeir eru.

Listarnir eru vistaðir í DWG og DXF sem gögn CadCraft. Annað forrit sér hvern hlut sem skýringarhlut, í þeim eina mælikvarða sem hann er stilltur fyrir. Rofinn ANNOALLVISIBLE er ekki geymdur í skránni.

## Línuþykktir og línugerðir

Lag, eða hlutur, getur haft **línuþykkt** (0.05 til 2.11 mm) og **línugerð** (strikaða, falda, miðju, fasa, punkta…). Stilltu þær í hægra spjaldinu: þegar ekkert er valið eru {{ui:Línugerð}} og {{ui:Línuþykkt}} undir {{ui:Núverandi stillingar}} það sem nýir hlutir fá ({{ui:Eftir lagi}} til að fylgja lagi þeirra), og þær tvær undir {{ui:Lag …}} eru eigin gildi núverandi lags. Þegar hlutir eru valdir breyta sömu tvær línurnar og {{ui:Mælikvarði línutegunda}} þeim hlutum. Skipanirnar eru {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) og {{cmd:LTSCALE}} (`LTS`).

Línugerðir sjást á skjánum og í prentun. Strik þeirra eru í einingum teikningar: metrísk teikning notar ISO-stærðirnar (DASHED: 12.7 mm strik), teikning í tommum tommustærðirnar (0.5"). Ef strikin sýnast of lítil eða of stór skaltu breyta {{ui:Mælikvarða línutegunda}} teikningarinnar (LTSCALE): sérhvert strik og bil margfaldast með honum; eigin mælikvarði hlutar margfaldar hann aftur. Mynstur sem er of fínt til að sjá er teiknað sem heil lína.

Línuþykktir prentast í mm á pappírnum, hvaða mælikvarða sem er. Línur með {{ui:Sjálfgefið}} línuþykkt nota pennabreiddina sem valin er í glugganum {{ui:Prenta í PDF}} (0.13 til 0.70 mm; 0.25 mm til að byrja með); línuþykkt 0 prentast sem þynnsta lína. Á skjánum er sérhver lína einn pixill á breidd þar til þú ýtir á {{ui:LWT}} á stöðustikunni (eða skrifar {{cmd:LWDISPLAY}}): þá teiknast línuþykkt yfir 0.25 mm breiðari (0.5 mm = 2 pixlar) í líkaninu, og í sinni réttu breidd á pappírnum á blaði. Valið er geymt í þessum vafra.

## Skrifstofustaðallinn

Skrifstofa getur geymt textahæðir sínar á pappír, lög, reiti titilreits og sniðmát í einni skrá, skrifstofustaðlinum. CadCraft les hann í þessari röð: eigin skrá teikningarinnar (stillt með {{cmd:OFFICESTANDARD}} › `Import`, geymd í skránni), sameiginlegan staðal liðsins þíns, og síðan Sjálfgefnar stefnur þínar. Skýringartextar og málsetningar taka pappírshæð sína úr honum í skýringamælikvarðanum. Tómur staðall breytir engu. {{cmd:OFFICESTANDARD}} › `Layers` bætir við skrifstofulögum sem teikning vantar.
