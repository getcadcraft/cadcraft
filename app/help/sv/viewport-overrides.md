---
title: Klassåsidosättningar i vyport
summary: På ett blad, dölj en klass eller ge den en annan färg, linjetjocklek eller fyllning i endast en vyport; modellen och de andra vyportarna förblir som de är.
keywords: vyport, klassåsidosättning, vyportsåsidosättning, dölj klass i vyport, blad, layout, VPLAYER, plot, Vectorworks
from: c1a2b51f
---

Ett blad visar ofta samma modell mer än en gång: en plan med möblerna och en plan utan dem, eller en belysningsplan där bara lamporna har färg. En klassåsidosättning i vyport ändrar hur en [klass](topic:classes) visas **i endast den vyporten**.

1. Öppna bladet och markera en vyport.
2. Öppna klasspanelen (`CLASSES`) och välj klassen.
3. Under {{ui:Den här vyporten}}, bocka i {{ui:Dölj i den här vyporten}}, eller ange {{ui:Färg här}}, {{ui:Linjetjocklek här}} eller {{ui:Fyllning här}}.

Listan nedan visar varje klass som den här vyporten ändrar. {{ui:Rensa den här vyportens åsidosättningar}} tar bort alla. Varje ändring är ett ångra-steg.

## Vad en åsidosättning ändrar

- **Dölj** döljer klassen och alla klasser under den i den här vyporten.
- **Färg, linjetjocklek och fyllning** ändrar objekten i klassen vars värde inte är satt på själva objektet, det vill säga objekt som tar det från klassen eller från lagret. Ett objekt med egen färg behåller den, precis som med en lageråsidosättning i vyport.

Åsidosättningar syns på skärmen och i utskrifter och PDF-filer, även för ett bladset som publiceras till PDF. De samverkar med vyportens frysta lager och lageråsidosättningar.

Åsidosättningar sparas med ritningen i DWG och DXF (med klasslistan, i blocket `CADCRAFT_CLASSES`) och kommer tillbaka på samma vyport när filen öppnas i CadCraft.
