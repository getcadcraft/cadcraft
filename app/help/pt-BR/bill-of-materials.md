---
title: Listas de materiais por zona
summary: Marque áreas do desenho como zonas e coloque uma tabela para cada uma que conta os blocos dentro dela. As tabelas acompanham o desenho enquanto você trabalha, e você escolhe quais colunas cada uma mostra.
keywords: lista de materiais, BOM, lista de peças, quadro, zona, área, tabela, contagem, quantidade, atributo, colunas, número do item, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Uma **zona** é uma área nomeada do desenho. Uma **tabela de lista de materiais** lista o que está dentro de uma zona, ou no desenho inteiro: cada bloco com sua quantidade e os valores dos seus atributos. Um desenho pode ter quantas zonas e tabelas forem necessárias, e uma zona pode ter várias tabelas com colunas diferentes.

As ferramentas ficam na guia Blocos, em {{ui:Lista de materiais}}, no menu Mais do grupo Blocos, e podem ser digitadas.

## Criar uma zona

Digite {{cmd:BOMZONE}} e então

- clique em dois cantos opostos para um retângulo,
- escolha {{ui:Polígono}}, clique em cada canto e pressione Enter para fechá-lo, ou
- escolha {{ui:Objeto}} e selecione uma polilinha fechada, um círculo, uma elipse ou uma spline fechada. O contorno dele é copiado; o objeto permanece como está.

Depois digite o nome da zona. A zona é desenhada como um contorno tracejado, com o nome acima do canto superior esquerdo, na camada `BOM-ZONES`, que não é plotada. Ative a plotagem dessa camada se quiser as zonas no papel.

Uma zona é uma polilinha fechada comum: mova-a, estique-a ou arraste seus grips, e o nome acompanha. Para renomear uma zona, edite o texto do nome, ou use {{cmd:BOMZONE}} e {{ui:Renomear}}. {{ui:Zonas}} lista todas as zonas e quantas tabelas cada uma tem.

## Colocar uma tabela

Digite {{cmd:BOMTABLE}} (ou {{cmd:BOM}}), escolha o contorno da zona ou o nome dela, informe a altura do texto e clique onde fica o canto superior esquerdo da tabela. Pressione Enter em vez de escolher uma zona, ou escolha {{ui:Inteiro}}, para uma tabela do desenho inteiro.

Uma nova tabela mostra o número do item, a quantidade, o nome do bloco e uma coluna para cada atributo que os blocos carregam (os seis primeiros; os outros são oferecidos desmarcados). Blocos com o mesmo nome e os mesmos valores de atributo compartilham uma linha.

## O que conta como dentro

- Um bloco conta na zona que contém o seu **ponto de inserção**.
- Uma linha, arco, círculo, polilinha, elipse, spline ou hachura conta **inteira** na zona que contém o meio de sua extensão (para uma linha, o ponto médio dela). O comprimento dela não é cortado na borda da zona.
- Um ponto exatamente sobre a borda está dentro.
- Zonas podem se sobrepor. Cada zona conta por si, então um objeto na sobreposição fica nas duas tabelas.

## As tabelas acompanham o desenho

Quando você adiciona, move, copia ou apaga um bloco, edita um atributo, ou remodela ou move uma zona, todas as tabelas são redesenhadas na mesma etapa. Desfazer desfaz sua edição e a alteração da tabela juntas.

Para impedir que uma tabela acompanhe, marque {{ui:Congelada}} nas configurações dela. Uma tabela congelada muda somente quando você edita as configurações ou digita {{cmd:BOMUPDATE}}, que atualiza todas as tabelas agora.

## Escolher as colunas

Selecione uma tabela e digite {{cmd:BOMEDIT}}. Na caixa de diálogo:

- **Colunas**: marque as que devem aparecer (item, quantidade, nome, camada, comprimento, área, observações e cada atributo), digite seu próprio cabeçalho para qualquer uma delas, e mova-as para cima ou para baixo.
- {{ui:Agrupar linhas por}}: nome do bloco e valores de atributo, somente nome do bloco, camada, ou um atributo. Em uma linha mesclada, um valor que difere entre blocos aparece como "varia".
- {{ui:Ordenar por}} qualquer coluna, crescente ou decrescente.
- {{ui:Título}}, {{ui:Mostrar o título}} e {{ui:Linha de totais}}.
- {{ui:Contar linhas de desenho por camada}} adiciona uma linha por camada com o número de objetos, o comprimento total e, para formas fechadas, a área total, em unidades de desenho.
- **Observações**: marque a coluna Observações, depois digite uma observação para qualquer linha da tabela na parte inferior da caixa de diálogo.

Cada tabela mantém suas próprias escolhas.

## Números de item

Uma linha mantém seu número de item enquanto estiver na tabela. Uma nova linha recebe o próximo número livre, e um número já distribuído não é reutilizado; assim, balões e notas que citam um número continuam corretos. {{ui:Renumerar itens}} os numera a partir de 1, na ordem exibida.

Uma linha é identificada pelo que agrupa: se você mudar como as linhas são agrupadas, ou alterar um valor de atributo que o agrupamento usa, a linha conta como uma nova.

## Exportar e outros programas

{{cmd:BOMEXPORT}}, ou {{ui:Exportar CSV}} na caixa de diálogo, salva uma tabela como arquivo .csv para uma planilha.

Em um arquivo DWG ou DXF, uma tabela é um bloco comum de linhas e textos, então outros programas a mostram e plotam como foi desenhada. Ali ela não é um objeto de tabela, e não é atualizada em outros programas. O vínculo com a zona é mantido no arquivo como dados de extensão que o CadCraft relê, então a tabela volta a ficar ativa quando você reabre o desenho no CadCraft. Um DXF R12 de um desenho sem folha não mantém a configuração "não plotada" da camada da zona.

Explodir uma tabela a transforma em linhas e textos soltos e encerra o vínculo.
