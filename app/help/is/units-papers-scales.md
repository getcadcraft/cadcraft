---
title: Einingar, pappírsstærðir og kvarðar
summary: Hvað teikningareiningar þýða í CadCraft, pappírsstærðirnar fyrir blöð og prentanir, alla staðlaða kvarða, og hvernig texta- og málsetningastærðir tengjast prentkvarðanum.
keywords: einingar, millimetrar, tommur, fet, fet og tommur, byggingarlist, verkfræði, brot, kvarði, lunits, lengdarsnið, nákvæmni, metrar, pappírsstærð, a3, a1, arch d, ansi, tabloid, letter, 1:100, 1/4 tomma, byggingarkvarði, verkfræðikvarði, insunits
from: 8346236a
---

## Teikningareiningar

Þú teiknar í fullri stærð, í teikningareiningum. Það sem ein eining stendur fyrir ræðst af stillingunni **Einingar** teikningarinnar:

1. Ýttu á {{key:Esc}} svo ekkert sé valið, á {{ui:Líkan}}-flipanum.
2. Í {{ui:Núverandi stillingar}}, veldu {{ui:Einingar}}: {{ui:Án eininga}}, {{ui:Millimetrar}}, {{ui:Sentímetrar}}, {{ui:Metrar}}, {{ui:Tommur}} eða {{ui:Fet}}.

Málsetningar geta skrifað lengdir sínar í millimetrum, sentímetrum, metrum eða kílómetrum hver sem teikningareiningin er: sjá [Málsetningar í mm, cm, m eða km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Breyting á einingum breytir engri stærð. Hún breytir því hvernig kvarðar eru lesnir á blöðum og í prentunum, og hvaða kvarðar eru í boði. Teikning sem er opnuð úr DWG- eða DXF-skrá heldur einingunum sem eru geymdar í skránni; hlutinn {{ui:Teikning}} í vinstra spjaldinu sýnir þær.

Teikning án eininga er meðhöndluð sem eining pappírsins: millimetrar á ISO-pappír, tommur á bandarískum pappír.

## Fet og tommur, og brot

Hvernig lengdir eru **skrifaðar og sleginar inn** er sérstök stilling: lengdarsniðið. Það breytir engri rúmfræði, aðeins hvernig tölur líta út og hvað þú getur slegið inn.

1. Ýttu á {{key:Esc}} svo ekkert sé valið, á {{ui:Líkan}}-flipanum.
2. Í {{ui:Núverandi stillingar}}, veldu {{ui:Lengdarsnið}}: {{ui:Tugakerfi}} (`150.5`), {{ui:Byggingarlist}} (`12'-6 1/2"`), {{ui:Verkfræðileg}} (`12'-6.5"`), {{ui:Brot}} (`150 1/2`) eða {{ui:Vísindaleg}} (`1.505E+02`).
3. Veldu {{ui:Nákvæmni}}: aukastafi, eða minnsta brot (1/16 er venjulegt val fyrir byggingarlist).

Eða sláðu inn {{cmd:UNITS}} (`UN`) og svaraðu tveimur spurningum þess.

Með {{ui:Byggingarlist}} eða {{ui:Verkfræðileg}} er ein teikningareining ein tomma, eins og í AutoCAD: stilltu {{ui:Einingar}} á {{ui:Tommur}} líka. Þú getur þá slegið inn lengdir í fetum og tommum hvar sem lengd er beðin um, og í reitunum í {{ui:Eiginleikum}}:

| Þú slærð inn | Þýðir |
|---|---|
| `12'6"` eða `12'-6"` | 12 fet og 6 tommur (150) |
| `12'6-1/2"` | 12 fet og 6½ tomma. Notaðu bandstrik fyrir brotið: {{key:Space}} er {{key:Enter}} á skipanalínunni. |
| `12'` | 12 fet |
| `6"` eða `6` | 6 tommur: venjuleg tala er tommur |
| `1/2`, `6-1/2` | brot virka í hvaða sniði sem er |

Punktar taka sömu lengdir: `@12'6",0` eða `@10'<90`. Horn eru áfram í gráðum.

Sniðið birtist í ferlinum ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: flatarmál sem fermetra tommur og fermetra fet), í {{ui:Eiginleikum}}, í hnitunum á stöðustikunni, og í **nýjum málsetningum**. Blöð halda pappírseiningum sínum (millimetrum eða tommum) sem tugatölum.

