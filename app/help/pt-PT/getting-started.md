---
title: Primeiros passos com o CadCraft
summary: O que faz a aplicação de desenho CadCraft, onde corre, e o seu primeiro desenho, de um ecrã em branco até um ficheiro guardado.
keywords: começar, primeiro desenho, novo, abrir, guardar, guardar como, início, tutorial, introdução, início rápido
from: 1a56c575
---

O CadCraft é uma aplicação de desenho 2D. Desenha e edita linhas, arcos, polilinhas, texto, cotas e blocos, prepara folhas com legendas e viewports e imprime-as para PDF. Abre desenhos DWG e DXF e guarda-os como DWG ou DXF.

Corre no navegador. Não há nada para instalar: o site dá-lhe o endereço e a aplicação inteira é carregada na página. Os seus desenhos abrem-se a partir do seu computador e são guardados de volta nele. **Nada é carregado para a Internet.**

Se já desenhou antes, leia [Vindo de outro programa de desenho](topic:coming-from) depois desta página. A maior parte dos hábitos mantém-se, e os poucos que não se mantêm estão listados aí.

## Prefere ser guiado?

Escreva `TOUR` (ou clique em {{ui:Fazer a visita guiada}} no cartão inicial, ou em {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Fazer de novo a visita guiada}}). Seis passos curtos numa caixa sobre o desenho: desenhar uma linha e um círculo, movê-lo, aparar, apagar algo e cotá-lo. Cada passo termina quando o faz, e pode saltar um passo ou a visita toda. Só arranca sozinha na primeira vez. A [folha de consulta](topic:cheat-sheet) tem os 40 comandos que mais vai usar, e o [mapa de comandos](topic:command-map) todos os comandos que existem.

## O que precisa

- Um Chrome, Edge, Firefox ou Safari recente num computador Mac, Windows ou Linux. Consulte [Navegadores e plataformas](common:browsers).
- Um rato com roda é o mais cómodo. Um trackpad funciona; consulte [Rato, trackpad e toque](topic:mouse-trackpad-touch).
- Um teclado. O CadCraft é comandado por comandos escritos, como a maioria dos programas de desenho.

## A ideia num parágrafo

Escreve um comando (ou clica no respetivo botão) e a linha de comandos, em baixo, faz-lhe perguntas, uma de cada vez: "Especifique o primeiro ponto", "Especifique o ponto seguinte". Responde a cada pergunta clicando no desenho ou escrevendo um valor, e depois premindo {{key:Enter}}. Premir {{key:Esc}} cancela. É esse todo o modelo de interação; tudo o resto é pormenor.

## O seu primeiro desenho

Vai desenhar um retângulo de 4000 por 3000 com linhas, pôr um círculo no meio e guardar o ficheiro.

1. Abra o CadCraft. A linha de comandos, em baixo, mostra `Comando:` e a área de desenho mostra um pequeno cartão "Começar a desenhar".
2. Escreva `L` e prima {{key:Enter}}. Não precisa de clicar primeiro na linha de comandos: o que escrever em qualquer lado vai para lá.
3. O pedido passa a `Especifique o primeiro ponto:`. Escreva `0,0` e prima {{key:Enter}}.
4. Escreva `@4000,0` e prima {{key:Enter}}. Surge uma linha, para a direita. O `@` significa "a partir do último ponto".
5. Escreva `@0,3000` e prima {{key:Enter}}.
6. Escreva `@-4000,0` e prima {{key:Enter}}.
7. Escreva `C` e prima {{key:Enter}}. `C` é a opção Fechar: a última linha volta ao primeiro ponto e o comando termina.
8. Clique em {{ui:Extensão}} no grupo Vista da barra de ferramentas. O retângulo enche o ecrã.

Deverá agora ver quatro linhas a formar um retângulo, e o histórico por cima da linha de comandos lista o que escreveu.

9. Escreva `C` e prima {{key:Enter}} para iniciar o comando do círculo.
10. Escreva `2000,1500` e prima {{key:Enter}} para o centro.
11. Escreva `500` e prima {{key:Enter}} para o raio.

Surge um círculo no meio do retângulo.

12. Prima {{key:Mod+S}}, ou clique em {{ui:Guardar}} no grupo Ficheiro.

O navegador transfere `Drawing1.dwg` para a sua pasta de transferências habitual, e o histórico diz que guardou uma cópia como DWG. Esse ficheiro volta a abrir-se no CadCraft e na maioria dos outros programas CAD. (Se escolheu DXF em {{ui:Guardar como}} antes, neste navegador, um desenho novo é guardado como `Drawing1.dxf`.)

:::tip
Prima {{key:Enter}} numa linha de comandos vazia para repetir o último comando. Prima {{key:Space}} em vez de {{key:Enter}} se preferir: fora do texto, faz o mesmo.
:::

## Abrir um desenho existente

1. Prima {{key:Mod+O}}, ou clique em {{ui:Abrir}}.
2. Escolha um ficheiro `.dwg` ou `.dxf` no seletor de ficheiros.

Também pode arrastar um ficheiro DWG ou DXF {{pick:mac=do Finder|windows=do Explorador de Ficheiros|linux=do seu gestor de ficheiros}} e largá-lo na área de desenho. O ficheiro é lido na página; nunca sai do seu computador.

Consulte [Ficheiros: o que se abre, o que se guarda](topic:files) para saber o que é mantido e o que é convertido.

## Guardar: o que esperar

Guardar num navegador funciona de forma diferente de um programa de ambiente de trabalho:

- {{ui:Guardar}} **transfere sempre uma cópia nova**. Não escreve por cima do ficheiro que abriu. Se já existir na pasta de transferências um ficheiro com o mesmo nome, o navegador costuma acrescentar um número, como `Drawing1 (1).dwg`.
- {{ui:Guardar}} usa o formato do desenho: DWG se abriu um DWG, DXF se abriu um DXF. Para escolher, prima {{key:Mod+Shift+S}} ou clique em {{ui:Guardar como}} e escolha {{ui:DWG}} (e a sua versão), {{ui:DXF R12}} ou {{ui:DXF 2000}}. Consulte [Guardar](topic:files#saving).
- O ficheiro que abriu nunca é alterado.
- Abrir outro ficheiro, ou {{ui:Novo}}, coloca-o no seu próprio separador por cima do desenho, pelo que nada do que tem aberto é fechado. Se fechar o separador de um desenho ou sair da página com alterações não guardadas, o CadCraft pergunta primeiro: {{ui:Guardar primeiro uma cópia}}, descartar ou {{ui:Cancelar}}. Fechar o separador do navegador mostra em vez disso a pergunta "Sair do site?" do próprio navegador.

A gravação na nuvem ainda não está disponível. Para onde vão os seus ficheiros e porque se mantêm privados explica-se em [Os seus ficheiros e a privacidade](common:your-files).

## Para onde ir a seguir

Prima {{key:F1}} ou clique em {{ui:Ajuda}} na barra do topo para abrir esta ajuda ao lado do desenho em qualquer altura. Funciona sem ligação.

- [O ecrã do CadCraft](topic:workspace) dá nome a todas as barras e painéis.
- [Desenhar com coordenadas](topic:draw-with-coordinates) é o melhor primeiro exercício.
- [Teclado e rato](topic:keyboard) lista todas as teclas.
- Escreva `HELP` na linha de comandos para uma lista de todos os comandos, ou leia a [Referência de comandos](topic:commands).
