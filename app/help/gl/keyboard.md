---
title: Teclado e rato
summary: Cada tecla, acción do rato e tecla da liña de comandos da aplicación de debuxo de CadCraft, tal como as trata o código.
keywords: teclado, atallos, teclas, rato, rodela, desprazar, zoom, clic dereito, botón central, f3, f7, f8, ctrl, tecla de comando, teclas rápidas, copiar, cortar, pegar, duplicar, portapapeis, seleccionar todo
from: a2608a29
---

Os atallos móstranse para o seu computador. Nun Mac, cada atallo {{key:Mod}} de abaixo usa a tecla Command, e a tecla Control tamén funciona. Como se escriben as teclas, e como usar as teclas F nun Mac, está en [Teclas, ratos e trackpads](common:keys).

## Escribir comandos

| Tecla | Que fai |
|---|---|
| Calquera letra, número ou símbolo | Vai á liña de comandos, onde estea o punteiro, salvo que unha caixa dun panel teña o cursor |
| {{key:Enter}} | Envía o escrito. Nunha liña de comandos baleira: repite o último comando, remata un comando, completa unha selección, ou acepta o valor predeterminado de `<…>` |
| {{key:Space}} | Igual que {{key:Enter}}, salvo cando CadCraft pide texto (texto, nomes de bloques, texto de cota), onde escribe un espazo |
| {{key:Esc}} | Cancela o comando. Sen comando en execución: cancela un movemento de agarre ou un recadro de selección, e despois borra a selección |
| {{key:Tab}} | Acepta o comando suxerido que se mostra á dereita da liña de comandos. Sen nada escrito e co punteiro sobre obxectos superpostos: resalta o seguinte alí (faga clic para escollelo) |
| {{key:Up}} {{key:Down}} | Percorre as liñas que escribiu antes (as últimas 100) |

## Debuxo e edición

| Tecla | Que fai |
|---|---|
| {{key:Mod+Z}} | Desfai o último comando |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refacer |
| {{key:Mod+A}} | Selecciona todos os obxectos editables na pestana aberta ({{cmd:SELECTALL}}). Se escribiu algo na liña de comandos, selecciona ese texto |
| {{key:Delete}} | Borra os obxectos seleccionados ({{cmd:ERASE}}), salvo que escribira algo na liña de comandos |
| {{key:Backspace}} | Borra os obxectos seleccionados cando a liña de comandos non ten o cursor; na liña de comandos borra o que escribiu |
| {{key:Esc}} | Sen comando en execución: quita a selección ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Garda unha copia no formato do debuxo (DWG ou DXF) |
| {{key:Mod+Shift+S}} | Gardar como: escolla DWG ou DXF, e despois garde unha copia |
| {{key:Mod+O}} | Abre un DWG ou DXF |
| {{key:Mod+P}} | Trazar a PDF |

Desfacer, refacer, seleccionar todo e trazar non fan nada mentres hai un comando en execución: prema primeiro {{key:Esc}}.

## Copiar, cortar e pegar

| Tecla | Que fai |
|---|---|
| {{key:Mod+C}} | Copia a selección no portapapeis ({{cmd:COPYCLIP}}). Sen nada seleccionado: CadCraft pide obxectos |
| {{key:Mod+X}} | Cortar: copia a selección e despois a borra ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Pegar: a copia segue o cursor; faga clic, ou escriba un punto, para deixala ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Pegar no mesmo sitio: nas coordenadas desde as que se copiou ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplicar: unha copia da selección móvese co punteiro; faga clic para deixala, {{key:Esc}} non deixa nada ({{cmd:DUPLICATE}}) |

As mesmas accións están no grupo {{ui:Editar}} da barra de ferramentas ({{ui:Copiar}}, {{ui:Pegar}}) e no seu menú {{ui:Máis}}. Mentres se executa outro comando, remátao ou prema primeiro {{key:Esc}}; premer {{key:Mod+V}} ou {{key:Mod+D}} de novo mentres unha copia segue o cursor comeza de novo. Cando escribiu algo na liña de comandos, ou un comando pide texto, estas teclas copian, cortan e pegan ese texto. Vexa [Copiar, pegar e duplicar](topic:copy-paste).

## Interruptores

| Tecla | Interruptor | Botón da barra de estado |
|---|---|---|
| {{key:F3}} | Activar ou desactivar os enganches a obxectos | {{ui:Enganche}} |
| {{key:F7}} | Activar ou desactivar a cuadrícula | {{ui:Cuadrícula}} |
| {{key:F8}} | Activar ou desactivar o orto | {{ui:Orto}} |
| {{key:F10}} | Activar ou desactivar o rastrexo polar | {{ui:Polar}} |
| {{key:F11}} | Activar ou desactivar o rastrexo de enganches a obxectos | {{ui:Rastrexo}} |
| {{key:F12}} | Activar ou desactivar a entrada dinámica | {{ui:Dyn}} |

:::mac
Nun Mac, F3, F7 e F8 adoitan ser as teclas de Mission Control e de medios. Manteña **fn** con elas, ou active as teclas de función estándar en Axustes do sistema, como se describe en [Teclas, ratos e trackpads](common:keys). Os botóns da barra de estado sempre funcionan.
:::

