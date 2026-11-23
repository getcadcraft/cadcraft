---
title: Veggjaform, skurðir, hliðranir og læsingar fyrir tvívíða veggi
summary: Teiknaðu veggi sem rétthyrninga, marghyrninga og boga, skerðu þá og tengdu aftur, færðu þá eftir málsetningu, og læstu einum vegg við annan eða við ristarlínu. Sömu verkfæri og veggir BimCraft hafa.
keywords: veggur, veggjastika, veggjahnappar, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, tengingarstíll, skáskurður, flatur, skera, lás, grip, draga enda, snúa, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, tenging, banna tengingu, læsa, ristarlína, skipta, bil, hliðra, staðsetningarlína
from: 49044181
---

Þessi verkfæri vinna á tvívíðu veggjunum frá `WALL` (sjá „Teikna snjalla veggi, hurðir og glugga í 2D“). Þau nota sömu reglur og veggjaverkfærin í BimCraft, svo veggur hegðar sér eins í báðum.

## Hvar verkfærin eru

- Á tækjastikunni hefur hópurinn {{ui:Veggir}} {{ui:Veggur}}, {{ui:Rétthyrningur}}, {{ui:Skipta}} og {{ui:Hliðra}}. Valmyndin {{ui:Meira}} hans hefur öll hin veggjaverkfærin, hvert með sínu tákni.
- Í borðastílum valmyndarinnar hefur flipinn {{ui:Veggir}} spjöldin {{ui:Teikna veggi}}, {{ui:Skurður}}, {{ui:Stilla og breyta}}, {{ui:Halda}} og {{ui:Tenging}}.
- Í útliti sýna verkfæraraðirnar og verkfærakassinn sama hópinn {{ui:Veggir}}.
- Þú getur líka skrifað hvaða skipun sem er sem nefnd er hér að neðan.

## Tengingar eru vistaðar

Þegar endi veggs lendir á öðrum vegg vistar CadCraft þá tengingu með báðum veggjum. Það reiknar ekki lengur út tengingar út frá því hvar endarnir lenda af tilviljun. Því:

- Veggir sem tengdir eru vegg sem þú færir fylgja honum og haldast tengdir. Endar þeirra renna eftir eigin línum, svo ekkert snýst.
- Dragðu annan enda veggs með gripinu og veggurinn sem tengdur er þar heldur sinni stefnu líka. Endi hans rennur eftir eigin línu til að mæta draginn veggnum, svo dregni endinn lendir á þeirri línu, ekki alltaf undir bendlinum. Forskoðunin sýnir hvar. Veggur sem rekst á draginn vegginn fylgir eftir eigin línu. Að draga endann beint eftir veggnum breytir lengd hans, og veggurinn sem tengdur er þar færist með honum.
- `ROTATE` á tengdum vegg virkar eins: endar nágrannanna renna eftir eigin línum að snúna veggnum.
- Til að færa horn skaltu velja báða veggina sem mætast þar og draga gripið á horninu. Báðir veggirnir haldast á horninu og báðir snúast. Veggir lengra frá haldast eins og þeir voru.
- Haltu {{key:Alt}} niðri þegar þú smellir á nýja stað gripsins til að rjúfa tengingarnar viljandi: veggurinn fer þangað sem þú settir hann og ekkert fylgir.
- Ef drag myndi snúa tengdum vegg til baka í gegnum sinn fjarlæga enda er því hafnað og ekkert breytist.
- Veggur sem þú teiknar með {{ui:Banna tengingu}} (`D` í `WALL`), eða slekkur á í Eiginleikum ({{ui:Ekki tengja í upphafi}}, {{ui:Ekki tengja í enda}}), er frjáls við þann enda, líka þótt hann snerti annan vegg, þar til þú leyfir það aftur.
- `WALLDISJOIN` ({{ui:Banna tengingu}} í hópnum {{ui:Veggir}}) gerir það sama með smelli: smelltu á vegg nálægt öðrum enda til að banna tengingar þar, og smelltu aftur til að leyfa þær.
- Eldri teikning hefur enn engar vistaðar tengingar. Fyrsta breytingin sem þú gerir finnur þær einu sinni, út frá því hvernig veggirnir stóðu fyrir breytinguna, og vistar þær. `WALLJOINS` gerir það strax.
- DWG- og DXF-skrár bera tengingarnar inni í hverjum vegg. CadCraft les þær aftur eins og þær voru vistaðar. Forrit sem geymir engin viðbótargögn sýnir veggina sem venjulegar blokkir og sleppir tengingunum, og tenging sem veggir voru færðir í öðru forriti er felld niður næst þegar þú breytir öðrum hvorum veggnum.

