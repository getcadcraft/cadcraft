---
title: Splines e polilinhas: SPLINE, SPLINEDIT, PEDIT
summary: Desenhe uma curva suave por pontos ou a partir de um polígono de controle, edite seu ajuste e seus pontos de controle, e edite polilinhas (unir, fechar, largura, ajustar, spline, desencurvar) ou transforme uma spline em polilinha.
keywords: spline, splinedit, spl, spe, pedit, pe, pontos de ajuste, pontos de controle, pesos, nurbs, editar polilinha, unir, curva de ajuste, desencurvar, converter em polilinha, precisão, tangente, curva, tolerância de ajuste
from: d31f72d8
---

## O que você vai criar

Uma curva por cinco pontos, depois a mesma curva editada de três maneiras, e uma polilinha feita de três linhas.

## Desenhar uma spline por pontos

1. Digite `SPL` e pressione {{key:Enter}}.
2. Clique ou digite os pontos pelos quais a curva deve passar: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Pressione {{key:Enter}} após o último.
3. {{ui:Tangente inicial}}: clique em um ponto para o qual a curva deve sair, ou pressione {{key:Enter}} para deixar o programa decidir. Faça o mesmo para a tangente final.

A curva passa por todos os pontos. Digite `C` em vez de {{key:Enter}} para fechá-la (a curva volta ao primeiro ponto). {{key:U}} (`Desfazer`) remove o último ponto enquanto você desenha.

### Desenhar a partir de um polígono de controle

Digite `M` no primeiro prompt, depois `C` (Vértices de controle) e um grau de 1 a 5 (3 é o usual). Agora os pontos que você escolhe são os cantos de um polígono que puxa a curva em direção a eles; a curva começa no primeiro e termina no último. Uma curva fechada se fecha em volta, sem canto na junção.

### Transformar uma polilinha em spline

No primeiro prompt, digite `O` (Objeto) e selecione polilinhas ou linhas. Elas viram splines através dos seus vértices; os originais são apagados.

## Editar uma spline

Selecione-a e digite `SPE` (ou digite `SPE` e clique nela). Os grips mostram os pontos de ajuste (ou os pontos de controle de uma spline que não os tem): arraste um para remodelar a curva. No prompt:

- **Dados de ajuste** (uma spline desenhada por pontos): `A` adiciona um ponto de ajuste (clique onde), `D` exclui um (clique perto dele), `M` move um (clique perto dele, depois clique na nova posição), `T` define as tangentes finais, `P` purga os pontos de ajuste, de modo que a spline passa a ser editada pelos seus pontos de controle daí em diante.
- **Editar vértice**: `A` adiciona um ponto de controle sem mudar a curva, `M` move um, `W` dá a um deles um **peso** (acima de 1 puxa a curva para perto dele, abaixo de 1 a deixa se afastar).
- **Abrir** ou **Fechar**, e **Inverter** (a curva passa a ir no sentido contrário).
- **converter em Polilinha** (`P`): a spline vira uma polilinha; a precisão é o número de segmentos de cada vão (10 é o usual).
- **Desfazer** remove a última alteração; **Sair** (`X`) encerra.

{{ui:Propriedades}} mostra o grau de uma spline, quantos pontos de ajuste e de controle ela tem, seu comprimento, e permite abri-la ou fechá-la.

## Editar uma polilinha

Selecione uma polilinha e digite `PE`. Uma linha, um arco ou uma spline que você escolher é primeiro oferecida como polilinha para conversão (uma spline pede a precisão).

- **Fechar** / **Abrir** une ou separa as extremidades.
- **Unir** adiciona linhas, arcos e polilinhas cujas extremidades encontram a extremidade da polilinha. `Distância de tolerância` é a distância entre extremidades que ainda pode ser considerada união (0 significa que elas devem se encontrar).
- **Largura** dá à polilinha inteira uma só largura (0 a remove).
- **Ajustar** substitui a polilinha por uma curva suave que passa pelos seus vértices; **Spline** a substitui por uma B-spline cúbica que os segue (começa e termina no primeiro e no último vértice e fica perto dos outros). Ambas viram uma polilinha de segmentos curtos, e os cantos originais são mantidos, então **Desencurvar** os devolve.
- **Gerar tipo de linha** informa se um tipo de linha tracejado continua ao longo de toda a polilinha ou recomeça em cada vértice.
- **Inverter** muda a ordem dos seus vértices. **Múltiplo** (`M` no primeiro prompt) edita várias polilinhas com as mesmas opções.

Editar os vértices de uma polilinha em {{ui:Propriedades}} ou com grips continua como antes: o PEDIT não tem editor de vértices.

## Em arquivos

DWG e DXF 2000 mantêm uma spline como spline: grau, pontos de controle, nós, pesos, pontos de ajuste e tangentes. Uma spline que você abre e não altera é gravada de volta exatamente como veio. DXF R12 não tem spline: ela é salva como uma polilinha ao longo da curva, e o histórico informa quantos segmentos.

Deslocar, aparar, estender, concordância, quebrar e unir não funcionam em splines. Use {{cmd:EXPLODE}} em uma spline, ou {{cmd:PEDIT}} nela, para obter uma polilinha que esses comandos aceitam.

## Erros comuns

- **A curva ultrapassa entre pontos próximos.** Uma curva por pontos se curva onde os pontos se curvam. Use menos pontos ou um polígono de controle.
- **"Isso não é uma spline."** SPLINEDIT só aceita splines; {{cmd:PEDIT}} edita polilinhas.
- **Uma spline ajustada e fechada tem um formato ligeiramente diferente em outro programa.** O CadCraft a fecha com uma junção suave no primeiro ponto; outro programa pode fechá-la com uma curva periódica. Uma spline fechada por pontos de controle é igual nos dois.
