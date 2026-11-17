---
title: Odsazení, oříznutí, prodloužení, zaoblení a sražení stěn
summary: Vytvořte dvojité stěny z jednoduchých čar pomocí odsazení, vyčistěte rohy zaoblením a čáry ořežte nebo prodlužte pomocí oříznutí a prodloužení.
keywords: odsazení, oříznutí, prodloužení, zaoblení, sražení, zkosení, přerušení, breakatpoint, prodloužit délku, stěny, roh, řez, rovnoběžně, poloměr, vyčištění
from: c6c5cbd0
---

## Co vytvoříte

Malou místnost se stěnami tlustými 200: vnitřní líc se nakreslí, vnější se odsadí, rohy se vyčistí a jednou stěnou se proříznou dveře.

## Nakreslete vnitřní líc

1. Napište `L` a stiskněte {{key:Enter}}.
2. Napište `0,0` a stiskněte {{key:Enter}}.
3. Napište `@5000,0` a stiskněte {{key:Enter}}.
4. Napište `@0,4000` a stiskněte {{key:Enter}}.
5. Napište `@-5000,0` a stiskněte {{key:Enter}}.
6. Napište `C` a stiskněte {{key:Enter}}.
7. Klikněte na {{ui:Rozsah}}.

Máte čtyři samostatné čáry. (Uzavřená mnohočára by se odsadila najednou; samostatné čáry ukazují, jak zaoblení čistí rohy.)

## Odsaďte vnější líc

1. Napište `O` a stiskněte {{key:Enter}}. Výzva zní `Zadejte vzdálenost odsazení [Skrz (T)] <Skrz>:`.
2. Napište `200` a stiskněte {{key:Enter}}.
3. U výzvy `Vyberte objekt k odsazení` klikněte na spodní čáru.
4. U výzvy `Zadejte bod na straně k odsazení` klikněte kamkoli pod ni. Objeví se rovnoběžná čára 200 pod ní.
5. Klikněte na pravou čáru, pak klikněte napravo od ní.
6. Klikněte na horní čáru, pak klikněte nad ni.
7. Klikněte na levou čáru, pak klikněte nalevo od ní.
8. Stiskněte {{key:Enter}} pro ukončení příkazu.

Vidíte čtyři vnější čáry, každou stejně dlouhou jako její vnitřní čára, takže se vnější rohy nesetkají.

:::tip
U výzvy vzdálenosti stiskněte {{key:Enter}}, pokud chcete použít poslední vzdálenost znovu. Napište `T` pro Skrz: pak každá kopie projde bodem, na který kliknete, v jakékoli vzdálenosti.
:::

{{cmd:OFFSET}} pracuje s čarami, oblouky, kružnicemi a mnohočárami. Odsazení uzavřené mnohočáry odsadí celý obrys včetně rohů.

## Vyčistěte vnější rohy zaoblením

{{cmd:FILLET}} spojí dvě čáry v rohu: obě ořízne nebo prodlouží, aby se setkaly. S poloměrem 0 je roh ostrý.

1. Napište `F` a stiskněte {{key:Enter}}. Výzva zní `Vyberte první čáru [Poloměr (R)]:`.
2. Pokud poslední zaoblení, které jste udělali, mělo poloměr, napište `R`, stiskněte {{key:Enter}}, napište `0` a stiskněte {{key:Enter}}.
3. Klikněte na vnější spodní čáru blízko jejího pravého konce.
4. U výzvy `Vyberte druhou čáru` klikněte na vnější pravou čáru blízko jejího spodního konce.

Dvě čáry se nyní setkají v ostrém rohu a příkaz skončí.

5. Stiskněte {{key:Enter}} pro opakování {{cmd:FILLET}} a uděláte další roh.
6. Opakujte, dokud se všechny čtyři vnější rohy nesetkají.

Klikněte na každou čáru na části, kterou chcete **zachovat**. S poloměrem větším než 0 zaoblení přidá mezi čáry oblouk.

:::tip
U první výzvy napište `M`, pro všechny čtyři rohy najednou, nebo nakreslete vnější líc jako jednu uzavřenou mnohočáru a napište `P`: každý roh se udělá naráz. Držte {{key:Shift}} při kliknutí na druhou čáru pro ostrý roh bez změny poloměru.
:::

## Zkosení rohu sražením

{{cmd:CHAMFER}} odřízne roh přímou čárou.

1. Napište `CHA` a stiskněte {{key:Enter}}.
2. Napište `D` a stiskněte {{key:Enter}}. Napište `300` a stiskněte {{key:Enter}} pro první vzdálenost, pak stiskněte {{key:Enter}}, aby se 300 použilo i pro druhou.
3. Klikněte na vnitřní horní čáru blízko jejího levého konce, pak na vnitřní levou čáru blízko jejího horního konce.

Roh je odříznut o 300 podél každé čáry a spojí je zkosená čára. Napište `A` místo `D`, abyste zadali délku na první čáře a úhel.

## Vyřízněte dveře pomocí oříznutí

Nejprve nakreslete dva ostění přes spodní stěnu, pak oříznete čáry stěny mezi nimi.

