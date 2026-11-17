---
title: Mover, copiar, rotar, escalar, simetría, estirar y matriz
summary: Ojapo mesa ha silla ambiente pype, ojeporu comandos básicos de modificación con punto base, distancia escrita ha deshacer.
keywords: mover, copiar, rotar, escalar, simetría, estirar, matriz, unir, matchprop, igualar propiedades, pintor, arrayrect, arraypolar, matriz polar, borrar, descomponer, deshacer, rehacer, punto base, desplazamiento, modificar, alinear, distribuir, alinear en línea, espaciar por igual
from: 8eaeee6c
---

## Mba'e ojapóta

Peteĩ mesa ha peteĩ silla, ojepapa mesa ryguépe, ojerotaaháva, ojeespejoháva ha ojeajustáva tamaño. Tapiángipe ojeporu {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} ha {{cmd:UNDO}}.

## Ojapo pieza

1. Ehai `REC` ha eprésiona {{key:Enter}}, ehai `0,0` ha eprésiona {{key:Enter}}, upéi ehai `@1800,900` ha eprésiona {{key:Enter}}. Ko ha'e mesa.
2. Ehai `REC` ha eprésiona {{key:Enter}}, ehai `300,-700` ha eprésiona {{key:Enter}}, upéi ehai `@450,450` ha eprésiona {{key:Enter}}. Ko ha'e silla, mesa ryguépe.
3. Eclikea {{ui:Extensiones}}.

## Mover: punto base, upéi segundo punto

Cada mover, copiar, rotar ha escalar oñepyrũ peteĩ **punto base**: ko punto ojeguerekóva térã ojerotaáva.

1. Eclikea silla ojeselecciona hag̃ua.
2. Ehai `M` ha eprésiona {{key:Enter}}. Historia ohechauka `1 found`.
3. `Specify base point` ndive, ojeajusta silla ñemongeta yvate-izquierda ruguipe (Endpoint) ha eclikea.
4. `Specify second point` ndive, ehai `@0,200` ha eprésiona {{key:Enter}}.

Silla ojupi 200, mesa rapykuéri.

:::tip
Ehai `D` `Specify base point`-pe ojapo hag̃ua desplazamiento: CadCraft upéi ohaʼaséva `Specify displacement`, ha ehai mboy ariré ha mboy ári, peteĩha `0,200` (`@` ndaikatúi).
:::

## Copiar, mboy jey ndaipórigui

1. Eclikea silla.
2. Ehai `CO` ha eprésiona {{key:Enter}}.
3. Ojeajusta silla ñemongeta yvate-derecha ruguipe ha eclikea punto base-ramo.
4. Ehai `@600,0` ha eprésiona {{key:Enter}}. Peteĩ copia ojuhu 600 izquierda-pe.
5. Ehai `@600,0` mboy jey ha eprésiona {{key:Enter}}. Mbohapy copia ojuhu 1200 original-gui.
6. Eprésiona {{key:Enter}} ojeguejy hag̃ua comando.

{{cmd:COPY}} oñeʼẽ tenonde peẽ eprésiona {{key:Enter}}. Copia opyta punto base ha ehecha punto eeha pe ndive. Mbohapy `@` ehai ohechakuaa ultimo punto, upéi `@600,0` mokõi jey omoĩ copia 600 ha 1200-pe. Ehai `U` ha eprésiona {{key:Enter}} ultimo copia ojehepa hag̃ua, comando ndejeguejýi.

Mesa mboypýpe ehecha mbohapy silla peteĩ hilera pe.

:::tip
{{cmd:COPY}} ojeporu peteĩ plano ryepy, punto base rupi. Objeto ohóva ótro plano térã pestaña-pe, térã upéi pegar hag̃ua, ojeporu clipboard: {{key:Mod+C}}, upéi {{key:Mod+V}}. {{key:Mod+D}} omoĩ peteĩ copia ojeruva punterorõ. Ehecha [Copiar, pegar y duplicar](topic:copy-paste).
:::

## Espejar hilera otro costado-pe

1. Ehai crossing (derecha izquierda-pe) mbohapy silla ruguipe, mesa ndojohéi.
2. Ehai `MI` ha eprésiona {{key:Enter}}.
3. `Specify first point of mirror line` ndive, ojeajusta mesa izquierda costado ruguipe (Midpoint) ha eclikea.
4. `Specify second point of mirror line` ndive, ojeajusta mesa derecha costado ruguipe (Midpoint) ha eclikea.
5. `Erase source objects? [Yes/No] <N>` ndive, eprésiona {{key:Enter}} oñongatu hag̃ua.

