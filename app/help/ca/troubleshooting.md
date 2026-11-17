---
title: Resolució de problemes
summary: Missatges que mostra CadCraft i problemes que podeu trobar, cadascun amb la causa i la solució.
keywords: problema, error, no funciona, missatge, no es pot obrir, ordre desconeguda, no passa res, bloquejat, les tecles no funcionen, en blanc, que falta, solució
from: 8299b222
---

## Obrir fitxers

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| "CadCraft obre dibuixos DWG i DXF. "…" no és cap dels dos." | El fitxer no és un `.dwg` ni un `.dxf`. | Obriu el mateix fitxer de dibuix. Es pot importar un PDF (en obrir, es pregunta si s'ha d'importar o adjuntar; vegeu [Fons PDF](topic:pdf-underlay)); les imatges s'afegeixen amb `IMAGEATTACH`. |
| "Aquest DXF binari acaba enmig d'un objecte: el fitxer està tallat o malmès." | El DXF binari s'acaba abans del final. | Escriviu RECOVER per obrir el que es pot llegir, o demaneu de nou el fitxer. |
| "Aquest fitxer no és un DXF llegible (codi de grup incorrecte a la línia …)." | El DXF està malmès o no és realment un DXF. | Demaneu de nou el fitxer, o un DWG. |
| "No s'ha pogut llegir aquest dibuix. Pot estar malmès, o desat en una versió que el lector encara no gestiona (…)." | El lector de DWG no el pot llegir. | Demaneu el DWG desat en una versió anterior, o un DXF. |
| "Aquest dibuix és d'AutoCAD R11 / R12 (DWG AC1009), més antic que el que llegeix CadCraft …" | Els fitxers DWG de la versió 12 i anteriors fan servir un format que CadCraft no llegeix. | Al programa que l'ha creat, deseu-lo com a DXF (qualsevol versió) o com a DWG més nou, i obriu-lo. L'opció Anomena i desa de CadCraft ofereix DXF R12 per als programes que volen aquell format antic. |
| "No s'ha pogut obrir …" seguit d'un missatge de xarxa, en el primer DWG | No s'ha pogut baixar el lector de DWG: no hi ha connexió i CadCraft no està desat per a ús sense connexió, o la connexió s'ha interromput. | Connecteu-vos i torneu-ho a provar, o obriu un DXF. Feu clic a {{ui:Desa per fer-lo servir sense connexió}} i espereu que aparegui "Preparat per a ús sense connexió", perquè els fitxers DWG s'obrin sense connexió la pròxima vegada. Vegeu [Treballar sense connexió](common:offline). |
| El botó sense connexió diu "No s'ha pogut desar" | Alguns fitxers no s'han baixat. | Comproveu la connexió i feu clic al botó per tornar-ho a provar. |
| El botó sense connexió diu "Mode sense connexió no disponible" | Les finestres privades i alguns ordinadors gestionats no poden mantenir una còpia sense connexió. | Useu una finestra normal, o quedeu-vos en línia. |
| CadCraft no s'obre sense connexió | No s'ha desat per a ús sense connexió en aquest navegador, o el navegador l'ha esborrat. | La pròxima vegada que estigueu en línia, feu clic a {{ui:Desa per fer-lo servir sense connexió}} i espereu "Preparat per a ús sense connexió". |
| El dibuix s'obre però li falten parts | Objectes que CadCraft encara no pot dibuixar, o capes que estan desactivades o congelades al fitxer. | Llegiu "Quant a aquest fitxer" al tauler de l'esquerra. Mireu el tauler {{ui:Capes}}. |
| El text s'ajusta en dues línies | CadCraft dibuixa el text amb una font d'estil Helvetica, més ampla que algunes fonts CAD. | Escurceu el text a {{ui:Propietats}}, o accepteu la línia de més. |
| Un cercle es veu com una el·lipse, o el text mirallat es llegeix bé | L'objecte es va dibuixar en un pla inclinat, o es veu des de sota, al programa que va crear el fitxer. CadCraft el mostra vist des de dalt, com ho fa la vista en planta d'aquell programa; el text es manté llegible. | Res per arreglar. Per veure-ho com ho fa l'altre programa, demaneu el dibuix aplanat, o amb els objectes dibuixats des de dalt. |
| Un bloc, cercle o cota és en un lloc diferent del que tenia al programa que va crear el fitxer | Un cas de dibuix que CadCraft llegeix malament. | Digueu-ho a Discord, amb el fitxer si el podeu compartir. |

