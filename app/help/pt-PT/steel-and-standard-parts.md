---
title: Colocar perfis de aço e peças normalizadas
summary: Desenhe perfis de aço, alçados e barras 3D a partir das tabelas de perfis publicadas, coloque parafusos, porcas, anilhas, cavilhas, rolamentos, chavetas e engrenagens a partir das suas normas, e liste-os numa lista de peças.
keywords: aço, perfil, secção, forma, perfil W, banzo largo, perfil em I, cantoneira, canal, HSS, tubo, ipe, hea, heb, upn, viga, pilar, barra, alçado, aisc, en 10365, parafuso, parafuso de cabeça, porca, anilha, cavilha, rolamento, chaveta, rasgo de chaveta, engrenagem, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, peças normalizadas, lista de peças, lista de materiais, bom, steelmember, partslist
from: 547c1048
---

O separador {{ui:Normal}} da biblioteca tem dois tipos de itens, criados aqui mesmo a partir de tabelas publicadas (nada é transferido):

- **Perfis de aço**: 1,335 tamanhos. W, S, C, L, HSS e Pipe da AISC Shapes Database v16.0; IPE, HEA, HEB e UPN da EN 10365:2017. O DetailCraft usa a mesma tabela.
- **Peças normalizadas**: parafusos de cabeça sextavada (ISO 4017), parafusos sextavados (ISO 4014), porcas sextavadas (ISO 4032), anilhas lisas (ISO 7089), parafusos e porcas sextavados em polegadas (ASME B18.2.1 e B18.2.2), cavilhas paralelas (ISO 2338), rolamentos rígidos de esferas (ISO 15), chavetas paralelas (DIN 6885-1) e engrenagens cilíndricas de dentes retos (módulos da ISO 54).

Tudo isto é partilhado sob CC0: pode usá-lo para qualquer fim, sem necessidade de crédito.

## Colocar um perfil de aço

1. Abra a biblioteca ({{ui:Biblioteca}} no grupo Blocos, ou escreva `LIB`) e clique no separador {{ui:Normal}}.
2. Escolha a família na primeira lista, por exemplo {{ui:Perfis W}}. Escreva na caixa de pesquisa para restringir os tamanhos: `W12` mostra todos os W12.
3. Em {{ui:Colocar como}}, escolha:
   - {{ui:Corte}}: a secção transversal, com o centro no ponto de inserção.
   - {{ui:Elevação}}: a peça vista de lado, com o comprimento indicado em {{ui:Comprimento (mm)}}, a partir do meio da sua extremidade esquerda.
   - {{ui:Barra 3D}}: um sólido no separador 3D (abaixo).
4. Clique em {{ui:Colocar}} no cartão do tamanho e depois clique onde deve ficar, como em qualquer item da biblioteca.

Um corte ou uma elevação torna-se um bloco. Os seus atributos guardam o tamanho, a tabela de origem, o comprimento (numa elevação) e um material que pode preencher.

:::note
Os perfis S, os canais e os UPN são desenhados com banzos paralelos de espessura média, e as cantoneiras com cantos quadrados: os banzos reais são inclinados e os cantos arredondados. Os W, IPE, HEA e HEB têm os seus raios de raiz, e os HSS os seus raios de canto.
:::

## Criar uma barra 3D

Escolha {{ui:Barra 3D}} e clique em {{ui:Colocar}}, ou escreva {{cmd:STEELMEMBER}} (`SMEMBER`) na linha de comandos:

1. Em `Section size`, prima {{key:Enter}} para o tamanho indicado, ou escreva um, por exemplo `HSS6x6x1/4` ou `IPE300`.
2. Clique no ponto inicial e depois no ponto final. A barra vai entre eles, assente no chão.
3. Para um pilar, escreva `C`, clique no seu ponto de base e escreva a sua altura.

A barra é um sólido fechado no separador 3D. Mova-a ou copie-a aí como qualquer outro sólido. {{key:Mod+Z}} remove-a novamente.

## Colocar uma peça normalizada

1. No separador {{ui:Normal}}, escolha a família, por exemplo {{ui:Parafusos de cabeça sextavada}}.
2. Para um parafuso, uma cavilha ou uma chaveta, escreva o seu {{ui:Comprimento (mm)}} (em polegadas nas famílias em polegadas). Para uma engrenagem, escreva os {{ui:Dentes}}, a {{ui:Largura do dente (mm)}} e o {{ui:Furo (mm)}}. Deixe uma caixa vazia para o valor habitual que nela aparece.
3. Clique em {{ui:Colocar}} no tamanho e clique onde deve ficar.

Parafusos, parafusos sextavados e cavilhas são desenhados de lado, com a face de apoio da cabeça no ponto de inserção; porcas, anilhas, rolamentos e engrenagens são desenhados de frente; chavetas são desenhadas de cima. As roscas são desenhadas da forma habitual: a raiz como linha fina, o fim da rosca como linha grossa. As engrenagens são desenhadas com o círculo de cabeça, o círculo primitivo e o círculo de raiz, e não dente a dente.

O bloco de cada peça guarda o tipo, a norma, o tamanho, o comprimento e o material como atributos, e o seu peso a partir da forma nominal em aço. Altere o material no painel {{ui:Propriedades}}.

As mesmas peças estão também na Biblioteca como itens, e o PartCraft abre-as como peças paramétricas ({{ui:Peça normalizada}} no seu grupo Ficheiro).

## Criar uma lista de peças

- Na biblioteca, clique em {{ui:Lista de peças}}: cada peça normalizada e cada perfil de aço do desenho, agrupados por tipo, norma, tamanho, comprimento e material, com a quantidade e os números de item. {{ui:Transferir CSV}} guarda-a para uma folha de cálculo.
- Para a desenhar, escreva {{cmd:PARTSLIST}} (`PLIST`), clique no canto superior esquerdo da tabela e prima {{key:Enter}} para a altura de texto habitual, ou escreva uma.

A lista é lida a partir dos atributos dos blocos, por isso continua correta depois de o desenho ser guardado como DWG ou DXF e aberto de novo.

## Erros comuns

- **"Nenhum perfil de aço se chama …"**: escreva o tamanho da forma como o separador {{ui:Normal}} o lista: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **A barra está no separador 3D, não na planta.** O {{cmd:STEELMEMBER}} cria um sólido; abra o separador 3D para o ver. Para mostrar o aço na planta, coloque também um {{ui:Corte}} ou uma {{ui:Elevação}}.
- **Um comprimento fora do intervalo.** Um parafuso tem de ser mais comprido do que a sua cabeça, e uma chaveta mais comprida do que é larga. A linha abaixo dos cartões indica que valor foi recusado.
