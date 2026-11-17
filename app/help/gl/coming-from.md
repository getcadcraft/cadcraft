---
title: Chegar desde outro software de debuxo
summary: Como os comandos, teclas e hábitos coñecidos se corresponden con CadCraft, e as diferenzas que desconcertan a desenhistas con experiencia.
keywords: cambio, diferenzas, migrar, hábitos, alias, entrada dinámica, pickfirst, pickadd, qsave, saveas, gardar como, mtext, ctb, rastrexo polar, xref, atallos de teclado, familiar, copyclip, pasteclip, pasteorig, copybase, portapapeis
from: b58688e7
---

Se usou AutoCAD, ou un programa baseado no mesmo modelo, a maior parte do que sabe funciona aquí: a liña de comandos, alias como `L`, `C`, `TR` e `O`, Enter ou Space para repetir, selección por xanela e cruzamento, aseos a obxectos na F3, Orto na F8, espazo do modelo con follas e viewports. Esta páxina indica o que se corresponde directamente e despois as diferenzas que fan tropezar. Lea a segunda metade aínda que só a repase por enriba.

## O que se corresponde directamente

| Hábito | En CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Mesmos comandos, mesmos alias |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Igual |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Mesmos comandos de cota |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` escritos na liña de comandos | Igual, para as cotas novas |
| `B` para facer un bloque, `I` para inserir, `PU` para purgar | Igual (purgar só elimina bloques sen usar) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` e despois `E` ou `W` | Igual |
| Escribir `_LINE` ou `-LAYER` desde un script ou un hábito | Ignórase o `_`, `-`, `.` ou `'` inicial |
| Enter ou Space nun aviso baleiro repite o último comando | Igual |
| Esc cancela; Esc de novo borra a selección | Igual |
| `@dx,dy`, `@d<a`, ángulos escritos en sentido antihorario desde o leste | Igual |
| Xanela de esquerda a dereita, cruzamento de dereita a esquerda, clic-clic; manter premido e arrastrar para un lazo, Space alterna xanela / cruzamento / valado (LASSOMODE) | Igual |
| Seleccionar primeiro e logo o comando (substantivo-verbo) | Igual; un comando rematado borra a selección |
| `ALL` e `L` en Seleccione obxectos | Igual |
| Shift+clic quita da selección | Igual. Os axustes poden facer que un clic substitúa a selección, como fai PICKADD 0: consulte [Axustes de CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Mesmos comandos e teclas; ao pegar, a copia colócase pola súa esquina inferior esquerda, como fai PASTECLIP |
| F3 aseo a obxectos, F7 grella, F8 Orto | Mesmas teclas |
| Dobre clic na roda para zoom a extensións | Igual |
| O texto espellado segue lexible | Igual (como con MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Igual; nun Mac, Command tamén funciona |

A [Referencia de comandos](topic:commands) amosa todos os comandos e alias.

:::tip
Se lle gusta a cinta de AutoCAD, escolla o estilo de menú {{ui:Debuxo clásico 2D}} en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Menús, teclas e rato}}: lapelas Inicio, Inserir, Anotar, Paramétrico, Vista, Xestionar e Saída sobre a mesma liña de comandos, e o botón central despraza mentres o clic dereito é Enter. Consulte [Menús, teclas e rato](topic:menus-keys-and-mouse).
:::

O [mapa de comandos](topic:command-map) lista todos os comandos de CadCraft cos seus nomes curtos, e a [folla de atallos](topic:cheat-sheet) os 40 que máis vai usar (tamén como PDF dunha soa páxina).

## Diferenzas que fan tropezar

### Os puntos escritos son absolutos

Con entrada dinámica activada, o outro programa trata un `100,0` escrito como segundo punto como relativo. **A liña de comandos de CadCraft non o fai:** alí, `x,y` mídese sempre desde a orixe. Con {{ui:Dyn}} ({{key:F12}}) activado, use no seu lugar os seus campos: distancia, {{key:Tab}}, ángulo. Use `@100,0` para «100 á dereita do último punto», ou mova a cruz na dirección correcta e escriba só un `100`.

### Shift salta os aseos; non activa Orto

Manter {{key:Shift}} premido ao facer clic ignora os aseos a obxectos nese clic. Non cambia temporalmente Orto. Use F8 ou o botón {{ui:Orto}}.

### O clic dereito é sempre Enter

