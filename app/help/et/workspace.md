---
title: CadCrafti ekraan
summary: Ekskursioon joonistusrakenduse iga riba, paneeli ja sakini nende ekraanil nähtavate nimede järgi.
keywords: ekraan, liides, tööriistariba, lint, paneelid, käsurida, olekuriba, sakid, paigutuse sakid, omadused, kihipaneel, ekskursioon
from: b5a33388
---

Ekraanil on seitse osa. Ülevalt alla: rakenduseriba, tööriistariba, joonisala koos paneeliga igal küljel, joonise all olevad sakid, käsurida ja olekuriba.

## Rakenduseriba

Ülal olev õhuke riba kuulub saidile, mitte joonisele. See näitab CadCrafti logo, rakenduse nime, käitatava versiooni, lingi rakenduse lehele, nupu {{ui:Abi}} (või {{key:F1}}), nupu {{ui:Salvesta võrguks}}, nupu {{ui:Täisekraan}} ja kaks teemanuppu, {{ui:Paber}} ja {{ui:Mudel}}.

Nupp {{ui:Sätted}} (hammasratas) sisaldab CadCrafti enda sätteid ja kõiki rakendusi ühiseid sätteid: vaata [CadCrafti sätted](topic:settings).

{{ui:Salvesta võrguks}} hoiab CadCrafti koopiat, sealhulgas DWG-lugejat, selles brauseris, et see avaneks ilma ühenduseta. Silt näitab olekut: „Salvestan N / M“, „Valmis võrguta kasutamiseks“, „Ei saanud salvestada“ või „Võrguta kasutamine pole saadaval“. Vaata [Töötamine võrguta](common:offline).

:::note
Rakenduseriba nupud {{ui:Paber}} ja {{ui:Mudel}} muudavad ainult ekraani värve: {{ui:Paber}} on hele teema, {{ui:Mudel}} tume. Neil pole midagi pistmist joonise all oleva vahekaardiga {{ui:Mudel}}, mis lülitub joonise ja selle lehtede vahel.
:::

Nupp {{ui:Täisekraan}} või {{key:Ctrl+Shift+F}} (Ctrl-klahv igas arvutis, sh Macis) käib läbi kolm ekraanirežiimi: tavaline, täisekraan ja täisekraan peidetud ribadega. Kui ribad on peidetud, too kursor ekraani ülaservale, et need tagasi tuua.

## Tööriistariba

Rakenduseriba all on tööriistariba. Iga nupp käivitab käsu, täpselt nagu oleksid selle sisestanud, nii et käsurida küsib mõlemal juhul samu küsimusi. Nupu kohal hoides näed selle käsu aliast. Rühmad on:

| Rühm | Nupud |
|---|---|
| Fail | {{ui:Uus}}, {{ui:Ava}}, {{ui:Salvesta}}, {{ui:Salvesta nimega}}, {{ui:Trüki}} |
| Joonista | {{ui:Joon}}, {{ui:Murdjoon}}, {{ui:Ring}}, {{ui:Kaar}}, {{ui:Ristkülik}}, {{ui:Hulknurk}}, {{ui:Ellips}}, {{ui:Tekst}}, {{ui:Lõik}}, {{ui:Viirutus}} ja {{ui:Veel}}: {{ui:Punkt}}, {{ui:Konstruktsioonijoon}} ja {{ui:Kiir}} (vaata [Konstruktsioonijooned ja kiired](topic:construction-lines)) |
| Muuda | {{ui:Teisalda}}, {{ui:Kopeeri}}, {{ui:Pööra}}, {{ui:Mõõtkava}}, {{ui:Peegelda}}, {{ui:Venita}}, {{ui:Paralleelnihe}}, {{ui:Lõika}}, {{ui:Pikenda}}, {{ui:Ümardus}}, {{ui:Faas}}, {{ui:Lõhu}}, {{ui:Kustuta}} ja {{ui:Veel}}: {{ui:Massiiv}}, {{ui:Ühenda}}, {{ui:Sobita omadused}}, {{ui:Katkesta}} ja {{ui:Pikenda}} |
| Märgista | {{ui:Lineaarne}}, {{ui:Joondatud}}, {{ui:Nurk}}, {{ui:Raadius}}, {{ui:Läbimõõt}} (mõõdud), {{ui:Viiktekst}} (mitmeviiksed viiktekstid) ja {{ui:Veel}}: {{ui:Jätka mõõtu}}, {{ui:Baasmõõt}} ja {{ui:Pilvkontuur}} |
| Parameetriline | {{ui:Automaatne}}, {{ui:Seo}}, {{ui:Mõõt}}, {{ui:Parameetrid}} ja {{ui:Veel}} iga piiranguga (vaata [Joonise seostamine](topic:constraints)) |
| Plokid | {{ui:Loo}}, {{ui:Lisa}}, {{ui:Teek}} ja {{ui:Veel}}: {{ui:Muuda plokki}} ja {{ui:Määra atribuut}} |
| Lehed | {{ui:Uus leht}}, {{ui:Vaateaken}} |
| Redigeeri | {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}} (lõikelauale), {{ui:Kleebi}} ja {{ui:Veel}}: menüü koos {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Kleebi kohale}}, {{ui:Dubleeri ja teisalda}}, {{ui:Kustuta}}, {{ui:Vali kõik}}, {{ui:Tühista valik}}, {{ui:Kiirvalik}}, {{ui:Vali sarnased}} ja {{ui:Otsi ja asenda}}, igaühega oma klahvi |
| Vaade | {{ui:Ulatus}}, {{ui:Aken}}, {{ui:Eelmine}} ja {{ui:Veel}}: {{ui:Mõõda kaugust}}, {{ui:Pindala}}, {{ui:Mõõda (raadius, nurk …)}} ning jagatud ekraan: {{ui:Jaga kõrvuti}}, {{ui:Jaga üksteise alla}}, {{ui:Neli paani}}, {{ui:Üks paan}} (vaata [Ekraani jagamine](topic:split-screen)), ja {{ui:Pööra vaadet 90° vasakule}}, {{ui:Pööra vaadet 90° paremale}}, {{ui:Tagasi maailma}} (vaata [Vaate pööramine](topic:ucs-and-turned-view)) |

