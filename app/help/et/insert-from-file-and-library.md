---
title: Lisa failist või teegist
summary: Too plokk või terve joonis sisse teisest DWG- või DXF-failist ning paiguta esemeid teegist, failist või teisest teegist koos nende autorimärkuste ja uuendustega.
keywords: lisa, fail, teek, librarycraft, ese, seadmed, plokk teisest joonisest, wblock, disainikeskus, autorid, autorimärkus, litsents, uuendus, voog, item.json
from: f6e4e452
---

## Plokk teisest joonisest sisestamine

1. Sisesta `I` ja vajuta {{key:Enter}}, või klõpsa rühmas Blocks (Plokid) nupul {{ui:Insert}} (Lisa).
2. Akna all olev käsurida küsib `Enter block name or [File/Library]`. Sisesta siis `F` ja vajuta {{key:Enter}}.
3. Vali DWG või DXF selles arvutis. Seda loetakse siin; seda ei avata ja midagi ei laadita üles.
4. Dialoogis {{ui:Insert from}} (Lisa failist) vali loendist plokk (sisesta {{ui:Filter blocks}} (Filtreeri plokke) leidmiseks), või jäta {{ui:The whole drawing}} (Kogu joonis). Klõpsa {{ui:Insert}}-l.
5. Klõpsa kohta, kuhu see läheb, ja täida need atribuudid, mida ta küsib.

Võid alustada ka paneelist {{ui:Blocks}}: sisesta selle kastis {{ui:Filter blocks}} `F` ja vajuta {{key:Enter}}, või sisesta midagi, mis ühegi plokiga ei ühti, ja klõpsa {{ui:From a file…}} (Failist…). `L` ja {{ui:Library…}} (Teek…) avavad teegi samamoodi. Enne versiooni 0.10.1 otsis kastis {{ui:Filter blocks}} sisestatud täht ainult selle joonise plokke ja vastas „No block matches the filter.” (Filtrile ei vasta ükski plokk.)

Et hoida enda plokkide joonis käepärast, klõpsa paneelis {{ui:Blocks}} jaotises {{ui:Libraries}} (Teegid) nupul {{ui:Add a drawing}} (Lisa joonis) ja vali DWG või DXF. Selle plokid on loetletud piltidega; klõpsa ühel, et see paigutada.

Terve joonis tuleb sisse ühe plokina, mis on nimetatud faili järgi. Tuleb ka plokid, mis on valitud ploki sees. Nende kasutatud kihid lisatakse sellele joonisele.

Kui teine joonis on teistes ühikutes (näiteks tollid ja millimeetrid), skaleerib CadCraft viite vastavaks ja ütleb seda ajaloos.

### Kui nimi on juba kasutusel

Kui sellel joonisel on juba sama nimega plokk, küsib CadCraft:

- {{ui:Keep existing}} (Säilita olemasolevad) kasutab selle joonise sama nimega plokki.
- {{ui:Rename}} (Nimeta ümber) toob uue sisse nimega `Name (2)`.

Kogu lisamine on üks samm: {{key:Mod+Z}} eemaldab viite ja kopeeritud definitsioonid uuesti.

## Teegi avamine

Klõpsa paneelis {{ui:Blocks}} nupul {{ui:Library…}} (Teek…), või rühmas Blocks nupul {{ui:Library}} (Teek), või sisesta `LIB`. Küsimuses `INSERT` avab selle ka `L`.

Teegil on neli allikat, vahelehtedena:

- {{ui:Library}} (Teek): CadCrafti teek. Otsi nime, tootja või mudeli järgi ja filtreeri kategooria järgi.
- {{ui:Files…}} (Failid…): eseme fail (`item.json`) mis tahes teegist või joonis, tabelarvutus või 3D-mudel, millest esemeid teha: DWG või DXF (iga plokk muutub eseme), CSV nime- ja suurusveergudega, või glTF- või OBJ-mudel. Midagi ei laadita üles.
- {{ui:Standard}} (Standardne): terasprofiilid (lõigetena, vaadetena või 3D-elementidena) ja standardosad nagu poldid, mutrid ja laagrid, tehtud siin avaldatud tabelite järgi. Vt [Paiguta terasprofiilid ja standardosad](topic:steel-and-standard-parts).
- {{ui:Other feeds}} (Muud voogud): teised teegid, mis vastavad samamoodi nagu {{ui:Library}}. Lisa nende aadress üks kord; see brauser mäletab seda.

Iga kaart näitab eelvaadet, nime, tootjat ja mudelit, litsentsi ja versiooni. Tagasi võetud ese on märgitud {{ui:Withdrawn}} (Tagasi võetud) koos põhjusega; CadCraft küsib, enne kui sa selle paigutad.

## Eseme paigutamine

1. Klõpsa kaardil nupul {{ui:Place}} (Paiguta).
2. Klõpsa kohta, kuhu ese läheb. Sisesta enne `R`, et seda pöörata, või `S`, et skaleerida.
3. Küsimuses `Enter Item number (CC-ITEM)` vajuta {{key:Enter}} järgmise vaba numbri jaoks või sisesta oma.

