---
title: Dokumentai: paėmimas, revizijos ir išleidimas
summary: Valdykite projekto aplanko brėžinius: paimkite failą, kad niekas kitas jo nekeistų, grąžinkite jį kaip naują reviziją, siųskite peržiūrai ir išleiskite su tvirtintojo vardu; istorija, kas ką naudoja, medžiagų sąrašas ir antraštės blokai, rodantys reviziją.
keywords: projekto parametrai, tvirtintojai, administratoriai, revizijų raidės, ASME, tik skaitymui, palyginti revizijas, atidaryti kopiją, partcraft, bimcraft, documents, DOCUMENTS, DOCS, saugykla, dokumentų valdymas, pdm, paėmimas, grąžinimas, checkout, checkin, užraktas, revizija, rev, revizijos raidė, išleidimas, išleista, patvirtinti, patvirtinimas, peržiūra, pasenęs, kur naudojama, bom, medžiagų sąrašas, antraštės blokas, redakcijų blokas, projekto aplankas
from: ee938722
---

## Ką sukursite

Projekto aplanką, kuriame kiekvienas brėžinys turi reviziją (A.1, A.2 … tada A, B …) ir būseną (Rengiama, Peržiūrai, Išleista, Pasenęs), kuriame vienu metu tik vienas asmuo gali keisti failą ir kuriame kiekvienas paėmimas, grąžinimas, patvirtinimas ir nutrauktas paėmimas įrašomi su tuo, kas ir kada tai padarė.

Viskas saugoma pačiame aplanke, paslėptame aplanke `.ccvault` šalia jūsų brėžinių. Bendrinamas diskas arba sinchronizuojamas aplankas tinka visai komandai. Serverio nėra ir niekas nieko neįkeliama.

## Atverti dokumentus

Įveskite `DOCUMENTS` (arba `DOCS`) ir paspauskite {{key:Enter}}. Skydelis atsidaro šalia brėžinio.

Pasirinkite {{ui:Pasirinkite projekto aplanką}} ir nurodykite aplanką, kuriame yra projekto brėžiniai. Projekto aplankai veikia CadCraft Studio ir naršyklėse, kurios gali atverti aplanką (Chrome, Edge). Kitose naršyklėse skydelis apie tai praneša.

Pirmą kartą įveskite savo vardą (jis pridedamas prie visko, ką darote) ir šio kompiuterio pavadinimą. Jei esate prisijungę, jūsų vardas jau įrašytas.

## Sukurti saugyklą

Aplankas, kuris dar nėra saugykla, siūlo {{ui:Sukurti saugyklą šiame aplanke}}. Įveskite projekto pavadinimą. Tada atverkite {{ui:Failai, kurių nėra saugykloje}} ir spustelėkite {{ui:Pridėti}} prie kiekvieno failo, kurį norite įtraukti į valdymą. Pridėtas failas prasideda revizija **A.1**, būsena – Rengiama.

## Keisti brėžinį

1. Prie brėžinio pasirinkite {{ui:Atverti}}. Jis atsidaro CadCraft. Jei jis nėra paimtas jums, tik žiūrėkite, bet nekeiskite: {{ui:Įrašyti}} atsisako jį perrašyti ir pasako kodėl (naudokite {{ui:Įrašyti kaip}}, kad išsaugotumėte savo kopiją).
2. Pasirinkite {{ui:Paimti}}. Dabar niekas kitas jo nebegali paimti; skydelyje matyti, kas jį turi, kuriame kompiuteryje ir nuo kada.
3. Braižykite.
4. Pasirinkite {{ui:Grąžinti}} ir nurodykite, kas pasikeitė. Atidarytas brėžinys įrašomas į projekto aplanką savo formatu ir tampa kita revizija (A.1, tada A.2). Grąžinus be pakeitimų revizija išlieka.

{{ui:Anuliuoti paėmimą}} grąžina failą be naujos revizijos.

## Peržiūra ir išleidimas

- {{ui:Siųsti peržiūrai}}: peržiūros metu failas tik skaitomas.
- {{ui:Patvirtinti}}: įveskite tvirtintojo vardą. A.3 tampa **A**, Išleista. Išleisti failai tik skaitomi.
- {{ui:Grąžinti}}: grąžinama į Rengiama, nurodant priežastį.
- {{ui:Nauja revizija}} išleistame faile paima jį kitai raidei: pirmasis grąžinimas yra **B.1**. Jei prieš tai pasirinksite {{ui:Anuliuoti paėmimą}}, failas lieka ties A.
- {{ui:Pažymėti kaip pasenusį}} išima išleistą failą iš naudojimo.

Projektas gali turėti sąrašą, kas gali tvirtinti, ir reikalauti, kad tvirtintojas nebūtų tas asmuo, kuris failą grąžino (žr. toliau Projekto parametrai).

