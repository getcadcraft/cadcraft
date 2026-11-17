---
title: Odsadenie, orezanie, predĺženie, zaoblenie a skosenie múrov
summary: Premeňte jednoduché čiary na dvojité múry pomocou Odsadenia, vyčistite rohy pomocou Zaoblenia a orežte alebo predĺžte čiary pomocou Orezania a Predĺženia.
keywords: odsadenie, orezanie, predĺženie, zaoblenie, skosenie, skosiť, prerušiť, breakatpoint, zmeniť dĺžku, múry, roh, rez, rovnobežne, polomer, vyčistenie
from: c6c5cbd0
---

## Čo vytvoríte

Malú miestnosť s 200 hrubými múrmi: vnútorná stena sa nakreslí, vonkajšia sa odsadí, rohy sa vyčistia a jeden múr sa prereže dverným otvorom.

## Nakreslenie vnútornej steny

1. Napíšte `L` a stlačte {{key:Enter}}.
2. Napíšte `0,0` a stlačte {{key:Enter}}.
3. Napíšte `@5000,0` a stlačte {{key:Enter}}.
4. Napíšte `@0,4000` a stlačte {{key:Enter}}.
5. Napíšte `@-5000,0` a stlačte {{key:Enter}}.
6. Napíšte `C` a stlačte {{key:Enter}}.
7. Kliknite na {{ui:Rozsah}}.

Máte štyri samostatné čiary. (Uzavretá lomená čiara by sa odsadila naraz; samostatné čiary ukazujú, ako Zaoblenie čistí rohy.)

## Odsadenie vonkajšej steny

1. Napíšte `O` a stlačte {{key:Enter}}. Výzva hovorí `Zadajte vzdialenosť odsadenia [Cez (T)] <Cez (T)>:`.
2. Napíšte `200` a stlačte {{key:Enter}}.
3. Pri výzve `Vyberte objekt na odsadenie` kliknite na spodnú čiaru.
4. Pri výzve `Zadajte bod na strane odsadenia` kliknite kdekoľvek pod ňou. Objaví sa rovnobežná čiara 200 pod ňou.
5. Kliknite na pravú čiaru, potom kliknite napravo od nej.
6. Kliknite na hornú čiaru, potom kliknite nad ňu.
7. Kliknite na ľavú čiaru, potom kliknite naľavo od nej.
8. Stlačením {{key:Enter}} ukončite príkaz.

Mali by ste vidieť štyri vonkajšie čiary, každú rovnako dlhú ako jej vnútorná, takže vonkajšie rohy sa nestretnú.

:::tip
Pri výzve na vzdialenosť stlačte {{key:Enter}}, aby sa použila posledná vzdialenosť znova. Napíšte `T` pre Cez: potom každá kópia prejde bodom, na ktorý kliknete, v akejkoľvek vzdialenosti.
:::

{{cmd:OFFSET}} funguje na čiarach, oblúkoch, kružniciach a lomených čiarach. Odsadenie uzavretej lomenej čiary odsadí celý obrys vrátane rohov.

## Vyčistenie vonkajších rohov zaoblením

{{cmd:FILLET}} spojí dve čiary v rohu: orežie alebo predĺži obe, aby sa stretli. S polomerom 0 je roh ostrý.

1. Napíšte `F` a stlačte {{key:Enter}}. Výzva hovorí `Vyberte prvú čiaru [Polomer (R)]:`.
2. Ak posledné zaoblenie, ktoré ste urobili, používalo polomer, napíšte `R`, stlačte {{key:Enter}}, napíšte `0` a stlačte {{key:Enter}}.
3. Kliknite na vonkajšiu spodnú čiaru blízko jej pravého konca.
4. Pri výzve `Vyberte druhú čiaru` kliknite na vonkajšiu pravú čiaru blízko jej spodného konca.

Obe čiary sa teraz stretnú v ostrom rohu a príkaz sa skončí.

5. Stlačením {{key:Enter}} zopakujte {{cmd:FILLET}} a urobte ďalší roh.
6. Opakujte, kým sa nestretnú všetky štyri vonkajšie rohy.

Kliknite na každú čiaru na časti, ktorú chcete **zachovať**. S polomerom väčším ako 0 Zaoblenie namiesto toho pridá medzi čiary oblúk.

:::tip
Napíšte `M` pri prvej výzve, aby sa všetky štyri rohy spravili naraz, alebo nakreslite vonkajšiu stenu ako jednu uzavretú lomenú čiaru a napíšte `P`: každý roh sa spraví naraz. Podržte {{key:Shift}}, keď klikáte na druhú čiaru, pre ostrý roh bez zmeny polomeru.
:::

## Skosenie rohu nástrojom Skosenie

{{cmd:CHAMFER}} odreže roh rovnou čiarou.

1. Napíšte `CHA` a stlačte {{key:Enter}}.
2. Napíšte `D` a stlačte {{key:Enter}}. Napíšte `300` a stlačte {{key:Enter}} pre prvú vzdialenosť, potom stlačte {{key:Enter}}, aby sa 300 použilo aj pre druhú.
3. Kliknite na vnútornú hornú čiaru blízko jej ľavého konca, potom na vnútornú ľavú čiaru blízko jej horného konca.

Roh sa odreže o 300 po každej čiare a skosená čiara ich spojí. Napíšte `A` namiesto `D`, ak chcete zadať dĺžku na prvej čiare a uhol.

## Vyrezanie dverí nástrojom Orezanie

Najprv nakreslite dva dverné ostenia cez spodný múr, potom orežte čiary múru medzi nimi.

