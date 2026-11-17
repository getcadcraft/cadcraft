---
title: Braižyti diagramą iš teksto
summary: Įklijuokite Mermaid srautų schemą, PlantUML komponentų diagramą, D2, sąrašą iš-į arba draw.io XML, o CadCraft išdės blokus ir jungtis, kurias galite redaguoti kaip bet kuriuos kitus objektus.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, vietinis modelis, diagrama, srautų schema, flowchart, mermaid, plantuml, d2, iš į, sąrašas iš-į, blokų diagrama, jungtys, tekstas į diagramą, DIAGRAM, TEXTDIAGRAM, sistemos diagrama, laidų schema, vamzdynai, csv
from: b26af54b
---

Įveskite {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Atsidaro langas: įklijuokite tekstą, pasirinkite {{ui:Braižymas}}, spustelėkite viršutinį kairįjį diagramos kampą ir nurodykite teksto aukštį. CadCraft nuskaito tekstą, išdėsto blokus sluoksniais su statmenomis jungtimis ir nubraižo juos sluoksnyje, pavadintame `Diagram`. Nauji objektai yra pažymėti, todėl galite iš karto juos perkelti. Tai įprasti objektai: bloko tekstą keiskite su {{cmd:TEXTEDIT}}, jungtį tempkite už jos rankenėlių, ištrinkite bloką, pridėkite savo linijas. Vienas {{cmd:UNDO}} pašalina visą diagramą.

Komandinėje eilutėje, be lango, tekstas gali būti viena eilute, o sakiniai atskirti `;`: `flowchart LR; A[Pump] --> B[Tank]`.

## Ką ji nuskaito

| Tekstas | Ką nuskaito |
|---|---|
| **Mermaid** `flowchart` arba `graph` su `TD`, `TB`, `BT`, `LR` arba `RL` | `A`, `A[tekstas]`, `A(tekstas)`, `A([tekstas])`, `A{tekstas}` (sprendimas, nubraižomas rombu), tekstas kabutėse, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, žymė kaip `-->|tekstas|` arba `-- tekstas -->`, grandinės `A --> B --> C`, grupės `A & B --> C`, `<br/>` naujai eilutei, `%%` komentarai |
| **PlantUML** tarp `@startuml` ir `@enduml` (komponentų ir įrengimo) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` ir kiti su `as` pavadinimais, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, grandinės, `a: Label`, `direction: right`, pavadinimai kabutėse, `#` komentarai |
| **Sąrašas iš-į** (lentelė įklijuota kaip tekstas arba CSV) | stulpeliai `from`, `to` ir neprivalomai `label` bei `type` (`dashed` nubraižo brūkšniuotą jungtį), bet kokia tvarka, atskirti kableliais, kabliataškiais ar tabuliacijomis; be antraštės eilutės pirmi trys stulpeliai yra from, to, label |

| **draw.io XML** (`.drawio` failo tekstas, `<mxfile>` arba `<mxGraphModel>`) | dėžutės, suapvalintos dėžutės, elipsės, rombai sprendimams ir paprastas tekstas; konteinerių ir juostų dėžutės (nubraižomos brūkšniuotai su pavadinimu); jungtys su tarpiniais taškais, rodyklių galais (`endArrow`, `startArrow`) ir `dashed=1`; HTML žymos tampa paprastu tekstu, veikia `<UserObject label>` ir `<object label>` |

Kas kitas eilutėje (stiliai, pastabos, ciklų rėmeliai) praleidžiama, o komandinė eilutė parodo, kiek eilučių praleista. Diagramoje gali būti daugiausia 400 blokų ir 1200 jungčių.

## Draw.io XML išlaiko savo padėtis

Kitos kalbos nurodo, kas su kuo jungiasi, todėl CadCraft jas išdėsto pats. Draw.io XML jau nurodo, kur yra viskas, todėl CadCraft jas išlaiko: kiekvienas blokas stovi ten, kur nurodo failas, pamasštabuotas taip, kad 12 pikselių šriftas taptų jūsų nurodytu teksto aukščiu (120 × 60 pikselių dėžutė yra 60 × 30 brėžinio vienetų, kai aukštis 6), o diagramos viršutinis kairysis kampas patenka į tašką, kurį spustelėjote. Jungtys eina nuo vieno bloko krašto iki kito bloko krašto per savo tarpinius taškus; jungtis su `orthogonalEdgeStyle` ir be tarpinių taškų gauna vieną statų lūžį.

Draw.io numatytasis įrašymas yra suspaustas. Dėžutė ir komandinė eilutė jį atidaro patys; įrankis asistentui lange be suspaudimo srauto apie tai praneša, o `File › Export as › XML` su nepažymėtu *Compressed* duoda paprastą XML. Paveikslėliai, jungtys su laisvu galu ir antrieji puslapiai praleidžiami ir suskaičiuojami.

## Rašymas su modeliu jūsų kompiuteryje

Vietinis modelis (Ollama, LM Studio, llama.cpp, Jan) gali parašyti XML arba Mermaid tekstą pagal PDF ar SVG turinį, o rezultatas įkeliamas per tą patį langą arba tiesiai į brėžinį, kai modelis prijungtas kaip asistentas: `diagram_from_text` priima `format` `drawio`. Maži modeliai XML daro daugiau klaidų nei Mermaid ar sąrašas iš-į, todėl pirmas bandymas su Mermaid yra pigesnis; ko skaitytuvas negali panaudoti, praleidžiama ir suskaičiuojama, o ne spėjama. Modelių pavyzdžių ieškokite skyriuje apie DI asistento prijungimą.

## Kaip išdėstoma

Blokai išdėstomi sluoksniais pagal jungtis (jungtis, kuri grįžta atgal, nubraižoma aukštyn), tvarkomi taip, kad sumažėtų susikirtimų, o statmenos jungtys išeina iš bloko apačios ir įeina į kito bloko viršų; `LR` ir `RL` sluoksnius paverčia stulpeliais. Jūsų nurodytas teksto aukštis nustato visų elementų dydį.

## Poschemės ir sekų diagramos

- Mermaid `subgraph name [Title]` … `end` nubraižo brūkšniuotą dėžutę su pavadinimu aplink jos blokus; poschemės gali būti įdėtos viena į kitą. Išdėstymas neužtikrina, kad kiti blokai būtų už dėžutės ribų, todėl klaidingai patekusį bloką perkelkite per rankenėles.
- Mermaid `sequenceDiagram` arba PlantUML tekstas su `participant` eilutėmis ir `->` žinutėmis nubraižomas kaip blokai viršuje, po kiekvienu brūkšniuota gyvavimo linija ir viena eilute kiekvienai žinutei. `-->` ir `-->>` yra brūkšniuotos, `->>` ir `-)` turi rodyklės galą, `autonumber` sunumeruoja žinutes, o žinutė sau pačiam daro ciklą. Pastabos ir `loop` / `alt` rėmeliai praleidžiami.

## Vienos linijos ir vamzdynų diagramų simboliai

Blokas gali būti nubraižytas simbolis, o po juo – jo pavadinimas, vietoj dėžutės. Simbolį nurodykite tekste:

| Tekstas | Kaip |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` arba eilutė `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` arba `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Sąrašas iš-į | stulpeliai `from_symbol` ir `to_symbol` |

Pavadinimai yra P&ID formos (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` ir visa likusi P&ID biblioteka) bei Elektros rinkinys (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` ir pan.). Pavadinimą, kurį turi du rinkiniai, priskiriama P&ID rinkiniui; norėdami pasirinkti, įrašykite `pid:` arba `el:` prieš jį. Nežinomas CadCraft pavadinimas praleidžiamas ir suskaičiuojamas. Simboliai nubraižomi kaip paprastos linijos, apskritimai ir lankai `Diagram` sluoksnyje, pamasštabuoti pagal teksto aukštį; jie nėra priedų blokai su žymomis, todėl darbiniam brėžiniui naudokite P&ID ar Elektros komandas.

DI asistentai tą patį gali atlikti per `diagram_from_text` įrankį lange.
