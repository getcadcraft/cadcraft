---
title: Gumuhit ng diagram mula sa teksto
summary: I-paste ang Mermaid flowchart, PlantUML component diagram, D2, from-to list o draw.io XML, at ilalatag ng CadCraft ang mga block at connector na maaari mong i-edit tulad ng ibang object.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokal na model, diagram, flowchart, mermaid, plantuml, d2, from to, listahang from-to, block diagram, connector, teksto patungong diagram, DIAGRAM, TEXTDIAGRAM, system diagram, wiring diagram, piping, csv
from: b26af54b
---

I-type ang {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Magbubukas ang isang kahon: i-paste ang teksto, piliin ang {{ui:Draw}}, i-click ang kaliwang itaas na sulok ng diagram at ibigay ang taas ng teksto. Binabasa ng CadCraft ang teksto, inaayos ang mga block sa mga layer na may right-angle connector, at iginuguhit ang mga ito sa layer na tinatawag na `Diagram`. Napipili ang mga bagong object, kaya maaari mo agad itong igalaw. Mga simpleng object ang mga ito: baguhin ang teksto ng block gamit ang {{cmd:TEXTEDIT}}, iunat ang connector gamit ang grips nito, burahin ang isang block, o magdagdag ng sarili mong linya. Isang {{cmd:UNDO}} lang ang mag-aalis ng buong diagram.

Sa command line, nang walang kahon, puwedeng isang linya ang teksto na may `;` sa pagitan ng mga statement: `flowchart LR; A[Pump] --> B[Tank]`.

## Ano ang binabasa nito

| Teksto | Ano ang binabasa |
|---|---|
| **Mermaid** `flowchart` o `graph` na may `TD`, `TB`, `BT`, `LR` o `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (isang decision, iginuguhit bilang diamond), quoted na text, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, label bilang `-->|text|` o `-- text -->`, chains na `A --> B --> C`, groups na `A & B --> C`, `<br/>` para sa bagong linya, `%%` comments |
| **PlantUML** sa pagitan ng `@startuml` at `@enduml` (component at deployment) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` at iba pa na may `as` na pangalan, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, chains, `a: Label`, `direction: right`, quoted na pangalan, `#` comments |
| **Isang from-to list** (table na pinaste bilang text o CSV) | mga column na `from`, `to` at opsyonal na `label` at `type` (ang `dashed` ay gumuguhit ng dashed connector), sa anumang pagkakasunod, pinaghihiwalay ng comma, semicolon o tab; kapag walang header line, ang unang tatlong column ay from, to, label |

| **draw.io XML** (text ng `.drawio` file, `<mxfile>` o `<mxGraphModel>`) | boxes, rounded boxes, ellipses, rhombus decisions at plain na text; container at swimlane boxes (dashed na iginuguhit kasama ang pamagat); connectors kasama ang kanilang waypoints, arrow ends (`endArrow`, `startArrow`) at `dashed=1`; nagiging plain text ang HTML labels, gumagana ang `<UserObject label>` at `<object label>` |

Nilalaktawan ang anumang iba pa sa isang linya (styles, notes, loop frames), at sinasabi ng command line kung ilang linya ang nilaktawan. Hanggang 400 block at 1200 connector ang maaari sa isang diagram.

## Pinananatili ng draw.io XML ang mga posisyon nito

Sinasabi ng ibang wika kung ano ang kumokonekta sa ano, kaya inaayos ito ng CadCraft. Sinasabi na ng draw.io XML kung nasaan ang lahat, kaya pinananatili ito ng CadCraft: bawat block ay nasa lugar na inilalagay ng file, sinukat para ang 12-pixel na font ay maging taas ng teksto na ibibigay mo (ang 120 x 60 pixel na kahon ay 60 x 30 drawing units sa taas na 6), at ang kaliwang itaas ng diagram ay nasa sulok na iyong ki-click. Tumatakbo ang mga connector mula sa gilid ng isang block hanggang sa gilid ng susunod, dumadaan sa kanilang waypoints; ang connector na may `orthogonalEdgeStyle` at walang waypoints ay nakakakuha ng isang right-angle bend.

Compressed ang default na save ng draw.io. Binubuksan ito ng kahon at ng command line; ang assistant tool sa window na walang compression stream ay magsasabi nito, at ang `File › Export as › XML` na may *Compressed* na naka-untick ay nagbibigay ng plain XML. Nilalaktawan at binibilang ang mga image, connector na may maluwag na dulo, at ikalawang pahina.

## Pagsusulat nito gamit ang lokal na model sa iyong kompyuter

Kayang isulat ng lokal na model (Ollama, LM Studio, llama.cpp, Jan) ang XML o Mermaid text mula sa nilalaman ng PDF o SVG. Ang resulta ay ipinapasok sa pamamagitan ng parehong kahon, o direkta sa drawing kapag nakakonekta ang model bilang assistant: tumatanggap ang `diagram_from_text` ng `format` na `drawio`. Mas maraming pagkakamali ang maliliit na model sa XML kaysa sa Mermaid o from-to list, kaya mas mura ang unang subok gamit ang Mermaid; ang hindi kayang basahin ng reader ay nilalaktawan at binibilang, hindi hinuhulaan. Tingnan ang Connect your AI para sa mga recipe ng model.

## Paano ito inaayos

Iginuguhit ang mga block sa mga layer na sumusunod sa mga connector (ang connector na bumabalik ay iginuguhit paitaas), inaayos para mabawasan ang pag-cross, na may right-angle connector na umaalis sa ibaba ng block at pumapasok sa itaas ng susunod. Ginagawang column ng `LR` at `RL` ang mga layer. Ang taas ng teksto na ibibigay mo ang nagtatakda ng laki ng lahat.

## Mga subgraph at sequence diagram

- Ang Mermaid `subgraph name [Title]` … `end` ay gumuguhit ng dashed na kahon na may pamagat sa paligid ng mga block nito; maaaring nakapaloob ang mga subgraph sa isa't isa. Hindi pinananatiling wala sa loob ng kahon ang ibang block ng layout, kaya ilipat ang nakaligaw na block gamit ang grips nito.
- Ang Mermaid `sequenceDiagram`, o PlantUML text na may `participant` na linya at `->` na mensahe, ay iginuguhit bilang mga block sa itaas, may dashed na lifeline sa ilalim ng bawat isa at isang hanay bawat mensahe. Dashed ang `-->` at `-->>`; may arrow head ang `->>` at `-)`; nilalagyan ng numero ng `autonumber` ang mga mensahe; ang mensahe sa sarili ay lumilikha ng loop. Nilalaktawan ang notes at mga frame ng `loop` / `alt`.

## Mga simbolo para sa single-line at piping diagram

Maaaring maging iginuhit na simbolo, na may pangalan sa ilalim, ang block sa halip na kahon. Pangalanan ang simbolo sa teksto:

| Teksto | Paano |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` o isang linyang `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` o `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Isang from-to list | mga column na `from_symbol` at `to_symbol` |

Ang mga pangalan ay ang P&ID shapes (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` at ang iba pa sa P&ID library) at ang Electrical set (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` at iba pa). Ang pangalang pareho ang dalawang set ay napupunta sa P&ID set; isulat ang `pid:` o `el:` sa unahan para pumili. Ang pangalang hindi kilala ng CadCraft ay nilalaktawan at binibilang. Iginuguhit ang mga simbolo bilang simpleng linya, bilog at arko sa layer na `Diagram`, sinukat sa taas ng teksto; hindi ito ang mga block ng add-on na may tag, kaya gamitin ang mga command ng P&ID o Electrical para sa working drawing.

Magagawa rin ito ng AI assistant sa pamamagitan ng `diagram_from_text` tool sa window.
