---
title: Solución de problemas
summary: Mensajes que muestra CadCraft y problemas que puede encontrar, cada uno con su causa y su solución.
keywords: problema, error, no funciona, mensaje, no se puede abrir, comando desconocido, no pasa nada, bloqueado, teclas no funcionan, en blanco, faltante, solucionar
from: 8299b222
---

## Abrir archivos

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| «CadCraft abre dibujos DWG y DXF. "…" no es ninguno de ellos.» | El archivo no es un `.dwg` ni un `.dxf`. | Abra el archivo de dibujo en sí. Un PDF se puede traer (Abrir pregunta: importar o adjuntar; vea [Subyacentes PDF](topic:pdf-underlay)); las imágenes se insertan con `IMAGEATTACH`. |
| «Este DXF binario termina en medio de un objeto: el archivo está cortado o dañado.» | El DXF binario se interrumpe antes de su final. | Escriba RECOVER para abrir lo que se pueda leer, o pida el archivo de nuevo. |
| «Este archivo no es un DXF legible (código de grupo incorrecto en la línea …).» | El DXF está dañado o no es realmente un DXF. | Pida el archivo de nuevo, o un DWG. |
| «No se pudo leer este dibujo. Puede estar dañado o guardado en una versión que el lector todavía no maneja (…).» | El lector de DWG no pudo leerlo. | Pida el DWG guardado en una versión anterior, o un DXF. |
| «Este dibujo es de AutoCAD R11 / R12 (DWG AC1009), más antiguo de lo que CadCraft lee …» | Los archivos DWG de la versión 12 y anteriores usan un formato que CadCraft no lee. | En el programa que lo creó, guárdelo como DXF (cualquier versión) o como un DWG más reciente, y ábralo. Guardar como de CadCraft ofrece DXF R12 para programas que necesitan ese formato antiguo. |
| «No se pudo abrir …» seguido de un mensaje de red, en el primer DWG | No se pudo descargar el lector de DWG: no tiene conexión y CadCraft no está guardado para uso sin conexión, o se cortó la conexión. | Conéctese e inténtelo de nuevo, o abra un DXF. Pulse {{ui:Save for offline}} y espere a que aparezca «Listo sin conexión» para que los archivos DWG se abran sin conexión la próxima vez. Vea [Trabajar sin conexión](common:offline). |
| El botón de uso sin conexión dice «No se pudo guardar» | Algunos archivos no se descargaron. | Revise la conexión y pulse el botón para volver a intentarlo. |
| El botón de uso sin conexión dice «Uso sin conexión no disponible» | Las ventanas privadas y algunos equipos administrados no pueden guardar una copia sin conexión. | Use una ventana normal, o siga en línea. |
| CadCraft no abre sin conexión | No se guardó para uso sin conexión en este navegador, o el navegador lo borró. | La próxima vez que tenga conexión, pulse {{ui:Save for offline}} y espere a que aparezca «Listo sin conexión». |
| El dibujo se abre, pero faltan partes | Objetos que CadCraft todavía no puede dibujar, o capas desactivadas o inutilizadas en el archivo. | Lea «Acerca de este archivo» en el panel izquierdo. Revise el panel {{ui:Layers}}. |
| El texto se parte en dos líneas | CadCraft dibuja el texto con una fuente de estilo Helvetica, más ancha que algunas fuentes de CAD. | Acorte el texto en Propiedades, o acepte la línea adicional. |
| Un círculo se ve como una elipse, o el texto reflejado se lee en el sentido correcto | El objeto se dibujó en un plano inclinado, o se vio desde abajo, en el programa que creó el archivo. CadCraft lo muestra como se ve desde arriba, igual que la vista en planta de ese programa; el texto se conserva legible. | No hay nada que corregir. Para verlo como lo muestra el otro programa, pida el dibujo aplanado o con los objetos dibujados desde arriba. |
| Un bloque, círculo o cota está en un lugar distinto que en el programa que creó el archivo | Un caso de dibujo que CadCraft lee de forma incorrecta. | Repórtelo en Discord, con el archivo si puede compartirlo. |

