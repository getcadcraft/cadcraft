---
title: Koordináták és távolságok megadása
summary: Minden mód pont, távolság, szög vagy szám beírására a CadCraft parancssorban, példákkal.
keywords: dinamikus bevitel, dyn, f12, tab, koordináták, abszolút, relatív, poláris, @, közvetlen távolság, szög, fok, utolsó pont, lastpoint, pontok beírása, bevitel, számítás, számológép, cal, plusz, tört, kifejezés
from: 7de9252d
---

## Pontok

Ha a parancs pontot kér, írja be az alábbiak egyikét, majd nyomja meg az {{key:Enter}} billentyűt:

| Beírja | Jelentés | Példa |
|---|---|---|
| `x,y` | Abszolút: a 0,0 origótól mérve | `2500,1200` |
| `#x,y` | Szintén abszolút (a megszokás miatt is elfogadott) | `#2500,1200` |
| `@dx,dy` | Relatív: vízszintesen és függőlegesen az utolsó ponttól | `@600,0` |
| `@d<a` | Relatív poláris: távolság és szög az utolsó ponttól | `@1500<45` |
| `d<a` | Abszolút poláris: távolság és szög az origótól | `3000<90` |
| egyetlen szám | Közvetlen távolság: ekkora távolságra az alappontól, a kereszthajszál irányába | `1200` |
| `*x,y`, `@*dx,dy` | Világkoordináták, ha be van állítva a felhasználói koordináta-rendszer ({{cmd:UCS}}) | `*0,0` |

Ha a {{cmd:UCS}} be van állítva, az `x,y`, az `@dx,dy` és a `d<a` szöge a UCS tengelyei mentén értendő. Lásd: [A nézet elforgatása és a saját koordináták használata](topic:ucs-and-turned-view).

Vagy kattintson a rajzon; a tárgyfogások és az {{ui:Ortho}} a kattintásokra is vonatkoznak.

Szabályok:

- A vessző választja el az X-et az Y-tól. A tizedesjel pont: `1250.75,300`.
- A negatív értékek balra és lefelé mutatnak: `@-600,0`.
- Ne írjon szóközt: a {{key:Space}} billentyű elküldi a sort, az {{key:Enter}} billentyűhöz hasonlóan.
- A számok használhatnak exponenciális alakot: a `1e3` 1000-et jelent.
- Mértékegységet nem kell beírni, és láb és hüvelyk jelölést sem. Egyszerű számokat írjon be a rajz mértékegységében.

## Az utolsó pont

A `@` a **legutoljára megadott ponttól** számít, bármelyik pontkérdésnél, bármelyik parancsban: kattintás, fogás vagy beírt pont. A parancsok között is megmarad, így új vonalat kezdhet az előző végpontjától `@0,500` távolságra. Ha még nem adott meg pontot, a `@` a 0,0 ponttól számít.

Néhány eset, ahol ez számít:

- A {{cmd:COPY}} parancsban az első másolás után az utolsó pont az adott másolat pontja. Kétszer beírva a `@600,0` a másolatokat az eredeti rajzelemtől 600 és 1200 egységre helyezi.
- Méretezés elhelyezése után az utolsó pont az a hely, ahová a méretvonalat helyezte, nem a méret végpontja.

Kétség esetén használjon abszolút pontot, fogást vagy közvetlen távolságot.

## Közvetlen távolságbevitel

Az egyetlen szám a parancs **alappontjától** (az a pont, ahonnan a gumiszál indul) a kereszthajszál irányába mért távolság:

1. Mozgassa a kereszthajszálat a kívánt irányba.
2. Írja be a távolságot, majd nyomja meg az {{key:Enter}} billentyűt.

Ha az {{ui:Ortho}} be van kapcsolva, az irány vízszintesre vagy függőlegesre ugrik, így ez a leggyorsabb mód négyzetes falak rajzolására. Ha nincs alappont, vagy a kereszthajszál pontosan rajta van, a számot a program elutasítja: „Pont vagy opciókulcsszó szükséges.”

## Szögek

- Fokban, egyszerű számként: `30`, `-45`, `112.5`.
- Az pozitív X iránytól óramutató járásával ellentétesen mérve (jobbra mutat): 0 jobbra, 90 felfelé, 180 balra, 270 vagy -90 lefelé.
- Ahol szöget kérnek (forgatás, szöveg szöge), kattintással is megadhatja: a szöget az alappontól a kattintásig mérik. Ha még nincs alappont, az első kattintás állítja be, és a kérdés második pontot kér.

## Távolságok

Ahol távolságot kérnek (sugár, eltolás, szöveg magassága, léptékszám):

