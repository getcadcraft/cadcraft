---
title: Trabalhar num desenho em conjunto com o Live TeamWork
summary: O que muda no CadCraft durante uma sessão Live TeamWork no CadCraft Studio: os cursores e seleções dos outros, os objetos que alguém está a editar, os bloqueios do anfitrião, o seu próprio anular, e entrar a partir de um navegador na mesma rede.
keywords: live, live teamwork, studio live, em conjunto, colaborar, co-edição, sessão, partilhar em Live, entrar, cursor, retido, a editar, bloqueio, livelock, liveunlock, livehold, reter camada, reter área, cadeado, anular, anfitrião, assistente, mesmo ficheiro, muitas pessoas, lento, limite, quem alterou, edições recentes, registo de edições
from: 0497d2a3
---

## O que vai aprender

O que se vê e o que acontece às edições enquanto várias pessoas trabalham no mesmo desenho ao mesmo tempo. O CadCraft Studio inicia e entra na sessão Live TeamWork (Partilhar em Live, Entrar); esta página trata do próprio desenho.

## Todos desenham ao mesmo tempo

Desenhe e edite como habitualmente. As suas próprias edições aparecem de imediato, mesmo antes de os outros as terem, e as deles aparecem no seu ecrã pouco depois de as fazerem. Todos os comandos funcionam: desenhar, modificar, camadas, blocos, folhas, cotas, restrições.

Duas pessoas podem alterar o mesmo objeto. Quando alteram coisas diferentes, como a cor e um ponto final de uma linha, as duas alterações são mantidas. Quando alteram a mesma coisa, ganha a alteração mais recente.

O que fica apenas com cada pessoa: a camada atual, a cor e a altura do texto para objetos novos, as definições de cota, a vista, a vista dividida e o SCP. O desenho é partilhado; a forma como se olha para ele não.

## Outras pessoas no seu desenho

- **Cursores:** o ponteiro de cada pessoa mostra-se com o nome dela, na sua própria cor, e o comando que está a executar. Os cursores das pessoas que trabalham perto do que está no seu ecrã são visíveis.
- **Seleções:** o que alguém selecionou fica contornado na cor dessa pessoa.
- **A ser editado:** um objeto que alguém selecionou tem uma etiqueta como «Ana está a editar». Ainda é possível alterar a cor ou movê-lo, mas não é possível apagar, explodir nem reescrever até que a pessoa o largue. Selecioná-lo diz quem o tem.
- **Quem alterou por último:** selecione um objeto que outra pessoa alterou nesta sessão, e a linha de comandos diz quem o fez e qual foi a alteração («Ben alterou isso por último: CIRCLE.»). O painel Live do Studio lista cada edição recente em {{ui:Edições recentes}}. Nada disto é guardado no desenho: dura enquanto durar a sessão.

## Reter uma camada ou uma área enquanto se trabalha nela

Num desenho grande com várias pessoas, indique qual é a parte que é sua por agora:

1. Escreva `LIVEHOLD` e prima {{key:Enter}}.
2. Escolha `L` e escreva um nome de camada (Enter mantém a camada atual), ou escolha `A` e indique dois cantos de uma área.
3. As edições de outras pessoas nessa camada, ou em objetos dessa área, são anuladas, e essas pessoas são avisadas de que está a trabalhar aí. A sua área aparece como uma moldura tracejada; os outros veem-na com a sua cor e o seu nome, e as camadas que retém estão listadas no canto superior esquerdo do desenho deles.
4. `LIVEHOLD`, depois `R`, liberta tudo o que retém. Sair da sessão também liberta tudo.

Qualquer pessoa na sessão pode reter, incluindo o anfitrião; os bloqueios do anfitrião continuam a aplicar-se por cima. Uma retenção nunca é guardada no ficheiro.

## Quando uma edição é retirada

A cópia do desenho do anfitrião verifica cada edição. Algumas não podem entrar, e o CadCraft retira-as do seu ecrã e diz porquê na linha de comandos, por exemplo:

