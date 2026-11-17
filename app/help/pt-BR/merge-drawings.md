---
title: Mesclar as edições de duas pessoas em um desenho
summary: Deixe o git, o Fossil ou o Mercurial mesclarem duas cópias de um DWG ou DXF objeto por objeto, usando a chave que o CadCraft mantém em cada objeto.
keywords: mesclar, git, fossil, mercurial, controle de versão, diff, conflito, três vias, mesclagem cadcraft, chave, gitattributes, DWG, DXF
from: 71482bf9
---

Duas pessoas editam o mesmo desenho. Se elas alteraram objetos diferentes, a mesclagem pode ser automática: nada precisa ser refeito à mão.

## O que faz funcionar

O CadCraft dá a cada objeto que você desenha uma **chave** curta que nunca muda e nunca é atribuída a dois objetos. Ela é salva com o objeto no DWG ou DXF (como dados extras que outros programas mantêm). A mesclagem procura os objetos por essa chave, não pela posição deles no arquivo, porque todo programa renumera as posições ao salvar. Desative isso em {{ui:Configurações}} › CadCraft › Arquivos compatíveis com mesclagem se você nunca mescla; os arquivos ficam cerca de 10 por cento menores.

Um desenho salvo antes de existirem as chaves ainda pode ser mesclado: seus objetos recebem uma chave a partir da posição deles no arquivo, a mesma para todos que o abrem.

## Configurar

O git precisa de duas linhas uma vez por repositório:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# uma vez, em cada computador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sem o git, execute-o manualmente: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil e Mercurial recebem os mesmos três arquivos na configuração de ferramenta de mesclagem deles.

## As regras

- Um objeto alterado de só um lado é aceito. A mesma alteração nos dois lados é aceita uma vez.
- A mesma propriedade alterada de duas formas é um **conflito**: a sua versão permanece e o relatório lista os dois valores. Abra o resultado, veja esse objeto e corrija-o à mão.
- Um objeto adicionado de qualquer lado é mantido. Um objeto removido de um lado e intocado do outro é removido. Removido de um lado e alterado do outro: é removido e informado.
- Camadas, blocos, estilos de texto e de cota, folhas e vistas nomeadas são mesclados do mesmo modo. As restrições seguem os objetos que elas nomeiam.
- O resultado é gravado no mesmo formato e versão de arquivo que o seu.

Não mesclado: a ordem em que os objetos são desenhados é a sua, e depois os objetos que o outro lado adicionou. Alterações na mesma definição de bloco dos dois lados são um conflito, nunca misturadas. Nada é enviado; tudo é executado no seu computador.
