---
title: Organizar un plano con capas
summary: Creá capas para muros, puertas y notas, ajustá colores, hacé una capa actual y apagá, congelá, bloqueá o excluí capas de la impresión.
keywords: capa, capas, la, capa actual, congelar, descongelar, bloquear, apagar, encender, trazar, no trazar, color, colour, propiedades de capa, layiso, layuniso, aislar, layoff, layfrz, laymcur, layon, laythw, renombrar, laymrg, fusionar, laydel, eliminar capa
from: ba9f0617
---

## Mba'épa rejapóta

Mbohapy capa, Muros, Puertas y Notas, peteĩteĩ color, objetos peteĩteĩ-pe dibujado ha ambue capa-pe ojemboyke.

## Panel de capas

Capas oĩ panel izquierda-pe, {{ui:Capas}} rehe. Peteĩteĩ fila ohechauka, izquierda derecha-pe:

- peteĩ punto: lleno **capa actual**, objetos pyahu hague;
- color cuadrito;
- capa nombre;
- cuatro botón: encender/apagar (ojo), congelar (copo), bloquear (candado) y trazar (impresora).

Opavave plano-pe oĩ capa `0`. `LA` ehai ha omoĩ {{key:Enter}}, panel-pe ojepyrũ.

## Capas ojapo

1. Ejecutá {{ui:Nueva capa}} lista arriba. Nombre cuadro ojepyrũ.
2. Ehai `Walls` ha omoĩ {{key:Enter}} (térã ejecutá {{ui:Agregar}}).

Estado línea: "Capa Walls agregada y hecha actual." Capa nueva color 7 (negro tema claro-pe, blanco oscuro-pe).

3. Ejecutá de nuevo {{ui:Nueva capa}}, ehai `Doors` ha omoĩ {{key:Enter}}.
4. Ejecutá de nuevo {{ui:Nueva capa}}, ehai `Notes` ha omoĩ {{key:Enter}}.

Notes ojeikuaa actual.

## Peteĩteĩ capa color

1. Eclic color cuadrito Walls fila-pe. Sistema color selector ojepyrũ.
2. Eiporavo color ha confirmá.

Cuadrito ha Walls-pe objetos {{ui:Por capa}} color ojambia.

:::note
Color ojeporu 255 estándar CAD color-kuéra peteĩ, número ojeguarda. Ambue color CadCraft-pe tal cual oñeguarda, DWG térã DXF-pe color estándar ojoguáva ojeguarda.
:::

## Capa-pe dibujá

1. Eclic **Walls** nombre lista-pe. Punto lleno ojeikuaa ha estado línea "Capa actual: Walls".
2. Dibujá rectángulo (`REC`). Walls-pe oike.
3. Eclic **Doors**, ha dibujá arco (`A`). Doors-pe oike.

Ikatu avei eiporavo capa actual {{ui:Configuración actual}} derecha-pe ({{ui:Capa}} rehe), objeto ndaipóri.

## Objetos capa ambue-pe omoĩ

1. Eiporavo objetos.
2. Derecha panel-pe, {{ui:Capa}}-pe eiporavo capa pyahu.

Capa pyahu-pe oike, ha color capa ndive oje'ẽ si color {{ui:Por capa}} ha'e.

## Apagar, congelar, bloquear y trazar

| Botón | Mba'e ojapo |
|---|---|
| Encender/apagar (ojo) | Capa objetos ohechakuaa. Ndaikatúi ohechaukái, eiporavo, ni ajustar. |
| Congelar (copo) | CadCraft-pe apagar ndive mba'eichagua. Ambue programa-pe ojapo ojekuaa oĩha, ojeguarda. |
| Bloquear (candado) | Objetos ohechaukáva, ajustable, pero ndaikatúi eiporavo térã ojambia. Trace fondo-pe ojeporu. |
| Trazar (impresora) | Apretado ramo, pantalla-pe ohechauka, pero **plotea ndaha'éi** trazado y PDF-pe. Construcción líneas ha notas ojeporu. |

Botón-pe mboheja ohechauka mba'e ojapo ("Apagar", "Congelar", "Bloquear", "No trazar esta capa").

Capa actual apagar ndaikatúi: estado línea "Esa es la capa actual. Primero hacé otra capa actual." Capa nombre eclic ojehecha actual, avei encendida ha descongelada.

Capa cambio, panel térã comando-pe, peteĩ paso deshacer: {{key:Mod+Z}} oguejy.

## Objetos eiporavo capa-pe trabajar

Capa nombre ndaikuaáiva: peteĩ objeto eiporavo capa-pe. Comando ehai térã {{ui:Herramientas}} Capas panel arriba-pe ehai.

