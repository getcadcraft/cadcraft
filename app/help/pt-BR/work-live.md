---
title: Trabalhe em um desenho junto com o Live TeamWork
summary: O que muda no CadCraft enquanto você está em uma sessão Live TeamWork pelo CadCraft Studio: cursores e seleções de outras pessoas, objetos que alguém está editando, os travamentos do anfitrião, o seu próprio desfazer e a entrada por um navegador na mesma rede.
keywords: live, live teamwork, studio live, juntos, colaborar, coedição, sessão, compartilhar live, unir, cursor, retido, editando, travamento, livelock, liveunlock, livehold, reter camada, reter área, cadeado, desfazer, anfitrião, assistente, mesmo arquivo, muitas pessoas, lento, limite, quem alterou, edições recentes, registro de edições
from: 0497d2a3
---

## O que você vai aprender

O que você vê e o que acontece com as suas edições enquanto várias pessoas trabalham no mesmo desenho ao mesmo tempo. O CadCraft Studio inicia e entra na sessão Live TeamWork (Compartilhar live, Unir); esta página trata do próprio desenho.

## Todos desenham ao mesmo tempo

Desenhe e edite como de costume. Suas próprias edições aparecem na hora, mesmo antes de as outras pessoas as terem, e as delas aparecem na sua tela um instante depois de feitas. Todos os comandos funcionam: desenho, modificação, camadas, blocos, folhas, cotas, restrições.

Duas pessoas podem alterar o mesmo objeto. Quando você altera coisas diferentes, como a cor e um ponto final de uma linha, as duas alterações são mantidas. Quando você altera a mesma coisa, vale a última alteração.

O que fica só com você: a camada atual, a cor e a altura do texto dos objetos novos, as suas configurações de cota, a sua vista, a divisão de tela e o UCS. O desenho é compartilhado; a forma como você o vê não é.

## Outras pessoas no seu desenho

- **Cursores:** o ponteiro de cada pessoa aparece com o nome dela, na cor dela, e com o comando que está executando. Você vê os cursores das pessoas que trabalham perto do que está na sua tela.
- **Seleções:** o que alguém selecionou aparece com contorno na cor dela.
- **Sendo editado:** um objeto que alguém selecionou tem um rótulo como "Ana está editando". Você ainda pode mudar a cor ou movê-lo, mas não pode excluir, explodir nem redigitar até que ela o solte. Selecioná-lo informa quem o tem.
- **Quem alterou por último:** selecione um objeto que outra pessoa alterou nesta sessão, e a linha de comando diz quem e qual foi a alteração ("Ben alterou isso por último: CIRCLE."). O painel Live do Studio lista cada edição recente em {{ui:Edições recentes}}. Nada disso é salvo no desenho: dura enquanto a sessão durar.

## Retenha uma camada ou uma área enquanto trabalha ali

Em um desenho grande com várias pessoas, diga qual parte é sua por enquanto:

1. Digite `LIVEHOLD` e pressione {{key:Enter}}.
2. Escolha `L` e digite o nome de uma camada (Enter mantém a camada atual), ou escolha `A` e indique dois cantos de uma área.
3. As edições de outras pessoas nessa camada, ou em objetos dessa área, são revertidas, e elas são avisadas de que você está trabalhando ali. Você vê sua área como um quadro tracejado; os outros a veem na sua cor, com o seu nome, e as camadas que você retém aparecem listadas no canto superior esquerdo do desenho deles.
4. `LIVEHOLD`, depois `R`, libera tudo o que você retém. Sair da sessão também libera.

Qualquer pessoa da sessão pode reter, inclusive o anfitrião; os travamentos do anfitrião continuam valendo por cima. Uma retenção nunca é salva no arquivo.

## Quando uma edição é revertida

A cópia do desenho do anfitrião verifica cada edição. Algumas não podem entrar, e o CadCraft as reverte na sua tela e informa o motivo na linha de comando, por exemplo:

