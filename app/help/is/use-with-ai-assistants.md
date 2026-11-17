---
title: Nota CadCraft með gervigreindaraðstoðarmanni
summary: Leyfðu þínum eigin gervigreindaraðstoðarmanni eða skriftu að vinna með CadCraft: hvað hann má gera, hvernig tengja má hvaða MCP-biðlara sem er, og hvernig þú hefur stjórnina (heimildir, afturköllun, atburðaskráin, Aftengja).
keywords: gervigreind, aðstoðarmaður, umboðsmaður, mcp, model context protocol, skrifta, sjálfvirkni, skipanalína, cli, json, tóki, heimildir, aftengja, virkni, möppur, slóðir, svg, hópvinnsla
from: 06ba4ef6
---

## Hvað þú lærir

Hvernig gervigreindaraðstoðarmaður (eða skrifta sem þú skrifaðir) getur skoðað teikningu, keyrt skipanir CadCraft, prentað út og vistað, og hvernig þú ákveður hvað hann má snerta.

CadCraft hefur **enga gervigreind sjálft** og sendir ekkert neitt. Þú kemur með aðstoðarmanninn: hvaða forrit sem talar Model Context Protocol (MCP). CadCraft útvegar honum aðeins verkfæri, og þú velur hvaða.

Það eru tvær leiðir inn:

- **Teikningin sem þú hefur opna.** Aðstoðarmaðurinn vinnur í þessum glugga, við hliðina á þér, í gegnum CadCraft Studio á tölvunni þinni. Þetta er það sem {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} er fyrir.
- **Teikningar á tölvunni þinni, án þess að opna forritið.** MCP-þjónninn fyrir CadCraft og skipanalínan `cadcraft` lesa og skrifa DWG- og DXF-skrár í möppum sem þú nefnir. Sjá „Vinna með skrár án þess að opna CadCraft" hér fyrir neðan.

## Kveiktu á því

1. Opnaðu {{ui:Settings}} (tannhjólið í forritastikunni, eða {{key:Mod+,}}) og farðu á flipann {{ui:CadCraft}}.
2. Undir {{ui:Assistants}} hakarðu við **Leyfa gervigreindaraðstoðarmönnum og skriftum að nota CadCraft**. Það er slökkt þar til þú gerir það.
3. Veldu hvað hann má gera. **Lesa** er hakað í upphafi; hakaðu við hin aðeins þegar þú þarft þau.

| Heimild | Hvað aðstoðarmaðurinn getur gert |
|---|---|
| Lesa | Skoða teikninguna: lýsa henni, lista og finna hluti, sjá valið, lýsa sýninni og taka mynd af henni, prófa hana gegn lag- og teiknireglum |
| Breyta | Keyra skipanir á teikningunni og breyta valinu. Hver aðgerð er eitt skref sem þú getur afturkallað |
| Vista | Vista teikninguna (á skjáborðinu, í sína skrá; í vafra, sem niðurhal) |
| Flytja út | Prenta út í PDF og búa til aðrar skrár |

## Leyfðu honum að nota skrár í möppum sem þú velur

Í CadCraft Studio getur aðstoðarmaður opnað, vistað og prentað út skrár eftir nafni í stað skráargluggans, en aðeins innan þeirra mappa sem þú bætir við undir {{ui:Assistants}} › {{ui:Folders it may use}}:

1. Veldu {{ui:Add a folder…}} og veldu möppuna í eigin glugga Studio.
2. Aðstoðarmaðurinn getur nú listað skrárnar þar (`files_list`), opnað teikningu (`drawing_open`), vistað hana þar í DWG-útgáfu eða sem DXF, prentað út í PDF- eða SVG-skrá, hlaðið LISP-skrá, og gefið skipun þá skrá sem hún biður um (`INSERT` `F`, `XATTACH`, punktskrá) eða sagt hvert skrá skipunar á að fara (CSV-skrá `COUNT`, `PUBLISH`).
3. {{ui:Remove}} tekur möppu til baka strax. Slóðir annars staðar eru hafnaðar, og skrá sem er þegar til staðar er aðeins skrifuð yfir þegar aðstoðarmaðurinn biður um það eða skrifaði hana sjálfur.

Að opna skrá krefst **Lesa**; að skrifa teikningu krefst **Vista**; allar aðrar skrár krefjast **Flytja út**.

Verkfæri utan þeirra heimilda sem þú hakaðir við eru alls ekki boðin aðstoðarmanninum. Ef hann biður samt um eitt þeirra hafnar CadCraft því og skrifar það í atburðaskrána. Að slökkva á rofanum lokar öllum tengingum í einu. {{ui:Endurstilla stillingar CadCraft}} slekkur líka á honum.

## Tengdu aðstoðarmanninn

Aðstoðarmenn tengjast í gegnum **CadCraft Studio** á tölvunni þinni: það keyrir lítinn þjón sem aðeins þessi tölva nær til (vistfangið `127.0.0.1`), varinn með tóka sem Studio býr til í hvert skipti sem það ræsist. Opnaðu Studio, veldu {{ui:Tengja aðstoðarmann}}, og afritaðu vistfangið og tókann.

- Í aðstoðarmanninum þínum bætirðu við MCP-þjóni af gerðinni HTTP með vistfanginu (það lítur út eins og `http://127.0.0.1:47615/mcp`) og hausnum `Authorization: Bearer <tóki>`. Studio sýnir stillingarnar sem þú límir inn.

{{ui:Nýr tóki}} í Studio lætur alla tengda aðstoðarmenn tengjast aftur með nýja tókanum. Deildu aldrei tókanum: hver sem hefur hann getur notað forritin sem þú kveiktir á, meðan Studio er í gangi.

