---
title: Prichytenie na body objektov
summary: Pomocou uchopení objektov, ortogonálneho režimu a mriežky vyberte myšou presné koncové body, stredy a priesečníky.
keywords: osnap, uchopenie objektu, koncový bod, stred úsečky, stred, priesečník, kolmica, kvadrant, najbližší, uzol, vloženie, ortho, mriežka, f3, f8, f7, polárne sledovanie, polárne, polarang, sledovanie uchopenia objektu, otrack, sledovanie, f10, f11
from: 3cf17f94
---

## Čo vytvoríte

Obdĺžnik s dvoma uhlopriečkami, kružnica so stredom v mieste ich priesečníka a úsečka od stredu jednej strany ku kružnici. Každý bod vyberiete myšou a každý bod je presný.

## Ako funguje prichytávanie

Keď príkaz žiada bod, CadCraft hľadá prichytávacie body do asi 10 pixelov od kurzora. Keď nejaký nájde, zobrazí sa značka a popisok („Koncový bod“, „Priesečník“) a kliknutie dopadne **presne** na tento bod, nie tam, kde je kurzor.

Uchopenia sú zapnuté, keď je {{ui:Uchopenie}} v stavovom riadku stlačené. {{key:F3}} ich zapína a vypína.

Uchopenia, ktoré môžete použiť, sú:

| Uchopenie | Dopadne na |
|---|---|
| Koncový bod | Konce úsečiek, oblúkov a úsekov lomenej čiary |
| Stred úsečky | Stred úsečiek, oblúkov a úsekov lomenej čiary |
| Stred | Stred kružníc a oblúkov a oblúkových úsekov lomenej čiary |
| Kvadrant | Body 0, 90, 180 a 270 stupňov kružníc a oblúkov |
| Priesečník | Miesto, kde sa dva objekty pretínajú |
| Kolmica | Bod na objekte kolmo k poslednému bodu (potrebuje základný bod) |
| Dotyčnica | Bod na kružnici alebo oblúku, kde sa úsečka od posledného bodu práve dotýka. Keď ešte nie je posledný bod (prvý bod úsečky), značka hovorí „odložené“: bod dotyku sa určí, až keď je známy ďalší bod, takže úsečka medzi dvoma dotyčnicami sa dotkne oboch kružníc |
| Najbližší | Najbližší bod na ľubovoľnom objekte |
| Uzol | Objekty bodov |
| Vloženie | Bod vloženia textu a odkazov na blok |

Všetky sú predvolene zapnuté okrem Dotyčnica a Najbližší. Najbližší často vyhrá, keď chcete niečo iné; Dotyčnicu zapnite, keď ju potrebujete.

## Výber uchopení

1. Kliknite na malú šípku vedľa {{ui:Uchopenie}} v stavovom riadku. Otvorí sa zoznam {{ui:Uchopenia objektov}}.
2. Zaškrtnite alebo odškrtnite uchopenia. Zmeny sa uplatnia okamžite.
3. Kliknutím na šípku znova zatvorte zoznam.

CadCraft si vašu voľbu a nastavenia {{ui:Mriežka}}, {{ui:Ortho}} a {{ui:Uchopenie}} zapamätá v tomto prehliadači.

## Postup

1. Zadajte `REC` a stlačte {{key:Enter}}.
2. Zadajte `0,0` a stlačte {{key:Enter}}.
3. Zadajte `@4000,3000` a stlačte {{key:Enter}}. Objaví sa obdĺžnik.
4. Kliknite na {{ui:Rozsah}}.
5. Zadajte `L` a stlačte {{key:Enter}}.
6. Presuňte kurzor na ľavý dolný roh. Značka zobrazí „Koncový bod“. Kliknite.
7. Presuňte na pravý horný roh, kým sa nezobrazí „Koncový bod“. Kliknite.
8. Stlačte {{key:Enter}}, čím ukončíte úsečku.
9. Znova stlačte {{key:Enter}}, aby sa {{cmd:LINE}} zopakoval, a rovnakým spôsobom nakreslite druhú uhlopriečku od pravého dolného rohu k ľavému hornému rohu.
10. Zadajte `C` a stlačte {{key:Enter}}, čím začnete kružnicu.
11. Presuňte kurzor tam, kde sa uhlopriečky pretínajú. Značka zobrazí „Priesečník“. Kliknite.
12. Zadajte `800` a stlačte {{key:Enter}}.

Mali by ste vidieť kružnicu presne so stredom v priesečníku.

13. Zadajte `L` a stlačte {{key:Enter}}.
14. Presuňte na stred ľavej strany obdĺžnika, kým sa nezobrazí „Stred úsečky“. Kliknite.
15. Presuňte kurzor na kružnicu, na jej ľavú stranu. Značka zobrazí „Kolmica“ alebo „Kvadrant“; tu sú to rovnaký bod. Kliknite.
16. Stlačte {{key:Enter}}.

Nová úsečka ide od stredu ľavej strany a končí presne na kružnici.

## Preskočenie uchopenia pre jedno kliknutie

Podržte {{key:Shift}} pri kliknutí. Uchopenia objektov sa pri tomto kliknutí ignorujú a bod ide presne tam, kde je kurzor (alebo v smere {{ui:Ortho}}, ak je {{ui:Ortho}} zapnuté).

## Ortho

