---
title: Käskude viide
summary: Iga käsk CadCraft joonistusrakenduses koos lühinimede, küsimuste, valikute ja vaikeväärtustega.
keywords: käsud, lühinimed, aliased, käskude loend, pindala, ümbermõõt, measuregeom, joon, pline, ring, kaar, lõika, nihe, dimlinear, plokk, insert, paigutus, prindi, zoom, abi, copyclip, cutclip, pasteclip, pasteorig, copybase, dubleeri, selectall
from: 7db2646b
---

Sisesta käsu nimi või lühinimi ja vajuta {{key:Enter}} või {{key:Space}}. Suurtähed ja väiketähed on samaväärsed; esimene `_`, `-`, `.` või `'` ignoreeritakse. Käsurea ajaloos kõigi käskude lühikese loendi väljastamiseks sisesta `HELP` (või `?`); selle abi avamiseks vajuta {{key:F1}}.

Kuidas viipasid lugeda: valikud on nurksulgudes ja valid neist, sisestades nende suurtähed (`D` läbimõõdu jaoks). Vaikeväärtus on noolsulgudes; selle kinnitamiseks vajuta {{key:Enter}}. Kus küsitakse punkti, saad klõpsata või sisestada ükskõik millises vormingus, mis on toodud jaotises [Koordinaatide ja kauguste sisestamine](topic:coordinate-entry). Kus küsitakse kaugust, saad sisestada arvu või klõpsata kaks punkti.

Kui punkt või objekt on nõutud ja vaikeväärtust pole, vajutades {{key:Enter}}, käsk lõpeb. {{key:Esc}} tühistab käsu. Mida käsk iganes tegi, on üks tagasivõtmise samm.

## Joonistamine

### LINE

Lühinimed: `L`. Sirgelõigud, igaüks oma objektina.

- `Määra esimene punkt` (Enter: alusta viimasest antud punktist)
- `Määra järgmine punkt [Võta tagasi]`, korduv. Pärast kahte lõiku: `[Võta tagasi/Sulge]`.
- `U` võtab viimase lõigu tagasi, `C` sulgeb esimese punktini ja lõpetab. Enter lõpetab.

### PLINE

Lühinimed: `PL`. Murdjoon sirge- ja kaarelõikudest.

- `Määra alguspunkt`
- `Määra järgmine punkt [Kaar/Sulge/Võta tagasi]` (Sulge, kui on kaks lõiku)
- `A` lülitab kaartele: `Määra kaare lõpp-punkt [Joon/Sulge/Võta tagasi]`. Iga kaar jätkub puutujana eelmisele lõigule. `L` läheb tagasi joontele, `CL` sulgeb kaarega.
- Enter lõpetab; murdjoon jääb avatuks.

### CIRCLE

Lühinimed: `C`.

- `Määra ringi keskpunkt [3P/2P/Ttr (puutuja puutuja raadius)]`
- `Määra ringi raadius [Läbimõõt] <viimane raadius>`; `D` küsib `Määra ringi läbimõõt`.
- `2P`: läbimõõdu kaks otsa. `3P`: kolm punkti ringil.
- `T` (ka käsk `TTR` ja {{ui:Joonista}} › {{ui:Veel}} › {{ui:Ring: puutuja, puutuja, raadius}}): `Määra esimese puutuja punkt objektil`, teine, seejärel raadius (Enter: viimane). Ring puudutab mõlemat objekti (jooni, kaari, ringe, murdjoone lõike, ka plokkide sees); nendest ringidest, mis seda teevad, see, mis puudutab kõige lähemal sinu valitud kohti. „Ring ei eksisteeri”, kui ükski ei sobi.
- `TTT` (või {{ui:Joonista}} › {{ui:Veel}} › {{ui:Ring: puutuja, puutuja, puutuja}}): kolm objekti; ring, mis puudutab kõiki kolme, lähim sinu valitud kohtadele (kolm joont annavad sisemise või välimise ringi, sõltuvalt sellest, kuhu klõpsad).

### ARC

Lühinimed: `A`.

- `Määra kaare alguspunkt [Keskpunkt]`, `Määra kaare teine punkt`, `Määra kaare lõpp-punkt`: kaar läbi kolme punkti.
- `C`: `Määra kaare keskpunkt`, `Määra kaare alguspunkt`, `Määra kaare lõpp-punkt`. Kaar kulgeb vastupäeva alguspunktist lõpp-punkti.

### RECTANG

Lühinimed: `REC`, `RECTANGLE`. Suletud murdjoon.

- `Määra esimene nurgapunkt`, `Määra teine nurgapunkt`. Teise nurga jaoks sisesta `@laius,kõrgus`.

### POLYGON

Lühinimed: `POL`. Korrapärane hulknurk suletud murdjoonena.

- `Sisesta külgede arv <4>` (3 kuni 1024)
- `Määra hulknurga keskpunkt`
- `Sisesta valik [Ringi sisse kirjutatud/Ringi ümber kirjutatud] <I>`
- `Määra ringi raadius`: klõpsa või sisesta punkt; selle kaugus määrab suuruse ja suund pöörab hulknurka.

### ELLIPSE

Lühinimed: `EL`.

- `Määra ellipsi telje otspunkt [Keskpunkt]`, `Määra telje teine otspunkt`, `Määra kaugus teisele teljele`
- `C`: `Määra ellipsi keskpunkt`, `Määra telje otspunkt`, seejärel kaugus teisele teljele.
- `I` (`Isoring`, ainult kui {{cmd:ISODRAFT}} on sisse lülitatud): keskpunkt, seejärel raadius või `Läbimõõt`: ellips, mida ring näitab praegusel isomeetrilisel tasandil.

### HATCH

Lühinimed: `H`, `BH`, `BHATCH`; või {{ui:Viirutus}} tööriistaribal. Prindib kõigepealt praeguse mustri, mõõtkava ja nurga.

- `Vali sisepunkt [Vali objektid/Muster/SCale/Nurk]`, korduv (`Võta tagasi`, kui on juba ala): iga klõps lisab selle ümber oleva suletud ala, kus sees olevad suletud kujundid on saared. Enter teeb neist ühe viirutuse.
- `S`: `Vali suletud objektid` (suletud murdjooned, ringid, suletud ellipsid).
- `P`: `Sisesta mustri nimi, SOLID või ? loendi jaoks <praegune>`. `SC`: `Määra mustri mõõtkava`. `A`: `Määra mustri nurk`.
- `G` (Gradient): täide on gradient, mitte muster. Vt {{cmd:GRADIENT}} selle küsimuste kohta.

Vt [Viirutus ja täidetavad alad](topic:hatch).

### GRADIENT

Lühinimed: `GD`. Täidab ala ühe või kahe värvi gradiendiga. Küsib kõigepealt gradienti, siis jätkub nagu {{cmd:HATCH}} (`Vali sisepunkt`, `S` suletud objektide jaoks, {{key:Enter}} lõpetamiseks).

- `Sisesta gradiendi valik [Tüüp/Üks värv/Kaks värvi/Nurk/Keskendatud/eXit] <X>`, korduv; iga kord prindib gradiendi sellisena, nagu see praegu on.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` või üks neist pööratult (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Esimesed tähed piisavad.
- `O`: üks värv, seejärel selle toon 0 kuni 1 (0 tumendab mustaks, 0,5 on värv ise, 1 heleneb valgeks). `TW`: esimene ja teine värv. Värv on number 1 kuni 255, kolm arvu nagu `255,128,0` või `#rrggbb`.
- `A`: nurk, mille all gradient kulgeb. `C`: keskendatud Jah või Ei (Ei nihutab gradiendi keskosa ühele poolele).
- See keeldub tundmatust värvist või tüübist ja toonist väljaspool 0 kuni 1.

{{cmd:HATCHEDIT}} `G` ja Omadused (Gradient) muudavad gradienti hiljem või muudavad mis tahes viirutuse gradiendiks. Gradient joonistatakse ekraanile ja prinditakse. DWG 2004 ja hilisemad hoiavad seda tõelise gradientviirutusena; DXF 2000 ja DWG 2000 hoiavad seda CadCraftile; teised programmid näevad tahket täidet esimese värviga.

### HATCHGENERATEBOUNDARY

Lühinimed: `HGB`. Teeb piirjoone uuesti viirutusest, mis selle kaotas. `Vali viirutused` (või vali need enne), siis `Seo iga viirutus selle uue piirjoonega, et viirutus seda järgiks? [Jah/Ei] <Jah>`.

- Iga viirutuse silmus muutub suletud murdjooneks viirutuse kihil; uued murdjooned jäävad valituks. Kumer serv tuleb tagasi lühikeste sirgete lõikudena, mida viirutus hoiab.
- Jah korral viirutus järgib oma uut piirjoont, nagu {{cmd:HATCH}}-iga tehtud viirutus. Üks tagasivõtmise samm.
- Kui viirutust ei valitud, teatatakse sellest.

### POINT

Lühinimed: `PO`; või {{ui:Joonista}} › {{ui:Veel}} › {{ui:Punkt}}. Punktiobjektid, üks iga klõpsu kohta, kuni Enter.

- `Määra punkt`

### XLINE

Lühinimed: `XL`; või {{ui:Joonista}} › {{ui:Veel}} › {{ui:Konstruktsioonijoon}}. Konstruktsioonijooned, lõputud mõlemas suunas. Vt [Konstruktsioonijooned ja kiired](topic:construction-lines).

- `Määra punkt [Hor/Ver/Ang/Bisect/Offset]`, seejärel `Määra läbiv punkt` iga joone kohta, kuni Enter.
- `A`: `Sisesta konstruktsioonijoone nurk [Viide] <0>`; `R` küsib kõigepealt `Vali joone objekt`.
- `B`: `Määra nurga tipp`, `Määra nurga alguspunkt`, seejärel `Määra nurga lõpp-punkt` iga joone kohta.
- `O`: `Määra nihke kaugus [Läbi] <Läbi>`, seejärel iga joone kohta `Vali joone objekt` ja `Määra nihke pool` (või `Määra läbiv punkt`).

### RAY

Ilma lühinimedeta; või {{ui:Joonista}} › {{ui:Veel}} › {{ui:Kiir}}. `Määra alguspunkt`, seejärel `Määra läbiv punkt` iga kiire kohta, kuni Enter.

### TEXT

Lühinimed: `DT`, `DTEXT`; või {{ui:Tekst}} tööriistaribal. Üherealine tekst; iga rida on oma objekt.

- `Määra teksti alguspunkt [Joondus]`
- `J`: `Sisesta valik [Vasak/Keskel/Parem/Keskmine/TL/MC] <L>`, seejärel `Määra teksti sisestuspunkt`
- `Määra kõrgus <praegune teksti kõrgus>`
- `Määra teksti pöördenurk <0>`
- `Sisesta tekst`, korduv: iga Enter alustab järgmist rida allpool. Tühjal real Enter lõpetab. {{key:Space}} sisestab siin tühiku.

### DIVIDE

Lühinimed: `DIV`. {{cmd:DIVIDE}} paneb joonele, kaarele, ringile, murdjoonele, splainile või ellipsile märgid, mis lõikavad selle võrdseteks osadeks. Vali objekt, seejärel anna osade arv (2 kuni 32767). Avatud objektil on üks märk vähem kui osi; suletud objektil on märk ka selle algusel. Objekt ise ei lõigata. Märgid on punktid; `Plokk` küsib selle asemel selle joonise plokki ja seda, kas see pöördub objekti järgi. Pikkused mööda splaine ja ellipse mõõdetakse lühikeste kõõlude järgi. See keeldub tekstist, viirutustest ja muudest objektidest, millel pikkust pole.

### MEASURE

Lühinimed: `ME`. {{cmd:MEASURE}} paneb märgi iga antud pikkuse järel mööda joont, kaart, ringi, murdjoont, splaini või ellipsi, lugedes sellest otsast, mis on sinu valiku lähim (suletud objekt: selle algusest). Anna pikkus sisestades selle või kahe punktiga. Avatud objekti kaugem ots märki ei saa. `Plokk` paneb iga märgi juurde ploki punkti asemel. See keeldub pikkusest 0, pikkusest, mis on pikem kui objekt, ja pikkusest, mis teeks üle 32767 märgi.

### BOUNDARY

Lühinimed: `BO`, `BPOLY`. {{cmd:BOUNDARY}} teeb suletud murdjoone selle ala ümber, mis sisaldab sinu valitud punkti, mistahes joonte, kaarte, ringide, murdjoonte ja kõverate järgi, mis seda ekraanil piiravad. Osad, mis asuvad kaarel või ringil, tulevad tagasi kaarelõikudena; ellipsite ja splainide osad tulevad tagasi lühikeste sirgete lõikudena. Kui `Saared` on sees (algseade), saab iga suletud ala selle sees oma murdjoone. Klõpsa edasi punkte; Enter lõpetab. Objektid, mis ala piiravad, jäävad nagu on. Kui ükski suletud ala punkti ei sisalda, teatatakse sellest.

### BLEND

{{cmd:BLEND}} joonistab spline'i kahe avatud kõvera otste vahele. Klõpsa iga kõverat ühendamiseks otsa lähedal. `CONtinuity` valib `Tangent` (spline lahkub ja saabub mõlema kõvera järgi) või `Smooth` (see kõverdub ka nii, nagu need otstes kõverduvad); valik jääb seansiks. Kaks kõverat ei muutu. See keeldub suletud objektidest ja kahest otsast, mis juba kohtuvad.

### REGION

Lühinimed: `REG`. {{cmd:REGION}} muudab suletud objektid piirkondadeks: lamedateks aladeks, mida saab ühendada, lõigata ja mõõta. Vali ringid, suletud murdjooned, suletud ellipsid või suletud splainid või jooned, kaared ja avatud murdjooned, mis sulguvad ots-otsaga silmuseks; iga silmus muutub üheks piirkonnaks ja asendab objektid, millest ta tuli. Kaared jäävad kaarteks; ellipsid ja splainid muutuvad lühikesteks sirgeteks lõikudeks. See, mis ei ole suletud ega moodusta silmust, jääb nagu on, ja teatatakse, mitu. Joonisel on piirkond üks või mitu suletud murdjoont, mis on hoitud kokku nimeta rühmana, nii et klõps valib kogu piirkonna ja koopia on oma piirkond; teised programmid, mis faili avavad, näevad suletud murdjooni.

Kui joonisel on piirkondi, töötavad {{cmd:UNION}}, {{cmd:SUBTRACT}} ja {{cmd:INTERSECT}} 2D-sakil piirkondadel: `UNION` ühendab valitud piirkonnad üheks (piirkonnad, mis on lahus, saavad üheks piirkonnaks mitme kontuuriga), `SUBTRACT` küsib piirkonnad, millest lahutada, ja seejärel need, mis eemaldada (auk jääb piirkonna osaks), `INTERSECT` jätab alles ala, mis neil kõigil on ühine. Iga teatab tulemuse ala ja on üks tagasivõtmise samm. Need keelduvad, kui midagi ei jääks või midagi ühist ei oleks. 3D-sakil ja joonisel, kus piirkondi pole, töötavad samad käsud nagu varem tahkistel.

## Muutmine

Lühinimed: `MT`, `T`; või {{ui:Lõik}} tööriistaribal. Lõiketekst, mis murdub laiusel, kirjutatuna kohapeal.

- `Määra esimene nurk`
- `Määra vastasnurk [Kõrgus/Joondus/Reavahe/Pööre/Laius]`: laius üle kahe nurga on koht, kus tekst murdub. `H` küsib `Määra kõrgus`, `J` `Sisesta joondus [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Sisesta reavahe tegur (0,25 kuni 4)`, `R` `Määra pöördenurk`, `W` `Määra laius (0 murdmiseks ei ole)` ja jätab teise nurga vahele.
- Seejärel avaneb joonisele kast: kirjuta, {{key:Enter}} uue lõigu jaoks, {{key:Mod+Enter}} või klõps väljaspool lõpetab, {{key:Esc}} tühistab. Selle riba seab kõrguse, reavahe, laiuse ja joonduse. Vt [Teksti ja sildi lisamine](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Lühinimed: `ED`, `DDEDIT`; või topeltklõps tekstil. `Vali tekst muutmiseks`, korduv, kuni {{key:Enter}}: iga avab samas kastis. Valitud või topeltklõpsatud tekstilt alustades muudab see ainult seda ja lõpetab.

### ERASE

Lühinimed: `E`, `DELETE`; või vajuta {{key:Delete}}, kui objektid on valitud.

- `Vali objektid` (vahele jäetakse, kui objektid on juba valitud)

### MOVE

Lühinimed: `M`.

- `Vali objektid`
- `Määra baaspunkt [Nihe]`, `Määra teine punkt`
- `D`: `Määra nihe`, sisestatud kujul `dx,dy`.

### COPY

Lühinimed: `CO`, `CP`. Koopiad nii mitu korda, kui annad punkte.

`Massiiv` teise punkti viibal teeb ühe korraga rea: anna elementide arv (algne loetakse üheks), seejärel punkt, kuhu esimene koopia läheb; teised järgivad sama sammuga. `Sobita` muudab selle punkti viimase koopia kohaks, teised laotakse ühtlaselt vahele.

- `Vali objektid`
- `Määra baaspunkt [Nihe]`
- `Määra teine punkt [Võta tagasi]`, korduv kuni Enter. `U` võtab viimase koopia tagasi.

### ROTATE

Lühinimed: `RO`.

- `Vali objektid`, `Määra baaspunkt`
- `Määra pöördenurk <viimane nurk>`: kraadides, vastupäeva positiivne; või klõpsa punkt, et pöörata selle poole.

### SCALE

Lühinimed: `SC`.

- `Vali objektid`, `Määra baaspunkt`
- `Määra mõõtkava tegur`: sisesta tegur nagu `0.5` või `2`. Klõpsatud punkt annab oma kauguse baaspunktist teguriks.

### MIRROR

Lühinimed: `MI`.

- `Vali objektid`
- `Määra peegelduse joone esimene punkt`, `Määra peegelduse joone teine punkt`
- `Kas kustutada lähteobjektid? [Jah/Ei] <N>`

### ALIGN

Lühinimed: `AL`; või {{ui:Muuda}} › {{ui:Veel}} › {{ui:Joonda}}.

- `Vali objektid`
- `Määra esimene lähtepunkt`, `Määra esimene sihtpunkt`
- `Määra teine lähtepunkt (Enter jätkamiseks)`, `Määra teine sihtpunkt`
- `Määra kolmas lähtepunkt (Enter jätkamiseks)`, `Määra kolmas sihtpunkt`
- Kahe paari korral: `Kas skaleerida objektid joondamispunktide järgi? [Jah/Ei] <N>`

Vt [Objektide joondamine](topic:modify-objects#align-objects).

### ALIGNTO

- `Vali objektid` (või valik), `Joonda [Vasak/Keskel/Parem/Ülal/Keskmine/Alla] <Vasak>`, `Kuhu [Valik/Esimene/Viimane/Punkt] <Valik>`; `P` küsib punkti. Valik jääb alles.

### DISTRIBUTE

- `Vali objektid` (vähemalt kolm), `Jaota [Horisontaalselt/Vertikaalselt] <Horisontaalselt>`, `Paiguta ühtlaselt [Keskpunktid/Vahed] <Vahed>`. Kaks välimist jäävad paigale; valik jääb alles.

### ALIGNPANEL

Lühinimed: `ALP`; või {{ui:Muuda}} › {{ui:Veel}} › {{ui:Joonda ja jaota}}. Avab paneeli, mis käivitab ALIGNTO ja DISTRIBUTE klõpsudega.

### LASER

Lühinimed: `LASERCUT`; või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Laser…}}. Avab laseripaneeli joonise kohal: mida iga kiht teeb (lõika, joonista, graveeri, täida, pilt), eelvaade, salvestatav GRBL G-kood ning raamimine ja saatmine Web Serial kaudu. Vt [Joonise saatmine laserile](topic:laser-cutting).

