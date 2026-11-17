---
title: Referenca komandi
summary: Svaka komanda u aplikaciji za crtanje CadCraft, sa aliasima, pitanjima koja postavlja, opcijama i podrazumevanim vrednostima.
keywords: komande, aliasi, spisak komandi, površina, obim, measuregeom, linija, pline, krug, luk, trim, offset, dimlinear, blok, insert, raspored, štampa, zumiranje, pomoć, copyclip, cutclip, pasteclip, pasteorig, copybase, dupliraj, selectall
from: 7db2646b
---

Ukucajte ime komande ili alias i pritisnite {{key:Enter}} ili {{key:Space}}. Velika i mala slova nisu bitna, a vodeći znaci `_`, `-`, `.` ili `'` se zanemaruju. Ukucajte `HELP` (ili `?`) da ispišete kratak spisak svake komande u istoriji komandne linije; pritisnite {{key:F1}} za ovu pomoć.

Kako čitati upite: opcije su u uglastim zagradama [ ], a biramo jednu tako što ukucamo njena velika slova (`D` za prečnik). Podrazumevana vrednost je u šiljastim zagradama < >; pritisnite {{key:Enter}} da je prihvatite. Kad se traži tačka, možete kliknuti ili ukucati bilo koji od formata iz [Unos koordinata i rastojanja](topic:coordinate-entry). Kad se traži rastojanje, možete ukucati broj ili kliknuti dve tačke.

Pritisak na {{key:Enter}} tamo gde se traži tačka ili objekat, a nema podrazumevane vrednosti, završava komandu. {{key:Esc}} je otkazuje. Sve što je komanda uradila je jedan korak poništavanja.

## Crtanje

### LINE

Aliasi: `L`. Prave duži, svaka je zaseban objekat.

- `Zadaj prvu tačku` (Enter: počni od poslednje tačke koju ste zadali)
- `Zadaj sledeću tačku [Opozovi (U)]`, ponavlja se. Posle dva segmenta: `[Opozovi (U)/Zatvori (C)]`.
- `U` vraća poslednji segment, `C` zatvara do prve tačke i završava. Enter završava.

### PLINE

Aliasi: `PL`. Jedna polilinija od segmenata linija i lukova.

- `Zadaj početnu tačku`
- `Zadaj sledeću tačku [Luk (A)/Zatvori (C)/Opozovi (U)]` (Zatvori kad postoje dva segmenta)
- `A` prelazi na lukove: `Zadaj krajnju tačku luka [Linija (L)/Zatvori (C)/Opozovi (U)]`. Svaki luk se nastavlja tangentno na prethodni segment. `L` vraća na linije, `CL` zatvara lukom.
- Enter završava; polilinija ostaje otvorena.

### CIRCLE

Aliasi: `C`.

- `Zadaj centralnu tačku kruga [3P/2P/Ttr (tangenta tangenta poluprečnik)]`
- `Zadaj poluprečnik kruga [Prečnik (D)] <poslednji poluprečnik>`; `D` pita `Zadaj prečnik kruga`.
- `2P`: dva kraja prečnika. `3P`: tri tačke na krugu.
- `T` (takođe komanda `TTR`, i {{ui:Crtanje}} › {{ui:Više}} › {{ui:Krug: Tan, Tan, Poluprečnik}}): `Zadaj tačku na objektu za prvu tangentu kruga`, zatim drugu, pa poluprečnik (Enter: poslednji). Krug dodiruje oba objekta (linije, lukove, krugove, segmente polilinija, i unutar blokova); od krugova koji to rade, bira se onaj koji dodiruje najbliže vašim izborima. Ispisuje se „Krug ne postoji” kad nijedan ne odgovara.
- `TTT` (ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Krug: Tan, Tan, Tan}}): tri objekta; krug koji dodiruje sva tri, najbliži vašim izborima (tri linije daju unutrašnji ili spoljni krug, zavisno od toga gde kliknete).

### ARC

Aliasi: `A`.

- `Zadaj početnu tačku luka [Centar (C)]`, `Zadaj drugu tačku luka`, `Zadaj krajnju tačku luka`: luk kroz tri tačke.
- `C`: `Zadaj centralnu tačku luka`, `Zadaj početnu tačku luka`, `Zadaj krajnju tačku luka`. Luk ide suprotno kazaljci na satu od početka do kraja.

### RECTANG

Aliasi: `REC`, `RECTANGLE`. Zatvorena polilinija.

- `Zadaj prvi ugao`, `Zadaj suprotni ugao`. Ukucajte `@širina,visina` za drugi ugao.

### POLYGON

Aliasi: `POL`. Pravilan poligon kao zatvorena polilinija.

- `Unesi broj stranica <4>` (3 do 1024)
- `Zadaj centar poligona`
- `Unesi opciju [Upisan u krug (I)/Opisan oko kruga (C)] <I>`
- `Zadaj poluprečnik kruga`: kliknite ili ukucajte tačku; njeno rastojanje određuje veličinu, a njen pravac okreće poligon.

### ELLIPSE

Aliasi: `EL`.

- `Zadaj krajnju tačku ose elipse [Centar (C)]`, `Zadaj drugu krajnju tačku ose`, `Zadaj rastojanje do druge ose`
- `C`: `Zadaj centar elipse`, `Zadaj krajnju tačku ose`, zatim rastojanje do druge ose.
- `I` (`Isocircle`, samo dok je {{cmd:ISODRAFT}} uključeno): centar, pa poluprečnik ili `Prečnik (D)`: elipsa koju krug pokazuje na tekućoj izometrijskoj ravni.

### HATCH

Aliasi: `H`, `BH`, `BHATCH`; ili {{ui:Šrafura}} na traci sa alatkama. Prvo ispisuje tekući obrazac, razmeru i ugao.

- `Izaberi unutrašnju tačku [Izaberi objekte (S)/Obrazac (P)/Razmera (SC)/Ugao (A)]`, ponavlja se (`Opozovi (U)` kad postoji oblast): svaki klik dodaje zatvorenu oblast oko njega, sa zatvorenim oblicima unutra kao ostrvima. Enter pravi jednu šrafuru od svih.
- `S`: `Izaberi zatvorene objekte` (zatvorene polilinije, krugove, zatvorene elipse).
- `P`: `Unesi naziv obrasca, SOLID, ili ? za spisak <tekući>`. `SC`: `Zadaj razmeru obrasca`. `A`: `Zadaj ugao obrasca`.
- `G` (Gradijent): ispuna je gradijent umesto obrasca. Pogledajte {{cmd:GRADIENT}} za njegova pitanja.

Pogledajte [Šrafura i ispuna oblasti](topic:hatch).

### GRADIENT

Aliasi: `GD`. Ispunjava oblast gradijentom jedne ili dve boje. Prvo pita za gradijent, pa nastavlja kao {{cmd:HATCH}} (`Izaberi unutrašnju tačku`, `S` za zatvorene objekte, {{key:Enter}} za završetak).

- `Unesi opciju gradijenta [Tip (T)/Jedna boja (O)/Dve boje (TW)/Ugao (A)/Centrirano (C)/Izlaz (X)] <X>`, ponavlja se; svaki put ispisuje gradijent kakav je sada.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ili neki od njih obrnut (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Dovoljna su prva slova.
- `O`: jedna boja, zatim njen ton od 0 do 1 (0 je zatamnjuje do crne, 0,5 je sama boja, 1 je izbeljuje do bele). `TW`: prva i druga boja. Boja je broj od 1 do 255, tri broja kao `255,128,0`, ili `#rrggbb`.
- `A`: ugao pod kojim ide gradijent. `C`: centrirano Da ili Ne (Ne pomera sredinu gradijenta na jednu stranu).
- Odbija boju ili tip koji ne poznaje, i ton van opsega od 0 do 1.

{{cmd:HATCHEDIT}} `G` i Svojstva (Gradijent) kasnije menjaju gradijent, ili pretvaraju bilo koju šrafuru u gradijent. Gradijent se crta na ekranu i štampa. DWG 2004 i noviji čuvaju ga kao pravu šrafuru gradijenta; DXF 2000 i DWG 2000 ga čuvaju za CadCraft, a drugi programi vide punu ispunu prvom bojom.

### HATCHGENERATEBOUNDARY

Aliasi: `HGB`. Ponovo pravi granicu od šrafure koja ju je izgubila. `Izaberi šrafure` (ili ih izaberite prvo), zatim `Poveži svaku šrafuru sa njenom novom granicom, da je šrafura prati? [Da (Y)/Ne (N)] <Da>`.

- Svaka petlja šrafure postaje zatvorena polilinija na sloju šrafure; nove polilinije ostaju izabrane. Zakrivljena ivica se vraća kao kratki pravi delovi koje šrafura zadržava.
- Sa Da, šrafura prati novu granicu, kao šrafura napravljena sa {{cmd:HATCH}}. Jedan korak poništavanja.
- Kaže to kad nijedna šrafura nije izabrana.

### POINT

Aliasi: `PO`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Tačka}}. Objekti tačaka, jedan po kliku, dok ne pritisnete Enter.

- `Zadaj tačku`

### XLINE

Aliasi: `XL`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Konstrukciona linija}}. Konstrukcione linije, beskonačne u oba smera. Pogledajte [Konstrukcione linije i zrake](topic:construction-lines).

- `Zadaj tačku [Hor/Ver/Ang/Bisect/Offset]`, zatim `Zadaj tačku kroz koju prolazi` za svaku liniju, dok ne pritisnete Enter.
- `A`: `Unesi ugao konstrukcione linije [Referenca] <0>`; `R` prvo pita `Izaberi objekat linije`.
- `B`: `Zadaj tačku temena ugla`, `Zadaj početnu tačku ugla`, zatim `Zadaj krajnju tačku ugla` za svaku liniju.
- `O`: `Zadaj rastojanje pomeraja [Kroz (T)] <Kroz>`, zatim `Izaberi objekat linije` i `Zadaj stranu za pomeraj` (ili `Zadaj tačku kroz koju prolazi`) za svaku liniju.

### RAY

Bez aliasa; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Zraka}}. `Zadaj početnu tačku`, zatim `Zadaj tačku kroz koju prolazi` za svaku zraku, dok ne pritisnete Enter.

### TEXT

Aliasi: `DT`, `DTEXT`; ili {{ui:Tekst}} na traci sa alatkama. Jednoredni tekst; svaki red je zaseban objekat.

- `Zadaj početnu tačku teksta [Poravnanje (J)]`
- `J`: `Unesi opciju [Levo/Centar/Desno/Sredina/TL/MC] <L>`, zatim `Zadaj tačku umetanja teksta`
- `Zadaj visinu <tekuća visina teksta>`
- `Zadaj ugao rotacije teksta <0>`
- `Unesi tekst`, ponavlja se: svaki Enter počinje sledeći red ispod. Enter na praznom redu završava. {{key:Space}} ovde kuca razmak.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} stavlja oznake na liniju, luk, krug, poliliniju, splajn ili elipsu koje je seku na jednake delove. Izaberite objekat, pa zadajte broj delova (2 do 32767). Otvoren objekat dobija jednu oznaku manje od broja delova; zatvoren dobija oznaku i na početku. Sam objekat se ne seče. Oznake su tačke; `Block` umesto toga traži blok ovog crteža i da li se okreće da prati objekat. Dužine duž splajnova i elipsa mere se po kratkim tetivama. Odbija tekst, šrafure i druge objekte bez dužine.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} stavlja oznaku na svakoj zadatoj dužini duž linije, luka, kruga, polilinije, splajna ili elipse, brojeći od kraja najbližeg mestu gde ste kliknuli (zatvoren objekat: od njegovog početka). Dužinu zadajete ukucavanjem ili dvema tačkama. Daleki kraj otvorenog objekta ne dobija oznaku. `Block` postavlja blok na svaku oznaku umesto tačke. Odbija dužinu 0, dužinu veću od objekta, i onu koja bi napravila više od 32767 oznaka.

### BOUNDARY

Aliasi: `BO`, `BPOLY`. {{cmd:BOUNDARY}} pravi zatvorenu poliliniju oko oblasti u kojoj je tačka koju birate, od svih linija, lukova, krugova, polilinija i krivih koje je ograničavaju na ekranu. Delovi na luku ili krugu vraćaju se kao segmenti luka; delovi elipsa i splajnova vraćaju se kao kratki pravi segmenti. Sa uključenim `Islands` (početna postavka) svaka zatvorena oblast unutra dobija sopstvenu polilinIju. Nastavite da birate tačke; Enter završava. Objekti koji ograničavaju oblast ostaju kakvi jesu. Kaže to kad nijedna zatvorena oblast ne sadrži tačku.

### BLEND

{{cmd:BLEND}} crta splajn između krajeva dve otvorene krive. Izaberite svaku krivu blizu kraja za spajanje. `CONtinuity` bira `Tangent` (splajn polazi i stiže duž obe krive) ili `Smooth` (takođe prati kako se one savijaju na krajevima); izbor se čuva za sesiju. Dve krive se ne menjaju. Odbija zatvorene objekte i dva kraja koja se već sastaju.

### REGION

Alias: `REG`. {{cmd:REGION}} pretvara zatvorene objekte u regione: ravne oblasti koje možete spajati, seći i meriti. Izaberite krugove, zatvorene polilinije, zatvorene elipse ili zatvorene splajnove, ili linije, lukove i otvorene polilinije koje zatvaraju petlju kraj do kraja; svaka petlja postaje jedan region i zamenjuje objekte od kojih je nastala. Lukovi ostaju lukovi; elipse i splajnovi postaju kratki pravi segmenti. Ono što nije zatvoreno i ne zatvara petlju ostaje kakvo jeste, i kaže se koliko je takvih. U crtežu je region jedna ili više zatvorenih polilinija držanih zajedno kao nepoimenična grupa, pa klik bira ceo region, a kopija je poseban region; drugi programi koji otvaraju datoteku vide zatvorene polilinije.

Kad su regioni u crtežu, {{cmd:UNION}}, {{cmd:SUBTRACT}} i {{cmd:INTERSECT}} na kartici 2D rade nad regionima: `UNION` spaja izabrane regione u jedan (regioni koji su odvojeni postaju jedan region sa više kontura), `SUBTRACT` pita regione od kojih se oduzima, pa one koji se oduzimaju (rupa ostaje deo regiona), `INTERSECT` zadržava oblast koju svi dele. Svaka navodi površinu rezultata i jedan je korak poništavanja. Odbijaju kad ništa ne bi ostalo ili nema zajedničkog. Na kartici 3D, i u crtežu bez regiona, iste komande rade nad telima kao ranije.

## Uređivanje

Aliasi: `MT`, `T`; ili {{ui:Pasus}} na traci sa alatkama. Tekst pasusa koji se prelama na zadatu širinu, kuca se na mestu.

- `Zadaj prvi ugao`
- `Zadaj suprotni ugao [Visina (H)/Poravnanje (J)/Razmak redova (L)/Rotacija (R)/Širina (W)]`: širina između dva ugla je mesto gde se tekst prelama. `H` pita `Zadaj visinu`, `J` `Unesi poravnanje [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Unesi faktor razmaka redova (0,25 do 4)`, `R` `Zadaj ugao rotacije`, `W` `Zadaj širinu (0 za bez prelamanja)` i preskače drugi ugao.
- Zatim se na crtežu otvara polje: kucajte, {{key:Enter}} za novi pasus, {{key:Mod+Enter}} ili klik van polja za završetak, {{key:Esc}} za otkazivanje. Njegova traka postavlja visinu, razmak redova, širinu i poravnanje. Pogledajte [Dodavanje teksta i oznaka](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliasi: `ED`, `DDEDIT`; ili dvostruki klik na tekst. `Izaberi tekst za uređivanje`, ponavlja se do {{key:Enter}}: svaki se otvara u istom polju. Pokrenut nad izabranim ili dvostruko kliknutim tekstom, uređuje taj i završava.

### ERASE

Aliasi: `E`, `DELETE`; ili pritisnite {{key:Delete}} sa izabranim objektima.

- `Izaberi objekte` (preskače se kad su objekti već izabrani)

### MOVE

Aliasi: `M`.

- `Izaberi objekte`
- `Zadaj baznu tačku [Pomeraj (D)]`, `Zadaj drugu tačku`
- `D`: `Zadaj pomeraj`, ukucan kao `dx,dy`.

### COPY

Aliasi: `CO`, `CP`. Pravi kopije koliko puta zadate tačaka.

`Niz` na upitu za drugu tačku pravi red odjednom: zadajte broj stavki (originalna se računa kao jedna), pa tačku na kojoj ide prva kopija; ostale slede istim razmakom. `Uklopi (F)` tu tačku čini mestom poslednje kopije, a ostale se ravnomerno rasporede između.

- `Izaberi objekte`
- `Zadaj baznu tačku [Pomeraj (D)]`
- `Zadaj drugu tačku [Opozovi (U)]`, ponavlja se do Enter. `U` vraća poslednju kopiju.

### ROTATE

Aliasi: `RO`.

- `Izaberi objekte`, `Zadaj baznu tačku`
- `Zadaj ugao rotacije <poslednji ugao>`: stepeni, pozitivno suprotno kazaljci na satu; ili kliknite tačku da se rotira ka njoj.

### SCALE

Aliasi: `SC`.

- `Izaberi objekte`, `Zadaj baznu tačku`
- `Zadaj faktor razmere`: ukucajte faktor kao `0.5` ili `2`. Kliknuta tačka daje svoje rastojanje od bazne tačke kao faktor.

### MIRROR

Aliasi: `MI`.

- `Izaberi objekte`
- `Zadaj prvu tačku ose ogledala`, `Zadaj drugu tačku ose ogledala`
- `Izbrisati izvorne objekte? [Da (Y)/Ne (N)] <N>`

### ALIGN

Aliasi: `AL`; ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Poravnaj}}.

- `Izaberi objekte`
- `Zadaj prvu izvornu tačku`, `Zadaj prvu odredišnu tačku`
- `Zadaj drugu izvornu tačku (Enter za nastavak)`, `Zadaj drugu odredišnu tačku`
- `Zadaj treću izvornu tačku (Enter za nastavak)`, `Zadaj treću odredišnu tačku`
- Sa dva para: `Razmeriti objekte prema tačkama poravnanja? [Da (Y)/Ne (N)] <N>`

