---
title: Oblici, rezovi, pomeranja i zaključavanja zidova u 2D
summary: Crtajte zidove kao pravougaonike, poligone i lukove, delite ih i ponovo spajajte, pomerajte ih za dimenziju, i zaključajte jedan zid za drugi ili za liniju mreže. Isti alati kao za zidove u BimCraft-u.
keywords: zid, alatke za zidove, dugmad za zidove, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stil spoja, kosi spoj, ravan, pravo odsečen, katanac, ručica, razvuci kraj, rotiraj, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spoj, zabrani spajanje, zaključavanje, linija mreže, podela, razmak, ofset, linija lokacije
from: f41e7433
---

Ove alatke rade nad 2D zidovima iz `WALL` (pogledajte „Crtanje pametnih zidova, vrata i prozora u 2D”). Koriste ista pravila kao alatke za zidove u BimCraft-u, pa se zid ponaša isto u oba.

## Gde su alatke

- Na traci alatki, grupa {{ui:Zidovi}} ima {{ui:Zid}}, {{ui:Pravougaonik}}, {{ui:Podeli}} i {{ui:Ofset}}. Njen meni {{ui:Više}} ima sve ostale alatke za zidove, svaku sa svojom ikonicom.
- U stilovima trake sa karticama, kartica {{ui:Zidovi}} ima panele {{ui:Crtaj zidove}}, {{ui:Iseci}}, {{ui:Podesi i menjaj}}, {{ui:Zadrži}} i {{ui:Spoji}}.
- U rasporedu, redovi alatki i kutija sa alatkama prikazuju istu grupu {{ui:Zidovi}}.
- Možete i da ukucate bilo koju komandu navedenu ispod.

## Spojevi se čuvaju

Kada kraj zida padne na drugi zid, CadCraft čuva taj spoj uz oba zida. Ne računa spojeve ponovo iz toga gde se krajevi slučajno nalaze. Zato:

- Zidovi spojeni sa zidom koji pomerate prate ga i ostaju spojeni. Njihovi krajevi klize po sopstvenim linijama, pa se ništa ne okreće.
- Prevucite jedan kraj zida za njegovu ručicu, a zid spojen tu zadržava svoj pravac. Njegov kraj klizi po sopstvenoj liniji da se sretne sa prevučenim zidom, pa prevučeni kraj ne mora uvek da bude ispod kursora. Pregled pokazuje gde. Zid koji se naslanja na prevučeni zid prati ga po sopstvenoj liniji. Prevlačenje kraja pravo duž zida menja njegovu dužinu, a zid spojen tu se pomera s njim.
- `ROTATE` nad spojenim zidom radi isto: krajevi njegovih suseda kližu po sopstvenim linijama do okrenutog zida.
- Da pomerite ugao, izaberite oba zida koja se tu sastaju i prevucite ručicu na uglu. Oba zida ostaju na uglu i oba se okreću. Zidovi dalje ostaju kakvi su bili.
- Držite {{key:Alt}} kada kliknete novo mesto ručice da namerno prekinete spojeve: zid ide tamo gde ga stavite i ništa ne prati.
- Ako bi prevlačenje okrenulo spojeni zid nazad kroz njegov daleki kraj, odbija se i ništa se ne menja.
- Zid koji nacrtate sa {{ui:Ne dozvoli spajanje}} (`D` u `WALL`), ili isključite u Svojstvima ({{ui:Ne dozvoli spajanje na početku}}, {{ui:Ne dozvoli spajanje na kraju}}), ostaje slobodan na tom kraju, čak i ako dodiruje drugi zid, dok ga ponovo ne dozvolite.
- `WALLDISJOIN` ({{ui:Zabrani spajanje}} u grupi {{ui:Zidovi}}) radi isto jednim klikom: kliknite zid blizu jednog kraja da zabranite spajanje na tom kraju, a ponovo kliknite da ga dozvolite.
- Stariji crtež nema sačuvane spojeve. Prva izmena koju napravite ih jednom pronalazi, iz toga kako su zidovi stajali pre izmene, i čuva ih. `WALLJOINS` to radi odmah.
- DWG i DXF datoteke nose spojeve unutar svakog zida. CadCraft ih čita onako kako su sačuvani. Program koji ne čuva proširene podatke prikazuje zidove kao obične blokove i odbacuje spojeve, a spoj čiji su zidovi pomereni u drugom programu se odbacuje pri sledećoj izmeni bilo kog od ta dva zida.

## Stil spoja ugla

Ugao gde se dva zida sastaju kraj do kraja crta se kao kosi spoj, osim ako ne izaberete drugi stil.

