---
title: Vytvorenie a vloženie blokov
summary: Premeňte nakreslené dvere na blok, umiestnite ho znova na iné polohy, do iných mierok a uhlov a upracte nepoužité bloky.
keywords: blok, bmake, vložiť, ddinsert, symbol, vyčistiť, rozložiť, predefinovať, základný bod, odkaz, počet, bcount, tabuľka, csv, atribúty, extrakcia dát
from: 125a129d
---

## Čo vytvoríte

Symbol dverí urobený na blok s názvom `DOOR-900`, potom vložený trikrát: tak, ako je nakreslený, otočený o 90 stupňov a zrkadlovo.

Blok je pomenovaná skupina objektov. Nakreslíte ho raz; každé miesto, kde ho použijete, je **odkaz na blok**, ktorý ukazuje na jednu definíciu. Sekcia {{ui:Bloky}} v ľavom paneli uvádza bloky vo výkrese a to, koľkokrát sa každý používa.

## Nakreslenie dverí

1. Zadajte `L` a stlačte {{key:Enter}}.
2. Zadajte `0,0` a stlačte {{key:Enter}}.
3. Zadajte `@0,900` a stlačte {{key:Enter}}, potom ešte raz stlačte {{key:Enter}}. Toto je krídlo dverí.
4. Zadajte `A` a stlačte {{key:Enter}}.
5. Zadajte `C` a stlačte {{key:Enter}}, aby ste ako prvý zadali stred.
6. Zadajte `0,0` a stlačte {{key:Enter}} pre stred.
7. Zadajte `900,0` a stlačte {{key:Enter}} pre začiatočný bod.
8. Zadajte `0,900` a stlačte {{key:Enter}} pre koncový bod. Toto je otvorenie krídla.
9. Kliknite na {{ui:Rozsah}}.

Oblúky idú proti smeru hodinových ručičiek od začiatočného bodu ku koncovému bodu.

## Vytvorenie bloku

1. Zadajte `B` a stlačte {{key:Enter}}, alebo kliknite na {{ui:Vytvoriť}} v skupine blokov.
2. Pri výzve `Zadajte názov bloku` zadajte `DOOR-900` a stlačte {{key:Enter}}.
3. Pri výzve `Zadajte základný bod vloženia` zadajte `0,0` a stlačte {{key:Enter}}. Toto je závesný bod: bod, ktorý sa umiestni tam, kde blok položíte.
4. Pri výzve `Vyberte objekty` ohraničte krídlo a oblúk ťahaním okna.
5. Stlačte {{key:Enter}}.

História hlási `Blok "DOOR-900" bol vytvorený zo 2 objektov a nahradený jedným odkazom na neho.` Panel {{ui:Bloky}} uvádza DOOR-900 s `1×` vedľa seba: jeden odkaz. Kliknite na dvere: teraz sa vyberú ako jeden objekt, „Odkaz na blok“.

:::tip
Objekty môžete najprv vybrať a potom zadať `B`. CadCraft sa stále opýta na názov a základný bod a potom použije váš výber.
:::

## Vloženie bloku

1. Zadajte `I` a stlačte {{key:Enter}}, alebo kliknite na {{ui:Vložiť}} vedľa DOOR-900 v paneli {{ui:Bloky}}.
2. Pri výzve `Zadajte názov bloku alebo [Súbor (F)/Knižnica (L)] <DOOR-900>` stlačte {{key:Enter}}. (Tlačidlo {{ui:Vložiť}} na paneli vyplní názov za vás.)
3. Dvere sa pohybujú za kurzorom. Kliknite tam, kam má závesný bod prísť.

Objavia sa druhé dvere.

## Vloženie otočeného alebo zmeneného bloku

1. Zadajte `I` a stlačte {{key:Enter}}, potom stlačte {{key:Enter}} na potvrdenie názvu.
2. Pri výzve `Zadajte bod vloženia [Mierka (S)/Otočiť (R)]` zadajte `R` a stlačte {{key:Enter}}.
3. Zadajte `90` a stlačte {{key:Enter}}. Náhľad sa otočí.
4. Kliknutím ho umiestnite.

Namiesto toho zadajte `S`, ak chcete nastaviť koeficient mierky; platí pre oba smery. Mierka aj otočenie sa zapamätajú pre ďalšie vloženie. Ak chcete dvere zrkadliť, vložte ich a potom na odkaz použite {{cmd:MIRROR}}.

## Zmena vloženého bloku

