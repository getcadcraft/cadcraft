---
title: Prihod iz drugih programov za risanje
summary: Kako znani ukazi, tipke in navade ustrezajo v CadCraft ter razlike, ki presenetijo izkušene risarje.
keywords: preklapljanje, razlike, selitev, navade, aliasi, dinamični vnos, pickfirst, pickadd, qsave, saveas, shrani kot, mtext, ctb, polarno sledenje, xref, bližnjične tipke, znano, copyclip, pasteclip, pasteorig, copybase, odložišče
from: b58688e7
---

Če ste uporabljali AutoCAD ali program, zgrajen na istem modelu, večina tega, kar poznate, tukaj deluje: ukazna vrstica, aliasi, kot so `L`, `C`, `TR` in `O`, Enter ali Space za ponovitev, izbor z oknom in s sekanjem, lovljenje objektov na F3, Orto na F8, model prostor z listi in pogledi. Ta stran našteje, kar se neposredno preslika, nato razlike, ki ljudi presenetijo. Tudi če prvi del samo preletite, drugega preberite.

## Kaj se neposredno preslika

| Navada | V CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Isti ukazi, isti aliasi |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Enako |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Enaki ukazi za kotiranje |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO`, vneseni v ukazno vrstico | Enako, za nove kote |
| `B` za ustvarjanje bloka, `I` za vstavljanje, `PU` za čiščenje | Enako (čiščenje odstrani samo neuporabljene bloke) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` nato `E` ali `W` | Enako |
| Vnos `_LINE` ali `-LAYER` iz skripte ali navade | Vodilni `_`, `-`, `.` ali `'` se ignorira |
| Enter ali Space na praznem pozivu ponovi zadnji ukaz | Enako |
| Esc prekliče; Esc še enkrat počisti izbor | Enako |
| `@dx,dy`, `@d<a`, vneseni koti v nasprotni smeri urnega kazalca od vzhoda | Enako |
| Okno od leve proti desni, sekanje od desne proti levi, klik-klik; pritisnite in vlecite za lasso, Space kroži med oknom, sekanjem in ograjo (LASSOMODE) | Enako |
| Najprej izberite, nato ukaz (samostalnik-glagol) | Enako; končan ukaz počisti izbor |
| `ALL` in `L` pri pozivu Izberite objekte | Enako |
| Shift+klik odstrani iz izbora | Enako. Nastavitve lahko naredijo, da klik izbor zamenja, kot to naredi PICKADD 0: glejte [Nastavitve CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Enaki ukazi in tipke; lepljenje postavi kopijo po njenem spodnjem levem kotu, kot PASTECLIP |
| F3 lovljenje objektov, F7 mreža, F8 Orto | Enake tipke |
| Dvoklik na kolesce za povečavo na obseg | Enako |
| Zrcaljeno besedilo ostane berljivo | Enako (kot pri MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Enako; na Macu deluje tudi Command |

[Referenca ukazov](topic:commands) našteje vsak ukaz in alias.

:::tip
Če vam je všeč trak AutoCAD, izberite slog menija {{ui:Klasični risarski slog}} v {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Meniji, tipke in miška}}: zavihki Domov, Vstavi, Opombe, Parametrično, Pogled, Upravljanje in Izhod nad isto ukazno vrstico, srednji gumb premika, desni klik pa je Enter. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse).
:::

[Zemljevid ukazov](topic:command-map) našteje vsak ukaz, ki ga ima CadCraft, s kratkimi imeni, [bližnjični list](topic:cheat-sheet) pa 40 ukazov, ki jih boste najpogosteje uporabljali (tudi kot enostranski PDF).

## Razlike, ki ljudi presenetijo

### Vnesene točke so absolutne

Z vklopljenim dinamičnim vnosom drug program vneseno `100,0` za drugo točko obravnava kot relativno. **Ukazna vrstica CadCraft tega ne počne**: tam je `x,y` vedno merjen od izhodišča. Z {{ui:Dyn}} ({{key:F12}}) vklopljenim uporabite njegova polja: razdalja, {{key:Tab}}, kot. Uporabite `@100,0` za »100 desno od zadnje točke« ali premaknite križec v pravo smer in vnesite samo `100`.

### Shift preskoči lovljenje; ne vklopi Orto

Držanje Shift med klikom za ta klik prezre lovljenje objektov. Ne preklopi začasno Orto. Uporabite F8 ali gumb {{ui:Orto}}.

### Desni klik je vedno Enter

Ni desnega menija. Desni klik v risbi je Enter: konča ukaz, konča izbor ali ponovi zadnji ukaz. Med premikom z ročico ali med okvirjem za izbor prekliče. Z desnim gumbom vlecite za pomik.

