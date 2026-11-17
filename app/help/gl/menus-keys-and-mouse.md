---
title: Menús, teclas e rato
summary: Escolla un estilo de menú que se adapte ao xeito en que xa traballa, dea a calquera comando a súa propia tecla ou unha tecla que escribe un comando, mova comandos entre as lapelas da cinta e defina o que fan a roda e os botóns do rato.
keywords: estilo de menú, menús, cinta, barra de ferramentas, liña de comandos, atallos de teclado, teclas rápidas, teclas, personalizar, redefinir, atallos, teclas de texto, rato, roda, invertir, sentido do zoom, botón central, botón dereito, desprazar, exportar, importar, cambio, familiar, debuxo clásico 2D
from: 8bbf4f88
---

Os comandos de CadCraft son os mesmos por onde se acceda a eles, e a liña de comandos está sempre dispoñible cos seus alias (`L`, `C`, `TR` …). Un **estilo de menú** só decide onde se sitúan os botóns na pantalla, como se chaman alí e que teclas os executan. Escolla un en {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menus, keys and mouse}}; o cambio é inmediato, e este navegador o recorda.

## Os tres estilos

| Estilo | Que obtén |
|---|---|
| {{ui:CadCraft}} | A barra de ferramentas propia de CadCraft: Ficheiro, Debuxar, {{ui:Modify}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:Blocks}}, Follas, Editar e {{ui:View}}, cada un cun menú {{ui:More}}. O punto de partida. |
| {{ui:Drafting classic}} | Unha cinta disposta como o fan os programas clásicos de debuxo 2D: un menú {{ui:File}} e botóns rápidos, despois as lapelas {{ui:Home}} (Debuxar, Modificar, Anotación, Capas, Bloque, Propiedades, Utilidades, Portapapeis), {{ui:Insert}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:View}}, {{ui:Manage}}, {{ui:Output}} e {{ui:3D}}. Escriba os comandos como sempre. O botón central desprazao; un clic dereito é {{key:Enter}}, e arrastrar co botón dereito non fai nada. |
| {{ui:Ribbon}} | Unha cinta de lapelas de tarefas simples: Debuxar, {{ui:Modify}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:Blocks}}, {{ui:Sheets}}, {{ui:View}}, {{ui:3D}} e {{ui:Tools}}, cun menú {{ui:File}} e botóns rápidos á dereita. O botón central e o dereito desprazan, como no estilo propio de CadCraft. |

Todos os estilos conservan as teclas de CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, e {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} para as axudas de debuxo. As letras nunca son teclas: CadCraft escríbeas na liña de comandos.

As cintas tamén albergan as ferramentas do panel de capas e as axudas de debuxo da barra de estado. A lapela {{ui:3D}} énchese cando se abriu a lapela 3D baixo o debuxo; unha ferramenta 3D escollida na lapela Modelo abre primeiro a lapela 3D, e unha ferramenta 2D escollida na lapela 3D volve primeiro á lapela Modelo.

:::tip
Unha tecla que pertence á disposición propia de CadCraft pero que o seu estilo lle deu a outro comando non fai nada, e a barra de estado indica onde foi o seu comando ("En As miñas teclas, Ortho é Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as frechas conservan sempre o seu significado. Mentres un comando se executa, ou mentres se escriben letras na liña de comandos, as teclas pertencen á liña de comandos.
:::

## Personalice o seu estilo

1. Escolla o estilo máis próximo ao que quere e prema {{ui:Customize…}}.
2. En {{ui:Keys and menus}}, busque un comando (o cadro de busca axuda). Prema {{ui:Add a key}} e prema a tecla. Prema unha tecla para quitala.
3. Cunha cinta, {{ui:Where it sits}} move o comando a outra lapela e panel, ao menú {{ui:File}} ou a {{ui:Keys only}}.
4. En {{ui:Mouse}}, defina a roda e os botóns que desprazan o debuxo.
5. Déelle un nome e prema {{ui:Save}}.

Gardar un estilo integrado fai unha copia propia ("O meu debuxo clásico 2D"); o integrado nunca cambia. Unha tecla asignada a dous comandos mostrase en vermello e hai que corrixila antes de poder gardar.

## Teclas que escriben un comando

{{cmd:SHORTCUTS}} ({{ui:View}} › {{ui:More}} › {{ui:Keyboard shortcuts…}}) dá a unha tecla unha liña de comandos completa, como {{key:Ctrl+Alt+L}} para `LINE` ou {{key:F9}} para `ZOOM E`. Estas teclas pertencen ao estilo en uso: a primeira vez que se abre esta versión, as teclas que creou nunha versión anterior pásanse, unha única vez, ao seu propio estilo "As miñas teclas de CadCraft", e funcionan como antes. Exportar o estilo lévaas tamén.

## Rato

- **Roda do rato**: {{ui:Scroll up zooms in}} (o predeterminado) ou {{ui:Scroll up zooms out}}, e a velocidade. Un pinzamento no panel táctil sempre fai zoom no sentido en que se moven os dedos.
- **Desprazar o debuxo con**: o botón central, o botón dereito ou ambos. Un clic dereito sen arrastrar é sempre {{key:Enter}}. O botón esquerdo sempre escolle e debuxa en CadCraft, así que marcalo non cambia nada aquí.
- **Arrastre nas vistas 3D**: a lapela 3D conserva os seus propios botóns en todos os estilos (o esquerdo orbita, o central e o dereito desprazan).

## Lévao consigo

{{ui:Export}} garda o estilo en uso como un pequeno ficheiro `.ccinput.json`; {{ui:Import…}} engade un, desde outro ordenador ou dun compañeiro. Un ficheiro importado só pode apuntar aos comandos propios de CadCraft: o que haxa de máis nel déixase fóra e cóntase na barra de estado. {{ui:Delete this style}} elimina un dos seus.

:::note
Estes axustes quedan neste navegador. {{ui:Use this style in every app}}, baixo as tarxetas de estilo, fai que cada aplicación se abra no seu estilo correspondente (a súa propia barra de ferramentas, unha cinta ou debuxo clásico 2D), cos cambios que fixo en cada aplicación. CadCraft non ten un estilo de barra de menús: cando se escolle a barra de menús doutra aplicación para todas as aplicacións, CadCraft conserva a súa propia barra de ferramentas.
:::

Relacionado: [Teclado e rato](topic:keyboard) · [Configuración de CadCraft](topic:settings) · [Vir doutro software de debuxo](topic:coming-from) · [Alias de comandos](topic:command-aliases)