- alguém apagou o objeto, ou a camada ou o bloco de que precisa, pouco antes de si;
- alguém está a editar esse objeto, ou retém a camada dele ou a área em que está;
- o anfitrião o bloqueou;
- o bloco que coloca foi purgado, ou uma camada eliminada ainda tem objetos nela.

## Anular só desfaz o seu trabalho

{{key:Mod+Z}} e {{ui:Anular}} anulam o seu último comando, por completo, e deixam o trabalho dos outros intacto. Quando alguém alterou a mesma coisa depois, nada é anulado e a linha de comandos indica quem a alterou. {{key:Mod+Y}} refaz.

## Bloqueios (o anfitrião)

O anfitrião pode proteger objetos ou uma camada inteira para que ninguém os altere, nem o próprio anfitrião, até serem desbloqueados:

1. Selecione os objetos, depois escreva `LIVELOCK` e prima {{key:Enter}}. Ou escreva `LIVELOCK` sem nada selecionado e escolha `L` para bloquear uma camada pelo nome: os objetos acrescentados depois a essa camada também ficam bloqueados.
2. Os objetos bloqueados são desenhados a tracejado, com a etiqueta «Bloqueado pelo anfitrião» no ecrã de todos.
3. `LIVEUNLOCK` desbloqueia-os da mesma forma.

Os bloqueios pertencem à sessão: acabam quando ela acaba e nunca são guardados no ficheiro.

## Entrar com o mesmo ficheiro

Se abriu o mesmo ficheiro que o anfitrião abriu (de uma pasta partilhada ou da mesma cópia), entre a partir da sua própria janela do CadCraft no Studio: abra o painel {{ui:Live}} e use {{ui:Entrar aqui}} com o código do anfitrião. Só viajam as alterações feitas desde que o anfitrião abriu o ficheiro, pelo que um desenho grande fica pronto de imediato. Se o seu ficheiro for outro, o desenho do anfitrião substitui-o no seu ecrã (o seu ficheiro fica como está). Isto só funciona enquanto o seu desenho não tiver sido alterado desde que o abriu.

## Assistentes numa sessão Live

Um assistente ligado à sua janela do CadCraft (veja a ajuda sobre trabalhar com assistentes de IA) entra na sessão como participante próprio, mostrado a todos como «Assistente (via <nome>)». O anfitrião admite-o, como faria com uma pessoa; o assistente do próprio anfitrião entra de imediato. As alterações do assistente têm anulação própria: {{key:Mod+Z}} anula o seu trabalho, e a anulação do assistente anula apenas o dele. Sai da sessão quando é desligado ou quando sai, e só pode trabalhar na sessão enquanto puder editar.

## Entrar a partir de um navegador

Um colega sem o Studio pode ler, com um telemóvel, tablet ou computador na mesma rede, a imagem com o código do anfitrião. O CadCraft abre no navegador, pede o seu nome na linha de comandos, e preenche-se com o desenho do anfitrião quando este o admite. Um link de convite permite entrar a partir de outra rede: o anfitrião precisa de um lugar no Team Cloud Plan para a aplicação, todos os outros entram gratuitamente, e o link só funciona enquanto a sessão do anfitrião estiver aberta.

## Muitas pessoas num desenho

Cada edição vai para todos na sessão, por isso, quantas mais pessoas houver, mais tempo leva cada alteração a chegar a cada uma delas, e os portáteis e as ligações mais lentos ficam para trás primeiro. O tamanho habitual de uma sessão é de 20 pessoas; o anfitrião pode permitir mais numa sessão (veja a ajuda sobre trabalhar em conjunto em Live). Se o desenho parecer lento com muitas pessoas, ajudam menos pessoas, menos delas a editar ao mesmo tempo, ou uma ligação melhor.

## Quando a sessão termina

Só o anfitrião guarda o desenho. Quando o anfitrião termina a sessão, todos os outros ficam com uma cópia não guardada: guarde-a se quiser mantê-la.

:::note
Algo retirado é desenhado por cima dos objetos à sua volta no seu próprio ecrã, até reabrir o desenho. As tramas e os objetos preenchidos que se sobrepõem podem ter um aspeto diferente da cópia do anfitrião; o desenho em si é o mesmo.
:::
