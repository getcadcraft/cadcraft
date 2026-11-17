---
title: Nustatykite teksto šriftą ir dydį naudodami teksto stilius
summary: Sukurkite pavadintus teksto stilius su šriftu, aukščiu, pločiu ir pasvirimu, nustatykite vieną dabartinį naujam tekstui ir pakeiskite stilių, kad pasikeistų visi jį naudojantys tekstai.
keywords: teksto stilius, stilius, STYLE, ST, TEXTSTYLE, -STYLE, šriftas, teksto aukštis, pločio koeficientas, įkypumas, pasvirimas, keisti šriftą, standartinis stilius, taikyti stilių, DDSTYLE
from: bd5a4883
---

## Ką darysite

Sukursite teksto stilių pavadinimu `Pastabos` su savo šriftu ir aukščiu, naudosite jį naujam tekstui, o vėliau pakeisite stilių, kad kiekviena pastaba, kuri jį naudoja, pasikeistų iš karto.

## Žingsniai

1. Įveskite {{cmd:STYLE}} (`ST`) ir paspauskite {{key:Enter}}, arba spustelėkite {{ui:Teksto stilius}} įrankių juostoje {{ui:Braižymas}}. Dialoge {{ui:Teksto stilius}} rodomi brėžinio stiliai. Kiekviename brėžinyje yra `Standartinis`.
2. Spustelėkite {{ui:Naujas…}}, įveskite `Pastabos` kaip naujo stiliaus pavadinimą ir spustelėkite {{ui:Gerai}}. Būsenos eilutėje rodoma: „Teksto stilius Pastabos sukurtas ir nustatytas kaip dabartinis.“
3. Lauke {{ui:Šriftas}} pasirinkite arba įveskite šrifto pavadinimą. Nustatykite {{ui:Aukštis (0 = klausti kiekvieną kartą)}} kaip skaičių, pavyzdžiui `2.5`, kad kiekvienas naujas tekstas gautų tą aukštį. Palikite `0`, kad būtumėte klausiami kiekvieną kartą.
4. Nustatykite {{ui:Pločio koeficientas}} ir {{ui:Įkypumo kampas (°)}}, jei norite siauresnių, platesnių ar pasvirusių raidžių. Pavyzdinė eilutė parodo rezultatą.
5. Spustelėkite {{ui:Uždaryti}}. Rašykite tekstą su {{cmd:TEXT}} ar {{cmd:MTEXT}}: naujas tekstas gauna dabartinį stilių.
6. Norėdami naudoti jau sukurtą stilių, vėl atidarykite dialogą, pasirinkite stilių sąraše ir spustelėkite {{ui:Nustatyti dabartinį}}.
7. Norėdami uždėti stilių jau nubraižytam tekstui, pažymėkite tekstą, atidarykite dialogą, pasirinkite stilių ir spustelėkite {{ui:Taikyti pažymėtam tekstui}}.

## Pakeiskite stilių vėliau

Pakeiskite stiliaus šriftą, aukštį, plotį ar pasvirimą dialoge, ir kiekvienas jį naudojantis tekstas pasikeis vienu anuliavimo žingsniu ({{key:Mod+Z}}). Būsenos eilutėje rodoma, kiek tekstų pasikeitė.

## Pastabos

- {{ui:Naikinti}} neleidžia pašalinti `Standartinis` ir stiliaus, kurį dar naudoja tekstas: pirmiausia pakeiskite tą tekstą į kitą stilių.
- Stiliai įrašomi brėžinio STYLE lentelėje, todėl DXF ir DWG failai juos išsaugo.
- Komandų eilutėje `-STYLE` atlieka tą patį su parinktimis (`Current`, `New`, `Font`, `Height`, `Width`, `Oblique`, `Delete`, `List`).
- Šriftas, kurio nėra kompiuteryje, kuriame skaitomas brėžinys, rodomas kitu šriftu.
