---
title: Dokumenty a revízie (trezor)
summary: Prejdite jednu skutočnú prácu krok za krokom: dajte priečinok projektu pod kontrolu, rezervujte výkres, zmeňte ho, vráťte ho s poznámkou, pošlite na kontrolu, schváľte a uvoľnite, pozrite históriu a použitie, čo vidí druhá osoba pri uzamknutí a ako to funguje s cloudovými priečinkami.
keywords: trezor, dokumenty, postup, návod, rezervovať, vrátiť, revízia, uvoľnenie, schváliť, zámok, história, kde sa používa, cloudový priečinok, priečinok projektu, správa dokumentov, pdm, dvaja ľudia, zdieľaný priečinok
from: 3829528d
---

## Čo budete robiť

Ste Ana a pracujete na projekte Riverside Clinic s kolegom Benom. Výkresy projektu sú v jednom priečinku, ku ktorému máte prístup obaja (zdieľaná jednotka, synchronizovaný priečinok alebo cloudový priečinok). Na konci jeden súbor prejde od prvej kópie k uvoľnenej revízii **A**, bude znova zmenený ako **B.1**, uvidíte, kto čo urobil, a uvidíte, čo vidí Ben, keď držíte súbor.

Všetko sa uchováva v skrytom priečinku `.ccvault` vedľa vašich súborov: bez servera, nič sa nenahráva (výnimkou je cloudový priečinok, pozri posledný krok). Pre každé tlačidlo a pravidlo na jednom mieste pozrite tému *Dokumenty: rezervácia, revízie a uvoľnenie*, kde ju vaša aplikácia má.

## 1. Nastavenie priečinka projektu

1. Zvoľte {{ui:Dokumenty…}} v ponuke **Viac** na karte **Zobrazenie**, alebo napíšte `DOCUMENTS` (alebo `DOCS`) a stlačte {{key:Enter}}.
2. Zvoľte {{ui:Vybrať priečinok projektu}} a vyberte priečinok, ktorý obsahuje výkresy projektu. (Priečinky projektu fungujú v Studiu a v prehliadačoch, ktoré dokážu otvoriť priečinok, napríklad Chrome a Edge. V iných prehliadačoch to panel uvedie.)
3. Zvoľte {{ui:Zmeniť}} vedľa **Vy:** a napíšte svoje meno, `Ana` (ak sa spýta, aj názov tohto počítača). Panel teraz zobrazí *Vy: Ana na* a váš počítač. Vaše meno sa uvedie pri všetkom, čo urobíte.
4. Zvoľte {{ui:Založiť trezor v tomto priečinku}} a napíšte názov projektu, `Riverside clinic`. Panel zobrazí *Trezor bol založený pre Riverside clinic.*

## 2. Dajte súbor pod kontrolu

1. Otvorte **Súbory mimo trezora** a zvoľte {{ui:Pridať}} vedľa `plans/A-101.dxf`.
2. Objaví sa pod **Súbory v trezore** v revízii **A.1**, so stavom **Rozpracované**. A.1 je jeho prvá kópia; trezor uchováva kópiu každej revízie.

## 3. Rezervovať, zmeniť, vrátiť

1. Zvoľte {{ui:Otvoriť}} vedľa `plans/A-101.dxf`. Výkres sa otvorí v CadCraft a panel sa zavrie, aby ste ho videli. Panel je stále jeden príkaz vzdialený: `DOCUMENTS`.
2. Panel znova otvorte a zvoľte {{ui:Rezervovať}}. Riadok teraz hovorí **Rezervované pre vás**. V `.ccvault/locks` sa vytvoril zámkový súbor; nikto iný si tento súbor nemôže rezervovať, kým ho nevrátite.
3. Nakreslite niečo: pridajte čiaru, presuňte stenu. Nič, čo urobíte, sa nedá uložiť cez súbor trezora, pokiaľ výkres nie je rezervovaný pre vás; Uložiť ako vždy funguje pre vašu vlastnú kópiu.
4. Otvorte panel, zvoľte {{ui:Vrátiť}} a napíšte, čo sa zmenilo (`Moved the door`). Panel zobrazí *vrátené ako A.2*. Súbor v priečinku projektu je teraz výkres, ktorý ste mali otvorený, a zámok zmizol. Vrátenie bez zmeny ponechá revíziu.

Ak si to rozmyslíte, {{ui:Zrušiť rezerváciu}} vráti súbor späť bez novej revízie.

## 4. Kontrola a uvoľnenie

1. Zvoľte {{ui:Poslať na kontrolu}}. Stav sa zmení na **Na kontrole** a súbor je len na čítanie.
2. Pred schválením zvoľte {{ui:Nastavenia projektu}} a uveďte, kto môže schváliť (jedno meno na riadok), napríklad `Ben` a `Carla`, a zaškrtnite pravidlo, že schvaľujúci musí byť iný než autor. Zvoľte {{ui:Uložiť nastavenia}}. Odteraz trezor sám odmietne každého iného.
3. Ben (alebo Carla) zvolí {{ui:Schváliť}} a napíše meno schvaľujúceho. Stav sa zmení na **Uvoľnené** a revízia na **A**, s poľom *schválenie* a menom. Uvoľnený súbor je len na čítanie. {{ui:Vrátiť na prepracovanie}} by ho vrátilo do stavu Rozpracované, s uvedením dôvodu.

