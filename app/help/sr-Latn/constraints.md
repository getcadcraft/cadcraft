---
title: Ograničavanje crteža
summary: Drži linije vodoravno, krajeve zajedno i mere stalne pomoću geometrijskih i dimenzionalnih veza, pa crtež prati promenu kada promeniš meru.
keywords: veza, veze, parametarski, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, stepeni slobode, potpuno ograničeno
from: f8f21fa4
---

## Šta ćeš napraviti

Ploču čiju širinu menjaš na jednom mestu: njene stranice ostaju pod pravim uglom, jedan ugao ostaje na mestu, a visina ostaje polovina širine.

Veze rade na linijama, polilinijama, krugovima, lukovima i tačkama na kartici {{ui:Model}}. Svaka veza koju dodaš je jedan korak u {{ui:Opozovi}}.

## Nacrtaj i ogranici obris

1. Ukucaj `REC` i pritisni {{key:Enter}}. Ukucaj `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Ukucaj `AUTOCONSTRAIN` i pritisni {{key:Enter}}. Ukucaj `ALL`, {{key:Enter}}, pa još jednom {{key:Enter}}.

   Istorija kaže „4 veze primenjene“. Pored stranica se pojavljuju male kutije sa **H** i **V**: to su trake veza.
3. Ukucaj `GCFIX` i pritisni {{key:Enter}}. Klikni blizu donjeg levog ugla. Pojavljuje se kutija sa ⊕: taj ugao ostaje tu gde jeste.

`AUTOCONSTRAIN` dodaje veze spajanja tamo gde se krajevi skoro sastaju, a vodoravne ili uspravne veze tamo gde su linije skoro ravne ili uspravne. Ukucaj `S` na njegovom upitu da promeniš koliko su blizu (na početku 0,05 jedinica crteža i 1°).

## Dodaj mere

1. Ukucaj `DCHORIZONTAL` i pritisni {{key:Enter}}.
2. Klikni blizu donjeg levog ugla, pa blizu donjeg desnog ugla.
3. Klikni ispod pravougaonika za liniju kote.
4. Upit prikazuje `Dimension text <d1=100>`. Ukucaj `width=120` i pritisni {{key:Enter}}.

   Pravougaonik je sada širok 120, a natpis glasi `width=120`.
5. Ukucaj `DCVERTICAL` i pritisni {{key:Enter}}, ukucaj `O` i pritisni {{key:Enter}}, pa klikni desnu stranicu.
6. Klikni desno od nje, ukucaj `width/2` i pritisni {{key:Enter}}.

   Visina je 60. Natpis glasi `fx: d1=width/2`: izraz upravlja merom.

Istorija sada kaže da je obris potpuno ograničen. Da promeniš veličinu, promeni `width` (vidi [Koristi parametre i jednačine](topic:parameters)) ili dvaput klikni natpis `width=120`, ukucaj novu vrednost i izaberi {{ui:Primeni}}.

## Pomeranje ograničenih objekata

Pomeranje, rotiranje, skaliranje, hvataljke i panel {{ui:Svojstva}} svi čuvaju veze: ono što pomeriš ostaje držano, a ostalo prati. Kada veze ne mogu da prate, izmena se ne izvodi, a istorija kaže zašto, na primer „Nije izvršeno: veze drže taj objekat tu gde je“. Brisanje objekta briše i njegove veze.

## Simetrija i sečenje ograničenih objekata

- {{cmd:MIRROR}} kopira veze među objektima koje simetrišeš na kopije. Strane (kojom stranom tangenta dodiruje, s koje strane se meri rastojanje) ponovo se izračunavaju za simetričnu kopiju, a kopirane kote dobijaju sopstvena imena, kao i kod nalepljivanja. Uz `Erase source objects` `Y`, veze ostaju na simetričnim objektima. Istorija kaže koliko ih je prešlo.
- {{cmd:TRIM}} zadržava veze linije ili luka na onom što ostane: veza na kraju ide na deo koji još ima taj kraj, pravilo o pravcu ({{ui:Vodoravno}}, {{ui:Uspravno}}, {{ui:Paralelno}}, {{ui:Upravno}}) važi na svakom delu, a kota između dva spoljašnja kraja i dalje meri njih. Veze koje su držale odsečeni deo, ili dužinu koju je seče promenilo ({{ui:Jednako}}, ugao luka), nestaju. Isečen krug zadržava veze centra i poluprečnika. Isečene polilinije gube svoje.

## Veze

| Komanda | Zadržava |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | liniju ili duž vodoravno ili uspravno (`2P`: dve tačke vodoravno ili uspravno) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dve linije paralelne, upravne ili na jednoj pravoj |
| {{cmd:GCCOINCIDENT}} | dve tačke zajedno; `O`: tačku na liniji, krugu ili luku |
| {{cmd:GCTANGENT}} | liniju i krug ili luk, ili dva od njih, u dodiru |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dva kruga ili luka na jednom centru; dve dužine ili dva poluprečnika jednaka |
| {{cmd:GCSYMMETRIC}} | dve tačke, linije ili krugove simetrične u odnosu na liniju |
| {{cmd:GCFIX}} | tačku (klikni blizu nje) ili ceo objekat (`O`) tu gde jeste |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | rastojanje |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | poluprečnik, prečnik, ugao između dve linije ili ugao luka |

{{cmd:GEOMCONSTRAINT}} i {{cmd:DIMCONSTRAINT}} pitaju koju vezu želiš; {{ui:Ograniči}} i {{ui:Kota}} u grupi {{ui:Parametarski}} ih pokreću, a {{ui:Više}} tamo navodi svaku. Gde klikneš određuje deo: klik blizu kraja, sredine ili centra uzima tu tačku, a klik na polilniju uzima segment ispod njega. Prvi objekat ostaje, a drugi se pomera da se sretne s njim.

Veza koja je u sukobu s drugima, ili ništa ne dodaje jer ju drugi već podrazumevaju, odbija se uz poruku i ništa se ne pomera.

## Pregled, izbor i uklanjanje

- Klikni kutiju u traci veza (ili kvadrat spajanja, ili natpis kote) da izabereš tu vezu; istorija je imenuje. Pritisni {{key:Delete}} da je ukloniš.
- {{cmd:DELCONSTRAINT}} uklanja svaku vezu sa objekata koje izabereš.
- {{cmd:CONSTRAINTBAR}}: Prikaži (S) prikazuje sve trake, Sakrij (H) ih krije; prvo izaberi objekte da prikažeš ili sakriješ njihove. {{ui:Više}} ima {{ui:Prikaži trake veza}} i {{ui:Sakrij trake veza}}.
- {{cmd:DCDISPLAY}} prikazuje ili krije dimenzionalne veze. Nikada se ne štampaju.
- {{cmd:DCCONVERT}} pretvara kote nacrtane na linijama, krugovima i lukovima u dimenzionalne veze.

:::note
Ako si koristio parametarsko crtanje u AutoCAD-u, nazivi komandi i upiti su isti. Veze i parametri se čuvaju u DWG i DXF datotekama, u obliku koji drugi programi ignorišu; vidi [Datoteke](topic:files#constraints-in-files).
:::