:::note
Lengdarsniðið er vistað í DWG- og DXF-skrám, og hver málsetning heldur sínu eigin: vistuð teikning opnast aftur eins og þú skildir hana eftir.
:::

## Pappírsstærðir

Blöð og prentanir líkana nota þessar stærðir, í hvorri stefnu sem er:

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

Ný blöð byrja á ISO A3 fyrir metrateikningar og teikningar án eininga, og á Tabloid fyrir teikningar í tommum eða fetum. Prentanir líkana byrja á ISO A4 eða Letter á sama hátt, og muna síðan síðasta val þitt. Blöð úr opnuðum skrám halda eigin stærð, sem er sýnd sem „Sérsniðið“ þegar hún er ekki ein af þessum.

## Kvarðar

Kvarði `1:n` þýðir að ein eining á pappír sýnir n af sömu einingu í líkaninu, svo 1:100 sýnir 1 m af byggingu sem 10 mm á pappír. CadCraft reiknar þetta út frá einingum teikningarinnar og einingu pappírsins.

**Metrakvarðar**, í boði fyrir hverja teikningu: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Byggingarkvarðar**, í boði þegar einingarnar eru tommur eða fet: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Verkfræðikvarðar**, í boði þegar einingarnar eru tommur eða fet: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Eigin kvarðar.** Sláðu inn `SCALELISTEDIT` (eða `SCALELIST`) til að bæta við kvarða eigin, eins og 1:75 eða lóðarkvarða 2 pappír : 300 teikning. `Add` biður um heiti, síðan pappírseiningar og teikningareiningar (heiti eins og `1:75` býður sínar eigin tölur; ýttu á {{key:Enter}} til að taka þær). `Edit`, `Delete`, `List` og `Reset` vinna á sama lista; `Reset` fer aftur í staðlaða listann. Kvarðar þínir birtast á eftir þeim stöðluðu í kvarðalista sýnisglugga í {{ui:Eiginleikum}} og í glugganum {{ui:Prenta í PDF}}, sýnisgluggi í þeim kvarða les með heitinu sínu, og þeir eru vistaðir í teikningunni (DWG og DXF 2000) sem kvarðalisti hennar. Teikning sem er opnuð úr öðru forriti kemur með listann sinn inn; kvarðar sem passa við staðlaðan eru ekki sýndir tvisvar.

Þegar sýnisgluggi er beint að með {{ui:Sýna allt líkanið}} eða {{ui:Veldu glugga á líkaninu…}}, velur CadCraft stærsta staðlaða kvarða sem passar. {{ui:Passa allt líkanið}} setur nákvæman kvarða í staðinn, sem birtist sem einfalt hlutfall.

## Stærðir á pappír og í líkaninu

Texta- og málsetningarstærðir eru í einingum rýmisins sem þú teiknar í.

| Þú vilt á pappír | Teiknað á blaði | Teiknað í líkaninu í 1:50 (mm-teikning) | Teiknað í líkaninu í 1/4" = 1'-0" (tommuteikning) |
|---|---|---|---|
| 2.5 mm texti | 2.5 | 125 | — |
| 3/32" texti | 0.09375 | — | 4.5 |

Fyrir málsetningar skaltu halda stærðunum sem pappírsstærðum og stilla heildarkvarðann ({{cmd:DIMSCALE}}) á prentkvarðann: 50 fyrir 1:50, 48 fyrir 1/4" = 1'-0". Sjá [Stilla stærðir málsetninga](topic:dimension-settings).

## Merkja eftir kvarða

Teiknaðu líkanið í fullri stærð og láttu CadCraft reikna summurnar hér að ofan fyrir þig.

1. Veldu textann eða málsetningarnar sem eiga að halda stærð sinni á pappír. Í {{ui:Eiginleikum}} hakaðu við {{ui:Skýringar}}. {{ui:Stærð á blaði}} sýnir þá til dæmis `2.5 mm at 1:50`.
2. Sláðu inn {{cmd:ANNOSCALE}} og kvarðann sem teikningin verður prentuð í, eins og `1:100`.

Sérhver skýringatexti og málsetning er stærðarbreytt svo hann prentast í sömu stærð í nýja kvarðanum: 2.5 mm texti er 125 á hæð í millimetrateikningu í 1:50 og 250 á hæð í 1:100. Breidd málsgreinar breytist með honum; texti, örvar og bil málsetningar breytast saman (heildarkvarði hennar). Það er eitt skref í afturköllun, og hlutir sem eru ekki skýringar breytast aldrei.

