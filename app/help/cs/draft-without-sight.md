---
title: Kreslení bez zraku
summary: Zapněte Přístup a CadCraft přečte každý příkaz a výsledek přes vaši čtečku obrazovky, popíše výkres a to, co je blízko kurzoru, nechá vás přesouvat kurzor klávesnicí, přehraje zvuk pro každé přichycení a úchyt a přijímá příkazy hlasem, pokud to váš prohlížeč na vašem počítači umí.
keywords: přístupnost, čtečka obrazovky, nevidomí, slabozrací, NVDA, VoiceOver, JAWS, Orca, kurzor klávesnice, hlasové příkazy, řeč, zvuky, zvuky přichycení, popsat výkres, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Přístup** vám umožní kreslit bez pohledu na obrazovku. Je vypnutý, dokud ho nezapnete, aby ho nikdo nezapnul omylem.

## Zapnutí

Otevřete **Nastavení** (ozubené kolo nebo Ctrl+,), najděte **Kreslení bez zraku** a zvolte **Zapnout**. Nebo napište `ACCESS` do příkazového řádku a odpovězte `Zapnout`. Volba se na tomto počítači pamatuje.

Když je Přístup zapnutý:

- **Vše, co říká příkazový řádek, se přečte** přes vaši čtečku obrazovky: co jste napsali, výzva, kterou příkaz klade, odpověď a každá chyba. CadCraft používá vlastní zdvořilé a naléhavé živé oblasti, takže čtečka, která čte živé oblasti, nepotřebuje žádné nastavení. Chyby a zrušení přeruší čtení; vše ostatní počká na svou řadu.
- **Kreslicí plocha je dosažitelná.** Stiskněte Tab, dokud neuslyšíte „Výkres“, nebo stiskněte Shift+Tab z příkazového řádku. Je to oblast, která předává klávesy do CadCraft.

## Klávesy na výkresu

| Klávesa | Co dělá |
|---|---|
| Šipky | Přesouvají kurzor klávesnice. Krok je zhruba setina toho, co obrazovka ukazuje, zaokrouhlená na 1, 2 nebo 5. Shift jde desetkrát dál, Ctrl desetinu. |
| Enter | Vybere bod pod kurzorem, přesně jako by to udělalo kliknutí. |
| Space | Stiskne Enter na příkazovém řádku: dokončí LINE, převezme výchozí hodnotu. |
| Tab, Shift+Tab | Přeskočí na další nebo předchozí bod přichycení blízko kurzoru, nejbližší jako první. |
| G | Prochází úchyty vybraných objektů. |
| D | Popíše výkres: kolik je objektů, jakých druhů, jak velké a co je vybráno. |
| W | Řekne, kde je kurzor a jak je daleko od posledního bodu. |
| N | Řekne, co je blízko kurzoru, nejbližší jako první, se vzdáleností a stranou. |
| S | Popíše vybrané objekty. |
| R | Zopakuje poslední řečené. |
| V | Zapne nebo vypne hlas. |
| / | Přejde na příkazový řádek. |
| ? | Vypíše tyto klávesy. |

Pohyb klávesami říká, kde jste přistáli. Když příkaz čeká na bod, řekne také, jak daleko a kterým směrem jste od posledního bodu, například „2400 od posledního bodu, vpravo, pod úhlem 0 stupňů“.

## Příkazy

- {{cmd:ACCESS}} zapne nebo vypne Přístup, zvuky přichycení a hlas a řekne stav.
- {{cmd:DESCRIBE}} řekne, co výkres obsahuje.
- {{cmd:WHEREAMI}} řekne, kde je kurzor.
- {{cmd:NEARBY}} řekne, co leží blízko kurzoru.
- {{cmd:SAYSEL}} řekne, co je vybráno, jednu větu na objekt.
- {{cmd:VOICE}} zapne nebo vypne mluvené příkazy.

Těchto pět příkazů čte výkres a vypisuje odpověď; nic nemění.

## Zvuky pro přichycení a úchyty

Zapněte **Zvuky přichycení a úchytů** v Nastavení. Každý druh přichycení má vlastní výšku tónu a zvuk, takže poznáte koncový bod od středu úsečky, středu kružnice, průsečíku a ostatních, a úchyt má dvojité cvaknutí. Zvuk se posouvá doleva nebo doprava podle toho, kde je kurzor na obrazovce. Zvuky vznikají na vašem počítači; nic se nestahuje.

## Příkazy hlasem

Zapněte **Příkazy hlasem** v Nastavení. Řekněte název příkazu („line“, „circle“, „move“) a pak čísla tak, jak byste je přečetli: „bod tři sta čárka čtyři sta“, „vzdálenost dvanáct set“, „úhel čtyřicet pět“. „Enter“, „cancel“, „undo“ a „redo“ dělají to, co říkají. Co bylo slyšet, se vám řekne zpět, a fráze, která není příkazem, se nahlásí, nikoli se neodhaduje.

**Kde se řeč rozpoznává.** CadCraft nemá vlastní službu pro řeč a nikam neposílá zvuk. Požádá váš prohlížeč, aby rozpoznal řeč na tomto počítači. Pokud to prohlížeč umí, volba je **Na tomto počítači** a žádný zvuk ho neopustí. Pokud to neumí, hlas zůstane vypnutý, pokud nezvolíte **Online služba prohlížeče**, která prohlížeči umožní poslat zvuk službě jeho výrobce. Nastavení ukáže, které platí, dříve než se rozhodnete.

## Co zatím nedělá

- Přístup má jen CadCraft. Ostatních sedm aplikací bude následovat se stejnými klávesami a zvuky.
- Text ve výkresu (poznámka, název bloku) se přečte tak, jak je napsán; nikdy se nebere jako pokyn.
- Vyzkoušelo se to na syntetických kontrolách a testech prohlížeče; ruční kontroly s NVDA, VoiceOver a s nevidomým nebo slabozrakým testerem ještě přijdou. Pokud to zkoušíte, řekněte nám, co chybí.
