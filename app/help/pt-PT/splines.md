---
title: Splines e polilinhas: SPLINE, SPLINEDIT, PEDIT
summary: Desenhe uma curva suave através de pontos ou a partir de um polígono de controlo, edite o seu ajuste e os pontos de controlo, e edite polilinhas (unir, fechar, largura, ajustar, spline, desencurvar) ou transforme uma spline numa polilinha.
keywords: spline, splinedit, spl, spe, pedit, pe, pontos de ajuste, pontos de controlo, pesos, nurbs, editar polilinha, unir, curva de ajuste, desencurvar, converter em polilinha, precisão, tangente, curva, tolerância de ajuste
from: d31f72d8
---

## O que vai criar

Uma curva através de cinco pontos, depois a mesma curva editada de três formas, e uma polilinha construída a partir de três linhas.

## Desenhar uma spline através de pontos

1. Escreva `SPL` e prima {{key:Enter}}.
2. Clique ou escreva os pontos por onde a curva deve passar: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Prima {{key:Enter}} após o último.
3. {{ui:Tangente inicial}}: clique num ponto para onde a curva deve sair, ou prima {{key:Enter}} para deixar o programa decidir. Faça o mesmo para a tangente final.

A curva passa por todos os pontos. Escreva `C` em vez de {{key:Enter}} para a fechar (a curva volta ao primeiro ponto). {{key:U}} (`Anular`) retira o último ponto enquanto desenha.

### Desenhar a partir de um polígono de controlo

Escreva `M` no primeiro pedido, depois `C` (Vértices de controlo) e um grau de 1 a 5 (3 é o habitual). Agora os pontos que escolhe são os cantos de um polígono que puxa a curva na sua direção; a curva começa no primeiro e termina no último. Uma curva fechada envolve-se, sem canto na junção.

### Transformar uma polilinha numa spline

No primeiro pedido escreva `O` (Objeto) e selecione polilinhas ou linhas. Passam a ser splines através dos seus vértices, e os originais desaparecem.

## Editar uma spline

Selecione-a e escreva `SPE` (ou escreva `SPE` e clique nela). As pegas mostram os pontos de ajuste (ou os pontos de controlo de uma spline que não os tenha): arraste uma para remodelar a curva. No pedido:

- **Dados de ajuste** (uma spline desenhada através de pontos): `A` adiciona um ponto de ajuste (clique onde), `D` elimina um (clique perto dele), `M` move um (clique perto dele e depois no novo lugar), `T` define as tangentes finais, `P` purga os pontos de ajuste, para que a spline passe a ser editada pelos seus pontos de controlo.
- **Editar vértice**: `A` adiciona um ponto de controlo sem alterar a curva, `M` move um, `W` dá a um **peso** (acima de 1 aproxima a curva desse ponto, abaixo de 1 deixa-a afastar-se).
- **Abrir** ou **Fechar**, e **Inverter** (a curva passa a correr no sentido contrário).
- **converter em Polilinha** (`P`): a spline torna-se uma polilinha; a precisão é o número de segmentos de cada vão (10 é o habitual).
- **Anular** retira a última alteração; **Sair** termina.

{{ui:Propriedades}} mostra o grau de uma spline, quantos pontos de ajuste e de controlo tem, o seu comprimento, e permite abri-la ou fechá-la.

## Editar uma polilinha

Selecione uma polilinha e escreva `PE`. Uma linha, um arco ou uma spline que escolha é primeiro oferecida como polilinha a converter (uma spline pede a precisão).

- **Fechar** / **Abrir** une ou separa as extremidades.
- **Unir** acrescenta linhas, arcos e polilinhas cujas extremidades coincidem com a extremidade da polilinha. `Fuzz distance` é a distância a que as extremidades podem estar e ainda assim unir-se (0 significa que têm de coincidir).
- **Largura** dá a toda a polilinha uma só largura (0 remove-a).
- **Fit** (`Ajustar`) substitui a polilinha por uma curva suave que passa pelos seus vértices; **Spline** substitui-a por uma B-spline cúbica que os segue (começa e termina no primeiro e no último vértice e fica perto dos outros). Ambas se tornam uma polilinha de segmentos curtos, e os cantos originais são mantidos, pelo que **Desencurvar** os repõe.
- **Gerar tipo de linha** indica se um tipo de linha tracejado continua ao longo de toda a polilinha ou recomeça em cada vértice.
- **Inverter** muda a ordem dos seus vértices. **Múltiplo** (`M` no primeiro pedido) edita várias polilinhas com as mesmas opções.

Editar os vértices de uma polilinha em {{ui:Propriedades}} ou com pegas mantém-se como estava: o PEDIT não tem editor de vértices.

## Em ficheiros

DWG e DXF 2000 mantêm uma spline como spline: grau, pontos de controlo, nós, pesos, pontos de ajuste e tangentes. Uma spline que abre e não altera é gravada exatamente como veio. O DXF R12 não tem splines: é guardada como polilinha ao longo da curva, e o histórico indica quantos segmentos.

Offset, aparar, prolongar, concordância, quebrar e unir não funcionam em splines. Use {{cmd:EXPLODE}} sobre uma spline, ou {{cmd:PEDIT}} sobre ela, para obter uma polilinha que esses comandos aceitam.

## Erros comuns

- **A curva ultrapassa entre pontos próximos.** Uma curva através de pontos dobra nos sítios onde estão os pontos. Use menos pontos, ou um polígono de controlo.
- **"Isso não é uma spline."** O SPLINEDIT aceita apenas splines; o {{cmd:PEDIT}} edita polilinhas.
- **Uma spline de ajuste fechada tem uma forma ligeiramente diferente noutro programa.** O CadCraft fecha-a com uma junção suave no primeiro ponto; outro programa pode fechá-la com uma curva periódica. Uma spline fechada por pontos de controlo é igual nos dois.
