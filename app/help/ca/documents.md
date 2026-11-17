---
title: Documents: extracció, revisions i publicació
summary: Mantingueu sota control els dibuixos d'una carpeta de projecte: extraieu un fitxer perquè ningú més el canviï, retorneu-lo com a revisió nova, envieu-lo a revisió i publiqueu-lo amb el nom d'un aprovador; historial, què utilitza què, una llista de materials i caixetins que mostren la revisió.
keywords: configuració del projecte, aprovadors, administradors, lletres de revisió, ASME, només lectura, compara revisions, obre la còpia, partcraft, bimcraft, documents, DOCUMENTS, DOCS, caixa forta, gestió de documents, pdm, extreu, retorna, checkout, checkin, bloqueig, revisió, rev, lletra de revisió, publica, publicat, aprova, aprovació, revisa, obsolet, on s'utilitza, bom, llista de materials, caixetí, bloc de revisions, carpeta del projecte
from: ee938722
---

## Què obtindreu

Una carpeta de projecte on cada dibuix té una revisió (A.1, A.2 … després A, B …) i un estat (En curs, Per revisar, Publicat, Obsolet), on només una persona alhora pot canviar un fitxer, i on cada extracció, retorn, aprovació i extracció trencada queda registrat amb qui ho ha fet i quan.

Tot es guarda a la mateixa carpeta, en una carpeta oculta `.ccvault` al costat dels dibuixos. Una carpeta en una unitat compartida o una carpeta sincronitzada serveix per a tot un equip. No hi ha servidor i no es puja res.

## Obre Documents

Escriviu `DOCUMENTS` (o `DOCS`) i premeu {{key:Enter}}. El tauler s'obre al costat del dibuix.

Trieu {{ui:Trieu la carpeta del projecte}} i seleccioneu la carpeta que conté els dibuixos del projecte. Les carpetes de projecte funcionen a CadCraft Studio i en navegadors que poden obrir una carpeta (Chrome, Edge). En altres navegadors, el tauler ho indica.

La primera vegada, escriviu el vostre nom (apareix en tot el que feu) i el nom d'aquest ordinador. Si heu iniciat la sessió, el vostre nom ja hi és.

## Crea una caixa forta

Una carpeta que encara no és una caixa forta ofereix {{ui:Crea una caixa forta en aquesta carpeta}}. Escriviu el nom del projecte. Després obriu {{ui:Fitxers fora de la caixa forta}} i trieu {{ui:Afegeix}} al costat de cada fitxer que voleu posar sota control. Un fitxer que afegiu comença a la revisió **A.1**, En curs.

## Canvia un dibuix

1. Trieu {{ui:Obre}} al costat d'un dibuix. S'obre a CadCraft. Si no està extret a nom vostre, només el podeu mirar: Desa es nega a sobreescriure'l i indica el motiu (useu Anomena i desa per guardar-ne una còpia pròpia).
2. Trieu {{ui:Extreu}}. Ningú més no el pot extreure ara; el tauler mostra qui el té, en quin ordinador i des de quan.
3. Dibuixeu.
4. Trieu {{ui:Retorna}} i indiqueu què ha canviat. El dibuix que teniu obert es desa a la carpeta del projecte en el seu format i esdevé la revisió següent (A.1, després A.2). Retornar sense cap canvi manté la revisió.

{{ui:Desfés l'extracció}} torna el fitxer sense crear-ne una revisió nova.

## Revisió i publicació

- {{ui:Envia a revisió}}: el fitxer és de només lectura mentre es revisa.
- {{ui:Aprova}}: escriviu el nom de l'aprovador. A.3 passa a ser **A**, Publicat. Els fitxers publicats són de només lectura.
- {{ui:Torna enrere}}: torna a En curs, amb el motiu.
- {{ui:Nova revisió}} en un fitxer publicat l'extreu per a la lletra següent: el primer retorn és **B.1**. {{ui:Desfés l'extracció}} abans d'això el deixa a A.
- {{ui:Marca com a obsolet}} retira un fitxer publicat.

Un projecte pot mantenir una llista de qui pot aprovar, i pot exigir que l'aprovador no sigui la persona que ha retornat el fitxer (vegeu Configuració del projecte més avall).

