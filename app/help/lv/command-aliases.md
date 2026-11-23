---
title: Komandu aliasu rediģēšana
summary: Glabājiet savus komandu aliasus vienā teksta failā pazīstamā formātā, importējiet un eksportējiet .pgp failu un ielādējiet to atkal ar REINIT.
keywords: aliass, aliasi, aliasedit, pgp, īsinājumtaustiņš, īsais nosaukums, reinit, tastatūra, pielāgot, rediģēt aliasus
from: 2282d36f
---

## Ko jūs uzzināsiet

Kā pievienot savus īsos nosaukumus komandām, piemēram, `LL` komandai {{cmd:LINE}}, visu vienā teksta failā.

## Aliasa pievienošana

1. Atveriet {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Rediģēt aliasus…}} vai ierakstiet {{cmd:ALIASEDIT}} un nospiediet {{key:Enter}}.
2. Pievienojiet rindu ar aliasu, komatu un komandu aiz zvaigznītes:

```
LL,     *LINE
```

3. Noklikšķiniet uz {{ui:Saglabāt}}. Komandrindā tiek parādīts, cik jūsu aliasu ir lietošanā.
4. Ierakstiet `LL` un nospiediet {{key:Enter}}: sākas LINE.

Jūsu aliasi atrodas pāri CadCraft pašiem aliasiem. Jūsu rindiņa uzvar iebūvētu aliasu ar tādu pašu nosaukumu; noņemiet savu rindiņu, un iebūvētais alias atkal darbojas.

## Rindas, ko CadCraft noraida

Redaktors uzskaita katru problēmu ar tās rindas numuru, kamēr rakstāt:

- komanda neeksistē;
- aliass ir pašas komandas nosaukums (`LINE, *CIRCLE` paslēptu LINE);
- rindiņa nav formā `ALIASS, *KOMANDA`;
- tas pats aliass atrodas divās rindās (vēlākā uzvar).

Rindas, kas palaiž programmu jūsu datorā, piemēram, `NOTEPAD, START, 1, *File to edit: ,`, tiek izlaistas ar piezīmi: lietotne pārlūkprogrammā nevar palaist programmas.

## Pārnesiet aliasus no citas programmas

1. Aliasu redaktorā noklikšķiniet uz {{ui:Importēt .pgp…}} un izvēlieties failu. Varat arī ievilkt `.pgp` failu rasējumā.
2. Pārbaudiet uzskaitītās problēmas (komandas, ko CadCraft nepazīst, tiek noraidītas, pārējās darbojas).
3. Noklikšķiniet uz {{ui:Saglabāt}}.

{{ui:Eksportēt .pgp}} saglabā gan CadCraft aliasus, gan jūsu aliasus kā vienu failu tajā pašā formātā.

## Atkārtoti ielādējiet failu

Ierakstiet {{cmd:REINIT}} un nospiediet {{key:Enter}}, lai atkārtoti piemērotu jūsu aliasu failu. Tas tiek glabāts šajā pārlūkprogrammā; darbvirsmas lietotne to glabās savā mapē, un mākoņpakalpojums to sinhronizēs.

## Burti komandas opcijām

Aliass nosauc komandu. Lai mainītu burtus, kas atbild uz komandas opcijām (`P` Polārajam {{cmd:ARRAY}}), skatiet [Piešķiriet komandu opcijām savus burtus](topic:option-letters).

## Tastatūras saīsnes jebkurai komandai

Aliass tiek rakstīts; saīsne ir taustiņš. Lai komandai piešķirtu savu taustiņu:

1. Noklikšķiniet uz {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Īsinājumtaustiņi…}} vai ierakstiet `KEYS` un nospiediet {{key:Enter}}.
2. Noklikšķiniet lodziņā {{ui:Taustiņš}} un nospiediet taustiņus, piemēram, {{key:Alt+Shift+C}}.
3. Lodziņā {{ui:Palaiž}} ierakstiet komandu un, ja vēlaties, to, ko rakstīt aiz tās: `CIRCLE` vai `ZOOM E`.
4. Noklikšķiniet uz {{ui:Pievienot}}.

Taustiņam nepieciešams {{key:Mod}} vai {{key:Alt}} ar burtu vai ciparu, vai brīvs funkcijas taustiņš ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Taustiņi, ko jau izmanto CadCraft, lietotne vai pārlūkprogramma, un taustiņi, ko izmanto poga Mani rīki (skatiet [Jūsu pašu pogas](topic:my-tools)), tiek noraidīti, un lodziņš pasaka, kāpēc. Saīsnes tiek glabātas šajā pārlūkprogrammā (vai darbvirsmas lietotnē); {{ui:Noņemt}} tās izņem.
