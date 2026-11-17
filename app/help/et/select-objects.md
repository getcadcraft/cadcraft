---
title: Objektide valimine
summary: Vali objekte ükshaaval, akna või ristumisega, enne või käsu ajal, ning võta objekte valikust välja.
keywords: vali, valik, aken, ristumine, nimisõna-tegusõna, kõik, viimane, eelmine, piirjoon, eemalda, lisa, tab, tsükkel, kattuv, qselect, kiirvalik, filter, vali sarnased, selectsimilar, shift, tühista valik, ctrl+a, pickfirst
from: 676508c7
---

## Mida õpid

Kuidas valida objektid, millega käsk töötab. CadCraft'il on kaks viisi töötada ja mõlemad on head:

- **Esmalt vali, siis käsk** (nimisõna-tegusõna). Vali objektid, seejärel kirjuta `M` (Teisalda). Käsk võtab sinu valiku ja läheb kohe oma järgmise küsimuse juurde.
- **Esmalt käsk, siis vali** (tegusõna-nimisõna). Kirjuta `M`; käsk küsib `Vali objektid:`; vali ja vajuta {{key:Enter}}.

## Vali üks objekt korraga

1. Kui ühtki käsku ei käi, klõpsa joont. See tõstetakse esile ja ilmuvad selle grippid (väikesed ruudud). Parem paneel näitab selle omadusi.
2. Klõpsa teist objekti. See lisatakse valikule.
3. Hoia {{key:Shift}} all ja klõpsa valitud objekti. See eemaldatakse valikust.
4. Vajuta {{key:Esc}}. Ühtegi ei ole valitud.

## Aken ja ristumine

Klõpsa üks kord tühjal alal, liiguta ja klõpsa uuesti: tekib ristkülik. Vajutamine ja lohistamine joonistab selle asemel vabakäelise lasso, kahe samasuguse tüübiga (vt [Lasso valik](topic:lasso-selection); sätted võivad panna lohistamise joonistama ristküliku). Millised objektid sa saad, sõltub suunast:

| Liigud | Kast | Valib |
|---|---|---|
| Vasakult paremale | Aken | Ainult objektid, mis on **täielikult** kastis |
| Paremalt vasakule | Ristumine | Kastis olevad objektid **ja** need, mida see puudutab |

1. Joonista mõned kattuvad jooned ja ringid.
2. Klõpsa tühja ala mõne objekti vasakul, liigu paremale ja klõpsa uuesti. Valitakse ainult täielikult sees olevad objektid.
3. Vajuta {{key:Esc}}.
4. Klõpsa tühja ala paremal, liigu vasakule mõne objekti üle ja klõpsa uuesti. Valitakse kõik, mida kast puudutab.
5. Hoia {{key:Shift}} all ja joonista kast või lasso mõne valitud objekti kohal. Need eemaldatakse valikust.

## Vali, siis käivita käsk

1. Vali kaks ringi.
2. Kirjuta `M` ja vajuta {{key:Enter}}.

Ajalugu ütleb `2 leitud` ja küsimus läheb kohe `Määra baaspunkt`-ile. Lõpeta teisaldamine (vt [Teisalda, kopeeri, pööra, skaleeri ja peegelda](topic:modify-objects)).

Käsu lõppedes valik tühjeneb, nii et järgmine käsk algab puhtalt.

Käsud, mis võtavad valiku sel viisil: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} ja {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} ja {{cmd:CHAMFER}} küsivad alati, et valiksid objektid ükshaaval; {{cmd:TRIM}} ja {{cmd:EXTEND}} võtavad klõpsu või tee, mida lohistad tükkide kaudu (vt [Lõika ja pikenda](topic:trim-and-extend)).

## Käivita käsk, siis vali

1. Veendu, et ükski ei ole valitud ({{key:Esc}}).
2. Kirjuta `E` ja vajuta {{key:Enter}}. Viip ütleb `Vali objektid:`.
3. Klõpsa objektidel või lohista aknaid ja ristumisi. Ajalugu loeb iga valiku (`1 leitud`, `3 leitud`).
4. Vajuta {{key:Enter}}, {{key:Space}} või parem klõps valimise lõpetamiseks.

Objektid kustutatakse ja ajalugu ütleb, mitu.

Viibal `Vali objektid:` võid kirjutada ka:

- `ALL`, siis {{key:Enter}}: kõik objektid, mida saab avatud kaardil muuta.
- `L` (või `LAST`), siis {{key:Enter}}: viimati joonistatud objekt.
- `P` (eelmine): viimase käsu objektid, kui need on veel alles.
- `F` (piirjoon): klõpsa või sisesta punktid mööda joont; lisatakse iga objekt, mille joon ristub. Piirjoone lõpetamiseks vajuta {{key:Enter}}; `U` võtab tagasi viimase punkti.
- `W` (aken) või `C` (ristumine): kaks nurka, olenemata lohistamise suunast.
- `R` (eemalda): nüüdsest eemaldavad klõpsud, aknad ja piirjooned objekte. Viip ütleb `Eemalda objektid:`. `A` (lisa) lülitab tagasi.
- `?`: nende loend ajaloos.

Neid valikuid viibal ei näidata, nagu AutoCAD'is.

## Vali üks mitmest üksteise peal olevast objektist

Kus objektid kattuvad või puutuvad, võtab klõps lähima. Et saada mõni teine:

1. Hoia kursor selle koha kohal paigal.
2. Vajuta {{key:Tab}}. Järgmine seal olev objekt tõstetakse esile ja olekuriba ütleb, milline see on („2 / 3: Joon kihil Seinad“).
3. Vajuta {{key:Tab}} uuesti, kuni soovitud objekt on esile tõstetud, ja klõpsa siis liigutamata.

