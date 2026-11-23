---
title: Doneu a les opcions de les ordres les vostres pròpies lletres
summary: Respon a les opcions d'una ordre amb lletres que triïs, en qualsevol llengua, des d'un fitxer de text que pots editar, importar i exportar.
keywords: lletres d'opció, optionkeys, optkeys, paraula clau d'opció, paraula clau, redefineix, mapatge, personalitza, lletres pròpies, polar, matriu, P, PO, llengua, tradueix opcions, forma curta, importa, exporta, ambigu
from: 7c8328c6
---

## Què aprendreu

Com canviar les lletres que escrius per respondre a les opcions d'una ordre. Per exemple, {{cmd:ARRAY}} demana `[Rectangular/POlar]` i accepta `PO` per a Polar; pots fer que `P` o qualsevol altra lletra faci el mateix, en la teva llengua si vols.

## Com es responen les opcions

Quan una ordre mostra opcions entre claudàtors, les lletres majúscules són les que cal escriure: `POlar` és `PO`, `Surt (X)` és `X`.

També pots escriure menys lletres. Si el que escrius encaixa només amb una de les opcions mostrades, CadCraft la pren: amb `[Rectangular/POlar]`, una `P` sola és Polar. Si encaixa amb dues, la línia d'ordres les anomena i torna a preguntar:

```
C pot ser COUnt, COLumns. Escriu més lletres.
```

Els números mai no s'endevinen, així que una distància o un recompte escrits sempre es llegeixen com a número.

## Afegeix lletres pròpies

Cada ordre conserva les seves lletres integrades. Hi afegeixes les teves a sobre, de manera que la teva llista només conté el que has canviat.

