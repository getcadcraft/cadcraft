---
title: Dokumenty: rezervácia, revízie a schválenie
summary: Majte výkresy projektového priečinka pod kontrolou: rezervujte súbor, aby ho nikto iný nemenil, vráťte ho ako novú revíziu, pošlite ho na kontrolu a schváľte menom schvaľovateľa; história, väzby medzi súbormi, kusovník a popisové polia, ktoré zobrazujú revíziu.
keywords: nastavenia projektu, schvaľovatelia, správcovia, písmená revízií, ASME, iba na čítanie, porovnať revízie, otvoriť kópiu, partcraft, bimcraft, dokumenty, DOCUMENTS, DOCS, trezor, správa dokumentov, pdm, rezervácia, vrátiť, checkout, checkin, zámok, revízia, rev, písmeno revízie, schválenie, kontrola, zastaraný, kde sa používa, bom, kusovník, popisové pole, revízna tabuľka, projektový priečinok
from: ee938722
---

## Čo vytvoríte

Projektový priečinok, kde má každý výkres revíziu (A.1, A.2 … potom A, B …) a stav (Rozpracované, Na kontrolu, Schválené, Zastaralé), kde môže súbor meniť naraz iba jedna osoba a kde je zapísané každé rezervovanie, vrátenie, schválenie a zrušenie cudzej rezervácie spolu s tým, kto to urobil a kedy.

Všetko je uložené priamo v priečinku, v skrytom priečinku `.ccvault` vedľa vašich výkresov. Priečinok na zdieľanom disku alebo synchronizovaný priečinok funguje pre celý tím. Nie je tu žiadny server a nič sa nenahráva.

## Otvorenie dokumentov

Napíšte `DOCUMENTS` (alebo `DOCS`) a stlačte {{key:Enter}}. Panel sa otvorí vedľa výkresu.

Zvoľte {{ui:Vybrať priečinok projektu}} a vyberte priečinok, ktorý obsahuje výkresy projektu. Projektové priečinky fungujú v CadCraft Studio a v prehliadačoch, ktoré dokážu otvoriť priečinok (Chrome, Edge). V iných prehliadačoch to panel oznámi.

Pri prvom použití napíšte svoje meno (pripája sa ku každej vašej činnosti) a názov tohto počítača. Ak ste prihlásení, vaše meno tam už je.

## Založenie trezora

Priečinok, ktorý ešte nie je trezorom, ponúka {{ui:Založiť trezor v tomto priečinku}}. Napíšte názov projektu. Potom otvorte {{ui:Súbory mimo trezora}} a pri každom súbore, ktorý chcete dať pod kontrolu, zvoľte {{ui:Pridať}}. Pridaný súbor začína na revízii **A.1**, stav Rozpracované.

## Úprava výkresu

1. Pri výkrese zvoľte {{ui:Otvoriť}}. Otvorí sa v CadCraft. Ak nie je rezervovaný pre vás, môžete ho len pozrieť, nie meniť: {{ui:Uložiť}} odmietne prepísanie a povie prečo (ak si chcete uchovať vlastnú kópiu, použite {{ui:Uložiť ako}}).
2. Zvoľte {{ui:Rezervovať}}. Nikto iný ho teraz nemôže rezervovať; panel ukáže, kto ho má, na ktorom počítači a od kedy.
3. Kreslite.
4. Zvoľte {{ui:Vrátiť}} a napíšte, čo sa zmenilo. Otvorený výkres sa uloží do projektového priečinka vo svojom formáte a stane sa ďalšou revíziou (A.1, potom A.2). Vrátenie bez zmeny ponechá revíziu.

{{ui:Zrušiť rezerváciu}} vráti súbor bez novej revízie.

## Kontrola a schválenie

- {{ui:Poslať na kontrolu}}: počas kontroly je súbor iba na čítanie.
- {{ui:Schváliť}}: napíšte meno schvaľovateľa. A.3 sa stane **A**, Schválené. Schválené súbory sú iba na čítanie.
- {{ui:Vrátiť na prepracovanie}}: späť do stavu Rozpracované, s uvedením dôvodu.
- {{ui:Nová revízia}} na schválenom súbore ho rezervuje pre ďalšie písmeno: jeho prvé vrátenie je **B.1**. {{ui:Zrušiť rezerváciu}} pred tým ho ponechá na A.
- {{ui:Označiť za zastaraný}} vyradí schválený súbor.

Projekt si môže viesť zoznam osôb, ktoré môžu schvaľovať, a môže vyžadovať, aby schvaľovateľ nebol tým, kto súbor vrátil (pozri Nastavenia projektu nižšie).

