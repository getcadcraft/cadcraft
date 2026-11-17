---
title: Spliny a mnohočáry: SPLINE, SPLINEDIT, PEDIT
summary: Nakreslete hladkou křivku procházející body nebo z řídicího mnohoúhelníku, upravte její body proložení a řídicí body a upravujte mnohočáry (spojit, uzavřít, šířka, proložit, spline, odzakřivit) nebo převeďte spline na mnohočáru.
keywords: spline, splinedit, spl, spe, pedit, pe, body proložení, řídicí body, váhy, nurbs, úprava mnohočáry, spojit, proložení křivky, odzakřivit, převést na mnohočáru, přesnost, tečna, křivka, tolerance proložení
from: d31f72d8
---

## Co vytvoříte

Křivku procházející pěti body, pak stejnou křivku upravenou třemi způsoby a mnohočáru sestavenou ze tří úseček.

## Nakreslete spline procházející body

1. Napište `SPL` a stiskněte {{key:Enter}}.
2. Klikněte nebo napište body, kterými má křivka procházet: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Za posledním stiskněte {{key:Enter}}.
3. {{ui:Počáteční tečna}}: klikněte na bod, směrem k němuž má křivka vycházet, nebo stiskněte {{key:Enter}}, ať to rozhodne program. Totéž proveďte pro koncovou tečnu.

Křivka prochází každým bodem. Místo {{key:Enter}} napište `C`, aby se uzavřela (křivka se vrátí k prvnímu bodu). {{key:U}} (`Zpět`) vrátí poslední bod, dokud kreslíte.

### Nakreslete z řídicího mnohoúhelníku

Na prvním řádku napište `M`, pak `C` (Řídicí vrcholy) a stupeň od 1 do 5 (obvykle 3). Body, které vyberete, jsou nyní rohy mnohoúhelníku, který křivku k sobě přitahuje; křivka začíná v prvním a končí v posledním. Uzavřená křivka se obtáčí dokola, bez rohu ve spoji.

### Převeďte mnohočáru na spline

Na prvním řádku napište `O` (Objekt) a vyberte mnohočáry nebo úsečky. Stanou se splinem procházejícím jejich vrcholy; původní objekty zaniknou.

## Úprava splinu

Vyberte jej a napište `SPE` (nebo napište `SPE` a klikněte na něj). Úchyty ukazují body proložení (nebo řídicí body splinu, který je nemá): přetažením jednoho změníte tvar křivky. Na výzvu:

- **Data proložení** (spline nakreslený body): `A` přidá bod proložení (klikněte, kam), `D` smaže jeden (klikněte blízko něj), `M` přesune jeden (klikněte blízko něj a pak na jeho nové místo), `T` nastaví koncové tečny, `P` odstraní body proložení, takže se spline od té chvíle upravuje svými řídicími body.
- **Úprava vrcholu**: `A` přidá řídicí bod bez změny křivky, `M` přesune jeden, `W` mu dá **váhu** (nad 1 přitáhne křivku blíž k sobě, pod 1 ji pustí dál).
- **Otevřít** nebo **Uzavřít**, a **Obrátit** (křivka poběží opačným směrem).
- **Převést na mnohočáru** (`P`): spline se změní na mnohočáru; přesnost udává, na kolik úseček se rozdělí každý úsek (obvykle 10).
- **Zpět (U)** vrátí poslední změnu; **Ukončit (X)** ukončí příkaz.

{{ui:Vlastnosti}} ukazuje stupeň splinu, kolik má bodů proložení a řídicích bodů, jeho délku, a umožňuje jej otevřít nebo uzavřít.

## Úprava mnohočáry

Vyberte mnohočáru a napište `PE`. Úsečka, oblouk nebo spline, který vyberete, se nejdříve nabídne jako mnohočára k převodu (spline vyžaduje přesnost).

- **Uzavřít** / **Otevřít** spojí nebo oddělí konce.
- **Spojit** připojí úsečky, oblouky a mnohočáry, jejichž konce navazují na konec mnohočáry. `Fuzz distance` je, jak daleko od sebe mohou být konce a stále se spojit (0 znamená, že se musí přesně setkat).
- **Šířka** dá celé mnohočáře jednu šířku (0 ji odstraní).
- **Proložit** nahradí mnohočáru hladkou křivkou procházející jejími vrcholy; **Spline** kubickým B-splinem, který je sleduje (začíná a končí v prvním a posledním vrcholu a ostatní drží blízko). Obě se stanou mnohočárou z krátkých úseček, ale původní rohy zůstanou zachovány, takže je **Odzakřivit** vrátí.
- **Generování typu čáry** určí, zda čárkovaný typ čáry pokračuje po celé mnohočáře, nebo začíná znovu u každého vrcholu.
- **Obrátit** změní pořadí jejích vrcholů. **Více** (`M` na prvním řádku) upraví několik mnohočar se stejnými volbami.

Úprava vrcholů mnohočáry v {{ui:Vlastnosti}} nebo pomocí úchytů zůstane beze změny: PEDIT nemá editor vrcholů.

## V souborech

DWG a DXF 2000 uchovají spline jako spline: stupeň, řídicí body, uzly, váhy, body proložení a tečny. Spline, který otevřete a nezměníte, se zapíše zpět přesně tak, jak přišel. DXF R12 spline nezná: uloží se jako mnohočára po křivce a historie uvede, kolik jich bylo.

Odsazení, oříznutí, prodloužení, zaoblení, přerušení a spojení na splinech nefungují. Spline rozložte příkazem {{cmd:EXPLODE}} nebo jej upravte příkazem {{cmd:PEDIT}}, abyste získali mnohočáru, se kterou tyto příkazy pracují.

## Časté chyby

- **Křivka mezi blízkými body přečnívá.** Křivka procházející body se ohýbá tam, kde jsou body. Použijte méně bodů nebo řídicí mnohoúhelník.
- **„Není to spline.“** SPLINEDIT pracuje jen se splinem; {{cmd:PEDIT}} upravuje mnohočáry.
- **Uzavřený spline s body proložení má v jiném programu mírně jiný tvar.** CadCraft jej uzavře jedním hladkým spojem v prvním bodě; jiný program jej může uzavřít periodickou křivkou. Uzavřený spline s řídicími body je ve všech programech stejný.
