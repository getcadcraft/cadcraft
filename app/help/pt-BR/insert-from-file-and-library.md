---
title: Inserir de um arquivo ou da biblioteca
summary: Traga um bloco, ou um desenho inteiro, de outro DWG ou DXF, e coloque itens da Biblioteca, de um arquivo ou de outra biblioteca, com seus créditos e atualizações.
keywords: inserir, arquivo, biblioteca, librarycraft, item, equipamento, bloco de outro desenho, wblock, design center, créditos, atribuição, licença, atualização, feed, item.json
from: 316188d2
---

## Inserir um bloco de outro desenho

1. Digite `I` e pressione {{key:Enter}}, ou clique em {{ui:Inserir}} no grupo Blocos.
2. Em `Digite o nome do bloco ou [Arquivo (F)/Biblioteca (L)]`, digite `F` e pressione {{key:Enter}}.
3. Escolha o DWG ou DXF neste computador. Ele é lido aqui; não é aberto, e nada é enviado.
4. Na caixa de diálogo {{ui:Inserir de}}, escolha um bloco da lista (digite em {{ui:Filtrar blocos}} para encontrá-lo), ou mantenha {{ui:O desenho inteiro}}. Clique em {{ui:Inserir}}.
5. Clique onde ele deve ir e preencha os atributos que ele pedir.

O desenho inteiro entra como um único bloco com o nome do arquivo. Os blocos dentro do bloco escolhido também entram. As camadas que eles usam são adicionadas a este desenho.

Se o outro desenho estiver em unidades diferentes (polegadas e milímetros, por exemplo), o CadCraft escala a referência para combinar e informa isso no histórico.

### Quando um nome já está em uso

Se este desenho já tem um bloco com o mesmo nome, o CadCraft pergunta:

- {{ui:Manter os existentes}} usa o bloco deste desenho com esse nome.
- {{ui:Renomear}} traz o novo como `Nome (2)`.

A inserção inteira é uma única etapa: {{key:Mod+Z}} remove a referência e as definições copiadas.

## Abrir a biblioteca

Clique em {{ui:Biblioteca…}} no painel {{ui:Blocos}}, ou em {{ui:Biblioteca}} no grupo Blocos, ou digite `LIB`. No prompt `INSERT`, `L` também a abre.

A biblioteca tem quatro fontes, como abas:

- {{ui:Biblioteca}}: a biblioteca do CadCraft. Pesquise por nome, fabricante ou modelo, e filtre por categoria.
- {{ui:Arquivos…}}: um arquivo de item (`item.json`) de qualquer biblioteca, ou um desenho, planilha ou modelo 3D para criar itens: um DWG ou DXF (cada bloco vira um item), um CSV com colunas de nome e tamanho, ou um modelo glTF ou OBJ. Nada é enviado.
- {{ui:Padrão}}: seções de aço (como seções, elevações ou barras 3D) e peças padronizadas como parafusos, porcas e rolamentos, feitas aqui a partir de tabelas publicadas. Veja [Inserir seções de aço e peças padronizadas](topic:steel-and-standard-parts).
- {{ui:Outros feeds}}: outras bibliotecas que respondem do mesmo modo que a Biblioteca. Adicione o endereço delas uma vez; este navegador o guarda.

Cada cartão mostra uma visualização, o nome, o fabricante e o modelo, a licença e a versão. Um item retirado é marcado como {{ui:Retirado}} com o motivo; o CadCraft pergunta antes de você colocar um deles.

## Colocar um item

1. Clique em {{ui:Colocar}} em um cartão.
2. Clique onde o item deve ir. Digite `R` antes para girá-lo, ou `S` para escalá-lo.
3. Em `Digite o número do item (CC-ITEM)`, pressione {{key:Enter}} para o próximo número livre, ou digite o seu.

O item vira um bloco chamado `LIB_<name>_v<version>`, desenhado nas unidades deste desenho. Se o desenho não tiver unidades, o item entra em milímetros e o histórico informa isso; defina primeiro {{ui:Unidades}} no painel da direita.

Os dados dele vêm junto como atributos invisíveis: o id e a versão do item, licença e atribuição, fabricante, modelo, categoria e tamanhos. Veja [Atributos de bloco](topic:attributes).

## Itens no seu idioma

Um item pode trazer seu nome e descrição em outros idiomas. Quando ele os tem no idioma em que o CadCraft está configurado (Configurações › Geral › Idioma), o cartão e o nome do item do bloco colocado os usam. O próprio bloco mantém um nome feito a partir do nome do item, então um desenho tem um bloco por item, qualquer que seja o idioma usado para colocá-lo.

## Verificar atualizações

1. Abra a biblioteca.
2. Clique em {{ui:Verificar atualizações}}.

Cada item da biblioteca no desenho é listado com seus números de item e se está atualizado, tem uma versão mais nova (e o que mudou), ou foi retirado. Clique em {{ui:Atualizar}} em uma linha, ou em {{ui:Atualizar tudo}}. Cada referência passa para o bloco da nova versão e mantém seu número de item, quantidade, lugar, ângulo e camada. {{key:Mod+Z}} desfaz uma atualização.

## Dar crédito ao que você usou

Clique em {{ui:Créditos da biblioteca}}. Cada item é listado com sua linha de atribuição e licença.

- {{ui:Copiar atribuição}} copia a linha de um item; {{ui:Copiar tudo}} copia todas as linhas.
- {{ui:Baixar CSV}} salva a lista com os números dos itens, fabricantes, modelos, licenças e atribuições. Ela abre em qualquer planilha.

Licenças como CC BY pedem que você credite o autor onde usar o trabalho. Coloque as linhas no desenho, na especificação ou nas notas do projeto.

## Símbolos e ativos

A Biblioteca tem três tipos de item: Símbolos (convenções de desenho, 2D), Tipos (do que um elemento é feito) e Ativos (objetos físicos). Na aba {{ui:Biblioteca}}, a lista {{ui:Tipo de item}} mostra Símbolos e Ativos juntos, só Símbolos, ou só Ativos. Tipos são o que um projeto do BimCraft é construído a partir, então o CadCraft não os lista.

## Entrar na biblioteca

Clique em {{ui:Entrar na biblioteca}}. Uma pequena janela abre no site; depois que você entrar lá, o CadCraft pode mostrar os itens da sua equipe e registrar o que você coloca, para que você seja avisado quando um item usado mudar. O login vale para esta aba do navegador. Revogue-o a qualquer momento na página de segurança da sua conta.

## Erros comuns

- **"Criar itens a partir de tipos IFC é no BimCraft."** Arquivos IFC e de família são lidos no aplicativo BimCraft. Crie o item lá ou na Biblioteca, depois use o `item.json` dele aqui.
- **"Não foi possível acessar a biblioteca."** Você está offline, ou a biblioteca está fora do ar. Os itens já no desenho não são afetados.
- **Um item está muito grande ou muito pequeno.** As unidades do desenho estão erradas ou não definidas. Desfaça, defina {{ui:Unidades}} e coloque o item novamente.
