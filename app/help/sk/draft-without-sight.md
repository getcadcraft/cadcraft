---
title: Kreslenie bez zraku
summary: Zapnite Prístup a CadCraft bude cez čítačku obrazovky hovoriť každý príkaz a výsledok, opisovať výkres a to, čo je pri kurzore, umožní posúvať kurzor klávesnicou, prehrá zvuk pri každom uchopení a úchyte a prijíma príkazy hlasom, ak to váš prehliadač na vašom počítači dokáže.
keywords: prístupnosť, čítačka obrazovky, nevidiaci, slabozrakí, NVDA, VoiceOver, JAWS, Orca, klávesový kurzor, hlasové príkazy, reč, zvuky, zvuky uchopenia, opísať výkres, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Prístup** vám umožňuje kresliť bez pohľadu na obrazovku. Je vypnutý, kým ho nezapnete, takže ho nikto nezapne omylom.

## Zapnutie

Otvorte **Nastavenia** (ozubené koliesko alebo Ctrl+,), nájdite **Kreslenie bez zraku** a zvoľte **Zapnuté**. Alebo napíšte `ACCESS` do príkazového riadku a odpovedzte `On`. Zapamätá sa na tomto počítači.

S zapnutým Prístupom:

- **Všetko, čo hovorí príkazový riadok, sa prečíta** cez čítačku obrazovky: čo ste napísali, výzva, odpoveď a každá chyba. CadCraft používa vlastné zdvorilé a naliehavé živé oblasti, takže čítačka, ktorá číta živé oblasti, nepotrebuje žiadne nastavenie. Chyby a zrušenia prerušia čítanie; všetko ostatné čaká na svoje poradie.
- **Oblasť výkresu je dostupná.** Stláčajte Tab, kým nepočujete „Výkres“, alebo stlačte Shift+Tab z príkazového riadku. Je to oblasť, ktorá posiela klávesy do CadCraft.

## Klávesy na výkrese

| Kláves | Čo robí |
|---|---|
| Šípky | Posúvajú klávesový kurzor. Krok je asi stotina toho, čo ukazuje obrazovka, zaokrúhlená na 1, 2 alebo 5. Shift posúva desaťkrát ďalej, Ctrl desatinu. |
| Enter | Vyberie bod pod kurzorom, presne ako kliknutie. |
| Space | Stlačí Enter na príkazovom riadku: dokončí LINE, zvolí predvolenú hodnotu. |
| Tab, Shift+Tab | Presunie na ďalší alebo predchádzajúci bod uchopenia pri kurzore, najbližší ako prvý. |
| G | Prechádza úchyty vybraných objektov. |
| D | Opíše výkres: koľko objektov, akého druhu, akej veľkosti a čo je vybrané. |
| W | Povie, kde je kurzor a aká je vzdialenosť od posledného bodu. |
| N | Povie, čo je pri kurzore, od najbližšieho, so vzdialenosťou a stranou. |
| S | Opíše vybrané objekty. |
| R | Zopakuje poslednú vec. |
| V | Zapne alebo vypne hlas. |
| / | Prejde na príkazový riadok. |
| ? | Vypíše tieto klávesy. |

Pohyb klávesmi povie, kde ste pristáli. Keď príkaz čaká na bod, povie aj to, ako ďaleko a akým smerom ste od posledného bodu, napríklad „2400 od posledného bodu, doprava, pod uhlom 0 stupňov“.

## Príkazy

- {{cmd:ACCESS}} zapína a vypína Prístup, zvuky uchopenia a hlas a povie stav.
- {{cmd:DESCRIBE}} povie, čo výkres obsahuje.
- {{cmd:WHEREAMI}} povie, kde je kurzor.
- {{cmd:NEARBY}} povie, čo leží blízko kurzora.
- {{cmd:SAYSEL}} povie, čo je vybrané, jedna veta na objekt.
- {{cmd:VOICE}} zapína alebo vypína hlasové príkazy.

Týchto päť príkazov iba číta výkres a vypíše odpoveď; nič nemení.

## Zvuky pre uchopenia a úchyty

Zapnite **Zvuky uchopení a úchytov** v Nastaveniach. Každý druh uchopenia má vlastnú výšku tónu a zvuk, takže rozoznáte koncový bod od stredu, stredu kružnice, priesečníka a ďalších, a úchyt má dvojité cvaknutie. Zvuk sa posúva vľavo alebo vpravo podľa toho, ako sa kurzor pohybuje po obrazovke. Zvuky vytvára váš počítač; nič sa nesťahuje.

## Príkazy hlasom

Zapnite **Príkazy hlasom** v Nastaveniach. Povedzte názov príkazu („line“, „circle“, „move“) a potom čísla tak, ako by ste ich čítali: „bod tristo čiarka štyristo“, „vzdialenosť dvanásťsto“, „uhol štyridsaťpäť“. „Enter“, „cancel“, „undo“ a „redo“ urobia to, čo znamenajú. Rozpoznaný text sa vám povie späť a fráza, ktorá nie je príkazom, sa nahlási, nehádá sa.

**Kde sa reč rozpoznáva.** CadCraft nemá vlastnú službu rozpoznávania reči a nikam neposiela zvuk. Požiada váš prehliadač, aby reč rozpoznal na tomto počítači. Ak to váš prehliadač dokáže, voľba je **V tomto počítači** a žiadny zvuk ho neopustí. Ak nie, hlas zostane vypnutý, pokiaľ nezvolíte **Online služba prehliadača**, ktorá umožní prehliadaču poslať zvuk službe rozpoznávania reči jeho výrobcu. Nastavenia ukážu, ktorá možnosť platí, skôr ako sa rozhodnete.

## Čo ešte nerobí

- Prístup má iba CadCraft. Ostatných sedem aplikácií nasleduje s rovnakými klávesmi a zvukmi.
- Text vo výkrese (poznámka, názov bloku) sa prečíta tak, ako je napísaný; nikdy sa nebude brať ako pokyn.
- Vyskúšané boli syntetické kontroly a testy prehliadača; ručné kontroly s NVDA, VoiceOver a s nevidiacim alebo slabozrakým testerom ešte prídu. Ak to vyskúšate, napíšte nám, čo chýba.
