---
title: Myš, touchpad a dotyk
summary: Ako v CadCraft priblížiť, posúvať, kliknúť pravým tlačidlom a vybrať body pomocou myši s kolieskom, touchpadu na Macu alebo PC, alebo dotykovej obrazovky, a čo sa líši medzi prehliadačmi.
keywords: touchpad, magic mouse, dotyk, tablet, ipad, posun, zväčšenie, roztiahnutie, pravé kliknutie, dvojprstové, stredné tlačidlo, prehliadač, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft je navrhnutý pre myš s kolieskom. Všetko funguje aj s touchpadom, len si treba zvyknúť na pár návykov. Dotykové obrazovky sa dajú použiť na výber, s obmedzeniami.

## Myš s kolieskom

- **Priblíženie:** otočte kolieskom. Výkres sa priblíži okolo krížika, takže ukazujte na to, čo chcete vidieť.
- **Posun:** podržte koliesko stlačené a ťahajte, alebo ťahajte pravým tlačidlom.
- **Zobraziť všetko:** dvakrát kliknite na koliesko, alebo kliknite na {{ui:Rozsah}}.
- **Späť na predchádzajúci pohľad:** kliknite na {{ui:Predchádzajúci}} v skupine Zobrazenie, alebo napíšte `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Séria krokov kolieska sa počíta ako jeden pohľad, takže jedno {{ui:Predchádzajúci}} ho vráti. Pohľady, ku ktorým sa vraciate, uložte pomocou {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** kliknite pravým tlačidlom.

## Touchpad

:::mac
- **Posun:** pohybujte dvoma prstami po touchpade ľubovoľným smerom: výkres sa hýbe spolu s prstami. Môžete tiež ťahať s podrženým dvojprstovým kliknutím (ťah pravým tlačidlom).
- **Priblíženie:** roztiahnite dva prsty. Priblíženie sleduje krížik.
- **Pravé kliknutie (Enter):** kliknite dvoma prstami. Ak to nefunguje, zapnite „Sekundárne kliknutie“ v **Nastaveniach systému**, potom v **Trackpad**. Kliknutie s klávesom Control môže v CadCraft fungovať ako bežné kliknutie, nie ako pravé, preto použite dvojprstové kliknutie.
- **Zväčšenie oblasti:** kliknite na {{ui:Okno}} v skupine Zobrazenie a kliknite na dva rohy.
:::

:::windows linux
- **Posun:** pohybujte dvoma prstami po touchpade ľubovoľným smerom: výkres sa hýbe spolu s prstami. Môžete tiež ťahať s podrženým pravým tlačidlom.
- **Priblíženie:** roztiahnite dva prsty. Priblíženie sleduje krížik.
- **Pravé kliknutie (Enter):** kliknite dvoma prstami, alebo kliknite do pravého dolného rohu touchpadu, podľa nastavení touchpadu.
- **Zväčšenie oblasti:** kliknite na {{ui:Okno}} v skupine Zobrazenie a kliknite na dva rohy.
:::

Podržanie {{key:Space}} a ťahanie **neposúva** výkres v CadCraft: {{key:Space}} je Enter.

Koliesko myši stále priblíži, po jednom kroku. Touchpad, ktorý posiela posúvanie v celých krokoch ako koliesko, priblíži dvojprstovým posúvaním namiesto posunu: oddiaľte, namierte na oblasť, ktorú chcete, a znova priblížte. Karta 3D si zachováva vlastné pohyby touchpadu (pozri [Model v 3D](topic:3d-solids#look-around)).

## Dotykové obrazovky a tablety

CadCraft číta prst ako kliknutie myšou:

- Klepnutie vyberie bod alebo objekt, alebo vyberie.
- Ťahanie prstom po prázdnom mieste nakreslí laso (ak sa najprv pohnete doprava, okno; ak doľava, prekríženie; pozri [Výber lasom](topic:lasso-selection)).
- V {{cmd:TRIM}} a {{cmd:EXTEND}} ťahanie prstom cez kusy ich všetky orezáva alebo predlžuje.
- Ťahanie úchytu vybraného objektu presunie úchyt (úchyty a výberový štvorček sú pre prst väčšie).
- **Roztiahnutie** dvoma prstami priblíži okolo bodu medzi nimi; posunutie dvoch prstov spolu **posunie** pohľad. Druhý prst zruší to, čo začal prvý, takže roztiahnutie nikdy nezanechá stopu.
- **Dlhé stlačenie** (podržte nehybne asi pol sekundy) je pravé kliknutie: {{key:Enter}}. Ukončí príkaz, dokončí výber alebo zopakuje posledný príkaz.

Pod príkazovým riadkom sa zobrazí **riadok klávesov**: {{ui:Esc}}, {{ui:Späť}}, {{ui:Znova}}, znaky, ktoré tablet skrýva (`@` `,` `<` `'` `"` `-`), {{ui:Uchopenie}}, {{ui:Ortho}}, tlačidlo klávesnice a veľké {{ui:Enter}}. Klepnutím na tlačidlo klávesnice (alebo na príkazový riadok) napíšete príkaz alebo číslo.

Dotyková obrazovka nemá kurzor nad objektmi, takže značky uchopenia sa zobrazia len tam, kde je prst.

:::touch
Používate dotykovú obrazovku. Pri čomkoľvek viac než rýchlom pozretí sa s pripojenou klávesnicou a myšou alebo touchpadom CadCraft používa oveľa ľahšie.
:::

## Prehliadače

CadCraft funguje rovnako v Chrome, Edge, Firefox a Safari, na Macu, Windows a Linuxe. Rozdiely sú malé:

| Téma | Čo treba vedieť |
|---|---|
| Otváranie DWG | Veľké výkresy sa čítajú niekoľko sekúnd v každom prehliadači; medzitým riadok stavu zobrazuje „Čítanie …“ |
| Sťahovanie | Každý prehliadač rozhodne, kam sa súbory sťahujú a či sa najprv opýta; pozri [Prehliadače a počítače](common:browsers) |
| Otvoriť na tlač | Otvorí PDF na novej karte. Ak prehliadač blokuje vyskakovacie okná, CadCraft namiesto toho stiahne PDF |
| F7 | Firefox môže ponúknuť prehliadanie s kurzorom; zvoľte Nie |
| Odchod z neuložených zmien | Každý prehliadač zobrazí vlastnú otázku „Opustiť stránku?“, ktorú CadCraft nemôže zmeniť |

:::safari
V Safari sa PDF otvorené cez {{ui:Otvoriť na tlač}} môže zobraziť na karte bez tlače: použite **Súbor**, potom **Tlačiť**.
:::

:::firefox
Firefox sa môže pýtať, čo urobiť s každým sťahovaním. Zvoľte uloženie súboru, alebo to raz zmeňte v nastaveniach Firefoxu v časti Sťahovanie.
:::
