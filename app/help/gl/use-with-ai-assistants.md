---
title: Usar CadCraft cun asistente de IA
summary: Deixe que o seu propio asistente de IA ou script traballe con CadCraft: o que pode facer, como conectar calquera cliente MCP e como segue vostede no control (permisos, desfacer, o rexistro de actividade, Desconectar).
keywords: ia, asistente, axente, mcp, model context protocol, script, automatización, liña de comandos, cli, json, token, permisos, desconectar, actividade, cartafoles, rutas, svg, lote
from: 06ba4ef6
---

## O que vai aprender

Como deixar que un asistente de IA (ou un script que vostede escribiu) vexa un debuxo, execute os comandos de CadCraft, imprima e garde, e como decidir o que pode tocar.

CadCraft **non ten IA propia** e non envía nada a ningures. Vostede achega o asistente: calquera programa que fale o Model Context Protocol (MCP). CadCraft só lle dá ferramentas, e vostede escolle cales.

Hai dúas maneiras de entrar:

- **O debuxo que ten aberto.** O asistente traballa nesta xanela, xunto a vostede, a través de CadCraft Studio no seu ordenador. Para iso serve {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Asistentes}}.
- **Debuxos no seu ordenador, sen abrir a aplicación.** O servidor MCP de CadCraft e a liña de comandos `cadcraft` len e escriben ficheiros DWG e DXF nos cartafoles que vostede indique. Vexa «Traballar con ficheiros sen abrir CadCraft» máis abaixo.

## Activar

