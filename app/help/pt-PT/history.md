---
title: Histórico: versões e o que mudou
summary: Veja as versões de um desenho (cópias que o Studio guarda ao guardar, e as da nuvem), abra ou restaure uma, e compare duas com as alterações mostradas a cores.
keywords: histórico, versões, histórico de versões, restaurar, versão anterior, anular um guardar, comparar, comparar desenhos, dwgcompare, alterações, acrescentado, removido, alterado, instantâneo, cópia de segurança, versões na nuvem
from: 141d37b3
---

## O que vai criar

Uma vista de uma versão anterior de um desenho, e uma lista do que é diferente de agora: o que foi acrescentado, o que foi removido e o que foi alterado, marcado a cores no desenho.

## Abrir o Histórico

Escreva `HISTORY` (ou `HIST`) e prima {{key:Enter}}, ou escolha {{ui:Histórico…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}. O painel abre ao lado do desenho e fica aberto enquanto trabalha, para poder deslocar a vista e fazer zoom no desenho com as cores nele.

O Histórico funciona no CadCraft Studio. Num navegador, o painel limita-se a dizê-lo.

## De onde vêm as versões

- **Neste computador.** Sempre que abre um desenho a partir de um ficheiro no Studio, e sempre que o guarda, o Studio guarda uma cópia do ficheiro no seu próprio armazenamento neste computador. A primeira cópia é {{ui:Tal como foi aberto}}: o ficheiro tal como estava antes do seu primeiro guardar por cima. O Studio mantém as 25 cópias mais recentes de cada desenho, e as mais antigas saem primeiro quando todas as cópias juntas ultrapassam 400 MB. Um guardar que não altera nada não guarda nada. Nada é enviado.
- **Na nuvem.** Quando abre um desenho dos seus ficheiros na nuvem no Studio, o painel lista também {{ui:Na nuvem}}: todas as versões que a nuvem tem, com o número, quem as guardou e a nota. O painel apenas as lê. O CadCraft ainda não envia os seus próprios guardares para a nuvem, por isso estas são as versões guardadas noutros dispositivos e na web. Volte a iniciar sessão no Studio se indicar que a sessão expirou.

Um desenho que ainda não guardou não tem cópias: guarde-o primeiro.

## Abrir ou restaurar uma versão

- {{ui:Abrir}} põe essa versão num separador próprio. O seu desenho não é alterado.
- {{ui:Restaurar}} substitui este desenho por essa versão. Pergunta primeiro. Antes de o fazer, o Studio guarda uma cópia do desenho tal como está agora no Histórico (marcada como {{ui:Antes de um restauro}}), e nada é escrito no ficheiro enquanto não guardar. Um restauro não pode ser anulado com {{key:Mod+Z}}; use essa cópia.

## Comparar

1. Clique em {{ui:Comparar}} numa versão. É comparada com {{ui:O desenho tal como está agora}}; para a comparar com outra versão, escolha primeiro essa em {{ui:Comparar com}}.
2. Leia o resultado debaixo da lista: quantos objetos foram acrescentados, removidos e alterados, e a lista deles. Clique num item da lista para mover a vista até ele.
3. No desenho:
   - objetos a **verde** foram acrescentados,
   - objetos a **vermelho** foram removidos (existem apenas na versão mais antiga),
   - objetos a **laranja** foram alterados: a nova forma é sólida e a antiga tracejada.
4. {{ui:Mostrar no desenho}} liga e desliga as cores; {{ui:Limpar as cores}} retira o resultado. Fechar o painel também as limpa.

A lista indica o que mudou num objeto alterado: o texto, se foi movido, a forma, a camada, a cor, o tipo de linha ou a espessura de linha. Cada folha é comparada à parte; as cores aparecem na folha que está aberta.

:::note
Um desenho não tem um número permanente para cada objeto, por isso o CadCraft faz corresponder os objetos pelo que são: o mesmo objeto nos dois lados mantém-se sem alterações; um objeto do mesmo tipo e camada que esteja dentro do seu próprio tamanho de um objeto antigo é o mesmo objeto, alterado; o que sobra é acrescentado ou removido. Um objeto movido para longe do sítio onde estava aparece como removido num sítio e acrescentado noutro. Uma referência de bloco conta o conteúdo do seu bloco.
:::

## Erros comuns

- **"Ainda não há cópias."** O Studio guarda uma cópia em cada abertura e em cada guardar de um desenho que tem um ficheiro neste computador. Um desenho aberto a partir de um separador do navegador, ou nunca guardado, não tem nenhuma.
- **A lista da nuvem não aparece.** Aparece para um desenho aberto da nuvem no Studio; um ficheiro aberto a partir do disco não é um desenho da nuvem.
- **Tudo parece alterado.** Duas versões guardadas por programas diferentes escrevem o mesmo desenho de formas diferentes (nomes de blocos anónimos, arredondamentos). Compare versões guardadas pelo CadCraft.
