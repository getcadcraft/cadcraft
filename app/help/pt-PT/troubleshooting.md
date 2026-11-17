---
title: Resolução de problemas
summary: Mensagens que o CadCraft mostra e problemas que pode encontrar, cada um com a causa e a solução.
keywords: problema, erro, não funciona, mensagem, não é possível abrir, comando desconhecido, nada acontece, bloqueado, teclas não funcionam, em branco, em falta, corrigir
from: 8299b222
---

## Abrir ficheiros

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| "O CadCraft abre desenhos DWG e DXF. "…" não é nenhum dos dois." | O ficheiro não é um `.dwg` nem um `.dxf`. | Abra o próprio ficheiro de desenho. Um PDF pode ser trazido (ao abrir, pergunta-se se importa ou anexa, ver [Subjacentes PDF](topic:pdf-underlay)); as imagens entram com `IMAGEATTACH`. |
| "Este DXF binário termina a meio de um objeto: o ficheiro está truncado ou danificado." | O DXF binário para antes do fim. | Escreva `RECOVER` para abrir o que pode ser lido, ou peça o ficheiro de novo. |
| "Este ficheiro não é um DXF legível (código de grupo inválido na linha …)." | O DXF está danificado ou não é de facto um DXF. | Peça o ficheiro de novo, ou um DWG. |
| "Não foi possível ler este desenho. Pode estar danificado, ou guardado numa versão que o leitor ainda não trata (…)." | O leitor de DWG não conseguiu ler o ficheiro. | Peça o DWG guardado numa versão anterior, ou um DXF. |
| "Este desenho é do AutoCAD R11 / R12 (DWG AC1009), mais antigo do que o CadCraft lê …" | Os ficheiros DWG da versão 12 e anteriores usam um formato que o CadCraft não lê. | No programa que o criou, guarde-o como DXF (qualquer versão) ou como DWG mais recente, e abra-o. O Guardar como do próprio CadCraft oferece DXF R12 para programas que querem esse formato antigo. |
| "Não foi possível abrir …" seguido de uma mensagem de rede, no primeiro DWG | O leitor de DWG não pôde ser transferido: está offline e o CadCraft não está guardado para utilização offline, ou a ligação caiu. | Ligue-se e tente de novo, ou abra um DXF. Clique em {{ui:Guardar para offline}} e aguarde por "Pronto para offline", para que os ficheiros DWG abram offline da próxima vez. Ver [Trabalhar offline](common:offline). |
| O botão offline diz "Não foi possível guardar" | Alguns ficheiros não foram transferidos. | Verifique a ligação e clique no botão para tentar de novo. |
| O botão offline diz "Offline não disponível" | As janelas privadas e alguns computadores geridos não conseguem manter uma cópia offline. | Use uma janela normal, ou fique online. |
| O CadCraft não abre sem ligação | Não foi guardado para utilização offline neste navegador, ou o navegador o limpou. | Da próxima vez que estiver online, clique em {{ui:Guardar para offline}} e aguarde por "Pronto para offline". |
| O desenho abre mas faltam partes | Objetos que o CadCraft ainda não consegue desenhar, ou camadas desligadas ou congeladas no ficheiro. | Leia "Sobre este ficheiro" no painel da esquerda. Verifique o painel {{ui:Camadas}}. |
| O texto quebra em duas linhas | O CadCraft desenha o texto num tipo de letra de estilo Helvetica, mais largo do que alguns tipos de letra de CAD. | Encurte o texto em Propriedades, ou aceite a linha extra. |
| Um círculo aparece como elipse, ou o texto espelhado se lê no sentido certo | O objeto foi desenhado num plano inclinado, ou visto de baixo, no programa que criou o ficheiro. O CadCraft mostra-o como visto de cima, tal como a vista em planta desse programa; o texto mantém-se legível. | Nada a corrigir. Para o ver como no outro programa, peça o desenho achatado, ou com os objetos desenhados de cima. |
| Um bloco, círculo ou cota fica noutro sítio que não no programa que criou o ficheiro | Um caso de desenho que o CadCraft lê mal. | Diga-nos no Discord, com o ficheiro se o puder partilhar. |

