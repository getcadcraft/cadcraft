---
title: Anna käsu suvanditele oma tähed
summary: Vasta käsu suvanditele tähtedega, mille valid ise, mis tahes keeles, ühest tekstifailist, mida saad muuta, importida ja eksportida.
keywords: suvandite tähed, optionkeys, optkeys, suvandi võti, võti, ümberseadistamine, kohandamine, oma tähed, import, eksport, polaar, massiiv, P, PO, keel, suvandite tõlkimine, lühivorm, mitmetähenduslik
from: 7c8328c6
---

## Mida sa õpid

Kuidas muuta tähti, mida sisestad käsu suvandite vastamiseks. Näiteks {{cmd:ARRAY}} küsib `[Rectangular/POlar]` ja võtab `PO` Polaari jaoks; võid teha, et `P` või mõni muu täht teeb sama, oma keeles, kui soovid.

## Kuidas suvanditele vastatakse

Kui käsk näitab suvandeid nurksulgudes, on sisestada suured tähed: `POlar` on `PO`, `eXit` on `X`.

Võid sisestada ka vähem tähti. Kui see, mida sisestad, sobib ainult ühte kuvatud suvandisse, võtab CadCraft selle: `[Rectangular/POlar]` korral on üksik `P` Polaar. Kui sobib kahte, nimetab käsurida need ja küsib uuesti:

```
C could be COUnt, COLumns. Type more letters.
```

Arve ei arvata kunagi, nii et sisestatud kaugus või arv loetakse alati arvuna.

## Lisa oma tähed

Igal käsul säilivad sisseehitatud tähed. Lisad oma tähed nende peale, nii et su loend sisaldab ainult seda, mida muutsid.

1. Ava {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Option letters}} (Suvandite tähed) ja klõpsa {{ui:Edit…}} (Muuda…). Või sisesta {{cmd:OPTIONKEYS}} ja vajuta {{key:Enter}}.
2. Jaotises {{ui:Command}} (Käsk) vali käsk, näiteks `ARRAY`. Loendis on iga käsk, mis küsib suvandeid, ja see algab viimati kasutatud käsust.
3. Jaotises {{ui:Option}} (Suvand) vali suvand. Igaüks näitab oma sisseehitatud tähti sulgudes, näiteks `POlar (PO)`.
4. Väljale {{ui:Your letters}} (Teie tähed) sisesta soovitud tähed, näiteks `P`, ja klõpsa {{ui:Add}} (Lisa).
5. Suvand ilmub nüüd jaotisesse {{ui:Your letters}} oma sisseehitatud ja sinu tähtedega. Klõpsa {{ui:Save}} (Salvesta).

Käivita {{cmd:ARRAY}}, vali objekt ja vajuta {{key:Enter}}. Küsimus näitab suvandi järel sinu tähti, `POlar (P)`, ja `P` vastab sellele.

Et ühe eemaldada, klõpsa selle rea lõpus x-il ja siis {{ui:Save}}-l. Suvand läheb tagasi ainult oma sisseehitatud tähtedele.

## Tähed, mida ei saa kasutada

Redaktor ei võta tähti, mis peidaksid midagi, mida käsurida juba loeb, ja ütleb põhjuse:

- sama käsu teise suvandi sisseehitatud tähed (`R` Polaari jaoks käsus `ARRAY`, kus `R` on Rectangular);
- kolmetäheline või pikem objektipüüdmise sõna, nagu `END`, `MID` või `CEN`, ning sõnad `ALL` ja `LAST`;
- samad tähed kahele erinevale suvandile ühe käsu sees.

Kui midagi on punaselt loetletud, on {{ui:Save}} väljas: paranda rida või eemalda see, ja see tuleb tagasi. Küsimuse sisseehitatud tähed võidavad alati sinu omad, nii et sinu loend ei saa takistada sisseehitatud vastust toimimast. Tähed, mis juhtumisi on käsu nimi, nagu `L` või `C`, on korras: suvandi küsimuses loeb käsurida vastust, mitte ei käivita käsku.

Käsu jaoks loetletud suvandid tulevad käskudest, mis jagavad selle küsimusi, nii et aeg-ajalt loetleb käsk suvandi, mida küsib ainult mõnel juhul.

