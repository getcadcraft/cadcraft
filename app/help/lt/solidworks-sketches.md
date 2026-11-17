---
title: Perkelkite eskizus į detalių modeliavimo įrankius ir iš jų
summary: Parašykite makrokomandą, kuri perkuria jūsų brėžinį kaip vieną apribotą eskizą detalių modeliavimo įrankyje, ir atverkite eskizą, eksportuotą iš jo.
keywords: eskizas, makrokomanda, swb, vba, eksportas, detalių modeliavimo įrankis, globalieji kintamieji, lygtys, ryšiai, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks nepasiekiamas ten, kur kuriamas CadCraft, todėl abi kryptys dar nebuvo išbandytos SolidWorks. CadCraft įrašomas turinys tikrinamas tik pagal struktūrą. Prieš pasikliaudami rezultatu, patikrinkite jį.
:::

## Siųskite brėžinį kaip eskizą

1. Apribokite ir pamatuokite brėžinį (žr. [Apriboti brėžinį](topic:constraints)).
2. Grupėje {{ui:Parametrinis}} atverkite {{ui:Daugiau}} ir pasirinkite {{ui:Makrokomanda SolidWorks (.swb)}}, arba įveskite {{cmd:SWBOUT}}.

   Atsisiunčiamas failas, pavadintas pagal brėžinį, su plėtiniu `.swb`.
3. SolidWorks programoje pasirinkite **Tools > Macro > Run** ir nurodykite tą failą.

Makrokomanda sukuria naują detalę iš numatyto detalės šablono, atidaro eskizą ant Front Plane ir jame nubraižo modelio linijas, apskritimus, lankus, taškus ir polilinijas, su:

- jūsų apribojimais kaip eskizo ryšiais,
- jūsų matmeniniais apribojimais kaip matmenimis su tais pačiais pavadinimais (`d1@Sketch1`),
- jūsų parametrais kaip globaliaisiais kintamaisiais,
- kiekviena išraiška kaip lygtimi.

Detalė naudoja brėžinio ilgio vienetą. Tekstas, blokai, brūkšniuotės, matmenys ir lapai nėra eskizo dalis; istorijoje išvardyta, kas buvo palikta. Išraiškos, neturinčios lygties formos (`if`, `min`, `max`, `round`, `%` ir keletas kitų), įrašomos kaip dabartinė reikšmė, o istorijoje nurodoma, kurios. Viskas, ko makrokomanda negali sukurti, įrašoma į žurnalo failą šalia makrokomandos, o pabaigoje pateikiamas bendras pranešimas.

## Atverkite eskizą iš detalės

1. SolidWorks programoje paleiskite CadCraft eksporto makrokomandą detalei (atsisiųskite ją PartCraft programoje: Failas > Eksportuoti > Eksportuoti makrokomandą, kad detalės grįžtų). Ji šalia detalės įrašo `.json` failą `cadcraft-sw-export` formatu.
2. CadCraft programoje pasirinkite {{ui:Atverti}} ir nurodykite tą `.json` failą.
3. Kai detalėje yra keli eskizai, pasirinkite vieną.

Eskizas tampa brėžiniu milimetrais: jo linijos, lankai, apskritimai ir taškai, jo ryšiai kaip apribojimai, jo matmenys kaip matmeniniai apribojimai su tokiais pačiais pavadinimais, kaip buvo (`D1`, `D2` …), jo globalieji kintamieji kaip parametrai, o lygtys jo matmenyse – kaip išraiškos. Istorijoje išvardyta, kas nebuvo perkelta, pavyzdžiui ryšiai, kurių CadCraft neturi. Vieta, kurioje eskizas yra detalėje, neišsaugoma: jis nubraižomas plokščias, kaip matomas savo plokštumoje.