## La línea de comandos

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| «Comando desconocido "…". Escriba HELP para ver la lista.» | No hay ningún comando ni alias con ese nombre. | Escriba `HELP`, o consulte la [Referencia de comandos](topic:commands). Algunos comandos conocidos [todavía no están disponibles](topic:not-built-yet). |
| «No existe tal comando» junto a la línea de comandos mientras escribe | Lo que escribe no coincide con nada todavía. | Siga escribiendo, o revise la ortografía. |
| «Se requiere un punto o una opción.» | Lo que escribió no es un punto ni una opción. | Revise el formato: `x,y`, `@dx,dy`, `@d<a` o un solo número. Vea [Introducción de coordenadas y distancias](topic:coordinate-entry). |
| «Se requiere un número positivo o dos puntos.» | Una distancia era negativa o no era un número. | Escriba un número positivo, o pulse dos puntos. |
| «Se requiere un ángulo en grados o dos puntos.» | El ángulo no era un número. | Escriba los grados como un número simple. |
| «Se requiere un número.» | Se esperaba un número. | Escriba solo dígitos. |
| «Palabra clave de opción no válida.» | Las letras no coinciden con ninguna opción. | Escriba las letras en mayúsculas que aparecen entre corchetes. |
| `*Cancelar*` | Pulsó {{key:Esc}}, o {{key:Enter}} donde se requería un punto. | Inicie el comando de nuevo. |
| Lo que escribe no llega a la línea de comandos | Un cuadro de un panel o de un diálogo tiene el cursor. | Pulse {{key:Enter}} o {{key:Esc}}, o pulse en el dibujo. |
| El comando usa objetos que no designó | Se seleccionaron antes de iniciar el comando. | Pulse {{key:Esc}} antes del comando. |
| Una línea fue a un lugar inesperado | `x,y` es absoluto. | Use `@dx,dy` para puntos relativos. |
| «Termine o cancele primero el comando actual (Esc).» | Pulsó {{key:Mod+S}} mientras un comando estaba en curso. | Pulse {{key:Esc}} y luego guarde. |
| «No se pudo guardar como DWG (AutoCAD 2000): … Pruebe Guardar como y luego DXF.» | Algo del dibujo no se pudo escribir como DWG. | Pulse {{key:Mod+Shift+S}}, elija {{ui:DXF R12}} y pulse {{ui:Save}}. |
| «No guardado.» | Cerró el diálogo {{ui:Save a copy as}} con {{ui:Cancel}} o {{key:Esc}}. | Pulse {{key:Mod+Shift+S}} otra vez y pulse {{ui:Save}}. |

## Edición

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Un objeto no se puede seleccionar | Su capa está bloqueada, desactivada o inutilizada; o está en una hoja y es el modelo dentro de una ventana gráfica. | Desbloquee la capa, o vaya a la pestaña {{ui:Model}}. |
| «No se encontró nada allí.» | No hay ningún objeto bajo el clic. | Acerque la vista y pulse sobre la línea misma. |
| «Ningún objeto cruza allí.» | {{cmd:TRIM}} no encontró ningún objeto que cruce el trozo que designó. | Compruebe que la línea de corte realmente lo cruza. |
| «No se puede recortar ese objeto.» | Recortar funciona con líneas, arcos, círculos y polilíneas. | Descomponga primero los bloques, o borre y vuelva a dibujar. |
| «No hay límite en esa dirección.» | {{cmd:EXTEND}} no encontró nada a lo que llegar. | Designe más cerca del extremo que debe crecer. |
| «No se puede desfasar ese objeto.» | Desfasar funciona con líneas, arcos, círculos y polilíneas. | Descompóngalo primero, o dibuje una línea paralela. |
| «No se puede desfasar tan lejos.» | El desfase daría la vuelta a la forma hacia dentro. | Use una distancia menor. |
| «El radio es demasiado grande.» o «La distancia es demasiado grande.» | El empalme o chaflán superaría el extremo de una línea. | Defina un radio menor con `R`, o distancias menores con `D`. |
| «Solo se puede recortar el primer o el último segmento de una polilínea abierta.» | La esquina cortaría hacia el centro de una polilínea. | Designe dos segmentos contiguos de la polilínea, o use `P` para cada esquina. |
| «Designe una segunda línea distinta.» | La segunda designación era la misma línea, o no era una línea. | Designe otra línea. |
| «Solo se descomponen polilíneas, referencias a bloques y cotas.» | La selección no tenía nada que descomponer. | Seleccione una polilínea, una referencia a bloque o una cota. |
| «Esa es la capa actual. Haga primero otra capa actual.» | Intentó desactivar la capa actual. | Pulse el nombre de otra capa y luego desactive esta. |
| «Ya existe una capa llamada …» | Los nombres de capa deben ser únicos. | Elija otro nombre. |
| «No hay nada que deshacer.» | No queda nada que deshacer, o abrió o inició un dibujo (eso borra el historial). | — |

## Cotas y bloques

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| El texto y las flechas de las cotas son diminutos o enormes | Los tamaños están en unidades de dibujo; la escala global no encaja con el dibujo. | Defina {{cmd:DIMSCALE}} con la escala de trazado; vea [Definir tamaños de cota](topic:dimension-settings). |
| «Designe un punto dentro del ángulo que quiere medir.» | La ubicación de la cota angular está sobre un lado. | Pulse dentro del ángulo. |
| «Esas líneas son paralelas.» | Las líneas paralelas no tienen ángulo entre ellas. | Designe dos líneas que se encuentren. |
| «Designe una cota lineal o alineada.» | {{cmd:DIMCONTINUE}} o {{cmd:DIMBASELINE}} necesitan una desde la que empezar. | Designe una cota lineal o alineada. |
| «Este dibujo todavía no tiene bloques: F inserta uno desde un archivo, L desde la biblioteca …» | El dibujo no tiene bloques propios. | Escriba `F` o `L`, o cree un bloque con {{cmd:BLOCK}}. |
| «No hay ningún bloque llamado "…".» | El nombre está mal escrito. | El mensaje enumera los bloques que existen. |
| «Un nombre de bloque no puede empezar con * ni usar …» seguido de una lista de caracteres | El nombre tiene un carácter que los bloques no pueden usar. | Use letras, dígitos, `-` y `_`. |
| «Un bloque no puede contenerse a sí mismo.» | La selección incluye una referencia al bloque que se está creando. | Quite esa referencia. |
| «No hay objetos seleccionados; no se creó nada.» | Pulsó {{key:Enter}} antes de seleccionar. | Ejecute {{cmd:BLOCK}} de nuevo y seleccione los objetos. |

