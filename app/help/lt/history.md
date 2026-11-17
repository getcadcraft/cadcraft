---
title: Istorija: versijos ir pakeitimai
summary: Peržiūrėkite brėžinio versijas (Studio kopijas, kurias išsaugo įrašant, ir debesies versijas), atverkite ar atkurkite vieną ir palyginkite dvi, rodydami pakeitimus spalva.
keywords: istorija, versijos, versijų istorija, atkurti, ankstesnė versija, anuliuoti įrašymą, palyginti, palyginti brėžinius, dwgcompare, pakeitimai, pridėta, pašalinta, pakeista, momentinė kopija, atsarginė kopija, debesies versijos
from: 141d37b3
---

## Ką sukursite

Ankstesnės brėžinio versijos peržiūrą ir sąrašą to, kas skiriasi nuo dabartinės: kas pridėta, kas pašalinta ir kas pakeista, pažymėta spalva ant brėžinio.

## Atverti Istoriją

Įveskite `HISTORY` (arba `HIST`) ir paspauskite {{key:Enter}}, arba pasirinkite {{ui:Istorija…}} {{ui:Daugiau}} meniu grupėje {{ui:Vaizdas}}. Skydelis atsiveria šalia brėžinio ir lieka atviras, kol dirbate, todėl galite slinkti ir keisti brėžinio mastelį matydami jo spalvas.

Istorija veikia CadCraft Studio. Naršyklėje skydelis tik tai praneša.

## Iš kur atsiranda versijos

- **Šiame kompiuteryje.** Kiekvieną kartą, kai atidarote brėžinį iš failo Studio programoje, ir kiekvieną kartą, kai jį įrašote, Studio išsaugo failo kopiją savo saugykloje šiame kompiuteryje. Pirmoji kopija yra {{ui:Kaip atverta}}: failas, koks buvo prieš jūsų pirmąjį įrašymą. Studio saugo naujausias 25 kiekvieno brėžinio kopijas, o seniausios pašalinamos pirmos, kai visos kopijos kartu viršija 400 MB. Įrašymas, kuris nieko nekeičia, kopijos nesukuria. Niekas nesiunčiama.
- **Debesyje.** Kai atidarote brėžinį iš savo debesies failų Studio programoje, skydelyje taip pat rodoma {{ui:Debesyje}}: kiekviena debesies saugoma versija su numeriu, įrašiusiu asmeniu ir pastaba. Skydelis tik skaito jas. CadCraft savo įrašymų į debesį dar nesiunčia, todėl čia matomos versijos, įrašytos kituose įrenginiuose ir žiniatinklyje. Jei Studio praneša, kad prisijungimo laikas baigėsi, prisijunkite iš naujo.

Brėžinys, kurio dar neįrašėte, kopijų neturi: pirmiausia jį įrašykite.

## Atverti arba atkurti versiją

- {{ui:Atverti}} atveria tą versiją atskirame skirtuke. Jūsų brėžinys nepaliečiamas.
- {{ui:Atkurti}} pakeičia šį brėžinį ta versija. Prieš tai klausiama. Studio prieš tai išsaugo dabartinio brėžinio kopiją Istorijoje (pažymėtą {{ui:Prieš atkuriant}}), o į failą nieko neįrašoma, kol neįrašysite. Atkūrimo negalima anuliuoti su {{key:Mod+Z}}; naudokite tą kopiją.

## Palyginti

1. Spustelėkite {{ui:Palyginti}} ties versija. Ji lyginama su {{ui:Brėžinys, toks koks yra dabar}}; jei norite lyginti su kita versija, pirmiausia pasirinkite ją {{ui:Palyginti su}} laukelyje.
2. Rezultatą perskaitykite sąrašo apačioje: kiek objektų pridėta, pašalinta ir pakeista, ir jų sąrašą. Spustelėkite sąrašo elementą, kad vaizdas persikeltų į jį.
3. Ant brėžinio:
   - **žali** objektai pridėti,
   - **raudoni** objektai pašalinti (jie yra tik senesnėje versijoje),
   - **oranžiniai** objektai pakeisti: nauja forma rodoma ištisine linija, sena – brūkšnine.
4. {{ui:Rodyti brėžinyje}} įjungia ir išjungia spalvas; {{ui:Išvalyti spalvas}} pašalina rezultatą. Uždarius skydelį spalvos taip pat išvalomos.

Sąraše nurodoma, kas pasikeitė pakeistame objekte: jo tekstas, tai, kad jis perkeltas, jo forma, sluoksnis, spalva, linijos tipas ar linijos storis. Kiekvienas lapas lyginamas atskirai; spalvos rodomos atidarytame lape.

:::note
Brėžinio objektams nėra pastovaus numerio, todėl CadCraft atpažįsta objektus pagal tai, kas jie yra: tas pats objektas abiejose pusėse nepakitęs; to paties tipo ir sluoksnio objektas, esantis ne toliau nei jo dydžio atstumu nuo seno objekto, yra tas pats objektas, tik pakeistas; likusieji pridedami arba šalinami. Objektas, nuo kurio vietos labai nutolęs, rodomas kaip pašalintas vienoje vietoje ir pridėtas kitoje. Bloko nuoroda skaičiuojama pagal jos bloko turinį.
:::

## Dažnos klaidos

- **„Kopijų dar nėra.“** Studio sukuria kopiją kiekvieną kartą, kai atidaromas ir įrašomas brėžinys, turintis failą šiame kompiuteryje. Brėžinys, atidarytas naršyklės skirtuke, arba niekada neįrašytas, kopijų neturi.
- **Debesies sąrašo nėra.** Jis atsiranda brėžiniui, atidarytam iš debesies Studio programoje; iš disko atidarytas failas nėra debesies brėžinys.
- **Viskas atrodo pakeista.** Dvi versijos, įrašytos skirtingų programų, tą patį brėžinį įrašo skirtingais būdais (anoniminių blokų pavadinimai, apvalinimas). Lyginkite versijas, įrašytas CadCraft.
