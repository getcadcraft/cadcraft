---
title: Teisalda, kopeeri, pööra, muuda mõõtkava, peegelda, venita ja massiiv
summary: Paiguta ruumi mööbel põhiliste muutmiskäskudega, kasutades baaspunkte, sisestatud kaugusi ja tagasivõtmist.
keywords: teisalda, kopeeri, pööra, mõõtkava, peegelda, venita, massiiv, ühenda, matchprop, sobita omadused, maalija, arrayrect, arraypolar, polaarne massiiv, kustuta, lõhusta, võta tagasi, tee uuesti, baaspunkt, nihe, muuda, joonda, jaota, reamiseks, jaota ühtlaselt
from: 8eaeee6c
---

## Mida sa valmistad

Laud, mille ümber on kopeeritud, pööratud, peegeldatud ja suuruse muutnud üks tool. Selle käigus kasutad käske {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} ja {{cmd:UNDO}}.

## Joonista osad

1. Sisesta `REC` ja vajuta {{key:Enter}}, sisesta `0,0` ja vajuta {{key:Enter}}, seejärel sisesta `@1800,900` ja vajuta {{key:Enter}}. See on laud.
2. Sisesta `REC` ja vajuta {{key:Enter}}, sisesta `300,-700` ja vajuta {{key:Enter}}, seejärel sisesta `@450,450` ja vajuta {{key:Enter}}. See on tool, laua all.
3. Klõpsa {{ui:Ulatus}}.

## Teisalda: baaspunkt, seejärel teine punkt

Iga teisaldamine, kopeerimine, pööramine ja mõõtkava muutmine algab **baaspunktist**: punktist, mida viiakse kaasa või mille ümber pööratakse.

1. Klõpsa toolil, et see valida.
2. Sisesta `M` ja vajuta {{key:Enter}}. Ajalugu ütleb `1 found`.
3. Kohal `Specify base point` püüa tooli vasakut ülanurka (Lõpp-punkt) ja klõpsa.
4. Kohal `Specify second point` sisesta `@0,200` ja vajuta {{key:Enter}}.

Tool liigub 200 võrra üles, laua poole.

:::tip
Kohal `Specify base point` sisesta `D`, et anda selle asemel nihe: CadCraft küsib siis `Specify displacement` ja sa sisestad, kui kaugele külgsuunas ja üles, näiteks `0,200` (`@` pole vaja).
:::

## Kopeeri nii mitu korda, kui soovid

1. Klõpsa toolil.
2. Sisesta `CO` ja vajuta {{key:Enter}}.
3. Püüa tooli vasakut alumist nurka ja klõpsa baaspunktiks.
4. Sisesta `@600,0` ja vajuta {{key:Enter}}. Koopia ilmub 600 paremale.
5. Sisesta uuesti `@600,0` ja vajuta {{key:Enter}}. Teine koopia ilmub originaalist 1200 paremale.
6. Käsu lõpetamiseks vajuta {{key:Enter}}.

{{cmd:COPY}} jätkab seni, kuni vajutad {{key:Enter}}. Iga koopia paigutatakse baaspunkti ja sinu antud punkti vahelise kauguse järgi. `@`-punkt arvestatakse viimasest sisestatud punktist, mis pärast esimest koopiat on selle koopia punkt, nii et kaks korda `@600,0` annab koopiad 600 ja 1200 kohale. Sisesta `U` ja vajuta {{key:Enter}}, et võtta viimane koopia tagasi, lahkumata käsust.

Peaksid nägema laua all kolme tooli reas.

:::tip
{{cmd:COPY}} on mõeldud koopiate tegemiseks ühe joonise sees, paigutatud baaspunkti järgi. Objektide viimiseks teise joonisesse või vahelehele või et neid hiljem kleepida, kasuta lõikelauda: {{key:Mod+C}}, seejärel {{key:Mod+V}}. {{key:Mod+D}} teeb ühe koopia, mis liigub koos kursoriga. Vaata [Kopeeri, kleebi ja dubleeri](topic:copy-paste).
:::

## Peegelda rida teisele poole

1. Lohista ristaken (paremalt vasakule) üle kolme tooli, nii et see ei puuduta lauda.
2. Sisesta `MI` ja vajuta {{key:Enter}}.
3. Kohal `Specify first point of mirror line` püüa laua vasaku külje lõigu keskpunkti ja klõpsa.
4. Kohal `Specify second point of mirror line` püüa laua parema külje lõigu keskpunkti ja klõpsa.
5. Kohal `Erase source objects? [Yes/No] <N>` vajuta {{key:Enter}}, et need alles jätta.

