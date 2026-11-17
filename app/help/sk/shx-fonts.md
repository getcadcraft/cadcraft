---
title: Kreslenie textu vlastnými fontmi SHX
summary: Dajte CadCraft priečinok fontov SHX (alebo vyberte súbory) a štýly textu, ktoré ich menujú, sa budú kresliť v nich, na obrazovke aj pri tlači alebo v PDF, so výškou štýlu, pomerom šírky a sklonom.
keywords: shx, fonty, font, tvarový font, veľký font, bigfont, unifont, starý, perzský, arabský, štýl textu, chýbajúci font, nahradený font, SHXFONTS, priečinok, obrátiť, vizuálne poradie, simplex, isocp
from: 14b0a4ab
---

Výkresy z iných programov často menujú **fonty SHX** vo svojich štýloch textu, a DWG ich neobsahuje. Bez fontu CadCraft kreslí ten text vo svojom vlastnom písme, čo je v poriadku pre bežný latinský text, ale nie pre staré fonty, ktoré mapujú obyčajné kódy znakov na iné tvary písmen, napríklad starú perzskú anotáciu.

Dajte CadCraft fonty a text sa nakreslí v nich.

## Načítanie fontov

Zadajte {{cmd:SHXFONTS}} (`SHX`) a zvoľte:

- {{ui:Priečinok}} (CadCraft Studio): vyberte priečinok. Každý súbor `.shx` v ňom sa načíta hneď a znova pri každom spustení CadCraft.
- {{ui:Súbory}} (prehliadač): vyberte jeden alebo viac súborov `.shx`. Uchovajú sa v tomto prehliadači a nikdy sa nenahrávajú.
- {{ui:Zoznam}}: fonty, ktoré sú načítané, a tie, ktoré otvorený výkres menuje, ale vy ste ich nenačítali.
- {{ui:Odstrániť}} a {{ui:Vymazať}}: zabudnúť jeden font, alebo všetky.

CadCraft nemôže priložiť fonty tretích strán, takže žiadne nedodáva: pochádzajú od vás. Výkres len menuje svoje fonty a nedrží ich kópiu.

## Čo sa stane

Názov fontu štýlu textu sa priradí k načítanému fontu podľa jeho názvu bez ohľadu na veľkosť písmen, priečinok a `.shx` (`SIMPLEX.SHX` nájde `simplex`). Text v takom štýle sa kreslí ako čiary, na obrazovke, pri tlači aj v PDF, na vlastnom mieste, s vlastnou výškou, otočením, pomerom šírky a uhlom sklonu. Jeho šírka je vlastná šírka fontu, takže zarovnanie {{ui:Stred}} a {{ui:Vpravo}}, zalamovanie a výber sedia s tým, čo vidíte. Štýl, ktorého font nie je načítaný, si ponechá vstavané písmo, a keď otvoríte výkres, ktorý menuje fonty, ktoré ste nenačítali, riadok príkazov to uvedie.

Štýl Standard sa tiež počíta: výkres, ktorého štýl Standard menuje vlastný font, si ho ponechá.

## Fonty už vo vizuálnom poradí

Mnohé staré perzské a arabské fonty SHX držia písmená už tvarované pre obrazovku a kreslené zľava doprava, takže text napísaný v logickom poradí vyjde pozpätku. Zadajte {{cmd:SHXFONTS}}, zvoľte {{ui:Obrátiť}} a pomenujte font: jeho text sa potom usporiada od posledného písmena. Spustite to znova, aby ste to vrátili späť. Prepínač patrí fontu, uchováva sa v tomto prehliadači a nie je uložený vo výkrese.

## Čo ešte nie je pokryté

- Text s vnútornými formátovacími kódmi (farby, skladanie v MTEXT) zostáva vo vstavanom písme.
- Veľké fonty (dvojbajtové) doplnia kódy, ktoré hlavný font nemá, ale text v kódovej stránke Východnej Ázie, ktorú CadCraft už previedol do Unicode, sa nemapuje späť na dvojbajtové kódy fontu.
- Čítač fontov sleduje publikovaný popis formátu a bol testovaný na fontoch vytvorených pre CadCraft. Ak sa vám niektorý nekreslí správne, pošlite nám font a výkres.