:::note
Vafraflipi getur ekki opnað tengingu fyrir aðstoðarmann: í vafraforritunum hefur rofinn engin áhrif fyrr en þú notar CadCraft Studio á tölvunni þinni.
:::

## Þú hefur stjórnina

- **Hver aðgerð er eitt skref í afturköllun**, merkt með nafni aðstoðarmannsins fyrir hana, til dæmis „Aðstoðarmaður: LINE". Ýttu á {{key:Mod+Z}} til að taka síðustu aðgerð aðstoðarmannsins í heild til baka.
- **Þú sérð hvað hann gerir.** Skipanir hans birtast í skipanasögunni með **[Aðstoðarmaður]** fyrir framan, og teikningin teiknast aftur meðan hann vinnur.
- **Hann bíður eftir þér.** Meðan þú ert í miðri skipun getur aðstoðarmaðurinn lesið en ekki breytt teikningunni; honum er sagt að reyna aftur þegar þú ert búinn.
- **Þú veist þegar einn er tengdur.** Hnappur í forritastikunni nefnir aðstoðarmanninn meðan hann er tengdur. Smelltu á hann til að sjá hvað hann má gera, eða til að **Aftengja** hann.
- **Virkni.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Activity}} sýnir hvert kall: hvenær, hvaða verkfæri, lokið eða hafnað, og afturköllunarskrefið sem það gerði. {{ui:Save the log}} geymir afrit.

## Hvað aðstoðarmaður getur beðið um

| Verkfæri | Heimild | Hvað það gerir |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lesa | Heiti teikningarinnar, einingar, lög, blokkir, blöð; það sem er á skjánum |
| `files_list`, `drawing_open` | Lesa | Studio: skrárnar í möppunum þínum; opnar eina þeirra í þessum glugga |
| `objects_list`, `object_get`, `selection_get` | Lesa | Hlutir með rúmfræði, lengd og flatarmáli (eða aðeins hversu margir, eftir gerð og lagi); valið |
| `drawing_check` | Lesa | Reglur eins og leyfð lög, ekkert á lagi 0, litir ByLayer, textahæðir |
| `view_screenshot` | Lesa | Mynd af teikningunni eins og hún sést |
| `command_run` | Breyta | Skrifar á skipanalínuna: `LINE 0,0 @100,0 @0,50 ` er lesið eins og þú myndir skrifa það (bil endar svar), eða listi með einu svari hver. Það getur látið skipun vera opna og haldið áfram í næsta kalli sínu |
| `script_run` | Breyta | Skrifta (`.scr`) eða LISP-skrá, eins og {{ui:APPLOAD}} hleður hana |
| `block_insert` | Breyta | Setur blokk með eigindagildum sínum í einu skrefi |
| `selection_set`, `undo` | Breyta | Velur hluti fyrir næstu skipun; afturkallar eigin skref |
| `drawing_save` | Vista | Eigin {{ui:Save}} CadCraft, eða {{ui:Save as}} í eina af möppunum þínum |
| `drawing_plot` | Flytja út | PDF eða SVG af blaði eða líkaninu, í mælikvarða eða passað (PDF-undirlög eru ekki prentuð þannig enn) |

Meðan aðstoðarmaður keyrir skipun spyr CadCraft spurninga sinna á skipanalínunni í stað glugga (til dæmis hvort setja eigi inn heila teikningu eða eina blokk), svo aðstoðarmaðurinn geti svarað þeim. Safnið og Leit krefjast enn þín; aðstoðarmaðurinn er beðinn um að spyrja þig.

## Vinna með skrár án þess að opna CadCraft

MCP-þjónninn fyrir CadCraft (`cadcraft-mcp`) og skipanalínan (`cadcraft`) keyra teikningakóða CadCraft sjálfs í Node.js, án glugga. Þau þurfa Node.js 20 eða nýrra.

- **MCP-þjónninn** vinnur aðeins innan þeirra mappa sem þú nefnir, og aðeins með þeim heimildum sem þú gefur honum: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Án `--root` getur hann ekki opnað neina skrá; án `--allow` getur hann aðeins lesið. Hann getur líka lesið IFC-líkön, magntökur og athugasemdirnar í PDF-skjalasöfnum.
- **Skipanalínan** er fyrir þínar eigin skriftur: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Nokkrar skrár í einu: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Bættu við `--json` fyrir úttak sem forrit getur lesið.

:::note
Ef `npx @getcadcraft/mcp` segir að pakkinn finnist ekki, er hann ekki kominn út enn. Fréttir á getcadcraft.com segja til um það þegar hann kemur.
:::

## Ef eitthvað virkar ekki

- **Aðstoðarmaðurinn sér engin CadCraft-verkfæri:** athugaðu að rofinn sé á í þessum glugga, og að glugginn sé opinn í Studio.
- **„þarf breytingarheimild":** hakaðu við **Breyta** undir {{ui:Assistants}}, og spurðu síðan aftur.
- **„utan þeirra mappa sem aðstoðarmenn mega nota":** bættu þeirri möppu við undir {{ui:Assistants}} › {{ui:Folders it may use}}, eða biddu aðstoðarmanninn um að nota skrá í möppu sem þú hefur þegar bætt við.
- **Villur „401" eða „token":** tókinn breyttist (Studio var endurræst, eða {{ui:Nýr tóki}}). Afritaðu þann nýja í stillingar aðstoðarmannsins.
- **Breytingin hans var röng:** ýttu á {{key:Mod+Z}}. Ein ýting tekur til baka eina heila aðgerð aðstoðarmannsins.

## Sjá einnig

- [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes): unnin dæmi, hvert með verkfærunum sem það kallar.
