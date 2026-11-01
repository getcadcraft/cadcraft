---
title: O ecrã do CadCraft
summary: Uma visita a todas as barras, painéis e separadores da aplicação de desenho, pelo nome que têm no ecrã.
keywords: ecrã, interface, barra de ferramentas, friso, painéis, linha de comandos, barra de estado, separadores, separadores de layout, propriedades, painel de camadas, visita
from: b5a33388
---

O ecrã tem sete partes. De cima para baixo: a barra da aplicação, a barra de ferramentas, a área de desenho com um painel de cada lado, os separadores por baixo do desenho, a linha de comandos e a barra de estado.

## A barra da aplicação

A barra fina mesmo no topo pertence ao site, não ao desenho. Mostra a marca CadCraft, o nome da aplicação, a versão que está a executar, uma ligação para a página da aplicação, um botão {{ui:Ajuda}} (ou {{key:F1}}), um botão {{ui:Guardar para offline}}, um botão {{ui:Ecrã inteiro}} e dois botões de tema, {{ui:Papel}} e {{ui:Modelo}}.

O botão {{ui:Definições}} (roda dentada) contém as definições do próprio CadCraft e as que todas as aplicações partilham: consulte [Definições do CadCraft](topic:settings).

{{ui:Guardar para offline}} mantém neste navegador uma cópia do CadCraft, incluindo o seu leitor de DWG, para que abra sem ligação. A sua etiqueta mostra o estado: "A guardar N de M", "Pronto para offline", "Não foi possível guardar" ou "Offline indisponível". Consulte [Trabalhar offline](common:offline).

:::note
Os botões {{ui:Papel}} e {{ui:Modelo}} da barra da aplicação só mudam as cores do ecrã: {{ui:Papel}} é um tema claro, {{ui:Modelo}} um tema escuro. Nada têm que ver com o separador {{ui:Modelo}} por baixo do desenho, que alterna entre o desenho e as suas folhas.
:::

O botão {{ui:Ecrã inteiro}}, ou {{key:Ctrl+Shift+F}} (a tecla Control em todos os computadores, incluindo os Mac), alterna entre três modos de ecrã: normal, ecrã inteiro, e ecrã inteiro com as barras ocultas. Com as barras ocultas, mova o ponteiro para o limite superior do ecrã para as fazer voltar.

## A barra de ferramentas

Por baixo da barra da aplicação está a barra de ferramentas. Cada botão executa um comando, exatamente como se o tivesse escrito, pelo que a linha de comandos faz as mesmas perguntas de qualquer das formas. Pare o ponteiro sobre um botão para ver o alias do seu comando. Os grupos são:

| Grupo | Botões |
|---|---|
| Ficheiro | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Guardar como}}, {{ui:Imprimir}} |
| Desenhar | {{ui:Linha}}, {{ui:Polilinha}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Retângulo}}, {{ui:Polígono}}, {{ui:Elipse}}, {{ui:Texto}}, {{ui:Parágrafo}}, {{ui:Trama}}, e {{ui:Mais}}: {{ui:Ponto}}, {{ui:Linha de construção}} e {{ui:Semirreta}} (consulte [Linhas de construção e semirretas](topic:construction-lines)) |
| Modificar | {{ui:Mover}}, {{ui:Copiar}}, {{ui:Rodar}}, {{ui:Escala}}, {{ui:Espelhar}}, {{ui:Esticar}}, {{ui:Offset}}, {{ui:Aparar}}, {{ui:Prolongar}}, {{ui:Concordância}}, {{ui:Chanfre}}, {{ui:Explodir}}, {{ui:Apagar}}, e {{ui:Mais}}: {{ui:Matriz}}, {{ui:Unir}}, {{ui:Igualar propriedades}}, {{ui:Quebrar}} e {{ui:Alongar}} |
| Anotar | {{ui:Linear}}, {{ui:Alinhada}}, {{ui:Ângulo}}, {{ui:Raio}}, {{ui:Diâmetro}} (cotas), {{ui:Chamada}} (chamada múltipla), e {{ui:Mais}}: {{ui:Cota contínua}}, {{ui:Cota de linha de base}} e {{ui:Nuvem de revisão}} |
| Paramétrico | {{ui:Auto}}, {{ui:Restringir}}, {{ui:Cota}}, {{ui:Parâmetros}}, e {{ui:Mais}} com cada restrição (consulte [Restringir um desenho](topic:constraints)) |
| Blocos | {{ui:Criar}}, {{ui:Inserir}}, {{ui:Biblioteca}}, e {{ui:Mais}}: {{ui:Editar bloco}} e {{ui:Definir atributo}} |
| Folhas | {{ui:Nova folha}}, {{ui:Viewport}} |
| Editar | {{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}} (para a área de transferência), {{ui:Colar}}, e {{ui:Mais}}: um menu com {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo sítio}}, {{ui:Duplicar e mover}}, {{ui:Eliminar}}, {{ui:Selecionar tudo}}, {{ui:Limpar seleção}}, {{ui:Seleção rápida}}, {{ui:Selecionar semelhantes}} e {{ui:Localizar e substituir}}, cada um com a sua tecla |
| Vista | {{ui:Extensão}}, {{ui:Janela}}, {{ui:Anterior}}, e {{ui:Mais}}: {{ui:Medir distância}}, {{ui:Área}}, {{ui:Medir (raio, ângulo …)}}, e o ecrã dividido: {{ui:Dividir lado a lado}}, {{ui:Dividir na vertical, um sobre o outro}}, {{ui:Quatro painéis}}, {{ui:Um painel}} (consulte [Dividir o ecrã](topic:split-screen)), e {{ui:Rodar a vista 90° para a esquerda}}, {{ui:Rodar a vista 90° para a direita}}, {{ui:Voltar ao global}} (consulte [Rodar a vista](topic:ucs-and-turned-view)) |

