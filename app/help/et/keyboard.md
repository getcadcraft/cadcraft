---
title: Klaviatuur ja hiir
summary: Iga klahv, hiiretoiming ja käsurea klahv CadCraft joonistusrakenduses, nii nagu kood neid käsitleb.
keywords: klaviatuur, kiirklahvid, klahvid, hiir, rullik, nihuta, suumi, parem klõps, keskmine nupp, f3, f7, f8, ctrl, käskluse klahv, kiirklahvid, kopeeri, lõika, kleebi, dubleeri, lõikelaud, vali kõik
from: a2608a29
---

Kiirklahve näidatakse sinu arvutile sobival kujul. Macil kasutab iga {{key:Mod}} kiirklahv Command-klahvi, ja Control-klahv töötab samuti. Kuidas klahve kirjutatakse ning kuidas Macil F-klahve kasutada, on jaotises [Klahvid, hiired ja puuteplaadid](common:keys).

## Käskude trükkimine

| Klahv | Mida see teeb |
|---|---|
| Iga täht, number või sümbol | Läheb käsureale, olenemata sellest, kus kursor on, kui paneelis oleva kasti kursor pole |
| {{key:Enter}} | Saadab trükitu. Tühjal real: kordab viimast käsku, lõpetab käsu, lõpetab valiku või aktsepteerib vaikeväärtuse `<…>` |
| {{key:Space}} | Sama mis {{key:Enter}}, välja arvatud siis, kui CadCraft küsib teksti (tekst, plokkide nimed, mõõtmete tekst), siis trükib tühiku |
| {{key:Esc}} | Tühistab käsu. Kui käsk ei tööta: tühistab haardepunkti teisaldamise või valikukasti, seejärel tühjendab valiku |
| {{key:Tab}} | Aktsepteerib soovitatud käsu, mis on käsurea paremal. Kui midagi pole trükitud ja hiirekursor on kattuvate objektide peal: tõstab järgmise neist esile (klõps valib selle) |
| {{key:Up}} {{key:Down}} | Liigub läbi varem trükitud ridade (viimased 100) |

## Joonistamine ja muutmine

| Klahv | Mida see teeb |
|---|---|
| {{key:Mod+Z}} | Võtab viimase käsu tagasi |
| {{key:Mod+Y}} või {{key:Mod+Shift+Z}} | Tee uuesti |
| {{key:Mod+A}} | Valib kõik muudetavad objektid avatud vahelehel ({{cmd:SELECTALL}}). Kui oled käsureale midagi trükkinud, valib see selle teksti |
| {{key:Delete}} | Kustutab valitud objektid ({{cmd:ERASE}}), kui oled käsureale midagi trükkinud, siis mitte |
| {{key:Backspace}} | Kustutab valitud objektid, kui käsureal kursor pole; käsureal kustutab trükitu |
| {{key:Esc}} | Kui käsk ei tööta: tühjendab valiku ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Salvestab koopia joonise formaadis (DWG või DXF) |
| {{key:Mod+Shift+S}} | Salvesta nimega: vali DWG või DXF ja salvesta koopia |
| {{key:Mod+O}} | Avab DWG või DXF |
| {{key:Mod+P}} | Trükib PDF-iks |

Võta tagasi, tee uuesti, vali kõik ja trüki ei tee midagi, kui käsk töötab: vajuta enne {{key:Esc}}.

## Kopeerimine, lõikamine ja kleepimine

| Klahv | Mida see teeb |
|---|---|
| {{key:Mod+C}} | Kopeerib valiku lõikelauale ({{cmd:COPYCLIP}}). Kui midagi pole valitud, küsib CadCraft objekte |
| {{key:Mod+X}} | Lõika: kopeerib valiku ja kustutab selle ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Kleebi: koopia liigub hiirekursoriga; klõpsa või trüki punkt, et see maha panna ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Kleebi kohale: sinna koordinaatidesse, kust see kopeeriti ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dubleeri: valiku koopia liigub hiirekursoriga; klõpsa, et see maha panna, {{key:Esc}} ei jäta midagi ({{cmd:DUPLICATE}}) |

Samad toimingud on tööriistariba rühmas {{ui:Edit}} ({{ui:Copy}}, {{ui:Paste}}) ja menüüs {{ui:More}}. Kui töötab mõni muu käsk, lõpeta see või vajuta enne {{key:Esc}}; kui koopia liigub hiirekursoriga ja vajutad uuesti {{key:Mod+V}} või {{key:Mod+D}}, alustatakse otsast. Kui oled käsureale midagi trükkinud või käsk küsib teksti, kopeerivad, lõikavad ja kleepivad need klahvid seda teksti. Vt [Kopeeri, kleebi ja dubleeri](topic:copy-paste).

## Lülitid

| Klahv | Lüliti | Olekuriba nupp |
|---|---|---|
| {{key:F3}} | Objektipüüdmised sisse või välja | {{ui:Snap}} |
| {{key:F7}} | Ruudustik sisse või välja | {{ui:Grid}} |
| {{key:F8}} | Ortho sisse või välja | {{ui:Ortho}} |
| {{key:F10}} | Polaarjälgimine sisse või välja | {{ui:Polar}} |
| {{key:F11}} | Objektipüüdmise jälgimine sisse või välja | {{ui:Track}} |
| {{key:F12}} | Dünaamiline sisend sisse või välja | {{ui:Dyn}} |

:::mac
Macil on F3, F7 ja F8 tavaliselt Mission Control ja meediaklahvid. Hoia nende vajutamisel all **fn**, või lülita Süsteemiseadetes sisse standardsed funktsiooniklahvid, nagu on kirjeldatud jaotises [Klahvid, hiired ja puuteplaadid](common:keys). Olekuriba nupud töötavad alati.
:::