Pogledajte [Poravnanje objekata](topic:modify-objects#align-objects).

### ALIGNTO

- `Izaberi objekte` (ili izbor), `Poravnaj [Levo/Centar/Desno/Vrh/Sredina/Dno] <Levo>`, `U odnosu na [Izbor/Prvi/Poslednji/Tačka] <Izbor>`; `P` pita za tačku. Izbor ostaje.

### DISTRIBUTE

- `Izaberi objekte` (najmanje tri), `Raspodeli [Horizontalno/Vertikalno] <Horizontalno>`, `Razmak ravnomerno [Centri/Praznine] <Praznine>`. Spoljašnja dva ostaju; izbor ostaje.

### ALIGNPANEL

Aliasi: `ALP`; ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Poravnaj i raspodeli}}. Otvara panel koji pokreće ALIGNTO i DISTRIBUTE klikovima.

### LASER

Aliasi: `LASERCUT`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}. Otvara panel Laser nad crtežom: šta svaki sloj radi (sečenje, urezivanje, graviranje, ispuna, slika), pregled, GRBL G-kod za čuvanje, i uokvirivanje i slanje preko Web Serial. Pogledajte [Slanje crteža na laser](topic:laser-cutting).

### STRETCH

Aliasi: `S`; ili {{ui:Istegni}}. `Izaberi objekte za istezanje`: prevucite ukrštajuće prozore (ili upišite `C`) preko krajeva za pomeranje. `Zadaj baznu tačku [Pomeraj (D)]`, `Zadaj drugu tačku`. Tačke unutar prozora se pomeraju: krajevi linija, temena polilinija (segmenti luka zadržavaju svoju visinu), tačke kota; krugovi, elipse, tekst, tačke i blokovi se pomeraju celi kad su njihov centar ili tačka umetanja unutra. Izbor napravljen pre komande zadržava ukrštajuće prozore (i lazo) koji su ga napravili, pa se istežu na isti način. Bez prozora objekti se pomeraju celi.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasi: `AR`; ili {{ui:Niz}}. `Izaberi objekte`, zatim `Unesi tip niza [Pravougaoni/Polarni (PO)] <Pravougaoni>` (samo ARRAY).

- Pravougaoni počinje sa 4 kolone × 3 reda, razmak 1,5 puta veći od veličine objekata, prikazan kao pregled. `Unesi opciju [Broj (COU)/Razmak (S)/Kolone (COL)/Redovi (R)/Izlaz (X)] <X>`: `COU` pita kolone i redove, `S` rastojanja između kolona i između redova (negativno ide levo ili dole), `COL` i `R` po jedan pravac.
- Polarni pita `Zadaj centralnu tačku niza`, počinje sa 6 stavki po celom krugu, rotirano. `Unesi opciju [Stavke (I)/Ugao popune (F)/Rotiraj stavke (ROT)/Izlaz (X)] <X>`: `I` stavke, `F` ugao za popunu (+ suprotno kazaljci, − u smeru), `ROT` Da ili Ne.
- {{key:Enter}} (Izlaz) pravi kopije, kao obične objekte. Jedan korak poništavanja.
- `AS` (Pridruženo) prelazi između običnih kopija i niza koji ostaje izmenljiv: jedan objekat koji kasnije menjate sa {{cmd:ARRAYEDIT}}, preko njegovih ručica ili u Svojstvima. Izbor se pamti ({{cmd:ARRAYASSOCIATIVITY}}); počinje sa običnim kopijama.

### ARRAYPATH

Kopije duž krive. `Izaberi objekte`, zatim `Izaberi krivu putanje`: linija, luk, krug, elipsa, polilinija ili splajn (ne jedan od objekata koji se niže). Putanja počinje sa krajem bliže objektima, a prva stavka je objekat tamo gde jeste.

- `Unesi opciju [Metod (M)/Stavke (I)/Razmak (SP)/Poravnaj (AL)/Pridruženo (AS)/Izlaz (X)] <X>`, sa pregledom. `M`: `Podeli` raspoređuje stavke ravnomerno duž cele putanje, `Mera` postavlja jednu na svakih zadato rastojanje. `I`: broj stavki (uz Mera, 0 znači koliko ih stane; broj preko kraja putanje svodi se na ono što stane). `SP`: rastojanje između stavki duž putanje (prebacuje na Mera). `AL`: Da okreće svaku stavku da prati putanju, Ne ih drži uspravne.
- `AS` kao u {{cmd:ARRAY}}. Kad je uključeno, niz zadržava sopstvenu kopiju oblika putanje: kasnije menjanje krive putanje ne pomera stavke.
- Odbija putanju koja nije kriva, i jednu stavku.

### ARRAYEDIT

Menja niz napravljen sa Pridruženo. `Izaberi niz` (ili ga izaberite prvo). Ispisuje kakav je niz sada, pa pita do {{key:Enter}}:

- Pravougaoni: `COL` kolone i njihov razmak, `R` redovi i njihov razmak, `A` ugao pod kojim idu kolone.
- Polarni: `I` stavke, `F` ugao popune, `ROT` rotiraj stavke Da ili Ne.
- Putanja: `M` Podeli ili Mera, `I` stavke, `SP` razmak, `AL` poravnaj sa putanjom.
- `S` (Izvor) otvara objekte koje niz ponavlja, same, kao uređivač blokova. Crtajte i uređujte tamo; {{cmd:ARRAYCLOSE}} čuva ili odbacuje, i sve stavke prate.
- `REP` (Zameni): `Izaberi objekte za zamenu`, `Zadaj baznu tačku objekata za zamenu`, zatim kliknite stavke koje treba zameniti, {{key:Enter}}. Te stavke sada prikazuju zamenu; objekti zamene napuštaju crtež i žive u nizu. `RES` (Vrati) ponovo prikazuje izvorne objekte u svakoj stavci.
- Svaka promena je jedan korak poništavanja. Odbija obične kopije, običnu referencu bloka i niz na zaključanom sloju.

Isti brojevi su u Svojstvima pod Niz, a niz ima ručice: bazna tačka ga pomera, ručica na drugoj stavci postavlja razmak, ručica iza poslednje stavke postavlja broj (polarni: druga stavka postavlja koliko ima stavki, poslednja ugao popune). {{cmd:EXPLODE}} vraća niz u obične kopije.

### ARRAYCLOSE

Završava {{cmd:ARRAYEDIT}} Izvor: `Sačuvati promene izvornih objekata niza? [Sačuvaj (S)/Odbaci (D)] <Sačuvaj>`. Kaže to kad nijedni izvorni objekti niza nisu otvoreni. {{cmd:BCLOSE}} radi isto.

### ARRAYASSOCIATIVITY

`Unesi novu vrednost za ARRAYASSOCIATIVITY (1 = nizovi ostaju izmenljivi, 0 = obične kopije)`. Postavlja čime {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR i {{cmd:ARRAYPATH}} počinju; njihova opcija `AS` menja istu postavku. Pamti se u ovom pregledaču.

### OFFSET

Aliasi: `O`. Linije, lukovi, krugovi i polilinije.

Gde se polilinija pomera nakolje i njeni pravi segmenti se razdvajaju na uglu, {{cmd:OFFSETGAPTYPE}} odlučuje kako se praznina zatvara.

- `Zadaj rastojanje pomeraja [Kroz (T)] <poslednje rastojanje, ili Kroz>`
- `Izaberi objekat za pomeraj`, zatim `Zadaj tačku sa strane za pomeraj` (ili, sa Kroz, `Zadaj tačku kroz koju prolazi`), ponavlja se do Enter.

### OFFSETGAPTYPE

- `Praznine na uglovima pomeraja: 0 produži, 1 zaobli, 2 ukosi`: kako {{cmd:OFFSET}} zatvara praznine na spoljašnjim uglovima polilinije. `0` produžava segmente dok se ne sretnu (početna postavka), `1` ih spaja lukom oko starog ugla, `2` pravim rezom. Unutrašnji uglovi i segmenti luka nisu pogođeni. Čuva se za ovu sesiju.

### EXTRIM

{{cmd:EXTRIM}} skraćuje sve sa jedne strane ivice. Izaberite ivicu za sečenje (liniju, luk, krug, polilinију, elipsu, splajn ili konstrukcionu liniju), pa tačku sa strane koju treba očistiti: svaka linija, luk, krug, polilinija i konstrukciona linija koja seče ivicu gubi deo sa te strane, od ivice. Dok birate stranu, delovi koji bi otišli prate pokazivač. Za zatvorenu ivicu strane su unutrašnja i spoljašnja. Objekti koji samo dodiruju ivicu, kao i tekst, šrafure, splajnovi i elipse koji je seku, ostaju kakvi jesu. Jedan korak poništavanja.

### TRIMEXTENDMODE

- `Unesi novu vrednost za TRIMEXTENDMODE (1 Brzo, 0 Standardno)`: kako {{cmd:TRIM}} i {{cmd:EXTEND}} počinju. `1` Brzo: svaki objekat je ivica za sečenje ili granica. `0` Standardno: prvo pitaju za ivice. Takođe `(setvar "TRIMEXTENDMODE" 0)` u LISP-u.

### TRIM

Aliasi: `TR`. Prvo ispisuje `Tekuće postavke: režim Brzo (TRIMEXTENDMODE 1), ivice: bez produženja, prevlačenje crta putanju`. U režimu Brzo svaki vidljivi objekat je ivica za sečenje, a objekat koji ništa ne seče se briše; u režimu Standardno prvo pita `Izaberi ivice za sečenje (Enter = svaki objekat)` i seče samo na njima.

- `Izaberi objekat za skraćivanje ili izaberi uz Shift za produženje [Ivice za sečenje (T)/Ograda (F)/Ukrštanje (C)/Režim (O)/Ivica (E)/Brisanje (R)/Opozovi (U)]`, ponavlja se: kliknite deo za uklanjanje (on se prikazuje sivo i isprekidano dok pokazivač miruje na njemu), prevucite putanju kroz više delova (svi idu u jednom koraku), ili kliknite dve prazne tačke za ogradu između njih. {{key:Shift}} produžava umesto toga. `T` bira ivice za sečenje (Standardni režim), `F` pita tačke ograde, `C` dva ugla prozora (delovi delimično unutra odlaze), `O` pita `Unesi opciju režima skraćivanja [Brzo/Standardno]`, `E` pita `Unesi način produženja implicitne ivice [Produži/Ne produži]` (EDGEMODE), `R` briše objekte koje izaberete, `U` poništava poslednji izbor ili prevlačenje. Enter završava. Pogledajte [Skraćivanje i produženje](topic:trim-and-extend).

- Klik na šrafuru seče šrafuru: ivice za sečenje dele šrafiranu oblast, a deo na koji ste kliknuli se uklanja (ne ostaje nacrtana kontura na mestu gde je bila). Šrafura zadržava svoj obrazac ili gradijent; šrafura koja je bila vezana za svoju granicu posle nije vezana, jer je više ne ispunjava. Kaže to kad nijedna ivica za sečenje ne deli šrafuru tamo, kad je klik van šrafure, i kad ništa ne bi ostalo (koristite {{cmd:ERASE}}). Prevučena putanja ili ograda ne seče šrafure.

### EXTEND

Aliasi: `EX`. Isto kao TRIM, obrnuto: `Izaberi objekat za produženje ili izaberi uz Shift za skraćivanje [Granične ivice (B)/Ograda (F)/Ukrštanje (C)/Režim (O)/Ivica (E)/Opozovi (U)]`. Klik produžava kraj najbliži njemu do sledeće granice; prevučena putanja ili ograda produžava svaki objekat koji seče; {{key:Shift}} skraćuje. `B` bira granične ivice (Standardni režim). Režim i Ivica su zajednički sa TRIM.

### LINKVIEWS

Aliasi: `SYNCVIEWS`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Poveži poglede okana}}, ili ikonica veze na karticama crteža. `Poveži poglede okana [ON/OFF]` (Enter bira drugo stanje): dok je uključeno, pomeranje ili zumiranje u aktivnom oknu pomera svako okno koje prikazuje istu vrstu prostora. Pogledajte [Podela ekrana](topic:split-screen).

### OPENIN3D

Bez aliasa; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraft}} gde aplikacija za 3D modelovanje prihvata predati crtež. Otvara ga tamo u novoj kartici, kao DWG (ništa se ne otprema). Ako pregledač blokira karticu, to se kaže.

### LASSOMODE

`Unesi novu vrednost za LASSOMODE (1 = lazo, 0 = pravougaonik)`: šta pritisak i prevlačenje na praznom mestu crtaju. Isto kao Podešavanja › CadCraft › Prevlačenje za izbor. Pogledajte [Izbor lazom](topic:lasso-selection).

### FILLET

Aliasi: `F`. Linije, lukovi, krugovi i polilinije. Prvo ispisuje `Tekuće postavke: režim = TRIM, poluprečnik = 0`.

- `Izaberi prvi objekat [Opozovi (U)/Polilinija (P)/Poluprečnik (R)/Skrati (T)/Više (M)]`
  - `R` pita `Zadaj poluprečnik zaobljenja <poslednji>`. `T` pita `Unesi režim skraćivanja [Skrati/Ne skraćuj]`: uz Ne skraćuj objekti ostaju kakvi jesu i dodaje se samo luk.
  - `M` nastavlja komandu za još uglova do {{key:Enter}}; `U` vraća poslednji ugao bez napuštanja komande.
  - `P` pita `Izaberi 2D polilinIju [Poluprečnik]` i zaobljuje svaki ugao gde se sastaju dva prava segmenta. Zaobljenja koja već ima se menjaju novim poluprečnikom; poluprečnik 0 ih uklanja. Uglovi čije su stranice prekratke za poluprečnik ostaju i broje se.
- `Izaberi drugi objekat ili izaberi uz Shift za primenu na ugao [Poluprečnik]`. Držite {{key:Shift}} dok klikćete za oštar ugao, bez obzira na poluprečnik.

Kliknite svaki objekat na delu koji želite da zadržite. Dve linije koje se ne sastaju se produžavaju. Dve paralelne linije dobijaju polukrug preko praznine, na kraju prve linije najbližem vašem kliku. Krug se nikad ne seče. Dva susedna segmenta jedne polilinije dobijaju luk unutar polilinije; polilinija i drugi objekat rade kad rez pada na prvi ili poslednji segment polilinije.

### CHAMFER

Aliasi: `CHA`. Linije i pravi segmenti polilinija. Prvo ispisuje tekuća rastojanja (ili dužinu i ugao).

- `Izaberi prvu liniju [Opozovi (U)/Polilinija (P)/Rastojanje (D)/Ugao (A)/Skrati (T)/Metod (E)/Više (M)]`
  - `D` pita `Zadaj prvo rastojanje ukosa <poslednje>` i `Zadaj drugo rastojanje ukosa <prvo>`: prvo se seče sa prve linije koju birate, drugo sa druge.
  - `A` pita `Zadaj dužinu ukosa na prvoj liniji` i `Zadaj ugao ukosa od prve linije`.
  - `E` (Metod) bira koji od dva koristi sledeći ukos. `T`, `M`, `U` i `P` rade kao u {{cmd:FILLET}}.
- `Izaberi drugu liniju ili izaberi uz Shift za primenu na ugao [Rastojanje (D)/Ugao (A)/Metod (E)]`. {{key:Shift}}+klik pravi oštar ugao.

Rastojanje duže od linije se odbija (`Rastojanje je preveliko.`).

### BREAK i BREAKATPOINT

Aliasi: `BR`. `Izaberi objekat` (tamo gde kliknete je prva tačka), `Zadaj drugu tačku prekida [Prva tačka (F)]`; `F` pita `Zadaj prvu tačku prekida` i `Zadaj drugu tačku prekida`. Deo između njih nestaje; na krugu, suprotno kazaljci od prve tačke. BREAKATPOINT pita `Zadaj tačku prekida` i deli objekat na dva tu (nije krug).

### LENGTHEN

Aliasi: `LEN`. `Izaberi objekat za merenje [Promena (DE)/Procenat (P)/Ukupno (T)/Dinamički (DY)]`: klik ispisuje `Tekuća dužina` (i ugao obuhvaćen lukom) i pita ponovo. `DE` pita `Unesi promenu dužine (negativno skraćuje) [Ugao]`, `P` `Unesi dužinu u procentima`, `T` `Zadaj ukupnu dužinu [Ugao]`, `DY` prevlačenje. Zatim `Izaberi objekat za promenu [Opozovi (U)]`, ponavlja se: menja se kraj najbliži kliku. Linije, lukovi i otvorene polilinije.

### JOIN

Aliasi: `J`. `Izaberi objekte za spajanje`. Linije, lukovi i otvorene polilinije koje se sastaju kraj do kraja postaju polilinije (zatvorene kad se lanac zatvori); linije na jednoj pravoj postaju jedna linija; lukovi jednog kruga postaju jedan luk ili krug. Istorija kaže koliko je objekata spojeno, a koliko nije.

### MATCHPROP

Aliasi: `MA`, `PAINTER`. `Izaberi izvorni objekat`, zatim `Izaberi odredišne objekte [Podešavanja (S)]` i {{key:Enter}}. Kopira sloj i boju, a između objekata iste vrste visinu i širinu teksta, dimenzije kota ili obrazac šrafure. `S` pita `Uključi ili isključi svojstvo [Boja/Sloj (LA)/Tekst/Kota/Šrafura]`, ponavlja se do {{key:Enter}}; izbor se pamti za sesiju.

### EXPLODE

Aliasi: `X`. Polilinije postaju linije i lukovi, referenca bloka postaje svoji objekti, kote postaju linije, strelice i tekst. Niz koji ostaje izmenljiv ({{cmd:ARRAYEDIT}}) postaje obične kopije svojih objekata.

- `Izaberi objekte`

### GROUP