### Brez pomika s preslednico

Space je Enter, zato držanje Space in vlečenje ne pomakne pogleda. Pomaknite s srednjim ali desnim gumbom ali oddaljite in ponovno približajte na drugem mestu s kolescem.

### Prirezi in podaljšaj

Prirezi in Podaljšaj se začneta v hitrem načinu: vsak viden objekt je rezalni rob ali meja, del pod kazalcem pokaže, kaj bo odstranjeno, vlečena pot prireže vsak kos, ki ga prečka, objekt, ki ga nič ne prečka, pa se izbriše. {{key:Shift}} preklaplja med prirezovanjem in podaljševanjem. `O` preklopi v standardni način (najprej izberite robove), `F` in `C` sta ograja in sekanje, `E` je EDGEMODE, `R` izbriše. Opcije `P` (Projekcija) ni: CadCraft reže v ravnini risbe.

### Zaokrožitev in posnetje

{{cmd:FILLET}} in {{cmd:CHAMFER}} imata opcije, ki jih poznate: Razveljavi (U), Polilinija (P), Polmer (R) ali Razdalja (D), Kot (A) in metoda (E), Prirezi (T) in Več (M), ter {{key:Shift}}+klik za oster vogal. Zaokrožitev med polilinijo in črto doda lok kot svoj objekt, namesto da bi ju združila v polilinijo, vogali polilinije ob loku pa ostanejo, kot so.

### Odstavčno besedilo in enovrstično besedilo

