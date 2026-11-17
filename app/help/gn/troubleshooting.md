---
title: Solución de problemas
summary: Mensajes que muestra CadCraft y problemas que puede encontrar, cada uno con su causa y su solución.
keywords: problema, error, no funciona, mensaje, no se puede abrir, comando desconocido, no pasa nada, trabado, teclas no funcionan, en blanco, faltante, arreglar
from: 8299b222
---

## Abrir archivos

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| "CadCraft abre planos DWG y DXF. "…" no es ninguno de los dos." | El archivo no es un `.dwg` ni un `.dxf`. | Abra el archivo del plano en sí. Se puede traer un PDF (Abrir pregunta: importar o adjuntar, vea [Subyacentes PDF](topic:pdf-underlay)); las imágenes se agregan con `IMAGEATTACH`. |
| "Este DXF binario termina en medio de un objeto: el archivo está cortado o dañado." | El DXF binario se corta antes de su final. | Escriba RECOVER para abrir lo que se puede leer, o pida el archivo otra vez. |
| "Este archivo no es un DXF legible (código de grupo incorrecto en la línea …)." | El DXF está dañado o no es realmente un DXF. | Pida el archivo otra vez, o un DWG. |
| "No se pudo leer este plano. Puede estar dañado, o guardado en una versión que el lector todavía no maneja (…)." | El lector de DWG no pudo leerlo. | Pida el DWG guardado en una versión anterior, o un DXF. |
| "Este plano es de AutoCAD R11 / R12 (DWG AC1009), más antiguo de lo que CadCraft lee …" | Los DWG de Release 12 y anteriores usan un formato que CadCraft no lee. | En el programa que lo hizo, guárdelo como DXF (cualquier versión) o como un DWG más nuevo, y ábralo. El Guardar como de CadCraft ofrece DXF R12 para los programas que quieran ese formato antiguo. |
| "No se pudo abrir …" seguido de un mensaje de red, en el primer DWG | No se pudo descargar el lector de DWG: usted está sin conexión y CadCraft no está guardado para uso sin conexión, o la conexión se cortó. | Vuelva a conectarse e intente otra vez, o abra un DXF. Haga clic en {{ui:Guardar para usar sin conexión}} y espere "Listo sin conexión" para que los DWG se abran sin conexión la próxima vez. Vea [Trabajar sin conexión](common:offline). |
| El botón sin conexión dice "No se pudo guardar" | Algunos archivos no se descargaron. | Revise la conexión y haga clic en el botón para intentar de nuevo. |
| El botón sin conexión dice "Uso sin conexión no disponible" | Las ventanas privadas y algunas computadoras administradas no pueden guardar una copia sin conexión. | Use una ventana normal, o siga en línea. |
| CadCraft no abre sin conexión | No se guardó para uso sin conexión en este navegador, o el navegador lo borró. | La próxima vez que esté en línea, haga clic en {{ui:Guardar para usar sin conexión}} y espere "Listo sin conexión". |
| El plano se abre pero faltan partes | Objetos que CadCraft todavía no puede dibujar, o capas apagadas o congeladas en el archivo. | Lea "Acerca de este archivo" en el panel izquierdo. Revise el panel {{ui:Capas}}. |
| El texto se ajusta en dos líneas | CadCraft dibuja el texto en una fuente tipo Helvetica, más ancha que algunas fuentes CAD. | Acorte el texto en {{ui:Propiedades}}, o acepte la línea extra. |
| Un círculo se ve como una elipse, o el texto espejado se lee en el sentido correcto | El objeto se dibujó en un plano inclinado, o visto desde abajo, en el programa que hizo el archivo. CadCraft lo muestra visto desde arriba, como lo muestra la vista en planta de ese programa; el texto se mantiene legible. | Nada que arreglar. Para verlo como lo muestra el otro programa, pida el plano aplanado, o con los objetos dibujados desde arriba. |
| Un bloque, círculo o cota está en un lugar distinto al del programa que hizo el archivo | Un caso de dibujo que CadCraft lee mal. | Cuéntenos en Discord, con el archivo si puede compartirlo. |