1. Obre {{ui:Configuració}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Lletres d'opció}} i fes clic a {{ui:Edita…}}. O escriu {{cmd:OPTIONKEYS}} i prem {{key:Enter}}.
2. Sota {{ui:Ordre}}, tria l'ordre, per exemple `ARRAY`. La llista té totes les ordres que demanen opcions, i comença per l'ordre que vas usar per últim.
3. Sota {{ui:Opció}}, tria l'opció. Cadascuna mostra les seves lletres integrades entre claudàtors, per exemple `POlar (PO)`.
4. A {{ui:Les vostres lletres}}, escriu les lletres que vols, per exemple `P`, i fes clic a {{ui:Afegeix}}.
5. L'opció apareix ara sota {{ui:Les vostres lletres}} amb les seves lletres integrades i les teves. Fes clic a {{ui:Desa}}.

Inicia {{cmd:ARRAY}}, selecciona un objecte i prem {{key:Enter}}. La petició mostra les teves lletres després de l'opció, `POlar (P)`, i `P` la respon.

Per treure'n una, fes clic a la x al final de la seva fila i després a {{ui:Desa}}. L'opció torna a tenir només les seves lletres integrades.

## Lletres que no pots usar

L'editor rebutja les lletres que amagarien alguna cosa que la línia d'ordres ja llegeix, i n'indica el motiu:

- les lletres integrades d'una altra opció de la mateixa ordre (`R` per a Polar a `ARRAY`, on `R` és Rectangular);
- una paraula de referència a objectes de tres lletres o més, com `END`, `MID` o `CEN`, i les paraules `ALL` i `LAST`;
- les mateixes lletres per a dues opcions diferents d'una mateixa ordre.

Mentre hi hagi alguna cosa en vermell, {{ui:Desa}} està desactivat: corregeix la línia o suprimeix-la, i tornarà a estar activat. Les lletres integrades d'una petició sempre guanyen a les teves, de manera que la teva llista mai no pot impedir que funcioni una resposta integrada. Les lletres que coincideixen amb el nom d'una ordre, com `L` o `C`, estan bé: en una petició d'opció la línia d'ordres llegeix una resposta, no inicia una ordre.

Les opcions que es llisten per a una ordre provenen de les ordres que comparteixen les seves peticions, de manera que, de tant en tant, una ordre enumera una opció que només demana en alguns casos.

## Una elecció per a totes les ordres

Sota {{ui:Ordre}}, tria {{ui:Totes les ordres}}. Les opcions són aleshores totes les opcions que tenen les ordres, com `Surt (X)` o `Desfés (U)`. Les lletres que hi afegeixes responen a aquella opció allà on una ordre la ofereixi. Les lletres afegides per a una ordre tenen prioritat sobre aquestes.

## Lletres en la teva llengua

Les lletres poden ser de qualsevol alfabet, de manera que pots respondre les opcions sense canviar el teclat: afegeix `З` per a Tanca sota {{ui:Totes les ordres}}, o `П` per a Polar a `ARRAY`.

CadCraft només porta les lletres en anglès. La teva llista pròpia és com tu, la teva oficina o les persones que comparteixen la teva llengua completen la resta, i {{ui:Exporta}} fa un fitxer que pots passar a una altra persona.

## Edita com a text

{{ui:Edita com a text}} a l'editor mostra la mateixa llista com a línies de text, una per opció, que és també el que desa {{ui:Exporta}}:

```
ARRAY.PO,  P
*.X,       Q
```

Cada línia és l'ordre, un punt, les lletres integrades de l'opció, una coma i les teves lletres. Un asterisc en lloc de l'ordre vol dir totes les ordres. Una línia que comença amb `;` és una nota.

## Què es manté igual

- Les lletres integrades continuen funcionant al costat de les teves.
- Les rutines i els botons de la barra d'eines continuen usant les lletres integrades, de manera que res del que has carregat es trenca. Per escriure tu mateix les lletres integrades quan les teves hi estorbarien, posa primer una subratllat: `_PO`.
- El nom curt d'una ordre és una altra cosa: vegeu [Edita els àlies de les ordres](topic:command-aliases).

## Línies que CadCraft rebutja

Quan edites com a text o importes un fitxer, l'editor enumera cada problema amb el seu número de línia:

- l'ordre no existeix (un àlies d'una ordre és correcte: `AR.PO` es llegeix com `ARRAY.PO`);
- la línia no és `COMMAND.OPTION, LETTERS`;
- les lletres tenen un espai o un signe (només lletres i dígits, 16 com a màxim);
- les mateixes lletres responen a dues opcions diferents d'una mateixa ordre.

## Importa i exporta

{{ui:Exporta}} desa les teves lletres com a fitxer de text, per guardar-lo o per donar-lo a una altra persona. {{ui:Importa…}} llegeix un fitxer així. Tots dos són a l'editor i a {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Lletres d'opció}}.

A Configuració, {{ui:Importa…}} substitueix el teu fitxer pel que triïs. Un fitxer amb una línia que xoca o que no es pot usar no s'accepta; obre l'editor i importa'l allà per veure les línies. A l'editor només omple el quadre: no canvia res fins que fas clic a {{ui:Desa}}.

## Torna a carregar o suprimeix

Escriu {{cmd:REINIT}} i prem {{key:Enter}} per aplicar de nou el teu fitxer. Per suprimir una lletra, esborra la seva línia i fes clic a {{ui:Desa}}.

## Les teves lletres segueixen el teu compte

Quan has iniciat la sessió a getcadcraft.com, les teves lletres es guarden amb el teu compte. Obre CadCraft en un altre navegador o en un altre ordinador amb el mateix compte i arriben soles; la línia d'ordres diu `Lletres d'opció del teu compte`. Si les has canviat en dos llocs, guanya la còpia més nova i la que va substituir es conserva una vegada.

{{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Lletres d'opció}} indica en quin estat són. Sense la sessió iniciada o fora de línia, es queden en aquest navegador i passen al teu compte la propera vegada que les desis amb la sessió iniciada.

Relacionat: [Edita els àlies de les ordres](topic:command-aliases) · [Configuració de CadCraft](topic:settings) · [Ordres](topic:commands)
