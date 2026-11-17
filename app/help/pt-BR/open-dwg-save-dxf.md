---
title: Abrir um DWG, editar e salvar uma cópia
summary: Abra um desenho que alguém enviou para você, veja o que chegou, faça uma alteração e envie de volta uma cópia como DWG ou DXF.
keywords: dwg, dxf, abrir, importar, exportar, salvar, r12, ida e volta, consultor, xref, verificar desenho, saveas, salvar como, salvar DWG, formato
from: 49de4bf6
---

## O que você vai fazer

Abrir um DWG de um consultor, verificar o que o CadCraft conseguiu ou não mostrar, adicionar uma nota, plotar uma folha em PDF e salvar uma cópia para enviar de volta, como DWG ou DXF.

## Abrir o arquivo

1. Pressione {{key:Mod+O}}, ou clique em {{ui:Abrir}}.
2. Escolha o arquivo `.dwg`.

A linha de status mostra "Lendo …" enquanto o desenho é lido. Quando termina, o desenho preenche a tela, e o histórico diz, por exemplo, "plan.dwg aberto: 18,240 objetos em 64 camadas", com o tempo que levou.

:::offline
Você está offline. Se o botão {{ui:Salvar para uso offline}} disser "Pronto para uso offline", arquivos DWG abrem normalmente. Se não, e nenhum DWG foi aberto nesta aba ainda, abrir um DWG pode falhar, porque o leitor de DWG do CadCraft é baixado com o primeiro DWG: abra um DXF, ou salve o CadCraft para uso offline na próxima vez que estiver online. Veja [Trabalhar offline](common:offline).
:::

## Verifique o que chegou

1. Olhe a seção {{ui:Desenho}} do painel esquerdo: formato e versão, unidades, número de objetos e camadas, e folhas.
2. Leia a caixa "Sobre este arquivo" abaixo dela, se houver.

A caixa lista:

- **Ainda não exibido:** objetos que o CadCraft ainda não consegue desenhar, por tipo e quantidade. Eles ficam de fora, sem suposições.
- **Layouts (folhas) carregados:** abra-os pelas guias sob o desenho.
- **Cotas que só puderam ser lidas como desenhadas.**

3. Clique nas guias sob o desenho para ver cada folha.
4. Verifique {{ui:Unidades}} em {{ui:Configurações atuais}} (nada selecionado, guia {{ui:Modelo}}). Se aparecer {{ui:Sem unidade}}, mas você sabe que o desenho está em milímetros, defina-a, para que as escalas da folha e da plotagem saiam corretas.

:::tip
Se você esperava uma parte do desenho e não a vê, verifique o painel {{ui:Camadas}}: a camada pode estar desligada ou congelada no arquivo. Clique no nome dela para torná-la atual; isso a liga.
:::

## Faça sua alteração

1. Crie uma camada para suas notas: clique em {{ui:Nova camada}}, digite `NOTES` e pressione {{key:Enter}}.
2. Digite `DT` e pressione {{key:Enter}}.
3. Clique onde a nota vai ficar.
4. Digite uma altura de texto adequada ao desenho (veja [Adicionar texto e rótulos](topic:text)) e pressione {{key:Enter}}.
5. Pressione {{key:Enter}} para manter a rotação em 0.
6. Digite sua nota e pressione {{key:Enter}}.
7. Pressione {{key:Enter}} de novo para concluir.

Editar cotas importadas é normal: assim que você altera uma, o CadCraft a redesenha com o próprio estilo.

## Plote uma folha para revisão

1. Clique na guia da folha.
2. Pressione {{key:Mod+P}}.
3. Clique em {{ui:Baixar PDF}}.

Veja [Plotar em PDF](topic:plot-pdf).

## Salve uma cópia

1. Pressione {{key:Mod+S}}, ou clique em {{ui:Salvar}}.

Você abriu um DWG, então o navegador baixa `<name>.dwg`, na versão em que o DWG chegou. O histórico diz, por exemplo, "Cópia salva como Plan.dwg (DWG (AutoCAD 2018))." e lista, nas linhas abaixo, tudo o que foi alterado no caminho.

