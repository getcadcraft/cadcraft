---
title: Conjuntos de folhas
summary: Reunir folhas de muitos desenhos em uma só lista numerada, preencher as legendas a partir do conjunto, publicá-las em um único PDF e arquivar o conjunto em um zip.
keywords: conjunto de folhas, gerenciador de conjunto de folhas, ssm, sheetset, ccsheets, dst, lista de folhas, índice de folhas, legenda, campos, publicar, renumerar, arquivar, etransmit, transmittal, subconjuntos, folha de capa, lista de desenhos
from: 2c855720
---

## O que você vai aprender

Como reunir folhas (layouts) de vários arquivos de desenho em um **conjunto de folhas**, numerá-las e dar-lhes títulos, fazer com que as legendas sejam preenchidas para você, publicar o conjunto inteiro como um só PDF e empacotar tudo em um zip para enviar.

Um conjunto de folhas fica em um pequeno arquivo próprio, `<nome>.ccsheets`, na pasta que contém os desenhos. O arquivo do conjunto lista as folhas com caminhos a partir dessa pasta, de modo que você pode mover ou copiar a pasta inteira.

:::note
Para abrir uma pasta para ler e gravar, é preciso usar o Chrome ou o Edge (eles podem permitir que uma página trabalhe em uma pasta que você escolher), ou o aplicativo para desktop. Outros navegadores abrem um conjunto somente para leitura: você pode consultá-lo e publicá-lo, e o arquivo do conjunto é baixado em vez de salvo.
:::

## Iniciar um conjunto

1. Encontre a seção {{ui:Conjunto de folhas}} no painel esquerdo e abra o seu menu {{ui:Conjunto}}. Digitar {{cmd:SHEETSET}} (ou `SSM`) também leva você até lá.
2. Escolha {{ui:Novo conjunto…}}. Dê um nome ao conjunto e, se quiser, o nome e o número do projeto.
3. Escolha a pasta que contém os desenhos. O arquivo do conjunto é salvo ali.

Para abrir um conjunto depois, escolha {{ui:Abrir conjunto…}} e selecione a mesma pasta. Se a pasta tiver mais de um conjunto, o CadCraft pergunta qual deles.

## Adicionar folhas

1. Escolha {{ui:Adicionar folhas de um desenho…}} e selecione um dos desenhos da pasta.
2. O CadCraft lê esse desenho em segundo plano (ele não é aberto na tela) e lista as suas folhas. Marque as que quiser e clique em {{ui:OK}}.
3. Selecione uma folha e pressione {{key:F2}} (ou {{ui:Renomear e renumerar…}}) para dar a ela um número e um título, como `A-101` e `Planta baixa`.

{{ui:Nova folha a partir de um modelo…}} cria um novo desenho a partir da folha de outro desenho (a sua legenda e os seus viewports), com o nome da nova folha, e o adiciona. O conjunto lembra qual desenho você usou como modelo.

## Organizar o conjunto

- **Subconjuntos** agrupam folhas, como Arquitetura › Plantas: selecione o local onde ele deve ficar e escolha {{ui:Novo subconjunto…}}.
- **Ordem**: arraste uma folha para outro lugar da lista, ou sobre um subconjunto para movê-la ali. Pelo teclado, selecione-a e pressione {{key:Alt+Up}} ou {{key:Alt+Down}}.
- **Abrir uma folha**: clique duas vezes nela (ou pressione {{key:Enter}}). O desenho dela abre na própria guia, sobre aquela folha.
- **Remover**: selecione-a e pressione {{key:Delete}}. O próprio desenho não é alterado.
- **Desfazer**: {{ui:Desfazer alteração do conjunto}} e {{ui:Refazer alteração do conjunto}} percorrem o que você mudou no conjunto.
- **Renumerar**: {{ui:Renumerar folhas…}} numera todas as folhas, ou as de um subconjunto, na ordem da lista: um prefixo, um início e um passo (`A-` e `101` resultam em A-101, A-102 …).

Cada alteração é salva imediatamente no arquivo do conjunto.

## Numerar folhas a partir dos seus campos

Em vez de numerar as folhas à mão, deixe uma regra montar cada número a partir dos campos da folha, de modo que uma folha que passe para outro pavimento ou disciplina receba o novo número automaticamente.

1. Dê a cada folha os seus campos: selecione-a, clique em {{ui:Renomear…}} e, em {{ui:Campos desta folha}}, escreva um por linha, por exemplo `DISCIPLINA = A` e `PAVIMENTO = 1`. Um campo que o conjunto inteiro compartilha (por exemplo `DISCIPLINA = A`) pode ir nas {{ui:Propriedades…}} do conjunto.
2. Abra o menu do painel e clique em {{ui:Regra de numeração…}}.
3. Escreva a regra, por exemplo `{DISCIPLINA}-{PAVIMENTO}{SEQ:2}`. `{SEQ}` conta de forma crescente entre as folhas cujos outros campos têm o mesmo valor, de modo que o pavimento 1 recebe A-101, A-102, e o pavimento 2 começa de novo em A-201. `{SEQ:2}` o escreve com dois dígitos; `{SUBSET}` é o nome do subconjunto em que a folha está.
4. Escolha o que acontece quando um campo muda: {{ui:Renumerar as folhas}} mantém os números seguindo a regra após cada alteração; a outra opção os numera uma vez, agora.