Stillingin er vistuð í DWG og DXF: önnur forrit lesa skýringarmerkið, og CadCraft heldur líka kvarðanum sem hver hlutur er stærðaður fyrir.

Ef skrifstofan þín stillir pappírshæðir í viðbótinni Default Policies (Stillingar › Almennt › Default Policies › Stærðir skýringa á pappír), stillir {{cmd:ANNOSCALE}} líka hæðina sem nýr texti byrjar með á hæð skrifstofunnar fyrir athugasemdir í þeim kvarða. Sjá [Default Policies](topic:default-policies).

### Einn hlutur í nokkrum kvörðum

Blað sýnir oft sömu grunnmyndina í 1:100 og hluta hennar í 1:50. Gefðu athugasemdum og málsetningum báða kvarðana og hver sýnisgluggi sýnir þær í pappírsstærð sinni:

1. Veldu skýringatextann og málsetningarnar og sláðu inn `OBJECTSCALE`.
2. Veldu `Add` og sláðu inn kvarðann, til dæmis `1:50`. (`Current scale` bætir við skýringarkvarða teikningarinnar; `List` sýnir hvað hver hlutur heldur; `Delete` tekur einn af.)

Sýnisgluggi sem hefur kvarða á lista hlutar sýnir hann í stærðinni fyrir þann kvarða: 2.5 mm texti er teiknaður 250 á hæð í gegnum 1:100 sýnisglugga og 125 á hæð í gegnum 1:50 sýnisglugga, á skjánum og í prentuninni. Hluturinn helst þar sem hann er; aðeins stærðin er önnur. Í sýnisglugga í kvarða sem er ekki á lista hlutarins birtist hluturinn í þeirri stærð sem hann hefur, þangað til þú slærð inn `ANNOALLVISIBLE` og velur `OFF`: þá er hann skilinn eftir þar. {{cmd:ANNOSCALE}} breytir stærð þeirra hluta sem skrá nýja kvarðann og skilur hina eftir.

Listarnir eru vistaðir í DWG og DXF sem gögn CadCraft sjálfs. Annað forrit sér hvern hlut sem skýringarhlut, í þeim eina kvarða sem hann er stærðaður fyrir. Rofinn ANNOALLVISIBLE er ekki geymdur í skránni.

## Línuþykktir og línugerðir

Lag, eða hlutur, getur haft **línuþykkt** (0.05 til 2.11 mm) og **línugerð** (strikuð, falin, miðja, fasa, punktalína…). Stilltu þær í hægra spjaldinu: þegar ekkert er valið eru {{ui:Línugerð}} og {{ui:Línuþykkt}} undir {{ui:Núverandi stillingar}} það sem nýir hlutir fá ({{ui:Eftir lagi}} til að fylgja lagi þeirra), og þær tvær undir {{ui:Lag …}} eru eigin stillingar núverandi lags. Þegar hlutir eru valdir breyta sömu tvær línur og {{ui:Mælikvarði línutegunda}} þeim hlutum. Skipanirnar eru {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) og {{cmd:LTSCALE}} (`LTS`).

Línugerðir sýna sig á skjánum og í prentun. Strik þeirra eru í teikningareiningum: mæligerðarteikning notar ISO-stærðirnar (DASHED: 12.7 mm strik), tommuteikning tommustærðirnar (0.5"). Ef strikin líta of lítil eða of stór út, breyttu {{ui:Mælikvarða línutegunda}} (LTSCALE) teikningarinnar: hvert strik og bil margfaldast með honum; kvarði hlutar margfaldast aftur með honum. Mynstur sem er of fínt til að sjást er teiknað sem heil lína.

Línuþykktir prentast í prentun, í mm á pappírnum óháð kvarða. Línur með {{ui:Sjálfgefið}} línuþykkt nota pennabreiddina sem var valin í glugganum {{ui:Prenta í PDF}} (0.13 til 0.70 mm; 0.25 mm í byrjun); línuþykkt 0 prentast sem þynnsta lína. Á skjánum er hver lína einn pixill á breidd þangað til þú ýtir á {{ui:LWT}} í stöðustikunni (eða slærð inn {{cmd:LWDISPLAY}}): þá teiknast línur með línuþykkt yfir 0.25 mm breiðari (0.5 mm = 2 pixlar) í líkaninu, og í sinni raunverulegu breidd á pappírnum á blaði. Valið er geymt í þessum vafra.
