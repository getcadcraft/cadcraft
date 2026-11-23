---
title: Oñeme'ẽ opciones de comando letra propia
summary: Oñemoĩ comando opción-kuéra pregunta-pe letra ndejoguáva, ojehai mba'e ndive, peteĩ archivo texto-pe ojeeditava, ojeimportava ha ojeexportava.
keywords: opción letra, optionkeys, optkeys, palabra clave opción, keyword, remap, mapeo, personalizar, letra propia, polar, matriz, P, PO, idioma, traducir opciones, forma corta, importar, exportar, ambiguo
from: 7c8328c6
---

## Mba'épa reikuaáta

Mba'éichapa rejapo nde letra oñeha'ãva comando opción-kuéra ohecha-pe. Ehemplo, {{cmd:ARRAY}} ohepyso `[Rectangular/POlar]` ha ohechakuaa `PO` Polar-pe; nde letra `P` térã ambue letra ikatu omba'apo upéicha, nde idioma-pe ikatu avei.

## Mba'éichapa oñemoĩ opciones

Comando opción-kuéra ohechaukáva corchete-pe, letra capital ehai: `POlar` ha'e `PO`, `eXit` ha'e `X`.

Ikatu avei ehai menos letra. Opción-kuéra ndive ohechakuaa peteĩ anivé, CadCraft oikuaauka: `[Rectangular/POlar]` ndive, `P` ha'e Polar. Mokõi oiko, línea de comandos-pe oñeinforma ha ojepyta jey:

```
C could be COUnt, COLumns. Type more letters.
```

Número ndojejuhúi: distancia térã cantidad ojehai ojeikuaaa número-pe ojeporúva.

## Letra propia mbohapy

Comando opresa ojapo letra-kuéra. Nde-kuéra ojeikuaaa ojeikuaáva ndive.

1. Ejecutá {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Letras de opciones}} ha ejecutá {{ui:Editar…}}. Térã ehai {{cmd:OPTIONKEYS}} ha omoĩ {{key:Enter}}.
2. {{ui:Comando}}-pe, eiporavo comando, ehemplo `ARRAY`. Lista oguereko opciones ohechaukáva comando-kuéra, ha oñepyrũ pe última ojeporúva.
3. {{ui:Opción}}-pe, eiporavo opción. Peteĩteĩ oguereko corchete-pe ijaipóva letra: ehemplo `POlar (PO)`.
4. {{ui:Sus letras}}-pe, ehai nde letra-kuéra, ehemplo `P`, ha ejecutá {{ui:Agregar}}.
5. Opción oñemoĩ {{ui:Sus letras}}-pe letra ijaipóva ha nde letra-ndive. Ejecutá {{ui:Guardar}}.

Ejecutá {{cmd:ARRAY}}, eiporavo objeto ha omoĩ {{key:Enter}}. Pregunta ohechauka nde letra opción rire, `POlar (P)`, ha `P` ombohovái.

Mboguejy: ejecutá x ojehechaukáva peteĩ línea-pe, ha ejecutá {{ui:Guardar}}. Opción ohevéta letra ijaipóva rehe.

## Letra ndaikatúiva ojeporu

Editor-pe oñemboykéta letra-kuéra, ha oñeinforma mbaʼéichapa:

- comando opción-kuéra ojeporúva letra (`R` Polar-pe `ARRAY`-pe, `R` Rectangular);
- objeto snap palabra mbohapy térã más, ehemplo `END`, `MID`, `CEN`, ha palabra `ALL` ha `LAST`;
- mismo letra mokõi opción-pe peteĩ comando-pe.

Mbohovái rojehecha ojeikuaa pe lista pyhare, {{ui:Guardar}} ndoikóiva: ajuste línea térã ojepe'a, ha ojevolve. Opción ojeikuaa comando-pe letra-kuéra oñeha'ã oñeikuaaava; nde letra-kuéra ndaikatúi ndaipe'ái prompt ojeikuaa. Letra ojeikuaa comando rérape, ehemplo `L` térã `C`, ojeporu: opción prompt-pe, línea de comandos oñeikuaa respuesta, ndaha'éi comando.

