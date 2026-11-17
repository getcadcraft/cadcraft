---
title: Empilhar pavimentos em um só desenho
summary: Desenhe o primeiro pavimento sobre o térreo nas mesmas coordenadas e desligue cada pavimento, sem Xrefs.
keywords: pavimento, pavimentos, FLOORS, FLR, FLOOR, FLOORLAYERS, andar, nível, empilhar, camada de projeto, espaço modelo, subjacente, xref
from: 7440fc87
---

Os pavimentos permitem empilhar plantas em um único espaço modelo. Cada pavimento tem seus próprios objetos, e as camadas continuam funcionando em todos eles. Uma parede na camada `P-Walls` pode estar em qualquer pavimento.

## Iniciar

Digite `FLOORS` (`FLR`), ou escolha {{ui:Floors…}} no menu {{ui:More}} do grupo {{ui:View}}, e depois escolha {{ui:Start with floors}}. O que você já desenhou vai para o térreo.

## Desenhar em um pavimento

Escolha o pavimento com o botão redondo no painel. Os novos objetos vão para ele.

Os outros pavimentos ligados aparecem esmaecidos sob ele. Você pode usar snap neles, então o primeiro pavimento se alinha ao térreo, mas não pode alterá-los até torná-los o pavimento ativo. O olho desliga um pavimento. Paredes só se unem a paredes do próprio pavimento.

Para começar um pavimento a partir do de baixo, selecione o que deseja, escolha o pavimento no painel e pressione {{ui:Copy there}}.

## Colocar pavimentos em folhas

Selecione uma viewport em uma folha e escolha o pavimento dela em {{ui:Floor shown}} nas Propriedades. Uma viewport sem pavimento escolhido mostra todos os pavimentos ligados.

## Enviar o arquivo para outra pessoa

Outros programas CAD não conhecem pavimentos, então mostram todos juntos. Antes de enviar um arquivo, escolha {{ui:Turn floors into layers}} no painel, ou digite `FLOORLAYERS`. Cada objeto passa para uma camada com o nome do seu pavimento, como `Térreo-P-Walls`, para que ainda seja possível desligar cada pavimento. Desfazer reverte isso. O CadCraft mantém os pavimentos no arquivo DWG ou DXF que salva.
