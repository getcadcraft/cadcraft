---
title: Verificar pontos as-built
summary: Leia os pontos que uma equipe de topografia mediu e compare-os com os pontos e blocos do desenho: dentro ou fora de uma tolerância, não medidos, extras — marcados no desenho e gravados como um relatório CSV.
keywords: as built, as-built, asbuilt, levantamento, estação total, locação, estaqueamento, arquivo de pontos, csv, txt, pnezd, penzd, xyz, tolerância, desvio, verificar, comparar, exportpoints, pontos de layout
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) é a outra metade de {{cmd:EXPORTPOINTS}}: você exporta os pontos do desenho para o campo, a equipe os localiza no terreno e mede o que foi construído, e o ASBUILT compara o arquivo deles com o desenho.

1. Digite {{cmd:ASBUILT}} e selecione os mesmos pontos e blocos que você exportou (Enter pega todos os POINT, como o EXPORTPOINTS faz).
2. **Emparelhe os pontos as-built por** **Número** (a equipe manteve os seus números de ponto: informe o primeiro número que você exportou) ou **Mais próximo** (eles numeraram as próprias leituras: cada ponto de projeto pega a leitura mais próxima).
3. Informe as unidades e as coordenadas do arquivo como você as exportou (Desenho, Metros ou Pés; Mundo ou UCS), e a **tolerância** em unidades de desenho.
4. Escolha o arquivo CSV ou TXT da equipe. O CadCraft o lê como o CivilCraft faz: vírgulas, tabulações, ponto e vírgula ou espaços, uma linha de cabeçalho com o nome de suas colunas, ou PNEZD pela contagem de colunas.

A linha de comando informa quantos pontos foram emparelhados, quantos estão dentro da tolerância, fora dela, não medidos e extras, e a maior distância. **Marcar no desenho?** Sim os coloca na camada **AS-BUILT** como um único passo de desfazer: um ponto em cada leitura, seu número e distância ao lado, e uma linha vermelha do ponto de projeto até cada leitura fora da tolerância. Um relatório CSV é baixado com todos os pontos: coordenadas de projeto e as-built, as diferenças em leste, norte e altura, e o resultado.

Veja também [Pontos para programas BIM](topic:points-for-bim).