Meno schvaľujúceho je meno napísané v paneli; je to záznam o tom, kto schválil, nie dôkaz totožnosti.

## 5. Nová revízia

1. Pri uvoľnenom súbore zvoľte {{ui:Nová revízia}}. Držíte ju pre ďalšie písmeno.
2. Zmeňte ho a potom {{ui:Vrátiť}}. Revízia je **B.1**, rozpracovaná. Uvoľnite ju rovnako a stane sa **B**. {{ui:Zrušiť rezerváciu}} pred prvým vrátením ju ponechá na **A**.

Písmená revízií idú A, B … Z, AA, AB. Ak váš štandard niektoré písmená vynecháva, nastavenie projektu *Použiť postupnosť ASME Y14.35* pri ďalších revíziách preskočí I, O, Q, S, X a Z.

## 6. Pozrite si, čo sa stalo

Zvoľte názov súboru, aby ste otvorili jeho podrobnosti:

- **{{ui:História}}**: každá udalosť, najnovšia prvá, s uvedením kto, na akom počítači a kedy: *Vrátené ako A.2* (Ana), *Uvoľnené* (Ben) a podobne.
- **{{ui:Revízie}}**: tabuľka revízií. {{ui:Otvoriť kópiu}} otvorí revíziu ako obyčajnú kópiu, ktorá nemôže prepísať súbor trezora; {{ui:Porovnať s}} vypíše, čo bolo pridané, odstránené a zmenené oproti predchádzajúcej revízii alebo akejkoľvek inej.
- **{{ui:Používa}}**: výkresy, na ktoré odkazuje (externé referencie).
- **{{ui:Používa ho}}**: zoznam všetkých ďalších výkresov v trezore, ktoré odkazujú na tento: ak zmeníte základný pôdorys, viete, ktoré listy treba skontrolovať.

## Revízia na liste

Keď je výkres otvorený (a je v ňom rozloženie), zvoľte {{ui:Revízna tabuľka}}: tabuľka uvoľnených revízií sa nakreslí v pravom hornom rohu listu. Zvoľte {{ui:Vyplniť popisové polia}}, aby sa atribúty popisového poľa označené `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` alebo `APPROVED_BY` vyplnili revíziou, stavom, dátumom a schvaľujúcim súboru. Keď schválite ďalšie uvoľnenie, revízna tabuľka sa aktualizuje.

## 7. Čo vidí Ben, kým držíte súbor

Teraz súbor znova rezervujte a požiadajte Bena, aby otvoril ten istý priečinok projektu na svojom počítači a otvoril panel. V riadku súboru uvidí **Rezervované: Ana na** váš počítač **od** času a žiadne tlačidlo {{ui:Rezervovať}}. Ak to aj tak skúsi, trezor odmietne: zámok je súbor, ktorý systém nevytvorí dvakrát, takže dvaja ľudia nemôžu držať súbor naraz ani v tej istej zlomku sekundy, keď je priečinok na disku v Studiu. (V prehliadači priečinok zaručuje len najlepšie úsilie a panel to uvedie pod **Priečinok**.)

Ak je Ana preč a Ben súbor potrebuje, {{ui:Zrušiť cudziu rezerváciu}} ho uvoľní. Musí napísať dôvod; ide do záznamu spolu s tým, čia rezervácia to bola. Ak projekt uvádza správcov, môžu to urobiť len oni. Rezervácia staršia než limit zastarania (štandardne 14 dní) je označená ako *dlhú dobu*. Po zrušení je neskoré vrátenie od Any odmietnuté, takže si navzájom nemôžete prepísať súbor.

## 8. Cloudové priečinky

Cloudový priečinok je priečinok projektu uložený v cloudovom úložisku vášho tímu, takže tím nepotrebuje zdieľanú jednotku. V Studiu, prihlásení do svojho účtu CadCraft, panel zobrazí {{ui:Otvoriť cloudový priečinok}} vedľa {{ui:Vybrať priečinok projektu}}. Zvoľte ho a vyberte priečinok, uvedený ako pracovný priestor / priečinok. Vlastník pracovného priestoru najprv vytvorí priečinok a cloudové úložisko tímu musí byť platné. Všetko vyššie funguje rovnako; zámok vytvára server, ktorý je prísny naprieč ľuďmi. Ak nie ste prihlásení, panel vás vyzve na prihlásenie. V bežnej karte prehliadača sa tlačidlo cloudu neponúka; použite Studio.

## Vyskúšajte

Urobte osem krokov vyššie s kópiou skutočného súboru. Pre kroky pre dvoch ľudí potrebujete ďalšiu osobu, alebo dve okná s dvoma menami. Ak to vyskúšate so skutočným zdieľaným priečinkom, stránka komunitného testovania uvádza kontrolu, ktorá sa pýta presne toto, a prijíma výsledky.
