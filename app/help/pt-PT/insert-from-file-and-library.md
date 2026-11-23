---
title: Inserir a partir de um ficheiro ou da biblioteca
summary: Traga um bloco, ou um desenho inteiro, de outro DWG ou DXF, e coloque itens da Biblioteca, de um ficheiro ou de outra biblioteca, com as suas atribuições e atualizações.
keywords: inserir, ficheiro, biblioteca, librarycraft, item, equipamento, bloco de outro desenho, wblock, centro de design, atribuição, crédito, licença, atualização, feed, item.json
from: f6e4e452
---

## Inserir um bloco de outro desenho

1. Escreva `I` e prima {{key:Enter}}, ou clique em {{ui:Inserir}} no grupo Blocos.
2. A linha de comandos na parte inferior da janela pede `Enter block name or [File/Library]`. Escreva `F` aí e prima {{key:Enter}}.
3. Escolha o DWG ou DXF neste computador. É lido aqui; não é aberto, e nada é enviado.
4. Na caixa {{ui:Inserir de}}, escolha um bloco da lista (escreva em {{ui:Filtrar blocos}} para o encontrar), ou mantenha {{ui:O desenho inteiro}}. Clique em {{ui:Inserir}}.
5. Clique onde deve ir, e preencha os atributos que pedir.

Também pode começar pelo painel {{ui:Blocos}}: escreva `F` na sua caixa {{ui:Filtrar blocos}} e prima {{key:Enter}}, ou escreva algo que nenhum bloco corresponda e clique em {{ui:De um ficheiro…}}. `L` e {{ui:Biblioteca…}} abrem a biblioteca da mesma forma. Antes da versão 0.10.1, uma letra escrita em {{ui:Filtrar blocos}} só pesquisava os blocos deste desenho e respondia "Nenhum bloco corresponde ao filtro."

Para ter à mão um desenho com os seus próprios blocos, clique em {{ui:Adicionar um desenho}} em {{ui:Bibliotecas}} no painel {{ui:Blocos}} e escolha o DWG ou DXF. Os seus blocos são listados com imagens; clique num para o colocar.

O desenho inteiro entra como um só bloco com o nome do ficheiro. Os blocos dentro do bloco que escolheu vêm também. As camadas que usam são acrescentadas a este desenho.

Se o outro desenho estiver em unidades diferentes (polegadas e milímetros, por exemplo), o CadCraft escala a referência para coincidir e indica-o no histórico.

### Quando um nome já está em uso

Se este desenho já tiver um bloco com o mesmo nome, o CadCraft pergunta:

- {{ui:Manter os existentes}} usa o bloco deste desenho com esse nome.
- {{ui:Mudar o nome}} traz o novo como `Name (2)`.

A inserção completa é um único passo: {{key:Mod+Z}} remove de novo a referência e as definições copiadas.

## Abrir a biblioteca

Clique em {{ui:Biblioteca…}} no painel {{ui:Blocos}}, ou em {{ui:Biblioteca}} no grupo Blocos, ou escreva `LIB`. No pedido `INSERT`, `L` abre-a também.

A biblioteca tem quatro fontes, em separadores:

- {{ui:Biblioteca}}: a biblioteca do CadCraft. Pesquise pelo nome, fabricante ou modelo, e filtre por categoria.
- {{ui:Ficheiros…}}: um ficheiro de item (`item.json`) de qualquer biblioteca, ou um desenho, folha de cálculo ou modelo 3D a partir do qual criar itens: um DWG ou DXF (cada bloco torna-se um item), um CSV com colunas de nome e tamanho, ou um modelo glTF ou OBJ. Nada é enviado.
- {{ui:Normal}}: perfis de aço (como cortes, alçados ou peças 3D) e peças normalizadas como parafusos, porcas e rolamentos, criados aqui a partir de tabelas publicadas. Veja [Colocar perfis de aço e peças normalizadas](topic:steel-and-standard-parts).
- {{ui:Outros feeds}}: outras bibliotecas que respondem da mesma forma que a Biblioteca. Adicione o seu endereço uma vez; este navegador memoriza-o.

Cada cartão mostra uma pré-visualização, o nome, o fabricante e o modelo, a licença e a versão. Um item retirado é marcado {{ui:Retirado}} com o motivo; o CadCraft pergunta antes de o colocar.

## Colocar um item

1. Clique em {{ui:Colocar}} num cartão.
2. Clique onde o item deve ir. Escreva `R` primeiro para o rodar, ou `S` para o escalar.
3. No pedido `Enter Item number (CC-ITEM)`, prima {{key:Enter}} para o próximo número livre, ou escreva o seu.

