---
title: Posicionar perfis de aço e peças padronizadas
summary: Desenhe perfis de aço, elevações e barras 3D a partir das tabelas de seções publicadas, posicione parafusos, porcas, arruelas, pinos, rolamentos, chavetas e engrenagens a partir de suas normas e liste-os em uma lista de peças.
keywords: aço, seção, perfil, forma, perfil W, mesa larga, perfil I, canal, cantoneira, HSS, tubo, cano, ipe, hea, heb, upn, viga, pilar, barra, elevação, aisc, en 10365, parafuso, porca, arruela, pino, rolamento, chaveta, rasgo de chaveta, engrenagem, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, peças padronizadas, lista de peças, lista de materiais, bom, steelmember, partslist
from: 547c1048
---

A guia {{ui:Padrão}} da biblioteca tem dois tipos de itens, criados aqui mesmo a partir de tabelas publicadas (nada é baixado):

- **Perfis de aço**: 1,335 tamanhos. W, S, C, L, HSS e Pipe do AISC Shapes Database v16.0; IPE, HEA, HEB e UPN da EN 10365:2017. O DetailCraft usa a mesma tabela.
- **Peças padronizadas**: parafusos de cabeça sextavada (ISO 4017), parafusos sextavados (ISO 4014), porcas sextavadas (ISO 4032), arruelas lisas (ISO 7089), parafusos e porcas sextavados em polegadas (ASME B18.2.1 e B18.2.2), pinos paralelos (ISO 2338), rolamentos rígidos de esferas (ISO 15), chavetas paralelas (DIN 6885-1) e engrenagens retas (módulos da ISO 54).

Tudo aqui é compartilhado sob CC0: pode ser usado para qualquer finalidade, sem necessidade de crédito.

## Posicionar um perfil de aço

1. Abra a biblioteca ({{ui:Biblioteca}} no grupo Blocos, ou digite `LIB`) e clique na guia {{ui:Padrão}}.
2. Escolha a família na primeira lista, por exemplo {{ui:Perfis W}}. Digite na caixa de pesquisa para filtrar os tamanhos: `W12` mostra todos os W12.
3. Em {{ui:Colocar como}}, escolha:
   - {{ui:Corte}}: a seção transversal, com seu centro no ponto de inserção.
   - {{ui:Elevação}}: a barra vista de lado, com o comprimento indicado em {{ui:Comprimento (mm)}}, a partir do meio da sua extremidade esquerda.
   - {{ui:Barra 3D}}: um sólido na guia 3D (abaixo).
4. Clique em {{ui:Colocar}} no cartão do tamanho, depois clique onde ele deve ficar, como para qualquer item da biblioteca.

Um corte ou elevação vira um bloco. Seus atributos trazem o tamanho, a tabela de origem, o comprimento (para uma elevação) e um material que você pode preencher.

:::note
Perfis S, canais e UPN são desenhados com mesas paralelas de espessura média, e cantoneiras com cantos vivos: as mesas reais são inclinadas e os cantos são arredondados. W, IPE, HEA e HEB têm seus raios de concordância na raiz, e HSS seus raios de canto.
:::

## Criar uma barra 3D

Escolha {{ui:Barra 3D}} e clique em {{ui:Colocar}}, ou digite {{cmd:STEELMEMBER}} (`SMEMBER`) na linha de comando:

1. Em `Section size`, pressione {{key:Enter}} para o tamanho mostrado, ou digite outro, por exemplo `HSS6x6x1/4` ou `IPE300`.
2. Clique no ponto inicial e depois no ponto final. A barra vai entre eles, apoiada no chão.
3. Para um pilar, digite `C`, clique no seu ponto de base e digite sua altura.

A barra é um sólido fechado na guia 3D. Mova ou copie-a ali como qualquer outro sólido. {{key:Mod+Z}} a remove novamente.

## Posicionar uma peça padronizada

1. Na guia {{ui:Padrão}}, escolha a família, por exemplo {{ui:Parafusos de cabeça sextavada}}.
2. Para um parafuso, parafuso sextavado, pino ou chaveta, digite seu {{ui:Comprimento (mm)}} (em polegadas para as famílias em polegadas). Para uma engrenagem, digite os {{ui:Dentes}}, a {{ui:Largura da face (mm)}} e o {{ui:Furo (mm)}}. Deixe uma caixa vazia para usar o valor usual mostrado nela.
3. Clique em {{ui:Colocar}} no tamanho e clique onde ela deve ficar.

Parafusos, parafusos sextavados e pinos são desenhados de lado, com a face de apoio da cabeça no ponto de inserção; porcas, arruelas, rolamentos e engrenagens são desenhados de frente; chavetas, de cima. As roscas são desenhadas da maneira usual: a raiz como linha fina, e o fim da rosca como linha grossa. Engrenagens são desenhadas como círculo de topo, círculo primitivo e círculo de raiz, não dente por dente.

Cada bloco de peça traz seu tipo, norma, tamanho, comprimento e material como atributos, e seu peso a partir da forma nominal em aço. Altere o material no painel {{ui:Propriedades}}.

As mesmas peças também estão na Biblioteca como itens, e o PartCraft as abre como peças paramétricas ({{ui:Peça padronizada}} no grupo Arquivo).

## Criar uma lista de peças

- Na biblioteca, clique em {{ui:Lista de peças}}: cada peça padronizada e perfil de aço do desenho, agrupados por tipo, norma, tamanho, comprimento e material, com a quantidade e os números dos itens. {{ui:Baixar CSV}} salva a lista para uma planilha.
- Para desenhá-la, digite {{cmd:PARTSLIST}} (`PLIST`), clique no canto superior esquerdo da tabela e pressione {{key:Enter}} para a altura de texto usual, ou digite uma.

A lista é lida dos atributos dos blocos, então continua correta depois que o desenho é salvo como DWG ou DXF e aberto de novo.

## Erros comuns

- **"Nenhum perfil de aço se chama …"**: digite o tamanho como a guia {{ui:Padrão}} o lista: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **A barra está na guia 3D, não na planta.** {{cmd:STEELMEMBER}} cria um sólido; abra a guia 3D para vê-lo. Para mostrar o aço na planta, posicione também um {{ui:Corte}} ou uma {{ui:Elevação}}.
- **Um comprimento fora do intervalo.** Um parafuso deve ser mais longo que sua cabeça, e uma chaveta mais longa que sua largura. A linha abaixo dos cartões diz qual valor foi recusado.
