---
title: Prebaci skice u druge modelere dijelova i iz njih
summary: Napiši makro koji ponovo gradi tvoj crtež kao jednu skicu sa ograničenjima u modeleru dijelova, i otvori skicu izvezenu iz jednog.
keywords: skica, makro, swb, vba, izvoz, modeler dijelova, globalne varijable, jednačine, odnosi, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks nije dostupan tamo gdje se CadCraft gradi, pa nijedan smjer još nije testiran u SolidWorks-u. Ono što CadCraft piše provjerava se samo po strukturi. Provjeri rezultat prije upotrebe.
:::

## Pošalji crtež kao skicu

1. Ograniči i kotiraj crtež (vidi [Ograniči crtež](topic:constraints)).
2. U grupi {{ui:Parametarski}} otvori {{ui:Više}} i izaberi {{ui:Makro za SolidWorks (.swb)}}, ili upiši {{cmd:SWBOUT}}.

   Preuzme se datoteka nazvana po crtežu, koja završava na `.swb`.
3. U SolidWorks-u izaberi **Tools > Macro > Run** i odaberi tu datoteku.

Makro pravi novi dio iz tvog zadanog šablona dijela, otvara skicu na Front Plane i u njoj crta linije, krugove, lukove, tačke i polilinije modela, sa:

- tvojim ograničenjima kao odnosima skice,
- tvojim dimenzionalnim ograničenjima kao kotama istih imena (`d1@Sketch1`),
- tvojim parametrima kao globalnim varijablama,
- svakim izrazom kao jednačinom.

Dio koristi jedinicu dužine crteža. Tekst, blokovi, šrafure, kote i listovi nisu dio skice; historija navodi šta je izostavljeno. Izrazi koji nemaju oblik jednačine (`if`, `min`, `max`, `round`, `%` i nekoliko drugih) zapisuju se kao trenutna vrijednost, a historija kaže koji su. Sve što makro ne može napraviti zapisuje se u dnevničku datoteku pored makroa, a poruka na kraju sumira.

## Otvori skicu iz dijela

1. U SolidWorks-u pokreni CadCraft izvozni makro (preuzmi ga u aplikaciji PartCraft: Datoteka > Izvoz > Izvezi makro za vraćanje dijelova) nad dijelom. Zapisuje datoteku `.json` u formatu `cadcraft-sw-export` pored dijela.
2. U CadCraft-u izaberi {{ui:Otvori}} i odaberi tu `.json` datoteku.
3. Kad dio ima više skica, izaberi jednu.

Skica postaje crtež, u milimetrima: njene linije, lukovi, krugovi i tačke, njeni odnosi kao ograničenja, njene kote kao dimenzionalna ograničenja sa istim imenima (`D1`, `D2` …), njene globalne varijable kao parametri, a jednačine na njenim kotama kao njihovi izrazi. Historija navodi šta nije preneseno, na primjer odnose koje CadCraft nema. Mjesto skice u dijelu se ne čuva: nacrtana je ravno, kako se vidi na svojoj ravni.
