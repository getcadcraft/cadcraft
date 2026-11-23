---
title: Unidades, tamaños de papel y escalas
summary: Qué significan las unidades de dibujo en CadCraft, los tamaños de papel para hojas y trazados, cada escala estándar, y cómo se relacionan los tamaños de texto y de cota con la escala de trazado.
keywords: unidades, milímetros, pulgadas, pies, pies y pulgadas, arquitectónico, ingeniería, fraccionario, fracciones, lunits, formato de longitud, precisión, metros, tamaño de papel, a3, a1, arch d, ansi, tabloide, carta, escala, 1:100, 1/4 pulgada, escala arquitectónica, escala de ingeniería, insunits
from: 7dc9b62e
---

## Unidades de dibujo

Dibujás tamaño real, en unidades de dibujo. Peteĩ unidad ha'e mba'e: plano **Unidades** configuración:

1. Presiona {{key:Esc}} para no seleccionar nada, {{ui:Modelo}} pestaña-pe.
2. {{ui:Configuración actual}}-pe eiporavo {{ui:Unidades}}: {{ui:Sin unidades}}, {{ui:Milímetros}}, {{ui:Centímetros}}, {{ui:Metros}}, {{ui:Pulgadas}} térã {{ui:Pies}}.

Cotas longitud milímetros, centímetros, metros térã kilómetros-pe escribir ikatu, unidad plano ndaha'éi: eheka [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Unidades ojambiáramo tamaño ndojambiáiva. Escalas hoja térã trazado-pe ojeikuaa cómo ojehechaukáva ha ofrecidos cambian. DWG térã DXF-pe abierto plano archivo-pe ojeguarda unidades oguarda; {{ui:Plano}} sección panel izquierda-pe ohechauka.

{{ui:Sin unidades}} plano papel unidad ojejuhu: ISO papel-pe milímetros, EEUU papel-pe pulgadas.

## Pies y pulgadas, y fracciones

Longitud **escrita ha ehai** ojeporu configuración aparte, longitud formato. Geometría ojambia ndaha'éi, número ohechauka ha ehai mba'e ojeikuaa.

1. Presiona {{key:Esc}} para no seleccionar nada, {{ui:Modelo}} pestaña-pe.
2. {{ui:Configuración actual}}-pe eiporavo {{ui:Formato de longitud}}: {{ui:Decimal}} (`150.5`), {{ui:Arquitectónico}} (`12'-6 1/2"`), {{ui:Ingeniería}} (`12'-6.5"`), {{ui:Fraccionario}} (`150 1/2`) térã {{ui:Científico}} (`1.505E+02`).
3. {{ui:Precisión}} eiporavo: decimal lugar, térã fracción más michĩ (1/16 arquitectura-pe usual).

Térã {{cmd:UNITS}} (`UN`) ehai ha dos pregunta responde.

{{ui:Arquitectónico}} térã {{ui:Ingeniería}}-pe peteĩ unidad peteĩ pulgada, AutoCAD-icha: {{ui:Unidades}} {{ui:Pulgadas}}-pe avei omoĩ. Upéi longitud pies y pulgadas ehai ikatu, longitud pregunta-pe opavavépe ha {{ui:Propiedades}} casilla-pe:

| Ehai | Oñeimporta |
|---|---|
| `12'6"` térã `12'-6"` | 12 pie 6 pulgada (150) |
| `12'6-1/2"` | 12 pie 6½ pulgada. Fracción rehe guión oñemoĩ: {{key:Space}} comando línea-pe {{key:Enter}} ha'e. |
| `12'` | 12 pie |
| `6"` térã `6` | 6 pulgada: número pelado pulgada ha'e |
| `1/2`, `6-1/2` | fracciones formato opavavépe |

Punto mismo longitud: `@12'6",0` térã `@10'<90`. Ángulos grado-pe.

Formato historia-pe ohechauka ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: áreas pulgada cuadrada ha pie cuadrado), {{ui:Propiedades}}-pe, estado barra coordenadas-pe, **cotas pyahu-pe**. Hojas papel unidad (milímetros térã pulgadas) decimal-pe oguarda.

:::note
Longitud formato DWG ha DXF-pe oguarda, cota peteĩteĩ oguarda: plano abierto jey dejaste ojeguejy.
:::

