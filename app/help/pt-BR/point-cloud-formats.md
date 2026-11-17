---
title: Formatos de nuvem de pontos: o que anexar e o que exportar
summary: Quais arquivos de escaneamento a laser são anexados sob o desenho, quais são formato próprio de um fabricante de scanner e o que exportar do software do scanner para que o escaneamento seja anexado aqui.
keywords: nuvem de pontos, pointcloudattach, pcattach, escaneamento a laser, escaneamento, formatos, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportar, não abre, não lido
from: 20a5f4ee
---

## O que é anexado aqui

Anexe estes com {{cmd:POINTCLOUDATTACH}}, {{ui:Abrir}} ou soltando-os na página (veja o tópico sobre traçar linhas como construídas sobre uma nuvem de pontos):

| Formato | Extensão | O que é lido |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pontos, cores, intensidade, classes LiDAR, o sistema de coordenadas e as suas unidades. LAZ até 1 GB. |
| E57 | `.e57` | Cada escaneamento do arquivo, posicionado pela sua pose; cores, ou intensidade quando o arquivo não tem cores; metros. Imagens do arquivo ficam de fora (o programa avisa). Até 6 milhões de pontos e 512 MB por enquanto: exporte escaneamentos maiores como LAS ou LAZ. |
| PLY | `.ply` | Texto e binário (as duas ordens de bytes): x y z dos vértices, cores e intensidade. Faces ficam de fora (o programa avisa). |
| PCD | `.pcd` | Texto e binário: x y z, cores empacotadas ou separadas, intensidade. Arquivos PCD compactados ainda não são lidos: salve como binário ou texto. |
| PTX | `.ptx` | Um ou mais escaneamentos, cada um posicionado pela sua própria transformação; pontos que o scanner não mediu ficam de fora. Metros. |
| PTS, XYZ | `.pts`, `.xyz` | Texto: x y z, com intensidade e cores quando as colunas existem. |

## Arquivos que só o software do scanner lê

Alguns arquivos de escaneamento são formato próprio de um fabricante de scanner, sem descrição publicada e sem leitor aberto. O CadCraft não consegue lê-los: ao anexar um, ele informa o que é e o que fazer na linha de comando. Exporte o escaneamento do software do fabricante como E57 ou LAS (ou PTX, PTS), depois anexe o arquivo exportado.

| Arquivo | Extensão | Exporte com |
|---|---|---|
| Projeto ReCap | `.rcp` | ReCap: abra o projeto e exporte-o. O projeto apenas aponta para os seus escaneamentos, então copiar só o `.rcp` não dá pontos. |
| Escaneamento ReCap | `.rcs` | ReCap: abra o projeto ao qual o escaneamento pertence e exporte-o. |
| Escaneamento FARO | `.fls` | FARO SCENE. |
| Escaneamento Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Escaneamento Trimble | `.tzf` | Trimble RealWorks ou Trimble Business Center. |
| Escaneamento Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Quando a exportação pedir um formato, LAS ou LAZ mantém tudo o que o CadCraft usa (cores, intensidade, classes, o sistema de coordenadas e as suas unidades) no arquivo menor.
:::

## Por que esses arquivos não são lidos

Esses formatos não são publicados, e a única forma de lê-los é a biblioteca de software de cada fabricante, sob os termos dela. O CadCraft lê apenas formatos que consegue ler com o próprio código no seu computador, então um escaneamento nunca precisa ser enviado para ser anexado.
