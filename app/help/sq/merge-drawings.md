---
title: Bashko redaktimet e dy personave të një vizatimi
summary: Lejoni git, Fossil ose Mercurial të bashkojnë dy kopje të një DWG ose DXF objekt pas objekti, duke përdorur çelësin që CadCraft mban në çdo objekt.
keywords: bashkim, git, fossil, mercurial, kontroll versioni, diff, konflikt, tre-kahësh, bashkimi i cadcraft, çelës, gitattributes, DWG, DXF
from: 71482bf9
---

Dy persona redaktojnë të njëjtin vizatim. Nëse kanë ndryshuar objekte të ndryshme, bashkimi mund të bëhet automatikisht: nuk ka asgjë për ta ribërë me dorë.

## Çfarë e bën këtë të funksionojë

CadCraft i jep çdo objekti që vizatoni një **çelës** të shkurtër që nuk ndryshon kurrë dhe nuk i jepet kurrë dy objekteve. Ruhet me objektin në DWG ose DXF (si të dhëna shtesë që programet e tjera i mbajnë). Bashkimi i kërkon objektet sipas këtij çelësi, jo sipas pozicionit të tyre në skedar, sepse çdo program ri-numëron pozicionet kur ruan. E fikni këtë te {{ui:Cilësimet}} › CadCraft › Skedarë miqësorë për bashkim nëse nuk bashkoni kurrë; skedarët bëhen rreth 10 për qind më të vegjël.

Një vizatim i ruajtur para se të ekzistonin çelësat bashkohet ende: objektet e tij marrin një çelës nga vendi i tyre në skedar, i njëjti për të gjithë ata që e hapin.

## Konfigurojeni

Git kërkon dy rreshta një herë për çdo depo:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# një herë, në çdo kompjuter
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Pa git, ekzekutojeni me dorë: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil dhe Mercurial marrin të njëjtat tre skedarë në cilësimin e tyre të mjetit të bashkimit.

## Rregullat

- Një objekt i ndryshuar vetëm në njërën anë merret. Ndryshimi i njëjtë në të dyja anët merret një herë.
- E njëjta veti e ndryshuar në dy mënyra është një **konflikt**: ana juaj mbetet dhe raporti liston të dyja vlerat. Hapeni rezultatin, shikoni atë objekt dhe rregullojeni me dorë.
- Një objekt i shtuar në njërën anë mbahet. Një objekt i hequr në njërën anë dhe i pandryshuar në tjetrën hiqet. I hequr në njërën anë dhe i ndryshuar në tjetrën: hiqet, dhe raportohet.
- Shtresat, blloqet, stilet e tekstit dhe të përmasave, fletët dhe pamjet e emërtuara bashkohen në të njëjtën mënyrë. Kufizimet ndjekin objektet që emërtojnë.
- Rezultati shkruhet në të njëjtin format dhe version skedari si i juaji.

Nuk bashkohet: renditja me të cilën vizatohen objektet është e juaja, pastaj objektet që shtoi ana tjetër. Ndryshimet e të njëjtit përkufizim blloku në të dyja anët janë konflikt, nuk përzihen kurrë. Asgjë nuk ngarkohet; gjithçka ekzekutohet në kompjuterin tuaj.
