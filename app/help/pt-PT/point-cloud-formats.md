---
title: Formatos de nuvens de pontos: o que se anexa e o que exportar
summary: Que ficheiros de digitalização a laser se anexam por baixo do desenho, quais são um formato próprio de um fabricante de scanners, e o que exportar do software do scanner para que a digitalização se anexe aqui.
keywords: nuvem de pontos, pointcloudattach, pcattach, digitalização a laser, digitalização, formatos, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportar, não consigo abrir, não lido
from: 20a5f4ee
---

## O que se anexa aqui

Anexe estes com {{cmd:POINTCLOUDATTACH}}, {{ui:Abrir}} ou arrastando-os para a página (veja o tópico sobre traçar linhas tal como construídas sobre uma nuvem de pontos):

| Formato | Extensão | O que é lido |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pontos, cores, intensidade, classes LiDAR, o sistema de coordenadas e as suas unidades. LAZ até 1 GB. |
| E57 | `.e57` | Cada digitalização do ficheiro, colocada pela sua pose; cores, ou intensidade quando o ficheiro não tem cores; metros. As imagens do ficheiro ficam de fora (é indicado). Até 6 milhões de pontos e 512 MB por enquanto: exporte digitalizações maiores como LAS ou LAZ. |
| PLY | `.ply` | Texto e binário (ambas as ordens de bytes): as coordenadas x y z dos vértices, cores e intensidade. As faces ficam de fora (é indicado). |
| PCD | `.pcd` | Texto e binário: x y z, cores agrupadas ou separadas, intensidade. Os ficheiros PCD comprimidos ainda não são lidos: guarde-os como binário ou texto. |
| PTX | `.ptx` | Uma ou mais digitalizações, cada uma colocada pela sua própria transformação; os pontos que o scanner não mediu ficam de fora. Metros. |
| PTS, XYZ | `.pts`, `.xyz` | Texto: x y z, com intensidade e cores quando as colunas existirem. |

## Ficheiros que só o software do scanner lê

Alguns ficheiros de digitalização são um formato próprio de um fabricante de scanners, sem descrição publicada nem leitor aberto. O CadCraft não os consegue ler: ao anexar um, indica o que é e o que fazer na linha de comandos. Exporte a digitalização do software do fabricante como E57 ou LAS (ou PTX, PTS), depois anexe o ficheiro exportado.

| Ficheiro | Extensão | Exportar a partir de |
|---|---|---|
| Projeto ReCap | `.rcp` | ReCap: abra o projeto e exporte-o. O projeto apenas aponta para as suas digitalizações, por isso copiar só o `.rcp` não dá pontos. |
| Digitalização ReCap | `.rcs` | ReCap: abra o projeto a que a digitalização pertence e exporte-o. |
| Digitalização FARO | `.fls` | FARO SCENE. |
| Digitalização Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Digitalização Trimble | `.tzf` | Trimble RealWorks ou Trimble Business Center. |
| Digitalização Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Quando a exportação pedir um formato, LAS ou LAZ mantém tudo o que o CadCraft usa (cores, intensidade, classes, o sistema de coordenadas e as suas unidades) no ficheiro mais pequeno.
:::

## Porque não são lidos estes ficheiros

Esses formatos não são publicados, e a única forma de os ler é a biblioteca de software de cada fabricante, sob os seus próprios termos. O CadCraft só lê formatos que consegue ler com o seu próprio código no seu computador; por isso, uma digitalização nunca tem de ser enviada para lado nenhum para ser anexada.
