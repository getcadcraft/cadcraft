---
title: Narišite diagram iz besedila
summary: Prilepite diagram poteka Mermaid, komponentni diagram PlantUML, D2, seznam od-do ali XML draw.io, CadCraft pa razporedi bloke in povezave, ki jih lahko urejate kot druge objekte.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokalni model, diagram, diagram poteka, mermaid, plantuml, d2, od do, seznam od-do, blokovni diagram, povezave, besedilo v diagram, DIAGRAM, TEXTDIAGRAM, sistemski diagram, diagram ožičenja, cevovodi, csv
from: b26af54b
---

Vnesite {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Odpre se okno: prilepite besedilo, izberite {{ui:Risanje}}, kliknite zgornji levi kot diagrama in vnesite višino besedila. CadCraft prebere besedilo, razporedi bloke v zaporedne plasti s pravokotnimi povezovalnimi črtami in jih nariše na sloj z imenom `Diagram`. Novi objekti so izbrani, zato jih lahko takoj premaknete. So navadni objekti: besedilo bloka spremenite z {{cmd:TEXTEDIT}}, povezavo raztegnete z njeno ročico, blok izbrišete ali dodate lastne črte. Ena {{cmd:UNDO}} odstrani celoten diagram.

V ukazni vrstici, brez okna, je lahko besedilo ena vrstica s `;` med stavki: `flowchart LR; A[Pump] --> B[Tank]`.

## Kaj program prebere

| Besedilo | Kar se prebere |
|---|---|
| **Mermaid** `flowchart` ali `graph` s `TD`, `TB`, `BT`, `LR` ali `RL` | `A`, `A[besedilo]`, `A(besedilo)`, `A([besedilo])`, `A{besedilo}` (odločitev, narisana kot romb), besedilo v narekovajih, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, oznaka kot `-->|besedilo|` ali `-- besedilo -->`, verige `A --> B --> C`, skupine `A & B --> C`, `<br/>` za novo vrstico, komentarji `%%` |
| **PlantUML** med `@startuml` in `@enduml` (komponentni in razporeditveni) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` in drugi z imeni `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, verige, `a: Label`, `direction: right`, imena v narekovajih, komentarji `#` |
| **Seznam od-do** (tabela, prilepljena kot besedilo ali CSV) | stolpci `from`, `to` in neobvezno `label` ter `type` (`dashed` nariše črtkano povezavo), v poljubnem vrstnem redu, ločeni z vejicami, podpičji ali tabulatorji; brez glave vrstice so prvi trije stolpci from, to, label |

| **XML draw.io** (besedilo datoteke `.drawio`, `<mxfile>` ali `<mxGraphModel>`) | škatle, zaobljene škatle, elipse, romb za odločitve in navadno besedilo; vsebniki in pasovi (narisani črtkano z naslovom); povezave s prelomnimi točkami, konci puščic (`endArrow`, `startArrow`) in `dashed=1`; oznake HTML postanejo navadno besedilo, `<UserObject label>` in `<object label>` delujeta |

Vse drugo v vrstici (slogi, opombe, okvirji zank) se preskoči, ukazna vrstica pa pove, koliko vrstic je bilo preskočenih. Diagram ima največ 400 blokov in 1200 povezav.

## Draw.io XML ohrani položaje

Drugi jeziki povedo, kaj se s čim povezuje, zato jih CadCraft razporedi. XML draw.io že pove, kje je vse, zato ga CadCraft ohrani: vsak blok je tam, kamor ga postavi datoteka, prilagojen tako, da pisava 12 slikovnih pik postane višina besedila, ki jo vnesete (škatla 120 x 60 slikovnih pik je 60 x 30 risalnih enot pri višini 6), zgornji levi kot diagrama pa je tam, kamor kliknete. Povezave tečejo od roba enega bloka do roba naslednjega, skozi svoje prelomne točke; povezava z `orthogonalEdgeStyle` brez prelomnih točk dobi en pravokoten zavoj.

Privzeto shranjevanje v draw.io je stisnjeno. Okno in ukazna vrstica ga odpreta sama; pomočnik v oknu brez stisnjenega toka to pove, `File › Export as › XML` z odkljukano možnostjo *Compressed* pa da navaden XML. Slike, povezave z ohlapnim koncem in druge strani se preskočijo in preštejejo.

## Pisanje z modelom v vašem računalniku

Lokalni model (Ollama, LM Studio, llama.cpp, Jan) lahko napiše XML ali besedilo Mermaid iz vsebine PDF ali SVG, rezultat pa se vnese prek istega okna ali neposredno v risbo, če je model povezan kot pomočnik: `diagram_from_text` sprejme `format` `drawio`. Majhni modeli naredijo več napak v XML kot v Mermaid ali seznamu od-do, zato je prvi poskus z Mermaid cenejši; kar bralnik ne more uporabiti, se preskoči in šteje, ne ugiba. Za recepte modelov glejte razdelek o povezovanju AI.

## Kako je razporejeno

Bloki so v plasteh po sledenju povezavam (povezava, ki se vrača nazaj, je narisana navzgor), razvrščeni tako, da je križanj čim manj, s pravokotnimi povezavami, ki zapustijo spodnji rob bloka in vstopijo v zgornji rob naslednjega; `LR` in `RL` spremenita plasti v stolpce. Višina besedila, ki jo vnesete, določa velikost vsega.

## Podgrafi in sekvenčni diagrami

- Mermaid `subgraph name [Title]` … `end` nariše črtkano škatlo z naslovom okoli svojih blokov; podgrafi se lahko gnezdijo. Razporeditev ne drži drugih blokov zunaj škatle, zato premaknite odvečni blok z njegovimi ročicami.
- Mermaid `sequenceDiagram` ali besedilo PlantUML z vrsticami `participant` in sporočili `->` je narisano kot bloki čez vrh, pod vsakim je črtkana življenjska črta, in ena vrstica za vsako sporočilo. `-->` in `-->>` sta črtkana, `->>` in `-)` imata konico puščice, `autonumber` oštevilči sporočila, sporočilo samemu sebi tvori zanko. Opombe in okvirji `loop` / `alt` se preskočijo.

## Simboli za enočrtne diagrame in cevovode

Blok je lahko narisan simbol z imenom pod njim namesto škatle. Ime simbola navedite v besedilu:

| Besedilo | Kako |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` ali vrstica `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ali `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Seznam od-do | stolpca `from_symbol` in `to_symbol` |

Imena so simboli P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` in preostala knjižnica P&ID) ter nabor Electrical (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` in tako naprej). Ime, ki si ga delita dva nabora, pripada naboru P&ID; za izbiro zapišite pred njim `pid:` ali `el:`. Neznano ime se preskoči in šteje. Simboli so narisani kot navadne črte, krogi in loki na sloju `Diagram`, prilagojeni višini besedila; niso bloki dodatkov z oznakami, zato za delovno risbo uporabite ukaze P&ID ali Electrical.

Pomočniki z umetno inteligenco lahko naredijo isto prek orodja `diagram_from_text` v oknu.