{{ui:Kopeeri}} rühmas Muuda on käsk {{cmd:COPY}} (baaspunkt, seejärel kuhu iga koopia läheb); {{ui:Kopeeri}} rühmas Redigeeri paneb objektid lõikelauale {{ui:Kleebi}} jaoks. Vaata [Kopeerimine, kleepimine ja dubleerimine](topic:copy-paste). Käsu nupp, mis parasjagu töötab, jääb esiletõstetuks, kuni käsk lõpeb. Tööriistavihjed nimetavad Windowsi kiirklahve („Ctrl+O“); Macis töötab ka {{key:Mod+O}}.

Lühikeses aknas (näiteks sülearvutis, mille ekraan on skaleeritud 125 % või rohkem) ei võta tööriistariba kunagi joonise kohta: kui joonisele jääks liiga vähe kõrgust, jätavad nupud sõnad ikoonide alt ja rühmanimed ära (nime näed nupu kohal hoides), ning kui see ei piisa, muutub tööriistariba üheks reaks, mida saab küljele kerida. Kõrgem aken toob sõnad tagasi.

## Vasak paneel

Vasakul paneelil on kolm jaotist.

- **{{ui:Kihid}}.** Joonise iga kiht, praegune märgitud täidetud punktiga. Klõpsa nimel, et see kiht praegusest teha. Igal real on värvitahvel (klõpsa, et valida värv) ja neli nuppu: sisse/välja (silm), külmuta (lumehelves), lukusta (luku) ja trüki (printer). {{ui:Uus kiht}} avab kasti, et lisada üks. Vaata [Joonise korrastamine kihtidega](topic:layers).
- **{{ui:Plokid}}.** Joonises määratletud plokid, mitu korda iga on kasutatud, ning nupp {{ui:Lisa}} igale. Vaata [Plokkide tegemine ja sisestamine](topic:blocks).
- **{{ui:Joonis}}.** Avatud faili faktid: nimi (koos „(muudetud)“, kui on salvestamata muudatusi), vorming, suurus, ühikud, objektide, kihtide, plokkide ja lehtede arv. Pärast faili avamist näitab kast „Selle faili kohta“ kõike, mida CadCraft ei suutnud näidata või pidi teisendama.

## Joonisala

Ekraani keskel on joonis. Kursor on ristik. Kui CadCraft tahab punkti, näitavad väike märk ja silt („Lõpp-punkt“, „Keskpunkt“), kuhu objektihaake maandub. Kui see tahab objekte, on ristikul valikukast ja selle all olevad objektid süttivad.

Kui joonis on tühi, näitab kaart „Alusta joonistamist“ mõnda esimest käsku. See kaob, kui käivitad käsu või avad faili. Võid mis tahes DWG- või DXF-faili selle ala mis tahes kohta lohistada ja avada.

## Joonise all olevad sakid

Joonise all on sakid: kõigepealt {{ui:Mudel}}, siis {{ui:3D}}, siis üks sakk iga lehe (paigutuse) kohta ning nupp {{ui:+}}.

