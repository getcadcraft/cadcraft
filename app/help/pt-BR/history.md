---
title: Histórico: versões e o que mudou
summary: Veja as versões de um desenho (cópias que o Studio guarda ao salvar, e as da nuvem), abra ou restaure uma, e compare duas com o que mudou mostrado em cores.
keywords: histórico, versões, histórico de versões, restaurar, versão anterior, desfazer um salvamento, comparar, comparar desenhos, dwgcompare, alterações, adicionado, removido, alterado, instantâneo, backup, versões na nuvem
from: 141d37b3
---

## O que você vai criar

Uma olhada em uma versão anterior de um desenho, e uma lista do que é diferente de agora: o que foi adicionado, o que foi removido e o que foi alterado, marcado em cores no desenho.

## Abrir o Histórico

Digite `HISTORY` (ou `HIST`) e pressione {{key:Enter}}, ou escolha {{ui:Histórico…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}. O painel abre ao lado do desenho e continua aberto enquanto você trabalha, para que você possa mover e dar zoom no desenho com as cores nele.

O Histórico funciona no CadCraft Studio. Em um navegador, o painel apenas informa isso.

## De onde vêm as versões

- **Neste computador.** Cada vez que você abre um desenho a partir de um arquivo no Studio, e cada vez que o salva, o Studio guarda uma cópia do arquivo no próprio armazenamento deste computador. A primeira cópia é {{ui:Como foi aberto}}: o arquivo como estava antes do seu primeiro salvamento sobre ele. O Studio guarda as 25 cópias mais recentes de cada desenho, e as mais antigas são removidas primeiro quando todas as cópias juntas passam de 400 MB. Um salvamento que não muda nada não guarda nada. Nada é enviado.
- **Na nuvem.** Quando você abre um desenho dos seus arquivos na nuvem no Studio, o painel também lista {{ui:Na nuvem}}: cada versão que a nuvem guarda, com seu número, quem a salvou e a nota. O painel apenas lê essas versões. O CadCraft ainda não envia seus próprios salvamentos para a nuvem, então estas são as versões salvas de outros dispositivos e da web. Entre novamente no Studio se ele informar que o login expirou.

Um desenho que você ainda não salvou não tem cópias: salve-o primeiro.

## Abrir ou restaurar uma versão

- {{ui:Abrir}} coloca essa versão em uma aba própria. Seu desenho não é alterado.
- {{ui:Restaurar}} substitui este desenho por essa versão. Ele pergunta antes. O Studio guarda uma cópia do desenho como está agora no Histórico (marcada como {{ui:Antes de uma restauração}}) antes de fazer isso, e nada é gravado no arquivo até você salvar. Uma restauração não pode ser desfeita com {{key:Mod+Z}}; use essa cópia.

## Comparar

1. Clique em {{ui:Comparar}} em uma versão. Ela é comparada com {{ui:O desenho como está agora}}; para comparar com outra versão, escolha-a antes em {{ui:Comparar com}}.
2. Leia o resultado abaixo da lista: quantos objetos foram adicionados, removidos e alterados, e a lista deles. Clique em um item da lista para levar a vista até ele.
3. No desenho:
   - objetos **verdes** foram adicionados,
   - objetos **vermelhos** foram removidos (estão apenas na versão mais antiga),
   - objetos **laranja** foram alterados: a nova forma é sólida e a antiga é tracejada.
4. {{ui:Mostrar no desenho}} liga e desliga as cores; {{ui:Limpar as cores}} tira o resultado. Fechar o painel também as limpa.

A lista informa o que mudou em um objeto alterado: o seu texto, se ele foi movido, a sua forma, a sua camada, cor, tipo de linha ou espessura de linha. Cada folha é comparada separadamente; as cores aparecem na folha que está aberta.

:::note
Um desenho não tem um número fixo para cada objeto, então o CadCraft associa os objetos pelo que eles são: o mesmo objeto nos dois lados não mudou; um objeto do mesmo tipo e camada que está dentro do seu próprio tamanho de um objeto antigo é o mesmo objeto, alterado; o que sobrar é adicionado ou removido. Um objeto movido para longe do lugar original aparece como removido em um lugar e adicionado no outro. Uma referência de bloco conta o conteúdo do seu bloco.
:::

## Erros comuns

- **"Nenhuma cópia ainda."** O Studio guarda uma cópia a cada abertura e salvamento de um desenho que tem um arquivo neste computador. Um desenho aberto de uma aba do navegador, ou nunca salvo, não tem nenhuma.
- **A lista da nuvem não aparece.** Ela aparece para um desenho aberto da nuvem no Studio; um arquivo aberto do disco não é um desenho da nuvem.
- **Tudo parece alterado.** Duas versões salvas por programas diferentes gravam o mesmo desenho de formas diferentes (nomes de blocos anônimos, arredondamentos). Compare versões salvas pelo CadCraft.
