---
title: Datoteke: kaj se odpre, kaj se shrani
summary: Oblike, ki jih CadCraft odpre, shrani in izvozi, kaj se ohrani ali pretvori ter kam gredo datoteke.
keywords: xclip, clip, xclip boundary, bind clipped, dwg, dxf, pdf, r12, open, save, export, import, formats, conversion, download, saveas, dxfout, save as, dwg save, format, qsave, xref, xattach, povezana risba, zunanji sklic, bind, reload, detach
from: b8c5778d
---

## Na prvi pogled

| Oblika | Odpri | Shrani | Opombe |
|---|---|---|---|
| DXF (besedilni ali binarni, katerakoli različica) | Da | Da, kot DXF R12, DXF 2000 ali DXF 2000 (binarni) | Binarni DXF se odpre kot besedilni in se shrani nazaj kot binarni. |
| DWG | Da | Da, kot DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ali 2018) | Bere in zapisuje CadCraftova lastna knjižnica DWG (datoteke AutoCAD R13 do 2018). Vaša DWG datoteka se nikoli ne spremeni. Poškodovane datoteke ali različice, ki jih bralnik ne obdeluje, so zavrnjene s sporočilom. |
| PDF | Prinese stran: kot podlogo ali kot objekte ([PDF podloge](topic:pdf-underlay)) | Da, z izrisom | Vektorski PDF lista ali modela pri določenem merilu. |

Vsaka risba, ki jo odprete (ali začnete z {{ui:Nova}}), dobi svoj zavihek nad območjem risanja; nova risba, ki je še nihče ni uporabil, se uporabi namesto dodajanja zavihka. Kliknite zavihek za preklop, njegov {{ui:×}} za zapiranje (CadCraft prej vpraša, če so neshranjene spremembe), ali razporedite odprte risbe drugo ob drugi: glejte [Razdelitev zaslona](topic:split-screen).

## Odpiranje risbe

- Pritisnite {{key:Mod+O}}, kliknite {{ui:Odpri}} ali vpišite `OPEN`, nato izberite datoteko.
- Ali povlecite datoteko `.dwg` ali `.dxf` na območje risanja.

Datoteka se prebere v vašem brskalniku. Nikamor se ne naloži. Zgodovina poroča, koliko objektov in slojev je prišlo noter in koliko časa je trajalo, razdelek {{ui:Risba}} v levi plošči pa prikazuje obliko, na primer „DWG 2018 (AC1032)“.

Bralnik DWG je del CadCraft in se pridobi z prvo datoteko DWG, ki jo odprete po nalaganju strani (nekaj sto KB), zato ni ločenega prenosa, na katerega bi morali čakati. Datoteko bere v ozadju, zato stran med odpiranjem velike datoteke DWG ostaja odzivna.

DXF se bere po delih po približno 4 MB, nikoli kot en blok besedila, zato se odpre tudi DXF, večji od 512 MB. Omejuje ga pomnilnik vašega računalnika: med odpiranjem DXF pričakujte porabo približno 16 do 20-kratne velikosti datoteke (DXF velikosti 100 MB z okoli 690,000 objekti je v našem preizkusu porabil približno 1.5 GB).

### Kaj pride noter

