---
title: Hvað er nýtt í 0.8 og 0.8.1
summary: Draugur sem klárar teikninguna þína, pennaskissur og ljósmyndir af skissum breyttar í rúmfræði, blöð sem raða sér sjálf, smáatriði boðin meðan þú teiknar, GRIDMOVE og AUTODIM, merki, skrár sem henta sameiningu, athugasemdir sem verða að endurskoðunum, teikning án sjónar, mörk teikningar, stefnur, SHX-letur, skýringarmyndir úr texta og lagfæringar í 0.8.1.
keywords: hvað er nýtt, útgáfuskýringar, breytingaskrá, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, sjálfvirk útfylling, draugur, tab, sketchfix, photosketch, autosheet, smáatriði, gridmove, autodim, merki, redline, sameining, git, fossil, aðgangur, teikna án sjónar, skjálesari, mörk, stefnur, aunits, shx, skýringarmynd, ole, ferill, samanburður, í orðum, eiginleikar, fet og tommur, teygja, tungumál, inntakstæki, vandamál, í beinni, aðstoðarmenn
from: 9dd82db5
---

Þetta er það sem breyttist í CadCraft 0.8 og 0.8.1, miðað við 0.7. 0.8 (1. nóvember 2026) bætir við hjálpartólum fyrir teikningu sem vinna út frá þinni eigin teikningu, með reglum á tölvunni þinni og án líkans, og 0.8.1 (2. nóvember 2026) lagar villur sem tilkynntar voru eftir hana.

## Nýtt

### Teikning sem klárar hugsunina þína

- **Draugur sýnir hvað kemur næst.** Þegar engin skipun er í gangi sýnir grár strikaður draugur hvað mynstur teikningarinnar þinnar segja að komi næst: næsta stoð með sama bili, næsta þrep stiga, vantandi veggur herbergis. Ýttu á {{key:Tab}} til að teikna hann sem eitt afturköllunarskref, eða {{key:Esc}} til að hafna honum. Hann skoðar aðeins nýjustu hlutina, svo hann helst mjúkur á stórri teikningu. Slökktu á honum í {{ui:Stillingar}} › {{ui:CadCraft}} eða með {{cmd:AUTOCOMPLETE}} `Off`.
- **Næsti punktur meðan þú teiknar línu.** Í miðri {{cmd:LINE}} eða {{cmd:PLINE}} er draugurinn næsti punktur: næsta þrep stiga, fjórða horn rétthyrnings, eða punkturinn sem lokar honum. Færðu bendilinn nálægt honum og ýttu á {{key:Tab}}, eins og þú hefðir smellt þar.
- **Pennaskissur verða nákvæm rúmfræði.** {{cmd:SKETCHFIX}}: teiknaðu gróf strok með penna, mús eða fingri og hvert þeirra verður hrein lína, hringur, bogi, rétthyrningur eða fjöllína, smellt að því sem þegar er teiknað. Sjá [Skissaðu með penna og fáðu nákvæma rúmfræði](topic:sketch-with-a-pen).
- **Ljósmynd af skissu verður að teikningu.** {{cmd:PHOTOSKETCH}} (`PSK`) finnur blaðið á ljósmyndinni, réttir úr perspektífinu, notar pappírsstærðina og mælikvarðann sem þú gefur, og rekur pennalínurnar á lag fyrir hvern pennalit. Letur er ekki rakið.
- **Málsettu eftir reglum.** {{cmd:AUTODIM}} (`ADIM`) býr til keðjur málsetninga meðfram þeim hliðum sem þú velur, heildarstærð, opnunarbreidd, þvermál gata og, með `Grid`, bil hnitanets. Það endurtekur aldrei málsetningu sem þegar er til.
- **Færðu hnitanetslínu og settið fylgir.** {{cmd:GRIDMOVE}} (`GM`): veggir sem enda á hnitanetslínunni teygjast með henni, veggir meðfram henni, súlur, kúla hennar og merki færast, og málsetningar á henni mæla nýja bilið. Eitt afturköllunarskref.

### Blöð, smáatriði og merki

