---
title: Listas de materiais por zona
summary: Marque áreas do desenho como zonas e coloque uma tabela para cada uma que conta os blocos lá dentro. As tabelas acompanham o desenho à medida que trabalha, e escolhe as colunas que cada uma mostra.
keywords: lista de materiais, BOM, lista de peças, mapa, zona, área, tabela, contar, quantidade, atributo, colunas, número de item, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Uma **zona** é uma área com nome do desenho. Uma **tabela de lista de materiais** lista o que está dentro de uma zona, ou em todo o desenho: cada bloco com a sua quantidade e os seus valores de atributos. Um desenho pode ter quantas zonas e tabelas precisar, e uma zona pode ter várias tabelas com colunas diferentes.

As ferramentas estão no separador Blocos, em {{ui:Lista de materiais}}, no menu {{ui:Mais}} do grupo Blocos, e podem ser escritas.

## Criar uma zona

Escreva {{cmd:BOMZONE}} e então

- clique em dois cantos opostos para um retângulo,
- escolha {{ui:Polígono}}, clique em cada canto e prima Enter para o fechar, ou
- escolha {{ui:Objeto}} e selecione uma polilinha fechada, um círculo, uma elipse ou uma spline fechada. O seu contorno é copiado; o objeto fica como está.

Depois escreva o nome da zona. A zona é desenhada como um contorno a tracejado com o nome por cima do canto superior esquerdo, na camada `BOM-ZONES`, que não é impressa. Ative a impressão dessa camada se quiser as zonas no papel.

Uma zona é uma polilinha fechada comum: mova-a, estique-a ou arraste os seus pontos de controlo, e o nome acompanha-a. Para mudar o nome de uma zona, edite o texto do nome, ou use {{cmd:BOMZONE}} e {{ui:Mudar o nome}}. {{ui:Zonas}} lista todas as zonas e quantas tabelas tem.

## Colocar uma tabela

Escreva {{cmd:BOMTABLE}} (ou {{cmd:BOM}}), indique o contorno da zona ou o seu nome, indique a altura do texto e clique onde deve ficar o canto superior esquerdo da tabela. Prima Enter em vez de indicar uma zona, ou escolha {{ui:Todo}}, para uma tabela de todo o desenho.

Uma tabela nova mostra o número de item, a quantidade, o nome do bloco e uma coluna para cada atributo que os blocos têm (os primeiros seis; os restantes são oferecidos desmarcados). Blocos com o mesmo nome e os mesmos valores de atributos partilham uma linha.

## O que conta como estando dentro

- Um bloco conta na zona que contém o seu **ponto de inserção**.
- Uma linha, arco, círculo, polilinha, elipse, spline ou trama conta **inteira** na zona que contém o meio da sua extensão (no caso de uma linha, o seu ponto médio). O seu comprimento não é cortado na margem da zona.
- Um ponto exatamente sobre a margem está dentro.
- As zonas podem sobrepor-se. Cada zona conta por si, por isso um objeto na sobreposição está em ambas as tabelas.

## As tabelas seguem o desenho

Quando adiciona, move, copia ou apaga um bloco, edita um atributo, ou remodela ou move uma zona, todas as tabelas são redesenhadas no mesmo passo. Anular desfaz a sua edição e a alteração da tabela em conjunto.

Para impedir que uma tabela siga o desenho, marque {{ui:Congelada}} nas suas definições. Uma tabela congelada só muda quando edita as suas definições ou escreve {{cmd:BOMUPDATE}}, que atualiza agora todas as tabelas.

## Escolher as colunas

Selecione uma tabela e escreva {{cmd:BOMEDIT}}. Na caixa de diálogo:

- **Colunas**: marque as que quer mostrar (item, quantidade, nome, camada, comprimento, área, observações e cada atributo), escreva o seu próprio cabeçalho para qualquer uma delas, e mova-as para cima ou para baixo.
- {{ui:Agrupar linhas por}}: nome do bloco e valores de atributos, só nome do bloco, camada ou um atributo. Numa linha fundida, um valor que difere entre blocos lê "varia".
- {{ui:Ordenar por}} qualquer coluna, de forma crescente ou decrescente.
- {{ui:Título}}, {{ui:Mostrar o título}} e {{ui:Linha de totais}}.
- {{ui:Contar traçados por camada}} acrescenta uma linha por camada com o número de objetos, o seu comprimento total e, para formas fechadas, a sua área total, em unidades do desenho.
- **Observações**: marque a coluna Observações e depois escreva uma observação para qualquer linha da tabela na parte inferior da caixa de diálogo.

Cada tabela guarda as suas próprias escolhas.

## Números de item

Uma linha mantém o seu número de item enquanto estiver na tabela. Uma linha nova recebe o próximo número livre, e um número já atribuído não volta a ser usado, para que os balões e as notas que citam um número continuem certos. {{ui:Renumerar itens}} numera-os a partir de 1, pela ordem apresentada.

Uma linha é reconhecida pelo que agrupa: mude a forma como as linhas são agrupadas, ou mude um valor de atributo que o agrupamento usa, e a linha conta como uma nova.

## Exportar e outros programas

{{cmd:BOMEXPORT}}, ou {{ui:Exportar CSV}} na caixa de diálogo, guarda uma tabela como ficheiro .csv para uma folha de cálculo.

Num ficheiro DWG ou DXF, uma tabela é um bloco comum de linhas e texto, por isso os outros programas a mostram e imprimem como foi desenhada. Ali não é um objeto de tabela, e não se atualiza nos outros programas. A ligação à sua zona fica guardada no ficheiro como dados de extensão que o CadCraft lê de volta, para que a tabela volte a ficar ativa quando reabrir o desenho no CadCraft. Um DXF R12 de um desenho sem folha não guarda a definição "não impresso" da camada da zona.

Explodir uma tabela transforma-a em linhas e texto soltos e termina a ligação.