`T`, `MT` in `MTEXT` so večvrstično besedilo, vneseno na mestu, s širino, razmikom vrstic in poravnavo; `DT` in `DTEXT` sta enovrstično besedilo, kot ga poznate. Slogov besedila ali stolpcev ni, besedila v besedilu pa še ne morete vnašati s krepkim tiskom ali zloženimi ulomki; oblikovanje, ki pride iz datoteke, se ohrani, nariše in shrani (glejte [Dodajanje besedila in oznak](topic:text#formatting-inside-paragraph-text-from-other-programs)). Vse se riše v pisavi v slogu Helvetica.

### Shrani pomeni »prenesi kopijo«

{{key:Mod+S}}, `SAVE` in `QSAVE` prenesejo kopijo v obliki risbe: DWG, ki ste ga odprli, se shrani kot DWG, DXF kot DXF. V brskalniku se nič ne prepiše na mestu in odprte datoteke se nikoli ne spremenijo. V CadCraft Studio {{key:Mod+S}} zapiše nazaj v datoteko, ki ste jo odprli.

`SAVEAS` ({{key:Mod+Shift+S}}) je majhno pogovorno okno, ne brskalnik datotek: izberite {{ui:DWG}} (z njegovo {{ui:Različico}}, AutoCAD 2000 do 2018), {{ui:DXF R12}} ali {{ui:DXF 2000}} in kliknite {{ui:Shrani}}. Brskalnik odloči, kam gre prenos. `DXFOUT` vedno prenese DXF R12.

DWG, ki ste ga odprli, se shrani v različici, v kateri je prišel; nova risba se shrani v formatu AutoCAD 2000, razen če izberete drugega. Listi, kote in vzorci šrafur se ohranijo. Glejte [Datoteke: kaj se odpre, kaj se shrani](topic:files#saving).

### Sloji: preprosteje

- Vsaka sprememba sloja (vklop, zamrznitev, zaklep, barva, izris, tip črte, debelina, trenutni sloj) je en korak razveljavitve.
- Izklop in zamrznitev imata v CadCraft enak učinek.
- Sloji, ki jih risba zamrzne v enem poglednem oknu, ostanejo tam zamrznjeni: na zaslonu, v izrisih in ko jo shranite kot DWG ali DXF.
- Pogledno okno, ki prikazuje sloj v svoji barvi, tipu črte, debelini ali prosojnosti, to ohrani na zaslonu, v izrisih in v shranjenem DWG (DXF ohrani lastne nastavitve sloja; shranjevanje to pove). Spreminjanje tega po pogledih še ni izdelano.
- Upravitelja lastnosti slojev ni in ni stanj slojev; {{cmd:RENAME}}, {{cmd:LAYMRG}} in {{cmd:LAYDEL}} preimenujejo, združijo in izbrišejo sloje. Tipi črt in debeline se nastavijo v desnem panelu (glejte [Debeline in tipi črt](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} in {{cmd:LAYMCUR}} delujejo z izbiranjem.
- Shranjevanje v DXF R12 zapiše imena slojev z velikimi črkami. DWG jih ohrani tako, kot ste jih vnesli.

### Slogi kotiranja

`DIMSTYLE` odpre upravitelja za imenovane sloge (novo, spremeni, nastavi trenutnega, primerjaj, uporabi). `DIMSCALE` in druge nastavitve še vedno spremenijo, kaj uporabljajo novi kote, vsaka kota pa ohrani svoje velikosti, ki jih lahko spremenite tudi v panelu Lastnosti. Trenutni slog se ne shrani v datoteko. Kote sledijo obliki dolžin risbe (decimalno ali čevlji in palci z {{cmd:UNITS}}) ali svojemu {{ui:Format}}. Glejte [Nastavite velikosti kot](topic:dimension-settings).

### Izris je preprostejši

Tabele slogov izrisa delujejo po barvi, kot datoteke CTB: Monochrome, Colour in Grayscale so vgrajene, lahko naredite svojo, vsak list pa ohrani svojo tabelo. Branje datotek CTB je zgrajeno po objavljenem opisu in je bilo preizkušeno samo na datotekah, ki smo jih naredili mi; imenovane tabele slogov izrisa (STB) in nastavitve strani še niso zgrajene. Črte se izrišejo v svoji debelini, ostale z eno širino peresa. Listi se izrišejo v merilu 1:1 na svojem papirju; model se izriše v izbranem ali prilagojenem merilu. Glejte [Izris v PDF](topic:plot-pdf).

### Delo znotraj poglednega okna

Kot poznate: dvoklik znotraj poglednega okna (ali vnesite {{cmd:MSPACE}}), da delate na modelu prek njega, in dvoklik zunaj (ali {{cmd:PSPACE}}), da se vrnete na list. Znotraj premik in povečava spremenita to, kar pogledno okno prikazuje, razen če je njegov prikaz zaklenjen; takrat premikata list. Klik na zavihek pod risbo tudi zapusti pogledno okno. Glejte [Delo na modelu prek poglednega okna](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Sledenje in dinamični vnos da, lovljenje na mrežo še ne

Mreža je samo za gledanje; točke se nanjo ne lovijo (ni načina lovljenja F9). Polarno sledenje ({{key:F10}}, korak nastavite z {{cmd:POLARANG}}) in sledenje lovljenju objektov ({{key:F11}}: počakajte na točko lovljenja, da jo zajamete) delujeta, kot ju poznate; glejte [Lovljenje na objekte](topic:object-snaps#polar-tracking). Dinamični vnos ({{key:F12}}) prikaže razdaljo in kot (ali X in Y) ob križcu; glejte [Vnos koordinat in razdalj](topic:coordinate-entry#dynamic-input).

### Čevlji in palci

Izberite {{ui:Format dolžin}} {{ui:Arhitekturni}} ali {{ui:Inženirski}} (ali vnesite {{cmd:UNITS}}) in vnašajte dolžine, kot ste jih vajeni: `12'6"`, `12'6-1/2"`. Pred ulomkom uporabite vezaj, ne presledka: {{key:Space}} je {{key:Enter}}. Nastavite tudi {{ui:Enote}} na {{ui:Palci}}, da listi in izrisi ponujajo arhitekturna merila. Oblika se ohrani v shranjenih datotekah DWG in DXF. Glejte [Čevlji in palci](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopiranje in lepljenje ostaneta znotraj CadCraft

{{key:Mod+C}}, {{key:Mod+X}} in {{key:Mod+V}} kopirajo, režejo in lepijo objekte znotraj risbe, med risbami in med zavihki CadCraft v istem brskalniku. Odložišče je lastno odložišče CadCraft: objektov CadCraft ne morete prilepiti v drug program, prav tako ne objektov iz drugega programa v CadCraft. Lepljenje iz risbe v drugih enotah ne spremeni merila: nato uporabite {{cmd:SCALE}}. {{key:Mod+D}} je podvojitev, ki se premika s kazalcem, dodatek CadCraft. Glejte [Kopiranje, lepljenje in podvajanje](topic:copy-paste).

### Brskalniške tipke, ki jih ne morete uporabiti

Spletna stran ne more prevzeti {{key:Mod+N}}, {{key:Mod+W}} ali {{key:Mod+T}} od brskalnika: te odprejo in zaprejo okna in zavihke. Uporabite gumb {{ui:Nova}} ali vnesite `NEW`. Glejte [Tipke, miške in sledilne ploščice](common:keys).

## Ukazi, ki jih morda iščete, a jih še ni

{{cmd:TABLE}} še ni zgrajen. Ob vnosu pove: „Neznan ukaz“. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} in {{cmd:XREF}} so zgrajeni.) [Še ni zgrajeno](topic:not-built-yet) našteje, kaj narediti namesto tega.
