---
title: Solução de problemas
summary: Mensagens que o CadCraft mostra e problemas que você pode encontrar, cada um com a causa e a solução.
keywords: problema, erro, não funciona, mensagem, não é possível abrir, comando desconhecido, nada acontece, travado, teclas não funcionam, em branco, ausente, corrigir
from: 8299b222
---

## Abrir arquivos

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| "O CadCraft abre desenhos DWG e DXF. "…" não é nenhum dos dois." | O arquivo não é um `.dwg` nem um `.dxf`. | Abra o próprio arquivo de desenho. Um PDF pode ser importado (ao abrir, o programa pergunta: importar ou anexar; veja [Sobreposições PDF](topic:pdf-underlay)); imagens são inseridas com `IMAGEATTACH`. |
| "Este DXF binário termina no meio de um objeto: o arquivo foi truncado ou está danificado." | O DXF binário para antes do fim. | Digite RECOVER para abrir o que puder ser lido, ou peça o arquivo novamente. |
| "Este arquivo não é um DXF legível (código de grupo inválido na linha …)." | O DXF está danificado ou não é realmente um DXF. | Peça o arquivo novamente, ou um DWG. |
| "Não foi possível ler este desenho. Ele pode estar danificado, ou ter sido salvo em uma versão que o leitor ainda não trata (…)." | O leitor de DWG não conseguiu ler o arquivo. | Peça o DWG salvo em uma versão mais antiga, ou um DXF. |
| "Este desenho é do AutoCAD R11 / R12 (DWG AC1009), mais antigo do que o CadCraft consegue ler …" | Arquivos DWG da Release 12 e anteriores usam um formato que o CadCraft não lê. | No programa que o criou, salve-o como DXF (qualquer versão) ou como um DWG mais recente, e abra esse arquivo. O Salvar como do CadCraft oferece DXF R12 para programas que precisam desse formato antigo. |
| "Não foi possível abrir …" seguido de uma mensagem de rede, no primeiro DWG | O leitor de DWG não pôde ser baixado: você está offline e o CadCraft não está salvo para uso offline, ou a conexão caiu. | Conecte-se e tente de novo, ou abra um DXF. Clique em {{ui:Salvar para uso offline}} e aguarde "Pronto para uso offline", para que arquivos DWG abram offline na próxima vez. Veja [Trabalhar offline](common:offline). |
| O botão offline mostra "Não foi possível salvar" | Alguns arquivos não foram baixados. | Verifique a conexão e clique no botão para tentar novamente. |
| O botão offline mostra "Offline não disponível" | Janelas privadas e alguns computadores gerenciados não conseguem manter uma cópia offline. | Use uma janela normal, ou permaneça online. |
| O CadCraft não abre sem conexão | Ele não foi salvo para uso offline neste navegador, ou o navegador o apagou. | Na próxima vez que estiver online, clique em {{ui:Salvar para uso offline}} e aguarde "Pronto para uso offline". |
| O desenho abre, mas faltam partes | Objetos que o CadCraft ainda não consegue desenhar, ou camadas desligadas ou congeladas no arquivo. | Leia "Sobre este arquivo" no painel da esquerda. Verifique o painel {{ui:Camadas}}. |
| O texto quebra em duas linhas | O CadCraft desenha o texto em uma fonte estilo Helvetica, mais larga que algumas fontes de CAD. | Encurte o texto em Propriedades, ou aceite a linha extra. |
| Um círculo aparece como elipse, ou um texto espelhado fica legível no sentido certo | O objeto foi desenhado em um plano inclinado, ou visto de baixo, no programa que criou o arquivo. O CadCraft o mostra como visto de cima, da mesma forma que a vista em planta desse programa; o texto é mantido legível. | Nada a corrigir. Para vê-lo como no outro programa, peça o desenho achatado ou com os objetos desenhados de cima. |
| Um bloco, círculo ou cota fica em outro lugar, diferente do programa que criou o arquivo | Um caso de desenho que o CadCraft lê de forma errada. | Avise-nos no Discord, com o arquivo, se puder compartilhá-lo. |