### STRETCH

Lühinimed: `S`; või {{ui:Venita}}. `Vali venitatavad objektid`: lohista ristuvaid aknaid (või sisesta `C`) üle otste, et liigutada. `Määra baaspunkt [Nihe]`, `Määra teine punkt`. Aknade sees olevad punktid liiguvad: joone otsad, murdjoone tipud (kaarelõigud säilitavad oma kõrguse), mõõtmepunktid; ringid, ellipsid, tekst, punktid ja plokid liiguvad tervikuna, kui nende keskpunkt või sisestuspunkt on seestpoolt. Enne käsku tehtud valik säilitab ristuvad aknad (ja lassod), mis selle tegid, nii et need venivad samamoodi. Ilma aknata liiguvad objektid tervikuna.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Lühinimed: `AR`; või {{ui:Massiiv}}. `Vali objektid`, seejärel `Sisesta massiivi tüüp [Ristkülik/POlaar] <Ristkülik>` (ainult ARRAY).

- Ristkülik algab 4 veeru × 3 rea juurest, vahega 1,5 korda objektide suurus, eelvaatena. `Sisesta valik [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` küsib veerud ja read, `S` veergude ja ridade vahelised kaugused (negatiivne läheb vasakule või alla), `COL` ja `R` iga suuna eraldi.
- Polaar küsib `Määra massiivi keskpunkt`, algab 6 elemendiga ringi peale, pööratud. `Sisesta valik [Elemendid/Täitenurk/Pöörata elemente/eXit] <X>`: `I` elemendid, `F` täitmise nurk (+ vastupäeva, − päripäeva), `ROT` Jah või Ei.
- {{key:Enter}} (eXit) teeb koopiad, tavaliste objektidena. Üks tagasivõtmise samm.
- `AS` (ASsociative) lülitab tavaliste koopiate ja massiivi vahel, mis jääb muudetavaks: üks objekt, mida hiljem muudad {{cmd:ARRAYEDIT}}-iga, haarangutega või Omadustes. Valik jääb meelde ({{cmd:ARRAYASSOCIATIVITY}}); algab tavaliste koopiatega.

### ARRAYPATH

Koopiad mööda kõverat. `Vali objektid`, seejärel `Vali raja kõver`: joon, kaar, ring, ellips, murdjoon või splain (mitte üks objektidest, mida massiivistatakse). Rada algab sellest otsast, mis on objektidele lähemal, ja esimene element on objektid seal, kus nad on.

- `Sisesta valik [Meetod/Elemendid/SPacing/ALign/ASsociative/eXit] <X>`, koos eelvaatega. `M`: `Divide` jaotab elemendid ühtlaselt kogu raja peale, `Measure` paneb ühe iga nii kaugele. `I`: elementide arv (Measure korral tähendab 0 nii palju, kui mahub; arv raja lõppu ületamas piiratakse sellega, mis mahub). `SP`: vahe elementide vahel mööda rada (lülitab Measure'i sisse). `AL`: Jah pöörab iga elementi raja järgi, Ei hoiab need püsti.
- `AS` nagu {{cmd:ARRAY}} juures. Kui see on sees, hoiab massiiv endale koopia raja kujust: raja kõvera muutmine hiljem ei nihuta elemente.
- See keeldub rajast, mis ei ole kõver, ja ühest elemendist.

### ARRAYEDIT

Muudab massiivi, mis on tehtud valikuga ASsociative. `Vali massiiv` (või vali see enne). See prindib, milline massiiv praegu on, ja küsib kuni {{key:Enter}}:

- Ristkülik: `COL` veerud ja nende vahe, `R` read ja nende vahe, `A` nurk, mille all veerud kulgevad.
- Polaar: `I` elemendid, `F` täitenurk, `ROT` pööra elemente Jah või Ei.
- Rada: `M` Divide või Measure, `I` elemendid, `SP` vahe, `AL` joonda rajaga.
- `S` (Source) avab objektid, mida massiiv kordab, eraldi, nagu plokiredaktor. Joonista ja muuda seal; {{cmd:ARRAYCLOSE}} salvestab või loobub, ja iga element järgib.
- `REP` (REPlace): `Vali asendusobjektid`, `Määra asendusobjektide baaspunkt`, seejärel klõpsa asendatavaid elemente ja {{key:Enter}}. Need elemendid näitavad nüüd asendust; asendusobjektid lahkuvad joonisest ja elavad massiivis. `RES` (RESet) näitab taas lähteobjekte igas elemendis.
- Iga muudatus on üks tagasivõtmise samm. See keeldub tavalistest koopiatest, lihtsast plokiviitest ja massiivist lukustatud kihil.

Samad arvud on Omadustes rubriigis Massiiv, ja massiivil on haarangud: selle baaspunkt liigutab seda, haarang teisel elemendil seab vahe, haarang viimasest elemendist kaugemal seab arvu (polaar: teine element määrab, mitu elementi, viimane element täitenurga). {{cmd:EXPLODE}} muudab massiivi tagasi tavalisteks koopiateks.

### ARRAYCLOSE

Lõpetab {{cmd:ARRAYEDIT}} Source'i: `Kas salvestada muudatused massiivi lähteobjektides? [Salvesta/Loobu] <Salvesta>`. Teatatakse, kui ühtegi massiivi lähteobjekti pole avatud. {{cmd:BCLOSE}} teeb sama.

### ARRAYASSOCIATIVITY

`Sisesta uus väärtus ARRAYASSOCIATIVITY jaoks (1 = massiivid jäävad muudetavaks, 0 = tavalised koopiad)`. Määrab, millega {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ja {{cmd:ARRAYPATH}} alustavad; nende valik `AS` muudab sama seadistust. Jääb selles brauseris meelde.

### OFFSET

Lühinimed: `O`. Jooned, kaared, ringid ja murdjooned.

Kui murdjoon nihkub välja ja selle sirged lõigud nurgas lahknevad, otsustab {{cmd:OFFSETGAPTYPE}}, kuidas vahe suletakse.

- `Määra nihke kaugus [Läbi] <viimane kaugus või Läbi>`
- `Vali nihutatav objekt`, seejärel `Määra nihutatava külje punkt` (või, Läbi korral, `Määra läbiv punkt`), korduv kuni Enter.

### OFFSETGAPTYPE

- `Nurga vahede nihe: 0 pikenda, 1 ümarda, 2 faas`: kuidas {{cmd:OFFSET}} sulgeb murdjoone välisnurkade vahed. `0` pikendab lõike, kuni need kohtuvad (algseade), `1` ühendab need nurga ümber oleva kaarega, `2` sirge lõikega. Sisemised nurgad ja kaarelõigud ei muutu. Jääb selleks seansiks.

### EXTRIM

{{cmd:EXTRIM}} lõikab kõik ühel pool serva. Vali lõikeserv (joon, kaar, ring, murdjoon, ellips, spline või konstruktsioonijoon), seejärel punkt pool, mida puhastada: iga joon, kaar, ring, murdjoon ja konstruktsioonijoon, mis serva ristub, kaotab oma osa sellel pool, kus see serva juures algab. Kui valid poolt, liiguvad lõigud, mis kaoksid, osutiga kaasa. Suletud serva korral on pooled sees ja väljas. Objektid, mis serva ainult puudutavad, ja tekst, viirutused, splainid ja ellipsid, mis seda ristuvad, jäävad nagu on. Üks tagasivõtmise samm.

### TRIMEXTENDMODE

- `Sisesta uus väärtus TRIMEXTENDMODE jaoks (1 Kiire, 0 Standard)`: kuidas {{cmd:TRIM}} ja {{cmd:EXTEND}} alustavad. `1` Kiire: iga objekt on lõikeserv või piir. `0` Standard: nad küsivad kõigepealt servi. Samuti `(setvar "TRIMEXTENDMODE" 0)` LISP-is.

### TRIM

Lühinimed: `TR`. Prindib kõigepealt `Praegused sätted: Kiire režiim (TRIMEXTENDMODE 1), servad: ei pikenda, lohistamine joonistab tee`. Kiires režiimis on iga nähtav objekt lõikeserv ja objekt, mida miski ei ristu, kustutatakse; Standardrežiimis küsib see kõigepealt `Vali lõikeservad (Enter = iga objekt)` ja lõikab ainult neil.

- `Vali lõigatav objekt või pikendamiseks Shift-vali [lõikeservad/Piire/Ristuv/mOde/Edge/eRase/Undo]`, korduv: klõpsa eemaldatav tükk (see muutub halliks ja katkendlikuks, kui osuti sellel püsib), lohista tee läbi mitme tüki (kõik lähevad ühe sammuga), või klõpsa kaks tühja kohta piirdeks nende vahel. {{key:Shift}} pikendab selle asemel. `T` valib lõikeservad (Standardrežiim), `F` küsib piirdepunkte, `C` kaks aknanurka (osaliselt sees olevad tükid lähevad), `O` küsib `Sisesta lõikamisrežiimi valik [Kiire/Standard]`, `E` küsib `Sisesta kaudse serva pikenduse režiim [Pikenda/Ei pikenda]` (EDGEMODE), `R` kustutab valitud objektid, `U` võtab tagasi viimase valiku või lohistuse. Enter lõpetab. Vt [Lõikamine ja pikendamine](topic:trim-and-extend).

- Klõps viirutusel lõikab viirutuse: lõikeservad jagavad viirutatud ala ja klõpsatud tükk võetakse ära (joonistatud piirjoont ei jää sinna, kus see oli). Viirutus säilitab oma mustri või gradiendi; viirutus, mis oli piirjoonega seotud, pärast seda enam ei ole, sest ta ei täida seda enam. Teatatakse, kui ükski lõikeserv seal viirutust ei jaga, kui klõps on viirutusest väljas ja kui midagi ei jääks (kasuta {{cmd:ERASE}}). Lohistatud tee või piire ei lõika viirutusi.

### EXTEND

Lühinimed: `EX`. Sama mis TRIM vastupidi: `Vali pikendatav objekt või lõikamiseks Shift-vali [Piirservad/Piire/Ristuv/mOde/Edge/Undo]`. Klõps pikendab lähimat otsa järgmise piirini; lohistatud tee või piire pikendab kõiki objekte, mida see ristub; {{key:Shift}} lõikab. `B` valib piirservad (Standardrežiim). Režiim ja Serv on TRIM-iga ühised.

### LINKVIEWS

Lühinimed: `SYNCVIEWS`; või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Seo paanide vaated}}, või lingiikoon joonise vahelehtedel. `Seo paanide vaated [ON/OFF]` (Enter võtab teise oleku): kui see on sees, liigutab või suumib aktiivne paan igat paani, mis näitab sama liiki ruumi. Vt [Ekraani jagamine](topic:split-screen).

### OPENIN3D

Ilma lühinimedeta; või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Ava rakenduses ModelCraft}}, kus 3D-modelleerimisrakendus võtab vastu üleantud joonise. Avab selle seal uuel vahelehel, DWG-na (midagi ei laadita üles). Kui brauser vahelehe blokeerib, teatatakse sellest.

### LASSOMODE

`Sisesta uus väärtus LASSOMODE jaoks (1 = lasso, 0 = ristkülik)`: mida tühjal kohal vajutamine ja lohistamine joonistab. Sama mis Sätted › CadCraft › Lohistades valimiseks. Vt [Lasso-valik](topic:lasso-selection).

### FILLET

Lühinimed: `F`. Jooned, kaared, ringid ja murdjooned. Prindib kõigepealt `Praegused sätted: Režiim = TRIM, Raadius = 0`.

- `Vali esimene objekt [Võta tagasi/Murdjoon/Raadius/Lõika/Mitu]`
  - `R` küsib `Määra ümardusraadius <viimane>`. `T` küsib `Sisesta lõikamisrežiimi valik [Lõika/Ei lõika]`: kui Ei lõika, jäävad objektid nagu on ja lisatakse ainult kaar.
  - `M` hoiab käsu käimas rohkemate nurkade jaoks kuni {{key:Enter}}; `U` võtab viimase nurga tagasi, jättes käsu pooleli.
  - `P` küsib `Vali 2D-murdjoon [Raadius]` ja ümardab iga nurga, kus kaks sirget lõiku kohtuvad. Juba olevad ümardused asendatakse uue raadiusega; raadius 0 eemaldab need. Nurgad, mille küljed on raadiuse jaoks liiga lühikesed, jäetakse ja loetakse.
- `Vali teine objekt või Shift-vali nurga rakendamiseks [Raadius]`. Hoia {{key:Shift}} all klõpsates teravnurga jaoks, sõltumata raadiusest.

Klõpsa iga objekti sellel osal, mida tahad alles hoida. Kaks joont, mis ei kohtu, pikendatakse. Kaks paralleelset joont saavad pooltsirkli üle vahe, esimese joone otsas, mis on sinu klõpsule lähim. Ringi ei lõigata kunagi. Kaks kõrvuti asetsevat lõiku ühest murdjoonest saavad kaare murdjoone sees; murdjoon ja teine objekt töötavad, kui lõige jääb murdjoone esimesele või viimasele lõigule.

### CHAMFER

Lühinimed: `CHA`. Jooned ja murdjoonte sirged lõigud. Prindib kõigepealt praegused kaugused (või pikkuse ja nurga).

- `Vali esimene joon [Võta tagasi/Murdjoon/Kaugus/Nurk/Lõika/mEthod/Mitu]`
  - `D` küsib `Määra esimene faasi kaugus <viimane>` ja `Määra teine faasi kaugus <esimene>`: esimene lõigatakse esimeselt joonelt, mille valid, teine teiselt.
  - `A` küsib `Määra faasi pikkus esimesel real` ja `Määra faasi nurk esimesest reast`.
  - `E` (mEthod) valib, kumba kahest järgmine faas kasutab. `T`, `M`, `U` ja `P` töötavad nagu {{cmd:FILLET}} juures.
- `Vali teine joon või Shift-vali nurga rakendamiseks [Kaugus/Nurk/mEthod]`. {{key:Shift}}+klõps teeb teravnurga.

Kaugus, mis on pikem kui joon, lükatakse tagasi (`Kaugus on liiga suur.`).

### BREAK ja BREAKATPOINT

Lühinimed: `BR`. `Vali objekt` (kuhu klõpsad, on esimene punkt), `Määra teine murdepunkt [Esimene punkt]`; `F` küsib `Määra esimene murdepunkt` ja `Määra teine murdepunkt`. Vahepealne osa kaob; ringil vastupäeva esimesest punktist. BREAKATPOINT küsib `Määra murdepunkt` ja jagab objekti selles punktis kaheks (mitte ringil).

### LENGTHEN

Lühinimed: `LEN`. `Vali mõõdetav objekt [DElta/Percent/Total/DYnamic]`: valik prindib `Praegune pikkus` (ja kaare sisalduva nurga) ning küsib uuesti. `DE` küsib `Sisesta pikkuse muutus (negatiivne lühendab) [Nurk]`, `P` `Sisesta pikkuse protsent`, `T` `Määra kogupikkus [Nurk]`, `DY` lohistab. Seejärel `Vali muudetav objekt [Võta tagasi]`, korduv: muutub klõpsule lähim ots. Jooned, kaared ja avatud murdjooned.

### JOIN

Lühinimed: `J`. `Vali ühendatavad objektid`. Jooned, kaared ja avatud murdjooned, mis kohtuvad ots-otsaga, muutuvad murdjoonteks (suletud, kui ahel sulgub); ühel joonel olevad jooned muutuvad üheks joonteks; ühe ringi kaared muutuvad üheks kaareks või ringiks. Ajaloos öeldakse, mitu objekti ühines ja mitu ei ühinenud.

### MATCHPROP

Lühinimed: `MA`, `PAINTER`. `Vali lähteobjekt`, seejärel `Vali sihtobjektid [Sätted]` ja {{key:Enter}}. Kopeerib kihi ja värvi ning sama liigi objektide vahel teksti kõrguse ja laiuse, mõõtmete suurused või viirutuse mustri. `S` küsib `Lülita omadus sisse või välja [Värv/LAyer/Tekst/Mõõde/Viirutus]`, korduv kuni {{key:Enter}}; valik jääb seansiks meelde.

### EXPLODE

Lühinimed: `X`. Murdjooned muutuvad joonteks ja kaarteks, plokiviited muutuvad oma objektideks, mõõtmed muutuvad joonteks, nooltipudeks ja tekstiks. Muudetav massiiv ({{cmd:ARRAYEDIT}}) muutub tavaliste koopiate hulgaks.

- `Vali objektid`

### GROUP

Lühinimed: `G`. {{cmd:GROUP}} annab valitud objektidele nime, mida nad jagavad. Vali objektid, seejärel kirjuta nimi (tühikuta; `?` loetleb rühmad; Enter teeb nimeta rühma) ja nimega rühma korral valikuline kirjeldus. Sellest hetkest klõps ühel neist või aken, mis ühe neist võtab, valib need kõik, nii et need liiguvad, kopeeritakse ja kustutatakse koos; iga objekt on endiselt oma objekt. Objekt võib olla mitmes rühmas. Terve rühma koopia on uus nimeta rühm; ühe liikme koopia üksi liitub rühmaga. Rühmad kuuluvad ruumile, kus need tehti (mudel või leht). Need säilivad, kui salvestad DWG või DXF-na ja avad faili uuesti CadCraftis; DXF 2000 failid kannavad neid ka rühmaobjektidena teistele programmidele, ja teistes programmides tehtud rühmad loetakse DXF- või DWG-faili avamisel.

