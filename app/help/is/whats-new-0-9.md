---
title: Nýtt í 0.9 (eldra)
summary: Skyggingar sem fylgja jaðri sínum, hóp laga, staflaðar hæðir, snjalla tvívíða veggi með hurðum og gluggum, textastíla og formgreindan textaritil, fljótandi skipanalínu, smellifestu á rist, tíu leiðir til að teikna boga, og Skjalaspjaldið.
keywords: nýtt í 0.9, eldri útgáfa, nýtt, 0.9, útgáfuskýringar, breytingaskrá, skygging, tengd skygging, hatchedit, pat-skrá, mynsturskrá, lagahópar, laygroup, hæðir, staflaðar hæðir, floorlayers, snjallir veggir, veggur, hurð, gluggi, veggjaverkfæri, textastíll, stíll, mtext-ritill, málsgreinatexti, snið, fljótandi skipanalína, skipanalína, efsta svæði, þétt, smella á rist, grid snap, f9, bogi, skjalaspjald, skoðun, útgáfa, nýir eiginleikar, útgáfa 0.8, 0.8.1, sjálfvirk útfylling, draugur, flipi, sketchfix, photosketch, autosheet, details, gridmove, autodim, merki, redline, sameina, git, fossil, access, teikning án sjónar, skjálesari, mörk, hornamæling, aunits, shx, skýringarmynd, ole, saga, bera saman, í orðum, eiginleikar, fet og tommur, teygja, tungumál, inntakstæki, vandamál, lifandi, aðstoðarmenn
from: 3451e64c
---

Þetta er það sem breyttist í CadCraft 0.9, miðað við 0.8.1. CadCraft er tvívíða og þrívíða teikniforritið í CadCraft Studio 0.9 og átta forritum þess. 0.9 klárar grunnmyndateikningu, bætir við textastílum og alvöru textaritli, og gefur þér meira rými á skjánum.

## Nýtt

### Grunnmyndateikning

- **Skyggingar sem fylgja jaðri sínum.** {{cmd:HATCH}} tengist því sem afmarkar hana. Færðu, snúðu eða skalaðu jaðarinn og skyggingin og mynstur hennar fylgja; mótaðu hann og skyggingin er reiknuð út aftur. {{cmd:HATCHEDIT}} (`HE`) breytir skyggingu síðar og býr til eða endar tengingu. Sjá [Skygging og fyllingar svæða](topic:hatch).
- **Skyggingarmynstraskrár.** Við spurningu {{cmd:HATCH}} `Veldu innri punkt` skrifarðu `F` (Mynstraskrá) og velur `.pat`-skrá. Aðeins skrár skrifaðar á venjulegu sniði hafa verið prófaðar.
- **Lagahópar.** Í {{ui:Verkfæri}} á spjaldinu {{ui:Lög}}: {{ui:Nýr hópur}}, {{ui:Bæta við tilbúnum hópum}}, {{ui:Hópa eftir heiti}}, og {{ui:Finna lag}}; eða skrifaðu {{cmd:LAYGROUP}} (`LG`). Sjá [Skipuleggðu teikningu með lögum](topic:layers#group-layers).
- **Staflaðar hæðir.** {{cmd:FLOORS}} (`FLR`), eða {{ui:Hæðir…}} í valmyndinni {{ui:Meira}} í hópnum {{ui:Sýn}}. Sýnigluggi á blaði getur sýnt eina hæð undir {{ui:Sýnt gólf}} í Eiginleikum. {{cmd:FLOORLAYERS}} breytir hæðum í lög fyrir skrá sem fer til annars fólks. Sjá [Stafla hæðum í einni teikningu](topic:floors).
- **Snjallir tvívíðir veggir, hurðir og gluggar.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) og {{cmd:DELOPENING}}. Horn, T-tengingar og skurðir eru reiknaðir fyrir þig. Veggir halda skrá yfir hvernig þeir tengjast, og Eiginleikar fá Banna tengingu í upphafi / í enda, Staðsetningarlínu og breytanlega Lengd. Sjá [Teikna tvívíða veggi, hurðir og glugga](topic:walls-2d).
- **Veggjaverkfærin á grunnmyndarveggjum.** Skrifaðu {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} og hin. Þau hafa ekki hnappa á tækjastikunni enn. Sjá [Veggjaform, skurðir, hliðranir og læsingar fyrir tvívíða veggi](topic:wall-tools-2d).

