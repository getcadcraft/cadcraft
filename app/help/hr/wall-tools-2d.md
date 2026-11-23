---
title: Oblici zidova, rezovi, pomaci i zaključavanja za 2D zidove
summary: Crtajte zidove kao pravokutnike, poligone i lukove, razdvajajte ih i spajajte, pomičite ih za zadanu kotu te zaključavajte jedan zid uz drugi ili uz liniju mreže. Isti alati kao za zidove u programu BimCraft.
keywords: zid, zidovi, traka zidova, gumbi zidova, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stil spoja, kosi rez, ravan, ravni rez, lokot, ručka, povlačenje kraja, zakreni, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spoj, zabrani spajanje, zaključavanje, linija mreže, podjela, razmak, pomak, linija položaja
from: 49044181
---

Ovi alati rade s 2D zidovima iz `WALL` (vidi „Crtanje pametnih zidova, vrata i prozora u 2D“). Rabe ista pravila kao alati za zidove u BimCraftu, pa se zid ponaša jednako u oba.

## Gdje su alati

- Na alatnoj traci skupina {{ui:Zidovi}} ima {{ui:Zid}}, {{ui:Pravokutnik}}, {{ui:Podijeli}} i {{ui:Odmakni}}. Njezin izbornik {{ui:Više}} ima svaki drugi alat za zidove, svaki sa svojom ikonom.
- U stilovima izbornika s vrpcom kartica {{ui:Zidovi}} ima ploče {{ui:Crtaj zidove}}, {{ui:Izreži}}, {{ui:Postavi i izmijeni}}, {{ui:Zadrži}} i {{ui:Spoji}}.
- U listu, retci alata i okvir s alatima prikazuju istu skupinu {{ui:Zidovi}}.
- Možete upisati i bilo koju naredbu navedenu niže.

## Spojevi se pohranjuju

Kad kraj zida padne na drugi zid, CadCraft sprema taj spoj uz oba zida. Više ne izračunava spojeve iznova iz toga gdje se krajevi slučajno nalaze. Dakle:

- Zidovi spojeni uz zid koji pomaknete slijede ga i ostaju spojeni. Njihovi se krajevi klize po vlastitim linijama, pa se ništa ne okreće.
- Povucite jedan kraj zida za njegovu ručku i zid spojen tamo također zadržava svoj smjer. Njegov se kraj klizi po vlastitoj liniji da dotakne povučeni zid, pa povučeni kraj završava na toj liniji, a ne uvijek pod kursorom. Pregled pokazuje gdje. Zid koji naliježe na povučeni zid slijedi po vlastitoj liniji. Povlačenje kraja ravno duž zida mijenja njegovu duljinu, a zid spojen tamo ide s njim.
- `ROTATE` na spojenom zidu radi jednako: krajevi njegovih susjeda klize po svojim linijama do okrenutog zida.
- Za pomicanje kuta odaberite oba zida koji se tamo sastaju i povucite ručku na kutu. Oba zida ostaju na kutu i oba se okreću. Zidovi dalje ostaju kakvi su bili.
- Držite {{key:Alt}} kad kliknete novo mjesto ručke da namjerno prekinete spojeve: zid ide tamo gdje ga stavite i ništa ne slijedi.
- Ako bi povlačenje okrenulo spojeni zid natrag kroz vlastiti daleki kraj, odbija se i ništa se ne mijenja.
- Zid koji nacrtate s {{ui:Ne dopusti spajanja}} (`D` u `WALL`), ili isključite u Svojstvima ({{ui:Ne dopusti spajanje na početku}}, {{ui:Ne dopusti spajanje na kraju}}), ostaje slobodan na tom kraju, čak i ako dotiče drugi zid, dok ga ponovno ne dopustite.
- `WALLDISJOIN` ({{ui:Zabrani spajanje}} u skupini {{ui:Zidovi}}) radi isto klikom: kliknite zid blizu jednog kraja da zabranite spojeve na tom kraju, a ponovno kliknite da ih dopustite.
- Stariji crtež još nema pohranjene spojeve. Prva promjena koju napravite pronalazi ih jednom, iz toga kako su zidovi stajali prije promjene, i sprema ih. `WALLJOINS` to radi odmah.
- Datoteke DWG i DXF nose spojeve unutar svakog zida. CadCraft ih čita kako su spremljeni. Program koji ne čuva proširene podatke prikazuje zidove kao obične blokove i odbacuje spojeve, a spoj čiji su zidovi pomaknuti u drugom programu odbacuje se sljedeći put kad promijenite jedan od zidova.

