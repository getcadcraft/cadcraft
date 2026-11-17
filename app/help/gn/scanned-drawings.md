---
title: Escaneado plano ha trazado
summary: Omoĩ peteĩ hoja escaneada, escala ha cuadrado, ombojeguáva, omboguejy peteĩ parte, ejepe'a líneas ndive ha trazarlo líneas ha arcos-pe.
keywords: escaneo, plano escaneado, raster, tiff, jpeg, png, escala, alinear, enderezar, eliminar manchas, umbral, blanco y negro, recortar, borrar, trazar, vectorizar, ajuste, arcos, sombreado, planos en papel, planos viejos, scanattach, scantrace
from: 36227e5b
---

## Papel hoja-gui objetos ojehai

Plano escaneado ha'e peteĩ imagen. CadCraft oguarda imagen ojome'ẽva ha nunca ndojejapói: peteĩ-peteĩ paso limpieza omoĩ imagen pyahu, peteĩ-peteĩ deshacer paso, ha {{cmd:SCANINFO}} omombe'u archivo original ha paso ojapóva. Ndojeity opa ndaha'éi ndojeporúi ko'ẽrõ: limpieza ha trazado ha'e imagen procesamiento ojapóva, ha oĩ hendaguépe.

1. **Omoĩ.** {{cmd:SCANATTACH}} ombohasa PNG, JPEG, TIFF (peteĩ página, térã opa página archivo multipágina) térã PDF página ha'e imagen. Oheka página, izquierda inferior esquina ha ancho. PDF página-pe oheka avei mboyve pixel por pulgada oñemoĩ página-pe.
2. **Escala.** {{cmd:SCANSCALE}}: ejepe'a mokõi punto escaneo-pe, upéi eskribi pe distancia ojoguáva omoĩ. Hoja oñemoĩ escala primer punto ryepýpe.
3. **Alinear.** {{cmd:SCANALIGN}}: ejepe'a mokõi punto escaneo-pe ha mokõi lugar oñemoĩ jave; hoja omoveve ha oñemboguapy, escala avei, No nderesponde-na peve.
4. **Cuadrado.** {{cmd:SCANDESKEW}} omedi ángulo hoja mborevi líneas oĩ, ohechauka ha mboyeʼi. Ejepe'a térã eskribi tuichave, hoja oñemoĩ. Hoja líneas mborevi pocoʼỹva omoĩ aviso: ejecheka ángulo ejepe'a mboyve.
5. **Limpieza.** {{cmd:SCANCLEAN}} omoĩ hoja blanco ha negro (Auto oñemoĩ papel primero; Adaptive papel cambio ojeguerekoháicha; Level peteĩ número opa hoja-pe) ha omboguejy mancha ejecheha tamaño peve.
6. **Recortar ha borrar.** {{cmd:SCANCROP}} oñongatu peteĩ ventana. {{cmd:SCANERASE}} omboguejy peteĩ rectángulo, peteĩ polígono térã lazo (ejepe'a ha ejeasegura): sello, nota, kafe mancha.

Limpia imagen ha'e mba'e guardado DWG-pe (IMAGE ha IMAGEDEF, imagen archivo plano rendápe, opa imagen ojogua).

## Ajuste escaneo líneas-pe

{{cmd:RASTERSNAP}} oñemoĩ (ojeporúva), objeto ajuste ojuhu avei líneas blanco ha negro escaneo-pe: líneas punta, medio, esquinas ha cruces, ojehechaukáva ajuste marca oikóva. Hoja puntero ryepýpe oñemboheta ejeasegura jave; zoom ejepe'a porã pixel peteĩ pantalla pixel mbohapy. Línea ojejapova'ekue mboheta parte mboyve oñemboheta hendápe.

## Trazado

{{cmd:SCANTRACE}} hoja líneas oñemoĩ líneas ha arcos peteĩ capa pyahu-pe (SCAN-TRACE), peteĩ deshacer paso, escaneo imagen iñapytépe. Ejepe'a:

- **Tolerancia:** kuánto oĩ trazado línea térã arco hoja escaneo línea-gui dibujo unidades-pe (informe omoĩ pixel avei). Tolerancia tuichave opa tembe'y ojehechakuaa; pe mboyve pocoʼỹva línea ha arco tuguĩvéva.
- **Ventana:** hoja esquina térã opa hoja.
- **Arcos:** mboyve líneas añete.
- **Sobras:** trazado ndojejapóva oñemoĩ caja capa-pe ikatu oñemboty, térã ndojejapói.

Trazado oheka trazo centro, oñeñongatu, ajusta líneas tuguĩ ha arco círculo ndive, ojunta líneas ojeguebyrýva ambue línea cruzamiento-gui, omoĩ casi nivel ha casi plomo líneas nivel ha plomo porãite, ha oñemboguapy esquinas. **Texto ha sombreado oiko raster:** letra tamaño ojekuaáva omoñe'ẽ, ha línea corta paralela ndive sombreado omoĩ.

Oñemomaña jave omombe'u mbovy línea ha arco ojapo, tolerancia, ha mbovy raster ojeguerohory. **Pixel ome'ẽ ko'ã, tolerancia rupi, ha ndaha'éi jepe'a ko'ẽrõ.** Escaneo ndive ejemaña: trazado ikatu ojehecha línea chiquitĩ, mokõi línea ojejuntáva, térã línea mancha-pe. Escaneo limpia primero (cuadrado, blanco ha negro, mancha ndaipóri) ha resultado porãve.

## Ndojeleéiva

TIFF archivo mosaico-pe, BigTIFF, TIFF JPEG térã deflate compresión, Group 3 fax ha colores apartado planos-pe ndojeporomboaje; mensaje omombe'u; guardá jey strips-pe LZW, PackBits, Group 4 térã compresión ndaipóri. Interlaced PNG avei ndojeporomboaje. Archivo 128 MB térã 100 millón pixel ju ndojeporomboaje, ha trazado ventana 64 millón pixel peve oikóta.
