---
title: Insertar desde archivo o biblioteca
summary: Traé un bloque, o un plano entero, desde otro DWG o DXF, y colocá elementos de la Biblioteca, un archivo u otra biblioteca, con sus créditos y actualizaciones.
keywords: insertar, archivo, biblioteca, librarycraft, elemento, equipo, bloque desde otro plano, wblock, centro de diseño, créditos, atribución, licencia, actualizar, fuente, item.json
from: f6e4e452
---

## Insertar bloque desde otro plano

1. Ehai `I` ha omoĩ {{key:Enter}}, térã ejecutá {{ui:Insertar}} grupo Bloques-pe.
2. Línea de comandos pie ventana-pe oinforma `Ingrese nombre de bloque o [Archivo/Biblioteca]`. Ehai `F` ha omoĩ {{key:Enter}}.
3. Eiporavo DWG térã DXF ko compu-pe. Leído ojeporu; ndaipóri abierto, nada oñemboundo.
4. {{ui:Insertar desde}} diálogo-pe, eiporavo bloque lista-pe (escribí {{ui:Filtrar bloques}}-pe ojejuhu), térã oguarda {{ui:Todo el plano}}. Ejecutá {{ui:Insertar}}.
5. Eclic dónde oike, ha completá atributo ohaíva.

Ikatu avei oñepyrũ {{ui:Bloques}} panel-pe: {{ui:Filtrar bloques}} casilla-pe ehai `F` ha omoĩ {{key:Enter}}, térã ehai ndaipóri ningún bloque hecharéva ha ejecutá {{ui:Desde un archivo…}}. `L` ha {{ui:Biblioteca…}} biblioteca panel pe ojepyrũ ha upéicha. Versión 0.10.1 ndaipóri, {{ui:Filtrar bloques}}-pe letra ehaíva ojeheka iplano bloque-kuéra ndaha'éi, ha "Ningún bloque coincide con el filtro." oinforma.

Ejemplo plano propio bloque-kuéra mano-pe oguereko, ejecutá {{ui:Agregar un plano}} {{ui:Bibliotecas}}-pe {{ui:Bloques}} panel-pe ha eiporavo DWG térã DXF. Bloque-kuéra picture-ndive oñeinforma; eclic peteĩ-pe omoĩ.

Plano entero peteĩ bloque ojerure ojeguerohory archivo nombre-pe. Bloque eiporavo-pe ohasa bloques oĩva avei. Capas oeiporava oike plano-pe.

Otro plano unidad ojeporu (pulgada ha milímetro, ehemplo), CadCraft referencia escala ojejoguáva ha historia-pe oinforma.

### Nombre ojeporu ramo

Plano-pe mismo nombre bloque ojeikuaa ramo, CadCraft ohaína:

- {{ui:Mantener existentes}} oikuaa plano-pe ko nombre bloque.
- {{ui:Renombrar}} pyahu oike `Nombre (2)` ndive.

Insert peteĩ paso: {{key:Mod+Z}} referencia ha bloque definición-kuéra oguejy.

## Biblioteca ojepyrũ

Eclic {{ui:Biblioteca…}} {{ui:Bloques}} panel-pe, térã {{ui:Biblioteca}} grupo Bloques-pe, térã ehai `LIB`. `INSERT` pregunta-pe, `L` avei ojepyrũ.

Biblioteca oguereko cuatro fuente, pestaña-kuéra:

- {{ui:Biblioteca}}: CadCraft biblioteca. Buscá nombre, fabricante térã modelo rehe, categoría rehe filtrá.
- {{ui:Archivos…}}: elemento archivo (`item.json`) biblioteca opavave-gui, térã plano, planilla térã 3D modelo elemento-kuéra ojapo: DWG térã DXF (peteĩteĩ bloque elemento), CSV nombre ha tamaño columna-ndive, térã glTF térã OBJ modelo. Nada oñemboundo.
- {{ui:Estándar}}: acero secciones (secciones, elevaciones térã 3D elemento) ha estándar partes, perno, tuerca, rodamiento, publicado tabla-kuéra rehe ojapo. Eheka [Colocar secciones de acero y partes estándar](topic:steel-and-standard-parts).
- {{ui:Otras fuentes}}: ambue biblioteca, Biblioteca-icha respuesta. Dirección peteĩ jey omoĩ; navegador oguarda.

Peteĩteĩ tarjeta ohechauka vista previa, nombre, fabricante y modelo, licencia ha versión. Elemento ndoguerekóiva {{ui:Retirado}} ojehechauka razón-ndive; CadCraft ehai ántes colocar.

## Elemento colocar

1. Eclic {{ui:Colocar}} tarjeta-pe.
2. Eclic dónde oike. `R` ehai antes girar, `S` escalar.
3. `Ingrese número de elemento (CC-ITEM)`-pe, {{key:Enter}} ehai sigue número libre, térã nde propio número.

