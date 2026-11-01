---
title: A tela do CadCraft
summary: Um passeio por cada barra, painel e guia do aplicativo de desenho, pelo nome que ela tem na tela.
keywords: tela, interface, barra de ferramentas, faixa de opções, painéis, linha de comando, barra de status, guias, guias de layout, propriedades, painel de camadas, tour
from: b5a33388
---

A tela tem sete partes. De cima para baixo: a barra do aplicativo, a barra de ferramentas, a área de desenho com um painel de cada lado, as guias sob o desenho, a linha de comando e a barra de status.

## A barra do aplicativo

A barra fina no topo pertence ao site, não ao desenho. Ela mostra a marca do CadCraft, o nome do aplicativo, a versão que você está usando, um link para a página do aplicativo, um botão {{ui:Ajuda}} (ou {{key:F1}}), um botão {{ui:Salvar para uso offline}}, um botão {{ui:Tela cheia}} e dois botões de tema, {{ui:Papel}} e {{ui:Modelo}}.

O botão {{ui:Configurações}} (engrenagem) guarda as configurações do próprio CadCraft e as que todos os aplicativos compartilham: veja [Configurações do CadCraft](topic:settings).

{{ui:Salvar para uso offline}} guarda neste navegador uma cópia do CadCraft, com o leitor de DWG, para que ele abra sem conexão. O rótulo mostra o estado: "Salvando N de M", "Pronto para uso offline", "Não foi possível salvar" ou "Offline indisponível". Veja [Trabalhar offline](common:offline).

:::note
Os botões {{ui:Papel}} e {{ui:Modelo}} da barra do aplicativo só mudam as cores da tela: {{ui:Papel}} é um tema claro, {{ui:Modelo}} um tema escuro. Eles não têm relação com a guia {{ui:Modelo}} sob o desenho, que alterna entre o desenho e as folhas dele.
:::

O botão {{ui:Tela cheia}}, ou {{key:Ctrl+Shift+F}} (a tecla Control em todos os computadores, Mac inclusive), percorre três modos de tela: normal, tela cheia e tela cheia com as barras ocultas. Com as barras ocultas, leve o ponteiro até a borda superior da tela para trazê-las de volta.

## A barra de ferramentas

Sob a barra do aplicativo fica a barra de ferramentas. Cada botão executa um comando, exatamente como se você o tivesse digitado, então a linha de comando faz as mesmas perguntas nos dois casos. Passe o ponteiro sobre um botão para ver o alias do comando. Os grupos são:

| Grupo | Botões |
|---|---|
| Arquivo | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Salvar}}, {{ui:Salvar como}}, {{ui:Plotar}} |
| Desenhar | {{ui:Linha}}, {{ui:Polilinha}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Retângulo}}, {{ui:Polígono}}, {{ui:Elipse}}, {{ui:Texto}}, {{ui:Parágrafo}}, {{ui:Hachura}} e {{ui:Mais}}: {{ui:Ponto}}, {{ui:Linha de construção}} e {{ui:Semirreta}} (veja [Linhas de construção e semirretas](topic:construction-lines)) |
| Modificar | {{ui:Mover}}, {{ui:Copiar}}, {{ui:Girar}}, {{ui:Escala}}, {{ui:Espelhar}}, {{ui:Esticar}}, {{ui:Deslocar}}, {{ui:Aparar}}, {{ui:Estender}}, {{ui:Concordância}}, {{ui:Chanfro}}, {{ui:Explodir}}, {{ui:Apagar}} e {{ui:Mais}}: {{ui:Matriz}}, {{ui:Unir}}, {{ui:Correspondência de propriedades}}, {{ui:Quebrar}} e {{ui:Alongar}} |
| Anotar | {{ui:Linear}}, {{ui:Alinhada}}, {{ui:Ângulo}}, {{ui:Raio}}, {{ui:Diâmetro}} (cotas), {{ui:Chamada}} (multichamada) e {{ui:Mais}}: {{ui:Cota contínua}}, {{ui:Cota de linha de base}} e {{ui:Nuvem de revisão}} |
| Paramétrico | {{ui:Auto}}, {{ui:Restringir}}, {{ui:Cota}}, {{ui:Parâmetros}} e {{ui:Mais}} com cada restrição (veja [Restrinja um desenho](topic:constraints)) |
| Blocos | {{ui:Criar}}, {{ui:Inserir}}, {{ui:Biblioteca}} e {{ui:Mais}}: {{ui:Editar bloco}} e {{ui:Definir atributo}} |
| Folhas | {{ui:Nova folha}}, {{ui:Viewport}} |
| Editar | {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}} (para a área de transferência), {{ui:Colar}} e {{ui:Mais}}: um menu com {{ui:Recortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo local}}, {{ui:Duplicar e mover}}, {{ui:Excluir}}, {{ui:Selecionar tudo}}, {{ui:Limpar seleção}}, {{ui:Seleção rápida}}, {{ui:Selecionar semelhantes}} e {{ui:Localizar e substituir}}, cada um com a sua tecla |
| Vista | {{ui:Extensão}}, {{ui:Janela}}, {{ui:Anterior}} e {{ui:Mais}}: {{ui:Medir distância}}, {{ui:Área}}, {{ui:Medir (raio, ângulo …)}} e a tela dividida: {{ui:Dividir lado a lado}}, {{ui:Dividir empilhado}}, {{ui:Quatro painéis}}, {{ui:Um painel}} (veja [Divida a tela](topic:split-screen)), e {{ui:Girar a vista 90° para a esquerda}}, {{ui:Girar a vista 90° para a direita}}, {{ui:Voltar ao global}} (veja [Gire a vista](topic:ucs-and-turned-view)) |

