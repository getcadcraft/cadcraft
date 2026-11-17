---
title: Dividir la pantalla
summary: Muestre el dibujo en dos, tres o cuatro paneles, cada uno con su propio zoom, coloque una hoja junto al modelo y abra varios dibujos lado a lado.
keywords: dividir, dividir pantalla, paneles, vports, ventanas gráficas, en mosaico, mosaico, lado a lado, apilados, dos dibujos, pestañas, pestañas de documentos, comparar, divisor, modelo y hoja, varios dibujos, dibujos abiertos
from: ee2f034b
---

## Lo que aprenderá

Cómo ver un dibujo en varios paneles a la vez, cada uno con su propio zoom, y cómo abrir varios dibujos y verlos lado a lado.

## Dividir un dibujo en paneles

1. Abra un dibujo, o dibuje algunas líneas y círculos.
2. Abra {{ui:Vista}} › {{ui:Más}} y elija {{ui:Dividir lado a lado}} (o escriba {{cmd:VPORTS}}, luego `2` y pulse {{key:Enter}}).

El área de dibujo se divide en dos paneles, ambos con la misma vista. El panel activo tiene un marco azul y recibe la cruz.

3. Haga clic en el otro panel. Este pasa a ser el activo. (Ese primer clic solo cambia de panel; haga clic de nuevo para designar o dibujar.)
4. Haga zoom con la rueda. Solo ese panel se acerca o aleja.
5. Arrastre la línea entre los paneles para ensancharlo. {{key:Home}} sobre un divisor enfocado lo devuelve al centro.

{{cmd:VPORTS}} también acepta `3` (dos paneles de un lado y uno grande del otro: `L` o `R`), `4`, y `SI` para volver a un solo panel. La vista del panel activo entonces ocupa toda el área. En una hoja, {{cmd:VPORTS}} agrega una ventana gráfica a la hoja (como en AutoCAD); escriba {{cmd:SPLIT}} allí, o use el menú Vista.

## Dibujar desde un panel hacia otro

1. Divida lado a lado y amplíe cada panel hasta una esquina distinta del dibujo.
2. Escriba `L` y pulse {{key:Enter}}, y haga clic en el primer punto en el panel izquierdo.
3. Haga clic una vez en el panel derecho para activarlo, y luego haga clic en el segundo punto allí.

La línea va de un lugar al otro. Un comando continúa al cambiar de panel, y la banda elástica se muestra en todos los paneles.

## El modelo junto a una hoja

1. Divida lado a lado.
2. Haga clic en el panel derecho y luego en la pestaña de una hoja bajo el dibujo.

El panel derecho muestra la hoja; el izquierdo sigue mostrando el modelo. Cada panel conserva su propio espacio, así que puede dibujar en el modelo y ver cómo sigue la ventana gráfica de la hoja.

## Varios dibujos en una ventana

1. Abra un dibujo. Luego abra otro (o pulse {{ui:Nueva}}).

Cada dibujo se abre en su propia pestaña sobre el área de dibujo. Haga clic en una pestaña para cambiar; la línea de comandos, los paneles y deshacer siguen al dibujo al que cambia. {{key:Mod+C}} en un dibujo y {{key:Mod+V}} en otro copian objetos entre ellos.

2. Haga clic en {{ui:Mosaico de los dibujos abiertos lado a lado}} (el icono de dividir al final de las pestañas), o en el icono de apilados junto a él.

Cada panel muestra ahora uno de los dibujos abiertos, hasta cuatro. Haga clic en un panel para trabajar en ese dibujo.

3. Haga clic en el {{ui:×}} de una pestaña para cerrar ese dibujo. Si tiene cambios sin guardar, CadCraft se lo pregunta primero.

:::tip
Si la ventana contiene solo un dibujo nuevo y sin cambios, al abrir otro dibujo se usa esa pestaña en lugar de agregar una.
:::

## Desplazar y acercar juntos

Para comparar dos revisiones, colóquelas en mosaico lado a lado y luego haga clic en {{ui:Vincular las vistas de los paneles}} (el icono de vínculo al final de las pestañas), o elíjalo en {{ui:Vista}} › {{ui:Más}}, o escriba {{cmd:LINKVIEWS}} y `ON`. Ahora un desplazamiento o zoom en un panel mueve todos los paneles que muestran el modelo (o todos los que muestran una hoja) al mismo lugar, así que los dos dibujos quedan alineados. {{cmd:LINKVIEWS}} `OFF` permite que cada panel se mueva por su cuenta de nuevo.

## Errores comunes

- **Mi clic no hizo nada.** Solo activó ese panel. Haga clic de nuevo para designar o dibujar.
- **La rueda hizo zoom en el panel equivocado.** La rueda acerca o aleja el panel bajo el puntero y lo activa.
- **Los paneles volvieron a ser uno.** Al abrir un dibujo se muestra como se guardó; un dibujo guardado sin paneles se abre en uno.
- **Al salir de la página aparece una advertencia de cambios sin guardar que no puedo ver.** Otra pestaña contiene un dibujo con cambios. Cambie a ella y guárdela, o salga sin guardar.
