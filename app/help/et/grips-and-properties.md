---
title: Muuda haardepunktide ja omaduste abil
summary: Venita, teisalda ja muuda objekti suurust tema haardepunktide järgi ning trüki täpsed pikkused, raadiused, nurgad ja koordinaadid paneelil Omadused.
keywords: haardepunktid, omadused, venitamine, pikkus, raadius, koordinaadid, redigeeri, kiired omadused, omaduste paneel, muuda, kiht, värv
from: f22541ba
---

## Mida õpid

Kaks kiiret viisi objekti muutmiseks ilma käskuta: lohista selle **haardepunkte** või trüki uued väärtused paremal asuvale paneelile **Omadused**.

## Haardepunktid

Kui valid objekte (kuni 200 korraga) ilma käsku töötamata, ilmuvad neile väikesed ruudud. Need on haardepunktid:

| Objekt | Haardepunktid |
|---|---|
| Joon | Mõlemad otsad ja keskpunkt (teisaldab kogu joont) |
| Ring | Keskpunkt (teisaldab) ja neli punkti ringjoonel (muudavad raadiust) |
| Kaar | Keskpunkt ja mõlemad otsad (muudavad, kus kaar algab ja lõpeb) |
| Murdjoon | Iga tipp |
| Tekst, punkt, ploki viide | Sisestuspunkt |
| Ellips | Keskpunkt |
| Mõõt | Selle määravad punktid ja mõõtejoone asukoht |
| Vaateaken | Keskpunkt (teisaldab) ja neli nurka (muudavad suurust) |

### Haardepunkti teisaldamine

1. Joonista joon ja klõpsa sellel. Ilmub kolm haardepunkti.
2. Klõpsa haardepunktil ühes otsas. Olekuribal on tekst „Klõpsa, kuhu see haardepunkt läheb (Loobumiseks Esc). Püüdmised ja Ortho kehtivad.“
3. Liiguta ristkursorit. Eelvaade liigub kaasa.
4. Klõpsa uuel asukohal või püüa punkt teisel objektil ja klõpsa.

Ots liigub ja ülejäänud joon jääb paigale. Võid ka vajutada haardepunktil ja lohistada selle sinna, kuhu see peab jääma, ning lasta lahti.

:::note
Haardepunkti jaoks ei saa koordinaati trükkida. Täpse asukoha saamiseks püüa punkt või trüki väärtus paneelil Omadused.
:::

Haardepunkti teisaldamise tühistamiseks vajuta {{key:Esc}} või tee parem klõps.

## Omadused

Parem paneel näitab valitud objekti omadusi.

1. Klõpsa joonel. Paneeli pealkiri näitab „Joon“.
2. Klõpsa väljal {{ui:Length}}, trüki `2500` ja vajuta {{key:Enter}}.

Joon on nüüd täpselt 2500 pikk, säilitades algpunkti ja nurga. {{key:Enter}} või klõps mujal rakendab väärtuse; {{key:Esc}} paneb vana väärtuse tagasi. Iga muudatus on üks võtmise samm, ka siis, kui korraga muutub palju objekte.

Väljadel võib olla avaldisi (`=2*45`) ja pikkusi ühikutega (`3'6"`, `900mm`), igal punktil on X, Y ja Z ning mitut objekti saab muuta korraga. Kogu info on jaotises [Omaduste paneel](topic:properties-panel).

## Levinud vead

- **Haardepunkte ei ilmu.** Käsk töötab (vajuta {{key:Esc}}), või on valitud üle 200 objekti, või asub objekt lukustatud kihil.
- **Haardepunkt läks valesse kohta.** Püüdmine haaras selle. Hoia klõpsamise ajal all {{key:Shift}}, et püüdmised ignoreerida.
- **Omaduste trükkimine ei muutnud midagi.** Vajuta {{key:Enter}} või klõpsa mujal, et rakendada. Lubamatu sisend (null või negatiivne pikkus ja raadius, tekst, mis ei ole väärtus) muudab välja punaseks ja ütleb põhjuse.
- **Trükitud tähed läksid Omaduste väljale.** Kui väljal on kursor, trükitakse klahvid sinna. Vajuta {{key:Enter}} või {{key:Esc}} ja seejärel trüki käsk.