### Texti

- **Textastílar.** {{cmd:STYLE}} (`ST`), eða {{ui:Textastíll}} á tækjastikunni {{ui:Teikna}}: nefndir stílar með leturgerð, hæð, breiddarstuðli og halla. Sjá [Stilltu leturgerð og stærð texta með textastílum](topic:text-styles).
- **Formaður málsgreinatextaritill.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} eða tvísmellur á texta opnar reit með leturgerð, stærð, feitletrun, skáletrun, undirstrikun, yfirstrikun, lit, jöfnun og gráðu-, plús-mínus- og þvermálsmerkjum, ásamt {{ui:Í lagi}} og {{ui:Hætta við}}. Sjá [Forsníða málsgreinatexta](topic:format-paragraph-text).
- **Skýringarmynd úr draw.io XML.** {{cmd:DIAGRAM}} (`T2D`) les líka límt draw.io XML. Sjá [Teikna skýringarmynd úr texta](topic:text-to-diagram).
- **Tælenskur texti í PDF-útprentun.** Hann prentaðist áður sem spurningarmerki.

### Meira rými og teiknihjálpir

- **Fljótandi, mjórri skipanalína og þétt efsta svæði.** Dragðu grip skipanalínunnar til að gera hana fljótandi, dragðu efri brún hennar fyrir færri línur, og {{key:F2}} opnar söguna. {{ui:Stillingar}} › {{ui:CadCraft}} › {{ui:Skipanalína}} og val efsta svæðisins hafa sömu stillingar. Sjá [Stillingar](topic:settings#command-line).
- **Valmynd hlutasmellifestu.** Hægri smelltu á {{ui:Smellifesta}} á stöðustikunni, eða skrifaðu {{cmd:OSNAP}}.
- **Smella á rist.** Hnappurinn {{ui:Smella við rist}} á stöðustikunni, eða {{key:F9}}: valdir punktar fara á næsta ristarpunkt þegar engin hlutasmellifesta tók punktinn.
- **Bogi á tíu vegu, og Halda áfram.** {{ui:Bogi}} á tækjastikunni {{ui:Teikna}} eða {{cmd:ARC}}: 3 punkta, fjölskyldan Byrjun/Miðja/Endir og fjölskyldan Miðja/Byrjun/Endir, og Halda áfram (ýttu á {{key:Enter}} á upphafspunkti) frá síðustu línu, boga eða fjöllínu.
- **Skjalaspjaldið.** {{cmd:DOCUMENTS}} (`DOCS`) eða {{ui:Skjöl…}} í valmyndinni {{ui:Meira}} í hópnum {{ui:Sýn}}: endurskoðun, staða og útskráning fyrir sérhverja teikningu í verkefnamöppu. Það opnast sem miðjuð valmynd. Sjá [Skjöl](topic:documents).

### Skrár

- **Stærðir stáls í Bretlandi.** 976 prófílar í spjaldinu {{ui:Staðlað}}, slegnir inn eins og á teikningum (til dæmis `305x165x40 UB`).
- **Suður-afrískir pakkar** (teiknivenjur og byggingarreglugerðir) sem pakkar í viðbótinni Byggingarreglugerðir. Tölurnar eru óstaðfestar.
- **Viðbætur fyrir CadCraft,** bættar við eftir þörfum og slökktar sem sjálfgefið: hönnun innilýsingar, flísahönnun (HDL í útlit), leturgröftur á beini, rafrásahermun, keðjuhjól fyrir rúllukeðjur og landpakkar fyrir Byggingarreglugerðir.

## Lagfært

- Að færa, snúa eða skala skyggingu skildi mynstrið eftir.
- {{cmd:GRIDMOVE}} dró með sér heilan vegg á grunnmynd sem byrjar aðeins á ristarlínunni. Vegg er nú metinn út frá endum sínum.
- Ristin sýndist aðeins innan takmarka teikningarinnar, jafnvel með slökkt á mörkum.
- Blokkalistinn í hliðarspjaldinu skrunar, og heiti sem er ekki blokk sýnir blokkir sem byrja á því („Did you mean“).
- DXF R12-skrár sem AutoCAD hafnaði („Unknown group 1001 for table“) opnast nú þar.
- Mjög stórar skrár (um 70.000 einingar og fleiri) opnuðust ekki með „Maximum call stack size exceeded“.
- DWG-skrár frá AutoCAD 2018 og nýrri með háa viðhaldsútgáfu opnuðust ekki með „bad BITLONG code 11“.
- Í málsgreinatextareitnum heldur nýrri stærð, sem slegin er inn fyrir valinn hluta, valinu.

## Í öllum forritum

Tæknilegar ábendingar (Bootstrap) á hverju stjórntæki sem hefur vísbendingu, upphafsábending sem þú getur lokað, flipastikur sem skruna þegar þær passa ekki, og titill vafraflipans sem fylgir opinni teikningu (`<drawing> - CadCraft | CadCraft`). {{ui:Stillingar}} › {{ui:Útlit}} er nú fellilisti með tveggja lína valkostum. Tungumálalistinn í {{ui:Stillingar}} er lengri en í 0.8. Samvinnuvinnsla í beinni, Safnasöfn og þyngdar- og hitaeiningar eru lýst í Studio-skýringunum.

## Heiðarleg takmörk

- Málsgreinatexti hefur hvorki punkta- né tölusettan lista, tabulator-reglustiku né jöfnun. Prentaðar PDF-skrár setja texta í Helvetica.
- Veggir í grunnmynd eru beinir, svo bogi er teiknaður sem stuttir veggir. Samfélagsprófun veggjaverkfærisins er enn í bið.
- Lagahópar eru ekki skrifaðir á sniði AutoCAD, svo AutoCAD sýnir flatan lista. Önnur forrit sýna allar hæðir saman nema þú keyrir {{cmd:FLOORLAYERS}}.
- Skjalaspjaldið hefur ekki verið prófað af tveimur manneskjum á raunverulegri sameign. Viðbótin fyrir rafrásahermun hefur ekki keyrt á neinni raunverulegri tölvu. Lýsingaráætlunin var athuguð gegn ljóseindarekningu, ekki öðru forriti. Verkfræðiviðbætur eru gátlisti en ekki staðgengill yfirferðar verkfræðings.
- Tungumál önnur en enska eru vélrænar drög, og sum nýju orðin eru aðeins á ensku.

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í CadCraft 0.8 og 0.8.1, miðað við 0.7. 0.8 (1. nóvember 2026) bætir við teiknihjálpum sem vinna út frá þinni eigin teikningu, með reglum á tölvunni þinni og án líkans, og 0.8.1 (2. nóvember 2026) lagar villur sem tilkynntar voru eftir hana.

### Nýtt

**Teikning sem klárar hugsun þína**

- **Draugur sýnir hvað kemur næst.** Án þess að skipun sé keyrð sýnir grár brotinn draugur það sem mynstur teikningarinnar segja að komi næst: næsta stoð með sama bili, næsta þrep stiga, vanti veggurinn í herbergi. Ýttu á {{key:Tab}} til að teikna hann sem eitt afturkallsskref, eða {{key:Esc}} til að hafna honum. Hann skoðar aðeins nýjustu hlutina, svo hann helst mjúkur á stórri teikningu. Slökktu á honum í {{ui:Stillingar}} › {{ui:CadCraft}} eða með {{cmd:AUTOCOMPLETE}} `Off`.
- **Næsti punktur meðan þú teiknar línu.** Í miðri {{cmd:LINE}} eða {{cmd:PLINE}} er draugurinn næsti punktur: næsta þrep stiga, fjórða horn rétthyrnings, eða punkturinn sem lokar honum. Færðu bendilinn nálægt honum og ýttu á {{key:Tab}}, eins og þú hefðir smellt þar.
- **Pennaskissur verða nákvæm rúmfræði.** {{cmd:SKETCHFIX}}: teiknaðu gróf strok með penna, mús eða fingri og hvert verður hrein lína, hringur, bogi, rétthyrningur eða fjöllína, smellt við það sem þegar er teiknað. Sjá [Skissaðu með penna og fáðu nákvæma rúmfræði](topic:sketch-with-a-pen).
- **Ljósmynd af skissu verður teikning.** {{cmd:PHOTOSKETCH}} (`PSK`) finnur blaðið á ljósmynd, réttir úr perspektífinu, notar pappírsstærðina og mælikvarðann sem þú gefur, og rekur pennalínurnar á lag fyrir hvern pennalit. Letur er ekki rakið.
- **Málsetja eftir reglum.** {{cmd:AUTODIM}} (`ADIM`) býr til keðjur málsetninga eftir hliðunum sem þú velur, heildarstærð, breidd opa, þvermál gata og, með `Grid`, bil ristarlína. Hún endurtekur aldrei málsetningu sem þegar er til.
- **Færðu ristarlínu og settið fylgir.** {{cmd:GRIDMOVE}} (`GM`): veggir sem enda á ristarlínunni teygjast með henni, veggir á henni, súlur, hringur hennar og merki færast, og málsetningar á henni mæla nýja bilið. Eitt afturkallsskref.

**Blöð, smáatriði og merki**

- **Blöð sem raða sér sjálf.** {{cmd:AUTOSHEET}} tekur nefndu sýnirnar þínar (eða aðskilda hluta líkansins), velur pappírsstærð og staðlaðan mælikvarða, og setur sýnirnar í röðum á ný blöð með titilreit og yfirskrift (heiti og mælikvarða) undir hverri. Allt helst breytanlegt. Sjá [Láttu blöð raða sér fyrir mig](topic:lay-out-sheets-for-me).
- **Smáatriði fyrirtækisins þíns, boðin meðan þú teiknar.** {{cmd:DETAILS}} (`DET`) geymir þín eigin smáatriðablokkir. Þegar það sem þú velur passar við eitt þeirra eftir orðunum á lögum þess, blokkarheitum og athugasemdum, segir stöðustikan það; veldu það og settu það inn. {{cmd:DETAILS}} › Share setur listann þinn í Skjalamöppuna þína og sækir það sem liðið þitt hefur bætt við. Stillingar slökkva á tillögunum.
- **Merki á blokkum.** {{cmd:TAGS}} skilgreinir merki (gerð þess, gildin sem það má taka, blokkirnar sem það á við), setur það á valdar blokkartilvísanir, og listar þær sem áætlun sem þú getur vistað sem CSV. Skilgreiningarnar eru geymdar í DWG-skránni. Sjá [Merki](topic:tags).
- **Mörk teikningar.** {{cmd:LIMITS}} setur ferhyrning fyrir teikninguna: ristin fyllir hann og aðdráttur Allt sýnir hann. Mörkin sýnast sem útlína og eru vistuð í DWG og DXF, ásamt mörkum blaðsins. Sjá [Stilltu mörk teikningarinnar](topic:drawing-limits).

**Vinna með öðru fólki og öðrum forritum**

- **Breyttu athugasemd í endurskoðun.** {{cmd:REDLINE}} les pakkann sem MarkupCraft skrifar og telur upp sérhverja breytingu. Samþykktu eða hafnaðu hverri með athugasemd; þær samþykktu fá endurskoðunarský og endurskoðunarskrá í einu afturkallsskrefi, og þú vistar svarskrána sem lokar athugasemdunum í MarkupCraft. Sjá [Breyttu athugasemd í endurskoðun](topic:redline-to-revision).
- **Teikningar sem git og Fossil geta sameinað.** Með {{ui:Skrár sem henta sameiningu}} kveikt í {{ui:Stillingar}} › {{ui:CadCraft}} fær sérhver hlutur lykil sem breytist aldrei (skrárnar eru um 10 prósent stærri). `cadcraft merge base ours theirs` sameinar síðan tvær breytingar fólks á einum DWG- eða DXF-hlut eftir hlut og segir aðeins frá þar sem tveir breyttu því sama. Sjá [Sameina breytingar tveggja á einni teikningu](topic:merge-drawings).
- **Hvað breyttist, í orðum.** Í Sögu gefur Bera saman einfaldan lista: hvar hlutir breyttust, hversu stórir staðirnir eru, hvað var bætt við, fjarlægt eða breytt, og textinn sem var breyttur. Sjá [Segðu í orðum hvað breyttist](topic:changes-in-words).
- **Stefnur og horn.** Skrifaðu stefnu sem áttarhorn landmælingamanns eins og N45°23'30"E, eða í gráðum, mínútum og sekúndum, hvar sem horn er spurt; AUNITS stillir hvernig horn eru sýnd. Sjá [Slá inn og sýna stefnur og horn](topic:bearings-and-angles).
- **Þínar eigin SHX-leturgerðir.** Gefðu CadCraft möppu með SHX-leturgerðum og textastílar sem nefna þær eru teiknaðir í þeim, á skjánum og í útprentunum. Sjá [Teikna texta í þínum eigin SHX-leturgerðum](topic:shx-fonts).
- **Skýringarmynd úr texta.** {{cmd:DIAGRAM}} les Mermaid-flæðirit, PlantUML-íhlutaskýringarmynd, D2 eða lista frá-til og teiknar blokkir og tengi sem þú getur breytt. Sjá [Teikna skýringarmynd úr texta](topic:text-to-diagram).
- **OLE-hlutir í DWG.** {{cmd:OLELIST}} listar OLE-hlutina sem DWG-skrá geymir og CadCraft getur ekki sett inn sjálft, og setur afrit af mynd þar sem þú segir til. Sjá [Myndir](topic:pictures#objects-from-other-programs-ole).
- **Útreikningar þínir haldast með teikningunni.** Reiknablöð og hönnunarástæður eru geymdar í DWG-skránni með flokkatöflunni.

**Teikning án sjónar**

- Kveiktu á {{ui:Teikning án sjónar}} í {{ui:Stillingar}} (eða skrifaðu {{cmd:ACCESS}} og svaraðu `On`). CadCraft les upp sérhverja skipun og niðurstöðu í gegnum skjálesarann þinn, lýsir teikningunni og því sem er nálægt bendlinum, leyfir þér að færa bendilinn og velja punkta með lyklaborðinu, og spilar hljóð fyrir sérhverja smellifestu og grip. Þar sem vafrinn þinn getur þekkt tal á tölvunni þinni er hægt að tala skipanir. Sjá [Teikna án sjónar](topic:draft-without-sight).

**Í öllum forritum**

- **Tungumál.** 54 tungumál; tíu eru ný (litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkánska, filippínska, svahílí, úsbekska). Tungumál önnur en enska eru vélrænar drög þar til móðurmálshafi les þau.
- **Inntakstæki.** Snertiflötur, penni, þrívíð mús, leikjastýring og MIDI-stýringar.
- **Raðir tækjastikunnar og eiginleikatöflunnar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur á tækjastiku}} býður Vefja, 2 raðir eða 1 röð í hinum forritunum. CadCraft heldur sinni eigin stillingu í {{ui:Stillingar}} › {{ui:CadCraft}} (sjá [Raðir tækjastikunnar](topic:settings#toolbar-rows)). Sameiginlega eiginleikatöflan er í þremur öðrum forritum, ekki í CadCraft.
- **Vandamál, Í beinni og viðbætur.** Sameiginlegt Vandamálaspjald sem varar í hverju forriti, Í beinni-sýn á því hver er hvar í CadCraft Studio (sjá [Vinna á einni teikningu saman](topic:work-live)), og listi yfir viðbætur.
- **Tengdu gervigreindina þína.** Ein tenging frá CadCraft Studio við öll átta forritin, með stigi aðeins til lestrar, uppástungu eða breytingar fyrir hvert forrit, og skrá í venjulegu máli yfir það sem aðstoðarmaðurinn gerði. CadCraft hefur enga gervigreind sjálft, og Spyrja í hverju forriti notar þá gervigreind sem þú tengir.

### Lagfært í 0.8.1

- **Eiginleikar sýndu 150 í stað 12'-6"** í teikningum með fetum og tommum. Reitir sem forritið les sjálft halda texta sínum aftur.
- **DWG-skrár sem klasahluti var lesinn sem rangt tegund** (GitHub cadcraft#5) opnast nú rétt.
- **Krosshárið birtist ekki lengur á bak við sprettiglugga.**
- **Studio og pakkaðar útgáfur geta skipt um tungumál meðan forritið keyrir.** Áður var aðeins enska. Ekki enn prófað á öllum stýrikerfum: láttu okkur vita ef tungumálið breytist ekki.
- **Spjaldtölvur í andlitsstöðu** gefa bilhæð ristarinnar til teiknisvæðisins, og blaðastilling byrjar við 760 px eða minna.
- **STRETCH með krossglugga, og LIMITS,** voru tilkynnt í Studio 0.8.0 og voru þegar rétt í 0.8 vefsmíðinni; uppsetningarforrit tilkynnanda var eldra. Studio 0.8.1 inniheldur þær.

### Ekki í þessari útgáfu enn

- **0.8 og 0.8.1 eru ekki undirrituð með kóða.** Windows gæti varað við (veldu {{ui:More info}}, síðan {{ui:Run anyway}}); á Mac hægri smelltu á CadCraft Studio og veldu {{ui:Open}}. Útgáfur fyrir verslanir eru í bið, og iPad- og iPhone-smíðin var ekki endurbyggð fyrir 0.8.1.
- **Pennaskissur og ljósmyndir af skissum** hafa aðeins verið prófaðar á tilbúnum ljósmyndum og mús, ekki enn með raunverulegum penna, snertiskjá eða handskissu á pappír.
- **Teikning án sjónar** hefur verið prófuð með sjálfvirkum athugunum, ekki enn með skjálesara eða blindum prófanda.
- **Deiling smáatriða** hefur ekki fengið tveggja manna athugun, og Team Cloud Plan-mappa sem Skjalamappa er ekki smíðuð.
- **Sameining** virkar fyrir DWG- og DXF-skrár CadCraft; fyrir skrár annarra forrita er hún ekki smíðuð.
- **Afturköllun yfir glugga:** CadCraft tilkynnir hvert lokið skref, en Studio hefur enn enga eina Afturköllun fyrir öll forrit; hvert forrit afturkallar sín eigin skref.
- **OLE-hlutir í DWG** eru geymdir en ekki teiknaðir á sínum stað.
- **Lestur prentstílstafla (CTB-skrár)** frá öðrum forritum er smíðaður en ekki athugaður gegn skrá frá öðru forriti.
- **Tengdu gervigreindina þína:** tenging með einum smelli í Studio, hýsti tengillinn fyrir gervigreind í vafra, þinn eigin API-lykill inni í Studio og útgefinn MCP-pakki eru ekki lofuð í þessari útgáfu.

Fyrir útgáfuna á undan þessari, sjá [Nýtt í 0.7](topic:whats-new-0-7).
