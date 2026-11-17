---
title: Premikanje skic v druge programe za modeliranje delov in iz njih
summary: Napišite makro, ki risbo ponovno ustvari kot eno omejeno skico v programu za modeliranje delov, in odprite skico, izvoženo iz njega.
keywords: skica, makro, swb, vba, izvoz, modeler delov, globalne spremenljivke, enačbe, relacije, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks ni na voljo tam, kjer se CadCraft izdeluje, zato še ni preizkušena nobena smer v SolidWorks. Kar CadCraft zapiše, je preverjeno samo glede strukture. Preverite rezultat, preden se nanj zanesete.
:::

## Pošljite risbo kot skico

1. Omejite in kotirajte risbo (glejte [Omejitev risbe](topic:constraints)).
2. V skupini {{ui:Parametrično}} odprite {{ui:Več}} in izberite {{ui:Makro za SolidWorks (.swb)}}, ali vnesite {{cmd:SWBOUT}}.

   Datoteka, poimenovana po risbi in s končnico `.swb`, se prenese.
3. V SolidWorks izberite **Tools > Macro > Run** in izberite to datoteko.

Makro iz privzete predloge dela ustvari nov del, odpre skico na ravnini Front Plane in vanjo nariše črte, krožnice, loke, točke in polilinije modela, pri čemer:

- vaše omejitve ostanejo kot relacije skice,
- vaše kotne omejitve ostanejo kot kote z enakimi imeni (`d1@Sketch1`),
- vaše lastne parametre pretvori v globalne spremenljivke,
- vsak izraz pretvori v enačbo.

Del uporablja dolžinsko enoto risbe. Besedilo, bloki, šrafure, kote in listi niso del skice; zgodovina našteje, kar je bilo izpuščeno. Izrazi brez oblike enačbe tam (`if`, `min`, `max`, `round`, `%` in nekaj drugih) so zapisani kot trenutna vrednost, zgodovina pa pove, kateri. Vse, česar makro ne more ustvariti, se zapiše v dnevniško datoteko poleg makra, na koncu pa se prikaže povzetek.

## Odprite skico iz dela

1. V SolidWorks zaženite izvozni makro CadCraft za del (prenesite ga v aplikaciji PartCraft: File > Export > Export macro to bring parts back). Poleg dela zapiše datoteko `.json` v obliki `cadcraft-sw-export`.
2. V CadCraft izberite {{ui:Odpri}} in izberite to datoteko `.json`.
3. Če ima del več skic, izberite eno.

Skica postane risba v milimetrih: njene črte, loki, krožnice in točke, njene relacije kot omejitve, njene kote kot kotne omejitve z imeni, kakršna so bila (`D1`, `D2` …), njene globalne spremenljivke kot parametri, enačbe na njenih kotah pa kot njihovi izrazi. Zgodovina našteje, kar ni bilo preneseno, na primer relacije, ki jih CadCraft nima. Položaj skice v delu se ne ohrani: nariše se ravno, kot je videti na svoji ravnini.
