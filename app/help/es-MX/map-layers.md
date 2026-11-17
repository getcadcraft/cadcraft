---
title: Capas de mapa bajo el dibujo
summary: Muestre mapas de calles, imágenes aéreas o una imagen con world file bajo el espacio modelo, ubicadas según el sistema de coordenadas del dibujo.
keywords: mapa, capas de mapa, maplayers, ml, geomapa, mapa base, aéreo, satélite, mosaicos, xyz, wms, wmts, servicio de mapas, world file, sistema de coordenadas, epsg, state plane, utm, georreferencia, plano de sitio, geolocalización, ubicación geográfica, geodatos, guardado, dwg, dxf
from: f103045f
---

## Qué va a crear

Un plano de sitio dibujado sobre una imagen aérea o un mapa de calles, cada uno en su lugar.

## Indique a CadCraft dónde está el dibujo

1. Defina las unidades del dibujo en {{ui:Propiedades}} › {{ui:Unidades}} (por ejemplo pies o metros).
2. Escriba {{cmd:MAPLAYERS}} (o `ML`) y presione {{key:Enter}}.
3. Bajo {{ui:Dónde está el dibujo}}, escriba un nombre o un código EPSG en {{ui:Buscar un sistema}} (por ejemplo `2277` o `Texas Central`) y elíjalo en {{ui:Sistema}}.
4. Si el dibujo está hecho con las coordenadas propias de ese sistema, deje la colocación en 0. Si no, indique un punto del dibujo ({{ui:X del dibujo}}, {{ui:Y del dibujo}}), dónde está ese punto en la cuadrícula del mapa ({{ui:Este}}, {{ui:Norte}}) y cuánto está girado el dibujo respecto al este ({{ui:Girado (°)}}).
5. Haga clic en {{ui:Usar este sistema}}.

## Agregar una capa

1. Active {{ui:Capas de mapa de internet}} en la parte superior del diálogo. Hasta entonces no se pregunta nada a ningún servidor; cuando está activado, los servidores que agregue ven el área en pantalla y su dirección de internet, nunca su dibujo.
2. En {{ui:Agregar una capa}}, elija de dónde viene:
   - **Mosaicos (XYZ)**: una dirección de mosaicos con `{z}`, `{x}` e `{y}`, un nombre y la atribución que pida su proveedor.
   - **WMS**, **WMTS** o **ArcGIS**: la dirección del servicio, luego {{ui:Obtener capas}} y elija una.
   - **Una imagen**: un PNG o JPEG con su world file (y su `.prj` cuando lo tenga).
3. La capa se muestra bajo el dibujo. Su atribución aparece en la esquina inferior derecha del dibujo.

Cada capa de la lista puede ocultarse, hacerse más o menos transparente, subirse o bajarse, o quitarse.

Cada cambio en el sistema o en las capas es un paso de {{cmd:UNDO}}.

## Se guarda con el dibujo

El sistema de coordenadas y la lista de capas se guardan en el dibujo al guardarlo como DWG o DXF, y regresan al abrirlo de nuevo, en cualquier computadora. Las imágenes de archivos no se guardan: agréguelas otra vez después de abrir. El interruptor {{ui:Capas de mapa de internet}} no se guarda en el dibujo: pertenece a este navegador, así que un dibujo que alguien le envía no pide nada a ningún servidor hasta que usted lo active.

Qué ven otros programas:

| Guardado como | La ubicación del dibujo | Las capas de mapa |
|---|---|---|
| DWG 2010, 2013 o 2018, DXF 2000 | Escrita de la forma estándar en que los programas leen la ubicación geográfica de un dibujo: el código EPSG del sistema, un punto del dibujo y dónde está en la cuadrícula del mapa, las unidades y el norte. | Solo CadCraft |
| DWG 2000, 2004 o 2007, DXF R12 | Solo CadCraft (CadCraft lo indica al guardar) | Solo CadCraft |

- **Verificado:** el ODA File Converter lee la ubicación sin errores, y una biblioteca DXF (ezdxf) lee el código EPSG y la colocación exactamente.
- **Aún no verificado:** si otros programas de dibujo reconocen el sistema por su código EPSG. Un programa que mantiene su propia lista de sistemas con otros nombres puede mostrar el dibujo sin ubicación.
- Otros programas muestran un bloque llamado `CADCRAFT_GEO` en la lista de bloques. Es la copia propia de CadCraft del sistema y de las capas; nunca se coloca en el dibujo. Déjelo ahí.

## Dibujos de otros programas

Cuando un dibujo de otro programa tiene una ubicación geográfica, CadCraft la lee:

- Si nombra un código EPSG, {{ui:Dónde está el dibujo}} muestra ese sistema y las capas de mapa se colocan con él.
- Si CadCraft no conoce el sistema (el nombre propio de otro programa, una cuadrícula local o un factor de escala), la ubicación no se usa, pero se conserva y se guarda de nuevo tal como estaba, para que el otro programa siga encontrándola. Elija un sistema en {{ui:Dónde está el dibujo}} para reemplazarla.

:::note
Las capas de mapa solo se dibujan en pantalla: no se trazan. Use solo servicios de mapas cuyos términos lo permitan, y mantenga visible su atribución.
:::
