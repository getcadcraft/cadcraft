---
title: Aprire un DWG di CadCraft in altri programmi
summary: Quali programmi hanno aperto un DWG salvato da CadCraft, cosa viene verificato e cosa fare quando uno di essi segnala un problema.
keywords: dwg, apri in altri programmi, compatibilità, si apre, audit, trueview, altri programmi cad, dxf, verifica, salva come dwg
from: 0f8c15c4
---

## Cosa scrive CadCraft

{{ui:Salva}} scrive un vero DWG, nella versione con cui è arrivato il disegno o in quella scelta in {{ui:Salva con nome}}: AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018. Nulla viene convertito all'insaputa: la cronologia elenca ciò che è cambiato per strada (per esempio un colore reale scritto come il colore standard più vicino in un DWG 2000).

## Dove è stato aperto

Ogni DWG scritto da CadCraft viene aperto, in ogni versione, da tre programmi che non sono CadCraft: ODA File Converter (che verifica il file e non ripara nulla), LibreDWG e libdxfrw. La loro lettura viene confrontata con quella di CadCraft: oggetti, layer, blocchi e attributi, quote, tratteggi, tavole e le relative viewport.

L'apertura dei DWG di CadCraft in AutoCAD e nel DWG TrueView gratuito è in corso di verifica su Windows, tipo di oggetto per tipo di oggetto (AUDIT, layer, tavole, quote, tratteggi, attributi, blocchi dinamici, riferimenti ritagliati, immagini). I risultati saranno elencati qui quando saranno pronti.

## Quando un altro programma segnala un problema

1. Salvare di nuovo come DXF ({{ui:Salva con nome}} › {{ui:DXF 2000}}) e aprire quello: la maggior parte dei programmi legge il DXF.
2. Salvare il DWG in una versione precedente (2013 o 2010).
3. Segnalarlo su Discord indicando il programma, la versione e cosa ha detto; il file aiuta moltissimo.
