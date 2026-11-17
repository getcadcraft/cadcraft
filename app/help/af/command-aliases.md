---
title: Wysig opdragaliasse
summary: Hou jou eie opdragaliasse in een tekslêer in die bekende formaat, voer 'n .pgp-lêer in en uit, en laai dit weer met REINIT.
keywords: alias, aliasse, aliasedit, pgp, kortpad, kort naam, reinit, sleutelbord, pasmaak, wysig aliasse
from: 6ab6fa0e
---

## Wat jy sal leer

Hoe om jou eie kort name vir opdragte by te voeg, byvoorbeeld `LL` vir {{cmd:LINE}}, alles in een tekslêer.

## Voeg 'n alias by

1. Maak {{ui:Aansig}} › {{ui:Meer}} › {{ui:Wysig aliasse…}} oop, of tik {{cmd:ALIASEDIT}} en druk {{key:Enter}}.
2. Voeg 'n reël by met die alias, 'n komma en die opdrag ná 'n ster:

```
LL,     *LINE
```

3. Klik {{ui:Stoor}}. Die opdragreël sê hoeveel van jou aliasse in gebruik is.
4. Tik `LL` en druk {{key:Enter}}: LINE begin.

Jou aliasse sit bo-op CadCraft s'n. 'n Reël van jou wen van 'n ingeboude alias met dieselfde naam; verwyder jou reël en die ingeboude een is terug.

## Reëls wat CadCraft weier

Die redigeerder lys elke probleem met sy reëlnommer terwyl jy tik:

- die opdrag bestaan nie;
- die alias is self 'n opdrag se naam (`LINE, *CIRCLE` sal LINE verberg);
- die reël is nie `ALIAS, *COMMAND` nie;
- dieselfde alias staan op twee reëls (die later een wen).

Reëls wat 'n program op jou rekenaar begin, soos `NOTEPAD, START, 1, *File to edit: ,`, word oorgeslaan met 'n nota: 'n toepassing in die blaaier kan nie programme begin nie.

## Bring jou aliasse van 'n ander program

1. In die aliasredigeerder, klik {{ui:Voer .pgp in…}} en kies die lêer. Jy kan ook 'n `.pgp`-lêer op die tekening neersit.
2. Kontroleer die probleme wat gelys is (opdragte wat CadCraft nie het nie, word geweier; die res werk).
3. Klik {{ui:Stoor}}.

{{ui:Voer .pgp uit}} stoor CadCraft se aliasse en joune as een lêer in dieselfde formaat.

## Laai die lêer weer

Tik {{cmd:REINIT}} en druk {{key:Enter}} om jou aliaslêer weer toe te pas. Dit word in hierdie blaaier gehou; die rekenaarprogram sal dit in sy eie vouer hou, en die wolkdiens sal dit sinkroniseer.

## Sleutelbordkortpaaie vir enige opdrag

'n Alias word getik; 'n kortpad is 'n sleutel. Om 'n opdrag 'n sleutel van jou eie te gee:

1. Klik {{ui:Aansig}} › {{ui:Meer}} › {{ui:Sneltoetse…}}, of tik `KEYS` en druk {{key:Enter}}.
2. Klik op die {{ui:Sleutel}}-blokkie en druk die sleutels, byvoorbeeld {{key:Alt+Shift+C}}.
3. In {{ui:Voer uit}}, skryf die opdrag, en as jy wil, wat om ná dit te tik: `CIRCLE`, of `ZOOM E`.
4. Klik {{ui:Voeg by}}.

'n Sleutel het {{key:Mod}} of {{key:Alt}} nodig saam met 'n letter of syfer, of 'n vrye funksieknop ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Sleutels wat CadCraft, die program of die blaaier al gebruik, en sleutels wat 'n Eie gereedskap-knoppie het (sien [Knoppies van jou eie](topic:my-tools)), word geweier, en die blokkie sê waarom. Kortpaaie word in hierdie blaaier (of rekenaarprogram) gehou; {{ui:Verwyder}} haal een weg.
