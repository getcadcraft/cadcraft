---
title: Organizar um desenho com classes
summary: As classes ordenam objetos de outro jeito, atravessando as camadas (Iluminação-Luminárias-Spot): mostre e oculte, dê cor, tipo de linha, espessura de linha, preenchimento e estilo de texto que os objetos podem receber "por classe", e defina a classe dos novos objetos.
keywords: classe, classes, CLASSES, CLS, CLASS, por classe, ByClass, classe ativa, usar na criação, Nenhuma, camada de projeto, escala de camada, elevação, Vectorworks
from: 672de9cb
---

Camadas dizem *onde* um objeto está no desenho; classes dizem *o que* ele é. Uma parede na camada `Nível 1` pode estar na classe `Paredes-Externas`; uma luminária spot na camada `Forro` pode estar na classe `Iluminação-Luminárias-Spot`. Você pode ocultar todas as luminárias de todas as camadas de uma vez, ou plotar todas as paredes externas com traço mais grosso, sem mover nada entre camadas.

Todo objeto começa na classe **Nenhuma**. Um desenho sem classes próprias funciona exatamente como antes.

## Abrir o painel Classes

Digite `CLASSES` (ou `CLS`) e pressione {{key:Enter}}, ou escolha {{ui:Classes…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}. O painel abre sobre o desenho e continua aberto enquanto você desenha.

- **Adicionar uma classe:** digite o nome na caixa do topo e pressione {{key:Enter}}. Um `-` cria um nível: `Iluminação-Luminárias-Spot` fica dentro de `Iluminação-Luminárias`, que fica dentro de `Iluminação`; os níveis que faltarem são criados para você.
- **Mostrar ou ocultar:** o olho ao lado de uma classe. Ocultar uma classe oculta todas as classes abaixo dela, na tela e no papel.
- **Classe ativa:** o botão redondo. Os novos objetos que você desenhar entram na classe ativa.
- **Escolher uma classe:** clique no nome dela. Os botões e as configurações abaixo da lista passam a atuar sobre ela.

O número no fim de cada linha é quantos objetos há naquela classe (no modelo, nas folhas e dentro das definições de bloco).

## Colocar objetos em uma classe

Selecione os objetos, escolha uma classe no painel e clique em {{ui:Definir classe}}. Marque antes {{ui:Por classe}} para que eles recebam cor, tipo de linha, espessura de linha, preenchimento e estilo de texto da classe. Você também pode:

- digitar `CLASS` com objetos selecionados e informar um nome de classe (um nome novo cria a classe);
- digitar `CLASS` sem nada selecionado para definir a classe ativa; `?` lista as classes com as quantidades;
- usar a seção {{ui:Classe}} do painel Propriedades: a classe, e uma chave {{ui:… por classe}} para cor, tipo de linha e espessura (preenchimento para hachuras, estilo de texto para textos);
- selecionar por classe com `QSELECT`: escolha a propriedade {{ui:Classe}}.

{{ui:Selecionar seus objetos}} seleciona todos os objetos da classe escolhida na folha aberta (ou no modelo).

## Como um objeto é desenhado: objeto, classe, camada

A cor, o tipo de linha, a espessura de linha, o preenchimento e o estilo de texto de um objeto podem ser **por classe**, do mesmo modo que podem ser por camada. O CadCraft procura nesta ordem:

1. O valor próprio do objeto, a menos que esse valor seja por classe.
2. O valor da classe, quando o objeto o recebe por classe e a classe tem um valor.
3. O valor da camada.

Uma classe cuja cor (ou tipo de linha…) está {{ui:Não definida}} repassa o objeto para a camada dele. Escolha uma classe e defina a {{ui:Cor}}, o {{ui:Tipo de linha}}, a {{ui:Espessura de linha}}, o {{ui:Preenchimento (hachuras)}} e o {{ui:Estilo de texto}} abaixo dos botões. Marque {{ui:Usar na criação}} para que os novos objetos desenhados nessa classe recebam todos eles por classe.

Cada alteração no painel é um passo de desfazer.

## Renomear e excluir

{{ui:Renomear}} edita o nome no lugar: pressione {{key:Enter}} para mantê-lo e {{key:Esc}} para sair. As classes abaixo dela acompanham (`Iluminação-Spot` vira `Luz-Spot` quando `Iluminação` vira `Luz`), e o mesmo acontece com os objetos delas e com as substituições por viewport.

{{ui:Excluir}} remove a classe e todas as classes abaixo dela. Os objetos delas passam para **Nenhuma**. Um {{ui:Desfazer}} traz tudo de volta. A classe **Nenhuma** não pode ser renomeada nem excluída.

## Camadas de projeto

Em {{ui:Camadas de projeto}}, cada camada pode ter uma escala (`1:50`) e uma elevação. Uma camada de projeto é uma camada comum: o espaço modelo e as folhas funcionam como antes, e a escala e a elevação ficam guardadas com o desenho para as ferramentas que vão usá-las.

## Em arquivos DWG e DXF

As classes são mantidas em todas as versões de DWG que o CadCraft salva e em DXF (R12 e 2000). A classe de cada objeto é um dado estendido próprio (aplicativo `CADCRAFT_CLASS`), então o AutoCAD e outros programas o mantêm junto ao objeto. A lista de classes, as cores e a visibilidade ficam em um bloco sem uso chamado `CADCRAFT_CLASSES`; se outro programa limpar esse bloco, o CadCraft ainda encontra a classe de cada objeto, e as classes voltam com as configurações padrão.

Outros programas não conhecem classes: eles desenham cada objeto com os valores próprios dele ou os da sua camada.

Veja também [Substituições de classe em viewport](topic:viewport-overrides) e [Organizar um desenho com camadas](topic:layers).
