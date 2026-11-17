---
title: Modelleerimine 3D-s
summary: Vaata joonist 3D-sakil 3D-na ja tee sellest lihtsaid tahkeid: väljapressimine (kaldenurga või trassiga), pööramine, tahkude lükkamine ja tõmbamine, kastid, silindrid ja kiilud, nende ühendamine, lahutamine ja ristumine ning nende teisaldamine, kopeerimine, pööramine ja kustutamine ning nende tasavaadete paigutamine lehele.
keywords: 3d, kolm d, tahke, tahked, 3dsolid, piirkond, keha, acis, sat, sab, tahked teistest programmidest, ava 3D-joonis, väljapressimine, extrude, ext, pööramine, revolve, rev, pühkimine, sweep, kaldenurk, taper, trass, path, presspull, vajuta tõmba, push pull, kast, box, silinder, cyl, kiil, wedge, 3dorbit, orbiit, vaade, vscurrent, visuaalne stiil, varjutatud, peidetud joon, karkass, röntgen, xray, iso, perspektiiv, paralleelne, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, vaatekuup, ühendamine, uni, lahutamine, su, ristumine, in, booleaan, kombineerimine, tahkete ühendamine, viewbase, flatshot, tasavaade, 2D-vaade, joonisevaade, esivaade, pealtvaade, külgvaade, peidetud jooned
from: 13060e71
---

## Mida sa koostad

1000 × 600 ruumi põhiplaan väljapressitakse 400 kõrguseks plokiks, üks tahk tõmmatakse üles ja kõrvale tehakse silinder, seejärel salvestatakse mudel koos joonisega ja eksporditakse 3D-vaaturi või printeri jaoks.

{{ui:3D}}-sakk asub {{ui:Mudel}}-sakiga kõrvuti joonise all. See näitab mudeliruumi joonist maapinnal lebamas oma kihtide värvides (väljalülitatud või külmutatud kihid jäävad peidetuks) ja sinu tehtud tahkeid. Esimesel avamisel 3D-vaade laaditakse; pärast seda vahetub see kohe.

## Kuju väljapressimine

