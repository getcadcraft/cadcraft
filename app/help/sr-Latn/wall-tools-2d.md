---
title: Oblici zidova, preseci, ofseti i zaključavanja za 2D zidove
summary: Crtajte zidove kao pravougaonike, poligone i lukove, delite i ponovo spajajte ih, pomerajte ih za kotu i zaključajte jedan zid za drugi ili za liniju mreže. Isti alati kao zidovi u BimCraft-u.
keywords: zid, zidovi, traka sa zidovima, dugmad za zidove, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stil spoja, mitre, butt, square off, lokot, hvatač, prevuci kraj, okreni, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spoj, zabrani spajanje, zaključaj, linija mreže, podeli, razmak, ofset, linija lokacije
from: 49044181
---

Ovi alati rade nad 2D zidovima iz `WALL` (vidi „Crtanje pametnih 2D zidova, vrata i prozora“). Koriste ista pravila kao zidni alati u BimCraft-u, pa se zid ponaša isto u oba.

## Gde su alati

- Na alatnoj traci grupa {{ui:Zidovi}} ima {{ui:Zid}}, {{ui:Pravougaonik}}, {{ui:Podeli}} i {{ui:Ofset}}. Njen meni {{ui:Više}} ima svaki drugi zidni alat, sa svojom ikonom.
- U stilovima menija sa trakom, kartica {{ui:Zidovi}} ima panele {{ui:Crtaj zidove}}, {{ui:Preseci}}, {{ui:Podesi i menjaj}}, {{ui:Zadrži}} i {{ui:Spoji}}.
- U rasporedu, redovi alata i sanduk alata prikazuju istu grupu {{ui:Zidovi}}.
- Možete ukucati i svaku komandu imenovanu u nastavku.

## Spojevi se čuvaju

Kada se kraj zida nađe na drugom zidu, CadCraft čuva taj spoj uz oba zida. Više ne računa spojeve ponovo iz toga gde se krajevi slučajno nalaze. Dakle:

- Zidovi spojeni sa zidom koji pomerate prate ga i ostaju spojeni. Njihovi krajevi klize duž sopstvenih linija, pa se ništa ne okreće.
- Prevucite jedan kraj zida za njegov hvatač, i zid spojen tamo zadržava svoj pravac. Njegov kraj klizi duž sopstvene linije da sretne prevučeni zid, pa prevučeni kraj sleće na tu liniju, a ne uvek pod kursor. Pregled pokazuje gde. Zid koji naleće na prevučeni zid prati ga duž sopstvene linije. Prevlačenje kraja pravo duž zida menja njegovu dužinu, a zid spojen tamo se pomera s njim.
- `ROTATE` nad spojenim zidom radi isto: krajevi njegovih suseda klize duž sopstvenih linija do okrenutog zida.
- Da pomerite ugao, izaberite oba zida koja se tu sreću i prevucite hvatač na uglu. Oba zida ostaju na uglu i oba se okreću. Zidovi dalje duž toga ostaju kakvi su bili.
- Držite {{key:Alt}} kada kliknete novo mesto hvatača da namerno prekinete spojeve: zid ide tamo gde ste ga stavili, i ništa ga ne prati.
- Ako bi prevlačenje okrenulo spojeni zid kroz njegov sopstveni daleki kraj, odbija se i ništa se ne menja.
- Zid koji nacrtate sa {{ui:Zabrani spajanje}} (`D` u `WALL`), ili isključite u Svojstvima ({{ui:Zabrani spajanje na početku}}, {{ui:Zabrani spajanje na kraju}}), ostaje slobodan na tom kraju, čak i ako dodiruje drugi zid, dok ga ponovo ne dozvolite.
- `WALLDISJOIN` ({{ui:Zabrani spajanje}} u grupi {{ui:Zidovi}}) radi isto klikom: kliknite zid blizu jednog kraja da zabranite spajanje na tom kraju, a kliknite ponovo da ga dozvolite.
- Stariji crtež nema sačuvane spojeve. Prva promena koju napravite ih jednom pronalazi, iz stanja zidova pre promene, i čuva ih. `WALLJOINS` to radi odmah.
- DWG i DXF datoteke nose spojeve unutar svakog zida. CadCraft ih čita onako kako su sačuvani. Program koji ne čuva proširene podatke prikazuje zidove kao obične blokove i odbacuje spojeve, a spoj čiji su zidovi pomereni u drugom programu se odbacuje sledeći put kada promenite jedan od zidova.

