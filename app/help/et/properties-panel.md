---
title: Omaduste paneel
summary: Vaata ja muuda kõike valitud objektide kohta, mitut korraga: koordinaadid koos Z-ga, mõõtmed, tekst, mõõtude seaded, läbipaistvus ja muu. Väljad võtavad avaldisi ja pikkusi ühikutega.
keywords: koguarvud, kogupikkus, kogupindala, summa, valiku pikkus, omadused, omaduste palett, ctrl+1, pr, ch, mo, ddmodify, erinev, kiirvalik, pickadd, koordinaadid, z, kõrgus, paksus, läbipaistvus, materjal, hüperlink, avaldis, quickcalc, tipp, mõõtestiil, tolerants, komakohad
from: 10d6a829
---

## Mida sa õpid

Kuidas avada omaduste paneel, muuta üht objekti või sada ühe sammuga, sisestada täpseid koordinaate (koos Z-ga), kasutada avaldisi ja ühikuid igal arvuväljal ning mida iga objektitüüp näitab.

## Ava see

Paneel asub paremal. Et see esiplaanile tuua:

- Vajuta {{key:Mod+1}} või kirjuta {{cmd:PROPERTIES}} (või `PR`, `CH`, `MO`).
- Topeltklõpsa objektil (tekst ja mitmeosaline noolejuhis avavad oma tekstiredaktori).

Paneel on liigutatav nagu teised: lohista selle käepidet, et paigutada see vasakule, paremale või alla, või tõsta see joonise kohale ujuvaks (vt [Paneelide paigutamine ja teine monitor](common:arrange-panels)).

### Voldi ära

Paneeli paremas ülanurgas olev nööpnõel lülitab sisse **automaatpeitmise**: paneel voldub paremas servas ribaks ja joonis saab ruumi. Osuta ribale (või vajuta {{key:Mod+1}}) ja see avaneb joonise kohale; liigu eemale ja see voldub uuesti kokku. Klõpsa nööpnõelal uuesti, et see lahti jääks. {{cmd:PROPERTIESCLOSE}} voldib samuti.

## Jaotised

Omadused on grupeeritud jaotisteks, mida saab kokku voltida: **Üldine**, **Geomeetria**, **Tekst**, **Jooned ja nooled**, **Sobitamine**, **Põhiühikud**, **Alternatiivsed ühikud**, **Tolerantsid**, **Muster**, **Muu**, ja plokkide puhul **Atribuudid** ja **Raamatukogu üksus**. Klõpsa jaotise nimel, et see kokku voltida või avada; CadCraft mäletab, mis sa kokku voltisid.

Lohista õhukest joont nimede ja väärtuste vahel, et nimed oleksid laiemad või kitsamad. Topeltklõps paneb selle tagasi. Klaviatuuriga: too see fookusesse ja kasuta nooleklahve.

## Muuda väärtust

1. Klõpsa reale. Pealkiri ütleb "Joon".
2. Klõpsa väljal {{ui:Pikkus}}. Muutmise ajal näitab väli täielikku väärtust, mitte ümardatut.
3. Kirjuta `2500` ja vajuta {{key:Enter}}. Joon on nüüd 2500 pikk, säilitades oma algpunkti ja nurga.

{{key:Enter}} või klõps mujale rakendab väärtuse; {{key:Esc}} paneb vana väärtuse tagasi. Iga muudatus on üks tagasivõtmise samm.

### Avaldised ja ühikud

Iga arvuväli võtab rohkem kui lihtsa arvu:

| Kirjutad | Saad |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (tolli, joonisel jalgades ja tollides) |
| `900mm`, `3.5m`, `2ft` | Teisendatud joonise ühikutesse |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (nurgaväljad) |
| `0.5r`, `100g` | Radiaanid ja grad, kraadidena |

Pikkus ühikuga eeldab, et joonisel on ühikud: määra kõigepealt {{ui:Ühikud}} jaotises {{ui:Uued objektid}} (kui midagi pole valitud). Vale sisend lükatakse tagasi märkmega paneeli all ja midagi ei muutu; seda ei salvestata kunagi nullina. Funktsioonid: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; nurgad kraadides.

## Muuda mitut objekti korraga

1. Vali mitu objekti, näiteks 8 joont ja 4 mõõtu.
2. Pealkiri ütleb "12 objekti", ja ülal olev loend pakub **Kõik (12)**, **Joon (8)** ja **Mõõt (4)**.
3. **Kõik** näitab, mis igal objektil on (kiht, värv, joontüüp …). Vali **Mõõt (4)**, et näha mõõtude seadeid.
4. Muuda väärtust, näiteks {{ui:Komakohad}} väärtuseks `1`.

