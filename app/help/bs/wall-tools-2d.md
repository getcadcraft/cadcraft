---
title: Oblici zidova, presjeci, odmaci i zaključavanja za 2D zidove
summary: Crtaj zidove kao pravougaonike, poligone i lukove, dijeli ih i spajaj ponovo, pomjeraj ih za kotu, i zaključaj jedan zid za drugi ili za liniju mreže. Isti alati kao zidovi u BimCraftu.
keywords: zid, alatna traka zidova, dugmad za zidove, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stil spoja, kosi spoj, ravno, pravo odsječen, lokot, hvatište, povuci kraj, rotiraj, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spoj, zabrani spajanje, zaključaj, linija mreže, podijeli, razmak, odmak, linija lokacije
from: f41e7433
---

Ovi alati rade na 2D zidovima iz `WALL` (vidi "Crtaj pametne zidove, vrata i prozore u 2D"). Koriste ista pravila kao alati za zidove u BimCraftu, pa se zid ponaša jednako u oba programa.

## Gdje su alati

- Na alatnoj traci grupa {{ui:Zidovi}} ima {{ui:Zid}}, {{ui:Pravougaonik}}, {{ui:Podijeli}} i {{ui:Odmak}}. Njen meni {{ui:Više}} ima sve ostale alate za zidove, svaki sa svojom ikonom.
- U stilovima trake s karticama, kartica {{ui:Zidovi}} ima panele {{ui:Crtaj zidove}}, {{ui:Izreži}}, {{ui:Postavi i izmijeni}}, {{ui:Zadrži}} i {{ui:Spoji}}.
- U rasporedu, redovi alatne trake i kutija s alatima pokazuju istu grupu {{ui:Zidovi}}.
- Možeš ukucati bilo koju komandu navedenu ispod.

## Spojevi se čuvaju

Kad se kraj zida nađe na drugom zidu, CadCraft taj spoj čuva uz oba zida. Više ne računa spojeve iznova iz toga gdje se krajevi slučajno nalaze. Dakle:

- Zidovi spojeni na zid koji pomjeraš prate ga i ostaju spojeni. Njihovi krajevi kližu duž svojih linija, pa se ništa ne okreće.
- Povuci jedan kraj zida za njegovo hvatište, pa zid spojen tamo također zadržava svoj smjer. Njegov kraj kliže duž svoje linije da se sastane s povučenim zidom, pa se povučeni kraj ne nalazi uvijek ispod kursora. Pregled pokazuje gdje. Zid koji udara u povučeni zid prati ga duž svoje linije. Povlačenje kraja ravno duž zida mijenja njegovu dužinu, a zid spojen tamo se pomjera s njim.
- `ROTATE` na spojenom zidu radi isto: krajevi njegovih susjeda klize duž svojih linija do okrenutog zida.
- Da pomjeriš ugao, izaberi oba zida koja se tu sastaju i povuci hvatište na uglu. Oba zida ostaju na uglu i oba se okreću. Zidovi dalje ostaju kakvi su bili.
- Drži {{key:Alt}} kad klikneš novo mjesto hvatišta da namjerno prekineš spojeve: zid ide tamo gdje si ga stavio i ništa ne prati.
- Ako bi povlačenje okrenulo spojeni zid kroz njegov vlastiti daleki kraj, odbija se i ništa se ne mijenja.
- Zid koji nacrtaš s {{ui:Zabrani spajanja}} (`D` u `WALL`), ili isključiš u Svojstvima ({{ui:Zabrani spajanje na početku}}, {{ui:Zabrani spajanje na kraju}}), ostaje slobodan na tom kraju, čak i kad dodiruje drugi zid, dok ga ponovo ne dozvoliš.
- `WALLDISJOIN` ({{ui:Zabrani spajanje}} u grupi {{ui:Zidovi}}) radi isto jednim klikom: klikni zid blizu jednog kraja da zabraniš spajanja na tom kraju, a klikni ponovo da ih dozvoliš.
- Stariji crtež nema sačuvane spojeve. Prva promjena koju napraviš ih jednom pronađe iz toga kako su zidovi stajali prije promjene i sačuva ih. `WALLJOINS` to radi odmah.
- DWG i DXF datoteke nose spojeve unutar svakog zida. CadCraft ih čita kako su sačuvani. Program koji ne čuva proširene podatke prikazuje zidove kao obične blokove i odbacuje spojeve, a spoj čiji su zidovi pomjereni u drugom programu odbacuje se sljedeći put kad promijeniš bilo koji od zidova.

## Stil spoja ugla

Ugao gdje se dva zida sastaju kraj do kraja crta se kao kosi spoj, osim ako izabereš drugi stil.