## Stil spoja ugla

Ugao gde se dva zida sreću kraj uz kraj crta se kao pokošen (mitre), osim ako izaberete drugi stil.

- `WALLJOINSTYLE` ({{ui:Stil spoja}} u grupi {{ui:Zidovi}}): kliknite ugao. Svaki klik prelazi na sledeći stil: {{ui:Pokošen}}, {{ui:Ravan}}, {{ui:Pravo odsečen}}, pa opet {{ui:Pokošen}}. Ukucajte `T` da zamenite koji od dva zida prolazi kroz ugao na kome ste poslednji put kliknuli. Pritisnite {{key:Enter}} za kraj. Jedno pokretanje komande je jedan korak opozivanja.
- {{ui:Ravan}}: jedan zid prolazi do daleke strane drugog, a drugi staje uz njegovu stranu. {{ui:Pravo odsečen}}: isto, ali zid koji prolazi završava pravo u odnosu na sebe. Pod pravim uglom njih dvoje izgledaju isto.
- U Svojstvima zida: {{ui:Stil spoja na početku}}, {{ui:Stil spoja na kraju}}, i {{ui:Prolazi kroz na početku}}, {{ui:Prolazi kroz na kraju}}.
- Stil se čuva uz oba zida i putuje u DWG i DXF datotekama. Kopija zida počinje bez njega.
- T spoj nema stil koji se bira: zid čija se strana dodiruje prolazi kroz. Ugao gde se sretne tri ili više zidova ostaje pokošen. Tako je i vrlo oštar ugao (ispod otprilike 30 stepeni) i dva zida u jednoj liniji.

## Crtanje oblika zidova

Svaki od njih pravi zidove u jednom koraku opozivanja, sa spojenim uglovima. U `WALL`, `O` postavlja pomak pozicioniranja (koliko levo od vaših klikova zid ide), a `D` isključuje spajanje za zidove koje sledeće crtate.

- `WALLRECT` (`WR`): dva suprotna ugla, kao `RECTANG`.
- `WALLROT`: prva stranica, zatim koliko daleko ide druga strana, za pravougaonik pod bilo kojim uglom.
- `WALLPOLY` (`WP`): broj stranica (3 do 64), centar, `I` za upisan ili `C` za opisan, zatim poluprečnik, kao `POLYGON`: kliknite ga, ili ga ukucajte (ukucani poluprečnik ide ka pokazivaču, ili duž X ose kada je pokazivač još na centru).
- `WALLARC` (`WARC`): centar, početak, kraj. `D` okreće luk na drugu stranu.
- `WALLTAN`: kliknite blizu kraja zida, zatim kraj luka, koji polazi duž tog zida.
- `WALLPICK`: kliknite liniju ili polilinju i recite da li da uzmete i linije spojene uz nju.
- `WALLTRACE`: kliknite unutar zatvorene površine linija i zidova da postavite zidove oko najmanje.

Zidovi u planu su pravi, pa se luk crta kao kratki pravi zidovi od po 15 stepeni. Spajaju se kao svaki ugao.

## Presecanje zidova

- `WALLSPLIT` (`WS`): kliknite zid, zatim tačku. `C` seče tamo gde drugi zid prelazi preko njega, `G` ostavlja razmak između delova, `F` pravi slobodne krajeve preseka umesto spojenih. Prvi deo zadržava mesto zida u crtežu, a vrata i prozori idu sa svojim delom. Presek kroz vrata ili prozor se odbija.
- `WALLSPLITGAP` ({{ui:Podeli sa razmakom}}): isto podeljenje, ali prvo traži razmak.
- `WALLDELSEG`: kliknite zid, zatim dva kraja dela koji treba obrisati.
- `WALLREJOIN`: kliknite dva dela jednog zida da ih opet napravite jednim.

