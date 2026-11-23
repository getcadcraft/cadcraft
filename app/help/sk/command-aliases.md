---
title: Úprava aliasov príkazov
summary: Vlastné aliasy príkazov uchovávajte v jednom textovom súbore v známom formáte, importujte a exportujte súbor .pgp a znova ho načítajte príkazom REINIT.
keywords: alias, aliasy, aliasedit, pgp, skratka, krátky názov, reinit, klávesnica, prispôsobiť, upraviť aliasy
from: 2282d36f
---

## Čo sa naučíte

Ako si pridať vlastné krátke názvy príkazov, napríklad `LL` pre {{cmd:LINE}}, všetko v jednom textovom súbore.

## Pridanie aliasu

1. Otvorte {{ui:Pohľad}} › {{ui:Viac}} › {{ui:Upraviť aliasy…}}, alebo napíšte {{cmd:ALIASEDIT}} a stlačte {{key:Enter}}.
2. Pridajte riadok s aliasom, čiarkou a príkazom za hviezdičkou:

```
LL,     *LINE
```

3. Kliknite na {{ui:Uložiť}}. Riadok príkazov oznámi, koľko vašich aliasov je v použití.
4. Napíšte `LL` a stlačte {{key:Enter}}: spustí sa LINE.

Vaše aliasy sú nad aliasmi CadCraftu. Váš riadok má prednosť pred vstavaným aliasom s rovnakým názvom; ak svoj riadok odstránite, vstavaný alias sa znova obnoví.

## Riadky, ktoré CadCraft odmietne

Editor pri písaní uvedie každý problém s číslom riadka:

- príkaz neexistuje;
- alias je sám názvom príkazu (`LINE, *CIRCLE` by skryl LINE);
- riadok nemá tvar `ALIAS, *PRÍKAZ`;
- rovnaký alias je na dvoch riadkoch (platí neskorší).

Riadky, ktoré spúšťajú program na vašom počítači, napríklad `NOTEPAD, START, 1, *File to edit: ,`, sa preskočia s upozornením: aplikácia v prehliadači nemôže spúšťať programy.

## Import aliasov z iného programu

1. V editore aliasov kliknite na {{ui:Importovať .pgp…}} a vyberte súbor. Súbor `.pgp` môžete aj pretiahnuť na výkres.
2. Skontrolujte uvedené problémy (príkazy, ktoré CadCraft nemá, sa odmietnu, ostatné fungujú).
3. Kliknite na {{ui:Uložiť}}.

{{ui:Exportovať .pgp}} uloží aliasy CadCraftu aj vaše ako jeden súbor v rovnakom formáte.

## Znovu načítanie súboru

Napíšte {{cmd:REINIT}} a stlačte {{key:Enter}}, aby sa váš súbor aliasov znova použil. Uchováva sa v tomto prehliadači; desktopová aplikácia ho bude uchovávať vo vlastnom priečinku a cloudová služba ho bude synchronizovať.

## Písmená pre voľby príkazu

Alias pomenúva príkaz. Ak chcete zmeniť písmená, ktorými sa odpovedá na voľby príkazu (`P` pre Polárne v {{cmd:ARRAY}}), pozrite [Dajte voľbám príkazov vlastné písmená](topic:option-letters).

## Klávesové skratky pre ľubovoľný príkaz

Alias sa píše; skratka je kláves. Ak chcete príkazu priradiť vlastný kláves:

1. Kliknite na {{ui:Pohľad}} › {{ui:Viac}} › {{ui:Klávesové skratky…}}, alebo napíšte `KEYS` a stlačte {{key:Enter}}.
2. Kliknite do poľa {{ui:Kláves}} a stlačte klávesy, napríklad {{key:Alt+Shift+C}}.
3. V poli {{ui:Spúšťa}} napíšte príkaz a prípadne, čo sa má napísať za ním: `CIRCLE`, alebo `ZOOM E`.
4. Kliknite na {{ui:Pridať}}.

Kláves potrebuje {{key:Mod}} alebo {{key:Alt}} s písmenom alebo číslicou, alebo voľnú funkčnú klávesu ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Klávesy, ktoré už používa CadCraft, aplikácia alebo prehliadač, a klávesy, ktoré má tlačidlo Moje nástroje (pozrite [Vlastné tlačidlá](topic:my-tools)), sa odmietnu a pole uvedie dôvod. Skratky sa uchovávajú v tomto prehliadači (alebo v desktopovej aplikácii); {{ui:Odstrániť}} jednu z nich zruší.
