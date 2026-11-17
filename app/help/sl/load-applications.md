---
title: Nalaganje aplikacij (APPLOAD)
summary: Naložite rutine LISP in njihove datoteke pogovornih oken, jih razložite, ponovno naložite iz zgodovine in ohranite tiste, ki jih uporabljate, v zagonskem kompletu.
keywords: appload, ap, naloži aplikacijo, lisp, lsp, dcl, rutina, zagonski komplet, razloži, zgodovina, spusti, naloži, prilagodi, upravljanje
from: 89e0ee95
---

## Kaj se boste naučili

Kako naložiti rutino LISP (datoteka `.lsp`), da njeni ukazi delujejo v CadCraft, kako jo razložiti in kako jo naložiti vsakič, ko se CadCraft zažene.

## Naložite rutino

1. Odprite {{ui:Pogled}} › {{ui:Več}} › {{ui:Naloži aplikacijo …}} ali vnesite {{cmd:APPLOAD}} (ali `AP`) in pritisnite {{key:Enter}}.
2. Kliknite {{ui:Naloži datoteko …}} in izberite eno ali več datotek `.lsp`. Rutina, ki odpre pogovorno okno, ponavadi pride z datoteko `.dcl`: izberite tudi to.
3. Pogovorno okno pove, kaj je naredila vsaka datoteka, na primer „Naložena datoteka delblocks.lsp: 1 ukaz, DELBLOCKS.“
4. Kliknite {{ui:Zapri (C)}}, vnesite ukaz rutine in pritisnite {{key:Enter}}.

Datoteke `.lsp` in `.dcl` lahko tudi spustite na risbo ali na pogovorno okno {{ui:Naloži aplikacije}}: naložijo se takoj.

Datoteka se prebere tukaj, v vašem brskalniku. Nič se ne naloži na strežnik.

:::tip
Pritisnite {{key:Enter}} v prazni ukazni vrstici, da ponovno zaženete ukaz rutine, enako kot pri vsakem drugem ukazu. Tudi vaši vzdevki ukazov lahko do njega: glejte „Uredite vzdevke ukazov“.
:::

## Razložite rutino

V {{ui:Naloži aplikacije}}, pod {{ui:Naložene aplikacije}}, kliknite {{ui:Razloži}} ob datoteki. Ukazi, ki jih je ustvarila, izginejo, dokler je znova ne naložite.

## Naložite rutino ob vsakem zagonu CadCraft

1. Naložite rutino.
2. Pod {{ui:Naložene aplikacije}} kliknite {{ui:Dodaj v zagonski komplet}} ob njej.

Od zdaj se bo samodejno naložila, kadarkoli se CadCraft zažene v tem brskalniku. Da to ustavite, kliknite {{ui:Odstrani (R)}} ob njej pod {{ui:Zagonski komplet}}.

Zagonski komplet hrani kopijo vsake datoteke v shrambi tega brskalnika. Če spremenite rutino, naložite novo datoteko in jo znova dodajte.

## Naložite acad.lsp in acaddoc.lsp iz mape podpore (Studio)

V CadCraft Studio vzame {{ui:Mapa podpore}} v pogovornem oknu {{ui:Naloži aplikacije}} mapo na vašem računalniku. Kliknite {{ui:Izberi mapo…}}. Ob zagonu CadCraft prebere `acad.lsp` in nato `acaddoc.lsp` iz te mape (ne glede na velikost črk v imenih), ju naloži in nato naloži zagonski komplet. `acaddoc.lsp` se prebere znova ob vsakem odprtju novega zavihka risbe. Nič drugega v mapi se ne prebere, datoteka, večja od 2 MB, pa se preskoči in o tem je prikazano sporočilo.

Če datoteka določa funkcijo z imenom `S::STARTUP`, se po nalaganju datotek izvede enkrat (tudi po zagonskem kompletu). {{ui:Naloži zdaj}} stori enako na zahtevo; {{ui:Počisti}} pozabi mapo.

V brskalniku stran ne more shraniti mape, zato mape podpore ni: uporabite zagonski komplet, opisan zgoraj. Prevedene datoteke `.fas` in `.vlx` ter izvorni programi ostanejo zavrnjeni.

## Ponovno naložite datoteko iz zgodovine

{{ui:Zgodovina}} našteje datoteke, ki ste jih naložili v tem brskalniku, najnovejše najprej. Kliknite {{ui:Naloži}} ob eni, da jo ponovno naložite, ne da bi jo iskali na računalniku.

## Datoteke, ki jih CadCraft ne more naložiti

| Datoteka | Kaj je | Kaj storiti |
|---|---|---|
| `.fas`, `.vlx` | prevedeni ali zaščiteni LISP | naložite izvorni `.lsp` |
| `.arx`, `.crx`, `.dbx` | izvorni programi za Windows | teh v CadCraft ni mogoče zagnati |
| `.dvb` | projekt VBA | teh v CadCraft ni mogoče zagnati |
| `.craft`, `.lua`, `.py` | skripti CraftScript | odprite jih v delovnem okolju za skripte v PartCraft |

Pogovorno okno {{ui:Naloži aplikacije}} pove, za katero od teh vrst gre, ko izberete datoteko.

## Ustavite rutino

Pritisnite {{key:Esc}}. Ob enem od pozivov rutine Esc prekliče na način, ki ga rutina pričakuje (izvede se njeno lastno čiščenje). Če je zaposlena in ne sprašuje ničesar, Esc jo takoj ustavi in to pove; vaše naložene rutine ostanejo naložene.

:::note
Vse, kar rutina spremeni v risbi, je en korak: en {{key:Mod+Z}} vrne vse nazaj.
:::
