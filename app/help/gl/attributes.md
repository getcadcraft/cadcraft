---
title: Atributos dos bloques
summary: Vexa e cambie os valores que leva unha referencia de bloque, como un número de elemento ou un fabricante, e consérveos ao gardar unha copia.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, cartela, editar no seu lugar, editor de atributos, attdef, definir atributo, bedit, editor de bloques, bclose, atributo, atributos, attdef, attrib, etiqueta, número de elemento, valor, invisible, constante, bloque, propiedades, lista, etiqueta de equipo
from: 34d307c7
---

## Que son os atributos

Un atributo é un valor con nome que viaxa cunha referencia de bloque: o número de elemento dunha etiqueta de equipo, o nome dunha etiqueta de cuarto, a clasificación ao lume dunha porta. A definición do bloque indica cales atributos ten (cada un ten unha **etiqueta**, un **aviso**, un **predeterminado** e un lugar, tamaño e ángulo para o seu texto). Cada referencia ao bloque leva os seus propios valores.

Algúns atributos son **invisibles**: gardan datos, como un fabricante ou un número de modelo, pero nunca se debuxan. Algúns son **constantes**: iguais en cada referencia, fixados polo bloque.

## De onde veñen os atributos

- Os bloques dos ficheiros DWG e DXF que abre conservan os seus atributos, cos valores de cada referencia.
- Os bloques que trae con {{cmd:INSERT}} e a opción {{ui:Ficheiro}} conservan os seus. Vexa [Inserir desde un ficheiro ou da biblioteca](topic:insert-from-file-and-library).
- Os elementos da biblioteca entran como bloques con atributos: un número de elemento visible e os datos do elemento, invisibles.

- Bloques que vostede mesmo fai: defina primeiro os atributos con {{cmd:ATTDEF}} (máis abaixo) e despois selecciónelos cos demais obxectos ao facer o bloque.

## Definir atributos para os seus propios bloques

1. Debuxe as liñas do bloque, por exemplo unha etiqueta de cuarto.
2. Escolla {{ui:Bloques}} › {{ui:Máis}} › {{ui:Definir atributo}}, ou escriba `ATT` e prema {{key:Enter}}.
3. O historial mostra os modos (`Invisible=No Constante=No Predefinido=No`). Escriba `I`, `C` ou `P` para cambiar un, e prema {{key:Enter}} cando estean ben. Os valores invisibles consérvanse pero non se debuxan; un constante ten o mesmo valor en cada referencia; un predefinido non se pide ao inserir o bloque.
4. Escriba a etiqueta (por exemplo `ROOM_NO`: maiúsculas, sen espazos), o aviso (`Número de cuarto`) e un valor predeterminado (`101`).
5. Prema onde vai o valor, e indique a altura e a rotación. A etiqueta aparece no debuxo.
6. Faga o bloque con {{cmd:BLOCK}}, seleccionando xuntas as liñas e as definicións de atributo. A referencia que as substitúe recibe os valores predeterminados; cada novo {{cmd:INSERT}} os pide.

Unha definición de atributo seleccionada mostra {{ui:Etiqueta}}, {{ui:Aviso}}, {{ui:Predeterminado}} e os modos en {{ui:Propiedades}}.

## Cambiar un bloque: o editor de bloques

{{ui:Bloques}} › {{ui:Máis}} › {{ui:Editar bloque}} ({{cmd:BEDIT}}, `BE`) abre un bloque por si só: escriba o seu nome (ou primeiro seleccione unha referencia). Unha barra arriba indica cal bloque está a editar. Debuxe, borre e cambie os seus obxectos cos comandos habituais, e engada ou cambie definicións de atributo. Despois prema {{ui:Gardar bloque}} (ou escriba {{cmd:BCLOSE}} e `S`): cada referencia mostra o cambio, e un {{key:Mod+Z}} desfai todo. {{ui:Descartar cambios}} ({{cmd:BCLOSE}}, `D`) deixa o bloque como estaba.

Cando engade, quita ou cambia definicións de atributo, ao gardar tamén se poñen en liña todas as referencias: os valores que escribiu consérvanse, un atributo novo recibe o seu predeterminado, un quitado desaparece, e cada atributo volve ao lugar que lle indica a definición. O historial indica cantas referencias se actualizaron.

## Editar unha cartela no seu sitio (REFEDIT)

Unha cartela nunha folla adoita estar dentro dun bloque. Para cambiar as súas liñas ou textos sen saír da folla:

1. Seleccione a cartela e despois {{ui:Bloques}} › {{ui:Máis}} › {{ui:Editar no seu lugar}} (ou escriba {{cmd:REFEDIT}}).
2. O seu contido pasa a ser obxectos normais no seu sitio; todo o demais se esvae e non se pode cambiar.
3. Cambie, borre ou debuxe: os obxectos novos pasan a formar parte do bloque.
4. Prema {{ui:Gardar o bloque}} na barra de arriba (ou escriba {{cmd:REFCLOSE}} e `S`). Cada referencia mostra o cambio, e un {{key:Mod+Z}} desfai toda a edición. {{ui:Descartar}} deixa o bloque como estaba.

