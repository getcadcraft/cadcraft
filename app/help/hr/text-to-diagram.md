---
title: Crtanje dijagrama iz teksta
summary: Zalijepite Mermaid dijagram toka, PlantUML komponentni dijagram, D2, popis od-do ili draw.io XML, a CadCraft rasporedi blokove i spojnice koje možete uređivati kao i sve ostale objekte.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokalni model, dijagram, dijagram toka, mermaid, plantuml, d2, od do, popis od-do, blok dijagram, spojnice, tekst u dijagram, DIAGRAM, TEXTDIAGRAM, sustavni dijagram, dijagram ožičenja, cjevovodi, csv
from: b26af54b
---

Upišite {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Otvara se okvir: zalijepite tekst, odaberite {{ui:Crtanje}}, kliknite gornji lijevi kut dijagrama i unesite visinu teksta. CadCraft čita tekst, raspoređuje blokove u slojevima s pravokutnim spojnicama i crta ih na sloju pod nazivom `Diagram`. Novi objekti su odabrani, pa ih možete odmah pomaknuti. To su obični objekti: tekst bloka mijenjate s {{cmd:TEXTEDIT}}, spojnicu rastežete njezinim ručkama, blok brišete, a vlastite linije dodajete. Jedna naredba {{cmd:UNDO}} uklanja cijeli dijagram.

U naredbenom retku, bez okvira, tekst može biti jedan redak s `;` između naredbi: `flowchart LR; A[Pump] --> B[Tank]`.

## Što se čita

| Tekst | Što se čita |
|---|---|
| **Mermaid** `flowchart` ili `graph` s `TD`, `TB`, `BT`, `LR` ili `RL` | `A`, `A[tekst]`, `A(tekst)`, `A([tekst])`, `A{tekst}` (odluka, crta se kao romb), tekst u navodnicima, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, oznaka kao `-->|tekst|` ili `-- tekst -->`, lanci `A --> B --> C`, skupine `A & B --> C`, `<br/>` za novi redak, `%%` komentari |
| **PlantUML** između `@startuml` i `@enduml` (komponentni i raspored) | `[Komponenta]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` i ostali s imenima iza `as`, `A --> B : oznaka`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: oznaka`, `a <- b`, `a <-> b`, `a -- b`, lanci, `a: Oznaka`, `direction: right`, imena u navodnicima, `#` komentari |
| **Popis od-do** (tablica zalijepljena kao tekst ili CSV) | stupci `from`, `to` i po želji `label` i `type` (`dashed` crta isprekidanu spojnicu), u bilo kojem redoslijedu, odvojeni zarezima, točkama-zarezima ili tabulatorima; bez zaglavlja prva tri stupca su from, to, label |

| **draw.io XML** (tekst datoteke `.drawio`, `<mxfile>` ili `<mxGraphModel>`) | kutije, zaobljene kutije, elipse, romb odluke i obični tekst; kutije spremnika i plivajuće trake (crtaju se crtkano s naslovom); spojnice s točkama prijeloma, krajevi strelica (`endArrow`, `startArrow`) i `dashed=1`; HTML oznake postaju obični tekst, a `<UserObject label>` i `<object label>` rade |

Sve ostalo u retku (stilovi, bilješke, okviri petlji) se preskače, a naredbeni redak kaže koliko je redaka preskočeno. Dijagram ima najviše 400 blokova i 1200 spojnica.

## Draw.io XML zadržava svoje položaje

Ostali jezici kažu što s čim povezuje, pa to CadCraft rasporedi. Draw.io XML već kaže gdje je što, pa CadCraft to zadržava: svaki blok stoji tamo gdje ga datoteka stavlja, skaliran tako da font od 12 piksela postane visina teksta koju unesete (kutija od 120 × 60 piksela je 60 × 30 jedinica crteža pri visini 6), a gornji lijevi kut dijagrama ide u kut na koji kliknete. Spojnice idu od ruba jednog bloka do ruba sljedećeg, kroz svoje točke prijeloma; spojnica s `orthogonalEdgeStyle` i bez točaka dobiva jedan pravokutni prijelom.

Zadano spremanje draw.io-a je komprimirano. Okvir i naredbeni redak ga otvaraju umjesto vas; pomoćni alat asistenta u prozoru bez podrške za kompresiju to javlja, a `File › Export as › XML` s isključenim *Compressed* daje običan XML. Slike, spojnice s labavim krajem i druge stranice se preskaču i broje.

## Pisanje s modelom na vašem računalu

Lokalni model (Ollama, LM Studio, llama.cpp, Jan) može napisati XML ili Mermaid tekst iz sadržaja PDF-a ili SVG-a, a rezultat ulazi kroz isti okvir ili izravno u crtež kada je model povezan kao asistent: `diagram_from_text` uzima `format` `drawio`. Mali modeli prave više pogrešaka u XML-u nego u Mermaidu ili popisu od-do, pa je prvi pokušaj s Mermaidom jeftiniji; ono što čitač ne može upotrijebiti preskače se i broji, a ne pogađa se. Za recepte modela vidi Povezivanje AI-ja.

## Kako je raspoređen

Blokovi idu u slojevima prema spojnicama (spojnica koja se vraća unatrag crta se natrag prema gore), poredani tako da se križanja smanje, s pravokutnim spojnicama koje izlaze s donjeg dijela bloka i ulaze u gornji dio sljedećeg; `LR` i `RL` pretvaraju slojeve u stupce. Visina teksta koju unesete određuje veličinu svega.

## Podgrafovi i sekvencijski dijagrami

- Mermaid `subgraph naziv [Naslov]` … `end` crta crtkani okvir s naslovom oko svojih blokova; podgrafovi se mogu ugnijezditi. Raspored ne drži druge blokove izvan okvira, pa lutajući blok pomaknite njegovim ručkama.
- Mermaid `sequenceDiagram`, ili PlantUML tekst s redcima `participant` i porukama `->`, crta se kao blokovi pri vrhu, crtkana linija života ispod svakog i jedan redak po poruci. `-->` i `-->>` su crtkani, `->>` i `-)` imaju vrh strelice, `autonumber` numerira poruke, a poruka samoj sebi čini petlju. Bilješke i okviri `loop` / `alt` se preskaču.

## Simboli za jednolinijske i procesne dijagrame

Blok može biti nacrtani simbol s nazivom ispod, umjesto kutije. Imenujte simbol u tekstu:

| Tekst | Kako |
|---|---|
| Mermaid | `P1[Dobavna pumpa]:::pump-cf` ili redak `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ili `P1: Dobavna pumpa { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Popis od-do | stupci `from_symbol` i `to_symbol` |

Nazivi su P&ID oblici (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` i ostatak P&ID biblioteke) i skup Electrical (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` i tako dalje). Naziv koji dva skupa dijele ide u P&ID skup; ispred napišite `pid:` ili `el:` za izbor. Naziv koji CadCraft ne poznaje se preskače i broji. Simboli se crtaju kao obične linije, kružnice i lukovi na sloju `Diagram`, skalirani prema visini teksta; nisu blokovi dodataka s oznakama, pa za radni crtež koristite naredbe P&ID ili Electrical.

AI asistenti mogu isto preko alata `diagram_from_text` u prozoru.
