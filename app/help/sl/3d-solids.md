---
title: Model v 3D
summary: Oglejte si risbo v 3D na zavihku 3D in iz nje naredite preprosta telesa: iztisnite (z nagibom ali vzdolž poti), zavrtite, potisnite in povlecite ploskve, kvadre, valje in klinе, jih združite, odštejte in presečete, nato jih premaknite, kopirajte, zasukajte ali izbrišete ter na listu postavite ravne 2D poglede nanje.
keywords: 3d, tri d, telo, telesa, 3dsolid, regija, body, acis, sat, sab, telesa iz drugih programov, odpri 3D risbo, iztisni, ext, zavrti, rev, potegni po poti, sweep, nagib, pot, presspull, potisni povleci, press pull, push pull, kvader, valj, cyl, klin, we, 3dorbit, vrtenje, pogled, vscurrent, vizualni slog, osenčeno, skrita črta, žični model, rentgen, xray, iso, perspektiva, vzporedno, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kocka pogleda, združi, uni, odštej, su, presek, in, boolova operacija, združi telesa, viewbase, flatshot, ravni pogled, 2D pogled, pogled risbe, pogled od spredaj, pogled od zgoraj, stranski pogled, skrite črte
from: 13060e71
---

## Kaj boste naredili

Tloris sobe velikosti 1000 × 600, iztisnjen v blok visok 400, ploskev, potegnjena navzgor, in valj poleg njega – nato shranite model skupaj z risbo in ga izvozite za 3D-pregledovalnik ali tiskalnik.

Zavihek {{ui:3D}} je poleg zavihka {{ui:Model}} pod risbo. Prikazuje risbo prostora modela, ki leži na tleh v barvah slojev (sloji, ki so izklopljeni ali zamrznjeni, ostanejo skriti), in telesa, ki jih naredite. Ob prvem odprtju se pogled 3D naloži; potem preklaplja takoj.

## Iztisnite obliko