### UNGROUP

{{cmd:UNGROUP}} võtab rühmad lahti: vali rühmade objektid (iga rühm, millesse nad kuuluvad, võetakse lahti) või kirjuta `Name` ja rühma nimi. Objektid jäävad joonisele. Üks tagasivõtmise samm toob rühmad tagasi.

### GROUPEDIT

{{cmd:GROUPEDIT}} muudab ühte rühma. Vali üks selle objektidest või `Name` ja selle nimi; rühm, mis on juba valitud, võetakse sellisena. Seejärel: `Add` objekte (valitakse üks korraga, mitte rühmade kaupa), `Remove` objekte, `REName` rühma, muuda selle `Description`, või sea `Selectable` (kas klõps ühel objektil valib kogu rühma). `eXit` või Enter lõpetab. Rühm ilma objektideta kaob.

### PICKSTYLE

- `Rühma valik: 0 klõps valib ühe objekti, 1 kogu rühma`: `1` (algseade) korral valib klõps või aken rühmastatud objekti puhul kogu rühma; `0` korral üksikud objektid, nii et saad ühte liiget muuta. Jääb selleks seansiks.

## Lõikepuhver

CadCraftise oma lõikepuhver: see töötab joonise sees, joonistite vahel ja CadCraftise vahelehtede vahel selles brauseris. Vt [Kopeerimine, kleepimine ja dubleerimine](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, või {{ui:Kopeeri}} rühmas {{ui:Redigeeri}}. Kopeerib objektid lõikepuhvrisse koos plokkide ja kihtidega, mida nad kasutavad. Objektid jäävad valituks.

- `Vali kopeeritavad objektid` (vahele jäetakse, kui objektid on juba valitud)

### CUTCLIP

{{key:Mod+X}}, või {{ui:Lõika}} menüüs {{ui:Veel}}. Kopeerib objektid lõikepuhvrisse ja kustutab siis need (üks tagasivõtmise samm).

- `Vali lõigatavad objektid` (vahele jäetakse, kui objektid on juba valitud)

### COPYBASE

Kopeerib objektid lõikepuhvrisse baaspunktiga, mille valid; kleepimine paigutab selle punkti.

- `Määra baaspunkt`
- `Vali kopeeritavad objektid`

### PASTECLIP

{{key:Mod+V}}, või {{ui:Kleebi}} rühmas {{ui:Redigeeri}}. Koopia järgib kursorit, rippudes oma ulatuse vasakult alumiselt nurgalt (või selle keskpunktist, või punktist `COPYBASE`; vt [CadCraftise sätted](topic:settings)).

- `Määra sisestuspunkt`

Kleebitud objektid on valitud. Plokk, mis joonisel juba on sama nimega, säilitab selle joonise definitsiooni.

Kui MarkupCraftis kopeeritud ala on uuem kui see, mida CadCraft kopeeris (ja vähem kui 6 tundi vana), kleebib {{key:Mod+V}} ja `PASTECLIP` selle ala: vt `PASTEAREA`.

### PASTEAREA

Lühinimed: `PAREA`. {{ui:Kleebi kopeeritud ala}} menüüs {{ui:Veel}}. Kleebib ala, mis on MarkupCraftis kopeeritud {{ui:Kopeeri ala}}-ga, pildina oma tõelises suuruses. Vt [Pildid joonisel](topic:pictures).

- `Määra kopeeritud ala vasak alumine nurk`
- `Skaleeri selle paberisuurust (100 1:100 lehe jaoks; Points: kaks punkti sellel ja nende tegelik kaugus) [Points] <1>` (ainult siis, kui lehel polnud joonise mõõtkava): arv, {{key:Enter}} paberi suuruse jaoks, või `P`, seejärel `Kleebitud ala esimene punkt`, `Kleebitud ala teine punkt` ja nende tegelik kaugus.

### PASTEORIG

{{key:Mod+Shift+V}}, või {{ui:Kleebi kohale}} menüüs {{ui:Veel}}. Kleebib koordinaatidesse, kust objektid kopeeriti. Ei küsi midagi.

### DUPLICATE

Lühinimed: `DUP`. {{key:Mod+D}}, või {{ui:Dubleeri ja teisalda}} menüüs {{ui:Veel}}. Objektide koopia liigub koos osutiga sealt, kus see on; {{key:Esc}} ei jäta midagi. Ei kasuta lõikepuhvrit.

- `Vali dubleeritavad objektid` (vahele jäetakse, kui objektid on juba valitud)
- `Määra koha, kuhu koopia läheb (Esc ei jäta midagi)`: klõps, punkti sisestus, `@dx,dy` (osuti asukohast), või kaugus kursori suunas.

### SELECT

Küsib `Vali objektid` (kõigi allpool olevate valikutega) ja jätab valitud asjad valituks järgmisele käsule või hiljem `P` jaoks.

### QSELECT

Lühinimed: `QS`. Brauseris dialoog {{ui:Kiirvalik}} (vt [Objektide valimine](topic:select-objects#select-by-a-rule-quick-select)). Ilma selleta küsib käsurida `Sisesta objekti tüüp`, `Sisesta omadus`, `Sisesta operaator [=/<>/>/</*/Vali kõik] <=>` ja `Sisesta väärtus`. Vasted saavad valikuks.

### SELECTSIMILAR

Lühinimed: `SIM`. `Vali objektid [SEttings]` (või praegune valik): valib iga sama tüüpi objekti, mille kiht ja värv on samad (ja ploki nimi, viirutuse muster). `SE` küsib `Lülita omadus sisse või välja [LAyer/COlor/NAme/PAttern/HEight]`, korduv kuni {{key:Enter}}.

### FIND

Ilma lühinimedeta; või {{ui:Redigeeri}} › {{ui:Veel}} › {{ui:Otsi ja asenda}}. Brauseris dialoog {{ui:Otsi ja asenda}} (vt [Teksti ja siltide lisamine](topic:text#find-and-replace-words)). Ilma selleta: `Sisesta otsitav tekst`, seejärel `Sisesta asendustekst (Enter: vali leitud)`. Otsib tekstist, atribuutide väärtustest ja mõõtmetekstist, avatud vahelehel või valikus.

### SELECTALL ja DESELECT

`SELECTALL` (lühinimi `AI_SELALL`, {{key:Mod+A}}) valib iga objekti, mida saad avatud vahelehel muuta. `DESELECT` (lühinimed `AI_DESELECT`, `SELECTNONE`; või {{key:Esc}}) tühjendab valiku.

## Mõõtmed

### DIMLINEAR

Lühinimed: `DLI`, `DIMLIN`. Horisontaalne või vertikaalne kaugus.

- `Määra esimese pikendusjoone algpunkt [Vali objekt]` (Enter või `S`: `Vali mõõdetav objekt`, seejärel klõpsa joont, kaart, ringi või murdjoone lõiku)
- `Määra teise pikendusjoone algpunkt`
- `Määra mõõtejoone asukoht [Tekst/Horisontaalne/Vertikaalne/Pööratud]`. `T` küsib teksti (`<>` on mõõdetud väärtus), `H` ja `V` fikseerivad suuna, `R` küsib `Määra mõõtejoone nurk <0>`.

### DIMALIGNED

Lühinimed: `DAL`, `DIMALI`. Tegelik kaugus kahe punkti vahel.

- Algpunktid nagu {{cmd:DIMLINEAR}} juures, seejärel `Määra mõõtejoone asukoht [Tekst]`.

### DIMANGULAR

Lühinimed: `DAN`, `DIMANG`.

- `Vali kaar, ring või joon, või Enter tipu jaoks`
- Kaar: selle nurk. Ring: `Määra teise nurga lõpp-punkt`. Joon: `Vali teine joon`. Enter: `Määra nurga tipp`, `Määra esimese nurga lõpp-punkt`, `Määra teise nurga lõpp-punkt`.
- `Määra mõõtejoone asukoht [Tekst]`: klõpsa nurga sees, et see mõõta.

### DIMRADIUS ja DIMDIAMETER

Lühinimed: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Vali kaar või ring`, seejärel `Määra mõõtejoone asukoht [Tekst]`.

### DIMCONTINUE

Lühinimed: `DCO`, `DIMCONT`. Jätkab viimasest tehtud lineaarsest või joondatud mõõdust (või küsib `Vali lineaarne või joondatud mõõt`).

- `Määra teise pikendusjoone algpunkt [Võta tagasi]`, korduv kuni Enter.

### DIMBASELINE

Lühinimed: `DBA`, `DIMBASE`. Nagu {{cmd:DIMCONTINUE}}, aga iga mõõt algab esimesest algpunktist ja laotakse kaugemale.

### DIMORDINATE

Lühinimed: `DOR`, `DIMORD`. `Määra detaili asukoht`, seejärel `Määra juhtjoone lõpp-punkt [Xdatum/Ydatum/Text]`. Kirjutab, kui kaugel detail on UCS-i algpunktist mööda X-d või mööda Y-d, juhtjoonel: juhtjoon, mis kulgeb peamiselt üles või alla, loeb X-i, see, mis kulgeb külgsuunas, loeb Y-i; `Xdatum` ja `Ydatum` fikseerivad, milline. Sea algpunkt enne {{cmd:UCS}}-iga (ilma selleta on see joonise 0,0). Haarangud liigutavad detaili, algpunkti ja juhtjoone lõppu ning väärtus järgib. Salvestatakse tõelise ordinaatmõõdena DWG- ja DXF-failis. Keeldub juhtjoone lõpust detaili enda peal.

### DIMARC

Lühinimed: `DAR`. `Vali kaar või murdjoone kaarelõik`, seejärel `Määra kaare pikkusmõõdu asukoht [Tekst]`. Mõõdab mööda kaart (mitte kõõlu) ja kirjutab kaare sümboli väärtuse ette. Keeldub täisringist, joonest või sirgest murdjoone lõigust. DWG säilitab selle kaare pikkusmõõdu; DXF säilitab selle nurkmõõduna, kus pikkus on tekstina, ja CadCraft avab selle uuesti kaare pikkusmõõduna.

### DIMJOGGED

Lühinimed: `DJO`, `JOG`. `Vali kaar või ring`, `Määra keskpunkti asukoha asendamine`, `Määra murdumise asukoht`. Raadiusmõõt kõverale, mille keskpunkt on kaugel või lehelt väljas: mõõtejoon algab punktist, mille annad, mitte keskpunktist, murdumisega sees, ja näitab ikka tõelist raadiust. DWG säilitab selle murdunud raadiusmõõduna; DXF säilitab selle raadiusmõõduna, ja CadCraft avab selle uuesti murdununa.

### DIMJOGLINE

Lühinimed: `DJL`. `Vali mõõt murdumise lisamiseks [Eemalda]`, seejärel `Määra murdumise asukoht (või vajuta Enter)`. Paneb murdesümboli lineaarse või joondatud mõõtejoone külge, et näidata, et kaugust ei ole joonistatud mõõtkavas; väärtus ei muutu. `Eemalda` võtab selle ära. Keeldub teistest mõõdu liikidest.

### QDIM

Ilma lühinimedeta. `Vali mõõdetav geomeetria`, seejärel `Määra mõõtejoone asend [Järjestikune/Astmeline/Baasist/Ordinaat/Raadius/Läbimõõt/datumPunkt]`. Mõõdab mitut objekti ühe sammuga: joonte ja murdjoone lõikude otstest, ringide ja kaarte keskpunktidest, punktidest ja plokiviidetest. Asend objektidest kõrgemal või madalamal mõõdab üle, kõrvalasend mõõdab üles. `Järjestikune` ahelab punktid, `Baasist` mõõdab kõik esimesest, `Astmeline` paneb paare keskelt välja, `Ordinaat` annab igale punktile kauguse andmepunktist (`datumPunkt` valib uue), `Raadius` ja `Läbimõõt` mõõdavad iga valitud ringi ja kaare. Režiim jääb meelde. Kõik, mida see teeb, on üks tagasivõtmise samm. Teatatakse, kui punkte on vähem kui kaks või Raadiuse ja Läbimõõdu jaoks ei ole kaari ega ringe.

### DIMBREAK

Lühinimed: `DBREAK`. `Vali mõõdud katkestuste lisamiseks või eemaldamiseks`, seejärel `Katkesta seal, kus teised objektid ristuvad [Auto/Manual/Remove] <Auto>`. `Auto` jätab mõõtejoonte ja pikendusjoonte sisse vahe kohas, kus iganes teine objekt neid ristub, ning arvutab need vahed uuesti, kui need objektid või mõõt liiguvad. `Manual` (üks mõõt) küsib kaks punkti ja jätab nende vahele vahe. `Remove` eemaldab kõik vahed. Vahe on 1,5 korda mõõdu teksti kõrgus.

### DIMSPACE

Ilma lühinimedeta. `Vali baasmõõt`, `Vali mõõdud, mida paigutada`, `Sisesta vahe väärtus või Auto <Auto>`. Liigutab paralleelsete lineaarsete ja joondatud mõõtude mõõtejooni (või nurkmõõtude sama tipu ümber), nii et need on võrdselt kaugel, lugedes baasmõõdust, igaüks sellel pool, kus ta on. `0` joondab need baasmõõduga; `Auto` on kaks korda baasmõõdu teksti kõrgus. Baasmõõdule mitteparalleelsed mõõdud jäetakse rahule.

### DIMINSPECT

Ilma lühinimedeta. `Vali mõõdud`, `Kontrollraami kuju [Ring/Nurk/Puudub/eemalda] <Ring>`, `Sisesta silt`, `Sisesta kontrollimise sagedus <100%>`. Joonistab raami väärtuse ümber, siin ees on silt ja pärast kontrollimise sagedus. `eemalda` võtab raami ära. Tolerantsi tekst jääb väärtusega.

### DIMOVERRIDE

Lühinimed: `DOV`, `DIMOVER`. `Sisesta mõõtmismuutuja nimi, mida tühistada, või Tühjenda`, `Sisesta uus väärtus …`, uuesti kuni Enter, seejärel `Vali mõõdud`. Muudab neid sätteid ainult valitud mõõtudel; mõõtestiili ei muudeta. Võtab muutujad, mis on arv või lüliti (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Tühjenda` paneb valitud mõõdud tagasi nende stiili. Keeldub nimest, mis ei ole selline muutuja, ja väärtusest, mida see ei saa.

### DIMREASSOCIATE

Lühinimed: `DRE`, `DIMREASSOC`. `Vali mõõdud`, seejärel igaühe pikendusjoone algpunktid (`Määra esimese pikendusjoone algpunkt objektil`: haakub joone otsa või keskele, polüjoone nurgale, keskpunktile; Enter jätab punkti vabaks), või raadiuse, läbimõõdu, murdunud raadiuse või kaare pikkuse mõõdu korral `Vali kaar või ring`. Mõõt seotakse siis nende objektidega: kui need liiguvad või muudavad suurust, järgib see samas tagasivõtmise sammus ja mõõdab uuesti. Seotud punkti käsitsi liigutamine või objekti kustutamine lõpetab seose. Seos salvestatakse DWG-s ja DXF 2000-s CadCraftise oma andmetena; teised programmid näevad tavalist mõõtu.

### DIMDISASSOCIATE

Lühinimed: `DDA`, `DIMDISASSOC`. `Vali mõõdud`. Vabastab need objektidest, millega need on seotud; miski ei liigu.

### CENTERMARK

Lühinimed: `CM`, `DIMCENTER`, `DCE`. `Vali ring või kaar keskmärgi lisamiseks`, uuesti kuni Enter. Joonistab risti keskpunkti ja neli keskjoont kaugemale kui kõver (joonetüüp CENTER), tavaliste joontena praegusel kihil; suurus tuleneb praeguse mõõdu nooleosa suurusest ja üldisest mõõtkavast, pööratakse UCS-iga. Need ei järgi ringi, kui see liigub.

### CENTERLINE

Lühinimed: `CL`. `Vali esimene joon`, `Vali teine joon`. Joonistab joone kahe joone vahele (keskel, või poolitajal, kui nad kohtuvad), veidi pikem kui need on, joonetüübis CENTER. Tavaline joon: ta ei järgi kahte joont.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ilma lühinimedeta. Igaüks küsib `Sisesta uus väärtus … <praegune>` ja seab selle suuruse **uutele** mõõtudele: üldine mõõtkava, teksti kõrgus, nooleosa suurus, kümnendkohad (kuni 8), vahe teksti ümber, pikendus mõõtejoonest kaugemale, nihe algpunktist. Vt [Mõõtmesuuruste seadmine](topic:dimension-settings).

### DIMLUNIT

Mõõtme säte: uute mõõtude pikkusvorming ainult (1 teaduslik, 2 kümnend, 3 tehniline, 4 arhitektuuriline, 5 murdarv).

### DIMSTYLE ja -DIMSTYLE

Lühinimed: `DST`, `DDIM`, `D`. Mõõtestiilide haldur: {{ui:Määra praeguseks}}, {{ui:Uus…}}, {{ui:Muuda…}}, {{ui:Nimeta ümber…}}, {{ui:Kustuta}}, {{ui:Võrdle…}}, {{ui:Rakenda valitutele}}. `-DIMSTYLE` käsureal: `Mõõtestiil [Taasta/Salvesta/Kustuta/Rakenda/Võrdle/reName/List]`. Vt [Mõõtmesuuruste seadmine](topic:dimension-settings#named-dimension-styles).

### DIMEDIT ja DIMTEDIT

`DIMEDIT` (`DED`): `Mõõdu muutmine [Avaleht/Uus/Pööra/Kaldu] <Avaleht>`, seejärel mõõdud (või need, mis on juba valitud). Uus küsib teksti (`<>` = mõõdetud väärtus); Pööra küsib nurka (0 paneb teksti tagasi); Kaldu küsib pikendusjoonte nurka X-teljest (Enter = puudub; ainult lineaarsed ja joondatud mõõdud). `DIMTEDIT` (`DIMTED`): `Mõõtme tekst [Vasak/Parem/Keskel/Avaleht/Nurk] <Keskel>`. Vt [Mõõtmesuuruste seadmine](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Lühinimed: `DTU`. `Ühikud uute mõõtude tekstis [Joonise ühikud/mm/cm/m/km]`, või valitud mõõtudega `Ühikud valitud mõõtude tekstis`. Kirjutab mõõdetud pikkuse selles ühikus, ühik pärast (DIMLFAC ja DIMPOST lõpp); `D` läheb tagasi joonise ühikutele. Vt [Mõõdud mm, cm, m või km-des](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Lühinimed: `RC`. Prindib `Kaare pikkus: … Tüüp: …`, seejärel `Määra esimene punkt [Kaare pikkus/Objekt/Ristkülik/Hulknurk/Vabakäsi]`. Ristkülik küsib `Määra vastasnurk`; Hulknurk `Määra järgmine punkt (Enter sulgeb pilve) [Võta tagasi]`; Vabakäsi järgib osutit kuni klõpsu või {{key:Enter}}; `O` küsib `Vali objekt` ja `Pööra suunda? [Jah/Ei] <N>` ning muudab objekti pilveks. `A` küsib `Määra iga kaare pikkus`. `R`, `P` ja `F` valivad tüübi järgmisele pilvele. Tulemuseks on suletud murdjoon kaartest.

### MLEADER

Lühinimed: `MLD`; või {{ui:Viiktekst}}. `Määra juhtjoone noole asukoht [Noole suurus/Maandumise kaugus/Plokk]`, `Määra juhtjoone maandumise asukoht`, seejärel tekst kohapealses kastis (või ilma selleta `Sisesta tekst (tühi rida lõpetab)`). `Plokk` küsib kõigepealt ploki nime ja mitmikjuhtjoon näitab seda plokki teksti asemel. Rohkem juhtjooni: {{cmd:MLEADEREDIT}}. Salvestatakse tõelise mitmikjuhtjoonena DWG-s; DXF säilitab juhtjooned, noole ja teksti, mida see joonistab.

### MLEADEREDIT

Lühinimed: `MLE`. `Vali mitmikjuhtjoon`, seejärel `Määra juhtjoone noole asukoht [Eemalda juhtjooned/Plokisisu/Tekstisisu]`: iga punkt lisab juhtjoone uuest noolest samale maandumisele, kuni Enter. `Eemalda juhtjooned` võtab ära juhtjoone, millele klõpsad (mitmikjuhtjoon jätab vähemalt ühe). `Plokisisu` küsib ploki nime ja näitab seda plokki teksti asemel (küsitakse selle atribuute); `Tekstisisu` paneb teksti tagasi. Igal juhtjoonel on oma haarang. DWG hoiab iga juhtjoone ja ploki ühes mitmikjuhtjoones.

### MLEADERALIGN

Lühinimed: `MLA`. `Vali mitmikjuhtjooned`, seejärel `Vali mitmikjuhtjoon, mille järgi joondada [Jaota/Vahe/Kasuta praegust vahet]` ja `Määra suund`. Teisaldab teiste mitmikjuhtjoonte maandumised (ja nende tekstid või plokid) valitud joonest läbi maandumise sellel suunal; noolenupud jäävad sinna, kuhu nad osutavad. `Vahe` seab need ka võrdsele kaugusele; `Jaota` küsib kaks punkti ja laotab need nende vahele ühtlaselt. Vajab vähemalt kahte mitmikjuhtjoont.

### MLEADERCOLLECT

Lühinimed: `MLC`. `Vali mitmikjuhtjooned`, seejärel `Määra kogutud mitmikjuhtjoone asukoht [Vertikaalne/Horisontaalne]` (Enter jätab esimese koha). Teeb mitmest ühe mitmikjuhtjoone: plokisisu läheb uude plokki, mis hoiab kõiki kõrvuti või üksteise all; tekstisisu muutub üheks märkuseks, igale reale oma rida. Esimene mitmikjuhtjoon jätab oma juhtjooned; teised eemaldatakse. Keeldub teksti ja ploki segust.

### TABLE

Lühinimed: `TB`; või {{ui:Märkused}} › {{ui:Veel}} › {{ui:Tabel}}. Teeb tabeli: üks objekt, mida saad teisaldada, kopeerida, pöörata, skaleerida ja printida nagu iga teist, ja mille lahtrid on hoitud andmetena.

- `Andmerea arv või [Kleebi/Fail/Stiil] <3>`, seejärel `Veergude arv <3>`, `Teksti kõrgus` ja `Tabeli vasak ülanurk`. Tabelil on pealkirjarida (üks ühendatud lahter) ja päiserida andmeridade kohal.
- `P`: tabel tabelarvutuse lahtritest lõikepuhvris (tekst, lahtrite vahel tabulaator). Enter-klahviga {{key:Ctrl+V}}, kui sellised lahtrid on lõikepuhvris, teeb sama, välja arvatud juhul, kui CadCraftise oma koopia on uuem (või CadCraft ei oska öelda: siis kleebib ta oma koopia ja ütleb seda). `F`: tabel failist `.csv` või tabulaatoriga eraldatud failist. Esimene rida saab päiseks; veeru laiused sobivad teksti järgi.
- `S`: vali selle tabeli tabelistiil (vt {{cmd:TABLESTYLE}}).
- Keeldub ridade või veergude arvust, mis ei ole täisarv, ja rohkem lahtritest, kui tabel mahutab (2000 rida, 200 veergu, 40 000 lahtrit).
- {{cmd:EXPLODE}} muudab tabeli jooneks ja tekstiks. DWG-na salvestatuna on tabel tõeline tabeliobjekt, mida teised programmid saavad muuta; DXF-na salvestatuna on see plokk, mis seda joonistab, ja CadCraft avab selle uuesti tabelina.

### TABLEDIT

Lühinimed: `TABLEEDIT`, `TABEDIT`; või topeltklõps lahtril. Muudab tabelit.

- `Vali lahter, kuhu kirjutada (Enter lõpetab) või [Rida/Veerg/Suurus/Ühenda/Lahenda/Joonda/Kõrgus/Liik/CLear]`. Klõpsa lahtrit, või kui tabel on valitud, sisesta selle nimi (`B3`: veerg B, rida 3; pealkirjarida on rida 1). Brauseris avaneb lahtri kohale kast: {{key:Enter}} jätab teksti, {{key:Tab}} läheb järgmisele lahtrile, {{key:Alt+Enter}} alustab uut rida, {{key:Esc}} jätab lahtri nagu oli.
- Tekst, mis algab `=`, on valem: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, koos `+ - * / ^`, sulgude ja funktsioonidega nagu `sqrt` ja `round`. Lahter näitab väärtust; valem, mis nimetab oma lahtrit, tabeli välist lahtrit või lahtrit ilma arvuta, näitab `####` ja käsurida ütleb, miks.
- `R` / `C`: `Lisa` või `Kustuta` read või veerud valitud lahtri juures (mitu, ja üleval või all, vasakul või paremal). Valemid järgivad lahtreid, millele nad viitavad.
- `S`: veeru laius ja rea kõrgus. Rida ei ole kunagi madalam kui selle tekst vajab. Valitud tabelil on ka haarang igal veeru ja rea servas.
- `M`: ühenda ühest valitud lahtrist teiseni; `U`: lahenda. `A`: joondus (`TL` ülal vasakul … `MC` keskel keskel … `BR` all paremal). `H`: selle lahtri oma teksti kõrgus (0 = stiili oma). `K`: muuda rida pealkirjaks, päiseks või andmerea. `CL`: tühjenda lahter.
- Keeldub tabelist lukustatud kihil, kõigi ridade või veergude kustutamisest ja ühendamisest, mis lõikaks teise ühendatud lahtri kaheks.

### TABLESTYLE

Lühinimed: `TS`. Loetleb tabelistiilid koos sellega, mitu tabelit igaüht kasutab, seejärel `Tabelistiil: [Uus/Määra/Muuda/Kustuta/Rakenda]`.

- Stiil hoiab pealkirja, päise ja andmeridade teksti kõrgust ja joondust, lahtri veeriseid ning seda, millised jooned joonistatakse (välimine, ridade vahel, veergude vahel).
- `N` teeb stiili praegusest ja muudab selle praeguseks; `S` määrab praeguse stiili (uued tabelid võtavad selle); `E` muudab ühte: tabelid, mis seda kasutavad, joonistatakse uuesti; `A` annab valitud tabelitele praeguse stiili; `D` kustutab ühe (mitte Standard, mitte praegune; tabelid, mis seda kasutasid, säilitavad oma väljanägemise).
- Stiilid salvestatakse koos joonisega (DWG ja DXF).

### TABLEEXPORT

Salvestab tabeli näidatud sisu CSV-failina (valem oma väärtusena). `Vali tabel` või vali see enne. Tekstilahtrid, mis algavad `=`, `+`, `-` või `@`, saavad ees `'`, et tabelarvutus neid ei käivitaks.

### TABLEPASTE

Lühinimed: `PASTETABLE`. Teeb tabeli lõikepuhvri tabelarvutuse lahtritest, seejärel küsib selle vasakut ülanurka. Sama mis {{cmd:TABLE}} › `Kleebi`.

### DATALINK

Lühinimed: `DL`. `Andmeseos: [Uus/Loetle/Eemalda] <Uus>`. `N` küsib CSV-faili, paigutab selle tabeli ja mäletab faili nime; `L` loetleb seosed koos failiga, suuruse, lugemise aja ja tabelite arvuga; `R` eemaldab seose (selle tabelid jäävad lihtsateks tabeliteks).

### DATALINKUPDATE

Lühinimed: `DLU`. Loeb andmeseose faili uuesti ja täidab selle tabelid uuesti (ridu ja veerge lisatakse või eemaldatakse vastavalt). Brauser ei saa faili ise avada, seega palub see sul faili uuesti valida. Mitme seose korral küsib, millist.

### FIELD

Paneb joonisele välja: tekst, mis arvutab ise välja. `Väli: [Kuupäev/Failinimi/Leht/Omadus/Objekt/Avaldis/Kood] <Kuupäev>`:

- `D`: nüüd või salvestatud, loodud või prinditud kuupäev, ja vorming (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: faili nimi, laiendiga või ilma. `S`: lehe number, pealkiri või mitu lehte on. `P`: joonise omadus nime järgi (vt {{cmd:DWGPROPS}}). `O`: vali objekt, seejärel mida lugeda (pindala, pikkus, ümbermõõt, raadius, läbimõõt, kiht, nimi, x, y, tekst, pööre, värv) ja kümnendkohad. `E`: valem. `C`: tekst, mille koodid on kirjutatud nagu need on, näiteks `Leht %<sheetnumber>% / %<sheetcount>%`.
- Seejärel `Vali tekst, tabelilahter või atribuutidega plokk, kuhu see panna (Enter: uus tekst)`: valitud tekstile lisatakse väli selle sisu järele; tabelilahtrile samamoodi; plokiviide küsib, milline atribuut; {{key:Enter}} küsib uue teksti kõrguse ja punkti.
- Ekraanil on väljal hele hall taust; prindil ja PDF-is seda ei ole. Väljal oleva teksti käsitsi üle kirjutamine lõpetab välja. Väli, mida ei saa arvutada, näitab `####`.
- Objekti väli leiab oma objekti võtme järgi, mida CadCraft hoiab objektidel (Sätted › CadCraft › Ühendamisega sõbralikud failid); kui võtmed on välja lülitatud, keeldub.

### UPDATEFIELD

Lühinimed: `UPDATEFIELDS`. `Vali objektid, mille väljad uuendada (Enter: iga väli) või [Sätted]`. `S` määrab, millal väljad iseenesest uuenevad: kirjuta `O` avamine, `S` salvestamine, `P` printimine, `R` uuesti genereerimine (algseadena kõik neli), või `NONE`.

### DWGPROPS

Lühinimed: `DRAWINGPROPS`. Loetleb joonise omadused, seejärel `Muuda: [Pealkiri/Teema/Autor/Ettevõte/Märksõnad/coMments/cUstom/Eemalda/eXit]`. Esimesed kuus on need, mida näitab paneel {{ui:Joonise üksikasjad}}; `U` lisab sinu oma nime ja väärtuse, `R` eemaldab ühe. Väljad loevad neid (`%<prop:title>%`, `%<prop:Client>%`) ja järgivad kohe. Keeldub kohandatud nimest, mis on üks sisseehitatud nimedest või sisaldab `%`, `<`, `>`, jutumärki või kaldkriipsu.

## Parameetriline

Vt [Joonise piiramine](topic:constraints) ja [Parameetrite ja võrrandite kasutamine](topic:parameters). Piirangud töötavad vahelehel {{ui:Mudel}}.

### GEOMCONSTRAINT ja GC käsud

Lühinimi `GCON`: `Sisesta piirangu tüüp [Horisontaalne/Vertikaalne/Risti/PArallel/Puutuja/Samaaegne/CONtsentriline/COLlineaarne/Sümmeetriline/Võrdne/Fix] <Horisontaalne>`, seejärel selle käsu viibad.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Vali objekt [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Vali esimene objekt`, `Vali teine objekt` (teine liigub).
- {{cmd:GCCOINCIDENT}}: `Vali esimene punkt [Objekt/Automaatpiirang] <Objekt>`, `Vali teine punkt [Objekt] <Objekt>`.
- {{cmd:GCFIX}}: `Vali punkt [Objekt] <Objekt>`.
- {{cmd:GCSYMMETRIC}}: `Vali esimene objekt [2Points] <2Points>`, `Vali teine objekt`, `Vali sümmeetriajoon`.

### DIMCONSTRAINT ja DC käsud

Lühinimi `DCON`: `Vali teisendatav assotsiatiivne mõõt [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Määra esimene piirangupunkt [Objekt] <Objekt>`, `Määra teine piirangupunkt`, `Määra mõõtejoone asukoht`, `Mõõdu tekst <d1=40>` (arv, avaldis või `nimi=avaldis`).
- {{cmd:DCALIGNED}}: nagu eespool, koos `[Objekt/Punkt ja joon/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Vali kaar või ring`. {{cmd:DCANGULAR}}: `Vali esimene joon või kaar`, `Vali teine joon`.
- {{cmd:DCCONVERT}}: `Vali teisendatavad mõõdud`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Vali objektid [Sätted]`. `S` küsib kauguse ja nurga tolerantse.
- {{cmd:DELCONSTRAINT}} (lühinimi `DELCON`): `Vali objektid`; nende piirangud kaovad.
- {{cmd:CONSTRAINTBAR}} (lühinimi `CBAR`): `Vali objektid [Showall/Hideall]`, seejärel `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Sisesta valik [Show/Hide]`.

### PARAMETERS ja -PARAMETERS

{{cmd:PARAMETERS}} (lühinimed `PAR`, `PARAM`) avab paneeli {{ui:Parameetrid}}. `-PARAMETERS`: `Sisesta valik [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Lühinimi `SWMACRO`. Laadib alla makro (.swb), mis ehitab mudeli SolidWorksis uuesti ühe piiratud visandina. Vt [Visandite viimine teistesse detailimudelitesse ja neist](topic:solidworks-sketches).

## Plokid

### ANNOSCALE

Lühinimed: `CANNOSCALE`. Ütleb joonise märkemõõtkava ja selle märkeobjektide arvu, seejärel küsib `Uus märkemõõtkava`: sisesta `1:50`, `1:100`, `2:1`, paljas arv (`50` on 1:50) või ühe joonise enda mõõtkava nimi. Iga märketekst ja mõõt muudetakse nii, et see prindib samas suuruses uuel mõõtkaval, ühe tagasivõtmise sammuga; mitte-märkeobjektid jäetakse rahule, samuti objekt, mis hoiab mõõtkavade loendit ilma uueta ({{cmd:OBJECTSCALE}}). Vt [Ühikud, paberid ja mõõtkavad](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Lühinimed: `OBJSCALE`. `Vali märkeobjektid`, seejärel `Valitud objektide märkemõõtkavad [Lisa/Kustuta/Praegune mõõtkava/Loetle/eXit] <Lisa>`. Märketekst või mõõt hoiab märkemõõtkavade loendit. `Lisa` ja `Kustuta` küsivad mõõtkava (`1:50`, `2:1`, paljas arv või ühe joonise enda mõõtkava nimi); `Praegune mõõtkava` lisab joonise märkemõõtkava; `Loetle` prindib iga objekti mõõtkavad. Vaateaken, kelle mõõtkava on objekti loendis, näitab objekti suuruses, mis prindib selle paberikõrguse sellel mõõtkaval, ekraanil ja printides. Viimast mõõtkava ei saa kustutada. Märkeobjektid, mis ei ole märkeobjektid, jäetakse välja: lülita enne Omadustes sisse Märkeobjekt. Loendid salvestatakse DWG- ja DXF-failis CadCraftise oma andmetena. Vt [Ühikud, paberid ja mõõtkavad](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Lühinimed: `ANNOALL`. `Näita märkeobjekte kõigil mõõtkavadel [ON/OFF]`. Sees (nagu joonis algab): märkeobjekt näitatakse ka vaateaknas või mudelis, kelle mõõtkava ei ole selle loendis, sellise suurusega, nagu tal on. Väljas: seda seal ei näidata ja mudelis ei saa seda valida. Lüliti on üks tagasivõtmise samm; seda ei salvestata failis.

### SCALELISTEDIT

Lühinimed: `SCALELIST`. `Mõõtkavade loend [Add/Edit/Delete/List/Reset]` kuni {{key:Enter}}. Lisa: `Mõõtkava nimi`, `Paberi ühikud`, `Joonise ühikud`. Muuda ja Kustuta küsivad mõõtkava nime. Joonise enda mõõtkavad lähevad vaateakna ja printimise mõõtkavade loenditesse ning salvestatakse koos joonisega. Vt [Ühikud, paberid ja mõõtkavad](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT ja PEDIT

`SPLINE` (`SPL`): `Spline'i esimene punkt [Meetod/Objekt] (Sobituspunktid)`. Sobitus: punktid, mida kõver läbib; `Close`, `Undo`, seejärel `Alguse puutuja` ja `Lõpu puutuja` (punkt või {{key:Enter}}). Meetod › Juhtipunktid küsib astet (1 kuni 5) ja joonistab juhtpolügoonist. Objekt muudab murdjooned splainideks läbi nende tippude. `SPLINEDIT` (`SPE`): `[Sobitusandmed/Muuda tippu/teisenda murdjooneks/Ava või Sulge/Pööra/Võta tagasi/eXit]`; Sobitusandmed `[Lisa/Kustuta/Teisalda/Puhasta/Puutujad/eXit]`; Muuda tippu `[Lisa juhtpunkt/Teisalda/Kaal/eXit]`. `PEDIT` (`PE`): `[Sulge/Ava/Ühenda/Laius/Sobita/Splain/Lahuta/Joonetüübi gen/Pööra/Võta tagasi/eXit]`, `M` mitme objekti jaoks; jooni, kaari ja splaine pakutakse kõigepealt murdjoontena. Vt [Splainid ja murdjooned](topic:splines).

### BLOCK

Lühinimed: `B`, `BMAKE`.

- `Sisesta ploki nimi`. Kui see on olemas: `Plokk "…" on juba olemas. Kas määratleda uuesti? [Jah/Ei] <N>`.
- `Määra sisestamise baaspunkt`
- `Vali objektid`. Need asendatakse ühe viitega uuele plokile.

### WBLOCK

Lühinimed: `W`, `-WBLOCK`. Kirjutab ploki, mõned objektid või kogu joonise uue DWG- või DXF-failina. `WBLOCK allikas [Plokk/Kogu joonis/Objektid] <Objektid>`:

- **Objektid**: `Määra sisestamise baaspunkt` (sellest saab uue joonise algpunkt), `Vali objektid`, seejärel `Failivorming [DWG/DXF/R12 DXF]` ja `Uue joonise failinimi`, seejärel `Mida teha objektidega [Säilita/Muuda plokiks/Kustuta]`. Muuda asendab need ühe viitega plokile, mille nimi on faili nimi; Kustuta eemaldab need.
- **Plokk**: `Kirjutatav plokk`. Ploki enda objektid, selle baaspunkt algpunktina, sealhulgas sisemised plokid.
- **Kogu joonis**: iga objekt mudeliruumis. Lehti ei kirjutata; kasuta {{cmd:SAVEAS}}, et saada koopia, mis neid säilitab.

Uus fail sisaldab ainult kihte, joonetüüpe, teksti- ja mõõtestiile ning plokke, mida selle objektid kasutavad, ja joonise ühikuid. DWG versioon on see, mida {{cmd:SAVEAS}} viimati kasutas. Brauseris fail laaditakse alla; Studios avaneb salvestusdialoog.

### ATTDEF

Lühinimed: `ATT`, `DDATTDEF`, `-ATTDEF`; või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Määra atribuut}}. Prindib režiimid, seejärel `Sisesta muudetav valik (Enter, kui valmis) [Invisible/Constant/Preset]`, `Sisesta atribuudi sildi nimi`, `Sisesta atribuudi viip`, `Sisesta atribuudi vaikeväärtus` (`Sisesta atribuudi väärtus`, kui konstantne), `Määra teksti alguspunkt`, `Määra teksti kõrgus`, `Määra teksti pöördenurk`. {{cmd:BLOCK}} võtab atribuudimääratlused plokki.

### EATTEDIT ja ATTEDIT

`EATTEDIT` (`DDATTE`, või topeltklõps viitel, millel on atribuudid; {{ui:Plokid}} › {{ui:Veel}} › {{ui:Muuda atribuute}}): `Vali atribuutidega plokiviide`, seejärel dialoog {{ui:Muuda atribuute}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): sama viide, seejärel `<viip> (<TAG>) <väärtus>` iga atribuudi kohta; {{key:Enter}} jätab väärtuse. Vt [Atribuudid](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Uuenda atribuute, kelle plokiviidetel [Name/Select/All] <Select>`. Väärtused säilivad; uued atribuudid saavad oma vaikeväärtuse, eemaldatud lähevad, paigutused lähtestatakse.

### BATTMAN

{{ui:Plokid}} › {{ui:Veel}} › {{ui:Atribuudihaldur}}. Dialoog: plokk, atribuudid (silt, viip, vaikeväärtus, režiimid, järjekord), {{ui:Uuenda viiteid (väärtused säilivad)}}, {{ui:Rakenda}}.

### REFEDIT ja REFCLOSE

{{ui:Plokid}} › {{ui:Veel}} › {{ui:Muuda kohapeal}}. `REFEDIT`: `Vali muudetav plokiviide kohapeal` (või valik). `REFCLOSE`: `Salvesta muudatused "…"-is [Salvesta/Loobu] <Salvesta>`; riba {{ui:Salvesta plokk}} ja {{ui:Loobu}} teevad sama. Kogu muutmine on üks tagasivõtmise samm. Vt [Atribuudid](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT ja BCLOSE

`BE`; või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Muuda plokki}}. `Sisesta muudetava ploki nimi <valitud viite plokk>` avab plokiredaktori. `BCLOSE` küsib `Sulge plokiredaktor "…"-is [Salvesta/Loobu] <Salvesta>`; riba {{ui:Salvesta plokk}} ja {{ui:Loobu muudatustest}} teevad sama. Kõik redaktoris tehtu on üks tagasivõtmise samm.

### VIEWBASE

Lühinimi `FLATSHOT`. Tasane 2D-vaade 3D-vahelehe tahkistest: `Vaade [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Peidetud jooned [Show/Hide]`, mõõtkava (`1:20`, `2:1`; {{key:Enter}} võtab lehele sobiva), seejärel vaate keskpunkt. Üks plokiviide, nähtavad servad VIEW-VISIBLE kihil, peidetud katkendlikult VIEW-HIDDEN kihil. Vt [Tasased vaated lehel](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Lühinimed: `-PUBLISH`; või {{ui:Kõik lehed ühes PDF-is}} dialoogis {{ui:Prindi PDF-iks}}. `Printimiseks lehed [All/Some]`: {{key:Enter}} prindib iga lehe, `S` küsib nimesid komadega eraldatult. Üks PDF, leht ja järjehoidja iga lehe kohta. Vt [Kõik lehed ühes PDF-is](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Lühinimed: `SSM`, `SHEETSETMANAGER`. Viib sind vasakpoolse paneeli jaotisse {{ui:Lehtede komplekt}}: lehed paljudest joonistest, nummerdatud ja pealkirjastatud, nende tiitelplokid täidetud komplektist, avaldatud ühe PDF-ina. Vt [Lehtede komplektid](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): vali DWG või DXF, seejärel selle sisestuspunkt. {{cmd:XREF}} (`XR`, `-XREF`): `Seotud joonised [?/Attach/Reload/Bind/Detach] (Enter: ?)`; kui linke on rohkem kui üks, vali üks selle viidetest või sisesta `N` ja selle nimi. Vt [Seotud joonised](topic:files#linked-drawings-external-references).

### COUNT

Lühinimed: `BCOUNT`; või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Loenda plokid}}. `Vali loendatav plokiviide või [All/Export] (Enter: All)`: valik valib ja loeb iga selle ploki viite selles ruumis; {{key:Enter}} või `A` loetleb need kõik; `E`, seejärel `C` (loendab) või `A` (atribuudid) laadib alla CSV-faili. Vt [Plokkide loendamine ja graafiku eksport](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Lühinimed: `I`, `DDINSERT`.

- `Sisesta ploki nimi või [Fail/Teek] <viimane plokk>` (suur- ja väiketähed ei loe). `F` küsib DWG- või DXF-faili, seejärel kogu joonist või ühte selle plokkidest; juba kasutatud nimi küsib {{ui:Säilita olemasolevad}} või {{ui:Nimeta ümber}}. `L` avab teegi paneeli.
- `Määra sisestuspunkt [Scale/Rotate]`. `S` küsib `Määra mõõtkava tegur`, `R` küsib `Määra pöördenurk`; mõlemad jäävad meelde.
- Kui plokk juba seisab objektide kõrval, mis korduvad mujal ilma selleta, ütleb rida, mitu kohta soovitatakse, ja viip saab juurde `suGgested`: `G` näitab neid; klõpsa ühe lähedal, et plokk sinna panna, `A` kõigi jaoks, {{key:Enter}} tagasi. Nad võtavad oma naabrite pöörde ja atribuutide vaikeväärtused. Üle 20 000 objekti joonised avatud ruumis ei otsita.
- Seejärel `Sisesta <viip> (<TAG>) <vaikeväärtus>` iga atribuudi kohta, mida plokk küsib. Vt [Plokkide atribuudid](topic:attributes).

### LIBRARY

Lühinimed: `LIB`. Avab teegi paneeli: paiguta kirjeid, kontrolli uuendusi, teegi autorid. Küsimusi ei ole. Vt [Sisesta failist või teegist](topic:insert-from-file-and-library).

### STEELMEMBER

Lühinimed: `SMEMBER`; või {{ui:3D-detail}} teegi vahelehel {{ui:Standardne}}. `Profiili suurus <W12x26>` (nagu vahekaart seda loetleb), seejärel `Algpunkt [Column]` ja `Lõpp-punkt`: tahke detail 3D-vahelehel kahe punkti vahel, toetudes maapinnale. `C` küsib veeru alusepunkti ja selle kõrgust. Üks tagasivõtmise samm. Vt [Terasprofiilide ja standardosade paigutamine](topic:steel-and-standard-parts).

### PARTSLIST

Lühinimed: `PLIST`. `Detailide nimekirja vasak ülanurk`, seejärel `Teksti kõrgus <2.5>`: joonistab tabeli iga standardse detaili ja terasprofiili kohta, mis on paigutatud teegist (üksuse numbrid, kogus, detail, standard, suurus, pikkus, materjal, mass). Üks tagasivõtmise samm. Vt [Terasprofiilide ja standardosade paigutamine](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Lühinimed: `PU`. Eemaldab plokkide definitsioonid, mida miski ei kasuta. Küsimusi ei ole.

### DELBLOCKS

Või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Kustuta plokid}}. `Vali kustutatav plokk [Name/eXit]`: vali plokiviide või `N` nimekirja jaoks koos filtriga (vali mitu), või `X` / {{key:Enter}} lõpetab. Iga viide läheb — mudelis, igal lehel ja teiste plokkide sees — ning seejärel definitsioon, ja käsurida ütleb, mis kustutati ja mis mitte. Nimeta plokke ja lingitud jooniseid ei pakuta. Viip tuleb tagasi järgmise ploki jaoks; kogu käsk on üks tagasivõtmise samm.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} kleebib selle, mida kopeerisid ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), ühe plokina: vali sisestuspunkt ja sinna läheb uue ploki üks viide, valituna. Plokk saab oma nime (`A$C` ja number); {{cmd:RENAME}} annab sellele sinu nime. Üks tagasivõtmise samm eemaldab viite ja ploki.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} küsib asendatavat plokki ja plokki, mis tema kohale läheb (`?` loetleb plokid), ning muudab iga viite mudelis, igal lehel ja teiste plokkide sees. Iga viide säilitab oma koha, mõõtkava, pöörde, kihi ja atribuutide väärtused, mis mõlemal plokil on; ainult uuel plokil olevad atribuudid algavad oma vaikeväärtustega, ja see ütleb, millised väärtused langesid välja. Kui miski ei kasuta enam vana plokki, pakub see selle eemaldamist. Keeldub lingitud jooniseid ja asendust, mis paneks ploki iseenda sisse. Üks tagasivõtmise samm.

### MINSERT

{{cmd:MINSERT}} paigutab ploki ridadesse ja veergudesse: ploki nimi, sisestuspunkt, mõõtkava, pööre, ridade ja veergude arv ning nendevaheline kaugus. Terve komplekt pöördub pöördega. Iga on oma viide (kõige rohkem 10 000), nii et ükskõik millist saab hiljem teisaldada või kustutada.

### BLOCKSPALETTE

Lühinimed: `BLOCKSPAL`; või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Plokkide paneel}}. Näitab paneeli {{ui:Plokid}}, kursor on selle filtris. Igal plokil on väike pilt; viimati paigutatud tulevad esimesena. Filtri kõrval olevad kaks nuppu vahetavad pildiloendi ja ruudustiku vahel. Klõpsa pildil (või {{ui:Lisa}}), et paigutada plokk käsuga {{cmd:INSERT}}, või lohista see joonisele, et paigutada see sinna, kuhu lased lahti.

{{ui:Teegid}}, loendi all: {{ui:Lisa joonis}} võtab sinu oma DWG- või DXF-faili ja loetleb selle plokid piltidega ning kogu joonise ühe plokina. Ühe paigutamine kopeerib selle definitsiooni (ja plokid, mis selle sees on, ning nende kihid) sellesse joonisesse, nagu teeb {{cmd:INSERT}} valik `File`; plokk, mis on siin juba sama definitsiooniga, kasutatakse küsimata; sama nimega, kuid erinev, küsib {{ui:Säilita olemasolevad}} või {{ui:Nimeta ümber}}. Brauseris jääb fail alles, kuni leht suletakse. CadCraft Studios loetleb {{ui:Lisa kaust}} kausta joonised, igaüks avatakse klõpsamisel, ja failid ja kaustad jäetakse meelde. Väike x eemaldab teegi loendist; faili ei puututa. Jagatud {{ui:Teek}} on midagi muud: vt [Sisesta failist või teegist](topic:insert-from-file-and-library).

### BCONVERT

Või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Muuda kordused plokkideks}}. Leiab korduva geomeetria ja muudab iga koopia viiteks ühele plokile.

- `Vali korduvad objektid või [Block]`: ühe koopia objektid. `B` nimetab selle asemel olemasoleva ploki, et leida selle objektide lahtised koopiad.
- `Koopia võib olla: peegeldatud = Ei, skaleeritud = Ei; kiht, värv, joonetüüp ja joonepaksus = Sobita … [Mirrored/Scaled/Properties]`: `M`, `S` ja `P` vahetavad, mis loeb koopiana; {{key:Enter}} otsib. Sätted jäävad meelde.
- `Uue ploki nimi <Block1>`, seejärel `Määra ploki baaspunkt` ({{key:Enter}} võtab valiku vasaku alumise nurga).
- Ütleb, mitu muud objektide komplekti on sama geomeetria, tõstab esile kõik, mida asendaks, ja küsib `Jah/Ei`.

Koopia on samad objektid, mis on teisaldatud ja mis tahes nurga all pööratud (ja peegeldatud või skaleeritud ühe teguriga, kui need on sees): iga objektil peab olema oma vaste, miljondiku valiku suuruse täpsusega. Igal viitel on oma pööre ja mõõtkava (peegeldatul negatiivne Y-mõõtkava), ning kiht, mida objektid jagasid. Lukustatud kihtidel olevaid objekte ei puututa ja loetakse. Otsib avatud ruumis (mudelit või avatud lehte). Väga suur otsing peatub töölimiidil ja ütleb seda. Üks tagasivõtmise samm.

### BSEARCH

Või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Otsi plokke}}. `Otsi plokke järgi [Name/Attribute/Geometry] <Name>`:

- `N`: osa ploki nimest või muster `*` ja `?` abil. Loetleb iga ploki koos selle viidetega siin ja kogu joonises.
- `A`: atribuudi väärtus või `TAG=väärtus`. Loetleb plokid, kelle viited seda hoiavad, koos leitud väärtustega. Konstantsed atribuudid loevad.
- `G`: vali objektid või üks plokiviide, ja loetletakse plokid, mille kuju on vähemalt 85% sarnane, parim esimesena. Suurus, pööre ja peegeldus ei loe. Mõõt võrdleb punktide vahelisi kaugusi, mis on laiali mööda kontuure, nii et leiab sarnased; täpsete koopiate leidmiseks kasuta {{cmd:BCONVERT}}.

Avatud ruumis leitud viited valitakse, valmis järgmiseks käsuks.

### BREPLACE

Või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Asenda plokid}}. `Asenda [Selected/All]`: `S` asendab valitud plokiviited ploki vastu, mille nimetad; `A` küsib plokki ja selle asendajat ning muudab iga viite, nagu teeb {{cmd:BLOCKREPLACE}} (sama kood). Viide säilitab oma koha, mõõtkava, pöörde, kihi ja atribuutide väärtused, mis mõlemal plokil on; väärtused, millele uuel plokil kohta pole, langevad välja ja nimetatakse. `?` loetleb plokid. Üks tagasivõtmise samm.

### DATAEXTRACTION

Lühinimed: `EATTEXT`, `DX`; või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Andmete väljavõte}}. Loetleb plokid, nende atribuudid ja objektide omadused tabelina või CSV-failina.

- Töötab valiku kohta või küsib `Vali objektid (Enter: kõik selles ruumis)`.
- `List: [Blocks/Objects/All]`, kui valik sisaldab mõlemat. Nimeta plokke, tabeleid ja materjalide nimekirju ei loetleta kunagi.
- Prindib veerud, mille vahel valida (nimi, tüüp, kiht, X, Y, pööre, mõõtkava, pikkus, pindala, värv, joonetüüp, ruum ja üks iga atribuudi sildi kohta), seejärel `Veerud, nime või numbri järgi komadega eraldatult`. {{key:Enter}} võtab tärniga märgitud: plokkide puhul nime ja iga atribuudi; objektide puhul tüübi, kihi ja pikkuse.
- `Pane identsed read kokku koos arvuga? [Yes/No] <Yes>`, seejärel `Pane loend: [Table/Csv] <Table>`. Tabel on tavaline tabel ({{cmd:TABLEDIT}} muudab seda) ja see ei ole elav: käivita käsk uuesti, kui joonis muutub.
- Keeldub veerust, mida nimekirjas ei ole. Tabel mahutab 1999 andmerida; CSV-fail mahutab need kõik.

### COUNTTABLE

Loeb valiku (või avatud ruumi) plokiviiteid ja paneb arvud tabelisse (`Block`, `Count`) või CSV-faili. Arvu jaoks, mis järgib joonist iseenesest, vt {{cmd:BOMTABLE}}.

## Lehed ja printimine

### LAYOUT

Lühinimed: `LO`, `NEWLAYOUT`; või nupp {{ui:+}} joonise all. Uus leht raamiga, tiitelploki ja ühe vaateaknaga, formaadil ISO A3 (või Tabloid tollides või jalgades joonistele). Küsimusi ei ole.

### MVIEW

Lühinimed: `MV`. Ainult lehel ({{cmd:VPORTS}} lehel teeb sama).

- `Määra vaateakna nurk [Polygonal/Object]`, `Määra vastasnurk`. Vaateaken näitab kogu mudelit standardses mõõtkavas.
- `P` (Polygonal): klõpsa kontuuri nurgad (`Undo`, `Close`), {{key:Enter}}, kui valmis. Keeldub alla kolme nurga.
- `O` (Object): `Vali suletud objekt vaateakna kontuuriks`: suletud murdjoon, ring või ellips lehel. Vaateaken võtab selle kuju (kõverad lühikeste sirgete lõikudena); objekt jääb nagu oli. Keeldub objektist, mis ei ole suletud.

### VPCLIP

Lõikab vaateakna, mis on juba lehel. `Vali lõigatav vaateaken` (või vali see enne), seejärel `Vali objekt, mille järgi lõigata [Polygonal/Delete]`:

- Klõpsa suletud murdjoont, ringi või ellipsit, või {{key:Enter}} (või `P`), et klõpsata hulknurga nurki.
- `D` (Delete, pakutakse, kui vaateaken on lõigatud) teeb sellest jälle ristküliku: kasti selle kontuuri ümber, mis tal oli.
- See, mida vaateaken näitab, paberil ei liigu ja tema mõõtkava jääb samaks. Mudelit joonistatakse ja prinditakse ainult kontuuri sees ning serv järgib seda. Üks tagasivõtmise samm.
- Lõigatud vaateaknal on haarang igas oma kontuuri nurgas, lisaks keskpunktile ja kasti nelja nurgale (kasti nurga lohistamine venitab kontuuri sellega). Omadused näitavad Kontuur: Ristkülik või Lõigatud koos nurkade arvuga.
- DWG- ja DXF 2000-failid säilitavad kontuuri CadCraftile. Teised programmid avavad vaateakna selle ümber oleva ristkülikuna; DXF R12 säilitab ainult ristküliku.
- Mudeli vahelehel öeldakse, et vaateaknad on lehtedel.

### VPORTS

Lühinimed: `VIEWPORTS`. {{cmd:SPLIT}} on sama ka lehelt, ja {{ui:Vaade}} › {{ui:Veel}} › {{ui:Jaga kõrvuti}}, {{ui:Jaga üksteise alla}}, {{ui:Neli paani}}, {{ui:Üks paan}} käivitavad selle. Mudelil: `Sisesta paanide arv [SIngle/2/3/4] <3>`; `2` küsib `[Horizontal/Vertical] <Vertical>` (Vertical = kõrvuti), `3` küsib `[Left/Right] <Right>` (kuhu suur paan läheb). Iga paan säilitab oma vaate ja ruumi; klõps teeb paani aktiivseks. Lehel on see {{cmd:MVIEW}}. Vt [Ekraani jagamine](topic:split-screen).

### VPVIEW

Ilma lühinimedeta. Ainult lehel.

- `Vali vaateaken` (vahele jäetakse, kui üks on valitud), seejärel mudelil: `Määra kuvatava akna esimene nurk`, `Määra vastasnurk`.

### UCS

Ilma lühinimedeta. Sinu oma koordinaatsüsteem; mitte muutmine. `Määra UCS-i algpunkt [NAmed/OBject/Previous/World/Z/3point] <World>`: punkt on uus algpunkt, seejärel `Määra punkt X-teljel (Enter säilitab nurga)`. `Z`: `Määra pöörde nurk Z-telje ümber <90>`. `3`: algpunkt, punkt positiivsel X-teljel, punkt positiivsel Y-poolel. `OB`: `Vali objekt UCS-i joondamiseks`. `NA`: `[Restore/Save/Delete/?]` ja nimi. Vaade pöördub nii, et uus X-telg on tasane. Vt [Vaate pööramine ja oma koordinaatide kasutamine](topic:ucs-and-turned-view).

### PLAN

Ilma lühinimedeta. `Sisesta valik [Current ucs/Ucs/World] <Current ucs>`: pöörab aktiivse paani vaate nii, et UCS-i X-telg (või maailma oma) on tasane. Joonisel ei liigu midagi.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ilma lühinimedeta; või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Pööra vaadet 90° vasakule}}, {{ui:Pööra vaadet 90° paremale}}, {{ui:Tagasi maailma}}. Sama mis `UCS Z -90`, `UCS Z 90` ja `UCS W`, vaade järgib.

### VPLAYER

Ilma lühinimedeta. Lehel või vaateakna sees. `Sisesta valik [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` küsivad kihtide nimesid (komad, `*` ja `?` jokkmärgid), seejärel `[All/Select/Current] <Current>` vaateaknaid; Reset paneb iga kihi tagasi selle vaikeväärtusele „külmutatud uutes vaateaknates”; `V` seab selle vaikeväärtuse (`[Frozen/Thawed]`), mida kasutab {{cmd:MVIEW}}. `?` loetleb praeguses vaateaknas külmutatud kihid. Kihtide paneeli vaateakna veerg teeb sama ühe vaateakna jaoks. Vt [Kihi külmutamine ühes vaateaknas](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Lühinimed: `MS`; või topeltklõps vaateaknas. Ainult lehel. Töötab mudeliga vaateakna kaudu: see, mis on valitud, või ainuke lehel, või `Click inside the viewport to work in`. Liikumine ja suumimine seal muudab vaateakna vaadet (lukustatud vaade jääb samaks ja leht liigub selle asemel); uus vaade salvestatakse ühe tagasivõtmise sammuna. Vt [Mudeli töötlemine vaateakna kaudu](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Lühinimed: `PS`; või topeltklõps väljaspool vaateakent, või klõps joonise all olevale vahelehele. Tagasi lehele.

### PLOT

Lühinimed: `PRINT`, `PUBLISH`, `EXPORTPDF`; või {{key:Mod+P}}. Avab dialoogi {{ui:Prindi PDF-iks}}. Vt [Prindi PDF-iks](topic:plot-pdf).

### PLOTSTYLES

Lühinimed: `STYLESMANAGER`, `PSTABLES`; või {{ui:Muuda tabeleid…}} dialoogis {{ui:Prindi PDF-iks}}. Avab {{ui:Printimisstiilide tabelid}}: mida iga värv prindib (värv, hall, tint, joonepaksus), hoitakse koos joonisega. Vt [Printimisstiilide tabelid](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} teisaldab objekte lehe ja mudeli vahel vaateakna kaudu, skaleeritult ja pööratult nii, et need näevad teiselt poolt samad välja. Lehel vali objektid ja need lähevad mudelisse (vali vaateaken, kui lehel on mitu). Kui töötad mudeli kallal vaateakna kaudu ({{cmd:MSPACE}}), tulevad valitud objektid lehele. Ütleb, mitu korda suuremaks või väiksemaks nad said. Vaateaknad jäävad oma lehele. Üks tagasivõtmise samm.

### ISODRAFT

{{cmd:ISODRAFT}} lülitab isomeetrilise joonistamise `ON` või `OFF`, või läheb otse tasandile `Left`, `Top` või `Right`. Kui see on sees: Ortho ({{key:F8}}) hoiab jooni piki tasandi kahte telge (vasak: 90° ja 150°; ülemine: 30° ja 150°; parem: 30° ja 90°), polaarjälgimine ({{key:F10}}) järgib samu telgi, haakumine ruudustikule ({{key:F9}}) kasutab isomeetrilist ruudustikku, ja ruudustik ({{key:F7}}) joonistatakse joontega 30°, 90° ja 150°. {{cmd:ELLIPSE}} saab juurde `Isocircle`: anna keskpunkt ja raadius (või `Läbimõõt`) ning see joonistab ellipsi, mida ring näitab praegusel tasandil. Joonis jääb tasaseks: need on abivahendid pildilise vaate joonistamiseks, mitte 3D-mudel. Ssäte kehtib selle seansi jaoks ega salvestu failis.

### ISOPLANE

{{cmd:ISOPLANE}} valib tasandi, millel isomeetriline joonistamine töötab: `Left`, `Top` või `Right`. Enter läheb järgmisele tasandile. Kui isomeetriline joonistamine on sees, teeb {{key:F5}} sama käsu keskel; kui see on väljas, jääb {{key:F5}} brauserile.

## Päringud

### CAL

Prindib arvutuse väärtuse, nagu see loetakse kõikjal, kus pikkus sisestatakse.

- `Avaldis`: sisesta see, näiteks `12'6"+3/4"` või `(24'-0")/3`, ja vajuta {{key:Enter}}. CadCraft prindib `= 12'-6 3/4"   (150.75 joonise ühikut)`. Vt [Aritmeetika sisestatud väärtuses](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Lühinimed: `DI`; või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Mõõda kaugust}}.

- `Määra esimene punkt`, `Määra teine punkt`. Prindib kauguse, nurga, Delta X ja Delta Y.

### AREA

Lühinimed: `AA`; või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Pindala}}. Prindib pindala ja ümbermõõdu.

- `Määra esimene nurgapunkt [Object/Add area/Subtract area] <Object>`
  - Klõpsa või sisesta nurgad; viiba `Määra järgmine punkt (Enter sulgeb) [Undo]` juures vajuta {{key:Enter}}, et kontuur sulgeda. `U` võtab viimase nurga tagasi.
  - {{key:Enter}} või `O`, seejärel `Vali objekt`: ring (prindib ümbermõõdu), ellips, murdjoon (avatud sulgub sirge joonega pindala jaoks, ja selle pikkus prinditakse) või viirutus (augud võetakse ära).
  - `A` (Add area) ja `S` (Subtract area) hoiavad jooksvat summat: viip algab `(ADD mode)` või `(SUBTRACT mode)`, iga pindala lisatakse või võetakse ära ning `Total area = …` prinditakse pärast iga ühte. Neis režiimides `O` valib objekte kuni {{key:Enter}}, ja {{key:Enter}} esimesel viibal lõpetab käsu.

### MEASUREGEOM

Lühinimed: `MEA`. `Sisesta valik [Distance/Radius/Angle/ARea] <Distance>`; pärast iga mõõtmist küsib uuesti, vaikimisi `eXit`.

`Quick` mõõdab osuti ümber, kui liigutad seda: kaugus lähima objektini paremal, üleval, vasakul ja all (mööda praeguse UCS-i telgi), joonistatud sammu kaupa, ja nurk, kus kaks neist naabritest on sirged ja kohtuvad. Klõps kirjutab neli kaugust, selge laiuse ja kõrguse ning nurgad ajalukku; Enter läheb tagasi valikute juurde. See loeb ekraanil olevat.

- `D`: kaks punkti, nagu {{cmd:DIST}}.
- `R`: `Vali kaar või ring`; prindib raadiuse ja läbimõõdu.
- `A`: kaar (selle sisalduv nurk), joon ja seejärel teine joon (nurk nende vahel, nende kaugemate otste suunas), või {{key:Enter}} ja kolm punkti (tipp, seejärel kaks otsa).
- `AR`: nagu {{cmd:AREA}}, üks pindala.

### ID

Ilma lühinimedeta. `Määra punkt`; prindib selle X ja Y.

### LIST

Lühinimed: `LI`, `LS`. `Vali objektid`; prindib iga objekti tüübi, kihi ja peamised mõõdud.

### MASSPROP

{{cmd:MASSPROP}} annab valitud piirkondade ja suletud objektide lõigu omadused, koos võetuna: pindala, ümbermõõt, piirdekast, raskuskese, inertsmomendid X- ja Y-telje suhtes läbi algpunkti, inertsitoode, inertsiraadiused, samad momendid raskuskeskme suhtes ning põhimomendid koos nende telgede suundadega. Piirkonna augud loetakse aukudeks. Arvud on joonise ühikutes ja täpsed kontuuride puhul, mis koosnevad joontest ja kaartest; ellipsid ja splainid mõõdetakse lühikeste sirgete lõikudena, ja see ütleb seda. Pärast aruannet küsib see, kas kirjutada see tekstifaili. Suletud objektid jäetakse välja ja ütleb, mitu.

## Vaade, fail ja muu

### ZOOM

Lühinimed: `Z`.

- `Määra akna nurk, sisesta mõõtkava tegur (nX) [Extents/All/Window/Previous/Scale/Center]`. Klõpsa kaks nurka akna jaoks. `E`, `A` või Enter: kogu joonis.
- `P` (Previous, või {{ui:Eelmine}} tööriistaribal) läheb tagasi eelmisele vaatele, kuni 10 vaateni vahelehe kohta; hulk ratta samme või üks nihe loetakse üheks vaateks.
- Arv nagu `2`, `2x` või `0.5x` (või `S` ja seejärel arv) suumib sisse või välja selle teguriga ekraani keskmise ümber.
- `C` küsib `Määra keskpunkt` ja `Sisesta kõrgus või suurendus (nX)`.

### PDFATTACH, PDFIMPORT ja PDF-käsud

Lühinimed: `PDFATT` käsule {{cmd:PDFATTACH}}, `PDFIM` käsule {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} paneb PDF-lehe joonise alla (fail, leht, sisestuspunkt, mõõtkava, pööre); {{cmd:PDFIMPORT}} muudab lehe jooned, kõverad, täited ja tekst joonise objektideks kihtidel, mis on nimetatud PDF-i järgi, tõelises suuruses, sisestatud mõõtkavas või skaleeritult kahe punkti ja tegeliku kauguse järgi. {{cmd:PDFCLIP}} lõikab alusjoone, {{cmd:PDFADJUST}} seab tuhmumise, kontrasti, monokroomi või lülitab selle välja, {{cmd:PDFLAYERS}} lülitab PDF-i enda kihid, ja {{cmd:PDF}} annab CadCraftile uuesti failid, mida joonise alusjooned kasutavad. Vt [PDF-alusjooned](topic:pdf-underlay).

### AUTOCOMPLETE

Lühinimi: `AUTOC`. Joonise automaatlõpetus: kui ühtegi käsku ei käi, näitab hall vari, mida joonise enda mustrid ütlevad järgmisena tulevat. {{cmd:AUTOCOMPLETE}} lülitab selle `On` või `Off` (samuti Sätted › CadCraft) või `Show`'b, mida see praegu soovitaks. **Tab** joonistab vari ühe tagasivõtmise sammuna, **Esc** peidab selle, kuni joonis muutub. See leiab kolm asja uusimatest objektidest: sama asja järgmise koopia, mis on joonistatud kaks korda või rohkem kindla sammuga (vardad, veerud, trepi tõus ja tallaala), murdjoonest trepi järgmised sammud ja toa või seina ahela puuduva külje. {{cmd:LINE}} või {{cmd:PLINE}} keskel on vari **järgmine punkt**: trepi järgmine samm (tõus, tallaala, tõus…), ristküliku neljas nurk, punkt, mis seda sulgeb, või veel üks võrdne samm. Too kursor selle lähedale ja vajuta **Tab**, nagu oleksid seal klõpsanud; jätka või vajuta Enter. Arvutatud selles arvutis reeglite järgi, ilma mudelita.

### AUTOSHEET

Lühinimi: `ASH`. Lehed, mis paigutavad end ise. {{cmd:AUTOSHEET}} võtab joonise osad (sinu nimetatud vaated, mudeli eraldi osad või kogu mudeli), valib paberi suuruse (või selle, mille annad), annab igale osale standardse mõõtkava (üks kõigile või suurim, mida iga võib võtta) ja paigutab vaated ridadesse uutele lehtedele tiitelploki ja pealdisega (nimi ja mõõtkava) igaühe all. Mis ühele lehele ei mahu, saab oma lehe. Üks tagasivõtmise samm. Arvutatud selles arvutis reeglite järgi, ilma mudelita.

### PHOTOSKETCH

Lühinimi: `PSK`. Foto joonisele. Vali foto (JPEG, PNG või TIFF) käsitsi joonistatud skeemist paberilehel. {{cmd:PHOTOSKETCH}} leiab lehe neli nurka, sirgendab perspektiivi, võtab paberi suuruse, mille nimetad (`Paper` või lähim standardne), ja skeemi `Scale` (1 : n), seejärel joonistab pliiatsijooned joonteks, kaarteks ja ringideks, igale pliiatsivärvile (must, punane, sinine, roheline) oma kihi. Kui ta ei leia paberi serva, võtab ta kogu foto lehena ja ütleb seda. Kirjad jäetakse välja. Üks tagasivõtmise samm. Tehakse selles arvutis klassikalise pilditöötlusega, ilma mudelita, midagi kuhugi saatmata. Vt ka skaneeritud joonise käske.

### AUTODIM

Lühinimi: `ADIM`. Automaatne mõõtmine reeglite järgi. {{cmd:AUTODIM}} mõõdab valitud objekte (või kogu joonist) nende taseme- ja vertikaalservade järgi: mõõtmeahel valitud külgede (`Sides`) kaupa, üks üldmõõt selle taga, iga ava laius (vahe kollineaarsete seinajoonte vahel), aukude iga suuruse läbimõõt ning `Grid` korral ruudustiku joonte vahe. Mõõt, mis on juba olemas, ei tehta uuesti. Üks tagasivõtmise samm. Arvutatud selles arvutis reeglite järgi, ilma mudelita.

### GRIDMOVE

Lühinimi: `GM`. Ruudustiku joone liigutamine viib kaasa terviku. {{cmd:GRIDMOVE}} liigutab ruudustiku joont (joont, mis on kihil, mille nimi ütleb grid või axis) ja seda, mis selle küljes rippub: seinad, mille ots on joonel, venivad selle järgi, selle joone kohal olevad seinad liiguvad tervikuna, veerud (plokiviited ja joonel olevad ringid), selle mull ja silt liiguvad, ja mõõtmed, mille punktid on joonel, mõõdavad uut vahet. Anna kaks punkti (arvestatakse ainult joone üle jäävat osa) või `Distance`. Üks tagasivõtmise samm võtab kõik tagasi. Tehakse reeglite järgi selles arvutis.

### DETAILS

Lühinimi: `DET`. Detailid, mis leiavad sind. {{cmd:DETAILS}} hoiab sinu firma enda detaile: `Add` paneb joonise ploki nimekirja, `List` ja `Remove` haldavad seda, `Find` järjestab need valitu jaoks (või selle järgi, mida viimati joonistasid) selle järgi, millised sõnad on selle kihtidel, ploki nimedes, viirutuse mustrites ja märkmetes, võrreldes iga detaili nime ja märkmetega, nii et aknapealne leiab sinu aknalaua pleki. Vali number ja punkt, et see paigutada. Kui `Hint` on sees (ka Sätted › CadCraft), valides midagi, mida detail sobitab, ilmub olekuribale üks rida. Nimekiri hoitakse selles brauseris, selles arvutis, ja otsitakse just seda nimekirja. `Share` paneb selle ka sinu Dokumentide kausta (`.cadcraft/firm-details.json`, koos iga ploki joonisega): `Pull` lisab, mis su meeskonnal on ja sul puudub, `Push` lisab, mis sul on ja neil puudub, `Both` teeb mõlemat, ja midagi ei eemaldata kummaltki poolt. Ava enne Dokumentide kaust ({{cmd:DOCUMENTS}}); kui see kaust on Team Cloud Plan kaust, jagab kogu meeskond ühte nimekirja. Detailiüksusel teegi paneelis on nupp **Lisa minu firma detailidesse**, mis paneb selle samasse nimekirja. Tehakse selles arvutis sõnade järgi, ilma mudelita.

### SKETCHFIX

Lühinimi: `SKF`. Pliiatsivisandid saavad täpseks geomeetriaks. Vajuta ja lohista üks vabakäe joon korraga (pliiats, hiir või sõrm), seejärel Enter. Iga joon loetakse joonena, ringina, kaarena, ristkülikuna või murdjoonena: peaaegu tasased ja vertikaalsed read tehakse täpselt tasaseks ja vertikaalseks, suletud ümmargune joon muutub ringiks, suletud joon nelja täisnurkse nurgaga ristkülikuks, ja joonte otsad tõmbuvad kokku ja joonisel juba olevate otste peale. Üks tagasivõtmise samm. Tehakse selles arvutis reeglite järgi, ilma mudelita.

### SCANATTACH ja skaneeritud joonise käsud

Lühinimed: `SCA` käsule {{cmd:SCANATTACH}}, `SCS` käsule {{cmd:SCANSCALE}}, `SCL` käsule {{cmd:SCANALIGN}}, `SCD` käsule {{cmd:SCANDESKEW}}, `SCC` käsule {{cmd:SCANCLEAN}}, `SCR` käsule {{cmd:SCANCROP}}, `SCE` käsule {{cmd:SCANERASE}}, `SCT` käsule {{cmd:SCANTRACE}}, `SCI` käsule {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}}-il lühinime pole. Nad töötavad pildil, igaüks üks tagasivõtmise samm. {{cmd:SCANATTACH}} paigutab PNG, JPEG, TIFF (üks või kõik lehed) või PDF-lehe, mis on pilt. {{cmd:SCANSCALE}} skaleerib lehe kahe valitud punkti ja tegeliku kauguse järgi. {{cmd:SCANALIGN}} teisaldab ja pöörab selle kahele punktile (`Scale the sheet to fit` Jah/Ei). {{cmd:SCANDESKEW}} näitab lehe pikkade joonte nurka ja pöörab lehe, kui sa `Accept` või annad `Value`. {{cmd:SCANCLEAN}} teeb sellest mustvalge (`Threshold` Auto/Adaptive/Level, `Specks`) ja `Run`. {{cmd:SCANCROP}} jätab alles akna. {{cmd:SCANERASE}} kustutab `Rectangle`, `Polygon` või `Lasso`. {{cmd:SCANTRACE}} joonistab jooned ja kaared uuele kihile (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) ja teatab, mida leidis ja mida jättis rasterina. {{cmd:SCANINFO}} loetleb algfaili ja sammud. {{cmd:RASTERSNAP}} lülitab haakumise skannitud lehtede joontele sisse või välja. Vt teemat Skaneeritud joonised ja jälgimine.

### REGEN ja REGENALL

Lühinimed: `RE` käsule {{cmd:REGEN}}, `REA` käsule {{cmd:REGENALL}}. Ehitab uuesti ekraanil joonistatud asjad joonisest: {{cmd:REGEN}} vahelehe, mida vaatad (lehel ka mudeli, mida selle vaateaknad näitavad), {{cmd:REGENALL}} kõik vahelehed, kõik jagatud ekraani paanid ja kõik avatud joonised. Kasuta neid, kui pilt tundub vananenud pärast skriptitud või väga suurt muudatust või kui assistent muutis joonist; joonist endat ei puututa, seega pole midagi tagasi võtta.

### NAMEDVIEW

Lühinimed: `NV`, `VIEWS`. `Sisesta valik [?/Restore/Save/Window/Delete] <Restore>`, seejärel vaate nimi. `S` salvestab ekraanil oleva vaate, `W` akna, mille valid, `R` näitab salvestatud vaadet, `D` kustutab ühe, `?` loetleb selle vahelehe vaated. Olemasoleva nime all salvestamine asendab selle; iga muudatus on üks tagasivõtmise samm. Vaated kuuluvad vahelehele, millel need salvestati. DWG- ja DXF-failid säilitavad need (VIEW tabel); lehe vaated tulevad tagasi esimesele lehele, kuna fail ei ütle, millisele.

### UNDO ja REDO

Lühinimed: `U` käsule {{cmd:UNDO}}; {{cmd:REDO}}-l lühinime pole. Samuti {{key:Mod+Z}} ja {{key:Mod+Y}}.

### LAYER

Lühinimed: `LA`. Hüppab paneelile {{ui:Kihid}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Sisesta uutele objektidele joonetüüp` — `ByLayer`, `ByBlock` või nimi (`?` loetleb need: Continuous, joonise enda omad ning DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE koos nende suurustega `2` (pool) ja `X2` (kaks korda)). {{cmd:LWEIGHT}} (`LW`): uute objektide joonepaksus mm-des või `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): joonise joonetüübi mõõtkava (tagasivõetav). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — sama mis nupp {{ui:LWT}} olekuribal. Vt [Joonepaksused ja joonetüübid](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Sisesta ümbernimetatava objekti tüüp [LAyer/Block]`, `Sisesta vana nimi`, seejärel uus nimi; objektid või viited järgivad. {{cmd:LAYMRG}}: `Vali objekt kihil, mida ühendada, või [Name]` kuni {{key:Enter}}, seejärel `Vali objekt sihtkihil või [Name]` ja `Y`. {{cmd:LAYDEL}}: `Vali objekt kihil, mida kustutada, või [Name]`, seejärel `Y`: kiht ja kõik sellel olevad objektid lähevad (mitte kiht 0, DEFPOINTS ega praegune kiht). Üks tagasivõtmise samm igaühe jaoks. Vt [Joonise korrastamine kihtidega](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Kihid objekte valides; ka paneeli {{ui:Kihid}} menüüs {{ui:Tööriistad}}. {{cmd:LAYISO}}: `Vali objektid isoleeritaval kihil (kihtidel)`, seejärel {{key:Enter}}: kõik muud kihid lähevad välja. {{cmd:LAYUNISO}} lülitab need tagasi sisse. {{cmd:LAYOFF}} ja {{cmd:LAYFRZ}}: `Vali objekt kihil, mis lülitatakse välja` (või külmutatakse), korduvalt; `U` võtab viimase tagasi, {{key:Enter}} lõpetab. {{cmd:LAYMCUR}}: `Vali objekt, mille kiht saab praeguseks`. {{cmd:LAYON}} lülitab kõik kihid sisse, {{cmd:LAYTHW}} sulatab kõik kihid. Iga käsk on üks tagasivõtmise samm. Vt [Joonise korrastamine kihtidega](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} alustab tühja joonist ja {{cmd:OPEN}} avab DWG või DXF, kumbki omal vahelehel joonise kohal (kasutamata uut joonist kasutatakse uue vahelehe asemel). Vahelehe sulgemisel salvestamata muudatustega küsitakse kõigepealt. Vt [Ekraani jagamine](topic:split-screen).

{{cmd:SAVE}} (lühinimi `QSAVE`, ka {{key:Mod+S}}) laadib alla koopia joonise vormingus: DWG, kui see avati DWG-st, DXF, kui DXF-st. Uus joonis kasutab viimati valitud vormingut käsus Salvesta nimega selles brauseris, muidu DWG.

{{cmd:SAVEAS}} (ka {{key:Mod+Shift+S}}) avab dialoogi {{ui:Salvesta koopia nimega}}: vali {{ui:DWG}} (ja selle {{ui:Versioon}}), {{ui:DXF R12}} või {{ui:DXF 2000}}, seejärel {{ui:Salvesta}}. Valik jääb sellele joonisele ja uutele joonistele selles brauseris.

{{cmd:DXFOUT}} laadib alati alla DXF R12 koopia, muutmata vormingut, mida {{cmd:SAVE}} kasutab.

Vt [Failid: mis avatakse, mis salvestatakse](topic:files#saving).

### TOUR

Lühinimed: `TUTORIAL`. Käivitab kuuesammulise esimese joonise ekskursiooni uuesti. Vt [Alustamine](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Lühinimed: `TBDOCK`. `Tööriistariba asukoht [Top/Bottom/Left/Right]`. Vt [Sätted](topic:settings#toolbar-position).

### COMMANDLINE

Lühinimed: `CMDLINE`. `Käsurida [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: kinnitab või ujutab käsurea, teeb selle üherealiseks, küsib, mitu ajaloo rida näidata (0 kuni 12), või avab ajaloo. Vt [Sätted](topic:settings#command-line).

### TOPAREA

`Ülemine riba [Standard/Compact]`: ribad joonise kohal nagu nad olid või kompaktsed. Vt [Sätted](topic:settings#top-area).

### POLARANG

`Sisesta polaarnurga samm kraadides <90>`: samm, mille kohta {{ui:Polaar}} jälgimisjooned joonduvad (rohkem kui 0, kuni 180). Jääb selles brauseris meelde.

### UNITS

Lühinimed: `UN`. Kuidas pikkusi kirjutatakse ja sisestatakse.

- `Sisesta pikkuse vorming [Scientific/Decimal/Engineering/Architectural/Fractional] <praegune>`
- Arhitektuuriline ja murdarv: `Sisesta väikseima kuvatava murdosa nimetaja (1, 2, 4, 8, 16, 32, 64, 128 või 256)`. Teised: `Sisesta kümnendkohtade arv (0 kuni 8)`.

Uued mõõdud järgivad seda. Üks tagasivõtmise samm. Sama mis {{ui:Pikkuse vorming}} ja {{ui:Täpsus}} rühmas {{ui:Praegused sätted}}; vt [Jalad ja tollid](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Lühinimed: `GDS`. Vaata IC-paigutust (GDSII voogfail): labori katse, ainult vaatamiseks ja mõõtmiseks.

- Failivalija võtab `.gds` faili; mitme ülemise lahtri korral `Sisesta joonistatav ülemine lahter`.
- Iga kiht ja andmetüüp muutub joonise kihiks (`GDS 1`, `GDS 2/5`), viited ja massiivid paigutatakse lamedalt, failis oleva kasutajaühiku järgi (tavaliselt mikromeetrid). Üks tagasivõtmise samm. Midagi ei simuleerita ega kontrollita ja faili ei kirjutata tagasi.

### DIAGRAM

Lühinimed: `TEXTDIAGRAM`, `T2D`. Diagramm tekstist.

- Kast võtab teksti (või ühe rea, kus käsureal on `;` lausete vahel): Mermaid-voodiagramm, PlantUML komponendidiagramm, D2 või alustest-lõpetani loend.
- `Määra diagrammi ülemine vasak nurk`, seejärel `Määra teksti kõrgus`.

Plokid ja ühendused on tavalised objektid kihil `Diagram`, valitud, kui see lõpeb. Üks tagasivõtmise samm. Vt [Diagrammi joonistamine tekstist](topic:text-to-diagram).

### OLELIST

Lühinimed: `OLES`. OLE-objektid, mida DWG kannab ja mida CadCraft ise paigutada ei saa.

- Loetleb igaühe: number, tüüp, suurus, kas ta salvestas pildi.
- `Sisesta valik [Place/eXit] <eXit>`: Place küsib numbri, vasaku alumise nurga ja laiuse ning joonistab raami pildiga. Üks tagasivõtmise samm; hoitud objekti ei muudeta. Vt [Pildid](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Lühinimed: `SHX`. Sinu enda SHX-fondid.

- `Sisesta SHX-fondi valik [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Kaust}} loeb iga `.shx` faili kaustast (CadCraft Studio; iga käivituse alguses uuesti), {{ui:Failid}} võtab valitud failid (brauser), {{ui:Pööra}} paigutab ühe fondi tähed viimasest esimeseni. Tekstistiilid, mis nimetavad laetud fonti, joonistavad selles. Vt [Joonista teksti oma SHX-fontidega](topic:shx-fonts).

### LIMITS

Kui suur joonis peaks olema.

- `Määra alumine vasak nurk või [ON/OFF] <praegune>`: punkt, `ON` või `OFF`.
- `Määra ülemine parem nurk <praegune>`.

Ruudustik täidab piirid, {{cmd:ZOOM}} All näitab neid, ja kui piirid on ON, lükatakse väljaspool olev punkt tagasi (`**Outside limits`). Üks tagasivõtmise samm; salvestatakse DWG- ja DXF-failis. Vt [Joonise piiride määramine](topic:drawing-limits).

### AUNITS

Lühinimed: `ANGUNITS`. Kuidas nurki näidatakse ja sisestatakse.

- `Sisesta nurga vorming [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <praegune>`
- `Sisesta kümnendkohtade arv (0 kuni 8)`, või kahe teise korral `Sisesta täpsus` (0 kraadi, 2 minutit, 4 sekundit, 5 kuni 8 kümnendkohta sekundile).

Üks tagasivõtmise samm; salvestatakse DWG- ja DXF-failis. Sama mis {{ui:Nurga vorming}} rühmas {{ui:Praegused sätted}}. Vt [Suundade ja nurkade sisestamine ja näitamine](topic:bearings-and-angles).

### APPLOAD

Lühinimed: `AP`; või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Laadi rakendus…}}. Dialoog {{ui:Laadi rakendused}}: laadi `.lsp` rutiine ja `.dcl` dialoogifaile, tühista nende laadimine, laadi need uuesti ajaloost, ja käivitussviit. Rutiini `(defun c:NAME …)` käsud töötavad siis nagu iga teine. Vt [Rakenduste laadimine](topic:load-applications) ja [LISP-rutiinide käivitamine](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Muuda aliaseid…}}) avab sinu lühinimede faili (read `ALIAS, *COMMAND`); {{ui:Salvesta}} rakendab selle. {{cmd:REINIT}} rakendab selle uuesti. Vt [Käskude lühinimede muutmine](topic:command-aliases).

### LISPEDIT

Lühinimed: `VLIDE`; või {{ui:Vaade}} › {{ui:Veel}} › {{ui:LISP-redaktor}}. Avab LISP-redaktori, akna, mis jääb joonise kõrvale lahti.

- Tekst: reanumbrid, kursori juures oleva sulu vaste märgitud (punane, kui vastet pole), {{key:Enter}} taandab uue rea avatud sulu alla, {{key:Tab}} kirjutab kaks tühikut, {{key:Esc}} lahkub tekstist.
- {{ui:Laadi jooniseisse}} ({{key:Ctrl+Shift+Enter}}): loeb iga vormi, nagu {{cmd:APPLOAD}} teeb failiga, ja teeb selle `c:` käsud. Fail ilmub {{cmd:APPLOAD}} loendisse.
- {{ui:Käivita valik}} ({{key:Ctrl+Enter}}): hindab valitud vorme või vormi, kus kursor on.
- {{ui:Peata}}: lõpetab töötava rutiini.
- {{ui:Konsool}}: mida rutiin printis ja iga viga koos reaga; klõpsa vea peale, et sinna minna. Tekst käivitatakse ühe kõige ülemise vormi kaupa, nii et rida on vormi oma või selle sees see rida, mis kutsub veaga nimetatud funktsiooni.
- {{ui:Uus}}, {{ui:Ava}}, {{ui:Salvesta}} ({{key:Ctrl+S}}): `.lsp`-fail. Tekst hoitakse ka selles brauseris, nii et akna sulgemine ei kaota seda.
- Teksti kõrval: funktsioonid, mida rutiin defineerib, need, mida ta kutsub ja mida see LISP veel ei oma, need, mida ta kutsub ja mis pole defineeritud selles ega sisseehitatud, ning täielikud loendid sellest, mis on sisse ehitatud ja mis mitte.

Tekst, millel on sulg, mis pole kunagi suletud, või string, mis ei lõpe kunagi, ei käivitu: rida nimetatakse. Samm-sammulist silurit, murdepunkte ega jälgimisakent ei ole. Vt [LISP-rutiinide käivitamine](topic:run-lisp).

### HELP

Lühinimed: `?`. Prindib iga käsu, selle lühinimed ja ühe rea kirjelduse käsurea ajalukku. See ei ava seda abi: selle jaoks vajuta {{key:F1}} või klõpsa {{ui:Abi}}.

## Objektide valimise viip

Igal viibal `Vali objektid`: klõpsa objekte, joonista aknad (vasakult paremale) ja ristuvad aknad (paremalt vasakule) kahe klõpsuga, või vajuta ja lohista lassot ({{key:Space}} lohistamise ajal: aken, ristuv, piire), {{key:Shift}}+klõps eemaldamiseks, ja vajuta {{key:Enter}} lõpetamiseks. Võid sisestada ka `ALL` (kõik), `L` (viimane objekt), `P` (Previous: mida viimane käsk kasutas), `F` (Fence: objektid, mida punktide joon ristub; `U` võtab punkti tagasi), `W` (Window), `C` (Crossing), `R` (Remove režiim: valikud eemaldavad objekte; viip ütleb `Remove objects`) ja `A` (Add uuesti). `?` loetleb need. Neid ei näidata viibas. {{key:Tab}} kattuvate objektide peal tõstab esile järgmise; klõpsa, et see valida. Vt [Objektide valimine](topic:select-objects).

### ACCESS

Lühinimi: `AX`. Joonistamine ilma nägemiseta. {{cmd:ACCESS}} lülitab juurdepääsu sisse või välja (`On`, `Off`) ning lülitab haakumise helid (`Sound`) ja kõnekäsud (`Voice`); ta ütleb kõigepealt oleku. Kui juurdepääs on sees, öeldakse iga käsk ja tulemus ekraanilugeja kaudu ette ja joonistusalal on klaviatuuri kursor. Abiteemas „Joonistamine ilma nägemiseta” on klahvid.

### DESCRIBE

Lühinimi: `DESC`. Ütle, mis joonisel on: mitu objekti, mis liiki, kui suured, mitu kihti, mis on valitud. Ainult loeb; ei muuda midagi.

### WHEREAMI

Lühinimi: `WHERE`. Ütle, kus kursor on, joonise ühikutes.

### NEARBY

Ütle, mis on kursori lähedal, lähim esimesena, igaüks koos oma kauguse ja poolega.

### SAYSEL

Ütle, mis on valitud, üks lause objekti kohta (joone pikkus, otsad ja nurk; ringi raadius ja keskpunkt; tekst nagu kirjutatud).

### VOICE

Lülita kõnekäsud sisse või välja. Need tuvastatakse selles arvutis; kus brauser seda ei suuda, jääb hääl välja, kui sa ei vali Sätetes brauseri veebiteenust.

### TOUCHCROSSHAIR

Lühinimi: `TCX`. Nihutatud ristkursor sõrmega joonistamiseks, nii et sõrmeots ei kata punkti, mille valid. Kui see on sees, ei vali üks sõrm joonisel midagi: see liigutab ristkursorit, mis asub sõrme kohal ja ühel küljel. Haakumised ja jälgimine järgivad ristkursorit. Sõrme tõstmine ei vali midagi ja jätab ristkursori sinna. Valimiseks vajuta nuppu {{ui:Klõps}} joonise nurgas või puuduta joonist teise sõrmega. Hoia {{ui:Klõps}} all, kui liigutad teist sõrme, et lohistada (valikuaken, lasso, haarang). Sõrm, mida hoitakse paigal pikalt, või nupp {{ui:Enter}} on Enter. Kaks sõrme nihutavad ja suumivad nagu varem. Alumise serva ja kauge külje lähedal tõmbub ristkursor sõrme poole, nii et joonise iga osa on kättesaadav. Pliiats ja hiir valivad alati otse.

{{cmd:TOUCHCROSSHAIR}} ütleb oleku ja küsib `ON`, `OFF`, `Auto` (sees ainult seal, kus sõrm on ainus osuti, nii et arvutis hiirega on see väljas), `Distance` (kui kaugel ristkursor sõrmest on, 24 kuni 240 pikslit) või `Side` (`Left`: üles ja vasakule, paremakäele; `Right` vasakukäele; nupud liiguvad teise nurka). Samad valikud on Sätetes › CadCraft, ja puuteekraaniga seadmel on olekuribal lüliti {{ui:Nihutatud ristkursor}}. Valikud jäävad selles brauseris meelde.

### WHOHAS

Ütleb, kes on joonise avanud. CadCraft Studios arvutis kirjutab DWG või DXF avamine selle kõrvale väikese lukufaili (`Plan.dwg.cclock`: kes, alates millal, milline versioon), värskendab seda iga minut, kuni joonis on avatud, ja eemaldab selle joonise sulgemisel. Teise inimese avatud joonise avamine ütleb, kes ja alates millal, ja pakub {{ui:Ava kirjutuskaitstult}} (salvestamine küsib siis uut nime), {{ui:Ava ikkagi}} (teine inimene teatatakse tema järgmisel värskendusel) või {{ui:Loobu}}. Teise inimese avatud failile salvestamine küsib kõigepealt. Lukku, mida viie minuti jooksul ei ole värskendatud, nimetatakse vananenuks: teine koopia suleti salvestamata või arvuti magab.

{{cmd:WHOHAS}} küsib `Current` (avatud joonis), `File` (vali üks), `FOlder` (vali kaust: iga selles olev joonis, mis on kuskil avatud, loetletakse), `Path` (sisesta täielik tee) või `Name` (nimi, mida teised näevad; sinu konto nimi, kui oled sisse logitud). Studio pääseb ligi ainult kaustadele, mille oled valinud: joonisele, mis on avatud kaustast, mida kunagi ei valitud, ütleb see korra, et ta ei saa joonist avatuna märkida; `FOlder` valib kausta, ja lukud töötavad seal edaspidi. Lukk on märge inimestele, mitte tõke: teine programm võib faili siiski kirjutada. Brauseris ei ole kaustu, mida vaadata, ja käsk ütleb seda.

### OVERKILL

Kustutab topeltobjektid ja korrastab kattuvaid jooni ja kaari, joonistele, mis tulevad topelt joonistega. `Vali objektid puhastamiseks`, {{key:Enter}}, seejärel veel kord {{key:Enter}}, et puhastada näidatud sätetega, või muuda kõigepealt üht:

- `Tolerance`: kui lähedal peavad kaks koordinaati olema, et loeksid samaks (algseadena 0,000001; 0 tähendab täpselt sama).
- `Ignore`: omadused, mis võivad kahel muidu samal objektil erineda. Sisesta nimi, et see lülitada: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency` või `None` / `All`. {{key:Enter}}, kui valmis.
- `Overlap`: sees või väljas. Kui sees, muutuvad kattuvad jooned ühel sirgel üheks joonaks (joon, mis asub teise sees, kustutatakse lihtsalt), ja kattuvad kaared ühel ringil muutuvad üheks kaareks; kaared, mis moodustavad täieliku pöörde, muutuvad ringiks ja ringil asuv kaar kustutatakse.
- `Ends`: sees või väljas. Kui sees, muutuvad ühel sirgel olevad jooned ja ühel ringil olevad kaared, mis puudutavad ainult ots-otsaga, üheks tükiks.

Iga objektitüüp kontrollitakse topeltide suhtes: kaks objekti on topelt, kui nende geomeetria on sama tolerantsi piires ja nende kiht, värv, joonetüüp, joonetüübi mõõtkava, joonepaksus, paksus, läbipaistvus ja kõrgus ühtivad (vähem need, mida ignoreerid). Jooned ja avatud murdjooned sobivad ka siis, kui on joonistatud vastupidi. Esimene objekt joonistusjärjekorras jääb alles ja säilitab oma omadused. Käsk teatab, mitu objekti kontrolliti ja kustutati: topeltid, kokkuliidetud kattuvad tükid, ots-otsa ühendatud tükid. Üks {{cmd:UNDO}} võtab kõik tagasi. Sätted kehtivad seni, kuni joonise aken suletakse.

Ta jätab rahule: lukustatud kihtidel olevad objektid ja peidetud objektid. Ta ei ühenda jooni, millel on kõrgus (Z) (täpsed nende topelt läbivad siiski), ega puuduta lõike murdjoone sees (neid ei õhendata), murdjoone lõigul asuvat joont ega vastupidi joonistatud suletud murdjoont.

### DRAWORDER

Muudab, millised objektid on ees joonistatud. `Vali objektid järjestamiseks`, {{key:Enter}}, seejärel `Above objects`, `Under objects`, `Front` või `Back` ({{key:Enter}} = `Back`). `Above objects` ja `Under objects` küsivad viiteobjekte: valik läheb vahetult kõige esimese neist ette või kõige tagumise taha. Valitud objektid säilitavad oma järjekorra omavahel. Üks tagasivõtmise samm. Järjekord salvestatakse joonisega DWG- ja DXF-failis, kus see on järjekord, milles objektid kirjutatakse.

Ekraanil joonistab CadCraft kõigepealt täidetud alad (tahked viirutused, laiad murdjooned, maskid), siis jooned, siis teksti, nii et tekst loetakse alati täite peal; joonistusjärjekord näitab täidetud objektide ja piltide seas. Teised programmid, mis faili avavad, joonistavad iga objekti salvestatud järjekorras.

### TEXTTOFRONT

Toob kogu teksti, mõõtmed ja juhtjooned avatud ruumis kõige ette: `Text`, `Dimensions`, `Leaders` või `All` ({{key:Enter}} = `All`). Üks tagasivõtmise samm. Teatatakse, kui midagi pole, või kui need on juba ees.

### HATCHTOBACK

Saadab kõik avatud ruumi viirutused kõige taha, nii et täited ei kata enam jooni ja teksti salvestatud failis. Küsimusi ei ole. Üks tagasivõtmise samm.

### ISOLATEOBJECTS

Lühinimi: `ISOLATE`. Näitab ainult valitud objekte: kõik muu avatud ruumis läheb nähtavuse alt ära kuni {{cmd:UNISOLATEOBJECTS}}. Erinevalt {{cmd:LAYISO}}-st töötab see objektidega, mille valid, sõltumata nende kihtidest, ja ei muuda ühtegi kihti. Peidetud objekte ei joonistata, ei valita, ei haakuta nendele, ei suumita nende peale ega printita, ja käsud, mis võtavad `ALL`, neist mööda. Mida joonistad isoleeritud objektide ajal, näidatakse tavapäraselt.

See on ainult selleks seansiks: sellest ei salvestata midagi joonisega, see ei ole tagasivõtmise samm ja joonise uuesti avamisel näidatakse kõike. Kui objektid on peidetud, näitab olekuriba nuppu nende arvuga; klõpsa seda, et need uuesti näidata.

### HIDEOBJECTS

Peidab valitud objektid kuni {{cmd:UNISOLATEOBJECTS}}. Samad reeglid mis {{cmd:ISOLATEOBJECTS}}-il: ainult selle seansi jaoks, ei salvestata, ei ole tagasivõtmise samm.

### UNISOLATEOBJECTS

Lühinimed: `UNISOLATE`, `UNHIDE`. Näitab uuesti kõiki objekte, mille {{cmd:ISOLATEOBJECTS}} või {{cmd:HIDEOBJECTS}} peitis, ja ütleb, mitu tuli tagasi.

### LAYLOCKFADE

Määrab, kuidas lukustatud kihtidel olevad objektid välja näevad ja kas klõps neile ulatub. See ütleb praeguse oleku ja võtab:

- arvu 0 kuni 90: tuhmumise määr protsentides (algseadena 50). 0 lülitab tuhmumise välja.
- `ON` või `OFF`: tuhmumine sisse või välja, määr jääb alles.
- `Pick`, seejärel `Yes` või `No`: kas klõps võib valida lukustatud kihtidel olevaid objekte, kui ükski käsk ei käi? `No` (algseade): neid ei saa üldse valida. `Yes`: klõps või aken valib need, et {{ui:Omadused}} saaks neid näidata; neid ei saa siiski muuta, ja käsu enda `Vali objektid` ei võta neid kunagi.

Objektihaakumised leiavad lukustatud kihtidel olevaid objekte igal juhul. Prindid ei tuhmu kunagi. Need kaks sätet on sinu, mitte joonise omad, ja need on ka {{ui:Sätted}} all rühmas {{ui:Lukustatud kihid}}.

### BURST

Lõhub plokiviited ja säilitab, mida nende atribuudid ütlevad. `Vali lõhutavad plokiviited`, {{key:Enter}}: iga viide asendatakse ploki objektidega, ja iga nähtava atribuudi väärtus muutub lihtsaks tekstiks selle atribuudi enda kihil (atribuut kihil 0 läheb viite kihile, nagu ploki muud objektid kihil 0). Nähtamatud atribuudid kustutatakse. Plokk plokis jääb plokiviiteks. Üks tagasivõtmise samm; see teatab lõhutud viited ja atribuutide väärtused, mis muudeti tekstiks.

Keeldub lingitud joonisest nime järgi (seo see enne või kopeeri sealt {{cmd:NCOPY}}-ga) ja jätab teised valitud objektid rahule. Plokiviidete puhul annab {{cmd:EXPLODE}} samad objektid; {{cmd:BURST}} võtab ainult plokiviited ja loeb atribuutide teksti.

### TXT2MTXT

Lühinimi: `T2M`. Ühendab üherealised tekstid üheks lõiketekstiks. `Vali ühendatav üherealine tekst`, {{key:Enter}}, seejärel `Paragraph` (read jooksevad kokku ja murduvad laima rea laiuse järgi) või `Lines` (iga tekst jääb oma reaks); {{key:Enter}} võtab viimati kasutatud. Read on järjestatud ülevalt alla, seejärel vasakult paremale, mööda ülemise teksti suunda. Lõige ripub ülemise teksti vasakust ülanurgast ja võtab selle kõrguse, pöörde, stiili, kihi ja värvi. Üks tagasivõtmise samm.

Teksti, mis on juba lõiketekst, tühja teksti ja teisi objekte valikus jäetakse rahule, ja käsk ütleb, mitu.

### NCOPY

Kopeerib objekte plokiviitest või lingitud joonisest joonisesse, midagi lõhkumata. `Vali objekt plokiviite või lingitud joonise seest`: objekt, mis on valikule lähim, kopeeritakse sinna, kus see näitub, sõltumata sellest, kui sügaval plokkides ta on; vali rohkem, seejärel {{key:Enter}}. Järgmine `Baaspunkt koopiate teisaldamiseks`: {{key:Enter}} jätab need paigale, või anna baaspunkt ja teine punkt. Kogu käsk on üks tagasivõtmise samm.

Koopia võtab kihi, millel see näitub: objekt kihil 0 plokis läheb viite kihile, kus ta asus, ja ByBlock-värv muutub selle viite värviks. Lingitud joonisest muutub kiht `Plan|Walls` kihiks `Plan$0$Walls` (nimi, mille link talle annab), tehtud lingitud kihi värvi, joonetüübi ja joonepaksusega. Atribuudi väärtus kopeeritakse tekstina. Lukustatud kihtidel olevaid plokiviiteid ei saa valida.

### FLATTEN

Määrab valitud objektide kõrguse (Z) ja paksuse 0-ks. `Vali objektid lamestamiseks`, {{key:Enter}}. Lamestab ka objektid plokimääratlustes, mida valik kasutab (ja plokid nende sees), nii et iga viide nendele plokkidele muutub; lingitud jooniseid jäetakse nagu on. Üks tagasivõtmise samm; see teatab, mitu objekti muutus, ja ütleb seda, kui ükski polnud kõrgusega või paksusega.

Mida CadCraft hoiab kolmandast mõõtmest 2D-joonises, on: kõrgus ringidel, kaartel, ellipsitel, punktidel, tekstil, plokiviidetel, viirutustel, juhtjoontel ja murdjoontel (nende kõrgus), kõrgus iga joone igas otsas ja paksus joontel, ringidel, kaartel, murdjoontel, punktidel ja tekstil, nagu fail neid sisaldas. {{cmd:FLATTEN}} puhastab täpselt need. See ei puuduta 3D-mudelit 3D-vahelehel, 3D-tahke pindu ega tahkisi, ja objekt, mis oli joonistatud kaldus tasandis, toodi joonistustasandisse juba faili avamisel.

### BREAKLINE

Joonistab joone murdesümboliga, vaate jaoks, mis on lühendatud. See ütleb praeguse suuruse ja ulatuse, seejärel `First point of the break line` (või `Size` / `Extension`, et need enne muuta), `Second point` ja `Where the break symbol sits`: klõpsa mööda joont või {{key:Enter}} keskele. Tulemuseks on üks murdjoon praegusel kihil: joon, mis ulatub iga punkti taha ulatuse võrra, koos Z-kujulise joonega, mis on suuruse kõrgune ja poole nii pikk.

`Size` ja `Extension` jäävad meelde sinu sätetena (suurus algab kahekordsest mõõtme teksti kõrgusest korrutatuna mõõtme mõõtkavaga; ulatus poole suurusest). {{key:Enter}} kordab käsku.

### AUDIT

Kontrollib avatud joonist kahjustuste suhtes ja parandab selle. {{cmd:AUDIT}} vaatab iga objekti mudelis, lehtedel ja plokkides ning kihtide tabelit, ja loetleb leitu liigi järgi:

- arvud, mis ei ole lõplikud või on naeruväärselt suured;
- objektid ilma suuruseta: nullpikkusega joon, nullraadiusega ring, murdjoon ühe kohaga, tekst ilma tähtedeta või kõrguseta, nullmõõtkavaga plokiviide;
- objektid kihil, mida joonisel pole; viited plokile, mida pole; tekstide ja mõõtude stiilide nimed ning joonetüüpide nimed, mida joonisel pole;
- plokid, mis sisaldavad iseend, otse või teiste plokkide kaudu;
- objektid, mis jagavad ID-d, võtit või failiviidet;
- mõõtmed ilma punktideta, millest neid mõõdetakse, ja viirutused, mille piirjoon ei ole suletud kontuur.

Seejärel küsib see `Fix them? [Yes/No]`. `No` ei muuda midagi. `Yes` parandab kõik ühe tagasivõtmise sammuga: see, mida ei saa joonistada, eemaldatakse (valed arvud, puuduv suurus, puuduv plokk, katkine mõõt, viirutus ilma kasutatava piirjooneta, viide, mis sulgeb plokkide ringi); puuduv kiht tehakse; tundmatud stiilide ja joonetüüpide nimed läheb tagasi vaikeväärtustele; jagatud võti asendatakse. See prindib, mitu objekti eemaldati ja mitu parandati. Samad leiud ilmuvad paneelil Probleemid, igaühel oma {{ui:Paranda}}.

See ei keeldu millestki, kuid kontrollib ainult seda, mida CadCraft ise joonistab: teistele programmidele hoitud andmeid (3D-tahkised, OLE-objektid) ei avata.

### RECOVER

Avab kahjustatud DXF või DWG. {{cmd:RECOVER}} küsib faili, loeb, mis loetav on, selle asemel et faili tagasi lükata, loetleb, mida vahele jäeti või eeldati, seejärel kontrollib ja parandab joonist nagu {{cmd:AUDIT}} teeb valikuga `Yes`.

- DXF: read, mis ei ole koodi- ja väärtuspaari osa, jäetakse vahele, kuni paarid taas joonduvad; lõputa lõiketa lõik suletakse; fail, mis on katki, loetakse kuni katkeni; binaarne DXF, mis on katki, loetakse kuni viimase terve väärtuseni. Kui lõik, plokk või objekt ikka ei ole loetav, jäetakse see välja ja nimetatakse, ja lugemine läheb edasi.
- DWG: objektid, mis ei läbi oma kontrolle või mida ei saa dekodeerida, jäetakse välja, ja kadunud objektide loend ehitatakse uuesti objektiandmeid läbides.

Ketta fail ei muutu. Taastatud joonis avatakse salvestamata: salvesta see uue nime all. Fail, millest ei saa üldse midagi lugeda, lükatakse tagasi koos põhjusega.

### LEGACYTEXT

Teisendab vanade 8-bitiste vietnami fontidega kirjutatud teksti Unicode'iks. Lühinimed `TEXTTOUNICODE` ja `VNTEXT`.

Vanemad vietnami joonised hoiavad oma teksti läänemärkidena, mida ainult font muudab vietnamikeelseks: TCVN3 tekst ABC fontides (`.VnTime`, `.VnArial` ja suurtähtede fondid, mille nimed lõppevad `H`-ga), ja VNI tekst VNI fontides (`VNI-Times`). CadCraft näitab sellist teksti loetavalt niipea, kui joonis on avatud, selle teksti stiili, objekti või lõiketeksti sisu fondi järgi; fail hoiab ikka vanu märke.

{{cmd:LEGACYTEXT}} ütleb, mitu teksti ta igas kodeeringus leidis, ja küsib `Convert … to Unicode?`. `Yes` kirjutab iga ühe ümber (mudel, lehed, plokid, atribuutide väärtused ja määratlused) ning annab tekstistiilidele Unicode-fondi (Times New Roman, Arial või Courier New vana fondi liigi järgi), ühe tagasivõtmise sammuga. Lõiketeksti vormindus säilib.

Kui ükski tekst ei kasuta teadaolevat fonti (stiil on kaotanud oma fondi nime), küsib see `Read selected texts as [Tcvn3/Vni/None]`: vali kodeering ja vali tekstid. Juba Unicode-tekst jäetakse rahule. Mõõtme teksti tühistusi ja mitmikjuhtjoone teksti ei teisendata.