## Tamaños de papel

Hojas ha modelo trazado ko tamaño-kuéra, orientación rehe:

| Papel | Tamaño | Unidad hoja-pe |
|---|---|---|
| ISO A4 | 297 × 210 mm | milímetros |
| ISO A3 | 420 × 297 mm | milímetros |
| ISO A2 | 594 × 420 mm | milímetros |
| ISO A1 | 841 × 594 mm | milímetros |
| ISO A0 | 1189 × 841 mm | milímetros |
| Carta | 11 × 8,5 pulg | pulgadas |
| Oficio | 14 × 8,5 pulg | pulgadas |
| Tabloide / ANSI B | 17 × 11 pulg | pulgadas |
| ANSI C | 22 × 17 pulg | pulgadas |
| ANSI D | 34 × 22 pulg | pulgadas |
| ARCH C | 24 × 18 pulg | pulgadas |
| ARCH D | 36 × 24 pulg | pulgadas |
| ARCH E | 48 × 36 pulg | pulgadas |

Hoja pyahu ISO A3 métrico ha sin unidades plano-pe; pulgada térã pie plano-pe Tabloide. Modelo trazado ISO A4 térã Carta, upéicha, última elección mantené. Archivo abierto hoja tamaño oguarda, "Personalizado" ohechauka ojeikuaaramo estos-pe.

## Escalas

Escala `1:n` peteĩ unidad papel-pe n mismo unidad modelo-pe ohechauka, 1:100 1 m edificio 10 mm papel-pe. CadCraft plano unidad ha papel unidad rehe calcula.

**Escalas métricas**, opavave plano-pe: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escalas arquitectónicas**, pulgada térã pie unidad-pe: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escalas de ingeniería**, pulgada térã pie unidad-pe: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Escalas propias.** Ehai `SCALELISTEDIT` (térã `SCALELIST`) nde escala pyahu, ejemplo 1:75 térã sitio escala 2 papel : 300 dibujo. `Agregar` nombre oúva, papel unidad ha dibujo unidad (nombre `1:75` ndoikóramo número propio; {{key:Enter}} oguahẽ). `Editar`, `Eliminar`, `Listar` ha `Restablecer` mismo lista-pe. `Restablecer` estándar lista oguejy. Propias escalas Propiedades ventana escala lista-pe ha {{ui:Trazar a PDF}} diálogo-pe estándar rire ohechauka, ventana escala nombre-ndive; plano archivo DWG ha DXF 2000-pe oguarda. Otro programa-pe abierto lista ohechauka; estándar mismo escalas duplicado ndaha'éi.

{{ui:Mostrar todo el modelo}} térã {{ui:Elija una ventana en el modelo…}} ndive ventana apuntado, CadCraft escala estándar más grande mbovymi ojejuhúva oñemoĩ. {{ui:Ajustar todo el modelo}} escala exacta oñemoĩ, razón simple oñeha'ã.

## Tamaños en papel y modelo

Texto y cota tamaño dibujá espacio unidad-pe.

| Papel-pe nde ojeikotevẽ | Hoja-pe dibujado | Modelo 1:50 (mm plano) | Modelo 1/4" = 1'-0" (pulgada plano) |
|---|---|---|---|
| texto 2,5 mm | 2,5 | 125 | — |
| texto 3/32" | 0,09375 | — | 4,5 |

Cotas, tamaño papel-pe mantené ha escala general ({{cmd:DIMSCALE}}) trazado escala-pe omoĩ: 50 para 1:50, 48 para 1/4" = 1'-0". Eheka [Configurar tamaños de cota](topic:dimension-settings).

## Anotar por escala

Modelo tamaño real-pe dibujá ha CadCraft suma ohecha.

1. Texto térã cota eiporavo papel-pe tamaño mantené. Propiedades-pe marcá {{ui:Anotativo}}. {{ui:Tamaño en papel}} ohechauka, ehemplo `2.5 mm at 1:50`.
2. {{cmd:ANNOSCALE}} ehai ha escala ohecha trazado-pe, ehemplo `1:100`.

Anotativo texto ha cota opavave tamaño oñemoĩ, papel mismo tamaño trazado escala pyahu-pe: 2,5 mm texto milímetro plano 1:50-pe 125 alto, 1:100-pe 250 alto. Párrafo ancho avei cambia; cota texto, flecha ha espacio juntos cambian (escala general). Peteĩ paso deshacer; anotativo ndaha'éi objetos ndojambiáiva.

