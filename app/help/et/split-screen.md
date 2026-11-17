---
title: Jaga ekraan
summary: Näita joonist kahes, kolmes või neljas paanis, igaühel oma suumiga, aseta leht mudeli kõrvale ja ava mitu joonist kõrvuti.
keywords: jagamine, jaga ekraan, paanid, vports, vaateaknad, paigutatud, kõrvuti, virnastatud, kaks joonist, vahekaardid, dokumendivahekaardid, võrdlemine, eraldaja, mudel ja leht, mitu joonist, avatud joonised
from: ee2f034b
---

## Mida sa õpid

Kuidas vaadata ühte joonist mitmes paanis korraga, igaühel oma suumiga, ning kuidas avada mitu joonist ja vaadata neid kõrvuti.

## Jaga üks joonis paanideks

1. Ava joonis või joonista mõned jooned ja ringid.
2. Ava {{ui:Vaade}} › {{ui:Veel}} ja vali {{ui:Jaga kõrvuti}} (või kirjuta {{cmd:VPORTS}}, seejärel `2` ja {{key:Enter}}).

Joonistusala jaguneb kaheks paaniks, mõlemad näitavad sama vaadet. Aktiivsel paanil on sinine raam ja selles on ristkursor.

3. Klõpsa teises paanis. See muutub aktiivseks. (Esimene klõps ainult vahetab paani; klõpsa uuesti, et valida.)
4. Suumi rattaga. Suumib ainult see paan.
5. Lohista paanide vahelist joont, et üks neist oleks laiem. {{key:Home}} fokusseeritud eraldajal paigutab selle tagasi keskele.

{{cmd:VPORTS}} võtab ka `3` (kaks paani ühel küljel ja suur teisel: `L` või `R`), `4` ning `SI`, et jätta alles üks paan. Aktiivse paani vaade täidab siis ala. Lehel lisab {{cmd:VPORTS}} selle asemel lehele vaateakna (nagu AutoCADis); sel juhul kirjuta {{cmd:SPLIT}} või kasuta menüüd Vaade.

## Joonista ühest paanist teise

1. Jaga kõrvuti ja suumi iga paan joonise erinevasse nurka.
2. Kirjuta `L` ja vajuta {{key:Enter}}, seejärel klõpsa vasakpoolses paanis esimest punkti.
3. Klõpsa paremas paanis üks kord, et see aktiivseks teha, ja klõpsa seal teist punkti.

Joon kulgeb kahe koha vahel. Käsk jätkub, kui paane vahetad, ja kummipael näidatakse igas paanis.

## Mudel lehe kõrval

1. Jaga kõrvuti.
2. Klõpsa paremal paanil ja seejärel joonise all oleval lehe vahekaardil.

Parempoolne paan näitab lehte, vasakpoolne näitab endiselt mudelit. Igal paanil on oma ruum, nii et saad joonistada mudelile ja jälgida, kuidas lehe vaateaken järgib.

## Mitu joonist ühes aknas

1. Ava joonis. Seejärel ava teine (või vajuta {{ui:Uus}}).

Iga joonis avaneb oma vahekaardil joonistusala kohal. Vahekaardi valimiseks klõpsa sellel; käsurida, paneelid ja tagasivõtmine järgivad joonist, millele lülitud. {{key:Mod+C}} ühes joonises ja {{key:Mod+V}} teises kopeerib objektid nende vahel.

2. Klõpsa {{ui:Paiguta avatud joonised kõrvuti}} (jagamisikoon vahekaartide lõpus) või sellest kõrval olevat virnastatud ikooni.

Iga paan näitab nüüd ühte avatud joonist, kuni neljani. Klõpsa paanil, et sellel joonisel töötada.

3. Klõpsa vahekaardil {{ui:×}}, et see joonis sulgeda. Kui sellel on salvestamata muudatusi, küsib CadCraft enne.

:::tip
Kui aken hoiab ainult uut, puutumata joonist, siis joonise avamine kasutab seda vahekaarti, mitte ei lisa uut.
:::

## Nihuta ja suumi koos

Kahe redaktsiooni võrdlemiseks paiguta need kõrvuti ja klõpsa {{ui:Seo paanide vaated}} (lingiikoon vahekaartide lõpus), või vali see menüüst {{ui:Vaade}} › {{ui:Veel}}, või kirjuta {{cmd:LINKVIEWS}} ja `ON`. Nüüd liigutab üks paan või suum kõiki paane, mis näitavad mudelit (või kõiki paane, mis näitavad lehte), samasse kohta, nii et kaks joonist jäävad joondatuks. {{cmd:LINKVIEWS}} `OFF` laseb igal paanil taas iseseisvalt liikuda.

## Levinud vead

- **Mu klõps ei teinud midagi.** See muutis paani aktiivseks. Klõpsa uuesti, et valida või joonistada.
- **Ratas suumis vale paani.** Ratas suumib paani, mis on osuti all, ja muudab selle aktiivseks.
- **Paanid läksid tagasi üheks.** Joonise avamine näitab seda nii, nagu see salvestati; ilma paanideta salvestatud joonis avaneb ühe paaniga.
- **Lehelt lahkumisel hoiatatakse salvestamata muudatuste eest, mida ma ei näe.** Teine vahekaart hoiab muudatustega joonist. Lülitu sinna ja salvesta või lahku salvestamata.