:::firefox
Firefoxis võib F7 paluda lülitada sisse caret browsing. Vali **No** ja kasuta nuppu {{ui:Grid}}, kui küsimus kordub.
:::

## Abi

| Klahv | Mida see teeb |
|---|---|
| {{key:F1}} | Avab või sulgeb selle abi joonise kõrval. See töötab ka siis, kui käsk töötab, ega jõua kunagi käsuritta |
| {{key:Esc}} | Kui kursor on abipaneelil: tühjendab otsingu või sulgeb paneeli |

Tööriba ülal olev nupp {{ui:Help}} teeb sama, mis {{key:F1}}. Kui trükid abi otsingukasti, ei jõua miski käsuritta. Klõpsa joonisel, et klahvid läheksid tagasi CadCraftile; paneel jääb joonise kõrvale lahti.

:::mac
Macil hoia all **fn** ja vajuta F1, või klõpsa {{ui:Help}}.
:::

## Ekraan

| Klahv | Mida see teeb |
|---|---|
| {{key:Ctrl+Shift+F}} | Vaheldub tavarežiim, täisekraan ja täisekraan ribadega peidetud. See kasutab Control-klahvi igal arvutil, ka Macil |
| {{key:Left}} {{key:Right}} | Kui joonise all olev vahekaart on fookuses: eelmine või järgmine vahekaart |

Täisekraanil võib brauser esimese {{key:Esc}} kasutada täisekraanilt lahkumiseks. Käsu tühistamiseks vajuta {{key:Esc}} uuesti.

## Dialoogid

| Klahv | Mida see teeb |
|---|---|
| {{key:Esc}} | Sulgeb dialoogi ({{ui:Plot to PDF}}, või küsimuse nagu „Salvestamata muudatused“ puhul tähendab see {{ui:Cancel}}) |
| {{key:Tab}} | Liigub dialoogi seadete ja nuppude vahel |

Kui dialoog on avatud, on joonise klahvid välja lülitatud.

## Paneeli väljad

Paremal või vasakul paneelil oleval kastil:

| Klahv | Mida see teeb |
|---|---|
| {{key:Enter}} | Rakendab väärtuse ja lahkub kastist |
| {{key:Esc}} | Paneb vana väärtuse tagasi ja lahkub kastist |
| {{key:Tab}} | Rakendab ja liigub järgmisse kasti |

Kui kastis on kursor, trükitakse tähed sinna, mitte käsuritta.

## Hiir

| Toiming | Mida see teeb |
|---|---|
| Klõps | Valib punkti, kui käsk seda küsib; valib objekti, kui käsk küsib objekte; muidu valib objekti või haardepunkti |
| Shift+klõps | Eemaldab valitud objekti valikust ([Sätetes](topic:settings) seadistusega {{ui:Clicking objects}} väärtusel {{ui:Replaces the selection}} lisab selle). Punkti valimisel ignoreerib objektipüüdmised selle klõpsu jaoks |
| Klõps tühjal alal, siis veel üks klõps | Valikukast: vasakult paremale on aken, paremalt vasakule ristvalik |
| Lohistamine tühjal alal | Lasso: esmalt paremale liikudes on aken, esmalt vasakule ristvalik; {{key:Space}} lohistamise ajal vaheldab akent, ristvalikut ja piiret; {{key:Esc}} loobub (LASSOMODE 0 või Sätted muudab selle uuesti ristkülikuks) |
| Lohistamine läbi tükkide TRIM või EXTEND käsus | Lõikab (või pikendab) iga tükki, mida tee läbib; teise käsu jaoks hoia all {{key:Shift}} |
| Haardepunkti lohistamine | Liigutab haardepunkti (või klõpsa haardepunktil ja seejärel kohal, kuhu see läheb) |
| Topeltklõps tekstil | Valib selle ja paneb kursori selle kastisse {{ui:Text}} paremal paneelil |
| Parem klõps | Enter. Haardepunkti teisaldamise või valikukasti ajal: tühistab selle |
| Lohistamine parema nupuga | Nihutab |
| Rullik | Suumib sisse ja välja ristkursori ümber |
| Lohistamine rulliku (keskmise nupuga) | Nihutab |
| Topeltklõps rullikul | Suumib kogu joonisele (ulatus) |
| DWG või DXF joonisele pukseerimine | Avab selle |

Puuteplaadi või puutetundliku ekraani kohta vt [Hiir, puuteplaat ja puudutus](topic:mouse-trackpad-touch).

## Klahvid, mida brauser hoiab

{{key:Mod+N}}, {{key:Mod+W}} ja {{key:Mod+T}} kuuluvad alati brauserile. CadCraft neid ei kasuta: uue joonise jaoks kasuta {{ui:New}} või trüki `NEW`. CadCraftil on oma lõikelaud: {{key:Mod+C}} ja {{key:Mod+V}} kopeerivad objekte CadCraft'i jooniste ja vahelehtede vahel, mitte teistest programmidest ega nendesse.

:::mac
Kui {{key:Mod+Y}} avab tegemise asemel brauseri ajaloo, kasuta {{key:Mod+Shift+Z}} või nuppu {{ui:Redo}}.
:::

## Kus asub Move

Move on käsk `MOVE` (klahv {{key:M}}): vali objektid, seejärel alguspunkt ja teine punkt või trükitud kaugus. Ka `ALIGN` ja `DISTRIBUTE` on olemas. BimCraft kasutab samu nimesid samade tööde jaoks ehitiselementidel, aga selle {{key:M}} on Measure ja tema Move on {{key:Shift+M}}.
