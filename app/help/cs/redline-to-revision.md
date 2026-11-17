---
title: Převedení poznámky na revizi
summary: Načtěte balíček redline, který zapisuje MarkupCraft, přijměte nebo zamítněte každou změnu, přidejte na přijaté revizní oblak a revizní záznam a uložte soubor odpovědí, který MarkupCraft načte zpět.
keywords: redline, poznámka, revize, oblak, revizní oblak, revizní záznam, přijmout, zamítnout, markupcraft, kontrola, balíček redline, odpovědi, REDLINE
from: cdb3fafe
---

Recenzent označí sadu plánů v MarkupCraft a pošle vám **balíček redline**, soubor končící na `.redline.json`. Zde jej projdete změnu po změně a přijaté změny se stanou revizními oblaky na výkresu.

## Projděte změny

Napište {{cmd:REDLINE}} (`RDL`) a vyberte balíček. Zvolte:

- {{ui:Seznam}}: každou změnu s jejím číslem, stavem, listem, druhem, tím, kdo se ptal, a tím, co napsal.
- {{ui:Přijmout}}, {{ui:Zamítnout}}, {{ui:Hotovo}}: napište čísla (`1,3-5`, nebo `All`) a volitelnou poznámku pro soubor odpovědí. {{ui:Znovu otevřít}} vrátí změny na otevřené.
- {{ui:Rámec}}: část výkresu, kterou ukazuje list s poznámkami. Klepněte na dva rohy; stiskněte {{key:Enter}} pro celý výkres. Změny se umístí podle toho, kde byly na listu, a právě tím se zarovnají.
- {{ui:Použít}}: nakreslí revizní oblak (vrstva `REV-CLOUD`, s revizním písmenem) kolem každé přijaté nebo hotové změny a revizní záznam, přehlednou tabulku toho, co bylo přijato, s vašimi poznámkami (vrstva `REV-LOG`), napravo od výkresu. Jeden krok zpět.
- {{ui:Uložit}}: zapíše `<project>-<revision>.redline-answers.json`. Otevřete jej v MarkupCraft a poznámky se zavřou jako Přijato, Zamítnuto nebo Dokončeno, s vašimi poznámkami jako komentáři.

## Co je třeba vědět

To, co recenzent napsal, se ukáže tak, jak bylo napsáno. CadCraft nikdy nesleduje pokyny nalezené v balíčku; jen vám je ukazuje.

Zamítnuté a otevřené změny nic na výkres nepřidají. Balíček se čte na vašem počítači; nic se nenahrává.

Je-li připojen váš asistent, může balíček číst, zaznamenávat rozhodnutí a aplikovat je pomocí nástrojů `redline_read`, `redline_decide`, `redline_apply` a `redline_answers`; změna výkresu proběhne v jednom kroku zpět, „Asistent: Redline na revizi“.
