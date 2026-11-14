---
title: Datoteke: kaj se odpre, kaj se shrani
summary: Oblike, ki jih CadCraft odpre, shrani in izvozi, kaj se ohrani ali pretvori ter kam datoteke gredo.
keywords: xclip, clip, meja xclip, vezava obrezanega, dwg, dxf, pdf, r12, odpri, shrani, izvozi, uvozi, oblike, pretvorba, prenos, saveas, dxfout, shrani kot, shranjevanje dwg, oblika, qsave, xref, xattach, povezana risba, zunanja referenca, vezava, ponovno naloži, odpni
from: 6d68b34e
---

## Na prvi pogled

| Oblika | Odpri | Shrani | Opombe |
|---|---|---|---|
| DXF (besedilni, katera koli različica) | Da | Da, kot DXF R12 ali DXF 2000 | Binarni DXF je zavrnjen: najprej ga shranite kot besedilni DXF. |
| DWG | Da | Da, kot DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ali 2018) | Bere in zapisuje lastna knjižnica DWG v CadCraftu (datoteke AutoCAD R13 do 2018). Vaš DWG se nikoli ne spremeni. Poškodovane datoteke ali različice, ki jih bralnik ne podpira, so zavrnjene s sporočilom. |
| PDF | Prinese stran kot podlago ali kot objekte ([PDF podlage](topic:pdf-underlay)) | Da, z izrisom | Vektorski PDF lista ali modela pri merilu. |

Vsaka risba, ki jo odprete (ali začnete z {{ui:Nova}}), dobi svoj zavihek nad risalnim območjem; nedotaknjena nova risba se uporabi namesto dodajanja zavihka. Kliknite zavihek za preklop, njegov {{ui:×}} za zapiranje (CadCraft pred tem vpraša, če so neshranjene spremembe), ali razporedite odprte risbe druga ob drugi: glejte [Razdelitev zaslona](topic:split-screen).

## Odpiranje risbe

- Pritisnite {{key:Mod+O}}, kliknite {{ui:Odpri}} ali vnesite `OPEN` in nato izberite datoteko.
- Ali povlecite datoteko `.dwg` ali `.dxf` na risalno območje.

Datoteka se prebere v vašem brskalniku. Nikamor se ne naloži. Zgodovina pove, koliko objektov in slojev je prišlo noter in koliko časa je trajalo, odsek {{ui:Risba}} v levi plošči pa prikaže obliko, na primer „DWG 2018 (AC1032)“.

Bralnik DWG je del CadCraft in se naloži ob prvem DWG, ki ga odprete po nalaganju strani (nekaj sto KB), zato ni ločenega prenosa, na katerega bi bilo treba čakati. Datoteko bere v ozadju, zato stran med odpiranjem velike datoteke DWG še vedno odziva.

### Kaj pride noter