{{ui:Copiar}} no grupo {{ui:Modificar}} é o comando {{cmd:COPY}} (ponto base e depois o destino de cada cópia); {{ui:Copiar}} no grupo {{ui:Editar}} coloca objetos na área de transferência para {{ui:Colar}}. Veja [Copiar, colar e duplicar](topic:copy-paste). O botão do comando em execução permanece destacado até o comando terminar. As dicas de ferramenta mostram os atalhos do Windows ("Ctrl+O"); no Mac, {{key:Mod+O}} também funciona.

Em uma janela baixa (um notebook com a tela em escala de 125 % ou mais, por exemplo), a barra de ferramentas nunca toma o lugar do desenho: quando o desenho ficaria com altura de menos, os botões tiram as palavras sob os ícones e os nomes dos grupos (passe o ponteiro sobre um botão para ver o nome) e, se ainda não for suficiente, a barra de ferramentas vira uma só linha que rola para os lados. Uma janela mais alta traz as palavras de volta.

## O painel da esquerda

O painel da esquerda tem três seções.

- **{{ui:Camadas}}.** Todas as camadas do desenho, com um ponto cheio na atual. Clique em um nome para tornar essa camada a atual. Cada linha tem uma amostra de cor (clique nela para escolher uma cor) e quatro botões: ligar/desligar (olho), congelar (floco de neve), bloquear (cadeado) e plotar (impressora). {{ui:Nova camada}} abre uma caixa para adicionar uma. Veja [Organize um desenho com camadas](topic:layers).
- **{{ui:Blocos}}.** Os blocos definidos no desenho, quantas vezes cada um é usado e um botão {{ui:Inserir}} para cada um. Veja [Crie e insira blocos](topic:blocks).
- **{{ui:Desenho}}.** Dados sobre o arquivo aberto: nome (com "(alterado)" quando há edições não salvas), formato, tamanho, unidades, número de objetos, camadas, blocos e folhas. Depois de abrir um arquivo, uma caixa "Sobre este arquivo" lista o que o CadCraft não conseguiu mostrar ou teve de converter.

## A área de desenho

O meio da tela é o desenho. O ponteiro é uma mira em cruz. Quando o CadCraft quer um ponto, um pequeno marcador e um rótulo ("Extremidade", "Ponto médio") mostram onde um snap de objeto vai cair. Quando ele quer objetos, a mira tem uma caixa de seleção e os objetos sob ela se acendem.

Quando o desenho está vazio, um cartão "Comece a desenhar" mostra alguns primeiros comandos. Ele some assim que você executa um comando ou abre um arquivo. Você pode soltar um arquivo DWG ou DXF em qualquer ponto dessa área para abri-lo.

## As guias sob o desenho

Abaixo do desenho ficam as guias: {{ui:Modelo}} primeiro, depois {{ui:3D}}, depois uma guia por folha (layout) e por fim um botão {{ui:+}}.