Un debuxo ligado, un bloque dinámico ou unha referencia escalada de forma distinta en largo e en alto non se poden editar no seu sitio: use {{cmd:BEDIT}} (ou abra o debuxo ligado).

:::note
Garde ou descarte no editor de bloques antes de gardar o debuxo: un ficheiro gardado mentres o editor está aberto ten o bloque como era antes.
:::

## Encher os valores ao colocar un bloque

1. Escriba `I` e prema {{key:Enter}}, escriba o nome do bloque e prema {{key:Enter}}.
2. Prema onde vai.
3. CadCraft pide cada valor, por exemplo `Indique o número de elemento (ITEM) <>`. Escriba o valor e prema {{key:Enter}}, ou prema {{key:Enter}} para manter o predeterminado que se mostra entre os signos <>.

Non se pide os valores que o bloque marca como predefinidos, nin os constantes. Toman o seu predeterminado.

## Ver e cambiar os valores

1. Prema unha referencia de bloque.
2. No panel dereito, baixo {{ui:Atributos}}, cada etiqueta ten o seu valor. Os invisibles din `oculto`.
3. Prema un valor, escriba o novo e prema {{key:Enter}}.

O debuxo mostra o novo valor de inmediato. Cada cambio é un paso: {{key:Mod+Z}} desfai o cambio.

**O editor de atributos.** Prema dúas veces nunha referencia con atributos (ou {{cmd:EATTEDIT}}): o cadro de diálogo {{ui:Editar atributos}} lista cada etiqueta co seu aviso e valor. Escriba os novos valores; prema unha fila para cambiar {{ui:Altura}}, {{ui:Rotación}}, {{ui:Factor de ancho}}, {{ui:Xustificar}}, {{ui:Capa}}, {{ui:Cor}} e {{ui:Invisible}} dese atributo só para esta referencia. {{ui:Aplicar}} deixa o cadro aberto; {{ui:Aceptar}} aplica e pecha. Cada {{ui:Aplicar}} ou {{ui:Aceptar}} é un paso de desfacer.

**Na liña de comandos**, {{cmd:ATTEDIT}} pregunta cada valor por quenda: escriba un novo, ou prema {{key:Enter}} para conservalo.

## Cambiar as definicións de atributo (BATTMAN, ATTSYNC)

{{ui:Bloques}} › {{ui:Máis}} › {{ui:Xestor de atributos}} ({{cmd:BATTMAN}}) lista os atributos dun bloque: cambie unha etiqueta, aviso ou predeterminado, marque {{ui:Invisible}}, {{ui:Constante}} ou {{ui:Predefinido}}, e mova os atributos cara arriba ou cara abaixo (a orde en que se pregunta os valores). Con {{ui:Actualizar as referencias (valores mantidos)}} marcado, {{ui:Aplicar}} tamén pon en liña todas as referencias; unha etiqueta renomeada conserva os seus valores. Cada {{ui:Aplicar}} é un paso de desfacer.

{{cmd:ATTSYNC}} pon en liña as referencias coas definicións do seu bloque á man: `S` escolle unha referencia, `N` nomea un bloque, `A` fai todos os bloques. Os valores consérvanse.

Os valores dos campos propios dun elemento da biblioteca (o seu id, versión, licenza e atribución) amósanse pero non se poden editar, para que a comprobación de actualizacións siga funcionando. O seu número de elemento e a súa cantidade son os que vostede pode cambiar.

## Listalos

Seleccione referencias e escriba `LI` (para {{cmd:LIST}}). O historial mostra cada atributo como `TAG = valor`, con `(invisible)` ou `(constante)` onde corresponda.

## Mover, xirar e descompoñer

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} e {{cmd:MIRROR}} conservan os valores; o texto móvese co bloque e segue sendo lexible.
- {{cmd:EXPLODE}} converte os atributos visibles en texto simple cos seus valores. Os invisibles desaparecen.

## Gardar

Tanto un DWG como un DXF gardados conservan todos os atributos: as definicións de cada bloque (tamén as invisibles, constantes e predefinidas) e os valores de cada referencia. Outros programas CAD lenos como atributos de bloque normais.

Nun DXF R12, un valor de máis de 255 caracteres córtase a 255, e o historial di iso.

## Erros habituais

- **Un valor non aparece no debuxo.** É invisible, ou está baleiro. Os valores invisibles seguen aparecendo no panel dereito.
- **O valor que escribín foi á liña de comandos.** Prema primeiro na caixa do valor do panel dereito.
