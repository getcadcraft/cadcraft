---
title: Oblici zidova, presjeci, odmaci i zaključavanja za 2D zidove
summary: Crtajte zidove kao pravougaonike, poligone i lukove, sječite i ponovo spajajte ih, pomjerajte ih po dimenziji i zaključajte jedan zid za drugi ili za liniju mreže. Isti alati kao za zidove u BimCraft-u.
keywords: zid, trake sa zidovima, dugmad zidova, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stil spoja, kosi spoj, ravno, pravo odsječen, lokot, hvataljka, povuci kraj, rotiraj, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spoj, zabrani spoj, zaključavanje, linija mreže, presjek, razmak, odmak, linija lokacije
from: 49044181
---

Ovi alati rade s 2D zidovima iz `WALL` (vidi „Crtanje pametnih zidova, vrata i prozora u 2D“). Koriste ista pravila kao alati za zidove u BimCraft-u, pa se zid ponaša jednako u oba.

## Gdje su alati

- Na traci s alatima, grupa {{ui:Zidovi}} ima {{ui:Zid}}, {{ui:Pravougaonik}}, {{ui:Podijeli}} i {{ui:Odmak}}. Njen meni {{ui:Više}} ima svaki drugi alat za zidove, svaki sa svojom ikonom.
- U stilovima menija s trakom, jezičak {{ui:Zidovi}} ima panele {{ui:Crtaj zidove}}, {{ui:Izreži}}, {{ui:Postavi i izmijeni}}, {{ui:Zadrži}} i {{ui:Spoji}}.
- U rasporedu lista, redovi alata i kutija s alatima prikazuju istu grupu {{ui:Zidovi}}.
- Možete i ukucati bilo koju naredbu navedenu ispod.

## Spojevi se čuvaju

Kad kraj zida padne na drugi zid, CadCraft čuva taj spoj uz oba zida. Više ne izračunava spojeve iz toga gdje se krajevi slučajno nalaze. Dakle:

- Zidovi spojeni s zidom koji pomjerate prate ga i ostaju spojeni. Njihovi krajevi klize duž sopstvenih linija, pa se ništa ne okreće.
- Prevucite jedan kraj zida za njegovu hvataljku, a zid spojen tamo takođe zadržava svoj smjer. Njegov kraj klizi duž sopstvene linije da sretne prevučeni zid, pa prevučeni kraj ne padne uvijek pod kursor, nego na tu liniju. Pregled pokazuje gdje. Zid koji se naslanja na prevučeni zid prati ga duž sopstvene linije. Prevlačenje kraja pravo duž zida mijenja njegovu dužinu, a zid spojen tamo se pomjera s njim.
- `ROTATE` na spojenom zidu radi isto: krajevi njegovih susjeda klize duž sopstvenih linija do okrenutog zida.
- Da pomjerite ugao, odaberite oba zida koji se tamo sastaju i prevucite hvataljku na uglu. Oba zida ostaju na uglu i oba se okreću. Zidovi dalje ostaju kakvi su bili.
- Držite {{key:Alt}} kad kliknete novo mjesto hvataljke da namjerno prekinete spojeve: zid ide tamo gdje ste ga stavili, a ništa ga ne prati.
- Ako bi prevlačenje okrenulo spojeni zid nazad kroz sopstveni daleki kraj, ono se odbija i ništa se ne mijenja.
- Zid koji crtate sa {{ui:Zabrani spajanja}} (`D` u `WALL`), ili isključite u Svojstvima ({{ui:Zabrani spajanje na početku}}, {{ui:Zabrani spajanje na kraju}}), ostaje slobodan na tom kraju, čak i ako dodiruje drugi zid, dok ga ponovo ne dozvolite.
- `WALLDISJOIN` ({{ui:Zabrani spajanje}} u grupi {{ui:Zidovi}}) radi isto klikom: kliknite zid blizu jednog kraja da zabranite spojeve na tom kraju, a kliknite ga ponovo da ih dozvolite.
- Stariji crtež još nema sačuvane spojeve. Prva promjena koju napravite pronalazi ih jednom, iz toga kako su zidovi stajali prije promjene, i čuva ih. `WALLJOINS` to radi odmah.
- DWG i DXF datoteke nose spojeve unutar svakog zida. CadCraft ih čita nazad onako kako su spašeni. Program koji ne čuva proširene podatke prikazuje zidove kao obične blokove i odbacuje spojeve, a spoj čiji su zidovi pomjereni u drugom programu odbacuje se sljedeći put kad promijenite bilo koji od zidova.

