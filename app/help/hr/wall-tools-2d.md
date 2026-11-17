---
title: Oblici zidova, rezovi, odmaci i zaključavanja za 2D zidove
summary: Crtajte zidove kao pravokutnike, poligone i lukove, dijelite ih i ponovno spajajte, pomičite ih za zadanu dimenziju te zaključajte jedan zid uz drugi ili uz liniju mreže. Isti alati kao za zidove u BimCraftu.
keywords: zid, zidovi, traka zidova, gumbi zidova, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stil spoja, kosi rez, ravan, ravni rez, lokot, ručka, povlačenje kraja, rotiraj, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spoj, zabrani spajanje, zaključavanje, linija mreže, podjela, razmak, odmak, linija lokacije
from: f41e7433
---

Ovi alati rade na 2D zidovima iz `WALL` (vidi „Crtajte pametne zidove, vrata i prozore u 2D“). Koriste ista pravila kao alati za zidove u BimCraftu, pa se zid ponaša jednako u oba programa.

## Gdje su alati

- Na alatnoj traci grupa {{ui:Zidovi}} ima {{ui:Zid}}, {{ui:Pravokutnik}}, {{ui:Podijeli}} i {{ui:Odmakni}}. Njezin izbornik {{ui:Više}} ima sve ostale alate za zidove, svaki sa svojom ikonom.
- U stilovima s vrpcom kartica {{ui:Zidovi}} ima ploče {{ui:Crtaj zidove}}, {{ui:Izreži}}, {{ui:Postavi i izmijeni}}, {{ui:Zadrži}} i {{ui:Spoji}}.
- U rasporedu retci alatne trake i okvir alata prikazuju istu grupu {{ui:Zidovi}}.
- Možete upisati i bilo koju naredbu navedenu ispod.

## Spojevi se pohranjuju

Kad kraj zida završi na drugom zidu, CadCraft taj spoj sprema uz oba zida. Ne računa ga ponovno iz toga gdje se krajevi slučajno nalaze. Dakle:

- Zidovi spojeni na zid koji pomičete slijede ga i ostaju spojeni. Njihovi krajevi kližu po vlastitim linijama, pa se ništa ne okreće.
- Povucite jedan kraj zida za njegovu ručku i zid spojen tamo zadržava svoj smjer. Njegov kraj klizi po vlastitoj liniji da se susretne sa zidom koji povlačite, pa kraj koji povlačite ne mora uvijek biti pod kursorom. Pregled pokazuje gdje. Zid koji se naslanja na zid koji povlačite slijedi ga po vlastitoj liniji. Povlačenje kraja ravno duž zida mijenja njegovu duljinu, a zid spojen tamo pomiče se s njim.
- `ROTATE` na spojenom zidu radi jednako: krajevi njegovih susjeda kližu po svojim linijama do okrenutog zida.
- Za pomicanje kuta odaberite oba zida koji se tu spajaju i povucite ručku na kutu. Oba zida ostaju na kutu i oba se okreću. Zidovi dalje ostaju kakvi jesu.
- Držite {{key:Alt}} kad kliknete novo mjesto ručke da namjerno prekinete spojeve: zid ide tamo gdje ste ga stavili i ništa ne slijedi.
- Ako bi povlačenje okrenulo spojeni zid kroz vlastiti daleki kraj, odbija se i ništa se ne mijenja.
- Zid koji nacrtate s {{ui:Ne dopusti spajanja}} (`D` u `WALL`) ili isključite u Svojstvima ({{ui:Ne dopusti spajanje na početku}}, {{ui:Ne dopusti spajanje na kraju}}) ostaje slobodan na tom kraju, čak i kad dodiruje drugi zid, dok ga ponovno ne dopustite.
- `WALLDISJOIN` ({{ui:Zabrani spajanje}} u grupi {{ui:Zidovi}}) radi isto jednim klikom: kliknite zid blizu jednog kraja da zabranite spajanja na tom kraju, a kliknite ga ponovno da ih dopustite.
- Stariji crtež nema još spremljenih spojeva. Prva promjena koju napravite pronađe ih jednom, iz toga kako su zidovi stajali prije promjene, i spremi ih. `WALLJOINS` to radi odmah.
- DWG i DXF datoteke nose spojeve unutar svakog zida. CadCraft ih čita onako kako su spremljeni. Program koji ne čuva proširene podatke prikazuje zidove kao obične blokove i odbacuje spojeve, a spoj čiji su zidovi pomaknuti u drugom programu odbacuje se pri sljedećoj promjeni bilo kojeg od ta dva zida.

## Stil spoja kuta

Kut na kojem se dva zida sastaju kraj na kraj crta se kao kosi rez, osim ako ne odaberete drugi stil.

