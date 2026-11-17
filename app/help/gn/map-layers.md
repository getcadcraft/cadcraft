---
title: Capas de mapa bajo el plano
summary: Mostrá mapas de calles, imágenes aéreas o una imagen con archivo de mundo bajo el espacio del modelo, ubicados según el sistema de coordenadas del plano.
keywords: mapa, capas de mapa, maplayers, ml, geomap, mapa base, aéreo, satélite, teselas, xyz, wms, wmts, servicio de mapas, archivo de mundo, sistema de coordenadas, epsg, plano estatal, utm, georreferenciar, plan de sitio, geolocalización, ubicación geográfica, geodatos, guardado, dwg, dxf
from: f103045f
---

## Lo que vas a hacer

Un plan de sitio dibujado sobre una imagen aérea o un mapa de calles, cada uno en su lugar.

## Indicarle a CadCraft dónde está el plano

1. Configurá las unidades del plano en {{ui:Properties}} › {{ui:Units}} (por ejemplo pies o metros).
2. Escribí {{cmd:MAPLAYERS}} (o `ML`) y presioná {{key:Enter}}.
3. Bajo {{ui:Where the drawing is}}, escribí un nombre o un código EPSG en {{ui:Find a system}} (por ejemplo `2277` o `Texas Central`) y elegilo en {{ui:System}}.
4. Si el plano está dibujado con las coordenadas propias de ese sistema, dejá la ubicación en 0. Si no, indicá un punto del plano ({{ui:Drawing X}}, {{ui:Drawing Y}}), dónde está ese punto en la cuadrícula del mapa ({{ui:Easting}}, {{ui:Northing}}), y cuánto está girado el plano desde el este ({{ui:Turned (°)}}).
5. Hacé click en {{ui:Use this system}}.

## Agregar una capa

1. Activá {{ui:Map layers from the internet}} arriba del diálogo. Hasta entonces no se le pide nada a ningún servidor; cuando está activado, los servidores que agregues ven el área en pantalla y tu dirección de internet, nunca tu plano.
2. En {{ui:Add a layer}}, elegí de dónde viene:
   - **Teselas (XYZ)**: una dirección de teselas con `{z}`, `{x}` e `{y}`, un nombre y la atribución que pide su proveedor.
   - **WMS**, **WMTS** o **ArcGIS**: la dirección del servicio, luego {{ui:Get layers}} y elegí una.
   - **Una imagen**: un PNG o JPEG con su archivo de mundo (y su `.prj` si lo tiene).
3. La capa aparece debajo del plano. Su atribución se muestra en la esquina inferior derecha del plano.

Cada capa de la lista puede ocultarse, hacerse más o menos transparente, subirse o bajarse, o quitarse.

Cada cambio en el sistema o en las capas es un paso de {{cmd:UNDO}}.

## Guardado con el plano

El sistema de coordenadas y la lista de capas se guardan en el plano cuando lo guardás como DWG o DXF, y vuelven cuando lo abrís de nuevo, en cualquier computadora. Las imágenes de archivos no se guardan: agregalas otra vez después de abrir. El interruptor {{ui:Map layers from the internet}} no se guarda en el plano: pertenece a este navegador, así que un plano que alguien te envía no le pide nada a ningún servidor hasta que lo actives vos mismo.

Lo que ven otros programas:

| Guardado como | La ubicación del plano | Las capas de mapa |
|---|---|---|
| DWG 2010, 2013 o 2018, DXF 2000 | Escrita de la forma estándar en que los programas leen la ubicación geográfica de un plano: el código EPSG del sistema, un punto del plano y dónde está en la cuadrícula del mapa, las unidades y el norte. | Solo CadCraft |
| DWG 2000, 2004 o 2007, DXF R12 | Solo CadCraft (CadCraft lo indica al guardar) | Solo CadCraft |

- **Verificado:** el ODA File Converter lee la ubicación sin errores, y una biblioteca DXF (ezdxf) lee el código EPSG y la ubicación exactamente.
- **Todavía no verificado:** si otros programas de dibujo reconocen el sistema a partir de su código EPSG. Un programa que guarde su propia lista de sistemas con otros nombres puede mostrar el plano sin ubicación.
- Otros programas muestran en la lista de bloques uno llamado `CADCRAFT_GEO`. Es la copia propia de CadCraft del sistema y de las capas; nunca se coloca en el plano. Dejalo ahí.

## Planos de otros programas

Cuando un plano de otro programa tiene una ubicación geográfica, CadCraft la lee:

- Si indica un código EPSG, {{ui:Where the drawing is}} muestra ese sistema y las capas de mapa se ubican según él.
- Si CadCraft no conoce el sistema (el nombre propio de otro programa, una cuadrícula local o un factor de escala), la ubicación no se usa, pero se conserva y se vuelve a guardar tal cual estaba, para que el otro programa la siga encontrando. Elegí un sistema en {{ui:Where the drawing is}} para reemplazarla.

:::note
Las capas de mapa se dibujan solo en pantalla: no se imprimen. Usá solo servicios de mapas cuyas condiciones lo permitan, y mantené visible su atribución.
:::