## Stil spoja ugla

Ugao gdje se dva zida sastaju kraj na kraj crta se kao kosi spoj, osim ako izaberete drugi stil.

- `WALLJOINSTYLE` ({{ui:Stil spoja}} u grupi {{ui:Zidovi}}): kliknite ugao. Svaki klik prelazi na sljedeći stil: {{ui:Kosi spoj}}, {{ui:Ravno}}, {{ui:Pravo odsječen}}, pa opet {{ui:Kosi spoj}}. Ukucajte `T` da zamijenite koji od dva zida prolazi kroz ugao koji ste kliknuli posljednji. Pritisnite {{key:Enter}} da završite. Jedno pokretanje naredbe je jedan korak poništavanja.
- {{ui:Ravno}}: jedan zid ide do daleke strane drugog, a drugi staje uz njegovu stranu. {{ui:Pravo odsječen}}: isto, ali zid koji prolazi završava pod pravim uglom prema sebi. Pod pravim uglom njih dvoje izgledaju isto.
- U Svojstvima zida: {{ui:Stil spoja na početku}}, {{ui:Stil spoja na kraju}}, i {{ui:Ide kroz na početku}}, {{ui:Ide kroz na kraju}}.
- Stil se čuva uz oba zida i putuje u DWG i DXF datotekama. Kopija zida počinje bez njega.
- T spoj nema stil za izbor: zid čija se strana sretne prolazi kroz. Ugao gdje se sastaju tri ili više zidova ostaje kosi spoj. Tako i veoma oštar ugao (ispod oko 30 stepeni) i dva zida u jednoj liniji.

## Crtanje oblika zidova

Svaki od njih pravi zidove u jednom koraku poništavanja, sa spojenim uglovima. U `WALL`, `O` postavlja odmak pozicije (koliko daleko lijevo od vaših klikova ide zid), a `D` isključuje spajanje za zidove koje sljedeće crtate.

- `WALLRECT` (`WR`): dva suprotna ugla, kao `RECTANG`.
- `WALLROT`: prva stranica, zatim koliko daleko ide druga stranica, za pravougaonik pod bilo kojim uglom.
- `WALLPOLY` (`WP`): broj stranica (3 do 64), centar, `I` za upisani ili `C` za opisani, zatim poluprečnik, kao `POLYGON`: kliknite ga ili ga ukucajte (ukucani poluprečnik ide prema pokazivaču, ili duž X kad je pokazivač još na centru).
- `WALLARC` (`WARC`): centar, početak, kraj. `D` okreće luk na drugu stranu.
- `WALLTAN`: kliknite blizu kraja zida, zatim kraj luka, koji polazi duž tog zida.
- `WALLPICK`: kliknite liniju ili polilinju i recite da li da uzmete i linije spojene uz nju.
- `WALLTRACE`: kliknite unutar zatvorenog područja linija i zidova da postavite zidove oko najmanjeg.

Zidovi u planu su pravi, pa se luk crta kao kratki pravi zidovi od po 15 stepeni. Spajaju se kao svaki ugao.

## Presijecanje zidova

- `WALLSPLIT` (`WS`): kliknite zid, zatim tačku. `C` sječe tamo gdje ga drugi zid siječe, `G` ostavlja razmak između dijelova, `F` čini krajeve reza slobodnim umjesto spojenim. Prvi dio zadržava mjesto zida u crtežu, a vrata i prozori idu sa svojim dijelom. Rez kroz vrata ili prozor se odbija.
- `WALLSPLITGAP` ({{ui:Podijeli s razmakom}}): isto razdvajanje, ali prvo pita za razmak.
- `WALLDELSEG`: kliknite zid, zatim dva kraja dijela koji se briše.
- `WALLREJOIN`: kliknite dva dijela jednog zida da ih ponovo napravite jednim.

