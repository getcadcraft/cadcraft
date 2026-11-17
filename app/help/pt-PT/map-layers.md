---
title: Camadas de mapa sob o desenho
summary: Mostrar mapas de ruas, imagens aéreas ou uma imagem com um ficheiro de mundo sob o espaço do modelo, colocados pelo sistema de coordenadas do desenho.
keywords: mapa, camadas de mapa, maplayers, ml, geomap, mapa base, aérea, satélite, tiles, xyz, wms, wmts, serviço de mapa, world file, sistema de coordenadas, epsg, state plane, utm, georreferenciação, plano de implantação, geolocalização, localização geográfica, geodados, guardado, dwg, dxf
from: f103045f
---

## O que vai criar

Um plano de implantação desenhado sobre uma imagem aérea ou um mapa de ruas, cada um no sítio certo.

## Dizer ao CadCraft onde está o desenho

1. Defina as unidades do desenho em {{ui:Propriedades}} › {{ui:Unidades}} (por exemplo, pés ou metros).
2. Escreva {{cmd:MAPLAYERS}} (ou `ML`) e prima {{key:Enter}}.
3. Em {{ui:Onde está o desenho}}, escreva um nome ou um código EPSG em {{ui:Procurar um sistema}} (por exemplo `2277` ou `Texas Central`) e escolha-o em {{ui:Sistema}}.
4. Se o desenho estiver feito nas próprias coordenadas desse sistema, deixe a colocação em 0. Se não estiver, indique um ponto do desenho ({{ui:X do desenho}}, {{ui:Y do desenho}}), onde esse ponto fica na grelha do mapa ({{ui:Este (M)}}, {{ui:Norte (P)}}), e quanto o desenho está rodado em relação ao este ({{ui:Rotação (°)}}).
5. Clique em {{ui:Usar este sistema}}.

## Adicionar uma camada

1. Ative {{ui:Camadas de mapa da internet}} no topo da caixa de diálogo. Até lá, nenhum servidor é consultado; quando estiver ativo, os servidores que acrescentar veem a área no ecrã e o seu endereço de internet, nunca o seu desenho.
2. Em {{ui:Adicionar uma camada}}, escolha de onde vem:
   - **Mosaicos (XYZ)**: um endereço de mosaico com `{z}`, `{x}` e `{y}`, um nome e o crédito que o fornecedor exige.
   - **WMS**, **WMTS** ou **ArcGIS**: o endereço do serviço, depois {{ui:Obter camadas}} e escolha uma.
   - **Uma imagem**: um PNG ou JPEG com o respetivo ficheiro de mundo (e o seu `.prj`, quando existir).
3. A camada aparece sob o desenho. O seu crédito aparece no canto inferior direito do desenho.

Cada camada na lista pode ser ocultada, tornada mais ou menos transparente, subida ou descida, ou removida.

Cada alteração ao sistema ou às camadas é um passo de {{cmd:UNDO}}.

## Guardado com o desenho

O sistema de coordenadas e a lista de camadas são guardados no desenho quando o guarda como DWG ou DXF, e voltam quando o abre de novo, em qualquer computador. As imagens de ficheiros não são guardadas: acrescente-as de novo depois de abrir. O interruptor {{ui:Camadas de mapa da internet}} não é guardado no desenho: pertence a este navegador, por isso um desenho que alguém lhe envie não pede nada a nenhum servidor até que o ative.

O que outros programas veem:

| Guardado como | A localização do desenho | As camadas de mapa |
|---|---|---|
| DWG 2010, 2013 ou 2018, DXF 2000 | Escrita da forma padrão como os programas leem a localização geográfica de um desenho: o código EPSG do sistema, um ponto do desenho e onde esse ponto fica na grelha do mapa, as unidades e o norte. | Só CadCraft |
| DWG 2000, 2004 ou 2007, DXF R12 | Só CadCraft (o CadCraft avisa ao guardar) | Só CadCraft |

- **Verificado:** o ODA File Converter lê a localização sem erros, e uma biblioteca DXF (ezdxf) lê o código EPSG e a colocação com exatidão.
- **Ainda por verificar:** se outros programas de desenho reconhecem o sistema pelo código EPSG. Um programa que mantenha a sua própria lista de sistemas, com outros nomes, pode mostrar o desenho sem localização.
- Outros programas mostram um bloco chamado `CADCRAFT_GEO` na lista de blocos. É a cópia do CadCraft do sistema e das camadas; nunca é colocado no desenho. Deixe-o aí.

## Desenhos de outros programas

Quando um desenho de outro programa tem uma localização geográfica, o CadCraft lê-a:

- Se indicar um código EPSG, {{ui:Onde está o desenho}} mostra esse sistema e as camadas de mapa são colocadas por ele.
- Se o CadCraft não conhecer o sistema (o nome que outro programa lhe dá, uma grelha local ou um fator de escala), a localização não é usada, mas é mantida e guardada de volta como estava, para que o outro programa continue a encontrá-la. Escolha um sistema em {{ui:Onde está o desenho}} para a substituir.

:::note
As camadas de mapa são desenhadas apenas no ecrã: não são impressas. Use apenas serviços de mapas cujas condições de utilização o permitam, e mantenha o crédito visível.
:::
