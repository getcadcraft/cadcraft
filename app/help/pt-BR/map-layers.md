---
title: Camadas de mapa sob o desenho
summary: Mostre mapas de ruas, imagens aéreas ou uma imagem com arquivo world file sob o espaço modelo, posicionados pelo sistema de coordenadas do desenho.
keywords: mapa, camadas de mapa, maplayers, ml, geomap, mapa base, aérea, satélite, mosaicos, xyz, wms, wmts, serviço de mapas, world file, sistema de coordenadas, epsg, state plane, utm, georreferenciar, planta de situação, geolocalização, localização geográfica, geodados, salvo, dwg, dxf
from: f103045f
---

## O que você vai criar

Uma planta de situação desenhada sobre uma imagem aérea ou um mapa de ruas, cada um no lugar certo.

## Diga ao CadCraft onde está o desenho

1. Defina as unidades do desenho em {{ui:Propriedades}} › {{ui:Unidades}} (por exemplo, pés ou metros).
2. Digite {{cmd:MAPLAYERS}} (ou `ML`) e pressione {{key:Enter}}.
3. Em {{ui:Onde está o desenho}}, digite um nome ou um código EPSG em {{ui:Procurar um sistema}} (por exemplo, `2277` ou `Texas Central`) e escolha-o em {{ui:Sistema}}.
4. Se o desenho estiver feito nas coordenadas desse próprio sistema, deixe a posição em 0. Se não estiver, informe um ponto do desenho ({{ui:X do desenho}}, {{ui:Y do desenho}}), onde esse ponto está na grade do mapa ({{ui:Leste}}, {{ui:Norte}}), e quanto o desenho está girado a partir do leste ({{ui:Giro (°)}}).
5. Clique em {{ui:Usar este sistema}}.

## Adicionar uma camada

1. Ative {{ui:Camadas de mapa da internet}} no topo da caixa de diálogo. Até lá, nenhum servidor é consultado; quando está ativado, os servidores que você adiciona veem a área na tela e seu endereço de internet, nunca o seu desenho.
2. Em {{ui:Adicionar uma camada}}, escolha de onde ela vem:
   - **Mosaicos (XYZ)**: um endereço de mosaico com `{z}`, `{x}` e `{y}`, um nome e a atribuição que o provedor exige.
   - **WMS**, **WMTS** ou **ArcGIS**: o endereço do serviço, depois {{ui:Obter camadas}} e escolha uma.
   - **Uma imagem**: um PNG ou JPEG com seu world file (e seu `.prj`, quando houver).
3. A camada aparece sob o desenho. Sua atribuição aparece no canto inferior direito do desenho.

Cada camada da lista pode ser ocultada, deixada mais ou menos transparente, movida para cima ou para baixo, ou removida.

Cada alteração no sistema ou nas camadas é um passo de {{cmd:UNDO}}.

## Salvo com o desenho

O sistema de coordenadas e a lista de camadas são salvos no desenho quando você o salva como DWG ou DXF, e voltam quando você o abre novamente, em qualquer computador. As imagens de arquivos não são salvas: adicione-as novamente após abrir. A opção {{ui:Camadas de mapa da internet}} não é salva no desenho: ela pertence a este navegador; assim, um desenho que alguém envia a você não consulta servidor algum até que você a ative.

O que outros programas veem:

| Salvo como | Localização do desenho | Camadas de mapa |
|---|---|---|
| DWG 2010, 2013 ou 2018, DXF 2000 | Gravada do modo padrão em que os programas leem a localização geográfica de um desenho: o código EPSG do sistema, um ponto do desenho e onde ele fica na grade do mapa, as unidades e o norte. | Somente CadCraft |
| DWG 2000, 2004 ou 2007, DXF R12 | Somente CadCraft (o CadCraft avisa ao salvar) | Somente CadCraft |

- **Verificado:** o ODA File Converter lê a localização sem erros, e uma biblioteca DXF (ezdxf) lê o código EPSG e a posição exatamente.
- **Ainda não verificado:** se outros programas de desenho reconhecem o sistema pelo código EPSG. Um programa que mantém sua própria lista de sistemas com outros nomes pode mostrar o desenho sem localização.
- Outros programas mostram um bloco chamado `CADCRAFT_GEO` na lista de blocos. É a cópia do próprio CadCraft do sistema e das camadas; ele nunca é inserido no desenho. Deixe-o ali.

## Desenhos de outros programas

Quando um desenho de outro programa tem localização geográfica, o CadCraft a lê:

- Se ele indicar um código EPSG, {{ui:Onde está o desenho}} mostra esse sistema e as camadas de mapa são posicionadas por ele.
- Se o CadCraft não conhecer o sistema (um nome próprio de outro programa, uma grade local ou um fator de escala), a localização não é usada, mas é mantida e salva de volta como estava, para que o outro programa ainda a encontre. Escolha um sistema em {{ui:Onde está o desenho}} para substituí-la.

:::note
As camadas de mapa são desenhadas somente na tela: elas não são plotadas. Use apenas serviços de mapas cujos termos permitam isso e mantenha a atribuição visível.
:::
