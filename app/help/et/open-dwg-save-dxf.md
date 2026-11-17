---
title: Ava DWG, muuda seda ja salvesta koopia
summary: Ava joonis, mille keegi sulle saatis, kontrolli, mis tuli sisse, tee muudatus ja saada koopia tagasi DWG- või DXF-vormingus.
keywords: dwg, dxf, ava, import, eksport, salvesta, r12, edasi-tagasi, konsultant, xref, joonise kontroll, salvesta nimega, dwg salvestamine, vormindus
from: 49de4bf6
---

## Mida sa teed

Ava DWG konsultandilt, kontrolli, mida CadCraft suutis ja ei suutnud näidata, lisa märge, prindi leht PDF-iks ning salvesta koopia tagasisaatmiseks DWG- või DXF-vormingus.

## Ava fail

1. Vajuta {{key:Mod+O}} või klõpsa {{ui:Ava}}.
2. Vali `.dwg` fail.

Olekuriba näitab „Loen …”, kui joonist loetakse. Kui see on valmis, täidab joonis ekraani ning ajalugu ütleb näiteks „Avatud plan.dwg: 18,240 objekti 64 kihil”, koos kulunud ajaga.

:::offline
Oled võrguühenduseta. Kui nupp {{ui:Salvesta võrguks}} ütleb „Võrguks valmis”, avanevad DWG-failid tavapäraselt. Kui mitte ja selles vahekaardis pole veel ühtegi DWG-d avatud, võib DWG avamine ebaõnnestuda, sest CadCraft'i DWG-lugeja laaditakse esimese DWG-ga: ava selle asemel DXF, või salvesta CadCraft võrguks, kui oled järgmine kord võrgus. Vaata [Töö võrguühenduseta](common:offline).
:::

## Kontrolli, mis tuli sisse

1. Vaata vasakpoolse paneeli jaotist {{ui:Joonis}}: formaat ja versioon, ühikud, objektide ning kihtide arv ja lehed.
2. Loe kasti „Selle faili kohta” all, kui see on olemas.

Kast loetleb:

- **Veel ei näidata:** objektid, mida CadCraft ei suuda veel joonistada, liigi ja arvu järgi. Need jäetakse välja, neid ei oletata.
- **Paigutused (lehed) tulid sisse:** ava need joonise all olevate vahekaartidega.
- **Mõõdud, mida sai lugeda ainult joonistatuna.**

3. Klõpsa joonise all olevatel vahekaartidel, et näha iga lehte.
4. Kontrolli jaotises {{ui:Praegused sätted}} väärtust {{ui:Ühikud}} (ükski ei ole valitud, vahekaart {{ui:Mudel}}). Kui seal on {{ui:Ühikuta}}, aga tead, et joonis on millimeetrites, sea see, et lehe- ja printimismõõtkavad oleksid õiged.

:::tip
Kui ootasid joonise osa ega näe seda, vaata paneeli {{ui:Kihid}}: kiht võib failis olla välja lülitatud või külmutatud. Klõpsa selle nimel, et muuta see aktiivseks; see lülitab selle sisse.
:::

## Tee oma muudatus

1. Tee märkmete jaoks kiht: klõpsa {{ui:Uus kiht}}, sisesta `NOTES` ja vajuta {{key:Enter}}.
2. Sisesta `DT` ja vajuta {{key:Enter}}.
3. Klõpsa kohta, kuhu märge läheb.
4. Sisesta joonisele sobiv teksti kõrgus (vaata [Teksti ja siltide lisamine](topic:text)) ja vajuta {{key:Enter}}.
5. Vajuta {{key:Enter}}, et jätta pööre 0-ks.
6. Sisesta märge ja vajuta {{key:Enter}}.
7. Lõpetamiseks vajuta {{key:Enter}} veel kord.

Imporditud mõõtude muutmine on korras: niipea kui ühte muudad, joonistab CadCraft selle uuesti oma stiilis.

## Prindi leht ülevaatamiseks

1. Klõpsa lehe vahekaarti.
2. Vajuta {{key:Mod+P}}.
3. Klõpsa {{ui:Laadi PDF alla}}.

Vaata [Prindi PDF-iks](topic:plot-pdf).

## Salvesta koopia

1. Vajuta {{key:Mod+S}} või klõpsa {{ui:Salvesta}}.

Avasid DWG, seega brauser laadib alla `<name>.dwg` selles versioonis, milles DWG tuli. Ajalugu ütleb näiteks „Salvestatud koopia nimega Plan.dwg (DWG (AutoCAD 2018)).” ja loetleb selle all read kõigest, mis teel muutus.

