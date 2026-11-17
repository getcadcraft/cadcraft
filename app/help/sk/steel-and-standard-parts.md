---
title: Umiestnenie oceľových profilov a normovaných súčiastok
summary: Nakreslite oceľové profily, výškové body a 3D prvky z uverejnených tabuliek profilov, umiestnite skrutky, matice, podložky, kolíky, ložiská, perá a ozubené kolesá podľa ich noriem a vypíšte ich do zoznamu súčiastok.
keywords: oceľ, profil, prierez, tvar, tvar W, širokopásový nosník, I-nosník, U-profil, uholník, HSS, rúra, potrubie, pipe, ipe, hea, heb, upn, nosník, stĺp, prvok, výškový bod, aisc, en 10365, skrutka, šróba, matica, podložka, kolík, ložisko, pero, drážka pre pero, ozubené koleso, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, normované súčiastky, zoznam súčiastok, kusovník, bom, steelmember, partslist
from: 547c1048
---

Karta {{ui:Štandardný}} knižnice má dva druhy položiek, vytvorené tu z uverejnených tabuliek (nič sa nesťahuje):

- **Oceľové profily**: 1,335 veľkostí. W, S, C, L, HSS a Pipe z AISC Shapes Database v16.0; IPE, HEA, HEB a UPN z EN 10365:2017. DetailCraft používa tú istú tabuľku.
- **Normované súčiastky**: skrutky so šesťhrannou hlavou (ISO 4017), šesťhranné skrutky (ISO 4014), šesťhranné matice (ISO 4032), ploché podložky (ISO 7089), palcové šesťhranné skrutky a matice (ASME B18.2.1 a B18.2.2), valcové kolíky (ISO 2338), hlboké drážkové guľôčkové ložiská (ISO 15), rovnobežné perá (DIN 6885-1) a čelné ozubené kolesá (moduly z ISO 54).

Všetko tu je zdieľané pod licenciou CC0: použite to na čokoľvek, uvedenie autora nie je potrebné.

## Umiestnenie oceľového profilu

1. Otvorte knižnicu ({{ui:Knižnica}} v skupine Bloky alebo napíšte `LIB`) a kliknite na kartu {{ui:Štandardný}}.
2. Vyberte rodinu v prvom zozname, napríklad {{ui:Profily W}}. Do vyhľadávacieho poľa napíšte, aby ste zúžili veľkosti: `W12` ukáže všetky W12.
3. V {{ui:Umiestniť ako}} vyberte:
   - {{ui:Rez}}: priečny rez so stredom v bode vloženia.
   - {{ui:Výškový bod}}: prvok zobrazený zboku, dlhý podľa {{ui:Dĺžka (mm)}}, od stredu jeho ľavého konca.
   - {{ui:3D prvok}}: teleso na karte 3D (nižšie).
4. Kliknite na {{ui:Umiestniť}} na karte veľkosti a potom kliknite, kam má ísť, ako pri každej položke knižnice.

Rez alebo výškový bod sa stane blokom. Jeho atribúty nesú veľkosť, tabuľku, z ktorej pochádza, dĺžku (pri výškovom bode) a materiál, ktorý môžete doplniť.

:::note
Profily S, žľaby a UPN sa kreslia s rovnobežnými prírubami strednej hrúbky a uholníky s pravouhlými rohmi: skutočné príruby sú šikmé a rohy zaoblené. W, IPE, HEA a HEB majú koreňové zaoblenia a HSS polomery rohov.
:::

## Vytvorenie 3D prvku

Zvoľte {{ui:3D prvok}} a kliknite na {{ui:Umiestniť}}, alebo napíšte {{cmd:STEELMEMBER}} (`SMEMBER`) na riadku príkazov:

1. Pri `Veľkosť profilu` stlačte {{key:Enter}} pre zobrazenú veľkosť, alebo napíšte inú, napríklad `HSS6x6x1/4` alebo `IPE300`.
2. Kliknite na počiatočný bod, potom na koncový bod. Prvok je medzi nimi a stojí na zemi.
3. Pre stĺp napíšte `C`, kliknite na jeho základný bod a napíšte jeho výšku.

Prvok je uzavreté teleso na karte 3D. Presúvajte alebo kopírujte ho tam ako každé iné teleso. {{key:Mod+Z}} ho zase odstráni.

## Umiestnenie normovanej súčiastky

1. Na karte {{ui:Štandardný}} vyberte rodinu, napríklad {{ui:Skrutky so šesťhrannou hlavou}}.
2. Pri skrutke, šróbe, kolíku alebo perie napíšte ich {{ui:Dĺžka (mm)}} (palce pri palcových rodinách). Pri ozubenom kolese napíšte {{ui:Zuby}}, {{ui:Šírka ozubenia (mm)}} a {{ui:Otvor (mm)}}. Nechajte pole prázdne pre obvyklú hodnotu, ktorá sa v ňom zobrazuje.
3. Kliknite na {{ui:Umiestniť}} na veľkosti a kliknite, kam má ísť.

Skrutky, šróby a kolíky sa kreslia zboku, s nosnou plochou hlavy v bode vloženia; matice, podložky, ložiská a ozubené kolesá sa kreslia naplocho; perá zhora. Závity sa kreslia obvyklým spôsobom: koreň tenkou čiarou, koniec závitu hrubou. Ozubené kolesá sa kreslia ako kružnica hlavy, valivá kružnica a kružnica päty, nie zub po zube.

Blok každej súčiastky nesie ako atribúty svoj typ, normu, veľkosť, dĺžku a materiál a svoju hmotnosť z menovitého tvaru z ocele. Materiál zmeníte na paneli {{ui:Vlastnosti}}.

Tie isté súčiastky sú v knižnici aj ako položky a PartCraft ich otvorí ako parametrické súčiastky ({{ui:Normovaná súčiastka}} v jej skupine Súbor).

## Zostavenie zoznamu súčiastok

- V knižnici kliknite na {{ui:Zoznam súčiastok}}: každá normovaná súčiastka a oceľový profil vo výkrese, zoskupené podľa typu, normy, veľkosti, dĺžky a materiálu, s množstvom a číslami položiek. {{ui:Stiahnuť CSV}} ho uloží pre tabuľkový editor.
- Ak ho chcete nakresliť, napíšte {{cmd:PARTSLIST}} (`PLIST`), kliknite na ľavý horný roh tabuľky a stlačte {{key:Enter}} pre obvyklú výšku textu, alebo napíšte inú.

Zoznam sa číta z atribútov blokov, takže je stále správny aj po uložení výkresu do DWG alebo DXF a jeho opätovnom otvorení.

## Časté chyby

- **"No steel section is called …"**: napíšte veľkosť tak, ako ju karta {{ui:Štandardný}} uvádza: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Prvok je na karte 3D, nie v pôdoryse.** {{cmd:STEELMEMBER}} vytvorí teleso; otvorte kartu 3D a uvidíte ho. Aby ste oceľ ukázali aj v pôdoryse, umiestnite aj {{ui:Rez}} alebo {{ui:Výškový bod}}.
- **Dĺžka mimo rozsahu.** Skrutka musí byť dlhšia ako jej hlava a kľúč dlhší, než je široký. Riadok pod kartami hovorí, ktorá hodnota bola odmietnutá.
