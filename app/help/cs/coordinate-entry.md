---
title: Zadávání souřadnic a vzdáleností
summary: Všechny způsoby, jak na příkazovém řádku CadCraft zadat bod, vzdálenost, úhel nebo číslo, s příklady.
keywords: dynamické zadávání, dyn, f12, tab, souřadnice, absolutní, relativní, polární, @, přímá vzdálenost, úhel, stupně, poslední bod, lastpoint, zadávání bodů, vstup, aritmetika, výpočet, kalkulačka, cal, plus, zlomek, výraz
from: 7de9252d
---

## Body

Když výzva žádá bod, zadejte jeden z těchto tvarů a stiskněte {{key:Enter}}:

| Zadáte | Význam | Příklad |
|---|---|---|
| `x,y` | Absolutní: měřeno od počátku 0,0 | `2500,1200` |
| `#x,y` | Také absolutní (přijato kvůli zvyku) | `#2500,1200` |
| `@dx,dy` | Relativní: vodorovně a nahoru od posledního bodu | `@600,0` |
| `@d<a` | Relativní polární: vzdálenost a úhel od posledního bodu | `@1500<45` |
| `d<a` | Absolutní polární: vzdálenost a úhel od počátku | `3000<90` |
| jedno číslo | Přímá vzdálenost: tak daleko od základního bodu, směrem ke kříži kurzoru | `1200` |
| `*x,y`, `@*dx,dy` | Světové souřadnice, když je nastaven UCS | `*0,0` |

Když je nastaven UCS ({{cmd:UCS}}), `x,y`, `@dx,dy` a úhel v `d<a` se měří podél os UCS. Viz [Otočení pohledu a vlastní souřadnice](topic:ucs-and-turned-view).

Nebo klikněte do výkresu; na kliknutí se uplatní uchopení a {{ui:Ortho}}.

Pravidla:

- Čárka odděluje X od Y. Desetinná místa se píší tečkou: `1250.75,300`.
- Záporné hodnoty jdou doleva a dolů: `@-600,0`.
- Nepište mezery: {{key:Space}} odešle řádek stejně jako {{key:Enter}}.
- Čísla mohou mít exponent: `1e3` je 1000.
- Jednotky se nepíší a nepoužívá se zápis ve stopách a palcích. Zadávejte prostá čísla v jednotkách výkresu.

## Poslední bod

`@` počítá od **posledního bodu, který jste zadali v kterékoli výzvě k bodu**, v libovolném příkazu: kliknutí, uchopení nebo zadaný bod. Pamatuje si ho i mezi příkazy, takže novou čáru můžete začít `@0,500` od místa, kde skončila předchozí. Dokud nezadáte žádný bod, `@` počítá od 0,0.

Několik míst, kde na tom záleží:

- V {{cmd:COPY}} je po prvním kopírování posledním bodem bod této kopie. Dvakrát zadané `@600,0` umístí kopie ve vzdálenosti 600 a 1200 od originálu.
- Po umístění kóty je posledním bodem místo, kam jste umístili kótovací čáru, ne konec kóty.

V případě pochybností použijte absolutní bod, uchopení nebo přímou vzdálenost.

## Zadání přímé vzdálenosti

Holé číslo je vzdálenost od **základního bodu** (bodu, od kterého začíná pružná čára) směrem ke kříži kurzoru:

1. Posuňte kříž kurzoru správným směrem.
2. Zadejte vzdálenost a stiskněte {{key:Enter}}.

Když je zapnutý {{ui:Ortho}}, směr se přichytí na vodorovný nebo svislý, takže je to nejrychlejší způsob, jak kreslit kolmé stěny. Nemá-li příkaz základní bod, nebo leží-li kříž kurzoru přesně na něm, číslo se odmítne se zprávou "Vyžadován bod nebo klíčové slovo volby."

## Úhly

- Ve stupních jako prosté číslo: `30`, `-45`, `112.5`.
- Měřeno proti směru hodinových ručiček od kladného směru osy X (směr doprava): 0 je vpravo, 90 nahoru, 180 vlevo, 270 nebo -90 dolů.
- Tam, kde se žádá úhel (otočení, úhel textu), můžete také klikat: úhel se měří od základního bodu ke kliknutí. Dokud základní bod neexistuje, první kliknutí ho nastaví a výzva požádá o druhý bod.

## Vzdálenosti

Tam, kde se žádá vzdálenost (poloměr, odsazení, výška textu, měřítko):

