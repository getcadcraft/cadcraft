---
title: Treballeu junts en un dibuix amb Live TeamWork
summary: Què canvia a CadCraft mentre sou en una sessió Live TeamWork des de CadCraft Studio: els cursors i les seleccions dels altres, els objectes que algú edita, els bloquejos de l'amfitrió, el vostre propi desfer, i unir-vos des d'un navegador a la mateixa xarxa.
keywords: live, live teamwork, studio live, junts, col·laborar, coedició, sessió, comparteix en directe, uneix, cursor, retingut, editant, bloqueig, livelock, liveunlock, livehold, retenció de capa, retenció d'àrea, cadenat, desfer, amfitrió, assistent, mateix fitxer, moltes persones, lent, límit, qui ha canviat, edicions recents, registre d'edicions
from: 0497d2a3
---

## Què aprendreu

Què veieu i què passa amb les vostres edicions mentre diverses persones treballen en un mateix dibuix a la vegada. CadCraft Studio inicia i uneix la sessió Live TeamWork ({{ui:Comparteix en directe}}, {{ui:Uneix}}); aquesta pàgina tracta del dibuix en si.

## Tothom dibuixa alhora

Dibuixeu i editeu com de costum. Les vostres edicions es mostren de seguida, fins i tot abans que els altres les tinguin, i les seves apareixen a la pantalla una mica després que les facin. Totes les ordres funcionen: dibuixar, modificar, capes, blocs, fulls, cotes, restriccions.

Dues persones poden canviar el mateix objecte. Quan canvieu coses diferents, com el color i un punt final d'una línia, es mantenen tots dos canvis. Quan canvieu la mateixa cosa, guanya el canvi posterior.

Què és només vostre: la capa actual, el color i l'alçada de text per als objectes nous, la configuració de cotes, la vostra vista, la pantalla dividida i el SCP. El dibuix es comparteix; la manera com el mireu, no.

## Altres persones al vostre dibuix

- **Cursors:** el punter de cada persona es mostra amb el seu nom en el seu propi color, i l'ordre que executa. Veieu els cursors de les persones que treballen prop del que hi ha a la vostra pantalla.
- **Seleccions:** el que algú ha seleccionat es marca amb el seu color.
- **En edició:** un objecte que algú ha seleccionat porta una etiqueta com "Ana està editant". Encara podeu canviar-ne el color o moure'l, però no el podeu suprimir, descompondre ni tornar a escriure fins que ells el deixin anar. En seleccionar-lo, us diu qui el té.
- **Qui ho va canviar per últim:** seleccioneu un objecte que algú altre ha canviat en aquesta sessió i la línia d'ordres diu qui i quin va ser el canvi ("Ben ho va canviar per últim: CIRCLE."). El tauler Live de Studio enumera cada edició recent sota {{ui:Edicions recents}}. Res d'això es desa al dibuix: dura tant com la sessió.

## Reteniu una capa o una àrea mentre hi treballeu

En un dibuix gran amb diverses persones, digueu quina part és vostra per ara:

1. Escriviu `LIVEHOLD` i premeu {{key:Enter}}.
2. Trieu `L` i escriviu un nom de capa ({{key:Enter}} manté la capa actual), o trieu `A` i seleccioneu dues cantonades d'una àrea.
3. Les edicions dels altres sobre aquella capa, o als objectes d'aquella àrea, es desfan i se'ls avisa que hi treballeu. Veieu la vostra àrea com un marc de traços; els altres la veuen en el vostre color amb el vostre nom, i les capes que reteniu es llisten a la part superior esquerra del seu dibuix.
4. `LIVEHOLD` i després `R` allibera tot el que reteniu. Sortir de la sessió també ho allibera.

Qualsevol persona de la sessió pot retenir, també l'amfitrió; els bloquejos de l'amfitrió s'hi apliquen a sobre. Una retenció no es desa mai al fitxer.

## Quan es desfà una edició

La còpia de l'amfitrió del dibuix comprova cada edició. Algunes no es poden acceptar, i CadCraft les desfà a la vostra pantalla i diu el motiu a la línia d'ordres, per exemple:

- algú ha suprimit l'objecte, o la capa o el bloc que necessita, just abans que vosaltres;
- algú està editant aquest objecte, o en reté la capa o l'àrea on és;
- l'amfitrió l'ha bloquejat;
- el bloc que col·loqueu s'ha purgat, o una capa que suprimiu encara té objectes.

