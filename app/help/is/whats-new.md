---
title: Nýtt í 0.9
summary: Skygging sem fylgir afmörkun sinni, lagahópar, staflaðar hæðir, 2D-snjallveggir með hurðum og gluggum, textastílar og sniðinn textaritill, fljótandi skipanalína, smellur á rist, tíu leiðir til að teikna boga og Skjalaspjaldið.
keywords: nýtt, 0.9, útgáfuskýringar, breytingaskrá, skygging, tengd skygging, hatchedit, pat-skrá, mynstursskrá, lagahópar, laygroup, hæðir, staflaðar hæðir, floorlayers, snjallveggir, veggur, hurð, gluggi, veggjaverkfæri, textastíll, stíll, mtext, málsgreinatexti, snið, fljótandi skipanalína, skipanalína, efsta svæði, þétt, smella á rist, grid snap, f9, bogi, skjalaspjald, draw.io, taílenskur texti, dxf r12, hvað er nýtt, 0.8, 0.8.1, útgáfa, nýir eiginleikar, sjálfútfylling, draugur, tab, sketchfix, photosketch, autosheet, smáatriði, gridmove, autodim, merki, redline, sameina, git, fossil, aðgengi, teikning án sjónar, skjálesari, takmörk, stefnur, aunits, shx, skýringarmynd, ole, saga, bera saman, í orðum, eiginleikar, fet og tommur, teygja, tungumál, inntakstæki, vandamál, live, aðstoðarmenn
from: 8b6dea0b
---

Þetta breyttist í CadCraft 0.9 miðað við 0.8.1. CadCraft er 2D- og 3D-teikniforritið í CadCraft Studio 0.9 og átta forritum þess. 0.9 klárar teikningu á grunnmynd, bætir við textastílum og alvöru textaritli, og gefur þér meira rými á skjánum.

## Nýtt

### Teikning á grunnmynd

- **Skygging sem fylgir afmörkun sinni.** {{cmd:HATCH}} tengist því sem afmarkar hana. Færðu, snúðu eða skalaðu afmörkunina, og skyggingin og mynstur hennar fylgja; mótaðu hana upp á nýtt og skyggingin er reiknuð aftur. {{cmd:HATCHEDIT}} (`HE`) breytir skyggingu eftir á og býr til eða slítur tengingu. Sjá [Skygging og fyllt svæði](topic:hatch).
- **Mynstursskrár fyrir skyggingu.** Við spurninguna `Veldu innri punkt` í {{cmd:HATCH}} skrifarðu `F` (Mynstursskrá) og velur `.pat`-skrá. Aðeins skrár sem eru skrifaðar á venjulegu sniði hafa verið prófaðar.
- **Lagahópar.** Í {{ui:Tools}} á {{ui:Layers}}-spjaldinu: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} og {{ui:Find a layer}}; eða skrifaðu {{cmd:LAYGROUP}} (`LG`). Sjá [Skipuleggja teikningu með lögum](topic:layers#group-layers).
- **Staflaðar hæðir.** {{cmd:FLOORS}} (`FLR`), eða {{ui:Floors…}} í valmyndinni {{ui:More}} í hópnum {{ui:View}}. Sýniglugga á blaði getur sýnt eina hæð undir {{ui:Floor shown}} í Eiginleikum. {{cmd:FLOORLAYERS}} breytir hæðum í lög fyrir skrá sem fer til einhvers annars. Sjá [Stafla hæðum í einni teikningu](topic:floors).
- **2D-snjallveggir, hurðir og gluggar.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) og {{cmd:DELOPENING}}. Horn, T-tengingar og skurðpunktar eru reiknaðir fyrir þig. Veggir geyma skrá yfir hvernig þeir tengjast, og Eiginleikar fá {{ui:Disallow join at start}} / {{ui:Disallow join at end}}, {{ui:Location line}} og breytanlega {{ui:Length}}. Sjá [Teikna 2D-veggi, hurðir og glugga](topic:walls-2d).
- **Veggverkfærin á veggjum á grunnmynd.** Skrifaðu {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} og hin. Þau hafa engin tækjastikuhnappa enn. Sjá [Veggjaform, skurðir, hliðranir og læsingar fyrir 2D-veggi](topic:wall-tools-2d).

### Texti

