---
title: Cotar peteĩ plano
summary: Ojagrega lineal, alineada, angular, radio ha diámetro cotas, Continuar ha Base-gui encadena ha texto ojecambia.
keywords: cota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, cadena, encadenar, anotar, herramienta de cota, dónde, encontrar, barra de herramientas, medir, mm, cm, m, km, unidades
from: 9ee65123
---

## Mba'e ojapóta

Cota ojehecha plano: ancho ha altura total, cota cadena peteĩ muro rapykére, muro ojeangula, esquina curvo ha peteĩ ángulo.

Pyrũmbe [Configurar tamaños de cota](topic:dimension-settings) ojeikuaa, plano tuichave jave: cota texto 2.5 unidades del plano altura predeterminado, mm plano-pe michĩ. Ko'ã paso-kuéra-pe, `DIMSCALE` escribí, {{key:Enter}} apretá, `50` escribí ha {{key:Enter}} apretá.

## Mba'e herramienta cota

CadCraft menú estilo-pe (CadCraft oñepyrũ), cota herramienta barra plano rapykére, {{ui:Anotar}} grupo-pe: {{ui:Lineal}}, {{ui:Alineada}}, {{ui:Ángulo [A]}}, {{ui:Radio}} ha {{ui:Diámetro}}. Grupo {{ui:Más}} menú-pe {{ui:Cota continua}} ha {{ui:Cota de base}} oguereko. Botón rapykére puntero ojehai jave ojehechauka mba'e ojapóva.

- {{ui:Dibujo clásico}} térã {{ui:Cinta}} menú estilo-pe, {{ui:Anotar}} pestaña ojeguata: herramienta {{ui:Cotas}} panel-pe oiko. {{ui:Dibujo clásico}} avei {{ui:Inicio}} pestaña-pe {{ui:Anotación}} rupi {{ui:Lineal}} oguereko. Ver [Menús, teclas y mouse](topic:menus-keys-and-mouse).
- Térã comando línea de comandos-pe escribí, plano rapykére, ha {{key:Enter}} apretá: `DLI` (lineal), `DAL` (alineada), `DAN` (angular), `DRA` (radio), `DDI` (diámetro), `DCO` (continua), `DBA` (base).
- Pantalla estrecha-pe barra peteĩ línea: {{ui:Anotar}} ojealcanza hag̃ua lado-pe ojekorʼi.

