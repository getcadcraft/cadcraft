---
title: Unugyada, cabbirka warqadaha iyo miisaanka
summary: Waxa unugyada naqshadda ka dhigan yihiin CadCraft-ka, cabbirka warqadaha xaashiyada iyo daabacaadda, miisaanka caadiga ah oo dhan, iyo sida qoraalka iyo cabbirrada dhibcaha ula xiriiraan miisaanka daabacaadda.
keywords: unugyada, millimitir, inji, fiit, fiit iyo inji, dhismeed, injineernimo, jajab, qaabka dherarka, lunits, qaabka dherarka, saxnaanta, mitir, cabbirka warqadda, a3, a1, arch d, ansi, tabloid, letter, miisaan, 1:100, 1/4 inji, miisaanka dhismeedka, miisaanka injineernimada, insunits
from: 8346236a
---

## Unugyada naqshadda

Waxaad ku sawirtaa cabbir buuxa, unugyada naqshadda. Waxa hal unug uu ka dhigan yahay waa dejinta naqshadda **Unugyada**:

1. Taabo {{key:Esc}} si waxba aan loo dooran, tab-ka {{ui:Moodeel}} dhexdiisa.
2. {{ui:Dejinta hadda jirta}} dhexdeeda, dooro {{ui:Unugyada}}: {{ui:Unitless}}, {{ui:Millimeters}}, {{ui:Centimeters}}, {{ui:Meters}}, {{ui:Inches}} ama {{ui:Feet}}.

Dhibcaha waxay qori karaan dherarkooda millimitir, sentimitir, mitir ama kiilomitir iyada oo aan loo eegin unugga naqshadda: eeg [Cabbirrada mm, cm, m ama km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Beddelka unugyada waxba ma cabbirayo. Waxa uu beddelaa sida miisaanka loo akhrinayo xaashiyada iyo daabacaadda, iyo miisaanka la siinayo. Naqshad laga furay DWG ama DXF waxay ilaalisaa unugyada ku kaydsan faylka; qaybta {{ui:Naqshad}} ee dhinaca bidix ayaa tusaysa.

Naqshad {{ui:Unitless}} waxaa loo tixgeliyaa inay tahay unugga warqadda: millimitir warqadaha ISO, inji warqadaha US.

## Fiit iyo inji, iyo jajabyada

Sida dherarka loo qoro oo loo qoro waa dejin gooni ah, qaabka dherarka. Ma beddelo joomitariga, waxa uu beddelaa sida lambarradu u muuqdaan iyo waxa aad qori karto.

1. Taabo {{key:Esc}} si waxba aan loo dooran, tab-ka {{ui:Moodeel}} dhexdiisa.
2. {{ui:Dejinta hadda jirta}} dhexdeeda, dooro {{ui:Qaabka dherarka}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) ama {{ui:Scientific}} (`1.505E+02`).
3. Dooro {{ui:Saxnaanta}}: meelaha tobanka, ama jajabka ugu yar (1/16 waa doorashada caadiga ah ee dhismeedka).

Ama ku qor {{cmd:UNITS}} (`UN`) oo jawaab su'aalahooda labada.

Marka {{ui:Architectural}} ama {{ui:Engineering}} la doorto, hal unug naqshad waa hal inji, sida AutoCAD-ka: dooro {{ui:Unugyada}} {{ui:Inches}} sidoo kale. Markaas waxaad ku qori kartaa dherarka fiit iyo inji meel kasta oo dherar la weydiiyo, iyo sanduuqyada {{ui:Sifooyinka}}:

| Waxaad qortaa | Macnaheedu |
|---|---|
| `12'6"` ama `12'-6"` | 12 fiit 6 inji (150) |
| `12'6-1/2"` | 12 fiit 6½ inji. Isticmaal calaamadda tolka ka hor jajabka: {{key:Space}} waa {{key:Enter}} sadarka amarka. |
| `12'` | 12 fiit |
| `6"` ama `6` | 6 inji: lambar caadi ah waa inji |
| `1/2`, `6-1/2` | jajabyadu waxay shaqeeyaan qaabkasta |

Dhibcuhu waxay qaataan isla dherarka: `@12'6",0` ama `@10'<90`. Xagallada waxay ku sii jiraan darajooyin.

Qaabka waxa uu muuqdaa taariikhda ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: bedadka waa inji laba jibbaaran iyo fiit laba jibbaaran), {{ui:Sifooyinka}} dhexdiisa, kala-xiriirka sadarka xaaladda, iyo **cabbirrada cusub**. Xaashiyadu waxay ilaalisaa unugyada warqadooda (millimitir ama inji) sida tobanaale.

