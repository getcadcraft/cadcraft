---
title: Flyt skitser til og fra andre delmodellere
summary: Skriv en makro, der genopbygger din tegning som én begrænset skitse i en delmodellerer, og åbn en skitse eksporteret fra en.
keywords: skitse, makro, swb, vba, eksport, delmodellerer, globale variable, ligninger, relationer, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks er ikke tilgængelig der, hvor CadCraft bygges, så ingen af retningerne er endnu testet i SolidWorks. Det CadCraft skriver, er kun kontrolleret for struktur. Kontrollér resultatet, før du stoler på det.
:::

## Send en tegning som skitse

1. Begræns og målsæt tegningen (se [Begræns en tegning](topic:constraints)).
2. I gruppen {{ui:Parametrisk}} åbner du {{ui:Mere}} og vælger {{ui:Makro til SolidWorks (.swb)}}, eller skriver {{cmd:SWBOUT}}.

   En fil, der er navngivet efter tegningen og slutter på `.swb`, downloades.
3. I SolidWorks vælger du **Tools > Macro > Run** og peger på den fil.

Makroen laver en ny del ud fra din standarddelskabelon, åbner en skitse på Front Plane og tegner modellens linjer, cirkler, buer, punkter og polylinjer i den, med:

- dine begrænsninger som skitserelationer,
- dine målsætningsbegrænsninger som mål med de samme navne (`d1@Sketch1`),
- dine egne parametre som globale variable,
- hvert udtryk som en ligning.

Delen bruger tegningens længdeenhed. Tekst, blokke, skraveringer, målsætninger og ark indgår ikke i skitsen; historikken viser, hvad der er udeladt. Udtryk uden ligningsform dér (`if`, `min`, `max`, `round`, `%` og et par andre) skrives med deres aktuelle værdi, og historikken siger, hvilke. Alt, makroen ikke kan lave, skrives til en logfil ved siden af makroen, og en besked opsummerer til sidst.

## Åbn en skitse fra en del

1. I SolidWorks kører du CadCraft-eksportmakroen (download den i appen PartCraft: Fil > Eksportér > Eksportér makro til at bringe dele tilbage) på delen. Den skriver en `.json`-fil i formatet `cadcraft-sw-export` ved siden af delen.
2. I CadCraft vælger du {{ui:Åbn}} og peger på den `.json`-fil.
3. Hvis delen har flere skitser, vælger du én.

Skitsen bliver til tegningen, i millimeter: dens linjer, buer, cirkler og punkter, dens relationer som begrænsninger, dens målsætninger som målsætningsbegrænsninger med de navne, de havde (`D1`, `D2` …), dens globale variable som parametre og ligningerne på dens målsætninger som deres udtryk. Historikken viser, hvad der ikke blev overført, f.eks. relationer CadCraft ikke har. Hvor skitsen sidder i delen, gemmes ikke: den tegnes fladt, som den ses på sit plan.
