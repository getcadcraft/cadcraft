---
title: Model ve 3D
summary: Zobrazte výkres ve 3D na kartě 3D a vytvářejte z něj jednoduchá tělesa: vytáhnout (se zkosením nebo po dráze), rotovat, zatlačit a vytáhnout plochy, kvádry, válce a klíny, spojovat, odečítat a protínat je, pak je přesouvat, kopírovat, otáčet a mazat a umísťovat na list ploché 2D pohledy na ně.
keywords: 3d, tři d, těleso, tělesa, 3dsolid, oblast, tělo, acis, sat, sab, tělesa z jiných programů, otevřít 3D výkres, vytáhnout, ext, rotace, rev, tažení, zkosení, dráha, presspull, zatlačit vytáhnout, kvádr, box, válec, cyl, klín, wedge, 3dorbit, orbit, pohled, vscurrent, vizuální styl, stínovaný, skrytá čára, drátový, rentgen, xray, iso, perspektiva, paralelní, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kostka pohledu, sjednocení, uni, odečíst, su, průnik, in, booleovské operace, kombinovat, spojit tělesa, viewbase, flatshot, plochý pohled, 2D pohled, pohled na výkres, pohled zepředu, pohled shora, pohled zboku, skryté čáry
from: 13060e71
---

## Co vytvoříte

Půdorys místnosti 1000 × 600 vytažený do bloku vysokého 400, plocha vytažená nahoru a válec vedle něj. Potom se model uloží spolu s výkresem a exportuje pro 3D prohlížeč nebo tiskárnu.

Karta {{ui:3D}} je vedle {{ui:Model}} pod výkresem. Ukazuje výkres z prostoru modelu ležící na zemi v barvách vrstev (vrstvy, které jsou vypnuté nebo zmrazené, zůstávají skryté) a tělesa, která vytvoříte. Při prvním otevření se 3D pohled načte; potom se přepíná okamžitě.

## Vytáhnout tvar

