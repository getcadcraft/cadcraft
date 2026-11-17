---
title: Kreslenie so súradnicami
summary: Nakreslite presný obrys podlahy zadaním absolútnych, relatívnych a polárnych súradníc a priamym zadaním vzdialenosti.
keywords: úsečka, pline, lomená čiara, súradnice, relatívne, polárne, absolútne, priama vzdialenosť, @, zadávanie bodov, presne, ortho
from: 19e82350
---

## Čo vytvoríte

Obrys miestnosti v tvare písmena L, 6000 na 4500 so zárezom 2000 na 1500, nakreslený presne, plus múr pod uhlom 30 stupňov. Použijete všetky štyri spôsoby zadávania bodu. Pracujte v milimetroch: jedna jednotka výkresu znamená jeden milimeter.

Prehľad všetkých formátov je v [Zadávanie súradníc a vzdialeností](topic:coordinate-entry).

## Skôr než začnete

1. Otvorte CadCraft. Ak je otvorený výkres, najprv kliknite na {{ui:Nová}}.
2. Stlačte {{key:Esc}}, aby nič nebolo vybrané. Pravý panel zobrazuje {{ui:Aktuálne nastavenia}}.
3. Nastavte {{ui:Jednotky}} na {{ui:Milimetre}}. Nič sa nezmení; toto iba povie listom a výkresom, čo znamená jedna jednotka.

## Absolútne súradnice: prvý bod

Absolútna súradnica je poloha merená od začiatku súradníc, zadaná ako `x,y`.

1. Zadajte `L` a stlačte {{key:Enter}}. Výzva znie `Zadajte prvý bod:`.
2. Zadajte `0,0` a stlačte {{key:Enter}}.

Úsečka sa teraz natiahne od začiatku súradníc ku kurzoru. Súradnice v stavovom riadku zobrazujú vzdialenosť a uhol od začiatočného bodu, ako sa pohybujete.

## Relatívne súradnice: @dx,dy

Relatívna súradnica sa zadáva ako `@dx,dy`: toľko doprava, toľko nahor, od posledného bodu. Záporné čísla idú doľava alebo nadol.

3. Zadajte `@6000,0` a stlačte {{key:Enter}}. Úsečka 6000 smeruje doprava.
4. Zadajte `@0,3000` a stlačte {{key:Enter}}.
5. Zadajte `@-2000,0` a stlačte {{key:Enter}}.
6. Zadajte `@0,1500` a stlačte {{key:Enter}}.

Mali by ste vidieť štyri spojené úsečky, ktoré stúpajú pozdĺž pravej strany miestnosti.

## Priame zadanie vzdialenosti: holé číslo

Keď zadáte jediné číslo, CadCraft ide o túto vzdialenosť v smere kurzora. Zapnite {{ui:Ortho}}, aby sa smer prichytával na vodorovný alebo zvislý.

7. Stlačte {{key:F8}} alebo kliknite na {{ui:Ortho}} v stavovom riadku. Stavový riadok zobrazí „Ortho zapnuté“.
8. Presuňte kurzor doľava od posledného bodu. Pružná čiara zostane vodorovná.
9. Zadajte `4000` a stlačte {{key:Enter}}. Úsečka ide 4000 doľava.
10. Presuňte kurzor pod posledný bod.
11. Zadajte `4500` a stlačte {{key:Enter}}. Ste späť na začiatočnom bode.
12. Na prázdnej výzve stlačte {{key:Enter}}, čím ukončíte príkaz.

:::mac
Na klávesnici Mac môže F8 ovládať prehrávanie médií. Podržte **fn** a stlačte F8, alebo kliknite na {{ui:Ortho}}. Pozri [Klávesy, myši a touchpady](common:keys).
:::

Teraz máte uzavretý obrys v tvare L zložený zo šiestich samostatných úsečiek.

13. Kliknutím na {{ui:Rozsah}} zobrazte všetko.

## Polárne súradnice: @vzdialenosť<uhol

