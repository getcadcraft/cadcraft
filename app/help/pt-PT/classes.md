---
title: Organizar um desenho com classes
summary: As classes ordenam os objetos de uma segunda forma, transversalmente às camadas (Iluminação-Luminárias-Foco): mostre-as e oculte-as, dê-lhes cor, tipo de linha, espessura de linha, trama e estilo de texto que os objetos podem herdar "por classe", e defina a classe em que entram os novos objetos.
keywords: classe, classes, CLASSES, CLS, CLASS, por classe, ByClass, classe ativa, usar na criação, Nenhuma, camada de projeto, escala da camada, cota de nível, Vectorworks
from: 672de9cb
---

As camadas indicam *onde* um objeto pertence no desenho; as classes indicam *o que* ele é. Uma parede na camada `Piso 1` pode estar na classe `Paredes-Exterior`, e um foco de teto na camada `Teto` pode estar na classe `Iluminação-Luminárias-Foco`. Pode ocultar todas as luminárias em todas as camadas de uma só vez, ou fazer com que todas as paredes exteriores saiam com traço mais grosso na impressão, sem mover nada entre camadas.

Todos os objetos começam na classe **Nenhuma**. Um desenho sem classes próprias funciona exatamente como antes.

## Abrir o painel Classes

Escreva `CLASSES` (ou `CLS`) e prima {{key:Enter}}, ou escolha {{ui:Classes…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}. O painel abre sobre o desenho e mantém-se aberto enquanto desenha.

- **Adicionar uma classe:** escreva o nome na caixa no topo e prima {{key:Enter}}. Um `-` cria um nível: `Iluminação-Luminárias-Foco` fica por baixo de `Iluminação-Luminárias`, que fica por baixo de `Iluminação`; os níveis em falta são acrescentados automaticamente.
- **Mostrar ou ocultar:** o olho ao lado de uma classe. Ocultar uma classe oculta todas as classes que lhe estão subordinadas, no ecrã e no papel.
- **Classe ativa:** o botão redondo. Os novos objetos que desenhar entram na classe ativa.
- **Escolher uma classe:** clique no nome. Os botões e definições abaixo da lista passam então a atuar sobre ela.

O número no fim de cada linha indica quantos objetos há nessa classe (no modelo, nas folhas e dentro das definições de blocos).

## Colocar objetos numa classe

Selecione os objetos, escolha uma classe no painel e escolha {{ui:Definir classe}}. Marque primeiro {{ui:PorClasse}} para que tomem a cor, o tipo de linha, a espessura de linha, a trama e o estilo de texto da classe. Também pode:

- escrever `CLASS` com objetos selecionados e indicar um nome de classe (um nome novo cria a classe);
- escrever `CLASS` sem nada selecionado para definir a classe ativa; `?` lista as classes com as respetivas contagens;
- usar a secção {{ui:Classe}} do painel Propriedades: a classe, e um interruptor {{ui:… por classe}} para a cor, o tipo de linha e a espessura de linha (preenchimento para tramas, estilo de texto para texto);
- selecionar por classe com `QSELECT`: escolha a propriedade {{ui:Classe}}.

{{ui:Selecionar os seus objetos}} seleciona todos os objetos da classe escolhida na folha aberta (ou no modelo).

## Como um objeto é desenhado: objeto, classe, camada

A cor, o tipo de linha, a espessura de linha, a trama e o estilo de texto de um objeto podem ser **por classe**, tal como podem ser por camada. O CadCraft procura por esta ordem:

1. O valor próprio do objeto, a menos que esse valor seja por classe.
2. O valor da classe, quando o objeto o toma por classe e a classe o tem.
3. O valor da camada.

Uma classe cuja cor (ou tipo de linha …) esteja {{ui:Não definida}} transmite o objeto à sua camada. Escolha uma classe e defina a sua {{ui:Cor}}, {{ui:Tipo de linha}}, {{ui:Espessura de linha}}, {{ui:Preenchimento (tramas)}} e {{ui:Estilo de texto}} abaixo dos botões. Marque {{ui:Usar na criação}} para que os novos objetos desenhados nessa classe tomem todos estes valores por classe.

Cada alteração no painel corresponde a um passo de anulação.

## Mudar o nome e eliminar

{{ui:Mudar o nome}} edita o nome no próprio lugar: prima {{key:Enter}} para o manter, {{key:Esc}} para sair. As classes subordinadas acompanham a alteração (`Iluminação-Foco` passa a `Luz-Foco` quando `Iluminação` passa a `Luz`), e o mesmo acontece aos seus objetos e às substituições nas viewports.

{{ui:Eliminar}} remove a classe e todas as classes subordinadas. Os respetivos objetos passam para **Nenhuma**. Um {{ui:Anular}} repõe tudo. **Nenhuma** não pode ser renomeada nem eliminada.

## Camadas de projeto

Em {{ui:Camadas de projeto}}, cada camada pode ter uma escala (`1:50`) e uma cota. Uma camada de projeto é uma camada comum: o espaço modelo e as folhas funcionam como antes, e a escala e a cota ficam guardadas no desenho para as ferramentas que as vão usar.

## Em ficheiros DWG e DXF

As classes são guardadas em todas as versões DWG que o CadCraft grava e em DXF (R12 e 2000). A classe de cada objeto são os seus próprios dados estendidos (aplicação `CADCRAFT_CLASS`), pelo que o AutoCAD e outros programas a mantêm com o objeto. A lista de classes, as cores e a visibilidade ficam guardadas num único bloco não utilizado chamado `CADCRAFT_CLASSES`; se outro programa remover esse bloco, o CadCraft continua a encontrar a classe de cada objeto e as classes voltam com as definições predefinidas.

Os outros programas não conhecem as classes: desenham cada objeto com os valores próprios ou os da respetiva camada.

Veja também [Substituições de classe em viewports](topic:viewport-overrides) e [Organizar um desenho com camadas](topic:layers).