- Črte, loki, krožnice, polilinije (z ločnimi segmenti), elipse, točke, besedilo in večvrstično besedilo, telesa, šrafure (standardni vzorci so narisani kot njihove črte, drugi kot ravna barva), sklici na bloke z njihovimi atributi (vrednosti, ki jih lahko urejate; glejte [Atributi blokov](topic:attributes)), kote in liste z njihovimi poglednimi okni.
- Zlepki pridejo kot zlepki (stopnja, kontrolne točke, vozli, uteži, točke prileganja); glejte [Zlepki in polilinije](topic:splines).
- Večkratne vodilke z eno vodilno črto in besedilom pridejo kot večkratne vodilke CadCraft, ki jih lahko urejate (glejte {{cmd:MLEADER}}). Druge (z blokom, več vodilnimi črtami ali krivimi črtami) so narisane tako, kot jih je narisal drug program, in se premikajo kot ena celota; zgodovina pove, koliko jih je.
- Slike (images) so prikazane kot okvir z imenom slikovne datoteke, dokler CadCraftu ne date datoteke z {{cmd:IMAGE}}: glejte [Slike v risbi](topic:pictures#show-the-pictures-a-dwg-uses). Zakritja (wipeouts) so prikazana kot njihov okvir, vsebina pod njimi pa ostane vidna.
- Tabele v DWG pridejo tako, kot jih je narisal drug program.
- 3D ploskve v prostoru modela pridejo na zavihku {{ui:3D}}, ne kot 2D objekti; tako tudi tiste v blokih, enkrat za vsak sklic na blok v modelu. V bloku in na listu so prav tako narisane kot ploske obrisi. Glejte [Model v 3D](topic:3d-solids).
- Sloji ohranijo barvo, vklopljeno, zamrznjeno, zaklenjeno in nastavitve izrisa. DEFPOINTS se nikoli ne izriše.
- Kote postanejo prave, urejljive kote CadCraft, kjer je mogoče prebrati njihove točke. Najprej so prikazane točno tako, kot jih je narisal drug program; takoj ko spremenite eno, jo CadCraft nariše na novo v svojem slogu.
- Vsaka postavitev postane zavihek lista. V drugem programu ima vsaka postavitev skrit prvi pogledno okno, ki je sam list; CadCraft ga izpusti.

### Kaj še ne pride noter

Vse, česar CadCraft ne more narisati, se šteje, ne ugiba. Okno „O tej datoteki“ v levi plošči to našteje pod „Še ni prikazano:“, sledi vsaka vrsta objekta in koliko jih je. Tipični primeri so tabele v DXF, mreže in 3D telesa znotraj blokov. 3D telesa, območja (regions) in telesa v prostoru modela so prikazana na zavihku 3D (glejte [Model v 3D](topic:3d-solids#solids-from-other-programs)). Pogledna okna, zasukana v datoteki, so prikazana zasukana, kot tam, in ohranijo zasuk, ko shranite; enako velja za trenutni UCS, poimenovane UCS-je in zasukan pogled.

Besedilo je narisano v eni pisavi v slogu Helvetica. Oznaka, ki se v ožji pisavi izvornega programa prilega v eno vrstico, se lahko v CadCraftu prelomi v dve vrstici.

## Shranjevanje

Obstajajo tri načini shranjevanja. Vsak prenese kopijo.

- **Shrani**: pritisnite {{key:Mod+S}}, kliknite {{ui:Shrani}} ali vnesite `SAVE` (tudi `QSAVE`). Shrani v obliki risbe: DWG, če ste odprli DWG, DXF, če ste odprli DXF. DWG ohrani različico, s katero je prišel (datoteka 2018 se shrani kot 2018). Nova risba uporabi obliko in različico DWG, ki ste jo nazadnje izbrali v {{ui:Shrani kot}} v tem brskalniku; če ničesar niste izbrali, je DWG v obliki AutoCAD 2000.
- **Shrani kot**: pritisnite {{key:Mod+Shift+S}}, kliknite {{ui:Shrani kot}} ali vnesite `SAVEAS`. Pogovorno okno {{ui:Shrani kopijo kot}} ponuja {{ui:DWG}} s seznamom {{ui:Različica}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ali 2000), {{ui:DXF R12}} in {{ui:DXF 2000}}, vsakega z imenom datoteke, ki jo bo dal, ter trenutno obliko in različico risbe že izbrano. Kliknite {{ui:Shrani}}, da prenesete, ali {{ui:Prekliči}} (ali {{key:Esc}}), da ne shranite ničesar; zgodovina nato pove „Ni shranjeno.“ Vaša izbira ostane: {{key:Mod+S}} jo za to risbo uporablja od takrat naprej, nove risbe v tem brskalniku pa se začnejo z njo.
- **DXFOUT**: vnesite `DXFOUT`. Vedno prenese kopijo DXF R12, naslednji {{key:Mod+S}} pa še vedno shrani v obliki risbe.

Brskalnik prenese `<ime risbe>.dwg` ali `<ime risbe>.dxf`. Vsako shranjevanje je **nov prenos**; datoteka, ki ste jo odprli, se nikoli ne prepiše ali spremeni. Zgodovina to potrdi, na primer „Kopija shranjena kot Plan.dwg (DWG (AutoCAD 2018)). Vaša izvirna datoteka Plan.dxf je nespremenjena.“ Za DXF piše „(DXF R12, odpre se v katerem koli CAD programu)“. Vrstice pod tem navajajo vse, kar se je med postopkom spremenilo.

Ko CadCraft teče v namiznem programu, shranjevanje deluje kot v drugih namiznih programih: {{key:Mod+S}} zapiše risbo nazaj v datoteko, ki ste jo odprli, v njeni obliki in različici, zgodovina pa pove, kam je bila shranjena. {{ui:Shrani kot}} in izvozi prikažejo sistemsko pogovorno okno za shranjevanje, datoteka `.dwg`, `.dxf` ali `.ccsheets`, na katero dvakrat kliknete, pa se odpre v CadCraftu.

Za PDF shranite z izrisom (glejte spodaj).

## Kaj DWG ohrani in spremeni

CadCraft sam zapiše DWG v vašem brskalniku z isto knjižnico DWG, s katero bere. Različico izberite v {{ui:Shrani kot}}: oblika AutoCAD 2000 (datotečna različica AC1015) se odpre v največ programih, tudi starih; novejše oblike (2004, AC1018, do 2018, AC1032) ohranijo tudi prave barve. Nič se ne naloži, shranjevanje DWG pa deluje brez povezave.

Vsaka različica se preveri tako, da shranjene datoteke preberejo bralniki DWG treh drugih programov in sam CadCraft. Risba DWG iz CadCraft še ni bila odprta v samem AutoCADu.

### Kaj DWG ohrani

- Črte, loki, krožnice, elipse, točke in polilinije z ločnimi segmenti.
- Enovrstično besedilo z njegovo poravnavo in faktorjem širine.
- Večvrstično in prelomljeno besedilo kot večvrstično besedilo. Drug program ga ponovno prelomi pri isti širini.
- Barve objektov: po sloju, po bloku, 255 standardnih barv in prave barve v oblikah 2004 in novejših.
- Sloji z barvo, vrsto črte, debelino črte ter nastavitvami vklopljeno, zamrznjeno, zaklenjeno in izris; lastne vrste črt, debeline in merila vrst črt objektov, vzorci vrst črt ter merilo vrst črt risbe.
- Enote risbe in format dolžin (decimalno, čevlji in palci, ulomki …).
- Bloki z njihovo izhodiščno točko in definicijami atributov, vključno z nevidnimi, konstantnimi in prednastavljenimi.
- Sklici na bloke z njihovim merilom, zasukom in vrednostmi atributov.
- Polna polnila in vzorčne šrafure z njihovim vzorcem, merilom in kotom (lastne črte vzorca, tako da drugi programi narišejo iste črte kot CadCraft).
- Kote kot prave kote: drugi programi jih ponovno izmerijo, ko jih raztegnete. Vsaka ohrani svoje nastavitve (višino besedila, velikost puščice, decimalke, format dolžin) in svoje besedilo ter nosi narisano kopijo, ki jo ima vsaka kota DWG.
- Listi (postavitve): vsak list z velikostjo papirja in enotami, tem, kar je na njem narisano, ter svojimi pogleadnimi okni z pogledom in merilom.
- Poimenovani pogledi.
- Večkratne vodilke kot večkratne vodilke.
- Imena slojev in blokov, kot ste jih vnesli, z velikimi in malimi črkami. (DXF R12 jih zapiše z velikimi tiskanimi črkami.)

### Kaj DWG spremeni

Vsaka od teh sprememb je navedena v zgodovini po shranjevanju, kadar velja za vašo risbo.

| V CadCraftu | V shranjeni DWG |
|---|---|
| Prave barve (izbrane z izbirnikom barv), v obliki 2000 | Najbližja standardna barva: oblika 2000 ima le 255. Shranite v obliki 2004 ali novejši, da jih ohranite |
| Poimenovani pogledi lista | Pogledi v papirnem prostoru: DWG ne pove, kateremu listu pripadajo, zato pri ponovnem odpiranju pripadajo prvemu listu |
| Večvrstično besedilo s faktorjem širine | Običajna širina črk: v DWG se faktor širine uporablja le za enovrstično besedilo |
| Imena slojev ali blokov s znaki, ki jih DWG ne dovoli | Spremenjeno: ime iz povezane risbe, kot je `Base\|Walls`, postane `Base$0$Walls` (tako ga poimenuje vezava povezane risbe), drugi znaki pa postanejo `_` |

### Zakaj R12 in kaj se pretvori

Ko shranite kot DXF, CadCraft zapiše DXF R12, različico, ki jo lahko odpre vsak CAD program. Je starejša od nekaterih funkcij, zato se nekatere stvari zapišejo v preprostejši obliki:

| V CadCraftu | V shranjeni R12 datoteki |
|---|---|
| Večvrstično besedilo | En besedilni objekt na vrstico |
| Elipse | Polilinije, ki sledijo elipsi |
| Šrafure (iz odprtih datotek) | Samo njihovi obrisi |
| Prave barve (izbrane z izbirnikom barv) | Najbližja standardna barva |
| Debeline črt in lastna merila vrst črt objektov | Izpuščeno: R12 nima ničesar od tega (vrste črt so ohranjene) |
| Imena slojev in blokov | Zapisana z velikimi črkami; presledki in drugi znaki postanejo `_`, imena pa so skrajšana na 31 znakov („Title block“ postane `TITLE_BLOCK`) |
| Sloji, nastavljeni na neizris | Drugi programi jih bodo izrisali (CadCraft si nastavitev zapomni, ko ima risba list) |
| Kote | Prave kote s svojim narisanim blokom, zato jih drugi programi prikažejo tako, kot jih vidite |
| Večkratne vodilke | Črte, puščica in besedilo, ki jih narišejo |
| Poimenovani pogledi | Ohranjeni, z imeni z velikimi črkami; pogledi lista se vrnejo na prvi list |
| Več listov | Prvi list je papirni prostor, ki ga prikaže vsak program; ostali so ohranjeni kot bloki z imeni `CCLAYOUT_1`, `CCLAYOUT_2` … , ki jih CadCraft ob odpiranju datoteke spremeni nazaj v liste |

Zgodovina navede vsako od teh, ki velja za vašo risbo.

:::tip
Če boste na risbi delali več dni, jo shranite kot DXF in naslednjič odprite ta DXF. Vse, kar CadCraft lahko nariše, preživi ta krog, vključno s kotami, bloki in vsemi listi.
:::

## Povezane risbe (zunanje reference)

{{cmd:XATTACH}} (`XA`, ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Poveži risbo (xref)}}) poveže drugo DWG ali DXF: izberite datoteko, nato kliknite, kamor naj gre ({{key:Enter}} jo postavi na 0,0). Pride kot en blok z imenom po datoteki, pri pravem merilu, če imata risbi različni enoti. Njeni sloji in bloki ohranijo svoja imena z imenom povezave spredaj — `Plan|Walls`, `Plan|Door` — tako se nikoli ne pomešajo z vašimi: povezane sloje vklapljate in izklapljate, zamrzujete ali zaklepate kot svoje. Povezava je samo za branje: spremenite drugo risbo in jo ponovno naložite. Kar nastavite na slojih povezave (barva, vrsta črte, debelina, vklop/izklop, zamrznitev, zaklepanje, izris), se ohrani, ko jo ponovno naložite, ko shranite risbo kot DWG, medtem ko je povezava še povezava, in ko drugo risbo povezuje ta.

{{cmd:XREF}} (`XR`): `?` našteje povezave (naložene ali ne, katera datoteka, koliko sklicev); `A` pripne; `R` ponovno naloži eno iz njene datoteke (znova izberite datoteko: brskalnik sam ne more do vaših map); `B` jo veže (postane običajni bloki in sloji z imeni `Plan$0$Walls`); `D` jo odstrani (odstranijo se njeni sklici in sloji). Vsak je en korak razveljavitve.

{{cmd:XCLIP}} (`XC`) reže sklice blokov in povezave: izberite jih, `N` za novo mejo, nato `R` in dve oglišči ali `P` in točke mnogokotnika ({{key:Enter}} ga zaključi); `D` odstrani rez. Prikaže se in izriše samo to, kar je znotraj; rez se premakne s sklicem. DWG in DXF 2000 ohranjata reze; DXF R12 shrani sklic celega in to pove. Ko vežete povezavo, ki ima izrezane sklice, {{cmd:XREF}} `B` vpraša: `A` veže vse, `C` ohrani samo izrezani del vsakega sklica (črte in loki so prirezani na meji; besedila in gnezdeni bloki ostanejo, če je njihova vstavitvena točka znotraj).

Odprta risba lahko povezuje datoteke, ki jih CadCraft ne vidi: pove, koliko jih ni naloženih. Uporabite {{cmd:XREF}}, `R` in izberite vsako datoteko, da jih vidite.

Ob shranjevanju je naložena povezava **vezana** v datoteko (drugi programi vidijo običajne bloke in sloje z imeni `Plan$0$…`), zgodovina pa to pove. Povezava, ki ni naložena, ostane povezava na svojo datoteko, v DWG in DXF.

## Odpiranje v 3D

{{ui:Pogled}} › {{ui:Več}} › {{ui:Odpri v ModelCraft}} ({{cmd:OPENIN3D}}) odpre risbo v aplikaciji za 3D modeliranje v novem zavihku, kot DWG, brez nalaganja. Spremembe, narejene tam, ostanejo tam; shranite jih tam. Menijski element se prikaže le tam, kjer lahko ta aplikacija prevzame predano risbo.

## Izris PDF

Pritisnite {{key:Mod+P}}, kliknite {{ui:Izris}} ali vnesite `PLOT`. PDF se ustvari v brskalniku in prenese ali odpre v novem zavihku za tiskanje. Glejte [Izris v PDF](topic:plot-pdf).

## Kam gredo datoteke

Vsako shranjevanje in vsak izris je prenos, zato datoteke pristanejo, kjer brskalnik shranja prenose: običajno v mapi Prenosi. Če želite vsakič izbrati mapo, spremenite nastavitev prenosov v brskalniku; [Brskalniki in računalniki](common:browsers) pokaže, kje.

Nič, kar odprete ali shranite, ne pošljemo nam. Glejte [Kam gredo vaše datoteke](common:your-files).

## Projektne datoteke PLN in PLA

CadCraft odpre risbe DWG in DXF, ne lastnih datotek Archicada (`.pln`, `.pla`, `.tpl`, `.bpn`). Ko jo odprete, vam pove, kaj je. V Archicadu shranite poglede ali liste, ki jih potrebujete, kot DWG in jih odprite tukaj, ali izvozite model kot IFC in ga odprite v BimCraftu. Kjer lahko BimCraft prevzame datoteko, CadCraft ponudi {{ui:Odpri v BimCraftu}}.

## Če se stran zapre pred shranjevanjem

CadCraft hrani kopijo vsake risbe, ki jo spremenite, samo v tem brskalniku, kmalu potem, ko nehate urejati. Če se zavihek zapre, brskalnik se ustavi ali računalnik se znova zažene, preden shranite, CadCraft ob naslednjem zagonu vpraša **Obnovite svoje delo?**: {{ui:Obnovi}} odpre risbo znova, neshranjeno, v svojem zavihku. Shranjevanje risbe odstrani njeno kopijo. Glejte [Obnovitev dela](common:recover).

## Na spletu in brez povezave

Odpiranje, risanje, shranjevanje (DWG in DXF) in izris vse poteka na vašem računalniku, zato delujejo brez povezave, ko je CadCraft naložen.

Da uporabljate CadCraft brez kakršne koli povezave, kliknite {{ui:Shrani za delo brez povezave}} v vrstici na vrhu, dokler ste na spletu. Oznaka šteje navzgor („Shranjevanje 40 od 212“) in se konča pri „Pripravljeno za delo brez povezave“. Shranjena kopija vključuje bralnik DWG, skupaj približno 5 MB, zato **datoteke DWG se odprejo tudi brez povezave**, ko je shranjena. Gumb znova kliknite za {{ui:Shrani znova (pridobi najnovejšo različico)}} ali {{ui:Odstrani kopijo brez povezave}}. „Shranjevanje ni uspelo“ pomeni, da nekatere datoteke niso bile prenesene: preverite povezavo in kliknite za nov poskus. „Brez povezave ni na voljo“ pomeni, da to okno brskalnika ne more hraniti kopije (zasebna okna in nekateri upravljani računalniki).

Brez shranjene kopije se bralnik DWG naloži ob prvem odprtju DWG po nalaganju strani, zato odpiranje DWG brez povezave lahko ne uspe; datotek DXF nikoli ne potrebujejo. Ne osvežujte strani brez povezave, razen če je CadCraft shranjen.

Podrobnosti glejte v [Delo brez povezave](common:offline).

:::offline
Zdaj ste brez povezave. Risbe se shranjujejo kot DWG ali DXF in se normalno izrisujejo, datoteke DXF se odprejo. Datoteke DWG se odprejo, če CadCraft prikaže „Pripravljeno za delo brez povezave“ ali če je bralnik DWG že naložen v tem zavihku.
:::

## Omejitve v datotekah

Omejitve in parametri (glejte [Omejitev risbe](topic:constraints)) se shranijo v DWG in DXF. Vsak omejeni objekt nosi majhno opombo CadCraft (razširjeni podatki), neuporabljeni blok z imenom `CADCRAFT_PARAMETRIC` pa hrani omejitve in tabelo parametrov. Drugi programi odprejo risbo normalno in oba ignorirajo; ob čiščenju lahko izbrišejo neuporabljeni blok. Opombe se na objekte sklicujejo s svojim ključem, ne z ročaji datoteke, zato program, ki preštevilči ročaje, jih ne pokvari. Ko je drug program izbrisal ali spremenil omejen objekt, CadCraft ob odpiranju datoteke odstrani omejitve nanj in pove, koliko jih je. Datoteka brez njih se odpre brez omejitev.

Skica, izvožena iz modelirnika delov (`.json`), se prav tako odpre: glejte [Premik skic v in iz drugih modelirnikov delov](topic:solidworks-sketches).

## Še ni na voljo

- Večkratne vodilke kot objekti večkratnih vodilk v shranjeni DXF (R12 jih nima: shranjene so kot to, kar narišejo).
- Slike v shranjeni DXF (shranijo se kot njihovi okviri; DWG jih ohrani kot slike) in zakritja (wipeouts), ki skrijejo, kar je pod njimi.
- Shranjevanje novejše različice DXF kot 2000.
- Shranjevanje v oblak in sinhronizacija med računalniki.

Glejte [Še ni izdelano](topic:not-built-yet) za celoten seznam.