1. Napište `L` a stiskněte {{key:Enter}}.
2. Napište `1000,200` a stiskněte {{key:Enter}}.
3. Napište `@0,-600` a stiskněte {{key:Enter}}, pak stiskněte {{key:Enter}} znovu.
4. Stiskněte {{key:Enter}} pro opakování {{cmd:LINE}}.
5. Napište `1900,200` a stiskněte {{key:Enter}}.
6. Napište `@0,-600` a stiskněte {{key:Enter}}, pak stiskněte {{key:Enter}} znovu.

Máte dvě krátké čáry protínající spodní stěnu 900 od sebe.

7. Napište `TR` a stiskněte {{key:Enter}}. V historii se objeví `Aktuální nastavení: Rychlý režim, hrany: Bez prodloužení`.
8. Klikněte na vnitřní spodní čáru mezi oběma ostěními. Ten kus zmizí. (Nejprve na něj najeďte: kus, který zmizí, zešedne a bude čárkovaný.)
9. Klikněte na vnější spodní čáru mezi oběma ostěními. Ten kus také zmizí.
10. Klikněte na část každého ostění, která vyčnívá nad stěnu, a na část pod ní.
11. Stiskněte {{key:Enter}} pro ukončení příkazu.

Vidíte otvor 900 v spodní stěně, s ostěními uzavírajícími konce stěny.

V Rychlém režimu (výchozí) se oříznutí neptá na řezné hrany předem: každý viditelný objekt je řezná hrana. Vyberte kus, který chcete odstranit, nebo přetáhněte dráhu přes několik kusů a oříznete je všechny najednou. Napište `U` a stiskněte {{key:Enter}}, aby se vrátil poslední výběr nebo tažení, aniž byste opustili příkaz. Plot, křížení, zvolené hrany a {{key:Shift}} pro prodloužení jsou v [Oříznutí a prodloužení](topic:trim-and-extend).

## Prodlužte čáru až k jiné

{{cmd:EXTEND}} prodlouží konec čáry, oblouku nebo mnohočáry, dokud nenarazí na další objekt v tom směru.

1. Napište `L` a stiskněte {{key:Enter}}.
2. Napište `1000,2000` a stiskněte {{key:Enter}}.
3. Napište `@2000,0` a stiskněte {{key:Enter}}, pak stiskněte {{key:Enter}} znovu. Čára se zastaví 2000 před pravou stěnou.
4. Napište `EX` a stiskněte {{key:Enter}}.
5. Klikněte na novou čáru blízko jejího pravého konce.
6. Stiskněte {{key:Enter}} pro ukončení příkazu.

Čára nyní vede až k vnitřnímu líci pravé stěny. Každý viditelný objekt je hranice; klikněte blízko konce, který má růst. Uvnitř {{cmd:TRIM}} dělá totéž {{key:Shift}}+kliknutí.

## Přerušení a prodloužení délky

{{cmd:BREAK}} (`BR`, nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Přerušit}}) vyřízne mezeru bez řezné hrany: klikněte na objekt, kde mezera začíná (toto kliknutí je první bod), pak klikněte, kde končí. U kružnice se odstraní část proti směru hodinových ručiček od prvního bodu k druhému. Napište `F` u druhé výzvy, abyste mohli zadat první bod znovu, a {{cmd:BREAKATPOINT}} rozdělí objekt na dva v jednom bodě bez mezery.

{{cmd:LENGTHEN}} (`LEN`) změní délku na jednom konci:

1. Napište `LEN` a stiskněte {{key:Enter}}. Klikněte na čáru, abyste viděli její aktuální délku; výzva se zeptá znovu.
2. Vyberte způsob: `DE` (Přírůstek: částka k přidání, záporná k odebrání; `A` pro úhel oblouku), `P` (Procento: 50 ji půlí), `T` (Celkem: délka, jakou má mít), nebo `DY` (Dynamicky: přetáhněte konec).
3. Klikněte na každý objekt blízko konce, který se má pohnout. `U` vrátí zpět poslední; {{key:Enter}} ukončí.

Čáry, oblouky a otevřené mnohočáry (jejich koncový segment) lze prodloužit.

## Časté chyby

- **Celá čára zmizela.** Nic ji nekřížilo, takže Rychlý režim ji smazal. Napište `U`, aby se vrátila; zkontrolujte, že ji řezná čára skutečně kříží (přibližte) a že není na vypnuté vrstvě.
- **"No boundary in that direction."** Prodloužení nenašlo nic, do čeho by narazilo. Klikněte blíž ke konci, který má růst. Hlášení: "Žádná hranice v tomto směru."
- **"Radius is too large."** Hlášení: "Poloměr je příliš velký." Oblouk by přejel konec jedné z čar. Použijte menší poloměr.
- **"Only the first or last segment of an open polyline can be cut back."** Hlášení: "Lze zkrátit jen první nebo poslední segment otevřené mnohočáry." Vyberte dva sousední segmenty mnohočáry, nebo napište `P`, aby se zaoblil každý její roh.
- **Odsazení šlo na špatnou stranu.** Strana je tam, kde kliknete po výběru objektu. Vraťte zpět pomocí {{key:Mod+Z}} a kliknutí na druhou stranu.
- **"Cannot offset that far."** Hlášení: "Takto daleko nelze odsadit." Odsazení by obrátilo oblouk, kružnici nebo mnohočáru naruby. Použijte menší vzdálenost.
