---
title: Novietojiet tērauda profilus un standartdetaļas
summary: Zīmējiet tērauda profilus, fasādes un 3D elementus no publicētajām profilu tabulām, novietojiet skrūves, uzgriežņus, paplāksnes, tapas, gultņus, atslēgas un zobratus pēc to standartiem un uzskaitiet tos detaļu sarakstā.
keywords: tērauds, profils, griezums, forma, W forma, platu flanšu, I sija, kanāls, leņķis, HSS, caurule, pipe, ipe, hea, heb, upn, sija, kolonna, elements, fasāde, aisc, en 10365, skrūve, bultskrūve, uzgrieznis, paplāksne, tapa, gultnis, atslēga, rieva, zobrats, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standartdetaļas, detaļu saraksts, specifikācija, bom, steelmember, partslist
from: 547c1048
---

Bibliotēkas {{ui:Standarta}} cilnē ir divu veidu lietas, kas šeit izveidotas no publicētām tabulām (nekas netiek lejupielādēts):

- **Tērauda profili**: 1,335 izmēri. W, S, C, L, HSS un Pipe no AISC Shapes Database v16.0; IPE, HEA, HEB un UPN no EN 10365:2017. DetailCraft izmanto to pašu tabulu.
- **Standartdetaļas**: sešstūru galvas skrūves (ISO 4017), sešstūru bultskrūves (ISO 4014), sešstūru uzgriežņi (ISO 4032), vienkāršas paplāksnes (ISO 7089), collu sešstūru bultskrūves un uzgriežņi (ASME B18.2.1 un B18.2.2), paralēlās tapas (ISO 2338), dziļrievu lodīšgultņi (ISO 15), paralēlas atslēgas (DIN 6885-1) un taisnzobu zobrati (moduļi no ISO 54).

Viss šeit ir kopīgots saskaņā ar CC0: to var izmantot jebkam, un atsauce nav nepieciešama.

## Novietot tērauda profilu

1. Atveriet bibliotēku ({{ui:Bibliotēka}} grupā Bloki vai ierakstiet `LIB`) un noklikšķiniet {{ui:Standarta}} cilni.
2. Pirmajā sarakstā izvēlieties saimi, piemēram, {{ui:W profili}}. Meklēšanas laukā ierakstiet, lai sašaurinātu izmērus: `W12` parāda visus W12.
3. {{ui:Novietot kā}} izvēlieties:
   - {{ui:Griezums}}: šķērsgriezums ar centru ievietošanas punktā.
   - {{ui:Augstuma atzīme}}: elements sānskatā, tik garš, cik norāda {{ui:Garums (mm)}}, no tā kreisā gala vidus.
   - {{ui:3D elements}}: ciets ķermenis 3D cilnē (zemāk).
4. Noklikšķiniet {{ui:Ievietot}} uz izmēra kartītes, tad noklikšķiniet, kur tas jāliek, kā jebkurai bibliotēkas lietai.

Griezums vai fasāde kļūst par bloku. Tā atribūti satur izmēru, tabulu, no kuras tas nāk, garumu (fasādei) un materiālu, ko varat aizpildīt.

:::note
S profili, kanāli un UPN ir zīmēti ar paralēlām flanšēm vidējā biezumā, un leņķi ar taisniem stūriem: īstās flanšes ir slīpas un stūri noapaļoti. W, IPE, HEA un HEB ir ar sakņu noapaļojumiem, un HSS ar stūru rādiusiem.
:::

## Izveidot 3D elementu

Izvēlieties {{ui:3D elements}} un noklikšķiniet {{ui:Ievietot}}, vai komandrindā ierakstiet {{cmd:STEELMEMBER}} (`SMEMBER`):

1. Pie `Section size` nospiediet {{key:Enter}} parādītajam izmēram vai ierakstiet savu, piemēram, `HSS6x6x1/4` vai `IPE300`.
2. Noklikšķiniet sākuma punktu, tad beigu punktu. Elements iet starp tiem, stāvot uz zemes.
3. Kolonnai ierakstiet `C`, noklikšķiniet tās pamata punktu un ierakstiet tās augstumu.

Elements ir slēgts ciets ķermenis 3D cilnē. Pārvietojiet vai kopējiet to tur kā jebkuru citu cietu ķermeni. {{key:Mod+Z}} to atkal noņem.

## Novietot standartdetaļu

1. {{ui:Standarta}} cilnē izvēlieties saimi, piemēram, {{ui:Sešstūru galvas skrūves}}.
2. Skrūvei, bultskrūvei, tapai vai atslēgai ierakstiet tās {{ui:Garums (mm)}} (collu saimēm — collās). Zobratam ierakstiet {{ui:Zobi}}, {{ui:Virsmas platums (mm)}} un {{ui:Caurums (mm)}}. Atstājiet lodziņu tukšu, lai izmantotu tajā parādīto parasto vērtību.
3. Noklikšķiniet {{ui:Ievietot}} uz izmēra un noklikšķiniet, kur tā jāliek.

Skrūves, bultskrūves un tapas zīmētas no sāna, ar galvas balsta virsmu ievietošanas punktā; uzgriežņi, paplāksnes, gultņi un zobrati — uz plakni; atslēgas — no augšas. Vītnes zīmētas parastajā veidā: sakne kā plāna līnija, vītnes gals kā bieza. Zobrati zīmēti kā to virsotņu riņķis, dalījuma riņķis un sakņu riņķis, nevis zobs pa zobam.

Katras detaļas bloks satur tās tipu, standartu, izmēru, garumu un materiālu kā atribūtus, kā arī svaru pēc nominālā profila tēraudā. Materiālu mainiet panelī {{ui:Rekvizīti}}.

Tās pašas detaļas ir bibliotēkā arī kā lietas, un PartCraft tās atver kā parametriskas detaļas ({{ui:Standartdetaļa}} tās grupā Fails).

## Izveidot detaļu sarakstu

- Bibliotēkā noklikšķiniet {{ui:Detaļu saraksts}}: katra standartdetaļa un tērauda profils rasējumā, grupēts pēc tipa, standarta, izmēra, garuma un materiāla, ar daudzumu un pozīciju numuriem. {{ui:Lejupielādēt CSV}} saglabā to izklājlapai.
- Lai to uzzīmētu, ierakstiet {{cmd:PARTSLIST}} (`PLIST`), noklikšķiniet tabulas augšējo kreiso stūri un nospiediet {{key:Enter}} parastajam teksta augstumam vai ierakstiet savu.

Saraksts tiek nolasīts no bloku atribūtiem, tāpēc tas joprojām ir pareizs pēc tam, kad rasējums ir saglabāts kā DWG vai DXF un atvērts atkal.

## Biežākās kļūdas

- **„Nav tērauda profila ar nosaukumu …”**: ierakstiet izmēru tā, kā to uzskaita {{ui:Standarta}} cilne: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Elements ir 3D cilnē, nevis plānā.** {{cmd:STEELMEMBER}} veido cietu ķermeni; atveriet 3D cilni, lai to redzētu. Lai tēraudu rādītu plānā, novietojiet arī {{ui:Griezums}} vai {{ui:Augstuma atzīme}}.
- **Garums ārpus diapazona.** Bultskrūvei jābūt garākai par tās galvu, un atslēgai garākai, nekā tā ir plata. Rindiņa zem kartītēm norāda, kura vērtība tika noraidīta.
