---
title: Přidání textu a popisků
summary: Umístěte popisky místností jednořádkovým textem, napište zalamované poznámky víceřádkovým textem psaným přímo na místě a později text upravte.
keywords: text, dtext, mtext, mleader, multileader, leader, revcloud, revizní oblak, oblak, najít, nahradit, najít a nahradit, odstavec, zalomení, řádkování, popisek, poznámka, anotace, výška, zarovnání, textmask, maska pozadí, maska, wipeout, natočení, úprava textu, ddedit, textedit, písmo
from: 4b76be99
---

## Co vytvoříte

Dva popisky místností vycentrované v jejich místnostech, poznámku zalomenou do své šířky a pak opravu jednoho z popisků.

## Výška textu a měřítko výkresu

Výška textu je v jednotkách výkresu. Ve výkresu v milimetrech, který se bude vykreslovat v měřítku 1:50, má být text vysoký na papíře 2.5 mm, v modelu 2.5 × 50 = 125 jednotek. Na záložce listu kreslíte v jednotkách papíru, takže 2.5 tam znamená 2.5 mm na papíru.

## Umístění vycentrovaného popisku

1. Napište `DT` a stiskněte {{key:Enter}} (nebo klikněte na {{ui:Text}} na panelu nástrojů). Výzva zní `Specify start point of text [Justify]:`.
2. Napište `J` a stiskněte {{key:Enter}}.
3. U výzvy `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` napište `MC` a stiskněte {{key:Enter}}.
4. U výzvy `Specify insertion point of text` klikněte na střed místnosti.
5. U výzvy `Specify height` napište `250` a stiskněte {{key:Enter}}.
6. U výzvy `Specify rotation angle of text <0>` stiskněte {{key:Enter}}.
7. U výzvy `Enter text` napište `KITCHEN` a stiskněte {{key:Enter}}.

Popisek se objeví vycentrovaný na bodu, na který jste klikli.

8. Na prázdné výzvě `Enter text` stiskněte {{key:Enter}}, čímž příkaz ukončíte.

## Napište poznámku, která se zalamuje

Víceřádkový text ({{cmd:MTEXT}}) se zalamuje do zadané šířky a píše se přímo do výkresu.