2. Loe need read enne faili saatmist. [Mida DWG säilitab ja muudab](topic:files#what-a-dwg-keeps-and-changes) selgitab igaüht.

Sinu algne DWG ei muutu kunagi. Iga salvestus on uus allalaadimine.

## Salvesta nimega DWG või DXF

Vormingu valimiseks ise:

1. Vajuta {{key:Mod+Shift+S}} või klõpsa {{ui:Salvesta nimega}}.

Avaneb dialoog {{ui:Salvesta koopia nimega}} neli valikut, igaühel selle faili nimi, mille see annab: {{ui:DWG}} koos oma loendiga {{ui:Versioon}}, {{ui:DXF R12}}, {{ui:DXF 2000}} ja {{ui:DXF 2000 (binary)}}. Joonise praegune vorming ja versioon on juba valitud.

2. Klõpsa soovitud vormingut. DWG puhul vali versioon, mida teine kontor kasutab, või vanem: AutoCAD 2018, 2013, 2010, 2007, 2004 või 2000.
3. Klõpsa {{ui:Salvesta}}.

Koopia laaditakse alla. Edaspidi salvestab {{key:Mod+S}} selle joonise selles vormingus ja uued joonised algavad samuti sellega selles brauseris. {{ui:Loobu}} või {{key:Esc}} ei salvesta midagi ja ajalugu ütleb „Ei salvestatud.”

Valik:

- **DWG** säilitab kõige rohkem: lehed koos vaateakendega, päris mõõdud, viirutusmustrid, kihi- ja plokinimed nii, nagu sisestasid, ning mitmerealise teksti mitmerealisena. AutoCAD 2000 versioon avaneb enamikus programmides; 2004 ja hilisemad säilitavad ka tõelised värvid.
- **DXF 2000** on tekstifail, mis säilitab peaaegu kõik, mida DWG: iga leht paigutusena koos vaateakendega, päris mõõdud, viirutusmustrid, tõelised värvid, joonepaksused, joonetüübid ning nimed nii, nagu sisestasid. See avaneb AutoCAD 2000 ja hilisemas versioonis ning enamikus CAD-programmides. Mitmikviiktekstid muutuvad joonteks, noolepeadeks ja tekstiks, mida need joonistavad. DXF, mis avati versioonis 2000 või hiljem, salvestub DXF 2000-na.
- **DXF 2000 (binary)** sisaldab sama sisu, mis DXF 2000, binaarkujul: väiksem fail, mis hoiab iga arvu täpselt. Teiste programmide binaarsed DXF-failid avanevad nagu tekstilised ning binaarsest DXF-ist avatud joonis salvestub tagasi binaarsena.
- **DXF R12** avaneb peaaegu igas CAD-programmis. See säilitab esimese lehe koos vaateakendega ning CadCraft'i teised lehed. See lihtsustab uuemaid asju, nagu mitmerealine tekst ja viirutused.

## Mida teine kontor näeb

DWG-s:

- Jooned, kaared, ringid, ellipsid, murdjooned, tekst, mitmerealine tekst, plokid oma atribuutidega, tahked täited, viirutusmustrid ja kihid nii, nagu sina neid näed.
- Päris mõõdud: teine programm mõõdab need uuesti, kui neid venitatakse.
- Iga leht oma paberi ja vaateakendega.
- Mitmikviiktekstid mitmikviiktekstidena. AutoCAD 2000 versioonis muutuvad tõelised värvid lähimaks standardvärviks.

DXF R12-s:

- Jooned, kaared, ringid, murdjooned, tekst, plokiviited ja mõõdud nii, nagu sina neid näed. Mõõdud jäävad päris mõõtudeks.
- Kihinimed suurtähtedes, tühikud asendatud `_`-ga.
- Esimene leht joonise paberiruumina koos vaateakendega. Edasised lehed tulevad plokkidena nimega `CCLAYOUT_1` jne; kui nad vajavad iga lehte paigutusena, prindi iga lehe PDF ka neile.
- Mitmerealine tekst eraldi ridadena, ellipsid murdjoontena, viirutused kontuuridena.

Igal juhul ei ole koopias kõike, mis DWG avamisel oli loetletud kui „Veel ei näidata”, välja arvatud juhul, kui ajalugu ütleb, et see säilitati: DWG OLE-objektid ja selle 3D-tahkised mudeliruumis kirjutatakse tagasi, kui salvestad DWG-na. Ütle see neile ja saada ka PDF.

## Levinud vead

- **„CadCraft avab DWG- ja DXF-joonised.”** Failil on teine laiend. Kontrolli, et see on `.dwg` või `.dxf`.
- **„Seda joonist ei saanud lugeda.”** DWG on rikutud või versioonis, mida lugeja ei toeta. Küsi DXF või DWG, mis on salvestatud vanemas versioonis.
- **„See binaarne DXF lõpeb objekti keskel.”** Fail on katkine või rikutud. Sisesta RECOVER, et avada see, mida saab lugeda, või küsi fail uuesti.
- **Salvestatud fail on nimega `name (1).dwg` või `name (1).dxf`.** Brauser teeb nii, kui samanimeline fail on kaustas juba olemas.
- **Neil on vanem programm, mis ei suuda DWG-d avada.** Salvesta DWG {{ui:Versioon}} {{ui:AutoCAD 2000}} või {{ui:DXF R12}} vormingus: peaaegu iga CAD-programm avab selle.
- **Joonise osad puuduvad.** Seotud joonised (xrefs) ei laadita enne, kui valid nende failid ({{cmd:XREF}}, `R`), ja pildid näidatakse raamidena oma failinimedega.