Alias: `G`. {{cmd:GROUP}} daje izabranim objektima ime koje dele. Izaberite objekte, pa ukucajte ime (bez razmaka; `?` navodi grupe; Enter pravi grupu bez imena) i, za imenovanu grupu, opcioni opis. Od tada klik na jedan od njih, ili prozor koji obuhvati jedan, bira sve njih, pa se pomeraju, kopiraju i brišu zajedno; svaki objekat je i dalje zaseban objekat. Objekat može biti u više grupa. Kopija cele grupe je nova grupa bez imena; kopija jednog člana sama pristupa grupi. Grupe pripadaju prostoru u kome su napravljene (model ili list). Čuvaju se pri čuvanju kao DWG ili DXF i ponovnom otvaranju u CadCraft-u; DXF 2000 datoteke ih nose i kao objekte grupa za druge programe, a grupe napravljene u drugom programu se čitaju kad se DXF ili DWG otvori.

### UNGROUP

{{cmd:UNGROUP}} razdvaja grupe: izaberite objekte grupa (svaka grupa u kojoj su rastavlja se) ili ukucajte `Name` i ime grupe. Objekti ostaju u crtežu. Jedan korak poništavanja vraća grupe.

### GROUPEDIT

{{cmd:GROUPEDIT}} menja jednu grupu. Izaberite jedan njen objekat, ili `Name` i njeno ime; grupa koja je već izabrana uzima se kakva jeste. Zatim: `Add` objekte (birani jedan po jedan, a ne grupa po grupa), `Remove` objekte, `REName` grupu, promenite njen `Description`, ili postavite `Selectable` (da li klik na jedan objekat bira celu grupu). `eXit` ili Enter završava. Grupa bez objekata više ne postoji.

### PICKSTYLE

- `Izbor grupe: 0 klik bira jedan objekat, 1 celu grupu`: sa `1` (početna postavka) klik ili prozor na grupisanom objektu bira celu grupu; sa `0` pojedinačne objekte, pa možete uređivati jednog člana. Čuva se za ovu sesiju.

## Privremena memorija