| Comando | Mba'e ojapo |
|---|---|
| {{cmd:LAYISO}} | Objetos eiporavo, {{key:Enter}}: ha'e capa-kuéra oiko; ambue opavave apagado. Capa actual apagado ramo, aislada peteĩ capa actual oiko. |
| {{cmd:LAYUNISO}} | Última {{cmd:LAYISO}} apagado capa-kuéra oiko, ha capa actual ojambia oguejy. |
| {{cmd:LAYOFF}} | Eclic objeto peteĩ-peteĩ: capa apagado. `U` oguejy última, {{key:Enter}} ojepe'a. |
| {{cmd:LAYFRZ}} | Upe ndive, capa congelado. |
| {{cmd:LAYMCUR}} | Eclic objeto: capa actual (encendida ha descongelada). Objeto ojeporúva seleccionado, upe ojeporu. |
| {{cmd:LAYON}} | Opavave capa encendida. |
| {{cmd:LAYTHW}} | Opavave capa descongelada. |

Capa actual ndojekongelái ni apagáiva ko'ã forma-pe: historia oinforma, ha {{cmd:LAYMCUR}}-pe otra capa actual hace primero. Objeto bloque referencia eiporavo, referencia capa ojeporu.

## Renombrar, fusionar y eliminar capas

- {{cmd:RENAME}}: ehai `LA`, capa vieja nombre ha nuevo. Capa objetos opavave oguejy. (`B` bloque renombra, referencia opavave.)
- {{cmd:LAYMRG}}: eclic objeto peteĩ capa-pe fusionar (térã ehai `N` ha nombre), {{key:Enter}}, eiporavo capa destino ha `Y` ehai. Objetos destino-pe oike, fusionado capa-kuéra oguejy.
- {{cmd:LAYDEL}}: eiporavo objeto capa-pe (térã `N` ha nombre) ha `Y`. Capa ha **opavave objetos ijehe** oguejy. Capa 0, DEFPOINTS ha capa actual ndojejuhúi.

Peteĩteĩ peteĩ paso deshacer. Opavave {{ui:Herramientas}} capas panel arriba-pe.

1. Eclic peteĩ muro línea, ehai `LAYISO` ha {{key:Enter}}. Walls ha'e apagado noviávo.
2. Walls-pe ojapo ojeporúva.
3. Ehai `LAYUNISO` ha {{key:Enter}}. Doors ha Notes ojevolve.

## Common mistakes

- **Línea mbohapy capa-pe ojeikuaa.** Dibujá mboyve punto lleno ehecha. Capa agregada oñemoĩ actual.
- **Objeto ndoseleccionáiva.** Capa bloqueado, apagado térã congelado.
- **Capa ambue programa-pe imprimir.** DXF R12 "no trazar" ndoguarda. CadCraft hoja oguerekoramo oguarda, pero ambue programa ojeplotea capa.
- **Capa nombre mayúscula guardado ramo.** DXF R12 nombre mayúscula oguarda, `Walls` `WALLS` ha espacio `_`. DWG tal cual oguarda.
- **Capa renombrar, fusionar, eliminar.** {{cmd:RENAME}}, {{cmd:LAYMRG}} térã {{cmd:LAYDEL}} ({{ui:Herramientas}}-pe avei): eheka hechauka.

## Grupos de capas

Lista pyahu-pe capa-kuéra carpeta-pe omoĩ, ko'ã ejemplo: Existentes, Propuestas ha Servicios. Carpeta oñemboty, ha conmutadores opavave capa ojehai, apagado térã encendido, congelado térã bloqueado. Capa actual ndoapagáiva.

{{ui:Herramientas}} Capas panel-pe, {{ui:Agregar grupos predefinidos}} ehai, residencial pequeño trabajo-pe; {{ui:Agrupar por nombre}} prefijo ha'e capa-kuéra (`E-Walls`, `E-Doors`), térã {{ui:Nuevo grupo}}. Capa carpeta-pe arrastrá, térã lista arriba actual capa-pe. Escribí {{ui:Buscar una capa}}-pe lista achicá. `LAYGROUP` (`LG`) línea de comandos-pe mismo.

Grupo nombre renombrar: doble clic nombre-pe (térã F2), escribí nombre pyahu ha {{key:Enter}}; {{key:Esc}} viejo mantiene, {{cmd:UNDO}} oguejy. {{ui:Nuevo grupo}} {{ui:Herramientas}}-pe.

Capas propias ndojambiái, ambue CAD programa-pe lista plana. CadCraft archivo-pe grupo oguarda.
