---
title: Dar ás opcións dos comandos as súas propias letras
summary: Responda ás opcións dun comando con letras que escolla, en calquera idioma, desde un ficheiro de texto que pode editar, importar e exportar.
keywords: letras de opción, optionkeys, optkeys, palabra clave de opción, palabra clave, remapear, asignación, personalizar, letras propias, polar, matriz, P, PO, idioma, traducir opcións, forma curta, importar, exportar, ambiguo
from: 7c8328c6
---

## Que vai aprender

Como cambiar as letras que escribe para responder ás opcións dun comando. Por exemplo, {{cmd:ARRAY}} pregunta `[Rectangular/POlar]` e acepta `PO` para Polar; pode facer que `P` ou outras letras fagan o mesmo, no seu idioma se o desexa.

## Como se responden as opcións

Cando un comando mostra opcións entre corchetes, as letras maiúsculas son as que hai que escribir: `POlar` é `PO`, `eXit` é `X`.

Tamén pode escribir menos letras. Se o que escribe encaixa só nunha das opcións mostradas, CadCraft acéptao: con `[Rectangular/POlar]`, un `P` soto é Polar. Se encaixa en dúas, a liña de comandos nómeaas e pregunta de novo:

```
C could be COUnt, COLumns. Type more letters.
```

Os números nunca se adiviñan, así que unha distancia ou cantidade escrita lese sempre como número.

## Engadir letras propias

Cada comando conserva as súas letras integradas. Vostede engade as súas por riba delas, así que a súa lista contén só o que cambiou.

1. Abra {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Letras de opción}} e prema {{ui:Editar…}}. Ou escriba {{cmd:OPTIONKEYS}} e prema {{key:Enter}}.
2. Baixo {{ui:Comando}}, escolla o comando, por exemplo `ARRAY`. A lista contén todos os comandos que piden opcións e comeza no último comando que usou.
3. Baixo {{ui:Opción}}, escolla a opción. Cada unha mostra as súas letras integradas entre parénteses, por exemplo `POlar (PO)`.
4. En {{ui:As súas letras}}, escriba as letras que quere, por exemplo `P`, e prema {{ui:Engadir}}.
5. A opción aparece agora baixo {{ui:As súas letras}} coas súas letras integradas e coas súas. Prema {{ui:Gardar}}.

Inicie {{cmd:ARRAY}}, seleccione un obxecto e prema {{key:Enter}}. A indicación mostra as súas letras despois da opción, `POlar (P)`, e `P` responde.

Para quitar unha, prema a x ao final da súa fila e despois {{ui:Gardar}}. A opción volve ter só as súas letras integradas.

## Letras que non pode usar

O editor rexeita as letras que ocultarían algo que a liña de comandos xa le, e indica o motivo:

- as letras integradas doutra opción do mesmo comando (`R` para Polar en `ARRAY`, onde `R` é Rectangular);
- unha palabra de enganche a obxectos de tres letras ou máis, como `END`, `MID` ou `CEN`, e as palabras `ALL` e `LAST`;
- as mesmas letras para dúas opcións distintas dun mesmo comando.

Mentres algo aparezca en vermello, {{ui:Gardar}} está desactivado: corrixa a liña ou retírea, e volverá activarse. As letras integradas dunha indicación sempre gañan ás súas, así que a súa lista nunca pode impedir que unha resposta integrada funcione. As letras que resulten ser o nome dun comando, como `L` ou `C`, están ben: nunha indicación de opción a liña de comandos está a ler unha resposta, non a iniciar un comando.

As opcións que aparecen para un comando proceden dos comandos que comparten as súas indicacións, así que, de cando en vez, un comando lista unha opción que só pide en certos casos.

## Unha opción para todos os comandos

Baixo {{ui:Comando}}, escolla {{ui:Todos os comandos}}. As opcións son entón todas as que ten calquera comando, como eXit ou Undo. As letras que engade aquí responden a esa opción onde quer que un comando a ofreza. As letras engadidas para un comando gañan a estas.

## Letras no seu idioma

As letras poden ser de calquera alfabeto, así que pode responder ás opcións sen cambiar o teclado: engada `З` para Close baixo {{ui:Todos os comandos}}, ou `П` para POlar en `ARRAY`.

CadCraft trae só as letras en inglés. A súa propia lista é o xeito en que vostede, a súa oficina ou as persoas que comparten o seu idioma configuran o resto, e {{ui:Exportar}} crea un ficheiro que pode pasar a outros.

## Editar como texto

{{ui:Editar como texto}} no editor mostra a mesma lista como liñas de texto, unha por opción, que é tamén o que garda {{ui:Exportar}}:

```
ARRAY.PO,  P
*.X,       Q
```

Cada liña é o comando, un punto, as letras integradas da opción, unha coma e as súas letras. Unha estrela no lugar do comando significa todos os comandos. Unha liña que comeza con `;` é unha nota.

## O que non cambia

- As letras integradas seguen funcionando xunto coas súas.
- As rutinas e os botóns da barra de ferramentas seguen usando as letras integradas, así que nada do que cargou se rompe. Para escribir vostede mesmo as letras integradas onde as súas interferirían, poña primeiro un guión baixo: `_PO`.
- O nome curto dun comando é outra cousa: vexa [Editar alias de comandos](topic:command-aliases).

## Liñas que CadCraft rexeita

Ao editar como texto ou importar un ficheiro, o editor lista cada problema co número de liña:

- o comando non existe (o alias dun comando está ben: `AR.PO` lese como `ARRAY.PO`);
- a liña non é `COMMAND.OPTION, LETTERS`;
- as letras teñen un espazo ou un signo (só letras e díxitos, 16 como máximo);
- as mesmas letras responden a dúas opcións distintas dun mesmo comando.

## Importar e exportar

{{ui:Exportar}} garda as súas letras como ficheiro de texto, para conservalo ou dárllelo a outra persoa. {{ui:Importar…}} le ese ficheiro. Ambas as opcións están no editor e en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Letras de opción}}.

En Configuración, {{ui:Importar…}} substitúe o seu ficheiro polo que escolla. Un ficheiro cunha liña que colide ou non se pode usar non se toma; abra o editor e impórtao alí para ver as liñas. No editor só enche a caixa: non cambia nada ata que prema {{ui:Gardar}}.

## Recargar ou retirar

Escriba {{cmd:REINIT}} e prema {{key:Enter}} para aplicar de novo o seu ficheiro. Para retirar unha letra, elimine a súa liña e prema {{ui:Gardar}}.

## As súas letras seguen á súa conta

Cando inicia sesión en getcadcraft.com, as súas letras gárdanse coa súa conta. Abra CadCraft noutro navegador ou noutro computador coa mesma conta e chegan sós; a liña de comandos indica `Option letters from your account`. Se as cambiou en dous lugares, gaña a copia máis recente e a que substitúe consérvase unha vez.

{{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Letras de opción}} indica en que estado están. Sen sesión ou sen conexión, quedan neste navegador e van á súa conta a próxima vez que as garde con sesión iniciada.

Relacionado: [Editar alias de comandos](topic:command-aliases) · [Configuración de CadCraft](topic:settings) · [Comandos](topic:commands)