Vyberte odkaz na blok. V pravom paneli môžete zmeniť jeho {{ui:X}}, {{ui:Y}}, {{ui:Mierka X}}, {{ui:Mierka Y}} a {{ui:Otočenie}}. Záporná {{ui:Mierka X}} blok prevráti.

## Predefinovanie bloku

Ak chcete naraz zmeniť všetky dvere, vytvorte blok s rovnakým názvom:

1. Nakreslite novú verziu dverí.
2. Zadajte `B` a stlačte {{key:Enter}} a zadajte `DOOR-900`.
3. Pri výzve `Blok "DOOR-900" už existuje. Predefinovať ho?` zadajte `Y` a stlačte {{key:Enter}}.
4. Zadajte základný bod a vyberte nové objekty ako predtým.

Každý odkaz na DOOR-900 teraz zobrazuje novú verziu.

Alebo upravte samotný blok: {{ui:Bloky}} › {{ui:Viac}} › {{ui:Upraviť blok}} ({{cmd:BEDIT}}) ho otvorí samostatne a {{ui:Uložiť blok}} ho vráti späť. Pozri [Atribúty bloku](topic:attributes#change-a-block-the-block-editor).

## Počítanie blokov a export tabuľky

Zadajte {{cmd:COUNT}} (alebo {{ui:Bloky}} › {{ui:Viac}} › {{ui:Spočítať bloky}}), potom:

- kliknite na jedny dvere: vyberú sa všetky dvere v tomto priestore a história uvedie, koľko ich je tu a vo výkrese celkom;
- alebo stlačte {{key:Enter}}: história uvedie každý blok s jeho počtom, od najvyššieho;
- alebo zadajte `E`, potom `C` pre CSV s počtami (v modeli, na listoch, celkom) alebo `A` pre jeden riadok na každý odkaz s jeho hladinou, polohou, otočením a každou hodnotou atribútu — tabuľku, ktorú môžete otvoriť v tabuľkovom procesore.

Nepomenované bloky (kóty, tabuľky) a odkazy vnútri iných blokov sa nepočítajú. Bunky, ktoré začínajú ako vzorec (`=`, `+`, `-`, `@`), dostanú na začiatku `'`, aby ich tabuľkový procesor zobrazil ako text.

## Rozloženie a vyčistenie

- {{cmd:EXPLODE}} (`X`) premení vybraný odkaz na blok späť na samostatné objekty. Definícia zostane.
- {{cmd:PURGE}} (`PU`) odstráni definície blokov, ktoré už nikto nepoužíva. História uvedie, koľko ich odstránila.

## Názvy blokov

Názov môže mať až 255 znakov a môže obsahovať medzery, ale nesmie začínať hviezdičkou a nesmie obsahovať `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ani obrátený apostrof. Pri uložení DXF R12 sa názvy zapisujú veľkými písmenami, iné znaky ako písmená, číslice, `$`, `_` a `-` sa zmenia na `_` a názvy sa skrátia na 31 znakov; história uvedie, koľko sa zmenilo. Krátke názvy veľkými písmenami, číslicami a pomlčkami, ako `DOOR-900`, zostanú nezmenené. Uložený DWG zachová názvy tak, ako ste ich zadali, s veľkými a malými písmenami; mení sa iba znaky, ktoré DWG nepovoľuje (`|` sa zmení na `$0$`, ostatné na `_`).

## Zápis bloku alebo objektov do vlastného súboru

Zadajte `W` ({{cmd:WBLOCK}}) a vyberte **Objekty**, **Blok** alebo **Celý výkres**. Výsledkom je nový DWG alebo DXF, ktorý obsahuje iba hladiny, štýly a bloky, ktoré používa, so základným bodom ako začiatkom súradníc. Pri objektoch ich môžete ponechať, premeniť na blok alebo zmazať z tohto výkresu.

## Časté chyby

- **Blok skončil ďaleko od kurzora.** Základný bod nebol na objektoch. Vytvorte blok znova so základným bodom v rohu alebo na závese.
- **„Nie sú vybrané žiadne objekty; nič nebolo vytvorené.“** Stlačili ste {{key:Enter}} predtým, než ste niečo vybrali.
- **„Tento výkres zatiaľ nemá žiadne bloky: F vloží blok zo súboru, L z knižnice (alebo vytvorte blok príkazom BLOCK).“** Zadajte `F`, ak chcete priniesť blok z iného výkresu, alebo `L` pre knižnicu. Pozri [Vloženie zo súboru alebo z knižnice](topic:insert-from-file-and-library).
- **„Výrez nemôže byť v bloku.“** Rámy výrezov vynechajte z výberu.
