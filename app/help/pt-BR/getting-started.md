---
title: Primeiros passos com o CadCraft
summary: O que o aplicativo de desenho CadCraft faz, onde ele roda e seu primeiro desenho, de uma tela em branco até um arquivo salvo.
keywords: início, primeiro desenho, novo, abrir, salvar, salvar como, começar, tutorial, introdução, início rápido
from: 1a56c575
---

O CadCraft é um aplicativo de desenho 2D. Você desenha e edita linhas, arcos, polilinhas, textos, cotas e blocos, monta folhas com legendas e viewports e as plota em PDF. Ele abre desenhos DWG e DXF e os salva como DWG ou DXF.

Ele roda no navegador. Não há nada para instalar: o site dá o endereço e o aplicativo inteiro carrega na página. Seus desenhos são abertos a partir do seu próprio computador e salvos de volta nele. **Nada é enviado.**

Se você já desenhou em outro programa, leia [Quem vem de outro programa de desenho](topic:coming-from) depois desta página. A maioria dos hábitos continua valendo, e os poucos que não valem estão listados lá.

## Prefere ser guiado?

Digite `TOUR` (ou clique em {{ui:Fazer o tour}} no cartão inicial, ou em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Fazer o tour novamente}}). São seis passos curtos em uma caixa sobre o desenho: desenhe uma linha e um círculo, mova, apare, apague algo e coloque uma cota. Cada passo termina quando você o faz, e você pode pular um passo ou o tour inteiro. Ele só começa sozinho na primeira vez. A [folha de consulta rápida](topic:cheat-sheet) traz os 40 comandos que você mais vai usar, e o [mapa de comandos](topic:command-map) traz todos os comandos que existem.

## O que você precisa

- Uma versão recente do Chrome, Edge, Firefox ou Safari em um computador Mac, Windows ou Linux. Veja [Navegadores e plataformas](common:browsers).
- Um mouse com roda é o mais confortável. Um trackpad funciona; veja [Mouse, trackpad e toque](topic:mouse-trackpad-touch).
- Um teclado. O CadCraft é conduzido por comandos digitados, como a maioria dos programas de desenho.

## A ideia em um parágrafo

Você digita um comando (ou clica no botão dele), e a linha de comando, na parte de baixo, faz perguntas uma de cada vez: "Especifique o primeiro ponto", "Especifique o próximo ponto". Você responde a cada pergunta clicando no desenho ou digitando um valor e pressionando {{key:Enter}}. {{key:Esc}} cancela. Esse é todo o modelo de interação; o resto é detalhe.

## Seu primeiro desenho

Você vai desenhar um retângulo de 4000 por 3000 com linhas, colocar um círculo no meio e salvar o arquivo.

1. Abra o CadCraft. A linha de comando, embaixo, mostra `Comando:` e a área de desenho mostra um cartão "Comece a desenhar".
2. Digite `L` e pressione {{key:Enter}}. Não é preciso clicar antes na linha de comando: o que você digita vai para lá.
3. O prompt muda para `Especifique o primeiro ponto:`. Digite `0,0` e pressione {{key:Enter}}.
4. Digite `@4000,0` e pressione {{key:Enter}}. Aparece uma linha, indo para a direita. O `@` significa "a partir do último ponto".
5. Digite `@0,3000` e pressione {{key:Enter}}.
6. Digite `@-4000,0` e pressione {{key:Enter}}.
7. Digite `C` e pressione {{key:Enter}}. `C` é a opção Fechar: a última linha volta ao primeiro ponto e o comando termina.
8. Clique em {{ui:Extensão}} no grupo Vista da barra de ferramentas. O retângulo preenche a tela.

Agora você deve ver quatro linhas formando um retângulo, e o histórico acima da linha de comando lista o que você digitou.

9. Digite `C` e pressione {{key:Enter}} para iniciar o comando de círculo.
10. Digite `2000,1500` e pressione {{key:Enter}} para o centro.
11. Digite `500` e pressione {{key:Enter}} para o raio.

Um círculo aparece no meio do retângulo.

12. Pressione {{key:Mod+S}} ou clique em {{ui:Salvar}} no grupo Arquivo.

O navegador baixa `Drawing1.dwg` para a sua pasta de downloads habitual, e o histórico informa que salvou uma cópia como DWG. Esse arquivo abre de novo no CadCraft e na maioria dos outros programas de CAD. (Se antes, neste navegador, você escolheu DXF em {{ui:Salvar como}}, um desenho novo é salvo como `Drawing1.dxf`.)

:::tip
Pressione {{key:Enter}} em uma linha de comando vazia para repetir o último comando. Se preferir, pressione {{key:Space}} no lugar de {{key:Enter}}: fora de um texto, ele faz o mesmo.
:::

## Abrir um desenho existente

1. Pressione {{key:Mod+O}} ou clique em {{ui:Abrir}}.
2. Escolha um arquivo `.dwg` ou `.dxf` no seletor de arquivos.

Você também pode arrastar um arquivo DWG ou DXF do {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} e soltá-lo na área de desenho. O arquivo é lido na página; ele nunca sai do seu computador.

Veja [Arquivos: o que abre, o que salva](topic:files) para saber o que é mantido e o que é convertido.

## Salvar: o que esperar

Salvar em um navegador funciona de forma diferente de um programa de desktop:

- {{ui:Salvar}} sempre **baixa uma cópia nova**. Ele não sobrescreve o arquivo que você abriu. Se já houver um arquivo com o mesmo nome na pasta de downloads, o navegador costuma acrescentar um número, como `Drawing1 (1).dwg`.
- {{ui:Salvar}} usa o formato do desenho: DWG se você abriu um DWG, DXF se você abriu um DXF. Para escolher, pressione {{key:Mod+Shift+S}} ou clique em {{ui:Salvar como}} e escolha {{ui:DWG}} (e a versão dele), {{ui:DXF R12}} ou {{ui:DXF 2000}}. Veja [Salvar](topic:files#saving).
- O arquivo que você abriu nunca é alterado.
- Abrir outro arquivo, ou {{ui:Novo}}, o coloca em uma guia própria sobre o desenho, então nada do que você tem aberto é fechado. Se você fechar a guia de um desenho, ou sair da página com alterações não salvas, o CadCraft pergunta antes: {{ui:Salvar uma cópia primeiro}}, descartar ou {{ui:Cancelar}}. Fechar a guia do navegador mostra a pergunta do próprio navegador, "Sair do site?".

O salvamento na nuvem ainda não está disponível. Para onde vão seus arquivos e por que eles continuam privados está explicado em [Seus arquivos e a privacidade](common:your-files).

## Para onde ir em seguida

Pressione {{key:F1}} ou clique em {{ui:Ajuda}} na barra de cima para abrir esta ajuda ao lado do desenho a qualquer momento. Ela funciona sem conexão.

- [A tela do CadCraft](topic:workspace) dá nome a cada barra e painel.
- [Desenhe com coordenadas](topic:draw-with-coordinates) é o melhor primeiro passo a passo.
- [Teclado e mouse](topic:keyboard) lista todas as teclas.
- Digite `HELP` na linha de comando para ver a lista de todos os comandos, ou leia a [Referência de comandos](topic:commands).