## Üks valik kõigile käskudele

Jaotises {{ui:Command}} vali {{ui:Every command}} (Iga käsk). Suvandid on siis kõik suvandid, mis mistahes käsul on, nagu eXit või Undo. Seal lisatud tähed vastavad sellele suvandile kõikjal, kus käsk seda pakub. Ühele käsule lisatud tähed võidavad need.

## Tähed sinu keeles

Tähed võivad olla mis tahes tähestikust, nii et saad suvanditele vastata ilma klaviatuuri vahetamata: lisa `Š` suvandile Close jaotises {{ui:Every command}}, või `Ä` suvandile POlar käsus `ARRAY`.

CadCraft tuleb ainult inglise tähtedega. Sinu enda loend on see, kuidas sina, su kontor või sinu keelt jagavad inimesed ülejäänu seadistavad, ja {{ui:Export}} (Ekspordi) teeb faili, mille võid edasi anda.

## Muuda tekstina

Redaktoris {{ui:Edit as text}} (Muuda tekstina) näitab sama loendit tekstireadena, üks iga suvandi kohta, ja just seda salvestab {{ui:Export}}:

```
ARRAY.PO,  P
*.X,       Q
```

Iga rida on käsk, punkt, suvandi sisseehitatud tähed, koma ja sinu tähed. Käsu asemel täht tähendab iga käsku. Rida, mis algab `;`-ga, on märkus.

## Mis jääb samaks

- Sisseehitatud tähed töötavad jätkuvalt sinu tähtede kõrval.
- Rutiinid ja tööriistariba nupud kasutavad jätkuvalt sisseehitatud tähti, nii et midagi, mis laadisid, ei katke. Kui oma tähed segaksid ja tahad sisseehitatud tähti ise sisestada, pane ette allkriips: `_PO`.
- Käsu lühinimi on midagi muud: vt [Muuda käsualiaseid](topic:command-aliases).

## Read, mida CadCraft ei luba

Kui muudad tekstina või impordid faili, loetleb redaktor iga probleemi koos rea numbriga:

- käsku ei ole olemas (käsu alias on korras: `AR.PO` loetakse kui `ARRAY.PO`);
- rida ei ole kujul `COMMAND.OPTION, LETTERS`;
- tähtedes on tühik või märk (ainult tähed ja numbrid, kõige rohkem 16);
- samad tähed vastavad kahele erinevale suvandile ühe käsu sees.

## Import ja eksport

{{ui:Export}} (Ekspordi) salvestab sinu tähed tekstifailina, hoidmiseks või teisele inimesele andmiseks. {{ui:Import…}} (Impordi…) loeb sellise faili. Mõlemad on redaktoris ja jaotises {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}}.

Sätetes {{ui:Import…}} asendab sinu faili valitud failiga. Fail, millel on rida, mis põrkub või mida ei saa kasutada, ei võeta vastu; ava redaktor ja impordi see seal, et näha ridu. Redaktoris täidab see ainult kasti: midagi ei muutu enne, kui klõpsad {{ui:Save}}-l.

## Laadi uuesti või eemalda

Sisesta {{cmd:REINIT}} ja vajuta {{key:Enter}}, et rakendada oma faili uuesti. Et tähte eemaldada, kustuta selle rida ja klõpsa {{ui:Save}}-l.

## Sinu tähed järgivad sinu kontot

Kui oled getcadcraft.com-is sisse logitud, hoitakse sinu tähed sinu kontoga koos. Ava CadCraft teises brauseris või teises arvutis samal kontol ja need tulevad iseenesest; käsurida ütleb `Option letters from your account`. Kui muutsid neid kahes kohas, võidab uusim koopia ja asendatud säilib üks kord.

{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} ütleb, kus nad seisavad. Välja logituna või võrguühenduseta jäävad nad selle brauseri, ja lähevad sinu kontole järgmisel korral, kui neid salvestad sisselogituna.

Seotud: [Muuda käsualiaseid](topic:command-aliases) · [CadCrafti sätted](topic:settings) · [Käsuviide](topic:commands)