Longitud milímetros, centímetros, metros térã kilómetros-pe ojehechauka hag̃ua, ver [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Ojehecha mba'e cota-pe

1. `PL` escribí ha {{key:Enter}} apretá.
2. `0,0` escribí ha {{key:Enter}} apretá.
3. `@6000,0` escribí ha {{key:Enter}} apretá.
4. `@1500<60` escribí ha {{key:Enter}} apretá.
5. `@0,2700` escribí ha {{key:Enter}} apretá.
6. `@-6750,0` escribí ha {{key:Enter}} apretá.
7. `C` escribí ha {{key:Enter}} apretá. Contorno ojecierra.
8. `C` escribí ha {{key:Enter}} apretá, círculo ojepyrũ.
9. Hacé clic habitación ryepýpe, muro-gui pe, centro-pe.
10. `600` escribí ha {{key:Enter}} apretá. Ko columna.
11. Hacé clic {{ui:Extensiones}}.

## Lineal: horizontal térã vertical

1. `DLI` escribí ha {{key:Enter}} apretá.
2. `Specify first extension line origin` indicación-pe, extremo izquierdo inferior-pe (Extremo) enganche ha clic.
3. `Specify second extension line origin` indicación-pe, extremo derecho inferior-pe enganche ha clic.
4. Cruz habitación mbykyve mové. Cota oho, horizontal.
5. Cota línea-pe hacé clic.

Historial ojehechauka `Dimension text = 6000`.

Línea donde ojeguata dirección ojekonfirma: mbykyve térã yvate horizontal cota-pe, izquierda térã derecha vertical-pe. Ojeporta hag̃ua, `H` (horizontal), `V` (vertical) térã `R` (girado, upe rire ángulo) escribí ojeguata mboyve.

:::tip
Primer indicación-pe {{key:Enter}} apretá punto ojeporta rehe, upe rire línea, arco, círculo térã polilínea segmento clic. CadCraft mokõi extremo ojejuhu.
:::

## Continua: cota cadena

{{cmd:DIMCONTINUE}} ({{ui:Anotar}} › {{ui:Más}} › {{ui:Cota continua}}, térã `DCO`) última lineal térã alineada cota rire ojeguata, peteĩ-peteĩ upe cota ojeguata oñepyrũ upe extremo-pe.

1. `DLI` escribí ha {{key:Enter}} apretá.
2. `0,0` escribí ha {{key:Enter}} apretá, primer origen-pe.
3. `2000,0` escribí ha {{key:Enter}} apretá, segundo origen-pe.
4. Habitación mbykyve hacé clic ojeporta hag̃ua.
5. `DCO` escribí ha {{key:Enter}} apretá.
6. `4500,0` escribí ha {{key:Enter}} apretá. Segundo cota primer rire, línea mismo-pe.
7. Extremo derecho inferior-pe enganche ha clic. Mbohapy cota cadena ojepaha.
8. Comando ojeʼe hag̃ua {{key:Enter}} apretá.

:::note
Ko'ãpe punto absoluto ojeescribi ojeporta: `@` punto último punto ndeme'ẽva-gui ojemedi, ha último punto upe cota línea ojeporta, cota extremo-pe ndaha'éi. Punto absoluto, enganche térã distancia directa Ortogonal-pe cota cadena-pe seguro.
:::

Escribí `U` ha {{key:Enter}} apretá, cadena última cota ojepe'a comando ojepe'a'ỹre.

## Base: cota peteĩ línea-gui

{{cmd:DIMBASELINE}} ({{ui:Anotar}} › {{ui:Más}} › {{ui:Cota de base}}, térã `DBA`) pyahu cota opa ojemedi upe última cota primer origen-gui, ha peteĩ-peteĩ mboyve ojepyta.

1. `DLI` escribí ha {{key:Enter}} apretá.
2. Extremo izquierdo inferior-pe enganche ha clic.
3. Extremo izquierdo superior-pe enganche ha clic.
4. Cruz habitación izquierda-pe mové ha clic. Cota vertical ojehechauka.
5. `DBA` escribí ha {{key:Enter}} apretá.
6. 60 grado muro upe extremo superior-pe enganche (Extremo) ha clic. Mokõiha cota vertical ojehechauka, primer-gui mboyve.
7. Comando ojeʼe hag̃ua {{key:Enter}} apretá.

## Alineada: ladera línea ojeguahẽva

1. `DAL` escribí ha {{key:Enter}} apretá.
2. Objeto ojeselecciona hag̃ua {{key:Enter}} apretá.
3. 60 grado muro-pe clic.
4. Mboyve mové ha ojeʼe hag̃ua clic.

Texto `1500` ojehechauka: muro rupi ojemedi verdadero longitud.

## Radio ha diámetro

1. `DRA` escribí ha {{key:Enter}} apretá.
2. Columna círculo-pe clic.
3. Cruz mové. Línea centro gui cruz-pe ojeapunta.
4. Texto ojeʼe hag̃ua clic.

Texto `R600` ojehechauka. {{cmd:DIMDIAMETER}} (`DDI`) mismo ⌀ signo ha diámetro-pe ojapo.

## Ángulo

Ko muro-kuéra peteĩ polilínea-pe, upévare vértice rupi ojemedi. (Mokõi línea separada apytépe, línea-pe clic ikatu.)

1. `DAN` escribí ha {{key:Enter}} apretá.
2. `Select arc, circle or line, or Enter for a vertex` indicación-pe {{key:Enter}} apretá.
3. `Specify angle vertex` indicación-pe esquina inferior derecha enganche ha clic.
4. `Specify first angle endpoint` indicación-pe esquina inferior izquierda enganche ha clic.
5. `Specify second angle endpoint` indicación-pe 60 grado muro upe extremo superior enganche ha clic.
6. Cruz habitación adentro, esquina rapykére mové ha clic.

Texto `120°` ojehechauka, esquina adentro ángulo. Esquina otro lado-pe ojeʼẽ jave, ambue lado ángulo ojemedi. Primer indicación-pe arco clic ojedimensiona arco ángulo, térã mokõi línea clic ojemedi apytépe ángulo.

## Texto ojecambia

Ipropio texto ojeescribi hag̃ua, cota ojeʼe ante `T` escribí ha {{key:Enter}} apretá, upe rire texto escribí. Ne texto-pe `<>` medida valor ha'e: `<> TYP.` `6000 TYP.` oiko. Vacío línea-pe {{key:Enter}} apretá, medida valor ojeguerekóta.

Cota ya ojapo ojecambia:

1. Clic peteĩ.
2. Pane derecho-pe {{ui:Texto}}-pe escribí. Hendaitépe medida valor.
3. {{key:Enter}} apretá.

## Cota geometría-gui ojeguata

Cota punto ojemanduʼa. Grip ojeguata térã objeto ojemedi-gui objeto ojeguata, rotá, escalá jave, cota ojemedi jey. Geometría ojeguata cota ndojeguata jave, cota ipunto oñongatu.

## Ojekaru mba'e

- **Texto flecha michĩ térã tuichave.** Escala general configurá: ver [Configurar tamaños de cota](topic:dimension-settings).
- **"Pick a point inside the angle you want to measure."** Ángulo cota-pe clic punto mokõi lado peteĩ-pe oiko. Punto ángulo adentro mové.
- **Continua ojepyrũ cota ndaha'éiva.** Sesión-pe últimamente ojapo lineal térã alineada cota-gui ojeguata. Ojeguata cota primero ojapo térã ojapo jey.
- **Cota vertical.** Lado-pe ojeʼẽ. `H` escribí ojeʼe ante.
- **Pies ha pulgadas.** Plano longitud formato {{ui:Arquitectónico}} primero ojeconfigura, térã cota {{ui:Formato}} {{ui:Propiedades}}-pe: ver [Pies y pulgadas en cotas](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Número unidad ndaha'éi.** {{ui:Unidades en el texto}} elegí: ver [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
