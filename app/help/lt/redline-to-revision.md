---
title: Pažymėjimo pavertimas revizija
summary: Perskaitykite MarkupCraft parengtą raudonųjų pastabų paketą, priimkite arba atmeskite kiekvieną pakeitimą, pritaikykite revizijos debesį ir revizijos žurnalą priimtiems pakeitimams bei įrašykite atsakymų failą, kurį MarkupCraft nuskaitys atgal.
keywords: raudonosios pastabos, žymėjimas, revizija, debesis, revizijos debesis, revizijos žurnalas, priimti, atmesti, markupcraft, peržiūra, raudonųjų pastabų paketas, atsakymai, REDLINE
from: cdb3fafe
---

Peržiūrėtojas pažymi planų komplektą MarkupCraft programoje ir jums atsiunčia **raudonųjų pastabų paketą** – failą, kurio pavadinimas baigiasi `.redline.json`. Čia jį peržiūrite pakeitimas po pakeitimo, o priimti pakeitimai tampa revizijos debesimis brėžinyje.

## Peržiūrėkite pakeitimus

Įveskite {{cmd:REDLINE}} (`RDL`) ir pasirinkite paketą. Pasirinkite:

- {{ui:Sąrašas (L)}}: visus pakeitimus su numeriu, būsena, lapu, tipu, kas paprašė ir ką parašė.
- {{ui:Priimti}}, {{ui:Atmesti}}, {{ui:Atlikta}}: įveskite numerius (`1,3-5`, arba `All`) ir pasirinktinai pastabą atsakymų failui. {{ui:Atidaryti iš naujo}} grąžina pakeitimus į atvirus.
- {{ui:Rėmas}}: brėžinio dalis, kurią rodo pažymėtas lapas. Spustelėkite du kampus; paspauskite {{key:Enter}}, kad būtų visas brėžinys. Pakeitimai padedami pagal tai, kur buvo lape, todėl šis žingsnis juos sulygiuoja.
- {{ui:Taikyti}}: nubraižo revizijos debesį (sluoksnis `REV-CLOUD`, su revizijos raide) aplink kiekvieną priimtą ar atliktą pakeitimą, ir revizijos žurnalą – tvarkingą lentelę su priimtais pakeitimais ir jūsų pastabomis (sluoksnis `REV-LOG`), dešinėje nuo brėžinio. Vienas atšaukimo žingsnis.
- {{ui:Įrašyti}}: įrašo `<project>-<revision>.redline-answers.json`. Atidarykite jį MarkupCraft programoje, ir žymėjimai užsidaro: Priimta, Atmesta arba Atlikta, o jūsų pastabos tampa komentarais.

## Ką žinoti

Ką parašė peržiūrėtojas, rodoma taip, kaip parašyta. CadCraft niekada nevykdo instrukcijų, rastų pakete; ji tik jums jas rodo.

Atmesti ir atviri pakeitimai nieko nepridedami prie brėžinio. Paketas nuskaitomas jūsų kompiuteryje; nieko neįkeliama.

Jei jūsų asistentas prijungtas, jis gali perskaityti paketą, įrašyti sprendimus ir juos pritaikyti su įrankiais `redline_read`, `redline_decide`, `redline_apply` ir `redline_answers`; brėžinys pasikeičia vienu atšaukimo žingsniu „Asistentas: pažymėjimas revizija“.
