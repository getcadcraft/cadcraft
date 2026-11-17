---
title: Abrir um DWG, editar e guardar uma cópia
summary: Abra um desenho recebido, verifique o que chegou, faça uma alteração e envie de volta uma cópia em DWG ou DXF.
keywords: dwg, dxf, abrir, importar, exportar, guardar, r12, ida e volta, consultor, xref, verificar desenho, saveas, guardar como, guardar dwg, formato
from: 49de4bf6
---

## O que vai fazer

Abrir um DWG de um consultor, verificar o que o CadCraft conseguiu ou não conseguiu mostrar, acrescentar uma nota, imprimir uma folha para PDF e guardar uma cópia para enviar de volta, em DWG ou DXF.

## Abrir o ficheiro

1. Prima {{key:Mod+O}}, ou clique em {{ui:Abrir}}.
2. Escolha o ficheiro `.dwg`.

A barra de estado mostra «A ler …» enquanto o desenho é lido. Quando termina, o desenho preenche o ecrã e o histórico indica, por exemplo, «Aberto plan.dwg: 18,240 objetos em 64 camadas», com o tempo que demorou.

:::offline
Está offline. Se o botão {{ui:Guardar para offline}} indicar «Pronto offline», os ficheiros DWG abrem normalmente. Se não, e ainda não se abriu nenhum DWG neste separador, abrir um DWG pode falhar, porque o leitor de DWG do CadCraft é transferido com o primeiro DWG: abra um DXF, ou guarde o CadCraft para uso offline da próxima vez que estiver online. Veja [Trabalhar offline](common:offline).
:::

## Verificar o que chegou

1. Veja a secção {{ui:Desenho}} do painel da esquerda: formato e versão, unidades, número de objetos e de camadas, e folhas.
2. Leia a caixa «Acerca deste ficheiro» por baixo, se existir.

A caixa indica:

- **Ainda não mostrado:** objetos que o CadCraft ainda não consegue desenhar, por tipo e quantidade. São deixados de fora, sem serem adivinhados.
- **Layouts (folhas) recebidos:** abra-os com os separadores por baixo do desenho.
- **Cotas que só puderam ser lidas tal como foram desenhadas.**

3. Clique nos separadores por baixo do desenho para ver cada folha.
4. Verifique {{ui:Unidades}} em {{ui:Definições atuais}} (nada selecionado, separador {{ui:Modelo}}). Se disser {{ui:Sem unidades}} mas sabe que o desenho está em milímetros, defina-o, para que as escalas das folhas e das impressões sejam lidas corretamente.

:::tip
Se esperava uma parte do desenho e não a consegue ver, verifique o painel {{ui:Camadas}}: a camada pode estar desligada ou congelada no ficheiro. Clique no nome dela para a tornar atual; isso liga-a.
:::

## Fazer a alteração

1. Crie uma camada para as notas: clique em {{ui:Nova camada}}, escreva `NOTES` e prima {{key:Enter}}.
2. Escreva `DT` e prima {{key:Enter}}.
3. Clique onde fica a nota.
4. Escreva uma altura de texto adequada ao desenho (veja [Acrescentar texto e etiquetas](topic:text)) e prima {{key:Enter}}.
5. Prima {{key:Enter}} para manter a rotação em 0.
6. Escreva a nota e prima {{key:Enter}}.
7. Prima {{key:Enter}} novamente para terminar.

As alterações a cotas importadas são permitidas: assim que uma seja alterada, o CadCraft redesenha-a no seu próprio estilo.

## Imprimir uma folha para revisão

1. Clique no separador da folha.
2. Prima {{key:Mod+P}}.
3. Clique em {{ui:Transferir PDF}}.

Veja [Imprimir para PDF](topic:plot-pdf).

## Guardar uma cópia

1. Prima {{key:Mod+S}}, ou clique em {{ui:Guardar}}.

Como abriu um DWG, o navegador transfere `<name>.dwg`, na versão em que o DWG chegou. O histórico indica, por exemplo, «Cópia guardada como Plan.dwg (DWG (AutoCAD 2018)).» e lista, nas linhas por baixo, tudo o que foi alterado pelo caminho.

