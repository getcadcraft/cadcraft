---
title: Ploki atribuudid
summary: Vaata ja muuda väärtusi, mida plokiviide kannab, nagu üksusenumber või tootja, ja säilita need, kui salvestad koopia.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, tiitelplokk, muuda kohapeal, atribuudiredaktor, attdef, määra atribuut, bedit, plokiredaktor, bclose, atribuut, atribuudid, attrib, silt, üksusenumber, väärtus, nähtamatu, konstantne, plokk, omadused, loend, seadmesilt
from: 34d307c7
---

## Mis on atribuudid

Atribuut on nimega väärtus, mis kulgeb koos plokiviitega: seadme sildi üksusenumber, ruumisildi nimi, ukse tuleohutusklass. Ploki definitsioon ütleb, millised atribuudid tal on (igaühel on **silt**, **viip**, **vaikeväärtus** ning oma teksti koht, suurus ja nurk). Iga plokiviide kannab oma väärtusi.

Mõned atribuudid on **nähtamatud**: need hoiavad andmeid, nagu tootja või mudelinumber, kuid ei joonistu kunagi. Mõned on **konstantsed**: sama igal viitel, plokiga fikseeritud.

## Kust atribuudid tulevad

- Avatud DWG- ja DXF-failide plokid säilitavad oma atribuudid koos iga viite väärtustega.
- Plokid, mille tood sisse käsuga {{cmd:INSERT}} ja valikuga {{ui:Fail}}, säilitavad oma. Vt [Lisa failist või teegist](topic:insert-from-file-and-library).
- Teegi üksused tulevad sisse atribuutidega plokkidena: nähtav üksusenumber ja üksuse andmed, nähtamatud.

- Enda tehtud plokid: määra kõigepealt atribuudid käsuga {{cmd:ATTDEF}} (allpool), seejärel vali need teiste objektidega, kui plokk teed.

## Määra atribuudid oma plokkidele

1. Joonista ploki jooned, näiteks ruumisilt.
2. Vali {{ui:Plokid}} › {{ui:Veel}} › {{ui:Määra atribuut}} või sisesta `ATT` ja vajuta {{key:Enter}}.
3. Ajalugu näitab režiime (`Invisible=No Constant=No Preset=No`). Sisesta `I`, `C` või `P`, et ühte vahetada, ja vajuta {{key:Enter}}, kui need on õiged. Nähtamatud väärtused säilivad, kuid ei joonistu; konstantsel on igal viitel sama väärtus; eelseadistatut ei küsita, kui plokk sisestatakse.
4. Sisesta silt (näiteks `ROOM_NO`: suurtähed, ilma tühikuteta), viip (`Room number`) ja vaikeväärtus (`101`).
5. Klõpsa, kuhu väärtus läheb, ja anna kõrgus ning pööre. Silt kuvatakse joonisel.
6. Tee plokk käsuga {{cmd:BLOCK}}, valides jooned ja atribuudi definitsioonid koos. Asendav viide saab vaikeväärtused; iga uus {{cmd:INSERT}} küsib need.

Valitud atribuudi definitsioon näitab {{ui:Silt}}, {{ui:Viip}}, {{ui:Vaikimisi}} ja režiime {{ui:Omadused}}-s.

## Muuda plokki: plokiredaktor

{{ui:Plokid}} › {{ui:Veel}} › {{ui:Muuda plokki}} ({{cmd:BEDIT}}, `BE`) avab ploki eraldi: sisesta selle nimi (või vali kõigepealt viide). Ülal olev riba ütleb, millist plokki muudad. Joonista, kustuta ja muuda selle objekte tavaliste käskudega ning lisa või muuda atribuutide definitsioone. Seejärel klõpsa {{ui:Salvesta plokk}} (või sisesta {{cmd:BCLOSE}} ja `S`): iga viide näitab muudatust ja üks {{key:Mod+Z}} võtab kõik tagasi. {{ui:Loobu muudatustest}} ({{cmd:BCLOSE}}, `D`) jätab ploki nagu oli.

Kui lisasid, eemaldasid või muutsid atribuutide definitsioone, toob salvestamine ka iga viite sirgu: sisestatud väärtused säilivad, uus atribuut saab vaikeväärtuse, eemaldatud kaob ja iga atribuut liigub tagasi sinna, kuhu definitsioon ta paneb. Ajalugu ütleb, mitu viidet uuendati.

## Muuda tiitelplokki kohapeal (REFEDIT)

Tiitelplokk lehel asub sageli plokis. Et muuta selle jooni või tekste lahkumata lehelt:

1. Vali tiitelplokk, seejärel {{ui:Plokid}} › {{ui:Veel}} › {{ui:Muuda kohapeal}} (või sisesta {{cmd:REFEDIT}}).
2. Selle sisu muutub tavalisteks objektideks sealsamas; kõik muu tuhmub ja seda ei saa muuta.
3. Muuda, kustuta või joonista: uued objektid saavad osaks plokist.
4. Klõpsa ülal ribal {{ui:Salvesta plokk}} (või sisesta {{cmd:REFCLOSE}} ja `S`). Iga viide näitab muudatust ja üks {{key:Mod+Z}} võtab kogu muutmise tagasi. {{ui:Loobu}} jätab ploki nagu oli.

