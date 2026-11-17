---
title: Dokumendid: väljavõtmine, revisjonid ja väljastamine
summary: Hoia projektikausta joonised kontrolli all. Võta fail välja, et keegi teine seda ei muudaks, kontrolli see sisse uue revisjonina, saada ülevaatamisele ja väljasta kinnitaja nimega. Ajalugu, mis mida kasutab, materjalide loend ja tiitelplokid, mis näitavad revisjoni.
keywords: projekti sätted, kinnitajad, administraatorid, revisjonitähed, ASME, ainult lugemiseks, revisjonide võrdlus, koopia avamine, partcraft, bimcraft, dokumendid, DOCUMENTS, DOCS, hoidla, dokumendihaldus, pdm, väljavõtmine, sisse kontrollimine, lukustus, revisjon, rev, revisjonitäht, väljastamine, väljastatud, kinnitamine, ülevaatus, aegunud, kus kasutatud, bom, materjalide loend, tiitelplokk, redaktsiooniplokk, projektikaust
from: ee938722
---

## Mida sa valmistad

Projektikaust, kus igal joonisel on revisjon (A.1, A.2 … siis A, B …) ja olek (Töös, Ülevaatamisel, Väljastatud, Aegunud), kus korraga saab faili muuta ainult üks inimene ning kus iga väljavõtmine, sisse kontrollimine, kinnitus ja katkestatud väljavõtmine on kirja pandud koos sellega, kes ja millal seda tegi.

Kõik hoitakse kaustas endas, peidetud kaustas `.ccvault` joonistega kõrvuti. Jagatud kettal või sünkroonitud kaustas töötab see terve meeskonna jaoks. Serverit ei ole ja midagi ei laadita üles.

## Dokumendid avamine

Sisesta `DOCUMENTS` (või `DOCS`) ja vajuta {{key:Enter}}. Paneel avaneb joonise kõrvale.

Vali {{ui:Choose the project folder}} ja vali kaust, kus on projekti joonised. Projektikaustad töötavad CadCraft Studios ja brauserites, mis oskavad kausta avada (Chrome, Edge). Muudes brauserites paneel seda ütleb.

Esimesel korral sisesta oma nimi (see läheb kõige juurde, mida teed) ja selle arvuti nimi. Kui oled sisse logitud, on su nimi juba olemas.

## Hoidla alustamine

Kaust, mis pole veel hoidla, pakub {{ui:Start a vault in this folder}}. Sisesta projekti nimi. Seejärel ava {{ui:Files not in the vault}} ja vali iga faili juures, mille soovid kontrolli alla tuua, {{ui:Add}}. Lisatud fail algab revisjonist **A.1**, Töös.

## Joonise muutmine

1. Vali joonise juures {{ui:Open}}. See avaneb CadCraftis. Kui see pole sinu väljavõetud, ainult vaata, ära muuda: Salvesta keeldub üle kirjutamast ja ütleb, miks (kasuta {{ui:Save as}}, et hoida enda koopiat).
2. Vali {{ui:Check out}}. Keegi teine ei saa seda nüüd välja võtta; paneel näitab, kellel see on, millises arvutis ja alates millisest ajast.
3. Joonista.
4. Vali {{ui:Check in}} ja ütle, mis muutus. Avatud joonis salvestatakse projektikausta oma vormingus ja saab järgmiseks revisjoniks (A.1, siis A.2). Sisse kontrollimine ilma muudatuseta jätab revisjoni samaks.

{{ui:Undo check-out}} annab faili tagasi ilma uue revisjonita.

## Ülevaatus ja väljastamine

- {{ui:Send for review}}: fail on ülevaatuse ajal ainult lugemiseks.
- {{ui:Approve}}: sisesta kinnitaja nimi. A.3 saab **A**, Väljastatud. Väljastatud failid on ainult lugemiseks.
- {{ui:Send back}}: tagasi olekusse Töös, koos põhjusega.
- {{ui:New revision}} väljastatud failil võtab selle välja järgmiseks tähiseks: selle esimene sisse kontrollimine on **B.1**. {{ui:Undo check-out}} enne seda jätab faili tähisele A.
- {{ui:Make obsolete}} viib väljastatud faili kasutusest välja.

Projektil võib olla nimekiri, kes tohib kinnitada, ja see võib nõuda, et kinnitaja poleks inimene, kes faili sisse kontrollis (vt allpool Projekti sätted).