O item torna-se um bloco com o nome `LIB_<name>_v<version>`, desenhado nas unidades deste desenho. Se o desenho não tiver unidades, o item entra em milímetros e o histórico indica-o; defina primeiro {{ui:Unidades}} no painel da direita.

Os seus dados seguem como atributos invisíveis: o identificador e a versão do item, a licença e a atribuição, o fabricante, o modelo, a categoria e os tamanhos. Veja [Atributos de bloco](topic:attributes).

## Itens na sua língua

Um item pode ter o seu nome e descrição noutras línguas. Quando os tem na língua definida no CadCraft ({{ui:Definições}} › {{ui:Geral}} › {{ui:Idioma}}), o cartão e o nome do item do bloco colocado usam-nas. O próprio bloco mantém um nome feito a partir do nome do item, por isso um desenho tem um bloco por item, seja qual for a língua que o colocou.

## Verificar atualizações

1. Abra a biblioteca.
2. Clique em {{ui:Procurar atualizações}}.

Cada item da biblioteca no desenho é listado com os seus números de item e indica se está atualizado, se tem uma versão mais recente (e o que mudou), ou se foi retirado. Clique em {{ui:Atualizar}} numa linha, ou em {{ui:Atualizar tudo}}. Cada referência passa para o bloco da nova versão e mantém o seu número de item, quantidade, posição, ângulo e camada. {{key:Mod+Z}} anula uma atualização.

## Dar crédito ao que usou

Clique em {{ui:Créditos da biblioteca}}. Cada item é listado com a sua linha de atribuição e licença.

- {{ui:Copiar atribuição}} copia a linha de um item; {{ui:Copiar tudo}} copia todas as linhas.
- {{ui:Transferir CSV}} guarda a lista com os números dos itens, fabricantes, modelos, licenças e atribuições. Abre-se em qualquer folha de cálculo.

Licenças como CC BY pedem que indique o autor onde usar o trabalho. Coloque as linhas no desenho, no caderno de encargos ou nas notas do projeto.

## Símbolos e recursos

A Biblioteca tem três tipos de item: Símbolos (convenções de desenho, 2D), Tipos (do que é feito um elemento) e Recursos (objetos físicos). No separador {{ui:Biblioteca}}, a lista {{ui:Tipo de item}} mostra Símbolos e Recursos em conjunto, só Símbolos, ou só Recursos. Os Tipos são aquilo de que um projeto BimCraft é construído, por isso o CadCraft não os lista.

## Iniciar sessão na biblioteca

Clique em {{ui:Iniciar sessão na biblioteca}}. Abre-se uma pequena janela no site; depois de ter sessão iniciada aí, o CadCraft pode mostrar os itens da sua equipa e registar o que coloca, para saber quando um item que usou muda. A sessão dura neste separador do navegador. Pode revogá-la a qualquer momento na página de segurança da sua conta.

## Guardar os seus objetos em Os meus objetos

{{ui:Os meus objetos}} é uma lista privada da Biblioteca que só você vê. Não está na biblioteca pública, não aparece na pesquisa e não é mostrada à sua equipa, e acompanha a sua conta em todos os computadores onde inicia sessão na biblioteca.

1. No painel da Biblioteca, clique em {{ui:Ficheiros…}} e leia um ficheiro.
2. No item que quer voltar a usar, clique em {{ui:Guardar nos meus objetos}}.
3. Mais tarde, clique em {{ui:Os meus objetos}} e em {{ui:Colocar}}. Coloca-se como qualquer item da biblioteca, e {{ui:Procurar atualizações}} abrange-o.
4. {{ui:Remover dos meus objetos}} tira-o da lista. As cópias já colocadas em desenhos mantêm-se.

Tem de ter sessão iniciada na biblioteca. Ler um ficheiro não envia nada; guardar um item envia apenas esse item para a sua conta.

:::note
Os meus objetos está em teste e pode ainda não estar disponível para a sua conta. Se indicar "Os meus objetos ainda não está disponível para esta conta", pode continuar a colocar itens dos seus próprios ficheiros com {{ui:Ficheiros…}}.
:::

## Erros comuns

- **"A criação de itens a partir de tipos IFC está no BimCraft."** Os ficheiros IFC e de famílias são lidos na aplicação BimCraft. Crie o item aí ou na Biblioteca, depois use o seu `item.json` aqui.
- **"Não foi possível contactar a biblioteca."** Está offline, ou a biblioteca está em baixo. Os itens já no desenho não são afetados.
- **Um item está muito grande ou muito pequeno.** As unidades do desenho estão erradas ou não definidas. Anule, defina {{ui:Unidades}} e volte a colocá-lo.
