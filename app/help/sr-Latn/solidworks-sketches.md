---
title: Prebacivanje skica ka drugim modelerima delova i iz njih
summary: Napiši makro koji ponovo pravi tvoj crtež kao jednu skicu sa ograničenjima u modeleru delova, i otvori skicu izvezenu iz jednog takvog modelera.
keywords: skica, makro, swb, vba, izvoz, modeler delova, globalne promenljive, jednačine, relacije, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks nije dostupan tamo gde se CadCraft pravi, pa nijedan smer još nije testiran u SolidWorks-u. Ono što CadCraft piše proverava se samo po strukturi. Proveri rezultat pre nego što se na njega osloniš.
:::

## Pošalji crtež kao skicu

1. Ograniči i kotiraj crtež (vidi [Ograniči crtež](topic:constraints)).
2. U grupi {{ui:Parametric}} otvori {{ui:More}} i izaberi {{ui:Macro for SolidWorks (.swb)}}, ili ukucaj {{cmd:SWBOUT}}.

   Preuzima se fajl sa imenom po crtežu, koji se završava sa `.swb`.
3. U SolidWorks-u izaberi **Tools > Macro > Run** i izaberi taj fajl.

Makro pravi novi deo iz svog podrazumevanog šablona dela, otvara skicu na ravni Front Plane i u njoj crta linije, krugove, lukove, tačke i polilinije modela, sa:

- tvojim ograničenjima kao relacijama skice,
- tvojim dimenzionim ograničenjima kao kotama sa istim imenima (`d1@Sketch1`),
- tvojim sopstvenim parametrima kao globalnim promenljivama,
- svakim izrazom kao jednačinom.

Deo koristi jedinicu dužine crteža. Tekst, blokovi, šrafure, kote i listovi nisu deo skice; istorija navodi šta je ostavljeno. Izrazi koji nemaju oblik jednačine tamo (`if`, `min`, `max`, `round`, `%` i nekoliko drugih) upisuju se kao trenutna vrednost, a istorija kaže koji. Sve što makro ne može da napravi upisuje se u fajl dnevnika pored makroa, a poruka na kraju sumira.

## Otvori skicu iz dela

1. U SolidWorks-u pokreni CadCraft makro za izvoz nad delom (preuzmi ga u aplikaciji PartCraft: File > Export > Export macro to bring parts back). On upisuje `.json` fajl u formatu `cadcraft-sw-export` pored dela.
2. U CadCraft-u izaberi {{ui:Open}} i izaberi taj `.json` fajl.
3. Kada deo ima više skica, izaberi jednu.

Skica postaje crtež, u milimetrima: njene linije, lukovi, krugovi i tačke, njene relacije kao ograničenja, njene dimenzije kao dimenziona ograničenja sa imenima kakva su bila (`D1`, `D2` …), njene globalne promenljive kao parametri, a jednačine na njenim dimenzijama kao izrazi. Istorija navodi šta nije preneseno, na primer relacije koje CadCraft nema. Gde skica stoji u delu se ne čuva: crta se ravno, onako kako se vidi na svojoj ravni.
