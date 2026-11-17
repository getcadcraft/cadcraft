---
title: Trazar a PDF
summary: Faga un PDF dunha folla a tamaño real, ou do modelo a unha escala ou ajustado ao papel, imprímao desde o navegador ou desde Studio, ou gárdeo como PNG ou SVG.
keywords: trazar, imprimir, impresora, copias, png, svg, imaxe, pdf, publicar, exportpdf, papel, escala, monocromo, escala de grises, preto e branco, grosor de liña, pluma, configuración da páxina, xanela de trazado, estilo de trazado, táboa de estilo de trazado, ctb, dependente da cor, trama, plotstyles, stylesmanager
from: a4752f83
---

## Que vai facer

Un PDF dunha folla a tamaño real, despois un PDF rápido do modelo a 1:100, e unha impresión.

O PDF xérase dentro do navegador; non se envía nada. É un PDF vectorial: as liñas quedan nítidas con calquera zoom, e o texto pódese buscar.

## Trazar unha folla

1. Prema na lapela da folla debaixo do debuxo.
2. Prema {{key:Mod+P}}, prema {{ui:Trazar}}, ou escriba `PLOT` e prema {{key:Enter}}.

Ábrese o diálogo {{ui:Trazar a PDF}}. Indica que folla traza e en que papel, «a tamaño real … tal como o vé». A vista previa á dereita mostra a folla.