1. Na zavihku {{ui:Model}} vnesite `REC` in pritisnite {{key:Enter}}. Vnesite `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Kliknite zavihek {{ui:3D}}. Orodna vrstica namesto skupin za risbo prikaže skupino {{ui:3D}}.
3. Kliknite {{ui:Extrude}} (ali vnesite {{cmd:EXTRUDE}}, `EXT`). Kliknite v pravokotnik, nato pritisnite {{key:Enter}}.
4. Vnesite `400` in pritisnite {{key:Enter}}. Zgodovina pove „Iztisnjeno: 1 telo, višina 400“ s prostornino.

Zaprte polilinije (vključno z loki), pravokotniki, mnogokotniki, krogi in elipse se iztisnejo; črte in odprte polilinije ne, zgodovina pa pove zakaj. Oblike lahko izberete tudi najprej na zavihku {{ui:Model}} in tam vnesete `EXTRUDE`. Namesto vnosa višine jo lahko določite s klikom: obris sledi kazalcu gor in dol. Negativna višina gre navzdol. Pri pozivu za višino vnesite `D`, da 2D oblike po iztisnitvi izbrišete (ponovni `D` jih ohrani).

Pri pozivu za višino vnesite `T` za kot nagiba v stopinjah: stranice se nagnejo za ta kot, zato je vrh manjši (negativen kot ga poveča); prestrm kot za obliko je zavrnjen. `P` (Pot) oblike potegne vzdolž poti (glejte spodaj).

## Zavrtite in potegnite

- {{cmd:REVOLVE}} (`REV` ali {{ui:More}} › {{ui:Revolve about an axis}}): izberite zaprte oblike, pritisnite {{key:Enter}}, nato kliknite obe krajišči osi (ali vnesite `X` ali `Y` za os risbe skozi 0,0), nato vnesite kot ali pritisnite {{key:Enter}} za polni obrat. Oblika se zavrti okoli osi in se dvigne nad tla: narišite polovico obrisa vaze poleg črte in jo zavrtite okoli te črte. Oblika se sme dotikati osi, ne sme jo sekati. Polni obrat ima 48 korakov.
- {{cmd:SWEEP}} (ali {{ui:More}} › {{ui:Sweep along a path}}, ali `P` pri pozivu za višino v EXTRUDE): izberite zaprte oblike (profil), pritisnite {{key:Enter}}, nato kliknite pot: črto, polilinijo, lok, krog ali elipso. Profil se postavi čez pot, njegova sredina je na njej, in teče vzdolž nje; vogali so poševno zrezani, zaprta pot pa naredi obroč. Majhen pravokotnik, potegnjen vzdolž obrisa sobe, naredi talno letev; krog vzdolž polilinije naredi cev.

## Potisnite in povlecite ploskev

1. Kliknite {{ui:Press/pull}} (ali vnesite {{cmd:PRESSPULL}}).
2. Kliknite zgornjo ploskev bloka.
3. Vnesite `100` in pritisnite {{key:Enter}} ali premaknite kazalec in kliknite. Blok je zdaj visok 500.

## Kvadri, valji in klini

- {{cmd:BOX}}: kliknite ali vnesite dve oglišči, nato višino.
- {{cmd:CYLINDER}} (`CYL`): središče, polmer, nato višina. Valji in iztisnjeni krogi imajo 48 stranic, senčene gladko.
- {{cmd:WEDGE}} (`WE`): dve oglišči in višina. Pri prvem oglišču je polna višina, proti drugemu se spusti na nič.

Na zavihku 3D klik pade na ploskev ali rob pod kazalcem, sicer na tla, zato lahko kvader stoji na drugem telesu.

## Premikanje, kopiranje, zasukanje in brisanje teles

Na zavihku 3D klik izbere telo; povlecite od leve proti desni za okno, od desne proti levi za sekanje. Nato:

- {{cmd:MOVE}}: kliknite izhodiščno točko in kam gre, ali vnesite `<100,0,0>` (ali `@100,0`) za razdaljo vzdolž X, Y in Z.
- {{cmd:COPY}}: enako, original ostane.
- {{cmd:ROTATE}}: vnesite kot (zasuka se okoli središča izbora, okoli Z), ali kliknite središče, začetno točko in kot.
- {{cmd:ERASE}} ali {{key:Delete}}.

## Združevanje, odštevanje in presek teles

Odprite {{ui:More}} v orodni vrstici 3D ali vnesite ukaz:

- {{cmd:UNION}} (`UNI`): izberite telesa, pritisnite {{key:Enter}}: postanejo eno telo.
- {{cmd:SUBTRACT}} (`SU`): izberite telesa, ki jih želite obdržati, pritisnite {{key:Enter}}, nato tista, ki jih želite odvzeti, in spet {{key:Enter}}. Luknja skozi blok: narišite valj skozi njega, nato odštejte valj.
- {{cmd:INTERSECT}} (`IN`): izberite telesa, pritisnite {{key:Enter}}: ostane samo tisto, kar imajo vsa skupnega.

Zgodovina pove prostornino rezultata. Vsaka operacija je en korak razveljavitve. Prvi zagon naloži mehanizem za booleove operacije (približno 0,5 MB; vključen je v {{ui:Save for offline}}). Združiti je mogoče le zaprta telesa: telo z odprtimi robovi (iz tuje 3D ploskve) je zavrnjeno z razlogom. Rezultat je eno telo; ukrivljene ploskve ostanejo sestavljene iz ravnih ploskev, kot je bil valj.

Dvokliknite telo, da uredite njegove ploskve in robove posebej; {{key:Esc}} ga spet zapre. Vsaka sprememba 3D je en korak razveljavitve v isti zgodovini kot risba: {{key:Mod+Z}} razveljavi zadnje, kar ste naredili na katerem koli zavihku.

## Ravni pogledi na listu

1. Odprite zavihek lista (ali ostanite na {{ui:Model}}) in vnesite {{cmd:VIEWBASE}} (ali `FLATSHOT`).
2. Izberite pogled: {{key:Enter}} za pogled od spredaj, ali `T` (zgoraj), `R` (desno), `L` (levo), `BA` (zadaj), `BO` (spodaj), `I` (izometrija).
3. {{key:Enter}} pokaže skrite črte, črtkane; `H` jih izpusti.
4. {{key:Enter}} sprejme merilo, ki ga predlaga CadCraft: na listu največje standardno merilo (npr. 1:20), pri katerem pogled sega na manj kot polovico papirja. Ali vnesite svojega: `1:50`, `2:1`.
5. Kliknite ali vnesite, kam pride središče pogleda.

Pogled je en sklic na blok, `VIEW-FRONT-1` in tako naprej: vidni robovi na sloju VIEW-VISIBLE (0.5 mm), skriti na VIEW-HIDDEN (črtkano, 0.25 mm). Premaknite ga, kotirajte in izrišite kot katero koli drugo risbo. Je slika teles, kakršna je bila, ko ste jo naredili: po spremembi teles pogled izbrišite in znova zaženite {{cmd:VIEWBASE}}. Za več pogledov ukaz zaženite za vsak pogled posebej.

## Ogled okoli

Povlecite s kolescem za kroženje, {{key:Shift}} + povlek s kolescem ali desni gumb za pomik, s kolescem pa povečujete na kazalcu. Na sledilni ploščici se dva prsta vrtita, stisk pa povečuje. Desni klik brez povlečenja je {{key:Enter}}, kot na drugih zavihkih. 3DORBIT dovoli kroženje z levim gumbom, dokler ne pritisnete {{key:Enter}} ali {{key:Esc}}.

- {{ui:Views}} (ali {{cmd:VIEW}}): Izometrija, Zgoraj, Spodaj, Spredaj, Zadaj, Levo, Desno, Perspektiva ali Vzporedno ter Povečaj na obseg.
- {{ui:Style}} (ali {{cmd:VSCURRENT}}, `VS`): Osenčeno, Osenčeno z robovi, Skrite črte, Žični model ali Rentgen.

Točke, ki jih kliknete, se prilepijo na telesa (oglišča, robove, ploskve) in na 2D risbo na tleh: krajišča in središča njenih črt in lokov ter točke vzdolž njih. 2D črte se na zavihku 3D nikoli ne izberejo. Kadar ukaz zahteva 2D predmete (EXTRUDE, REVOLVE, SWEEP), klik izbere enega, povlek od leve proti desni vzame tisto, kar je v celoti znotraj okna, povlek od desne proti levi pa tisto, kar okno seka, kot na zavihku {{ui:Model}}.

Kocka pogleda je v zgornjem desnem kotu zavihka 3D: kliknite ploskev, rob ali oglišče, da pogledate od tam, povlecite za kroženje, gumb hiše pa vrne izometrični pogled. To je nastavitev {{ui:Automatic}}, prva možnost v {{ui:Corner indicator}} v [nastavitvah CadCraft](topic:settings). Nastavljeno na {{ui:View cube}}: tudi zavihek {{ui:Model}} prikaže kocko, ki gleda od zgoraj; klik na katero koli drugo stran odpre zavihek 3D z gledanjem od tam. Nastavljeno na {{ui:Axis icon}}: oba zavihka prikazujeta oznako osi.

## Tuja telesa iz drugih programov

Risba iz drugega programa lahko vsebuje 3D telesa, regije in telesa (3DSOLID, REGION, BODY: drugi program ohrani njihovo obliko kot podatke ACIS). CadCraft prikaže tista v prostoru modela na zavihku 3D, v barvi njihovega sloja in z lastnimi robovi, ob prvem odprtju zavihka; ukazna vrstica nato pove, koliko jih je bilo narisanih.

- Prikazana so takšna, kakršna so: ne morete jih izbrati, premakniti ali spremeniti. Sloji, ki so izklopljeni ali zamrznjeni, jih skrijejo.
- Shranjevanje kot DWG vsakega zapiše nazaj nespremenjenega, v kateri koli različici DWG, zato jih drugi program znova prejme. Datoteke DXF jih ne ohranijo: CadCraft jih zapiše samo v DWG in to pove, ko shranjujete kot DXF.
- Narisano: ravne ploskve ter ploskve na valjih, stožcih, kroglah, torusih in preprostih zlepkih, z ravnimi, okroglimi in zlepkastimi robovi. Ploskev na katerikoli drugi vrsti površine ali ploskev, ki je CadCraft ne more razporediti, se ne ugiba: izpusti se in se navede, na primer „Še ni narisano (3D telesa): 2 ploskvi na spline-surface (sweepsur), površina še ni narisana.“
- Telesa znotraj blokov še niso prikazana; „O datoteki“ jih šteje.

Ukrivljene ploskve so narisane kot majhni ravni kosi, približno 7,5° drug od drugega, zato je ukrivljeno telo od blizu videti nekoliko poliedrsko.

## Shranjevanje in izvoz

Shranjevanje ohrani 3D model v DWG in v DXF. Vsaka ploskev gre zapisana kot 3D ploskev na sloju `CC-3D`, da drugi programi prikažejo telesa, CadCraft pa hrani svojo natančno kopijo v datoteki, ki jo prebere, ko risbo znova odprete, z 3D pogledom takšnim, kakršen je bil (kamera, projekcija in vizualni slog). 3D ploskve iz drugih programov pridejo na zavihek 3D kot ločene ploskve, zbrane v eno skupino. 3D ploskev v bloku pride enkrat za vsak sklic na ta blok v modelu, postavljena in zasukana kot sklic; v samem bloku in na listu je 3D ploskev narisana ravno, kot njen obris.

{{ui:Export}} v skupini 3D izvozi samo telesa: GLB za pregledovalnike in splet ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ali STL za 3D tiskanje, v milimetrih ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} vpraša, katerega.

:::note
3D model je v naravni velikosti. Risba brez enot šteje kot milimetre, zato je `1000` en meter. Če kasneje spremenite enote risbe (Lastnosti, ko nič ni izbrano), se telesa skalirajo z njimi, da ostanejo na risbi, zgodovina pa to pove. En {{key:Mod+Z}} razveljavi spremembo enot in skaliranje skupaj.
:::