Sopstvena privremena memorija CadCraft-a: radi unutar crteža, između crteža i između kartica CadCraft-a u ovom pregledaču. Pogledajte [Kopiranje, lepljenje i dupliranje](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ili {{ui:Kopiraj}} u grupi {{ui:Uređivanje}}. Kopira objekte u privremenu memoriju, sa blokovima i slojevima koje koriste. Objekti ostaju izabrani.

- `Izaberi objekte za kopiranje` (preskače se kad su objekti već izabrani)

### CUTCLIP

{{key:Mod+X}}, ili {{ui:Iseci}} u meniju {{ui:Više}}. Kopira objekte u privremenu memoriju, pa ih briše (jedan korak poništavanja).

- `Izaberi objekte za sečenje` (preskače se kad su objekti već izabrani)

### COPYBASE

Kopira objekte u privremenu memoriju sa baznom tačkom koju birate; lepljenje postavlja tu tačku.

- `Zadaj baznu tačku`
- `Izaberi objekte za kopiranje`

### PASTECLIP

{{key:Mod+V}}, ili {{ui:Nalepi}} u grupi {{ui:Uređivanje}}. Kopija prati kursor, visi iz donjeg levog ugla svog obuhvata (ili iz centra, ili iz tačke {{cmd:COPYBASE}}; pogledajte [Postavke CadCraft-a](topic:settings)).

- `Zadaj tačku umetanja`

Nalepljeni objekti su izabrani. Blok koji crtež već ima pod istim imenom zadržava definiciju ovog crteža.

Kad je oblast kopirana u MarkupCraft-u novija od onoga što je CadCraft kopirao (i mlađa od 6 sati), {{key:Mod+V}} i `PASTECLIP` umesto toga nalepljuju tu oblast: pogledajte `PASTEAREA`.

### PASTEAREA

Aliasi: `PAREA`. {{ui:Nalepi kopirano područje}} u meniju {{ui:Više}}. Nalepljuje oblast kopiranu sa {{ui:Kopiraj područje}} u MarkupCraft-u kao sliku u njenoj stvarnoj veličini. Pogledajte [Slike u crtežu](topic:pictures).

- `Zadaj donji levi ugao kopiranog područja`
- `Razmeri njegovu veličinu papira sa (100 za list 1:100; Tačke: dve tačke na njemu i njihovo stvarno rastojanje) [Tačke] <1>` (samo kad list nije imao razmeru crteža): broj, {{key:Enter}} za veličinu papira, ili `P`, zatim `Prva tačka na nalepljenom području`, `Druga tačka na nalepljenom području` i njihovo stvarno rastojanje.

### PASTEORIG

{{key:Mod+Shift+V}}, ili {{ui:Nalepi na mesto}} u meniju {{ui:Više}}. Nalepljuje na koordinatama sa kojih su objekti kopirani. Ništa ne pita.

### DUPLICATE

Aliasi: `DUP`. {{key:Mod+D}}, ili {{ui:Dupliraj i pomeri}} u meniju {{ui:Više}}. Kopija objekata se pomera sa pokazivačem od mesta gde je; {{key:Esc}} ne ostavlja ništa. Ne koristi privremenu memoriju.

- `Izaberi objekte za dupliranje` (preskače se kad su objekti već izabrani)
- `Zadaj gde ide kopija (Esc ne ostavlja ništa)`: kliknite, ukucajte tačku, `@dx,dy` (od mesta gde je bio pokazivač), ili rastojanje ka kursoru.

### SELECT

Pita `Izaberi objekte` (sa svim opcijama ispod) i ostavlja izabrano što ste odabrali, za sledeću komandu ili za `P` kasnije.

### QSELECT

Aliasi: `QS`. U pregledaču, dijalog {{ui:Brzi izbor}} (pogledajte [Izbor objekata](topic:select-objects#select-by-a-rule-quick-select)). Bez njega, komandna linija pita `Unesi vrstu objekta`, `Unesi svojstvo`, `Unesi operator [=/<>/>/</*/Izaberi sve] <=>` i `Unesi vrednost`. Poklapanja postaju izbor.

### SELECTSIMILAR

Aliasi: `SIM`. `Izaberi objekte [Podešavanja (SE)]` (ili trenutni izbor): bira svaki objekat iste vrste sa istim slojem i bojom (i nazivom bloka, obrascem šrafure). `SE` pita `Uključi ili isključi svojstvo [Sloj (LA)/Boja (CO)/Naziv (NA)/Obrazac (PA)/Visina (HE)]`, ponavlja se do {{key:Enter}}.

### FIND

Bez aliasa; ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Pronađi i zameni}}. U pregledaču, dijalog {{ui:Pronađi i zameni}} (pogledajte [Dodavanje teksta i oznaka](topic:text#find-and-replace-words)). Bez njega: `Unesi tekst za traženje`, zatim `Unesi tekst za zamenu (Enter: izaberi ono što je pronađeno)`. Traži u tekstu, vrednostima atributa i tekstu kota, na otvorenoj kartici ili u izboru.

### SELECTALL i DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) bira svaki objekat koji možete uređivati na otvorenoj kartici. `DESELECT` (aliasi `AI_DESELECT`, `SELECTNONE`; ili {{key:Esc}}) briše izbor.

## Kote

### DIMLINEAR

Aliasi: `DLI`, `DIMLIN`. Horizontalno ili vertikalno rastojanje.

- `Zadaj prvu tačku pomoćne linije [Izaberi objekat (S)]` (Enter ili `S`: `Izaberi objekat za kotiranje`, zatim kliknite liniju, luk, krug ili segment polilinije)
- `Zadaj drugu tačku pomoćne linije`
- `Zadaj položaj linije kote [Tekst (T)/Horizontalno (H)/Vertikalno (V)/Rotirano (R)]`. `T` pita za tekst (`<>` je izmerena vrednost), `H` i `V` fiksiraju pravac, `R` pita `Zadaj ugao linije kote <0>`.

### DIMALIGNED

Aliasi: `DAL`, `DIMALI`. Stvarno rastojanje između dve tačke.

- Početne tačke kao u {{cmd:DIMLINEAR}}, zatim `Zadaj položaj linije kote [Tekst (T)]`.

### DIMANGULAR

Aliasi: `DAN`, `DIMANG`.

- `Izaberi luk, krug ili liniju, ili Enter za teme`
- Luk: njegov ugao. Krug: `Zadaj drugu krajnju tačku ugla`. Linija: `Izaberi drugu liniju`. Enter: `Zadaj teme ugla`, `Zadaj prvu krajnju tačku ugla`, `Zadaj drugu krajnju tačku ugla`.
- `Zadaj položaj linije kote [Tekst (T)]`: kliknite unutar ugla koji merite.

### DIMRADIUS i DIMDIAMETER

Aliasi: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Izaberi luk ili krug`, zatim `Zadaj položaj linije kote [Tekst (T)]`.

### DIMCONTINUE

Aliasi: `DCO`, `DIMCONT`. Nastavlja od poslednje linearne ili poravnate kote (ili pita `Izaberi linearnu ili poravnatu kotu`).

- `Zadaj drugu tačku pomoćne linije [Opozovi (U)]`, ponavlja se do Enter.

### DIMBASELINE

Aliasi: `DBA`, `DIMBASE`. Kao {{cmd:DIMCONTINUE}}, ali svaka kota počinje od prve početne tačke i slaže se sve dalje.

### DIMORDINATE

Aliasi: `DOR`, `DIMORD`. `Zadaj položaj elementa`, zatim `Zadaj krajnju tačku pokaznice [Xdatum/Ydatum/Tekst (T)]`. Piše koliko je element udaljen od početka UCS po X ili po Y, na pokaznici: pokaznica koja ide uglavnom gore ili dole čita se kao X, a ona koja ide postrance čita se kao Y; `Xdatum` i `Ydatum` to fiksiraju. Prvo postavite početnu tačku sa {{cmd:UCS}} (bez nje je to 0,0 crteža). Ručice pomeraju element, početnu tačku i kraj pokaznice, a vrednost prati. Čuva se kao prava ordinatna kota u DWG i DXF. Odbija kraj pokaznice na samom elementu.

### DIMARC

Aliasi: `DAR`. `Izaberi luk ili segment polilinije-luka`, zatim `Zadaj položaj kote dužine luka [Tekst (T)]`. Meri duž luka (ne tetive) i piše simbol luka pre vrednosti. Odbija pun krug, liniju ili pravi segment polilinije. DWG je čuva kao kotu dužine luka; DXF je čuva kao uglovnu kotu sa dužinom kao tekstom, a CadCraft je ponovo otvara kao kotu dužine luka.

### DIMJOGGED

Aliasi: `DJO`, `JOG`. `Izaberi luk ili krug`, `Zadaj pomeraj središta`, `Zadaj položaj preloma`. Kota poluprečnika za krivu čiji je centar daleko ili van lista: linija kote počinje od tačke koju zadate umesto od centra, sa prelomom u sebi, i i dalje piše stvarni poluprečnik. DWG je čuva kao kotu prelomljenog poluprečnika; DXF je čuva kao kotu poluprečnika, a CadCraft je ponovo otvara prelomljenu.

### DIMJOGLINE

Aliasi: `DJL`. `Izaberi kotu za dodavanje preloma [Ukloni (R)]`, zatim `Zadaj položaj preloma (ili pritisnite Enter)`. Stavlja simbol preloma na liniju linearne ili poravnate kote, da pokaže da rastojanje nije nacrtano u razmeri; vrednost se ne menja. `Ukloni` ga skida. Odbija druge vrste kota.

### QDIM

Bez aliasa. `Izaberi geometriju za kotiranje`, zatim `Zadaj položaj linije kote [Neprekidno (C)/Naizmenično (S)/Osnovno (B)/Ordinatno (O)/Poluprečnik (R)/Prečnik (D)/Tačka oslonca (P)]`. Kotira više objekata u jednom koraku, od krajeva linija i segmenata polilinija, centara krugova i lukova, tačaka i referenci blokova. Položaj iznad ili ispod objekata meri preko, a pored njih meri gore. `Neprekidno` ulančava tačke, `Osnovno` meri sve od prve, `Naizmenično` slaže parove od sredine ka van, `Ordinatno` daje svakoj tački njeno rastojanje od oslonca (`Tačka oslonca (P)` bira novi), `Poluprečnik` i `Prečnik` kotiraju svaki krug i luk koji izaberete. Režim se pamti. Sve što napravi je jedan korak poništavanja. Kaže to kad ima manje od dve tačke ili nema lukova ili krugova za Poluprečnik i Prečnik.

### DIMBREAK

Aliasi: `DBREAK`. `Izaberi kote za dodavanje ili uklanjanje prekida`, zatim `Prekini gde druge objekte seku [Auto/Ručno (M)/Ukloni (R)] <Auto>`. `Auto` ostavlja prazninu u liniji kote i pomoćnim linijama gde god drugi objekat preseca, i ponovo je računa kad se ti objekti ili kota pomere. `Ručno` (jedna kota) pita dve tačke i ostavlja prazninu između njih. `Ukloni` skida sve praznine. Praznina je 1,5 puta veća od visine teksta kote.

### DIMSPACE

Bez aliasa. `Izaberi osnovnu kotu`, `Izaberi kote za razmak`, `Unesi vrednost razmaka ili Auto <Auto>`. Pomera linije kota paralelnih linearnih i poravnatih kota (ili uglovnih oko istog temena) tako da budu jednako udaljene, merano od osnovne kote, svaka na svojoj strani. `0` ih poravnava sa osnovnom; `Auto` je dvostruka visina teksta osnovne kote. Kote koje nisu paralelne sa osnovnom ostaju netaknute.

### DIMINSPECT

Bez aliasa. `Izaberi kote`, `Oblik okvira za kontrolu [Okrugao/Uglast/Nema/ukloni] <Okrugao>`, `Unesi oznaku`, `Unesi stopu kontrole <100%>`. Crta okvir oko vrednosti sa oznakom ispred i stopom kontrole posle nje. `ukloni` skida okvir. Tekst tolerancije ostaje uz vrednost.

### DIMOVERRIDE

Aliasi: `DOV`, `DIMOVER`. `Unesi naziv promenljive kote za prepisivanje ili Obriši`, `Unesi novu vrednost za …`, ponovo dok ne pritisnete Enter, zatim `Izaberi kote`. Menja te postavke samo na izabranim kotama; stil kote se ne menja. Uzima promenljive koje su broj ili prekidač (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Obriši` vraća izabrane kote na njihov stil. Odbija naziv koji nije takva promenljiva i vrednost koju ne prihvata.

### DIMREASSOCIATE

Aliasi: `DRE`, `DIMREASSOC`. `Izaberi kote`, zatim za svaku njene početne tačke pomoćnih linija (`Zadaj prvu početnu tačku pomoćne linije na objektu`: hvata se za kraj ili sredinu linije, teme polilinije, centar; Enter ostavlja tu tačku slobodnom), ili za poluprečnik, prečnik, prelomljeni poluprečnik ili kotu dužine luka `Izaberi luk ili krug`. Kota se zatim veže za te objekte: kad se oni pomere ili promene veličinu, ona prati u istom koraku poništavanja i ponovo meri. Ručno pomeranje vezane tačke, ili brisanje objekta, prekida vezu. Veza se čuva u DWG i DXF 2000 kao CadCraft-ovi sopstveni podaci; drugi programi vide običnu kotu.

### DIMDISASSOCIATE

Aliasi: `DDA`, `DIMDISASSOC`. `Izaberi kote`. Oslobađa ih od objekata za koje su vezane; ništa se ne pomera.

### CENTERMARK

Aliasi: `CM`, `DIMCENTER`, `DCE`. `Izaberi krug ili luk za dodavanje oznake centra`, ponavlja se do Enter. Crta krst u centru i četiri osne linije do malo iza krive (tip linije CENTER), kao obične linije na tekućem sloju; veličina prati veličinu strelice i ukupnu razmeru tekućih postavki kote, a okreće se sa UCS. Ne prate krug ako se on pomeri.

### CENTERLINE

Aliasi: `CL`. `Izaberi prvu liniju`, `Izaberi drugu liniju`. Crta liniju na sredini između dve linije (duž simetrale kad se sastaju), malo dužu od njih, u tipu linije CENTER. Obična linija: ne prati dve linije.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Bez aliasa. Svaka pita `Unesi novu vrednost za … <tekuća>` i postavlja tu veličinu za **nove** kote: ukupna razmera, visina teksta, veličina strelice, decimalna mesta (do 8), razmak oko teksta, produženje preko linije kote, pomeraj od početne tačke. Pogledajte [Podešavanje veličina kota](topic:dimension-settings).

### DIMLUNIT

Podešavanje kote: format dužine samo novih kota (1 naučni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomački).

### DIMSTYLE i -DIMSTYLE

Aliasi: `DST`, `DDIM`, `D`. Upravljač stilovima kota: {{ui:Postavi kao tekuće}}, {{ui:Novo…}}, {{ui:Izmeni…}}, {{ui:Preimenuj…}}, {{ui:Izbriši}}, {{ui:Uporedi…}}, {{ui:Primeni na izabrane}}. `-DIMSTYLE` u komandnoj liniji: `Stil kote [Vrati/Sačuvaj/Izbriši/Primeni/Uporedi/preimenuj (N)/Spisak (L)]`. Pogledajte [Podešavanje veličina kota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT i DIMTEDIT

`DIMEDIT` (`DED`): `Uređivanje kote [Početak/Novo/Rotiraj/Kosa] <Početak>`, zatim kote (ili one koje su već izabrane). Novo pita tekst (`<>` = izmerena vrednost); Rotiraj za ugao (0 vraća tekst); Kosa za ugao pomoćnih linija u odnosu na osu X (Enter = nema; samo linearne i poravnate kote). `DIMTEDIT` (`DIMTED`): `Tekst kote [Levo/Desno/Centar/Početak/Ugao] <Centar>`. Pogledajte [Podešavanje veličina kota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasi: `DTU`. `Jedinice u tekstu novih kota [Jedinice crteža/mm/cm/m/km]`, ili sa izabranim kotama `Jedinice u tekstu izabranih kota`. Piše izmerenu dužinu u toj jedinici sa jedinicom iza nje (DIMLFAC i sufiks DIMPOST); `D` vraća na jedinice crteža. Pogledajte [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasi: `RC`. Ispisuje `Dužina luka: … Vrsta: …`, zatim `Zadaj prvu tačku [Dužina luka/Objekat (O)/Pravougaono (R)/Poligonalno (P)/Slobodno (F)]`. Pravougaono pita `Zadaj suprotni ugao`; Poligonalno `Zadaj sledeću tačku (Enter zatvara oblak) [Opozovi (U)]`; Slobodno prati pokazivač do klika ili {{key:Enter}}; `O` pita `Izaberi objekat` i `Obrnuti smer? [Da (Y)/Ne (N)] <N>` i pretvara objekat u oblak. `A` pita `Zadaj dužinu svakog luka`. `R`, `P` i `F` biraju vrstu za sledeći oblak. Rezultat je zatvorena polilinija lukova.

### MLEADER

Aliasi: `MLD`; ili {{ui:Pokazna linija}}. `Zadaj položaj vrha strelice pokazne linije [Veličina vrha/Rastojanje sletanja/Blok (B)]`, `Zadaj položaj sletanja pokazne linije`, zatim tekst u polju na mestu (ili, bez njega, `Unesi tekst (prazan red završava)`). `Blok` prvo pita naziv bloka, a višestruka pokazna linija prikazuje taj blok umesto teksta. Još linija pokazne: {{cmd:MLEADEREDIT}}. Čuva se kao prava višestruka pokazna linija u DWG; DXF čuva linije, vrh strelice i tekst koje crta.

### MLEADEREDIT

Aliasi: `MLE`. `Izaberi višestruku pokaznu liniju`, zatim `Zadaj položaj vrha strelice pokazne linije [Ukloni pokazne linije/Sadržaj bloka (B)/Sadržaj teksta (T)]`: svaka tačka dodaje liniju pokazne od novog vrha do istog sletanja, do Enter. `Ukloni pokazne linije` zatim skida liniju pokazne na koju kliknete (višestruka pokazna linija zadržava bar jednu). `Sadržaj bloka` pita naziv bloka i prikazuje taj blok umesto teksta (pita njegove atribute); `Sadržaj teksta` vraća tekst. Svaka linija pokazne ima sopstvenu ručicu. DWG čuva svaku liniju pokazne i blok u jednoj višestrukoj pokaznoj liniji.

### MLEADERALIGN

Aliasi: `MLA`. `Izaberi višestruke pokazne linije`, zatim `Izaberi višestruku pokaznu liniju za poravnanje [Raspodeli/Razmak (S)/Koristi tekući razmak]` i `Zadaj pravac`. Pomera sletanja (i njihov tekst ili blok) ostalih višestrukih pokaznih linija na pravu kroz sletanje izabrane u tom pravcu; vrhovi strelica ostaju gde pokazuju. `Razmak` im takođe daje jednak razmak; `Raspodeli` pita dve tačke i raspoređuje ih ravnomerno između. Potrebne su bar dve višestruke pokazne linije.

### MLEADERCOLLECT

Aliasi: `MLC`. `Izaberi višestruke pokazne linije`, zatim `Zadaj položaj skupljene višestruke pokazne linije [Vertikalno/Horizontalno]` (Enter zadržava mesto prve). Pravi jednu višestruku pokaznu liniju od nekoliko: sadržaj bloka ide u novi blok koji drži sve blokove jedan pored drugog ili jedan ispod drugog; sadržaj teksta postaje jedna napomena sa redom za svaki. Prva višestruka pokazna linija zadržava svoje linije pokazne; ostale se uklanjaju. Odbija mešavinu teksta i sadržaja bloka.

### TABLE

Aliasi: `TB`; ili {{ui:Anotacije}} › {{ui:Više}} › {{ui:Tabela}}. Pravi tabelu: jedan objekat koji pomerate, kopirate, rotirate, razmerite i štampate kao bilo koji drugi, sa ćelijama koje čuva kao podatke.

- `Broj redova podataka ili [Lepljenje (P)/Datoteka (F)/Stil (S)] <3>`, zatim `Broj kolona <3>`, `Visina teksta` i `Gornji levi ugao tabele`. Tabela dobija red naslova (jedna spojena ćelija) i red zaglavlja iznad redova podataka.
- `P`: tabela iz ćelija tabelarnog programa u privremenoj memoriji (tekst sa tabulatorom između ćelija). Pritisak na {{key:Ctrl+V}} sa takvim ćelijama u privremenoj memoriji radi isto, osim ako CadCraft-ova sopstvena kopija nije novija (ili CadCraft ne može da razlikuje: tada lepi sopstvenu kopiju i to kaže). `F`: tabela iz datoteke `.csv` ili datoteke sa tabulatorima. Prvi red postaje red zaglavlja; širine kolona staju uz tekst.
- `S`: izbor stila tabele za ovu tabelu (pogledajte {{cmd:TABLESTYLE}}).
- Odbija broj redova ili kolona koji nije ceo broj, i više ćelija nego što tabela može da primi (2.000 redova, 200 kolona, 40.000 ćelija).
- {{cmd:EXPLODE}} pretvara tabelu u linije i tekst. Sačuvana kao DWG, tabela je prava tabelarna struktura koju drugi programi mogu uređivati; sačuvana kao DXF, to je blok koji je crta, a CadCraft je ponovo otvara kao tabelu.

### TABLEDIT

Aliasi: `TABLEEDIT`, `TABEDIT`; ili dvostruki klik na ćeliju. Uređuje tabelu.

- `Izaberi ćeliju za kucanje (Enter za kraj) ili [Red/Kolona/Veličina/Spoji/Razdvoji/Poravnanje/Visina/Vrsta/Obriši (CL)]`. Kliknite ćeliju, ili kad je tabela izabrana, ukucajte njen naziv (`B3`: kolona B, red 3; red naslova je red 1). U pregledaču se preko ćelije otvara polje: {{key:Enter}} zadržava tekst, {{key:Tab}} ide na sledeću ćeliju, {{key:Alt+Enter}} počinje novi red, {{key:Esc}} ostavlja ćeliju kakva je bila.
- Tekst koji počinje sa `=` je formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, sa `+ - * / ^`, zagradama i funkcijama kao `sqrt` i `round`. Ćelija pokazuje vrednost; formula koja imenuje svoju ćeliju, ćeliju van tabele ili ćeliju bez broja prikazuje `####`, a komandna linija kaže zašto.
- `R` / `C`: `Umetni` ili `Obriši` redove ili kolone na izabranoj ćeliji (koliko, i iznad ili ispod, levo ili desno). Formule prate ćelije koje imenuju.
- `S`: širina kolone i visina reda. Red nikad nije niži od svog teksta. Izabrana tabela ima i ručicu na ivici svake kolone i svakog reda.
- `M`: spajanje od jedne izabrane ćelije do druge; `U`: razdvajanje. `A`: poravnanje (`TL` gore levo … `MC` sredina centar … `BR` dole desno). `H`: sopstvena visina teksta ove ćelije (0 = iz stila). `K`: pravi red naslovom, zaglavljem ili redom podataka. `CL`: prazni ćeliju.
- Odbija tabelu na zaključanom sloju, brisanje svakog reda ili kolone, i spajanje koje bi presekalo drugu spojenu ćeliju na dva dela.

### TABLESTYLE

Aliasi: `TS`. Navodi stilove tabela sa brojem tabela koje koristi svaki, pa `Stil tabele: [Novi/Postavi/Izmeni/Izbriši/Primeni]`.

- Stil drži visinu teksta i poravnanje reda naslova, zaglavlja i podataka, margine ćelija i koje ivice se crtaju (spoljne, između redova, između kolona).
- `N` pravi stil iz tekućeg i postavlja ga kao tekući; `S` postavlja tekući stil (nove tabele ga dobijaju); `E` menja jedan: tabele koje ga koriste se ponovo crtaju; `A` daje izabranim tabelama tekući stil; `D` briše jedan (ne Standard, ne tekući; tabele koje su ga koristile zadržavaju svoj izgled).
- Stilovi se čuvaju sa crtežom (DWG i DXF).

### TABLEEXPORT

Čuva ono što tabela prikazuje kao CSV datoteku (formula kao svoju vrednost). `Izaberi tabelu`, ili je izaberite prvo. Tekstualne ćelije koje počinju sa `=`, `+`, `-` ili `@` dobijaju vodeći `'` da ih tabelarni program ne izvrši.

### TABLEPASTE

Aliasi: `PASTETABLE`. Pravi tabelu iz ćelija tabelarnog programa u privremenoj memoriji, zatim pita gornji levi ugao. Isto kao {{cmd:TABLE}} › `Lepljenje`.

### DATALINK

Aliasi: `DL`. `Veza podataka: [Novo/Spisak/Ukloni] <Novo>`. `N` pita CSV datoteku, postavlja tabelu iz nje i pamti naziv datoteke; `L` navodi veze sa njihovom datotekom, veličinom, vremenom čitanja i brojem tabela koje ih koriste; `R` uklanja vezu (njene tabele ostaju obične tabele).

### DATALINKUPDATE

Aliasi: `DLU`. Ponovo čita datoteku veze podataka i ponovo puni tabele vezane za nju (redovi i kolone se dodaju ili uklanjaju da odgovaraju). Pregledač sam ne može da otvori datoteku, pa traži da ponovo izaberete datoteku. Sa više veza pita koju.

### FIELD

Stavlja polje u crtež: tekst koji se sam računa. `Polje: [Datum/Naziv datoteke/List/Svojstvo/Objekat/Izraz/Kod] <Datum>`:

- `D`: sada, ili sačuvani, kreirani ili odštampani datum, i format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: naziv datoteke, sa ili bez nastavka. `S`: broj lista, njegov naslov, ili koliko ima listova. `P`: svojstvo crteža po nazivu (pogledajte {{cmd:DWGPROPS}}). `O`: izaberite objekat, pa šta da se čita (površina, dužina, obim, poluprečnik, prečnik, sloj, naziv, x, y, tekst, rotacija, boja) i decimale. `E`: formula. `C`: tekst sa kodovima ukucanim kakvi jesu, kao `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Zatim `Izaberi tekst, ćeliju tabele ili blok sa atributima u koji se stavlja (Enter: novi tekst)`: izabrani tekst dobija polje dodato iza onoga što sadrži; ćelija isto; referenca bloka pita koji atribut; {{key:Enter}} pita visinu i tačku za novi tekst.
- Na ekranu polje ima svetlo sivu pozadinu; štampa i PDF je nikad nemaju. Ručno kucanje preko teksta polja završava polje. Polje koje ne može da se izračuna prikazuje `####`.
- Polje objekta pronalazi svoj objekat preko ključa koji CadCraft čuva na objektima (Podešavanja › CadCraft › Datoteke pogodne za spajanje); sa isključenim ključevima odbija.

### UPDATEFIELD

Aliasi: `UPDATEFIELDS`. `Izaberi objekte čija polja treba ažurirati (Enter: svako polje) ili [Podešavanja (S)]`. `S` postavlja kada se polja sama ažuriraju: ukucajte slova `O` otvaranje, `S` čuvanje, `P` štampa, `R` ponovno generisanje (sva četiri za početak), ili `NONE`.

### DWGPROPS

Aliasi: `DRAWINGPROPS`. Navodi svojstva crteža, pa `Promeni: [Naslov/Tema/Autor/Firma/Ključne reči/Komentari (M)/Prilagođeno (U)/Ukloni/Izlaz (X)]`. Prvih šest su ona koja prikazuje panel {{ui:Svojstva crteža}}; `U` dodaje vaš sopstveni naziv i vrednost, `R` uklanja jedan. Polja ih čitaju (`%<prop:title>%`, `%<prop:Client>%`) i prate odmah. Odbija prilagođeni naziv koji je jedan od ugrađenih ili sadrži `%`, `<`, `>`, navodnik ili obrnutu kosu crtu.

## Parametarski

Pogledajte [Ograničavanje crteža](topic:constraints) i [Korišćenje parametara i jednačina](topic:parameters). Ograničenja rade na kartici {{ui:Model}}.

### GEOMCONSTRAINT i komande GC

Alias `GCON`: `Unesi tip ograničenja [Horizontalno/Vertikalno/Normalno (PE)/Paralelno (PA)/Tangentno (T)/Podudarno (CO)/Koncentrično (CON)/Kolinearno (COL)/Simetrično (S)/Jednako (E)/Fiksiraj (F)] <Horizontalno>`, zatim upiti te komande.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Izaberi objekat [2 tačke] <2 tačke>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Izaberi prvi objekat`, `Izaberi drugi objekat` (drugi se pomera).
- {{cmd:GCCOINCIDENT}}: `Izaberi prvu tačku [Objekat/Automatsko ograničavanje] <Objekat>`, `Izaberi drugu tačku [Objekat] <Objekat>`.
- {{cmd:GCFIX}}: `Izaberi tačku [Objekat] <Objekat>`.
- {{cmd:GCSYMMETRIC}}: `Izaberi prvi objekat [2 tačke] <2 tačke>`, `Izaberi drugi objekat`, `Izaberi liniju simetrije`.

### DIMCONSTRAINT i komande DC

Alias `DCON`: `Izaberi pridruženu kotu za pretvaranje [Linearno/Horizontalno/Vertikalno/Poravnato/Uglovno/Radijalno/Prečnik/Pretvori] <Poravnato>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Zadaj prvu tačku ograničenja [Objekat] <Objekat>`, `Zadaj drugu tačku ograničenja`, `Zadaj položaj linije kote`, `Tekst kote <d1=40>` (broj, izraz, ili `naziv=izraz`).
- {{cmd:DCALIGNED}}: kao gore, sa `[Objekat/Tačka i linija/2 linije]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Izaberi luk ili krug`. {{cmd:DCANGULAR}}: `Izaberi prvu liniju ili luk`, `Izaberi drugu liniju`.
- {{cmd:DCCONVERT}}: `Izaberi kote za pretvaranje`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Izaberi objekte [Podešavanja]`. `S` pita tolerancije rastojanja i ugla.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Izaberi objekte`; njihova ograničenja nestaju.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Izaberi objekte [Prikaži sve/Sakrij sve]`, zatim `[Prikaži/Sakrij]`.
- {{cmd:DCDISPLAY}}: `Unesi opciju [Prikaži/Sakrij]`.

### PARAMETERS i -PARAMETERS

{{cmd:PARAMETERS}} (aliasi `PAR`, `PARAM`) otvara panel {{ui:Parametri}}. `-PARAMETERS`: `Unesi opciju [Novo/Izmeni/Preimenuj/Izbriši/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Preuzima makro (.swb) koji ponovo pravi model kao jednu ograničenu skicu u SolidWorks-u. Pogledajte [Premeštanje skica u druge alate za delove i nazad](topic:solidworks-sketches).

## Blokovi

### ANNOSCALE

Aliasi: `CANNOSCALE`. Kaže razmeru anotacija crteža i koliko anotativnih objekata sadrži, zatim pita `Nova razmera anotacija`: ukucajte `1:50`, `1:100`, `2:1`, goli broj (`50` je 1:50) ili naziv jedne od razmera samog crteža. Svaki anotativni tekst i kota menjaju veličinu da se štampaju u istoj veličini na novoj razmeri, u jednom koraku poništavanja; objekti koji nisu anotativni ostaju netaknuti, kao i objekat koji čuva spisak razmera bez nove ({{cmd:OBJECTSCALE}}). Pogledajte [Jedinice, papiri i razmere](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliasi: `OBJSCALE`. `Izaberi anotativne objekte`, zatim `Razmere anotacija izabranih objekata [Dodaj/Obriši/Tekuća razmera/Spisak/Izlaz (X)] <Dodaj>`. Anotativni tekst ili kota čuva spisak razmera anotacija. `Dodaj` i `Obriši` pitaju razmeru (`1:50`, `2:1`, goli broj, ili naziv jedne od razmera samog crteža); `Tekuća razmera` dodaje razmeru anotacija crteža; `Spisak` ispisuje razmere svakog objekta. Prozor pogleda čija je razmera u spisku objekta prikazuje objekat u veličini koja na toj razmeri štampa njegovu visinu na papiru, na ekranu i u štampi. Poslednja razmera ne može da se obriše. Objekti koji nisu anotativni su izostavljeni: prvo uključite Anotativno u Svojstvima. Spiskovi se čuvaju u DWG i DXF kao CadCraft-ovi sopstveni podaci. Pogledajte [Jedinice, papiri i razmere](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliasi: `ANNOALL`. `Prikaži anotativne objekte na svim razmerama [ON/OFF]`. Uključeno (kako crtež počinje): anotativni objekat se prikazuje i u prozoru pogleda, ili u modelu, čija razmera nije u njegovom spisku, u veličini koju ima. Isključeno: tamo se ne prikazuje i ne može se birati u modelu. Prekidač je jedan korak poništavanja; ne čuva se u datoteci.

### SCALELISTEDIT

Aliasi: `SCALELIST`. `Spisak razmera [Dodaj/Izmeni/Obriši/Spisak/Vrati]` dok ne pritisnete {{key:Enter}}. Dodaj: `Naziv razmere`, `Jedinice papira`, `Jedinice crteža`. Izmeni i Obriši pitaju naziv razmere. Razmere samog crteža ulaze u spiskove razmera prozora pogleda i štampe i čuvaju se sa crtežom. Pogledajte [Jedinice, papiri i razmere](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT i PEDIT

`SPLINE` (`SPL`): `Prva tačka splajna [Metod/Objekat] (Tačke prilagođavanja)`. Prilagođavanje: tačke kroz koje kriva prolazi; `Zatvori`, `Opozovi`, zatim `Početna tangenta` i `Krajnja tangenta` (tačka, ili {{key:Enter}}). Metod › Kontrolna temena pita stepen (1 do 5) i crta iz kontrolnog poligona. Objekat pretvara polilinije u splajnove kroz njihova temena. `SPLINEDIT` (`SPE`): `[Podaci prilagođavanja/Uredi teme/pretvori u Polilinija/Otvori ili Zatvori/Obrni/Opozovi/Izlaz (X)]`; Podaci prilagođavanja `[Dodaj/Obriši/Pomeri/Očisti/Tangente/Izlaz (X)]`; Uredi teme `[Dodaj kontrolnu tačku/Pomeri/Težina/Izlaz (X)]`. `PEDIT` (`PE`): `[Zatvori/Otvori/Spoji/Širina/Prilagodi/Splajn/Ukloni krivinu/Generisanje tipa linije/Obrni/Opozovi/Izlaz (X)]`, `M` za više objekata; linije, lukovi i splajnovi se nude kao polilinije prvo. Pogledajte [Splajnovi i polilinije](topic:splines).

### BLOCK

Aliasi: `B`, `BMAKE`.

- `Unesi naziv bloka`. Ako postoji: `Blok „…” već postoji. Ponovo definisati? [Da (Y)/Ne (N)] <N>`.
- `Zadaj baznu tačku umetanja`
- `Izaberi objekte`. Zamenjuju se jednom referencom na novi blok.

### WBLOCK

Aliasi: `W`, `-WBLOCK`. Upisuje blok, neke objekte ili ceo crtež kao novu DWG ili DXF datoteku. `Izvor WBLOCK [Blok/Ceo crtež/Objekti] <Objekti>`:

- **Objekti**: `Zadaj baznu tačku umetanja` (postaje početak novog crteža), `Izaberi objekte`, zatim `Format datoteke [DWG/DXF/R12 DXF]` i `Naziv datoteke za novi crtež`, pa `Šta raditi sa objektima [Zadrži/Pretvori u blok/Obriši]`. Pretvori ih zamenjuje jednom referencom na blok sa nazivom datoteke; Obriši ih uklanja.
- **Blok**: `Blok za upisivanje`. Sopstveni objekti bloka, sa njegovom baznom tačkom kao početkom, ugnježdeni blokovi uključeni.
- **Ceo crtež**: svaki objekat u prostoru modela. Listovi se ne upisuju; koristite {{cmd:SAVEAS}} za kopiju koja ih zadržava.

Nova datoteka sadrži samo slojeve, tipove linija, stilove teksta i kota i blokove koje njeni objekti koriste, i jedinice crteža. Verzija DWG-a je ona koju je {{cmd:SAVEAS}} poslednji put koristio. U pregledaču se datoteka preuzima; u Studiju se otvara dijalog za čuvanje.

### ATTDEF

Aliasi: `ATT`, `DDATTDEF`, `-ATTDEF`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Definiši atribut}}. Prvo ispisuje režime, zatim `Unesi opciju za promenu (Enter kad završite) [Nevidljivo/Konstantno/Unapred podešeno]`, `Unesi naziv oznake atributa`, `Unesi opis atributa`, `Unesi podrazumevanu vrednost atributa` (`Unesi vrednost atributa` kad je konstantno), `Zadaj početnu tačku teksta`, `Zadaj visinu teksta`, `Zadaj ugao rotacije teksta`. {{cmd:BLOCK}} uzima definicije atributa u blok.

### EATTEDIT i ATTEDIT

`EATTEDIT` (`DDATTE`, ili dvostruki klik na referencu sa atributima; {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi atribute}}): `Izaberi referencu bloka sa atributima`, zatim dijalog {{ui:Uredi atribute}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ista referenca, zatim `<upit> (<OZNAKA>) <vrednost>` za svaki atribut; {{key:Enter}} zadržava vrednost. Pogledajte [Atributi](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Ažuriraj atribute referenci kog bloka [Naziv/Izbor/Sve] <Izbor>`. Vrednosti se zadržavaju; novi atributi dobijaju podrazumevanu vrednost, uklonjeni odlaze, a položaji se vraćaju.

### BATTMAN

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Upravljač atributima}}. Dijalog: blok, atributi (oznaka, upit, podrazumevano, režimi, redosled), {{ui:Ažuriraj reference (vrednosti se čuvaju)}}, {{ui:Primeni}}.

### REFEDIT i REFCLOSE

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mestu}}. `REFEDIT`: `Izaberi referencu bloka za uređivanje na mestu` (ili izbor). `REFCLOSE`: `Sačuvati promene u „…” [Sačuvaj (S)/Odbaci (D)] <Sačuvaj>`; {{ui:Sačuvaj blok}} i {{ui:Odbaci}} na traci rade isto. Cela izmena je jedan korak poništavanja. Pogledajte [Atributi](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT i BCLOSE

`BE`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izmeni blok}}. `Unesi naziv bloka za uređivanje <blok izabrane reference>` otvara uređivač blokova. `BCLOSE` pita `Zatvoriti uređivač bloka na „…” [Sačuvaj (S)/Odbaci (D)] <Sačuvaj>`; {{ui:Sačuvaj blok}} i {{ui:Odbaci izmene}} na traci rade isto. Sve urađeno u uređivaču je jedan korak poništavanja.

### VIEWBASE

Aliasi: `FLATSHOT`. Ravan 2D pogled tela na kartici 3D: `Pogled [Ispred/Gore/Desno/Levo/Pozadi/Dole/Iz (I)]`, `Skrivene linije [Prikaži/Sakrij]`, razmera (`1:20`, `2:1`; {{key:Enter}} uzima onu koja staje na list), zatim centar pogleda. Jedna referenca bloka, vidljive ivice na VIEW-VISIBLE, skrivene isprekidane na VIEW-HIDDEN. Pogledajte [Ravni pogledi na listu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasi: `-PUBLISH`; ili {{ui:Svi listovi u jednom PDF-u}} u dijalogu {{ui:Štampaj u PDF}}. `Listovi za štampu [Svi/Neki]`: {{key:Enter}} štampa svaki list, `S` pita nazive razdvojene zarezima. Jedan PDF, stranica i oznaka za svaki list. Pogledajte [Svi listovi u jednom PDF-u](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasi: `SSM`, `SHEETSETMANAGER`. Vodi vas do odeljka {{ui:Skup listova}} u levom panelu: listovi iz više crteža, numerisani i naslovljeni, njihove naslovne tablice popunjene iz skupa, objavljeni kao jedan PDF. Pogledajte [Skupovi listova](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): izaberite DWG ili DXF, pa tačku umetanja. {{cmd:XREF}} (`XR`, `-XREF`): `Povezani crteži [?/Priključi/Ponovo učitaj/Veži/Odvoji] (Enter: ?)`; sa više veza, izaberite jednu od njenih referenci ili ukucajte `N` i njen naziv. Pogledajte [Povezani crteži](topic:files#linked-drawings-external-references).

### COUNT

Aliasi: `BCOUNT`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Prebroj blokove}}. `Izaberi referencu bloka za brojanje, ili [Sve/Izvoz] (Enter: Sve)`: izbor bira i broji svaku referencu tog bloka u ovom prostoru; {{key:Enter}} ili `A` navodi sve; `E`, zatim `C` (broji) ili `A` (atributi) preuzima CSV. Pogledajte [Brojanje blokova i izvoz rasporeda](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasi: `I`, `DDINSERT`.

- `Unesi naziv bloka ili [Datoteka (F)/Biblioteka (L)] <poslednji blok>` (velika i mala slova nisu bitna). `F` pita DWG ili DXF, pa ceo crtež ili jedan njegov blok; naziv koji je već u upotrebi pita {{ui:Zadrži postojeće}} ili {{ui:Preimenuj}}. `L` otvara panel biblioteke.
- `Zadaj tačku umetanja [Razmera (S)/Rotacija (R)]`. `S` pita `Zadaj faktor razmere`, `R` pita `Zadaj ugao rotacije`; oba se pamte.
- Kad blok već stoji uz objekte koji se ponavljaju drugde bez njega, jedan red kaže koliko mesta se predlaže, a upit dobija `suGgested`: `G` ih prikazuje; kliknite blizu jednog da stavite blok tamo, `A` za sve njih, {{key:Enter}} za povratak. Preuzimaju rotaciju svojih suseda i podrazumevane vrednosti atributa. Crteži sa više od 20.000 objekata u otvorenom prostoru se ne pretražuju.
- Zatim `Unesi <upit> (<OZNAKA>) <podrazumevano>` za svaki atribut koji blok traži. Pogledajte [Atributi bloka](topic:attributes).

### LIBRARY

Aliasi: `LIB`. Otvara panel biblioteke: postavlja stavke, proverava ažuriranja, zasluge biblioteke. Bez pitanja. Pogledajte [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasi: `SMEMBER`; ili {{ui:3D element}} na kartici {{ui:Standardni}} biblioteke. `Veličina preseka <W12x26>` (kako je navodi kartica), zatim `Početna tačka [Stub (C)]` i `Krajnja tačka`: čvrst element na kartici 3D između dve tačke, koji stoji na tlu. `C` pita baznu tačku stuba i njegovu visinu. Jedan korak poništavanja. Pogledajte [Postavljanje čeličnih preseka i standardnih delova](topic:steel-and-standard-parts).

### PARTSLIST

Aliasi: `PLIST`. `Gornji levi ugao spiska delova`, zatim `Visina teksta <2,5>`: crta tabelu svakog standardnog dela i čeličnog preseka postavljenog iz biblioteke (brojevi stavki, količina, deo, standard, veličina, dužina, materijal, masa). Jedan korak poništavanja. Pogledajte [Postavljanje čeličnih preseka i standardnih delova](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasi: `PU`. Uklanja definicije blokova koje ništa ne koriste. Bez pitanja.

### DELBLOCKS

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izbriši blokove}}. `Izaberi blok za brisanje [Naziv/Izlaz (X)]`: kliknite referencu bloka, ili `N` za spisak blokova sa filterom (birate više), ili `X` / {{key:Enter}} za kraj. Svaka referenca nestaje — u modelu, na svakom listu i unutar drugih blokova — zatim definicija, a komandna linija kaže šta je obrisano i šta nije moglo. Blokovi bez imena i povezani crteži se ne nude. Upit se vraća za sledeći blok; cela komanda je jedan korak poništavanja.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} nalepljuje ono što ste kopirali ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) kao jedan blok: izaberite tačku umetanja i tamo ide jedna referenca na novi blok, izabrana. Blok dobija sopstveno ime (`A$C` i broj); {{cmd:RENAME}} mu daje vaše. Jedan korak poništavanja uklanja referencu i blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pita blok za zamenu i blok koji ide na njegovo mesto (`?` navodi blokove), zatim menja svaku referencu u modelu, na svakom listu i unutar drugih blokova. Svaka referenca zadržava mesto, razmeru, rotaciju, sloj i vrednosti atributa koje oba bloka imaju; atributi koje ima samo novi blok počinju sa podrazumevanim vrednostima, a kaže se koje vrednosti su odbačene. Kad ništa više ne koristi stari blok, nudi da ga ukloni. Odbija povezane crteže i zamenu koja bi stavila blok unutar samog sebe. Jedan korak poništavanja.

### MINSERT

{{cmd:MINSERT}} postavlja blok u redove i kolone: naziv bloka, tačka umetanja, razmera, rotacija, broj redova i kolona, i rastojanja između njih. Ceo skup se okreće sa rotacijom. Svaka je zasebna referenca (najviše 10.000), pa se bilo koja može pomeriti ili obrisati kasnije.

### BLOCKSPALETTE

Aliasi: `BLOCKSPAL`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Panel blokova}}. Prikazuje panel {{ui:Blokovi}} sa kursorom u njegovom filteru. Svaki blok ima malu sliku; oni postavljeni najskorije dolaze prvi. Dva dugmeta pored filtera prebacuju između spiska i mreže slika. Kliknite sliku (ili {{ui:Umetni}}) da postavite blok pomoću {{cmd:INSERT}}, ili ga prevucite na crtež da ga postavite gde ispustite.