- `WALLJOINSTYLE` ({{ui:Stil spoja}} u grupi {{ui:Zidovi}}): klikni ugao. Svaki klik ide na sljedeći stil: {{ui:Kosi spoj}}, {{ui:Ravno}}, {{ui:Pravo odsječen}}, pa opet {{ui:Kosi spoj}}. Ukucaj `T` da zamijeniš koji od dva zida ide kroz ugao koji si kliknuo posljednji. Pritisni {{key:Enter}} za kraj. Jedno pokretanje komande je jedan korak poništavanja.
- {{ui:Ravno}}: jedan zid ide kroz do daleke strane drugog, a drugi staje uz njegovu stranu. {{ui:Pravo odsječen}}: isto, ali zid koji ide kroz završava pravo prema sebi. Pod pravim uglom njih dvoje izgledaju isto.
- U Svojstvima zida: {{ui:Stil spoja na početku}}, {{ui:Stil spoja na kraju}}, i {{ui:Ide kroz na početku}}, {{ui:Ide kroz na kraju}}.
- Stil se čuva uz oba zida i putuje u DWG i DXF datotekama. Kopija zida počinje bez njega.
- T spoj nema stil koji se bira: zid čija se strana dodiruje ide kroz. Ugao gdje se sastaju tri ili više zidova ostaje kosi spoj. Tako ostaje i vrlo oštar ugao (manji od oko 30 stepeni) i dva zida u jednoj liniji.

## Crtaj oblike zidova

Svaki od njih pravi zidove u jednom koraku poništavanja, sa spojenim uglovima. U `WALL`, `O` postavlja pomak pozicije (koliko lijevo od tvojih klikova ide zid), a `D` isključuje spajanje za zidove koje sljedeće nacrtaš.

- `WALLRECT` (`WR`): dva suprotna ugla, kao `RECTANG`.
- `WALLROT`: prva stranica, pa koliko daleko ide druga stranica, za pravougaonik pod bilo kojim uglom.
- `WALLPOLY` (`WP`): broj stranica (3 do 64), centar, `I` za upisan ili `C` za opisan, pa poluprečnik, kao `POLYGON`.
- `WALLARC` (`WARC`): centar, početak, kraj. `D` okreće luk na drugu stranu.
- `WALLTAN`: klikni blizu kraja zida, pa kraj luka, koji polazi duž tog zida.
- `WALLPICK`: klikni liniju ili poliliniju i reci da li da uzme i linije spojene na nju.
- `WALLTRACE`: klikni unutar zatvorene površine linija i zidova da postaviš zidove oko najmanje.

Zidovi u osnovi su pravi, pa se luk crta kao kratki zidovi od po 15 stepeni. Spajaju se kao svaki ugao.

## Presijecanje zidova

- `WALLSPLIT` (`WS`): klikni zid, pa tačku. `C` presijeca tamo gdje drugi zid siječe ovaj, `G` ostavlja razmak između dijelova, `F` čini krajeve reza slobodnim umjesto spojenih. Prvi dio zadržava mjesto zida u crtežu, a vrata i prozori idu s dijelom na kojem su. Rez kroz vrata ili prozor se odbija.
- {{ui:Podijeli s razmakom}} (`WALLSPLITGAP`): isto dijeljenje, ali prvo traži razmak.
- `WALLDELSEG`: klikni zid, pa dva kraja dijela koji brišeš.
- `WALLREJOIN`: klikni dva dijela jednog zida da ih ponovo spojiš u jedan.

## Pomjeranje zidova za dužinu

- `WALLDIM`: klikni linearnu ili poravnatu kotu koja ide od jednog zida do drugog, pa ukucaj novu vrijednost. Zid na dalekom kraju se pomjera okomito prema sebi, zid na prvom kraju ostaje, a zidovi spojeni na njega prate.
- `WALLOFFSET` (`WO`): klikni zid, pa stranu na koju ga pomjeraš (`D` ukucava razmak, `C` pravi kopiju umjesto toga).
- `WALLSTRETCH`: prozor oko krajeva zida, pa bazna tačka i druga tačka.
- U Svojstvima, ukucana {{ui:Dužina}} zadržava početak i s njim vodi zid spojen na daleki kraj, a nova {{ui:Debljina}} raste od {{ui:Linija lokacije}} koju izabereš (lijeva strana, desna strana ili centar).

## Zaključavanje zidova

Zaključavanje ostaje uz zid u datoteci. Ako pomjeriš jedan zaključan zid, drugi prati. Ako jedna promjena pomjera oba zida različito, odbija se i ništa se ne mijenja.

- `WALLHOLD`: zaključaj zid za drugi zid. `A` ga prvo pomjera na liniju drugog zida, `K` zadržava razmak koji ima.
- `WALLHOLDDIM`: zaključaj razmak između dva paralelna zida.
- `WALLGRID`: zaključaj zid za liniju mreže (linija na sloju mreže s oznakom u tekstu na jednom kraju), bilo duž nje ili s jednim krajem na njoj. Zid zaključan duž linije zadržava razmak koji ima od nje. Pomjeri liniju mreže s `GRIDMOVE` i zid prati cijeli, sa svojim spojenim zidovima. Zid koji leži duž linije mreže pomjera se cijel s njom i bez zaključavanja, a zid koji se samo završava na liniji rasteže se tim krajem.
- `WALLHOLDS` navodi zaključavanja. `WALLUNHOLD` skida zaključavanja sa zida.
- Svako zaključavanje pokazuje mali lokot na planu: pored sredine zaključanog zida, ili pored kraja koji je zaključan za liniju mreže. Klikni lokot da skineš to zaključavanje.

## Šta još nije ovdje

Zaključavanja koriste središnje linije zidova. Zidovi ovdje nemaju slojeve, pa nema prioriteta slojeva na spoju, a zidovi se ne savijaju (vidi lukove iznad). Niko nije probao ove alate na velikom crtežu, i nisu provjereni u drugom CAD programu.