:::firefox
En Firefox, F7 tamén pode pedir activar a navegación con cursor. Escolla **Non**, e use o botón {{ui:Cuadrícula}} se segue preguntando.
:::

## Axuda

| Tecla | Que fai |
|---|---|
| {{key:F1}} | Abre ou pecha esta axuda, xunto ao debuxo. Funciona aínda mentres se executa un comando, e nunca chega á liña de comandos. |
| {{key:Esc}} | Co cursor no panel de axuda: borra a busca, ou pecha o panel |

O botón {{ui:Axuda}} da barra superior fai o mesmo que {{key:F1}}. Mentres escribe na caixa de busca da axuda, nada chega á liña de comandos. Faga clic no debuxo para devolver as teclas a CadCraft; o panel queda aberto ao lado.

:::mac
Nun teclado de Mac, manteña **fn** e prema F1, ou faga clic en {{ui:Axuda}}.
:::

## Pantalla

| Tecla | Que fai |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna entre normal, pantalla completa e pantalla completa coas barras ocultas. Usa a tecla Control en todos os computadores, incluído o Mac. |
| {{key:Left}} {{key:Right}} | Con unha lapela baixo o debuxo enfocada: a lapela anterior ou a seguinte |

En pantalla completa, o navegador pode usar o primeiro {{key:Esc}} para saír da pantalla completa. Prema {{key:Esc}} de novo para cancelar un comando.

## Diálogos

| Tecla | Que fai |
|---|---|
| {{key:Esc}} | Pecha o diálogo ({{ui:Trazar a PDF}}, ou unha pregunta como «Cambios sen gardar», onde significa {{ui:Cancelar}}) |
| {{key:Tab}} | Move entre os axustes e os botóns do diálogo |

Mentres hai un diálogo aberto, as teclas do debuxo están desactivadas.

## Campos do panel

Nunha caixa do panel da dereita ou da esquerda:

| Tecla | Que fai |
|---|---|
| {{key:Enter}} | Aplica o valor e sae da caixa |
| {{key:Esc}} | Repón o valor anterior e sae da caixa |
| {{key:Tab}} | Aplica e pasa á caixa seguinte |

Mentres unha caixa ten o cursor, as letras escríbense nela, non na liña de comandos.

## Rato

| Acción | Que fai |
|---|---|
| Clic | Escolle un punto cando un comando o pide; escolle un obxecto cando pide obxectos; noutro caso selecciona un obxecto, ou un agarre |
| {{key:Shift}}+clic | Quita un obxecto seleccionado da selección (con {{ui:Ao facer clic en obxectos}} definido como {{ui:Substitúe a selección}} en [Configuración](topic:settings): engádeo). Mentres escolle un punto: ignora os enganches a obxectos nese clic |
| Clic en espazo baleiro, despois outro clic | Un recadro de selección: de esquerda a dereita é unha ventá, de dereita a esquerda un cruzamento |
| Arrastre en espazo baleiro | Un lazo: se primeiro se move á dereita é unha ventá, e se primeiro á esquerda, un cruzamento; {{key:Space}} mentres arrastra alterna entre ventá, cruzamento e valado; {{key:Esc}} soltao (LASSOMODE 0, ou Configuración, devolve o rectángulo) |
| Arrastre por pezas en TRIM ou EXTEND | Recorta (ou estende) cada peza que atravesa o camiño; manteña {{key:Shift}} para a outra |
| Arrastre un agarre | Move o agarre (ou faga clic no agarre, despois faga clic onde vai) |
| Clic dobre en texto | Selecciona o texto e pon o cursor na súa caixa {{ui:Texto}} do panel da dereita |
| Clic dereito | Enter. Durante un movemento de agarre ou un recadro de selección: cancélao |
| Arrastre co botón dereito | Desprazar |
| Rodela | Zoom dentro e fóra arredor da cruz |
| Arrastre coa rodela (botón central) | Desprazar |
| Clic dobre na rodela | Zoom a todo o debuxo (extensións) |
| Solte un DWG ou DXF no debuxo | Ábreo |

Nun trackpad ou pantalla táctil, vexa [Rato, trackpad e tacto](topic:mouse-trackpad-touch).

## Teclas que conserva o navegador

{{key:Mod+N}}, {{key:Mod+W}} e {{key:Mod+T}} sempre pertencen ao navegador. CadCraft non as usa: use {{ui:Nova}} ou escriba `NEW` para un debuxo novo. O portapapeis de CadCraft é propio: {{key:Mod+C}} e {{key:Mod+V}} copian obxectos entre debuxos e pestanas de CadCraft, non desde ou cara a outros programas.

:::mac
Se {{key:Mod+Y}} abre o historial do navegador en lugar de refacer, use {{key:Mod+Shift+Z}} ou o botón {{ui:Refacer}}.
:::

## Onde está Mover

Mover é o comando `MOVE` (tecla {{key:M}}): escolla os obxectos, despois un punto base e un segundo punto ou unha distancia escrita. `ALIGN` e `DISTRIBUTE` tamén existen. BimCraft usa os mesmos nomes para as mesmas tarefas en elementos de edificación, pero o seu {{key:M}} é Medir: o seu Mover é {{key:Shift+M}}.