## A linha de comandos

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| "Comando desconhecido "…". Escreva `HELP` para ver a lista." | Não existe nenhum comando ou alias com esse nome. | Escreva `HELP`, ou veja a [Referência de comandos](topic:commands). Alguns comandos familiares [ainda não estão implementados](topic:not-built-yet). |
| "Não existe esse comando" junto à linha de comandos, enquanto escreve | O que escreveu ainda não corresponde a nada. | Continue a escrever, ou verifique a ortografia. |
| "É necessário um ponto ou uma palavra-chave de opção." | O que escreveu não é um ponto nem uma opção. | Verifique o formato: `x,y`, `@dx,dy`, `@d<a` ou um único número. Ver [Introdução de coordenadas e distâncias](topic:coordinate-entry). |
| "É necessário um número positivo ou dois pontos." | Uma distância era negativa ou não era um número. | Escreva um número positivo, ou clique em dois pontos. |
| "É necessário um ângulo em graus ou dois pontos." | O ângulo não era um número. | Escreva os graus como um número simples. |
| "É necessário um número." | Era esperado um número. | Escreva apenas algarismos. |
| "Palavra-chave de opção inválida." | As letras não correspondem a uma opção. | Escreva as letras maiúsculas mostradas entre parênteses retos. |
| `*Cancelar*` | Foi premido {{key:Esc}}, ou {{key:Enter}} onde era necessário um ponto. | Inicie o comando de novo. |
| Ao escrever, o texto não chega à linha de comandos | Uma caixa de um painel ou de uma caixa de diálogo tem o cursor. | Prima {{key:Enter}} ou {{key:Esc}}, ou clique no desenho. |
| O comando usa objetos que não escolheu | Foram selecionados antes de iniciar o comando. | Prima {{key:Esc}} antes do comando. |
| Uma linha foi parar a um sítio inesperado | `x,y` é absoluto. | Use `@dx,dy` para pontos relativos. |
| "Termine ou cancele primeiro o comando atual (Esc)." | Foi premido {{key:Mod+S}} enquanto um comando estava a correr. | Prima {{key:Esc}} e depois guarde. |
| "Não foi possível guardar como DWG (AutoCAD 2000): … Experimente Guardar como e depois DXF." | Algo no desenho não pôde ser escrito como DWG. | Prima {{key:Mod+Shift+S}}, escolha {{ui:DXF R12}} e clique em {{ui:Guardar}}. |
| "Não guardado." | Fechou a caixa {{ui:Guardar uma cópia como}} com {{ui:Cancelar}} ou {{key:Esc}}. | Prima {{key:Mod+Shift+S}} de novo e clique em {{ui:Guardar}}. |

## Edição

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Um objeto não se seleciona | A sua camada está bloqueada, desligada ou congelada; ou está numa folha e é o modelo dentro de uma janela. | Desbloqueie a camada, ou vá ao separador {{ui:Modelo}}. |
| "Nada encontrado aí." | Nenhum objeto sob o clique. | Aproxime a vista e clique na própria linha. |
| "Nada cruza esse objeto aí." | {{cmd:TRIM}} não encontrou nenhum objeto a cruzar o troço que escolheu. | Verifique se a linha de corte realmente o cruza. |
| "Não é possível aparar esse objeto." | Aparar funciona em linhas, arcos, círculos e polilinhas. | Explodir os blocos primeiro, ou apague e desenhe de novo. |
| "Nenhum limite nessa direção." | {{cmd:EXTEND}} não encontrou nada onde encontrar. | Escolha mais perto da extremidade que deve crescer. |
| "Não é possível fazer o offset desse objeto." | O offset funciona em linhas, arcos, círculos e polilinhas. | Explodi-o primeiro, ou desenhe uma linha paralela. |
| "Não é possível fazer o offset tão longe." | O offset faria a forma ficar do avesso. | Use uma distância menor. |
| "O raio é demasiado grande." ou "A distância é demasiado grande." | A concordância ou o chanfre passaria a extremidade de uma linha. | Defina um raio menor com `R`, ou distâncias menores com `D`. |
| "Só o primeiro ou o último segmento de uma polilinha aberta pode ser cortado." | O canto cortaria para o meio de uma polilinha. | Escolha dois segmentos da polilinha vizinhos um do outro, ou use `P` para cada canto. |
| "Escolha uma segunda linha diferente." | A segunda escolha era a mesma linha, ou não era uma linha. | Escolha outra linha. |
| "Só as polilinhas, referências de blocos e cotas podem ser explodidas." | A seleção não tinha nada para explodir. | Selecione uma polilinha, referência de bloco ou cota. |
| "Esta é a camada atual. Torne outra camada atual primeiro." | Tentou desligar a camada atual. | Clique no nome de outra camada e só depois desligue esta. |
| "Já existe uma camada chamada …" | Os nomes das camadas têm de ser únicos. | Escolha outro nome. |
| "Nada para anular." | Não há mais nada para anular, ou abriu ou iniciou um desenho (isso limpa o histórico). | — |

## Cotas e blocos

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| O texto e as setas das cotas estão minúsculos ou enormes | Os tamanhos estão em unidades de desenho; a escala global não se adequa ao desenho. | Defina {{cmd:DIMSCALE}} para a escala de impressão; ver [Definir tamanhos de cotas](topic:dimension-settings). |
| "Escolha um ponto dentro do ângulo que quer medir." | A localização da cota angular está sobre um dos lados. | Clique dentro do ângulo. |
| "Essas linhas são paralelas." | Linhas paralelas não têm ângulo entre si. | Escolha duas linhas que se encontrem. |
| "Escolha uma cota linear ou alinhada." | {{cmd:DIMCONTINUE}} ou {{cmd:DIMBASELINE}} precisa de uma para começar. | Escolha uma cota linear ou alinhada. |
| "Este desenho ainda não tem blocos: F insere um a partir de um ficheiro, L a partir da biblioteca …" | O desenho não tem blocos próprios. | Escreva `F` ou `L`, ou crie um bloco com {{cmd:BLOCK}}. |
| "Nenhum bloco chamado "…"." | O nome está errado. | A mensagem lista os blocos que existem. |
| "Um nome de bloco não pode começar por * nem usar …" seguido de uma lista de carateres | O nome tem um carácter que os blocos não podem usar. | Use letras, algarismos, `-` e `_`. |
| "Um bloco não pode conter-se a si próprio." | A seleção tem uma referência ao bloco que está a ser criado. | Deixe essa referência de fora. |
| "Nenhum objeto selecionado; nada criado." | Foi premido {{key:Enter}} antes de selecionar. | Execute {{cmd:BLOCK}} de novo e selecione os objetos. |