Kõik neli mõõtu muutuvad ühe tagasivõtmise sammuga. Väli, kus on **Erinev**, tähendab, et objektid erinevad; väärtuse kirjutamine määrab selle kõigile. Lukustatud kihtidel olevaid objekte ei muudeta, ja märkus ütleb, mitu.

## Valiku koguarvud

Kui mitu objekti on valitud, ütleb jaotis {{ui:Kokku}} paneeli ülaosas:

- **Objektid**: mitu iga liiki, näiteks "8 joont, 2 murdjoont, 1 ring".
- **Kogupikkus**: joonte, kaarte ja murdjoonte summa (splainid loetakse ka), ja mitu objekti see on.
- **Kogupindala**: suletud objektide summa: ringid, täielikud ellipsid, suletud murdjooned ja viirutused (viirutuse augud lahutatakse).

Need on joonise pikkusformaadis (jalad ja tollid, kui see neid kasutab; pindalad siis ruuttollides ja ruutjalgades).
Olekuriba näitab sama pikkust ja pindala alati, kui objekte on valitud; {{ui:Sätted}} › {{ui:CadCraft}} › {{ui:Valiku pikkus ja pindala}} › {{ui:Peidetud}} lülitab selle välja. Ühe objekti puhul näitab {{ui:Geomeetria}} tema enda pikkust ja pindala, nagu varem.

## Koordinaadid

Iga punkt näitab **X**, **Y** ja **Z**: joone algus ja lõpp, keskpunktid, sisestuspunktid, teksti asukohad, praegune murdjoone tipp. Jooned näitavad ka **Delta X**, **Delta Y** ja **Delta Z** (ainult lugemiseks). Murdjoontel ja viirutustel on **Kõrgus** (üks Z kogu objektile).

Punkti nime kõrval olev sihikunupp laseb selle valida joonisel: klõpsa sellel ja siis klõpsa uuele asukohale (püüdmised töötavad). Väärtused on maailmakoordinaadid.

## Üldine

