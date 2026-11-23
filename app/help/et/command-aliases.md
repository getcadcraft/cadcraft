---
title: Muuda käsualiaseid
summary: Hoia oma käsualiaseid ühes tekstifailis tuttavas vormingus, impordi ja ekspordi .pgp-fail ning laadi see käsuga REINIT uuesti.
keywords: alias, aliases, aliasedit, pgp, otsetee, lühinimi, reinit, klaviatuur, kohandamine, muuda aliaseid
from: 2282d36f
---

## Mida sa õpid

Kuidas lisada käskudele oma lühinimed, näiteks `LL` käsule {{cmd:LINE}}, kõik ühes tekstifailis.

## Alias lisamine

1. Ava {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}} või sisesta {{cmd:ALIASEDIT}} ja vajuta {{key:Enter}}.
2. Lisa rida, kus on alias, koma ja tärniga eelnev käsk:

```
LL,     *LINE
```

3. Klõpsa {{ui:Save}}-l. Käsurida ütleb, mitu sinu aliast on kasutusel.
4. Sisesta `LL` ja vajuta {{key:Enter}}: käivitub LINE.

Sinu aliased asuvad CadCrafti omade peal. Sinu rida võidab sisseehitatud aliase, millel on sama nimi; kui eemaldad oma rea, tuleb sisseehitatud alias tagasi.

## Read, mida CadCraft ei luba

Redaktor loetleb sisestamise ajal iga probleemi koos rea numbriga:

- käsku ei ole olemas;
- alias on ise mõne käsu nimi (`LINE, *CIRCLE` peidaks käsu LINE);
- rida ei ole kujul `ALIAS, *COMMAND`;
- sama alias on kahel real (hilisem rida võidab).

Read, mis käivitavad programmi sinu arvutis, näiteks `NOTEPAD, START, 1, *File to edit: ,`, jäetakse märkusega vahele: brauseris töötav rakendus ei saa programme käivitada.

## Too oma aliased teisest programmist

1. Aliaste redaktoris klõpsa {{ui:Import .pgp…}} ja vali fail. Võid ka lohistada `.pgp`-faili joonisele.
2. Kontrolli loetletud probleeme (käske, mida CadCraftil ei ole, ei võeta vastu; ülejäänud töötavad).
3. Klõpsa {{ui:Save}}-l.

{{ui:Export .pgp}} salvestab CadCrafti ja sinu aliased ühe samas vormingus failina.

## Laadi fail uuesti

Sisesta {{cmd:REINIT}} ja vajuta {{key:Enter}}, et rakendada oma aliasefail uuesti. See hoitakse selles brauseris; töölauarakendus hoiab seda oma kaustas ja pilveteenus sünkroonib selle.

## Käsu suvandite tähed

Alias nimetab käsku. Käsu suvandeid vastavate tähtede muutmiseks (`P` tähendab käsus {{cmd:ARRAY}} suvandit Polaar) vaata [Anna käsu suvanditele oma tähed](topic:option-letters).

## Otseteed mis tahes käsule

Alias sisestatakse; kiirklahv on klahv. Käsule oma klahvi andmiseks:

1. Klõpsa {{ui:View}} › {{ui:More}} › {{ui:Keyboard shortcuts…}} või sisesta `KEYS` ja vajuta {{key:Enter}}.
2. Klõpsa kastil {{ui:Key}} ja vajuta klahve, näiteks {{key:Alt+Shift+C}}.
3. Väljale {{ui:Runs}} kirjuta käsk ja soovi korral, mida sisestada pärast seda: `CIRCLE` või `ZOOM E`.
4. Klõpsa {{ui:Add}}-l.

Klahv vajab {{key:Mod}} või {{key:Alt}} koos tähe või numbriga, või vaba funktsiooniklahvi ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Klahve, mida juba kasutavad CadCraft, rakendus või brauser, ning klahve, mis on nupul Minu tööriistad (vt [Oma nupud](topic:my-tools)), ei võeta vastu ja kast ütleb põhjuse. Otseteid hoitakse selles brauseris (või töölauarakenduses); {{ui:Remove}} eemaldab ühe.
