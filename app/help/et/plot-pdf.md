---
title: Prindi PDF-iks
summary: Tee lehest PDF täismõõdus või mudelist PDF mõõtkavas või paberile mahutatult, prindi see brauserist või Studiost või salvesta PNG- või SVG-failina.
keywords: trüki, prindi, printer, koopiad, png, svg, pilt, pdf, avalda, ekspordi pdf, paber, mõõtkava, monokroomne, hallskaala, must valge, joone paksus, pliiats, lehekülje seadistus, trükiaken, printimisstiil, printimisstiilide tabel, ctb, värvist sõltuv, rasterdamine, printimisstiilid, stiilihaldur
from: a4752f83
---

## Mida sa teed

Lehe PDF täismõõdus, seejärel mudeli kiire PDF mõõtkavas 1:100 ja väljatrükk.

PDF luuakse sinu brauseris; midagi ei laadita üles. See on vektor-PDF: jooned jäävad igal suumil teravaks ja tekstist saab otsida.

## Lehe prindimine PDF-iks

1. Klõpsa joonise all oleval lehe sakil.
2. Vajuta {{key:Mod+P}}, klõpsa {{ui:Trüki}} või kirjuta `PLOT` ja vajuta {{key:Enter}}.

Avaneb dialoog {{ui:Prindi PDF-iks}}. See ütleb, milline leht prinditakse ja millisele paberile, „täismõõdus … nagu näed“. Paremal olev eelvaade näitab lehte.

