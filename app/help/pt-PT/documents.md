---
title: Documentos: check-out, revisões e libertação
summary: Manter sob controlo os desenhos de uma pasta de projeto: fazer check-out de um ficheiro para que ninguém mais o altere, fazer check-in como uma nova revisão, enviá-lo para revisão e libertá-lo com o nome de um aprovador; histórico, o que utiliza o quê, uma lista de materiais e legendas que mostram a revisão.
keywords: definições do projeto, aprovadores, administradores, letras de revisão, ASME, só de leitura, comparar revisões, abrir cópia, partcraft, bimcraft, documents, DOCUMENTS, DOCS, cofre, gestão documental, pdm, check out, check in, checkout, checkin, bloquear, revisão, rev, letra de revisão, libertação, libertado, aprovar, aprovação, verificação, obsoleto, onde é utilizado, bom, lista de materiais, legenda, quadro de revisões, pasta do projeto
from: ee938722
---

## O que vai criar

Uma pasta de projeto em que cada desenho tem uma revisão (A.1, A.2 … depois A, B …) e um estado (Em curso, Para revisão, Libertado, Obsoleto), em que apenas uma pessoa de cada vez pode alterar um ficheiro, e em que cada check-out, check-in, aprovação e check-out quebrado fica registado com quem o fez e quando.

Tudo fica guardado na própria pasta, numa pasta oculta `.ccvault` ao lado dos seus desenhos. Uma pasta numa unidade partilhada ou numa pasta sincronizada serve para uma equipa inteira. Não há servidor e nada é carregado.

## Abrir Documentos

Escreva `DOCUMENTS` (ou `DOCS`) e prima {{key:Enter}}. O painel abre-se ao lado do desenho.

Clique em {{ui:Escolher a pasta do projeto}} e escolha a pasta que contém os desenhos do projeto. As pastas de projeto funcionam no CadCraft Studio e em navegadores que conseguem abrir uma pasta (Chrome, Edge). Noutros navegadores, o painel indica-o.

Na primeira vez, escreva o seu nome (vai em tudo o que faz) e o nome deste computador. Se tiver iniciado sessão, o seu nome já lá está.

## Criar um cofre

Uma pasta que ainda não é um cofre oferece {{ui:Criar um cofre nesta pasta}}. Escreva o nome do projeto. Depois abra {{ui:Ficheiros fora do cofre}} e escolha {{ui:Adicionar}} ao lado de cada ficheiro a colocar sob controlo. Um ficheiro que adicionar começa na revisão **A.1**, Em curso.

## Alterar um desenho

1. Clique em {{ui:Abrir}} ao lado de um desenho. Abre-se no CadCraft. Se não estiver com check-out para si, pode vê-lo mas não o alterar: {{ui:Guardar}} recusa-se a escrever por cima e diz porquê (use {{ui:Guardar como}} para guardar uma cópia sua).
2. Clique em {{ui:Check-out}}. Ninguém mais o pode fazer check-out agora; o painel mostra quem o tem, em que computador e desde quando.
3. Desenhe.
4. Clique em {{ui:Check-in}} e indique o que mudou. O desenho que tem aberto é guardado na pasta do projeto no seu próprio formato e torna-se a revisão seguinte (A.1, depois A.2). Um check-in sem alterações mantém a revisão.

{{ui:Anular check-out}} restitui o ficheiro sem criar uma nova revisão.

## Revisão e libertação

- {{ui:Enviar para revisão}}: o ficheiro fica só de leitura enquanto é revisto.
- {{ui:Aprovar}}: escreva o nome do aprovador. A.3 passa a **A**, Libertado. Os ficheiros libertados ficam só de leitura.
- {{ui:Devolver}}: volta a Em curso, com o motivo.
- {{ui:Nova revisão}} num ficheiro libertado faz-lhe check-out para a letra seguinte: o primeiro check-in será **B.1**. {{ui:Anular check-out}} antes disso deixa-o em A.
- {{ui:Tornar obsoleto}} retira um ficheiro libertado.

Um projeto pode manter uma lista de quem pode aprovar, e pode exigir que o aprovador não seja a pessoa que fez o check-in do ficheiro (ver Definições do projeto abaixo).