## Pomjeranje zidova po dimenziji

- `WALLDIM` ({{ui:Izmijeni po dimenziji}}): kliknite linearnu ili poravnatu kotu koja ide od jednog zida do drugog, zatim ukucajte novu vrijednost. Zid na daljnjem kraju pomjera se pod pravim uglom prema sebi, zid na prvom kraju ostaje, a zidovi spojeni uz njega prate. Daleka tačka kote pomjera se sa svojim zidom, pa kota prikazuje vrijednost koju ste ukucali.
- `WALLOFFSET` (`WO`): kliknite zid, zatim stranu na koju ga pomjerate (`D` ukucava dužinu, `C` umjesto toga pravi kopiju).
- `WALLSTRETCH`: prozor oko krajeva zida, zatim osnovna tačka i druga tačka.
- U Svojstvima, ukucana {{ui:Dužina}} zadržava početak i s njom vodi zid spojen na dalekom kraju, a nova {{ui:Debljina}} raste od {{ui:Linija lokacije}} koju ste izabrali (lijeva strana, desna strana ili sredina).

## Kotiranje između središnjih linija zidova

Središnja linija zida se ne crta, ali hvatanje objekata je pronalazi. Uz uključeno hvatanje objekata ({{key:F3}}), pomjerite pokazivač preko sredine debljine zida: oznaka kaže Središte zida: kraj ili Središte zida: sredina, a središnja linija se prikazuje kao isprekidana dok je oznaka na njoj. Uz {{ui:Normalno}} ili {{ui:Najbliži}} uključene na spisku hvatanja objekata, i oni rade na središnjoj liniji.

1. Pokrenite `DIMLINEAR` (ili `DIMALIGNED`).
2. Kliknite prvi zid gdje oznaka kaže Središte zida: sredina ili Središte zida: kraj.
3. Kliknite drugi zid na isti način, zatim kliknite gdje ide linija kote.
4. Da promijenite razmak, pokrenite `WALLDIM`, kliknite kotu i ukucajte novu vrijednost. Drugi zid se pomjera.

Hvatanje središnje linije radi u svakoj naredbi koja traži tačku.

## Zaključavanje zidova

Zaključavanje ostaje uz zid u datoteci. Ako pomjerite jedan zaključani zid, drugi ga prati. Ako jedna promjena pomjera oba zida različito, odbija se i ništa se ne mijenja.

- `WALLHOLD`: zaključajte zid za drugi zid. `A` prvo ga pomjera na liniju drugog zida, `K` zadržava razmak koji ima.
- `WALLHOLDDIM`: zaključajte razmak između dva paralelna zida.
- `WALLGRID`: zaključajte zid za liniju mreže (linija na sloju mreže sa svojom oznakom u tekstu na jednom kraju), ili duž nje ili jednim krajem na njoj. Zid zaključan duž linije zadržava razmak koji ima od nje. Pomjerite liniju mreže sa `GRIDMOVE` i zid prati cijeli, sa svojim spojenim zidovima. Zid koji leži duž linije mreže pomjera se cijel s njom čak i bez zaključavanja, a zid koji se samo završava na liniji rasteže se tim krajem.
- `WALLHOLDS` navodi zaključavanja. `WALLUNHOLD` skida zaključavanja sa zida.
- Svako zaključavanje prikazuje mali lokot na planu: pored sredine zaključanog zida, ili pored kraja koji je zaključan za liniju mreže. Kliknite lokot da skinete to zaključavanje.

## Šta još nije tu

Zaključavanja koriste središnje linije zidova. Zidovi ovdje nemaju slojeve, pa na spoju nema prioriteta sloja, a zidovi se ne savijaju (vidi lukove iznad). Niko nije isprobao ove alate na velikom crtežu, a nisu provjereni u drugom CAD programu.
