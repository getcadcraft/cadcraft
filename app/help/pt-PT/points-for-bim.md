---
title: Pontos para programas BIM
summary: Exporte pontos, e os pontos de inserção de blocos com uma descrição, para um ficheiro CSV ou TXT que os programas BIM e de levantamento importam.
keywords: exportpoints, exportar pontos, pontos, csv, txt, pnezd, penzd, xyz, pontos de levantamento, coordenadas, bim, implantação, ficheiro de pontos, norte, este, cota
from: d80e2d53
---

## O que vai fazer

Um ficheiro de pontos: uma linha por ponto, com o seu número, norte, este, cota e descrição, que os programas BIM (o Revit e o Archicad, entre outros) e o software de levantamento conseguem importar para colocar pontos de levantamento, marcadores de obra ou equipamento.

## Exportar os pontos

1. Selecione os pontos e as referências de bloco cujos pontos de inserção quer, ou não selecione nada para tomar todos os pontos.
2. Escreva {{cmd:EXPORTPOINTS}} (ou `EXPPTS`, ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Exportar pontos}}) e prima {{key:Enter}}
   (prima {{key:Enter}} de novo em `Selecione pontos e blocos` quando nada foi selecionado).
3. Quando selecionar blocos com atributos, o CadCraft lista as suas etiquetas: escreva a que tem como valor a descrição (por exemplo `ITEM`), ou qualquer outra coisa para usar o nome de cada bloco.
4. Escolha as colunas: `PNEZD` (ponto, norte, este, cota, descrição: a habitual), `PENZD` (este antes de norte) ou `XYZ` (só as coordenadas).
5. Escolha as unidades: `D` (como desenhado), `M` (metros) ou `F` (pés); estas só existem quando as unidades do desenho estão definidas (Propriedades › {{ui:Unidades}} sem nada selecionado).
6. Com um UCS definido, escolha `W` (mundo) ou `U` (UCS) para as coordenadas (veja [UCS e uma vista rodada](topic:ucs-and-turned-view)).
7. Escolha `C` (CSV separado por vírgulas) ou `T` (TXT separado por tabulações), e o número do primeiro ponto.

O ficheiro é transferido como `<drawing>-points.csv` (ou `.txt`), e o histórico indica quantos pontos contém.

## O que há no ficheiro

- Um ponto por linha, terminada por uma quebra de linha (CR LF), com três casas decimais.
- A cota de um ponto é o seu Z (0 quando não tem). O ponto de um bloco é o seu ponto de inserção.
- Uma descrição que tenha uma vírgula (ou um tabulador num TXT) ou aspas fica entre aspas duplas, com as aspas duplicadas.
- O formato é o que o CivilCraft lê e escreve, por isso o ficheiro também se abre lá como pontos.

## Erros comuns

- Só `D` é oferecido para as unidades: o desenho não tem unidades definidas. Defina-as, ou converta no outro programa.
- Os pontos estão longe de onde espera no outro programa: exporte coordenadas do mundo (`W`), ou o UCS que o ponto de levantamento do outro programa usa (`U`).
