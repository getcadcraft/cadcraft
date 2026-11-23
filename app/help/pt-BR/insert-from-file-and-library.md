---
title: Inserir de um arquivo ou da biblioteca
summary: Traga um bloco, ou um desenho inteiro, de outro DWG ou DXF, e coloque itens da Biblioteca, de um arquivo ou de outra biblioteca, com seus créditos e atualizações.
keywords: inserir, arquivo, biblioteca, librarycraft, item, equipamento, bloco de outro desenho, wblock, central de design, créditos, atribuição, licença, atualização, feed, item.json
from: f6e4e452
---

## Inserir um bloco de outro desenho

1. Digite `I` e pressione {{key:Enter}}, ou clique em {{ui:Insert}} no grupo Blocos.
2. A linha de comando na parte inferior da janela pergunta `Informe o nome do bloco ou [Arquivo (F)/Biblioteca (L)]`. Digite `F` ali e pressione {{key:Enter}}.
3. Escolha o DWG ou DXF deste computador. Ele é lido aqui; não é aberto, e nada é enviado.
4. Na caixa {{ui:Insert from}} (Inserir de), escolha um bloco da lista (digite em {{ui:Filter blocks}} para encontrá-lo), ou mantenha {{ui:The whole drawing}} (O desenho inteiro). Clique em {{ui:Insert}}.
5. Clique onde ele vai e preencha os atributos que ele pedir.

Você também pode começar pelo painel {{ui:Blocks}}: digite `F` na caixa {{ui:Filter blocks}} e pressione {{key:Enter}}, ou digite algo que nenhum bloco corresponda e clique em {{ui:From a file…}}. `L` e {{ui:Library…}} abrem a biblioteca do mesmo jeito. Antes da versão 0.10.1, uma letra digitada em {{ui:Filter blocks}} só pesquisava os blocos deste desenho e respondia "Nenhum bloco corresponde ao filtro."

Para manter um desenho dos seus próprios blocos à mão, clique em {{ui:Add a drawing}} em {{ui:Libraries}} no painel {{ui:Blocks}} e escolha o DWG ou DXF. Seus blocos são listados com imagens; clique em um para colocá-lo.

O desenho inteiro entra como um único bloco com o nome do arquivo. Os blocos dentro do bloco escolhido entram também. As camadas que eles usam são adicionadas a este desenho.

Se o outro desenho estiver em unidades diferentes (polegadas e milímetros, por exemplo), o CadCraft escala a referência para combinar e informa isso no histórico.

### Quando um nome já está em uso

Se este desenho já tem um bloco com o mesmo nome, o CadCraft pergunta:

- {{ui:Keep existing}} usa o bloco deste desenho com esse nome.
- {{ui:Rename}} traz o novo como `Nome (2)`.

A inserção inteira é um único passo: {{key:Mod+Z}} remove de novo a referência e as definições copiadas.

## Abrir a biblioteca

Clique em {{ui:Library…}} no painel {{ui:Blocks}}, ou em {{ui:Library}} no grupo Blocos, ou digite `LIB`. No prompt de `INSERT`, `L` também a abre.

A biblioteca tem quatro fontes, como abas:

- {{ui:Library}}: a biblioteca do CadCraft. Pesquise por nome, fabricante ou modelo, e filtre por categoria.
- {{ui:Files…}}: um arquivo de item (`item.json`) de qualquer biblioteca, ou um desenho, planilha ou modelo 3D para criar itens: um DWG ou DXF (cada bloco vira um item), um CSV com colunas de nome e tamanho, ou um modelo glTF ou OBJ. Nada é enviado.
- {{ui:Standard}}: perfis de aço (como seções, elevações ou barras 3D) e peças padrão como parafusos, porcas e rolamentos, feitos aqui a partir de tabelas publicadas. Veja [Colocar perfis de aço e peças padrão](topic:steel-and-standard-parts).
- {{ui:Other feeds}}: outras bibliotecas que respondem do mesmo modo que a Biblioteca. Adicione o endereço delas uma vez; este navegador o lembra.

Cada cartão mostra uma visualização, o nome, o fabricante e o modelo, a licença e a versão. Um item retirado é marcado {{ui:Withdrawn}} (Retirado) com o motivo; o CadCraft pergunta antes de você colocar um.

## Colocar um item

1. Clique em {{ui:Place}} em um cartão.
2. Clique onde o item vai. Digite `R` antes para girá-lo, ou `S` para escalá-lo.
3. Em `Informe o número do item (CC-ITEM)`, pressione {{key:Enter}} para o próximo número livre, ou digite o seu.

