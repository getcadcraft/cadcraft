---
title: Seinakujud, lõiked, nihked ja lukud 2D-seintel
summary: Joonista seinu ristkülikute, hulknurkade ja kaartena, jaga ja ühenda need uuesti, liiguta neid mõõdu järgi ning lukusta üks sein teisega või ruudustiku joonega. Samad tööriistad mis BimCrafti seintel.
keywords: sein, seinte tööriistariba, seinanupud, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, ühendusstiil, lõikeühendus, lame, risti lõigatud, tabalukk, haarang, lohista ots, pööra, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, ühendus, keela ühendus, lukk, ruudustiku joon, jaga, vahe, nihe, asukohajoon
from: f41e7433
---

Need tööriistad töötavad `WALL`-ist loodud 2D-seintega (vt „Nutikad seinad, uksed ja aknad 2D-s“). Need kasutavad samu reegleid kui BimCrafti seinatööriistad, nii et sein käitub mõlemas ühtemoodi.

## Kus tööriistad asuvad

- Tööriistaribal on rühmas {{ui:Walls}} {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} ja {{ui:Offset}}. Selle menüüs {{ui:More}} on kõik muud seinatööriistad, igaüks oma ikooniga.
- Lintmenüü stiilides on vahekaardil {{ui:Walls}} paneelid {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} ja {{ui:Join}}.
- Paigutuses näitavad tööriistaread ja tööriistakast sama rühma {{ui:Walls}}.
- Võid ka kirjutada mis tahes allpool nimetatud käsu.

## Ühendused salvestatakse

Kui seina ots jõuab teise seina peale, salvestab CadCraft selle ühenduse mõlema seinaga. Ta ei arvuta ühendusi enam uuesti selle järgi, kus otsad parasjagu on. Seega:

- Seinad, mis on liigutatava seinaga ühendatud, järgivad seda ja jäävad ühendatuks. Nende otsad libisevad mööda oma jooni, nii et midagi ei pöörle.
- Kui lohistad seina ühe otsa selle haarangust, säilitab seal ühendatud sein ka oma suuna. Selle ots libiseb mööda oma joont, et jõuda lohistatava seinani, nii et lohistatud ots jääb sellele joonele, mitte alati kursori alla. Eelvaade näitab, kuhu. Lohistatava seinaga otsaga kokku jooksev sein järgib oma joont. Kui lohistad otsa otse mööda seina, muutub selle pikkus ja seal ühendatud sein liigub koos sellega.
- Ühendatud seina `ROTATE` töötab samamoodi: naabrite otsad libisevad mööda oma jooni pööratud seinani.
- Nurga liigutamiseks vali mõlemad seal kokku jooksvad seinad ja lohista nurga haarangut. Mõlemad seinad jäävad nurka ja mõlemad pöörduvad. Kaugemal olevad seinad jäävad endiseks.
- Hoia all {{key:Alt}}, kui klõpsad haarangu uut kohta, et ühendused tahtlikult katkestada: sein läheb sinna, kuhu panid, ja midagi ei järgi.
- Kui lohistamine pööraks ühendatud seina tagasi läbi selle enda kaugema otsa, keeldutakse sellest ja midagi ei muutu.
- Sein, mille joonistad valikuga {{ui:Disallow joins}} (`D` käsus `WALL`) või mille lülitad omadustest välja ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), jääb selle otsa juures vabaks, isegi kui puudutab teist seina, kuni lubad uuesti.
- `WALLDISJOIN` ({{ui:Disallow join}} rühmas {{ui:Walls}}) teeb sama ühe klõpsuga: klõpsa seinale ühe otsa lähedal, et selle otsa ühendused keelata, ja klõpsa uuesti, et need lubada.
- Vanemal joonisel pole veel salvestatud ühendusi. Esimene muudatus, mille teed, leiab need üks kord seinte järgi, nagu nad olid enne muudatust, ja salvestab need. `WALLJOINS` teeb seda kohe.
- DWG- ja DXF-failides on ühendused iga seina sees. CadCraft loeb need tagasi nii, nagu need on salvestatud. Programm, mis ei hoia laiendatud andmeid, näitab seinu tavaliste plokkidena ja jätab ühendused välja. Ühendus, mille seinad on teises programmis liigutatud, kaob järgmisel korral, kui muudad kumbagi seina.

## Nurga ühendusstiil

Nurk, kus kaks seina kohtuvad otsast otsa, joonistatakse lõikeühendusena, kui sa ei vali teist stiili.