{{ui:Libraries}}, ispod spiska: {{ui:Dodaj crtež}} uzima DWG ili DXF datoteku po izboru i navodi njene blokove sa slikama, a ceo crtež kao jedan blok. Postavljanje jednog kopira njegovu definiciju (i blokove koje gnezdi, i njihove slojeve) u ovaj crtež, kao što to radi opcija `File` komande {{cmd:INSERT}}; blok koji je već ovde sa istom definicijom koristi se bez pitanja, a onaj istog naziva koji se razlikuje pita {{ui:Zadrži postojeće}} ili {{ui:Preimenuj}}. U pregledaču datoteka ostaje dok se stranica ne zatvori. U CadCraft Studiju {{ui:Dodaj fasciklu}} navodi crteže u fascikli, a svaki se otvara kad ga kliknete, i datoteke i fascikle se pamte. Mali x uklanja biblioteku sa spiska; datoteka se ne dira. Zajednička {{ui:Biblioteka}} je nešto drugo: pogledajte [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).

### BCONVERT

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Pretvori ponavljanja u blokove}}. Pronalazi geometriju koja se ponavlja i pretvara svaku kopiju u referencu jednog bloka.

- `Izaberi objekte koji se ponavljaju, ili [Blok (B)]`: objekti jedne kopije. `B` umesto toga imenuje postojeći blok, da nađe slobodne kopije njegovih objekata.
- `Kopija može biti: ogledalski = Ne, razmera = Ne; sloj, boja, tip i debljina linije = Usklađeno … [Ogledalski/Razmera/Svojstva]`: `M`, `S` i `P` menjaju šta se računa kao kopija; {{key:Enter}} traži. Podešavanja se pamte.
- `Naziv za novi blok <Blok1>`, zatim `Zadaj baznu tačku bloka` ({{key:Enter}} uzima donji levi ugao izbora).
- Kaže koliko drugih skupova objekata je ista geometrija, ističe sve što bi zamenio, i pita `Da/Ne`.

Kopija su ista obeležja pomerena i okrenuta pod bilo kojim uglom (i ogledalski ili razmerena jednim faktorom kad su uključeni): svaki objekat mora imati svoj par, do u milioniti deo veličine izbora. Svaka referenca dobija sopstvenu rotaciju i razmeru (ogledalska ima negativnu razmeru po Y), i sloj koji su objekti delili. Objekti na zaključanim slojevima ostaju netaknuti i broje se. Pretražuje otvoreni prostor (model ili otvoreni list). Vrlo velika pretraga staje na granici rada i to kaže. Jedan korak poništavanja.

### BSEARCH

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Pronađi blokove}}. `Pronađi blokove po [Naziv/Atribut/Geometrija] <Naziv>`:

- `N`: deo naziva bloka, ili obrazac sa `*` i `?`. Navodi svaki blok sa njegovim referencama ovde i u celom crtežu.
- `A`: vrednost atributa, ili `OZNAKA=vrednost`. Navodi blokove čije reference je imaju, sa nađenim vrednostima. Konstantni atributi se računaju.
- `G`: izaberite objekte, ili jednu referencu bloka, pa se navode blokovi čiji je oblik najmanje 85% sličan, najbolji prvi. Veličina, rotacija i ogledalsko preslikavanje se ne računaju. Mera poredi rastojanja između tačaka raspoređenih duž obrisa, pa nalazi slične oblike; za tačne kopije koristite {{cmd:BCONVERT}}.

Reference nađene u otvorenom prostoru se biraju, spremne za sledeću komandu.

### BREPLACE

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Zameni blokove}}. `Zameni [Izabrano/Sve]`: `S` zamenjuje reference blokova koje izaberete blokom koji imenujete; `A` pita blok i njegovu zamenu i menja svaku referencu, kao što to radi {{cmd:BLOCKREPLACE}} (isti kod). Referenca zadržava mesto, razmeru, rotaciju, sloj i vrednosti atributa koje oba bloka imaju; vrednosti za koje novi blok nema mesta se odbacuju i navode. `?` navodi blokove. Jedan korak poništavanja.

### DATAEXTRACTION

Aliasi: `EATTEXT`, `DX`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izvlačenje podataka}}. Navodi blokove, njihove atribute i svojstva objekata kao tabelu ili CSV datoteku.

- Radi nad izborom, ili pita `Izaberi objekte (Enter: sve u ovom prostoru)`.
- `Spisak: [Blokovi/Objekti/Sve]` kad izbor sadrži oboje. Blokovi bez imena, tabele i spiskovi materijala se nikad ne navode.
- Ispisuje kolone iz kojih birate (naziv, tip, sloj, X, Y, rotacija, razmera, dužina, površina, boja, tip linije, prostor, i po jedna za svaku oznaku atributa), zatim `Kolone, po nazivu ili broju sa zarezima između`. {{key:Enter}} uzima obeležene: naziv i svaki atribut za blokove; tip, sloj i dužinu za objekte.
- `Staviti istovetne redove zajedno sa brojem? [Da (Y)/Ne (N)] <Da>`, zatim `Staviti spisak u: [Tabela/Csv] <Tabela>`. Tabela je obična tabela (uređuje se sa {{cmd:TABLEDIT}}) i nije aktivna: pokrenite komandu ponovo kad se crtež promeni.
- Odbija kolonu koje nema na spisku. Tabela drži 1.999 redova podataka; CSV datoteka prima sve njih.

### COUNTTABLE

Broji reference blokova iz izbora (ili iz otvorenog prostora) i stavlja brojeve u tabelu (`Blok`, `Broj`) ili CSV datoteku. Za brojanje koje sledi crtež samo, pogledajte {{cmd:BOMTABLE}}.

## Listovi i štampa

### LAYOUT

Aliasi: `LO`, `NEWLAYOUT`; ili dugme {{ui:+}} ispod crteža. Novi list sa okvirom, naslovnom tablicom i jednim prozorom pogleda, na ISO A3 (ili Tabloid za crteže u inčima ili stopama). Bez pitanja.

### MVIEW

Aliasi: `MV`. Samo na listu ({{cmd:VPORTS}} na listu radi isto).

- `Zadaj ugao prozora pogleda [Poligonalno (P)/Objekat (O)]`, `Zadaj suprotni ugao`. Prozor pogleda prikazuje ceo model na standardnoj razmeri.
- `P` (Poligonalno): kliknite uglove obrisa (`Opozovi (U)`, `Zatvori (C)`), {{key:Enter}} kad završite. Odbija manje od tri ugla.
- `O` (Objekat): `Izaberi zatvoren objekat za obris prozora pogleda`: zatvorena polilinija, krug ili elipsa na listu. Prozor pogleda preuzima njegov oblik (krive kao kratki pravi delovi); objekat ostaje kakav je bio. Odbija objekat koji nije zatvoren.

