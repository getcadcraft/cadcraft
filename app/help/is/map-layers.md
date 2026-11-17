---
title: Kortlög undir teikningunni
summary: Sýndu götukort, loftmyndir eða mynd með heimsskrá undir líkanrýminu, staðsett eftir hnitakerfi teikningarinnar.
keywords: kort, kortlög, maplayers, ml, geomap, grunnkort, loftmynd, gervihnöttur, flísar, xyz, wms, wmts, kortaþjónusta, heimsskrá, hnitakerfi, epsg, state plane, utm, landfræðileg staðsetning, lóðarskipulag, staðsetning, landfræðigögn, vistað, dwg, dxf
from: f103045f
---

## Hvað þú býrð til

Lóðarskipulag teiknað yfir loftmynd eða götukorti, hvort á sínum stað.

## Segðu CadCraft hvar teikningin er

1. Stilltu einingar teikningarinnar í {{ui:Eiginleikar}} › {{ui:Einingar}} (til dæmis fet eða metrar).
2. Skrifaðu {{cmd:MAPLAYERS}} (eða `ML`) og ýttu á {{key:Enter}}.
3. Undir {{ui:Hvar teikningin er}}, skrifaðu heiti eða EPSG-kóða í {{ui:Finna kerfi}} (til dæmis `2277` eða `Texas Central`) og veldu það í {{ui:Kerfi}}.
4. Ef teikningin er teiknuð í hnitum þess kerfis, skildu staðsetninguna eftir á 0. Ef ekki, gefðu einn punkt teikningarinnar ({{ui:Teikning X}}, {{ui:Teikning Y}}), hvar sá punktur er á kortanetinu ({{ui:Austur}}, {{ui:Norður}}), og hversu langt teikningin er snúin frá austri ({{ui:Snúið (°)}}).
5. Smelltu á {{ui:Nota þetta kerfi}}.

## Bæta við lagi

1. Kveiktu á {{ui:Kortlög af netinu}} efst í glugganum. Þar til þá er ekkert beðið um neinn þjón; þegar hann er á sjá þjónarnir sem þú bætir við skjásvæðið og IP-tölu þína, aldrei teikninguna þína.
2. Í {{ui:Bæta við lagi}}, veldu hvaðan það kemur:
   - **Flísar (XYZ)**: flísaslóð með `{z}`, `{x}` og `{y}`, heiti og heimildarvísunina sem veitandinn krefst.
   - **WMS**, **WMTS** eða **ArcGIS**: vistfang þjónustunnar, síðan {{ui:Sækja lög}} og veldu eitt.
   - **Mynd**: PNG- eða JPEG-mynd með heimsskrá sinni (og `.prj` ef hún er til).
3. Lagið birtist undir teikningunni. Heimildarvísun þess birtist neðst hægra megin á teikningunni.

Hvert lag í listanum er hægt að fela, gera meira eða minna gegnsætt, færa upp eða niður, eða fjarlægja.

Hver breyting á kerfinu eða lögunum er eitt skref í {{cmd:UNDO}}.

## Vistað með teikningunni

Hnitakerfið og listi laganna eru vistuð í teikningunni þegar þú vistar hana sem DWG eða DXF, og koma aftur þegar þú opnar hana, á hvaða tölvu sem er. Myndir úr skrám eru ekki vistaðar: bættu þeim við aftur eftir opnun. Rofinn {{ui:Kortlög af netinu}} er ekki vistaður í teikningunni: hann tilheyrir þessum vafra, svo teikning sem einhver sendir þér biður engan þjón um neitt fyrr en þú kveikir á honum sjálfur.

Það sem önnur forrit sjá:

| Vistað sem | Staðsetning teikningarinnar | Kortlögin |
|---|---|---|
| DWG 2010, 2013 eða 2018, DXF 2000 | Skrifuð á venjulegan hátt, eins og forrit lesa landfræðilega staðsetningu teikningar: EPSG-kóði kerfisins, einn punktur teikningarinnar og hvar hann er á kortanetinu, einingarnar og norður. | Aðeins CadCraft |
| DWG 2000, 2004 eða 2007, DXF R12 | Aðeins CadCraft (CadCraft segir frá því þegar þú vistar) | Aðeins CadCraft |

- **Prófað:** ODA File Converter les staðsetninguna án villna, og DXF-bókasafnið ezdxf les EPSG-kóðann og staðsetninguna nákvæmlega.
- **Ekki prófað enn:** hvort önnur teiknforrit þekki kerfið af EPSG-kóðanum þess. Forrit sem heldur sinn eigin lista yfir kerfi undir öðrum heitum gæti sýnt teikninguna án staðsetningar.
- Önnur forrit sýna blokk sem heitir `CADCRAFT_GEO` í blokkalistanum. Það er eigið afrit CadCraft af kerfinu og lögunum; hún er aldrei sett inn í teikninguna. Láttu hana vera þar.

## Teikningar frá öðrum forritum

Þegar teikning frá öðru forriti hefur landfræðilega staðsetningu les CadCraft hana:

- Ef hún nefnir EPSG-kóða sýnir {{ui:Hvar teikningin er}} það kerfi, og kortlögin eru staðsett eftir því.
- Ef CadCraft þekkir ekki kerfið (heiti annars forrits á því, staðbundið net eða mælikvarðaþáttur), er staðsetningin ekki notuð, en hún er geymd og vistuð aftur eins og hún var, svo hitt forritið finnur hana áfram. Veldu kerfi í {{ui:Hvar teikningin er}} til að skipta henni út.

:::note
Kortlög eru aðeins teiknuð á skjáinn: þau prentast ekki. Notaðu aðeins kortaþjónustur sem skilmálar þeirra leyfa, og haltu heimildarvísuninni sýnilegri.
:::