## Projekti sätted

Ava paneelis {{ui:Project settings}}:

- **Kinnitajad**: üks nimi reale. Kui neid on, saavad ainult nemad väljastust kinnitada.
- **Kinnitaja peab olema keegi muu kui autor**: nn „neli silma“ reegel.
- **Administraatorid**: üks nimi reale. Kui neid on, saavad ainult nemad katkestada teise inimese väljavõtmise või muuta neid sätteid.
- **Välja jäetavad revisjonitähed**: {{ui:Use the ASME Y14.35 sequence}} jätab vahele I, O, Q, S, X ja Z, või kirjuta ise soovitud tähed. Juba antud tähed jäävad alles; valik kehtib järgmistele revisjonidele.
- **Väljavõtmine loetakse vanaks pärast**: päevade arv (vaikimisi 14).

Vali {{ui:Save settings}}. Muudatus kantakse logisse koos sellega, kes selle tegi.

## Keegi jättis faili välja võetuks

{{ui:Break check-out}} vabastab faili, mille on välja võtnud keegi teine (ta on ära või tema arvuti jäi seisma). Pead sisestama põhjuse: see kantakse logisse koos sellega, kelle väljavõtmine see oli. Kui projektil on administraatorid, saavad seda teha ainult nemad. Üle 14 päeva vana väljavõtmine on märgitud kui pikaajaline.

## Ajalugu, revisjonid, kasutused, kasutavad

Vali faili nimi, et näha:

- {{ui:History}}: iga sündmus, uuemad ees, koos sellega, kes, millises arvutis ja millal.
- {{ui:Revisions}}: iga hoitud revisjon. Iga revisjoni koopia on hoidlas (sama sisu hoitakse üks kord). {{ui:Open copy}} avab selle revisjoni tavalise koopiana, mis ei saa hoidla faili üle kirjutada. {{ui:Compare with}} loetleb, mis lisati, eemaldati ja muudeti selle revisjoni ja eelmise (või mõne muu valitud) vahel, ning värvib selle joonisel.
- {{ui:Uses}}: joonised, millele see viitab (xrefid), dokumendid, millele IFC-mudel osutab, PartCraft-koostu osad.
- {{ui:Used by}}: iga hoidla fail, mis seda kasutab.

{{ui:Bill of materials (CSV)}} salvestab loendi kõigest, mida fail kasutab, tasemete kaupa, koos koguste, revisjonide ja olekutega, tabelarvutusse sobivalt.

## Redaktsiooniplokk lehel

Kui avatud joonisel on paigutus, vali {{ui:Revision block}}. Väljastatud revisjonide tabel (revisjon, kuupäev, kes, kinnitatud, kirjeldus) joonistatakse vaadatava lehe paremasse ülanurka. Kui kinnitad väljastuse, tabel uuendatakse.

## Revisjon tiitelplokis

Anna oma tiitelploki atribuutidele üks neist märgistest ja vali avatud joonisel {{ui:Fill title blocks}}:

| Märgis | Täidetakse |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revisjoniga (B või B.2, kui seda parasjagu töödeldakse) |
| `VAULT.STATE` | olekuga (Väljastatud …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | viimase revisjoni kuupäevaga |
| `VAULT.APPROVER`, `APPROVED_BY` | sellega, kes viimase väljastuse kinnitas |

## PartCraft ja BimCraft

PartCraftil ja BimCraftil on oma failide jaoks sama Dokumendid-paneel: osad ja koostud PartCraftis, IFC-mudelid BimCraftis. Sisse kontrollimine salvestab avatud mudeli projektikausta ning koost näitab, millised osad see kasutab, ja materjalide loendit.

## Hea teada

- Kaks inimest samas jagatud kaustas ei saa mõlemad faili välja võtta: väljavõtmine on fail, mille süsteem keeldub kaks korda tegemast. Brauseris ja CadCraft Studio versioonis, mille kest on vanem kui see funktsioon, on see sama range, kui kaust lubab: kaks väljavõtmist samal sekundijagul võivad mõlemad õnnestuda. Paneel ütleb, kumb kehtib.
- Ära muuda ega kustuta `.ccvault` kausta käsitsi. Selle logi on arvestus; hoidla koostab oma loendi sellest vajadusel uuesti.
- Faili muutmine kaustas ilma selle väljavõtmiseta kuvatakse kui {{ui:Changed in the folder without a check-out}}.
