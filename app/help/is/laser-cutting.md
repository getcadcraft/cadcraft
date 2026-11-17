---
title: Senda teikningu í leysi
summary: Opnaðu Leysispjaldið, veldu hvað hvert lag gerir (skurð, rispun, grafun, fyllingu, mynd), forskoðaðu hreyfingar hauss, vistaðu GRBL-leysi G-kóða, eða sendu hann úr vafranum eftir að hafa rammað verkið.
keywords: leysir, leysiskurður, leysigrafari, GRBL, G-kóði, gcode, grafa, fylling, punktun, myndagröftur, rispa, skera, Web Serial, ramma verkið, afl, hraði, umferðir, LASER, LASERCUT, CNC
from: 72b56db0
---

{{ui:Leysir}}-spjaldið breytir lögum teikningar í forrit fyrir leysi sem keyrir GRBL (flestir áhugamanna- og smáverkstæðis díóðu- og CO2-stýringar). Skrifaðu `LASER` (eða `LASERCUT`) og ýttu á {{key:Enter}}, eða veldu {{ui:Leysir…}} í {{ui:Meira}}-valmyndinni í hópnum {{ui:Sýn}}. Í borðastílum er það í valmyndinni {{ui:Skrá}} og við hliðina á {{ui:Prenta}}. Spjaldið opnast yfir teikningunni og er opið meðan þú teiknar: forskoðunin fylgir hverri breytingu.

:::warning
Prófaðu allar stillingar á afgangsefni fyrst, notaðu hlífðargleraugu sem passa við leysinn, hafðu lokið lokað þar sem það er, og láttu aldrei kveikt leysi eftir eitt. Tölurnar sem lag byrjar með eru bráðabirgðatölur, ekki tillögur fyrir neitt efni.
:::

## Hvað er sent

Spjaldið les líkanið (ekki blöðin), á lögum sem eru kveikt og ekki fryst:

- Línur, bogar, hringir, fjöllínur (bogabútar haldast bogar), sporbaugar og splænur. Form sem endar þar sem það byrjar telst lokað.
- Blokkir eru teknar í sundur: hlutur á lagi 0 inni í blokk fer með lagi blokkartilvísunarinnar.
- Skygging sendir mörk sín, þannig að skyggt merki á **Fylling**-lagi er fyllt.
- Mynd (`IMAGEATTACH`) er grafin á lagi sem er stillt á **Grafa mynd**, þegar hún liggur ferköntuð (ekki snúin eða skálhallandi) og skráin hennar er opin í CadCraft.
- Texti, málsetningar, leiðarar, punktar og byggingarlínur eru ekki sendar; spjaldið segir hversu margir voru skildir eftir. Til að brenna texta skaltu teikna stafina sem form eða skyggja þá.

Stærðir fara út í millimetrum frá einingum teikningarinnar (`UNITS`): teikning í tommum er margfölduð með 25,4. Teikning án stilltra eininga er send þannig að ein eining verður einn millimetri. Hakaðu við {{ui:Aðeins valdir hlutir}} til að senda hluta teikningarinnar.

## Veldu hvað hvert lag gerir

Sérhvert lag sem hefur eitthvað á sér er röð. {{ui:Gerir}} stillir það á **Skera**, **Rispa**, **Grafa línur**, **Fylla form**, **Grafa mynd** eða **Ekki sent**, með {{ui:Afl %}}, {{ui:Hraði mm/mín}} og fjölda {{ui:Umferðir}}. Sérhver breyting er eitt skref í afturköllun og er vistuð í teikningunni: DWG (sérhver útgáfa sem CadCraft vistar) og DXF geyma stillingarnar, þannig að teikningin opnast með þeim næst. Önnur forrit opna skrána eins og áður; þau sjá eina ónotaða blokk sem heitir CADCRAFT_LASER (hreinsun hennar þar fjarlægir stillingarnar).

- **Fylling** brennir innan í lokuðum formum með línum, {{ui:Línubil}} hver frá annarri, í {{ui:Horn}}, í báðar áttir eða eina, með yfirskurði svo hausinn sé kominn á hraða þegar leysirinn kviknar; krosskyggnun bætir við annarri umferð í 90°. Form með gati helst opið við gatið.
- **Grafa mynd** breytir mynd í punkta (Floyd–Steinberg, Atkinson, raðað, eða hrein svart og hvít við þröskuld) eða, með *Gráskölum*, í breytilegt afl.
- Röð: myndir og fyllingar fyrst, síðan grafun lína, síðan rispur, síðan skurðir, svo að hluti sem er skorinn út hreyfist ekki meðan hann er grafinn. Innan eins lags fara leiðirnar **innst fyrst** (gat áður en plata sem það er í), næsta fyrst.

## Forskoðun, síðan vistun

Forskoðunin sýnir hvað hausinn gerir: brennandi línur í lit, hraðar hreyfingar í gráu, og grænan kassa utan um allt sem brennur. Fyrir neðan er stærðin, lengd brunans og tímaáætlun (án hröðunar; raunvél tekur lengri tíma). {{ui:Vista G-kóða…}} skrifar GRBL-leysi G-kóða með `$32=1`, `M4` (eða `M3`) með S-gildum, `G0` og `G1` hreyfingum, og `M5` í lokin. X0 Y0 er neðra vinstra horn verksins nema þú veljir uppruna teikningarinnar: stilltu vinnunúll vélarinnar þar.

## Senda úr vafranum

Í Chrome og Edge biður {{ui:Tengjast…}} þig um USB-tengi leysisins. Ekkert tengist eða sendist fyrr en þú ýtir á hnapp. Ýttu fyrst á {{ui:Ramma verkið}}: hausinn rekur kassa verksins með leysinn **slökktan** (eða á lágu afli sem þú stillir fyrir bendil), svo þú sjáir hvar hann mun brenna. Fyrst þá kviknar á {{ui:Senda verk}}, og hann slokknar aftur ef þú breytir einhverju. {{ui:Hlé}} heldur hausnum, {{ui:Stöðva}} heldur honum líka, endurstillir stýringuna (leysirinn slokknar) og sendir `M5`. Þar sem Web Serial vantar (Firefox, Safari og CadCraft Studio, sem hefur ekki Web Serial ennþá) býður spjaldið aðeins upp á vistun: vistaðu G-kóðann og sendu hann með eigin forriti leysisins.

## Ekki smíðað ennþá

Ekki smíðað ennþá: snið annarra stýringa (Ruida, Marlin-leysar, sértæk skrár framleiðenda), brýr og innleiðslur, skurðbreiddarjöfnun, efnissöfn, snúningsás og Z-ás, myndajöfnun, texti sem útlínur.
