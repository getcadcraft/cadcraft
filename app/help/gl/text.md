---
title: Engadir texto e etiquetas
summary: Colocar etiquetas de cuartos con texto dunha liña, escribir notas con axuste de liñas con texto de parágrafo escrito no lugar e editar o texto despois.
keywords: texto, dtext, mtext, mleader, multileader, referencia, revcloud, núbem de revisión, núbem, buscar, substituír, buscar e substituír, parágrafo, axuste, interlineado, etiqueta, nota, anotación, altura, xustificar, textmask, máscara de fondo, máscara, wipeout, rotación, editar texto, ddedit, textedit, tipo de letra
from: 4b76be99
---

## Que vai crear

Dúas etiquetas de cuartos, centradas nos seus cuartos, unha nota que se axusta á súa largura e despois unha corrección a unha das etiquetas.

## Altura do texto e escala do debuxo

A altura do texto mídese en unidades do debuxo. Nun debuxo en milímetros que se vai trazar a 1:50, un texto de 2,5 mm de altura no papel debe medir 2,5 × 50 = 125 unidades de altura no modelo. Nunha lapela de folla debúxase en unidades de papel, así que 2,5 aí son 2,5 mm no papel.

## Colocar unha etiqueta centrada

1. Escriba `DT` e prema {{key:Enter}} (ou prema {{ui:Texto}} na barra de ferramentas). O aviso di `Indique o punto inicial do texto [Xustificar (J)]:`.
2. Escriba `J` e prema {{key:Enter}}.
3. No aviso `Escolla unha opción [Esquerda (L)/Centro/Dereita/Medio/TL/MC] <L>:`, escriba `MC` e prema {{key:Enter}}.
4. No aviso `Indique o punto de inserción do texto`, prema no centro dun cuarto.
5. No aviso `Indique a altura`, escriba `250` e prema {{key:Enter}}.
6. No aviso `Indique o ángulo de rotación do texto <0>`, prema {{key:Enter}}.
7. No aviso `Escriba o texto`, escriba `COCIÑA` e prema {{key:Enter}}.

A etiqueta aparece, centrada no punto no que premeu.

8. Prema {{key:Enter}} no aviso `Escriba o texto` baleiro para rematar o comando.

## Escribir unha nota que se axusta

O texto de parágrafo ({{cmd:MTEXT}}) axústase a unha largura e escríbese directamente sobre o debuxo.

1. Escriba `T` e prema {{key:Enter}}, ou prema {{ui:Parágrafo}} na barra de ferramentas.
2. No aviso `Indique a primeira esquina`, prema onde ten que ir a esquina superior esquerda da nota.
3. Para cambiar antes a altura, escriba `H`, prema {{key:Enter}}, escriba `250` e prema {{key:Enter}}.
4. No aviso `Indique a esquina oposta [Altura (H)/Xustificar (J)/Interlineado (L)/Rotación (R)/Largura (W)]`, prema á dereita da primeira esquina. A distancia a través é a largura á que se axusta o texto; a distancia cara abaixo na que prema non o limita.
5. Ábrese unha caixa sobre o debuxo co cursor dentro. Escriba `TODAS AS COTAS ESTÁN EN MILÍMETROS SALVO INDICACIÓN CONTRARIA`. As palabras axústanse á largura mentres escribe.
6. Prema {{key:Enter}} para comezar un novo parágrafo e escriba `COMPROBAR NA OBRA`.
7. Prema {{key:Mod+Enter}}, prema {{ui:Aceptar}} ou prema en calquera punto fóra da caixa. A nota é un único obxecto.

A barra sobre a caixa cambia {{ui:Altura}}, {{ui:Interlineado}} (1 é o normal, 1,5 é a metade máis), {{ui:Largura}} (0 = sen axuste) e {{ui:Xustificar}} mentres escribe. {{key:Esc}} ou {{ui:Cancelar}} pechan a caixa sen engadir nada.

As opcións na segunda esquina: `H` altura, `J` xustificación (`TL` esquina superior esquerda … `BR` esquina inferior dereita: a esquina ou o centro da caixa que se mantén no lugar), `L` interlineado, `R` rotación, `W` unha largura escrita en lugar da segunda esquina.

:::note
Mentres a caixa está aberta, {{key:Space}} escribe un espazo e {{key:Enter}} comeza un novo parágrafo. Un DWG gardado conserva o texto de parágrafo como MTEXT; un DXF R12 non ten texto de parágrafo, así que cada liña se garda como texto propio.
:::

### Varias liñas de texto simples

{{cmd:TEXT}} (`DT`) pide unha liña de cada vez: cada {{key:Enter}} comeza a liña seguinte, 1,667 veces a altura do texto máis abaixo, e cada liña é un obxecto propio. Prema {{key:Enter}} nunha liña baleira para terminar.

## Opcións de xustificación

| Opción | O punto no que preme é |
|---|---|
| Esquerda (predeterminado) | O extremo esquerdo da liña de base |
| Centro | O centro da liña de base |
| Dereita | O extremo dereito da liña de base |
| Medio, MC | O centro do texto, tanto en horizontal como en vertical |
| TL | A esquina superior esquerda |