Configuración DWG ha DXF-pe oguarda: ambue programa anotativo bandera leé, CadCraft escala objeto oikuaa oguarda.

Oficina papel altura Default Policies add-on-pe ojapo (Configuración › Global › Default Policies › Annotation sizes on paper), {{cmd:ANNOSCALE}} avei texto nuevo altura oficina escala-pe. Eheka [Default Policies](topic:default-policies).

### Peteĩ objeto varias escala-pe

Hoja-pe mismo plano 1:100 ha parte 1:50 ohechauka. Notas ha cotas dos escala ome'ẽ, ventana opavave papel tamaño-pe ohechauka:

1. Anotativo texto ha cotas eiporavo ha ehai `OBJECTSCALE`.
2. Ehai `Agregar` ha escala ehai, ehemplo `1:50`. (`Escala actual` plano anotación escala agrega; `Listar` objeto escala ohechauka; `Eliminar` peteĩ quita.)

Ventana escala lista-pe ohechauka objeto tamaño escala-pe: 2,5 mm texto 1:100 ventana-pe 250 alto, 1:50-pe 125 alto, pantalla y trazado-pe. Objeto lugar mantené; tamaño solo cambia. Lista-pe ndoikóiva escala ventana-pe, tamaño ojeikuaaiva oĩ, `ANNOALLVISIBLE` ehai `OFF` ojapo tenguetere: ahí ndohechaukái. {{cmd:ANNOSCALE}} escala pyahu lista objeto-kuéra ojambia, ambue mantené.

Listas DWG ha DXF-pe CadCraft dato propio oguarda. Ambue programa objeto anotativo oikuaa, peteĩ escala. ANNOALLVISIBLE conmutador archivo-pe ndoguardái.

## Línea grosor y tipo de línea

Capa térã objeto **grosor de línea** (0,05 a 2,11 mm) ha **tipo de línea** (guionado, oculto, centro, fantasma, punto…) oguereko ikatu. Derecha panel-pe omoĩ: nada seleccionado-pe, {{ui:Configuración actual}} rehe {{ui:Tipo de línea}} ha {{ui:Grosor de línea}} objeto nuevo ojeporu ({{ui:Por capa}} capa seguí); {{ui:Capa …}} rehe dos capa actual propios. Objeto seleccionado-pe mismo dos fila ha {{ui:Escala de tipo de línea}} objeto-kuéra ojambia. Comando: {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`), {{cmd:LTSCALE}} (`LTS`).

Tipo de línea pantalla ha trazado-pe ohechauka. Guión plano unidad-pe: métrico ISO tamaño (DASHED: 12,7 mm guión), pulgada plano pulgada (0,5"). Guión michĩ térã hu'ã ohechauka, plano {{ui:Escala de tipo de línea}} (LTSCALE) ojambia: opavave guión ha espacio multiplica; objeto propio escala ojeporúva. Fino ojehechaukáva ndaikatúi, línea sólida oĩ.

Grosor de línea trazado-pe impreso, mm papel-pe escala ndive. {{ui:Predeterminado}} grosor ha Trazar a PDF diálogo-pe pluma ancho (0,13 a 0,70 mm; inicio 0,25 mm). Grosor 0 más fino impreso. Pantalla-pe línea pixel peteĩ, {{ui:LWT}} barra-pe presiona ojevolve ({{cmd:LWDISPLAY}} ojapo): 0,25 mm arriba ancho ohechauka (0,5 mm = 2 pixel) modelo-pe, hoja-pe papel ancho verdadero. Elección navegador-pe oguarda.

## Oficina estándar

Oficina papel texto altura, capa, título bloque campo ha plantilla peteĩ registro-pe oguarda: oficina estándar. CadCraft orden-pe lee: plano registro propio (`OFFICESTANDARD` › `Importar`-pe oguarda archivo-pe), equipo estándar compartido, Default Policies. Anotativo texto ha cota papel altura anotación escala-pe estándar-gui. Estándar vacío nada ojambia. {{cmd:OFFICESTANDARD}} › `Capas` plano ndoguerekói oficina capa agrega.
