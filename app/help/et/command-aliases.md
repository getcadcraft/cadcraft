---
title: Muuda käsualiaseid
summary: Hoia oma käsualiasi ühes tekstifailis tuttavas vormingus, impordi ja ekspordi .pgp-fail ning lae see uuesti käsuga REINIT.
keywords: alias, aliased, aliasedit, pgp, lühiklahv, lühinimi, reinit, klaviatuur, kohanda, muuda aliaseid
from: 6ab6fa0e
---

## Mida sa õpid

Kuidas lisada käskudele oma lühinimesid, näiteks `LL` käsule {{cmd:LINE}}, kõik ühes tekstifailis.

## Lisa alias

1. Ava {{ui:Vaade}} › {{ui:Veel}} › {{ui:Muuda aliaseid…}} või trüki {{cmd:ALIASEDIT}} ja vajuta {{key:Enter}}.
2. Lisa rida: alias, koma ja käsk pärast tärni:

```
LL,     *LINE
```

3. Klõpsa {{ui:Salvesta}}. Käsurida ütleb, mitu sinu aliast on kasutusel.
4. Trüki `LL` ja vajuta {{key:Enter}}: LINE käivitub.

Sinu aliased asuvad CadCrafti omade peal. Sinu rida võidab sisseehitatud aliasi, millel on sama nimi; eemalda oma rida ja sisseehitatud alias tuleb tagasi.

## Read, mida CadCraft ei luba

Redaktor loetleb iga probleemi koos reanumbriga, kui kirjutad:

- käsku ei ole olemas;
- alias on juba mõne käsu nimi (`LINE, *CIRCLE` peidaks LINE’i);
- rida ei ole kujul `ALIAS, *COMMAND`;
- sama alias on kahel real (hilisem võidab).

Read, mis käivitavad programmi sinu arvutis, nagu `NOTEPAD, START, 1, *File to edit: ,`, jäetakse vahele märkusega: brauseris olev rakendus ei saa programme käivitada.

## Too oma aliased teisest programmist

1. Alias-redaktoris klõpsa {{ui:Impordi .pgp…}} ja vali fail. Võid ka lohistada `.pgp`-faili joonisele.
2. Kontrolli loetletud probleeme (CadCrafti mitteolevad käsud lükatakse tagasi, ülejäänud töötavad).
3. Klõpsa {{ui:Salvesta}}.

{{ui:Ekspordi .pgp}} salvestab CadCrafti aliased ja sinu omad ühe failina samas vormingus.

## Laadi fail uuesti

Trüki {{cmd:REINIT}} ja vajuta {{key:Enter}}, et rakendada oma aliasefail uuesti. See hoitakse selles brauseris; töölauarakendus hoiab seda oma kaustas ja pilveteenus sünkroonib selle.

## Klahvikombinatsioonid mis tahes käsule

Alias trükitakse; klahvikombinatsioon on klahv. Käsule oma klahvi andmiseks:

1. Klõpsa {{ui:Vaade}} › {{ui:Veel}} › {{ui:Klahvikombinatsioonid…}} või trüki `KEYS` ja vajuta {{key:Enter}}.
2. Klõpsa kasti {{ui:Klahv}} ja vajuta klahve, näiteks {{key:Alt+Shift+C}}.
3. Kirjuta väljale {{ui:Käivitab}} käsk ja vajadusel, mida selle järele trükkida: `CIRCLE` või `ZOOM E`.
4. Klõpsa {{ui:Lisa}}.

Klahv vajab {{key:Mod}} või {{key:Alt}} koos tähe või numbriga, või vaba funktsiooniklahvi ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Klahve, mida CadCraft, rakendus või brauser juba kasutavad, ning klahve, mis on nupul Minu tööriistad (vaata [Oma nupud](topic:my-tools)), ei lubata ja kast ütleb, miks. Klahvikombinatsioonid hoitakse selles brauseris (või töölauarakenduses); {{ui:Eemalda}} võtab ühe ära.
