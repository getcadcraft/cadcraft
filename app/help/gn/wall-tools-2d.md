---
title: Muro 2D-kuéra: formas, cortes, desfases ha bloqueos
summary: Dibujá muro rectángulo, polígono ha arco, cortalos ha ojoajúta, movelos peteĩ dimensión rupi, ha bloqueá peteĩ muro ambue muro térã línea de cuadrícula-pe. Mba'e herramienta ko'ã BimCraft muro-kuérape.
keywords: muro, barra de muros, botones de muros, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de unión, inglete, a tope, en escuadra, candado, agarre, arrastrar extremo, girar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unión, no permitir unión, bloqueo, línea de cuadrícula, dividir, separación, desfase, línea de ubicación
from: f41e7433
---

Ko'ã herramienta ombaapo muro 2D-kuérape `WALL`-gui (ehecha "Dibujá muro inteligentes, puerta ha ventana 2D-pe"). Ojeporu regla mba'e ha BimCraft muro herramienta-kuéra, upévare muro ojapo ijeheguáicha ha'e app-kuéra-pe.

## Herramienta-kuéra oĩha

- Barra de herramientas-pe, {{ui:Muros}} grupo-pe oĩ {{ui:Muro}}, {{ui:Rectángulo}}, {{ui:Dividir}} ha {{ui:Desfase}}. Ijeporúvo {{ui:Más}} menú-pe oĩ opa ambue muro herramienta, peteĩteĩ ícono ndive.
- Ribbon menú estilo-pe, {{ui:Muros}} pestaña-pe oĩ panel-kuéra {{ui:Dibujar muros}}, {{ui:Cortar}}, {{ui:Fijar y modificar}}, {{ui:Mantener}} ha {{ui:Unir}}.
- Layout-pe, herramienta fila ha caja de herramientas ohechauka {{ui:Muros}} grupo ko'ẽ.
- Ikatu avei escribí peteĩ comando ko'ape ojehechaukáva.

## Uniones oñeguardáva

Muro peteĩ extremo oĩ hag̃ua ambue muro-pe, CadCraft oguardá upe unión ambue muro ndive. Ndokuaái rejúva unión-kuéra ojejuhúva mboyve ha extremo-kuéra oĩva. Upévare:

- Muro ojoaplo muro reñemoveva ndive oheka ha oĩ ojoaplo. Iextremo-kuéra oñemboroky ijetu'úva rapykue, ha ndaipóri mba'e oñemoĩ.
- Peteĩ muro extremo agarre rupi emboguapy, muro ojoaplo upépe avei ijeguata ohechakuaa. Iextremo oñemboroky ijetu'úva rapykue ojoaplo hag̃ua muro emboguapýva-pe, upévare extremo oĩ upe línea-pe, ndaha'éi mborayhu ojehecháva mboyve. Vista ohechauka mokẽ oĩ. Muro ojoaplo emboguapýva-pe ojeguata ijetu'úva rapykue. Extremo emboguapýva ojapo ha'e ipopáva, ha muro ojoaplo upépe oñemoĩ ndive.
- `ROTATE` muro ojoaplo-pe ojapo upéicha avei: ijeguata-kuéra extremo-kuéra oñemboroky ijetu'úva rapykue muro omboguapýva-pe.
- Esquina oñemboroky hag̃ua, eskoge muro mokõi oñeñaajha ha emboguapy agarre esquina-pe. Muro mokõi oĩ esquina-pe ha mokõi oñemboguapy. Mboguapy ojoaplo muro ndajambuéi.
- Ejepyta {{key:Alt}} agarre oĩha pe ojeporúva ojaraha, unión oñembotyky hag̃ua: muro oĩ emoĩva-pe ha ndaipóri mba'e ojeguata.
- Emboguapy ojoaplo muro-pe iporã rupi ijoavy iporã ryvarã, ndojapói.
- Muro ndejapova'ekue {{ui:No permitir uniones}} (`D` `WALL`-pe), térã Propiedades-pe apagápe ({{ui:No permitir unión al inicio}}, {{ui:No permitir unión al final}}), ojoaplo ndaipóri extremo-pe, ojoaplo ambue muro ndive jepe, peve ejepe'a peve.
- `WALLDISJOIN` ({{ui:No permitir unión}} {{ui:Muros}} grupo-pe) ojapo upéicha: eheja muro extremo oĩhágui, unión ndaikatúi; heja jey ha unión oikatu.
- Plano kuera-pe unión oguardava'ỹ oĩ. Ejapo ha'e mbeguekuaáramo nde ojapo ojepyrũ, CadCraft oheka ha oguardá unión peteĩ jey. `WALLJOINS`-pe ojapo ipahápe.
- DWG ha DXF archivo-pe unión oĩ muro-pe. CadCraft oñeha'ã oguardavaʼekue. Programa oguardavaʼerã ndaipóri ndojapói muro bloque-kuéra ha unión ojehepyhýi. Ambue programa-pe muro mokõi ojejuhu ha unión ojeheja.