{{ui:Copiar}} no grupo {{ui:Modificar}} é o comando {{cmd:COPY}} (ponto base e depois o destino de cada cópia); {{ui:Copiar}} no grupo {{ui:Editar}} coloca objetos na área de transferência para {{ui:Colar}}. Consulte [Copiar, colar e duplicar](topic:copy-paste). O botão do comando em execução fica realçado até o comando terminar. As descrições indicam os atalhos do Windows ("Ctrl+O"); num Mac, {{key:Mod+O}} também funciona.

Numa janela baixa (um portátil com o ecrã ampliado a 125 % ou mais, por exemplo) a barra de ferramentas nunca ocupa o lugar do desenho: quando o desenho ficaria com demasiado pouca altura, os botões retiram as palavras por baixo dos ícones e os nomes dos grupos (pare o ponteiro sobre um botão para ver o seu nome) e, se mesmo assim não for suficiente, a barra de ferramentas passa a uma só fila que se desloca para os lados. Uma janela mais alta traz as palavras de volta.

## O painel da esquerda

O painel da esquerda tem três secções.

- **{{ui:Camadas}}.** Todas as camadas do desenho, com um ponto cheio na atual. Clique num nome para tornar essa camada atual. Cada linha tem uma amostra de cor (clique nela para escolher uma cor) e quatro botões: ligar/desligar (olho), congelar (floco de neve), bloquear (cadeado) e imprimir (impressora). {{ui:Nova camada}} abre uma caixa para acrescentar uma. Consulte [Organizar um desenho com camadas](topic:layers).
- **{{ui:Blocos}}.** Os blocos definidos no desenho, quantas vezes cada um é usado e um botão {{ui:Inserir}} para cada um. Consulte [Criar e inserir blocos](topic:blocks).
- **{{ui:Desenho}}.** Dados sobre o ficheiro aberto: nome (com "(alterado)" quando há edições não guardadas), formato, tamanho, unidades, número de objetos, camadas, blocos e folhas. Depois de abrir um ficheiro, uma caixa "Acerca deste ficheiro" lista tudo o que o CadCraft não conseguiu mostrar ou teve de converter.

## A área de desenho

O meio do ecrã é o desenho. O ponteiro é uma cruz. Quando o CadCraft quer um ponto, um pequeno marcador e uma etiqueta ("Extremidade", "Ponto médio") mostram onde um snap a objetos vai cair. Quando quer objetos, a cruz tem uma caixa de escolha e os objetos que ficam por baixo acendem-se.

Quando o desenho está vazio, um cartão "Começar a desenhar" mostra alguns primeiros comandos. Desaparece assim que executa um comando ou abre um ficheiro. Pode largar um ficheiro DWG ou DXF em qualquer ponto desta área para o abrir.

## Os separadores por baixo do desenho

Por baixo do desenho estão os separadores: primeiro {{ui:Modelo}}, depois {{ui:3D}}, depois um separador por folha (layout) e por fim um botão {{ui:+}}.

- {{ui:Modelo}} é o próprio desenho, em tamanho real, em unidades de desenho.
- {{ui:3D}} mostra o desenho assente no chão e os sólidos feitos a partir dele. Enquanto está visível, a barra de ferramentas tem um grupo {{ui:3D}} no lugar dos grupos do desenho. Consulte [Modelar em 3D](topic:3d-solids).
- Cada separador de folha é uma folha de papel com uma legenda e viewports sobre o modelo. O que desenhar aí está em unidades de papel (milímetros ou polegadas). Faça duplo clique dentro de um viewport para trabalhar no modelo através dele (consulte [Trabalhar no modelo através de um viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). O nome comprido de uma folha é cortado no seu separador; pare o ponteiro sobre o separador para ver o nome inteiro. Com muitas folhas, {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Separadores de folha}} › {{ui:Só os números das folhas}} mostra apenas o número de cada folha (A-101) no seu separador.
- {{ui:+}} cria uma folha nova com uma margem, uma legenda e um viewport. É o mesmo que o comando {{cmd:LAYOUT}}.
- Faça duplo clique num separador de folha para lhe mudar o nome. Com um separador em foco, {{key:Left}} e {{key:Right}} movem-se entre separadores.

