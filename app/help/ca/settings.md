---
title: Configuració de CadCraft
summary: Els ajustaments que pertanyen a l'aplicació de dibuix: mida del cursor, d'on penja una còpia enganxada del cursor, què fa un clic a la selecció, quantes files usa la barra d'eines, on és la línia d'ordres i quina alçada té, una àrea superior compacta i l'indicador de la cantonada.
keywords: línia d'ordres, línia d'ordres flotant, flota, acobla, una línia, f2, historial d'ordres, commandline, cmdline, toparea, àrea superior, compacta, cursorsize, creueta a pantalla completa, cursor a pantalla completa, de costat a costat, files de la barra d'eines, mostra la barra d'eines, ctrl f1, configuració, preferències, opcions, indicador de cantonada, cub de vista, icona d'eixos, icona UCS, cursor, creueta, caixa de selecció, punt d'enganxat, punt base, clic als objectes, selecció, pickadd, shift, restableix
from: ae1a81db
---

Obre {{ui:Configuració}} amb la roda de l'aplicació o amb {{key:Mod+,}}. La primera pestanya, {{ui:CadCraft}}, conté els ajustaments que pertanyen a aquesta aplicació; {{ui:General}} conté els que comparteixen totes les aplicacions de la família (tema, mida del text dels tauler i amplades, i l'aspecte i l'ordre de la barra d'eines). La configuració de CadCraft només existeix a l'aplicació: la canvies aquí, i aquest navegador la recorda. {{ui:Restableix la configuració de CadCraft}} torna cadascun dels ajustaments al seu valor inicial.

## Cursor

**Petit**, **Mitjà** (per defecte), **Gran** o **Pantalla completa**: la mida de la creueta i de la caixa de selecció al dibuix. Una caixa de selecció més gran també selecciona objectes des d'una mica més lluny, cosa que ajuda en una pantalla tàctil o en un dibuix molt fi.

**Pantalla completa** fa que les dues línies de la creueta vagin d'una vora a l'altra del dibuix, també quan no hi ha cap ordre en curs, de manera que pots comprovar a ull que dues coses estan alineades en tota la vista. Amb la vista dividida, les línies es queden al panell on treballes. És el mateix que {{cmd:CURSORSIZE}} 100 d'AutoCAD: escriu {{cmd:CURSORSIZE}} i 100 per a pantalla completa; un número més petit tria la mida més propera (per sota de 5, Petit; de 5 a 9, Mitjà; de 10 a 99, Gran).

## Punt d'enganxat

D'on penja una còpia enganxada del cursor després de {{key:Mod+V}} ({{cmd:PASTECLIP}}), fins que facis clic:

- **Cantonada inferior esquerra** (per defecte): la cantonada inferior esquerra de l'extensió dels objectes copiats, com a AutoCAD.
- **Centre**: el centre de la seva extensió. Útil per col·locar un símbol a ull.

Una còpia feta amb `COPYBASE` sempre penja del punt base que has triat. {{ui:Enganxa al mateix lloc}} ({{key:Mod+Shift+V}}) ignora aquesta configuració: manté les coordenades originals. Vegeu [Copia, enganxa i duplica](topic:copy-paste).

## Fer clic als objectes

Què fa un clic al dibuix sobre la selecció quan no hi ha cap ordre en curs:

- **Afegeix a la selecció** (per defecte): cada clic o finestra afegeix objectes; {{key:Shift}}+clic, o una finestra amb {{key:Shift}}, els treu.
- **Substitueix la selecció**: un clic o una finestra només selecciona el que tria. {{key:Shift}}+clic afegeix un objecte, o treu un que ja estava seleccionat; una finestra amb {{key:Shift}} afegeix.

A una petició `Seleccioneu objectes:` dins d'una ordre, els clics sempre afegeixen (i {{key:Shift}} treu), sigui quin sigui el que digui aquesta configuració. Vegeu [Selecciona objectes](topic:select-objects).

## Fer clic en un espai buit

Què fa un clic on no hi ha cap objecte quan no hi ha cap ordre en curs. De totes dues maneres inicia una finestra de selecció (un segon clic la finalitza).

- **Neteja la selecció** (per defecte): el que estava seleccionat es deixa anar. Mantén {{key:Shift}} en fer clic per conservar-la.
- **Conserva la selecció**: la selecció es manté, com en altres programes de dibuix; la finestra s'hi afegeix. Prem {{key:Esc}} per netejar la selecció.