:::note
Qaabka dherarka wuxuu ku kaydsan yahay faylalka DWG iyo DXF, cabbir kasta wuxuu ilaalisaa dejintiisa: naqshad la kaydiyay mar kale wuu furmaa sida aad ka tagtay.
:::

## Cabbirrada warqadda

Xaashiyada iyo daabacaadda moodelka waxay isticmaalaan cabbirradan, mid kasta oo jihooyinkaba:

| Warqadda | Cabbirka | Unugga xaashiga |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimitir |
| ISO A3 | 420 × 297 mm | millimitir |
| ISO A2 | 594 × 420 mm | millimitir |
| ISO A1 | 841 × 594 mm | millimitir |
| ISO A0 | 1189 × 841 mm | millimitir |
| Letter | 11 × 8.5 in | inji |
| Legal | 14 × 8.5 in | inji |
| Tabloid / ANSI B | 17 × 11 in | inji |
| ANSI C | 22 × 17 in | inji |
| ANSI D | 34 × 22 in | inji |
| ARCH C | 24 × 18 in | inji |
| ARCH D | 36 × 24 in | inji |
| ARCH E | 48 × 36 in | inji |

Xaashiyada cusub waxay bilaabmaan ISO A3 naqshadaha metric-ka iyo kuwa aan unug lahayn, iyo Tabloid naqshadaha inji ama fiit. Daabacaadda moodelka waxay bilaabmaan ISO A4 ama Letter isla siyaabaas, kadibna waxay xasuustaan doorashadaada ugu dambeysay. Xaashiyada faylal laga furay waxay ilaalinayaan cabbirkooda, oo lagu tusayo "Custom" marka aanu ahayn mid ka mid ah kuwan.

## Miisaanka

Miisaanka `1:n` wuxuu ka dhigan yahay in hal unug warqadda uu muujinayo n unug oo isla unugga moodelka ah, sidaas darteed 1:100 wuxuu muujinayaa 1 m dhismo sida 10 mm warqad. CadCraft wuxuu xisaabiyaa iyada oo laga eegayo unugyada naqshadda iyo unugga warqadda.

**Miisaannada metric-ka**, la siiyo naqshad kasta: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Miisaannada dhismeedka**, la siiyo marka unugyadu yihiin inji ama fiit: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Miisaannada injineernimada**, la siiyo marka unugyadu yihiin inji ama fiit: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Miisaannadaada gaarka ah.** Ku qor `SCALELISTEDIT` (ama `SCALELIST`) si aad miisaan gaar ah ugu darto, sida 1:75 ama miisaan goob ah oo 2 warqad : 300 naqshad. `Add` wuxuu weydiinayaa magac, kadibna unugyada warqadda iyo unugyada naqshadda (magac sida `1:75` wuxuu siiyaa lambarradiisa; taabo {{key:Enter}} si aad u qaadato). `Edit`, `Delete`, `List` iyo `Reset` waxay shaqeeyaan liistaas isla. `Reset` wuxuu ku celinayaa liiska caadiga ah. Miisaannadaada waxay ka muuqdaan kuwa caadiga ah ka dambeeya liiska miisaanka aragtida ee Sifooyinka iyo wada-hadalka {{ui:Daabac PDF}}; aragtida miisaankaas leh waxay akhrinaysaa magaceeda, waxaana lagu kaydiyaa naqshadda (DWG iyo DXF 2000) sida liiska miisaanka naqshadda. Naqshad laga furay barnaamij kale ayaa soo gelisa liiskeeda; miisaannada ay leedahay oo la mid ah kuwa caadiga ah lama muujiyo laba jeer.

