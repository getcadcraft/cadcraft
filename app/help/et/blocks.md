---
title: Plokkide tegemine ja lisamine
summary: Muuda joonistatud uks plokiks, paiguta see uuesti teistesse kohtadesse, mõõtkavadesse ja nurkadesse ning korrasta kasutamata plokid.
keywords: plokk, bmake, sisesta, ddinsert, sümbol, purge, explode, redefine, määratle uuesti, aluspunkt, viide, loenda, count, bcount, loend, csv, atribuudid, andmete eraldamine
from: 125a129d
---

## Mida sa teed

Ukse sümbol, mis muudetakse plokiks nimega `DOOR-900` ja mis paigutatakse kolm korda: nii nagu joonistatud, 90 kraadi pööratult ja peegeldatult.

Plokk on nimega grupeeritud objektide kogum. Joonistad selle ühe korra; iga koht, kus seda kasutad, on **plokiviide**, mis viitab ühele ühisele definitsioonile. Vasakpoolses paneelis oleva jaotise {{ui:Plokid}} all on loetletud joonise plokid ja iga ploki kasutuskordade arv.

## Joonista uks

1. Sisesta `L` ja vajuta {{key:Enter}}.
2. Sisesta `0,0` ja vajuta {{key:Enter}}.
3. Sisesta `@0,900` ja vajuta {{key:Enter}}, seejärel vajuta veel kord {{key:Enter}}. See on uksetiib.
4. Sisesta `A` ja vajuta {{key:Enter}}.
5. Sisesta `C` ja vajuta {{key:Enter}}, et määrata kõigepealt keskpunkt.
6. Sisesta `0,0` ja vajuta {{key:Enter}} keskpunkti jaoks.
7. Sisesta `900,0` ja vajuta {{key:Enter}} algpunkti jaoks.
8. Sisesta `0,900` ja vajuta {{key:Enter}} lõpp-punkti jaoks. See on avanemiskaar.
9. Klõpsa {{ui:Ulatus}}.

Kaared lähevad algpunktist lõpp-punkti vastupäeva.

## Tee plokk

1. Sisesta `B` ja vajuta {{key:Enter}}, või klõpsa rühmas Plokid nupule {{ui:Loo}}.
2. Reale `Enter block name` sisesta `DOOR-900` ja vajuta {{key:Enter}}.
3. Reale `Specify insertion base point` sisesta `0,0` ja vajuta {{key:Enter}}. See on uksepöörde: punkt, mis jääb sinna, kuhu plokk paigutad.
4. Reale `Select objects` lohista aken ümber uksetiiva ja kaare.
5. Vajuta {{key:Enter}}.