3. Lahtris {{ui:Printimisstiil}} vali {{ui:Monokroomne (must)}} mustade joonte jaoks, {{ui:Värv (nagu joonistatud)}} värvide säilitamiseks, {{ui:Hallskaala}} või oma tabel (vt [Printimisstiilide tabelid](topic:plot-pdf#plot-style-tables)). Leht jätab selle valiku alles: see salvestatakse joonisega.
4. Väljal {{ui:Joone paksus}} vali pliiatsi laius 0.13 mm kuni 0.70 mm. Vaikimisi joonepaksusega jooned prinditakse selle laiusega; oma joonepaksusega jooned (kiht, objekt või tabelis nende värvi pliiats) prinditakse selle järgi.
5. Klõpsa {{ui:Laadi PDF alla}}.

Brauser laadib alla PDF-faili, mille nimi tuleneb joonise ja lehe nimest, näiteks `Drawing1-A-101 Plan.pdf`. Ajalugu näitab selle suurust baitides ja paberi mõõtu millimeetrites.

Leht prinditakse alati mõõtkavas 1:1 oma paberile. Paberi muutmiseks muuda seda lehel endal (vt [Lehe seadistamine](topic:sheets-and-viewports)). Printimiseks määramata kihid jäetakse välja, samuti vaateakende raamid.

## Kõik lehed ühes PDF-is

Kahe või enama lehe korral on dialoogis {{ui:Prindi PDF-iks}} valik {{ui:Kõik lehed ühes PDF-is}}; või kirjuta {{cmd:PUBLISH}}. {{key:Enter}} võtab kõik lehed; `S` (Mõned) küsib nende nimed, eraldatuna komadega. Alla laaditakse üks PDF, kus on üks lehekülg lehe kohta sakkide järjekorras, igaüks oma paberimõõdus, ning iga lehe järjehoidja oma nimega. Iga leht prinditakse oma printimisstiilide tabeliga; kui tabelit pole valitud, kasutatakse dialoogis viimati valitud tabelit ja viimati valitud pliiatsi laiust.

## Mudeli prindimine

1. Klõpsa sakil {{ui:Mudel}}.
2. Vajuta {{key:Mod+P}}.

Dialoog ütleb, et see prindib mudeli paberilehele, ja näitab rohkem sätteid:

3. Lahtris {{ui:Pindala}} vali, mida printida:
   - {{ui:Kõik (ulatus)}}: kogu joonis.
   - {{ui:Mis on ekraanil}}: joonisel praegu nähtav ala.
   - {{ui:Aken…}}: seejärel klõpsa {{ui:Vali}}, klõpsa joonisel kahte nurka ning dialoog tuleb tagasi.
4. Lahtris {{ui:Paber}} vali suurus: ISO A4 kuni A0, Letter, Legal, Tabloid ja ANSI C ja D või ARCH C, D ja E.
5. Lahtris {{ui:Suund}} vali {{ui:Rõhtpaigutus}} või {{ui:Püstpaigutus}}.
6. Lahtris {{ui:Mõõtkava}} vali {{ui:Mahuta paberile}} või mõõtkava nagu `1:100`.

Sätete all on rida, mis näitab mõõtkava ja seda, kui suureks ala paberil tuleb. Kui see on paberist suurem, sellest teatatakse: servad lõigatakse ära. Vali väiksem mõõtkava, suurem paber või {{ui:Mahuta paberile}}.

7. Klõpsa {{ui:Laadi PDF alla}}.

Mudeli trükis jääb serva ümber 5 mm veeris, sest enamik printereid ei saa printida servani. {{ui:Mahuta paberile}} annab ebatavalise mõõtkava (ajalugu ja infirida ütlevad „(sobitatud)“); kui joonis peab olema õige mõõtmetega, vali standardne mõõtkava.

:::note
Mõõtkavad loetakse tegelikes ühikutes. Et 1:100 oleks õige, määra {{ui:Ühikud}} jaotises {{ui:Praegused sätted}} väärtuseks see, mis on üks joonise ühik. Ühikuteta joonist loetakse millimeetrites.
:::

## Printimisstiilide tabelid

Printimisstiilide tabel määrab, millisena prinditakse iga 255 standardsest joonise värvist, nii nagu värvist sõltuv printimisstiilide tabel (CTB) teeb teistes CAD-programmides. Kolm on sisseehitatud:

| Tabel | Prinditakse |
|---|---|
| {{ui:Värv (nagu joonistatud)}} | Iga objekt oma värvis. |
| {{ui:Monokroomne (must)}} | Kõik värvid mustad: joonistele tavaline valik. |
| {{ui:Hallskaala}} | Iga värv oma halltoonina, nii et värvid jäävad mustvalge printeri puhul eristatavaks. |

Oma tabeli tegemiseks, näiteks punased jooned paksud ja mustad, kõik muu peen:

1. Dialoogis {{ui:Prindi PDF-iks}} klõpsa {{ui:Muuda tabeleid…}} (või kirjuta {{cmd:PLOTSTYLES}}).
2. Klõpsa {{ui:Uus}} ja kirjuta väljale {{ui:Nimi}} nimi, näiteks `office`. Kui soovid alustada sisseehitatud tabelist, vali see väljal {{ui:Tabel}} ja klõpsa {{ui:Kopeeri}}.
3. Klõpsa ruudustikus värvi. {{key:Shift}}+klõps valib värvivahemiku, {{key:Mod}}+klõps lisab veel ühe ning {{ui:Vali kõik värvid}} võtab kõik.
4. Määra, millisena valitud värvid prinditakse:
   - {{ui:Printib}}: {{ui:Oma värviga}}, {{ui:Must}} või {{ui:Muu värv…}}.
   - {{ui:Hallina}}: värv oma halltoonina.
   - {{ui:Tint (%)}}: 100 on täis tint, 50 on pool valge suunas (rasterdamine), taustajoonte jaoks.
   - {{ui:Joonepaksus}}: {{ui:Oma joonepaksusega}} säilitab objekti või kihi joonepaksuse; väärtus prindib selle värvi kõik jooned selle laiusega.
   - {{ui:Joontüüp}}: prindi selle värvi kõik jooned teise joontüübiga (näiteks kõik punased katkendjooned); {{ui:Kasuta objekti joonetüüpi}} jätab need muutmata.
   - {{ui:Joone ots}} ja {{ui:Joone ühendus}}: otsad lõigatud, ruudukujulised või ümarad; nurgad viilnurk, faas või ümarad (ümarad nagu varem, kui midagi ei määra).
   - {{ui:Täitestiil}}: selle värvi tahke täide prinditakse tindi asemel viirutusjoonte kujul (horisontaalsed või vertikaalsed ribad, kaldjooned, ristviirutus, romb, ruudukujulised punktid), printerite ja plaanide jaoks, kus ühtlane tint on liiga raske.
   Tabelil endal on veel kaks sätet: {{ui:Joonepaksused}}, laiused, mida tabel tunneb (prinditud joon läheb lähimasse neist), ja {{ui:Joontüübi mõõtkava}}, tegur kõigile mitte-ISO joontüüpide kriipsudele.
5. Klõpsa {{ui:Valmis}}. Tabel jääb joonisesse alles ning leht (või mudel) prinditakse nüüd selle järgi. {{ui:Loobu}} tühistab muudatused.

Värv, millel on oma pliiats, näitab nurgas punkti ning allservas punkti, kui määrab joonepaksuse. Objekt, millel on tõeline värv (mitte üks 255-st), kasutab lähima standardvärvi pliiatsit.

Joonis säilitab oma tabelid ja iga lehe valiku, kui salvestad DWG-vormingus (2000 kuni 2018) või DXF-vormingus (R12 või 2000), ning avab need uuesti. Teised programmid näevad nime iga lehe lehekülje seadistuses (`office.ctb`), mitte tabelit ennast. Teisest programmist pärit joonis, mille lehekülje seadistuses on nimetatud tabel, näiteks `monochrome.ctb`, prinditakse selle nimega sisseehitatud tabeliga; mistahes muu nime korral ütleb dialoog, et joonisel seda pole, ja prindib joonise värvidega, kuni valid tabeli või loood selle nimega tabeli.

Tabeli kasutamiseks teises joonises klõpsa {{ui:Printimisstiilide tabelid}} all {{ui:Ekspordi}} (salvestab faili `office.plotstyle.json`) ja seejärel teises joonises {{ui:Impordi…}}. {{ui:Impordi…}} võtab vastu ka `.ctb`-faili teisest programmist: see loetakse vormingu avaldatud kirjeldusest ja **pole veel tegelike failidega üle kontrollitud**. Loetakse iga värvi värvus, rasterdamine ja joonepaksus; halltoonid, pliiatsinumbrid, joontüübid, joone otsad ja ühendused ning täitestiilid ei lähe üle ning nimega tabel (`.stb`) keeldutakse vastu võtmast. Võrdle esimest trükist oodatuga ja saada meile fail, kui see on vale.

## Printimine

**Brauseris** klõpsa {{ui:Prindi…}}. CadCraft loob PDF-i ja avab selle jaoks brauseri enda printimisdialoogi. Vali seal „Tegelik suurus“ või 100% (mitte „Sobita“), et mõõtkava säiliks. Kui brauser ei saa lehelt printida, avatakse PDF selle asemel uuel vahelehel: prindi see sealt {{key:Mod+P}} abil.

Võid klõpsata ka {{ui:Ava printimiseks}}: PDF avaneb uuel brauseri vahelehel ning printid selle sealt.

:::safari
Safari võib näidata PDF-i ja oodata, et kasutaksid **Fail**, seejärel **Prindi**.
:::

Kui brauser blokeerib uue vahelehe, laadib CadCraft selle asemel PDF-i alla ja teatab sellest ajaloos. Lubage saidil hüpikaknad, et järgmine kord avaneks see vahelehel.

**Programmis CadCraft Studio** loetleb {{ui:Prindi PDF-iks}} dialoog arvuti printerid. Vali {{ui:Printer}}, {{ui:Paber printeris}} ja {{ui:Koopiaid}} arv ning klõpsa {{ui:Prindi…}}. {{ui:Sama kui trükis}} valib printeri paberi, mis vastab lehe suurusele (A3 A3 lehe jaoks); kui printeril seda pole, kasutab ta oma paberit ning mahutab lehe sellele. Windowsis saadetakse leht 300 dpi pildina, sest Windows ei saa PDF-i printida ilma PDF-programmita; Linuxis ja macOS-is läheb PDF ise süsteemi printimisteenusele. Miski ei lahku arvutist.

## Pildi- ja SVG-failid

{{ui:Laadi alla PNG}} salvestab prinditud lehe pildina 300 dpi (alandatakse ainult siis, kui väga suur leht oleks suurem, kui brauser suudab teha; ajalugu ütleb seda). {{ui:Laadi alla SVG}} salvestab selle skaleeritava joonisena millimeetrites, koos trüki joonte ja tekstiga. Mõlemad tulevad samast trükist mis PDF, sama printimisstiili, joonepaksuse ja alaga. Joonisesse paigutatud pildid on ainult PDF-is; ajalugu ütleb, mitu jäeti välja.

## Pildid

Pildid prinditakse oma eraldusvõimes, joonte all. Dialoogi {{ui:Pildid}} piirab need 600, 300 või 150 dpi peale väiksema faili jaoks. Jooned, tekst ja viirutused jäävad alati teravaks (vektor) ning läbipaistvus jääb läbipaistvaks. Vt [Pildid joonisel](topic:pictures).

## Meeldejäävad sätted

Dialoog mäletab selles brauseris sinu viimast paberit, suunda, mõõtkava ja joonepaksust. Printimisstiilide tabel jääb joonisesse iga lehe juurde; kui tabelit pole valitud, algab leht viimati valitud tabeliga. Valitud aken säilib, kuni lehe uuesti laadid; pärast seda algab dialoog valikuga {{ui:Kõik (ulatus)}}.

## Levinud vead

- **PDF on tühi või nupud on hallid.** Pole midagi printida (tühi mudel) või on valitud {{ui:Aken…}} ja akent pole veel valitud („Vali printimiseks aken.“).
- **PDF-is kuvatakse tekst „?“.** Poola, tšehhi, kirillitsa, kreeka ja muude Euroopa kirjutussüsteemide tekst prinditakse nagu see on: PDF sisaldab vajalikke tähti (fondist Liberation Sans, millel on Helvetica laiused) ning teksti saab ka valida ja otsida. Hiina, jaapani ja korea tekst prinditakse samuti nagu see on: kui joonisel seda on, toob trükk alla suurema fondi (umbes 10 MB, ainult üks kord) ja PDF sisaldab ainult kasutatud märke, seega on esimesel korral vaja ühendust (see ei kehti enne salvestatud võrguta koopiale). Heebrea tekst prinditakse samast manustatud fondist mis ladina tekst ning araabia, pärsia ja urdu tekst toob trükkimisel alla veel ühe fondi (alla 1 MB, ainult üks kord); paremalt vasakule kirjutatud read paigutatakse ja nende tähed ühendatakse (vt [Tekst](topic:text)). Harvad ideogrammid väljaspool neid fonte ning keeled, mis vajavad keerulist kujundamist, nagu hindi, prinditakse „?“-ina ning ajalugu loeb need kokku.
- **Kõik jooned on ühesuurused.** Nende joonepaksus on vaikeväärtus: anna kihtidele või objektidele paremas paneelis {{ui:Joonepaksus}} (vt [Joonepaksused ja joontüübid](topic:units-papers-scales#line-weights-and-linetypes)) või määra joonepaksused värvide kaupa [printimisstiilide tabelis](topic:plot-pdf#plot-style-tables).
- **Printimisstiili kõrval „(seda joonisel pole)“.** Joonis pärineb teisest programmist ning nimetab tabelit, mida see ei sisalda. Vali üks tabelitest või loo sellenimeline tabel.
- **Abijooned prinditi.** Määra nende kiht mitte printima: klõpsa selle printeri nuppu paneelis {{ui:Kihid}}.
- **Väljatrükk on vales suuruses.** Printer muutis mõõtkava. Prindi tegelikus suuruses.
- **{{key:Mod+P}} avas brauseri printimisdialoogi.** Kursor oli paremas paneelis väljas või oli avatud muu dialoog. Väljumiseks vajuta {{key:Enter}} või {{key:Esc}}, seejärel proovi uuesti või klõpsa {{ui:Trüki}}.
- **{{key:Mod+P}} ei teinud midagi.** Käsk töötab. Vajuta kõigepealt {{key:Esc}}.