## Stil spoja kuta

Kut na kojem se dva zida sastaju kraj uz kraj crta se kao kosi rez, osim ako odaberete drugi stil.

- `WALLJOINSTYLE` ({{ui:Stil spoja}} u skupini {{ui:Zidovi}}): kliknite kut. Svaki klik ide na sljedeći stil: {{ui:Kosi rez}}, {{ui:Ravan}}, {{ui:Ravni rez}}, zatim opet {{ui:Kosi rez}}. Upišite `T` da zamijenite koji od dvaju zidova prolazi kroz kut koji ste zadnji kliknuli. Pritisnite {{key:Enter}} za završetak. Jedno izvođenje naredbe je jedan korak poništavanja.
- {{ui:Ravan}}: jedan zid prolazi do daljnje strane drugog, a drugi staje uz njegovu stranu. {{ui:Ravni rez}}: isto, ali zid koji prolazi završava okomito na sebe. Pod pravim kutom njih dvoje izgledaju isto.
- U Svojstvima zida: {{ui:Stil spoja na početku}}, {{ui:Stil spoja na kraju}} i {{ui:Prolazi kroz na početku}}, {{ui:Prolazi kroz na kraju}}.
- Stil se sprema uz oba zida i putuje u datotekama DWG i DXF. Kopija zida počinje bez njega.
- T spoj nema stil za odabir: zid čija se strana dotiče prolazi kroz. Kut na kojem se sastaju tri ili više zidova ostaje kosi rez. Tako je i vrlo oštar kut (manji od oko 30 stupnjeva) i dva zida u jednoj liniji.

## Crtanje oblika zidova

Svaki od njih izrađuje zidove u jednom koraku poništavanja, s spojenim kutovima. U `WALL`, `O` postavlja pomak postavljanja (koliko lijevo od vaših klikova zid ide), a `D` isključuje spajanje za zidove koje sljedeće nacrtate.

- `WALLRECT` (`WR`): dva suprotna kuta, kao `RECTANG`.
- `WALLROT`: prva strana, zatim koliko daleko ide druga strana, za pravokutnik pod bilo kojim kutom.
- `WALLPOLY` (`WP`): broj stranica (3 do 64), središte, `I` za upisani ili `C` za opisani, zatim polumjer, kao `POLYGON`: kliknite ga ili ga upišite (upisani polumjer ide prema pokazivaču, ili duž X kad je pokazivač još na središtu).
- `WALLARC` (`WARC`): središte, početak, kraj. `D` okreće luk na drugu stranu.
- `WALLTAN`: kliknite blizu kraja zida, zatim kraj luka, koji polazi duž tog zida.
- `WALLPICK`: kliknite liniju ili poliliniju i recite želite li uzeti i linije spojene uz nju.
- `WALLTRACE`: kliknite unutar zatvorenog područja linija i zidova da stavite zidove oko najmanjeg.

Zidovi nacrta su ravni, pa se luk crta kao kratki ravni zidovi od po 15 stupnjeva. Spajaju se kao svaki kut.

## Rezanje zidova

- `WALLSPLIT` (`WS`): kliknite zid, zatim točku. `C` reže gdje ga drugi zid siječe, `G` ostavlja razmak između dijelova, `F` čini krajeve reza slobodnima umjesto spojenima. Prvi dio zadržava mjesto zida u crtežu, a vrata i prozori idu sa svojim dijelom. Rez kroz vrata ili prozor se odbija.
- `WALLSPLITGAP` ({{ui:Podijeli s razmakom}}): isto razdvajanje, ali najprije pita za razmak.
- `WALLDELSEG`: kliknite zid, zatim dva kraja dijela za brisanje.
- `WALLREJOIN`: kliknite dva dijela jednog zida da ih ponovno napravite jednim.

