---
title: Capas de mapa baixo o debuxo
summary: Mostre mapas de rúas, fotos aéreas ou unha imaxe cun ficheiro de mundo baixo o espazo do modelo, colocadas segundo o sistema de coordenadas do debuxo.
keywords: mapa, capas de mapa, maplayers, ml, xeomapa, mapa base, aéreo, satélite, teselas, xyz, wms, wmts, servizo de mapas, ficheiro de mundo, sistema de coordenadas, epsg, state plane, utm, xeorreferenciar, plano de situación, xeolocalización, localización xeográfica, xeodatos, gardado, dwg, dxf
from: f103045f
---

## O que vai facer

Un plano de situación debuxado sobre unha foto aérea ou un mapa de rúas, cada un no lugar correcto.

## Indique a CadCraft onde está o debuxo

1. Defina as unidades do debuxo en {{ui:Properties}} › {{ui:Units}} (por exemplo, pés ou metros).
2. Escriba {{cmd:MAPLAYERS}} (ou `ML`) e prema {{key:Enter}}.
3. Baixo {{ui:Where the drawing is}}, escriba un nome ou un código EPSG en {{ui:Find a system}} (por exemplo `2277` ou `Texas Central`) e escóllao en {{ui:System}}.
4. Se o debuxo está feito nas coordenadas propias dese sistema, deixe a colocación en 0. Se non, dé un punto do debuxo ({{ui:Drawing X}}, {{ui:Drawing Y}}), onde está ese punto na cuadrícula do mapa ({{ui:Easting}}, {{ui:Northing}}), e canto está xirado o debuxo desde o leste ({{ui:Turned (°)}}).
5. Prema {{ui:Use this system}}.

## Engadir unha capa

1. Active {{ui:Map layers from the internet}} na parte superior do diálogo. Ata entón non se pide nada a ningún servidor; cando está activo, os servidores que engada ven a zona na pantalla e o seu enderezo de internet, nunca o seu debuxo.
2. En {{ui:Add a layer}}, escolla de onde vén:
   - **Teselas (XYZ)**: un enderezo de teselas con `{z}`, `{x}` e `{y}`, un nome e a atribución que pide o seu provedor.
   - **WMS**, **WMTS** ou **ArcGIS**: o enderezo do servizo, despois {{ui:Get layers}} (Obter capas) e escolla unha.
   - **Unha imaxe**: un PNG ou JPEG co seu ficheiro de mundo (e o seu `.prj` cando o hai).
3. A capa aparece baixo o debuxo. A súa atribución aparece na parte inferior dereita do debuxo.

Cada capa da lista pode ocultarse, facerse máis ou menos transparente, subirse ou baixarse, ou eliminarse.

Cada cambio no sistema ou nas capas é un paso de {{cmd:UNDO}}.

## Gardado co debuxo

O sistema de coordenadas e a lista de capas gárdanse no debuxo cando o garda como DWG ou DXF, e volven cando o abre de novo, en calquera ordenador. As imaxes de ficheiros non se gardan: engádaas de novo despois de abrir. O interruptor {{ui:Map layers from the internet}} non se garda no debuxo: pertence a este navegador, así que un debuxo que alguén lle envíe non pide nada a ningún servidor ata que o active vostede mesmo.

O que ven outros programas:

| Gardado como | A localización do debuxo | As capas de mapa |
|---|---|---|
| DWG 2010, 2013 ou 2018, DXF 2000 | Escrita do xeito estándar en que os programas len a localización xeográfica dun debuxo: o código EPSG do sistema, un punto do debuxo e onde está na cuadrícula do mapa, as unidades e o norte. | Só CadCraft |
| DWG 2000, 2004 ou 2007, DXF R12 | Só CadCraft (CadCraft indícao ao gardar) | Só CadCraft |

- **Comprobado:** o ODA File Converter lee a localización sen erros, e unha biblioteca DXF (ezdxf) lee o código EPSG e a colocación exactamente.
- **Aínda sen comprobar:** se outros programas de debuxo recoñecen o sistema polo seu código EPSG. Un programa que mantén a súa propia lista de sistemas con outros nomes pode mostrar o debuxo sen localización.
- Outros programas mostran un bloque chamado `CADCRAFT_GEO` na lista de bloques. É a copia propia de CadCraft do sistema e das capas; nunca se coloca no debuxo. Déixeo aí.

## Debuxos doutros programas

Cando un debuxo doutro programa ten unha localización xeográfica, CadCraft a lee:

- Se nomea un código EPSG, {{ui:Where the drawing is}} mostra ese sistema e as capas de mapa colócanse segundo el.
- Se CadCraft non coñece o sistema (o nome propio doutro programa, unha cuadrícula local ou un factor de escala), a localización non se usa, pero consérvase e vólvese gardar tal como estaba, para que o outro programa a siga atopando. Escolla un sistema en {{ui:Where the drawing is}} para substituíla.

:::note
As capas de mapa debúxanse só en pantalla: non se trazan. Use só servizos de mapas cuxas condicións de uso o permitan, e manteña visible a súa atribución.
:::