## Editar texto

1. Faga dobre clic nun obxecto de texto. Ábrese na mesma caixa que o texto de parágrafo novo, co cursor ao final.
2. Cambie as palabras.
3. Prema {{key:Mod+Enter}} ou prema fóra da caixa. O texto do debuxo cambia; {{key:Esc}} déixao como estaba.

{{cmd:TEXTEDIT}} (`ED`) fai o mesmo: escolla un texto tras outro e prema {{key:Enter}} ao rematar.

Para cambiar un texto seleccionado, use o panel da dereita: {{ui:Texto}}, {{ui:Altura}}, {{ui:Largura de axuste}} (0 = sen axuste), {{ui:Interlineado}}, {{ui:Rotación}}, a posición X e Y e {{ui:Xustificar}}. A lista {{ui:Xustificar}} tamén ofrece Abaixo á esquerda, que o texto doutros programas usa ás veces.

## Formato dentro do texto de parágrafo doutros programas

Un texto de parágrafo nun DWG ou DXF pode levar códigos no seu interior: cores por palabra, negrita e cursiva, subliñado, sobreliñado e riscado, fraccións apiladas como 1/2 e unha altura distinta para unha palabra. CadCraft conserva eses códigos, debúxaos (na pantalla e nun PDF trazado) e gárdaos de novo sen cambios.

Cando edita un texto así (dobre clic, {{cmd:TEXTEDIT}}, o campo Texto do panel da dereita ou {{cmd:FIND}} con Substituír), edita as súas palabras simples. Unha palabra que escribe vai ao tramo ao seu lado e toma a súa cor e estilo; os outros códigos quedan onde estaban. Se volve escribir os números dunha fracción apilada, esa fracción pasa a ser texto simple. Definir todo o texto desde o campo Texto conserva os códigos só onde pode saber que palabras quedaron.

Os nomes de tipos de letra (`\F`) consérvanse e gárdanse, pero todo se debuxa no mesmo tipo de letra de estilo Helvetica. Aínda non hai barra de ferramentas para escribir códigos.

## Sinalar algo: referencias múltiples

{{ui:Referencia}} no grupo {{ui:Anotar}} ({{cmd:MLEADER}}, `MLD`) debuxa unha frecha, unha liña de referencia, un remate curto e unha nota, como un único obxecto.

1. Prema {{ui:Referencia}}. No aviso `Indique a posición da punta de frecha da referencia`, prema no que trata a nota.
2. No aviso `Indique a posición do remate da referencia`, prema onde vai a nota. O remate xírase cara ao lado no que premeu.
3. Escriba a nota na caixa que se abre e prema {{key:Mod+Enter}}.

`A` e `L` na primeira pregunta fixan o tamaño da punta de frecha e a lonxitude do remate; a altura do texto vén de {{ui:Altura do texto}} para as cotas novas, multiplicada por {{ui:Escala global}}. Faga dobre clic nunha referencia múltiple para cambiar as súas palabras. As pinzas moven a punta de frecha e o remate; a nota segue o remate. En {{ui:Propiedades}}: {{ui:Texto}}, {{ui:Altura}}, {{ui:Largura de axuste}}, {{ui:Tamaño da punta de frecha}} e {{ui:Distancia de remate}}.

:::note
As referencias múltiples gárdanse como referencias múltiples reais en DWG. O DXF non ten referencia múltiple en R12 nin en 2000, así que nesas versións gárdanse como as liñas, a punta de frecha e o texto que debuxan.
:::

## Marcar cambios cunha núbem de revisión

{{ui:Anotar}} › {{ui:Máis}} › {{ui:Núbem de revisión}} ({{cmd:REVCLOUD}}, `RC`) debuxa unha núbem de arcos arredor do que cambiou. O historial amosa a lonxitude do arco e o tipo que vai usar.

- **Rectangular** (a primeira vez): prema dúas esquinas.
- `P` **Poligonal**: prema as esquinas; {{key:Enter}} pecha a núbem.
- `F` **Á man alzada (F)**: prema onde comeza e mova o punteiro arredor da zona sen premer; engádese un arco por cada lonxitude de arco. Prema ou prema {{key:Enter}} para pechala.
- `O` **Obxecto**: escolla unha polilínea pechada, un círculo ou unha elipse (ou unha liña, un arco ou unha polilínea aberta); convértese na núbem. `Inverter a dirección?` `Y` volve os arcos cara ao interior.
- `A` **Lonxitude do arco (A)**: a lonxitude de cada arco. Escolla unha que se adapte á escala de trazado.

A núbem é unha polilínea pechada de arcos, así que se garda en todos os formatos.

## Buscar e substituír palabras

{{ui:Editar}} › {{ui:Máis}} › {{ui:Buscar e substituír}} ({{cmd:FIND}}) busca no texto, nos valores dos atributos de bloques e no texto das cotas na lapela aberta (ou só nos obxectos seleccionados).

