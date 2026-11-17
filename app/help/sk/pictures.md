---
title: Obrázky vo výkrese
summary: Vložte obrázok PNG alebo JPEG, orežte ho na obdĺžnik alebo mnohouholník, zobrazte obrázky, ktoré DWG používa, a vykreslite ich ostro.
keywords: pastearea, parea, kopírovaná oblasť, copy area, markupcraft, skutočná veľkosť, prekrytie, ole, ole2frame, vložený objekt, vložiť obrázok, vložiť snímku obrazovky, ctrl+v, obrázok zo schránky, snímka obrazovky, obrázok, imageattach, iat, imageclip, orezanie, png, jpeg, jpg, logo, fotografia, rastrový, imagedef, xref, vykreslenie, pdf, rozlíšenie
from: 4025ac97
---

## Čo vytvoríte

Logo firmy umiestnené v popisovom poli, orezané na časť, ktorú chcete, a PDF, v ktorom sa vytlačí vo vlastnom rozlíšení.

## Umiestnenie obrázka

1. Zadajte {{cmd:IMAGEATTACH}} (alebo `IAT`) a stlačte {{key:Enter}}. Vyberte súbor PNG alebo JPEG.
2. `Zadajte ľavý dolný roh`: kliknite alebo zadajte bod.
3. `Zadajte jeho šírku`: šírka v jednotkách výkresu. {{key:Enter}} ponechá ponúkanú šírku: jedna jednotka na pixel, alebo šírka, ktorú ste tomuto súboru zadali naposledy (výzva uvedie, ktorá).
4. `Zadajte uhol otočenia`: {{key:Enter}} pre žiadne.

Obrázok je jeden objekt: vyberte ho podľa jeho rámčeka a presúvajte, kopírujte, otáčajte, mierkujte alebo mažte ako každý blok.

:::note
Súbor obrázka zostane s výkresom, kým je otvorený. Uložený DWG uvádza názov súboru, ako to robia iné programy; pixely neobsahuje. Uchovajte obrázok vedľa výkresu.
:::

## Vloženie snímky obrazovky alebo skopírovaného obrázka

1. Skopírujte obrázok (snímku obrazovky pomocou {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=váš nástroj na snímky obrazovky}},
   alebo Kopírovať obrázok v inom programe či prehliadači).
2. Ukážte, kam má obrázok na výkrese ísť, a stlačte {{key:Mod+V}}.

Ľavý dolný roh obrázka skončí pri ukazovateli (alebo v strede zobrazenia), šírka je 40 % toho, čo vidíte; presúvajte, mierkujte a orezávajte ho ako každý obrázok. Názov je názov výkresu s príponou `-picture-1.png` (potom `-2`, …) a história to uvedie. {{ui:Upraviť}} › {{ui:Viac}} › {{ui:Prilepiť obrázok}} robí to isté z ponuky (prehliadač sa môže najprv opýtať).

DWG uchováva iba názov súboru obrázka, takže uloženie výkresu uloží aj obrázok ako samostatný súbor. Oba držte v tom istom priečinku: výkres odtiaľ zobrazí obrázok. V prehliadači je to druhé stiahnutie a história to uvedie. Ak je v schránke iba objekty CadCraft, {{key:Mod+V}} vloží tie, ako predtým.

## Vloženie oblasti skopírovanej v MarkupCraft

{{ui:Kopírovať oblasť}} v MarkupCraft skopíruje časť listu ako obrázok, ktorý pozná svoju veľkosť. CadCraft ju vloží v tejto veľkosti.

1. V MarkupCraft skopírujte oblasť (obdĺžnik, kruh alebo voľný tvar; {{ui:Kopírovať ako prekrytie}}, ak chcete cez ňu vidieť svoj výkres).
2. V CadCraft stlačte {{key:Mod+V}}, alebo zadajte {{cmd:PASTEAREA}} (alebo `PAREA`), alebo zvoľte {{ui:Upraviť}} › {{ui:Viac}} › {{ui:Prilepiť skopírovanú oblasť}}.
3. `Zadajte ľavý dolný roh skopírovanej oblasti`: kliknite alebo zadajte bod. Rámček veľkosti oblasti sa pohybuje za ukazovateľom.

Aká veľká bude výsledná oblasť:

- **List mal mierku výkresu:** v skutočnej veľkosti, v jednotkách výkresu (detail 1:50 schodiska dlhého 2 m má dĺžku 2 m vo výkrese v metroch, 78.74 vo výkrese v palcoch). Nič viac sa nepýta.
- **List nemal mierku:** CadCraft oznámi jeho veľkosť na papieri a opýta sa na mierku: zadajte `100` pre list 1:100, stlačte {{key:Enter}} pre veľkosť papiera, alebo zadajte `P`, kliknite na dva body na vloženom obrázku a zadajte, aká je ich skutočná vzdialenosť (ako to robí {{cmd:SCANSCALE}}). Ľavý dolný roh zostane tam, kde ste ho položili.