- írjon be pozitív számot (láb és hüvelyk rajzban a `12'6"` vagy a `6-1/2` alak is megengedett: lásd [Láb és hüvelyk](topic:units-papers-scales#feet-and-inches-and-fractions)), vagy
- kattintson egy pontra: a parancs alappontjától mért távolság lesz az érték, vagy
- kattintson két pontra, ha nincs alappont: a kérdés `Specify second point` szövegre vált.

A „Pozitív számot vagy két pontot igényel.” üzenet azt jelenti, hogy az érték nem szám volt, vagy negatív volt.

## Számítás beírt értékben

Bárhol, ahol hosszúságot, koordinátát, szöget vagy számot írnak be (parancssor, dinamikus bevitel, Tulajdonságok mezői és párbeszédpanelek), a `+`, `-`, `*`, `/` jelekkel és zárójelekkel számítást is beírhat, előzetes kiszámítás nélkül:

| Írja be | Eredmény |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (láb és hüvelyk rajzban) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, a rajz mértékegységében (ha a mértékegységek be vannak állítva) |
| `@4+7/16,0` | az utolsótól 4,4375 egységgel jobbra lévő pont |
| `360/7` | 51,43 fokos szög |

- A hosszúságba írt kötőjel továbbra is a része marad: a `4-7/16` 4 7/16, a `24'-6"` pedig 24 láb 6 hüvelyk. Ha láb jel után szeretne kivonni, előbb fejezze be a hosszúságot: `24'-0"-6"`, vagy tegye a számítást zárójelbe, a kötőjel körül szóközökkel: `(24' - 6")` (zárójelen belül a szóköz szóköz marad, máshol az {{key:Enter}} billentyű megnyomását jelenti).
- Hosszúsághoz adott egyszerű szám a rajz mértékegységében értendő; szorzással vagy osztással a hosszúság arányosan változik. Két hosszúság szorzata területet ad, ezért a `2'*3'` elutasításra kerül.
- Az `abs`, `round`, `ceil` és `floor` függvények is működnek: `round(10/3)`.
- Az értelmezhetetlen számítást a program a hiba helyével együtt elutasítja, például: „A számítás túl hamar véget ér (3. karakter): érték hiányzik.” Semmi sem értelmeződik 0-ként. A {{cmd:CAL}} kiírja a számítás értékét.

## Dinamikus bevitel

{{ui:Dyn}} ({{key:F12}}, az állapotsorban) a kereszthajszál mellé teszi az értékeket, amíg a parancs pontot kér.

- Ha még nincs alappont (a vonal első pontja), a két mező **X** és **Y**.
- Ezt követően az utolsó ponttól mért **távolság** és **szög** lesz a két mező.

A beírás továbbra is a parancssorba kerül; a kereszthajszál melletti mező megjeleníti, a gumiszál pedig követi.

1. Írjon be egy értéket: az a kiemelt mezőbe kerül.
2. Nyomja meg a {{key:Tab}} billentyűt (vagy írjon vesszőt az X után). Az érték zárolódik (félkövéren jelenik meg), és a következő mező kiemelődik. A zárolt távolság ekkora hosszúságúra tartja a gumiszálat, amíg az egérrel célzik.
3. Írja be a második értéket, vagy csak célozzon, majd nyomja meg az {{key:Enter}} billentyűt. A `50`, {{key:Tab}}, `90`, {{key:Enter}} sorozat 50 egységet rajzol egyenesen felfelé az utolsó ponttól.

Ha egy érték után a {{key:Tab}} nélkül nyomja meg az {{key:Enter}} billentyűt, az közvetlen távolságbevitelként működik. A láb és hüvelyk is működik a mezőkben (`12'6"`). A távolság- és szögkérdések (kör sugara, forgatás) értékét szintén a kereszthajszál mellett jelenítik meg.

## Opciók és alapértelmezések

- Az opciók szögletes zárójelben jelennek meg. Írja be az opció nagybetűs betűit (`D` a `[Diameter]` opcióhoz, `CL` a `CLose` opcióhoz), majd nyomja meg az {{key:Enter}} billentyűt. A szó hosszabb eleje is működik (`DIA`).
- Az alapértelmezett érték hegyes zárójelben jelenik meg, például `<500>`. Az érték használatához nyomja meg az {{key:Enter}} billentyűt, vagy kattintson a jobb gombbal.

## Más billentyűzetkiosztások és a numerikus billentyűzet

A parancsnevek, a rövid nevek és az opciók betűi latin betűk. Ha görög, cirill (orosz, ukrán, fehérorosz, szerb, macedón, bolgár), héber, arab, perzsa, thai vagy koreai kiosztás van aktív, nem kell kiosztást váltania: ha a beírt szó, mint ilyen, nem parancs, rövid név vagy opció, a CadCraft a lenyomott billentyűk alapján értelmezi. A latin billentyűzeten az `L` jelű billentyű továbbra is a `LINE` parancsot indítja, a `C` billentyű pedig továbbra is a `Close` választ adja, bármilyen betűt is tesz rá a kiosztás. A parancssor fölötti, egyező parancsokat tartalmazó lista ugyanezt a szabályt követi. A parancsnál szöveget kérő helyen (a {{cmd:TEXT}} tartalma, egy név) beírt szöveg soha nem változik.

Olyan kiosztásokon, ahol a numerikus billentyűzet tizedesjel-billentyűje vesszőt ad, ez a billentyű tizedespontot ír a parancssorba és a számmezőkbe, így a `12.5` a numerikus billentyűzeten is beírható. A főbillentyűzet vessző billentyűje továbbra is az `x,y` koordináták elválasztására szolgál.

Mindkettő kikapcsolható a {{ui:Settings}} beállításaiban: {{ui:Commands on a non-Latin keyboard layout}} és {{ui:Keypad decimal key}}.


## A koordinátakijelző

Az állapotsor a kereszthajszál X és Y koordinátáit mutatja (a UCS-ben, ha be van állítva), a fogások és az {{ui:Ortho}} hatása után. Amíg a parancsnak van alappontja, a `Δ` jel mellé kiírja az alappontól mért távolságot és szöget, például `Δ 1500 < 30°`: ezek azok a számok, amelyeket `@1500<30` alakban írna be.

A {{cmd:ID}} paranccsal kiírhatja egy pont koordinátáit, a {{cmd:DIST}} paranccsal pedig két pont közötti távolságot mérheti.