## Peteĩ elección opavavépe comando

{{ui:Comando}}-pe eiporavo {{ui:Cada comando}}. Opción-kuéra opavave ojeikuaa: eXit térã Undo ha ambue. Letra oñemoĩva opavavépe ombohovái ojehechaukáva comando-pe. Letra comando específico-pe oñemoĩva oiporiahu.

## Letra ñane idioma-pe

Letra ikatu alfabeto mbohapy-pe, nde teclado ndejehecháiva opción: emoĩ `З` Close-pe {{ui:Cada comando}}-pe, térã `П` POlar-pe `ARRAY`-pe.

CadCraft oguereko letra inglés-pe. Nde lista ha'e mba'e nde, nde oficina térã nde idioma ohóva ojapo, ha {{ui:Exportar}} omoĩ archivo ikatu omoĩ ambuépe.

## Texto ojeditava

{{ui:Editar como texto}}-pe oñemoĩ lista linea-kuéra, peteĩ opción-pe, ha {{ui:Exportar}} avei ojeguarda upéicha:

```
ARRAY.PO,  P
*.X,       Q
```

Línea peteĩteĩ oguereko: comando, punto, opción-kuéra letra ijaipóva, coma ha nde letra. Asterisco comando-pe rehénte oguereko opavave comando-kuéra. Línea `;` ndive oñepyrũ ha'e nota.

## Mba'e ndoiporiahúva

- Ijaipóva letra oikoveha opción ojeporúva.
- Rutina ha botón toolbar-pe oñeporu ijaipóva letra, upéicha ndojejuhúi ojecarga mba'e. Ijaipóva letra oñeporu pe prompt-pe guión baja `_PO`-pe.
- Comando alias ha'e ambue mba'e: eheka [Editar alias de comandos](topic:command-aliases).

## Línea ndoguerekóiva CadCraft-pe

Editar como texto térã importa archivo-pe, editor-pe oñeinforma problema línea número-ndive:

- comando ndoiméi (comando alias oguereko: `AR.PO` ha'e `ARRAY.PO`);
- línea ndaha'éi `COMANDO.OPCIÓN, LETRAS`;
- letra-kuéra espacio térã signo oguereko (letra ha número rehe, 16 peve);
- mismo letra ombohovái mokõi opción peteĩ comando-pe.

## Importar ha exportar

{{ui:Exportar}} oñeguarda nde letra-kuéra peteĩ archivo texto-pe, ojeguarda térã ome'ẽ ambue-pe. {{ui:Importar…}} oñeleé upéicha archivo. Ambos oĩ editor-pe ha {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Letras de opciones}}-pe.

{{ui:Configuración}}-pe, {{ui:Importar…}} ojeporu archivo ojeporu-kuéra ndive. Línea ojekontra térã ndoikatúva ndaikatúi ojeikuaa: editor-pe ehecha umi línea. Editor-pe ojeporu rehecha te'ũ, ndaipóri ojecambia ojehai peve {{ui:Guardar}}.

## Ojecarga jey térã ojepe'a

Emoĩ {{cmd:REINIT}} ha omoĩ {{key:Enter}} nde archivo ojeporu jey. Letra mboguejy: eiporavo línea ha ejecutá {{ui:Guardar}}.

## Nde letra-kuéra nde cuenta-ndive

getcadcraft.com-pe ingresado ramo, nde letra-kuéra oguarda nde cuenta-pe. Ambue navegador térã compu-pe nde cuenta-ndive, ojeguejy. Línea de comandos-pe oñeinforma `Option letters from your account`. Ojehai mokõi lugar-pe, última ojeporúva oñepyrũ, ha umi oñemoĩva ojeguarda peteĩ jey.

{{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Letras de opciones}}-pe oñeinforma mbaʼépa oĩ. Ingresado ndaipóri térã sin conexión, navegador-pe oguarda, ha ojeguarda nde cuenta-pe ingresado ramo jeyvo {{ui:Guardar}}.

Mboheja: [Editar alias de comandos](topic:command-aliases) · [Configuración de CadCraft](topic:settings) · [Comandos](topic:commands)