- **Textastílar.** {{cmd:STYLE}} (`ST`), eða {{ui:Text style}} á {{ui:Draw}}-tækjastikunni: nefndir stílar með letri, hæð, breiddarstuðli og halla. Sjá [Stilltu letur og stærð texta með textastílum](topic:text-styles).
- **Sniðinn málsgreinatextaritill.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} eða tvísmellur á texta opnar reit með letri, stærð, feitletrun, skáletrun, undirstrikun, yfirstrikun, lit, jöfnun og gráðu-, plús-mínus- og þvermálstáknum, auk {{ui:OK}} og {{ui:Cancel}}. Sjá [Forsníða málsgreinatexta](topic:format-paragraph-text).
- **Skýringarmynd úr draw.io XML.** {{cmd:DIAGRAM}} (`T2D`) les líka draw.io XML sem límt er inn. Sjá [Teikna skýringarmynd úr texta](topic:text-to-diagram).
- **Taílenskur texti í PDF-prentun.** Hann prentaðist áður sem spurningamerki.

### Meira rými og teikniaðstoð

- **Fljótandi, grennri skipanalína og þétt efsta svæði.** Dragðu handfang skipanalínunnar til að fljóta hana, dragðu efri brún hennar fyrir færri línur, og {{key:F2}} opnar söguna. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} og valkostirnir fyrir efsta svæðið hafa sömu stillingar. Sjá [Stillingar](topic:settings#command-line).
- **Valmynd hlutasmellna.** Hægrismelltu á {{ui:Snap}} í stöðustikunni, eða skrifaðu {{cmd:OSNAP}}.
- **Smella á rist.** Hnappurinn {{ui:Grid snap}} í stöðustikunni, eða {{key:F9}}: valdir punktar fara á næsta punkt ristarinnar þegar engin hlutasmella tók punktinn.
- **Bogi á tíu vegu, og Halda áfram.** {{ui:Arc}} á {{ui:Draw}}-tækjastikunni eða {{cmd:ARC}}: 3 punkta, fjölskyldan Start/Center/End og fjölskyldan Center/Start/End, og Halda áfram (ýttu á {{key:Enter}} á upphafspunktinum) frá síðustu línu, boga eða fjöllínu.
- **Skjalaspjaldið.** {{cmd:DOCUMENTS}} (`DOCS`) eða {{ui:Documents…}} í valmyndinni {{ui:More}} í hópnum {{ui:View}}: útgáfa, staða og útskráning fyrir hverja teikningu í verkefnamöppu. Það opnast sem miðjaður gluggi. Sjá [Skjöl](topic:documents).

### Skrár

- **Stálstærðir fyrir Bretland.** 976 bitar í Standard-spjaldinu, skrifaðir eins og á teikningum (til dæmis `305x165x40 UB`).
- **Suður-afrískir pakkar** (teikniaðferðir og byggingarreglugerðir) sem pakkar í byggingarreglugerðarviðbótinni. Tölurnar eru óstaðfestar.
- **Viðbætur fyrir CadCraft,** bættar við eftir þörfum og slökktar sjálfgefið: hönnun innilýsingar, flísahönnun (HDL í skipulag), leiðarskurður, rafrásahermun, tannhjól fyrir valsakeðjur og pakkar fyrir landsbundnar byggingarreglur.

## Lagað

- Að færa, snúa eða skala skyggingu skildi mynstrið eftir.
- {{cmd:GRIDMOVE}} færði heilan vegg á grunnmynd sem byrjar aðeins á ristarlínu. Veggur er nú metinn út frá endum sínum.
- Ristin sást aðeins innan teikningarmarka þótt takmörk væru slökkt.
- Blokkalistinn á hliðarspjaldinu rúllar, og nafn sem er engin blokk listar blokkir sem byrja á því („Did you mean" › „Áttir þú við").
- DXF R12-skrár sem AutoCAD hafnaði („Unknown group 1001 for table") opnast nú þar.
- Mjög stórar skrár (um 70.000 hlutir og fleiri) mistókust við opnun með „Maximum call stack size exceeded".
- DWG-skrár frá AutoCAD 2018 og síðar með háa viðhaldsútgáfu mistókust með „bad BITLONG code 11".
- Í málsgreinatextareitnum heldur ný stærð sem er slegin inn fyrir valinn hluta valinu.

## Í öllum forritum

Bootstrap-ábendingar á hverri stjórn sem hefur ábendingu, byrjunarábending sem þú getur lokað, flipaborðar sem skrolla þegar þeir passa ekki, og titill vafraflipa sem fylgir opinni teikningu (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} er nú fellilisti með tveggja lína valkostum. Listinn yfir tungumál í {{ui:Settings}} er lengri en í 0.8. Samvinna í beinni, Safn og þyngdar- og hitaeiningar eru lýst í Studio-athugasemdunum.

## Heiðarleg takmörk

- Málsgreinatexti hefur hvorki punktalista né númeraðan lista, tabreglu né jöfnun. Prentaðar PDF-skrár setja texta í Helvetica.
- Veggir á grunnmynd eru beinir, svo bogi er teiknaður sem stuttir veggir. Samfélagsyfirferð á veggverkfærinu er enn í bið.
- Lagahópar eru ekki skrifaðir á sniði AutoCAD, svo AutoCAD sýnir flatan lista. Önnur forrit sýna allar hæðir saman nema þú keyrir {{cmd:FLOORLAYERS}}.
- Skjalaspjaldið hefur ekki verið prófað af tveimur manneskjum á alvöru sameign. Beinaskurður hefur ekki keyrt á neinni alvöru vél. Lýsingaráætlunin var athuguð við ljóseindarekningu, ekki í öðru forriti. Verkfræðiviðbætur eru athugunartól, ekki staðgengill yfirferðar verkfræðings.
- Tungumál önnur en enska eru vélræn drög, og sum nýju orðin eru eingöngu á ensku.

## Eldra: 0.8 og 0.8.1

Þetta breyttist í CadCraft 0.8 og 0.8.1 miðað við 0.7. 0.8 (1. nóvember 2026) bætir við teiknihjálpum sem vinna út frá þinni eigin teikningu, eftir reglum á tölvunni þinni og án líkans, og 0.8.1 (2. nóvember 2026) lagar villur sem tilkynntar voru eftir hana.

### Nýtt

**Teikning sem klárar hugsunina þína**

- **Draugur sýnir hvað kemur næst.** Án skipunar í gangi sýnir grár strikaður draugur það sem mynstur teikningarinnar segja að komi næst: næsta stoð með sama bili, næsta þrep stiga, vantandi veggur herbergis. Ýttu á {{key:Tab}} til að teikna hann sem eitt skref sem hægt er að afturkalla, eða {{key:Esc}} til að hafna honum. Hann horfir aðeins á nýjustu hlutina, svo hann helst mjúkur á stórri teikningu. Slökktu á honum í {{ui:Settings}} › {{ui:CadCraft}} eða með {{cmd:AUTOCOMPLETE}} `Off`.
- **Næsti punktur meðan þú teiknar línu.** Í miðri {{cmd:LINE}} eða {{cmd:PLINE}} er draugurinn næsti punktur: næsta þrep stiga, fjórða horn rétthyrnings, eða punkturinn sem lokar honum. Færðu bendilinn nálægt honum og ýttu á {{key:Tab}}, eins og þú hefðir smellt þar.
- **Pennateikningar verða nákvæm rúmfræði.** {{cmd:SKETCHFIX}}: teiknaðu gróf strok með penna, mús eða fingri, og hvert verður hrein lína, hringur, bogi, rétthyrningur eða fjöllína, smellt á það sem er þegar teiknað. Sjá [Teiknaðu með penna og fáðu nákvæma rúmfræði](topic:sketch-with-a-pen).
- **Ljósmynd af skissu verður teikning.** {{cmd:PHOTOSKETCH}} (`PSK`) finnur blaðið á ljósmynd, réttir úr perspektífinu, beitir pappírsstærðinni og mælikvarðanum sem þú gefur, og rekur pennalínurnar á lag fyrir hvern pennalit. Letur er ekki rakið.
- **Víddaðu eftir reglum.** {{cmd:AUTODIM}} (`ADIM`) býr til keðjur af víddum meðfram hliðunum sem þú velur, heildarstærð, opnunarbreidd, gatþvermál og, með `Grid`, bil ristarinnar. Hann endurtekur aldrei vídd sem er þegar til staðar.
- **Færðu ristarlínu og settið fylgir.** {{cmd:GRIDMOVE}} (`GM`): veggir sem enda á ristarlínunni teygjast með henni, veggir meðfram henni, súlur, merki hennar og tag færast, og víddir á henni mæla nýja bilið. Eitt skref sem hægt er að afturkalla.

**Blöð, smáatriði og merki**

- **Blöð sem skipuleggja sig sjálf.** {{cmd:AUTOSHEET}} tekur nefndu sýnin þín (eða aðskilda hluta líkansins), velur pappírsstærð og staðlaðan mælikvarða, og setur sýnin á ný blöð með titilreit og yfirskrift með heiti og mælikvarða. Allt er áfram breytanlegt. Sjá [Láttu skipuleggja blöð fyrir mig](topic:lay-out-sheets-for-me).
- **Smáatriði fyrirtækisins þíns, boðin meðan þú teiknar.** {{cmd:DETAILS}} (`DET`) geymir þínar eigin smáatriðablokkir. Þegar það sem þú velur passar við eina eftir orðunum á lögum hennar, blokkaheitum og athugasemdum, segir stöðustikan það; veldu hana og settu hana. {{cmd:DETAILS}} › Share setur listann þinn í Skjalamöppuna þína og sækir það sem teymið þitt hefur bætt við. Stillingar slökkva á tilboðunum.
- **Merki á blokkum.** {{cmd:TAGS}} skilgreinir merki (tegund þess, gildin sem það má taka, blokkirnar sem það á við), setur það á blokkatilvísanir sem þú velur, og listar þær sem skrá sem þú getur vistað sem CSV. Skilgreiningarnar eru geymdar í DWG. Sjá [Merki](topic:tags).
- **Takmörk teikningar.** {{cmd:LIMITS}} setur rétthyrning fyrir teikninguna: ristin fyllir hann og Zoom All sýnir hann. Takmörkin birtast sem útlína og eru vistuð í DWG og DXF, ásamt pappírstakmörkunum. Sjá [Stilla takmörk teikningar](topic:drawing-limits).

**Vinna með öðrum og öðrum forritum**

- **Breyttu athugasemd í endurskoðun.** {{cmd:REDLINE}} les pakkann sem MarkupCraft skrifar og listar hverja breytingu. Samþykktu eða hafnaðu hverri með athugasemd. Þær sem eru samþykktar fá endurskoðunarský og endurskoðunarskrá í einu skrefi sem hægt er að afturkalla, og þú vistar svaraskrána sem lokar athugasemdunum í MarkupCraft. Sjá [Breyttu athugasemd í endurskoðun](topic:redline-to-revision).
- **Teikningar sem git og Fossil geta sameinað.** Með {{ui:Merge-friendly files}} kveikt í {{ui:Settings}} › {{ui:CadCraft}} fær sérhver hlutur lykil sem breytist aldrei (skrár verða um 10 prósent stærri). `cadcraft merge base ours theirs` sameinar breytingar tveggja manna á einum DWG- eða DXF-hlut fyrir hlut og tilkynnir aðeins þar sem tveir breyttu sama atriðinu. Sjá [Sameinaðu breytingar tveggja manna á einni teikningu](topic:merge-drawings).
- **Hvað breyttist, í orðum.** Í Sögu gefur Bera saman einfalda skrá: hvar hlutir breyttust, hversu stórir staðirnir eru, hvað var bætt við, fjarlægt eða breytt, og textinn sem var breyttur. Sjá [Segðu í orðum hvað breyttist](topic:changes-in-words).
- **Stefnur og horn.** Skrifaðu stefnu eins og landmælingamaður myndi gera, til dæmis N45°23'30"E, eða í gráðum, mínútum og sekúndum, hvar sem horn er spurt um; AUNITS stillir hvernig horn eru sýnd. Sjá [Skrifa og sýna stefnur og horn](topic:bearings-and-angles).
- **Þínar eigin SHX-leturgerðir.** Gefðu CadCraft möppu með SHX-leturgerðum, og textastílar sem nefna þær eru teiknaðir með þeim, á skjánum og í prentun. Sjá [Teikna texta í þínum eigin SHX-leturgerðum](topic:shx-fonts).
- **Skýringarmynd úr texta.** {{cmd:DIAGRAM}} les Mermaid-flæðirit, PlantUML-íhlutamynd, D2 eða lista yfir frá-til og teiknar blokkir og tengi sem þú getur breytt. Sjá [Teikna skýringarmynd úr texta](topic:text-to-diagram).
- **OLE-hlutir í DWG.** {{cmd:OLELIST}} listar OLE-hluti sem DWG inniheldur og CadCraft getur ekki sett inn sjálft, og setur afrit af mynd þar sem þú segir til um. Sjá [Myndir](topic:pictures#objects-from-other-programs-ole).
- **Útreikningarnir þínir haldast með teikningunni.** Reiknablöð og hönnunarástæður eru geymdar í DWG með flokkatöflunni.

**Teikning án sjónar**

- Kveiktu á {{ui:Drafting without sight}} í {{ui:Settings}} (eða skrifaðu {{cmd:ACCESS}} og svaraðu `On`). CadCraft les upp hverja skipun og niðurstöðu í gegnum skjálesarann þinn, lýsir teikningunni og því sem er nálægt bendlinum, leyfir þér að færa bendilinn og velja punkta með lyklaborðinu, og spilar hljóð fyrir hverja smellu og handfang. Þar sem vafrinn þinn getur þekkt tal á tölvunni þinni er hægt að tala skipanir. Sjá [Teikna án sjónar](topic:draft-without-sight).

**Í öllum forritum**

- **Tungumál.** 54 tungumál; tíu eru ný (litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippseyska, svahílí, úsbekska). Tungumál önnur en enska eru vélræn drög þar til innfæddur málhafi les þau.
- **Inntakstæki.** Snertiflötur, penni, þrívíddarmús, leikjastýring og MIDI-stýringar.
- **Línur tækjastikunnar og eiginleikaristin.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} býður Wrap, 2 línur eða 1 línu í hinum forritunum. CadCraft geymir sína eigin stillingu í {{ui:Settings}} › {{ui:CadCraft}} (sjá [Línur tækjastikunnar](topic:settings#toolbar-rows)). Sameiginlega eiginleikaristin er í þremur öðrum forritum, ekki í CadCraft.
- **Vandamál, Live og viðbætur.** Sameiginlegt vandamálaspjald sem varar í öllum forritunum, Live-sýn á hvar fólk er í CadCraft Studio (sjá [Vinna saman að einni teikningu](topic:work-live)), og listi yfir viðbætur.
- **Tengdu gervigreindina þína.** Ein tenging frá CadCraft Studio við öll átta forritin, með stigi sem er aðeins lestur, tillögur eða breytingar fyrir hvert forrit, og skráningu í einföldu máli á því sem aðstoðarmaðurinn gerði. CadCraft hefur enga gervigreind sjálft, og Spyrja í öllum forritunum notar gervigreindina sem þú tengir.

### Lagað í 0.8.1

- **Eiginleikar sýndu 150 í stað 12'-6"** í teikningum í fetum og tommum. Reitir sem forritið les sjálft halda texta sínum aftur.
- **DWG-skrár þar sem flokkahlutinn var lesinn sem rangt tegund** (GitHub cadcraft#5) opnast nú rétt.
- **Krosshárið sést ekki lengur á bak við sprettiglugga.**
- **Studio og pakkaðar útgáfur geta skipt um tungumál meðan forritið keyrir.** Áður var aðeins enska í boði. Ekki enn prófað á hverju stýrikerfi: segðu okkur ef tungumálið breytist ekki.
- **Spjaldtölvur í portrait** gefa lausa ristarhæð á teiknisvæðinu, og sheets-hamurinn byrjar við 760 px eða minna.
- **STRETCH með krossandi glugga, og LIMITS,** voru tilkynnt á Studio 0.8.0 og voru þegar rétt í 0.8 vefútgáfunni; tilkynnandinn var með eldra uppsetningarforrit. Studio 0.8.1 inniheldur þau.

### Ekki í þessari útgáfu enn

- **0.8 og 0.8.1 eru ekki undirrituð með kóða.** Windows gæti varað við (veldu {{ui:Frekari upplýsingar}}, síðan {{ui:Keyra samt}}); á Mac, hægrismelltu á CadCraft Studio og veldu {{ui:Open}}. Verslunarútgáfur eru í bið, og iPad- og iPhone-útgáfan var ekki endursmíðuð fyrir 0.8.1.
- **Pennaskissur og ljósmyndir af skissum** hafa verið prófaðar aðeins á tilbúnum ljósmyndum og mús, ekki enn með alvöru penna, snertiskjá eða handskissu á pappír.
- **Teikning án sjónar** hefur verið prófuð með sjálfvirkum athugunum, ekki enn með skjálesara eða blindum prófanda.
- **Deiling smáatriða** hefur ekki fengið tveggja manna yfirferð, og Team Cloud Plan-mappa sem Skjalamappa er ekki smíðuð.
- **Sameining** virkar fyrir DWG- og DXF-skrár CadCraft; það sama fyrir skrár hinna forritanna er ekki smíðað.
- **Afturköllun yfir glugga:** CadCraft skráir hvert lokið skref, en Studio hefur enga sameiginlega afturköllun fyrir öll forrit enn; hvert forrit afturkallar sín eigin skref.
- **OLE-hlutir DWG** eru geymdir en ekki teiknaðir á sínum stað.
- **Lestur plotstílatafla (CTB-skrár)** úr öðrum forritum er smíðaður en ekki athugaður við skrá úr öðru forriti.
- **Tengdu gervigreindina þína:** tenging með einum smelli í Studio, hýsti tengillinn fyrir gervigreind í vafra, eigin API-lykill í Studio og birti MCP-pakkinn eru ekki lofuð í þessari útgáfu.

Fyrir útgáfuna á undan, sjá [Nýtt í 0.7](topic:whats-new-0-7).
