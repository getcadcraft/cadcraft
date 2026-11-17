---
title: Base PDF ha importación PDF
summary: Omoĩ página PDF dibujo guýpe para calcar ha trazar, térã ojapo línea ha texto ojoguáva objetos de dibujo-pe.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, base, calcar, importar pdf, escaneo, plano de piso, desvanecer, recorte, capas, ajustar, abrir pdf
from: aa301d0f
---

## Mokõi tape ojeike PDF página

- **Attach** ({{cmd:PDFATTACH}}) omanteni PDF imagen-icha dibujo rapykére. Nde calcar, ajustar líneas-pe, desvanecer, recortar, ha ojeimprimi hoja ndive. Dibujo ojekuaa avei archivo réra.
- **Import** ({{cmd:PDFIMPORT}}) ojapo página línea, curva, relleno ha texto objetos ordinario dibujo-pe, capas-pe oñembohéva PDF réra. Ikatu nde editar; upe rire PDF ndaikatúi ndoikóiva.

Ojapo {{ui:Open}} ndive PDF-pe, ojeporu ha ndejerovia mokõi tape.

## Omoĩ página

1. Eskribi `PDFATTACH` (térã `PDFATT`) ha eiporavo PDF. Página hetãiterei rupi, eskribi página número.
2. Hapo clic punto de inserción-pe (página esquina inferior izquierda).
3. Eprese {{key:Enter}} página tuichave tamaño-pe, térã eskribi escala: dibujo unidades PDF punto-pe (punto ha'e 1/72 pulgada, upévare 0.3528 pulgada milímetro dibujo-pe).
4. Eprese {{key:Enter}} ndaipóri giro-pe, térã eskribi ángulo.

Página ha'e objeto bloque referencia ojoguáva: mbohasa, rotar, escalar, copiar, eliminar ha omoĩ capa-pe. Capa apagáramo ohecha. Zoom ha página ojapo jey tuichaiterei.

## Calcar

Ojehechauka {{ui:Snap}} ojapóvo, cursor ojejoaju PDF línea-icha-pe: punta, punto medio ha cruces (ha {{ui:Nearest}} ojapóvo ojehechauka). Página-pe letra-icha ojehechaúva ndojejoaju.

## Ajustar

- `PDFADJUST`: **Fade** (0 gui 80 por ciento), **Contrast** (0 gui 100), **Monochrome**, ha **Onoff** ojemboykéva ndojeikéi.
- `PDFCLIP`: ohechauka rectángulo térã polígono página-pe; **Delete** omboguéva recorte.
- `PDFLAYERS`: PDF-pe ikatu oĩ capa-icha. Kommando omoĩ chupekuéra; eskribi número ojepreniva térã ojepe capa mokõi underlay-pe. Archivo-pe ojehecháva apagado oñepyrũ apagado.

## Trazar ha guardar

PLOT ojeimprimi página línea, relleno ha texto-icha (upévare ha'e iporãve ha ojeikuaa). PDF-pe imagen-icha ojehechauka pantalla-pe, ha ndojeimprimíi ko'ẽrõ.

DWG térã DXF 2000 omanteni underlay enlace ramo: archivo réra, página, mboyve oĩha, escala, giro, recorte, desvanecer ha contraste. PDF ta'ãngamby ndojeguerekói dibujo-pe. Dibujo ojepyta jey, eskribi `PDF` ha eiporavo archivo jey; páginas oñehechauka marco-icha peve, ha tamaño verdadero oguerekóma upe rire. Ñandutí DXF (R12) ndoguerekói underlay: omanteni marco ha réra. Ambue programa-kuéra ndojehechakuaa mo'ã oñeha recorte ha escala ojeguardáva.

## Importar página

1. Eskribi `PDFIMPORT` (térã `PDFIM`) ha eiporavo PDF ha página.
2. Hapo clic toque esquina inferior izquierda-pe.
3. Eprese {{key:Enter}} tamaño verdadero-pe, eskribi escala, térã eiporavo **Two points**: página ojapo tamaño verdadero, upéi hapo clic dos punto distancia ikatuhápe ha eskribi distancia real; opavave ojehecha escala.

Línea ojapo línea ha polilínea, círculo ha arco ojehecháta, relleno formas ojapo sólido sombreado, ha texto ojapo texto capa-pe `-TEXT`-pe. Ojapo peteĩ paso deshacer. PDF-pe imagen-icha ndojeimportáiva: eiporavo página. Escaneo (página ha'e imagen anive) ndoguerekói línea ojeimportaséva.

PDF-kuéra ojelee archivo ndojeconfiáva: ndojejapo script; página hetaiterei ojeaparta ha ojehecha ko'ã.
