---
title: Kaj je novega v 0.8 in 0.8.1
summary: Duh, ki dokonča vašo risbo, skice s peresom in fotografije skic, pretvorjene v geometrijo, listi, ki se sami razporedijo, podrobnosti, ponujene med risanjem, GRIDMOVE in AUTODIM, oznake, datoteke, primerne za združevanje, rdeči popravki, pretvorjeni v revizije, risanje brez vida, omejitve risbe, smeri, pisave SHX, diagrami iz besedila in popravki v 0.8.1.
keywords: kaj je novega, obvestila o izdaji, dnevnik sprememb, spremembe, 0.8, 0.8.1, različica, nove funkcije, samodokončanje, duh, tabulator, sketchfix, photosketch, autosheet, podrobnosti, gridmove, autodim, oznake, rdeči popravki, združevanje, git, fossil, dostop, risanje brez vida, bralnik zaslona, omejitve, smeri, aunits, shx, diagram, ole, zgodovina, primerjava, z besedami, lastnosti, čevlji in palci, raztegni, jeziki, vhodne naprave, težave, v živo, pomočniki
from: 9dd82db5
---

To je, kar se je spremenilo v CadCraftu 0.8 in 0.8.1 v primerjavi z 0.7. Različica 0.8 (1. novembra 2026) dodaja pomagala za risanje, ki delujejo iz vaše risbe, po pravilih na vašem računalniku in brez modela, različica 0.8.1 (2. novembra 2026) pa popravlja napake, prijavljene po njej.

## Novo

### Risba, ki dokonča vašo misel

- **Duh pokaže, kaj pride naprej.** Ko nič ne teče, siv črtkan duh pokaže, kaj pravijo vzorci vaše risbe: naslednji steber v istem razmiku, naslednjo stopnico stopnišča, manjkajočo steno sobe. Pritisnite {{key:Tab}}, da ga narišete kot en korak razveljavitve, ali {{key:Esc}}, da ga zavrnete. Gleda le na najnovejše objekte, zato ostane gladek na veliki risbi. Izklopite ga v {{ui:Nastavitve}} › {{ui:CadCraft}} ali z {{cmd:AUTOCOMPLETE}} `Off`.
- **Naslednja točka med risanjem črte.** Med {{cmd:LINE}} ali {{cmd:PLINE}} je duh naslednja točka: naslednji korak stopnice, četrto oglišče pravokotnika ali točka, ki ga zaključi. Približajte kazalec in pritisnite {{key:Tab}}, kot bi kliknili tam.
- **Skice s peresom postanejo natančna geometrija.** {{cmd:SKETCHFIX}}: narišite grobe poteze s peresom, miško ali prstom in vsaka postane čista črta, krožnica, lok, pravokotnik ali polilinija, prilepljena na to, kar je že narisano. Glejte [Skicirajte s peresom in dobite natančno geometrijo](topic:sketch-with-a-pen).
- **Fotografija skice postane risba.** {{cmd:PHOTOSKETCH}} (`PSK`) najde papir na fotografiji, poravna perspektivo, uporabi velikost papirja in merilo, ki ju vnesete, ter prenese črte peresa na sloj za vsako barvo peresa. Napisi se ne prenesejo.
- **Kotirajte po pravilih.** {{cmd:AUTODIM}} (`ADIM`) naredi verige kot vzdolž stranic, ki jih izberete, skupno velikost, širine odprtin, premere lukenj in z `Grid` razmik mreže. Nikoli ne ponovi kote, ki je že tam.
- **Premaknite mrežno črto, in komplet sledi.** {{cmd:GRIDMOVE}} (`GM`): stene, ki končajo na mrežni črti, se raztegnejo z njo, stene vzdolž nje, stebri, njen balon in oznaka se premaknejo, kote nanjo pa izmerijo nov razmik. En korak razveljavitve.

### Listi, podrobnosti in oznake