Marka aragti loo jeediyo {{ui:Moodeelka oo dhan muuji}} ama {{ui:Dooro daaqad moodeelka dushiisa…}}, CadCraft wuxuu dooraa miisaanka caadiga ah ee ugu weyn ee ku habboon. {{ui:Moodeelka oo dhan ku habee}} wuxuu dejiyaa miisaan saxda ah oo halkii aan la muujin, kaas oo la akhriyaa sida nisbad caadi ah.

## Cabbirrada warqadda iyo moodelka

Cabbirrada qoraalka iyo dhibcaha waa unugyada meesha aad ku sawirayso.

| Waxaad rabtaa warqadda | Lagu sawiray xaashiga | Lagu sawiray moodelka 1:50 (naqshad mm) | Lagu sawiray moodelka 1/4" = 1'-0" (naqshad inji) |
|---|---|---|---|
| Qoraal 2.5 mm | 2.5 | 125 | — |
| Qoraal 3/32" | 0.09375 | — | 4.5 |

Dhibcaha, cabbirrada hoose ee warqadda u hay, miisaanka guud ({{cmd:DIMSCALE}}) u deji miisaanka daabacaadda: 50 1:50, 48 1/4" = 1'-0". Eeg [Deji cabbirrada dhibcaha](topic:dimension-settings).

## Qor sida miisaanka

Waxaad naqshadda ku sawirtaa cabbir buuxa, CadCraft-na wuxuu sameeyaa xisaabaha kor ku xusan adiga kuu sii.

1. Dooro qoraalka ama dhibcaha ee u baahan inay ilaaliyaan cabbirkooda warqadda. Sifooyinka calaamee {{ui:Sharaxaad}}. {{ui:Cabbirka warqadda}} kadibna wuxuu akhrinayaa, tusaale ahaan, `2.5 mm at 1:50`.
2. Ku qor {{cmd:ANNOSCALE}} iyo miisaanka naqshadda lagu daabici doono, sida `1:100`.

Qoraal kasta iyo dhibic kasta oo sharaxaad ah waa la beddelaa si uu u daabacmo isla cabbirka miisaanka cusub: qoraal 2.5 mm ah wuxuu noqonayaa 125 dherer naqshad millimitir ah oo 1:50 ah, iyo 250 dherer 1:100. Ballaadhka faqraddu isla beddelaa; qoraalka cabbirka, fallaadhaha iyo meelaha bannaan wada beddelmaan (miisaankooda guud). Waa hal tallaabo oo dib loo celin karo, walxaha aan sharaxaad ahayn ma beddelmaan.

Dejintaas waa la kaydiyaa DWG iyo DXF: barnaamijyada kale waxay akhriyaan calaamadda sharaxaadda, CadCraft-na wuxuu sidoo kale ilaalinayaa miisaanka walax kasta loo cabbiray.

Haddii xafiskaagu dejiyo cabbirrada warqadda ee Default Policies add-on-ka (Settings › Global › Default Policies › Annotation sizes on paper), {{cmd:ANNOSCALE}} wuxuu sidoo kale dejinayaa dherarka qoraalka cusub ee xafiiska ee miisaankaas. Eeg [Default Policies](topic:default-policies).

### Hal walax oo miisaano badan

Xaashi badanaa wuxuu muujiyaa isla qorshaha 1:100 iyo qayb ka mid ah 1:50. Qoraallada iyo cabbirrada ku sii labada miisaan oo aragti kasta waxay muujinaysaa cabbirkooda warqadda:

