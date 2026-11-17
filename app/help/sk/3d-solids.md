---
title: Model v 3D
summary: Pozrite si výkres v 3D na karte 3D a z neho vytvorte jednoduché telesá: vytiahnuť (so zúžením alebo po dráhe), rotačné teleso, tlačiť a ťahať plochy, kvádre, valce a kliny, spájať, odčítať a prieniky, potom ich presúvať, kopírovať, otáčať a mazať a umiestniť ploché 2D pohľady na nich na list.
keywords: 3d, tri d, teleso, telesá, 3dsolid, oblasť, teleso, acis, sat, sab, telesá z iných programov, otvoriť 3D výkres, vytiahnuť, ext, rotačné teleso, rev, ťahanie po dráhe, sweep, zúženie, dráha, presspull, tlač ťah, push pull, kváder, box, valec, cyl, klin, wedge, 3dorbit, otáčanie, pohľad, vscurrent, vizuálny štýl, tieňovaný, skrytá čiara, drôtený, röntgen, xray, izo, perspektíva, rovnobežné, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kocka pohľadu, zjednotenie, uni, odčítanie, su, prienik, in, boolovský, skombinovať, spojiť telesá, viewbase, flatshot, plochý pohľad, 2D pohľad, pohľad výkresu, pohľad spredu, pohľad zhora, bočný pohľad, skryté čiary
from: 13060e71
---

## Čo vytvoríte

Pôdorys miestnosti 1000 × 600 vytiahnutý do bloku vysokého 400, jedna plocha vytiahnutá nahor a vedľa nej valec. Potom uložte model spolu s výkresom a exportujte ho pre 3D prehliadač alebo tlačiareň.

Karta {{ui:3D}} je vedľa karty {{ui:Model}} pod výkresom. Zobrazuje výkres z priestoru modelu, ležiaci na zemi vo farbách svojich hladín (hladiny, ktoré sú vypnuté alebo zmrazené, zostávajú skryté), a telesá, ktoré vytvoríte. Pri prvom otvorení sa načíta 3D pohľad; potom sa prepína okamžite.

## Vytiahnutie tvaru