## Tengingarstíll horns

Horn þar sem tveir veggir mætast enda við enda er teiknað sem skáskurður nema þú veljir annan stíl.

- `WALLJOINSTYLE` ({{ui:Tengingarstíll}} í hópnum {{ui:Veggir}}): smelltu á hornið. Hver smellur fer í næsta stíl: {{ui:Skáskurður}}, {{ui:Flatur}}, {{ui:Skera}}, og svo {{ui:Skáskurður}} aftur. Skrifaðu `T` til að skipta um hvor veggurinn gengur í gegnum hornið sem þú smelltir síðast á. Ýttu á {{key:Enter}} til að ljúka. Ein keyrsla skipunarinnar er eitt afturkallsskref.
- {{ui:Flatur}}: annar veggurinn gengur í gegnum að fjarlægu hlið hins, og hinn stoppar við hlið hans. {{ui:Skera}}: það sama, en veggurinn sem gengur í gegn endar hornrétt á sjálfan sig. Í rétt horni líta þeir eins út.
- Í Eiginleikum veggs: {{ui:Tengingarstíll við upphaf}}, {{ui:Tengingarstíll við enda}}, og {{ui:Liggur í gegn við upphaf}}, {{ui:Liggur í gegn við enda}}.
- Stíllinn er vistaður með báðum veggjunum og ferðast í DWG- og DXF-skrám. Afrit af vegg byrjar án hans.
- T-tenging hefur ekki stíl til að velja: veggurinn sem hliðin er mætt gengur í gegn. Horn þar sem þrír eða fleiri veggir mætast er áfram skáskurður. Það sama gildir um mjög skarpt horn (undir um 30 gráðum) og tvo veggi á einni línu.

## Teiknaðu veggjaform

Hvert þeirra býr til veggina í einu afturkallsskrefi, með hornunum tengdum. Í `WALL` setur `O` hliðrun staðsetningar (hversu langt til vinstri við smelli þína veggurinn fer), og `D` slekkur á tengingu fyrir veggina sem þú teiknar næst.

- `WALLRECT` (`WR`): tvö gagnstæð horn, eins og `RECTANG`.
- `WALLROT`: fyrsta hliðin, síðan hversu langt hin hliðin fer út, fyrir rétthyrning í hvaða horni sem er.
- `WALLPOLY` (`WP`): fjöldi hliða (3 til 64), miðjan, `I` fyrir innritaðan eða `C` fyrir umritaðan, síðan radíusinn, eins og `POLYGON`: smelltu á hann, eða skrifaðu hann (slegið inn radíus stefnir að bendlinum, eða eftir X þegar bendillinn er enn á miðjunni).
- `WALLARC` (`WARC`): miðja, upphaf, endir. `D` snýr boganum hina leiðina.
- `WALLTAN`: smelltu nálægt enda veggs, síðan á endapunkt bogans, sem fer frá honum eftir veggnum.
- `WALLPICK`: smelltu á línu eða fjöllínu og segðu hvort taka skuli línurnar sem tengdar eru henni líka.
- `WALLTRACE`: smelltu inni í lokuðu svæði lína og veggja til að setja veggi umhverfis það minnsta.

Veggir í grunnmynd eru beinir, svo bogi er teiknaður sem stuttir beinir veggir með 15 gráðum hver. Þeir tengjast eins og hvert annað horn.

## Skerðu veggi

- `WALLSPLIT` (`WS`): smelltu á vegginn, síðan á punktinn. `C` sker þar sem annar veggur sker hann, `G` skilur eftir bil milli hlutanna, `F` gerir skurðendana frjálsa í stað tengdra. Fyrsti hlutinn heldur stað veggsins í teikningunni, og hurðir og gluggar fara með sínum hluta. Skurður í gegnum hurð eða glugga er hafnaður.
- `WALLSPLITGAP` ({{ui:Skipta með bili}}): sama skipting, en spyr fyrst um bilið.
- `WALLDELSEG`: smelltu á vegginn, síðan á tvo enda bútsins sem á að eyða.
- `WALLREJOIN`: smelltu á tvo hluta sama veggs til að gera þá aftur að einum vegg.