- Črte, loki, krogi, polilinije (z odseki z loki), elipse, točke, besedilo in večvrstično besedilo, polne ploskve, šrafure (standardni vzorci, narisani kot njihove črte, drugi kot ploska barva), sklici na bloke z njihovimi atributi (vrednosti, ki jih lahko urejate; glejte [Atributi blokov](topic:attributes)), kote in izrisi z njihovimi pogledními okni.
- Zlepki (spline) pridejo kot zlepki (stopnja, kontrolne točke, vozli, uteži, točke prileganja); glejte [Zlepki in polilinije](topic:splines).
- Večkratne vodilke z eno vodilno črto in besedilom pridejo kot večkratne vodilke CadCraft, ki jih lahko urejate (glejte {{cmd:MLEADER}}). Druge (z blokom, več vodilnimi črtami ali ukrivljenimi črtami) so narisane tako, kot jih je narisal drug program, in se premikajo kot ena celota; zgodovina pove, koliko jih je.
- Slike (images) se prikažejo kot okvir z imenom datoteke slike, dokler CadCraftu ne podate datoteke z {{cmd:IMAGE}}: glejte [Slike v risbi](topic:pictures#show-the-pictures-a-dwg-uses). Zakrivanja (wipeouts) se prikažejo kot njihov okvir, kar je pod njimi, pa ostane vidno.
- Tabele v DWG pridejo tako, kot jih je narisal drug program.
- 3D ploskve v modelnem prostoru pridejo na zavihku {{ui:3D}}, ne kot 2D objekti; enako velja za tiste znotraj blokov, enkrat za vsak sklic na blok v modelu. V bloku in na listu so prav tako narisane ravno, kot obrisi. Glejte [Model v 3D](topic:3d-solids).
- Sloji ohranijo svojo barvo ter nastavitve vklopa, zamrznitve, zaklepa in izrisa. DEFPOINTS se nikoli ne izriše.
- Kote postanejo prave, urejljive kote CadCraft, kjer je mogoče prebrati njihove točke. Najprej so prikazane točno tako, kot jih je narisal drug program; takoj ko eno spremenite, jo CadCraft nariše na novo v svojem slogu.
- Vsak izris (layout) postane zavihek lista. V drugem programu ima vsak izris skrit prvi pogled, ki je sam list; CadCraft ga izpusti.

### Kaj še ne pride noter

Vse, kar CadCraft ne more narisati, je prešteto, ne ugibano. Okno „O tej datoteki“ v levi plošči to navaja kot „Še ni prikazano:“, sledi pa vsaka vrsta objekta in koliko jih je. Tipični primeri so tabele v DXF, mreže in 3D telesa v blokih. 3D telesa, regije in telesa v modelnem prostoru se prikažejo na zavihku 3D (glejte [Model v 3D](topic:3d-solids#solids-from-other-programs)). Pogledna okna, zasukana v datoteki, se prikažejo zasukana, kot tam, in ohranijo svoj zasuk, ko shranite; enako velja za trenutni UCS, poimenovane UCS in zasukan pogled.

Besedilo je narisano v eni pisavi v slogu Helvetica. Oznaka, ki se v izvirnem programu z ožjo pisavo prilega v eno vrstico, se lahko v CadCraftu prelomi v dve.

## Shranjevanje

Obstajajo tri načini shranjevanja. Vsak prenese kopijo.

- **Shrani**: pritisnite {{key:Mod+S}}, kliknite {{ui:Shrani}} ali vpišite `SAVE` (tudi `QSAVE`). Shrani v obliki risbe: DWG, če ste odprli DWG, DXF, če ste odprli DXF. DWG ohrani različico, s katero je prišel (datoteka 2018 se shrani kot 2018). Nova risba uporabi obliko in različico DWG, ki ste jo nazadnje izbrali v {{ui:Shrani kot}} v tem brskalniku; če je niste nikoli izbrali, je to DWG v obliki AutoCAD 2000.
- **Shrani kot**: pritisnite {{key:Mod+Shift+S}}, kliknite {{ui:Shrani kot}} ali vpišite `SAVEAS`. Pogovorno okno {{ui:Shrani kopijo kot}} ponuja {{ui:DWG}}, seznam {{ui:Različica}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ali 2000), {{ui:DXF R12}} in {{ui:DXF 2000}}, vsak z imenom datoteke, ki jo bo dal, ter že izbrano trenutno obliko in različico risbe. Kliknite {{ui:Shrani}}, da prenesete, ali {{ui:Prekliči}} (ali {{key:Esc}}), da ne shranite ničesar; zgodovina nato pove „Ni shranjeno.“ Kar izberete, ostane: {{key:Mod+S}} uporabi to za to risbo od takrat naprej, nove risbe v tem brskalniku pa začnejo z njim.
- **DXFOUT**: vpišite `DXFOUT`. Vedno prenese kopijo DXF R12, naslednji {{key:Mod+S}} pa še vedno shrani v obliki risbe.

Brskalnik prenese `<ime risbe>.dwg` ali `<ime risbe>.dxf`. Vsako shranjevanje je **nov prenos**; datoteka, ki ste jo odprli, nikoli ni prepisana ali spremenjena. Zgodovina to potrdi, na primer „Kopija shranjena kot Plan.dwg (DWG (AutoCAD 2018)). Vaša izvirna Plan.dxf je nespremenjena.“ Pri DXF piše „(DXF R12, odpre se v katerem koli CAD programu)“. Vrstice pod njo navajajo vse, kar se je na poti spremenilo.

Ko CadCraft teče v namizni aplikaciji, shranjevanje deluje kot v drugih namiznih programih: {{key:Mod+S}} zapiše risbo nazaj v datoteko, ki ste jo odprli, v njeni obliki in različici, zgodovina pa pove, kam je bila shranjena. {{ui:Shrani kot}} in izvozi prikažejo sistemsko pogovorno okno za shranjevanje, datoteka `.dwg`, `.dxf` ali `.ccsheets`, ki jo dvakrat kliknete, pa se odpre v CadCraftu.

Za PDF namesto tega izrišite (glejte spodaj).

## Kaj DWG ohrani in spremeni

CadCraft sam zapiše DWG v vašem brskalniku, z isto knjižnico DWG, s katero bere. Izberite različico v {{ui:Shrani kot}}: oblika AutoCAD 2000 (datotečna različica AC1015) se odpre v največ programih, tudi starih; novejše oblike (2004, AC1018, do 2018, AC1032) ohranijo tudi prave barve. Nič se ne naloži, shranjevanje DWG pa deluje tudi brez povezave.

Vsaka različica je preverjena tako, da shranjene datoteke preberejo bralniki DWG treh drugih programov in CadCraft sam. Risba DWG iz CadCrafta še ni bila odprta v samem AutoCADu.

### Kaj DWG ohrani

- Črte, loki, krogi, elipse, točke in polilinije z njihovimi odseki z loki.
- Enovrstično besedilo z njegovo poravnavo in faktorjem širine.
- Večvrstično in prelomljeno besedilo kot večvrstično besedilo. Drugi program ga ponovno prelomi pri isti širini.
- Barve objektov: po sloju, po bloku, 255 standardnih barv ter prave barve v obliki 2004 in novejših.
- Sloji z barvo, tipom črte, debelino in nastavitvami vklopa, zamrznitve, zaklepa in izrisa; lastni tipi črt objektov, debeline in merila tipov črt ter vzorci tipov črt in merilo tipa črte risbe.
- Enote risbe in format dolžin (decimalni, čevlji in palci, ulomki …).
- Bloki z njihovo izhodiščno točko in definicijami atributov, vključno z nevidnimi, konstantnimi in prednastavljenimi.
- Sklici na bloke z njihovim merilom, zasukom in vrednostmi atributov.
- Polne barve in šrafure z vzorcem, merilom in kotom (lastne črte vzorca, tako da drugi programi narišejo iste črte kot CadCraft).
- Kote kot prave kote: drugi programi jih ob raztegu ponovno izmerijo. Vsaka ohrani svoje nastavitve (višino besedila, velikost puščic, decimalna mesta, format dolžin) in svoje besedilo ter nosi narisano kopijo, ki jo ima vsaka kota v DWG.
- Listi (izrisi): vsak list z velikostjo papirja in enotami, tem, kar je narisano nanj, ter njegova pogledna okna z njihovim pogledom in merilom.
- Poimenovani pogledi.
- Večkratne vodilke kot večkratne vodilke.
- Imena slojev in blokov, kot ste jih vpisali, z velikimi in malimi črkami. (DXF R12 jih zapiše z velikimi črkami.)

### Kaj DWG spremeni

Vsaka od teh stvari je navedena v zgodovini po shranjevanju, kadar velja za vašo risbo.

| V CadCraftu | V shranjeni DWG |
|---|---|
| Prave barve (izbrane z izbirnikom barv) v obliki 2000 | Najbližja standardna barva: oblika 2000 ima samo 255. Shranite kot 2004 ali novejše, da jih ohranite. |
| Poimenovani pogledi lista | Pogledi v papirnem prostoru: DWG ne pove, kateri list je, zato jih CadCraft ob ponovnem odprtju datoteke pripiše prvemu listu. |
| Večvrstično besedilo s faktorjem širine | Normalna širina črk: v DWG se faktor širine uporablja samo za enovrstično besedilo. |
| Imena slojev ali blokov s znaki, ki jih DWG ne dovoli | Spremenjeno: ime iz povezane risbe, kot `Base\|Walls`, postane `Base$0$Walls` (tako ga poimenuje vezava povezave), drugi znaki pa postanejo `_`. |

### Zakaj R12 in kaj se pretvori

Ko shranite kot DXF, CadCraft zapiše DXF R12, različico, ki jo lahko odpre vsak CAD program. Je starejša od nekaterih funkcij, zato so nekatere stvari zapisane v preprostejši obliki:

| V CadCraftu | V shranjeni datoteki R12 |
|---|---|
| Večvrstično besedilo | Eden besedilni objekt za vsako vrstico |
| Elipse | Polilinije, ki sledijo elipsi |
| Šrafure (iz odprtih datotek) | Samo njihovi obrisi |
| Prave barve (izbrane z izbirnikom barv) | Najbližja standardna barva |
| Debeline črt in lastna merila tipov črt objektov | Izpuščeno: R12 nima ničesar od tega (tipi črt se ohranijo) |
| Imena slojev in blokov | Zapisana z velikimi črkami; presledki in drugi znaki postanejo `_`, imena pa se skrajšajo na 31 znakov („Title block“ postane `TITLE_BLOCK`) |
| Sloji, nastavljeni na neizris | Drugi programi jih bodo izrisali (CadCraft si nastavitev zapomni, kadar ima risba list) |
| Kote | Prave kote z lastnim narisanim blokom, zato jih drugi programi prikažejo tako, kot jih vidite |
| Večkratne vodilke | Črte, puščica in besedilo, ki jih narišejo |
| Poimenovani pogledi | Ohranjeni, imena z velikimi črkami; pogledi lista se vrnejo na prvi list |
| Več listov | Prvi list je papirni prostor, ki ga prikazuje vsak program; drugi se ohranijo kot bloki z imenom `CCLAYOUT_1`, `CCLAYOUT_2` … , ki jih CadCraft ob odpiranju datoteke spet spremeni v liste |

Zgodovina navede vsako od teh stvari, ki je veljala za vašo risbo.

:::tip
Če boste na risbi delali več dni, jo shranite kot DXF in naslednjič odprite ta DXF. Vse, kar CadCraft lahko nariše, preživi ta cikel, vključno s kotami, bloki in vsemi listi.
:::

## Povezane risbe (zunanji sklici)

{{cmd:XATTACH}} (`XA`, ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Poveži risbo (xref)}}) poveže drugo DWG ali DXF: izberite datoteko, nato kliknite, kamor naj gre ({{key:Enter}} jo postavi na 0,0). Pride kot en blok, poimenovan po datoteki, v pravilnem merilu, če imata obe risbi različne enote. Njeni sloji in bloki ohranijo svoja imena s spredaj dodanim imenom povezave, na primer `Plan|Walls`, `Plan|Door`, zato se nikoli ne pomešajo z vašimi: vklapljajte in izklapljajte, zamrzujte ali zaklepajte povezane sloje tako kot svoje. Povezava je samo za branje: spremenite drugo risbo in jo ponovno naložite. Kar nastavite na slojih povezave (barva, tip črte, debelina, vklop/izklop, zamrznitev, zaklep, izris), se ohrani, ko jo ponovno naložite, ko shranite risbo kot DWG, dokler je povezava še povezava, in ko druga risba povezuje to.

{{cmd:XREF}} (`XR`): `?` našteje povezave (naložene ali ne, katera datoteka, koliko sklicev); `A` pripne; `R` ponovno naloži eno iz njene datoteke (ponovno izberite datoteko: brskalnik ne more sam dostopati do vaših map); `B` jo veže (postane običajni bloki in sloji z imeni `Plan$0$Walls`); `D` jo odpne (njeni sklici in sloji izginejo). Vsaka je en korak razveljavitve.

{{cmd:XCLIP}} (`XC`) obreže sklice na bloke in povezave: izberite jih, `N` za novo mejo, nato `R` in dva vogala ali `P` in točke mnogokotnika ({{key:Enter}} ga zapre); `D` odstrani obrezo. Prikaže se in izriše samo to, kar je znotraj, obrezek pa se premika s sklicem. DWG in DXF 2000 ohranita obrezo; DXF R12 shrani sklic v celoti in to pove. Ko vežete povezavo, ki ima obrezane sklice, {{cmd:XREF}} `B` vpraša: `A` veže vse, `C` ohrani samo obrezani del vsakega sklica (črte in loki so prerezani na meji; besedilo in vgnezdeni bloki ostanejo, če je njihova vstavitvena točka znotraj).

Datoteka, ki jo odprete, lahko povezuje datoteke, ki jih CadCraft ne vidi: pove, koliko jih ni naloženih. Uporabite {{cmd:XREF}}, `R` in izberite vsako datoteko, da jih vidite.

Ko shranite, se naložena povezava **veže** v datoteko (drugi programi vidijo običajne bloke in sloje z imeni `Plan$0$…`), zgodovina pa to pove. Povezava, ki ni naložena, ostane povezava na svojo datoteko, v DWG in DXF.

## Odpiranje v 3D

{{ui:Pogled}} › {{ui:Več}} › {{ui:Odpri v ModelCraft}} ({{cmd:OPENIN3D}}) odpre risbo v 3D modelirnem programu na novem zavihku, kot DWG, brez nalaganja. Spremembe, narejene tam, ostanejo tam; shranite jih tam. Meni se prikaže samo tam, kjer lahko ta program sprejme predano risbo.

## Izris PDF

Pritisnite {{key:Mod+P}}, kliknite {{ui:Izris}} ali vpišite `PLOT`. PDF se naredi v brskalniku in prenese ali odpre na novem zavihku za tiskanje. Glejte [Izris v PDF](topic:plot-pdf).

## Kam gredo datoteke

Vsako shranjevanje in vsak izris je prenos, zato datoteke pristanejo tam, kamor brskalnik da prenose: običajno v mapo Prenosi. Če želite vsakič izbrati mapo, spremenite nastavitev prenosov v brskalniku; [Brskalniki in računalniki](common:browsers) pokaže, kje.

Nič, kar odprete ali shranite, ne pošljemo nam. Glejte [Kam gredo vaše datoteke](common:your-files).

## Datoteke PLN in PLA

CadCraft odpre risbe DWG in DXF, ne lastnih datotek Archicada (`.pln`, `.pla`, `.tpl`, `.bpn`). Ob odprtju vam pove, kaj je. V Archicadu shranite poglede ali izrise, ki jih potrebujete, kot DWG in jih tu odprite, ali izvozite model kot IFC in ga odprite v BimCraftu. Kjer lahko BimCraft prevzame datoteko, CadCraft ponudi {{ui:Odpri v BimCraftu}}.

## Če se stran zapre pred shranjevanjem

CadCraft hrani kopijo vsake risbe, ki jo spremenite, samo v tem brskalniku, kmalu potem ko nehate urejati. Če se zavihek zapre, se brskalnik ustavi ali se računalnik znova zažene, preden shranite, CadCraft ob naslednjem zagonu vpraša **Obnovi vaše delo?**: {{ui:Obnovi}} ponovno odpre risbo, neshranjeno, na svojem zavihku. Shranjevanje risbe odstrani njeno kopijo. Glejte [Obnovitev dela](common:recover).

## Brez povezave in na spletu

Odpiranje, risanje, shranjevanje (DWG in DXF) in izris vse poteka na vašem računalniku, zato delujejo brez povezave, ko se CadCraft naloži.

Če želite uporabljati CadCraft sploh brez povezave, kliknite {{ui:Shrani za delo brez povezave}} v vrstici na vrhu, ko ste povezani. Oznaka šteje navzgor („Shranjevanje 40 od 212“) in se konča pri „Pripravljeno za delo brez povezave“. Shranjena kopija vključuje bralnik DWG, skupno približno 5 MB, zato se **datoteke DWG odprejo tudi brez povezave**, ko je shranjena. Ponovno kliknite gumb za {{ui:Shrani znova (pridobi najnovejšo različico)}} ali {{ui:Odstrani kopijo brez povezave}}. „Shranjevanje ni uspelo“ pomeni, da nekatere datoteke niso bile prenesene: preverite povezavo in kliknite, da poskusite znova. „Delo brez povezave ni na voljo“ pomeni, da to okno brskalnika ne more hraniti kopije (zasebna okna in nekateri upravljani računalniki).

Brez shranjene kopije se bralnik DWG pridobi ob prvem odpiranju DWG po nalaganju strani, zato odpiranje DWG brez povezave lahko ne uspe; datoteke DXF ga nikoli ne potrebujejo. Ne osvežujte strani brez povezave, razen če je CadCraft shranjen.

Glejte [Delo brez povezave](common:offline) za podrobnosti.

:::offline
Trenutno ste brez povezave. Risbe se shranjujejo kot DWG ali DXF in se normalno izrisujejo, datoteke DXF se odpirajo. Datoteke DWG se odprejo, če CadCraft prikazuje „Pripravljeno za delo brez povezave“ ali če je bralnik DWG že naložen v tem zavihku.
:::

## Omejitve v datotekah

Omejitve in parametri (glejte [Omejevanje risbe](topic:constraints)) se shranijo tako v DWG kot v DXF. Vsak omejen objekt nosi majhno opombo CadCraft (razširjeni podatki), neuporabljen blok z imenom `CADCRAFT_PARAMETRIC` pa hrani omejitve in tabelo parametrov. Drugi programi odprejo risbo normalno in oba ignorirajo; ob čiščenju lahko izbrišejo neuporabljen blok. Opombe se sklicujejo na objekte z lastnim ključem, ne z ročaji datoteke, zato program, ki ponovno številči ročaje, ne prekine omejitev. Ko drug program izbriše ali spremeni omejen objekt, CadCraft ob odpiranju datoteke omejitve nanj opusti in pove, koliko jih je. Datoteka brez njih se odpre brez omejitev.

Skica, izvožena iz modelirnika delov (`.json`), se prav tako odpre: glejte [Premikanje skic med modelirniki delov](topic:solidworks-sketches).

## Še ni na voljo

- Večkratne vodilke kot objekti večkratnih vodilk v shranjenem DXF (R12 jih nima: shranijo se kot to, kar narišejo).
- Slike v shranjenem DXF (shranijo se kot njihovi okvirji; DWG jih ohrani kot slike) in zakrivanja, ki skrivajo, kar je pod njimi.
- Shranjevanje novejše različice DXF od 2000.
- Shranjevanje v oblak in sinhronizacija med računalniki.

Glejte [Še ni izdelano](topic:not-built-yet) za celoten seznam.
