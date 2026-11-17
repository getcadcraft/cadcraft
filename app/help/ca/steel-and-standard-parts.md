---
title: Inserir perfils d'acer i peces estàndard
summary: Dibuixar seccions d'acer, alçats i barres 3D a partir de les taules de seccions publicades, inserir cargols, femelles, volanderes, passadors, coixinets, claus i engranatges segons les seves normes, i llistar-los en una llista de peces.
keywords: acer, secció, perfil, forma, forma W, biga d'ala ampla, biga I, canal, angle, HSS, tub, canonada, IPE, HEA, HEB, UPN, biga, pilar, barra, alçat, aisc, en 10365, cargol, femella, volandera, passador, coixinet, clau, ranura de clau, engranatge, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, peces estàndard, llista de peces, llista de materials, bom, steelmember, partslist
from: 547c1048
---

La pestanya {{ui:Estàndard}} de la biblioteca té dos tipus d'elements, fets aquí mateix a partir de taules publicades (no es baixa res):

- **Seccions d'acer**: 1,335 mides. W, S, C, L, HSS i Pipe de la AISC Shapes Database v16.0; IPE, HEA, HEB i UPN de EN 10365:2017. DetailCraft fa servir la mateixa taula.
- **Peces estàndard**: cargols de cap hexagonal (ISO 4017), cargols hexagonals (ISO 4014), femelles hexagonals (ISO 4032), volanderes planes (ISO 7089), cargols i femelles hexagonals en polzades (ASME B18.2.1 i B18.2.2), passadors paral·lels (ISO 2338), coixinets rígids de boles (ISO 15), claus paral·leles (DIN 6885-1) i engranatges rectes (mòduls de ISO 54).

Tot això es comparteix sota CC0: es pot usar per a qualsevol cosa, sense necessitat de crèdits.

## Inserir un perfil d'acer

1. Obriu la biblioteca ({{ui:Biblioteca}} al grup Blocs, o escriviu `LIB`) i feu clic a la pestanya {{ui:Estàndard}}.
2. Trieu la família a la primera llista, per exemple {{ui:Perfils W}}. Escriviu al quadre de cerca per reduir les mides: `W12` mostra totes les W12.
3. A {{ui:Col·loca com a}}, trieu:
   - {{ui:Secció}}: la secció transversal, amb el seu centre al punt d'inserció.
   - {{ui:Elevació}}: la peça vista de costat, tan llarga com indiqui {{ui:Longitud (mm)}}, des del centre del seu extrem esquerre.
   - {{ui:Barra 3D}}: un sòlid a la pestanya 3D (més avall).
4. Feu clic a {{ui:Insereix}} a la targeta de la mida, i després feu clic on ha d'anar, igual que per a qualsevol element de la biblioteca.

Una secció o un alçat es converteix en un bloc. Els seus atributs porten la mida, la taula d'origen, la longitud (per a un alçat) i un material que podeu omplir.

:::note
Les formes S, els canals i els UPN es dibuixen amb ales paral·leles del gruix mitjà, i els angles amb cantonades quadrades: les ales reals són inclinades i les cantonades arrodonides. W, IPE, HEA i HEB tenen els seus arrodoniments d'arrel, i HSS els seus radis de cantonada.
:::

## Crear una barra 3D

Trieu {{ui:Barra 3D}} i feu clic a {{ui:Insereix}}, o escriviu {{cmd:STEELMEMBER}} (`SMEMBER`) a la línia d'ordres:

1. A `Section size`, premeu {{key:Enter}} per a la mida que es mostra, o escriviu-ne una, per exemple `HSS6x6x1/4` o `IPE300`.
2. Feu clic al punt inicial i després al punt final. La barra va entre tots dos, assentada sobre el terra.
3. Per a una columna, escriviu `C`, feu clic al seu punt base i escriviu-ne l'alçada.

La barra és un sòlid tancat a la pestanya 3D. Mogueu-la o copieu-la allà com qualsevol altre sòlid. {{key:Mod+Z}} la treu de nou.

## Col·locar una peça estàndard

1. A la pestanya {{ui:Estàndard}}, trieu la família, per exemple {{ui:Vis de cap hexagonal}}.
2. Per a un cargol, un perno, un passador o una clau, escriviu-hi la {{ui:Longitud (mm)}} (en polzades per a les famílies en polzades). Per a un engranatge, escriviu-hi les {{ui:Dents}}, la {{ui:Amplada de cara (mm)}} i el {{ui:Forat (mm)}}. Deixeu una casella buida per al valor habitual que hi apareix.
3. Feu clic a {{ui:Insereix}} a la mida i feu clic on ha d'anar.

Els cargols, perns i passadors es dibuixen de costat, amb la cara d'apoi del cap al punt d'inserció; les femelles, volanderes, coixinets i engranatges es dibuixen de cara; les claus, des de dalt. Les rosques es dibuixen de la manera habitual: l'arrel com una línia fina, i el final de la rosca com una de gruixuda. Els engranatges es dibuixen com el seu cercle de cap, cercle primitiu i cercle d'arrel, i no dent per dent.

El bloc de cada peça porta com a atributs el seu tipus, la norma, la mida, la longitud i el material, i el seu pes a partir de la forma nominal en acer. Canvieu el material al tauler {{ui:Propietats}}.

Les mateixes peces també són a la Biblioteca com a elements, i PartCraft les obre com a peces paramètriques ({{ui:Peça estàndard}} al seu grup Fitxer).

## Fer una llista de peces

- A la biblioteca, feu clic a {{ui:Llista de peces}}: cada peça estàndard i cada perfil d'acer del dibuix, agrupats per tipus, norma, mida, longitud i material, amb la quantitat i els números d'element. {{ui:Baixa CSV}} la desa per a un full de càlcul.
- Per dibuixar-la, escriviu {{cmd:PARTSLIST}} (`PLIST`), feu clic a la cantonada superior esquerra de la taula, i premeu {{key:Enter}} per a l'alçada de text habitual o escriviu-ne una.

La llista es llegeix dels atributs dels blocs, de manera que continua sent correcta després de desar el dibuix en DWG o DXF i tornar-lo a obrir.

## Errors habituals

- **"No steel section is called …"**: escriviu la mida tal com la llista la pestanya {{ui:Estàndard}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **La barra és a la pestanya 3D, no al pla.** {{cmd:STEELMEMBER}} crea un sòlid; obriu la pestanya 3D per veure'l. Per mostrar l'acer al pla, inseriu també una {{ui:Secció}} o una {{ui:Elevació}}.
- **Una longitud fora de rang.** Un perno ha de ser més llarg que el seu cap, i una clau més llarga que la seva amplada. La línia sota les targetes indica quin valor s'ha rebutjat.