## A linha de comando

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| "Comando desconhecido "…". Digite HELP para ver a lista." | Não há comando ou alias com esse nome. | Digite `HELP`, ou veja a [Referência de comandos](topic:commands). Alguns comandos conhecidos [ainda não foram implementados](topic:not-built-yet). |
| "No such command" ao lado da linha de comando enquanto você digita | O que você digitou ainda não corresponde a nada. | Continue digitando, ou verifique a grafia. |
| "Point or option keyword required." | O que você digitou não é um ponto nem uma opção. | Verifique o formato: `x,y`, `@dx,dy`, `@d<a`, ou um único número. Veja [Entrada de coordenadas e distâncias](topic:coordinate-entry). |
| "Requires a positive number or two points." | Uma distância era negativa ou não era um número. | Digite um número positivo, ou clique em dois pontos. |
| "Requires an angle in degrees or two points." | O ângulo não era um número. | Digite os graus como um número simples. |
| "Requires a number." | Era esperado um número. | Digite apenas algarismos. |
| "Invalid option keyword." | As letras não correspondem a nenhuma opção. | Digite as letras maiúsculas mostradas entre colchetes. |
| `*Cancel*` | Você pressionou {{key:Esc}}, ou {{key:Enter}} onde era necessário um ponto. | Inicie o comando novamente. |
| A digitação não chega à linha de comando | Uma caixa em um painel ou em uma caixa de diálogo está com o cursor. | Pressione {{key:Enter}} ou {{key:Esc}}, ou clique no desenho. |
| O comando usa objetos que você não selecionou | Eles foram selecionados antes de você iniciar o comando. | Pressione {{key:Esc}} antes do comando. |
| Uma linha foi para um lugar inesperado | `x,y` é absoluto. | Use `@dx,dy` para pontos relativos. |
| "Termine ou cancele primeiro o comando atual (Esc)." | Você pressionou {{key:Mod+S}} enquanto um comando estava em execução. | Pressione {{key:Esc}} e depois salve. |
| "Não foi possível salvar como DWG (AutoCAD 2000): … Tente Salvar como e depois DXF." | Algo no desenho não pôde ser gravado como DWG. | Pressione {{key:Mod+Shift+S}}, escolha {{ui:DXF R12}} e clique em {{ui:Salvar}}. |
| "Não salvo." | Você fechou a caixa {{ui:Salvar uma cópia como}} com {{ui:Cancelar}} ou {{key:Esc}}. | Pressione {{key:Mod+Shift+S}} novamente e clique em {{ui:Salvar}}. |

## Edição

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Um objeto não é selecionado | A camada dele está bloqueada, desligada ou congelada; ou você está em uma folha e ele é o modelo dentro de uma viewport. | Desbloqueie a camada, ou vá para a guia {{ui:Modelo}}. |
| "Nada encontrado ali." | Nenhum objeto sob o clique. | Aproxime o zoom e clique na própria linha. |
| "Nada cruza esse objeto ali." | {{cmd:TRIM}} não encontrou nenhum objeto cruzando o trecho que você escolheu. | Verifique se a linha de corte realmente cruza o objeto. |
| "Não é possível aparar esse objeto." | Aparar funciona em linhas, arcos, círculos e polilinhas. | Desmembre os blocos primeiro, ou apague e desenhe de novo. |
| "Nenhum limite nessa direção." | {{cmd:EXTEND}} não encontrou nada para alcançar. | Clique mais perto da extremidade que deve crescer. |
| "Não é possível deslocar esse objeto." | Deslocar funciona em linhas, arcos, círculos e polilinhas. | Explodir o objeto primeiro, ou desenhar uma linha paralela. |
| "Não é possível deslocar essa distância." | O deslocamento inverteria a forma. | Use uma distância menor. |
| "Raio grande demais." ou "Distância grande demais." | A concordância ou o chanfro passaria da extremidade de uma linha. | Defina um raio menor com `R`, ou distâncias menores com `D`. |
| "Só o primeiro ou o último segmento de uma polilinha aberta pode ser recortado." | A esquina entraria no meio da polilinha. | Selecione dois segmentos vizinhos da polilinha, ou use `P` para todas as esquinas. |
| "Selecione uma segunda linha, diferente." | O segundo clique foi na mesma linha, ou não foi em uma linha. | Selecione outra linha. |
| "Só polilinhas, referências de bloco e cotas são explodidas." | A seleção não tinha nada para explodir. | Selecione uma polilinha, uma referência de bloco ou uma cota. |
| "Esta é a camada atual. Torne outra camada atual primeiro." | Você tentou desligar a camada atual. | Clique no nome de outra camada e depois desligue esta. |
| "Já existe uma camada chamada …" | Os nomes de camada devem ser únicos. | Escolha outro nome. |
| "Nada para desfazer." | Não há mais nada para desfazer, ou você abriu ou começou um desenho (isso limpa o histórico). | — |

## Cotas e blocos

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| O texto e as setas da cota estão minúsculos ou enormes | Os tamanhos estão em unidades de desenho; a escala geral não se ajusta ao desenho. | Defina {{cmd:DIMSCALE}} para a escala de plotagem; veja [Definir tamanhos de cota](topic:dimension-settings). |
| "Selecione um ponto dentro do ângulo que você quer medir." | A posição da cota angular está sobre um dos lados. | Clique dentro do ângulo. |
| "Essas linhas são paralelas." | Linhas paralelas não formam ângulo entre si. | Selecione duas linhas que se encontrem. |
| "Selecione uma cota linear ou alinhada." | {{cmd:DIMCONTINUE}} ou {{cmd:DIMBASELINE}} precisa de uma para começar. | Selecione uma cota linear ou alinhada. |
| "Este desenho ainda não tem blocos: F insere um de um arquivo, L da biblioteca …" | O desenho não tem blocos próprios. | Digite `F` ou `L`, ou crie um bloco com {{cmd:BLOCK}}. |
| "Nenhum bloco chamado "…"." | O nome está errado. | A mensagem lista os blocos existentes. |
| "Um nome de bloco não pode começar com * nem usar …" seguido de uma lista de caracteres | O nome tem um caractere que os blocos não aceitam. | Use letras, dígitos, `-` e `_`. |
| "Um bloco não pode conter a si mesmo." | A seleção contém uma referência ao bloco que está sendo criado. | Deixe essa referência de fora. |
| "Nenhum objeto selecionado; nada criado." | Você pressionou {{key:Enter}} antes de selecionar. | Execute {{cmd:BLOCK}} novamente e selecione os objetos. |

