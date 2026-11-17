---
title: Úprava aliasov príkazov
summary: Uchovávajte si vlastné aliasy príkazov v jednom textovom súbore vo známom formáte, importujte a exportujte súbor .pgp a znova ho načítajte príkazom REINIT.
keywords: alias, aliasy, aliasedit, pgp, skratka, krátky názov, reinit, klávesnica, prispôsobenie, upraviť aliasy
from: 6ab6fa0e
---

## Čo sa naučíte

Ako pridať vlastné krátke názvy pre príkazy, napríklad `LL` pre {{cmd:LINE}}, všetko v jednom textovom súbore.

## Pridanie aliasu

1. Otvorte {{ui:Pohľad}} › {{ui:Viac}} › {{ui:Upraviť aliasy…}}, alebo napíšte {{cmd:ALIASEDIT}} a stlačte {{key:Enter}}.
2. Pridajte riadok s aliasom, čiarkou a príkazom za hviezdičkou:

```
LL,     *LINE
```

3. Kliknite na {{ui:Uložiť}}. Príkazový riadok uvedie, koľko vašich aliasov je v používaní.
4. Napíšte `LL` a stlačte {{key:Enter}}: spustí sa LINE.

Vaše aliasy ležia nad aliasmi CadCraft. Váš riadok má prednosť pred vstavaným aliasom s rovnakým názvom; odstráňte svoj riadok a vstavaný alias sa vráti.

## Riadky, ktoré CadCraft odmietne

Editor pri písaní vypisuje každý problém s číslom riadku:

- príkaz neexistuje;
- alias je sám názvom príkazu (`LINE, *CIRCLE` by skryl LINE);
- riadok nemá tvar `ALIAS, *COMMAND`;
- rovnaký alias je na dvoch riadkoch (platí neskorší).

Riadky, ktoré spúšťajú program vo vašom počítači, ako `NOTEPAD, START, 1, *File to edit: ,`, sa preskočia s poznámkou: aplikácia v prehliadači nemôže spúšťať programy.

## Prevzatie aliasov z iného programu

1. V editore aliasov kliknite na {{ui:Importovať .pgp…}} a vyberte súbor. Súbor `.pgp` môžete aj pretiahnuť na výkres.
2. Skontrolujte uvedené problémy (príkazy, ktoré CadCraft nemá, sa odmietnu, ostatné fungujú).
3. Kliknite na {{ui:Uložiť}}.

{{ui:Exportovať .pgp}} uloží aliasy CadCraft aj vaše ako jeden súbor v rovnakom formáte.

## Opätovné načítanie súboru

Napíšte {{cmd:REINIT}} a stlačte {{key:Enter}}, aby sa váš súbor aliasov znova použil. Uchováva sa v tomto prehliadači; desktopová aplikácia ho bude uchovávať vo vlastnom priečinku a cloudová služba ho bude synchronizovať.

## Klávesové skratky pre ľubovoľný príkaz

Alias sa píše; skratka je klávesa. Ak chcete príkazu priradiť vlastnú klávesu:

1. Kliknite na {{ui:Pohľad}} › {{ui:Viac}} › {{ui:Klávesové skratky…}}, alebo napíšte `KEYS` a stlačte {{key:Enter}}.
2. Kliknite do poľa {{ui:Kláves}} a stlačte klávesy, napríklad {{key:Alt+Shift+C}}.
3. Do poľa {{ui:Spúšťa}} napíšte príkaz a ak chcete, čo napísať za ním: `CIRCLE` alebo `ZOOM E`.
4. Kliknite na {{ui:Pridať}}.

Klávesa potrebuje {{key:Mod}} alebo {{key:Alt}} s písmenom alebo číslicou, alebo voľnú funkčnú klávesu ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Klávesy, ktoré už používa CadCraft, aplikácia alebo prehliadač, a klávesy, ktoré má tlačidlo Moje nástroje (pozrite [Vlastné tlačidlá](topic:my-tools)), sa odmietnu a pole uvedie dôvod. Skratky sa uchovávajú v tomto prehliadači (alebo v desktopovej aplikácii); {{ui:Odstrániť}} jednu odstráni.
