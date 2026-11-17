---
title: Conjuntos de folhas
summary: Reunir folhas de muitos desenhos numa só lista numerada, preencher as suas legendas a partir do conjunto, publicá-las como um só PDF e arquivar o conjunto como zip.
keywords: conjunto de folhas, gestor de conjuntos de folhas, ssm, sheetset, ccsheets, dst, lista de folhas, índice de folhas, legenda, campos, publicar, renumerar, arquivar, etransmit, transmissão, subconjuntos, folha de capa, lista de desenhos
from: 2c855720
---

## O que vai aprender

Como reunir folhas (layouts) de vários ficheiros de desenho num **conjunto de folhas**, numerá-las e dar-lhes título, fazer com que as suas legendas sejam preenchidas por si, publicar o conjunto inteiro como um só PDF e empacotar tudo num só zip para enviar.

Um conjunto de folhas vive num pequeno ficheiro próprio, `<nome>.ccsheets`, na pasta que contém os desenhos. O ficheiro do conjunto lista as folhas com caminhos a partir dessa pasta, por isso pode mover ou copiar a pasta inteira.

:::note
Abrir uma pasta para ler e escrever exige o Chrome ou o Edge (podem deixar uma página trabalhar numa pasta que escolha), ou a aplicação de ambiente de trabalho. Outros navegadores abrem um conjunto só de leitura: pode consultá-lo e publicá-lo, e o ficheiro do conjunto é transferido em vez de guardado.
:::

## Começar um conjunto

1. Encontre a secção {{ui:Conjunto de folhas}} no painel da esquerda, e abra o seu menu {{ui:Conjunto}}. Escrever {{cmd:SHEETSET}} (ou `SSM`) também o leva até lá.
2. Escolha {{ui:Novo conjunto…}}. Dê um nome ao conjunto e, se quiser, o nome e o número do projeto.
3. Escolha a pasta que contém os desenhos. O ficheiro do conjunto é guardado lá.

Para abrir um conjunto mais tarde, escolha {{ui:Abrir conjunto…}} e escolha a mesma pasta. Se a pasta tiver mais de um conjunto, o CadCraft pergunta qual.

## Acrescentar folhas

1. Escolha {{ui:Adicionar folhas de um desenho…}} e escolha um dos desenhos da pasta.
2. O CadCraft lê esse desenho em segundo plano (não abre no ecrã) e lista as suas folhas. Marque as que quer e clique em {{ui:OK}}.
3. Selecione uma folha e prima {{key:F2}} (ou {{ui:Mudar o nome e renumerar…}}) para lhe dar um número e um título, como `A-101` e `Planta do piso 1`.

{{ui:Nova folha a partir de um modelo…}} cria um novo desenho a partir da folha de outro desenho (a sua legenda e as suas viewports), com o nome da nova folha, e acrescenta-o. O conjunto lembra-se do desenho que usou como modelo.

## Organizar o conjunto

- **Subconjuntos** agrupam folhas, como Arquitetura › Plantas: selecione onde deve ir e escolha {{ui:Novo subconjunto…}}.
- **Ordem**: arraste uma folha para outro lugar na lista, ou para um subconjunto para a mover para lá. Com o teclado, selecione-a e prima {{key:Alt+Up}} ou {{key:Alt+Down}}.
- **Abrir uma folha**: faça duplo clique nela (ou prima {{key:Enter}}). O seu desenho abre no próprio separador, nessa folha.
- **Remover**: selecione-a e prima {{key:Delete}}. O próprio desenho não é alterado.
- **Anular**: {{ui:Anular alteração do conjunto}} e {{ui:Refazer alteração do conjunto}} percorrem o que alterou no conjunto.
- **Renumerar**: {{ui:Renumerar folhas…}} numera cada folha, ou as de um subconjunto, pela ordem da lista: um prefixo, um início e um passo (`A-` e `101` dão A-101, A-102 …).

Cada alteração fica guardada no ficheiro do conjunto de imediato.

## Numerar folhas a partir dos seus campos

Em vez de numerar as folhas à mão, deixe uma regra construir cada número a partir dos campos da folha, para que uma folha que passe para outro piso ou especialidade receba o seu novo número sozinha.

1. Dê a cada folha os seus campos: selecione-a, clique em {{ui:Mudar o nome…}} e, em {{ui:Campos desta folha}}, escreva um por linha, por exemplo `DISCIPLINE = A` e `LEVEL = 1`. Um campo que o conjunto inteiro partilha (por exemplo `DISCIPLINE = A`) pode ir nas {{ui:Propriedades…}} do conjunto.
2. Abra o menu do painel e clique em {{ui:Regra de numeração…}}.
3. Escreva a regra, por exemplo `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` conta sequencialmente entre as folhas cujos outros campos têm o mesmo valor, por isso o piso 1 recebe A-101, A-102, e o piso 2 recomeça em A-201. `{SEQ:2}` escreve-o com dois dígitos; `{SUBSET}` é o nome do subconjunto em que a folha está.
4. Escolha o que acontece quando um campo muda: {{ui:Renumerar as folhas}} mantém os números a seguir a regra depois de cada alteração; a outra escolha numera-as uma só vez, neste momento.