## Nastavenia projektu

Otvorte {{ui:Nastavenia projektu}} v paneli:

- **Schvaľovatelia**: jedno meno na riadok. Ak nejakí sú, schváliť súbor môžu iba oni.
- **Schvaľovateľ musí byť iný ako autor**: pravidlo „štyroch očí“.
- **Správcovia**: jedno meno na riadok. Ak nejakí sú, iba oni môžu zrušiť cudziu rezerváciu alebo meniť tieto nastavenia.
- **Písmená revízií, ktoré sa vynechajú**: {{ui:Použiť postupnosť ASME Y14.35}} preskočí I, O, Q, S, X a Z, alebo napíšte vlastné písmená. Už pridelené písmená zostanú; voľba platí pre ďalšie revízie.
- **Rezervácia sa považuje za zastaranú po**: počet dní (predvolene 14).

Zvoľte {{ui:Uložiť nastavenia}}. Zmena sa zapíše do záznamu spolu s menom osoby, ktorá ju urobila.

## Niekto nechal súbor rezervovaný

{{ui:Zrušiť cudziu rezerváciu}} uvoľní súbor, ktorý má rezervovaný niekto iný (je preč alebo sa mu pokazil počítač). Musíte napísať dôvod: zapíše sa do záznamu spolu s tým, čia rezervácia to bola. Ak má projekt správcov, môžu to urobiť iba oni. Rezervácia staršia ako 14 dní sa označí ako dlhodobá.

## História, revízie, použitie, použité v

Zvoľte názov súboru a uvidíte:

- {{ui:História}}: každú udalosť, od najnovšej, s tým, kto, na ktorom počítači a kedy.
- {{ui:Revízie}}: každú uchovanú revíziu. Kópia každej revízie je v trezore (rovnaký obsah sa uchová iba raz). {{ui:Otvoriť kópiu}} otvorí túto revíziu ako obyčajnú kópiu, ktorá nemôže prepísať súbor v trezore. {{ui:Porovnať s}} vypíše, čo bolo pridané, odstránené a zmenené medzi touto revíziou a predchádzajúcou (alebo inou, ktorú zvolíte), a zvýrazní to na výkrese.
- {{ui:Používa}}: výkresy, na ktoré odkazuje (xref), dokumenty, na ktoré ukazuje model IFC, a časti zostavy PartCraft.
- {{ui:Používa ho}}: každý súbor v trezore, ktorý používa tento súbor.

{{ui:Kusovník (CSV)}} uloží zoznam všetkého, čo súbor používa, po úrovniach, s množstvami, revíziami a stavmi, pre tabuľkový editor.

## Revízna tabuľka na liste

Pri otvorenom výkrese, ktorý má list, zvoľte {{ui:Revízna tabuľka}}. Tabuľka schválených revízií (revízia, dátum, kto, schválené, popis) sa vykreslí v pravom hornom rohu listu, ktorý si prezeráte. Keď schválite revíziu, tabuľka sa aktualizuje.

## Revízia v popisovom poli

Dajte atribútom svojho popisového poľa jednu z týchto značiek a na otvorenom výkrese zvoľte {{ui:Vyplniť popisové polia}}:

| Značka | Vyplní sa |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revízia (B, alebo B.2, kým sa na nej pracuje) |
| `VAULT.STATE` | stav (Schválené …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | dátum poslednej revízie |
| `VAULT.APPROVER`, `APPROVED_BY` | kto schválil poslednú revíziu |

## PartCraft a BimCraft

PartCraft a BimCraft majú rovnaký panel Dokumenty pre svoje vlastné súbory: súčiastky a zostavy v PartCraft, modely IFC v BimCraft. Vrátenie uloží otvorený model do projektového priečinka a zostava ukazuje, ktoré súčiastky používa, a kusovník.

## Dobré vedieť

- Dvaja ľudia na tom istom zdieľanom priečinku nemôžu rezervovať ten istý súbor naraz: rezervácia je súbor, ktorý systém odmietne vytvoriť dvakrát. V prehliadači a v Studio s prostredím staršieho ako táto funkcia je to tak prísne, ako dovoľuje priečinok: dve rezervácie v tej istej sekunde môžu uspieť obe. Panel ukáže, ktorá z týchto možností platí.
- Priečinok `.ccvault` neupravujte ani nemažte ručne. Záznam v ňom je evidencia; trezor si z neho podľa potreby obnoví svoj zoznam.
- Zmena súboru v priečinku bez jeho rezervácie sa zobrazí ako {{ui:Zmenené v priečinku bez rezervácie}}.
