---
title: Tekstas jūsų SHX šriftais
summary: Nurodykite CadCraft SHX šriftų aplanką (arba pasirinkite failus), ir teksto stiliai, kurie juos pavadina, bus rodomi tais šriftais ekrane, spausdinant ir PDF, su stiliaus aukščiu, pločio koeficientu ir pokrypiu.
keywords: shx, šriftai, šriftas, formos šriftas, didysis šriftas, bigfont, unifont, senas, persų, farsi, arabų, teksto stilius, trūkstamas šriftas, pakeistas šriftas, SHXFONTS, aplankas, atvirkščiai, vizualinė tvarka, simplex, isocp
from: 14b0a4ab
---

Brėžiniuose iš kitų programų teksto stiliuose dažnai nurodomi **SHX šriftai**, o DWG jų neįtraukia. Be šrifto CadCraft tekstą piešia savo šriftu, kas tinka įprastam lotyniškam tekstui, bet ne senoms šriftams, kurie paprastus simbolių kodus susieja su kitomis raidžių formomis, pavyzdžiui, senoms persų kalbos anotacijoms.

Pateikite CadCraft šriftus, ir jis tekstą nupiešia jais.

## Įkelkite savo šriftus

Įveskite {{cmd:SHXFONTS}} (`SHX`) ir pasirinkite:

- {{ui:Aplankas}} (CadCraft Studio): pasirinkite aplanką. Kiekvienas jame esantis `.shx` failas nuskaitomas dabar ir kiekvieną kartą, kai CadCraft paleidžiamas.
- {{ui:Failai}} (naršyklė): pasirinkite vieną ar kelis `.shx` failus. Jie saugomi šioje naršyklėje ir niekada neįkeliami.
- {{ui:Sąrašas (L)}}: įkelti šriftai ir tie, kuriuos atidarytas brėžinys nurodo, bet dar neįkelti.
- {{ui:Šalinti}} ir {{ui:Išvalyti}}: pamiršti vieną šriftą arba visus.

CadCraft negali pridėti trečiųjų šalių šriftų, todėl jų niekada nepateikia: jie ateina iš jūsų. Brėžinys tik nurodo savo šriftus ir jų kopijos nesaugo.

## Kas vyksta

Teksto stiliaus šrifto pavadinimas sutapatinamas su įkelto šrifto pavadinimu, nepaisant raidžių dydžio, aplanko ir `.shx` (`SIMPLEX.SHX` atitinka `simplex`). Tekstas tokiame stiliuje piešiamas linijomis – ekrane, spausdinant ir PDF – tiksliai toje pačioje vietoje, su tuo pačiu aukščiu, sukimu, pločio koeficientu ir pokrypio kampu. Jo plotis yra paties šrifto, todėl {{ui:Centras}} ir {{ui:Dešinė}} lygiavimas, lūžimas ir pasirinkimas atitinka tai, ką matote. Stilius, kurio šriftas neįkeltas, lieka įmontuotu šriftu, o kai atidarote brėžinį, kuris nurodo neįkeltus šriftus, komandų eilutėje tai pasakoma.

Standartinis stilius irgi įskaitomas: brėžinys, kurio Standard stilius nurodo savo šriftą, jį išlaiko.

## Šriftai jau vizualine tvarka

Daugelis senų persų ir arabų SHX šriftų turi raides, jau suformuotas ekranui ir piešiamas iš kairės į dešinę, todėl tekstas, įvestas loginiu tvarka, atrodo atgal. Įveskite {{cmd:SHXFONTS}}, pasirinkite {{ui:Apversti (R)}} ir nurodykite šriftą: jo tekstas tada išdėstomas paskutine raide pirmiausia. Paleiskite dar kartą, kad atšauktumėte. Jungiklis priklauso šriftui, išsaugomas šioje naršyklėje ir nėra įrašomas brėžinyje.

## Kas dar nepadengta

- Tekstas su įterptais formatavimo kodais (spalvos, krūvos MTEXT) lieka įmontuotu šriftu.
- Dideli šriftai (dvibaitiniai) papildo kodus, kurių trūksta pagrindiniam šriftui, tačiau tekstas Rytų Azijos kodų puslapyje, kurį CadCraft jau pavertė Unicode, neatkuriamas į šrifto dvibaitinius kodus.
- Šriftų skaitytuvas vadovaujasi paskelbtu formato aprašymu ir buvo išbandytas su CadCraft skirtais šriftais. Jei kuris nors jūsų piešiamas neteisingai, atsiųskite mums šriftą ir brėžinį.