1. Na karte {{ui:Model}} napíšte `REC` a stlačte {{key:Enter}}. Napíšte `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Kliknite na kartu {{ui:3D}}. Panel nástrojov zobrazuje skupinu {{ui:3D}} namiesto skupín pre výkres.
3. Kliknite na {{ui:Vytiahnuť}} (alebo napíšte {{cmd:EXTRUDE}}, `EXT`). Kliknite dovnútra obdĺžnika a potom stlačte {{key:Enter}}.
4. Napíšte `400` a stlačte {{key:Enter}}. História hlási „Vytiahnuté: 1 teleso, výška 400“ aj s jeho objemom.

Uzavreté polylinie (vrátane oblúkov), obdĺžniky, mnohouholníky, kružnice a elipsy sa dajú vytiahnuť; čiary a otvorené polylinie nie a história uvedie dôvod. Môžete tiež najprv vybrať tvary na karte {{ui:Model}} a potom tam napísať `EXTRUDE`. Namiesto zadania výšky môžete kliknúť: obrys sa pohybuje za kurzorom nahor a nadol. Záporná výška ide nadol. Pri výzve na výšku napíšte `D`, ak chcete po vytiahnutí zmazať 2D tvary (ďalšie `D` ich ponechá).

Pri výzve na výšku `T` (Uhol zúženia) pýta uhol v stupňoch: bočné steny sa naklonia dovnútra, takže hore je teleso menšie (záporný uhol ho zväčší). Príliš strmý uhol pre daný tvar sa odmietne. `P` (Dráha) namiesto toho ťahá tvary po dráhe (pozri nižšie).

## Rotačné teleso a ťahanie

- {{cmd:REVOLVE}} (`REV`, alebo {{ui:Viac}} › {{ui:Rotačné teleso okolo osi}}): vyberte uzavreté tvary, stlačte {{key:Enter}}, potom kliknite na dva konce osi (alebo napíšte `X` či `Y` pre os výkresu cez 0,0), potom zadajte uhol alebo stlačte {{key:Enter}} pre celé otočenie. Tvar sa otočí okolo osi a vystúpi zo zeme: nakreslite polovicu obrysu vázy vedľa čiary a otočte ho okolo tejto čiary. Tvar sa môže dotýkať osi, ale nesmie ju pretínať. Úplné otočenie má 48 krokov.
- {{cmd:SWEEP}} (alebo {{ui:Viac}} › {{ui:Ťahanie po dráhe}}, alebo `P` pri výzve na výšku v EXTRUDE): vyberte uzavreté tvary (profil), stlačte {{key:Enter}}, potom kliknite na dráhu: čiaru, polylinie, oblúk, kružnicu alebo elipsu. Profil sa postaví kolmo na dráhu, jeho stred na nej, a beží po nej; rohy sú zošikmené a uzavretá dráha vytvorí prstenec. Malý obdĺžnik ťahaný po obryse miestnosti vytvorí soklu; kružnica po polylinii vytvorí potrubie.

## Ťahanie a tlačenie plochy

1. Kliknite na {{ui:Tlač/ťah}} (alebo napíšte {{cmd:PRESSPULL}}).
2. Kliknite na hornú plochu bloku.
3. Napíšte `100` a stlačte {{key:Enter}}, alebo pohnite kurzorom a kliknite. Blok bude vysoký 500.

## Kvádre, valce a kliny

- {{cmd:BOX}}: kliknite alebo napíšte dva rohy, potom výšku.
- {{cmd:CYLINDER}} (`CYL`): stred, polomer, potom výška. Valce a vytiahnuté kružnice majú 48 strán, tieňované hladko.
- {{cmd:WEDGE}} (`WE`): dva rohy a výška. Na prvom rohu má plnú výšku a na druhom klesá na nulu.

Na karte 3D kliknutie zasiahne plochu alebo hranu pod kurzorom, inak zem, takže kváder môže stáť na inom telese.

## Presúvanie, kopírovanie, otáčanie a mazanie telies

Na karte 3D kliknutie vyberie teleso; ťahajte zľava doprava pre okno, sprava doľava pre prekríženie. Potom:

- {{cmd:MOVE}}: kliknite na základný bod a na miesto, kam má ísť, alebo napíšte `<100,0,0>` (alebo `@100,0`) pre vzdialenosť pozdĺž X, Y a Z.
- {{cmd:COPY}}: to isté, pôvodné teleso zostane.
- {{cmd:ROTATE}}: napíšte uhol (otáča sa okolo stredu výberu, okolo Z), alebo kliknite na stred, začiatočný bod a uhol.
- {{cmd:ERASE}} alebo {{key:Delete}}.

## Spájanie, odčítanie a prienik telies

Otvorte {{ui:Viac}} na paneli nástrojov 3D, alebo napíšte príkaz:

- {{cmd:UNION}} (`UNI`): vyberte telesá a stlačte {{key:Enter}}: stanú sa jedným telesom.
- {{cmd:SUBTRACT}} (`SU`): vyberte telesá, ktoré chcete ponechať, a stlačte {{key:Enter}}, potom tie, ktoré chcete odobrať, a stlačte {{key:Enter}}. Diera cez blok: nakreslite valec cez neho a potom odčítajte valec.
- {{cmd:INTERSECT}} (`IN`): vyberte telesá a stlačte {{key:Enter}}: zostane len to, čo majú všetky spoločné.

História hlási objem výsledku. Každá operácia je jeden krok späť. Prvá, ktorú spustíte, načíta booleovský engine 3D (asi 0.5 MB; je zahrnutý v {{ui:Uložiť na offline použitie}}). Kombinovať možno len uzavreté telesá: teleso s otvorenými hranami (z voľných 3D plôch iného programu) je odmietnuté s uvedením dôvodu. Výsledok je jedno teleso; zakrivené plochy zostávajú zložené z rovných fazet, ako bol valec.

Dvojitým kliknutím na teleso upravíte jeho plochy a hrany samostatne; {{key:Esc}} ho zavrie. Každá zmena v 3D je jeden krok späť v tej istej histórii ako výkres: {{key:Mod+Z}} vráti späť posledné, čo ste urobili na ktorejkoľvek karte.

## Ploché pohľady na liste

1. Otvorte kartu listu (alebo zostaňte na {{ui:Model}}) a napíšte {{cmd:VIEWBASE}} (alebo `FLATSHOT`).
2. Vyberte pohľad: {{key:Enter}} pre predný, alebo `T` (zhora), `R` (sprava), `L` (zľava), `BA` (zozadu), `BO` (zdola), `I` (izometrický).
3. {{key:Enter}} zobrazí skryté čiary, prerušované; `H` ich vynechá.
4. {{key:Enter}} použije mierku, ktorú navrhuje CadCraft: na liste najväčšiu štandardnú mierku (napríklad 1:20), pri ktorej sa pohľad zmestí pod polovicu papiera. Alebo napíšte jednu: `1:50`, `2:1`.
5. Kliknite alebo napíšte, kam má ísť stred pohľadu.

Pohľad je jeden odkaz na blok, `VIEW-FRONT-1` a podobne: viditeľné hrany sú na hladine VIEW-VISIBLE (0.5 mm), skryté na VIEW-HIDDEN (prerušované, 0.25 mm). Presúvajte ho, kótujte a vykreslite ako každý iný výkres. Je to obrázok telies v čase, keď ste ho vytvorili: po ich zmene zmažte pohľad a spustite {{cmd:VIEWBASE}} znova. Pre ďalšie pohľady ho spustite raz pre každý pohľad.

## Obzeranie sa

Ťahajte kolieskom na otáčanie, {{key:Shift}} + ťah kolieskom alebo pravým tlačidlom na posun a otáčajte koliesko na zväčšenie v mieste kurzora. Na touchpade dva prsty otáčajú a štipnutie zväčšuje. Pravé kliknutie bez ťahania je {{key:Enter}}, ako na ostatných kartách. `3DORBIT` nechá ľavé tlačidlo otáčať, kým nestlačíte {{key:Enter}} alebo {{key:Esc}}.

- {{ui:Pohľady}} (alebo {{cmd:VIEW}}): Izo, Zhora, Zdola, Spredu, Zozadu, Zľava, Sprava, Perspektíva alebo Rovnobežné, a Zväčšiť na všetko.
- {{ui:Štýl}} (alebo {{cmd:VSCURRENT}}, `VS`): Tieňovaný, Tieňovaný s hranami, Skrytá čiara, Drôtený alebo Röntgen.

Body, na ktoré kliknete, sa prichytávajú k telesám (rohy, hrany, plochy) a k 2D výkresu na zemi: ku koncom a stredom jeho čiar a oblúkov a k bodom pozdĺž nich. 2D čiary sa na karte 3D nikdy nevyberajú. Keď príkaz žiada 2D objekty (EXTRUDE, REVOLVE, SWEEP), kliknutie vyberie jeden, ťahanie zľava doprava zoberie to, čo je celé vnútri okna, a ťahanie sprava doľava zoberie to, čo prekríži, ako na karte {{ui:Model}}.

V pravom hornom rohu karty 3D je kocka pohľadu: kliknutím na plochu, hranu alebo roh sa pozriete odtiaľ, ťahaním ju otáčate a tlačidlo domčeka vráti izo pohľad. To je {{ui:Automaticky}}, začiatok {{ui:Indikátor rohu}} v [Nastavenia CadCraft](topic:settings). Ak je nastavené na {{ui:Kocka pohľadu}}, karta {{ui:Model}} zobrazuje tiež kocku, pozerajúcu zhora; kliknutie na inú stranu otvorí kartu 3D pohľadom odtiaľ. Ak je nastavené na {{ui:Ikona osí}}, obe karty zobrazujú namiesto toho značku osí.

## Telesá z iných programov

Výkres z iného programu môže obsahovať 3D telesá, oblasti a telesá (3DSOLID, REGION, BODY: iný program uchováva ich tvar ako údaje ACIS). CadCraft zobrazuje tie v priestore modelu na karte 3D, vo farbe ich hladiny a s ich vlastnými hranami, pri prvom otvorení karty; príkazový riadok potom uvedie, koľko ich bolo nakreslených.

- Zobrazujú sa tak, ako sú: nemôžete ich vybrať, presunúť ani zmeniť. Hladiny vypnuté alebo zmrazené ich skrývajú.
- Uloženie ako DWG zapíše každé späť nezmenené, v ľubovoľnej verzii DWG, takže ich iný program dostane znova. Súbory DXF ich neuchovávajú: CadCraft ich zapisuje len do DWG a pri uložení ako DXF to oznámi.
- Nakreslené sú ploché plochy a plochy na valcoch, kužeľoch, guľach, torusoch a jednoduchých spline plochách, s priamymi, oblými a spline hranami. Plocha na inom type plochy alebo taká, ktorú CadCraft nedokáže rozložiť, sa neodhaduje: vynechá sa a uvedie sa v zozname, napríklad „Zatiaľ nenakreslené (3D telesá): 2 plochy na spline-surface (sweepsur), plocha zatiaľ nie je nakreslená.“
- Telesá vnútri blokov sa zatiaľ nezobrazujú; „O tomto súbore“ ich započíta.

Zakrivené plochy sa kreslia ako malé ploché kúsky, asi 7.5° od seba, takže zakrivené teleso z blízka vyzerá trochu fasetovane.

## Uloženie a export

Uloženie zachováva 3D model v DWG aj v DXF. Každá plocha sa zapíše ako 3D plocha na hladine `CC-3D`, takže ostatné programy zobrazujú telesá, a CadCraft si v súbore ponechá vlastnú presnú kópiu, ktorú načíta späť pri ďalšom otvorení výkresu, s 3D pohľadom tak, ako bol (kamera, projekcia a vizuálny štýl). 3D plochy z iných programov sa na karte 3D objavia ako voľné plochy, zoskupené ako jedna skupina. 3D plocha vnútri bloku sa načíta raz pre každý odkaz na tento blok v modeli, umiestnená a otočená ako odkaz; v samotnom bloku a na liste sa 3D plocha kreslí plochá, ako jej obrys.

{{ui:Exportovať}} v skupine 3D stiahne samotné telesá: GLB pre prehliadače a web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) alebo STL pre 3D tlač, v milimetroch ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} sa spýta, ktorý formát chcete.

:::note
Model v 3D je v skutočnej veľkosti. Výkres bez jednotiek sa počíta ako milimetre, takže `1000` je jeden meter. Ak neskôr zmeníte jednotky výkresu ({{ui:Vlastnosti}}, keď nič nie je vybrané), telesá sa zmenia mierkou spolu s nimi, aby zostali na výkrese, a história to uvedie. Jedno {{key:Mod+Z}} vráti späť zmenu jednotiek aj zmenu mierky spolu.
:::
