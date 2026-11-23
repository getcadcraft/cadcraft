---
title: Editar alias de comandos
summary: Guardá tus propios alias de comandos en un solo archivo de texto con el formato conocido, importá y exportá un archivo .pgp y volvé a cargarlo con REINIT.
keywords: alias, aliases, aliasedit, pgp, atajo, nombre corto, reinit, teclado, personalizar, editar alias
from: 2282d36f
---

## Mba'épa reikuaáta

Mba'éichapa rejapo nde alias ko'ã comando-kuéra, ehemplo `LL` {{cmd:LINE}}-pe, opavave peteĩ archivo de texto-pe.

## Alias ojapo

1. Ejecutá {{ui:Vista}} › {{ui:Más}} › {{ui:Editar alias…}}, térã ehai {{cmd:ALIASEDIT}} ha omoĩ {{key:Enter}}.
2. Emoĩ peteĩ línea ndive alias, coma ha asterisco rire comando:

```
LL,     *LINE
```

3. Ejecutá {{ui:Guardar}}. Línea de comandos-pe oñeinforma cuántos nde alias ojeporu.
4. Ehai `LL` ha omoĩ {{key:Enter}}: LINE oñepyrũ.

Nde alias-kuéra oĩ CadCraft-pe ijyvateve. Nde línea oganaha ojehechaukáva alias ojehérava peteĩ, ha nde línea mboguejy ramo, ojevolve alias ofíciale.

## Línea CadCraft ndoguerekói

Editor-pe oñeinforma cada problema ha umi línea número-ndive, rehaípe:

- comando ndoiméi;
- alias oĩ peteĩ comando-pe (`LINE, *CIRCLE` oñemboykéta LINE);
- línea ndaha'éi `ALIAS, *COMANDO`;
- mismo alias oĩ mokõi línea-pe (última ojeporúta).

Umi línea oñepyrũva peteĩ programa nde compu-pe, ehemplo `NOTEPAD, START, 1, *File to edit: ,`, oñemboykéta ha oñeinforma: navegador-pe ndaikatúi oñepyrũ programa.

## Ambue programa-gui alias-kuéra ojapo

1. Alias editor-pe ejecutá {{ui:Importar .pgp…}} ha ejeséka archivo. Ikatu avei omoĩ peteĩ archivo `.pgp` plano-pe.
2. Ehecha umi problema oñeinforma (comando CadCraft ndoguerekóiva oñemboykéta, umi ambue oñeikuaa).
3. Ejecutá {{ui:Guardar}}.

{{ui:Exportar .pgp}} oñeguarda CadCraft-pe alias ha nde alias peteĩ archivo-pe, formato mbojojaha.

## Archivo mboguejy

Emoĩ {{cmd:REINIT}} ha omoĩ {{key:Enter}} nde alias archivo mboguejy ojeporu jey. Ojeguarda kóva navegador-pe; escritorio app-pe ojeguarda iñeteĩ carpeta-pe, ha servicio nube-pe ojesinkroniza.

## Comando opción-kuéra letra

Alias ojehai comando. Opción-kuéra letra ojecambia (`P` Polar {{cmd:ARRAY}}-pe), eheka [Oñeme'ẽ opciones de comando letra propia](topic:option-letters).

## Atajo teclado opavavépe comando

Alias ojehai; atajo ojehai tecla. Peteĩ comando-pe nde tecla ome'ẽ:

1. Ejecutá {{ui:Vista}} › {{ui:Más}} › {{ui:Atajos de teclado…}}, térã ehai `KEYS` ha omoĩ {{key:Enter}}.
2. Ejecutá la casilla {{ui:Tecla}} ha omoĩ tecla-kuéra, ehemplo {{key:Alt+Shift+C}}.
3. {{ui:Ejecuta}}-pe, ehai comando, ha pe'ũ ikatu ehai mba'e oñeha'ãva rire: `CIRCLE`, térã `ZOOM E`.
4. Ejecutá {{ui:Agregar}}.

Tecla ohecha {{key:Mod}} térã {{key:Alt}} ndive letra térã número, térã función tecla ndaipóriva ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). CadCraft, app térã navegador ojeporúva tecla, ha My tools botón-pe oĩva ([Botones propios](topic:my-tools)), ndoguerekóiva; casilla-pe oñeinforma mbaʼépa. Atajo-kuéra oñeguarda navegador-pe (térã escritorio app-pe); {{ui:Quitar}} oñemboguejy peteĩ.
