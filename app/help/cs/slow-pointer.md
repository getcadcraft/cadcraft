---
title: Kurzor přeskakuje nebo se opožďuje nad výkresem
summary: Co dělat, když křížek nesleduje myš plynule na starším nebo pomalejším počítači.
keywords: skákání kurzoru, zpoždění kurzoru, pomalý křížek, trhavý kurzor, starý počítač, stará grafická karta, integrovaná grafika, hardwarová akcelerace, plynulejší kurzor, pomalý notebook
from: 39dc9057
---

CadCraft běží v prohlížeči (CadCraft Studio je také zobrazení v prohlížeči), takže v něm nic není stavěné pro jednu grafickou kartu ani pro jinou. Křížek kreslí aplikace, což znamená, že se může pohybovat jen tak rychle, jak aplikace dokáže vykreslit snímek.

## Nechte CadCraft omezit doplňky

1. Otevřete {{ui:Nastavení}} (ozubené kolo vpravo nahoře) a zůstaňte na kartě {{ui:CadCraft}}.
2. Zvolte {{ui:Plynulejší kurzor na pomalejších počítačích}}.
3. Vyberte {{ui:Zapnuto}}.

Při zapnutí se místo nakresleného křížku a výběrového čtverečku použije vlastní kurzor vašeho počítače (včetně celoobrazovkového křížku) a objekt pod kurzorem se zvýrazní, až když kurzor zastaví, ne když se pohybuje. Uchopení objektů, sledování a gumová čára fungují jako dříve.

{{ui:Automaticky}} je způsob, jakým CadCraft startuje: sleduje, jak dlouho trvají snímky, když pohybujete kurzorem, a sám to zapne, když zůstanou pomalé několik sekund. Jednou vás o tom informuje. {{ui:Vypnuto}} ponechá nakreslený křížek bez ohledu na rychlost.

## Pokud je to stále pomalé

- Ověřte, že je v prohlížeči zapnutá hardwarová akcelerace: v nové záložce otevřete `chrome://gpu` (nebo `edge://gpu`). Pokud první řádky říkají "Software only" nebo "Disabled", prohlížeč kreslí bez grafické karty. Aktualizace ovladače grafiky to často spraví.
- Zavřete ostatní náročné karty a programy a zkuste menší okno prohlížeče.
- Dejte nám vědět přes {{ui:Nápověda}}, {{ui:Nahlásit problém}}: napište, zda používáte prohlížeč nebo CadCraft Studio, jeho verzi a co je na stránce gpu.
