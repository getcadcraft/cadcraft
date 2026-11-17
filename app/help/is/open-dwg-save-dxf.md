---
title: Opna DWG, breyta henni og vista afrit
summary: Opnaðu teikningu sem einhver sendi þér, athugaðu hvað barst, gerðu breytingu og sendu afrit til baka sem DWG eða DXF.
keywords: dwg, dxf, opna, flytja inn, flytja út, vista, r12, hringferð, ráðgjafi, ytri tilvísun, athuga teikningu, vista sem, vistun dwg, snið
from: 49de4bf6
---

## Það sem þú gerir

Opnaðu DWG-skrá frá ráðgjafa, athugaðu hvað CadCraft gat og gat ekki sýnt, bættu við athugasemd, prentaðu blað í PDF og vistaðu afrit til að senda til baka, sem DWG eða DXF.

## Opna skrána

1. Ýttu á {{key:Mod+O}}, eða smelltu á {{ui:Opna}}.
2. Veldu `.dwg`-skrána.

Stöðulínan sýnir „Les …“ meðan teikningin er lesin. Þegar henni er lokið fyllir teikningin skjáinn og sagan segir til dæmis „Opnaði plan.dwg: 18,240 hlutir á 64 lögum“, ásamt því hversu langan tíma það tók.

:::offline
Þú ert án nettengingar. Ef hnappurinn {{ui:Vista til notkunar án nettengingar}} sýnir „Tilbúið án nettengingar“, opnast DWG-skrár venjulega. Ef ekki, og engin DWG-skrá hefur verið opnuð í þessum flipa enn, getur opnun DWG-skrár mistekist því lesari CadCraft fyrir DWG er sóttur með fyrstu DWG-skránni: opnaðu DXF í staðinn, eða vistaðu CadCraft fyrir notkun án nettengingar næst þegar þú ert nettengd(ur). Sjá [Vinna án nettengingar](common:offline).
:::

## Athugaðu hvað barst

1. Skoðaðu hlutann {{ui:Teikning}} í vinstri glugganum: snið og útgáfu, einingar, fjölda hluta og laga, og blöð.
2. Lestu reitinn „Um þessa skrá“ undir honum, ef hann er til staðar.

Reiturinn telur upp:

- **Ekki enn sýnt:** hluti sem CadCraft getur ekki teiknað enn, eftir gerð og fjölda. Þeir eru skildir eftir, ekki giskað á þá.
- **Uppsetningar (blöð) bárust:** opnaðu þær með flipunum undir teikningunni.
- **Málsetningar sem aðeins var hægt að lesa eins og þær voru teiknaðar.**

3. Smelltu í gegnum flipana undir teikningunni til að sjá hvert blað.
4. Athugaðu {{ui:Einingar}} í {{ui:Núverandi stillingar}} (ekkert valið, flipinn {{ui:Líkan}}). Ef þar stendur {{ui:Án eininga}} en þú veist að teikningin er í millimetrum, stilltu hana, svo að blaðs- og prentmælikvarðar lesist rétt.

:::tip
Ef þú bjóst við hluta teikningarinnar og sérð hann ekki, athugaðu {{ui:Lög}}-gluggann: lagið gæti verið slökkt eða fryst í skránni. Smelltu á heiti þess til að gera það virkt; það kveikir á því.
:::

## Gerðu breytinguna

1. Búðu til lag fyrir athugasemdirnar þínar: smelltu á {{ui:Nýtt lag}}, skrifaðu `NOTES` og ýttu á {{key:Enter}}.
2. Skrifaðu `DT` og ýttu á {{key:Enter}}.
3. Smelltu þar sem athugasemdin á að vera.
4. Sláðu inn textahæð sem hentar teikningunni (sjá [Bæta við texta og merkingum](topic:text)) og ýttu á {{key:Enter}}.
5. Ýttu á {{key:Enter}} til að halda snúningnum í 0.
6. Skrifaðu athugasemdina þína og ýttu á {{key:Enter}}.
7. Ýttu aftur á {{key:Enter}} til að ljúka.

Breytingar á innfluttum málsetningum eru í lagi: um leið og þú breytir einni teiknar CadCraft hana aftur í sínum eigin stíl.

## Prentaðu blað til yfirferðar

1. Smelltu á flipa blaðsins.
2. Ýttu á {{key:Mod+P}}.
3. Smelltu á {{ui:Sækja PDF}}.

Sjá [Prenta í PDF](topic:plot-pdf).

## Vista afrit

1. Ýttu á {{key:Mod+S}}, eða smelltu á {{ui:Vista}}.

Þú opnaðir DWG-skrá, svo vafrinn hleður niður `<name>.dwg`, í þeirri útgáfu sem DWG-skráin kom í. Sagan segir til dæmis „Vistaði afrit sem Plan.dwg (DWG (AutoCAD 2018)).“ og telur upp, í línunum fyrir neðan, allt sem breyttist á leiðinni.