## La línea de comando

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| "Comando desconocido "…". Escriba HELP para ver la lista." | No hay comando ni alias con ese nombre. | Escriba `HELP`, o vea [Referencia de comandos](topic:commands). Algunos comandos conocidos [todavía no están hechos](topic:not-built-yet). |
| "No existe ese comando" junto a la línea de comando mientras escribe | Lo que escribió todavía no coincide con nada. | Siga escribiendo, o revise la ortografía. |
| "Se requiere un punto o una palabra de opción." | Lo que escribió no es un punto ni una opción. | Revise el formato: `x,y`, `@dx,dy`, `@d<a`, o un solo número. Vea [Ingreso de coordenadas y distancias](topic:coordinate-entry). |
| "Requiere un número positivo o dos puntos." | Una distancia era negativa o no era un número. | Escriba un número positivo, o haga clic en dos puntos. |
| "Requiere un ángulo en grados o dos puntos." | El ángulo no era un número. | Escriba los grados como un número simple. |
| "Requiere un número." | Se esperaba un número. | Escriba solo dígitos. |
| "Palabra de opción no válida." | Las letras no coinciden con una opción. | Escriba las letras mayúsculas que aparecen entre corchetes. |
| `*Cancelar*` | Presionó {{key:Esc}}, o {{key:Enter}} donde se pedía un punto. | Inicie el comando otra vez. |
| Lo que escribe no llega a la línea de comando | Un cuadro en un panel o en un diálogo tiene el cursor. | Presione {{key:Enter}} o {{key:Esc}}, o haga clic en el plano. |
| El comando usa objetos que usted no eligió | Se seleccionaron antes de iniciar el comando. | Presione {{key:Esc}} antes del comando. |
| Una línea fue a un lugar inesperado | `x,y` es absoluto. | Use `@dx,dy` para puntos relativos. |
| "Termine o cancele primero el comando actual (Esc)." | Presionó {{key:Mod+S}} mientras un comando estaba en curso. | Presione {{key:Esc}}, y luego guarde. |
| "No se pudo guardar como DWG (AutoCAD 2000): … Pruebe Guardar como, y luego DXF." | Algo del plano no se pudo escribir como DWG. | Presione {{key:Mod+Shift+S}}, elija {{ui:DXF R12}} y haga clic en {{ui:Guardar}}. |
| "No guardado." | Cerró el diálogo {{ui:Guardar una copia como}} con {{ui:Cancelar}} o {{key:Esc}}. | Presione {{key:Mod+Shift+S}} otra vez y haga clic en {{ui:Guardar}}. |

## Edición

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Un objeto no se selecciona | Su capa está bloqueada, apagada o congelada; o está en una hoja y es el modelo dentro de una ventana gráfica. | Desbloquee la capa, o vaya a la pestaña {{ui:Modelo}}. |
| "No se encontró nada ahí." | No hay objeto bajo el clic. | Acerque la vista y haga clic en la línea misma. |
| "Nada cruza ese objeto ahí." | {{cmd:TRIM}} no encontró ningún objeto que cruce el tramo que eligió. | Revise que la línea de corte realmente lo cruce. |
| "No se puede recortar ese objeto." | Recortar funciona en líneas, arcos, círculos y polilíneas. | Descomponga primero los bloques, o borre y vuelva a dibujar. |
| "No hay límite en esa dirección." | {{cmd:EXTEND}} no encontró nada a qué llegar. | Elija más cerca del extremo que debe crecer. |
| "No se puede desfasar ese objeto." | Desfasar funciona en líneas, arcos, círculos y polilíneas. | Descompóngalo primero, o dibuje una línea paralela. |
| "No se puede desfasar tanto." | El desfase daría la vuelta a la forma y la invertiría. | Use una distancia menor. |
| "El radio es demasiado grande." o "La distancia es demasiado grande." | El empalme o el chaflán pasaría del extremo de una línea. | Fije un radio menor con `R`, o distancias menores con `D`. |
| "Solo el primero o el último segmento de una polilínea abierta puede recortarse." | La esquina entraría en el medio de una polilínea. | Elija dos segmentos contiguos de la polilínea, o use `P` para cada esquina. |
| "Elija una segunda línea distinta." | La segunda elección era la misma línea, o no era una línea. | Elija otra línea. |
| "Solo se descomponen polilíneas, referencias de bloque y cotas." | La selección no tenía nada que descomponer. | Seleccione una polilínea, una referencia de bloque o una cota. |
| "Esa es la capa actual. Haga otra capa actual primero." | Intentó apagar la capa actual. | Haga clic en el nombre de otra capa, y luego apague esta. |
| "Ya existe una capa llamada …" | Los nombres de capa deben ser únicos. | Elija otro nombre. |
| "Nada para deshacer." | No queda nada que deshacer, o abrió o empezó un plano (eso borra el historial). | — |

## Cotas y bloques

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| El texto y las flechas de las cotas son diminutos o enormes | Los tamaños están en unidades de dibujo; la {{ui:Escala general}} no encaja con el plano. | Fije {{cmd:DIMSCALE}} a la escala de trazado; vea [Fijar tamaños de cota](topic:dimension-settings). |
| "Elija un punto dentro del ángulo que quiere medir." | La ubicación de la cota angular está sobre un lado. | Haga clic dentro del ángulo. |
| "Esas líneas son paralelas." | Las líneas paralelas no tienen ángulo entre ellas. | Elija dos líneas que se encuentren. |
| "Elija una cota lineal o alineada." | {{cmd:DIMCONTINUE}} o {{cmd:DIMBASELINE}} necesitan una desde la cual empezar. | Elija una cota lineal o alineada. |
| "Este plano todavía no tiene bloques: F inserta uno desde un archivo, L desde la biblioteca …" | El plano no tiene bloques propios. | Escriba `F` o `L`, o cree un bloque con {{cmd:BLOCK}}. |
| "No hay ningún bloque llamado "…"." | El nombre está mal. | El mensaje lista los bloques que hay. |
| "Un nombre de bloque no puede empezar con * ni usar …" seguido de una lista de caracteres | El nombre tiene un carácter que los bloques no pueden usar. | Use letras, dígitos, `-` y `_`. |
| "Un bloque no puede contenerse a sí mismo." | La selección tiene una referencia al bloque que se está creando. | Deje esa referencia afuera. |
| "No hay objetos seleccionados; no se creó nada." | Presionó {{key:Enter}} antes de seleccionar. | Ejecute {{cmd:BLOCK}} otra vez y seleccione los objetos. |