A regra fica guardada no ficheiro do conjunto. Enquanto renumera sozinho, altere os campos de uma folha em vez do seu número.

## Preencher legendas a partir do conjunto

Uma legenda recebe o seu texto do conjunto quando os seus atributos estão marcados com o nome de um campo:

| Etiqueta | O que mostra |
|---|---|
| `SHEETNUMBER` (ou `SHEET_NO`, `DWG_NO`) | O número da folha |
| `SHEETTITLE` (ou `TITLE`, `SHEET_TITLE`) | O título da folha |
| `SHEETDESC` | A descrição da folha |
| `PROJECTNAME` (ou `PROJECT`) | O nome do projeto |
| `PROJECTNUMBER` (ou `PROJECT_NO`, `JOB_NO`) | O número do projeto |
| `SHEETSETNAME` | O nome do conjunto |
| `SHEETINDEX`, `SHEETCOUNT` | "3 de 12", e 12 |
| O seu próprio, como `CLIENT` | O que escreveu para ele em {{ui:Campos do conjunto…}} |

{{ui:Campos do conjunto…}} contém o nome e o número do projeto e os seus próprios campos, um por linha, como `NOME = valor`.

{{ui:Atualizar desenhos}} escreve os números, títulos e campos nas legendas de todos os desenhos do conjunto, e renomeia o separador de layout de cada folha como o conjunto diz (por predefinição, número e título, como `A-101 Planta do piso 1`; {{ui:Campos do conjunto…}} › {{ui:Nomes dos separadores de layout}} altera isso). Cada desenho é guardado no seu lugar, no seu formato e versão. Depois de renumerar ou renomear folhas, execute-o de novo e os separadores e as legendas acompanham.

## Uma lista de folhas na folha de capa

Selecione a folha de capa na lista e escolha {{ui:Colocar a lista de folhas nesta folha}}. Uma tabela de todas as folhas (número e título, sob o seu subconjunto) é colocada no canto superior esquerdo da folha. {{ui:Atualizar desenhos}} e {{ui:Publicar em PDF}} mantêm-na atualizada. É um só bloco, `CC_SHEETLIST`: mova-o como qualquer referência de bloco.

## Publicar o conjunto

{{ui:Publicar em PDF}} cria um PDF com uma página por folha, pela ordem do conjunto, no tamanho de papel de cada folha, com um marcador por folha ("A-101 — Planta do piso 1"). Com um subconjunto selecionado, o CadCraft pergunta se deve publicar só esse subconjunto. As legendas no PDF são preenchidas a partir do conjunto mesmo antes de atualizar os desenhos; os próprios desenhos não são alterados ao publicar. O PDF é transferido.

{{ui:Publicar em DWG…}} escreve cada folha como um DWG próprio (DWG 2018): o modelo e essa folha, com a sua legenda preenchida a partir do conjunto, com o nome do seu número e título (`A-101 Planta do piso 1.dwg`). Escolha {{ui:DWG}}, ou {{ui:DWG + PDF}} para ter o PDF do conjunto ao lado deles. Um `publish.json` lista cada ficheiro com o seu tamanho e SHA-256. Quando a pasta do conjunto pode ser escrita (CadCraft Studio, ou uma pasta que escolheu no navegador), os ficheiros vão para uma pasta `<nome do conjunto> - published`; caso contrário são transferidos num só zip. As [substituições de classe de viewport](topic:viewport-overrides) seguem em cada DWG.

## Arquivar o conjunto

{{ui:Arquivar como zip}} empacota o ficheiro do conjunto, cada desenho que ele usa e o que esses desenhos ligam (desenhos referenciados e os que estes, por sua vez, referenciam, e imagens), mantendo as suas pastas, e um `Transmittal.txt` que lista cada ficheiro. Uma ligação que não está na pasta do conjunto é listada lá como em falta. As ligações são encontradas pelo seu caminho a partir do desenho e, depois, pelo nome do ficheiro em qualquer parte da pasta.

## O ficheiro do conjunto

O ficheiro `.ccsheets` é JSON que pode ler em qualquer editor de texto:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Os caminhos são relativos à pasta do conjunto, com `/` entre pastas. O CadCraft verifica o ficheiro ao abri-lo: um caminho absoluto, uma folha sem ficheiro ou sem layout, ou texto que não seja simples é deixado de fora, e o histórico diz isso.

## Resolução de problemas

| O que vê | Porquê | O que fazer |
|---|---|---|
| "Esta pasta está só de leitura aqui" | O navegador não consegue escrever numa pasta | Use o Chrome ou o Edge, ou a aplicação de ambiente de trabalho; entretanto, {{ui:Transferir o ficheiro do conjunto}} mantém as suas alterações |
| Uma folha fica de fora do PDF: "has no layout named …" | O layout da folha foi renomeado ou removido no seu desenho | Abra o desenho e verifique os seus separadores; remova a folha e volte a adicioná-la |
| Uma legenda fica vazia | Os seus atributos têm outras etiquetas | Mude o nome das etiquetas dos atributos para os nomes de campo acima (BEDIT) |
| "already has a layout named … so that tab was not renamed" | Duas folhas de um mesmo desenho ficariam com o mesmo nome de separador | Dê a uma delas outro número ou título |