Non hai menú de clic dereito. Un clic dereito no debuxo é Enter: remata un comando, termina unha selección ou repite o último comando. Durante un movemento por agarre ou un cadro de selección, cancela en cambio. Arrastre co botón dereito para desprazar.

### Sen desprazamento coa barra espazadora

{{key:Space}} é Enter, así que manter Space premido e arrastrar non despraza. Despraze co botón central ou co dereito, ou aleje o zoom e volva achegalo noutro punto coa roda.

### Recortar e estender

Recortar e estender comezan en modo Rápido: cada obxecto visible é un bordo de corte ou un límite, a peza baixo o punteiro indica o que se vai retirar, un camiño arrastrado recorta cada peza que cruza, e un obxecto que nada cruza bórrase. {{key:Shift}} alterna entre recortar e estender. `O` cambia ao modo Estándar (escolla antes os bordos), `F` e `C` son valado e cruzamento, `E` é EDGEMODE, `R` borra. Non hai opción `P` (Proxección): CadCraft recorta no plano do debuxo.

### Acordo e chafrán

{{cmd:FILLET}} e {{cmd:CHAMFER}} aceptan as opcións que coñece: Desfacer (U), Polilínea, Raio (R), Recortar (T) e Múltiple, ou Distancia, Ángulo e Método (E), e {{key:Shift}}+clic para unha esquina viva. Un acordo entre unha polilínea e unha liña engade o arco como obxecto propio en lugar de unilo á polilínea, e as esquinas da polilínea xunto a un segmento de arco quédanse como están.

### Texto en parágrafo e texto dunha liña