## La línia d'ordres

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| "Ordre desconeguda "…". Escriviu HELP per veure la llista." | No hi ha cap ordre ni àlies amb aquest nom. | Escriviu `HELP`, o vegeu [Referència d'ordres](topic:commands). Algunes ordres conegudes [encara no estan implementades](topic:not-built-yet). |
| "No hi ha cap ordre així" al costat de la línia d'ordres mentre escriviu | El que escriviu encara no coincideix amb res. | Continueu escrivint, o comproveu l'ortografia. |
| "Cal un punt o una paraula clau d'opció." | El que heu escrit no és un punt ni una opció. | Comproveu el format: `x,y`, `@dx,dy`, `@d<a`, o un sol número. Vegeu [Entrada de coordenades i distàncies](topic:coordinate-entry). |
| "Cal un nombre positiu o dos punts." | Una distància era negativa o no era un número. | Escriviu un nombre positiu, o feu clic a dos punts. |
| "Cal un angle en graus o dos punts." | L'angle no era un número. | Escriviu els graus com a un número simple. |
| "Cal un número." | Calia un número. | Escriviu només dígits. |
| "Paraula clau d'opció no vàlida." | Les lletres no coincideixen amb cap opció. | Escriviu les lletres en majúscules que apareixen entre claudàtors. |
| `*Cancel*` | Heu premut {{key:Esc}}, o {{key:Enter}} on calia un punt. | Torneu a iniciar l'ordre. |
| L'escriptura no arriba a la línia d'ordres | Una caixa d'un tauler o d'un diàleg té el cursor. | Premeu {{key:Enter}} o {{key:Esc}}, o feu clic al dibuix. |
| L'ordre fa servir objectes que no heu triat | Es van seleccionar abans d'iniciar-la. | Premeu {{key:Esc}} abans de l'ordre. |
| Una línia ha anat a un lloc inesperat | `x,y` és absolut. | Useu `@dx,dy` per als punts relatius. |
| "Acabeu o cancel·leu primer l'ordre actual (Esc)." | Heu premut {{key:Mod+S}} mentre una ordre s'estava executant. | Premeu {{key:Esc}} i després deseu. |
| "No s'ha pogut desar com a DWG (AutoCAD 2000): … Proveu Anomena i desa, i després DXF." | Alguna cosa del dibuix no es pot escriure com a DWG. | Premeu {{key:Mod+Shift+S}}, trieu {{ui:DXF R12}} i feu clic a {{ui:Desa}}. |
| "No s'ha desat." | Heu tancat el diàleg {{ui:Desa una còpia com a}} amb {{ui:Cancel·la}} o {{key:Esc}}. | Premeu {{key:Mod+Shift+S}} de nou i feu clic a {{ui:Desa}}. |

## Edició

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| Un objecte no es pot seleccionar | La seva capa està bloquejada, desactivada o congelada; o sou en una presentació i és el model dins d'una finestra gràfica. | Desbloquegeu la capa, o aneu a la pestanya {{ui:Model}}. |
| "No s'ha trobat res allà." | No hi ha cap objecte sota el clic. | Amplieu el zoom i feu clic a la mateixa línia. |
| "Res no talla aquest objecte allà." | {{cmd:TRIM}} no ha trobat cap objecte que talli el tros que heu triat. | Comproveu que la línia de tall realment el talla. |
| "No es pot retallar aquest objecte." | Retalla funciona amb línies, arcs, cercles i polilínies. | Descomposeu primer els blocs, o suprimiu-lo i torneu a dibuixar-lo. |
| "No hi ha límit en aquesta direcció." | {{cmd:EXTEND}} no ha trobat res on arribar. | Trieu més a prop de l'extrem que ha de créixer. |
| "No es pot desfasar aquest objecte." | Desfasament funciona amb línies, arcs, cercles i polilínies. | Descomposeu-lo primer, o dibuixeu una línia paral·lela. |
| "No es pot desfasar tant." | El desfasament giraria la forma del revés. | Useu una distància més petita. |
| "El radi és massa gran." o "La distància és massa gran." | L'arrodoniment o el xamfrà superaria l'extrem d'una línia. | Fixeu un radi més petit amb `R`, o distàncies més petites amb `D`. |
| "Només es pot retallar el primer o l'últim segment d'una polilínia oberta." | El cantó entraria al mig de la polilínia. | Trieu dos segments de la polilínia un al costat de l'altre, o useu `P` per a cada cantó. |
| "Trieu una segona línia diferent." | La segona selecció era la mateixa línia, o no era una línia. | Trieu una altra línia. |
| "Només es descomponen polilínies, referències de bloc i cotes." | La selecció no tenia res per descompondre. | Seleccioneu una polilínia, una referència de bloc o una cota. |
| "Aquesta és la capa actual. Feu-ne actual una altra primer." | Heu intentat desactivar la capa actual. | Feu clic al nom d'una altra capa, i després desactiveu aquesta. |
| "Ja hi ha una capa anomenada …" | Els noms de capa han de ser únics. | Trieu un altre nom. |
| "No hi ha res a desfer." | No queda res per desfer, o heu obert o iniciat un dibuix (això esborra l'historial). | — |

## Cotes i blocs

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| El text i les fletxes de les cotes són minúsculs o enormes | Les mides són en unitats de dibuix; l'escala global no encaixa amb el dibuix. | Fixeu {{cmd:DIMSCALE}} a l'escala de traçat; vegeu [Fixa les mides de cota](topic:dimension-settings). |
| "Trieu un punt dins de l'angle que voleu mesurar." | La ubicació de la cota angular és sobre un dels costats. | Feu clic dins de l'angle. |
| "Aquestes línies són paral·leles." | Les línies paral·leles no tenen angle entre elles. | Trieu dues línies que es toquin. |
| "Trieu una cota lineal o alineada." | {{cmd:DIMCONTINUE}} o {{cmd:DIMBASELINE}} necessiten una cota des d'on començar. | Trieu una cota lineal o alineada. |
| "Aquest dibuix encara no té blocs: F n'insereix un des d'un fitxer, L des de la biblioteca …" | El dibuix no té blocs propis. | Escriviu `F` o `L`, o creeu un bloc amb {{cmd:BLOCK}}. |
| "No hi ha cap bloc anomenat "…"." | El nom és incorrecte. | El missatge enumera els blocs que hi ha. |
| "Un nom de bloc no pot començar amb * ni fer servir …" seguit d'una llista de caràcters | El nom té un caràcter que els blocs no poden fer servir. | Useu lletres, dígits, `-` i `_`. |
| "Un bloc no es pot contenir a si mateix." | La selecció conté una referència al bloc que s'està creant. | Deixeu aquesta referència fora. |
| "No hi ha objectes seleccionats; no s'ha creat res." | Heu premut {{key:Enter}} abans de seleccionar. | Torneu a executar {{cmd:BLOCK}} i seleccioneu els objectes. |

## Fulls i traçats

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| "Les finestres gràfiques van en una presentació. Obriu primer una pestanya de presentació (o creeu-ne una amb LAYOUT)." | {{cmd:MVIEW}} a la pestanya {{ui:Model}}. | Feu clic primer a la pestanya d'un full. |
| "Obriu primer la presentació amb la finestra gràfica." | {{cmd:VPVIEW}} a la pestanya {{ui:Model}}. | Feu clic primer a la pestanya del full. |
| L'escala d'una finestra gràfica sembla deu vegades errònia | Les unitats del dibuix són errònies. | Definiu {{ui:Unitats}} a {{ui:Configuració actual}}. |
| "Encara no hi ha res per traçar." | El model és buit. | Dibuixeu alguna cosa, o obriu un dibuix. |
| "Trieu la finestra a traçar." | S'ha triat {{ui:Una finestra…}} i no s'ha triat cap finestra. | Feu clic a {{ui:Tria}} i trieu dues cantonades. |
| "… més gran que el paper: les vores queden retallades." | L'àrea no hi cap a aquesta escala. | Trieu una escala més petita, un paper més gran, o {{ui:Ajusta al paper}}. |
| "El navegador ha bloquejat la pestanya nova, així que el PDF s'ha baixat en el seu lloc." | Les finestres emergents estan bloquejades per al lloc. | Obriu el PDF baixat, o permeteu les finestres emergents per al lloc. |
| Els caràcters s'imprimeixen com a "?" | Les fonts del PDF no tenen cap lletra per a ells (ideogrames poc habituals, hindi i altres escriptures que necessiten una forma complexa, …), o no s'ha pogut obtenir la font més gran (sense connexió). Les escriptures europees, ciríl·lica, grega, hebrea, àrab, persa, urdú, tai, xinesa, japonesa i coreana s'imprimeixen tal com són. | Per a escriptura àrab, tai, xinesa, japonesa o coreana, torneu a traçar amb connexió. Les altres escriptures encara no estan implementades. |
| Les línies de construcció es veuen al PDF | La seva capa es traça. | Feu clic al botó d'impressora de la capa. |
| Totes les línies tenen el mateix gruix | El seu {{ui:Gruix de línia}} és {{ui:Predeterminat}}, així que s'imprimeixen amb l'amplada de ploma del diàleg. | Doneu a les capes o als objectes un {{ui:Gruix de línia}} al tauler de la dreta, o trieu un {{ui:Gruix de línia}} al diàleg. Per veure els gruixos a la pantalla, premeu {{ui:LWT}} a la barra d'estat. |

## Tecles i pantalla

| Símptoma | Causa | Solució |
|---|---|---|
| F3, F7 o F8 canvia el volum o obre Mission Control | Tecles de funció d'un Mac. | Mantingueu **fn**, o useu els botons de la barra d'estat. Vegeu [Tecles, ratolins i trackpads](common:keys). |
| F7 pregunta sobre la navegació amb cursor | És l'ús que fa Firefox de F7. | Trieu No; useu el botó {{ui:Quadrícula}}. |
| {{key:Mod+N}} ha obert una finestra del navegador | El navegador reserva aquesta tecla. | Feu clic a {{ui:Nova}} o escriviu `NEW`. |
| {{key:Mod+A}} ha seleccionat el text de la línia d'ordres | La línia d'ordres tenia el cursor. | Feu clic primer a un objecte, o escriviu `ALL` en una petició `Select objects`. |
| {{key:Delete}} no esborra | La línia d'ordres tenia el cursor. | Escriviu `E` i premeu {{key:Enter}}. |
| El clic dret no fa res en un trackpad de Mac | El control-clic pot comptar com un clic normal. | Feu clic amb dos dits. |
| Res no es desplaça amb el trackpad | No hi ha botó central, i Space no desplaça. | Llisqueu amb dos dits: es desplaça la vista 2D (el pinç i la roda del ratolí fan zoom). O arrossegueu amb el clic dret premut. |
| El primer {{key:Esc}} ha sortit de la pantalla completa | El navegador fa servir Esc per sortir de la pantalla completa. | Premeu {{key:Esc}} de nou per cancel·lar l'ordre. |
| {{key:F1}} no fa res en un Mac | F1 és una tecla de brillantor. | Mantingueu **fn**, o feu clic a {{ui:Ajuda}}. |
| L'escriptura va al camp de cerca de l'ajuda | El tauler d'ajuda té el cursor. | Feu clic al dibuix. |
| El dibuix s'ha quedat en blanc | Heu fet zoom molt lluny. | Feu clic a {{ui:Extensió}}, o feu doble clic a la roda. |
| "Sortir del lloc?" en tancar la pestanya | Hi ha canvis sense desar. | Quedeu-vos, desau amb {{key:Mod+S}} i després tanqueu. |
