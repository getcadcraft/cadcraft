---
title: Redigera med handtag och Egenskaper
summary: Sträck, flytta och ändra storlek på objekt med deras handtag, och skriv exakta längder, radier, vinklar och koordinater i panelen Egenskaper.
keywords: handtag, egenskaper, töj, längd, radie, koordinater, redigera, snabbegenskaper, egenskapspalett, ändra, lager, färg, color
from: f22541ba
---

## Vad du lär dig

Två snabba sätt att ändra ett objekt utan ett kommando: dra i dess **handtag**, eller skriv nya värden i panelen **Egenskaper** till höger.

## Handtag

När du markerar objekt (upp till 200 åt gången) utan att något kommando körs visas små rutor på dem. Det här är handtag:

| Objekt | Handtag |
|---|---|
| Linje | Båda ändarna och mitten (flyttar hela linjen) |
| Cirkel | Centrum (flyttar den) och fyra punkter på cirkeln (ändrar radien) |
| Båge | Centrum och båda ändarna (ändrar var den börjar och slutar) |
| Polylinje | Varje hörn |
| Text, punkt, blockreferens | Infogningspunkten |
| Ellips | Centrum |
| Måttsättning | Dess definierande punkter och måttlinjens läge |
| Vyport | Centrum (flyttar den) och de fyra hörnen (ändrar storlek) |

### Flytta ett handtag

1. Rita en linje och klicka på den. Tre handtag visas.
2. Klicka på handtaget i ena änden. Statusfältet säger "Klicka där det här handtaget ska hamna (Esc avbryter). Fångst och Ortogonalt gäller."
3. Flytta korset. En förhandsvisning följer med.
4. Klicka på den nya positionen, eller fånga en punkt på ett annat objekt och klicka.

Änden flyttas och resten av linjen står kvar. Du kan också trycka på ett handtag och dra det, och sedan släppa det där det ska vara.

:::note
Du kan inte skriva en koordinat för ett handtag. För en exakt position, fånga en punkt, eller skriv värdet i Egenskaper.
:::

Tryck på {{key:Esc}} eller högerklicka för att avbryta en handtagsflyttning.

## Egenskaper

Den högra panelen visar egenskaperna för det som är markerat.

1. Klicka på en linje. Panelrubriken säger "Linje".
2. Klicka i {{ui:Längd}}, skriv `2500` och tryck på {{key:Enter}}.

Linjen är nu exakt 2500 lång och behåller sin startpunkt och vinkel. {{key:Enter}} eller ett klick någon annanstans tillämpar ett värde; {{key:Esc}} återställer det gamla värdet. Varje ändring är ett steg i ångra, även när många objekt ändras samtidigt.

Fält tar uttryck (`=2*45`) och längder med enheter (`3'6"`, `900mm`), varje punkt har X, Y och Z, och flera objekt kan ändras tillsammans. Allt detta finns i [Egenskapspanelen](topic:properties-panel).

## Vanliga misstag

- **Inga handtag visas.** Ett kommando körs (tryck på {{key:Esc}}), eller fler än 200 objekt är markerade, eller objektet ligger på ett låst lager.
- **Handtaget hamnade fel.** En fångst tog det. Håll {{key:Shift}} nedtryckt när du klickar för att ignorera fångster.
- **Inskrivning i Egenskaper gjorde inget.** Tryck på {{key:Enter}} eller klicka någon annanstans för att tillämpa. En avvisad inmatning (noll eller negativa längder och radier, text som inte är ett värde) gör fältet rött och säger varför.
- **Skrivna bokstäver hamnade i ett fält i Egenskaper.** Medan ett fält har markören skrivs tecknen där. Tryck på {{key:Enter}} eller {{key:Esc}} och skriv sedan kommandot.