## Færðu veggi eftir fjarlægð

- `WALLDIM` ({{ui:Breyta eftir málsetningu}}): smelltu á lárétta eða skáhalla málsetningu sem liggur frá einum vegg til annars, og sláðu síðan inn nýja gildið. Veggurinn við fjarlægari endann færist hornrétt á sjálfan sig, veggurinn við fyrsta endann helst, og veggirnir sem tengdir eru honum fylgja. Fjarlægari punktur málsetningarinnar færist með sínum vegg, svo málsetningin sýnir gildið sem þú slóst inn.
- `WALLOFFSET` (`WO`): smelltu á vegg, síðan á hliðina sem hann á að færast til (`D` slær inn fjarlægð, `C` býr til afrit í staðinn).
- `WALLSTRETCH`: gluggi umhverfis veggendana, síðan grunnpunktur og annar punktur.
- Í Eiginleikum heldur slegin {{ui:Lengd}} upphafinu og tekur vegginn sem tengdur er við fjarlæga endann með sér, og ný {{ui:Þykkt}} vex í burtu frá {{ui:Staðsetningarlína}} sem þú valdir (vinstri hliðin, hægri hliðin eða miðjan).

## Málsetning milli miðlína veggja

Miðlína veggs er ekki teiknuð, en hlutasmellifesta finnur hana. Með hlutasmellifestu kveikta ({{key:F3}}) skaltu færa bendilinn yfir miðju þykktar veggs: merkið segir `Wall center: endpoint` eða `Wall center: midpoint`, og miðlínan sést sem strikalína meðan merkið er á henni. Með {{ui:Hornrétt}} eða {{ui:Næsti}} kveikt í listanum yfir hlutasmellifestur virka þær líka á miðlínunni.

1. Byrjaðu `DIMLINEAR` (eða `DIMALIGNED`).
2. Smelltu á fyrsta vegginn þar sem merkið segir `Wall center: midpoint` eða `Wall center: endpoint`.
3. Smelltu á annan vegginn á sama hátt, smelltu síðan þar sem málsetningarlínan á að fara.
4. Til að breyta fjarlægðinni skaltu byrja `WALLDIM`, smella á málsetninguna og slá inn nýja gildið. Seinni veggurinn færist.

Miðlínusmellifestan virkar í hverri skipun sem spyr um punkt.

## Læstu veggi

Læsing helst með veggnum í skránni. Ef þú færir annan læstan vegg fylgir hinn. Ef ein breyting færir báða veggina á ólíkan hátt er henni hafnað og ekkert breytist.

- `WALLHOLD`: læstu vegg við annan vegg. `A` færir hann fyrst á línu hins veggsins, `K` heldur fjarlægðinni sem hann hefur.
- `WALLHOLDDIM`: læstu fjarlægðina milli tveggja samsíða veggja.
- `WALLGRID`: læstu vegg við ristarlínu (línu á ristarlagi með merki sínu í texta við annan endann), annað hvort eftir henni eða með öðrum endanum á henni. Veggur sem er læstur eftir línunni heldur fjarlægðinni sem hann hefur frá henni. Færðu ristarlínuna með `GRIDMOVE` og veggurinn fylgir í heild, ásamt tengdum veggjum sínum. Veggur sem liggur eftir ristarlínu færist í heild með henni jafnvel án læsingar, og veggur sem aðeins endar á línunni er teygður af þeim enda.
- `WALLHOLDS` listar læsingarnar. `WALLUNHOLD` tekur læsingarnar af vegg.
- Hver læsing sýnir lítinn lás á teikningunni: við hlið miðju læsta veggsins, eða við hlið þess enda sem er læstur við ristarlínu. Smelltu á lás til að taka þá læsingu af.

## Það sem er ekki komið enn

Læsingar nota miðlínur veggjanna. Veggir hér hafa ekki lög, svo ekkert lagaforgangsröðun er á tengipunktum, og veggirnir beygjast ekki (sjá boga hér fyrir ofan). Enginn hefur prófað þessi verkfæri á stórri teikningu, og þau hafa ekki verið athuguð í öðru CAD-forriti.