Cada separador mantém o seu próprio zoom e deslocamento da vista. Consulte [Preparar uma folha](topic:sheets-and-viewports).

## O painel da direita: Propriedades

O painel da direita muda consoante o que está selecionado.

- **Nada selecionado, no separador {{ui:Modelo}}:** o título é {{ui:Definições atuais}}. Aqui define a {{ui:Camada}}, a {{ui:Cor}} e a {{ui:Altura do texto}} dos objetos novos, as {{ui:Unidades}} do desenho e os tamanhos das cotas novas ({{ui:Altura do texto}}, {{ui:Tamanho da seta}}, {{ui:Casas decimais}}, {{ui:Escala global}}).
- **Nada selecionado, numa folha:** o título é "Folha:" e o nome da folha. Pode mudar o nome da folha, alterar o seu {{ui:Papel}} e {{ui:Orientação}}, {{ui:Imprimir esta folha}} ou {{ui:Eliminar esta folha}}. Por baixo seguem-se as definições dos objetos novos.
- **Um objeto selecionado:** o seu tipo como título (Linha, Círculo, Texto, Cota, Viewport …), depois a sua camada, cor e geometria. Escreva um valor novo e prima {{key:Enter}} para o alterar.
- **Vários objetos selecionados:** quantos, e a {{ui:Camada}} e a {{ui:Cor}} que têm em comum. Alterar qualquer uma altera-os a todos. "Varia" significa que diferem.

Consulte [Editar com grips e Propriedades](topic:grips-and-properties).

Por baixo, o painel {{ui:Parâmetros}} abre-se quando escolhe {{ui:Parâmetros}} ou escreve {{cmd:PARAMETERS}}: todos os parâmetros e restrições dimensionais numa só tabela. Consulte [Utilizar parâmetros e equações](topic:parameters).

## A linha de comandos

Em baixo está a linha de comandos: o histórico do que fez e, por baixo, o pedido.

- A etiqueta do pedido diz `Comando:` quando nada está em execução. Enquanto um comando corre, mostra a pergunta, as suas opções entre parênteses retos e o valor predefinido entre sinais de menor e maior, por exemplo `Especifique o raio do círculo [Diâmetro] <500>:`.
- À medida que escreve o nome de um comando, uma sugestão à direita propõe comandos correspondentes. Prima {{key:Tab}} para aceitar o primeiro. "Comando inexistente" significa que nada corresponde.
- {{key:Up}} e {{key:Down}} trazem de volta linhas que escreveu antes.
- O histórico guarda as últimas 400 linhas. As mensagens dos comandos, as medições de {{cmd:DIST}} e {{cmd:LIST}} e os relatórios de gravação e de impressão aparecem aqui.

## A barra de estado

A fila mesmo em baixo é a barra de estado.

- **Coordenadas** à esquerda: o X e o Y da cruz. Enquanto um comando tem um ponto base, mostra também a distância e o ângulo a partir dele, por exemplo `Δ 1200 < 90°`.
- **Mensagens** ao meio, como "Orto ligado" ou "Camada atual: Paredes". Desaparecem ao fim de alguns segundos.
- **{{ui:Grelha}}**, **{{ui:Orto}}**, **{{ui:Polar}}**, **{{ui:Snap}}**, **{{ui:Rastreio}}**, **{{ui:Din}}** e **{{ui:LWT}}** à direita. Cada um é um interruptor; um botão premido está ligado. {{ui:LWT}} mostra as espessuras de linha no ecrã (consulte [Espessuras de linha e tipos de linha](topic:units-papers-scales#line-weights-and-linetypes)). A pequena seta junto a {{ui:Snap}} abre {{ui:Snaps a objetos}}, onde assinala quais os snaps ativos. Consulte [Snap a pontos dos objetos](topic:object-snaps).

## A caixa de diálogo Imprimir para PDF

{{ui:Imprimir}} (ou {{key:Mod+P}}) abre a caixa de diálogo {{ui:Imprimir para PDF}}, com as definições à esquerda e uma pré-visualização em direto à direita. Consulte [Imprimir para PDF](topic:plot-pdf).

## A ajuda

{{key:F1}} ou o botão {{ui:Ajuda}} abre esta ajuda como um painel lateral; o desenho continua utilizável ao lado. Funciona sem ligação. {{key:F1}} outra vez, ou {{key:Esc}} dentro do painel, fecha-o. Consulte [Utilizar esta ajuda](common:help).
