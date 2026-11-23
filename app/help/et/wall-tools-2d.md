---
title: Seinakujud, lõiked, nihked ja lukud 2D-seintele
summary: Joonista seinad ristkülikute, hulknurkade ja kaartena, jaga ja ühenda need uuesti, liiguta neid mõõdu järgi ning lukusta üks sein teisele või ruudustiku joonele. Samad tööriistad nagu BimCrafti seintel.
keywords: sein, seinade tööriistariba, seinanupud, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, ühendusstiil, lõikeühendus, lame, risti lõigatud, lukk, nupp, käepide, lohista ots, pööra, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, ühenda, keela ühendus, lukusta, ruudustiku joon, jaga, vahe, nihe, asukoha joon
from: 49044181
---

Need tööriistad töötavad `WALL`-ist tehtud 2D-seintega (vt „Joonista 2D-s nutikad seinad, uksed ja aknad”). Need kasutavad samu reegleid nagu BimCrafti seinatööriistad, nii et sein käitub mõlemas ühtmoodi.

## Kus tööriistad on

- Tööriistaribal on rühmal {{ui:Walls}} (Seinad) {{ui:Wall}} (Sein), {{ui:Rectangle}} (Ristkülik), {{ui:Split}} (Jaga) ja {{ui:Offset}} (Paralleelnihe). Selle menüüs {{ui:More}} (Veel) on kõik teised seinatööriistad, igaüks oma ikooniga.
- Riba menüü stiilides on vahelehel {{ui:Walls}} paneelid {{ui:Draw walls}} (Joonista seinad), {{ui:Cut}} (Lõika), {{ui:Set and modify}} (Määra ja muuda), {{ui:Hold}} (Hoia) ja {{ui:Join}} (Ühenda).
- Paigutuses näitavad tööriistaread ja tööriistakast sama rühma {{ui:Walls}}.
- Võid sisestada ka mis tahes allpool nimetatud käsu.

## Ühendused on salvestatud

Kui seina ots satub teise seina peale, salvestab CadCraft selle ühenduse mõlema seinaga. Ta ei arvuta ühendusi enam uuesti selle järgi, kus otsad juhtumisi asuvad. Seega:

- Liigutatud seinaga ühendatud seinad järgivad seda ja jäävad ühendatuks. Nende otsad libisevad mööda oma jooni, nii et midagi ei pöörle.
- Lohista seina üht otsa selle käepidemest ja seal ühendatud sein säilitab oma suuna ka. Selle ots libiseb mööda oma joont, et kohtuda lohistatud seinaga, nii et lohistatud ots satub sellele joonele, mitte alati kursori alla. Eelvaade näitab kohta. Lohistatud seina otsa põrkav sein järgib mööda oma joont. Kui lohistad otsa otse mööda seina, muutub selle pikkus ja seal ühendatud sein liigub koos sellega.
- `ROTATE` ühendatud seinal töötab samamoodi: selle naabrite otsad libisevad mööda oma jooni pööratud seinani.
- Nurga liigutamiseks vali mõlemad seinad, mis seal kohtuvad, ja lohista nurga käepidet. Mõlemad seinad jäävad nurka ja mõlemad pöörduvad. Kaugemad seinad jäävad nii, nagu olid.
- Hoia {{key:Alt}} all, kui klõpsad käepideme uuel kohal, et ühendused tahtlikult katkestada: sein läheb sinna, kuhu paned, ja midagi ei järgi.
- Kui lohistamine pöörab ühendatud seina tagasi läbi selle enda kauge otsa, keeldutakse ja midagi ei muutu.
- Sein, mille joonistad valikuga {{ui:Disallow joins}} (Keela ühendus) (`D` käsus `WALL`), või mille lülitad välja paneelis Properties ({{ui:Disallow join at start}} (Ära ühenda algusest), {{ui:Disallow join at end}} (Ära ühenda lõpust)), jääb selles otsas vabaks, isegi kui puudutab teist seina, kuni lubad selle uuesti.
- `WALLDISJOIN` ({{ui:Disallow join}} rühmas {{ui:Walls}}) teeb sama klõpsuga: klõpsa seina otsa lähedal, et keelata ühendused selles otsas, ja klõpsa uuesti, et need lubada.
- Vanemal joonisel ei ole veel salvestatud ühendusi. Esimene muudatus, mille teed, leiab need üks kord sellest, kuidas seinad enne muudatust seisid, ja salvestab need. `WALLJOINS` teeb seda kohe.
- DWG- ja DXF-failid kannavad ühendusi iga seina sees. CadCraft loeb need tagasi nagu salvestatud. Programm, mis laiendatud andmeid ei hoia, näitab seinu tavaliste plokkidena ja jätab ühendused välja, ning ühendus, mille seinad on teises programmis liigutatud, jäetakse välja järgmisel korral, kui mõlemat seina muudad.

