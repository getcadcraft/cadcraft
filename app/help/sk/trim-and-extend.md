---
title: Orezanie a predĺženie
summary: Orežte čiary tam, kde ich pretínajú iné, a predĺžte ich, aby dosiahli iné, po jednom kuse alebo naraz viacero ťahaním dráhy cez ne.
keywords: trimextendmode, ťahanie okna, trim, extend, tr, ex, rýchle orezanie, ťahanie, voľná ruka, dráha, ohrada, prekríženie, shift, hrany rezu, hraničné hrany, edgemode, režim, štandardný, rýchly, zmazať, náhľad, steny, vyčistenie
from: 25fbc5bd
---

## Čo sa naučíte

Ako fungujú {{cmd:TRIM}} a {{cmd:EXTEND}} a rýchle spôsoby ich použitia: ťahanie cez mnoho kusov naraz, držanie {{key:Shift}} na prepínanie medzi orezaním a predlžovaním a vidieť, čo sa odstráni, skôr než kliknete.

## Orezanie jedného kusa

1. Nakreslite dlhú vodorovnú čiaru a dve krátke čiary, ktoré ju pretínajú.
2. Napíšte `TR` a stlačte {{key:Enter}}. História hovorí `Aktuálne nastavenia: Rýchly režim, hrany: Bez predĺženia`.
3. Položte ukazovateľ na dlhú čiaru medzi dvoma krátkymi. Tento kus zošedne a bude prerušovaný: práve ten sa odstráni.
4. Kliknite. Kus zmizne.
5. Stlačte {{key:Enter}}, čím ukončíte príkaz.

V rýchlom režime (predvolenom) je každý viditeľný objekt hranou rezu, takže nikdy nevoľte hrany ako prvé. Kliknite na kus, ktorý chcete odstrániť. Objekt, ktorý nič nepretína, sa zmaže celý a história to uvedie.

## Orezanie viacerých kusov jedným ťahom

1. Nakreslite dlhú vodorovnú čiaru a desať krátkych zvislých čiar, ktoré ju pretínajú.
2. Napíšte `TR` a stlačte {{key:Enter}}.
3. Stlačte tlačidlo myši nad dlhou čiarou, naľavo od prvej zvislej čiary, a ťahajte cez všetkých desať nad dlhou čiarou.

Počas ťahania sa dráha ukazuje ako prerušovaná čiara a každý kus, ktorý prejde, zošedne. Pustite: všetkých desať horných kusov sa orezá v jednom kroku. Napíšte `U` a stlačte {{key:Enter}}, čím ich všetky naraz vrátite.

:::tip
Môžete tiež kliknúť na dve prázdne miesta: čiara medzi nimi funguje ako ťahaná dráha. Napíšte `F` (Ohrada) a namiesto toho kliknite na sériu bodov, potom stlačte {{key:Enter}}.
:::

:::touch
Potiahnite prstom rovnakým spôsobom. Klepnutie na kus ho orezá.
:::

## Predlžovanie namiesto toho, s Shift

1. Nakreslite zvislú čiaru a päť krátkych vodorovných čiar naľavo od nej, ktoré pred ňou končia.
2. Napíšte `TR` a stlačte {{key:Enter}}.
3. Podržte {{key:Shift}}. Položte ukazovateľ na krátku čiaru: časť, o ktorú by narástla, sa zobrazí sivo a prerušovane.
4. Stále držte {{key:Shift}} a ťahajte nadol cez päť krátkych čiar.

Všetkých päť teraz siaha k zvislej čiare. {{key:Shift}} funguje v {{cmd:EXTEND}} (`EX`) opačne: kliknutie predlžuje, {{key:Shift}}+kliknutie orezáva. Predĺženie predĺži koniec najbližší tam, kam kliknete, alebo kde dráha pretína.

## Orezanie v okne

1. Napíšte `TR` a stlačte {{key:Enter}}.
2. Napíšte `C` a stlačte {{key:Enter}}.
3. Kliknite na dva rohy okolo kusov na odstránenie.