- {{ui:Modelo}} é o próprio desenho, em tamanho real, em unidades de desenho.
- {{ui:3D}} mostra o desenho deitado no chão e os sólidos feitos a partir dele. Enquanto ela aparece, a barra de ferramentas tem um grupo {{ui:3D}} no lugar dos grupos do desenho. Veja [Modele em 3D](topic:3d-solids).
- Cada guia de folha é uma folha de papel com uma legenda e viewports para o modelo. O que você desenha ali está em unidades de papel (milímetros ou polegadas). Clique duas vezes dentro de um viewport para trabalhar no modelo através dele (veja [Trabalhe no modelo através de um viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Um nome de folha longo é cortado na guia; passe o ponteiro sobre a guia para ver o nome inteiro. Com muitas folhas, {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Guias de folha}} › {{ui:Só os números das folhas}} mostra apenas o número de cada folha (A-101) na guia.
- {{ui:+}} cria uma folha nova com borda, legenda e um viewport. É o mesmo que o comando {{cmd:LAYOUT}}.
- Clique duas vezes em uma guia de folha para renomeá-la. Com uma guia em foco, {{key:Left}} e {{key:Right}} alternam entre as guias.

Cada guia guarda o próprio zoom e pan. Veja [Monte uma folha](topic:sheets-and-viewports).

## O painel da direita: Propriedades

O painel da direita muda conforme o que está selecionado.

- **Nada selecionado, na guia {{ui:Modelo}}:** o título é {{ui:Configurações atuais}}. Aqui você define a {{ui:Camada}}, a {{ui:Cor}} e a {{ui:Altura do texto}} dos objetos novos, as {{ui:Unidades}} do desenho e os tamanhos das cotas novas ({{ui:Altura do texto}}, {{ui:Tamanho da seta}}, {{ui:Casas decimais}}, {{ui:Escala geral}}).
- **Nada selecionado, em uma folha:** o título é "Folha:" e o nome da folha. Você pode renomear a folha, mudar o {{ui:Papel}} e a {{ui:Orientação}}, {{ui:Plotar esta folha}} ou {{ui:Excluir esta folha}}. As configurações dos objetos novos vêm logo abaixo.
- **Um objeto selecionado:** o tipo dele como título (Linha, Círculo, Texto, Cota, Viewport …), depois a camada, a cor e a geometria. Digite um valor novo e pressione {{key:Enter}} para alterar.
- **Vários objetos selecionados:** quantos são e a {{ui:Camada}} e a {{ui:Cor}} em comum. Alterar qualquer uma altera todos. "Varia" significa que eles diferem.

Veja [Edite com grips e Propriedades](topic:grips-and-properties).

Abaixo dele, o painel {{ui:Parâmetros}} abre quando você escolhe {{ui:Parâmetros}} ou digita {{cmd:PARAMETERS}}: todos os parâmetros e restrições dimensionais em uma só tabela. Veja [Use parâmetros e equações](topic:parameters).

## A linha de comando

Embaixo fica a linha de comando: o histórico do que você fez e, sob ele, o prompt.

- O rótulo do prompt mostra `Comando:` quando nada está em execução. Enquanto um comando roda, ele mostra a pergunta, as opções entre colchetes e o padrão entre sinais de menor e maior, por exemplo `Especifique o raio do círculo [Diâmetro] <500>:`.
- Ao digitar o nome de um comando, uma dica à direita sugere comandos correspondentes. Pressione {{key:Tab}} para aceitar o primeiro. "Comando inexistente" significa que nada corresponde.
- {{key:Up}} e {{key:Down}} trazem de volta linhas digitadas antes.
- O histórico guarda as últimas 400 linhas. Mensagens de comandos, medidas de {{cmd:DIST}} e {{cmd:LIST}} e relatórios de salvamento e de plotagem aparecem aqui.

## A barra de status

A última linha, na base, é a barra de status.

- **Coordenadas** à esquerda: o X e o Y da mira. Enquanto um comando tem um ponto base, ela também mostra a distância e o ângulo a partir dele, por exemplo `Δ 1200 < 90°`.
- **Mensagens** no meio, como "Orto ligado" ou "Camada atual: Paredes". Elas somem após alguns segundos.
- **{{ui:Grade}}**, **{{ui:Orto}}**, **{{ui:Polar}}**, **{{ui:Snap}}**, **{{ui:Rastr.}}**, **{{ui:Din}}** e **{{ui:LWT}}** à direita. Cada um é uma chave liga/desliga; um botão pressionado está ligado. {{ui:LWT}} mostra as espessuras de linha na tela (veja [Espessuras e tipos de linha](topic:units-papers-scales#line-weights-and-linetypes)). A pequena seta ao lado de {{ui:Snap}} abre {{ui:Snaps de objeto}}, onde você marca quais snaps estão ativos. Veja [Snap em pontos de objetos](topic:object-snaps).

## A caixa de diálogo Plotar em PDF

{{ui:Plotar}} (ou {{key:Mod+P}}) abre a caixa de diálogo {{ui:Plotar em PDF}}, com as configurações à esquerda e uma visualização ao vivo à direita. Veja [Plotar em PDF](topic:plot-pdf).

## A ajuda

{{key:F1}} ou o botão {{ui:Ajuda}} abre esta ajuda como um painel lateral; o desenho continua utilizável ao lado. Ela funciona sem conexão. {{key:F1}} de novo, ou {{key:Esc}} dentro do painel, fecha. Veja [Como usar esta ajuda](common:help).