{{ui:Ortho}} ({{key:F8}}) drží ďalší bod rovno vodorovne alebo rovno zvisle od základného bodu. Platí pre kliknutia aj pre priame zadanie vzdialenosti (holé číslo zadané pri výzve). Uchopenia objektov majú prednosť pred {{ui:Ortho}}: ak sa zobrazí značka uchopenia, kliknutie ide na uchopenie.

## Polárne sledovanie

{{ui:Polárne}} ({{key:F10}}) je {{ui:Ortho}} pri viacerých uhloch. Keď príkaz má základný bod (posledný bod úsečky, základný bod presunu), ukazovateľ sa zarovná vždy, keď sa priblíži k lúču z tohto bodu pod násobkom polárneho kroku: zobrazí sa bodkovaná čiara a popis pri kurzore `Polárne: 1200 < 30°`. Kliknutím použite tento bod alebo zadajte vzdialenosť: `1200` ide presne 1200 po lúči.

Krok je 90° , kým ho nezmeníte: zadajte {{cmd:POLARANG}}, stlačte {{key:Enter}} a zadajte `30` (alebo 45, 22.5, 15 …). {{ui:Polárne}} a {{ui:Ortho}} sa navzájom vylučujú: zapnutie jedného vypne druhé.

## Sledovanie uchopenia objektov

{{ui:Sledovanie}} ({{key:F11}}) zarovná ukazovateľ s uchopovacími bodmi, na ktorých ste sa zastavili, takže môžete vybrať bod v rovnakej výške s jedným rohom a nad iným bez kreslenia pomocných čiar.

1. Zapnite {{ui:Uchopenie}} a {{ui:Sledovanie}} a spustite príkaz, ktorý žiada bod (`L`).
2. Na pol sekundy nechajte ukazovateľ na uchopovacom bode, napríklad na rohu, bez kliknutia. Malý kríž ho označí: je získaný. Znova na ňom nechajte ukazovateľ, aby sa uvoľnil.
3. Presuňte ukazovateľ priamo od neho, vodorovne alebo zvisle. Bodkovaná čiara sleduje ukazovateľ a popis zobrazí `Sledovanie: 600 < 90°`. Kliknite alebo zadajte vzdialenosť.
4. Získajte druhý bod a presuňte ukazovateľ tam, kde sa zvislica z jedného stretne s vodorovnicou z druhého: ukazovateľ sa prichytí na tento priesečník (`Sledovanie: kde sa stretnú dve čiary`).

Keď je zapnuté aj {{ui:Polárne}}, získané body sa sledujú pri každom polárnom uhle. Uchováva sa až sedem bodov, až do konca príkazu. {{key:Shift}} vypne sledovanie na jedno kliknutie, rovnako ako uchopenia.

## Mriežka

{{ui:Mriežka}} ({{key:F7}}) zobrazí mriežku čiar za výkresom, pričom každá piata čiara je hrubšia; rozstup sa mení pri zväčšovaní. Je to iba pomôcka, kým nezapnete {{ui:Prichytávanie na mriežku}} ({{key:F9}}): potom kliknutia dopadnú na najbližší bod mriežky, pokiaľ bod skôr nezachytí uchopenie objektu.

## Funkčné klávesy na vašom počítači

{{key:F9}} je {{ui:Prichytávanie na mriežku}}, {{key:F10}} je {{ui:Polárne}} a {{key:F11}} je {{ui:Sledovanie}}.

:::mac
Na Macu F3, F7, F8 a F9 zvyčajne ovládajú Mission Control a médiá. Podržte **fn** s klávesom, alebo zapnite štandardné funkčné klávesy, ako je opísané v [Klávesy, myši a touchpady](common:keys). Tlačidlá v stavovom riadku fungujú vždy.
:::

:::firefox
Vo Firefoxe je F7 aj klávesom pre prezeranie s kurzorom. Ak sa Firefox opýta, či zapnúť prezeranie s kurzorom, zvoľte **Nie**. Ak sa otázka stále vracia, použite tlačidlo {{ui:Mriežka}}.
:::

:::touch
Na dotykovej obrazovke nie je zobrazenie pri prejdení, takže značka uchopenia sa objaví iba tam, kde sa dotknete prstom. Pre malé ciele priblížte, alebo radšej zadajte súradnice.
:::

## Časté chyby

- **Kliknutie išlo na iný bod.** Pred kliknutím sa pozrite na popisok značky: Koncový bod má prednosť pred Stred úsečky, keď sú oba blízko. Priblížte, alebo odškrtnite uchopenia, ktoré nepotrebujete.
- **Nezobrazí sa žiadna značka.** {{ui:Uchopenie}} je vypnuté, alebo požadované uchopenie je odškrtnuté, alebo je objekt na hladine, ktorá je vypnutá alebo zmrazená.
- **Uchopenia zachytia nesprávny objekt v preplnenom výkrese.** Priblížte. Vzdialenosť uchopenia sa meria v pixeloch obrazovky, takže pri priblížení je na výkrese menšia.
- **Očakávanie, že Shift dá rovnú čiaru.** V CadCraft Shift vypne uchopenia na jedno kliknutie. Na rovné čiary použite {{ui:Ortho}}.
- **Očakávanie, že body dopadnú na body mriežky.** Zapnite {{ui:Prichytávanie na mriežku}} ({{key:F9}}), alebo zadajte súradnice pre okrúhle čísla.
