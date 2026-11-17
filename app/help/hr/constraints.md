---
title: Ograničavanje crteža
summary: Držite linije vodoravnima, krajeve spojenima i veličine fiksnima geometrijskim i kotnim ograničenjima te pustite crtež da slijedi kad promijenite neku veličinu.
keywords: ograničenje, ograničenja, parametarski, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, stupanj slobode, potpuno ograničeno
from: f8f21fa4
---

## Što ćete izraditi

Ploču čiju širinu mijenjate na jednom mjestu: njezine stranice ostaju pod pravim kutom, jedan kut ostaje na mjestu, a visina joj ostaje polovica širine.

Ograničenja djeluju na linije, polilinije, kružnice, lukove i točke na kartici {{ui:Model}}. Svako ograničenje koje dodate jedan je korak poništavanja.

## Nacrtajte i ograničite obris

1. Upišite `REC` i pritisnite {{key:Enter}}. Upišite `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Upišite `AUTOCONSTRAIN` i pritisnite {{key:Enter}}. Upišite `ALL`, {{key:Enter}}, zatim opet {{key:Enter}}.

   Povijest kaže da je primijenjeno 4 ograničenja. Uz stranice se pojavljuju male kućice s **H** i **V**: to su trake ograničenja.
3. Upišite `GCFIX` i pritisnite {{key:Enter}}. Kliknite blizu donjeg lijevog kuta. Pojavljuje se kućica s ⊕: taj kut ostaje tamo gdje jest.

`AUTOCONSTRAIN` dodaje podudarna ograničenja tamo gdje se krajevi gotovo spajaju, a vodoravna ili okomita tamo gdje su linije gotovo vodoravne ili okomite. Upišite `S` na njegov upit da promijenite koliko su blizu (u početku 0,05 jedinica crteža i 1°).

## Dodajte mjere

1. Upišite `DCHORIZONTAL` i pritisnite {{key:Enter}}.
2. Kliknite blizu donjeg lijevog kuta, zatim blizu donjeg desnog kuta.
3. Kliknite ispod pravokutnika za kotnu liniju.
4. Upit prikazuje `Dimension text <d1=100>`. Upišite `width=120` i pritisnite {{key:Enter}}.

   Pravokutnik je sada širok 120, a oznaka glasi `width=120`.
5. Upišite `DCVERTICAL` i pritisnite {{key:Enter}}, upišite `O` i pritisnite {{key:Enter}}, zatim kliknite desnu stranicu.
6. Kliknite desno od nje, upišite `width/2` i pritisnite {{key:Enter}}.

   Visina je 60. Oznaka glasi `fx: d1=width/2`: izraz njome upravlja.

Povijest sada kaže da je obris potpuno ograničen. Da promijenite njegovu veličinu, promijenite `width` (vidi [Upotreba parametara i jednadžbi](topic:parameters)) ili dvaput kliknite oznaku `width=120`, upišite novu vrijednost i odaberite {{ui:Primijeni}}.

## Pomicanje ograničenih objekata

Pomicanje, rotiranje, skaliranje, ručke i panel Svojstva sve čuvaju ograničenja: ono što pomaknete drži se, a ostalo slijedi. Kad ograničenja ne mogu slijediti, izmjena se ne izvede i povijest kaže zašto, na primjer „Nije izvršeno: ograničenja drže taj objekt na mjestu“. Brisanje objekta uklanja i njegova ograničenja.

## Zrcaljenje i skraćivanje ograničenih objekata

- {{cmd:MIRROR}} kopira ograničenja među objektima koje zrcalite na kopije. Strane (kojom stranom tangenta dodiruje, s koje strane se mjeri udaljenost) ponovno se izračunavaju za zrcalnu kopiju, a kopirane kote dobivaju vlastite nazive, kao i kod lijepljenja. S `Erase source objects` `Y`, ograničenja ostaju na zrcaljenim objektima. Povijest kaže koliko ih je došlo.
- {{cmd:TRIM}} zadržava ograničenja linije ili luka na onome što ostane: ograničenje na kraju ide dijelu koji još ima taj kraj, pravilo o smjeru ({{ui:Horizontalno}}, {{ui:Vertikalno}}, {{ui:Paralelno}}, {{ui:Okomito}}) vrijedi za svaki dio, a kota između dva vanjska kraja i dalje mjeri njih. Ograničenja koja su držala odrezani dio ili duljinu koju rez promijeni ({{ui:Jednako}}, raspon luka) nestaju. Skraćena kružnica zadržava svoja ograničenja središta i radijusa. Skraćene polilinije gube svoja.

## Ograničenja

| Naredba | Čuva |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | liniju ili segment vodoravno ili okomito (`2P`: dvije točke vodoravno ili okomito) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dvije linije paralelne, pod pravim kutom ili na jednom pravcu |
| {{cmd:GCCOINCIDENT}} | dvije točke zajedno; `O`: točku na liniji, kružnici ili luku |
| {{cmd:GCTANGENT}} | liniju i kružnicu ili luk, ili dva od njih, koji se dodiruju |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dvije kružnice ili luka na jednom središtu; dvije duljine ili dva radijusa jednaka |
| {{cmd:GCSYMMETRIC}} | dvije točke, linije ili kružnice zrcaljene preko linije |
| {{cmd:GCFIX}} | točku (kliknite blizu nje) ili cijeli objekt (`O`) tamo gdje jest |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | udaljenost |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | radijus, promjer, kut između dviju linija ili kut luka |

{{cmd:GEOMCONSTRAINT}} i {{cmd:DIMCONSTRAINT}} pitaju koje; {{ui:Ograniči}} i {{ui:Kota}} u grupi {{ui:Parametarski}} ih pokreću, a {{ui:Više}} ispod njih nabraja svako. Mjesto klika određuje dio: klik blizu kraja, sredine ili središta uzima tu točku; klik na poliliniju uzima segment ispod njega. Prvi objekt ostaje, a drugi se pomiče da se sastane s njim.

Ograničenje koje je u sukobu s drugima ili ništa ne dodaje jer ga drugi već impliciraju odbija se uz poruku i ništa se ne pomiče.

## Pregled, odabir i uklanjanje

- Kliknite kućicu u traci ograničenja (ili podudarni kvadratić, ili oznaku kote) da odaberete ograničenje; povijest ga imenuje. Pritisnite {{key:Delete}} da ga uklonite.
- {{cmd:DELCONSTRAINT}} uklanja sva ograničenja s objekata koje odaberete.
- {{cmd:CONSTRAINTBAR}}: `S` prikazuje sve trake, `H` ih sakriva; prvo odaberite objekte da prikažete ili sakrijete njihove. {{ui:Više}} ima {{ui:Prikaži trake ograničenja}} i {{ui:Sakrij trake ograničenja}}.
- {{cmd:DCDISPLAY}} prikazuje ili sakriva kotna ograničenja. Ona se nikad ne ispisuju.
- {{cmd:DCCONVERT}} pretvara kote nacrtane na linijama, kružnicama i lukovima u kotna ograničenja.

:::note
Ako ste koristili parametarsko crtanje u AutoCAD-u, nazivi naredbi i upiti su isti. Ograničenja i parametri spremaju se u DWG i DXF datoteke u obliku koji drugi programi ignoriraju; vidi [Datoteke](topic:files#constraints-in-files).
:::