`T`, `MT` e `MTEXT` son texto en parágrafo escrito no seu sitio, cunha largura, interliñado e xustificación; `DT` e `DTEXT` son texto dunha liña, como o coñece. Non hai estilos de texto nin columnas, e aínda non se pode escribir formato no texto (negriña, fraccións apiladas); o formato que chega nun ficheiro consérvase, debúxase e gárdase (consulte [Engadir texto e etiquetas](topic:text#formatting-inside-paragraph-text-from-other-programs)). Todo se debuxa cunha tipografía de tipo Helvetica.

### Gardar significa «descargar unha copia»

{{key:Mod+S}}, `SAVE` e `QSAVE` descargan unha copia no formato do debuxo: un DWG que abriu gárdase como DWG, un DXF como DXF. No navegador non se sobrescribe nada no seu sitio, e os ficheiros abertos nunca se cambian. En CadCraft Studio, {{key:Mod+S}} escribe de volta no ficheiro que abriu.

`SAVEAS` ({{key:Mod+Shift+S}}) é un pequeno diálogo, non un explorador de ficheiros: escolla {{ui:DWG}} (coa súa {{ui:Versión}}, AutoCAD 2000 a 2018), {{ui:DXF R12}} ou {{ui:DXF 2000}} e prema {{ui:Gardar}}. O navegador decide onde vai a descarga. `DXFOUT` descarga sempre un DXF R12.

Un DWG que abriu gárdase na versión en que chegou; un debuxo novo gárdase no formato AutoCAD 2000 salvo que escolla outro. Follas, cotas e patróns de trama consérvanse. Consulte [Ficheiros: o que se abre, o que se garda](topic:files#saving).

### Capas: máis sinxelo

- Cada cambio de capa (activar, conxelar, bloquear, cor, trazado, tipo de liña, grosor, capa actual) é un único paso de desfacer.
- Apagar e conxelar teñen o mesmo efecto en CadCraft.
- As capas que un debuxo conxela nunha viewport quedan conxeladas alí: na pantalla, nos trazados e cando as garda como DWG ou DXF.
- Unha viewport que amosa unha capa na súa propia cor, tipo de liña, grosor ou transparencia segue facéndoo na pantalla, nos trazados e nun DWG gardado (DXF conserva os axustes propios da capa; o gardado di iso). Cambiar isto por viewport aínda non está feito.
- Non hai xestor de propiedades de capas nin estados de capas; {{cmd:RENAME}}, {{cmd:LAYMRG}} e {{cmd:LAYDEL}} renomean, funden e eliminan capas. Os tipos e grosores de liña defínense no panel dereito (consulte [Grosores e tipos de liña](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} e {{cmd:LAYMCUR}} funcionan por selección.
- Gardar en DXF R12 escribe os nomes das capas en maiúsculas. Un DWG conserva os nomes como os escribiu.

### Estilos de cota

`DIMSTYLE` abre un xestor de estilos con nome (novo, modificar, definir actual, comparar, aplicar). `DIMSCALE` e os demais axustes seguen cambiando o que usan as cotas novas, e cada cota conserva os seus propios tamaños, que tamén pode cambiar no panel Propiedades. O estilo actual non se garda no ficheiro. As cotas seguen o formato de lonxitude do debuxo (decimal, ou pés e polgadas con {{cmd:UNITS}}), ou o seu propio {{ui:Formato}}. Consulte [Definir os tamaños das cotas](topic:dimension-settings).

### O trazado é máis sinxelo

As táboas de estilo de trazado traballan por cor, como os ficheiros CTB: Monocromo, Cor e Escala de grises vén integradas, pode crear as súas, e cada folla conserva a súa táboa. A lectura de ficheiros CTB está construída a partir da descrición publicada e só se probou con ficheiros que fixemos nós; as táboas de estilo de trazado con nome (STB) e as configuracións de páxina aínda non están feitas. As liñas imprímense co seu grosor, as demais cun só grosor de pluma. As follas trázanse a 1:1 no seu propio papel; o modelo trázase a unha escala escollida ou axustada. Consulte [Trazar a PDF](topic:plot-pdf).

### Traballar dentro dunha viewport

Como o coñece: faga dobre clic dentro dunha viewport (ou escriba {{cmd:MSPACE}}) para traballar no modelo a través dela, e faga dobre clic fóra (ou {{cmd:PSPACE}}) para volver á folla. Dentro, desprazar e facer zoom cambian o que amosa a viewport, salvo que a súa visualización estea bloqueada; entón moven a folla. Premer unha lapela baixo o debuxo tamén sae da viewport. Consulte [Traballar co modelo a través dunha viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Rastrexo e entrada dinámica si, aseo á grella aínda non

A grella é só para mirar; os puntos non se axustan a ela (non hai modo de aseo F9). O rastrexo polar ({{key:F10}}, paso definido con {{cmd:POLARANG}}) e o rastrexo de aseos a obxectos ({{key:F11}}: deteña o punteiro sobre un punto de aseo para captalo) funcionan como os coñece; consulte [Aseo a obxectos](topic:object-snaps#polar-tracking). A entrada dinámica ({{key:F12}}) amosa distancia e ángulo (ou X e Y) xunto á cruz; consulte [Introdución de coordenadas e distancias](topic:coordinate-entry#dynamic-input).

### Pés e polgadas

Escolla {{ui:Formato de lonxitude}} {{ui:Arquitectónico}} ou {{ui:Enxeñaría}} (ou escriba {{cmd:UNITS}}), e escriba as lonxitudes como as coñece: `12'6"`, `12'6-1/2"`. Use un guión, non un espazo, antes dunha fracción: {{key:Space}} é {{key:Enter}}. Defina tamén {{ui:Unidades}} en {{ui:Polgadas}}, para que as follas e os trazados ofrezan escalas arquitectónicas. O formato consérvase nos ficheiros DWG e DXF gardados. Consulte [Pés e polgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copiar e pegar quédanse dentro de CadCraft

{{key:Mod+C}}, {{key:Mod+X}} e {{key:Mod+V}} copian, cortan e pegan obxectos dentro dun debuxo, entre debuxos e entre lapelas de CadCraft no mesmo navegador. O portapapeis é o de CadCraft: non pode pegar obxectos de CadCraft noutro programa, nin obxectos doutro programa en CadCraft. Pegar desde un debuxo con outras unidades non reescala: use {{cmd:SCALE}} despois. {{key:Mod+D}} é un duplicado que se move co punteiro, un engadido de CadCraft. Consulte [Copiar, pegar e duplicar](topic:copy-paste).

### Teclas do navegador que non pode usar

Unha páxina web non pode tomar {{key:Mod+N}}, {{key:Mod+W}} ou {{key:Mod+T}} do navegador: esas abren e pechan xanelas e lapelas. Use o botón {{ui:Nova}} ou escriba `NEW`. Consulte [Teclas, ratos e trackpads](common:keys).

## Comandos que pode buscar e aínda non están aquí

{{cmd:TABLE}} non está feito. Escribilo mostra «Comando descoñecido». ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} e {{cmd:XREF}} si están feitos.) [Aínda sen facer](topic:not-built-yet) indica o que facer no seu lugar hoxe.
