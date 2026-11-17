---
title: Botóns propios (As miñas ferramentas)
summary: Engada botóns á barra de ferramentas que executan as súas propias macros, asígnelles teclas de atallo, compártaos como ficheiro e traia botóns dun ficheiro de personalización CUIx.
keywords: as miñas ferramentas, botóns personalizados, botóns da barra de ferramentas, macro, macros, cui, cuix, personalizar, menú, teclas de atallo, atallos de teclado, diesel, ^c^c, importar botóns, exportar botóns
from: 36618802
---

## O que vai aprender

Como pór botóns propios na barra de ferramentas, cada un executando unha macro escrita como as escribe AutoCAD, como asignarlle unha tecla a un botón, e como traer os botóns dun ficheiro CUIx.

## Engadir un botón

1. Abra {{ui:Configuración}} ({{key:Mod+,}}) e quédese na lapela {{ui:CadCraft}}. Desprácese ata {{ui:As miñas ferramentas}}.
2. Faga clic en {{ui:Engadir un botón…}}.
3. Complete a caixa:
   - {{ui:Grupo}}: o grupo da barra de ferramentas no que vai, por exemplo `As miñas ferramentas`. Un nome novo crea un grupo novo.
   - {{ui:Etiqueta}}: as palabras do botón.
   - {{ui:Macro}}: o que escribe, por exemplo `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tecla de atallo}}: faga clic na caixa e prema as teclas, por exemplo {{key:Ctrl+Alt+B}}.
   - {{ui:Icona}}: unha imaxe PNG ou SVG de como máximo 64 KB, ou ningunha (aparece unha estrela).
4. Faga clic en {{ui:Gardar}}.

O botón aparece ao final da barra, no seu grupo. Faga clic nel, ou prema a súa tecla, para executalo. {{ui:Editar}} e {{ui:Eliminar}} na lista cambian ou retiran o botón.

## Escribir unha macro

Unha macro é o que escribiría na liña de comandos, con algúns signos:

| Signo | Significa |
|---|---|
| `^C` | Cancela o que estea en execución (`^C^C` é o inicio habitual) |
| `;` ou un espazo | {{key:Enter}} |
| `\` | Agarda por vostede: un clic ou unha resposta escrita, e logo a macro continúa |
| `_` ou `.` antes dun comando | Aceptado e ignorado (nomes internacionais e integrados) |
| `*` ao principio | Volve executarse cada vez que remata, ata que prema {{key:Esc}} |
| `^O`, `^G` | Activa ou desactiva Orto e a cuadrícula |
| `$M=` | O resto é DIESEL. Só se len `$(if,…)`, `$(getvar,…)`, `$(=,…)` e `$(eq,…)`; un botón que use outra cousa avísao e non fai nada |

Exemplos:

- `^C^C_line;0,0;@100,0;;` debuxa unha liña de 100 de longo desde a orixe.
- `^C^C_circle;\25;` pídelle o centro e logo debuxa alí un círculo de raio 25.
- `^C^C_turnright` xira a vista 90° cara á dereita.

## Teclas de atallo

Unha tecla necesita {{key:Mod}} (Ctrl, ou Cmd nun Mac) ou {{key:Alt}} cunha letra ou un número, ou unha das teclas de función libres {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. As letras soas van á liña de comandos. As teclas que CadCraft, a aplicación ou o navegador xa usan (como {{key:Ctrl+S}} ou {{key:Ctrl+Z}}) e as que xa usa outro botón recházanse, e a caixa indica o motivo.

## Compartir os seus botóns

- {{ui:Exportar…}} garda todos os grupos e botóns (con iconas e teclas) como `my-tools.json`.
- {{ui:Importar…}} engade os grupos dun ficheiro así despois dos seus. Un nome de grupo que xa usa recibe «(2)»; unha tecla que chocaría déixase fóra, e o panel di iso.

## Traer botóns dun ficheiro CUIx

1. Faga clic en {{ui:Importar CUIx…}} e escolla o ficheiro `.cuix`.

As súas barras de ferramentas e os seus paneis da cinta convértense en grupos, cada botón co seu macro e a súa imaxe (PNG, ou BMP convertido a PNG). As súas teclas de atallo chegan nun grupo propio, cada botón coa súa tecla; os alias de comandos que poida traer chegan nun grupo {{ui:Alias}}. O panel enumera o que chegou.

:::note
O ficheiro só se le. Os comandos que CadCraft non ten enuméranse polo nome, sen adiviñalos: os seus botóns avisan diso ao facer clic. Non se len DIESEL máis aló das poucas funcións de arriba, nin menús, botóns do rato nin espazos de traballo.
:::

## Cousas que conven saber

- Os botóns gárdanse neste navegador (ou nesta aplicación de escritorio), non nos debuxos.
- Un botón executa a través da liña de comandos, así que se desfai como calquera cousa que escriba: un {{key:Mod+Z}} por cada comando que executou.
