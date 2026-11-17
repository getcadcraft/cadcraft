---
title: Koordinaatide ja kauguste sisestamine
summary: Kõik viisid, kuidas CadCraft käsureale punkti, kauguse, nurga või arvu sisestada, näidetega.
keywords: dünaamiline sisestus, dün, f12, tab, koordinaadid, absoluutne, suhteline, polaarne, @, otsene kaugus, nurk, kraadid, viimane punkt, lastpoint, punktide sisestamine, sisestus, aritmeetika, arvutus, kalkulaator, cal, pluss, murd, avaldis
from: 7de9252d
---

## Punktid

Kui viip küsib punkti, sisesta üks neist ja vajuta {{key:Enter}}:

| Sisestad | Tähendus | Näide |
|---|---|---|
| `x,y` | Absoluutne: mõõdetud algpunktist 0,0 | `2500,1200` |
| `#x,y` | Samuti absoluutne (lubatud harjumuse pärast) | `#2500,1200` |
| `@dx,dy` | Suhteline: paremale ja üles viimasest punktist | `@600,0` |
| `@d<a` | Suhteline polaarne: kaugus ja nurk viimasest punktist | `@1500<45` |
| `d<a` | Absoluutne polaarne: kaugus ja nurk algpunktist | `3000<90` |
| üksik arv | Otsene kaugus: nii kaugel baaspunktist, ristkursori suunas | `1200` |
| `*x,y`, `@*dx,dy` | Maailma koordinaadid, kui UCS on seatud | `*0,0` |

Kui UCS on seatud ({{cmd:UCS}}), mõõdetakse `x,y`, `@dx,dy` ja `d<a` nurka mööda UCS-telgi. Vt [Keera vaade ringi ja kasuta oma koordinaate](topic:ucs-and-turned-view).

Või klõpsa joonisel; klõpsude puhul kehtivad objektihaakimised ja Ortho.

Reeglid:

- Koma eraldab X-i ja Y-i. Kümnendkohtades kasutatakse punkti: `1250.75,300`.
- Negatiivsed väärtused lähevad vasakule ja alla: `@-600,0`.
- Ära sisesta tühikuid: {{key:Space}} saadab rea, nagu {{key:Enter}}.
- Arvudes võib kasutada astendajat: `1e3` on 1000.
- Ühikuid ei sisestata ega kasutata jalgade ja tollide tähistust. Sisesta lihtsad arvud joonise ühikutes.

## Viimane punkt

`@` loeb **viimasest punktist, mille andsid mis tahes punktiviiba juures**, igas käsus: klõps, haakimine või sisestatud punkt. See jäetakse käskude vahel meelde, nii et saad alustada uut joont `@0,500` kaugusel kohast, kus eelmine lõppes. Enne esimese punkti andmist loeb `@` 0,0-st.

Mõned kohad, kus see on oluline:

- Käsus {{cmd:COPY}} on pärast esimest koopiat viimane punkt selle koopia punkt. `@600,0` kaks korda paigutab koopiad originaalist 600 ja 1200 kaugusele.
- Pärast mõõtme paigutamist on viimane punkt koht, kuhu paigutasid mõõtejoone, mitte mõõdu lõpp.

Kahtluse korral kasuta absoluutset punkti, haakimist või otsest kaugust.

## Otsese kauguse sisestamine

Paljas arv on kaugus käsu **baaspunktist** (punktist, kust kumminiit algab) ristkursori suunas:

1. Liiguta ristkursorit soovitud suunas.
2. Sisesta kaugus ja vajuta {{key:Enter}}.

Kui {{ui:Ortho}} on sisse lülitatud, haakub suund sirgelt risti või sirgelt üles ja alla, mis teeb sellest kiireima viisi ristnurkseinte joonistamiseks. Kui baaspunkti pole või ristkursor on täpselt selle peal, lükatakse arv tagasi veateatega „Vajalik on punkt või suvandi märksõna.“

## Nurgad

- Kraadides lihtarvuna: `30`, `-45`, `112.5`.
- Mõõdetud vastupäeva positiivsest X-suunast (paremale osutav): 0 on paremal, 90 üleval, 180 vasakul, 270 või -90 all.
- Kui küsitakse nurka (pööre, teksti nurk), võid ka klõpsata: nurk mõõdetakse baaspunktist klõpsuni. Enne baaspunkti olemasolu määrab esimene klõps selle ja viip küsib teist punkti.

## Kaugused

Kui küsitakse kaugust (raadius, nihe, teksti kõrgus, mõõtkava tegur):