## Folhas e plotagem

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| "Viewports ficam em um layout. Abra primeiro uma guia de layout (ou crie uma com LAYOUT)." | {{cmd:MVIEW}} na guia {{ui:Modelo}}. | Clique antes em uma guia de folha. |
| "Abra primeiro o layout com a viewport." | {{cmd:VPVIEW}} na guia {{ui:Modelo}}. | Clique antes na guia da folha. |
| A escala de uma viewport parece dez vezes errada | As unidades do desenho estão erradas. | Defina {{ui:Unidades}} em {{ui:Configurações atuais}}. |
| "Ainda não há nada para plotar." | O modelo está vazio. | Desenhe algo, ou abra um desenho. |
| "Selecione a janela para plotar." | {{ui:Uma janela…}} está escolhida e nenhuma janela foi selecionada. | Clique em {{ui:Selecionar}} e escolha dois cantos. |
| "… maior que o papel: as bordas são cortadas." | A área não cabe nessa escala. | Escolha uma escala menor, um papel maior, ou {{ui:Ajustar ao papel}}. |
| "O navegador bloqueou a nova guia, então o PDF foi baixado." | Pop-ups estão bloqueados para o site. | Abra o PDF baixado, ou permita pop-ups para o site. |
| Caracteres são impressos como "?" | As fontes do PDF não têm letra para eles (ideogramas raros, hindi e outros alfabetos que exigem formatação complexa, …), ou a fonte maior não pôde ser baixada (offline). Alfabetos europeus, cirílico, grego, hebraico, árabe, persa, urdu, tailandês, chinês, japonês e coreano são impressos como são. | Para árabe, tailandês, chinês, japonês ou coreano, plote de novo com conexão. Outros alfabetos ainda não foram implementados. |
| Linhas de construção aparecem no PDF | A camada delas é plotada. | Clique no botão de impressora da camada. |
| Todas as linhas têm a mesma espessura | A espessura delas é {{ui:Padrão}}, então são impressas com a largura de caneta da caixa de diálogo. | Dê às camadas ou aos objetos uma {{ui:Espessura de linha}} no painel da direita, ou escolha uma {{ui:Espessura de linha}} na caixa de diálogo. Para ver as espessuras na tela, pressione {{ui:LWT}} na barra de status. |

## Teclas e tela

| Sintoma | Causa | Solução |
|---|---|---|
| F3, F7 ou F8 muda o volume ou abre o Mission Control | Teclas de função do Mac. | Segure **fn**, ou use os botões da barra de status. Veja [Teclas, mouses e trackpads](common:keys). |
| F7 pergunta sobre navegação por cursor | Uso próprio do Firefox para F7. | Escolha Não; use o botão {{ui:Grade}}. |
| {{key:Mod+N}} abriu uma janela do navegador | O navegador usa essa tecla. | Clique em {{ui:Nova}} ou digite `NEW`. |
| {{key:Mod+A}} selecionou o texto da linha de comando | A linha de comando estava com o cursor. | Clique antes em um objeto, ou digite `ALL` em um prompt `Select objects`. |
| {{key:Delete}} não apaga | A linha de comando estava com o cursor. | Digite `E` e pressione {{key:Enter}}. |
| O clique direito não faz nada no trackpad do Mac | O Control-clique pode contar como um clique comum. | Clique com dois dedos. |
| Nada faz pan no trackpad | Não há botão do meio, e Space não faz pan. | Deslize com dois dedos: a vista 2D faz pan (o pinça e a roda do mouse fazem zoom). Ou arraste com o botão direito pressionado. |
| O primeiro {{key:Esc}} saiu da tela cheia | O navegador usa Esc para sair da tela cheia. | Pressione {{key:Esc}} de novo para cancelar o comando. |
| {{key:F1}} não faz nada no Mac | F1 é uma tecla de brilho. | Segure **fn**, ou clique em {{ui:Ajuda}}. |
| A digitação vai para a caixa de busca da ajuda | O painel de ajuda está com o cursor. | Clique no desenho. |
| O desenho ficou em branco | Você deu zoom para muito longe. | Clique em {{ui:Extensão}}, ou dê um duplo clique na roda. |
| "Sair do site?" ao fechar a guia | Há alterações não salvas. | Fique na página, salve com {{key:Mod+S}} e depois feche. |
