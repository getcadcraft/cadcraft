---
title: Insertar desde un archivo o la biblioteca
summary: Traiga un bloque, o un plano entero, desde otro DWG o DXF, y coloque elementos de la Biblioteca, un archivo u otra biblioteca, con sus créditos y actualizaciones.
keywords: insertar, archivo, biblioteca, librarycraft, elemento, equipo, bloque de otro plano, wblock, centro de diseño, créditos, atribución, licencia, actualización, fuente, item.json
from: 316188d2
---

## Insertar un bloque de otro plano

1. Emoñe'ẽ `I` ha eapreta {{key:Enter}}, térã eapreta {{ui:Insertar}} grupo Bloques-pe.
2. `Ingrese el nombre del bloque o [Archivo [F]/Biblioteca [L]]`-pe emoñe'ẽ `F` ha eapreta {{key:Enter}}.
3. Eiporavo DWG térã DXF kompiuta-pe. Ko'ápe oñelée, ndoñeabrirí, ha ndoñemboguejýi.
4. {{ui:Insertar desde}} diálogo-pe, eiporavo bloque lista-gui (emoñe'ẽ {{ui:Filtrar bloques}}-pe ojuhu-ramo), térã oñeñongatu {{ui:Todo el plano}}. Eapreta {{ui:Insertar}}.
5. Eapreta oho-va-pe, ha emoĩ atributo oñeporandu-va.

Plano entero oúta bloque peteĩ-pe, archivo réra-ndive. Eiporavo bloque ryepýpe oĩva avei oúta. Capa ojeporuva oñeñongatu ko plano-pe.

Plano ambue unidad-pe (pulgada ha milímetro, ejemplo), CadCraft oñemoambue referencia ha oñeanota historial-pe.

### Nombre ojeporuva ojeguereko

Ko plano-pe bloque mismo nombre oguereko, CadCraft oporandu:

- {{ui:Mantener existentes}} ojeporu ko plano-pe bloque upe nombre-pe.
- {{ui:Renombrar}} oguereko pyahu `Nombre (2)` rérape.

Insert opa peteĩ paso: {{key:Mod+Z}} oipe'a referencia ha oñemboty bloque definición oñemoĩva.

## Abrir la biblioteca

Eapreta {{ui:Biblioteca…}} {{ui:Bloques}} panel-pe, térã {{ui:Biblioteca}} grupo Bloques-pe, térã emoñe'ẽ `LIB`. Prompt `INSERT`-pe, `L` avei oipe'a.

Biblioteca oguereko irundy fuente, tab-kuéra:

- {{ui:Biblioteca}}: CadCraft biblioteca. Emboguejy nombre, fabricante térã modelo rupive, ha filtra categoría rupive.
- {{ui:Archivos…}}: elemento archivo (`item.json`) biblioteca oimeva-gui, térã plano, planilla térã modelo 3D elemento-kuéra ojapo-ramo: DWG térã DXF (bloque peteĩteĩ oúta elemento), CSV nombre ha tamaño columna-ndive, térã glTF térã OBJ modelo. Nada ndoñemboguejýi.
- {{ui:Estándar}}: acero perfil (sección, elevación térã 3D elemento) ha piezas estándar kóva perno, tuerca ha rodamiento, publicado tabla-gui ojapo. Ehecha [Colocar perfiles de acero y piezas estándar](topic:steel-and-standard-parts).
- {{ui:Otras fuentes}}: ambue biblioteca Biblioteca-ichugui ojehecha-va. Peteĩ jey emoĩ dirección; ko navegador oñemanduʼa.

Peteĩteĩ tarjeta oguereko vista previa, nombre, fabricante ha modelo, licencia ha versión. Elemento retirado oñemarca {{ui:Retirado}} razón-ndive; CadCraft oporandu emoĩ mboyve.

## Colocar un elemento

1. Eapreta {{ui:Colocar}} tarjeta-pe.
2. Eapreta oho-va-pe. Emoñe'ẽ `R` peve girar, térã `S` escalar.
3. `Ingrese el número de elemento (CC-ITEM)`-pe eapreta {{key:Enter}} próximo número libre-pe, térã emoñe'ẽ nde número.

Elemento oúta bloque `LIB_<name>_v<version>` nombre-pe, plano unidad-pe. Plano unidad ndoguerekói-va, elemento milímetro-pe oúta ha historial oñeanota; emoĩ primero {{ui:Unidades}} panel derecho-pe.

Ipoguýi oúta atributo invisible-pe: elemento id ha versión, licencia ha atribución, fabricante, modelo, categoría ha tamaño. Ehecha [Atributos de bloque](topic:attributes).

## Elemento ndahemiguãi tetãme

Elemento oguereko nombre ha descripción ambue tetã ñe'ẽ-pe. CadCraft ojeporu tarjeta ha bloque nombre ojehechauka Configuración › General › Idioma-pe ojeporavaekue ñe'ẽ-pe, oĩ jave. Bloque ipropio nombre oguereko elemento nombre-gui, upévare plano peteĩ elemento peteĩ bloque ha'e, mba'e ñe'ẽ-pe oñemoĩ avei.

## Buscar actualizaciones

1. Emoĩ biblioteca.
2. Eapreta {{ui:Buscar actualizaciones}}.

Plano-pe biblioteca elemento peteĩteĩ lista oúta elemento número-ndive ha ojekuaa oĩ ha'eháicha térã oĩ versión pyahu (ha mba'épa oñemoambue), térã retirado. Eapreta {{ui:Actualizar}} fila-pe térã {{ui:Actualizar todo}}. Referencia opa omoĩ versión pyahu bloque-pe ha oguarda elemento número, cantidad, lugar, ángulo ha capa. {{key:Mod+Z}} oipe'a actualización.

