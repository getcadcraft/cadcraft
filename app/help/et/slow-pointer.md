---
title: Osuti hüppab või jääb joonise kohal maha
summary: Mida teha, kui ristkursor ei järgi hiirt sujuvalt vanemas või aeglasemas arvutis.
keywords: kursori hüppamine, osuti viivitus, ristkursor aeglane, katkendlik kursor, vana arvuti, vana graafikakaart, integreeritud graafika, riistvaraline kiirendus, sujuvam osuti, aeglane sülearvuti
from: 39dc9057
---

CadCraft töötab brauseris (CadCraft Studio on samuti brauseri vaade), seega ei ole selles midagi ehitatud ühe või teise graafikakaardi jaoks. Ristkursori joonistab rakendus, mis tähendab, et see saab liikuda ainult nii kiiresti, kui rakendus suudab kaadrit joonistada.

## Lase CadCraftil lisad välja lülitada

1. Ava {{ui:Sätted}} (hammasratas paremal üleval) ja jää vahekaardile {{ui:CadCraft}}.
2. Vali {{ui:Sujuvam osuti aeglasemates arvutites}}.
3. Vali {{ui:Sees}}.

Sees-olekus kasutatakse joonistatud ristkursori ja valikuruudu asemel arvuti enda osutit (samuti täisekraani ristkursorit). Objekt osuti all süttib siis, kui osuti seisab, mitte siis, kui see liigub. Objektipüüdurid, jälgimine ja kummipael töötavad nagu varem.

{{ui:Automaatne}} on see, millega CadCraft algab: see jälgib, kui kaua kaadrid osuti liigutamisel kestavad, ja lülitab selle ise sisse, kui need jäävad mitmeks sekundiks aeglaseks. Ta teatab sellest üks kord. {{ui:Väljas}} jätab joonistatud ristkursori alles, olenemata kiirusest.

## Kui see on endiselt aeglane

- Kontrolli, et brauseri riistvaraline kiirendus oleks sisse lülitatud: ava uuel vahekaardil `chrome://gpu` (või `edge://gpu`). Kui esimestel ridadel on "Software only" või "Disabled", joonistab brauser ilma graafikakaardita. Graafikadraiveri uuendamine aitab sageli.
- Sulge teised rasked vahekaardid ja programmid ning proovi väiksemat brauseriakent.
- Teata meile {{ui:Abi}} kaudu, {{ui:Teata probleemist}}: ütle, kas kasutad brauserit või CadCraft Studiot, selle versiooni ja mida gpu-lehel on kirjas.