2. Lestu þessar línur áður en þú sendir skrána. [Hvað DWG-skrá geymir og breytir](topic:files#what-a-dwg-keeps-and-changes) útskýrir hverja þeirra.

Upprunalegu DWG-skránni þinni er aldrei breytt. Sérhver vistun er ný niðurhal.

## Vista sem DWG eða DXF

Til að velja sniðið sjálf(ur):

1. Ýttu á {{key:Mod+Shift+S}}, eða smelltu á {{ui:Vista sem}}.

Glugginn {{ui:Vista afrit sem}} opnast með fjórum valkostum, hver með skráarheitinu sem hann gefur: {{ui:DWG}}, með lista sínum {{ui:Útgáfa}}, {{ui:DXF R12}}, {{ui:DXF 2000}} og {{ui:DXF 2000 (binary)}}. Núverandi snið og útgáfa teikningarinnar eru þegar valin.

2. Smelltu á sniðið sem þú vilt. Fyrir DWG skaltu velja útgáfuna sem hin skrifstofan notar, eða eldri: AutoCAD 2018, 2013, 2010, 2007, 2004 eða 2000.
3. Smelltu á {{ui:Vista}}.

Afritið hleðst niður. Frá og með þessu vistar {{key:Mod+S}} þessa teikningu á því sniði, og nýjar teikningar byrja líka með því, í þessum vafra. {{ui:Hætta við}} eða {{key:Esc}} vistar ekkert, og sagan segir „Ekki vistað.“

Hvaða á að velja:

- **DWG** geymir mest: blöð með gluggum sínum, raunverulegar málsetningar, skyggingarmynstur, lag- og blokkarheiti eins og þú slóst þau inn, og fjöllínu texta sem fjöllínu texta. AutoCAD 2000-útgáfan opnast í flestum forritum; 2004 og nýrri geyma einnig sanna liti.
- **DXF 2000** er textaskrá sem geymir nánast það sem DWG geymir: sérhvert blað sem uppsetningu með gluggum sínum, raunverulegar málsetningar, skyggingarmynstur, sanna liti, línuþykktir, línugerðir og heiti eins og þú slóst þau inn. Hún opnast í AutoCAD 2000 og nýrri og flestum CAD-forritum. Fjölleiðarvísar verða að þeim línum, örvaoddum og texta sem þeir teikna. DXF-skrá sem opnuð er í útgáfu 2000 eða nýrri vistast sem DXF 2000.
- **DXF 2000 (binary)** geymir sama efni og DXF 2000 í tvíundarformi sniðsins: minni skrá sem geymir sérhverja tölu nákvæmlega. Tvíundar-DXF-skrár úr öðrum forritum opnast eins og textaskrár, og teikning sem opnuð er úr tvíundar-DXF vistast aftur sem tvíundarskrá.
- **DXF R12** opnast í nánast hvaða CAD-forriti sem er. Það geymir fyrsta blaðið með gluggum sínum, og önnur blöð CadCraft. Það einfaldar nýrri hluti, svo sem fjöllínu texta og skyggingar.

## Það sem hin skrifstofan sér

Í DWG:

- Línur, bogar, hringir, sporbaugar, fjöllínur, texti, fjöllínu texti, blokkir með eigindum sínum, heilfyllingar, skyggingarmynstur og lög eins og þú sérð þau.
- Raunverulegar málsetningar: hitt forritið mælir þær aftur þegar þær eru teygðar.
- Sérhvert blað, með pappír sínum og gluggum.
- Fjölleiðarvísar sem fjölleiðarvísar. Í AutoCAD 2000-útgáfunni verða sannir litir að næsta staðallit.

Í DXF R12:

- Línur, bogar, hringir, fjöllínur, texti, blokkartilvísanir og málsetningar eins og þú sérð þau. Málsetningar haldast raunverulegar málsetningar.
- Heiti laga með hástöfum, og bil breytt í `_`.
- Fyrsta blaðið sem pappírsrými teikningarinnar, með gluggum sínum. Frekari blöð berast sem blokkir sem heita `CCLAYOUT_1` og svo framvegis; ef þau þurfa hvert blað sem uppsetningu, prentaðu PDF af hverju blaði fyrir þau líka.
- Fjöllínu texti sem aðskildar línur, sporbaugar sem fjöllínur, skyggingar sem útlínur.

Hvort sem er, það sem er skráð sem „Ekki enn sýnt“ þegar þú opnaðir DWG-skrána er **ekki** í afritinu, nema sagan segi að það hafi verið varðveitt: OLE-hlutir DWG-skrár og 3D-föst efni í líkanrými eru skrifuð aftur þegar þú vistar sem DWG. Segðu þeim það, og sendu PDF-skjal líka.

## Algeng mistök

- **„CadCraft opnar DWG- og DXF-teikningar.“** Skráin er með annarri endingu. Athugaðu að hún sé `.dwg` eða `.dxf`.
- **„Ekki tókst að lesa þessa teikningu.“** DWG-skráin er skemmd eða í útgáfu sem lesarinn ræður ekki við. Biddu um DXF, eða DWG-skrá vistaða í eldri útgáfu.
- **„Þessi tvíundar-DXF endar í miðjum hlut.“** Skráin er stytt eða skemmd. Skrifaðu RECOVER til að opna það sem hægt er að lesa, eða biddu um skrána aftur.
- **Vistaða skráin heitir `name (1).dwg` eða `name (1).dxf`.** Vafrinn gerir það þegar skrá með sama heiti er þegar í möppunni.
- **Þau eru með eldra forrit sem getur ekki opnað DWG-skrána.** Vistaðu sem DWG með {{ui:Útgáfa}} {{ui:AutoCAD 2000}}, eða sem {{ui:DXF R12}}: nánast hvaða CAD-forrit sem er opnar hana.
- **Hlutar teikningarinnar vantar.** Tengdar teikningar (xrefs) hlaðast ekki fyrr en þú velur skrár þeirra ({{cmd:XREF}}, `R`), og myndir birtast sem rammar með skráarheitum sínum.