## Folhas e impressão

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| "Os viewports vão num layout. Abra primeiro um separador de layout (ou crie um com LAYOUT)." | {{cmd:MVIEW}} no separador {{ui:Modelo}}. | Clique primeiro num separador de folha. |
| "Abra primeiro o layout com o viewport." | {{cmd:VPVIEW}} no separador {{ui:Modelo}}. | Clique primeiro no separador da folha. |
| Uma escala de viewport parece dez vezes errada | As unidades do desenho estão erradas. | Defina {{ui:Unidades}} em {{ui:Definições atuais}}. |
| "Ainda não há nada para imprimir." | O modelo está vazio. | Desenhe algo, ou abra um desenho. |
| "Escolha a janela a imprimir." | {{ui:Uma janela…}} está escolhida e nenhuma janela foi escolhida. | Clique em {{ui:Escolher}} e escolha dois cantos. |
| "… maior do que o papel: as extremidades são cortadas." | A área não cabe nessa escala. | Escolha uma escala menor, um papel maior, ou {{ui:Ajustar ao papel}}. |
| "O navegador bloqueou o novo separador, pelo que o PDF foi transferido." | As janelas pop-up estão bloqueadas para o site. | Abra o PDF transferido, ou permita pop-ups para o site. |
| Os carateres imprimem-se como "?" | Os tipos de letra do PDF não têm letra para eles (ideogramas raros, hindi e outras escritas que precisam de formação complexa, …), ou o tipo de letra maior não pôde ser obtido (offline). As escritas europeias, cirílico, grego, hebraico, árabe, persa, urdu, tailandês, chinês, japonês e coreano imprimem-se como são. | Para escritas árabe, tailandesa, chinesa, japonesa ou coreana, imprima de novo com ligação. As outras escritas ainda não estão implementadas. |
| As linhas de construção aparecem no PDF | A respetiva camada é impressa. | Clique no botão de impressão da camada. |
| Todas as linhas têm a mesma espessura | A respetiva {{ui:Espessura de linha}} é {{ui:Predefinição}}, pelo que são impressas com a espessura de caneta da caixa de diálogo. | Dê às camadas ou aos objetos uma {{ui:Espessura de linha}} no painel da direita, ou escolha uma {{ui:Espessura de linha}} na caixa de diálogo. Para ver as espessuras no ecrã, prima {{ui:LWT}} na barra de estado. |

## Teclas e ecrã

| Sintoma | Causa | Solução |
|---|---|---|
| F3, F7 ou F8 muda o volume ou abre o Mission Control | Teclas de função do Mac. | Mantenha **fn** premido, ou use os botões da barra de estado. Ver [Teclas, ratos e trackpads](common:keys). |
| A tecla F7 pergunta sobre a navegação com cursor | Uso próprio do Firefox para a tecla F7. | Escolha Não; use o botão {{ui:Grelha}}. |
| {{key:Mod+N}} abriu uma janela do navegador | O navegador reserva essa tecla. | Clique em {{ui:Novo}} ou escreva `NEW`. |
| {{key:Mod+A}} selecionou o texto da linha de comandos | A linha de comandos tinha o cursor. | Clique primeiro num objeto, ou escreva `ALL` numa mensagem `Selecione objetos`. |
| {{key:Delete}} não apaga | A linha de comandos tinha o cursor. | Escreva `E` e prima {{key:Enter}}. |
| O clique com o botão direito não faz nada num trackpad de Mac | O Control-clique pode contar como um clique normal. | Clique com dois dedos. |
| Nada desloca a vista num trackpad | Não há botão do meio, e Space não desloca a vista. | Deslize com dois dedos: a vista 2D desloca-se (o pinch e a roda do rato dão zoom). Ou arraste com o botão direito premido. |
| O primeiro {{key:Esc}} saiu do ecrã inteiro | O navegador usa Esc para sair do ecrã inteiro. | Prima {{key:Esc}} de novo para cancelar o comando. |
| {{key:F1}} não faz nada num Mac | F1 é uma tecla de brilho. | Mantenha **fn** premido, ou clique em {{ui:Ajuda}}. |
| O que escreve vai para a caixa de pesquisa da ajuda | O painel de ajuda tem o cursor. | Clique no desenho. |
| O desenho ficou em branco | Afastou muito a vista. | Clique em {{ui:Extensão}}, ou faça duplo clique na roda. |
| "Sair do site?" ao fechar o separador | Há alterações não guardadas. | Fique, guarde com {{key:Mod+S}} e depois feche. |