### VPCLIP

Seče prozor pogleda koji je već na listu. `Izaberi prozor pogleda za isecanje` (ili ga izaberite prvo), zatim `Izaberi objekat za isecanje [Poligonalno (P)/Obriši (D)]`:

- Kliknite zatvorenu polilinIju, krug ili elipsu, ili {{key:Enter}} (ili `P`) da kliknete uglove poligona.
- `D` (Obriši, nudi se kad je prozor pogleda isečen) ponovo pravi pravougaonik: okvir oko obrisa koji je imao.
- Ono što prozor pogleda prikazuje ne pomera se na papiru, i njegova razmera ostaje. Model se crta i štampa samo unutar obrisa, a ivica ga prati. Jedan korak poništavanja.
- Isečen prozor pogleda ima ručicu na svakom uglu svog obrisa, pored centra i četiri ugla svog okvira (vučenje ugla okvira rasteže obris s njim). Svojstva prikazuju Obris: Pravougaonik, ili Isečeno sa brojem uglova.
- Datoteke DWG i DXF 2000 čuvaju obris za CadCraft. Drugi programi otvaraju prozor pogleda kao pravougaonik oko njega; DXF R12 čuva samo pravougaonik.
- Na kartici modela kaže da su prozori pogleda na listovima.

### VPORTS

Aliasi: `VIEWPORTS`. {{cmd:SPLIT}} je isto i sa lista, a {{ui:Pogled}} › {{ui:Više}} › {{ui:Podeli jedno pored drugog}}, {{ui:Podeli jedno iznad drugog}}, {{ui:Četiri okna}}, {{ui:Jedno okno}} to pokreću. Na modelu: `Unesi broj okana [Jedno (SI)/2/3/4] <3>`; `2` pita `[Horizontalno/Vertikalno] <Vertikalno>` (Vertikalno = jedno pored drugog), `3` pita `[Levo/Desno] <Desno>` (gde ide veliko okno). Svako okno zadržava sopstveni pogled i prostor; klik čini okno aktivnim. Na listu je to {{cmd:MVIEW}}. Pogledajte [Podela ekrana](topic:split-screen).

### VPVIEW

Bez aliasa. Samo na listu.

- `Izaberi prozor pogleda` (preskače se ako je jedan izabran), zatim na modelu: `Zadaj prvi ugao prozora koji se prikazuje`, `Zadaj suprotni ugao`.

### UCS

Bez aliasa. Koordinatni sistem po vašem izboru; nije izmena. `Zadaj početnu tačku UCS [Imenovan/Objekat/Prethodni/Svet/Z/3 tačke] <Svet>`: tačka je nova početna tačka, zatim `Zadaj tačku na X osi (Enter zadržava ugao)`. `Z`: `Zadaj ugao rotacije oko Z ose <90>`. `3`: početna tačka, tačka na pozitivnoj X osi, tačka na pozitivnoj strani Y. `OB`: `Izaberi objekat za poravnanje UCS`. `NA`: `[Vrati/Sačuvaj/Izbriši/?]` i naziv. Pogled se okreće tako da nova X osa bude vodoravna. Pogledajte [Okretanje pogleda i korišćenje sopstvenih koordinata](topic:ucs-and-turned-view).

### PLAN

Bez aliasa. `Unesi opciju [Tekući ucs/Ucs/Svet] <Tekući ucs>`: okreće pogled aktivnog okna tako da X osa UCS-a (ili sveta) bude vodoravna. Ništa u crtežu se ne pomera.

### TURNLEFT, TURNRIGHT, TURNWORLD

Bez aliasa; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Okreni pogled 90° ulevo}}, {{ui:Okreni pogled 90° udesno}}, {{ui:Nazad na svet}}. Isto kao `UCS Z -90`, `UCS Z 90` i `UCS W`, uz praćenje pogleda.

### VPLAYER

Bez aliasa. Na listu ili unutar prozora pogleda. `Unesi opciju [?/Zamrzni/Odmrzni/Vrati/Vpvisdflt]`: `F`, `T`, `R` pitaju nazive slojeva (zarezi, džokeri `*` i `?`), zatim `[Svi/Izbor/Tekući] <Tekući>` prozori pogleda; Vrati svaki sloj vraća na njegovo podrazumevano „zamrznut u novim prozorima”; `V` postavlja to podrazumevano (`[Zamrznuto/Odmrznuto]`), koje koristi {{cmd:MVIEW}}. `?` navodi slojeve zamrznute u tekućem prozoru pogleda. Kolona prozora pogleda u panelu Slojevi radi isto za jedan prozor. Pogledajte [Zamrzavanje sloja u jednom prozoru pogleda](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasi: `MS`; ili dvostruki klik unutar prozora pogleda. Samo na listu. Rad na modelu kroz prozor pogleda: izabrani, jedini na listu, ili `Kliknite unutar prozora pogleda za rad u njemu`. Pomeranje i zumiranje unutra menjaju pogled prozora (onaj zaključan na prikaz to zadržava, a list se pomera); novi pogled se upisuje kao jedan korak poništavanja. Pogledajte [Rad na modelu kroz prozor pogleda](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasi: `PS`; ili dvostruki klik van prozora pogleda, ili klik na karticu ispod crteža. Nazad na list.

### PLOT

Aliasi: `PRINT`, `PUBLISH`, `EXPORTPDF`; ili {{key:Mod+P}}. Otvara dijalog {{ui:Štampaj u PDF}}. Pogledajte [Štampanje u PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasi: `STYLESMANAGER`, `PSTABLES`; ili {{ui:Uredi tabele…}} u dijalogu {{ui:Štampaj u PDF}}. Otvara {{ui:Tabele stilova štampanja}}: kako se svaka boja štampa (boja, siva, mastilo, debljina linije), čuva se sa crtežom. Pogledajte [Tabele stilova štampanja](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} pomera objekte između lista i modela preko prozora pogleda, razmerene i okrenute tako da izgledaju isto sa druge strane. Na listu izaberite objekte i oni idu u model (izaberite prozor kad list ima više njih). Dok radite na modelu kroz prozor pogleda ({{cmd:MSPACE}}), izabrani objekti dolaze na list. Kaže koliko su puta postali veći ili manji. Prozori pogleda ostaju na svom listu. Jedan korak poništavanja.

### ISODRAFT

{{cmd:ISODRAFT}} uključuje ili isključuje izometrijsko crtanje `ON` ili `OFF`, ili ide direktno na ravan `Left`, `Top` ili `Right`. Dok je uključeno: Ortho ({{key:F8}}) drži linije duž dve ose ravni (levo: 90° i 150°; gore: 30° i 150°; desno: 30° i 90°), polarno praćenje ({{key:F10}}) prati iste ose, hvatanje za mrežu ({{key:F9}}) koristi izometrijsku mrežu, a mreža ({{key:F7}}) se crta linijama pod 30°, 90° i 150°. {{cmd:ELLIPSE}} dobija `Isocircle`: zadajte centar i poluprečnik (ili `Prečnik (D)`) i crta elipsu koju krug pokazuje na tekućoj ravni. Crtež ostaje ravan: ovo su pomagala za crtanje slikovitog prikaza, a ne 3D model. Postavka važi za ovu sesiju i ne čuva se u datoteci.

### ISOPLANE

{{cmd:ISOPLANE}} bira ravan na kojoj radi izometrijsko crtanje: `Left`, `Top` ili `Right`. Enter prelazi na sledeću ravan. Dok je izometrijsko crtanje uključeno, {{key:F5}} radi isto usred komande; dok je isključeno, {{key:F5}} prepušten je pregledaču.

## Upiti

### CAL

Ispisuje vrednost proračuna, kako bi se čitao bilo gde gde se unosi dužina.

- `Izraz`: ukucajte ga, na primer `12'6"+3/4"` ili `(24'-0")/3`, i pritisnite {{key:Enter}}. CadCraft ispisuje `= 12'-6 3/4"   (150,75 jedinica crteža)`. Pogledajte [Aritmetika u unetoj vrednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasi: `DI`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Izmeri rastojanje}}.

- `Zadaj prvu tačku`, `Zadaj drugu tačku`. Ispisuje rastojanje, ugao, Delta X i Delta Y.

### AREA

Aliasi: `AA`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Površina}}. Ispisuje površinu i obim.

- `Zadaj prvi ugao [Objekat/Dodaj površinu/Oduzmi površinu] <Objekat>`
  - Kliknite ili ukucajte uglove; na `Zadaj sledeću tačku (Enter zatvara) [Opozovi (U)]` pritisnite {{key:Enter}} da zatvorite obris. `U` vraća poslednji ugao.
  - {{key:Enter}} ili `O`, zatim `Izaberi objekat`: krug (ispisuje obim), elipsu, polilinију (otvorena se zatvara pravom linijom za površinu, a njena dužina se ispisuje) ili šrafuru (rupe se odbijaju).
  - `A` (Dodaj površinu) i `S` (Oduzmi površinu) čuvaju tekući zbir: upit počinje sa `(režim DODAJ)` ili `(režim ODUZMI)`, svaka površina se dodaje ili oduzima, i `Ukupna površina = …` se ispisuje posle svake. U ovim režimima `O` bira objekte do {{key:Enter}}, a {{key:Enter}} na prvom upitu završava komandu.

### MEASUREGEOM

Aliasi: `MEA`. `Unesi opciju [Rastojanje (D)/Poluprečnik (R)/Ugao (A)/Površina (AR)] <Rastojanje>`; posle svakog merenja pita ponovo, a podrazumevano je `Izlaz (X)`.

`Brzo` meri oko pokazivača dok ga pomerate: rastojanje do najbližeg objekta desno, iznad, levo i ispod (duž osa tekućeg UCS-a), crta se dok idete, i ugao gde se dva od tih suseda prave i sastaju. Klik upisuje četiri rastojanja, čistu širinu i visinu i uglove u istoriju; Enter vraća na opcije. Čita ono što je na ekranu.

- `D`: dve tačke, kao {{cmd:DIST}}.
- `R`: `Izaberi luk ili krug`; ispisuje poluprečnik i prečnik.
- `A`: luk (njegov obuhvaćeni ugao), linija pa druga linija (ugao između njih, prema njihovim dalekim krajevima), ili {{key:Enter}} i tri tačke (teme, pa dva kraja).
- `AR`: kao {{cmd:AREA}}, jedna površina.

### ID

Bez aliasa. `Zadaj tačku`; ispisuje njen X i Y.

### LIST

Aliasi: `LI`, `LS`. `Izaberi objekte`; ispisuje tip, sloj i glavne mere svakog objekta.

### MASSPROP

{{cmd:MASSPROP}} daje svojstva preseka oblasti i zatvorenih objekata koje izaberete, uzeti zajedno: površina, obim, obuhvatni okvir, težište, momenti inercije u odnosu na osu X i Y kroz početak, proizvod inercije, poluprečnici inercije, isti momenti u odnosu na težište, i glavni momenti sa pravcima njihovih osa. Rupe u regionu broje se kao rupe. Brojevi su u jedinicama crteža i tačni za konture od linija i lukova; elipse i splajnovi se mere kao kratki pravi segmenti, i to se kaže. Posle izveštaja pita da li da ga upiše u tekstualnu datoteku. Objekti koji nisu zatvoreni se izostavljaju, i kaže se koliko ih je.

## Pogled, datoteka i ostalo

### ZOOM

Aliasi: `Z`.

- `Zadaj ugao prozora, unesi faktor razmere (nX) [Obuhvat (E)/Sve (A)/Prozor (W)/Prethodni (P)/Razmera (S)/Centar (C)]`. Kliknite dva ugla za prozor. `E`, `A` ili Enter: ceo crtež.
- `P` (Prethodni, ili {{ui:Prethodni}} na traci sa alatkama) vraća na pogled pre, do 10 pogleda po kartici; niz koraka točkića ili jedno pomeranje računa se kao jedan pogled.
- Broj kao `2`, `2x` ili `0.5x` (ili `S`, pa broj) uvećava ili umanjuje za taj faktor oko sredine ekrana.
- `C` pita `Zadaj centralnu tačku` i `Unesi visinu ili uvećanje (nX)`.

### PDFATTACH, PDFIMPORT i PDF komande