Peaksid nägema kolme tooli laua all ja kolme peegeldatud tooli selle kohal. Peegeldatud valikus olev tekst jääb loetavaks: see paigutatakse peegelpildina, kuid seda ei kirjutata tagurpidi.

## Pööra tooli

1. Klõpsa laua all kõige paremat tooli.
2. Sisesta `RO` ja vajuta {{key:Enter}}.
3. Püüa tooli paremat alumist nurka ja klõpsa baaspunktiks.
4. Sisesta `90` ja vajuta {{key:Enter}}.

Tool pöördub baaspunkti ümber 90 kraadi vastupäeva. Negatiivne nurk pöörab päripäeva. Sisestamise asemel saad klõpsata teise punkti: nurk mõõdetakse baaspunktist selle punktini.

## Muuda laua mõõtkava

1. Vali laud.
2. Sisesta `SC` ja vajuta {{key:Enter}}.
3. Püüa laua vasakut alumist nurka ja klõpsa baaspunktiks.
4. Sisesta `1.2` ja vajuta {{key:Enter}}.

Laud on 20% suurem, kasvab baaspunktist eemale. Kordaja alla 1 teeb selle väiksemaks.

:::note
Kui klõpsad mõõtkava kordaja sisestamise asemel punkti, on kordaja baaspunkti ja selle punkti vaheline kaugus. Klõpsamine ühe joonise ühiku kaugusele annab kordaja 1. Tavaliselt soovid numbri sisestada.
:::

## Võta tagasi ja tee uuesti

- {{key:Mod+Z}}, nupp {{ui:Võta tagasi}} või `U` ja seejärel {{key:Enter}} võtab viimase käsu tagasi. Terve käsk on üks samm: kui {{cmd:COPY}} tegi viis koopiat, siis selle tagasivõtmine eemaldab kõik viis.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, nupp {{ui:Tee uuesti}} või `REDO` toob selle tagasi.
- Ajalugu ütleb, mis tagasi võeti („Undid COPY“).

CadCraft hoiab viimased 500 sammu. Kihtide sätted (sees, külmutatud, lukus, värv) on sätted, mitte muudatused, ja neid ei võeta tagasi.

## Venita ruum laiemaks

{{cmd:STRETCH}} (`S` või {{ui:Venita}}) teisaldab ainult selle, mis jääb ristakna sisse: seal olevad nurgad ja joonte otsad liiguvad, kõik muu jääb paigale, nii et ruum läheb laiemaks, selle asemel et tervikuna liikuda.

1. Sisesta `S` ja vajuta {{key:Enter}}.
2. Lohista aken paremalt vasakule üle parema seina, nii et see katab seina nurgad ja kõige, mis sellega ühtub, otsad.
3. Vajuta {{key:Enter}}.
4. Klõpsa baaspunkt, seejärel sisesta `@600,0` ja vajuta {{key:Enter}}.

Ristkülik on 600 võrra laiem; jooned, mis lõppesid seinal, lõppevad seal ka edaspidi. Kaar, mille üks ots on sees, säilitab oma kõrguse; ringid ja tekst liiguvad, kui nende keskpunkt või sisestuspunkt on sees; mõõt mõõdab oma uut pikkust. Ükshaaval valitud objektid, ilma aknata, lihtsalt liiguvad.

Võid ka esmalt valida: lohista ristaken (või ristlasso) üle seina, kui ükski käsk ei tööta, ja seejärel sisesta `S`. STRETCH võtab selle valiku ja venitab selle akende sisu, täpselt nagu oleksid need lohistatud tema enda küsimuse juures.

## Massiiv: read ja veerud või ümber keskpunkti

{{cmd:ARRAY}} (`AR` või {{ui:Massiiv}}) kopeerib valiku ruudustikku või ringi.

1. Vali tool, sisesta `AR` ja vajuta {{key:Enter}}. Ristkülikukujulise jaoks vajuta {{key:Enter}}.
2. Ilmub eelvaade 4 veeru ja 3 reaga. Sisesta `COU`, vajuta {{key:Enter}}, seejärel `5` veergude ja `2` ridade jaoks.
3. Sisesta `S`, vajuta {{key:Enter}}, seejärel `600` veergude vahele ja `-900` ridade vahele (negatiivne läheb alla).
4. Koopiate tegemiseks vajuta {{key:Enter}}.

Tooli ringi laua ümber valimiseks vali selle asemel `PO` (Polaar), klõpsa laua keskpunkti ja määra `I` (elemendid), `F` (täitenurk: 360 terve ringi jaoks, 180 poole jaoks) ja `ROT` (kas koopiad pööravad keskpunkti poole). {{cmd:ARRAYRECT}} ja {{cmd:ARRAYPOLAR}} jätavad küsimuse vahele.