Každý kus, ktorý leží aspoň čiastočne vnútri okna, sa orezá.

Ak chcete okno len ťahaním, bez písania `C`: {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Ťahanie pri orezaní a predĺžení}} › {{ui:Okno}}. Potom stlačenie na prázdnom mieste a ťahanie nakreslí rámček a každý kus, ktorého sa dotkne, sa orezá (alebo predĺži v {{cmd:EXTEND}}, alebo so {{key:Shift}}). {{ui:Dráha}} (pôvodná voľba) vráti voľnú ruku. Riadok nastavení na začiatku {{cmd:TRIM}} hovorí, ktorý je zapnutý.

## Výber hrán rezu (štandardný režim)

Niekedy by mala rezať iba jedna čiara, napríklad líce múru, ktoré pretína veľa ďalších čiar.

1. Napíšte `TR` a stlačte {{key:Enter}}.
2. Napíšte `O` (Režim) a stlačte {{key:Enter}}, potom napíšte `S` (Štandardný) a stlačte {{key:Enter}}.
3. Pri výzve `Vyberte hrany rezu` kliknite na hranové čiary (alebo ťahajte okno) a potom stlačte {{key:Enter}}. Stlačenie {{key:Enter}} bez výberu urobí každý objekt hranou.
4. Kliknite alebo ťahajte cez kusy, ktoré chcete odstrániť.

Režim reže iba zvolené hrany a objekt, ktorý žiadna hrana nepretína, zostane nedotknutý. Režim sa zachová, kým zatvoríte stránku; napíšte `O` a potom `Q`, aby ste sa vrátili k rýchlemu. {{cmd:TRIMEXTENDMODE}} ho nastaví pred začatím, ako to inde robí premenná s rovnakým názvom: `0` štandardný, `1` rýchly. `T` (Hrany rezu) vyberie nové hrany kedykoľvek; v {{cmd:EXTEND}} je to `B` (Hraničné hrany).

## Hrany, ktoré by dosiahli

1. Napíšte `TR` a stlačte {{key:Enter}}.
2. Napíšte `E` (Hrana) a stlačte {{key:Enter}}, potom `E` (Predĺženie) a stlačte {{key:Enter}}.

Teraz sa rezajúca čiara alebo oblúk, ktorý končí skôr, počíta, akoby pokračoval: krátka čiara reže tam, kde by pretínala, keby bola dlhšia. Napíšte `E`, potom `N` (Bez predĺženia), aby ste sa vrátili. Je to to isté ako EDGEMODE 1 a 0.

## Mazanie bez odchodu

Napíšte `R` (Zmazať) a stlačte {{key:Enter}}, vyberte objekty na zmazanie a stlačte {{key:Enter}}. {{cmd:TRIM}} pokračuje.

## Časté chyby

- **Celá čiara zmizla.** V rýchlom režime sa objekt, ktorý nič nepretína, zmaže. Napíšte `U`, aby sa vrátil, alebo prepnite na štandardný režim (`O`, `S`).
- **"Nič na orezanie tu: žiadna zvolená hrana nepretína tento objekt."** Štandardný režim reže iba na hranách, ktoré ste zvolili. Napíšte `T`, aby ste ich zvolili znova.
- **"V tom smere nie je hranica."** Predĺženie nenašlo nič vpredu. Kliknite bližšie ku koncu, ktorý má narásť, alebo zapnite `E` (Hrana, Predĺženie) pre hranice, ktoré končia skôr.
- **Ťahanie nakreslilo laso.** Ťahanie orezáva iba vtedy, keď sa {{cmd:TRIM}} alebo {{cmd:EXTEND}} pýta na objekt. Keď nebeží žiadny príkaz, ťahanie vyberá (pozri [Výber lasom](topic:lasso-selection)).
- **Orezať sa dajú iba čiary, oblúky, kružnice a lomené čiary.** Ak chcete orezať jeho čiary, najprv rozložte blok.
