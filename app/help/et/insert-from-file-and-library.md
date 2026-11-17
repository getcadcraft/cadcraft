---
title: Lisa failist või teegist
summary: Too plokk või terve joonis sisse teisest DWG- või DXF-failist ning paiguta üksusi teegist, failist või teisest teegist koos nende autoriõiguste ja uuendustega.
keywords: lisa, fail, teek, librarycraft, üksus, seade, plokk teisest joonisest, wblock, disainikeskus, autorimärkus, litsents, uuendus, voog, item.json
from: 316188d2
---

## Ploki lisamine teisest joonisest

1. Trüki `I` ja vajuta {{key:Enter}}, või klõpsa rühmas Blocks nupul {{ui:Insert}}.
2. Kohas `Enter block name or [File/Library]` trüki `F` ja vajuta {{key:Enter}}.
3. Vali DWG- või DXF-fail sellel arvutil. Seda loetakse siin; seda ei avata ega laadita üles.
4. Dialoogis {{ui:Insert from}} vali nimekirjast plokk (otsimiseks trüki väljale {{ui:Filter blocks}}) või jäta {{ui:The whole drawing}}. Klõpsa {{ui:Insert}}.
5. Klõpsa kohale, kuhu see läheb, ja täida kõik atribuudid, mida ta küsib.

Kogu joonis tuleb sisse ühe plokina, mis on nimetatud faili järgi. Ka valitud plokki kuuluvad plokid tulevad kaasa. Nende kasutatavad kihid lisatakse sellele joonisele.

Kui teine joonis on teistes ühikutes (näiteks tollid ja millimeetrid), skaleerib CadCraft viite sobima ja ütleb seda ajaloos.

### Kui nimi on juba kasutusel

Kui sellel joonisel on juba sama nimega plokk, küsib CadCraft:

- {{ui:Keep existing}} kasutab selle joonise sama nimega plokki.
- {{ui:Rename}} toob uue sisse nimega `Name (2)`.

Kogu lisamine on üks samm: {{key:Mod+Z}} eemaldab viite ja kopeeritud definitsioonid.

## Teegi avamine

Klõpsa paneelil Blocks nupul {{ui:Library…}}, või rühmas Blocks nupul {{ui:Library}}, või trüki `LIB`. Kohas `INSERT` avab teegi ka `L`.

Teegil on neli allikat, mis on vahelehed:

- {{ui:Library}}: CadCraft'i teek. Otsi nime, tootja või mudeli järgi ja filtreeri kategooria järgi.
- {{ui:Files…}}: üksuse fail (`item.json`) mis tahes teegist või joonis, arvutustabel või 3D-mudel, millest üksusi teha: DWG või DXF (iga plokk saab üksuseks), CSV nime ja mõõtude veergudega või glTF- või OBJ-mudel. Miski ei laadita üles.
- {{ui:Standard}}: terasprofiilid (lõigetena, vaadetena või 3D-elementidena) ja standardosad nagu poldid, mutrid ja laagrid, tehtud siin avaldatud tabelite järgi. Vt [Terasprofiilide ja standardosade paigutamine](topic:steel-and-standard-parts).
- {{ui:Other feeds}}: teised teegid, mis vastavad samamoodi nagu Library. Lisa nende aadress üks kord; see brauser jätab selle meelde.

Iga kaart näitab eelvaadet, nime, tootjat ja mudelit, litsentsi ning versiooni. Tagasi võetud üksus on märgitud {{ui:Withdrawn}} koos põhjusega; enne paigutamist küsib CadCraft kinnitust.

## Üksuse paigutamine

1. Klõpsa kaardil {{ui:Place}}.
2. Klõpsa kohale, kuhu üksus läheb. Enne trüki `R`, et seda pöörata, või `S`, et seda skaleerida.
3. Kohas `Enter Item number (CC-ITEM)` vajuta {{key:Enter}} järgmise vaba numbri jaoks või trüki oma number.

Üksus muutub plokiks nimega `LIB_<name>_v<version>`, joonistatakse selle joonise ühikutes. Kui joonisel ühikuid pole, paigutatakse üksus millimeetrites ja ajalugu ütleb seda; sea enne paremal paneelil {{ui:Units}}.

Selle andmed tulevad kaasa nähtamatute atribuutidena: üksuse id ja versioon, litsents ja autorimärkus, tootja, mudel, kategooria ja mõõdud. Vt [Ploki atribuudid](topic:attributes).

## Üksused sinu keeles

Üksusel võib olla nimi ja kirjeldus ka teistes keeltes. Kui need on keeles, millele CadCraft on seadistatud (Sätted › Üldine › Keel), kasutavad kaart ja paigutatud ploki üksuse nimi neid. Plokk ise säilitab nime, mis on tehtud üksuse enda nimest, nii et joonisel on iga üksuse kohta üks plokk, olenemata sellest, mis keeles see paigutati.

## Uuenduste kontrollimine

1. Ava teek.
2. Klõpsa {{ui:Check for updates}}.

Iga joonise teegiüksus kuvatakse koos oma üksusenumbritega ning sellega, kas see on ajakohane, kas sellel on uuem versioon (ja mis muutus) või kas see on tagasi võetud. Klõpsa real {{ui:Update}} või {{ui:Update all}}. Iga viide liigub uue versiooni plokki ja säilitab oma üksusenumbri, koguse, asukoha, nurga ja kihi. {{key:Mod+Z}} võtab uuenduse tagasi.

## Kasutatu tunnustamine

Klõpsa {{ui:Library credits}}. Iga üksus on loetletud koos oma autorimärke rea ja litsentsiga.

- {{ui:Copy attribution}} kopeerib ühe üksuse rea; {{ui:Copy all}} kopeerib kõik read.
- {{ui:Download CSV}} salvestab loendi koos üksusenumbrite, tootjate, mudelite, litsentside ja autorimärgetega. Selle saab avada mis tahes arvutustabelis.

Litsentsid nagu CC BY nõuavad, et tööd kasutades autorit tunnustad. Pane read joonisele, spetsifikatsiooni või projekti märkmetesse.

## Sümbolid ja varad

Teegis on kolme liiki üksusi: Sümbolid (joonistuskonventsioonid, 2D), Tüübid (millest element koosneb) ja Varad (füüsilised objektid). Vahelehel {{ui:Library}} näitab loend {{ui:Kind of item}} sümbolid ja varad koos, ainult sümbolid või ainult varad. Tüübid on need, millest BimCraft'i projekt koosneb, seega CadCraft neid ei loetle.

## Sisselogimine teeki

Klõpsa {{ui:Sign in to the library}}. Saidil avaneb väike aken; kui oled seal sisse logitud, saab CadCraft näidata sinu meeskonna üksusi ning registreerida, mida paigutad, nii et kuuled, kui kasutatud üksus muutub. Sisselogimine kehtib selle brauseri vahelehe jaoks. Tühista see millal tahes oma konto turvalehel.

## Levinud vead

- **„IFC-tüüpidest üksuste tegemine on BimCraftis.“** IFC- ja perefailid loetakse BimCraft'i rakenduses. Tee üksus seal või teegis ja kasuta siin selle `item.json` faili.
- **„Teegiga ei saa ühendust.“** Oled võrguta või teek on maas. Joonises juba olevad üksused ei mõju sellest.
- **Üksus on liiga suur või liiga väike.** Joonise ühikud on valed või määramata. Võta tagasi, sea {{ui:Units}} ja paiguta uuesti.