## Ühenda osad üheks murdjooneks

{{cmd:JOIN}} (`J` või {{ui:Muuda}} › {{ui:Veel}} › {{ui:Ühenda}}): vali jooned, kaared ja avatud murdjooned, mille otsad kohtuvad, ja vajuta {{key:Enter}}. Need muutuvad üheks murdjooneks, mis on suletud, kui see käib tervikuna ringi, ja mida saab siis ühe korraga nihutada. Ühel sirgel asuvad jooned muutuvad üheks jooneks isegi siis, kui nende vahel on vahesid; ühe ringi kaared muutuvad üheks kaareks või ringiks.

## Sobita omadused

{{cmd:MATCHPROP}} (`MA` või {{ui:Muuda}} › {{ui:Veel}} › {{ui:Sobita omadused}}): klõpsa objektil, mille välimust soovid, seejärel vali muudetavad objektid ja vajuta {{key:Enter}}. Need võtavad selle kihi ja värvi; tekst võtab selle kõrguse, mõõt selle mõõtmed, viirutus selle mustri. Mõne neist väljalülitamiseks sisesta teise küsimuse juures `S` ({{ui:Sätted}}).

## Joonda objektid

**Punktide järgi.** {{cmd:ALIGN}} (`AL` või {{ui:Muuda}} › {{ui:Veel}} › {{ui:Joonda}}): vali objektid ja vajuta {{key:Enter}}, seejärel klõpsa neil punktil (allikas) ja kohal, kuhu see peaks minema (sihtkoht).

- Üks paar nihutab need. Peatamiseks vajuta {{key:Enter}} kohal `Specify second source point`.
- Kaks paari pööravad need ka, nii et kahe allikapunkti vaheline joon jääb mööda kahe sihtpunkti vahelist joont. Seejärel küsib CadCraft `Scale objects based on alignment points?`: `Y` muudab need ka vastavalt suuremaks või väiksemaks.
- Kolmas paar peegeldab need, kui selle kaks punkti asuvad selle joone vastasküljel.

**Servad ja vahed.** {{ui:Muuda}} › {{ui:Veel}} › {{ui:Joonda ja jaota}} (või `ALIGNPANEL`) avab joonise kohal väikese paneeli. Vali objektid, seejärel:

- vali, mille järgi joondada, valikus {{ui:Joonda järgi}} (kogu valik, esimene või viimane valitud objekt või klõpsatud punkt), ning klõpsa {{ui:Vasak}}, {{ui:Keskpunkt}}, {{ui:Parem}}, {{ui:Pealtvaade}}, {{ui:Keskel}} või {{ui:Alumine vaade}};
- või vali {{ui:Võrdsed vahed}} või {{ui:Võrdsed keskpunktid}} ja klõpsa {{ui:Külgsuunas}} või {{ui:Üles-alla}}: kaks välimist objekti jäävad paigale, ülejäänud jaotatakse nende vahele ühtlaselt (vähemalt kolm objekti).

Iga klõps on üks tagasivõtmise samm ja valik jääb alles, nii et saad proovida teist. Iga objekti arvestatakse piirdekasti järgi, UCS-is, kui see on määratud. Käsurealt on sama {{cmd:ALIGNTO}} ja {{cmd:DISTRIBUTE}}.

## Kustuta ja lõhusta

- {{cmd:ERASE}} (`E` või {{key:Delete}}) eemaldab valitud objektid.
- {{cmd:EXPLODE}} (`X`) lõhub murdjoone joonteks ja kaarteks, ploki viite selle objektideks ning mõõdu joonteks, noolteks ja tekstiks. Lõhutud mõõdud ei mõõda enam ise end.

## Levinud vead

- **Kauguse sisestamine ilma `@`-ita teisel punktil.** `600,0` on absoluutne punkt 600,0, mitte „600 paremale“. Kasuta `@600,0` või lihtsalt `600` ristkursoriga õiges suunas.
- **Pööre läks vales suunas.** Positiivsed nurgad pöörduvad vastupäeva.
- **Tagasivõtmine eemaldas rohkem kui oodatud.** Üks tagasivõtmine võtab tagasi kogu viimase käsu, kaasa arvatud kõik tehtud koopiad.
- **Käsk ei küsinud objektide valimist.** Objektid olid juba valitud, nii et käsk kasutas neid. Alustamiseks ilma valikuta vajuta kõigepealt {{key:Esc}}.