Polárna súradnica sa zadáva ako `@vzdialenosť<uhol`. Uhly sú v stupňoch, merané proti smeru hodinových ručičiek od kladného smeru X: 0 je doprava, 90 je nahor, 180 je doľava, 270 (alebo -90) je nadol.

14. Zadajte `L` a stlačte {{key:Enter}}.
15. Zadajte `6000,0` a stlačte {{key:Enter}}, aby ste začali v pravom dolnom rohu.
16. Zadajte `@2500<-30` a stlačte {{key:Enter}}. Úsečka 2500 vychádza z rohu a smeruje nadol a doprava pod uhlom 30 stupňov pod vodorovnou čiarou.
17. Stlačte {{key:Enter}}, čím ukončíte príkaz.

Polárna súradnica bez `@`, napríklad `2500<30`, sa meria od začiatku súradníc, nie od posledného bodu.

## Rovnaký obrys ako jedna lomená čiara

Šesť samostatných úsečiek je pre mnohé úlohy v poriadku, ale lomená čiara je jeden objekt: odsadzuje sa, meria a vyberá ako celok. Použite {{cmd:PLINE}} s rovnakým zadaním.

1. Zadajte `PL` a stlačte {{key:Enter}}.
2. Zadajte `0,-6000` a stlačte {{key:Enter}}, aby ste začali pod prvým obrysom.
3. Zadajte `@6000,0` a potom stlačte {{key:Enter}}.
4. Zadajte `@0,3000` a potom stlačte {{key:Enter}}.
5. Zadajte `@-2000,0` a potom stlačte {{key:Enter}}.
6. Zadajte `@0,1500` a potom stlačte {{key:Enter}}.
7. Zadajte `@-4000,0` a potom stlačte {{key:Enter}}.
8. Zadajte `C` a stlačte {{key:Enter}}. Lomená čiara sa uzavrie a príkaz skončí.
9. Kliknite na nový obrys. Pravý panel zobrazí „Lomená čiara“, jej {{ui:Vrcholy}}, {{ui:Dĺžka}} a, keďže je uzavretá, jej {{ui:Plocha}}.

Plocha by mala byť 24000000 (štvorcových milimetrov, čo je 24 štvorcových metrov).

## Možnosti počas kreslenia

- V {{cmd:LINE}} a {{cmd:PLINE}} zadajte `U` a stlačte {{key:Enter}}, čím vezmete späť posledný úsek bez opustenia príkazu.
- V {{cmd:LINE}} `C` uzavrie čiaru späť k prvému bodu, keď sú aspoň dva úseky.
- V {{cmd:PLINE}} `A` prepne na oblúkové úseky (každý oblúk plynulo nadväzuje na predchádzajúci úsek) a `L` prepne späť na úsečky. V režime oblúkov je možnosť uzavretia `CL`.
- Stlačením {{key:Enter}} pri výzve `Zadajte prvý bod:` v {{cmd:LINE}} začnete od posledného bodu, ktorý ste zadali, takže môžete pokračovať tam, kde ste skončili.

## Časté chyby

- **Zadanie `6000,0`, keď ste mysleli `@6000,0`.** Bez `@` sa bod meria od začiatku súradníc, nie od posledného bodu, takže úsečka skončí na neočakávanom mieste. V CadCraft je `x,y` vždy absolútne. Stlačte `U` a {{key:Enter}}, čím to vezmete späť.
- **Čiarka zadaná ako desatinná čiarka.** Desatinné čísla používajú bodku: `1250.5`. Čiarka vždy oddeľuje X od Y.
- **Priama vzdialenosť išla opačným smerom.** Holé číslo ide za kurzorom. Pred stlačením {{key:Enter}} presuňte kurzor na stranu, ktorú chcete, a pre rovné čiary zapnite {{ui:Ortho}}.
- **„Vyžaduje sa bod alebo kľúčové slovo možnosti.“** CadCraft nerozumie tomu, čo ste zadali. Skontrolujte medzery v čísle alebo chýbajúcu čiarku a zadajte to znova.
- **Stopy a palce.** CadCraft číta iba obyčajné čísla. Zadajte `150` pre 12'-6" vo výkrese v palcoch, alebo `12.5` vo výkrese v stopách.