Ajalugu ütleb: `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Paneel {{ui:Plokid}} loetleb DOOR-900 ja selle kõrval `1×`: üks viide. Klõpsa uksele: nüüd valitakse see ühe objektina, mida nimetatakse „plokiviiteks“.

:::tip
Võid objektid enne valida ja seejärel sisestada `B`. CadCraft küsib endiselt nime ja aluspunkti ning kasutab seejärel sinu valikut.
:::

## Lisa plokk

1. Sisesta `I` ja vajuta {{key:Enter}}, või klõpsa paneelil {{ui:Plokid}} DOOR-900 kõrval nuppu {{ui:Lisa}}.
2. Reale `Enter block name or [File/Library] <DOOR-900>` vajuta {{key:Enter}}. (Paneeli nupp {{ui:Lisa}} täidab nime sinu eest.)
3. Uks liigub ristkursori järel. Klõpsa kohta, kuhu uksepöörde peaks jääma.

Ilmub teine uks.

## Lisa pööratult või mõõtkavas

1. Sisesta `I` ja vajuta {{key:Enter}}, seejärel vajuta nime kinnitamiseks {{key:Enter}}.
2. Reale `Specify insertion point [Scale/Rotate]` sisesta `R` ja vajuta {{key:Enter}}.
3. Sisesta `90` ja vajuta {{key:Enter}}. Eelvaade pöördub.
4. Klõpsa, et see paigutada.

Mõõtkavateguri määramiseks sisesta hoopis `S`; see kehtib mõlemas suunas. Mõõtkava ja pöörde seadistus jäetakse järgmiseks lisamiseks meelde. Ukse peegeldamiseks lisa see ja kasuta seejärel viidel käsku {{cmd:MIRROR}}.

## Muuda paigutatud plokki

Vali plokiviide. Paremas paneelis saad muuta selle {{ui:X}}, {{ui:Y}}, {{ui:Mõõtkava X}}, {{ui:Mõõtkava Y}} ja {{ui:Pööre}}. Negatiivne {{ui:Mõõtkava X}} peegeldab selle.

## Määratle plokk uuesti

Et muuta kõiki uksi korraga, tee sama nimega plokk:

1. Joonista ukse uus versioon.
2. Sisesta `B` ja vajuta {{key:Enter}} ning sisesta `DOOR-900`.
3. Reale `Block "DOOR-900" already exists. Redefine it?` sisesta `Y` ja vajuta {{key:Enter}}.
4. Anna aluspunkt ja vali uued objektid nagu varem.

Iga viide DOOR-900-le kuvab nüüd uut versiooni.

Või muuda plokki ise: {{ui:Plokid}} › {{ui:Veel}} › {{ui:Muuda plokki}} ({{cmd:BEDIT}}) avab selle eraldi ning {{ui:Salvesta plokk}} salvestab selle joonisesse tagasi. Vaata [Plokkide atribuudid](topic:attributes#change-a-block-the-block-editor).

## Loenda plokid ja ekspordi loend

Sisesta {{cmd:COUNT}} (või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Loenda plokid}}) ja siis:

- klõpsa ühele uksele: valitakse kõik uksed selles alas ning ajalugu ütleb, mitu neid on siin ja kogu joonisel;
- või vajuta {{key:Enter}}: ajalugu loetleb iga ploki koos arvuga, suurimast esimesena;
- või sisesta `E`, seejärel `C` CSV-faili jaoks arvudega (mudelis, lehtedel, kokku) või `A` ühe reaga iga viite kohta koos kihi, asukoha, pöörde ja iga atribuudi väärtusega, mis on tabelarvutusprogrammis avatav loend.

Nimetuid plokke (mõõtmed, tabelid) ja plokkide sees olevaid viiteid ei loendata. Lahtrid, mis algavad nagu valem (`=`, `+`, `-`, `@`), saavad ette märgi `'`, et tabelarvutus näitaks neid tekstina.

## Lõhku ja puhasta

- {{cmd:EXPLODE}} (`X`) muudab valitud plokiviite tagasi eraldi objektideks. Definitsioon jääb alles.
- {{cmd:PURGE}} (`PU`) eemaldab plokkide definitsioonid, mida enam miski ei kasuta. Ajalugu ütleb, mitu eemaldas.

## Plokkide nimed

Nimi võib olla kuni 255 märki pikk ja võib sisaldada tühikuid, kuid ta ei tohi alata tärniga ega sisaldada märke `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ega tagurpidi apostroofi. Kui salvestad DXF R12, kirjutatakse nimed suurtähtedega, muud märgid peale tähtede, numbrite ning märkide `$`, `_` ja `-` muudetakse märgiks `_` ning nimed lõigatakse 31 märgi pikkuseks; ajalugu ütleb, mitu muutus. Lühikesed suurtähtedest, numbritest ja kriipsudest koosnevad nimed, nagu `DOOR-900`, jäävad muutmata. Salvestatud DWG säilitab nimed nii, nagu sina need sisestasid, suur- ja väiketähtedega; muutuvad ainult märgid, mida DWG ei luba (`|` muutub märgiks `$0$`, teised muutuvad märgiks `_`).

## Kirjuta plokk või objektid eraldi faili

Sisesta `W` ({{cmd:WBLOCK}}) ja vali **Objektid**, **Plokk** või **Kogu joonis**. Tulemuseks on uus DWG- või DXF-fail, mis sisaldab ainult kihte, stiile ja plokke, mida ta kasutab, ning sinu aluspunkt on selle nullpunkt. Objektide puhul saad need alles jätta, muuta plokiks või kustutada need sellest joonisest.

## Levinud vead

- **Plokk jäi ristkursorist kaugele.** Aluspunkt ei olnud objektidel. Tee plokk uuesti, asetades aluspunkti nurgale või uksepöörde kohale.
- **„No objects selected; nothing made.“** Vajutasid {{key:Enter}}, enne kui midagi valisid.
- **„This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK).“** Sisesta `F`, et tuua plokk teisest joonisest, või `L` teegist. Vaata [Lisa failist või teegist](topic:insert-from-file-and-library).
- **„A viewport cannot go in a block.“** Jäta vaateakende raamid valikust välja.
