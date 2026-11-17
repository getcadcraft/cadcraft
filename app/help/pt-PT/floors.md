---
title: Empilhar pisos num só desenho
summary: Desenhe o primeiro piso sobre o rés-do-chão nas mesmas coordenadas e desligue cada piso, sem Xrefs.
keywords: piso, pisos, FLOORS, FLR, FLOOR, FLOORLAYERS, piso, nível, empilhar, camada de projeto, espaço modelo, subjacente, xref
from: 7440fc87
---

Os pisos permitem-lhe empilhar plantas num só espaço modelo. Cada piso tem os seus próprios objetos, e as camadas continuam a funcionar em todos eles. Uma parede em `P-Walls` pode estar em qualquer piso.

## Iniciar

Escreva `FLOORS` (`FLR`), ou escolha {{ui:Pisos…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}, e depois escolha {{ui:Começar com pisos}}. O que já desenhou fica no rés-do-chão.

## Desenhar num piso

Escolha o piso com o botão redondo no painel. Os novos objetos ficam nele.

Os outros pisos que estão visíveis aparecem esbatidos por baixo. Pode fazer snap a eles, para que o primeiro piso fique alinhado com o rés-do-chão, mas não os pode alterar até os tornar o piso ativo. O olho desliga um piso. As paredes só se ligam a paredes do próprio piso.

Para começar um piso a partir do de baixo, selecione o que pretende, escolha o piso no painel e clique em {{ui:Copiar para lá}}.

## Colocar pisos em folhas

Selecione uma viewport numa folha e escolha o respetivo piso em {{ui:Piso mostrado}} nas Propriedades. Uma viewport sem piso escolhido mostra todos os pisos que estão visíveis.

## Enviar o ficheiro a outra pessoa

Outros programas CAD não conhecem pisos, por isso mostram todos os pisos juntos. Antes de enviar um ficheiro, clique em {{ui:Transformar pisos em camadas}} no painel, ou escreva `FLOORLAYERS`. Cada objeto passa para uma camada com o nome do respetivo piso, como `Rés-do-chão-P-Walls`, para que possam continuar a desligar cada piso. Anular desfaz isto. O CadCraft mantém os pisos no ficheiro DWG ou DXF que guarda.