Kursori liigutamine alustab otsast peale. See töötab ilma käsuta, `Vali objektid:` juures ja kõikjal, kus käsk küsib ühe objekti valimist.

## Vali reegli järgi: Kiirvalik

{{cmd:QSELECT}} (`QS`, või {{ui:Redigeeri}} › {{ui:Veel}} › {{ui:Kiirvalik}}) valib kõik objektid, mis vastavad reeglile, näiteks kõik ringid raadiusega alla 50 või kõik plokiviited nimega DOOR-900.

1. Ava {{ui:Kiirvalik}}.
2. Vali {{ui:Objekti tüüp}} (loend loeb iga tüübi), seejärel {{ui:Omadus}}: {{ui:Kiht}}, {{ui:Värv}}, ja mõne tüübi puhul {{ui:Pikkus}}, {{ui:Raadius}}, {{ui:Pindala}}, {{ui:Teksti kõrgus}}, {{ui:Teksti sisu}}, {{ui:Ploki nimi}} või {{ui:Viirutuse muster}}.
3. Vali {{ui:Operaator}} ja {{ui:Väärtus}}. `*` sobitab metamärkidega (`DOOR-*`); {{ui:Vali kõik}} võtab kõik selle tüübi objektid. Allosas olev arv näitab, mitu vastab, kui valid.
4. {{ui:Kuidas rakendada}}: kaasa vasted või kõik ülejäänud. {{ui:Rakenda}} {{ui:Praegune valik}} kitsendab seda, mis oli valitud; {{ui:Lisa praegusele valikule}} lisab sellele.
5. Klõpsa {{ui:Vali}}. Siis käivita soovitud käsk: see kasutab valikut.

## Vali sarnased

Vali üks või mitu objekti ja kirjuta {{cmd:SELECTSIMILAR}} (`SIM`) või vali {{ui:Redigeeri}} › {{ui:Veel}} › {{ui:Vali sarnased}}. Valitakse iga objekt, mis on sama tüüpi, samal kihil ja samas värvis; plokiviidete puhul peab olema sama plokk, viirutuste puhul sama muster. Kirjuta `SE` selle `Vali objektid` viibal, et valida, mis peab sobima.

## Vali nüüd, kasuta hiljem

Kirjuta `SELECT` ja vajuta {{key:Enter}}, vali objektid ükskõik millise eelneva viisiga ja vajuta {{key:Enter}}. Need jäävad valituks järgmise käsu jaoks ning `P` valib need uuesti hilisemal `Vali objektid:` viibal.

## Vali kõik

Kui ühtki käsku ei käi, vajuta {{key:Mod+A}} või vali tööriistariba menüüst {{ui:Redigeeri}} › {{ui:Veel}} käsk {{ui:Vali kõik}}, et valida kõik objektid, mida saab avatud kaardil muuta. Kui oled käsureale midagi kirjutanud, valib {{key:Mod+A}} selle teksti: vajuta enne {{key:Esc}}, et see tühjendada. `Vali objektid:` viibal kirjuta `ALL`. Sama menüü käsk {{ui:Tühista valik}} või {{key:Esc}} tühjendab valiku.

:::tip
Kui eelistad, et iga klõps asendab valiku (ja {{key:Shift}} lisab sellele), määra [CadCraft'i sätetes](topic:settings) {{ui:Objektide klõpsamine}} väärtuseks {{ui:Asendab valiku}}.
:::

## Mida ei saa valida

- Objekte kihil, mis on **välja lülitatud**, **külmutatud** või **lukus**. Lukustatud objektid jäävad nähtavaks ja neile saab ikka püüda, kuid neid ei saa valida ega muuta.
- Lehe kaardil vaateaknas näidatud mudel. Sa valid lehe enda objektid (tiitliplokk, märkused, vaateakende raamid). Mudeli muutmiseks mine kaardile {{ui:Mudel}}.

## Kustuta kiiresti

Vali objektid ja vajuta {{key:Delete}} (või {{key:Backspace}}, kui käsureal kursorit ei ole). Mac-klaviatuuril töötab klahv delete, kui oled joonisesse klõpsanud; kui käsurea kursor on aktiivne, vajuta fn ja delete koos. See käivitab valikul {{cmd:ERASE}}. Kui midagi ei juhtu, oled käsureale midagi kirjutanud: vajuta {{key:Esc}} või kirjuta `E` ja vajuta {{key:Enter}}.

## Tavalised vead

- **Aken võttis liiga vähe.** Lohistasid vasakult paremale, mis võtab ainult täielikult sees olevad. Ristumise jaoks lohista paremalt vasakule.
- **Klõps tühjal alal alustas kasti.** Üks klõps tühjal alal alustab akent; teine klõps lõpetab selle. Vajuta {{key:Esc}} või parem klõps, et see loobuda.
- **Klõps tühjal alal lasi valiku lahti.** Nii juhtub, välja arvatud juhul, kui hoiad {{key:Shift}} all. Et hoida valik sellisel klõpsul ja tühjendada see ainult {{key:Esc}}-ga, määra [CadCraft'i sätetes](topic:settings#clicking-an-empty-spot) {{ui:Tühjale kohale klõpsamine}} väärtuseks {{ui:Jätab valiku alles}}.
- **Käsk kasutas objekte, mida sa ei mõelnud.** Midagi oli veel valitud, kui alustasid. Vajuta enne käsku {{key:Esc}}, et alustada tühjalt.
- **Pärast käsku ei ole midagi valitud.** See on meelega: lõppenud käsk tühjendab valiku.
