---
title: Botones propios (Mis herramientas)
summary: Agregá botones de barra de herramientas que ejecutan tus macros, dales teclas de acceso directo, compartilos como archivo y traé botones de un archivo de personalización CUIx.
keywords: mis herramientas, botones personalizados, botones de barra, macro, macros, cui, cuix, personalizar, menú, teclas de acceso directo, atajos de teclado, diesel, ^c^c, importar botones, exportar botones
from: 36618802
---

## Mba'e ojeikuaa

Mba'éichapa agregá botones propios barra de herramientas-pe, cada uno ejecutando macro ojapóva AutoCAD-ícha, mba'éichapa dar tecla botón-pe, ha mba'éichapa traer botones archivo CUIx-gui.

## Agregar botón

1. Abrí {{ui:Configuración}} ({{key:Mod+,}}) ha quedate pestaña {{ui:CadCraft}}. Desplazate hasta {{ui:Mis herramientas}}.
2. Eclikea {{ui:Agregar un botón…}}.
3. Completá caja:
   - {{ui:Grupo}}: grupo barra-pe ojeguereko, por ejemplo `Mis herramientas`. Nuevo nombre peteĩ grupo pyahu omoĩ.
   - {{ui:Etiqueta}}: botón-pe ojehecha palabras.
   - {{ui:Macro}}: mba'e tipea, por ejemplo `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tecla de acceso directo}}: eclikea caja ha eprésiona tecla, por ejemplo {{key:Ctrl+Alt+B}}.
   - {{ui:Icono}}: PNG térã SVG imagen 64 KB-gui mbohapy, térã nada (estrella ohechauka).
4. Eclikea {{ui:Guardar}}.

Botón ojuhu barra-pe ti, grupo-pe. Eclikea, térã eprésiona tecla, ejecutaráma. {{ui:Editar}} ha {{ui:Eliminar}} lista-pe ojecambia térã ojehepa.

## Ehai macro

Macro ha'e mba'e tipeába línea de comando-pe, señal michĩ ndive:

| Señal | Ha'e |
|---|---|
| `^C` | Oñemboguejy mba'e ojapóva (`^C^C` ojepyta usual) |
| `;` térã espacio | {{key:Enter}} |
| `\` | Oha'arõ: clic térã tipeado respuesta, upéi macro oñongatu |
| `_` térã `.` comando raʼanga | Oikuaa ha ndojeporúi (nombre internacional térã integrado) |
| `*` ojepyta-pe | Ojapo jey cada ojehasa, {{key:Esc}} eprésiona peve |
| `^O`, `^G` | Ortogonal, cuadrícula on térã off |
| `$M=` | Ambue DIESEL. Solo `$(if,…)`, `$(getvar,…)`, `$(=,…)` ha `$(eq,…)` ojeikuaa; ambue ojeporu botón ohechauka ha ndojapói |

Ehecha:

- `^C^C_line;0,0;@100,0;;` peteĩ línea 100 orígen-gui.
- `^C^C_circle;\25;` ohaʼarõ centro, upéi círculo radio 25 hapykuépe.
- `^C^C_turnright` vista 90° derecha-pe ojerotá.

## Teclas de acceso directo

Tecla ojeporu {{key:Mod}} (Ctrl, térã Cmd Mac-pe) térã {{key:Alt}} letra térã número ndive, térã función tecla librea {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Letra solo línea de comando-pe ojeho. Tecla CadCraft, app térã navegador ojeporu (por ejemplo {{key:Ctrl+S}} térã {{key:Ctrl+Z}}) ha ambue botón ojeporu ndojeporuiva, caja ohechauka mba'é rehe.

## Compartir botones

- {{ui:Exportar…}} oguarda opa grupo ha botón (icono ha tecla ndive) `my-tools.json`-pe.
- {{ui:Importar…}} ojerereta grupo ambue archivo ndive ndépe upéi. Grupo nombre ndépe ojeporu "(2)" oheka; tecla ojapóva ojeheja, panel ohechauka.

## Traer botones de archivo CUIx

1. Eclikea {{ui:Importar CUIx…}} ha eroga `.cuix` archivo.

Barra de herramientas ha panel cinta grupo-pe oiko, cada botón macro ha imagen ndive (PNG, térã BMP PNG-pe mudado). Tecla de acceso directo grupo ambue-pe oiko, cada botón tecla ndive; alias de comando ojeguereko {{ui:Alias}} grupo-pe. Panel ohechauka mba'e ojeguejy.

:::note
Archivo solo leído. CadCraft ndoguerekóiva comando nombre-pe ohechauka, ndaha ojeikuaa: botón clic-pe ohechauka. DIESEL funciones michĩ ndaha, menú, mouse botón ha espacio de trabajo ndojeikuaa.
:::

## Mba'e ndaikuaaiva

- Botón ojekeha ko navegador-pe (térã desktop app-pe), ndaha plano-pe.
- Botón línea de comando-pe ojapo, deshacer ojapo ambue ojapóicha: peteĩ {{key:Mod+Z}} peteĩ comando ojapo rehe.
