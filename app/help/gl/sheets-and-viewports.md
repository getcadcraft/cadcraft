---
title: Preparar unha folla con cadro de título e viewports
summary: Cree unha folla (layout) con marco e cadro de título, estableza a escala da viewport, engada unha segunda viewport para un detalle e complete o cadro de título.
keywords: layout, folla, espazo papel, viewport, mview, vpview, cadro de título, escala, tamaño de papel, marco, vports, escala de trazado, mspace, pspace, espazo do modelo, entrar en viewport, facer dobre clic en viewport
from: 45a45de8
---

## O que vai facer

Unha folla A3 cun cadro de título, todo o plano nunha viewport a 1:100, e unha segunda viewport que amosa unha esquina a 1:20.

## O modelo e as follas

Debuxa o edificio na lapela {{ui:Modelo}}, a tamaño real: un muro de 6 m mide 6000 unidades en milímetros. Unha **folla** (un layout) é un anaco de papel, medido en milímetros ou polgadas. Unha **viewport** é unha xanela recortada na folla que mostra o modelo a unha escala.

## Antes de comezar

1. Abra ou debuxe un plano na lapela {{ui:Modelo}}.
2. Prema {{key:Esc}} para que non haxa nada seleccionado.
3. En {{ui:Configuración actual}}, estableza {{ui:Unidades}} á unidade na que debuxou, por exemplo {{ui:Milímetros}}.

As unidades importan: unha escala de viewport como 1:100 significa que un milímetro no papel amosa 100 milímetros reais, así que CadCraft precisa saber cal é unha unidade de debuxo. Un debuxo deixado como {{ui:Sen unidades}} tómase na unidade do papel (milímetros en papel ISO, polgadas en papel US).

## Faga a folla

1. Prema o botón {{ui:+}} á dereita das lapelas baixo o debuxo, ou escriba `LAYOUT` e prema {{key:Enter}}, ou prema {{ui:Nova folla}}.

Abre unha lapela nova, `Layout1`. Debe ver unha folla sobre unha mesa máis escura: un marco, un cadro de título na esquina inferior dereita e unha viewport por riba del que mostra todo o modelo á escala estándar máis grande que cabe. O historial di o nome do papel: ISO A3 para debuxos métricos e sen unidades, Tabloid (ANSI B) para debuxos en polgadas ou pés.

2. Prema {{ui:Extensións}} para axustar a folla á pantalla.

## Escolla o papel

1. Prema {{key:Esc}} para que non haxa nada seleccionado. O título do panel dereito di "Folla: Layout1".
2. En {{ui:Nome}}, escriba `A-101 Plan` e prema {{key:Enter}}. A lapela cambia de nome.
3. En {{ui:Papel}}, escolla un tamaño.
4. En {{ui:Orientación}}, escolla {{ui:Horizontal}} ou {{ui:Vertical}}.

:::warning
Cambiar o papel non move nin redimensiona o que xa hai na folla. Despois de cambialo, comprobe que o marco, o cadro de título e a viewport aínda caben, e móvaos ou redimensiónaos cos agarres. Pasar de papel en milímetros a papel en polgadas (ou ao revés) mantén os números, así que todo cambia de tamaño: a barra de estado avísao.
:::

## Estableza a escala da viewport

1. Prema o marco da viewport (a súa beira). O título do panel di "Viewport".
2. En {{ui:Escala}}, escolla `1:100`.