Lingitud joonist, dünaamilist plokki või viidet, mida on suurendatud erinevalt üle ja püsti, ei saa kohapeal muuta: kasuta {{cmd:BEDIT}} (või ava lingitud joonis).

:::note
Salvesta või loobu plokiredaktoris enne joonise salvestamist: fail, mis salvestati redaktori ollessa avatud, sisaldab plokki sellisena, nagu see oli enne.
:::

## Täida väärtused, kui paigutad ploki

1. Sisesta `I` ja vajuta {{key:Enter}}, sisesta ploki nimi ja vajuta {{key:Enter}}.
2. Klõpsa, kuhu see läheb.
3. CadCraft küsib iga väärtust, näiteks `Enter Item number (ITEM) <>`. Sisesta väärtus ja vajuta {{key:Enter}}, või vajuta {{key:Enter}}, et jätta nurksulgudes näidatud vaikeväärtus.

Väärtusi, mille plokk märgib eelseadistatuks, ja konstantseid ei küsita. Need saavad oma vaikeväärtuse.

## Vaata ja muuda väärtusi

1. Klõpsa plokiviidet.
2. Paremas paneelis on {{ui:Atribuudid}} all igal sildil oma väärtus. Nähtamatud ütlevad `hidden`.
3. Klõpsa väärtust, sisesta uus ja vajuta {{key:Enter}}.

Joonis näitab uut väärtust kohe. Iga muudatus on üks samm: {{key:Mod+Z}} võtab selle tagasi.

**Atribuutide redaktor.** Topeltklõps viitel, millel on atribuudid (või {{cmd:EATTEDIT}}): dialoog {{ui:Muuda atribuute}} loetleb iga sildi koos viibi ja väärtusega. Sisesta uued väärtused; klõpsa rida, et muuta selle atribuudi {{ui:Kõrgus}}, {{ui:Pööre}}, {{ui:Laiusetegur}}, {{ui:Joondus}}, {{ui:Kiht}}, {{ui:Värv}} ja {{ui:Nähtamatu}} sätteid ainult sellele viitele. {{ui:Rakenda}} jätab dialoogi lahti; {{ui:OK}} rakendab ja sulgeb. Iga {{ui:Rakenda}} või {{ui:OK}} on üks tagasivõtmise samm.

**Käsurealt** küsib {{cmd:ATTEDIT}} iga väärtuse järjest: sisesta uus või vajuta {{key:Enter}}, et jätta alles.

## Muuda atribuutide definitsioone (BATTMAN, ATTSYNC)

{{ui:Plokid}} › {{ui:Veel}} › {{ui:Atribuudihaldur}} ({{cmd:BATTMAN}}) loetleb ploki atribuudid: muuda silti, viipa või vaikeväärtust, märgi {{ui:Nähtamatu}}, {{ui:Konstantne}} või {{ui:Eelseadistatud}}, ja liiguta neid üles või alla (järjekord, milles väärtusi küsitakse). Kui {{ui:Uuenda viiteid (väärtused säilivad)}} on märgitud, toob {{ui:Rakenda}} ka iga viite sirgu; ümber nimetatud silt säilitab oma väärtused. Iga {{ui:Rakenda}} on üks tagasivõtmise samm.

{{cmd:ATTSYNC}} toob viited käsitsi kokku nende ploki definitsioonidega: `S` valib viite, `N` nimetab ploki, `A` teeb kõik plokid. Väärtused säilivad.

Teegi üksuse oma väljade (selle ID, versiooni, litsentsi ja autorinimetuse) väärtused on näidatud, kuid mitte muudetavad, et uuenduste kontroll töötaks. Selle üksusenumber ja kogus on sinu muuta.

## Loetle need

Vali viited ja sisesta `LI` (käsule {{cmd:LIST}}). Ajalugu näitab iga atribuuti kui `TAG = value`, lisades `(invisible)` või `(constant)`, kui see kehtib.

## Liigutamine, pööramine ja lahtivõtmine

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} ja {{cmd:MIRROR}} säilitavad väärtused; tekst liigub koos plokiga ja jääb loetavaks.
- {{cmd:EXPLODE}} muudab nähtavad atribuudid lihtsaks tekstiks koos väärtustega. Nähtamatud jäetakse välja.

## Salvestamine

Salvestatud DWG ja salvestatud DXF säilitavad mõlemad iga atribuudi: iga ploki definitsioonid (ka nähtamatud, konstantsed ja eelseadistatud) ja iga viite väärtused. Teised CAD-programmid loevad neid tavaliste ploki atribuutidena.

DXF R12-s lõigatakse väärtus, mis on pikem kui 255 märki, 255 märgini, ja ajalugu ütleb seda.

## Levinud vead

- **Väärtus ei ilmu joonisele.** See on nähtamatu või tühi. Nähtamatud väärtused on endiselt paremas paneelis näha.
- **Sisestatud väärtus läks käsureale.** Klõpsa esmalt paremas paneelis väärtuse kastis.
