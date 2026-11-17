---
title: Veggjaform, skurðir, hliðranir og læsingar fyrir 2D-veggi
summary: Teiknaðu veggi sem rétthyrninga, marghyrninga og boga, skiptu þeim og tengdu aftur, færðu þá um vídd, og læstu einum vegg við annan eða við ristarlínu. Sömu verkfæri og veggir í BimCraft.
keywords: veggur, veggjastika, veggjahnappar, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, tengingarstíll, skáskurður, flatur, skera, lás, handfang, draga enda, snúa, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, tenging, banna tengingu, læsing, ristarlína, skipta, bil, hliðra, staðsetningarlína
from: f41e7433
---

Þessi verkfæri vinna á 2D-veggjunum frá `WALL` (sjá „Teikna snjalla veggi, hurðir og glugga í 2D"). Þau nota sömu reglur og veggjaverkfærin í BimCraft, svo veggur hegðar sér eins í báðum.

## Hvar verkfærin eru

- Á tækjastikunni er hópurinn {{ui:Walls}} með {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} og {{ui:Offset}}. Valmyndin {{ui:More}} hefur öll hin veggverkfærin, hvert með sínu tákni.
- Í valmyndarborðinu hefur flipinn {{ui:Walls}} spjöldin {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} og {{ui:Join}}.
- Í skipulagi sýna línur tækjastikunnar og verkfærakassinn sama hópinn {{ui:Walls}}.
- Þú getur líka skrifað hvaða skipun sem er nefnd hér að neðan.

## Tengingar eru geymdar

Þegar endi veggs lendir á öðrum vegg vistar CadCraft þá tengingu með báðum veggjum. Það reiknar tengingarnar ekki lengur út aftur frá því hvar endarnir eru hverju sinni. Því:

- Veggir sem tengdir eru við vegg sem þú færir fylgja honum og haldast tengdir. Endar þeirra renna eftir eigin línum, svo ekkert snýst.
- Dragðu annan endann á vegg með handfangi hans og veggurinn sem tengdur er þar heldur líka stefnu sinni. Endi hans rennur eftir eigin línu þar til hann mætir dregna veggnum, þannig að dregni endinn lendir á þeirri línu, ekki alltaf undir bendlinum. Forskoðunin sýnir hvar. Veggur sem rekst á dregna vegginn fylgir eftir eigin línu. Að draga endann beint eftir veggnum breytir lengd hans, og veggurinn sem tengdur er þar færist með honum.
- `ROTATE` á tengdum vegg virkar eins: endar nágrannanna renna eftir eigin línum að snúna veggnum.
- Til að færa horn velurðu báða veggina sem mætast þar og dregur handfangið á horninu. Báðir veggirnir haldast í horninu og báðir snúast. Veggir lengra inni haldast eins og þeir voru.
- Haltu {{key:Alt}} þegar þú smellir á nýja stað handfangsins til að rjúfa tengingarnar viljandi: veggurinn fer þangað sem þú settir hann og ekkert fylgir.
- Ef drag myndi snúa tengdum vegg aftur í gegnum eigin fjarenda sinn, er því hafnað og ekkert breytist.
- Veggur sem þú teiknar með {{ui:Disallow joins}} (`D` í `WALL`), eða slekkur á í Eiginleikum ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), er laus við þann enda, jafnvel þótt hann snerti annan vegg, þar til þú leyfir það aftur.
- `WALLDISJOIN` ({{ui:Disallow join}} í hópnum {{ui:Walls}}) gerir það sama með einum smelli: smelltu á vegg nálægt öðrum endanum til að banna tengingar þar, og smelltu aftur til að leyfa þær.
- Eldri teikning hefur ekki vistaðar tengingar enn. Fyrsta breyting sem þú gerir finnur þær einu sinni, út frá því hvernig veggirnir stóðu fyrir breytinguna, og vistar þær. `WALLJOINS` gerir það strax.
- DWG- og DXF-skrár bera tengingarnar inni í hverjum vegg. CadCraft les þær til baka eins og þær voru vistaðar. Forrit sem geymir engin viðbótargögn sýnir veggina sem venjulegar blokkir og sleppir tengingunum, og tenging sem veggirnir voru færðir til í öðru forriti er felld niður næst þegar þú breytir öðrum hvorum veggnum.

## Tengingarstíll hornsins

Horn þar sem tveir veggir mætast enda í enda er teiknað sem skáskurður nema þú veljir annan stíl.

