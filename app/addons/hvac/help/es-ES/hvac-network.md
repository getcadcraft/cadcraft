---
title: Climatización: presión en toda la red de conductos
summary: DUCTNET sigue los conductos dibujados desde el ventilador, calcula la presión perdida hasta cada extremo libre, la ruta crítica, la compuerta que necesita cada otro extremo y la presión del ventilador.
keywords: red, presión, ruta crítica, presión del ventilador, compuerta, equilibrado, pérdida en accesorios, DUCTNET, DNET, presión estática, sistema
from: b6f568fe
---

{{cmd:DUCTSIZE}} dimensiona un solo tramo. {{cmd:DUCTNET}} (`DNET`) analiza todo el sistema dibujado.

1. Asigne a cada sección su caudal ({{ui:Caudal}} del conducto, en cfm o L/s). El extremo libre de un tramo toma el caudal de la sección en ese extremo.
2. Escriba {{cmd:DUCTNET}} y haga clic en el extremo del tramo donde se conecta el ventilador o la unidad de tratamiento de aire. Los extremos que tocan otro tramo quedan unidos; las derivaciones se encuentran donde un tramo termina sobre otro.
3. Muestra cada extremo libre con su caudal y la presión perdida desde el ventilador, la **ruta crítica** (el extremo que más pierde), la **compuerta** que necesita cada otro extremo para equilibrarse, y la **presión del ventilador**: la ruta crítica más la presión de las baterías y filtros que escriba con la opción {{ui:Equipos}} (de los datos de los fabricantes).

La pérdida por rozamiento procede de la misma fórmula de Colebrook que el dimensionado. Los accesorios (codos, el cambio de tamaño, las tomas de derivación) usan una lista corta de coeficientes por defecto redondeados: están etiquetados como valores por defecto, no como una base de datos de accesorios, y se ignora el efecto chimenea. Compruebe el resultado con su ingeniero antes de fiarse de él.

Las secciones demasiado pequeñas para su caudal, demasiado rápidas o demasiado planas se listan por tramo. Los bucles se ignoran (el cálculo sigue una estructura en árbol) y se indica. {{ui:Método}} cambia la comprobación del tamaño entre pérdida de carga constante y un límite de velocidad. {{ui:Exportar}} › Presión de la red de conductos escribe cada sección en CSV.