A regra é salva no arquivo do conjunto. Enquanto ela renumera sozinha, altere os campos de uma folha, e não o seu número.

## Preencher legendas a partir do conjunto

Uma legenda recebe o seu texto do conjunto quando os seus atributos têm a marcação com o nome de um campo:

| Marcação | O que mostra |
|---|---|
| `SHEETNUMBER` (ou `SHEET_NO`, `DWG_NO`) | O número da folha |
| `SHEETTITLE` (ou `TITLE`, `SHEET_TITLE`) | O título da folha |
| `SHEETDESC` | A descrição da folha |
| `PROJECTNAME` (ou `PROJECT`) | O nome do projeto |
| `PROJECTNUMBER` (ou `PROJECT_NO`, `JOB_NO`) | O número do projeto |
| `SHEETSETNAME` | O nome do conjunto |
| `SHEETINDEX`, `SHEETCOUNT` | "3 de 12", e 12 |
| Os seus próprios, como `CLIENT` | O que você escreveu para ele em {{ui:Definir campos…}} |

{{ui:Definir campos…}} guarda o nome e o número do projeto e os seus próprios campos, um por linha, no formato `NOME = valor`.

{{ui:Atualizar desenhos}} grava os números, títulos e campos nas legendas de todos os desenhos do conjunto, e renomeia a guia do layout de cada folha como o conjunto determina (por padrão, número e título, como `A-101 Planta baixa`; {{ui:Definir campos…}} › {{ui:Nomes das guias de layout}} altera isso). Cada desenho é salvo no próprio lugar, no seu formato e versão. Depois de renumerar ou renomear folhas, execute-o de novo, e as guias e as legendas acompanharão.

## Uma lista de folhas na folha de capa

Selecione a folha de capa na lista e escolha {{ui:Colocar a lista de folhas nesta folha}}. Uma tabela com todas as folhas (número e título, sob o seu subconjunto) é colocada no canto superior esquerdo da folha. {{ui:Atualizar desenhos}} e {{ui:Publicar em PDF}} a mantêm atualizada. É um único bloco, `CC_SHEETLIST`: mova-o como qualquer referência de bloco.

## Publicar o conjunto

{{ui:Publicar em PDF}} gera um PDF com uma página por folha, na ordem do conjunto, em cada tamanho de papel da própria folha, com um marcador por folha ("A-101 — Planta baixa"). Com um subconjunto selecionado, o CadCraft pergunta se deve publicar somente esse subconjunto. As legendas no PDF são preenchidas a partir do conjunto mesmo antes de você atualizar os desenhos; publicar não altera os próprios desenhos. O PDF é baixado.

{{ui:Publicar em DWG…}} grava cada folha como um DWG próprio (DWG 2018): o modelo e aquela única folha, com a sua legenda preenchida a partir do conjunto, nomeado pelo número e pelo título (`A-101 Planta baixa do pavimento 1.dwg`). Escolha {{ui:DWG}}, ou {{ui:DWG + PDF}} para ter também o PDF do conjunto ao lado deles. Um `publish.json` lista cada arquivo com o seu tamanho e o seu SHA-256. Quando a pasta do conjunto pode ser gravada (CadCraft Studio, ou uma pasta que você escolheu no navegador), os arquivos vão para uma pasta `<nome do conjunto> - published`; caso contrário, são baixados como um zip. As [substituições de classe](topic:viewport-overrides) dos viewports são levadas em cada DWG.

## Arquivar o conjunto

{{ui:Arquivar em um zip}} empacota o arquivo do conjunto, cada desenho que ele usa e o que esses desenhos vinculam (desenhos vinculados, e os vinculados por eles, e imagens), mantendo as suas pastas, além de um `Transmittal.txt` que lista cada arquivo. Um vínculo que não está na pasta do conjunto aparece ali como ausente. Os vínculos são encontrados pelo caminho a partir do desenho e, depois, pelo nome do arquivo em qualquer lugar da pasta.

## O arquivo do conjunto

O arquivo `.ccsheets` é um JSON que você pode ler em qualquer editor de texto:

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

Os caminhos são relativos à pasta do conjunto, com `/` entre as pastas. O CadCraft verifica o arquivo ao abri-lo: um caminho absoluto, uma folha sem arquivo ou sem layout, ou um texto que não seja puro é deixado de fora, e o histórico informa isso.

## Solução de problemas

| O que você vê | Por quê | O que fazer |
|---|---|---|
| "Esta pasta é somente leitura aqui" | O navegador não consegue gravar na pasta | Use o Chrome ou o Edge, ou o aplicativo para desktop; enquanto isso, {{ui:Baixar o arquivo do conjunto}} mantém as suas alterações |
| Uma folha fica de fora do PDF: "não tem um layout chamado …" | O layout da folha foi renomeado ou removido no desenho | Abra o desenho e verifique as suas guias; remova a folha e adicione-a de novo |
| Uma legenda continua vazia | Os seus atributos têm outras marcações | Renomeie as marcações dos atributos para os nomes de campo acima (BEDIT) |
| "já tem um layout chamado … então a guia não foi renomeada" | Duas folhas de um mesmo desenho receberiam o mesmo nome de guia | Dê a uma delas outro número ou título |