## Nurga ühendusstiil

Nurk, kus kaks seina kohtuvad otsast otsani, joonistatakse lõikeühendusena, kui ei vali teist stiili.

- `WALLJOINSTYLE` ({{ui:Join style}} (Ühendusstiil) rühmas {{ui:Walls}}): klõpsa nurka. Iga klõps läheb järgmisele stiilile: {{ui:Mitre}} (Lõikeühendus), {{ui:Butt}} (Lame), {{ui:Square off}} (Risti lõigatud), siis jälle {{ui:Mitre}}. Sisesta `T`, et vahetada, milline kahest seinast läbi läheb nurgal, mida viimati klõpsasid. Vajuta {{key:Enter}}, et lõpetada. Üks käsu käivitus on üks tagasivõtmise samm.
- {{ui:Butt}} (Lame): üks sein läheb läbi teise kaugema külje, ja teine peatub selle küljel. {{ui:Square off}} (Risti lõigatud): sama, aga läbiminev sein lõpeb risti iseendaga. Täisnurga all näevad need kaks ühesugused välja.
- Seina paneelis Properties: {{ui:Join style at start}} (Ühendusstiil algusel), {{ui:Join style at end}} (Ühendusstiil lõpul) ja {{ui:Runs through at start}} (Läheb algusel läbi), {{ui:Runs through at end}} (Läheb lõpul läbi).
- Stiil salvestatakse mõlema seinaga ja liigub DWG- ja DXF-failides kaasa. Seina koopia algab ilma selleta.
- T-ühendusel ei ole stiili valida: läbi läheb sein, mille külg puudutatakse. Nurk, kus kohtub kolm või enam seina, jääb lõikeühenduseks. Nii on ka väga terav nurk (alla umbes 30 kraadi) ja kaks seina ühel joonel.

## Joonista seinakujud

Igaüks teeb seinad ühe tagasivõtmise sammuga, nurgad ühendatud. Käsus `WALL` seab `O` paigutusnihke (kui kaugele vasakule sinu klõpsudest sein läheb) ja `D` lülitab ühendamise välja järgmiselt joonistatud seintele.

- `WALLRECT` (`WR`): kaks vastasnurka, nagu `RECTANG`.
- `WALLROT`: esimene külg, siis kui kaugele teine külg läheb, ristküliku jaoks mis tahes nurga all.
- `WALLPOLY` (`WP`): külgede arv (3 kuni 64), keskpunkt, `I` piirjoonistatud või `C` ümberjoonistatud jaoks, siis raadius, nagu `POLYGON`: klõpsa see või sisesta (sisestatud raadius läheb osuti suunas või mööda X-i, kui osuti on veel keskpunktil).
- `WALLARC` (`WARC`): keskpunkt, algus, lõpp. `D` pöörab kaare teist pidi.
- `WALLTAN`: klõpsa seina otsa lähedal, siis kaare lõppu, mis lahkub mööda seda seina.
- `WALLPICK`: klõpsa joont või polyjoont ja ütle, kas võtta ka sellega ühendatud jooned.
- `WALLTRACE`: klõpsa joonte ja seinte suletud ala sees, et panna seinad väikseima ümber.

Plaani seinad on sirged, seega joonistatakse kaar lühikeste sirgete seintena, igaüks 15 kraadi. Need ühenduvad nagu iga nurk.

## Lõika seinad

- `WALLSPLIT` (`WS`): klõpsa seinal, siis punktil. `C` lõikab seal, kus teine sein seda ristub, `G` jätab osade vahele lünga, `F` teeb lõigatud otsad vabaks ühendamise asemel. Esimene osa säilitab seina koha joonisel, ja uksed ja aknad lähevad koos oma osaga. Läbi ukse või akna lõikamine lükatakse tagasi.
- `WALLSPLITGAP` ({{ui:Split with gap}} (Jaga vahega)): sama jagamine, aga küsib kõigepealt vahet.
- `WALLDELSEG`: klõpsa seinal, siis kustutatava tüki kahel otsal.
- `WALLREJOIN`: klõpsa ühe seina kahel osal, et teha need jälle üheks.