1. Napište `T` a stiskněte {{key:Enter}}, nebo klikněte na {{ui:Odstavec}} na panelu nástrojů.
2. U výzvy `Specify first corner` klikněte tam, kam má přijít levý horní roh poznámky.
3. Chcete-li nejprve změnit výšku, napište `H`, stiskněte {{key:Enter}}, napište `250` a stiskněte {{key:Enter}}.
4. U výzvy `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` klikněte napravo od prvního rohu. Vzdálenost napříč je šířka, do které se text zalamuje; to, jak daleko dolů kliknete, ji neomezuje.
5. Nad výkresem se otevře pole s kurzorem. Napište `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Slova se při psaní zalamují podle šířky.
6. Stiskněte {{key:Enter}}, čímž začnete nový odstavec, a napište `CHECK ON SITE`.
7. Stiskněte {{key:Mod+Enter}}, klikněte na {{ui:OK}}, nebo klikněte kamkoli mimo pole. Poznámka je jeden objekt.

Lišta nad polem mění při psaní {{ui:Výška}}, {{ui:Řádkování}} (1 je normální, 1.5 je o polovinu víc), {{ui:Šířka}} (0 = bez zalamování) a {{ui:Zarovnání}}. {{key:Esc}} nebo {{ui:Zrušit}} pole zavře, aniž by se cokoli přidalo.

Možnosti u druhého rohu: `H` výška, `J` zarovnání (`TL` levý horní roh … `BR` pravý dolní roh: roh nebo střed pole, který zůstává na místě), `L` řádkování, `R` natočení, `W` zadaná šířka místo druhého rohu.

:::note
Dokud je pole otevřené, {{key:Space}} napíše mezeru a {{key:Enter}} začne nový odstavec. Uložený DWG uchovává víceřádkový text jako MTEXT; DXF R12 víceřádkový text nemá, takže se každý řádek uloží jako samostatný text.
:::

### Místo toho několik jednořádkových textů

{{cmd:TEXT}} (`DT`) žádá jeden řádek najednou: každé {{key:Enter}} začne další řádek, o 1.667 násobek výšky textu níž, a každý řádek je samostatný objekt. Na prázdném řádku stiskněte {{key:Enter}}, čímž to ukončíte.

## Možnosti zarovnání

| Možnost | Bod, na který kliknete |
|---|---|
| Vlevo (výchozí) | Levý konec základní čáry |
| Střed | Střed základní čáry |
| Vpravo | Pravý konec základní čáry |
| Uprostřed, MC | Střed textu, vodorovně i svisle |
| TL | Levý horní roh |

## Úprava textu

1. Dvakrát klikněte na textový objekt. Otevře se ve stejném poli jako nový víceřádkový text, s kurzorem na konci.
2. Změňte slova.
3. Stiskněte {{key:Mod+Enter}}, nebo klikněte mimo pole. Text ve výkresu se změní; {{key:Esc}} ho nechá beze změny.

{{cmd:TEXTEDIT}} (`ED`) dělá totéž: vybírejte jeden text za druhým a po dokončení stiskněte {{key:Enter}}.

Text můžete místo toho vybrat a změnit v pravém panelu: {{ui:Text}}, {{ui:Výška}}, {{ui:Šířka zalomení}} (0 = bez zalamování), {{ui:Řádkování}}, {{ui:Natočení}}, pozici X a Y a {{ui:Zarovnání}}. Seznam {{ui:Zarovnání}} nabízí také Vlevo dole, které někdy používá text z jiných programů.

## Formátování uvnitř víceřádkového textu z jiných programů

Víceřádkový text v DWG nebo DXF může obsahovat kódy: barvy po slovech, tučné a kurzívu, podtržení, horní čáru a přeškrtnutí, zlomky zapsané nad sebou, jako 1/2, a jinou výšku pro jedno slovo. CadCraft tyto kódy zachovává, vykresluje je (na obrazovce i v PDF) a ukládá zpět beze změny.

Když takový text upravujete (dvojklikem, pomocí {{cmd:TEXTEDIT}}, v poli Text v pravém panelu nebo pomocí {{cmd:FIND}} s nahrazením), upravujete jeho prostá slova. Slovo, které napíšete, jde do úseku vedle něj a převezme jeho barvu a styl; ostatní kódy zůstanou, kde jsou. Když přepíšete čísla zlomku zapsaného nad sebou, zlomek se stane prostým textem. Nastavení celého textu z pole Text zachová kódy jen tam, kde pozná, která slova zůstala.

Názvy písem (`\F`) se zachovají a uloží, ale vše se vykresluje jedním písmem ve stylu Helvetica. Pro psaní kódů zatím neexistuje panel nástrojů.

## Ukažte na něco: víceúrovňové výnosky

{{ui:Výnoska}} ve skupině {{ui:Kótování}} ({{cmd:MLEADER}}, `MLD`) nakreslí šipku, čáru výnosky, krátké zakončení a poznámku jako jeden objekt.

1. Klikněte na {{ui:Výnoska}}. U výzvy `Specify leader arrowhead location` klikněte na to, čeho se poznámka týká.
2. U výzvy `Specify leader landing location` klikněte, kam poznámka patří. Zakončení se obrátí ke straně, na kterou jste klikli.
3. Napište poznámku do pole, které se otevře, a stiskněte {{key:Mod+Enter}}.

`A` a `L` u první otázky nastavují velikost hrotu šipky a délku zakončení; výška textu se bere z {{ui:Výška textu}} pro nové kóty, vynásobená {{ui:Celkové měřítko}}. Pro změnu textu výnosky dvakrát klikněte na ni. Úchyty posouvají hrot šipky a zakončení; poznámka následuje zakončení. V {{ui:Vlastnosti}} jsou to: {{ui:Text}}, {{ui:Výška}}, {{ui:Šířka zalomení}}, {{ui:Velikost hrotu šipky}} a {{ui:Vzdálenost zakončení}}.

:::note
Víceúrovňové výnosky se v DWG ukládají jako skutečné víceúrovňové výnosky. DXF v R12 ani 2000 je nemá, takže se tam ukládají jako čáry, hrot šipky a text, které kreslí.
:::

## Označte změny revizním oblakem

{{ui:Kótování}} › {{ui:Více}} › {{ui:Revizní oblak}} ({{cmd:REVCLOUD}}, `RC`) nakreslí oblak oblouků kolem změněné části. Historie ukazuje délku oblouku a typ, který se použije.

- **Obdélníkový** (poprvé): klikněte na dva rohy.
- `P` **Mnohoúhelníkový**: klikněte na rohy; {{key:Enter}} oblak uzavře.
- `F` **Volná ruka**: klikněte, kde začíná, a pohybujte ukazatelem kolem oblasti bez klikání; oblouk se přidá po každé délce oblouku. Klikněte nebo stiskněte {{key:Enter}}, čímž ho uzavřete.
- `O` **Objekt**: vyberte uzavřenou mnohočáru, kružnici nebo elipsu (nebo úsečku, oblouk či otevřenou mnohočáru); stane se oblakem. `Reverse direction?` `Y` otočí oblouky dovnitř.
- `A` **Délka oblouku**: délka každého oblouku. Zvolte takovou, která se hodí k měřítku vykreslení.

Oblak je uzavřená mnohočára z oblouků, takže se uloží v každém formátu.

## Najděte a nahraďte slova

{{ui:Úpravy}} › {{ui:Více}} › {{ui:Najít a nahradit}} ({{cmd:FIND}}) prohledá text, hodnoty atributů bloků a text kót na otevřené záložce (nebo jen ve vybraných objektech).

1. Napište slova do pole {{ui:Najít}}. Seznam ukáže každé místo, kde se nacházejí, a jejich počet.
2. Pokud je potřebujete, zvolte {{ui:Rozlišovat velká a malá písmena}}, {{ui:Jen celá slova}} nebo {{ui:Používat zástupné znaky (* a ?)}} a odškrtněte, kde nehledat.
3. Klikněte na {{ui:Vybrat nalezené}}, abyste vybrali tyto objekty, nebo napište nová slova do {{ui:Nahradit za}} (seznam ukáže, čím se každé stane) a klikněte na {{ui:Nahradit vše}}. Jedno {{key:Mod+Z}} vrátí zpět každé nahrazení.

Naměřená hodnota kóty není text, takže se nikdy nenahrazuje: v `<> TYP.` lze nahradit jen `TYP.`.

## Skryjte čáry za popiskem

1. Vyberte texty, napište {{cmd:TEXTMASK}} a stiskněte {{key:Enter}}.
2. `B` namaluje pozadí výkresu za ně; `C` požádá o číslo barvy. `O` masku odstraní.
3. `Border offset factor`: {{key:Enter}} ponechá 1.5, tedy polovinu výšky textu kolem textu.

Maska zakryje čáry pod textem, na obrazovce i při vykreslení. DWG 2004 a novější a DXF 2000 ji zachovají; formát DWG 2000 a DXF R12 ji nezvládnou a při uložení se to oznámí.

## Písmo

Veškerý text se vykresluje písmem ve stylu Helvetica, na obrazovce i v PDF. Text z otevřených výkresů si zachová svá slova, výšku a pozici, ale ne svoje původní písmo (název písma uvnitř víceřádkového textu se v souboru zachová, viz výše).

V vykreslených PDF se text v jakémkoli evropském písmu, cyrilici nebo řečtině vytiskne tak, jak je (PDF nese písmena, která potřebuje, a text lze stále označit a hledat). Čínský, japonský a korejský text se také vytiskne tak, jak je (vykreslení stáhne větší písmo při prvním použití). Arabský, perský, urdský a hebrejský text se vytiskne také tak, jak je (viz další oddíl). Znaky, pro které žádné písmo nemá písmeno, se vytisknou jako „?“ a historie uvede, kolik jich bylo.

## Zprava doleva: arabština, perština, urdština, hebrejština

Text napište stejně jako kdekoli jinde: {{cmd:TEXT}} a {{cmd:MTEXT}} vykreslí každý řádek v pořadí čtení. Řádek, jehož první písmeno je arabské nebo hebrejské, se čte zprava doleva; čísla a latinská slova uvnitř něj si zachovají své pořadí zleva doprava a písmena arabského písma se spojují. Řádek začínající latinským písmenem zůstává zleva doprava a slova zprava doleva jsou na svém místě uvnitř něj. Každý odstavec víceřádkového textu má svůj vlastní směr a zalomený odstavec si ho zachová na každém řádku.

Text se ukládá tak, jak jste ho napsali, takže soubory DWG a DXF si ho s jinými programy vymění beze změny. Vložný bod a zarovnání ({{ui:Vlevo}}, {{ui:Střed}}, {{ui:Vpravo}}) znamenají totéž jako u každého textu: poznámka zprava doleva, která má viset od svého pravého konce, potřebuje {{ui:Vpravo}}.

Na obrazovce pocházejí písmena z písem vašeho systému. V PDF vykreslení hebrejština používá stejné vložené písmo jako latinský text; text arabského písma přinutí vykreslení stáhnout ještě jedno písmo (pod 1 MB, jen jednou) a celé PDF se pak vytiskne tímto písmem. Toto písmo nemá vlastní tvar pro tři urdské znaky (heh goal, yeh barree a urdskou tečku): vytisknou se v tvaru nejbližšího arabského písmene. Výkres, který obsahuje arabský i čínský, japonský nebo korejský text, vytiskne jedno z obojího jako „?“, protože vykreslení nese jedno písmo. Text v načteném písmu SHX se seřadí a spojí, pokud písmo drží písmena na jejich unicode místech; u starých písem, jejichž písmena jsou už tvarovaná, použijte jako dřív {{ui:Obrátit (R)}} v {{cmd:SHXFONTS}}.

## Časté chyby

- **Text je příliš malý, aby byl vidět.** Výška je v jednotkách výkresu. Ve velkém výkresu použijte velkou výšku (viz výše), nebo přibližte.
- **Příkaz skončil po jednom řádku.** Stiskli jste {{key:Enter}} na prázdném řádku v {{cmd:TEXT}}. Spusťte jej znovu, nebo použijte víceřádkový text (`T`), kde {{key:Enter}} začíná nový odstavec.
- **`T` otevřelo pole místo výzvy na řádek.** Jako v AutoCADu je `T` víceřádkový text ({{cmd:MTEXT}}); jednořádkový text je `DT`.
- **Text se v AutoCADu zalomí jinde.** CadCraft zalamuje podle šířek Helvetica; jiné písmo se do řádku vejde o slovo víc nebo méně.
- **Text v zrcadlené kopii.** Je umístěn zrcadlově, ale zůstává čitelný zleva doprava.