1. Escriba as palabras en {{ui:Buscar}}. A lista amosa cada lugar onde aparecen e o total.
2. Escolla {{ui:Coincidir maiúsculas e minúsculas}}, {{ui:Só palabras completas}} ou {{ui:Usar comodíns (* e ?)}} se as necesita, e desmarque onde non buscar.
3. Prema {{ui:Seleccionar o atopado}} para seleccionar eses obxectos, ou escriba as palabras novas en {{ui:Substituír por}} (a lista amosa no que se converte cada unha) e prema {{ui:Substituír todo}}. Un {{key:Mod+Z}} desfai todas as substitucións.

O valor medido dunha cota non é texto, así que nunca se substitúe: en `<> TYP.`, só pode cambiarse `TYP.`.

## Ocultar as liñas detrás dunha etiqueta

1. Seleccione os textos, escriba {{cmd:TEXTMASK}} e prema {{key:Enter}}.
2. `B` pinta o fondo do debuxo detrás deles; `C` pide un número de cor. `O` quita a máscara.
3. `Factor de desprazamento do bordo`: {{key:Enter}} mantén 1,5, medio alto de texto arredor do texto.

A máscara cobre as liñas baixo o texto, na pantalla e ao trazar. DWG 2004 ou posterior e DXF 2000 a conservan; o formato DWG 2000 e o DXF R12 non poden, e o gardado di iso.

## Tipo de letra

Todo o texto debúxase cun tipo de letra de estilo Helvetica, na pantalla e en PDF. O texto dos debuxos abertos conserva as súas palabras, altura e posición, pero non o seu tipo de letra orixinal (o nome dun tipo de letra dentro do texto de parágrafo consérvase no ficheiro, ver máis arriba).

Nos PDF trazados, o texto de calquera escritura europea, cirílica ou grega imprímese tal cal (o PDF leva as letras que necesita, e aínda pode seleccionar e buscar o texto). O texto chinés, xaponés e coreano tamén se imprime tal cal (o trazado descarga un tipo de letra máis grande a primeira vez que o precisa). O texto árabe, persa, urdu e hebreo tamén se imprime tal cal (ver a seguinte sección). Os caracteres que ningún tipo de letra ten imprímense como "?", e o historial di cantos foron.

## Dereita a esquerda: árabe, persa, urdu, hebreo

Escriba o texto como en calquera outro sitio: {{cmd:TEXT}} e {{cmd:MTEXT}} debuxan cada liña en orde de lectura. Unha liña cuxa primeira letra é árabe ou hebrea lese de dereita a esquerda; os números e as palabras latinas dentro dela conservan a súa propia orde de esquerda a dereita, e as letras de escritura árabe únense. Unha liña que comeza cunha letra latina queda de esquerda a dereita, coas palabras de dereita a esquerda no seu lugar dentro. Cada parágrafo dun texto de varias liñas ten a súa propia dirección, e un parágrafo axustado mantena en cada liña.

O texto gárdase tal como o escribiu, así que os ficheiros DWG e DXF o intercambian con outros programas sen cambios. O punto de inserción e a xustificación ({{ui:Esquerda}}, {{ui:Centro}}, {{ui:Dereita}}) significan o mesmo lado que para calquera texto: unha nota de dereita a esquerda que debe colgar do seu extremo dereito quere {{ui:Dereita}}.

Na pantalla as letras veñen dos tipos de letra do seu sistema. Nun PDF trazado, o hebreo usa o mesmo tipo de letra incrustado que o texto latino; o texto de escritura árabe fai que o trazado descargue un tipo de letra máis (menos de 1 MB, unha vez), e todo o PDF se imprime entón con ese tipo de letra. Ese tipo de letra non ten forma propia para tres caracteres urdu (heh goal, yeh barree e o punto completo urdu): imprímense coa forma da letra árabe máis próxima. Un debuxo que ten texto de escritura árabe e texto chinés, xaponés ou coreano imprime un dos dous como "?", porque un trazado leva un só tipo de letra. O texto dunha fonte SHX cargada ordénase e únese cando a fonte ten as letras nos seus lugares Unicode; para fontes antigas cuxas letras xa están formadas, use {{ui:Inverter}} en {{cmd:SHXFONTS}} como antes.

## Erros frecuentes

- **O texto é demasiado pequeno para ver.** A altura mídese en unidades do debuxo. Nun debuxo grande, use unha altura grande (ver arriba), ou achegue o zoom.
- **O comando rematou despois dunha liña.** Prema {{key:Enter}} nunha liña baleira en {{cmd:TEXT}}. Comece de novo, ou use o texto de parágrafo (`T`), onde {{key:Enter}} comeza un novo parágrafo.
- **`T` abriu unha caixa en lugar de pedir unha liña.** Como en AutoCAD, `T` é texto de parágrafo ({{cmd:MTEXT}}); o texto dunha soa liña é `DT`.
- **O texto axústase noutro lugar en AutoCAD.** CadCraft axusta cos anchos de Helvetica; outro tipo de letra pode encaixar unha palabra máis ou menos nunha liña.
- **Texto nunha copia espellada.** Colócase espellado, pero segue sendo lexible de esquerda a dereita.