- zadejte kladné číslo (ve výkresu se stopami a palci také `12'6"` nebo `6-1/2`: viz [Stopy a palce](topic:units-papers-scales#feet-and-inches-and-fractions)), nebo
- klikněte na bod: vzdálenost od základního bodu příkazu k němu, nebo
- klikněte na dva body, když žádný základní bod není: výzva se změní na `Zadejte druhý bod`.

"Vyžaduje kladné číslo nebo dva body." znamená, že hodnota nebyla číslo, nebo byla záporná.

## Aritmetika v zadané hodnotě

Kdekoli se zadává délka, souřadnice, úhel nebo číslo (řádek příkazů, dynamické zadávání, pole Vlastnosti a dialogy), můžete místo předchozího výpočtu zadat výpočet pomocí `+`, `-`, `*`, `/` a závorek:

| Zadáte | Výsledek |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (ve výkresu se stopami a palci) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, v jednotkách výkresu (když jsou jednotky nastaveny) |
| `@4+7/16,0` | bod 4.4375 vpravo od posledního |
| `360/7` | úhel 51.43 stupně |

- Pomlčka zapsaná v délce je její součástí: `4-7/16` je 4 7/16 a `24'-6"` je 24 stop 6 palců. Chcete-li odečíst za znakem stopy, nejprve dokončete délku, `24'-0"-6"`, nebo dejte výpočet do závorek s mezerami kolem pomlčky, `(24' - 6")` (uvnitř závorek je mezera mezerou; jinde stiskne {{key:Enter}}).
- Prosté číslo přičtené k délce je v jednotkách výkresu; násobení nebo dělení jím délku změní měřítkem. Dvě délky vynásobené dohromady dají plochu, takže `2'*3'` je odmítnuto.
- Fungují také `abs`, `round`, `ceil` a `floor`: `round(10/3)`.
- Výpočet, který nelze přečíst, je odmítnut s uvedením, kde se stala chyba, například "Výpočet končí předčasně (znak 3): chybí hodnota." Nic se nikdy nečte jako 0. {{cmd:CAL}} vypíše hodnotu výpočtu.

## Dynamické zadávání

{{ui:Dyn}} ({{key:F12}}, ve stavovém řádku) zobrazí hodnoty u kříže kurzoru, když příkaz žádá bod.

- Dokud není základní bod (první bod čáry), jsou to dvě pole **X** a **Y**.
- Potom jsou to **vzdálenost** a **úhel** od posledního bodu.

Zadávání stále směřuje na řádek příkazů; pole u kříže kurzoru ho zobrazuje a pružná čára ho sleduje.

1. Zadejte hodnotu: půjde do zvýrazněného pole.
2. Stiskněte {{key:Tab}} (nebo čárku za X). Hodnota se zamkne (zobrazí se tučně) a zvýrazní se další pole. Zamknutá vzdálenost udrží pružnou čáru této délky, zatímco myší mícíte.
3. Zadejte druhou hodnotu, nebo jen zamiřte, a stiskněte {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} nakreslí 50 svisle nahoru od posledního bodu.

Stisknutí {{key:Enter}} po jedné hodnotě bez {{key:Tab}} funguje jako zadání přímé vzdálenosti. Stopy a palce fungují i v polích (`12'6"`). Výzvy na vzdálenost a úhel (poloměr kružnice, otočení) zobrazují svou hodnotu také u kříže kurzoru.

## Volby a výchozí hodnoty

- Volby se zobrazují v hranatých závorkách. Napište velká písmena volby (`D` pro `[Průměr (D)]`, `CL` pro `[Zavřít (CL)]`) a stiskněte {{key:Enter}}. Delší začátky slova také fungují (`DIA`).
- Výchozí hodnota se zobrazuje v lomených závorkách, například `<500>`. Stisknutím {{key:Enter}} nebo pravým tlačítkem ji použijete.

## Jiná klávesová rozložení a numerická klávesnice

Názvy příkazů, zkrácené názvy a písmena voleb jsou latinská písmena. Při řeckém, cyrilském (ruském, ukrajinském, běloruském, srbském, makedonském, bulharském), hebrejském, arabském, perském, thajském nebo korejském rozložení nemusíte přepínat rozložení: když slovo, které jste napsali, jako takové není příkaz, zkrácený název ani volba, CadCraft ho přečte podle stisknutých kláves. Klávesa označená `L` na latinské klávesnici stále spustí `LINE` a klávesa `C` stále odpoví `Zavřít`, ať je na ní jakékoli písmeno. Seznam odpovídajících příkazů nad řádkem příkazů se řídí stejným pravidlem. Text, který zadáváte tam, kde příkaz žádá text (obsah {{cmd:TEXT}}, název), se nikdy nemění.

U rozložení, kde desetinná klávesa numerické klávesnice píše čárku, tato klávesa zadává bod na řádku příkazů i v číselných polích, takže `12.5` lze napsat na numerické klávesnici. Čárka na hlavní klávesnici stále odděluje `x,y`.

Obojí lze vypnout v {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} a {{ui:Keypad decimal key}}.

## Zobrazení souřadnic

Stavový řádek zobrazuje X a Y kříže kurzoru (v UCS, je-li nastaven) po uchopeních a při {{ui:Ortho}}. Když má příkaz základní bod, přidá `Δ` se vzdáleností a úhlem od tohoto bodu, například `Δ 1500 < 30°`: čísla, která byste zadali jako `@1500<30`.

Pro výpis souřadnic bodu použijte {{cmd:ID}}, pro měření mezi dvěma body {{cmd:DIST}}.