## Desfer desfà la vostra pròpia feina

{{key:Mod+Z}} i {{ui:Desfés}} desfan la vostra última ordre, tota, i deixen en pau la feina de tots els altres. Quan algú ha canviat la mateixa cosa des de llavors, no es desfà res i la línia d'ordres diu qui ho ha canviat. {{key:Mod+Y}} refà.

## Bloquejos (l'amfitrió)

L'amfitrió pot protegir objectes o una capa sencera perquè ningú no els canviï, ni tan sols l'amfitrió, fins que es desbloquegin:

1. Seleccioneu els objectes, després escriviu `LIVELOCK` i premeu {{key:Enter}}. O escriviu `LIVELOCK` sense res seleccionat i trieu `L` per bloquejar una capa pel nom: els objectes afegits després a aquesta capa també queden bloquejats.
2. Els objectes bloquejats es dibuixen de traços amb una etiqueta "Bloquejat per l'amfitrió" a la pantalla de tots.
3. `LIVEUNLOCK` els desbloqueja de la mateixa manera.

Els bloquejos pertanyen a la sessió: acaben quan ella acaba i mai no es desen al fitxer.

## Uneix-te amb el mateix fitxer

Si heu obert exactament el fitxer que l'amfitrió va obrir (d'una carpeta compartida o de la mateixa còpia), uniu-vos des de la vostra pròpia finestra de CadCraft a Studio: obriu el tauler {{ui:Sobrecàrrega}} i useu {{ui:Uneix aquí}} amb el codi de l'amfitrió. Només viatgen els canvis fets des que l'amfitrió el va obrir, de manera que un dibuix gran està a punt de seguida. Si el vostre fitxer és un altre, el dibuix de l'amfitrió substitueix el vostre a la pantalla (el vostre fitxer es queda tal com està). Això només funciona mentre el vostre dibuix no hagi canviat des que l'heu obert.

## Assistents en una sessió en directe

Un assistent connectat a la vostra finestra de CadCraft (vegeu l'ajuda sobre treballar amb assistents d'IA) s'uneix a la sessió com a participant propi, que tothom veu com "Assistent (via <el vostre nom>)". L'amfitrió el deixa entrar, igual que a una persona; l'assistent de l'amfitrió s'uneix de seguida. Els seus canvis tenen el seu propi desfer: el vostre {{key:Mod+Z}} desfà la vostra feina, i el desfer de l'assistent només desfà el seu. Surt de la sessió quan el desconnecteu o sortiu, i només pot treballar a la sessió mentre vosaltres podeu editar.

## Uneix-te des d'un navegador

Un company d'equip sense Studio pot escanejar la imatge sota el codi de l'amfitrió amb un telèfon, una tauleta o un ordinador a la mateixa xarxa. CadCraft s'obre al navegador, demana el vostre nom a la línia d'ordres, i s'omple amb el dibuix de l'amfitrió quan l'amfitrió us deixa entrar. Un enllaç d'invitació permet que algú s'uneixi des d'una altra xarxa: l'amfitrió necessita un lloc del Team Cloud Plan per a l'aplicació, tothom més s'uneix gratis, i l'enllaç només funciona mentre la sessió de l'amfitrió és oberta.

## Moltes persones al mateix dibuix

Cada edició arriba a tothom de la sessió, de manera que com més persones hi ha, més triga cada canvi a arribar a cadascuna, i els ordinadors portàtils i les connexions més lentes es queden enrere primer. La mida habitual d'una sessió és de 20 persones; l'amfitrió pot permetre'n més per a una sessió (vegeu l'ajuda sobre treballar junts en directe). Si el dibuix se sent lent amb moltes persones, ajuda tenir-ne menys, que menys editin al mateix moment, o una millor connexió.

## Quan acaba la sessió

Només l'amfitrió desa el dibuix. Quan l'amfitrió acaba la sessió, tots els altres conserven una còpia no desada: deseu-la si la voleu conservar.

:::note
Una cosa desfeta es dibuixa per sobre dels objectes del seu voltant a la vostra pantalla fins que torneu a obrir el dibuix. Les trames i els objectes farcits que se superposen poden tenir un aspecte diferent de la còpia de l'amfitrió; el dibuix en si és el mateix.
:::