## Projekto parametrai

Skydelyje atverkite {{ui:Projekto parametrai}}:

- **Tvirtintojai**: po vieną vardą eilutėje. Jei jie nurodyti, išleisti gali tik jie.
- **Tvirtintojas turi būti kitas asmuo, ne autorius**: „keturių akių“ taisyklė.
- **Administratoriai**: po vieną vardą eilutėje. Jei jie nurodyti, tik jie gali nutraukti kito asmens paėmimą arba keisti šiuos parametrus.
- **Praleidžiamos revizijų raidės**: {{ui:Naudoti ASME Y14.35 seką}} praleidžia I, O, Q, S, X ir Z, arba įveskite savo raides. Jau suteiktos raidės lieka; pasirinkimas taikomas kitoms revizijoms.
- **Paėmimas laikomas pasenusiu po**: dienų skaičius (pagal numatytuosius – 14).

Pasirinkite {{ui:Įrašyti parametrus}}. Pakeitimas įrašomas žurnale su nurodymu, kas jį padarė.

## Failas paliktas paimtas

{{ui:Nutraukti paėmimą}} atlaisvina failą, kurį paėmė kitas asmuo (jis išvykęs arba jo kompiuteris sugedo). Privalote įvesti priežastį: ji įrašoma žurnale kartu su tuo, kieno paėmimas nutrauktas. Jei projekte yra administratoriai, tai gali daryti tik jie. Paėmimas, senesnis nei 14 dienų, pažymimas kaip ilgai trukęs.

## Istorija, revizijos, naudoja, naudojamas

Norėdami pamatyti, spustelėkite failo pavadinimą:

- {{ui:Istorija}}: visi įvykiai, naujausi pirmi, su nurodymu, kas, kuriame kompiuteryje ir kada.
- {{ui:Revizijos}}: kiekviena išsaugota revizija. Kiekvienos revizijos kopija yra saugykloje (tas pats turinys saugomas vieną kartą). {{ui:Atidaryti kopiją}} atveria tą reviziją kaip paprastą kopiją, kuri negali perrašyti saugyklos failo. {{ui:Palyginti su}} išvardija, kas buvo pridėta, pašalinta ir pakeista tarp tos revizijos ir ankstesnės (arba bet kurios kitos, kurią pasirinksite), ir nuspalvina tai brėžinyje.
- {{ui:Naudoja}}: brėžiniai, į kuriuos nurodo nuorodos (xref), dokumentai, į kuriuos rodo IFC modelis, PartCraft surinkimo detalės.
- {{ui:Naudojamas}}: visi saugyklos failai, kurie naudoja šį.

{{ui:Medžiagų sąrašas (CSV)}} įrašo visų failo naudojamų dalykų sąrašą pagal lygius, su kiekiais, revizijomis ir būsenomis, skaičiuoklei.

## Redakcijų blokas lape

Atverę brėžinį, kuris turi lapo išdėstymą, pasirinkite {{ui:Redakcijų blokas}}. Peržiūrimo lapo viršutiniame dešiniajame kampe nubraižoma išleistų revizijų lentelė (revizija, data, kas, patvirtinta, aprašymas). Patvirtinus išleidimą, lentelė atnaujinama.

## Revizija antraštės bloke

Antraštės bloko atributams priskirkite vieną iš šių žymų ir atvirame brėžinyje pasirinkite {{ui:Užpildyti antraštės blokus}}:

| Žyma | Užpildoma |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revizija (B arba B.2, kol ji rengiama) |
| `VAULT.STATE` | būsena (Išleista …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | paskutinės revizijos data |
| `VAULT.APPROVER`, `APPROVED_BY` | kas patvirtino paskutinį išleidimą |

## PartCraft ir BimCraft

PartCraft ir BimCraft turi tą patį dokumentų skydelį savo failams: PartCraft – detales ir surinkimus, BimCraft – IFC modelius. Grąžinant atidarytas modelis įrašomas į projekto aplanką, o surinkimas parodo, kurias detales naudoja, ir medžiagų sąrašą.

## Verta žinoti

- Du asmenys tame pačiame bendrinamame aplanke negali abu paimti to paties failo: paėmimas yra failas, kurio sistema neleidžia sukurti du kartus. Naršyklėje ir Studio, kurio apvalkalas senesnis už šią funkciją, tai taikoma tiek griežtai, kiek leidžia aplankas: du paėmimai tą pačią sekundės dalį gali pavykti abu. Skydelyje nurodoma, kuris variantas taikomas.
- Nekeiskite ir netrinkite `.ccvault` aplanko rankiniu būdu. Jame esantis žurnalas yra įrašas; saugykla prireikus atkuria savo sąrašą iš jo.
- Failo pakeitimas aplanke be paėmimo rodomas kaip {{ui:Pakeista aplanke be paėmimo}}.