| Väli | Mida see on |
|---|---|
| {{ui:Kiht}}, {{ui:Värv}}, {{ui:Joontüüp}}, {{ui:Joontüübi mõõtkava}}, {{ui:Joonepaksus}} | Nagu kihtide paneelis; {{ui:Kihi järgi}} järgib kihti |
| {{ui:Läbipaistvus}} | Kihi järgi, ploki järgi või 0 kuni 90% |
| {{ui:Paksus}} | Kui kaugele joonte, ringide, kaarte, murdjoonte, punktide ja teksti ulatuvad Z-suunas |
| {{ui:Materjal}} | Kihi järgi, ploki järgi, Globaalne või nimi, mille joonis tõi |
| {{ui:Printimisstiil}} | Ainult lugemiseks: joonised trükitakse värvi järgi läbi lehe [printimisstiilide tabeli](topic:plot-pdf#plot-style-tables) |
| {{ui:Hüperlink}} | Veebiaadress, mis on objektiga seotud |

## Mida iga tüüp näitab

| Valitud | Mida saad muuta |
|---|---|
| Joon | Alguse ja lõpu X, Y, Z; pikkus; nurk |
| Ring | Keskpunkt; raadius; läbimõõt; ümbermõõt; pindala (igaüks määrab raadiuse) |
| Kaar | Keskpunkt; raadius; algus- ja lõppnurk; kogunurk; kõõl (näitab kaare pikkust ja pindala) |
| Ellips | Keskpunkt; pooltelg ja poolteljed; raadiuse suhe; põhitelje nurk; algus- ja lõppnurk |
| Murdjoon | Tippude sirvija (allpool); üldine laius; kõrgus; suletud; pindala, kui suletud (skaleerib seda keskpunkti suhtes) |
| Tekst | Sisu; stiil; joondus; kõrgus; pööre; laiusefaktor; kaldenurk; määratud laius; reavahe; annotatiivne; asukoht |
| Plokiviide | Sisestuspunkt; pööre; skaala X, Y, Z ja ühtlane skaala; atribuutide väärtused |
| Viirutus | Muster; skaala; nurk; algpunkt; assotsiatiivne; saarte tuvastamine; taustavärv; kõrgus |
| Mõõt | Vt allpool |
| Mitmeosaline noolejuhis | Tekst; kõrgus; laius; teksti pool; noolepea suurus; maandumiskaugus; noolepea punkt |
| Vaateaken | Skaala; keskpunkt ja suurus lehel; vaate keskpunkt mudelis; sees; vaade lukus |

### Murdjoone tipud

{{ui:Praegune tipp}} näitab, millise tipu järgi allpool olevad väljad käivad. Kasuta noolenuppe või kirjuta number, et liikuda teisele tipule; tippude arvul pole piiri. Igal tipul on X, Y, algus- ja lõpulõigu laius ning lõigu kõverus, mis algab seal (0 = sirge).

## Mõõdud

Mõõdul on oma **Mõõtestiil**, mida ta mõõdab, tema punktid ja kõik seaded:

- **Jooned ja nooled:** noolepea iga otsa jaoks, noole suurus, märgi suurus, mõõdujoone ja laiendusjoone värvid ja joonepaksused, kumbki pool või kumbki laiendusjoon peidetud, laiendusjoone nihe ja pikendus.
- **Tekst:** ülekirjutus (tühjaks jätmiseks mõõdetud väärtus; `<>` tähistab seda sinu enda tekstis), stiil, värv, kõrgus, nihe, vertikaalne ja horisontaalne asend, alati horisontaalne, pööre, taustatäide.
- **Sobitamine:** üldskaala, rea vahe, mis liigub, kui ruumi napib, ja teksti liikumine.
- **Põhiühikud:** formaat, komakohad, ümardamine, eesliide, järelliide, mõõtkava, komaeraldaja, algavate ja lõppevate nullide mahasurumine; nurkade puhul nurgaformaat ja komakohad.
- **Alternatiivsed ühikud:** sees või väljas, formaat, komakohad, korrutaja (25,4 teeb tollid millimeetriteks), ümardamine, eesliide ja järelliide.
- **Tolerantsid:** puudub, sümmeetriline, kõrvalekalle, piirid või põhiline, ülemise ja alumise väärtusega, komakohad, kõrgus ja asukoht.

Mis tahes neist muutmine avatud mõõdul viskab ära teise programmi tehtud joonise ja CadCraft joonistab selle uuesti.

:::note
Horisontaalne teksti asend (esimese või teise laiendusjoone kõrval) ja joone all olev tekst joonistatakse lineaarsetel ja joondatud mõõtudel; teistel mõõtudel neid hoitakse ja salvestatakse, kuid veel ei joonistata. Sobitamise valikud hoitakse ja salvestatakse, kuid veel ei joonistata: CadCraft paigutab teksti oma reegli järgi (joone kohale, väljapool, kui ei mahu).
:::

## Midagi pole valitud

Kui midagi pole valitud, näitab paneel:

- **Uued objektid:** kiht, värv, joontüüp, joonepaksus ja tekstikõrgus, mida uued objektid saavad; joonise ühikud ja pikkusformaat; praeguse kihi joontüüp ja joonepaksus; mõõtmed uutele mõõtudele. Lehel tulevad enne lehe nimi, paber ja suund.
- **Vaade:** ekraanil oleva keskpunkt, kõrgus ja laius. Kirjuta väärtus, et vaade sinna liigutada.
- **Muu:** UCS-i ikoon sees või väljas, UCS (alati Maailm: CadCraftil pole veel kasutaja koordinaatsüsteeme) ja annotatsiooni skaala.

## Ülaosa nupud

| Nupp | Teeb |
|---|---|
| Lehter | {{cmd:QSELECT}}: vali tüübi ja omaduse järgi |
| Osuti | {{cmd:SELECT}}: vali objektid käsureal |
| Pluss või 1 | Kas klõps lisab valikule (pluss) või asendab selle (1); sama seade kui {{ui:Sätted}}, {{ui:CadCraft}} |
| Nööpnõel | Automaatpeitmine, eespool |

## Levinud vead

- **Väljale kirjutamine ei teinud midagi.** Vajuta {{key:Enter}} või klõpsa mujale, et rakendada. Punane väli ja märkus tähendavad, et sisend lükati tagasi.
- **Pikkus ühikuga lükati tagasi.** Joonisel pole ühikuid. Määra {{ui:Ühikud}}, kui midagi pole valitud.
- **Näed ainult Kiht ja Värv.** Valitud on mitut liiki objekte ja valitud on **Kõik**. Vali üks liik ülal olevast loendist.
- **Mõned objektid ei muutunud.** Need on lukustatud kihil. Tee kiht lukust lahti kihtide paneelis.
- **Kirjutatud tähed läksid väljale.** Kui väljal on kursor, kirjutatakse klahvid sinna. Vajuta {{key:Enter}} või {{key:Esc}} ja kirjuta siis käsk.