## Definições do projeto

Abra {{ui:Definições do projeto}} no painel:

- **Aprovadores**: um nome por linha. Quando há algum, só eles podem aprovar uma libertação.
- **O aprovador tem de ser outra pessoa que não o autor**: a regra dos « quatro olhos ».
- **Administradores**: um nome por linha. Quando há algum, só eles podem quebrar o check-out de outra pessoa ou alterar estas definições.
- **Letras de revisão a omitir**: {{ui:Usar a sequência ASME Y14.35}} salta I, O, Q, S, X e Z, ou escreva as suas próprias letras. As letras já atribuídas mantêm-se; a escolha aplica-se às revisões seguintes.
- **Um check-out conta como desatualizado após**: o número de dias (14 por predefinição).

Clique em {{ui:Guardar definições}}. A alteração fica registada no registo, com quem a fez.

## Alguém deixou um ficheiro com check-out

{{ui:Quebrar check-out}} liberta um ficheiro que outra pessoa tem com check-out (está ausente ou o computador avariou). Tem de escrever um motivo: fica registado no registo, com o check-out de quem era. Quando o projeto tem administradores, só eles o podem fazer. Um check-out com mais de 14 dias é assinalado como antigo.

## Histórico, revisões, utiliza, utilizado por

Clique no nome de um ficheiro para ver:

- {{ui:Histórico}}: todos os eventos, do mais recente para o mais antigo, com quem, em que computador e quando.
- {{ui:Revisões}}: cada revisão guardada. Uma cópia de cada revisão está no cofre (o mesmo conteúdo é guardado uma só vez). {{ui:Abrir cópia}} abre essa revisão como uma cópia simples que não pode substituir o ficheiro do cofre. {{ui:Comparar com}} lista o que foi acrescentado, removido e alterado entre essa revisão e a anterior (ou qualquer outra que escolher), e colore-o no desenho.
- {{ui:Utiliza}}: os desenhos a que liga (xrefs), os documentos para que aponta um modelo IFC, as peças de uma montagem do PartCraft.
- {{ui:Utilizado por}}: todos os ficheiros do cofre que utilizam este.

{{ui:Lista de materiais (CSV)}} guarda a lista de tudo o que um ficheiro utiliza, nível a nível, com quantidades, revisões e estados, para uma folha de cálculo.

## Um quadro de revisões na folha

Com um desenho aberto que tenha um layout, clique em {{ui:Quadro de revisões}}. Uma tabela das revisões libertadas (revisão, data, por, aprovado, descrição) é desenhada no canto superior direito da folha que está a ver. Quando aprova uma libertação, a tabela é atualizada.

## Revisão na legenda

Atribua a um atributo da sua legenda uma destas etiquetas e clique em {{ui:Preencher legendas}} no desenho aberto:

| Etiqueta | Preenchido com |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | a revisão (B, ou B.2 enquanto está a ser trabalhada) |
| `VAULT.STATE` | o estado (Libertado …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | a data da revisão mais recente |
| `VAULT.APPROVER`, `APPROVED_BY` | quem aprovou a libertação mais recente |

## PartCraft e BimCraft

O PartCraft e o BimCraft têm o mesmo painel Documents para os seus próprios ficheiros: peças e montagens no PartCraft, modelos IFC no BimCraft. O check-in guarda o modelo aberto na pasta do projeto, e uma montagem mostra quais as peças que utiliza e uma lista de materiais.

## Bom saber

- Duas pessoas na mesma pasta partilhada não podem fazer check-out de um ficheiro ao mesmo tempo: o check-out é um ficheiro que o sistema recusa criar duas vezes. Num navegador, e num Studio cuja shell é anterior a esta funcionalidade, isto é tão rigoroso quanto a pasta permitir: dois check-outs no mesmo instante podem ambos ter êxito. O painel indica qual se aplica.
- Não edite nem apague a pasta `.ccvault` manualmente. O registo que ela contém é o histórico; o cofre reconstrói a sua lista a partir dele, se necessário.
- Alterar um ficheiro na pasta sem fazer check-out é mostrado como {{ui:Alterado na pasta sem check-out}}.