## Hojas y trazado

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| "Las ventanas gráficas van en una presentación. Abra primero una pestaña de presentación (o cree una con LAYOUT)." | {{cmd:MVIEW}} en la pestaña {{ui:Modelo}}. | Haga clic primero en una pestaña de hoja. |
| "Abra primero la presentación con la ventana gráfica." | {{cmd:VPVIEW}} en la pestaña {{ui:Modelo}}. | Haga clic primero en la pestaña de hoja. |
| La escala de una ventana gráfica parece diez veces mal | Las unidades del dibujo están mal. | Fije {{ui:Unidades}} en {{ui:Configuración actual}}. |
| "Todavía no hay nada para trazar." | El modelo está vacío. | Dibuje algo, o abra un plano. |
| "Elija la ventana a trazar." | Se eligió {{ui:Una ventana…}} y no se eligió ninguna ventana. | Haga clic en {{ui:Elegir}} y elija dos esquinas. |
| "… más grande que el papel: los bordes quedan cortados." | El área no entra en esa escala. | Elija una escala menor, un papel más grande, o {{ui:Ajustar al papel}}. |
| "El navegador bloqueó la pestaña nueva, así que se descargó el PDF en su lugar." | Las ventanas emergentes están bloqueadas para el sitio. | Abra el PDF descargado, o permita las ventanas emergentes para el sitio. |
| Los caracteres se imprimen como "?" | Las fuentes del PDF no tienen letra para ellos (ideogramas poco comunes, hindi y otras escrituras que necesitan formación compleja, …), o no se pudo obtener la fuente más grande (sin conexión). Las escrituras europeas, cirílica, griega, hebrea, árabe, persa, urdu, tailandesa, china, japonesa y coreana se imprimen tal como son. | Para árabe, tailandés, chino, japonés o coreano, vuelva a trazar con conexión. Las otras escrituras todavía no están hechas. |
| Las líneas de construcción se ven en el PDF | Su capa se traza. | Haga clic en el botón de impresión de la capa. |
| Todas las líneas tienen el mismo grosor | Su grosor es {{ui:Predeterminado}}, así que se imprimen con el ancho de pluma del diálogo. | Dé a las capas o a los objetos un {{ui:Grosor de línea}} en el panel derecho, o elija un {{ui:Grosor de línea}} en el diálogo. Para ver los grosores en pantalla, presione {{ui:LWT}} en la barra de estado. |

## Teclas y pantalla

| Síntoma | Causa | Solución |
|---|---|---|
| F3, F7 o F8 cambia el volumen o abre Mission Control | Teclas de función de Mac. | Mantenga **fn**, o use los botones de la barra de estado. Vea [Teclas, mouse y trackpads](common:keys). |
| F7 pregunta por caret browsing | Firefox usa F7 por su cuenta. | Elija No; use el botón {{ui:Cuadrícula}}. |
| {{key:Mod+N}} abrió una ventana del navegador | El navegador reserva esa tecla. | Haga clic en {{ui:Nueva}} o escriba `NEW`. |
| {{key:Mod+A}} seleccionó el texto de la línea de comando | La línea de comando tenía el cursor. | Haga clic primero en un objeto, o escriba `ALL` en un aviso de "Seleccionar objetos". |
| {{key:Delete}} no borra | La línea de comando tenía el cursor. | Escriba `E` y presione {{key:Enter}}. |
| El clic derecho no hace nada en un trackpad de Mac | El control-clic puede contar como un clic normal. | Haga clic con dos dedos. |
| Nada se desplaza en un trackpad | No hay botón central, y Space no desplaza. | Deslice con dos dedos: la vista 2D se desplaza (el pellizco y la rueda del mouse hacen zoom). O arrastre con el botón derecho presionado. |
| El primer {{key:Esc}} salió de pantalla completa | El navegador usa Esc para salir de pantalla completa. | Presione {{key:Esc}} otra vez para cancelar el comando. |
| {{key:F1}} no hace nada en Mac | F1 es una tecla de brillo. | Mantenga **fn**, o haga clic en {{ui:Ayuda}}. |
| Lo que escribe va al cuadro de búsqueda de la ayuda | El panel de ayuda tiene el cursor. | Haga clic en el plano. |
| El plano quedó en blanco | Se alejó mucho el zoom. | Haga clic en {{ui:Extensiones}}, o haga doble clic en la rueda. |
| "¿Salir del sitio?" al cerrar la pestaña | Hay cambios sin guardar. | Quédese, guarde con {{key:Mod+S}}, y luego cierre. |