- alguém excluiu o objeto, ou a camada ou o bloco de que ele precisa, logo antes de você;
- alguém está editando esse objeto, ou retém a camada dele ou a área em que ele está;
- o anfitrião o travou;
- o bloco que você inseriu foi eliminado, ou uma camada que você exclui ainda tem objetos nela.

## Desfazer desfaz o seu trabalho

{{key:Mod+Z}} e {{ui:Desfazer}} desfazem o seu último comando, inteiro, e deixam o trabalho dos outros como está. Quando alguém alterou a mesma coisa depois, nada é desfeito e a linha de comando diz quem alterou. {{key:Mod+Y}} refaz.

## Travamentos (o anfitrião)

O anfitrião pode proteger objetos ou uma camada inteira para que ninguém os altere, inclusive o próprio anfitrião, até que sejam destravados:

1. Selecione os objetos, depois digite `LIVELOCK` e pressione {{key:Enter}}. Ou digite `LIVELOCK` sem nada selecionado e escolha `L` para travar uma camada pelo nome: objetos adicionados depois a essa camada também ficam travados.
2. Objetos travados são desenhados tracejados, com um rótulo "Travado pelo anfitrião" na tela de todos.
3. `LIVEUNLOCK` os destrava do mesmo jeito.

Os travamentos pertencem à sessão: terminam quando ela termina e nunca são salvos no arquivo.

## Entre com o mesmo arquivo

Se você abriu o mesmo arquivo que o anfitrião abriu (de uma pasta compartilhada ou da mesma cópia), entre pela sua própria janela do CadCraft no Studio: abra o painel {{ui:Live}} e use {{ui:Unir aqui}} com o código do anfitrião. Só viajam as alterações feitas desde que o anfitrião abriu o arquivo, então um desenho grande fica pronto de imediato. Se o seu arquivo for outro, o desenho do anfitrião substitui o dele na sua tela (o seu arquivo continua como está). Isso só funciona enquanto o seu desenho estiver sem alterações desde que você o abriu.

## Assistentes em uma sessão Live

Um assistente conectado à sua janela do CadCraft (veja a ajuda sobre trabalhar com assistentes de IA) entra na sessão como participante próprio, mostrado a todos como "Assistente (via <seu nome>)". O anfitrião o deixa entrar, como faria com uma pessoa; o assistente do próprio anfitrião entra de imediato. As alterações dele têm desfazer próprio: o seu {{key:Mod+Z}} desfaz o seu trabalho, e o desfazer do assistente desfaz só o dele. Ele sai da sessão quando você o desconecta ou quando você sai, e só consegue trabalhar na sessão enquanto você puder editar.

## Entre por um navegador

Um colega sem o Studio pode escanear, com um celular, tablet ou computador na mesma rede, a imagem que aparece com o código do anfitrião. O CadCraft abre no navegador, pede o seu nome na linha de comando e preenche a tela com o desenho do anfitrião assim que o anfitrião o deixar entrar. Um link de convite permite que alguém entre por outra rede: o anfitrião precisa de uma licença de usuário do Team Cloud Plan para o aplicativo, todos os outros entram de graça, e o link só funciona enquanto a sessão do anfitrião estiver aberta.

## Muitas pessoas em um desenho

Cada edição vai para todos na sessão, então quanto mais pessoas, mais tempo cada alteração leva para chegar a cada uma delas, e notebooks e conexões mais lentas ficam para trás primeiro. O tamanho usual de uma sessão é de 20 pessoas; o anfitrião pode permitir mais para uma sessão específica (veja a ajuda sobre trabalhar junto em tempo real). Se o desenho ficar lento com muitas pessoas, ajudam menos pessoas, menos delas editando ao mesmo tempo, ou uma conexão melhor.

## Quando a sessão termina

Só o anfitrião salva o desenho. Quando ele encerra a sessão, todos os outros ficam com uma cópia não salva: salve-a se quiser mantê-la.

:::note
Algo revertido é desenhado por cima dos objetos ao redor, na sua própria tela, até que você reabra o desenho. Hachuras e objetos preenchidos que se sobrepõem podem parecer diferentes da cópia do anfitrião; o desenho em si é o mesmo.
:::
