---
title: "Vaikepoliitikad: määra, millega uus joonis algab"
summary: Määra kord kõik, millise ühikute, pikkusvormingu, täpsuse, teksti kõrguse ja lehepaberiga uus joonis algab, nii meetrilise kui tollidega töö jaoks, ja jaga poliitikaid kontoris väikese failina.
keywords: vaikimisi, vaikimisi poliitikad, poliitika, kontori standard, kontori vaikeväärtused, mall, uus joonis, ühikud, insunits, pikkuse vorming, arhitektuurne, täpsus, luprec, teksti kõrgus, lehe paber, a1, jagamine, eksport, import, json
from: 7b80fd13
---

## Mida sa teed

Ütle CadCraft'ile, millega uus joonis peab algama, et kontoris keegi ei peaks iga kord käsku UNITS käivitama ja samu asju muutma. See on lisandmoodul: see on välja lülitatud, kuni selle sisse lülitad, ja poliitika, mida sa ei määra, jääb täpselt CadCraft'i enda vaikeväärtuseks.

:::note
Need on vaikeväärtused **uutele** joonistele ja **uutele** lehtedele. Juba alustatud joonist ei muudeta, samuti ei muudeta avatud joonist.
:::

## Sammud

1. Ava Sätted, mine jaotisse {{ui:Lisandmoodulid}} ja lülita sisse {{ui:Vaikepoliitikad}}.
2. Sätetes ava vahekaart **CadCraft** ja vali vasakul nimekirjast {{ui:Vaikepoliitikad}}.
3. Määra poliitikad, mida tahad. Iga algab valikul **CadCraft'i oma**. Poliitika, millel on kast **Meetriline** ja kast **Tolline**, võtab ühe väärtuse iga joonistuse liigi jaoks; täida ainult need, mida vajad.
4. Salvestamise nuppu pole: iga muudatus salvestatakse kohe, kui teed selle.
5. Alusta uut joonist. Sellel on ühikud, pikkuse vorming, täpsus ja teksti kõrgus, mille seadsid, ning selle esimene uus leht on paberil, mille valisid.

## Poliitikad

- **Uue joonise ühikud**: puudub, millimeetrid, sentimeetrid, meetrid, tollid või jalad.
- **Pikkuse vorming** ja **Pikkuse täpsus**: mida käsk UNITS seab uue joonise jaoks.
- **Uue teksti kõrgus** joonise ühikutes.
- **Uue lehe paber**: paber, mida kasutab käsk Uus leht.
- **Lehe märkuste suurused** (Sätted › Globaalne › Vaikepoliitikad): kontori kõrgused millimeetrites, nagu need trükitakse. CadCraft kasutab neid märkmete ja siltide jaoks: {{cmd:ANNOSCALE}} seab uue teksti algkõrguse selleks kõrguseks annotatsiooni mõõtkavas. Vt [Ühikud, paberid ja mõõtkavad](topic:units-papers-scales#annotate-by-scale).

Tollides või jalgades joonis kasutab tolliväärtusi; igasugune muu joonis kasutab meetrilisi. Joonis ilma ühikuteta kasutab ühikusüsteemi, mis on seatud jaotises Sätted › Globaalne › Vaikepoliitikad, või meetrilist, kui midagi pole seatud.

## Jaga kontoris

1. Sätetes ava vahekaart **Globaalne** ja vali {{ui:Vaikepoliitikad}}.
2. Klõpsa {{ui:Salvesta faili}}. Saad väikese faili, mis lõpeb `.ccdefaults.json`.
3. Teises arvutis lülita lisandmoodul sisse, ava sama koht ja klõpsa {{ui:Lae failist}}. Faili poliitikad asendavad selle arvuti omad.

Üks fail hoiab kõigi CadCraft'i rakenduste poliitikaid, nii et sama fail töötab ka BimCraftis.

## Hea teada

- Lehe mõõtkava kohta poliitikat pole: uue lehe vaade mahutatakse joonisele ja selle mõõtkava sead lehel.
- Mõõdustiili kohta poliitikat pole: uuel joonisel pole nimega mõõdustiile. Seadista mõõdud käsuga DIMSTYLE või alusta joonisest, millel on sinu omad.
- Fail on lihtne, avatav JSON. Poliitika, mida fail nimetab ja mida see versioon ei tunne, jäetakse välja ja nimetatakse teates; ülejäänud laaditakse.
- Poliitikad hoitakse selles brauseris, mitte joonises. Lülita lisandmoodul välja ja kõik on jälle CadCraft'i enda omad.