Mesa mboypýpe mbohapy silla ha mesa ári mbohapy espejo ojuhu. Texto espejo selección-pe oiko legible: espejo-pe omoĩ, ndaha karu-pe jeporukuaa.

## Rotar peteĩ silla

1. Eclikea silla mesa mboypýpe derecha-gua.
2. Ehai `RO` ha eprésiona {{key:Enter}}.
3. Ojeajusta silla ñemongeta yvate-derecha ruguipe ha eclikea punto base-ramo.
4. Ehai `90` ha eprésiona {{key:Enter}}.

Silla rotaráma 90 grado punto base-gui contrario reloj-pe. Ángulo negativo ojehapo reloj-pe. Ehai ndaipórirõ, eclikea mboy punto: ángulo oñemedí punto base-gui ko punto peve.

## Escalar mesa

1. Eselecciona mesa.
2. Ehai `SC` ha eprésiona {{key:Enter}}.
3. Ojeajusta mesa ñemongeta yvate-izquierda ruguipe ha eclikea punto base-ramo.
4. Ehai `1.2` ha eprésiona {{key:Enter}}.

Mesa 20% tuichave, punto base-gui ojeúva. Factor 1 guýpe ijyvatevéva omboguasúva.

:::note
Eclikea punto ehai rõ factor escala-pe, factor oikóva distancia punto base-gui ko punto peve. Eclikea peteĩ unidad plano rupi oguerohóva factor 1. Ehai número, ojeporu mayormente.
:::

## Deshacer ha rehacer

- {{key:Mod+Z}}, {{ui:Deshacer}} botón térã `U` ha {{key:Enter}} omboguejy comando ultimo. Comando entero peteĩ paso: {{cmd:COPY}} ojapo cinco copia deshacer ojehepa opa cinco.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, {{ui:Rehacer}} botón térã `REDO` omomba jey.
- Historia ohechauka mba'e deshacer ojapo ("Undid COPY").

CadCraft ñongatu 500 paso ultimo. Capa configuración (on, freeze, lock, color) ndaha edición, ndaikatúi deshacer.

## Estirar ambiente mboypýpe

{{cmd:STRETCH}} (`S`, térã {{ui:Estirar}}) ojeporta solo ventana crossing ryepýpe ohóva: esquina ha línea punta ryepýpe ojeruva, ambue oiko tekoitépe, ambiente tuichavéva oĩ mboypýpe.

1. Ehai `S` ha eprésiona {{key:Enter}}.
2. Ehai ventana derecha izquierda-pe pared derecha ruguipe, ojehapo pared esquina ha ambue cosa oñemoĩvape.
3. Eprésiona {{key:Enter}}.
4. Eclikea punto base, upéi ehai `@600,0` ha eprésiona {{key:Enter}}.

Rectángulo 600 tuichave; pared-pe ojeñemoĩ línea ohupytýva pared-pe oñemoĩ jey. Arco peteĩ punta ryepýpe ohupytýva oñongatu iterovi; círculo ha texto ojerokuaáva oiko ryepýpe, cota oanota mbohapy distancia. Objeto peteĩ peteĩ ojeselecciona ventana ndaipórirõ ojeruva solo.

Selección ojapo mboyve ohechauka: ehai ventana crossing (térã lazo crossing) pared ruguipe comando ndojapóirõ, upéi ehai `S`. STRETCH ohechakuaa selección ha ohechauka ventana ohaʼévape, ojapo ramo ojeruvaitéramo ventana ndive comando promptpe.

## Matriz: hilera ha columna, térã círculo ryguépe

{{cmd:ARRAY}} (`AR`, térã {{ui:Matriz}}) ojeporu selección cuadrícula térã círculo-pe.

1. Eselecciona silla ha ehai `AR`, eprésiona {{key:Enter}}. Eprésiona {{key:Enter}} Rectangular-pe.
2. Previa 4 columna ha 3 hilera ohechauka. Ehai `COU`, eprésiona {{key:Enter}}, upéi `5` columna-pe ha `2` hilera-pe.
3. Ehai `S`, eprésiona {{key:Enter}}, upéi `600` columna apytépe ha `-900` hilera apytépe (negativo ojupi).
4. Eprésiona {{key:Enter}} copia ojapo hag̃ua.