- {{ui:Mudel}} on joonis ise, täissuuruses, joonise ühikutes.
- {{ui:3D}} näitab joonist maapinnal lamamas ja sellest tehtud solide. Kui see on nähtav, on tööriistaribal rühm {{ui:3D}} joonise rühmade asemel. Vaata [Mudel 3D-s](topic:3d-solids).
- Iga lehe sakk on paberileht tiitelploki ja vaateakendega mudelile. Seal joonistatu on paberiühikutes (millimeetrid või tollid). Topeltklõpsa vaateaknas, et töötada mudeliga selle kaudu (vaata [Töö mudeliga vaateakna kaudu](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Pikk lehe nimi lühendatakse sakil; hoia sakil, et näha kogu nime. Paljude lehtede korral näitab {{ui:Sätted}} › {{ui:CadCraft}} › {{ui:Lehevahekaardid}} › {{ui:Ainult lehenumbrid}} sakil ainult iga lehe numbrit (A-101).
- {{ui:+}} teeb uue lehe raami, tiitelploki ja ühe vaateaknaga. See on sama mis käsk {{cmd:LAYOUT}}.
- Topeltklõpsa lehe sakil, et seda ümber nimetada. Kui sakk on fookuses, liiguvad {{key:Left}} ja {{key:Right}} sakkide vahel.

Igal sakil on oma suum ja nihe. Vaata [Lehe seadistamine](topic:sheets-and-viewports).

## Parem paneel: Omadused

Parem paneel muutub vastavalt valikule.

- **Ei ole midagi valitud, vahekaardil {{ui:Mudel}}:** pealkiri on {{ui:Praegused sätted}}. Siin seadistad {{ui:Kiht}}, {{ui:Värv}} ja {{ui:Teksti kõrgus}} uutele objektidele, joonise {{ui:Ühikud}} ning uute mõõtude suurused ({{ui:Teksti kõrgus}}, {{ui:Noole suurus}}, {{ui:Komakohad}}, {{ui:Üldine mõõtkava}}).
- **Ei ole midagi valitud, lehel:** pealkiri on „Leht:“ ja lehe nimi. Võid lehe ümber nimetada, muuta selle {{ui:Paber}} ja {{ui:Suund}}, {{ui:Trüki see leht}} või {{ui:Kustuta see leht}}. Uute objektide sätted järgnevad allpool.
- **Üks objekt valitud:** selle tüüp pealkirjana (Joon, Ring, Tekst, Mõõt, Vaateaken …), siis selle kiht, värv ja geomeetria. Sisesta uus väärtus ja vajuta {{key:Enter}}, et muuta.
- **Mitu objekti valitud:** mitu ja nende ühine {{ui:Kiht}} ja {{ui:Värv}}. Kumbki muutus muudab kõiki. „Erinev“ tähendab, et need erinevad.

Vaata [Muutmine haardetega ja omadustega](topic:grips-and-properties).

Selle all avaneb paneel {{ui:Parameetrid}}, kui valid {{ui:Parameetrid}} või sisestad {{cmd:PARAMETERS}}: kõik parameetrid ja mõõtmispiirangud ühes tabelis. Vaata [Parameetrite ja võrrandite kasutamine](topic:parameters).

## Käsurida

Allservas on käsurida: ajalugu, mida tegid, ja selle all küsimus.

- Küsimuse silt loeb `Käsk:`, kui midagi ei tööta. Kui käsk töötab, näitab see küsimust, selle valikuid nurksulgudes ja vaikeväärtust nurksulgudes, näiteks `Määra ringi raadius [Läbimõõt] <500>:`.
- Kui sisestad käsu nime, pakub vihje paremal sobivaid käske. Vajuta {{key:Tab}}, et võtta esimene. „Sellist käsku pole“ tähendab, et midagi ei sobi.
- {{key:Up}} ja {{key:Down}} toovad tagasi varem sisestatud read.
- Ajalugu hoiab viimased 400 rida. Käskude teated, mõõtmised käskudest {{cmd:DIST}} ja {{cmd:LIST}} ning salvestamise ja trükkimise aruanded ilmuvad siia.

## Olekuriba

Kõige alumine rida on olekuriba.

- **Koordinaadid** vasakul: ristiku X ja Y. Kui käsul on baaspunkt, näitab see ka kaugust ja nurka sellest, näiteks `Δ 1200 < 90°`.
- **Teated** keskel, näiteks „Ortho on“ või „Praegune kiht: Walls“. Need kaovad mõne sekundi pärast.
- **{{ui:Ruudustik}}**, **{{ui:Ortho}}**, **{{ui:Polaar}}**, **{{ui:Püüdmine}}**, **{{ui:Jälgi}}**, **{{ui:Dün}}** ja **{{ui:LWT}}** paremal. Igaüks on lüliti; vajutatud nupp on sees. {{ui:LWT}} näitab joonepaksusi ekraanil (vaata [Joonepaksused ja joonetüübid](topic:units-papers-scales#line-weights-and-linetypes)). Väike nool nupu {{ui:Püüdmine}} kõrval avab {{ui:Objektihaake}}, kus märgid, millised haakded on aktiivsed. Vaata [Punktidele objektidel haakumine](topic:object-snaps).

## PDF-iks trükkimise dialoog

{{ui:Trüki}} (või {{key:Mod+P}}) avab dialoogi {{ui:Prindi PDF-iks}}, seaded vasakul ja otsene eelvaade paremal. Vaata [Prindi PDF-iks](topic:plot-pdf).

## Abi

{{key:F1}} või nupp {{ui:Abi}} avab selle abi külgpaneelina; joonis jääb selle kõrval kasutatavaks. See töötab ilma ühenduseta. {{key:F1}} uuesti või {{key:Esc}} paneeli sees sulgeb selle. Vaata [Selle abi kasutamine](common:help).