1. {{ui:Mudel}}-sakil sisesta `REC` ja vajuta {{key:Enter}}. Sisesta `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Klõpsa {{ui:3D}}-sakil. Tööriistaribal on {{ui:3D}}-rühm joonise rühmade asemel.
3. Klõpsa {{ui:Väljapressimine}} (või sisesta {{cmd:EXTRUDE}}, `EXT`). Klõpsa ristküliku sees ja vajuta {{key:Enter}}.
4. Sisesta `400` ja vajuta {{key:Enter}}. Ajaloos on „Väljapressitud 1 tahke, kõrgus 400“ koos mahuga.

Suletud polüjooned (kaared kaasa arvatud), ristkülikud, hulknurgad, ringid ja ellipsid pressitakse välja; jooned ja avatud polüjooned mitte, ja ajalugu ütleb selle põhjuse. Kujud võid enne valida {{ui:Mudel}}-sakil ja sisestada seal `EXTRUDE`. Kõrguse sisestamise asemel võid selle ka klõpsata: kontuur liigub kursori järgi üles ja alla. Negatiivne kõrgus läheb alla. Kõrguse viibal sisesta `D`, et 2D-kujud pärast väljapressimist kustutada (uuesti `D` jätab need alles).

Kõrguse viibal küsib `T` (Kaldenurk) nurka kraadides: küljed kalduvad selle võrra sissepoole, nii et ülemine osa on väiksem (negatiivne nurk teeb selle suuremaks). Liiga järsk nurk selle kuju jaoks lükatakse tagasi. `P` (Trass) pühib kujud selle asemel mööda trassi (vt allpool).

## Pööramine ja pühkimine

- {{cmd:REVOLVE}} (`REV`, või {{ui:Veel}} › {{ui:Pööra ümber telje}}): vali suletud kujud, vajuta {{key:Enter}}, seejärel klõpsa telje kahel otsal (või sisesta `X` või `Y` joonise telje jaoks läbi punkti 0,0), ja sisesta nurk või vajuta {{key:Enter}} täisringi jaoks. Kuju pöördub ümber telje ja tõuseb maapinnast: joonista vaasi poolkontuur joone kõrvale ja pööra see ümber joone. Kuju võib telge puudutada, aga mitte ületada. Täisringil on 48 sammu.
- {{cmd:SWEEP}} (või {{ui:Veel}} › {{ui:Pühi mööda trassi}}, või `P` käsu {{cmd:EXTRUDE}} kõrguse viibal): vali suletud kujud (profiil), vajuta {{key:Enter}}, seejärel klõpsa trassil: joon, polüjoon, kaar, ring või ellips. Profiil tõuseb trassi risti, keskpunktiga sellel, ja liigub mööda seda; nurgad lõigatakse nurga alt ning suletud trass teeb rõnga. Väike ristkülik mööda ruumi kontuuri teeb plindi; ring mööda polüjoont teeb toru.

## Tahu vajutamine ja tõmbamine

1. Klõpsa {{ui:Vajuta/tõmba}} (või sisesta {{cmd:PRESSPULL}}).
2. Klõpsa ploki ülemist tahku.
3. Sisesta `100` ja vajuta {{key:Enter}}, või liiguta kursorit ja klõpsa. Plokk on nüüd 500 kõrge.

## Kastid, silindrid ja kiilud

- {{cmd:BOX}}: klõpsa või sisesta kaks nurka, seejärel kõrgus.
- {{cmd:CYLINDER}} (`CYL`): keskpunkt, raadius, seejärel kõrgus. Silindritel ja väljapressitud ringidel on 48 külge, varjutatud siledalt.
- {{cmd:WEDGE}} (`WE`): kaks nurka ja kõrgus. Esimeses nurgas on see täiskõrgusel ja kaldub teises nurgas nullini.

3D-sakil tabab klõps tahku või serva, mis kursori all on, muidu maapinda, nii et kast võib seista teise tahke peal.

## Tahkete teisaldamine, kopeerimine, pööramine ja kustutamine

3D-sakil valib klõps tahke; lohista vasakult paremale akna jaoks ja paremalt vasakule ristumise jaoks. Seejärel:

- {{cmd:MOVE}}: klõpsa baaspunkt ja koht, kuhu see läheb, või sisesta `<100,0,0>` (või `@100,0`) vahemaa jaoks mööda X, Y ja Z.
- {{cmd:COPY}}: sama, originaal jääb alles.
- {{cmd:ROTATE}}: sisesta nurk (pöördub valiku keskpunkti ümber, ümber Z), või klõpsa keskpunkt, algpunkt ja nurk.
- {{cmd:ERASE}} või {{key:Delete}}.

## Tahkete ühendamine, lahutamine ja ristumine

Ava 3D-tööriistaribal {{ui:Veel}} või sisesta käsk:

- {{cmd:UNION}} (`UNI`): vali tahked, vajuta {{key:Enter}}: need muutuvad üheks tahkeks.
- {{cmd:SUBTRACT}} (`SU`): vali tahked, mida alles jätta, vajuta {{key:Enter}}, seejärel need, mis ära võtta, ja vajuta {{key:Enter}}. Auk läbi ploki: joonista läbi selle silinder ja lahuta silinder.
- {{cmd:INTERSECT}} (`IN`): vali tahked, vajuta {{key:Enter}}: alles jääb ainult see, mis neil kõigil on ühine.

Ajalugu näitab tulemuse mahtu. Iga käsk on üks tagasivõtmise samm. Esimene käivitamine laadib 3D-booleaanimootori (umbes 0,5 MB; on kaasas {{ui:Salvesta võrguks}}-s). Ühendada saab ainult suletud tahkeid: avatud servadega tahke (teise programmi lahtistest 3D-tahkudest) lükatakse tagasi koos põhjusega. Tulemus on üks tahke; kõverad tahud jäävad lamedatest tahukatest koosnevaks, nagu silinderki.

Topeltklõps tahkel avab selle tahud ja servad eraldi; {{key:Esc}} sulgeb selle taas. Iga 3D-muudatus on üks tagasivõtmise samm samas ajaloos joonisega: {{key:Mod+Z}} võtab tagasi viimase tegevuse kummalgi sakil.

## Tasavaated lehel

1. Ava lehe sakk (või jää {{ui:Mudel}}-le) ja sisesta {{cmd:VIEWBASE}} (või `FLATSHOT`).
2. Vali vaade: {{key:Enter}} esivaate jaoks, või `T` (ülevaade), `R` (parem), `L` (vasak), `BA` (tagant), `BO` (alt), `I` (isomeetriline).
3. {{key:Enter}} näitab peidetud jooni katkendjoonena; `H` jätab need välja.
4. {{key:Enter}} võtab mõõtkava, mille CadCraft soovitab: lehel suurim standardne mõõtkava (näiteks 1:20), mille juures vaade mahub alla poole paberi. Või sisesta see: `1:50`, `2:1`.
5. Klõpsa või sisesta, kuhu vaate keskpunkt läheb.

Vaade on üks plokiviide, `VIEW-FRONT-1` jne: nähtavad servad kihil VIEW-VISIBLE (0,5 mm), peidetud kihil VIEW-HIDDEN (katkendjoon, 0,25 mm). Teisalda seda, lisa sellele mõõdud ja prindi nagu iga muud joonist. See on pilt tahketest sel hetkel, kui vaate tegid; pärast nende muutmist kustuta vaade ja käivita {{cmd:VIEWBASE}} uuesti. Rohkemate vaadete jaoks käivita seda iga vaate kohta üks kord.

## Ümbruse vaatamine

Lohista ratta abil, et orbiteerida, {{key:Shift}} + ratta lohistus või parem nupp, et nihutada, ja keera ratast, et suumida kursori kohal. Puuteplaadil orbiteerib kaks sõrme ja pigistamisega suumitakse. Paremklõps ilma lohistamata on {{key:Enter}}, nagu teistel sakkidel. 3DORBIT laseb vasakul nupul orbiteerida, kuni vajutad {{key:Enter}} või {{key:Esc}}.

- {{ui:Vaated}} (või {{cmd:VIEW}}): Isomeetriline, Ülevaade, Alt, Ees, Taga, Vasak, Parem, Perspektiiv või Paralleelne, ja Suumi kõigele.
- {{ui:Stiil}} (või {{cmd:VSCURRENT}}, `VS`): Varjutatud, Varjutatud servadega, Peidetud joon, Karkass või Röntgen.

Klõpsatud punktid tõmbuvad tahketele (nurgad, servad, tahud) ja maapinnal olevale 2D-joonisele: selle joonte ja kaarte otspunktid ja keskpunktid ning punktid nende vahel. 2D-jooni 3D-sakil kunagi ei valita. Kui käsk küsib 2D-objekte (EXTRUDE, REVOLVE, SWEEP), valib klõps ühe, lohistus vasakult paremale võtab kõik akna sees olevad ja lohistus paremalt vasakule need, mida see ristub, nagu {{ui:Mudel}}-sakil.

3D-sakil paremas ülanurgas on {{ui:Vaatekuup}}: klõpsa tahku, serva või nurka, et sealt vaadata, lohista seda orbiteerimiseks ja majanupp viib tagasi isomeetrilisse vaatesse. See on {{ui:Automaatne}}, [CadCraft'i sätted](topic:settings) valikust {{ui:Nurgaindikaator}} esimene. Kui seadistatud on {{ui:Vaatekuup}}, näitab ka {{ui:Mudel}}-sakk kuupi, vaadates ülevalt; klõps mõnele teisele küljele avab 3D-sakki sealt vaatega. Kui seadistatud on {{ui:Teljeikoon}}, näitavad mõlemad sakid selle asemel telje märgist.

## Tahked teistest programmidest

Teise programmi joonis võib sisaldada 3D-tahkeid, piirkondi ja kehasid (3DSOLID, REGION, BODY: teine programm hoiab nende kuju ACIS-andmetena). CadCraft näitab mudeliruumi omi nende kihi värvis ja omade servadega 3D-sakil, esimesel sakki avamisel; käsurida ütleb siis, mitu joonistati.

- Need kuvatakse nagu on: neid ei saa valida, teisaldada ega muuta. Väljalülitatud või külmutatud kihid peidavad need.
- DWG-na salvestamisel kirjutatakse iga üks tagasi muutmata, mis tahes DWG-versioonis, nii et teine programm saab need uuesti. DXF-failid neid ei säilita: CadCraft kirjutab need ainult DWG-sse ja ütleb seda, kui salvestad DXF-na.
- Joonistatud: lamedad tahud ning tahud silindritel, koonustel, sfäärides, toroidil ja lihtsates splainpindades, sirgete, ümarate ja splaini servadega. Tahk mis tahes muul pinnal või selline, mida CadCraft ei suuda paigutada, ei arvata: see jäetakse välja ja loetletakse, näiteks „Veel ei joonistatud (3D-tahked): 2 tahku pinnal spline-surface (sweepsur), pind, mida veel ei joonistata.“
- Plokkide sees olevaid tahkeid ei näidata veel; „Selle faili kohta“ loeb need.

Kõverad tahud joonistatakse väikeste lamedate tükkidena, umbes 7.5° kaupa, nii et kõver tahke näeb lähedalt veidi tahuline välja.

## Salvestamine ja eksport

Salvestamine säilitab 3D-mudeli nii DWG-s kui DXF-s. Iga tahk läheb sisse 3D-tahuna kihil `CC-3D`, nii et teised programmid näitavad tahkeid, ja CadCraft hoiab failis oma täpset koopiat, mille loeb tagasi, kui joonise uuesti avad, koos 3D-vaatega nagu see oli (kaamera, projektsioon ja visuaalne stiil). Teiste programmide 3D-tahud tulevad 3D-sakile lahtiste tahkudena, hoituna koos ühe grupina. Plokis olev 3D-tahk tuleb sisse üks kord iga viite kohta sellele plokile mudelis, paigutatud ja pööratud nagu viide; plokis endas ja lehel joonistatakse 3D-tahk lamedalt, oma kontuurina.

{{ui:Eksport}} 3D-rühmas laadib alla ainult tahked: GLB vaaturite ja veebi jaoks ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) või STL 3D-printimiseks, millimeetrites ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} küsib, mida soovid.

:::note
3D-mudel on tegelikus suuruses. Joonis ilma ühikuteta loetakse millimeetriteks, nii et `1000` on üks meeter. Kui muudad joonise ühikuid hiljem (Omadused, kui midagi pole valitud), skaleeritakse tahked nendega koos, et nad jääksid joonisele, ja ajalugu ütleb seda. Üks {{key:Mod+Z}} võtab ühikute muutuse ja skaleerimise koos tagasi.
:::
