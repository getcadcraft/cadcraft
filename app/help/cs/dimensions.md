---
title: Kótování půdorysu
summary: Přidávejte délkové, zarovnané, úhlové, poloměrové a průměrové kóty, řetězte je pomocí Navazující a Základní kóty a přepisujte text.
keywords: kóta, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, řetězec, řada, kótovat, nástroj kót, kde, najít, panel nástrojů, měřit, mm, cm, m, km, jednotky
from: 9ee65123
---

## Co vytvoříte

Okótovaný pokoj: celkovou šířku a výšku, řadu kót podél jedné stěny, šikmou stěnu, zakřivený roh a úhel.

Než začnete, přečtěte si [Nastavení velikostí kót](topic:dimension-settings), pokud je váš výkres velký: text kót je ve výchozím stavu 2.5 jednotky výkresu vysoký, což je u výkresu měřeného v milimetrech drobné. Pro kroky níže nejprve napište `DIMSCALE`, stiskněte {{key:Enter}}, napište `50` a stiskněte {{key:Enter}}.

## Kde jsou nástroje pro kótování

S nabídkou CadCraftu (tou, se kterou CadCraft začíná) jsou nástroje kót na panelu nástrojů nad výkresem, ve skupině {{ui:Kótování}}: {{ui:Délková}}, {{ui:Zarovnaná}}, {{ui:Úhel}}, {{ui:Poloměr}} a {{ui:Průměr}}. Nabídka {{ui:Více}} této skupiny obsahuje {{ui:Navazující kóta}} a {{ui:Základní kóta}}. Podržte ukazovátko nad tlačítkem, abyste viděli, co dělá.

- S nabídkou {{ui:Klasické kreslení}} nebo {{ui:Pás karet}} otevřete kartu {{ui:Kótování}}: nástroje jsou na jejím panelu {{ui:Kóty}}. {{ui:Klasické kreslení}} má také {{ui:Délková}} na kartě {{ui:Domů}}, pod {{ui:Anotace}}. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).
- Nebo napište příkaz na příkazový řádek pod výkresem a stiskněte {{key:Enter}}: `DLI` (délková), `DAL` (zarovnaná), `DAN` (úhlová), `DRA` (poloměr), `DDI` (průměr), `DCO` (navazující), `DBA` (základní).
- Na úzké obrazovce je panel nástrojů v jedné řadě: přejeďte jím stranou, abyste se dostali k {{ui:Kótování}}.