## Esquina-pe unión estilo

Esquina mokõi muro extremo-extremo oĩha ojapo inglete-kuéra, eskoge ambue estilo ndaikatúi.

- `WALLJOINSTYLE` ({{ui:Estilo de unión}} {{ui:Muros}} grupo-pe): eheja esquina. Peteĩteĩ heja oho próxima estilo-pe: {{ui:Inglete}}, {{ui:A tope}}, {{ui:En escuadra}}, upéi {{ui:Inglete}} jey. Ejapo `T` ha oiko mokõi muro-pe upe ejepyta esquina-pe. {{key:Enter}} ejepyta ha'e oñemboty. Peteĩ comando ojapo peteĩ paso deshacer.
- {{ui:A tope}}: peteĩ muro oho ambue muro ta'ýrõ peve, ha ambue ojapo ojeitíva ipuku-pe. {{ui:En escuadra}}: upéicha avei, pero muro oho ijeitépe ojapo ramo escuadra. Ángulo recto-pe mokõi oiko ojoavy.
- Muro Propiedades-pe: {{ui:Estilo de unión al inicio}}, {{ui:Estilo de unión al final}}, ha {{ui:Pasa de largo al inicio}}, {{ui:Pasa de largo al final}}.
- Estilo oguardá muro mokõi ndive ha oguahẽ DWG ha DXF-pe. Muro copia ndaiporúi.
- T unión-pe ndaikatúi eskoge estilo: muro ijeitépe ojeheʼẽva oho ta'ýrõ. Esquina muro mbohapy térã heta oñemboheta oĩ inglete. Iñangarekópe ángulo (30 grado mboyve) ha muro mokõi peteĩ línea-pe avei.

## Ojapo muro formas