O item vira um bloco chamado `LIB_<name>_v<version>`, desenhado nas unidades deste desenho. Se o desenho não tiver unidades, o item entra em milímetros e o histórico informa isso; defina {{ui:Units}} no painel da direita antes.

Seus dados vão junto como atributos invisíveis: o id e a versão do item, a licença e a atribuição, o fabricante, o modelo, a categoria e os tamanhos. Veja [Atributos de bloco](topic:attributes).

## Itens no seu idioma

Um item pode trazer seu nome e sua descrição em outros idiomas. Quando os tem no idioma em que o CadCraft está configurado (Configurações › Geral › Idioma), o cartão e o nome do item no bloco colocado os usam. O próprio bloco mantém um nome feito a partir do nome do item, então um desenho tem um bloco por item, qualquer que seja o idioma que o colocou.

## Verificar atualizações

1. Abra a biblioteca.
2. Clique em {{ui:Check for updates}}.

Cada item da biblioteca no desenho é listado com seus números de item e se está atualizado, tem uma versão mais nova (e o que mudou), ou foi retirado. Clique em {{ui:Update}} em uma linha, ou em {{ui:Update all}} (Atualizar tudo). Cada referência passa para o bloco da nova versão e mantém seu número de item, quantidade, lugar, ângulo e camada. {{key:Mod+Z}} desfaz uma atualização.

## Dê crédito ao que você usou

Clique em {{ui:Library credits}}. Cada item é listado com sua linha de atribuição e sua licença.

- {{ui:Copy attribution}} copia a linha de um item; {{ui:Copy all}} copia todas as linhas.
- {{ui:Download CSV}} salva a lista com os números dos itens, fabricantes, modelos, licenças e atribuições. Ela abre em qualquer planilha.

Licenças como CC BY pedem que você credite o autor onde usa a obra. Coloque as linhas no desenho, na especificação ou nas notas do projeto.

## Símbolos e ativos

A Biblioteca tem três tipos de item: Símbolos (convenções de desenho, 2D), Tipos (do que um elemento é feito) e Ativos (objetos físicos). Na aba {{ui:Library}}, a lista {{ui:Kind of item}} mostra Símbolos e ativos juntos, só Símbolos, ou só Ativos. Tipos são do que um projeto do BimCraft é feito, então o CadCraft não os lista.

## Entrar na biblioteca

Clique em {{ui:Sign in to the library}}. Abre-se uma pequena janela no site; depois que você entrar lá, o CadCraft pode mostrar os itens da sua equipe e registrar o que você coloca, para avisá-lo quando um item que você usou muda. O login vale para esta aba do navegador. Revogue-o a qualquer momento na página de segurança da sua conta.

## Manter seus próprios objetos em Meus objetos

{{ui:My objects}} é uma lista privada na Biblioteca que só você vê. Ela não está na biblioteca pública, não aparece nas pesquisas nem é mostrada à sua equipe, e acompanha sua conta em todo computador onde você entra na biblioteca.

1. No painel Biblioteca, clique em {{ui:Files…}} e leia um arquivo.
2. No item que você quer de novo, clique em {{ui:Keep in my objects}}.
3. Depois, clique em {{ui:My objects}} e em {{ui:Place}}. Ele é colocado como qualquer item da biblioteca, e {{ui:Check for updates}} o inclui.
4. {{ui:Remove from my objects}} o tira da lista. Cópias já colocadas nos desenhos permanecem.

Você precisa estar conectado à biblioteca. Ler um arquivo não envia nada; manter um item envia só esse item para a sua conta.

:::note
Meus objetos está em teste e pode ainda não estar aberto para a sua conta. Se aparecer "Meus objetos ainda não está aberto para esta conta", você ainda pode colocar itens dos seus próprios arquivos com {{ui:Files…}}.
:::

## Erros comuns

- **"Criar itens a partir de tipos IFC é do BimCraft."** Arquivos IFC e de família são lidos no aplicativo BimCraft. Crie o item lá ou na Biblioteca, depois use o `item.json` dele aqui.
- **"Não foi possível acessar a biblioteca."** Você está offline, ou a biblioteca está fora do ar. Os itens já no desenho não são afetados.
- **Um item está muito grande ou muito pequeno.** As unidades do desenho estão erradas ou não definidas. Desfaça, defina {{ui:Units}} e coloque o item de novo.