- **Blöð sem raða sér sjálf.** {{cmd:AUTOSHEET}} tekur nefndu sýnirnar þínar (eða aðskildu hlutana úr líkaninu), velur pappírsstærð og staðlaðan mælikvarða, og setur sýnirnar á ný blöð með titilblokk og texta með heiti og mælikvarða. Allt helst breytanlegt. Sjá [Raðaðu blöðum fyrir mig](topic:lay-out-sheets-for-me).
- **Smáatriði fyrirtækisins þíns, boðin meðan þú teiknar.** {{cmd:DETAILS}} (`DET`) geymir þínar eigin smáatriðablokkir. Þegar það sem þú velur passar við eina þeirra eftir orðunum á lögum hennar, heitum blokka og athugasemdum, segir stöðustikan það; veldu hana og settu hana inn. {{cmd:DETAILS}} › Deila setur listann þinn í skjalamöppuna þína og sækir það sem teymið þitt hefur bætt við. {{ui:Stillingar}} slökkva á tillögunum.
- **Merki á blokkum.** {{cmd:TAGS}} skilgreinir merki (tegund þess, gildin sem það getur tekið, blokkirnar sem það á við), setur það á blokkatilvísanirnar sem þú velur, og birtir þær sem lista sem þú getur vistað sem CSV. Skilgreiningarnar eru geymdar í DWG. Sjá [Merki](topic:tags).
- **Mörk teikningar.** {{cmd:LIMITS}} setur rétthyrning fyrir teikninguna: hnitanetið fyllir hann og aðdráttur á allt sýnir hann. Mörkin birtast sem útlína og eru vistuð í DWG og DXF, ásamt pappírsmörkunum. Sjá [Stilla mörk teikningar](topic:drawing-limits).

### Vinna með öðru fólki og öðrum forritum

