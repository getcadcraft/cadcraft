---
title: Še ni izdelano
summary: Česa ta različica programa CadCraft za risanje še ne zmore in kaj lahko danes naredite namesto tega.
keywords: manjka, omejitve, ctb, stb, slog izrisa, lastnosti, ucs, anotativno, dinamični blok, zlepek, pot razvoja, ni podprto, shranjevanje dwg, šrafura, raztegni, razpostavi, združi, matchprop, prekini, podaljšaj, tip črte, debelina črte, xref, oblaček, 3d, telesa, bulova operacija, večkratna vodilka, wipeout
from: 87e56521
---

CadCraft je v razvoju. Ta stran navaja, kaj trenutna različica ne zmore, da tega ne boste iskali. Pri vsaki postavki je zapisano, kaj storiti namesto tega.

## Datoteke in shranjevanje

| Še ni izdelano | Namesto tega danes |
|---|---|
| Preverjanje DWG, ustvarjenega s CadCraftom, v samem AutoCADu | Vsaka shranjena različica se prebere z bralniki DWG treh drugih programov in s programom CadCraft. Glejte [Kaj DWG ohrani in kaj spremeni](topic:files#what-a-dwg-keeps-and-changes). |
| Shranjevanje DXF, novejšega od različice 2000 | Shranite kot DXF 2000 ali kot DWG do AutoCAD 2018. |
| Shranjevanje čez odprto datoteko v brskalniku | Vsako shranjevanje prenese novo kopijo; če želite, staro datoteko zamenjajte sami. V programu CadCraft Studio {{key:Mod+S}} zapiše nazaj v datoteko, ki ste jo odprli. |
| Shranjevanje v oblak in sinhronizacija med računalniki | CadCraft shranjenih datotek še ne pošilja v oblak: datoteke DWG in DXF hranite v svojih mapah. V programu CadCraft Studio [Zgodovina](topic:history) prikaže različice risbe v oblaku, shranjene z drugod, in kopije vaših shranjevanj na tem računalniku. |
| Prekrivanja in urejanje povezane risbe na mestu | Risbo pripnite kot povezavo in jo po spremembi druge risbe ponovno naložite. Povezava ostane povezava, ko shranite kot DWG, {{cmd:XCLIP}} pa jo obreže. |
| Slike v DXF; wipeout, ki skriva, kar je pod njim | DXF ohrani sliko kot njen okvir z imenom datoteke; DWG jo ohrani kot sliko – glejte [Slike v risbi](topic:pictures). Wipeout se prikaže kot njegov okvir. |
| Urejanje večkratnih vodilk z ukrivljenimi vodilnimi črtami, z vodilnimi črtami na obeh straneh vsebine ali z blokom, ki je zasukan ali neenakomerno merjen | Narisane so tako, kot jih je narisal drugi program, in se premikajo kot ena celota. Večkratne vodilke z ravnimi vodilnimi črtami do enega mesta ter besedilo ali blok kot vsebina so urejljive ({{cmd:MLEADEREDIT}}). |
| V tabelah iz drugih programov: celica, ki vsebuje blok, oblikovanje besedila v celici, robovi in barve posameznih celic v tabeli DXF, tabela, razbita v stolpce | Tabela se odpre kot urejljiva tabela ({{cmd:TABLEDIT}}) in je prikazana tako, kot jo je narisal drugi program, dokler je ne uredite; potem jo CadCraft na novo nariše iz njenih celic: navadno besedilo, formule, kot so `=G3*H3` in `=Sum(I3:I9)`, poravnava in višine besedila. Celica z blokom je nato prazna. Neurejena tabela DWG se shrani nazaj s podatki, s katerimi je prišla. |
| Pravi objekt tabele v shranjeni datoteki DXF | DWG ohrani tabelo kot tabelo, ki jo lahko urejajo drugi programi. DXF jo ohrani kot blok, ki jo riše, s CadCraftovim lastnim zapisom: CadCraft jo ponovno odpre kot tabelo; drugi programi vidijo blok. Zrcaljena ali neenakomerno merjena tabela se tako shrani tudi v DWG. |
| Kopiranje in lepljenje z drugimi programi | Odložišče programa CadCraft deluje med risbami CadCraft in zavihki v istem brskalniku, ne z drugimi programi. Shranite kot DWG ali DXF in jo odprite tam. Glejte [Kopiraj, prilepi in podvoji](topic:copy-paste). |

## Risanje in urejanje

| Še ni izdelano | Namesto tega danes |
|---|---|
| Vzorci šrafur, ki jih CadCraft nima, in prelivanja z gradientom, natanko tako kot jih slikajo drugi programi | Odprte šrafure z vzorci, ki jih CadCraft nima, so prikazane kot ton. Prelivanje z gradientom ({{cmd:GRADIENT}}) je narisano na CadCraftov način za vsako vrsto: po vrsti podobno drugim programom, ne točka za točko. DWG 2004 in novejši ga ohranijo kot pravo šrafuro z gradientom; v datoteki DXF 2000 ali DWG 2000 ga bere samo CadCraft, drugi programi pa vidijo polno polnilo. Vzorci se naložijo iz datoteke `.pat`, šrafura pa je lahko povezana z robom in mu sledi: glejte [Šrafure in polnjena območja](topic:hatch). |
| Tipi črt z oblikami ali besedilom in debeline črt v shranjeni datoteki DXF R12 | Oblike in besedilo v tipu črte datoteke so izpuščeni iz njenih črtic; za ohranitev debelin črt shranite kot DWG. |
| Šrafure z vzorcem v shranjeni datoteki DXF | R12 nima šrafur: shranjene so kot njihovi obrisi. Za ohranitev vzorca shranite kot DWG. |
| Matrike, ki jih je naredil drug program ali jih lahko ta ureja; vrstice in nivoji v matrikah po poti in polarnih matrikah; matrika, ki sledi krivulji svoje poti | Matrika, narejena z ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; spremeni se z {{cmd:ARRAYEDIT}}), se shrani kot sklic na blok s številkami programa CadCraft: drugi programi jo prikažejo, premaknejo, izrišejo in razstavijo, ne morejo pa spremeniti njenih števil; matrika, narejena v drugem programu, se tu odpre kot navaden sklic na blok. Matrika po poti hrani kopijo svoje poti: urejanje krivulje pozneje elementov ne premakne. |
| Obrezani pogledni okni listov iz drugih programov in v druge programe | Pogledno okno, obrezano z {{cmd:VPCLIP}} ali narejeno z {{cmd:MVIEW}} Polygonal ali Object, se shrani z obrisom programa CadCraft: drugi programi ga odprejo kot pravokotnik okoli njega, pogledno okno, obrezano v drugem programu, pa se tu odpre kot njegov pravokotnik. DXF R12 ohrani samo pravokotnik. |
| {{cmd:STRETCH}} z mnogokotnim sekanjem | Uporabite eno ali več oken za sekanje. |
| {{cmd:PEDIT}} Edit vertex (po eno oglišče naenkrat v ukazni vrstici) | Ročice in brskalnik oglišč v podoknu Lastnosti (vsa oglišča, njihove širine in izbočenja). Preostali del PEDIT je izdelan: glejte [Zlepki in polilinije](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} in {{cmd:JOIN}} na elipsah in zlepkih | Z {{cmd:EXPLODE}} razstavite zlepek (ali ga obdelajte s {{cmd:PEDIT}}), da dobite polilinijo, s katero ti ukazi delujejo. |
| Zaobljenje in posnetje med ločnim odsekom polilinije in sosednjim odsekom; zaobljenje, ki v polilinijo združi črto | Z {{cmd:EXPLODE}} razstavite polilinijo in nato zaobljite posamezne dele. Lok zaobljenja se doda kot svoj objekt. |
| Prirezovanje in podaljševanje: možnost Project (3D) in podaljševanje loka na koncu polilinije | Prirežite v ravnini risbe; za konec loka razstavite polilinijo ali lok narišite znova. |
| Objekti OLE: vstavljanje, zagon ali urejanje; prikaz tistih v DWG, kjer jih datoteka postavi; slike metadatotek | Glejte [Slike](topic:pictures#objects-from-other-programs-ole). Objekti DXF se prikažejo kot njihova bitna slika ali kot označen okvir; objekti DWG se ohranijo, niso pa narisani na mestu (OLELIST jih našteje in postavi kopijo slike tja, kamor rečete). |
| Vnašanje oblikovnih kod (krepko, zloženi ulomki, barve po besedah) v odstavčnem besedilu; pisave, ki niso ena pisava v slogu Helvetica; stolpci | Oblikovanje, ki je prišlo v datoteki, se ohrani, nariše in shrani (glejte Besedilo); novo odstavčno besedilo ima eno višino in barvo. |
| Odstavčno besedilo, urejeno pri njegovem zasuku | Urejevalnik se odpre vodoravno; besedilo ohrani svoj zasuk. |
| Večkratne vodilke, shranjene kot objekti večkratnih vodilk v DXF | DWG jih ohrani kot večkratne vodilke z vsako vodilno črto in blokom kot vsebino; DXF ohrani to, kar narišejo (črte, puščice ter besedilo ali blok). |
| V tabelah ({{cmd:TABLE}}): besedilo, ki se v celici prelama, tabele, razbite na dele, lastno slog besedila sloga tabele in barve po vrstah v pogovornem oknu, povezava s podatki na preglednično datoteko (`.xlsx`) ali taka, ki datoteko bere sama | Besedilo v celici se prelomi samo tam, kjer ga prelomite ({{key:Alt+Enter}}); razširite stolpec. {{cmd:DATALINK}} bere datoteko `.csv`, {{cmd:DATALINKUPDATE}} pa vas prosi, da izberete datoteko znova. {{cmd:DATAEXTRACTION}} in {{cmd:COUNTTABLE}} naredita tabelo, ki se ne spreminja sama od sebe: zaženite ju znova (sprotno štetje: {{cmd:BOMTABLE}}). |
| Definicije atributov, shranjene same zase v datoteki (zunaj bloka), atributi z več vrsticami | Pred shranjevanjem definicije atributov dajte v blok: same zase se shranijo kot besedilo, ki prikazuje oznako. |
| Shranjena stanja slojev (shranjevanje in obnavljanje, kateri sloji so vklopljeni) | Uporabite {{cmd:LAYISO}} / {{cmd:LAYUNISO}} ali sloje vklopljajte in izklopljajte ročno. |
| Izbiranje z mnogokotnikom okna in sekanja ter shranjeni filtri izbora | Ograja (`F`), Okno, Sekanje, Odstrani (`R`), {{cmd:QSELECT}} za pravilo. |

## Podokno Lastnosti

| Še ni izdelano | Namesto tega danes |
|---|---|
| Izbira prilagajanja (Fit) ter vodoravni položaj besedila in besedilo pod črto pri kotah, ki niso linearne ali poravnane | Ohranjeni so na objektu, prikazani v Lastnostih in shranjeni; CadCraft besedilo postavi po svojem pravilu. |
| Materiali, ki jih vidijo drugi programi | Shranjena datoteka ohrani ime materiala za CadCraft; drugi programi prikažejo material sloja. |
| Prosojnost v datotekah DWG 2000 in DXF | Drugi programi te objekte prikažejo polno; CadCraft prosojnost ohrani. Za vse shranite kot DWG 2004 ali novejši. |
| Povezava šrafure, narejena v drugem programu | CadCraft shrani svojo povezavo v datotekah DWG in DXF 2000; povezave, narejene v drugih programih, se ne berejo. Uporabite `HATCHEDIT` in Povezava: glejte [Šrafure in polnjena območja](topic:hatch). |
| Koordinate v Lastnostih v UCS | Lastnosti prikažejo svetovne koordinate; vrstica stanja in {{cmd:ID}} prikažeta koordinate UCS. Glejte [Zasukajte pogled in uporabite svoje koordinate](topic:ucs-and-turned-view). |
| Ločen položaj anotativnega objekta pri vsakem njegovem merilu; branje zapisov po merilih, ki jih hranijo drugi programi | Anotativno besedilo ali kota hrani seznam meril ({{cmd:OBJECTSCALE}}), vsak pogledni okno pa ga prikaže v velikosti za svoje merilo, na istem mestu. Seznam je shranjen kot lastni podatek programa CadCraft: drugi program vidi objekt pri enem merilu, za katerega je določen, seznam, narejen v drugem programu, pa se ne bere. Glejte [Enote, listi in merila](topic:units-papers-scales#annotate-by-scale). |
| Spreminjanje razdalj, kotov ali zrcaljenj dinamičnega bloka; dinamični bloki, ki ostanejo dinamični, ko shranite v drugo različico DWG ali kot DXF | Preklopite njegovo stanje vidnosti v Lastnosti › {{ui:Po meri}}; druge vrednosti so tam prikazane samo za branje. Ostane dinamičen, če ga shranite kot DWG v različico, v kateri je prišla risba. Glejte [Dinamični bloki](topic:dynamic-blocks). |
| Toleranca prileganja zlepka, stopnja zlepka 6 in višja, 3D zlepki | Prilagajanje in kontrolne točke, stopnje od 1 do 5 in uteži so izdelane: glejte [Zlepki in polilinije](topic:splines). Višina zlepka (Z) se ne ohrani. |

## Pripomočki za natančnost

| Še ni izdelano | Namesto tega danes |
|---|---|
| Sledenje točkam čez ukaze in pogovorno okno z nastavitvami sledenja (relativni polarni koti, dodatni koti) | {{cmd:POLARANG}} nastavi korak; točke pridobite znova v naslednjem ukazu. |
| Lovljenje na mrežo | Vnesite koordinate; mreža je samo vizualni vodnik. |
| Možnosti Lok in Dolžina pri izbiranju vogalov površine ter MEASUREGEOM Volume | Narišite obris z {{cmd:PLINE}} (vključno z loki), nato {{cmd:AREA}} `O`. |
| Dinamični vnos za ročice in njegov seznam možnosti (puščica navzdol) | Ukazna vrstica prikaže možnosti. |
| Koti v stopinjah, minutah in sekundah, gradih ali geodetskih azimutih | Vnesite decimalne stopinje: `30.5` za 30°30'. |
| Pogovorno okno upravitelja pogledov; poimenovani pogledi lista, ki se vrnejo na isti list | {{cmd:NAMEDVIEW}} našteje in obnovi poglede. Shranjena datoteka jih ohrani, pogledi lista pa se vrnejo na prvi list. |

## Listi, kote in tiskanje

| Še ni izdelano | Namesto tega danes |
|---|---|
| Polja za merilo pogleda, poimenovani objekt, kot sta sloj ali blok, hiperpovezava in polja nabora listov razen številke in imena lista; polja, zapisana kot polja objektov, ki jih drugi programi posodabljajo | {{cmd:FIELD}} ima datum, ime datoteke, številko in ime lista ter število, lastnosti risbe ({{cmd:DWGPROPS}}), ploščino, dolžino in druge lastnosti objekta ter formule v besedilu, atributih in celicah tabel. Drug program prikaže polje CadCraft kot besedilo, ki ga je nazadnje prebral; CadCraft bere datum, ime datoteke, lastnost, list in izraze drugih programov, druge vrste pa pusti kot besedilo. Merilo pogleda vpišete ročno. |
| Shranjevanje, kateri slog kot je trenutni; besedilo kote, povlečeno na prosto mesto | Risba se odpre s trenutnim slogom Standard. Besedilo sedi na merilni črti (DIMTEDIT Left / Right / Center). Glejte [Nastavitev velikosti kot](topic:dimension-settings). |
| Urejljive dvovrstične kotne kote iz odprtih datotek, ki jih CadCraft ne zna razbrati | Prikazane so tako, kot so narisane v datoteki. Kote z ordinatami, dolžino loka in zlomljenim polmerom se odprejo kot kote, ki jih lahko urejate. |
| Preverjanje bralnika CTB proti datoteki iz drugega programa (izdelan je po objavljenem opisu), poimenovani slogi izrisa (STB), raztrosni vzorec (dither), številke peres, sivine iz CTB in prilagajanje tipa črte v slogu izrisa | Naredite tabelo v {{ui:Tabele slogov izrisa}} (barva, siva, črnilo, debelina črte, tip črte, konec in spoj črte ter slog polnila za vsako barvo): glejte [Tabele slogov izrisa](topic:plot-pdf#plot-style-tables). |
| Nastavitve strani | Izberite papir, merilo in slog izrisa v pogovornem oknu {{ui:Izris v PDF}}; list ohrani svoj slog izrisa. |
| Hindi in drugi zapisi, ki v PDF potrebujejo zapleteno oblikovanje, ter redki ideogrami (evropske pisave, cirilica, grščina, hebrejščina, arabščina, perzijščina, urdujščina, tajščina, kitajščina, japonščina in korejščina) | Natisnejo se kot „?“. |
| Besedilo v arabski pisavi ter v kitajščini, japonščini ali korejščini v istem izrisanem PDF | Izris nosi eno pisavo: ena od obeh pisav se natisne kot „?“. |
| Izrecne oznake smeri v besedilu (vdelave, prepisi, izolati) | Prezrte so: vsaka vrstica se uredi samo po svojih črkah. |
| Slike znotraj pripete strani PDF v izrisu | Črte, polnila in besedilo strani se natisnejo. Stran, ki je samo slika, se vstavi z {{cmd:SCANATTACH}}, slike pa se natisnejo. Glejte [Podlage PDF](topic:pdf-underlay#plot-and-save). |
| Pošiljanje posla laserju iz programa CadCraft Studio (Studio nima Web Serial) | Shranite G-kodo in jo pošljite s programom za svoj laser ali pa jo pošljite iz Chroma ali Edgea. Glejte [Pošljite risbo laserju](topic:laser-cutting#send-from-the-browser). |

## Omejitve in parametri

| Še ni izdelano | Namesto tega danes |
|---|---|
| Omejitve na listih, v blokih, na elipsah, zlepkih ali besedilu | Omejite na zavihku {{ui:Model}}, na črtah, polilinijah, krožnicah, lokih in točkah. |
| Gladko (G2) in neposredno omejevanje izbočenja loka polilinije | Tangenta in enakost; odsek loka sledi svojima koncema. |
| Referenčne (vodene) dimenzijske omejitve in `3Point` v {{cmd:DCANGULAR}} | Navadna kota (DIMLINEAR …) prikaže vrednost, ne da bi jo vodila. |
| Dimenzijske omejitve fiksne velikosti na papirju in njihovo izrisovanje | Prikažejo se samo na zaslonu; za izris dodajte navadne kote. |
| Omejitve, ohranjene pri EXPLODE, BREAK, JOIN in drugih ukazih, ki ustvarjajo nove objekte, ter na prirezanih polilinijah | Omejite jih znova (AUTOCONSTRAIN pomaga). {{cmd:MIRROR}} in {{cmd:TRIM}} črt, lokov in krožnic jih ohranita. |
| Projektne tabele (konfiguracije) v CadCraftu | Spremenite parametre v podoknu. |
| Preizkušen obhod s SolidWorks | Pred uporabo preverite skico, ki jo naredi makro. |

## 3D

| Še ni izdelano | Namesto tega danes |
|---|---|
| Zaobljenja, posnetja, lupine in prehodi (loft); potegovanje po poti, ki se dviga (3D poti) | Iztisnite obrise z loki, potisnite in povlecite ploskve, zavrtite in potegnite po ravnih poteh. |
| Iztiskanje v drugo smer kot navzgor | Narišite obliko na tla in jo iztisnite navzgor ali navzdol (če želite, s pokončnostjo ali po poti); telo nato zavrtite. |
| Višina in debelina 2D objektov | Risba leži na tleh (višina 0) na zavihku 3D. |
| Urejanje teles, površin in teles iz drugih programov; prikaz tistih v blokih; njihove ploskve na potegnjenih, prehodnih ali drugih prostih površinah; mreže polifaces in poligonske mreže | Telesa v prostoru modela se na zavihku 3D prikažejo, kot so, in se v DWG shranijo nazaj nespremenjena; kar ni narisano, je navedeno, ko se zavihek 3D odpre. Mreže zahtevajte kot 3D ploskve v prostoru modela. Glejte [Telesa iz drugih programov](topic:3d-solids#solids-from-other-programs). |
| Kopiranje in lepljenje teles | Na zavihku 3D uporabite {{cmd:COPY}}. Odložišče hrani samo 2D objekte. |
| Prerezi, pogledi, ki sledijo poznejšim spremembam teles, in osenčena telesa na izrisanih listih | {{cmd:VIEWBASE}} postavi ploske poglede (posnetek); po spremembi teles ga zaženite znova. |
| Materiali, teksture in nastavitve osvetlitve | Vizualni slogi: osenčeno, robovi, skrite črte, žični model, rentgen. |
| Izris kartnih slojev, na pogledih listov in na zavihku 3D; slike iz datotek, shranjenih z risbo; lokacija risbe, zapisana za druge programe v DWG 2000–2007 in DXF R12 | Kartni sloji se na zaslonu prikažejo pod prostorom modela; sistem in seznam slojev se shranita z risbo: glejte [Kartni sloji pod risbo](topic:map-layers). |
| Posnetki E57 z več kot 6 milijoni točk ali 512 MB, lastne datoteke proizvajalcev skenerjev (RCP, RCS, FLS, LGS, TZF, ZFS), oblak točk, shranjen z risbo ali izrisan, prijemanje na oblak na zavihku 3D, navpični (prerezni) rezi na zavihku Model | Veliki posnetki ali posnetki proizvajalcev izvozite kot LAS ali LAZ ([Oblike oblakov točk](topic:point-cloud-formats)); oblak ob vsakem odpiranju risbe znova pripnite; sledite iz tlorisnega reza na zavihku Model: glejte [Sledenje dejanskih črt nad oblakom točk](topic:point-clouds). |
| Registracija posnetkov: samodejno iskanje tarč (krogel, šahovnic) v posnetku, sočasno reševanje vseh posnetkov (prilagajanje snopa), merilo, registracija proti modelu | Izberite ujemajoče se točke ali vpišite koordinate tarč, nato izboljšajte en posnetek naenkrat z ICP: glejte [Registracija več posnetkov v enega](topic:register-scans). |

## Rutine in prilagajanje

| Še ni izdelano | Namesto tega danes |
|---|---|
| Prevedeni ali zaščiteni LISP (.fas, .vlx), izvorni programi (.arx, .crx, .dbx) in VBA (.dvb) | Naložite izvorno kodo rutine `.lsp` z {{cmd:APPLOAD}}. |
| LISP-ov `grread`, reaktorji (`vlr-…`), funkcije krivulj (`vlax-curve-…`), slovarji in razširjeni podatki ter `acet-…` iz Express Tools | Preostali jezik deluje: glejte [Zaženite rutine LISP](topic:run-lisp). Ukazna vrstica pri rutini imenuje manjkajočo funkcijo, ko do nje pride. |
| Slike in diapozitivi v pogovornem oknu rutine | Prikažejo se kot prazni okvirji; ostali del pogovornega okna deluje. |
| CraftScript (.craft), Lua in Python v programu CadCraft | Zaženite jih v delovnem okolju Script programa PartCraft. |
| Seznami slojev, barv in tipov črt v slogih traku | Uporabite podokno {{ui:Sloji}} in {{ui:Lastnosti}}. |
| Zagonski paket in bližnjice, shranjene na vašem računalniku ali sinhronizirane | Shranjene so v tem brskalniku; namizna aplikacija in storitev v oblaku ju bosta hranili za vas. V programu Studio se `acad.lsp` in `acaddoc.lsp` prebereta iz podporne mape, ki jo izberete (Naloži aplikacije). |

## Pomoč

Pomoč opisuje to različico. Ko je nekaj dodano, se premakne s te strani v vodiče.