## Acreditar lo usado

Eapreta {{ui:Créditos de la biblioteca}}. Elemento peteĩteĩ ojehecha atribución línea ha licencia-ndive.

- {{ui:Copiar atribución}} oñemoĩ peteĩ elemento línea; {{ui:Copiar todo}} opa línea.
- {{ui:Descargar CSV}} oguarda lista elemento número, fabricante, modelo, licencia ha atribución-ndive. Oñemoĩ opa planilla-pe.

Licencia CC BY oporandu autor ojeacredita hemboʼehápe. Emoĩ línea plano-pe, especificación-pe térã nótas de proyecto-pe.

## Símbolos ha activos

Biblioteca-pe oĩ mbohapy kuatiá elemento: Símbolos (convención de dibujo, 2D), Tipos (elemento oñemoʼãvaekue mbaʼépa) ha Activos (objeto físico). {{ui:Biblioteca}} tab-pe, {{ui:Tipo de elemento}} lista ojehechauka Símbolos ha activos ojuntáva, solo Símbolos térã solo Activos. Tipos ha'e mba'e BimCraft proyecto ojapova-ha, upévare CadCraft ndoʼã.

## Ingresar a la biblioteca

Eapreta {{ui:Ingresar a la biblioteca}}. Ventana pequeña oñepe'a sitio-pe; ikatu ingreso rire CadCraft oñehechauka nde equipo-kuéra elemento ha oguarda emoĩvaekue, upévare oendu elemento oñemoambuepa oñeporu. Sesión ko navegador tab-pe oiko. Ejecuta jepe ingresovaekue cuenta seguridad página-pe.

## Ojepe'ỹva

- **"Hacer elementos desde tipos IFC está en BimCraft."** IFC ha familia archivo BimCraft aplicación-pe oñemoñe'ẽ. Ojapo upe-pe térã Biblioteca-pe, upe rire ojeporu `item.json` ko'ápe.
- **"No se pudo acceder a la biblioteca."** Ndaipóri internet térã biblioteca ndoĩporã. Plano-pe mboyve elemento ndojepy'apýi.
- **Elemento hasýva térã michĩva.** Plano unidad ojehechauka ndoikóiva térã ndaipóri. Oipe'a, emoĩ {{ui:Unidades}}, ha emoĩ jey.