Silla anillo mesa ryguépe, ehai `PO` (Polar), eclikea mesa punto central, ha omoĩ `I` (ítems), `F` (ángulo relleno: 360 ipahápe, 180 mitãrõ) ha `ROT` (copia ojerotaápa punto central-pe). {{cmd:ARRAYRECT}} ha {{cmd:ARRAYPOLAR}} ndojapói pregunta.

## Unir piezas peteĩ polilínea-pe

{{cmd:JOIN}} (`J`, térã {{ui:Modificar}} › {{ui:Más}} › {{ui:Unir}}): eselecciona línea, arco ha polilínea abierta ojehupytýva punta, eprésiona {{key:Enter}}. Ojeguerekóta peteĩ polilínea, cerrada ojehasaváramo entero, upéi ojeoffsetéta peteĩ jeýpe. Línea peteĩ línea ojeguerekóta ndaipórigui hiato-pe, arco peteĩ círculo ojapo arco térã círculo.

## Igualar propiedades

{{cmd:MATCHPROP}} (`MA`, térã {{ui:Modificar}} › {{ui:Más}} › {{ui:Igualar propiedades}}): eclikea objeto ohóva ojeporu hag̃ua aspecto, upéi eselecciona objeto ojeruva ha eprésiona {{key:Enter}}. Oguerekóta capa ha color; texto altura, cota tamaño, sombreado patrón. Ehai `S` (Configuración) segunda pregunta-pe ojejoaʼỹ hag̃ua.

## Alinear objeto

**Por punto.** {{cmd:ALIGN}} (`AL`, térã {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear}}): eselecciona objeto ha eprésiona {{key:Enter}}, upéi
eclikea punto objeto ruguipe (fuente) ha punto ohóva (destino).

- Peteĩ pár ojapo moveha. Eprésiona {{key:Enter}} `Specify second source point` ndive opa hag̃ua.
- Mokõi pár rotakuaa, upéi línea mokõi fuente punto apytépe oñemoĩ línea mokõi destino punto apytépe. CadCraft upéi `Scale objects based on alignment points?` ohaʼaséva: `Y` ojapo tuichave térã michĩ.
- Mbohapy pár espejo ojapo, mokõi punto línea ambue costado-pe oĩramo.

**Bordes ha espacio.** {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear y distribuir}} (térã `ALIGNPANEL`) peteĩ panel michĩ ohechauka plano ári. Eselecciona objeto, upéi:

- {{ui:Alinear a}} ndive ehai ojeʼẽ hag̃ua mba'épe alinea (selección entera, primero térã último objeto, térã punto eclikeáva) ha eclikea {{ui:Izquierda}}, {{ui:Centro}}, {{ui:Derecha}}, {{ui:Superior}}, {{ui:Medio}} térã {{ui:Inferior}};
- térã ojeporu {{ui:Espacios iguales}} térã {{ui:Centros iguales}} ha eclikea {{ui:A lo ancho}} térã {{ui:Arriba y abajo}}: objeto ryepýpe mokõi oiko, ambue apytépe espacio igual (mbohapy objeto mínimo).

Clic peteĩ ha peteĩ paso deshacer, selección oiko, ámbue ojehai jey hag̃ua. Objeto ojecontaha bounding box, UCS-pe oiporãvéva ojeaplicáramo. Comando línea-pe {{cmd:ALIGNTO}} ha {{cmd:DISTRIBUTE}} ojapo.

## Borrar ha descomponer

- {{cmd:ERASE}} (`E`, térã {{key:Delete}}) oheja objeto ojeselecciona.
- {{cmd:EXPLODE}} (`X`) polilínea ojapo línea ha arco, bloque referencia ojapo objeto, cota ojapo línea, punta de flecha ha texto. Cota descompuesto ndaha medidor jeporupaite.

## Mba'e ndaporãiva

- **Distancia ndehai `@` punto segundo-pe.** `600,0` ha'e punto absoluto 600,0, ndaha "600 derecha-pe". Ehai `@600,0`, térã `600` cursor oĩvape ojeporu.
- **Rotación ojeguejy ndaiporãva.** Ángulo positivo ojeguejy contrario reloj-pe.
- **Deshacer oheja mboy ndajeporaitéva.** Peteĩ deshacer omboguejy comando ultimo entero, copia opa ojapo.
- **Comando ndojerreqi objeto ojeselecciona.** Objeto jaʼo ojeselecciona, upéi ojeporu. Eprésiona {{key:Esc}} primero, ojepyta nadie ojeselecciona.