2. Leia essas linhas antes de enviar o ficheiro. [O que um DWG mantém e altera](topic:files#what-a-dwg-keeps-and-changes) explica cada uma delas.

O DWG original nunca é alterado. Cada gravação é uma nova transferência.

## Guardar como DWG ou DXF

Para escolher o formato:

1. Prima {{key:Mod+Shift+S}}, ou clique em {{ui:Guardar como}}.

O diálogo {{ui:Guardar uma cópia como}} abre com quatro opções, cada uma com o nome de ficheiro que lhe vai dar: {{ui:DWG}}, com a sua lista {{ui:Versão}}, {{ui:DXF R12}}, {{ui:DXF 2000}} e {{ui:DXF 2000 (binary)}}. O formato e a versão atuais do desenho já vêm selecionados.

2. Clique no formato que pretende. Para DWG, escolha a versão que o outro gabinete usa, ou uma mais antiga: AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000.
3. Clique em {{ui:Guardar}}.

A cópia é transferida. A partir de agora, {{key:Mod+S}} guarda este desenho nesse formato, e os novos desenhos também começam com ele, neste navegador. {{ui:Cancelar}} ou {{key:Esc}} não guarda nada, e o histórico indica «Não guardado.»

Qual escolher:

- **DWG** mantém o máximo: folhas com as suas viewports, cotas reais, padrões de tramas, nomes de camadas e de blocos tal como os escreveu, e texto de várias linhas como texto de várias linhas. A versão AutoCAD 2000 abre na maioria dos programas; a 2004 e posteriores também mantêm cores reais.
- **DXF 2000** é um ficheiro de texto que mantém quase tudo o que um DWG mantém: cada folha como layout com as suas viewports, cotas reais, padrões de tramas, cores reais, espessuras de linha, tipos de linha e nomes tal como os escreveu. Abre no AutoCAD 2000 e posteriores e na maioria dos programas CAD. As multichamadas tornam-se as linhas, as setas e o texto que desenham. Um DXF aberto na versão 2000 ou posterior é guardado como DXF 2000.
- **DXF 2000 (binary)** tem o mesmo conteúdo do DXF 2000, na forma binária do formato: um ficheiro mais pequeno que mantém cada número exatamente. Os ficheiros DXF binários de outros programas abrem como os de texto, e um desenho aberto a partir de um DXF binário é guardado de volta como binário.
- **DXF R12** abre em quase qualquer programa CAD. Mantém a primeira folha com as suas viewports, e as outras folhas do CadCraft. Simplifica coisas mais recentes, como o texto de várias linhas e as tramas.

## O que o outro escritório vai ver

Num DWG:

- Linhas, arcos, círculos, elipses, polilinhas, texto, texto de várias linhas, blocos com os seus atributos, preenchimentos sólidos, padrões de tramas e camadas tal como os vê.
- Cotas reais: o outro programa volta a medi-las quando são esticadas.
- Todas as folhas, com o seu papel e as suas viewports.
- Multichamadas como multichamadas. Na versão AutoCAD 2000, as cores reais passam para a cor padrão mais próxima.

Num DXF R12:

- Linhas, arcos, círculos, polilinhas, texto, referências de blocos e cotas tal como os vê. As cotas continuam a ser cotas reais.
- Nomes de camadas em maiúsculas, com os espaços trocados por `_`.
- A primeira folha como espaço de papel do desenho, com as suas viewports. As folhas seguintes chegam como blocos com o nome `CCLAYOUT_1` e assim por diante; se precisarem de todas as folhas como layouts, imprima também um PDF de cada folha para eles.
- Texto de várias linhas como linhas separadas, elipses como polilinhas, tramas como contornos.

De qualquer forma, o que estiver indicado como «Ainda não mostrado» ao abrir o DWG **não** está na cópia, a menos que o histórico diga que foi mantido: os objetos OLE de um DWG e os seus sólidos 3D no espaço modelo são escritos de volta quando guarda como DWG. Informe o destinatário e envie também um PDF.

## Erros comuns

- **«O CadCraft abre desenhos DWG e DXF.»** O ficheiro tem outra extensão. Verifique se é `.dwg` ou `.dxf`.
- **«Este desenho não pôde ser lido.»** O DWG está danificado ou numa versão que o leitor não trata. Peça um DXF, ou o DWG guardado numa versão mais antiga.
- **«Este DXF binário termina a meio de um objeto.»** O ficheiro está cortado ou danificado. Escreva RECOVER para abrir o que for possível ler, ou peça o ficheiro de novo.
- **O ficheiro guardado chama-se `name (1).dwg` ou `name (1).dxf`.** O navegador faz isso quando já existe um ficheiro com o mesmo nome na pasta.
- **Um programa mais antigo não consegue abrir o DWG.** Guarde como DWG com {{ui:Versão}} {{ui:AutoCAD 2000}}, ou como {{ui:DXF R12}}: quase qualquer programa CAD o abre.
- **Faltam partes do desenho.** Os desenhos referenciados (xrefs) não são carregados até escolher os seus ficheiros ({{cmd:XREF}}, `R`), e as imagens aparecem como molduras com os nomes dos ficheiros.