## Liiguta seinu mõõdu järgi

- `WALLDIM` ({{ui:Edit by dimension}} (Muuda mõõdu järgi)): klõpsa lineaarsel või joondatud mõõdul, mis läheb ühest seinast teiseni, siis sisesta uus väärtus. Kaugemas otsas olev sein liigub risti iseendaga, esimeses otsas olev sein seisab ja sellega ühendatud seinad järgivad. Mõõdu kaugem punkt liigub koos oma seinaga, nii et mõõt näitab väärtust, mille sisestasid.
- `WALLOFFSET` (`WO`): klõpsa seinal, siis külg, kuhu seda nihutada (`D` sisestab kauguse, `C` teeb hoopis koopia).
- `WALLSTRETCH`: aken seinaotste ümber, siis baaspunkt ja teine punkt.
- Paneelis Properties jätab sisestatud {{ui:Length}} (Pikkus) algusotsa paigale ja viib kaasa kaugemas otsas ühendatud seina, ning uus {{ui:Thickness}} (Paksus) kasvab eemale {{ui:Location line}} (Asukoha joon) eest, mille valisid (vasak külg, parem külg või keskel).

## Mõõt seinte keskjoonte vahel

Seina keskjoont ei joonistata, aga objektipüüdmine leiab selle. Kui objektipüüdmine on sees ({{key:F3}}), liiguta osuti seina paksuse keskele: märgis ütleb `Wall center: endpoint` või `Wall center: midpoint`, ja keskjoon näitub katkendjoonena, kui märgis on sellel. Kui objektipüüdmise loendis on sisse lülitatud {{ui:Perpendicular}} (Risti) või {{ui:Nearest}} (Lähim), töötavad need ka keskjoonel.

1. Käivita `DIMLINEAR` (või `DIMALIGNED`).
2. Klõpsa esimesel seinal kohas, kus märgis ütleb `Wall center: midpoint` või `Wall center: endpoint`.
3. Klõpsa teisel seinal samamoodi ja siis kohas, kuhu mõõtejoon läheb.
4. Kauguse muutmiseks käivita `WALLDIM`, klõpsa mõõdul ja sisesta uus väärtus. Teine sein liigub.

Keskjoone püüdmine töötab igas käsus, mis küsib punkti.

## Lukusta seinad

Lukk jääb failis seinaga. Kui liigutad ühte lukustatud seina, järgib teine. Kui üks muudatus liigutab mõlemat seina erinevalt, keeldutakse ja midagi ei muutu.

- `WALLHOLD`: lukusta sein teisele seinale. `A` viib selle enne teise seina joonele, `K` hoiab kauguse, mis tal on.
- `WALLHOLDDIM`: lukusta kahe paralleelse seina vaheline kaugus.
- `WALLGRID`: lukusta sein ruudustiku joonele (joon ruudustiku kihil, mille silt on tekstina ühes otsas), kas mööda seda või ühe otsaga sellel. Joone järgi lukustatud sein säilitab oma kauguse sellest. Liiguta ruudustiku joont käsuga `GRIDMOVE` ja sein järgib tervikuna, koos oma ühendatud seintega. Sein, mis asub mööda ruudustiku joont, liigub koos sellega tervikuna isegi ilma lukuta, ja sein, mis ainult lõpeb joonel, venib selle otsa järgi.
- `WALLHOLDS` loetleb lukud. `WALLUNHOLD` eemaldab seinalt lukud.
- Iga lukk näitab plaanil väikest lukku: lukustatud seina keskel või otsa kõrval, mis on lukustatud ruudustiku joonele. Klõpsa lukul, et see lukk eemaldada.

## Mis on veel puudu

Lukud kasutavad seinte keskjooni. Siinsed seinad ei oma kihte, seega ristmikul ei ole kihi prioriteeti, ja seinad ei kaarduta (vt kaared ülal). Keegi pole neid tööriistu suurel joonisel proovinud ja neid pole teises CAD-programmis kontrollitud.