O modelo dentro da viewport redebúxase a 1:100, centrado onde estaba. A lista ofrece escalas métricas de 10:1 a 1:10000; os debuxos en polgadas ou pés tamén reciben escalas arquitectónicas (1/4" = 1'-0" e similares) e escalas de enxeñaría (1" = 20' e similares). {{ui:Axustar todo o modelo}} establece unha escala exacta, non estándar, que cabe todo.

3. Se o plano xa non está centrado, cambie {{ui:X}} e {{ui:Y}} baixo {{ui:Centro da vista (modelo)}} no panel dereito: son o punto do modelo que se amosa no centro da viewport.

## Mostrar parte do modelo nunha viewport

1. Con a viewport seleccionada, prema {{ui:Seleccione unha xanela no modelo…}} no panel dereito (ou escriba `VPVIEW` e prema {{key:Enter}}).
2. CadCraft cambia á lapela {{ui:Modelo}}. Prema unha esquina da área que quere amosar.
3. Prema a esquina oposta.

Volve á folla, e a viewport mostra esa área á escala estándar máis grande que cabe; o historial di cal. {{ui:Mostrar todo o modelo}} volve ao plano completo a unha escala estándar.

## Engada unha segunda viewport para un detalle

1. Faga espazo na folla: seleccione a primeira viewport e arrastre un agarre dunha esquina para facela máis pequena.
2. Escriba `MV` e prema {{key:Enter}}, ou prema {{ui:Viewport}} no grupo Follas.
3. Prema unha esquina da nova viewport na folla.
4. Prema a esquina oposta.

A nova viewport amosa todo o modelo. O historial di a súa escala.

5. Prema o marco da nova viewport.
6. Prema {{ui:Seleccione unha xanela no modelo…}} e seleccione unha área pequena arredor dunha esquina do plano.
7. En {{ui:Escala}}, escolla `1:20`.

Os marcos das viewports están na capa `Viewports`, que está configurada para non trazar, así que os marcos se ven en pantalla pero non no PDF.

## Complete o cadro de título

O cadro de título está feito con liñas e texto comúns na capa `Title block`. Comeza co nome do debuxo, a escala da primeira viewport, a data de hoxe e o número da folla.

1. Faga dobre clic no texto grande do título. Ábrese unha caixa de edición sobre el.
2. Escriba o título da folla.
3. Prema {{ui:Aceptar}}, ou prema {{key:Mod+Enter}}.

Faga o mesmo cos outros campos. Use {{cmd:TEXT}} para escribir na cela baleira "DEBUXADO POR". O texto SCALE non se actualiza só cando cambia a escala dunha viewport: edítello a man.

## Debuxe na folla

Calquera cousa que debuxe nunha lapela de folla está no papel, en unidades de papel: un texto de 3,5 de altura mide 3,5 mm de alto nunha folla ISO. As notas, as frechas de norte e os marcos das follas van aquí.

Para cambiar o plano en si, vaia á lapela {{ui:Modelo}}, ou traballe a través dunha viewport (na seguinte sección); toda viewport amosa o cambio.

## Traballe no modelo a través dunha viewport

1. Faga dobre clic dentro dunha viewport, lonxe do seu marco. Ou escriba `MS` e prema {{key:Enter}}: con unha única viewport na folla entra directamente; con varias, faga clic dentro da que quere.

O marco debúxase máis grosos, o historial di que está dentro, e a lapela da folla segue seleccionada. Todo o que debuxe ou cambie agora está no modelo, en unidades do modelo, como na lapela {{ui:Modelo}}: unha liña debuxada dentro dunha viewport a 1:100 está en milímetros reais. As capas conxeladas nesta viewport non se poden seleccionar aquí.

2. Xire a roda ou arrastre co botón central para facer zoom e desprazar o que mostra a viewport. A folla queda onde estaba.
3. Faga dobre clic en calquera punto fóra do marco, ou escriba `PS` e prema {{key:Enter}}.

Volve á folla. A viewport conserva a vista coa que a deixou; {{key:Mod+Z}} devolve a vista anterior nun paso. Facer clic en calquera lapela baixo o debuxo tamén sae da viewport.

:::note
Unha viewport cuxa {{ui:Visualización bloqueada}} (en {{ui:Propiedades}}) conserva a súa vista: dentro dela, o desprazamento e o zoom moven toda a folla. Unha viewport que está desactivada non se pode introducir.
:::

## Etiquete unha vista co seu nome

Un título de vista baixo unha viewport pode amosar o nome da vista da viewport e seguilo:

1. Dea un nome á vista: seleccione o marco da viewport e complete {{ui:Nome da vista}} en {{ui:Propiedades}}; ou garde a vista na lapela {{ui:Modelo}} con {{cmd:NAMEDVIEW}} e, coa viewport seleccionada, escriba `VPVIEW`, `V` e o nome da vista: a viewport amosa esa vista e toma o seu nome.
2. Escriba `VIEWLABEL` (`VL`) e prema {{key:Enter}}, e logo faga clic onde irá a etiqueta ({{key:Enter}} a coloca baixo a esquina inferior esquerda da viewport).

Cando cambia o nome da vista, a etiqueta cambia con el, no mesmo paso de desfacer.

## Conxele unha capa nunha viewport

Para ocultar unha capa nunha viewport pero non nas demais (mobiliario nun detalle, por exemplo):

1. Seleccione o marco da viewport, ou traballe dentro dela (dobre clic).

O panel {{ui:Capas}} recibe un botón máis en cada fila, e unha liña por riba da lista di isto.

2. Faga clic nese botón na fila da capa.

A capa desaparece só desa viewport. Faga clic de novo para descongelala; {{key:Mod+Z}} desfai calquera das dúas cousas. Para varias capas ou viewports á vez, escriba `VPLAYER`: `F` (Freeze) ou `T` (Thaw), os nomes das capas (`A-*` toma todas as capas que empezan por A-), e logo `C` (Current), `A` (All) ou `S` (Select). `VPLAYER` `V` (Vpvisdflt) escolle as capas coas que as novas viewports comezan conxeladas.

## Máis follas

Cada {{ui:+}} engade outra folla (`Layout2`, `Layout3` …) co seguinte número de folla. Para borrar a folla aberta, prema {{key:Esc}} e prema {{ui:Eliminar esta folla}} no panel dereito. Bórrase sen preguntar; {{key:Mod+Z}} a devolve.

Imprima unha folla con {{ui:Imprimir esta folla}} ou {{key:Mod+P}}; consulte [Trazar a PDF](topic:plot-pdf).

## Erros frecuentes

- **A viewport non amosa nada.** O modelo está baleiro, ou a vista apunta a outro sitio. Seleccione o marco e prema {{ui:Mostrar todo o modelo}}.
- **A lista de escalas só mostra razóns e non escalas en pés e polgadas.** Estableza {{ui:Unidades}} en {{ui:Polgadas}} ou {{ui:Pés}} na lapela {{ui:Modelo}}.
- **1:100 parece dez veces demasiado grande ou pequeno.** As unidades do debuxo están mal. Estableza {{ui:Unidades}} na que realmente mide unha unidade.
- **Facer clic no plano dentro da viewport non selecciona nada.** Nunha folla selecciónanse os obxectos da propia folla. Faga dobre clic dentro da viewport primeiro para traballar no plano a través dela.
- **Os clics fóra da viewport non fan nada.** Está dentro dunha viewport: faga dobre clic fóra dela, ou escriba `PS`, para traballar de novo na folla.
- **"Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first."** {{cmd:MVIEW}} só funciona nunha lapela de folla: abra primeiro unha, ou cree unha con LAYOUT.