- sisesta positiivne arv (jalgade ja tollidega joonisel ka `12'6"` või `6-1/2`: vt [Jalad ja tollid](topic:units-papers-scales#feet-and-inches-and-fractions)), või
- klõpsa punkti: kaugus käsu baaspunktist sinna, või
- klõpsa kahte punkti, kui baaspunkti pole: viip muutub tekstiks `Specify second point`.

„Nõutav on positiivne arv või kaks punkti.“ tähendab, et väärtus polnud arv või oli negatiivne.

## Aritmeetika sisestatud väärtuses

Kõikjal, kus sisestatakse pikkus, koordinaat, nurk või arv (käsurida, dünaamiline sisestus, omaduste väljad ja dialoogid), võid sisestada arvutuse märkidega `+`, `-`, `*`, `/` ja sulgudega, selle asemel et see eelnevalt välja arvutada:

| Sisesta | Tulemus |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (jalgade ja tollidega joonisel) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, joonise ühikutes (kui selle ühikud on seatud) |
| `@4+7/16,0` | punkt 4.4375 paremal viimasest punktist |
| `360/7` | nurk 51.43 kraadi |

- Pikkusesse kirjutatud kriips on endiselt selle osa: `4-7/16` on 4 7/16 ja `24'-6"` on 24 jalga 6 tolli. Et lahutada pärast jalgade märki, lõpeta pikkus esmalt, `24'-0"-6"`, või pane arvutus sulgudesse, kriipsu ümber tühikutega, `(24' - 6")` (sulgudes on tühik tühik; mujal vajutab see {{key:Enter}}).
- Pikkusele liidetud lihtarv on joonise ühikutes; sellega korrutamine või jagamine muudab pikkust mastaabis. Kaks pikkust korrutatuna annavad pindala, seega `2'*3'` lükatakse tagasi.
- Töötavad ka `abs`, `round`, `ceil` ja `floor`: `round(10/3)`.
- Arvutus, mida ei saa lugeda, lükatakse tagasi koos veakohaga, näiteks „Arvutus lõpeb liiga vara (märk 3): väärtus puudub.“ Midagi ei loeta kunagi nulliks. {{cmd:CAL}} kuvab arvutuse väärtuse.

## Dünaamiline sisestus

{{ui:Dün}} ({{key:F12}}, olekuribal) paneb väärtused ristkursori juurde, kui käsk küsib punkti.

- Kui baaspunkti veel pole (joone esimene punkt), on kaks välja **X** ja **Y**.
- Pärast seda on need viimasest punktist **kaugus** ja **nurk**.

Sisestamine läheb endiselt käsuritta; ristkursori juures olev väli näitab seda ja kumminiit järgib seda.

1. Sisesta väärtus: see läheb esiletõstetud välja.
2. Vajuta {{key:Tab}} (või koma pärast X-i). Väärtus lukustatakse (kuvatakse paksus kirjas) ja järgmine väli esiletõstetakse. Lukustatud kaugus hoiab kumminiiti nii pikana, kui sihid hiirega.
3. Sisesta teine väärtus või lihtsalt sihi ja vajuta {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} joonistab 50 sirgelt üles viimasest punktist.

Kui sisestad ühe väärtuse ilma {{key:Tab}}-ita ja vajutad {{key:Enter}}, töötab see nagu otsese kauguse sisestamine. Jalad ja tollid töötavad ka väljadel (`12'6"`). Kauguse ja nurga viibad (ringi raadius, pööre) näitavad samuti oma väärtust ristkursori juures.

## Suvandid ja vaikeväärtused

- Suvandid on kantsulgudes. Sisesta suvandi suurtähed (`D` tähendab `[Diameter]`, `CL` tähendab `CLose`) ja vajuta {{key:Enter}}. Töötavad ka sõna pikemad algused (`DIA`).
- Vaikeväärtus on nurksulgudes, näiteks `<500>`. Kasutamiseks vajuta {{key:Enter}} või tee paremklõps.

## Muud klaviatuuripaigutused ja numbriklahvistik

Käskude nimed, lühinimed ja suvandite tähed on ladina tähed. Kui on aktiivne kreeka, kirillitsa (vene, ukraina, valgevene, serbia, makedoonia, bulgaaria), heebrea, araabia, pärsia, tai või korea paigutus, ei pea paigutust vahetama: kui sisestatud sõna pole sellisena käsk, lühinimi ega suvand, loeb CadCraft seda vajutatud klahvide järgi. Ladina klaviatuuri klahv `L` käivitab endiselt `LINE`-i ja klahv `C` vastab endiselt `Close`-ile, olenemata sellest, milline täht paigutusel sellel klahvil on. Käskude loend käsurea kohal järgib sama reeglit. Tekst, mida sisestad kohas, kus käsk küsib teksti ({{cmd:TEXT}} sisu, nimi), ei muutu kunagi.

Paigutustel, kus numbriklahvistiku kümnendklahv annab koma, sisestab see klahv käsuritta ja arvuväljadele kümnendpunkti, nii et `12.5` saab sisestada numbriklahvistikult. Põhiklaviatuuri komaklahv eraldab endiselt `x,y`.

Mõlemad saab sätetes välja lülitada: {{ui:Commands on a non-Latin keyboard layout}} ja {{ui:Keypad decimal key}}.

## Koordinaatide kuvamine

Olekuriba näitab ristkursori X-i ja Y-i (UCS-is, kui see on seatud), pärast haakimisi ja Ortho-t. Kui käsul on baaspunkt, lisab see `Δ`-ga kauguse ja nurga sellest punktist, näiteks `Δ 1500 < 30°`: arvud, mille sisestaksid kujul `@1500<30`.

Punkti koordinaatide väljastamiseks kasuta {{cmd:ID}}, kahe punkti vahelise mõõtmiseks {{cmd:DIST}}.