Elemento bloque oñemoĩ `LIB_<nombre>_v<versión>`, plano unidad-pe dibujado. Plano unidad ndaipóri, milímetro-pe elemento oike ha historia oinforma; {{ui:Unidades}} derecha panel-pe primero omoĩ.

Datos atributos invisible-pe: elemento id ha versión, licencia ha atribución, fabricante, modelo, categoría ha tamaños. Eheka [Atributos de bloque](topic:attributes).

## Elemento nde idioma-pe

Elemento nombre ha descripción ambue idioma-pe oguereko ikatu. CadCraft idioma (Configuración › General › Idioma) ojeporúva ha ojeguarda, tarjeta ha bloque elemento nombre ojeporu. Bloque nombre elemento nombre-gui ojapo, upéicha plano peteĩ bloque peteĩ elemento ojeporúva.

## Actualizaciones ehai

1. Biblioteca ejecutá.
2. Ejecutá {{ui:Buscar actualizaciones}}.

Plano-pe biblioteca elemento peteĩteĩ número ndive oinforma ha versión pyahu oguereko térã retirado. Fila-pe {{ui:Actualizar}} eclic, térã {{ui:Actualizar todo}}. Referencia peteĩteĩ bloque versión pyahu-pe oike, número, cantidad, lugar, ángulo ha capa oguarda. {{key:Mod+Z}} actualizar oguejy.

## Créditos ojeporúva

Eclic {{ui:Créditos de la biblioteca}}. Elemento peteĩteĩ atribución línea ha licencia-ndive oinforma.

- {{ui:Copiar atribución}} peteĩ línea oñemoŋgu; {{ui:Copiar todo}} opavave línea.
- {{ui:Descargar CSV}} lista oguarda número, fabricante, modelo, licencia ha atribución-ndive. Planilla cualquiera-pe oñeleé.

Licencia CC BY autor-pe crédito oĩ mbohovái ndive. Línea plano-pe, especificación térã proyecto notas-pe omoĩ.

## Símbolos y activos

Biblioteca oguereko mbohapy elemento kuaatypy: Símbolos (dibujo convención, 2D), Tipos (elemento mba'épa oĩ) ha Activos (objeto físico). {{ui:Biblioteca}} pestaña-pe {{ui:Tipo de elemento}} lista Símbolos ha Activos peteĩ, solo Símbolos, térã solo Activos ohechauka. Tipos BimCraft proyecto-pe oĩ, CadCraft ndoheka.

## Biblioteca ingresá

Eclic {{ui:Ingresar a la biblioteca}}. Ventanita sitio-pe oñepyrũ; ingresado rire, CadCraft nde equipo elemento ohechauka ha colocá oregistra, elemento ojeporu ojambiáramo oikuaa. Ingreso pestaña navegador-pe oguarda. Cuenta seguridad página-pe ojepe'a.

## Mis objetos ojeguarda

{{ui:Mis objetos}} Biblioteca-pe lista privada ndaha'éi opavavekuaa. Pública biblioteca, búsqueda ni equipo-pe ndoike; nde cuenta-ndive opavave compu-pe ojeguejy biblioteca-pe ingresado ramo.

1. Biblioteca panel-pe, ejecutá {{ui:Archivos…}} ha leé archivo.
2. Elemento ojeikotevẽva, eclic {{ui:Guardar en mis objetos}}.
3. Ohechakuaa, eclic {{ui:Mis objetos}} ha {{ui:Colocar}}. Biblioteca elemento peteĩ, {{ui:Buscar actualizaciones}} avei omoĩ.
4. {{ui:Quitar de mis objetos}} lista-gui oguejy. Plano-pe jau oñemoĩ copias oguarda.

Biblioteca-pe ingresado oikoveha ndaikatúi. Archivo leé nada oñemboundo; elemento oguardaramo peteĩ elemento nde cuenta-pe oñemboundo.

:::note
Mis objetos oñeha'ã ha nde cuenta-pe ndaikatúi ojepyrũ. "Mis objetos aún no está abierto para esta cuenta" ojehechaukáramo, {{ui:Archivos…}}-ndive nde archivo elementos colocar ikatu.
:::

## Errores comunes

- **"La creación de elementos desde tipos IFC es de BimCraft."** IFC ha familia archivo BimCraft app-pe leé. Elemento BimCraft-pe térã Biblioteca-pe ojapo, ha `item.json` aquí ojeporu.
- **"No se pudo acceder a la biblioteca."** Sin conexión térã biblioteca ndaipóri. Plano-pe ojeikuaa elemento ndoafectái.
- **Elemento hu'ã térã michĩ.** Plano unidad hai térã ndoomoĩi. Oguejy, {{ui:Unidades}} omoĩ ha colocá jey.
