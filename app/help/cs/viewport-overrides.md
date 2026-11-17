---
title: Přepsání tříd výřezu
summary: Na listu skryjte třídu nebo jí v jediném výřezu dejte jinou barvu, tloušťku čáry nebo výplň; model a ostatní výřezy zůstanou beze změny.
keywords: výřez, přepsání třídy, přepsání výřezu, skrýt třídu ve výřezu, list, rozvržení, VPLAYER, vykreslit, Vectorworks
from: c1a2b51f
---

List často zobrazuje stejný model víckrát: půdorys s nábytkem a půdorys bez něj, nebo plán osvětlení, kde jsou barevná jen svítidla. Přepsání třídy výřezu změní, jak se jedna [třída](topic:classes) zobrazuje **jen v tomto výřezu**.

1. Otevřete list a vyberte jeden výřez.
2. Otevřete panel Třídy (`CLASSES`) a vyberte třídu.
3. Pod {{ui:Tento výřez}} zaškrtněte {{ui:Skrýt v tomto výřezu}}, nebo nastavte {{ui:Barva zde}}, {{ui:Tloušťka čáry zde}} nebo {{ui:Výplň zde}}.

Seznam níže ukazuje každou třídu, kterou tento výřez mění. {{ui:Smazat přepsání tohoto výřezu}} je všechny zruší. Každá změna je jeden krok zpět.

## Co přepsání mění

- **Skrýt** skryje třídu a každou třídu pod ní v tomto výřezu.
- **Barva, tloušťka čáry a výplň** mění objekty třídy, jejichž hodnota není nastavena na samotném objektu, tedy objekty, které ji převezmou od třídy nebo vrstvy. Objekt s vlastní barvou si ji ponechá, stejně jako u přepsání vrstvy výřezu.

Přepsání se zobrazí na obrazovce i ve vykreslených výkresech a PDF, včetně sady listů publikované do PDF. Fungují spolu se zamrazenými vrstvami výřezu a přepsáními vrstev.

Přepsání se ukládají s výkresem do DWG a DXF (se seznamem tříd v bloku `CADCRAFT_CLASSES`) a při otevření souboru v CadCraft se vrátí na stejný výřez.
