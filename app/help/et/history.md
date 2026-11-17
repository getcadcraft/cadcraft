---
title: Ajalugu: versioonid ja muudatused
summary: Vaata joonise versioone (koopiaid, mida Studio hoiab salvestamisel, ja pilve omi), ava või taasta üks neist ning võrdle kahte, muutused on värvidega näidatud.
keywords: ajalugu, versioonid, versioonide ajalugu, taasta, eelmine versioon, võta salvestamine tagasi, võrdle, võrdle jooniseid, dwgcompare, muudatused, lisatud, eemaldatud, muudetud, hetktõmmis, varukoopia, pilve versioonid
from: 141d37b3
---

## Mida valmistad

Vaatad joonise varasemat versiooni ja loetelu sellest, mis on praegusest erinev: mis lisati, mis eemaldati ja mis muutus, märgituna joonisel värvidega.

## Ajaloo avamine

Trüki `HISTORY` (või `HIST`) ja vajuta {{key:Enter}}, või vali rühmas {{ui:View}} menüüst {{ui:More}} käsk {{ui:History…}}. Paneel avaneb joonise kõrvale ja jääb lahti, kui töötad, nii et saad joonist nihutada ja suumida koos joonisel olevate värvidega.

Ajalugu töötab CadCraft Studios. Brauseris paneel ainult ütleb seda.

## Kust versioonid tulevad

- **Sellel arvutil.** Iga kord, kui avad joonise Studios failist, ja iga kord, kui selle salvestad, hoiab Studio faili koopiat oma hoidlas sellel arvutil. Esimene koopia on {{ui:As opened}}: fail sellisena, nagu see oli enne sinu esimest üle salvestamist. Studio hoiab iga joonise viimast 25 koopiat ning kui kõik koopiad kokku ületavad 400 MB, kustutatakse kõige vanemad enne. Salvestus, mis ei muuda midagi, ei jäta koopiat. Miski ei laadita üles.
- **Pilves.** Kui avad Studios joonise oma pilvefailidest, loetleb paneel ka {{ui:In the cloud}}: kõik versioonid, mida pilv hoiab, koos numbri, salvestaja ja märkmega. Paneel ainult loeb neid. CadCraft ei saada oma salvestusi veel pilve, seega on need versioonid, mis on salvestatud teistest seadmetest ja veebist. Kui Studio ütleb, et sisselogimine aegus, logi Studios uuesti sisse.

Joonist, mida pole veel salvestatud, koopiad ei oma: salvesta see esmalt.

## Versiooni avamine või taastamine

- {{ui:Open}} paneb selle versiooni eraldi vahekaardile. Sinu joonist ei puudutata.
- {{ui:Restore}} asendab selle joonise valitud versiooniga. Enne küsitakse kinnitust. Studio hoiab enne ajaloos koopiat joonisest sellisena, nagu see praegu on (märgitud {{ui:Before a restore}}), ja faili ei kirjutata enne, kui salvestad. Taastamist ei saa tagasi võtta klahviga {{key:Mod+Z}}; kasuta seda koopiat.

## Võrdlemine

1. Klõpsa versioonil {{ui:Compare}}. Seda võrreldakse {{ui:The drawing as it is now}}-ga; et võrrelda seda mõne muu versiooniga, vali enne see valikust {{ui:Compare with}}.
2. Loetle tulemus loendi all: mitu objekti lisati, eemaldati ja muudeti, ning nende loend. Klõpsa loendi kirjel, et vaade liiguks sinna.
3. Joonisel:
   - **roheline** tähendab lisatud objekte,
   - **punane** tähendab eemaldatud objekte (need on ainult vanemas versioonis),
   - **oranž** tähendab muudetud objekte: uus kuju on tahke ja vana katkendlik.
4. {{ui:Show on the drawing}} lülitab värvid sisse ja välja; {{ui:Clear the colours}} eemaldab tulemuse. Paneeli sulgemine eemaldab ka värvid.

Loend ütleb, mis muutus muudetud objektis: selle tekst, et see liikus, selle kuju, kiht, värv, joonetüüp või joonelaius. Iga leht võrreldakse eraldi; värvid näidatakse avatud lehel.

:::note
Joonisel ei ole objektidel püsivat numbrit, seega CadCraft seob objekte selle järgi, mis nad on: sama objekt mõlemal pool on muutumatu; sama tüüpi ja kihi objekt, mis jääb vana objekti oma suuruse piiresse, on sama objekt, muudetuna; kõik ülejäänu on lisatud või eemaldatud. Objekt, mis on liigutatud kaugele oma algsest kohast, näib ühes kohas eemaldatuna ja teises lisatuna. Ploki viide loeb kaasa oma ploki sisu.
:::

## Levinud vead

- **„Koopiaid pole veel.“** Studio hoiab koopia iga avamise ja salvestamise korral joonisel, mille fail on sellel arvutil. Brauseri vahelehelt avatud või kunagi salvestamata joonisel koopiaid pole.
- **Pilveloend puudub.** See ilmub joonisele, mis on avatud pilvest Studios; diskilt avatud fail ei ole pilvejoonis.
- **Kõik näib muudetuna.** Kaks eri programmiga salvestatud versiooni kirjutavad sama joonise eri viisil (anonüümsete plokkide nimed, ümardamine). Võrdle CadCraftiga salvestatud versioone.