- **Listi, ki se sami razporedijo.** {{cmd:AUTOSHEET}} vzame vaše poimenovane poglede (ali ločene dele modela), izbere velikost papirja in standardno merilo ter postavi poglede na nove liste z glavo risbe in napisom z imenom in merilom. Vse ostane urejljivo. Glejte [Razporedite liste zame](topic:lay-out-sheets-for-me).
- **Podrobnosti vašega podjetja, ponujene med risanjem.** {{cmd:DETAILS}} (`DET`) hrani vaše lastne podrobnostne bloke. Ko se izbrano ujema z enim po besedah na njegovih slojih, imenih blokov in opombah, vrstica stanja to pove; izberite ga in ga postavite. {{cmd:DETAILS}} › Deli shrani vaš seznam v mapo Dokumenti in prinese, kar je dodala vaša ekipa. Nastavitve ponudbe izklopijo.
- **Oznake na blokih.** {{cmd:TAGS}} določi oznako (njeno vrsto, vrednosti, ki jih lahko zavzame, bloke, na katere se nanaša), jo nastavi na izbrane sklice na bloke in jih našteje kot razpredelnico, ki jo lahko shranite kot CSV. Definicije se hranijo v DWG. Glejte [Oznake](topic:tags).
- **Meje risbe.** {{cmd:LIMITS}} določi pravokotnik za risbo: mreža ga zapolni, povečava „Vse“ pa ga prikaže. Meje so prikazane kot obris in shranjene v DWG in DXF, skupaj z mejami papirja. Glejte [Nastavite meje risbe](topic:drawing-limits).

### Delo z drugimi ljudmi in drugimi programi