Ese muutub plokiks nimega `LIB_<name>_v<version>`, joonistatud selle joonise ühikutes. Kui joonisel ühikuid pole, paigutatakse ese millimeetrites ja ajalugu ütleb seda; määra enne paremal paneelis {{ui:Units}} (Ühikud).

Selle andmed tulevad kaasa nähtamatute atribuutidena: eseme ID ja versioon, litsents ja autorimärkus, tootja, mudel, kategooria ja mõõdud. Vt [Plokkide atribuudid](topic:attributes).

## Esemed sinu keeles

Ese võib kanda oma nime ja kirjeldust teistes keeltes. Kui tal on need keeles, millele CadCraft on seatud (Sätted › Üldine › Keel), kasutavad kaart ja paigutatud ploki eseme nimi neid. Plokk ise hoiab nime, mis on tehtud eseme enda nime järgi, nii et joonisel on üks plokk eseme kohta, sõltumata sellest, mis keeles see paigutati.

## Uuenduste kontrollimine

1. Ava teek.
2. Klõpsa {{ui:Check for updates}} (Otsi uuendusi).

Iga teeki ese joonisel on loetletud oma eseme numbritega ja sellega, kas see on ajakohane, on uuem versioon (ja mis muutus) või on tagasi võetud. Klõpsa real nupul {{ui:Update}} (Uuenda) või {{ui:Update all}} (Uuenda kõiki). Iga viide liigub uue versiooni plokile ja säilitab oma eseme numbri, koguse, koha, nurga ja kihi. {{key:Mod+Z}} tühistab uuenduse.

## Märgi ära, mida kasutasid

Klõpsa {{ui:Library credits}} (Teegi autorid). Iga ese on loetletud oma autorimärkuse rea ja litsentsiga.

- {{ui:Copy attribution}} (Kopeeri autorimärkus) kopeerib ühe eseme rea; {{ui:Copy all}} (Kopeeri kõik) kopeerib kõik read.
- {{ui:Download CSV}} (Laadi CSV alla) salvestab loendi eseme numbrite, tootjate, mudelite, litsentside ja autorimärkustega. See avaneb ükskõik millises tabelarvutuses.

Litsentsid nagu CC BY nõuavad, et märgiksid autori ära, kus teost kasutad. Pane read joonisele, spetsifikatsiooni või projektimärkmetesse.

## Sümbolid ja varad

Teegil on kolme liiki esemeid: Sümbolid (joonistamise tähised, 2D), Tüübid (millest element on tehtud) ja Varad (füüsilised objektid). Vahelehel {{ui:Library}} näitab loend {{ui:Kind of item}} (Objekti liik) Sümboleid ja varasid koos, ainult Sümboleid või ainult Varasid. Tüübid on see, millest BimCrafti projekt on ehitatud, nii et CadCraft neid ei loetle.

## Teeki sisselogimine

Klõpsa {{ui:Sign in to the library}} (Logi teeki sisse). Saidil avaneb väike aken; kui oled seal sisse loginud, saab CadCraft näidata sinu meeskonna esemeid ja registreerida, mida paigutad, nii et kuuled, kui kasutatud ese muutub. Sisselogimine kestab selle brauseri vahelehe jaoks. Tühista see igal ajal oma konto turvalehelt.

## Hoia oma esemed rubriigis Minu objektid

{{ui:My objects}} (Minu objektid) on privaatne loend teegis, mida näed ainult sina. See ei ole avalikus teegis, ei otsingus ega ei näidata sinu meeskonnale, ja see järgib sinu kontot igas arvutis, kus logid teeki sisse.

1. Teegi paneelis klõpsa {{ui:Files…}} ja loe fail.
2. Ese, mida tahad uuesti, klõpsa {{ui:Keep in my objects}} (Hoia minu objektides).
3. Hiljem klõpsa {{ui:My objects}} ja siis {{ui:Place}}. See paigutatakse nagu iga teegi ese, ja {{ui:Check for updates}} katab selle.
4. {{ui:Remove from my objects}} (Eemalda minu objektidest) eemaldab selle loendist. Joonistesse juba paigutatud koopiad jäävad alles.

Pead olema teeki sisse logitud. Faili lugemine ei lae midagi üles; eseme hoidmine saadab ainult selle ühe eseme sinu kontole.

:::note
My objects on katsetamisel ja ei pruugi veel sinu kontole avatud olla. Kui seal on „My objects is not open for this account yet” (Minu objektid pole selle konto jaoks veel avatud), saad ikka esemeid paigutada oma failidest, kasutades {{ui:Files…}}.
:::

## Levinud vead

- **„Esemete tegemine IFC-tüüpidest on BimCraftis.”** IFC- ja perekonnafaile loetakse rakenduses BimCraft. Tee ese seal või teegis ja kasuta siis selle `item.json`-i siin.
- **„Teegiga ei saanud ühendust.”** Oled võrguühenduseta või teek ei tööta. Joonisel juba olevaid esemeid see ei mõjuta.
- **Ese on liiga suur või liiga väike.** Joonise ühikud on valed või määramata. Võta tagasi, määra {{ui:Units}} ja paiguta uuesti.
