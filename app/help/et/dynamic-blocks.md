---
title: Dünaamilised plokid
summary: Mida CadCraft teeb DWG dünaamiliste plokkidega. Need säilitavad oma tõelised nimed, näitavad olekut, milles nad salvestati, vahetavad nähtavuse olekuid, näitavad oma muid väärtusi ja jäävad salvestamisel dünaamiliseks.
keywords: dünaamiline plokk, dünaamilised plokid, nähtavus, nähtavuse olek, peegeldamine, venitamine, otsing, parameetrid, kohandatud, ploki atribuudid, *u plokid, dünaamiline
from: 26b6aa80
---

## Mis töötab

DWG-s tehtud dünaamiliste plokkidega avaneb joonis nii kaugele, et need töötavad:

- **Oma tõelised nimed.** Dünaamiline plokk on paneelis {{ui:Blocks}} oma nime all („Pistikupesa“, „Valamu“), mitte nimetu `*U` plokina.
- **Olek, milles nad salvestati.** Iga viide näitab täpselt seda, mida teine programm näitas: nähtavuse olekut, milleks see seati, venitatult või peegeldatult, nagu salvestati.
- **Nähtavuse oleku vahetamine.** Vali üks viide (või mitu sama plokki), ava {{ui:Properties}} ja vali jaotises {{ui:Custom}} nimekirjast {{ui:Visibility}} mõni teine olek. Viide näitab seda olekut kohe, samuti selle atribuute: need, mida olek peidab, kaovad; need, mida see näitab, ilmuvad oma väärtustega. Viide säilitab iga väärtuse, nii et midagi ei tule tühjana tagasi; {{ui:Properties}} loetleb peidetud märgitult „peidetud“. {{key:Mod+Z}} paneb vana oleku ühe sammuga tagasi.
- **Haardepunktid.** Valitud dünaamiline plokk näitab oma haardepunkte seal, kus on tema parameetrid: väike kolmnurk nähtavuse oleku jaoks (klõpsa sellel, et näha olekute nimekirja), nooled kauguse otstes, topelt-nool peegeldamise jaoks. Praegu toimib ainult nähtavuse haardepunkt; teised ütlevad seda olekuribal.
- **Muud väärtused, ainult lugemiseks.** Nähtavuse nimekirja all näitab {{ui:Custom}} ka ploki kaugusi, joondusnurki, peegelduse olekuid ja punkte, nagu joonis neid hoiab.
- **Nähtavuse olekute muutmine.** Ava plokk käsuga {{cmd:BEDIT}}: redaktor näitab ühte olekut, mille nimi on riba peal joonise kohal (vali seal teine). Sisesta {{cmd:BVSTATE}}, et vahetada, lisada (peites kõik, näidates kõike või hoides alles, mis on näha), nimetada ümber või kustutada olek; {{cmd:BVHIDE}} peidab valitud objektid praegu näidatavas olekus; {{cmd:BVSHOW}} näitab peidetuid tuhmilt, et saaksid klõpsata nendel, mida tagasi tuua. Salvesta plokk: viited, mis on seatud ümbernimetatud olekule, hoiavad selle uue nime all, ja need, mis on seatud kustutatud olekule, näitavad esimest olekut.
- **Jäävad dünaamiliseks.** DWG-na salvestatuna selles versioonis, milles joonis tuli, jäävad plokid dünaamiliseks valitud olekuga: teine programm avab need samade dünaamiliste plokkidena. Muudetud nähtavuse olekud salvestatakse samuti: nende uued nimed, lisatud olekud ja see, mida iga neist näitab.

## Mis on ainult lugemiseks või veel puudub

| Pole veel olemas | Selle asemel praegu |
|---|---|
| Kauguste, nurkade või peegelduste muutmine (venitamise, liigutamise, peegeldamise toimingud) | Need näidatakse jaotises {{ui:Custom}} ainult lugemiseks; muuda neid programmis, mis plokki tegi. |
| Otsingu, XY, pöörlemise ja polaarsed parameetrid | Neid pole veel loetud: viide näidatakse nagu salvestatud. |
| Kauguse, peegelduse ja punkti haardepunktide lohistamine | Need näitavad, kus parameetrid asuvad; nähtavuse haardepunkt ja nimekiri {{ui:Visibility}} jaotises {{ui:Properties}} vahetavad olekuid. |
| Dünaamiliste plokkide tegemine (parameetrite lisamine või nähtavuse olekute lisamine plokile, millel neid pole) | CadCraftis tehtud plokid on tavalised plokid; {{cmd:BPARAMETER}} ütleb seda. |
| Objektide lisamine või kustutamine nähtavuse olekutega ploki redaktoris | Plokk salvestatakse siis tavalise plokina (redaktor ütleb seda sulgemisel). |
| Dünaamilisena hoidmine teises DWG versioonis või DXF-is | Need salvestatakse tavaliste plokkidena, mis näitavad sinu valitud olekut, ja salvestus ütleb seda. |

:::note
Objektide liigutamine või muutmine käsuga {{cmd:BEDIT}} hoiab nähtavuse olekutega ploki dünaamilisena. Plokk ilma olekuteta või plokk, mille objekte redaktoris lisati või kustutati, muutub tavaliseks plokiks.
:::