- **Breyttu athugasemd í endurskoðun.** {{cmd:REDLINE}} les pakkann sem MarkupCraft skrifar og telur upp hverja breytingu. Samþykktu eða hafnaðu hverri með athugasemd; þær sem eru samþykktar fá endurskoðunarský og endurskoðunarskrá í einu afturköllunarskrefi, og þú vistar svarskrána sem lokar athugasemdunum í MarkupCraft. Sjá [Breyttu athugasemd í endurskoðun](topic:redline-to-revision).
- **Teikningar sem git og Fossil geta sameinað.** Með {{ui:Skrár sem henta sameiningu}} kveikt í {{ui:Stillingar}} › {{ui:CadCraft}} fær hver hlutur lykil sem breytist aldrei (skrárnar eru um 10 prósent stærri). `cadcraft merge base ours theirs` sameinar síðan breytingar tveggja á einum DWG- eða DXF-hlut fyrir hlut og tilkynnir aðeins þar sem tveir breyttu sama atriðinu. Sjá [Sameina breytingar tveggja á einni teikningu](topic:merge-drawings).
- **Hvað breyttist, í orðum.** Í Ferli gefur Bera saman einfaldan lista: hvar hlutir breyttust, hversu stór svæðin eru, hvað var bætt við, fjarlægt eða breytt, og textinn sem var breytt. Sjá [Segðu í orðum hvað breyttist](topic:changes-in-words).
- **Stefnur og horn.** Sláðu inn stefnu sem mælingamanna-stefnu eins og N45°23'30"E, eða í gráðum, mínútum og sekúndum, hvar sem horn er beðið um; AUNITS stillir hvernig horn eru sýnd. Sjá [Slá inn og sýna stefnur og horn](topic:bearings-and-angles).
- **Þín eigin SHX-letur.** Gefðu CadCraft möppu með SHX-letri og textastílum sem nefna þau eru teiknaðir með þeim, á skjánum og í prentun. Sjá [Teikna texta með þínu eigin SHX-letri](topic:shx-fonts).
- **Skýringarmynd úr texta.** {{cmd:DIAGRAM}} les Mermaid-flæðirit, PlantUML-íhlutamynd, D2 eða lista með frá og til, og teiknar blokkir og tengi sem þú getur breytt. Sjá [Teikna skýringarmynd úr texta](topic:text-to-diagram).
- **OLE-hlutir í DWG.** {{cmd:OLELIST}} telur upp OLE-hluti sem DWG ber og CadCraft getur ekki sett inn af sjálfu sér, og setur afrit af mynd þar sem þú segir til um. Sjá [Myndir](topic:pictures#objects-from-other-programs-ole).
- **Útreikningarnir þínir haldast með teikningunni.** Reiknablöð og hönnunarrök eru geymd í DWG ásamt flokkatöflunni.

### Teikna án sjónar

- Kveiktu á {{ui:Teikna án sjónar}} í {{ui:Stillingar}} (eða sláðu inn {{cmd:ACCESS}} og svaraðu `On`). CadCraft les upp hverja skipun og niðurstöðu í gegnum skjálesarann þinn, lýsir teikningunni og því sem er nálægt bendlinum, leyfir þér að færa bendilinn og velja punkta með lyklaborðinu, og spilar hljóð fyrir hverja smellifestingu og grip. Þar sem vafrinn þinn getur numið tal á tölvunni þinni er hægt að segja skipanir upphátt. Sjá [Teikna án sjónar](topic:draft-without-sight).

### Í öllum forritum

- **Tungumál.** 54 tungumál; tíu eru ný (litháíska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippínska, svahílí, úsbeska). Önnur tungumál en enska eru vélrænar drög þar til móðurmálsmaður hefur lesið þau.
- **Inntakstæki.** Snertiflötur, penni, 3D-mús, leikjastýring og MIDI-stýringar.
- **Línur á tækjastiku og eiginleikatafla.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur á tækjastiku}} býður upp á Vefja, 2 línur eða 1 lína í hinum forritunum. CadCraft geymir sína eigin stillingu í {{ui:Stillingar}} › {{ui:CadCraft}} (sjá [Línur á tækjastiku](topic:settings#toolbar-rows)). Sameiginlega eiginleikatöflan er í þremur öðrum forritum, ekki í CadCraft.
- **Vandamál, Í beinni og viðbætur.** Sameiginlegt vandamálaspjald sem varar í hverju forriti, Í beinni-sýn á hver er hvar í CadCraft Studio (sjá [Vinna saman á einni teikningu](topic:work-live)), og listi yfir viðbætur.
- **Tengdu gervigreindina þína.** Ein tenging frá CadCraft Studio við öll átta forritin, með lesstigi, tillögustigi eða breytingastigi fyrir hvert forrit og skráningu í einföldu máli á því sem aðstoðarmaðurinn gerði. CadCraft hefur enga gervigreind sjálft, og Spyrja í öllum forritum notar gervigreindina sem þú tengir.

## Lagað í 0.8.1

- **Eiginleikar sýndu 150 í stað 12'-6"** í teikningum í fetum og tommum. Reitir sem forritið les sjálft halda aftur texta sínum.
- **DWG-skrár þar sem flokkahlutinn var lesinn sem röng tegund** (GitHub cadcraft#5) opnast nú rétt.
- **Krosshárið sést ekki lengur á bak við sprettiglugga.**
- **Studio og pakkaútgáfurnar geta skipt um tungumál meðan forritið keyrir.** Áður voru þær aðeins á ensku. Ekki enn prófað á öllum stýrikerfum: segðu okkur ef tungumálið breytist ekki.
- **Spjaldtölvur í lóðréttri stöðu** gefa teikniflötinum laus hnitanetshæð, og blaðastillingin byrjar við 760 px eða minna.
- **STRETCH með krossandi glugga, og LIMITS,** voru tilkynnt í Studio 0.8.0 og voru þegar rétt í 0.8 vefútgáfunni; uppsetningarforrit þess sem tilkynnti var eldra. Studio 0.8.1 inniheldur þau.

## Ekki í þessari útgáfu ennþá

- **0.8 og 0.8.1 eru ekki kóðaundirrituð.** Windows gæti varað við (veldu {{ui:Meira upplýsingar}}, og síðan {{ui:Keyra samt}}); á Mac skaltu hægrismella á CadCraft Studio og velja {{ui:Opna}}. Útgáfur í verslunum eru í bið, og iPad- og iPhone-útgáfan var ekki smíðuð upp á nýtt fyrir 0.8.1.
- **Pennaskissur og ljósmyndir af skissum** hafa aðeins verið prófaðar á tilbúnum ljósmyndum og mús, ekki enn með alvöru penna, snertiskjá eða handskissu á pappír.
- **Teikna án sjónar** hefur verið prófað með sjálfvirkum athugunum, ekki enn með skjálesara eða blindum prófara.
- **Að deila smáatriðum** hefur ekki fengið prófun tveggja manna, og Team Cloud Plan-mappa sem skjalamappa er ekki smíðuð.
- **Sameining** virkar fyrir DWG- og DXF-skrár CadCraft; hið sama fyrir skrár hinna forritanna er ekki smíðað.
- **Afturköllun milli glugga:** CadCraft tilkynnir hvert lokið skref, en Studio hefur enn enga eina afturköllun fyrir öll forrit; hvert forrit afturkallar sín eigin skref.
- **OLE-hlutir DWG-skráar** eru geymdir en ekki teiknaðir á sínum stað.
- **Lestur prentstílatafla (CTB-skrár)** frá öðrum forritum er smíðaður en hefur ekki verið athugaður á skrá frá öðru forriti.
- **Tengdu gervigreindina þína:** tenging með einum smelli í Studio, hýsti tengillinn fyrir gervigreind í vafra, þinn eigin API-lykill inni í Studio og birti MCP-pakkinn eru ekki lofuð í þessari útgáfu.

Fyrir útgáfuna á undan þessari, sjá [Hvað er nýtt í 0.7](topic:whats-new-0-7).