- `WALLJOINSTYLE` ({{ui:Join style}} í hópnum {{ui:Walls}}): smelltu á hornið. Hver smellur fer í næsta stíl: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, og síðan aftur {{ui:Mitre}}. Skrifaðu `T` til að skipta um hvor tveggja veggja gengur í gegnum hornið sem þú smelltir síðast á. Ýttu á {{key:Enter}} til að ljúka. Ein keyrsla skipunarinnar er eitt skref sem hægt er að afturkalla.
- {{ui:Butt}}: annar veggurinn gengur í gegn að ytri fleti hins, og hinn stoppar við hlið hans. {{ui:Square off}}: það sama, en veggurinn sem gengur í gegn endar hornrétt á sjálfan sig. Í rétt horni líta þeir eins út.
- Í Eiginleikum veggs: {{ui:Join style at start}}, {{ui:Join style at end}}, og {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- Stíllinn er vistaður með báðum veggjum og fylgir DWG- og DXF-skrám. Afrit af vegg byrjar án hans.
- T-tenging hefur engan stíl til að velja: veggurinn sem hliðin er mætt gengur í gegn. Horn þar sem þrír eða fleiri veggir mætast er áfram skáskurður. Það sama gildir um mjög skarpt horn (undir u.þ.b. 30 gráðum) og tvo veggi í einni línu.

## Teikna veggjaform

Hvert þeirra býr til veggina í einu skrefi sem hægt er að afturkalla, með tengdum hornum. Í `WALL` setur `O` hliðrun (hversu langt til vinstri frá smellunum veggurinn fer) og `D` slekkur á tengingu fyrir þá veggi sem þú teiknar næst.

- `WALLRECT` (`WR`): tvö gagnstæð horn, eins og `RECTANG`.
- `WALLROT`: fyrsta hliðin, síðan hversu langt hin hliðin fer út, fyrir rétthyrning í hvaða horni sem er.
- `WALLPOLY` (`WP`): fjöldi hliða (3 til 64), miðjan, `I` fyrir innritaðan eða `C` fyrir umritaðan, og síðan radíusinn, eins og `POLYGON`.
- `WALLARC` (`WARC`): miðja, upphaf, endir. `D` snýr boganum hina leiðina.
- `WALLTAN`: smelltu nálægt enda veggs, síðan á endann á boganum, sem fer út meðfram þeim vegg.
- `WALLPICK`: smelltu á línu eða fjöllínu og segðu hvort taka eigi líka línurnar sem tengdar eru við hana.
- `WALLTRACE`: smelltu inni í lokuðu svæði línna og veggja til að setja veggi umhverfis það minnsta.

Veggir á grunnmynd eru beinir, svo bogi er teiknaður sem stuttir beinir veggir, 15 gráður hver. Þeir tengjast eins og hvert annað horn.

## Skera veggi

- `WALLSPLIT` (`WS`): smelltu á vegginn, síðan á punktinn. `C` sker þar sem annar veggur þverar hann, `G` skilur eftir bil milli hlutanna, `F` gerir skurðendana frjálsa í stað tengdra. Fyrri hlutinn heldur stað veggsins í teikningunni, og hurðir og gluggar fylgja sínum hluta. Skurður í gegnum hurð eða glugga er hafnaður.
- `WALLSPLITGAP` ({{ui:Split with gap}}): sama skipting, en spyr fyrst um bilið.
- `WALLDELSEG`: smelltu á vegginn, síðan á endana tvo á bútnum sem á að eyða.
- `WALLREJOIN`: smelltu á tvo hluta sama veggjar til að gera þá aftur að einum.

## Færa veggi um vegalengd

- `WALLDIM`: smelltu á línulega eða jafnstillta vídd sem liggur frá einum vegg til annars, og skrifaðu síðan nýja gildið. Veggurinn við fjarlægari endann færist hornrétt á sjálfan sig, veggurinn við fyrri endann helst, og veggirnir sem tengdir eru við hann fylgja.
- `WALLOFFSET` (`WO`): smelltu á vegg, síðan á þá hlið sem hann á að færa á (`D` skrifar fjarlægð, `C` býr til afrit í staðinn).
- `WALLSTRETCH`: gluggi umhverfis vegendana, síðan grunnpunktur og annar punktur.
- Í Eiginleikum heldur skrifuð {{ui:Length}} upphafinu og tekur með sér vegginn sem tengdur er við fjarendann, og ný {{ui:Thickness}} vex frá þeirri {{ui:Staðsetningarlína}} sem þú valdir (vinstri flötinn, hægri flötinn eða miðjuna).

## Læsa veggjum

Læsing helst með veggnum í skránni. Ef þú færir einn læstan vegg fylgir hinn. Ef ein breyting færir báða veggina ólíkt er henni hafnað og ekkert breytist.

- `WALLHOLD`: læsir vegg við annan vegg. `A` færir hann fyrst á línu hins veggsins, `K` heldur fjarlægðinni sem hann hefur.
- `WALLHOLDDIM`: læsir fjarlægðina milli tveggja samsíða veggja.
- `WALLGRID`: læsir vegg við ristarlínu (línu á rist-lagi með merki sínu sem texta við annan endann), annaðhvort eftir henni eða með öðrum endanum á henni. Veggur læstur eftir línunni heldur fjarlægðinni sem hann hefur frá henni. Færðu ristarlínuna með `GRIDMOVE` og veggurinn fylgir í heild, ásamt tengdum veggjum sínum. Veggur sem liggur eftir ristarlínu færist í heild með henni jafnvel án læsingar, og veggur sem aðeins endar á línunni teygist við þann enda.
- `WALLHOLDS` listar læsingarnar. `WALLUNHOLD` tekur læsingar af vegg.
- Hver læsing sýnir lítinn lás á grunnmyndinni: við hlið miðju læsta veggsins, eða við hlið þess enda sem er læstur við ristarlínu. Smelltu á lás til að taka þá læsingu af.

## Það sem er ekki komið enn

Læsingar nota miðlínur veggjanna. Veggir hér hafa engin lög, svo engin lagaröð er við samskeyti, og veggirnir beygjast ekki (sjá boga hér fyrir ofan). Enginn hefur prófað þessi verkfæri á stórri teikningu, og þau hafa ekki verið athuguð í öðru CAD-forriti.