1. Abra {{ui:Configuración}} (a roda na barra da aplicación, ou {{key:Mod+,}}) e vaia á lapela {{ui:CadCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que os asistentes de IA e os scripts usen CadCraft**. Está desactivado ata que o faga.
3. Escolla o que pode facer. **Ler** está marcado ao principio; marque os demais só cando os precise.

| Permiso | O que pode facer o asistente |
|---|---|
| Ler | Ver o debuxo: describilo, listar e buscar obxectos, ver a selección, describir a vista e facerlle unha foto, comprobalo segundo as regras de capas e de debuxo |
| Editar | Executar comandos no debuxo e cambiar a selección. Cada acción é un paso que pode desfacer |
| Gardar | Gardar o debuxo (no escritorio, no seu ficheiro; nun navegador, como descarga) |
| Exportar | Imprimir en PDF e crear outros ficheiros |

## Permitir que use ficheiros de cartafoles que vostede escolla

En CadCraft Studio un asistente pode abrir, gardar e imprimir ficheiros polo nome, en lugar de usar os diálogos de ficheiros, pero só dentro dos cartafoles que engada en {{ui:Asistentes}} › {{ui:Cartafoles que pode usar}}:

1. Escolla {{ui:Engadir un cartafol…}} e seleccione o cartafol no diálogo propio de Studio.
2. O asistente pode agora listar os ficheiros de alí (`files_list`), abrir un debuxo (`drawing_open`), gardalo alí nunha versión DWG ou como DXF, imprimir nun ficheiro PDF ou SVG, cargar un ficheiro LISP, e dar a un comando o ficheiro que pide (`INSERT` `F`, `XATTACH`, un ficheiro de puntos) ou indicar onde vai o ficheiro dun comando (o CSV de `COUNT`, `PUBLISH`).
3. {{ui:Retirar}} quita un cartafol de inmediato. As rutas de calquera outro lugar son rexeitadas, e un ficheiro que xa existe só se substitúe cando o asistente o pide ou o escribiu el mesmo.

Abrir segue a precisar **Ler**; escribir un debuxo precisa **Gardar**; calquera outro ficheiro precisa **Exportar**.

As ferramentas fóra dos permisos que marcou non se ofrecen ao asistente; e se o pide igualmente, CadCraft rexéitaa e anótaa no rexistro de actividade. Desactivar o interruptor pecha de golpe todas as conexións. {{ui:Restablecer a configuración de CadCraft}} tamén o desactiva.

## Conecte o seu asistente

Os asistentes conéctanse a través de **CadCraft Studio** no seu ordenador: executa un pequeno servidor ao que só este ordenador pode chegar (enderezo `127.0.0.1`), protexido por un token que Studio crea cada vez que arranca. Abra Studio, escolla {{ui:Conectar un asistente}} e copie o enderezo e o token.

- No seu asistente, engada un servidor MCP de tipo HTTP co enderezo (ten esta forma `http://127.0.0.1:47615/mcp`) e a cabeceira `Authorization: Bearer <token>`. Studio mostra a configuración para pegar.

{{ui:Novo token}} en Studio fai que todos os asistentes conectados se reconecten co novo token. Non comparta nunca o token: quen o teña pode usar as aplicacións que activou, mentres Studio estea en execución.

:::note
Unha pestana do navegador non pode abrir unha conexión para un asistente: nas aplicacións de navegador o interruptor non ten efecto ata que use CadCraft Studio no seu ordenador.
:::

## Vostede segue no control

- **Cada acción é un paso de desfacer**, etiquetado co nome que o asistente lle dá, por exemplo «Asistente: LINE». Prema {{key:Mod+Z}} para desfacer por completo a última acción do asistente.
- **Vostede ve o que fai.** Os seus comandos aparecen no historial de comandos con **[Asistente]** diante, e o debuxo redebúxase mentres traballa.
- **Espera por vostede.** Mentres vostede está no medio dun comando, o asistente pode ler pero non cambiar o debuxo; recibe a instrución de volver intentalo cando remate.
- **Sabe cando hai un conectado.** Un botón na barra da aplicación indica o nome do asistente mentres está conectado. Prema nel para ver o que pode facer, ou para **Desconectar**.
- **Actividade.** {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Asistentes}} › {{ui:Actividade}} lista cada chamada: cando, que ferramenta, feita ou rexeitada, e o paso de desfacer que fixo. {{ui:Gardar o rexistro}} garda unha copia.

## Que pode pedir un asistente

| Ferramenta | Permiso | Que fai |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Ler | O nome do debuxo, as unidades, as capas, os bloques, as follas; o que hai na pantalla |
| `files_list`, `drawing_open` | Ler | Studio: os ficheiros dos seus cartafoles; abre un deles nesta xanela |
| `objects_list`, `object_get`, `selection_get` | Ler | Obxectos coa súa xeometría, lonxitude e superficie (ou só cantos son, por tipo e capa); a selección |
| `drawing_check` | Ler | Regras como as capas permitidas, nada na capa 0, cores ByLayer, alturas de texto |
| `view_screenshot` | Ler | Unha imaxe do debuxo tal como se ve |
| `command_run` | Editar | Escribe na liña de comandos: `LINE 0,0 @100,0 @0,50 ` léese como o escribiría vostede (un espazo remata unha resposta), ou unha lista cunha resposta por cada un. Pode deixar un comando aberto e seguir na chamada seguinte |
| `script_run` | Editar | Un script (`.scr`) ou un ficheiro LISP, tal como o carga {{ui:APPLOAD}} |
| `block_insert` | Editar | Coloca un bloque cos seus valores de atributo nun só paso |
| `selection_set`, `undo` | Editar | Selecciona obxectos para o seguinte comando; desfai os seus propios pasos |
| `drawing_save` | Gardar | O propio {{ui:Gardar}} de CadCraft, ou {{ui:Gardar como}} nun dos seus cartafoles |
| `drawing_plot` | Exportar | Un PDF ou SVG dunha folla ou do modelo, a unha escala ou axustado (os subxacentes PDF aínda non se imprimen deste xeito) |

Mentres un asistente executa un comando, CadCraft fai as súas preguntas na liña de comandos en lugar de nun diálogo (por exemplo, se hai que inserir un debuxo completo ou un só bloque), para que o asistente poida respondelas. A biblioteca e Buscar seguen necesitando a súa intervención; o asistente recibe a instrución de preguntarlle a vostede.

## Traballar con ficheiros sen abrir CadCraft

O servidor MCP de CadCraft (`cadcraft-mcp`) e a liña de comandos (`cadcraft`) executan o código de debuxo propio de CadCraft en Node.js, sen xanela. Precisan Node.js 20 ou posterior.

- **O servidor MCP** traballa só dentro dos cartafoles que vostede indique, e só cos permisos que lle dea: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Sen `--root` non pode abrir ningún ficheiro; sen `--allow` só pode ler. Tamén pode ler modelos IFC, medicións e as anotacións dos conxuntos PDF.
- **A liña de comandos** é para os seus propios scripts: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Varios ficheiros á vez: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Engada `--json` para unha saída que un programa poida ler.

:::note
Se `npx @getcadcraft/mcp` indica que non se atopa o paquete, aínda non está publicado. As novidades en getcadcraft.com dirán cando o estea.
:::

## Se algo non funciona

- **O asistente non ve ferramentas de CadCraft:** comprobe que o interruptor está activado nesta xanela e que a xanela está aberta en Studio.
- **«needs the edit permission»:** marque **Editar** en {{ui:Asistentes}} e pídalle de novo.
- **«outside the folders assistants may use»:** engada ese cartafol en {{ui:Asistentes}} › {{ui:Cartafoles que pode usar}}, ou pídalle ao asistente que use un ficheiro dun cartafol que xa engadiu.
- **Erros «401» ou «token»:** o token cambiou (Studio reiniciouse, ou {{ui:Novo token}}). Copie o novo nos axustes do asistente.
- **O seu cambio foi erróneo:** prema {{key:Mod+Z}}. Unha pulsación desfai unha acción completa do asistente.

## Véxase tamén

- [Receitas para asistentes de IA](common:assistants-recipes): exemplos prácticos, cada un coas ferramentas que chama.
