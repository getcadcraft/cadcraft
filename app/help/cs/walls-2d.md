---
title: Kreslení chytrých stěn, dveří a oken ve 2D
summary: Kreslete stěny jako mnohočáru, spojujte je čistě a vkládejte dveře a okna, které se pohybují se stěnou. Vše ve 2D, bez 3D modelu.
keywords: stěna, stěny, WALL, WA, dveře, DOOR, DR, okno, WINDOW, WN, DELOPENING, chytrá stěna, půdorys, otevírání, závěs, otvor
from: 45845d49
---

Stěny zde jsou 2D kreslicí objekty. Nevytvářejí žádný 3D model, takže půdorys zůstává tak lehký jako výkres čarami. Pro stavební model použijte BimCraft.

## Kreslení stěn

Napište `WALL` (`WA`) nebo zvolte {{ui:Zeď}} v nabídce {{ui:Více}} skupiny {{ui:Kreslení}}, pak klepejte na body jako u mnohočáry. Dokončete stiskem {{key:Enter}}, nebo napište `C`, aby se místnost uzavřela.

- `T` nastaví tloušťku.
- `J` určí, podle čeho se vaše klepnutí řídí: střed stěny, nebo její levá či pravá líc.
- `F` nastaví výplň: žádná, plná nebo šrafa.

Rohy se samy zkosí. Stěna, která končí v rámci tloušťky jiné stěny, se k ní připojí čistým spojem T a stěny, které se kříží, se navzájem otevřou. Spojení se ukládají se stěnami. Obdélníky, mnohoúhelníky, oblouky, rozdělování, zámky a další najdete v „Tvary, řezy, odsazení a zámky 2D stěn“.

## Přidávání dveří a oken

Napište `DOOR` (`DR`) nebo `WINDOW` (`WN`) a klepněte na stěnu. Dveře se otevírají na stranu stěny, na kterou klepnete. `W` nastaví šířku, `Y` typ a `H` stranu závěsu. Pokračujte v klepání, chcete-li umístit další, a dokončete stiskem {{key:Enter}}. Dveře mohou být jednokřídlé, dvoukřídlé, posuvné nebo jako otevřený průchod. Okna mohou být pevná, otevíravá nebo posuvná.

## Úpravy

Vyberte stěnu, abyste viděli její úchyty:

- Koncové úchyty stěnu natahují. Spojené stěny je sledují.
- Prostřední úchyt stěnu posouvá.
- Úchyt na otvoru jej posouvá podél stěny.
- Šipky přepnou závěs a směr otevírání dveří.

Vlastnosti ukazují tloušťku, výplň a každý otvor: typ, šířku, polohu, závěs, směr otevírání, zda je zobrazen otevřený nebo zavřený, a {{ui:Odebrat}}. `DELOPENING` odstraní otvor nejblíže místu, kam klepnete.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` a `ERASE` fungují obvyklým způsobem. Dveře a okna jdou se svou stěnou, spojené stěny si ponechají spojení a jeden krok {{ui:Zpět}} vše vrátí.

## V jiných programech

Každá stěna se ukládá jako běžný blok, takže ji jiné CAD programy zobrazí správně a mohou ji přesouvat, ale nemohou ji upravovat jako stěnu. `EXPLODE` ji rozloží na prosté úsečky a oblouky a přestane být stěnou.
