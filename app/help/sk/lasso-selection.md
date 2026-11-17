---
title: Výber lasom
summary: Stlačte a ťahajte voľne nakreslený obrys okolo objektov a vyberte ich ako okno, prekríženie alebo ohradu; počas ťahania prepínate klávesom Space.
keywords: laso, lassomode, ťahanie, voľná ruka, výber, vybrať, okno, prekríženie, ohrada, space, mnohouholník, dotyk, pero, obdĺžnik
from: 9ec6154d
---

## Čo sa naučíte

Ako vybrať objekty nakreslením obrysu okolo nich a ako získať späť obdĺžnik, keď ho chcete.

## Nakreslenie lasa

1. Nakreslite niekoľko úsečiek a kružníc blízko seba.
2. Keď nebeží žiadny príkaz, stlačte tlačidlo myši na prázdnom mieste a ťahajte okolo niektorých z nich, pričom najprv ťahajte **doprava**.
3. Pustite.

Vybrané budú iba objekty, ktoré sú celé vnútri obrysu. Obrys sa počas ťahania kreslí plnou čiarou: ide o laso okna.

## Okno, prekríženie a ohrada

Ktoré objekty dostanete, závisí od prvého pohybu ťahania a od {{key:Space}}:

| Ťaháte | Laso | Vyberie |
|---|---|---|
| Najprv doprava | Okno (plný obrys) | Iba objekty **celé vnútri** |
| Najprv doľava | Prekríženie (prerušovaná, zelená) | Objekty vnútri **aj** objekty, ktorých sa obrys dotýka |
| Počas ťahania stlačte {{key:Space}} | Okno, potom prekríženie, potom ohrada | Ohrada (prerušovaná cesta, neuzavretá): iba objekty, ktoré cesta pretína |

1. Stlačte na prázdnom mieste a ťahajte okolo niektorých objektov, najprv **doľava**. Vyberú sa aj všetky objekty, ktorých sa obrys dotýka.
2. Stlačte {{key:Esc}}.
3. Stlačte a ťahajte znova; ešte podržiac tlačidlo, stlačte raz {{key:Space}}. Obrys sa zmení na prekríženie; ďalším stlačením {{key:Space}} dostanete ohradu.

Ak pri uvoľnení stlačíte {{key:Shift}}, objekty sa naopak z výberu odoberú (pri nastavení "Klikanie na objekty: Pridať" v Nastaveniach).

## Počas príkazu

Laso funguje všade, kde CadCraft žiada `Select objects`: nakreslite ho a potom stlačte {{key:Enter}} na dokončenie. {{cmd:STRETCH}} použije prekrížiace laso ako svoje okno, takže môžete natiahnuť časť výkresu tvaru L naraz.

{{cmd:TRIM}} a {{cmd:EXTEND}} používajú ťahanie inak: tam orezú (alebo predĺžia) každú časť, ktorú cesta pretína. Pozri [Orezanie a predĺženie](topic:trim-and-extend).

## Obdĺžnik

Kliknutie na prázdne miesto, pohyb a druhé kliknutie vždy nakreslia obdĺžnik ako okno (zľava doprava) alebo prekríženie (sprava doľava).

Ak chcete, aby ťahanie znova kreslilo obdĺžnik, otvorte {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Ťahanie na výber}} a vyberte {{ui:Obdĺžnik}}, alebo zadajte {{cmd:LASSOMODE}} a potom `0`. Zadajte {{cmd:LASSOMODE}} a potom `1` pre laso. Voľba sa uchováva v tomto prehliadači.

:::touch
Ťahajte prstom alebo perom rovnakým spôsobom. Klepnutie stále vyberie jeden objekt.
:::

## Časté chyby

- **Nič nebolo vybrané.** Laso bolo okno a nič nebolo celé vnútri. Začnite ťahanie doľava alebo počas ťahania stlačte {{key:Space}}.
- **Ťahanie posunulo úchyt.** Stlačenie na úchyte vybraného objektu presunie úchyt. Začnite laso na prázdnom mieste.
- **Space ukončil príkaz.** {{key:Space}} prepína laso iba dovtedy, kým je tlačidlo stlačené; inak je to Enter.
