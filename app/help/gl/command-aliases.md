---
title: Editar alias de comandos
summary: Garde os seus propios alias de comandos nun ficheiro de texto no formato coñecido, importe e exporte un ficheiro .pgp e recárreguo con REINIT.
keywords: alias, aliasedit, pgp, atallo, nome curto, reinit, teclado, personalizar, editar alias
from: 2282d36f
---

## Que vai aprender

Como engadir os seus propios nomes curtos para os comandos, por exemplo `LL` para {{cmd:LINE}}, todos nun só ficheiro de texto.

## Engadir un alias

1. Abra {{ui:Vista}} › {{ui:Máis}} › {{ui:Editar alias…}}, ou escriba {{cmd:ALIASEDIT}} e prema {{key:Enter}}.
2. Engada unha liña co alias, unha coma e o comando despois dunha estrela:

```
LL,     *LINE
```

3. Prema {{ui:Gardar}}. A liña de comandos indica cantos dos seus alias están en uso.
4. Escriba `LL` e prema {{key:Enter}}: comeza LINE.

Os seus alias están por enriba dos de CadCraft. Unha liña propia gaña a un alias integrado co mesmo nome; se retira a súa liña, o integrado volve.

## Liñas que CadCraft rexeita

O editor mostra cada problema co número de liña mentres escribe:

- o comando non existe;
- o alias é o nome dun comando (`LINE, *CIRCLE` ocultaría LINE);
- a liña non é `ALIAS, *COMMAND`;
- o mesmo alias está en dúas liñas (gaña a última).

As liñas que inician un programa no seu computador, como `NOTEPAD, START, 1, *File to edit: ,`, omítense con unha nota: unha aplicación no navegador non pode iniciar programas.

## Traer os seus alias doutro programa

1. No editor de alias, prema {{ui:Importar .pgp…}} e escolla o ficheiro. Tamén pode soltar un ficheiro `.pgp` sobre o debuxo.
2. Revise os problemas indicados (os comandos que CadCraft non ten son rexeitados; o resto funciona).
3. Prema {{ui:Gardar}}.

{{ui:Exportar .pgp}} garda os alias de CadCraft e os seus nun só ficheiro no mesmo formato.

## Recargar o ficheiro

Escriba {{cmd:REINIT}} e prema {{key:Enter}} para aplicar de novo o seu ficheiro de alias. Gárdase neste navegador; a aplicación de escritorio gardarao no seu propio cartafol, e o servizo na nube sincronizarao.

## Letras para as opcións dun comando

Un alias nomea un comando. Para cambiar as letras que responden ás opcións dun comando (`P` para Polar en {{cmd:ARRAY}}), vexa [Dar ás opcións dos comandos as súas propias letras](topic:option-letters).

## Atallos de teclado para calquera comando

Un alias escríbese; un atallo é unha tecla. Para dar a un comando unha tecla propia:

1. Prema {{ui:Vista}} › {{ui:Máis}} › {{ui:Atallos de teclado…}}, ou escriba `KEYS` e prema {{key:Enter}}.
2. Prema a caixa {{ui:Tecla}} e prema as teclas, por exemplo {{key:Alt+Shift+C}}.
3. En {{ui:Executa}}, escriba o comando e, se o desexa, o que se escribe despois: `CIRCLE`, ou `ZOOM E`.
4. Prema {{ui:Engadir}}.

Unha tecla necesita {{key:Mod}} ou {{key:Alt}} con unha letra ou un díxito, ou unha tecla de función libre ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). As teclas que xa usan CadCraft, a aplicación ou o navegador, e as que ten un botón de ferramentas propio (vexa [Botóns propios](topic:my-tools)), son rexeitadas, e a caixa indica o motivo. Os atallos gárdanse neste navegador (ou na aplicación de escritorio); {{ui:Retirar}} quítao.
