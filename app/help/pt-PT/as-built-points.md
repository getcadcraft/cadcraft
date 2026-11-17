---
title: Verificar pontos as-built
summary: Leia os pontos medidos por uma equipa de topografia e compare-os com os pontos e blocos do desenho: dentro ou fora de uma tolerância, não medidos, extra — assinalados no desenho e escritos como relatório CSV.
keywords: as built, as-built, asbuilt, levantamento, estação total, implantação, locação, ficheiro de pontos, csv, txt, pnezd, penzd, xyz, tolerância, desvio, verificar, comparar, exportpoints, pontos de implantação
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) é a outra metade de {{cmd:EXPORTPOINTS}}: exporta os pontos do desenho para o terreno, a equipa implanta-os e mede o que foi construído, e o ASBUILT compara o ficheiro deles com o desenho.

1. Escreva {{cmd:ASBUILT}} e selecione os mesmos pontos e blocos que exportou (Enter seleciona todos os POINT, tal como faz o EXPORTPOINTS).
2. **Emparelhe os pontos as-built por** **Número** (a equipa manteve os seus números de ponto: indique o primeiro número que exportou) ou **Mais próximo** (a equipa numerou os seus próprios pontos medidos: cada ponto de projeto fica com o mais próximo).
3. Indique as unidades e as coordenadas do ficheiro tal como as exportou (Desenho, Metros ou Pés; Mundo ou SCU), e a **tolerância** em unidades do desenho.
4. Escolha o ficheiro CSV ou TXT da equipa. O CadCraft lê-o da mesma forma que o CivilCraft: vírgulas, tabulações, ponto e vírgula ou espaços, uma linha de cabeçalho com os nomes das colunas, ou PNEZD pelo número de colunas.

A linha de comandos indica quantos pontos foram emparelhados, quantos estão dentro da tolerância, fora dela, não medidos e extra, e a maior distância. **Assinalar no desenho?** Sim coloca-os na camada **AS-BUILT** como um único passo de anulação: um ponto em cada ponto medido, o seu número e distância ao lado, e uma linha vermelha do ponto de projeto a cada ponto medido fora da tolerância. Um relatório CSV transfere-se com todos os pontos: coordenadas de projeto e as-built, as diferenças em Este, Norte e em altura, e o resultado.

Ver também [Pontos para programas BIM](topic:points-for-bim).