Aliasi: `PDFATT` za {{cmd:PDFATTACH}}, `PDFIM` za {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} stavlja PDF stranicu ispod crteža (datoteka, stranica, tačka umetanja, razmera, rotacija); {{cmd:PDFIMPORT}} pretvara linije, krive, ispune i tekst stranice u objekte crteža na slojevima nazvanim po PDF-u, u stvarnoj veličini, zadatoj razmeri, ili razmerene iz dve tačke i stvarnog rastojanja. {{cmd:PDFCLIP}} seče podlogu, {{cmd:PDFADJUST}} postavlja izbleđivanje, kontrast, monohromatski ili je isključuje, {{cmd:PDFLAYERS}} uključuje ili isključuje sopstvene slojeve PDF-a, a {{cmd:PDF}} ponovo daje CadCraft-u datoteke koje podloge crteža koriste. Pogledajte [PDF podloge](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Automatsko dopunjavanje crteža: kad nijedna komanda ne radi, siva prikazana senka pokazuje šta obrasci vašeg crteža kažu da sledi. {{cmd:AUTOCOMPLETE}} je uključuje `On` ili isključuje `Off` (takođe Podešavanja › CadCraft) ili `Show` prikazuje šta bi sada predložila. **Tab** crta senku kao jedan korak poništavanja, **Esc** je odbacuje dok se crtež ne promeni. Nalazi tri stvari u najnovijim objektima: sledeću kopiju nečega što je nacrtano dvaput ili više puta na ravnom koraku (stubovi, kolone, stepenik sa čeonom i gazištem), sledeće korake stepeništa od polilinije, i nedostajuću stranu sobe ili lanca zidova. Usred {{cmd:LINE}} ili {{cmd:PLINE}} senka je **sledeća tačka**: sledeći korak stepeništa (čelo, gazište, čelo…), četvrti ugao pravougaonika, tačka koja ga zatvara, ili još jedan jednak korak. Približite kursor i pritisnite **Tab**, kao da ste kliknuli tamo; nastavite ili pritisnite Enter. Računa se na ovom računaru pravilima, bez modela.

### AUTOSHEET

Alias: `ASH`. Listovi koji se sami raspoređuju. {{cmd:AUTOSHEET}} uzima delove crteža (vaše imenovane poglede, ili odvojene delove modela, ili ceo model), bira veličinu papira (ili onu koju date), daje svakom delu standardnu razmeru (jednu za sve, ili najveću koju svaki može da primi) i raspoređuje poglede u redove na novim listovima sa naslovnom tablicom i natpisom (naziv i razmera) ispod svakog. Što ne stane na jedan list dobija sopstveni list. Jedan korak poništavanja. Računa se na ovom računaru pravilima, bez modela.

### PHOTOSKETCH

Alias: `PSK`. Fotografija skice u crtež. Izaberite fotografiju (JPEG, PNG ili TIFF) ručne skice na listu papira. {{cmd:PHOTOSKETCH}} pronalazi četiri ugla lista, ispravlja perspektivu, uzima veličinu papira koju navedete (`Paper`, ili najbližu standardnu) i `Scale` skice (1 : n), zatim prati linije olovke u linije, lukove i krugove, sa slojem za svaku boju olovke (crna, crvena, plava, zelena). Ako ne može da nađe ivicu papira, uzima celu fotografiju kao list i to kaže. Slova se izostavljaju. Jedan korak poništavanja. Radi na ovom računaru klasičnom obradom slika, bez modela, bez slanja ičega. Pogledajte i komande skeniranih crteža.

### AUTODIM

Alias: `ADIM`. Automatsko kotiranje po pravilima. {{cmd:AUTODIM}} kotira izabrane objekte (ili ceo crtež) prema njihovim nivoima i vertikalnim ivicama: lanac kota duž stranica koje izaberete (`Sides`), jedna ukupna kota izvan njega, širina svakog otvora (razmak između kolinearnih linija zida), prečnik za svaku veličinu rupe, i sa `Grid` razmak između linija mreže. Kota koja već postoji ne pravi se ponovo. Jedan korak poništavanja. Računa se na ovom računaru pravilima, bez modela.

### GRIDMOVE

Alias: `GM`. Pomeranje linije mreže nosi skup. {{cmd:GRIDMOVE}} pomera liniju mreže (liniju na sloju čiji naziv kaže grid ili axis) i ono što na njoj visi: zidovi sa krajem na liniji se razvlače da je prate, zidovi duž nje se pomeraju celi, kolone (reference blokova i krugovi na liniji), njen mehurić i oznaka se pomeraju, a kote čije su tačke na njoj mere novi razmak. Zadajte dve tačke (broji se samo deo preko linije) ili `Distance`. Jedan korak poništavanja vraća sve. Radi pravilima na ovom računaru.

### DETAILS

Alias: `DET`. Detalji koji nalaze vas. {{cmd:DETAILS}} čuva detalje vaše firme: `Add` stavlja blok ovog crteža na spisak, `List` i `Remove` ga upravljaju, a `Find` ih rangira za ono što je izabrano (ili za ono što ste poslednje nacrtali) prema rečima na njegovim slojevima, nazivima blokova, obrascima šrafura i napomenama, u poređenju sa nazivom i napomenama svakog detalja, pa nadoknadni detalj za nadvratnik nalazi vaš detalj za odvodnjavanje parapeta. Izaberite broj i tačku da ga postavite. Sa uključenim `Hint` (takođe Podešavanja › CadCraft), izbor nečega što detalj prepoznaje ispisuje jedan red u statusnoj traci. Spisak se čuva u ovom pregledaču, na ovom računaru, i taj spisak se pretražuje. `Share` ga stavlja i u vašu fasciklu Dokumenti (`.cadcraft/firm-details.json`, sa crtežom svakog bloka): `Pull` dodaje ono što vaš tim ima a vi nemate, `Push` dodaje ono što vi imate a oni nemaju, `Both` radi oba, i ništa se nikad ne uklanja ni sa jedne strane. Prvo otvorite fasciklu Dokumenti ({{cmd:DOCUMENTS}}); kad je ta fascikla fascikla plana Team Cloud, ceo tim deli jedan spisak. Stavka detalja u panelu Biblioteka ima dugme **Dodaj u detalje moje firme** koje je stavlja na isti spisak. Radi na ovom računaru rečima, bez modela.

### SKETCHFIX

Alias: `SKF`. Skice olovkom postaju precizna geometrija. Pritisnite i prevucite jedan slobodan potez u jednom trenutku (olovka, miš ili prst), zatim Enter. Svaki potez se čita kao linija, krug, luk, pravougaonik ili polilinija: skoro vodoravne i uspravne linije postaju tačno vodoravne i uspravne, zatvoren okrugao potez postaje krug, zatvoren potez sa četiri prava ugla pravougaonik, a krajevi poteza se privlače zajedno i na krajeve koji već postoje u crtežu. Jedan korak poništavanja. Radi pravilima na ovom računaru, bez modela.

### SCANATTACH i komande skeniranih crteža

Aliasi: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nema. Rade nad slikom, jedan korak poništavanja svaka. {{cmd:SCANATTACH}} umeće PNG, JPEG, TIFF (jednu stranicu ili sve) ili PDF stranicu koja je slika. {{cmd:SCANSCALE}} razmerava list iz dve izabrane tačke i stvarnog rastojanja. {{cmd:SCANALIGN}} pomera i okreće ga na dve tačke (`Scale the sheet to fit` Da/Ne). {{cmd:SCANDESKEW}} prikazuje ugao dugih linija lista i okreće list kad kažete `Accept` ili zadate `Value`. {{cmd:SCANCLEAN}} ga pretvara u crno-beli (`Threshold` Auto/Adaptive/Level, `Specks`) i `Run`. {{cmd:SCANCROP}} zadržava prozor. {{cmd:SCANERASE}} briše `Rectangle`, `Polygon` ili `Lasso`. {{cmd:SCANTRACE}} prati linije i lukove na novi sloj (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) i javlja šta je našao i šta je ostavio kao raster. {{cmd:SCANINFO}} navodi originalnu datoteku i korake. {{cmd:RASTERSNAP}} uključuje ili isključuje hvatanje za linije skeniranih listova. Pogledajte temu Skenirani crteži i praćenje.

### REGEN i REGENALL

Aliasi: `RE` za {{cmd:REGEN}}, `REA` za {{cmd:REGENALL}}. Ponovo gradi ono što je nacrtano na ekranu iz crteža: {{cmd:REGEN}} karticu koju gledate (na listu, i model koji njegovi prozori prikazuju), {{cmd:REGENALL}} svaku karticu, svako okno podeljenog ekrana i svaki otvoreni crtež. Koristite ih kad slika izgleda zastarelo posle skriptovane ili vrlo velike promene, ili kad je crtež menjao asistent; sam crtež se ne dira, pa nema šta da se poništi.

### NAMEDVIEW

Aliasi: `NV`, `VIEWS`. `Unesi opciju [?/Vrati/Sačuvaj/Prozor/Izbriši] <Vrati>`, zatim naziv pogleda. `S` čuva pogled na ekranu, `W` prozor koji birate, `R` prikazuje sačuvani pogled, `D` briše jedan, `?` navodi poglede ove kartice. Čuvanje pod postojećim imenom ga zamenjuje; svaka promena je jedan korak poništavanja. Pogledi pripadaju kartici na kojoj su sačuvani. Datoteke DWG i DXF ih čuvaju (tabela VIEW); pogledi lista se vraćaju na prvi list, jer datoteka ne kaže kom listu pripadaju.

### UNDO i REDO

Aliasi: `U` za {{cmd:UNDO}}; {{cmd:REDO}} nema. Takođe {{key:Mod+Z}} i {{key:Mod+Y}}.

### LAYER

Aliasi: `LA`. Skače na panel {{ui:Slojevi}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Unesi tip linije za nove objekte` — `ByLayer` (po sloju), `ByBlock` (po bloku) ili naziv (`?` navodi ih: Continuous, one crteža, i DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE sa njihovim veličinama `2` (polovina) i `X2` (dvostruko)). {{cmd:LWEIGHT}} (`LW`): debljina linije za nove objekte u mm, ili `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): razmera tipova linija crteža (može se poništiti). {{cmd:LWDISPLAY}} (`LWT`): `Prikaži debljine linija [ON/OFF]` — isto što i dugme {{ui:LWT}} u statusnoj traci. Pogledajte [Debljine linija i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Unesi vrstu objekta za preimenovanje [LAyer (sloj)/Block (blok)]`, `Unesi stari naziv`, zatim novi naziv; objekti ili reference prate. {{cmd:LAYMRG}}: `Izaberi objekat na sloju za spajanje ili [Naziv]` do {{key:Enter}}, zatim `Izaberi objekat na ciljnom sloju ili [Naziv]` i `Y`. {{cmd:LAYDEL}}: `Izaberi objekat na sloju za brisanje ili [Naziv]`, zatim `Y`: sloj i svaki objekat na njemu odlaze (ne sloj 0, DEFPOINTS ili tekući sloj). Jedan korak poništavanja za svaku. Pogledajte [Organizovanje crteža slojevima](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Slojevi biranjem objekata; takođe u meniju {{ui:Alatke}} panela {{ui:Slojevi}}. {{cmd:LAYISO}}: `Izaberi objekte na sloju(ima) koji se izoluju`, zatim {{key:Enter}}: svi ostali slojevi se isključuju. {{cmd:LAYUNISO}} ih ponovo uključuje. {{cmd:LAYOFF}} i {{cmd:LAYFRZ}}: `Izaberi objekat na sloju koji se isključuje` (ili zamrzava), uvek iznova; `U` vraća poslednji, {{key:Enter}} završava. {{cmd:LAYMCUR}}: `Izaberi objekat čiji sloj postaje tekući`. {{cmd:LAYON}} uključuje svaki sloj, {{cmd:LAYTHW}} odmrzava svaki sloj. Svaka komanda je jedan korak poništavanja. Pogledajte [Organizovanje crteža slojevima](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} pokreće prazan crtež, a {{cmd:OPEN}} otvara DWG ili DXF, svaki u svojoj kartici preko crteža (nekorišćen novi crtež se koristi umesto nove kartice). Zatvaranje kartice sa nesačuvanim promenama prvo pita. Pogledajte [Podela ekrana](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, takođe {{key:Mod+S}}) preuzima kopiju u formatu crteža: DWG ako je otvoren iz DWG-a, DXF ako iz DXF-a. Novi crtež koristi format poslednji izabran u Sačuvaj kao u ovom pregledaču, inače DWG.

{{cmd:SAVEAS}} (takođe {{key:Mod+Shift+S}}) otvara dijalog {{ui:Sačuvaj kopiju kao}}: izaberite {{ui:DWG}} (i njegovu {{ui:Verziju}}), {{ui:DXF R12}} ili {{ui:DXF 2000}}, zatim {{ui:Sačuvaj}}. Izbor ostaje za ovaj crtež i za nove crteže u ovom pregledaču.

{{cmd:DXFOUT}} uvek preuzima kopiju DXF R12, bez menjanja formata koji koristi {{cmd:SAVE}}.

Pogledajte [Datoteke: šta se otvara, šta se čuva](topic:files#saving).

### TOUR

Aliasi: `TUTORIAL`. Ponovo pokreće vodič kroz prvi crtež od šest koraka. Pogledajte [Početak rada](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasi: `TBDOCK`. `Položaj trake sa alatkama [Vrh/Dno/Levo/Desno]`. Pogledajte [Podešavanja](topic:settings#toolbar-position).

### COMMANDLINE

Aliasi: `CMDLINE`. `Komandna linija [Pričvršćena na dnu/Lebdi/Jedan red/Prikazani redovi istorije/Istorija komandi (F2)]`: pričvršćuje ili pušta da lebdi komandnu liniju, pravi je u jednom redu, pita koliko redova istorije da prikaže (0 do 12), ili otvara istoriju. Pogledajte [Podešavanja](topic:settings#command-line).

### TOPAREA

`Gornja oblast [Standardna/Kompaktna]`: trake iznad crteža kakve su bile, ili kompaktne. Pogledajte [Podešavanja](topic:settings#top-area).

### POLARANG

`Unesi korak polarnog ugla u stepenima <90>`: korak po kome se {{ui:Polarno}} praćenje poredi (više od 0, do 180). Čuva se u ovom pregledaču.

### UNITS

Aliasi: `UN`. Kako se dužine pišu i unose.

- `Unesi format dužine [Naučni/Decimalni/Inženjerski/Arhitektonski/Razlomački] <tekući>`
- Arhitektonski i Razlomački: `Unesi imenilac najmanjeg razlomka za prikaz (1, 2, 4, 8, 16, 32, 64, 128 ili 256)`. Ostali: `Unesi broj decimalnih mesta (0 do 8)`.

Nove kote ga prate. Jedan korak poništavanja. Isto kao {{ui:Format dužine}} i {{ui:Preciznost}} u {{ui:Trenutna podešavanja}}; pogledajte [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasi: `GDS`. Prikazuje raspored integrisanog kola (GDSII datoteka toka): laboratorijska proba, samo za pregled i merenje.

- Birač datoteka uzima datoteku `.gds`; sa više gornjih ćelija, `Unesi gornju ćeliju za crtanje`.
- Svaki sloj i tip podataka postaje sloj crteža (`GDS 1`, `GDS 2/5`), reference i nizovi se postavljaju ravno, u korisničkoj jedinici datoteke (obično mikrometri). Jedan korak poništavanja. Ništa se ne simulira ni proverava, i datoteka se ne upisuje nazad.

### DIAGRAM

Aliasi: `TEXTDIAGRAM`, `T2D`. Dijagram iz teksta.

- Okvir uzima tekst (ili jedan red sa `;` između iskaza u komandnoj liniji): Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili spisak od-do.
- `Zadaj gornji levi ugao dijagrama`, zatim `Zadaj visinu teksta`.

Blokovi i veze su obični objekti na sloju `Diagram`, izabrani kad se završi. Jedan korak poništavanja. Pogledajte [Crtanje dijagrama iz teksta](topic:text-to-diagram).

### OLELIST

Aliasi: `OLES`. OLE objekti koje DWG nosi, a CadCraft ih ne može sam postaviti.

- Navodi svaki: broj, tip, veličinu, da li je sačuvao sliku.
- `Unesi opciju [Postavi (P)/Izlaz (X)] <Izlaz>`: Postavi traži broj, donji levi ugao i širinu, i crta okvir sa slikom. Jedan korak poništavanja; sačuvani objekat se ne menja. Pogledajte [Slike](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasi: `SHX`. Vaši SHX fontovi.

- `Unesi opciju SHX fonta [Fascikla/Datoteke/Spisak/Ukloni/Obrni/Obriši] <Spisak>`

{{ui:Folder}} čita svaki `.shx` u fascikli (CadCraft Studio; ponovo pri svakom pokretanju), {{ui:Files}} uzima izabrane datoteke (pregledač), {{ui:Reverse}} slaže slova jednog fonta poslednje prvo. Stilovi teksta koji navode učitan font crtaju njime. Pogledajte [Crtanje teksta vašim SHX fontovima](topic:shx-fonts).

### LIMITS

Kolika je crtež zamišljen da bude.

- `Zadaj donji levi ugao ili [ON/OFF] <tekući>`: tačka, `ON` ili `OFF`.
- `Zadaj gornji desni ugao <tekući>`.

Mreža popunjava granice, {{cmd:ZOOM}} `All` ih prikazuje, a sa uključenim granicama tačka van njih se odbija (`**Van granica`). Jedan korak poništavanja; čuva se u DWG i DXF. Pogledajte [Postavljanje granica crteža](topic:drawing-limits).

### AUNITS

Aliasi: `ANGUNITS`. Kako se uglovi prikazuju i unose.

- `Unesi format ugla [Decimalni stepeni/Stepeni-minuti-sekunde/Geodetski azimuti] <tekući>`
- `Unesi broj decimalnih mesta (0 do 8)`, ili za ostala dva `Unesi tačnost` (0 stepeni, 2 minuta, 4 sekunde, 5 do 8 decimala sekunde).

Jedan korak poništavanja; čuva se u DWG i DXF. Isto kao {{ui:Format ugla}} u {{ui:Trenutna podešavanja}}. Pogledajte [Unos i prikaz azimuta i uglova](topic:bearings-and-angles).

### APPLOAD

Aliasi: `AP`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Učitaj aplikaciju…}}. Dijalog {{ui:Učitaj aplikacije}}: učitava rutine `.lsp` i datoteke dijaloga `.dcl`, uklanja ih, ponovo učitava iz istorije, i Startup Suite. Komande `(defun c:NAZIV …)` rutine tada rade kao sve druge. Pogledajte [Učitavanje aplikacija](topic:load-applications) i [Pokretanje LISP rutina](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Izmeni skraćenice…}}) otvara vašu datoteku aliasa (redovi `ALIAS, *COMMAND`); {{ui:Sačuvaj}} je primenjuje. {{cmd:REINIT}} je ponovo primenjuje. Pogledajte [Uređivanje aliasa komandi](topic:command-aliases).

### LISPEDIT

Aliasi: `VLIDE`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:LISP uređivač}}. Otvara LISP uređivač, prozor koji ostaje otvoren pored crteža.

- Tekst: brojevi redova, sagovornik zagrade pod kursorom označen (crveno kad nema), {{key:Enter}} uvlači novi red ispod otvorene zagrade, {{key:Tab}} kuca dva razmaka, {{key:Esc}} izlazi iz teksta.
- {{ui:Učitaj u crtež}} ({{key:Ctrl+Shift+Enter}}): čita svaki oblik, kao što {{cmd:APPLOAD}} radi sa datotekom, i pravi njene komande `c:`. Datoteka se pojavljuje u spisku {{cmd:APPLOAD}}.
- {{ui:Pokreni izbor}} ({{key:Ctrl+Enter}}): izvršava izabrane oblike, ili oblik u kome je kursor.
- {{ui:Zaustavi}}: završava rutinu koja se izvršava.
- {{ui:Konzola}}: šta je rutina ispisala, i svaka greška sa njenim redom; kliknite grešku da odete tamo. Tekst se izvršava po jedan oblik najvišeg nivoa, pa je red onaj od oblika, ili unutar njega red koji poziva funkciju koju greška navodi.
- {{ui:Novo}}, {{ui:Otvori}}, {{ui:Sačuvaj}} ({{key:Ctrl+S}}): datoteka `.lsp`. Tekst se takođe čuva u ovom pregledaču, pa zatvaranje prozora ne gubi ga.
- Pored teksta: funkcije koje rutina definiše, one koje poziva a ovaj LISP ih još nema, one koje poziva a nisu definisane u njoj niti ugrađene, i potpuni spiskovi onoga što je ugrađeno i što nije.

Tekst sa zagradom koja se nikad ne zatvara, ili sa niskom koja se nikad ne završava, se ne izvršava: imenuje se red. Nema korak-po-korak debagera, prekidnih tačaka ili prozora za praćenje. Pogledajte [Pokretanje LISP rutina](topic:run-lisp).

### HELP

Aliasi: `?`. Ispisuje svaku komandu, njene aliase i jedan red opisa u istoriji komandne linije. Ne otvara ovu pomoć: za to pritisnite {{key:F1}} ili kliknite {{ui:Pomoć}}.

## Upit za izbor objekata

Na svakom upitu `Izaberi objekte`: kliknite objekte, prevucite prozore (sleva nadesno) i ukrštanja (sdesna nalevo) sa dva klika, ili pritisnite i prevucite lazo ({{key:Space}} dok prevlačite: prozor, ukrštanje, ograda), {{key:Shift}}+klik za uklanjanje, i pritisnite {{key:Enter}} za kraj. Možete ukucati i `ALL` (sve), `L` (poslednji objekat), `P` (Prethodni: ono što je koristila poslednja komanda), `F` (Ograda: objekti koje prelazi linija tačaka; `U` vraća tačku), `W` (Prozor), `C` (Ukrštanje), `R` (režim uklanjanja: izbori skidaju objekte; upit glasi `Ukloni objekte`) i `A` (Dodaj ponovo). `?` navodi ih. Ne prikazuju se u upitu. {{key:Tab}} preko preklapajućih objekata ističe sledeći; kliknite da ga izaberete. Pogledajte [Izbor objekata](topic:select-objects).

### ACCESS

Alias: `AX`. Crtanje bez vida. {{cmd:ACCESS}} uključuje ili isključuje pristupačnost (`On`, `Off`) i menja zvukove hvatanja (`Sound`) i glasovne komande (`Voice`); prvo kaže stanje. Uz uključen pristup, svaka komanda i rezultat se čitaju preko čitača ekrana, a oblast crteža ima tastaturni kursor. Tema pomoći „Crtanje bez vida” ima tastere.

### DESCRIBE

Alias: `DESC`. Kaže šta crtež sadrži: koliko objekata, koje vrste, kolike veličine, koliko slojeva, šta je izabrano. Samo čita; ništa ne menja.

### WHEREAMI

Alias: `WHERE`. Kaže gde je kursor, u jedinicama crteža.

### NEARBY

Kaže šta leži blizu kursora, najbliže prvo, svaki sa svojim rastojanjem i stranom na kojoj je.

### SAYSEL

Kaže šta je izabrano, po jednu rečenicu za objekat (dužina linije, krajevi i ugao; poluprečnik i centar kruga; tekst kako je napisan).

### VOICE

Uključuje ili isključuje izgovorene komande. Prepoznaju se na ovom računaru; gde pregledač to ne može, glas ostaje isključen dok ne izaberete onlajn uslugu pregledača u Podešavanjima.

### TOUCHCROSSHAIR

Alias: `TCX`. Pomereni krstić za crtanje prstom, da vrh prsta ne pokriva tačku koju birate. Dok je uključen, jedan prst na crtežu ne bira: pomera krstić koji stoji iznad prsta i sa jedne strane. Hvatanje objekata i praćenje prate krstić. Podizanje prsta ne bira ništa i ostavlja krstić gde je. Za izbor pritisnite dugme {{ui:Click}} u uglu crteža, ili dodirnite bilo gde na crtežu drugim prstom. Držite {{ui:Click}} dok pomerate drugi prst za prevlačenje (prozor izbora, lazo, ručica). Prst pritisnut i miran, ili dugme {{ui:Enter}}, je Enter. Dva prsta pomeraju i zumiraju kao i ranije. Blizu donje ivice i daleke bočne ivice krstić se približava prstu, pa svaki deo crteža može da se dosegne. Olovka i miš uvek biraju direktno.

{{cmd:TOUCHCROSSHAIR}} kaže stanje i pita `ON`, `OFF`, `Auto` (uključeno samo gde je prst jedini pokazivač, pa je isključeno na računaru sa mišem), `Distance` (koliko je krstić udaljen od prsta, 24 do 240 piksela) ili `Side` (`Left`: gore i levo, za desnu ruku; `Right` za levu; dugmad se pomeraju u drugi ugao). Isti izbori su u Podešavanja › CadCraft, a na uređaju sa ekranom osetljivim na dodir statusna traka ima prekidač {{ui:Pomereni krstić}}. Izbori se čuvaju u ovom pregledaču.

### WHOHAS

Kaže ko ima crtež otvoren. U CadCraft Studiju na računaru, otvaranje DWG ili DXF upisuje malu datoteku zaključavanja pored njega (`Plan.dwg.cclock`: ko, od kada, koja verzija), osvežava je svakog minuta dok je crtež otvoren, i uklanja je kad se crtež zatvori. Otvaranje crteža koji neko drugi ima otvoren kaže ko i od kada, i nudi {{ui:Otvori samo za čitanje}} (Sačuvaj tada traži novi naziv), {{ui:Ipak otvori}} (drugoj osobi se javlja pri sledećem osvežavanju) ili {{ui:Otkaži}}. Čuvanje preko datoteke koju neko drugi ima otvorenu prvo pita. Zaključavanje koje nije osveženo pet minuta smatra se zastarelim: druga kopija je zatvorena bez čuvanja ili je računar u režimu spavanja.

{{cmd:WHOHAS}} pita `Current` (otvoren crtež), `File` (izaberite jedan), `FOlder` (izaberite fasciklu: navodi se svaki crtež u njoj koji je negde otvoren), `Path` (ukucajte pun put) ili `Name` (ime koje drugi vide; vaš naziv naloga kad ste prijavljeni). Studio može da pristupi samo fasciklama koje ste izabrali: za crtež otvoren iz fascikle koja nikad nije izabrana kaže jednom da ne može da zabeleži crtež kao otvoren; `FOlder` bira fasciklu, i zaključavanja tamo rade od tada. Zaključavanje je beleška za ljude, a ne prepreka: drugi program i dalje može da upiše datoteku. U pregledaču nema fascikli u koje bi gledao, pa komanda to kaže.

### OVERKILL

Briše duple objekte i sređuje preklapajuće linije i lukove, za crteže koji stignu puni dupliranih linija. `Izaberi objekte za čišćenje`, {{key:Enter}}, zatim {{key:Enter}} opet da očisti sa prikazanim postavkama, ili prvo promenite jednu:

- `Tolerance`: koliko dve koordinate moraju biti blizu da bi se računale kao iste (0,000001 na početku; 0 znači tačno isto).
- `Ignore`: svojstva koja mogu da se razlikuju između dva inače ista objekta. Ukucajte naziv da ga uključite: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ili `None` / `All`. {{key:Enter}} kad završite.
- `Overlap`: uključeno ili isključeno. Uključeno, linije duž jedne prave koje se preklapaju postaju jedna linija (linija koja leži unutar druge jednostavno se briše), a lukovi jednog kruga koji se preklapaju postaju jedan luk; lukovi koji zatvaraju pun obrt postaju krug, a luk koji leži na krugu se briše.
- `Ends`: uključeno ili isključeno. Uključeno, linije duž jedne prave i lukovi jednog kruga koji se dodiruju samo kraj do kraja postaju jedan komad.

Svaka vrsta objekta se proverava na duplikate: dva objekta su duplikati kad su im geometrija ista u okviru tolerancije, a sloj, boja, tip linije, razmera tipa linije, debljina linije, debljina, providnost i visina se poklapaju (umanjeno za ona koja ignorišete). Linije i otvorene polilinije se poklapaju i kad su nacrtane obrnutim redom. Prvi objekat u redosledu crtanja ostaje i zadržava sopstvena svojstva. Komanda javlja koliko objekata je proverila i obrisala: duplikate, spojene preklapajuće delove, delove spojene kraj do kraja. Jedan {{cmd:UNDO}} sve vraća. Postavke važe dok ne zatvorite prozor crteža.

Ostavlja netaknute: objekte na zaključanim slojevima i skrivene objekte. Ne spaja linije sa visinom (Z) (tačni duplikati njih i dalje nestaju), i ne dira segmente unutar polilinije (ne proređuju se), liniju koja leži na segmentu polilinije, i zatvorenu polilinu nacrtanu obrnutim redom.

### DRAWORDER

Menja koji objekti se crtaju ispred. `Izaberi objekte za promenu redosleda`, {{key:Enter}}, zatim `Iznad objekata`, `Ispod objekata`, `Napred` ili `Pozadi` ({{key:Enter}} = `Pozadi`). `Iznad objekata` i `Ispod objekata` traže referentne objekte: izbor ide odmah ispred najprednijeg od njih, ili odmah iza najzadnjeg. Izabrani objekti zadržavaju međusobni redosled. Jedan korak poništavanja. Redosled se čuva sa crtežom u DWG i DXF, gde je to redosled kojim se objekti upisuju.

Na ekranu CadCraft crta prvo ispunjene oblasti (pune šrafure, široke polilinije, maske), zatim linije, zatim tekst, pa tekst uvek ide preko ispune; redosled crtanja se vidi među ispunjenim objektima i među slikama. Drugi programi koji otvaraju datoteku crtaju svaki objekat sačuvanim redosledom.

### TEXTTOFRONT

Dovodi tekst, kote i pokazne linije ispred svega ostalog u otvorenom prostoru: `Text`, `Dimensions`, `Leaders` ili `All` ({{key:Enter}} = `All`). Jedan korak poništavanja. Kaže to kad ga nema, ili kad je već na prednjem planu.

### HATCHTOBACK

Šalje svaku šrafuru otvorenog prostora iza svega ostalog, pa ispune prestaju da pokrivaju linije i tekst u sačuvanoj datoteci. Bez pitanja. Jedan korak poništavanja.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Prikazuje samo izabrane objekte: sve ostalo u otvorenom prostoru izlazi iz vida do {{cmd:UNISOLATEOBJECTS}}. Za razliku od {{cmd:LAYISO}}, radi nad objektima koje birate, bez obzira na njihove slojeve, i ne menja nijedan sloj. Skriveni objekti se ne crtaju, ne biraju, ne hvataju, ne zumiraju i ne štampaju, a komande koje uzimaju `ALL` ih preskaču. Ono što nacrtate dok su objekti izolovani prikazuje se kao obično.

Ovo važi samo za sesiju: ništa o tome se ne čuva sa crtežom, nije korak poništavanja, a ponovno otvaranje crteža pokazuje sve. Dok su objekti sakriveni, statusna traka prikazuje dugme sa njihovim brojem; kliknite ga da ih ponovo prikažete.

### HIDEOBJECTS

Sakriva izabrane objekte do {{cmd:UNISOLATEOBJECTS}}. Ista pravila kao {{cmd:ISOLATEOBJECTS}}: samo za sesiju, ne čuva se, nije korak poništavanja.

### UNISOLATEOBJECTS

Aliasi: `UNISOLATE`, `UNHIDE`. Ponovo prikazuje svaki objekat sakriven pomoću {{cmd:ISOLATEOBJECTS}} ili {{cmd:HIDEOBJECTS}}, i kaže koliko se vratilo.

### LAYLOCKFADE

Postavlja kako objekti na zaključanim slojevima izgledaju i da li ih klik dostiže. Kaže tekuće stanje, pa prima:

- broj od 0 do 90: iznos izbleđivanja u procentima (50 na početku). 0 isključuje izbleđivanje.
- `ON` ili `OFF`: izbleđivanje uključeno ili isključeno, uz čuvanje iznosa.
- `Pick`, zatim `Yes` ili `No`: može li klik da bira objekte na zaključanim slojevima dok nijedna komanda ne radi? `No` (podrazumevano): ne mogu se birati uopšte. `Yes`: klik ili prozor ih biraju da bi {{ui:Svojstva}} mogla da ih prikaže; i dalje se ne mogu menjati, a sopstveni upit `Izaberi objekte` komande ih nikad ne uzima.

Hvatanje objekata pronalazi objekte na zaključanim slojevima u oba slučaja. Štampa se nikad ne izbleđuje. Oba podešavanja su vaša, a ne crteža, i nalaze se i u {{ui:Podešavanja}} pod {{ui:Zaključani slojevi}}.

### BURST

Razlaže reference blokova i zadržava šta njihovi atributi kažu. `Izaberi reference blokova za razlaganje`, {{key:Enter}}: svaka referenca se zamenjuje objektima bloka, a vrednost svakog vidljivog atributa postaje običan tekst na sopstvenom sloju atributa (atribut na sloju 0 ide na sloj reference, kao ostali objekti bloka na sloju 0). Nevidljivi atributi se odbacuju. Blok unutar bloka ostaje referenca bloka. Jedan korak poništavanja; javlja koliko je referenci razloženo i koliko je vrednosti atributa pretvoreno u tekst.

Odbija povezani crtež po nazivu (prvo ga vežite, ili kopirajte iz njega sa {{cmd:NCOPY}}), i ostavlja druge izabrane objekte netaknute. Za reference blokova {{cmd:EXPLODE}} daje iste objekte; {{cmd:BURST}} uzima samo reference blokova i računa tekst atributa.

### TXT2MTXT

Alias: `T2M`. Spaja jednoredne tekstove u jedan tekst pasusa. `Izaberi jednoredni tekst za spajanje`, {{key:Enter}}, zatim `Pasus` (redovi se spajaju i prelamaju po širini najšireg reda) ili `Lines` (svaki tekst ostaje svoj red); {{key:Enter}} uzima onaj korišćen poslednji. Redovi su poređani odozgo nadole, pa sleva nadesno, duž pravca gornjeg teksta. Pasus visi iz gornjeg levog ugla gornjeg teksta i preuzima njegovu visinu, rotaciju, stil, sloj i boju. Jedan korak poništavanja.

Tekst koji je već tekst pasusa, prazan tekst i drugi objekti u izboru ostaju netaknuti, a komanda kaže koliko ih je.

### NCOPY

Kopira objekte iz reference bloka ili povezanog crteža u crtež, bez razlaganja bilo čega. `Izaberi objekat unutar reference bloka ili povezanog crteža`: objekat najbliži izboru se kopira tamo gde se vidi, bez obzira koliko blokova je duboko; izaberite još, pa {{key:Enter}}. Zatim `Bazna tačka za pomeranje kopija`: {{key:Enter}} ih ostavlja na mestu, ili zadajte baznu tačku i drugu tačku. Cela komanda je jedan korak poništavanja.

Kopija uzima sloj na kome se vidi: objekat na sloju 0 unutar bloka dobija sloj reference u kojoj je sedeo, a boja ByBlock postaje boja te reference. Iz povezanog crteža sloj `Plan|Walls` postaje `Plan$0$Walls` (naziv koji daje veza), napravljen sa bojom, tipom linije i debljinom linije povezanog sloja. Vrednost atributa se kopira kao tekst. Reference blokova na zaključanim slojevima ne mogu se birati.

### FLATTEN

Postavlja visinu (Z) i debljinu izabranih objekata na 0. `Izaberi objekte za izravnavanje`, {{key:Enter}}. Takođe izravnava objekte unutar definicija blokova koje izbor koristi (i blokove unutar njih), pa se svaka referenca na te blokove menja; povezani crteži ostaju kakvi jesu. Jedan korak poništavanja; javlja koliko je objekata promenjeno, i kaže kad nijedan nije imao visinu ili debljinu.

Ono što CadCraft čuva od treće dimenzije u 2D crtežu je: visina na krugovima, lukovima, elipsama, tačkama, tekstu, referencama blokova, šrafurama, pokaznim linijama i polilinijama (njihova kota), visina na svakom kraju linije, i debljina na linijama, krugovima, lukovima, polilinijama, tačkama i tekstu, kako je datoteka imala. {{cmd:FLATTEN}} briše baš te stvari. Ne dira 3D model na kartici 3D, 3D površine ili tela, a objekat nacrtan u nagnutoj ravni već je doveden u ravan crteža kad je datoteka otvorena.

### BREAKLINE

Crta liniju sa simbolom prekida, za pogled koji je skraćen. Kaže trenutnu veličinu i produženje, zatim `Prva tačka linije prekida` (ili `Size` / `Extension` da ih prvo promenite), `Druga tačka` i `Gde stoji simbol prekida`: kliknite duž linije, ili {{key:Enter}} za sredinu. Rezultat je jedna polilinija na tekućem sloju: linija, koja prelazi preko svake tačke za produženje, sa crtom u obliku slova Z visine veličine i upola kraćom.

`Size` i `Extension` se pamte kao vaše postavke (veličina počinje kao dvostruka visina teksta kote puta razmera kote; produženje je polovina veličine). {{key:Enter}} ponavlja komandu.

### AUDIT

Proverava otvoreni crtež da li ima oštećenja i popravlja ga. {{cmd:AUDIT}} gleda svaki objekat u modelu, na listovima i unutar blokova, i tabelu slojeva, i navodi šta je našao po vrsti:

- brojevi koji nisu konačni ili su nerazumno veliki;
- objekti bez veličine: linija bez dužine, krug bez poluprečnika, polilinija sa jednim temenom, tekst bez slova ili visine, referenca bloka sa nultom razmerom;
- objekti na sloju kog crtež nema; reference na blok koji nedostaje; nazivi stilova teksta i kota i nazivi tipova linija koji nisu u crtežu;
- blokovi koji sadrže sami sebe, neposredno ili preko drugih blokova;
- objekti koji dele identifikator, ključ ili datotečni rukovalac;
- kote bez tačaka od kojih se mere, i šrafure čija granica nije zatvorena kontura.

Zatim pita `Popraviti ih? [Da (Y)/Ne (N)]`. `Ne` ne menja ništa. `Da` popravlja sve u jednom koraku poništavanja: ono što se ne može nacrtati se uklanja (loši brojevi, bez veličine, nedostajući blok, pokvarena kota, šrafura bez upotrebljive granice, referenca koja zatvara krug blokova); nedostajući sloj se pravi; nepoznati nazivi stilova i tipova linija vraćaju se na podrazumevane; zajednički ključ se zamenjuje. Ispisuje koliko je objekata uklonjeno, a koliko popravljeno. Isti nalazi se pojavljuju u panelu {{ui:Problemi}}, svaki sa sopstvenim {{ui:Popravi}}.

Ništa ne odbija, ali proverava samo ono što CadCraft sam crta: podaci sačuvani za druge programe (3D tela, OLE objekti) se ne otvaraju.

### RECOVER

Otvara oštećenu DXF ili DWG datoteku. {{cmd:RECOVER}} pita za datoteku, čita ono što može da se pročita umesto da odbije datoteku, navodi šta je preskočio ili pretpostavio, zatim proverava i popravlja crtež kao {{cmd:AUDIT}} sa `Da`.

- DXF: linije koje nisu deo para šifre i vrednosti preskaču se dok se parovi ponovo ne poravnaju; sekcija bez kraja se zatvara; datoteka koja je odsečena čita se do mesta odsecanja; binarna DXF koja je odsečena čita se do svoje poslednje cele vrednosti. Kad sekcija, blok ili objekat i dalje ne može da se pročita, izostavlja se i imenuje, a čitanje ide dalje.
- DWG: objekti koji ne prođu svoje provere ili ne mogu da se dekodiraju se izostavljaju, a izgubljen spisak objekata se ponovo gradi obilaskom podataka o objektima.

Datoteka na disku se ne menja. Oporavljeni crtež se otvara nesačuvan: sačuvajte ga pod novim nazivom. Datoteka iz koje ništa uopšte ne može da se pročita se odbija, sa razlogom.

### LEGACYTEXT

Pretvara tekst ukucan starim 8-bitnim vijetnamskim fontovima u Unicode. Kratka imena `TEXTTOUNICODE` i `VNTEXT`.

Stariji vijetnamski crteži čuvaju tekst kao zapadne znakove koje tek font pretvara u vijetnamski: TCVN3 tekst u ABC fontovima (`.VnTime`, `.VnArial`, i fontovi velikih slova čiji nazivi se završavaju sa `H`), i VNI tekst u VNI fontovima (`VNI-Times`). CadCraft prikazuje takav tekst kako se čita čim se crtež otvori, po fontu njegovog stila teksta, objekta, ili dela unutar teksta pasusa; datoteka i dalje čuva stare znakove.

{{cmd:LEGACYTEXT}} kaže koliko je tekstova nađeno u svakom kodiranju i pita `Pretvoriti … u Unicode?`. `Da` prepisuje svaki (model, listovi, blokovi, vrednosti i definicije atributa), i stilovima teksta daje Unicode font (Times New Roman, Arial ili Courier New prema vrsti starog fonta), u jednom koraku poništavanja. Oblikovanje unutar teksta pasusa se zadržava.

Kad nijedan tekst ne koristi poznat font (stil koji je izgubio naziv fonta), pita `Čitaj izabrane tekstove kao [Tcvn3/Vni/None]`: izaberite kodiranje i izaberite tekstove. Tekst koji je već Unicode ostaje netaknut. Tekst prepisanih vrednosti kote i tekst višestruke pokazne linije se ne pretvaraju.