## Arrossegar per seleccionar

Què dibuixa mantenir premut i arrossegar en un espai buit:

- **Llaç** (per defecte): un contorn a mà alçada. Si el moviment va primer a la dreta, selecciona el que queda completament a dins; si va primer a l'esquerra, el que toca; {{key:Space}} mentre arrossegues canvia entre finestra, intersecció i tanca.
- **Rectangle**: la caixa, com es dibuixa amb un clic i un segon clic.

{{cmd:LASSOMODE}} `1` o `0` defineix el mateix. Vegeu [Selecció amb llaç](topic:lasso-selection).

## Arrossegar per retallar i allargar

Què fa mantenir premut un espai buit i arrossegar a {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Un camí** (per defecte): un camí a mà alçada; cada tros que travessa es retalla (o s'allarga).
- **Una finestra**: una caixa; cada tros que toca es retalla, com fa l'opció `C`.

Vegeu [Retalla i allarga](topic:trim-and-extend).

## Posició de la barra d'eines

{{ui:CadCraft}} › {{ui:Posició de la barra d'eines}}: **Dalt** (per defecte, com ha estat sempre), **Baix**, **Esquerra** o **Dreta**. A l'esquerra o a la dreta, els grups d'eines s'apilen en una columna que es desplaça quan és més alta que la finestra, i els botons s'ajunten de dos en dos o de tres en tres per línia. L'elecció es desa amb la configuració, i {{cmd:TOOLBARDOCK}} (`TBDOCK`) la defineix des de la línia d'ordres. {{ui:General}} › {{ui:Restaura la disposició}} torna a posar la barra d'eines a dalt.

Les barres dels estils de menú estan dins de la barra d'eines i es mouen amb ella, però l'estil {{ui:Cinta}} està pensat per anar per la part superior o inferior: en un costat rep una columna estreta que es desplaça. En un telèfon, la barra d'eines es queda on la disposició del telèfon la posa.

## Files de la barra d'eines

Quantes línies usen les eines sobre el dibuix, a la barra d'eines de CadCraft i als estils {{ui:Dibuix clàssic}} i {{ui:Cinta}}:

- **Ajusta-ho a la finestra** (per defecte): les eines s'ajunten a l'amplada de la finestra.
- **2 files**: com a màxim dues línies. Quan les eines s'ajunten en dues línies o menys a aquesta amplada, només s'ajunten; si no, es col·loquen en dues files que es desplacen lateralment.
- **1 fila**: una línia que es desplaça lateralment, cosa que deixa més espai al dibuix.

{{key:Shift+Ctrl+F1}} passa per les tres, i {{cmd:TOOLBARROWS}} n'defineix una. Què mostren els botons (icones i text, només icones, o només text) és una configuració de {{ui:General}} › {{ui:Barra d'eines}}; {{key:Ctrl+F1}} hi passa i {{cmd:TOOLBAR}} la defineix.

## Línia d'ordres

La línia d'ordres es pot quedar acoblada sota el dibuix, com sempre, o flotar-hi a sobre, i pot ser tan prima com una sola línia.

- **Fes-la flotar.** Arrossega la nansa de l'extrem esquerre cap al dibuix, o tria {{ui:Deixa flotant sobre el dibuix}} al seu menú {{ui:Opcions de la línia d'ordres}} (els tres punts de l'extrem dret). Torna a arrossegar la nansa per moure-la; el seu lloc es conserva quan la finestra canvia de mida. Arrossega la seva vora dreta per fer-la més ampla o més estreta. Deixa-la a la barra d'estat, o tria {{ui:Acobla a la part inferior}}, per tornar-la a acoblar.
- **Fes-la més prima o més alta.** Arrossega la seva vora superior: cada pas és una línia d'historial. Fins a zero línies, és una **línia d'ordres d'una sola línia**: només la petició i el que escrius, i un missatge nou es mostra per sobre durant un moment. Un doble clic a la vora superior passa d'una línia a l'alçada que teníeu.
- **L'historial.** {{key:F2}}, o el botó del rellotge a la línia d'ordres ({{ui:Historial d'ordres (F2)}}), obre tot l'historial per sobre de la línia (per sota quan la línia flota a prop de la part superior de la finestra). Escriure segueix anant a la línia d'ordres; {{key:PageUp}} i {{key:PageDown}} desplacen l'historial, i {{key:Esc}}, {{key:F2}} o un clic en un altre lloc el tanquen. Una drecera pròpia a F2 té prioritat sobre això.
- **Des del teclat.** La nansa és un botó: quan té el focus, les tecles de fletxa mouen una línia d'ordres flotant (amb {{key:Shift}}, en passos més grans); {{key:Up}} fa flotar una d'acoblada i {{key:Down}} a la vora inferior l'acobla. La vora superior és un separador: {{key:Up}} i {{key:Down}} hi afegeixen o en treuen una línia, {{key:Home}} la deixa en una línia, {{key:End}} la fa la més alta. Els lectors de pantalla continuen sentint tots els missatges, també a la línia d'ordres d'una sola línia.

{{ui:CadCraft}} › {{ui:Línia d'ordres}} té les mateixes opcions: {{ui:Acoblada a la part inferior}} o {{ui:Flotant}}, {{ui:Línies d'historial mostrades}} (de 0 a 12) i {{ui:Alçada estàndard}}. {{cmd:COMMANDLINE}} (`CMDLINE`) les defineix des de la línia d'ordres. El lloc i l'alçada es conserven per a CadCraft en aquest navegador amb la resta de la disposició, de manera que un entorn de treball desat les porta; {{ui:General}} › {{ui:Restaura la disposició}} torna a acoblar la línia d'ordres a la seva alçada estàndard. En un telèfon, la línia d'ordres es queda acoblada amb una línia d'historial; el botó d'historial també funciona allà.

{{ui:CadCraft}} › {{ui:Lletres d'opció}} guarda les lletres que has triat per a les opcions de les ordres: {{ui:Edita…}} obre el fitxer, {{ui:Importa…}} el substitueix per un fitxer que triïs i {{ui:Exporta}} el desa. Vegeu [Doneu a les opcions de les ordres les vostres pròpies lletres](topic:option-letters).

Quan la finestra és baixa i la comprovació de disposició ofereix una disposició més ajustada, el seu {{ui:Sí}} també converteix la línia d'ordres en una sola línia si el dibuix encara és baix després de les barres d'eines.

## Àrea superior

{{ui:CadCraft}} › {{ui:Àrea superior}}: **Estàndard** (per defecte) o **Compacta**. Compacta manté petites les barres sobre el dibuix en tots els estils de menú: desapareixen els noms dels grups i les paraules sota les icones (els consells i els lectors de pantalla els continuen tenint) i els botons són més ajustats. Funciona amb [Files de la barra d'eines](topic:settings#toolbar-rows): Compacta i **1 fila** deixen més espai al dibuix. {{cmd:TOPAREA}} la defineix.

## Indicador de la cantonada

Què hi ha a la cantonada del dibuix:

- **Automàtic** (per defecte): la icona d'eixos a la pestanya {{ui:Model}} i el cub de vista a la pestanya {{ui:3D}}.
- **Icona d'eixos**: el marcador X i Y a la cantonada inferior esquerra de la pestanya {{ui:Model}}, i un petit marcador X, Y i Z a la pestanya {{ui:3D}}.
- **Cub de vista**: un cub a la cantonada superior dreta de totes dues pestanyes. A la pestanya {{ui:Model}} mostra el dibuix des de dalt, i en fer clic a una altra cara, aresta o cantonada s'obre la pestanya {{ui:3D}} mirant des d'allà. A la pestanya 3D gira amb la vista: fes clic per mirar des d'un costat, arrossega per orbitar, i la casa torna a la vista isomètrica. Vegeu [Model en 3D](topic:3d-solids).
- **Cap**: no hi ha res a la cantonada.

Els fulls no mostren cap dels dos.

## Longitud i àrea de la selecció

- **A la barra d'estat** (per defecte): amb objectes seleccionats, la barra d'estat mostra la longitud total i l'àrea total dels tancats. Vegeu [Totals d'una selecció](topic:properties-panel#totals-of-a-selection).
- **Amagat**: la barra d'estat no els mostra. Propietats els continua mostrant per a diversos objectes.

## Quadrícula, orto i passos

Aquests no són al diàleg: els botons {{ui:Quadrícula}}, {{ui:Orto}} i {{ui:Pas}} de la barra d'estat (o {{key:F7}}, {{key:F8}}, {{key:F3}}) i la llista de referències a objectes al costat es recorden en sortir. Vegeu [Referència a punts d'objectes](topic:object-snaps).
