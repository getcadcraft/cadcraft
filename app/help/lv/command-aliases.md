---
title: Rediģēt komandu aliasus
summary: Glabājiet savus komandu aliasus vienā teksta failā pazīstamajā formātā, importējiet un eksportējiet .pgp failu un pārlādējiet to ar REINIT.
keywords: alias, aliasi, aliass, pgp, saīsne, īsais nosaukums, reinit, tastatūra, pielāgot, rediģēt aliasus
from: 6ab6fa0e
---

## Ko jūs uzzināsiet

Kā pievienot savus īsos komandu nosaukumus, piemēram, `LL` komandai {{cmd:LINE}}, visu vienā teksta failā.

## Pievienot aliasu

1. Atveriet {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Rediģēt aliasus…}} vai ierakstiet {{cmd:ALIASEDIT}} un nospiediet {{key:Enter}}.
2. Pievienojiet rindu ar aliasu, komatu un komandu aiz zvaigznītes:

```
LL,     *LINE
```

3. Noklikšķiniet {{ui:Saglabāt}}. Komandrindā tiek norādīts, cik jūsu aliasu ir lietošanā.
4. Ierakstiet `LL` un nospiediet {{key:Enter}}: LINE sākas.

Jūsu aliasi atrodas virs CadCraft savējiem. Jūsu rinda uzvar iebūvēto aliasu ar tādu pašu nosaukumu; noņemiet savu rindu, un iebūvētais atgriežas.

## Rindas, ko CadCraft noraida

Redaktors uzskaita katru problēmu ar tās rindas numuru, kamēr rakstāt:

- komanda neeksistē;
- aliass ir pats komandas nosaukums (`LINE, *CIRCLE` paslēptu LINE);
- rinda nav formātā `ALIAS, *COMMAND`;
- tas pats aliass ir divās rindās (vēlākā uzvar).

Rindas, kas palaiž programmu jūsu datorā, piemēram, `NOTEPAD, START, 1, *File to edit: ,`, tiek izlaistas ar piezīmi: lietotne pārlūkā nevar palaist programmas.

## Importēt aliasus no citas programmas

1. Aliasu redaktorā noklikšķiniet {{ui:Importēt .pgp…}} un izvēlieties failu. Varat arī novilkt `.pgp` failu uz zīmējuma.
2. Pārbaudiet uzskaitītās problēmas (komandas, kuras CadCraft nav, tiek noraidītas, pārējās darbojas).
3. Noklikšķiniet {{ui:Saglabāt}}.

{{ui:Eksportēt .pgp}} saglabā CadCraft aliasus un jūsu aliasus kā vienu failu tajā pašā formātā.

## Pārlādēt failu

Ierakstiet {{cmd:REINIT}} un nospiediet {{key:Enter}}, lai atkal piemērotu savu aliasu failu. Tas tiek glabāts šajā pārlūkā; darbvirsmas lietotne to glabās savā mapē, un mākoņpakalpojums to sinhronizēs.

## Tastatūras īsinājumi jebkurai komandai

Aliass tiek ierakstīts; īsinājums ir taustiņš. Lai komandai piešķirtu savu taustiņu:

1. Noklikšķiniet {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Tastatūras īsinājumi…}} vai ierakstiet `KEYS` un nospiediet {{key:Enter}}.
2. Noklikšķiniet lodziņā {{ui:Taustiņš}} un nospiediet taustiņus, piemēram, {{key:Alt+Shift+C}}.
3. Lodziņā {{ui:Palaiž}} ierakstiet komandu un, ja vēlaties, to, ko ierakstīt aiz tās: `CIRCLE` vai `ZOOM E`.
4. Noklikšķiniet {{ui:Pievienot}}.

Taustiņam vajag {{key:Mod}} vai {{key:Alt}} ar burtu vai ciparu, vai brīvu funkcijas taustiņu ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Taustiņi, ko jau izmanto CadCraft, lietotne vai pārlūks, un taustiņi, kas piešķirti pogai Mani rīki (skatiet [Pogas pašu vajadzībām](topic:my-tools)), tiek noraidīti, un lodziņš pasaka, kāpēc. Īsinājumi tiek glabāti šajā pārlūkā (vai darbvirsmas lietotnē); {{ui:Noņemt}} to atņem.
