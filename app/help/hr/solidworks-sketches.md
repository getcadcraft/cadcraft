---
title: Prijenos skica prema drugim modelatorima dijelova i natrag
summary: Napišite makro koji ponovno izgrađuje vaš crtež kao jednu ograničenu skicu u modelatoru dijelova i otvorite skicu izvezenu iz njega.
keywords: skica, makro, swb, vba, izvoz, modelator dijelova, globalne varijable, jednadžbe, relacije, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks nije dostupan tamo gdje se CadCraft izrađuje, pa nijedan smjer još nije testiran u SolidWorksu. Ono što CadCraft zapisuje provjerava se samo po strukturi. Provjerite rezultat prije nego se oslonite na njega.
:::

## Pošaljite crtež kao skicu

1. Ograničite i kotirajte crtež (vidi [Ograničavanje crteža](topic:constraints)).
2. U grupi {{ui:Parametarski}} otvorite {{ui:Više}} i odaberite {{ui:Makro za SolidWorks (.swb)}}, ili upišite {{cmd:SWBOUT}}.

   Datoteka nazvana prema crtežu, koja završava s `.swb`, preuzima se.
3. U SolidWorksu odaberite **Tools > Macro > Run** i odaberite tu datoteku.

Makro izrađuje novi dio iz vašeg zadanog predloška dijela, otvara skicu na Front Plane i u njoj crta linije, kružnice, lukove, točke i polilinije modela, s:

- vašim ograničenjima kao relacijama skice,
- vašim kotnim ograničenjima kao kotama s istim imenima (`d1@Sketch1`),
- vašim vlastitim parametrima kao globalnim varijablama,
- svakim izrazom kao jednadžbom.

Dio koristi jedinicu duljine crteža. Tekst, blokovi, šrafure, kote i listovi nisu dio skice; povijest navodi što je izostavljeno. Izrazi bez oblika jednadžbe (`if`, `min`, `max`, `round`, `%` i nekoliko drugih) zapisuju se kao trenutna vrijednost, a povijest kaže koji su. Sve što makro ne može izraditi zapisuje se u datoteku dnevnika uz makro, a na kraju poruka sažima.

## Otvorite skicu iz dijela

1. U SolidWorksu pokrenite CadCraft makro za izvoz (preuzmite ga u aplikaciji PartCraft: Datoteka > Izvoz > Izvezi makro za vraćanje dijelova) nad dijelom. Uz dio zapisuje datoteku `.json` u formatu `cadcraft-sw-export`.
2. U CadCraftu odaberite {{ui:Otvori}} i odaberite tu `.json` datoteku.
3. Kad dio ima više skica, odaberite jednu.

Skica postaje crtež, u milimetrima: njezine linije, lukovi, kružnice i točke, njezine relacije kao ograničenja, njezine kote kao kotna ograničenja s imenima kakva su bila (`D1`, `D2` …), njezine globalne varijable kao parametri, a jednadžbe na njezinim kotama kao izrazi. Povijest navodi što nije preneseno, poput relacija koje CadCraft nema. Mjesto skice u dijelu se ne čuva: crta se ravno, kako se vidi na njezinoj ravnini.