## Hojas y trazado

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| «Las ventanas gráficas van en una presentación. Abra primero una pestaña de presentación (o cree una con LAYOUT).» | {{cmd:MVIEW}} en la pestaña {{ui:Model}}. | Pulse primero una pestaña de hoja. |
| «Abra primero la presentación con la ventana gráfica.» | {{cmd:VPVIEW}} en la pestaña {{ui:Model}}. | Pulse primero la pestaña de hoja. |
| La escala de una ventana gráfica parece diez veces mayor o menor | Las unidades del dibujo son incorrectas. | Defina {{ui:Units}} en {{ui:Current settings}}. |
| «Todavía no hay nada que trazar.» | El modelo está vacío. | Dibuje algo, o abra un dibujo. |
| «Designe la ventana que se va a trazar.» | Se eligió {{ui:A window…}} y no se designó ninguna ventana. | Pulse {{ui:Pick}} y designe dos esquinas. |
| «… es más grande que el papel: los bordes se cortan.» | El área no cabe a esa escala. | Elija una escala menor, un papel más grande o {{ui:Fit to paper}}. |
| «El navegador bloqueó la pestaña nueva, así que se descargó el PDF.» | Las ventanas emergentes están bloqueadas para el sitio. | Abra el PDF descargado, o permita las ventanas emergentes para el sitio. |
| Los caracteres se imprimen como «?» | Las fuentes del PDF no tienen letra para ellos (ideogramas poco comunes, hindi y otras escrituras que requieren formación compleja, …), o no se pudo descargar la fuente más grande (sin conexión). Las escrituras europeas, cirílica, griega, hebrea, árabe, persa, urdu, tailandesa, china, japonesa y coreana se imprimen tal cual. | Para escritura árabe, tailandesa, china, japonesa o coreana, vuelva a trazar con conexión. Las demás escrituras todavía no están disponibles. |
| Las líneas de construcción aparecen en el PDF | Su capa se traza. | Pulse el botón de impresora de la capa. |
| Todas las líneas tienen el mismo grosor | Su grosor de línea es {{ui:Default}}, así que se imprimen con el ancho de pluma del diálogo. | Asigne un {{ui:Lineweight}} a las capas o a los objetos en el panel derecho, o elija un {{ui:Line weight}} en el diálogo. Para ver los grosores en pantalla, pulse {{ui:LWT}} en la barra de estado. |

## Teclas y pantalla

| Síntoma | Causa | Solución |
|---|---|---|
| F3, F7 o F8 cambia el volumen o abre Control de Misión | Teclas de función de Mac. | Mantenga pulsada **fn**, o use los botones de la barra de estado. Vea [Teclas, ratones y trackpads](common:keys). |
| F7 pregunta sobre la navegación con cursor | Uso propio de F7 en Firefox. | Elija No; use el botón {{ui:Grid}}. |
| {{key:Mod+N}} abrió una ventana del navegador | El navegador reserva esa tecla. | Pulse {{ui:New}} o escriba `NEW`. |
| {{key:Mod+A}} seleccionó el texto de la línea de comandos | La línea de comandos tenía el cursor. | Pulse primero un objeto, o escriba `ALL` en una solicitud `Designe objetos`. |
| {{key:Delete}} no borra | La línea de comandos tenía el cursor. | Escriba `E` y pulse {{key:Enter}}. |
| El clic derecho no hace nada en un trackpad de Mac | Control-clic puede contar como un clic normal. | Haga clic con dos dedos. |
| Nada se desplaza con el trackpad | No hay botón central, y Espacio no desplaza. | Deslice con dos dedos: la vista 2D se desplaza (el pellizco y la rueda del ratón hacen zoom). O arrastre con el botón derecho presionado. |
| El primer {{key:Esc}} salió de la pantalla completa | El navegador usa Esc para salir de la pantalla completa. | Pulse {{key:Esc}} otra vez para cancelar el comando. |
| {{key:F1}} no hace nada en Mac | F1 es una tecla de brillo. | Mantenga pulsada **fn**, o pulse {{ui:Help}}. |
| Lo que escribe va al cuadro de búsqueda de la ayuda | El panel de ayuda tiene el cursor. | Pulse en el dibujo. |
| El dibujo quedó en blanco | Hizo zoom muy lejos. | Pulse {{ui:Extents}}, o haga doble clic en la rueda. |
| «¿Salir del sitio?» al cerrar la pestaña | Hay cambios sin guardar. | Quédese, guarde con {{key:Mod+S}} y luego cierre. |