2. Leia essas linhas antes de enviar o arquivo. [O que um DWG mantém e altera](topic:files#what-a-dwg-keeps-and-changes) explica cada uma.

O DWG original nunca é alterado. Cada salvamento é um novo download.

## Salve como DWG ou DXF

Para escolher o formato você mesmo:

1. Pressione {{key:Mod+Shift+S}}, ou clique em {{ui:Salvar como}}.

A caixa {{ui:Salvar uma cópia como}} abre com quatro opções, cada uma com o nome de arquivo que vai gerar: {{ui:DWG}}, com sua lista {{ui:Versão}}, {{ui:DXF R12}}, {{ui:DXF 2000}} e {{ui:DXF 2000 (binary)}}. O formato e a versão atuais do desenho já vêm selecionados.

2. Clique no formato desejado. Para DWG, escolha a versão que o outro escritório usa, ou uma mais antiga: AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000.
3. Clique em {{ui:Salvar}}.

A cópia é baixada. A partir de agora, {{key:Mod+S}} salva este desenho nesse formato, e os novos desenhos também começam com ele, neste navegador. {{ui:Cancelar}} ou {{key:Esc}} não salva nada, e o histórico diz "Nada salvo."

Qual escolher:

- **DWG** mantém o máximo: folhas com suas viewports, cotas reais, padrões de hachura, nomes de camadas e blocos como você os digitou, e texto de múltiplas linhas como texto de múltiplas linhas. A versão AutoCAD 2000 abre na maioria dos programas; 2004 e versões posteriores também mantêm cores verdadeiras.
- **DXF 2000** é um arquivo de texto que mantém quase tudo o que um DWG mantém: cada folha como um layout com suas viewports, cotas reais, padrões de hachura, cores verdadeiras, espessuras de linha, tipos de linha e nomes como você os digitou. Abre no AutoCAD 2000 e posteriores e na maioria dos programas CAD. Multichamadas viram as linhas, setas e textos que desenham. Um DXF aberto na versão 2000 ou posterior é salvo como DXF 2000.
- **DXF 2000 (binary)** tem o mesmo conteúdo do DXF 2000 na forma binária do formato: um arquivo menor que mantém cada número exatamente. Arquivos DXF binários de outros programas abrem como os de texto, e um desenho aberto de um DXF binário é salvo de volta como binário.
- **DXF R12** abre em quase qualquer programa CAD. Mantém a primeira folha com suas viewports e as outras folhas do CadCraft. Simplifica coisas mais novas, como texto de múltiplas linhas e hachuras.

## O que o outro escritório verá

Em um DWG:

- Linhas, arcos, círculos, elipses, polilinhas, textos, texto de múltiplas linhas, blocos com seus atributos, preenchimentos sólidos, padrões de hachura e camadas como você os vê.
- Cotas reais: o outro programa as recalcula quando são esticadas.
- Todas as folhas, com seu papel e suas viewports.
- Multichamadas como multichamadas. Na versão AutoCAD 2000, as cores verdadeiras viram a cor padrão mais próxima.

Em um DXF R12:

- Linhas, arcos, círculos, polilinhas, textos, referências de bloco e cotas como você as vê. As cotas continuam sendo cotas reais.
- Nomes de camadas em maiúsculas, com espaços trocados por `_`.
- A primeira folha como o espaço papel do desenho, com suas viewports. As folhas seguintes chegam como blocos chamados `CCLAYOUT_1` e assim por diante; se precisarem de cada folha como layout, plote também PDFs de cada folha para eles.
- Texto de múltiplas linhas como linhas separadas, elipses como polilinhas, hachuras como contornos.

De qualquer forma, o que aparecer como "Ainda não exibido" ao abrir o DWG **não** está na cópia, a menos que o histórico diga que foi mantido: os objetos OLE de um DWG e seus sólidos 3D no espaço modelo são gravados de volta quando você salva como DWG. Avise o outro escritório e envie também um PDF.

## Erros comuns

- **"O CadCraft abre desenhos DWG e DXF."** O arquivo tem outra extensão. Verifique se é `.dwg` ou `.dxf`.
- **"Não foi possível ler este desenho."** O DWG está danificado ou em uma versão que o leitor não trata. Peça um DXF, ou o DWG salvo em uma versão mais antiga.
- **"Este DXF binário termina no meio de um objeto."** O arquivo está incompleto ou danificado. Digite RECOVER para abrir o que puder ser lido, ou peça o arquivo novamente.
- **O arquivo salvo se chama `name (1).dwg` ou `name (1).dxf`.** O navegador faz isso quando já existe um arquivo com o mesmo nome na pasta.
- **O outro escritório tem um programa mais antigo que não abre o DWG.** Salve como DWG com {{ui:Versão}} {{ui:AutoCAD 2000}}, ou como {{ui:DXF R12}}: quase qualquer programa CAD o abre.
- **Partes do desenho estão faltando.** Os desenhos vinculados (xrefs) não são carregados até você escolher os arquivos ({{cmd:XREF}}, `R`), e as imagens aparecem como molduras com os nomes dos arquivos.