- `WALLJOINSTYLE` ({{ui:Stil spoja}} u grupi {{ui:Zidovi}}): kliknite kut. Svaki klik prelazi na sljedeći stil: {{ui:Kosi rez}}, {{ui:Ravan}}, {{ui:Ravni rez}}, pa opet {{ui:Kosi rez}}. Upišite `T` da zamijenite koji od dva zida prolazi kroz kut koji ste zadnji kliknuli. Pritisnite {{key:Enter}} za završetak. Jedno pokretanje naredbe je jedan korak poništavanja.
- {{ui:Ravan}}: jedan zid prolazi do daleke strane drugoga, a drugi staje uz njegovu stranu. {{ui:Ravni rez}}: isto, ali zid koji prolazi završava okomito na samog sebe. Pod pravim kutom njih dvoje izgledaju isto.
- U Svojstvima zida: {{ui:Stil spoja na početku}}, {{ui:Stil spoja na kraju}}, te {{ui:Prolazi kroz na početku}}, {{ui:Prolazi kroz na kraju}}.
- Stil se sprema s oba zida i putuje u DWG i DXF datotekama. Kopija zida počinje bez njega.
- T spoj nema stil za odabir: prolazi zid čija je strana dodirnuta. Kut na kojem se sastaju tri ili više zidova ostaje kosi rez. Tako ostaje i vrlo oštar kut (manji od oko 30 stupnjeva) te dva zida u istoj liniji.

## Crtanje oblika zidova

Svaki od njih pravi zidove u jednom koraku poništavanja, s povezanim kutovima. U `WALL`, `O` postavlja pomak postavljanja (koliko lijevo od vaših klikova ide zid), a `D` isključuje spajanje za zidove koje sljedeće crtate.

- `WALLRECT` (`WR`): dva suprotna kuta, kao `RECTANG`.
- `WALLROT`: prva stranica, zatim koliko daleko ide druga stranica, za pravokutnik pod bilo kojim kutom.
- `WALLPOLY` (`WP`): broj stranica (3 do 64), središte, `I` za upisani ili `C` za opisani, zatim polumjer, kao `POLYGON`.
- `WALLARC` (`WARC`): središte, početak, kraj. `D` okreće luk na drugu stranu.
- `WALLTAN`: kliknite blizu kraja zida, zatim kraj luka, koji polazi duž tog zida.
- `WALLPICK`: kliknite liniju ili polilinija i recite treba li uzeti i linije spojene s njom.
- `WALLTRACE`: kliknite unutar zatvorenog područja linija i zidova da stavite zidove oko najmanjega.

Zidovi u tlocrtu su ravni, pa se luk crta kao kratki ravni zidovi od po 15 stupnjeva. Spajaju se kao svaki kut.

## Rezanje zidova

- `WALLSPLIT` (`WS`): kliknite zid, zatim točku. `C` reže tamo gdje ga drugi zid siječe, `G` ostavlja razmak između dijelova, `F` čini krajeve reza slobodnima umjesto spojenih. Prvi dio zadržava mjesto zida u crtežu, a vrata i prozori idu sa svojim dijelom. Rez kroz vrata ili prozor se odbija.
- {{ui:Podijeli s razmakom}} (`WALLSPLITGAP`): isti rez, ali prvo traži razmak.
- `WALLDELSEG`: kliknite zid, zatim dva kraja dijela koji se briše.
- `WALLREJOIN`: kliknite dva dijela jednog zida da ih ponovno spojite u jedan.

## Pomicanje zidova za udaljenost

- `WALLDIM`: kliknite linearnu ili poravnatu kotu koja ide od jednog zida do drugoga, zatim upišite novu vrijednost. Zid na dalekom kraju pomiče se okomito na sebe, zid na prvom kraju ostaje, a zidovi spojeni uz njega slijede.
- `WALLOFFSET` (`WO`): kliknite zid, zatim stranu na koju ga pomičete (`D` upisuje udaljenost, `C` umjesto toga pravi kopiju).
- `WALLSTRETCH`: prozor oko krajeva zida, zatim početna točka i druga točka.
- U Svojstvima upisana {{ui:Duljina}} zadržava početak i s njim vodi zid spojen na daleki kraj, a nova {{ui:Debljina}} raste od {{ui:Linija lokacije}} koju odaberete (lijeva strana, desna strana ili središte).

## Zaključavanje zidova

Lokot ostaje uz zid u datoteci. Ako pomaknete jedan zaključani zid, drugi ga slijedi. Ako jedna promjena pomiče oba zida različito, odbija se i ništa se ne mijenja.

- `WALLHOLD`: zaključava zid uz drugi zid. `A` ga prvo pomiče na liniju drugog zida, `K` zadržava udaljenost koju ima.
- `WALLHOLDDIM`: zaključava udaljenost između dva paralelna zida.
- `WALLGRID`: zaključava zid uz liniju mreže (liniju na sloju mreže s njezinom oznakom u tekstu na jednom kraju), ili duž nje ili s jednim krajem na njoj. Zid zaključan duž linije zadržava udaljenost koju ima od nje. Pomaknite liniju mreže s `GRIDMOVE` i zid se cijeli pomiče sa svojim spojenim zidovima. Zid koji leži duž linije mreže pomiče se cijeli s njom i bez lokota, a zid koji samo završava na liniji rasteže se tim krajem.
- `WALLHOLDS` popisuje lokote. `WALLUNHOLD` skida lokote sa zida.
- Svaki lokot prikazuje se kao mali lokot na tlocrtu: uz sredinu zaključanog zida ili uz kraj koji je zaključan za liniju mreže. Kliknite lokot da skinete taj lokot.

## Što ovdje još nije

Lokoti koriste središnje linije zidova. Zidovi ovdje nemaju slojeve, pa na spoju nema prednosti sloja, a zidovi se ne savijaju (vidi lukove gore). Nitko još nije isprobao ove alate na velikom crtežu, a nisu provjereni ni u drugom CAD programu.