Chcete-li zobrazit délky v milimetrech, centimetrech, metrech nebo kilometrech, viz [Kóty v mm, cm, m nebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Nakreslete něco, co okótujete

1. Napište `PL` a stiskněte {{key:Enter}}.
2. Napište `0,0` a stiskněte {{key:Enter}}.
3. Napište `@6000,0` a stiskněte {{key:Enter}}.
4. Napište `@1500<60` a stiskněte {{key:Enter}}.
5. Napište `@0,2700` a stiskněte {{key:Enter}}.
6. Napište `@-6750,0` a stiskněte {{key:Enter}}.
7. Napište `C` a stiskněte {{key:Enter}}. Obrys se uzavře.
8. Napište `C` a stiskněte {{key:Enter}}, abyste začali kružnici.
9. Klikněte uvnitř pokoje, daleko od stěn, pro střed.
10. Napište `600` a stiskněte {{key:Enter}}. Je to sloup.
11. Klikněte na {{ui:Rozsah}}.

## Délková: vodorovně nebo svisle

1. Napište `DLI` a stiskněte {{key:Enter}}.
2. U výzvy `Specify first extension line origin` uchopte levý dolní roh (Koncový bod) a klikněte.
3. U výzvy `Specify second extension line origin` uchopte pravý dolní roh a klikněte.
4. Přesuňte zaměřovač pod pokoj. Kóta se pohybuje spolu s ním, vodorovně.
5. Klikněte pro umístění kótovací čáry.

Historie říká `Dimension text = 6000`.

Kam čáru umístíte, to určuje směr: pod nebo nad vznikne vodorovná kóta, vlevo nebo vpravo svislá. Chcete-li směr vynutit, napište před umístěním `H` (vodorovně), `V` (svisle) nebo `R` (natočeně, pak úhel).

:::tip
Na prvním výzvě stiskněte {{key:Enter}} místo výběru bodu, pak klikněte na čáru, oblouk, kružnici nebo úsek mnohočáry. CadCraft vezme oba konce za vás.
:::

## Navazující: řada kót

{{cmd:DIMCONTINUE}} ({{ui:Kótování}} › {{ui:Více}} › {{ui:Navazující kóta}}, nebo `DCO`) pokračuje od poslední délkové nebo zarovnané kóty, kterou jste vytvořili, a každá nová začíná tam, kde skončila předchozí.

1. Napište `DLI` a stiskněte {{key:Enter}}.
2. Napište `0,0` a stiskněte {{key:Enter}} pro první počátek.
3. Napište `2000,0` a stiskněte {{key:Enter}} pro druhý počátek.
4. Klikněte pod pokoj, abyste ji umístili.
5. Napište `DCO` a stiskněte {{key:Enter}}.
6. Napište `4500,0` a stiskněte {{key:Enter}}. Druhá kóta naváže na první, na stejné čáře.
7. Uchopte pravý dolní roh a klikněte. Třetí kóta řadu dokončí.
8. Stiskněte {{key:Enter}} pro ukončení příkazu.

:::note
Body jsou zde napsány jako absolutní souřadnice úmyslně. Bod `@` počítá od posledního bodu, který jste zadali, a poslední bod je místo, kde jste umístili předchozí kótovací čáru, ne konec kóty. Absolutní body, uchopení nebo prostá vzdálenost se zapnutým {{ui:Ortogonální}} jsou v řadě kót bezpečnější.
:::

Napište `U` a stiskněte {{key:Enter}}, abyste vzali zpět poslední kótu v řadě, aniž byste příkaz opustili.

## Základní: kóty z jedné čáry

{{cmd:DIMBASELINE}} ({{ui:Kótování}} › {{ui:Více}} › {{ui:Základní kóta}}, nebo `DBA`) měří každou novou kótu od prvního počátku poslední kóty a řadí je jednu za druhou dál od ní.

1. Napište `DLI` a stiskněte {{key:Enter}}.
2. Uchopte levý dolní roh a klikněte.
3. Uchopte levý horní roh a klikněte.
4. Přesuňte zaměřovač vlevo od pokoje a klikněte. Objeví se svislá kóta.
5. Napište `DBA` a stiskněte {{key:Enter}}.
6. Uchopte horní konec stěny pod 60 stupňů (Koncový bod) a klikněte. Objeví se druhá svislá kóta, o krok dál než první.
7. Stiskněte {{key:Enter}} pro ukončení.

## Zarovnaná: skutečná délka šikmé čáry

1. Napište `DAL` a stiskněte {{key:Enter}}.
2. Stiskněte {{key:Enter}} pro výběr objektu.
3. Klikněte na stěnu pod 60 stupňů.
4. Posuňte ven a klikněte pro umístění.

Text zní 1500: skutečná délka měřená podél stěny.

## Poloměr a průměr

1. Napište `DRA` a stiskněte {{key:Enter}}.
2. Klikněte na kružnici sloupu.
3. Pohybujte zaměřovačem. Výnoska míří od středu k zaměřovači.
4. Klikněte pro umístění textu.

Text zní `R600`. {{cmd:DIMDIAMETER}} (`DDI`) dělá totéž se znakem ⌀ a průměrem.

## Úhlová

Stěny jsou zde jedna mnohočára, takže úhel měříte podle jeho vrcholu. (Mezi dvěma samostatnými čárami můžete místo toho kliknout na čáry.)

1. Napište `DAN` a stiskněte {{key:Enter}}.
2. U výzvy `Select arc, circle or line, or Enter for a vertex` stiskněte {{key:Enter}}.
3. U výzvy `Specify angle vertex` uchopte pravý dolní roh a klikněte.
4. U výzvy `Specify first angle endpoint` uchopte levý dolní roh a klikněte.
5. U výzvy `Specify second angle endpoint` uchopte horní konec stěny pod 60 stupňů a klikněte.
6. Přesuňte zaměřovač dovnitř pokoje, blízko rohu, a klikněte.

Text zní `120°`, vnitřní úhel rohu. Umístíte-li kótu na druhou stranu rohu, měří úhel na té straně. Klikněte na oblouk v prvním výzvě, chcete-li okótovat úhel, který zabírá, nebo klikněte na dvě čáry pro úhel mezi nimi.

## Změna textu

Chcete-li napsat vlastní text, napište `T` a stiskněte {{key:Enter}}, než kótu umístíte, a pak napište text. Ve vašem textu `<>` značí naměřenou hodnotu: `<> TYP.` dá `6000 TYP.`. Na prázdném řádku stiskněte {{key:Enter}} pro zachování naměřené hodnoty.

Chcete-li změnit existující kótu:

1. Klikněte na ni.
2. V pravém panelu napište do {{ui:Text}}. Nechte prázdné pro naměřenou hodnotu.
3. Stiskněte {{key:Enter}}.

## Kóty následují geometrii

Kóta si pamatuje své body. Přetáhněte jeden z jejích úchytů, nebo ji přesuňte, otočte nebo zvětšete spolu s objekty, které měří, a znovu se změří. Pokud geometrii natáhnete, aniž byste kótu přesunuli, kóta nenásleduje: drží si vlastní body.

## Časté chyby

- **Text a šipky jsou mikroskopické nebo obrovské.** Nastavte celkové měřítko: viz [Nastavení velikostí kót](topic:dimension-settings).
- **"Klikněte na bod uvnitř úhlu, který chcete změřit."** Bod, na který jste kliknuli u úhlové kóty, leží na jednom z ramen. Přesuňte jej dovnitř úhlu.
- **Navazující začala od špatné kóty.** Vždy navazuje od poslední délkové nebo zarovnané kóty vytvořené v této relaci. Nejprve vytvořte (nebo znovu vytvořte) tu, od níž se má navazovat.
- **Kóta vyšla svisle.** Umístili jste ji stranou. Napište `H` před umístěním.
- **Stopy a palce.** Nejprve nastavte formát délek výkresu na {{ui:Stavební}}, nebo {{ui:Formát}} kóty v {{ui:Vlastnosti}}: viz [Stopy a palce v kótách](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Čísla nejsou v jednotce, kterou chcete.** Zvolte {{ui:Jednotky v textu}}: viz [Kóty v mm, cm, m nebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