3. En {{ui:Estilo de trazado}}, escolla {{ui:Monocromo (negro)}} para liñas negras, {{ui:Cor (tal como se debuxou)}} para manter as cores, {{ui:Escala de grises}}, ou unha táboa propia (ver [Táboas de estilo de trazado](topic:plot-pdf#plot-style-tables)). A folla conserva esta escolla: gárdase co debuxo.
4. En {{ui:Grosor de liña}}, escolla unha anchura de pluma entre 0,13 mm e 0,70 mm. As liñas co grosor predeterminado imprímense con esta anchura; as liñas co seu propio grosor (de capa ou de obxecto, ou o da pluma da súa cor na táboa) imprímense con ese.
5. Prema {{ui:Descargar PDF}}.

O navegador descarga un PDF co nome do debuxo e da folla, por exemplo `Drawing1-A-101 Plan.pdf`. O historial indica o seu tamaño en bytes e o tamaño do papel en milímetros.

Unha folla trázase sempre a 1:1 no seu propio papel. Para cambiar o papel, cámbieo na propia folla (ver [Configurar unha folla](topic:sheets-and-viewports)). As capas configuradas para non trazarse quedan fóra, e tamén os marcos das vistas.

## Todas as follas nun só PDF

Con dúas ou máis follas, o diálogo {{ui:Trazar a PDF}} ten {{ui:Todas as follas nun só PDF}}; ou escriba {{cmd:PUBLISH}}. {{key:Enter}} toma todas as follas; `[Algunhas (S)]` pide os seus nomes, separados por comas. Descárgase un PDF cunha páxina por folla, pola orde das lapelas, cada unha ao seu tamaño de papel, e un marcador por folla co seu nome. Cada folla trázase coa súa propia táboa de estilo de trazado; unha folla sen ningunha escollida usa a última que escolleu no diálogo, e a anchura de pluma que escolleu por último.

## Trazar o modelo

1. Prema na lapela {{ui:Modelo}}.
2. Prema {{key:Mod+P}}.

O diálogo indica que traza o modelo nunha folla de papel, e mostra máis axustes:

3. En {{ui:Área}}, escolla o que trazar:
   - {{ui:Todo (extensións)}}: todo o debuxo.
   - {{ui:O que se ve na pantalla}}: a zona que vostede ve agora no debuxo.
   - {{ui:Unha xanela…}}: despois prema {{ui:Escoller}}, prema en dúas esquinas do debuxo, e o diálogo volve.
4. En {{ui:Papel}}, escolla un tamaño: ISO A4 a A0, Letter, Legal, Tabloid e ANSI C e D, ou ARCH C, D e E.
5. En {{ui:Orientación}}, escolla {{ui:Horizontal}} ou {{ui:Vertical}}.
6. En {{ui:Escala}}, escolla {{ui:Ajustar ao papel}} ou unha escala como `1:100`.

Baixo os axustes, unha liña indica a escala e o tamaño que ocupa a área no papel. Se é maior que o papel, di: os bordos quedan cortados. Escolla unha escala menor, un papel maior, ou {{ui:Ajustar ao papel}}.

7. Prema {{ui:Descargar PDF}}.

Un trazado do modelo deixa unha marxe de 5 mm arredor do bordo, porque a maioría das impresoras non poden imprimir ata o bordo. {{ui:Ajustar ao papel}} dá unha escala irregular (o historial e a liña de información din «(ajustado)»); escolla unha escala estándar cando o debuxo teña que medir exactamente.

:::note
As escalas léense en unidades reais. Para que 1:100 sexa correcto, estableza {{ui:Unidades}} en {{ui:Configuración actual}} segundo o que vale unha unidade do debuxo. Un debuxo sen unidades considérase en milímetros.
:::

## Táboas de estilo de trazado

Unha táboa de estilo de trazado indica como se imprime cada unha das 255 cores estándar do debuxo, do mesmo xeito que unha táboa de estilo de trazado dependente da cor (CTB) noutros programas CAD. Hai tres integradas:

| Táboa | Imprime |
|---|---|
| {{ui:Cor (tal como se debuxou)}} | Cada obxecto na súa propia cor. |
| {{ui:Monocromo (negro)}} | Todas as cores en negro: a opción habitual para debuxos. |
| {{ui:Escala de grises}} | Cada cor no seu gris, para que as cores se distingan nunha impresora en branco e negro. |

Para crear unha propia, por exemplo liñas vermellas grosas e o resto negras e finas:

1. No diálogo {{ui:Trazar a PDF}}, prema {{ui:Editar táboas…}} (ou escriba {{cmd:PLOTSTYLES}}).
2. Prema {{ui:Nova}} e escriba un nome como `office` en {{ui:Nome}}. Para partir dunha táboa integrada, escóllaa en {{ui:Táboa}} e prema {{ui:Copiar}}.
3. Prema unha cor na cuadrícula. {{key:Shift}}+clic selecciona un intervalo de cores, {{key:Mod}}+clic engade unha máis, e {{ui:Seleccione todas as cores}} tómaas todas.
4. Estableza como se imprimen as cores seleccionadas:
   - {{ui:Imprímese en}}: {{ui:A súa propia cor}}, {{ui:Negro}} ou {{ui:Outra cor…}}.
   - {{ui:Como gris}}: a cor co seu gris.
   - {{ui:Tinta (%)}}: 100 é tinta completa, 50 é a metade cara ao branco (trama), para liñas de fondo.
   - {{ui:Grosor de liña}}: {{ui:O seu propio grosor de liña}} mantén o grosor do obxecto ou da capa; un valor imprime cada liña desa cor con esa anchura.
   - {{ui:Tipo de liña}}: imprime cada liña desa cor cun tipo de liña distinto (por exemplo, todas as vermellas de trazos); {{ui:Usar o tipo de liña do obxecto}} déixaas como están.
   - {{ui:Remate da liña}} e {{ui:Unión de liñas}}: remates rectos, cadrados ou redondos, e esquinas en bisel, en inglete ou redondas (redondas, como antes, cando non configura nada).
   - {{ui:Estilo de trama}}: un recheo sólido desa cor imprímese como liñas de trama (barras horizontais ou verticais, inclinadas, cruzadas, rombos, puntos cadrados) en lugar de tinta, para impresoras e planos nos que a tinta plana resulta demasiado pesada.
   A propia táboa ten dous axustes máis: {{ui:Grosores de liña}}, as anchuras que coñece (unha liña impresa vai á máis próxima), e {{ui:Escala do tipo de liña}}, un factor sobre os trazos de cada tipo de liña que non sexa ISO.
5. Prema {{ui:Feito}}. A táboa gárdase no debuxo, e a folla (ou o modelo) trázase agora con ela. {{ui:Cancelar}} descarta os cambios.

Unha cor con pluma propia mostra un punto na súa esquina, e un punto abaixo cando fixa un grosor de liña. Un obxecto cunha cor real (non das 255) usa a pluma da cor estándar máis próxima.

O debuxo conserva as súas táboas e a escolla de cada folla ao gardar como DWG (2000 a 2018) ou DXF (R12 ou 2000), e ábrese de novo con elas. Outros programas só ven o nome na configuración de páxina de cada folla (`office.ctb`), non a táboa en si. Un debuxo doutro programa cuxa configuración de páxina nomee unha táboa como `monochrome.ctb` trázase coa táboa integrada dese nome; para calquera outro nome, o diálogo indica que o debuxo non a ten, e traza as cores do debuxo ata que escolla unha táboa ou cree unha con ese nome.

Para usar unha táboa noutro debuxo, prema {{ui:Exportar}} en {{ui:Táboas de estilo de trazado}} (gárdase como `office.plotstyle.json`), e despois {{ui:Importar…}} no outro debuxo. {{ui:Importar…}} tamén admite un ficheiro `.ctb` doutro programa: lese a cor, a trama e o grosor de liña de cada cor a partir da descrición publicada do formato, e **aínda non se comprobou con ningún ficheiro real**. Os escalados de grises, os números de pluma, os tipos de liña, os remates e uniones de liña e os estilos de trama non se teñen en conta, e rexéitase unha táboa con nome (`.stb`). Compare o primeiro trazado co que espera, e envíenos o ficheiro se está mal.

## Imprimir

**No navegador**, prema {{ui:Imprimir…}}. CadCraft xera o PDF e abre para el o diálogo de impresión do propio navegador. Escolla alí «Tamaño real» ou 100% (non «Ajustar») para manter a escala. Se o navegador non deixa imprimir desde a páxina, o PDF ábrese nunha nova lapela: imprímao desde aí con {{key:Mod+P}}.

Tamén pode premer {{ui:Abrir para imprimir}}: o PDF ábrese nunha nova lapela do navegador, e imprímao desde aí.

:::safari
Safari pode amosar o PDF e agardar a que use **Ficheiro** e despois **Imprimir**.
:::

Se o navegador bloquea a nova lapela, CadCraft descarga o PDF e indícao no historial. Permita as xanelas emerxentes para o sitio, para abrilo nunha lapela a próxima vez.

**En CadCraft Studio**, o diálogo {{ui:Trazar a PDF}} amosa as impresoras do ordenador. Escolla a {{ui:Impresora}}, o {{ui:Papel na impresora}} e o número de {{ui:Copias}}, e prema {{ui:Imprimir…}}. {{ui:Igual que o trazado}} escolle o papel da impresora co tamaño da folla (A3 para unha folla A3); cando a impresora non ten ningún, usa o seu propio papel e axusta a folla a el. En Windows a folla envíase como unha imaxe de 300 dpi, porque Windows non pode imprimir un PDF sen un programa de PDF; en Linux e macOS o propio PDF vai ao servizo de impresión do sistema. Non sae nada do ordenador.

## Ficheiros de imaxe e SVG

{{ui:Descargar PNG}} garda a folla trazada como unha imaxe a 300 dpi (rebaixada só cando unha folla moi grande sería máis grande do que o navegador pode crear; o historial di isto). {{ui:Descargar SVG}} gárdaa como un debuxo escalable en milímetros, coas liñas e o texto do trazado. Ambos saen do mesmo trazado que o PDF, coa mesma táboa de estilo, grosor de liña e área. As imaxes colocadas no debuxo só aparecen no PDF; o historial indica cantas se deixaron fóra.

## Imaxes

As imaxes imprímense coa súa propia resolución, debaixo das liñas. {{ui:Imaxes}} no diálogo limita a 600, 300 ou 150 dpi para un ficheiro máis pequeno. As liñas, o texto e as tramas quedan sempre nítidos (vectoriais), e a transparencia segue sendo transparencia. Ver [Imaxes nun debuxo](topic:pictures).

## Axustes que se recordan

O diálogo lembra o último papel, orientación, escala e grosor de liña neste navegador. A táboa de estilo de trazado gárdase con cada folla do debuxo; unha folla sen ningunha escollida comeza coa que escolleu por último. Unha xanela escollida consérvase ata que recargue a páxina; despois o diálogo comeza en {{ui:Todo (extensións)}}.

## Erros frecuentes

- **O PDF está en branco ou os botóns están en gris.** Non hai nada que trazar (un modelo baleiro), ou escolleuse {{ui:Unha xanela…}} e aínda non se escolleu ningunha xanela («Escolla a xanela para trazar.»).
- **O texto aparece como "?" no PDF.** O texto en polaco, checo, cirílico, grego e outros alfabetos de Europa imprímese tal cal: o PDF leva entón as letras que precisa (da fonte Liberation Sans, que ten as anchuras de Helvetica), e o texto segue podendo seleccionarse e buscarse. O texto en chinés, xaponés e coreano tamén se imprime tal cal: cando un debuxo o ten, o trazado descarga unha fonte maior (uns 10 MB, unha soa vez) e o PDF só leva os caracteres usados, polo que a primeira vez necesita conexión (non nunha copia sen conexión gardada antes). O hebreo imprímese coa mesma fonte incrustada que o texto latino, e o texto en árabe, persa e urdu fai que o trazado descargue unha fonte máis (menos de 1 MB, unha soa vez); as liñas de dereita a esquerda ordénanse e as súas letras únense (ver [Texto](topic:text)). Os ideogramas raros fóra desas fontes, e os alfabetos que necesitan unha formación complexa, como o hindi, imprímense como "?", e o historial cóntaos.
- **Todas as liñas teñen o mesmo grosor.** O seu grosor é o predeterminado: dé ás capas ou aos obxectos un {{ui:Grosor de liña}} no panel dereito (ver [Grosores de liña e tipos de liña](topic:units-papers-scales#line-weights-and-linetypes)), ou fixe os grosores por cor nunha [táboa de estilo de trazado](topic:plot-pdf#plot-style-tables).
- **«(non está neste debuxo)» xunto ao estilo de trazado.** O debuxo veu doutro programa e nomea unha táboa que non inclúe. Escolla unha das táboas, ou cree unha con ese nome.
- **Liñas de construción impresas.** Estableza a súa capa para non trazarse: prema o seu botón de impresora no panel {{ui:Capas}}.
- **O impreso ten o tamaño incorrecto.** A impresora escalouno. Imprima a tamaño real.
- **{{key:Mod+P}} abriu o diálogo de impresión do navegador.** O cursor estaba nunha caixa do panel dereito, ou había outro diálogo aberto. Prema {{key:Enter}} ou {{key:Esc}} para saír da caixa, e logo probe de novo, ou prema {{ui:Trazar}}.
- **{{key:Mod+P}} non fixo nada.** Hai un comando en execución. Prema primeiro {{key:Esc}}.