Peteĩteĩ ojapo muro peteĩ paso deshacer-pe, esquina-kuéra ojoaplo. `WALL`-pe, `O` omoĩ ojapo desfase (mboy kuaa muro nde eheja-kuéra ita'ýrõ), ha `D` ojapo ojoaplo ndaipóri muro ojapova'ekue ha'e mboyve.

- `WALLRECT` (`WR`): mokõi esquina tapykue, `RECTANG`-icha.
- `WALLROT`: primer lado, upéi lado ambue mbohapy, rectángulo ángulo oimeraẽva-pe.
- `WALLPOLY` (`WP`): lados cantidad (3 ha 64 peve), centro, `I` inscripto térã `C` circunscripto, upéi radio, `POLYGON`-icha.
- `WALLARC` (`WARC`): centro, comienzo, final. `D` arco ambue tape-pe ojapo.
- `WALLTAN`: eheja muro extremo oĩhágui, upéi arco final, oho upe muro-pe.
- `WALLPICK`: eheja línea térã polilínea ha ehai oĩhaguéicha ambue línea ojoaplo hag̃ua.
- `WALLTRACE`: eheja línea ha muro cerrado mbytépe, muro ojapo hag̃ua pe ipuku'ỹvéva ryepy.

Plano muro ndaha'éi kurusu, upévare arco ojapo muro michĩ 15 grado-pe. Ojoaplo kuñai esquina icha.

## Muro cortes

- `WALLSPLIT` (`WS`): eheja muro, upéi punto. `C` ojapo oĩhágui ambue muro, `G` omoĩ separación parte-kuéra mbytépe, `F` ojapo extremo corte libre unión ndaipóri. Primer parte oguarda muro lugar, puerta ha ventana ojapo parte ndive. Corte puerta térã ventana ári ndaikatúi.
- `WALLSPLITGAP` ({{ui:Dividir con separación}}): upe mismo corte, pero separación ojerurevégui primero.
- `WALLDELSEG`: eheja muro, upéi pieza mokõi extremo heja hag̃ua.
- `WALLREJOIN`: eheja parte mokõi peteĩ muro-pe, peteĩ jey hag̃ua.

## Muro dimensión rupi ojoaplo

- `WALLDIM`: eheja cota lineal térã alineada muro peteĩ-gui ambue-pe, upéi ejapo valor pyahu. Muro tapykue ijeitépe ojoaplo, muro ñepyrũ oñeguerekóva oiko, ha muro ojoaplo ojeguata.
- `WALLOFFSET` (`WO`): eheja muro, upéi lado ojoaplo hag̃ua (`D` distancia ojapo, `C` copia ojapo).
- `WALLSTRETCH`: ventana muro extremo-kuéra ári, upéi punto base ha punto mokõiha.
- Propiedades-pe, {{ui:Longitud}} ojapo ijoapy ojeguerekóva ha muro ojoaplo tapykue ojeguata, ha {{ui:Espesor}} pyahu ojapo ojeguata {{ui:Línea de ubicación}} ojeporu (ñepyrũ ijeitépe, ijeitépe ambue térã medio).

## Muro bloqueá

Bloqueo oĩ muro archivo-pe. Muro peteĩ bloqueado oñemboguapy, ambue ojeguata. Peteĩ ojapo muro mokõi ojambue ojeháicha, ndaikatúi ndaipóri mba'e ojapo.

- `WALLHOLD`: muro peteĩ ambue muro-pe bloqueá. `A` ipahápe ambue muro línea-pe oñemoĩ, `K` ojeguerekóva distancia ojeguerekóva.
- `WALLHOLDDIM`: mokõi muro paralelo mbytépe distancia bloqueá.
- `WALLGRID`: muro peteĩ cuadrícula línea-pe bloqueá (línea capa cuadrícula-pe, etiqueta texto extremo-pe), línea rupi térã peteĩ extremo línea-pe. Línea-pe bloqueado muro ojeguerekóva distancia mantiene. `GRIDMOVE` rupi cuadrícula línea omboguapy, muro opa ojeguata, ijeguata-kuéra ndive. Cuadrícula línea rupi oĩva muro bloqueo'ỹ jepe opa ojeguata, ha extremo-pe oĩva ha'e extremo rupi ojeguerekóva.
- `WALLHOLDS` bloqueo-kuéra ohechauka. `WALLUNHOLD` muro-gui bloqueo-kuéra oheja.
- Peteĩteĩ bloqueo plano-pe candado michĩ ohechauka: muro medio-pe térã extremo-pe cuadrícula línea-pe bloqueado. Eheja candado ojeheja hag̃ua upe bloqueo.

## Mba'e ndaha'éi kóre

Bloqueo muro centro línea rupi ojapo. Ko'ã muro ndoguerekói capa, upévare unión-pe prioridad capa ndaipóri, ha muro ndoñemboheta (arco rehe ehecha). Heta plano-pe herramienta-kuéra ndojapói, ha ambue CAD programa ndive ndojehechái.