1. Na kartě {{ui:Model}} napište `REC` a stiskněte {{key:Enter}}. Napište `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Klikněte na kartu {{ui:3D}}. Panel nástrojů ukazuje skupinu {{ui:3D}} místo skupin pro výkres.
3. Klikněte na {{ui:Vytáhnout}} (nebo napište {{cmd:EXTRUDE}}, `EXT`). Klikněte dovnitř obdélníku a stiskněte {{key:Enter}}.
4. Napište `400` a stiskněte {{key:Enter}}. Historie hlásí „Vytaženo 1 těleso, výška 400“ a jeho objem.

Uzavřené polylinie (včetně oblouků), obdélníky, mnohoúhelníky, kružnice a elipsy se vytáhnou; čáry a otevřené polylinie ne, a historie uvede proč. Tvary můžete také nejprve vybrat na kartě {{ui:Model}} a tam napsat `EXTRUDE`. Výšku můžete místo psaní určit kliknutím: obrys se pohybuje podle kurzoru nahoru a dolů. Záporná výška jde dolů. Při výzvě k výšce napište `D`, aby se 2D tvary po vytažení smazaly (`D` znovu je ponechá).

Při výzvě k výšce `T` (Úhel zkosení) vyžádá úhel ve stupních: strany se o něj naklánějí dovnitř, takže horní plocha je menší (záporný úhel ji zvětší). Příliš strmý úhel pro daný tvar je odmítnut. `P` (Dráha) tvary místo toho protáhne po dráze (viz níže).

## Rotace a tažení

- {{cmd:REVOLVE}} (`REV`, nebo {{ui:Více}} › {{ui:Rotace kolem osy}}): vyberte uzavřené tvary, stiskněte {{key:Enter}}, potom klikněte na oba konce osy (nebo napište `X` či `Y` pro osu výkresu procházející bodem 0,0) a napište úhel, nebo stiskněte {{key:Enter}} pro celé otočení. Tvar se otočí kolem osy a vystupuje ze země: nakreslete obrys poloviny vázy vedle čáry a otočte jej kolem této čáry. Tvar se může osy dotýkat, ale nesmí ji protínat. Plné otočení má 48 kroků.
- {{cmd:SWEEP}} (nebo {{ui:Více}} › {{ui:Tažení po dráze}}, nebo `P` při výzvě k výšce příkazu EXTRUDE): vyberte uzavřené tvary (profil), stiskněte {{key:Enter}}, potom klikněte na dráhu: čáru, polylinii, oblouk, kružnici nebo elipsu. Profil se postaví napříč dráze, jeho střed na ní, a táhne se podél ní; rohy jsou seříznuty na úhel a uzavřená dráha vytvoří prstenec. Malý obdélník protažený podél obrysu místnosti vytvoří soklovou lištu; kružnice podél polylinie vytvoří potrubí.

## Zatlačit a vytáhnout plochu

1. Klikněte na {{ui:Zatlačit/vytáhnout}} (nebo napište {{cmd:PRESSPULL}}).
2. Klikněte na horní plochu bloku.
3. Napište `100` a stiskněte {{key:Enter}}, nebo pohněte kurzorem a klikněte. Blok má výšku 500.

## Kvádry, válce a klíny

- {{cmd:BOX}}: klikněte nebo napište dva rohy, potom výšku.
- {{cmd:CYLINDER}} (`CYL`): střed, poloměr, potom výšku. Válce a vytažené kružnice mají 48 stran, stínované hladce.
- {{cmd:WEDGE}} (`WE`): dva rohy a výška. U prvního rohu je plná výška a ke druhému se svažuje na nulu.

Na kartě 3D dopadne kliknutí na plochu nebo hranu pod kurzorem, jinak na zem, takže kvádr může stát na jiném tělese.

## Přesun, kopírování, otočení a mazání těles

Na kartě 3D kliknutím vyberete těleso; tažením zleva doprava vybíráte oknem, zprava doleva křížením. Potom:

- {{cmd:MOVE}}: klikněte na základní bod a na místo, kam má přijít, nebo napište `<100,0,0>` (nebo `@100,0`) pro vzdálenost po X, Y a Z.
- {{cmd:COPY}}: totéž, původní zůstane.
- {{cmd:ROTATE}}: napište úhel (těleso se otočí kolem středu výběru, kolem Z), nebo klikněte na střed, počáteční bod a úhel.
- {{cmd:ERASE}} nebo {{key:Delete}}.

## Spojování, odečítání a průnik těles

Otevřete {{ui:Více}} na panelu nástrojů 3D, nebo napište příkaz:

- {{cmd:UNION}} (`UNI`): vyberte tělesa, stiskněte {{key:Enter}}: stanou se jedním tělesem.
- {{cmd:SUBTRACT}} (`SU`): vyberte tělesa, která se mají zachovat, stiskněte {{key:Enter}}, potom ta, která se mají odebrat, a stiskněte {{key:Enter}}. Díra skrz blok: nakreslete válec, který jím prochází, a potom jej odečtěte.
- {{cmd:INTERSECT}} (`IN`): vyberte tělesa, stiskněte {{key:Enter}}: zůstane jen to, co mají všechna společné.

Historie hlásí objem výsledku. Každý příkaz je jeden krok zpět. První spuštěný příkaz načte booleovský engine 3D (asi 0.5 MB; je součástí {{ui:Uložit pro offline}}). Kombinovat lze jen uzavřená tělesa: těleso s otevřenými hranami (z volných 3D ploch jiného programu) je odmítnuto s uvedením důvodu. Výsledkem je jedno těleso; zakřivené plochy zůstanou složeny z plochých fasetek, jako byl válec.

Dvojklikem na těleso upravíte jeho plochy a hrany samostatně; {{key:Esc}} to zavře. Každá 3D změna je jeden krok zpět ve stejné historii jako výkres: {{key:Mod+Z}} vrátí poslední věc, kterou jste udělali na kterékoli kartě.

## Ploché pohledy na listu

1. Otevřete kartu listu (nebo zůstaňte na {{ui:Model}}) a napište {{cmd:VIEWBASE}} (nebo `FLATSHOT`).
2. Vyberte pohled: {{key:Enter}} pro pohled zepředu, nebo `T` (shora), `R` (zprava), `L` (zleva), `BA` (zezadu), `BO` (zdola), `I` (izometrie).
3. {{key:Enter}} zobrazí skryté čáry čárkovaně; `H` je vynechá.
4. {{key:Enter}} zvolí měřítko, které navrhuje CadCraft: na listu největší standardní měřítko (např. 1:20), při kterém se pohled vejde do méně než poloviny papíru. Nebo napište vlastní: `1:50`, `2:1`.
5. Klikněte, nebo napište, kam má přijít střed pohledu.

Pohled je jeden odkaz na blok, `VIEW-FRONT-1` a tak dál: viditelné hrany na vrstvě VIEW-VISIBLE (0.5 mm), skryté na VIEW-HIDDEN (čárkovaně, 0.25 mm). Přesouvejte jej, kótujte a vykreslujte jako každou jinou kresbu. Je to obrázek těles v okamžiku, kdy jste jej vytvořili: po jejich změně pohled smažte a spusťte {{cmd:VIEWBASE}} znovu. Pro další pohledy spusťte příkaz pro každý pohled zvlášť.

## Rozhlížení

Tažením s kolečkem pohled otáčíte, {{key:Shift}} + tažení kolečkem nebo pravým tlačítkem posouváte a otočením kolečka přibližujete u kurzoru. Na touchpadu otáčejí dva prsty a stažením prstů přibližujete. Pravé kliknutí bez tažení je {{key:Enter}}, jako na ostatních kartách. `3DORBIT` nechá levé tlačítko otáčet, dokud nestisknete {{key:Enter}} nebo {{key:Esc}}.

- {{ui:Pohledy}} (nebo {{cmd:VIEW}}): Izometrie, Shora, Zdola, Zepředu, Zezadu, Zleva, Zprava, Perspektiva nebo Paralelní, a Zoom na vše.
- {{ui:Styl}} (nebo {{cmd:VSCURRENT}}, `VS`): Stínovaný, Stínovaný s hranami, Skrytá čára, Drátový nebo Rentgen.

Body, na které klikáte, se přichytí k tělesům (rohy, hrany, plochy) a k 2D výkresu na zemi: ke koncům a středům jeho čar a oblouků a k bodům na nich. 2D čáry se na kartě 3D nikdy nevybírají. Když příkaz žádá 2D objekty (EXTRUDE, REVOLVE, SWEEP), klik vybere jeden, tažení zleva doprava vezme to, co je celé uvnitř okna, a tažení zprava doleva vezme to, co protíná, jako na kartě {{ui:Model}}.

Kostka pohledu je v pravém horním rohu karty 3D: klikněte na plochu, hranu nebo roh, abyste se dívali odtud, tažením ji otáčíte a tlačítko domečku vrátí izometrický pohled. To je {{ui:Automaticky}}, první volba v {{ui:Indikátor rohu}} v [Nastavení CadCraft](topic:settings). Nastavíte-li {{ui:Kostka pohledu}}, karta {{ui:Model}} ukazuje také kostku dívající se shora; kliknutí na jinou stranu otevře kartu 3D dívající se odtud. Nastavíte-li {{ui:Ikona os}}, obě karty místo toho ukazují značku os.

## Tělesa z jiných programů

Výkres z jiného programu může obsahovat 3D tělesa, oblasti a těla (3DSOLID, REGION, BODY: ten druhý program jejich tvar uchovává jako data ACIS). CadCraft je při prvním otevření karty zobrazí z prostoru modelu na kartě 3D v barvě jejich vrstvy a s vlastními hranami; příkazový řádek potom říká, kolik jich bylo vykresleno.

- Zobrazují se tak, jak jsou: nelze je vybírat, přesouvat ani měnit. Vypnuté nebo zmrazené vrstvy je skrývají.
- Uložení jako DWG každé z nich zapíše beze změny v kterékoli verzi DWG, takže je druhý program znovu získá. Soubory DXF je neuchovávají: CadCraft je zapisuje jen do DWG a při uložení jako DXF to oznámí.
- Vykresleno: ploché plochy a plochy na válcích, kuželech, koulích, torusech a jednoduchých splinových plochách, s přímými, kulatými a splinovými hranami. Plocha na jakémkoli jiném druhu povrchu nebo plocha, kterou CadCraft nedokáže rozložit, se neodhaduje: je vynechána a uvedena v seznamu, například „Zatím nevykresleno (3D tělesa): 2 plochy na spline-surface (sweepsur), povrch zatím nevykreslený.“
- Tělesa uvnitř bloků zatím nejsou zobrazena; „O tomto souboru“ je počítá.

Zakřivené plochy se vykreslují jako malé ploché kousky, asi po 7.5°, takže zakřivené těleso zblízka vypadá trochu fasetovaně.

## Uložení a export

Uložení zachová 3D model v DWG i v DXF. Každá plocha se zapíše jako 3D plocha na vrstvu `CC-3D`, takže ji ostatní programy zobrazí, a CadCraft si v souboru uchová i vlastní přesnou kopii, kterou při dalším otevření výkresu načte zpět i s 3D pohledem tak, jak byl (kamera, promítání a vizuální styl). 3D plochy z jiných programů přicházejí na kartu 3D jako volné plochy, sdružené do jedné skupiny. 3D plocha uvnitř bloku se objeví jednou za každý odkaz na tento blok v modelu, umístěná a otočená jako odkaz; v samotném bloku a na listu se 3D plocha kreslí plochá, jako svůj obrys.

{{ui:Exportovat}} ve skupině 3D stáhne samotná tělesa: GLB pro prohlížeče a web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}), nebo STL pro 3D tisk, v milimetrech ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} se zeptá, který.

:::note
3D model je ve skutečné velikosti. Výkres bez jednotek se počítá jako milimetry, takže `1000` je jeden metr. Změníte-li později jednotky výkresu (Vlastnosti, když nic není vybráno), tělesa se s nimi změní měřítko, aby zůstala na výkresu, a historie to uvede. Jedno {{key:Mod+Z}} vrátí změnu jednotek i změnu měřítka najednou.
:::
