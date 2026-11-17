---
title: Registrar heta'iva escaneo peteĩ rupi
summary: Omoĩ escaneo ojejapova'ekue heta tenda rupi peteĩ marco pe ndive, pareja de puntos ojeporavóva térã meta ojeporavóva rupi, afinar ICP rupi, guardar pe registro proyecto-pe ha omboaje pe nube registrada LAS térã E57 rupi. Pe mandato ha'e REGISTERSCANS.
keywords: registrar, registro, escaneos, nube de puntos, icp, punto más cercano iterativo, metas, pares de puntos, transformación rígida, alinear, combinar, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Mba'e reñe'ẽta

Heta escaneo peteĩ tenda rehegua (cada uno ojejapova'ekue peteĩ escáner tenda rupi) oñepyrũ sa'ỹi hendápe ijehegui coordenadas. Registrálo: omoĩ peteĩ ubicación peteĩ-peteĩ escaneo-pe, ikatu ojoguáicha peteĩ marco pe ndive; upéi guardá upe proyecto-pe ha omboaje pe nube registrada peteĩ archivo LAS térã E57 pe.

## Omoĩ escaneo

1. Ejepe'a pe diálogo (eskribi `REGISTERSCANS` (térã `REGSCAN`)). {{ui:Agregar escaneos…}} ombohasa archivo LAS, LAZ, E57, PLY, PCD, PTX, PTS térã XYZ, térã ejuga chupe pe diálogo-pe. Escaneo ojapo unidades hetaiva oñemboykéta ojehechaukáva nota rupi: peteĩ-peteĩ ombojuaju mboyve.
2. Ejepe'a {{ui:Escaneo a mover}} ha {{ui:Colocar contra}}. Pe imagen ojehechauka opa escaneo marco pe, peteĩ-peteĩ color rupi: {{ui:Planta}}, {{ui:Frente}} térã {{ui:Lateral}}; ejuka ejepe'a rupi, pe rueda rupi ejejeroka zoom.
3. **Pareja de puntos rupi.** Ejepe'a {{ui:Elegir un par}}, upéi peteĩ punto pe escaneo ndive ojemovérava, upéi upe mismo lugar hembiapo ambue escaneo-pe (peteĩ esquina, peteĩ meta, pe columna mbytépe). Eja'o mboapy jey, puntos ndaipóri peteĩ líneapeguáva ha oñemoĩ hasy jave. Ejepe'a {{ui:Colocar por pares}}: pe escaneo oñemoĩ least-squares rupi, ha **Izquierda** ohechauka mávapa pareja peteĩ-peteĩ ndojuhúi. Pareja ojehechaukáva mbaꞌe tuichaitereíva: ojepe'a cruz rupi ha omoĩ jey.
4. **Meta rupi.** Te'õ oĩ pe punto ijeporãva coordenadas (metas ojesurveyádo), ejepe'a {{ui:Elegir, después escribir destino}}, ejepe'a pe punto pe escaneo-pe, ha eskribi meta rehegua X, Y ha Z pe fila-pe. Pareja ha meta tipeado oñembojoaju porãite.

## Afinar ICP rupi

Pareja omoĩ peteĩ ubicación aproximada. {{ui:Afinar}} omove pe escaneo peve peteĩ-peteĩ superficie ojoguáicha ambue escaneo-pe: umi-pe **punto a punto**, upéi **punto a plano**. Pe tabla ohechauka opa paso ha iñe'ẽrendu error ha mávapa punto ojoguáva; upe línea ojoavýicha ohechauka error ho'áva. {{ui:Detener}} omboty pe corrida paso ojehayhúvape ha oñongatu mba'épa oñeguerohory; {{ui:Deshacer}} oipe'a opa corrida (térã umi última ubicación) ; {{ui:Restablecer}} omoĩ pe escaneo archivo coordenadas-pe.

Ikatu ICP ho'ahaguépe laptop-pe, oñemboheta puntos ({{ui:Puntos usados}}, 5.000 a 60.000) ha ndohechái matchs ojoguejýva {{ui:Distancia máxima de coincidencia}} (ndive 5% pe escaneo tamaño, ojeiporúva pe asentamiento-pe). Ojerokyhýi peteĩ ubicación aproximada apopyre: escaneo oñemoĩ ndaipóri ojoguáiva ojehechauka ndojoguái. Superficie ojehecháva plana térã tuguĩ ndojejapói peteĩ posición iñapytépe; upe jave omoĩ pareja.

## Guardar ha omboaje

- {{ui:Guardar proyecto}} oñemoĩ peteĩ archivo `.ccscans.json` michĩ: peteĩ-peteĩ escaneo-pe pe nombre, tamaño ha peteĩ huella de pe 64 KB primero, ha ikatu transformación. Ndaiporiri puntos. {{ui:Abrir proyecto…}} oheka pe archivo escaneo referencias rupi (pe archivo oñemoĩ mboyve) ha oguerekoha opa transformación.
- {{ui:Exportar LAS}} ha {{ui:Exportar E57}} oñemoĩ peteĩ archivo opa escaneo ojoguáva ijehegui registrado lugar-pe. Puntos ndojejapóiva originales-pe; transformación oñemoĩ omboaje mboyve. Con {{ui:Leer cada punto de los archivos}} ojepe'a, cada archivo ojehecha jey cada punto-pe (peteĩ escaneo-pe 20 millón peve); ndaipóri ojepe'a, tenonde ohechaukáva viewer-pe ojegua.
- {{ui:Mostrar nube registrada}} (CadCraft) oñemoĩ LAS ha oñemboguapy plano iñapytépe ijehegui coordenadas-pe, opa nube ojogua.

:::note
Ndaipóri oñembojuaju ñani. Registro oñehapykue archivo ijehegui unidades rupi ha oñongatu milímetro: LAS oñemoĩ escala ojoguáva rupi (0,1 mm peve), E57 doble rupi. Sistema de coordenadas oguerekoha LAS-pe tenonde opa escaneo oguerekoha EPSG código peteĩ. E57 escritor ore ro'ã; oñemoĩ jepe'a ha'e heko peteĩ leedor ndive ha libE57Format ndive.
:::