- `WALLJOINSTYLE` ({{ui:Join style}} rühmas {{ui:Walls}}): klõpsa nurgale. Iga klõps läheb järgmisele stiilile: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, seejärel jälle {{ui:Mitre}}. Kirjuta `T`, et vahetada, kumb kahest seinast viimati klõpsatud nurgas läbi läheb. Lõpetamiseks vajuta {{key:Enter}}. Käsu üks käivitus on üks tagasivõtmise samm.
- {{ui:Butt}}: üks sein läheb läbi teise seina kaugema pinnani ja teine jääb selle küljele seisma. {{ui:Square off}}: sama, aga läbi minev sein lõpeb risti iseendaga. Täisnurga all näevad need kaks ühesugused välja.
- Seina omadustes: {{ui:Join style at start}}, {{ui:Join style at end}} ja {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- Stiil salvestatakse mõlema seinaga ja liigub DWG- ja DXF-failides kaasas. Seina koopia algab ilma selleta.
- T-ühendusel pole stiili valida: läbi läheb sein, mille külg on kohtumas. Nurk, kus kokku jookseb kolm või enam seina, jääb lõikeühenduseks. Nii on ka väga terav nurk (alla umbes 30 kraadi) ning kaks ühel sirgel olevat seina.

## Joonista seinakujud

Igaüks teeb seinad ühe tagasivõtmise sammuga, nurgad ühendatuna. Käsus `WALL` määrab `O` paigutusnihke (kui kaugele vasakule sinu klõpsudest sein läheb) ja `D` lülitab ühendamise välja järgmistele joonistatavatele seintele.

- `WALLRECT` (`WR`): kaks vastasnurka, nagu `RECTANG`.
- `WALLROT`: esimene külg ja seejärel, kui kaugele teine külg ulatub, nii et ristkülik on mis tahes nurga all.
- `WALLPOLY` (`WP`): külgede arv (3 kuni 64), keskpunkt, `I` sisse kirjutatud või `C` ümber kirjutatud korral ning raadius, nagu `POLYGON`.
- `WALLARC` (`WARC`): keskpunkt, algus, lõpp. `D` pöörab kaare teistpidi.
- `WALLTAN`: klõpsa seina otsa lähedal, seejärel kaare lõppu, mis väljub mööda seda seina.
- `WALLPICK`: klõpsa joonele või murdjoonele ja ütle, kas võtta ka sellega ühendatud jooned.
- `WALLTRACE`: klõpsa suletud joonte ja seinte ala sisse, et panna seinad ümber väikseima ala.

Plaanisein on sirge, seega joonistatakse kaar lühikeste, igaüks 15 kraadi pikkade sirgete seintena. Need ühendatakse nagu iga nurk.

## Lõika seinu

- `WALLSPLIT` (`WS`): klõpsa seinale ja seejärel punktile. `C` lõikab seal, kus teine sein seda ristab, `G` jätab osade vahele vahe, `F` teeb lõigatud otsad vabaks ühendamise asemel. Esimene osa jääb seina kohale joonisel ning uksed ja aknad lähevad oma osaga kaasa. Lõige läbi ukse või akna keeldutakse.
- `WALLSPLITGAP` ({{ui:Split with gap}}): sama jaotus, aga see küsib kõigepealt vahet.
- `WALLDELSEG`: klõpsa seinale, seejärel kustutatava tüki kahele otsale.
- `WALLREJOIN`: klõpsa ühe seina kahele osale, et need taas üheks teha.

## Liiguta seinu mõõdu järgi

- `WALLDIM`: klõpsa lineaarsele või joondatud mõõdule, mis kulgeb ühelt seinalt teisele, ja kirjuta seejärel uus väärtus. Kaugemas otsas olev sein liigub risti iseendaga, esimeses otsas olev sein jääb paigale ja selle külge ühendatud seinad järgivad.
- `WALLOFFSET` (`WO`): klõpsa seinale ja seejärel küljele, kuhu see nihutada (`D` kirjutab vahemaa, `C` teeb hoopis koopia).
- `WALLSTRETCH`: aken seina otste ümber, seejärel baaspunkt ja teine punkt.
- Omadustes: kirjutatud {{ui:Length}} hoiab alguse paigal ja viib kaugemas otsas ühendatud seina kaasa ning uus {{ui:Thickness}} kasvab eemale valitud {{ui:Location line}} suunas (vasak külg, parem külg või keskpunkt).

## Lukusta seinu

Lukk jääb failis seinaga kaasa. Kui liigutad ühte lukustatud seina, järgib teine. Kui üks muudatus liigutab mõlemat seina erinevalt, keeldutakse sellest ja midagi ei muutu.

- `WALLHOLD`: lukusta sein teise seina külge. `A` liigutab selle esmalt teise seina joonele, `K` säilitab selle praeguse vahemaa.
- `WALLHOLDDIM`: lukusta kahe paralleelse seina vaheline kaugus.
- `WALLGRID`: lukusta sein ruudustiku joone külge (joon ruudustikukihil, mille silt on ühes otsas tekstina), kas mööda seda või nii, et üks ots on sellel. Joone järgi lukustatud sein säilitab oma vahemaa sellest. Liiguta ruudustiku joont käsuga `GRIDMOVE` ja sein järgib tervikuna koos oma ühendatud seintega. Sein, mis asub mööda ruudustiku joont, liigub tervikuna koos sellega isegi ilma lukuta, ja sein, mis ainult lõpeb joonel, venib selle otsa järgi.
- `WALLHOLDS` loetleb lukud. `WALLUNHOLD` eemaldab seinalt lukud.
- Iga lukk on plaanil näidatud väikese tabalukuna: lukustatud seina keskosa kõrval või selle otsa kõrval, mis on lukustatud ruudustiku joone külge. Klõpsa tabalukule, et see lukk eemaldada.

## Mida veel pole

Lukud kasutavad seinte keskjooni. Siin seintel ei ole kihte, seega ei ole ühenduskohas kihi prioriteeti, ja seinad ei kõvera (vt ülal kaared). Keegi pole neid tööriistu suurel joonisel proovinud ja neid pole kontrollitud teises CAD-programmis.