Výkres bez jednotiek prijme milimetre, rovnako ako PDF podklad. Prekrytie zachová svoj papier priehľadný a začne taký zablednutý, aký bol pri kopírovaní; mimo kruhu alebo voľného tvaru je tiež priehľadné. Vložená oblasť je obrázok ako každý iný: presúvajte, otáčajte, mierkujte, orezávajte alebo mažte, a celé vloženie je jeden krok späť. Uložené ako DWG je to IMAGE s jeho zablednutím a priehľadnosťou.

{{key:Mod+V}} vloží oblasť, keď je obrázok v schránke z tejto oblasti, alebo keď bola oblasť skopírovaná po čomkoľvek, čo ste skopírovali v CadCraft (a za posledných 6 hodín). Inak sa vloží ako predtým. {{cmd:PASTEAREA}} vloží naposledy skopírovanú oblasť kedykoľvek.

## Zobrazenie obrázkov, ktoré DWG používa

DWG ukladá iba to, kde boli jeho obrázky, preto CadCraft zobrazí každý ako rámček s názvom súboru.

1. Zadajte {{cmd:IMAGE}} (alebo `IM`). Príkazový riadok uvedie každý súbor obrázka a to, či sa zobrazuje.
2. Vyberte súbory (niekoľko naraz). Súbor, ktorého názov obsahuje ten, ktorý výkres uvádza, sa tiež počíta, lebo exporty často pridávajú predponu projektu.

## Orezanie obrázka

1. Zadajte {{cmd:IMAGECLIP}} (alebo `ICL`) a vyberte obrázok.
2. Zvoľte `R` a kliknite na dva rohy, alebo `P` a kliknite na body mnohouholníka, potom {{key:Enter}}. `D` odstráni orezanie.

## Vykreslenie obrázkov

Obrázky idú do PDF ako obrázky, vo vlastnom rozlíšení a pod čiarami. V dialógu {{ui:Vykresliť}} môže {{ui:Obrázky}} obmedziť ich na 600, 300 alebo 150 dpi, aby bol súbor menší. JPEG sa vloží tak, ako je.

## Čo sa kde ukladá

| Formát | Obrázky |
|---|---|
| DWG (každá verzia) | Ako obrázky (IMAGE), s ich orezaním |
| DXF | Ako ich rámčeky s názvom súboru; uloženie to uvedie |

## Objekty z iných programov (OLE)

Výkres môže obsahovať objekty vytvorené iným programom, napríklad obrázok z maľovacieho programu alebo oblasť tabuľky (objekty OLE). CadCraft ich nespúšťa ani neupravuje a nemôže vkladať nové. Robí toto:

- **V DXF** sa objekt OLE otvorí ako rámček. Ak objekt uložil svoj obrázok a ten je bitmapa, obrázok sa nakreslí vnútri rámčeka; inak rámček nesie popis typu objektu, napríklad "Microsoft Excel Worksheet (OLE)". Rámček môžete presúvať, kopírovať a mazať ako blok. {{cmd:SAVEAS}} do DXF 2000 ho zapíše znova ako objekt OLE s nezmenenými dátami.
- **V DWG** sa objekty zachovajú a pri uložení ako DWG sa zapíšu späť, bajt po bajte, ale **nezobrazia sa**: DWG uchováva miesto objektu vo svojich vlastných dátach a CadCraft ich zatiaľ nečíta. História uvedie, koľko ich bolo zachovaných. Zadajte {{cmd:OLELIST}}, aby ste videli, čo sú (typ, veľkosť, či každý uložil obrázok), a aby ste umiestnili kópiu obrázka tam, kde chcete: **Umiestniť** sa opýta na číslo, ľavý dolný roh a šírku a nakreslí rámček s obrázkom v ňom. Táto kópia je rámček, ktorý môžete presúvať alebo mazať; samotný objekt zostane vo výkrese a pri uložení sa stále zapíše späť.
- Objekt, ktorý prišiel z DXF, sa v DWG uloží iba ako svoj rámček a popis; história to uvedie. Uložte ako DXF 2000, aby ste zachovali samotný objekt.
- Obrázky typu metasúbor (to, čo ukladá veľa programov) sa nekreslia: namiesto nich sa zobrazí rámček a popis.

## Časté chyby

| Vidíte | Dôvod | Náprava |
|---|---|---|
| Rámček s názvom súboru | CadCraft nemá súbor | {{cmd:IMAGE}}, potom vyberte súbor |
| "Toto nie je obrázok" | Vybraný objekt nie je obrázok | Vyberte rámček obrázka |
