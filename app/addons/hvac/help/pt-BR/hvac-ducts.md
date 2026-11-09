---
title: Climatização: desenhando trechos de duto
summary: Desenhe trechos de duto retangulares, redondos e ovais achatados pelo eixo; curvas, transições, tês, derivações e ramais são criados automaticamente.
keywords: duto, trecho, eixo, curva, curva de raio, curva de gomos, transição, redutor, tê, derivação, ramal, ramificação, parte inferior do duto, elevação
from: 56124011
---

## Desenhando um trecho

Digite {{cmd:DUCT}} e clique nos pontos do eixo do trecho. Enquanto você clica, estas opções mudam o que vem a seguir:

- {{ui:Formato}} — retangular, redondo ou oval achatado (um oval achatado fica com os lados planos em cima e embaixo).
- {{ui:Tamanho}} — largura × altura (`24x12`, `600x300`) ou um diâmetro (`14`). As próximas seções o recebem; uma mudança de tamanho cria uma transição.
- {{ui:Vazão}} — a vazão da seção; o complemento a dimensiona por atrito constante (veja [Dimensionamento de dutos](topic:hvac-sizing)).
- {{ui:Elevação}} — a parte inferior do duto, antes do primeiro ponto (9 ft ou 2700 mm, a menos que você altere em {{ui:Configurações}}).
- {{ui:Sistema}} — insuflamento, retorno, exaustão, ar externo ou outro. Cada um tem sua própria camada (`M-HVAC-SUPP`, `M-HVAC-RETN`, `M-HVAC-EXHS`, `M-HVAC-OAIR`, `M-HVAC-DUCT`) e sua própria cor na guia {{ui:3D}}.
- {{ui:Tag}} — um nome como `S-1`, usado pela tabela e pela guia 3D.
- {{ui:Desfazer}} — retira o último ponto.

Um trecho comporta até 100 pontos; comece outro trecho a partir do fim dele para ter mais.

## As conexões que ele cria

- **Curvas** em cada mudança de direção. O raio no eixo de uma curva de raio é a largura do duto vezes a razão do trecho (1 para retangular, 1.5 para redondo e oval achatado, como é usual; altere em {{ui:Propriedades}}). Uma curva de gomos tem garganta quadrada e uma linha de gomo; escolha-a em {{ui:Configurações}} ou {{ui:Propriedades}}.
- **Transições** onde o tamanho ou a forma muda, logo após a esquina (depois da curva). Cada lado tem inclinação de no máximo 15° (um padrão que o complemento usa, não um valor de norma), e nenhuma é menor que 6 in ou 150 mm. Redondo para redondo é chamado de redutor. A parte inferior fica plana; a parte superior escalona.
- **Ramificações**: comece um trecho dentro de outro, ou termine-o dentro de um, e o ponto se move para o eixo desse trecho. A ramificação é recortada até o lado do principal, recebe um colar de 2 in ou 50 mm, e o principal recebe uma abertura ali. Uma ramificação redonda ou oval achatada é uma derivação; uma retangular é um tê quando encontra o principal em quadrado (dentro de 15°) e um ramal caso contrário.

## Alterando um trecho

- Arraste o grip de um ponto para movê-lo; as conexões acompanham.
- {{ui:Propriedades}} › {{ui:Trecho de duto}}: tag, sistema, formato, tamanho (o trecho inteiro), parte inferior do duto, curvas, razão do raio, material e rótulos de tamanho.
- {{cmd:DUCTSIZE}}: escolha uma seção e dimensione-a pela sua vazão, digite um tamanho ou mude o formato — para essa seção ou para o trecho inteiro.
- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} e {{cmd:ERASE}} funcionam como em qualquer objeto. Uma cópia recebe sua própria identidade. Uma ramificação cujo principal se afasta deixa de estar conectada: desenhe-a novamente no principal.
