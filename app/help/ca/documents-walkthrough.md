---
title: "Documents i revisions (la caixa forta)"
summary: Un recorregut pas a pas per una feina real: posar una carpeta de projecte sota control, extreure un plànol, canviar-lo, retornar-lo amb una nota, enviar-lo a revisió, aprovar-lo i publicar-lo, veure l'historial i què l'utilitza, què veu una segona persona mentre està bloquejat, i com funciona amb carpetes al núvol.
keywords: caixa forta, documents, recorregut, tutorial, extreu, retorna, revisió, publicació, aprova, bloqueig, historial, on s'utilitza, carpeta al núvol, carpeta de projecte, gestió de documents, pdm, dues persones, carpeta compartida
from: 3829528d
---

## Què hi fareu

Sou l'Ana, treballant a la Riverside clinic amb un company, en Ben. Els plànols del projecte viuen en una carpeta a la qual tots dos hi teniu accés (una unitat compartida, una carpeta sincronitzada o una carpeta al núvol). Al final, un fitxer haurà passat de la primera còpia a una revisió publicada **A**, haurà estat canviat de nou com a **B.1**, haureu vist qui va fer cada cosa, i haureu vist què veu en Ben quan teniu el fitxer.

Tot es guarda en una carpeta oculta `.ccvault` al costat dels fitxers: no hi ha servidor, i no es puja res (una carpeta al núvol n'és l'excepció, vegeu l'últim pas). Per a cada botó i cada regla en un sol lloc, vegeu el tema *Documents: extracció, revisions i publicació* on la vostra aplicació el tingui.

## 1. Configureu la carpeta del projecte

1. Trieu {{ui:Documents…}} al menú {{ui:Més}} de la pestanya **Visualitza**, o escriviu `DOCUMENTS` (o `DOCS`) i premeu {{key:Enter}}.
2. Trieu {{ui:Trieu la carpeta del projecte}} i escolliu la carpeta que conté els plànols del projecte. (Les carpetes de projecte funcionen a Studio i en navegadors que poden obrir una carpeta, com Chrome i Edge. En altres navegadors el panell ho indica.)
3. Trieu {{ui:Canvia}} al costat de **Vós:** i escriviu el vostre nom, `Ana` (si ho demana, també el nom d'aquest ordinador). El panell ara diu *Vós: Ana a* i el vostre ordinador. El vostre nom va a tot el que feu.
4. Trieu {{ui:Crea una caixa forta en aquesta carpeta}} i escriviu el nom del projecte, `Riverside clinic`. El panell diu *Caixa forta iniciada per a Riverside clinic.*

## 2. Poseu un fitxer sota control

1. Obriu **Fitxers fora de la caixa forta** i trieu {{ui:Afegeix}} al costat de `plans/A-101.dxf`.
2. Apareix sota **Fitxers a la caixa forta** amb la revisió **A.1**, estat **Treball en curs**. A.1 és la seva primera còpia; la caixa forta guarda una còpia de cada revisió.

## 3. Extraieu, canvieu, retorneu

1. Trieu {{ui:Obre}} al costat de `plans/A-101.dxf`. El dibuix s'obre a CadCraft i el panell es tanca perquè el pugueu veure. El panell encara és a una ordre de distància: `DOCUMENTS`.
2. Torneu a obrir el panell i trieu {{ui:Extreu}}. La fila ara diu **Extret per a vós**. S'ha creat un fitxer de bloqueig a `.ccvault/locks`; ningú més no pot extreure aquest fitxer fins que el retorneu.
3. Dibuixeu alguna cosa: afegiu una línia, mogueu un mur. Res del que feu no es pot desar sobre el fitxer de la caixa forta tret que el dibuix estigui extret per a vós; {{ui:Anomena i desa}} sempre funciona per a una còpia vostra.
4. Obriu el panell, trieu {{ui:Retorna}} i escriviu què ha canviat (`Va moure la porta`). El panell diu *retornat com a A.2*. El fitxer de la carpeta del projecte ara és el dibuix que teníeu obert, i el bloqueig ha desaparegut. Retornar sense cap canvi manté la revisió.

Si canvieu d'opinió, {{ui:Desfés l'extracció}} torna el fitxer sense una revisió nova.

## 4. Revisió i publicació

1. Trieu {{ui:Envia a revisió}}. L'estat passa a **Per revisar** i el fitxer és de només lectura.
2. Abans d'aprovar, trieu {{ui:Configuració del projecte}} i enumereu qui pot aprovar (un nom per línia), per exemple `Ben` i `Carla`, i marqueu la regla que l'aprovador ha de ser una persona diferent de l'autor. Trieu {{ui:Desa la configuració}}. Ara la caixa forta mateixa refusa qualsevol altre.
3. En Ben (o la Carla) tria {{ui:Aprova}} i escriu el nom de l'aprovador. L'estat passa a **Publicat** i la revisió passa a **A**, amb *aprovat per* i el nom. Un fitxer publicat és de només lectura. {{ui:Torna enrere}} el tornaria a Treball en curs, amb un motiu.