1. Napíšte `L` a stlačte {{key:Enter}}.
2. Napíšte `1000,200` a stlačte {{key:Enter}}.
3. Napíšte `@0,-600` a stlačte {{key:Enter}}, potom znova stlačte {{key:Enter}}.
4. Stlačením {{key:Enter}} zopakujte {{cmd:LINE}}.
5. Napíšte `1900,200` a stlačte {{key:Enter}}.
6. Napíšte `@0,-600` a stlačte {{key:Enter}}, potom znova stlačte {{key:Enter}}.

Teraz máte dve krátke čiary pretínajúce spodný múr vo vzdialenosti 900.

7. Napíšte `TR` a stlačte {{key:Enter}}. História hlási `Aktuálne nastavenia: Rýchly režim, hrany: Bez predĺženia`.
8. Kliknite na vnútornú spodnú čiaru medzi dvoma ostením. Tento kus zmizne. (Najprv naň nechajte kurzor: kus, ktorý zmizne, zošedne a zmení sa na čiarkovaný.)
9. Kliknite na vonkajšiu spodnú čiaru medzi dvoma ostením. Aj ten kus zmizne.
10. Kliknite na časť každého ostenia, ktorá trčí nad múrom, a na časť pod ním.
11. Stlačením {{key:Enter}} ukončite príkaz.

Mali by ste vidieť 900 široký otvor v spodnom múre, s ostením uzatvárajúcim konce múru.

V Rýchlom režime (predvolenom) Orezanie nepýta najprv hrany na orezanie: každý viditeľný objekt je hrana na orezanie. Vyberte kus, ktorý chcete odstrániť, alebo ťahajte cestu cez viac kusov a orežte ich všetky naraz. Napíšte `U` a stlačte {{key:Enter}}, ak chcete vrátiť posledný výber alebo ťah bez ukončenia príkazu. Ohrada, prekríženie, vybrané hrany a {{key:Shift}} na predĺženie sú popísané v [Orezanie a predĺženie](topic:trim-and-extend).

## Predĺženie čiary k inej

{{cmd:EXTEND}} predĺži koniec čiary, oblúka alebo lomenej čiary, kým sa nestretne s ďalším objektom v tom smere.

1. Napíšte `L` a stlačte {{key:Enter}}.
2. Napíšte `1000,2000` a stlačte {{key:Enter}}.
3. Napíšte `@2000,0` a stlačte {{key:Enter}}, potom znova stlačte {{key:Enter}}. Čiara sa zastaví 2000 pred pravým múrom.
4. Napíšte `EX` a stlačte {{key:Enter}}.
5. Kliknite na novú čiaru blízko jej pravého konca.
6. Stlačením {{key:Enter}} ukončite príkaz.

Čiara teraz vedie k vnútornej ploche pravého múru. Každý viditeľný objekt je hranica; kliknite blízko konca, ktorý sa má predĺžiť. V rámci {{cmd:TRIM}} robí to isté {{key:Shift}}+kliknutie.

## Prerušenie a zmena dĺžky

{{cmd:BREAK}} (`BR` alebo {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Prerušiť}}) vyreže medzeru bez hrany na orezanie: kliknite na objekt, kde medzera začína (tento klik je prvý bod), potom kliknite, kde končí. Pri kružnici sa ide časťou proti smeru hodinových ručičiek od prvého bodu k druhému. `F` pri druhej otázke vám umožní zadať prvý bod znova a {{cmd:BREAKATPOINT}} rozdelí objekt na dva v jednom bode bez medzery.

{{cmd:LENGTHEN}} (`LEN`) zmení dĺžku na jednom konci:

1. Napíšte `LEN` a stlačte {{key:Enter}}. Kliknutím na čiaru zobrazíte jej aktuálnu dĺžku; výzva sa opýta znova.
2. Zvoľte spôsob: `DE` (Delta: hodnota na pridanie, záporná na odobranie; `A` pre uhol oblúka), `P` (Percento: 50 ju prepolí), `T` (Celkom: dĺžka, akú má mať) alebo `DY` (Dynamicky: ťahajte koniec).
3. Kliknite na každý objekt blízko konca, ktorý sa má posunúť. `U` vráti posledný; {{key:Enter}} ukončí.

Čiary, oblúky a otvorené lomené čiary (ich koncový segment) možno predĺžiť.

## Časté chyby

- **Celá čiara zmizla.** Nič ju nepretínalo, takže Rýchly režim ju zmazal. Napíšte `U`, aby sa vrátila; overte, že orezávacia čiara ju naozaj pretína (priblížte) a nie je na vypnutej hladine.
- **„Žiadna hranica v tomto smere.“** Predĺženie nenašlo nič, do čoho by narazilo. Kliknite bližšie ku koncu, ktorý sa má predĺžiť.
- **„Polomer je príliš veľký.“** Oblúk by prešiel za koniec jednej z čiar. Použite menší polomer.
- **„Orezať späť sa dá len prvý alebo posledný segment otvorenej lomenej čiary.“** Vyberte dva susedné segmenty lomenej čiary, alebo napíšte `P`, aby sa zaoblil každý jej roh.
- **Odsadenie išlo na zlú stranu.** Strana je tam, kam kliknete po výbere objektu. Vráťte späť pomocou {{key:Mod+Z}} a kliknite na druhú stranu.
- **„Takto ďaleko sa odsadiť nedá.“** Odsadenie by oblúk, kružnicu alebo lomenú čiaru obrátilo naruby. Použite menšiu vzdialenosť.
