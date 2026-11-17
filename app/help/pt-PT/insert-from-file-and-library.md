---
title: Inserir de um ficheiro ou da biblioteca
summary: Traga um bloco, ou um desenho inteiro, de outro DWG ou DXF, e coloque itens da Biblioteca, de um ficheiro ou de outra biblioteca, com os seus créditos e atualizações.
keywords: inserir, ficheiro, biblioteca, librarycraft, item, equipamento, bloco de outro desenho, wblock, centro de design, créditos, atribuição, licença, atualização, feed, item.json
from: 316188d2
---

## Inserir um bloco de outro desenho

1. Escreva `I` e prima {{key:Enter}}, ou clique em {{ui:Inserir}} no grupo {{ui:Blocos}}.
2. Em `Enter block name or [File/Library]`, escreva `F` e prima {{key:Enter}}.
3. Escolha o DWG ou DXF neste computador. É lido aqui; não é aberto, e nada é enviado.
4. Na caixa {{ui:Inserir de}}, escolha um bloco da lista (escreva em {{ui:Filtrar blocos}} para o encontrar), ou mantenha {{ui:O desenho inteiro}}. Clique em {{ui:Inserir}}.
5. Clique onde deve ir e preencha os atributos que pedir.

O desenho inteiro entra como um só bloco com o nome do ficheiro. Os blocos dentro do bloco que escolheu entram também. As camadas que usam são acrescentadas a este desenho.

Se o outro desenho estiver noutras unidades (polegadas e milímetros, por exemplo), o CadCraft escala a referência para corresponder e indica-o no histórico.

### Quando um nome já está em uso

Se este desenho já tiver um bloco com o mesmo nome, o CadCraft pergunta:

- {{ui:Manter os existentes}} usa o bloco deste desenho com esse nome.
- {{ui:Mudar o nome}} traz o novo como `Nome (2)`.

A inserção inteira é um só passo: {{key:Mod+Z}} retira de novo a referência e as definições copiadas.

## Abrir a biblioteca

Clique em {{ui:Biblioteca…}} no painel {{ui:Blocos}}, ou em {{ui:Biblioteca}} no grupo Blocos, ou escreva `LIB`. Na pergunta `INSERT`, `L` também a abre.

A biblioteca tem quatro fontes, em separadores:

- {{ui:Biblioteca}}: a biblioteca do CadCraft. Pesquise por nome, fabricante ou modelo, e filtre por categoria.
- {{ui:Ficheiros…}}: um ficheiro de item (`item.json`) de qualquer biblioteca, ou um desenho, uma folha de cálculo ou um modelo 3D para criar itens: um DWG ou DXF (cada bloco torna-se um item), um CSV com colunas de nome e tamanho, ou um modelo glTF ou OBJ. Nada é enviado.
- {{ui:Normal}}: perfis de aço (como cortes, alçados ou elementos 3D) e peças normalizadas, como parafusos, porcas e rolamentos, feitos aqui a partir de tabelas publicadas. Veja [Colocar perfis de aço e peças normalizadas](topic:steel-and-standard-parts).
- {{ui:Outros feeds}}: outras bibliotecas que respondem da mesma forma que a Biblioteca. Adicione o seu endereço uma vez; este navegador guarda-o.

Cada cartão mostra uma pré-visualização, o nome, o fabricante e o modelo, a licença e a versão. Um item retirado é marcado como {{ui:Retirado}} com o motivo; o CadCraft pede confirmação antes de colocar um.

## Colocar um item

1. Clique em {{ui:Colocar}} num cartão.
2. Clique onde o item deve ir. Escreva `R` primeiro para o rodar, ou `S` para o escalar.
3. Na pergunta `Enter Item number (CC-ITEM)`, prima {{key:Enter}} para o número livre seguinte, ou escreva o seu próprio.

O item torna-se um bloco com o nome `LIB_<name>_v<version>`, desenhado nas unidades deste desenho. Se o desenho não tiver unidades, o item é colocado em milímetros e o histórico indica-o; defina primeiro {{ui:Unidades}} no painel da direita.

Os seus dados vêm junto como atributos invisíveis: o id e a versão do item, a licença e a atribuição, o fabricante, o modelo, a categoria e os tamanhos. Veja [Atributos de bloco](topic:attributes).

## Itens no seu idioma

Um item pode ter o seu nome e descrição noutros idiomas. Quando os tem no idioma para o qual o CadCraft está definido (Definições › Geral › Idioma), o cartão e o nome do item do bloco colocado usam-nos. O próprio bloco mantém um nome feito a partir do nome do item, por isso um desenho tem um bloco por item, independentemente do idioma com que foi colocado.

## Procurar atualizações

1. Abra a biblioteca.
2. Clique em {{ui:Procurar atualizações}}.

Cada item da biblioteca no desenho é listado com os seus números de item e indica se está atualizado, se tem uma versão mais recente (e o que mudou), ou se foi retirado. Clique em {{ui:Atualizar}} numa linha, ou em {{ui:Atualizar tudo}}. Cada referência passa para o bloco da nova versão e mantém o seu número de item, quantidade, posição, ângulo e camada. {{key:Mod+Z}} anula uma atualização.

## Indicar o que usou

Clique em {{ui:Créditos da biblioteca}}. Cada item aparece com a sua linha de atribuição e licença.

- {{ui:Copiar atribuição}} copia a linha de um item; {{ui:Copiar tudo}} copia todas as linhas.
- {{ui:Transferir CSV}} guarda a lista com os números de item, fabricantes, modelos, licenças e atribuições. Abre em qualquer folha de cálculo.

Licenças como CC BY pedem que se credite o autor onde a obra for usada. Ponha as linhas no desenho, na especificação ou nas notas do projeto.

## Símbolos e recursos

A Biblioteca tem três tipos de item: Símbolos (convenções de desenho, 2D), Tipos (aquilo de que é feito um elemento) e Recursos (objetos físicos). No separador {{ui:Biblioteca}}, a lista {{ui:Tipo de item}} mostra Símbolos e Recursos juntos, só Símbolos, ou só Recursos. Os Tipos são aquilo de que é feito um projeto BimCraft, por isso o CadCraft não os lista.

## Iniciar sessão na biblioteca

Clique em {{ui:Iniciar sessão na biblioteca}}. Abre-se uma pequena janela no site; depois de ter sessão iniciada aí, o CadCraft pode mostrar os itens da sua equipa e registar o que coloca, para saber quando um item que usou muda. A sessão dura neste separador do navegador. Revogue-a em qualquer altura na página de segurança da sua conta.

## Erros comuns

- **"Criar itens a partir de tipos IFC é feito no BimCraft."** Os ficheiros IFC e de família são lidos na aplicação BimCraft. Crie o item aí ou na Biblioteca, e depois use o seu `item.json` aqui.
- **"Não foi possível contactar a biblioteca."** Está offline, ou a biblioteca está em baixo. Os itens já no desenho não são afetados.
- **Um item fica muito grande ou muito pequeno.** As unidades do desenho estão erradas ou não estão definidas. Anule, defina {{ui:Unidades}} e volte a colocar o item.
