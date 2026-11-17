---
title: Configuració de CadCraft
summary: La configuració que pertany a l'aplicació de dibuix: mida del cursor, on penja una còpia enganxada del cursor, què fa un clic amb la selecció, quantes files usa la barra d'eines, on és la línia d'ordres i quant d'alta és, una àrea superior compacta i l'indicador de cantonada.
keywords: línia d'ordres, línia d'ordres flotant, flotar, acoblar, una línia, f2, historial d'ordres, commandline, cmdline, toparea, àrea superior, compacta, cursorsize, creu a pantalla completa, cursor a pantalla completa, de vora a vora, files de la barra d'eines, visualització de la barra d'eines, ctrl f1, configuració, preferències, opcions, indicador de cantonada, cub de vista, icona d'eixos, icona ucs, cursor, creu, caixa de selecció, punt d'enganxat, punt base, clic sobre objectes, selecció, pickadd, shift, restableix
from: 0896eb42
---

Obriu {{ui:Configuració}} amb l'engranatge de la barra d'aplicacions o amb {{key:Mod+,}}. La primera pestanya, {{ui:CadCraft}}, conté la configuració que pertany a aquesta aplicació; {{ui:General}} conté la que comparteixen totes les aplicacions de la família (tema, mida del text i amplades dels panells, aspecte i ordre de la barra d'eines). La configuració de CadCraft només existeix a l'aplicació: la canvieu aquí, i aquest navegador la recorda. {{ui:Restableix la configuració de CadCraft}} torna cadascuna a l'inici.

## Cursor

**Petita**, **Mitjana** (la predeterminada), **Gran** o **Pantalla completa**: la mida de la creu i de la caixa de selecció al dibuix. Una caixa de selecció més gran també agafa objectes des d'una mica més lluny, cosa que ajuda en una pantalla tàctil o en un dibuix molt fi.

**Pantalla completa** fa que les dues línies de la creu vagin d'una vora a l'altra del dibuix, també quan no hi ha cap ordre en curs, de manera que podeu comprovar a ull que dues coses queden alineades en tota la vista. Amb la vista dividida, les línies es queden al panell on esteu treballant. És com el {{cmd:CURSORSIZE}} 100 d'AutoCAD: escriviu {{cmd:CURSORSIZE}} i 100 per a pantalla completa; un número més petit tria la mida més propera (per sota de 5, Petita; de 5 a 9, Mitjana; de 10 a 99, Gran).

## Punt d'enganxat

On penja una còpia enganxada del cursor després de {{key:Mod+V}} ({{cmd:PASTECLIP}}), fins que feu clic:

- **Cantonada inferior esquerra** (la predeterminada): la cantonada inferior esquerra de l'extensió dels objectes copiats, com a AutoCAD.
- **Centre**: el centre de la seva extensió. Útil per col·locar un símbol a ull.

Una còpia feta amb `COPYBASE` sempre penja del punt base que heu triat. {{ui:Enganxa al mateix lloc}} ({{key:Mod+Shift+V}}) ignora aquesta configuració: manté les coordenades originals. Vegeu [Copia, enganxa i duplica](topic:copy-paste).

## Clic sobre objectes

Què fa un clic al dibuix amb la selecció quan no hi ha cap ordre en curs:

- **Afegeix a la selecció** (la predeterminada): cada clic o finestra afegeix objectes; {{key:Shift}}+clic, o una finestra amb {{key:Shift}}, els treu.
- **Substitueix la selecció**: un clic o una finestra selecciona només el que pren. {{key:Shift}}+clic afegeix un objecte, o en treu un que ja estigui seleccionat; una finestra amb {{key:Shift}} afegeix.

A la indicació `Select objects:` dins d'una ordre, els clics sempre afegeixen (i {{key:Shift}} treu), independentment del que digui aquesta configuració. Vegeu [Selecciona objectes](topic:select-objects).

## En fer clic en un punt buit

Què fa un clic on no hi ha cap objecte quan no hi ha cap ordre en curs. En qualsevol cas, comença una finestra de selecció (un segon clic la completa).

- **Neteja la selecció** (la predeterminada): el que estava seleccionat es deixa anar. Manteniu {{key:Shift}} mentre feu clic per mantenir-lo.
- **Manté la selecció**: la selecció es manté, com en altres programes de dibuix; la finestra s'hi afegeix. Premeu {{key:Esc}} per netejar la selecció.

## Arrossegar per seleccionar

Què dibuixa prémer i arrossegar en un espai buit:

- **Llaç** (la predeterminada): un contorn a mà alçada. Si us moveu primer cap a la dreta se selecciona el que queda completament dins, i primer cap a l'esquerra el que toca; {{key:Space}} mentre arrossegueu canvia entre finestra, intersecció i tanca.
- **Rectangle**: el quadre, com el dibuixen un clic i un segon clic.

{{cmd:LASSOMODE}} `1` o `0` defineix el mateix. Vegeu [Selecció amb llaç](topic:lasso-selection).

## Arrossegar per retallar i allargar

Què fa prémer en un espai buit i arrossegar a {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Un camí** (la predeterminada): un camí a mà alçada; es retalla (o s'allarga) cada tros que creua.
- **Una finestra**: un quadre; es retalla cada tros que toca, com fa l'opció `C`.

Vegeu [Retalla i allarga](topic:trim-and-extend).

## Posició de la barra d'eines

{{ui:CadCraft}} › {{ui:Posició de la barra d'eines}}: **Dalt** (la predeterminada, com ha estat sempre), **Baix**, **Esquerra** o **Dreta**. A l'esquerra o a la dreta, els grups d'eines s'apilen en una columna que es desplaça quan és més alta que la finestra, i els botons es fan en dues o tres per línia. L'elecció es desa amb la vostra configuració, i {{cmd:TOOLBARDOCK}} (`TBDOCK`) la defineix des de la línia d'ordres. {{ui:General}} › {{ui:Restaura la disposició}} torna la barra d'eines a dalt.

Les barres dels estils de menú estan dins la barra d'eines i es mouen amb ella, però l'estil {{ui:Cinta}} està pensat per anar per la part superior o inferior: a un costat rep una columna estreta que es desplaça. En un telèfon, la barra d'eines es queda on la posi la disposició del telèfon.

## Files de la barra d'eines

Quantes línies fan servir les eines per sobre del dibuix, a la barra d'eines de CadCraft i als estils {{ui:Dibuix clàssic}} i {{ui:Cinta}}:

- **Ajusta-ho a l'amplada** (la predeterminada): les eines s'ajusten a l'amplada de la finestra.
- **2 files**: com a màxim dues línies. Quan les eines s'ajusten a dues línies o menys a aquesta amplada, només s'ajusten; si no, es distribueixen en dues files que es desplacen lateralment.
- **1 fila**: una línia que es desplaça lateralment, cosa que deixa més espai al dibuix.

{{key:Shift+Ctrl+F1}} passa per les tres, i {{cmd:TOOLBARROWS}} en defineix una. Què mostren els botons (icones i text, només icones, o només text) és una configuració de {{ui:General}} › {{ui:Barra d'eines}}; {{key:Ctrl+F1}} passa per ella i {{cmd:TOOLBAR}} la defineix.

## Línia d'ordres

La línia d'ordres pot quedar acoblada sota el dibuix, com sempre, o flotar-hi a sobre, i pot ser tan prima com una sola línia.

- **Feu-la flotar.** Arrossegueu la nansa de l'extrem esquerre cap al dibuix, o trieu {{ui:Deixa flotant sobre el dibuix}} al seu menú {{ui:Opcions de la línia d'ordres}} (els tres punts de l'extrem dret). Torneu a arrossegar la nansa per moure-la; el seu lloc es manté quan canvia la mida de la finestra. Arrossegueu la seva vora dreta per fer-la més ampla o més estreta. Deixeu-la caure a la barra d'estat, o trieu {{ui:Acobla a la part inferior}}, per tornar-la a acoblar.
- **Feu-la més prima o més alta.** Arrossegueu la seva vora superior: cada pas és una línia d'historial. Fins a zero línies és una **línia d'ordres d'una sola línia**: només la indicació i el que escriviu, i un missatge nou es mostra a sobre durant un moment. Un doble clic a la vora superior passa d'una línia a l'alçada que teníeu.
- **L'historial.** {{key:F2}}, o el botó de rellotge de la línia d'ordres ({{ui:Historial d'ordres (F2)}}), obre tot l'historial per sobre de la línia (per sota quan la línia flota a prop de la part superior de la finestra). Escriure encara va a la línia d'ordres; {{key:PageUp}} i {{key:PageDown}} desplacen l'historial, i {{key:Esc}}, {{key:F2}} o un clic en un altre lloc el tanquen. Una tecla pròpia a F2 té prioritat sobre això.
- **Des del teclat.** La nansa és un botó: amb el focus sobre ella, les tecles de fletxa mouen una línia d'ordres flotant (amb {{key:Shift}}, en passos més grans); {{key:Up}} fa flotar una acoblada, i {{key:Down}} a la vora inferior l'acobla. La vora superior és un separador: {{key:Up}} i {{key:Down}} hi afegeixen o en treuen una línia, {{key:Home}} la deixa en una línia, {{key:End}} la fa la més alta. Els lectors de pantalla continuen sentint cada missatge, també a la línia d'ordres d'una sola línia.

{{ui:CadCraft}} › {{ui:Línia d'ordres}} té les mateixes opcions: {{ui:Acoblada a la part inferior}} o {{ui:Flotant}}, {{ui:Línies d'historial mostrades}} (de 0 a 12) i {{ui:Alçada estàndard}}. {{cmd:COMMANDLINE}} (`CMDLINE`) les defineix des de la línia d'ordres. El lloc i l'alçada es guarden per a CadCraft en aquest navegador juntament amb la resta de la disposició, de manera que un entorn de treball desat també les conté; {{ui:General}} › {{ui:Restaura la disposició}} torna a acoblar la línia d'ordres a la seva alçada estàndard. En un telèfon, la línia d'ordres es queda acoblada amb una línia d'historial; el botó d'historial també hi funciona.

Quan la finestra és baixa i la comprovació de la disposició ofereix una disposició més ajustada, el seu {{ui:Sí}} també converteix la línia d'ordres en una sola línia si el dibuix encara és baix després de les barres d'eines.

## Àrea superior

{{ui:CadCraft}} › {{ui:Àrea superior}}: **Estàndard** (la predeterminada) o **Compacta**. Compacta fa més petites les barres de sobre del dibuix en tots els estils de menú: desapareixen els noms dels grups i les paraules sota les icones (les descripcions emergents i els lectors de pantalla els continuen tenint) i els botons són més junts. Funciona amb [Files de la barra d'eines](topic:settings#toolbar-rows): Compacta i **1 fila** deixen més espai al dibuix. {{cmd:TOPAREA}} la defineix.

## Indicador de cantonada

Què hi ha a la cantonada del dibuix:

- **Automàtic** (la predeterminada): la icona d'eixos a la pestanya {{ui:Model}} i el cub de vista a la pestanya {{ui:3D}}.
- **Icona d'eixos**: el marcador X i Y a la part inferior esquerra de la pestanya {{ui:Model}}, i un petit marcador X, Y i Z a la pestanya {{ui:3D}}.
- **Cub de vista**: un cub a la part superior dreta de totes dues pestanyes. A la pestanya {{ui:Model}} mostra el dibuix des de dalt, i en fer clic en una altra cara, aresta o cantonada s'obre la pestanya {{ui:3D}} mirant des d'allà. A la pestanya 3D gira amb la vista: feu clic per mirar des d'un costat, arrossegueu per orbitar, i la casa torna a la vista isomètrica. Vegeu [Model en 3D](topic:3d-solids).
- **Cap**: no hi ha res a la cantonada.

Els fulls no en mostren cap dels dos.

## Longitud i àrea de la selecció

- **A la barra d'estat** (la predeterminada): amb objectes seleccionats, la barra d'estat mostra la longitud total i l'àrea total dels tancats. Vegeu [Totals d'una selecció](topic:properties-panel#totals-of-a-selection).
- **Amagat**: la barra d'estat no els mostra. Propietats els continua mostrant per a diversos objectes.

## Quadrícula, orto i referències

Això no és al diàleg: els botons {{ui:Quadrícula}}, {{ui:Orto}} i {{ui:Pas}} de la barra d'estat (o {{key:F7}}, {{key:F8}}, {{key:F3}}) i la llista de referències a objectes al seu costat es recorden quan els deixeu. Vegeu [Referència a punts dels objectes](topic:object-snaps).