## Pomicanje zidova za udaljenost

- `WALLDIM` ({{ui:Uredi prema kotama}}): kliknite linearnu ili poravnatu kotu koja ide od jednog zida do drugog, zatim upišite novu vrijednost. Zid na dalekom kraju pomiče se okomito na samog sebe, zid na prvom kraju ostaje, a zidovi spojeni uz njega slijede. Daleka točka kote pomiče se sa svojim zidom, pa kota prikazuje vrijednost koju ste upisali.
- `WALLOFFSET` (`WO`): kliknite zid, zatim stranu na koju ga pomičete (`D` upisuje udaljenost, `C` umjesto toga izrađuje kopiju).
- `WALLSTRETCH`: prozor oko krajeva zida, zatim bazna točka i druga točka.
- U Svojstvima, upisana {{ui:Duljina}} zadržava početak i s njim vodi zid spojen na dalekom kraju, a nova {{ui:Debljina}} raste od {{ui:Linija položaja}} koju ste odabrali (lijeva strana, desna strana ili središte).

## Kota između središnjih linija zidova

Središnja linija zida se ne crta, ali je hvatanje objekata pronalazi. S uključenim hvatanjem objekata ({{key:F3}}) pomaknite pokazivač preko sredine debljine zida: oznaka čita `Wall center: endpoint` ili `Wall center: midpoint`, a središnja linija prikazuje se kao crtkana dok je oznaka na njoj. Uz uključene {{ui:Okomito}} ili {{ui:Najbliže}} na popisu hvatanja objekata, ti rade i na središnjoj liniji.

1. Pokrenite `DIMLINEAR` (ili `DIMALIGNED`).
2. Kliknite prvi zid gdje oznaka čita `Wall center: midpoint` ili `Wall center: endpoint`.
3. Kliknite drugi zid na isti način, zatim kliknite gdje ide kotna linija.
4. Za promjenu udaljenosti pokrenite `WALLDIM`, kliknite kotu i upišite novu vrijednost. Drugi zid se pomiče.

Hvatanje središnje linije radi u svakoj naredbi koja traži točku.

## Zaključavanje zidova

Zaključavanje ostaje uz zid u datoteci. Ako pomaknete jedan zaključani zid, drugi slijedi. Ako jedna promjena pomiče oba zida različito, odbija se i ništa se ne mijenja.

- `WALLHOLD`: zaključajte zid uz drugi zid. `A` ga prvo pomiče na liniju drugog zida, `K` zadržava udaljenost koju ima.
- `WALLHOLDDIM`: zaključava udaljenost između dvaju paralelnih zidova.
- `WALLGRID`: zaključava zid uz liniju mreže (linija na sloju mreže s oznakom u tekstu na jednom kraju), ili duž nje ili s jednim krajem na njoj. Zid zaključan duž linije zadržava udaljenost koju ima od nje. Pomaknite liniju mreže s `GRIDMOVE` i zid slijedi cijeli, sa svojim spojenim zidovima. Zid koji leži duž linije mreže pomiče se cijeli s njom čak i bez zaključavanja, a zid koji samo završava na liniji rasteže se tim krajem.
- `WALLHOLDS` navodi zaključavanja. `WALLUNHOLD` skida zaključavanja sa zida.
- Svako zaključavanje prikazuje mali lokot na nacrtu: uz sredinu zaključanog zida ili uz kraj zaključan uz liniju mreže. Kliknite lokot da uklonite to zaključavanje.

## Što ovdje još nije

Zaključavanja rabe središnje linije zidova. Zidovi ovdje nemaju slojeve, pa na spoju nema prednosti sloja, a zidovi se ne zakrivljuju (vidi lukove iznad). Nitko nije isprobao ove alate na velikom crtežu, a nisu provjereni u drugom CAD programu.