## Configuració del projecte

Obriu {{ui:Configuració del projecte}} al tauler:

- **Aprovadors**: un nom per línia. Quan n'hi ha, només ells poden aprovar una publicació.
- **L'aprovador ha de ser una altra persona que l'autor**: la regla dels "quatre ulls".
- **Administradors**: un nom per línia. Quan n'hi ha, només ells poden trencar l'extracció d'una altra persona o canviar aquesta configuració.
- **Lletres de revisió que cal deixar de banda**: {{ui:Utilitza la seqüència ASME Y14.35}} omet I, O, Q, S, X i Z, o escriviu les vostres lletres. Les lletres ja assignades es mantenen; l'elecció s'aplica a les revisions següents.
- **Una extracció es considera antiga després de**: el nombre de dies (14 per defecte).

Trieu {{ui:Desa la configuració}}. El canvi s'escriu al registre amb el nom de qui l'ha fet.

## Algú ha deixat un fitxer extret

{{ui:Trenca l'extracció}} allibera un fitxer que una altra persona ha extret (està fora, o el seu ordinador s'ha espatllat). Heu d'escriure un motiu: queda registrat al registre amb de qui era l'extracció. Quan el projecte té administradors, només ells ho poden fer. Una extracció de fa més de 14 dies es marca com a extracció antiga.

## Historial, revisions, usos, utilitzat per

Trieu el nom d'un fitxer per veure:

- {{ui:Historial}}: cada esdeveniment, el més recent primer, amb qui, quin ordinador i quan.
- {{ui:Revisions}}: cada revisió conservada. Hi ha una còpia de cada revisió a la caixa forta (el mateix contingut es guarda una sola vegada). {{ui:Obre la còpia}} obre aquella revisió com una còpia simple que no pot sobreescriure el fitxer de la caixa forta. {{ui:Compara amb}} enumera el que s'ha afegit, eliminat i canviat entre aquella revisió i l'anterior (o qualsevol altra que trieu), i ho ressalta al dibuix.
- {{ui:Usos}}: els dibuixos als quals enllaça (xrefs), els documents als quals apunta un model IFC, les peces d'un conjunt de PartCraft.
- {{ui:Usat per}}: cada fitxer de la caixa forta que utilitza aquest.

{{ui:Llista de materials (CSV)}} desa la llista de tot el que utilitza un fitxer, nivell per nivell, amb quantitats, revisions i estats, per a un full de càlcul.

## Un bloc de revisions al full

Amb un dibuix obert que té una presentació, trieu {{ui:Bloc de revisions}}. Es dibuixa a la cantonada superior dreta del full que esteu veient una taula amb les revisions publicades (revisió, data, per qui, aprovada, descripció). Quan aproveu una publicació, la taula s'actualitza.

## Revisió al caixetí

Doneu als atributs del caixetí una d'aquestes etiquetes i trieu {{ui:Omple els caixetins}} al dibuix obert:

| Etiqueta | S'omple amb |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | la revisió (B, o B.2 mentre es treballa) |
| `VAULT.STATE` | l'estat (Publicat …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | la data de l'última revisió |
| `VAULT.APPROVER`, `APPROVED_BY` | qui ha aprovat l'última publicació |

## PartCraft i BimCraft

PartCraft i BimCraft tenen el mateix tauler Documents per als seus fitxers: peces i conjunts a PartCraft, models IFC a BimCraft. Retornar desa el model obert a la carpeta del projecte, i un conjunt mostra quines peces utilitza i una llista de materials.

## Bon saber

- Dues persones a la mateixa carpeta compartida no poden extreure el mateix fitxer alhora: l'extracció és un fitxer que el sistema es nega a crear dues vegades. En un navegador, i en un Studio amb una versió anterior a aquesta funció, això és tan estricte com ho permeti la carpeta: dues extraccions en el mateix instant podrien reeixir totes dues. El tauler indica quin cas s'aplica.
- No editeu ni suprimiu la carpeta `.ccvault` a mà. El registre que hi ha és el document de referència; la caixa forta en reconstrueix la llista a partir d'ell si cal.
- Un canvi en un fitxer de la carpeta sense extracció es mostra com a {{ui:Canviat a la carpeta sense extracció}}.