## Pomeranje zidova za rastojanje

- `WALLDIM` ({{ui:Izmeni po meri}}): kliknite linearnu ili poravnatu kotu koja ide od jednog zida do drugog, zatim ukucajte novu vrednost. Zid na dalekom kraju se pomera pravo u odnosu na sebe, zid na prvom kraju ostaje, a zidovi spojeni uz njega prate. Daleka tačka kote se pomera sa svojim zidom, pa kota prikazuje vrednost koju ste ukucali.
- `WALLOFFSET` (`WO`): kliknite zid, zatim stranu na koju ga pomerate (`D` ukucava rastojanje, `C` pravi kopiju umesto toga).
- `WALLSTRETCH`: prozor oko krajeva zida, zatim osnovna tačka i druga tačka.
- U Svojstvima, ukucana {{ui:Dužina}} zadržava početak i uzima zid spojen na dalekom kraju sa njim, a nova {{ui:Debljina}} raste od {{ui:Linija lokacije}} koju izaberete (leva strana, desna strana ili centar).

## Kota između središnjih linija zidova

Središnja linija zida se ne crta, ali je hvatanje objekata pronalazi. Sa uključenim hvatanjem objekata ({{key:F3}}), pomerite pokazivač na sredinu debljine zida: oznaka kaže `Wall center: endpoint` ili `Wall center: midpoint`, a središnja linija se prikazuje isprekidano dok je oznaka na njoj. Sa uključenim {{ui:Upravno}} ili {{ui:Najbliže}} u spisku hvatanja objekata, i oni rade na središnjoj liniji.

1. Pokrenite `DIMLINEAR` (ili `DIMALIGNED`).
2. Kliknite prvi zid tamo gde oznaka kaže `Wall center: midpoint` ili `Wall center: endpoint`.
3. Kliknite drugi zid na isti način, zatim kliknite gde ide linija kote.
4. Da promenite rastojanje, pokrenite `WALLDIM`, kliknite kotu i ukucajte novu vrednost. Drugi zid se pomera.

Hvatanje na središnjoj liniji radi u svakoj komandi koja traži tačku.

## Zaključavanje zidova

Zaključavanje ostaje uz zid u datoteci. Ako pomerite jedan zaključan zid, drugi ga prati. Ako jedna promena pomera oba zida na različite načine, odbija se i ništa se ne menja.

- `WALLHOLD`: zaključajte zid za drugi zid. `A` ga prvo pomera na liniju drugog zida, `K` zadržava rastojanje koje ima.
- `WALLHOLDDIM`: zaključajte rastojanje između dva paralelna zida.
- `WALLGRID`: zaključajte zid za liniju mreže (linija na sloju mreže sa svojom oznakom u tekstu na jednom kraju), bilo duž nje ili sa jednim krajem na njoj. Zid zaključan duž linije zadržava rastojanje koje ima od nje. Pomerite liniju mreže sa `GRIDMOVE` i zid prati ceo, sa spojenim zidovima. Zid koji leži duž linije mreže pomera se ceo s njom čak i bez zaključavanja, a zid koji se samo završava na liniji se rasteže tim krajem.
- `WALLHOLDS` navodi zaključavanja. `WALLUNHOLD` skida zaključavanja sa zida.
- Svako zaključavanje prikazuje mali lokot na planu: pored sredine zaključanog zida, ili pored kraja koji je zaključan za liniju mreže. Kliknite lokot da skinete to zaključavanje.

## Šta još nije tu

Zaključavanja koriste središnje linije zidova. Zidovi ovde nemaju slojeve, pa nema prioriteta slojeva na spoju, a zidovi se ne savijaju (vidi lukove iznad). Niko nije isprobao ove alate na velikom crtežu, i nisu proveravani u drugom CAD programu.