- **Pretvorite označbo v revizijo.** {{cmd:REDLINE}} prebere paket, ki ga zapiše MarkupCraft, in našteje vsako spremembo. Sprejmite ali zavrnite vsako z opombo; sprejete dobijo revizijski oblak in dnevnik revizij v enem koraku razveljavitve, shranite pa datoteko odgovorov, ki zapre označbe v MarkupCraftu. Glejte [Pretvorite označbo v revizijo](topic:redline-to-revision).
- **Risbe, ki jih git in Fossil lahko združita.** Z {{ui:Datoteke, primerne za združevanje}} vklopljeno v {{ui:Nastavitve}} › {{ui:CadCraft}} dobi vsak objekt ključ, ki se nikoli ne spremeni (datoteke so okoli 10 odstotkov večje). `cadcraft merge base ours theirs` nato združi urejanja dveh oseb enega objekta DWG ali DXF po objektih in poroča samo tam, kjer sta obe spremenili isto stvar. Glejte [Združite urejanja dveh oseb ene risbe](topic:merge-drawings).
- **Kaj se je spremenilo, z besedami.** V {{ui:Zgodovina}} daje Primerjaj preprost seznam: kje so se stvari spremenile, kako velika so ta mesta, kaj je bilo dodano, odstranjeno ali spremenjeno ter besedilo, ki je bilo urejeno. Glejte [Povejte z besedami, kaj se je spremenilo](topic:changes-in-words).
- **Smeri in koti.** Vpišite smer kot geodetsko smer, na primer N45°23'30"E, ali v stopinjah, minutah in sekundah, kjerkoli se sprašuje po kotu; AUNITS določi, kako so koti prikazani. Glejte [Vnos in prikaz smeri in kotov](topic:bearings-and-angles).
- **Vaše lastne pisave SHX.** Dajte CadCraftu mapo pisav SHX; sloge besedila, ki jih poimenujejo, bodo narisani v njih, na zaslonu in v izrisih. Glejte [Risanje besedila v vaših pisavah SHX](topic:shx-fonts).
- **Diagram iz besedila.** {{cmd:DIAGRAM}} prebere potek v Mermaidu, diagram komponent PlantUML, D2 ali seznam od–do in nariše bloke ter povezave, ki jih lahko urejate. Glejte [Narišite diagram iz besedila](topic:text-to-diagram).
- **Predmeti OLE v DWG.** {{cmd:OLELIST}} našteje predmete OLE, ki jih DWG nosi in jih CadCraft ne more postaviti sam, ter postavi kopijo slike tja, kjer določite. Glejte [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši izračuni ostanejo z risbo.** Računski listi in razlogi za zasnovo se hranijo v DWG s tabelo razredov.

### Risanje brez vida

- Vklopite {{ui:Risanje brez vida}} v {{ui:Nastavitve}} (ali vnesite {{cmd:ACCESS}} in odgovorite `On`). CadCraft izgovori vsak ukaz in rezultat prek vašega bralnika zaslona, opiše risbo in kaj je blizu kazalca, dovoli premikanje kazalca in izbiro točk s tipkovnico ter predvaja zvok za vsako lovljenje in ročico. Kjer lahko vaš brskalnik prepozna govor na vašem računalniku, je mogoče ukaze izgovarjati. Glejte [Risanje brez vida](topic:draft-without-sight).

### V vsaki aplikaciji

- **Jeziki.** 54 jezikov; deset je novih (litovščina, latvijščina, bosanščina, marathi, telugu, albanščina, afrikanščina, filipinščina, svahili, uzbeščina). Jeziki poleg angleščine so strojni osnutki, dokler jih ne prebere naravni govorec.
- **Vhodne naprave.** Sledilna ploščica, pero, 3D miška, igralni krmilnik in kontrole MIDI.
- **Vrstice orodne vrstice in mreža lastnosti.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ponuja Prelomi, 2 vrstici ali 1 vrstico v drugih aplikacijah. CadCraft ohrani svojo nastavitev v {{ui:Nastavitve}} › {{ui:CadCraft}} (glejte [Vrstice orodne vrstice](topic:settings#toolbar-rows)). Skupna mreža lastnosti je v treh drugih aplikacijah, ne v CadCraftu.
- **Težave, V živo in dodatki.** Skupna plošča Težave, ki opozarja v vsaki aplikaciji, pogled V živo, kdo je kje v CadCraft Studiu (glejte [Delo na eni risbi skupaj](topic:work-live)), in seznam dodatkov.
- **Povežite svojo UI.** Ena povezava iz CadCraft Studia do vseh osmih aplikacij z ravnjo samo za branje, predlaganje ali urejanje za vsako aplikacijo ter dnevnikom v preprostih besedah, kaj je pomočnik naredil. CadCraft nima lastne UI, „Vprašaj“ v vsaki aplikaciji pa uporabi UI, ki jo povežete.

## Popravljeno v 0.8.1

- **Lastnosti so pokazale 150 namesto 12'-6"** v risbah v čevljih in palcih. Polja, ki jih aplikacija bere sama, spet ohranijo svoje besedilo.
- **Datoteke DWG, katerih razdelek razredov je bil prebran kot napačna vrsta** (GitHub cadcraft#5), se zdaj pravilno odprejo.
- **Križec se ne pokaže več za pojavnimi okni.**
- **Studio in pakirane izdaje lahko menjajo jezik med delovanjem.** Prej so bile samo v angleščini. Še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.
- **Tablični računalniki v pokončni postavitvi** dajo prostor mreže platnu, način listov pa se začne pri 760 px ali manj.
- **STRETCH z oknom sekanja in LIMITS** sta bila prijavljena v Studiu 0.8.0, v spletni gradnji 0.8 pa sta bila že pravilna; namestitveni program prijavitelja je bil starejši. Studio 0.8.1 ju vsebuje.

## Še ni v tej različici

- **Različici 0.8 in 0.8.1 nista podpisani s kodo.** Windows lahko opozori (izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}); na Macu z desnim klikom kliknite CadCraft Studio in izberite {{ui:Odpri}}. Izdaje za trgovine so zadržane, gradnja za iPad in iPhone pa ni bila ponovno zgrajena za 0.8.1.
- **Skice s peresom in fotografije skic** so bile preizkušene le na izmišljenih fotografijah in z miško, še ne s pravim peresom, zaslonom na dotik ali ročno skico na papirju.
- **Risanje brez vida** je bilo preizkušeno z avtomatskimi preverjanji, še ne z bralnikom zaslona ali slepim preizkuševalcem.
- **Deljenje podrobnosti** ni bilo preverjeno z dvema osebama, mapa Team Cloud Plan kot mapa Dokumenti pa ni zgrajena.
- **Združevanje** deluje za datoteke DWG in DXF CadCraft; za datoteke drugih aplikacij ni zgrajeno.
- **Razveljavitev med okni:** CadCraft poroča vsak končan korak, vendar Studio še nima enotne Razveljavi za vse aplikacije; vsaka aplikacija razveljavi svoje korake.
- **Predmeti OLE v DWG** se ohranijo, vendar se ne narišejo na mestu.
- **Branje tabel slogov izrisa (CTB datoteke)** iz drugih programov je zgrajeno, vendar ni preverjeno z datoteko iz drugega programa.
- **Povežite svojo UI:** povezava z enim klikom v Studiu, gostujoči priključek za UI v brskalniku, lasten ključ API v Studiu in objavljeni paket MCP v tej izdaji niso obljubljeni.

Za različico pred to glejte [Kaj je novega v 0.7](topic:whats-new-0-7).
