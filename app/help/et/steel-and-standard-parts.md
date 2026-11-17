---
title: Paiguta terasprofiilid ja standardosad
summary: Joonista terasprofiilid, kõrgusmärgid ja 3D-elemendid avaldatud profiilitabelitest, paiguta polte, mutreid, seibe, tihvte, laagreid, võtmeid ja hammasrattaid nende standardite järgi ning loetle need detailide loendis.
keywords: teras, profiil, lõige, kuju, W-profiil, laiajalg, I-tala, kanal, nurk, hss, toru, pipe, ipe, hea, heb, upn, tala, post, element, kõrgusmärk, aisc, en 10365, polt, kruvi, mutter, seib, tihvt, varras, laager, võti, võtmesoon, hammasratas, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standardosad, detailide loend, materjaliloend, bom, steelmember, partslist
from: 547c1048
---

Teegi vahekaardil {{ui:Standard}} on kahte liiki asju, mis on tehtud siin avaldatud tabelitest (midagi ei laadita alla):

- **Terasprofiilid**: 1,335 suurust. W, S, C, L, HSS ja Pipe AISC Shapes Database v16.0 järgi; IPE, HEA, HEB ja UPN standardi EN 10365:2017 järgi. DetailCraft kasutab sama tabelit.
- **Standardosad**: kuuskantpeaga kruvid (ISO 4017), kuuskantpoldid (ISO 4014), kuuskantmutrid (ISO 4032), lihtsad seibid (ISO 7089), tolli kuuskantpoldid ja mutrid (ASME B18.2.1 ja B18.2.2), paralleelsed tihvtid (ISO 2338), sügavkaarlaagrid (ISO 15), paralleelsed võtmed (DIN 6885-1) ja otshambalised hammasrattad (moodulid standardist ISO 54).

Kõik siin on jagatud litsentsi CC0 all: seda võib kasutada mis tahes otstarbeks, autoritunnustust pole vaja.

## Paiguta terasprofiil

1. Ava teek ({{ui:Teek}} rühmas Plokid või kirjuta `LIB`) ja klõpsa vahekaarti {{ui:Standard}}.
2. Vali esimeses loendis perekond, näiteks {{ui:W-profiilid}}. Sisesta otsingukasti tekst, et suurusi kitsendada: `W12` näitab kõiki W12-profiile.
3. Valikus {{ui:Paiguta kujul}} vali:
   - {{ui:Lõige}}: ristlõige, selle keskpunkt sisestuspunktis.
   - {{ui:Kõrgusmärk}}: element külgvaates, nii pikk, nagu ütleb {{ui:Pikkus (mm)}}, alates selle vasakpoolse otsa keskelt.
   - {{ui:3D-element}}: tahke keha 3D-vahekaardil (allpool).
4. Klõpsa suuruse kaardil {{ui:Paiguta}} ja seejärel klõpsa kohta, kuhu see läheb, nagu iga teegi elemendi puhul.

Lõige või kõrgusmärk muutub plokiks. Selle atribuudid kannavad suurust, tabelit, millest see pärineb, pikkust (kõrgusmärgi puhul) ja materjali, mida saab täita.

:::note
S-profiile, kanaleid ja UPN-i joonistatakse paralleelsete äärikutega keskmise paksusega ning nurki ruudukujuliste nurkadega: tegelikud äärikud on kaldus ja nurgad ümardatud. W-, IPE-, HEA- ja HEB-profiilidel on juureümardused ning HSS-il nurgaraadiused.
:::

## Tee 3D-element

Vali {{ui:3D-element}} ja klõpsa {{ui:Paiguta}}, või kirjuta käsureale {{cmd:STEELMEMBER}} (`SMEMBER`):

1. Realt `Section size` vajuta {{key:Enter}}, et kasutada näidatud suurust, või sisesta üks, näiteks `HSS6x6x1/4` või `IPE300`.
2. Klõpsa algpunkt, seejärel lõpp-punkt. Element kulgeb nende vahel ja toetub maapinnale.
3. Posti jaoks kirjuta `C`, klõpsa alusepunkt ja sisesta kõrgus.

Element on 3D-vahekaardil suletud tahke keha. Teisalda või kopeeri seda seal nagu iga muud tahket keha. {{key:Mod+Z}} eemaldab selle jälle.

## Paiguta standardosa

1. Vahekaardil {{ui:Standard}} vali perekond, näiteks {{ui:Kuuskantpeaga kruvid}}.
2. Kruvi, poldi, tihvti või võtme puhul sisesta selle {{ui:Pikkus (mm)}} (tollides perekondade puhul tollides). Hammasratta puhul sisesta {{ui:Hambad}}, {{ui:Servalaius (mm)}} ja {{ui:Auk (mm)}}. Jäta kast tühjaks, et kasutada seal näidatud tavalist väärtust.
3. Klõpsa suuruse juures {{ui:Paiguta}} ja klõpsa kohta, kuhu see läheb.

Kruvid, poldid ja tihvtid joonistatakse küljelt, peaga laagripinnaga sisestuspunktis. Mutrid, seibid, laagrid ja hammasrattad joonistatakse otse peale vaadates ning võtmed ülevalt. Keermed joonistatakse tavapäraselt: juur õhuke joonena, keerme lõpp paksuna. Hammasrattad joonistatakse tipuringi, jaotusringi ja juuringina, mitte hammast-hamba kaupa.

Iga osa plokk kannab oma tüüpi, standardit, suurust, pikkust ja materjali atribuutidena ning kaalu nominaalkujult terasest. Muuda materjali paneelil {{ui:Omadused}}.

Samad osad on teegis ka elementidena ning PartCraft avab need parameetriliste detailidena ({{ui:Standardosa}} rühmas Fail).

## Tee detailide loend

- Teegis klõpsa {{ui:Detailide loend}}: iga standardosa ja terasprofiil joonisel, grupeeritud tüübi, standardi, suuruse, pikkuse ja materjali järgi, koos koguse ja positsiooninumbritega. {{ui:Laadi CSV alla}} salvestab selle tabelarvutusse.
- Joonistamiseks kirjuta {{cmd:PARTSLIST}} (`PLIST`), klõpsa tabeli vasakpoolset ülanurka ja vajuta {{key:Enter}}, et kasutada tavalist teksti kõrgust, või sisesta üks.

Loend loetakse plokkide atribuutidest, nii et see on õige ka pärast joonise salvestamist DWG- või DXF-vormingus ja uuesti avamist.

## Levinud vead

- **„Sellise nimega terasprofiili pole …“**: kirjuta suurus nii, nagu {{ui:Standard}} vahekaart seda loetleb: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Element on 3D-vahekaardil, mitte plaanil.** {{cmd:STEELMEMBER}} teeb tahke keha; ava 3D-vahekaart, et seda näha. Terase näitamiseks plaanil paiguta ka {{ui:Lõige}} või {{ui:Kõrgusmärk}}.
- **Pikkus on vahemikust väljas.** Polt peab olema pikem kui oma pea ja võti pikem kui oma laius. Kaartide all olev rida ütleb, milline väärtus lükati tagasi.
