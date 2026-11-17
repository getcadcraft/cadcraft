---
title: Pontos para programas BIM
summary: Exporte pontos, e os pontos de inserção de blocos com uma descrição, para um arquivo CSV ou TXT que programas BIM e de levantamento importam.
keywords: exportpoints, exportar pontos, pontos, csv, txt, pnezd, penzd, xyz, pontos de levantamento, coordenadas, bim, locação, arquivo de pontos, norte, leste, cota
from: d80e2d53
---

## O que você vai fazer

Um arquivo de pontos: uma linha por ponto, com o número dele, norte, leste, cota e descrição, que programas BIM (Revit e Archicad, entre outros) e softwares de levantamento podem importar para posicionar pontos de levantamento, marcadores de obra ou equipamentos.

## Exportar os pontos

1. Selecione os pontos e as referências de bloco cujos pontos de inserção você quer, ou não selecione nada para pegar todos os pontos.
2. Digite {{cmd:EXPORTPOINTS}} (ou `EXPPTS`, ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Exportar pontos}}) e pressione {{key:Enter}} (pressione {{key:Enter}} de novo em `Selecione pontos e blocos` quando nada foi selecionado).
3. Quando você selecionou blocos com atributos, o CadCraft lista as suas tags: digite a que tem o valor que é a descrição (por exemplo `ITEM`), ou qualquer outra coisa para usar o nome de cada bloco.
4. Escolha as colunas: `PNEZD` (ponto, norte, leste, cota, descrição: a mais usada), `PENZD` (leste antes do norte) ou `XYZ` (só as coordenadas).
5. Escolha as unidades: `D` como desenhado, ou `M` metros ou `F` pés (só quando as unidades do desenho estão definidas: Propriedades › {{ui:Unidades}} com nada selecionado).
6. Com um SCU definido, escolha `W` mundo ou `U` coordenadas do SCU (veja [SCU e uma vista girada](topic:ucs-and-turned-view)).
7. Escolha `C` para um `.csv` separado por vírgulas ou `T` para um `.txt` separado por tabulação, e o número do primeiro ponto.

O arquivo é baixado como `<drawing>-points.csv` (ou `.txt`), e o histórico informa quantos pontos ele tem.

## O que há no arquivo

- Um ponto por linha, terminando com uma quebra de linha (CR LF), com três casas decimais.
- A cota de um ponto é o Z dele (0 quando não tem). O ponto de um bloco é o seu ponto de inserção.
- Uma descrição que tem vírgula (ou tabulação, em um TXT) ou aspas é colocada entre aspas duplas, com as aspas dobradas.
- O formato é o que o CivilCraft lê e escreve, então o arquivo também abre lá como pontos.

## Erros comuns

- Só `D` é oferecido para as unidades: o desenho não tem unidades definidas. Defina-as, ou converta no outro programa.
- Os pontos ficam longe de onde você espera no outro programa: exporte as coordenadas do mundo (`W`), ou o SCU que o ponto de levantamento do outro programa usa (`U`).