1. Dooro qoraalka sharaxaadda iyo cabbirrada oo ku qor `OBJECTSCALE`.
2. Dooro `Add` oo ku qor miisaanka, tusaale ahaan `1:50`. (`Current scale` wuxuu ku daraa miisaanka sharaxaadda naqshadda; `List` wuxuu muujinayaa waxa walax kasta ilaalinayso; `Delete` wuu ka saaraa mid.)

Aragti oo miisaankeedu ku jiro liiska walax wuxuu muujinayaa cabbirka miisaankaas: qoraal 2.5 mm ah waxa loo sawiraa 250 dherer aragti 1:100 ah iyo 125 dherer aragti 1:50 ah, shaashadda iyo daabacaadda labadaba. Walaxdu waxay sii joogtaa meeshii ay tahay; cabbirka kaliya ayuu kala duwan yahay. Aragti miisaankeedu ku jirin liiska walax wuxuu walaxda ka muujinayaa cabbirka ay leedahay, ilaa aad ku qortid `ANNOALLVISIBLE` oo doorato `OFF`: markaas waa la iska dhaafaa halkaas. {{cmd:ANNOSCALE}} wuxuu cabbiraa walaxda ku liistaa miisaanka cusub, kuwa kalena wuu ka tagaa siduu yahay.

Liisaska waxaa lagu kaydiyaa DWG iyo DXF sida xogta gaarka ah ee CadCraft. Barnaamijyada kale waxay arkaan walax kasta sharaxaad ah, hal miisaan oo ay loo cabbiray. Calaamadda ANNOALLVISIBLE lama kaydiyo faylka.

## Ballaadhyada xariiqyada iyo nooc khadadka

Lakab, ama walax, wuxuu leeyahay **ballaadh xariiq** (0.05 ilaa 2.11 mm) iyo **nooc khadka** (dashed, hidden, center, phantom, dot…). Deji panelka midig: markaad waxba doorato, {{ui:Nooca khadka}} iyo {{ui:Ballaca xariiqda}} hoosta {{ui:Dejinta hadda jirta}} waa kuwa walxaha cusub helaan ({{ui:Sida lakabka}} si ay u raacaan lakabkooda), labadii hoose ee {{ui:Layer …}} waa kuwa lakabka hadda jira. Marka walxo la doortay, labadaas saf iyo {{ui:Miisaanka nooca xariiqda}} waxay beddelaan walxahaas. Amarradu waa {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) iyo {{cmd:LTSCALE}} (`LTS`).

Noocyada khadadka waxay muuqdaan shaashadda iyo daabacaadda. Dhanka khadka waxay ku jiraan unugyada naqshadda: naqshad metric ah waxay isticmaashaa cabbirrada ISO (DASHED: 12.7 mm dhanka), naqshad inji ahna cabbirrada inji (0.5"). Haddii dhanka ay u yaryihiin ama ay u weynaadaan, beddel {{ui:Miisaanka nooca xariiqda}} (LTSCALE) ee naqshadda: dhanka kasta iyo go'ba waa la dhuftaa; miisaanka walax kasta wuu dib u dhufaa. Qaab aad u yar oo aan la arki karin waxaa loo sawiraa sida khad adag.

Ballaadhyada xariiqyada waxay daabacmaan daabacaadda, mm warqadda iyadoo aan loo eegin miisaanka. Xariiqyada leh ballaadhka {{ui:Caadi}} waxay isticmaalaan ballaadhka qalinka laga doortay wada-hadalka {{ui:Daabac PDF}} (0.13 ilaa 0.70 mm; 0.25 mm marka hore); ballaadh 0 wuxuu daabacaa xariiqda ugu khafiifsan. Shaashadda xariiq kasta waa hal pixel ilaa aad riixdo {{ui:LWT}} sadarka xaaladda (ama aad ku qorto {{cmd:LWDISPLAY}}): kadibna ballaadh ka weyn 0.25 mm wuxuu sawiraa mid ballaadhsan (0.5 mm = 2 pixel) moodelka, iyo ballaadhkiisa dhabta ah warqadda xaashiga. Doorashadu waxay ku sii jirtaa browser-kan.
