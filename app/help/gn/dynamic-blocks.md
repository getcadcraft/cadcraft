---
title: Bloques dinámicos
summary: Mba'eichaite CadCraft oikuaa bloques dinámicos DWG-pe: oguarda sus nombres verdaderos, ohechauka estado oguardáva, ojambia estado de visibilidad, ohechauka ambue valores ha oiko dinámico ojeguardáramo.
keywords: bloque dinámico, bloques dinámicos, visibilidad, estado de visibilidad, voltear, estirar, búsqueda, parámetros, personalizado, propiedades de bloque, *u bloques, dinámico
from: dea2ee7c
---

## Mba'e oñeporu

DWG bloques dinámico-nde ojepurúva CadCraft-pe, ko'ápe hasta ha'e:

- **Nde nombre verdadero.** Bloque dinámico oĩ {{ui:Bloques}} panel-pe ijehe nombre-pe ("Receptacle", "Sink"), ndaha'éi `*U` bloque sin nombre.
- **Estado oguardava.** Peteĩteĩ referencia ohechauka ojehechaukáva ambue programa-pe: estado de visibilidad ojehaíva, estirado térã volteado ojeguardáva.
- **Ojambia estado de visibilidad.** Ejeporavo peteĩ referencia (térã mbohapy mismo bloque), ejecutá {{ui:Propiedades}}, ha {{ui:Personalizado}} sección-pe eiporavo ambue estado {{ui:Visibilidad}} lista-pe. Referencia upe estado omboykeve, ha atributo-kuéra avei: estado ohykéva omboyke, ojehechaukáva oike valor-ndive. Referencia peteĩteĩ valor oguarda, upévare ningún ndoje'ẽvoi; {{ui:Propiedades}} oñeinforma ohykéva "oculto" rehe. {{key:Mod+Z}} oguejy estado vieja peteĩ paso.
- **Grips.** Bloque dinámico ejeporavo ohechauka hag'ue parámetro-kuéra: triángulo chiquito estado de visibilidad (ejecutá lista estado-kuéra), flecha distancia punta-kuéra, flecha doble volteo. Estado de visibilidad grip-pe ojapo; ambue status bar-pe oinforma.
- **Ambue valores, solo lectura.** {{ui:Personalizado}} visibilidad lista-pe avei ohechauka bloque distancias, ángulos de alineación, volteo estados ha puntos plano-pe ohai rejoguáva.
- **Estados de visibilidad editar.** {{cmd:BEDIT}} ndive bloque-pe ejecutá: editor peteĩ estado ohechauka, barra-pe plano arriba-pe ohai (ambue eiporavo ko'ápe). Ehai {{cmd:BVSTATE}} ojambia, ohupytýva (ohyke opavave, ohechauka opavave térã ohai oĩva), ojehechauka térã ojepe'a estado. {{cmd:BVHIDE}} oñemboykéta objetos ejeporavo estado hechauka-pe; {{cmd:BVSHOW}} oñehechauka ojehecháva ojepe'a oñemoĩva ndive, eiporavo ohupytýva. Bloque guarda: referencia ojeporu estado renombrado, ojeikuaa estado nuevo nombre-ndive; estado ojepe'a-pe ojeporu, primer estado ohechauka.
- **Dinámico guarda.** DWG-pe guardado, plano oike versión-pe, bloques dinámico oĩ, estado eiporavo-ndive: ambue programa oike bloques dinámico-kuéra. Visibilidad estado ojeditáva avei ojeguarda: nuevo nombre, estados ohupytýva ha mba'e ohechauka.

## Mba'e ndoiko térã ndaipóri ko'ẽ

| Ndaipóri ko'ẽ | Ko'ẽrõ ko'ágã |
|---|---|
| Distancias, ángulos, volteos ojambia (estirar, mover, voltear) | Solo lectura {{ui:Personalizado}}-pe; ojambia programa oñeporúva bloque-pe. |
| Búsqueda, XY, rotación, parámetros polares | Ndoikuaai ko'ẽ: referencia ohechauka oguardava. |
| Distancia, volteo, punto grips arrastre | Ohechauka dónde oĩ parámetros; estado de visibilidad grip ha {{ui:Visibilidad}} lista-pe propiedades-pe ojambia estado. |
| Ambue programa-pe kuéra clase bloque dinámico ojapo (estirar, voltear, búsqueda) | CadCraft-pe ojapo bloque simple; {{cmd:BPARAMETER}} ohechauka ndaikatúi. Nde parámetros ha estados visibilidad varios Parámetros administrador-pe ojeikuaa (eheka "Nde parámetros ha estados de visibilidad" rehe). |
| Bloque estado visibilidad-pe objetos agregar térã borrar bloque editor-pe | Bloque simple guarda (editor oinforma ojepe'áramo). |
| Ambue DWG versión térã DXF-pe dinámico ojeguarda | Bloques simple oguarda estado eiporavo-ndive, guardado oinforma. |

:::note
{{cmd:BEDIT}}-pe objeto ojambia térã ojejuhu estado visibilidad bloque dinámico-pe. Estado ndaikuaáiva bloque térã objetos añadidos térã borrados editor-pe, bloque simple oiko.
:::

## Nde parámetros ha estados de visibilidad

CadCraft-pe ojapo bloque ikatu oguereko nde parámetros ha **varios** parámetros de visibilidad, peteĩteĩ nde estados. Ehai {{cmd:BPARAMS}} (térã `BPM`) **Parámetros administrador** ábrir-pe bloque {{cmd:BEDIT}}-pe, referencia eiporavo bloque-pe térã bloque ehai-pe.

- **Parámetros**: nombre, tipo (número, longitud, ángulo, cantidad, sí/no), ha valor térã fórmula ambue parámetros rehe (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Resulta}} ohechauka resultado. Fórmula ndoikóiva térã valor ndojejuhúiva tipo-pe (cantidad 1,5) ndojeporúi, administrador oinforma mbaʼéichapa; ambue ndojejuhúi.
- **Parámetros de visibilidad**: {{ui:Agregar parámetro de visibilidad}} ojapo peteĩ estado primer. Peteĩteĩ estado oikoveha renombrado, mboguejy (último oguarda) térã "se muestra cuando" número oñemoĩ. Fórmula parámetros-gui estado ojepe'a (estado número ojoguáva, térã estado lugar lista-pe); fórmula ndaipóri rehe, referencia peteĩteĩ oiporavo.
- **Objetos estado-pe emoĩ**: bloque editor-pe eiporavo objetos, ehai {{cmd:BPARAMS}} ha ejecutá {{ui:Poner aquí los objetos seleccionados}} estado-pe. Parámetro de visibilidad ndaha'éiva objetos oñehechauka siempre.
- **Esta referencia**: referencia eiporavo-pe ojepyrũ, administrador ohechauka referencia nde propio valores ha estados.

Bloque editor ndaipóri ramo, peteĩteĩ cambio peteĩ paso deshacer. Bloque editor-pe cambio editor rehe: {{ui:Guardar bloque}} omboguarda. `-BPARAMS` comando línea-pe ojeikuaa upéicha.

**Archivo-pe.** DWG ha DXF oguarda parámetros, mba'e objetos estado-pe, peteĩteĩ referencia valor CadCraft registro-pe; CadCraft-pe ojeporúramo opavave ojevolve. Ambue programa ohecha peteĩteĩ referencia bloque opavave objetos-ndive, DWG-pe bloque peteĩ visibilidad parámetro. Referencia ambue programa ojambiáva, térã bloque objetos ojambiáva, ojevolve umi ndojeheaíva ndive (ndojeikuaa mba'e).