- `WALLJOINSTYLE` ({{ui:Stil spoja}} u grupi {{ui:Zidovi}}): kliknite ugao. Svaki klik prelazi na sledeći stil: {{ui:Kosi spoj}}, {{ui:Ravan}}, {{ui:Pravo odsečen}}, pa opet {{ui:Kosi spoj}}. Ukucajte `T` da promenite koji od dva zida prolazi kroz ugao na koji ste poslednji put kliknuli. Pritisnite {{key:Enter}} za kraj. Jedno pokretanje komande je jedan korak opoziva.
- {{ui:Ravan}}: jedan zid prolazi do daleke strane drugog, a drugi staje uz njegovu stranu. {{ui:Pravo odsečen}}: isto, ali zid koji prolazi se završava pravo u odnosu na sebe. Pod pravim uglom njih dvoje izgledaju isto.
- U Svojstvima zida: {{ui:Stil spoja na početku}}, {{ui:Stil spoja na kraju}}, i {{ui:Prolazi kroz na početku}}, {{ui:Prolazi kroz na kraju}}.
- Stil se čuva sa oba zida i putuje u DWG i DXF datotekama. Kopija zida počinje bez njega.
- T spoj nema stil koji biste birali: prolazi zid čija se strana dodiruje. Ugao gde se sastaju tri ili više zidova ostaje kosi spoj. Tako je i veoma oštar ugao (manji od oko 30 stepeni) i dva zida na jednoj liniji.

## Crtanje oblika zidova

Svaki od njih pravi zidove u jednom koraku opoziva, sa spojenim uglovima. U `WALL`, `O` postavlja pomeraj postavljanja (koliko levo od vaših klikova ide zid), a `D` isključuje spajanje za zidove koje nacrtate sledeće.

- `WALLRECT` (`WR`): dva suprotna ugla, kao `RECTANG`.
- `WALLROT`: prva stranica, pa koliko daleko ide druga strana, za pravougaonik pod bilo kojim uglom.
- `WALLPOLY` (`WP`): broj stranica (3 do 64), centar, `I` za upisan ili `C` za opisan, pa poluprečnik, kao `POLYGON`.
- `WALLARC` (`WARC`): centar, početak, kraj. `D` okreće luk na drugu stranu.
- `WALLTAN`: kliknite blizu kraja zida, pa kraj luka, koji polazi duž tog zida.
- `WALLPICK`: kliknite liniju ili poliliniju i kažite da li da uzme i linije koje su za nju spojene.
- `WALLTRACE`: kliknite unutar zatvorene oblasti linija i zidova da postavite zidove oko najmanje.

Plan zidovi su pravi, pa se luk crta kao kratki pravi zidovi od po 15 stepeni. Spajaju se kao svaki ugao.

## Seci zidove

- `WALLSPLIT` (`WS`): kliknite zid, pa tačku. `C` seče tamo gde ga drugi zid preseca, `G` ostavlja razmak između delova, `F` čini krajeve reza slobodnim umesto spojenim. Prvi deo zadržava mesto zida u crtežu, a vrata i prozori idu sa svojim delom. Rez kroz vrata ili prozor se odbija.
- {{ui:Podeli sa razmakom}} (`WALLSPLITGAP`): isto deljenje, ali prvo traži razmak.
- `WALLDELSEG`: kliknite zid, pa dva kraja dela koji brišete.
- `WALLREJOIN`: kliknite dva dela jednog zida da ih ponovo spojite u jedan.

## Pomerajte zidove za rastojanje

- `WALLDIM`: kliknite linearnu ili poravnatu dimenziju koja ide od jednog zida do drugog, pa ukucajte novu vrednost. Zid na dalekom kraju se pomera pravo u odnosu na sebe, zid na prvom kraju ostaje, a zidovi spojeni za njega prate.
- `WALLOFFSET` (`WO`): kliknite zid, pa stranu na koju ga pomerate (`D` ukucava rastojanje, `C` umesto toga pravi kopiju).
- `WALLSTRETCH`: prozor oko krajeva zida, pa bazna tačka i druga tačka.
- U Svojstvima, ukucana {{ui:Dužina}} zadržava početak i sa sobom vodi zid spojen na dalekom kraju, a nova {{ui:Debljina}} raste od {{ui:Linija lokacije}} koju izaberete (leva strana, desna strana ili centar).

## Zaključavanje zidova

Zaključavanje ostaje sa zidom u datoteci. Ako pomerite jedan zaključani zid, drugi ga prati. Ako jedna izmena pomera oba zida na različite načine, odbija se i ništa se ne menja.

- `WALLHOLD`: zaključajte zid za drugi zid. `A` ga prvo pomera na liniju drugog zida, `K` zadržava rastojanje koje ima.
- `WALLHOLDDIM`: zaključajte rastojanje između dva paralelna zida.
- `WALLGRID`: zaključajte zid za liniju mreže (linija na sloju mreže sa oznakom u tekstu na jednom kraju), ili duž nje ili tako da je jedan kraj na njoj. Zid zaključan duž linije zadržava rastojanje koje ima od nje. Pomerite liniju mreže sa `GRIDMOVE` i zid prati ceo, sa svojim spojenim zidovima. Zid koji leži duž linije mreže pomera se ceo s njom čak i bez zaključavanja, a zid koji se samo završava na liniji razvlači se tim krajem.
- `WALLHOLDS` navodi zaključavanja. `WALLUNHOLD` skida zaključavanja sa zida.
- Svako zaključavanje pokazuje mali katanac na planu: pored sredine zaključanog zida, ili pored kraja koji je zaključan za liniju mreže. Kliknite katanac da skinete to zaključavanje.

## Šta još nije ovde

Zaključavanja koriste središnje linije zidova. Zidovi ovde nemaju slojeve, pa nema prioriteta slojeva na spoju, a zidovi se ne savijaju (vidi lukove gore). Niko još nije probao ove alatke na velikom crtežu, i nisu proverene u drugom CAD programu.
