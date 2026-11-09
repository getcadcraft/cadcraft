---
title: HVAC: presión en toda la red de ductos
summary: DUCTNET sigue los ductos dibujados desde el ventilador, calcula la presión perdida hasta cada extremo libre, la ruta crítica, la compuerta que necesita cada otro extremo y la presión del ventilador.
keywords: red, presión, ruta crítica, presión del ventilador, compuerta, balanceo, pérdida en accesorios, DUCTNET, DNET, presión estática, sistema
from: b6f568fe
---

{{cmd:DUCTSIZE}} dimensiona un solo tramo. {{cmd:DUCTNET}} (`DNET`) revisa todo el sistema dibujado.

1. Asigne a cada sección su caudal ({{ui:Aire (caudal)}} del ducto, en cfm o L/s). El extremo libre de un tramo toma el caudal de la sección en ese extremo.
2. Escriba {{cmd:DUCTNET}} y haga clic en el extremo del tramo donde se conecta el ventilador o la manejadora de aire. Los extremos que tocan otro tramo se unen; las derivaciones se detectan donde un tramo termina sobre otro.
3. Muestra cada extremo libre con su caudal y la presión perdida en el trayecto desde el ventilador, la **ruta crítica** (el extremo que pierde más), la **compuerta** que necesita cada otro extremo para equilibrarse, y la **presión del ventilador**: la ruta crítica más la presión de serpentines y filtros que escriba con la opción {{ui:Equipment}} (según los datos de los fabricantes).

La fricción usa la misma fórmula de Colebrook que el dimensionamiento. Los accesorios (codos, el cambio donde varía el tamaño, las tomas de derivación) usan una lista corta de coeficientes predeterminados redondeados: están marcados como valores predeterminados, no son una base de datos de accesorios, y se ignora el efecto de chimenea. Verifique el resultado con su ingeniero antes de confiar en él.

Las secciones demasiado pequeñas para su caudal, demasiado rápidas o demasiado planas se enumeran por tramo. Los circuitos se ignoran (el cálculo sigue un árbol) y se indica. {{ui:Method}} cambia la verificación de tamaño entre fricción igual y un límite de velocidad. {{ui:Export}} › Presión de la red de ductos escribe cada sección en CSV.