El nom de l'aprovador és el que s'escriu al panell; és un registre de qui ho ha signat, no una prova d'identitat.

## 5. Una revisió nova

1. Al fitxer publicat, trieu {{ui:Nova revisió}}. La reserveu per a la lletra següent.
2. Canvieu-lo i després trieu {{ui:Retorna}}. La revisió és **B.1**, treball en curs. Publiqueu-la de la mateixa manera i passarà a **B**. {{ui:Desfés l'extracció}} abans del primer retorn el deixa a **A**.

Les lletres de revisió segueixen A, B … Z, AA, AB. Si el vostre estàndard en deixa algunes, l'ajust del projecte *Usa la seqüència ASME Y14.35* salta les I, O, Q, S, X i Z per a les revisions següents.

## 6. Vegeu què ha passat

Trieu el nom del fitxer per obrir-ne els detalls:

- **{{ui:Historial}}**: cada esdeveniment, el més recent primer, amb qui, quin ordinador i quan: *Retornat A.2* per Ana, *Publicat* per Ben, i així successivament.
- **{{ui:Revisions}}**: la taula de revisions. {{ui:Obre la còpia}} obre una revisió com a còpia simple que no pot sobreescriure el fitxer de la caixa forta; {{ui:Compara amb}} enumera què s'ha afegit, eliminat i canviat respecte a la revisió anterior, o respecte a qualsevol altra.
- **{{ui:Usos}}**: els dibuixos als quals enllaça (xrefs).
- **{{ui:Usat per}}**: enumera tots els altres dibuixos de la caixa forta que n'enllacen aquest: si canvieu un plànol base, sabreu quins fulls cal revisar.

## Revisió al full

Amb el dibuix obert (i amb un disseny), trieu {{ui:Bloc de revisions}}: es dibuixa una taula de les revisions publicades a la part superior dreta del full. Trieu {{ui:Omple els caixetins}} per omplir els atributs del caixetí etiquetats com `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` o `APPROVED_BY` amb la revisió, l'estat, la data i l'aprovador del fitxer. Quan aprovareu la publicació següent, el bloc de revisions s'actualitza.

## 7. Què veu en Ben mentre teniu el fitxer

Ara torneu a extreure el fitxer, i demaneu a en Ben que obri la mateixa carpeta de projecte al seu ordinador i obri el panell. A la fila del fitxer veu **Extret per Ana a** el vostre ordinador **des de** l'hora, i no hi ha botó {{ui:Extreu}}. Si ho intenta igualment, la caixa forta el refusa: el bloqueig és un fitxer que el sistema no crearà dues vegades, de manera que dues persones no poden tenir el fitxer, ni tan sols en el mateix instant, quan la carpeta és al disc a Studio. (En un navegador la carpeta només permet un intent de millor esforç, i el panell ho diu sota **Carpeta**.)

Si l'Ana no hi és i en Ben necessita el fitxer, {{ui:Trenca l'extracció}} l'allibera. Ha d'escriure un motiu; va al registre amb de qui era l'extracció. Quan el projecte enumera administradors, només ells poden fer-ho. Una extracció més antiga que el límit d'obsolescència (14 dies per defecte) es marca com *fa molt de temps*. Després del trencament, el retorn tardà de l'Ana es refusa, de manera que cap dels dos no pot sobreescriure l'altre.

## 8. Carpetes al núvol

Una carpeta al núvol és una carpeta de projecte guardada a l'emmagatzematge al núvol de l'equip, de manera que l'equip no necessita una unitat compartida. A Studio, amb la sessió iniciada al vostre compte de CadCraft, el panell mostra {{ui:Obre una carpeta del núvol}} al costat de {{ui:Trieu la carpeta del projecte}}. Trieu-la i escolliu la carpeta, que apareix com a espai de treball / carpeta. El propietari de l'espai de treball n'ha de crear primer la carpeta, i l'emmagatzematge al núvol de l'equip ha d'estar en vigor. Tot l'anterior funciona igual; el servidor fa el bloqueig, que és estricte entre persones. Si no heu iniciat la sessió, el panell us ho demana. En una pestanya de navegador normal el botó del núvol no s'ofereix; useu Studio.

## Prova-ho

Feu els vuit passos anteriors amb una còpia d'un fitxer real. Per als passos de dues persones cal una altra persona, o dues finestres amb dos noms. Si ho proveu amb una carpeta compartida real, la pàgina de proves de la comunitat té una comprovació que demana exactament això, i accepta resultats.
