---
title: Joonista diagramm tekstist
summary: Kleebi Mermaid-vooskeem, PlantUML-komponentskeem, D2, alguspunkt-lõpp-loend või draw.io XML ning CadCraft paigutab plokid ja ühendusjooned, mida saad muuta nagu kõiki teisi objekte.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, kohalik mudel, diagramm, vooskeem, mermaid, plantuml, d2, alguspunkt-lõpp-loend, plokkskeem, ühendusjooned, tekst diagrammiks, DIAGRAM, TEXTDIAGRAM, süsteemiskeem, juhtmestikuskeem, torustik, csv
from: b26af54b
---

Sisesta {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Avaneb kast: kleebi tekst, vali {{ui:Joonista}}, klõpsa diagrammi vasakule ülanurgale ja määra teksti kõrgus. CadCraft loeb teksti, paigutab plokid kihtidesse täisnurksete ühendusjoontega ja joonistab need kihile nimega `Diagram`. Uued objektid on valitud, nii et saad need kohe teisaldada. Need on tavalised objektid: muuda ploki teksti käsuga {{cmd:TEXTEDIT}}, venita ühendusjoont selle käepidemetest, kustuta plokk või lisa oma jooned. Üks {{cmd:UNDO}} eemaldab kogu diagrammi.

Käsurealt ilma kastita võib tekst olla üks rida, kus laused on eraldatud märgiga `;`: `flowchart LR; A[Pump] --> B[Tank]`.

## Mida see loeb

| Tekst | Mida loetakse |
|---|---|
| **Mermaid** `flowchart` või `graph` koos väärtustega `TD`, `TB`, `BT`, `LR` või `RL` | `A`, `A[tekst]`, `A(tekst)`, `A([tekst])`, `A{tekst}` (otsus, joonistatakse rombina), jutumärkides tekst, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, silt kujul `-->|tekst|` või `-- tekst -->`, ahelad `A --> B --> C`, rühmad `A & B --> C`, `<br/>` uue rea jaoks, `%%` kommentaarid |
| **PlantUML** `@startuml` ja `@enduml` vahel (komponent- ja paigaldusskeem) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` ja teised koos `as`-nimedega, `A --> B : silt`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: silt`, `a <- b`, `a <-> b`, `a -- b`, ahelad, `a: Silt`, `direction: right`, jutumärkides nimed, `#` kommentaarid |
| **Alguspunkt-lõpp-loend** (tabel tekstina või CSV) | veerud `from`, `to` ja vajadusel `label` ja `type` (`dashed` joonistab katkendliku ühendusjoone), mis tahes järjekorras, eraldatud komadega, semikoolonitega või tabeldusmärkidega; ilma päisereata on esimesed kolm veergu from, to ja label |

| **draw.io XML** (faili `.drawio` tekst, `<mxfile>` või `<mxGraphModel>`) | kastid, ümarnurksed kastid, ellipsid, rombikujulised otsused ja lihttekst; konteiner- ja ujumisradade kastid (joonistatakse katkendjoonega koos pealkirjaga); ühendusjooned oma murdepunktidega, nooleotsad (`endArrow`, `startArrow`) ja `dashed=1`; HTML-sildid muutuvad lihttekstiks, `<UserObject label>` ja `<object label>` töötavad |

Muu rea sisu (stiilid, märkused, tsükliraamid) jäetakse vahele ja käsurida ütleb, mitu rida vahele jäeti. Diagrammis võib olla kuni 400 plokki ja 1200 ühendusjoont.

## Draw.io XML säilitab asukohad

Teised keeled ütlevad, mis millega ühendub, seega paigutab CadCraft need ise. Draw.io XML ütleb juba, kus kõik asuvad, seega CadCraft säilitab need: iga plokk jääb sinna, kuhu fail selle paneb, skaleerituna nii, et 12-pikselisest fondist saab sinu antud teksti kõrgus (120 x 60 pikslit suurune kast on 60 x 30 joonistusühikut kõrgusel 6). Diagrammi vasak ülanurk läheb nurka, millele klõpsad. Ühendusjooned kulgevad ühe ploki servast järgmise ploki servani läbi oma murdepunktide; ühendusjoon `orthogonalEdgeStyle` ja ilma murdepunktideta saab ühe täisnurkse pöörde.

Draw.io vaikimisi salvestus on tihendatud. Kast ja käsurida avavad selle sinu eest; tehisintellekti tööriist aknas, millel ei ole tihendusvoogu, ütleb seda, ning `File › Export as › XML` koos märkimata *Compressed* annab lihtsa XML-i. Pildid, lahtise otsaga ühendusjooned ja teised lehed jäetakse vahele ja loetakse kokku.

## Mudeli kirjutamine oma arvutis

Kohalik mudel (Ollama, LM Studio, llama.cpp, Jan) võib kirjutada XML-i või Mermaid-teksti PDF-i või SVG-i sisu põhjal. Tulemus lisatakse sama kasti kaudu või otse joonisesse, kui mudel on ühendatud tehisintellekti abilisena: `diagram_from_text` võtab vormingu `format` väärtusega `drawio`. Väikesed mudelid teevad XML-is rohkem vigu kui Mermaid-is või alguspunkt-lõpp-loendis, seega on esimene katse Mermaid-iga odavam. Mida lugeja ei suuda kasutada, jäetakse vahele ja loetakse kokku, mitte ei oletata. Mudelite retseptid on jaotises „Ühenda oma tehisintellekt“.

## Kuidas paigutus toimub

Plokid asetatakse kihtidesse ühenduste järgi (tagasi suunduv ühendusjoon joonistatakse tagasi üles), järjestatakse nii, et ristumisi oleks vähem, ja ühendusjooned on täisnurksed: need lahkuvad ploki allservast ja sisenevad järgmise ploki ülaservast. `LR` ja `RL` muudavad kihid veergudeks. Antud teksti kõrgus määrab kõige suuruse.

## Alamgraafid ja järjestusskeemid

- Mermaid `subgraph name [Title]` … `end` joonistab katkendliku kasti pealkirjaga selle plokkide ümber; alamgraafid võivad olla pesastatud. Paigutus ei hoia teisi plokke kastist eemal, seega liiguta eksinud plokki selle käepidemetest.
- Mermaid `sequenceDiagram` või PlantUML-tekst `participant` ridade ja `->` sõnumitega joonistatakse plokkidena üle ülaosa, iga ploki alla katkendlik elujoon ja üks rida sõnumi kohta. `-->` ja `-->>` on katkendjooned, `->>` ja `-)` on nooleotsaga, `autonumber` nummerdab sõnumid ja sõnum iseendale teeb silmuse. Märkused ning `loop` / `alt` raamid jäetakse vahele.

## Sümbolid üherealiste ja torustike skeemide jaoks

Plokk võib olla joonistatud sümbol, mille nimi on all, kasti asemel. Nimeta sümbol tekstis:

| Tekst | Kuidas |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` või rida `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` või `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Alguspunkt-lõpp-loend | veerud `from_symbol` ja `to_symbol` |

Nimed on P&ID-kujundid (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` ja ülejäänud P&ID-teek) ning elektrikomplekt (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` jne). Nimi, mis on kahes komplektis, läheb P&ID-komplekti; vali komplekt, lisades ette `pid:` või `el:`. Nimi, mida CadCraft ei tunne, jäetakse vahele ja loetakse kokku. Sümbolid joonistatakse lihtsate joonte, ringide ja kaartena kihile `Diagram`, skaleerituna teksti kõrgusega. Need ei ole lisandmoodulite plokid siltidega, seega töö joonise jaoks kasuta P&ID- või elektrikäske.

Tehisintellekti abilised saavad sama teha aknas oleva tööriista `diagram_from_text` kaudu.
