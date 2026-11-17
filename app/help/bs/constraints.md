---
title: Ograniči crtež
summary: Držite linije vodoravno, krajeve spojene i dimenzije fiksne geometrijskim i dimenzionalnim ograničenjima, pa crtež prati promjenu kad promijenite dimenziju.
keywords: ograničenje, ograničenja, parametarski, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, stepeni slobode, potpuno ograničeno
from: f8f21fa4
---

## Šta ćete napraviti

Ploču čiju širinu mijenjate na jednom mjestu: njene stranice ostaju pod pravim uglom, jedan ugao ostaje na mjestu, a visina ostaje polovina širine.

Ograničenja rade na linijama, polilinijama, krugovima, lukovima i tačkama na kartici {{ui:Model}}. Svako koje dodate je jedan korak poništavanja.

## Nacrtajte i ograničite obris

1. Upišite `REC` i pritisnite {{key:Enter}}. Upišite `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Upišite `AUTOCONSTRAIN` i pritisnite {{key:Enter}}. Upišite `ALL`, {{key:Enter}}, pa još jednom {{key:Enter}}.

   Istorija kaže „4 ograničenja primijenjena“. Uz stranice se pojavljuju mali okviri s **H** i **V**: to su trake ograničenja.
3. Upišite `GCFIX` i pritisnite {{key:Enter}}. Kliknite blizu donjeg lijevog ugla. Pojavljuje se okvir s ⊕: taj ugao ostaje tamo gdje jeste.

`AUTOCONSTRAIN` dodaje ograničenja spajanja tamo gdje se krajevi skoro sastaju, a vodoravna ili vertikalna tamo gdje su linije skoro ravne ili okomite. Upišite `S` na njegov upit da promijenite koliko su blizu (na početku 0.05 jedinica crteža i 1°).

## Dodajte mjere

1. Upišite `DCHORIZONTAL` i pritisnite {{key:Enter}}.
2. Kliknite blizu donjeg lijevog ugla, pa blizu donjeg desnog.
3. Kliknite ispod pravougaonika za liniju kote.
4. Upit prikazuje `Dimension text <d1=100>`. Upišite `width=120` i pritisnite {{key:Enter}}.

   Pravougaonik je sada širok 120, a oznaka glasi `width=120`.
5. Upišite `DCVERTICAL` i pritisnite {{key:Enter}}, upišite `O` i pritisnite {{key:Enter}}, pa kliknite desnu stranicu.
6. Kliknite desno od nje, upišite `width/2` i pritisnite {{key:Enter}}.

   Visina je 60. Oznaka glasi `fx: d1=width/2`: izraz upravlja njome.

Istorija sada kaže da je obris potpuno ograničen. Da promijenite njegovu veličinu, promijenite `width` (vidi [Koristi parametre i jednačine](topic:parameters)), ili dvaput kliknite oznaku `width=120`, upišite novu vrijednost i izaberite {{ui:Primijeni}}.

## Pomjeranje ograničenih objekata

Pomjeranje, rotacija, skaliranje, hvatišta i panel Svojstva sve zadržavaju ograničenja: ono što pomjerite ostaje zadržano, a ostalo prati. Kada ograničenja ne mogu pratiti, izmjena se ne izvršava, a istorija kaže zašto, na primjer: „Nije urađeno: ograničenja drže taj objekat na mjestu.“ Brisanjem objekta brišu se i njegova ograničenja.

## Zrcaljenje i obrezivanje ograničenih objekata

- {{cmd:MIRROR}} kopira ograničenja među objektima koje zrcalite na kopije. Strane (kojom stranom tangenta dodiruje, s koje strane se mjeri razmak) ponovo se računaju za zrcalnu kopiju, a kopirane kote dobijaju vlastita imena, kao i pri lijepljenju. Uz `Erase source objects` `Y`, ograničenja ostaju na zrcalnim objektima. Istorija kaže koliko ih je došlo.
- {{cmd:TRIM}} zadržava ograničenja linije ili luka na onome što ostane: ograničenje na kraju ide dijelu koji još ima taj kraj, pravilo o smjeru ({{ui:Vertikalno}}, {{ui:Horizontalno}}, {{ui:Paralelno}}, {{ui:Normalno}}) važi na svakom dijelu, a kota između dva vanjska kraja i dalje mjeri njih. Ograničenja koja su držala odsječeni dio, ili dužina koju je rez promijenio ({{ui:Jednako}}, ugao luka), nestaju. Obrezani krug zadržava ograničenja centra i poluprečnika. Obrezane polilinije gube svoja.

## Ograničenja

| Naredba | Zadržava |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | linija ili duž vodoravno ili vertikalno (`2P`: dvije tačke vodoravno ili vertikalno) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dvije linije paralelne, pod pravim uglom ili na jednoj pravoj |
| {{cmd:GCCOINCIDENT}} | dvije tačke spojene; `O`: tačka na liniji, krugu ili luku |
| {{cmd:GCTANGENT}} | linija i krug ili luk, ili dva od njih, dodiruju se |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dva kruga ili luka na jednom centru; dvije dužine ili dva poluprečnika jednaka |
| {{cmd:GCSYMMETRIC}} | dvije tačke, linije ili krugovi zrcaljeni preko linije |
| {{cmd:GCFIX}} | tačku (kliknite blizu nje) ili cijeli objekat (`O`) tamo gdje jeste |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | razmak |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | poluprečnik, prečnik, ugao između dvije linije ili ugao luka |

{{cmd:GEOMCONSTRAINT}} i {{cmd:DIMCONSTRAINT}} pitaju koje; {{ui:Ograniči}} i {{ui:Kota}} u grupi {{ui:Parametarski}} ih pokreću, a {{ui:Više}} tamo navodi svako. Gdje kliknete određuje dio: klik blizu kraja, sredine ili centra uzima tu tačku; klik na polilinriju uzima segment ispod njega. Prvi objekat ostaje, a drugi se pomjera da se sastane s njim.

Ograničenje koje je u sukobu s drugima ili ništa ne dodaje jer ga drugi već podrazumijevaju odbija se uz poruku, i ništa se ne pomjera.

## Pogledajte, izaberite i uklonite

- Kliknite okvir u traci ograničenja (ili kvadrat spajanja, ili oznaku kote) da izaberete to ograničenje; istorija ga imenuje. Pritisnite {{key:Delete}} da ga uklonite.
- {{cmd:DELCONSTRAINT}} uklanja sva ograničenja sa objekata koje izaberete.
- {{cmd:CONSTRAINTBAR}}: `S` prikazuje sve trake, `H` ih skriva; prvo izaberite objekte da prikažete ili sakrijete njihove. {{ui:Više}} ima {{ui:Prikaži trake ograničenja}} i {{ui:Sakrij trake ograničenja}}.
- {{cmd:DCDISPLAY}} prikazuje ili skriva dimenzionalna ograničenja. Ona se nikad ne štampaju.
- {{cmd:DCCONVERT}} pretvara kote nacrtane na linijama, krugovima i lukovima u dimenzionalna ograničenja.

:::note
Ako ste koristili AutoCAD-ov parametarski crtež, nazivi naredbi i upiti su isti. Ograničenja i parametri čuvaju se u DWG i DXF datotekama u obliku koji drugi programi ignoriraju; vidi [Datoteke](topic:files#constraints-in-files).
:::
